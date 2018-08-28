module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		main: 0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("./" + chunkId + ".app.js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.resolve();
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/starwars";
/******/
/******/ 	// uncatched error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using System.import().catch()
/******/ 		});
/******/ 	};
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../relaks-django-data-source/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _stringify = __webpack_require__("../node_modules/babel-runtime/core-js/json/stringify.js");

var _stringify2 = _interopRequireDefault(_stringify);

var _promise = __webpack_require__("../node_modules/babel-runtime/core-js/promise.js");

var _promise2 = _interopRequireDefault(_promise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultOptions = {
    baseURL: '',
    refreshInterval: 0,
    authorizationKeyword: 'Token',
    abbreviatedFolderContents: false
};

function RelaksDjangoDataSource(options) {
    this.listeners = [];
    this.queries = [];
    this.authentications = [];
    this.authorizations = [];
    this.options = {};
    for (var name in defaultOptions) {
        if (options && options[name] !== undefined) {
            this.options[name] = options[name];
        } else {
            this.options[name] = defaultOptions[name];
        }
    }
}

var prototype = RelaksDjangoDataSource.prototype;

/**
 * Initialize the component
 */
prototype.initialize = function () {
    this.startExpirationCheck();
};

/**
 * Shutdown the component
 */
prototype.shutdown = function () {
    this.stopExpirationCheck();
};

/**
 * Attach an event handler
 *
 * @param  {String} type
 * @param  {Function} handler
 */
prototype.addEventListener = function (type, handler) {
    this.listeners.push({ type: type, handler: handler });
};

/**
 * Remove an event handler
 *
 * @param  {String} type
 * @param  {Function} handler
 */
prototype.removeEventListener = function (type, handler) {
    this.listeners = this.listeners.filter(function (listener) {
        return !(listener.type === type && listener.handler === handler);
    });
};

/**
 * Send event to event listeners, return true or false depending on whether
 * there were any listeners
 *
 * @param  {RelaksDjangoDataSourceEvent} evt
 *
 * @return {Boolean}
 */
prototype.triggerEvent = function (evt) {
    var fired = false;
    this.listeners.forEach(function (listener) {
        if (listener.type === evt.type && listener.handler) {
            fired = true;
            listener.handler(evt);
        }
    });
    return fired;
};

/**
 * Add baseURL to relative URL
 *
 * @param  {String} url
 *
 * @return {String}
 */
prototype.resolveURL = function (url) {
    if (typeof url !== 'string') {
        return url;
    }
    var baseURL = this.options.baseURL;
    if (!baseURL || /^https?:/.test(url)) {
        return url;
    }
    return removeTrailingSlash(baseURL) + addLeadingSlash(url);
};

/**
 * Resolve a list of URLs
 *
 * @param  {Array<String>} urls
 *
 * @return {Array<String>}
 */
prototype.resolveURLs = function (urls) {
    var _this = this;
    return urls.map(function (url) {
        return _this.resolveURL(url);
    });
};

/**
 * Fetch one object at the URL.
 *
 * @param  {String} url
 * @param  {Object|undefined} options
 *
 * @return {Promise<Object>}
 */
prototype.fetchOne = function (url, options) {
    var _this = this;
    var absURL = this.resolveURL(url);
    var props = {
        type: 'object',
        url: absURL,
        options: options || {}
    };
    var query = this.findQuery(props);
    if (!query) {
        query = this.deriveQuery(props);
    }
    if (!query) {
        query = props;
        query.promise = this.get(absURL).then(function (response) {
            var object = response;
            _this.updateQuery(query, {
                object: object,
                retrievalTime: getTime()
            });
            return object;
        });
        this.addQuery(query);
    }
    return query.promise.then(function (object) {
        if (query.dirty) {
            _this.refreshOne(query);
        }
        return object;
    });
};

/**
 * Fetch a page of objects
 *
 * @param  {String} url
 * @param  {Number} page
 * @param  {Object|undefined} options
 *
 * @return {Promise<Array>}
 */
prototype.fetchPage = function (url, page, options) {
    var _this = this;
    var absURL = this.resolveURL(url);
    var props = {
        type: 'page',
        url: url,
        page: page,
        options: options || {}
    };
    var query = this.findQuery(props);
    if (!query) {
        var pageURL = attachPageNumber(absURL, page);
        query = props;
        query.promise = this.get(pageURL).then(function (response) {
            var objects = response.results;
            _this.updateQuery(query, {
                objects: objects,
                retrievalTime: getTime()
            });
            return objects;
        });
        this.addQuery(query);
    }
    return query.promise.then(function (objects) {
        if (query.dirty) {
            _this.refreshPage(query);
        }
        return objects;
    });
};

/**
 * Fetch a list of objects at the given URL.
 *
 * @param  {String} url
 * @param  {Object} options
 *
 * @return {Promise<Array>}
 */
prototype.fetchList = function (url, options) {
    var _this = this;
    var absURL = this.resolveURL(url);
    var props = {
        type: 'list',
        url: absURL,
        options: options || {}
    };
    var query = this.findQuery(props);
    if (!query) {
        query = props;
        query.promise = this.fetchNextPage(query, true);
        this.addQuery(query);
    }
    return query.promise.then(function (objects) {
        if (query.dirty) {
            _this.refreshList(query);
        }
        return objects;
    });
};

/**
 * Return what has been fetched. Used by fetchList().
 *
 * @param  {Object} query
 *
 * @return {Promise<Array>}
 */
prototype.fetchNoMore = function (query) {
    return query.promise;
};

/**
 * Initiate fetching of the next page. Used by fetchList().
 *
 * @param  {Object} query
 * @param  {Boolean} initial
 *
 * @return {Promise<Array>}
 */
prototype.fetchNextPage = function (query, initial) {
    if (query.nextPromise) {
        return query.nextPromise;
    }
    var _this = this;
    var nextURL = initial ? query.url : query.nextURL;
    var nextPromise = this.get(nextURL).then(function (response) {
        if (response instanceof Array) {
            // the full list is returned
            var objects = response;
            _this.updateQuery(query, {
                objects: objects,
                retrievalTime: getTime(),
                nextPromise: null
            });
            objects.more = _this.fetchNoMore.bind(_this, query);
            objects.total = objects.length;
            return objects;
        } else if (response instanceof Object) {
            // append retrieved objects to list
            var total = response.count;
            var objects = appendObjects(query.objects, response.results);
            _this.updateQuery(query, {
                objects: objects,
                promise: nextPromise,
                retrievalTime: initial ? getTime() : query.retrievalTime,
                nextURL: response.next,
                nextPage: (query.nextPage || 1) + 1,
                nextPromise: null
            });

            // attach function to results so caller can ask for more results
            if (query.nextURL) {
                objects.more = _this.fetchNextPage.bind(_this, query, false);
                objects.total = total;

                // if minimum is provide, fetch more if it's not met
                var minimum = getMinimum(query.options, total, NaN);
                if (objects.length < minimum) {
                    // fetch the next page
                    return _this.fetchNextPage(query, false);
                }
            } else {
                objects.more = _this.fetchNoMore.bind(_this, query);
                objects.total = objects.length;
            }

            // inform parent component that more data is available
            if (!initial) {
                _this.triggerEvent(new RelaksDjangoDataSourceEvent('change', _this));
            }
            return objects;
        }
    }).catch(function (err) {
        if (!initial) {
            _this.updateQuery(query, { nextPromise: null });
        }
        throw err;
    });
    if (!initial) {
        _this.updateQuery(query, { nextPromise: nextPromise });
    }
    return nextPromise;
};

/**
 * Fetch multiple JSON objects. If minimum is specified, then immediately
 * resolve with cached results when there're sufficient numbers of objects.
 * An onChange will be trigger once the full set is retrieved.
 *
 * @param  {Array<String>} urls
 * @param  {Object} options
 *
 * @return {Promise<Array>}
 */
prototype.fetchMultiple = function (urls, options) {
    // see which ones are cached already
    var _this = this;
    var cached = 0;
    var fetchOptions = {};
    for (var name in options) {
        if (name !== 'minimum') {
            fetchOptions[name] = options[name];
        }
    }
    var promises = urls.map(function (url) {
        var absURL = _this.resolveURL(url);
        var props = { url: absURL, type: 'object' };
        var query = _this.findQuery(props);
        if (!query) {
            query = _this.deriveQuery(props);
        }
        if (query && query.object) {
            cached++;
            return query.object;
        } else {
            return _this.fetchOne(absURL, fetchOptions);
        }
    });

    // wait for the complete list to arrive
    var completeListPromise;
    if (cached < urls.length) {
        completeListPromise = _promise2.default.all(promises);
    }

    // see whether partial result set should be immediately returned
    var minimum = getMinimum(options, urls.length, urls.length);
    if (cached < minimum && completeListPromise) {
        return completeListPromise;
    } else {
        if (completeListPromise) {
            // return partial list then fire change event when complete list arrives
            completeListPromise.then(function (objects) {
                _this.triggerEvent(new RelaksDjangoDataSourceEvent('change', _this));
            });
            return promises.map(function (object) {
                if (object.then instanceof Function) {
                    return null; // a promise--don't return it
                } else {
                    return object;
                }
            });
        } else {
            // list is complete already
            return promises;
        }
    }
};

/**
 * Reperform an query for an object, triggering an onChange event if the
 * object has changed.
 *
 * @param  {Object} query
 */
prototype.refreshOne = function (query) {
    if (query.refreshing) {
        return;
    }
    console.log('Refreshing object', query);
    this.updateQuery(query, { refreshing: true });

    var _this = this;
    var retrievalTime = getTime();
    this.get(query.url).then(function (response) {
        var object = response;
        var changed = true;
        if (matchObject(object, query.object)) {
            object = query.object;
            changed = false;
        }
        _this.updateQuery(query, {
            object: object,
            promise: _promise2.default.resolve(object),
            retrievalTime: retrievalTime,
            refreshing: false,
            dirty: false
        });
        if (changed) {
            _this.triggerEvent(new RelaksDjangoDataSourceEvent('change', _this));
        }
    }).catch(function (err) {
        _this.updateQuery(query, { refreshing: false });
    });
};

/**
 * Reperform an query for a page of objects, triggering an onChange event if
 * the list is different from the one fetched previously.
 *
 * @param  {Object} query
 */
prototype.refreshPage = function (query) {
    if (query.refreshing) {
        return;
    }
    console.log('Refreshing page', query.url);
    this.updateQuery(query, { refreshing: true });

    var _this = this;
    var retrievalTime = getTime();
    var pageURL = attachPageNumber(query.url, query.page);
    this.get(pageURL).then(function (response) {
        var objects = response.results;
        var changed = true;
        if (replaceIdentificalObjects(objects, query.objects)) {
            objects = query.objects;
            changed = false;
        }
        _this.updateQuery(query, {
            objects: objects,
            promise: _promise2.default.resolve(objects),
            retrievalTime: retrievalTime,
            refreshing: false,
            dirty: false
        });
        if (changed) {
            _this.triggerEvent(new RelaksDjangoDataSourceEvent('change', _this));
        }
    }).catch(function (err) {
        _this.updateQuery(query, { refreshing: false });
    });
};

/**
 * Reperform an query for a list of objects, triggering an onChange event if
 * the list is different from the one fetched previously.
 *
 * @param  {Object} query
 */
prototype.refreshList = function (query) {
    if (query.refreshing) {
        return;
    }
    console.log('Refreshing list', query.url);
    this.updateQuery(query, { refreshing: true });

    var _this = this;
    if (query.nextPage) {
        // updating paginated list
        // wait for any call to more() to finish first
        waitForNextPage(query).then(function () {
            // suppress fetching of additional pages for the time being
            var oldObjects = query.objects;
            var morePromise, moreResolve, moreReject;
            var fetchMoreAfterward = function fetchMoreAfterward() {
                if (!morePromise) {
                    morePromise = new _promise2.default(function (resolve, reject) {
                        moreResolve = resolve;
                        moreReject = reject;
                    });
                }
                return morePromise;
            };
            oldObjects.more = fetchMoreAfterward;

            var refreshedObjects;
            var pageRemaining = query.nextPage - 1;
            var nextURL = query.url;

            var refreshNextPage = function refreshNextPage() {
                return _this.get(nextURL).then(function (response) {
                    pageRemaining--;
                    nextURL = response.next;
                    refreshedObjects = appendObjects(refreshedObjects, response.results);
                    var total = response.count;
                    var objects = joinObjectLists(refreshedObjects, oldObjects);
                    var changed = true;
                    objects.more = fetchMoreAfterward;
                    objects.total = total;
                    if (replaceIdentificalObjects(objects, query.objects)) {
                        objects = query.objects;
                        changed = false;
                    }
                    // set query.nextURL to the URL given by the server
                    // in the event that new pages have become available
                    _this.updateQuery(query, {
                        objects: objects,
                        promise: _promise2.default.resolve(objects),
                        nextURL: pageRemaining === 0 ? nextURL : query.nextURL
                    });
                    if (changed) {
                        _this.triggerEvent(new RelaksDjangoDataSourceEvent('change', _this));
                    }
                    // keep going until all pages have been updated
                    if (pageRemaining > 0 && nextURL && query.nextURL !== nextURL) {
                        return refreshNextPage();
                    }
                });
            };

            var retrievalTime = getTime();
            refreshNextPage().then(function () {
                // we're done--reenable fetching of additional pages
                if (query.nextURL) {
                    query.objects.more = _this.fetchNextPage.bind(_this, query, false);
                } else {
                    query.objects.more = _this.fetchNoMore.bind(_this, query);
                }
                // trigger it if more() had been called
                if (morePromise) {
                    query.objects.more().then(moreResolve, moreReject);
                }
                _this.updateQuery(query, {
                    retrievalTime: retrievalTime,
                    refreshing: false,
                    dirty: false
                });
            }).catch(function (err) {
                _this.updateQuery(query, { refreshing: false });
            });
        });
    } else {
        // updating un-paginated list
        var retrievalTime = getTime();
        this.get(query.url).then(function (response) {
            var objects = response;
            var changed = true;
            if (replaceIdentificalObjects(objects, query.objects)) {
                objects = query.objects;
                changed = false;
            }
            objects.more = _this.fetchNoMore.bind(this, query);
            objects.total = objects.length;
            _this.updateQuery(query, {
                objects: objects,
                promise: _promise2.default.resolve(objects),
                retrievalTime: retrievalTime,
                refreshing: false,
                dirty: false
            });
            if (changed) {
                _this.triggerEvent(new RelaksDjangoDataSourceEvent('change', _this));
            }
        }).catch(function (err) {
            _this.updateQuery(query, { refreshing: false });
            throw err;
        });
    }
};

/**
 * Insert an object into remote database
 *
 * @param  {String} folderURL
 * @param  {Object} object
 *
 * @return {Promise<Object>}
 */
prototype.insertOne = function (folderURL, object) {
    return this.insertMultiple(folderURL, [object]).then(function (insertedObjects) {
        return insertedObjects[0];
    });
};

/**
 * Insert multiple objects into remote database
 *
 * @param  {String} folderURL
 * @param  {Array<Object>} objects
 *
 * @return {Promise<Array>}
 */
prototype.insertMultiple = function (folderURL, objects) {
    var _this = this;
    var folderAbsURL = this.resolveURL(folderURL);
    var promises = [];
    for (var i = 0; i < objects.length; i++) {
        promises.push(this.post(folderAbsURL, objects[i]));
    }
    return _promise2.default.all(promises).then(function (insertedObjects) {
        // sort the newly created objects
        var changed = false;
        _this.queries.forEach(function (query) {
            insertedObjects.some(function (insertedObject) {
                if (query.type === 'object') {
                    // object queries aren't affected by insert
                    // no point in looking at other objects
                    return true;
                } else if (query.type === 'page' || query.type === 'list') {
                    var objectFolderURL = getObjectFolderURL(folderAbsURL, insertedObject);
                    if (!matchURL(query.url, objectFolderURL)) {
                        return false;
                    }
                    // it isn't possible to insert objects into multiple folders
                    // simultaneously; code is implemented as such only for
                    // consistency sake
                    var inFolder = removeObjectsOutsideFolder(insertedObjects, objectFolderURL);
                    var defaultBehavior = 'refresh';
                    if (runHook(query, 'afterInsert', inFolder, defaultBehavior)) {
                        changed = true;
                    }
                    return true;
                }
            });
            return true;
        });
        if (changed) {
            _this.triggerEvent(new RelaksDjangoDataSourceEvent('change', _this));
        }
        return insertedObjects;
    });
};

/**
 * Update an object
 *
 * @param  {String} folderURL
 * @param  {Object} object
 *
 * @return {Promise<Object>}
 */
prototype.updateOne = function (folderURL, object) {
    // allow folderURL to be omitted
    if (object === undefined && folderURL instanceof Object) {
        object = folderURL;
        folderURL = null;
    }
    return this.updateMultiple(folderURL, [object]).then(function (results) {
        return results[0];
    });
};

/**
 * Save multiple objects
 *
 * @param  {String} folderURL
 * @param  {Array<Object>} objects
 *
 * @return {Promise<Array>}
 */
prototype.updateMultiple = function (folderURL, objects) {
    // allow folderURL to be omitted
    if (objects === undefined && folderURL instanceof Array) {
        objects = folderURL;
        folderURL = null;
    }
    var _this = this;
    var folderAbsURL = this.resolveURL(folderURL);
    var promises = [];
    for (var i = 0; i < objects.length; i++) {
        var object = objects[i];
        var absURL = getObjectURL(folderAbsURL, object);
        promises.push(absURL ? this.put(absURL, object) : null);
    }
    return _promise2.default.all(promises).then(function (updatedObjects) {
        var changed = false;
        _this.queries.forEach(function (query) {
            updatedObjects.some(function (updatedObject) {
                if (query.type === 'object') {
                    var objectURL = getObjectURL(folderAbsURL, updatedObject);
                    if (!matchURL(query.url, objectURL)) {
                        return false;
                    }
                    var defaultBehavior = 'replace';
                    if (runHook(query, 'afterUpdate', updatedObject, defaultBehavior)) {
                        changed = true;
                    }
                    return true;
                } else if (query.type === 'page' || query.type === 'list') {
                    var objectFolderURL = getObjectFolderURL(folderAbsURL, updatedObject);
                    if (!matchURL(query.url, objectFolderURL)) {
                        return false;
                    }
                    // filter out objects that aren't in the same folder
                    //
                    // only relevant when hyperlink-keys are used and
                    // objects in different folders are updated at
                    // the same time (folderURL has to be null)
                    var inFolder = removeObjectsOutsideFolder(updatedObjects, objectFolderURL);
                    var defaultBehavior = 'refresh';
                    if (runHook(query, 'afterUpdate', inFolder, defaultBehavior)) {
                        changed = true;
                    }
                    return true;
                }
            });
            return true;
        });
        if (changed) {
            _this.triggerEvent(new RelaksDjangoDataSourceEvent('change', _this));
        }
        return updatedObjects;
    });
};

prototype.deleteOne = function (url, object) {
    return this.deleteMultiple(url, [object]).then(function (results) {
        return results[0];
    });
};

prototype.deleteMultiple = function (folderURL, objects) {
    // allow folderURL to be omitted
    if (objects === undefined && folderURL instanceof Array) {
        objects = folderURL;
        folderURL = null;
    }
    var _this = this;
    var folderAbsURL = this.resolveURL(folderURL);
    var promises = [];
    for (var i = 0; i < objects.length; i++) {
        var object = objects[i];
        var absURL = getObjectURL(folderAbsURL, object);
        var promise = null;
        if (absURL) {
            promise = this.delete(absURL, object).then(function () {
                return object;
            });
        }
        promises.push(promise);
    }
    return _promise2.default.all(promises).then(function (deletedObjects) {
        var changed = false;
        var queries = _this.queries.filter(function (query) {
            var keep = true;
            deletedObjects.some(function (deletedObject) {
                if (query.type === 'object') {
                    var objectURL = getObjectURL(folderAbsURL, deletedObject);
                    if (!matchURL(query.url, objectURL)) {
                        return false;
                    }
                    var defaultBehavior = 'remove';
                    if (runHook(query, 'afterDelete', deletedObject, defaultBehavior)) {
                        if (query.dirty) {
                            keep = false;
                        }
                        changed = true;
                    }
                    return true;
                } else if (query.type === 'page' || query.type === 'list') {
                    var objectFolderURL = getObjectFolderURL(folderAbsURL, deletedObject);
                    if (!matchURL(query.url, objectFolderURL)) {
                        return false;
                    }
                    // see comment in updateMultiple()
                    var inFolder = removeObjectsOutsideFolder(deletedObjects, objectFolderURL);
                    var defaultBehavior = query.type === 'list' ? 'remove' : 'refresh';
                    if (runHook(query, 'afterDelete', inFolder, defaultBehavior)) {
                        changed = true;
                    }
                    return true;
                }
            });
            return keep;
        });
        if (changed) {
            _this.queries = queries;
            _this.triggerEvent(new RelaksDjangoDataSourceEvent('change', _this));
        }
        return deletedObjects;
    });
};

/**
 * Find an existing query
 *
 * @param  {Object} props
 *
 * @return {Object|undefined}
 */
prototype.findQuery = function (props) {
    return this.queries.find(function (query) {
        return matchQuery(query, props);
    });
};

/**
 * Derive a query for an item from an existing directory query
 *
 * @param  {Object} props
 *
 * @return {Object|undefined}
 */
prototype.deriveQuery = function (props) {
    var _this = this;
    var object;
    var folderURL = getFolderURL(props.url);
    this.queries.some(function (query) {
        if (query.type === 'page' || query.type === 'list') {
            var abbreviated = false;
            if (_this.options.abbreviatedFolderContents) {
                abbreviated = true;
            } else if (query.options.abbreviated) {
                abbreviated = true;
            }
            if (!abbreviated) {
                if (matchURL(query.url, folderURL)) {
                    query.objects.some(function (item) {
                        if (item.url === props.url) {
                            object = item;
                        }
                    });
                    return !!object;
                }
            }
        }
    });
    if (object) {
        return {
            type: 'object',
            url: props.url,
            promise: _promise2.default.resolve(object),
            object: object
        };
    }
};

/**
 * Add a query
 *
 * @param {Object} query
 */
prototype.addQuery = function (query) {
    this.queries = [query].concat(this.queries);
};

/**
 * Update a query
 *
 * @param  {Object} query
 * @param  {Object} props
 */
prototype.updateQuery = function (query, props) {
    for (var name in props) {
        query[name] = props[name];
    }
};

/**
 * Return a promise that will be resolved when authentication occurs or
 * attempt is canceled
 *
 * @param  {String} absURL
 *
 * @return {Promise<Boolean>}
 */
prototype.requestAuthentication = function (absURL) {
    var promise;
    this.authentications.some(function (authentication) {
        if (authentication.url === absURL) {
            promise = authentication.promise;
            return true;
        }
    });
    if (!promise) {
        // add the query prior to triggering the event, since the handler
        // may call authorize()
        var resolve;
        var authentication = {
            url: absURL,
            promise: new _promise2.default(function (r) {
                resolve = r;
            }),
            resolve: resolve
        };
        this.authentications.push(authentication);

        var authenticationEvent = new RelaksDjangoDataSourceEvent('authentication', this, {
            url: absURL
        });
        var eventHandled = this.triggerEvent(authenticationEvent);
        promise = authenticationEvent.waitForDecision().then(function () {
            if (eventHandled && !authenticationEvent.defaultPrevented) {
                // wait for authenticate() to get called
                // if authorize() was called, the promise would be resolved already
                return authentication.promise;
            } else {
                // take it back out
                var index = this.authentications.indexOf(authentication);
                this.authentications.splice(index, 1);
                return false;
            }
        });
    }
    return promise;
};

/**
 * Post user credentials to given URL in expectant of a authorization token
 *
 * @param  {String} loginURL
 * @param  {Object} credentials
 * @param  {Array<String>} allowURLs
 *
 * @return {Promise<Boolean>}
 */
prototype.authenticate = function (loginURL, credentials, allowURLs) {
    var _this = this;
    var loginAbsURL = this.resolveURL(loginURL);
    return this.post(loginAbsURL, credentials).then(function (response) {
        var token = response ? response.key : null;
        if (!token) {
            throw new Error('No authorization token');
        }
        return _this.authorize(loginURL, token, allowURLs);
    });
};

/**
 * Accept an authorization token, resolving any pending authentication promises
 *
 * @param  {String} loginURL
 * @param  {String} token
 * @param  {Array<String>} allowURLs
 *
 * @return {Promise<Boolean>}
 */
prototype.authorize = function (loginURL, token, allowURLs) {
    var _this = this;
    var loginAbsURL = this.resolveURL(loginURL);
    var allowAbsURLs = this.resolveURLs(allowURLs || ['/']);
    var authorizationEvent = new RelaksDjangoDataSourceEvent('authorization', this, {
        url: loginAbsURL,
        token: token
    });
    this.triggerEvent(authorizationEvent);
    return authorizationEvent.waitForDecision().then(function () {
        var acceptable = !authorizationEvent.defaultPrevented;
        if (acceptable) {
            // add authorization
            var authorization = {
                url: loginAbsURL,
                token: token,
                allow: allowAbsURLs,
                deny: []
            };
            // remove previous authorization
            _this.authorizations = _this.authorizations.filter(function (authorization) {
                authorization.allow = authorization.allow.filter(function (url) {
                    return allowAbsURLs.indexOf(url) === -1;
                });
                return authorization.allow.length > 0;
            });
            _this.authorizations.push(authorization);
        }
        // resolve and remove authentication querys
        _this.authentications = _this.authentications.filter(function (authentication) {
            if (matchAnyURL(authentication.url, allowAbsURLs)) {
                authentication.resolve(acceptable);
                return false;
            } else {
                return true;
            }
        });
        return acceptable;
    });
};

prototype.getAuthorizationToken = function (url) {
    var token;
    this.authorizations.some(function (authorization) {
        if (matchAnyURL(url, authorization.allow)) {
            if (!matchAnyURL(url, authorization.deny)) {
                token = authorization.token;
                return true;
            }
        }
    });
    return token;
};

prototype.cancelAuthentication = function (allowURLs) {
    var allowAbsURLs = this.resolveURLs(allowURLs || ['/']);
    this.authentications = this.authentications.filter(function (authentication) {
        if (matchAnyURL(authentication.url, allowAbsURLs)) {
            authentication.resolve(false);
            return false;
        } else {
            return true;
        }
    });
};

prototype.cancelAuthorization = function (denyURLs) {
    var denyAbsURLs = this.resolveURLs(denyURLs || ['/']);
    this.authorizations = this.authorizations.filter(function (authorization) {
        authorization.allow = authorization.allow.filter(function (url) {
            return denyURLs.indexOf(url) === -1;
        });
        // add to deny list if it's still allowed
        denyAbsURLs.forEach(function (url) {
            if (matchAnyURL(url, authorization.allow)) {
                authorization.deny.push(url);
            }
        });
        return authorization.allow.length > 0;
    });
};

prototype.revokeAuthorization = function (logoutURL) {
    var logoutAbsURL = this.resolveURLs(logoutURL);
    return fetch(logoutAbsURL, options).then(function (response) {
        if (response.status < 400) {
            return response.json();
        } else {
            throw new Error(response.statusText);
        }
    }).then(function (response) {
        this.authorizations = this.authorizations.filter(function (authorization) {
            var folderURL1 = getFolderURL(authorization.url);
            var folderURL2 = getFolderURL(logoutAbsURL);
            return folderURL1 !== folderURL2;
        });
    });
};

/**
 * Start expiration checking
 */
prototype.startExpirationCheck = function () {
    if (this.options.refreshInterval > 0) {
        if (!this.expirationCheckInterval) {
            var _this = this;
            this.expirationCheckInterval = setInterval(function () {
                _this.checkExpiration();
            }, 5000);
        }
    }
};

/**
 * Stop expiration checking
 */
prototype.stopExpirationCheck = function () {
    if (this.expirationCheckInterval) {
        clearInterval(this.expirationCheckInterval);
        this.expirationCheckInterval = 0;
    }
};

/**
 * Mark queries as dirty and trigger onChange event when enough time has passed
 */
prototype.checkExpiration = function () {
    var interval = Number(this.options.refreshInterval);
    if (!interval) {
        return;
    }
    var limit = getTime(-interval);
    var changed = false;
    var queries = this.queries.filter(function (query) {
        if (!query.dirty) {
            if (query.retrievalTime < limit) {
                query.dirty = true;
                changed = true;
            }
        }
        return true;
    });
    if (changed) {
        this.queries = queries;
        this.triggerEvent(new RelaksDjangoDataSourceEvent('change', this));
    }
};

/**
 * Fetch JSON object at URL
 *
 * @param  {String} url
 *
 * @return {Promise<Object>}
 */
prototype.get = function (url) {
    var options = {
        method: 'GET',
        headers: {}
    };
    return this.request(url, options);
};

prototype.post = function (url, object) {
    var options = {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        headers: {
            'Content-Type': 'application/json; charset=utf-8'
        },
        body: (0, _stringify2.default)(object)
    };
    return this.request(url, options);
};

prototype.put = function (url, object) {
    var options = {
        method: 'PUT',
        mode: 'cors',
        cache: 'no-cache',
        headers: {
            'Content-Type': 'application/json; charset=utf-8'
        },
        body: (0, _stringify2.default)(object)
    };
    return this.request(url, options);
};

prototype.delete = function (url, object) {
    var options = {
        method: 'DELETE',
        mode: 'cors',
        cache: 'no-cache',
        headers: {}
    };
    return this.request(url, options);
};

prototype.request = function (url, options) {
    var _this = this;
    var token = this.getAuthorizationToken(url);
    if (token) {
        var keyword = this.options.authorizationKeyword;
        options.headers['Authorization'] = keyword + ' ' + token;
    }
    return fetch(url, options).then(function (response) {
        if (response.status < 400) {
            if (response.status == 204) {
                return '';
            }
            return response.json();
        } else if (response.status === 401) {
            return _this.requestAuthentication(url).then(function (authenticated) {
                if (authenticated) {
                    delete options.headers['Authorization'];
                    return _this.request(url, options);
                } else {
                    throw new Error(response.statusText);
                }
            });
        } else {
            throw new Error(response.statusText);
        }
    });
};

/**
 * Run hook function on an cached fetch query after an insert, update, or
 * delete operation. Return true when query is changed.
 *
 * @param  {Object} query
 * @param  {String} hookName
 * @param  {Array<Object>|Object} input
 * @param  {String} defaultBehavior
 *
 * @return {Boolean}
 */
function runHook(query, hookName, input, defaultBehavior) {
    var hookFunc = query.options ? query.options[hookName] : null;
    if (!hookFunc) {
        hookFunc = defaultBehavior;
    }
    if (typeof hookFunc === 'string') {
        switch (hookFunc) {
            case 'refresh':
                hookFunc = refreshQuery;
                break;
            case 'ignore':
                hookFunc = ignoreChange;
                break;
            default:
                switch (query.type + '::' + hookFunc) {
                    case 'object::replace':
                        hookFunc = replaceObject;
                        break;
                    case 'list::replace':
                    case 'page::replace':
                        hookFunc = replaceObjects;
                        break;
                    case 'list::unshift':
                    case 'page::unshift':
                        hookFunc = unshiftObjects;
                        break;
                    case 'list::push':
                    case 'page::push':
                        hookFunc = pushObjects;
                        break;
                    case 'object::remove':
                        hookFunc = removeObject;
                        break;
                    case 'list::remove':
                    case 'page::remove':
                        hookFunc = removeObjects;
                        break;
                    default:
                        throw new Error('Unknown hook name: ' + hookFunc);
                }
        }
    }
    if (query.type === 'object') {
        var impact;
        if (query.object) {
            impact = hookFunc(query.object, input);
        } else {
            // need to run query again, in case the data currently in flight
            // is already stale
            impact = true;
        }
        if (impact === false) {
            return false;
        }
        if (impact instanceof Object) {
            var object = impact;
            query.object = object;
            query.promise = _promise2.default.resolve(object);
        } else {
            query.dirty = true;
        }
        return true;
    } else if (query.type === 'page' || query.type === 'list') {
        var impact;
        if (query.objects) {
            // get rid of null and sort list by ID or URL
            input = input.filter(Boolean);
            sortObjects(input);
            impact = hookFunc(query.objects, input);
        } else {
            // see above
            impact = true;
        }
        if (impact === false) {
            return false;
        }
        if (impact instanceof Array) {
            var objects = impact;
            if (query.type === 'list') {
                // update the total
                var diff = objects.length - query.objects.length;
                objects.total = query.objects.total + diff;

                // restore more function
                objects.more = query.objects.more;
            }
            query.objects = objects;
            query.promise = _promise2.default.resolve(objects);
        } else {
            query.dirty = true;
        }
        return true;
    }
}

/**
 * Return false to indicate that change should be ignored
 *
 * @return {false}
 */
function ignoreChange() {
    return false;
}

/**
 * Return true to indicate that query should be rerun
 *
 * @return {true}
 */
function refreshQuery() {
    return true;
}

/**
 * Return the new object
 *
 * @param  {Object} object
 * @param  {Object} newObject
 *
 * @return {Object|false}
 */
function replaceObject(object, newObject) {
    if (!matchObject(newObject, object)) {
        return newObject;
    }
    return false;
}

/**
 * Replace old version of objects with new ones
 *
 * @param  {Array<Object>]} objects
 * @param  {Array<Object>} newObjects
 *
 * @return {Array<Object>|false}
 */
function replaceObjects(objects, newObjects) {
    var changed = false;
    var newList = objects.map(function (object) {
        var newObject = findObject(newObjects, object);
        if (newObject) {
            if (!matchObject(newObject, object)) {
                changed = true;
                return newObject;
            }
        }
        return object;
    });
    return changed ? newList : false;
}

/**
 * Add new objects at beginning of list
 *
 * @param  {Array<Object>} objects
 * @param  {Array<Object>} newObjects
 *
 * @return {Array<Object>|false}
 */
function unshiftObjects(objects, newObjects) {
    var changed = false;
    var newList = objects.slice();
    newObjects.forEach(function (object) {
        var index = findObjectIndex(newList, object);
        if (index === -1) {
            newList.unshift(object);
            changed = true;
        } else if (!matchObject(newList[index], object)) {
            newList[index] = object;
            changed = true;
        }
    });
    return changed ? newList : false;
}

/**
 * Add new objects at end of list
 *
 * @param  {Array<Object>} objects
 * @param  {Array<Object>} newObjects
 *
 * @return {Array<Object>|false}
 */
function pushObjects(objects, newObjects) {
    var changed = false;
    var newList = objects.slice();
    newObjects.forEach(function (object) {
        var index = findObjectIndex(newList, object);
        if (index === -1) {
            newList.push(object);
            changed = true;
        } else if (!matchObject(newList[index], object)) {
            newList[index] = object;
            changed = true;
        }
    });
    return changed ? newList : false;
}

/**
 * Return true to indicate that query should be removed
 *
 * @param  {Object} object
 * @param  {Object} deletedOBject
 *
 * @return {true}
 */
function removeObject(object, deletedOBject) {
    return true;
}

/**
 * Remove objects from list
 *
 * @param  {Array<Object>} objects
 * @param  {Array<Object>} deletedObjects
 *
 * @return {Array<Object>|false}
 */
function removeObjects(objects, deletedObjects) {
    var changed = false;
    var newList = objects.filter(function (object) {
        if (findObjectIndex(deletedObjects, object) !== -1) {
            changed = true;
            return false;
        } else {
            return true;
        }
    });
    return changed ? newList : false;
}

/**
 * See if a query has the given properties
 *
 * @param  {Object} query
 * @param  {Object} props
 *
 * @return {Boolean}
 */
function matchQuery(query, props) {
    for (var name in props) {
        if (!matchObject(query[name], props[name])) {
            return false;
        }
    }
    return true;
}

/**
 * See if two objects are identical
 *
 * @param  {*} object1
 * @param  {*} object2
 *
 * @return {Boolean}
 */
function matchObject(object1, object2) {
    if (object1 !== object2) {
        if (object1 instanceof Object && object2 instanceof Object) {
            if (object1.constructor !== object2.constructor) {
                return false;
            }
            if (object1 instanceof Array) {
                if (object1.length !== object2.length) {
                    return false;
                }
                for (var i = 0; i < object1.length; i++) {
                    if (!matchObject(object1[i], object2[i])) {
                        return false;
                    }
                }
            } else if (object1 instanceof Function) {
                if (object1.toString() !== object2.toString()) {
                    return false;
                }
            } else {
                for (var name in object1) {
                    if (!matchObject(object1[name], object2[name])) {
                        return false;
                    }
                }
                for (var name in object2) {
                    if (!(name in object1)) {
                        return false;
                    }
                }
            }
        } else {
            return false;
        }
    }
    return true;
}

/**
 * Check if the given URL match any in the list
 *
 * @param  {String} url
 * @param  {Array<String>} otherURLs
 *
 * @return {Boolean}
 */
function matchAnyURL(url, otherURLs) {
    return otherURLs.some(function (otherURL) {
        if (otherURL === url) {
            return true;
        } else if (url.substr(0, otherURL.length) === otherURL) {
            var lc = otherURL.charAt(otherURL.length - 1);
            var ec = url.charAt(otherURL.length);
            if (lc === '/' || ec === '/') {
                return true;
            }
        }
    });
}

/**
 * Remove trailing slash from URL
 *
 * @param  {String} url
 *
 * @return {String}
 */
function removeTrailingSlash(url) {
    var lc = url.charAt(url.length - 1);
    if (lc === '/') {
        return url.substr(0, url.length - 1);
    }
    return url;
}

/**
 * Add leading slash to URL
 *
 * @param  {String} url
 *
 * @return {String}
 */
function addLeadingSlash(url) {
    var fc = url.charAt(0);
    if (fc !== '/') {
        return '/' + url;
    }
    return url;
}

/**
 * Return the URL of the parent folder
 *
 * @param  {String} url
 *
 * @return {String}
 */
function getFolderURL(url) {
    var ei = url.lastIndexOf('/');
    if (ei === url.length - 1) {
        ei = url.lastIndexOf('/', ei - 1);
    }
    if (ei !== -1) {
        return url.substr(0, ei + 1);
    }
}

function getObjectURL(folderURL, object) {
    if (!object) {
        return;
    }
    if (folderURL && object.id) {
        return removeTrailingSlash(folderURL) + '/' + object.id + '/';
    } else if (object.url) {
        return object.url;
    }
}

function getObjectFolderURL(folderURL, object) {
    if (!object) {
        return;
    }
    if (folderURL && object.id) {
        return folderURL;
    } else if (object.url) {
        return getFolderURL(object.url);
    }
}

/**
 * Append the variable "page" to a URL's query, unless page equals 1.
 *
 * @param  {String} url
 * @param  {Number} page
 *
 * @return {String}
 */
function attachPageNumber(url, page) {
    if (page === 1) {
        return url;
    }
    var qi = url.indexOf('?');
    var sep = qi === -1 ? '?' : '&';
    return sep + 'page=' + page;
}

function waitForNextPage(query) {
    return query.nextPromise || _promise2.default.resolve();
}

function matchURL(url1, url2) {
    var qi = url1.lastIndexOf('?');
    if (qi !== -1) {
        url1 = url1.substr(0, qi);
    }
    return url1 === url2;
}

/**
 * Find the position of an object in an array based on id or URL. Return -1 if
 * the object is not there.
 *
 * @param  {Array<Object>} list
 * @param  {Object} object
 *
 * @return {Number}
 */
function findObjectIndex(list, object) {
    var keyA = object.id || object.url;
    for (var i = 0; i < list.length; i++) {
        var obj = list[i];
        if (obj) {
            var keyB = obj.id || obj.url;
            if (keyA === keyB) {
                return i;
            }
        }
    }
    return -1;
}

/**
 * Find an object in an array based on ID or URL.
 *
 * @param  {[type]} list
 * @param  {[type]} object
 *
 * @return {Object|undefined}
 */
function findObject(list, object) {
    var index = findObjectIndex(list, object);
    if (index !== -1) {
        return list[index];
    }
}

/**
 * Sort a list of objects based on ID or URL
 *
 * @param  {Array<Object>} list
 */
function sortObjects(list) {
    list.sort(function (a, b) {
        var keyA = a.id || a.url;
        var keyB = b.id || b.url;
        if (keyA < keyB) {
            return -1;
        } else if (keyA > keyB) {
            return +1;
        } else {
            return 0;
        }
    });
}

/**
 * Append objects to a list, making sure duplicates aren't added
 *
 * @param  {Array<Object>} list
 * @param  {Array<Object>} objects
 *
 * @return {Array<Object>}
 */
function appendObjects(list, objects) {
    if (!list) {
        return objects;
    } else {
        objects = objects.filter(function (object) {
            return findObjectIndex(list, object) === -1;
        });
        return list.concat(objects);
    }
}

/**
 * Replace objects in newList that are identical to their counterpart in oldList.
 * Return true if newList is identical to oldList.
 *
 * @param  {Array<Object>} newList
 * @param  {Array<Object>} oldList
 *
 * @return {Boolean}
 */
function replaceIdentificalObjects(newList, oldList) {
    var unchanged = 0;
    for (var i = 0; i < newList.length; i++) {
        var oldIndex = findObjectIndex(oldList, newList[i]);
        if (oldIndex !== -1) {
            if (matchObject(newList[i], oldList[oldIndex])) {
                newList[i] = oldList[oldIndex];
                if (i === oldIndex) {
                    unchanged++;
                }
            }
        }
    }
    return unchanged === newList.length && newList.length === oldList.length;
}

/**
 * Attach objects from an older list to a new list that's being retrieved.
 *
 * @param  {Array<Object>} newList
 * @param  {Array<Object>} oldList
 *
 * @return {Array<Object>}
 */
function joinObjectLists(newList, oldList) {
    // find point where the two list intersect
    var startIndex = 0;
    for (var i = newList.length - 1; i >= 0; i--) {
        var newObject = newList[i];
        var oldIndex = findObjectIndex(oldList, newObject);
        if (oldIndex !== -1) {
            startIndex = oldIndex + 1;
            break;
        }
    }
    // remove objects ahead of the intersection from the old list, as well
    // as any object that is present in the new list (due to change in order)
    var oldObjects = oldList.filter(function (object, index) {
        if (index >= startIndex) {
            return findObjectIndex(newList, object) === -1;
        }
    });
    return newList.concat(oldObjects);
}

/**
 * Filter out objects that aren't in the directory. Will always return the
 * same list when objects are keyed by ID and not URL
 *
 * @param  {Array<Object>} objects
 * @param  {String} folderURL
 *
 * @return {Array<Object>}
 */
function removeObjectsOutsideFolder(objects, folderURL) {
    return objects.filter(function (object) {
        var otherfolderURL = getObjectFolderURL(folderURL, object);
        if (otherfolderURL === folderURL) {
            return true;
        }
    });
}

/**
 * Get parameter 'minimum' from options. If it's a percent, then calculate the
 * minimum object count based on total. If it's negative, substract the value
 * from the total.
 *
 * @param  {Object} options
 * @param  {Number} total
 * @param  {Number} def
 *
 * @return {Number}
 */
function getMinimum(options, total, def) {
    var minimum = options ? options.minimum : undefined;
    if (typeof minimum === 'string') {
        minimum = minimum.trim();
        if (minimum.charAt(minimum.length - 1) === '%') {
            var percent = parseInt(minimum);
            minimum = Math.ceil(total * (percent / 100));
        }
    }
    if (minimum < 0) {
        minimum = total - minimum;
        if (minimum < 1) {
            minimum = 1;
        }
    }
    return minimum || def;
}

/**
 * Return the current time in ISO format, adding a delta optionally
 *
 * @param  {Number|undefined} delta
 *
 * @return {String}
 */
function getTime(delta) {
    var date = new Date();
    if (delta) {
        date = new Date(date.getTime() + delta);
    }
    return date.toISOString();
}

function RelaksDjangoDataSourceEvent(type, target, props) {
    this.type = type;
    this.target = target;
    for (var name in props) {
        this[name] = props[name];
    }
    this.defaultPrevented = false;
    this.decisionPromise = null;
}

var prototype = RelaksDjangoDataSourceEvent.prototype;

prototype.preventDefault = function () {
    this.defaultPrevented = true;
};

prototype.postponeDefault = function (promise) {
    if (!promise || !(promise.then instanceof Function)) {
        this.decisionPromise = promise;
    }
};

prototype.waitForDecision = function () {
    return this.decisionPromise || _promise2.default.resolve();
};

module.exports = RelaksDjangoDataSource;
module.exports.RelaksDjangoDataSource = RelaksDjangoDataSource;
module.exports.RelaksDjangoDataSourceEvent = RelaksDjangoDataSourceEvent;

/***/ }),

/***/ "../../relaks-harvest/function.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _promise = __webpack_require__("../node_modules/babel-runtime/core-js/promise.js");

var _promise2 = _interopRequireDefault(_promise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = function (React) {

    var IS_PREACT = React.h instanceof Function;
    var Meanwhile = __webpack_require__("../../relaks-harvest/meanwhile.js");

    /**
     * Harvest HTML and text nodes
     *
     * @param  {[type]} node
     *
     * @return {Promise<Vnode>}
     */
    function harvest(node) {
        try {
            var harvested = harvestNode(node, {});
            if (!isPromise(harvested)) {
                // always return a promise
                harvested = _promise2.default.resolve(harvested);
            }
            return harvested;
        } catch (err) {
            return _promise2.default.reject(err);
        }
    }

    /**
     * Harvest HTML and text nodes
     *
     * @param  {VNode} node
     * @param  {Object} context
     *
     * @return {VNode|Promise<VNode>}
     */
    function harvestNode(node, context) {
        if (!(node instanceof Object)) {
            return node;
        }
        var asyncRendering = null;
        var type = getNodeType(node);
        if (type instanceof Function) {
            // it's a component
            var rendered;
            var props = getNodeProps(node, type);
            if (type.prototype && type.prototype.render instanceof Function) {
                // stateful component
                var componentClass = type;
                var component = new componentClass(props, context);
                component.props = props;
                component.context = context;
                var state = component.state;
                if (componentClass.getDerivedStateFromProps) {
                    var originalState = state;
                    var derivedState = componentClass.getDerivedStateFromProps(props, originalState);
                    state = {};
                    assign(state, originalState);
                    assign(state, derivedState);
                    component.state = state;
                } else if (component.componentWillMount) {
                    if (!IS_PREACT) {
                        component.updater = ReactUpdater;
                    }
                    component.componentWillMount();
                    state = component.state;
                } else if (component.UNSAFE_componentWillMount) {
                    if (!IS_PREACT) {
                        component.updater = ReactUpdater;
                    }
                    component.UNSAFE_componentWillMount();
                    state = component.state;
                }
                if (component.relaks && component.renderAsync instanceof Function) {
                    // create bogus meanwhile object that doesn't do anything
                    var meanwhile = new Meanwhile(component);
                    if (IS_PREACT) {
                        rendered = component.renderAsync(meanwhile, props, state, context);
                    } else {
                        rendered = component.renderAsync(meanwhile);
                    }
                    if (isPromise(rendered)) {
                        asyncRendering = rendered;
                    }
                } else {
                    if (IS_PREACT) {
                        rendered = component.render(props, state, context);
                    } else {
                        rendered = component.render();
                    }
                }
            } else {
                // stateless component
                var statelessComponentFunc = type;
                rendered = statelessComponentFunc(props, context);
            }
            if (!asyncRendering) {
                // harvest what was rendered
                return harvestNode(rendered, context);
            } else {
                // wait for asynchronous rendering to finish
                return asyncRendering.then(function (rendered) {
                    return harvestNode(rendered, context);
                });
            }
        } else {
            // harvest HTML+text nodes from children
            return harvestChildren(node, context);
        }
    }

    /**
     * Harvest HTML and text nodes of a node's children
     *
     * @param  {ReactElement|VNode} node
     * @param  {Object} context
     *
     * @return {ReactElement|VNode|Promise<ReactElement|VNode>}
     */
    function harvestChildren(node, context) {
        var children = getNodeChildren(node);
        var newChildren;
        if (children instanceof Array) {
            newChildren = harvestNodes(children, context);
        } else {
            newChildren = harvestNode(children, context);
        }
        var asyncRendering = null;
        if (isPromise(newChildren)) {
            asyncRendering = newChildren;
        }
        if (newChildren === children) {
            return node;
        }
        if (!asyncRendering) {
            // return new node with new children immediate
            return replaceChildren(node, newChildren);
        } else {
            // wait for asynchrounous rendering of children
            return asyncRendering.then(function (newChildren) {
                return replaceChildren(node, newChildren);
            });
        }
    }

    /**
     * Harvest HTML and text nodes from an array
     *
     * @param  {Array<ReactElement|VNode>} node
     * @param  {Object} context
     *
     * @return {Array|Promise<Array>}
     */
    function harvestNodes(nodes, context) {
        var changed = false;
        var asyncRenderingRequired = false;
        var newNodes = nodes.map(function (element) {
            var harvested;
            if (element instanceof Array) {
                harvested = harvestNodes(element, context);
            } else {
                harvested = harvestNode(element, context);
            }
            if (isPromise(harvested)) {
                asyncRenderingRequired = true;
            }
            changed = changed || harvested !== element;
            return harvested;
        });
        if (!asyncRenderingRequired) {
            // return original list if nothing has changed
            return changed ? newNodes : nodes;
        } else {
            // wait for promises to resolve
            return _promise2.default.all(newNodes);
        }
    }

    /**
     * Return a new node if children are different
     *
     * @param  {ReactElement|VNode} node
     * @param  {Array} newChildren
     *
     * @return {ReactElement|VNode}
     */
    function replaceChildren(node, newChildren) {
        return React.cloneElement(node, undefined, newChildren);
    }

    /**
     * Copy properties
     *
     * @param  {Object} dest
     * @param  {Object} src
     *
     * @return {Object}
     */
    function assign(dest, src) {
        for (var name in src) {
            dest[name] = src[name];
        }
        return dest;
    }

    /**
     * Return a node's type
     *
     * @param  {ReactElement|VNode} node
     *
     * @return {String|Function}
     */
    function getNodeType(node) {
        return IS_PREACT ? node.nodeName : node.type;
    }

    /**
     * Return the props of a node
     *
     * @param  {ReactElement|VNode} node
     * @param  {Function} type
     *
     * @return {Object}
     */
    function getNodeProps(node, type) {
        var props = {};
        if (IS_PREACT) {
            assign(props, node.attributes);
            props.children = node.children;
        } else {
            assign(props, node.props);
            Object.defineProperty(props, 'children', { value: node.props.children });
        }

        // apply default props
        var defaultProps = type.defaultProps;
        for (var name in defaultProps) {
            if (props[name] === undefined) {
                props[name] = defaultProps[name];
            }
        }
        return props;
    }

    /**
     * Return the children of a node
     *
     * @param  {ReactElement|VNode} node
     *
     * @return {*}
     */
    function getNodeChildren(node) {
        if (IS_PREACT) {
            return node.children;
        } else {
            return node.props.children;
        }
    }

    /**
     * Return true if given value hold a promise
     *
     * @param  {*}  value
     *
     * @return {Boolean}
     */
    function isPromise(value) {
        return value instanceof Object && value.then instanceof Function;
    }

    if (!IS_PREACT) {
        var ReactUpdater = {
            enqueueCallback: function enqueueCallback(inst, f) {
                f();
            },
            enqueueForceUpdate: function enqueueForceUpdate(inst) {},
            enqueueReplaceState: function enqueueReplaceState(inst, state) {
                var newState = {};
                assign(newState, inst);
                assign(newState, state);
                inst.state = newState;
            },
            enqueueSetState: function enqueueSetState(inst, partialState) {
                var newState = {};
                assign(newState, inst.state);
                assign(newState, partialState);
                inst.state = newState;
            },
            isMounted: function isMounted() {
                return true;
            }
        };
    }

    harvest.harvest = harvest;
    return harvest;
};

/***/ }),

/***/ "../../relaks-harvest/meanwhile.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function Meanwhile(component, previously) {
    var relaks = component.relaks;
    this.component = component;
    this.synchronous = false;
    this.showingProgress = false;
    this.showingProgressInitially = false;
    this.delayWhenEmpty = Infinity;
    this.delayWhenRendered = Infinity;
    this.canceled = false;
    this.prior = relaks.previous;
    this.previous = relaks.previous;
    this.current = relaks.current;
    this.updateTimeout = 0;
    this.startTime = getTime();
    this.onCancel = null;
    this.onComplete = null;
    this.onProgress = null;
}

var prototype = Meanwhile.prototype;

prototype.check = function () {};

prototype.show = function (element, disposition) {
    return false;
};

prototype.revising = function () {
    return false;
};

prototype.delay = function (empty, rendered) {};

prototype.update = function (forced) {};

prototype.cancel = function () {};

prototype.finish = function () {};

prototype.clear = function () {};

var scriptStartTime = new Date();

/**
 * Return the number of milliseconds passed since start of this script
 *
 * @return {Number}
 */
function getTime() {
    return new Date() - scriptStartTime;
}

module.exports = prototype.constructor;

/***/ }),

/***/ "../../relaks-harvest/preact.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__("../../relaks-harvest/function.js")(__webpack_require__("../node_modules/preact/dist/preact.esm.js"));

/***/ }),

/***/ "../../relaks-route-manager/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _promise = __webpack_require__("../node_modules/babel-runtime/core-js/promise.js");

var _promise2 = _interopRequireDefault(_promise);

var _typeof2 = __webpack_require__("../node_modules/babel-runtime/helpers/typeof.js");

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SSR = (typeof window === 'undefined' ? 'undefined' : (0, _typeof3.default)(window)) !== 'object';
var defaultOptions = {
    useHashFallback: false,
    trackLinks: SSR ? false : true,
    trackLocation: SSR ? false : true,
    basePath: '',
    initialPath: '/'
};

function RelaksRouteManager(options) {
    this.url = '';
    this.name = '';
    this.params = '';
    this.context = '';
    this.routes = {};
    this.history = [];
    this.startTime = getTime();
    this.listeners = [];
    this.options = {};
    this.rewrites = [];
    for (var name in defaultOptions) {
        if (options && options[name] !== undefined) {
            this.options[name] = options[name];
        } else {
            this.options[name] = defaultOptions[name];
        }
    }
    if (options && options.routes) {
        this.addRoutes(options.routes);
    }
    if (options && options.rewrites) {
        this.addRewrites(options.rewrites);
    }

    this.handleLinkClick = this.handleLinkClick.bind(this);
    this.handlePopState = this.handlePopState.bind(this);
}

var prototype = RelaksRouteManager.prototype;

prototype.initialize = function () {
    if (this.options.trackLinks) {
        window.addEventListener('click', this.handleLinkClick);
    }
    var url;
    if (this.options.trackLocation) {
        url = this.getLocationURL(window.location);
        window.addEventListener('popstate', this.handlePopState);
    } else {
        url = this.options.initialPath;
    }
    return this.change(url, { replace: true });
};

prototype.shutdown = function () {
    var opt = this.options;
    if (opt.trackLinks) {
        window.removeEventListener('click', this.handleLinkClick);
    }
    if (opt.trackLocation) {
        window.removeEventListener('popstate', this.handlePopState);
    }
};

prototype.addEventListener = function (type, handler) {
    this.listeners.push({ type: type, handler: handler });
};

prototype.removeEventListener = function (type, handler) {
    this.listeners = this.listeners.filter(function (listener) {
        return !(listener.type === type && listener.handler === handler);
    });
};

prototype.triggerEvent = function (evt) {
    var fired = false;
    this.listeners.forEach(function (listener) {
        if (listener.type === evt.type && listener.handler) {
            fired = true;
            listener.handler(evt);
        }
    });
    return fired;
};

prototype.addRoutes = function (routes) {
    for (var name in routes) {
        if (routes[name] !== this.routes[name]) {
            if (this.routes[name]) {
                throw new Error('Duplicate route: ' + name);
            }
            this.routes[name] = routes[name];
        }
    }
};

prototype.removeRoutes = function (routes) {
    for (var name in routes) {
        if (routes[name] === this.routes[name]) {
            delete this.routes[name];
        }
    }
};

prototype.addRewrites = function (rewrites) {
    var _this = this;
    rewrites.forEach(function (rewrite) {
        _this.rewrites.push(rewrite);
    });
};

prototype.removeRewrites = function (rewrites) {
    var _this = this;
    rewrites.forEach(function (rewrite) {
        var index = _this.rewrites.indexOf(rewrite);
        if (index !== -1) {
            _this.rewrites.splice(index, 1);
        }
    });
};

/**
 * Change the route to what the given URL points to
 *
 * @param  {String} url
 * @param  {Object|undefined} options
 *
 * @return {Promise<Boolean>}
 */
prototype.change = function (url, options) {
    var match = this.match(url);
    if (match) {
        var replace = options ? options.replace || false : false;
        var time = getTime();
        return this.apply(match, time, true, replace);
    } else {
        var err = new Error('No route');
        return _promise2.default.reject(err);
    }
};

/**
 * Change the route to the one given, adding to history
 *
 * @param  {String} name
 * @param  {Object} params
 *
 * @return {Promise}
 */
prototype.push = function (name, params) {
    try {
        var url = this.find(name, params);
        return this.change(url);
    } catch (err) {
        return _promise2.default.reject(err);
    }
};

/**
 * Replace the current route with the one given
 *
 * @param  {String} name
 * @param  {Object} params
 *
 * @return {Promise}
 */
prototype.replace = function (name, params) {
    try {
        var url = this.find(name, params);
        return this.change(url, { replace: true });
    } catch (err) {
        return _promise2.default.reject(err);
    }
};

/**
 * Get a URL for a route for the parameters given
 *
 * @param  {String} name
 * @param  {Object} params
 * @param  {Object|undefined} newContext
 *
 * @return {String}
 */
prototype.find = function (name, params, newContext) {
    var urlParts = this.fill(name, params);
    var context = this.context;
    if (newContext) {
        context = {};
        for (var name in this.context) {
            context[name] = this.context[name];
        }
        for (var name in newContext) {
            context[name] = newContext[name];
        }
    } else {
        context = this.context;
    }
    this.rebase('to', urlParts);
    this.rewrite('to', urlParts, context);
    var url = composeURL(urlParts);
    if (this.options.useHashFallback) {
        url = '#' + url;
    }
    return url;
};

/**
 * Go back to the previous route (if possible)
 *
 * @return {Promise}
 */
prototype.back = function () {
    if (this.history.length <= 1) {
        return _promise2.default.reject(new Error('Cannot go beyond starting page'));
    }
    if (this.options.trackLocation) {
        var _this = this;
        return new _promise2.default(function (resolve, reject) {
            _this.backResolve = resolve;
            _this.backReject = reject;
            window.history.back();

            // just in case the operation fails for some reason
            setTimeout(function () {
                var reject = _this.backReject;
                if (reject) {
                    _this.backResolve = undefined;
                    _this.backReject = undefined;
                    reject(new Error('Unable to navigate to previous page'));
                }
            }, 50);
        });
    } else {
        var previous = this.history[this.history.length - 2];
        return this.apply(previous, previous.time, false, false);
    }
};

/**
 * Match a URL with a route
 *
 * @param  {String} url
 *
 * @return {Object|null}
 */
prototype.match = function (url) {
    // perform rewrites
    var urlParts = parseURL(url);
    var context = {};
    this.rewrite('from', urlParts, context);

    // remove base path
    if (!this.rebase('from', urlParts)) {
        return null;
    }

    // look for matching route
    var params = {};
    var routes = this.routes;
    for (var name in routes) {
        var routeDef = routes[name];
        var types = routeDef.params;
        // if the path matches, then it's a match
        // query and hash variables are treated as options
        if (matchTemplate(urlParts.path, routeDef.path, types, params, true)) {
            for (var queryVarName in routeDef.query) {
                var queryVarTemplate = routeDef.query[queryVarName];
                var queryVarValue = urlParts.query[queryVarName];
                matchTemplate(queryVarValue, queryVarTemplate, types, params);
            }
            matchTemplate(urlParts.hash, routeDef.hash, types, params);
            return { url: url, name: name, params: params, context: context };
        }
    }
    return null;
};

/**
 * Load necessary module(s) for a route, append to history, set the state,
 * and trigger change event
 *
 * @param  {Object} match
 * @param  {String} time
 * @param  {Boolean} sync
 * @param  {Boolean} replace
 *
 * @return {Promise<Boolean>}
 */
prototype.apply = function (match, time, sync, replace) {
    var _this = this;
    var confirmationEvent = new RelaksRouteManagerEvent('beforechange', this, match);
    this.triggerEvent(confirmationEvent);
    return confirmationEvent.waitForDecision().then(function () {
        if (confirmationEvent.defaultPrevented) {
            return false;
        }
        return _this.load(match).then(function () {
            if (time >= _this.startTime) {
                if (!replace) {
                    // see if we're going backward
                    var index = -1;
                    for (var i = 0; i < _this.history.length; i++) {
                        if (_this.history[i].time === time) {
                            index = i;
                        }
                    }
                    if (index !== -1) {
                        // remove entry and those after it
                        _this.history.splice(index);
                    }
                }
            } else {
                // going into history prior to page load
                // remember the time forward movement from deep into the past
                // works correctly
                _this.history = [];
                _this.startTime = time;
            }
            var entry = {
                url: match.url,
                name: match.name,
                params: match.params,
                context: match.context,
                time: time
            };
            if (replace && _this.history.length > 0) {
                _this.history[_this.history.length - 1] = entry;
            } else {
                _this.history.push(entry);
            }
            if (sync) {
                _this.setLocationURL(match.url, { time: time }, replace);
            }
            _this.url = match.url;
            _this.name = match.name;
            _this.params = match.params;
            _this.context = match.context;

            _this.triggerEvent(new RelaksRouteManagerEvent('change', _this));
        });
    });
};

/**
 * Fill a route templates with parameters
 *
 * @param  {String} name
 * @param  {Object} params
 *
 * @return {Object}
 */
prototype.fill = function (name, params) {
    var routeDef = this.routes[name];
    if (!routeDef) {
        throw new Error('No route by that name: ' + name);
    }
    var types = routeDef.params;
    var path = fillTemplate(routeDef.path, types, params, true);
    var hash = fillTemplate(routeDef.hash, types, params);
    var query = {};
    for (var queryVarName in routeDef.query) {
        var queryVarTemplate = routeDef.query[queryVarName];
        var queryVarValue = fillTemplate(queryVarTemplate, types, params);
        if (queryVarValue !== undefined) {
            query[queryVarName] = queryVarValue;
        }
    }
    return { path: path, hash: hash, query: query };
};

/**
 * Apply rewrites on URL parts
 *
 * @param  {String} direction
 * @param  {Object} urlParts
 * @param  {Object} context
 */
prototype.rewrite = function (direction, urlParts, context) {
    if (direction === 'from') {
        for (var i = 0; i < this.rewrites.length; i++) {
            var from = this.rewrites[i].from;
            if (from) {
                if (from(urlParts, context) === false) {
                    break;
                }
            }
        }
    } else if (direction === 'to') {
        for (var i = this.rewrites.length - 1; i >= 0; i--) {
            var to = this.rewrites[i].to;
            if (to) {
                if (to(urlParts, context) === false) {
                    break;
                }
            }
        }
    }
};

/**
 * Add or remove basePath from a URL's path part. Return false if it can't be done.
 *
 * @param  {String} direction
 * @param  {Object} urlParts
 *
 * @return {Boolean}
 */
prototype.rebase = function (direction, urlParts) {
    var basePath = this.options.basePath;
    if (direction === 'from') {
        var newPath = getRelativePath(basePath, urlParts.path);
        if (newPath) {
            urlParts.path = newPath;
            return true;
        }
    } else if (direction === 'to') {
        if (basePath) {
            urlParts.path = basePath + urlParts.path;
        }
        return true;
    }
    return false;
};

prototype.load = function (match) {
    try {
        var result;
        var routeDef = this.routes[match.name];
        if (routeDef && routeDef.load) {
            result = routeDef.load(match.params, match.context);
        }
        return _promise2.default.resolve(result);
    } catch (err) {
        return _promise2.default.reject(err);
    }
};

/**
 * Return a relative URL or empty string (if link is pointing to an external page)
 *
 * @param  {Location|HTMLAnchorElement} location
 *
 * @return {String}
 */
prototype.getLocationURL = function (location) {
    var docLocation = window.location;
    if (location !== docLocation) {
        if (location.protocol !== docLocation.protocol) {
            return '';
        } else if (location.host !== docLocation.host) {
            return '';
        }
        if (this.options.useHashFallback) {
            if (location.pathname !== docLocation.pathname) {
                return '';
            }
            if (location.search !== docLocation.search) {
                return '';
            }
        }
    }
    if (this.options.useHashFallback) {
        var path = location.hash.substr(1);
        return path || '/';
    } else {
        return location.pathname + location.search + location.hash;
    }
};

prototype.setLocationURL = function (url, state, replace) {
    if (this.options.trackLocation) {
        var currentURL = this.getLocationURL(location);
        if (currentURL !== url) {
            if (this.options.useHashFallback) {
                url = '#' + url;
            }
            if (replace) {
                window.history.replaceState(state, '', url);
            } else {
                window.history.pushState(state, '', url);
            }
        }
    }
};

/**
 * Called when the user clicks on the page
 *
 * @param  {Event} evt
 */
prototype.handleLinkClick = function (evt) {
    if (evt.button === 0) {
        var link = getLink(evt.target);
        if (link && !link.target && !link.download) {
            var url = this.getLocationURL(link);
            if (url) {
                var match = this.match(url);
                if (match) {
                    var time = getTime();
                    evt.preventDefault();
                    evt.stopPropagation();
                    this.apply(match, time, true, false);
                }
            }
        }
    }
};

/**
 * Called when the user press the back button
 *
 * @param  {Event} evt
 */
prototype.handlePopState = function (evt) {
    var time = evt.state ? evt.state.time : getTime();
    var url = this.getLocationURL(window.location);
    var match = this.match(url);
    var promise = this.apply(match, time, false, false);

    // resolve promise created in back()
    var resolve = this.backResolve;
    var reject = this.backReject;
    if (resolve) {
        this.backResolve = undefined;
        this.backReject = undefined;
        promise.then(resolve, reject);
    }
};

var variableRegExp = /\$\{\w+\}/g;
var regExpCache = {};

function getURLTemplateRegExp(template, types, isPath) {
    if (!template) {
        return null;
    }
    var pattern = template.replace(variableRegExp, function (match) {
        var variable = match.substr(2, match.length - 3);
        var variableType = types[variable];
        var variablePattern;
        if (variableType === Number || variableType === Boolean) {
            variablePattern = '[\\d\\.]+';
        } else if ((typeof variableType === 'undefined' ? 'undefined' : (0, _typeof3.default)(variableType)) === 'object') {
            variablePattern = variableType.pattern;
        }
        if (!variablePattern) {
            if (isPath) {
                variablePattern = '[^/]+';
            } else {
                variablePattern = '.+';
            }
        }
        return '(' + variablePattern + ')';
    });
    if (isPath) {
        var lc = pattern.charAt(pattern - 1);
        if (lc === '/') {
            pattern += '?';
        } else {
            pattern += '/?';
        }
        pattern = '^' + pattern + '$';
    }
    var re = regExpCache[pattern];
    if (!re) {
        re = regExpCache[pattern] = new RegExp(pattern);
    }
    return re;
}

function getURLTemplateVariables(template) {
    var matches = template.match(variableRegExp);
    var list = [];
    if (matches) {
        for (var i = 0; i < matches.length; i++) {
            var match = matches[i];
            list.push(match.substr(2, match.length - 3));
        }
    }
    return list;
}

function matchTemplate(urlPart, template, types, params, isPath) {
    if (!urlPart || !template) {
        return false;
    }
    if (template instanceof Array) {
        var match = false;
        for (var i = 0; i < template.length; i++) {
            var t = template[i];
            if (matchTemplate(urlPart, t, types, params, isPath)) {
                match = true;
                if (isPath) {
                    break;
                }
            }
        }
        return match;
    } else if ((typeof template === 'undefined' ? 'undefined' : (0, _typeof3.default)(template)) === 'object') {
        if (template.from) {
            return template.from(urlPart, params);
        }
    } else if (typeof template === 'string') {
        var re = getURLTemplateRegExp(template, types, isPath);
        var matches = re.exec(urlPart);
        if (!matches) {
            return false;
        }
        var variables = getURLTemplateVariables(template);
        var values = {};
        for (var i = 0; i < variables.length; i++) {
            var variable = variables[i];
            var type = types[variable];
            var value = castValue(matches[i + 1], type);
            if (value !== undefined) {
                values[variable] = value;
            } else {
                if (isPath) {
                    return false;
                }
            }
        }
        for (var name in values) {
            params[name] = values[name];
        }
        return true;
    }
    return false;
}

function fillTemplate(template, types, params, always) {
    if (template instanceof Array) {
        var tokens = [];
        for (var i = 0; i < template.length; i++) {
            var t = template[i];
            var s = fillTemplate(t, types, params, always);
            if (s) {
                tokens.push(s);
            }
        }
        return tokens.join('');
    } else if ((typeof template === 'undefined' ? 'undefined' : (0, _typeof3.default)(template)) === 'object') {
        if (template.to) {
            return template.to(params);
        }
    } else if (typeof template === 'string') {
        var variables = getURLTemplateVariables(template);
        var urlPath = template;
        for (var i = 0; i < variables.length; i++) {
            var variable = variables[i];
            var value = params[variable];
            var type = types[variable];
            if (value !== undefined || always) {
                var string = stringifyValue(value, type);
                urlPath = urlPath.replace('${' + variable + '}', string);
            } else {
                return;
            }
        }
        return urlPath;
    }
}

function castValue(string, type) {
    if (type === String) {
        return string;
    } else if (type === Number) {
        var n = parseFloat(string);
        if (n === n) {
            return n;
        }
    } else if (type === Boolean) {
        var n = parseFloat(string);
        if (n === n) {
            return !!n;
        } else {
            return !!string;
        }
    } else if (type instanceof Object) {
        if (type.from) {
            return type.from(string);
        }
    }
}

function stringifyValue(value, type) {
    if (type === String) {
        return value;
    } else if (type === Number) {
        return String(value);
    } else if (type === Boolean) {
        return value ? '0' : '1';
    } else if (type instanceof Object) {
        if (type.to) {
            return type.to(value);
        }
    }
}

function getRelativePath(basePath, path) {
    if (!basePath) {
        return path;
    }
    if (path.substr(0, basePath.length) === basePath) {
        if (path.charAt(basePath.length) === '/') {
            return path.substr(basePath.length);
        } else if (path === basePath) {
            return '/';
        }
    }
}

function parseURL(url) {
    var path = url;
    var hash = '';
    var hashIndex = path.indexOf('#');
    if (hashIndex !== -1) {
        hash = path.substr(hashIndex + 1);
        path = path.substr(0, hashIndex);
    }
    var query = {};
    var queryIndex = path.indexOf('?');
    if (queryIndex !== -1) {
        query = parseQueryString(path.substr(queryIndex + 1));
        path = path.substr(0, queryIndex);
    }
    return { path: path, query: query, hash: hash };
}

function parseQueryString(queryString) {
    var values = {};
    if (queryString) {
        var pairs = queryString.split('&');
        for (var i = 0; i < pairs.length; i++) {
            var parts = pairs[i].split('=');
            var name = decodeURIComponent(parts[0]);
            var value = decodeURIComponent(parts[1] || '');
            value = value.replace(/\+/g, ' ');
            values[name] = value;
        }
    }
    return values;
}

function composeURL(urlParts) {
    var url = urlParts.path;
    var queryString = composeQueryString(urlParts.query);
    if (queryString) {
        url += '?' + queryString;
    }
    if (urlParts.hash) {
        url += '#' + urlParts.hash;
    }
    return url;
}

function composeQueryString(query) {
    var pairs = [];
    for (var name in query) {
        var value = query[name];
        var parts = [encodeURIComponent(name), encodeURIComponent(value)];
        pairs.push(parts.join('='));
    }
    return pairs.join('&');
}

function getLink(element) {
    while (element && element.tagName !== 'A' && !element.href) {
        element = element.parentNode;
    }
    return element;
}

function getTime() {
    return new Date().toISOString();
}

function RelaksRouteManagerEvent(type, target, props) {
    this.type = type;
    this.target = target;
    for (var name in props) {
        this[name] = props[name];
    }
    this.defaultPrevented = false;
    this.decisionPromise = null;
}

var prototype = RelaksRouteManagerEvent.prototype;

prototype.preventDefault = function () {
    this.defaultPrevented = true;
};

prototype.postponeDefault = function (promise) {
    if (!promise || !(promise.then instanceof Function)) {
        this.decisionPromise = promise;
    }
};

prototype.waitForDecision = function () {
    return this.decisionPromise || _promise2.default.resolve();
};

module.exports = RelaksRouteManager;
module.exports.RelaksRouteManager = RelaksRouteManager;
module.exports.RelaksRouteManagerEvent = RelaksRouteManagerEvent;

/***/ }),

/***/ "../node_modules/babel-runtime/core-js/json/stringify.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("../node_modules/core-js/library/fn/json/stringify.js"), __esModule: true };

/***/ }),

/***/ "../node_modules/babel-runtime/core-js/object/assign.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("../node_modules/core-js/library/fn/object/assign.js"), __esModule: true };

/***/ }),

/***/ "../node_modules/babel-runtime/core-js/object/create.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("../node_modules/core-js/library/fn/object/create.js"), __esModule: true };

/***/ }),

/***/ "../node_modules/babel-runtime/core-js/object/define-property.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("../node_modules/core-js/library/fn/object/define-property.js"), __esModule: true };

/***/ }),

/***/ "../node_modules/babel-runtime/core-js/object/get-prototype-of.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("../node_modules/core-js/library/fn/object/get-prototype-of.js"), __esModule: true };

/***/ }),

/***/ "../node_modules/babel-runtime/core-js/object/set-prototype-of.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("../node_modules/core-js/library/fn/object/set-prototype-of.js"), __esModule: true };

/***/ }),

/***/ "../node_modules/babel-runtime/core-js/promise.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("../node_modules/core-js/library/fn/promise.js"), __esModule: true };

/***/ }),

/***/ "../node_modules/babel-runtime/core-js/symbol.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("../node_modules/core-js/library/fn/symbol/index.js"), __esModule: true };

/***/ }),

/***/ "../node_modules/babel-runtime/core-js/symbol/iterator.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("../node_modules/core-js/library/fn/symbol/iterator.js"), __esModule: true };

/***/ }),

/***/ "../node_modules/babel-runtime/helpers/asyncToGenerator.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _promise = __webpack_require__("../node_modules/babel-runtime/core-js/promise.js");

var _promise2 = _interopRequireDefault(_promise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (fn) {
  return function () {
    var gen = fn.apply(this, arguments);
    return new _promise2.default(function (resolve, reject) {
      function step(key, arg) {
        try {
          var info = gen[key](arg);
          var value = info.value;
        } catch (error) {
          reject(error);
          return;
        }

        if (info.done) {
          resolve(value);
        } else {
          return _promise2.default.resolve(value).then(function (value) {
            step("next", value);
          }, function (err) {
            step("throw", err);
          });
        }
      }

      return step("next");
    });
  };
};

/***/ }),

/***/ "../node_modules/babel-runtime/helpers/classCallCheck.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

/***/ }),

/***/ "../node_modules/babel-runtime/helpers/createClass.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__("../node_modules/babel-runtime/core-js/object/define-property.js");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

/***/ }),

/***/ "../node_modules/babel-runtime/helpers/inherits.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _setPrototypeOf = __webpack_require__("../node_modules/babel-runtime/core-js/object/set-prototype-of.js");

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

var _create = __webpack_require__("../node_modules/babel-runtime/core-js/object/create.js");

var _create2 = _interopRequireDefault(_create);

var _typeof2 = __webpack_require__("../node_modules/babel-runtime/helpers/typeof.js");

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
  }

  subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
};

/***/ }),

/***/ "../node_modules/babel-runtime/helpers/possibleConstructorReturn.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _typeof2 = __webpack_require__("../node_modules/babel-runtime/helpers/typeof.js");

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
};

/***/ }),

/***/ "../node_modules/babel-runtime/helpers/typeof.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _iterator = __webpack_require__("../node_modules/babel-runtime/core-js/symbol/iterator.js");

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = __webpack_require__("../node_modules/babel-runtime/core-js/symbol.js");

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};

/***/ }),

/***/ "../node_modules/babel-runtime/regenerator/index.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../node_modules/regenerator-runtime/runtime-module.js");


/***/ }),

/***/ "../node_modules/core-js/library/fn/json/stringify.js":
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__("../node_modules/core-js/library/modules/_core.js");
var $JSON = core.JSON || (core.JSON = { stringify: JSON.stringify });
module.exports = function stringify(it) { // eslint-disable-line no-unused-vars
  return $JSON.stringify.apply($JSON, arguments);
};


/***/ }),

/***/ "../node_modules/core-js/library/fn/object/assign.js":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("../node_modules/core-js/library/modules/es6.object.assign.js");
module.exports = __webpack_require__("../node_modules/core-js/library/modules/_core.js").Object.assign;


/***/ }),

/***/ "../node_modules/core-js/library/fn/object/create.js":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("../node_modules/core-js/library/modules/es6.object.create.js");
var $Object = __webpack_require__("../node_modules/core-js/library/modules/_core.js").Object;
module.exports = function create(P, D) {
  return $Object.create(P, D);
};


/***/ }),

/***/ "../node_modules/core-js/library/fn/object/define-property.js":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("../node_modules/core-js/library/modules/es6.object.define-property.js");
var $Object = __webpack_require__("../node_modules/core-js/library/modules/_core.js").Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};


/***/ }),

/***/ "../node_modules/core-js/library/fn/object/get-prototype-of.js":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("../node_modules/core-js/library/modules/es6.object.get-prototype-of.js");
module.exports = __webpack_require__("../node_modules/core-js/library/modules/_core.js").Object.getPrototypeOf;


/***/ }),

/***/ "../node_modules/core-js/library/fn/object/set-prototype-of.js":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("../node_modules/core-js/library/modules/es6.object.set-prototype-of.js");
module.exports = __webpack_require__("../node_modules/core-js/library/modules/_core.js").Object.setPrototypeOf;


/***/ }),

/***/ "../node_modules/core-js/library/fn/promise.js":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("../node_modules/core-js/library/modules/es6.object.to-string.js");
__webpack_require__("../node_modules/core-js/library/modules/es6.string.iterator.js");
__webpack_require__("../node_modules/core-js/library/modules/web.dom.iterable.js");
__webpack_require__("../node_modules/core-js/library/modules/es6.promise.js");
__webpack_require__("../node_modules/core-js/library/modules/es7.promise.finally.js");
__webpack_require__("../node_modules/core-js/library/modules/es7.promise.try.js");
module.exports = __webpack_require__("../node_modules/core-js/library/modules/_core.js").Promise;


/***/ }),

/***/ "../node_modules/core-js/library/fn/symbol/index.js":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("../node_modules/core-js/library/modules/es6.symbol.js");
__webpack_require__("../node_modules/core-js/library/modules/es6.object.to-string.js");
__webpack_require__("../node_modules/core-js/library/modules/es7.symbol.async-iterator.js");
__webpack_require__("../node_modules/core-js/library/modules/es7.symbol.observable.js");
module.exports = __webpack_require__("../node_modules/core-js/library/modules/_core.js").Symbol;


/***/ }),

/***/ "../node_modules/core-js/library/fn/symbol/iterator.js":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("../node_modules/core-js/library/modules/es6.string.iterator.js");
__webpack_require__("../node_modules/core-js/library/modules/web.dom.iterable.js");
module.exports = __webpack_require__("../node_modules/core-js/library/modules/_wks-ext.js").f('iterator');


/***/ }),

/***/ "../node_modules/core-js/library/modules/_a-function.js":
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "../node_modules/core-js/library/modules/_add-to-unscopables.js":
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),

/***/ "../node_modules/core-js/library/modules/_an-instance.js":
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};


/***/ }),

/***/ "../node_modules/core-js/library/modules/_an-object.js":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("../node_modules/core-js/library/modules/_is-object.js");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "../node_modules/core-js/library/modules/_array-includes.js":
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__("../node_modules/core-js/library/modules/_to-iobject.js");
var toLength = __webpack_require__("../node_modules/core-js/library/modules/_to-length.js");
var toAbsoluteIndex = __webpack_require__("../node_modules/core-js/library/modules/_to-absolute-index.js");
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ "../node_modules/core-js/library/modules/_classof.js":
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__("../node_modules/core-js/library/modules/_cof.js");
var TAG = __webpack_require__("../node_modules/core-js/library/modules/_wks.js")('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),

/***/ "../node_modules/core-js/library/modules/_cof.js":
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "../node_modules/core-js/library/modules/_core.js":
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.7' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "../node_modules/core-js/library/modules/_ctx.js":
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__("../node_modules/core-js/library/modules/_a-function.js");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "../node_modules/core-js/library/modules/_defined.js":
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "../node_modules/core-js/library/modules/_descriptors.js":
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__("../node_modules/core-js/library/modules/_fails.js")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "../node_modules/core-js/library/modules/_dom-create.js":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("../node_modules/core-js/library/modules/_is-object.js");
var document = __webpack_require__("../node_modules/core-js/library/modules/_global.js").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "../node_modules/core-js/library/modules/_enum-bug-keys.js":
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ "../node_modules/core-js/library/modules/_enum-keys.js":
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__("../node_modules/core-js/library/modules/_object-keys.js");
var gOPS = __webpack_require__("../node_modules/core-js/library/modules/_object-gops.js");
var pIE = __webpack_require__("../node_modules/core-js/library/modules/_object-pie.js");
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};


/***/ }),

/***/ "../node_modules/core-js/library/modules/_export.js":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("../node_modules/core-js/library/modules/_global.js");
var core = __webpack_require__("../node_modules/core-js/library/modules/_core.js");
var ctx = __webpack_require__("../node_modules/core-js/library/modules/_ctx.js");
var hide = __webpack_require__("../node_modules/core-js/library/modules/_hide.js");
var has = __webpack_require__("../node_modules/core-js/library/modules/_has.js");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && has(exports, key)) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ "../node_modules/core-js/library/modules/_fails.js":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "../node_modules/core-js/library/modules/_for-of.js":
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__("../node_modules/core-js/library/modules/_ctx.js");
var call = __webpack_require__("../node_modules/core-js/library/modules/_iter-call.js");
var isArrayIter = __webpack_require__("../node_modules/core-js/library/modules/_is-array-iter.js");
var anObject = __webpack_require__("../node_modules/core-js/library/modules/_an-object.js");
var toLength = __webpack_require__("../node_modules/core-js/library/modules/_to-length.js");
var getIterFn = __webpack_require__("../node_modules/core-js/library/modules/core.get-iterator-method.js");
var BREAK = {};
var RETURN = {};
var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
  var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);
  var f = ctx(fn, that, entries ? 2 : 1);
  var index = 0;
  var length, step, iterator, result;
  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if (result === BREAK || result === RETURN) return result;
  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
    result = call(iterator, f, step.value, entries);
    if (result === BREAK || result === RETURN) return result;
  }
};
exports.BREAK = BREAK;
exports.RETURN = RETURN;


/***/ }),

/***/ "../node_modules/core-js/library/modules/_global.js":
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "../node_modules/core-js/library/modules/_has.js":
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "../node_modules/core-js/library/modules/_hide.js":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("../node_modules/core-js/library/modules/_object-dp.js");
var createDesc = __webpack_require__("../node_modules/core-js/library/modules/_property-desc.js");
module.exports = __webpack_require__("../node_modules/core-js/library/modules/_descriptors.js") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "../node_modules/core-js/library/modules/_html.js":
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__("../node_modules/core-js/library/modules/_global.js").document;
module.exports = document && document.documentElement;


/***/ }),

/***/ "../node_modules/core-js/library/modules/_ie8-dom-define.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__("../node_modules/core-js/library/modules/_descriptors.js") && !__webpack_require__("../node_modules/core-js/library/modules/_fails.js")(function () {
  return Object.defineProperty(__webpack_require__("../node_modules/core-js/library/modules/_dom-create.js")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "../node_modules/core-js/library/modules/_invoke.js":
/***/ (function(module, exports) {

// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function (fn, args, that) {
  var un = that === undefined;
  switch (args.length) {
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return fn.apply(that, args);
};


/***/ }),

/***/ "../node_modules/core-js/library/modules/_iobject.js":
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__("../node_modules/core-js/library/modules/_cof.js");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ "../node_modules/core-js/library/modules/_is-array-iter.js":
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__("../node_modules/core-js/library/modules/_iterators.js");
var ITERATOR = __webpack_require__("../node_modules/core-js/library/modules/_wks.js")('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),

/***/ "../node_modules/core-js/library/modules/_is-array.js":
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__("../node_modules/core-js/library/modules/_cof.js");
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),

/***/ "../node_modules/core-js/library/modules/_is-object.js":
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "../node_modules/core-js/library/modules/_iter-call.js":
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__("../node_modules/core-js/library/modules/_an-object.js");
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};


/***/ }),

/***/ "../node_modules/core-js/library/modules/_iter-create.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__("../node_modules/core-js/library/modules/_object-create.js");
var descriptor = __webpack_require__("../node_modules/core-js/library/modules/_property-desc.js");
var setToStringTag = __webpack_require__("../node_modules/core-js/library/modules/_set-to-string-tag.js");
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__("../node_modules/core-js/library/modules/_hide.js")(IteratorPrototype, __webpack_require__("../node_modules/core-js/library/modules/_wks.js")('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),

/***/ "../node_modules/core-js/library/modules/_iter-define.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__("../node_modules/core-js/library/modules/_library.js");
var $export = __webpack_require__("../node_modules/core-js/library/modules/_export.js");
var redefine = __webpack_require__("../node_modules/core-js/library/modules/_redefine.js");
var hide = __webpack_require__("../node_modules/core-js/library/modules/_hide.js");
var Iterators = __webpack_require__("../node_modules/core-js/library/modules/_iterators.js");
var $iterCreate = __webpack_require__("../node_modules/core-js/library/modules/_iter-create.js");
var setToStringTag = __webpack_require__("../node_modules/core-js/library/modules/_set-to-string-tag.js");
var getPrototypeOf = __webpack_require__("../node_modules/core-js/library/modules/_object-gpo.js");
var ITERATOR = __webpack_require__("../node_modules/core-js/library/modules/_wks.js")('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),

/***/ "../node_modules/core-js/library/modules/_iter-detect.js":
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__("../node_modules/core-js/library/modules/_wks.js")('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};


/***/ }),

/***/ "../node_modules/core-js/library/modules/_iter-step.js":
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),

/***/ "../node_modules/core-js/library/modules/_iterators.js":
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "../node_modules/core-js/library/modules/_library.js":
/***/ (function(module, exports) {

module.exports = true;


/***/ }),

/***/ "../node_modules/core-js/library/modules/_meta.js":
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__("../node_modules/core-js/library/modules/_uid.js")('meta');
var isObject = __webpack_require__("../node_modules/core-js/library/modules/_is-object.js");
var has = __webpack_require__("../node_modules/core-js/library/modules/_has.js");
var setDesc = __webpack_require__("../node_modules/core-js/library/modules/_object-dp.js").f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__("../node_modules/core-js/library/modules/_fails.js")(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),

/***/ "../node_modules/core-js/library/modules/_microtask.js":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("../node_modules/core-js/library/modules/_global.js");
var macrotask = __webpack_require__("../node_modules/core-js/library/modules/_task.js").set;
var Observer = global.MutationObserver || global.WebKitMutationObserver;
var process = global.process;
var Promise = global.Promise;
var isNode = __webpack_require__("../node_modules/core-js/library/modules/_cof.js")(process) == 'process';

module.exports = function () {
  var head, last, notify;

  var flush = function () {
    var parent, fn;
    if (isNode && (parent = process.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (e) {
        if (head) notify();
        else last = undefined;
        throw e;
      }
    } last = undefined;
    if (parent) parent.enter();
  };

  // Node.js
  if (isNode) {
    notify = function () {
      process.nextTick(flush);
    };
  // browsers with MutationObserver, except iOS Safari - https://github.com/zloirock/core-js/issues/339
  } else if (Observer && !(global.navigator && global.navigator.standalone)) {
    var toggle = true;
    var node = document.createTextNode('');
    new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
    notify = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (Promise && Promise.resolve) {
    // Promise.resolve without an argument throws an error in LG WebOS 2
    var promise = Promise.resolve(undefined);
    notify = function () {
      promise.then(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function () {
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }

  return function (fn) {
    var task = { fn: fn, next: undefined };
    if (last) last.next = task;
    if (!head) {
      head = task;
      notify();
    } last = task;
  };
};


/***/ }),

/***/ "../node_modules/core-js/library/modules/_new-promise-capability.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 25.4.1.5 NewPromiseCapability(C)
var aFunction = __webpack_require__("../node_modules/core-js/library/modules/_a-function.js");

function PromiseCapability(C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject = aFunction(reject);
}

module.exports.f = function (C) {
  return new PromiseCapability(C);
};


/***/ }),

/***/ "../node_modules/core-js/library/modules/_object-assign.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys = __webpack_require__("../node_modules/core-js/library/modules/_object-keys.js");
var gOPS = __webpack_require__("../node_modules/core-js/library/modules/_object-gops.js");
var pIE = __webpack_require__("../node_modules/core-js/library/modules/_object-pie.js");
var toObject = __webpack_require__("../node_modules/core-js/library/modules/_to-object.js");
var IObject = __webpack_require__("../node_modules/core-js/library/modules/_iobject.js");
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__("../node_modules/core-js/library/modules/_fails.js")(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
  } return T;
} : $assign;


/***/ }),

/***/ "../node_modules/core-js/library/modules/_object-create.js":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__("../node_modules/core-js/library/modules/_an-object.js");
var dPs = __webpack_require__("../node_modules/core-js/library/modules/_object-dps.js");
var enumBugKeys = __webpack_require__("../node_modules/core-js/library/modules/_enum-bug-keys.js");
var IE_PROTO = __webpack_require__("../node_modules/core-js/library/modules/_shared-key.js")('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__("../node_modules/core-js/library/modules/_dom-create.js")('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__("../node_modules/core-js/library/modules/_html.js").appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),

/***/ "../node_modules/core-js/library/modules/_object-dp.js":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("../node_modules/core-js/library/modules/_an-object.js");
var IE8_DOM_DEFINE = __webpack_require__("../node_modules/core-js/library/modules/_ie8-dom-define.js");
var toPrimitive = __webpack_require__("../node_modules/core-js/library/modules/_to-primitive.js");
var dP = Object.defineProperty;

exports.f = __webpack_require__("../node_modules/core-js/library/modules/_descriptors.js") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "../node_modules/core-js/library/modules/_object-dps.js":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("../node_modules/core-js/library/modules/_object-dp.js");
var anObject = __webpack_require__("../node_modules/core-js/library/modules/_an-object.js");
var getKeys = __webpack_require__("../node_modules/core-js/library/modules/_object-keys.js");

module.exports = __webpack_require__("../node_modules/core-js/library/modules/_descriptors.js") ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),

/***/ "../node_modules/core-js/library/modules/_object-gopd.js":
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__("../node_modules/core-js/library/modules/_object-pie.js");
var createDesc = __webpack_require__("../node_modules/core-js/library/modules/_property-desc.js");
var toIObject = __webpack_require__("../node_modules/core-js/library/modules/_to-iobject.js");
var toPrimitive = __webpack_require__("../node_modules/core-js/library/modules/_to-primitive.js");
var has = __webpack_require__("../node_modules/core-js/library/modules/_has.js");
var IE8_DOM_DEFINE = __webpack_require__("../node_modules/core-js/library/modules/_ie8-dom-define.js");
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__("../node_modules/core-js/library/modules/_descriptors.js") ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),

/***/ "../node_modules/core-js/library/modules/_object-gopn-ext.js":
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__("../node_modules/core-js/library/modules/_to-iobject.js");
var gOPN = __webpack_require__("../node_modules/core-js/library/modules/_object-gopn.js").f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),

/***/ "../node_modules/core-js/library/modules/_object-gopn.js":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__("../node_modules/core-js/library/modules/_object-keys-internal.js");
var hiddenKeys = __webpack_require__("../node_modules/core-js/library/modules/_enum-bug-keys.js").concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),

/***/ "../node_modules/core-js/library/modules/_object-gops.js":
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "../node_modules/core-js/library/modules/_object-gpo.js":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__("../node_modules/core-js/library/modules/_has.js");
var toObject = __webpack_require__("../node_modules/core-js/library/modules/_to-object.js");
var IE_PROTO = __webpack_require__("../node_modules/core-js/library/modules/_shared-key.js")('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),

/***/ "../node_modules/core-js/library/modules/_object-keys-internal.js":
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__("../node_modules/core-js/library/modules/_has.js");
var toIObject = __webpack_require__("../node_modules/core-js/library/modules/_to-iobject.js");
var arrayIndexOf = __webpack_require__("../node_modules/core-js/library/modules/_array-includes.js")(false);
var IE_PROTO = __webpack_require__("../node_modules/core-js/library/modules/_shared-key.js")('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "../node_modules/core-js/library/modules/_object-keys.js":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__("../node_modules/core-js/library/modules/_object-keys-internal.js");
var enumBugKeys = __webpack_require__("../node_modules/core-js/library/modules/_enum-bug-keys.js");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ "../node_modules/core-js/library/modules/_object-pie.js":
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),

/***/ "../node_modules/core-js/library/modules/_object-sap.js":
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__("../node_modules/core-js/library/modules/_export.js");
var core = __webpack_require__("../node_modules/core-js/library/modules/_core.js");
var fails = __webpack_require__("../node_modules/core-js/library/modules/_fails.js");
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),

/***/ "../node_modules/core-js/library/modules/_perform.js":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return { e: false, v: exec() };
  } catch (e) {
    return { e: true, v: e };
  }
};


/***/ }),

/***/ "../node_modules/core-js/library/modules/_promise-resolve.js":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("../node_modules/core-js/library/modules/_an-object.js");
var isObject = __webpack_require__("../node_modules/core-js/library/modules/_is-object.js");
var newPromiseCapability = __webpack_require__("../node_modules/core-js/library/modules/_new-promise-capability.js");

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};


/***/ }),

/***/ "../node_modules/core-js/library/modules/_property-desc.js":
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "../node_modules/core-js/library/modules/_redefine-all.js":
/***/ (function(module, exports, __webpack_require__) {

var hide = __webpack_require__("../node_modules/core-js/library/modules/_hide.js");
module.exports = function (target, src, safe) {
  for (var key in src) {
    if (safe && target[key]) target[key] = src[key];
    else hide(target, key, src[key]);
  } return target;
};


/***/ }),

/***/ "../node_modules/core-js/library/modules/_redefine.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../node_modules/core-js/library/modules/_hide.js");


/***/ }),

/***/ "../node_modules/core-js/library/modules/_set-proto.js":
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__("../node_modules/core-js/library/modules/_is-object.js");
var anObject = __webpack_require__("../node_modules/core-js/library/modules/_an-object.js");
var check = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = __webpack_require__("../node_modules/core-js/library/modules/_ctx.js")(Function.call, __webpack_require__("../node_modules/core-js/library/modules/_object-gopd.js").f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) { buggy = true; }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};


/***/ }),

/***/ "../node_modules/core-js/library/modules/_set-species.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__("../node_modules/core-js/library/modules/_global.js");
var core = __webpack_require__("../node_modules/core-js/library/modules/_core.js");
var dP = __webpack_require__("../node_modules/core-js/library/modules/_object-dp.js");
var DESCRIPTORS = __webpack_require__("../node_modules/core-js/library/modules/_descriptors.js");
var SPECIES = __webpack_require__("../node_modules/core-js/library/modules/_wks.js")('species');

module.exports = function (KEY) {
  var C = typeof core[KEY] == 'function' ? core[KEY] : global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function () { return this; }
  });
};


/***/ }),

/***/ "../node_modules/core-js/library/modules/_set-to-string-tag.js":
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__("../node_modules/core-js/library/modules/_object-dp.js").f;
var has = __webpack_require__("../node_modules/core-js/library/modules/_has.js");
var TAG = __webpack_require__("../node_modules/core-js/library/modules/_wks.js")('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),

/***/ "../node_modules/core-js/library/modules/_shared-key.js":
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__("../node_modules/core-js/library/modules/_shared.js")('keys');
var uid = __webpack_require__("../node_modules/core-js/library/modules/_uid.js");
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ "../node_modules/core-js/library/modules/_shared.js":
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__("../node_modules/core-js/library/modules/_core.js");
var global = __webpack_require__("../node_modules/core-js/library/modules/_global.js");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__("../node_modules/core-js/library/modules/_library.js") ? 'pure' : 'global',
  copyright: '© 2018 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "../node_modules/core-js/library/modules/_species-constructor.js":
/***/ (function(module, exports, __webpack_require__) {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject = __webpack_require__("../node_modules/core-js/library/modules/_an-object.js");
var aFunction = __webpack_require__("../node_modules/core-js/library/modules/_a-function.js");
var SPECIES = __webpack_require__("../node_modules/core-js/library/modules/_wks.js")('species');
module.exports = function (O, D) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};


/***/ }),

/***/ "../node_modules/core-js/library/modules/_string-at.js":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("../node_modules/core-js/library/modules/_to-integer.js");
var defined = __webpack_require__("../node_modules/core-js/library/modules/_defined.js");
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),

/***/ "../node_modules/core-js/library/modules/_task.js":
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__("../node_modules/core-js/library/modules/_ctx.js");
var invoke = __webpack_require__("../node_modules/core-js/library/modules/_invoke.js");
var html = __webpack_require__("../node_modules/core-js/library/modules/_html.js");
var cel = __webpack_require__("../node_modules/core-js/library/modules/_dom-create.js");
var global = __webpack_require__("../node_modules/core-js/library/modules/_global.js");
var process = global.process;
var setTask = global.setImmediate;
var clearTask = global.clearImmediate;
var MessageChannel = global.MessageChannel;
var Dispatch = global.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer, channel, port;
var run = function () {
  var id = +this;
  // eslint-disable-next-line no-prototype-builtins
  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listener = function (event) {
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!setTask || !clearTask) {
  setTask = function setImmediate(fn) {
    var args = [];
    var i = 1;
    while (arguments.length > i) args.push(arguments[i++]);
    queue[++counter] = function () {
      // eslint-disable-next-line no-new-func
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (__webpack_require__("../node_modules/core-js/library/modules/_cof.js")(process) == 'process') {
    defer = function (id) {
      process.nextTick(ctx(run, id, 1));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(ctx(run, id, 1));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if (MessageChannel) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = ctx(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
    defer = function (id) {
      global.postMessage(id + '', '*');
    };
    global.addEventListener('message', listener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in cel('script')) {
    defer = function (id) {
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(ctx(run, id, 1), 0);
    };
  }
}
module.exports = {
  set: setTask,
  clear: clearTask
};


/***/ }),

/***/ "../node_modules/core-js/library/modules/_to-absolute-index.js":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("../node_modules/core-js/library/modules/_to-integer.js");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ "../node_modules/core-js/library/modules/_to-integer.js":
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "../node_modules/core-js/library/modules/_to-iobject.js":
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__("../node_modules/core-js/library/modules/_iobject.js");
var defined = __webpack_require__("../node_modules/core-js/library/modules/_defined.js");
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ "../node_modules/core-js/library/modules/_to-length.js":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__("../node_modules/core-js/library/modules/_to-integer.js");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "../node_modules/core-js/library/modules/_to-object.js":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__("../node_modules/core-js/library/modules/_defined.js");
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ "../node_modules/core-js/library/modules/_to-primitive.js":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__("../node_modules/core-js/library/modules/_is-object.js");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "../node_modules/core-js/library/modules/_uid.js":
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "../node_modules/core-js/library/modules/_user-agent.js":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("../node_modules/core-js/library/modules/_global.js");
var navigator = global.navigator;

module.exports = navigator && navigator.userAgent || '';


/***/ }),

/***/ "../node_modules/core-js/library/modules/_wks-define.js":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("../node_modules/core-js/library/modules/_global.js");
var core = __webpack_require__("../node_modules/core-js/library/modules/_core.js");
var LIBRARY = __webpack_require__("../node_modules/core-js/library/modules/_library.js");
var wksExt = __webpack_require__("../node_modules/core-js/library/modules/_wks-ext.js");
var defineProperty = __webpack_require__("../node_modules/core-js/library/modules/_object-dp.js").f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),

/***/ "../node_modules/core-js/library/modules/_wks-ext.js":
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__("../node_modules/core-js/library/modules/_wks.js");


/***/ }),

/***/ "../node_modules/core-js/library/modules/_wks.js":
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__("../node_modules/core-js/library/modules/_shared.js")('wks');
var uid = __webpack_require__("../node_modules/core-js/library/modules/_uid.js");
var Symbol = __webpack_require__("../node_modules/core-js/library/modules/_global.js").Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ "../node_modules/core-js/library/modules/core.get-iterator-method.js":
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__("../node_modules/core-js/library/modules/_classof.js");
var ITERATOR = __webpack_require__("../node_modules/core-js/library/modules/_wks.js")('iterator');
var Iterators = __webpack_require__("../node_modules/core-js/library/modules/_iterators.js");
module.exports = __webpack_require__("../node_modules/core-js/library/modules/_core.js").getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),

/***/ "../node_modules/core-js/library/modules/es6.array.iterator.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__("../node_modules/core-js/library/modules/_add-to-unscopables.js");
var step = __webpack_require__("../node_modules/core-js/library/modules/_iter-step.js");
var Iterators = __webpack_require__("../node_modules/core-js/library/modules/_iterators.js");
var toIObject = __webpack_require__("../node_modules/core-js/library/modules/_to-iobject.js");

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__("../node_modules/core-js/library/modules/_iter-define.js")(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),

/***/ "../node_modules/core-js/library/modules/es6.object.assign.js":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__("../node_modules/core-js/library/modules/_export.js");

$export($export.S + $export.F, 'Object', { assign: __webpack_require__("../node_modules/core-js/library/modules/_object-assign.js") });


/***/ }),

/***/ "../node_modules/core-js/library/modules/es6.object.create.js":
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__("../node_modules/core-js/library/modules/_export.js");
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export($export.S, 'Object', { create: __webpack_require__("../node_modules/core-js/library/modules/_object-create.js") });


/***/ }),

/***/ "../node_modules/core-js/library/modules/es6.object.define-property.js":
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__("../node_modules/core-js/library/modules/_export.js");
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__("../node_modules/core-js/library/modules/_descriptors.js"), 'Object', { defineProperty: __webpack_require__("../node_modules/core-js/library/modules/_object-dp.js").f });


/***/ }),

/***/ "../node_modules/core-js/library/modules/es6.object.get-prototype-of.js":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 Object.getPrototypeOf(O)
var toObject = __webpack_require__("../node_modules/core-js/library/modules/_to-object.js");
var $getPrototypeOf = __webpack_require__("../node_modules/core-js/library/modules/_object-gpo.js");

__webpack_require__("../node_modules/core-js/library/modules/_object-sap.js")('getPrototypeOf', function () {
  return function getPrototypeOf(it) {
    return $getPrototypeOf(toObject(it));
  };
});


/***/ }),

/***/ "../node_modules/core-js/library/modules/es6.object.set-prototype-of.js":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = __webpack_require__("../node_modules/core-js/library/modules/_export.js");
$export($export.S, 'Object', { setPrototypeOf: __webpack_require__("../node_modules/core-js/library/modules/_set-proto.js").set });


/***/ }),

/***/ "../node_modules/core-js/library/modules/es6.object.to-string.js":
/***/ (function(module, exports) {



/***/ }),

/***/ "../node_modules/core-js/library/modules/es6.promise.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__("../node_modules/core-js/library/modules/_library.js");
var global = __webpack_require__("../node_modules/core-js/library/modules/_global.js");
var ctx = __webpack_require__("../node_modules/core-js/library/modules/_ctx.js");
var classof = __webpack_require__("../node_modules/core-js/library/modules/_classof.js");
var $export = __webpack_require__("../node_modules/core-js/library/modules/_export.js");
var isObject = __webpack_require__("../node_modules/core-js/library/modules/_is-object.js");
var aFunction = __webpack_require__("../node_modules/core-js/library/modules/_a-function.js");
var anInstance = __webpack_require__("../node_modules/core-js/library/modules/_an-instance.js");
var forOf = __webpack_require__("../node_modules/core-js/library/modules/_for-of.js");
var speciesConstructor = __webpack_require__("../node_modules/core-js/library/modules/_species-constructor.js");
var task = __webpack_require__("../node_modules/core-js/library/modules/_task.js").set;
var microtask = __webpack_require__("../node_modules/core-js/library/modules/_microtask.js")();
var newPromiseCapabilityModule = __webpack_require__("../node_modules/core-js/library/modules/_new-promise-capability.js");
var perform = __webpack_require__("../node_modules/core-js/library/modules/_perform.js");
var userAgent = __webpack_require__("../node_modules/core-js/library/modules/_user-agent.js");
var promiseResolve = __webpack_require__("../node_modules/core-js/library/modules/_promise-resolve.js");
var PROMISE = 'Promise';
var TypeError = global.TypeError;
var process = global.process;
var versions = process && process.versions;
var v8 = versions && versions.v8 || '';
var $Promise = global[PROMISE];
var isNode = classof(process) == 'process';
var empty = function () { /* empty */ };
var Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;
var newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f;

var USE_NATIVE = !!function () {
  try {
    // correct subclassing with @@species support
    var promise = $Promise.resolve(1);
    var FakePromise = (promise.constructor = {})[__webpack_require__("../node_modules/core-js/library/modules/_wks.js")('species')] = function (exec) {
      exec(empty, empty);
    };
    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    return (isNode || typeof PromiseRejectionEvent == 'function')
      && promise.then(empty) instanceof FakePromise
      // v8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
      // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
      // we can't detect it synchronously, so just check versions
      && v8.indexOf('6.6') !== 0
      && userAgent.indexOf('Chrome/66') === -1;
  } catch (e) { /* empty */ }
}();

// helpers
var isThenable = function (it) {
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};
var notify = function (promise, isReject) {
  if (promise._n) return;
  promise._n = true;
  var chain = promise._c;
  microtask(function () {
    var value = promise._v;
    var ok = promise._s == 1;
    var i = 0;
    var run = function (reaction) {
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then, exited;
      try {
        if (handler) {
          if (!ok) {
            if (promise._h == 2) onHandleUnhandled(promise);
            promise._h = 1;
          }
          if (handler === true) result = value;
          else {
            if (domain) domain.enter();
            result = handler(value); // may throw
            if (domain) {
              domain.exit();
              exited = true;
            }
          }
          if (result === reaction.promise) {
            reject(TypeError('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (e) {
        if (domain && !exited) domain.exit();
        reject(e);
      }
    };
    while (chain.length > i) run(chain[i++]); // variable length - can't use forEach
    promise._c = [];
    promise._n = false;
    if (isReject && !promise._h) onUnhandled(promise);
  });
};
var onUnhandled = function (promise) {
  task.call(global, function () {
    var value = promise._v;
    var unhandled = isUnhandled(promise);
    var result, handler, console;
    if (unhandled) {
      result = perform(function () {
        if (isNode) {
          process.emit('unhandledRejection', value, promise);
        } else if (handler = global.onunhandledrejection) {
          handler({ promise: promise, reason: value });
        } else if ((console = global.console) && console.error) {
          console.error('Unhandled promise rejection', value);
        }
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
    } promise._a = undefined;
    if (unhandled && result.e) throw result.v;
  });
};
var isUnhandled = function (promise) {
  return promise._h !== 1 && (promise._a || promise._c).length === 0;
};
var onHandleUnhandled = function (promise) {
  task.call(global, function () {
    var handler;
    if (isNode) {
      process.emit('rejectionHandled', promise);
    } else if (handler = global.onrejectionhandled) {
      handler({ promise: promise, reason: promise._v });
    }
  });
};
var $reject = function (value) {
  var promise = this;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  promise._v = value;
  promise._s = 2;
  if (!promise._a) promise._a = promise._c.slice();
  notify(promise, true);
};
var $resolve = function (value) {
  var promise = this;
  var then;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  try {
    if (promise === value) throw TypeError("Promise can't be resolved itself");
    if (then = isThenable(value)) {
      microtask(function () {
        var wrapper = { _w: promise, _d: false }; // wrap
        try {
          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
        } catch (e) {
          $reject.call(wrapper, e);
        }
      });
    } else {
      promise._v = value;
      promise._s = 1;
      notify(promise, false);
    }
  } catch (e) {
    $reject.call({ _w: promise, _d: false }, e); // wrap
  }
};

// constructor polyfill
if (!USE_NATIVE) {
  // 25.4.3.1 Promise(executor)
  $Promise = function Promise(executor) {
    anInstance(this, $Promise, PROMISE, '_h');
    aFunction(executor);
    Internal.call(this);
    try {
      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
    } catch (err) {
      $reject.call(this, err);
    }
  };
  // eslint-disable-next-line no-unused-vars
  Internal = function Promise(executor) {
    this._c = [];             // <- awaiting reactions
    this._a = undefined;      // <- checked in isUnhandled reactions
    this._s = 0;              // <- state
    this._d = false;          // <- done
    this._v = undefined;      // <- value
    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
    this._n = false;          // <- notify
  };
  Internal.prototype = __webpack_require__("../node_modules/core-js/library/modules/_redefine-all.js")($Promise.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected) {
      var reaction = newPromiseCapability(speciesConstructor(this, $Promise));
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      reaction.domain = isNode ? process.domain : undefined;
      this._c.push(reaction);
      if (this._a) this._a.push(reaction);
      if (this._s) notify(this, false);
      return reaction.promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  OwnPromiseCapability = function () {
    var promise = new Internal();
    this.promise = promise;
    this.resolve = ctx($resolve, promise, 1);
    this.reject = ctx($reject, promise, 1);
  };
  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
    return C === $Promise || C === Wrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: $Promise });
__webpack_require__("../node_modules/core-js/library/modules/_set-to-string-tag.js")($Promise, PROMISE);
__webpack_require__("../node_modules/core-js/library/modules/_set-species.js")(PROMISE);
Wrapper = __webpack_require__("../node_modules/core-js/library/modules/_core.js")[PROMISE];

// statics
$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    var $$reject = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x) {
    return promiseResolve(LIBRARY && this === Wrapper ? $Promise : this, x);
  }
});
$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__("../node_modules/core-js/library/modules/_iter-detect.js")(function (iter) {
  $Promise.all(iter)['catch'](empty);
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var values = [];
      var index = 0;
      var remaining = 1;
      forOf(iterable, false, function (promise) {
        var $index = index++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        C.resolve(promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[$index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.e) reject(result.v);
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var reject = capability.reject;
    var result = perform(function () {
      forOf(iterable, false, function (promise) {
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if (result.e) reject(result.v);
    return capability.promise;
  }
});


/***/ }),

/***/ "../node_modules/core-js/library/modules/es6.string.iterator.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__("../node_modules/core-js/library/modules/_string-at.js")(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__("../node_modules/core-js/library/modules/_iter-define.js")(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),

/***/ "../node_modules/core-js/library/modules/es6.symbol.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__("../node_modules/core-js/library/modules/_global.js");
var has = __webpack_require__("../node_modules/core-js/library/modules/_has.js");
var DESCRIPTORS = __webpack_require__("../node_modules/core-js/library/modules/_descriptors.js");
var $export = __webpack_require__("../node_modules/core-js/library/modules/_export.js");
var redefine = __webpack_require__("../node_modules/core-js/library/modules/_redefine.js");
var META = __webpack_require__("../node_modules/core-js/library/modules/_meta.js").KEY;
var $fails = __webpack_require__("../node_modules/core-js/library/modules/_fails.js");
var shared = __webpack_require__("../node_modules/core-js/library/modules/_shared.js");
var setToStringTag = __webpack_require__("../node_modules/core-js/library/modules/_set-to-string-tag.js");
var uid = __webpack_require__("../node_modules/core-js/library/modules/_uid.js");
var wks = __webpack_require__("../node_modules/core-js/library/modules/_wks.js");
var wksExt = __webpack_require__("../node_modules/core-js/library/modules/_wks-ext.js");
var wksDefine = __webpack_require__("../node_modules/core-js/library/modules/_wks-define.js");
var enumKeys = __webpack_require__("../node_modules/core-js/library/modules/_enum-keys.js");
var isArray = __webpack_require__("../node_modules/core-js/library/modules/_is-array.js");
var anObject = __webpack_require__("../node_modules/core-js/library/modules/_an-object.js");
var isObject = __webpack_require__("../node_modules/core-js/library/modules/_is-object.js");
var toIObject = __webpack_require__("../node_modules/core-js/library/modules/_to-iobject.js");
var toPrimitive = __webpack_require__("../node_modules/core-js/library/modules/_to-primitive.js");
var createDesc = __webpack_require__("../node_modules/core-js/library/modules/_property-desc.js");
var _create = __webpack_require__("../node_modules/core-js/library/modules/_object-create.js");
var gOPNExt = __webpack_require__("../node_modules/core-js/library/modules/_object-gopn-ext.js");
var $GOPD = __webpack_require__("../node_modules/core-js/library/modules/_object-gopd.js");
var $DP = __webpack_require__("../node_modules/core-js/library/modules/_object-dp.js");
var $keys = __webpack_require__("../node_modules/core-js/library/modules/_object-keys.js");
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function';
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__("../node_modules/core-js/library/modules/_object-gopn.js").f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__("../node_modules/core-js/library/modules/_object-pie.js").f = $propertyIsEnumerable;
  __webpack_require__("../node_modules/core-js/library/modules/_object-gops.js").f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__("../node_modules/core-js/library/modules/_library.js")) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__("../node_modules/core-js/library/modules/_hide.js")($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),

/***/ "../node_modules/core-js/library/modules/es7.promise.finally.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// https://github.com/tc39/proposal-promise-finally

var $export = __webpack_require__("../node_modules/core-js/library/modules/_export.js");
var core = __webpack_require__("../node_modules/core-js/library/modules/_core.js");
var global = __webpack_require__("../node_modules/core-js/library/modules/_global.js");
var speciesConstructor = __webpack_require__("../node_modules/core-js/library/modules/_species-constructor.js");
var promiseResolve = __webpack_require__("../node_modules/core-js/library/modules/_promise-resolve.js");

$export($export.P + $export.R, 'Promise', { 'finally': function (onFinally) {
  var C = speciesConstructor(this, core.Promise || global.Promise);
  var isFunction = typeof onFinally == 'function';
  return this.then(
    isFunction ? function (x) {
      return promiseResolve(C, onFinally()).then(function () { return x; });
    } : onFinally,
    isFunction ? function (e) {
      return promiseResolve(C, onFinally()).then(function () { throw e; });
    } : onFinally
  );
} });


/***/ }),

/***/ "../node_modules/core-js/library/modules/es7.promise.try.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/tc39/proposal-promise-try
var $export = __webpack_require__("../node_modules/core-js/library/modules/_export.js");
var newPromiseCapability = __webpack_require__("../node_modules/core-js/library/modules/_new-promise-capability.js");
var perform = __webpack_require__("../node_modules/core-js/library/modules/_perform.js");

$export($export.S, 'Promise', { 'try': function (callbackfn) {
  var promiseCapability = newPromiseCapability.f(this);
  var result = perform(callbackfn);
  (result.e ? promiseCapability.reject : promiseCapability.resolve)(result.v);
  return promiseCapability.promise;
} });


/***/ }),

/***/ "../node_modules/core-js/library/modules/es7.symbol.async-iterator.js":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("../node_modules/core-js/library/modules/_wks-define.js")('asyncIterator');


/***/ }),

/***/ "../node_modules/core-js/library/modules/es7.symbol.observable.js":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("../node_modules/core-js/library/modules/_wks-define.js")('observable');


/***/ }),

/***/ "../node_modules/core-js/library/modules/web.dom.iterable.js":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("../node_modules/core-js/library/modules/es6.array.iterator.js");
var global = __webpack_require__("../node_modules/core-js/library/modules/_global.js");
var hide = __webpack_require__("../node_modules/core-js/library/modules/_hide.js");
var Iterators = __webpack_require__("../node_modules/core-js/library/modules/_iterators.js");
var TO_STRING_TAG = __webpack_require__("../node_modules/core-js/library/modules/_wks.js")('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}


/***/ }),

/***/ "../node_modules/preact/devtools.js":
/***/ (function(module, exports, __webpack_require__) {

(function (global, factory) {
	 true ? factory(__webpack_require__("../node_modules/preact/dist/preact.esm.js")) :
	typeof define === 'function' && define.amd ? define(['preact'], factory) :
	(factory(global.preact));
}(this, (function (preact) { 'use strict';

	// render modes

	var ATTR_KEY = '__preactattr_';

	/* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */

	/**
	 * Return a ReactElement-compatible object for the current state of a preact
	 * component.
	 */
	function createReactElement(component) {
		return {
			type: component.constructor,
			key: component.key,
			ref: null, // Unsupported
			props: component.props
		};
	}

	/**
	 * Create a ReactDOMComponent-compatible object for a given DOM node rendered
	 * by preact.
	 *
	 * This implements the subset of the ReactDOMComponent interface that
	 * React DevTools requires in order to display DOM nodes in the inspector with
	 * the correct type and properties.
	 *
	 * @param {Node} node
	 */
	function createReactDOMComponent(node) {
		var childNodes = node.nodeType === Node.ELEMENT_NODE ? Array.from(node.childNodes) : [];

		var isText = node.nodeType === Node.TEXT_NODE;

		return {
			// --- ReactDOMComponent interface
			_currentElement: isText ? node.textContent : {
				type: node.nodeName.toLowerCase(),
				props: node[ATTR_KEY]
			},
			_renderedChildren: childNodes.map(function (child) {
				if (child._component) {
					return updateReactComponent(child._component);
				}
				return updateReactComponent(child);
			}),
			_stringText: isText ? node.textContent : null,

			// --- Additional properties used by preact devtools

			// A flag indicating whether the devtools have been notified about the
			// existence of this component instance yet.
			// This is used to send the appropriate notifications when DOM components
			// are added or updated between composite component updates.
			_inDevTools: false,
			node: node
		};
	}

	/**
	 * Return the name of a component created by a `ReactElement`-like object.
	 *
	 * @param {ReactElement} element
	 */
	function typeName(element) {
		if (typeof element.type === 'function') {
			return element.type.displayName || element.type.name;
		}
		return element.type;
	}

	/**
	 * Return a ReactCompositeComponent-compatible object for a given preact
	 * component instance.
	 *
	 * This implements the subset of the ReactCompositeComponent interface that
	 * the DevTools requires in order to walk the component tree and inspect the
	 * component's properties.
	 *
	 * See https://github.com/facebook/react-devtools/blob/e31ec5825342eda570acfc9bcb43a44258fceb28/backend/getData.js
	 */
	function createReactCompositeComponent(component) {
		var _currentElement = createReactElement(component);
		var node = component.base;

		var instance = {
			// --- ReactDOMComponent properties
			getName: function getName() {
				return typeName(_currentElement);
			},

			_currentElement: createReactElement(component),
			props: component.props,
			state: component.state,
			forceUpdate: component.forceUpdate && component.forceUpdate.bind(component),
			setState: component.setState && component.setState.bind(component),

			// --- Additional properties used by preact devtools
			node: node
		};

		// React DevTools exposes the `_instance` field of the selected item in the
		// component tree as `$r` in the console.  `_instance` must refer to a
		// React Component (or compatible) class instance with `props` and `state`
		// fields and `setState()`, `forceUpdate()` methods.
		instance._instance = component;

		// If the root node returned by this component instance's render function
		// was itself a composite component, there will be a `_component` property
		// containing the child component instance.
		if (component._component) {
			instance._renderedComponent = updateReactComponent(component._component);
		} else {
			// Otherwise, if the render() function returned an HTML/SVG element,
			// create a ReactDOMComponent-like object for the DOM node itself.
			instance._renderedComponent = updateReactComponent(node);
		}

		return instance;
	}

	/**
	 * Map of Component|Node to ReactDOMComponent|ReactCompositeComponent-like
	 * object.
	 *
	 * The same React*Component instance must be used when notifying devtools
	 * about the initial mount of a component and subsequent updates.
	 */
	var instanceMap = typeof Map === 'function' && new Map();

	/**
	 * Update (and create if necessary) the ReactDOMComponent|ReactCompositeComponent-like
	 * instance for a given preact component instance or DOM Node.
	 *
	 * @param {Component|Node} componentOrNode
	 */
	function updateReactComponent(componentOrNode) {
		var newInstance = componentOrNode instanceof Node ? createReactDOMComponent(componentOrNode) : createReactCompositeComponent(componentOrNode);
		if (instanceMap.has(componentOrNode)) {
			var inst = instanceMap.get(componentOrNode);
			Object.assign(inst, newInstance);
			return inst;
		}
		instanceMap.set(componentOrNode, newInstance);
		return newInstance;
	}

	function nextRootKey(roots) {
		return '.' + Object.keys(roots).length;
	}

	/**
	 * Find all root component instances rendered by preact in `node`'s children
	 * and add them to the `roots` map.
	 *
	 * @param {DOMElement} node
	 * @param {[key: string] => ReactDOMComponent|ReactCompositeComponent}
	 */
	function findRoots(node, roots) {
		Array.from(node.childNodes).forEach(function (child) {
			if (child._component) {
				roots[nextRootKey(roots)] = updateReactComponent(child._component);
			} else {
				findRoots(child, roots);
			}
		});
	}

	/**
	 * Create a bridge for exposing preact's component tree to React DevTools.
	 *
	 * It creates implementations of the interfaces that ReactDOM passes to
	 * devtools to enable it to query the component tree and hook into component
	 * updates.
	 *
	 * See https://github.com/facebook/react/blob/59ff7749eda0cd858d5ee568315bcba1be75a1ca/src/renderers/dom/ReactDOM.js
	 * for how ReactDOM exports its internals for use by the devtools and
	 * the `attachRenderer()` function in
	 * https://github.com/facebook/react-devtools/blob/e31ec5825342eda570acfc9bcb43a44258fceb28/backend/attachRenderer.js
	 * for how the devtools consumes the resulting objects.
	 */
	function createDevToolsBridge() {
		// The devtools has different paths for interacting with the renderers from
		// React Native, legacy React DOM and current React DOM.
		//
		// Here we emulate the interface for the current React DOM (v15+) lib.

		// ReactDOMComponentTree-like object
		var ComponentTree = {
			getNodeFromInstance: function getNodeFromInstance(instance) {
				return instance.node;
			},
			getClosestInstanceFromNode: function getClosestInstanceFromNode(node) {
				while (node && !node._component) {
					node = node.parentNode;
				}
				return node ? updateReactComponent(node._component) : null;
			}
		};

		// Map of root ID (the ID is unimportant) to component instance.
		var roots = {};
		findRoots(document.body, roots);

		// ReactMount-like object
		//
		// Used by devtools to discover the list of root component instances and get
		// notified when new root components are rendered.
		var Mount = {
			_instancesByReactRootID: roots,

			// Stub - React DevTools expects to find this method and replace it
			// with a wrapper in order to observe new root components being added
			_renderNewRootComponent: function _renderNewRootComponent() /* instance, ... */{}
		};

		// ReactReconciler-like object
		var Reconciler = {
			// Stubs - React DevTools expects to find these methods and replace them
			// with wrappers in order to observe components being mounted, updated and
			// unmounted
			mountComponent: function mountComponent() /* instance, ... */{},
			performUpdateIfNecessary: function performUpdateIfNecessary() /* instance, ... */{},
			receiveComponent: function receiveComponent() /* instance, ... */{},
			unmountComponent: function unmountComponent() /* instance, ... */{}
		};

		/** Notify devtools that a new component instance has been mounted into the DOM. */
		var componentAdded = function componentAdded(component) {
			var instance = updateReactComponent(component);
			if (isRootComponent(component)) {
				instance._rootID = nextRootKey(roots);
				roots[instance._rootID] = instance;
				Mount._renderNewRootComponent(instance);
			}
			visitNonCompositeChildren(instance, function (childInst) {
				childInst._inDevTools = true;
				Reconciler.mountComponent(childInst);
			});
			Reconciler.mountComponent(instance);
		};

		/** Notify devtools that a component has been updated with new props/state. */
		var componentUpdated = function componentUpdated(component) {
			var prevRenderedChildren = [];
			var instance = instanceMap.get(component);
			if (instance) {
				visitNonCompositeChildren(instance, function (childInst) {
					prevRenderedChildren.push(childInst);
				});
			}
			// Notify devtools about updates to this component and any non-composite
			// children
			instance = updateReactComponent(component);

			Reconciler.receiveComponent(instance);
			visitNonCompositeChildren(instance, function (childInst) {
				if (!childInst._inDevTools) {
					// New DOM child component
					childInst._inDevTools = true;
					Reconciler.mountComponent(childInst);
				} else {
					// Updated DOM child component
					Reconciler.receiveComponent(childInst);
				}
			});

			// For any non-composite children that were removed by the latest render,
			// remove the corresponding ReactDOMComponent-like instances and notify
			// the devtools
			prevRenderedChildren.forEach(function (childInst) {
				if (!document.body.contains(childInst.node)) {
					instanceMap.delete(childInst.node);
					Reconciler.unmountComponent(childInst);
				}
			});
		};

		/** Notify devtools that a component has been unmounted from the DOM. */
		var componentRemoved = function componentRemoved(component) {
			var instance = updateReactComponent(component);
			visitNonCompositeChildren(function (childInst) {
				instanceMap.delete(childInst.node);
				Reconciler.unmountComponent(childInst);
			});
			Reconciler.unmountComponent(instance);
			instanceMap.delete(component);
			if (instance._rootID) {
				delete roots[instance._rootID];
			}
		};

		return {
			componentAdded: componentAdded,
			componentUpdated: componentUpdated,
			componentRemoved: componentRemoved,

			// Interfaces passed to devtools via __REACT_DEVTOOLS_GLOBAL_HOOK__.inject()
			ComponentTree: ComponentTree,
			Mount: Mount,
			Reconciler: Reconciler
		};
	}

	/**
	 * Return `true` if a preact component is a top level component rendered by
	 * `render()` into a container Element.
	 */
	function isRootComponent(component) {
		// `_parentComponent` is actually `__u` after minification
		if (component._parentComponent || component.__u) {
			// Component with a composite parent
			return false;
		}
		if (component.base.parentElement && component.base.parentElement[ATTR_KEY]) {
			// Component with a parent DOM element rendered by Preact
			return false;
		}
		return true;
	}

	/**
	 * Visit all child instances of a ReactCompositeComponent-like object that are
	 * not composite components (ie. they represent DOM elements or text)
	 *
	 * @param {Component} component
	 * @param {(Component) => void} visitor
	 */
	function visitNonCompositeChildren(component, visitor) {
		if (!component) return;
		if (component._renderedComponent) {
			if (!component._renderedComponent._component) {
				visitor(component._renderedComponent);
				visitNonCompositeChildren(component._renderedComponent, visitor);
			}
		} else if (component._renderedChildren) {
			component._renderedChildren.forEach(function (child) {
				visitor(child);
				if (!child._component) visitNonCompositeChildren(child, visitor);
			});
		}
	}

	/**
	 * Create a bridge between the preact component tree and React's dev tools
	 * and register it.
	 *
	 * After this function is called, the React Dev Tools should be able to detect
	 * "React" on the page and show the component tree.
	 *
	 * This function hooks into preact VNode creation in order to expose functional
	 * components correctly, so it should be called before the root component(s)
	 * are rendered.
	 *
	 * Returns a cleanup function which unregisters the hooks.
	 */
	function initDevTools() {
		if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === 'undefined') {
			// React DevTools are not installed
			return;
		}

		// Notify devtools when preact components are mounted, updated or unmounted
		var bridge = createDevToolsBridge();

		var nextAfterMount = preact.options.afterMount;
		preact.options.afterMount = function (component) {
			bridge.componentAdded(component);
			if (nextAfterMount) nextAfterMount(component);
		};

		var nextAfterUpdate = preact.options.afterUpdate;
		preact.options.afterUpdate = function (component) {
			bridge.componentUpdated(component);
			if (nextAfterUpdate) nextAfterUpdate(component);
		};

		var nextBeforeUnmount = preact.options.beforeUnmount;
		preact.options.beforeUnmount = function (component) {
			bridge.componentRemoved(component);
			if (nextBeforeUnmount) nextBeforeUnmount(component);
		};

		// Notify devtools about this instance of "React"
		__REACT_DEVTOOLS_GLOBAL_HOOK__.inject(bridge);

		return function () {
			preact.options.afterMount = nextAfterMount;
			preact.options.afterUpdate = nextAfterUpdate;
			preact.options.beforeUnmount = nextBeforeUnmount;
		};
	}

	initDevTools();

})));
//# sourceMappingURL=devtools.js.map


/***/ }),

/***/ "../node_modules/preact/dist/preact.esm.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return h; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createElement", function() { return h; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cloneElement", function() { return cloneElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Component", function() { return Component; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rerender", function() { return rerender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "options", function() { return options; });
/** Virtual DOM Node */
function VNode() {}

/** Global options
 *	@public
 *	@namespace options {Object}
 */
var options = {

	/** If `true`, `prop` changes trigger synchronous component updates.
  *	@name syncComponentUpdates
  *	@type Boolean
  *	@default true
  */
	//syncComponentUpdates: true,

	/** Processes all created VNodes.
  *	@param {VNode} vnode	A newly-created VNode to normalize/process
  */
	//vnode(vnode) { }

	/** Hook invoked after a component is mounted. */
	// afterMount(component) { }

	/** Hook invoked after the DOM is updated with a component's latest render. */
	// afterUpdate(component) { }

	/** Hook invoked immediately before a component is unmounted. */
	// beforeUnmount(component) { }
};

var stack = [];

var EMPTY_CHILDREN = [];

/**
 * JSX/hyperscript reviver.
 * @see http://jasonformat.com/wtf-is-jsx
 * Benchmarks: https://esbench.com/bench/57ee8f8e330ab09900a1a1a0
 *
 * Note: this is exported as both `h()` and `createElement()` for compatibility reasons.
 *
 * Creates a VNode (virtual DOM element). A tree of VNodes can be used as a lightweight representation
 * of the structure of a DOM tree. This structure can be realized by recursively comparing it against
 * the current _actual_ DOM structure, and applying only the differences.
 *
 * `h()`/`createElement()` accepts an element name, a list of attributes/props,
 * and optionally children to append to the element.
 *
 * @example The following DOM tree
 *
 * `<div id="foo" name="bar">Hello!</div>`
 *
 * can be constructed using this function as:
 *
 * `h('div', { id: 'foo', name : 'bar' }, 'Hello!');`
 *
 * @param {string} nodeName	An element name. Ex: `div`, `a`, `span`, etc.
 * @param {Object} attributes	Any attributes/props to set on the created element.
 * @param rest			Additional arguments are taken to be children to append. Can be infinitely nested Arrays.
 *
 * @public
 */
function h(nodeName, attributes) {
	var children = EMPTY_CHILDREN,
	    lastSimple,
	    child,
	    simple,
	    i;
	for (i = arguments.length; i-- > 2;) {
		stack.push(arguments[i]);
	}
	if (attributes && attributes.children != null) {
		if (!stack.length) stack.push(attributes.children);
		delete attributes.children;
	}
	while (stack.length) {
		if ((child = stack.pop()) && child.pop !== undefined) {
			for (i = child.length; i--;) {
				stack.push(child[i]);
			}
		} else {
			if (typeof child === 'boolean') child = null;

			if (simple = typeof nodeName !== 'function') {
				if (child == null) child = '';else if (typeof child === 'number') child = String(child);else if (typeof child !== 'string') simple = false;
			}

			if (simple && lastSimple) {
				children[children.length - 1] += child;
			} else if (children === EMPTY_CHILDREN) {
				children = [child];
			} else {
				children.push(child);
			}

			lastSimple = simple;
		}
	}

	var p = new VNode();
	p.nodeName = nodeName;
	p.children = children;
	p.attributes = attributes == null ? undefined : attributes;
	p.key = attributes == null ? undefined : attributes.key;

	// if a "vnode hook" is defined, pass every created VNode to it
	if (options.vnode !== undefined) options.vnode(p);

	return p;
}

/**
 *  Copy all properties from `props` onto `obj`.
 *  @param {Object} obj		Object onto which properties should be copied.
 *  @param {Object} props	Object from which to copy properties.
 *  @returns obj
 *  @private
 */
function extend(obj, props) {
  for (var i in props) {
    obj[i] = props[i];
  }return obj;
}

/**
 * Call a function asynchronously, as soon as possible. Makes
 * use of HTML Promise to schedule the callback if available,
 * otherwise falling back to `setTimeout` (mainly for IE<11).
 *
 * @param {Function} callback
 */
var defer = typeof Promise == 'function' ? Promise.resolve().then.bind(Promise.resolve()) : setTimeout;

/**
 * Clones the given VNode, optionally adding attributes/props and replacing its children.
 * @param {VNode} vnode		The virtual DOM element to clone
 * @param {Object} props	Attributes/props to add when cloning
 * @param {VNode} rest		Any additional arguments will be used as replacement children.
 */
function cloneElement(vnode, props) {
  return h(vnode.nodeName, extend(extend({}, vnode.attributes), props), arguments.length > 2 ? [].slice.call(arguments, 2) : vnode.children);
}

// DOM properties that should NOT have "px" added when numeric
var IS_NON_DIMENSIONAL = /acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i;

/** Managed queue of dirty components to be re-rendered */

var items = [];

function enqueueRender(component) {
	if (!component._dirty && (component._dirty = true) && items.push(component) == 1) {
		(options.debounceRendering || defer)(rerender);
	}
}

function rerender() {
	var p,
	    list = items;
	items = [];
	while (p = list.pop()) {
		if (p._dirty) renderComponent(p);
	}
}

/**
 * Check if two nodes are equivalent.
 *
 * @param {Node} node			DOM Node to compare
 * @param {VNode} vnode			Virtual DOM node to compare
 * @param {boolean} [hydrating=false]	If true, ignores component constructors when comparing.
 * @private
 */
function isSameNodeType(node, vnode, hydrating) {
  if (typeof vnode === 'string' || typeof vnode === 'number') {
    return node.splitText !== undefined;
  }
  if (typeof vnode.nodeName === 'string') {
    return !node._componentConstructor && isNamedNode(node, vnode.nodeName);
  }
  return hydrating || node._componentConstructor === vnode.nodeName;
}

/**
 * Check if an Element has a given nodeName, case-insensitively.
 *
 * @param {Element} node	A DOM Element to inspect the name of.
 * @param {String} nodeName	Unnormalized name to compare against.
 */
function isNamedNode(node, nodeName) {
  return node.normalizedNodeName === nodeName || node.nodeName.toLowerCase() === nodeName.toLowerCase();
}

/**
 * Reconstruct Component-style `props` from a VNode.
 * Ensures default/fallback values from `defaultProps`:
 * Own-properties of `defaultProps` not present in `vnode.attributes` are added.
 *
 * @param {VNode} vnode
 * @returns {Object} props
 */
function getNodeProps(vnode) {
  var props = extend({}, vnode.attributes);
  props.children = vnode.children;

  var defaultProps = vnode.nodeName.defaultProps;
  if (defaultProps !== undefined) {
    for (var i in defaultProps) {
      if (props[i] === undefined) {
        props[i] = defaultProps[i];
      }
    }
  }

  return props;
}

/** Create an element with the given nodeName.
 *	@param {String} nodeName
 *	@param {Boolean} [isSvg=false]	If `true`, creates an element within the SVG namespace.
 *	@returns {Element} node
 */
function createNode(nodeName, isSvg) {
	var node = isSvg ? document.createElementNS('http://www.w3.org/2000/svg', nodeName) : document.createElement(nodeName);
	node.normalizedNodeName = nodeName;
	return node;
}

/** Remove a child node from its parent if attached.
 *	@param {Element} node		The node to remove
 */
function removeNode(node) {
	var parentNode = node.parentNode;
	if (parentNode) parentNode.removeChild(node);
}

/** Set a named attribute on the given Node, with special behavior for some names and event handlers.
 *	If `value` is `null`, the attribute/handler will be removed.
 *	@param {Element} node	An element to mutate
 *	@param {string} name	The name/key to set, such as an event or attribute name
 *	@param {any} old	The last value that was set for this name/node pair
 *	@param {any} value	An attribute value, such as a function to be used as an event handler
 *	@param {Boolean} isSvg	Are we currently diffing inside an svg?
 *	@private
 */
function setAccessor(node, name, old, value, isSvg) {
	if (name === 'className') name = 'class';

	if (name === 'key') {
		// ignore
	} else if (name === 'ref') {
		if (old) old(null);
		if (value) value(node);
	} else if (name === 'class' && !isSvg) {
		node.className = value || '';
	} else if (name === 'style') {
		if (!value || typeof value === 'string' || typeof old === 'string') {
			node.style.cssText = value || '';
		}
		if (value && typeof value === 'object') {
			if (typeof old !== 'string') {
				for (var i in old) {
					if (!(i in value)) node.style[i] = '';
				}
			}
			for (var i in value) {
				node.style[i] = typeof value[i] === 'number' && IS_NON_DIMENSIONAL.test(i) === false ? value[i] + 'px' : value[i];
			}
		}
	} else if (name === 'dangerouslySetInnerHTML') {
		if (value) node.innerHTML = value.__html || '';
	} else if (name[0] == 'o' && name[1] == 'n') {
		var useCapture = name !== (name = name.replace(/Capture$/, ''));
		name = name.toLowerCase().substring(2);
		if (value) {
			if (!old) node.addEventListener(name, eventProxy, useCapture);
		} else {
			node.removeEventListener(name, eventProxy, useCapture);
		}
		(node._listeners || (node._listeners = {}))[name] = value;
	} else if (name !== 'list' && name !== 'type' && !isSvg && name in node) {
		setProperty(node, name, value == null ? '' : value);
		if (value == null || value === false) node.removeAttribute(name);
	} else {
		var ns = isSvg && name !== (name = name.replace(/^xlink:?/, ''));
		if (value == null || value === false) {
			if (ns) node.removeAttributeNS('http://www.w3.org/1999/xlink', name.toLowerCase());else node.removeAttribute(name);
		} else if (typeof value !== 'function') {
			if (ns) node.setAttributeNS('http://www.w3.org/1999/xlink', name.toLowerCase(), value);else node.setAttribute(name, value);
		}
	}
}

/** Attempt to set a DOM property to the given value.
 *	IE & FF throw for certain property-value combinations.
 */
function setProperty(node, name, value) {
	try {
		node[name] = value;
	} catch (e) {}
}

/** Proxy an event to hooked event handlers
 *	@private
 */
function eventProxy(e) {
	return this._listeners[e.type](options.event && options.event(e) || e);
}

/** Queue of components that have been mounted and are awaiting componentDidMount */
var mounts = [];

/** Diff recursion count, used to track the end of the diff cycle. */
var diffLevel = 0;

/** Global flag indicating if the diff is currently within an SVG */
var isSvgMode = false;

/** Global flag indicating if the diff is performing hydration */
var hydrating = false;

/** Invoke queued componentDidMount lifecycle methods */
function flushMounts() {
	var c;
	while (c = mounts.pop()) {
		if (options.afterMount) options.afterMount(c);
		if (c.componentDidMount) c.componentDidMount();
	}
}

/** Apply differences in a given vnode (and it's deep children) to a real DOM Node.
 *	@param {Element} [dom=null]		A DOM node to mutate into the shape of the `vnode`
 *	@param {VNode} vnode			A VNode (with descendants forming a tree) representing the desired DOM structure
 *	@returns {Element} dom			The created/mutated element
 *	@private
 */
function diff(dom, vnode, context, mountAll, parent, componentRoot) {
	// diffLevel having been 0 here indicates initial entry into the diff (not a subdiff)
	if (!diffLevel++) {
		// when first starting the diff, check if we're diffing an SVG or within an SVG
		isSvgMode = parent != null && parent.ownerSVGElement !== undefined;

		// hydration is indicated by the existing element to be diffed not having a prop cache
		hydrating = dom != null && !('__preactattr_' in dom);
	}

	var ret = idiff(dom, vnode, context, mountAll, componentRoot);

	// append the element if its a new parent
	if (parent && ret.parentNode !== parent) parent.appendChild(ret);

	// diffLevel being reduced to 0 means we're exiting the diff
	if (! --diffLevel) {
		hydrating = false;
		// invoke queued componentDidMount lifecycle methods
		if (!componentRoot) flushMounts();
	}

	return ret;
}

/** Internals of `diff()`, separated to allow bypassing diffLevel / mount flushing. */
function idiff(dom, vnode, context, mountAll, componentRoot) {
	var out = dom,
	    prevSvgMode = isSvgMode;

	// empty values (null, undefined, booleans) render as empty Text nodes
	if (vnode == null || typeof vnode === 'boolean') vnode = '';

	// Fast case: Strings & Numbers create/update Text nodes.
	if (typeof vnode === 'string' || typeof vnode === 'number') {

		// update if it's already a Text node:
		if (dom && dom.splitText !== undefined && dom.parentNode && (!dom._component || componentRoot)) {
			/* istanbul ignore if */ /* Browser quirk that can't be covered: https://github.com/developit/preact/commit/fd4f21f5c45dfd75151bd27b4c217d8003aa5eb9 */
			if (dom.nodeValue != vnode) {
				dom.nodeValue = vnode;
			}
		} else {
			// it wasn't a Text node: replace it with one and recycle the old Element
			out = document.createTextNode(vnode);
			if (dom) {
				if (dom.parentNode) dom.parentNode.replaceChild(out, dom);
				recollectNodeTree(dom, true);
			}
		}

		out['__preactattr_'] = true;

		return out;
	}

	// If the VNode represents a Component, perform a component diff:
	var vnodeName = vnode.nodeName;
	if (typeof vnodeName === 'function') {
		return buildComponentFromVNode(dom, vnode, context, mountAll);
	}

	// Tracks entering and exiting SVG namespace when descending through the tree.
	isSvgMode = vnodeName === 'svg' ? true : vnodeName === 'foreignObject' ? false : isSvgMode;

	// If there's no existing element or it's the wrong type, create a new one:
	vnodeName = String(vnodeName);
	if (!dom || !isNamedNode(dom, vnodeName)) {
		out = createNode(vnodeName, isSvgMode);

		if (dom) {
			// move children into the replacement node
			while (dom.firstChild) {
				out.appendChild(dom.firstChild);
			} // if the previous Element was mounted into the DOM, replace it inline
			if (dom.parentNode) dom.parentNode.replaceChild(out, dom);

			// recycle the old element (skips non-Element node types)
			recollectNodeTree(dom, true);
		}
	}

	var fc = out.firstChild,
	    props = out['__preactattr_'],
	    vchildren = vnode.children;

	if (props == null) {
		props = out['__preactattr_'] = {};
		for (var a = out.attributes, i = a.length; i--;) {
			props[a[i].name] = a[i].value;
		}
	}

	// Optimization: fast-path for elements containing a single TextNode:
	if (!hydrating && vchildren && vchildren.length === 1 && typeof vchildren[0] === 'string' && fc != null && fc.splitText !== undefined && fc.nextSibling == null) {
		if (fc.nodeValue != vchildren[0]) {
			fc.nodeValue = vchildren[0];
		}
	}
	// otherwise, if there are existing or new children, diff them:
	else if (vchildren && vchildren.length || fc != null) {
			innerDiffNode(out, vchildren, context, mountAll, hydrating || props.dangerouslySetInnerHTML != null);
		}

	// Apply attributes/props from VNode to the DOM Element:
	diffAttributes(out, vnode.attributes, props);

	// restore previous SVG mode: (in case we're exiting an SVG namespace)
	isSvgMode = prevSvgMode;

	return out;
}

/** Apply child and attribute changes between a VNode and a DOM Node to the DOM.
 *	@param {Element} dom			Element whose children should be compared & mutated
 *	@param {Array} vchildren		Array of VNodes to compare to `dom.childNodes`
 *	@param {Object} context			Implicitly descendant context object (from most recent `getChildContext()`)
 *	@param {Boolean} mountAll
 *	@param {Boolean} isHydrating	If `true`, consumes externally created elements similar to hydration
 */
function innerDiffNode(dom, vchildren, context, mountAll, isHydrating) {
	var originalChildren = dom.childNodes,
	    children = [],
	    keyed = {},
	    keyedLen = 0,
	    min = 0,
	    len = originalChildren.length,
	    childrenLen = 0,
	    vlen = vchildren ? vchildren.length : 0,
	    j,
	    c,
	    f,
	    vchild,
	    child;

	// Build up a map of keyed children and an Array of unkeyed children:
	if (len !== 0) {
		for (var i = 0; i < len; i++) {
			var _child = originalChildren[i],
			    props = _child['__preactattr_'],
			    key = vlen && props ? _child._component ? _child._component.__key : props.key : null;
			if (key != null) {
				keyedLen++;
				keyed[key] = _child;
			} else if (props || (_child.splitText !== undefined ? isHydrating ? _child.nodeValue.trim() : true : isHydrating)) {
				children[childrenLen++] = _child;
			}
		}
	}

	if (vlen !== 0) {
		for (var i = 0; i < vlen; i++) {
			vchild = vchildren[i];
			child = null;

			// attempt to find a node based on key matching
			var key = vchild.key;
			if (key != null) {
				if (keyedLen && keyed[key] !== undefined) {
					child = keyed[key];
					keyed[key] = undefined;
					keyedLen--;
				}
			}
			// attempt to pluck a node of the same type from the existing children
			else if (!child && min < childrenLen) {
					for (j = min; j < childrenLen; j++) {
						if (children[j] !== undefined && isSameNodeType(c = children[j], vchild, isHydrating)) {
							child = c;
							children[j] = undefined;
							if (j === childrenLen - 1) childrenLen--;
							if (j === min) min++;
							break;
						}
					}
				}

			// morph the matched/found/created DOM child to match vchild (deep)
			child = idiff(child, vchild, context, mountAll);

			f = originalChildren[i];
			if (child && child !== dom && child !== f) {
				if (f == null) {
					dom.appendChild(child);
				} else if (child === f.nextSibling) {
					removeNode(f);
				} else {
					dom.insertBefore(child, f);
				}
			}
		}
	}

	// remove unused keyed children:
	if (keyedLen) {
		for (var i in keyed) {
			if (keyed[i] !== undefined) recollectNodeTree(keyed[i], false);
		}
	}

	// remove orphaned unkeyed children:
	while (min <= childrenLen) {
		if ((child = children[childrenLen--]) !== undefined) recollectNodeTree(child, false);
	}
}

/** Recursively recycle (or just unmount) a node and its descendants.
 *	@param {Node} node						DOM node to start unmount/removal from
 *	@param {Boolean} [unmountOnly=false]	If `true`, only triggers unmount lifecycle, skips removal
 */
function recollectNodeTree(node, unmountOnly) {
	var component = node._component;
	if (component) {
		// if node is owned by a Component, unmount that component (ends up recursing back here)
		unmountComponent(component);
	} else {
		// If the node's VNode had a ref function, invoke it with null here.
		// (this is part of the React spec, and smart for unsetting references)
		if (node['__preactattr_'] != null && node['__preactattr_'].ref) node['__preactattr_'].ref(null);

		if (unmountOnly === false || node['__preactattr_'] == null) {
			removeNode(node);
		}

		removeChildren(node);
	}
}

/** Recollect/unmount all children.
 *	- we use .lastChild here because it causes less reflow than .firstChild
 *	- it's also cheaper than accessing the .childNodes Live NodeList
 */
function removeChildren(node) {
	node = node.lastChild;
	while (node) {
		var next = node.previousSibling;
		recollectNodeTree(node, true);
		node = next;
	}
}

/** Apply differences in attributes from a VNode to the given DOM Element.
 *	@param {Element} dom		Element with attributes to diff `attrs` against
 *	@param {Object} attrs		The desired end-state key-value attribute pairs
 *	@param {Object} old			Current/previous attributes (from previous VNode or element's prop cache)
 */
function diffAttributes(dom, attrs, old) {
	var name;

	// remove attributes no longer present on the vnode by setting them to undefined
	for (name in old) {
		if (!(attrs && attrs[name] != null) && old[name] != null) {
			setAccessor(dom, name, old[name], old[name] = undefined, isSvgMode);
		}
	}

	// add new & update changed attributes
	for (name in attrs) {
		if (name !== 'children' && name !== 'innerHTML' && (!(name in old) || attrs[name] !== (name === 'value' || name === 'checked' ? dom[name] : old[name]))) {
			setAccessor(dom, name, old[name], old[name] = attrs[name], isSvgMode);
		}
	}
}

/** Retains a pool of Components for re-use, keyed on component name.
 *	Note: since component names are not unique or even necessarily available, these are primarily a form of sharding.
 *	@private
 */
var components = {};

/** Reclaim a component for later re-use by the recycler. */
function collectComponent(component) {
	var name = component.constructor.name;
	(components[name] || (components[name] = [])).push(component);
}

/** Create a component. Normalizes differences between PFC's and classful Components. */
function createComponent(Ctor, props, context) {
	var list = components[Ctor.name],
	    inst;

	if (Ctor.prototype && Ctor.prototype.render) {
		inst = new Ctor(props, context);
		Component.call(inst, props, context);
	} else {
		inst = new Component(props, context);
		inst.constructor = Ctor;
		inst.render = doRender;
	}

	if (list) {
		for (var i = list.length; i--;) {
			if (list[i].constructor === Ctor) {
				inst.nextBase = list[i].nextBase;
				list.splice(i, 1);
				break;
			}
		}
	}
	return inst;
}

/** The `.render()` method for a PFC backing instance. */
function doRender(props, state, context) {
	return this.constructor(props, context);
}

/** Set a component's `props` (generally derived from JSX attributes).
 *	@param {Object} props
 *	@param {Object} [opts]
 *	@param {boolean} [opts.renderSync=false]	If `true` and {@link options.syncComponentUpdates} is `true`, triggers synchronous rendering.
 *	@param {boolean} [opts.render=true]			If `false`, no render will be triggered.
 */
function setComponentProps(component, props, opts, context, mountAll) {
	if (component._disable) return;
	component._disable = true;

	if (component.__ref = props.ref) delete props.ref;
	if (component.__key = props.key) delete props.key;

	if (!component.base || mountAll) {
		if (component.componentWillMount) component.componentWillMount();
	} else if (component.componentWillReceiveProps) {
		component.componentWillReceiveProps(props, context);
	}

	if (context && context !== component.context) {
		if (!component.prevContext) component.prevContext = component.context;
		component.context = context;
	}

	if (!component.prevProps) component.prevProps = component.props;
	component.props = props;

	component._disable = false;

	if (opts !== 0) {
		if (opts === 1 || options.syncComponentUpdates !== false || !component.base) {
			renderComponent(component, 1, mountAll);
		} else {
			enqueueRender(component);
		}
	}

	if (component.__ref) component.__ref(component);
}

/** Render a Component, triggering necessary lifecycle events and taking High-Order Components into account.
 *	@param {Component} component
 *	@param {Object} [opts]
 *	@param {boolean} [opts.build=false]		If `true`, component will build and store a DOM node if not already associated with one.
 *	@private
 */
function renderComponent(component, opts, mountAll, isChild) {
	if (component._disable) return;

	var props = component.props,
	    state = component.state,
	    context = component.context,
	    previousProps = component.prevProps || props,
	    previousState = component.prevState || state,
	    previousContext = component.prevContext || context,
	    isUpdate = component.base,
	    nextBase = component.nextBase,
	    initialBase = isUpdate || nextBase,
	    initialChildComponent = component._component,
	    skip = false,
	    rendered,
	    inst,
	    cbase;

	// if updating
	if (isUpdate) {
		component.props = previousProps;
		component.state = previousState;
		component.context = previousContext;
		if (opts !== 2 && component.shouldComponentUpdate && component.shouldComponentUpdate(props, state, context) === false) {
			skip = true;
		} else if (component.componentWillUpdate) {
			component.componentWillUpdate(props, state, context);
		}
		component.props = props;
		component.state = state;
		component.context = context;
	}

	component.prevProps = component.prevState = component.prevContext = component.nextBase = null;
	component._dirty = false;

	if (!skip) {
		rendered = component.render(props, state, context);

		// context to pass to the child, can be updated via (grand-)parent component
		if (component.getChildContext) {
			context = extend(extend({}, context), component.getChildContext());
		}

		var childComponent = rendered && rendered.nodeName,
		    toUnmount,
		    base;

		if (typeof childComponent === 'function') {
			// set up high order component link

			var childProps = getNodeProps(rendered);
			inst = initialChildComponent;

			if (inst && inst.constructor === childComponent && childProps.key == inst.__key) {
				setComponentProps(inst, childProps, 1, context, false);
			} else {
				toUnmount = inst;

				component._component = inst = createComponent(childComponent, childProps, context);
				inst.nextBase = inst.nextBase || nextBase;
				inst._parentComponent = component;
				setComponentProps(inst, childProps, 0, context, false);
				renderComponent(inst, 1, mountAll, true);
			}

			base = inst.base;
		} else {
			cbase = initialBase;

			// destroy high order component link
			toUnmount = initialChildComponent;
			if (toUnmount) {
				cbase = component._component = null;
			}

			if (initialBase || opts === 1) {
				if (cbase) cbase._component = null;
				base = diff(cbase, rendered, context, mountAll || !isUpdate, initialBase && initialBase.parentNode, true);
			}
		}

		if (initialBase && base !== initialBase && inst !== initialChildComponent) {
			var baseParent = initialBase.parentNode;
			if (baseParent && base !== baseParent) {
				baseParent.replaceChild(base, initialBase);

				if (!toUnmount) {
					initialBase._component = null;
					recollectNodeTree(initialBase, false);
				}
			}
		}

		if (toUnmount) {
			unmountComponent(toUnmount);
		}

		component.base = base;
		if (base && !isChild) {
			var componentRef = component,
			    t = component;
			while (t = t._parentComponent) {
				(componentRef = t).base = base;
			}
			base._component = componentRef;
			base._componentConstructor = componentRef.constructor;
		}
	}

	if (!isUpdate || mountAll) {
		mounts.unshift(component);
	} else if (!skip) {
		// Ensure that pending componentDidMount() hooks of child components
		// are called before the componentDidUpdate() hook in the parent.
		// Note: disabled as it causes duplicate hooks, see https://github.com/developit/preact/issues/750
		// flushMounts();

		if (component.componentDidUpdate) {
			component.componentDidUpdate(previousProps, previousState, previousContext);
		}
		if (options.afterUpdate) options.afterUpdate(component);
	}

	if (component._renderCallbacks != null) {
		while (component._renderCallbacks.length) {
			component._renderCallbacks.pop().call(component);
		}
	}

	if (!diffLevel && !isChild) flushMounts();
}

/** Apply the Component referenced by a VNode to the DOM.
 *	@param {Element} dom	The DOM node to mutate
 *	@param {VNode} vnode	A Component-referencing VNode
 *	@returns {Element} dom	The created/mutated element
 *	@private
 */
function buildComponentFromVNode(dom, vnode, context, mountAll) {
	var c = dom && dom._component,
	    originalComponent = c,
	    oldDom = dom,
	    isDirectOwner = c && dom._componentConstructor === vnode.nodeName,
	    isOwner = isDirectOwner,
	    props = getNodeProps(vnode);
	while (c && !isOwner && (c = c._parentComponent)) {
		isOwner = c.constructor === vnode.nodeName;
	}

	if (c && isOwner && (!mountAll || c._component)) {
		setComponentProps(c, props, 3, context, mountAll);
		dom = c.base;
	} else {
		if (originalComponent && !isDirectOwner) {
			unmountComponent(originalComponent);
			dom = oldDom = null;
		}

		c = createComponent(vnode.nodeName, props, context);
		if (dom && !c.nextBase) {
			c.nextBase = dom;
			// passing dom/oldDom as nextBase will recycle it if unused, so bypass recycling on L229:
			oldDom = null;
		}
		setComponentProps(c, props, 1, context, mountAll);
		dom = c.base;

		if (oldDom && dom !== oldDom) {
			oldDom._component = null;
			recollectNodeTree(oldDom, false);
		}
	}

	return dom;
}

/** Remove a component from the DOM and recycle it.
 *	@param {Component} component	The Component instance to unmount
 *	@private
 */
function unmountComponent(component) {
	if (options.beforeUnmount) options.beforeUnmount(component);

	var base = component.base;

	component._disable = true;

	if (component.componentWillUnmount) component.componentWillUnmount();

	component.base = null;

	// recursively tear down & recollect high-order component children:
	var inner = component._component;
	if (inner) {
		unmountComponent(inner);
	} else if (base) {
		if (base['__preactattr_'] && base['__preactattr_'].ref) base['__preactattr_'].ref(null);

		component.nextBase = base;

		removeNode(base);
		collectComponent(component);

		removeChildren(base);
	}

	if (component.__ref) component.__ref(null);
}

/** Base Component class.
 *	Provides `setState()` and `forceUpdate()`, which trigger rendering.
 *	@public
 *
 *	@example
 *	class MyFoo extends Component {
 *		render(props, state) {
 *			return <div />;
 *		}
 *	}
 */
function Component(props, context) {
	this._dirty = true;

	/** @public
  *	@type {object}
  */
	this.context = context;

	/** @public
  *	@type {object}
  */
	this.props = props;

	/** @public
  *	@type {object}
  */
	this.state = this.state || {};
}

extend(Component.prototype, {

	/** Returns a `boolean` indicating if the component should re-render when receiving the given `props` and `state`.
  *	@param {object} nextProps
  *	@param {object} nextState
  *	@param {object} nextContext
  *	@returns {Boolean} should the component re-render
  *	@name shouldComponentUpdate
  *	@function
  */

	/** Update component state by copying properties from `state` to `this.state`.
  *	@param {object} state		A hash of state properties to update with new values
  *	@param {function} callback	A function to be called once component state is updated
  */
	setState: function setState(state, callback) {
		var s = this.state;
		if (!this.prevState) this.prevState = extend({}, s);
		extend(s, typeof state === 'function' ? state(s, this.props) : state);
		if (callback) (this._renderCallbacks = this._renderCallbacks || []).push(callback);
		enqueueRender(this);
	},


	/** Immediately perform a synchronous re-render of the component.
  *	@param {function} callback		A function to be called after component is re-rendered.
  *	@private
  */
	forceUpdate: function forceUpdate(callback) {
		if (callback) (this._renderCallbacks = this._renderCallbacks || []).push(callback);
		renderComponent(this, 2);
	},


	/** Accepts `props` and `state`, and returns a new Virtual DOM tree to build.
  *	Virtual DOM is generally constructed via [JSX](http://jasonformat.com/wtf-is-jsx).
  *	@param {object} props		Props (eg: JSX attributes) received from parent element/component
  *	@param {object} state		The component's current state
  *	@param {object} context		Context object (if a parent component has provided context)
  *	@returns VNode
  */
	render: function render() {}
});

/** Render JSX into a `parent` Element.
 *	@param {VNode} vnode		A (JSX) VNode to render
 *	@param {Element} parent		DOM element to render into
 *	@param {Element} [merge]	Attempt to re-use an existing DOM tree rooted at `merge`
 *	@public
 *
 *	@example
 *	// render a div into <body>:
 *	render(<div id="hello">hello!</div>, document.body);
 *
 *	@example
 *	// render a "Thing" component into #foo:
 *	const Thing = ({ name }) => <span>{ name }</span>;
 *	render(<Thing name="one" />, document.querySelector('#foo'));
 */
function render(vnode, parent, merge) {
  return diff(merge, vnode, {}, false, parent, false);
}

var preact = {
	h: h,
	createElement: h,
	cloneElement: cloneElement,
	Component: Component,
	render: render,
	rerender: rerender,
	options: options
};

/* harmony default export */ __webpack_exports__["default"] = (preact);

//# sourceMappingURL=preact.esm.js.map


/***/ }),

/***/ "../node_modules/regenerator-runtime/runtime-module.js":
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g = (function() {
  return this || (typeof self === "object" && self);
})() || Function("return this")();

// Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.
var hadRuntime = g.regeneratorRuntime &&
  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

// Save the old regeneratorRuntime in case it needs to be restored later.
var oldRuntime = hadRuntime && g.regeneratorRuntime;

// Force reevalutation of runtime.js.
g.regeneratorRuntime = undefined;

module.exports = __webpack_require__("../node_modules/regenerator-runtime/runtime.js");

if (hadRuntime) {
  // Restore the original runtime.
  g.regeneratorRuntime = oldRuntime;
} else {
  // Remove the global property added by runtime.js.
  try {
    delete g.regeneratorRuntime;
  } catch(e) {
    g.regeneratorRuntime = undefined;
  }
}


/***/ }),

/***/ "../node_modules/regenerator-runtime/runtime.js":
/***/ (function(module, exports) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
  // In sloppy mode, unbound `this` refers to the global object, fallback to
  // Function constructor if we're in global strict mode. That is sadly a form
  // of indirect eval which violates Content Security Policy.
  (function() {
    return this || (typeof self === "object" && self);
  })() || Function("return this")()
);


/***/ }),

/***/ "../node_modules/relaks/async-rendering-interrupted.js":
/***/ (function(module, exports) {

function AsyncRenderingInterrupted() {
    this.message = 'Async rendering interrupted';
}

var prototype = Object.create(Error.prototype)
prototype.constructor = AsyncRenderingInterrupted;
prototype.constructor.prototype = prototype;

module.exports = prototype.constructor;


/***/ }),

/***/ "../node_modules/relaks/class.js":
/***/ (function(module, exports, __webpack_require__) {

var AsyncRenderingInterrupted = __webpack_require__("../node_modules/relaks/async-rendering-interrupted.js");
var Meanwhile = __webpack_require__("../node_modules/relaks/meanwhile.js");

module.exports = function(React) {

function RelaksComponent() {
}

var prototype = Object.create(React.Component.prototype);
prototype.constructor = RelaksComponent;
prototype.constructor.prototype = prototype;

/**
 * Render component, calling renderAsync() if necessary
 *
 * @return {ReactElement|null}
 */
prototype.render = function() {
    var relaks = this.relaks;
    if (!relaks) {
        console.warn('Relaks context is missing. Make sure you are calling componentWillMount() and componentWillUnmount() of the superclass');
        return null;
    }

    // see if rendering is triggered by resolution of a promise,
    // or by a call to Meanwhile.show()
    if (relaks.promisedElementExpected) {
        // render the new promised element
        relaks.promisedElementExpected = false;
        relaks.progressElement = null;
        relaks.progressElementRendered = null;
        return relaks.promisedElement;
    } else if (relaks.progressElementExpected) {
        // render the new progress element
        relaks.progressElementExpected = false;
        relaks.progressElementRendered = relaks.progressElement;
        return relaks.progressElement;
    }

    // normal rerendering--we need to call renderAsync()
    //
    // first cancel any unfinished rendering cycle
    var previously = relaks.meanwhile;
    if (previously) {
        relaks.meanwhile = null;
        // use a try block, in case user-supplied onCancel handler attached
        // to the meanwhile object throws
        try {
            previously.cancel();
        } catch (err) {
            console.error(err);
        }
    }

    relaks.previous = relaks.current;
    relaks.current = {
        props: this.props,
        state: this.state || {},
    };

    // create new meanwhile object
    var meanwhile = relaks.meanwhile = new Meanwhile(this, previously);

    // call user-defined renderAsync() in a try-catch block to catch potential errors
    try {
        var promise;
        if (this.renderAsync.length > 1) {
            promise = this.renderAsync(meanwhile, this.props, this.state, this.context);
        } else {
            promise = this.renderAsync(meanwhile);
        }

        // from here on, any call to Meanwhile.show() is asynchronous
        meanwhile.synchronous = false;
    } catch (err) {
        // a synchronouse error occurred, show any progress made or what was
        // there before
        console.error(err);
        relaks.meanwhile.clear();
        relaks.meanwhile = null;
        return relaks.progressElement || relaks.progressElementRendered || relaks.promisedElement;
    }

    if (isPromise(promise)) {
        // set up handlers for the promise returned
        var _this = this;
        var resolve = function(element) {
            if (meanwhile !== relaks.meanwhile) {
                // a new rendering cycle has started
                meanwhile.cancel();
            } else if (!_this.relaks) {
                // component has been unmounted
                meanwhile.cancel();
            } else {
                // tell render() to show the element
                meanwhile.finish();
                relaks.promisedElement = element;
                relaks.promisedElementExpected = true;
                relaks.meanwhile = null;
                _this.forceUpdate();
            }
        };
        var reject = function(err) {
            if (err instanceof AsyncRenderingInterrupted) {
                // the rendering cycle was interrupted--do nothing
            } else {
                // dump the error into the console and return what has been
                // rendered so far or what was there before
                console.error(err);
                var element = relaks.progressElement || relaks.promisedElement;
                resolve(element);
            }
        };
        promise.then(resolve, reject);
    } else {
        // allow renderAsync() to act synchronously
        var element = promise;
        relaks.meanwhile = null;
        relaks.promisedElement = element;
        relaks.progressElement = null;
        relaks.progressElementRendered = null;
    }

    // we have triggered the asynchronize operation and are waiting for it to
    // complete; in the meantime we need to return something
    if (relaks.promisedElement) {
        // show what was there before
        return relaks.promisedElement;
    }
    if (relaks.progressElement) {
        // a progress element was provided synchronously by renderAsync()
        // we'll display that if delay is set to 0
        if (meanwhile.showingProgress || meanwhile.showingProgressInitially) {
            return relaks.progressElement;
        }
    }
    if (relaks.progressElementRendered) {
        // show the previous progress
        return relaks.progressElementRendered;
    }
    // umm, we got nothing
    return null;
};

/**
 * Return false if the component's props and state haven't changed.
 *
 * @param  {Object} nextProps
 * @param  {Object} nextState
 *
 * @return {Boolean}
 */
prototype.shouldComponentUpdate = function(nextProps, nextState) {
    if (!compare(this.props, nextProps) || !compare(this.state, nextState)) {
        return true;
    }
    return false;
};

/**
 * Create Relaks context on mount.
 */
prototype.componentWillMount = function() {
    this.relaks = {
        progressElement: null,
        progressElementExpected: false,
        promisedElement: null,
        promisedElementExpected: false,
        progressElementRendered: null,
        meanwhile: null,
        previous: null,
        current: {
            props: {},
            state: {},
        },
    };
};

/**
 * Remove Relaks context on unmount, canceling any outstanding asynchronous
 * rendering cycle.
 */
prototype.componentWillUnmount = function() {
    var relaks = this.relaks;
    if (relaks) {
        if (relaks.meanwhile) {
            relaks.meanwhile.cancel();
        }
        this.relaks = undefined;
    }
};

return {
    Component: prototype.constructor,
    AsyncComponent: prototype.constructor,
    AsyncRenderingInterrupted: AsyncRenderingInterrupted,
    Meanwhile: Meanwhile,
};
};

/**
 * Return true if the given object is a promise
 *
 * @param  {Object} object
 *
 * @return Boolean
 */
function isPromise(object) {
    if (object && typeof(object.then) === 'function') {
        return true;
    }
    return false;
}

/**
 * Compare two objects shallowly
 *
 * @param  {Object} prevSet
 * @param  {Object} nextSet
 *
 * @return {Boolean}
 */
function compare(prevSet, nextSet) {
    if (prevSet === nextSet) {
        return true;
    }
    if (!prevSet || !nextSet) {
        return false;
    }
    for (var key in nextSet) {
        var prev = prevSet[key];
        var next = nextSet[key];
        if (next !== prev) {
            return false;
        }
    }
    return true;
}


/***/ }),

/***/ "../node_modules/relaks/meanwhile.js":
/***/ (function(module, exports, __webpack_require__) {

var AsyncRenderingInterrupted = __webpack_require__("../node_modules/relaks/async-rendering-interrupted.js");

function Meanwhile(component, previously) {
    var relaks = component.relaks;
    this.component = component;
    this.synchronous = true;
    this.showingProgress = false;
    this.showingProgressInitially = false;
    this.delayWhenEmpty = 50;
    this.delayWhenRendered = Infinity;
    this.canceled = false;
    this.prior = (previously) ? previously.prior : relaks.previous;
    this.previous = relaks.previous;
    this.current = relaks.current;
    this.updateTimeout = 0;
    this.startTime = getTime();
    this.onCancel = null;
    this.onComplete = null;
    this.onProgress = null;
}

var prototype = Meanwhile.prototype;

/**
 * Check if the rendering cycle has been superceded by a new one. If so
 * throw an exception to end it. Ensure component is mounted as well.
 */
prototype.check = function() {
    var relaks = this.component.relaks;
    if (!relaks || this !== relaks.meanwhile) {
        // throw exception to break promise chain
        // promise library should catch and pass it to reject()
        // defined down below
        throw new AsyncRenderingInterrupted;
    }
}

/**
 * Show progress element, possibly after a delay
 *
 * @param  {ReactElement} element
 * @param  {String|undefined} disposition
 *
 * @return {Boolean}
 */
prototype.show = function(element, disposition) {
    var relaks = this.component.relaks;

    // make sure the rendering cycle is still current
    this.check();

    // save the element so render() can return it eventually
    relaks.progressElement = element;

    if (this.showingProgress) {
        // see if we're showing progress already, show the new progress immediately
        this.update();
        return true;
    } else {
        if (disposition === 'always') {
            this.update(true);
            return true;
        } else if (disposition === 'initial') {
            if (!relaks.promisedElement && !relaks.progressElementRendered) {
                this.update(true);
                return true;
            }
        }
        if (this.updateTimeout) {
            // we've already schedule the displaying of progress
            // just wait for the initial timeout to fire
            return false;
        }

        var delay;
        if (!relaks.promisedElement) {
            delay = this.delayWhenEmpty;
        } else {
            delay = this.delayWhenRendered;
        }
        if (delay > 0) {
            if (delay !== Infinity) {
                // show progress after a brief delay, to allow
                // it to be bypassed by fast-resolving promises
                var _this = this;
                this.updateTimeout = setTimeout(function() {
                    // if the timeout is 0, then clearTimeout() was called on it
                    // this function might still run on occasion afterward, due to
                    // the way timeouts are scheduled
                    if (_this.updateTimeout !== 0) {
                        _this.update();
                    }
                }, delay);
            }
            return false;
        } else {
            // caller wants it to be shown immediately
            this.update();
            return true;
        }
    }
};

/**
 * Return true if the component has previously been fully rendered
 *
 * @return {Boolean}
 */
prototype.revising = function() {
    var relaks = this.component.relaks;
    return !!relaks.promisedElement;
};

/**
 * Set progressive rendering delay, for when the component is empty and when
 * it has been fully rendered previously
 *
 * @param  {Number} empty
 * @param  {Number} rendered
 */
prototype.delay = function(empty, rendered) {
    if (typeof(empty) === 'number') {
        this.delayWhenEmpty = empty;
    }
    if (typeof(rendered) === 'number') {
        this.delayWhenRendered = rendered;
    }
};

/**
 * Rendering the progress element now
 *
 * @param  {Boolean|undefined} force
 */
prototype.update = function(forced) {
    var relaks = this.component.relaks;

    // indicate that the component is displaying progress
    // unless we're forcing the progress display
    if (!forced) {
        this.showingProgress = true;
    }

    // toss the result of the previous rendering cycle
    if (relaks.promisedElement) {
        relaks.promisedElement = null;
    }

    if (this.synchronous) {
        // no need to force update since we're still inside
        // render() and it can simply return the progress element
        if (forced) {
            this.showingProgressInitially = true;
        }
        return;
    }

    if (this.onProgress) {
        var elapsed = getTime() - this.startTime;
        this.onProgress({ type: 'progress', target: this, elapsed: elapsed });
    }

    if (relaks.progressElement === relaks.progressElementRendered) {
        // it's already rendered
        return;
    }

    // tell render() that it isn't triggered in the normal fashion
    relaks.progressElementExpected = true;
    this.component.forceUpdate();
};

/**
 * Cancel the rendering of progress and fire any onCancel handler
 */
prototype.cancel = function() {
    this.clear();
    if (!this.canceled) {
        this.canceled = true;
        if (this.onCancel) {
            this.onCancel({ type: 'cancel', target: this });
        }
    }
};

/**
 * Clear timeout function and fire any onComplete handler
 */
prototype.finish = function() {
    this.clear();
    if (this.onComplete) {
        var elapsed = getTime() - this.startTime;
        this.onComplete({ type: 'complete', target: this, elapsed: elapsed });
    }
};

/**
 * Cancel the any scheduled rendering of progress
 */
prototype.clear = function() {
    var relaks = this.component.relaks;
    if (this.updateTimeout) {
        clearTimeout(this.updateTimeout);
        this.updateTimeout = 0;
    }
};

var scriptStartTime = new Date;

/**
 * Return the number of milliseconds passed since start of this script
 *
 * @return {Number}
 */
function getTime() {
    return (new Date) - scriptStartTime;
}

module.exports = prototype.constructor;


/***/ }),

/***/ "../node_modules/relaks/preact.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../node_modules/relaks/class.js")(__webpack_require__("../node_modules/preact/dist/preact.esm.js"));


/***/ }),

/***/ "./application.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Application = exports.default = undefined;

var _getPrototypeOf = __webpack_require__("../node_modules/babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__("../node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("../node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__("../node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("../node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _preact = __webpack_require__("../node_modules/preact/dist/preact.esm.js");

var _swapi = __webpack_require__("./swapi.js");

var _swapi2 = _interopRequireDefault(_swapi);

var _routes = __webpack_require__("./routes.js");

var _navBar = __webpack_require__("./widgets/nav-bar.jsx");

var _navBar2 = _interopRequireDefault(_navBar);

__webpack_require__("../node_modules/relaks/preact.js");

__webpack_require__("./style.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** @jsx h */

var Application = function (_Component) {
    (0, _inherits3.default)(Application, _Component);

    function Application(props) {
        (0, _classCallCheck3.default)(this, Application);

        var _this = (0, _possibleConstructorReturn3.default)(this, (Application.__proto__ || (0, _getPrototypeOf2.default)(Application)).call(this, props));

        _this.handleDataSourceChange = function (evt) {
            _this.setState({ swapi: new _swapi2.default(evt.target) });
        };

        _this.handleRouteChange = function (evt) {
            _this.setState({ route: new _routes.Route(evt.target) });
        };

        var _this$props = _this.props,
            routeManager = _this$props.routeManager,
            dataSource = _this$props.dataSource;

        _this.state = {
            route: new _routes.Route(routeManager),
            swapi: new _swapi2.default(dataSource, props.ssr)
        };
        return _this;
    }

    /**
     * Render the application
     *
     * @return {VNode}
     */


    (0, _createClass3.default)(Application, [{
        key: 'render',
        value: function render() {
            var _state = this.state,
                route = _state.route,
                swapi = _state.swapi;

            var module = route.params.module;
            var page = void 0;
            if (module) {
                var _Component2 = module.default;
                var props = { route: route, swapi: swapi };
                page = (0, _preact.h)(_Component2, props);
            }
            return (0, _preact.h)(
                'div',
                null,
                (0, _preact.h)(_navBar2.default, { route: route }),
                (0, _preact.h)(
                    'div',
                    { className: 'contents' },
                    page
                )
            );
        }

        /**
         * Added change handlers when component mounts
         */

    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _props = this.props,
                routeManager = _props.routeManager,
                dataSource = _props.dataSource;

            routeManager.addEventListener('change', this.handleRouteChange);
            dataSource.addEventListener('change', this.handleDataSourceChange);

            var body = document.body;
            body.className = body.className.replace(/\s*ssr/, '');
        }

        /**
         * Remove change handlers when component mounts
         */

    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            var _props2 = this.props,
                routeManager = _props2.routeManager,
                dataSource = _props2.dataSource;

            routeManager.removeEventListener('change', this.handleRouteChange);
            dataSource.removeEventListener('change', this.handleDataSourceChange);
        }

        /**
         * Called when the data source changes
         *
         * @param  {RelaksDjangoDataSourceEvent} evt
         */


        /**
         * Called when the route changes
         *
         * @param  {RelaksRouteManagerEvent} evt
         */

    }]);
    return Application;
}(_preact.Component);

Application.displayName = 'Application';
exports.default = Application;
exports.Application = Application;

/***/ }),

/***/ "./main.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _regenerator = __webpack_require__("../node_modules/babel-runtime/regenerator/index.js");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__("../node_modules/babel-runtime/helpers/asyncToGenerator.js");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _typeof2 = __webpack_require__("../node_modules/babel-runtime/helpers/typeof.js");

var _typeof3 = _interopRequireDefault(_typeof2);

__webpack_require__("../node_modules/preact/devtools.js");

var _preact = __webpack_require__("../node_modules/preact/dist/preact.esm.js");

var _application = __webpack_require__("./application.jsx");

var _routes = __webpack_require__("./routes.js");

var _relaksDjangoDataSource = __webpack_require__("../../relaks-django-data-source/index.js");

var _relaksDjangoDataSource2 = _interopRequireDefault(_relaksDjangoDataSource);

var _relaksRouteManager = __webpack_require__("../../relaks-route-manager/index.js");

var _relaksRouteManager2 = _interopRequireDefault(_relaksRouteManager);

var _preact2 = __webpack_require__("../../relaks-harvest/preact.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var dataSourceBaseURL = '/starwars/api';
var pageBasePath = '/starwars';

if ((typeof window === 'undefined' ? 'undefined' : (0, _typeof3.default)(window)) === 'object') {
    var initialize = function () {
        var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(evt) {
            var dataSource, routeManager, appContainer, appElement;
            return _regenerator2.default.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            // create data source
                            dataSource = new _relaksDjangoDataSource2.default({
                                baseURL: dataSourceBaseURL
                            });
                            _context.next = 3;
                            return dataSource.initialize();

                        case 3:

                            // create route manager
                            routeManager = new _relaksRouteManager2.default({
                                routes: _routes.routes,
                                basePath: pageBasePath
                            });
                            _context.next = 6;
                            return routeManager.initialize();

                        case 6:
                            appContainer = document.getElementById('app-container');

                            if (appContainer) {
                                _context.next = 9;
                                break;
                            }

                            throw new Error('Unable to find app element in DOM');

                        case 9:
                            appElement = (0, _preact.h)(_application.Application, { dataSource: dataSource, routeManager: routeManager });
                            _context.next = 12;
                            return (0, _preact2.harvest)(appElement);

                        case 12:
                            (0, _preact.render)(appElement, appContainer, appContainer.firstChild);

                        case 13:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, this);
        }));

        return function initialize(_x) {
            return _ref.apply(this, arguments);
        };
    }();

    window.addEventListener('load', initialize);
} else {
    var serverSideRender = function () {
        var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(options) {
            var dataSource, routeManager, appElement;
            return _regenerator2.default.wrap(function _callee2$(_context2) {
                while (1) {
                    switch (_context2.prev = _context2.next) {
                        case 0:
                            dataSource = new _relaksDjangoDataSource2.default({
                                baseURL: '' + options.host + dataSourceBaseURL
                            });
                            _context2.next = 3;
                            return dataSource.initialize();

                        case 3:
                            routeManager = new _relaksRouteManager2.default({
                                routes: _routes.routes,
                                basePath: pageBasePath,
                                initialPath: options.path
                            });
                            _context2.next = 6;
                            return routeManager.initialize();

                        case 6:
                            appElement = (0, _preact.h)(_application.Application, { dataSource: dataSource, routeManager: routeManager, ssr: options.target });
                            return _context2.abrupt('return', (0, _preact2.harvest)(appElement));

                        case 8:
                        case 'end':
                            return _context2.stop();
                    }
                }
            }, _callee2, this);
        }));

        return function serverSideRender(_x2) {
            return _ref2.apply(this, arguments);
        };
    }();

    exports.render = serverSideRender;
}

/***/ }),

/***/ "./routes.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.routes = exports.Route = undefined;

var _regenerator = __webpack_require__("../node_modules/babel-runtime/regenerator/index.js");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__("../node_modules/babel-runtime/helpers/asyncToGenerator.js");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _classCallCheck2 = __webpack_require__("../node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("../node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Route = function () {
    function Route(routeManager) {
        (0, _classCallCheck3.default)(this, Route);

        this.routeManager = routeManager;
        this.name = routeManager.name;
        this.params = routeManager.params;
        this.history = routeManager.history;
    }

    (0, _createClass3.default)(Route, [{
        key: 'change',
        value: function change(url, options) {
            return this.routeManager.change(url, options);
        }
    }, {
        key: 'find',
        value: function find(name, params) {
            return this.routeManager.find(name, params);
        }
    }, {
        key: 'extractID',
        value: function extractID(url) {
            var si = url.lastIndexOf('/');
            var ei;
            if (si === url.length - 1) {
                ei = si;
                si = url.lastIndexOf('/', ei - 1);
            }
            var text = url.substring(si + 1, ei);
            return parseInt(text);
        }
    }]);
    return Route;
}();

var routes = {
    'welcome': {
        path: '/',
        load: function () {
            var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(params) {
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return __webpack_require__.e/* import() */("welcome-page").then(__webpack_require__.bind(null, "./pages/welcome-page.jsx"));

                            case 2:
                                params.module = _context.sent;

                            case 3:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, undefined);
            }));

            return function load(_x) {
                return _ref.apply(this, arguments);
            };
        }()
    },
    'film-list': {
        path: '/films/',
        load: function () {
            var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(params) {
                return _regenerator2.default.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                _context2.next = 2;
                                return __webpack_require__.e/* import() */("film-list").then(__webpack_require__.bind(null, "./pages/film-list.jsx"));

                            case 2:
                                params.module = _context2.sent;

                            case 3:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, undefined);
            }));

            return function load(_x2) {
                return _ref2.apply(this, arguments);
            };
        }()
    },
    'film-summary': {
        path: '/films/${id}/',
        params: { id: Number },
        load: function () {
            var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(params) {
                return _regenerator2.default.wrap(function _callee3$(_context3) {
                    while (1) {
                        switch (_context3.prev = _context3.next) {
                            case 0:
                                _context3.next = 2;
                                return __webpack_require__.e/* import() */("film-page").then(__webpack_require__.bind(null, "./pages/film-page.jsx"));

                            case 2:
                                params.module = _context3.sent;

                            case 3:
                            case 'end':
                                return _context3.stop();
                        }
                    }
                }, _callee3, undefined);
            }));

            return function load(_x3) {
                return _ref3.apply(this, arguments);
            };
        }()
    },
    'character-list': {
        path: '/characters/',
        load: function () {
            var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4(params) {
                return _regenerator2.default.wrap(function _callee4$(_context4) {
                    while (1) {
                        switch (_context4.prev = _context4.next) {
                            case 0:
                                _context4.next = 2;
                                return __webpack_require__.e/* import() */("character-list").then(__webpack_require__.bind(null, "./pages/character-list.jsx"));

                            case 2:
                                params.module = _context4.sent;

                            case 3:
                            case 'end':
                                return _context4.stop();
                        }
                    }
                }, _callee4, undefined);
            }));

            return function load(_x4) {
                return _ref4.apply(this, arguments);
            };
        }()
    },
    'character-summary': {
        path: '/characters/${id}/',
        params: { id: Number },
        load: function () {
            var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5(params) {
                return _regenerator2.default.wrap(function _callee5$(_context5) {
                    while (1) {
                        switch (_context5.prev = _context5.next) {
                            case 0:
                                _context5.next = 2;
                                return __webpack_require__.e/* import() */("character-page").then(__webpack_require__.bind(null, "./pages/character-page.jsx"));

                            case 2:
                                params.module = _context5.sent;

                            case 3:
                            case 'end':
                                return _context5.stop();
                        }
                    }
                }, _callee5, undefined);
            }));

            return function load(_x5) {
                return _ref5.apply(this, arguments);
            };
        }()
    },
    'planet-list': {
        path: '/planets/',
        load: function () {
            var _ref6 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee6(params) {
                return _regenerator2.default.wrap(function _callee6$(_context6) {
                    while (1) {
                        switch (_context6.prev = _context6.next) {
                            case 0:
                                _context6.next = 2;
                                return __webpack_require__.e/* import() */("planet-list").then(__webpack_require__.bind(null, "./pages/planet-list.jsx"));

                            case 2:
                                params.module = _context6.sent;

                            case 3:
                            case 'end':
                                return _context6.stop();
                        }
                    }
                }, _callee6, undefined);
            }));

            return function load(_x6) {
                return _ref6.apply(this, arguments);
            };
        }()
    },
    'planet-summary': {
        path: '/planets/${id}/',
        params: { id: Number },
        load: function () {
            var _ref7 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee7(params) {
                return _regenerator2.default.wrap(function _callee7$(_context7) {
                    while (1) {
                        switch (_context7.prev = _context7.next) {
                            case 0:
                                _context7.next = 2;
                                return __webpack_require__.e/* import() */("planet-page").then(__webpack_require__.bind(null, "./pages/planet-page.jsx"));

                            case 2:
                                params.module = _context7.sent;

                            case 3:
                            case 'end':
                                return _context7.stop();
                        }
                    }
                }, _callee7, undefined);
            }));

            return function load(_x7) {
                return _ref7.apply(this, arguments);
            };
        }()
    },
    'species-list': {
        path: '/species/',
        load: function () {
            var _ref8 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee8(params) {
                return _regenerator2.default.wrap(function _callee8$(_context8) {
                    while (1) {
                        switch (_context8.prev = _context8.next) {
                            case 0:
                                _context8.next = 2;
                                return __webpack_require__.e/* import() */("species-list").then(__webpack_require__.bind(null, "./pages/species-list.jsx"));

                            case 2:
                                params.module = _context8.sent;

                            case 3:
                            case 'end':
                                return _context8.stop();
                        }
                    }
                }, _callee8, undefined);
            }));

            return function load(_x8) {
                return _ref8.apply(this, arguments);
            };
        }()
    },
    'species-summary': {
        path: '/species/${id}/',
        params: { id: Number },
        load: function () {
            var _ref9 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee9(params) {
                return _regenerator2.default.wrap(function _callee9$(_context9) {
                    while (1) {
                        switch (_context9.prev = _context9.next) {
                            case 0:
                                _context9.next = 2;
                                return __webpack_require__.e/* import() */("species-page").then(__webpack_require__.bind(null, "./pages/species-page.jsx"));

                            case 2:
                                params.module = _context9.sent;

                            case 3:
                            case 'end':
                                return _context9.stop();
                        }
                    }
                }, _callee9, undefined);
            }));

            return function load(_x9) {
                return _ref9.apply(this, arguments);
            };
        }()
    },
    'vehicle-list': {
        path: '/vehicles/',
        load: function () {
            var _ref10 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee10(params) {
                return _regenerator2.default.wrap(function _callee10$(_context10) {
                    while (1) {
                        switch (_context10.prev = _context10.next) {
                            case 0:
                                _context10.next = 2;
                                return __webpack_require__.e/* import() */("vehicle-list").then(__webpack_require__.bind(null, "./pages/vehicle-list.jsx"));

                            case 2:
                                params.module = _context10.sent;

                            case 3:
                            case 'end':
                                return _context10.stop();
                        }
                    }
                }, _callee10, undefined);
            }));

            return function load(_x10) {
                return _ref10.apply(this, arguments);
            };
        }()
    },
    'vehicle-summary': {
        path: '/vehicles/${id}/',
        params: { id: Number },
        load: function () {
            var _ref11 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee11(params) {
                return _regenerator2.default.wrap(function _callee11$(_context11) {
                    while (1) {
                        switch (_context11.prev = _context11.next) {
                            case 0:
                                _context11.next = 2;
                                return __webpack_require__.e/* import() */("vehicle-page").then(__webpack_require__.bind(null, "./pages/vehicle-page.jsx"));

                            case 2:
                                params.module = _context11.sent;

                            case 3:
                            case 'end':
                                return _context11.stop();
                        }
                    }
                }, _callee11, undefined);
            }));

            return function load(_x11) {
                return _ref11.apply(this, arguments);
            };
        }()
    },
    'starship-list': {
        path: '/starships/',
        load: function () {
            var _ref12 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee12(params) {
                return _regenerator2.default.wrap(function _callee12$(_context12) {
                    while (1) {
                        switch (_context12.prev = _context12.next) {
                            case 0:
                                _context12.next = 2;
                                return __webpack_require__.e/* import() */("starship-list").then(__webpack_require__.bind(null, "./pages/starship-list.jsx"));

                            case 2:
                                params.module = _context12.sent;

                            case 3:
                            case 'end':
                                return _context12.stop();
                        }
                    }
                }, _callee12, undefined);
            }));

            return function load(_x12) {
                return _ref12.apply(this, arguments);
            };
        }()
    },
    'starship-summary': {
        path: '/starship/${id}/',
        params: { id: Number },
        load: function () {
            var _ref13 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee13(params) {
                return _regenerator2.default.wrap(function _callee13$(_context13) {
                    while (1) {
                        switch (_context13.prev = _context13.next) {
                            case 0:
                                _context13.next = 2;
                                return __webpack_require__.e/* import() */("starship-page").then(__webpack_require__.bind(null, "./pages/starship-page.jsx"));

                            case 2:
                                params.module = _context13.sent;

                            case 3:
                            case 'end':
                                return _context13.stop();
                        }
                    }
                }, _callee13, undefined);
            }));

            return function load(_x13) {
                return _ref13.apply(this, arguments);
            };
        }()
    }
};

exports.Route = Route;
exports.routes = routes;

/***/ }),

/***/ "./style.scss":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./swapi.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SWAPI = exports.default = undefined;

var _assign = __webpack_require__("../node_modules/babel-runtime/core-js/object/assign.js");

var _assign2 = _interopRequireDefault(_assign);

var _classCallCheck2 = __webpack_require__("../node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("../node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SWAPI = function () {
    /**
     * Remember the data source
     */
    function SWAPI(dataSource, ssr) {
        (0, _classCallCheck3.default)(this, SWAPI);

        this.dataSource = dataSource;
        this.ssr = ssr;
    }

    /**
     * Fetch one object from data source
     *
     * @param  {String} url
     * @param  {Object} options
     *
     * @return {Promise<Object>}
     */


    (0, _createClass3.default)(SWAPI, [{
        key: 'fetchOne',
        value: function fetchOne(url, options) {
            return this.dataSource.fetchOne(url, options);
        }

        /**
         * Fetch a list of objects from data source
         *
         * @param  {String} url
         * @param  {Object} options
         *
         * @return {Promise<Array>}
         */

    }, {
        key: 'fetchList',
        value: function fetchList(url, options) {
            if (this.ssr === 'seo') {
                options = (0, _assign2.default)({}, options, { minimum: '100%' });
            }
            return this.dataSource.fetchList(url, options);
        }

        /**
         * Fetch multiple objects from data source
         *
         * @param  {Array<String>} urls
         * @param  {Object} options
         *
         * @return {Promise<Array>}
         */

    }, {
        key: 'fetchMultiple',
        value: function fetchMultiple(urls, options) {
            if (this.ssr === 'seo') {
                options = (0, _assign2.default)({}, options, { minimum: '100%' });
            }
            return this.dataSource.fetchMultiple(urls, options);
        }
    }]);
    return SWAPI;
}();

exports.default = SWAPI;
exports.SWAPI = SWAPI;

/***/ }),

/***/ "./widgets/nav-bar.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.NavBar = exports.default = undefined;

var _preact = __webpack_require__("../node_modules/preact/dist/preact.esm.js");

/** @jsx h */

function NavBar(props) {
    var route = props.route;

    return (0, _preact.h)(
        "div",
        { className: "nav-bar" },
        (0, _preact.h)(
            Button,
            { pageName: "welcome", route: route },
            (0, _preact.h)("i", { className: "fab fa-empire" })
        ),
        (0, _preact.h)(
            Button,
            { pageName: "film-list", route: route },
            "Films"
        ),
        (0, _preact.h)(
            Button,
            { pageName: "character-list", route: route },
            "Characters"
        ),
        (0, _preact.h)(
            Button,
            { pageName: "planet-list", route: route },
            "Planets"
        ),
        (0, _preact.h)(
            Button,
            { pageName: "species-list", route: route },
            "Species"
        ),
        (0, _preact.h)(
            Button,
            { pageName: "vehicle-list", route: route },
            "Vehicles"
        ),
        (0, _preact.h)(
            Button,
            { pageName: "starship-list", route: route },
            "Starships"
        )
    );
}

NavBar.displayName = 'NavBar';

function Button(props) {
    var route = props.route;

    var linkProps = {
        className: 'button',
        href: route.find(props.pageName)
    };
    return (0, _preact.h)(
        "a",
        linkProps,
        props.children
    );
}

Button.displayName = 'Button';

exports.default = NavBar;
exports.NavBar = NavBar;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYWViNjc2ZDc4YWE1ZTUzODBmNDIiLCJ3ZWJwYWNrOi8vLy9ob21lL2NsZW9uZy9yZWxha3MtZGphbmdvLWRhdGEtc291cmNlL2luZGV4LmpzIiwid2VicGFjazovLy8vaG9tZS9jbGVvbmcvcmVsYWtzLWhhcnZlc3QvZnVuY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy9ob21lL2NsZW9uZy9yZWxha3MtaGFydmVzdC9tZWFud2hpbGUuanMiLCJ3ZWJwYWNrOi8vLy9ob21lL2NsZW9uZy9yZWxha3MtaGFydmVzdC9wcmVhY3QuanMiLCJ3ZWJwYWNrOi8vLy9ob21lL2NsZW9uZy9yZWxha3Mtcm91dGUtbWFuYWdlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9qc29uL3N0cmluZ2lmeS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvYXNzaWduLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2RlZmluZS1wcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvZ2V0LXByb3RvdHlwZS1vZi5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3Qvc2V0LXByb3RvdHlwZS1vZi5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9wcm9taXNlLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL3N5bWJvbC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9zeW1ib2wvaXRlcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2hlbHBlcnMvYXN5bmNUb0dlbmVyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjay5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcy5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvaGVscGVycy9pbmhlcml0cy5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvaGVscGVycy9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvcmVnZW5lcmF0b3IvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vanNvbi9zdHJpbmdpZnkuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2Fzc2lnbi5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvY3JlYXRlLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9kZWZpbmUtcHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2dldC1wcm90b3R5cGUtb2YuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L3NldC1wcm90b3R5cGUtb2YuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vcHJvbWlzZS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9zeW1ib2wvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vc3ltYm9sL2l0ZXJhdG9yLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2EtZnVuY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYWRkLXRvLXVuc2NvcGFibGVzLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FuLWluc3RhbmNlLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FuLW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hcnJheS1pbmNsdWRlcy5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jbGFzc29mLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NvZi5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jb3JlLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2N0eC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kZWZpbmVkLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2Rlc2NyaXB0b3JzLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2RvbS1jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZW51bS1idWcta2V5cy5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19lbnVtLWtleXMuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZXhwb3J0LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2ZhaWxzLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2Zvci1vZi5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faGFzLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2hpZGUuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faHRtbC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pZTgtZG9tLWRlZmluZS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pbnZva2UuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pcy1hcnJheS1pdGVyLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lzLWFycmF5LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lzLW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWNhbGwuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1kZWZpbmUuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1kZXRlY3QuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1zdGVwLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXJhdG9ycy5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19saWJyYXJ5LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX21ldGEuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fbWljcm90YXNrLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX25ldy1wcm9taXNlLWNhcGFiaWxpdHkuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWFzc2lnbi5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtY3JlYXRlLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1kcC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZHBzLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1nb3BkLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1nb3BuLWV4dC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ29wbi5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ29wcy5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ3BvLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1rZXlzLWludGVybmFsLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1rZXlzLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1waWUuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LXNhcC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19wZXJmb3JtLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3Byb21pc2UtcmVzb2x2ZS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19wcm9wZXJ0eS1kZXNjLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3JlZGVmaW5lLWFsbC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19yZWRlZmluZS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zZXQtcHJvdG8uanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2V0LXNwZWNpZXMuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2V0LXRvLXN0cmluZy10YWcuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2hhcmVkLWtleS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zaGFyZWQuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc3BlY2llcy1jb25zdHJ1Y3Rvci5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zdHJpbmctYXQuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdGFzay5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1hYnNvbHV0ZS1pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1pbnRlZ2VyLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWlvYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tbGVuZ3RoLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1wcmltaXRpdmUuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdWlkLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3VzZXItYWdlbnQuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fd2tzLWRlZmluZS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL193a3MtZXh0LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3drcy5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2NvcmUuZ2V0LWl0ZXJhdG9yLW1ldGhvZC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5hcnJheS5pdGVyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QuYXNzaWduLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmRlZmluZS1wcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QuZ2V0LXByb3RvdHlwZS1vZi5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3Quc2V0LXByb3RvdHlwZS1vZi5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5wcm9taXNlLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5zeW1ib2wuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczcucHJvbWlzZS5maW5hbGx5LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM3LnByb21pc2UudHJ5LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM3LnN5bWJvbC5hc3luYy1pdGVyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNy5zeW1ib2wub2JzZXJ2YWJsZS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL3dlYi5kb20uaXRlcmFibGUuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9wcmVhY3QvZGV2dG9vbHMuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9wcmVhY3QvZGlzdC9wcmVhY3QuZXNtLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvcmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lLW1vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3JlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3JlbGFrcy9hc3luYy1yZW5kZXJpbmctaW50ZXJydXB0ZWQuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9yZWxha3MvY2xhc3MuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9yZWxha3MvbWVhbndoaWxlLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvcmVsYWtzL3ByZWFjdC5qcyIsIndlYnBhY2s6Ly8vLi9hcHBsaWNhdGlvbi5qc3giLCJ3ZWJwYWNrOi8vLy4vbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9yb3V0ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9zd2FwaS5qcyIsIndlYnBhY2s6Ly8vLi93aWRnZXRzL25hdi1iYXIuanN4Il0sIm5hbWVzIjpbImRlZmF1bHRPcHRpb25zIiwiYmFzZVVSTCIsInJlZnJlc2hJbnRlcnZhbCIsImF1dGhvcml6YXRpb25LZXl3b3JkIiwiYWJicmV2aWF0ZWRGb2xkZXJDb250ZW50cyIsIlJlbGFrc0RqYW5nb0RhdGFTb3VyY2UiLCJvcHRpb25zIiwibGlzdGVuZXJzIiwicXVlcmllcyIsImF1dGhlbnRpY2F0aW9ucyIsImF1dGhvcml6YXRpb25zIiwibmFtZSIsInVuZGVmaW5lZCIsInByb3RvdHlwZSIsImluaXRpYWxpemUiLCJzdGFydEV4cGlyYXRpb25DaGVjayIsInNodXRkb3duIiwic3RvcEV4cGlyYXRpb25DaGVjayIsImFkZEV2ZW50TGlzdGVuZXIiLCJ0eXBlIiwiaGFuZGxlciIsInB1c2giLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZmlsdGVyIiwibGlzdGVuZXIiLCJ0cmlnZ2VyRXZlbnQiLCJldnQiLCJmaXJlZCIsImZvckVhY2giLCJyZXNvbHZlVVJMIiwidXJsIiwidGVzdCIsInJlbW92ZVRyYWlsaW5nU2xhc2giLCJhZGRMZWFkaW5nU2xhc2giLCJyZXNvbHZlVVJMcyIsInVybHMiLCJfdGhpcyIsIm1hcCIsImZldGNoT25lIiwiYWJzVVJMIiwicHJvcHMiLCJxdWVyeSIsImZpbmRRdWVyeSIsImRlcml2ZVF1ZXJ5IiwicHJvbWlzZSIsImdldCIsInRoZW4iLCJyZXNwb25zZSIsIm9iamVjdCIsInVwZGF0ZVF1ZXJ5IiwicmV0cmlldmFsVGltZSIsImdldFRpbWUiLCJhZGRRdWVyeSIsImRpcnR5IiwicmVmcmVzaE9uZSIsImZldGNoUGFnZSIsInBhZ2UiLCJwYWdlVVJMIiwiYXR0YWNoUGFnZU51bWJlciIsIm9iamVjdHMiLCJyZXN1bHRzIiwicmVmcmVzaFBhZ2UiLCJmZXRjaExpc3QiLCJmZXRjaE5leHRQYWdlIiwicmVmcmVzaExpc3QiLCJmZXRjaE5vTW9yZSIsImluaXRpYWwiLCJuZXh0UHJvbWlzZSIsIm5leHRVUkwiLCJBcnJheSIsIm1vcmUiLCJiaW5kIiwidG90YWwiLCJsZW5ndGgiLCJPYmplY3QiLCJjb3VudCIsImFwcGVuZE9iamVjdHMiLCJuZXh0IiwibmV4dFBhZ2UiLCJtaW5pbXVtIiwiZ2V0TWluaW11bSIsIk5hTiIsIlJlbGFrc0RqYW5nb0RhdGFTb3VyY2VFdmVudCIsImNhdGNoIiwiZXJyIiwiZmV0Y2hNdWx0aXBsZSIsImNhY2hlZCIsImZldGNoT3B0aW9ucyIsInByb21pc2VzIiwiY29tcGxldGVMaXN0UHJvbWlzZSIsImFsbCIsIkZ1bmN0aW9uIiwicmVmcmVzaGluZyIsImNvbnNvbGUiLCJsb2ciLCJjaGFuZ2VkIiwibWF0Y2hPYmplY3QiLCJyZXNvbHZlIiwicmVwbGFjZUlkZW50aWZpY2FsT2JqZWN0cyIsIndhaXRGb3JOZXh0UGFnZSIsIm9sZE9iamVjdHMiLCJtb3JlUHJvbWlzZSIsIm1vcmVSZXNvbHZlIiwibW9yZVJlamVjdCIsImZldGNoTW9yZUFmdGVyd2FyZCIsInJlamVjdCIsInJlZnJlc2hlZE9iamVjdHMiLCJwYWdlUmVtYWluaW5nIiwicmVmcmVzaE5leHRQYWdlIiwiam9pbk9iamVjdExpc3RzIiwiaW5zZXJ0T25lIiwiZm9sZGVyVVJMIiwiaW5zZXJ0TXVsdGlwbGUiLCJpbnNlcnRlZE9iamVjdHMiLCJmb2xkZXJBYnNVUkwiLCJpIiwicG9zdCIsInNvbWUiLCJpbnNlcnRlZE9iamVjdCIsIm9iamVjdEZvbGRlclVSTCIsImdldE9iamVjdEZvbGRlclVSTCIsIm1hdGNoVVJMIiwiaW5Gb2xkZXIiLCJyZW1vdmVPYmplY3RzT3V0c2lkZUZvbGRlciIsImRlZmF1bHRCZWhhdmlvciIsInJ1bkhvb2siLCJ1cGRhdGVPbmUiLCJ1cGRhdGVNdWx0aXBsZSIsImdldE9iamVjdFVSTCIsInB1dCIsInVwZGF0ZWRPYmplY3RzIiwidXBkYXRlZE9iamVjdCIsIm9iamVjdFVSTCIsImRlbGV0ZU9uZSIsImRlbGV0ZU11bHRpcGxlIiwiZGVsZXRlIiwiZGVsZXRlZE9iamVjdHMiLCJrZWVwIiwiZGVsZXRlZE9iamVjdCIsImZpbmQiLCJtYXRjaFF1ZXJ5IiwiZ2V0Rm9sZGVyVVJMIiwiYWJicmV2aWF0ZWQiLCJpdGVtIiwiY29uY2F0IiwicmVxdWVzdEF1dGhlbnRpY2F0aW9uIiwiYXV0aGVudGljYXRpb24iLCJyIiwiYXV0aGVudGljYXRpb25FdmVudCIsImV2ZW50SGFuZGxlZCIsIndhaXRGb3JEZWNpc2lvbiIsImRlZmF1bHRQcmV2ZW50ZWQiLCJpbmRleCIsImluZGV4T2YiLCJzcGxpY2UiLCJhdXRoZW50aWNhdGUiLCJsb2dpblVSTCIsImNyZWRlbnRpYWxzIiwiYWxsb3dVUkxzIiwibG9naW5BYnNVUkwiLCJ0b2tlbiIsImtleSIsIkVycm9yIiwiYXV0aG9yaXplIiwiYWxsb3dBYnNVUkxzIiwiYXV0aG9yaXphdGlvbkV2ZW50IiwiYWNjZXB0YWJsZSIsImF1dGhvcml6YXRpb24iLCJhbGxvdyIsImRlbnkiLCJtYXRjaEFueVVSTCIsImdldEF1dGhvcml6YXRpb25Ub2tlbiIsImNhbmNlbEF1dGhlbnRpY2F0aW9uIiwiY2FuY2VsQXV0aG9yaXphdGlvbiIsImRlbnlVUkxzIiwiZGVueUFic1VSTHMiLCJyZXZva2VBdXRob3JpemF0aW9uIiwibG9nb3V0VVJMIiwibG9nb3V0QWJzVVJMIiwiZmV0Y2giLCJzdGF0dXMiLCJqc29uIiwic3RhdHVzVGV4dCIsImZvbGRlclVSTDEiLCJmb2xkZXJVUkwyIiwiZXhwaXJhdGlvbkNoZWNrSW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsImNoZWNrRXhwaXJhdGlvbiIsImNsZWFySW50ZXJ2YWwiLCJpbnRlcnZhbCIsIk51bWJlciIsImxpbWl0IiwibWV0aG9kIiwiaGVhZGVycyIsInJlcXVlc3QiLCJtb2RlIiwiY2FjaGUiLCJib2R5Iiwia2V5d29yZCIsImF1dGhlbnRpY2F0ZWQiLCJob29rTmFtZSIsImlucHV0IiwiaG9va0Z1bmMiLCJyZWZyZXNoUXVlcnkiLCJpZ25vcmVDaGFuZ2UiLCJyZXBsYWNlT2JqZWN0IiwicmVwbGFjZU9iamVjdHMiLCJ1bnNoaWZ0T2JqZWN0cyIsInB1c2hPYmplY3RzIiwicmVtb3ZlT2JqZWN0IiwicmVtb3ZlT2JqZWN0cyIsImltcGFjdCIsIkJvb2xlYW4iLCJzb3J0T2JqZWN0cyIsImRpZmYiLCJuZXdPYmplY3QiLCJuZXdPYmplY3RzIiwibmV3TGlzdCIsImZpbmRPYmplY3QiLCJzbGljZSIsImZpbmRPYmplY3RJbmRleCIsInVuc2hpZnQiLCJkZWxldGVkT0JqZWN0Iiwib2JqZWN0MSIsIm9iamVjdDIiLCJjb25zdHJ1Y3RvciIsInRvU3RyaW5nIiwib3RoZXJVUkxzIiwib3RoZXJVUkwiLCJzdWJzdHIiLCJsYyIsImNoYXJBdCIsImVjIiwiZmMiLCJlaSIsImxhc3RJbmRleE9mIiwiaWQiLCJxaSIsInNlcCIsInVybDEiLCJ1cmwyIiwibGlzdCIsImtleUEiLCJvYmoiLCJrZXlCIiwic29ydCIsImEiLCJiIiwib2xkTGlzdCIsInVuY2hhbmdlZCIsIm9sZEluZGV4Iiwic3RhcnRJbmRleCIsIm90aGVyZm9sZGVyVVJMIiwiZGVmIiwidHJpbSIsInBlcmNlbnQiLCJwYXJzZUludCIsIk1hdGgiLCJjZWlsIiwiZGVsdGEiLCJkYXRlIiwiRGF0ZSIsInRvSVNPU3RyaW5nIiwidGFyZ2V0IiwiZGVjaXNpb25Qcm9taXNlIiwicHJldmVudERlZmF1bHQiLCJwb3N0cG9uZURlZmF1bHQiLCJtb2R1bGUiLCJleHBvcnRzIiwiUmVhY3QiLCJJU19QUkVBQ1QiLCJoIiwiTWVhbndoaWxlIiwicmVxdWlyZSIsImhhcnZlc3QiLCJub2RlIiwiaGFydmVzdGVkIiwiaGFydmVzdE5vZGUiLCJpc1Byb21pc2UiLCJjb250ZXh0IiwiYXN5bmNSZW5kZXJpbmciLCJnZXROb2RlVHlwZSIsInJlbmRlcmVkIiwiZ2V0Tm9kZVByb3BzIiwicmVuZGVyIiwiY29tcG9uZW50Q2xhc3MiLCJjb21wb25lbnQiLCJzdGF0ZSIsImdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyIsIm9yaWdpbmFsU3RhdGUiLCJkZXJpdmVkU3RhdGUiLCJhc3NpZ24iLCJjb21wb25lbnRXaWxsTW91bnQiLCJ1cGRhdGVyIiwiUmVhY3RVcGRhdGVyIiwiVU5TQUZFX2NvbXBvbmVudFdpbGxNb3VudCIsInJlbGFrcyIsInJlbmRlckFzeW5jIiwibWVhbndoaWxlIiwic3RhdGVsZXNzQ29tcG9uZW50RnVuYyIsImhhcnZlc3RDaGlsZHJlbiIsImNoaWxkcmVuIiwiZ2V0Tm9kZUNoaWxkcmVuIiwibmV3Q2hpbGRyZW4iLCJoYXJ2ZXN0Tm9kZXMiLCJyZXBsYWNlQ2hpbGRyZW4iLCJub2RlcyIsImFzeW5jUmVuZGVyaW5nUmVxdWlyZWQiLCJuZXdOb2RlcyIsImVsZW1lbnQiLCJjbG9uZUVsZW1lbnQiLCJkZXN0Iiwic3JjIiwibm9kZU5hbWUiLCJhdHRyaWJ1dGVzIiwiZGVmaW5lUHJvcGVydHkiLCJ2YWx1ZSIsImRlZmF1bHRQcm9wcyIsImVucXVldWVDYWxsYmFjayIsImluc3QiLCJmIiwiZW5xdWV1ZUZvcmNlVXBkYXRlIiwiZW5xdWV1ZVJlcGxhY2VTdGF0ZSIsIm5ld1N0YXRlIiwiZW5xdWV1ZVNldFN0YXRlIiwicGFydGlhbFN0YXRlIiwiaXNNb3VudGVkIiwicHJldmlvdXNseSIsInN5bmNocm9ub3VzIiwic2hvd2luZ1Byb2dyZXNzIiwic2hvd2luZ1Byb2dyZXNzSW5pdGlhbGx5IiwiZGVsYXlXaGVuRW1wdHkiLCJJbmZpbml0eSIsImRlbGF5V2hlblJlbmRlcmVkIiwiY2FuY2VsZWQiLCJwcmlvciIsInByZXZpb3VzIiwiY3VycmVudCIsInVwZGF0ZVRpbWVvdXQiLCJzdGFydFRpbWUiLCJvbkNhbmNlbCIsIm9uQ29tcGxldGUiLCJvblByb2dyZXNzIiwiY2hlY2siLCJzaG93IiwiZGlzcG9zaXRpb24iLCJyZXZpc2luZyIsImRlbGF5IiwiZW1wdHkiLCJ1cGRhdGUiLCJmb3JjZWQiLCJjYW5jZWwiLCJmaW5pc2giLCJjbGVhciIsInNjcmlwdFN0YXJ0VGltZSIsIlNTUiIsIndpbmRvdyIsInVzZUhhc2hGYWxsYmFjayIsInRyYWNrTGlua3MiLCJ0cmFja0xvY2F0aW9uIiwiYmFzZVBhdGgiLCJpbml0aWFsUGF0aCIsIlJlbGFrc1JvdXRlTWFuYWdlciIsInBhcmFtcyIsInJvdXRlcyIsImhpc3RvcnkiLCJyZXdyaXRlcyIsImFkZFJvdXRlcyIsImFkZFJld3JpdGVzIiwiaGFuZGxlTGlua0NsaWNrIiwiaGFuZGxlUG9wU3RhdGUiLCJnZXRMb2NhdGlvblVSTCIsImxvY2F0aW9uIiwiY2hhbmdlIiwicmVwbGFjZSIsIm9wdCIsInJlbW92ZVJvdXRlcyIsInJld3JpdGUiLCJyZW1vdmVSZXdyaXRlcyIsIm1hdGNoIiwidGltZSIsImFwcGx5IiwibmV3Q29udGV4dCIsInVybFBhcnRzIiwiZmlsbCIsInJlYmFzZSIsImNvbXBvc2VVUkwiLCJiYWNrIiwiYmFja1Jlc29sdmUiLCJiYWNrUmVqZWN0Iiwic2V0VGltZW91dCIsInBhcnNlVVJMIiwicm91dGVEZWYiLCJ0eXBlcyIsIm1hdGNoVGVtcGxhdGUiLCJwYXRoIiwicXVlcnlWYXJOYW1lIiwicXVlcnlWYXJUZW1wbGF0ZSIsInF1ZXJ5VmFyVmFsdWUiLCJoYXNoIiwic3luYyIsImNvbmZpcm1hdGlvbkV2ZW50IiwiUmVsYWtzUm91dGVNYW5hZ2VyRXZlbnQiLCJsb2FkIiwiZW50cnkiLCJzZXRMb2NhdGlvblVSTCIsImZpbGxUZW1wbGF0ZSIsImRpcmVjdGlvbiIsImZyb20iLCJ0byIsIm5ld1BhdGgiLCJnZXRSZWxhdGl2ZVBhdGgiLCJyZXN1bHQiLCJkb2NMb2NhdGlvbiIsInByb3RvY29sIiwiaG9zdCIsInBhdGhuYW1lIiwic2VhcmNoIiwiY3VycmVudFVSTCIsInJlcGxhY2VTdGF0ZSIsInB1c2hTdGF0ZSIsImJ1dHRvbiIsImxpbmsiLCJnZXRMaW5rIiwiZG93bmxvYWQiLCJzdG9wUHJvcGFnYXRpb24iLCJ2YXJpYWJsZVJlZ0V4cCIsInJlZ0V4cENhY2hlIiwiZ2V0VVJMVGVtcGxhdGVSZWdFeHAiLCJ0ZW1wbGF0ZSIsImlzUGF0aCIsInBhdHRlcm4iLCJ2YXJpYWJsZSIsInZhcmlhYmxlVHlwZSIsInZhcmlhYmxlUGF0dGVybiIsInJlIiwiUmVnRXhwIiwiZ2V0VVJMVGVtcGxhdGVWYXJpYWJsZXMiLCJtYXRjaGVzIiwidXJsUGFydCIsInQiLCJleGVjIiwidmFyaWFibGVzIiwidmFsdWVzIiwiY2FzdFZhbHVlIiwiYWx3YXlzIiwidG9rZW5zIiwicyIsImpvaW4iLCJ1cmxQYXRoIiwic3RyaW5nIiwic3RyaW5naWZ5VmFsdWUiLCJTdHJpbmciLCJuIiwicGFyc2VGbG9hdCIsImhhc2hJbmRleCIsInF1ZXJ5SW5kZXgiLCJwYXJzZVF1ZXJ5U3RyaW5nIiwicXVlcnlTdHJpbmciLCJwYWlycyIsInNwbGl0IiwicGFydHMiLCJkZWNvZGVVUklDb21wb25lbnQiLCJjb21wb3NlUXVlcnlTdHJpbmciLCJlbmNvZGVVUklDb21wb25lbnQiLCJ0YWdOYW1lIiwiaHJlZiIsInBhcmVudE5vZGUiLCJBcHBsaWNhdGlvbiIsImhhbmRsZURhdGFTb3VyY2VDaGFuZ2UiLCJzZXRTdGF0ZSIsInN3YXBpIiwiU1dBUEkiLCJoYW5kbGVSb3V0ZUNoYW5nZSIsInJvdXRlIiwiUm91dGUiLCJyb3V0ZU1hbmFnZXIiLCJkYXRhU291cmNlIiwic3NyIiwiQ29tcG9uZW50IiwiZGVmYXVsdCIsImRvY3VtZW50IiwiY2xhc3NOYW1lIiwiZGlzcGxheU5hbWUiLCJkYXRhU291cmNlQmFzZVVSTCIsInBhZ2VCYXNlUGF0aCIsIkRqYW5nb0RhdGFTb3VyY2UiLCJSb3V0ZU1hbmFnZXIiLCJhcHBDb250YWluZXIiLCJnZXRFbGVtZW50QnlJZCIsImFwcEVsZW1lbnQiLCJmaXJzdENoaWxkIiwic2VydmVyU2lkZVJlbmRlciIsInNpIiwidGV4dCIsInN1YnN0cmluZyIsIk5hdkJhciIsIkJ1dHRvbiIsImxpbmtQcm9wcyIsInBhZ2VOYW1lIl0sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBa0IscUJBQXFCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7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Q0E7QUFDQTs7Ozs7Ozs7QUNSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ2hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ25GQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkRBQTJEO0FBQzNEOzs7Ozs7OztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ1hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDSkE7QUFDQTs7QUFFQTs7Ozs7Ozs7QUNIQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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QUFDSjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFlBQVksYUFBYTtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksZUFBZTtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksV0FBVztBQUN2QixZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrRUFBa0U7QUFDbEUsc0ZBQXNGO0FBQ3RGLHNFQUFzRTtBQUN0RTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxVQUFVO0FBQ3RCLFlBQVksb0JBQW9CO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsQ0FBQztBQUNEOzs7Ozs7Ozs7Ozs7Ozs7O0FDbFpBO0FBQUE7QUFDQTs7QUFFQTtBQUNB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QUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBLFdBQVc7QUFDWDs7QUFFQTtBQUNBO0FBQ0Esd0NBQXdDLFdBQVc7QUFDbkQ7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLFNBQVM7QUFDVDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0NBQW9DLGNBQWM7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlDQUFpQyxrQkFBa0I7QUFDbkQ7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQjs7QUFFakI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGlCQUFpQjtBQUN6QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFlBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0EsWUFBWTtBQUNaOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsOENBQThDLFFBQVE7QUFDdEQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBOztBQUVBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7O0FBRUEsV0FBVztBQUNYO0FBQ0E7QUFDQTs7QUFFQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0EsOENBQThDLFFBQVE7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSw4Q0FBOEMsUUFBUTtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSw4Q0FBOEMsUUFBUTtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOzs7Ozs7OztBQ2h0QkE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7QUNSQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQjtBQUMvQjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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T0EsS0FBdEM7QUFBQTtBQUFBLFNBVko7QUFhSTtBQUFDLGtCQUFEO0FBQUEsY0FBUSxVQUFTLGNBQWpCLEVBQWdDLE9BQU9BLEtBQXZDO0FBQUE7QUFBQSxTQWJKO0FBZ0JJO0FBQUMsa0JBQUQ7QUFBQSxjQUFRLFVBQVMsY0FBakIsRUFBZ0MsT0FBT0EsS0FBdkM7QUFBQTtBQUFBLFNBaEJKO0FBbUJJO0FBQUMsa0JBQUQ7QUFBQSxjQUFRLFVBQVMsZUFBakIsRUFBaUMsT0FBT0EsS0FBeEM7QUFBQTtBQUFBO0FBbkJKLEtBREo7QUF5Qkg7O0FBRURzQixPQUFPYixXQUFQLEdBQXFCLFFBQXJCOztBQUVBLFNBQVNjLE1BQVQsQ0FBZ0J6YyxLQUFoQixFQUF1QjtBQUFBLFFBQ2JrYixLQURhLEdBQ0hsYixLQURHLENBQ2JrYixLQURhOztBQUVuQixRQUFJd0IsWUFBWTtBQUNaaEIsbUJBQVcsUUFEQztBQUVaaEIsY0FBTVEsTUFBTS9VLElBQU4sQ0FBV25HLE1BQU0yYyxRQUFqQjtBQUZNLEtBQWhCO0FBSUEsV0FBTztBQUFBO0FBQU9ELGlCQUFQO0FBQW1CMWMsY0FBTXFRO0FBQXpCLEtBQVA7QUFDSDs7QUFFRG9NLE9BQU9kLFdBQVAsR0FBcUIsUUFBckI7O1FBR2NILE8sR0FBVmdCLE07UUFDQUEsTSxHQUFBQSxNIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgY2h1bmtzXG4gXHQvLyBcIjBcIiBtZWFucyBcImFscmVhZHkgbG9hZGVkXCJcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdG1haW46IDBcbiBcdH07XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuIFx0Ly8gVGhpcyBmaWxlIGNvbnRhaW5zIG9ubHkgdGhlIGVudHJ5IGNodW5rLlxuIFx0Ly8gVGhlIGNodW5rIGxvYWRpbmcgZnVuY3Rpb24gZm9yIGFkZGl0aW9uYWwgY2h1bmtzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmUgPSBmdW5jdGlvbiByZXF1aXJlRW5zdXJlKGNodW5rSWQpIHtcbiBcdFx0Ly8gXCIwXCIgaXMgdGhlIHNpZ25hbCBmb3IgXCJhbHJlYWR5IGxvYWRlZFwiXG4gXHRcdGlmKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSAhPT0gMCkge1xuIFx0XHRcdHZhciBjaHVuayA9IHJlcXVpcmUoXCIuL1wiICsgY2h1bmtJZCArIFwiLmFwcC5qc1wiKTtcbiBcdFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBjaHVuay5tb2R1bGVzLCBjaHVua0lkcyA9IGNodW5rLmlkcztcbiBcdFx0XHRmb3IodmFyIG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKVxuIFx0XHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRzW2ldXSA9IDA7XG4gXHRcdH1cbiBcdFx0cmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuIFx0fTtcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvc3RhcndhcnNcIjtcblxuIFx0Ly8gdW5jYXRjaGVkIGVycm9yIGhhbmRsZXIgZm9yIHdlYnBhY2sgcnVudGltZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vZSA9IGZ1bmN0aW9uKGVycikge1xuIFx0XHRwcm9jZXNzLm5leHRUaWNrKGZ1bmN0aW9uKCkge1xuIFx0XHRcdHRocm93IGVycjsgLy8gY2F0Y2ggdGhpcyBlcnJvciBieSB1c2luZyBTeXN0ZW0uaW1wb3J0KCkuY2F0Y2goKVxuIFx0XHR9KTtcbiBcdH07XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL21haW4uanNcIik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgYWViNjc2ZDc4YWE1ZTUzODBmNDIiLCJ2YXIgZGVmYXVsdE9wdGlvbnMgPSB7XG4gICAgYmFzZVVSTDogJycsXG4gICAgcmVmcmVzaEludGVydmFsOiAwLFxuICAgIGF1dGhvcml6YXRpb25LZXl3b3JkOiAnVG9rZW4nLFxuICAgIGFiYnJldmlhdGVkRm9sZGVyQ29udGVudHM6IGZhbHNlLFxufTtcblxuZnVuY3Rpb24gUmVsYWtzRGphbmdvRGF0YVNvdXJjZShvcHRpb25zKSB7XG4gICAgdGhpcy5saXN0ZW5lcnMgPSBbXTtcbiAgICB0aGlzLnF1ZXJpZXMgPSBbXTtcbiAgICB0aGlzLmF1dGhlbnRpY2F0aW9ucyA9IFtdO1xuICAgIHRoaXMuYXV0aG9yaXphdGlvbnMgPSBbXTtcbiAgICB0aGlzLm9wdGlvbnMgPSB7fTtcbiAgICBmb3IgKHZhciBuYW1lIGluIGRlZmF1bHRPcHRpb25zKSB7XG4gICAgICAgIGlmIChvcHRpb25zICYmIG9wdGlvbnNbbmFtZV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5vcHRpb25zW25hbWVdID0gb3B0aW9uc1tuYW1lXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMub3B0aW9uc1tuYW1lXSA9IGRlZmF1bHRPcHRpb25zW25hbWVdO1xuICAgICAgICB9XG4gICAgfVxufVxuXG52YXIgcHJvdG90eXBlID0gUmVsYWtzRGphbmdvRGF0YVNvdXJjZS5wcm90b3R5cGU7XG5cbi8qKlxuICogSW5pdGlhbGl6ZSB0aGUgY29tcG9uZW50XG4gKi9cbnByb3RvdHlwZS5pbml0aWFsaXplID0gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5zdGFydEV4cGlyYXRpb25DaGVjaygpO1xufTtcblxuLyoqXG4gKiBTaHV0ZG93biB0aGUgY29tcG9uZW50XG4gKi9cbnByb3RvdHlwZS5zaHV0ZG93biA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuc3RvcEV4cGlyYXRpb25DaGVjaygpO1xufTtcblxuLyoqXG4gKiBBdHRhY2ggYW4gZXZlbnQgaGFuZGxlclxuICpcbiAqIEBwYXJhbSAge1N0cmluZ30gdHlwZVxuICogQHBhcmFtICB7RnVuY3Rpb259IGhhbmRsZXJcbiAqL1xucHJvdG90eXBlLmFkZEV2ZW50TGlzdGVuZXIgPSBmdW5jdGlvbih0eXBlLCBoYW5kbGVyKSB7XG4gICAgdGhpcy5saXN0ZW5lcnMucHVzaCh7ICB0eXBlOiB0eXBlLCAgaGFuZGxlcjogaGFuZGxlciB9KTtcbn07XG5cbi8qKlxuICogUmVtb3ZlIGFuIGV2ZW50IGhhbmRsZXJcbiAqXG4gKiBAcGFyYW0gIHtTdHJpbmd9IHR5cGVcbiAqIEBwYXJhbSAge0Z1bmN0aW9ufSBoYW5kbGVyXG4gKi9cbnByb3RvdHlwZS5yZW1vdmVFdmVudExpc3RlbmVyID0gZnVuY3Rpb24odHlwZSwgaGFuZGxlcikge1xuICAgIHRoaXMubGlzdGVuZXJzID0gdGhpcy5saXN0ZW5lcnMuZmlsdGVyKGZ1bmN0aW9uKGxpc3RlbmVyKSB7XG4gICAgICAgIHJldHVybiAhKGxpc3RlbmVyLnR5cGUgPT09IHR5cGUgJiYgbGlzdGVuZXIuaGFuZGxlciA9PT0gaGFuZGxlcik7XG4gICAgfSlcbn07XG5cbi8qKlxuICogU2VuZCBldmVudCB0byBldmVudCBsaXN0ZW5lcnMsIHJldHVybiB0cnVlIG9yIGZhbHNlIGRlcGVuZGluZyBvbiB3aGV0aGVyXG4gKiB0aGVyZSB3ZXJlIGFueSBsaXN0ZW5lcnNcbiAqXG4gKiBAcGFyYW0gIHtSZWxha3NEamFuZ29EYXRhU291cmNlRXZlbnR9IGV2dFxuICpcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKi9cbnByb3RvdHlwZS50cmlnZ2VyRXZlbnQgPSBmdW5jdGlvbihldnQpIHtcbiAgICB2YXIgZmlyZWQgPSBmYWxzZTtcbiAgICB0aGlzLmxpc3RlbmVycy5mb3JFYWNoKGZ1bmN0aW9uKGxpc3RlbmVyKSB7XG4gICAgICAgIGlmIChsaXN0ZW5lci50eXBlID09PSBldnQudHlwZSAmJiBsaXN0ZW5lci5oYW5kbGVyKSB7XG4gICAgICAgICAgICBmaXJlZCA9IHRydWU7XG4gICAgICAgICAgICBsaXN0ZW5lci5oYW5kbGVyKGV2dCk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gZmlyZWQ7XG59O1xuXG4vKipcbiAqIEFkZCBiYXNlVVJMIHRvIHJlbGF0aXZlIFVSTFxuICpcbiAqIEBwYXJhbSAge1N0cmluZ30gdXJsXG4gKlxuICogQHJldHVybiB7U3RyaW5nfVxuICovXG5wcm90b3R5cGUucmVzb2x2ZVVSTCA9IGZ1bmN0aW9uKHVybCkge1xuICAgIGlmICh0eXBlb2YodXJsKSAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgcmV0dXJuIHVybDtcbiAgICB9XG4gICAgdmFyIGJhc2VVUkwgPSB0aGlzLm9wdGlvbnMuYmFzZVVSTDtcbiAgICBpZiAoIWJhc2VVUkwgfHwgL15odHRwcz86Ly50ZXN0KHVybCkpIHtcbiAgICAgICAgcmV0dXJuIHVybDtcbiAgICB9XG4gICAgcmV0dXJuIHJlbW92ZVRyYWlsaW5nU2xhc2goYmFzZVVSTCkgKyBhZGRMZWFkaW5nU2xhc2godXJsKTtcbn07XG5cbi8qKlxuICogUmVzb2x2ZSBhIGxpc3Qgb2YgVVJMc1xuICpcbiAqIEBwYXJhbSAge0FycmF5PFN0cmluZz59IHVybHNcbiAqXG4gKiBAcmV0dXJuIHtBcnJheTxTdHJpbmc+fVxuICovXG5wcm90b3R5cGUucmVzb2x2ZVVSTHMgPSBmdW5jdGlvbih1cmxzKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcbiAgICByZXR1cm4gdXJscy5tYXAoZnVuY3Rpb24odXJsKSB7XG4gICAgICAgIHJldHVybiBfdGhpcy5yZXNvbHZlVVJMKHVybCk7XG4gICAgfSk7XG59O1xuXG4vKipcbiAqIEZldGNoIG9uZSBvYmplY3QgYXQgdGhlIFVSTC5cbiAqXG4gKiBAcGFyYW0gIHtTdHJpbmd9IHVybFxuICogQHBhcmFtICB7T2JqZWN0fHVuZGVmaW5lZH0gb3B0aW9uc1xuICpcbiAqIEByZXR1cm4ge1Byb21pc2U8T2JqZWN0Pn1cbiAqL1xucHJvdG90eXBlLmZldGNoT25lID0gZnVuY3Rpb24odXJsLCBvcHRpb25zKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcbiAgICB2YXIgYWJzVVJMID0gdGhpcy5yZXNvbHZlVVJMKHVybCk7XG4gICAgdmFyIHByb3BzID0ge1xuICAgICAgICB0eXBlOiAnb2JqZWN0JyxcbiAgICAgICAgdXJsOiBhYnNVUkwsXG4gICAgICAgIG9wdGlvbnM6IG9wdGlvbnMgfHwge30sXG4gICAgfTtcbiAgICB2YXIgcXVlcnkgPSB0aGlzLmZpbmRRdWVyeShwcm9wcyk7XG4gICAgaWYgKCFxdWVyeSkge1xuICAgICAgICBxdWVyeSA9IHRoaXMuZGVyaXZlUXVlcnkocHJvcHMpO1xuICAgIH1cbiAgICBpZiAoIXF1ZXJ5KSB7XG4gICAgICAgIHF1ZXJ5ID0gcHJvcHM7XG4gICAgICAgIHF1ZXJ5LnByb21pc2UgPSB0aGlzLmdldChhYnNVUkwpLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcbiAgICAgICAgICAgIHZhciBvYmplY3QgPSByZXNwb25zZTtcbiAgICAgICAgICAgIF90aGlzLnVwZGF0ZVF1ZXJ5KHF1ZXJ5LCB7XG4gICAgICAgICAgICAgICAgb2JqZWN0OiBvYmplY3QsXG4gICAgICAgICAgICAgICAgcmV0cmlldmFsVGltZTogZ2V0VGltZSgpLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gb2JqZWN0O1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5hZGRRdWVyeShxdWVyeSk7XG4gICAgfVxuICAgIHJldHVybiBxdWVyeS5wcm9taXNlLnRoZW4oZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgICAgIGlmIChxdWVyeS5kaXJ0eSkgIHtcbiAgICAgICAgICAgIF90aGlzLnJlZnJlc2hPbmUocXVlcnkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBvYmplY3Q7XG4gICAgfSk7XG59O1xuXG4vKipcbiAqIEZldGNoIGEgcGFnZSBvZiBvYmplY3RzXG4gKlxuICogQHBhcmFtICB7U3RyaW5nfSB1cmxcbiAqIEBwYXJhbSAge051bWJlcn0gcGFnZVxuICogQHBhcmFtICB7T2JqZWN0fHVuZGVmaW5lZH0gb3B0aW9uc1xuICpcbiAqIEByZXR1cm4ge1Byb21pc2U8QXJyYXk+fVxuICovXG5wcm90b3R5cGUuZmV0Y2hQYWdlID0gZnVuY3Rpb24odXJsLCBwYWdlLCBvcHRpb25zKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcbiAgICB2YXIgYWJzVVJMID0gdGhpcy5yZXNvbHZlVVJMKHVybCk7XG4gICAgdmFyIHByb3BzID0ge1xuICAgICAgICB0eXBlOiAncGFnZScsXG4gICAgICAgIHVybDogdXJsLFxuICAgICAgICBwYWdlOiBwYWdlLFxuICAgICAgICBvcHRpb25zOiBvcHRpb25zIHx8IHt9LFxuICAgIH07XG4gICAgdmFyIHF1ZXJ5ID0gdGhpcy5maW5kUXVlcnkocHJvcHMpO1xuICAgIGlmICghcXVlcnkpIHtcbiAgICAgICAgdmFyIHBhZ2VVUkwgPSBhdHRhY2hQYWdlTnVtYmVyKGFic1VSTCwgcGFnZSk7XG4gICAgICAgIHF1ZXJ5ID0gcHJvcHM7XG4gICAgICAgIHF1ZXJ5LnByb21pc2UgPSB0aGlzLmdldChwYWdlVVJMKS50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICB2YXIgb2JqZWN0cyA9IHJlc3BvbnNlLnJlc3VsdHM7XG4gICAgICAgICAgICBfdGhpcy51cGRhdGVRdWVyeShxdWVyeSwge1xuICAgICAgICAgICAgICAgIG9iamVjdHM6IG9iamVjdHMsXG4gICAgICAgICAgICAgICAgcmV0cmlldmFsVGltZTogZ2V0VGltZSgpLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gb2JqZWN0cztcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuYWRkUXVlcnkocXVlcnkpXG4gICAgfVxuICAgIHJldHVybiBxdWVyeS5wcm9taXNlLnRoZW4oZnVuY3Rpb24ob2JqZWN0cykge1xuICAgICAgICBpZiAocXVlcnkuZGlydHkpICB7XG4gICAgICAgICAgICBfdGhpcy5yZWZyZXNoUGFnZShxdWVyeSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG9iamVjdHM7XG4gICAgfSk7XG59O1xuXG4vKipcbiAqIEZldGNoIGEgbGlzdCBvZiBvYmplY3RzIGF0IHRoZSBnaXZlbiBVUkwuXG4gKlxuICogQHBhcmFtICB7U3RyaW5nfSB1cmxcbiAqIEBwYXJhbSAge09iamVjdH0gb3B0aW9uc1xuICpcbiAqIEByZXR1cm4ge1Byb21pc2U8QXJyYXk+fVxuICovXG5wcm90b3R5cGUuZmV0Y2hMaXN0ID0gZnVuY3Rpb24odXJsLCBvcHRpb25zKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcbiAgICB2YXIgYWJzVVJMID0gdGhpcy5yZXNvbHZlVVJMKHVybCk7XG4gICAgdmFyIHByb3BzID0ge1xuICAgICAgICB0eXBlOiAnbGlzdCcsXG4gICAgICAgIHVybDogYWJzVVJMLFxuICAgICAgICBvcHRpb25zOiBvcHRpb25zIHx8IHt9LFxuICAgIH07XG4gICAgdmFyIHF1ZXJ5ID0gdGhpcy5maW5kUXVlcnkocHJvcHMpO1xuICAgIGlmICghcXVlcnkpIHtcbiAgICAgICAgcXVlcnkgPSBwcm9wcztcbiAgICAgICAgcXVlcnkucHJvbWlzZSA9IHRoaXMuZmV0Y2hOZXh0UGFnZShxdWVyeSwgdHJ1ZSk7XG4gICAgICAgIHRoaXMuYWRkUXVlcnkocXVlcnkpO1xuICAgIH1cbiAgICByZXR1cm4gcXVlcnkucHJvbWlzZS50aGVuKGZ1bmN0aW9uKG9iamVjdHMpIHtcbiAgICAgICAgaWYgKHF1ZXJ5LmRpcnR5KSAge1xuICAgICAgICAgICAgX3RoaXMucmVmcmVzaExpc3QocXVlcnkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBvYmplY3RzO1xuICAgIH0pO1xufTtcblxuLyoqXG4gKiBSZXR1cm4gd2hhdCBoYXMgYmVlbiBmZXRjaGVkLiBVc2VkIGJ5IGZldGNoTGlzdCgpLlxuICpcbiAqIEBwYXJhbSAge09iamVjdH0gcXVlcnlcbiAqXG4gKiBAcmV0dXJuIHtQcm9taXNlPEFycmF5Pn1cbiAqL1xucHJvdG90eXBlLmZldGNoTm9Nb3JlID0gZnVuY3Rpb24ocXVlcnkpIHtcbiAgICByZXR1cm4gcXVlcnkucHJvbWlzZTtcbn07XG5cbi8qKlxuICogSW5pdGlhdGUgZmV0Y2hpbmcgb2YgdGhlIG5leHQgcGFnZS4gVXNlZCBieSBmZXRjaExpc3QoKS5cbiAqXG4gKiBAcGFyYW0gIHtPYmplY3R9IHF1ZXJ5XG4gKiBAcGFyYW0gIHtCb29sZWFufSBpbml0aWFsXG4gKlxuICogQHJldHVybiB7UHJvbWlzZTxBcnJheT59XG4gKi9cbnByb3RvdHlwZS5mZXRjaE5leHRQYWdlID0gZnVuY3Rpb24ocXVlcnksIGluaXRpYWwpIHtcbiAgICBpZiAocXVlcnkubmV4dFByb21pc2UpIHtcbiAgICAgICAgcmV0dXJuIHF1ZXJ5Lm5leHRQcm9taXNlO1xuICAgIH1cbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgIHZhciBuZXh0VVJMID0gKGluaXRpYWwpID8gcXVlcnkudXJsIDogcXVlcnkubmV4dFVSTDtcbiAgICB2YXIgbmV4dFByb21pc2UgPSB0aGlzLmdldChuZXh0VVJMKS50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG4gICAgICAgIGlmIChyZXNwb25zZSBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgICAgICAvLyB0aGUgZnVsbCBsaXN0IGlzIHJldHVybmVkXG4gICAgICAgICAgICB2YXIgb2JqZWN0cyA9IHJlc3BvbnNlO1xuICAgICAgICAgICAgX3RoaXMudXBkYXRlUXVlcnkocXVlcnksIHtcbiAgICAgICAgICAgICAgICBvYmplY3RzOiBvYmplY3RzLFxuICAgICAgICAgICAgICAgIHJldHJpZXZhbFRpbWU6IGdldFRpbWUoKSxcbiAgICAgICAgICAgICAgICBuZXh0UHJvbWlzZTogbnVsbCxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgb2JqZWN0cy5tb3JlID0gX3RoaXMuZmV0Y2hOb01vcmUuYmluZChfdGhpcywgcXVlcnkpO1xuICAgICAgICAgICAgb2JqZWN0cy50b3RhbCA9IG9iamVjdHMubGVuZ3RoO1xuICAgICAgICAgICAgcmV0dXJuIG9iamVjdHM7XG4gICAgICAgIH0gZWxzZSBpZiAocmVzcG9uc2UgaW5zdGFuY2VvZiBPYmplY3QpIHtcbiAgICAgICAgICAgIC8vIGFwcGVuZCByZXRyaWV2ZWQgb2JqZWN0cyB0byBsaXN0XG4gICAgICAgICAgICB2YXIgdG90YWwgPSByZXNwb25zZS5jb3VudDtcbiAgICAgICAgICAgIHZhciBvYmplY3RzID0gYXBwZW5kT2JqZWN0cyhxdWVyeS5vYmplY3RzLCByZXNwb25zZS5yZXN1bHRzKTtcbiAgICAgICAgICAgIF90aGlzLnVwZGF0ZVF1ZXJ5KHF1ZXJ5LCB7XG4gICAgICAgICAgICAgICAgb2JqZWN0czogb2JqZWN0cyxcbiAgICAgICAgICAgICAgICBwcm9taXNlOiBuZXh0UHJvbWlzZSxcbiAgICAgICAgICAgICAgICByZXRyaWV2YWxUaW1lOiAoaW5pdGlhbCkgPyBnZXRUaW1lKCkgOiBxdWVyeS5yZXRyaWV2YWxUaW1lLFxuICAgICAgICAgICAgICAgIG5leHRVUkw6IHJlc3BvbnNlLm5leHQsXG4gICAgICAgICAgICAgICAgbmV4dFBhZ2U6IChxdWVyeS5uZXh0UGFnZSB8fCAxKSArIDEsXG4gICAgICAgICAgICAgICAgbmV4dFByb21pc2U6IG51bGwsXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgLy8gYXR0YWNoIGZ1bmN0aW9uIHRvIHJlc3VsdHMgc28gY2FsbGVyIGNhbiBhc2sgZm9yIG1vcmUgcmVzdWx0c1xuICAgICAgICAgICAgaWYgKHF1ZXJ5Lm5leHRVUkwpIHtcbiAgICAgICAgICAgICAgICBvYmplY3RzLm1vcmUgPSBfdGhpcy5mZXRjaE5leHRQYWdlLmJpbmQoX3RoaXMsIHF1ZXJ5LCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgb2JqZWN0cy50b3RhbCA9IHRvdGFsO1xuXG4gICAgICAgICAgICAgICAgLy8gaWYgbWluaW11bSBpcyBwcm92aWRlLCBmZXRjaCBtb3JlIGlmIGl0J3Mgbm90IG1ldFxuICAgICAgICAgICAgICAgIHZhciBtaW5pbXVtID0gZ2V0TWluaW11bShxdWVyeS5vcHRpb25zLCB0b3RhbCwgTmFOKTtcbiAgICAgICAgICAgICAgICBpZiAob2JqZWN0cy5sZW5ndGggPCBtaW5pbXVtKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGZldGNoIHRoZSBuZXh0IHBhZ2VcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF90aGlzLmZldGNoTmV4dFBhZ2UocXVlcnksIGZhbHNlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIG9iamVjdHMubW9yZSA9IF90aGlzLmZldGNoTm9Nb3JlLmJpbmQoX3RoaXMsIHF1ZXJ5KTtcbiAgICAgICAgICAgICAgICBvYmplY3RzLnRvdGFsID0gb2JqZWN0cy5sZW5ndGg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIGluZm9ybSBwYXJlbnQgY29tcG9uZW50IHRoYXQgbW9yZSBkYXRhIGlzIGF2YWlsYWJsZVxuICAgICAgICAgICAgaWYgKCFpbml0aWFsKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMudHJpZ2dlckV2ZW50KG5ldyBSZWxha3NEamFuZ29EYXRhU291cmNlRXZlbnQoJ2NoYW5nZScsIF90aGlzKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gb2JqZWN0cztcbiAgICAgICAgfVxuICAgIH0pLmNhdGNoKGZ1bmN0aW9uKGVycikge1xuICAgICAgICBpZiAoIWluaXRpYWwpIHtcbiAgICAgICAgICAgIF90aGlzLnVwZGF0ZVF1ZXJ5KHF1ZXJ5LCB7IG5leHRQcm9taXNlOiBudWxsIH0pO1xuICAgICAgICB9XG4gICAgICAgIHRocm93IGVycjtcbiAgICB9KTtcbiAgICBpZiAoIWluaXRpYWwpIHtcbiAgICAgICAgX3RoaXMudXBkYXRlUXVlcnkocXVlcnksIHsgbmV4dFByb21pc2UgfSk7XG4gICAgfVxuICAgIHJldHVybiBuZXh0UHJvbWlzZTtcbn07XG5cbi8qKlxuICogRmV0Y2ggbXVsdGlwbGUgSlNPTiBvYmplY3RzLiBJZiBtaW5pbXVtIGlzIHNwZWNpZmllZCwgdGhlbiBpbW1lZGlhdGVseVxuICogcmVzb2x2ZSB3aXRoIGNhY2hlZCByZXN1bHRzIHdoZW4gdGhlcmUncmUgc3VmZmljaWVudCBudW1iZXJzIG9mIG9iamVjdHMuXG4gKiBBbiBvbkNoYW5nZSB3aWxsIGJlIHRyaWdnZXIgb25jZSB0aGUgZnVsbCBzZXQgaXMgcmV0cmlldmVkLlxuICpcbiAqIEBwYXJhbSAge0FycmF5PFN0cmluZz59IHVybHNcbiAqIEBwYXJhbSAge09iamVjdH0gb3B0aW9uc1xuICpcbiAqIEByZXR1cm4ge1Byb21pc2U8QXJyYXk+fVxuICovXG5wcm90b3R5cGUuZmV0Y2hNdWx0aXBsZSA9IGZ1bmN0aW9uKHVybHMsIG9wdGlvbnMpIHtcbiAgICAvLyBzZWUgd2hpY2ggb25lcyBhcmUgY2FjaGVkIGFscmVhZHlcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgIHZhciBjYWNoZWQgPSAwO1xuICAgIHZhciBmZXRjaE9wdGlvbnMgPSB7fTtcbiAgICBmb3IgKHZhciBuYW1lIGluIG9wdGlvbnMpIHtcbiAgICAgICAgaWYgKG5hbWUgIT09ICdtaW5pbXVtJykge1xuICAgICAgICAgICAgZmV0Y2hPcHRpb25zW25hbWVdID0gb3B0aW9uc1tuYW1lXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICB2YXIgcHJvbWlzZXMgPSB1cmxzLm1hcChmdW5jdGlvbih1cmwpIHtcbiAgICAgICAgdmFyIGFic1VSTCA9IF90aGlzLnJlc29sdmVVUkwodXJsKTtcbiAgICAgICAgdmFyIHByb3BzID0geyB1cmw6IGFic1VSTCwgdHlwZTogJ29iamVjdCcgfTtcbiAgICAgICAgdmFyIHF1ZXJ5ID0gX3RoaXMuZmluZFF1ZXJ5KHByb3BzKTtcbiAgICAgICAgaWYgKCFxdWVyeSkge1xuICAgICAgICAgICAgcXVlcnkgPSBfdGhpcy5kZXJpdmVRdWVyeShwcm9wcyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHF1ZXJ5ICYmIHF1ZXJ5Lm9iamVjdCkge1xuICAgICAgICAgICAgY2FjaGVkKys7XG4gICAgICAgICAgICByZXR1cm4gcXVlcnkub2JqZWN0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIF90aGlzLmZldGNoT25lKGFic1VSTCwgZmV0Y2hPcHRpb25zKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8gd2FpdCBmb3IgdGhlIGNvbXBsZXRlIGxpc3QgdG8gYXJyaXZlXG4gICAgdmFyIGNvbXBsZXRlTGlzdFByb21pc2U7XG4gICAgaWYgKGNhY2hlZCA8IHVybHMubGVuZ3RoKSB7XG4gICAgICAgIGNvbXBsZXRlTGlzdFByb21pc2UgPSBQcm9taXNlLmFsbChwcm9taXNlcyk7XG4gICAgfVxuXG4gICAgLy8gc2VlIHdoZXRoZXIgcGFydGlhbCByZXN1bHQgc2V0IHNob3VsZCBiZSBpbW1lZGlhdGVseSByZXR1cm5lZFxuICAgIHZhciBtaW5pbXVtID0gZ2V0TWluaW11bShvcHRpb25zLCB1cmxzLmxlbmd0aCwgdXJscy5sZW5ndGgpO1xuICAgIGlmIChjYWNoZWQgPCBtaW5pbXVtICYmIGNvbXBsZXRlTGlzdFByb21pc2UpIHtcbiAgICAgICAgcmV0dXJuIGNvbXBsZXRlTGlzdFByb21pc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKGNvbXBsZXRlTGlzdFByb21pc2UpIHtcbiAgICAgICAgICAgIC8vIHJldHVybiBwYXJ0aWFsIGxpc3QgdGhlbiBmaXJlIGNoYW5nZSBldmVudCB3aGVuIGNvbXBsZXRlIGxpc3QgYXJyaXZlc1xuICAgICAgICAgICAgY29tcGxldGVMaXN0UHJvbWlzZS50aGVuKGZ1bmN0aW9uKG9iamVjdHMpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy50cmlnZ2VyRXZlbnQobmV3IFJlbGFrc0RqYW5nb0RhdGFTb3VyY2VFdmVudCgnY2hhbmdlJywgX3RoaXMpKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIHByb21pc2VzLm1hcChmdW5jdGlvbihvYmplY3QpIHtcbiAgICAgICAgICAgICAgICBpZiAob2JqZWN0LnRoZW4gaW5zdGFuY2VvZiBGdW5jdGlvbikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDsgICAgLy8gYSBwcm9taXNlLS1kb24ndCByZXR1cm4gaXRcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gb2JqZWN0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gbGlzdCBpcyBjb21wbGV0ZSBhbHJlYWR5XG4gICAgICAgICAgICByZXR1cm4gcHJvbWlzZXM7XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG4vKipcbiAqIFJlcGVyZm9ybSBhbiBxdWVyeSBmb3IgYW4gb2JqZWN0LCB0cmlnZ2VyaW5nIGFuIG9uQ2hhbmdlIGV2ZW50IGlmIHRoZVxuICogb2JqZWN0IGhhcyBjaGFuZ2VkLlxuICpcbiAqIEBwYXJhbSAge09iamVjdH0gcXVlcnlcbiAqL1xucHJvdG90eXBlLnJlZnJlc2hPbmUgPSBmdW5jdGlvbihxdWVyeSkge1xuICAgIGlmIChxdWVyeS5yZWZyZXNoaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc29sZS5sb2coJ1JlZnJlc2hpbmcgb2JqZWN0JywgcXVlcnkpO1xuICAgIHRoaXMudXBkYXRlUXVlcnkocXVlcnksIHsgcmVmcmVzaGluZzogdHJ1ZSB9KTtcblxuICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgdmFyIHJldHJpZXZhbFRpbWUgPSBnZXRUaW1lKCk7XG4gICAgdGhpcy5nZXQocXVlcnkudXJsKS50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG4gICAgICAgIHZhciBvYmplY3QgPSByZXNwb25zZTtcbiAgICAgICAgdmFyIGNoYW5nZWQgPSB0cnVlO1xuICAgICAgICBpZiAobWF0Y2hPYmplY3Qob2JqZWN0LCBxdWVyeS5vYmplY3QpKSB7XG4gICAgICAgICAgICBvYmplY3QgPSBxdWVyeS5vYmplY3Q7XG4gICAgICAgICAgICBjaGFuZ2VkID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgX3RoaXMudXBkYXRlUXVlcnkocXVlcnksIHtcbiAgICAgICAgICAgIG9iamVjdDogb2JqZWN0LFxuICAgICAgICAgICAgcHJvbWlzZTogUHJvbWlzZS5yZXNvbHZlKG9iamVjdCksXG4gICAgICAgICAgICByZXRyaWV2YWxUaW1lOiByZXRyaWV2YWxUaW1lLFxuICAgICAgICAgICAgcmVmcmVzaGluZzogZmFsc2UsXG4gICAgICAgICAgICBkaXJ0eTogZmFsc2UsXG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoY2hhbmdlZCkge1xuICAgICAgICAgICAgX3RoaXMudHJpZ2dlckV2ZW50KG5ldyBSZWxha3NEamFuZ29EYXRhU291cmNlRXZlbnQoJ2NoYW5nZScsIF90aGlzKSk7XG4gICAgICAgIH1cbiAgICB9KS5jYXRjaChmdW5jdGlvbihlcnIpIHtcbiAgICAgICAgX3RoaXMudXBkYXRlUXVlcnkocXVlcnksIHsgcmVmcmVzaGluZzogZmFsc2UgfSk7XG4gICAgfSk7XG59O1xuXG4vKipcbiAqIFJlcGVyZm9ybSBhbiBxdWVyeSBmb3IgYSBwYWdlIG9mIG9iamVjdHMsIHRyaWdnZXJpbmcgYW4gb25DaGFuZ2UgZXZlbnQgaWZcbiAqIHRoZSBsaXN0IGlzIGRpZmZlcmVudCBmcm9tIHRoZSBvbmUgZmV0Y2hlZCBwcmV2aW91c2x5LlxuICpcbiAqIEBwYXJhbSAge09iamVjdH0gcXVlcnlcbiAqL1xucHJvdG90eXBlLnJlZnJlc2hQYWdlID0gZnVuY3Rpb24ocXVlcnkpIHtcbiAgICBpZiAocXVlcnkucmVmcmVzaGluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKCdSZWZyZXNoaW5nIHBhZ2UnLCBxdWVyeS51cmwpO1xuICAgIHRoaXMudXBkYXRlUXVlcnkocXVlcnksIHsgcmVmcmVzaGluZzogdHJ1ZSB9KTtcblxuICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgdmFyIHJldHJpZXZhbFRpbWUgPSBnZXRUaW1lKCk7XG4gICAgdmFyIHBhZ2VVUkwgPSBhdHRhY2hQYWdlTnVtYmVyKHF1ZXJ5LnVybCwgcXVlcnkucGFnZSk7XG4gICAgdGhpcy5nZXQocGFnZVVSTCkudGhlbihmdW5jdGlvbihyZXNwb25zZSkge1xuICAgICAgICB2YXIgb2JqZWN0cyA9IHJlc3BvbnNlLnJlc3VsdHM7XG4gICAgICAgIHZhciBjaGFuZ2VkID0gdHJ1ZTtcbiAgICAgICAgaWYgKHJlcGxhY2VJZGVudGlmaWNhbE9iamVjdHMob2JqZWN0cywgcXVlcnkub2JqZWN0cykpIHtcbiAgICAgICAgICAgIG9iamVjdHMgPSBxdWVyeS5vYmplY3RzO1xuICAgICAgICAgICAgY2hhbmdlZCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIF90aGlzLnVwZGF0ZVF1ZXJ5KHF1ZXJ5LCB7XG4gICAgICAgICAgICBvYmplY3RzOiBvYmplY3RzLFxuICAgICAgICAgICAgcHJvbWlzZTogUHJvbWlzZS5yZXNvbHZlKG9iamVjdHMpLFxuICAgICAgICAgICAgcmV0cmlldmFsVGltZTogcmV0cmlldmFsVGltZSxcbiAgICAgICAgICAgIHJlZnJlc2hpbmc6IGZhbHNlLFxuICAgICAgICAgICAgZGlydHk6IGZhbHNlLFxuICAgICAgICB9KVxuICAgICAgICBpZiAoY2hhbmdlZCkge1xuICAgICAgICAgICAgX3RoaXMudHJpZ2dlckV2ZW50KG5ldyBSZWxha3NEamFuZ29EYXRhU291cmNlRXZlbnQoJ2NoYW5nZScsIF90aGlzKSk7XG4gICAgICAgIH1cbiAgICB9KS5jYXRjaChmdW5jdGlvbihlcnIpIHtcbiAgICAgICAgX3RoaXMudXBkYXRlUXVlcnkocXVlcnksIHsgcmVmcmVzaGluZzogZmFsc2UgfSk7XG4gICAgfSk7XG59O1xuXG4vKipcbiAqIFJlcGVyZm9ybSBhbiBxdWVyeSBmb3IgYSBsaXN0IG9mIG9iamVjdHMsIHRyaWdnZXJpbmcgYW4gb25DaGFuZ2UgZXZlbnQgaWZcbiAqIHRoZSBsaXN0IGlzIGRpZmZlcmVudCBmcm9tIHRoZSBvbmUgZmV0Y2hlZCBwcmV2aW91c2x5LlxuICpcbiAqIEBwYXJhbSAge09iamVjdH0gcXVlcnlcbiAqL1xucHJvdG90eXBlLnJlZnJlc2hMaXN0ID0gZnVuY3Rpb24ocXVlcnkpIHtcbiAgICBpZiAocXVlcnkucmVmcmVzaGluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKCdSZWZyZXNoaW5nIGxpc3QnLCBxdWVyeS51cmwpO1xuICAgIHRoaXMudXBkYXRlUXVlcnkocXVlcnksIHsgcmVmcmVzaGluZzogdHJ1ZSB9KTtcblxuICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgaWYgKHF1ZXJ5Lm5leHRQYWdlKSB7XG4gICAgICAgIC8vIHVwZGF0aW5nIHBhZ2luYXRlZCBsaXN0XG4gICAgICAgIC8vIHdhaXQgZm9yIGFueSBjYWxsIHRvIG1vcmUoKSB0byBmaW5pc2ggZmlyc3RcbiAgICAgICAgd2FpdEZvck5leHRQYWdlKHF1ZXJ5KS50aGVuKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgLy8gc3VwcHJlc3MgZmV0Y2hpbmcgb2YgYWRkaXRpb25hbCBwYWdlcyBmb3IgdGhlIHRpbWUgYmVpbmdcbiAgICAgICAgICAgIHZhciBvbGRPYmplY3RzID0gcXVlcnkub2JqZWN0cztcbiAgICAgICAgICAgIHZhciBtb3JlUHJvbWlzZSwgbW9yZVJlc29sdmUsIG1vcmVSZWplY3Q7XG4gICAgICAgICAgICB2YXIgZmV0Y2hNb3JlQWZ0ZXJ3YXJkID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFtb3JlUHJvbWlzZSkge1xuICAgICAgICAgICAgICAgICAgICBtb3JlUHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbW9yZVJlc29sdmUgPSByZXNvbHZlO1xuICAgICAgICAgICAgICAgICAgICAgICAgbW9yZVJlamVjdCA9IHJlamVjdDtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBtb3JlUHJvbWlzZTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBvbGRPYmplY3RzLm1vcmUgPSBmZXRjaE1vcmVBZnRlcndhcmQ7XG5cbiAgICAgICAgICAgIHZhciByZWZyZXNoZWRPYmplY3RzO1xuICAgICAgICAgICAgdmFyIHBhZ2VSZW1haW5pbmcgPSBxdWVyeS5uZXh0UGFnZSAtIDE7XG4gICAgICAgICAgICB2YXIgbmV4dFVSTCA9IHF1ZXJ5LnVybDtcblxuICAgICAgICAgICAgdmFyIHJlZnJlc2hOZXh0UGFnZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBfdGhpcy5nZXQobmV4dFVSTCkudGhlbihmdW5jdGlvbihyZXNwb25zZSkge1xuICAgICAgICAgICAgICAgICAgICBwYWdlUmVtYWluaW5nLS07XG4gICAgICAgICAgICAgICAgICAgIG5leHRVUkwgPSByZXNwb25zZS5uZXh0O1xuICAgICAgICAgICAgICAgICAgICByZWZyZXNoZWRPYmplY3RzID0gYXBwZW5kT2JqZWN0cyhyZWZyZXNoZWRPYmplY3RzLCByZXNwb25zZS5yZXN1bHRzKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRvdGFsID0gcmVzcG9uc2UuY291bnQ7XG4gICAgICAgICAgICAgICAgICAgIHZhciBvYmplY3RzID0gam9pbk9iamVjdExpc3RzKHJlZnJlc2hlZE9iamVjdHMsIG9sZE9iamVjdHMpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgY2hhbmdlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIG9iamVjdHMubW9yZSA9IGZldGNoTW9yZUFmdGVyd2FyZDtcbiAgICAgICAgICAgICAgICAgICAgb2JqZWN0cy50b3RhbCA9IHRvdGFsO1xuICAgICAgICAgICAgICAgICAgICBpZiAocmVwbGFjZUlkZW50aWZpY2FsT2JqZWN0cyhvYmplY3RzLCBxdWVyeS5vYmplY3RzKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgb2JqZWN0cyA9IHF1ZXJ5Lm9iamVjdHM7XG4gICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2VkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy8gc2V0IHF1ZXJ5Lm5leHRVUkwgdG8gdGhlIFVSTCBnaXZlbiBieSB0aGUgc2VydmVyXG4gICAgICAgICAgICAgICAgICAgIC8vIGluIHRoZSBldmVudCB0aGF0IG5ldyBwYWdlcyBoYXZlIGJlY29tZSBhdmFpbGFibGVcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMudXBkYXRlUXVlcnkocXVlcnksIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9iamVjdHM6IG9iamVjdHMsXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9taXNlOiBQcm9taXNlLnJlc29sdmUob2JqZWN0cyksXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXh0VVJMOiAocGFnZVJlbWFpbmluZyA9PT0gMCkgPyBuZXh0VVJMIDogcXVlcnkubmV4dFVSTCxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjaGFuZ2VkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy50cmlnZ2VyRXZlbnQobmV3IFJlbGFrc0RqYW5nb0RhdGFTb3VyY2VFdmVudCgnY2hhbmdlJywgX3RoaXMpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyBrZWVwIGdvaW5nIHVudGlsIGFsbCBwYWdlcyBoYXZlIGJlZW4gdXBkYXRlZFxuICAgICAgICAgICAgICAgICAgICBpZiAocGFnZVJlbWFpbmluZyA+IDAgJiYgbmV4dFVSTCAmJiBxdWVyeS5uZXh0VVJMICE9PSBuZXh0VVJMKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVmcmVzaE5leHRQYWdlKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIHZhciByZXRyaWV2YWxUaW1lID0gZ2V0VGltZSgpO1xuICAgICAgICAgICAgcmVmcmVzaE5leHRQYWdlKCkudGhlbihmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAvLyB3ZSdyZSBkb25lLS1yZWVuYWJsZSBmZXRjaGluZyBvZiBhZGRpdGlvbmFsIHBhZ2VzXG4gICAgICAgICAgICAgICAgaWYgKHF1ZXJ5Lm5leHRVUkwpIHtcbiAgICAgICAgICAgICAgICAgICAgcXVlcnkub2JqZWN0cy5tb3JlID0gX3RoaXMuZmV0Y2hOZXh0UGFnZS5iaW5kKF90aGlzLCBxdWVyeSwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5Lm9iamVjdHMubW9yZSA9IF90aGlzLmZldGNoTm9Nb3JlLmJpbmQoX3RoaXMsIHF1ZXJ5KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gdHJpZ2dlciBpdCBpZiBtb3JlKCkgaGFkIGJlZW4gY2FsbGVkXG4gICAgICAgICAgICAgICAgaWYgKG1vcmVQcm9taXNlKSB7XG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5Lm9iamVjdHMubW9yZSgpLnRoZW4obW9yZVJlc29sdmUsIG1vcmVSZWplY3QpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBfdGhpcy51cGRhdGVRdWVyeShxdWVyeSwge1xuICAgICAgICAgICAgICAgICAgICByZXRyaWV2YWxUaW1lOiByZXRyaWV2YWxUaW1lLFxuICAgICAgICAgICAgICAgICAgICByZWZyZXNoaW5nOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgZGlydHk6IGZhbHNlLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSkuY2F0Y2goZnVuY3Rpb24oZXJyKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMudXBkYXRlUXVlcnkocXVlcnksIHsgcmVmcmVzaGluZzogZmFsc2UgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgLy8gdXBkYXRpbmcgdW4tcGFnaW5hdGVkIGxpc3RcbiAgICAgICAgdmFyIHJldHJpZXZhbFRpbWUgPSBnZXRUaW1lKCk7XG4gICAgICAgIHRoaXMuZ2V0KHF1ZXJ5LnVybCkudGhlbihmdW5jdGlvbihyZXNwb25zZSkge1xuICAgICAgICAgICAgdmFyIG9iamVjdHMgPSByZXNwb25zZTtcbiAgICAgICAgICAgIHZhciBjaGFuZ2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIGlmIChyZXBsYWNlSWRlbnRpZmljYWxPYmplY3RzKG9iamVjdHMsIHF1ZXJ5Lm9iamVjdHMpKSB7XG4gICAgICAgICAgICAgICAgb2JqZWN0cyA9IHF1ZXJ5Lm9iamVjdHM7XG4gICAgICAgICAgICAgICAgY2hhbmdlZCA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb2JqZWN0cy5tb3JlID0gX3RoaXMuZmV0Y2hOb01vcmUuYmluZCh0aGlzLCBxdWVyeSk7XG4gICAgICAgICAgICBvYmplY3RzLnRvdGFsID0gb2JqZWN0cy5sZW5ndGg7XG4gICAgICAgICAgICBfdGhpcy51cGRhdGVRdWVyeShxdWVyeSwge1xuICAgICAgICAgICAgICAgIG9iamVjdHM6IG9iamVjdHMsXG4gICAgICAgICAgICAgICAgcHJvbWlzZTogUHJvbWlzZS5yZXNvbHZlKG9iamVjdHMpLFxuICAgICAgICAgICAgICAgIHJldHJpZXZhbFRpbWU6IHJldHJpZXZhbFRpbWUsXG4gICAgICAgICAgICAgICAgcmVmcmVzaGluZzogZmFsc2UsXG4gICAgICAgICAgICAgICAgZGlydHk6IGZhbHNlLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAoY2hhbmdlZCkge1xuICAgICAgICAgICAgICAgIF90aGlzLnRyaWdnZXJFdmVudChuZXcgUmVsYWtzRGphbmdvRGF0YVNvdXJjZUV2ZW50KCdjaGFuZ2UnLCBfdGhpcykpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KS5jYXRjaChmdW5jdGlvbihlcnIpIHtcbiAgICAgICAgICAgIF90aGlzLnVwZGF0ZVF1ZXJ5KHF1ZXJ5LCB7IHJlZnJlc2hpbmc6IGZhbHNlIH0pO1xuICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICB9KTtcbiAgICB9XG59O1xuXG4vKipcbiAqIEluc2VydCBhbiBvYmplY3QgaW50byByZW1vdGUgZGF0YWJhc2VcbiAqXG4gKiBAcGFyYW0gIHtTdHJpbmd9IGZvbGRlclVSTFxuICogQHBhcmFtICB7T2JqZWN0fSBvYmplY3RcbiAqXG4gKiBAcmV0dXJuIHtQcm9taXNlPE9iamVjdD59XG4gKi9cbnByb3RvdHlwZS5pbnNlcnRPbmUgPSBmdW5jdGlvbihmb2xkZXJVUkwsIG9iamVjdCkge1xuICAgIHJldHVybiB0aGlzLmluc2VydE11bHRpcGxlKGZvbGRlclVSTCwgWyBvYmplY3QgXSkudGhlbigoaW5zZXJ0ZWRPYmplY3RzKSA9PiB7XG4gICAgICAgIHJldHVybiBpbnNlcnRlZE9iamVjdHNbMF07XG4gICAgfSk7XG59O1xuXG4vKipcbiAqIEluc2VydCBtdWx0aXBsZSBvYmplY3RzIGludG8gcmVtb3RlIGRhdGFiYXNlXG4gKlxuICogQHBhcmFtICB7U3RyaW5nfSBmb2xkZXJVUkxcbiAqIEBwYXJhbSAge0FycmF5PE9iamVjdD59IG9iamVjdHNcbiAqXG4gKiBAcmV0dXJuIHtQcm9taXNlPEFycmF5Pn1cbiAqL1xucHJvdG90eXBlLmluc2VydE11bHRpcGxlID0gZnVuY3Rpb24oZm9sZGVyVVJMLCBvYmplY3RzKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcbiAgICB2YXIgZm9sZGVyQWJzVVJMID0gdGhpcy5yZXNvbHZlVVJMKGZvbGRlclVSTCk7XG4gICAgdmFyIHByb21pc2VzID0gW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBvYmplY3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHByb21pc2VzLnB1c2godGhpcy5wb3N0KGZvbGRlckFic1VSTCwgb2JqZWN0c1tpXSkpO1xuICAgIH1cbiAgICByZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpLnRoZW4oZnVuY3Rpb24oaW5zZXJ0ZWRPYmplY3RzKSB7XG4gICAgICAgIC8vIHNvcnQgdGhlIG5ld2x5IGNyZWF0ZWQgb2JqZWN0c1xuICAgICAgICB2YXIgY2hhbmdlZCA9IGZhbHNlO1xuICAgICAgICBfdGhpcy5xdWVyaWVzLmZvckVhY2goZnVuY3Rpb24ocXVlcnkpIHtcbiAgICAgICAgICAgIGluc2VydGVkT2JqZWN0cy5zb21lKGZ1bmN0aW9uKGluc2VydGVkT2JqZWN0KSB7XG4gICAgICAgICAgICAgICAgaWYgKHF1ZXJ5LnR5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIG9iamVjdCBxdWVyaWVzIGFyZW4ndCBhZmZlY3RlZCBieSBpbnNlcnRcbiAgICAgICAgICAgICAgICAgICAgLy8gbm8gcG9pbnQgaW4gbG9va2luZyBhdCBvdGhlciBvYmplY3RzXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocXVlcnkudHlwZSA9PT0gJ3BhZ2UnIHx8IHF1ZXJ5LnR5cGUgPT09ICdsaXN0Jykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgb2JqZWN0Rm9sZGVyVVJMID0gZ2V0T2JqZWN0Rm9sZGVyVVJMKGZvbGRlckFic1VSTCwgaW5zZXJ0ZWRPYmplY3QpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIW1hdGNoVVJMKHF1ZXJ5LnVybCwgb2JqZWN0Rm9sZGVyVVJMKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8vIGl0IGlzbid0IHBvc3NpYmxlIHRvIGluc2VydCBvYmplY3RzIGludG8gbXVsdGlwbGUgZm9sZGVyc1xuICAgICAgICAgICAgICAgICAgICAvLyBzaW11bHRhbmVvdXNseTsgY29kZSBpcyBpbXBsZW1lbnRlZCBhcyBzdWNoIG9ubHkgZm9yXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNpc3RlbmN5IHNha2VcbiAgICAgICAgICAgICAgICAgICAgdmFyIGluRm9sZGVyID0gcmVtb3ZlT2JqZWN0c091dHNpZGVGb2xkZXIoaW5zZXJ0ZWRPYmplY3RzLCBvYmplY3RGb2xkZXJVUkwpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgZGVmYXVsdEJlaGF2aW9yID0gJ3JlZnJlc2gnO1xuICAgICAgICAgICAgICAgICAgICBpZiAocnVuSG9vayhxdWVyeSwgJ2FmdGVySW5zZXJ0JywgaW5Gb2xkZXIsIGRlZmF1bHRCZWhhdmlvcikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoY2hhbmdlZCkge1xuICAgICAgICAgICAgX3RoaXMudHJpZ2dlckV2ZW50KG5ldyBSZWxha3NEamFuZ29EYXRhU291cmNlRXZlbnQoJ2NoYW5nZScsIF90aGlzKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGluc2VydGVkT2JqZWN0cztcbiAgICB9KTtcbn07XG5cbi8qKlxuICogVXBkYXRlIGFuIG9iamVjdFxuICpcbiAqIEBwYXJhbSAge1N0cmluZ30gZm9sZGVyVVJMXG4gKiBAcGFyYW0gIHtPYmplY3R9IG9iamVjdFxuICpcbiAqIEByZXR1cm4ge1Byb21pc2U8T2JqZWN0Pn1cbiAqL1xucHJvdG90eXBlLnVwZGF0ZU9uZSA9IGZ1bmN0aW9uKGZvbGRlclVSTCwgb2JqZWN0KSB7XG4gICAgLy8gYWxsb3cgZm9sZGVyVVJMIHRvIGJlIG9taXR0ZWRcbiAgICBpZiAob2JqZWN0ID09PSB1bmRlZmluZWQgJiYgZm9sZGVyVVJMIGluc3RhbmNlb2YgT2JqZWN0KSB7XG4gICAgICAgIG9iamVjdCA9IGZvbGRlclVSTDtcbiAgICAgICAgZm9sZGVyVVJMID0gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMudXBkYXRlTXVsdGlwbGUoZm9sZGVyVVJMLCBbIG9iamVjdCBdKS50aGVuKChyZXN1bHRzKSA9PiB7XG4gICAgICAgIHJldHVybiByZXN1bHRzWzBdO1xuICAgIH0pO1xufTtcblxuLyoqXG4gKiBTYXZlIG11bHRpcGxlIG9iamVjdHNcbiAqXG4gKiBAcGFyYW0gIHtTdHJpbmd9IGZvbGRlclVSTFxuICogQHBhcmFtICB7QXJyYXk8T2JqZWN0Pn0gb2JqZWN0c1xuICpcbiAqIEByZXR1cm4ge1Byb21pc2U8QXJyYXk+fVxuICovXG5wcm90b3R5cGUudXBkYXRlTXVsdGlwbGUgPSBmdW5jdGlvbihmb2xkZXJVUkwsIG9iamVjdHMpIHtcbiAgICAvLyBhbGxvdyBmb2xkZXJVUkwgdG8gYmUgb21pdHRlZFxuICAgIGlmIChvYmplY3RzID09PSB1bmRlZmluZWQgJiYgZm9sZGVyVVJMIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgICAgb2JqZWN0cyA9IGZvbGRlclVSTDtcbiAgICAgICAgZm9sZGVyVVJMID0gbnVsbDtcbiAgICB9XG4gICAgdmFyIF90aGlzID0gdGhpcztcbiAgICB2YXIgZm9sZGVyQWJzVVJMID0gdGhpcy5yZXNvbHZlVVJMKGZvbGRlclVSTCk7XG4gICAgdmFyIHByb21pc2VzID0gW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBvYmplY3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBvYmplY3QgPSBvYmplY3RzW2ldO1xuICAgICAgICB2YXIgYWJzVVJMID0gZ2V0T2JqZWN0VVJMKGZvbGRlckFic1VSTCwgb2JqZWN0KTtcbiAgICAgICAgcHJvbWlzZXMucHVzaChhYnNVUkwgPyB0aGlzLnB1dChhYnNVUkwsIG9iamVjdCkgOiBudWxsKTtcbiAgICB9XG4gICAgcmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VzKS50aGVuKGZ1bmN0aW9uKHVwZGF0ZWRPYmplY3RzKSB7XG4gICAgICAgIHZhciBjaGFuZ2VkID0gZmFsc2U7XG4gICAgICAgIF90aGlzLnF1ZXJpZXMuZm9yRWFjaChmdW5jdGlvbihxdWVyeSkge1xuICAgICAgICAgICAgdXBkYXRlZE9iamVjdHMuc29tZShmdW5jdGlvbih1cGRhdGVkT2JqZWN0KSB7XG4gICAgICAgICAgICAgICAgaWYgKHF1ZXJ5LnR5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBvYmplY3RVUkwgPSBnZXRPYmplY3RVUkwoZm9sZGVyQWJzVVJMLCB1cGRhdGVkT2JqZWN0KTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFtYXRjaFVSTChxdWVyeS51cmwsIG9iamVjdFVSTCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB2YXIgZGVmYXVsdEJlaGF2aW9yID0gJ3JlcGxhY2UnO1xuICAgICAgICAgICAgICAgICAgICBpZiAocnVuSG9vayhxdWVyeSwgJ2FmdGVyVXBkYXRlJywgdXBkYXRlZE9iamVjdCwgZGVmYXVsdEJlaGF2aW9yKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2hhbmdlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChxdWVyeS50eXBlID09PSAncGFnZScgfHwgcXVlcnkudHlwZSA9PT0gJ2xpc3QnKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBvYmplY3RGb2xkZXJVUkwgPSBnZXRPYmplY3RGb2xkZXJVUkwoZm9sZGVyQWJzVVJMLCB1cGRhdGVkT2JqZWN0KTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFtYXRjaFVSTChxdWVyeS51cmwsIG9iamVjdEZvbGRlclVSTCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyBmaWx0ZXIgb3V0IG9iamVjdHMgdGhhdCBhcmVuJ3QgaW4gdGhlIHNhbWUgZm9sZGVyXG4gICAgICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgICAgIC8vIG9ubHkgcmVsZXZhbnQgd2hlbiBoeXBlcmxpbmsta2V5cyBhcmUgdXNlZCBhbmRcbiAgICAgICAgICAgICAgICAgICAgLy8gb2JqZWN0cyBpbiBkaWZmZXJlbnQgZm9sZGVycyBhcmUgdXBkYXRlZCBhdFxuICAgICAgICAgICAgICAgICAgICAvLyB0aGUgc2FtZSB0aW1lIChmb2xkZXJVUkwgaGFzIHRvIGJlIG51bGwpXG4gICAgICAgICAgICAgICAgICAgIHZhciBpbkZvbGRlciA9IHJlbW92ZU9iamVjdHNPdXRzaWRlRm9sZGVyKHVwZGF0ZWRPYmplY3RzLCBvYmplY3RGb2xkZXJVUkwpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgZGVmYXVsdEJlaGF2aW9yID0gJ3JlZnJlc2gnO1xuICAgICAgICAgICAgICAgICAgICBpZiAocnVuSG9vayhxdWVyeSwgJ2FmdGVyVXBkYXRlJywgaW5Gb2xkZXIsIGRlZmF1bHRCZWhhdmlvcikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoY2hhbmdlZCkge1xuICAgICAgICAgICAgX3RoaXMudHJpZ2dlckV2ZW50KG5ldyBSZWxha3NEamFuZ29EYXRhU291cmNlRXZlbnQoJ2NoYW5nZScsIF90aGlzKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHVwZGF0ZWRPYmplY3RzO1xuICAgIH0pO1xufTtcblxucHJvdG90eXBlLmRlbGV0ZU9uZSA9IGZ1bmN0aW9uKHVybCwgb2JqZWN0KSB7XG4gICAgcmV0dXJuIHRoaXMuZGVsZXRlTXVsdGlwbGUodXJsLCBbIG9iamVjdCBdKS50aGVuKChyZXN1bHRzKSA9PiB7XG4gICAgICAgIHJldHVybiByZXN1bHRzWzBdO1xuICAgIH0pO1xufTtcblxucHJvdG90eXBlLmRlbGV0ZU11bHRpcGxlID0gZnVuY3Rpb24oZm9sZGVyVVJMLCBvYmplY3RzKSB7XG4gICAgLy8gYWxsb3cgZm9sZGVyVVJMIHRvIGJlIG9taXR0ZWRcbiAgICBpZiAob2JqZWN0cyA9PT0gdW5kZWZpbmVkICYmIGZvbGRlclVSTCBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgIG9iamVjdHMgPSBmb2xkZXJVUkw7XG4gICAgICAgIGZvbGRlclVSTCA9IG51bGw7XG4gICAgfVxuICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgdmFyIGZvbGRlckFic1VSTCA9IHRoaXMucmVzb2x2ZVVSTChmb2xkZXJVUkwpO1xuICAgIHZhciBwcm9taXNlcyA9IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgb2JqZWN0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgb2JqZWN0ID0gb2JqZWN0c1tpXTtcbiAgICAgICAgdmFyIGFic1VSTCA9IGdldE9iamVjdFVSTChmb2xkZXJBYnNVUkwsIG9iamVjdCk7XG4gICAgICAgIHZhciBwcm9taXNlID0gbnVsbDtcbiAgICAgICAgaWYgKGFic1VSTCkge1xuICAgICAgICAgICAgcHJvbWlzZSA9IHRoaXMuZGVsZXRlKGFic1VSTCwgb2JqZWN0KS50aGVuKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBvYmplY3Q7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBwcm9taXNlcy5wdXNoKHByb21pc2UpO1xuICAgIH1cbiAgICByZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpLnRoZW4oZnVuY3Rpb24oZGVsZXRlZE9iamVjdHMpIHtcbiAgICAgICAgdmFyIGNoYW5nZWQgPSBmYWxzZTtcbiAgICAgICAgdmFyIHF1ZXJpZXMgPSBfdGhpcy5xdWVyaWVzLmZpbHRlcihmdW5jdGlvbihxdWVyeSkge1xuICAgICAgICAgICAgdmFyIGtlZXAgPSB0cnVlO1xuICAgICAgICAgICAgZGVsZXRlZE9iamVjdHMuc29tZShmdW5jdGlvbihkZWxldGVkT2JqZWN0KSB7XG4gICAgICAgICAgICAgICAgaWYgKHF1ZXJ5LnR5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBvYmplY3RVUkwgPSBnZXRPYmplY3RVUkwoZm9sZGVyQWJzVVJMLCBkZWxldGVkT2JqZWN0KTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFtYXRjaFVSTChxdWVyeS51cmwsIG9iamVjdFVSTCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB2YXIgZGVmYXVsdEJlaGF2aW9yID0gJ3JlbW92ZSc7XG4gICAgICAgICAgICAgICAgICAgIGlmIChydW5Ib29rKHF1ZXJ5LCAnYWZ0ZXJEZWxldGUnLCBkZWxldGVkT2JqZWN0LCBkZWZhdWx0QmVoYXZpb3IpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocXVlcnkuZGlydHkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZWVwID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2VkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHF1ZXJ5LnR5cGUgPT09ICdwYWdlJyB8fCBxdWVyeS50eXBlID09PSAnbGlzdCcpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG9iamVjdEZvbGRlclVSTCA9IGdldE9iamVjdEZvbGRlclVSTChmb2xkZXJBYnNVUkwsIGRlbGV0ZWRPYmplY3QpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIW1hdGNoVVJMKHF1ZXJ5LnVybCwgb2JqZWN0Rm9sZGVyVVJMKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8vIHNlZSBjb21tZW50IGluIHVwZGF0ZU11bHRpcGxlKClcbiAgICAgICAgICAgICAgICAgICAgdmFyIGluRm9sZGVyID0gcmVtb3ZlT2JqZWN0c091dHNpZGVGb2xkZXIoZGVsZXRlZE9iamVjdHMsIG9iamVjdEZvbGRlclVSTCk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBkZWZhdWx0QmVoYXZpb3IgPSAocXVlcnkudHlwZSA9PT0gJ2xpc3QnKSA/ICdyZW1vdmUnIDogJ3JlZnJlc2gnO1xuICAgICAgICAgICAgICAgICAgICBpZiAocnVuSG9vayhxdWVyeSwgJ2FmdGVyRGVsZXRlJywgaW5Gb2xkZXIsIGRlZmF1bHRCZWhhdmlvcikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIGtlZXA7XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoY2hhbmdlZCkge1xuICAgICAgICAgICAgX3RoaXMucXVlcmllcyA9IHF1ZXJpZXM7XG4gICAgICAgICAgICBfdGhpcy50cmlnZ2VyRXZlbnQobmV3IFJlbGFrc0RqYW5nb0RhdGFTb3VyY2VFdmVudCgnY2hhbmdlJywgX3RoaXMpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZGVsZXRlZE9iamVjdHM7XG4gICAgfSk7XG59O1xuXG4vKipcbiAqIEZpbmQgYW4gZXhpc3RpbmcgcXVlcnlcbiAqXG4gKiBAcGFyYW0gIHtPYmplY3R9IHByb3BzXG4gKlxuICogQHJldHVybiB7T2JqZWN0fHVuZGVmaW5lZH1cbiAqL1xucHJvdG90eXBlLmZpbmRRdWVyeSA9IGZ1bmN0aW9uKHByb3BzKSB7XG4gICAgcmV0dXJuIHRoaXMucXVlcmllcy5maW5kKGZ1bmN0aW9uKHF1ZXJ5KSB7XG4gICAgICAgIHJldHVybiBtYXRjaFF1ZXJ5KHF1ZXJ5LCBwcm9wcyk7XG4gICAgfSk7XG59O1xuXG4vKipcbiAqIERlcml2ZSBhIHF1ZXJ5IGZvciBhbiBpdGVtIGZyb20gYW4gZXhpc3RpbmcgZGlyZWN0b3J5IHF1ZXJ5XG4gKlxuICogQHBhcmFtICB7T2JqZWN0fSBwcm9wc1xuICpcbiAqIEByZXR1cm4ge09iamVjdHx1bmRlZmluZWR9XG4gKi9cbnByb3RvdHlwZS5kZXJpdmVRdWVyeSA9IGZ1bmN0aW9uKHByb3BzKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcbiAgICB2YXIgb2JqZWN0O1xuICAgIHZhciBmb2xkZXJVUkwgPSBnZXRGb2xkZXJVUkwocHJvcHMudXJsKTtcbiAgICB0aGlzLnF1ZXJpZXMuc29tZShmdW5jdGlvbihxdWVyeSkge1xuICAgICAgICBpZiAocXVlcnkudHlwZSA9PT0gJ3BhZ2UnIHx8IHF1ZXJ5LnR5cGUgPT09ICdsaXN0Jykge1xuICAgICAgICAgICAgdmFyIGFiYnJldmlhdGVkID0gZmFsc2U7XG4gICAgICAgICAgICBpZiAoX3RoaXMub3B0aW9ucy5hYmJyZXZpYXRlZEZvbGRlckNvbnRlbnRzKSB7XG4gICAgICAgICAgICAgICAgYWJicmV2aWF0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChxdWVyeS5vcHRpb25zLmFiYnJldmlhdGVkKSB7XG4gICAgICAgICAgICAgICAgYWJicmV2aWF0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFhYmJyZXZpYXRlZCkge1xuICAgICAgICAgICAgICAgIGlmIChtYXRjaFVSTChxdWVyeS51cmwsIGZvbGRlclVSTCkpIHtcbiAgICAgICAgICAgICAgICAgICAgcXVlcnkub2JqZWN0cy5zb21lKGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpdGVtLnVybCA9PT0gcHJvcHMudXJsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqZWN0ID0gaXRlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAhIW9iamVjdDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBpZiAob2JqZWN0KSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB0eXBlOiAnb2JqZWN0JyxcbiAgICAgICAgICAgIHVybDogcHJvcHMudXJsLFxuICAgICAgICAgICAgcHJvbWlzZTogUHJvbWlzZS5yZXNvbHZlKG9iamVjdCksXG4gICAgICAgICAgICBvYmplY3Q6IG9iamVjdFxuICAgICAgICB9O1xuICAgIH1cbn1cblxuLyoqXG4gKiBBZGQgYSBxdWVyeVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBxdWVyeVxuICovXG5wcm90b3R5cGUuYWRkUXVlcnkgPSBmdW5jdGlvbihxdWVyeSkge1xuICAgIHRoaXMucXVlcmllcyA9IFsgcXVlcnkgXS5jb25jYXQodGhpcy5xdWVyaWVzKTtcbn07XG5cbi8qKlxuICogVXBkYXRlIGEgcXVlcnlcbiAqXG4gKiBAcGFyYW0gIHtPYmplY3R9IHF1ZXJ5XG4gKiBAcGFyYW0gIHtPYmplY3R9IHByb3BzXG4gKi9cbnByb3RvdHlwZS51cGRhdGVRdWVyeSA9IGZ1bmN0aW9uKHF1ZXJ5LCBwcm9wcykge1xuICAgIGZvciAodmFyIG5hbWUgaW4gcHJvcHMpIHtcbiAgICAgICAgcXVlcnlbbmFtZV0gPSBwcm9wc1tuYW1lXTtcbiAgICB9XG59O1xuXG4vKipcbiAqIFJldHVybiBhIHByb21pc2UgdGhhdCB3aWxsIGJlIHJlc29sdmVkIHdoZW4gYXV0aGVudGljYXRpb24gb2NjdXJzIG9yXG4gKiBhdHRlbXB0IGlzIGNhbmNlbGVkXG4gKlxuICogQHBhcmFtICB7U3RyaW5nfSBhYnNVUkxcbiAqXG4gKiBAcmV0dXJuIHtQcm9taXNlPEJvb2xlYW4+fVxuICovXG5wcm90b3R5cGUucmVxdWVzdEF1dGhlbnRpY2F0aW9uID0gZnVuY3Rpb24oYWJzVVJMKSB7XG4gICAgdmFyIHByb21pc2U7XG4gICAgdGhpcy5hdXRoZW50aWNhdGlvbnMuc29tZShmdW5jdGlvbihhdXRoZW50aWNhdGlvbikge1xuICAgICAgICBpZiAoYXV0aGVudGljYXRpb24udXJsID09PSBhYnNVUkwpIHtcbiAgICAgICAgICAgIHByb21pc2UgPSBhdXRoZW50aWNhdGlvbi5wcm9taXNlO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBpZiAoIXByb21pc2UpIHtcbiAgICAgICAgLy8gYWRkIHRoZSBxdWVyeSBwcmlvciB0byB0cmlnZ2VyaW5nIHRoZSBldmVudCwgc2luY2UgdGhlIGhhbmRsZXJcbiAgICAgICAgLy8gbWF5IGNhbGwgYXV0aG9yaXplKClcbiAgICAgICAgdmFyIHJlc29sdmU7XG4gICAgICAgIHZhciBhdXRoZW50aWNhdGlvbiA9IHtcbiAgICAgICAgICAgIHVybDogYWJzVVJMLFxuICAgICAgICAgICAgcHJvbWlzZTogbmV3IFByb21pc2UoZnVuY3Rpb24ocikgeyByZXNvbHZlID0gciB9KSxcbiAgICAgICAgICAgIHJlc29sdmU6IHJlc29sdmUsXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuYXV0aGVudGljYXRpb25zLnB1c2goYXV0aGVudGljYXRpb24pO1xuXG4gICAgICAgIHZhciBhdXRoZW50aWNhdGlvbkV2ZW50ID0gbmV3IFJlbGFrc0RqYW5nb0RhdGFTb3VyY2VFdmVudCgnYXV0aGVudGljYXRpb24nLCB0aGlzLCB7XG4gICAgICAgICAgICB1cmw6IGFic1VSTFxuICAgICAgICB9KTtcbiAgICAgICAgdmFyIGV2ZW50SGFuZGxlZCA9IHRoaXMudHJpZ2dlckV2ZW50KGF1dGhlbnRpY2F0aW9uRXZlbnQpO1xuICAgICAgICBwcm9taXNlID0gYXV0aGVudGljYXRpb25FdmVudC53YWl0Rm9yRGVjaXNpb24oKS50aGVuKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgaWYgKGV2ZW50SGFuZGxlZCAmJiAhYXV0aGVudGljYXRpb25FdmVudC5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICAgICAgICAgICAgLy8gd2FpdCBmb3IgYXV0aGVudGljYXRlKCkgdG8gZ2V0IGNhbGxlZFxuICAgICAgICAgICAgICAgIC8vIGlmIGF1dGhvcml6ZSgpIHdhcyBjYWxsZWQsIHRoZSBwcm9taXNlIHdvdWxkIGJlIHJlc29sdmVkIGFscmVhZHlcbiAgICAgICAgICAgICAgICByZXR1cm4gYXV0aGVudGljYXRpb24ucHJvbWlzZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gdGFrZSBpdCBiYWNrIG91dFxuICAgICAgICAgICAgICAgIHZhciBpbmRleCA9IHRoaXMuYXV0aGVudGljYXRpb25zLmluZGV4T2YoYXV0aGVudGljYXRpb24pO1xuICAgICAgICAgICAgICAgIHRoaXMuYXV0aGVudGljYXRpb25zLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIHByb21pc2U7XG59O1xuXG4vKipcbiAqIFBvc3QgdXNlciBjcmVkZW50aWFscyB0byBnaXZlbiBVUkwgaW4gZXhwZWN0YW50IG9mIGEgYXV0aG9yaXphdGlvbiB0b2tlblxuICpcbiAqIEBwYXJhbSAge1N0cmluZ30gbG9naW5VUkxcbiAqIEBwYXJhbSAge09iamVjdH0gY3JlZGVudGlhbHNcbiAqIEBwYXJhbSAge0FycmF5PFN0cmluZz59IGFsbG93VVJMc1xuICpcbiAqIEByZXR1cm4ge1Byb21pc2U8Qm9vbGVhbj59XG4gKi9cbnByb3RvdHlwZS5hdXRoZW50aWNhdGUgPSBmdW5jdGlvbihsb2dpblVSTCwgY3JlZGVudGlhbHMsIGFsbG93VVJMcykge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgdmFyIGxvZ2luQWJzVVJMID0gdGhpcy5yZXNvbHZlVVJMKGxvZ2luVVJMKTtcbiAgICByZXR1cm4gdGhpcy5wb3N0KGxvZ2luQWJzVVJMLCBjcmVkZW50aWFscykudGhlbihmdW5jdGlvbihyZXNwb25zZSkge1xuICAgICAgICB2YXIgdG9rZW4gPSAocmVzcG9uc2UpID8gcmVzcG9uc2Uua2V5IDogbnVsbDtcbiAgICAgICAgaWYgKCF0b2tlbikge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdObyBhdXRob3JpemF0aW9uIHRva2VuJyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIF90aGlzLmF1dGhvcml6ZShsb2dpblVSTCwgdG9rZW4sIGFsbG93VVJMcyk7XG4gICAgfSk7XG59O1xuXG4vKipcbiAqIEFjY2VwdCBhbiBhdXRob3JpemF0aW9uIHRva2VuLCByZXNvbHZpbmcgYW55IHBlbmRpbmcgYXV0aGVudGljYXRpb24gcHJvbWlzZXNcbiAqXG4gKiBAcGFyYW0gIHtTdHJpbmd9IGxvZ2luVVJMXG4gKiBAcGFyYW0gIHtTdHJpbmd9IHRva2VuXG4gKiBAcGFyYW0gIHtBcnJheTxTdHJpbmc+fSBhbGxvd1VSTHNcbiAqXG4gKiBAcmV0dXJuIHtQcm9taXNlPEJvb2xlYW4+fVxuICovXG5wcm90b3R5cGUuYXV0aG9yaXplID0gZnVuY3Rpb24obG9naW5VUkwsIHRva2VuLCBhbGxvd1VSTHMpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgIHZhciBsb2dpbkFic1VSTCA9IHRoaXMucmVzb2x2ZVVSTChsb2dpblVSTCk7XG4gICAgdmFyIGFsbG93QWJzVVJMcyA9IHRoaXMucmVzb2x2ZVVSTHMoYWxsb3dVUkxzIHx8IFsgJy8nIF0pO1xuICAgIHZhciBhdXRob3JpemF0aW9uRXZlbnQgPSBuZXcgUmVsYWtzRGphbmdvRGF0YVNvdXJjZUV2ZW50KCdhdXRob3JpemF0aW9uJywgdGhpcywge1xuICAgICAgICB1cmw6IGxvZ2luQWJzVVJMLFxuICAgICAgICB0b2tlbjogdG9rZW4sXG4gICAgfSk7XG4gICAgdGhpcy50cmlnZ2VyRXZlbnQoYXV0aG9yaXphdGlvbkV2ZW50KTtcbiAgICByZXR1cm4gYXV0aG9yaXphdGlvbkV2ZW50LndhaXRGb3JEZWNpc2lvbigpLnRoZW4oZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBhY2NlcHRhYmxlID0gIWF1dGhvcml6YXRpb25FdmVudC5kZWZhdWx0UHJldmVudGVkO1xuICAgICAgICBpZiAoYWNjZXB0YWJsZSkge1xuICAgICAgICAgICAgLy8gYWRkIGF1dGhvcml6YXRpb25cbiAgICAgICAgICAgIHZhciBhdXRob3JpemF0aW9uID0ge1xuICAgICAgICAgICAgICAgIHVybDogbG9naW5BYnNVUkwsXG4gICAgICAgICAgICAgICAgdG9rZW46IHRva2VuLFxuICAgICAgICAgICAgICAgIGFsbG93OiBhbGxvd0Fic1VSTHMsXG4gICAgICAgICAgICAgICAgZGVueTogW11cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICAvLyByZW1vdmUgcHJldmlvdXMgYXV0aG9yaXphdGlvblxuICAgICAgICAgICAgX3RoaXMuYXV0aG9yaXphdGlvbnMgPSBfdGhpcy5hdXRob3JpemF0aW9ucy5maWx0ZXIoZnVuY3Rpb24oYXV0aG9yaXphdGlvbikge1xuICAgICAgICAgICAgICAgIGF1dGhvcml6YXRpb24uYWxsb3cgPSBhdXRob3JpemF0aW9uLmFsbG93LmZpbHRlcihmdW5jdGlvbih1cmwpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChhbGxvd0Fic1VSTHMuaW5kZXhPZih1cmwpID09PSAtMSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChhdXRob3JpemF0aW9uLmFsbG93Lmxlbmd0aCA+IDApO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBfdGhpcy5hdXRob3JpemF0aW9ucy5wdXNoKGF1dGhvcml6YXRpb24pO1xuICAgICAgICB9XG4gICAgICAgIC8vIHJlc29sdmUgYW5kIHJlbW92ZSBhdXRoZW50aWNhdGlvbiBxdWVyeXNcbiAgICAgICAgX3RoaXMuYXV0aGVudGljYXRpb25zID0gX3RoaXMuYXV0aGVudGljYXRpb25zLmZpbHRlcihmdW5jdGlvbihhdXRoZW50aWNhdGlvbikge1xuICAgICAgICAgICAgaWYgKG1hdGNoQW55VVJMKGF1dGhlbnRpY2F0aW9uLnVybCwgYWxsb3dBYnNVUkxzKSkge1xuICAgICAgICAgICAgICAgIGF1dGhlbnRpY2F0aW9uLnJlc29sdmUoYWNjZXB0YWJsZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBhY2NlcHRhYmxlO1xuICAgIH0pO1xufTtcblxucHJvdG90eXBlLmdldEF1dGhvcml6YXRpb25Ub2tlbiA9IGZ1bmN0aW9uKHVybCkge1xuICAgIHZhciB0b2tlbjtcbiAgICB0aGlzLmF1dGhvcml6YXRpb25zLnNvbWUoZnVuY3Rpb24oYXV0aG9yaXphdGlvbikge1xuICAgICAgICBpZiAobWF0Y2hBbnlVUkwodXJsLCBhdXRob3JpemF0aW9uLmFsbG93KSkge1xuICAgICAgICAgICAgaWYgKCFtYXRjaEFueVVSTCh1cmwsIGF1dGhvcml6YXRpb24uZGVueSkpIHtcbiAgICAgICAgICAgICAgICB0b2tlbiA9IGF1dGhvcml6YXRpb24udG9rZW47XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gdG9rZW47XG59O1xuXG5wcm90b3R5cGUuY2FuY2VsQXV0aGVudGljYXRpb24gPSBmdW5jdGlvbihhbGxvd1VSTHMpIHtcbiAgICB2YXIgYWxsb3dBYnNVUkxzID0gdGhpcy5yZXNvbHZlVVJMcyhhbGxvd1VSTHMgfHwgWyAnLycgXSk7XG4gICAgdGhpcy5hdXRoZW50aWNhdGlvbnMgPSB0aGlzLmF1dGhlbnRpY2F0aW9ucy5maWx0ZXIoZnVuY3Rpb24oYXV0aGVudGljYXRpb24pIHtcbiAgICAgICAgaWYgKG1hdGNoQW55VVJMKGF1dGhlbnRpY2F0aW9uLnVybCwgYWxsb3dBYnNVUkxzKSkge1xuICAgICAgICAgICAgYXV0aGVudGljYXRpb24ucmVzb2x2ZShmYWxzZSk7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH0pO1xufTtcblxucHJvdG90eXBlLmNhbmNlbEF1dGhvcml6YXRpb24gPSBmdW5jdGlvbihkZW55VVJMcykge1xuICAgIHZhciBkZW55QWJzVVJMcyA9IHRoaXMucmVzb2x2ZVVSTHMoZGVueVVSTHMgfHwgWyAnLycgXSk7XG4gICAgdGhpcy5hdXRob3JpemF0aW9ucyA9IHRoaXMuYXV0aG9yaXphdGlvbnMuZmlsdGVyKGZ1bmN0aW9uKGF1dGhvcml6YXRpb24pIHtcbiAgICAgICAgYXV0aG9yaXphdGlvbi5hbGxvdyA9IGF1dGhvcml6YXRpb24uYWxsb3cuZmlsdGVyKGZ1bmN0aW9uKHVybCkge1xuICAgICAgICAgICAgcmV0dXJuIChkZW55VVJMcy5pbmRleE9mKHVybCkgPT09IC0xKTtcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIGFkZCB0byBkZW55IGxpc3QgaWYgaXQncyBzdGlsbCBhbGxvd2VkXG4gICAgICAgIGRlbnlBYnNVUkxzLmZvckVhY2goZnVuY3Rpb24odXJsKSB7XG4gICAgICAgICAgICBpZiAobWF0Y2hBbnlVUkwodXJsLCBhdXRob3JpemF0aW9uLmFsbG93KSkge1xuICAgICAgICAgICAgICAgIGF1dGhvcml6YXRpb24uZGVueS5wdXNoKHVybCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gKGF1dGhvcml6YXRpb24uYWxsb3cubGVuZ3RoID4gMCk7XG4gICAgfSk7XG59O1xuXG5wcm90b3R5cGUucmV2b2tlQXV0aG9yaXphdGlvbiA9IGZ1bmN0aW9uKGxvZ291dFVSTCkge1xuICAgIHZhciBsb2dvdXRBYnNVUkwgPSB0aGlzLnJlc29sdmVVUkxzKGxvZ291dFVSTCk7XG4gICAgcmV0dXJuIGZldGNoKGxvZ291dEFic1VSTCwgb3B0aW9ucykudGhlbihmdW5jdGlvbihyZXNwb25zZSkge1xuICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzIDwgNDAwKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKHJlc3BvbnNlLnN0YXR1c1RleHQpO1xuICAgICAgICB9XG4gICAgfSkudGhlbihmdW5jdGlvbihyZXNwb25zZSkge1xuICAgICAgICB0aGlzLmF1dGhvcml6YXRpb25zID0gdGhpcy5hdXRob3JpemF0aW9ucy5maWx0ZXIoZnVuY3Rpb24oYXV0aG9yaXphdGlvbikge1xuICAgICAgICAgICAgdmFyIGZvbGRlclVSTDEgPSBnZXRGb2xkZXJVUkwoYXV0aG9yaXphdGlvbi51cmwpO1xuICAgICAgICAgICAgdmFyIGZvbGRlclVSTDIgPSBnZXRGb2xkZXJVUkwobG9nb3V0QWJzVVJMKTtcbiAgICAgICAgICAgIHJldHVybiAoZm9sZGVyVVJMMSAhPT0gZm9sZGVyVVJMMik7XG4gICAgICAgIH0pO1xuICAgIH0pO1xufTtcblxuLyoqXG4gKiBTdGFydCBleHBpcmF0aW9uIGNoZWNraW5nXG4gKi9cbnByb3RvdHlwZS5zdGFydEV4cGlyYXRpb25DaGVjayA9IGZ1bmN0aW9uKCkge1xuICAgIGlmICh0aGlzLm9wdGlvbnMucmVmcmVzaEludGVydmFsID4gMCkge1xuICAgICAgICBpZiAoIXRoaXMuZXhwaXJhdGlvbkNoZWNrSW50ZXJ2YWwpIHtcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgICAgICB0aGlzLmV4cGlyYXRpb25DaGVja0ludGVydmFsID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuY2hlY2tFeHBpcmF0aW9uKCk7XG4gICAgICAgICAgICB9LCA1MDAwKTtcbiAgICAgICAgfVxuICAgIH1cbn07XG5cbi8qKlxuICogU3RvcCBleHBpcmF0aW9uIGNoZWNraW5nXG4gKi9cbnByb3RvdHlwZS5zdG9wRXhwaXJhdGlvbkNoZWNrID0gZnVuY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMuZXhwaXJhdGlvbkNoZWNrSW50ZXJ2YWwpIHtcbiAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLmV4cGlyYXRpb25DaGVja0ludGVydmFsKTtcbiAgICAgICAgdGhpcy5leHBpcmF0aW9uQ2hlY2tJbnRlcnZhbCA9IDA7XG4gICAgfVxufTtcblxuLyoqXG4gKiBNYXJrIHF1ZXJpZXMgYXMgZGlydHkgYW5kIHRyaWdnZXIgb25DaGFuZ2UgZXZlbnQgd2hlbiBlbm91Z2ggdGltZSBoYXMgcGFzc2VkXG4gKi9cbnByb3RvdHlwZS5jaGVja0V4cGlyYXRpb24gPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgaW50ZXJ2YWwgPSBOdW1iZXIodGhpcy5vcHRpb25zLnJlZnJlc2hJbnRlcnZhbCk7XG4gICAgaWYgKCFpbnRlcnZhbCkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciBsaW1pdCA9IGdldFRpbWUoLWludGVydmFsKTtcbiAgICB2YXIgY2hhbmdlZCA9IGZhbHNlO1xuICAgIHZhciBxdWVyaWVzID0gdGhpcy5xdWVyaWVzLmZpbHRlcihmdW5jdGlvbihxdWVyeSkge1xuICAgICAgICBpZiAoIXF1ZXJ5LmRpcnR5KSB7XG4gICAgICAgICAgICBpZiAocXVlcnkucmV0cmlldmFsVGltZSA8IGxpbWl0KSB7XG4gICAgICAgICAgICAgICAgcXVlcnkuZGlydHkgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGNoYW5nZWQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH0pO1xuICAgIGlmIChjaGFuZ2VkKSB7XG4gICAgICAgIHRoaXMucXVlcmllcyA9IHF1ZXJpZXM7XG4gICAgICAgIHRoaXMudHJpZ2dlckV2ZW50KG5ldyBSZWxha3NEamFuZ29EYXRhU291cmNlRXZlbnQoJ2NoYW5nZScsIHRoaXMpKTtcbiAgICB9XG59O1xuXG4vKipcbiAqIEZldGNoIEpTT04gb2JqZWN0IGF0IFVSTFxuICpcbiAqIEBwYXJhbSAge1N0cmluZ30gdXJsXG4gKlxuICogQHJldHVybiB7UHJvbWlzZTxPYmplY3Q+fVxuICovXG5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24odXJsKSB7XG4gICAgdmFyIG9wdGlvbnMgPSB7XG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgIGhlYWRlcnM6IHt9LFxuICAgIH07XG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdCh1cmwsIG9wdGlvbnMpO1xufTtcblxucHJvdG90eXBlLnBvc3QgPSBmdW5jdGlvbih1cmwsIG9iamVjdCkge1xuICAgIHZhciBvcHRpb25zID0ge1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgbW9kZTogJ2NvcnMnLFxuICAgICAgICBjYWNoZTogJ25vLWNhY2hlJyxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04JyxcbiAgICAgICAgfSxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkob2JqZWN0KSxcbiAgICB9O1xuICAgIHJldHVybiB0aGlzLnJlcXVlc3QodXJsLCBvcHRpb25zKTtcbn07XG5cbnByb3RvdHlwZS5wdXQgPSBmdW5jdGlvbih1cmwsIG9iamVjdCkge1xuICAgIHZhciBvcHRpb25zID0ge1xuICAgICAgICBtZXRob2Q6ICdQVVQnLFxuICAgICAgICBtb2RlOiAnY29ycycsXG4gICAgICAgIGNhY2hlOiAnbm8tY2FjaGUnLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLTgnLFxuICAgICAgICB9LFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShvYmplY3QpLFxuICAgIH07XG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdCh1cmwsIG9wdGlvbnMpO1xufTtcblxucHJvdG90eXBlLmRlbGV0ZSA9IGZ1bmN0aW9uKHVybCwgb2JqZWN0KSB7XG4gICAgdmFyIG9wdGlvbnMgPSB7XG4gICAgICAgIG1ldGhvZDogJ0RFTEVURScsXG4gICAgICAgIG1vZGU6ICdjb3JzJyxcbiAgICAgICAgY2FjaGU6ICduby1jYWNoZScsXG4gICAgICAgIGhlYWRlcnM6IHt9LFxuICAgIH07XG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdCh1cmwsIG9wdGlvbnMpO1xufTtcblxucHJvdG90eXBlLnJlcXVlc3QgPSBmdW5jdGlvbih1cmwsIG9wdGlvbnMpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgIHZhciB0b2tlbiA9IHRoaXMuZ2V0QXV0aG9yaXphdGlvblRva2VuKHVybCk7XG4gICAgaWYgKHRva2VuKSB7XG4gICAgICAgIHZhciBrZXl3b3JkID0gdGhpcy5vcHRpb25zLmF1dGhvcml6YXRpb25LZXl3b3JkO1xuICAgICAgICBvcHRpb25zLmhlYWRlcnNbJ0F1dGhvcml6YXRpb24nXSA9IGtleXdvcmQgKyAnICcgKyB0b2tlbjtcbiAgICB9XG4gICAgcmV0dXJuIGZldGNoKHVybCwgb3B0aW9ucykudGhlbihmdW5jdGlvbihyZXNwb25zZSkge1xuICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzIDwgNDAwKSB7XG4gICAgICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09IDIwNCkge1xuICAgICAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG4gICAgICAgIH0gZWxzZSBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSA0MDEpIHtcbiAgICAgICAgICAgIHJldHVybiBfdGhpcy5yZXF1ZXN0QXV0aGVudGljYXRpb24odXJsKS50aGVuKGZ1bmN0aW9uKGF1dGhlbnRpY2F0ZWQpIHtcbiAgICAgICAgICAgICAgICBpZiAoYXV0aGVudGljYXRlZCkge1xuICAgICAgICAgICAgICAgICAgICBkZWxldGUgb3B0aW9ucy5oZWFkZXJzWydBdXRob3JpemF0aW9uJ107XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfdGhpcy5yZXF1ZXN0KHVybCwgb3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKHJlc3BvbnNlLnN0YXR1c1RleHQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKHJlc3BvbnNlLnN0YXR1c1RleHQpO1xuICAgICAgICB9XG4gICAgfSk7XG59O1xuXG4vKipcbiAqIFJ1biBob29rIGZ1bmN0aW9uIG9uIGFuIGNhY2hlZCBmZXRjaCBxdWVyeSBhZnRlciBhbiBpbnNlcnQsIHVwZGF0ZSwgb3JcbiAqIGRlbGV0ZSBvcGVyYXRpb24uIFJldHVybiB0cnVlIHdoZW4gcXVlcnkgaXMgY2hhbmdlZC5cbiAqXG4gKiBAcGFyYW0gIHtPYmplY3R9IHF1ZXJ5XG4gKiBAcGFyYW0gIHtTdHJpbmd9IGhvb2tOYW1lXG4gKiBAcGFyYW0gIHtBcnJheTxPYmplY3Q+fE9iamVjdH0gaW5wdXRcbiAqIEBwYXJhbSAge1N0cmluZ30gZGVmYXVsdEJlaGF2aW9yXG4gKlxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqL1xuZnVuY3Rpb24gcnVuSG9vayhxdWVyeSwgaG9va05hbWUsIGlucHV0LCBkZWZhdWx0QmVoYXZpb3IpIHtcbiAgICB2YXIgaG9va0Z1bmMgPSAocXVlcnkub3B0aW9ucykgPyBxdWVyeS5vcHRpb25zW2hvb2tOYW1lXSA6IG51bGw7XG4gICAgaWYgKCFob29rRnVuYykge1xuICAgICAgICBob29rRnVuYyA9IGRlZmF1bHRCZWhhdmlvcjtcbiAgICB9XG4gICAgaWYgKHR5cGVvZihob29rRnVuYykgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHN3aXRjaCAoaG9va0Z1bmMpIHtcbiAgICAgICAgICAgIGNhc2UgJ3JlZnJlc2gnOlxuICAgICAgICAgICAgICAgIGhvb2tGdW5jID0gcmVmcmVzaFF1ZXJ5O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnaWdub3JlJzpcbiAgICAgICAgICAgICAgICBob29rRnVuYyA9IGlnbm9yZUNoYW5nZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgc3dpdGNoIChxdWVyeS50eXBlICsgJzo6JyArIGhvb2tGdW5jKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ29iamVjdDo6cmVwbGFjZSc6XG4gICAgICAgICAgICAgICAgICAgICAgICBob29rRnVuYyA9IHJlcGxhY2VPYmplY3Q7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnbGlzdDo6cmVwbGFjZSc6XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ3BhZ2U6OnJlcGxhY2UnOlxuICAgICAgICAgICAgICAgICAgICAgICAgaG9va0Z1bmMgPSByZXBsYWNlT2JqZWN0cztcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdsaXN0Ojp1bnNoaWZ0JzpcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAncGFnZTo6dW5zaGlmdCc6XG4gICAgICAgICAgICAgICAgICAgICAgICBob29rRnVuYyA9IHVuc2hpZnRPYmplY3RzO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2xpc3Q6OnB1c2gnOlxuICAgICAgICAgICAgICAgICAgICBjYXNlICdwYWdlOjpwdXNoJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGhvb2tGdW5jID0gcHVzaE9iamVjdHM7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnb2JqZWN0OjpyZW1vdmUnOlxuICAgICAgICAgICAgICAgICAgICAgICAgaG9va0Z1bmMgPSByZW1vdmVPYmplY3Q7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnbGlzdDo6cmVtb3ZlJzpcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAncGFnZTo6cmVtb3ZlJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGhvb2tGdW5jID0gcmVtb3ZlT2JqZWN0cztcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdVbmtub3duIGhvb2sgbmFtZTogJyArIGhvb2tGdW5jKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAocXVlcnkudHlwZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgdmFyIGltcGFjdDtcbiAgICAgICAgaWYgKHF1ZXJ5Lm9iamVjdCkge1xuICAgICAgICAgICAgaW1wYWN0ID0gaG9va0Z1bmMocXVlcnkub2JqZWN0LCBpbnB1dCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBuZWVkIHRvIHJ1biBxdWVyeSBhZ2FpbiwgaW4gY2FzZSB0aGUgZGF0YSBjdXJyZW50bHkgaW4gZmxpZ2h0XG4gICAgICAgICAgICAvLyBpcyBhbHJlYWR5IHN0YWxlXG4gICAgICAgICAgICBpbXBhY3QgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpbXBhY3QgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGltcGFjdCBpbnN0YW5jZW9mIE9iamVjdCkge1xuICAgICAgICAgICAgdmFyIG9iamVjdCA9IGltcGFjdDtcbiAgICAgICAgICAgIHF1ZXJ5Lm9iamVjdCA9IG9iamVjdDtcbiAgICAgICAgICAgIHF1ZXJ5LnByb21pc2UgPSBQcm9taXNlLnJlc29sdmUob2JqZWN0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHF1ZXJ5LmRpcnR5ID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2UgaWYgKHF1ZXJ5LnR5cGUgPT09ICdwYWdlJyB8fCBxdWVyeS50eXBlID09PSAnbGlzdCcpIHtcbiAgICAgICAgdmFyIGltcGFjdDtcbiAgICAgICAgaWYgKHF1ZXJ5Lm9iamVjdHMpIHtcbiAgICAgICAgICAgIC8vIGdldCByaWQgb2YgbnVsbCBhbmQgc29ydCBsaXN0IGJ5IElEIG9yIFVSTFxuICAgICAgICAgICAgaW5wdXQgPSBpbnB1dC5maWx0ZXIoQm9vbGVhbik7XG4gICAgICAgICAgICBzb3J0T2JqZWN0cyhpbnB1dCk7XG4gICAgICAgICAgICBpbXBhY3QgPSBob29rRnVuYyhxdWVyeS5vYmplY3RzLCBpbnB1dCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBzZWUgYWJvdmVcbiAgICAgICAgICAgIGltcGFjdCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGltcGFjdCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaW1wYWN0IGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgICAgICAgIHZhciBvYmplY3RzID0gaW1wYWN0O1xuICAgICAgICAgICAgaWYgKHF1ZXJ5LnR5cGUgPT09ICdsaXN0Jykge1xuICAgICAgICAgICAgICAgIC8vIHVwZGF0ZSB0aGUgdG90YWxcbiAgICAgICAgICAgICAgICB2YXIgZGlmZiA9IG9iamVjdHMubGVuZ3RoIC0gcXVlcnkub2JqZWN0cy5sZW5ndGg7XG4gICAgICAgICAgICAgICAgb2JqZWN0cy50b3RhbCA9IHF1ZXJ5Lm9iamVjdHMudG90YWwgKyBkaWZmO1xuXG4gICAgICAgICAgICAgICAgLy8gcmVzdG9yZSBtb3JlIGZ1bmN0aW9uXG4gICAgICAgICAgICAgICAgb2JqZWN0cy5tb3JlID0gcXVlcnkub2JqZWN0cy5tb3JlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcXVlcnkub2JqZWN0cyA9IG9iamVjdHM7XG4gICAgICAgICAgICBxdWVyeS5wcm9taXNlID0gUHJvbWlzZS5yZXNvbHZlKG9iamVjdHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcXVlcnkuZGlydHkgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbn1cblxuLyoqXG4gKiBSZXR1cm4gZmFsc2UgdG8gaW5kaWNhdGUgdGhhdCBjaGFuZ2Ugc2hvdWxkIGJlIGlnbm9yZWRcbiAqXG4gKiBAcmV0dXJuIHtmYWxzZX1cbiAqL1xuZnVuY3Rpb24gaWdub3JlQ2hhbmdlKCkge1xuICAgIHJldHVybiBmYWxzZTtcbn1cblxuLyoqXG4gKiBSZXR1cm4gdHJ1ZSB0byBpbmRpY2F0ZSB0aGF0IHF1ZXJ5IHNob3VsZCBiZSByZXJ1blxuICpcbiAqIEByZXR1cm4ge3RydWV9XG4gKi9cbmZ1bmN0aW9uIHJlZnJlc2hRdWVyeSgpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbn1cblxuLyoqXG4gKiBSZXR1cm4gdGhlIG5ldyBvYmplY3RcbiAqXG4gKiBAcGFyYW0gIHtPYmplY3R9IG9iamVjdFxuICogQHBhcmFtICB7T2JqZWN0fSBuZXdPYmplY3RcbiAqXG4gKiBAcmV0dXJuIHtPYmplY3R8ZmFsc2V9XG4gKi9cbmZ1bmN0aW9uIHJlcGxhY2VPYmplY3Qob2JqZWN0LCBuZXdPYmplY3QpIHtcbiAgICBpZiAoIW1hdGNoT2JqZWN0KG5ld09iamVjdCwgb2JqZWN0KSkge1xuICAgICAgICByZXR1cm4gbmV3T2JqZWN0O1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG59XG5cbi8qKlxuICogUmVwbGFjZSBvbGQgdmVyc2lvbiBvZiBvYmplY3RzIHdpdGggbmV3IG9uZXNcbiAqXG4gKiBAcGFyYW0gIHtBcnJheTxPYmplY3Q+XX0gb2JqZWN0c1xuICogQHBhcmFtICB7QXJyYXk8T2JqZWN0Pn0gbmV3T2JqZWN0c1xuICpcbiAqIEByZXR1cm4ge0FycmF5PE9iamVjdD58ZmFsc2V9XG4gKi9cbmZ1bmN0aW9uIHJlcGxhY2VPYmplY3RzKG9iamVjdHMsIG5ld09iamVjdHMpIHtcbiAgICB2YXIgY2hhbmdlZCA9IGZhbHNlO1xuICAgIHZhciBuZXdMaXN0ID0gb2JqZWN0cy5tYXAoZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgICAgIHZhciBuZXdPYmplY3QgPSBmaW5kT2JqZWN0KG5ld09iamVjdHMsIG9iamVjdCk7XG4gICAgICAgIGlmIChuZXdPYmplY3QpIHtcbiAgICAgICAgICAgIGlmICghbWF0Y2hPYmplY3QobmV3T2JqZWN0LCBvYmplY3QpKSB7XG4gICAgICAgICAgICAgICAgY2hhbmdlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ld09iamVjdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gb2JqZWN0O1xuICAgIH0pO1xuICAgIHJldHVybiAoY2hhbmdlZCkgPyBuZXdMaXN0IDogZmFsc2U7XG59XG5cbi8qKlxuICogQWRkIG5ldyBvYmplY3RzIGF0IGJlZ2lubmluZyBvZiBsaXN0XG4gKlxuICogQHBhcmFtICB7QXJyYXk8T2JqZWN0Pn0gb2JqZWN0c1xuICogQHBhcmFtICB7QXJyYXk8T2JqZWN0Pn0gbmV3T2JqZWN0c1xuICpcbiAqIEByZXR1cm4ge0FycmF5PE9iamVjdD58ZmFsc2V9XG4gKi9cbmZ1bmN0aW9uIHVuc2hpZnRPYmplY3RzKG9iamVjdHMsIG5ld09iamVjdHMpIHtcbiAgICB2YXIgY2hhbmdlZCA9IGZhbHNlO1xuICAgIHZhciBuZXdMaXN0ID0gb2JqZWN0cy5zbGljZSgpO1xuICAgIG5ld09iamVjdHMuZm9yRWFjaChmdW5jdGlvbihvYmplY3QpIHtcbiAgICAgICAgdmFyIGluZGV4ID0gZmluZE9iamVjdEluZGV4KG5ld0xpc3QsIG9iamVjdCk7XG4gICAgICAgIGlmIChpbmRleCA9PT0gLTEpIHtcbiAgICAgICAgICAgIG5ld0xpc3QudW5zaGlmdChvYmplY3QpO1xuICAgICAgICAgICAgY2hhbmdlZCA9IHRydWU7XG4gICAgICAgIH0gZWxzZSBpZiAoIW1hdGNoT2JqZWN0KG5ld0xpc3RbaW5kZXhdLCBvYmplY3QpKSB7XG4gICAgICAgICAgICBuZXdMaXN0W2luZGV4XSA9IG9iamVjdDtcbiAgICAgICAgICAgIGNoYW5nZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIChjaGFuZ2VkKSA/IG5ld0xpc3QgOiBmYWxzZTtcbn1cblxuLyoqXG4gKiBBZGQgbmV3IG9iamVjdHMgYXQgZW5kIG9mIGxpc3RcbiAqXG4gKiBAcGFyYW0gIHtBcnJheTxPYmplY3Q+fSBvYmplY3RzXG4gKiBAcGFyYW0gIHtBcnJheTxPYmplY3Q+fSBuZXdPYmplY3RzXG4gKlxuICogQHJldHVybiB7QXJyYXk8T2JqZWN0PnxmYWxzZX1cbiAqL1xuZnVuY3Rpb24gcHVzaE9iamVjdHMob2JqZWN0cywgbmV3T2JqZWN0cykge1xuICAgIHZhciBjaGFuZ2VkID0gZmFsc2U7XG4gICAgdmFyIG5ld0xpc3QgPSBvYmplY3RzLnNsaWNlKCk7XG4gICAgbmV3T2JqZWN0cy5mb3JFYWNoKGZ1bmN0aW9uKG9iamVjdCkge1xuICAgICAgICB2YXIgaW5kZXggPSBmaW5kT2JqZWN0SW5kZXgobmV3TGlzdCwgb2JqZWN0KTtcbiAgICAgICAgaWYgKGluZGV4ID09PSAtMSkge1xuICAgICAgICAgICAgbmV3TGlzdC5wdXNoKG9iamVjdCk7XG4gICAgICAgICAgICBjaGFuZ2VkID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIGlmICghbWF0Y2hPYmplY3QobmV3TGlzdFtpbmRleF0sIG9iamVjdCkpIHtcbiAgICAgICAgICAgIG5ld0xpc3RbaW5kZXhdID0gb2JqZWN0O1xuICAgICAgICAgICAgY2hhbmdlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gKGNoYW5nZWQpID8gbmV3TGlzdCA6IGZhbHNlO1xufVxuXG4vKipcbiAqIFJldHVybiB0cnVlIHRvIGluZGljYXRlIHRoYXQgcXVlcnkgc2hvdWxkIGJlIHJlbW92ZWRcbiAqXG4gKiBAcGFyYW0gIHtPYmplY3R9IG9iamVjdFxuICogQHBhcmFtICB7T2JqZWN0fSBkZWxldGVkT0JqZWN0XG4gKlxuICogQHJldHVybiB7dHJ1ZX1cbiAqL1xuZnVuY3Rpb24gcmVtb3ZlT2JqZWN0KG9iamVjdCwgZGVsZXRlZE9CamVjdCkge1xuICAgIHJldHVybiB0cnVlO1xufVxuXG4vKipcbiAqIFJlbW92ZSBvYmplY3RzIGZyb20gbGlzdFxuICpcbiAqIEBwYXJhbSAge0FycmF5PE9iamVjdD59IG9iamVjdHNcbiAqIEBwYXJhbSAge0FycmF5PE9iamVjdD59IGRlbGV0ZWRPYmplY3RzXG4gKlxuICogQHJldHVybiB7QXJyYXk8T2JqZWN0PnxmYWxzZX1cbiAqL1xuZnVuY3Rpb24gcmVtb3ZlT2JqZWN0cyhvYmplY3RzLCBkZWxldGVkT2JqZWN0cykge1xuICAgIHZhciBjaGFuZ2VkID0gZmFsc2U7XG4gICAgdmFyIG5ld0xpc3QgPSBvYmplY3RzLmZpbHRlcihmdW5jdGlvbihvYmplY3QpIHtcbiAgICAgICAgaWYgKGZpbmRPYmplY3RJbmRleChkZWxldGVkT2JqZWN0cywgb2JqZWN0KSAhPT0gLTEpIHtcbiAgICAgICAgICAgIGNoYW5nZWQgPSB0cnVlO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gKGNoYW5nZWQpID8gbmV3TGlzdCA6IGZhbHNlO1xufVxuXG4vKipcbiAqIFNlZSBpZiBhIHF1ZXJ5IGhhcyB0aGUgZ2l2ZW4gcHJvcGVydGllc1xuICpcbiAqIEBwYXJhbSAge09iamVjdH0gcXVlcnlcbiAqIEBwYXJhbSAge09iamVjdH0gcHJvcHNcbiAqXG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICovXG5mdW5jdGlvbiBtYXRjaFF1ZXJ5KHF1ZXJ5LCBwcm9wcykge1xuICAgIGZvciAodmFyIG5hbWUgaW4gcHJvcHMpIHtcbiAgICAgICAgaWYgKCFtYXRjaE9iamVjdChxdWVyeVtuYW1lXSwgcHJvcHNbbmFtZV0pKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG59XG5cbi8qKlxuICogU2VlIGlmIHR3byBvYmplY3RzIGFyZSBpZGVudGljYWxcbiAqXG4gKiBAcGFyYW0gIHsqfSBvYmplY3QxXG4gKiBAcGFyYW0gIHsqfSBvYmplY3QyXG4gKlxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqL1xuZnVuY3Rpb24gbWF0Y2hPYmplY3Qob2JqZWN0MSwgb2JqZWN0Mikge1xuICAgIGlmIChvYmplY3QxICE9PSBvYmplY3QyKSB7XG4gICAgICAgIGlmIChvYmplY3QxIGluc3RhbmNlb2YgT2JqZWN0ICYmIG9iamVjdDIgaW5zdGFuY2VvZiBPYmplY3QpIHtcbiAgICAgICAgICAgIGlmIChvYmplY3QxLmNvbnN0cnVjdG9yICE9PSBvYmplY3QyLmNvbnN0cnVjdG9yKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG9iamVjdDEgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICAgICAgICAgIGlmIChvYmplY3QxLmxlbmd0aCAhPT0gb2JqZWN0Mi5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG9iamVjdDEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFtYXRjaE9iamVjdChvYmplY3QxW2ldLCBvYmplY3QyW2ldKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmIChvYmplY3QxIGluc3RhbmNlb2YgRnVuY3Rpb24pIHtcbiAgICAgICAgICAgICAgICBpZiAob2JqZWN0MS50b1N0cmluZygpICE9PSBvYmplY3QyLnRvU3RyaW5nKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgbmFtZSBpbiBvYmplY3QxKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghbWF0Y2hPYmplY3Qob2JqZWN0MVtuYW1lXSwgb2JqZWN0MltuYW1lXSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmb3IgKHZhciBuYW1lIGluIG9iamVjdDIpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEobmFtZSBpbiBvYmplY3QxKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xufVxuXG4vKipcbiAqIENoZWNrIGlmIHRoZSBnaXZlbiBVUkwgbWF0Y2ggYW55IGluIHRoZSBsaXN0XG4gKlxuICogQHBhcmFtICB7U3RyaW5nfSB1cmxcbiAqIEBwYXJhbSAge0FycmF5PFN0cmluZz59IG90aGVyVVJMc1xuICpcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKi9cbmZ1bmN0aW9uIG1hdGNoQW55VVJMKHVybCwgb3RoZXJVUkxzKSB7XG4gICAgcmV0dXJuIG90aGVyVVJMcy5zb21lKGZ1bmN0aW9uKG90aGVyVVJMKSB7XG4gICAgICAgIGlmIChvdGhlclVSTCA9PT0gdXJsKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIGlmICh1cmwuc3Vic3RyKDAsIG90aGVyVVJMLmxlbmd0aCkgPT09IG90aGVyVVJMKSB7XG4gICAgICAgICAgICB2YXIgbGMgPSBvdGhlclVSTC5jaGFyQXQob3RoZXJVUkwubGVuZ3RoIC0gMSk7XG4gICAgICAgICAgICB2YXIgZWMgPSB1cmwuY2hhckF0KG90aGVyVVJMLmxlbmd0aCk7XG4gICAgICAgICAgICBpZiAobGMgPT09ICcvJyB8fCBlYyA9PT0gJy8nKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbn1cblxuLyoqXG4gKiBSZW1vdmUgdHJhaWxpbmcgc2xhc2ggZnJvbSBVUkxcbiAqXG4gKiBAcGFyYW0gIHtTdHJpbmd9IHVybFxuICpcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqL1xuZnVuY3Rpb24gcmVtb3ZlVHJhaWxpbmdTbGFzaCh1cmwpIHtcbiAgICB2YXIgbGMgPSB1cmwuY2hhckF0KHVybC5sZW5ndGggLSAxKTtcbiAgICBpZiAobGMgPT09ICcvJykge1xuICAgICAgICByZXR1cm4gdXJsLnN1YnN0cigwLCB1cmwubGVuZ3RoIC0gMSk7XG4gICAgfVxuICAgIHJldHVybiB1cmw7XG59XG5cbi8qKlxuICogQWRkIGxlYWRpbmcgc2xhc2ggdG8gVVJMXG4gKlxuICogQHBhcmFtICB7U3RyaW5nfSB1cmxcbiAqXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIGFkZExlYWRpbmdTbGFzaCh1cmwpIHtcbiAgICB2YXIgZmMgPSB1cmwuY2hhckF0KDApO1xuICAgIGlmIChmYyAhPT0gJy8nKSB7XG4gICAgICAgIHJldHVybiAnLycgKyB1cmw7XG4gICAgfVxuICAgIHJldHVybiB1cmw7XG59XG5cbi8qKlxuICogUmV0dXJuIHRoZSBVUkwgb2YgdGhlIHBhcmVudCBmb2xkZXJcbiAqXG4gKiBAcGFyYW0gIHtTdHJpbmd9IHVybFxuICpcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqL1xuZnVuY3Rpb24gZ2V0Rm9sZGVyVVJMKHVybCkge1xuICAgIHZhciBlaSA9IHVybC5sYXN0SW5kZXhPZignLycpO1xuICAgIGlmIChlaSA9PT0gdXJsLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgZWkgPSB1cmwubGFzdEluZGV4T2YoJy8nLCBlaSAtIDEpO1xuICAgIH1cbiAgICBpZiAoZWkgIT09IC0xKSB7XG4gICAgICAgIHJldHVybiB1cmwuc3Vic3RyKDAsIGVpICsgMSk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBnZXRPYmplY3RVUkwoZm9sZGVyVVJMLCBvYmplY3QpIHtcbiAgICBpZiAoIW9iamVjdCkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChmb2xkZXJVUkwgJiYgb2JqZWN0LmlkKSB7XG4gICAgICAgIHJldHVybiByZW1vdmVUcmFpbGluZ1NsYXNoKGZvbGRlclVSTCkgKyAnLycgKyBvYmplY3QuaWQgKyAnLyc7XG4gICAgfSBlbHNlIGlmIChvYmplY3QudXJsKSB7XG4gICAgICAgIHJldHVybiBvYmplY3QudXJsO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZ2V0T2JqZWN0Rm9sZGVyVVJMKGZvbGRlclVSTCwgb2JqZWN0KSB7XG4gICAgaWYgKCFvYmplY3QpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoZm9sZGVyVVJMICYmIG9iamVjdC5pZCkge1xuICAgICAgICByZXR1cm4gZm9sZGVyVVJMO1xuICAgIH0gZWxzZSBpZiAob2JqZWN0LnVybCkge1xuICAgICAgICByZXR1cm4gZ2V0Rm9sZGVyVVJMKG9iamVjdC51cmwpO1xuICAgIH1cbn1cblxuLyoqXG4gKiBBcHBlbmQgdGhlIHZhcmlhYmxlIFwicGFnZVwiIHRvIGEgVVJMJ3MgcXVlcnksIHVubGVzcyBwYWdlIGVxdWFscyAxLlxuICpcbiAqIEBwYXJhbSAge1N0cmluZ30gdXJsXG4gKiBAcGFyYW0gIHtOdW1iZXJ9IHBhZ2VcbiAqXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIGF0dGFjaFBhZ2VOdW1iZXIodXJsLCBwYWdlKSB7XG4gICAgaWYgKHBhZ2UgPT09IDEpIHtcbiAgICAgICAgcmV0dXJuIHVybDtcbiAgICB9XG4gICAgdmFyIHFpID0gdXJsLmluZGV4T2YoJz8nKTtcbiAgICB2YXIgc2VwID0gKHFpID09PSAtMSkgPyAnPycgOiAnJic7XG4gICAgcmV0dXJuIHNlcCArICdwYWdlPScgKyBwYWdlO1xufVxuXG5mdW5jdGlvbiB3YWl0Rm9yTmV4dFBhZ2UocXVlcnkpIHtcbiAgICByZXR1cm4gcXVlcnkubmV4dFByb21pc2UgfHwgUHJvbWlzZS5yZXNvbHZlKCk7XG59XG5cbmZ1bmN0aW9uIG1hdGNoVVJMKHVybDEsIHVybDIpIHtcbiAgICB2YXIgcWkgPSB1cmwxLmxhc3RJbmRleE9mKCc/Jyk7XG4gICAgaWYgKHFpICE9PSAtMSkge1xuICAgICAgICB1cmwxID0gdXJsMS5zdWJzdHIoMCwgcWkpO1xuICAgIH1cbiAgICByZXR1cm4gKHVybDEgPT09IHVybDIpO1xufVxuXG4vKipcbiAqIEZpbmQgdGhlIHBvc2l0aW9uIG9mIGFuIG9iamVjdCBpbiBhbiBhcnJheSBiYXNlZCBvbiBpZCBvciBVUkwuIFJldHVybiAtMSBpZlxuICogdGhlIG9iamVjdCBpcyBub3QgdGhlcmUuXG4gKlxuICogQHBhcmFtICB7QXJyYXk8T2JqZWN0Pn0gbGlzdFxuICogQHBhcmFtICB7T2JqZWN0fSBvYmplY3RcbiAqXG4gKiBAcmV0dXJuIHtOdW1iZXJ9XG4gKi9cbmZ1bmN0aW9uIGZpbmRPYmplY3RJbmRleChsaXN0LCBvYmplY3QpIHtcbiAgICB2YXIga2V5QSA9IG9iamVjdC5pZCB8fCBvYmplY3QudXJsO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgb2JqID0gbGlzdFtpXTtcbiAgICAgICAgaWYgKG9iaikge1xuICAgICAgICAgICAgdmFyIGtleUIgPSBvYmouaWQgfHwgb2JqLnVybDtcbiAgICAgICAgICAgIGlmIChrZXlBID09PSBrZXlCKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIC0xO1xufVxuXG4vKipcbiAqIEZpbmQgYW4gb2JqZWN0IGluIGFuIGFycmF5IGJhc2VkIG9uIElEIG9yIFVSTC5cbiAqXG4gKiBAcGFyYW0gIHtbdHlwZV19IGxpc3RcbiAqIEBwYXJhbSAge1t0eXBlXX0gb2JqZWN0XG4gKlxuICogQHJldHVybiB7T2JqZWN0fHVuZGVmaW5lZH1cbiAqL1xuZnVuY3Rpb24gZmluZE9iamVjdChsaXN0LCBvYmplY3QpIHtcbiAgICB2YXIgaW5kZXggPSBmaW5kT2JqZWN0SW5kZXgobGlzdCwgb2JqZWN0KTtcbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICAgIHJldHVybiBsaXN0W2luZGV4XTtcbiAgICB9XG59XG5cbi8qKlxuICogU29ydCBhIGxpc3Qgb2Ygb2JqZWN0cyBiYXNlZCBvbiBJRCBvciBVUkxcbiAqXG4gKiBAcGFyYW0gIHtBcnJheTxPYmplY3Q+fSBsaXN0XG4gKi9cbmZ1bmN0aW9uIHNvcnRPYmplY3RzKGxpc3QpIHtcbiAgICBsaXN0LnNvcnQoZnVuY3Rpb24oYSwgYikge1xuICAgICAgICB2YXIga2V5QSA9IGEuaWQgfHwgYS51cmw7XG4gICAgICAgIHZhciBrZXlCID0gYi5pZCB8fCBiLnVybDtcbiAgICAgICAgaWYgKGtleUEgPCBrZXlCKSB7XG4gICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgIH0gZWxzZSBpZiAoa2V5QSA+IGtleUIpIHtcbiAgICAgICAgICAgIHJldHVybiArMTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5cbi8qKlxuICogQXBwZW5kIG9iamVjdHMgdG8gYSBsaXN0LCBtYWtpbmcgc3VyZSBkdXBsaWNhdGVzIGFyZW4ndCBhZGRlZFxuICpcbiAqIEBwYXJhbSAge0FycmF5PE9iamVjdD59IGxpc3RcbiAqIEBwYXJhbSAge0FycmF5PE9iamVjdD59IG9iamVjdHNcbiAqXG4gKiBAcmV0dXJuIHtBcnJheTxPYmplY3Q+fVxuICovXG5mdW5jdGlvbiBhcHBlbmRPYmplY3RzKGxpc3QsIG9iamVjdHMpIHtcbiAgICBpZiAoIWxpc3QpIHtcbiAgICAgICAgcmV0dXJuIG9iamVjdHM7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgb2JqZWN0cyA9IG9iamVjdHMuZmlsdGVyKGZ1bmN0aW9uKG9iamVjdCkge1xuICAgICAgICAgICAgcmV0dXJuIGZpbmRPYmplY3RJbmRleChsaXN0LCBvYmplY3QpID09PSAtMTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBsaXN0LmNvbmNhdChvYmplY3RzKTtcbiAgICB9XG59XG5cbi8qKlxuICogUmVwbGFjZSBvYmplY3RzIGluIG5ld0xpc3QgdGhhdCBhcmUgaWRlbnRpY2FsIHRvIHRoZWlyIGNvdW50ZXJwYXJ0IGluIG9sZExpc3QuXG4gKiBSZXR1cm4gdHJ1ZSBpZiBuZXdMaXN0IGlzIGlkZW50aWNhbCB0byBvbGRMaXN0LlxuICpcbiAqIEBwYXJhbSAge0FycmF5PE9iamVjdD59IG5ld0xpc3RcbiAqIEBwYXJhbSAge0FycmF5PE9iamVjdD59IG9sZExpc3RcbiAqXG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICovXG5mdW5jdGlvbiByZXBsYWNlSWRlbnRpZmljYWxPYmplY3RzKG5ld0xpc3QsIG9sZExpc3QpIHtcbiAgICB2YXIgdW5jaGFuZ2VkID0gMDtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG5ld0xpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIG9sZEluZGV4ID0gZmluZE9iamVjdEluZGV4KG9sZExpc3QsIG5ld0xpc3RbaV0pO1xuICAgICAgICBpZiAob2xkSW5kZXggIT09IC0xKSB7XG4gICAgICAgICAgICBpZiAobWF0Y2hPYmplY3QobmV3TGlzdFtpXSwgb2xkTGlzdFtvbGRJbmRleF0pKSB7XG4gICAgICAgICAgICAgICAgbmV3TGlzdFtpXSA9IG9sZExpc3Rbb2xkSW5kZXhdO1xuICAgICAgICAgICAgICAgIGlmIChpID09PSBvbGRJbmRleCkge1xuICAgICAgICAgICAgICAgICAgICB1bmNoYW5nZWQrKztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuICh1bmNoYW5nZWQgPT09IG5ld0xpc3QubGVuZ3RoICYmIG5ld0xpc3QubGVuZ3RoID09PSBvbGRMaXN0Lmxlbmd0aCk7XG59XG5cbi8qKlxuICogQXR0YWNoIG9iamVjdHMgZnJvbSBhbiBvbGRlciBsaXN0IHRvIGEgbmV3IGxpc3QgdGhhdCdzIGJlaW5nIHJldHJpZXZlZC5cbiAqXG4gKiBAcGFyYW0gIHtBcnJheTxPYmplY3Q+fSBuZXdMaXN0XG4gKiBAcGFyYW0gIHtBcnJheTxPYmplY3Q+fSBvbGRMaXN0XG4gKlxuICogQHJldHVybiB7QXJyYXk8T2JqZWN0Pn1cbiAqL1xuZnVuY3Rpb24gam9pbk9iamVjdExpc3RzKG5ld0xpc3QsIG9sZExpc3QpIHtcbiAgICAvLyBmaW5kIHBvaW50IHdoZXJlIHRoZSB0d28gbGlzdCBpbnRlcnNlY3RcbiAgICB2YXIgc3RhcnRJbmRleCA9IDA7XG4gICAgZm9yICh2YXIgaSA9IG5ld0xpc3QubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgdmFyIG5ld09iamVjdCA9IG5ld0xpc3RbaV07XG4gICAgICAgIHZhciBvbGRJbmRleCA9IGZpbmRPYmplY3RJbmRleChvbGRMaXN0LCBuZXdPYmplY3QpO1xuICAgICAgICBpZiAob2xkSW5kZXggIT09IC0xKSB7XG4gICAgICAgICAgICBzdGFydEluZGV4ID0gb2xkSW5kZXggKyAxO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gcmVtb3ZlIG9iamVjdHMgYWhlYWQgb2YgdGhlIGludGVyc2VjdGlvbiBmcm9tIHRoZSBvbGQgbGlzdCwgYXMgd2VsbFxuICAgIC8vIGFzIGFueSBvYmplY3QgdGhhdCBpcyBwcmVzZW50IGluIHRoZSBuZXcgbGlzdCAoZHVlIHRvIGNoYW5nZSBpbiBvcmRlcilcbiAgICB2YXIgb2xkT2JqZWN0cyA9IG9sZExpc3QuZmlsdGVyKGZ1bmN0aW9uKG9iamVjdCwgaW5kZXgpIHtcbiAgICAgICAgaWYgKGluZGV4ID49IHN0YXJ0SW5kZXgpIHtcbiAgICAgICAgICAgIHJldHVybiBmaW5kT2JqZWN0SW5kZXgobmV3TGlzdCwgb2JqZWN0KSA9PT0gLTE7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gbmV3TGlzdC5jb25jYXQob2xkT2JqZWN0cyk7XG59XG5cbi8qKlxuICogRmlsdGVyIG91dCBvYmplY3RzIHRoYXQgYXJlbid0IGluIHRoZSBkaXJlY3RvcnkuIFdpbGwgYWx3YXlzIHJldHVybiB0aGVcbiAqIHNhbWUgbGlzdCB3aGVuIG9iamVjdHMgYXJlIGtleWVkIGJ5IElEIGFuZCBub3QgVVJMXG4gKlxuICogQHBhcmFtICB7QXJyYXk8T2JqZWN0Pn0gb2JqZWN0c1xuICogQHBhcmFtICB7U3RyaW5nfSBmb2xkZXJVUkxcbiAqXG4gKiBAcmV0dXJuIHtBcnJheTxPYmplY3Q+fVxuICovXG5mdW5jdGlvbiByZW1vdmVPYmplY3RzT3V0c2lkZUZvbGRlcihvYmplY3RzLCBmb2xkZXJVUkwpIHtcbiAgICByZXR1cm4gb2JqZWN0cy5maWx0ZXIoZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgICAgIHZhciBvdGhlcmZvbGRlclVSTCA9IGdldE9iamVjdEZvbGRlclVSTChmb2xkZXJVUkwsIG9iamVjdCk7XG4gICAgICAgIGlmIChvdGhlcmZvbGRlclVSTCA9PT0gZm9sZGVyVVJMKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuXG4vKipcbiAqIEdldCBwYXJhbWV0ZXIgJ21pbmltdW0nIGZyb20gb3B0aW9ucy4gSWYgaXQncyBhIHBlcmNlbnQsIHRoZW4gY2FsY3VsYXRlIHRoZVxuICogbWluaW11bSBvYmplY3QgY291bnQgYmFzZWQgb24gdG90YWwuIElmIGl0J3MgbmVnYXRpdmUsIHN1YnN0cmFjdCB0aGUgdmFsdWVcbiAqIGZyb20gdGhlIHRvdGFsLlxuICpcbiAqIEBwYXJhbSAge09iamVjdH0gb3B0aW9uc1xuICogQHBhcmFtICB7TnVtYmVyfSB0b3RhbFxuICogQHBhcmFtICB7TnVtYmVyfSBkZWZcbiAqXG4gKiBAcmV0dXJuIHtOdW1iZXJ9XG4gKi9cbmZ1bmN0aW9uIGdldE1pbmltdW0ob3B0aW9ucywgdG90YWwsIGRlZikge1xuICAgIGxldCBtaW5pbXVtID0gKG9wdGlvbnMpID8gb3B0aW9ucy5taW5pbXVtIDogdW5kZWZpbmVkO1xuICAgIGlmICh0eXBlb2YobWluaW11bSkgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIG1pbmltdW0gPSBtaW5pbXVtLnRyaW0oKTtcbiAgICAgICAgaWYgKG1pbmltdW0uY2hhckF0KG1pbmltdW0ubGVuZ3RoIC0gMSkgPT09ICclJykge1xuICAgICAgICAgICAgbGV0IHBlcmNlbnQgPSBwYXJzZUludChtaW5pbXVtKTtcbiAgICAgICAgICAgIG1pbmltdW0gPSBNYXRoLmNlaWwodG90YWwgKiAocGVyY2VudCAvIDEwMCkpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChtaW5pbXVtIDwgMCkge1xuICAgICAgICBtaW5pbXVtID0gdG90YWwgLSBtaW5pbXVtO1xuICAgICAgICBpZiAobWluaW11bSA8IDEpIHtcbiAgICAgICAgICAgIG1pbmltdW0gPSAxO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBtaW5pbXVtIHx8IGRlZjtcbn1cblxuLyoqXG4gKiBSZXR1cm4gdGhlIGN1cnJlbnQgdGltZSBpbiBJU08gZm9ybWF0LCBhZGRpbmcgYSBkZWx0YSBvcHRpb25hbGx5XG4gKlxuICogQHBhcmFtICB7TnVtYmVyfHVuZGVmaW5lZH0gZGVsdGFcbiAqXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIGdldFRpbWUoZGVsdGEpIHtcbiAgICB2YXIgZGF0ZSA9IG5ldyBEYXRlO1xuICAgIGlmIChkZWx0YSkge1xuICAgICAgICBkYXRlID0gbmV3IERhdGUoZGF0ZS5nZXRUaW1lKCkgKyBkZWx0YSk7XG4gICAgfVxuICAgIHJldHVybiBkYXRlLnRvSVNPU3RyaW5nKCk7XG59XG5cbmZ1bmN0aW9uIFJlbGFrc0RqYW5nb0RhdGFTb3VyY2VFdmVudCh0eXBlLCB0YXJnZXQsIHByb3BzKSB7XG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICB0aGlzLnRhcmdldCA9IHRhcmdldDtcbiAgICBmb3IgKHZhciBuYW1lIGluIHByb3BzKSB7XG4gICAgICAgIHRoaXNbbmFtZV0gPSBwcm9wc1tuYW1lXTtcbiAgICB9XG4gICAgdGhpcy5kZWZhdWx0UHJldmVudGVkID0gZmFsc2U7XG4gICAgdGhpcy5kZWNpc2lvblByb21pc2UgPSBudWxsO1xufVxuXG52YXIgcHJvdG90eXBlID0gUmVsYWtzRGphbmdvRGF0YVNvdXJjZUV2ZW50LnByb3RvdHlwZTtcblxucHJvdG90eXBlLnByZXZlbnREZWZhdWx0ID0gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5kZWZhdWx0UHJldmVudGVkID0gdHJ1ZTtcbn07XG5cbnByb3RvdHlwZS5wb3N0cG9uZURlZmF1bHQgPSBmdW5jdGlvbihwcm9taXNlKSB7XG4gICAgaWYgKCFwcm9taXNlIHx8ICEocHJvbWlzZS50aGVuIGluc3RhbmNlb2YgRnVuY3Rpb24pKSB7XG4gICAgICAgIHRoaXMuZGVjaXNpb25Qcm9taXNlID0gcHJvbWlzZTtcbiAgICB9XG59O1xuXG5wcm90b3R5cGUud2FpdEZvckRlY2lzaW9uID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZGVjaXNpb25Qcm9taXNlIHx8IFByb21pc2UucmVzb2x2ZSgpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBSZWxha3NEamFuZ29EYXRhU291cmNlO1xubW9kdWxlLmV4cG9ydHMuUmVsYWtzRGphbmdvRGF0YVNvdXJjZSA9IFJlbGFrc0RqYW5nb0RhdGFTb3VyY2U7XG5tb2R1bGUuZXhwb3J0cy5SZWxha3NEamFuZ29EYXRhU291cmNlRXZlbnQgPSBSZWxha3NEamFuZ29EYXRhU291cmNlRXZlbnQ7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gL2hvbWUvY2xlb25nL3JlbGFrcy1kamFuZ28tZGF0YS1zb3VyY2UvaW5kZXguanMiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKFJlYWN0KSB7XG5cbnZhciBJU19QUkVBQ1QgPSAoUmVhY3QuaCBpbnN0YW5jZW9mIEZ1bmN0aW9uKTtcbnZhciBNZWFud2hpbGUgPSByZXF1aXJlKCcuL21lYW53aGlsZScpO1xuXG4vKipcbiAqIEhhcnZlc3QgSFRNTCBhbmQgdGV4dCBub2Rlc1xuICpcbiAqIEBwYXJhbSAge1t0eXBlXX0gbm9kZVxuICpcbiAqIEByZXR1cm4ge1Byb21pc2U8Vm5vZGU+fVxuICovXG5mdW5jdGlvbiBoYXJ2ZXN0KG5vZGUpIHtcbiAgICB0cnkge1xuICAgICAgICB2YXIgaGFydmVzdGVkID0gaGFydmVzdE5vZGUobm9kZSwge30pO1xuICAgICAgICBpZiAoIWlzUHJvbWlzZShoYXJ2ZXN0ZWQpKSB7XG4gICAgICAgICAgICAvLyBhbHdheXMgcmV0dXJuIGEgcHJvbWlzZVxuICAgICAgICAgICAgaGFydmVzdGVkID0gUHJvbWlzZS5yZXNvbHZlKGhhcnZlc3RlZCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGhhcnZlc3RlZDtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycik7XG4gICAgfVxufVxuXG4vKipcbiAqIEhhcnZlc3QgSFRNTCBhbmQgdGV4dCBub2Rlc1xuICpcbiAqIEBwYXJhbSAge1ZOb2RlfSBub2RlXG4gKiBAcGFyYW0gIHtPYmplY3R9IGNvbnRleHRcbiAqXG4gKiBAcmV0dXJuIHtWTm9kZXxQcm9taXNlPFZOb2RlPn1cbiAqL1xuZnVuY3Rpb24gaGFydmVzdE5vZGUobm9kZSwgY29udGV4dCkge1xuICAgIGlmICghKG5vZGUgaW5zdGFuY2VvZiBPYmplY3QpKSB7XG5cdFx0cmV0dXJuIG5vZGU7XG5cdH1cbiAgICB2YXIgYXN5bmNSZW5kZXJpbmcgPSBudWxsO1xuICAgIHZhciB0eXBlID0gZ2V0Tm9kZVR5cGUobm9kZSk7XG4gICAgaWYgKHR5cGUgaW5zdGFuY2VvZiBGdW5jdGlvbikge1xuICAgICAgICAvLyBpdCdzIGEgY29tcG9uZW50XG4gICAgICAgIHZhciByZW5kZXJlZDtcbiAgICAgICAgdmFyIHByb3BzID0gZ2V0Tm9kZVByb3BzKG5vZGUsIHR5cGUpO1xuICAgICAgICBpZiAodHlwZS5wcm90b3R5cGUgJiYgdHlwZS5wcm90b3R5cGUucmVuZGVyIGluc3RhbmNlb2YgRnVuY3Rpb24pIHtcbiAgICAgICAgICAgIC8vIHN0YXRlZnVsIGNvbXBvbmVudFxuICAgICAgICAgICAgdmFyIGNvbXBvbmVudENsYXNzID0gdHlwZTtcbiAgICAgICAgICAgIHZhciBjb21wb25lbnQgPSBuZXcgY29tcG9uZW50Q2xhc3MocHJvcHMsIGNvbnRleHQpO1xuICAgICAgICAgICAgY29tcG9uZW50LnByb3BzID0gcHJvcHM7XG4gICAgICAgICAgICBjb21wb25lbnQuY29udGV4dCA9IGNvbnRleHQ7XG4gICAgICAgICAgICB2YXIgc3RhdGUgPSBjb21wb25lbnQuc3RhdGU7XG4gICAgICAgICAgICBpZiAoY29tcG9uZW50Q2xhc3MuZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzKSB7XG4gICAgICAgICAgICAgICAgdmFyIG9yaWdpbmFsU3RhdGUgPSBzdGF0ZTtcbiAgICAgICAgICAgICAgICB2YXIgZGVyaXZlZFN0YXRlID0gY29tcG9uZW50Q2xhc3MuZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzKHByb3BzLCBvcmlnaW5hbFN0YXRlKTtcbiAgICAgICAgICAgICAgICBzdGF0ZSA9IHt9O1xuICAgICAgICAgICAgICAgIGFzc2lnbihzdGF0ZSwgb3JpZ2luYWxTdGF0ZSk7XG4gICAgICAgICAgICAgICAgYXNzaWduKHN0YXRlLCBkZXJpdmVkU3RhdGUpO1xuICAgICAgICAgICAgICAgIGNvbXBvbmVudC5zdGF0ZSA9IHN0YXRlO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChjb21wb25lbnQuY29tcG9uZW50V2lsbE1vdW50KSB7XG4gICAgICAgICAgICAgICAgaWYgKCFJU19QUkVBQ1QpIHtcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50LnVwZGF0ZXIgPSBSZWFjdFVwZGF0ZXI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbXBvbmVudC5jb21wb25lbnRXaWxsTW91bnQoKTtcbiAgICAgICAgICAgICAgICBzdGF0ZSA9IGNvbXBvbmVudC5zdGF0ZTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoY29tcG9uZW50LlVOU0FGRV9jb21wb25lbnRXaWxsTW91bnQpIHtcbiAgICAgICAgICAgICAgICBpZiAoIUlTX1BSRUFDVCkge1xuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQudXBkYXRlciA9IFJlYWN0VXBkYXRlcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29tcG9uZW50LlVOU0FGRV9jb21wb25lbnRXaWxsTW91bnQoKTtcbiAgICAgICAgICAgICAgICBzdGF0ZSA9IGNvbXBvbmVudC5zdGF0ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjb21wb25lbnQucmVsYWtzICYmIGNvbXBvbmVudC5yZW5kZXJBc3luYyBpbnN0YW5jZW9mIEZ1bmN0aW9uKSB7XG4gICAgICAgICAgICAgICAgLy8gY3JlYXRlIGJvZ3VzIG1lYW53aGlsZSBvYmplY3QgdGhhdCBkb2Vzbid0IGRvIGFueXRoaW5nXG4gICAgICAgICAgICAgICAgdmFyIG1lYW53aGlsZSA9IG5ldyBNZWFud2hpbGUoY29tcG9uZW50KTtcbiAgICAgICAgICAgICAgICBpZiAoSVNfUFJFQUNUKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlbmRlcmVkID0gY29tcG9uZW50LnJlbmRlckFzeW5jKG1lYW53aGlsZSwgcHJvcHMsIHN0YXRlLCBjb250ZXh0KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZW5kZXJlZCA9IGNvbXBvbmVudC5yZW5kZXJBc3luYyhtZWFud2hpbGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoaXNQcm9taXNlKHJlbmRlcmVkKSkge1xuICAgICAgICAgICAgICAgICAgICBhc3luY1JlbmRlcmluZyA9IHJlbmRlcmVkO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKElTX1BSRUFDVCkge1xuICAgICAgICAgICAgICAgICAgICByZW5kZXJlZCA9IGNvbXBvbmVudC5yZW5kZXIocHJvcHMsIHN0YXRlLCBjb250ZXh0KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZW5kZXJlZCA9IGNvbXBvbmVudC5yZW5kZXIoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBzdGF0ZWxlc3MgY29tcG9uZW50XG4gICAgICAgICAgICB2YXIgc3RhdGVsZXNzQ29tcG9uZW50RnVuYyA9IHR5cGU7XG4gICAgICAgICAgICByZW5kZXJlZCA9IHN0YXRlbGVzc0NvbXBvbmVudEZ1bmMocHJvcHMsIGNvbnRleHQpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghYXN5bmNSZW5kZXJpbmcpIHtcbiAgICAgICAgICAgIC8vIGhhcnZlc3Qgd2hhdCB3YXMgcmVuZGVyZWRcbiAgICAgICAgICAgIHJldHVybiBoYXJ2ZXN0Tm9kZShyZW5kZXJlZCwgY29udGV4dCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyB3YWl0IGZvciBhc3luY2hyb25vdXMgcmVuZGVyaW5nIHRvIGZpbmlzaFxuICAgICAgICAgICAgcmV0dXJuIGFzeW5jUmVuZGVyaW5nLnRoZW4oZnVuY3Rpb24ocmVuZGVyZWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaGFydmVzdE5vZGUocmVuZGVyZWQsIGNvbnRleHQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICAvLyBoYXJ2ZXN0IEhUTUwrdGV4dCBub2RlcyBmcm9tIGNoaWxkcmVuXG4gICAgICAgIHJldHVybiBoYXJ2ZXN0Q2hpbGRyZW4obm9kZSwgY29udGV4dCk7XG4gICAgfVxufVxuXG4vKipcbiAqIEhhcnZlc3QgSFRNTCBhbmQgdGV4dCBub2RlcyBvZiBhIG5vZGUncyBjaGlsZHJlblxuICpcbiAqIEBwYXJhbSAge1JlYWN0RWxlbWVudHxWTm9kZX0gbm9kZVxuICogQHBhcmFtICB7T2JqZWN0fSBjb250ZXh0XG4gKlxuICogQHJldHVybiB7UmVhY3RFbGVtZW50fFZOb2RlfFByb21pc2U8UmVhY3RFbGVtZW50fFZOb2RlPn1cbiAqL1xuZnVuY3Rpb24gaGFydmVzdENoaWxkcmVuKG5vZGUsIGNvbnRleHQpIHtcbiAgICB2YXIgY2hpbGRyZW4gPSBnZXROb2RlQ2hpbGRyZW4obm9kZSk7XG4gICAgdmFyIG5ld0NoaWxkcmVuO1xuICAgIGlmIChjaGlsZHJlbiBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgIG5ld0NoaWxkcmVuID0gaGFydmVzdE5vZGVzKGNoaWxkcmVuLCBjb250ZXh0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBuZXdDaGlsZHJlbiA9IGhhcnZlc3ROb2RlKGNoaWxkcmVuLCBjb250ZXh0KTtcbiAgICB9XG4gICAgdmFyIGFzeW5jUmVuZGVyaW5nID0gbnVsbDtcbiAgICBpZiAoaXNQcm9taXNlKG5ld0NoaWxkcmVuKSkge1xuICAgICAgICBhc3luY1JlbmRlcmluZyA9IG5ld0NoaWxkcmVuO1xuICAgIH1cbiAgICBpZiAobmV3Q2hpbGRyZW4gPT09IGNoaWxkcmVuKSB7XG4gICAgICAgIHJldHVybiBub2RlO1xuICAgIH1cbiAgICBpZiAoIWFzeW5jUmVuZGVyaW5nKSB7XG4gICAgICAgIC8vIHJldHVybiBuZXcgbm9kZSB3aXRoIG5ldyBjaGlsZHJlbiBpbW1lZGlhdGVcbiAgICAgICAgcmV0dXJuIHJlcGxhY2VDaGlsZHJlbihub2RlLCBuZXdDaGlsZHJlbik7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgLy8gd2FpdCBmb3IgYXN5bmNocm91bm91cyByZW5kZXJpbmcgb2YgY2hpbGRyZW5cbiAgICAgICAgcmV0dXJuIGFzeW5jUmVuZGVyaW5nLnRoZW4oZnVuY3Rpb24obmV3Q2hpbGRyZW4pIHtcbiAgICAgICAgICAgIHJldHVybiByZXBsYWNlQ2hpbGRyZW4obm9kZSwgbmV3Q2hpbGRyZW4pO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5cbi8qKlxuICogSGFydmVzdCBIVE1MIGFuZCB0ZXh0IG5vZGVzIGZyb20gYW4gYXJyYXlcbiAqXG4gKiBAcGFyYW0gIHtBcnJheTxSZWFjdEVsZW1lbnR8Vk5vZGU+fSBub2RlXG4gKiBAcGFyYW0gIHtPYmplY3R9IGNvbnRleHRcbiAqXG4gKiBAcmV0dXJuIHtBcnJheXxQcm9taXNlPEFycmF5Pn1cbiAqL1xuZnVuY3Rpb24gaGFydmVzdE5vZGVzKG5vZGVzLCBjb250ZXh0KSB7XG4gICAgdmFyIGNoYW5nZWQgPSBmYWxzZTtcbiAgICB2YXIgYXN5bmNSZW5kZXJpbmdSZXF1aXJlZCA9IGZhbHNlO1xuICAgIHZhciBuZXdOb2RlcyA9IG5vZGVzLm1hcChmdW5jdGlvbihlbGVtZW50KSB7XG4gICAgICAgIHZhciBoYXJ2ZXN0ZWQ7XG4gICAgICAgIGlmIChlbGVtZW50IGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgICAgICAgIGhhcnZlc3RlZCA9IGhhcnZlc3ROb2RlcyhlbGVtZW50LCBjb250ZXh0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGhhcnZlc3RlZCA9IGhhcnZlc3ROb2RlKGVsZW1lbnQsIGNvbnRleHQpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpc1Byb21pc2UoaGFydmVzdGVkKSkge1xuICAgICAgICAgICAgYXN5bmNSZW5kZXJpbmdSZXF1aXJlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgY2hhbmdlZCA9IGNoYW5nZWQgfHwgKGhhcnZlc3RlZCAhPT0gZWxlbWVudCk7XG4gICAgICAgIHJldHVybiBoYXJ2ZXN0ZWQ7XG4gICAgfSk7XG4gICAgaWYgKCFhc3luY1JlbmRlcmluZ1JlcXVpcmVkKSB7XG4gICAgICAgIC8vIHJldHVybiBvcmlnaW5hbCBsaXN0IGlmIG5vdGhpbmcgaGFzIGNoYW5nZWRcbiAgICAgICAgcmV0dXJuIGNoYW5nZWQgPyBuZXdOb2RlcyA6IG5vZGVzO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIHdhaXQgZm9yIHByb21pc2VzIHRvIHJlc29sdmVcbiAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKG5ld05vZGVzKTtcbiAgICB9XG59XG5cbi8qKlxuICogUmV0dXJuIGEgbmV3IG5vZGUgaWYgY2hpbGRyZW4gYXJlIGRpZmZlcmVudFxuICpcbiAqIEBwYXJhbSAge1JlYWN0RWxlbWVudHxWTm9kZX0gbm9kZVxuICogQHBhcmFtICB7QXJyYXl9IG5ld0NoaWxkcmVuXG4gKlxuICogQHJldHVybiB7UmVhY3RFbGVtZW50fFZOb2RlfVxuICovXG5mdW5jdGlvbiByZXBsYWNlQ2hpbGRyZW4obm9kZSwgbmV3Q2hpbGRyZW4pIHtcbiAgICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KG5vZGUsIHVuZGVmaW5lZCwgbmV3Q2hpbGRyZW4pO1xufVxuXG4vKipcbiAqIENvcHkgcHJvcGVydGllc1xuICpcbiAqIEBwYXJhbSAge09iamVjdH0gZGVzdFxuICogQHBhcmFtICB7T2JqZWN0fSBzcmNcbiAqXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKi9cbmZ1bmN0aW9uIGFzc2lnbihkZXN0LCBzcmMpIHtcbiAgICBmb3IgKHZhciBuYW1lIGluIHNyYykge1xuICAgICAgICBkZXN0W25hbWVdID0gc3JjW25hbWVdO1xuICAgIH1cbiAgICByZXR1cm4gZGVzdDtcbn1cblxuLyoqXG4gKiBSZXR1cm4gYSBub2RlJ3MgdHlwZVxuICpcbiAqIEBwYXJhbSAge1JlYWN0RWxlbWVudHxWTm9kZX0gbm9kZVxuICpcbiAqIEByZXR1cm4ge1N0cmluZ3xGdW5jdGlvbn1cbiAqL1xuZnVuY3Rpb24gZ2V0Tm9kZVR5cGUobm9kZSkge1xuICAgIHJldHVybiAoSVNfUFJFQUNUKSA/IG5vZGUubm9kZU5hbWUgOiBub2RlLnR5cGU7XG59XG5cbi8qKlxuICogUmV0dXJuIHRoZSBwcm9wcyBvZiBhIG5vZGVcbiAqXG4gKiBAcGFyYW0gIHtSZWFjdEVsZW1lbnR8Vk5vZGV9IG5vZGVcbiAqIEBwYXJhbSAge0Z1bmN0aW9ufSB0eXBlXG4gKlxuICogQHJldHVybiB7T2JqZWN0fVxuICovXG5mdW5jdGlvbiBnZXROb2RlUHJvcHMobm9kZSwgdHlwZSkge1xuXHR2YXIgcHJvcHMgPSB7fVxuICAgIGlmIChJU19QUkVBQ1QpIHtcbiAgICAgICAgYXNzaWduKHByb3BzLCBub2RlLmF0dHJpYnV0ZXMpO1xuICAgICAgICBwcm9wcy5jaGlsZHJlbiA9IG5vZGUuY2hpbGRyZW47XG4gICAgfSBlbHNlIHtcbiAgICAgICAgYXNzaWduKHByb3BzLCBub2RlLnByb3BzKTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHByb3BzLCAnY2hpbGRyZW4nLCB7IHZhbHVlOiBub2RlLnByb3BzLmNoaWxkcmVuIH0pO1xuICAgIH1cblxuICAgIC8vIGFwcGx5IGRlZmF1bHQgcHJvcHNcbiAgICB2YXIgZGVmYXVsdFByb3BzID0gdHlwZS5kZWZhdWx0UHJvcHM7XG4gICAgZm9yICh2YXIgbmFtZSBpbiBkZWZhdWx0UHJvcHMpIHtcbiAgICAgICAgaWYgKHByb3BzW25hbWVdID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHByb3BzW25hbWVdID0gZGVmYXVsdFByb3BzW25hbWVdO1xuICAgICAgICB9XG4gICAgfVxuXHRyZXR1cm4gcHJvcHM7XG59XG5cbi8qKlxuICogUmV0dXJuIHRoZSBjaGlsZHJlbiBvZiBhIG5vZGVcbiAqXG4gKiBAcGFyYW0gIHtSZWFjdEVsZW1lbnR8Vk5vZGV9IG5vZGVcbiAqXG4gKiBAcmV0dXJuIHsqfVxuICovXG5mdW5jdGlvbiBnZXROb2RlQ2hpbGRyZW4obm9kZSkge1xuICAgIGlmIChJU19QUkVBQ1QpIHtcbiAgICAgICAgcmV0dXJuIG5vZGUuY2hpbGRyZW47XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIG5vZGUucHJvcHMuY2hpbGRyZW47XG4gICAgfVxufVxuXG4vKipcbiAqIFJldHVybiB0cnVlIGlmIGdpdmVuIHZhbHVlIGhvbGQgYSBwcm9taXNlXG4gKlxuICogQHBhcmFtICB7Kn0gIHZhbHVlXG4gKlxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqL1xuZnVuY3Rpb24gaXNQcm9taXNlKHZhbHVlKSB7XG4gICAgcmV0dXJuICh2YWx1ZSBpbnN0YW5jZW9mIE9iamVjdCAmJiB2YWx1ZS50aGVuIGluc3RhbmNlb2YgRnVuY3Rpb24pO1xufVxuXG5pZiAoIUlTX1BSRUFDVCkge1xuICAgIHZhciBSZWFjdFVwZGF0ZXIgPSB7XG4gICAgICAgIGVucXVldWVDYWxsYmFjazogZnVuY3Rpb24oaW5zdCwgZikge1xuICAgICAgICAgICAgZigpO1xuICAgICAgICB9LFxuICAgICAgICBlbnF1ZXVlRm9yY2VVcGRhdGU6IGZ1bmN0aW9uKGluc3QpIHtcbiAgICAgICAgfSxcbiAgICAgICAgZW5xdWV1ZVJlcGxhY2VTdGF0ZTogZnVuY3Rpb24oaW5zdCwgc3RhdGUpIHtcbiAgICAgICAgICAgIHZhciBuZXdTdGF0ZSA9IHt9O1xuICAgICAgICAgICAgYXNzaWduKG5ld1N0YXRlLCBpbnN0KTtcbiAgICAgICAgICAgIGFzc2lnbihuZXdTdGF0ZSwgc3RhdGUpO1xuICAgICAgICAgICAgaW5zdC5zdGF0ZSA9IG5ld1N0YXRlO1xuICAgICAgICB9LFxuICAgICAgICBlbnF1ZXVlU2V0U3RhdGU6IGZ1bmN0aW9uKGluc3QsIHBhcnRpYWxTdGF0ZSkge1xuICAgICAgICAgICAgdmFyIG5ld1N0YXRlID0ge307XG4gICAgICAgICAgICBhc3NpZ24obmV3U3RhdGUsIGluc3Quc3RhdGUpO1xuICAgICAgICAgICAgYXNzaWduKG5ld1N0YXRlLCBwYXJ0aWFsU3RhdGUpO1xuICAgICAgICAgICAgaW5zdC5zdGF0ZSA9IG5ld1N0YXRlO1xuICAgICAgICB9LFxuICAgICAgICBpc01vdW50ZWQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0sXG4gICAgfVxufVxuXG5oYXJ2ZXN0LmhhcnZlc3QgPSBoYXJ2ZXN0O1xucmV0dXJuIGhhcnZlc3Q7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC9ob21lL2NsZW9uZy9yZWxha3MtaGFydmVzdC9mdW5jdGlvbi5qcyIsImZ1bmN0aW9uIE1lYW53aGlsZShjb21wb25lbnQsIHByZXZpb3VzbHkpIHtcbiAgICB2YXIgcmVsYWtzID0gY29tcG9uZW50LnJlbGFrcztcbiAgICB0aGlzLmNvbXBvbmVudCA9IGNvbXBvbmVudDtcbiAgICB0aGlzLnN5bmNocm9ub3VzID0gZmFsc2U7XG4gICAgdGhpcy5zaG93aW5nUHJvZ3Jlc3MgPSBmYWxzZTtcbiAgICB0aGlzLnNob3dpbmdQcm9ncmVzc0luaXRpYWxseSA9IGZhbHNlO1xuICAgIHRoaXMuZGVsYXlXaGVuRW1wdHkgPSBJbmZpbml0eTtcbiAgICB0aGlzLmRlbGF5V2hlblJlbmRlcmVkID0gSW5maW5pdHk7XG4gICAgdGhpcy5jYW5jZWxlZCA9IGZhbHNlO1xuICAgIHRoaXMucHJpb3IgPSByZWxha3MucHJldmlvdXM7XG4gICAgdGhpcy5wcmV2aW91cyA9IHJlbGFrcy5wcmV2aW91cztcbiAgICB0aGlzLmN1cnJlbnQgPSByZWxha3MuY3VycmVudDtcbiAgICB0aGlzLnVwZGF0ZVRpbWVvdXQgPSAwO1xuICAgIHRoaXMuc3RhcnRUaW1lID0gZ2V0VGltZSgpO1xuICAgIHRoaXMub25DYW5jZWwgPSBudWxsO1xuICAgIHRoaXMub25Db21wbGV0ZSA9IG51bGw7XG4gICAgdGhpcy5vblByb2dyZXNzID0gbnVsbDtcbn1cblxudmFyIHByb3RvdHlwZSA9IE1lYW53aGlsZS5wcm90b3R5cGU7XG5cbnByb3RvdHlwZS5jaGVjayA9IGZ1bmN0aW9uKCkge1xufVxuXG5wcm90b3R5cGUuc2hvdyA9IGZ1bmN0aW9uKGVsZW1lbnQsIGRpc3Bvc2l0aW9uKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xufTtcblxucHJvdG90eXBlLnJldmlzaW5nID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xufTtcblxucHJvdG90eXBlLmRlbGF5ID0gZnVuY3Rpb24oZW1wdHksIHJlbmRlcmVkKSB7XG59O1xuXG5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24oZm9yY2VkKSB7XG59O1xuXG5wcm90b3R5cGUuY2FuY2VsID0gZnVuY3Rpb24oKSB7XG59O1xuXG5wcm90b3R5cGUuZmluaXNoID0gZnVuY3Rpb24oKSB7XG59O1xuXG5wcm90b3R5cGUuY2xlYXIgPSBmdW5jdGlvbigpIHtcbn07XG5cbnZhciBzY3JpcHRTdGFydFRpbWUgPSBuZXcgRGF0ZTtcblxuLyoqXG4gKiBSZXR1cm4gdGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgcGFzc2VkIHNpbmNlIHN0YXJ0IG9mIHRoaXMgc2NyaXB0XG4gKlxuICogQHJldHVybiB7TnVtYmVyfVxuICovXG5mdW5jdGlvbiBnZXRUaW1lKCkge1xuICAgIHJldHVybiAobmV3IERhdGUpIC0gc2NyaXB0U3RhcnRUaW1lO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHByb3RvdHlwZS5jb25zdHJ1Y3RvcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAvaG9tZS9jbGVvbmcvcmVsYWtzLWhhcnZlc3QvbWVhbndoaWxlLmpzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Z1bmN0aW9uJykocmVxdWlyZSgncHJlYWN0JykpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC9ob21lL2NsZW9uZy9yZWxha3MtaGFydmVzdC9wcmVhY3QuanMiLCJ2YXIgU1NSID0gKHR5cGVvZiB3aW5kb3cgIT09ICdvYmplY3QnKTtcbnZhciBkZWZhdWx0T3B0aW9ucyA9IHtcbiAgICB1c2VIYXNoRmFsbGJhY2s6IGZhbHNlLFxuICAgIHRyYWNrTGlua3M6IChTU1IpID8gZmFsc2UgOiB0cnVlLFxuICAgIHRyYWNrTG9jYXRpb246IChTU1IpID8gZmFsc2UgOiB0cnVlLFxuICAgIGJhc2VQYXRoOiAnJyxcbiAgICBpbml0aWFsUGF0aDogJy8nLFxufTtcblxuZnVuY3Rpb24gUmVsYWtzUm91dGVNYW5hZ2VyKG9wdGlvbnMpIHtcbiAgICB0aGlzLnVybCA9ICcnO1xuICAgIHRoaXMubmFtZSA9ICcnO1xuICAgIHRoaXMucGFyYW1zID0gJyc7XG4gICAgdGhpcy5jb250ZXh0ID0gJyc7XG4gICAgdGhpcy5yb3V0ZXMgPSB7fTtcbiAgICB0aGlzLmhpc3RvcnkgPSBbXTtcbiAgICB0aGlzLnN0YXJ0VGltZSA9IGdldFRpbWUoKTtcbiAgICB0aGlzLmxpc3RlbmVycyA9IFtdO1xuICAgIHRoaXMub3B0aW9ucyA9IHt9O1xuICAgIHRoaXMucmV3cml0ZXMgPSBbXTtcbiAgICBmb3IgKHZhciBuYW1lIGluIGRlZmF1bHRPcHRpb25zKSB7XG4gICAgICAgIGlmIChvcHRpb25zICYmIG9wdGlvbnNbbmFtZV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5vcHRpb25zW25hbWVdID0gb3B0aW9uc1tuYW1lXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMub3B0aW9uc1tuYW1lXSA9IGRlZmF1bHRPcHRpb25zW25hbWVdO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChvcHRpb25zICYmIG9wdGlvbnMucm91dGVzKSB7XG4gICAgICAgIHRoaXMuYWRkUm91dGVzKG9wdGlvbnMucm91dGVzKTtcbiAgICB9XG4gICAgaWYgKG9wdGlvbnMgJiYgb3B0aW9ucy5yZXdyaXRlcykge1xuICAgICAgICB0aGlzLmFkZFJld3JpdGVzKG9wdGlvbnMucmV3cml0ZXMpO1xuICAgIH1cblxuICAgIHRoaXMuaGFuZGxlTGlua0NsaWNrID0gdGhpcy5oYW5kbGVMaW5rQ2xpY2suYmluZCh0aGlzKTtcbiAgICB0aGlzLmhhbmRsZVBvcFN0YXRlID0gdGhpcy5oYW5kbGVQb3BTdGF0ZS5iaW5kKHRoaXMpO1xufVxuXG52YXIgcHJvdG90eXBlID0gUmVsYWtzUm91dGVNYW5hZ2VyLnByb3RvdHlwZTtcblxucHJvdG90eXBlLmluaXRpYWxpemUgPSBmdW5jdGlvbigpIHtcbiAgICBpZiAodGhpcy5vcHRpb25zLnRyYWNrTGlua3MpIHtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5oYW5kbGVMaW5rQ2xpY2spO1xuICAgIH1cbiAgICB2YXIgdXJsO1xuICAgIGlmICh0aGlzLm9wdGlvbnMudHJhY2tMb2NhdGlvbikge1xuICAgICAgICB1cmwgPSB0aGlzLmdldExvY2F0aW9uVVJMKHdpbmRvdy5sb2NhdGlvbik7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsIHRoaXMuaGFuZGxlUG9wU3RhdGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHVybCA9IHRoaXMub3B0aW9ucy5pbml0aWFsUGF0aDtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuY2hhbmdlKHVybCwgeyByZXBsYWNlOiB0cnVlIH0pO1xufTtcblxucHJvdG90eXBlLnNodXRkb3duID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIG9wdCA9IHRoaXMub3B0aW9ucztcbiAgICBpZiAob3B0LnRyYWNrTGlua3MpIHtcbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5oYW5kbGVMaW5rQ2xpY2spO1xuICAgIH1cbiAgICBpZiAob3B0LnRyYWNrTG9jYXRpb24pIHtcbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJywgdGhpcy5oYW5kbGVQb3BTdGF0ZSk7XG4gICAgfVxufTtcblxucHJvdG90eXBlLmFkZEV2ZW50TGlzdGVuZXIgPSBmdW5jdGlvbih0eXBlLCBoYW5kbGVyKSB7XG4gICAgdGhpcy5saXN0ZW5lcnMucHVzaCh7ICB0eXBlOiB0eXBlLCAgaGFuZGxlcjogaGFuZGxlciB9KTtcbn07XG5cbnByb3RvdHlwZS5yZW1vdmVFdmVudExpc3RlbmVyID0gZnVuY3Rpb24odHlwZSwgaGFuZGxlcikge1xuICAgIHRoaXMubGlzdGVuZXJzID0gdGhpcy5saXN0ZW5lcnMuZmlsdGVyKGZ1bmN0aW9uKGxpc3RlbmVyKSB7XG4gICAgICAgIHJldHVybiAhKGxpc3RlbmVyLnR5cGUgPT09IHR5cGUgJiYgbGlzdGVuZXIuaGFuZGxlciA9PT0gaGFuZGxlcik7XG4gICAgfSlcbn07XG5cbnByb3RvdHlwZS50cmlnZ2VyRXZlbnQgPSBmdW5jdGlvbihldnQpIHtcbiAgICB2YXIgZmlyZWQgPSBmYWxzZTtcbiAgICB0aGlzLmxpc3RlbmVycy5mb3JFYWNoKGZ1bmN0aW9uKGxpc3RlbmVyKSB7XG4gICAgICAgIGlmIChsaXN0ZW5lci50eXBlID09PSBldnQudHlwZSAmJiBsaXN0ZW5lci5oYW5kbGVyKSB7XG4gICAgICAgICAgICBmaXJlZCA9IHRydWU7XG4gICAgICAgICAgICBsaXN0ZW5lci5oYW5kbGVyKGV2dCk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gZmlyZWQ7XG59O1xuXG5wcm90b3R5cGUuYWRkUm91dGVzID0gZnVuY3Rpb24ocm91dGVzKSB7XG4gICAgZm9yICh2YXIgbmFtZSBpbiByb3V0ZXMpIHtcbiAgICAgICAgaWYgKHJvdXRlc1tuYW1lXSAhPT0gdGhpcy5yb3V0ZXNbbmFtZV0pIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnJvdXRlc1tuYW1lXSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignRHVwbGljYXRlIHJvdXRlOiAnICsgbmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnJvdXRlc1tuYW1lXSA9IHJvdXRlc1tuYW1lXTtcbiAgICAgICAgfVxuICAgIH1cbn07XG5cbnByb3RvdHlwZS5yZW1vdmVSb3V0ZXMgPSBmdW5jdGlvbihyb3V0ZXMpIHtcbiAgICBmb3IgKHZhciBuYW1lIGluIHJvdXRlcykge1xuICAgICAgICBpZiAocm91dGVzW25hbWVdID09PSB0aGlzLnJvdXRlc1tuYW1lXSkge1xuICAgICAgICAgICAgZGVsZXRlIHRoaXMucm91dGVzW25hbWVdO1xuICAgICAgICB9XG4gICAgfVxufTtcblxucHJvdG90eXBlLmFkZFJld3JpdGVzID0gZnVuY3Rpb24ocmV3cml0ZXMpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgIHJld3JpdGVzLmZvckVhY2goZnVuY3Rpb24ocmV3cml0ZSkge1xuICAgICAgICBfdGhpcy5yZXdyaXRlcy5wdXNoKHJld3JpdGUpO1xuICAgIH0pO1xufTtcblxucHJvdG90eXBlLnJlbW92ZVJld3JpdGVzID0gZnVuY3Rpb24ocmV3cml0ZXMpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgIHJld3JpdGVzLmZvckVhY2goZnVuY3Rpb24ocmV3cml0ZSkge1xuICAgICAgICB2YXIgaW5kZXggPSBfdGhpcy5yZXdyaXRlcy5pbmRleE9mKHJld3JpdGUpO1xuICAgICAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICAgICAgICBfdGhpcy5yZXdyaXRlcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICB9XG4gICAgfSk7XG59O1xuXG4vKipcbiAqIENoYW5nZSB0aGUgcm91dGUgdG8gd2hhdCB0aGUgZ2l2ZW4gVVJMIHBvaW50cyB0b1xuICpcbiAqIEBwYXJhbSAge1N0cmluZ30gdXJsXG4gKiBAcGFyYW0gIHtPYmplY3R8dW5kZWZpbmVkfSBvcHRpb25zXG4gKlxuICogQHJldHVybiB7UHJvbWlzZTxCb29sZWFuPn1cbiAqL1xucHJvdG90eXBlLmNoYW5nZSA9IGZ1bmN0aW9uKHVybCwgb3B0aW9ucykge1xuICAgIHZhciBtYXRjaCA9IHRoaXMubWF0Y2godXJsKTtcbiAgICBpZiAobWF0Y2gpIHtcbiAgICAgICAgdmFyIHJlcGxhY2UgPSAob3B0aW9ucykgPyBvcHRpb25zLnJlcGxhY2UgfHwgZmFsc2UgOiBmYWxzZTtcbiAgICAgICAgdmFyIHRpbWUgPSBnZXRUaW1lKCk7XG4gICAgICAgIHJldHVybiB0aGlzLmFwcGx5KG1hdGNoLCB0aW1lLCB0cnVlLCByZXBsYWNlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgZXJyID0gbmV3IEVycm9yKCdObyByb3V0ZScpO1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyKTtcbiAgICB9XG59O1xuXG4vKipcbiAqIENoYW5nZSB0aGUgcm91dGUgdG8gdGhlIG9uZSBnaXZlbiwgYWRkaW5nIHRvIGhpc3RvcnlcbiAqXG4gKiBAcGFyYW0gIHtTdHJpbmd9IG5hbWVcbiAqIEBwYXJhbSAge09iamVjdH0gcGFyYW1zXG4gKlxuICogQHJldHVybiB7UHJvbWlzZX1cbiAqL1xucHJvdG90eXBlLnB1c2ggPSBmdW5jdGlvbihuYW1lLCBwYXJhbXMpIHtcbiAgICB0cnkge1xuICAgICAgICB2YXIgdXJsID0gdGhpcy5maW5kKG5hbWUsIHBhcmFtcyk7XG4gICAgICAgIHJldHVybiB0aGlzLmNoYW5nZSh1cmwpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyKTtcbiAgICB9XG59O1xuXG4vKipcbiAqIFJlcGxhY2UgdGhlIGN1cnJlbnQgcm91dGUgd2l0aCB0aGUgb25lIGdpdmVuXG4gKlxuICogQHBhcmFtICB7U3RyaW5nfSBuYW1lXG4gKiBAcGFyYW0gIHtPYmplY3R9IHBhcmFtc1xuICpcbiAqIEByZXR1cm4ge1Byb21pc2V9XG4gKi9cbnByb3RvdHlwZS5yZXBsYWNlID0gZnVuY3Rpb24obmFtZSwgcGFyYW1zKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgdmFyIHVybCA9IHRoaXMuZmluZChuYW1lLCBwYXJhbXMpO1xuICAgICAgICByZXR1cm4gdGhpcy5jaGFuZ2UodXJsLCB7IHJlcGxhY2U6IHRydWUgfSk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnIpO1xuICAgIH1cbn07XG5cbi8qKlxuICogR2V0IGEgVVJMIGZvciBhIHJvdXRlIGZvciB0aGUgcGFyYW1ldGVycyBnaXZlblxuICpcbiAqIEBwYXJhbSAge1N0cmluZ30gbmFtZVxuICogQHBhcmFtICB7T2JqZWN0fSBwYXJhbXNcbiAqIEBwYXJhbSAge09iamVjdHx1bmRlZmluZWR9IG5ld0NvbnRleHRcbiAqXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKi9cbnByb3RvdHlwZS5maW5kID0gZnVuY3Rpb24obmFtZSwgcGFyYW1zLCBuZXdDb250ZXh0KSB7XG4gICAgdmFyIHVybFBhcnRzID0gdGhpcy5maWxsKG5hbWUsIHBhcmFtcyk7XG4gICAgdmFyIGNvbnRleHQgPSB0aGlzLmNvbnRleHQ7XG4gICAgaWYgKG5ld0NvbnRleHQpIHtcbiAgICAgICAgY29udGV4dCA9IHt9O1xuICAgICAgICBmb3IgKHZhciBuYW1lIGluIHRoaXMuY29udGV4dCkge1xuICAgICAgICAgICAgY29udGV4dFtuYW1lXSA9IHRoaXMuY29udGV4dFtuYW1lXTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKHZhciBuYW1lIGluIG5ld0NvbnRleHQpIHtcbiAgICAgICAgICAgIGNvbnRleHRbbmFtZV0gPSBuZXdDb250ZXh0W25hbWVdO1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29udGV4dCA9IHRoaXMuY29udGV4dDtcbiAgICB9XG4gICAgdGhpcy5yZWJhc2UoJ3RvJywgdXJsUGFydHMpO1xuICAgIHRoaXMucmV3cml0ZSgndG8nLCB1cmxQYXJ0cywgY29udGV4dCk7XG4gICAgdmFyIHVybCA9IGNvbXBvc2VVUkwodXJsUGFydHMpO1xuICAgIGlmICh0aGlzLm9wdGlvbnMudXNlSGFzaEZhbGxiYWNrKSB7XG4gICAgICAgIHVybCA9ICcjJyArIHVybDtcbiAgICB9XG4gICAgcmV0dXJuIHVybDtcbn07XG5cbi8qKlxuICogR28gYmFjayB0byB0aGUgcHJldmlvdXMgcm91dGUgKGlmIHBvc3NpYmxlKVxuICpcbiAqIEByZXR1cm4ge1Byb21pc2V9XG4gKi9cbnByb3RvdHlwZS5iYWNrID0gZnVuY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMuaGlzdG9yeS5sZW5ndGggPD0gMSkge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKCdDYW5ub3QgZ28gYmV5b25kIHN0YXJ0aW5nIHBhZ2UnKSk7XG4gICAgfVxuICAgIGlmICh0aGlzLm9wdGlvbnMudHJhY2tMb2NhdGlvbikge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICBfdGhpcy5iYWNrUmVzb2x2ZSA9IHJlc29sdmU7XG4gICAgICAgICAgICBfdGhpcy5iYWNrUmVqZWN0ID0gcmVqZWN0O1xuICAgICAgICAgICAgd2luZG93Lmhpc3RvcnkuYmFjaygpO1xuXG4gICAgICAgICAgICAvLyBqdXN0IGluIGNhc2UgdGhlIG9wZXJhdGlvbiBmYWlscyBmb3Igc29tZSByZWFzb25cbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgdmFyIHJlamVjdCA9IF90aGlzLmJhY2tSZWplY3Q7XG4gICAgICAgICAgICAgICAgaWYgKHJlamVjdCkge1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5iYWNrUmVzb2x2ZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuYmFja1JlamVjdCA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcignVW5hYmxlIHRvIG5hdmlnYXRlIHRvIHByZXZpb3VzIHBhZ2UnKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgNTApO1xuICAgICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgcHJldmlvdXMgPSB0aGlzLmhpc3RvcnlbdGhpcy5oaXN0b3J5Lmxlbmd0aCAtIDJdO1xuICAgICAgICByZXR1cm4gdGhpcy5hcHBseShwcmV2aW91cywgcHJldmlvdXMudGltZSwgZmFsc2UsIGZhbHNlKTtcbiAgICB9XG59O1xuXG4vKipcbiAqIE1hdGNoIGEgVVJMIHdpdGggYSByb3V0ZVxuICpcbiAqIEBwYXJhbSAge1N0cmluZ30gdXJsXG4gKlxuICogQHJldHVybiB7T2JqZWN0fG51bGx9XG4gKi9cbnByb3RvdHlwZS5tYXRjaCA9IGZ1bmN0aW9uKHVybCkge1xuICAgIC8vIHBlcmZvcm0gcmV3cml0ZXNcbiAgICB2YXIgdXJsUGFydHMgPSBwYXJzZVVSTCh1cmwpO1xuICAgIHZhciBjb250ZXh0ID0ge307XG4gICAgdGhpcy5yZXdyaXRlKCdmcm9tJywgdXJsUGFydHMsIGNvbnRleHQpO1xuXG4gICAgLy8gcmVtb3ZlIGJhc2UgcGF0aFxuICAgIGlmICghdGhpcy5yZWJhc2UoJ2Zyb20nLCB1cmxQYXJ0cykpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgLy8gbG9vayBmb3IgbWF0Y2hpbmcgcm91dGVcbiAgICB2YXIgcGFyYW1zID0ge307XG4gICAgdmFyIHJvdXRlcyA9IHRoaXMucm91dGVzO1xuICAgIGZvciAodmFyIG5hbWUgaW4gcm91dGVzKSB7XG4gICAgICAgIHZhciByb3V0ZURlZiA9IHJvdXRlc1tuYW1lXTtcbiAgICAgICAgdmFyIHR5cGVzID0gcm91dGVEZWYucGFyYW1zO1xuICAgICAgICAvLyBpZiB0aGUgcGF0aCBtYXRjaGVzLCB0aGVuIGl0J3MgYSBtYXRjaFxuICAgICAgICAvLyBxdWVyeSBhbmQgaGFzaCB2YXJpYWJsZXMgYXJlIHRyZWF0ZWQgYXMgb3B0aW9uc1xuICAgICAgICBpZiAobWF0Y2hUZW1wbGF0ZSh1cmxQYXJ0cy5wYXRoLCByb3V0ZURlZi5wYXRoLCB0eXBlcywgcGFyYW1zLCB0cnVlKSkge1xuICAgICAgICAgICAgZm9yICh2YXIgcXVlcnlWYXJOYW1lIGluIHJvdXRlRGVmLnF1ZXJ5KSB7XG4gICAgICAgICAgICAgICAgdmFyIHF1ZXJ5VmFyVGVtcGxhdGUgPSByb3V0ZURlZi5xdWVyeVtxdWVyeVZhck5hbWVdO1xuICAgICAgICAgICAgICAgIHZhciBxdWVyeVZhclZhbHVlID0gdXJsUGFydHMucXVlcnlbcXVlcnlWYXJOYW1lXTtcbiAgICAgICAgICAgICAgICBtYXRjaFRlbXBsYXRlKHF1ZXJ5VmFyVmFsdWUsIHF1ZXJ5VmFyVGVtcGxhdGUsIHR5cGVzLCBwYXJhbXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbWF0Y2hUZW1wbGF0ZSh1cmxQYXJ0cy5oYXNoLCByb3V0ZURlZi5oYXNoLCB0eXBlcywgcGFyYW1zKTtcbiAgICAgICAgICAgIHJldHVybiB7IHVybDogdXJsLCBuYW1lOiBuYW1lLCBwYXJhbXM6IHBhcmFtcywgY29udGV4dDogY29udGV4dCB9O1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xufTtcblxuLyoqXG4gKiBMb2FkIG5lY2Vzc2FyeSBtb2R1bGUocykgZm9yIGEgcm91dGUsIGFwcGVuZCB0byBoaXN0b3J5LCBzZXQgdGhlIHN0YXRlLFxuICogYW5kIHRyaWdnZXIgY2hhbmdlIGV2ZW50XG4gKlxuICogQHBhcmFtICB7T2JqZWN0fSBtYXRjaFxuICogQHBhcmFtICB7U3RyaW5nfSB0aW1lXG4gKiBAcGFyYW0gIHtCb29sZWFufSBzeW5jXG4gKiBAcGFyYW0gIHtCb29sZWFufSByZXBsYWNlXG4gKlxuICogQHJldHVybiB7UHJvbWlzZTxCb29sZWFuPn1cbiAqL1xucHJvdG90eXBlLmFwcGx5ID0gZnVuY3Rpb24obWF0Y2gsIHRpbWUsIHN5bmMsIHJlcGxhY2UpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgIHZhciBjb25maXJtYXRpb25FdmVudCA9IG5ldyBSZWxha3NSb3V0ZU1hbmFnZXJFdmVudCgnYmVmb3JlY2hhbmdlJywgdGhpcywgbWF0Y2gpO1xuICAgIHRoaXMudHJpZ2dlckV2ZW50KGNvbmZpcm1hdGlvbkV2ZW50KTtcbiAgICByZXR1cm4gY29uZmlybWF0aW9uRXZlbnQud2FpdEZvckRlY2lzaW9uKCkudGhlbihmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKGNvbmZpcm1hdGlvbkV2ZW50LmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gX3RoaXMubG9hZChtYXRjaCkudGhlbihmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGlmICh0aW1lID49IF90aGlzLnN0YXJ0VGltZSkge1xuICAgICAgICAgICAgICAgIGlmICghcmVwbGFjZSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBzZWUgaWYgd2UncmUgZ29pbmcgYmFja3dhcmRcbiAgICAgICAgICAgICAgICAgICAgdmFyIGluZGV4ID0gLTE7XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgX3RoaXMuaGlzdG9yeS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKF90aGlzLmhpc3RvcnlbaV0udGltZSA9PT0gdGltZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4ID0gaTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyByZW1vdmUgZW50cnkgYW5kIHRob3NlIGFmdGVyIGl0XG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5oaXN0b3J5LnNwbGljZShpbmRleCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIGdvaW5nIGludG8gaGlzdG9yeSBwcmlvciB0byBwYWdlIGxvYWRcbiAgICAgICAgICAgICAgICAvLyByZW1lbWJlciB0aGUgdGltZSBmb3J3YXJkIG1vdmVtZW50IGZyb20gZGVlcCBpbnRvIHRoZSBwYXN0XG4gICAgICAgICAgICAgICAgLy8gd29ya3MgY29ycmVjdGx5XG4gICAgICAgICAgICAgICAgX3RoaXMuaGlzdG9yeSA9IFtdO1xuICAgICAgICAgICAgICAgIF90aGlzLnN0YXJ0VGltZSA9IHRpbWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgZW50cnkgPSAge1xuICAgICAgICAgICAgICAgIHVybDogbWF0Y2gudXJsLFxuICAgICAgICAgICAgICAgIG5hbWU6IG1hdGNoLm5hbWUsXG4gICAgICAgICAgICAgICAgcGFyYW1zOiBtYXRjaC5wYXJhbXMsXG4gICAgICAgICAgICAgICAgY29udGV4dDogbWF0Y2guY29udGV4dCxcbiAgICAgICAgICAgICAgICB0aW1lOiB0aW1lXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgaWYgKHJlcGxhY2UgJiYgX3RoaXMuaGlzdG9yeS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuaGlzdG9yeVtfdGhpcy5oaXN0b3J5Lmxlbmd0aCAtIDFdID0gZW50cnk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIF90aGlzLmhpc3RvcnkucHVzaChlbnRyeSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoc3luYykge1xuICAgICAgICAgICAgICAgIF90aGlzLnNldExvY2F0aW9uVVJMKG1hdGNoLnVybCwgeyB0aW1lOiB0aW1lIH0sIHJlcGxhY2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgX3RoaXMudXJsID0gbWF0Y2gudXJsO1xuICAgICAgICAgICAgX3RoaXMubmFtZSA9IG1hdGNoLm5hbWU7XG4gICAgICAgICAgICBfdGhpcy5wYXJhbXMgPSBtYXRjaC5wYXJhbXM7XG4gICAgICAgICAgICBfdGhpcy5jb250ZXh0ID0gbWF0Y2guY29udGV4dDtcblxuICAgICAgICAgICAgX3RoaXMudHJpZ2dlckV2ZW50KG5ldyBSZWxha3NSb3V0ZU1hbmFnZXJFdmVudCgnY2hhbmdlJywgX3RoaXMpKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG59O1xuXG4vKipcbiAqIEZpbGwgYSByb3V0ZSB0ZW1wbGF0ZXMgd2l0aCBwYXJhbWV0ZXJzXG4gKlxuICogQHBhcmFtICB7U3RyaW5nfSBuYW1lXG4gKiBAcGFyYW0gIHtPYmplY3R9IHBhcmFtc1xuICpcbiAqIEByZXR1cm4ge09iamVjdH1cbiAqL1xucHJvdG90eXBlLmZpbGwgPSBmdW5jdGlvbihuYW1lLCBwYXJhbXMpIHtcbiAgICB2YXIgcm91dGVEZWYgPSB0aGlzLnJvdXRlc1tuYW1lXTtcbiAgICBpZiAoIXJvdXRlRGVmKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignTm8gcm91dGUgYnkgdGhhdCBuYW1lOiAnICsgbmFtZSk7XG4gICAgfVxuICAgIHZhciB0eXBlcyA9IHJvdXRlRGVmLnBhcmFtcztcbiAgICB2YXIgcGF0aCA9IGZpbGxUZW1wbGF0ZShyb3V0ZURlZi5wYXRoLCB0eXBlcywgcGFyYW1zLCB0cnVlKTtcbiAgICB2YXIgaGFzaCA9IGZpbGxUZW1wbGF0ZShyb3V0ZURlZi5oYXNoLCB0eXBlcywgcGFyYW1zKTtcbiAgICB2YXIgcXVlcnkgPSB7fTtcbiAgICBmb3IgKHZhciBxdWVyeVZhck5hbWUgaW4gcm91dGVEZWYucXVlcnkpIHtcbiAgICAgICAgdmFyIHF1ZXJ5VmFyVGVtcGxhdGUgPSByb3V0ZURlZi5xdWVyeVtxdWVyeVZhck5hbWVdO1xuICAgICAgICB2YXIgcXVlcnlWYXJWYWx1ZSA9IGZpbGxUZW1wbGF0ZShxdWVyeVZhclRlbXBsYXRlLCB0eXBlcywgcGFyYW1zKTtcbiAgICAgICAgaWYgKHF1ZXJ5VmFyVmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcXVlcnlbcXVlcnlWYXJOYW1lXSA9IHF1ZXJ5VmFyVmFsdWU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHsgcGF0aDogcGF0aCwgaGFzaDogaGFzaCwgcXVlcnk6IHF1ZXJ5IH07XG59O1xuXG4vKipcbiAqIEFwcGx5IHJld3JpdGVzIG9uIFVSTCBwYXJ0c1xuICpcbiAqIEBwYXJhbSAge1N0cmluZ30gZGlyZWN0aW9uXG4gKiBAcGFyYW0gIHtPYmplY3R9IHVybFBhcnRzXG4gKiBAcGFyYW0gIHtPYmplY3R9IGNvbnRleHRcbiAqL1xucHJvdG90eXBlLnJld3JpdGUgPSBmdW5jdGlvbihkaXJlY3Rpb24sIHVybFBhcnRzLCBjb250ZXh0KSB7XG4gICAgaWYgKGRpcmVjdGlvbiA9PT0gJ2Zyb20nKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5yZXdyaXRlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIGZyb20gPSB0aGlzLnJld3JpdGVzW2ldLmZyb207XG4gICAgICAgICAgICBpZiAoZnJvbSkge1xuICAgICAgICAgICAgICAgIGlmIChmcm9tKHVybFBhcnRzLCBjb250ZXh0KSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSBlbHNlIGlmIChkaXJlY3Rpb24gPT09ICd0bycpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IHRoaXMucmV3cml0ZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICAgIHZhciB0byA9IHRoaXMucmV3cml0ZXNbaV0udG87XG4gICAgICAgICAgICBpZiAodG8pIHtcbiAgICAgICAgICAgICAgICBpZiAodG8odXJsUGFydHMsIGNvbnRleHQpID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG4vKipcbiAqIEFkZCBvciByZW1vdmUgYmFzZVBhdGggZnJvbSBhIFVSTCdzIHBhdGggcGFydC4gUmV0dXJuIGZhbHNlIGlmIGl0IGNhbid0IGJlIGRvbmUuXG4gKlxuICogQHBhcmFtICB7U3RyaW5nfSBkaXJlY3Rpb25cbiAqIEBwYXJhbSAge09iamVjdH0gdXJsUGFydHNcbiAqXG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICovXG5wcm90b3R5cGUucmViYXNlID0gZnVuY3Rpb24oZGlyZWN0aW9uLCB1cmxQYXJ0cykge1xuICAgIHZhciBiYXNlUGF0aCA9IHRoaXMub3B0aW9ucy5iYXNlUGF0aDtcbiAgICBpZiAoZGlyZWN0aW9uID09PSAnZnJvbScpIHtcbiAgICAgICAgdmFyIG5ld1BhdGggPSBnZXRSZWxhdGl2ZVBhdGgoYmFzZVBhdGgsIHVybFBhcnRzLnBhdGgpO1xuICAgICAgICBpZiAobmV3UGF0aCkge1xuICAgICAgICAgICAgdXJsUGFydHMucGF0aCA9IG5ld1BhdGg7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSBpZiAoZGlyZWN0aW9uID09PSAndG8nKSB7XG4gICAgICAgIGlmIChiYXNlUGF0aCkge1xuICAgICAgICAgICAgdXJsUGFydHMucGF0aCA9IGJhc2VQYXRoICsgdXJsUGFydHMucGF0aDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xufTtcblxucHJvdG90eXBlLmxvYWQgPSBmdW5jdGlvbihtYXRjaCkge1xuICAgIHRyeSB7XG4gICAgICAgIHZhciByZXN1bHQ7XG4gICAgICAgIHZhciByb3V0ZURlZiA9IHRoaXMucm91dGVzW21hdGNoLm5hbWVdO1xuICAgICAgICBpZiAocm91dGVEZWYgJiYgcm91dGVEZWYubG9hZCkge1xuICAgICAgICAgICAgcmVzdWx0ID0gcm91dGVEZWYubG9hZChtYXRjaC5wYXJhbXMsIG1hdGNoLmNvbnRleHQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUocmVzdWx0KTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycik7XG4gICAgfVxufTtcblxuLyoqXG4gKiBSZXR1cm4gYSByZWxhdGl2ZSBVUkwgb3IgZW1wdHkgc3RyaW5nIChpZiBsaW5rIGlzIHBvaW50aW5nIHRvIGFuIGV4dGVybmFsIHBhZ2UpXG4gKlxuICogQHBhcmFtICB7TG9jYXRpb258SFRNTEFuY2hvckVsZW1lbnR9IGxvY2F0aW9uXG4gKlxuICogQHJldHVybiB7U3RyaW5nfVxuICovXG5wcm90b3R5cGUuZ2V0TG9jYXRpb25VUkwgPSBmdW5jdGlvbihsb2NhdGlvbikge1xuICAgIHZhciBkb2NMb2NhdGlvbiA9IHdpbmRvdy5sb2NhdGlvbjtcbiAgICBpZiAobG9jYXRpb24gIT09IGRvY0xvY2F0aW9uKSB7XG4gICAgICAgIGlmIChsb2NhdGlvbi5wcm90b2NvbCAhPT0gZG9jTG9jYXRpb24ucHJvdG9jb2wpIHtcbiAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgfSBlbHNlIGlmIChsb2NhdGlvbi5ob3N0ICE9PSBkb2NMb2NhdGlvbi5ob3N0KSB7XG4gICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy51c2VIYXNoRmFsbGJhY2spIHtcbiAgICAgICAgICAgIGlmIChsb2NhdGlvbi5wYXRobmFtZSAhPT0gZG9jTG9jYXRpb24ucGF0aG5hbWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAobG9jYXRpb24uc2VhcmNoICE9PSBkb2NMb2NhdGlvbi5zZWFyY2gpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKHRoaXMub3B0aW9ucy51c2VIYXNoRmFsbGJhY2spIHtcbiAgICAgICAgdmFyIHBhdGggPSBsb2NhdGlvbi5oYXNoLnN1YnN0cigxKTtcbiAgICAgICAgcmV0dXJuIHBhdGggfHwgJy8nO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBsb2NhdGlvbi5wYXRobmFtZSArIGxvY2F0aW9uLnNlYXJjaCArIGxvY2F0aW9uLmhhc2g7XG4gICAgfVxufTtcblxucHJvdG90eXBlLnNldExvY2F0aW9uVVJMID0gZnVuY3Rpb24odXJsLCBzdGF0ZSwgcmVwbGFjZSkge1xuICAgIGlmICh0aGlzLm9wdGlvbnMudHJhY2tMb2NhdGlvbikge1xuICAgICAgICB2YXIgY3VycmVudFVSTCA9IHRoaXMuZ2V0TG9jYXRpb25VUkwobG9jYXRpb24pO1xuICAgICAgICBpZiAoY3VycmVudFVSTCAhPT0gdXJsKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLnVzZUhhc2hGYWxsYmFjaykge1xuICAgICAgICAgICAgICAgIHVybCA9ICcjJyArIHVybDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChyZXBsYWNlKSB7XG4gICAgICAgICAgICAgICAgd2luZG93Lmhpc3RvcnkucmVwbGFjZVN0YXRlKHN0YXRlLCAnJywgdXJsKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgd2luZG93Lmhpc3RvcnkucHVzaFN0YXRlKHN0YXRlLCAnJywgdXJsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn07XG5cbi8qKlxuICogQ2FsbGVkIHdoZW4gdGhlIHVzZXIgY2xpY2tzIG9uIHRoZSBwYWdlXG4gKlxuICogQHBhcmFtICB7RXZlbnR9IGV2dFxuICovXG5wcm90b3R5cGUuaGFuZGxlTGlua0NsaWNrID0gZnVuY3Rpb24oZXZ0KSB7XG4gICAgaWYgKGV2dC5idXR0b24gPT09IDApIHtcbiAgICAgICAgdmFyIGxpbmsgPSBnZXRMaW5rKGV2dC50YXJnZXQpO1xuICAgICAgICBpZiAobGluayAmJiAhbGluay50YXJnZXQgJiYgIWxpbmsuZG93bmxvYWQpIHtcbiAgICAgICAgICAgIHZhciB1cmwgPSB0aGlzLmdldExvY2F0aW9uVVJMKGxpbmspO1xuICAgICAgICAgICAgaWYgKHVybCkge1xuICAgICAgICAgICAgICAgIHZhciBtYXRjaCA9IHRoaXMubWF0Y2godXJsKTtcbiAgICAgICAgICAgICAgICBpZiAobWF0Y2gpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRpbWUgPSBnZXRUaW1lKCk7XG4gICAgICAgICAgICAgICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICBldnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYXBwbHkobWF0Y2gsIHRpbWUsIHRydWUsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG4vKipcbiAqIENhbGxlZCB3aGVuIHRoZSB1c2VyIHByZXNzIHRoZSBiYWNrIGJ1dHRvblxuICpcbiAqIEBwYXJhbSAge0V2ZW50fSBldnRcbiAqL1xucHJvdG90eXBlLmhhbmRsZVBvcFN0YXRlID0gZnVuY3Rpb24oZXZ0KSB7XG4gICAgdmFyIHRpbWUgPSAoZXZ0LnN0YXRlKSA/IGV2dC5zdGF0ZS50aW1lIDogZ2V0VGltZSgpO1xuICAgIHZhciB1cmwgPSB0aGlzLmdldExvY2F0aW9uVVJMKHdpbmRvdy5sb2NhdGlvbik7XG4gICAgdmFyIG1hdGNoID0gdGhpcy5tYXRjaCh1cmwpO1xuICAgIHZhciBwcm9taXNlID0gdGhpcy5hcHBseShtYXRjaCwgdGltZSwgZmFsc2UsIGZhbHNlKTtcblxuICAgIC8vIHJlc29sdmUgcHJvbWlzZSBjcmVhdGVkIGluIGJhY2soKVxuICAgIHZhciByZXNvbHZlID0gdGhpcy5iYWNrUmVzb2x2ZTtcbiAgICB2YXIgcmVqZWN0ID0gdGhpcy5iYWNrUmVqZWN0O1xuICAgIGlmIChyZXNvbHZlKSB7XG4gICAgICAgIHRoaXMuYmFja1Jlc29sdmUgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMuYmFja1JlamVjdCA9IHVuZGVmaW5lZDtcbiAgICAgICAgcHJvbWlzZS50aGVuKHJlc29sdmUsIHJlamVjdCk7XG4gICAgfVxufTtcblxudmFyIHZhcmlhYmxlUmVnRXhwID0gL1xcJFxce1xcdytcXH0vZztcbnZhciByZWdFeHBDYWNoZSA9IHt9O1xuXG5mdW5jdGlvbiBnZXRVUkxUZW1wbGF0ZVJlZ0V4cCh0ZW1wbGF0ZSwgdHlwZXMsIGlzUGF0aCkge1xuICAgIGlmICghdGVtcGxhdGUpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHZhciBwYXR0ZXJuID0gdGVtcGxhdGUucmVwbGFjZSh2YXJpYWJsZVJlZ0V4cCwgZnVuY3Rpb24obWF0Y2gpIHtcbiAgICAgICAgdmFyIHZhcmlhYmxlID0gbWF0Y2guc3Vic3RyKDIsIG1hdGNoLmxlbmd0aCAtIDMpXG4gICAgICAgIHZhciB2YXJpYWJsZVR5cGUgPSB0eXBlc1t2YXJpYWJsZV07XG4gICAgICAgIHZhciB2YXJpYWJsZVBhdHRlcm47XG4gICAgICAgIGlmICh2YXJpYWJsZVR5cGUgPT09IE51bWJlciB8fCB2YXJpYWJsZVR5cGUgPT09IEJvb2xlYW4pIHtcbiAgICAgICAgICAgIHZhcmlhYmxlUGF0dGVybiA9ICdbXFxcXGRcXFxcLl0rJztcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YodmFyaWFibGVUeXBlKSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIHZhcmlhYmxlUGF0dGVybiA9IHZhcmlhYmxlVHlwZS5wYXR0ZXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICghdmFyaWFibGVQYXR0ZXJuKSB7XG4gICAgICAgICAgICBpZiAoaXNQYXRoKSB7XG4gICAgICAgICAgICAgICAgdmFyaWFibGVQYXR0ZXJuID0gJ1teL10rJ1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB2YXJpYWJsZVBhdHRlcm4gPSAnLisnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiAnKCcgKyB2YXJpYWJsZVBhdHRlcm4gKyAnKSc7XG4gICAgfSk7XG4gICAgaWYgKGlzUGF0aCkge1xuICAgICAgICB2YXIgbGMgPSBwYXR0ZXJuLmNoYXJBdChwYXR0ZXJuIC0gMSk7XG4gICAgICAgIGlmIChsYyA9PT0gJy8nKSB7XG4gICAgICAgICAgICBwYXR0ZXJuICs9ICc/JztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHBhdHRlcm4gKz0gJy8/JztcbiAgICAgICAgfVxuICAgICAgICBwYXR0ZXJuID0gJ14nICsgcGF0dGVybiArICckJztcbiAgICB9XG4gICAgdmFyIHJlID0gcmVnRXhwQ2FjaGVbcGF0dGVybl07XG4gICAgaWYgKCFyZSkge1xuICAgICAgICByZSA9IHJlZ0V4cENhY2hlW3BhdHRlcm5dID0gbmV3IFJlZ0V4cChwYXR0ZXJuKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlO1xufVxuXG5mdW5jdGlvbiBnZXRVUkxUZW1wbGF0ZVZhcmlhYmxlcyh0ZW1wbGF0ZSkge1xuICAgIHZhciBtYXRjaGVzID0gdGVtcGxhdGUubWF0Y2godmFyaWFibGVSZWdFeHApO1xuICAgIHZhciBsaXN0ID0gW107XG4gICAgaWYgKG1hdGNoZXMpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBtYXRjaGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgbWF0Y2ggPSBtYXRjaGVzW2ldO1xuICAgICAgICAgICAgbGlzdC5wdXNoKG1hdGNoLnN1YnN0cigyLCBtYXRjaC5sZW5ndGggLSAzKSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGxpc3Q7XG59XG5cbmZ1bmN0aW9uIG1hdGNoVGVtcGxhdGUodXJsUGFydCwgdGVtcGxhdGUsIHR5cGVzLCBwYXJhbXMsIGlzUGF0aCkge1xuICAgIGlmICghdXJsUGFydCB8fCAhdGVtcGxhdGUpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpZiAodGVtcGxhdGUgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICB2YXIgbWF0Y2ggPSBmYWxzZTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0ZW1wbGF0ZS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIHQgPSB0ZW1wbGF0ZVtpXTtcbiAgICAgICAgICAgIGlmIChtYXRjaFRlbXBsYXRlKHVybFBhcnQsIHQsIHR5cGVzLCBwYXJhbXMsIGlzUGF0aCkpIHtcbiAgICAgICAgICAgICAgICBtYXRjaCA9IHRydWU7XG4gICAgICAgICAgICAgICAgaWYgKGlzUGF0aCkge1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG1hdGNoO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mKHRlbXBsYXRlKSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgaWYgKHRlbXBsYXRlLmZyb20pIHtcbiAgICAgICAgICAgIHJldHVybiB0ZW1wbGF0ZS5mcm9tKHVybFBhcnQsIHBhcmFtcyk7XG4gICAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHR5cGVvZih0ZW1wbGF0ZSkgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHZhciByZSA9IGdldFVSTFRlbXBsYXRlUmVnRXhwKHRlbXBsYXRlLCB0eXBlcywgaXNQYXRoKTtcbiAgICAgICAgdmFyIG1hdGNoZXMgPSByZS5leGVjKHVybFBhcnQpO1xuICAgICAgICBpZiAoIW1hdGNoZXMpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgdmFyaWFibGVzID0gZ2V0VVJMVGVtcGxhdGVWYXJpYWJsZXModGVtcGxhdGUpO1xuICAgICAgICB2YXIgdmFsdWVzID0ge307XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdmFyaWFibGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgdmFyaWFibGUgPSB2YXJpYWJsZXNbaV07XG4gICAgICAgICAgICB2YXIgdHlwZSA9IHR5cGVzW3ZhcmlhYmxlXTtcbiAgICAgICAgICAgIHZhciB2YWx1ZSA9IGNhc3RWYWx1ZShtYXRjaGVzW2kgKyAxXSwgdHlwZSk7XG4gICAgICAgICAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHZhbHVlc1t2YXJpYWJsZV0gPSB2YWx1ZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKGlzUGF0aCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGZvciAodmFyIG5hbWUgaW4gdmFsdWVzKSB7XG4gICAgICAgICAgICBwYXJhbXNbbmFtZV0gPSB2YWx1ZXNbbmFtZV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbn1cblxuZnVuY3Rpb24gZmlsbFRlbXBsYXRlKHRlbXBsYXRlLCB0eXBlcywgcGFyYW1zLCBhbHdheXMpIHtcbiAgICBpZiAodGVtcGxhdGUgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICB2YXIgdG9rZW5zID0gW107XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGVtcGxhdGUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciB0ID0gdGVtcGxhdGVbaV07XG4gICAgICAgICAgICB2YXIgcyA9IGZpbGxUZW1wbGF0ZSh0LCB0eXBlcywgcGFyYW1zLCBhbHdheXMpO1xuICAgICAgICAgICAgaWYgKHMpIHtcbiAgICAgICAgICAgICAgICB0b2tlbnMucHVzaChzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdG9rZW5zLmpvaW4oJycpO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mKHRlbXBsYXRlKSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgaWYgKHRlbXBsYXRlLnRvKSB7XG4gICAgICAgICAgICByZXR1cm4gdGVtcGxhdGUudG8ocGFyYW1zKTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSBpZiAodHlwZW9mKHRlbXBsYXRlKSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgdmFyIHZhcmlhYmxlcyA9IGdldFVSTFRlbXBsYXRlVmFyaWFibGVzKHRlbXBsYXRlKTtcbiAgICAgICAgdmFyIHVybFBhdGggPSB0ZW1wbGF0ZTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB2YXJpYWJsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciB2YXJpYWJsZSA9IHZhcmlhYmxlc1tpXTtcbiAgICAgICAgICAgIHZhciB2YWx1ZSA9IHBhcmFtc1t2YXJpYWJsZV07XG4gICAgICAgICAgICB2YXIgdHlwZSA9IHR5cGVzW3ZhcmlhYmxlXTtcbiAgICAgICAgICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkIHx8IGFsd2F5cykge1xuICAgICAgICAgICAgICAgIHZhciBzdHJpbmcgPSBzdHJpbmdpZnlWYWx1ZSh2YWx1ZSwgdHlwZSk7XG4gICAgICAgICAgICAgICAgdXJsUGF0aCA9IHVybFBhdGgucmVwbGFjZSgnJHsnICsgdmFyaWFibGUgKyAnfScsIHN0cmluZyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdXJsUGF0aDtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGNhc3RWYWx1ZShzdHJpbmcsIHR5cGUpIHtcbiAgICBpZiAodHlwZSA9PT0gU3RyaW5nKSB7XG4gICAgICAgIHJldHVybiBzdHJpbmc7XG4gICAgfSBlbHNlIGlmICh0eXBlID09PSBOdW1iZXIpIHtcbiAgICAgICAgdmFyIG4gPSBwYXJzZUZsb2F0KHN0cmluZyk7XG4gICAgICAgIGlmIChuID09PSBuKSB7XG4gICAgICAgICAgICByZXR1cm4gbjtcbiAgICAgICAgfVxuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gQm9vbGVhbikge1xuICAgICAgICB2YXIgbiA9IHBhcnNlRmxvYXQoc3RyaW5nKTtcbiAgICAgICAgaWYgKG4gPT09IG4pIHtcbiAgICAgICAgICAgIHJldHVybiAhIW47XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gISFzdHJpbmc7XG4gICAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHR5cGUgaW5zdGFuY2VvZiBPYmplY3QpIHtcbiAgICAgICAgaWYgKHR5cGUuZnJvbSkge1xuICAgICAgICAgICAgcmV0dXJuIHR5cGUuZnJvbShzdHJpbmcpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5mdW5jdGlvbiBzdHJpbmdpZnlWYWx1ZSh2YWx1ZSwgdHlwZSkge1xuICAgIGlmICh0eXBlID09PSBTdHJpbmcpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gTnVtYmVyKSB7XG4gICAgICAgIHJldHVybiBTdHJpbmcodmFsdWUpO1xuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gQm9vbGVhbikge1xuICAgICAgICByZXR1cm4gKHZhbHVlKSA/ICcwJyA6ICcxJztcbiAgICB9IGVsc2UgaWYgKHR5cGUgaW5zdGFuY2VvZiBPYmplY3QpIHtcbiAgICAgICAgaWYgKHR5cGUudG8pIHtcbiAgICAgICAgICAgIHJldHVybiB0eXBlLnRvKHZhbHVlKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZnVuY3Rpb24gZ2V0UmVsYXRpdmVQYXRoKGJhc2VQYXRoLCBwYXRoKSB7XG4gICAgaWYgKCFiYXNlUGF0aCkge1xuICAgICAgICByZXR1cm4gcGF0aDtcbiAgICB9XG4gICAgaWYgKHBhdGguc3Vic3RyKDAsIGJhc2VQYXRoLmxlbmd0aCkgPT09IGJhc2VQYXRoKSB7XG4gICAgICAgIGlmIChwYXRoLmNoYXJBdChiYXNlUGF0aC5sZW5ndGgpID09PSAnLycpIHtcbiAgICAgICAgICAgIHJldHVybiBwYXRoLnN1YnN0cihiYXNlUGF0aC5sZW5ndGgpO1xuICAgICAgICB9IGVsc2UgaWYgKHBhdGggPT09IGJhc2VQYXRoKSB7XG4gICAgICAgICAgICByZXR1cm4gJy8nO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5mdW5jdGlvbiBwYXJzZVVSTCh1cmwpIHtcbiAgICB2YXIgcGF0aCA9IHVybDtcbiAgICB2YXIgaGFzaCA9ICcnO1xuICAgIHZhciBoYXNoSW5kZXggPSBwYXRoLmluZGV4T2YoJyMnKTtcbiAgICBpZiAoaGFzaEluZGV4ICE9PSAtMSkge1xuICAgICAgICBoYXNoID0gcGF0aC5zdWJzdHIoaGFzaEluZGV4ICsgMSk7XG4gICAgICAgIHBhdGggPSBwYXRoLnN1YnN0cigwLCBoYXNoSW5kZXgpO1xuICAgIH1cbiAgICB2YXIgcXVlcnkgPSB7fTtcbiAgICB2YXIgcXVlcnlJbmRleCA9IHBhdGguaW5kZXhPZignPycpO1xuICAgIGlmIChxdWVyeUluZGV4ICE9PSAtMSkge1xuICAgICAgICBxdWVyeSA9IHBhcnNlUXVlcnlTdHJpbmcocGF0aC5zdWJzdHIocXVlcnlJbmRleCArIDEpKTtcbiAgICAgICAgcGF0aCA9IHBhdGguc3Vic3RyKDAsIHF1ZXJ5SW5kZXgpO1xuICAgIH1cbiAgICByZXR1cm4geyBwYXRoOiBwYXRoLCBxdWVyeTogcXVlcnksIGhhc2g6IGhhc2ggfTtcbn1cblxuZnVuY3Rpb24gcGFyc2VRdWVyeVN0cmluZyhxdWVyeVN0cmluZykge1xuICAgIHZhciB2YWx1ZXMgPSB7fTtcbiAgICBpZiAocXVlcnlTdHJpbmcpIHtcbiAgICAgICAgdmFyIHBhaXJzID0gcXVlcnlTdHJpbmcuc3BsaXQoJyYnKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwYWlycy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIHBhcnRzID0gcGFpcnNbaV0uc3BsaXQoJz0nKTtcbiAgICAgICAgICAgIHZhciBuYW1lID0gZGVjb2RlVVJJQ29tcG9uZW50KHBhcnRzWzBdKTtcbiAgICAgICAgICAgIHZhciB2YWx1ZSA9IGRlY29kZVVSSUNvbXBvbmVudChwYXJ0c1sxXSB8fCAnJyk7XG4gICAgICAgICAgICB2YWx1ZSA9IHZhbHVlLnJlcGxhY2UoL1xcKy9nLCAnICcpO1xuICAgICAgICAgICAgdmFsdWVzW25hbWVdID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHZhbHVlcztcbn1cblxuZnVuY3Rpb24gY29tcG9zZVVSTCh1cmxQYXJ0cykge1xuICAgIHZhciB1cmwgPSB1cmxQYXJ0cy5wYXRoO1xuICAgIHZhciBxdWVyeVN0cmluZyA9IGNvbXBvc2VRdWVyeVN0cmluZyh1cmxQYXJ0cy5xdWVyeSk7XG4gICAgaWYgKHF1ZXJ5U3RyaW5nKSB7XG4gICAgICAgIHVybCArPSAnPycgKyBxdWVyeVN0cmluZztcbiAgICB9XG4gICAgaWYgKHVybFBhcnRzLmhhc2gpIHtcbiAgICAgICAgdXJsICs9ICcjJyArIHVybFBhcnRzLmhhc2g7XG4gICAgfVxuICAgIHJldHVybiB1cmw7XG59XG5cbmZ1bmN0aW9uIGNvbXBvc2VRdWVyeVN0cmluZyhxdWVyeSkge1xuICAgIHZhciBwYWlycyA9IFtdO1xuICAgIGZvciAodmFyIG5hbWUgaW4gcXVlcnkpIHtcbiAgICAgICAgdmFyIHZhbHVlID0gcXVlcnlbbmFtZV07XG4gICAgICAgIHZhciBwYXJ0cyA9IFtcbiAgICAgICAgICAgIGVuY29kZVVSSUNvbXBvbmVudChuYW1lKSxcbiAgICAgICAgICAgIGVuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSksXG4gICAgICAgIF07XG4gICAgICAgIHBhaXJzLnB1c2gocGFydHMuam9pbignPScpKTtcbiAgICB9XG4gICAgcmV0dXJuIHBhaXJzLmpvaW4oJyYnKTtcbn1cblxuZnVuY3Rpb24gZ2V0TGluayhlbGVtZW50KSB7XG4gICAgd2hpbGUgKGVsZW1lbnQgJiYgZWxlbWVudC50YWdOYW1lICE9PSAnQScgJiYgIWVsZW1lbnQuaHJlZikge1xuICAgICAgICBlbGVtZW50ID0gZWxlbWVudC5wYXJlbnROb2RlO1xuICAgIH1cbiAgICByZXR1cm4gZWxlbWVudDtcbn1cblxuZnVuY3Rpb24gZ2V0VGltZSgpIHtcbiAgICByZXR1cm4gKG5ldyBEYXRlKS50b0lTT1N0cmluZygpO1xufVxuXG5mdW5jdGlvbiBSZWxha3NSb3V0ZU1hbmFnZXJFdmVudCh0eXBlLCB0YXJnZXQsIHByb3BzKSB7XG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICB0aGlzLnRhcmdldCA9IHRhcmdldDtcbiAgICBmb3IgKHZhciBuYW1lIGluIHByb3BzKSB7XG4gICAgICAgIHRoaXNbbmFtZV0gPSBwcm9wc1tuYW1lXTtcbiAgICB9XG4gICAgdGhpcy5kZWZhdWx0UHJldmVudGVkID0gZmFsc2U7XG4gICAgdGhpcy5kZWNpc2lvblByb21pc2UgPSBudWxsO1xufVxuXG52YXIgcHJvdG90eXBlID0gUmVsYWtzUm91dGVNYW5hZ2VyRXZlbnQucHJvdG90eXBlO1xuXG5wcm90b3R5cGUucHJldmVudERlZmF1bHQgPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLmRlZmF1bHRQcmV2ZW50ZWQgPSB0cnVlO1xufTtcblxucHJvdG90eXBlLnBvc3Rwb25lRGVmYXVsdCA9IGZ1bmN0aW9uKHByb21pc2UpIHtcbiAgICBpZiAoIXByb21pc2UgfHwgIShwcm9taXNlLnRoZW4gaW5zdGFuY2VvZiBGdW5jdGlvbikpIHtcbiAgICAgICAgdGhpcy5kZWNpc2lvblByb21pc2UgPSBwcm9taXNlO1xuICAgIH1cbn07XG5cbnByb3RvdHlwZS53YWl0Rm9yRGVjaXNpb24gPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5kZWNpc2lvblByb21pc2UgfHwgUHJvbWlzZS5yZXNvbHZlKCk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlbGFrc1JvdXRlTWFuYWdlcjtcbm1vZHVsZS5leHBvcnRzLlJlbGFrc1JvdXRlTWFuYWdlciA9IFJlbGFrc1JvdXRlTWFuYWdlcjtcbm1vZHVsZS5leHBvcnRzLlJlbGFrc1JvdXRlTWFuYWdlckV2ZW50ID0gUmVsYWtzUm91dGVNYW5hZ2VyRXZlbnQ7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gL2hvbWUvY2xlb25nL3JlbGFrcy1yb3V0ZS1tYW5hZ2VyL2luZGV4LmpzIiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL2pzb24vc3RyaW5naWZ5XCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9qc29uL3N0cmluZ2lmeS5qc1xuLy8gbW9kdWxlIGlkID0gLi4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9qc29uL3N0cmluZ2lmeS5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IG1haW4iLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2Fzc2lnblwiKSwgX19lc01vZHVsZTogdHJ1ZSB9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2Fzc2lnbi5qc1xuLy8gbW9kdWxlIGlkID0gLi4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvYXNzaWduLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gbWFpbiIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvY3JlYXRlXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvY3JlYXRlLmpzXG4vLyBtb2R1bGUgaWQgPSAuLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9jcmVhdGUuanNcbi8vIG1vZHVsZSBjaHVua3MgPSBtYWluIiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9kZWZpbmUtcHJvcGVydHlcIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9kZWZpbmUtcHJvcGVydHkuanNcbi8vIG1vZHVsZSBpZCA9IC4uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2RlZmluZS1wcm9wZXJ0eS5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IG1haW4iLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2dldC1wcm90b3R5cGUtb2ZcIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9nZXQtcHJvdG90eXBlLW9mLmpzXG4vLyBtb2R1bGUgaWQgPSAuLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9nZXQtcHJvdG90eXBlLW9mLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gbWFpbiIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9vYmplY3Qvc2V0LXByb3RvdHlwZS1vZlwiKSwgX19lc01vZHVsZTogdHJ1ZSB9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L3NldC1wcm90b3R5cGUtb2YuanNcbi8vIG1vZHVsZSBpZCA9IC4uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L3NldC1wcm90b3R5cGUtb2YuanNcbi8vIG1vZHVsZSBjaHVua3MgPSBtYWluIiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL3Byb21pc2VcIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL3Byb21pc2UuanNcbi8vIG1vZHVsZSBpZCA9IC4uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvcHJvbWlzZS5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IG1haW4iLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vc3ltYm9sXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9zeW1ib2wuanNcbi8vIG1vZHVsZSBpZCA9IC4uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvc3ltYm9sLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gbWFpbiIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9zeW1ib2wvaXRlcmF0b3JcIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL3N5bWJvbC9pdGVyYXRvci5qc1xuLy8gbW9kdWxlIGlkID0gLi4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9zeW1ib2wvaXRlcmF0b3IuanNcbi8vIG1vZHVsZSBjaHVua3MgPSBtYWluIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfcHJvbWlzZSA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL3Byb21pc2VcIik7XG5cbnZhciBfcHJvbWlzZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wcm9taXNlKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKGZuKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGdlbiA9IGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgcmV0dXJuIG5ldyBfcHJvbWlzZTIuZGVmYXVsdChmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICBmdW5jdGlvbiBzdGVwKGtleSwgYXJnKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgdmFyIGluZm8gPSBnZW5ba2V5XShhcmcpO1xuICAgICAgICAgIHZhciB2YWx1ZSA9IGluZm8udmFsdWU7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaW5mby5kb25lKSB7XG4gICAgICAgICAgcmVzb2x2ZSh2YWx1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIF9wcm9taXNlMi5kZWZhdWx0LnJlc29sdmUodmFsdWUpLnRoZW4oZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICBzdGVwKFwibmV4dFwiLCB2YWx1ZSk7XG4gICAgICAgICAgfSwgZnVuY3Rpb24gKGVycikge1xuICAgICAgICAgICAgc3RlcChcInRocm93XCIsIGVycik7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHN0ZXAoXCJuZXh0XCIpO1xuICAgIH0pO1xuICB9O1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9oZWxwZXJzL2FzeW5jVG9HZW5lcmF0b3IuanNcbi8vIG1vZHVsZSBpZCA9IC4uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2hlbHBlcnMvYXN5bmNUb0dlbmVyYXRvci5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IG1haW4iLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gIH1cbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjay5qc1xuLy8gbW9kdWxlIGlkID0gLi4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjay5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IG1haW4iLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9kZWZpbmVQcm9wZXJ0eSA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL29iamVjdC9kZWZpbmUtcHJvcGVydHlcIik7XG5cbnZhciBfZGVmaW5lUHJvcGVydHkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZGVmaW5lUHJvcGVydHkpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG4gICAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuICAgICAgKDAsIF9kZWZpbmVQcm9wZXJ0eTIuZGVmYXVsdCkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcbiAgICBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuICAgIGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICAgIHJldHVybiBDb25zdHJ1Y3RvcjtcbiAgfTtcbn0oKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzLmpzXG4vLyBtb2R1bGUgaWQgPSAuLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gbWFpbiIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX3NldFByb3RvdHlwZU9mID0gcmVxdWlyZShcIi4uL2NvcmUtanMvb2JqZWN0L3NldC1wcm90b3R5cGUtb2ZcIik7XG5cbnZhciBfc2V0UHJvdG90eXBlT2YyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc2V0UHJvdG90eXBlT2YpO1xuXG52YXIgX2NyZWF0ZSA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL29iamVjdC9jcmVhdGVcIik7XG5cbnZhciBfY3JlYXRlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NyZWF0ZSk7XG5cbnZhciBfdHlwZW9mMiA9IHJlcXVpcmUoXCIuLi9oZWxwZXJzL3R5cGVvZlwiKTtcblxudmFyIF90eXBlb2YzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdHlwZW9mMik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChzdWJDbGFzcywgc3VwZXJDbGFzcykge1xuICBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyAodHlwZW9mIHN1cGVyQ2xhc3MgPT09IFwidW5kZWZpbmVkXCIgPyBcInVuZGVmaW5lZFwiIDogKDAsIF90eXBlb2YzLmRlZmF1bHQpKHN1cGVyQ2xhc3MpKSk7XG4gIH1cblxuICBzdWJDbGFzcy5wcm90b3R5cGUgPSAoMCwgX2NyZWF0ZTIuZGVmYXVsdCkoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwge1xuICAgIGNvbnN0cnVjdG9yOiB7XG4gICAgICB2YWx1ZTogc3ViQ2xhc3MsXG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfVxuICB9KTtcbiAgaWYgKHN1cGVyQ2xhc3MpIF9zZXRQcm90b3R5cGVPZjIuZGVmYXVsdCA/ICgwLCBfc2V0UHJvdG90eXBlT2YyLmRlZmF1bHQpKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHMuanNcbi8vIG1vZHVsZSBpZCA9IC4uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHMuanNcbi8vIG1vZHVsZSBjaHVua3MgPSBtYWluIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfdHlwZW9mMiA9IHJlcXVpcmUoXCIuLi9oZWxwZXJzL3R5cGVvZlwiKTtcblxudmFyIF90eXBlb2YzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdHlwZW9mMik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChzZWxmLCBjYWxsKSB7XG4gIGlmICghc2VsZikge1xuICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTtcbiAgfVxuXG4gIHJldHVybiBjYWxsICYmICgodHlwZW9mIGNhbGwgPT09IFwidW5kZWZpbmVkXCIgPyBcInVuZGVmaW5lZFwiIDogKDAsIF90eXBlb2YzLmRlZmF1bHQpKGNhbGwpKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4uanNcbi8vIG1vZHVsZSBpZCA9IC4uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVybi5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IG1haW4iLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9pdGVyYXRvciA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL3N5bWJvbC9pdGVyYXRvclwiKTtcblxudmFyIF9pdGVyYXRvcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pdGVyYXRvcik7XG5cbnZhciBfc3ltYm9sID0gcmVxdWlyZShcIi4uL2NvcmUtanMvc3ltYm9sXCIpO1xuXG52YXIgX3N5bWJvbDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zeW1ib2wpO1xuXG52YXIgX3R5cGVvZiA9IHR5cGVvZiBfc3ltYm9sMi5kZWZhdWx0ID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIF9pdGVyYXRvcjIuZGVmYXVsdCA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH0gOiBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIF9zeW1ib2wyLmRlZmF1bHQgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IF9zeW1ib2wyLmRlZmF1bHQgJiYgb2JqICE9PSBfc3ltYm9sMi5kZWZhdWx0LnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9O1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSB0eXBlb2YgX3N5bWJvbDIuZGVmYXVsdCA9PT0gXCJmdW5jdGlvblwiICYmIF90eXBlb2YoX2l0ZXJhdG9yMi5kZWZhdWx0KSA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHtcbiAgcmV0dXJuIHR5cGVvZiBvYmogPT09IFwidW5kZWZpbmVkXCIgPyBcInVuZGVmaW5lZFwiIDogX3R5cGVvZihvYmopO1xufSA6IGZ1bmN0aW9uIChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgX3N5bWJvbDIuZGVmYXVsdCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gX3N5bWJvbDIuZGVmYXVsdCAmJiBvYmogIT09IF9zeW1ib2wyLmRlZmF1bHQucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmogPT09IFwidW5kZWZpbmVkXCIgPyBcInVuZGVmaW5lZFwiIDogX3R5cGVvZihvYmopO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qc1xuLy8gbW9kdWxlIGlkID0gLi4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvaGVscGVycy90eXBlb2YuanNcbi8vIG1vZHVsZSBjaHVua3MgPSBtYWluIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVnZW5lcmF0b3ItcnVudGltZVwiKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL3JlZ2VuZXJhdG9yL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAuLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9yZWdlbmVyYXRvci9pbmRleC5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IG1haW4iLCJ2YXIgY29yZSA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKTtcbnZhciAkSlNPTiA9IGNvcmUuSlNPTiB8fCAoY29yZS5KU09OID0geyBzdHJpbmdpZnk6IEpTT04uc3RyaW5naWZ5IH0pO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBzdHJpbmdpZnkoaXQpIHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtdmFyc1xuICByZXR1cm4gJEpTT04uc3RyaW5naWZ5LmFwcGx5KCRKU09OLCBhcmd1bWVudHMpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vanNvbi9zdHJpbmdpZnkuanNcbi8vIG1vZHVsZSBpZCA9IC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vanNvbi9zdHJpbmdpZnkuanNcbi8vIG1vZHVsZSBjaHVua3MgPSBtYWluIiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LmFzc2lnbicpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJykuT2JqZWN0LmFzc2lnbjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2Fzc2lnbi5qc1xuLy8gbW9kdWxlIGlkID0gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvYXNzaWduLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gbWFpbiIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC5jcmVhdGUnKTtcbnZhciAkT2JqZWN0ID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpLk9iamVjdDtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3JlYXRlKFAsIEQpIHtcbiAgcmV0dXJuICRPYmplY3QuY3JlYXRlKFAsIEQpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2NyZWF0ZS5qc1xuLy8gbW9kdWxlIGlkID0gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvY3JlYXRlLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gbWFpbiIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC5kZWZpbmUtcHJvcGVydHknKTtcbnZhciAkT2JqZWN0ID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpLk9iamVjdDtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkoaXQsIGtleSwgZGVzYykge1xuICByZXR1cm4gJE9iamVjdC5kZWZpbmVQcm9wZXJ0eShpdCwga2V5LCBkZXNjKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9kZWZpbmUtcHJvcGVydHkuanNcbi8vIG1vZHVsZSBpZCA9IC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2RlZmluZS1wcm9wZXJ0eS5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IG1haW4iLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3QuZ2V0LXByb3RvdHlwZS1vZicpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJykuT2JqZWN0LmdldFByb3RvdHlwZU9mO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZ2V0LXByb3RvdHlwZS1vZi5qc1xuLy8gbW9kdWxlIGlkID0gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZ2V0LXByb3RvdHlwZS1vZi5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IG1haW4iLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3Quc2V0LXByb3RvdHlwZS1vZicpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJykuT2JqZWN0LnNldFByb3RvdHlwZU9mO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3Qvc2V0LXByb3RvdHlwZS1vZi5qc1xuLy8gbW9kdWxlIGlkID0gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3Qvc2V0LXByb3RvdHlwZS1vZi5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IG1haW4iLCJyZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5vYmplY3QudG8tc3RyaW5nJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3InKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZScpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYucHJvbWlzZScpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczcucHJvbWlzZS5maW5hbGx5Jyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNy5wcm9taXNlLnRyeScpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi9tb2R1bGVzL19jb3JlJykuUHJvbWlzZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vcHJvbWlzZS5qc1xuLy8gbW9kdWxlIGlkID0gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9wcm9taXNlLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gbWFpbiIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2LnN5bWJvbCcpO1xucmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LnRvLXN0cmluZycpO1xucmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczcuc3ltYm9sLmFzeW5jLWl0ZXJhdG9yJyk7XG5yZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNy5zeW1ib2wub2JzZXJ2YWJsZScpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJykuU3ltYm9sO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9zeW1ib2wvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vc3ltYm9sL2luZGV4LmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gbWFpbiIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvcicpO1xucmVxdWlyZSgnLi4vLi4vbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX3drcy1leHQnKS5mKCdpdGVyYXRvcicpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9zeW1ib2wvaXRlcmF0b3IuanNcbi8vIG1vZHVsZSBpZCA9IC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vc3ltYm9sL2l0ZXJhdG9yLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gbWFpbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmICh0eXBlb2YgaXQgIT0gJ2Z1bmN0aW9uJykgdGhyb3cgVHlwZUVycm9yKGl0ICsgJyBpcyBub3QgYSBmdW5jdGlvbiEnKTtcbiAgcmV0dXJuIGl0O1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYS1mdW5jdGlvbi5qc1xuLy8gbW9kdWxlIGlkID0gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hLWZ1bmN0aW9uLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gbWFpbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCkgeyAvKiBlbXB0eSAqLyB9O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hZGQtdG8tdW5zY29wYWJsZXMuanNcbi8vIG1vZHVsZSBpZCA9IC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYWRkLXRvLXVuc2NvcGFibGVzLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gbWFpbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0LCBDb25zdHJ1Y3RvciwgbmFtZSwgZm9yYmlkZGVuRmllbGQpIHtcbiAgaWYgKCEoaXQgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikgfHwgKGZvcmJpZGRlbkZpZWxkICE9PSB1bmRlZmluZWQgJiYgZm9yYmlkZGVuRmllbGQgaW4gaXQpKSB7XG4gICAgdGhyb3cgVHlwZUVycm9yKG5hbWUgKyAnOiBpbmNvcnJlY3QgaW52b2NhdGlvbiEnKTtcbiAgfSByZXR1cm4gaXQ7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hbi1pbnN0YW5jZS5qc1xuLy8gbW9kdWxlIGlkID0gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hbi1pbnN0YW5jZS5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IG1haW4iLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmICghaXNPYmplY3QoaXQpKSB0aHJvdyBUeXBlRXJyb3IoaXQgKyAnIGlzIG5vdCBhbiBvYmplY3QhJyk7XG4gIHJldHVybiBpdDtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FuLW9iamVjdC5qc1xuLy8gbW9kdWxlIGlkID0gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hbi1vYmplY3QuanNcbi8vIG1vZHVsZSBjaHVua3MgPSBtYWluIiwiLy8gZmFsc2UgLT4gQXJyYXkjaW5kZXhPZlxuLy8gdHJ1ZSAgLT4gQXJyYXkjaW5jbHVkZXNcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG52YXIgdG9MZW5ndGggPSByZXF1aXJlKCcuL190by1sZW5ndGgnKTtcbnZhciB0b0Fic29sdXRlSW5kZXggPSByZXF1aXJlKCcuL190by1hYnNvbHV0ZS1pbmRleCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoSVNfSU5DTFVERVMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgkdGhpcywgZWwsIGZyb21JbmRleCkge1xuICAgIHZhciBPID0gdG9JT2JqZWN0KCR0aGlzKTtcbiAgICB2YXIgbGVuZ3RoID0gdG9MZW5ndGgoTy5sZW5ndGgpO1xuICAgIHZhciBpbmRleCA9IHRvQWJzb2x1dGVJbmRleChmcm9tSW5kZXgsIGxlbmd0aCk7XG4gICAgdmFyIHZhbHVlO1xuICAgIC8vIEFycmF5I2luY2x1ZGVzIHVzZXMgU2FtZVZhbHVlWmVybyBlcXVhbGl0eSBhbGdvcml0aG1cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VsZi1jb21wYXJlXG4gICAgaWYgKElTX0lOQ0xVREVTICYmIGVsICE9IGVsKSB3aGlsZSAobGVuZ3RoID4gaW5kZXgpIHtcbiAgICAgIHZhbHVlID0gT1tpbmRleCsrXTtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZWxmLWNvbXBhcmVcbiAgICAgIGlmICh2YWx1ZSAhPSB2YWx1ZSkgcmV0dXJuIHRydWU7XG4gICAgLy8gQXJyYXkjaW5kZXhPZiBpZ25vcmVzIGhvbGVzLCBBcnJheSNpbmNsdWRlcyAtIG5vdFxuICAgIH0gZWxzZSBmb3IgKDtsZW5ndGggPiBpbmRleDsgaW5kZXgrKykgaWYgKElTX0lOQ0xVREVTIHx8IGluZGV4IGluIE8pIHtcbiAgICAgIGlmIChPW2luZGV4XSA9PT0gZWwpIHJldHVybiBJU19JTkNMVURFUyB8fCBpbmRleCB8fCAwO1xuICAgIH0gcmV0dXJuICFJU19JTkNMVURFUyAmJiAtMTtcbiAgfTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FycmF5LWluY2x1ZGVzLmpzXG4vLyBtb2R1bGUgaWQgPSAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FycmF5LWluY2x1ZGVzLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gbWFpbiIsIi8vIGdldHRpbmcgdGFnIGZyb20gMTkuMS4zLjYgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZygpXG52YXIgY29mID0gcmVxdWlyZSgnLi9fY29mJyk7XG52YXIgVEFHID0gcmVxdWlyZSgnLi9fd2tzJykoJ3RvU3RyaW5nVGFnJyk7XG4vLyBFUzMgd3JvbmcgaGVyZVxudmFyIEFSRyA9IGNvZihmdW5jdGlvbiAoKSB7IHJldHVybiBhcmd1bWVudHM7IH0oKSkgPT0gJ0FyZ3VtZW50cyc7XG5cbi8vIGZhbGxiYWNrIGZvciBJRTExIFNjcmlwdCBBY2Nlc3MgRGVuaWVkIGVycm9yXG52YXIgdHJ5R2V0ID0gZnVuY3Rpb24gKGl0LCBrZXkpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gaXRba2V5XTtcbiAgfSBjYXRjaCAoZSkgeyAvKiBlbXB0eSAqLyB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICB2YXIgTywgVCwgQjtcbiAgcmV0dXJuIGl0ID09PSB1bmRlZmluZWQgPyAnVW5kZWZpbmVkJyA6IGl0ID09PSBudWxsID8gJ051bGwnXG4gICAgLy8gQEB0b1N0cmluZ1RhZyBjYXNlXG4gICAgOiB0eXBlb2YgKFQgPSB0cnlHZXQoTyA9IE9iamVjdChpdCksIFRBRykpID09ICdzdHJpbmcnID8gVFxuICAgIC8vIGJ1aWx0aW5UYWcgY2FzZVxuICAgIDogQVJHID8gY29mKE8pXG4gICAgLy8gRVMzIGFyZ3VtZW50cyBmYWxsYmFja1xuICAgIDogKEIgPSBjb2YoTykpID09ICdPYmplY3QnICYmIHR5cGVvZiBPLmNhbGxlZSA9PSAnZnVuY3Rpb24nID8gJ0FyZ3VtZW50cycgOiBCO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY2xhc3NvZi5qc1xuLy8gbW9kdWxlIGlkID0gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jbGFzc29mLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gbWFpbiIsInZhciB0b1N0cmluZyA9IHt9LnRvU3RyaW5nO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbChpdCkuc2xpY2UoOCwgLTEpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY29mLmpzXG4vLyBtb2R1bGUgaWQgPSAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NvZi5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IG1haW4iLCJ2YXIgY29yZSA9IG1vZHVsZS5leHBvcnRzID0geyB2ZXJzaW9uOiAnMi41LjcnIH07XG5pZiAodHlwZW9mIF9fZSA9PSAnbnVtYmVyJykgX19lID0gY29yZTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZlxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jb3JlLmpzXG4vLyBtb2R1bGUgaWQgPSAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NvcmUuanNcbi8vIG1vZHVsZSBjaHVua3MgPSBtYWluIiwiLy8gb3B0aW9uYWwgLyBzaW1wbGUgY29udGV4dCBiaW5kaW5nXG52YXIgYUZ1bmN0aW9uID0gcmVxdWlyZSgnLi9fYS1mdW5jdGlvbicpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZm4sIHRoYXQsIGxlbmd0aCkge1xuICBhRnVuY3Rpb24oZm4pO1xuICBpZiAodGhhdCA9PT0gdW5kZWZpbmVkKSByZXR1cm4gZm47XG4gIHN3aXRjaCAobGVuZ3RoKSB7XG4gICAgY2FzZSAxOiByZXR1cm4gZnVuY3Rpb24gKGEpIHtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEpO1xuICAgIH07XG4gICAgY2FzZSAyOiByZXR1cm4gZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEsIGIpO1xuICAgIH07XG4gICAgY2FzZSAzOiByZXR1cm4gZnVuY3Rpb24gKGEsIGIsIGMpIHtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEsIGIsIGMpO1xuICAgIH07XG4gIH1cbiAgcmV0dXJuIGZ1bmN0aW9uICgvKiAuLi5hcmdzICovKSB7XG4gICAgcmV0dXJuIGZuLmFwcGx5KHRoYXQsIGFyZ3VtZW50cyk7XG4gIH07XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jdHguanNcbi8vIG1vZHVsZSBpZCA9IC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY3R4LmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gbWFpbiIsIi8vIDcuMi4xIFJlcXVpcmVPYmplY3RDb2VyY2libGUoYXJndW1lbnQpXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAoaXQgPT0gdW5kZWZpbmVkKSB0aHJvdyBUeXBlRXJyb3IoXCJDYW4ndCBjYWxsIG1ldGhvZCBvbiAgXCIgKyBpdCk7XG4gIHJldHVybiBpdDtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2RlZmluZWQuanNcbi8vIG1vZHVsZSBpZCA9IC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZGVmaW5lZC5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IG1haW4iLCIvLyBUaGFuaydzIElFOCBmb3IgaGlzIGZ1bm55IGRlZmluZVByb3BlcnR5XG5tb2R1bGUuZXhwb3J0cyA9ICFyZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh7fSwgJ2EnLCB7IGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gNzsgfSB9KS5hICE9IDc7XG59KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZGVzY3JpcHRvcnMuanNcbi8vIG1vZHVsZSBpZCA9IC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZGVzY3JpcHRvcnMuanNcbi8vIG1vZHVsZSBjaHVua3MgPSBtYWluIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG52YXIgZG9jdW1lbnQgPSByZXF1aXJlKCcuL19nbG9iYWwnKS5kb2N1bWVudDtcbi8vIHR5cGVvZiBkb2N1bWVudC5jcmVhdGVFbGVtZW50IGlzICdvYmplY3QnIGluIG9sZCBJRVxudmFyIGlzID0gaXNPYmplY3QoZG9jdW1lbnQpICYmIGlzT2JqZWN0KGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGlzID8gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChpdCkgOiB7fTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2RvbS1jcmVhdGUuanNcbi8vIG1vZHVsZSBpZCA9IC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZG9tLWNyZWF0ZS5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IG1haW4iLCIvLyBJRSA4LSBkb24ndCBlbnVtIGJ1ZyBrZXlzXG5tb2R1bGUuZXhwb3J0cyA9IChcbiAgJ2NvbnN0cnVjdG9yLGhhc093blByb3BlcnR5LGlzUHJvdG90eXBlT2YscHJvcGVydHlJc0VudW1lcmFibGUsdG9Mb2NhbGVTdHJpbmcsdG9TdHJpbmcsdmFsdWVPZidcbikuc3BsaXQoJywnKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZW51bS1idWcta2V5cy5qc1xuLy8gbW9kdWxlIGlkID0gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19lbnVtLWJ1Zy1rZXlzLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gbWFpbiIsIi8vIGFsbCBlbnVtZXJhYmxlIG9iamVjdCBrZXlzLCBpbmNsdWRlcyBzeW1ib2xzXG52YXIgZ2V0S2V5cyA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJyk7XG52YXIgZ09QUyA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BzJyk7XG52YXIgcElFID0gcmVxdWlyZSgnLi9fb2JqZWN0LXBpZScpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgdmFyIHJlc3VsdCA9IGdldEtleXMoaXQpO1xuICB2YXIgZ2V0U3ltYm9scyA9IGdPUFMuZjtcbiAgaWYgKGdldFN5bWJvbHMpIHtcbiAgICB2YXIgc3ltYm9scyA9IGdldFN5bWJvbHMoaXQpO1xuICAgIHZhciBpc0VudW0gPSBwSUUuZjtcbiAgICB2YXIgaSA9IDA7XG4gICAgdmFyIGtleTtcbiAgICB3aGlsZSAoc3ltYm9scy5sZW5ndGggPiBpKSBpZiAoaXNFbnVtLmNhbGwoaXQsIGtleSA9IHN5bWJvbHNbaSsrXSkpIHJlc3VsdC5wdXNoKGtleSk7XG4gIH0gcmV0dXJuIHJlc3VsdDtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2VudW0ta2V5cy5qc1xuLy8gbW9kdWxlIGlkID0gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19lbnVtLWtleXMuanNcbi8vIG1vZHVsZSBjaHVua3MgPSBtYWluIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIGNvcmUgPSByZXF1aXJlKCcuL19jb3JlJyk7XG52YXIgY3R4ID0gcmVxdWlyZSgnLi9fY3R4Jyk7XG52YXIgaGlkZSA9IHJlcXVpcmUoJy4vX2hpZGUnKTtcbnZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciBQUk9UT1RZUEUgPSAncHJvdG90eXBlJztcblxudmFyICRleHBvcnQgPSBmdW5jdGlvbiAodHlwZSwgbmFtZSwgc291cmNlKSB7XG4gIHZhciBJU19GT1JDRUQgPSB0eXBlICYgJGV4cG9ydC5GO1xuICB2YXIgSVNfR0xPQkFMID0gdHlwZSAmICRleHBvcnQuRztcbiAgdmFyIElTX1NUQVRJQyA9IHR5cGUgJiAkZXhwb3J0LlM7XG4gIHZhciBJU19QUk9UTyA9IHR5cGUgJiAkZXhwb3J0LlA7XG4gIHZhciBJU19CSU5EID0gdHlwZSAmICRleHBvcnQuQjtcbiAgdmFyIElTX1dSQVAgPSB0eXBlICYgJGV4cG9ydC5XO1xuICB2YXIgZXhwb3J0cyA9IElTX0dMT0JBTCA/IGNvcmUgOiBjb3JlW25hbWVdIHx8IChjb3JlW25hbWVdID0ge30pO1xuICB2YXIgZXhwUHJvdG8gPSBleHBvcnRzW1BST1RPVFlQRV07XG4gIHZhciB0YXJnZXQgPSBJU19HTE9CQUwgPyBnbG9iYWwgOiBJU19TVEFUSUMgPyBnbG9iYWxbbmFtZV0gOiAoZ2xvYmFsW25hbWVdIHx8IHt9KVtQUk9UT1RZUEVdO1xuICB2YXIga2V5LCBvd24sIG91dDtcbiAgaWYgKElTX0dMT0JBTCkgc291cmNlID0gbmFtZTtcbiAgZm9yIChrZXkgaW4gc291cmNlKSB7XG4gICAgLy8gY29udGFpbnMgaW4gbmF0aXZlXG4gICAgb3duID0gIUlTX0ZPUkNFRCAmJiB0YXJnZXQgJiYgdGFyZ2V0W2tleV0gIT09IHVuZGVmaW5lZDtcbiAgICBpZiAob3duICYmIGhhcyhleHBvcnRzLCBrZXkpKSBjb250aW51ZTtcbiAgICAvLyBleHBvcnQgbmF0aXZlIG9yIHBhc3NlZFxuICAgIG91dCA9IG93biA/IHRhcmdldFtrZXldIDogc291cmNlW2tleV07XG4gICAgLy8gcHJldmVudCBnbG9iYWwgcG9sbHV0aW9uIGZvciBuYW1lc3BhY2VzXG4gICAgZXhwb3J0c1trZXldID0gSVNfR0xPQkFMICYmIHR5cGVvZiB0YXJnZXRba2V5XSAhPSAnZnVuY3Rpb24nID8gc291cmNlW2tleV1cbiAgICAvLyBiaW5kIHRpbWVycyB0byBnbG9iYWwgZm9yIGNhbGwgZnJvbSBleHBvcnQgY29udGV4dFxuICAgIDogSVNfQklORCAmJiBvd24gPyBjdHgob3V0LCBnbG9iYWwpXG4gICAgLy8gd3JhcCBnbG9iYWwgY29uc3RydWN0b3JzIGZvciBwcmV2ZW50IGNoYW5nZSB0aGVtIGluIGxpYnJhcnlcbiAgICA6IElTX1dSQVAgJiYgdGFyZ2V0W2tleV0gPT0gb3V0ID8gKGZ1bmN0aW9uIChDKSB7XG4gICAgICB2YXIgRiA9IGZ1bmN0aW9uIChhLCBiLCBjKSB7XG4gICAgICAgIGlmICh0aGlzIGluc3RhbmNlb2YgQykge1xuICAgICAgICAgIHN3aXRjaCAoYXJndW1lbnRzLmxlbmd0aCkge1xuICAgICAgICAgICAgY2FzZSAwOiByZXR1cm4gbmV3IEMoKTtcbiAgICAgICAgICAgIGNhc2UgMTogcmV0dXJuIG5ldyBDKGEpO1xuICAgICAgICAgICAgY2FzZSAyOiByZXR1cm4gbmV3IEMoYSwgYik7XG4gICAgICAgICAgfSByZXR1cm4gbmV3IEMoYSwgYiwgYyk7XG4gICAgICAgIH0gcmV0dXJuIEMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgIH07XG4gICAgICBGW1BST1RPVFlQRV0gPSBDW1BST1RPVFlQRV07XG4gICAgICByZXR1cm4gRjtcbiAgICAvLyBtYWtlIHN0YXRpYyB2ZXJzaW9ucyBmb3IgcHJvdG90eXBlIG1ldGhvZHNcbiAgICB9KShvdXQpIDogSVNfUFJPVE8gJiYgdHlwZW9mIG91dCA9PSAnZnVuY3Rpb24nID8gY3R4KEZ1bmN0aW9uLmNhbGwsIG91dCkgOiBvdXQ7XG4gICAgLy8gZXhwb3J0IHByb3RvIG1ldGhvZHMgdG8gY29yZS4lQ09OU1RSVUNUT1IlLm1ldGhvZHMuJU5BTUUlXG4gICAgaWYgKElTX1BST1RPKSB7XG4gICAgICAoZXhwb3J0cy52aXJ0dWFsIHx8IChleHBvcnRzLnZpcnR1YWwgPSB7fSkpW2tleV0gPSBvdXQ7XG4gICAgICAvLyBleHBvcnQgcHJvdG8gbWV0aG9kcyB0byBjb3JlLiVDT05TVFJVQ1RPUiUucHJvdG90eXBlLiVOQU1FJVxuICAgICAgaWYgKHR5cGUgJiAkZXhwb3J0LlIgJiYgZXhwUHJvdG8gJiYgIWV4cFByb3RvW2tleV0pIGhpZGUoZXhwUHJvdG8sIGtleSwgb3V0KTtcbiAgICB9XG4gIH1cbn07XG4vLyB0eXBlIGJpdG1hcFxuJGV4cG9ydC5GID0gMTsgICAvLyBmb3JjZWRcbiRleHBvcnQuRyA9IDI7ICAgLy8gZ2xvYmFsXG4kZXhwb3J0LlMgPSA0OyAgIC8vIHN0YXRpY1xuJGV4cG9ydC5QID0gODsgICAvLyBwcm90b1xuJGV4cG9ydC5CID0gMTY7ICAvLyBiaW5kXG4kZXhwb3J0LlcgPSAzMjsgIC8vIHdyYXBcbiRleHBvcnQuVSA9IDY0OyAgLy8gc2FmZVxuJGV4cG9ydC5SID0gMTI4OyAvLyByZWFsIHByb3RvIG1ldGhvZCBmb3IgYGxpYnJhcnlgXG5tb2R1bGUuZXhwb3J0cyA9ICRleHBvcnQ7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2V4cG9ydC5qc1xuLy8gbW9kdWxlIGlkID0gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19leHBvcnQuanNcbi8vIG1vZHVsZSBjaHVua3MgPSBtYWluIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZXhlYykge1xuICB0cnkge1xuICAgIHJldHVybiAhIWV4ZWMoKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19mYWlscy5qc1xuLy8gbW9kdWxlIGlkID0gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19mYWlscy5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IG1haW4iLCJ2YXIgY3R4ID0gcmVxdWlyZSgnLi9fY3R4Jyk7XG52YXIgY2FsbCA9IHJlcXVpcmUoJy4vX2l0ZXItY2FsbCcpO1xudmFyIGlzQXJyYXlJdGVyID0gcmVxdWlyZSgnLi9faXMtYXJyYXktaXRlcicpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgdG9MZW5ndGggPSByZXF1aXJlKCcuL190by1sZW5ndGgnKTtcbnZhciBnZXRJdGVyRm4gPSByZXF1aXJlKCcuL2NvcmUuZ2V0LWl0ZXJhdG9yLW1ldGhvZCcpO1xudmFyIEJSRUFLID0ge307XG52YXIgUkVUVVJOID0ge307XG52YXIgZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZXJhYmxlLCBlbnRyaWVzLCBmbiwgdGhhdCwgSVRFUkFUT1IpIHtcbiAgdmFyIGl0ZXJGbiA9IElURVJBVE9SID8gZnVuY3Rpb24gKCkgeyByZXR1cm4gaXRlcmFibGU7IH0gOiBnZXRJdGVyRm4oaXRlcmFibGUpO1xuICB2YXIgZiA9IGN0eChmbiwgdGhhdCwgZW50cmllcyA/IDIgOiAxKTtcbiAgdmFyIGluZGV4ID0gMDtcbiAgdmFyIGxlbmd0aCwgc3RlcCwgaXRlcmF0b3IsIHJlc3VsdDtcbiAgaWYgKHR5cGVvZiBpdGVyRm4gIT0gJ2Z1bmN0aW9uJykgdGhyb3cgVHlwZUVycm9yKGl0ZXJhYmxlICsgJyBpcyBub3QgaXRlcmFibGUhJyk7XG4gIC8vIGZhc3QgY2FzZSBmb3IgYXJyYXlzIHdpdGggZGVmYXVsdCBpdGVyYXRvclxuICBpZiAoaXNBcnJheUl0ZXIoaXRlckZuKSkgZm9yIChsZW5ndGggPSB0b0xlbmd0aChpdGVyYWJsZS5sZW5ndGgpOyBsZW5ndGggPiBpbmRleDsgaW5kZXgrKykge1xuICAgIHJlc3VsdCA9IGVudHJpZXMgPyBmKGFuT2JqZWN0KHN0ZXAgPSBpdGVyYWJsZVtpbmRleF0pWzBdLCBzdGVwWzFdKSA6IGYoaXRlcmFibGVbaW5kZXhdKTtcbiAgICBpZiAocmVzdWx0ID09PSBCUkVBSyB8fCByZXN1bHQgPT09IFJFVFVSTikgcmV0dXJuIHJlc3VsdDtcbiAgfSBlbHNlIGZvciAoaXRlcmF0b3IgPSBpdGVyRm4uY2FsbChpdGVyYWJsZSk7ICEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZTspIHtcbiAgICByZXN1bHQgPSBjYWxsKGl0ZXJhdG9yLCBmLCBzdGVwLnZhbHVlLCBlbnRyaWVzKTtcbiAgICBpZiAocmVzdWx0ID09PSBCUkVBSyB8fCByZXN1bHQgPT09IFJFVFVSTikgcmV0dXJuIHJlc3VsdDtcbiAgfVxufTtcbmV4cG9ydHMuQlJFQUsgPSBCUkVBSztcbmV4cG9ydHMuUkVUVVJOID0gUkVUVVJOO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19mb3Itb2YuanNcbi8vIG1vZHVsZSBpZCA9IC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZm9yLW9mLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gbWFpbiIsIi8vIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy84NiNpc3N1ZWNvbW1lbnQtMTE1NzU5MDI4XG52YXIgZ2xvYmFsID0gbW9kdWxlLmV4cG9ydHMgPSB0eXBlb2Ygd2luZG93ICE9ICd1bmRlZmluZWQnICYmIHdpbmRvdy5NYXRoID09IE1hdGhcbiAgPyB3aW5kb3cgOiB0eXBlb2Ygc2VsZiAhPSAndW5kZWZpbmVkJyAmJiBzZWxmLk1hdGggPT0gTWF0aCA/IHNlbGZcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLW5ldy1mdW5jXG4gIDogRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcbmlmICh0eXBlb2YgX19nID09ICdudW1iZXInKSBfX2cgPSBnbG9iYWw7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZ2xvYmFsLmpzXG4vLyBtb2R1bGUgaWQgPSAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2dsb2JhbC5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IG1haW4iLCJ2YXIgaGFzT3duUHJvcGVydHkgPSB7fS5oYXNPd25Qcm9wZXJ0eTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0LCBrZXkpIHtcbiAgcmV0dXJuIGhhc093blByb3BlcnR5LmNhbGwoaXQsIGtleSk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19oYXMuanNcbi8vIG1vZHVsZSBpZCA9IC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faGFzLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gbWFpbiIsInZhciBkUCA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpO1xudmFyIGNyZWF0ZURlc2MgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBmdW5jdGlvbiAob2JqZWN0LCBrZXksIHZhbHVlKSB7XG4gIHJldHVybiBkUC5mKG9iamVjdCwga2V5LCBjcmVhdGVEZXNjKDEsIHZhbHVlKSk7XG59IDogZnVuY3Rpb24gKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICBvYmplY3Rba2V5XSA9IHZhbHVlO1xuICByZXR1cm4gb2JqZWN0O1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faGlkZS5qc1xuLy8gbW9kdWxlIGlkID0gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19oaWRlLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gbWFpbiIsInZhciBkb2N1bWVudCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpLmRvY3VtZW50O1xubW9kdWxlLmV4cG9ydHMgPSBkb2N1bWVudCAmJiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2h0bWwuanNcbi8vIG1vZHVsZSBpZCA9IC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faHRtbC5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IG1haW4iLCJtb2R1bGUuZXhwb3J0cyA9ICFyZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpICYmICFyZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShyZXF1aXJlKCcuL19kb20tY3JlYXRlJykoJ2RpdicpLCAnYScsIHsgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiA3OyB9IH0pLmEgIT0gNztcbn0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pZTgtZG9tLWRlZmluZS5qc1xuLy8gbW9kdWxlIGlkID0gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pZTgtZG9tLWRlZmluZS5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IG1haW4iLCIvLyBmYXN0IGFwcGx5LCBodHRwOi8vanNwZXJmLmxua2l0LmNvbS9mYXN0LWFwcGx5LzVcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGZuLCBhcmdzLCB0aGF0KSB7XG4gIHZhciB1biA9IHRoYXQgPT09IHVuZGVmaW5lZDtcbiAgc3dpdGNoIChhcmdzLmxlbmd0aCkge1xuICAgIGNhc2UgMDogcmV0dXJuIHVuID8gZm4oKVxuICAgICAgICAgICAgICAgICAgICAgIDogZm4uY2FsbCh0aGF0KTtcbiAgICBjYXNlIDE6IHJldHVybiB1biA/IGZuKGFyZ3NbMF0pXG4gICAgICAgICAgICAgICAgICAgICAgOiBmbi5jYWxsKHRoYXQsIGFyZ3NbMF0pO1xuICAgIGNhc2UgMjogcmV0dXJuIHVuID8gZm4oYXJnc1swXSwgYXJnc1sxXSlcbiAgICAgICAgICAgICAgICAgICAgICA6IGZuLmNhbGwodGhhdCwgYXJnc1swXSwgYXJnc1sxXSk7XG4gICAgY2FzZSAzOiByZXR1cm4gdW4gPyBmbihhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdKVxuICAgICAgICAgICAgICAgICAgICAgIDogZm4uY2FsbCh0aGF0LCBhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdKTtcbiAgICBjYXNlIDQ6IHJldHVybiB1biA/IGZuKGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0sIGFyZ3NbM10pXG4gICAgICAgICAgICAgICAgICAgICAgOiBmbi5jYWxsKHRoYXQsIGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0sIGFyZ3NbM10pO1xuICB9IHJldHVybiBmbi5hcHBseSh0aGF0LCBhcmdzKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2ludm9rZS5qc1xuLy8gbW9kdWxlIGlkID0gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pbnZva2UuanNcbi8vIG1vZHVsZSBjaHVua3MgPSBtYWluIiwiLy8gZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBhbmQgbm9uLWVudW1lcmFibGUgb2xkIFY4IHN0cmluZ3NcbnZhciBjb2YgPSByZXF1aXJlKCcuL19jb2YnKTtcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wcm90b3R5cGUtYnVpbHRpbnNcbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0KCd6JykucHJvcGVydHlJc0VudW1lcmFibGUoMCkgPyBPYmplY3QgOiBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGNvZihpdCkgPT0gJ1N0cmluZycgPyBpdC5zcGxpdCgnJykgOiBPYmplY3QoaXQpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faW9iamVjdC5qc1xuLy8gbW9kdWxlIGlkID0gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pb2JqZWN0LmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gbWFpbiIsIi8vIGNoZWNrIG9uIGRlZmF1bHQgQXJyYXkgaXRlcmF0b3JcbnZhciBJdGVyYXRvcnMgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKTtcbnZhciBJVEVSQVRPUiA9IHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpO1xudmFyIEFycmF5UHJvdG8gPSBBcnJheS5wcm90b3R5cGU7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBpdCAhPT0gdW5kZWZpbmVkICYmIChJdGVyYXRvcnMuQXJyYXkgPT09IGl0IHx8IEFycmF5UHJvdG9bSVRFUkFUT1JdID09PSBpdCk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pcy1hcnJheS1pdGVyLmpzXG4vLyBtb2R1bGUgaWQgPSAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lzLWFycmF5LWl0ZXIuanNcbi8vIG1vZHVsZSBjaHVua3MgPSBtYWluIiwiLy8gNy4yLjIgSXNBcnJheShhcmd1bWVudClcbnZhciBjb2YgPSByZXF1aXJlKCcuL19jb2YnKTtcbm1vZHVsZS5leHBvcnRzID0gQXJyYXkuaXNBcnJheSB8fCBmdW5jdGlvbiBpc0FycmF5KGFyZykge1xuICByZXR1cm4gY29mKGFyZykgPT0gJ0FycmF5Jztcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lzLWFycmF5LmpzXG4vLyBtb2R1bGUgaWQgPSAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lzLWFycmF5LmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gbWFpbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiB0eXBlb2YgaXQgPT09ICdvYmplY3QnID8gaXQgIT09IG51bGwgOiB0eXBlb2YgaXQgPT09ICdmdW5jdGlvbic7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pcy1vYmplY3QuanNcbi8vIG1vZHVsZSBpZCA9IC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXMtb2JqZWN0LmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gbWFpbiIsIi8vIGNhbGwgc29tZXRoaW5nIG9uIGl0ZXJhdG9yIHN0ZXAgd2l0aCBzYWZlIGNsb3Npbmcgb24gZXJyb3JcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlcmF0b3IsIGZuLCB2YWx1ZSwgZW50cmllcykge1xuICB0cnkge1xuICAgIHJldHVybiBlbnRyaWVzID8gZm4oYW5PYmplY3QodmFsdWUpWzBdLCB2YWx1ZVsxXSkgOiBmbih2YWx1ZSk7XG4gIC8vIDcuNC42IEl0ZXJhdG9yQ2xvc2UoaXRlcmF0b3IsIGNvbXBsZXRpb24pXG4gIH0gY2F0Y2ggKGUpIHtcbiAgICB2YXIgcmV0ID0gaXRlcmF0b3JbJ3JldHVybiddO1xuICAgIGlmIChyZXQgIT09IHVuZGVmaW5lZCkgYW5PYmplY3QocmV0LmNhbGwoaXRlcmF0b3IpKTtcbiAgICB0aHJvdyBlO1xuICB9XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWNhbGwuanNcbi8vIG1vZHVsZSBpZCA9IC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1jYWxsLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gbWFpbiIsIid1c2Ugc3RyaWN0JztcbnZhciBjcmVhdGUgPSByZXF1aXJlKCcuL19vYmplY3QtY3JlYXRlJyk7XG52YXIgZGVzY3JpcHRvciA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKTtcbnZhciBzZXRUb1N0cmluZ1RhZyA9IHJlcXVpcmUoJy4vX3NldC10by1zdHJpbmctdGFnJyk7XG52YXIgSXRlcmF0b3JQcm90b3R5cGUgPSB7fTtcblxuLy8gMjUuMS4yLjEuMSAlSXRlcmF0b3JQcm90b3R5cGUlW0BAaXRlcmF0b3JdKClcbnJlcXVpcmUoJy4vX2hpZGUnKShJdGVyYXRvclByb3RvdHlwZSwgcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJyksIGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgTkFNRSwgbmV4dCkge1xuICBDb25zdHJ1Y3Rvci5wcm90b3R5cGUgPSBjcmVhdGUoSXRlcmF0b3JQcm90b3R5cGUsIHsgbmV4dDogZGVzY3JpcHRvcigxLCBuZXh0KSB9KTtcbiAgc2V0VG9TdHJpbmdUYWcoQ29uc3RydWN0b3IsIE5BTUUgKyAnIEl0ZXJhdG9yJyk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWNyZWF0ZS5qc1xuLy8gbW9kdWxlIGlkID0gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWNyZWF0ZS5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IG1haW4iLCIndXNlIHN0cmljdCc7XG52YXIgTElCUkFSWSA9IHJlcXVpcmUoJy4vX2xpYnJhcnknKTtcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG52YXIgcmVkZWZpbmUgPSByZXF1aXJlKCcuL19yZWRlZmluZScpO1xudmFyIGhpZGUgPSByZXF1aXJlKCcuL19oaWRlJyk7XG52YXIgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJyk7XG52YXIgJGl0ZXJDcmVhdGUgPSByZXF1aXJlKCcuL19pdGVyLWNyZWF0ZScpO1xudmFyIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZSgnLi9fc2V0LXRvLXN0cmluZy10YWcnKTtcbnZhciBnZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoJy4vX29iamVjdC1ncG8nKTtcbnZhciBJVEVSQVRPUiA9IHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpO1xudmFyIEJVR0dZID0gIShbXS5rZXlzICYmICduZXh0JyBpbiBbXS5rZXlzKCkpOyAvLyBTYWZhcmkgaGFzIGJ1Z2d5IGl0ZXJhdG9ycyB3L28gYG5leHRgXG52YXIgRkZfSVRFUkFUT1IgPSAnQEBpdGVyYXRvcic7XG52YXIgS0VZUyA9ICdrZXlzJztcbnZhciBWQUxVRVMgPSAndmFsdWVzJztcblxudmFyIHJldHVyblRoaXMgPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChCYXNlLCBOQU1FLCBDb25zdHJ1Y3RvciwgbmV4dCwgREVGQVVMVCwgSVNfU0VULCBGT1JDRUQpIHtcbiAgJGl0ZXJDcmVhdGUoQ29uc3RydWN0b3IsIE5BTUUsIG5leHQpO1xuICB2YXIgZ2V0TWV0aG9kID0gZnVuY3Rpb24gKGtpbmQpIHtcbiAgICBpZiAoIUJVR0dZICYmIGtpbmQgaW4gcHJvdG8pIHJldHVybiBwcm90b1traW5kXTtcbiAgICBzd2l0Y2ggKGtpbmQpIHtcbiAgICAgIGNhc2UgS0VZUzogcmV0dXJuIGZ1bmN0aW9uIGtleXMoKSB7IHJldHVybiBuZXcgQ29uc3RydWN0b3IodGhpcywga2luZCk7IH07XG4gICAgICBjYXNlIFZBTFVFUzogcmV0dXJuIGZ1bmN0aW9uIHZhbHVlcygpIHsgcmV0dXJuIG5ldyBDb25zdHJ1Y3Rvcih0aGlzLCBraW5kKTsgfTtcbiAgICB9IHJldHVybiBmdW5jdGlvbiBlbnRyaWVzKCkgeyByZXR1cm4gbmV3IENvbnN0cnVjdG9yKHRoaXMsIGtpbmQpOyB9O1xuICB9O1xuICB2YXIgVEFHID0gTkFNRSArICcgSXRlcmF0b3InO1xuICB2YXIgREVGX1ZBTFVFUyA9IERFRkFVTFQgPT0gVkFMVUVTO1xuICB2YXIgVkFMVUVTX0JVRyA9IGZhbHNlO1xuICB2YXIgcHJvdG8gPSBCYXNlLnByb3RvdHlwZTtcbiAgdmFyICRuYXRpdmUgPSBwcm90b1tJVEVSQVRPUl0gfHwgcHJvdG9bRkZfSVRFUkFUT1JdIHx8IERFRkFVTFQgJiYgcHJvdG9bREVGQVVMVF07XG4gIHZhciAkZGVmYXVsdCA9ICRuYXRpdmUgfHwgZ2V0TWV0aG9kKERFRkFVTFQpO1xuICB2YXIgJGVudHJpZXMgPSBERUZBVUxUID8gIURFRl9WQUxVRVMgPyAkZGVmYXVsdCA6IGdldE1ldGhvZCgnZW50cmllcycpIDogdW5kZWZpbmVkO1xuICB2YXIgJGFueU5hdGl2ZSA9IE5BTUUgPT0gJ0FycmF5JyA/IHByb3RvLmVudHJpZXMgfHwgJG5hdGl2ZSA6ICRuYXRpdmU7XG4gIHZhciBtZXRob2RzLCBrZXksIEl0ZXJhdG9yUHJvdG90eXBlO1xuICAvLyBGaXggbmF0aXZlXG4gIGlmICgkYW55TmF0aXZlKSB7XG4gICAgSXRlcmF0b3JQcm90b3R5cGUgPSBnZXRQcm90b3R5cGVPZigkYW55TmF0aXZlLmNhbGwobmV3IEJhc2UoKSkpO1xuICAgIGlmIChJdGVyYXRvclByb3RvdHlwZSAhPT0gT2JqZWN0LnByb3RvdHlwZSAmJiBJdGVyYXRvclByb3RvdHlwZS5uZXh0KSB7XG4gICAgICAvLyBTZXQgQEB0b1N0cmluZ1RhZyB0byBuYXRpdmUgaXRlcmF0b3JzXG4gICAgICBzZXRUb1N0cmluZ1RhZyhJdGVyYXRvclByb3RvdHlwZSwgVEFHLCB0cnVlKTtcbiAgICAgIC8vIGZpeCBmb3Igc29tZSBvbGQgZW5naW5lc1xuICAgICAgaWYgKCFMSUJSQVJZICYmIHR5cGVvZiBJdGVyYXRvclByb3RvdHlwZVtJVEVSQVRPUl0gIT0gJ2Z1bmN0aW9uJykgaGlkZShJdGVyYXRvclByb3RvdHlwZSwgSVRFUkFUT1IsIHJldHVyblRoaXMpO1xuICAgIH1cbiAgfVxuICAvLyBmaXggQXJyYXkje3ZhbHVlcywgQEBpdGVyYXRvcn0ubmFtZSBpbiBWOCAvIEZGXG4gIGlmIChERUZfVkFMVUVTICYmICRuYXRpdmUgJiYgJG5hdGl2ZS5uYW1lICE9PSBWQUxVRVMpIHtcbiAgICBWQUxVRVNfQlVHID0gdHJ1ZTtcbiAgICAkZGVmYXVsdCA9IGZ1bmN0aW9uIHZhbHVlcygpIHsgcmV0dXJuICRuYXRpdmUuY2FsbCh0aGlzKTsgfTtcbiAgfVxuICAvLyBEZWZpbmUgaXRlcmF0b3JcbiAgaWYgKCghTElCUkFSWSB8fCBGT1JDRUQpICYmIChCVUdHWSB8fCBWQUxVRVNfQlVHIHx8ICFwcm90b1tJVEVSQVRPUl0pKSB7XG4gICAgaGlkZShwcm90bywgSVRFUkFUT1IsICRkZWZhdWx0KTtcbiAgfVxuICAvLyBQbHVnIGZvciBsaWJyYXJ5XG4gIEl0ZXJhdG9yc1tOQU1FXSA9ICRkZWZhdWx0O1xuICBJdGVyYXRvcnNbVEFHXSA9IHJldHVyblRoaXM7XG4gIGlmIChERUZBVUxUKSB7XG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIHZhbHVlczogREVGX1ZBTFVFUyA/ICRkZWZhdWx0IDogZ2V0TWV0aG9kKFZBTFVFUyksXG4gICAgICBrZXlzOiBJU19TRVQgPyAkZGVmYXVsdCA6IGdldE1ldGhvZChLRVlTKSxcbiAgICAgIGVudHJpZXM6ICRlbnRyaWVzXG4gICAgfTtcbiAgICBpZiAoRk9SQ0VEKSBmb3IgKGtleSBpbiBtZXRob2RzKSB7XG4gICAgICBpZiAoIShrZXkgaW4gcHJvdG8pKSByZWRlZmluZShwcm90bywga2V5LCBtZXRob2RzW2tleV0pO1xuICAgIH0gZWxzZSAkZXhwb3J0KCRleHBvcnQuUCArICRleHBvcnQuRiAqIChCVUdHWSB8fCBWQUxVRVNfQlVHKSwgTkFNRSwgbWV0aG9kcyk7XG4gIH1cbiAgcmV0dXJuIG1ldGhvZHM7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWRlZmluZS5qc1xuLy8gbW9kdWxlIGlkID0gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWRlZmluZS5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IG1haW4iLCJ2YXIgSVRFUkFUT1IgPSByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKTtcbnZhciBTQUZFX0NMT1NJTkcgPSBmYWxzZTtcblxudHJ5IHtcbiAgdmFyIHJpdGVyID0gWzddW0lURVJBVE9SXSgpO1xuICByaXRlclsncmV0dXJuJ10gPSBmdW5jdGlvbiAoKSB7IFNBRkVfQ0xPU0lORyA9IHRydWU7IH07XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby10aHJvdy1saXRlcmFsXG4gIEFycmF5LmZyb20ocml0ZXIsIGZ1bmN0aW9uICgpIHsgdGhyb3cgMjsgfSk7XG59IGNhdGNoIChlKSB7IC8qIGVtcHR5ICovIH1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZXhlYywgc2tpcENsb3NpbmcpIHtcbiAgaWYgKCFza2lwQ2xvc2luZyAmJiAhU0FGRV9DTE9TSU5HKSByZXR1cm4gZmFsc2U7XG4gIHZhciBzYWZlID0gZmFsc2U7XG4gIHRyeSB7XG4gICAgdmFyIGFyciA9IFs3XTtcbiAgICB2YXIgaXRlciA9IGFycltJVEVSQVRPUl0oKTtcbiAgICBpdGVyLm5leHQgPSBmdW5jdGlvbiAoKSB7IHJldHVybiB7IGRvbmU6IHNhZmUgPSB0cnVlIH07IH07XG4gICAgYXJyW0lURVJBVE9SXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGl0ZXI7IH07XG4gICAgZXhlYyhhcnIpO1xuICB9IGNhdGNoIChlKSB7IC8qIGVtcHR5ICovIH1cbiAgcmV0dXJuIHNhZmU7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWRldGVjdC5qc1xuLy8gbW9kdWxlIGlkID0gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWRldGVjdC5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IG1haW4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChkb25lLCB2YWx1ZSkge1xuICByZXR1cm4geyB2YWx1ZTogdmFsdWUsIGRvbmU6ICEhZG9uZSB9O1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1zdGVwLmpzXG4vLyBtb2R1bGUgaWQgPSAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItc3RlcC5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IG1haW4iLCJtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyYXRvcnMuanNcbi8vIG1vZHVsZSBpZCA9IC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlcmF0b3JzLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gbWFpbiIsIm1vZHVsZS5leHBvcnRzID0gdHJ1ZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fbGlicmFyeS5qc1xuLy8gbW9kdWxlIGlkID0gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19saWJyYXJ5LmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gbWFpbiIsInZhciBNRVRBID0gcmVxdWlyZSgnLi9fdWlkJykoJ21ldGEnKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xudmFyIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpO1xudmFyIHNldERlc2MgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKS5mO1xudmFyIGlkID0gMDtcbnZhciBpc0V4dGVuc2libGUgPSBPYmplY3QuaXNFeHRlbnNpYmxlIHx8IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRydWU7XG59O1xudmFyIEZSRUVaRSA9ICFyZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIGlzRXh0ZW5zaWJsZShPYmplY3QucHJldmVudEV4dGVuc2lvbnMoe30pKTtcbn0pO1xudmFyIHNldE1ldGEgPSBmdW5jdGlvbiAoaXQpIHtcbiAgc2V0RGVzYyhpdCwgTUVUQSwgeyB2YWx1ZToge1xuICAgIGk6ICdPJyArICsraWQsIC8vIG9iamVjdCBJRFxuICAgIHc6IHt9ICAgICAgICAgIC8vIHdlYWsgY29sbGVjdGlvbnMgSURzXG4gIH0gfSk7XG59O1xudmFyIGZhc3RLZXkgPSBmdW5jdGlvbiAoaXQsIGNyZWF0ZSkge1xuICAvLyByZXR1cm4gcHJpbWl0aXZlIHdpdGggcHJlZml4XG4gIGlmICghaXNPYmplY3QoaXQpKSByZXR1cm4gdHlwZW9mIGl0ID09ICdzeW1ib2wnID8gaXQgOiAodHlwZW9mIGl0ID09ICdzdHJpbmcnID8gJ1MnIDogJ1AnKSArIGl0O1xuICBpZiAoIWhhcyhpdCwgTUVUQSkpIHtcbiAgICAvLyBjYW4ndCBzZXQgbWV0YWRhdGEgdG8gdW5jYXVnaHQgZnJvemVuIG9iamVjdFxuICAgIGlmICghaXNFeHRlbnNpYmxlKGl0KSkgcmV0dXJuICdGJztcbiAgICAvLyBub3QgbmVjZXNzYXJ5IHRvIGFkZCBtZXRhZGF0YVxuICAgIGlmICghY3JlYXRlKSByZXR1cm4gJ0UnO1xuICAgIC8vIGFkZCBtaXNzaW5nIG1ldGFkYXRhXG4gICAgc2V0TWV0YShpdCk7XG4gIC8vIHJldHVybiBvYmplY3QgSURcbiAgfSByZXR1cm4gaXRbTUVUQV0uaTtcbn07XG52YXIgZ2V0V2VhayA9IGZ1bmN0aW9uIChpdCwgY3JlYXRlKSB7XG4gIGlmICghaGFzKGl0LCBNRVRBKSkge1xuICAgIC8vIGNhbid0IHNldCBtZXRhZGF0YSB0byB1bmNhdWdodCBmcm96ZW4gb2JqZWN0XG4gICAgaWYgKCFpc0V4dGVuc2libGUoaXQpKSByZXR1cm4gdHJ1ZTtcbiAgICAvLyBub3QgbmVjZXNzYXJ5IHRvIGFkZCBtZXRhZGF0YVxuICAgIGlmICghY3JlYXRlKSByZXR1cm4gZmFsc2U7XG4gICAgLy8gYWRkIG1pc3NpbmcgbWV0YWRhdGFcbiAgICBzZXRNZXRhKGl0KTtcbiAgLy8gcmV0dXJuIGhhc2ggd2VhayBjb2xsZWN0aW9ucyBJRHNcbiAgfSByZXR1cm4gaXRbTUVUQV0udztcbn07XG4vLyBhZGQgbWV0YWRhdGEgb24gZnJlZXplLWZhbWlseSBtZXRob2RzIGNhbGxpbmdcbnZhciBvbkZyZWV6ZSA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAoRlJFRVpFICYmIG1ldGEuTkVFRCAmJiBpc0V4dGVuc2libGUoaXQpICYmICFoYXMoaXQsIE1FVEEpKSBzZXRNZXRhKGl0KTtcbiAgcmV0dXJuIGl0O1xufTtcbnZhciBtZXRhID0gbW9kdWxlLmV4cG9ydHMgPSB7XG4gIEtFWTogTUVUQSxcbiAgTkVFRDogZmFsc2UsXG4gIGZhc3RLZXk6IGZhc3RLZXksXG4gIGdldFdlYWs6IGdldFdlYWssXG4gIG9uRnJlZXplOiBvbkZyZWV6ZVxufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fbWV0YS5qc1xuLy8gbW9kdWxlIGlkID0gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19tZXRhLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gbWFpbiIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBtYWNyb3Rhc2sgPSByZXF1aXJlKCcuL190YXNrJykuc2V0O1xudmFyIE9ic2VydmVyID0gZ2xvYmFsLk11dGF0aW9uT2JzZXJ2ZXIgfHwgZ2xvYmFsLldlYktpdE11dGF0aW9uT2JzZXJ2ZXI7XG52YXIgcHJvY2VzcyA9IGdsb2JhbC5wcm9jZXNzO1xudmFyIFByb21pc2UgPSBnbG9iYWwuUHJvbWlzZTtcbnZhciBpc05vZGUgPSByZXF1aXJlKCcuL19jb2YnKShwcm9jZXNzKSA9PSAncHJvY2Vzcyc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCkge1xuICB2YXIgaGVhZCwgbGFzdCwgbm90aWZ5O1xuXG4gIHZhciBmbHVzaCA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgcGFyZW50LCBmbjtcbiAgICBpZiAoaXNOb2RlICYmIChwYXJlbnQgPSBwcm9jZXNzLmRvbWFpbikpIHBhcmVudC5leGl0KCk7XG4gICAgd2hpbGUgKGhlYWQpIHtcbiAgICAgIGZuID0gaGVhZC5mbjtcbiAgICAgIGhlYWQgPSBoZWFkLm5leHQ7XG4gICAgICB0cnkge1xuICAgICAgICBmbigpO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBpZiAoaGVhZCkgbm90aWZ5KCk7XG4gICAgICAgIGVsc2UgbGFzdCA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhyb3cgZTtcbiAgICAgIH1cbiAgICB9IGxhc3QgPSB1bmRlZmluZWQ7XG4gICAgaWYgKHBhcmVudCkgcGFyZW50LmVudGVyKCk7XG4gIH07XG5cbiAgLy8gTm9kZS5qc1xuICBpZiAoaXNOb2RlKSB7XG4gICAgbm90aWZ5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgcHJvY2Vzcy5uZXh0VGljayhmbHVzaCk7XG4gICAgfTtcbiAgLy8gYnJvd3NlcnMgd2l0aCBNdXRhdGlvbk9ic2VydmVyLCBleGNlcHQgaU9TIFNhZmFyaSAtIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy8zMzlcbiAgfSBlbHNlIGlmIChPYnNlcnZlciAmJiAhKGdsb2JhbC5uYXZpZ2F0b3IgJiYgZ2xvYmFsLm5hdmlnYXRvci5zdGFuZGFsb25lKSkge1xuICAgIHZhciB0b2dnbGUgPSB0cnVlO1xuICAgIHZhciBub2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJycpO1xuICAgIG5ldyBPYnNlcnZlcihmbHVzaCkub2JzZXJ2ZShub2RlLCB7IGNoYXJhY3RlckRhdGE6IHRydWUgfSk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tbmV3XG4gICAgbm90aWZ5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgbm9kZS5kYXRhID0gdG9nZ2xlID0gIXRvZ2dsZTtcbiAgICB9O1xuICAvLyBlbnZpcm9ubWVudHMgd2l0aCBtYXliZSBub24tY29tcGxldGVseSBjb3JyZWN0LCBidXQgZXhpc3RlbnQgUHJvbWlzZVxuICB9IGVsc2UgaWYgKFByb21pc2UgJiYgUHJvbWlzZS5yZXNvbHZlKSB7XG4gICAgLy8gUHJvbWlzZS5yZXNvbHZlIHdpdGhvdXQgYW4gYXJndW1lbnQgdGhyb3dzIGFuIGVycm9yIGluIExHIFdlYk9TIDJcbiAgICB2YXIgcHJvbWlzZSA9IFByb21pc2UucmVzb2x2ZSh1bmRlZmluZWQpO1xuICAgIG5vdGlmeSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHByb21pc2UudGhlbihmbHVzaCk7XG4gICAgfTtcbiAgLy8gZm9yIG90aGVyIGVudmlyb25tZW50cyAtIG1hY3JvdGFzayBiYXNlZCBvbjpcbiAgLy8gLSBzZXRJbW1lZGlhdGVcbiAgLy8gLSBNZXNzYWdlQ2hhbm5lbFxuICAvLyAtIHdpbmRvdy5wb3N0TWVzc2FnXG4gIC8vIC0gb25yZWFkeXN0YXRlY2hhbmdlXG4gIC8vIC0gc2V0VGltZW91dFxuICB9IGVsc2Uge1xuICAgIG5vdGlmeSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vIHN0cmFuZ2UgSUUgKyB3ZWJwYWNrIGRldiBzZXJ2ZXIgYnVnIC0gdXNlIC5jYWxsKGdsb2JhbClcbiAgICAgIG1hY3JvdGFzay5jYWxsKGdsb2JhbCwgZmx1c2gpO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gKGZuKSB7XG4gICAgdmFyIHRhc2sgPSB7IGZuOiBmbiwgbmV4dDogdW5kZWZpbmVkIH07XG4gICAgaWYgKGxhc3QpIGxhc3QubmV4dCA9IHRhc2s7XG4gICAgaWYgKCFoZWFkKSB7XG4gICAgICBoZWFkID0gdGFzaztcbiAgICAgIG5vdGlmeSgpO1xuICAgIH0gbGFzdCA9IHRhc2s7XG4gIH07XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19taWNyb3Rhc2suanNcbi8vIG1vZHVsZSBpZCA9IC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fbWljcm90YXNrLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gbWFpbiIsIid1c2Ugc3RyaWN0Jztcbi8vIDI1LjQuMS41IE5ld1Byb21pc2VDYXBhYmlsaXR5KEMpXG52YXIgYUZ1bmN0aW9uID0gcmVxdWlyZSgnLi9fYS1mdW5jdGlvbicpO1xuXG5mdW5jdGlvbiBQcm9taXNlQ2FwYWJpbGl0eShDKSB7XG4gIHZhciByZXNvbHZlLCByZWplY3Q7XG4gIHRoaXMucHJvbWlzZSA9IG5ldyBDKGZ1bmN0aW9uICgkJHJlc29sdmUsICQkcmVqZWN0KSB7XG4gICAgaWYgKHJlc29sdmUgIT09IHVuZGVmaW5lZCB8fCByZWplY3QgIT09IHVuZGVmaW5lZCkgdGhyb3cgVHlwZUVycm9yKCdCYWQgUHJvbWlzZSBjb25zdHJ1Y3RvcicpO1xuICAgIHJlc29sdmUgPSAkJHJlc29sdmU7XG4gICAgcmVqZWN0ID0gJCRyZWplY3Q7XG4gIH0pO1xuICB0aGlzLnJlc29sdmUgPSBhRnVuY3Rpb24ocmVzb2x2ZSk7XG4gIHRoaXMucmVqZWN0ID0gYUZ1bmN0aW9uKHJlamVjdCk7XG59XG5cbm1vZHVsZS5leHBvcnRzLmYgPSBmdW5jdGlvbiAoQykge1xuICByZXR1cm4gbmV3IFByb21pc2VDYXBhYmlsaXR5KEMpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fbmV3LXByb21pc2UtY2FwYWJpbGl0eS5qc1xuLy8gbW9kdWxlIGlkID0gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19uZXctcHJvbWlzZS1jYXBhYmlsaXR5LmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gbWFpbiIsIid1c2Ugc3RyaWN0Jztcbi8vIDE5LjEuMi4xIE9iamVjdC5hc3NpZ24odGFyZ2V0LCBzb3VyY2UsIC4uLilcbnZhciBnZXRLZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKTtcbnZhciBnT1BTID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcHMnKTtcbnZhciBwSUUgPSByZXF1aXJlKCcuL19vYmplY3QtcGllJyk7XG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuL190by1vYmplY3QnKTtcbnZhciBJT2JqZWN0ID0gcmVxdWlyZSgnLi9faW9iamVjdCcpO1xudmFyICRhc3NpZ24gPSBPYmplY3QuYXNzaWduO1xuXG4vLyBzaG91bGQgd29yayB3aXRoIHN5bWJvbHMgYW5kIHNob3VsZCBoYXZlIGRldGVybWluaXN0aWMgcHJvcGVydHkgb3JkZXIgKFY4IGJ1Zylcbm1vZHVsZS5leHBvcnRzID0gISRhc3NpZ24gfHwgcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbiAoKSB7XG4gIHZhciBBID0ge307XG4gIHZhciBCID0ge307XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICB2YXIgUyA9IFN5bWJvbCgpO1xuICB2YXIgSyA9ICdhYmNkZWZnaGlqa2xtbm9wcXJzdCc7XG4gIEFbU10gPSA3O1xuICBLLnNwbGl0KCcnKS5mb3JFYWNoKGZ1bmN0aW9uIChrKSB7IEJba10gPSBrOyB9KTtcbiAgcmV0dXJuICRhc3NpZ24oe30sIEEpW1NdICE9IDcgfHwgT2JqZWN0LmtleXMoJGFzc2lnbih7fSwgQikpLmpvaW4oJycpICE9IEs7XG59KSA/IGZ1bmN0aW9uIGFzc2lnbih0YXJnZXQsIHNvdXJjZSkgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXG4gIHZhciBUID0gdG9PYmplY3QodGFyZ2V0KTtcbiAgdmFyIGFMZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICB2YXIgaW5kZXggPSAxO1xuICB2YXIgZ2V0U3ltYm9scyA9IGdPUFMuZjtcbiAgdmFyIGlzRW51bSA9IHBJRS5mO1xuICB3aGlsZSAoYUxlbiA+IGluZGV4KSB7XG4gICAgdmFyIFMgPSBJT2JqZWN0KGFyZ3VtZW50c1tpbmRleCsrXSk7XG4gICAgdmFyIGtleXMgPSBnZXRTeW1ib2xzID8gZ2V0S2V5cyhTKS5jb25jYXQoZ2V0U3ltYm9scyhTKSkgOiBnZXRLZXlzKFMpO1xuICAgIHZhciBsZW5ndGggPSBrZXlzLmxlbmd0aDtcbiAgICB2YXIgaiA9IDA7XG4gICAgdmFyIGtleTtcbiAgICB3aGlsZSAobGVuZ3RoID4gaikgaWYgKGlzRW51bS5jYWxsKFMsIGtleSA9IGtleXNbaisrXSkpIFRba2V5XSA9IFNba2V5XTtcbiAgfSByZXR1cm4gVDtcbn0gOiAkYXNzaWduO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtYXNzaWduLmpzXG4vLyBtb2R1bGUgaWQgPSAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1hc3NpZ24uanNcbi8vIG1vZHVsZSBjaHVua3MgPSBtYWluIiwiLy8gMTkuMS4yLjIgLyAxNS4yLjMuNSBPYmplY3QuY3JlYXRlKE8gWywgUHJvcGVydGllc10pXG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciBkUHMgPSByZXF1aXJlKCcuL19vYmplY3QtZHBzJyk7XG52YXIgZW51bUJ1Z0tleXMgPSByZXF1aXJlKCcuL19lbnVtLWJ1Zy1rZXlzJyk7XG52YXIgSUVfUFJPVE8gPSByZXF1aXJlKCcuL19zaGFyZWQta2V5JykoJ0lFX1BST1RPJyk7XG52YXIgRW1wdHkgPSBmdW5jdGlvbiAoKSB7IC8qIGVtcHR5ICovIH07XG52YXIgUFJPVE9UWVBFID0gJ3Byb3RvdHlwZSc7XG5cbi8vIENyZWF0ZSBvYmplY3Qgd2l0aCBmYWtlIGBudWxsYCBwcm90b3R5cGU6IHVzZSBpZnJhbWUgT2JqZWN0IHdpdGggY2xlYXJlZCBwcm90b3R5cGVcbnZhciBjcmVhdGVEaWN0ID0gZnVuY3Rpb24gKCkge1xuICAvLyBUaHJhc2gsIHdhc3RlIGFuZCBzb2RvbXk6IElFIEdDIGJ1Z1xuICB2YXIgaWZyYW1lID0gcmVxdWlyZSgnLi9fZG9tLWNyZWF0ZScpKCdpZnJhbWUnKTtcbiAgdmFyIGkgPSBlbnVtQnVnS2V5cy5sZW5ndGg7XG4gIHZhciBsdCA9ICc8JztcbiAgdmFyIGd0ID0gJz4nO1xuICB2YXIgaWZyYW1lRG9jdW1lbnQ7XG4gIGlmcmFtZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICByZXF1aXJlKCcuL19odG1sJykuYXBwZW5kQ2hpbGQoaWZyYW1lKTtcbiAgaWZyYW1lLnNyYyA9ICdqYXZhc2NyaXB0Oic7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tc2NyaXB0LXVybFxuICAvLyBjcmVhdGVEaWN0ID0gaWZyYW1lLmNvbnRlbnRXaW5kb3cuT2JqZWN0O1xuICAvLyBodG1sLnJlbW92ZUNoaWxkKGlmcmFtZSk7XG4gIGlmcmFtZURvY3VtZW50ID0gaWZyYW1lLmNvbnRlbnRXaW5kb3cuZG9jdW1lbnQ7XG4gIGlmcmFtZURvY3VtZW50Lm9wZW4oKTtcbiAgaWZyYW1lRG9jdW1lbnQud3JpdGUobHQgKyAnc2NyaXB0JyArIGd0ICsgJ2RvY3VtZW50LkY9T2JqZWN0JyArIGx0ICsgJy9zY3JpcHQnICsgZ3QpO1xuICBpZnJhbWVEb2N1bWVudC5jbG9zZSgpO1xuICBjcmVhdGVEaWN0ID0gaWZyYW1lRG9jdW1lbnQuRjtcbiAgd2hpbGUgKGktLSkgZGVsZXRlIGNyZWF0ZURpY3RbUFJPVE9UWVBFXVtlbnVtQnVnS2V5c1tpXV07XG4gIHJldHVybiBjcmVhdGVEaWN0KCk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5jcmVhdGUgfHwgZnVuY3Rpb24gY3JlYXRlKE8sIFByb3BlcnRpZXMpIHtcbiAgdmFyIHJlc3VsdDtcbiAgaWYgKE8gIT09IG51bGwpIHtcbiAgICBFbXB0eVtQUk9UT1RZUEVdID0gYW5PYmplY3QoTyk7XG4gICAgcmVzdWx0ID0gbmV3IEVtcHR5KCk7XG4gICAgRW1wdHlbUFJPVE9UWVBFXSA9IG51bGw7XG4gICAgLy8gYWRkIFwiX19wcm90b19fXCIgZm9yIE9iamVjdC5nZXRQcm90b3R5cGVPZiBwb2x5ZmlsbFxuICAgIHJlc3VsdFtJRV9QUk9UT10gPSBPO1xuICB9IGVsc2UgcmVzdWx0ID0gY3JlYXRlRGljdCgpO1xuICByZXR1cm4gUHJvcGVydGllcyA9PT0gdW5kZWZpbmVkID8gcmVzdWx0IDogZFBzKHJlc3VsdCwgUHJvcGVydGllcyk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtY3JlYXRlLmpzXG4vLyBtb2R1bGUgaWQgPSAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1jcmVhdGUuanNcbi8vIG1vZHVsZSBjaHVua3MgPSBtYWluIiwidmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgSUU4X0RPTV9ERUZJTkUgPSByZXF1aXJlKCcuL19pZTgtZG9tLWRlZmluZScpO1xudmFyIHRvUHJpbWl0aXZlID0gcmVxdWlyZSgnLi9fdG8tcHJpbWl0aXZlJyk7XG52YXIgZFAgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG5cbmV4cG9ydHMuZiA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBPYmplY3QuZGVmaW5lUHJvcGVydHkgOiBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKSB7XG4gIGFuT2JqZWN0KE8pO1xuICBQID0gdG9QcmltaXRpdmUoUCwgdHJ1ZSk7XG4gIGFuT2JqZWN0KEF0dHJpYnV0ZXMpO1xuICBpZiAoSUU4X0RPTV9ERUZJTkUpIHRyeSB7XG4gICAgcmV0dXJuIGRQKE8sIFAsIEF0dHJpYnV0ZXMpO1xuICB9IGNhdGNoIChlKSB7IC8qIGVtcHR5ICovIH1cbiAgaWYgKCdnZXQnIGluIEF0dHJpYnV0ZXMgfHwgJ3NldCcgaW4gQXR0cmlidXRlcykgdGhyb3cgVHlwZUVycm9yKCdBY2Nlc3NvcnMgbm90IHN1cHBvcnRlZCEnKTtcbiAgaWYgKCd2YWx1ZScgaW4gQXR0cmlidXRlcykgT1tQXSA9IEF0dHJpYnV0ZXMudmFsdWU7XG4gIHJldHVybiBPO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWRwLmpzXG4vLyBtb2R1bGUgaWQgPSAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1kcC5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IG1haW4iLCJ2YXIgZFAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIGdldEtleXMgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyA6IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXMoTywgUHJvcGVydGllcykge1xuICBhbk9iamVjdChPKTtcbiAgdmFyIGtleXMgPSBnZXRLZXlzKFByb3BlcnRpZXMpO1xuICB2YXIgbGVuZ3RoID0ga2V5cy5sZW5ndGg7XG4gIHZhciBpID0gMDtcbiAgdmFyIFA7XG4gIHdoaWxlIChsZW5ndGggPiBpKSBkUC5mKE8sIFAgPSBrZXlzW2krK10sIFByb3BlcnRpZXNbUF0pO1xuICByZXR1cm4gTztcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1kcHMuanNcbi8vIG1vZHVsZSBpZCA9IC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWRwcy5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IG1haW4iLCJ2YXIgcElFID0gcmVxdWlyZSgnLi9fb2JqZWN0LXBpZScpO1xudmFyIGNyZWF0ZURlc2MgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJyk7XG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpO1xudmFyIHRvUHJpbWl0aXZlID0gcmVxdWlyZSgnLi9fdG8tcHJpbWl0aXZlJyk7XG52YXIgaGFzID0gcmVxdWlyZSgnLi9faGFzJyk7XG52YXIgSUU4X0RPTV9ERUZJTkUgPSByZXF1aXJlKCcuL19pZTgtZG9tLWRlZmluZScpO1xudmFyIGdPUEQgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG5leHBvcnRzLmYgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gZ09QRCA6IGZ1bmN0aW9uIGdldE93blByb3BlcnR5RGVzY3JpcHRvcihPLCBQKSB7XG4gIE8gPSB0b0lPYmplY3QoTyk7XG4gIFAgPSB0b1ByaW1pdGl2ZShQLCB0cnVlKTtcbiAgaWYgKElFOF9ET01fREVGSU5FKSB0cnkge1xuICAgIHJldHVybiBnT1BEKE8sIFApO1xuICB9IGNhdGNoIChlKSB7IC8qIGVtcHR5ICovIH1cbiAgaWYgKGhhcyhPLCBQKSkgcmV0dXJuIGNyZWF0ZURlc2MoIXBJRS5mLmNhbGwoTywgUCksIE9bUF0pO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdvcGQuanNcbi8vIG1vZHVsZSBpZCA9IC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdvcGQuanNcbi8vIG1vZHVsZSBjaHVua3MgPSBtYWluIiwiLy8gZmFsbGJhY2sgZm9yIElFMTEgYnVnZ3kgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMgd2l0aCBpZnJhbWUgYW5kIHdpbmRvd1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcbnZhciBnT1BOID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcG4nKS5mO1xudmFyIHRvU3RyaW5nID0ge30udG9TdHJpbmc7XG5cbnZhciB3aW5kb3dOYW1lcyA9IHR5cGVvZiB3aW5kb3cgPT0gJ29iamVjdCcgJiYgd2luZG93ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzXG4gID8gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMod2luZG93KSA6IFtdO1xuXG52YXIgZ2V0V2luZG93TmFtZXMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gZ09QTihpdCk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gd2luZG93TmFtZXMuc2xpY2UoKTtcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMuZiA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5TmFtZXMoaXQpIHtcbiAgcmV0dXJuIHdpbmRvd05hbWVzICYmIHRvU3RyaW5nLmNhbGwoaXQpID09ICdbb2JqZWN0IFdpbmRvd10nID8gZ2V0V2luZG93TmFtZXMoaXQpIDogZ09QTih0b0lPYmplY3QoaXQpKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1nb3BuLWV4dC5qc1xuLy8gbW9kdWxlIGlkID0gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ29wbi1leHQuanNcbi8vIG1vZHVsZSBjaHVua3MgPSBtYWluIiwiLy8gMTkuMS4yLjcgLyAxNS4yLjMuNCBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhPKVxudmFyICRrZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMtaW50ZXJuYWwnKTtcbnZhciBoaWRkZW5LZXlzID0gcmVxdWlyZSgnLi9fZW51bS1idWcta2V5cycpLmNvbmNhdCgnbGVuZ3RoJywgJ3Byb3RvdHlwZScpO1xuXG5leHBvcnRzLmYgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyB8fCBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eU5hbWVzKE8pIHtcbiAgcmV0dXJuICRrZXlzKE8sIGhpZGRlbktleXMpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdvcG4uanNcbi8vIG1vZHVsZSBpZCA9IC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdvcG4uanNcbi8vIG1vZHVsZSBjaHVua3MgPSBtYWluIiwiZXhwb3J0cy5mID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdvcHMuanNcbi8vIG1vZHVsZSBpZCA9IC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdvcHMuanNcbi8vIG1vZHVsZSBjaHVua3MgPSBtYWluIiwiLy8gMTkuMS4yLjkgLyAxNS4yLjMuMiBPYmplY3QuZ2V0UHJvdG90eXBlT2YoTylcbnZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4vX3RvLW9iamVjdCcpO1xudmFyIElFX1BST1RPID0gcmVxdWlyZSgnLi9fc2hhcmVkLWtleScpKCdJRV9QUk9UTycpO1xudmFyIE9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gKE8pIHtcbiAgTyA9IHRvT2JqZWN0KE8pO1xuICBpZiAoaGFzKE8sIElFX1BST1RPKSkgcmV0dXJuIE9bSUVfUFJPVE9dO1xuICBpZiAodHlwZW9mIE8uY29uc3RydWN0b3IgPT0gJ2Z1bmN0aW9uJyAmJiBPIGluc3RhbmNlb2YgTy5jb25zdHJ1Y3Rvcikge1xuICAgIHJldHVybiBPLmNvbnN0cnVjdG9yLnByb3RvdHlwZTtcbiAgfSByZXR1cm4gTyBpbnN0YW5jZW9mIE9iamVjdCA/IE9iamVjdFByb3RvIDogbnVsbDtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1ncG8uanNcbi8vIG1vZHVsZSBpZCA9IC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdwby5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IG1haW4iLCJ2YXIgaGFzID0gcmVxdWlyZSgnLi9faGFzJyk7XG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpO1xudmFyIGFycmF5SW5kZXhPZiA9IHJlcXVpcmUoJy4vX2FycmF5LWluY2x1ZGVzJykoZmFsc2UpO1xudmFyIElFX1BST1RPID0gcmVxdWlyZSgnLi9fc2hhcmVkLWtleScpKCdJRV9QUk9UTycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvYmplY3QsIG5hbWVzKSB7XG4gIHZhciBPID0gdG9JT2JqZWN0KG9iamVjdCk7XG4gIHZhciBpID0gMDtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICB2YXIga2V5O1xuICBmb3IgKGtleSBpbiBPKSBpZiAoa2V5ICE9IElFX1BST1RPKSBoYXMoTywga2V5KSAmJiByZXN1bHQucHVzaChrZXkpO1xuICAvLyBEb24ndCBlbnVtIGJ1ZyAmIGhpZGRlbiBrZXlzXG4gIHdoaWxlIChuYW1lcy5sZW5ndGggPiBpKSBpZiAoaGFzKE8sIGtleSA9IG5hbWVzW2krK10pKSB7XG4gICAgfmFycmF5SW5kZXhPZihyZXN1bHQsIGtleSkgfHwgcmVzdWx0LnB1c2goa2V5KTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWtleXMtaW50ZXJuYWwuanNcbi8vIG1vZHVsZSBpZCA9IC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWtleXMtaW50ZXJuYWwuanNcbi8vIG1vZHVsZSBjaHVua3MgPSBtYWluIiwiLy8gMTkuMS4yLjE0IC8gMTUuMi4zLjE0IE9iamVjdC5rZXlzKE8pXG52YXIgJGtleXMgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cy1pbnRlcm5hbCcpO1xudmFyIGVudW1CdWdLZXlzID0gcmVxdWlyZSgnLi9fZW51bS1idWcta2V5cycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5rZXlzIHx8IGZ1bmN0aW9uIGtleXMoTykge1xuICByZXR1cm4gJGtleXMoTywgZW51bUJ1Z0tleXMpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWtleXMuanNcbi8vIG1vZHVsZSBpZCA9IC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWtleXMuanNcbi8vIG1vZHVsZSBjaHVua3MgPSBtYWluIiwiZXhwb3J0cy5mID0ge30ucHJvcGVydHlJc0VudW1lcmFibGU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1waWUuanNcbi8vIG1vZHVsZSBpZCA9IC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LXBpZS5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IG1haW4iLCIvLyBtb3N0IE9iamVjdCBtZXRob2RzIGJ5IEVTNiBzaG91bGQgYWNjZXB0IHByaW1pdGl2ZXNcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG52YXIgY29yZSA9IHJlcXVpcmUoJy4vX2NvcmUnKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4vX2ZhaWxzJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChLRVksIGV4ZWMpIHtcbiAgdmFyIGZuID0gKGNvcmUuT2JqZWN0IHx8IHt9KVtLRVldIHx8IE9iamVjdFtLRVldO1xuICB2YXIgZXhwID0ge307XG4gIGV4cFtLRVldID0gZXhlYyhmbik7XG4gICRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogZmFpbHMoZnVuY3Rpb24gKCkgeyBmbigxKTsgfSksICdPYmplY3QnLCBleHApO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LXNhcC5qc1xuLy8gbW9kdWxlIGlkID0gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3Qtc2FwLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gbWFpbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGV4ZWMpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4geyBlOiBmYWxzZSwgdjogZXhlYygpIH07XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4geyBlOiB0cnVlLCB2OiBlIH07XG4gIH1cbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3BlcmZvcm0uanNcbi8vIG1vZHVsZSBpZCA9IC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fcGVyZm9ybS5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IG1haW4iLCJ2YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xudmFyIG5ld1Byb21pc2VDYXBhYmlsaXR5ID0gcmVxdWlyZSgnLi9fbmV3LXByb21pc2UtY2FwYWJpbGl0eScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChDLCB4KSB7XG4gIGFuT2JqZWN0KEMpO1xuICBpZiAoaXNPYmplY3QoeCkgJiYgeC5jb25zdHJ1Y3RvciA9PT0gQykgcmV0dXJuIHg7XG4gIHZhciBwcm9taXNlQ2FwYWJpbGl0eSA9IG5ld1Byb21pc2VDYXBhYmlsaXR5LmYoQyk7XG4gIHZhciByZXNvbHZlID0gcHJvbWlzZUNhcGFiaWxpdHkucmVzb2x2ZTtcbiAgcmVzb2x2ZSh4KTtcbiAgcmV0dXJuIHByb21pc2VDYXBhYmlsaXR5LnByb21pc2U7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19wcm9taXNlLXJlc29sdmUuanNcbi8vIG1vZHVsZSBpZCA9IC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fcHJvbWlzZS1yZXNvbHZlLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gbWFpbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGJpdG1hcCwgdmFsdWUpIHtcbiAgcmV0dXJuIHtcbiAgICBlbnVtZXJhYmxlOiAhKGJpdG1hcCAmIDEpLFxuICAgIGNvbmZpZ3VyYWJsZTogIShiaXRtYXAgJiAyKSxcbiAgICB3cml0YWJsZTogIShiaXRtYXAgJiA0KSxcbiAgICB2YWx1ZTogdmFsdWVcbiAgfTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3Byb3BlcnR5LWRlc2MuanNcbi8vIG1vZHVsZSBpZCA9IC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fcHJvcGVydHktZGVzYy5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IG1haW4iLCJ2YXIgaGlkZSA9IHJlcXVpcmUoJy4vX2hpZGUnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHRhcmdldCwgc3JjLCBzYWZlKSB7XG4gIGZvciAodmFyIGtleSBpbiBzcmMpIHtcbiAgICBpZiAoc2FmZSAmJiB0YXJnZXRba2V5XSkgdGFyZ2V0W2tleV0gPSBzcmNba2V5XTtcbiAgICBlbHNlIGhpZGUodGFyZ2V0LCBrZXksIHNyY1trZXldKTtcbiAgfSByZXR1cm4gdGFyZ2V0O1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fcmVkZWZpbmUtYWxsLmpzXG4vLyBtb2R1bGUgaWQgPSAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3JlZGVmaW5lLWFsbC5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IG1haW4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2hpZGUnKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fcmVkZWZpbmUuanNcbi8vIG1vZHVsZSBpZCA9IC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fcmVkZWZpbmUuanNcbi8vIG1vZHVsZSBjaHVua3MgPSBtYWluIiwiLy8gV29ya3Mgd2l0aCBfX3Byb3RvX18gb25seS4gT2xkIHY4IGNhbid0IHdvcmsgd2l0aCBudWxsIHByb3RvIG9iamVjdHMuXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1wcm90byAqL1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciBjaGVjayA9IGZ1bmN0aW9uIChPLCBwcm90bykge1xuICBhbk9iamVjdChPKTtcbiAgaWYgKCFpc09iamVjdChwcm90bykgJiYgcHJvdG8gIT09IG51bGwpIHRocm93IFR5cGVFcnJvcihwcm90byArIFwiOiBjYW4ndCBzZXQgYXMgcHJvdG90eXBlIVwiKTtcbn07XG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgc2V0OiBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgKCdfX3Byb3RvX18nIGluIHt9ID8gLy8gZXNsaW50LWRpc2FibGUtbGluZVxuICAgIGZ1bmN0aW9uICh0ZXN0LCBidWdneSwgc2V0KSB7XG4gICAgICB0cnkge1xuICAgICAgICBzZXQgPSByZXF1aXJlKCcuL19jdHgnKShGdW5jdGlvbi5jYWxsLCByZXF1aXJlKCcuL19vYmplY3QtZ29wZCcpLmYoT2JqZWN0LnByb3RvdHlwZSwgJ19fcHJvdG9fXycpLnNldCwgMik7XG4gICAgICAgIHNldCh0ZXN0LCBbXSk7XG4gICAgICAgIGJ1Z2d5ID0gISh0ZXN0IGluc3RhbmNlb2YgQXJyYXkpO1xuICAgICAgfSBjYXRjaCAoZSkgeyBidWdneSA9IHRydWU7IH1cbiAgICAgIHJldHVybiBmdW5jdGlvbiBzZXRQcm90b3R5cGVPZihPLCBwcm90bykge1xuICAgICAgICBjaGVjayhPLCBwcm90byk7XG4gICAgICAgIGlmIChidWdneSkgTy5fX3Byb3RvX18gPSBwcm90bztcbiAgICAgICAgZWxzZSBzZXQoTywgcHJvdG8pO1xuICAgICAgICByZXR1cm4gTztcbiAgICAgIH07XG4gICAgfSh7fSwgZmFsc2UpIDogdW5kZWZpbmVkKSxcbiAgY2hlY2s6IGNoZWNrXG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zZXQtcHJvdG8uanNcbi8vIG1vZHVsZSBpZCA9IC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2V0LXByb3RvLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gbWFpbiIsIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBjb3JlID0gcmVxdWlyZSgnLi9fY29yZScpO1xudmFyIGRQID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJyk7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpO1xudmFyIFNQRUNJRVMgPSByZXF1aXJlKCcuL193a3MnKSgnc3BlY2llcycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChLRVkpIHtcbiAgdmFyIEMgPSB0eXBlb2YgY29yZVtLRVldID09ICdmdW5jdGlvbicgPyBjb3JlW0tFWV0gOiBnbG9iYWxbS0VZXTtcbiAgaWYgKERFU0NSSVBUT1JTICYmIEMgJiYgIUNbU1BFQ0lFU10pIGRQLmYoQywgU1BFQ0lFUywge1xuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH1cbiAgfSk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zZXQtc3BlY2llcy5qc1xuLy8gbW9kdWxlIGlkID0gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zZXQtc3BlY2llcy5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IG1haW4iLCJ2YXIgZGVmID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJykuZjtcbnZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciBUQUcgPSByZXF1aXJlKCcuL193a3MnKSgndG9TdHJpbmdUYWcnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQsIHRhZywgc3RhdCkge1xuICBpZiAoaXQgJiYgIWhhcyhpdCA9IHN0YXQgPyBpdCA6IGl0LnByb3RvdHlwZSwgVEFHKSkgZGVmKGl0LCBUQUcsIHsgY29uZmlndXJhYmxlOiB0cnVlLCB2YWx1ZTogdGFnIH0pO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2V0LXRvLXN0cmluZy10YWcuanNcbi8vIG1vZHVsZSBpZCA9IC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2V0LXRvLXN0cmluZy10YWcuanNcbi8vIG1vZHVsZSBjaHVua3MgPSBtYWluIiwidmFyIHNoYXJlZCA9IHJlcXVpcmUoJy4vX3NoYXJlZCcpKCdrZXlzJyk7XG52YXIgdWlkID0gcmVxdWlyZSgnLi9fdWlkJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgcmV0dXJuIHNoYXJlZFtrZXldIHx8IChzaGFyZWRba2V5XSA9IHVpZChrZXkpKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NoYXJlZC1rZXkuanNcbi8vIG1vZHVsZSBpZCA9IC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2hhcmVkLWtleS5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IG1haW4iLCJ2YXIgY29yZSA9IHJlcXVpcmUoJy4vX2NvcmUnKTtcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBTSEFSRUQgPSAnX19jb3JlLWpzX3NoYXJlZF9fJztcbnZhciBzdG9yZSA9IGdsb2JhbFtTSEFSRURdIHx8IChnbG9iYWxbU0hBUkVEXSA9IHt9KTtcblxuKG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgcmV0dXJuIHN0b3JlW2tleV0gfHwgKHN0b3JlW2tleV0gPSB2YWx1ZSAhPT0gdW5kZWZpbmVkID8gdmFsdWUgOiB7fSk7XG59KSgndmVyc2lvbnMnLCBbXSkucHVzaCh7XG4gIHZlcnNpb246IGNvcmUudmVyc2lvbixcbiAgbW9kZTogcmVxdWlyZSgnLi9fbGlicmFyeScpID8gJ3B1cmUnIDogJ2dsb2JhbCcsXG4gIGNvcHlyaWdodDogJ8KpIDIwMTggRGVuaXMgUHVzaGthcmV2ICh6bG9pcm9jay5ydSknXG59KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2hhcmVkLmpzXG4vLyBtb2R1bGUgaWQgPSAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NoYXJlZC5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IG1haW4iLCIvLyA3LjMuMjAgU3BlY2llc0NvbnN0cnVjdG9yKE8sIGRlZmF1bHRDb25zdHJ1Y3RvcilcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIGFGdW5jdGlvbiA9IHJlcXVpcmUoJy4vX2EtZnVuY3Rpb24nKTtcbnZhciBTUEVDSUVTID0gcmVxdWlyZSgnLi9fd2tzJykoJ3NwZWNpZXMnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKE8sIEQpIHtcbiAgdmFyIEMgPSBhbk9iamVjdChPKS5jb25zdHJ1Y3RvcjtcbiAgdmFyIFM7XG4gIHJldHVybiBDID09PSB1bmRlZmluZWQgfHwgKFMgPSBhbk9iamVjdChDKVtTUEVDSUVTXSkgPT0gdW5kZWZpbmVkID8gRCA6IGFGdW5jdGlvbihTKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NwZWNpZXMtY29uc3RydWN0b3IuanNcbi8vIG1vZHVsZSBpZCA9IC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc3BlY2llcy1jb25zdHJ1Y3Rvci5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IG1haW4iLCJ2YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi9fdG8taW50ZWdlcicpO1xudmFyIGRlZmluZWQgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG4vLyB0cnVlICAtPiBTdHJpbmcjYXRcbi8vIGZhbHNlIC0+IFN0cmluZyNjb2RlUG9pbnRBdFxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoVE9fU1RSSU5HKSB7XG4gIHJldHVybiBmdW5jdGlvbiAodGhhdCwgcG9zKSB7XG4gICAgdmFyIHMgPSBTdHJpbmcoZGVmaW5lZCh0aGF0KSk7XG4gICAgdmFyIGkgPSB0b0ludGVnZXIocG9zKTtcbiAgICB2YXIgbCA9IHMubGVuZ3RoO1xuICAgIHZhciBhLCBiO1xuICAgIGlmIChpIDwgMCB8fCBpID49IGwpIHJldHVybiBUT19TVFJJTkcgPyAnJyA6IHVuZGVmaW5lZDtcbiAgICBhID0gcy5jaGFyQ29kZUF0KGkpO1xuICAgIHJldHVybiBhIDwgMHhkODAwIHx8IGEgPiAweGRiZmYgfHwgaSArIDEgPT09IGwgfHwgKGIgPSBzLmNoYXJDb2RlQXQoaSArIDEpKSA8IDB4ZGMwMCB8fCBiID4gMHhkZmZmXG4gICAgICA/IFRPX1NUUklORyA/IHMuY2hhckF0KGkpIDogYVxuICAgICAgOiBUT19TVFJJTkcgPyBzLnNsaWNlKGksIGkgKyAyKSA6IChhIC0gMHhkODAwIDw8IDEwKSArIChiIC0gMHhkYzAwKSArIDB4MTAwMDA7XG4gIH07XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zdHJpbmctYXQuanNcbi8vIG1vZHVsZSBpZCA9IC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc3RyaW5nLWF0LmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gbWFpbiIsInZhciBjdHggPSByZXF1aXJlKCcuL19jdHgnKTtcbnZhciBpbnZva2UgPSByZXF1aXJlKCcuL19pbnZva2UnKTtcbnZhciBodG1sID0gcmVxdWlyZSgnLi9faHRtbCcpO1xudmFyIGNlbCA9IHJlcXVpcmUoJy4vX2RvbS1jcmVhdGUnKTtcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBwcm9jZXNzID0gZ2xvYmFsLnByb2Nlc3M7XG52YXIgc2V0VGFzayA9IGdsb2JhbC5zZXRJbW1lZGlhdGU7XG52YXIgY2xlYXJUYXNrID0gZ2xvYmFsLmNsZWFySW1tZWRpYXRlO1xudmFyIE1lc3NhZ2VDaGFubmVsID0gZ2xvYmFsLk1lc3NhZ2VDaGFubmVsO1xudmFyIERpc3BhdGNoID0gZ2xvYmFsLkRpc3BhdGNoO1xudmFyIGNvdW50ZXIgPSAwO1xudmFyIHF1ZXVlID0ge307XG52YXIgT05SRUFEWVNUQVRFQ0hBTkdFID0gJ29ucmVhZHlzdGF0ZWNoYW5nZSc7XG52YXIgZGVmZXIsIGNoYW5uZWwsIHBvcnQ7XG52YXIgcnVuID0gZnVuY3Rpb24gKCkge1xuICB2YXIgaWQgPSArdGhpcztcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXByb3RvdHlwZS1idWlsdGluc1xuICBpZiAocXVldWUuaGFzT3duUHJvcGVydHkoaWQpKSB7XG4gICAgdmFyIGZuID0gcXVldWVbaWRdO1xuICAgIGRlbGV0ZSBxdWV1ZVtpZF07XG4gICAgZm4oKTtcbiAgfVxufTtcbnZhciBsaXN0ZW5lciA9IGZ1bmN0aW9uIChldmVudCkge1xuICBydW4uY2FsbChldmVudC5kYXRhKTtcbn07XG4vLyBOb2RlLmpzIDAuOSsgJiBJRTEwKyBoYXMgc2V0SW1tZWRpYXRlLCBvdGhlcndpc2U6XG5pZiAoIXNldFRhc2sgfHwgIWNsZWFyVGFzaykge1xuICBzZXRUYXNrID0gZnVuY3Rpb24gc2V0SW1tZWRpYXRlKGZuKSB7XG4gICAgdmFyIGFyZ3MgPSBbXTtcbiAgICB2YXIgaSA9IDE7XG4gICAgd2hpbGUgKGFyZ3VtZW50cy5sZW5ndGggPiBpKSBhcmdzLnB1c2goYXJndW1lbnRzW2krK10pO1xuICAgIHF1ZXVlWysrY291bnRlcl0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbmV3LWZ1bmNcbiAgICAgIGludm9rZSh0eXBlb2YgZm4gPT0gJ2Z1bmN0aW9uJyA/IGZuIDogRnVuY3Rpb24oZm4pLCBhcmdzKTtcbiAgICB9O1xuICAgIGRlZmVyKGNvdW50ZXIpO1xuICAgIHJldHVybiBjb3VudGVyO1xuICB9O1xuICBjbGVhclRhc2sgPSBmdW5jdGlvbiBjbGVhckltbWVkaWF0ZShpZCkge1xuICAgIGRlbGV0ZSBxdWV1ZVtpZF07XG4gIH07XG4gIC8vIE5vZGUuanMgMC44LVxuICBpZiAocmVxdWlyZSgnLi9fY29mJykocHJvY2VzcykgPT0gJ3Byb2Nlc3MnKSB7XG4gICAgZGVmZXIgPSBmdW5jdGlvbiAoaWQpIHtcbiAgICAgIHByb2Nlc3MubmV4dFRpY2soY3R4KHJ1biwgaWQsIDEpKTtcbiAgICB9O1xuICAvLyBTcGhlcmUgKEpTIGdhbWUgZW5naW5lKSBEaXNwYXRjaCBBUElcbiAgfSBlbHNlIGlmIChEaXNwYXRjaCAmJiBEaXNwYXRjaC5ub3cpIHtcbiAgICBkZWZlciA9IGZ1bmN0aW9uIChpZCkge1xuICAgICAgRGlzcGF0Y2gubm93KGN0eChydW4sIGlkLCAxKSk7XG4gICAgfTtcbiAgLy8gQnJvd3NlcnMgd2l0aCBNZXNzYWdlQ2hhbm5lbCwgaW5jbHVkZXMgV2ViV29ya2Vyc1xuICB9IGVsc2UgaWYgKE1lc3NhZ2VDaGFubmVsKSB7XG4gICAgY2hhbm5lbCA9IG5ldyBNZXNzYWdlQ2hhbm5lbCgpO1xuICAgIHBvcnQgPSBjaGFubmVsLnBvcnQyO1xuICAgIGNoYW5uZWwucG9ydDEub25tZXNzYWdlID0gbGlzdGVuZXI7XG4gICAgZGVmZXIgPSBjdHgocG9ydC5wb3N0TWVzc2FnZSwgcG9ydCwgMSk7XG4gIC8vIEJyb3dzZXJzIHdpdGggcG9zdE1lc3NhZ2UsIHNraXAgV2ViV29ya2Vyc1xuICAvLyBJRTggaGFzIHBvc3RNZXNzYWdlLCBidXQgaXQncyBzeW5jICYgdHlwZW9mIGl0cyBwb3N0TWVzc2FnZSBpcyAnb2JqZWN0J1xuICB9IGVsc2UgaWYgKGdsb2JhbC5hZGRFdmVudExpc3RlbmVyICYmIHR5cGVvZiBwb3N0TWVzc2FnZSA9PSAnZnVuY3Rpb24nICYmICFnbG9iYWwuaW1wb3J0U2NyaXB0cykge1xuICAgIGRlZmVyID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICBnbG9iYWwucG9zdE1lc3NhZ2UoaWQgKyAnJywgJyonKTtcbiAgICB9O1xuICAgIGdsb2JhbC5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgbGlzdGVuZXIsIGZhbHNlKTtcbiAgLy8gSUU4LVxuICB9IGVsc2UgaWYgKE9OUkVBRFlTVEFURUNIQU5HRSBpbiBjZWwoJ3NjcmlwdCcpKSB7XG4gICAgZGVmZXIgPSBmdW5jdGlvbiAoaWQpIHtcbiAgICAgIGh0bWwuYXBwZW5kQ2hpbGQoY2VsKCdzY3JpcHQnKSlbT05SRUFEWVNUQVRFQ0hBTkdFXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaHRtbC5yZW1vdmVDaGlsZCh0aGlzKTtcbiAgICAgICAgcnVuLmNhbGwoaWQpO1xuICAgICAgfTtcbiAgICB9O1xuICAvLyBSZXN0IG9sZCBicm93c2Vyc1xuICB9IGVsc2Uge1xuICAgIGRlZmVyID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICBzZXRUaW1lb3V0KGN0eChydW4sIGlkLCAxKSwgMCk7XG4gICAgfTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHNldDogc2V0VGFzayxcbiAgY2xlYXI6IGNsZWFyVGFza1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdGFzay5qc1xuLy8gbW9kdWxlIGlkID0gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190YXNrLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gbWFpbiIsInZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuL190by1pbnRlZ2VyJyk7XG52YXIgbWF4ID0gTWF0aC5tYXg7XG52YXIgbWluID0gTWF0aC5taW47XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpbmRleCwgbGVuZ3RoKSB7XG4gIGluZGV4ID0gdG9JbnRlZ2VyKGluZGV4KTtcbiAgcmV0dXJuIGluZGV4IDwgMCA/IG1heChpbmRleCArIGxlbmd0aCwgMCkgOiBtaW4oaW5kZXgsIGxlbmd0aCk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1hYnNvbHV0ZS1pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1hYnNvbHV0ZS1pbmRleC5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IG1haW4iLCIvLyA3LjEuNCBUb0ludGVnZXJcbnZhciBjZWlsID0gTWF0aC5jZWlsO1xudmFyIGZsb29yID0gTWF0aC5mbG9vcjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBpc05hTihpdCA9ICtpdCkgPyAwIDogKGl0ID4gMCA/IGZsb29yIDogY2VpbCkoaXQpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8taW50ZWdlci5qc1xuLy8gbW9kdWxlIGlkID0gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1pbnRlZ2VyLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gbWFpbiIsIi8vIHRvIGluZGV4ZWQgb2JqZWN0LCB0b09iamVjdCB3aXRoIGZhbGxiYWNrIGZvciBub24tYXJyYXktbGlrZSBFUzMgc3RyaW5nc1xudmFyIElPYmplY3QgPSByZXF1aXJlKCcuL19pb2JqZWN0Jyk7XG52YXIgZGVmaW5lZCA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBJT2JqZWN0KGRlZmluZWQoaXQpKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWlvYmplY3QuanNcbi8vIG1vZHVsZSBpZCA9IC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8taW9iamVjdC5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IG1haW4iLCIvLyA3LjEuMTUgVG9MZW5ndGhcbnZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuL190by1pbnRlZ2VyJyk7XG52YXIgbWluID0gTWF0aC5taW47XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXQgPiAwID8gbWluKHRvSW50ZWdlcihpdCksIDB4MWZmZmZmZmZmZmZmZmYpIDogMDsgLy8gcG93KDIsIDUzKSAtIDEgPT0gOTAwNzE5OTI1NDc0MDk5MVxufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tbGVuZ3RoLmpzXG4vLyBtb2R1bGUgaWQgPSAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWxlbmd0aC5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IG1haW4iLCIvLyA3LjEuMTMgVG9PYmplY3QoYXJndW1lbnQpXG52YXIgZGVmaW5lZCA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBPYmplY3QoZGVmaW5lZChpdCkpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tb2JqZWN0LmpzXG4vLyBtb2R1bGUgaWQgPSAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLW9iamVjdC5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IG1haW4iLCIvLyA3LjEuMSBUb1ByaW1pdGl2ZShpbnB1dCBbLCBQcmVmZXJyZWRUeXBlXSlcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xuLy8gaW5zdGVhZCBvZiB0aGUgRVM2IHNwZWMgdmVyc2lvbiwgd2UgZGlkbid0IGltcGxlbWVudCBAQHRvUHJpbWl0aXZlIGNhc2Vcbi8vIGFuZCB0aGUgc2Vjb25kIGFyZ3VtZW50IC0gZmxhZyAtIHByZWZlcnJlZCB0eXBlIGlzIGEgc3RyaW5nXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCwgUykge1xuICBpZiAoIWlzT2JqZWN0KGl0KSkgcmV0dXJuIGl0O1xuICB2YXIgZm4sIHZhbDtcbiAgaWYgKFMgJiYgdHlwZW9mIChmbiA9IGl0LnRvU3RyaW5nKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpIHJldHVybiB2YWw7XG4gIGlmICh0eXBlb2YgKGZuID0gaXQudmFsdWVPZikgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKSByZXR1cm4gdmFsO1xuICBpZiAoIVMgJiYgdHlwZW9mIChmbiA9IGl0LnRvU3RyaW5nKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpIHJldHVybiB2YWw7XG4gIHRocm93IFR5cGVFcnJvcihcIkNhbid0IGNvbnZlcnQgb2JqZWN0IHRvIHByaW1pdGl2ZSB2YWx1ZVwiKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLXByaW1pdGl2ZS5qc1xuLy8gbW9kdWxlIGlkID0gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1wcmltaXRpdmUuanNcbi8vIG1vZHVsZSBjaHVua3MgPSBtYWluIiwidmFyIGlkID0gMDtcbnZhciBweCA9IE1hdGgucmFuZG9tKCk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgcmV0dXJuICdTeW1ib2woJy5jb25jYXQoa2V5ID09PSB1bmRlZmluZWQgPyAnJyA6IGtleSwgJylfJywgKCsraWQgKyBweCkudG9TdHJpbmcoMzYpKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3VpZC5qc1xuLy8gbW9kdWxlIGlkID0gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL191aWQuanNcbi8vIG1vZHVsZSBjaHVua3MgPSBtYWluIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIG5hdmlnYXRvciA9IGdsb2JhbC5uYXZpZ2F0b3I7XG5cbm1vZHVsZS5leHBvcnRzID0gbmF2aWdhdG9yICYmIG5hdmlnYXRvci51c2VyQWdlbnQgfHwgJyc7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3VzZXItYWdlbnQuanNcbi8vIG1vZHVsZSBpZCA9IC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdXNlci1hZ2VudC5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IG1haW4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgY29yZSA9IHJlcXVpcmUoJy4vX2NvcmUnKTtcbnZhciBMSUJSQVJZID0gcmVxdWlyZSgnLi9fbGlicmFyeScpO1xudmFyIHdrc0V4dCA9IHJlcXVpcmUoJy4vX3drcy1leHQnKTtcbnZhciBkZWZpbmVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmY7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gIHZhciAkU3ltYm9sID0gY29yZS5TeW1ib2wgfHwgKGNvcmUuU3ltYm9sID0gTElCUkFSWSA/IHt9IDogZ2xvYmFsLlN5bWJvbCB8fCB7fSk7XG4gIGlmIChuYW1lLmNoYXJBdCgwKSAhPSAnXycgJiYgIShuYW1lIGluICRTeW1ib2wpKSBkZWZpbmVQcm9wZXJ0eSgkU3ltYm9sLCBuYW1lLCB7IHZhbHVlOiB3a3NFeHQuZihuYW1lKSB9KTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3drcy1kZWZpbmUuanNcbi8vIG1vZHVsZSBpZCA9IC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fd2tzLWRlZmluZS5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IG1haW4iLCJleHBvcnRzLmYgPSByZXF1aXJlKCcuL193a3MnKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fd2tzLWV4dC5qc1xuLy8gbW9kdWxlIGlkID0gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL193a3MtZXh0LmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gbWFpbiIsInZhciBzdG9yZSA9IHJlcXVpcmUoJy4vX3NoYXJlZCcpKCd3a3MnKTtcbnZhciB1aWQgPSByZXF1aXJlKCcuL191aWQnKTtcbnZhciBTeW1ib2wgPSByZXF1aXJlKCcuL19nbG9iYWwnKS5TeW1ib2w7XG52YXIgVVNFX1NZTUJPTCA9IHR5cGVvZiBTeW1ib2wgPT0gJ2Z1bmN0aW9uJztcblxudmFyICRleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobmFtZSkge1xuICByZXR1cm4gc3RvcmVbbmFtZV0gfHwgKHN0b3JlW25hbWVdID1cbiAgICBVU0VfU1lNQk9MICYmIFN5bWJvbFtuYW1lXSB8fCAoVVNFX1NZTUJPTCA/IFN5bWJvbCA6IHVpZCkoJ1N5bWJvbC4nICsgbmFtZSkpO1xufTtcblxuJGV4cG9ydHMuc3RvcmUgPSBzdG9yZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fd2tzLmpzXG4vLyBtb2R1bGUgaWQgPSAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3drcy5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IG1haW4iLCJ2YXIgY2xhc3NvZiA9IHJlcXVpcmUoJy4vX2NsYXNzb2YnKTtcbnZhciBJVEVSQVRPUiA9IHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpO1xudmFyIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19jb3JlJykuZ2V0SXRlcmF0b3JNZXRob2QgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKGl0ICE9IHVuZGVmaW5lZCkgcmV0dXJuIGl0W0lURVJBVE9SXVxuICAgIHx8IGl0WydAQGl0ZXJhdG9yJ11cbiAgICB8fCBJdGVyYXRvcnNbY2xhc3NvZihpdCldO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9jb3JlLmdldC1pdGVyYXRvci1tZXRob2QuanNcbi8vIG1vZHVsZSBpZCA9IC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9jb3JlLmdldC1pdGVyYXRvci1tZXRob2QuanNcbi8vIG1vZHVsZSBjaHVua3MgPSBtYWluIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGFkZFRvVW5zY29wYWJsZXMgPSByZXF1aXJlKCcuL19hZGQtdG8tdW5zY29wYWJsZXMnKTtcbnZhciBzdGVwID0gcmVxdWlyZSgnLi9faXRlci1zdGVwJyk7XG52YXIgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJyk7XG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpO1xuXG4vLyAyMi4xLjMuNCBBcnJheS5wcm90b3R5cGUuZW50cmllcygpXG4vLyAyMi4xLjMuMTMgQXJyYXkucHJvdG90eXBlLmtleXMoKVxuLy8gMjIuMS4zLjI5IEFycmF5LnByb3RvdHlwZS52YWx1ZXMoKVxuLy8gMjIuMS4zLjMwIEFycmF5LnByb3RvdHlwZVtAQGl0ZXJhdG9yXSgpXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2l0ZXItZGVmaW5lJykoQXJyYXksICdBcnJheScsIGZ1bmN0aW9uIChpdGVyYXRlZCwga2luZCkge1xuICB0aGlzLl90ID0gdG9JT2JqZWN0KGl0ZXJhdGVkKTsgLy8gdGFyZ2V0XG4gIHRoaXMuX2kgPSAwOyAgICAgICAgICAgICAgICAgICAvLyBuZXh0IGluZGV4XG4gIHRoaXMuX2sgPSBraW5kOyAgICAgICAgICAgICAgICAvLyBraW5kXG4vLyAyMi4xLjUuMi4xICVBcnJheUl0ZXJhdG9yUHJvdG90eXBlJS5uZXh0KClcbn0sIGZ1bmN0aW9uICgpIHtcbiAgdmFyIE8gPSB0aGlzLl90O1xuICB2YXIga2luZCA9IHRoaXMuX2s7XG4gIHZhciBpbmRleCA9IHRoaXMuX2krKztcbiAgaWYgKCFPIHx8IGluZGV4ID49IE8ubGVuZ3RoKSB7XG4gICAgdGhpcy5fdCA9IHVuZGVmaW5lZDtcbiAgICByZXR1cm4gc3RlcCgxKTtcbiAgfVxuICBpZiAoa2luZCA9PSAna2V5cycpIHJldHVybiBzdGVwKDAsIGluZGV4KTtcbiAgaWYgKGtpbmQgPT0gJ3ZhbHVlcycpIHJldHVybiBzdGVwKDAsIE9baW5kZXhdKTtcbiAgcmV0dXJuIHN0ZXAoMCwgW2luZGV4LCBPW2luZGV4XV0pO1xufSwgJ3ZhbHVlcycpO1xuXG4vLyBhcmd1bWVudHNMaXN0W0BAaXRlcmF0b3JdIGlzICVBcnJheVByb3RvX3ZhbHVlcyUgKDkuNC40LjYsIDkuNC40LjcpXG5JdGVyYXRvcnMuQXJndW1lbnRzID0gSXRlcmF0b3JzLkFycmF5O1xuXG5hZGRUb1Vuc2NvcGFibGVzKCdrZXlzJyk7XG5hZGRUb1Vuc2NvcGFibGVzKCd2YWx1ZXMnKTtcbmFkZFRvVW5zY29wYWJsZXMoJ2VudHJpZXMnKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYuYXJyYXkuaXRlcmF0b3IuanNcbi8vIG1vZHVsZSBpZCA9IC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYuYXJyYXkuaXRlcmF0b3IuanNcbi8vIG1vZHVsZSBjaHVua3MgPSBtYWluIiwiLy8gMTkuMS4zLjEgT2JqZWN0LmFzc2lnbih0YXJnZXQsIHNvdXJjZSlcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG5cbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GLCAnT2JqZWN0JywgeyBhc3NpZ246IHJlcXVpcmUoJy4vX29iamVjdC1hc3NpZ24nKSB9KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmFzc2lnbi5qc1xuLy8gbW9kdWxlIGlkID0gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QuYXNzaWduLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gbWFpbiIsInZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG4vLyAxOS4xLjIuMiAvIDE1LjIuMy41IE9iamVjdC5jcmVhdGUoTyBbLCBQcm9wZXJ0aWVzXSlcbiRleHBvcnQoJGV4cG9ydC5TLCAnT2JqZWN0JywgeyBjcmVhdGU6IHJlcXVpcmUoJy4vX29iamVjdC1jcmVhdGUnKSB9KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmNyZWF0ZS5qc1xuLy8gbW9kdWxlIGlkID0gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QuY3JlYXRlLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gbWFpbiIsInZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG4vLyAxOS4xLjIuNCAvIDE1LjIuMy42IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKVxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSwgJ09iamVjdCcsIHsgZGVmaW5lUHJvcGVydHk6IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmYgfSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5kZWZpbmUtcHJvcGVydHkuanNcbi8vIG1vZHVsZSBpZCA9IC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmRlZmluZS1wcm9wZXJ0eS5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IG1haW4iLCIvLyAxOS4xLjIuOSBPYmplY3QuZ2V0UHJvdG90eXBlT2YoTylcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4vX3RvLW9iamVjdCcpO1xudmFyICRnZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoJy4vX29iamVjdC1ncG8nKTtcblxucmVxdWlyZSgnLi9fb2JqZWN0LXNhcCcpKCdnZXRQcm90b3R5cGVPZicsIGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIGdldFByb3RvdHlwZU9mKGl0KSB7XG4gICAgcmV0dXJuICRnZXRQcm90b3R5cGVPZih0b09iamVjdChpdCkpO1xuICB9O1xufSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5nZXQtcHJvdG90eXBlLW9mLmpzXG4vLyBtb2R1bGUgaWQgPSAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5nZXQtcHJvdG90eXBlLW9mLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gbWFpbiIsIi8vIDE5LjEuMy4xOSBPYmplY3Quc2V0UHJvdG90eXBlT2YoTywgcHJvdG8pXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xuJGV4cG9ydCgkZXhwb3J0LlMsICdPYmplY3QnLCB7IHNldFByb3RvdHlwZU9mOiByZXF1aXJlKCcuL19zZXQtcHJvdG8nKS5zZXQgfSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5zZXQtcHJvdG90eXBlLW9mLmpzXG4vLyBtb2R1bGUgaWQgPSAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5zZXQtcHJvdG90eXBlLW9mLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gbWFpbiIsIid1c2Ugc3RyaWN0JztcbnZhciBMSUJSQVJZID0gcmVxdWlyZSgnLi9fbGlicmFyeScpO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIGN0eCA9IHJlcXVpcmUoJy4vX2N0eCcpO1xudmFyIGNsYXNzb2YgPSByZXF1aXJlKCcuL19jbGFzc29mJyk7XG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG52YXIgYUZ1bmN0aW9uID0gcmVxdWlyZSgnLi9fYS1mdW5jdGlvbicpO1xudmFyIGFuSW5zdGFuY2UgPSByZXF1aXJlKCcuL19hbi1pbnN0YW5jZScpO1xudmFyIGZvck9mID0gcmVxdWlyZSgnLi9fZm9yLW9mJyk7XG52YXIgc3BlY2llc0NvbnN0cnVjdG9yID0gcmVxdWlyZSgnLi9fc3BlY2llcy1jb25zdHJ1Y3RvcicpO1xudmFyIHRhc2sgPSByZXF1aXJlKCcuL190YXNrJykuc2V0O1xudmFyIG1pY3JvdGFzayA9IHJlcXVpcmUoJy4vX21pY3JvdGFzaycpKCk7XG52YXIgbmV3UHJvbWlzZUNhcGFiaWxpdHlNb2R1bGUgPSByZXF1aXJlKCcuL19uZXctcHJvbWlzZS1jYXBhYmlsaXR5Jyk7XG52YXIgcGVyZm9ybSA9IHJlcXVpcmUoJy4vX3BlcmZvcm0nKTtcbnZhciB1c2VyQWdlbnQgPSByZXF1aXJlKCcuL191c2VyLWFnZW50Jyk7XG52YXIgcHJvbWlzZVJlc29sdmUgPSByZXF1aXJlKCcuL19wcm9taXNlLXJlc29sdmUnKTtcbnZhciBQUk9NSVNFID0gJ1Byb21pc2UnO1xudmFyIFR5cGVFcnJvciA9IGdsb2JhbC5UeXBlRXJyb3I7XG52YXIgcHJvY2VzcyA9IGdsb2JhbC5wcm9jZXNzO1xudmFyIHZlcnNpb25zID0gcHJvY2VzcyAmJiBwcm9jZXNzLnZlcnNpb25zO1xudmFyIHY4ID0gdmVyc2lvbnMgJiYgdmVyc2lvbnMudjggfHwgJyc7XG52YXIgJFByb21pc2UgPSBnbG9iYWxbUFJPTUlTRV07XG52YXIgaXNOb2RlID0gY2xhc3NvZihwcm9jZXNzKSA9PSAncHJvY2Vzcyc7XG52YXIgZW1wdHkgPSBmdW5jdGlvbiAoKSB7IC8qIGVtcHR5ICovIH07XG52YXIgSW50ZXJuYWwsIG5ld0dlbmVyaWNQcm9taXNlQ2FwYWJpbGl0eSwgT3duUHJvbWlzZUNhcGFiaWxpdHksIFdyYXBwZXI7XG52YXIgbmV3UHJvbWlzZUNhcGFiaWxpdHkgPSBuZXdHZW5lcmljUHJvbWlzZUNhcGFiaWxpdHkgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eU1vZHVsZS5mO1xuXG52YXIgVVNFX05BVElWRSA9ICEhZnVuY3Rpb24gKCkge1xuICB0cnkge1xuICAgIC8vIGNvcnJlY3Qgc3ViY2xhc3Npbmcgd2l0aCBAQHNwZWNpZXMgc3VwcG9ydFxuICAgIHZhciBwcm9taXNlID0gJFByb21pc2UucmVzb2x2ZSgxKTtcbiAgICB2YXIgRmFrZVByb21pc2UgPSAocHJvbWlzZS5jb25zdHJ1Y3RvciA9IHt9KVtyZXF1aXJlKCcuL193a3MnKSgnc3BlY2llcycpXSA9IGZ1bmN0aW9uIChleGVjKSB7XG4gICAgICBleGVjKGVtcHR5LCBlbXB0eSk7XG4gICAgfTtcbiAgICAvLyB1bmhhbmRsZWQgcmVqZWN0aW9ucyB0cmFja2luZyBzdXBwb3J0LCBOb2RlSlMgUHJvbWlzZSB3aXRob3V0IGl0IGZhaWxzIEBAc3BlY2llcyB0ZXN0XG4gICAgcmV0dXJuIChpc05vZGUgfHwgdHlwZW9mIFByb21pc2VSZWplY3Rpb25FdmVudCA9PSAnZnVuY3Rpb24nKVxuICAgICAgJiYgcHJvbWlzZS50aGVuKGVtcHR5KSBpbnN0YW5jZW9mIEZha2VQcm9taXNlXG4gICAgICAvLyB2OCA2LjYgKE5vZGUgMTAgYW5kIENocm9tZSA2NikgaGF2ZSBhIGJ1ZyB3aXRoIHJlc29sdmluZyBjdXN0b20gdGhlbmFibGVzXG4gICAgICAvLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvY2hyb21pdW0vaXNzdWVzL2RldGFpbD9pZD04MzA1NjVcbiAgICAgIC8vIHdlIGNhbid0IGRldGVjdCBpdCBzeW5jaHJvbm91c2x5LCBzbyBqdXN0IGNoZWNrIHZlcnNpb25zXG4gICAgICAmJiB2OC5pbmRleE9mKCc2LjYnKSAhPT0gMFxuICAgICAgJiYgdXNlckFnZW50LmluZGV4T2YoJ0Nocm9tZS82NicpID09PSAtMTtcbiAgfSBjYXRjaCAoZSkgeyAvKiBlbXB0eSAqLyB9XG59KCk7XG5cbi8vIGhlbHBlcnNcbnZhciBpc1RoZW5hYmxlID0gZnVuY3Rpb24gKGl0KSB7XG4gIHZhciB0aGVuO1xuICByZXR1cm4gaXNPYmplY3QoaXQpICYmIHR5cGVvZiAodGhlbiA9IGl0LnRoZW4pID09ICdmdW5jdGlvbicgPyB0aGVuIDogZmFsc2U7XG59O1xudmFyIG5vdGlmeSA9IGZ1bmN0aW9uIChwcm9taXNlLCBpc1JlamVjdCkge1xuICBpZiAocHJvbWlzZS5fbikgcmV0dXJuO1xuICBwcm9taXNlLl9uID0gdHJ1ZTtcbiAgdmFyIGNoYWluID0gcHJvbWlzZS5fYztcbiAgbWljcm90YXNrKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgdmFsdWUgPSBwcm9taXNlLl92O1xuICAgIHZhciBvayA9IHByb21pc2UuX3MgPT0gMTtcbiAgICB2YXIgaSA9IDA7XG4gICAgdmFyIHJ1biA9IGZ1bmN0aW9uIChyZWFjdGlvbikge1xuICAgICAgdmFyIGhhbmRsZXIgPSBvayA/IHJlYWN0aW9uLm9rIDogcmVhY3Rpb24uZmFpbDtcbiAgICAgIHZhciByZXNvbHZlID0gcmVhY3Rpb24ucmVzb2x2ZTtcbiAgICAgIHZhciByZWplY3QgPSByZWFjdGlvbi5yZWplY3Q7XG4gICAgICB2YXIgZG9tYWluID0gcmVhY3Rpb24uZG9tYWluO1xuICAgICAgdmFyIHJlc3VsdCwgdGhlbiwgZXhpdGVkO1xuICAgICAgdHJ5IHtcbiAgICAgICAgaWYgKGhhbmRsZXIpIHtcbiAgICAgICAgICBpZiAoIW9rKSB7XG4gICAgICAgICAgICBpZiAocHJvbWlzZS5faCA9PSAyKSBvbkhhbmRsZVVuaGFuZGxlZChwcm9taXNlKTtcbiAgICAgICAgICAgIHByb21pc2UuX2ggPSAxO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoaGFuZGxlciA9PT0gdHJ1ZSkgcmVzdWx0ID0gdmFsdWU7XG4gICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAoZG9tYWluKSBkb21haW4uZW50ZXIoKTtcbiAgICAgICAgICAgIHJlc3VsdCA9IGhhbmRsZXIodmFsdWUpOyAvLyBtYXkgdGhyb3dcbiAgICAgICAgICAgIGlmIChkb21haW4pIHtcbiAgICAgICAgICAgICAgZG9tYWluLmV4aXQoKTtcbiAgICAgICAgICAgICAgZXhpdGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHJlc3VsdCA9PT0gcmVhY3Rpb24ucHJvbWlzZSkge1xuICAgICAgICAgICAgcmVqZWN0KFR5cGVFcnJvcignUHJvbWlzZS1jaGFpbiBjeWNsZScpKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKHRoZW4gPSBpc1RoZW5hYmxlKHJlc3VsdCkpIHtcbiAgICAgICAgICAgIHRoZW4uY2FsbChyZXN1bHQsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSBlbHNlIHJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgfSBlbHNlIHJlamVjdCh2YWx1ZSk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGlmIChkb21haW4gJiYgIWV4aXRlZCkgZG9tYWluLmV4aXQoKTtcbiAgICAgICAgcmVqZWN0KGUpO1xuICAgICAgfVxuICAgIH07XG4gICAgd2hpbGUgKGNoYWluLmxlbmd0aCA+IGkpIHJ1bihjaGFpbltpKytdKTsgLy8gdmFyaWFibGUgbGVuZ3RoIC0gY2FuJ3QgdXNlIGZvckVhY2hcbiAgICBwcm9taXNlLl9jID0gW107XG4gICAgcHJvbWlzZS5fbiA9IGZhbHNlO1xuICAgIGlmIChpc1JlamVjdCAmJiAhcHJvbWlzZS5faCkgb25VbmhhbmRsZWQocHJvbWlzZSk7XG4gIH0pO1xufTtcbnZhciBvblVuaGFuZGxlZCA9IGZ1bmN0aW9uIChwcm9taXNlKSB7XG4gIHRhc2suY2FsbChnbG9iYWwsIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgdmFsdWUgPSBwcm9taXNlLl92O1xuICAgIHZhciB1bmhhbmRsZWQgPSBpc1VuaGFuZGxlZChwcm9taXNlKTtcbiAgICB2YXIgcmVzdWx0LCBoYW5kbGVyLCBjb25zb2xlO1xuICAgIGlmICh1bmhhbmRsZWQpIHtcbiAgICAgIHJlc3VsdCA9IHBlcmZvcm0oZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoaXNOb2RlKSB7XG4gICAgICAgICAgcHJvY2Vzcy5lbWl0KCd1bmhhbmRsZWRSZWplY3Rpb24nLCB2YWx1ZSwgcHJvbWlzZSk7XG4gICAgICAgIH0gZWxzZSBpZiAoaGFuZGxlciA9IGdsb2JhbC5vbnVuaGFuZGxlZHJlamVjdGlvbikge1xuICAgICAgICAgIGhhbmRsZXIoeyBwcm9taXNlOiBwcm9taXNlLCByZWFzb246IHZhbHVlIH0pO1xuICAgICAgICB9IGVsc2UgaWYgKChjb25zb2xlID0gZ2xvYmFsLmNvbnNvbGUpICYmIGNvbnNvbGUuZXJyb3IpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdVbmhhbmRsZWQgcHJvbWlzZSByZWplY3Rpb24nLCB2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgLy8gQnJvd3NlcnMgc2hvdWxkIG5vdCB0cmlnZ2VyIGByZWplY3Rpb25IYW5kbGVkYCBldmVudCBpZiBpdCB3YXMgaGFuZGxlZCBoZXJlLCBOb2RlSlMgLSBzaG91bGRcbiAgICAgIHByb21pc2UuX2ggPSBpc05vZGUgfHwgaXNVbmhhbmRsZWQocHJvbWlzZSkgPyAyIDogMTtcbiAgICB9IHByb21pc2UuX2EgPSB1bmRlZmluZWQ7XG4gICAgaWYgKHVuaGFuZGxlZCAmJiByZXN1bHQuZSkgdGhyb3cgcmVzdWx0LnY7XG4gIH0pO1xufTtcbnZhciBpc1VuaGFuZGxlZCA9IGZ1bmN0aW9uIChwcm9taXNlKSB7XG4gIHJldHVybiBwcm9taXNlLl9oICE9PSAxICYmIChwcm9taXNlLl9hIHx8IHByb21pc2UuX2MpLmxlbmd0aCA9PT0gMDtcbn07XG52YXIgb25IYW5kbGVVbmhhbmRsZWQgPSBmdW5jdGlvbiAocHJvbWlzZSkge1xuICB0YXNrLmNhbGwoZ2xvYmFsLCBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGhhbmRsZXI7XG4gICAgaWYgKGlzTm9kZSkge1xuICAgICAgcHJvY2Vzcy5lbWl0KCdyZWplY3Rpb25IYW5kbGVkJywgcHJvbWlzZSk7XG4gICAgfSBlbHNlIGlmIChoYW5kbGVyID0gZ2xvYmFsLm9ucmVqZWN0aW9uaGFuZGxlZCkge1xuICAgICAgaGFuZGxlcih7IHByb21pc2U6IHByb21pc2UsIHJlYXNvbjogcHJvbWlzZS5fdiB9KTtcbiAgICB9XG4gIH0pO1xufTtcbnZhciAkcmVqZWN0ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gIHZhciBwcm9taXNlID0gdGhpcztcbiAgaWYgKHByb21pc2UuX2QpIHJldHVybjtcbiAgcHJvbWlzZS5fZCA9IHRydWU7XG4gIHByb21pc2UgPSBwcm9taXNlLl93IHx8IHByb21pc2U7IC8vIHVud3JhcFxuICBwcm9taXNlLl92ID0gdmFsdWU7XG4gIHByb21pc2UuX3MgPSAyO1xuICBpZiAoIXByb21pc2UuX2EpIHByb21pc2UuX2EgPSBwcm9taXNlLl9jLnNsaWNlKCk7XG4gIG5vdGlmeShwcm9taXNlLCB0cnVlKTtcbn07XG52YXIgJHJlc29sdmUgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgdmFyIHByb21pc2UgPSB0aGlzO1xuICB2YXIgdGhlbjtcbiAgaWYgKHByb21pc2UuX2QpIHJldHVybjtcbiAgcHJvbWlzZS5fZCA9IHRydWU7XG4gIHByb21pc2UgPSBwcm9taXNlLl93IHx8IHByb21pc2U7IC8vIHVud3JhcFxuICB0cnkge1xuICAgIGlmIChwcm9taXNlID09PSB2YWx1ZSkgdGhyb3cgVHlwZUVycm9yKFwiUHJvbWlzZSBjYW4ndCBiZSByZXNvbHZlZCBpdHNlbGZcIik7XG4gICAgaWYgKHRoZW4gPSBpc1RoZW5hYmxlKHZhbHVlKSkge1xuICAgICAgbWljcm90YXNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHdyYXBwZXIgPSB7IF93OiBwcm9taXNlLCBfZDogZmFsc2UgfTsgLy8gd3JhcFxuICAgICAgICB0cnkge1xuICAgICAgICAgIHRoZW4uY2FsbCh2YWx1ZSwgY3R4KCRyZXNvbHZlLCB3cmFwcGVyLCAxKSwgY3R4KCRyZWplY3QsIHdyYXBwZXIsIDEpKTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICRyZWplY3QuY2FsbCh3cmFwcGVyLCBlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHByb21pc2UuX3YgPSB2YWx1ZTtcbiAgICAgIHByb21pc2UuX3MgPSAxO1xuICAgICAgbm90aWZ5KHByb21pc2UsIGZhbHNlKTtcbiAgICB9XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICAkcmVqZWN0LmNhbGwoeyBfdzogcHJvbWlzZSwgX2Q6IGZhbHNlIH0sIGUpOyAvLyB3cmFwXG4gIH1cbn07XG5cbi8vIGNvbnN0cnVjdG9yIHBvbHlmaWxsXG5pZiAoIVVTRV9OQVRJVkUpIHtcbiAgLy8gMjUuNC4zLjEgUHJvbWlzZShleGVjdXRvcilcbiAgJFByb21pc2UgPSBmdW5jdGlvbiBQcm9taXNlKGV4ZWN1dG9yKSB7XG4gICAgYW5JbnN0YW5jZSh0aGlzLCAkUHJvbWlzZSwgUFJPTUlTRSwgJ19oJyk7XG4gICAgYUZ1bmN0aW9uKGV4ZWN1dG9yKTtcbiAgICBJbnRlcm5hbC5jYWxsKHRoaXMpO1xuICAgIHRyeSB7XG4gICAgICBleGVjdXRvcihjdHgoJHJlc29sdmUsIHRoaXMsIDEpLCBjdHgoJHJlamVjdCwgdGhpcywgMSkpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgJHJlamVjdC5jYWxsKHRoaXMsIGVycik7XG4gICAgfVxuICB9O1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbiAgSW50ZXJuYWwgPSBmdW5jdGlvbiBQcm9taXNlKGV4ZWN1dG9yKSB7XG4gICAgdGhpcy5fYyA9IFtdOyAgICAgICAgICAgICAvLyA8LSBhd2FpdGluZyByZWFjdGlvbnNcbiAgICB0aGlzLl9hID0gdW5kZWZpbmVkOyAgICAgIC8vIDwtIGNoZWNrZWQgaW4gaXNVbmhhbmRsZWQgcmVhY3Rpb25zXG4gICAgdGhpcy5fcyA9IDA7ICAgICAgICAgICAgICAvLyA8LSBzdGF0ZVxuICAgIHRoaXMuX2QgPSBmYWxzZTsgICAgICAgICAgLy8gPC0gZG9uZVxuICAgIHRoaXMuX3YgPSB1bmRlZmluZWQ7ICAgICAgLy8gPC0gdmFsdWVcbiAgICB0aGlzLl9oID0gMDsgICAgICAgICAgICAgIC8vIDwtIHJlamVjdGlvbiBzdGF0ZSwgMCAtIGRlZmF1bHQsIDEgLSBoYW5kbGVkLCAyIC0gdW5oYW5kbGVkXG4gICAgdGhpcy5fbiA9IGZhbHNlOyAgICAgICAgICAvLyA8LSBub3RpZnlcbiAgfTtcbiAgSW50ZXJuYWwucHJvdG90eXBlID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUtYWxsJykoJFByb21pc2UucHJvdG90eXBlLCB7XG4gICAgLy8gMjUuNC41LjMgUHJvbWlzZS5wcm90b3R5cGUudGhlbihvbkZ1bGZpbGxlZCwgb25SZWplY3RlZClcbiAgICB0aGVuOiBmdW5jdGlvbiB0aGVuKG9uRnVsZmlsbGVkLCBvblJlamVjdGVkKSB7XG4gICAgICB2YXIgcmVhY3Rpb24gPSBuZXdQcm9taXNlQ2FwYWJpbGl0eShzcGVjaWVzQ29uc3RydWN0b3IodGhpcywgJFByb21pc2UpKTtcbiAgICAgIHJlYWN0aW9uLm9rID0gdHlwZW9mIG9uRnVsZmlsbGVkID09ICdmdW5jdGlvbicgPyBvbkZ1bGZpbGxlZCA6IHRydWU7XG4gICAgICByZWFjdGlvbi5mYWlsID0gdHlwZW9mIG9uUmVqZWN0ZWQgPT0gJ2Z1bmN0aW9uJyAmJiBvblJlamVjdGVkO1xuICAgICAgcmVhY3Rpb24uZG9tYWluID0gaXNOb2RlID8gcHJvY2Vzcy5kb21haW4gOiB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9jLnB1c2gocmVhY3Rpb24pO1xuICAgICAgaWYgKHRoaXMuX2EpIHRoaXMuX2EucHVzaChyZWFjdGlvbik7XG4gICAgICBpZiAodGhpcy5fcykgbm90aWZ5KHRoaXMsIGZhbHNlKTtcbiAgICAgIHJldHVybiByZWFjdGlvbi5wcm9taXNlO1xuICAgIH0sXG4gICAgLy8gMjUuNC41LjEgUHJvbWlzZS5wcm90b3R5cGUuY2F0Y2gob25SZWplY3RlZClcbiAgICAnY2F0Y2gnOiBmdW5jdGlvbiAob25SZWplY3RlZCkge1xuICAgICAgcmV0dXJuIHRoaXMudGhlbih1bmRlZmluZWQsIG9uUmVqZWN0ZWQpO1xuICAgIH1cbiAgfSk7XG4gIE93blByb21pc2VDYXBhYmlsaXR5ID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBwcm9taXNlID0gbmV3IEludGVybmFsKCk7XG4gICAgdGhpcy5wcm9taXNlID0gcHJvbWlzZTtcbiAgICB0aGlzLnJlc29sdmUgPSBjdHgoJHJlc29sdmUsIHByb21pc2UsIDEpO1xuICAgIHRoaXMucmVqZWN0ID0gY3R4KCRyZWplY3QsIHByb21pc2UsIDEpO1xuICB9O1xuICBuZXdQcm9taXNlQ2FwYWJpbGl0eU1vZHVsZS5mID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkgPSBmdW5jdGlvbiAoQykge1xuICAgIHJldHVybiBDID09PSAkUHJvbWlzZSB8fCBDID09PSBXcmFwcGVyXG4gICAgICA/IG5ldyBPd25Qcm9taXNlQ2FwYWJpbGl0eShDKVxuICAgICAgOiBuZXdHZW5lcmljUHJvbWlzZUNhcGFiaWxpdHkoQyk7XG4gIH07XG59XG5cbiRleHBvcnQoJGV4cG9ydC5HICsgJGV4cG9ydC5XICsgJGV4cG9ydC5GICogIVVTRV9OQVRJVkUsIHsgUHJvbWlzZTogJFByb21pc2UgfSk7XG5yZXF1aXJlKCcuL19zZXQtdG8tc3RyaW5nLXRhZycpKCRQcm9taXNlLCBQUk9NSVNFKTtcbnJlcXVpcmUoJy4vX3NldC1zcGVjaWVzJykoUFJPTUlTRSk7XG5XcmFwcGVyID0gcmVxdWlyZSgnLi9fY29yZScpW1BST01JU0VdO1xuXG4vLyBzdGF0aWNzXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICFVU0VfTkFUSVZFLCBQUk9NSVNFLCB7XG4gIC8vIDI1LjQuNC41IFByb21pc2UucmVqZWN0KHIpXG4gIHJlamVjdDogZnVuY3Rpb24gcmVqZWN0KHIpIHtcbiAgICB2YXIgY2FwYWJpbGl0eSA9IG5ld1Byb21pc2VDYXBhYmlsaXR5KHRoaXMpO1xuICAgIHZhciAkJHJlamVjdCA9IGNhcGFiaWxpdHkucmVqZWN0O1xuICAgICQkcmVqZWN0KHIpO1xuICAgIHJldHVybiBjYXBhYmlsaXR5LnByb21pc2U7XG4gIH1cbn0pO1xuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAoTElCUkFSWSB8fCAhVVNFX05BVElWRSksIFBST01JU0UsIHtcbiAgLy8gMjUuNC40LjYgUHJvbWlzZS5yZXNvbHZlKHgpXG4gIHJlc29sdmU6IGZ1bmN0aW9uIHJlc29sdmUoeCkge1xuICAgIHJldHVybiBwcm9taXNlUmVzb2x2ZShMSUJSQVJZICYmIHRoaXMgPT09IFdyYXBwZXIgPyAkUHJvbWlzZSA6IHRoaXMsIHgpO1xuICB9XG59KTtcbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIShVU0VfTkFUSVZFICYmIHJlcXVpcmUoJy4vX2l0ZXItZGV0ZWN0JykoZnVuY3Rpb24gKGl0ZXIpIHtcbiAgJFByb21pc2UuYWxsKGl0ZXIpWydjYXRjaCddKGVtcHR5KTtcbn0pKSwgUFJPTUlTRSwge1xuICAvLyAyNS40LjQuMSBQcm9taXNlLmFsbChpdGVyYWJsZSlcbiAgYWxsOiBmdW5jdGlvbiBhbGwoaXRlcmFibGUpIHtcbiAgICB2YXIgQyA9IHRoaXM7XG4gICAgdmFyIGNhcGFiaWxpdHkgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eShDKTtcbiAgICB2YXIgcmVzb2x2ZSA9IGNhcGFiaWxpdHkucmVzb2x2ZTtcbiAgICB2YXIgcmVqZWN0ID0gY2FwYWJpbGl0eS5yZWplY3Q7XG4gICAgdmFyIHJlc3VsdCA9IHBlcmZvcm0oZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIHZhbHVlcyA9IFtdO1xuICAgICAgdmFyIGluZGV4ID0gMDtcbiAgICAgIHZhciByZW1haW5pbmcgPSAxO1xuICAgICAgZm9yT2YoaXRlcmFibGUsIGZhbHNlLCBmdW5jdGlvbiAocHJvbWlzZSkge1xuICAgICAgICB2YXIgJGluZGV4ID0gaW5kZXgrKztcbiAgICAgICAgdmFyIGFscmVhZHlDYWxsZWQgPSBmYWxzZTtcbiAgICAgICAgdmFsdWVzLnB1c2godW5kZWZpbmVkKTtcbiAgICAgICAgcmVtYWluaW5nKys7XG4gICAgICAgIEMucmVzb2x2ZShwcm9taXNlKS50aGVuKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgIGlmIChhbHJlYWR5Q2FsbGVkKSByZXR1cm47XG4gICAgICAgICAgYWxyZWFkeUNhbGxlZCA9IHRydWU7XG4gICAgICAgICAgdmFsdWVzWyRpbmRleF0gPSB2YWx1ZTtcbiAgICAgICAgICAtLXJlbWFpbmluZyB8fCByZXNvbHZlKHZhbHVlcyk7XG4gICAgICAgIH0sIHJlamVjdCk7XG4gICAgICB9KTtcbiAgICAgIC0tcmVtYWluaW5nIHx8IHJlc29sdmUodmFsdWVzKTtcbiAgICB9KTtcbiAgICBpZiAocmVzdWx0LmUpIHJlamVjdChyZXN1bHQudik7XG4gICAgcmV0dXJuIGNhcGFiaWxpdHkucHJvbWlzZTtcbiAgfSxcbiAgLy8gMjUuNC40LjQgUHJvbWlzZS5yYWNlKGl0ZXJhYmxlKVxuICByYWNlOiBmdW5jdGlvbiByYWNlKGl0ZXJhYmxlKSB7XG4gICAgdmFyIEMgPSB0aGlzO1xuICAgIHZhciBjYXBhYmlsaXR5ID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkoQyk7XG4gICAgdmFyIHJlamVjdCA9IGNhcGFiaWxpdHkucmVqZWN0O1xuICAgIHZhciByZXN1bHQgPSBwZXJmb3JtKGZ1bmN0aW9uICgpIHtcbiAgICAgIGZvck9mKGl0ZXJhYmxlLCBmYWxzZSwgZnVuY3Rpb24gKHByb21pc2UpIHtcbiAgICAgICAgQy5yZXNvbHZlKHByb21pc2UpLnRoZW4oY2FwYWJpbGl0eS5yZXNvbHZlLCByZWplY3QpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgaWYgKHJlc3VsdC5lKSByZWplY3QocmVzdWx0LnYpO1xuICAgIHJldHVybiBjYXBhYmlsaXR5LnByb21pc2U7XG4gIH1cbn0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5wcm9taXNlLmpzXG4vLyBtb2R1bGUgaWQgPSAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LnByb21pc2UuanNcbi8vIG1vZHVsZSBjaHVua3MgPSBtYWluIiwiJ3VzZSBzdHJpY3QnO1xudmFyICRhdCA9IHJlcXVpcmUoJy4vX3N0cmluZy1hdCcpKHRydWUpO1xuXG4vLyAyMS4xLjMuMjcgU3RyaW5nLnByb3RvdHlwZVtAQGl0ZXJhdG9yXSgpXG5yZXF1aXJlKCcuL19pdGVyLWRlZmluZScpKFN0cmluZywgJ1N0cmluZycsIGZ1bmN0aW9uIChpdGVyYXRlZCkge1xuICB0aGlzLl90ID0gU3RyaW5nKGl0ZXJhdGVkKTsgLy8gdGFyZ2V0XG4gIHRoaXMuX2kgPSAwOyAgICAgICAgICAgICAgICAvLyBuZXh0IGluZGV4XG4vLyAyMS4xLjUuMi4xICVTdHJpbmdJdGVyYXRvclByb3RvdHlwZSUubmV4dCgpXG59LCBmdW5jdGlvbiAoKSB7XG4gIHZhciBPID0gdGhpcy5fdDtcbiAgdmFyIGluZGV4ID0gdGhpcy5faTtcbiAgdmFyIHBvaW50O1xuICBpZiAoaW5kZXggPj0gTy5sZW5ndGgpIHJldHVybiB7IHZhbHVlOiB1bmRlZmluZWQsIGRvbmU6IHRydWUgfTtcbiAgcG9pbnQgPSAkYXQoTywgaW5kZXgpO1xuICB0aGlzLl9pICs9IHBvaW50Lmxlbmd0aDtcbiAgcmV0dXJuIHsgdmFsdWU6IHBvaW50LCBkb25lOiBmYWxzZSB9O1xufSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvci5qc1xuLy8gbW9kdWxlIGlkID0gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3IuanNcbi8vIG1vZHVsZSBjaHVua3MgPSBtYWluIiwiJ3VzZSBzdHJpY3QnO1xuLy8gRUNNQVNjcmlwdCA2IHN5bWJvbHMgc2hpbVxudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKTtcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG52YXIgcmVkZWZpbmUgPSByZXF1aXJlKCcuL19yZWRlZmluZScpO1xudmFyIE1FVEEgPSByZXF1aXJlKCcuL19tZXRhJykuS0VZO1xudmFyICRmYWlscyA9IHJlcXVpcmUoJy4vX2ZhaWxzJyk7XG52YXIgc2hhcmVkID0gcmVxdWlyZSgnLi9fc2hhcmVkJyk7XG52YXIgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlKCcuL19zZXQtdG8tc3RyaW5nLXRhZycpO1xudmFyIHVpZCA9IHJlcXVpcmUoJy4vX3VpZCcpO1xudmFyIHdrcyA9IHJlcXVpcmUoJy4vX3drcycpO1xudmFyIHdrc0V4dCA9IHJlcXVpcmUoJy4vX3drcy1leHQnKTtcbnZhciB3a3NEZWZpbmUgPSByZXF1aXJlKCcuL193a3MtZGVmaW5lJyk7XG52YXIgZW51bUtleXMgPSByZXF1aXJlKCcuL19lbnVtLWtleXMnKTtcbnZhciBpc0FycmF5ID0gcmVxdWlyZSgnLi9faXMtYXJyYXknKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpO1xudmFyIHRvUHJpbWl0aXZlID0gcmVxdWlyZSgnLi9fdG8tcHJpbWl0aXZlJyk7XG52YXIgY3JlYXRlRGVzYyA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKTtcbnZhciBfY3JlYXRlID0gcmVxdWlyZSgnLi9fb2JqZWN0LWNyZWF0ZScpO1xudmFyIGdPUE5FeHQgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wbi1leHQnKTtcbnZhciAkR09QRCA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BkJyk7XG52YXIgJERQID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJyk7XG52YXIgJGtleXMgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpO1xudmFyIGdPUEQgPSAkR09QRC5mO1xudmFyIGRQID0gJERQLmY7XG52YXIgZ09QTiA9IGdPUE5FeHQuZjtcbnZhciAkU3ltYm9sID0gZ2xvYmFsLlN5bWJvbDtcbnZhciAkSlNPTiA9IGdsb2JhbC5KU09OO1xudmFyIF9zdHJpbmdpZnkgPSAkSlNPTiAmJiAkSlNPTi5zdHJpbmdpZnk7XG52YXIgUFJPVE9UWVBFID0gJ3Byb3RvdHlwZSc7XG52YXIgSElEREVOID0gd2tzKCdfaGlkZGVuJyk7XG52YXIgVE9fUFJJTUlUSVZFID0gd2tzKCd0b1ByaW1pdGl2ZScpO1xudmFyIGlzRW51bSA9IHt9LnByb3BlcnR5SXNFbnVtZXJhYmxlO1xudmFyIFN5bWJvbFJlZ2lzdHJ5ID0gc2hhcmVkKCdzeW1ib2wtcmVnaXN0cnknKTtcbnZhciBBbGxTeW1ib2xzID0gc2hhcmVkKCdzeW1ib2xzJyk7XG52YXIgT1BTeW1ib2xzID0gc2hhcmVkKCdvcC1zeW1ib2xzJyk7XG52YXIgT2JqZWN0UHJvdG8gPSBPYmplY3RbUFJPVE9UWVBFXTtcbnZhciBVU0VfTkFUSVZFID0gdHlwZW9mICRTeW1ib2wgPT0gJ2Z1bmN0aW9uJztcbnZhciBRT2JqZWN0ID0gZ2xvYmFsLlFPYmplY3Q7XG4vLyBEb24ndCB1c2Ugc2V0dGVycyBpbiBRdCBTY3JpcHQsIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy8xNzNcbnZhciBzZXR0ZXIgPSAhUU9iamVjdCB8fCAhUU9iamVjdFtQUk9UT1RZUEVdIHx8ICFRT2JqZWN0W1BST1RPVFlQRV0uZmluZENoaWxkO1xuXG4vLyBmYWxsYmFjayBmb3Igb2xkIEFuZHJvaWQsIGh0dHBzOi8vY29kZS5nb29nbGUuY29tL3AvdjgvaXNzdWVzL2RldGFpbD9pZD02ODdcbnZhciBzZXRTeW1ib2xEZXNjID0gREVTQ1JJUFRPUlMgJiYgJGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIF9jcmVhdGUoZFAoe30sICdhJywge1xuICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gZFAodGhpcywgJ2EnLCB7IHZhbHVlOiA3IH0pLmE7IH1cbiAgfSkpLmEgIT0gNztcbn0pID8gZnVuY3Rpb24gKGl0LCBrZXksIEQpIHtcbiAgdmFyIHByb3RvRGVzYyA9IGdPUEQoT2JqZWN0UHJvdG8sIGtleSk7XG4gIGlmIChwcm90b0Rlc2MpIGRlbGV0ZSBPYmplY3RQcm90b1trZXldO1xuICBkUChpdCwga2V5LCBEKTtcbiAgaWYgKHByb3RvRGVzYyAmJiBpdCAhPT0gT2JqZWN0UHJvdG8pIGRQKE9iamVjdFByb3RvLCBrZXksIHByb3RvRGVzYyk7XG59IDogZFA7XG5cbnZhciB3cmFwID0gZnVuY3Rpb24gKHRhZykge1xuICB2YXIgc3ltID0gQWxsU3ltYm9sc1t0YWddID0gX2NyZWF0ZSgkU3ltYm9sW1BST1RPVFlQRV0pO1xuICBzeW0uX2sgPSB0YWc7XG4gIHJldHVybiBzeW07XG59O1xuXG52YXIgaXNTeW1ib2wgPSBVU0VfTkFUSVZFICYmIHR5cGVvZiAkU3ltYm9sLml0ZXJhdG9yID09ICdzeW1ib2wnID8gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiB0eXBlb2YgaXQgPT0gJ3N5bWJvbCc7XG59IDogZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBpdCBpbnN0YW5jZW9mICRTeW1ib2w7XG59O1xuXG52YXIgJGRlZmluZVByb3BlcnR5ID0gZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkoaXQsIGtleSwgRCkge1xuICBpZiAoaXQgPT09IE9iamVjdFByb3RvKSAkZGVmaW5lUHJvcGVydHkoT1BTeW1ib2xzLCBrZXksIEQpO1xuICBhbk9iamVjdChpdCk7XG4gIGtleSA9IHRvUHJpbWl0aXZlKGtleSwgdHJ1ZSk7XG4gIGFuT2JqZWN0KEQpO1xuICBpZiAoaGFzKEFsbFN5bWJvbHMsIGtleSkpIHtcbiAgICBpZiAoIUQuZW51bWVyYWJsZSkge1xuICAgICAgaWYgKCFoYXMoaXQsIEhJRERFTikpIGRQKGl0LCBISURERU4sIGNyZWF0ZURlc2MoMSwge30pKTtcbiAgICAgIGl0W0hJRERFTl1ba2V5XSA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChoYXMoaXQsIEhJRERFTikgJiYgaXRbSElEREVOXVtrZXldKSBpdFtISURERU5dW2tleV0gPSBmYWxzZTtcbiAgICAgIEQgPSBfY3JlYXRlKEQsIHsgZW51bWVyYWJsZTogY3JlYXRlRGVzYygwLCBmYWxzZSkgfSk7XG4gICAgfSByZXR1cm4gc2V0U3ltYm9sRGVzYyhpdCwga2V5LCBEKTtcbiAgfSByZXR1cm4gZFAoaXQsIGtleSwgRCk7XG59O1xudmFyICRkZWZpbmVQcm9wZXJ0aWVzID0gZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyhpdCwgUCkge1xuICBhbk9iamVjdChpdCk7XG4gIHZhciBrZXlzID0gZW51bUtleXMoUCA9IHRvSU9iamVjdChQKSk7XG4gIHZhciBpID0gMDtcbiAgdmFyIGwgPSBrZXlzLmxlbmd0aDtcbiAgdmFyIGtleTtcbiAgd2hpbGUgKGwgPiBpKSAkZGVmaW5lUHJvcGVydHkoaXQsIGtleSA9IGtleXNbaSsrXSwgUFtrZXldKTtcbiAgcmV0dXJuIGl0O1xufTtcbnZhciAkY3JlYXRlID0gZnVuY3Rpb24gY3JlYXRlKGl0LCBQKSB7XG4gIHJldHVybiBQID09PSB1bmRlZmluZWQgPyBfY3JlYXRlKGl0KSA6ICRkZWZpbmVQcm9wZXJ0aWVzKF9jcmVhdGUoaXQpLCBQKTtcbn07XG52YXIgJHByb3BlcnR5SXNFbnVtZXJhYmxlID0gZnVuY3Rpb24gcHJvcGVydHlJc0VudW1lcmFibGUoa2V5KSB7XG4gIHZhciBFID0gaXNFbnVtLmNhbGwodGhpcywga2V5ID0gdG9QcmltaXRpdmUoa2V5LCB0cnVlKSk7XG4gIGlmICh0aGlzID09PSBPYmplY3RQcm90byAmJiBoYXMoQWxsU3ltYm9scywga2V5KSAmJiAhaGFzKE9QU3ltYm9scywga2V5KSkgcmV0dXJuIGZhbHNlO1xuICByZXR1cm4gRSB8fCAhaGFzKHRoaXMsIGtleSkgfHwgIWhhcyhBbGxTeW1ib2xzLCBrZXkpIHx8IGhhcyh0aGlzLCBISURERU4pICYmIHRoaXNbSElEREVOXVtrZXldID8gRSA6IHRydWU7XG59O1xudmFyICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoaXQsIGtleSkge1xuICBpdCA9IHRvSU9iamVjdChpdCk7XG4gIGtleSA9IHRvUHJpbWl0aXZlKGtleSwgdHJ1ZSk7XG4gIGlmIChpdCA9PT0gT2JqZWN0UHJvdG8gJiYgaGFzKEFsbFN5bWJvbHMsIGtleSkgJiYgIWhhcyhPUFN5bWJvbHMsIGtleSkpIHJldHVybjtcbiAgdmFyIEQgPSBnT1BEKGl0LCBrZXkpO1xuICBpZiAoRCAmJiBoYXMoQWxsU3ltYm9scywga2V5KSAmJiAhKGhhcyhpdCwgSElEREVOKSAmJiBpdFtISURERU5dW2tleV0pKSBELmVudW1lcmFibGUgPSB0cnVlO1xuICByZXR1cm4gRDtcbn07XG52YXIgJGdldE93blByb3BlcnR5TmFtZXMgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eU5hbWVzKGl0KSB7XG4gIHZhciBuYW1lcyA9IGdPUE4odG9JT2JqZWN0KGl0KSk7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgdmFyIGkgPSAwO1xuICB2YXIga2V5O1xuICB3aGlsZSAobmFtZXMubGVuZ3RoID4gaSkge1xuICAgIGlmICghaGFzKEFsbFN5bWJvbHMsIGtleSA9IG5hbWVzW2krK10pICYmIGtleSAhPSBISURERU4gJiYga2V5ICE9IE1FVEEpIHJlc3VsdC5wdXNoKGtleSk7XG4gIH0gcmV0dXJuIHJlc3VsdDtcbn07XG52YXIgJGdldE93blByb3BlcnR5U3ltYm9scyA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5U3ltYm9scyhpdCkge1xuICB2YXIgSVNfT1AgPSBpdCA9PT0gT2JqZWN0UHJvdG87XG4gIHZhciBuYW1lcyA9IGdPUE4oSVNfT1AgPyBPUFN5bWJvbHMgOiB0b0lPYmplY3QoaXQpKTtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICB2YXIgaSA9IDA7XG4gIHZhciBrZXk7XG4gIHdoaWxlIChuYW1lcy5sZW5ndGggPiBpKSB7XG4gICAgaWYgKGhhcyhBbGxTeW1ib2xzLCBrZXkgPSBuYW1lc1tpKytdKSAmJiAoSVNfT1AgPyBoYXMoT2JqZWN0UHJvdG8sIGtleSkgOiB0cnVlKSkgcmVzdWx0LnB1c2goQWxsU3ltYm9sc1trZXldKTtcbiAgfSByZXR1cm4gcmVzdWx0O1xufTtcblxuLy8gMTkuNC4xLjEgU3ltYm9sKFtkZXNjcmlwdGlvbl0pXG5pZiAoIVVTRV9OQVRJVkUpIHtcbiAgJFN5bWJvbCA9IGZ1bmN0aW9uIFN5bWJvbCgpIHtcbiAgICBpZiAodGhpcyBpbnN0YW5jZW9mICRTeW1ib2wpIHRocm93IFR5cGVFcnJvcignU3ltYm9sIGlzIG5vdCBhIGNvbnN0cnVjdG9yIScpO1xuICAgIHZhciB0YWcgPSB1aWQoYXJndW1lbnRzLmxlbmd0aCA+IDAgPyBhcmd1bWVudHNbMF0gOiB1bmRlZmluZWQpO1xuICAgIHZhciAkc2V0ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICBpZiAodGhpcyA9PT0gT2JqZWN0UHJvdG8pICRzZXQuY2FsbChPUFN5bWJvbHMsIHZhbHVlKTtcbiAgICAgIGlmIChoYXModGhpcywgSElEREVOKSAmJiBoYXModGhpc1tISURERU5dLCB0YWcpKSB0aGlzW0hJRERFTl1bdGFnXSA9IGZhbHNlO1xuICAgICAgc2V0U3ltYm9sRGVzYyh0aGlzLCB0YWcsIGNyZWF0ZURlc2MoMSwgdmFsdWUpKTtcbiAgICB9O1xuICAgIGlmIChERVNDUklQVE9SUyAmJiBzZXR0ZXIpIHNldFN5bWJvbERlc2MoT2JqZWN0UHJvdG8sIHRhZywgeyBjb25maWd1cmFibGU6IHRydWUsIHNldDogJHNldCB9KTtcbiAgICByZXR1cm4gd3JhcCh0YWcpO1xuICB9O1xuICByZWRlZmluZSgkU3ltYm9sW1BST1RPVFlQRV0sICd0b1N0cmluZycsIGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLl9rO1xuICB9KTtcblxuICAkR09QRC5mID0gJGdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcbiAgJERQLmYgPSAkZGVmaW5lUHJvcGVydHk7XG4gIHJlcXVpcmUoJy4vX29iamVjdC1nb3BuJykuZiA9IGdPUE5FeHQuZiA9ICRnZXRPd25Qcm9wZXJ0eU5hbWVzO1xuICByZXF1aXJlKCcuL19vYmplY3QtcGllJykuZiA9ICRwcm9wZXJ0eUlzRW51bWVyYWJsZTtcbiAgcmVxdWlyZSgnLi9fb2JqZWN0LWdvcHMnKS5mID0gJGdldE93blByb3BlcnR5U3ltYm9scztcblxuICBpZiAoREVTQ1JJUFRPUlMgJiYgIXJlcXVpcmUoJy4vX2xpYnJhcnknKSkge1xuICAgIHJlZGVmaW5lKE9iamVjdFByb3RvLCAncHJvcGVydHlJc0VudW1lcmFibGUnLCAkcHJvcGVydHlJc0VudW1lcmFibGUsIHRydWUpO1xuICB9XG5cbiAgd2tzRXh0LmYgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHJldHVybiB3cmFwKHdrcyhuYW1lKSk7XG4gIH07XG59XG5cbiRleHBvcnQoJGV4cG9ydC5HICsgJGV4cG9ydC5XICsgJGV4cG9ydC5GICogIVVTRV9OQVRJVkUsIHsgU3ltYm9sOiAkU3ltYm9sIH0pO1xuXG5mb3IgKHZhciBlczZTeW1ib2xzID0gKFxuICAvLyAxOS40LjIuMiwgMTkuNC4yLjMsIDE5LjQuMi40LCAxOS40LjIuNiwgMTkuNC4yLjgsIDE5LjQuMi45LCAxOS40LjIuMTAsIDE5LjQuMi4xMSwgMTkuNC4yLjEyLCAxOS40LjIuMTMsIDE5LjQuMi4xNFxuICAnaGFzSW5zdGFuY2UsaXNDb25jYXRTcHJlYWRhYmxlLGl0ZXJhdG9yLG1hdGNoLHJlcGxhY2Usc2VhcmNoLHNwZWNpZXMsc3BsaXQsdG9QcmltaXRpdmUsdG9TdHJpbmdUYWcsdW5zY29wYWJsZXMnXG4pLnNwbGl0KCcsJyksIGogPSAwOyBlczZTeW1ib2xzLmxlbmd0aCA+IGo7KXdrcyhlczZTeW1ib2xzW2orK10pO1xuXG5mb3IgKHZhciB3ZWxsS25vd25TeW1ib2xzID0gJGtleXMod2tzLnN0b3JlKSwgayA9IDA7IHdlbGxLbm93blN5bWJvbHMubGVuZ3RoID4gazspIHdrc0RlZmluZSh3ZWxsS25vd25TeW1ib2xzW2srK10pO1xuXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICFVU0VfTkFUSVZFLCAnU3ltYm9sJywge1xuICAvLyAxOS40LjIuMSBTeW1ib2wuZm9yKGtleSlcbiAgJ2Zvcic6IGZ1bmN0aW9uIChrZXkpIHtcbiAgICByZXR1cm4gaGFzKFN5bWJvbFJlZ2lzdHJ5LCBrZXkgKz0gJycpXG4gICAgICA/IFN5bWJvbFJlZ2lzdHJ5W2tleV1cbiAgICAgIDogU3ltYm9sUmVnaXN0cnlba2V5XSA9ICRTeW1ib2woa2V5KTtcbiAgfSxcbiAgLy8gMTkuNC4yLjUgU3ltYm9sLmtleUZvcihzeW0pXG4gIGtleUZvcjogZnVuY3Rpb24ga2V5Rm9yKHN5bSkge1xuICAgIGlmICghaXNTeW1ib2woc3ltKSkgdGhyb3cgVHlwZUVycm9yKHN5bSArICcgaXMgbm90IGEgc3ltYm9sIScpO1xuICAgIGZvciAodmFyIGtleSBpbiBTeW1ib2xSZWdpc3RyeSkgaWYgKFN5bWJvbFJlZ2lzdHJ5W2tleV0gPT09IHN5bSkgcmV0dXJuIGtleTtcbiAgfSxcbiAgdXNlU2V0dGVyOiBmdW5jdGlvbiAoKSB7IHNldHRlciA9IHRydWU7IH0sXG4gIHVzZVNpbXBsZTogZnVuY3Rpb24gKCkgeyBzZXR0ZXIgPSBmYWxzZTsgfVxufSk7XG5cbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIVVTRV9OQVRJVkUsICdPYmplY3QnLCB7XG4gIC8vIDE5LjEuMi4yIE9iamVjdC5jcmVhdGUoTyBbLCBQcm9wZXJ0aWVzXSlcbiAgY3JlYXRlOiAkY3JlYXRlLFxuICAvLyAxOS4xLjIuNCBPYmplY3QuZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcylcbiAgZGVmaW5lUHJvcGVydHk6ICRkZWZpbmVQcm9wZXJ0eSxcbiAgLy8gMTkuMS4yLjMgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoTywgUHJvcGVydGllcylcbiAgZGVmaW5lUHJvcGVydGllczogJGRlZmluZVByb3BlcnRpZXMsXG4gIC8vIDE5LjEuMi42IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoTywgUClcbiAgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yOiAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yLFxuICAvLyAxOS4xLjIuNyBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhPKVxuICBnZXRPd25Qcm9wZXJ0eU5hbWVzOiAkZ2V0T3duUHJvcGVydHlOYW1lcyxcbiAgLy8gMTkuMS4yLjggT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhPKVxuICBnZXRPd25Qcm9wZXJ0eVN5bWJvbHM6ICRnZXRPd25Qcm9wZXJ0eVN5bWJvbHNcbn0pO1xuXG4vLyAyNC4zLjIgSlNPTi5zdHJpbmdpZnkodmFsdWUgWywgcmVwbGFjZXIgWywgc3BhY2VdXSlcbiRKU09OICYmICRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogKCFVU0VfTkFUSVZFIHx8ICRmYWlscyhmdW5jdGlvbiAoKSB7XG4gIHZhciBTID0gJFN5bWJvbCgpO1xuICAvLyBNUyBFZGdlIGNvbnZlcnRzIHN5bWJvbCB2YWx1ZXMgdG8gSlNPTiBhcyB7fVxuICAvLyBXZWJLaXQgY29udmVydHMgc3ltYm9sIHZhbHVlcyB0byBKU09OIGFzIG51bGxcbiAgLy8gVjggdGhyb3dzIG9uIGJveGVkIHN5bWJvbHNcbiAgcmV0dXJuIF9zdHJpbmdpZnkoW1NdKSAhPSAnW251bGxdJyB8fCBfc3RyaW5naWZ5KHsgYTogUyB9KSAhPSAne30nIHx8IF9zdHJpbmdpZnkoT2JqZWN0KFMpKSAhPSAne30nO1xufSkpLCAnSlNPTicsIHtcbiAgc3RyaW5naWZ5OiBmdW5jdGlvbiBzdHJpbmdpZnkoaXQpIHtcbiAgICB2YXIgYXJncyA9IFtpdF07XG4gICAgdmFyIGkgPSAxO1xuICAgIHZhciByZXBsYWNlciwgJHJlcGxhY2VyO1xuICAgIHdoaWxlIChhcmd1bWVudHMubGVuZ3RoID4gaSkgYXJncy5wdXNoKGFyZ3VtZW50c1tpKytdKTtcbiAgICAkcmVwbGFjZXIgPSByZXBsYWNlciA9IGFyZ3NbMV07XG4gICAgaWYgKCFpc09iamVjdChyZXBsYWNlcikgJiYgaXQgPT09IHVuZGVmaW5lZCB8fCBpc1N5bWJvbChpdCkpIHJldHVybjsgLy8gSUU4IHJldHVybnMgc3RyaW5nIG9uIHVuZGVmaW5lZFxuICAgIGlmICghaXNBcnJheShyZXBsYWNlcikpIHJlcGxhY2VyID0gZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgICAgIGlmICh0eXBlb2YgJHJlcGxhY2VyID09ICdmdW5jdGlvbicpIHZhbHVlID0gJHJlcGxhY2VyLmNhbGwodGhpcywga2V5LCB2YWx1ZSk7XG4gICAgICBpZiAoIWlzU3ltYm9sKHZhbHVlKSkgcmV0dXJuIHZhbHVlO1xuICAgIH07XG4gICAgYXJnc1sxXSA9IHJlcGxhY2VyO1xuICAgIHJldHVybiBfc3RyaW5naWZ5LmFwcGx5KCRKU09OLCBhcmdzKTtcbiAgfVxufSk7XG5cbi8vIDE5LjQuMy40IFN5bWJvbC5wcm90b3R5cGVbQEB0b1ByaW1pdGl2ZV0oaGludClcbiRTeW1ib2xbUFJPVE9UWVBFXVtUT19QUklNSVRJVkVdIHx8IHJlcXVpcmUoJy4vX2hpZGUnKSgkU3ltYm9sW1BST1RPVFlQRV0sIFRPX1BSSU1JVElWRSwgJFN5bWJvbFtQUk9UT1RZUEVdLnZhbHVlT2YpO1xuLy8gMTkuNC4zLjUgU3ltYm9sLnByb3RvdHlwZVtAQHRvU3RyaW5nVGFnXVxuc2V0VG9TdHJpbmdUYWcoJFN5bWJvbCwgJ1N5bWJvbCcpO1xuLy8gMjAuMi4xLjkgTWF0aFtAQHRvU3RyaW5nVGFnXVxuc2V0VG9TdHJpbmdUYWcoTWF0aCwgJ01hdGgnLCB0cnVlKTtcbi8vIDI0LjMuMyBKU09OW0BAdG9TdHJpbmdUYWddXG5zZXRUb1N0cmluZ1RhZyhnbG9iYWwuSlNPTiwgJ0pTT04nLCB0cnVlKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYuc3ltYm9sLmpzXG4vLyBtb2R1bGUgaWQgPSAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LnN5bWJvbC5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IG1haW4iLCIvLyBodHRwczovL2dpdGh1Yi5jb20vdGMzOS9wcm9wb3NhbC1wcm9taXNlLWZpbmFsbHlcbid1c2Ugc3RyaWN0JztcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG52YXIgY29yZSA9IHJlcXVpcmUoJy4vX2NvcmUnKTtcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBzcGVjaWVzQ29uc3RydWN0b3IgPSByZXF1aXJlKCcuL19zcGVjaWVzLWNvbnN0cnVjdG9yJyk7XG52YXIgcHJvbWlzZVJlc29sdmUgPSByZXF1aXJlKCcuL19wcm9taXNlLXJlc29sdmUnKTtcblxuJGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LlIsICdQcm9taXNlJywgeyAnZmluYWxseSc6IGZ1bmN0aW9uIChvbkZpbmFsbHkpIHtcbiAgdmFyIEMgPSBzcGVjaWVzQ29uc3RydWN0b3IodGhpcywgY29yZS5Qcm9taXNlIHx8IGdsb2JhbC5Qcm9taXNlKTtcbiAgdmFyIGlzRnVuY3Rpb24gPSB0eXBlb2Ygb25GaW5hbGx5ID09ICdmdW5jdGlvbic7XG4gIHJldHVybiB0aGlzLnRoZW4oXG4gICAgaXNGdW5jdGlvbiA/IGZ1bmN0aW9uICh4KSB7XG4gICAgICByZXR1cm4gcHJvbWlzZVJlc29sdmUoQywgb25GaW5hbGx5KCkpLnRoZW4oZnVuY3Rpb24gKCkgeyByZXR1cm4geDsgfSk7XG4gICAgfSA6IG9uRmluYWxseSxcbiAgICBpc0Z1bmN0aW9uID8gZnVuY3Rpb24gKGUpIHtcbiAgICAgIHJldHVybiBwcm9taXNlUmVzb2x2ZShDLCBvbkZpbmFsbHkoKSkudGhlbihmdW5jdGlvbiAoKSB7IHRocm93IGU7IH0pO1xuICAgIH0gOiBvbkZpbmFsbHlcbiAgKTtcbn0gfSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM3LnByb21pc2UuZmluYWxseS5qc1xuLy8gbW9kdWxlIGlkID0gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNy5wcm9taXNlLmZpbmFsbHkuanNcbi8vIG1vZHVsZSBjaHVua3MgPSBtYWluIiwiJ3VzZSBzdHJpY3QnO1xuLy8gaHR0cHM6Ly9naXRodWIuY29tL3RjMzkvcHJvcG9zYWwtcHJvbWlzZS10cnlcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG52YXIgbmV3UHJvbWlzZUNhcGFiaWxpdHkgPSByZXF1aXJlKCcuL19uZXctcHJvbWlzZS1jYXBhYmlsaXR5Jyk7XG52YXIgcGVyZm9ybSA9IHJlcXVpcmUoJy4vX3BlcmZvcm0nKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMsICdQcm9taXNlJywgeyAndHJ5JzogZnVuY3Rpb24gKGNhbGxiYWNrZm4pIHtcbiAgdmFyIHByb21pc2VDYXBhYmlsaXR5ID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkuZih0aGlzKTtcbiAgdmFyIHJlc3VsdCA9IHBlcmZvcm0oY2FsbGJhY2tmbik7XG4gIChyZXN1bHQuZSA/IHByb21pc2VDYXBhYmlsaXR5LnJlamVjdCA6IHByb21pc2VDYXBhYmlsaXR5LnJlc29sdmUpKHJlc3VsdC52KTtcbiAgcmV0dXJuIHByb21pc2VDYXBhYmlsaXR5LnByb21pc2U7XG59IH0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNy5wcm9taXNlLnRyeS5qc1xuLy8gbW9kdWxlIGlkID0gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNy5wcm9taXNlLnRyeS5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IG1haW4iLCJyZXF1aXJlKCcuL193a3MtZGVmaW5lJykoJ2FzeW5jSXRlcmF0b3InKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczcuc3ltYm9sLmFzeW5jLWl0ZXJhdG9yLmpzXG4vLyBtb2R1bGUgaWQgPSAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM3LnN5bWJvbC5hc3luYy1pdGVyYXRvci5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IG1haW4iLCJyZXF1aXJlKCcuL193a3MtZGVmaW5lJykoJ29ic2VydmFibGUnKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczcuc3ltYm9sLm9ic2VydmFibGUuanNcbi8vIG1vZHVsZSBpZCA9IC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczcuc3ltYm9sLm9ic2VydmFibGUuanNcbi8vIG1vZHVsZSBjaHVua3MgPSBtYWluIiwicmVxdWlyZSgnLi9lczYuYXJyYXkuaXRlcmF0b3InKTtcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBoaWRlID0gcmVxdWlyZSgnLi9faGlkZScpO1xudmFyIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpO1xudmFyIFRPX1NUUklOR19UQUcgPSByZXF1aXJlKCcuL193a3MnKSgndG9TdHJpbmdUYWcnKTtcblxudmFyIERPTUl0ZXJhYmxlcyA9ICgnQ1NTUnVsZUxpc3QsQ1NTU3R5bGVEZWNsYXJhdGlvbixDU1NWYWx1ZUxpc3QsQ2xpZW50UmVjdExpc3QsRE9NUmVjdExpc3QsRE9NU3RyaW5nTGlzdCwnICtcbiAgJ0RPTVRva2VuTGlzdCxEYXRhVHJhbnNmZXJJdGVtTGlzdCxGaWxlTGlzdCxIVE1MQWxsQ29sbGVjdGlvbixIVE1MQ29sbGVjdGlvbixIVE1MRm9ybUVsZW1lbnQsSFRNTFNlbGVjdEVsZW1lbnQsJyArXG4gICdNZWRpYUxpc3QsTWltZVR5cGVBcnJheSxOYW1lZE5vZGVNYXAsTm9kZUxpc3QsUGFpbnRSZXF1ZXN0TGlzdCxQbHVnaW4sUGx1Z2luQXJyYXksU1ZHTGVuZ3RoTGlzdCxTVkdOdW1iZXJMaXN0LCcgK1xuICAnU1ZHUGF0aFNlZ0xpc3QsU1ZHUG9pbnRMaXN0LFNWR1N0cmluZ0xpc3QsU1ZHVHJhbnNmb3JtTGlzdCxTb3VyY2VCdWZmZXJMaXN0LFN0eWxlU2hlZXRMaXN0LFRleHRUcmFja0N1ZUxpc3QsJyArXG4gICdUZXh0VHJhY2tMaXN0LFRvdWNoTGlzdCcpLnNwbGl0KCcsJyk7XG5cbmZvciAodmFyIGkgPSAwOyBpIDwgRE9NSXRlcmFibGVzLmxlbmd0aDsgaSsrKSB7XG4gIHZhciBOQU1FID0gRE9NSXRlcmFibGVzW2ldO1xuICB2YXIgQ29sbGVjdGlvbiA9IGdsb2JhbFtOQU1FXTtcbiAgdmFyIHByb3RvID0gQ29sbGVjdGlvbiAmJiBDb2xsZWN0aW9uLnByb3RvdHlwZTtcbiAgaWYgKHByb3RvICYmICFwcm90b1tUT19TVFJJTkdfVEFHXSkgaGlkZShwcm90bywgVE9fU1RSSU5HX1RBRywgTkFNRSk7XG4gIEl0ZXJhdG9yc1tOQU1FXSA9IEl0ZXJhdG9ycy5BcnJheTtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlLmpzXG4vLyBtb2R1bGUgaWQgPSAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZS5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IG1haW4iLCIoZnVuY3Rpb24gKGdsb2JhbCwgZmFjdG9yeSkge1xuXHR0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgPyBmYWN0b3J5KHJlcXVpcmUoJ3ByZWFjdCcpKSA6XG5cdHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCA/IGRlZmluZShbJ3ByZWFjdCddLCBmYWN0b3J5KSA6XG5cdChmYWN0b3J5KGdsb2JhbC5wcmVhY3QpKTtcbn0odGhpcywgKGZ1bmN0aW9uIChwcmVhY3QpIHsgJ3VzZSBzdHJpY3QnO1xuXG5cdC8vIHJlbmRlciBtb2Rlc1xuXG5cdHZhciBBVFRSX0tFWSA9ICdfX3ByZWFjdGF0dHJfJztcblxuXHQvKiBnbG9iYWwgX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fICovXG5cblx0LyoqXG5cdCAqIFJldHVybiBhIFJlYWN0RWxlbWVudC1jb21wYXRpYmxlIG9iamVjdCBmb3IgdGhlIGN1cnJlbnQgc3RhdGUgb2YgYSBwcmVhY3Rcblx0ICogY29tcG9uZW50LlxuXHQgKi9cblx0ZnVuY3Rpb24gY3JlYXRlUmVhY3RFbGVtZW50KGNvbXBvbmVudCkge1xuXHRcdHJldHVybiB7XG5cdFx0XHR0eXBlOiBjb21wb25lbnQuY29uc3RydWN0b3IsXG5cdFx0XHRrZXk6IGNvbXBvbmVudC5rZXksXG5cdFx0XHRyZWY6IG51bGwsIC8vIFVuc3VwcG9ydGVkXG5cdFx0XHRwcm9wczogY29tcG9uZW50LnByb3BzXG5cdFx0fTtcblx0fVxuXG5cdC8qKlxuXHQgKiBDcmVhdGUgYSBSZWFjdERPTUNvbXBvbmVudC1jb21wYXRpYmxlIG9iamVjdCBmb3IgYSBnaXZlbiBET00gbm9kZSByZW5kZXJlZFxuXHQgKiBieSBwcmVhY3QuXG5cdCAqXG5cdCAqIFRoaXMgaW1wbGVtZW50cyB0aGUgc3Vic2V0IG9mIHRoZSBSZWFjdERPTUNvbXBvbmVudCBpbnRlcmZhY2UgdGhhdFxuXHQgKiBSZWFjdCBEZXZUb29scyByZXF1aXJlcyBpbiBvcmRlciB0byBkaXNwbGF5IERPTSBub2RlcyBpbiB0aGUgaW5zcGVjdG9yIHdpdGhcblx0ICogdGhlIGNvcnJlY3QgdHlwZSBhbmQgcHJvcGVydGllcy5cblx0ICpcblx0ICogQHBhcmFtIHtOb2RlfSBub2RlXG5cdCAqL1xuXHRmdW5jdGlvbiBjcmVhdGVSZWFjdERPTUNvbXBvbmVudChub2RlKSB7XG5cdFx0dmFyIGNoaWxkTm9kZXMgPSBub2RlLm5vZGVUeXBlID09PSBOb2RlLkVMRU1FTlRfTk9ERSA/IEFycmF5LmZyb20obm9kZS5jaGlsZE5vZGVzKSA6IFtdO1xuXG5cdFx0dmFyIGlzVGV4dCA9IG5vZGUubm9kZVR5cGUgPT09IE5vZGUuVEVYVF9OT0RFO1xuXG5cdFx0cmV0dXJuIHtcblx0XHRcdC8vIC0tLSBSZWFjdERPTUNvbXBvbmVudCBpbnRlcmZhY2Vcblx0XHRcdF9jdXJyZW50RWxlbWVudDogaXNUZXh0ID8gbm9kZS50ZXh0Q29udGVudCA6IHtcblx0XHRcdFx0dHlwZTogbm9kZS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpLFxuXHRcdFx0XHRwcm9wczogbm9kZVtBVFRSX0tFWV1cblx0XHRcdH0sXG5cdFx0XHRfcmVuZGVyZWRDaGlsZHJlbjogY2hpbGROb2Rlcy5tYXAoZnVuY3Rpb24gKGNoaWxkKSB7XG5cdFx0XHRcdGlmIChjaGlsZC5fY29tcG9uZW50KSB7XG5cdFx0XHRcdFx0cmV0dXJuIHVwZGF0ZVJlYWN0Q29tcG9uZW50KGNoaWxkLl9jb21wb25lbnQpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiB1cGRhdGVSZWFjdENvbXBvbmVudChjaGlsZCk7XG5cdFx0XHR9KSxcblx0XHRcdF9zdHJpbmdUZXh0OiBpc1RleHQgPyBub2RlLnRleHRDb250ZW50IDogbnVsbCxcblxuXHRcdFx0Ly8gLS0tIEFkZGl0aW9uYWwgcHJvcGVydGllcyB1c2VkIGJ5IHByZWFjdCBkZXZ0b29sc1xuXG5cdFx0XHQvLyBBIGZsYWcgaW5kaWNhdGluZyB3aGV0aGVyIHRoZSBkZXZ0b29scyBoYXZlIGJlZW4gbm90aWZpZWQgYWJvdXQgdGhlXG5cdFx0XHQvLyBleGlzdGVuY2Ugb2YgdGhpcyBjb21wb25lbnQgaW5zdGFuY2UgeWV0LlxuXHRcdFx0Ly8gVGhpcyBpcyB1c2VkIHRvIHNlbmQgdGhlIGFwcHJvcHJpYXRlIG5vdGlmaWNhdGlvbnMgd2hlbiBET00gY29tcG9uZW50c1xuXHRcdFx0Ly8gYXJlIGFkZGVkIG9yIHVwZGF0ZWQgYmV0d2VlbiBjb21wb3NpdGUgY29tcG9uZW50IHVwZGF0ZXMuXG5cdFx0XHRfaW5EZXZUb29sczogZmFsc2UsXG5cdFx0XHRub2RlOiBub2RlXG5cdFx0fTtcblx0fVxuXG5cdC8qKlxuXHQgKiBSZXR1cm4gdGhlIG5hbWUgb2YgYSBjb21wb25lbnQgY3JlYXRlZCBieSBhIGBSZWFjdEVsZW1lbnRgLWxpa2Ugb2JqZWN0LlxuXHQgKlxuXHQgKiBAcGFyYW0ge1JlYWN0RWxlbWVudH0gZWxlbWVudFxuXHQgKi9cblx0ZnVuY3Rpb24gdHlwZU5hbWUoZWxlbWVudCkge1xuXHRcdGlmICh0eXBlb2YgZWxlbWVudC50eXBlID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHRyZXR1cm4gZWxlbWVudC50eXBlLmRpc3BsYXlOYW1lIHx8IGVsZW1lbnQudHlwZS5uYW1lO1xuXHRcdH1cblx0XHRyZXR1cm4gZWxlbWVudC50eXBlO1xuXHR9XG5cblx0LyoqXG5cdCAqIFJldHVybiBhIFJlYWN0Q29tcG9zaXRlQ29tcG9uZW50LWNvbXBhdGlibGUgb2JqZWN0IGZvciBhIGdpdmVuIHByZWFjdFxuXHQgKiBjb21wb25lbnQgaW5zdGFuY2UuXG5cdCAqXG5cdCAqIFRoaXMgaW1wbGVtZW50cyB0aGUgc3Vic2V0IG9mIHRoZSBSZWFjdENvbXBvc2l0ZUNvbXBvbmVudCBpbnRlcmZhY2UgdGhhdFxuXHQgKiB0aGUgRGV2VG9vbHMgcmVxdWlyZXMgaW4gb3JkZXIgdG8gd2FsayB0aGUgY29tcG9uZW50IHRyZWUgYW5kIGluc3BlY3QgdGhlXG5cdCAqIGNvbXBvbmVudCdzIHByb3BlcnRpZXMuXG5cdCAqXG5cdCAqIFNlZSBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QtZGV2dG9vbHMvYmxvYi9lMzFlYzU4MjUzNDJlZGE1NzBhY2ZjOWJjYjQzYTQ0MjU4ZmNlYjI4L2JhY2tlbmQvZ2V0RGF0YS5qc1xuXHQgKi9cblx0ZnVuY3Rpb24gY3JlYXRlUmVhY3RDb21wb3NpdGVDb21wb25lbnQoY29tcG9uZW50KSB7XG5cdFx0dmFyIF9jdXJyZW50RWxlbWVudCA9IGNyZWF0ZVJlYWN0RWxlbWVudChjb21wb25lbnQpO1xuXHRcdHZhciBub2RlID0gY29tcG9uZW50LmJhc2U7XG5cblx0XHR2YXIgaW5zdGFuY2UgPSB7XG5cdFx0XHQvLyAtLS0gUmVhY3RET01Db21wb25lbnQgcHJvcGVydGllc1xuXHRcdFx0Z2V0TmFtZTogZnVuY3Rpb24gZ2V0TmFtZSgpIHtcblx0XHRcdFx0cmV0dXJuIHR5cGVOYW1lKF9jdXJyZW50RWxlbWVudCk7XG5cdFx0XHR9LFxuXG5cdFx0XHRfY3VycmVudEVsZW1lbnQ6IGNyZWF0ZVJlYWN0RWxlbWVudChjb21wb25lbnQpLFxuXHRcdFx0cHJvcHM6IGNvbXBvbmVudC5wcm9wcyxcblx0XHRcdHN0YXRlOiBjb21wb25lbnQuc3RhdGUsXG5cdFx0XHRmb3JjZVVwZGF0ZTogY29tcG9uZW50LmZvcmNlVXBkYXRlICYmIGNvbXBvbmVudC5mb3JjZVVwZGF0ZS5iaW5kKGNvbXBvbmVudCksXG5cdFx0XHRzZXRTdGF0ZTogY29tcG9uZW50LnNldFN0YXRlICYmIGNvbXBvbmVudC5zZXRTdGF0ZS5iaW5kKGNvbXBvbmVudCksXG5cblx0XHRcdC8vIC0tLSBBZGRpdGlvbmFsIHByb3BlcnRpZXMgdXNlZCBieSBwcmVhY3QgZGV2dG9vbHNcblx0XHRcdG5vZGU6IG5vZGVcblx0XHR9O1xuXG5cdFx0Ly8gUmVhY3QgRGV2VG9vbHMgZXhwb3NlcyB0aGUgYF9pbnN0YW5jZWAgZmllbGQgb2YgdGhlIHNlbGVjdGVkIGl0ZW0gaW4gdGhlXG5cdFx0Ly8gY29tcG9uZW50IHRyZWUgYXMgYCRyYCBpbiB0aGUgY29uc29sZS4gIGBfaW5zdGFuY2VgIG11c3QgcmVmZXIgdG8gYVxuXHRcdC8vIFJlYWN0IENvbXBvbmVudCAob3IgY29tcGF0aWJsZSkgY2xhc3MgaW5zdGFuY2Ugd2l0aCBgcHJvcHNgIGFuZCBgc3RhdGVgXG5cdFx0Ly8gZmllbGRzIGFuZCBgc2V0U3RhdGUoKWAsIGBmb3JjZVVwZGF0ZSgpYCBtZXRob2RzLlxuXHRcdGluc3RhbmNlLl9pbnN0YW5jZSA9IGNvbXBvbmVudDtcblxuXHRcdC8vIElmIHRoZSByb290IG5vZGUgcmV0dXJuZWQgYnkgdGhpcyBjb21wb25lbnQgaW5zdGFuY2UncyByZW5kZXIgZnVuY3Rpb25cblx0XHQvLyB3YXMgaXRzZWxmIGEgY29tcG9zaXRlIGNvbXBvbmVudCwgdGhlcmUgd2lsbCBiZSBhIGBfY29tcG9uZW50YCBwcm9wZXJ0eVxuXHRcdC8vIGNvbnRhaW5pbmcgdGhlIGNoaWxkIGNvbXBvbmVudCBpbnN0YW5jZS5cblx0XHRpZiAoY29tcG9uZW50Ll9jb21wb25lbnQpIHtcblx0XHRcdGluc3RhbmNlLl9yZW5kZXJlZENvbXBvbmVudCA9IHVwZGF0ZVJlYWN0Q29tcG9uZW50KGNvbXBvbmVudC5fY29tcG9uZW50KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly8gT3RoZXJ3aXNlLCBpZiB0aGUgcmVuZGVyKCkgZnVuY3Rpb24gcmV0dXJuZWQgYW4gSFRNTC9TVkcgZWxlbWVudCxcblx0XHRcdC8vIGNyZWF0ZSBhIFJlYWN0RE9NQ29tcG9uZW50LWxpa2Ugb2JqZWN0IGZvciB0aGUgRE9NIG5vZGUgaXRzZWxmLlxuXHRcdFx0aW5zdGFuY2UuX3JlbmRlcmVkQ29tcG9uZW50ID0gdXBkYXRlUmVhY3RDb21wb25lbnQobm9kZSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGluc3RhbmNlO1xuXHR9XG5cblx0LyoqXG5cdCAqIE1hcCBvZiBDb21wb25lbnR8Tm9kZSB0byBSZWFjdERPTUNvbXBvbmVudHxSZWFjdENvbXBvc2l0ZUNvbXBvbmVudC1saWtlXG5cdCAqIG9iamVjdC5cblx0ICpcblx0ICogVGhlIHNhbWUgUmVhY3QqQ29tcG9uZW50IGluc3RhbmNlIG11c3QgYmUgdXNlZCB3aGVuIG5vdGlmeWluZyBkZXZ0b29sc1xuXHQgKiBhYm91dCB0aGUgaW5pdGlhbCBtb3VudCBvZiBhIGNvbXBvbmVudCBhbmQgc3Vic2VxdWVudCB1cGRhdGVzLlxuXHQgKi9cblx0dmFyIGluc3RhbmNlTWFwID0gdHlwZW9mIE1hcCA9PT0gJ2Z1bmN0aW9uJyAmJiBuZXcgTWFwKCk7XG5cblx0LyoqXG5cdCAqIFVwZGF0ZSAoYW5kIGNyZWF0ZSBpZiBuZWNlc3NhcnkpIHRoZSBSZWFjdERPTUNvbXBvbmVudHxSZWFjdENvbXBvc2l0ZUNvbXBvbmVudC1saWtlXG5cdCAqIGluc3RhbmNlIGZvciBhIGdpdmVuIHByZWFjdCBjb21wb25lbnQgaW5zdGFuY2Ugb3IgRE9NIE5vZGUuXG5cdCAqXG5cdCAqIEBwYXJhbSB7Q29tcG9uZW50fE5vZGV9IGNvbXBvbmVudE9yTm9kZVxuXHQgKi9cblx0ZnVuY3Rpb24gdXBkYXRlUmVhY3RDb21wb25lbnQoY29tcG9uZW50T3JOb2RlKSB7XG5cdFx0dmFyIG5ld0luc3RhbmNlID0gY29tcG9uZW50T3JOb2RlIGluc3RhbmNlb2YgTm9kZSA/IGNyZWF0ZVJlYWN0RE9NQ29tcG9uZW50KGNvbXBvbmVudE9yTm9kZSkgOiBjcmVhdGVSZWFjdENvbXBvc2l0ZUNvbXBvbmVudChjb21wb25lbnRPck5vZGUpO1xuXHRcdGlmIChpbnN0YW5jZU1hcC5oYXMoY29tcG9uZW50T3JOb2RlKSkge1xuXHRcdFx0dmFyIGluc3QgPSBpbnN0YW5jZU1hcC5nZXQoY29tcG9uZW50T3JOb2RlKTtcblx0XHRcdE9iamVjdC5hc3NpZ24oaW5zdCwgbmV3SW5zdGFuY2UpO1xuXHRcdFx0cmV0dXJuIGluc3Q7XG5cdFx0fVxuXHRcdGluc3RhbmNlTWFwLnNldChjb21wb25lbnRPck5vZGUsIG5ld0luc3RhbmNlKTtcblx0XHRyZXR1cm4gbmV3SW5zdGFuY2U7XG5cdH1cblxuXHRmdW5jdGlvbiBuZXh0Um9vdEtleShyb290cykge1xuXHRcdHJldHVybiAnLicgKyBPYmplY3Qua2V5cyhyb290cykubGVuZ3RoO1xuXHR9XG5cblx0LyoqXG5cdCAqIEZpbmQgYWxsIHJvb3QgY29tcG9uZW50IGluc3RhbmNlcyByZW5kZXJlZCBieSBwcmVhY3QgaW4gYG5vZGVgJ3MgY2hpbGRyZW5cblx0ICogYW5kIGFkZCB0aGVtIHRvIHRoZSBgcm9vdHNgIG1hcC5cblx0ICpcblx0ICogQHBhcmFtIHtET01FbGVtZW50fSBub2RlXG5cdCAqIEBwYXJhbSB7W2tleTogc3RyaW5nXSA9PiBSZWFjdERPTUNvbXBvbmVudHxSZWFjdENvbXBvc2l0ZUNvbXBvbmVudH1cblx0ICovXG5cdGZ1bmN0aW9uIGZpbmRSb290cyhub2RlLCByb290cykge1xuXHRcdEFycmF5LmZyb20obm9kZS5jaGlsZE5vZGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCkge1xuXHRcdFx0aWYgKGNoaWxkLl9jb21wb25lbnQpIHtcblx0XHRcdFx0cm9vdHNbbmV4dFJvb3RLZXkocm9vdHMpXSA9IHVwZGF0ZVJlYWN0Q29tcG9uZW50KGNoaWxkLl9jb21wb25lbnQpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZmluZFJvb3RzKGNoaWxkLCByb290cyk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH1cblxuXHQvKipcblx0ICogQ3JlYXRlIGEgYnJpZGdlIGZvciBleHBvc2luZyBwcmVhY3QncyBjb21wb25lbnQgdHJlZSB0byBSZWFjdCBEZXZUb29scy5cblx0ICpcblx0ICogSXQgY3JlYXRlcyBpbXBsZW1lbnRhdGlvbnMgb2YgdGhlIGludGVyZmFjZXMgdGhhdCBSZWFjdERPTSBwYXNzZXMgdG9cblx0ICogZGV2dG9vbHMgdG8gZW5hYmxlIGl0IHRvIHF1ZXJ5IHRoZSBjb21wb25lbnQgdHJlZSBhbmQgaG9vayBpbnRvIGNvbXBvbmVudFxuXHQgKiB1cGRhdGVzLlxuXHQgKlxuXHQgKiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0L2Jsb2IvNTlmZjc3NDllZGEwY2Q4NThkNWVlNTY4MzE1YmNiYTFiZTc1YTFjYS9zcmMvcmVuZGVyZXJzL2RvbS9SZWFjdERPTS5qc1xuXHQgKiBmb3IgaG93IFJlYWN0RE9NIGV4cG9ydHMgaXRzIGludGVybmFscyBmb3IgdXNlIGJ5IHRoZSBkZXZ0b29scyBhbmRcblx0ICogdGhlIGBhdHRhY2hSZW5kZXJlcigpYCBmdW5jdGlvbiBpblxuXHQgKiBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QtZGV2dG9vbHMvYmxvYi9lMzFlYzU4MjUzNDJlZGE1NzBhY2ZjOWJjYjQzYTQ0MjU4ZmNlYjI4L2JhY2tlbmQvYXR0YWNoUmVuZGVyZXIuanNcblx0ICogZm9yIGhvdyB0aGUgZGV2dG9vbHMgY29uc3VtZXMgdGhlIHJlc3VsdGluZyBvYmplY3RzLlxuXHQgKi9cblx0ZnVuY3Rpb24gY3JlYXRlRGV2VG9vbHNCcmlkZ2UoKSB7XG5cdFx0Ly8gVGhlIGRldnRvb2xzIGhhcyBkaWZmZXJlbnQgcGF0aHMgZm9yIGludGVyYWN0aW5nIHdpdGggdGhlIHJlbmRlcmVycyBmcm9tXG5cdFx0Ly8gUmVhY3QgTmF0aXZlLCBsZWdhY3kgUmVhY3QgRE9NIGFuZCBjdXJyZW50IFJlYWN0IERPTS5cblx0XHQvL1xuXHRcdC8vIEhlcmUgd2UgZW11bGF0ZSB0aGUgaW50ZXJmYWNlIGZvciB0aGUgY3VycmVudCBSZWFjdCBET00gKHYxNSspIGxpYi5cblxuXHRcdC8vIFJlYWN0RE9NQ29tcG9uZW50VHJlZS1saWtlIG9iamVjdFxuXHRcdHZhciBDb21wb25lbnRUcmVlID0ge1xuXHRcdFx0Z2V0Tm9kZUZyb21JbnN0YW5jZTogZnVuY3Rpb24gZ2V0Tm9kZUZyb21JbnN0YW5jZShpbnN0YW5jZSkge1xuXHRcdFx0XHRyZXR1cm4gaW5zdGFuY2Uubm9kZTtcblx0XHRcdH0sXG5cdFx0XHRnZXRDbG9zZXN0SW5zdGFuY2VGcm9tTm9kZTogZnVuY3Rpb24gZ2V0Q2xvc2VzdEluc3RhbmNlRnJvbU5vZGUobm9kZSkge1xuXHRcdFx0XHR3aGlsZSAobm9kZSAmJiAhbm9kZS5fY29tcG9uZW50KSB7XG5cdFx0XHRcdFx0bm9kZSA9IG5vZGUucGFyZW50Tm9kZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gbm9kZSA/IHVwZGF0ZVJlYWN0Q29tcG9uZW50KG5vZGUuX2NvbXBvbmVudCkgOiBudWxsO1xuXHRcdFx0fVxuXHRcdH07XG5cblx0XHQvLyBNYXAgb2Ygcm9vdCBJRCAodGhlIElEIGlzIHVuaW1wb3J0YW50KSB0byBjb21wb25lbnQgaW5zdGFuY2UuXG5cdFx0dmFyIHJvb3RzID0ge307XG5cdFx0ZmluZFJvb3RzKGRvY3VtZW50LmJvZHksIHJvb3RzKTtcblxuXHRcdC8vIFJlYWN0TW91bnQtbGlrZSBvYmplY3Rcblx0XHQvL1xuXHRcdC8vIFVzZWQgYnkgZGV2dG9vbHMgdG8gZGlzY292ZXIgdGhlIGxpc3Qgb2Ygcm9vdCBjb21wb25lbnQgaW5zdGFuY2VzIGFuZCBnZXRcblx0XHQvLyBub3RpZmllZCB3aGVuIG5ldyByb290IGNvbXBvbmVudHMgYXJlIHJlbmRlcmVkLlxuXHRcdHZhciBNb3VudCA9IHtcblx0XHRcdF9pbnN0YW5jZXNCeVJlYWN0Um9vdElEOiByb290cyxcblxuXHRcdFx0Ly8gU3R1YiAtIFJlYWN0IERldlRvb2xzIGV4cGVjdHMgdG8gZmluZCB0aGlzIG1ldGhvZCBhbmQgcmVwbGFjZSBpdFxuXHRcdFx0Ly8gd2l0aCBhIHdyYXBwZXIgaW4gb3JkZXIgdG8gb2JzZXJ2ZSBuZXcgcm9vdCBjb21wb25lbnRzIGJlaW5nIGFkZGVkXG5cdFx0XHRfcmVuZGVyTmV3Um9vdENvbXBvbmVudDogZnVuY3Rpb24gX3JlbmRlck5ld1Jvb3RDb21wb25lbnQoKSAvKiBpbnN0YW5jZSwgLi4uICove31cblx0XHR9O1xuXG5cdFx0Ly8gUmVhY3RSZWNvbmNpbGVyLWxpa2Ugb2JqZWN0XG5cdFx0dmFyIFJlY29uY2lsZXIgPSB7XG5cdFx0XHQvLyBTdHVicyAtIFJlYWN0IERldlRvb2xzIGV4cGVjdHMgdG8gZmluZCB0aGVzZSBtZXRob2RzIGFuZCByZXBsYWNlIHRoZW1cblx0XHRcdC8vIHdpdGggd3JhcHBlcnMgaW4gb3JkZXIgdG8gb2JzZXJ2ZSBjb21wb25lbnRzIGJlaW5nIG1vdW50ZWQsIHVwZGF0ZWQgYW5kXG5cdFx0XHQvLyB1bm1vdW50ZWRcblx0XHRcdG1vdW50Q29tcG9uZW50OiBmdW5jdGlvbiBtb3VudENvbXBvbmVudCgpIC8qIGluc3RhbmNlLCAuLi4gKi97fSxcblx0XHRcdHBlcmZvcm1VcGRhdGVJZk5lY2Vzc2FyeTogZnVuY3Rpb24gcGVyZm9ybVVwZGF0ZUlmTmVjZXNzYXJ5KCkgLyogaW5zdGFuY2UsIC4uLiAqL3t9LFxuXHRcdFx0cmVjZWl2ZUNvbXBvbmVudDogZnVuY3Rpb24gcmVjZWl2ZUNvbXBvbmVudCgpIC8qIGluc3RhbmNlLCAuLi4gKi97fSxcblx0XHRcdHVubW91bnRDb21wb25lbnQ6IGZ1bmN0aW9uIHVubW91bnRDb21wb25lbnQoKSAvKiBpbnN0YW5jZSwgLi4uICove31cblx0XHR9O1xuXG5cdFx0LyoqIE5vdGlmeSBkZXZ0b29scyB0aGF0IGEgbmV3IGNvbXBvbmVudCBpbnN0YW5jZSBoYXMgYmVlbiBtb3VudGVkIGludG8gdGhlIERPTS4gKi9cblx0XHR2YXIgY29tcG9uZW50QWRkZWQgPSBmdW5jdGlvbiBjb21wb25lbnRBZGRlZChjb21wb25lbnQpIHtcblx0XHRcdHZhciBpbnN0YW5jZSA9IHVwZGF0ZVJlYWN0Q29tcG9uZW50KGNvbXBvbmVudCk7XG5cdFx0XHRpZiAoaXNSb290Q29tcG9uZW50KGNvbXBvbmVudCkpIHtcblx0XHRcdFx0aW5zdGFuY2UuX3Jvb3RJRCA9IG5leHRSb290S2V5KHJvb3RzKTtcblx0XHRcdFx0cm9vdHNbaW5zdGFuY2UuX3Jvb3RJRF0gPSBpbnN0YW5jZTtcblx0XHRcdFx0TW91bnQuX3JlbmRlck5ld1Jvb3RDb21wb25lbnQoaW5zdGFuY2UpO1xuXHRcdFx0fVxuXHRcdFx0dmlzaXROb25Db21wb3NpdGVDaGlsZHJlbihpbnN0YW5jZSwgZnVuY3Rpb24gKGNoaWxkSW5zdCkge1xuXHRcdFx0XHRjaGlsZEluc3QuX2luRGV2VG9vbHMgPSB0cnVlO1xuXHRcdFx0XHRSZWNvbmNpbGVyLm1vdW50Q29tcG9uZW50KGNoaWxkSW5zdCk7XG5cdFx0XHR9KTtcblx0XHRcdFJlY29uY2lsZXIubW91bnRDb21wb25lbnQoaW5zdGFuY2UpO1xuXHRcdH07XG5cblx0XHQvKiogTm90aWZ5IGRldnRvb2xzIHRoYXQgYSBjb21wb25lbnQgaGFzIGJlZW4gdXBkYXRlZCB3aXRoIG5ldyBwcm9wcy9zdGF0ZS4gKi9cblx0XHR2YXIgY29tcG9uZW50VXBkYXRlZCA9IGZ1bmN0aW9uIGNvbXBvbmVudFVwZGF0ZWQoY29tcG9uZW50KSB7XG5cdFx0XHR2YXIgcHJldlJlbmRlcmVkQ2hpbGRyZW4gPSBbXTtcblx0XHRcdHZhciBpbnN0YW5jZSA9IGluc3RhbmNlTWFwLmdldChjb21wb25lbnQpO1xuXHRcdFx0aWYgKGluc3RhbmNlKSB7XG5cdFx0XHRcdHZpc2l0Tm9uQ29tcG9zaXRlQ2hpbGRyZW4oaW5zdGFuY2UsIGZ1bmN0aW9uIChjaGlsZEluc3QpIHtcblx0XHRcdFx0XHRwcmV2UmVuZGVyZWRDaGlsZHJlbi5wdXNoKGNoaWxkSW5zdCk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdFx0Ly8gTm90aWZ5IGRldnRvb2xzIGFib3V0IHVwZGF0ZXMgdG8gdGhpcyBjb21wb25lbnQgYW5kIGFueSBub24tY29tcG9zaXRlXG5cdFx0XHQvLyBjaGlsZHJlblxuXHRcdFx0aW5zdGFuY2UgPSB1cGRhdGVSZWFjdENvbXBvbmVudChjb21wb25lbnQpO1xuXG5cdFx0XHRSZWNvbmNpbGVyLnJlY2VpdmVDb21wb25lbnQoaW5zdGFuY2UpO1xuXHRcdFx0dmlzaXROb25Db21wb3NpdGVDaGlsZHJlbihpbnN0YW5jZSwgZnVuY3Rpb24gKGNoaWxkSW5zdCkge1xuXHRcdFx0XHRpZiAoIWNoaWxkSW5zdC5faW5EZXZUb29scykge1xuXHRcdFx0XHRcdC8vIE5ldyBET00gY2hpbGQgY29tcG9uZW50XG5cdFx0XHRcdFx0Y2hpbGRJbnN0Ll9pbkRldlRvb2xzID0gdHJ1ZTtcblx0XHRcdFx0XHRSZWNvbmNpbGVyLm1vdW50Q29tcG9uZW50KGNoaWxkSW5zdCk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0Ly8gVXBkYXRlZCBET00gY2hpbGQgY29tcG9uZW50XG5cdFx0XHRcdFx0UmVjb25jaWxlci5yZWNlaXZlQ29tcG9uZW50KGNoaWxkSW5zdCk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXG5cdFx0XHQvLyBGb3IgYW55IG5vbi1jb21wb3NpdGUgY2hpbGRyZW4gdGhhdCB3ZXJlIHJlbW92ZWQgYnkgdGhlIGxhdGVzdCByZW5kZXIsXG5cdFx0XHQvLyByZW1vdmUgdGhlIGNvcnJlc3BvbmRpbmcgUmVhY3RET01Db21wb25lbnQtbGlrZSBpbnN0YW5jZXMgYW5kIG5vdGlmeVxuXHRcdFx0Ly8gdGhlIGRldnRvb2xzXG5cdFx0XHRwcmV2UmVuZGVyZWRDaGlsZHJlbi5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZEluc3QpIHtcblx0XHRcdFx0aWYgKCFkb2N1bWVudC5ib2R5LmNvbnRhaW5zKGNoaWxkSW5zdC5ub2RlKSkge1xuXHRcdFx0XHRcdGluc3RhbmNlTWFwLmRlbGV0ZShjaGlsZEluc3Qubm9kZSk7XG5cdFx0XHRcdFx0UmVjb25jaWxlci51bm1vdW50Q29tcG9uZW50KGNoaWxkSW5zdCk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdH07XG5cblx0XHQvKiogTm90aWZ5IGRldnRvb2xzIHRoYXQgYSBjb21wb25lbnQgaGFzIGJlZW4gdW5tb3VudGVkIGZyb20gdGhlIERPTS4gKi9cblx0XHR2YXIgY29tcG9uZW50UmVtb3ZlZCA9IGZ1bmN0aW9uIGNvbXBvbmVudFJlbW92ZWQoY29tcG9uZW50KSB7XG5cdFx0XHR2YXIgaW5zdGFuY2UgPSB1cGRhdGVSZWFjdENvbXBvbmVudChjb21wb25lbnQpO1xuXHRcdFx0dmlzaXROb25Db21wb3NpdGVDaGlsZHJlbihmdW5jdGlvbiAoY2hpbGRJbnN0KSB7XG5cdFx0XHRcdGluc3RhbmNlTWFwLmRlbGV0ZShjaGlsZEluc3Qubm9kZSk7XG5cdFx0XHRcdFJlY29uY2lsZXIudW5tb3VudENvbXBvbmVudChjaGlsZEluc3QpO1xuXHRcdFx0fSk7XG5cdFx0XHRSZWNvbmNpbGVyLnVubW91bnRDb21wb25lbnQoaW5zdGFuY2UpO1xuXHRcdFx0aW5zdGFuY2VNYXAuZGVsZXRlKGNvbXBvbmVudCk7XG5cdFx0XHRpZiAoaW5zdGFuY2UuX3Jvb3RJRCkge1xuXHRcdFx0XHRkZWxldGUgcm9vdHNbaW5zdGFuY2UuX3Jvb3RJRF07XG5cdFx0XHR9XG5cdFx0fTtcblxuXHRcdHJldHVybiB7XG5cdFx0XHRjb21wb25lbnRBZGRlZDogY29tcG9uZW50QWRkZWQsXG5cdFx0XHRjb21wb25lbnRVcGRhdGVkOiBjb21wb25lbnRVcGRhdGVkLFxuXHRcdFx0Y29tcG9uZW50UmVtb3ZlZDogY29tcG9uZW50UmVtb3ZlZCxcblxuXHRcdFx0Ly8gSW50ZXJmYWNlcyBwYXNzZWQgdG8gZGV2dG9vbHMgdmlhIF9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXy5pbmplY3QoKVxuXHRcdFx0Q29tcG9uZW50VHJlZTogQ29tcG9uZW50VHJlZSxcblx0XHRcdE1vdW50OiBNb3VudCxcblx0XHRcdFJlY29uY2lsZXI6IFJlY29uY2lsZXJcblx0XHR9O1xuXHR9XG5cblx0LyoqXG5cdCAqIFJldHVybiBgdHJ1ZWAgaWYgYSBwcmVhY3QgY29tcG9uZW50IGlzIGEgdG9wIGxldmVsIGNvbXBvbmVudCByZW5kZXJlZCBieVxuXHQgKiBgcmVuZGVyKClgIGludG8gYSBjb250YWluZXIgRWxlbWVudC5cblx0ICovXG5cdGZ1bmN0aW9uIGlzUm9vdENvbXBvbmVudChjb21wb25lbnQpIHtcblx0XHQvLyBgX3BhcmVudENvbXBvbmVudGAgaXMgYWN0dWFsbHkgYF9fdWAgYWZ0ZXIgbWluaWZpY2F0aW9uXG5cdFx0aWYgKGNvbXBvbmVudC5fcGFyZW50Q29tcG9uZW50IHx8IGNvbXBvbmVudC5fX3UpIHtcblx0XHRcdC8vIENvbXBvbmVudCB3aXRoIGEgY29tcG9zaXRlIHBhcmVudFxuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0XHRpZiAoY29tcG9uZW50LmJhc2UucGFyZW50RWxlbWVudCAmJiBjb21wb25lbnQuYmFzZS5wYXJlbnRFbGVtZW50W0FUVFJfS0VZXSkge1xuXHRcdFx0Ly8gQ29tcG9uZW50IHdpdGggYSBwYXJlbnQgRE9NIGVsZW1lbnQgcmVuZGVyZWQgYnkgUHJlYWN0XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHRcdHJldHVybiB0cnVlO1xuXHR9XG5cblx0LyoqXG5cdCAqIFZpc2l0IGFsbCBjaGlsZCBpbnN0YW5jZXMgb2YgYSBSZWFjdENvbXBvc2l0ZUNvbXBvbmVudC1saWtlIG9iamVjdCB0aGF0IGFyZVxuXHQgKiBub3QgY29tcG9zaXRlIGNvbXBvbmVudHMgKGllLiB0aGV5IHJlcHJlc2VudCBET00gZWxlbWVudHMgb3IgdGV4dClcblx0ICpcblx0ICogQHBhcmFtIHtDb21wb25lbnR9IGNvbXBvbmVudFxuXHQgKiBAcGFyYW0geyhDb21wb25lbnQpID0+IHZvaWR9IHZpc2l0b3Jcblx0ICovXG5cdGZ1bmN0aW9uIHZpc2l0Tm9uQ29tcG9zaXRlQ2hpbGRyZW4oY29tcG9uZW50LCB2aXNpdG9yKSB7XG5cdFx0aWYgKCFjb21wb25lbnQpIHJldHVybjtcblx0XHRpZiAoY29tcG9uZW50Ll9yZW5kZXJlZENvbXBvbmVudCkge1xuXHRcdFx0aWYgKCFjb21wb25lbnQuX3JlbmRlcmVkQ29tcG9uZW50Ll9jb21wb25lbnQpIHtcblx0XHRcdFx0dmlzaXRvcihjb21wb25lbnQuX3JlbmRlcmVkQ29tcG9uZW50KTtcblx0XHRcdFx0dmlzaXROb25Db21wb3NpdGVDaGlsZHJlbihjb21wb25lbnQuX3JlbmRlcmVkQ29tcG9uZW50LCB2aXNpdG9yKTtcblx0XHRcdH1cblx0XHR9IGVsc2UgaWYgKGNvbXBvbmVudC5fcmVuZGVyZWRDaGlsZHJlbikge1xuXHRcdFx0Y29tcG9uZW50Ll9yZW5kZXJlZENoaWxkcmVuLmZvckVhY2goZnVuY3Rpb24gKGNoaWxkKSB7XG5cdFx0XHRcdHZpc2l0b3IoY2hpbGQpO1xuXHRcdFx0XHRpZiAoIWNoaWxkLl9jb21wb25lbnQpIHZpc2l0Tm9uQ29tcG9zaXRlQ2hpbGRyZW4oY2hpbGQsIHZpc2l0b3IpO1xuXHRcdFx0fSk7XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIENyZWF0ZSBhIGJyaWRnZSBiZXR3ZWVuIHRoZSBwcmVhY3QgY29tcG9uZW50IHRyZWUgYW5kIFJlYWN0J3MgZGV2IHRvb2xzXG5cdCAqIGFuZCByZWdpc3RlciBpdC5cblx0ICpcblx0ICogQWZ0ZXIgdGhpcyBmdW5jdGlvbiBpcyBjYWxsZWQsIHRoZSBSZWFjdCBEZXYgVG9vbHMgc2hvdWxkIGJlIGFibGUgdG8gZGV0ZWN0XG5cdCAqIFwiUmVhY3RcIiBvbiB0aGUgcGFnZSBhbmQgc2hvdyB0aGUgY29tcG9uZW50IHRyZWUuXG5cdCAqXG5cdCAqIFRoaXMgZnVuY3Rpb24gaG9va3MgaW50byBwcmVhY3QgVk5vZGUgY3JlYXRpb24gaW4gb3JkZXIgdG8gZXhwb3NlIGZ1bmN0aW9uYWxcblx0ICogY29tcG9uZW50cyBjb3JyZWN0bHksIHNvIGl0IHNob3VsZCBiZSBjYWxsZWQgYmVmb3JlIHRoZSByb290IGNvbXBvbmVudChzKVxuXHQgKiBhcmUgcmVuZGVyZWQuXG5cdCAqXG5cdCAqIFJldHVybnMgYSBjbGVhbnVwIGZ1bmN0aW9uIHdoaWNoIHVucmVnaXN0ZXJzIHRoZSBob29rcy5cblx0ICovXG5cdGZ1bmN0aW9uIGluaXREZXZUb29scygpIHtcblx0XHRpZiAodHlwZW9mIF9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXyA9PT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRcdC8vIFJlYWN0IERldlRvb2xzIGFyZSBub3QgaW5zdGFsbGVkXG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Ly8gTm90aWZ5IGRldnRvb2xzIHdoZW4gcHJlYWN0IGNvbXBvbmVudHMgYXJlIG1vdW50ZWQsIHVwZGF0ZWQgb3IgdW5tb3VudGVkXG5cdFx0dmFyIGJyaWRnZSA9IGNyZWF0ZURldlRvb2xzQnJpZGdlKCk7XG5cblx0XHR2YXIgbmV4dEFmdGVyTW91bnQgPSBwcmVhY3Qub3B0aW9ucy5hZnRlck1vdW50O1xuXHRcdHByZWFjdC5vcHRpb25zLmFmdGVyTW91bnQgPSBmdW5jdGlvbiAoY29tcG9uZW50KSB7XG5cdFx0XHRicmlkZ2UuY29tcG9uZW50QWRkZWQoY29tcG9uZW50KTtcblx0XHRcdGlmIChuZXh0QWZ0ZXJNb3VudCkgbmV4dEFmdGVyTW91bnQoY29tcG9uZW50KTtcblx0XHR9O1xuXG5cdFx0dmFyIG5leHRBZnRlclVwZGF0ZSA9IHByZWFjdC5vcHRpb25zLmFmdGVyVXBkYXRlO1xuXHRcdHByZWFjdC5vcHRpb25zLmFmdGVyVXBkYXRlID0gZnVuY3Rpb24gKGNvbXBvbmVudCkge1xuXHRcdFx0YnJpZGdlLmNvbXBvbmVudFVwZGF0ZWQoY29tcG9uZW50KTtcblx0XHRcdGlmIChuZXh0QWZ0ZXJVcGRhdGUpIG5leHRBZnRlclVwZGF0ZShjb21wb25lbnQpO1xuXHRcdH07XG5cblx0XHR2YXIgbmV4dEJlZm9yZVVubW91bnQgPSBwcmVhY3Qub3B0aW9ucy5iZWZvcmVVbm1vdW50O1xuXHRcdHByZWFjdC5vcHRpb25zLmJlZm9yZVVubW91bnQgPSBmdW5jdGlvbiAoY29tcG9uZW50KSB7XG5cdFx0XHRicmlkZ2UuY29tcG9uZW50UmVtb3ZlZChjb21wb25lbnQpO1xuXHRcdFx0aWYgKG5leHRCZWZvcmVVbm1vdW50KSBuZXh0QmVmb3JlVW5tb3VudChjb21wb25lbnQpO1xuXHRcdH07XG5cblx0XHQvLyBOb3RpZnkgZGV2dG9vbHMgYWJvdXQgdGhpcyBpbnN0YW5jZSBvZiBcIlJlYWN0XCJcblx0XHRfX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX18uaW5qZWN0KGJyaWRnZSk7XG5cblx0XHRyZXR1cm4gZnVuY3Rpb24gKCkge1xuXHRcdFx0cHJlYWN0Lm9wdGlvbnMuYWZ0ZXJNb3VudCA9IG5leHRBZnRlck1vdW50O1xuXHRcdFx0cHJlYWN0Lm9wdGlvbnMuYWZ0ZXJVcGRhdGUgPSBuZXh0QWZ0ZXJVcGRhdGU7XG5cdFx0XHRwcmVhY3Qub3B0aW9ucy5iZWZvcmVVbm1vdW50ID0gbmV4dEJlZm9yZVVubW91bnQ7XG5cdFx0fTtcblx0fVxuXG5cdGluaXREZXZUb29scygpO1xuXG59KSkpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGV2dG9vbHMuanMubWFwXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvcHJlYWN0L2RldnRvb2xzLmpzXG4vLyBtb2R1bGUgaWQgPSAuLi9ub2RlX21vZHVsZXMvcHJlYWN0L2RldnRvb2xzLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gbWFpbiIsIi8qKiBWaXJ0dWFsIERPTSBOb2RlICovXG5mdW5jdGlvbiBWTm9kZSgpIHt9XG5cbi8qKiBHbG9iYWwgb3B0aW9uc1xuICpcdEBwdWJsaWNcbiAqXHRAbmFtZXNwYWNlIG9wdGlvbnMge09iamVjdH1cbiAqL1xudmFyIG9wdGlvbnMgPSB7XG5cblx0LyoqIElmIGB0cnVlYCwgYHByb3BgIGNoYW5nZXMgdHJpZ2dlciBzeW5jaHJvbm91cyBjb21wb25lbnQgdXBkYXRlcy5cbiAgKlx0QG5hbWUgc3luY0NvbXBvbmVudFVwZGF0ZXNcbiAgKlx0QHR5cGUgQm9vbGVhblxuICAqXHRAZGVmYXVsdCB0cnVlXG4gICovXG5cdC8vc3luY0NvbXBvbmVudFVwZGF0ZXM6IHRydWUsXG5cblx0LyoqIFByb2Nlc3NlcyBhbGwgY3JlYXRlZCBWTm9kZXMuXG4gICpcdEBwYXJhbSB7Vk5vZGV9IHZub2RlXHRBIG5ld2x5LWNyZWF0ZWQgVk5vZGUgdG8gbm9ybWFsaXplL3Byb2Nlc3NcbiAgKi9cblx0Ly92bm9kZSh2bm9kZSkgeyB9XG5cblx0LyoqIEhvb2sgaW52b2tlZCBhZnRlciBhIGNvbXBvbmVudCBpcyBtb3VudGVkLiAqL1xuXHQvLyBhZnRlck1vdW50KGNvbXBvbmVudCkgeyB9XG5cblx0LyoqIEhvb2sgaW52b2tlZCBhZnRlciB0aGUgRE9NIGlzIHVwZGF0ZWQgd2l0aCBhIGNvbXBvbmVudCdzIGxhdGVzdCByZW5kZXIuICovXG5cdC8vIGFmdGVyVXBkYXRlKGNvbXBvbmVudCkgeyB9XG5cblx0LyoqIEhvb2sgaW52b2tlZCBpbW1lZGlhdGVseSBiZWZvcmUgYSBjb21wb25lbnQgaXMgdW5tb3VudGVkLiAqL1xuXHQvLyBiZWZvcmVVbm1vdW50KGNvbXBvbmVudCkgeyB9XG59O1xuXG52YXIgc3RhY2sgPSBbXTtcblxudmFyIEVNUFRZX0NISUxEUkVOID0gW107XG5cbi8qKlxuICogSlNYL2h5cGVyc2NyaXB0IHJldml2ZXIuXG4gKiBAc2VlIGh0dHA6Ly9qYXNvbmZvcm1hdC5jb20vd3RmLWlzLWpzeFxuICogQmVuY2htYXJrczogaHR0cHM6Ly9lc2JlbmNoLmNvbS9iZW5jaC81N2VlOGY4ZTMzMGFiMDk5MDBhMWExYTBcbiAqXG4gKiBOb3RlOiB0aGlzIGlzIGV4cG9ydGVkIGFzIGJvdGggYGgoKWAgYW5kIGBjcmVhdGVFbGVtZW50KClgIGZvciBjb21wYXRpYmlsaXR5IHJlYXNvbnMuXG4gKlxuICogQ3JlYXRlcyBhIFZOb2RlICh2aXJ0dWFsIERPTSBlbGVtZW50KS4gQSB0cmVlIG9mIFZOb2RlcyBjYW4gYmUgdXNlZCBhcyBhIGxpZ2h0d2VpZ2h0IHJlcHJlc2VudGF0aW9uXG4gKiBvZiB0aGUgc3RydWN0dXJlIG9mIGEgRE9NIHRyZWUuIFRoaXMgc3RydWN0dXJlIGNhbiBiZSByZWFsaXplZCBieSByZWN1cnNpdmVseSBjb21wYXJpbmcgaXQgYWdhaW5zdFxuICogdGhlIGN1cnJlbnQgX2FjdHVhbF8gRE9NIHN0cnVjdHVyZSwgYW5kIGFwcGx5aW5nIG9ubHkgdGhlIGRpZmZlcmVuY2VzLlxuICpcbiAqIGBoKClgL2BjcmVhdGVFbGVtZW50KClgIGFjY2VwdHMgYW4gZWxlbWVudCBuYW1lLCBhIGxpc3Qgb2YgYXR0cmlidXRlcy9wcm9wcyxcbiAqIGFuZCBvcHRpb25hbGx5IGNoaWxkcmVuIHRvIGFwcGVuZCB0byB0aGUgZWxlbWVudC5cbiAqXG4gKiBAZXhhbXBsZSBUaGUgZm9sbG93aW5nIERPTSB0cmVlXG4gKlxuICogYDxkaXYgaWQ9XCJmb29cIiBuYW1lPVwiYmFyXCI+SGVsbG8hPC9kaXY+YFxuICpcbiAqIGNhbiBiZSBjb25zdHJ1Y3RlZCB1c2luZyB0aGlzIGZ1bmN0aW9uIGFzOlxuICpcbiAqIGBoKCdkaXYnLCB7IGlkOiAnZm9vJywgbmFtZSA6ICdiYXInIH0sICdIZWxsbyEnKTtgXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG5vZGVOYW1lXHRBbiBlbGVtZW50IG5hbWUuIEV4OiBgZGl2YCwgYGFgLCBgc3BhbmAsIGV0Yy5cbiAqIEBwYXJhbSB7T2JqZWN0fSBhdHRyaWJ1dGVzXHRBbnkgYXR0cmlidXRlcy9wcm9wcyB0byBzZXQgb24gdGhlIGNyZWF0ZWQgZWxlbWVudC5cbiAqIEBwYXJhbSByZXN0XHRcdFx0QWRkaXRpb25hbCBhcmd1bWVudHMgYXJlIHRha2VuIHRvIGJlIGNoaWxkcmVuIHRvIGFwcGVuZC4gQ2FuIGJlIGluZmluaXRlbHkgbmVzdGVkIEFycmF5cy5cbiAqXG4gKiBAcHVibGljXG4gKi9cbmZ1bmN0aW9uIGgobm9kZU5hbWUsIGF0dHJpYnV0ZXMpIHtcblx0dmFyIGNoaWxkcmVuID0gRU1QVFlfQ0hJTERSRU4sXG5cdCAgICBsYXN0U2ltcGxlLFxuXHQgICAgY2hpbGQsXG5cdCAgICBzaW1wbGUsXG5cdCAgICBpO1xuXHRmb3IgKGkgPSBhcmd1bWVudHMubGVuZ3RoOyBpLS0gPiAyOykge1xuXHRcdHN0YWNrLnB1c2goYXJndW1lbnRzW2ldKTtcblx0fVxuXHRpZiAoYXR0cmlidXRlcyAmJiBhdHRyaWJ1dGVzLmNoaWxkcmVuICE9IG51bGwpIHtcblx0XHRpZiAoIXN0YWNrLmxlbmd0aCkgc3RhY2sucHVzaChhdHRyaWJ1dGVzLmNoaWxkcmVuKTtcblx0XHRkZWxldGUgYXR0cmlidXRlcy5jaGlsZHJlbjtcblx0fVxuXHR3aGlsZSAoc3RhY2subGVuZ3RoKSB7XG5cdFx0aWYgKChjaGlsZCA9IHN0YWNrLnBvcCgpKSAmJiBjaGlsZC5wb3AgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0Zm9yIChpID0gY2hpbGQubGVuZ3RoOyBpLS07KSB7XG5cdFx0XHRcdHN0YWNrLnB1c2goY2hpbGRbaV0pO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRpZiAodHlwZW9mIGNoaWxkID09PSAnYm9vbGVhbicpIGNoaWxkID0gbnVsbDtcblxuXHRcdFx0aWYgKHNpbXBsZSA9IHR5cGVvZiBub2RlTmFtZSAhPT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0XHRpZiAoY2hpbGQgPT0gbnVsbCkgY2hpbGQgPSAnJztlbHNlIGlmICh0eXBlb2YgY2hpbGQgPT09ICdudW1iZXInKSBjaGlsZCA9IFN0cmluZyhjaGlsZCk7ZWxzZSBpZiAodHlwZW9mIGNoaWxkICE9PSAnc3RyaW5nJykgc2ltcGxlID0gZmFsc2U7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChzaW1wbGUgJiYgbGFzdFNpbXBsZSkge1xuXHRcdFx0XHRjaGlsZHJlbltjaGlsZHJlbi5sZW5ndGggLSAxXSArPSBjaGlsZDtcblx0XHRcdH0gZWxzZSBpZiAoY2hpbGRyZW4gPT09IEVNUFRZX0NISUxEUkVOKSB7XG5cdFx0XHRcdGNoaWxkcmVuID0gW2NoaWxkXTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGNoaWxkcmVuLnB1c2goY2hpbGQpO1xuXHRcdFx0fVxuXG5cdFx0XHRsYXN0U2ltcGxlID0gc2ltcGxlO1xuXHRcdH1cblx0fVxuXG5cdHZhciBwID0gbmV3IFZOb2RlKCk7XG5cdHAubm9kZU5hbWUgPSBub2RlTmFtZTtcblx0cC5jaGlsZHJlbiA9IGNoaWxkcmVuO1xuXHRwLmF0dHJpYnV0ZXMgPSBhdHRyaWJ1dGVzID09IG51bGwgPyB1bmRlZmluZWQgOiBhdHRyaWJ1dGVzO1xuXHRwLmtleSA9IGF0dHJpYnV0ZXMgPT0gbnVsbCA/IHVuZGVmaW5lZCA6IGF0dHJpYnV0ZXMua2V5O1xuXG5cdC8vIGlmIGEgXCJ2bm9kZSBob29rXCIgaXMgZGVmaW5lZCwgcGFzcyBldmVyeSBjcmVhdGVkIFZOb2RlIHRvIGl0XG5cdGlmIChvcHRpb25zLnZub2RlICE9PSB1bmRlZmluZWQpIG9wdGlvbnMudm5vZGUocCk7XG5cblx0cmV0dXJuIHA7XG59XG5cbi8qKlxuICogIENvcHkgYWxsIHByb3BlcnRpZXMgZnJvbSBgcHJvcHNgIG9udG8gYG9iamAuXG4gKiAgQHBhcmFtIHtPYmplY3R9IG9ialx0XHRPYmplY3Qgb250byB3aGljaCBwcm9wZXJ0aWVzIHNob3VsZCBiZSBjb3BpZWQuXG4gKiAgQHBhcmFtIHtPYmplY3R9IHByb3BzXHRPYmplY3QgZnJvbSB3aGljaCB0byBjb3B5IHByb3BlcnRpZXMuXG4gKiAgQHJldHVybnMgb2JqXG4gKiAgQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gZXh0ZW5kKG9iaiwgcHJvcHMpIHtcbiAgZm9yICh2YXIgaSBpbiBwcm9wcykge1xuICAgIG9ialtpXSA9IHByb3BzW2ldO1xuICB9cmV0dXJuIG9iajtcbn1cblxuLyoqXG4gKiBDYWxsIGEgZnVuY3Rpb24gYXN5bmNocm9ub3VzbHksIGFzIHNvb24gYXMgcG9zc2libGUuIE1ha2VzXG4gKiB1c2Ugb2YgSFRNTCBQcm9taXNlIHRvIHNjaGVkdWxlIHRoZSBjYWxsYmFjayBpZiBhdmFpbGFibGUsXG4gKiBvdGhlcndpc2UgZmFsbGluZyBiYWNrIHRvIGBzZXRUaW1lb3V0YCAobWFpbmx5IGZvciBJRTwxMSkuXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAqL1xudmFyIGRlZmVyID0gdHlwZW9mIFByb21pc2UgPT0gJ2Z1bmN0aW9uJyA/IFByb21pc2UucmVzb2x2ZSgpLnRoZW4uYmluZChQcm9taXNlLnJlc29sdmUoKSkgOiBzZXRUaW1lb3V0O1xuXG4vKipcbiAqIENsb25lcyB0aGUgZ2l2ZW4gVk5vZGUsIG9wdGlvbmFsbHkgYWRkaW5nIGF0dHJpYnV0ZXMvcHJvcHMgYW5kIHJlcGxhY2luZyBpdHMgY2hpbGRyZW4uXG4gKiBAcGFyYW0ge1ZOb2RlfSB2bm9kZVx0XHRUaGUgdmlydHVhbCBET00gZWxlbWVudCB0byBjbG9uZVxuICogQHBhcmFtIHtPYmplY3R9IHByb3BzXHRBdHRyaWJ1dGVzL3Byb3BzIHRvIGFkZCB3aGVuIGNsb25pbmdcbiAqIEBwYXJhbSB7Vk5vZGV9IHJlc3RcdFx0QW55IGFkZGl0aW9uYWwgYXJndW1lbnRzIHdpbGwgYmUgdXNlZCBhcyByZXBsYWNlbWVudCBjaGlsZHJlbi5cbiAqL1xuZnVuY3Rpb24gY2xvbmVFbGVtZW50KHZub2RlLCBwcm9wcykge1xuICByZXR1cm4gaCh2bm9kZS5ub2RlTmFtZSwgZXh0ZW5kKGV4dGVuZCh7fSwgdm5vZGUuYXR0cmlidXRlcyksIHByb3BzKSwgYXJndW1lbnRzLmxlbmd0aCA+IDIgPyBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMikgOiB2bm9kZS5jaGlsZHJlbik7XG59XG5cbi8vIERPTSBwcm9wZXJ0aWVzIHRoYXQgc2hvdWxkIE5PVCBoYXZlIFwicHhcIiBhZGRlZCB3aGVuIG51bWVyaWNcbnZhciBJU19OT05fRElNRU5TSU9OQUwgPSAvYWNpdHxleCg/OnN8Z3xufHB8JCl8cnBofG93c3xtbmN8bnR3fGluZVtjaF18em9vfF5vcmQvaTtcblxuLyoqIE1hbmFnZWQgcXVldWUgb2YgZGlydHkgY29tcG9uZW50cyB0byBiZSByZS1yZW5kZXJlZCAqL1xuXG52YXIgaXRlbXMgPSBbXTtcblxuZnVuY3Rpb24gZW5xdWV1ZVJlbmRlcihjb21wb25lbnQpIHtcblx0aWYgKCFjb21wb25lbnQuX2RpcnR5ICYmIChjb21wb25lbnQuX2RpcnR5ID0gdHJ1ZSkgJiYgaXRlbXMucHVzaChjb21wb25lbnQpID09IDEpIHtcblx0XHQob3B0aW9ucy5kZWJvdW5jZVJlbmRlcmluZyB8fCBkZWZlcikocmVyZW5kZXIpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHJlcmVuZGVyKCkge1xuXHR2YXIgcCxcblx0ICAgIGxpc3QgPSBpdGVtcztcblx0aXRlbXMgPSBbXTtcblx0d2hpbGUgKHAgPSBsaXN0LnBvcCgpKSB7XG5cdFx0aWYgKHAuX2RpcnR5KSByZW5kZXJDb21wb25lbnQocCk7XG5cdH1cbn1cblxuLyoqXG4gKiBDaGVjayBpZiB0d28gbm9kZXMgYXJlIGVxdWl2YWxlbnQuXG4gKlxuICogQHBhcmFtIHtOb2RlfSBub2RlXHRcdFx0RE9NIE5vZGUgdG8gY29tcGFyZVxuICogQHBhcmFtIHtWTm9kZX0gdm5vZGVcdFx0XHRWaXJ0dWFsIERPTSBub2RlIHRvIGNvbXBhcmVcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2h5ZHJhdGluZz1mYWxzZV1cdElmIHRydWUsIGlnbm9yZXMgY29tcG9uZW50IGNvbnN0cnVjdG9ycyB3aGVuIGNvbXBhcmluZy5cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGlzU2FtZU5vZGVUeXBlKG5vZGUsIHZub2RlLCBoeWRyYXRpbmcpIHtcbiAgaWYgKHR5cGVvZiB2bm9kZSA9PT0gJ3N0cmluZycgfHwgdHlwZW9mIHZub2RlID09PSAnbnVtYmVyJykge1xuICAgIHJldHVybiBub2RlLnNwbGl0VGV4dCAhPT0gdW5kZWZpbmVkO1xuICB9XG4gIGlmICh0eXBlb2Ygdm5vZGUubm9kZU5hbWUgPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuICFub2RlLl9jb21wb25lbnRDb25zdHJ1Y3RvciAmJiBpc05hbWVkTm9kZShub2RlLCB2bm9kZS5ub2RlTmFtZSk7XG4gIH1cbiAgcmV0dXJuIGh5ZHJhdGluZyB8fCBub2RlLl9jb21wb25lbnRDb25zdHJ1Y3RvciA9PT0gdm5vZGUubm9kZU5hbWU7XG59XG5cbi8qKlxuICogQ2hlY2sgaWYgYW4gRWxlbWVudCBoYXMgYSBnaXZlbiBub2RlTmFtZSwgY2FzZS1pbnNlbnNpdGl2ZWx5LlxuICpcbiAqIEBwYXJhbSB7RWxlbWVudH0gbm9kZVx0QSBET00gRWxlbWVudCB0byBpbnNwZWN0IHRoZSBuYW1lIG9mLlxuICogQHBhcmFtIHtTdHJpbmd9IG5vZGVOYW1lXHRVbm5vcm1hbGl6ZWQgbmFtZSB0byBjb21wYXJlIGFnYWluc3QuXG4gKi9cbmZ1bmN0aW9uIGlzTmFtZWROb2RlKG5vZGUsIG5vZGVOYW1lKSB7XG4gIHJldHVybiBub2RlLm5vcm1hbGl6ZWROb2RlTmFtZSA9PT0gbm9kZU5hbWUgfHwgbm9kZS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpID09PSBub2RlTmFtZS50b0xvd2VyQ2FzZSgpO1xufVxuXG4vKipcbiAqIFJlY29uc3RydWN0IENvbXBvbmVudC1zdHlsZSBgcHJvcHNgIGZyb20gYSBWTm9kZS5cbiAqIEVuc3VyZXMgZGVmYXVsdC9mYWxsYmFjayB2YWx1ZXMgZnJvbSBgZGVmYXVsdFByb3BzYDpcbiAqIE93bi1wcm9wZXJ0aWVzIG9mIGBkZWZhdWx0UHJvcHNgIG5vdCBwcmVzZW50IGluIGB2bm9kZS5hdHRyaWJ1dGVzYCBhcmUgYWRkZWQuXG4gKlxuICogQHBhcmFtIHtWTm9kZX0gdm5vZGVcbiAqIEByZXR1cm5zIHtPYmplY3R9IHByb3BzXG4gKi9cbmZ1bmN0aW9uIGdldE5vZGVQcm9wcyh2bm9kZSkge1xuICB2YXIgcHJvcHMgPSBleHRlbmQoe30sIHZub2RlLmF0dHJpYnV0ZXMpO1xuICBwcm9wcy5jaGlsZHJlbiA9IHZub2RlLmNoaWxkcmVuO1xuXG4gIHZhciBkZWZhdWx0UHJvcHMgPSB2bm9kZS5ub2RlTmFtZS5kZWZhdWx0UHJvcHM7XG4gIGlmIChkZWZhdWx0UHJvcHMgIT09IHVuZGVmaW5lZCkge1xuICAgIGZvciAodmFyIGkgaW4gZGVmYXVsdFByb3BzKSB7XG4gICAgICBpZiAocHJvcHNbaV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBwcm9wc1tpXSA9IGRlZmF1bHRQcm9wc1tpXTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gcHJvcHM7XG59XG5cbi8qKiBDcmVhdGUgYW4gZWxlbWVudCB3aXRoIHRoZSBnaXZlbiBub2RlTmFtZS5cbiAqXHRAcGFyYW0ge1N0cmluZ30gbm9kZU5hbWVcbiAqXHRAcGFyYW0ge0Jvb2xlYW59IFtpc1N2Zz1mYWxzZV1cdElmIGB0cnVlYCwgY3JlYXRlcyBhbiBlbGVtZW50IHdpdGhpbiB0aGUgU1ZHIG5hbWVzcGFjZS5cbiAqXHRAcmV0dXJucyB7RWxlbWVudH0gbm9kZVxuICovXG5mdW5jdGlvbiBjcmVhdGVOb2RlKG5vZGVOYW1lLCBpc1N2Zykge1xuXHR2YXIgbm9kZSA9IGlzU3ZnID8gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsIG5vZGVOYW1lKSA6IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQobm9kZU5hbWUpO1xuXHRub2RlLm5vcm1hbGl6ZWROb2RlTmFtZSA9IG5vZGVOYW1lO1xuXHRyZXR1cm4gbm9kZTtcbn1cblxuLyoqIFJlbW92ZSBhIGNoaWxkIG5vZGUgZnJvbSBpdHMgcGFyZW50IGlmIGF0dGFjaGVkLlxuICpcdEBwYXJhbSB7RWxlbWVudH0gbm9kZVx0XHRUaGUgbm9kZSB0byByZW1vdmVcbiAqL1xuZnVuY3Rpb24gcmVtb3ZlTm9kZShub2RlKSB7XG5cdHZhciBwYXJlbnROb2RlID0gbm9kZS5wYXJlbnROb2RlO1xuXHRpZiAocGFyZW50Tm9kZSkgcGFyZW50Tm9kZS5yZW1vdmVDaGlsZChub2RlKTtcbn1cblxuLyoqIFNldCBhIG5hbWVkIGF0dHJpYnV0ZSBvbiB0aGUgZ2l2ZW4gTm9kZSwgd2l0aCBzcGVjaWFsIGJlaGF2aW9yIGZvciBzb21lIG5hbWVzIGFuZCBldmVudCBoYW5kbGVycy5cbiAqXHRJZiBgdmFsdWVgIGlzIGBudWxsYCwgdGhlIGF0dHJpYnV0ZS9oYW5kbGVyIHdpbGwgYmUgcmVtb3ZlZC5cbiAqXHRAcGFyYW0ge0VsZW1lbnR9IG5vZGVcdEFuIGVsZW1lbnQgdG8gbXV0YXRlXG4gKlx0QHBhcmFtIHtzdHJpbmd9IG5hbWVcdFRoZSBuYW1lL2tleSB0byBzZXQsIHN1Y2ggYXMgYW4gZXZlbnQgb3IgYXR0cmlidXRlIG5hbWVcbiAqXHRAcGFyYW0ge2FueX0gb2xkXHRUaGUgbGFzdCB2YWx1ZSB0aGF0IHdhcyBzZXQgZm9yIHRoaXMgbmFtZS9ub2RlIHBhaXJcbiAqXHRAcGFyYW0ge2FueX0gdmFsdWVcdEFuIGF0dHJpYnV0ZSB2YWx1ZSwgc3VjaCBhcyBhIGZ1bmN0aW9uIHRvIGJlIHVzZWQgYXMgYW4gZXZlbnQgaGFuZGxlclxuICpcdEBwYXJhbSB7Qm9vbGVhbn0gaXNTdmdcdEFyZSB3ZSBjdXJyZW50bHkgZGlmZmluZyBpbnNpZGUgYW4gc3ZnP1xuICpcdEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIHNldEFjY2Vzc29yKG5vZGUsIG5hbWUsIG9sZCwgdmFsdWUsIGlzU3ZnKSB7XG5cdGlmIChuYW1lID09PSAnY2xhc3NOYW1lJykgbmFtZSA9ICdjbGFzcyc7XG5cblx0aWYgKG5hbWUgPT09ICdrZXknKSB7XG5cdFx0Ly8gaWdub3JlXG5cdH0gZWxzZSBpZiAobmFtZSA9PT0gJ3JlZicpIHtcblx0XHRpZiAob2xkKSBvbGQobnVsbCk7XG5cdFx0aWYgKHZhbHVlKSB2YWx1ZShub2RlKTtcblx0fSBlbHNlIGlmIChuYW1lID09PSAnY2xhc3MnICYmICFpc1N2Zykge1xuXHRcdG5vZGUuY2xhc3NOYW1lID0gdmFsdWUgfHwgJyc7XG5cdH0gZWxzZSBpZiAobmFtZSA9PT0gJ3N0eWxlJykge1xuXHRcdGlmICghdmFsdWUgfHwgdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyB8fCB0eXBlb2Ygb2xkID09PSAnc3RyaW5nJykge1xuXHRcdFx0bm9kZS5zdHlsZS5jc3NUZXh0ID0gdmFsdWUgfHwgJyc7XG5cdFx0fVxuXHRcdGlmICh2YWx1ZSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnKSB7XG5cdFx0XHRpZiAodHlwZW9mIG9sZCAhPT0gJ3N0cmluZycpIHtcblx0XHRcdFx0Zm9yICh2YXIgaSBpbiBvbGQpIHtcblx0XHRcdFx0XHRpZiAoIShpIGluIHZhbHVlKSkgbm9kZS5zdHlsZVtpXSA9ICcnO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRmb3IgKHZhciBpIGluIHZhbHVlKSB7XG5cdFx0XHRcdG5vZGUuc3R5bGVbaV0gPSB0eXBlb2YgdmFsdWVbaV0gPT09ICdudW1iZXInICYmIElTX05PTl9ESU1FTlNJT05BTC50ZXN0KGkpID09PSBmYWxzZSA/IHZhbHVlW2ldICsgJ3B4JyA6IHZhbHVlW2ldO1xuXHRcdFx0fVxuXHRcdH1cblx0fSBlbHNlIGlmIChuYW1lID09PSAnZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwnKSB7XG5cdFx0aWYgKHZhbHVlKSBub2RlLmlubmVySFRNTCA9IHZhbHVlLl9faHRtbCB8fCAnJztcblx0fSBlbHNlIGlmIChuYW1lWzBdID09ICdvJyAmJiBuYW1lWzFdID09ICduJykge1xuXHRcdHZhciB1c2VDYXB0dXJlID0gbmFtZSAhPT0gKG5hbWUgPSBuYW1lLnJlcGxhY2UoL0NhcHR1cmUkLywgJycpKTtcblx0XHRuYW1lID0gbmFtZS50b0xvd2VyQ2FzZSgpLnN1YnN0cmluZygyKTtcblx0XHRpZiAodmFsdWUpIHtcblx0XHRcdGlmICghb2xkKSBub2RlLmFkZEV2ZW50TGlzdGVuZXIobmFtZSwgZXZlbnRQcm94eSwgdXNlQ2FwdHVyZSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdG5vZGUucmVtb3ZlRXZlbnRMaXN0ZW5lcihuYW1lLCBldmVudFByb3h5LCB1c2VDYXB0dXJlKTtcblx0XHR9XG5cdFx0KG5vZGUuX2xpc3RlbmVycyB8fCAobm9kZS5fbGlzdGVuZXJzID0ge30pKVtuYW1lXSA9IHZhbHVlO1xuXHR9IGVsc2UgaWYgKG5hbWUgIT09ICdsaXN0JyAmJiBuYW1lICE9PSAndHlwZScgJiYgIWlzU3ZnICYmIG5hbWUgaW4gbm9kZSkge1xuXHRcdHNldFByb3BlcnR5KG5vZGUsIG5hbWUsIHZhbHVlID09IG51bGwgPyAnJyA6IHZhbHVlKTtcblx0XHRpZiAodmFsdWUgPT0gbnVsbCB8fCB2YWx1ZSA9PT0gZmFsc2UpIG5vZGUucmVtb3ZlQXR0cmlidXRlKG5hbWUpO1xuXHR9IGVsc2Uge1xuXHRcdHZhciBucyA9IGlzU3ZnICYmIG5hbWUgIT09IChuYW1lID0gbmFtZS5yZXBsYWNlKC9eeGxpbms6Py8sICcnKSk7XG5cdFx0aWYgKHZhbHVlID09IG51bGwgfHwgdmFsdWUgPT09IGZhbHNlKSB7XG5cdFx0XHRpZiAobnMpIG5vZGUucmVtb3ZlQXR0cmlidXRlTlMoJ2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnLCBuYW1lLnRvTG93ZXJDYXNlKCkpO2Vsc2Ugbm9kZS5yZW1vdmVBdHRyaWJ1dGUobmFtZSk7XG5cdFx0fSBlbHNlIGlmICh0eXBlb2YgdmFsdWUgIT09ICdmdW5jdGlvbicpIHtcblx0XHRcdGlmIChucykgbm9kZS5zZXRBdHRyaWJ1dGVOUygnaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluaycsIG5hbWUudG9Mb3dlckNhc2UoKSwgdmFsdWUpO2Vsc2Ugbm9kZS5zZXRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpO1xuXHRcdH1cblx0fVxufVxuXG4vKiogQXR0ZW1wdCB0byBzZXQgYSBET00gcHJvcGVydHkgdG8gdGhlIGdpdmVuIHZhbHVlLlxuICpcdElFICYgRkYgdGhyb3cgZm9yIGNlcnRhaW4gcHJvcGVydHktdmFsdWUgY29tYmluYXRpb25zLlxuICovXG5mdW5jdGlvbiBzZXRQcm9wZXJ0eShub2RlLCBuYW1lLCB2YWx1ZSkge1xuXHR0cnkge1xuXHRcdG5vZGVbbmFtZV0gPSB2YWx1ZTtcblx0fSBjYXRjaCAoZSkge31cbn1cblxuLyoqIFByb3h5IGFuIGV2ZW50IHRvIGhvb2tlZCBldmVudCBoYW5kbGVyc1xuICpcdEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGV2ZW50UHJveHkoZSkge1xuXHRyZXR1cm4gdGhpcy5fbGlzdGVuZXJzW2UudHlwZV0ob3B0aW9ucy5ldmVudCAmJiBvcHRpb25zLmV2ZW50KGUpIHx8IGUpO1xufVxuXG4vKiogUXVldWUgb2YgY29tcG9uZW50cyB0aGF0IGhhdmUgYmVlbiBtb3VudGVkIGFuZCBhcmUgYXdhaXRpbmcgY29tcG9uZW50RGlkTW91bnQgKi9cbnZhciBtb3VudHMgPSBbXTtcblxuLyoqIERpZmYgcmVjdXJzaW9uIGNvdW50LCB1c2VkIHRvIHRyYWNrIHRoZSBlbmQgb2YgdGhlIGRpZmYgY3ljbGUuICovXG52YXIgZGlmZkxldmVsID0gMDtcblxuLyoqIEdsb2JhbCBmbGFnIGluZGljYXRpbmcgaWYgdGhlIGRpZmYgaXMgY3VycmVudGx5IHdpdGhpbiBhbiBTVkcgKi9cbnZhciBpc1N2Z01vZGUgPSBmYWxzZTtcblxuLyoqIEdsb2JhbCBmbGFnIGluZGljYXRpbmcgaWYgdGhlIGRpZmYgaXMgcGVyZm9ybWluZyBoeWRyYXRpb24gKi9cbnZhciBoeWRyYXRpbmcgPSBmYWxzZTtcblxuLyoqIEludm9rZSBxdWV1ZWQgY29tcG9uZW50RGlkTW91bnQgbGlmZWN5Y2xlIG1ldGhvZHMgKi9cbmZ1bmN0aW9uIGZsdXNoTW91bnRzKCkge1xuXHR2YXIgYztcblx0d2hpbGUgKGMgPSBtb3VudHMucG9wKCkpIHtcblx0XHRpZiAob3B0aW9ucy5hZnRlck1vdW50KSBvcHRpb25zLmFmdGVyTW91bnQoYyk7XG5cdFx0aWYgKGMuY29tcG9uZW50RGlkTW91bnQpIGMuY29tcG9uZW50RGlkTW91bnQoKTtcblx0fVxufVxuXG4vKiogQXBwbHkgZGlmZmVyZW5jZXMgaW4gYSBnaXZlbiB2bm9kZSAoYW5kIGl0J3MgZGVlcCBjaGlsZHJlbikgdG8gYSByZWFsIERPTSBOb2RlLlxuICpcdEBwYXJhbSB7RWxlbWVudH0gW2RvbT1udWxsXVx0XHRBIERPTSBub2RlIHRvIG11dGF0ZSBpbnRvIHRoZSBzaGFwZSBvZiB0aGUgYHZub2RlYFxuICpcdEBwYXJhbSB7Vk5vZGV9IHZub2RlXHRcdFx0QSBWTm9kZSAod2l0aCBkZXNjZW5kYW50cyBmb3JtaW5nIGEgdHJlZSkgcmVwcmVzZW50aW5nIHRoZSBkZXNpcmVkIERPTSBzdHJ1Y3R1cmVcbiAqXHRAcmV0dXJucyB7RWxlbWVudH0gZG9tXHRcdFx0VGhlIGNyZWF0ZWQvbXV0YXRlZCBlbGVtZW50XG4gKlx0QHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gZGlmZihkb20sIHZub2RlLCBjb250ZXh0LCBtb3VudEFsbCwgcGFyZW50LCBjb21wb25lbnRSb290KSB7XG5cdC8vIGRpZmZMZXZlbCBoYXZpbmcgYmVlbiAwIGhlcmUgaW5kaWNhdGVzIGluaXRpYWwgZW50cnkgaW50byB0aGUgZGlmZiAobm90IGEgc3ViZGlmZilcblx0aWYgKCFkaWZmTGV2ZWwrKykge1xuXHRcdC8vIHdoZW4gZmlyc3Qgc3RhcnRpbmcgdGhlIGRpZmYsIGNoZWNrIGlmIHdlJ3JlIGRpZmZpbmcgYW4gU1ZHIG9yIHdpdGhpbiBhbiBTVkdcblx0XHRpc1N2Z01vZGUgPSBwYXJlbnQgIT0gbnVsbCAmJiBwYXJlbnQub3duZXJTVkdFbGVtZW50ICE9PSB1bmRlZmluZWQ7XG5cblx0XHQvLyBoeWRyYXRpb24gaXMgaW5kaWNhdGVkIGJ5IHRoZSBleGlzdGluZyBlbGVtZW50IHRvIGJlIGRpZmZlZCBub3QgaGF2aW5nIGEgcHJvcCBjYWNoZVxuXHRcdGh5ZHJhdGluZyA9IGRvbSAhPSBudWxsICYmICEoJ19fcHJlYWN0YXR0cl8nIGluIGRvbSk7XG5cdH1cblxuXHR2YXIgcmV0ID0gaWRpZmYoZG9tLCB2bm9kZSwgY29udGV4dCwgbW91bnRBbGwsIGNvbXBvbmVudFJvb3QpO1xuXG5cdC8vIGFwcGVuZCB0aGUgZWxlbWVudCBpZiBpdHMgYSBuZXcgcGFyZW50XG5cdGlmIChwYXJlbnQgJiYgcmV0LnBhcmVudE5vZGUgIT09IHBhcmVudCkgcGFyZW50LmFwcGVuZENoaWxkKHJldCk7XG5cblx0Ly8gZGlmZkxldmVsIGJlaW5nIHJlZHVjZWQgdG8gMCBtZWFucyB3ZSdyZSBleGl0aW5nIHRoZSBkaWZmXG5cdGlmICghIC0tZGlmZkxldmVsKSB7XG5cdFx0aHlkcmF0aW5nID0gZmFsc2U7XG5cdFx0Ly8gaW52b2tlIHF1ZXVlZCBjb21wb25lbnREaWRNb3VudCBsaWZlY3ljbGUgbWV0aG9kc1xuXHRcdGlmICghY29tcG9uZW50Um9vdCkgZmx1c2hNb3VudHMoKTtcblx0fVxuXG5cdHJldHVybiByZXQ7XG59XG5cbi8qKiBJbnRlcm5hbHMgb2YgYGRpZmYoKWAsIHNlcGFyYXRlZCB0byBhbGxvdyBieXBhc3NpbmcgZGlmZkxldmVsIC8gbW91bnQgZmx1c2hpbmcuICovXG5mdW5jdGlvbiBpZGlmZihkb20sIHZub2RlLCBjb250ZXh0LCBtb3VudEFsbCwgY29tcG9uZW50Um9vdCkge1xuXHR2YXIgb3V0ID0gZG9tLFxuXHQgICAgcHJldlN2Z01vZGUgPSBpc1N2Z01vZGU7XG5cblx0Ly8gZW1wdHkgdmFsdWVzIChudWxsLCB1bmRlZmluZWQsIGJvb2xlYW5zKSByZW5kZXIgYXMgZW1wdHkgVGV4dCBub2Rlc1xuXHRpZiAodm5vZGUgPT0gbnVsbCB8fCB0eXBlb2Ygdm5vZGUgPT09ICdib29sZWFuJykgdm5vZGUgPSAnJztcblxuXHQvLyBGYXN0IGNhc2U6IFN0cmluZ3MgJiBOdW1iZXJzIGNyZWF0ZS91cGRhdGUgVGV4dCBub2Rlcy5cblx0aWYgKHR5cGVvZiB2bm9kZSA9PT0gJ3N0cmluZycgfHwgdHlwZW9mIHZub2RlID09PSAnbnVtYmVyJykge1xuXG5cdFx0Ly8gdXBkYXRlIGlmIGl0J3MgYWxyZWFkeSBhIFRleHQgbm9kZTpcblx0XHRpZiAoZG9tICYmIGRvbS5zcGxpdFRleHQgIT09IHVuZGVmaW5lZCAmJiBkb20ucGFyZW50Tm9kZSAmJiAoIWRvbS5fY29tcG9uZW50IHx8IGNvbXBvbmVudFJvb3QpKSB7XG5cdFx0XHQvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi8gLyogQnJvd3NlciBxdWlyayB0aGF0IGNhbid0IGJlIGNvdmVyZWQ6IGh0dHBzOi8vZ2l0aHViLmNvbS9kZXZlbG9waXQvcHJlYWN0L2NvbW1pdC9mZDRmMjFmNWM0NWRmZDc1MTUxYmQyN2I0YzIxN2Q4MDAzYWE1ZWI5ICovXG5cdFx0XHRpZiAoZG9tLm5vZGVWYWx1ZSAhPSB2bm9kZSkge1xuXHRcdFx0XHRkb20ubm9kZVZhbHVlID0gdm5vZGU7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vIGl0IHdhc24ndCBhIFRleHQgbm9kZTogcmVwbGFjZSBpdCB3aXRoIG9uZSBhbmQgcmVjeWNsZSB0aGUgb2xkIEVsZW1lbnRcblx0XHRcdG91dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHZub2RlKTtcblx0XHRcdGlmIChkb20pIHtcblx0XHRcdFx0aWYgKGRvbS5wYXJlbnROb2RlKSBkb20ucGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQob3V0LCBkb20pO1xuXHRcdFx0XHRyZWNvbGxlY3ROb2RlVHJlZShkb20sIHRydWUpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdG91dFsnX19wcmVhY3RhdHRyXyddID0gdHJ1ZTtcblxuXHRcdHJldHVybiBvdXQ7XG5cdH1cblxuXHQvLyBJZiB0aGUgVk5vZGUgcmVwcmVzZW50cyBhIENvbXBvbmVudCwgcGVyZm9ybSBhIGNvbXBvbmVudCBkaWZmOlxuXHR2YXIgdm5vZGVOYW1lID0gdm5vZGUubm9kZU5hbWU7XG5cdGlmICh0eXBlb2Ygdm5vZGVOYW1lID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0cmV0dXJuIGJ1aWxkQ29tcG9uZW50RnJvbVZOb2RlKGRvbSwgdm5vZGUsIGNvbnRleHQsIG1vdW50QWxsKTtcblx0fVxuXG5cdC8vIFRyYWNrcyBlbnRlcmluZyBhbmQgZXhpdGluZyBTVkcgbmFtZXNwYWNlIHdoZW4gZGVzY2VuZGluZyB0aHJvdWdoIHRoZSB0cmVlLlxuXHRpc1N2Z01vZGUgPSB2bm9kZU5hbWUgPT09ICdzdmcnID8gdHJ1ZSA6IHZub2RlTmFtZSA9PT0gJ2ZvcmVpZ25PYmplY3QnID8gZmFsc2UgOiBpc1N2Z01vZGU7XG5cblx0Ly8gSWYgdGhlcmUncyBubyBleGlzdGluZyBlbGVtZW50IG9yIGl0J3MgdGhlIHdyb25nIHR5cGUsIGNyZWF0ZSBhIG5ldyBvbmU6XG5cdHZub2RlTmFtZSA9IFN0cmluZyh2bm9kZU5hbWUpO1xuXHRpZiAoIWRvbSB8fCAhaXNOYW1lZE5vZGUoZG9tLCB2bm9kZU5hbWUpKSB7XG5cdFx0b3V0ID0gY3JlYXRlTm9kZSh2bm9kZU5hbWUsIGlzU3ZnTW9kZSk7XG5cblx0XHRpZiAoZG9tKSB7XG5cdFx0XHQvLyBtb3ZlIGNoaWxkcmVuIGludG8gdGhlIHJlcGxhY2VtZW50IG5vZGVcblx0XHRcdHdoaWxlIChkb20uZmlyc3RDaGlsZCkge1xuXHRcdFx0XHRvdXQuYXBwZW5kQ2hpbGQoZG9tLmZpcnN0Q2hpbGQpO1xuXHRcdFx0fSAvLyBpZiB0aGUgcHJldmlvdXMgRWxlbWVudCB3YXMgbW91bnRlZCBpbnRvIHRoZSBET00sIHJlcGxhY2UgaXQgaW5saW5lXG5cdFx0XHRpZiAoZG9tLnBhcmVudE5vZGUpIGRvbS5wYXJlbnROb2RlLnJlcGxhY2VDaGlsZChvdXQsIGRvbSk7XG5cblx0XHRcdC8vIHJlY3ljbGUgdGhlIG9sZCBlbGVtZW50IChza2lwcyBub24tRWxlbWVudCBub2RlIHR5cGVzKVxuXHRcdFx0cmVjb2xsZWN0Tm9kZVRyZWUoZG9tLCB0cnVlKTtcblx0XHR9XG5cdH1cblxuXHR2YXIgZmMgPSBvdXQuZmlyc3RDaGlsZCxcblx0ICAgIHByb3BzID0gb3V0WydfX3ByZWFjdGF0dHJfJ10sXG5cdCAgICB2Y2hpbGRyZW4gPSB2bm9kZS5jaGlsZHJlbjtcblxuXHRpZiAocHJvcHMgPT0gbnVsbCkge1xuXHRcdHByb3BzID0gb3V0WydfX3ByZWFjdGF0dHJfJ10gPSB7fTtcblx0XHRmb3IgKHZhciBhID0gb3V0LmF0dHJpYnV0ZXMsIGkgPSBhLmxlbmd0aDsgaS0tOykge1xuXHRcdFx0cHJvcHNbYVtpXS5uYW1lXSA9IGFbaV0udmFsdWU7XG5cdFx0fVxuXHR9XG5cblx0Ly8gT3B0aW1pemF0aW9uOiBmYXN0LXBhdGggZm9yIGVsZW1lbnRzIGNvbnRhaW5pbmcgYSBzaW5nbGUgVGV4dE5vZGU6XG5cdGlmICghaHlkcmF0aW5nICYmIHZjaGlsZHJlbiAmJiB2Y2hpbGRyZW4ubGVuZ3RoID09PSAxICYmIHR5cGVvZiB2Y2hpbGRyZW5bMF0gPT09ICdzdHJpbmcnICYmIGZjICE9IG51bGwgJiYgZmMuc3BsaXRUZXh0ICE9PSB1bmRlZmluZWQgJiYgZmMubmV4dFNpYmxpbmcgPT0gbnVsbCkge1xuXHRcdGlmIChmYy5ub2RlVmFsdWUgIT0gdmNoaWxkcmVuWzBdKSB7XG5cdFx0XHRmYy5ub2RlVmFsdWUgPSB2Y2hpbGRyZW5bMF07XG5cdFx0fVxuXHR9XG5cdC8vIG90aGVyd2lzZSwgaWYgdGhlcmUgYXJlIGV4aXN0aW5nIG9yIG5ldyBjaGlsZHJlbiwgZGlmZiB0aGVtOlxuXHRlbHNlIGlmICh2Y2hpbGRyZW4gJiYgdmNoaWxkcmVuLmxlbmd0aCB8fCBmYyAhPSBudWxsKSB7XG5cdFx0XHRpbm5lckRpZmZOb2RlKG91dCwgdmNoaWxkcmVuLCBjb250ZXh0LCBtb3VudEFsbCwgaHlkcmF0aW5nIHx8IHByb3BzLmRhbmdlcm91c2x5U2V0SW5uZXJIVE1MICE9IG51bGwpO1xuXHRcdH1cblxuXHQvLyBBcHBseSBhdHRyaWJ1dGVzL3Byb3BzIGZyb20gVk5vZGUgdG8gdGhlIERPTSBFbGVtZW50OlxuXHRkaWZmQXR0cmlidXRlcyhvdXQsIHZub2RlLmF0dHJpYnV0ZXMsIHByb3BzKTtcblxuXHQvLyByZXN0b3JlIHByZXZpb3VzIFNWRyBtb2RlOiAoaW4gY2FzZSB3ZSdyZSBleGl0aW5nIGFuIFNWRyBuYW1lc3BhY2UpXG5cdGlzU3ZnTW9kZSA9IHByZXZTdmdNb2RlO1xuXG5cdHJldHVybiBvdXQ7XG59XG5cbi8qKiBBcHBseSBjaGlsZCBhbmQgYXR0cmlidXRlIGNoYW5nZXMgYmV0d2VlbiBhIFZOb2RlIGFuZCBhIERPTSBOb2RlIHRvIHRoZSBET00uXG4gKlx0QHBhcmFtIHtFbGVtZW50fSBkb21cdFx0XHRFbGVtZW50IHdob3NlIGNoaWxkcmVuIHNob3VsZCBiZSBjb21wYXJlZCAmIG11dGF0ZWRcbiAqXHRAcGFyYW0ge0FycmF5fSB2Y2hpbGRyZW5cdFx0QXJyYXkgb2YgVk5vZGVzIHRvIGNvbXBhcmUgdG8gYGRvbS5jaGlsZE5vZGVzYFxuICpcdEBwYXJhbSB7T2JqZWN0fSBjb250ZXh0XHRcdFx0SW1wbGljaXRseSBkZXNjZW5kYW50IGNvbnRleHQgb2JqZWN0IChmcm9tIG1vc3QgcmVjZW50IGBnZXRDaGlsZENvbnRleHQoKWApXG4gKlx0QHBhcmFtIHtCb29sZWFufSBtb3VudEFsbFxuICpcdEBwYXJhbSB7Qm9vbGVhbn0gaXNIeWRyYXRpbmdcdElmIGB0cnVlYCwgY29uc3VtZXMgZXh0ZXJuYWxseSBjcmVhdGVkIGVsZW1lbnRzIHNpbWlsYXIgdG8gaHlkcmF0aW9uXG4gKi9cbmZ1bmN0aW9uIGlubmVyRGlmZk5vZGUoZG9tLCB2Y2hpbGRyZW4sIGNvbnRleHQsIG1vdW50QWxsLCBpc0h5ZHJhdGluZykge1xuXHR2YXIgb3JpZ2luYWxDaGlsZHJlbiA9IGRvbS5jaGlsZE5vZGVzLFxuXHQgICAgY2hpbGRyZW4gPSBbXSxcblx0ICAgIGtleWVkID0ge30sXG5cdCAgICBrZXllZExlbiA9IDAsXG5cdCAgICBtaW4gPSAwLFxuXHQgICAgbGVuID0gb3JpZ2luYWxDaGlsZHJlbi5sZW5ndGgsXG5cdCAgICBjaGlsZHJlbkxlbiA9IDAsXG5cdCAgICB2bGVuID0gdmNoaWxkcmVuID8gdmNoaWxkcmVuLmxlbmd0aCA6IDAsXG5cdCAgICBqLFxuXHQgICAgYyxcblx0ICAgIGYsXG5cdCAgICB2Y2hpbGQsXG5cdCAgICBjaGlsZDtcblxuXHQvLyBCdWlsZCB1cCBhIG1hcCBvZiBrZXllZCBjaGlsZHJlbiBhbmQgYW4gQXJyYXkgb2YgdW5rZXllZCBjaGlsZHJlbjpcblx0aWYgKGxlbiAhPT0gMCkge1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcblx0XHRcdHZhciBfY2hpbGQgPSBvcmlnaW5hbENoaWxkcmVuW2ldLFxuXHRcdFx0ICAgIHByb3BzID0gX2NoaWxkWydfX3ByZWFjdGF0dHJfJ10sXG5cdFx0XHQgICAga2V5ID0gdmxlbiAmJiBwcm9wcyA/IF9jaGlsZC5fY29tcG9uZW50ID8gX2NoaWxkLl9jb21wb25lbnQuX19rZXkgOiBwcm9wcy5rZXkgOiBudWxsO1xuXHRcdFx0aWYgKGtleSAhPSBudWxsKSB7XG5cdFx0XHRcdGtleWVkTGVuKys7XG5cdFx0XHRcdGtleWVkW2tleV0gPSBfY2hpbGQ7XG5cdFx0XHR9IGVsc2UgaWYgKHByb3BzIHx8IChfY2hpbGQuc3BsaXRUZXh0ICE9PSB1bmRlZmluZWQgPyBpc0h5ZHJhdGluZyA/IF9jaGlsZC5ub2RlVmFsdWUudHJpbSgpIDogdHJ1ZSA6IGlzSHlkcmF0aW5nKSkge1xuXHRcdFx0XHRjaGlsZHJlbltjaGlsZHJlbkxlbisrXSA9IF9jaGlsZDtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRpZiAodmxlbiAhPT0gMCkge1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgdmxlbjsgaSsrKSB7XG5cdFx0XHR2Y2hpbGQgPSB2Y2hpbGRyZW5baV07XG5cdFx0XHRjaGlsZCA9IG51bGw7XG5cblx0XHRcdC8vIGF0dGVtcHQgdG8gZmluZCBhIG5vZGUgYmFzZWQgb24ga2V5IG1hdGNoaW5nXG5cdFx0XHR2YXIga2V5ID0gdmNoaWxkLmtleTtcblx0XHRcdGlmIChrZXkgIT0gbnVsbCkge1xuXHRcdFx0XHRpZiAoa2V5ZWRMZW4gJiYga2V5ZWRba2V5XSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdFx0Y2hpbGQgPSBrZXllZFtrZXldO1xuXHRcdFx0XHRcdGtleWVkW2tleV0gPSB1bmRlZmluZWQ7XG5cdFx0XHRcdFx0a2V5ZWRMZW4tLTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0Ly8gYXR0ZW1wdCB0byBwbHVjayBhIG5vZGUgb2YgdGhlIHNhbWUgdHlwZSBmcm9tIHRoZSBleGlzdGluZyBjaGlsZHJlblxuXHRcdFx0ZWxzZSBpZiAoIWNoaWxkICYmIG1pbiA8IGNoaWxkcmVuTGVuKSB7XG5cdFx0XHRcdFx0Zm9yIChqID0gbWluOyBqIDwgY2hpbGRyZW5MZW47IGorKykge1xuXHRcdFx0XHRcdFx0aWYgKGNoaWxkcmVuW2pdICE9PSB1bmRlZmluZWQgJiYgaXNTYW1lTm9kZVR5cGUoYyA9IGNoaWxkcmVuW2pdLCB2Y2hpbGQsIGlzSHlkcmF0aW5nKSkge1xuXHRcdFx0XHRcdFx0XHRjaGlsZCA9IGM7XG5cdFx0XHRcdFx0XHRcdGNoaWxkcmVuW2pdID0gdW5kZWZpbmVkO1xuXHRcdFx0XHRcdFx0XHRpZiAoaiA9PT0gY2hpbGRyZW5MZW4gLSAxKSBjaGlsZHJlbkxlbi0tO1xuXHRcdFx0XHRcdFx0XHRpZiAoaiA9PT0gbWluKSBtaW4rKztcblx0XHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdC8vIG1vcnBoIHRoZSBtYXRjaGVkL2ZvdW5kL2NyZWF0ZWQgRE9NIGNoaWxkIHRvIG1hdGNoIHZjaGlsZCAoZGVlcClcblx0XHRcdGNoaWxkID0gaWRpZmYoY2hpbGQsIHZjaGlsZCwgY29udGV4dCwgbW91bnRBbGwpO1xuXG5cdFx0XHRmID0gb3JpZ2luYWxDaGlsZHJlbltpXTtcblx0XHRcdGlmIChjaGlsZCAmJiBjaGlsZCAhPT0gZG9tICYmIGNoaWxkICE9PSBmKSB7XG5cdFx0XHRcdGlmIChmID09IG51bGwpIHtcblx0XHRcdFx0XHRkb20uYXBwZW5kQ2hpbGQoY2hpbGQpO1xuXHRcdFx0XHR9IGVsc2UgaWYgKGNoaWxkID09PSBmLm5leHRTaWJsaW5nKSB7XG5cdFx0XHRcdFx0cmVtb3ZlTm9kZShmKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRkb20uaW5zZXJ0QmVmb3JlKGNoaWxkLCBmKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdC8vIHJlbW92ZSB1bnVzZWQga2V5ZWQgY2hpbGRyZW46XG5cdGlmIChrZXllZExlbikge1xuXHRcdGZvciAodmFyIGkgaW4ga2V5ZWQpIHtcblx0XHRcdGlmIChrZXllZFtpXSAhPT0gdW5kZWZpbmVkKSByZWNvbGxlY3ROb2RlVHJlZShrZXllZFtpXSwgZmFsc2UpO1xuXHRcdH1cblx0fVxuXG5cdC8vIHJlbW92ZSBvcnBoYW5lZCB1bmtleWVkIGNoaWxkcmVuOlxuXHR3aGlsZSAobWluIDw9IGNoaWxkcmVuTGVuKSB7XG5cdFx0aWYgKChjaGlsZCA9IGNoaWxkcmVuW2NoaWxkcmVuTGVuLS1dKSAhPT0gdW5kZWZpbmVkKSByZWNvbGxlY3ROb2RlVHJlZShjaGlsZCwgZmFsc2UpO1xuXHR9XG59XG5cbi8qKiBSZWN1cnNpdmVseSByZWN5Y2xlIChvciBqdXN0IHVubW91bnQpIGEgbm9kZSBhbmQgaXRzIGRlc2NlbmRhbnRzLlxuICpcdEBwYXJhbSB7Tm9kZX0gbm9kZVx0XHRcdFx0XHRcdERPTSBub2RlIHRvIHN0YXJ0IHVubW91bnQvcmVtb3ZhbCBmcm9tXG4gKlx0QHBhcmFtIHtCb29sZWFufSBbdW5tb3VudE9ubHk9ZmFsc2VdXHRJZiBgdHJ1ZWAsIG9ubHkgdHJpZ2dlcnMgdW5tb3VudCBsaWZlY3ljbGUsIHNraXBzIHJlbW92YWxcbiAqL1xuZnVuY3Rpb24gcmVjb2xsZWN0Tm9kZVRyZWUobm9kZSwgdW5tb3VudE9ubHkpIHtcblx0dmFyIGNvbXBvbmVudCA9IG5vZGUuX2NvbXBvbmVudDtcblx0aWYgKGNvbXBvbmVudCkge1xuXHRcdC8vIGlmIG5vZGUgaXMgb3duZWQgYnkgYSBDb21wb25lbnQsIHVubW91bnQgdGhhdCBjb21wb25lbnQgKGVuZHMgdXAgcmVjdXJzaW5nIGJhY2sgaGVyZSlcblx0XHR1bm1vdW50Q29tcG9uZW50KGNvbXBvbmVudCk7XG5cdH0gZWxzZSB7XG5cdFx0Ly8gSWYgdGhlIG5vZGUncyBWTm9kZSBoYWQgYSByZWYgZnVuY3Rpb24sIGludm9rZSBpdCB3aXRoIG51bGwgaGVyZS5cblx0XHQvLyAodGhpcyBpcyBwYXJ0IG9mIHRoZSBSZWFjdCBzcGVjLCBhbmQgc21hcnQgZm9yIHVuc2V0dGluZyByZWZlcmVuY2VzKVxuXHRcdGlmIChub2RlWydfX3ByZWFjdGF0dHJfJ10gIT0gbnVsbCAmJiBub2RlWydfX3ByZWFjdGF0dHJfJ10ucmVmKSBub2RlWydfX3ByZWFjdGF0dHJfJ10ucmVmKG51bGwpO1xuXG5cdFx0aWYgKHVubW91bnRPbmx5ID09PSBmYWxzZSB8fCBub2RlWydfX3ByZWFjdGF0dHJfJ10gPT0gbnVsbCkge1xuXHRcdFx0cmVtb3ZlTm9kZShub2RlKTtcblx0XHR9XG5cblx0XHRyZW1vdmVDaGlsZHJlbihub2RlKTtcblx0fVxufVxuXG4vKiogUmVjb2xsZWN0L3VubW91bnQgYWxsIGNoaWxkcmVuLlxuICpcdC0gd2UgdXNlIC5sYXN0Q2hpbGQgaGVyZSBiZWNhdXNlIGl0IGNhdXNlcyBsZXNzIHJlZmxvdyB0aGFuIC5maXJzdENoaWxkXG4gKlx0LSBpdCdzIGFsc28gY2hlYXBlciB0aGFuIGFjY2Vzc2luZyB0aGUgLmNoaWxkTm9kZXMgTGl2ZSBOb2RlTGlzdFxuICovXG5mdW5jdGlvbiByZW1vdmVDaGlsZHJlbihub2RlKSB7XG5cdG5vZGUgPSBub2RlLmxhc3RDaGlsZDtcblx0d2hpbGUgKG5vZGUpIHtcblx0XHR2YXIgbmV4dCA9IG5vZGUucHJldmlvdXNTaWJsaW5nO1xuXHRcdHJlY29sbGVjdE5vZGVUcmVlKG5vZGUsIHRydWUpO1xuXHRcdG5vZGUgPSBuZXh0O1xuXHR9XG59XG5cbi8qKiBBcHBseSBkaWZmZXJlbmNlcyBpbiBhdHRyaWJ1dGVzIGZyb20gYSBWTm9kZSB0byB0aGUgZ2l2ZW4gRE9NIEVsZW1lbnQuXG4gKlx0QHBhcmFtIHtFbGVtZW50fSBkb21cdFx0RWxlbWVudCB3aXRoIGF0dHJpYnV0ZXMgdG8gZGlmZiBgYXR0cnNgIGFnYWluc3RcbiAqXHRAcGFyYW0ge09iamVjdH0gYXR0cnNcdFx0VGhlIGRlc2lyZWQgZW5kLXN0YXRlIGtleS12YWx1ZSBhdHRyaWJ1dGUgcGFpcnNcbiAqXHRAcGFyYW0ge09iamVjdH0gb2xkXHRcdFx0Q3VycmVudC9wcmV2aW91cyBhdHRyaWJ1dGVzIChmcm9tIHByZXZpb3VzIFZOb2RlIG9yIGVsZW1lbnQncyBwcm9wIGNhY2hlKVxuICovXG5mdW5jdGlvbiBkaWZmQXR0cmlidXRlcyhkb20sIGF0dHJzLCBvbGQpIHtcblx0dmFyIG5hbWU7XG5cblx0Ly8gcmVtb3ZlIGF0dHJpYnV0ZXMgbm8gbG9uZ2VyIHByZXNlbnQgb24gdGhlIHZub2RlIGJ5IHNldHRpbmcgdGhlbSB0byB1bmRlZmluZWRcblx0Zm9yIChuYW1lIGluIG9sZCkge1xuXHRcdGlmICghKGF0dHJzICYmIGF0dHJzW25hbWVdICE9IG51bGwpICYmIG9sZFtuYW1lXSAhPSBudWxsKSB7XG5cdFx0XHRzZXRBY2Nlc3Nvcihkb20sIG5hbWUsIG9sZFtuYW1lXSwgb2xkW25hbWVdID0gdW5kZWZpbmVkLCBpc1N2Z01vZGUpO1xuXHRcdH1cblx0fVxuXG5cdC8vIGFkZCBuZXcgJiB1cGRhdGUgY2hhbmdlZCBhdHRyaWJ1dGVzXG5cdGZvciAobmFtZSBpbiBhdHRycykge1xuXHRcdGlmIChuYW1lICE9PSAnY2hpbGRyZW4nICYmIG5hbWUgIT09ICdpbm5lckhUTUwnICYmICghKG5hbWUgaW4gb2xkKSB8fCBhdHRyc1tuYW1lXSAhPT0gKG5hbWUgPT09ICd2YWx1ZScgfHwgbmFtZSA9PT0gJ2NoZWNrZWQnID8gZG9tW25hbWVdIDogb2xkW25hbWVdKSkpIHtcblx0XHRcdHNldEFjY2Vzc29yKGRvbSwgbmFtZSwgb2xkW25hbWVdLCBvbGRbbmFtZV0gPSBhdHRyc1tuYW1lXSwgaXNTdmdNb2RlKTtcblx0XHR9XG5cdH1cbn1cblxuLyoqIFJldGFpbnMgYSBwb29sIG9mIENvbXBvbmVudHMgZm9yIHJlLXVzZSwga2V5ZWQgb24gY29tcG9uZW50IG5hbWUuXG4gKlx0Tm90ZTogc2luY2UgY29tcG9uZW50IG5hbWVzIGFyZSBub3QgdW5pcXVlIG9yIGV2ZW4gbmVjZXNzYXJpbHkgYXZhaWxhYmxlLCB0aGVzZSBhcmUgcHJpbWFyaWx5IGEgZm9ybSBvZiBzaGFyZGluZy5cbiAqXHRAcHJpdmF0ZVxuICovXG52YXIgY29tcG9uZW50cyA9IHt9O1xuXG4vKiogUmVjbGFpbSBhIGNvbXBvbmVudCBmb3IgbGF0ZXIgcmUtdXNlIGJ5IHRoZSByZWN5Y2xlci4gKi9cbmZ1bmN0aW9uIGNvbGxlY3RDb21wb25lbnQoY29tcG9uZW50KSB7XG5cdHZhciBuYW1lID0gY29tcG9uZW50LmNvbnN0cnVjdG9yLm5hbWU7XG5cdChjb21wb25lbnRzW25hbWVdIHx8IChjb21wb25lbnRzW25hbWVdID0gW10pKS5wdXNoKGNvbXBvbmVudCk7XG59XG5cbi8qKiBDcmVhdGUgYSBjb21wb25lbnQuIE5vcm1hbGl6ZXMgZGlmZmVyZW5jZXMgYmV0d2VlbiBQRkMncyBhbmQgY2xhc3NmdWwgQ29tcG9uZW50cy4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUNvbXBvbmVudChDdG9yLCBwcm9wcywgY29udGV4dCkge1xuXHR2YXIgbGlzdCA9IGNvbXBvbmVudHNbQ3Rvci5uYW1lXSxcblx0ICAgIGluc3Q7XG5cblx0aWYgKEN0b3IucHJvdG90eXBlICYmIEN0b3IucHJvdG90eXBlLnJlbmRlcikge1xuXHRcdGluc3QgPSBuZXcgQ3Rvcihwcm9wcywgY29udGV4dCk7XG5cdFx0Q29tcG9uZW50LmNhbGwoaW5zdCwgcHJvcHMsIGNvbnRleHQpO1xuXHR9IGVsc2Uge1xuXHRcdGluc3QgPSBuZXcgQ29tcG9uZW50KHByb3BzLCBjb250ZXh0KTtcblx0XHRpbnN0LmNvbnN0cnVjdG9yID0gQ3Rvcjtcblx0XHRpbnN0LnJlbmRlciA9IGRvUmVuZGVyO1xuXHR9XG5cblx0aWYgKGxpc3QpIHtcblx0XHRmb3IgKHZhciBpID0gbGlzdC5sZW5ndGg7IGktLTspIHtcblx0XHRcdGlmIChsaXN0W2ldLmNvbnN0cnVjdG9yID09PSBDdG9yKSB7XG5cdFx0XHRcdGluc3QubmV4dEJhc2UgPSBsaXN0W2ldLm5leHRCYXNlO1xuXHRcdFx0XHRsaXN0LnNwbGljZShpLCAxKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cdHJldHVybiBpbnN0O1xufVxuXG4vKiogVGhlIGAucmVuZGVyKClgIG1ldGhvZCBmb3IgYSBQRkMgYmFja2luZyBpbnN0YW5jZS4gKi9cbmZ1bmN0aW9uIGRvUmVuZGVyKHByb3BzLCBzdGF0ZSwgY29udGV4dCkge1xuXHRyZXR1cm4gdGhpcy5jb25zdHJ1Y3Rvcihwcm9wcywgY29udGV4dCk7XG59XG5cbi8qKiBTZXQgYSBjb21wb25lbnQncyBgcHJvcHNgIChnZW5lcmFsbHkgZGVyaXZlZCBmcm9tIEpTWCBhdHRyaWJ1dGVzKS5cbiAqXHRAcGFyYW0ge09iamVjdH0gcHJvcHNcbiAqXHRAcGFyYW0ge09iamVjdH0gW29wdHNdXG4gKlx0QHBhcmFtIHtib29sZWFufSBbb3B0cy5yZW5kZXJTeW5jPWZhbHNlXVx0SWYgYHRydWVgIGFuZCB7QGxpbmsgb3B0aW9ucy5zeW5jQ29tcG9uZW50VXBkYXRlc30gaXMgYHRydWVgLCB0cmlnZ2VycyBzeW5jaHJvbm91cyByZW5kZXJpbmcuXG4gKlx0QHBhcmFtIHtib29sZWFufSBbb3B0cy5yZW5kZXI9dHJ1ZV1cdFx0XHRJZiBgZmFsc2VgLCBubyByZW5kZXIgd2lsbCBiZSB0cmlnZ2VyZWQuXG4gKi9cbmZ1bmN0aW9uIHNldENvbXBvbmVudFByb3BzKGNvbXBvbmVudCwgcHJvcHMsIG9wdHMsIGNvbnRleHQsIG1vdW50QWxsKSB7XG5cdGlmIChjb21wb25lbnQuX2Rpc2FibGUpIHJldHVybjtcblx0Y29tcG9uZW50Ll9kaXNhYmxlID0gdHJ1ZTtcblxuXHRpZiAoY29tcG9uZW50Ll9fcmVmID0gcHJvcHMucmVmKSBkZWxldGUgcHJvcHMucmVmO1xuXHRpZiAoY29tcG9uZW50Ll9fa2V5ID0gcHJvcHMua2V5KSBkZWxldGUgcHJvcHMua2V5O1xuXG5cdGlmICghY29tcG9uZW50LmJhc2UgfHwgbW91bnRBbGwpIHtcblx0XHRpZiAoY29tcG9uZW50LmNvbXBvbmVudFdpbGxNb3VudCkgY29tcG9uZW50LmNvbXBvbmVudFdpbGxNb3VudCgpO1xuXHR9IGVsc2UgaWYgKGNvbXBvbmVudC5jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKSB7XG5cdFx0Y29tcG9uZW50LmNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMocHJvcHMsIGNvbnRleHQpO1xuXHR9XG5cblx0aWYgKGNvbnRleHQgJiYgY29udGV4dCAhPT0gY29tcG9uZW50LmNvbnRleHQpIHtcblx0XHRpZiAoIWNvbXBvbmVudC5wcmV2Q29udGV4dCkgY29tcG9uZW50LnByZXZDb250ZXh0ID0gY29tcG9uZW50LmNvbnRleHQ7XG5cdFx0Y29tcG9uZW50LmNvbnRleHQgPSBjb250ZXh0O1xuXHR9XG5cblx0aWYgKCFjb21wb25lbnQucHJldlByb3BzKSBjb21wb25lbnQucHJldlByb3BzID0gY29tcG9uZW50LnByb3BzO1xuXHRjb21wb25lbnQucHJvcHMgPSBwcm9wcztcblxuXHRjb21wb25lbnQuX2Rpc2FibGUgPSBmYWxzZTtcblxuXHRpZiAob3B0cyAhPT0gMCkge1xuXHRcdGlmIChvcHRzID09PSAxIHx8IG9wdGlvbnMuc3luY0NvbXBvbmVudFVwZGF0ZXMgIT09IGZhbHNlIHx8ICFjb21wb25lbnQuYmFzZSkge1xuXHRcdFx0cmVuZGVyQ29tcG9uZW50KGNvbXBvbmVudCwgMSwgbW91bnRBbGwpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRlbnF1ZXVlUmVuZGVyKGNvbXBvbmVudCk7XG5cdFx0fVxuXHR9XG5cblx0aWYgKGNvbXBvbmVudC5fX3JlZikgY29tcG9uZW50Ll9fcmVmKGNvbXBvbmVudCk7XG59XG5cbi8qKiBSZW5kZXIgYSBDb21wb25lbnQsIHRyaWdnZXJpbmcgbmVjZXNzYXJ5IGxpZmVjeWNsZSBldmVudHMgYW5kIHRha2luZyBIaWdoLU9yZGVyIENvbXBvbmVudHMgaW50byBhY2NvdW50LlxuICpcdEBwYXJhbSB7Q29tcG9uZW50fSBjb21wb25lbnRcbiAqXHRAcGFyYW0ge09iamVjdH0gW29wdHNdXG4gKlx0QHBhcmFtIHtib29sZWFufSBbb3B0cy5idWlsZD1mYWxzZV1cdFx0SWYgYHRydWVgLCBjb21wb25lbnQgd2lsbCBidWlsZCBhbmQgc3RvcmUgYSBET00gbm9kZSBpZiBub3QgYWxyZWFkeSBhc3NvY2lhdGVkIHdpdGggb25lLlxuICpcdEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIHJlbmRlckNvbXBvbmVudChjb21wb25lbnQsIG9wdHMsIG1vdW50QWxsLCBpc0NoaWxkKSB7XG5cdGlmIChjb21wb25lbnQuX2Rpc2FibGUpIHJldHVybjtcblxuXHR2YXIgcHJvcHMgPSBjb21wb25lbnQucHJvcHMsXG5cdCAgICBzdGF0ZSA9IGNvbXBvbmVudC5zdGF0ZSxcblx0ICAgIGNvbnRleHQgPSBjb21wb25lbnQuY29udGV4dCxcblx0ICAgIHByZXZpb3VzUHJvcHMgPSBjb21wb25lbnQucHJldlByb3BzIHx8IHByb3BzLFxuXHQgICAgcHJldmlvdXNTdGF0ZSA9IGNvbXBvbmVudC5wcmV2U3RhdGUgfHwgc3RhdGUsXG5cdCAgICBwcmV2aW91c0NvbnRleHQgPSBjb21wb25lbnQucHJldkNvbnRleHQgfHwgY29udGV4dCxcblx0ICAgIGlzVXBkYXRlID0gY29tcG9uZW50LmJhc2UsXG5cdCAgICBuZXh0QmFzZSA9IGNvbXBvbmVudC5uZXh0QmFzZSxcblx0ICAgIGluaXRpYWxCYXNlID0gaXNVcGRhdGUgfHwgbmV4dEJhc2UsXG5cdCAgICBpbml0aWFsQ2hpbGRDb21wb25lbnQgPSBjb21wb25lbnQuX2NvbXBvbmVudCxcblx0ICAgIHNraXAgPSBmYWxzZSxcblx0ICAgIHJlbmRlcmVkLFxuXHQgICAgaW5zdCxcblx0ICAgIGNiYXNlO1xuXG5cdC8vIGlmIHVwZGF0aW5nXG5cdGlmIChpc1VwZGF0ZSkge1xuXHRcdGNvbXBvbmVudC5wcm9wcyA9IHByZXZpb3VzUHJvcHM7XG5cdFx0Y29tcG9uZW50LnN0YXRlID0gcHJldmlvdXNTdGF0ZTtcblx0XHRjb21wb25lbnQuY29udGV4dCA9IHByZXZpb3VzQ29udGV4dDtcblx0XHRpZiAob3B0cyAhPT0gMiAmJiBjb21wb25lbnQuc2hvdWxkQ29tcG9uZW50VXBkYXRlICYmIGNvbXBvbmVudC5zaG91bGRDb21wb25lbnRVcGRhdGUocHJvcHMsIHN0YXRlLCBjb250ZXh0KSA9PT0gZmFsc2UpIHtcblx0XHRcdHNraXAgPSB0cnVlO1xuXHRcdH0gZWxzZSBpZiAoY29tcG9uZW50LmNvbXBvbmVudFdpbGxVcGRhdGUpIHtcblx0XHRcdGNvbXBvbmVudC5jb21wb25lbnRXaWxsVXBkYXRlKHByb3BzLCBzdGF0ZSwgY29udGV4dCk7XG5cdFx0fVxuXHRcdGNvbXBvbmVudC5wcm9wcyA9IHByb3BzO1xuXHRcdGNvbXBvbmVudC5zdGF0ZSA9IHN0YXRlO1xuXHRcdGNvbXBvbmVudC5jb250ZXh0ID0gY29udGV4dDtcblx0fVxuXG5cdGNvbXBvbmVudC5wcmV2UHJvcHMgPSBjb21wb25lbnQucHJldlN0YXRlID0gY29tcG9uZW50LnByZXZDb250ZXh0ID0gY29tcG9uZW50Lm5leHRCYXNlID0gbnVsbDtcblx0Y29tcG9uZW50Ll9kaXJ0eSA9IGZhbHNlO1xuXG5cdGlmICghc2tpcCkge1xuXHRcdHJlbmRlcmVkID0gY29tcG9uZW50LnJlbmRlcihwcm9wcywgc3RhdGUsIGNvbnRleHQpO1xuXG5cdFx0Ly8gY29udGV4dCB0byBwYXNzIHRvIHRoZSBjaGlsZCwgY2FuIGJlIHVwZGF0ZWQgdmlhIChncmFuZC0pcGFyZW50IGNvbXBvbmVudFxuXHRcdGlmIChjb21wb25lbnQuZ2V0Q2hpbGRDb250ZXh0KSB7XG5cdFx0XHRjb250ZXh0ID0gZXh0ZW5kKGV4dGVuZCh7fSwgY29udGV4dCksIGNvbXBvbmVudC5nZXRDaGlsZENvbnRleHQoKSk7XG5cdFx0fVxuXG5cdFx0dmFyIGNoaWxkQ29tcG9uZW50ID0gcmVuZGVyZWQgJiYgcmVuZGVyZWQubm9kZU5hbWUsXG5cdFx0ICAgIHRvVW5tb3VudCxcblx0XHQgICAgYmFzZTtcblxuXHRcdGlmICh0eXBlb2YgY2hpbGRDb21wb25lbnQgPT09ICdmdW5jdGlvbicpIHtcblx0XHRcdC8vIHNldCB1cCBoaWdoIG9yZGVyIGNvbXBvbmVudCBsaW5rXG5cblx0XHRcdHZhciBjaGlsZFByb3BzID0gZ2V0Tm9kZVByb3BzKHJlbmRlcmVkKTtcblx0XHRcdGluc3QgPSBpbml0aWFsQ2hpbGRDb21wb25lbnQ7XG5cblx0XHRcdGlmIChpbnN0ICYmIGluc3QuY29uc3RydWN0b3IgPT09IGNoaWxkQ29tcG9uZW50ICYmIGNoaWxkUHJvcHMua2V5ID09IGluc3QuX19rZXkpIHtcblx0XHRcdFx0c2V0Q29tcG9uZW50UHJvcHMoaW5zdCwgY2hpbGRQcm9wcywgMSwgY29udGV4dCwgZmFsc2UpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dG9Vbm1vdW50ID0gaW5zdDtcblxuXHRcdFx0XHRjb21wb25lbnQuX2NvbXBvbmVudCA9IGluc3QgPSBjcmVhdGVDb21wb25lbnQoY2hpbGRDb21wb25lbnQsIGNoaWxkUHJvcHMsIGNvbnRleHQpO1xuXHRcdFx0XHRpbnN0Lm5leHRCYXNlID0gaW5zdC5uZXh0QmFzZSB8fCBuZXh0QmFzZTtcblx0XHRcdFx0aW5zdC5fcGFyZW50Q29tcG9uZW50ID0gY29tcG9uZW50O1xuXHRcdFx0XHRzZXRDb21wb25lbnRQcm9wcyhpbnN0LCBjaGlsZFByb3BzLCAwLCBjb250ZXh0LCBmYWxzZSk7XG5cdFx0XHRcdHJlbmRlckNvbXBvbmVudChpbnN0LCAxLCBtb3VudEFsbCwgdHJ1ZSk7XG5cdFx0XHR9XG5cblx0XHRcdGJhc2UgPSBpbnN0LmJhc2U7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGNiYXNlID0gaW5pdGlhbEJhc2U7XG5cblx0XHRcdC8vIGRlc3Ryb3kgaGlnaCBvcmRlciBjb21wb25lbnQgbGlua1xuXHRcdFx0dG9Vbm1vdW50ID0gaW5pdGlhbENoaWxkQ29tcG9uZW50O1xuXHRcdFx0aWYgKHRvVW5tb3VudCkge1xuXHRcdFx0XHRjYmFzZSA9IGNvbXBvbmVudC5fY29tcG9uZW50ID0gbnVsbDtcblx0XHRcdH1cblxuXHRcdFx0aWYgKGluaXRpYWxCYXNlIHx8IG9wdHMgPT09IDEpIHtcblx0XHRcdFx0aWYgKGNiYXNlKSBjYmFzZS5fY29tcG9uZW50ID0gbnVsbDtcblx0XHRcdFx0YmFzZSA9IGRpZmYoY2Jhc2UsIHJlbmRlcmVkLCBjb250ZXh0LCBtb3VudEFsbCB8fCAhaXNVcGRhdGUsIGluaXRpYWxCYXNlICYmIGluaXRpYWxCYXNlLnBhcmVudE5vZGUsIHRydWUpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmIChpbml0aWFsQmFzZSAmJiBiYXNlICE9PSBpbml0aWFsQmFzZSAmJiBpbnN0ICE9PSBpbml0aWFsQ2hpbGRDb21wb25lbnQpIHtcblx0XHRcdHZhciBiYXNlUGFyZW50ID0gaW5pdGlhbEJhc2UucGFyZW50Tm9kZTtcblx0XHRcdGlmIChiYXNlUGFyZW50ICYmIGJhc2UgIT09IGJhc2VQYXJlbnQpIHtcblx0XHRcdFx0YmFzZVBhcmVudC5yZXBsYWNlQ2hpbGQoYmFzZSwgaW5pdGlhbEJhc2UpO1xuXG5cdFx0XHRcdGlmICghdG9Vbm1vdW50KSB7XG5cdFx0XHRcdFx0aW5pdGlhbEJhc2UuX2NvbXBvbmVudCA9IG51bGw7XG5cdFx0XHRcdFx0cmVjb2xsZWN0Tm9kZVRyZWUoaW5pdGlhbEJhc2UsIGZhbHNlKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmICh0b1VubW91bnQpIHtcblx0XHRcdHVubW91bnRDb21wb25lbnQodG9Vbm1vdW50KTtcblx0XHR9XG5cblx0XHRjb21wb25lbnQuYmFzZSA9IGJhc2U7XG5cdFx0aWYgKGJhc2UgJiYgIWlzQ2hpbGQpIHtcblx0XHRcdHZhciBjb21wb25lbnRSZWYgPSBjb21wb25lbnQsXG5cdFx0XHQgICAgdCA9IGNvbXBvbmVudDtcblx0XHRcdHdoaWxlICh0ID0gdC5fcGFyZW50Q29tcG9uZW50KSB7XG5cdFx0XHRcdChjb21wb25lbnRSZWYgPSB0KS5iYXNlID0gYmFzZTtcblx0XHRcdH1cblx0XHRcdGJhc2UuX2NvbXBvbmVudCA9IGNvbXBvbmVudFJlZjtcblx0XHRcdGJhc2UuX2NvbXBvbmVudENvbnN0cnVjdG9yID0gY29tcG9uZW50UmVmLmNvbnN0cnVjdG9yO1xuXHRcdH1cblx0fVxuXG5cdGlmICghaXNVcGRhdGUgfHwgbW91bnRBbGwpIHtcblx0XHRtb3VudHMudW5zaGlmdChjb21wb25lbnQpO1xuXHR9IGVsc2UgaWYgKCFza2lwKSB7XG5cdFx0Ly8gRW5zdXJlIHRoYXQgcGVuZGluZyBjb21wb25lbnREaWRNb3VudCgpIGhvb2tzIG9mIGNoaWxkIGNvbXBvbmVudHNcblx0XHQvLyBhcmUgY2FsbGVkIGJlZm9yZSB0aGUgY29tcG9uZW50RGlkVXBkYXRlKCkgaG9vayBpbiB0aGUgcGFyZW50LlxuXHRcdC8vIE5vdGU6IGRpc2FibGVkIGFzIGl0IGNhdXNlcyBkdXBsaWNhdGUgaG9va3MsIHNlZSBodHRwczovL2dpdGh1Yi5jb20vZGV2ZWxvcGl0L3ByZWFjdC9pc3N1ZXMvNzUwXG5cdFx0Ly8gZmx1c2hNb3VudHMoKTtcblxuXHRcdGlmIChjb21wb25lbnQuY29tcG9uZW50RGlkVXBkYXRlKSB7XG5cdFx0XHRjb21wb25lbnQuY29tcG9uZW50RGlkVXBkYXRlKHByZXZpb3VzUHJvcHMsIHByZXZpb3VzU3RhdGUsIHByZXZpb3VzQ29udGV4dCk7XG5cdFx0fVxuXHRcdGlmIChvcHRpb25zLmFmdGVyVXBkYXRlKSBvcHRpb25zLmFmdGVyVXBkYXRlKGNvbXBvbmVudCk7XG5cdH1cblxuXHRpZiAoY29tcG9uZW50Ll9yZW5kZXJDYWxsYmFja3MgIT0gbnVsbCkge1xuXHRcdHdoaWxlIChjb21wb25lbnQuX3JlbmRlckNhbGxiYWNrcy5sZW5ndGgpIHtcblx0XHRcdGNvbXBvbmVudC5fcmVuZGVyQ2FsbGJhY2tzLnBvcCgpLmNhbGwoY29tcG9uZW50KTtcblx0XHR9XG5cdH1cblxuXHRpZiAoIWRpZmZMZXZlbCAmJiAhaXNDaGlsZCkgZmx1c2hNb3VudHMoKTtcbn1cblxuLyoqIEFwcGx5IHRoZSBDb21wb25lbnQgcmVmZXJlbmNlZCBieSBhIFZOb2RlIHRvIHRoZSBET00uXG4gKlx0QHBhcmFtIHtFbGVtZW50fSBkb21cdFRoZSBET00gbm9kZSB0byBtdXRhdGVcbiAqXHRAcGFyYW0ge1ZOb2RlfSB2bm9kZVx0QSBDb21wb25lbnQtcmVmZXJlbmNpbmcgVk5vZGVcbiAqXHRAcmV0dXJucyB7RWxlbWVudH0gZG9tXHRUaGUgY3JlYXRlZC9tdXRhdGVkIGVsZW1lbnRcbiAqXHRAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBidWlsZENvbXBvbmVudEZyb21WTm9kZShkb20sIHZub2RlLCBjb250ZXh0LCBtb3VudEFsbCkge1xuXHR2YXIgYyA9IGRvbSAmJiBkb20uX2NvbXBvbmVudCxcblx0ICAgIG9yaWdpbmFsQ29tcG9uZW50ID0gYyxcblx0ICAgIG9sZERvbSA9IGRvbSxcblx0ICAgIGlzRGlyZWN0T3duZXIgPSBjICYmIGRvbS5fY29tcG9uZW50Q29uc3RydWN0b3IgPT09IHZub2RlLm5vZGVOYW1lLFxuXHQgICAgaXNPd25lciA9IGlzRGlyZWN0T3duZXIsXG5cdCAgICBwcm9wcyA9IGdldE5vZGVQcm9wcyh2bm9kZSk7XG5cdHdoaWxlIChjICYmICFpc093bmVyICYmIChjID0gYy5fcGFyZW50Q29tcG9uZW50KSkge1xuXHRcdGlzT3duZXIgPSBjLmNvbnN0cnVjdG9yID09PSB2bm9kZS5ub2RlTmFtZTtcblx0fVxuXG5cdGlmIChjICYmIGlzT3duZXIgJiYgKCFtb3VudEFsbCB8fCBjLl9jb21wb25lbnQpKSB7XG5cdFx0c2V0Q29tcG9uZW50UHJvcHMoYywgcHJvcHMsIDMsIGNvbnRleHQsIG1vdW50QWxsKTtcblx0XHRkb20gPSBjLmJhc2U7XG5cdH0gZWxzZSB7XG5cdFx0aWYgKG9yaWdpbmFsQ29tcG9uZW50ICYmICFpc0RpcmVjdE93bmVyKSB7XG5cdFx0XHR1bm1vdW50Q29tcG9uZW50KG9yaWdpbmFsQ29tcG9uZW50KTtcblx0XHRcdGRvbSA9IG9sZERvbSA9IG51bGw7XG5cdFx0fVxuXG5cdFx0YyA9IGNyZWF0ZUNvbXBvbmVudCh2bm9kZS5ub2RlTmFtZSwgcHJvcHMsIGNvbnRleHQpO1xuXHRcdGlmIChkb20gJiYgIWMubmV4dEJhc2UpIHtcblx0XHRcdGMubmV4dEJhc2UgPSBkb207XG5cdFx0XHQvLyBwYXNzaW5nIGRvbS9vbGREb20gYXMgbmV4dEJhc2Ugd2lsbCByZWN5Y2xlIGl0IGlmIHVudXNlZCwgc28gYnlwYXNzIHJlY3ljbGluZyBvbiBMMjI5OlxuXHRcdFx0b2xkRG9tID0gbnVsbDtcblx0XHR9XG5cdFx0c2V0Q29tcG9uZW50UHJvcHMoYywgcHJvcHMsIDEsIGNvbnRleHQsIG1vdW50QWxsKTtcblx0XHRkb20gPSBjLmJhc2U7XG5cblx0XHRpZiAob2xkRG9tICYmIGRvbSAhPT0gb2xkRG9tKSB7XG5cdFx0XHRvbGREb20uX2NvbXBvbmVudCA9IG51bGw7XG5cdFx0XHRyZWNvbGxlY3ROb2RlVHJlZShvbGREb20sIGZhbHNlKTtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gZG9tO1xufVxuXG4vKiogUmVtb3ZlIGEgY29tcG9uZW50IGZyb20gdGhlIERPTSBhbmQgcmVjeWNsZSBpdC5cbiAqXHRAcGFyYW0ge0NvbXBvbmVudH0gY29tcG9uZW50XHRUaGUgQ29tcG9uZW50IGluc3RhbmNlIHRvIHVubW91bnRcbiAqXHRAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiB1bm1vdW50Q29tcG9uZW50KGNvbXBvbmVudCkge1xuXHRpZiAob3B0aW9ucy5iZWZvcmVVbm1vdW50KSBvcHRpb25zLmJlZm9yZVVubW91bnQoY29tcG9uZW50KTtcblxuXHR2YXIgYmFzZSA9IGNvbXBvbmVudC5iYXNlO1xuXG5cdGNvbXBvbmVudC5fZGlzYWJsZSA9IHRydWU7XG5cblx0aWYgKGNvbXBvbmVudC5jb21wb25lbnRXaWxsVW5tb3VudCkgY29tcG9uZW50LmNvbXBvbmVudFdpbGxVbm1vdW50KCk7XG5cblx0Y29tcG9uZW50LmJhc2UgPSBudWxsO1xuXG5cdC8vIHJlY3Vyc2l2ZWx5IHRlYXIgZG93biAmIHJlY29sbGVjdCBoaWdoLW9yZGVyIGNvbXBvbmVudCBjaGlsZHJlbjpcblx0dmFyIGlubmVyID0gY29tcG9uZW50Ll9jb21wb25lbnQ7XG5cdGlmIChpbm5lcikge1xuXHRcdHVubW91bnRDb21wb25lbnQoaW5uZXIpO1xuXHR9IGVsc2UgaWYgKGJhc2UpIHtcblx0XHRpZiAoYmFzZVsnX19wcmVhY3RhdHRyXyddICYmIGJhc2VbJ19fcHJlYWN0YXR0cl8nXS5yZWYpIGJhc2VbJ19fcHJlYWN0YXR0cl8nXS5yZWYobnVsbCk7XG5cblx0XHRjb21wb25lbnQubmV4dEJhc2UgPSBiYXNlO1xuXG5cdFx0cmVtb3ZlTm9kZShiYXNlKTtcblx0XHRjb2xsZWN0Q29tcG9uZW50KGNvbXBvbmVudCk7XG5cblx0XHRyZW1vdmVDaGlsZHJlbihiYXNlKTtcblx0fVxuXG5cdGlmIChjb21wb25lbnQuX19yZWYpIGNvbXBvbmVudC5fX3JlZihudWxsKTtcbn1cblxuLyoqIEJhc2UgQ29tcG9uZW50IGNsYXNzLlxuICpcdFByb3ZpZGVzIGBzZXRTdGF0ZSgpYCBhbmQgYGZvcmNlVXBkYXRlKClgLCB3aGljaCB0cmlnZ2VyIHJlbmRlcmluZy5cbiAqXHRAcHVibGljXG4gKlxuICpcdEBleGFtcGxlXG4gKlx0Y2xhc3MgTXlGb28gZXh0ZW5kcyBDb21wb25lbnQge1xuICpcdFx0cmVuZGVyKHByb3BzLCBzdGF0ZSkge1xuICpcdFx0XHRyZXR1cm4gPGRpdiAvPjtcbiAqXHRcdH1cbiAqXHR9XG4gKi9cbmZ1bmN0aW9uIENvbXBvbmVudChwcm9wcywgY29udGV4dCkge1xuXHR0aGlzLl9kaXJ0eSA9IHRydWU7XG5cblx0LyoqIEBwdWJsaWNcbiAgKlx0QHR5cGUge29iamVjdH1cbiAgKi9cblx0dGhpcy5jb250ZXh0ID0gY29udGV4dDtcblxuXHQvKiogQHB1YmxpY1xuICAqXHRAdHlwZSB7b2JqZWN0fVxuICAqL1xuXHR0aGlzLnByb3BzID0gcHJvcHM7XG5cblx0LyoqIEBwdWJsaWNcbiAgKlx0QHR5cGUge29iamVjdH1cbiAgKi9cblx0dGhpcy5zdGF0ZSA9IHRoaXMuc3RhdGUgfHwge307XG59XG5cbmV4dGVuZChDb21wb25lbnQucHJvdG90eXBlLCB7XG5cblx0LyoqIFJldHVybnMgYSBgYm9vbGVhbmAgaW5kaWNhdGluZyBpZiB0aGUgY29tcG9uZW50IHNob3VsZCByZS1yZW5kZXIgd2hlbiByZWNlaXZpbmcgdGhlIGdpdmVuIGBwcm9wc2AgYW5kIGBzdGF0ZWAuXG4gICpcdEBwYXJhbSB7b2JqZWN0fSBuZXh0UHJvcHNcbiAgKlx0QHBhcmFtIHtvYmplY3R9IG5leHRTdGF0ZVxuICAqXHRAcGFyYW0ge29iamVjdH0gbmV4dENvbnRleHRcbiAgKlx0QHJldHVybnMge0Jvb2xlYW59IHNob3VsZCB0aGUgY29tcG9uZW50IHJlLXJlbmRlclxuICAqXHRAbmFtZSBzaG91bGRDb21wb25lbnRVcGRhdGVcbiAgKlx0QGZ1bmN0aW9uXG4gICovXG5cblx0LyoqIFVwZGF0ZSBjb21wb25lbnQgc3RhdGUgYnkgY29weWluZyBwcm9wZXJ0aWVzIGZyb20gYHN0YXRlYCB0byBgdGhpcy5zdGF0ZWAuXG4gICpcdEBwYXJhbSB7b2JqZWN0fSBzdGF0ZVx0XHRBIGhhc2ggb2Ygc3RhdGUgcHJvcGVydGllcyB0byB1cGRhdGUgd2l0aCBuZXcgdmFsdWVzXG4gICpcdEBwYXJhbSB7ZnVuY3Rpb259IGNhbGxiYWNrXHRBIGZ1bmN0aW9uIHRvIGJlIGNhbGxlZCBvbmNlIGNvbXBvbmVudCBzdGF0ZSBpcyB1cGRhdGVkXG4gICovXG5cdHNldFN0YXRlOiBmdW5jdGlvbiBzZXRTdGF0ZShzdGF0ZSwgY2FsbGJhY2spIHtcblx0XHR2YXIgcyA9IHRoaXMuc3RhdGU7XG5cdFx0aWYgKCF0aGlzLnByZXZTdGF0ZSkgdGhpcy5wcmV2U3RhdGUgPSBleHRlbmQoe30sIHMpO1xuXHRcdGV4dGVuZChzLCB0eXBlb2Ygc3RhdGUgPT09ICdmdW5jdGlvbicgPyBzdGF0ZShzLCB0aGlzLnByb3BzKSA6IHN0YXRlKTtcblx0XHRpZiAoY2FsbGJhY2spICh0aGlzLl9yZW5kZXJDYWxsYmFja3MgPSB0aGlzLl9yZW5kZXJDYWxsYmFja3MgfHwgW10pLnB1c2goY2FsbGJhY2spO1xuXHRcdGVucXVldWVSZW5kZXIodGhpcyk7XG5cdH0sXG5cblxuXHQvKiogSW1tZWRpYXRlbHkgcGVyZm9ybSBhIHN5bmNocm9ub3VzIHJlLXJlbmRlciBvZiB0aGUgY29tcG9uZW50LlxuICAqXHRAcGFyYW0ge2Z1bmN0aW9ufSBjYWxsYmFja1x0XHRBIGZ1bmN0aW9uIHRvIGJlIGNhbGxlZCBhZnRlciBjb21wb25lbnQgaXMgcmUtcmVuZGVyZWQuXG4gICpcdEBwcml2YXRlXG4gICovXG5cdGZvcmNlVXBkYXRlOiBmdW5jdGlvbiBmb3JjZVVwZGF0ZShjYWxsYmFjaykge1xuXHRcdGlmIChjYWxsYmFjaykgKHRoaXMuX3JlbmRlckNhbGxiYWNrcyA9IHRoaXMuX3JlbmRlckNhbGxiYWNrcyB8fCBbXSkucHVzaChjYWxsYmFjayk7XG5cdFx0cmVuZGVyQ29tcG9uZW50KHRoaXMsIDIpO1xuXHR9LFxuXG5cblx0LyoqIEFjY2VwdHMgYHByb3BzYCBhbmQgYHN0YXRlYCwgYW5kIHJldHVybnMgYSBuZXcgVmlydHVhbCBET00gdHJlZSB0byBidWlsZC5cbiAgKlx0VmlydHVhbCBET00gaXMgZ2VuZXJhbGx5IGNvbnN0cnVjdGVkIHZpYSBbSlNYXShodHRwOi8vamFzb25mb3JtYXQuY29tL3d0Zi1pcy1qc3gpLlxuICAqXHRAcGFyYW0ge29iamVjdH0gcHJvcHNcdFx0UHJvcHMgKGVnOiBKU1ggYXR0cmlidXRlcykgcmVjZWl2ZWQgZnJvbSBwYXJlbnQgZWxlbWVudC9jb21wb25lbnRcbiAgKlx0QHBhcmFtIHtvYmplY3R9IHN0YXRlXHRcdFRoZSBjb21wb25lbnQncyBjdXJyZW50IHN0YXRlXG4gICpcdEBwYXJhbSB7b2JqZWN0fSBjb250ZXh0XHRcdENvbnRleHQgb2JqZWN0IChpZiBhIHBhcmVudCBjb21wb25lbnQgaGFzIHByb3ZpZGVkIGNvbnRleHQpXG4gICpcdEByZXR1cm5zIFZOb2RlXG4gICovXG5cdHJlbmRlcjogZnVuY3Rpb24gcmVuZGVyKCkge31cbn0pO1xuXG4vKiogUmVuZGVyIEpTWCBpbnRvIGEgYHBhcmVudGAgRWxlbWVudC5cbiAqXHRAcGFyYW0ge1ZOb2RlfSB2bm9kZVx0XHRBIChKU1gpIFZOb2RlIHRvIHJlbmRlclxuICpcdEBwYXJhbSB7RWxlbWVudH0gcGFyZW50XHRcdERPTSBlbGVtZW50IHRvIHJlbmRlciBpbnRvXG4gKlx0QHBhcmFtIHtFbGVtZW50fSBbbWVyZ2VdXHRBdHRlbXB0IHRvIHJlLXVzZSBhbiBleGlzdGluZyBET00gdHJlZSByb290ZWQgYXQgYG1lcmdlYFxuICpcdEBwdWJsaWNcbiAqXG4gKlx0QGV4YW1wbGVcbiAqXHQvLyByZW5kZXIgYSBkaXYgaW50byA8Ym9keT46XG4gKlx0cmVuZGVyKDxkaXYgaWQ9XCJoZWxsb1wiPmhlbGxvITwvZGl2PiwgZG9jdW1lbnQuYm9keSk7XG4gKlxuICpcdEBleGFtcGxlXG4gKlx0Ly8gcmVuZGVyIGEgXCJUaGluZ1wiIGNvbXBvbmVudCBpbnRvICNmb286XG4gKlx0Y29uc3QgVGhpbmcgPSAoeyBuYW1lIH0pID0+IDxzcGFuPnsgbmFtZSB9PC9zcGFuPjtcbiAqXHRyZW5kZXIoPFRoaW5nIG5hbWU9XCJvbmVcIiAvPiwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2ZvbycpKTtcbiAqL1xuZnVuY3Rpb24gcmVuZGVyKHZub2RlLCBwYXJlbnQsIG1lcmdlKSB7XG4gIHJldHVybiBkaWZmKG1lcmdlLCB2bm9kZSwge30sIGZhbHNlLCBwYXJlbnQsIGZhbHNlKTtcbn1cblxudmFyIHByZWFjdCA9IHtcblx0aDogaCxcblx0Y3JlYXRlRWxlbWVudDogaCxcblx0Y2xvbmVFbGVtZW50OiBjbG9uZUVsZW1lbnQsXG5cdENvbXBvbmVudDogQ29tcG9uZW50LFxuXHRyZW5kZXI6IHJlbmRlcixcblx0cmVyZW5kZXI6IHJlcmVuZGVyLFxuXHRvcHRpb25zOiBvcHRpb25zXG59O1xuXG5leHBvcnQgZGVmYXVsdCBwcmVhY3Q7XG5leHBvcnQgeyBoLCBoIGFzIGNyZWF0ZUVsZW1lbnQsIGNsb25lRWxlbWVudCwgQ29tcG9uZW50LCByZW5kZXIsIHJlcmVuZGVyLCBvcHRpb25zIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1wcmVhY3QuZXNtLmpzLm1hcFxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL3ByZWFjdC9kaXN0L3ByZWFjdC5lc20uanNcbi8vIG1vZHVsZSBpZCA9IC4uL25vZGVfbW9kdWxlcy9wcmVhY3QvZGlzdC9wcmVhY3QuZXNtLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gbWFpbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE0LXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuLy8gVGhpcyBtZXRob2Qgb2Ygb2J0YWluaW5nIGEgcmVmZXJlbmNlIHRvIHRoZSBnbG9iYWwgb2JqZWN0IG5lZWRzIHRvIGJlXG4vLyBrZXB0IGlkZW50aWNhbCB0byB0aGUgd2F5IGl0IGlzIG9idGFpbmVkIGluIHJ1bnRpbWUuanNcbnZhciBnID0gKGZ1bmN0aW9uKCkge1xuICByZXR1cm4gdGhpcyB8fCAodHlwZW9mIHNlbGYgPT09IFwib2JqZWN0XCIgJiYgc2VsZik7XG59KSgpIHx8IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKTtcblxuLy8gVXNlIGBnZXRPd25Qcm9wZXJ0eU5hbWVzYCBiZWNhdXNlIG5vdCBhbGwgYnJvd3NlcnMgc3VwcG9ydCBjYWxsaW5nXG4vLyBgaGFzT3duUHJvcGVydHlgIG9uIHRoZSBnbG9iYWwgYHNlbGZgIG9iamVjdCBpbiBhIHdvcmtlci4gU2VlICMxODMuXG52YXIgaGFkUnVudGltZSA9IGcucmVnZW5lcmF0b3JSdW50aW1lICYmXG4gIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGcpLmluZGV4T2YoXCJyZWdlbmVyYXRvclJ1bnRpbWVcIikgPj0gMDtcblxuLy8gU2F2ZSB0aGUgb2xkIHJlZ2VuZXJhdG9yUnVudGltZSBpbiBjYXNlIGl0IG5lZWRzIHRvIGJlIHJlc3RvcmVkIGxhdGVyLlxudmFyIG9sZFJ1bnRpbWUgPSBoYWRSdW50aW1lICYmIGcucmVnZW5lcmF0b3JSdW50aW1lO1xuXG4vLyBGb3JjZSByZWV2YWx1dGF0aW9uIG9mIHJ1bnRpbWUuanMuXG5nLnJlZ2VuZXJhdG9yUnVudGltZSA9IHVuZGVmaW5lZDtcblxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi9ydW50aW1lXCIpO1xuXG5pZiAoaGFkUnVudGltZSkge1xuICAvLyBSZXN0b3JlIHRoZSBvcmlnaW5hbCBydW50aW1lLlxuICBnLnJlZ2VuZXJhdG9yUnVudGltZSA9IG9sZFJ1bnRpbWU7XG59IGVsc2Uge1xuICAvLyBSZW1vdmUgdGhlIGdsb2JhbCBwcm9wZXJ0eSBhZGRlZCBieSBydW50aW1lLmpzLlxuICB0cnkge1xuICAgIGRlbGV0ZSBnLnJlZ2VuZXJhdG9yUnVudGltZTtcbiAgfSBjYXRjaChlKSB7XG4gICAgZy5yZWdlbmVyYXRvclJ1bnRpbWUgPSB1bmRlZmluZWQ7XG4gIH1cbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9yZWdlbmVyYXRvci1ydW50aW1lL3J1bnRpbWUtbW9kdWxlLmpzXG4vLyBtb2R1bGUgaWQgPSAuLi9ub2RlX21vZHVsZXMvcmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lLW1vZHVsZS5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IG1haW4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNC1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbiEoZnVuY3Rpb24oZ2xvYmFsKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIHZhciBPcCA9IE9iamVjdC5wcm90b3R5cGU7XG4gIHZhciBoYXNPd24gPSBPcC5oYXNPd25Qcm9wZXJ0eTtcbiAgdmFyIHVuZGVmaW5lZDsgLy8gTW9yZSBjb21wcmVzc2libGUgdGhhbiB2b2lkIDAuXG4gIHZhciAkU3ltYm9sID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiID8gU3ltYm9sIDoge307XG4gIHZhciBpdGVyYXRvclN5bWJvbCA9ICRTeW1ib2wuaXRlcmF0b3IgfHwgXCJAQGl0ZXJhdG9yXCI7XG4gIHZhciBhc3luY0l0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5hc3luY0l0ZXJhdG9yIHx8IFwiQEBhc3luY0l0ZXJhdG9yXCI7XG4gIHZhciB0b1N0cmluZ1RhZ1N5bWJvbCA9ICRTeW1ib2wudG9TdHJpbmdUYWcgfHwgXCJAQHRvU3RyaW5nVGFnXCI7XG5cbiAgdmFyIGluTW9kdWxlID0gdHlwZW9mIG1vZHVsZSA9PT0gXCJvYmplY3RcIjtcbiAgdmFyIHJ1bnRpbWUgPSBnbG9iYWwucmVnZW5lcmF0b3JSdW50aW1lO1xuICBpZiAocnVudGltZSkge1xuICAgIGlmIChpbk1vZHVsZSkge1xuICAgICAgLy8gSWYgcmVnZW5lcmF0b3JSdW50aW1lIGlzIGRlZmluZWQgZ2xvYmFsbHkgYW5kIHdlJ3JlIGluIGEgbW9kdWxlLFxuICAgICAgLy8gbWFrZSB0aGUgZXhwb3J0cyBvYmplY3QgaWRlbnRpY2FsIHRvIHJlZ2VuZXJhdG9yUnVudGltZS5cbiAgICAgIG1vZHVsZS5leHBvcnRzID0gcnVudGltZTtcbiAgICB9XG4gICAgLy8gRG9uJ3QgYm90aGVyIGV2YWx1YXRpbmcgdGhlIHJlc3Qgb2YgdGhpcyBmaWxlIGlmIHRoZSBydW50aW1lIHdhc1xuICAgIC8vIGFscmVhZHkgZGVmaW5lZCBnbG9iYWxseS5cbiAgICByZXR1cm47XG4gIH1cblxuICAvLyBEZWZpbmUgdGhlIHJ1bnRpbWUgZ2xvYmFsbHkgKGFzIGV4cGVjdGVkIGJ5IGdlbmVyYXRlZCBjb2RlKSBhcyBlaXRoZXJcbiAgLy8gbW9kdWxlLmV4cG9ydHMgKGlmIHdlJ3JlIGluIGEgbW9kdWxlKSBvciBhIG5ldywgZW1wdHkgb2JqZWN0LlxuICBydW50aW1lID0gZ2xvYmFsLnJlZ2VuZXJhdG9yUnVudGltZSA9IGluTW9kdWxlID8gbW9kdWxlLmV4cG9ydHMgOiB7fTtcblxuICBmdW5jdGlvbiB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSB7XG4gICAgLy8gSWYgb3V0ZXJGbiBwcm92aWRlZCBhbmQgb3V0ZXJGbi5wcm90b3R5cGUgaXMgYSBHZW5lcmF0b3IsIHRoZW4gb3V0ZXJGbi5wcm90b3R5cGUgaW5zdGFuY2VvZiBHZW5lcmF0b3IuXG4gICAgdmFyIHByb3RvR2VuZXJhdG9yID0gb3V0ZXJGbiAmJiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvciA/IG91dGVyRm4gOiBHZW5lcmF0b3I7XG4gICAgdmFyIGdlbmVyYXRvciA9IE9iamVjdC5jcmVhdGUocHJvdG9HZW5lcmF0b3IucHJvdG90eXBlKTtcbiAgICB2YXIgY29udGV4dCA9IG5ldyBDb250ZXh0KHRyeUxvY3NMaXN0IHx8IFtdKTtcblxuICAgIC8vIFRoZSAuX2ludm9rZSBtZXRob2QgdW5pZmllcyB0aGUgaW1wbGVtZW50YXRpb25zIG9mIHRoZSAubmV4dCxcbiAgICAvLyAudGhyb3csIGFuZCAucmV0dXJuIG1ldGhvZHMuXG4gICAgZ2VuZXJhdG9yLl9pbnZva2UgPSBtYWtlSW52b2tlTWV0aG9kKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGdlbmVyYXRvcjtcbiAgfVxuICBydW50aW1lLndyYXAgPSB3cmFwO1xuXG4gIC8vIFRyeS9jYXRjaCBoZWxwZXIgdG8gbWluaW1pemUgZGVvcHRpbWl6YXRpb25zLiBSZXR1cm5zIGEgY29tcGxldGlvblxuICAvLyByZWNvcmQgbGlrZSBjb250ZXh0LnRyeUVudHJpZXNbaV0uY29tcGxldGlvbi4gVGhpcyBpbnRlcmZhY2UgY291bGRcbiAgLy8gaGF2ZSBiZWVuIChhbmQgd2FzIHByZXZpb3VzbHkpIGRlc2lnbmVkIHRvIHRha2UgYSBjbG9zdXJlIHRvIGJlXG4gIC8vIGludm9rZWQgd2l0aG91dCBhcmd1bWVudHMsIGJ1dCBpbiBhbGwgdGhlIGNhc2VzIHdlIGNhcmUgYWJvdXQgd2VcbiAgLy8gYWxyZWFkeSBoYXZlIGFuIGV4aXN0aW5nIG1ldGhvZCB3ZSB3YW50IHRvIGNhbGwsIHNvIHRoZXJlJ3Mgbm8gbmVlZFxuICAvLyB0byBjcmVhdGUgYSBuZXcgZnVuY3Rpb24gb2JqZWN0LiBXZSBjYW4gZXZlbiBnZXQgYXdheSB3aXRoIGFzc3VtaW5nXG4gIC8vIHRoZSBtZXRob2QgdGFrZXMgZXhhY3RseSBvbmUgYXJndW1lbnQsIHNpbmNlIHRoYXQgaGFwcGVucyB0byBiZSB0cnVlXG4gIC8vIGluIGV2ZXJ5IGNhc2UsIHNvIHdlIGRvbid0IGhhdmUgdG8gdG91Y2ggdGhlIGFyZ3VtZW50cyBvYmplY3QuIFRoZVxuICAvLyBvbmx5IGFkZGl0aW9uYWwgYWxsb2NhdGlvbiByZXF1aXJlZCBpcyB0aGUgY29tcGxldGlvbiByZWNvcmQsIHdoaWNoXG4gIC8vIGhhcyBhIHN0YWJsZSBzaGFwZSBhbmQgc28gaG9wZWZ1bGx5IHNob3VsZCBiZSBjaGVhcCB0byBhbGxvY2F0ZS5cbiAgZnVuY3Rpb24gdHJ5Q2F0Y2goZm4sIG9iaiwgYXJnKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiB7IHR5cGU6IFwibm9ybWFsXCIsIGFyZzogZm4uY2FsbChvYmosIGFyZykgfTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybiB7IHR5cGU6IFwidGhyb3dcIiwgYXJnOiBlcnIgfTtcbiAgICB9XG4gIH1cblxuICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRTdGFydCA9IFwic3VzcGVuZGVkU3RhcnRcIjtcbiAgdmFyIEdlblN0YXRlU3VzcGVuZGVkWWllbGQgPSBcInN1c3BlbmRlZFlpZWxkXCI7XG4gIHZhciBHZW5TdGF0ZUV4ZWN1dGluZyA9IFwiZXhlY3V0aW5nXCI7XG4gIHZhciBHZW5TdGF0ZUNvbXBsZXRlZCA9IFwiY29tcGxldGVkXCI7XG5cbiAgLy8gUmV0dXJuaW5nIHRoaXMgb2JqZWN0IGZyb20gdGhlIGlubmVyRm4gaGFzIHRoZSBzYW1lIGVmZmVjdCBhc1xuICAvLyBicmVha2luZyBvdXQgb2YgdGhlIGRpc3BhdGNoIHN3aXRjaCBzdGF0ZW1lbnQuXG4gIHZhciBDb250aW51ZVNlbnRpbmVsID0ge307XG5cbiAgLy8gRHVtbXkgY29uc3RydWN0b3IgZnVuY3Rpb25zIHRoYXQgd2UgdXNlIGFzIHRoZSAuY29uc3RydWN0b3IgYW5kXG4gIC8vIC5jb25zdHJ1Y3Rvci5wcm90b3R5cGUgcHJvcGVydGllcyBmb3IgZnVuY3Rpb25zIHRoYXQgcmV0dXJuIEdlbmVyYXRvclxuICAvLyBvYmplY3RzLiBGb3IgZnVsbCBzcGVjIGNvbXBsaWFuY2UsIHlvdSBtYXkgd2lzaCB0byBjb25maWd1cmUgeW91clxuICAvLyBtaW5pZmllciBub3QgdG8gbWFuZ2xlIHRoZSBuYW1lcyBvZiB0aGVzZSB0d28gZnVuY3Rpb25zLlxuICBmdW5jdGlvbiBHZW5lcmF0b3IoKSB7fVxuICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvbigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKCkge31cblxuICAvLyBUaGlzIGlzIGEgcG9seWZpbGwgZm9yICVJdGVyYXRvclByb3RvdHlwZSUgZm9yIGVudmlyb25tZW50cyB0aGF0XG4gIC8vIGRvbid0IG5hdGl2ZWx5IHN1cHBvcnQgaXQuXG4gIHZhciBJdGVyYXRvclByb3RvdHlwZSA9IHt9O1xuICBJdGVyYXRvclByb3RvdHlwZVtpdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgdmFyIGdldFByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mO1xuICB2YXIgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgPSBnZXRQcm90byAmJiBnZXRQcm90byhnZXRQcm90byh2YWx1ZXMoW10pKSk7XG4gIGlmIChOYXRpdmVJdGVyYXRvclByb3RvdHlwZSAmJlxuICAgICAgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgIT09IE9wICYmXG4gICAgICBoYXNPd24uY2FsbChOYXRpdmVJdGVyYXRvclByb3RvdHlwZSwgaXRlcmF0b3JTeW1ib2wpKSB7XG4gICAgLy8gVGhpcyBlbnZpcm9ubWVudCBoYXMgYSBuYXRpdmUgJUl0ZXJhdG9yUHJvdG90eXBlJTsgdXNlIGl0IGluc3RlYWRcbiAgICAvLyBvZiB0aGUgcG9seWZpbGwuXG4gICAgSXRlcmF0b3JQcm90b3R5cGUgPSBOYXRpdmVJdGVyYXRvclByb3RvdHlwZTtcbiAgfVxuXG4gIHZhciBHcCA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLnByb3RvdHlwZSA9XG4gICAgR2VuZXJhdG9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoSXRlcmF0b3JQcm90b3R5cGUpO1xuICBHZW5lcmF0b3JGdW5jdGlvbi5wcm90b3R5cGUgPSBHcC5jb25zdHJ1Y3RvciA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlO1xuICBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IEdlbmVyYXRvckZ1bmN0aW9uO1xuICBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZVt0b1N0cmluZ1RhZ1N5bWJvbF0gPVxuICAgIEdlbmVyYXRvckZ1bmN0aW9uLmRpc3BsYXlOYW1lID0gXCJHZW5lcmF0b3JGdW5jdGlvblwiO1xuXG4gIC8vIEhlbHBlciBmb3IgZGVmaW5pbmcgdGhlIC5uZXh0LCAudGhyb3csIGFuZCAucmV0dXJuIG1ldGhvZHMgb2YgdGhlXG4gIC8vIEl0ZXJhdG9yIGludGVyZmFjZSBpbiB0ZXJtcyBvZiBhIHNpbmdsZSAuX2ludm9rZSBtZXRob2QuXG4gIGZ1bmN0aW9uIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhwcm90b3R5cGUpIHtcbiAgICBbXCJuZXh0XCIsIFwidGhyb3dcIiwgXCJyZXR1cm5cIl0uZm9yRWFjaChmdW5jdGlvbihtZXRob2QpIHtcbiAgICAgIHByb3RvdHlwZVttZXRob2RdID0gZnVuY3Rpb24oYXJnKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pbnZva2UobWV0aG9kLCBhcmcpO1xuICAgICAgfTtcbiAgICB9KTtcbiAgfVxuXG4gIHJ1bnRpbWUuaXNHZW5lcmF0b3JGdW5jdGlvbiA9IGZ1bmN0aW9uKGdlbkZ1bikge1xuICAgIHZhciBjdG9yID0gdHlwZW9mIGdlbkZ1biA9PT0gXCJmdW5jdGlvblwiICYmIGdlbkZ1bi5jb25zdHJ1Y3RvcjtcbiAgICByZXR1cm4gY3RvclxuICAgICAgPyBjdG9yID09PSBHZW5lcmF0b3JGdW5jdGlvbiB8fFxuICAgICAgICAvLyBGb3IgdGhlIG5hdGl2ZSBHZW5lcmF0b3JGdW5jdGlvbiBjb25zdHJ1Y3RvciwgdGhlIGJlc3Qgd2UgY2FuXG4gICAgICAgIC8vIGRvIGlzIHRvIGNoZWNrIGl0cyAubmFtZSBwcm9wZXJ0eS5cbiAgICAgICAgKGN0b3IuZGlzcGxheU5hbWUgfHwgY3Rvci5uYW1lKSA9PT0gXCJHZW5lcmF0b3JGdW5jdGlvblwiXG4gICAgICA6IGZhbHNlO1xuICB9O1xuXG4gIHJ1bnRpbWUubWFyayA9IGZ1bmN0aW9uKGdlbkZ1bikge1xuICAgIGlmIChPYmplY3Quc2V0UHJvdG90eXBlT2YpIHtcbiAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZihnZW5GdW4sIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZ2VuRnVuLl9fcHJvdG9fXyA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlO1xuICAgICAgaWYgKCEodG9TdHJpbmdUYWdTeW1ib2wgaW4gZ2VuRnVuKSkge1xuICAgICAgICBnZW5GdW5bdG9TdHJpbmdUYWdTeW1ib2xdID0gXCJHZW5lcmF0b3JGdW5jdGlvblwiO1xuICAgICAgfVxuICAgIH1cbiAgICBnZW5GdW4ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShHcCk7XG4gICAgcmV0dXJuIGdlbkZ1bjtcbiAgfTtcblxuICAvLyBXaXRoaW4gdGhlIGJvZHkgb2YgYW55IGFzeW5jIGZ1bmN0aW9uLCBgYXdhaXQgeGAgaXMgdHJhbnNmb3JtZWQgdG9cbiAgLy8gYHlpZWxkIHJlZ2VuZXJhdG9yUnVudGltZS5hd3JhcCh4KWAsIHNvIHRoYXQgdGhlIHJ1bnRpbWUgY2FuIHRlc3RcbiAgLy8gYGhhc093bi5jYWxsKHZhbHVlLCBcIl9fYXdhaXRcIilgIHRvIGRldGVybWluZSBpZiB0aGUgeWllbGRlZCB2YWx1ZSBpc1xuICAvLyBtZWFudCB0byBiZSBhd2FpdGVkLlxuICBydW50aW1lLmF3cmFwID0gZnVuY3Rpb24oYXJnKSB7XG4gICAgcmV0dXJuIHsgX19hd2FpdDogYXJnIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gQXN5bmNJdGVyYXRvcihnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBpbnZva2UobWV0aG9kLCBhcmcsIHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGdlbmVyYXRvclttZXRob2RdLCBnZW5lcmF0b3IsIGFyZyk7XG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICByZWplY3QocmVjb3JkLmFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgcmVzdWx0ID0gcmVjb3JkLmFyZztcbiAgICAgICAgdmFyIHZhbHVlID0gcmVzdWx0LnZhbHVlO1xuICAgICAgICBpZiAodmFsdWUgJiZcbiAgICAgICAgICAgIHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIiAmJlxuICAgICAgICAgICAgaGFzT3duLmNhbGwodmFsdWUsIFwiX19hd2FpdFwiKSkge1xuICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodmFsdWUuX19hd2FpdCkudGhlbihmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgICAgaW52b2tlKFwibmV4dFwiLCB2YWx1ZSwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9LCBmdW5jdGlvbihlcnIpIHtcbiAgICAgICAgICAgIGludm9rZShcInRocm93XCIsIGVyciwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodmFsdWUpLnRoZW4oZnVuY3Rpb24odW53cmFwcGVkKSB7XG4gICAgICAgICAgLy8gV2hlbiBhIHlpZWxkZWQgUHJvbWlzZSBpcyByZXNvbHZlZCwgaXRzIGZpbmFsIHZhbHVlIGJlY29tZXNcbiAgICAgICAgICAvLyB0aGUgLnZhbHVlIG9mIHRoZSBQcm9taXNlPHt2YWx1ZSxkb25lfT4gcmVzdWx0IGZvciB0aGVcbiAgICAgICAgICAvLyBjdXJyZW50IGl0ZXJhdGlvbi5cbiAgICAgICAgICByZXN1bHQudmFsdWUgPSB1bndyYXBwZWQ7XG4gICAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICB9LCBmdW5jdGlvbihlcnJvcikge1xuICAgICAgICAgIC8vIElmIGEgcmVqZWN0ZWQgUHJvbWlzZSB3YXMgeWllbGRlZCwgdGhyb3cgdGhlIHJlamVjdGlvbiBiYWNrXG4gICAgICAgICAgLy8gaW50byB0aGUgYXN5bmMgZ2VuZXJhdG9yIGZ1bmN0aW9uIHNvIGl0IGNhbiBiZSBoYW5kbGVkIHRoZXJlLlxuICAgICAgICAgIHJldHVybiBpbnZva2UoXCJ0aHJvd1wiLCBlcnJvciwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIHByZXZpb3VzUHJvbWlzZTtcblxuICAgIGZ1bmN0aW9uIGVucXVldWUobWV0aG9kLCBhcmcpIHtcbiAgICAgIGZ1bmN0aW9uIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgaW52b2tlKG1ldGhvZCwgYXJnLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHByZXZpb3VzUHJvbWlzZSA9XG4gICAgICAgIC8vIElmIGVucXVldWUgaGFzIGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiB3ZSB3YW50IHRvIHdhaXQgdW50aWxcbiAgICAgICAgLy8gYWxsIHByZXZpb3VzIFByb21pc2VzIGhhdmUgYmVlbiByZXNvbHZlZCBiZWZvcmUgY2FsbGluZyBpbnZva2UsXG4gICAgICAgIC8vIHNvIHRoYXQgcmVzdWx0cyBhcmUgYWx3YXlzIGRlbGl2ZXJlZCBpbiB0aGUgY29ycmVjdCBvcmRlci4gSWZcbiAgICAgICAgLy8gZW5xdWV1ZSBoYXMgbm90IGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiBpdCBpcyBpbXBvcnRhbnQgdG9cbiAgICAgICAgLy8gY2FsbCBpbnZva2UgaW1tZWRpYXRlbHksIHdpdGhvdXQgd2FpdGluZyBvbiBhIGNhbGxiYWNrIHRvIGZpcmUsXG4gICAgICAgIC8vIHNvIHRoYXQgdGhlIGFzeW5jIGdlbmVyYXRvciBmdW5jdGlvbiBoYXMgdGhlIG9wcG9ydHVuaXR5IHRvIGRvXG4gICAgICAgIC8vIGFueSBuZWNlc3Nhcnkgc2V0dXAgaW4gYSBwcmVkaWN0YWJsZSB3YXkuIFRoaXMgcHJlZGljdGFiaWxpdHlcbiAgICAgICAgLy8gaXMgd2h5IHRoZSBQcm9taXNlIGNvbnN0cnVjdG9yIHN5bmNocm9ub3VzbHkgaW52b2tlcyBpdHNcbiAgICAgICAgLy8gZXhlY3V0b3IgY2FsbGJhY2ssIGFuZCB3aHkgYXN5bmMgZnVuY3Rpb25zIHN5bmNocm9ub3VzbHlcbiAgICAgICAgLy8gZXhlY3V0ZSBjb2RlIGJlZm9yZSB0aGUgZmlyc3QgYXdhaXQuIFNpbmNlIHdlIGltcGxlbWVudCBzaW1wbGVcbiAgICAgICAgLy8gYXN5bmMgZnVuY3Rpb25zIGluIHRlcm1zIG9mIGFzeW5jIGdlbmVyYXRvcnMsIGl0IGlzIGVzcGVjaWFsbHlcbiAgICAgICAgLy8gaW1wb3J0YW50IHRvIGdldCB0aGlzIHJpZ2h0LCBldmVuIHRob3VnaCBpdCByZXF1aXJlcyBjYXJlLlxuICAgICAgICBwcmV2aW91c1Byb21pc2UgPyBwcmV2aW91c1Byb21pc2UudGhlbihcbiAgICAgICAgICBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyxcbiAgICAgICAgICAvLyBBdm9pZCBwcm9wYWdhdGluZyBmYWlsdXJlcyB0byBQcm9taXNlcyByZXR1cm5lZCBieSBsYXRlclxuICAgICAgICAgIC8vIGludm9jYXRpb25zIG9mIHRoZSBpdGVyYXRvci5cbiAgICAgICAgICBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZ1xuICAgICAgICApIDogY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKTtcbiAgICB9XG5cbiAgICAvLyBEZWZpbmUgdGhlIHVuaWZpZWQgaGVscGVyIG1ldGhvZCB0aGF0IGlzIHVzZWQgdG8gaW1wbGVtZW50IC5uZXh0LFxuICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gKHNlZSBkZWZpbmVJdGVyYXRvck1ldGhvZHMpLlxuICAgIHRoaXMuX2ludm9rZSA9IGVucXVldWU7XG4gIH1cblxuICBkZWZpbmVJdGVyYXRvck1ldGhvZHMoQXN5bmNJdGVyYXRvci5wcm90b3R5cGUpO1xuICBBc3luY0l0ZXJhdG9yLnByb3RvdHlwZVthc3luY0l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcbiAgcnVudGltZS5Bc3luY0l0ZXJhdG9yID0gQXN5bmNJdGVyYXRvcjtcblxuICAvLyBOb3RlIHRoYXQgc2ltcGxlIGFzeW5jIGZ1bmN0aW9ucyBhcmUgaW1wbGVtZW50ZWQgb24gdG9wIG9mXG4gIC8vIEFzeW5jSXRlcmF0b3Igb2JqZWN0czsgdGhleSBqdXN0IHJldHVybiBhIFByb21pc2UgZm9yIHRoZSB2YWx1ZSBvZlxuICAvLyB0aGUgZmluYWwgcmVzdWx0IHByb2R1Y2VkIGJ5IHRoZSBpdGVyYXRvci5cbiAgcnVudGltZS5hc3luYyA9IGZ1bmN0aW9uKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSB7XG4gICAgdmFyIGl0ZXIgPSBuZXcgQXN5bmNJdGVyYXRvcihcbiAgICAgIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpXG4gICAgKTtcblxuICAgIHJldHVybiBydW50aW1lLmlzR2VuZXJhdG9yRnVuY3Rpb24ob3V0ZXJGbilcbiAgICAgID8gaXRlciAvLyBJZiBvdXRlckZuIGlzIGEgZ2VuZXJhdG9yLCByZXR1cm4gdGhlIGZ1bGwgaXRlcmF0b3IuXG4gICAgICA6IGl0ZXIubmV4dCgpLnRoZW4oZnVuY3Rpb24ocmVzdWx0KSB7XG4gICAgICAgICAgcmV0dXJuIHJlc3VsdC5kb25lID8gcmVzdWx0LnZhbHVlIDogaXRlci5uZXh0KCk7XG4gICAgICAgIH0pO1xuICB9O1xuXG4gIGZ1bmN0aW9uIG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCkge1xuICAgIHZhciBzdGF0ZSA9IEdlblN0YXRlU3VzcGVuZGVkU3RhcnQ7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnKSB7XG4gICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlRXhlY3V0aW5nKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IHJ1bm5pbmdcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVDb21wbGV0ZWQpIHtcbiAgICAgICAgaWYgKG1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgdGhyb3cgYXJnO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQmUgZm9yZ2l2aW5nLCBwZXIgMjUuMy4zLjMuMyBvZiB0aGUgc3BlYzpcbiAgICAgICAgLy8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLWdlbmVyYXRvcnJlc3VtZVxuICAgICAgICByZXR1cm4gZG9uZVJlc3VsdCgpO1xuICAgICAgfVxuXG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IG1ldGhvZDtcbiAgICAgIGNvbnRleHQuYXJnID0gYXJnO1xuXG4gICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICB2YXIgZGVsZWdhdGUgPSBjb250ZXh0LmRlbGVnYXRlO1xuICAgICAgICBpZiAoZGVsZWdhdGUpIHtcbiAgICAgICAgICB2YXIgZGVsZWdhdGVSZXN1bHQgPSBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KTtcbiAgICAgICAgICBpZiAoZGVsZWdhdGVSZXN1bHQpIHtcbiAgICAgICAgICAgIGlmIChkZWxlZ2F0ZVJlc3VsdCA9PT0gQ29udGludWVTZW50aW5lbCkgY29udGludWU7XG4gICAgICAgICAgICByZXR1cm4gZGVsZWdhdGVSZXN1bHQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcIm5leHRcIikge1xuICAgICAgICAgIC8vIFNldHRpbmcgY29udGV4dC5fc2VudCBmb3IgbGVnYWN5IHN1cHBvcnQgb2YgQmFiZWwnc1xuICAgICAgICAgIC8vIGZ1bmN0aW9uLnNlbnQgaW1wbGVtZW50YXRpb24uXG4gICAgICAgICAgY29udGV4dC5zZW50ID0gY29udGV4dC5fc2VudCA9IGNvbnRleHQuYXJnO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydCkge1xuICAgICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAgIHRocm93IGNvbnRleHQuYXJnO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oY29udGV4dC5hcmcpO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoY29udGV4dC5tZXRob2QgPT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgICBjb250ZXh0LmFicnVwdChcInJldHVyblwiLCBjb250ZXh0LmFyZyk7XG4gICAgICAgIH1cblxuICAgICAgICBzdGF0ZSA9IEdlblN0YXRlRXhlY3V0aW5nO1xuXG4gICAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChpbm5lckZuLCBzZWxmLCBjb250ZXh0KTtcbiAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcIm5vcm1hbFwiKSB7XG4gICAgICAgICAgLy8gSWYgYW4gZXhjZXB0aW9uIGlzIHRocm93biBmcm9tIGlubmVyRm4sIHdlIGxlYXZlIHN0YXRlID09PVxuICAgICAgICAgIC8vIEdlblN0YXRlRXhlY3V0aW5nIGFuZCBsb29wIGJhY2sgZm9yIGFub3RoZXIgaW52b2NhdGlvbi5cbiAgICAgICAgICBzdGF0ZSA9IGNvbnRleHQuZG9uZVxuICAgICAgICAgICAgPyBHZW5TdGF0ZUNvbXBsZXRlZFxuICAgICAgICAgICAgOiBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkO1xuXG4gICAgICAgICAgaWYgKHJlY29yZC5hcmcgPT09IENvbnRpbnVlU2VudGluZWwpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB2YWx1ZTogcmVjb3JkLmFyZyxcbiAgICAgICAgICAgIGRvbmU6IGNvbnRleHQuZG9uZVxuICAgICAgICAgIH07XG5cbiAgICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAvLyBEaXNwYXRjaCB0aGUgZXhjZXB0aW9uIGJ5IGxvb3BpbmcgYmFjayBhcm91bmQgdG8gdGhlXG4gICAgICAgICAgLy8gY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihjb250ZXh0LmFyZykgY2FsbCBhYm92ZS5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgLy8gQ2FsbCBkZWxlZ2F0ZS5pdGVyYXRvcltjb250ZXh0Lm1ldGhvZF0oY29udGV4dC5hcmcpIGFuZCBoYW5kbGUgdGhlXG4gIC8vIHJlc3VsdCwgZWl0aGVyIGJ5IHJldHVybmluZyBhIHsgdmFsdWUsIGRvbmUgfSByZXN1bHQgZnJvbSB0aGVcbiAgLy8gZGVsZWdhdGUgaXRlcmF0b3IsIG9yIGJ5IG1vZGlmeWluZyBjb250ZXh0Lm1ldGhvZCBhbmQgY29udGV4dC5hcmcsXG4gIC8vIHNldHRpbmcgY29udGV4dC5kZWxlZ2F0ZSB0byBudWxsLCBhbmQgcmV0dXJuaW5nIHRoZSBDb250aW51ZVNlbnRpbmVsLlxuICBmdW5jdGlvbiBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KSB7XG4gICAgdmFyIG1ldGhvZCA9IGRlbGVnYXRlLml0ZXJhdG9yW2NvbnRleHQubWV0aG9kXTtcbiAgICBpZiAobWV0aG9kID09PSB1bmRlZmluZWQpIHtcbiAgICAgIC8vIEEgLnRocm93IG9yIC5yZXR1cm4gd2hlbiB0aGUgZGVsZWdhdGUgaXRlcmF0b3IgaGFzIG5vIC50aHJvd1xuICAgICAgLy8gbWV0aG9kIGFsd2F5cyB0ZXJtaW5hdGVzIHRoZSB5aWVsZCogbG9vcC5cbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuXG4gICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICBpZiAoZGVsZWdhdGUuaXRlcmF0b3IucmV0dXJuKSB7XG4gICAgICAgICAgLy8gSWYgdGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGhhcyBhIHJldHVybiBtZXRob2QsIGdpdmUgaXQgYVxuICAgICAgICAgIC8vIGNoYW5jZSB0byBjbGVhbiB1cC5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwicmV0dXJuXCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCk7XG5cbiAgICAgICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgLy8gSWYgbWF5YmVJbnZva2VEZWxlZ2F0ZShjb250ZXh0KSBjaGFuZ2VkIGNvbnRleHQubWV0aG9kIGZyb21cbiAgICAgICAgICAgIC8vIFwicmV0dXJuXCIgdG8gXCJ0aHJvd1wiLCBsZXQgdGhhdCBvdmVycmlkZSB0aGUgVHlwZUVycm9yIGJlbG93LlxuICAgICAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICAgIGNvbnRleHQuYXJnID0gbmV3IFR5cGVFcnJvcihcbiAgICAgICAgICBcIlRoZSBpdGVyYXRvciBkb2VzIG5vdCBwcm92aWRlIGEgJ3Rocm93JyBtZXRob2RcIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChtZXRob2QsIGRlbGVnYXRlLml0ZXJhdG9yLCBjb250ZXh0LmFyZyk7XG5cbiAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICBjb250ZXh0LmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIHZhciBpbmZvID0gcmVjb3JkLmFyZztcblxuICAgIGlmICghIGluZm8pIHtcbiAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgY29udGV4dC5hcmcgPSBuZXcgVHlwZUVycm9yKFwiaXRlcmF0b3IgcmVzdWx0IGlzIG5vdCBhbiBvYmplY3RcIik7XG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIGlmIChpbmZvLmRvbmUpIHtcbiAgICAgIC8vIEFzc2lnbiB0aGUgcmVzdWx0IG9mIHRoZSBmaW5pc2hlZCBkZWxlZ2F0ZSB0byB0aGUgdGVtcG9yYXJ5XG4gICAgICAvLyB2YXJpYWJsZSBzcGVjaWZpZWQgYnkgZGVsZWdhdGUucmVzdWx0TmFtZSAoc2VlIGRlbGVnYXRlWWllbGQpLlxuICAgICAgY29udGV4dFtkZWxlZ2F0ZS5yZXN1bHROYW1lXSA9IGluZm8udmFsdWU7XG5cbiAgICAgIC8vIFJlc3VtZSBleGVjdXRpb24gYXQgdGhlIGRlc2lyZWQgbG9jYXRpb24gKHNlZSBkZWxlZ2F0ZVlpZWxkKS5cbiAgICAgIGNvbnRleHQubmV4dCA9IGRlbGVnYXRlLm5leHRMb2M7XG5cbiAgICAgIC8vIElmIGNvbnRleHQubWV0aG9kIHdhcyBcInRocm93XCIgYnV0IHRoZSBkZWxlZ2F0ZSBoYW5kbGVkIHRoZVxuICAgICAgLy8gZXhjZXB0aW9uLCBsZXQgdGhlIG91dGVyIGdlbmVyYXRvciBwcm9jZWVkIG5vcm1hbGx5LiBJZlxuICAgICAgLy8gY29udGV4dC5tZXRob2Qgd2FzIFwibmV4dFwiLCBmb3JnZXQgY29udGV4dC5hcmcgc2luY2UgaXQgaGFzIGJlZW5cbiAgICAgIC8vIFwiY29uc3VtZWRcIiBieSB0aGUgZGVsZWdhdGUgaXRlcmF0b3IuIElmIGNvbnRleHQubWV0aG9kIHdhc1xuICAgICAgLy8gXCJyZXR1cm5cIiwgYWxsb3cgdGhlIG9yaWdpbmFsIC5yZXR1cm4gY2FsbCB0byBjb250aW51ZSBpbiB0aGVcbiAgICAgIC8vIG91dGVyIGdlbmVyYXRvci5cbiAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCAhPT0gXCJyZXR1cm5cIikge1xuICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBSZS15aWVsZCB0aGUgcmVzdWx0IHJldHVybmVkIGJ5IHRoZSBkZWxlZ2F0ZSBtZXRob2QuXG4gICAgICByZXR1cm4gaW5mbztcbiAgICB9XG5cbiAgICAvLyBUaGUgZGVsZWdhdGUgaXRlcmF0b3IgaXMgZmluaXNoZWQsIHNvIGZvcmdldCBpdCBhbmQgY29udGludWUgd2l0aFxuICAgIC8vIHRoZSBvdXRlciBnZW5lcmF0b3IuXG4gICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gIH1cblxuICAvLyBEZWZpbmUgR2VuZXJhdG9yLnByb3RvdHlwZS57bmV4dCx0aHJvdyxyZXR1cm59IGluIHRlcm1zIG9mIHRoZVxuICAvLyB1bmlmaWVkIC5faW52b2tlIGhlbHBlciBtZXRob2QuXG4gIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhHcCk7XG5cbiAgR3BbdG9TdHJpbmdUYWdTeW1ib2xdID0gXCJHZW5lcmF0b3JcIjtcblxuICAvLyBBIEdlbmVyYXRvciBzaG91bGQgYWx3YXlzIHJldHVybiBpdHNlbGYgYXMgdGhlIGl0ZXJhdG9yIG9iamVjdCB3aGVuIHRoZVxuICAvLyBAQGl0ZXJhdG9yIGZ1bmN0aW9uIGlzIGNhbGxlZCBvbiBpdC4gU29tZSBicm93c2VycycgaW1wbGVtZW50YXRpb25zIG9mIHRoZVxuICAvLyBpdGVyYXRvciBwcm90b3R5cGUgY2hhaW4gaW5jb3JyZWN0bHkgaW1wbGVtZW50IHRoaXMsIGNhdXNpbmcgdGhlIEdlbmVyYXRvclxuICAvLyBvYmplY3QgdG8gbm90IGJlIHJldHVybmVkIGZyb20gdGhpcyBjYWxsLiBUaGlzIGVuc3VyZXMgdGhhdCBkb2Vzbid0IGhhcHBlbi5cbiAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWdlbmVyYXRvci9pc3N1ZXMvMjc0IGZvciBtb3JlIGRldGFpbHMuXG4gIEdwW2l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIEdwLnRvU3RyaW5nID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIFwiW29iamVjdCBHZW5lcmF0b3JdXCI7XG4gIH07XG5cbiAgZnVuY3Rpb24gcHVzaFRyeUVudHJ5KGxvY3MpIHtcbiAgICB2YXIgZW50cnkgPSB7IHRyeUxvYzogbG9jc1swXSB9O1xuXG4gICAgaWYgKDEgaW4gbG9jcykge1xuICAgICAgZW50cnkuY2F0Y2hMb2MgPSBsb2NzWzFdO1xuICAgIH1cblxuICAgIGlmICgyIGluIGxvY3MpIHtcbiAgICAgIGVudHJ5LmZpbmFsbHlMb2MgPSBsb2NzWzJdO1xuICAgICAgZW50cnkuYWZ0ZXJMb2MgPSBsb2NzWzNdO1xuICAgIH1cblxuICAgIHRoaXMudHJ5RW50cmllcy5wdXNoKGVudHJ5KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc2V0VHJ5RW50cnkoZW50cnkpIHtcbiAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbiB8fCB7fTtcbiAgICByZWNvcmQudHlwZSA9IFwibm9ybWFsXCI7XG4gICAgZGVsZXRlIHJlY29yZC5hcmc7XG4gICAgZW50cnkuY29tcGxldGlvbiA9IHJlY29yZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIENvbnRleHQodHJ5TG9jc0xpc3QpIHtcbiAgICAvLyBUaGUgcm9vdCBlbnRyeSBvYmplY3QgKGVmZmVjdGl2ZWx5IGEgdHJ5IHN0YXRlbWVudCB3aXRob3V0IGEgY2F0Y2hcbiAgICAvLyBvciBhIGZpbmFsbHkgYmxvY2spIGdpdmVzIHVzIGEgcGxhY2UgdG8gc3RvcmUgdmFsdWVzIHRocm93biBmcm9tXG4gICAgLy8gbG9jYXRpb25zIHdoZXJlIHRoZXJlIGlzIG5vIGVuY2xvc2luZyB0cnkgc3RhdGVtZW50LlxuICAgIHRoaXMudHJ5RW50cmllcyA9IFt7IHRyeUxvYzogXCJyb290XCIgfV07XG4gICAgdHJ5TG9jc0xpc3QuZm9yRWFjaChwdXNoVHJ5RW50cnksIHRoaXMpO1xuICAgIHRoaXMucmVzZXQodHJ1ZSk7XG4gIH1cblxuICBydW50aW1lLmtleXMgPSBmdW5jdGlvbihvYmplY3QpIHtcbiAgICB2YXIga2V5cyA9IFtdO1xuICAgIGZvciAodmFyIGtleSBpbiBvYmplY3QpIHtcbiAgICAgIGtleXMucHVzaChrZXkpO1xuICAgIH1cbiAgICBrZXlzLnJldmVyc2UoKTtcblxuICAgIC8vIFJhdGhlciB0aGFuIHJldHVybmluZyBhbiBvYmplY3Qgd2l0aCBhIG5leHQgbWV0aG9kLCB3ZSBrZWVwXG4gICAgLy8gdGhpbmdzIHNpbXBsZSBhbmQgcmV0dXJuIHRoZSBuZXh0IGZ1bmN0aW9uIGl0c2VsZi5cbiAgICByZXR1cm4gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgIHdoaWxlIChrZXlzLmxlbmd0aCkge1xuICAgICAgICB2YXIga2V5ID0ga2V5cy5wb3AoKTtcbiAgICAgICAgaWYgKGtleSBpbiBvYmplY3QpIHtcbiAgICAgICAgICBuZXh0LnZhbHVlID0ga2V5O1xuICAgICAgICAgIG5leHQuZG9uZSA9IGZhbHNlO1xuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFRvIGF2b2lkIGNyZWF0aW5nIGFuIGFkZGl0aW9uYWwgb2JqZWN0LCB3ZSBqdXN0IGhhbmcgdGhlIC52YWx1ZVxuICAgICAgLy8gYW5kIC5kb25lIHByb3BlcnRpZXMgb2ZmIHRoZSBuZXh0IGZ1bmN0aW9uIG9iamVjdCBpdHNlbGYuIFRoaXNcbiAgICAgIC8vIGFsc28gZW5zdXJlcyB0aGF0IHRoZSBtaW5pZmllciB3aWxsIG5vdCBhbm9ueW1pemUgdGhlIGZ1bmN0aW9uLlxuICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcbiAgICAgIHJldHVybiBuZXh0O1xuICAgIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gdmFsdWVzKGl0ZXJhYmxlKSB7XG4gICAgaWYgKGl0ZXJhYmxlKSB7XG4gICAgICB2YXIgaXRlcmF0b3JNZXRob2QgPSBpdGVyYWJsZVtpdGVyYXRvclN5bWJvbF07XG4gICAgICBpZiAoaXRlcmF0b3JNZXRob2QpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhdG9yTWV0aG9kLmNhbGwoaXRlcmFibGUpO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGl0ZXJhYmxlLm5leHQgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICByZXR1cm4gaXRlcmFibGU7XG4gICAgICB9XG5cbiAgICAgIGlmICghaXNOYU4oaXRlcmFibGUubGVuZ3RoKSkge1xuICAgICAgICB2YXIgaSA9IC0xLCBuZXh0ID0gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgICAgICB3aGlsZSAoKytpIDwgaXRlcmFibGUubGVuZ3RoKSB7XG4gICAgICAgICAgICBpZiAoaGFzT3duLmNhbGwoaXRlcmFibGUsIGkpKSB7XG4gICAgICAgICAgICAgIG5leHQudmFsdWUgPSBpdGVyYWJsZVtpXTtcbiAgICAgICAgICAgICAgbmV4dC5kb25lID0gZmFsc2U7XG4gICAgICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIG5leHQudmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcblxuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBuZXh0Lm5leHQgPSBuZXh0O1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFJldHVybiBhbiBpdGVyYXRvciB3aXRoIG5vIHZhbHVlcy5cbiAgICByZXR1cm4geyBuZXh0OiBkb25lUmVzdWx0IH07XG4gIH1cbiAgcnVudGltZS52YWx1ZXMgPSB2YWx1ZXM7XG5cbiAgZnVuY3Rpb24gZG9uZVJlc3VsdCgpIHtcbiAgICByZXR1cm4geyB2YWx1ZTogdW5kZWZpbmVkLCBkb25lOiB0cnVlIH07XG4gIH1cblxuICBDb250ZXh0LnByb3RvdHlwZSA9IHtcbiAgICBjb25zdHJ1Y3RvcjogQ29udGV4dCxcblxuICAgIHJlc2V0OiBmdW5jdGlvbihza2lwVGVtcFJlc2V0KSB7XG4gICAgICB0aGlzLnByZXYgPSAwO1xuICAgICAgdGhpcy5uZXh0ID0gMDtcbiAgICAgIC8vIFJlc2V0dGluZyBjb250ZXh0Ll9zZW50IGZvciBsZWdhY3kgc3VwcG9ydCBvZiBCYWJlbCdzXG4gICAgICAvLyBmdW5jdGlvbi5zZW50IGltcGxlbWVudGF0aW9uLlxuICAgICAgdGhpcy5zZW50ID0gdGhpcy5fc2VudCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuZG9uZSA9IGZhbHNlO1xuICAgICAgdGhpcy5kZWxlZ2F0ZSA9IG51bGw7XG5cbiAgICAgIHRoaXMubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICB0aGlzLmFyZyA9IHVuZGVmaW5lZDtcblxuICAgICAgdGhpcy50cnlFbnRyaWVzLmZvckVhY2gocmVzZXRUcnlFbnRyeSk7XG5cbiAgICAgIGlmICghc2tpcFRlbXBSZXNldCkge1xuICAgICAgICBmb3IgKHZhciBuYW1lIGluIHRoaXMpIHtcbiAgICAgICAgICAvLyBOb3Qgc3VyZSBhYm91dCB0aGUgb3B0aW1hbCBvcmRlciBvZiB0aGVzZSBjb25kaXRpb25zOlxuICAgICAgICAgIGlmIChuYW1lLmNoYXJBdCgwKSA9PT0gXCJ0XCIgJiZcbiAgICAgICAgICAgICAgaGFzT3duLmNhbGwodGhpcywgbmFtZSkgJiZcbiAgICAgICAgICAgICAgIWlzTmFOKCtuYW1lLnNsaWNlKDEpKSkge1xuICAgICAgICAgICAgdGhpc1tuYW1lXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgc3RvcDogZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLmRvbmUgPSB0cnVlO1xuXG4gICAgICB2YXIgcm9vdEVudHJ5ID0gdGhpcy50cnlFbnRyaWVzWzBdO1xuICAgICAgdmFyIHJvb3RSZWNvcmQgPSByb290RW50cnkuY29tcGxldGlvbjtcbiAgICAgIGlmIChyb290UmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICB0aHJvdyByb290UmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMucnZhbDtcbiAgICB9LFxuXG4gICAgZGlzcGF0Y2hFeGNlcHRpb246IGZ1bmN0aW9uKGV4Y2VwdGlvbikge1xuICAgICAgaWYgKHRoaXMuZG9uZSkge1xuICAgICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgICB9XG5cbiAgICAgIHZhciBjb250ZXh0ID0gdGhpcztcbiAgICAgIGZ1bmN0aW9uIGhhbmRsZShsb2MsIGNhdWdodCkge1xuICAgICAgICByZWNvcmQudHlwZSA9IFwidGhyb3dcIjtcbiAgICAgICAgcmVjb3JkLmFyZyA9IGV4Y2VwdGlvbjtcbiAgICAgICAgY29udGV4dC5uZXh0ID0gbG9jO1xuXG4gICAgICAgIGlmIChjYXVnaHQpIHtcbiAgICAgICAgICAvLyBJZiB0aGUgZGlzcGF0Y2hlZCBleGNlcHRpb24gd2FzIGNhdWdodCBieSBhIGNhdGNoIGJsb2NrLFxuICAgICAgICAgIC8vIHRoZW4gbGV0IHRoYXQgY2F0Y2ggYmxvY2sgaGFuZGxlIHRoZSBleGNlcHRpb24gbm9ybWFsbHkuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAhISBjYXVnaHQ7XG4gICAgICB9XG5cbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcblxuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSBcInJvb3RcIikge1xuICAgICAgICAgIC8vIEV4Y2VwdGlvbiB0aHJvd24gb3V0c2lkZSBvZiBhbnkgdHJ5IGJsb2NrIHRoYXQgY291bGQgaGFuZGxlXG4gICAgICAgICAgLy8gaXQsIHNvIHNldCB0aGUgY29tcGxldGlvbiB2YWx1ZSBvZiB0aGUgZW50aXJlIGZ1bmN0aW9uIHRvXG4gICAgICAgICAgLy8gdGhyb3cgdGhlIGV4Y2VwdGlvbi5cbiAgICAgICAgICByZXR1cm4gaGFuZGxlKFwiZW5kXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYpIHtcbiAgICAgICAgICB2YXIgaGFzQ2F0Y2ggPSBoYXNPd24uY2FsbChlbnRyeSwgXCJjYXRjaExvY1wiKTtcbiAgICAgICAgICB2YXIgaGFzRmluYWxseSA9IGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIik7XG5cbiAgICAgICAgICBpZiAoaGFzQ2F0Y2ggJiYgaGFzRmluYWxseSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsIHRydWUpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0NhdGNoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgdHJ1ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0ZpbmFsbHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwidHJ5IHN0YXRlbWVudCB3aXRob3V0IGNhdGNoIG9yIGZpbmFsbHlcIik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIGFicnVwdDogZnVuY3Rpb24odHlwZSwgYXJnKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYgJiZcbiAgICAgICAgICAgIGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIikgJiZcbiAgICAgICAgICAgIHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICB2YXIgZmluYWxseUVudHJ5ID0gZW50cnk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGZpbmFsbHlFbnRyeSAmJlxuICAgICAgICAgICh0eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICAgdHlwZSA9PT0gXCJjb250aW51ZVwiKSAmJlxuICAgICAgICAgIGZpbmFsbHlFbnRyeS50cnlMb2MgPD0gYXJnICYmXG4gICAgICAgICAgYXJnIDw9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgIC8vIElnbm9yZSB0aGUgZmluYWxseSBlbnRyeSBpZiBjb250cm9sIGlzIG5vdCBqdW1waW5nIHRvIGFcbiAgICAgICAgLy8gbG9jYXRpb24gb3V0c2lkZSB0aGUgdHJ5L2NhdGNoIGJsb2NrLlxuICAgICAgICBmaW5hbGx5RW50cnkgPSBudWxsO1xuICAgICAgfVxuXG4gICAgICB2YXIgcmVjb3JkID0gZmluYWxseUVudHJ5ID8gZmluYWxseUVudHJ5LmNvbXBsZXRpb24gOiB7fTtcbiAgICAgIHJlY29yZC50eXBlID0gdHlwZTtcbiAgICAgIHJlY29yZC5hcmcgPSBhcmc7XG5cbiAgICAgIGlmIChmaW5hbGx5RW50cnkpIHtcbiAgICAgICAgdGhpcy5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgdGhpcy5uZXh0ID0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2M7XG4gICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5jb21wbGV0ZShyZWNvcmQpO1xuICAgIH0sXG5cbiAgICBjb21wbGV0ZTogZnVuY3Rpb24ocmVjb3JkLCBhZnRlckxvYykge1xuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgdGhyb3cgcmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICByZWNvcmQudHlwZSA9PT0gXCJjb250aW51ZVwiKSB7XG4gICAgICAgIHRoaXMubmV4dCA9IHJlY29yZC5hcmc7XG4gICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcInJldHVyblwiKSB7XG4gICAgICAgIHRoaXMucnZhbCA9IHRoaXMuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgICAgdGhpcy5tZXRob2QgPSBcInJldHVyblwiO1xuICAgICAgICB0aGlzLm5leHQgPSBcImVuZFwiO1xuICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJub3JtYWxcIiAmJiBhZnRlckxvYykge1xuICAgICAgICB0aGlzLm5leHQgPSBhZnRlckxvYztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfSxcblxuICAgIGZpbmlzaDogZnVuY3Rpb24oZmluYWxseUxvYykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS5maW5hbGx5TG9jID09PSBmaW5hbGx5TG9jKSB7XG4gICAgICAgICAgdGhpcy5jb21wbGV0ZShlbnRyeS5jb21wbGV0aW9uLCBlbnRyeS5hZnRlckxvYyk7XG4gICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7XG4gICAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgXCJjYXRjaFwiOiBmdW5jdGlvbih0cnlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSB0cnlMb2MpIHtcbiAgICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcbiAgICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgdmFyIHRocm93biA9IHJlY29yZC5hcmc7XG4gICAgICAgICAgICByZXNldFRyeUVudHJ5KGVudHJ5KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHRocm93bjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBUaGUgY29udGV4dC5jYXRjaCBtZXRob2QgbXVzdCBvbmx5IGJlIGNhbGxlZCB3aXRoIGEgbG9jYXRpb25cbiAgICAgIC8vIGFyZ3VtZW50IHRoYXQgY29ycmVzcG9uZHMgdG8gYSBrbm93biBjYXRjaCBibG9jay5cbiAgICAgIHRocm93IG5ldyBFcnJvcihcImlsbGVnYWwgY2F0Y2ggYXR0ZW1wdFwiKTtcbiAgICB9LFxuXG4gICAgZGVsZWdhdGVZaWVsZDogZnVuY3Rpb24oaXRlcmFibGUsIHJlc3VsdE5hbWUsIG5leHRMb2MpIHtcbiAgICAgIHRoaXMuZGVsZWdhdGUgPSB7XG4gICAgICAgIGl0ZXJhdG9yOiB2YWx1ZXMoaXRlcmFibGUpLFxuICAgICAgICByZXN1bHROYW1lOiByZXN1bHROYW1lLFxuICAgICAgICBuZXh0TG9jOiBuZXh0TG9jXG4gICAgICB9O1xuXG4gICAgICBpZiAodGhpcy5tZXRob2QgPT09IFwibmV4dFwiKSB7XG4gICAgICAgIC8vIERlbGliZXJhdGVseSBmb3JnZXQgdGhlIGxhc3Qgc2VudCB2YWx1ZSBzbyB0aGF0IHdlIGRvbid0XG4gICAgICAgIC8vIGFjY2lkZW50YWxseSBwYXNzIGl0IG9uIHRvIHRoZSBkZWxlZ2F0ZS5cbiAgICAgICAgdGhpcy5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cbiAgfTtcbn0pKFxuICAvLyBJbiBzbG9wcHkgbW9kZSwgdW5ib3VuZCBgdGhpc2AgcmVmZXJzIHRvIHRoZSBnbG9iYWwgb2JqZWN0LCBmYWxsYmFjayB0b1xuICAvLyBGdW5jdGlvbiBjb25zdHJ1Y3RvciBpZiB3ZSdyZSBpbiBnbG9iYWwgc3RyaWN0IG1vZGUuIFRoYXQgaXMgc2FkbHkgYSBmb3JtXG4gIC8vIG9mIGluZGlyZWN0IGV2YWwgd2hpY2ggdmlvbGF0ZXMgQ29udGVudCBTZWN1cml0eSBQb2xpY3kuXG4gIChmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcyB8fCAodHlwZW9mIHNlbGYgPT09IFwib2JqZWN0XCIgJiYgc2VsZik7XG4gIH0pKCkgfHwgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpXG4pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL3JlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZS5qc1xuLy8gbW9kdWxlIGlkID0gLi4vbm9kZV9tb2R1bGVzL3JlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZS5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IG1haW4iLCJmdW5jdGlvbiBBc3luY1JlbmRlcmluZ0ludGVycnVwdGVkKCkge1xuICAgIHRoaXMubWVzc2FnZSA9ICdBc3luYyByZW5kZXJpbmcgaW50ZXJydXB0ZWQnO1xufVxuXG52YXIgcHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShFcnJvci5wcm90b3R5cGUpXG5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBBc3luY1JlbmRlcmluZ0ludGVycnVwdGVkO1xucHJvdG90eXBlLmNvbnN0cnVjdG9yLnByb3RvdHlwZSA9IHByb3RvdHlwZTtcblxubW9kdWxlLmV4cG9ydHMgPSBwcm90b3R5cGUuY29uc3RydWN0b3I7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvcmVsYWtzL2FzeW5jLXJlbmRlcmluZy1pbnRlcnJ1cHRlZC5qc1xuLy8gbW9kdWxlIGlkID0gLi4vbm9kZV9tb2R1bGVzL3JlbGFrcy9hc3luYy1yZW5kZXJpbmctaW50ZXJydXB0ZWQuanNcbi8vIG1vZHVsZSBjaHVua3MgPSBtYWluIiwidmFyIEFzeW5jUmVuZGVyaW5nSW50ZXJydXB0ZWQgPSByZXF1aXJlKCcuL2FzeW5jLXJlbmRlcmluZy1pbnRlcnJ1cHRlZCcpO1xudmFyIE1lYW53aGlsZSA9IHJlcXVpcmUoJy4vbWVhbndoaWxlJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oUmVhY3QpIHtcblxuZnVuY3Rpb24gUmVsYWtzQ29tcG9uZW50KCkge1xufVxuXG52YXIgcHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShSZWFjdC5Db21wb25lbnQucHJvdG90eXBlKTtcbnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IFJlbGFrc0NvbXBvbmVudDtcbnByb3RvdHlwZS5jb25zdHJ1Y3Rvci5wcm90b3R5cGUgPSBwcm90b3R5cGU7XG5cbi8qKlxuICogUmVuZGVyIGNvbXBvbmVudCwgY2FsbGluZyByZW5kZXJBc3luYygpIGlmIG5lY2Vzc2FyeVxuICpcbiAqIEByZXR1cm4ge1JlYWN0RWxlbWVudHxudWxsfVxuICovXG5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHJlbGFrcyA9IHRoaXMucmVsYWtzO1xuICAgIGlmICghcmVsYWtzKSB7XG4gICAgICAgIGNvbnNvbGUud2FybignUmVsYWtzIGNvbnRleHQgaXMgbWlzc2luZy4gTWFrZSBzdXJlIHlvdSBhcmUgY2FsbGluZyBjb21wb25lbnRXaWxsTW91bnQoKSBhbmQgY29tcG9uZW50V2lsbFVubW91bnQoKSBvZiB0aGUgc3VwZXJjbGFzcycpO1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICAvLyBzZWUgaWYgcmVuZGVyaW5nIGlzIHRyaWdnZXJlZCBieSByZXNvbHV0aW9uIG9mIGEgcHJvbWlzZSxcbiAgICAvLyBvciBieSBhIGNhbGwgdG8gTWVhbndoaWxlLnNob3coKVxuICAgIGlmIChyZWxha3MucHJvbWlzZWRFbGVtZW50RXhwZWN0ZWQpIHtcbiAgICAgICAgLy8gcmVuZGVyIHRoZSBuZXcgcHJvbWlzZWQgZWxlbWVudFxuICAgICAgICByZWxha3MucHJvbWlzZWRFbGVtZW50RXhwZWN0ZWQgPSBmYWxzZTtcbiAgICAgICAgcmVsYWtzLnByb2dyZXNzRWxlbWVudCA9IG51bGw7XG4gICAgICAgIHJlbGFrcy5wcm9ncmVzc0VsZW1lbnRSZW5kZXJlZCA9IG51bGw7XG4gICAgICAgIHJldHVybiByZWxha3MucHJvbWlzZWRFbGVtZW50O1xuICAgIH0gZWxzZSBpZiAocmVsYWtzLnByb2dyZXNzRWxlbWVudEV4cGVjdGVkKSB7XG4gICAgICAgIC8vIHJlbmRlciB0aGUgbmV3IHByb2dyZXNzIGVsZW1lbnRcbiAgICAgICAgcmVsYWtzLnByb2dyZXNzRWxlbWVudEV4cGVjdGVkID0gZmFsc2U7XG4gICAgICAgIHJlbGFrcy5wcm9ncmVzc0VsZW1lbnRSZW5kZXJlZCA9IHJlbGFrcy5wcm9ncmVzc0VsZW1lbnQ7XG4gICAgICAgIHJldHVybiByZWxha3MucHJvZ3Jlc3NFbGVtZW50O1xuICAgIH1cblxuICAgIC8vIG5vcm1hbCByZXJlbmRlcmluZy0td2UgbmVlZCB0byBjYWxsIHJlbmRlckFzeW5jKClcbiAgICAvL1xuICAgIC8vIGZpcnN0IGNhbmNlbCBhbnkgdW5maW5pc2hlZCByZW5kZXJpbmcgY3ljbGVcbiAgICB2YXIgcHJldmlvdXNseSA9IHJlbGFrcy5tZWFud2hpbGU7XG4gICAgaWYgKHByZXZpb3VzbHkpIHtcbiAgICAgICAgcmVsYWtzLm1lYW53aGlsZSA9IG51bGw7XG4gICAgICAgIC8vIHVzZSBhIHRyeSBibG9jaywgaW4gY2FzZSB1c2VyLXN1cHBsaWVkIG9uQ2FuY2VsIGhhbmRsZXIgYXR0YWNoZWRcbiAgICAgICAgLy8gdG8gdGhlIG1lYW53aGlsZSBvYmplY3QgdGhyb3dzXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBwcmV2aW91c2x5LmNhbmNlbCgpO1xuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbGFrcy5wcmV2aW91cyA9IHJlbGFrcy5jdXJyZW50O1xuICAgIHJlbGFrcy5jdXJyZW50ID0ge1xuICAgICAgICBwcm9wczogdGhpcy5wcm9wcyxcbiAgICAgICAgc3RhdGU6IHRoaXMuc3RhdGUgfHwge30sXG4gICAgfTtcblxuICAgIC8vIGNyZWF0ZSBuZXcgbWVhbndoaWxlIG9iamVjdFxuICAgIHZhciBtZWFud2hpbGUgPSByZWxha3MubWVhbndoaWxlID0gbmV3IE1lYW53aGlsZSh0aGlzLCBwcmV2aW91c2x5KTtcblxuICAgIC8vIGNhbGwgdXNlci1kZWZpbmVkIHJlbmRlckFzeW5jKCkgaW4gYSB0cnktY2F0Y2ggYmxvY2sgdG8gY2F0Y2ggcG90ZW50aWFsIGVycm9yc1xuICAgIHRyeSB7XG4gICAgICAgIHZhciBwcm9taXNlO1xuICAgICAgICBpZiAodGhpcy5yZW5kZXJBc3luYy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICBwcm9taXNlID0gdGhpcy5yZW5kZXJBc3luYyhtZWFud2hpbGUsIHRoaXMucHJvcHMsIHRoaXMuc3RhdGUsIHRoaXMuY29udGV4dCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwcm9taXNlID0gdGhpcy5yZW5kZXJBc3luYyhtZWFud2hpbGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gZnJvbSBoZXJlIG9uLCBhbnkgY2FsbCB0byBNZWFud2hpbGUuc2hvdygpIGlzIGFzeW5jaHJvbm91c1xuICAgICAgICBtZWFud2hpbGUuc3luY2hyb25vdXMgPSBmYWxzZTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgLy8gYSBzeW5jaHJvbm91c2UgZXJyb3Igb2NjdXJyZWQsIHNob3cgYW55IHByb2dyZXNzIG1hZGUgb3Igd2hhdCB3YXNcbiAgICAgICAgLy8gdGhlcmUgYmVmb3JlXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgICAgcmVsYWtzLm1lYW53aGlsZS5jbGVhcigpO1xuICAgICAgICByZWxha3MubWVhbndoaWxlID0gbnVsbDtcbiAgICAgICAgcmV0dXJuIHJlbGFrcy5wcm9ncmVzc0VsZW1lbnQgfHwgcmVsYWtzLnByb2dyZXNzRWxlbWVudFJlbmRlcmVkIHx8IHJlbGFrcy5wcm9taXNlZEVsZW1lbnQ7XG4gICAgfVxuXG4gICAgaWYgKGlzUHJvbWlzZShwcm9taXNlKSkge1xuICAgICAgICAvLyBzZXQgdXAgaGFuZGxlcnMgZm9yIHRoZSBwcm9taXNlIHJldHVybmVkXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciByZXNvbHZlID0gZnVuY3Rpb24oZWxlbWVudCkge1xuICAgICAgICAgICAgaWYgKG1lYW53aGlsZSAhPT0gcmVsYWtzLm1lYW53aGlsZSkge1xuICAgICAgICAgICAgICAgIC8vIGEgbmV3IHJlbmRlcmluZyBjeWNsZSBoYXMgc3RhcnRlZFxuICAgICAgICAgICAgICAgIG1lYW53aGlsZS5jYW5jZWwoKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIV90aGlzLnJlbGFrcykge1xuICAgICAgICAgICAgICAgIC8vIGNvbXBvbmVudCBoYXMgYmVlbiB1bm1vdW50ZWRcbiAgICAgICAgICAgICAgICBtZWFud2hpbGUuY2FuY2VsKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIHRlbGwgcmVuZGVyKCkgdG8gc2hvdyB0aGUgZWxlbWVudFxuICAgICAgICAgICAgICAgIG1lYW53aGlsZS5maW5pc2goKTtcbiAgICAgICAgICAgICAgICByZWxha3MucHJvbWlzZWRFbGVtZW50ID0gZWxlbWVudDtcbiAgICAgICAgICAgICAgICByZWxha3MucHJvbWlzZWRFbGVtZW50RXhwZWN0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHJlbGFrcy5tZWFud2hpbGUgPSBudWxsO1xuICAgICAgICAgICAgICAgIF90aGlzLmZvcmNlVXBkYXRlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHZhciByZWplY3QgPSBmdW5jdGlvbihlcnIpIHtcbiAgICAgICAgICAgIGlmIChlcnIgaW5zdGFuY2VvZiBBc3luY1JlbmRlcmluZ0ludGVycnVwdGVkKSB7XG4gICAgICAgICAgICAgICAgLy8gdGhlIHJlbmRlcmluZyBjeWNsZSB3YXMgaW50ZXJydXB0ZWQtLWRvIG5vdGhpbmdcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gZHVtcCB0aGUgZXJyb3IgaW50byB0aGUgY29uc29sZSBhbmQgcmV0dXJuIHdoYXQgaGFzIGJlZW5cbiAgICAgICAgICAgICAgICAvLyByZW5kZXJlZCBzbyBmYXIgb3Igd2hhdCB3YXMgdGhlcmUgYmVmb3JlXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgICAgICAgICAgIHZhciBlbGVtZW50ID0gcmVsYWtzLnByb2dyZXNzRWxlbWVudCB8fCByZWxha3MucHJvbWlzZWRFbGVtZW50O1xuICAgICAgICAgICAgICAgIHJlc29sdmUoZWxlbWVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHByb21pc2UudGhlbihyZXNvbHZlLCByZWplY3QpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIGFsbG93IHJlbmRlckFzeW5jKCkgdG8gYWN0IHN5bmNocm9ub3VzbHlcbiAgICAgICAgdmFyIGVsZW1lbnQgPSBwcm9taXNlO1xuICAgICAgICByZWxha3MubWVhbndoaWxlID0gbnVsbDtcbiAgICAgICAgcmVsYWtzLnByb21pc2VkRWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgICAgIHJlbGFrcy5wcm9ncmVzc0VsZW1lbnQgPSBudWxsO1xuICAgICAgICByZWxha3MucHJvZ3Jlc3NFbGVtZW50UmVuZGVyZWQgPSBudWxsO1xuICAgIH1cblxuICAgIC8vIHdlIGhhdmUgdHJpZ2dlcmVkIHRoZSBhc3luY2hyb25pemUgb3BlcmF0aW9uIGFuZCBhcmUgd2FpdGluZyBmb3IgaXQgdG9cbiAgICAvLyBjb21wbGV0ZTsgaW4gdGhlIG1lYW50aW1lIHdlIG5lZWQgdG8gcmV0dXJuIHNvbWV0aGluZ1xuICAgIGlmIChyZWxha3MucHJvbWlzZWRFbGVtZW50KSB7XG4gICAgICAgIC8vIHNob3cgd2hhdCB3YXMgdGhlcmUgYmVmb3JlXG4gICAgICAgIHJldHVybiByZWxha3MucHJvbWlzZWRFbGVtZW50O1xuICAgIH1cbiAgICBpZiAocmVsYWtzLnByb2dyZXNzRWxlbWVudCkge1xuICAgICAgICAvLyBhIHByb2dyZXNzIGVsZW1lbnQgd2FzIHByb3ZpZGVkIHN5bmNocm9ub3VzbHkgYnkgcmVuZGVyQXN5bmMoKVxuICAgICAgICAvLyB3ZSdsbCBkaXNwbGF5IHRoYXQgaWYgZGVsYXkgaXMgc2V0IHRvIDBcbiAgICAgICAgaWYgKG1lYW53aGlsZS5zaG93aW5nUHJvZ3Jlc3MgfHwgbWVhbndoaWxlLnNob3dpbmdQcm9ncmVzc0luaXRpYWxseSkge1xuICAgICAgICAgICAgcmV0dXJuIHJlbGFrcy5wcm9ncmVzc0VsZW1lbnQ7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKHJlbGFrcy5wcm9ncmVzc0VsZW1lbnRSZW5kZXJlZCkge1xuICAgICAgICAvLyBzaG93IHRoZSBwcmV2aW91cyBwcm9ncmVzc1xuICAgICAgICByZXR1cm4gcmVsYWtzLnByb2dyZXNzRWxlbWVudFJlbmRlcmVkO1xuICAgIH1cbiAgICAvLyB1bW0sIHdlIGdvdCBub3RoaW5nXG4gICAgcmV0dXJuIG51bGw7XG59O1xuXG4vKipcbiAqIFJldHVybiBmYWxzZSBpZiB0aGUgY29tcG9uZW50J3MgcHJvcHMgYW5kIHN0YXRlIGhhdmVuJ3QgY2hhbmdlZC5cbiAqXG4gKiBAcGFyYW0gIHtPYmplY3R9IG5leHRQcm9wc1xuICogQHBhcmFtICB7T2JqZWN0fSBuZXh0U3RhdGVcbiAqXG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICovXG5wcm90b3R5cGUuc2hvdWxkQ29tcG9uZW50VXBkYXRlID0gZnVuY3Rpb24obmV4dFByb3BzLCBuZXh0U3RhdGUpIHtcbiAgICBpZiAoIWNvbXBhcmUodGhpcy5wcm9wcywgbmV4dFByb3BzKSB8fCAhY29tcGFyZSh0aGlzLnN0YXRlLCBuZXh0U3RhdGUpKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG59O1xuXG4vKipcbiAqIENyZWF0ZSBSZWxha3MgY29udGV4dCBvbiBtb3VudC5cbiAqL1xucHJvdG90eXBlLmNvbXBvbmVudFdpbGxNb3VudCA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMucmVsYWtzID0ge1xuICAgICAgICBwcm9ncmVzc0VsZW1lbnQ6IG51bGwsXG4gICAgICAgIHByb2dyZXNzRWxlbWVudEV4cGVjdGVkOiBmYWxzZSxcbiAgICAgICAgcHJvbWlzZWRFbGVtZW50OiBudWxsLFxuICAgICAgICBwcm9taXNlZEVsZW1lbnRFeHBlY3RlZDogZmFsc2UsXG4gICAgICAgIHByb2dyZXNzRWxlbWVudFJlbmRlcmVkOiBudWxsLFxuICAgICAgICBtZWFud2hpbGU6IG51bGwsXG4gICAgICAgIHByZXZpb3VzOiBudWxsLFxuICAgICAgICBjdXJyZW50OiB7XG4gICAgICAgICAgICBwcm9wczoge30sXG4gICAgICAgICAgICBzdGF0ZToge30sXG4gICAgICAgIH0sXG4gICAgfTtcbn07XG5cbi8qKlxuICogUmVtb3ZlIFJlbGFrcyBjb250ZXh0IG9uIHVubW91bnQsIGNhbmNlbGluZyBhbnkgb3V0c3RhbmRpbmcgYXN5bmNocm9ub3VzXG4gKiByZW5kZXJpbmcgY3ljbGUuXG4gKi9cbnByb3RvdHlwZS5jb21wb25lbnRXaWxsVW5tb3VudCA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciByZWxha3MgPSB0aGlzLnJlbGFrcztcbiAgICBpZiAocmVsYWtzKSB7XG4gICAgICAgIGlmIChyZWxha3MubWVhbndoaWxlKSB7XG4gICAgICAgICAgICByZWxha3MubWVhbndoaWxlLmNhbmNlbCgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucmVsYWtzID0gdW5kZWZpbmVkO1xuICAgIH1cbn07XG5cbnJldHVybiB7XG4gICAgQ29tcG9uZW50OiBwcm90b3R5cGUuY29uc3RydWN0b3IsXG4gICAgQXN5bmNDb21wb25lbnQ6IHByb3RvdHlwZS5jb25zdHJ1Y3RvcixcbiAgICBBc3luY1JlbmRlcmluZ0ludGVycnVwdGVkOiBBc3luY1JlbmRlcmluZ0ludGVycnVwdGVkLFxuICAgIE1lYW53aGlsZTogTWVhbndoaWxlLFxufTtcbn07XG5cbi8qKlxuICogUmV0dXJuIHRydWUgaWYgdGhlIGdpdmVuIG9iamVjdCBpcyBhIHByb21pc2VcbiAqXG4gKiBAcGFyYW0gIHtPYmplY3R9IG9iamVjdFxuICpcbiAqIEByZXR1cm4gQm9vbGVhblxuICovXG5mdW5jdGlvbiBpc1Byb21pc2Uob2JqZWN0KSB7XG4gICAgaWYgKG9iamVjdCAmJiB0eXBlb2Yob2JqZWN0LnRoZW4pID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG59XG5cbi8qKlxuICogQ29tcGFyZSB0d28gb2JqZWN0cyBzaGFsbG93bHlcbiAqXG4gKiBAcGFyYW0gIHtPYmplY3R9IHByZXZTZXRcbiAqIEBwYXJhbSAge09iamVjdH0gbmV4dFNldFxuICpcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKi9cbmZ1bmN0aW9uIGNvbXBhcmUocHJldlNldCwgbmV4dFNldCkge1xuICAgIGlmIChwcmV2U2V0ID09PSBuZXh0U2V0KSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBpZiAoIXByZXZTZXQgfHwgIW5leHRTZXQpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBmb3IgKHZhciBrZXkgaW4gbmV4dFNldCkge1xuICAgICAgICB2YXIgcHJldiA9IHByZXZTZXRba2V5XTtcbiAgICAgICAgdmFyIG5leHQgPSBuZXh0U2V0W2tleV07XG4gICAgICAgIGlmIChuZXh0ICE9PSBwcmV2KSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvcmVsYWtzL2NsYXNzLmpzXG4vLyBtb2R1bGUgaWQgPSAuLi9ub2RlX21vZHVsZXMvcmVsYWtzL2NsYXNzLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gbWFpbiIsInZhciBBc3luY1JlbmRlcmluZ0ludGVycnVwdGVkID0gcmVxdWlyZSgnLi9hc3luYy1yZW5kZXJpbmctaW50ZXJydXB0ZWQnKTtcblxuZnVuY3Rpb24gTWVhbndoaWxlKGNvbXBvbmVudCwgcHJldmlvdXNseSkge1xuICAgIHZhciByZWxha3MgPSBjb21wb25lbnQucmVsYWtzO1xuICAgIHRoaXMuY29tcG9uZW50ID0gY29tcG9uZW50O1xuICAgIHRoaXMuc3luY2hyb25vdXMgPSB0cnVlO1xuICAgIHRoaXMuc2hvd2luZ1Byb2dyZXNzID0gZmFsc2U7XG4gICAgdGhpcy5zaG93aW5nUHJvZ3Jlc3NJbml0aWFsbHkgPSBmYWxzZTtcbiAgICB0aGlzLmRlbGF5V2hlbkVtcHR5ID0gNTA7XG4gICAgdGhpcy5kZWxheVdoZW5SZW5kZXJlZCA9IEluZmluaXR5O1xuICAgIHRoaXMuY2FuY2VsZWQgPSBmYWxzZTtcbiAgICB0aGlzLnByaW9yID0gKHByZXZpb3VzbHkpID8gcHJldmlvdXNseS5wcmlvciA6IHJlbGFrcy5wcmV2aW91cztcbiAgICB0aGlzLnByZXZpb3VzID0gcmVsYWtzLnByZXZpb3VzO1xuICAgIHRoaXMuY3VycmVudCA9IHJlbGFrcy5jdXJyZW50O1xuICAgIHRoaXMudXBkYXRlVGltZW91dCA9IDA7XG4gICAgdGhpcy5zdGFydFRpbWUgPSBnZXRUaW1lKCk7XG4gICAgdGhpcy5vbkNhbmNlbCA9IG51bGw7XG4gICAgdGhpcy5vbkNvbXBsZXRlID0gbnVsbDtcbiAgICB0aGlzLm9uUHJvZ3Jlc3MgPSBudWxsO1xufVxuXG52YXIgcHJvdG90eXBlID0gTWVhbndoaWxlLnByb3RvdHlwZTtcblxuLyoqXG4gKiBDaGVjayBpZiB0aGUgcmVuZGVyaW5nIGN5Y2xlIGhhcyBiZWVuIHN1cGVyY2VkZWQgYnkgYSBuZXcgb25lLiBJZiBzb1xuICogdGhyb3cgYW4gZXhjZXB0aW9uIHRvIGVuZCBpdC4gRW5zdXJlIGNvbXBvbmVudCBpcyBtb3VudGVkIGFzIHdlbGwuXG4gKi9cbnByb3RvdHlwZS5jaGVjayA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciByZWxha3MgPSB0aGlzLmNvbXBvbmVudC5yZWxha3M7XG4gICAgaWYgKCFyZWxha3MgfHwgdGhpcyAhPT0gcmVsYWtzLm1lYW53aGlsZSkge1xuICAgICAgICAvLyB0aHJvdyBleGNlcHRpb24gdG8gYnJlYWsgcHJvbWlzZSBjaGFpblxuICAgICAgICAvLyBwcm9taXNlIGxpYnJhcnkgc2hvdWxkIGNhdGNoIGFuZCBwYXNzIGl0IHRvIHJlamVjdCgpXG4gICAgICAgIC8vIGRlZmluZWQgZG93biBiZWxvd1xuICAgICAgICB0aHJvdyBuZXcgQXN5bmNSZW5kZXJpbmdJbnRlcnJ1cHRlZDtcbiAgICB9XG59XG5cbi8qKlxuICogU2hvdyBwcm9ncmVzcyBlbGVtZW50LCBwb3NzaWJseSBhZnRlciBhIGRlbGF5XG4gKlxuICogQHBhcmFtICB7UmVhY3RFbGVtZW50fSBlbGVtZW50XG4gKiBAcGFyYW0gIHtTdHJpbmd8dW5kZWZpbmVkfSBkaXNwb3NpdGlvblxuICpcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKi9cbnByb3RvdHlwZS5zaG93ID0gZnVuY3Rpb24oZWxlbWVudCwgZGlzcG9zaXRpb24pIHtcbiAgICB2YXIgcmVsYWtzID0gdGhpcy5jb21wb25lbnQucmVsYWtzO1xuXG4gICAgLy8gbWFrZSBzdXJlIHRoZSByZW5kZXJpbmcgY3ljbGUgaXMgc3RpbGwgY3VycmVudFxuICAgIHRoaXMuY2hlY2soKTtcblxuICAgIC8vIHNhdmUgdGhlIGVsZW1lbnQgc28gcmVuZGVyKCkgY2FuIHJldHVybiBpdCBldmVudHVhbGx5XG4gICAgcmVsYWtzLnByb2dyZXNzRWxlbWVudCA9IGVsZW1lbnQ7XG5cbiAgICBpZiAodGhpcy5zaG93aW5nUHJvZ3Jlc3MpIHtcbiAgICAgICAgLy8gc2VlIGlmIHdlJ3JlIHNob3dpbmcgcHJvZ3Jlc3MgYWxyZWFkeSwgc2hvdyB0aGUgbmV3IHByb2dyZXNzIGltbWVkaWF0ZWx5XG4gICAgICAgIHRoaXMudXBkYXRlKCk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChkaXNwb3NpdGlvbiA9PT0gJ2Fsd2F5cycpIHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlKHRydWUpO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0gZWxzZSBpZiAoZGlzcG9zaXRpb24gPT09ICdpbml0aWFsJykge1xuICAgICAgICAgICAgaWYgKCFyZWxha3MucHJvbWlzZWRFbGVtZW50ICYmICFyZWxha3MucHJvZ3Jlc3NFbGVtZW50UmVuZGVyZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZSh0cnVlKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy51cGRhdGVUaW1lb3V0KSB7XG4gICAgICAgICAgICAvLyB3ZSd2ZSBhbHJlYWR5IHNjaGVkdWxlIHRoZSBkaXNwbGF5aW5nIG9mIHByb2dyZXNzXG4gICAgICAgICAgICAvLyBqdXN0IHdhaXQgZm9yIHRoZSBpbml0aWFsIHRpbWVvdXQgdG8gZmlyZVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGRlbGF5O1xuICAgICAgICBpZiAoIXJlbGFrcy5wcm9taXNlZEVsZW1lbnQpIHtcbiAgICAgICAgICAgIGRlbGF5ID0gdGhpcy5kZWxheVdoZW5FbXB0eTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRlbGF5ID0gdGhpcy5kZWxheVdoZW5SZW5kZXJlZDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZGVsYXkgPiAwKSB7XG4gICAgICAgICAgICBpZiAoZGVsYXkgIT09IEluZmluaXR5KSB7XG4gICAgICAgICAgICAgICAgLy8gc2hvdyBwcm9ncmVzcyBhZnRlciBhIGJyaWVmIGRlbGF5LCB0byBhbGxvd1xuICAgICAgICAgICAgICAgIC8vIGl0IHRvIGJlIGJ5cGFzc2VkIGJ5IGZhc3QtcmVzb2x2aW5nIHByb21pc2VzXG4gICAgICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBpZiB0aGUgdGltZW91dCBpcyAwLCB0aGVuIGNsZWFyVGltZW91dCgpIHdhcyBjYWxsZWQgb24gaXRcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcyBmdW5jdGlvbiBtaWdodCBzdGlsbCBydW4gb24gb2NjYXNpb24gYWZ0ZXJ3YXJkLCBkdWUgdG9cbiAgICAgICAgICAgICAgICAgICAgLy8gdGhlIHdheSB0aW1lb3V0cyBhcmUgc2NoZWR1bGVkXG4gICAgICAgICAgICAgICAgICAgIGlmIChfdGhpcy51cGRhdGVUaW1lb3V0ICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy51cGRhdGUoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sIGRlbGF5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIGNhbGxlciB3YW50cyBpdCB0byBiZSBzaG93biBpbW1lZGlhdGVseVxuICAgICAgICAgICAgdGhpcy51cGRhdGUoKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgfVxufTtcblxuLyoqXG4gKiBSZXR1cm4gdHJ1ZSBpZiB0aGUgY29tcG9uZW50IGhhcyBwcmV2aW91c2x5IGJlZW4gZnVsbHkgcmVuZGVyZWRcbiAqXG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICovXG5wcm90b3R5cGUucmV2aXNpbmcgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgcmVsYWtzID0gdGhpcy5jb21wb25lbnQucmVsYWtzO1xuICAgIHJldHVybiAhIXJlbGFrcy5wcm9taXNlZEVsZW1lbnQ7XG59O1xuXG4vKipcbiAqIFNldCBwcm9ncmVzc2l2ZSByZW5kZXJpbmcgZGVsYXksIGZvciB3aGVuIHRoZSBjb21wb25lbnQgaXMgZW1wdHkgYW5kIHdoZW5cbiAqIGl0IGhhcyBiZWVuIGZ1bGx5IHJlbmRlcmVkIHByZXZpb3VzbHlcbiAqXG4gKiBAcGFyYW0gIHtOdW1iZXJ9IGVtcHR5XG4gKiBAcGFyYW0gIHtOdW1iZXJ9IHJlbmRlcmVkXG4gKi9cbnByb3RvdHlwZS5kZWxheSA9IGZ1bmN0aW9uKGVtcHR5LCByZW5kZXJlZCkge1xuICAgIGlmICh0eXBlb2YoZW1wdHkpID09PSAnbnVtYmVyJykge1xuICAgICAgICB0aGlzLmRlbGF5V2hlbkVtcHR5ID0gZW1wdHk7XG4gICAgfVxuICAgIGlmICh0eXBlb2YocmVuZGVyZWQpID09PSAnbnVtYmVyJykge1xuICAgICAgICB0aGlzLmRlbGF5V2hlblJlbmRlcmVkID0gcmVuZGVyZWQ7XG4gICAgfVxufTtcblxuLyoqXG4gKiBSZW5kZXJpbmcgdGhlIHByb2dyZXNzIGVsZW1lbnQgbm93XG4gKlxuICogQHBhcmFtICB7Qm9vbGVhbnx1bmRlZmluZWR9IGZvcmNlXG4gKi9cbnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbihmb3JjZWQpIHtcbiAgICB2YXIgcmVsYWtzID0gdGhpcy5jb21wb25lbnQucmVsYWtzO1xuXG4gICAgLy8gaW5kaWNhdGUgdGhhdCB0aGUgY29tcG9uZW50IGlzIGRpc3BsYXlpbmcgcHJvZ3Jlc3NcbiAgICAvLyB1bmxlc3Mgd2UncmUgZm9yY2luZyB0aGUgcHJvZ3Jlc3MgZGlzcGxheVxuICAgIGlmICghZm9yY2VkKSB7XG4gICAgICAgIHRoaXMuc2hvd2luZ1Byb2dyZXNzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICAvLyB0b3NzIHRoZSByZXN1bHQgb2YgdGhlIHByZXZpb3VzIHJlbmRlcmluZyBjeWNsZVxuICAgIGlmIChyZWxha3MucHJvbWlzZWRFbGVtZW50KSB7XG4gICAgICAgIHJlbGFrcy5wcm9taXNlZEVsZW1lbnQgPSBudWxsO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnN5bmNocm9ub3VzKSB7XG4gICAgICAgIC8vIG5vIG5lZWQgdG8gZm9yY2UgdXBkYXRlIHNpbmNlIHdlJ3JlIHN0aWxsIGluc2lkZVxuICAgICAgICAvLyByZW5kZXIoKSBhbmQgaXQgY2FuIHNpbXBseSByZXR1cm4gdGhlIHByb2dyZXNzIGVsZW1lbnRcbiAgICAgICAgaWYgKGZvcmNlZCkge1xuICAgICAgICAgICAgdGhpcy5zaG93aW5nUHJvZ3Jlc3NJbml0aWFsbHkgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5vblByb2dyZXNzKSB7XG4gICAgICAgIHZhciBlbGFwc2VkID0gZ2V0VGltZSgpIC0gdGhpcy5zdGFydFRpbWU7XG4gICAgICAgIHRoaXMub25Qcm9ncmVzcyh7IHR5cGU6ICdwcm9ncmVzcycsIHRhcmdldDogdGhpcywgZWxhcHNlZDogZWxhcHNlZCB9KTtcbiAgICB9XG5cbiAgICBpZiAocmVsYWtzLnByb2dyZXNzRWxlbWVudCA9PT0gcmVsYWtzLnByb2dyZXNzRWxlbWVudFJlbmRlcmVkKSB7XG4gICAgICAgIC8vIGl0J3MgYWxyZWFkeSByZW5kZXJlZFxuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gdGVsbCByZW5kZXIoKSB0aGF0IGl0IGlzbid0IHRyaWdnZXJlZCBpbiB0aGUgbm9ybWFsIGZhc2hpb25cbiAgICByZWxha3MucHJvZ3Jlc3NFbGVtZW50RXhwZWN0ZWQgPSB0cnVlO1xuICAgIHRoaXMuY29tcG9uZW50LmZvcmNlVXBkYXRlKCk7XG59O1xuXG4vKipcbiAqIENhbmNlbCB0aGUgcmVuZGVyaW5nIG9mIHByb2dyZXNzIGFuZCBmaXJlIGFueSBvbkNhbmNlbCBoYW5kbGVyXG4gKi9cbnByb3RvdHlwZS5jYW5jZWwgPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLmNsZWFyKCk7XG4gICAgaWYgKCF0aGlzLmNhbmNlbGVkKSB7XG4gICAgICAgIHRoaXMuY2FuY2VsZWQgPSB0cnVlO1xuICAgICAgICBpZiAodGhpcy5vbkNhbmNlbCkge1xuICAgICAgICAgICAgdGhpcy5vbkNhbmNlbCh7IHR5cGU6ICdjYW5jZWwnLCB0YXJnZXQ6IHRoaXMgfSk7XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG4vKipcbiAqIENsZWFyIHRpbWVvdXQgZnVuY3Rpb24gYW5kIGZpcmUgYW55IG9uQ29tcGxldGUgaGFuZGxlclxuICovXG5wcm90b3R5cGUuZmluaXNoID0gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5jbGVhcigpO1xuICAgIGlmICh0aGlzLm9uQ29tcGxldGUpIHtcbiAgICAgICAgdmFyIGVsYXBzZWQgPSBnZXRUaW1lKCkgLSB0aGlzLnN0YXJ0VGltZTtcbiAgICAgICAgdGhpcy5vbkNvbXBsZXRlKHsgdHlwZTogJ2NvbXBsZXRlJywgdGFyZ2V0OiB0aGlzLCBlbGFwc2VkOiBlbGFwc2VkIH0pO1xuICAgIH1cbn07XG5cbi8qKlxuICogQ2FuY2VsIHRoZSBhbnkgc2NoZWR1bGVkIHJlbmRlcmluZyBvZiBwcm9ncmVzc1xuICovXG5wcm90b3R5cGUuY2xlYXIgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgcmVsYWtzID0gdGhpcy5jb21wb25lbnQucmVsYWtzO1xuICAgIGlmICh0aGlzLnVwZGF0ZVRpbWVvdXQpIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMudXBkYXRlVGltZW91dCk7XG4gICAgICAgIHRoaXMudXBkYXRlVGltZW91dCA9IDA7XG4gICAgfVxufTtcblxudmFyIHNjcmlwdFN0YXJ0VGltZSA9IG5ldyBEYXRlO1xuXG4vKipcbiAqIFJldHVybiB0aGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBwYXNzZWQgc2luY2Ugc3RhcnQgb2YgdGhpcyBzY3JpcHRcbiAqXG4gKiBAcmV0dXJuIHtOdW1iZXJ9XG4gKi9cbmZ1bmN0aW9uIGdldFRpbWUoKSB7XG4gICAgcmV0dXJuIChuZXcgRGF0ZSkgLSBzY3JpcHRTdGFydFRpbWU7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gcHJvdG90eXBlLmNvbnN0cnVjdG9yO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL3JlbGFrcy9tZWFud2hpbGUuanNcbi8vIG1vZHVsZSBpZCA9IC4uL25vZGVfbW9kdWxlcy9yZWxha3MvbWVhbndoaWxlLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gbWFpbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9jbGFzcycpKHJlcXVpcmUoJ3ByZWFjdCcpKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9yZWxha3MvcHJlYWN0LmpzXG4vLyBtb2R1bGUgaWQgPSAuLi9ub2RlX21vZHVsZXMvcmVsYWtzL3ByZWFjdC5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IG1haW4iLCJpbXBvcnQgeyBoLCBDb21wb25lbnQgfSBmcm9tICdwcmVhY3QnO1xuaW1wb3J0IFNXQVBJIGZyb20gJ3N3YXBpJztcbmltcG9ydCB7IFJvdXRlIH0gZnJvbSAncm91dGVzJztcbmltcG9ydCBOYXZCYXIgZnJvbSAnd2lkZ2V0cy9uYXYtYmFyJztcbmltcG9ydCAncmVsYWtzL3ByZWFjdCc7XG5pbXBvcnQgJ3N0eWxlLnNjc3MnO1xuXG4vKiogQGpzeCBoICovXG5cbmNsYXNzIEFwcGxpY2F0aW9uIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgZGlzcGxheU5hbWUgPSAnQXBwbGljYXRpb24nO1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICBsZXQgeyByb3V0ZU1hbmFnZXIsIGRhdGFTb3VyY2UgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICByb3V0ZTogbmV3IFJvdXRlKHJvdXRlTWFuYWdlciksXG4gICAgICAgICAgICBzd2FwaTogbmV3IFNXQVBJKGRhdGFTb3VyY2UsIHByb3BzLnNzciksXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVuZGVyIHRoZSBhcHBsaWNhdGlvblxuICAgICAqXG4gICAgICogQHJldHVybiB7Vk5vZGV9XG4gICAgICovXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQgeyByb3V0ZSwgc3dhcGkgfSA9IHRoaXMuc3RhdGU7XG4gICAgICAgIGxldCBtb2R1bGUgPSByb3V0ZS5wYXJhbXMubW9kdWxlO1xuICAgICAgICBsZXQgcGFnZTtcbiAgICAgICAgaWYgKG1vZHVsZSkge1xuICAgICAgICAgICAgbGV0IENvbXBvbmVudCA9IG1vZHVsZS5kZWZhdWx0O1xuICAgICAgICAgICAgbGV0IHByb3BzID0geyByb3V0ZSwgc3dhcGkgfTtcbiAgICAgICAgICAgIHBhZ2UgPSA8Q29tcG9uZW50IHsuLi5wcm9wc30gLz47XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPE5hdkJhciByb3V0ZT17cm91dGV9IC8+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50c1wiPlxuICAgICAgICAgICAgICAgICAgICB7cGFnZX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFkZGVkIGNoYW5nZSBoYW5kbGVycyB3aGVuIGNvbXBvbmVudCBtb3VudHNcbiAgICAgKi9cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgbGV0IHsgcm91dGVNYW5hZ2VyLCBkYXRhU291cmNlIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICByb3V0ZU1hbmFnZXIuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhpcy5oYW5kbGVSb3V0ZUNoYW5nZSk7XG4gICAgICAgIGRhdGFTb3VyY2UuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhpcy5oYW5kbGVEYXRhU291cmNlQ2hhbmdlKTtcblxuICAgICAgICB2YXIgYm9keSA9IGRvY3VtZW50LmJvZHk7XG4gICAgICAgIGJvZHkuY2xhc3NOYW1lID0gYm9keS5jbGFzc05hbWUucmVwbGFjZSgvXFxzKnNzci8sICcnKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmUgY2hhbmdlIGhhbmRsZXJzIHdoZW4gY29tcG9uZW50IG1vdW50c1xuICAgICAqL1xuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgICBsZXQgeyByb3V0ZU1hbmFnZXIsIGRhdGFTb3VyY2UgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIHJvdXRlTWFuYWdlci5yZW1vdmVFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGlzLmhhbmRsZVJvdXRlQ2hhbmdlKTtcbiAgICAgICAgZGF0YVNvdXJjZS5yZW1vdmVFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGlzLmhhbmRsZURhdGFTb3VyY2VDaGFuZ2UpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENhbGxlZCB3aGVuIHRoZSBkYXRhIHNvdXJjZSBjaGFuZ2VzXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHtSZWxha3NEamFuZ29EYXRhU291cmNlRXZlbnR9IGV2dFxuICAgICAqL1xuICAgIGhhbmRsZURhdGFTb3VyY2VDaGFuZ2UgPSAoZXZ0KSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzd2FwaTogbmV3IFNXQVBJKGV2dC50YXJnZXQpIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENhbGxlZCB3aGVuIHRoZSByb3V0ZSBjaGFuZ2VzXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHtSZWxha3NSb3V0ZU1hbmFnZXJFdmVudH0gZXZ0XG4gICAgICovXG4gICAgaGFuZGxlUm91dGVDaGFuZ2UgPSAoZXZ0KSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyByb3V0ZTogbmV3IFJvdXRlKGV2dC50YXJnZXQpIH0pO1xuICAgIH1cbn1cblxuZXhwb3J0IHtcbiAgICBBcHBsaWNhdGlvbiBhcyBkZWZhdWx0LFxuICAgIEFwcGxpY2F0aW9uXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwbGljYXRpb24uanN4IiwiaW1wb3J0ICdwcmVhY3QvZGV2dG9vbHMnO1xuaW1wb3J0IHsgaCwgcmVuZGVyIH0gZnJvbSAncHJlYWN0JztcbmltcG9ydCB7IEFwcGxpY2F0aW9uIH0gZnJvbSAnYXBwbGljYXRpb24nO1xuaW1wb3J0IHsgcm91dGVzIH0gZnJvbSAncm91dGVzJztcbmltcG9ydCBEamFuZ29EYXRhU291cmNlIGZyb20gJ3JlbGFrcy1kamFuZ28tZGF0YS1zb3VyY2UnO1xuaW1wb3J0IFJvdXRlTWFuYWdlciBmcm9tICdyZWxha3Mtcm91dGUtbWFuYWdlcic7XG5pbXBvcnQgeyBoYXJ2ZXN0IH0gZnJvbSAncmVsYWtzLWhhcnZlc3QvcHJlYWN0JztcblxudmFyIGRhdGFTb3VyY2VCYXNlVVJMID0gJy9zdGFyd2Fycy9hcGknO1xudmFyIHBhZ2VCYXNlUGF0aCA9ICcvc3RhcndhcnMnO1xuXG5pZiAodHlwZW9mKHdpbmRvdykgPT09ICdvYmplY3QnKSB7XG4gICAgYXN5bmMgZnVuY3Rpb24gaW5pdGlhbGl6ZShldnQpIHtcbiAgICAgICAgLy8gY3JlYXRlIGRhdGEgc291cmNlXG4gICAgICAgIGxldCBkYXRhU291cmNlID0gbmV3IERqYW5nb0RhdGFTb3VyY2Uoe1xuICAgICAgICAgICAgYmFzZVVSTDogZGF0YVNvdXJjZUJhc2VVUkwsXG4gICAgICAgIH0pO1xuICAgICAgICBhd2FpdCBkYXRhU291cmNlLmluaXRpYWxpemUoKTtcblxuICAgICAgICAvLyBjcmVhdGUgcm91dGUgbWFuYWdlclxuICAgICAgICBsZXQgcm91dGVNYW5hZ2VyID0gbmV3IFJvdXRlTWFuYWdlcih7XG4gICAgICAgICAgICByb3V0ZXMsXG4gICAgICAgICAgICBiYXNlUGF0aDogcGFnZUJhc2VQYXRoLFxuICAgICAgICB9KTtcbiAgICAgICAgYXdhaXQgcm91dGVNYW5hZ2VyLmluaXRpYWxpemUoKTtcblxuICAgICAgICBsZXQgYXBwQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcC1jb250YWluZXInKTtcbiAgICAgICAgaWYgKCFhcHBDb250YWluZXIpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVW5hYmxlIHRvIGZpbmQgYXBwIGVsZW1lbnQgaW4gRE9NJyk7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGFwcEVsZW1lbnQgPSBoKEFwcGxpY2F0aW9uLCB7IGRhdGFTb3VyY2UsIHJvdXRlTWFuYWdlciB9KTtcbiAgICAgICAgYXdhaXQgaGFydmVzdChhcHBFbGVtZW50KTtcbiAgICAgICAgcmVuZGVyKGFwcEVsZW1lbnQsIGFwcENvbnRhaW5lciwgYXBwQ29udGFpbmVyLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgaW5pdGlhbGl6ZSk7XG59IGVsc2Uge1xuICAgIGFzeW5jIGZ1bmN0aW9uIHNlcnZlclNpZGVSZW5kZXIob3B0aW9ucykge1xuICAgICAgICBsZXQgZGF0YVNvdXJjZSA9IG5ldyBEamFuZ29EYXRhU291cmNlKHtcbiAgICAgICAgICAgIGJhc2VVUkw6IGAke29wdGlvbnMuaG9zdH0ke2RhdGFTb3VyY2VCYXNlVVJMfWAsXG4gICAgICAgIH0pO1xuICAgICAgICBhd2FpdCBkYXRhU291cmNlLmluaXRpYWxpemUoKTtcblxuICAgICAgICBsZXQgcm91dGVNYW5hZ2VyID0gbmV3IFJvdXRlTWFuYWdlcih7XG4gICAgICAgICAgICByb3V0ZXMsXG4gICAgICAgICAgICBiYXNlUGF0aDogcGFnZUJhc2VQYXRoLFxuICAgICAgICAgICAgaW5pdGlhbFBhdGg6IG9wdGlvbnMucGF0aCxcbiAgICAgICAgfSk7XG4gICAgICAgIGF3YWl0IHJvdXRlTWFuYWdlci5pbml0aWFsaXplKCk7XG5cbiAgICAgICAgbGV0IGFwcEVsZW1lbnQgPSBoKEFwcGxpY2F0aW9uLCB7IGRhdGFTb3VyY2UsIHJvdXRlTWFuYWdlciwgc3NyOiBvcHRpb25zLnRhcmdldCB9KTtcbiAgICAgICAgcmV0dXJuIGhhcnZlc3QoYXBwRWxlbWVudCk7XG4gICAgfVxuXG4gICAgZXhwb3J0cy5yZW5kZXIgPSBzZXJ2ZXJTaWRlUmVuZGVyO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbWFpbi5qcyIsImNsYXNzIFJvdXRlIHtcbiAgICBjb25zdHJ1Y3Rvcihyb3V0ZU1hbmFnZXIpIHtcbiAgICAgICAgdGhpcy5yb3V0ZU1hbmFnZXIgPSByb3V0ZU1hbmFnZXI7XG4gICAgICAgIHRoaXMubmFtZSA9IHJvdXRlTWFuYWdlci5uYW1lO1xuICAgICAgICB0aGlzLnBhcmFtcyA9IHJvdXRlTWFuYWdlci5wYXJhbXM7XG4gICAgICAgIHRoaXMuaGlzdG9yeSA9IHJvdXRlTWFuYWdlci5oaXN0b3J5O1xuICAgIH1cblxuICAgIGNoYW5nZSh1cmwsIG9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucm91dGVNYW5hZ2VyLmNoYW5nZSh1cmwsIG9wdGlvbnMpO1xuICAgIH1cblxuICAgIGZpbmQobmFtZSwgcGFyYW1zKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJvdXRlTWFuYWdlci5maW5kKG5hbWUsIHBhcmFtcyk7XG4gICAgfVxuXG4gICAgZXh0cmFjdElEKHVybCkge1xuICAgICAgICB2YXIgc2kgPSB1cmwubGFzdEluZGV4T2YoJy8nKTtcbiAgICAgICAgdmFyIGVpO1xuICAgICAgICBpZiAoc2kgPT09IHVybC5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICBlaSA9IHNpO1xuICAgICAgICAgICAgc2kgPSB1cmwubGFzdEluZGV4T2YoJy8nLCBlaSAtIDEpO1xuICAgICAgICB9XG4gICAgICAgIHZhciB0ZXh0ID0gdXJsLnN1YnN0cmluZyhzaSArIDEsIGVpKTtcbiAgICAgICAgcmV0dXJuIHBhcnNlSW50KHRleHQpO1xuICAgIH1cbn1cblxubGV0IHJvdXRlcyA9IHtcbiAgICAnd2VsY29tZSc6IHtcbiAgICAgICAgcGF0aDogJy8nLFxuICAgICAgICBsb2FkOiBhc3luYyAocGFyYW1zKSA9PiB7XG4gICAgICAgICAgICBwYXJhbXMubW9kdWxlID0gYXdhaXQgaW1wb3J0KCdwYWdlcy93ZWxjb21lLXBhZ2UnIC8qIHdlYnBhY2tDaHVua05hbWU6IFwid2VsY29tZS1wYWdlXCIgKi8pO1xuICAgICAgICB9XG4gICAgfSxcbiAgICAnZmlsbS1saXN0Jzoge1xuICAgICAgICBwYXRoOiAnL2ZpbG1zLycsXG4gICAgICAgIGxvYWQ6IGFzeW5jIChwYXJhbXMpID0+IHtcbiAgICAgICAgICAgIHBhcmFtcy5tb2R1bGUgPSBhd2FpdCBpbXBvcnQoJ3BhZ2VzL2ZpbG0tbGlzdCcgLyogd2VicGFja0NodW5rTmFtZTogXCJmaWxtLWxpc3RcIiAqLyk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgICdmaWxtLXN1bW1hcnknOiB7XG4gICAgICAgIHBhdGg6ICcvZmlsbXMvJHtpZH0vJyxcbiAgICAgICAgcGFyYW1zOiB7IGlkOiBOdW1iZXIgfSxcbiAgICAgICAgbG9hZDogYXN5bmMgKHBhcmFtcykgPT4ge1xuICAgICAgICAgICAgcGFyYW1zLm1vZHVsZSA9IGF3YWl0IGltcG9ydCgncGFnZXMvZmlsbS1wYWdlJyAvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcImZpbG0tcGFnZVwiICovKTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgJ2NoYXJhY3Rlci1saXN0Jzoge1xuICAgICAgICBwYXRoOiAnL2NoYXJhY3RlcnMvJyxcbiAgICAgICAgbG9hZDogYXN5bmMgKHBhcmFtcykgPT4ge1xuICAgICAgICAgICAgcGFyYW1zLm1vZHVsZSA9IGF3YWl0IGltcG9ydCgncGFnZXMvY2hhcmFjdGVyLWxpc3QnIC8qIHdlYnBhY2tDaHVua05hbWU6IFwiY2hhcmFjdGVyLWxpc3RcIiAqLyk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgICdjaGFyYWN0ZXItc3VtbWFyeSc6IHtcbiAgICAgICAgcGF0aDogJy9jaGFyYWN0ZXJzLyR7aWR9LycsXG4gICAgICAgIHBhcmFtczogeyBpZDogTnVtYmVyIH0sXG4gICAgICAgIGxvYWQ6IGFzeW5jIChwYXJhbXMpID0+IHtcbiAgICAgICAgICAgIHBhcmFtcy5tb2R1bGUgPSBhd2FpdCBpbXBvcnQoJ3BhZ2VzL2NoYXJhY3Rlci1wYWdlJyAvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcImNoYXJhY3Rlci1wYWdlXCIgKi8pO1xuICAgICAgICB9XG4gICAgfSxcbiAgICAncGxhbmV0LWxpc3QnOiB7XG4gICAgICAgIHBhdGg6ICcvcGxhbmV0cy8nLFxuICAgICAgICBsb2FkOiBhc3luYyAocGFyYW1zKSA9PiB7XG4gICAgICAgICAgICBwYXJhbXMubW9kdWxlID0gYXdhaXQgaW1wb3J0KCdwYWdlcy9wbGFuZXQtbGlzdCcgLyogd2VicGFja0NodW5rTmFtZTogXCJwbGFuZXQtbGlzdFwiICovKTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgJ3BsYW5ldC1zdW1tYXJ5Jzoge1xuICAgICAgICBwYXRoOiAnL3BsYW5ldHMvJHtpZH0vJyxcbiAgICAgICAgcGFyYW1zOiB7IGlkOiBOdW1iZXIgfSxcbiAgICAgICAgbG9hZDogYXN5bmMgKHBhcmFtcykgPT4ge1xuICAgICAgICAgICAgcGFyYW1zLm1vZHVsZSA9IGF3YWl0IGltcG9ydCgncGFnZXMvcGxhbmV0LXBhZ2UnIC8qIHdlYnBhY2tDaHVua05hbWU6IFwicGxhbmV0LXBhZ2VcIiAqLyk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgICdzcGVjaWVzLWxpc3QnOiB7XG4gICAgICAgIHBhdGg6ICcvc3BlY2llcy8nLFxuICAgICAgICBsb2FkOiBhc3luYyAocGFyYW1zKSA9PiB7XG4gICAgICAgICAgICBwYXJhbXMubW9kdWxlID0gYXdhaXQgaW1wb3J0KCdwYWdlcy9zcGVjaWVzLWxpc3QnIC8qIHdlYnBhY2tDaHVua05hbWU6IFwic3BlY2llcy1saXN0XCIgKi8pO1xuICAgICAgICB9XG4gICAgfSxcbiAgICAnc3BlY2llcy1zdW1tYXJ5Jzoge1xuICAgICAgICBwYXRoOiAnL3NwZWNpZXMvJHtpZH0vJyxcbiAgICAgICAgcGFyYW1zOiB7IGlkOiBOdW1iZXIgfSxcbiAgICAgICAgbG9hZDogYXN5bmMgKHBhcmFtcykgPT4ge1xuICAgICAgICAgICAgcGFyYW1zLm1vZHVsZSA9IGF3YWl0IGltcG9ydCgncGFnZXMvc3BlY2llcy1wYWdlJyAvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcInNwZWNpZXMtcGFnZVwiICovKTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgJ3ZlaGljbGUtbGlzdCc6IHtcbiAgICAgICAgcGF0aDogJy92ZWhpY2xlcy8nLFxuICAgICAgICBsb2FkOiBhc3luYyAocGFyYW1zKSA9PiB7XG4gICAgICAgICAgICBwYXJhbXMubW9kdWxlID0gYXdhaXQgaW1wb3J0KCdwYWdlcy92ZWhpY2xlLWxpc3QnIC8qIHdlYnBhY2tDaHVua05hbWU6IFwidmVoaWNsZS1saXN0XCIgKi8pO1xuICAgICAgICB9XG4gICAgfSxcbiAgICAndmVoaWNsZS1zdW1tYXJ5Jzoge1xuICAgICAgICBwYXRoOiAnL3ZlaGljbGVzLyR7aWR9LycsXG4gICAgICAgIHBhcmFtczogeyBpZDogTnVtYmVyIH0sXG4gICAgICAgIGxvYWQ6IGFzeW5jIChwYXJhbXMpID0+IHtcbiAgICAgICAgICAgIHBhcmFtcy5tb2R1bGUgPSBhd2FpdCBpbXBvcnQoJ3BhZ2VzL3ZlaGljbGUtcGFnZScgLyogd2VicGFja0NodW5rTmFtZTogXCJ2ZWhpY2xlLXBhZ2VcIiAqLyk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgICdzdGFyc2hpcC1saXN0Jzoge1xuICAgICAgICBwYXRoOiAnL3N0YXJzaGlwcy8nLFxuICAgICAgICBsb2FkOiBhc3luYyAocGFyYW1zKSA9PiB7XG4gICAgICAgICAgICBwYXJhbXMubW9kdWxlID0gYXdhaXQgaW1wb3J0KCdwYWdlcy9zdGFyc2hpcC1saXN0JyAvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcInN0YXJzaGlwLWxpc3RcIiAqLyk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgICdzdGFyc2hpcC1zdW1tYXJ5Jzoge1xuICAgICAgICBwYXRoOiAnL3N0YXJzaGlwLyR7aWR9LycsXG4gICAgICAgIHBhcmFtczogeyBpZDogTnVtYmVyIH0sXG4gICAgICAgIGxvYWQ6IGFzeW5jIChwYXJhbXMpID0+IHtcbiAgICAgICAgICAgIHBhcmFtcy5tb2R1bGUgPSBhd2FpdCBpbXBvcnQoJ3BhZ2VzL3N0YXJzaGlwLXBhZ2UnIC8qIHdlYnBhY2tDaHVua05hbWU6IFwic3RhcnNoaXAtcGFnZVwiICovKTtcbiAgICAgICAgfVxuICAgIH0sXG59O1xuXG5leHBvcnQgeyBSb3V0ZSwgcm91dGVzIH07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yb3V0ZXMuanMiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3R5bGUuc2Nzc1xuLy8gbW9kdWxlIGlkID0gLi9zdHlsZS5zY3NzXG4vLyBtb2R1bGUgY2h1bmtzID0gbWFpbiIsImNsYXNzIFNXQVBJIHtcbiAgICAvKipcbiAgICAgKiBSZW1lbWJlciB0aGUgZGF0YSBzb3VyY2VcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihkYXRhU291cmNlLCBzc3IpIHtcbiAgICAgICAgdGhpcy5kYXRhU291cmNlID0gZGF0YVNvdXJjZTtcbiAgICAgICAgdGhpcy5zc3IgPSBzc3I7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRmV0Y2ggb25lIG9iamVjdCBmcm9tIGRhdGEgc291cmNlXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHtTdHJpbmd9IHVybFxuICAgICAqIEBwYXJhbSAge09iamVjdH0gb3B0aW9uc1xuICAgICAqXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxPYmplY3Q+fVxuICAgICAqL1xuICAgIGZldGNoT25lKHVybCwgb3B0aW9ucykge1xuICAgICAgICByZXR1cm4gdGhpcy5kYXRhU291cmNlLmZldGNoT25lKHVybCwgb3B0aW9ucyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRmV0Y2ggYSBsaXN0IG9mIG9iamVjdHMgZnJvbSBkYXRhIHNvdXJjZVxuICAgICAqXG4gICAgICogQHBhcmFtICB7U3RyaW5nfSB1cmxcbiAgICAgKiBAcGFyYW0gIHtPYmplY3R9IG9wdGlvbnNcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8QXJyYXk+fVxuICAgICAqL1xuICAgIGZldGNoTGlzdCh1cmwsIG9wdGlvbnMpIHtcbiAgICAgICAgaWYgKHRoaXMuc3NyID09PSAnc2VvJykge1xuICAgICAgICAgICAgb3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe30sIG9wdGlvbnMsIHsgbWluaW11bTogJzEwMCUnIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmRhdGFTb3VyY2UuZmV0Y2hMaXN0KHVybCwgb3B0aW9ucyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRmV0Y2ggbXVsdGlwbGUgb2JqZWN0cyBmcm9tIGRhdGEgc291cmNlXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHtBcnJheTxTdHJpbmc+fSB1cmxzXG4gICAgICogQHBhcmFtICB7T2JqZWN0fSBvcHRpb25zXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPEFycmF5Pn1cbiAgICAgKi9cbiAgICBmZXRjaE11bHRpcGxlKHVybHMsIG9wdGlvbnMpIHtcbiAgICAgICAgaWYgKHRoaXMuc3NyID09PSAnc2VvJykge1xuICAgICAgICAgICAgb3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe30sIG9wdGlvbnMsIHsgbWluaW11bTogJzEwMCUnIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmRhdGFTb3VyY2UuZmV0Y2hNdWx0aXBsZSh1cmxzLCBvcHRpb25zKTtcbiAgICB9XG59XG5cbmV4cG9ydCB7XG4gICAgU1dBUEkgYXMgZGVmYXVsdCxcbiAgICBTV0FQSSxcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zd2FwaS5qcyIsImltcG9ydCB7IGgsIENvbXBvbmVudCB9IGZyb20gJ3ByZWFjdCc7XG5cbi8qKiBAanN4IGggKi9cblxuZnVuY3Rpb24gTmF2QmFyKHByb3BzKSB7XG4gICAgbGV0IHsgcm91dGUgfSA9IHByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2LWJhclwiPlxuICAgICAgICAgICAgPEJ1dHRvbiBwYWdlTmFtZT1cIndlbGNvbWVcIiByb3V0ZT17cm91dGV9PlxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhYiBmYS1lbXBpcmVcIiAvPlxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8QnV0dG9uIHBhZ2VOYW1lPVwiZmlsbS1saXN0XCIgcm91dGU9e3JvdXRlfT5cbiAgICAgICAgICAgICAgICBGaWxtc1xuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8QnV0dG9uIHBhZ2VOYW1lPVwiY2hhcmFjdGVyLWxpc3RcIiByb3V0ZT17cm91dGV9PlxuICAgICAgICAgICAgICAgIENoYXJhY3RlcnNcbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgPEJ1dHRvbiBwYWdlTmFtZT1cInBsYW5ldC1saXN0XCIgcm91dGU9e3JvdXRlfT5cbiAgICAgICAgICAgICAgICBQbGFuZXRzXG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDxCdXR0b24gcGFnZU5hbWU9XCJzcGVjaWVzLWxpc3RcIiByb3V0ZT17cm91dGV9PlxuICAgICAgICAgICAgICAgIFNwZWNpZXNcbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgPEJ1dHRvbiBwYWdlTmFtZT1cInZlaGljbGUtbGlzdFwiIHJvdXRlPXtyb3V0ZX0+XG4gICAgICAgICAgICAgICAgVmVoaWNsZXNcbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgPEJ1dHRvbiBwYWdlTmFtZT1cInN0YXJzaGlwLWxpc3RcIiByb3V0ZT17cm91dGV9PlxuICAgICAgICAgICAgICAgIFN0YXJzaGlwc1xuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cbk5hdkJhci5kaXNwbGF5TmFtZSA9ICdOYXZCYXInO1xuXG5mdW5jdGlvbiBCdXR0b24ocHJvcHMpIHtcbiAgICBsZXQgeyByb3V0ZSB9ID0gcHJvcHM7XG4gICAgbGV0IGxpbmtQcm9wcyA9IHtcbiAgICAgICAgY2xhc3NOYW1lOiAnYnV0dG9uJyxcbiAgICAgICAgaHJlZjogcm91dGUuZmluZChwcm9wcy5wYWdlTmFtZSksXG4gICAgfTtcbiAgICByZXR1cm4gPGEgey4uLmxpbmtQcm9wc30+e3Byb3BzLmNoaWxkcmVufTwvYT47XG59XG5cbkJ1dHRvbi5kaXNwbGF5TmFtZSA9ICdCdXR0b24nO1xuXG5leHBvcnQge1xuICAgIE5hdkJhciBhcyBkZWZhdWx0LFxuICAgIE5hdkJhclxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3dpZGdldHMvbmF2LWJhci5qc3giXSwic291cmNlUm9vdCI6IiJ9