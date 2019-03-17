import React, { Component } from 'react';
import Relaks, { useProgress } from 'relaks/hooks';
import { List } from 'widgets/list';
import Loading from 'widgets/loading';

async function VehiclePage(props) {
    const { route, swapi } = props;
    const [ show ] = useProgress();

    render();
    const vehicle = await swapi.fetchOne(`/vehicles/${route.params.id}/`);
    render();
    const films = await swapi.fetchMultiple(vehicle.films, { minimum: '60%' });
    render();
    const pilots = await swapi.fetchMultiple(vehicle.pilots, { minimum: '60%' });
    render();

    function render() {
        if (!vehicle) {
            show(<Loading />);
        } else {
            show(
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
}

const asyncComponent = Relaks(VehiclePage);

export {
    asyncComponent as default,
    asyncComponent as VehiclePage,
};
