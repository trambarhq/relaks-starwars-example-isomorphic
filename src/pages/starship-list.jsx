import React from 'react';
import Relaks, { useProgress } from 'relaks/hooks';
import List from 'widgets/list';
import Loading from 'widgets/loading';

async function StarshipList(props) {
    const { route, swapi } = props;
    const [ show ] = useProgress();

    render();
    const starships = await swapi.fetchList('/starships/');
    render();

    starships.more();

    function render() {
        if (!starships) {
            show(<Loading />);
        } else {
            show(
                <div>
                    <h1>Starships</h1>
                    <List items={starships} field="name" pageName="starship-summary" route={route} />
                </div>
            );
        }
    }
}

const asyncComponent = Relaks(StarshipList);

export {
    asyncComponent as default,
    asyncComponent as StarshipList,
};
