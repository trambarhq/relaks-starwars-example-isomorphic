import { createElement } from 'react';
import { renderToString } from 'react-dom/server';
import { FrontEnd } from 'front-end';
import { routes } from 'routing';
import DjangoDataSource from 'relaks-django-data-source';
import RouteManager from 'relaks-route-manager';
import { harvest } from 'relaks-harvest';

const dataSourceBaseURL = '/starwars/api';
const basePath = '/starwars';

async function render(options) {
    const dataSource = new DjangoDataSource({
        baseURL: `${options.host}${dataSourceBaseURL}`,
        fetchFunc: options.fetch,
    });
    dataSource.activate();

    const routeManager = new RouteManager({
        routes,
        basePath,
    });
    routeManager.activate();
    await routeManager.start(options.path);

    const ssrElement = createElement(FrontEnd, { dataSource, routeManager, ssr: options.target });
    const rootNode = await harvest(ssrElement);
    const html = renderToString(rootNode);
    return html;
}

export {
    render,
    basePath,
};
