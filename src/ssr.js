import { createElement } from 'react';
import { renderToString } from 'react-dom/server';
import { DataSource } from 'relaks-django-data-source';
import { RouteManager } from 'relaks-route-manager';
import { harvest } from 'relaks-harvest';
import { FrontEnd } from './front-end.jsx';
import { routes } from './routing.js';

const basePath = '/starwars';

async function render(options) {
  const dataSource = new DataSource({
    baseURL: `${options.host}${basePath}/api`,
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
