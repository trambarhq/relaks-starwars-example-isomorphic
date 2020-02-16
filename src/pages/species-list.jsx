import React from 'react';
import Relaks, { useProgress } from 'relaks';
import { List } from '../widgets/list.jsx';
import { Loading } from '../widgets/loading.jsx';

async function SpeciesList(props) {
  const { route, swapi } = props;
  const [ show ] = useProgress();

  render();
  const species = await swapi.fetchList('/species/');
  render();

  species.more();

  function render() {
    if (!species) {
      show(<Loading />);
    } else {
      show(
        <div>
          <h1>Species</h1>
          <List items={species} field="name" pageName="species-summary" route={route} />
        </div>
      );
    }
  }
}

const component = Relaks.memo(SpeciesList);

export {
  component as default,
};
