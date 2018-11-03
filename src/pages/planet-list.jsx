import { h, Component } from 'preact';
import { AsyncComponent } from 'relaks/preact';
import List from 'widgets/list';
import Loading from 'widgets/loading';

/** @jsx h */

class PlanetList extends AsyncComponent {
    static displayName = 'PlanetList';

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
        meanwhile.show(<PlanetListSync {...props} />);
        props.planets = await swapi.fetchList('/planets/');
        props.planets.more();
        return <PlanetListSync {...props} />;
    }
}

class PlanetListSync extends Component {
    static displayName = 'PlanetListSync';

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
            pageName: 'planet-summary',
            route,
        };
        return (
            <div>
                <h1>Planets</h1>
                <List {...listProps} />
            </div>
        );
    }
}

export {
    PlanetList as default,
    PlanetList,
    PlanetListSync
};
