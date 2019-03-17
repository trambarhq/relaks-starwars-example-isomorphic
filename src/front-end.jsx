import React, { useState, useEffect, useMemo } from 'react';
import SWAPI from 'swapi';
import { Route } from 'routing';
import NavBar from 'widgets/nav-bar';
import 'relaks/hooks';
import 'style.scss';

function FrontEnd(props) {
    const { routeManager, dataSource } = props;
    const [ routeChange, setRouteChange ] = useState();
    const [ swapiChange, setSWAPIChange ] = useState();
    const route = useMemo(() => {
        return new Route(routeManager);
    }, [ routeManager, routeChange ]);
    const swapi = useMemo(() => {
        return new SWAPI(dataSource);
    }, [ dataSource, swapiChange ]);

    useEffect(() => {
        routeManager.addEventListener('change', setRouteChange);
        dataSource.addEventListener('change', setSWAPIChange);

        return () => {
            routeManager.addEventListener('change', setRouteChange);
            dataSource.addEventListener('change', setSWAPIChange);
        };
    });
    useEffect(() => {
        const body = document.body;
        body.className = body.className.replace(/\s*ssr/, '');
    });

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
