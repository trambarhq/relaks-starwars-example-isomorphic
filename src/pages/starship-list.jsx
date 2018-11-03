import { h, Component } from 'preact';
import { AsyncComponent } from 'relaks/preact';
import List from 'widgets/list';
import Loading from 'widgets/loading';

/** @jsx h */

class StarshipList extends AsyncComponent {
    static displayName = 'StarshipList';

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
            route: route,
        };
        meanwhile.show(<StarshipListSync {...props} />);
        props.starships = await swapi.fetchList('/starships/');
        props.starships.more();
        return <StarshipListSync {...props} />;
    }
}

class StarshipListSync extends Component {
    static displayName = 'StarshipListSync';

    /**
     * Render the component, making best effort using what props are given
     *
     * @return {VNode}
     */
    render() {
        let { starships, route } = this.props;
        if (!starships) {
            return <Loading />;
        }
        let listProps = {
            items: starships,
            pageName: 'starship-summary',
            route: route,
        };
        return (
            <div>
                <h1>Starships</h1>
                <List {...listProps} />
            </div>
        );
    }
}

export {
    StarshipList as default,
    StarshipList,
    StarshipListSync
};
