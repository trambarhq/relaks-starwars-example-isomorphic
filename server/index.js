const Util = require('util');
const FS = require('fs');
const OS = require('os');
const Express = require('express');
const CrossFetch = require('cross-fetch');
const DNSCache = require('dnscache');
const SpiderDetector = require('spider-detector')
const FrontEnd = require('./client/front-end');

// enable DNS caching
DNSCache({ enable: true, ttl: 300, cachesize: 100 });

const basePath = FrontEnd.basePath;
const basePathAPI = `${basePath}/api`;
const perPage = 10;
const serverPort = 8080;

const app = Express();
app.set('json spaces', 2);
app.use(SpiderDetector.middleware());
app.use(`${basePath}`, Express.static(`${__dirname}/www`));
app.get(`${basePathAPI}/:table/:id`, handleObjectRequest);
app.get(`${basePathAPI}/:table/`, handleListRequest);
app.get(`${basePath}/*`, handlePageRequest);
app.listen(serverPort);

async function handlePageRequest(req, res) {
    try {
        const host = getHostLocation(req);
        const path = req.url;
        const noScript = (req.query.js === '0');
        const target = (req.isSpider() || noScript) ? 'seo' : 'hydrate';
        const options = { host, path, target, fetch: CrossFetch };
        const frontEndHTML = await FrontEnd.render(options);
        const indexHTMLPath = `${__dirname}/client/index.html`;
        let html = await replaceHTMLComment(indexHTMLPath, 'REACT', frontEndHTML);
        if (target === 'hydrate') {
            // add <noscript> tag to redirect to SEO version
            const meta = `<meta http-equiv=refresh content="0; url=?js=0">`;
            html += `<noscript>${meta}</noscript>`;
        }
        res.type('html').send(html);
    } catch (err) {
        handleRequestError(res, err);
    }
}

function getHostLocation(req) {
    // handle situation when we're behind Nginx
    const hostname = req.headers['x-forwarded-host'] || req.hostname;
    const protocol = req.headers['x-forwarded-proto'] || req.protocol;
    const port = req.headers['x-forwarded-port'] || serverPort;
    let url = `${protocol}://${hostname}`;
    if ((protocol === 'http' && port !== 80) || (protocol === 'http' && port !== 443)) {
        url += `:${port}`;
    }
    return url;
}

const readFile = Util.promisify(FS.readFile);

async function replaceHTMLComment(path, comment, newElement) {
    const text = await readFile(path, 'utf-8');
    const tag = `<!--${comment}-->`;
    return text.replace(tag, newElement);
}

async function handleObjectRequest(req, res) {
    try {
        const host = getHostLocation(req);
        const id = parseInt(req.params.id);
        const table = req.params.table;
        const objects = await loadTable(table);
        const object = objects.find((object) => {
            return (object.id === id);
        });
        if (!object) {
            throw Error('Not found');
        }
        const result = attachHyperlinkKeys(host, table, object);
        res.json(result);
    } catch (err) {
        handleRequestError(res, err);
    }
}

async function handleListRequest(req, res) {
    try {
        const host = getHostLocation(req);
        const page = parseInt(req.query.page) || 1;
        const table = req.params.table;
        const objects = await loadTable(table);
        const start = (page - 1) * perPage;
        const end = start + perPage;
        const slice = objects.slice(start, end)
        const count = objects.length;
        const next = (end < count) ? getPageURL(host, table, page + 1) : null;
        const prev = (page > 1) ? getPageURL(host, table, page - 1) : null;
        const results = slice.map(attachHyperlinkKeys.bind(null, host, table));
        res.json({ count, next, prev, results });
    } catch (err) {
        handleRequestError(res, err);
    }
}

function handleRequestError(res, err) {
    res.type('text').status(400).send(err.stack);
}

async function loadTable(table) {
    const path = `${__dirname}/data/${table}.json`;
    const json = await readFile(path, 'utf-8');
    return JSON.parse(json);
}

function getObjectURL(host, table, id) {
    return `${host}${basePathAPI}/${table}/${id}/`
}

function getPageURL(host, table, page) {
    let url = `${host}${basePathAPI}/${table}/`;
    if (page > 1) {
        url += `?page=${page}`;
    }
    return url;
}

const relations = {
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
    const url = getObjectURL(host, table, object.id);
    const newObject = { url };
    for (let name in object) {
        if (name !== 'id') {
            let value = object[name];
            let relatedTable = relations[name];
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
