import React from 'react';
import { useProgress } from 'relaks';
import { List } from '../widgets/list.jsx';
import { Loading } from '../widgets/loading.jsx';

export default async function StarshipPage(props) {
  const { route, swapi } = props;
  const [ show ] = useProgress();

  render();
  const starship = await swapi.fetchOne(`/starships/${route.params.id}/`);
  render();
  const films = await swapi.fetchMultiple(starship.films, { minimum: '60%' });
  render();
  const pilots = await swapi.fetchMultiple(starship.pilots, { minimum: '60%' });
  render();

  function render() {
    if (!starship) {
      show(<Loading />);
    } else {
      show(
        <div>
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
}
