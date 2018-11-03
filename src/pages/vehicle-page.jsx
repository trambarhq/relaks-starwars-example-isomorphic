import { h, Component } from 'preact';
import { AsyncComponent } from 'relaks/preact';
import { List } from 'widgets/list';
import Loading from 'widgets/loading';

/** @jsx h */

class VehiclePage extends AsyncComponent {
    static displayName = 'VehiclePage';

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
            route,
        };
        meanwhile.show(<VehiclePageSync {...props} />);
        props.vehicle = await swapi.fetchOne(`/vehicles/${route.params.id}/`);
        meanwhile.show(<VehiclePageSync {...props} />);
        props.films = await swapi.fetchMultiple(props.vehicle.films, { minimum: '60%' });
        meanwhile.show(<VehiclePageSync {...props} />);
        props.pilots = await swapi.fetchMultiple(props.vehicle.pilots, { minimum: '60%' });
        meanwhile.show(<VehiclePageSync {...props} />);
        return <VehiclePageSync {...props} />;
    }
}

class VehiclePageSync extends Component {
    static displayName = 'VehiclePageSync';

    /**
     * Render the component, making best effort using what props are given
     *
     * @return {VNode}
     */
    render() {
        let { route, vehicle, pilots, films } = this.props;
        if (!vehicle) {
            return <Loading />;
        }
        return (
            <div>
                <h1>{vehicle.name}</h1>
                <div>Model: {vehicle.model}</div>
                <div>Manufacturer: {vehicle.manufacturer}</div>
                <div>Cost in credits: {vehicle.cost_in_credits}</div>
                <div>Length: {vehicle.length} m</div>
                <div>Max atmosphering speed: {vehicle.max_atmosphering_speed} km/h</div>
                <div>Crew: {vehicle.crew}</div>
                <div>Passengers: {vehicle.passenger}</div>
                <div>Cargo capacity: {vehicle.cargo_capacity} kg</div>
                <div>Consumables: {vehicle.consumables}</div>
                <div>Vehicle class: {vehicle.vehicle_class}</div>
                <h2>Pilots</h2>
                <List urls={vehicle.pilots} items={pilots} pageName="character-summary" route={route} />
                <h2>Films</h2>
                <List urls={vehicle.films} items={films} field="title" pageName="film-summary" route={route} />
            </div>
        );
    }
}

export {
    VehiclePage as default,
    VehiclePage,
    VehiclePageSync,
};
