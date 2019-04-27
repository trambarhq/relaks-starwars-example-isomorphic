import React from 'react';
import Relaks, { useProgress } from 'relaks';
import { List } from 'widgets/list';
import { Loading } from 'widgets/loading';

async function FilmPage(props) {
    const { route, swapi } = props;
    const [ show ] = useProgress();

    render();
    const film = await swapi.fetchOne(`/films/${route.params.id}/`);
    render();
    const characters = await swapi.fetchMultiple(film.characters, { minimum: 5 });
    render();
    const species = await swapi.fetchMultiple(film.species, { minimum: '60%' });
    render();
    const planets = await swapi.fetchMultiple(film.planets);
    render();
    const vehicles = await swapi.fetchMultiple(film.vehicles, { minimum: '60%' });
    render();
    const starships = await swapi.fetchMultiple(film.starships, { minimum: '60%' });
    render();

    function render() {
        if (!film) {
            show(<Loading />);
        } else {
            show(
                <div>
                    <h1>{film.title}</h1>
                    <p>{film.opening_crawl}</p>
                    <div>Director: {film.director}</div>
                    <div>Producer: {film.producer}</div>
                    <div>Release date: {film.release_date}</div>
                    <h2>Characters</h2>
                    <List urls={film.characters} items={characters} pageName="character-summary" route={route} />
                    <h2>Species</h2>
                    <List urls={film.species} items={species} pageName="species-summary" route={route} />
                    <h2>Planets</h2>
                    <List urls={film.planets} items={planets} pageName="planet-summary" route={route} />
                    <h2>Vehicles</h2>
                    <List urls={film.vehicles} items={vehicles} pageName="vehicle-summary" route={route} />
                    <h2>Starships</h2>
                    <List urls={film.starships} items={starships} pageName="starship-summary" route={route} />
                </div>
            );
        }
    }
}

const component = Relaks.memo(FilmPage);

export {
    component as default,
};
