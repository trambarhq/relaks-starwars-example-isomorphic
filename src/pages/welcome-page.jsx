import React, { PureComponent } from 'react';

class WelcomePage extends PureComponent {
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
    WelcomePage
};
