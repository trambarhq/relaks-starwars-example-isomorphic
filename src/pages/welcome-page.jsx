import { h, render, Component } from 'preact';

/** @jsx h */

class WelcomePage extends Component {
    static displayName = 'WelcomePage';

    /**
     * Render the component
     *
     * @return {VNode}
     */
    render() {
        return (
            <div>
                <h1>Welcome!</h1>
            </div>
        );
    }
}

export {
    WelcomePage as default,
};
