import React, { useEffect, useMemo } from 'react';
import { useEventTime } from 'relaks';
import { SWAPI } from './swapi.js';
import { Route } from './routing.js';
import { NavBar } from './widgets/nav-bar.jsx';
import './style.scss';

export function FrontEnd(props) {
  const { routeManager, dataSource, ssr } = props;
  const [ routeChanged, setRouteChanged ] = useEventTime();
  const [ dataChanged, setDataChanged ] = useEventTime();
  const route = useMemo(() => {
    return new Route(routeManager);
  }, [ routeManager, routeChanged ]);
  const swapi = useMemo(() => {
    return new SWAPI(dataSource, ssr);
  }, [ dataSource, ssr, dataChanged ]);

  useEffect(() => {
    routeManager.addEventListener('change', setRouteChanged);
    dataSource.addEventListener('change', setDataChanged);

    return () => {
      routeManager.removeEventListener('change', setRouteChanged);
      dataSource.removeEventListener('change', setDataChanged);
    };
  }, [ routeManager, dataSource ]);
  useEffect(() => {
    if (!ssr) {
      const body = document.body;
      body.className = body.className.replace(/\s*ssr/, '');
    }
  }, [ ssr ]);

  const PageComponent = route.params.module.default;
  return (
    <div>
      <NavBar route={route} />
      <div className="contents">
        <PageComponent route={route} swapi={swapi} />
      </div>
    </div>
  );
}
