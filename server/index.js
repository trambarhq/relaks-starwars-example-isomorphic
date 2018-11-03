var FS = require('fs');
var OS = require('os');
var Express = require('express');
var SpiderDetector = require('spider-detector')
var PreactSSR = require('preact-render-to-string');
var ClientApp = require('./client/app');

// Make fetch() available to app and enable DNS caching
global.fetch = require('cross-fetch');
var DNSCache = require('dnscache');
DNSCache({ enable: true, ttl: 300, cachesize: 100 });

var basePath = `starwars`;
var basePathAPI = `${basePath}/api`;
var perPage = 10;
var serverPort = 8080;

var app = Express();
app.set('json spaces', 2);
app.use(SpiderDetector.middleware());
app.use(`/${basePath}`, Express.static(`${__dirname}/www`));
app.get(`/${basePathAPI}/:table/:id`, handleObjectRequest);
app.get(`/${basePathAPI}/:table/`, handleListRequest);
app.get(`/${basePath}/*`, handlePageRequest);
app.listen(serverPort);

function handlePageRequest(req, res) {
    var host = getHostLocation(req);
    var path = req.url;
    var noScript = (req.query.js === '0')
    var target = (req.isSpider() || noScript) ? 'seo' : 'hydrate';
    var options = { host, path, target };
    ClientApp.render(options).then((rootNode) => {
        var appHTML = PreactSSR.render(rootNode);
        var indexHTMLPath = `${__dirname}/client/index.html`;
        if (target === 'hydrate') {
            // add <noscript> tag to redirect to SEO version
            var meta = `<meta http-equiv=refresh content="0; url=?js=0">`;
            appHTML += `<noscript>${meta}</noscript>`;
        }
        return replaceHTMLComment(indexHTMLPath, 'APP', appHTML).then((html) => {
            res.type('html').send(html);
        });
    }).catch((err) => {
        handleRequestError(res, err);
    });
}

function getHostLocation(req) {
    // handle situation when we're behind Nginx
    var hostname = req.headers['x-forwarded-host'] || req.hostname;
    var protocol = req.headers['x-forwarded-proto'] || req.protocol;
    var port = req.headers['x-forwarded-port'] || serverPort;
    var url = `${protocol}://${hostname}`;
    if ((protocol === 'http' && port !== 80) || (protocol === 'http' && port !== 443)) {
        url += `:${port}`;
    }
    return url;
}

function replaceHTMLComment(path, comment, newElement) {
    return new Promise((resolve, reject) => {
        FS.readFile(path, 'utf-8', (err, text) => {
            if (!err) {
                var tag = `<!--${comment}-->`;
                var result = text.replace(tag, newElement);
                resolve(result);
            } else {
                reject(err);
            }
        });
    });
}

function handleObjectRequest(req, res) {
    var host = getHostLocation(req);
    var id = parseInt(req.params.id);
    var table = req.params.table;
    return loadTable(table).then((objects) => {
        var object = objects.find((object) => {
            return (object.id === id);
        });
        if (!object) {
            throw Error('Not found');
        }
        var result = attachHyperlinkKeys(host, table, object);
        res.json(result);
    }).catch((err) => {
        handleRequestError(res, err);
    });
}

function handleListRequest(req, res) {
    var host = getHostLocation(req);
    var page = parseInt(req.query.page) || 1;
    var table = req.params.table;
    return loadTable(table).then((objects) => {
        var start = (page - 1) * perPage;
        var end = start + perPage;
        var slice = objects.slice(start, end)
        var count = objects.length;
        var next = (end < count) ? getPageURL(host, table, page + 1) : null;
        var prev = (page > 1) ? getPageURL(host, table, page - 1) : null;
        var results = slice.map(attachHyperlinkKeys.bind(null, host, table));
        res.json({ count, next, prev, results });
    }).catch((err) => {
        handleRequestError(res, err);
    });
}

function handleRequestError(res, err) {
    res.type('text').status(400).send(err.stack);
}

function loadTable(table) {
    var path = `${__dirname}/data/${table}.json`;
    return new Promise((resolve, reject) => {
        FS.readFile(path, 'utf-8', (err, json) => {
            if (!err) {
                try {
                    resolve(JSON.parse(json));
                } catch(err) {
                    reject(err);
                }
            } else {
                reject(err);
            }
        });
    });
}

function getObjectURL(host, table, id) {
    return `${host}/${basePathAPI}/${table}/${id}/`
}

function getPageURL(host, table, page) {
    var url = `${host}/${basePathAPI}/${table}/`;
    if (page > 1) {
        url += `?page=${page}`;
    }
    return url;
}

var relations = {
    characters: 'people',
    films: 'films',
    homeworld: 'planets',
    people: 'people',
    pilots: 'people',
    planets: 'planets',
    residents: 'people',
    species: 'species',
    starships: 'starships',
    vehicles: 'vehicles',
};

function attachHyperlinkKeys(host, table, object) {
    var url = getObjectURL(host, table, object.id);
    var newObject = { url };
    for (var name in object) {
        if (name !== 'id') {
            var value = object[name];
            var relatedTable = relations[name];
            if (relatedTable) {
                if (value instanceof Array) {
                    value = value.map(getObjectURL.bind(null, host, relatedTable));
                } else {
                    value = getObjectURL(host, relatedTable, value);
                }
            }
            newObject[name] = value;
        }
    }
    return newObject;
}

process.on('unhandledRejection', (err) => {
    console.error(err);
});
