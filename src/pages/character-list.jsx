import React from 'react';
import Relaks, { useProgress } from 'relaks/hooks';
import List from 'widgets/list';
import Loading from 'widgets/loading';

async function CharacterList(props) {
    const { route, swapi } = props;
    const [ show ] = useProgress();

    render();
    const people = await swapi.fetchList('/people/');
    render();

    people.more();

    function render() {
        if (!people) {
            return <Loading />;
        }
        show(
            <div>
                <h1>Characters</h1>
                <List items={people} field="name" pageName="character-summary" route={route} />
            </div>
        );
    };
}

const asyncComponent = Relaks(CharacterList);

export {
    asyncComponent as default,
    asyncComponent as CharacterList,
};
