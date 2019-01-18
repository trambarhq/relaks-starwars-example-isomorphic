import { createElement } from 'react';
import { hydrate, render } from 'react-dom';
import { FrontEnd } from 'front-end';
import { routes } from 'routing';
import DjangoDataSource from 'relaks-django-data-source';
import RouteManager from 'relaks-route-manager';
import { harvest } from 'relaks-harvest';
import Relaks from 'relaks';

const dataSourceBaseURL = '/starwars-react/api';
const pageBasePath = '/starwars-react';

if (typeof(window) === 'object') {
    async function initialize(evt) {
        // create data source
        let host = `${location.protocol}//${location.host}`;
        let dataSource = new DjangoDataSource({
            baseURL: `${host}${dataSourceBaseURL}`,
        });
        dataSource.activate();

        // create route manager
        let routeManager = new RouteManager({
            routes,
            basePath: pageBasePath,
            preloadingDelay: 2000,
        });
        routeManager.activate();
        await routeManager.start();

        let container = document.getElementById('react-container');
        let ssrElement = createElement(FrontEnd, { dataSource, routeManager, ssr: 'hydrate' });
        let seeds = await harvest(ssrElement, { seeds: true });
        Relaks.set('seeds', seeds);
        hydrate(ssrElement, container);

        let csrElement = createElement(FrontEnd, { dataSource, routeManager });
        render(csrElement, container);
    }

    window.addEventListener('load', initialize);
} else {
    async function serverSideRender(options) {
        let dataSource = new DjangoDataSource({
            baseURL: `${options.host}${dataSourceBaseURL}`,
            fetchFunc: options.fetch,
        });
        dataSource.activate();

        let routeManager = new RouteManager({
            routes,
            basePath: pageBasePath,
        });
        routeManager.activate();
        await routeManager.start(options.path);

        let ssrElement = createElement(FrontEnd, { dataSource, routeManager, ssr: options.target });
        return harvest(ssrElement);
    }

    exports.render = serverSideRender;
}
