import { h, Component } from 'preact';
import { AsyncComponent } from 'relaks/preact';
import { List } from 'widgets/list';
import Loading from 'widgets/loading';

/** @jsx h */

class FilmPage extends AsyncComponent {
    static displayName = 'FilmPage';

    /**
     * Retrieve remote data and render the synchronize half of this component
     *
     * @param  {Meanwhile}  meanwhile
     *
     * @return {VNode}
     */
    async renderAsync(meanwhile) {
        let { route, swapi } = this.props;
        let props = {
            film: null,
            characters: null,
            planets: null,
            species: null,
            vehicles: null,
            starships: null,
            route: route,
        };
        meanwhile.show(<FilmPageSync {...props} />);
        props.film = await swapi.fetchOne(`/films/${route.params.id}/`);
        meanwhile.show(<FilmPageSync {...props} />);
        props.characters = await swapi.fetchMultiple(props.film.characters, { minimum: 5 });
        meanwhile.show(<FilmPageSync {...props} />);
        props.species = await swapi.fetchMultiple(props.film.species, { minimum: '60%' });
        meanwhile.show(<FilmPageSync {...props} />);
        props.planets = await swapi.fetchMultiple(props.film.planets);
        meanwhile.show(<FilmPageSync {...props} />);
        props.vehicles = await swapi.fetchMultiple(props.film.vehicles, { minimum: '60%' });
        meanwhile.show(<FilmPageSync {...props} />);
        props.starships = await swapi.fetchMultiple(props.film.starships, { minimum: '60%' });
        return <FilmPageSync {...props} />;
    }
}

class FilmPageSync extends Component {
    static displayName = 'FilmPageSync';

    /**
     * Render the component, making best effort using what props are given
     *
     * @return {VNode}
     */
    render() {
        let { route, film, characters, species, planets, vehicles, starships } = this.props;
        if (!film) {
            return <Loading />;
        }
        return (
            <div className="character-page">
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

export {
    FilmPage as default,
    FilmPage,
    FilmPageSync,
};
