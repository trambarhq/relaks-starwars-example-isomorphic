import { createElement } from 'react';
import { hydrate, render } from 'react-dom';
import { FrontEnd } from 'front-end';
import { routes } from 'routing';
import DjangoDataSource from 'relaks-django-data-source';
import RouteManager from 'relaks-route-manager';
import { harvest } from 'relaks-harvest';
import { plant } from 'relaks';

const dataSourceBaseURL = '/starwars-react/api';
const pageBasePath = '/starwars-react';

if (typeof(window) === 'object') {
    async function initialize(evt) {
        // create data source
        const host = `${location.protocol}//${location.host}`;
        const dataSource = new DjangoDataSource({
            baseURL: `${host}${dataSourceBaseURL}`,
        });
        dataSource.activate();

        // create route manager
        const routeManager = new RouteManager({
            routes,
            basePath: pageBasePath,
            preloadingDelay: 2000,
        });
        routeManager.activate();
        await routeManager.start();

        const container = document.getElementById('react-container');
        const ssrElement = createElement(FrontEnd, { dataSource, routeManager, ssr: 'hydrate' });
        const seeds = await harvest(ssrElement, { seeds: true });
        plant(seeds);
        hydrate(ssrElement, container);

        const csrElement = createElement(FrontEnd, { dataSource, routeManager });
        render(csrElement, container);
    }

    window.addEventListener('load', initialize);
} else {
    async function serverSideRender(options) {
        const dataSource = new DjangoDataSource({
            baseURL: `${options.host}${dataSourceBaseURL}`,
            fetchFunc: options.fetch,
        });
        dataSource.activate();

        const routeManager = new RouteManager({
            routes,
            basePath: pageBasePath,
        });
        routeManager.activate();
        await routeManager.start(options.path);

        const ssrElement = createElement(FrontEnd, { dataSource, routeManager, ssr: options.target });
        return harvest(ssrElement);
    }

    exports.render = serverSideRender;
}
