const FS = require('fs');
const DataSource = require('relaks-django-data-source');
global.fetch = require('cross-fetch');

const baseURL = 'https://swapi.co/api';
const tables = [
  'people',
  'films',
  'planets',
  'species',
  'starships',
  'vehicles'
];
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

const dataSource = new DataSource({ baseURL });

tables.forEach((table) => {
  const url = `/${table}/`;
  console.log(`Downloading ${url}...`);
  dataSource.fetchList(url, { minimum: '100%' }).then((objects) => {
    console.log(`Downloaded ${url} (${objects.length} objects)`);
    const transformed = objects.map((object) => {
      const keys = Object.keys(object);
      const id = extractID(object.url);
      const newObject = { id };
      for (let name in object) {
        if (name !== 'url') {
          const value = object[name];
          const relatedTable = relations[name];
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
    const json = JSON.stringify(transformed, undefined, 2);
    const path = `${__dirname}/data/${table}.json`;
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
  const m = /(\d+)\/$/.exec(url);
  if (m) {
    return parseInt(m[0]);
  } else {
    return url;
  }
}
