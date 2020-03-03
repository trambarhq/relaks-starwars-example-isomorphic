import React from 'react';
import { useProgress } from 'relaks';
import { List } from '../widgets/list.jsx';
import { Loading } from '../widgets/loading.jsx';

export default async function CharacterList(props) {
  const { route, swapi } = props;
  const [ show ] = useProgress();

  render();
  const people = await swapi.fetchList('/people/');
  render();

  people.more();

  function render() {
    if (!people) {
      show(<Loading />);
    } else {
      show(
        <div>
          <h1>Characters</h1>
          <List items={people} field="name" pageName="character-summary" route={route} />
        </div>
      );
    }
  };
}
