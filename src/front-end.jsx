import React, { PureComponent } from 'react';
import SWAPI from 'swapi';
import { Route } from 'routing';
import NavBar from 'widgets/nav-bar';
import 'relaks';
import 'style.scss';

class FrontEnd extends PureComponent {
    static displayName = 'FrontEnd';

    constructor(props) {
        super(props);
        let { routeManager, dataSource } = this.props;
        this.state = {
            route: new Route(routeManager),
            swapi: new SWAPI(dataSource, props.ssr),
        };
    }

    /**
     * Render the application
     *
     * @return {VNode}
     */
    render() {
        let { route, swapi } = this.state;
        let PageComponent = route.params.module.default;
        return (
            <div>
                <NavBar route={route} />
                <div className="contents">
                    <PageComponent route={route} swapi={swapi} />
                </div>
            </div>
        );
    }

    /**
     * Added change handlers when component mounts
     */
    componentDidMount() {
        let { routeManager, dataSource } = this.props;
        routeManager.addEventListener('change', this.handleRouteChange);
        dataSource.addEventListener('change', this.handleDataSourceChange);

        var body = document.body;
        body.className = body.className.replace(/\s*ssr/, '');
    }

    /**
     * Recreate swapi when ssr changes
     */
    componentDidUpdate(prevProps, prevState) {
        let { dataSource, ssr } = this.props;
        if (prevProps.ssr !== ssr) {
            let swapi = new SWAPI(dataSource, ssr);
            this.setState({ swapi });
        }
    }

    /**
     * Remove change handlers when component mounts
     */
    componentWillUnmount() {
        let { routeManager, dataSource } = this.props;
        routeManager.removeEventListener('change', this.handleRouteChange);
        dataSource.removeEventListener('change', this.handleDataSourceChange);
    }

    /**
     * Called when the data source changes
     *
     * @param  {RelaksDjangoDataSourceEvent} evt
     */
    handleDataSourceChange = (evt) => {
        this.setState({ swapi: new SWAPI(evt.target) });
    }

    /**
     * Called when the route changes
     *
     * @param  {RelaksRouteManagerEvent} evt
     */
    handleRouteChange = (evt) => {
        this.setState({ route: new Route(evt.target) });
    }
}

export {
    FrontEnd as default,
    FrontEnd
};
