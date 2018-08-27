import { h, Component } from 'preact';
import { AsyncComponent } from 'relaks/preact';
import { List } from 'widgets/list';
import Loading from 'widgets/loading';

/** @jsx h */

class PlanetPage extends AsyncComponent {
    static displayName = 'PlanetPage';

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
            planet: null,
            films: null,
            residents: null,
            route: route,
        };
        meanwhile.show(<PlanetPageSync {...props} />);
        props.planet = await swapi.fetchOne(`/planets/${route.params.id}/`);
        meanwhile.show(<PlanetPageSync {...props} />);
        props.films = await swapi.fetchMultiple(props.planet.films, { partial: 0.4 });
        meanwhile.show(<PlanetPageSync {...props} />);
        props.residents = await swapi.fetchMultiple(props.planet.residents, { partial: 0.4 });
        meanwhile.show(<PlanetPageSync {...props} />);
        return <PlanetPageSync {...props} />;
    }
}

class PlanetPageSync extends Component {
    static displayName = 'PlanetPageSync';

    /**
     * Render the component, making best effort using what props are given
     *
     * @return {VNode}
     */
    render() {
        let { route, planet, films, residents } = this.props;
        if (!planet) {
            return <Loading />;
        }
        return (
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

export {
    PlanetPage as default,
    PlanetPage,
    PlanetPageSync,
};
