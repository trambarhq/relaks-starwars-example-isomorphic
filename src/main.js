import 'preact/devtools';
import { h, render } from 'preact';
import { Application } from 'application';
import { routes } from 'routing';
import DjangoDataSource from 'relaks-django-data-source';
import RouteManager from 'relaks-route-manager';
import { harvest } from 'relaks-harvest/preact';

const dataSourceBaseURL = '/starwars/api';
const pageBasePath = '/starwars';

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

        let appContainer = document.getElementById('app-container');
        if (!appContainer) {
            throw new Error('Unable to find app element in DOM');
        }
        let ssrElement = h(Application, { dataSource, routeManager, ssr: 'hydrate' });
        await harvest(ssrElement);
        let appElement = h(Application, { dataSource, routeManager });
        render(appElement, appContainer, appContainer.firstChild);
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

        let ssrElement = h(Application, { dataSource, routeManager, ssr: options.target });
        return harvest(ssrElement);
    }

    exports.render = serverSideRender;
}
