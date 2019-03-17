import React, { Component } from 'react';
import Relaks, { useProgress } from 'relaks/hooks';
import { List } from 'widgets/list';
import Loading from 'widgets/loading';

async function SpeciesPage(props) {
    const { route, swapi } = props;
    const [ show ] = useProgress();

    render();
    const species = await swapi.fetchOne(`/species/${route.params.id}/`);
    render();
    const films = await swapi.fetchMultiple(species.films, { minimum: '60%' });
    render();
    const people = await swapi.fetchMultiple(species.people, { minimum: '60%' });
    render();
    const homeworld = await swapi.fetchOne(species.homeworld);
    render();

    function render() {
        if (!species) {
            show(<Loading />);
        } else {
            show(
                <div>
                    <h1>{species.name}</h1>
                    <div>Classification: {species.classification}</div>
                    <div>Designation: {species.designation}</div>
                    <div>Average height: {species.average_height}</div>
                    <div>Skin colors: {species.skin_colors}</div>
                    <div>Hair colors: {species.hair_colors}</div>
                    <div>Eye colors: {species.eye_colors}</div>
                    <div>Average lifespan: {species.average_lifespan}</div>
                    <div>Language: {species.language}</div>
                    <h2>Homeworld</h2>
                    <List urls={species.homeworld} items={homeworld} pageName="planet-summary" route={route} />
                    <h2>Members</h2>
                    <List urls={species.people} items={people} pageName="character-summary" route={route} />
                    <h2>Films</h2>
                    <List urls={species.films} items={films} field="title" pageName="film-summary" route={route} />
                </div>
            );
        }
    }
}

const asyncComponent = Relaks(SpeciesPage);

export {
    asyncComponent as default,
    asyncComponent as SpeciesPage,
};
