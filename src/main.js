import 'preact/devtools';
import { h, render } from 'preact';
import { Application } from 'application';
import { routes } from 'routes';
import DjangoDataSource from 'relaks-django-data-source';
import RouteManager from 'relaks-route-manager';
import { harvest } from 'relaks-harvest/preact';

if (typeof(window) === 'object') {
    async function initialize(evt) {
        // create data source
        let dataSource = new DjangoDataSource({
            baseURL: 'https://swapi.co/api',
        });
        await dataSource.initialize();

        // create route manager
        let routeManager = new RouteManager({
            routes,
            basePath: '/starwars'
        });
        await routeManager.initialize();

        let appContainer = document.getElementById('app-container');
        if (!appContainer) {
            throw new Error('Unable to find app element in DOM');
        }
        let appElement = h(Application, { dataSource, routeManager });
        await harvest(appElement);
        render(appElement, appContainer, appContainer.firstChild);
    }

    window.addEventListener('load', initialize);
} else {
    async function serverSideRender(options) {
        let dataSource = new DjangoDataSource({
            baseURL: 'https://swapi.co/api',
        });
        await dataSource.initialize();

        let routeManager = new RouteManager({
            routes,
            basePath: '/starwars',
            initialPath: options.path,
        });
        await routeManager.initialize();

        let appElement = h(Application, { dataSource, routeManager });
        return harvest(appElement);
    }

    exports.render = serverSideRender;
}
