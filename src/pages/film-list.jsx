import { h, Component } from 'preact';
import { AsyncComponent } from 'relaks/preact';
import List from 'widgets/list';
import Loading from 'widgets/loading';

/** @jsx h */

class FilmList extends AsyncComponent {
    static displayName = 'FilmList';

    /**
     * Retrieve remote data and render the synchronize half of this component
     *
     * @param  {Meanwhile}  meanwhile
     *
     * @return {VNode}
     */
    async renderAsync(meanwhile) {
        let { route, swapi } = this.props;
        let props = {
            route,
        };
        meanwhile.show(<FilmListSync {...props} />);
        props.planets = await swapi.fetchList('/films/');
        props.planets.more();
        return <FilmListSync {...props} />;
    }
}

class FilmListSync extends Component {
    static displayName = 'FilmListSync';

    /**
     * Render the component, making best effort using what props are given
     *
     * @return {VNode}
     */
    render() {
        let { planets, route } = this.props;
        if (!planets) {
            return <Loading />;
        }
        let listProps = {
            items: planets,
            field: 'title',
            pageName: 'film-summary',
            route,
        };
        return (
            <div>
                <h1>Films</h1>
                <List {...listProps} />
            </div>
        );
    }
}

export {
    FilmList as default,
    FilmList,
    FilmListSync
};
