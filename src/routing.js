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
        var si = url.lastIndexOf('/');
        var ei;
        if (si === url.length - 1) {
            ei = si;
            si = url.lastIndexOf('/', ei - 1);
        }
        var text = url.substring(si + 1, ei);
        return parseInt(text);
    }
}

let routes = {
    'welcome': {
        path: '/',
        load: async (match) => {
            match.params.module = await import('pages/welcome-page' /* webpackChunkName: "welcome-page" */);
        }
    },
    'film-list': {
        path: '/films/',
        load: async (match) => {
            match.params.module = await import('pages/film-list' /* webpackChunkName: "film-list" */);
        }
    },
    'film-summary': {
        path: '/films/${id}/',
        params: { id: Number },
        load: async (match) => {
            match.params.module = await import('pages/film-page' /* webpackChunkName: "film-page" */);
        }
    },
    'character-list': {
        path: '/characters/',
        load: async (match) => {
            match.params.module = await import('pages/character-list' /* webpackChunkName: "character-list" */);
        }
    },
    'character-summary': {
        path: '/characters/${id}/',
        params: { id: Number },
        load: async (match) => {
            match.params.module = await import('pages/character-page' /* webpackChunkName: "character-page" */);
        }
    },
    'planet-list': {
        path: '/planets/',
        load: async (match) => {
            match.params.module = await import('pages/planet-list' /* webpackChunkName: "planet-list" */);
        }
    },
    'planet-summary': {
        path: '/planets/${id}/',
        params: { id: Number },
        load: async (match) => {
            match.params.module = await import('pages/planet-page' /* webpackChunkName: "planet-page" */);
        }
    },
    'species-list': {
        path: '/species/',
        load: async (match) => {
            match.params.module = await import('pages/species-list' /* webpackChunkName: "species-list" */);
        }
    },
    'species-summary': {
        path: '/species/${id}/',
        params: { id: Number },
        load: async (match) => {
            match.params.module = await import('pages/species-page' /* webpackChunkName: "species-page" */);
        }
    },
    'vehicle-list': {
        path: '/vehicles/',
        load: async (match) => {
            match.params.module = await import('pages/vehicle-list' /* webpackChunkName: "vehicle-list" */);
        }
    },
    'vehicle-summary': {
        path: '/vehicles/${id}/',
        params: { id: Number },
        load: async (match) => {
            match.params.module = await import('pages/vehicle-page' /* webpackChunkName: "vehicle-page" */);
        }
    },
    'starship-list': {
        path: '/starships/',
        load: async (match) => {
            match.params.module = await import('pages/starship-list' /* webpackChunkName: "starship-list" */);
        }
    },
    'starship-summary': {
        path: '/starship/${id}/',
        params: { id: Number },
        load: async (match) => {
            match.params.module = await import('pages/starship-page' /* webpackChunkName: "starship-page" */);
        }
    },
};

export { Route, routes };
