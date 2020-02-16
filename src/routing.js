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
      match.params.module = require('./pages/welcome-page.jsx');
    }
  },
  'film-list': {
    path: '/films/',
    load: (match) => {
      match.params.module = require('./pages/film-list.jsx');
    }
  },
  'film-summary': {
    path: '/films/${id}/',
    params: { id: Number },
    load: (match) => {
      match.params.module = require('./pages/film-page.jsx');
    }
  },
  'character-list': {
    path: '/characters/',
    load: (match) => {
      match.params.module = require('./pages/character-list.jsx');
    }
  },
  'character-summary': {
    path: '/characters/${id}/',
    params: { id: Number },
    load: (match) => {
      match.params.module = require('./pages/character-page.jsx');
    }
  },
  'planet-list': {
    path: '/planets/',
    load: (match) => {
      match.params.module = require('./pages/planet-list.jsx');
    }
  },
  'planet-summary': {
    path: '/planets/${id}/',
    params: { id: Number },
    load: (match) => {
      match.params.module = require('./pages/planet-page.jsx');
    }
  },
  'species-list': {
    path: '/species/',
    load: (match) => {
      match.params.module = require('./pages/species-list.jsx');
    }
  },
  'species-summary': {
    path: '/species/${id}/',
    params: { id: Number },
    load: (match) => {
      match.params.module = require('./pages/species-page.jsx');
    }
  },
  'vehicle-list': {
    path: '/vehicles/',
    load: (match) => {
      match.params.module = require('./pages/vehicle-list.jsx');
    }
  },
  'vehicle-summary': {
    path: '/vehicles/${id}/',
    params: { id: Number },
    load: (match) => {
      match.params.module = require('./pages/vehicle-page.jsx');
    }
  },
  'starship-list': {
    path: '/starships/',
    load: (match) => {
      match.params.module = require('./pages/starship-list.jsx');
    }
  },
  'starship-summary': {
    path: '/starship/${id}/',
    params: { id: Number },
    load: (match) => {
      match.params.module = require('./pages/starship-page.jsx');
    }
  },
};

export { Route, routes };
