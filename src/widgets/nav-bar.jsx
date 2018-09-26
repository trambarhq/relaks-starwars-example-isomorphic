import React from 'react';

function NavBar(props) {
    let { route } = props;
    return (
        <div className="nav-bar">
            <Button pageName="welcome" route={route}>
                <i className="fab fa-empire" />
            </Button>
            <Button pageName="film-list" route={route}>
                Films
            </Button>
            <Button pageName="character-list" route={route}>
                Characters
            </Button>
            <Button pageName="planet-list" route={route}>
                Planets
            </Button>
            <Button pageName="species-list" route={route}>
                Species
            </Button>
            <Button pageName="vehicle-list" route={route}>
                Vehicles
            </Button>
            <Button pageName="starship-list" route={route}>
                Starships
            </Button>
        </div>
    );
}

NavBar.displayName = 'NavBar';

function Button(props) {
    let { route } = props;
    let linkProps = {
        className: 'button',
        href: route.find(props.pageName),
    };
    return <a {...linkProps}>{props.children}</a>;
}

Button.displayName = 'Button';

export {
    NavBar as default,
    NavBar
};
