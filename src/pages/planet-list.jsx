import React from 'react';
import Relaks, { useProgress } from 'relaks/hooks';
import List from 'widgets/list';
import Loading from 'widgets/loading';

async function PlanetList(props) {
    const { route, swapi } = props;
    const [ show ] = useProgress();

    render();
    const planets = await swapi.fetchList('/planets/');
    render();

    planets.more();

    function render() {
        if (!planets) {
            show(<Loading />);
        } else {
            show(
                <div>
                    <h1>Planets</h1>
                    <List items={planets} field="name" pageName="planet-summary" route={route} />
                </div>
            );
        }
    }
}

const asyncComponent = Relaks(PlanetList);

export {
    asyncComponent as default,
    asyncComponent as PlanetList,
};
