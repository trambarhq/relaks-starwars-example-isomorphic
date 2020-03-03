import React from 'react';
import { useProgress } from 'relaks';
import { List } from '../widgets/list.jsx';
import { Loading } from '../widgets/loading.jsx';

export default async function CharacterPage(props) {
  const { route, swapi } = props;
  const [ show ] = useProgress();

  render();
  const person = await swapi.fetchOne(`/people/${route.params.id}/`);
  render();
  const films = await swapi.fetchMultiple(person.films, { minimum: '60%' });
  render();
  const species = await swapi.fetchMultiple(person.species, { minimum: '60%' });
  render();
  const homeworld = await swapi.fetchOne(person.homeworld);
  render();
  const vehicles = await swapi.fetchMultiple(person.vehicles, { minimum: '60%' });
  render();
  const starships = await swapi.fetchMultiple(person.starships, { minimum: '60%' });
  render();

  function render() {
    if (!person) {
      show(<Loading />);
    } else {
      show(
        <div>
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
}
