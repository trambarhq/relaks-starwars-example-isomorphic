import { h, Component } from 'preact';
import { AsyncComponent } from 'relaks/preact';
import { List } from 'widgets/list';
import Loading from 'widgets/loading';

/** @jsx h */

class StarshipPage extends AsyncComponent {
    static displayName = 'StarshipPage';

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
            route: route,
        };
        meanwhile.show(<StarshipPageSync {...props} />);
        props.starship = await swapi.fetchOne(`/starships/${route.params.id}/`);
        meanwhile.show(<StarshipPageSync {...props} />);
        props.films = await swapi.fetchMultiple(props.starship.films, { minimum: '60%' });
        meanwhile.show(<StarshipPageSync {...props} />);
        props.pilots = await swapi.fetchMultiple(props.starship.pilots, { minimum: '60%' });
        return <StarshipPageSync {...props} />;
    }
}

class StarshipPageSync extends Component {
    static displayName = 'StarshipPageSync';

    /**
     * Render the component, making best effort using what props are given
     *
     * @return {VNode}
     */
    render() {
        let { route, starship, pilots, films } = this.props;
        if (!starship) {
            return <Loading />;
        }
        return (
            <div className="character-page">
                <h1>{starship.name}</h1>
                <div>Model: {starship.model}</div>
                <div>Manufacturer: {starship.manufacturer}</div>
                <div>Cost in credits: {starship.cost_in_credits}</div>
                <div>Length: {starship.length} m</div>
                <div>Max atmosphering speed: {starship.max_atmosphering_speed} km/h</div>
                <div>Max sublight speed: {starship.MGLT} MGLT</div>
                <div>Hyperdrive rating: {starship.hyperdrive_rating}</div>
                <div>Crew: {starship.crew}</div>
                <div>Passengers: {starship.passenger}</div>
                <div>Cargo capacity: {starship.cargo_capacity} kg</div>
                <div>Consumables: {starship.consumables}</div>
                <div>Starship class: {starship.starship_class}</div>
                <h2>Pilots</h2>
                <List urls={starship.pilots} items={pilots} pageName="character-summary" route={route} />
                <h2>Films</h2>
                <List urls={starship.films} items={films} field="title" pageName="film-summary" route={route} />
            </div>
        );
    }
}

export {
    StarshipPage as default,
    StarshipPage,
    StarshipPageSync,
};
