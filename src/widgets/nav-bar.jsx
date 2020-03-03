import React from 'react';

export function NavBar(props) {
  const { route } = props;
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

function Button(props) {
  const { route, pageName, children } = props;
  const url = route.find(pageName);
  return <a className="button" href={url}>{children}</a>;
}
