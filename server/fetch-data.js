var FS = require('fs');
var DjangoDataSource = require('relaks-django-data-source');
global.fetch = require('cross-fetch');

var baseURL = 'https://swapi.co/api';
var tables = [
    'people',
    'films',
    'planets',
    'species',
    'starships',
    'vehicles'
];
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

var dataSource = new DjangoDataSource({ baseURL });

tables.forEach((table) => {
    var url = `/${table}/`;
    console.log(`Downloading ${url}...`);
    dataSource.fetchList(url, { minimum: '100%' }).then((objects) => {
        console.log(`Downloaded ${url} (${objects.length} objects)`);
        var transformed = objects.map((object) => {
            var keys = Object.keys(object);
            var id = extractID(object.url);
            var newObject = { id };
            for (var name in object) {
                if (name !== 'url') {
                    var value = object[name];
                    var relatedTable = relations[name];
                    if (relatedTable) {
                        if (value instanceof Array) {
                            value = value.map(extractID);
                        } else {
                            value = extractID(value);
                        }
                    }
                    newObject[name] = value;
                }
            }
            return newObject;
        });
        var json = JSON.stringify(transformed, undefined, 2);
        var path = `${__dirname}/data/${table}.json`;
        FS.writeFile(path, json, (err) => {
            if (!err) {
                console.log(`Saved list to ${path}`);
            } else {
                console.error(err.message);
            }
        });
    });
});

function extractID(url) {
    var m = /(\d+)\/$/.exec(url);
    if (m) {
        return parseInt(m[0]);
    } else {
        return url;
    }
}
