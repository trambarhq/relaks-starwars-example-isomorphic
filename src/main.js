import { createElement } from 'react';
import { hydrate } from 'react-dom';
import { Application } from 'application';
import { routes } from 'routing';
import DjangoDataSource from 'relaks-django-data-source';
import RouteManager from 'relaks-route-manager';
import { harvest } from 'relaks-harvest';

var dataSourceBaseURL = '/starwars/api';
var pageBasePath = '/starwars';

if (typeof(window) === 'object') {
    async function initialize(evt) {
        // create data source
        let dataSource = new DjangoDataSource({
            baseURL: dataSourceBaseURL,
        });
        dataSource.activate();

        // create route manager
        let routeManager = new RouteManager({
            routes,
            basePath: pageBasePath,
        });
        routeManager.activate();
        await routeManager.start();

        let appContainer = document.getElementById('app-container');
        if (!appContainer) {
            throw new Error('Unable to find app element in DOM');
        }
        let appElement = createElement(Application, { dataSource, routeManager });
        await harvest(appElement);
        hydrate(appElement, appContainer);
    }

    window.addEventListener('load', initialize);
} else {
    async function serverSideRender(options) {
        let dataSource = new DjangoDataSource({
            baseURL: `${options.host}${dataSourceBaseURL}`,
        });
        dataSource.activate();

        let routeManager = new RouteManager({
            routes,
            basePath: pageBasePath,
        });
        routeManager.activate();
        await routeManager.start(options.path);

        let appElement = createElement(Application, { dataSource, routeManager, ssr: options.target });
        return harvest(appElement);
    }

    exports.render = serverSideRender;
}
