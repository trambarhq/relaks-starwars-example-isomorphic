# Relaks Star Wars Example - the Sequel

This is a continuation of the [Relaks Star Wars Example](https://github.com/chung-leong/relaks-starwars-example).
The app is fully built out. Instead of just the character list, all the
information provided by [https://swapi.co/](https://swapi.co/) is available.
It's a more realistic demonstration of what an app built using [Preact](https://preactjs.com/) and
[Relaks](https://github.com/chung-leong/relaks) would work.

You can see the app in action [here](https://trambar.io/examples/starwars-v/).
You can view its WebPack bundle analysis [here](https://trambar.io/examples/starwars-v/report.html).
When gzipped, it's just under 15 KB.

The example makes use of [relaks-route-manager](https://github.com/chung-leong/relaks-route-manager)
and [relaks-django-data-source](https://github.com/chung-leong/relaks-django-data-source).

## Getting started

To see the code running in debug mode, first clone this repository. In the
working folder, run `npm install`. Once that's done, run `npm run start` to
launch [WebPack Dev Server](https://webpack.js.org/configuration/dev-server/).
Open a browser window and enter `http://localhost:8080` as the location.

## Application structure

The `render()` method of **Application** ([application.jsx](https://github.com/chung-leong/relaks-starwars-example-sequel/blob/master/src/application.jsx#L28))
has change from the previous example. It calls `renderUserInterfacer()` and
`renderConfiguration()`:

```js
render() {
    return (
        <div>
            {this.renderConfiguration()}
            {this.renderUserInterface()}
        </div>
    );
}
```

`renderUserInterface()` has changed quite a bit. The app now has a nav bar. It's
also using a router to determine which page to render:

```js
renderUserInterface() {
    let { route, swapi } = this.state;
    if (!swapi || !route) {
        return null;
    }
    let module = route.params.module;
    let page;
    if (module) {
        let Component = module.default;
        let props = { route, swapi };
        page = <Component {...props} />;
    }
    return (
        <div>
            <NavBar route={route} />
            <div className="contents">
                {page}
            </div>
        </div>
    );
}
```

In addition to route parameters extracted from the current URL, the route object
contains a reference to the module used to generate the page. When `require()`
or `import()` is used to import a JavaScript module, the default export isn't
picked automatically. We have the explicitly ask for `.default`.

`renderConfiguration()` renders the router manager in addition to the data
source:

```js
renderConfiguration() {
    let routeManagerProps = {
        useHashFallback: (process.env.NODE_ENV === 'production'),
        routes: routes,
        onChange: this.handleRouteChange,
    };
    let dataSourceProps = {
        baseURL: 'https://swapi.co/api',
        onChange: this.handleDataSourceChange,
    };
    return (
        <div>
            <RouteManager {...routeManagerProps} />
            <DjangoDataSource {...dataSourceProps} />
        </div>
    );
}
```

Hash fallback mode is used for the production version, so that the app will work
properly when loaded as a file ([pushState()](https://developer.mozilla.org/en-US/docs/Web/API/History_API#Adding_and_modifying_history_entries)
does not work at a file:// location). It also make hosting the example easier.

## Routing

Route definitions for the app's various pages are contained in
[routes.js](https://github.com/chung-leong/relaks-starwars-example-sequel/blob/master/src/routes.js).
The file also contains the proxy object for the route manager.

The following is one of the routes:

```js
'film-summary': {
    path: '/films/${id}/',
    parameters: { id: Number },
    load: async (params) => {
        params.module = await import('pages/film-page' /* webpackChunkName: "film-page" */);
    }
}
```

`path` is the pattern of matching URLs. It uses the syntax of ES6 variable
interpolation.

`parameters` controls the typecasting of extracted parameters. In
this case we want id to be a number.

`load` is an async function that loads the module for the page. The module is
placed into `params.module`, which is referenced by `renderUserInterface()` of
**Application**.

The *webpackChunkName* comment assigns a name to the code chunk holding the
module. The name forms part of the name of the resultant JavaScript file.
Without it the file would end up with an unintuitive numeric name.

## Character Page

The `renderAsync()` method of **CharacterPage** is largely the same as before.
The only difference is that we no longer receive `person` as a prop. We have
to fetch it, using the id from the route.

```js
async renderAsync(meanwhile) {
    let { route, swapi } = this.props;
    let props = {
        person: null,
        homeworld: null,
        films: null,
        species: null,
        vehicles: null,
        starships: null,
        route: route,
    };
    meanwhile.show(<CharacterPageSync {...props} />);
    props.person = await swapi.fetchOne(`/people/${route.params.id}/`);
    meanwhile.show(<CharacterPageSync {...props} />);
    props.films = await swapi.fetchMultiple(props.person.films, { partial: 0.4 });
    meanwhile.show(<CharacterPageSync {...props} />);
    props.species = await swapi.fetchMultiple(props.person.species, { partial: 0.4 });
    meanwhile.show(<CharacterPageSync {...props} />);
    props.homeworld = await swapi.fetchOne(props.person.homeworld);
    meanwhile.show(<CharacterPageSync {...props} />);
    props.vehicles = await swapi.fetchMultiple(props.person.vehicles, { partial: 0.4 });
    meanwhile.show(<CharacterPageSync {...props} />);
    props.starships = await swapi.fetchMultiple(props.person.starships, { partial: 0.4 });
    meanwhile.show(<CharacterPageSync {...props} />);
    return <CharacterPageSync {...props} />;
}
```

The `render()` method of **CharacterPageSync** is also largely the same.
Redundant code for drawing lists was refactored into a separate component.
The method also returns a loading animation when `person` is null.

```js
render() {
    let { route, person, homeworld, films, species, vehicles, starships } = this.props;
    if (!person) {
        return <Loading />;
    }
    return (
        <div className="character-page">
            <h1>{person.name}</h1>
            <div>Height: {person.height} cm</div>
            <div>Mass: {person.mass} kg</div>
            <div>Hair color: {person.hair_color}</div>
            <div>Skin color: {person.skin_color}</div>
            <div>Hair color: {person.hair_color}</div>
            <div>Eye color: {person.eye_color}</div>
            <div>Birth year: {person.birth_year}</div>
            <h2>Homeworld</h2>
            <List urls={person.homeworld} items={homeworld} pageName="planet-summary" route={route} />
            <h2>Films</h2>
            <List urls={person.films} items={films} field="title" pageName="film-summary" route={route} />
            <h2>Species</h2>
            <List urls={person.species} items={species} pageName="species-summary" route={route} />
            <h2>Vehicles</h2>
            <List urls={person.vehicles} items={vehicles} pageName="vehicle-summary" route={route} />
            <h2>Starships</h2>
            <List urls={person.starships} items={starships} pageName="starship-summary" route={route} />
        </div>
    );
}
```
