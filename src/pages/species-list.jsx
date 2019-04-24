import { h, Component } from 'preact';
import { AsyncComponent } from 'relaks/preact';
import { List } from 'widgets/list';
import { Loading } from 'widgets/loading';

/** @jsx h */

class SpeciesList extends AsyncComponent {
    static displayName = 'SpeciesList';

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
        meanwhile.show(<SpeciesListSync {...props} />);
        props.species = await swapi.fetchList('/species/');
        props.species.more();
        return <SpeciesListSync {...props} />;
    }
}

class SpeciesListSync extends Component {
    static displayName = 'SpeciesListSync';

    /**
     * Render the component, making best effort using what props are given
     *
     * @return {VNode}
     */
    render() {
        let { species, route } = this.props;
        if (!species) {
            return <Loading />;
        }
        let listProps = {
            items: species,
            pageName: 'species-summary',
            route,
        };
        return (
            <div>
                <h1>Species</h1>
                <List {...listProps} />
            </div>
        );
    }
}

export {
    SpeciesList as default,
};
