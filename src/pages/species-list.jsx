import React from 'react';
import Relaks, { useProgress } from 'relaks/hooks';
import List from 'widgets/list';
import Loading from 'widgets/loading';

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

const asyncComponent = Relaks(SpeciesList);

export {
    asyncComponent as default,
    asyncComponent as SpeciesList,
};
