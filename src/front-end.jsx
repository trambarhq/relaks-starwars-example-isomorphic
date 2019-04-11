import React, { useState, useEffect, useMemo } from 'react';
import { useEventTime } 'relaks';
import { SWAPI } from 'swapi';
import { Route } from 'routing';
import NavBar from 'widgets/nav-bar';
import 'style.scss';

function FrontEnd(props) {
    const { routeManager, dataSource, ssr } = props;
    const [ routeChanged, setRouteChanged ] = useEventTime();
    const [ swapiChanged, setSWAPIChanged ] = useEventTime();
    const route = useMemo(() => {
        return new Route(routeManager);
    }, [ routeManager, routeChanged ]);
    const swapi = useMemo(() => {
        return new SWAPI(dataSource, ssr);
    }, [ dataSource, ssr, swapiChanged ]);

    useEffect(() => {
        routeManager.addEventListener('change', setRouteChanged);
        dataSource.addEventListener('change', setSWAPIChanged);

        return () => {
            routeManager.removeEventListener('change', setRouteChanged);
            dataSource.removeEventListener('change', setSWAPIChanged);
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

export {
    FrontEnd as default,
    FrontEnd
};
