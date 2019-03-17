import React from 'react';
import Relaks, { useProgress } from 'relaks/hooks';
import List from 'widgets/list';
import Loading from 'widgets/loading';

async function FilmList(props) {
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

const asyncComponent = Relaks(FilmList);

export {
    asyncComponent as default,
    asyncComponent as FilmList,
};
