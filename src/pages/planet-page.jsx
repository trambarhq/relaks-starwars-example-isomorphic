import React, { Component } from 'react';
import Relaks, { useProgress } from 'relaks/hooks';
import { List } from 'widgets/list';
import Loading from 'widgets/loading';

async function PlanetPage(props) {
    const { route, swapi } = props;
    const [ show ] = useProgress();

    render();
    const planet = await swapi.fetchOne(`/planets/${route.params.id}/`);
    render();
    const films = await swapi.fetchMultiple(planet.films, { minimum: '60%' });
    render();
    const residents = await swapi.fetchMultiple(planet.residents, { minimum: '60%' });
    render();

    function render() {
        if (!planet) {
            show(<Loading />);
        } else {
            show(
                <div>
                    <h1>{planet.name}</h1>
                    <div>Diameter: {planet.diameter} km</div>
                    <div>Rotation period: {planet.rotation_period} hr</div>
                    <div>Orbital period: {planet.orbital_period} days</div>
                    <div>Climate: {planet.climate}</div>
                    <div>Gravity: {planet.gravity}</div>
                    <div>Terrain: {planet.terrain}</div>
                    <div>Surface water: {planet.surface_water}</div>
                    <div>Population: {planet.population}</div>
                    <h2>Residents</h2>
                    <List urls={planet.residents} items={residents} pageName="character-summary" route={route} />
                    <h2>Films</h2>
                    <List urls={planet.films} items={films} field="title" pageName="film-summary" route={route} />
                </div>
            );
        }
    }
}

const asyncComponent = Relaks(PlanetPage);

export {
    asyncComponent as default,
    asyncComponent as PlanetPage,
};
