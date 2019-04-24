import 'preact/devtools';
import { h, render } from 'preact';
import { FrontEnd } from 'front-end';
import { routes } from 'routing';
import DjangoDataSource from 'relaks-django-data-source';
import RouteManager from 'relaks-route-manager';
import { harvest } from 'relaks-harvest/preact';
import { plant } from 'relaks/preact';

window.addEventListener('load', initialize);

const dataSourceBaseURL = '/starwars/api';
const pageBasePath = '/starwars';

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
    const ssrElement = h(FrontEnd, { dataSource, routeManager, ssr: 'hydrate' });
    const seeds = await harvest(ssrElement, { seeds: true });
    plant(seeds);
    render(ssrElement, container, container.firstChild);

    const csrElement = h(FrontEnd, { dataSource, routeManager });
    render(csrElement, container, container.firstChild);
}
