import React from 'react';
import Relaks, { useProgress } from 'relaks';
import { List } from '../widgets/list.jsx';
import { Loading } from '../widgets/loading.jsx';

async function VehicleList(props) {
  const { route, swapi } = props;
  const [ show ] = useProgress();

  render();
  const vehicles = await swapi.fetchList('/vehicles/');
  render();

  vehicles.more();

  function render() {
    if (!vehicles) {
      show(<Loading />);
    } else {
      show(
        <div>
          <h1>Vehicles</h1>
          <List items={vehicles} field="name" pageName="vehicle-summary" route={route} />
        </div>
      );
    }
  }
}

const component = Relaks.memo(VehicleList);

export {
  component as default,
};
