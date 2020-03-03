import React from 'react';
import { useProgress } from 'relaks';
import { List } from '../widgets/list.jsx';
import { Loading } from '../widgets/loading.jsx';

export default async function FilmList(props) {
  const { route, swapi } = props;
  const [ show ] = useProgress();

  render();
  const films = await swapi.fetchList('/films/');
  render();

  films.more();

  function render() {
    if (!films) {
      show(<Loading />);
    } else {
      show(
        <div>
          <h1>Films</h1>
          <List items={films} field="title" pageName="film-summary" route={route} />
        </div>
      );
    }
  }
}
