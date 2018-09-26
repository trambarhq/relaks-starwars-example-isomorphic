import React, { PureComponent } from 'react';
import { AsyncComponent } from 'relaks';
import List from 'widgets/list';
import Loading from 'widgets/loading';

class CharacterList extends AsyncComponent {
    static displayName = 'CharacterList';

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
            people: null,
            route: route,
        };
        meanwhile.show(<CharacterListSync {...props} />);
        props.people = await swapi.fetchList('/people/');
        props.people.more();
        return <CharacterListSync {...props} />;
    }
}

class CharacterListSync extends PureComponent {
    static displayName = 'CharacterListSync';

    /**
     * Render the component, making best effort using what props are given
     *
     * @return {VNode}
     */
    render() {
        let { people, route } = this.props;
        if (!people) {
            return <Loading />;
        }
        let listProps = {
            items: people,
            field: 'name',
            pageName: 'character-summary',
            route: route,
        };
        return (
            <div>
                <h1>Characters</h1>
                <List {...listProps} />
            </div>
        );
    }
}

export {
    CharacterList as default,
    CharacterList,
    CharacterListSync
};
