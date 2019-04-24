class Route {
    constructor(routeManager) {
        this.routeManager = routeManager;
        this.name = routeManager.name;
        this.params = routeManager.params;
        this.history = routeManager.history;
    }

    change(url, options) {
        return this.routeManager.change(url, options);
    }

    find(name, params) {
        return this.routeManager.find(name, params);
    }

    extractID(url) {
        let si = url.lastIndexOf('/');
        let ei;
        if (si === url.length - 1) {
            ei = si;
            si = url.lastIndexOf('/', ei - 1);
        }
        const text = url.substring(si + 1, ei);
        return parseInt(text);
    }
}

let routes = {
    'welcome': {
        path: '/',
        load: (match) => {
            match.params.module = require('pages/welcome-page');
        }
    },
    'film-list': {
        path: '/films/',
        load: (match) => {
            match.params.module = require('pages/film-list');
        }
    },
    'film-summary': {
        path: '/films/${id}/',
        params: { id: Number },
        load: (match) => {
            match.params.module = require('pages/film-page');
        }
    },
    'character-list': {
        path: '/characters/',
        load: (match) => {
            match.params.module = require('pages/character-list');
        }
    },
    'character-summary': {
        path: '/characters/${id}/',
        params: { id: Number },
        load: (match) => {
            match.params.module = require('pages/character-page');
        }
    },
    'planet-list': {
        path: '/planets/',
        load: (match) => {
            match.params.module = require('pages/planet-list');
        }
    },
    'planet-summary': {
        path: '/planets/${id}/',
        params: { id: Number },
        load: (match) => {
            match.params.module = require('pages/planet-page');
        }
    },
    'species-list': {
        path: '/species/',
        load: (match) => {
            match.params.module = require('pages/species-list');
        }
    },
    'species-summary': {
        path: '/species/${id}/',
        params: { id: Number },
        load: (match) => {
            match.params.module = require('pages/species-page');
        }
    },
    'vehicle-list': {
        path: '/vehicles/',
        load: (match) => {
            match.params.module = require('pages/vehicle-list');
        }
    },
    'vehicle-summary': {
        path: '/vehicles/${id}/',
        params: { id: Number },
        load: (match) => {
            match.params.module = require('pages/vehicle-page');
        }
    },
    'starship-list': {
        path: '/starships/',
        load: (match) => {
            match.params.module = require('pages/starship-list');
        }
    },
    'starship-summary': {
        path: '/starship/${id}/',
        params: { id: Number },
        load: (match) => {
            match.params.module = require('pages/starship-page');
        }
    },
};

export { Route, routes };
