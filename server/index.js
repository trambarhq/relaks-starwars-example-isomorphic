var FS = require('fs');
var Express = require('express');
var PreactSSR = require('preact-render-to-string');
var ClientApp = require('./client/app');

// Make fetch() available to app and enable DNS caching
global.fetch = require('cross-fetch');
var DNSCache = require('dnscache');
DNSCache({ enable: true, ttl: 300, cachesize: 100 });

var host = `http://localhost:8080`;
var perPage = 25;
var apiBaseURL = `${host}/starwars/api`;

var app = Express();
app.set('json spaces', 2);
app.use('/starwars', Express.static(`${__dirname}/www`));
app.get('/starwars/api/:table/:id/', handleObjectRequest);
app.get('/starwars/api/:table/', handleListRequest);
app.get('/starwars/*', handlePageRequest);
app.listen(8080);

function handleObjectRequest(req, res) {
    var id = parseInt(req.params.id);
    var table = req.params.table;
    return loadTable(table).then((objects) => {
        var object = objects.find((object) => {
            return (object.id === id);
        });
        if (!object) {
            throw Error('Not found');
        }
        var result = attachHyperlinkKeys(table, object);
        res.json(result);
    }).catch((err) => {
        handleRequestError(res, err);
    });
}

function handleListRequest(req, res) {
    var page = parseInt(req.query.page) || 1;
    var table = req.params.table;
    return loadTable(table).then((objects) => {
        var start = (page - 1) * perPage;
        var end = start + perPage;
        var slice = objects.slice(start, end)
        var count = objects.length;
        var next = (end < count) ? getPageURL(table, page + 1) : null;
        var prev = (page > 1) ? getPageURL(table, page - 1) : null;
        var results = slice.map(attachHyperlinkKeys.bind(null, table));
        res.json({ count, next, prev, results });
    }).catch((err) => {
        handleRequestError(res, err);
    });
}

function handlePageRequest(req, res) {
    var target = 'hydrate';
    var path = req.url;
    var options = { host, path, target };
    ClientApp.render(options).then((rootNode) => {
        var appHTML = PreactSSR.render(rootNode);
        var indexHTMLPath = `${__dirname}/client/index.html`;
        return replaceHTMLComment(indexHTMLPath, 'APP', appHTML).then((html) => {
            res.type('html').send(html);
        });
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

function getObjectURL(table, id) {
    return `${apiBaseURL}/${table}/${id}/`
}

function getPageURL(table, page) {
    var url = `${apiBaseURL}/${table}/`;
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

function attachHyperlinkKeys(table, object) {
    var url = getObjectURL(table, object.id);
    var newObject = { url };
    for (var name in object) {
        if (name !== 'id') {
            var value = object[name];
            var relatedTable = relations[name];
            if (relatedTable) {
                if (value instanceof Array) {
                    value = value.map(getObjectURL.bind(null, relatedTable));
                } else {
                    value = getObjectURL(relatedTable, value);
                }
            }
            newObject[name] = value;
        }
    }
    return newObject;
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
