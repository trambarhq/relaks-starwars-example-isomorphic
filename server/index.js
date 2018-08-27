var FS = require('fs');
var Express = require('express');
var PreactSSR = require('preact-render-to-string');
var ClientApp = require('./client/app');
global.fetch = require('cross-fetch');

var app = Express();
app.use('/starwars', Express.static(`${__dirname}/www`));
app.get('/starwars/*', function(req, res) {
    var target = 'hydrate';
    var path = req.url;
    var options = { path, target };
    console.log('URL: ', path);
    console.log('Target: ', target);
    ClientApp.render(options).then((rootNode) => {
        var appHTML = PreactSSR.render(rootNode);
        var indexHTMLPath = `${__dirname}/client/index.html`;
        return replaceHTMLComment(indexHTMLPath, 'APP', appHTML).then((html) => {
            res.type('html').send(html);
        });
    }).catch((err) => {
        res.type('text').status(400).send(err.stack);
    });
});
var server = app.listen(8080);

function replaceHTMLComment(path, comment, newElement) {
    return new Promise((resolve, reject) => {
        FS.readFile(path, 'utf-8', (err, text) => {
            if (!err) {
                var tag = `<!--${comment}-->`;
                var result = text.replace(tag, newElement);
                resolve(result);
            } else {
                reject(err);
            }
        });
    });
}
