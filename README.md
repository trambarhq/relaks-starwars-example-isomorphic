Relaks Star Wars Example - Isomorphic
-------------------------------------
Welcome to part three of the Relaks Starwars saga. In [part one](https://github.com/chung-leong/relaks-starwars-example), we created a very basic page that fetch data from [SWAPI](https://swapi.co/). In [part two](https://github.com/chung-leong/relaks-starwars-example-sequel), we expanded it to something that resembles a real-world website. Now, we'll go one step further by making the app isomorphic.

An isomorphic React app can render a page on either a web browser or on a server running Node.js. The purpose of server-side rendering (SSR) is first and foremost search engine optimization (SEO). Website crawlers are much better at indexing static HTML pages than single-page JavaScript apps. Providing a static version of your site improves the chance that people will find it.

SSR can also significantly reduce your site's time-to-first-impression. On this matrix, single-page JavaScript apps are often quite poor. The size of a modern JavaScript app can easily exceed 1MB, depending on what libraries are used. And after the app loads, it needs to retrieve the data that it needs to generate a page. That could take seconds, during which the impatient among your visitors might hit the back button. SSR allows you to show them the initial appearance of your app instead of a boring loading screen.

This SSR page is completely static--it's just HTML. Unless the visitor has super-human reflex though, he wouldn't be able to tell. By the time he initiates his first interaction with the page, the app would likely be ready to handle it. Because the same code is used for both SSR and CSR, the transition from one to the other is seamless.

With proper page caching, time-to-first-impression can match that of a static HTML page.

* [React version](#react-version)
* [Live demo](#live-demo)
* [Getting started](#getting-started)
* [SSR and Relaks](#ssr-and-relaks)
* [Adjustments to WebPack configuration](#adjustments-to-webpack-configuration)
* [Client-side code changes](#client-side-code-changes)
* [Adjustments to HTML template](#adjustments-to-html-template)
* [Server-side code](#server-side-code)
* [Usage scenarios](#usage-scenarios)
* [Final words](#final-words)

## React version

A version of this example that uses React instead of Preact is available. If you're interested in using React, please look at the code and README in the [*react* branch](https://github.com/chung-leong/relaks-starwars-example-isomorphic/tree/react).

## Live demo

You can see the app in action [here](https://trambar.io/starwars/characters/). When the page is rendered on the server side, it has a reddish background color. The color is removed once the client takes over. This can happen in less than a second as the app is fairly small. You might want to activate bandwidth throttling to slow things down a bit. Hit the browser's refresh button to to see the SSR version again.

![Screenshot](docs/img/screenshot.png)

If you wish to see the SEO version, disable JavaScript for the site. On Chrome, you can do this by clicking the lock icon next to the page URL and select "Site settings".

## Getting started

To see the code running in debug mode, first clone this repository. In the working folder, run `npm install`. Once that's done, run `npm run watch` to rebuild the app with debugging enabled. In a different terminal, run `node server/index.js`. Open a browser window and enter `http://localhost:8080/starwars/` as the location. To see the server-side code in debug mode, run `node --inspect server/index.js`. Open a Chrome window and navigate to `chrome://inspect/`. The server script to be listed under **Remote Target**. Click on it to enter the debugger.

## SSR and Relaks

Conceptually, enabling SSR on an app using Relaks is very simple: We just need to wait for all promises returned by `renderAsync()` to be fulfilled. The [relaks-harvest](https://github.com/chung-leong/relaks-harvest) library is designed exactly for this task. Given a Preact `VNode`, `harvest()` will recursively call either `renderAsync()` or `render()`.  Once everything is rendered, it asynchronously returns a tree containing only HTML and text nodes. This tree can then be passed to [preact-render-to-string](https://github.com/developit/preact-render-to-string).

## Adjustments to WebPack configuration

The first thing we need to do to enable SSR is to add a new build target in our WebPack configuration. By default, WebPack generates code suitable for browsers. We need to ask WebPack to prepare a separate build for a Node.js environment. In [webpack.config.js](https://github.com/chung-leong/relaks-starwars-example-isomorphic/blob/master/webpack.config.js#L96), we change the export statement to the following:

```javascript
module.exports = [ serverConfig, clientConfig ];
```

The variable `clientConfig` holds the configuration for the client build. The variable `serverConfig` meanwhile holds the configuration for the server build:

```JavaScript
var serverConfig = {
    context: clientConfig.context,
    entry: clientConfig.entry,
    target: 'node',
    output: {
        path: Path.resolve('./server/client'),
        filename: 'app.js',
        libraryTarget: 'commonjs2',
        publicPath: '/starwars',
    },
    resolve: clientConfig.resolve,
    module: clientConfig.module,
    plugins: [
        new NamedChunksPlugin,
        new NamedModulesPlugin,
        new HtmlWebpackPlugin({
            template: Path.resolve(`./src/index.html`),
            filename: Path.resolve(`./server/client/index.html`),
        }),
        new ExtractTextPlugin('styles.css'),
    ],
    devtool: clientConfig.devtool,
};
```

The most notable difference is the specification of `node` as the target. The output options are also different. We save the output files to `server/client`. Our Node.js code will be reading from this directory. We also have to specify `commonjs2`, the format used by Node.js, as the library target. For reasons unknown, this is not done automatically.

Another thing we need to do is extract CSS rules to a separate .css file instead of loading them through JavaScript. It's a common task that was omitted from the earlier examples. WebPack's [Extract Text Plugin](https://github.com/webpack-contrib/extract-text-webpack-plugin) is used for this purpose.

## Client-side code changes

The source file [main.js](https://github.com/chung-leong/relaks-starwars-example-isomorphic/blob/master/src/main.js) serves as our app's entry point. In the previous examples, all it does is render the `Application` component into a DIV in the DOM. To support SSR, we need to make the code behave differently when it's running on the server. When the `window` object is absent, the following code path is used:

```javascript
async function serverSideRender(options) {
    let dataSource = new DjangoDataSource({
        baseURL: `${options.host}${dataSourceBaseURL}`,
        fetchFunc: options.fetch,
    });
    dataSource.activate();

    let routeManager = new RouteManager({
        routes,
        basePath: pageBasePath,
    });
    routeManager.activate();
    await routeManager.start(options.path);

    let ssrElement = h(Application, { dataSource, routeManager, ssr: options.target });
    return harvest(ssrElement);
}

exports.render = serverSideRender;
```

The function above is called from Node.js. It first initiates the data source and route manager, using options provided by the server-side code. Then it creates the `Application` element. This is given to `harvest()`, whose return value is a promise of the eventual results.

On the client-side, we call `RouteManager.start()` without any argument, as the current URL can be obtained from the `location` object. On the server-side, we need to call it with the desired path.

The `ssr` prop given to `Application` has two possible values: `seo` and `hydrate`. It lets the app make adjustments based on whether it's generating HTML for SEO. The `fetchList()` and `fetchMultiple()` methods are modified as follows:

```javascript
fetchList(url, options) {
    if (this.ssr === 'seo') {
        options = Object.assign({}, options, { minimum: '100%' });
    }
    return this.dataSource.fetchList(url, options);
}

fetchMultiple(urls, options) {
    if (this.ssr === 'seo') {
        options = Object.assign({}, options, { minimum: '100%' });
    }
    return this.dataSource.fetchMultiple(urls, options);
}
```

When we're optimizing for search, we place all available contents into the static page. When we're optimizing for time-to-first-impression, we only load a single page of data, presumably enough to fill the screen.

When the `window` object is present, the app is running in a web-browser. The following code path is used instead:

```javascript
async function initialize(evt) {
    let host = `${location.protocol}//${location.host}`;
    let dataSource = new DjangoDataSource({
        baseURL: `${host}${dataSourceBaseURL}`,
    });
    dataSource.activate();

    let routeManager = new RouteManager({
        routes,
        basePath: pageBasePath,
        preloadingDelay: 2000,
    });
    routeManager.activate();
    await routeManager.start();

    let appContainer = document.getElementById('app-container');
    if (!appContainer) {
        throw new Error('Unable to find app element in DOM');
    }
    let ssrElement = h(Application, { dataSource, routeManager, ssr: 'hydrate' });
    await harvest(ssrElement);
    let appElement = h(Application, { dataSource, routeManager });
    render(appElement, appContainer, appContainer.firstChild);
}

window.addEventListener('load', initialize);
```

The code is almost the same as before. The critical addition here is the call to `harvest()`. Even though we have no need to generate HTML, we still perform the operation so that data required by the initial render is pulled into the cache of `DjangoDataSource`. When we render the application "for real", queries for data will succeed immediately.

In the first `Application` element, `ssr` is set to `hydrate`, matching what was done on the server. In certain usage scenarios, the prop can be used to bypass operations that only make sense in the CSR context. For example, suppose a section in our app uses the [Geolocation API](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API) to find shops near the visitor. We don't want this code to run in Node.js, since the capability simply isn't there. We also don't want this code to run in the browser during our initial dry-run, since obtaining the user's location requires permission. `harvest()` would otherwise end up getting stuck on a promise that isn't fulfilled until the user click the "Allow" button.

Because we're not rendering into an empty DOM node, we need to pass a third argument to `render()` so that it replaces the existing child node instead of appending to it. This is basically equivalent to calling `ReactDOM.hydrate()` in React.

## Adjustments to HTML template

The `body` element in [index.html](https://github.com/chung-leong/relaks-starwars-example-isomorphic/blob/master/src/index.html) was changed from

```html
<body>
    <div id="app-container"></div>
</body>
```
to

```html
<body class="ssr">
    <div id="app-container"><!--APP--></div>
</body>
```

The class name allows us to style the page a little differently depending on whether it's SSR or CSR. It's removed in `Application.componentDidMount()`. The HTML comment lets our server-side code know where to place the generated contents.

## Server-side code

Our server-side code consists of a single script: [index.js](https://github.com/chung-leong/relaks-starwars-example-isomorphic/blob/master/server/index.js). It uses [Express](https://expressjs.com/) to handle page requests. The following function is responsible for generating SSR pages:

```javascript
function handlePageRequest(req, res) {
    var host = getHostLocation(req);
    var path = req.url;
    var noScript = (req.query.js === '0')
    var target = (req.isSpider() || noScript) ? 'seo' : 'hydrate';
    var options = { host, path, target, fetch: CrossFetch };
    ClientApp.render(options).then((rootNode) => {
        var appHTML = PreactSSR.render(rootNode);
        var indexHTMLPath = `${__dirname}/client/index.html`;
        if (target === 'hydrate') {
            // add <noscript> tag to redirect to SEO version
            var meta = `<meta http-equiv=refresh content="0; url=?js=0">`;
            appHTML += `<noscript>${meta}</noscript>`;
        }
        return replaceHTMLComment(indexHTMLPath, 'APP', appHTML).then((html) => {
            res.type('html').send(html);
        });
    }).catch((err) => {
        handleRequestError(res, err);
    });
}
```

For compatibility purpose we're not using the ES7 `await` operator. The code above is equivalent to the following:

```javascript
function handlePageRequest(req, res) {    
    try {
        let host = getHostLocation(req);
        let path = req.url;
        let noScript = (req.query.js === '0')
        let target = (req.isSpider() || noScript) ? 'seo' : 'hydrate';
        let options = { host, path, target, fetch: CrossFetch };
        let rootNode = await ClientApp.render(options);
        let appHTML = PreactSSR.render(rootNode);
        let indexHTMLPath = `${__dirname}/client/index.html`;
        if (target === 'hydrate') {
            // add <noscript> tag to redirect to SEO version
            var meta = `<meta http-equiv=refresh content="0; url=?js=0">`;
            appHTML += `<noscript>${meta}</noscript>`;
        }
        let html = await replaceHTMLComment(indexHTMLPath, 'APP', appHTML);
        res.type('html').send(html);
    } catch (err) {
        handleRequestError(res, err);
    }
}
```

An Express middleware is used to detect if the request is from a search engine spider. When it is so--or when a query variable indicates the lack of JavaScript support--we set the SSR target to `seo`.

`ClientApp` is the SSR build of our app. After we've harvested the HTML tree, we pass it to [preact-render-to-string](https://github.com/developit/preact-render-to-string). We then stick the resulting HTML into `index.html` and send it to the browser.

The remaining code deals mainly with data retrieval. While in the previous examples we fetch data from [SWAPI.co](https://SWAPI.co), here we handle data requests ourselves so that the demonstration is more realistic.

## Usage scenarios

One thing you might notice while looking at the [example](https://trambar.io/starwars/films/) is how clicking on a link brings up the page almost instantaneously. This is because we must fetch a complete object even when we only need just one of its properties. In the **Films** page for instance, we only need the films' titles. But we end up fetching all the information concerning them. The extra information enables us to display something immediately when the user subsequently clicks on a link. The inefficiency of a REST API actually works to our advantage by acting as a data-prefetch mechanism.

The dynamic described above can be especially useful at a content-heavy website. Imagine you're building a news portal. The front page will link to 20, 30 stories. For each story, a title and a short blurb is shown. Your REST API always returns complete objects. The full texts of the story are therefore fetched as well. If text is around 20 KB in size, your page wouldn't be ready until 400-600 KB have been downloaded. Visitors would be staring at a loading animation in the meantime if yours is a pure client-side solution. Employing server-side rendering masks this transfer time. Since the server will send only what's actually shown (titles and short blurbs), the (static) page will load quickly. And while the visitors are looking at the list and contemplating which story they wishes to read, stories are silently transferred to their computers. When they finally decides to click on one, it'll be there already. The story will appear immediately. If he doesn't like it, he can quickly go back to the list and choose another. The lack of a loading time penalty means visitors will be more willing to give a story a chance. That in turns helps increase page views at your site.

## Final words

We've reached the end of our trilogy of examples. Starting out with a very crude page we managed to build something with a certain measure of sophistication. I hope you managed to follow the examples without difficulty. That's the goal of Relaks: making it easy to program with React. If there's anything unclear, please [let me know](https://github.com/chung-leong/relaks-starwars-example-isomorphic/issues).

The Star Wars API examples only deal with data retrieval. If you wish to see an example involving data modification and user authentication, please consult the [Django todo list example](https://github.com/chung-leong/relaks-django-todo-example).
