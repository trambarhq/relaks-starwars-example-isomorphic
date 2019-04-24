import { h } from 'preact';
import renderToString from 'preact-render-to-string';
import { FrontEnd } from 'front-end';
import { routes } from 'routing';
import DjangoDataSource from 'relaks-django-data-source';
import RouteManager from 'relaks-route-manager';
import { harvest } from 'relaks-harvest/preact';
import { plant } from 'relaks/preact';

const dataSourceBaseURL = '/starwars/api';
const pageBasePath = '/starwars';

async function render(options) {
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

    const ssrElement = h(FrontEnd, { dataSource, routeManager, ssr: options.target });
    const rootNode = harvest(ssrElement);
    const html = renderToString(rootNode);
    return html;
}

export {
    render
};
