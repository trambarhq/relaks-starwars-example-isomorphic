import { h, Component } from 'preact';
import { AsyncComponent } from 'relaks/preact';
import { List } from 'widgets/list';
import Loading from 'widgets/loading';

/** @jsx h */

class CharacterPage extends AsyncComponent {
    static displayName = 'CharacterPage';

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
            person: null,
            homeworld: null,
            films: null,
            species: null,
            vehicles: null,
            starships: null,
            route: route,
        };
        meanwhile.show(<CharacterPageSync {...props} />);
        props.person = await swapi.fetchOne(`/people/${route.params.id}/`);
        meanwhile.show(<CharacterPageSync {...props} />);
        props.films = await swapi.fetchMultiple(props.person.films, { minimum: '60%' });
        meanwhile.show(<CharacterPageSync {...props} />);
        props.species = await swapi.fetchMultiple(props.person.species, { minimum: '60%' });
        meanwhile.show(<CharacterPageSync {...props} />);
        props.homeworld = await swapi.fetchOne(props.person.homeworld);
        meanwhile.show(<CharacterPageSync {...props} />);
        props.vehicles = await swapi.fetchMultiple(props.person.vehicles, { minimum: '60%' });
        meanwhile.show(<CharacterPageSync {...props} />);
        props.starships = await swapi.fetchMultiple(props.person.starships, { minimum: '60%' });
        meanwhile.show(<CharacterPageSync {...props} />);
        return <CharacterPageSync {...props} />;
    }
}

class CharacterPageSync extends Component {
    static displayName = 'CharacterPageSync';

    /**
     * Render the component, making best effort using what props are given
     *
     * @return {VNode}
     */
    render() {
        let { route, person, homeworld, films, species, vehicles, starships } = this.props;
        if (!person) {
            return <Loading />;
        }
        return (
            <div className="character-page">
                <h1>{person.name}</h1>
                <div>Height: {person.height} cm</div>
                <div>Mass: {person.mass} kg</div>
                <div>Hair color: {person.hair_color}</div>
                <div>Skin color: {person.skin_color}</div>
                <div>Hair color: {person.hair_color}</div>
                <div>Eye color: {person.eye_color}</div>
                <div>Birth year: {person.birth_year}</div>
                <h2>Homeworld</h2>
                <List urls={person.homeworld} items={homeworld} pageName="planet-summary" route={route} />
                <h2>Films</h2>
                <List urls={person.films} items={films} field="title" pageName="film-summary" route={route} />
                <h2>Species</h2>
                <List urls={person.species} items={species} pageName="species-summary" route={route} />
                <h2>Vehicles</h2>
                <List urls={person.vehicles} items={vehicles} pageName="vehicle-summary" route={route} />
                <h2>Starships</h2>
                <List urls={person.starships} items={starships} pageName="starship-summary" route={route} />
            </div>
        );
    }
}

export {
    CharacterPage as default,
    CharacterPage,
    CharacterPageSync,
};
