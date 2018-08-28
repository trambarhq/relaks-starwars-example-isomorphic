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
            swapi: new _swapi2.default(dataSource)
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
                            appElement = (0, _preact.h)(_application.Application, { dataSource: dataSource, routeManager: routeManager });
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

var _classCallCheck2 = __webpack_require__("../node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("../node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SWAPI = function () {
    /**
     * Remember the data source
     */
    function SWAPI(dataSource) {
        (0, _classCallCheck3.default)(this, SWAPI);

        this.dataSource = dataSource;
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
        key: "fetchOne",
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
        key: "fetchList",
        value: function fetchList(url, options) {
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
        key: "fetchMultiple",
        value: function fetchMultiple(urls, options) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNGFlNWZiZDNlZThmMWQ0ZWVjZGYiLCJ3ZWJwYWNrOi8vLy9ob21lL2NsZW9uZy9yZWxha3MtZGphbmdvLWRhdGEtc291cmNlL2luZGV4LmpzIiwid2VicGFjazovLy8vaG9tZS9jbGVvbmcvcmVsYWtzLWhhcnZlc3QvZnVuY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy9ob21lL2NsZW9uZy9yZWxha3MtaGFydmVzdC9tZWFud2hpbGUuanMiLCJ3ZWJwYWNrOi8vLy9ob21lL2NsZW9uZy9yZWxha3MtaGFydmVzdC9wcmVhY3QuanMiLCJ3ZWJwYWNrOi8vLy9ob21lL2NsZW9uZy9yZWxha3Mtcm91dGUtbWFuYWdlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9qc29uL3N0cmluZ2lmeS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvY3JlYXRlLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9kZWZpbmUtcHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2dldC1wcm90b3R5cGUtb2YuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L3NldC1wcm90b3R5cGUtb2YuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvcHJvbWlzZS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9zeW1ib2wuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvc3ltYm9sL2l0ZXJhdG9yLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9oZWxwZXJzL2FzeW5jVG9HZW5lcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2suanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHMuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVybi5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL3JlZ2VuZXJhdG9yL2luZGV4LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL2pzb24vc3RyaW5naWZ5LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2RlZmluZS1wcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZ2V0LXByb3RvdHlwZS1vZi5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3Qvc2V0LXByb3RvdHlwZS1vZi5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9wcm9taXNlLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL3N5bWJvbC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9zeW1ib2wvaXRlcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYS1mdW5jdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hZGQtdG8tdW5zY29wYWJsZXMuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYW4taW5zdGFuY2UuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYW4tb2JqZWN0LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FycmF5LWluY2x1ZGVzLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NsYXNzb2YuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY29mLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NvcmUuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY3R4LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2RlZmluZWQuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZGVzY3JpcHRvcnMuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZG9tLWNyZWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19lbnVtLWJ1Zy1rZXlzLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2VudW0ta2V5cy5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19leHBvcnQuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZmFpbHMuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZm9yLW9mLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19oYXMuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faGlkZS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19odG1sLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2llOC1kb20tZGVmaW5lLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2ludm9rZS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pb2JqZWN0LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lzLWFycmF5LWl0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXMtYXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXMtb2JqZWN0LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItY2FsbC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWNyZWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWRlZmluZS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWRldGVjdC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLXN0ZXAuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlcmF0b3JzLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2xpYnJhcnkuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fbWV0YS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19taWNyb3Rhc2suanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fbmV3LXByb21pc2UtY2FwYWJpbGl0eS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtY3JlYXRlLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1kcC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZHBzLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1nb3BkLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1nb3BuLWV4dC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ29wbi5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ29wcy5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ3BvLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1rZXlzLWludGVybmFsLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1rZXlzLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1waWUuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LXNhcC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19wZXJmb3JtLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3Byb21pc2UtcmVzb2x2ZS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19wcm9wZXJ0eS1kZXNjLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3JlZGVmaW5lLWFsbC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19yZWRlZmluZS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zZXQtcHJvdG8uanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2V0LXNwZWNpZXMuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2V0LXRvLXN0cmluZy10YWcuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2hhcmVkLWtleS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zaGFyZWQuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc3BlY2llcy1jb25zdHJ1Y3Rvci5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zdHJpbmctYXQuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdGFzay5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1hYnNvbHV0ZS1pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1pbnRlZ2VyLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWlvYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tbGVuZ3RoLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1wcmltaXRpdmUuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdWlkLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3VzZXItYWdlbnQuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fd2tzLWRlZmluZS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL193a3MtZXh0LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3drcy5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2NvcmUuZ2V0LWl0ZXJhdG9yLW1ldGhvZC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5hcnJheS5pdGVyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QuY3JlYXRlLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5kZWZpbmUtcHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmdldC1wcm90b3R5cGUtb2YuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LnNldC1wcm90b3R5cGUtb2YuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYucHJvbWlzZS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYuc3ltYm9sLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM3LnByb21pc2UuZmluYWxseS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNy5wcm9taXNlLnRyeS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNy5zeW1ib2wuYXN5bmMtaXRlcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczcuc3ltYm9sLm9ic2VydmFibGUuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvcHJlYWN0L2RldnRvb2xzLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvcHJlYWN0L2Rpc3QvcHJlYWN0LmVzbS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3JlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZS1tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9yZWdlbmVyYXRvci1ydW50aW1lL3J1bnRpbWUuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9yZWxha3MvYXN5bmMtcmVuZGVyaW5nLWludGVycnVwdGVkLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvcmVsYWtzL2NsYXNzLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvcmVsYWtzL21lYW53aGlsZS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3JlbGFrcy9wcmVhY3QuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwbGljYXRpb24uanN4Iiwid2VicGFjazovLy8uL21haW4uanMiLCJ3ZWJwYWNrOi8vLy4vcm91dGVzLmpzIiwid2VicGFjazovLy8uL3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3dhcGkuanMiLCJ3ZWJwYWNrOi8vLy4vd2lkZ2V0cy9uYXYtYmFyLmpzeCJdLCJuYW1lcyI6WyJkZWZhdWx0T3B0aW9ucyIsImJhc2VVUkwiLCJyZWZyZXNoSW50ZXJ2YWwiLCJhdXRob3JpemF0aW9uS2V5d29yZCIsImFiYnJldmlhdGVkRm9sZGVyQ29udGVudHMiLCJSZWxha3NEamFuZ29EYXRhU291cmNlIiwib3B0aW9ucyIsImxpc3RlbmVycyIsInF1ZXJpZXMiLCJhdXRoZW50aWNhdGlvbnMiLCJhdXRob3JpemF0aW9ucyIsIm5hbWUiLCJ1bmRlZmluZWQiLCJwcm90b3R5cGUiLCJpbml0aWFsaXplIiwic3RhcnRFeHBpcmF0aW9uQ2hlY2siLCJzaHV0ZG93biIsInN0b3BFeHBpcmF0aW9uQ2hlY2siLCJhZGRFdmVudExpc3RlbmVyIiwidHlwZSIsImhhbmRsZXIiLCJwdXNoIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImZpbHRlciIsImxpc3RlbmVyIiwidHJpZ2dlckV2ZW50IiwiZXZ0IiwiZmlyZWQiLCJmb3JFYWNoIiwicmVzb2x2ZVVSTCIsInVybCIsInRlc3QiLCJyZW1vdmVUcmFpbGluZ1NsYXNoIiwiYWRkTGVhZGluZ1NsYXNoIiwicmVzb2x2ZVVSTHMiLCJ1cmxzIiwiX3RoaXMiLCJtYXAiLCJmZXRjaE9uZSIsImFic1VSTCIsInByb3BzIiwicXVlcnkiLCJmaW5kUXVlcnkiLCJkZXJpdmVRdWVyeSIsInByb21pc2UiLCJnZXQiLCJ0aGVuIiwicmVzcG9uc2UiLCJvYmplY3QiLCJ1cGRhdGVRdWVyeSIsInJldHJpZXZhbFRpbWUiLCJnZXRUaW1lIiwiYWRkUXVlcnkiLCJkaXJ0eSIsInJlZnJlc2hPbmUiLCJmZXRjaFBhZ2UiLCJwYWdlIiwicGFnZVVSTCIsImF0dGFjaFBhZ2VOdW1iZXIiLCJvYmplY3RzIiwicmVzdWx0cyIsInJlZnJlc2hQYWdlIiwiZmV0Y2hMaXN0IiwiZmV0Y2hOZXh0UGFnZSIsInJlZnJlc2hMaXN0IiwiZmV0Y2hOb01vcmUiLCJpbml0aWFsIiwibmV4dFByb21pc2UiLCJuZXh0VVJMIiwiQXJyYXkiLCJtb3JlIiwiYmluZCIsInRvdGFsIiwibGVuZ3RoIiwiT2JqZWN0IiwiY291bnQiLCJhcHBlbmRPYmplY3RzIiwibmV4dCIsIm5leHRQYWdlIiwibWluaW11bSIsImdldE1pbmltdW0iLCJOYU4iLCJSZWxha3NEamFuZ29EYXRhU291cmNlRXZlbnQiLCJjYXRjaCIsImVyciIsImZldGNoTXVsdGlwbGUiLCJjYWNoZWQiLCJmZXRjaE9wdGlvbnMiLCJwcm9taXNlcyIsImNvbXBsZXRlTGlzdFByb21pc2UiLCJhbGwiLCJGdW5jdGlvbiIsInJlZnJlc2hpbmciLCJjb25zb2xlIiwibG9nIiwiY2hhbmdlZCIsIm1hdGNoT2JqZWN0IiwicmVzb2x2ZSIsInJlcGxhY2VJZGVudGlmaWNhbE9iamVjdHMiLCJ3YWl0Rm9yTmV4dFBhZ2UiLCJvbGRPYmplY3RzIiwibW9yZVByb21pc2UiLCJtb3JlUmVzb2x2ZSIsIm1vcmVSZWplY3QiLCJmZXRjaE1vcmVBZnRlcndhcmQiLCJyZWplY3QiLCJyZWZyZXNoZWRPYmplY3RzIiwicGFnZVJlbWFpbmluZyIsInJlZnJlc2hOZXh0UGFnZSIsImpvaW5PYmplY3RMaXN0cyIsImluc2VydE9uZSIsImZvbGRlclVSTCIsImluc2VydE11bHRpcGxlIiwiaW5zZXJ0ZWRPYmplY3RzIiwiZm9sZGVyQWJzVVJMIiwiaSIsInBvc3QiLCJzb21lIiwiaW5zZXJ0ZWRPYmplY3QiLCJvYmplY3RGb2xkZXJVUkwiLCJnZXRPYmplY3RGb2xkZXJVUkwiLCJtYXRjaFVSTCIsImluRm9sZGVyIiwicmVtb3ZlT2JqZWN0c091dHNpZGVGb2xkZXIiLCJkZWZhdWx0QmVoYXZpb3IiLCJydW5Ib29rIiwidXBkYXRlT25lIiwidXBkYXRlTXVsdGlwbGUiLCJnZXRPYmplY3RVUkwiLCJwdXQiLCJ1cGRhdGVkT2JqZWN0cyIsInVwZGF0ZWRPYmplY3QiLCJvYmplY3RVUkwiLCJkZWxldGVPbmUiLCJkZWxldGVNdWx0aXBsZSIsImRlbGV0ZSIsImRlbGV0ZWRPYmplY3RzIiwia2VlcCIsImRlbGV0ZWRPYmplY3QiLCJmaW5kIiwibWF0Y2hRdWVyeSIsImdldEZvbGRlclVSTCIsImFiYnJldmlhdGVkIiwiaXRlbSIsImNvbmNhdCIsInJlcXVlc3RBdXRoZW50aWNhdGlvbiIsImF1dGhlbnRpY2F0aW9uIiwiciIsImF1dGhlbnRpY2F0aW9uRXZlbnQiLCJldmVudEhhbmRsZWQiLCJ3YWl0Rm9yRGVjaXNpb24iLCJkZWZhdWx0UHJldmVudGVkIiwiaW5kZXgiLCJpbmRleE9mIiwic3BsaWNlIiwiYXV0aGVudGljYXRlIiwibG9naW5VUkwiLCJjcmVkZW50aWFscyIsImFsbG93VVJMcyIsImxvZ2luQWJzVVJMIiwidG9rZW4iLCJrZXkiLCJFcnJvciIsImF1dGhvcml6ZSIsImFsbG93QWJzVVJMcyIsImF1dGhvcml6YXRpb25FdmVudCIsImFjY2VwdGFibGUiLCJhdXRob3JpemF0aW9uIiwiYWxsb3ciLCJkZW55IiwibWF0Y2hBbnlVUkwiLCJnZXRBdXRob3JpemF0aW9uVG9rZW4iLCJjYW5jZWxBdXRoZW50aWNhdGlvbiIsImNhbmNlbEF1dGhvcml6YXRpb24iLCJkZW55VVJMcyIsImRlbnlBYnNVUkxzIiwicmV2b2tlQXV0aG9yaXphdGlvbiIsImxvZ291dFVSTCIsImxvZ291dEFic1VSTCIsImZldGNoIiwic3RhdHVzIiwianNvbiIsInN0YXR1c1RleHQiLCJmb2xkZXJVUkwxIiwiZm9sZGVyVVJMMiIsImV4cGlyYXRpb25DaGVja0ludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJjaGVja0V4cGlyYXRpb24iLCJjbGVhckludGVydmFsIiwiaW50ZXJ2YWwiLCJOdW1iZXIiLCJsaW1pdCIsIm1ldGhvZCIsImhlYWRlcnMiLCJyZXF1ZXN0IiwibW9kZSIsImNhY2hlIiwiYm9keSIsImtleXdvcmQiLCJhdXRoZW50aWNhdGVkIiwiaG9va05hbWUiLCJpbnB1dCIsImhvb2tGdW5jIiwicmVmcmVzaFF1ZXJ5IiwiaWdub3JlQ2hhbmdlIiwicmVwbGFjZU9iamVjdCIsInJlcGxhY2VPYmplY3RzIiwidW5zaGlmdE9iamVjdHMiLCJwdXNoT2JqZWN0cyIsInJlbW92ZU9iamVjdCIsInJlbW92ZU9iamVjdHMiLCJpbXBhY3QiLCJCb29sZWFuIiwic29ydE9iamVjdHMiLCJkaWZmIiwibmV3T2JqZWN0IiwibmV3T2JqZWN0cyIsIm5ld0xpc3QiLCJmaW5kT2JqZWN0Iiwic2xpY2UiLCJmaW5kT2JqZWN0SW5kZXgiLCJ1bnNoaWZ0IiwiZGVsZXRlZE9CamVjdCIsIm9iamVjdDEiLCJvYmplY3QyIiwiY29uc3RydWN0b3IiLCJ0b1N0cmluZyIsIm90aGVyVVJMcyIsIm90aGVyVVJMIiwic3Vic3RyIiwibGMiLCJjaGFyQXQiLCJlYyIsImZjIiwiZWkiLCJsYXN0SW5kZXhPZiIsImlkIiwicWkiLCJzZXAiLCJ1cmwxIiwidXJsMiIsImxpc3QiLCJrZXlBIiwib2JqIiwia2V5QiIsInNvcnQiLCJhIiwiYiIsIm9sZExpc3QiLCJ1bmNoYW5nZWQiLCJvbGRJbmRleCIsInN0YXJ0SW5kZXgiLCJvdGhlcmZvbGRlclVSTCIsImRlZiIsInBlcmNlbnQiLCJwYXJzZUludCIsIk1hdGgiLCJjZWlsIiwiZGVsdGEiLCJkYXRlIiwiRGF0ZSIsInRvSVNPU3RyaW5nIiwidGFyZ2V0IiwiZGVjaXNpb25Qcm9taXNlIiwicHJldmVudERlZmF1bHQiLCJwb3N0cG9uZURlZmF1bHQiLCJtb2R1bGUiLCJleHBvcnRzIiwiUmVhY3QiLCJJU19QUkVBQ1QiLCJoIiwiTWVhbndoaWxlIiwicmVxdWlyZSIsImhhcnZlc3QiLCJub2RlIiwiaGFydmVzdGVkIiwiaGFydmVzdE5vZGUiLCJpc1Byb21pc2UiLCJjb250ZXh0IiwiYXN5bmNSZW5kZXJpbmciLCJnZXROb2RlVHlwZSIsInJlbmRlcmVkIiwiZ2V0Tm9kZVByb3BzIiwicmVuZGVyIiwiY29tcG9uZW50Q2xhc3MiLCJjb21wb25lbnQiLCJzdGF0ZSIsImdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyIsIm9yaWdpbmFsU3RhdGUiLCJkZXJpdmVkU3RhdGUiLCJhc3NpZ24iLCJjb21wb25lbnRXaWxsTW91bnQiLCJ1cGRhdGVyIiwiUmVhY3RVcGRhdGVyIiwiVU5TQUZFX2NvbXBvbmVudFdpbGxNb3VudCIsInJlbGFrcyIsInJlbmRlckFzeW5jIiwibWVhbndoaWxlIiwic3RhdGVsZXNzQ29tcG9uZW50RnVuYyIsImhhcnZlc3RDaGlsZHJlbiIsImNoaWxkcmVuIiwiZ2V0Tm9kZUNoaWxkcmVuIiwibmV3Q2hpbGRyZW4iLCJoYXJ2ZXN0Tm9kZXMiLCJyZXBsYWNlQ2hpbGRyZW4iLCJub2RlcyIsImFzeW5jUmVuZGVyaW5nUmVxdWlyZWQiLCJuZXdOb2RlcyIsImVsZW1lbnQiLCJjbG9uZUVsZW1lbnQiLCJkZXN0Iiwic3JjIiwibm9kZU5hbWUiLCJhdHRyaWJ1dGVzIiwiZGVmaW5lUHJvcGVydHkiLCJ2YWx1ZSIsImRlZmF1bHRQcm9wcyIsImVucXVldWVDYWxsYmFjayIsImluc3QiLCJmIiwiZW5xdWV1ZUZvcmNlVXBkYXRlIiwiZW5xdWV1ZVJlcGxhY2VTdGF0ZSIsIm5ld1N0YXRlIiwiZW5xdWV1ZVNldFN0YXRlIiwicGFydGlhbFN0YXRlIiwiaXNNb3VudGVkIiwicHJldmlvdXNseSIsInN5bmNocm9ub3VzIiwic2hvd2luZ1Byb2dyZXNzIiwic2hvd2luZ1Byb2dyZXNzSW5pdGlhbGx5IiwiZGVsYXlXaGVuRW1wdHkiLCJJbmZpbml0eSIsImRlbGF5V2hlblJlbmRlcmVkIiwiY2FuY2VsZWQiLCJwcmlvciIsInByZXZpb3VzIiwiY3VycmVudCIsInVwZGF0ZVRpbWVvdXQiLCJzdGFydFRpbWUiLCJvbkNhbmNlbCIsIm9uQ29tcGxldGUiLCJvblByb2dyZXNzIiwiY2hlY2siLCJzaG93IiwiZGlzcG9zaXRpb24iLCJyZXZpc2luZyIsImRlbGF5IiwiZW1wdHkiLCJ1cGRhdGUiLCJmb3JjZWQiLCJjYW5jZWwiLCJmaW5pc2giLCJjbGVhciIsInNjcmlwdFN0YXJ0VGltZSIsIlNTUiIsIndpbmRvdyIsInVzZUhhc2hGYWxsYmFjayIsInRyYWNrTGlua3MiLCJ0cmFja0xvY2F0aW9uIiwiYmFzZVBhdGgiLCJpbml0aWFsUGF0aCIsIlJlbGFrc1JvdXRlTWFuYWdlciIsInBhcmFtcyIsInJvdXRlcyIsImhpc3RvcnkiLCJyZXdyaXRlcyIsImFkZFJvdXRlcyIsImFkZFJld3JpdGVzIiwiaGFuZGxlTGlua0NsaWNrIiwiaGFuZGxlUG9wU3RhdGUiLCJnZXRMb2NhdGlvblVSTCIsImxvY2F0aW9uIiwiY2hhbmdlIiwicmVwbGFjZSIsIm9wdCIsInJlbW92ZVJvdXRlcyIsInJld3JpdGUiLCJyZW1vdmVSZXdyaXRlcyIsIm1hdGNoIiwidGltZSIsImFwcGx5IiwibmV3Q29udGV4dCIsInVybFBhcnRzIiwiZmlsbCIsInJlYmFzZSIsImNvbXBvc2VVUkwiLCJiYWNrIiwiYmFja1Jlc29sdmUiLCJiYWNrUmVqZWN0Iiwic2V0VGltZW91dCIsInBhcnNlVVJMIiwicm91dGVEZWYiLCJ0eXBlcyIsIm1hdGNoVGVtcGxhdGUiLCJwYXRoIiwicXVlcnlWYXJOYW1lIiwicXVlcnlWYXJUZW1wbGF0ZSIsInF1ZXJ5VmFyVmFsdWUiLCJoYXNoIiwic3luYyIsImNvbmZpcm1hdGlvbkV2ZW50IiwiUmVsYWtzUm91dGVNYW5hZ2VyRXZlbnQiLCJsb2FkIiwiZW50cnkiLCJzZXRMb2NhdGlvblVSTCIsImZpbGxUZW1wbGF0ZSIsImRpcmVjdGlvbiIsImZyb20iLCJ0byIsIm5ld1BhdGgiLCJnZXRSZWxhdGl2ZVBhdGgiLCJyZXN1bHQiLCJkb2NMb2NhdGlvbiIsInByb3RvY29sIiwiaG9zdCIsInBhdGhuYW1lIiwic2VhcmNoIiwiY3VycmVudFVSTCIsInJlcGxhY2VTdGF0ZSIsInB1c2hTdGF0ZSIsImJ1dHRvbiIsImxpbmsiLCJnZXRMaW5rIiwiZG93bmxvYWQiLCJzdG9wUHJvcGFnYXRpb24iLCJ2YXJpYWJsZVJlZ0V4cCIsInJlZ0V4cENhY2hlIiwiZ2V0VVJMVGVtcGxhdGVSZWdFeHAiLCJ0ZW1wbGF0ZSIsImlzUGF0aCIsInBhdHRlcm4iLCJ2YXJpYWJsZSIsInZhcmlhYmxlVHlwZSIsInZhcmlhYmxlUGF0dGVybiIsInJlIiwiUmVnRXhwIiwiZ2V0VVJMVGVtcGxhdGVWYXJpYWJsZXMiLCJtYXRjaGVzIiwidXJsUGFydCIsInQiLCJleGVjIiwidmFyaWFibGVzIiwidmFsdWVzIiwiY2FzdFZhbHVlIiwiYWx3YXlzIiwidG9rZW5zIiwicyIsImpvaW4iLCJ1cmxQYXRoIiwic3RyaW5nIiwic3RyaW5naWZ5VmFsdWUiLCJTdHJpbmciLCJuIiwicGFyc2VGbG9hdCIsImhhc2hJbmRleCIsInF1ZXJ5SW5kZXgiLCJwYXJzZVF1ZXJ5U3RyaW5nIiwicXVlcnlTdHJpbmciLCJwYWlycyIsInNwbGl0IiwicGFydHMiLCJkZWNvZGVVUklDb21wb25lbnQiLCJjb21wb3NlUXVlcnlTdHJpbmciLCJlbmNvZGVVUklDb21wb25lbnQiLCJ0YWdOYW1lIiwiaHJlZiIsInBhcmVudE5vZGUiLCJBcHBsaWNhdGlvbiIsImhhbmRsZURhdGFTb3VyY2VDaGFuZ2UiLCJzZXRTdGF0ZSIsInN3YXBpIiwiU1dBUEkiLCJoYW5kbGVSb3V0ZUNoYW5nZSIsInJvdXRlIiwiUm91dGUiLCJyb3V0ZU1hbmFnZXIiLCJkYXRhU291cmNlIiwiQ29tcG9uZW50IiwiZGVmYXVsdCIsImRvY3VtZW50IiwiY2xhc3NOYW1lIiwiZGlzcGxheU5hbWUiLCJkYXRhU291cmNlQmFzZVVSTCIsInBhZ2VCYXNlUGF0aCIsIkRqYW5nb0RhdGFTb3VyY2UiLCJSb3V0ZU1hbmFnZXIiLCJhcHBDb250YWluZXIiLCJnZXRFbGVtZW50QnlJZCIsImFwcEVsZW1lbnQiLCJmaXJzdENoaWxkIiwic2VydmVyU2lkZVJlbmRlciIsInNpIiwidGV4dCIsInN1YnN0cmluZyIsIk5hdkJhciIsIkJ1dHRvbiIsImxpbmtQcm9wcyIsInBhZ2VOYW1lIl0sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBa0IscUJBQXFCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHNCQUFjO0FBQ2QsWUFBSTtBQUNKOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pGQSxJQUFJQSxpQkFBaUI7QUFDakJDLGFBQVMsRUFEUTtBQUVqQkMscUJBQWlCLENBRkE7QUFHakJDLDBCQUFzQixPQUhMO0FBSWpCQywrQkFBMkI7QUFKVixDQUFy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Ozs7QUNsQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLDJCQUEyQjs7QUFFNUI7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLEtBQUs7QUFDakI7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFlBQVksYUFBYTtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksZUFBZTtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksV0FBVztBQUN2QixZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FB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QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsMkNBQTJDO0FBQzNDLEVBQUU7QUFDRjtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQSxzRkFBc0Y7QUFDdEYsR0FBRztBQUNILDBGQUEwRjtBQUMxRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxXQUFXLFFBQVE7QUFDbkIsV0FBVyxNQUFNO0FBQ2pCLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNENBQTRDLEtBQUs7QUFDakQ7QUFDQTtBQUNB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UztBQUNUOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLFNBQVM7QUFDVDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0NBQW9DLGNBQWM7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlDQUFpQyxrQkFBa0I7QUFDbkQ7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQjs7QUFFakI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGlCQUFpQjtBQUN6QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFlBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0EsWUFBWTtBQUNaOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsOENBQThDLFFBQVE7QUFDdEQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBOztBQUVBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7O0FBRUEsV0FBVztBQUNYO0FBQ0E7QUFDQTs7QUFFQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0EsOENBQThDLFFBQVE7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSw4Q0FBOEMsUUFBUTtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSw4Q0FBOEMsUUFBUTtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOzs7Ozs7OztBQ2h0QkE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7QUNSQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQjtBQUMvQjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FB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akIsRUFBZ0MsT0FBT0EsS0FBdkM7QUFBQTtBQUFBLFNBYko7QUFnQkk7QUFBQyxrQkFBRDtBQUFBLGNBQVEsVUFBUyxjQUFqQixFQUFnQyxPQUFPQSxLQUF2QztBQUFBO0FBQUEsU0FoQko7QUFtQkk7QUFBQyxrQkFBRDtBQUFBLGNBQVEsVUFBUyxlQUFqQixFQUFpQyxPQUFPQSxLQUF4QztBQUFBO0FBQUE7QUFuQkosS0FESjtBQXlCSDs7QUFFRHFCLE9BQU9iLFdBQVAsR0FBcUIsUUFBckI7O0FBRUEsU0FBU2MsTUFBVCxDQUFnQnZjLEtBQWhCLEVBQXVCO0FBQUEsUUFDYmliLEtBRGEsR0FDSGpiLEtBREcsQ0FDYmliLEtBRGE7O0FBRW5CLFFBQUl1QixZQUFZO0FBQ1poQixtQkFBVyxRQURDO0FBRVpmLGNBQU1RLE1BQU05VSxJQUFOLENBQVduRyxNQUFNeWMsUUFBakI7QUFGTSxLQUFoQjtBQUlBLFdBQU87QUFBQTtBQUFPRCxpQkFBUDtBQUFtQnhjLGNBQU1vUTtBQUF6QixLQUFQO0FBQ0g7O0FBRURtTSxPQUFPZCxXQUFQLEdBQXFCLFFBQXJCOztRQUdjSCxPLEdBQVZnQixNO1FBQ0FBLE0sR0FBQUEsTSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGNodW5rc1xuIFx0Ly8gXCIwXCIgbWVhbnMgXCJhbHJlYWR5IGxvYWRlZFwiXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHRtYWluOiAwXG4gXHR9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cbiBcdC8vIFRoaXMgZmlsZSBjb250YWlucyBvbmx5IHRoZSBlbnRyeSBjaHVuay5cbiBcdC8vIFRoZSBjaHVuayBsb2FkaW5nIGZ1bmN0aW9uIGZvciBhZGRpdGlvbmFsIGNodW5rc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5lID0gZnVuY3Rpb24gcmVxdWlyZUVuc3VyZShjaHVua0lkKSB7XG4gXHRcdC8vIFwiMFwiIGlzIHRoZSBzaWduYWwgZm9yIFwiYWxyZWFkeSBsb2FkZWRcIlxuIFx0XHRpZihpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gIT09IDApIHtcbiBcdFx0XHR2YXIgY2h1bmsgPSByZXF1aXJlKFwiLi9cIiArIGNodW5rSWQgKyBcIi5hcHAuanNcIik7XG4gXHRcdFx0dmFyIG1vcmVNb2R1bGVzID0gY2h1bmsubW9kdWxlcywgY2h1bmtJZHMgPSBjaHVuay5pZHM7XG4gXHRcdFx0Zm9yKHZhciBtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHRcdGZvcih2YXIgaSA9IDA7IGkgPCBjaHVua0lkcy5sZW5ndGg7IGkrKylcbiBcdFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkc1tpXV0gPSAwO1xuIFx0XHR9XG4gXHRcdHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiBcdH07XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL3N0YXJ3YXJzXCI7XG5cbiBcdC8vIHVuY2F0Y2hlZCBlcnJvciBoYW5kbGVyIGZvciB3ZWJwYWNrIHJ1bnRpbWVcbiBcdF9fd2VicGFja19yZXF1aXJlX18ub2UgPSBmdW5jdGlvbihlcnIpIHtcbiBcdFx0cHJvY2Vzcy5uZXh0VGljayhmdW5jdGlvbigpIHtcbiBcdFx0XHR0aHJvdyBlcnI7IC8vIGNhdGNoIHRoaXMgZXJyb3IgYnkgdXNpbmcgU3lzdGVtLmltcG9ydCgpLmNhdGNoKClcbiBcdFx0fSk7XG4gXHR9O1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9tYWluLmpzXCIpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDRhZTVmYmQzZWU4ZjFkNGVlY2RmIiwidmFyIGRlZmF1bHRPcHRpb25zID0ge1xuICAgIGJhc2VVUkw6ICcnLFxuICAgIHJlZnJlc2hJbnRlcnZhbDogMCxcbiAgICBhdXRob3JpemF0aW9uS2V5d29yZDogJ1Rva2VuJyxcbiAgICBhYmJyZXZpYXRlZEZvbGRlckNvbnRlbnRzOiBmYWxzZSxcbn07XG5cbmZ1bmN0aW9uIFJlbGFrc0RqYW5nb0RhdGFTb3VyY2Uob3B0aW9ucykge1xuICAgIHRoaXMubGlzdGVuZXJzID0gW107XG4gICAgdGhpcy5xdWVyaWVzID0gW107XG4gICAgdGhpcy5hdXRoZW50aWNhdGlvbnMgPSBbXTtcbiAgICB0aGlzLmF1dGhvcml6YXRpb25zID0gW107XG4gICAgdGhpcy5vcHRpb25zID0ge307XG4gICAgZm9yICh2YXIgbmFtZSBpbiBkZWZhdWx0T3B0aW9ucykge1xuICAgICAgICBpZiAob3B0aW9ucyAmJiBvcHRpb25zW25hbWVdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMub3B0aW9uc1tuYW1lXSA9IG9wdGlvbnNbbmFtZV07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLm9wdGlvbnNbbmFtZV0gPSBkZWZhdWx0T3B0aW9uc1tuYW1lXTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxudmFyIHByb3RvdHlwZSA9IFJlbGFrc0RqYW5nb0RhdGFTb3VyY2UucHJvdG90eXBlO1xuXG4vKipcbiAqIEluaXRpYWxpemUgdGhlIGNvbXBvbmVudFxuICovXG5wcm90b3R5cGUuaW5pdGlhbGl6ZSA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuc3RhcnRFeHBpcmF0aW9uQ2hlY2soKTtcbn07XG5cbi8qKlxuICogU2h1dGRvd24gdGhlIGNvbXBvbmVudFxuICovXG5wcm90b3R5cGUuc2h1dGRvd24gPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLnN0b3BFeHBpcmF0aW9uQ2hlY2soKTtcbn07XG5cbi8qKlxuICogQXR0YWNoIGFuIGV2ZW50IGhhbmRsZXJcbiAqXG4gKiBAcGFyYW0gIHtTdHJpbmd9IHR5cGVcbiAqIEBwYXJhbSAge0Z1bmN0aW9ufSBoYW5kbGVyXG4gKi9cbnByb3RvdHlwZS5hZGRFdmVudExpc3RlbmVyID0gZnVuY3Rpb24odHlwZSwgaGFuZGxlcikge1xuICAgIHRoaXMubGlzdGVuZXJzLnB1c2goeyAgdHlwZTogdHlwZSwgIGhhbmRsZXI6IGhhbmRsZXIgfSk7XG59O1xuXG4vKipcbiAqIFJlbW92ZSBhbiBldmVudCBoYW5kbGVyXG4gKlxuICogQHBhcmFtICB7U3RyaW5nfSB0eXBlXG4gKiBAcGFyYW0gIHtGdW5jdGlvbn0gaGFuZGxlclxuICovXG5wcm90b3R5cGUucmVtb3ZlRXZlbnRMaXN0ZW5lciA9IGZ1bmN0aW9uKHR5cGUsIGhhbmRsZXIpIHtcbiAgICB0aGlzLmxpc3RlbmVycyA9IHRoaXMubGlzdGVuZXJzLmZpbHRlcihmdW5jdGlvbihsaXN0ZW5lcikge1xuICAgICAgICByZXR1cm4gIShsaXN0ZW5lci50eXBlID09PSB0eXBlICYmIGxpc3RlbmVyLmhhbmRsZXIgPT09IGhhbmRsZXIpO1xuICAgIH0pXG59O1xuXG4vKipcbiAqIFNlbmQgZXZlbnQgdG8gZXZlbnQgbGlzdGVuZXJzLCByZXR1cm4gdHJ1ZSBvciBmYWxzZSBkZXBlbmRpbmcgb24gd2hldGhlclxuICogdGhlcmUgd2VyZSBhbnkgbGlzdGVuZXJzXG4gKlxuICogQHBhcmFtICB7UmVsYWtzRGphbmdvRGF0YVNvdXJjZUV2ZW50fSBldnRcbiAqXG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICovXG5wcm90b3R5cGUudHJpZ2dlckV2ZW50ID0gZnVuY3Rpb24oZXZ0KSB7XG4gICAgdmFyIGZpcmVkID0gZmFsc2U7XG4gICAgdGhpcy5saXN0ZW5lcnMuZm9yRWFjaChmdW5jdGlvbihsaXN0ZW5lcikge1xuICAgICAgICBpZiAobGlzdGVuZXIudHlwZSA9PT0gZXZ0LnR5cGUgJiYgbGlzdGVuZXIuaGFuZGxlcikge1xuICAgICAgICAgICAgZmlyZWQgPSB0cnVlO1xuICAgICAgICAgICAgbGlzdGVuZXIuaGFuZGxlcihldnQpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGZpcmVkO1xufTtcblxuLyoqXG4gKiBBZGQgYmFzZVVSTCB0byByZWxhdGl2ZSBVUkxcbiAqXG4gKiBAcGFyYW0gIHtTdHJpbmd9IHVybFxuICpcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqL1xucHJvdG90eXBlLnJlc29sdmVVUkwgPSBmdW5jdGlvbih1cmwpIHtcbiAgICBpZiAodHlwZW9mKHVybCkgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHJldHVybiB1cmw7XG4gICAgfVxuICAgIHZhciBiYXNlVVJMID0gdGhpcy5vcHRpb25zLmJhc2VVUkw7XG4gICAgaWYgKCFiYXNlVVJMIHx8IC9eaHR0cHM/Oi8udGVzdCh1cmwpKSB7XG4gICAgICAgIHJldHVybiB1cmw7XG4gICAgfVxuICAgIHJldHVybiByZW1vdmVUcmFpbGluZ1NsYXNoKGJhc2VVUkwpICsgYWRkTGVhZGluZ1NsYXNoKHVybCk7XG59O1xuXG4vKipcbiAqIFJlc29sdmUgYSBsaXN0IG9mIFVSTHNcbiAqXG4gKiBAcGFyYW0gIHtBcnJheTxTdHJpbmc+fSB1cmxzXG4gKlxuICogQHJldHVybiB7QXJyYXk8U3RyaW5nPn1cbiAqL1xucHJvdG90eXBlLnJlc29sdmVVUkxzID0gZnVuY3Rpb24odXJscykge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgcmV0dXJuIHVybHMubWFwKGZ1bmN0aW9uKHVybCkge1xuICAgICAgICByZXR1cm4gX3RoaXMucmVzb2x2ZVVSTCh1cmwpO1xuICAgIH0pO1xufTtcblxuLyoqXG4gKiBGZXRjaCBvbmUgb2JqZWN0IGF0IHRoZSBVUkwuXG4gKlxuICogQHBhcmFtICB7U3RyaW5nfSB1cmxcbiAqIEBwYXJhbSAge09iamVjdHx1bmRlZmluZWR9IG9wdGlvbnNcbiAqXG4gKiBAcmV0dXJuIHtQcm9taXNlPE9iamVjdD59XG4gKi9cbnByb3RvdHlwZS5mZXRjaE9uZSA9IGZ1bmN0aW9uKHVybCwgb3B0aW9ucykge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgdmFyIGFic1VSTCA9IHRoaXMucmVzb2x2ZVVSTCh1cmwpO1xuICAgIHZhciBwcm9wcyA9IHtcbiAgICAgICAgdHlwZTogJ29iamVjdCcsXG4gICAgICAgIHVybDogYWJzVVJMLFxuICAgICAgICBvcHRpb25zOiBvcHRpb25zIHx8IHt9LFxuICAgIH07XG4gICAgdmFyIHF1ZXJ5ID0gdGhpcy5maW5kUXVlcnkocHJvcHMpO1xuICAgIGlmICghcXVlcnkpIHtcbiAgICAgICAgcXVlcnkgPSB0aGlzLmRlcml2ZVF1ZXJ5KHByb3BzKTtcbiAgICB9XG4gICAgaWYgKCFxdWVyeSkge1xuICAgICAgICBxdWVyeSA9IHByb3BzO1xuICAgICAgICBxdWVyeS5wcm9taXNlID0gdGhpcy5nZXQoYWJzVVJMKS50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICB2YXIgb2JqZWN0ID0gcmVzcG9uc2U7XG4gICAgICAgICAgICBfdGhpcy51cGRhdGVRdWVyeShxdWVyeSwge1xuICAgICAgICAgICAgICAgIG9iamVjdDogb2JqZWN0LFxuICAgICAgICAgICAgICAgIHJldHJpZXZhbFRpbWU6IGdldFRpbWUoKSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIG9iamVjdDtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuYWRkUXVlcnkocXVlcnkpO1xuICAgIH1cbiAgICByZXR1cm4gcXVlcnkucHJvbWlzZS50aGVuKGZ1bmN0aW9uKG9iamVjdCkge1xuICAgICAgICBpZiAocXVlcnkuZGlydHkpICB7XG4gICAgICAgICAgICBfdGhpcy5yZWZyZXNoT25lKHF1ZXJ5KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gb2JqZWN0O1xuICAgIH0pO1xufTtcblxuLyoqXG4gKiBGZXRjaCBhIHBhZ2Ugb2Ygb2JqZWN0c1xuICpcbiAqIEBwYXJhbSAge1N0cmluZ30gdXJsXG4gKiBAcGFyYW0gIHtOdW1iZXJ9IHBhZ2VcbiAqIEBwYXJhbSAge09iamVjdHx1bmRlZmluZWR9IG9wdGlvbnNcbiAqXG4gKiBAcmV0dXJuIHtQcm9taXNlPEFycmF5Pn1cbiAqL1xucHJvdG90eXBlLmZldGNoUGFnZSA9IGZ1bmN0aW9uKHVybCwgcGFnZSwgb3B0aW9ucykge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgdmFyIGFic1VSTCA9IHRoaXMucmVzb2x2ZVVSTCh1cmwpO1xuICAgIHZhciBwcm9wcyA9IHtcbiAgICAgICAgdHlwZTogJ3BhZ2UnLFxuICAgICAgICB1cmw6IHVybCxcbiAgICAgICAgcGFnZTogcGFnZSxcbiAgICAgICAgb3B0aW9uczogb3B0aW9ucyB8fCB7fSxcbiAgICB9O1xuICAgIHZhciBxdWVyeSA9IHRoaXMuZmluZFF1ZXJ5KHByb3BzKTtcbiAgICBpZiAoIXF1ZXJ5KSB7XG4gICAgICAgIHZhciBwYWdlVVJMID0gYXR0YWNoUGFnZU51bWJlcihhYnNVUkwsIHBhZ2UpO1xuICAgICAgICBxdWVyeSA9IHByb3BzO1xuICAgICAgICBxdWVyeS5wcm9taXNlID0gdGhpcy5nZXQocGFnZVVSTCkudGhlbihmdW5jdGlvbihyZXNwb25zZSkge1xuICAgICAgICAgICAgdmFyIG9iamVjdHMgPSByZXNwb25zZS5yZXN1bHRzO1xuICAgICAgICAgICAgX3RoaXMudXBkYXRlUXVlcnkocXVlcnksIHtcbiAgICAgICAgICAgICAgICBvYmplY3RzOiBvYmplY3RzLFxuICAgICAgICAgICAgICAgIHJldHJpZXZhbFRpbWU6IGdldFRpbWUoKSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIG9iamVjdHM7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmFkZFF1ZXJ5KHF1ZXJ5KVxuICAgIH1cbiAgICByZXR1cm4gcXVlcnkucHJvbWlzZS50aGVuKGZ1bmN0aW9uKG9iamVjdHMpIHtcbiAgICAgICAgaWYgKHF1ZXJ5LmRpcnR5KSAge1xuICAgICAgICAgICAgX3RoaXMucmVmcmVzaFBhZ2UocXVlcnkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBvYmplY3RzO1xuICAgIH0pO1xufTtcblxuLyoqXG4gKiBGZXRjaCBhIGxpc3Qgb2Ygb2JqZWN0cyBhdCB0aGUgZ2l2ZW4gVVJMLlxuICpcbiAqIEBwYXJhbSAge1N0cmluZ30gdXJsXG4gKiBAcGFyYW0gIHtPYmplY3R9IG9wdGlvbnNcbiAqXG4gKiBAcmV0dXJuIHtQcm9taXNlPEFycmF5Pn1cbiAqL1xucHJvdG90eXBlLmZldGNoTGlzdCA9IGZ1bmN0aW9uKHVybCwgb3B0aW9ucykge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgdmFyIGFic1VSTCA9IHRoaXMucmVzb2x2ZVVSTCh1cmwpO1xuICAgIHZhciBwcm9wcyA9IHtcbiAgICAgICAgdHlwZTogJ2xpc3QnLFxuICAgICAgICB1cmw6IGFic1VSTCxcbiAgICAgICAgb3B0aW9uczogb3B0aW9ucyB8fCB7fSxcbiAgICB9O1xuICAgIHZhciBxdWVyeSA9IHRoaXMuZmluZFF1ZXJ5KHByb3BzKTtcbiAgICBpZiAoIXF1ZXJ5KSB7XG4gICAgICAgIHF1ZXJ5ID0gcHJvcHM7XG4gICAgICAgIHF1ZXJ5LnByb21pc2UgPSB0aGlzLmZldGNoTmV4dFBhZ2UocXVlcnksIHRydWUpO1xuICAgICAgICB0aGlzLmFkZFF1ZXJ5KHF1ZXJ5KTtcbiAgICB9XG4gICAgcmV0dXJuIHF1ZXJ5LnByb21pc2UudGhlbihmdW5jdGlvbihvYmplY3RzKSB7XG4gICAgICAgIGlmIChxdWVyeS5kaXJ0eSkgIHtcbiAgICAgICAgICAgIF90aGlzLnJlZnJlc2hMaXN0KHF1ZXJ5KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gb2JqZWN0cztcbiAgICB9KTtcbn07XG5cbi8qKlxuICogUmV0dXJuIHdoYXQgaGFzIGJlZW4gZmV0Y2hlZC4gVXNlZCBieSBmZXRjaExpc3QoKS5cbiAqXG4gKiBAcGFyYW0gIHtPYmplY3R9IHF1ZXJ5XG4gKlxuICogQHJldHVybiB7UHJvbWlzZTxBcnJheT59XG4gKi9cbnByb3RvdHlwZS5mZXRjaE5vTW9yZSA9IGZ1bmN0aW9uKHF1ZXJ5KSB7XG4gICAgcmV0dXJuIHF1ZXJ5LnByb21pc2U7XG59O1xuXG4vKipcbiAqIEluaXRpYXRlIGZldGNoaW5nIG9mIHRoZSBuZXh0IHBhZ2UuIFVzZWQgYnkgZmV0Y2hMaXN0KCkuXG4gKlxuICogQHBhcmFtICB7T2JqZWN0fSBxdWVyeVxuICogQHBhcmFtICB7Qm9vbGVhbn0gaW5pdGlhbFxuICpcbiAqIEByZXR1cm4ge1Byb21pc2U8QXJyYXk+fVxuICovXG5wcm90b3R5cGUuZmV0Y2hOZXh0UGFnZSA9IGZ1bmN0aW9uKHF1ZXJ5LCBpbml0aWFsKSB7XG4gICAgaWYgKHF1ZXJ5Lm5leHRQcm9taXNlKSB7XG4gICAgICAgIHJldHVybiBxdWVyeS5uZXh0UHJvbWlzZTtcbiAgICB9XG4gICAgdmFyIF90aGlzID0gdGhpcztcbiAgICB2YXIgbmV4dFVSTCA9IChpbml0aWFsKSA/IHF1ZXJ5LnVybCA6IHF1ZXJ5Lm5leHRVUkw7XG4gICAgdmFyIG5leHRQcm9taXNlID0gdGhpcy5nZXQobmV4dFVSTCkudGhlbihmdW5jdGlvbihyZXNwb25zZSkge1xuICAgICAgICBpZiAocmVzcG9uc2UgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICAgICAgLy8gdGhlIGZ1bGwgbGlzdCBpcyByZXR1cm5lZFxuICAgICAgICAgICAgdmFyIG9iamVjdHMgPSByZXNwb25zZTtcbiAgICAgICAgICAgIF90aGlzLnVwZGF0ZVF1ZXJ5KHF1ZXJ5LCB7XG4gICAgICAgICAgICAgICAgb2JqZWN0czogb2JqZWN0cyxcbiAgICAgICAgICAgICAgICByZXRyaWV2YWxUaW1lOiBnZXRUaW1lKCksXG4gICAgICAgICAgICAgICAgbmV4dFByb21pc2U6IG51bGwsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIG9iamVjdHMubW9yZSA9IF90aGlzLmZldGNoTm9Nb3JlLmJpbmQoX3RoaXMsIHF1ZXJ5KTtcbiAgICAgICAgICAgIG9iamVjdHMudG90YWwgPSBvYmplY3RzLmxlbmd0aDtcbiAgICAgICAgICAgIHJldHVybiBvYmplY3RzO1xuICAgICAgICB9IGVsc2UgaWYgKHJlc3BvbnNlIGluc3RhbmNlb2YgT2JqZWN0KSB7XG4gICAgICAgICAgICAvLyBhcHBlbmQgcmV0cmlldmVkIG9iamVjdHMgdG8gbGlzdFxuICAgICAgICAgICAgdmFyIHRvdGFsID0gcmVzcG9uc2UuY291bnQ7XG4gICAgICAgICAgICB2YXIgb2JqZWN0cyA9IGFwcGVuZE9iamVjdHMocXVlcnkub2JqZWN0cywgcmVzcG9uc2UucmVzdWx0cyk7XG4gICAgICAgICAgICBfdGhpcy51cGRhdGVRdWVyeShxdWVyeSwge1xuICAgICAgICAgICAgICAgIG9iamVjdHM6IG9iamVjdHMsXG4gICAgICAgICAgICAgICAgcHJvbWlzZTogbmV4dFByb21pc2UsXG4gICAgICAgICAgICAgICAgcmV0cmlldmFsVGltZTogKGluaXRpYWwpID8gZ2V0VGltZSgpIDogcXVlcnkucmV0cmlldmFsVGltZSxcbiAgICAgICAgICAgICAgICBuZXh0VVJMOiByZXNwb25zZS5uZXh0LFxuICAgICAgICAgICAgICAgIG5leHRQYWdlOiAocXVlcnkubmV4dFBhZ2UgfHwgMSkgKyAxLFxuICAgICAgICAgICAgICAgIG5leHRQcm9taXNlOiBudWxsLFxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIC8vIGF0dGFjaCBmdW5jdGlvbiB0byByZXN1bHRzIHNvIGNhbGxlciBjYW4gYXNrIGZvciBtb3JlIHJlc3VsdHNcbiAgICAgICAgICAgIGlmIChxdWVyeS5uZXh0VVJMKSB7XG4gICAgICAgICAgICAgICAgb2JqZWN0cy5tb3JlID0gX3RoaXMuZmV0Y2hOZXh0UGFnZS5iaW5kKF90aGlzLCBxdWVyeSwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIG9iamVjdHMudG90YWwgPSB0b3RhbDtcblxuICAgICAgICAgICAgICAgIC8vIGlmIG1pbmltdW0gaXMgcHJvdmlkZSwgZmV0Y2ggbW9yZSBpZiBpdCdzIG5vdCBtZXRcbiAgICAgICAgICAgICAgICB2YXIgbWluaW11bSA9IGdldE1pbmltdW0ocXVlcnkub3B0aW9ucywgdG90YWwsIE5hTik7XG4gICAgICAgICAgICAgICAgaWYgKG9iamVjdHMubGVuZ3RoIDwgbWluaW11bSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBmZXRjaCB0aGUgbmV4dCBwYWdlXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfdGhpcy5mZXRjaE5leHRQYWdlKHF1ZXJ5LCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBvYmplY3RzLm1vcmUgPSBfdGhpcy5mZXRjaE5vTW9yZS5iaW5kKF90aGlzLCBxdWVyeSk7XG4gICAgICAgICAgICAgICAgb2JqZWN0cy50b3RhbCA9IG9iamVjdHMubGVuZ3RoO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBpbmZvcm0gcGFyZW50IGNvbXBvbmVudCB0aGF0IG1vcmUgZGF0YSBpcyBhdmFpbGFibGVcbiAgICAgICAgICAgIGlmICghaW5pdGlhbCkge1xuICAgICAgICAgICAgICAgIF90aGlzLnRyaWdnZXJFdmVudChuZXcgUmVsYWtzRGphbmdvRGF0YVNvdXJjZUV2ZW50KCdjaGFuZ2UnLCBfdGhpcykpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG9iamVjdHM7XG4gICAgICAgIH1cbiAgICB9KS5jYXRjaChmdW5jdGlvbihlcnIpIHtcbiAgICAgICAgaWYgKCFpbml0aWFsKSB7XG4gICAgICAgICAgICBfdGhpcy51cGRhdGVRdWVyeShxdWVyeSwgeyBuZXh0UHJvbWlzZTogbnVsbCB9KTtcbiAgICAgICAgfVxuICAgICAgICB0aHJvdyBlcnI7XG4gICAgfSk7XG4gICAgaWYgKCFpbml0aWFsKSB7XG4gICAgICAgIF90aGlzLnVwZGF0ZVF1ZXJ5KHF1ZXJ5LCB7IG5leHRQcm9taXNlIH0pO1xuICAgIH1cbiAgICByZXR1cm4gbmV4dFByb21pc2U7XG59O1xuXG4vKipcbiAqIEZldGNoIG11bHRpcGxlIEpTT04gb2JqZWN0cy4gSWYgbWluaW11bSBpcyBzcGVjaWZpZWQsIHRoZW4gaW1tZWRpYXRlbHlcbiAqIHJlc29sdmUgd2l0aCBjYWNoZWQgcmVzdWx0cyB3aGVuIHRoZXJlJ3JlIHN1ZmZpY2llbnQgbnVtYmVycyBvZiBvYmplY3RzLlxuICogQW4gb25DaGFuZ2Ugd2lsbCBiZSB0cmlnZ2VyIG9uY2UgdGhlIGZ1bGwgc2V0IGlzIHJldHJpZXZlZC5cbiAqXG4gKiBAcGFyYW0gIHtBcnJheTxTdHJpbmc+fSB1cmxzXG4gKiBAcGFyYW0gIHtPYmplY3R9IG9wdGlvbnNcbiAqXG4gKiBAcmV0dXJuIHtQcm9taXNlPEFycmF5Pn1cbiAqL1xucHJvdG90eXBlLmZldGNoTXVsdGlwbGUgPSBmdW5jdGlvbih1cmxzLCBvcHRpb25zKSB7XG4gICAgLy8gc2VlIHdoaWNoIG9uZXMgYXJlIGNhY2hlZCBhbHJlYWR5XG4gICAgdmFyIF90aGlzID0gdGhpcztcbiAgICB2YXIgY2FjaGVkID0gMDtcbiAgICB2YXIgZmV0Y2hPcHRpb25zID0ge307XG4gICAgZm9yICh2YXIgbmFtZSBpbiBvcHRpb25zKSB7XG4gICAgICAgIGlmIChuYW1lICE9PSAnbWluaW11bScpIHtcbiAgICAgICAgICAgIGZldGNoT3B0aW9uc1tuYW1lXSA9IG9wdGlvbnNbbmFtZV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgdmFyIHByb21pc2VzID0gdXJscy5tYXAoZnVuY3Rpb24odXJsKSB7XG4gICAgICAgIHZhciBhYnNVUkwgPSBfdGhpcy5yZXNvbHZlVVJMKHVybCk7XG4gICAgICAgIHZhciBwcm9wcyA9IHsgdXJsOiBhYnNVUkwsIHR5cGU6ICdvYmplY3QnIH07XG4gICAgICAgIHZhciBxdWVyeSA9IF90aGlzLmZpbmRRdWVyeShwcm9wcyk7XG4gICAgICAgIGlmICghcXVlcnkpIHtcbiAgICAgICAgICAgIHF1ZXJ5ID0gX3RoaXMuZGVyaXZlUXVlcnkocHJvcHMpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChxdWVyeSAmJiBxdWVyeS5vYmplY3QpIHtcbiAgICAgICAgICAgIGNhY2hlZCsrO1xuICAgICAgICAgICAgcmV0dXJuIHF1ZXJ5Lm9iamVjdDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBfdGhpcy5mZXRjaE9uZShhYnNVUkwsIGZldGNoT3B0aW9ucyk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIHdhaXQgZm9yIHRoZSBjb21wbGV0ZSBsaXN0IHRvIGFycml2ZVxuICAgIHZhciBjb21wbGV0ZUxpc3RQcm9taXNlO1xuICAgIGlmIChjYWNoZWQgPCB1cmxzLmxlbmd0aCkge1xuICAgICAgICBjb21wbGV0ZUxpc3RQcm9taXNlID0gUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xuICAgIH1cblxuICAgIC8vIHNlZSB3aGV0aGVyIHBhcnRpYWwgcmVzdWx0IHNldCBzaG91bGQgYmUgaW1tZWRpYXRlbHkgcmV0dXJuZWRcbiAgICB2YXIgbWluaW11bSA9IGdldE1pbmltdW0ob3B0aW9ucywgdXJscy5sZW5ndGgsIHVybHMubGVuZ3RoKTtcbiAgICBpZiAoY2FjaGVkIDwgbWluaW11bSAmJiBjb21wbGV0ZUxpc3RQcm9taXNlKSB7XG4gICAgICAgIHJldHVybiBjb21wbGV0ZUxpc3RQcm9taXNlO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChjb21wbGV0ZUxpc3RQcm9taXNlKSB7XG4gICAgICAgICAgICAvLyByZXR1cm4gcGFydGlhbCBsaXN0IHRoZW4gZmlyZSBjaGFuZ2UgZXZlbnQgd2hlbiBjb21wbGV0ZSBsaXN0IGFycml2ZXNcbiAgICAgICAgICAgIGNvbXBsZXRlTGlzdFByb21pc2UudGhlbihmdW5jdGlvbihvYmplY3RzKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMudHJpZ2dlckV2ZW50KG5ldyBSZWxha3NEamFuZ29EYXRhU291cmNlRXZlbnQoJ2NoYW5nZScsIF90aGlzKSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBwcm9taXNlcy5tYXAoZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgICAgICAgICAgICAgaWYgKG9iamVjdC50aGVuIGluc3RhbmNlb2YgRnVuY3Rpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7ICAgIC8vIGEgcHJvbWlzZS0tZG9uJ3QgcmV0dXJuIGl0XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9iamVjdDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIGxpc3QgaXMgY29tcGxldGUgYWxyZWFkeVxuICAgICAgICAgICAgcmV0dXJuIHByb21pc2VzO1xuICAgICAgICB9XG4gICAgfVxufTtcblxuLyoqXG4gKiBSZXBlcmZvcm0gYW4gcXVlcnkgZm9yIGFuIG9iamVjdCwgdHJpZ2dlcmluZyBhbiBvbkNoYW5nZSBldmVudCBpZiB0aGVcbiAqIG9iamVjdCBoYXMgY2hhbmdlZC5cbiAqXG4gKiBAcGFyYW0gIHtPYmplY3R9IHF1ZXJ5XG4gKi9cbnByb3RvdHlwZS5yZWZyZXNoT25lID0gZnVuY3Rpb24ocXVlcnkpIHtcbiAgICBpZiAocXVlcnkucmVmcmVzaGluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKCdSZWZyZXNoaW5nIG9iamVjdCcsIHF1ZXJ5KTtcbiAgICB0aGlzLnVwZGF0ZVF1ZXJ5KHF1ZXJ5LCB7IHJlZnJlc2hpbmc6IHRydWUgfSk7XG5cbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgIHZhciByZXRyaWV2YWxUaW1lID0gZ2V0VGltZSgpO1xuICAgIHRoaXMuZ2V0KHF1ZXJ5LnVybCkudGhlbihmdW5jdGlvbihyZXNwb25zZSkge1xuICAgICAgICB2YXIgb2JqZWN0ID0gcmVzcG9uc2U7XG4gICAgICAgIHZhciBjaGFuZ2VkID0gdHJ1ZTtcbiAgICAgICAgaWYgKG1hdGNoT2JqZWN0KG9iamVjdCwgcXVlcnkub2JqZWN0KSkge1xuICAgICAgICAgICAgb2JqZWN0ID0gcXVlcnkub2JqZWN0O1xuICAgICAgICAgICAgY2hhbmdlZCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIF90aGlzLnVwZGF0ZVF1ZXJ5KHF1ZXJ5LCB7XG4gICAgICAgICAgICBvYmplY3Q6IG9iamVjdCxcbiAgICAgICAgICAgIHByb21pc2U6IFByb21pc2UucmVzb2x2ZShvYmplY3QpLFxuICAgICAgICAgICAgcmV0cmlldmFsVGltZTogcmV0cmlldmFsVGltZSxcbiAgICAgICAgICAgIHJlZnJlc2hpbmc6IGZhbHNlLFxuICAgICAgICAgICAgZGlydHk6IGZhbHNlLFxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKGNoYW5nZWQpIHtcbiAgICAgICAgICAgIF90aGlzLnRyaWdnZXJFdmVudChuZXcgUmVsYWtzRGphbmdvRGF0YVNvdXJjZUV2ZW50KCdjaGFuZ2UnLCBfdGhpcykpO1xuICAgICAgICB9XG4gICAgfSkuY2F0Y2goZnVuY3Rpb24oZXJyKSB7XG4gICAgICAgIF90aGlzLnVwZGF0ZVF1ZXJ5KHF1ZXJ5LCB7IHJlZnJlc2hpbmc6IGZhbHNlIH0pO1xuICAgIH0pO1xufTtcblxuLyoqXG4gKiBSZXBlcmZvcm0gYW4gcXVlcnkgZm9yIGEgcGFnZSBvZiBvYmplY3RzLCB0cmlnZ2VyaW5nIGFuIG9uQ2hhbmdlIGV2ZW50IGlmXG4gKiB0aGUgbGlzdCBpcyBkaWZmZXJlbnQgZnJvbSB0aGUgb25lIGZldGNoZWQgcHJldmlvdXNseS5cbiAqXG4gKiBAcGFyYW0gIHtPYmplY3R9IHF1ZXJ5XG4gKi9cbnByb3RvdHlwZS5yZWZyZXNoUGFnZSA9IGZ1bmN0aW9uKHF1ZXJ5KSB7XG4gICAgaWYgKHF1ZXJ5LnJlZnJlc2hpbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zb2xlLmxvZygnUmVmcmVzaGluZyBwYWdlJywgcXVlcnkudXJsKTtcbiAgICB0aGlzLnVwZGF0ZVF1ZXJ5KHF1ZXJ5LCB7IHJlZnJlc2hpbmc6IHRydWUgfSk7XG5cbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgIHZhciByZXRyaWV2YWxUaW1lID0gZ2V0VGltZSgpO1xuICAgIHZhciBwYWdlVVJMID0gYXR0YWNoUGFnZU51bWJlcihxdWVyeS51cmwsIHF1ZXJ5LnBhZ2UpO1xuICAgIHRoaXMuZ2V0KHBhZ2VVUkwpLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcbiAgICAgICAgdmFyIG9iamVjdHMgPSByZXNwb25zZS5yZXN1bHRzO1xuICAgICAgICB2YXIgY2hhbmdlZCA9IHRydWU7XG4gICAgICAgIGlmIChyZXBsYWNlSWRlbnRpZmljYWxPYmplY3RzKG9iamVjdHMsIHF1ZXJ5Lm9iamVjdHMpKSB7XG4gICAgICAgICAgICBvYmplY3RzID0gcXVlcnkub2JqZWN0cztcbiAgICAgICAgICAgIGNoYW5nZWQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBfdGhpcy51cGRhdGVRdWVyeShxdWVyeSwge1xuICAgICAgICAgICAgb2JqZWN0czogb2JqZWN0cyxcbiAgICAgICAgICAgIHByb21pc2U6IFByb21pc2UucmVzb2x2ZShvYmplY3RzKSxcbiAgICAgICAgICAgIHJldHJpZXZhbFRpbWU6IHJldHJpZXZhbFRpbWUsXG4gICAgICAgICAgICByZWZyZXNoaW5nOiBmYWxzZSxcbiAgICAgICAgICAgIGRpcnR5OiBmYWxzZSxcbiAgICAgICAgfSlcbiAgICAgICAgaWYgKGNoYW5nZWQpIHtcbiAgICAgICAgICAgIF90aGlzLnRyaWdnZXJFdmVudChuZXcgUmVsYWtzRGphbmdvRGF0YVNvdXJjZUV2ZW50KCdjaGFuZ2UnLCBfdGhpcykpO1xuICAgICAgICB9XG4gICAgfSkuY2F0Y2goZnVuY3Rpb24oZXJyKSB7XG4gICAgICAgIF90aGlzLnVwZGF0ZVF1ZXJ5KHF1ZXJ5LCB7IHJlZnJlc2hpbmc6IGZhbHNlIH0pO1xuICAgIH0pO1xufTtcblxuLyoqXG4gKiBSZXBlcmZvcm0gYW4gcXVlcnkgZm9yIGEgbGlzdCBvZiBvYmplY3RzLCB0cmlnZ2VyaW5nIGFuIG9uQ2hhbmdlIGV2ZW50IGlmXG4gKiB0aGUgbGlzdCBpcyBkaWZmZXJlbnQgZnJvbSB0aGUgb25lIGZldGNoZWQgcHJldmlvdXNseS5cbiAqXG4gKiBAcGFyYW0gIHtPYmplY3R9IHF1ZXJ5XG4gKi9cbnByb3RvdHlwZS5yZWZyZXNoTGlzdCA9IGZ1bmN0aW9uKHF1ZXJ5KSB7XG4gICAgaWYgKHF1ZXJ5LnJlZnJlc2hpbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zb2xlLmxvZygnUmVmcmVzaGluZyBsaXN0JywgcXVlcnkudXJsKTtcbiAgICB0aGlzLnVwZGF0ZVF1ZXJ5KHF1ZXJ5LCB7IHJlZnJlc2hpbmc6IHRydWUgfSk7XG5cbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgIGlmIChxdWVyeS5uZXh0UGFnZSkge1xuICAgICAgICAvLyB1cGRhdGluZyBwYWdpbmF0ZWQgbGlzdFxuICAgICAgICAvLyB3YWl0IGZvciBhbnkgY2FsbCB0byBtb3JlKCkgdG8gZmluaXNoIGZpcnN0XG4gICAgICAgIHdhaXRGb3JOZXh0UGFnZShxdWVyeSkudGhlbihmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIC8vIHN1cHByZXNzIGZldGNoaW5nIG9mIGFkZGl0aW9uYWwgcGFnZXMgZm9yIHRoZSB0aW1lIGJlaW5nXG4gICAgICAgICAgICB2YXIgb2xkT2JqZWN0cyA9IHF1ZXJ5Lm9iamVjdHM7XG4gICAgICAgICAgICB2YXIgbW9yZVByb21pc2UsIG1vcmVSZXNvbHZlLCBtb3JlUmVqZWN0O1xuICAgICAgICAgICAgdmFyIGZldGNoTW9yZUFmdGVyd2FyZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIGlmICghbW9yZVByb21pc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgbW9yZVByb21pc2UgPSBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vcmVSZXNvbHZlID0gcmVzb2x2ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vcmVSZWplY3QgPSByZWplY3Q7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gbW9yZVByb21pc2U7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgb2xkT2JqZWN0cy5tb3JlID0gZmV0Y2hNb3JlQWZ0ZXJ3YXJkO1xuXG4gICAgICAgICAgICB2YXIgcmVmcmVzaGVkT2JqZWN0cztcbiAgICAgICAgICAgIHZhciBwYWdlUmVtYWluaW5nID0gcXVlcnkubmV4dFBhZ2UgLSAxO1xuICAgICAgICAgICAgdmFyIG5leHRVUkwgPSBxdWVyeS51cmw7XG5cbiAgICAgICAgICAgIHZhciByZWZyZXNoTmV4dFBhZ2UgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX3RoaXMuZ2V0KG5leHRVUkwpLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgcGFnZVJlbWFpbmluZy0tO1xuICAgICAgICAgICAgICAgICAgICBuZXh0VVJMID0gcmVzcG9uc2UubmV4dDtcbiAgICAgICAgICAgICAgICAgICAgcmVmcmVzaGVkT2JqZWN0cyA9IGFwcGVuZE9iamVjdHMocmVmcmVzaGVkT2JqZWN0cywgcmVzcG9uc2UucmVzdWx0cyk7XG4gICAgICAgICAgICAgICAgICAgIHZhciB0b3RhbCA9IHJlc3BvbnNlLmNvdW50O1xuICAgICAgICAgICAgICAgICAgICB2YXIgb2JqZWN0cyA9IGpvaW5PYmplY3RMaXN0cyhyZWZyZXNoZWRPYmplY3RzLCBvbGRPYmplY3RzKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNoYW5nZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBvYmplY3RzLm1vcmUgPSBmZXRjaE1vcmVBZnRlcndhcmQ7XG4gICAgICAgICAgICAgICAgICAgIG9iamVjdHMudG90YWwgPSB0b3RhbDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlcGxhY2VJZGVudGlmaWNhbE9iamVjdHMob2JqZWN0cywgcXVlcnkub2JqZWN0cykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9iamVjdHMgPSBxdWVyeS5vYmplY3RzO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2hhbmdlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8vIHNldCBxdWVyeS5uZXh0VVJMIHRvIHRoZSBVUkwgZ2l2ZW4gYnkgdGhlIHNlcnZlclxuICAgICAgICAgICAgICAgICAgICAvLyBpbiB0aGUgZXZlbnQgdGhhdCBuZXcgcGFnZXMgaGF2ZSBiZWNvbWUgYXZhaWxhYmxlXG4gICAgICAgICAgICAgICAgICAgIF90aGlzLnVwZGF0ZVF1ZXJ5KHF1ZXJ5LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvYmplY3RzOiBvYmplY3RzLFxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvbWlzZTogUHJvbWlzZS5yZXNvbHZlKG9iamVjdHMpLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmV4dFVSTDogKHBhZ2VSZW1haW5pbmcgPT09IDApID8gbmV4dFVSTCA6IHF1ZXJ5Lm5leHRVUkwsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBpZiAoY2hhbmdlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMudHJpZ2dlckV2ZW50KG5ldyBSZWxha3NEamFuZ29EYXRhU291cmNlRXZlbnQoJ2NoYW5nZScsIF90aGlzKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy8ga2VlcCBnb2luZyB1bnRpbCBhbGwgcGFnZXMgaGF2ZSBiZWVuIHVwZGF0ZWRcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBhZ2VSZW1haW5pbmcgPiAwICYmIG5leHRVUkwgJiYgcXVlcnkubmV4dFVSTCAhPT0gbmV4dFVSTCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlZnJlc2hOZXh0UGFnZSgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICB2YXIgcmV0cmlldmFsVGltZSA9IGdldFRpbWUoKTtcbiAgICAgICAgICAgIHJlZnJlc2hOZXh0UGFnZSgpLnRoZW4oZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgLy8gd2UncmUgZG9uZS0tcmVlbmFibGUgZmV0Y2hpbmcgb2YgYWRkaXRpb25hbCBwYWdlc1xuICAgICAgICAgICAgICAgIGlmIChxdWVyeS5uZXh0VVJMKSB7XG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5Lm9iamVjdHMubW9yZSA9IF90aGlzLmZldGNoTmV4dFBhZ2UuYmluZChfdGhpcywgcXVlcnksIGZhbHNlKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBxdWVyeS5vYmplY3RzLm1vcmUgPSBfdGhpcy5mZXRjaE5vTW9yZS5iaW5kKF90aGlzLCBxdWVyeSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIHRyaWdnZXIgaXQgaWYgbW9yZSgpIGhhZCBiZWVuIGNhbGxlZFxuICAgICAgICAgICAgICAgIGlmIChtb3JlUHJvbWlzZSkge1xuICAgICAgICAgICAgICAgICAgICBxdWVyeS5vYmplY3RzLm1vcmUoKS50aGVuKG1vcmVSZXNvbHZlLCBtb3JlUmVqZWN0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgX3RoaXMudXBkYXRlUXVlcnkocXVlcnksIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0cmlldmFsVGltZTogcmV0cmlldmFsVGltZSxcbiAgICAgICAgICAgICAgICAgICAgcmVmcmVzaGluZzogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIGRpcnR5OiBmYWxzZSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uKGVycikge1xuICAgICAgICAgICAgICAgIF90aGlzLnVwZGF0ZVF1ZXJ5KHF1ZXJ5LCB7IHJlZnJlc2hpbmc6IGZhbHNlIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIHVwZGF0aW5nIHVuLXBhZ2luYXRlZCBsaXN0XG4gICAgICAgIHZhciByZXRyaWV2YWxUaW1lID0gZ2V0VGltZSgpO1xuICAgICAgICB0aGlzLmdldChxdWVyeS51cmwpLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcbiAgICAgICAgICAgIHZhciBvYmplY3RzID0gcmVzcG9uc2U7XG4gICAgICAgICAgICB2YXIgY2hhbmdlZCA9IHRydWU7XG4gICAgICAgICAgICBpZiAocmVwbGFjZUlkZW50aWZpY2FsT2JqZWN0cyhvYmplY3RzLCBxdWVyeS5vYmplY3RzKSkge1xuICAgICAgICAgICAgICAgIG9iamVjdHMgPSBxdWVyeS5vYmplY3RzO1xuICAgICAgICAgICAgICAgIGNoYW5nZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG9iamVjdHMubW9yZSA9IF90aGlzLmZldGNoTm9Nb3JlLmJpbmQodGhpcywgcXVlcnkpO1xuICAgICAgICAgICAgb2JqZWN0cy50b3RhbCA9IG9iamVjdHMubGVuZ3RoO1xuICAgICAgICAgICAgX3RoaXMudXBkYXRlUXVlcnkocXVlcnksIHtcbiAgICAgICAgICAgICAgICBvYmplY3RzOiBvYmplY3RzLFxuICAgICAgICAgICAgICAgIHByb21pc2U6IFByb21pc2UucmVzb2x2ZShvYmplY3RzKSxcbiAgICAgICAgICAgICAgICByZXRyaWV2YWxUaW1lOiByZXRyaWV2YWxUaW1lLFxuICAgICAgICAgICAgICAgIHJlZnJlc2hpbmc6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGRpcnR5OiBmYWxzZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKGNoYW5nZWQpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy50cmlnZ2VyRXZlbnQobmV3IFJlbGFrc0RqYW5nb0RhdGFTb3VyY2VFdmVudCgnY2hhbmdlJywgX3RoaXMpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkuY2F0Y2goZnVuY3Rpb24oZXJyKSB7XG4gICAgICAgICAgICBfdGhpcy51cGRhdGVRdWVyeShxdWVyeSwgeyByZWZyZXNoaW5nOiBmYWxzZSB9KTtcbiAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgfSk7XG4gICAgfVxufTtcblxuLyoqXG4gKiBJbnNlcnQgYW4gb2JqZWN0IGludG8gcmVtb3RlIGRhdGFiYXNlXG4gKlxuICogQHBhcmFtICB7U3RyaW5nfSBmb2xkZXJVUkxcbiAqIEBwYXJhbSAge09iamVjdH0gb2JqZWN0XG4gKlxuICogQHJldHVybiB7UHJvbWlzZTxPYmplY3Q+fVxuICovXG5wcm90b3R5cGUuaW5zZXJ0T25lID0gZnVuY3Rpb24oZm9sZGVyVVJMLCBvYmplY3QpIHtcbiAgICByZXR1cm4gdGhpcy5pbnNlcnRNdWx0aXBsZShmb2xkZXJVUkwsIFsgb2JqZWN0IF0pLnRoZW4oKGluc2VydGVkT2JqZWN0cykgPT4ge1xuICAgICAgICByZXR1cm4gaW5zZXJ0ZWRPYmplY3RzWzBdO1xuICAgIH0pO1xufTtcblxuLyoqXG4gKiBJbnNlcnQgbXVsdGlwbGUgb2JqZWN0cyBpbnRvIHJlbW90ZSBkYXRhYmFzZVxuICpcbiAqIEBwYXJhbSAge1N0cmluZ30gZm9sZGVyVVJMXG4gKiBAcGFyYW0gIHtBcnJheTxPYmplY3Q+fSBvYmplY3RzXG4gKlxuICogQHJldHVybiB7UHJvbWlzZTxBcnJheT59XG4gKi9cbnByb3RvdHlwZS5pbnNlcnRNdWx0aXBsZSA9IGZ1bmN0aW9uKGZvbGRlclVSTCwgb2JqZWN0cykge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgdmFyIGZvbGRlckFic1VSTCA9IHRoaXMucmVzb2x2ZVVSTChmb2xkZXJVUkwpO1xuICAgIHZhciBwcm9taXNlcyA9IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgb2JqZWN0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBwcm9taXNlcy5wdXNoKHRoaXMucG9zdChmb2xkZXJBYnNVUkwsIG9iamVjdHNbaV0pKTtcbiAgICB9XG4gICAgcmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VzKS50aGVuKGZ1bmN0aW9uKGluc2VydGVkT2JqZWN0cykge1xuICAgICAgICAvLyBzb3J0IHRoZSBuZXdseSBjcmVhdGVkIG9iamVjdHNcbiAgICAgICAgdmFyIGNoYW5nZWQgPSBmYWxzZTtcbiAgICAgICAgX3RoaXMucXVlcmllcy5mb3JFYWNoKGZ1bmN0aW9uKHF1ZXJ5KSB7XG4gICAgICAgICAgICBpbnNlcnRlZE9iamVjdHMuc29tZShmdW5jdGlvbihpbnNlcnRlZE9iamVjdCkge1xuICAgICAgICAgICAgICAgIGlmIChxdWVyeS50eXBlID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgICAgICAvLyBvYmplY3QgcXVlcmllcyBhcmVuJ3QgYWZmZWN0ZWQgYnkgaW5zZXJ0XG4gICAgICAgICAgICAgICAgICAgIC8vIG5vIHBvaW50IGluIGxvb2tpbmcgYXQgb3RoZXIgb2JqZWN0c1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHF1ZXJ5LnR5cGUgPT09ICdwYWdlJyB8fCBxdWVyeS50eXBlID09PSAnbGlzdCcpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG9iamVjdEZvbGRlclVSTCA9IGdldE9iamVjdEZvbGRlclVSTChmb2xkZXJBYnNVUkwsIGluc2VydGVkT2JqZWN0KTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFtYXRjaFVSTChxdWVyeS51cmwsIG9iamVjdEZvbGRlclVSTCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyBpdCBpc24ndCBwb3NzaWJsZSB0byBpbnNlcnQgb2JqZWN0cyBpbnRvIG11bHRpcGxlIGZvbGRlcnNcbiAgICAgICAgICAgICAgICAgICAgLy8gc2ltdWx0YW5lb3VzbHk7IGNvZGUgaXMgaW1wbGVtZW50ZWQgYXMgc3VjaCBvbmx5IGZvclxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zaXN0ZW5jeSBzYWtlXG4gICAgICAgICAgICAgICAgICAgIHZhciBpbkZvbGRlciA9IHJlbW92ZU9iamVjdHNPdXRzaWRlRm9sZGVyKGluc2VydGVkT2JqZWN0cywgb2JqZWN0Rm9sZGVyVVJMKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGRlZmF1bHRCZWhhdmlvciA9ICdyZWZyZXNoJztcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJ1bkhvb2socXVlcnksICdhZnRlckluc2VydCcsIGluRm9sZGVyLCBkZWZhdWx0QmVoYXZpb3IpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2VkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9KTtcbiAgICAgICAgaWYgKGNoYW5nZWQpIHtcbiAgICAgICAgICAgIF90aGlzLnRyaWdnZXJFdmVudChuZXcgUmVsYWtzRGphbmdvRGF0YVNvdXJjZUV2ZW50KCdjaGFuZ2UnLCBfdGhpcykpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBpbnNlcnRlZE9iamVjdHM7XG4gICAgfSk7XG59O1xuXG4vKipcbiAqIFVwZGF0ZSBhbiBvYmplY3RcbiAqXG4gKiBAcGFyYW0gIHtTdHJpbmd9IGZvbGRlclVSTFxuICogQHBhcmFtICB7T2JqZWN0fSBvYmplY3RcbiAqXG4gKiBAcmV0dXJuIHtQcm9taXNlPE9iamVjdD59XG4gKi9cbnByb3RvdHlwZS51cGRhdGVPbmUgPSBmdW5jdGlvbihmb2xkZXJVUkwsIG9iamVjdCkge1xuICAgIC8vIGFsbG93IGZvbGRlclVSTCB0byBiZSBvbWl0dGVkXG4gICAgaWYgKG9iamVjdCA9PT0gdW5kZWZpbmVkICYmIGZvbGRlclVSTCBpbnN0YW5jZW9mIE9iamVjdCkge1xuICAgICAgICBvYmplY3QgPSBmb2xkZXJVUkw7XG4gICAgICAgIGZvbGRlclVSTCA9IG51bGw7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLnVwZGF0ZU11bHRpcGxlKGZvbGRlclVSTCwgWyBvYmplY3QgXSkudGhlbigocmVzdWx0cykgPT4ge1xuICAgICAgICByZXR1cm4gcmVzdWx0c1swXTtcbiAgICB9KTtcbn07XG5cbi8qKlxuICogU2F2ZSBtdWx0aXBsZSBvYmplY3RzXG4gKlxuICogQHBhcmFtICB7U3RyaW5nfSBmb2xkZXJVUkxcbiAqIEBwYXJhbSAge0FycmF5PE9iamVjdD59IG9iamVjdHNcbiAqXG4gKiBAcmV0dXJuIHtQcm9taXNlPEFycmF5Pn1cbiAqL1xucHJvdG90eXBlLnVwZGF0ZU11bHRpcGxlID0gZnVuY3Rpb24oZm9sZGVyVVJMLCBvYmplY3RzKSB7XG4gICAgLy8gYWxsb3cgZm9sZGVyVVJMIHRvIGJlIG9taXR0ZWRcbiAgICBpZiAob2JqZWN0cyA9PT0gdW5kZWZpbmVkICYmIGZvbGRlclVSTCBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgIG9iamVjdHMgPSBmb2xkZXJVUkw7XG4gICAgICAgIGZvbGRlclVSTCA9IG51bGw7XG4gICAgfVxuICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgdmFyIGZvbGRlckFic1VSTCA9IHRoaXMucmVzb2x2ZVVSTChmb2xkZXJVUkwpO1xuICAgIHZhciBwcm9taXNlcyA9IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgb2JqZWN0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgb2JqZWN0ID0gb2JqZWN0c1tpXTtcbiAgICAgICAgdmFyIGFic1VSTCA9IGdldE9iamVjdFVSTChmb2xkZXJBYnNVUkwsIG9iamVjdCk7XG4gICAgICAgIHByb21pc2VzLnB1c2goYWJzVVJMID8gdGhpcy5wdXQoYWJzVVJMLCBvYmplY3QpIDogbnVsbCk7XG4gICAgfVxuICAgIHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlcykudGhlbihmdW5jdGlvbih1cGRhdGVkT2JqZWN0cykge1xuICAgICAgICB2YXIgY2hhbmdlZCA9IGZhbHNlO1xuICAgICAgICBfdGhpcy5xdWVyaWVzLmZvckVhY2goZnVuY3Rpb24ocXVlcnkpIHtcbiAgICAgICAgICAgIHVwZGF0ZWRPYmplY3RzLnNvbWUoZnVuY3Rpb24odXBkYXRlZE9iamVjdCkge1xuICAgICAgICAgICAgICAgIGlmIChxdWVyeS50eXBlID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgb2JqZWN0VVJMID0gZ2V0T2JqZWN0VVJMKGZvbGRlckFic1VSTCwgdXBkYXRlZE9iamVjdCk7XG4gICAgICAgICAgICAgICAgICAgIGlmICghbWF0Y2hVUkwocXVlcnkudXJsLCBvYmplY3RVUkwpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdmFyIGRlZmF1bHRCZWhhdmlvciA9ICdyZXBsYWNlJztcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJ1bkhvb2socXVlcnksICdhZnRlclVwZGF0ZScsIHVwZGF0ZWRPYmplY3QsIGRlZmF1bHRCZWhhdmlvcikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocXVlcnkudHlwZSA9PT0gJ3BhZ2UnIHx8IHF1ZXJ5LnR5cGUgPT09ICdsaXN0Jykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgb2JqZWN0Rm9sZGVyVVJMID0gZ2V0T2JqZWN0Rm9sZGVyVVJMKGZvbGRlckFic1VSTCwgdXBkYXRlZE9iamVjdCk7XG4gICAgICAgICAgICAgICAgICAgIGlmICghbWF0Y2hVUkwocXVlcnkudXJsLCBvYmplY3RGb2xkZXJVUkwpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy8gZmlsdGVyIG91dCBvYmplY3RzIHRoYXQgYXJlbid0IGluIHRoZSBzYW1lIGZvbGRlclxuICAgICAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgICAgICAvLyBvbmx5IHJlbGV2YW50IHdoZW4gaHlwZXJsaW5rLWtleXMgYXJlIHVzZWQgYW5kXG4gICAgICAgICAgICAgICAgICAgIC8vIG9iamVjdHMgaW4gZGlmZmVyZW50IGZvbGRlcnMgYXJlIHVwZGF0ZWQgYXRcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhlIHNhbWUgdGltZSAoZm9sZGVyVVJMIGhhcyB0byBiZSBudWxsKVxuICAgICAgICAgICAgICAgICAgICB2YXIgaW5Gb2xkZXIgPSByZW1vdmVPYmplY3RzT3V0c2lkZUZvbGRlcih1cGRhdGVkT2JqZWN0cywgb2JqZWN0Rm9sZGVyVVJMKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGRlZmF1bHRCZWhhdmlvciA9ICdyZWZyZXNoJztcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJ1bkhvb2socXVlcnksICdhZnRlclVwZGF0ZScsIGluRm9sZGVyLCBkZWZhdWx0QmVoYXZpb3IpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2VkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9KTtcbiAgICAgICAgaWYgKGNoYW5nZWQpIHtcbiAgICAgICAgICAgIF90aGlzLnRyaWdnZXJFdmVudChuZXcgUmVsYWtzRGphbmdvRGF0YVNvdXJjZUV2ZW50KCdjaGFuZ2UnLCBfdGhpcykpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB1cGRhdGVkT2JqZWN0cztcbiAgICB9KTtcbn07XG5cbnByb3RvdHlwZS5kZWxldGVPbmUgPSBmdW5jdGlvbih1cmwsIG9iamVjdCkge1xuICAgIHJldHVybiB0aGlzLmRlbGV0ZU11bHRpcGxlKHVybCwgWyBvYmplY3QgXSkudGhlbigocmVzdWx0cykgPT4ge1xuICAgICAgICByZXR1cm4gcmVzdWx0c1swXTtcbiAgICB9KTtcbn07XG5cbnByb3RvdHlwZS5kZWxldGVNdWx0aXBsZSA9IGZ1bmN0aW9uKGZvbGRlclVSTCwgb2JqZWN0cykge1xuICAgIC8vIGFsbG93IGZvbGRlclVSTCB0byBiZSBvbWl0dGVkXG4gICAgaWYgKG9iamVjdHMgPT09IHVuZGVmaW5lZCAmJiBmb2xkZXJVUkwgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICBvYmplY3RzID0gZm9sZGVyVVJMO1xuICAgICAgICBmb2xkZXJVUkwgPSBudWxsO1xuICAgIH1cbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgIHZhciBmb2xkZXJBYnNVUkwgPSB0aGlzLnJlc29sdmVVUkwoZm9sZGVyVVJMKTtcbiAgICB2YXIgcHJvbWlzZXMgPSBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG9iamVjdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIG9iamVjdCA9IG9iamVjdHNbaV07XG4gICAgICAgIHZhciBhYnNVUkwgPSBnZXRPYmplY3RVUkwoZm9sZGVyQWJzVVJMLCBvYmplY3QpO1xuICAgICAgICB2YXIgcHJvbWlzZSA9IG51bGw7XG4gICAgICAgIGlmIChhYnNVUkwpIHtcbiAgICAgICAgICAgIHByb21pc2UgPSB0aGlzLmRlbGV0ZShhYnNVUkwsIG9iamVjdCkudGhlbihmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gb2JqZWN0O1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcHJvbWlzZXMucHVzaChwcm9taXNlKTtcbiAgICB9XG4gICAgcmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VzKS50aGVuKGZ1bmN0aW9uKGRlbGV0ZWRPYmplY3RzKSB7XG4gICAgICAgIHZhciBjaGFuZ2VkID0gZmFsc2U7XG4gICAgICAgIHZhciBxdWVyaWVzID0gX3RoaXMucXVlcmllcy5maWx0ZXIoZnVuY3Rpb24ocXVlcnkpIHtcbiAgICAgICAgICAgIHZhciBrZWVwID0gdHJ1ZTtcbiAgICAgICAgICAgIGRlbGV0ZWRPYmplY3RzLnNvbWUoZnVuY3Rpb24oZGVsZXRlZE9iamVjdCkge1xuICAgICAgICAgICAgICAgIGlmIChxdWVyeS50eXBlID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgb2JqZWN0VVJMID0gZ2V0T2JqZWN0VVJMKGZvbGRlckFic1VSTCwgZGVsZXRlZE9iamVjdCk7XG4gICAgICAgICAgICAgICAgICAgIGlmICghbWF0Y2hVUkwocXVlcnkudXJsLCBvYmplY3RVUkwpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdmFyIGRlZmF1bHRCZWhhdmlvciA9ICdyZW1vdmUnO1xuICAgICAgICAgICAgICAgICAgICBpZiAocnVuSG9vayhxdWVyeSwgJ2FmdGVyRGVsZXRlJywgZGVsZXRlZE9iamVjdCwgZGVmYXVsdEJlaGF2aW9yKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHF1ZXJ5LmRpcnR5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2VlcCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2hhbmdlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChxdWVyeS50eXBlID09PSAncGFnZScgfHwgcXVlcnkudHlwZSA9PT0gJ2xpc3QnKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBvYmplY3RGb2xkZXJVUkwgPSBnZXRPYmplY3RGb2xkZXJVUkwoZm9sZGVyQWJzVVJMLCBkZWxldGVkT2JqZWN0KTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFtYXRjaFVSTChxdWVyeS51cmwsIG9iamVjdEZvbGRlclVSTCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyBzZWUgY29tbWVudCBpbiB1cGRhdGVNdWx0aXBsZSgpXG4gICAgICAgICAgICAgICAgICAgIHZhciBpbkZvbGRlciA9IHJlbW92ZU9iamVjdHNPdXRzaWRlRm9sZGVyKGRlbGV0ZWRPYmplY3RzLCBvYmplY3RGb2xkZXJVUkwpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgZGVmYXVsdEJlaGF2aW9yID0gKHF1ZXJ5LnR5cGUgPT09ICdsaXN0JykgPyAncmVtb3ZlJyA6ICdyZWZyZXNoJztcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJ1bkhvb2socXVlcnksICdhZnRlckRlbGV0ZScsIGluRm9sZGVyLCBkZWZhdWx0QmVoYXZpb3IpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2VkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBrZWVwO1xuICAgICAgICB9KTtcbiAgICAgICAgaWYgKGNoYW5nZWQpIHtcbiAgICAgICAgICAgIF90aGlzLnF1ZXJpZXMgPSBxdWVyaWVzO1xuICAgICAgICAgICAgX3RoaXMudHJpZ2dlckV2ZW50KG5ldyBSZWxha3NEamFuZ29EYXRhU291cmNlRXZlbnQoJ2NoYW5nZScsIF90aGlzKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGRlbGV0ZWRPYmplY3RzO1xuICAgIH0pO1xufTtcblxuLyoqXG4gKiBGaW5kIGFuIGV4aXN0aW5nIHF1ZXJ5XG4gKlxuICogQHBhcmFtICB7T2JqZWN0fSBwcm9wc1xuICpcbiAqIEByZXR1cm4ge09iamVjdHx1bmRlZmluZWR9XG4gKi9cbnByb3RvdHlwZS5maW5kUXVlcnkgPSBmdW5jdGlvbihwcm9wcykge1xuICAgIHJldHVybiB0aGlzLnF1ZXJpZXMuZmluZChmdW5jdGlvbihxdWVyeSkge1xuICAgICAgICByZXR1cm4gbWF0Y2hRdWVyeShxdWVyeSwgcHJvcHMpO1xuICAgIH0pO1xufTtcblxuLyoqXG4gKiBEZXJpdmUgYSBxdWVyeSBmb3IgYW4gaXRlbSBmcm9tIGFuIGV4aXN0aW5nIGRpcmVjdG9yeSBxdWVyeVxuICpcbiAqIEBwYXJhbSAge09iamVjdH0gcHJvcHNcbiAqXG4gKiBAcmV0dXJuIHtPYmplY3R8dW5kZWZpbmVkfVxuICovXG5wcm90b3R5cGUuZGVyaXZlUXVlcnkgPSBmdW5jdGlvbihwcm9wcykge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgdmFyIG9iamVjdDtcbiAgICB2YXIgZm9sZGVyVVJMID0gZ2V0Rm9sZGVyVVJMKHByb3BzLnVybCk7XG4gICAgdGhpcy5xdWVyaWVzLnNvbWUoZnVuY3Rpb24ocXVlcnkpIHtcbiAgICAgICAgaWYgKHF1ZXJ5LnR5cGUgPT09ICdwYWdlJyB8fCBxdWVyeS50eXBlID09PSAnbGlzdCcpIHtcbiAgICAgICAgICAgIHZhciBhYmJyZXZpYXRlZCA9IGZhbHNlO1xuICAgICAgICAgICAgaWYgKF90aGlzLm9wdGlvbnMuYWJicmV2aWF0ZWRGb2xkZXJDb250ZW50cykge1xuICAgICAgICAgICAgICAgIGFiYnJldmlhdGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocXVlcnkub3B0aW9ucy5hYmJyZXZpYXRlZCkge1xuICAgICAgICAgICAgICAgIGFiYnJldmlhdGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghYWJicmV2aWF0ZWQpIHtcbiAgICAgICAgICAgICAgICBpZiAobWF0Y2hVUkwocXVlcnkudXJsLCBmb2xkZXJVUkwpKSB7XG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5Lm9iamVjdHMuc29tZShmdW5jdGlvbihpdGVtKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXRlbS51cmwgPT09IHByb3BzLnVybCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9iamVjdCA9IGl0ZW07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gISFvYmplY3Q7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG4gICAgaWYgKG9iamVjdCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdHlwZTogJ29iamVjdCcsXG4gICAgICAgICAgICB1cmw6IHByb3BzLnVybCxcbiAgICAgICAgICAgIHByb21pc2U6IFByb21pc2UucmVzb2x2ZShvYmplY3QpLFxuICAgICAgICAgICAgb2JqZWN0OiBvYmplY3RcbiAgICAgICAgfTtcbiAgICB9XG59XG5cbi8qKlxuICogQWRkIGEgcXVlcnlcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gcXVlcnlcbiAqL1xucHJvdG90eXBlLmFkZFF1ZXJ5ID0gZnVuY3Rpb24ocXVlcnkpIHtcbiAgICB0aGlzLnF1ZXJpZXMgPSBbIHF1ZXJ5IF0uY29uY2F0KHRoaXMucXVlcmllcyk7XG59O1xuXG4vKipcbiAqIFVwZGF0ZSBhIHF1ZXJ5XG4gKlxuICogQHBhcmFtICB7T2JqZWN0fSBxdWVyeVxuICogQHBhcmFtICB7T2JqZWN0fSBwcm9wc1xuICovXG5wcm90b3R5cGUudXBkYXRlUXVlcnkgPSBmdW5jdGlvbihxdWVyeSwgcHJvcHMpIHtcbiAgICBmb3IgKHZhciBuYW1lIGluIHByb3BzKSB7XG4gICAgICAgIHF1ZXJ5W25hbWVdID0gcHJvcHNbbmFtZV07XG4gICAgfVxufTtcblxuLyoqXG4gKiBSZXR1cm4gYSBwcm9taXNlIHRoYXQgd2lsbCBiZSByZXNvbHZlZCB3aGVuIGF1dGhlbnRpY2F0aW9uIG9jY3VycyBvclxuICogYXR0ZW1wdCBpcyBjYW5jZWxlZFxuICpcbiAqIEBwYXJhbSAge1N0cmluZ30gYWJzVVJMXG4gKlxuICogQHJldHVybiB7UHJvbWlzZTxCb29sZWFuPn1cbiAqL1xucHJvdG90eXBlLnJlcXVlc3RBdXRoZW50aWNhdGlvbiA9IGZ1bmN0aW9uKGFic1VSTCkge1xuICAgIHZhciBwcm9taXNlO1xuICAgIHRoaXMuYXV0aGVudGljYXRpb25zLnNvbWUoZnVuY3Rpb24oYXV0aGVudGljYXRpb24pIHtcbiAgICAgICAgaWYgKGF1dGhlbnRpY2F0aW9uLnVybCA9PT0gYWJzVVJMKSB7XG4gICAgICAgICAgICBwcm9taXNlID0gYXV0aGVudGljYXRpb24ucHJvbWlzZTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgaWYgKCFwcm9taXNlKSB7XG4gICAgICAgIC8vIGFkZCB0aGUgcXVlcnkgcHJpb3IgdG8gdHJpZ2dlcmluZyB0aGUgZXZlbnQsIHNpbmNlIHRoZSBoYW5kbGVyXG4gICAgICAgIC8vIG1heSBjYWxsIGF1dGhvcml6ZSgpXG4gICAgICAgIHZhciByZXNvbHZlO1xuICAgICAgICB2YXIgYXV0aGVudGljYXRpb24gPSB7XG4gICAgICAgICAgICB1cmw6IGFic1VSTCxcbiAgICAgICAgICAgIHByb21pc2U6IG5ldyBQcm9taXNlKGZ1bmN0aW9uKHIpIHsgcmVzb2x2ZSA9IHIgfSksXG4gICAgICAgICAgICByZXNvbHZlOiByZXNvbHZlLFxuICAgICAgICB9O1xuICAgICAgICB0aGlzLmF1dGhlbnRpY2F0aW9ucy5wdXNoKGF1dGhlbnRpY2F0aW9uKTtcblxuICAgICAgICB2YXIgYXV0aGVudGljYXRpb25FdmVudCA9IG5ldyBSZWxha3NEamFuZ29EYXRhU291cmNlRXZlbnQoJ2F1dGhlbnRpY2F0aW9uJywgdGhpcywge1xuICAgICAgICAgICAgdXJsOiBhYnNVUkxcbiAgICAgICAgfSk7XG4gICAgICAgIHZhciBldmVudEhhbmRsZWQgPSB0aGlzLnRyaWdnZXJFdmVudChhdXRoZW50aWNhdGlvbkV2ZW50KTtcbiAgICAgICAgcHJvbWlzZSA9IGF1dGhlbnRpY2F0aW9uRXZlbnQud2FpdEZvckRlY2lzaW9uKCkudGhlbihmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGlmIChldmVudEhhbmRsZWQgJiYgIWF1dGhlbnRpY2F0aW9uRXZlbnQuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgICAgICAgICAgIC8vIHdhaXQgZm9yIGF1dGhlbnRpY2F0ZSgpIHRvIGdldCBjYWxsZWRcbiAgICAgICAgICAgICAgICAvLyBpZiBhdXRob3JpemUoKSB3YXMgY2FsbGVkLCB0aGUgcHJvbWlzZSB3b3VsZCBiZSByZXNvbHZlZCBhbHJlYWR5XG4gICAgICAgICAgICAgICAgcmV0dXJuIGF1dGhlbnRpY2F0aW9uLnByb21pc2U7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIHRha2UgaXQgYmFjayBvdXRcbiAgICAgICAgICAgICAgICB2YXIgaW5kZXggPSB0aGlzLmF1dGhlbnRpY2F0aW9ucy5pbmRleE9mKGF1dGhlbnRpY2F0aW9uKTtcbiAgICAgICAgICAgICAgICB0aGlzLmF1dGhlbnRpY2F0aW9ucy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBwcm9taXNlO1xufTtcblxuLyoqXG4gKiBQb3N0IHVzZXIgY3JlZGVudGlhbHMgdG8gZ2l2ZW4gVVJMIGluIGV4cGVjdGFudCBvZiBhIGF1dGhvcml6YXRpb24gdG9rZW5cbiAqXG4gKiBAcGFyYW0gIHtTdHJpbmd9IGxvZ2luVVJMXG4gKiBAcGFyYW0gIHtPYmplY3R9IGNyZWRlbnRpYWxzXG4gKiBAcGFyYW0gIHtBcnJheTxTdHJpbmc+fSBhbGxvd1VSTHNcbiAqXG4gKiBAcmV0dXJuIHtQcm9taXNlPEJvb2xlYW4+fVxuICovXG5wcm90b3R5cGUuYXV0aGVudGljYXRlID0gZnVuY3Rpb24obG9naW5VUkwsIGNyZWRlbnRpYWxzLCBhbGxvd1VSTHMpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgIHZhciBsb2dpbkFic1VSTCA9IHRoaXMucmVzb2x2ZVVSTChsb2dpblVSTCk7XG4gICAgcmV0dXJuIHRoaXMucG9zdChsb2dpbkFic1VSTCwgY3JlZGVudGlhbHMpLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcbiAgICAgICAgdmFyIHRva2VuID0gKHJlc3BvbnNlKSA/IHJlc3BvbnNlLmtleSA6IG51bGw7XG4gICAgICAgIGlmICghdG9rZW4pIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTm8gYXV0aG9yaXphdGlvbiB0b2tlbicpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBfdGhpcy5hdXRob3JpemUobG9naW5VUkwsIHRva2VuLCBhbGxvd1VSTHMpO1xuICAgIH0pO1xufTtcblxuLyoqXG4gKiBBY2NlcHQgYW4gYXV0aG9yaXphdGlvbiB0b2tlbiwgcmVzb2x2aW5nIGFueSBwZW5kaW5nIGF1dGhlbnRpY2F0aW9uIHByb21pc2VzXG4gKlxuICogQHBhcmFtICB7U3RyaW5nfSBsb2dpblVSTFxuICogQHBhcmFtICB7U3RyaW5nfSB0b2tlblxuICogQHBhcmFtICB7QXJyYXk8U3RyaW5nPn0gYWxsb3dVUkxzXG4gKlxuICogQHJldHVybiB7UHJvbWlzZTxCb29sZWFuPn1cbiAqL1xucHJvdG90eXBlLmF1dGhvcml6ZSA9IGZ1bmN0aW9uKGxvZ2luVVJMLCB0b2tlbiwgYWxsb3dVUkxzKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcbiAgICB2YXIgbG9naW5BYnNVUkwgPSB0aGlzLnJlc29sdmVVUkwobG9naW5VUkwpO1xuICAgIHZhciBhbGxvd0Fic1VSTHMgPSB0aGlzLnJlc29sdmVVUkxzKGFsbG93VVJMcyB8fCBbICcvJyBdKTtcbiAgICB2YXIgYXV0aG9yaXphdGlvbkV2ZW50ID0gbmV3IFJlbGFrc0RqYW5nb0RhdGFTb3VyY2VFdmVudCgnYXV0aG9yaXphdGlvbicsIHRoaXMsIHtcbiAgICAgICAgdXJsOiBsb2dpbkFic1VSTCxcbiAgICAgICAgdG9rZW46IHRva2VuLFxuICAgIH0pO1xuICAgIHRoaXMudHJpZ2dlckV2ZW50KGF1dGhvcml6YXRpb25FdmVudCk7XG4gICAgcmV0dXJuIGF1dGhvcml6YXRpb25FdmVudC53YWl0Rm9yRGVjaXNpb24oKS50aGVuKGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgYWNjZXB0YWJsZSA9ICFhdXRob3JpemF0aW9uRXZlbnQuZGVmYXVsdFByZXZlbnRlZDtcbiAgICAgICAgaWYgKGFjY2VwdGFibGUpIHtcbiAgICAgICAgICAgIC8vIGFkZCBhdXRob3JpemF0aW9uXG4gICAgICAgICAgICB2YXIgYXV0aG9yaXphdGlvbiA9IHtcbiAgICAgICAgICAgICAgICB1cmw6IGxvZ2luQWJzVVJMLFxuICAgICAgICAgICAgICAgIHRva2VuOiB0b2tlbixcbiAgICAgICAgICAgICAgICBhbGxvdzogYWxsb3dBYnNVUkxzLFxuICAgICAgICAgICAgICAgIGRlbnk6IFtdXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgLy8gcmVtb3ZlIHByZXZpb3VzIGF1dGhvcml6YXRpb25cbiAgICAgICAgICAgIF90aGlzLmF1dGhvcml6YXRpb25zID0gX3RoaXMuYXV0aG9yaXphdGlvbnMuZmlsdGVyKGZ1bmN0aW9uKGF1dGhvcml6YXRpb24pIHtcbiAgICAgICAgICAgICAgICBhdXRob3JpemF0aW9uLmFsbG93ID0gYXV0aG9yaXphdGlvbi5hbGxvdy5maWx0ZXIoZnVuY3Rpb24odXJsKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoYWxsb3dBYnNVUkxzLmluZGV4T2YodXJsKSA9PT0gLTEpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHJldHVybiAoYXV0aG9yaXphdGlvbi5hbGxvdy5sZW5ndGggPiAwKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgX3RoaXMuYXV0aG9yaXphdGlvbnMucHVzaChhdXRob3JpemF0aW9uKTtcbiAgICAgICAgfVxuICAgICAgICAvLyByZXNvbHZlIGFuZCByZW1vdmUgYXV0aGVudGljYXRpb24gcXVlcnlzXG4gICAgICAgIF90aGlzLmF1dGhlbnRpY2F0aW9ucyA9IF90aGlzLmF1dGhlbnRpY2F0aW9ucy5maWx0ZXIoZnVuY3Rpb24oYXV0aGVudGljYXRpb24pIHtcbiAgICAgICAgICAgIGlmIChtYXRjaEFueVVSTChhdXRoZW50aWNhdGlvbi51cmwsIGFsbG93QWJzVVJMcykpIHtcbiAgICAgICAgICAgICAgICBhdXRoZW50aWNhdGlvbi5yZXNvbHZlKGFjY2VwdGFibGUpO1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gYWNjZXB0YWJsZTtcbiAgICB9KTtcbn07XG5cbnByb3RvdHlwZS5nZXRBdXRob3JpemF0aW9uVG9rZW4gPSBmdW5jdGlvbih1cmwpIHtcbiAgICB2YXIgdG9rZW47XG4gICAgdGhpcy5hdXRob3JpemF0aW9ucy5zb21lKGZ1bmN0aW9uKGF1dGhvcml6YXRpb24pIHtcbiAgICAgICAgaWYgKG1hdGNoQW55VVJMKHVybCwgYXV0aG9yaXphdGlvbi5hbGxvdykpIHtcbiAgICAgICAgICAgIGlmICghbWF0Y2hBbnlVUkwodXJsLCBhdXRob3JpemF0aW9uLmRlbnkpKSB7XG4gICAgICAgICAgICAgICAgdG9rZW4gPSBhdXRob3JpemF0aW9uLnRva2VuO1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHRva2VuO1xufTtcblxucHJvdG90eXBlLmNhbmNlbEF1dGhlbnRpY2F0aW9uID0gZnVuY3Rpb24oYWxsb3dVUkxzKSB7XG4gICAgdmFyIGFsbG93QWJzVVJMcyA9IHRoaXMucmVzb2x2ZVVSTHMoYWxsb3dVUkxzIHx8IFsgJy8nIF0pO1xuICAgIHRoaXMuYXV0aGVudGljYXRpb25zID0gdGhpcy5hdXRoZW50aWNhdGlvbnMuZmlsdGVyKGZ1bmN0aW9uKGF1dGhlbnRpY2F0aW9uKSB7XG4gICAgICAgIGlmIChtYXRjaEFueVVSTChhdXRoZW50aWNhdGlvbi51cmwsIGFsbG93QWJzVVJMcykpIHtcbiAgICAgICAgICAgIGF1dGhlbnRpY2F0aW9uLnJlc29sdmUoZmFsc2UpO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICB9KTtcbn07XG5cbnByb3RvdHlwZS5jYW5jZWxBdXRob3JpemF0aW9uID0gZnVuY3Rpb24oZGVueVVSTHMpIHtcbiAgICB2YXIgZGVueUFic1VSTHMgPSB0aGlzLnJlc29sdmVVUkxzKGRlbnlVUkxzIHx8IFsgJy8nIF0pO1xuICAgIHRoaXMuYXV0aG9yaXphdGlvbnMgPSB0aGlzLmF1dGhvcml6YXRpb25zLmZpbHRlcihmdW5jdGlvbihhdXRob3JpemF0aW9uKSB7XG4gICAgICAgIGF1dGhvcml6YXRpb24uYWxsb3cgPSBhdXRob3JpemF0aW9uLmFsbG93LmZpbHRlcihmdW5jdGlvbih1cmwpIHtcbiAgICAgICAgICAgIHJldHVybiAoZGVueVVSTHMuaW5kZXhPZih1cmwpID09PSAtMSk7XG4gICAgICAgIH0pO1xuICAgICAgICAvLyBhZGQgdG8gZGVueSBsaXN0IGlmIGl0J3Mgc3RpbGwgYWxsb3dlZFxuICAgICAgICBkZW55QWJzVVJMcy5mb3JFYWNoKGZ1bmN0aW9uKHVybCkge1xuICAgICAgICAgICAgaWYgKG1hdGNoQW55VVJMKHVybCwgYXV0aG9yaXphdGlvbi5hbGxvdykpIHtcbiAgICAgICAgICAgICAgICBhdXRob3JpemF0aW9uLmRlbnkucHVzaCh1cmwpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIChhdXRob3JpemF0aW9uLmFsbG93Lmxlbmd0aCA+IDApO1xuICAgIH0pO1xufTtcblxucHJvdG90eXBlLnJldm9rZUF1dGhvcml6YXRpb24gPSBmdW5jdGlvbihsb2dvdXRVUkwpIHtcbiAgICB2YXIgbG9nb3V0QWJzVVJMID0gdGhpcy5yZXNvbHZlVVJMcyhsb2dvdXRVUkwpO1xuICAgIHJldHVybiBmZXRjaChsb2dvdXRBYnNVUkwsIG9wdGlvbnMpLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcbiAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA8IDQwMCkge1xuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihyZXNwb25zZS5zdGF0dXNUZXh0KTtcbiAgICAgICAgfVxuICAgIH0pLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcbiAgICAgICAgdGhpcy5hdXRob3JpemF0aW9ucyA9IHRoaXMuYXV0aG9yaXphdGlvbnMuZmlsdGVyKGZ1bmN0aW9uKGF1dGhvcml6YXRpb24pIHtcbiAgICAgICAgICAgIHZhciBmb2xkZXJVUkwxID0gZ2V0Rm9sZGVyVVJMKGF1dGhvcml6YXRpb24udXJsKTtcbiAgICAgICAgICAgIHZhciBmb2xkZXJVUkwyID0gZ2V0Rm9sZGVyVVJMKGxvZ291dEFic1VSTCk7XG4gICAgICAgICAgICByZXR1cm4gKGZvbGRlclVSTDEgIT09IGZvbGRlclVSTDIpO1xuICAgICAgICB9KTtcbiAgICB9KTtcbn07XG5cbi8qKlxuICogU3RhcnQgZXhwaXJhdGlvbiBjaGVja2luZ1xuICovXG5wcm90b3R5cGUuc3RhcnRFeHBpcmF0aW9uQ2hlY2sgPSBmdW5jdGlvbigpIHtcbiAgICBpZiAodGhpcy5vcHRpb25zLnJlZnJlc2hJbnRlcnZhbCA+IDApIHtcbiAgICAgICAgaWYgKCF0aGlzLmV4cGlyYXRpb25DaGVja0ludGVydmFsKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICAgICAgdGhpcy5leHBpcmF0aW9uQ2hlY2tJbnRlcnZhbCA9IHNldEludGVydmFsKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIF90aGlzLmNoZWNrRXhwaXJhdGlvbigpO1xuICAgICAgICAgICAgfSwgNTAwMCk7XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG4vKipcbiAqIFN0b3AgZXhwaXJhdGlvbiBjaGVja2luZ1xuICovXG5wcm90b3R5cGUuc3RvcEV4cGlyYXRpb25DaGVjayA9IGZ1bmN0aW9uKCkge1xuICAgIGlmICh0aGlzLmV4cGlyYXRpb25DaGVja0ludGVydmFsKSB7XG4gICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5leHBpcmF0aW9uQ2hlY2tJbnRlcnZhbCk7XG4gICAgICAgIHRoaXMuZXhwaXJhdGlvbkNoZWNrSW50ZXJ2YWwgPSAwO1xuICAgIH1cbn07XG5cbi8qKlxuICogTWFyayBxdWVyaWVzIGFzIGRpcnR5IGFuZCB0cmlnZ2VyIG9uQ2hhbmdlIGV2ZW50IHdoZW4gZW5vdWdoIHRpbWUgaGFzIHBhc3NlZFxuICovXG5wcm90b3R5cGUuY2hlY2tFeHBpcmF0aW9uID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGludGVydmFsID0gTnVtYmVyKHRoaXMub3B0aW9ucy5yZWZyZXNoSW50ZXJ2YWwpO1xuICAgIGlmICghaW50ZXJ2YWwpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgbGltaXQgPSBnZXRUaW1lKC1pbnRlcnZhbCk7XG4gICAgdmFyIGNoYW5nZWQgPSBmYWxzZTtcbiAgICB2YXIgcXVlcmllcyA9IHRoaXMucXVlcmllcy5maWx0ZXIoZnVuY3Rpb24ocXVlcnkpIHtcbiAgICAgICAgaWYgKCFxdWVyeS5kaXJ0eSkge1xuICAgICAgICAgICAgaWYgKHF1ZXJ5LnJldHJpZXZhbFRpbWUgPCBsaW1pdCkge1xuICAgICAgICAgICAgICAgIHF1ZXJ5LmRpcnR5ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBjaGFuZ2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9KTtcbiAgICBpZiAoY2hhbmdlZCkge1xuICAgICAgICB0aGlzLnF1ZXJpZXMgPSBxdWVyaWVzO1xuICAgICAgICB0aGlzLnRyaWdnZXJFdmVudChuZXcgUmVsYWtzRGphbmdvRGF0YVNvdXJjZUV2ZW50KCdjaGFuZ2UnLCB0aGlzKSk7XG4gICAgfVxufTtcblxuLyoqXG4gKiBGZXRjaCBKU09OIG9iamVjdCBhdCBVUkxcbiAqXG4gKiBAcGFyYW0gIHtTdHJpbmd9IHVybFxuICpcbiAqIEByZXR1cm4ge1Byb21pc2U8T2JqZWN0Pn1cbiAqL1xucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uKHVybCkge1xuICAgIHZhciBvcHRpb25zID0ge1xuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICBoZWFkZXJzOiB7fSxcbiAgICB9O1xuICAgIHJldHVybiB0aGlzLnJlcXVlc3QodXJsLCBvcHRpb25zKTtcbn07XG5cbnByb3RvdHlwZS5wb3N0ID0gZnVuY3Rpb24odXJsLCBvYmplY3QpIHtcbiAgICB2YXIgb3B0aW9ucyA9IHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIG1vZGU6ICdjb3JzJyxcbiAgICAgICAgY2FjaGU6ICduby1jYWNoZScsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOCcsXG4gICAgICAgIH0sXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KG9iamVjdCksXG4gICAgfTtcbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KHVybCwgb3B0aW9ucyk7XG59O1xuXG5wcm90b3R5cGUucHV0ID0gZnVuY3Rpb24odXJsLCBvYmplY3QpIHtcbiAgICB2YXIgb3B0aW9ucyA9IHtcbiAgICAgICAgbWV0aG9kOiAnUFVUJyxcbiAgICAgICAgbW9kZTogJ2NvcnMnLFxuICAgICAgICBjYWNoZTogJ25vLWNhY2hlJyxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04JyxcbiAgICAgICAgfSxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkob2JqZWN0KSxcbiAgICB9O1xuICAgIHJldHVybiB0aGlzLnJlcXVlc3QodXJsLCBvcHRpb25zKTtcbn07XG5cbnByb3RvdHlwZS5kZWxldGUgPSBmdW5jdGlvbih1cmwsIG9iamVjdCkge1xuICAgIHZhciBvcHRpb25zID0ge1xuICAgICAgICBtZXRob2Q6ICdERUxFVEUnLFxuICAgICAgICBtb2RlOiAnY29ycycsXG4gICAgICAgIGNhY2hlOiAnbm8tY2FjaGUnLFxuICAgICAgICBoZWFkZXJzOiB7fSxcbiAgICB9O1xuICAgIHJldHVybiB0aGlzLnJlcXVlc3QodXJsLCBvcHRpb25zKTtcbn07XG5cbnByb3RvdHlwZS5yZXF1ZXN0ID0gZnVuY3Rpb24odXJsLCBvcHRpb25zKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcbiAgICB2YXIgdG9rZW4gPSB0aGlzLmdldEF1dGhvcml6YXRpb25Ub2tlbih1cmwpO1xuICAgIGlmICh0b2tlbikge1xuICAgICAgICB2YXIga2V5d29yZCA9IHRoaXMub3B0aW9ucy5hdXRob3JpemF0aW9uS2V5d29yZDtcbiAgICAgICAgb3B0aW9ucy5oZWFkZXJzWydBdXRob3JpemF0aW9uJ10gPSBrZXl3b3JkICsgJyAnICsgdG9rZW47XG4gICAgfVxuICAgIHJldHVybiBmZXRjaCh1cmwsIG9wdGlvbnMpLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcbiAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA8IDQwMCkge1xuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PSAyMDQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuICAgICAgICB9IGVsc2UgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gNDAxKSB7XG4gICAgICAgICAgICByZXR1cm4gX3RoaXMucmVxdWVzdEF1dGhlbnRpY2F0aW9uKHVybCkudGhlbihmdW5jdGlvbihhdXRoZW50aWNhdGVkKSB7XG4gICAgICAgICAgICAgICAgaWYgKGF1dGhlbnRpY2F0ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIG9wdGlvbnMuaGVhZGVyc1snQXV0aG9yaXphdGlvbiddO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3RoaXMucmVxdWVzdCh1cmwsIG9wdGlvbnMpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihyZXNwb25zZS5zdGF0dXNUZXh0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihyZXNwb25zZS5zdGF0dXNUZXh0KTtcbiAgICAgICAgfVxuICAgIH0pO1xufTtcblxuLyoqXG4gKiBSdW4gaG9vayBmdW5jdGlvbiBvbiBhbiBjYWNoZWQgZmV0Y2ggcXVlcnkgYWZ0ZXIgYW4gaW5zZXJ0LCB1cGRhdGUsIG9yXG4gKiBkZWxldGUgb3BlcmF0aW9uLiBSZXR1cm4gdHJ1ZSB3aGVuIHF1ZXJ5IGlzIGNoYW5nZWQuXG4gKlxuICogQHBhcmFtICB7T2JqZWN0fSBxdWVyeVxuICogQHBhcmFtICB7U3RyaW5nfSBob29rTmFtZVxuICogQHBhcmFtICB7QXJyYXk8T2JqZWN0PnxPYmplY3R9IGlucHV0XG4gKiBAcGFyYW0gIHtTdHJpbmd9IGRlZmF1bHRCZWhhdmlvclxuICpcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKi9cbmZ1bmN0aW9uIHJ1bkhvb2socXVlcnksIGhvb2tOYW1lLCBpbnB1dCwgZGVmYXVsdEJlaGF2aW9yKSB7XG4gICAgdmFyIGhvb2tGdW5jID0gKHF1ZXJ5Lm9wdGlvbnMpID8gcXVlcnkub3B0aW9uc1tob29rTmFtZV0gOiBudWxsO1xuICAgIGlmICghaG9va0Z1bmMpIHtcbiAgICAgICAgaG9va0Z1bmMgPSBkZWZhdWx0QmVoYXZpb3I7XG4gICAgfVxuICAgIGlmICh0eXBlb2YoaG9va0Z1bmMpID09PSAnc3RyaW5nJykge1xuICAgICAgICBzd2l0Y2ggKGhvb2tGdW5jKSB7XG4gICAgICAgICAgICBjYXNlICdyZWZyZXNoJzpcbiAgICAgICAgICAgICAgICBob29rRnVuYyA9IHJlZnJlc2hRdWVyeTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2lnbm9yZSc6XG4gICAgICAgICAgICAgICAgaG9va0Z1bmMgPSBpZ25vcmVDaGFuZ2U7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHN3aXRjaCAocXVlcnkudHlwZSArICc6OicgKyBob29rRnVuYykge1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdvYmplY3Q6OnJlcGxhY2UnOlxuICAgICAgICAgICAgICAgICAgICAgICAgaG9va0Z1bmMgPSByZXBsYWNlT2JqZWN0O1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2xpc3Q6OnJlcGxhY2UnOlxuICAgICAgICAgICAgICAgICAgICBjYXNlICdwYWdlOjpyZXBsYWNlJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGhvb2tGdW5jID0gcmVwbGFjZU9iamVjdHM7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnbGlzdDo6dW5zaGlmdCc6XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ3BhZ2U6OnVuc2hpZnQnOlxuICAgICAgICAgICAgICAgICAgICAgICAgaG9va0Z1bmMgPSB1bnNoaWZ0T2JqZWN0cztcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdsaXN0OjpwdXNoJzpcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAncGFnZTo6cHVzaCc6XG4gICAgICAgICAgICAgICAgICAgICAgICBob29rRnVuYyA9IHB1c2hPYmplY3RzO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ29iamVjdDo6cmVtb3ZlJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGhvb2tGdW5jID0gcmVtb3ZlT2JqZWN0O1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2xpc3Q6OnJlbW92ZSc6XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ3BhZ2U6OnJlbW92ZSc6XG4gICAgICAgICAgICAgICAgICAgICAgICBob29rRnVuYyA9IHJlbW92ZU9iamVjdHM7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVW5rbm93biBob29rIG5hbWU6ICcgKyBob29rRnVuYylcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKHF1ZXJ5LnR5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgICAgIHZhciBpbXBhY3Q7XG4gICAgICAgIGlmIChxdWVyeS5vYmplY3QpIHtcbiAgICAgICAgICAgIGltcGFjdCA9IGhvb2tGdW5jKHF1ZXJ5Lm9iamVjdCwgaW5wdXQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gbmVlZCB0byBydW4gcXVlcnkgYWdhaW4sIGluIGNhc2UgdGhlIGRhdGEgY3VycmVudGx5IGluIGZsaWdodFxuICAgICAgICAgICAgLy8gaXMgYWxyZWFkeSBzdGFsZVxuICAgICAgICAgICAgaW1wYWN0ID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaW1wYWN0ID09PSBmYWxzZSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpbXBhY3QgaW5zdGFuY2VvZiBPYmplY3QpIHtcbiAgICAgICAgICAgIHZhciBvYmplY3QgPSBpbXBhY3Q7XG4gICAgICAgICAgICBxdWVyeS5vYmplY3QgPSBvYmplY3Q7XG4gICAgICAgICAgICBxdWVyeS5wcm9taXNlID0gUHJvbWlzZS5yZXNvbHZlKG9iamVjdCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBxdWVyeS5kaXJ0eSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIGlmIChxdWVyeS50eXBlID09PSAncGFnZScgfHwgcXVlcnkudHlwZSA9PT0gJ2xpc3QnKSB7XG4gICAgICAgIHZhciBpbXBhY3Q7XG4gICAgICAgIGlmIChxdWVyeS5vYmplY3RzKSB7XG4gICAgICAgICAgICAvLyBnZXQgcmlkIG9mIG51bGwgYW5kIHNvcnQgbGlzdCBieSBJRCBvciBVUkxcbiAgICAgICAgICAgIGlucHV0ID0gaW5wdXQuZmlsdGVyKEJvb2xlYW4pO1xuICAgICAgICAgICAgc29ydE9iamVjdHMoaW5wdXQpO1xuICAgICAgICAgICAgaW1wYWN0ID0gaG9va0Z1bmMocXVlcnkub2JqZWN0cywgaW5wdXQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gc2VlIGFib3ZlXG4gICAgICAgICAgICBpbXBhY3QgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpbXBhY3QgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGltcGFjdCBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgICAgICB2YXIgb2JqZWN0cyA9IGltcGFjdDtcbiAgICAgICAgICAgIGlmIChxdWVyeS50eXBlID09PSAnbGlzdCcpIHtcbiAgICAgICAgICAgICAgICAvLyB1cGRhdGUgdGhlIHRvdGFsXG4gICAgICAgICAgICAgICAgdmFyIGRpZmYgPSBvYmplY3RzLmxlbmd0aCAtIHF1ZXJ5Lm9iamVjdHMubGVuZ3RoO1xuICAgICAgICAgICAgICAgIG9iamVjdHMudG90YWwgPSBxdWVyeS5vYmplY3RzLnRvdGFsICsgZGlmZjtcblxuICAgICAgICAgICAgICAgIC8vIHJlc3RvcmUgbW9yZSBmdW5jdGlvblxuICAgICAgICAgICAgICAgIG9iamVjdHMubW9yZSA9IHF1ZXJ5Lm9iamVjdHMubW9yZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHF1ZXJ5Lm9iamVjdHMgPSBvYmplY3RzO1xuICAgICAgICAgICAgcXVlcnkucHJvbWlzZSA9IFByb21pc2UucmVzb2x2ZShvYmplY3RzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHF1ZXJ5LmRpcnR5ID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG59XG5cbi8qKlxuICogUmV0dXJuIGZhbHNlIHRvIGluZGljYXRlIHRoYXQgY2hhbmdlIHNob3VsZCBiZSBpZ25vcmVkXG4gKlxuICogQHJldHVybiB7ZmFsc2V9XG4gKi9cbmZ1bmN0aW9uIGlnbm9yZUNoYW5nZSgpIHtcbiAgICByZXR1cm4gZmFsc2U7XG59XG5cbi8qKlxuICogUmV0dXJuIHRydWUgdG8gaW5kaWNhdGUgdGhhdCBxdWVyeSBzaG91bGQgYmUgcmVydW5cbiAqXG4gKiBAcmV0dXJuIHt0cnVlfVxuICovXG5mdW5jdGlvbiByZWZyZXNoUXVlcnkoKSB7XG4gICAgcmV0dXJuIHRydWU7XG59XG5cbi8qKlxuICogUmV0dXJuIHRoZSBuZXcgb2JqZWN0XG4gKlxuICogQHBhcmFtICB7T2JqZWN0fSBvYmplY3RcbiAqIEBwYXJhbSAge09iamVjdH0gbmV3T2JqZWN0XG4gKlxuICogQHJldHVybiB7T2JqZWN0fGZhbHNlfVxuICovXG5mdW5jdGlvbiByZXBsYWNlT2JqZWN0KG9iamVjdCwgbmV3T2JqZWN0KSB7XG4gICAgaWYgKCFtYXRjaE9iamVjdChuZXdPYmplY3QsIG9iamVjdCkpIHtcbiAgICAgICAgcmV0dXJuIG5ld09iamVjdDtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xufVxuXG4vKipcbiAqIFJlcGxhY2Ugb2xkIHZlcnNpb24gb2Ygb2JqZWN0cyB3aXRoIG5ldyBvbmVzXG4gKlxuICogQHBhcmFtICB7QXJyYXk8T2JqZWN0Pl19IG9iamVjdHNcbiAqIEBwYXJhbSAge0FycmF5PE9iamVjdD59IG5ld09iamVjdHNcbiAqXG4gKiBAcmV0dXJuIHtBcnJheTxPYmplY3Q+fGZhbHNlfVxuICovXG5mdW5jdGlvbiByZXBsYWNlT2JqZWN0cyhvYmplY3RzLCBuZXdPYmplY3RzKSB7XG4gICAgdmFyIGNoYW5nZWQgPSBmYWxzZTtcbiAgICB2YXIgbmV3TGlzdCA9IG9iamVjdHMubWFwKGZ1bmN0aW9uKG9iamVjdCkge1xuICAgICAgICB2YXIgbmV3T2JqZWN0ID0gZmluZE9iamVjdChuZXdPYmplY3RzLCBvYmplY3QpO1xuICAgICAgICBpZiAobmV3T2JqZWN0KSB7XG4gICAgICAgICAgICBpZiAoIW1hdGNoT2JqZWN0KG5ld09iamVjdCwgb2JqZWN0KSkge1xuICAgICAgICAgICAgICAgIGNoYW5nZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXdPYmplY3Q7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG9iamVjdDtcbiAgICB9KTtcbiAgICByZXR1cm4gKGNoYW5nZWQpID8gbmV3TGlzdCA6IGZhbHNlO1xufVxuXG4vKipcbiAqIEFkZCBuZXcgb2JqZWN0cyBhdCBiZWdpbm5pbmcgb2YgbGlzdFxuICpcbiAqIEBwYXJhbSAge0FycmF5PE9iamVjdD59IG9iamVjdHNcbiAqIEBwYXJhbSAge0FycmF5PE9iamVjdD59IG5ld09iamVjdHNcbiAqXG4gKiBAcmV0dXJuIHtBcnJheTxPYmplY3Q+fGZhbHNlfVxuICovXG5mdW5jdGlvbiB1bnNoaWZ0T2JqZWN0cyhvYmplY3RzLCBuZXdPYmplY3RzKSB7XG4gICAgdmFyIGNoYW5nZWQgPSBmYWxzZTtcbiAgICB2YXIgbmV3TGlzdCA9IG9iamVjdHMuc2xpY2UoKTtcbiAgICBuZXdPYmplY3RzLmZvckVhY2goZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgICAgIHZhciBpbmRleCA9IGZpbmRPYmplY3RJbmRleChuZXdMaXN0LCBvYmplY3QpO1xuICAgICAgICBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgICAgICAgICBuZXdMaXN0LnVuc2hpZnQob2JqZWN0KTtcbiAgICAgICAgICAgIGNoYW5nZWQgPSB0cnVlO1xuICAgICAgICB9IGVsc2UgaWYgKCFtYXRjaE9iamVjdChuZXdMaXN0W2luZGV4XSwgb2JqZWN0KSkge1xuICAgICAgICAgICAgbmV3TGlzdFtpbmRleF0gPSBvYmplY3Q7XG4gICAgICAgICAgICBjaGFuZ2VkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiAoY2hhbmdlZCkgPyBuZXdMaXN0IDogZmFsc2U7XG59XG5cbi8qKlxuICogQWRkIG5ldyBvYmplY3RzIGF0IGVuZCBvZiBsaXN0XG4gKlxuICogQHBhcmFtICB7QXJyYXk8T2JqZWN0Pn0gb2JqZWN0c1xuICogQHBhcmFtICB7QXJyYXk8T2JqZWN0Pn0gbmV3T2JqZWN0c1xuICpcbiAqIEByZXR1cm4ge0FycmF5PE9iamVjdD58ZmFsc2V9XG4gKi9cbmZ1bmN0aW9uIHB1c2hPYmplY3RzKG9iamVjdHMsIG5ld09iamVjdHMpIHtcbiAgICB2YXIgY2hhbmdlZCA9IGZhbHNlO1xuICAgIHZhciBuZXdMaXN0ID0gb2JqZWN0cy5zbGljZSgpO1xuICAgIG5ld09iamVjdHMuZm9yRWFjaChmdW5jdGlvbihvYmplY3QpIHtcbiAgICAgICAgdmFyIGluZGV4ID0gZmluZE9iamVjdEluZGV4KG5ld0xpc3QsIG9iamVjdCk7XG4gICAgICAgIGlmIChpbmRleCA9PT0gLTEpIHtcbiAgICAgICAgICAgIG5ld0xpc3QucHVzaChvYmplY3QpO1xuICAgICAgICAgICAgY2hhbmdlZCA9IHRydWU7XG4gICAgICAgIH0gZWxzZSBpZiAoIW1hdGNoT2JqZWN0KG5ld0xpc3RbaW5kZXhdLCBvYmplY3QpKSB7XG4gICAgICAgICAgICBuZXdMaXN0W2luZGV4XSA9IG9iamVjdDtcbiAgICAgICAgICAgIGNoYW5nZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIChjaGFuZ2VkKSA/IG5ld0xpc3QgOiBmYWxzZTtcbn1cblxuLyoqXG4gKiBSZXR1cm4gdHJ1ZSB0byBpbmRpY2F0ZSB0aGF0IHF1ZXJ5IHNob3VsZCBiZSByZW1vdmVkXG4gKlxuICogQHBhcmFtICB7T2JqZWN0fSBvYmplY3RcbiAqIEBwYXJhbSAge09iamVjdH0gZGVsZXRlZE9CamVjdFxuICpcbiAqIEByZXR1cm4ge3RydWV9XG4gKi9cbmZ1bmN0aW9uIHJlbW92ZU9iamVjdChvYmplY3QsIGRlbGV0ZWRPQmplY3QpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbn1cblxuLyoqXG4gKiBSZW1vdmUgb2JqZWN0cyBmcm9tIGxpc3RcbiAqXG4gKiBAcGFyYW0gIHtBcnJheTxPYmplY3Q+fSBvYmplY3RzXG4gKiBAcGFyYW0gIHtBcnJheTxPYmplY3Q+fSBkZWxldGVkT2JqZWN0c1xuICpcbiAqIEByZXR1cm4ge0FycmF5PE9iamVjdD58ZmFsc2V9XG4gKi9cbmZ1bmN0aW9uIHJlbW92ZU9iamVjdHMob2JqZWN0cywgZGVsZXRlZE9iamVjdHMpIHtcbiAgICB2YXIgY2hhbmdlZCA9IGZhbHNlO1xuICAgIHZhciBuZXdMaXN0ID0gb2JqZWN0cy5maWx0ZXIoZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgICAgIGlmIChmaW5kT2JqZWN0SW5kZXgoZGVsZXRlZE9iamVjdHMsIG9iamVjdCkgIT09IC0xKSB7XG4gICAgICAgICAgICBjaGFuZ2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIChjaGFuZ2VkKSA/IG5ld0xpc3QgOiBmYWxzZTtcbn1cblxuLyoqXG4gKiBTZWUgaWYgYSBxdWVyeSBoYXMgdGhlIGdpdmVuIHByb3BlcnRpZXNcbiAqXG4gKiBAcGFyYW0gIHtPYmplY3R9IHF1ZXJ5XG4gKiBAcGFyYW0gIHtPYmplY3R9IHByb3BzXG4gKlxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqL1xuZnVuY3Rpb24gbWF0Y2hRdWVyeShxdWVyeSwgcHJvcHMpIHtcbiAgICBmb3IgKHZhciBuYW1lIGluIHByb3BzKSB7XG4gICAgICAgIGlmICghbWF0Y2hPYmplY3QocXVlcnlbbmFtZV0sIHByb3BzW25hbWVdKSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xufVxuXG4vKipcbiAqIFNlZSBpZiB0d28gb2JqZWN0cyBhcmUgaWRlbnRpY2FsXG4gKlxuICogQHBhcmFtICB7Kn0gb2JqZWN0MVxuICogQHBhcmFtICB7Kn0gb2JqZWN0MlxuICpcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKi9cbmZ1bmN0aW9uIG1hdGNoT2JqZWN0KG9iamVjdDEsIG9iamVjdDIpIHtcbiAgICBpZiAob2JqZWN0MSAhPT0gb2JqZWN0Mikge1xuICAgICAgICBpZiAob2JqZWN0MSBpbnN0YW5jZW9mIE9iamVjdCAmJiBvYmplY3QyIGluc3RhbmNlb2YgT2JqZWN0KSB7XG4gICAgICAgICAgICBpZiAob2JqZWN0MS5jb25zdHJ1Y3RvciAhPT0gb2JqZWN0Mi5jb25zdHJ1Y3Rvcikge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChvYmplY3QxIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgICAgICAgICAgICBpZiAob2JqZWN0MS5sZW5ndGggIT09IG9iamVjdDIubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBvYmplY3QxLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghbWF0Y2hPYmplY3Qob2JqZWN0MVtpXSwgb2JqZWN0MltpXSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAob2JqZWN0MSBpbnN0YW5jZW9mIEZ1bmN0aW9uKSB7XG4gICAgICAgICAgICAgICAgaWYgKG9iamVjdDEudG9TdHJpbmcoKSAhPT0gb2JqZWN0Mi50b1N0cmluZygpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIG5hbWUgaW4gb2JqZWN0MSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIW1hdGNoT2JqZWN0KG9iamVjdDFbbmFtZV0sIG9iamVjdDJbbmFtZV0pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgbmFtZSBpbiBvYmplY3QyKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghKG5hbWUgaW4gb2JqZWN0MSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbn1cblxuLyoqXG4gKiBDaGVjayBpZiB0aGUgZ2l2ZW4gVVJMIG1hdGNoIGFueSBpbiB0aGUgbGlzdFxuICpcbiAqIEBwYXJhbSAge1N0cmluZ30gdXJsXG4gKiBAcGFyYW0gIHtBcnJheTxTdHJpbmc+fSBvdGhlclVSTHNcbiAqXG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICovXG5mdW5jdGlvbiBtYXRjaEFueVVSTCh1cmwsIG90aGVyVVJMcykge1xuICAgIHJldHVybiBvdGhlclVSTHMuc29tZShmdW5jdGlvbihvdGhlclVSTCkge1xuICAgICAgICBpZiAob3RoZXJVUkwgPT09IHVybCkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0gZWxzZSBpZiAodXJsLnN1YnN0cigwLCBvdGhlclVSTC5sZW5ndGgpID09PSBvdGhlclVSTCkge1xuICAgICAgICAgICAgdmFyIGxjID0gb3RoZXJVUkwuY2hhckF0KG90aGVyVVJMLmxlbmd0aCAtIDEpO1xuICAgICAgICAgICAgdmFyIGVjID0gdXJsLmNoYXJBdChvdGhlclVSTC5sZW5ndGgpO1xuICAgICAgICAgICAgaWYgKGxjID09PSAnLycgfHwgZWMgPT09ICcvJykge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG59XG5cbi8qKlxuICogUmVtb3ZlIHRyYWlsaW5nIHNsYXNoIGZyb20gVVJMXG4gKlxuICogQHBhcmFtICB7U3RyaW5nfSB1cmxcbiAqXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIHJlbW92ZVRyYWlsaW5nU2xhc2godXJsKSB7XG4gICAgdmFyIGxjID0gdXJsLmNoYXJBdCh1cmwubGVuZ3RoIC0gMSk7XG4gICAgaWYgKGxjID09PSAnLycpIHtcbiAgICAgICAgcmV0dXJuIHVybC5zdWJzdHIoMCwgdXJsLmxlbmd0aCAtIDEpO1xuICAgIH1cbiAgICByZXR1cm4gdXJsO1xufVxuXG4vKipcbiAqIEFkZCBsZWFkaW5nIHNsYXNoIHRvIFVSTFxuICpcbiAqIEBwYXJhbSAge1N0cmluZ30gdXJsXG4gKlxuICogQHJldHVybiB7U3RyaW5nfVxuICovXG5mdW5jdGlvbiBhZGRMZWFkaW5nU2xhc2godXJsKSB7XG4gICAgdmFyIGZjID0gdXJsLmNoYXJBdCgwKTtcbiAgICBpZiAoZmMgIT09ICcvJykge1xuICAgICAgICByZXR1cm4gJy8nICsgdXJsO1xuICAgIH1cbiAgICByZXR1cm4gdXJsO1xufVxuXG4vKipcbiAqIFJldHVybiB0aGUgVVJMIG9mIHRoZSBwYXJlbnQgZm9sZGVyXG4gKlxuICogQHBhcmFtICB7U3RyaW5nfSB1cmxcbiAqXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIGdldEZvbGRlclVSTCh1cmwpIHtcbiAgICB2YXIgZWkgPSB1cmwubGFzdEluZGV4T2YoJy8nKTtcbiAgICBpZiAoZWkgPT09IHVybC5sZW5ndGggLSAxKSB7XG4gICAgICAgIGVpID0gdXJsLmxhc3RJbmRleE9mKCcvJywgZWkgLSAxKTtcbiAgICB9XG4gICAgaWYgKGVpICE9PSAtMSkge1xuICAgICAgICByZXR1cm4gdXJsLnN1YnN0cigwLCBlaSArIDEpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZ2V0T2JqZWN0VVJMKGZvbGRlclVSTCwgb2JqZWN0KSB7XG4gICAgaWYgKCFvYmplY3QpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoZm9sZGVyVVJMICYmIG9iamVjdC5pZCkge1xuICAgICAgICByZXR1cm4gcmVtb3ZlVHJhaWxpbmdTbGFzaChmb2xkZXJVUkwpICsgJy8nICsgb2JqZWN0LmlkICsgJy8nO1xuICAgIH0gZWxzZSBpZiAob2JqZWN0LnVybCkge1xuICAgICAgICByZXR1cm4gb2JqZWN0LnVybDtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGdldE9iamVjdEZvbGRlclVSTChmb2xkZXJVUkwsIG9iamVjdCkge1xuICAgIGlmICghb2JqZWN0KSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKGZvbGRlclVSTCAmJiBvYmplY3QuaWQpIHtcbiAgICAgICAgcmV0dXJuIGZvbGRlclVSTDtcbiAgICB9IGVsc2UgaWYgKG9iamVjdC51cmwpIHtcbiAgICAgICAgcmV0dXJuIGdldEZvbGRlclVSTChvYmplY3QudXJsKTtcbiAgICB9XG59XG5cbi8qKlxuICogQXBwZW5kIHRoZSB2YXJpYWJsZSBcInBhZ2VcIiB0byBhIFVSTCdzIHF1ZXJ5LCB1bmxlc3MgcGFnZSBlcXVhbHMgMS5cbiAqXG4gKiBAcGFyYW0gIHtTdHJpbmd9IHVybFxuICogQHBhcmFtICB7TnVtYmVyfSBwYWdlXG4gKlxuICogQHJldHVybiB7U3RyaW5nfVxuICovXG5mdW5jdGlvbiBhdHRhY2hQYWdlTnVtYmVyKHVybCwgcGFnZSkge1xuICAgIGlmIChwYWdlID09PSAxKSB7XG4gICAgICAgIHJldHVybiB1cmw7XG4gICAgfVxuICAgIHZhciBxaSA9IHVybC5pbmRleE9mKCc/Jyk7XG4gICAgdmFyIHNlcCA9IChxaSA9PT0gLTEpID8gJz8nIDogJyYnO1xuICAgIHJldHVybiBzZXAgKyAncGFnZT0nICsgcGFnZTtcbn1cblxuZnVuY3Rpb24gd2FpdEZvck5leHRQYWdlKHF1ZXJ5KSB7XG4gICAgcmV0dXJuIHF1ZXJ5Lm5leHRQcm9taXNlIHx8IFByb21pc2UucmVzb2x2ZSgpO1xufVxuXG5mdW5jdGlvbiBtYXRjaFVSTCh1cmwxLCB1cmwyKSB7XG4gICAgdmFyIHFpID0gdXJsMS5sYXN0SW5kZXhPZignPycpO1xuICAgIGlmIChxaSAhPT0gLTEpIHtcbiAgICAgICAgdXJsMSA9IHVybDEuc3Vic3RyKDAsIHFpKTtcbiAgICB9XG4gICAgcmV0dXJuICh1cmwxID09PSB1cmwyKTtcbn1cblxuLyoqXG4gKiBGaW5kIHRoZSBwb3NpdGlvbiBvZiBhbiBvYmplY3QgaW4gYW4gYXJyYXkgYmFzZWQgb24gaWQgb3IgVVJMLiBSZXR1cm4gLTEgaWZcbiAqIHRoZSBvYmplY3QgaXMgbm90IHRoZXJlLlxuICpcbiAqIEBwYXJhbSAge0FycmF5PE9iamVjdD59IGxpc3RcbiAqIEBwYXJhbSAge09iamVjdH0gb2JqZWN0XG4gKlxuICogQHJldHVybiB7TnVtYmVyfVxuICovXG5mdW5jdGlvbiBmaW5kT2JqZWN0SW5kZXgobGlzdCwgb2JqZWN0KSB7XG4gICAgdmFyIGtleUEgPSBvYmplY3QuaWQgfHwgb2JqZWN0LnVybDtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIG9iaiA9IGxpc3RbaV07XG4gICAgICAgIGlmIChvYmopIHtcbiAgICAgICAgICAgIHZhciBrZXlCID0gb2JqLmlkIHx8IG9iai51cmw7XG4gICAgICAgICAgICBpZiAoa2V5QSA9PT0ga2V5Qikge1xuICAgICAgICAgICAgICAgIHJldHVybiBpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiAtMTtcbn1cblxuLyoqXG4gKiBGaW5kIGFuIG9iamVjdCBpbiBhbiBhcnJheSBiYXNlZCBvbiBJRCBvciBVUkwuXG4gKlxuICogQHBhcmFtICB7W3R5cGVdfSBsaXN0XG4gKiBAcGFyYW0gIHtbdHlwZV19IG9iamVjdFxuICpcbiAqIEByZXR1cm4ge09iamVjdHx1bmRlZmluZWR9XG4gKi9cbmZ1bmN0aW9uIGZpbmRPYmplY3QobGlzdCwgb2JqZWN0KSB7XG4gICAgdmFyIGluZGV4ID0gZmluZE9iamVjdEluZGV4KGxpc3QsIG9iamVjdCk7XG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgICByZXR1cm4gbGlzdFtpbmRleF07XG4gICAgfVxufVxuXG4vKipcbiAqIFNvcnQgYSBsaXN0IG9mIG9iamVjdHMgYmFzZWQgb24gSUQgb3IgVVJMXG4gKlxuICogQHBhcmFtICB7QXJyYXk8T2JqZWN0Pn0gbGlzdFxuICovXG5mdW5jdGlvbiBzb3J0T2JqZWN0cyhsaXN0KSB7XG4gICAgbGlzdC5zb3J0KGZ1bmN0aW9uKGEsIGIpIHtcbiAgICAgICAgdmFyIGtleUEgPSBhLmlkIHx8IGEudXJsO1xuICAgICAgICB2YXIga2V5QiA9IGIuaWQgfHwgYi51cmw7XG4gICAgICAgIGlmIChrZXlBIDwga2V5Qikge1xuICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICB9IGVsc2UgaWYgKGtleUEgPiBrZXlCKSB7XG4gICAgICAgICAgICByZXR1cm4gKzE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuXG4vKipcbiAqIEFwcGVuZCBvYmplY3RzIHRvIGEgbGlzdCwgbWFraW5nIHN1cmUgZHVwbGljYXRlcyBhcmVuJ3QgYWRkZWRcbiAqXG4gKiBAcGFyYW0gIHtBcnJheTxPYmplY3Q+fSBsaXN0XG4gKiBAcGFyYW0gIHtBcnJheTxPYmplY3Q+fSBvYmplY3RzXG4gKlxuICogQHJldHVybiB7QXJyYXk8T2JqZWN0Pn1cbiAqL1xuZnVuY3Rpb24gYXBwZW5kT2JqZWN0cyhsaXN0LCBvYmplY3RzKSB7XG4gICAgaWYgKCFsaXN0KSB7XG4gICAgICAgIHJldHVybiBvYmplY3RzO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIG9iamVjdHMgPSBvYmplY3RzLmZpbHRlcihmdW5jdGlvbihvYmplY3QpIHtcbiAgICAgICAgICAgIHJldHVybiBmaW5kT2JqZWN0SW5kZXgobGlzdCwgb2JqZWN0KSA9PT0gLTE7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gbGlzdC5jb25jYXQob2JqZWN0cyk7XG4gICAgfVxufVxuXG4vKipcbiAqIFJlcGxhY2Ugb2JqZWN0cyBpbiBuZXdMaXN0IHRoYXQgYXJlIGlkZW50aWNhbCB0byB0aGVpciBjb3VudGVycGFydCBpbiBvbGRMaXN0LlxuICogUmV0dXJuIHRydWUgaWYgbmV3TGlzdCBpcyBpZGVudGljYWwgdG8gb2xkTGlzdC5cbiAqXG4gKiBAcGFyYW0gIHtBcnJheTxPYmplY3Q+fSBuZXdMaXN0XG4gKiBAcGFyYW0gIHtBcnJheTxPYmplY3Q+fSBvbGRMaXN0XG4gKlxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqL1xuZnVuY3Rpb24gcmVwbGFjZUlkZW50aWZpY2FsT2JqZWN0cyhuZXdMaXN0LCBvbGRMaXN0KSB7XG4gICAgdmFyIHVuY2hhbmdlZCA9IDA7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBuZXdMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBvbGRJbmRleCA9IGZpbmRPYmplY3RJbmRleChvbGRMaXN0LCBuZXdMaXN0W2ldKTtcbiAgICAgICAgaWYgKG9sZEluZGV4ICE9PSAtMSkge1xuICAgICAgICAgICAgaWYgKG1hdGNoT2JqZWN0KG5ld0xpc3RbaV0sIG9sZExpc3Rbb2xkSW5kZXhdKSkge1xuICAgICAgICAgICAgICAgIG5ld0xpc3RbaV0gPSBvbGRMaXN0W29sZEluZGV4XTtcbiAgICAgICAgICAgICAgICBpZiAoaSA9PT0gb2xkSW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgdW5jaGFuZ2VkKys7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiAodW5jaGFuZ2VkID09PSBuZXdMaXN0Lmxlbmd0aCAmJiBuZXdMaXN0Lmxlbmd0aCA9PT0gb2xkTGlzdC5sZW5ndGgpO1xufVxuXG4vKipcbiAqIEF0dGFjaCBvYmplY3RzIGZyb20gYW4gb2xkZXIgbGlzdCB0byBhIG5ldyBsaXN0IHRoYXQncyBiZWluZyByZXRyaWV2ZWQuXG4gKlxuICogQHBhcmFtICB7QXJyYXk8T2JqZWN0Pn0gbmV3TGlzdFxuICogQHBhcmFtICB7QXJyYXk8T2JqZWN0Pn0gb2xkTGlzdFxuICpcbiAqIEByZXR1cm4ge0FycmF5PE9iamVjdD59XG4gKi9cbmZ1bmN0aW9uIGpvaW5PYmplY3RMaXN0cyhuZXdMaXN0LCBvbGRMaXN0KSB7XG4gICAgLy8gZmluZCBwb2ludCB3aGVyZSB0aGUgdHdvIGxpc3QgaW50ZXJzZWN0XG4gICAgdmFyIHN0YXJ0SW5kZXggPSAwO1xuICAgIGZvciAodmFyIGkgPSBuZXdMaXN0Lmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgIHZhciBuZXdPYmplY3QgPSBuZXdMaXN0W2ldO1xuICAgICAgICB2YXIgb2xkSW5kZXggPSBmaW5kT2JqZWN0SW5kZXgob2xkTGlzdCwgbmV3T2JqZWN0KTtcbiAgICAgICAgaWYgKG9sZEluZGV4ICE9PSAtMSkge1xuICAgICAgICAgICAgc3RhcnRJbmRleCA9IG9sZEluZGV4ICsgMTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIHJlbW92ZSBvYmplY3RzIGFoZWFkIG9mIHRoZSBpbnRlcnNlY3Rpb24gZnJvbSB0aGUgb2xkIGxpc3QsIGFzIHdlbGxcbiAgICAvLyBhcyBhbnkgb2JqZWN0IHRoYXQgaXMgcHJlc2VudCBpbiB0aGUgbmV3IGxpc3QgKGR1ZSB0byBjaGFuZ2UgaW4gb3JkZXIpXG4gICAgdmFyIG9sZE9iamVjdHMgPSBvbGRMaXN0LmZpbHRlcihmdW5jdGlvbihvYmplY3QsIGluZGV4KSB7XG4gICAgICAgIGlmIChpbmRleCA+PSBzdGFydEluZGV4KSB7XG4gICAgICAgICAgICByZXR1cm4gZmluZE9iamVjdEluZGV4KG5ld0xpc3QsIG9iamVjdCkgPT09IC0xO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIG5ld0xpc3QuY29uY2F0KG9sZE9iamVjdHMpO1xufVxuXG4vKipcbiAqIEZpbHRlciBvdXQgb2JqZWN0cyB0aGF0IGFyZW4ndCBpbiB0aGUgZGlyZWN0b3J5LiBXaWxsIGFsd2F5cyByZXR1cm4gdGhlXG4gKiBzYW1lIGxpc3Qgd2hlbiBvYmplY3RzIGFyZSBrZXllZCBieSBJRCBhbmQgbm90IFVSTFxuICpcbiAqIEBwYXJhbSAge0FycmF5PE9iamVjdD59IG9iamVjdHNcbiAqIEBwYXJhbSAge1N0cmluZ30gZm9sZGVyVVJMXG4gKlxuICogQHJldHVybiB7QXJyYXk8T2JqZWN0Pn1cbiAqL1xuZnVuY3Rpb24gcmVtb3ZlT2JqZWN0c091dHNpZGVGb2xkZXIob2JqZWN0cywgZm9sZGVyVVJMKSB7XG4gICAgcmV0dXJuIG9iamVjdHMuZmlsdGVyKGZ1bmN0aW9uKG9iamVjdCkge1xuICAgICAgICB2YXIgb3RoZXJmb2xkZXJVUkwgPSBnZXRPYmplY3RGb2xkZXJVUkwoZm9sZGVyVVJMLCBvYmplY3QpO1xuICAgICAgICBpZiAob3RoZXJmb2xkZXJVUkwgPT09IGZvbGRlclVSTCkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cblxuLyoqXG4gKiBHZXQgcGFyYW1ldGVyICdtaW5pbXVtJyBmcm9tIG9wdGlvbnMuIElmIGl0J3MgYSBwZXJjZW50LCB0aGVuIGNhbGN1bGF0ZSB0aGVcbiAqIG1pbmltdW0gb2JqZWN0IGNvdW50IGJhc2VkIG9uIHRvdGFsLiBJZiBpdCdzIG5lZ2F0aXZlLCBzdWJzdHJhY3QgdGhlIHZhbHVlXG4gKiBmcm9tIHRoZSB0b3RhbC5cbiAqXG4gKiBAcGFyYW0gIHtPYmplY3R9IG9wdGlvbnNcbiAqIEBwYXJhbSAge051bWJlcn0gdG90YWxcbiAqIEBwYXJhbSAge051bWJlcn0gZGVmXG4gKlxuICogQHJldHVybiB7TnVtYmVyfVxuICovXG5mdW5jdGlvbiBnZXRNaW5pbXVtKG9wdGlvbnMsIHRvdGFsLCBkZWYpIHtcbiAgICBsZXQgbWluaW11bSA9IChvcHRpb25zKSA/IG9wdGlvbnMubWluaW11bSA6IHVuZGVmaW5lZDtcbiAgICBpZiAodHlwZW9mKG1pbmltdW0pID09PSAnc3RyaW5nJykge1xuICAgICAgICBpZiAobWluaW11bS5jaGFyQXQobWluaW11bS5sZW5ndGggLSAxKSA9PT0gJyUnKSB7XG4gICAgICAgICAgICBsZXQgcGVyY2VudCA9IHBhcnNlSW50KG1pbmltdW0pO1xuICAgICAgICAgICAgbWluaW11bSA9IE1hdGguY2VpbCh0b3RhbCAqIChwZXJjZW50IC8gMTAwKSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKG1pbmltdW0gPCAwKSB7XG4gICAgICAgIG1pbmltdW0gPSB0b3RhbCAtIG1pbmltdW07XG4gICAgICAgIGlmIChtaW5pbXVtIDwgMSkge1xuICAgICAgICAgICAgbWluaW11bSA9IDE7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG1pbmltdW0gfHwgZGVmO1xufVxuXG4vKipcbiAqIFJldHVybiB0aGUgY3VycmVudCB0aW1lIGluIElTTyBmb3JtYXQsIGFkZGluZyBhIGRlbHRhIG9wdGlvbmFsbHlcbiAqXG4gKiBAcGFyYW0gIHtOdW1iZXJ8dW5kZWZpbmVkfSBkZWx0YVxuICpcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqL1xuZnVuY3Rpb24gZ2V0VGltZShkZWx0YSkge1xuICAgIHZhciBkYXRlID0gbmV3IERhdGU7XG4gICAgaWYgKGRlbHRhKSB7XG4gICAgICAgIGRhdGUgPSBuZXcgRGF0ZShkYXRlLmdldFRpbWUoKSArIGRlbHRhKTtcbiAgICB9XG4gICAgcmV0dXJuIGRhdGUudG9JU09TdHJpbmcoKTtcbn1cblxuZnVuY3Rpb24gUmVsYWtzRGphbmdvRGF0YVNvdXJjZUV2ZW50KHR5cGUsIHRhcmdldCwgcHJvcHMpIHtcbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgIHRoaXMudGFyZ2V0ID0gdGFyZ2V0O1xuICAgIGZvciAodmFyIG5hbWUgaW4gcHJvcHMpIHtcbiAgICAgICAgdGhpc1tuYW1lXSA9IHByb3BzW25hbWVdO1xuICAgIH1cbiAgICB0aGlzLmRlZmF1bHRQcmV2ZW50ZWQgPSBmYWxzZTtcbiAgICB0aGlzLmRlY2lzaW9uUHJvbWlzZSA9IG51bGw7XG59XG5cbnZhciBwcm90b3R5cGUgPSBSZWxha3NEamFuZ29EYXRhU291cmNlRXZlbnQucHJvdG90eXBlO1xuXG5wcm90b3R5cGUucHJldmVudERlZmF1bHQgPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLmRlZmF1bHRQcmV2ZW50ZWQgPSB0cnVlO1xufTtcblxucHJvdG90eXBlLnBvc3Rwb25lRGVmYXVsdCA9IGZ1bmN0aW9uKHByb21pc2UpIHtcbiAgICBpZiAoIXByb21pc2UgfHwgIShwcm9taXNlLnRoZW4gaW5zdGFuY2VvZiBGdW5jdGlvbikpIHtcbiAgICAgICAgdGhpcy5kZWNpc2lvblByb21pc2UgPSBwcm9taXNlO1xuICAgIH1cbn07XG5cbnByb3RvdHlwZS53YWl0Rm9yRGVjaXNpb24gPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5kZWNpc2lvblByb21pc2UgfHwgUHJvbWlzZS5yZXNvbHZlKCk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlbGFrc0RqYW5nb0RhdGFTb3VyY2U7XG5tb2R1bGUuZXhwb3J0cy5SZWxha3NEamFuZ29EYXRhU291cmNlID0gUmVsYWtzRGphbmdvRGF0YVNvdXJjZTtcbm1vZHVsZS5leHBvcnRzLlJlbGFrc0RqYW5nb0RhdGFTb3VyY2VFdmVudCA9IFJlbGFrc0RqYW5nb0RhdGFTb3VyY2VFdmVudDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAvaG9tZS9jbGVvbmcvcmVsYWtzLWRqYW5nby1kYXRhLXNvdXJjZS9pbmRleC5qcyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oUmVhY3QpIHtcblxudmFyIElTX1BSRUFDVCA9IChSZWFjdC5oIGluc3RhbmNlb2YgRnVuY3Rpb24pO1xudmFyIE1lYW53aGlsZSA9IHJlcXVpcmUoJy4vbWVhbndoaWxlJyk7XG5cbi8qKlxuICogSGFydmVzdCBIVE1MIGFuZCB0ZXh0IG5vZGVzXG4gKlxuICogQHBhcmFtICB7W3R5cGVdfSBub2RlXG4gKlxuICogQHJldHVybiB7UHJvbWlzZTxWbm9kZT59XG4gKi9cbmZ1bmN0aW9uIGhhcnZlc3Qobm9kZSkge1xuICAgIHRyeSB7XG4gICAgICAgIHZhciBoYXJ2ZXN0ZWQgPSBoYXJ2ZXN0Tm9kZShub2RlLCB7fSk7XG4gICAgICAgIGlmICghaXNQcm9taXNlKGhhcnZlc3RlZCkpIHtcbiAgICAgICAgICAgIC8vIGFsd2F5cyByZXR1cm4gYSBwcm9taXNlXG4gICAgICAgICAgICBoYXJ2ZXN0ZWQgPSBQcm9taXNlLnJlc29sdmUoaGFydmVzdGVkKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaGFydmVzdGVkO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyKTtcbiAgICB9XG59XG5cbi8qKlxuICogSGFydmVzdCBIVE1MIGFuZCB0ZXh0IG5vZGVzXG4gKlxuICogQHBhcmFtICB7Vk5vZGV9IG5vZGVcbiAqIEBwYXJhbSAge09iamVjdH0gY29udGV4dFxuICpcbiAqIEByZXR1cm4ge1ZOb2RlfFByb21pc2U8Vk5vZGU+fVxuICovXG5mdW5jdGlvbiBoYXJ2ZXN0Tm9kZShub2RlLCBjb250ZXh0KSB7XG4gICAgaWYgKCEobm9kZSBpbnN0YW5jZW9mIE9iamVjdCkpIHtcblx0XHRyZXR1cm4gbm9kZTtcblx0fVxuICAgIHZhciBhc3luY1JlbmRlcmluZyA9IG51bGw7XG4gICAgdmFyIHR5cGUgPSBnZXROb2RlVHlwZShub2RlKTtcbiAgICBpZiAodHlwZSBpbnN0YW5jZW9mIEZ1bmN0aW9uKSB7XG4gICAgICAgIC8vIGl0J3MgYSBjb21wb25lbnRcbiAgICAgICAgdmFyIHJlbmRlcmVkO1xuICAgICAgICB2YXIgcHJvcHMgPSBnZXROb2RlUHJvcHMobm9kZSwgdHlwZSk7XG4gICAgICAgIGlmICh0eXBlLnByb3RvdHlwZSAmJiB0eXBlLnByb3RvdHlwZS5yZW5kZXIgaW5zdGFuY2VvZiBGdW5jdGlvbikge1xuICAgICAgICAgICAgLy8gc3RhdGVmdWwgY29tcG9uZW50XG4gICAgICAgICAgICB2YXIgY29tcG9uZW50Q2xhc3MgPSB0eXBlO1xuICAgICAgICAgICAgdmFyIGNvbXBvbmVudCA9IG5ldyBjb21wb25lbnRDbGFzcyhwcm9wcywgY29udGV4dCk7XG4gICAgICAgICAgICBjb21wb25lbnQucHJvcHMgPSBwcm9wcztcbiAgICAgICAgICAgIGNvbXBvbmVudC5jb250ZXh0ID0gY29udGV4dDtcbiAgICAgICAgICAgIHZhciBzdGF0ZSA9IGNvbXBvbmVudC5zdGF0ZTtcbiAgICAgICAgICAgIGlmIChjb21wb25lbnRDbGFzcy5nZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMpIHtcbiAgICAgICAgICAgICAgICB2YXIgb3JpZ2luYWxTdGF0ZSA9IHN0YXRlO1xuICAgICAgICAgICAgICAgIHZhciBkZXJpdmVkU3RhdGUgPSBjb21wb25lbnRDbGFzcy5nZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMocHJvcHMsIG9yaWdpbmFsU3RhdGUpO1xuICAgICAgICAgICAgICAgIHN0YXRlID0ge307XG4gICAgICAgICAgICAgICAgYXNzaWduKHN0YXRlLCBvcmlnaW5hbFN0YXRlKTtcbiAgICAgICAgICAgICAgICBhc3NpZ24oc3RhdGUsIGRlcml2ZWRTdGF0ZSk7XG4gICAgICAgICAgICAgICAgY29tcG9uZW50LnN0YXRlID0gc3RhdGU7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGNvbXBvbmVudC5jb21wb25lbnRXaWxsTW91bnQpIHtcbiAgICAgICAgICAgICAgICBpZiAoIUlTX1BSRUFDVCkge1xuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQudXBkYXRlciA9IFJlYWN0VXBkYXRlcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29tcG9uZW50LmNvbXBvbmVudFdpbGxNb3VudCgpO1xuICAgICAgICAgICAgICAgIHN0YXRlID0gY29tcG9uZW50LnN0YXRlO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChjb21wb25lbnQuVU5TQUZFX2NvbXBvbmVudFdpbGxNb3VudCkge1xuICAgICAgICAgICAgICAgIGlmICghSVNfUFJFQUNUKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudC51cGRhdGVyID0gUmVhY3RVcGRhdGVyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb21wb25lbnQuVU5TQUZFX2NvbXBvbmVudFdpbGxNb3VudCgpO1xuICAgICAgICAgICAgICAgIHN0YXRlID0gY29tcG9uZW50LnN0YXRlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNvbXBvbmVudC5yZWxha3MgJiYgY29tcG9uZW50LnJlbmRlckFzeW5jIGluc3RhbmNlb2YgRnVuY3Rpb24pIHtcbiAgICAgICAgICAgICAgICAvLyBjcmVhdGUgYm9ndXMgbWVhbndoaWxlIG9iamVjdCB0aGF0IGRvZXNuJ3QgZG8gYW55dGhpbmdcbiAgICAgICAgICAgICAgICB2YXIgbWVhbndoaWxlID0gbmV3IE1lYW53aGlsZShjb21wb25lbnQpO1xuICAgICAgICAgICAgICAgIGlmIChJU19QUkVBQ1QpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVuZGVyZWQgPSBjb21wb25lbnQucmVuZGVyQXN5bmMobWVhbndoaWxlLCBwcm9wcywgc3RhdGUsIGNvbnRleHQpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJlbmRlcmVkID0gY29tcG9uZW50LnJlbmRlckFzeW5jKG1lYW53aGlsZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChpc1Byb21pc2UocmVuZGVyZWQpKSB7XG4gICAgICAgICAgICAgICAgICAgIGFzeW5jUmVuZGVyaW5nID0gcmVuZGVyZWQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoSVNfUFJFQUNUKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlbmRlcmVkID0gY29tcG9uZW50LnJlbmRlcihwcm9wcywgc3RhdGUsIGNvbnRleHQpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJlbmRlcmVkID0gY29tcG9uZW50LnJlbmRlcigpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIHN0YXRlbGVzcyBjb21wb25lbnRcbiAgICAgICAgICAgIHZhciBzdGF0ZWxlc3NDb21wb25lbnRGdW5jID0gdHlwZTtcbiAgICAgICAgICAgIHJlbmRlcmVkID0gc3RhdGVsZXNzQ29tcG9uZW50RnVuYyhwcm9wcywgY29udGV4dCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFhc3luY1JlbmRlcmluZykge1xuICAgICAgICAgICAgLy8gaGFydmVzdCB3aGF0IHdhcyByZW5kZXJlZFxuICAgICAgICAgICAgcmV0dXJuIGhhcnZlc3ROb2RlKHJlbmRlcmVkLCBjb250ZXh0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIHdhaXQgZm9yIGFzeW5jaHJvbm91cyByZW5kZXJpbmcgdG8gZmluaXNoXG4gICAgICAgICAgICByZXR1cm4gYXN5bmNSZW5kZXJpbmcudGhlbihmdW5jdGlvbihyZW5kZXJlZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBoYXJ2ZXN0Tm9kZShyZW5kZXJlZCwgY29udGV4dCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIGhhcnZlc3QgSFRNTCt0ZXh0IG5vZGVzIGZyb20gY2hpbGRyZW5cbiAgICAgICAgcmV0dXJuIGhhcnZlc3RDaGlsZHJlbihub2RlLCBjb250ZXh0KTtcbiAgICB9XG59XG5cbi8qKlxuICogSGFydmVzdCBIVE1MIGFuZCB0ZXh0IG5vZGVzIG9mIGEgbm9kZSdzIGNoaWxkcmVuXG4gKlxuICogQHBhcmFtICB7UmVhY3RFbGVtZW50fFZOb2RlfSBub2RlXG4gKiBAcGFyYW0gIHtPYmplY3R9IGNvbnRleHRcbiAqXG4gKiBAcmV0dXJuIHtSZWFjdEVsZW1lbnR8Vk5vZGV8UHJvbWlzZTxSZWFjdEVsZW1lbnR8Vk5vZGU+fVxuICovXG5mdW5jdGlvbiBoYXJ2ZXN0Q2hpbGRyZW4obm9kZSwgY29udGV4dCkge1xuICAgIHZhciBjaGlsZHJlbiA9IGdldE5vZGVDaGlsZHJlbihub2RlKTtcbiAgICB2YXIgbmV3Q2hpbGRyZW47XG4gICAgaWYgKGNoaWxkcmVuIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgICAgbmV3Q2hpbGRyZW4gPSBoYXJ2ZXN0Tm9kZXMoY2hpbGRyZW4sIGNvbnRleHQpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIG5ld0NoaWxkcmVuID0gaGFydmVzdE5vZGUoY2hpbGRyZW4sIGNvbnRleHQpO1xuICAgIH1cbiAgICB2YXIgYXN5bmNSZW5kZXJpbmcgPSBudWxsO1xuICAgIGlmIChpc1Byb21pc2UobmV3Q2hpbGRyZW4pKSB7XG4gICAgICAgIGFzeW5jUmVuZGVyaW5nID0gbmV3Q2hpbGRyZW47XG4gICAgfVxuICAgIGlmIChuZXdDaGlsZHJlbiA9PT0gY2hpbGRyZW4pIHtcbiAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgfVxuICAgIGlmICghYXN5bmNSZW5kZXJpbmcpIHtcbiAgICAgICAgLy8gcmV0dXJuIG5ldyBub2RlIHdpdGggbmV3IGNoaWxkcmVuIGltbWVkaWF0ZVxuICAgICAgICByZXR1cm4gcmVwbGFjZUNoaWxkcmVuKG5vZGUsIG5ld0NoaWxkcmVuKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICAvLyB3YWl0IGZvciBhc3luY2hyb3Vub3VzIHJlbmRlcmluZyBvZiBjaGlsZHJlblxuICAgICAgICByZXR1cm4gYXN5bmNSZW5kZXJpbmcudGhlbihmdW5jdGlvbihuZXdDaGlsZHJlbikge1xuICAgICAgICAgICAgcmV0dXJuIHJlcGxhY2VDaGlsZHJlbihub2RlLCBuZXdDaGlsZHJlbik7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuLyoqXG4gKiBIYXJ2ZXN0IEhUTUwgYW5kIHRleHQgbm9kZXMgZnJvbSBhbiBhcnJheVxuICpcbiAqIEBwYXJhbSAge0FycmF5PFJlYWN0RWxlbWVudHxWTm9kZT59IG5vZGVcbiAqIEBwYXJhbSAge09iamVjdH0gY29udGV4dFxuICpcbiAqIEByZXR1cm4ge0FycmF5fFByb21pc2U8QXJyYXk+fVxuICovXG5mdW5jdGlvbiBoYXJ2ZXN0Tm9kZXMobm9kZXMsIGNvbnRleHQpIHtcbiAgICB2YXIgY2hhbmdlZCA9IGZhbHNlO1xuICAgIHZhciBhc3luY1JlbmRlcmluZ1JlcXVpcmVkID0gZmFsc2U7XG4gICAgdmFyIG5ld05vZGVzID0gbm9kZXMubWFwKGZ1bmN0aW9uKGVsZW1lbnQpIHtcbiAgICAgICAgdmFyIGhhcnZlc3RlZDtcbiAgICAgICAgaWYgKGVsZW1lbnQgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICAgICAgaGFydmVzdGVkID0gaGFydmVzdE5vZGVzKGVsZW1lbnQsIGNvbnRleHQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaGFydmVzdGVkID0gaGFydmVzdE5vZGUoZWxlbWVudCwgY29udGV4dCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlzUHJvbWlzZShoYXJ2ZXN0ZWQpKSB7XG4gICAgICAgICAgICBhc3luY1JlbmRlcmluZ1JlcXVpcmVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBjaGFuZ2VkID0gY2hhbmdlZCB8fCAoaGFydmVzdGVkICE9PSBlbGVtZW50KTtcbiAgICAgICAgcmV0dXJuIGhhcnZlc3RlZDtcbiAgICB9KTtcbiAgICBpZiAoIWFzeW5jUmVuZGVyaW5nUmVxdWlyZWQpIHtcbiAgICAgICAgLy8gcmV0dXJuIG9yaWdpbmFsIGxpc3QgaWYgbm90aGluZyBoYXMgY2hhbmdlZFxuICAgICAgICByZXR1cm4gY2hhbmdlZCA/IG5ld05vZGVzIDogbm9kZXM7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgLy8gd2FpdCBmb3IgcHJvbWlzZXMgdG8gcmVzb2x2ZVxuICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwobmV3Tm9kZXMpO1xuICAgIH1cbn1cblxuLyoqXG4gKiBSZXR1cm4gYSBuZXcgbm9kZSBpZiBjaGlsZHJlbiBhcmUgZGlmZmVyZW50XG4gKlxuICogQHBhcmFtICB7UmVhY3RFbGVtZW50fFZOb2RlfSBub2RlXG4gKiBAcGFyYW0gIHtBcnJheX0gbmV3Q2hpbGRyZW5cbiAqXG4gKiBAcmV0dXJuIHtSZWFjdEVsZW1lbnR8Vk5vZGV9XG4gKi9cbmZ1bmN0aW9uIHJlcGxhY2VDaGlsZHJlbihub2RlLCBuZXdDaGlsZHJlbikge1xuICAgIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQobm9kZSwgdW5kZWZpbmVkLCBuZXdDaGlsZHJlbik7XG59XG5cbi8qKlxuICogQ29weSBwcm9wZXJ0aWVzXG4gKlxuICogQHBhcmFtICB7T2JqZWN0fSBkZXN0XG4gKiBAcGFyYW0gIHtPYmplY3R9IHNyY1xuICpcbiAqIEByZXR1cm4ge09iamVjdH1cbiAqL1xuZnVuY3Rpb24gYXNzaWduKGRlc3QsIHNyYykge1xuICAgIGZvciAodmFyIG5hbWUgaW4gc3JjKSB7XG4gICAgICAgIGRlc3RbbmFtZV0gPSBzcmNbbmFtZV07XG4gICAgfVxuICAgIHJldHVybiBkZXN0O1xufVxuXG4vKipcbiAqIFJldHVybiBhIG5vZGUncyB0eXBlXG4gKlxuICogQHBhcmFtICB7UmVhY3RFbGVtZW50fFZOb2RlfSBub2RlXG4gKlxuICogQHJldHVybiB7U3RyaW5nfEZ1bmN0aW9ufVxuICovXG5mdW5jdGlvbiBnZXROb2RlVHlwZShub2RlKSB7XG4gICAgcmV0dXJuIChJU19QUkVBQ1QpID8gbm9kZS5ub2RlTmFtZSA6IG5vZGUudHlwZTtcbn1cblxuLyoqXG4gKiBSZXR1cm4gdGhlIHByb3BzIG9mIGEgbm9kZVxuICpcbiAqIEBwYXJhbSAge1JlYWN0RWxlbWVudHxWTm9kZX0gbm9kZVxuICogQHBhcmFtICB7RnVuY3Rpb259IHR5cGVcbiAqXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKi9cbmZ1bmN0aW9uIGdldE5vZGVQcm9wcyhub2RlLCB0eXBlKSB7XG5cdHZhciBwcm9wcyA9IHt9XG4gICAgaWYgKElTX1BSRUFDVCkge1xuICAgICAgICBhc3NpZ24ocHJvcHMsIG5vZGUuYXR0cmlidXRlcyk7XG4gICAgICAgIHByb3BzLmNoaWxkcmVuID0gbm9kZS5jaGlsZHJlbjtcbiAgICB9IGVsc2Uge1xuICAgICAgICBhc3NpZ24ocHJvcHMsIG5vZGUucHJvcHMpO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkocHJvcHMsICdjaGlsZHJlbicsIHsgdmFsdWU6IG5vZGUucHJvcHMuY2hpbGRyZW4gfSk7XG4gICAgfVxuXG4gICAgLy8gYXBwbHkgZGVmYXVsdCBwcm9wc1xuICAgIHZhciBkZWZhdWx0UHJvcHMgPSB0eXBlLmRlZmF1bHRQcm9wcztcbiAgICBmb3IgKHZhciBuYW1lIGluIGRlZmF1bHRQcm9wcykge1xuICAgICAgICBpZiAocHJvcHNbbmFtZV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcHJvcHNbbmFtZV0gPSBkZWZhdWx0UHJvcHNbbmFtZV07XG4gICAgICAgIH1cbiAgICB9XG5cdHJldHVybiBwcm9wcztcbn1cblxuLyoqXG4gKiBSZXR1cm4gdGhlIGNoaWxkcmVuIG9mIGEgbm9kZVxuICpcbiAqIEBwYXJhbSAge1JlYWN0RWxlbWVudHxWTm9kZX0gbm9kZVxuICpcbiAqIEByZXR1cm4geyp9XG4gKi9cbmZ1bmN0aW9uIGdldE5vZGVDaGlsZHJlbihub2RlKSB7XG4gICAgaWYgKElTX1BSRUFDVCkge1xuICAgICAgICByZXR1cm4gbm9kZS5jaGlsZHJlbjtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gbm9kZS5wcm9wcy5jaGlsZHJlbjtcbiAgICB9XG59XG5cbi8qKlxuICogUmV0dXJuIHRydWUgaWYgZ2l2ZW4gdmFsdWUgaG9sZCBhIHByb21pc2VcbiAqXG4gKiBAcGFyYW0gIHsqfSAgdmFsdWVcbiAqXG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICovXG5mdW5jdGlvbiBpc1Byb21pc2UodmFsdWUpIHtcbiAgICByZXR1cm4gKHZhbHVlIGluc3RhbmNlb2YgT2JqZWN0ICYmIHZhbHVlLnRoZW4gaW5zdGFuY2VvZiBGdW5jdGlvbik7XG59XG5cbmlmICghSVNfUFJFQUNUKSB7XG4gICAgdmFyIFJlYWN0VXBkYXRlciA9IHtcbiAgICAgICAgZW5xdWV1ZUNhbGxiYWNrOiBmdW5jdGlvbihpbnN0LCBmKSB7XG4gICAgICAgICAgICBmKCk7XG4gICAgICAgIH0sXG4gICAgICAgIGVucXVldWVGb3JjZVVwZGF0ZTogZnVuY3Rpb24oaW5zdCkge1xuICAgICAgICB9LFxuICAgICAgICBlbnF1ZXVlUmVwbGFjZVN0YXRlOiBmdW5jdGlvbihpbnN0LCBzdGF0ZSkge1xuICAgICAgICAgICAgdmFyIG5ld1N0YXRlID0ge307XG4gICAgICAgICAgICBhc3NpZ24obmV3U3RhdGUsIGluc3QpO1xuICAgICAgICAgICAgYXNzaWduKG5ld1N0YXRlLCBzdGF0ZSk7XG4gICAgICAgICAgICBpbnN0LnN0YXRlID0gbmV3U3RhdGU7XG4gICAgICAgIH0sXG4gICAgICAgIGVucXVldWVTZXRTdGF0ZTogZnVuY3Rpb24oaW5zdCwgcGFydGlhbFN0YXRlKSB7XG4gICAgICAgICAgICB2YXIgbmV3U3RhdGUgPSB7fTtcbiAgICAgICAgICAgIGFzc2lnbihuZXdTdGF0ZSwgaW5zdC5zdGF0ZSk7XG4gICAgICAgICAgICBhc3NpZ24obmV3U3RhdGUsIHBhcnRpYWxTdGF0ZSk7XG4gICAgICAgICAgICBpbnN0LnN0YXRlID0gbmV3U3RhdGU7XG4gICAgICAgIH0sXG4gICAgICAgIGlzTW91bnRlZDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSxcbiAgICB9XG59XG5cbmhhcnZlc3QuaGFydmVzdCA9IGhhcnZlc3Q7XG5yZXR1cm4gaGFydmVzdDtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gL2hvbWUvY2xlb25nL3JlbGFrcy1oYXJ2ZXN0L2Z1bmN0aW9uLmpzIiwiZnVuY3Rpb24gTWVhbndoaWxlKGNvbXBvbmVudCwgcHJldmlvdXNseSkge1xuICAgIHZhciByZWxha3MgPSBjb21wb25lbnQucmVsYWtzO1xuICAgIHRoaXMuY29tcG9uZW50ID0gY29tcG9uZW50O1xuICAgIHRoaXMuc3luY2hyb25vdXMgPSBmYWxzZTtcbiAgICB0aGlzLnNob3dpbmdQcm9ncmVzcyA9IGZhbHNlO1xuICAgIHRoaXMuc2hvd2luZ1Byb2dyZXNzSW5pdGlhbGx5ID0gZmFsc2U7XG4gICAgdGhpcy5kZWxheVdoZW5FbXB0eSA9IEluZmluaXR5O1xuICAgIHRoaXMuZGVsYXlXaGVuUmVuZGVyZWQgPSBJbmZpbml0eTtcbiAgICB0aGlzLmNhbmNlbGVkID0gZmFsc2U7XG4gICAgdGhpcy5wcmlvciA9IHJlbGFrcy5wcmV2aW91cztcbiAgICB0aGlzLnByZXZpb3VzID0gcmVsYWtzLnByZXZpb3VzO1xuICAgIHRoaXMuY3VycmVudCA9IHJlbGFrcy5jdXJyZW50O1xuICAgIHRoaXMudXBkYXRlVGltZW91dCA9IDA7XG4gICAgdGhpcy5zdGFydFRpbWUgPSBnZXRUaW1lKCk7XG4gICAgdGhpcy5vbkNhbmNlbCA9IG51bGw7XG4gICAgdGhpcy5vbkNvbXBsZXRlID0gbnVsbDtcbiAgICB0aGlzLm9uUHJvZ3Jlc3MgPSBudWxsO1xufVxuXG52YXIgcHJvdG90eXBlID0gTWVhbndoaWxlLnByb3RvdHlwZTtcblxucHJvdG90eXBlLmNoZWNrID0gZnVuY3Rpb24oKSB7XG59XG5cbnByb3RvdHlwZS5zaG93ID0gZnVuY3Rpb24oZWxlbWVudCwgZGlzcG9zaXRpb24pIHtcbiAgICByZXR1cm4gZmFsc2U7XG59O1xuXG5wcm90b3R5cGUucmV2aXNpbmcgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gZmFsc2U7XG59O1xuXG5wcm90b3R5cGUuZGVsYXkgPSBmdW5jdGlvbihlbXB0eSwgcmVuZGVyZWQpIHtcbn07XG5cbnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbihmb3JjZWQpIHtcbn07XG5cbnByb3RvdHlwZS5jYW5jZWwgPSBmdW5jdGlvbigpIHtcbn07XG5cbnByb3RvdHlwZS5maW5pc2ggPSBmdW5jdGlvbigpIHtcbn07XG5cbnByb3RvdHlwZS5jbGVhciA9IGZ1bmN0aW9uKCkge1xufTtcblxudmFyIHNjcmlwdFN0YXJ0VGltZSA9IG5ldyBEYXRlO1xuXG4vKipcbiAqIFJldHVybiB0aGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBwYXNzZWQgc2luY2Ugc3RhcnQgb2YgdGhpcyBzY3JpcHRcbiAqXG4gKiBAcmV0dXJuIHtOdW1iZXJ9XG4gKi9cbmZ1bmN0aW9uIGdldFRpbWUoKSB7XG4gICAgcmV0dXJuIChuZXcgRGF0ZSkgLSBzY3JpcHRTdGFydFRpbWU7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gcHJvdG90eXBlLmNvbnN0cnVjdG9yO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC9ob21lL2NsZW9uZy9yZWxha3MtaGFydmVzdC9tZWFud2hpbGUuanMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZnVuY3Rpb24nKShyZXF1aXJlKCdwcmVhY3QnKSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gL2hvbWUvY2xlb25nL3JlbGFrcy1oYXJ2ZXN0L3ByZWFjdC5qcyIsInZhciBTU1IgPSAodHlwZW9mIHdpbmRvdyAhPT0gJ29iamVjdCcpO1xudmFyIGRlZmF1bHRPcHRpb25zID0ge1xuICAgIHVzZUhhc2hGYWxsYmFjazogZmFsc2UsXG4gICAgdHJhY2tMaW5rczogKFNTUikgPyBmYWxzZSA6IHRydWUsXG4gICAgdHJhY2tMb2NhdGlvbjogKFNTUikgPyBmYWxzZSA6IHRydWUsXG4gICAgYmFzZVBhdGg6ICcnLFxuICAgIGluaXRpYWxQYXRoOiAnLycsXG59O1xuXG5mdW5jdGlvbiBSZWxha3NSb3V0ZU1hbmFnZXIob3B0aW9ucykge1xuICAgIHRoaXMudXJsID0gJyc7XG4gICAgdGhpcy5uYW1lID0gJyc7XG4gICAgdGhpcy5wYXJhbXMgPSAnJztcbiAgICB0aGlzLmNvbnRleHQgPSAnJztcbiAgICB0aGlzLnJvdXRlcyA9IHt9O1xuICAgIHRoaXMuaGlzdG9yeSA9IFtdO1xuICAgIHRoaXMuc3RhcnRUaW1lID0gZ2V0VGltZSgpO1xuICAgIHRoaXMubGlzdGVuZXJzID0gW107XG4gICAgdGhpcy5vcHRpb25zID0ge307XG4gICAgdGhpcy5yZXdyaXRlcyA9IFtdO1xuICAgIGZvciAodmFyIG5hbWUgaW4gZGVmYXVsdE9wdGlvbnMpIHtcbiAgICAgICAgaWYgKG9wdGlvbnMgJiYgb3B0aW9uc1tuYW1lXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLm9wdGlvbnNbbmFtZV0gPSBvcHRpb25zW25hbWVdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5vcHRpb25zW25hbWVdID0gZGVmYXVsdE9wdGlvbnNbbmFtZV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKG9wdGlvbnMgJiYgb3B0aW9ucy5yb3V0ZXMpIHtcbiAgICAgICAgdGhpcy5hZGRSb3V0ZXMob3B0aW9ucy5yb3V0ZXMpO1xuICAgIH1cbiAgICBpZiAob3B0aW9ucyAmJiBvcHRpb25zLnJld3JpdGVzKSB7XG4gICAgICAgIHRoaXMuYWRkUmV3cml0ZXMob3B0aW9ucy5yZXdyaXRlcyk7XG4gICAgfVxuXG4gICAgdGhpcy5oYW5kbGVMaW5rQ2xpY2sgPSB0aGlzLmhhbmRsZUxpbmtDbGljay5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaGFuZGxlUG9wU3RhdGUgPSB0aGlzLmhhbmRsZVBvcFN0YXRlLmJpbmQodGhpcyk7XG59XG5cbnZhciBwcm90b3R5cGUgPSBSZWxha3NSb3V0ZU1hbmFnZXIucHJvdG90eXBlO1xuXG5wcm90b3R5cGUuaW5pdGlhbGl6ZSA9IGZ1bmN0aW9uKCkge1xuICAgIGlmICh0aGlzLm9wdGlvbnMudHJhY2tMaW5rcykge1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmhhbmRsZUxpbmtDbGljayk7XG4gICAgfVxuICAgIHZhciB1cmw7XG4gICAgaWYgKHRoaXMub3B0aW9ucy50cmFja0xvY2F0aW9uKSB7XG4gICAgICAgIHVybCA9IHRoaXMuZ2V0TG9jYXRpb25VUkwod2luZG93LmxvY2F0aW9uKTtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJywgdGhpcy5oYW5kbGVQb3BTdGF0ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdXJsID0gdGhpcy5vcHRpb25zLmluaXRpYWxQYXRoO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5jaGFuZ2UodXJsLCB7IHJlcGxhY2U6IHRydWUgfSk7XG59O1xuXG5wcm90b3R5cGUuc2h1dGRvd24gPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgb3B0ID0gdGhpcy5vcHRpb25zO1xuICAgIGlmIChvcHQudHJhY2tMaW5rcykge1xuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmhhbmRsZUxpbmtDbGljayk7XG4gICAgfVxuICAgIGlmIChvcHQudHJhY2tMb2NhdGlvbikge1xuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCB0aGlzLmhhbmRsZVBvcFN0YXRlKTtcbiAgICB9XG59O1xuXG5wcm90b3R5cGUuYWRkRXZlbnRMaXN0ZW5lciA9IGZ1bmN0aW9uKHR5cGUsIGhhbmRsZXIpIHtcbiAgICB0aGlzLmxpc3RlbmVycy5wdXNoKHsgIHR5cGU6IHR5cGUsICBoYW5kbGVyOiBoYW5kbGVyIH0pO1xufTtcblxucHJvdG90eXBlLnJlbW92ZUV2ZW50TGlzdGVuZXIgPSBmdW5jdGlvbih0eXBlLCBoYW5kbGVyKSB7XG4gICAgdGhpcy5saXN0ZW5lcnMgPSB0aGlzLmxpc3RlbmVycy5maWx0ZXIoZnVuY3Rpb24obGlzdGVuZXIpIHtcbiAgICAgICAgcmV0dXJuICEobGlzdGVuZXIudHlwZSA9PT0gdHlwZSAmJiBsaXN0ZW5lci5oYW5kbGVyID09PSBoYW5kbGVyKTtcbiAgICB9KVxufTtcblxucHJvdG90eXBlLnRyaWdnZXJFdmVudCA9IGZ1bmN0aW9uKGV2dCkge1xuICAgIHZhciBmaXJlZCA9IGZhbHNlO1xuICAgIHRoaXMubGlzdGVuZXJzLmZvckVhY2goZnVuY3Rpb24obGlzdGVuZXIpIHtcbiAgICAgICAgaWYgKGxpc3RlbmVyLnR5cGUgPT09IGV2dC50eXBlICYmIGxpc3RlbmVyLmhhbmRsZXIpIHtcbiAgICAgICAgICAgIGZpcmVkID0gdHJ1ZTtcbiAgICAgICAgICAgIGxpc3RlbmVyLmhhbmRsZXIoZXZ0KTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBmaXJlZDtcbn07XG5cbnByb3RvdHlwZS5hZGRSb3V0ZXMgPSBmdW5jdGlvbihyb3V0ZXMpIHtcbiAgICBmb3IgKHZhciBuYW1lIGluIHJvdXRlcykge1xuICAgICAgICBpZiAocm91dGVzW25hbWVdICE9PSB0aGlzLnJvdXRlc1tuYW1lXSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucm91dGVzW25hbWVdKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdEdXBsaWNhdGUgcm91dGU6ICcgKyBuYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMucm91dGVzW25hbWVdID0gcm91dGVzW25hbWVdO1xuICAgICAgICB9XG4gICAgfVxufTtcblxucHJvdG90eXBlLnJlbW92ZVJvdXRlcyA9IGZ1bmN0aW9uKHJvdXRlcykge1xuICAgIGZvciAodmFyIG5hbWUgaW4gcm91dGVzKSB7XG4gICAgICAgIGlmIChyb3V0ZXNbbmFtZV0gPT09IHRoaXMucm91dGVzW25hbWVdKSB7XG4gICAgICAgICAgICBkZWxldGUgdGhpcy5yb3V0ZXNbbmFtZV07XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG5wcm90b3R5cGUuYWRkUmV3cml0ZXMgPSBmdW5jdGlvbihyZXdyaXRlcykge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgcmV3cml0ZXMuZm9yRWFjaChmdW5jdGlvbihyZXdyaXRlKSB7XG4gICAgICAgIF90aGlzLnJld3JpdGVzLnB1c2gocmV3cml0ZSk7XG4gICAgfSk7XG59O1xuXG5wcm90b3R5cGUucmVtb3ZlUmV3cml0ZXMgPSBmdW5jdGlvbihyZXdyaXRlcykge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgcmV3cml0ZXMuZm9yRWFjaChmdW5jdGlvbihyZXdyaXRlKSB7XG4gICAgICAgIHZhciBpbmRleCA9IF90aGlzLnJld3JpdGVzLmluZGV4T2YocmV3cml0ZSk7XG4gICAgICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgICAgICAgIF90aGlzLnJld3JpdGVzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIH1cbiAgICB9KTtcbn07XG5cbi8qKlxuICogQ2hhbmdlIHRoZSByb3V0ZSB0byB3aGF0IHRoZSBnaXZlbiBVUkwgcG9pbnRzIHRvXG4gKlxuICogQHBhcmFtICB7U3RyaW5nfSB1cmxcbiAqIEBwYXJhbSAge09iamVjdHx1bmRlZmluZWR9IG9wdGlvbnNcbiAqXG4gKiBAcmV0dXJuIHtQcm9taXNlPEJvb2xlYW4+fVxuICovXG5wcm90b3R5cGUuY2hhbmdlID0gZnVuY3Rpb24odXJsLCBvcHRpb25zKSB7XG4gICAgdmFyIG1hdGNoID0gdGhpcy5tYXRjaCh1cmwpO1xuICAgIGlmIChtYXRjaCkge1xuICAgICAgICB2YXIgcmVwbGFjZSA9IChvcHRpb25zKSA/IG9wdGlvbnMucmVwbGFjZSB8fCBmYWxzZSA6IGZhbHNlO1xuICAgICAgICB2YXIgdGltZSA9IGdldFRpbWUoKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuYXBwbHkobWF0Y2gsIHRpbWUsIHRydWUsIHJlcGxhY2UpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBlcnIgPSBuZXcgRXJyb3IoJ05vIHJvdXRlJyk7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnIpO1xuICAgIH1cbn07XG5cbi8qKlxuICogQ2hhbmdlIHRoZSByb3V0ZSB0byB0aGUgb25lIGdpdmVuLCBhZGRpbmcgdG8gaGlzdG9yeVxuICpcbiAqIEBwYXJhbSAge1N0cmluZ30gbmFtZVxuICogQHBhcmFtICB7T2JqZWN0fSBwYXJhbXNcbiAqXG4gKiBAcmV0dXJuIHtQcm9taXNlfVxuICovXG5wcm90b3R5cGUucHVzaCA9IGZ1bmN0aW9uKG5hbWUsIHBhcmFtcykge1xuICAgIHRyeSB7XG4gICAgICAgIHZhciB1cmwgPSB0aGlzLmZpbmQobmFtZSwgcGFyYW1zKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2hhbmdlKHVybCk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnIpO1xuICAgIH1cbn07XG5cbi8qKlxuICogUmVwbGFjZSB0aGUgY3VycmVudCByb3V0ZSB3aXRoIHRoZSBvbmUgZ2l2ZW5cbiAqXG4gKiBAcGFyYW0gIHtTdHJpbmd9IG5hbWVcbiAqIEBwYXJhbSAge09iamVjdH0gcGFyYW1zXG4gKlxuICogQHJldHVybiB7UHJvbWlzZX1cbiAqL1xucHJvdG90eXBlLnJlcGxhY2UgPSBmdW5jdGlvbihuYW1lLCBwYXJhbXMpIHtcbiAgICB0cnkge1xuICAgICAgICB2YXIgdXJsID0gdGhpcy5maW5kKG5hbWUsIHBhcmFtcyk7XG4gICAgICAgIHJldHVybiB0aGlzLmNoYW5nZSh1cmwsIHsgcmVwbGFjZTogdHJ1ZSB9KTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycik7XG4gICAgfVxufTtcblxuLyoqXG4gKiBHZXQgYSBVUkwgZm9yIGEgcm91dGUgZm9yIHRoZSBwYXJhbWV0ZXJzIGdpdmVuXG4gKlxuICogQHBhcmFtICB7U3RyaW5nfSBuYW1lXG4gKiBAcGFyYW0gIHtPYmplY3R9IHBhcmFtc1xuICogQHBhcmFtICB7T2JqZWN0fHVuZGVmaW5lZH0gbmV3Q29udGV4dFxuICpcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqL1xucHJvdG90eXBlLmZpbmQgPSBmdW5jdGlvbihuYW1lLCBwYXJhbXMsIG5ld0NvbnRleHQpIHtcbiAgICB2YXIgdXJsUGFydHMgPSB0aGlzLmZpbGwobmFtZSwgcGFyYW1zKTtcbiAgICB2YXIgY29udGV4dCA9IHRoaXMuY29udGV4dDtcbiAgICBpZiAobmV3Q29udGV4dCkge1xuICAgICAgICBjb250ZXh0ID0ge307XG4gICAgICAgIGZvciAodmFyIG5hbWUgaW4gdGhpcy5jb250ZXh0KSB7XG4gICAgICAgICAgICBjb250ZXh0W25hbWVdID0gdGhpcy5jb250ZXh0W25hbWVdO1xuICAgICAgICB9XG4gICAgICAgIGZvciAodmFyIG5hbWUgaW4gbmV3Q29udGV4dCkge1xuICAgICAgICAgICAgY29udGV4dFtuYW1lXSA9IG5ld0NvbnRleHRbbmFtZV07XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICBjb250ZXh0ID0gdGhpcy5jb250ZXh0O1xuICAgIH1cbiAgICB0aGlzLnJlYmFzZSgndG8nLCB1cmxQYXJ0cyk7XG4gICAgdGhpcy5yZXdyaXRlKCd0bycsIHVybFBhcnRzLCBjb250ZXh0KTtcbiAgICB2YXIgdXJsID0gY29tcG9zZVVSTCh1cmxQYXJ0cyk7XG4gICAgaWYgKHRoaXMub3B0aW9ucy51c2VIYXNoRmFsbGJhY2spIHtcbiAgICAgICAgdXJsID0gJyMnICsgdXJsO1xuICAgIH1cbiAgICByZXR1cm4gdXJsO1xufTtcblxuLyoqXG4gKiBHbyBiYWNrIHRvIHRoZSBwcmV2aW91cyByb3V0ZSAoaWYgcG9zc2libGUpXG4gKlxuICogQHJldHVybiB7UHJvbWlzZX1cbiAqL1xucHJvdG90eXBlLmJhY2sgPSBmdW5jdGlvbigpIHtcbiAgICBpZiAodGhpcy5oaXN0b3J5Lmxlbmd0aCA8PSAxKSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoJ0Nhbm5vdCBnbyBiZXlvbmQgc3RhcnRpbmcgcGFnZScpKTtcbiAgICB9XG4gICAgaWYgKHRoaXMub3B0aW9ucy50cmFja0xvY2F0aW9uKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICAgIF90aGlzLmJhY2tSZXNvbHZlID0gcmVzb2x2ZTtcbiAgICAgICAgICAgIF90aGlzLmJhY2tSZWplY3QgPSByZWplY3Q7XG4gICAgICAgICAgICB3aW5kb3cuaGlzdG9yeS5iYWNrKCk7XG5cbiAgICAgICAgICAgIC8vIGp1c3QgaW4gY2FzZSB0aGUgb3BlcmF0aW9uIGZhaWxzIGZvciBzb21lIHJlYXNvblxuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICB2YXIgcmVqZWN0ID0gX3RoaXMuYmFja1JlamVjdDtcbiAgICAgICAgICAgICAgICBpZiAocmVqZWN0KSB7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLmJhY2tSZXNvbHZlID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5iYWNrUmVqZWN0ID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgICAgICByZWplY3QobmV3IEVycm9yKCdVbmFibGUgdG8gbmF2aWdhdGUgdG8gcHJldmlvdXMgcGFnZScpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCA1MCk7XG4gICAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBwcmV2aW91cyA9IHRoaXMuaGlzdG9yeVt0aGlzLmhpc3RvcnkubGVuZ3RoIC0gMl07XG4gICAgICAgIHJldHVybiB0aGlzLmFwcGx5KHByZXZpb3VzLCBwcmV2aW91cy50aW1lLCBmYWxzZSwgZmFsc2UpO1xuICAgIH1cbn07XG5cbi8qKlxuICogTWF0Y2ggYSBVUkwgd2l0aCBhIHJvdXRlXG4gKlxuICogQHBhcmFtICB7U3RyaW5nfSB1cmxcbiAqXG4gKiBAcmV0dXJuIHtPYmplY3R8bnVsbH1cbiAqL1xucHJvdG90eXBlLm1hdGNoID0gZnVuY3Rpb24odXJsKSB7XG4gICAgLy8gcGVyZm9ybSByZXdyaXRlc1xuICAgIHZhciB1cmxQYXJ0cyA9IHBhcnNlVVJMKHVybCk7XG4gICAgdmFyIGNvbnRleHQgPSB7fTtcbiAgICB0aGlzLnJld3JpdGUoJ2Zyb20nLCB1cmxQYXJ0cywgY29udGV4dCk7XG5cbiAgICAvLyByZW1vdmUgYmFzZSBwYXRoXG4gICAgaWYgKCF0aGlzLnJlYmFzZSgnZnJvbScsIHVybFBhcnRzKSkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICAvLyBsb29rIGZvciBtYXRjaGluZyByb3V0ZVxuICAgIHZhciBwYXJhbXMgPSB7fTtcbiAgICB2YXIgcm91dGVzID0gdGhpcy5yb3V0ZXM7XG4gICAgZm9yICh2YXIgbmFtZSBpbiByb3V0ZXMpIHtcbiAgICAgICAgdmFyIHJvdXRlRGVmID0gcm91dGVzW25hbWVdO1xuICAgICAgICB2YXIgdHlwZXMgPSByb3V0ZURlZi5wYXJhbXM7XG4gICAgICAgIC8vIGlmIHRoZSBwYXRoIG1hdGNoZXMsIHRoZW4gaXQncyBhIG1hdGNoXG4gICAgICAgIC8vIHF1ZXJ5IGFuZCBoYXNoIHZhcmlhYmxlcyBhcmUgdHJlYXRlZCBhcyBvcHRpb25zXG4gICAgICAgIGlmIChtYXRjaFRlbXBsYXRlKHVybFBhcnRzLnBhdGgsIHJvdXRlRGVmLnBhdGgsIHR5cGVzLCBwYXJhbXMsIHRydWUpKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBxdWVyeVZhck5hbWUgaW4gcm91dGVEZWYucXVlcnkpIHtcbiAgICAgICAgICAgICAgICB2YXIgcXVlcnlWYXJUZW1wbGF0ZSA9IHJvdXRlRGVmLnF1ZXJ5W3F1ZXJ5VmFyTmFtZV07XG4gICAgICAgICAgICAgICAgdmFyIHF1ZXJ5VmFyVmFsdWUgPSB1cmxQYXJ0cy5xdWVyeVtxdWVyeVZhck5hbWVdO1xuICAgICAgICAgICAgICAgIG1hdGNoVGVtcGxhdGUocXVlcnlWYXJWYWx1ZSwgcXVlcnlWYXJUZW1wbGF0ZSwgdHlwZXMsIHBhcmFtcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBtYXRjaFRlbXBsYXRlKHVybFBhcnRzLmhhc2gsIHJvdXRlRGVmLmhhc2gsIHR5cGVzLCBwYXJhbXMpO1xuICAgICAgICAgICAgcmV0dXJuIHsgdXJsOiB1cmwsIG5hbWU6IG5hbWUsIHBhcmFtczogcGFyYW1zLCBjb250ZXh0OiBjb250ZXh0IH07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG59O1xuXG4vKipcbiAqIExvYWQgbmVjZXNzYXJ5IG1vZHVsZShzKSBmb3IgYSByb3V0ZSwgYXBwZW5kIHRvIGhpc3RvcnksIHNldCB0aGUgc3RhdGUsXG4gKiBhbmQgdHJpZ2dlciBjaGFuZ2UgZXZlbnRcbiAqXG4gKiBAcGFyYW0gIHtPYmplY3R9IG1hdGNoXG4gKiBAcGFyYW0gIHtTdHJpbmd9IHRpbWVcbiAqIEBwYXJhbSAge0Jvb2xlYW59IHN5bmNcbiAqIEBwYXJhbSAge0Jvb2xlYW59IHJlcGxhY2VcbiAqXG4gKiBAcmV0dXJuIHtQcm9taXNlPEJvb2xlYW4+fVxuICovXG5wcm90b3R5cGUuYXBwbHkgPSBmdW5jdGlvbihtYXRjaCwgdGltZSwgc3luYywgcmVwbGFjZSkge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgdmFyIGNvbmZpcm1hdGlvbkV2ZW50ID0gbmV3IFJlbGFrc1JvdXRlTWFuYWdlckV2ZW50KCdiZWZvcmVjaGFuZ2UnLCB0aGlzLCBtYXRjaCk7XG4gICAgdGhpcy50cmlnZ2VyRXZlbnQoY29uZmlybWF0aW9uRXZlbnQpO1xuICAgIHJldHVybiBjb25maXJtYXRpb25FdmVudC53YWl0Rm9yRGVjaXNpb24oKS50aGVuKGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAoY29uZmlybWF0aW9uRXZlbnQuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBfdGhpcy5sb2FkKG1hdGNoKS50aGVuKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgaWYgKHRpbWUgPj0gX3RoaXMuc3RhcnRUaW1lKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFyZXBsYWNlKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIHNlZSBpZiB3ZSdyZSBnb2luZyBiYWNrd2FyZFxuICAgICAgICAgICAgICAgICAgICB2YXIgaW5kZXggPSAtMTtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBfdGhpcy5oaXN0b3J5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoX3RoaXMuaGlzdG9yeVtpXS50aW1lID09PSB0aW1lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXggPSBpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHJlbW92ZSBlbnRyeSBhbmQgdGhvc2UgYWZ0ZXIgaXRcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLmhpc3Rvcnkuc3BsaWNlKGluZGV4KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gZ29pbmcgaW50byBoaXN0b3J5IHByaW9yIHRvIHBhZ2UgbG9hZFxuICAgICAgICAgICAgICAgIC8vIHJlbWVtYmVyIHRoZSB0aW1lIGZvcndhcmQgbW92ZW1lbnQgZnJvbSBkZWVwIGludG8gdGhlIHBhc3RcbiAgICAgICAgICAgICAgICAvLyB3b3JrcyBjb3JyZWN0bHlcbiAgICAgICAgICAgICAgICBfdGhpcy5oaXN0b3J5ID0gW107XG4gICAgICAgICAgICAgICAgX3RoaXMuc3RhcnRUaW1lID0gdGltZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBlbnRyeSA9ICB7XG4gICAgICAgICAgICAgICAgdXJsOiBtYXRjaC51cmwsXG4gICAgICAgICAgICAgICAgbmFtZTogbWF0Y2gubmFtZSxcbiAgICAgICAgICAgICAgICBwYXJhbXM6IG1hdGNoLnBhcmFtcyxcbiAgICAgICAgICAgICAgICBjb250ZXh0OiBtYXRjaC5jb250ZXh0LFxuICAgICAgICAgICAgICAgIHRpbWU6IHRpbWVcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBpZiAocmVwbGFjZSAmJiBfdGhpcy5oaXN0b3J5Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5oaXN0b3J5W190aGlzLmhpc3RvcnkubGVuZ3RoIC0gMV0gPSBlbnRyeTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuaGlzdG9yeS5wdXNoKGVudHJ5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChzeW5jKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuc2V0TG9jYXRpb25VUkwobWF0Y2gudXJsLCB7IHRpbWU6IHRpbWUgfSwgcmVwbGFjZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBfdGhpcy51cmwgPSBtYXRjaC51cmw7XG4gICAgICAgICAgICBfdGhpcy5uYW1lID0gbWF0Y2gubmFtZTtcbiAgICAgICAgICAgIF90aGlzLnBhcmFtcyA9IG1hdGNoLnBhcmFtcztcbiAgICAgICAgICAgIF90aGlzLmNvbnRleHQgPSBtYXRjaC5jb250ZXh0O1xuXG4gICAgICAgICAgICBfdGhpcy50cmlnZ2VyRXZlbnQobmV3IFJlbGFrc1JvdXRlTWFuYWdlckV2ZW50KCdjaGFuZ2UnLCBfdGhpcykpO1xuICAgICAgICB9KTtcbiAgICB9KTtcbn07XG5cbi8qKlxuICogRmlsbCBhIHJvdXRlIHRlbXBsYXRlcyB3aXRoIHBhcmFtZXRlcnNcbiAqXG4gKiBAcGFyYW0gIHtTdHJpbmd9IG5hbWVcbiAqIEBwYXJhbSAge09iamVjdH0gcGFyYW1zXG4gKlxuICogQHJldHVybiB7T2JqZWN0fVxuICovXG5wcm90b3R5cGUuZmlsbCA9IGZ1bmN0aW9uKG5hbWUsIHBhcmFtcykge1xuICAgIHZhciByb3V0ZURlZiA9IHRoaXMucm91dGVzW25hbWVdO1xuICAgIGlmICghcm91dGVEZWYpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdObyByb3V0ZSBieSB0aGF0IG5hbWU6ICcgKyBuYW1lKTtcbiAgICB9XG4gICAgdmFyIHR5cGVzID0gcm91dGVEZWYucGFyYW1zO1xuICAgIHZhciBwYXRoID0gZmlsbFRlbXBsYXRlKHJvdXRlRGVmLnBhdGgsIHR5cGVzLCBwYXJhbXMsIHRydWUpO1xuICAgIHZhciBoYXNoID0gZmlsbFRlbXBsYXRlKHJvdXRlRGVmLmhhc2gsIHR5cGVzLCBwYXJhbXMpO1xuICAgIHZhciBxdWVyeSA9IHt9O1xuICAgIGZvciAodmFyIHF1ZXJ5VmFyTmFtZSBpbiByb3V0ZURlZi5xdWVyeSkge1xuICAgICAgICB2YXIgcXVlcnlWYXJUZW1wbGF0ZSA9IHJvdXRlRGVmLnF1ZXJ5W3F1ZXJ5VmFyTmFtZV07XG4gICAgICAgIHZhciBxdWVyeVZhclZhbHVlID0gZmlsbFRlbXBsYXRlKHF1ZXJ5VmFyVGVtcGxhdGUsIHR5cGVzLCBwYXJhbXMpO1xuICAgICAgICBpZiAocXVlcnlWYXJWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBxdWVyeVtxdWVyeVZhck5hbWVdID0gcXVlcnlWYXJWYWx1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4geyBwYXRoOiBwYXRoLCBoYXNoOiBoYXNoLCBxdWVyeTogcXVlcnkgfTtcbn07XG5cbi8qKlxuICogQXBwbHkgcmV3cml0ZXMgb24gVVJMIHBhcnRzXG4gKlxuICogQHBhcmFtICB7U3RyaW5nfSBkaXJlY3Rpb25cbiAqIEBwYXJhbSAge09iamVjdH0gdXJsUGFydHNcbiAqIEBwYXJhbSAge09iamVjdH0gY29udGV4dFxuICovXG5wcm90b3R5cGUucmV3cml0ZSA9IGZ1bmN0aW9uKGRpcmVjdGlvbiwgdXJsUGFydHMsIGNvbnRleHQpIHtcbiAgICBpZiAoZGlyZWN0aW9uID09PSAnZnJvbScpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnJld3JpdGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgZnJvbSA9IHRoaXMucmV3cml0ZXNbaV0uZnJvbTtcbiAgICAgICAgICAgIGlmIChmcm9tKSB7XG4gICAgICAgICAgICAgICAgaWYgKGZyb20odXJsUGFydHMsIGNvbnRleHQpID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGRpcmVjdGlvbiA9PT0gJ3RvJykge1xuICAgICAgICBmb3IgKHZhciBpID0gdGhpcy5yZXdyaXRlcy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICAgICAgdmFyIHRvID0gdGhpcy5yZXdyaXRlc1tpXS50bztcbiAgICAgICAgICAgIGlmICh0bykge1xuICAgICAgICAgICAgICAgIGlmICh0byh1cmxQYXJ0cywgY29udGV4dCkgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn07XG5cbi8qKlxuICogQWRkIG9yIHJlbW92ZSBiYXNlUGF0aCBmcm9tIGEgVVJMJ3MgcGF0aCBwYXJ0LiBSZXR1cm4gZmFsc2UgaWYgaXQgY2FuJ3QgYmUgZG9uZS5cbiAqXG4gKiBAcGFyYW0gIHtTdHJpbmd9IGRpcmVjdGlvblxuICogQHBhcmFtICB7T2JqZWN0fSB1cmxQYXJ0c1xuICpcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKi9cbnByb3RvdHlwZS5yZWJhc2UgPSBmdW5jdGlvbihkaXJlY3Rpb24sIHVybFBhcnRzKSB7XG4gICAgdmFyIGJhc2VQYXRoID0gdGhpcy5vcHRpb25zLmJhc2VQYXRoO1xuICAgIGlmIChkaXJlY3Rpb24gPT09ICdmcm9tJykge1xuICAgICAgICB2YXIgbmV3UGF0aCA9IGdldFJlbGF0aXZlUGF0aChiYXNlUGF0aCwgdXJsUGFydHMucGF0aCk7XG4gICAgICAgIGlmIChuZXdQYXRoKSB7XG4gICAgICAgICAgICB1cmxQYXJ0cy5wYXRoID0gbmV3UGF0aDtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgfSBlbHNlIGlmIChkaXJlY3Rpb24gPT09ICd0bycpIHtcbiAgICAgICAgaWYgKGJhc2VQYXRoKSB7XG4gICAgICAgICAgICB1cmxQYXJ0cy5wYXRoID0gYmFzZVBhdGggKyB1cmxQYXJ0cy5wYXRoO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG59O1xuXG5wcm90b3R5cGUubG9hZCA9IGZ1bmN0aW9uKG1hdGNoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgdmFyIHJlc3VsdDtcbiAgICAgICAgdmFyIHJvdXRlRGVmID0gdGhpcy5yb3V0ZXNbbWF0Y2gubmFtZV07XG4gICAgICAgIGlmIChyb3V0ZURlZiAmJiByb3V0ZURlZi5sb2FkKSB7XG4gICAgICAgICAgICByZXN1bHQgPSByb3V0ZURlZi5sb2FkKG1hdGNoLnBhcmFtcywgbWF0Y2guY29udGV4dCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShyZXN1bHQpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyKTtcbiAgICB9XG59O1xuXG4vKipcbiAqIFJldHVybiBhIHJlbGF0aXZlIFVSTCBvciBlbXB0eSBzdHJpbmcgKGlmIGxpbmsgaXMgcG9pbnRpbmcgdG8gYW4gZXh0ZXJuYWwgcGFnZSlcbiAqXG4gKiBAcGFyYW0gIHtMb2NhdGlvbnxIVE1MQW5jaG9yRWxlbWVudH0gbG9jYXRpb25cbiAqXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKi9cbnByb3RvdHlwZS5nZXRMb2NhdGlvblVSTCA9IGZ1bmN0aW9uKGxvY2F0aW9uKSB7XG4gICAgdmFyIGRvY0xvY2F0aW9uID0gd2luZG93LmxvY2F0aW9uO1xuICAgIGlmIChsb2NhdGlvbiAhPT0gZG9jTG9jYXRpb24pIHtcbiAgICAgICAgaWYgKGxvY2F0aW9uLnByb3RvY29sICE9PSBkb2NMb2NhdGlvbi5wcm90b2NvbCkge1xuICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICB9IGVsc2UgaWYgKGxvY2F0aW9uLmhvc3QgIT09IGRvY0xvY2F0aW9uLmhvc3QpIHtcbiAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5vcHRpb25zLnVzZUhhc2hGYWxsYmFjaykge1xuICAgICAgICAgICAgaWYgKGxvY2F0aW9uLnBhdGhuYW1lICE9PSBkb2NMb2NhdGlvbi5wYXRobmFtZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChsb2NhdGlvbi5zZWFyY2ggIT09IGRvY0xvY2F0aW9uLnNlYXJjaCkge1xuICAgICAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAodGhpcy5vcHRpb25zLnVzZUhhc2hGYWxsYmFjaykge1xuICAgICAgICB2YXIgcGF0aCA9IGxvY2F0aW9uLmhhc2guc3Vic3RyKDEpO1xuICAgICAgICByZXR1cm4gcGF0aCB8fCAnLyc7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGxvY2F0aW9uLnBhdGhuYW1lICsgbG9jYXRpb24uc2VhcmNoICsgbG9jYXRpb24uaGFzaDtcbiAgICB9XG59O1xuXG5wcm90b3R5cGUuc2V0TG9jYXRpb25VUkwgPSBmdW5jdGlvbih1cmwsIHN0YXRlLCByZXBsYWNlKSB7XG4gICAgaWYgKHRoaXMub3B0aW9ucy50cmFja0xvY2F0aW9uKSB7XG4gICAgICAgIHZhciBjdXJyZW50VVJMID0gdGhpcy5nZXRMb2NhdGlvblVSTChsb2NhdGlvbik7XG4gICAgICAgIGlmIChjdXJyZW50VVJMICE9PSB1cmwpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMudXNlSGFzaEZhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgdXJsID0gJyMnICsgdXJsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHJlcGxhY2UpIHtcbiAgICAgICAgICAgICAgICB3aW5kb3cuaGlzdG9yeS5yZXBsYWNlU3RhdGUoc3RhdGUsICcnLCB1cmwpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUoc3RhdGUsICcnLCB1cmwpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufTtcblxuLyoqXG4gKiBDYWxsZWQgd2hlbiB0aGUgdXNlciBjbGlja3Mgb24gdGhlIHBhZ2VcbiAqXG4gKiBAcGFyYW0gIHtFdmVudH0gZXZ0XG4gKi9cbnByb3RvdHlwZS5oYW5kbGVMaW5rQ2xpY2sgPSBmdW5jdGlvbihldnQpIHtcbiAgICBpZiAoZXZ0LmJ1dHRvbiA9PT0gMCkge1xuICAgICAgICB2YXIgbGluayA9IGdldExpbmsoZXZ0LnRhcmdldCk7XG4gICAgICAgIGlmIChsaW5rICYmICFsaW5rLnRhcmdldCAmJiAhbGluay5kb3dubG9hZCkge1xuICAgICAgICAgICAgdmFyIHVybCA9IHRoaXMuZ2V0TG9jYXRpb25VUkwobGluayk7XG4gICAgICAgICAgICBpZiAodXJsKSB7XG4gICAgICAgICAgICAgICAgdmFyIG1hdGNoID0gdGhpcy5tYXRjaCh1cmwpO1xuICAgICAgICAgICAgICAgIGlmIChtYXRjaCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgdGltZSA9IGdldFRpbWUoKTtcbiAgICAgICAgICAgICAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgIGV2dC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hcHBseShtYXRjaCwgdGltZSwgdHJ1ZSwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn07XG5cbi8qKlxuICogQ2FsbGVkIHdoZW4gdGhlIHVzZXIgcHJlc3MgdGhlIGJhY2sgYnV0dG9uXG4gKlxuICogQHBhcmFtICB7RXZlbnR9IGV2dFxuICovXG5wcm90b3R5cGUuaGFuZGxlUG9wU3RhdGUgPSBmdW5jdGlvbihldnQpIHtcbiAgICB2YXIgdGltZSA9IChldnQuc3RhdGUpID8gZXZ0LnN0YXRlLnRpbWUgOiBnZXRUaW1lKCk7XG4gICAgdmFyIHVybCA9IHRoaXMuZ2V0TG9jYXRpb25VUkwod2luZG93LmxvY2F0aW9uKTtcbiAgICB2YXIgbWF0Y2ggPSB0aGlzLm1hdGNoKHVybCk7XG4gICAgdmFyIHByb21pc2UgPSB0aGlzLmFwcGx5KG1hdGNoLCB0aW1lLCBmYWxzZSwgZmFsc2UpO1xuXG4gICAgLy8gcmVzb2x2ZSBwcm9taXNlIGNyZWF0ZWQgaW4gYmFjaygpXG4gICAgdmFyIHJlc29sdmUgPSB0aGlzLmJhY2tSZXNvbHZlO1xuICAgIHZhciByZWplY3QgPSB0aGlzLmJhY2tSZWplY3Q7XG4gICAgaWYgKHJlc29sdmUpIHtcbiAgICAgICAgdGhpcy5iYWNrUmVzb2x2ZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy5iYWNrUmVqZWN0ID0gdW5kZWZpbmVkO1xuICAgICAgICBwcm9taXNlLnRoZW4ocmVzb2x2ZSwgcmVqZWN0KTtcbiAgICB9XG59O1xuXG52YXIgdmFyaWFibGVSZWdFeHAgPSAvXFwkXFx7XFx3K1xcfS9nO1xudmFyIHJlZ0V4cENhY2hlID0ge307XG5cbmZ1bmN0aW9uIGdldFVSTFRlbXBsYXRlUmVnRXhwKHRlbXBsYXRlLCB0eXBlcywgaXNQYXRoKSB7XG4gICAgaWYgKCF0ZW1wbGF0ZSkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgdmFyIHBhdHRlcm4gPSB0ZW1wbGF0ZS5yZXBsYWNlKHZhcmlhYmxlUmVnRXhwLCBmdW5jdGlvbihtYXRjaCkge1xuICAgICAgICB2YXIgdmFyaWFibGUgPSBtYXRjaC5zdWJzdHIoMiwgbWF0Y2gubGVuZ3RoIC0gMylcbiAgICAgICAgdmFyIHZhcmlhYmxlVHlwZSA9IHR5cGVzW3ZhcmlhYmxlXTtcbiAgICAgICAgdmFyIHZhcmlhYmxlUGF0dGVybjtcbiAgICAgICAgaWYgKHZhcmlhYmxlVHlwZSA9PT0gTnVtYmVyIHx8IHZhcmlhYmxlVHlwZSA9PT0gQm9vbGVhbikge1xuICAgICAgICAgICAgdmFyaWFibGVQYXR0ZXJuID0gJ1tcXFxcZFxcXFwuXSsnO1xuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZih2YXJpYWJsZVR5cGUpID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgdmFyaWFibGVQYXR0ZXJuID0gdmFyaWFibGVUeXBlLnBhdHRlcm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF2YXJpYWJsZVBhdHRlcm4pIHtcbiAgICAgICAgICAgIGlmIChpc1BhdGgpIHtcbiAgICAgICAgICAgICAgICB2YXJpYWJsZVBhdHRlcm4gPSAnW14vXSsnXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhcmlhYmxlUGF0dGVybiA9ICcuKyc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuICcoJyArIHZhcmlhYmxlUGF0dGVybiArICcpJztcbiAgICB9KTtcbiAgICBpZiAoaXNQYXRoKSB7XG4gICAgICAgIHZhciBsYyA9IHBhdHRlcm4uY2hhckF0KHBhdHRlcm4gLSAxKTtcbiAgICAgICAgaWYgKGxjID09PSAnLycpIHtcbiAgICAgICAgICAgIHBhdHRlcm4gKz0gJz8nO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcGF0dGVybiArPSAnLz8nO1xuICAgICAgICB9XG4gICAgICAgIHBhdHRlcm4gPSAnXicgKyBwYXR0ZXJuICsgJyQnO1xuICAgIH1cbiAgICB2YXIgcmUgPSByZWdFeHBDYWNoZVtwYXR0ZXJuXTtcbiAgICBpZiAoIXJlKSB7XG4gICAgICAgIHJlID0gcmVnRXhwQ2FjaGVbcGF0dGVybl0gPSBuZXcgUmVnRXhwKHBhdHRlcm4pO1xuICAgIH1cbiAgICByZXR1cm4gcmU7XG59XG5cbmZ1bmN0aW9uIGdldFVSTFRlbXBsYXRlVmFyaWFibGVzKHRlbXBsYXRlKSB7XG4gICAgdmFyIG1hdGNoZXMgPSB0ZW1wbGF0ZS5tYXRjaCh2YXJpYWJsZVJlZ0V4cCk7XG4gICAgdmFyIGxpc3QgPSBbXTtcbiAgICBpZiAobWF0Y2hlcykge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG1hdGNoZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBtYXRjaCA9IG1hdGNoZXNbaV07XG4gICAgICAgICAgICBsaXN0LnB1c2gobWF0Y2guc3Vic3RyKDIsIG1hdGNoLmxlbmd0aCAtIDMpKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbGlzdDtcbn1cblxuZnVuY3Rpb24gbWF0Y2hUZW1wbGF0ZSh1cmxQYXJ0LCB0ZW1wbGF0ZSwgdHlwZXMsIHBhcmFtcywgaXNQYXRoKSB7XG4gICAgaWYgKCF1cmxQYXJ0IHx8ICF0ZW1wbGF0ZSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGlmICh0ZW1wbGF0ZSBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgIHZhciBtYXRjaCA9IGZhbHNlO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRlbXBsYXRlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgdCA9IHRlbXBsYXRlW2ldO1xuICAgICAgICAgICAgaWYgKG1hdGNoVGVtcGxhdGUodXJsUGFydCwgdCwgdHlwZXMsIHBhcmFtcywgaXNQYXRoKSkge1xuICAgICAgICAgICAgICAgIG1hdGNoID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBpZiAoaXNQYXRoKSB7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbWF0Y2g7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YodGVtcGxhdGUpID09PSAnb2JqZWN0Jykge1xuICAgICAgICBpZiAodGVtcGxhdGUuZnJvbSkge1xuICAgICAgICAgICAgcmV0dXJuIHRlbXBsYXRlLmZyb20odXJsUGFydCwgcGFyYW1zKTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSBpZiAodHlwZW9mKHRlbXBsYXRlKSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgdmFyIHJlID0gZ2V0VVJMVGVtcGxhdGVSZWdFeHAodGVtcGxhdGUsIHR5cGVzLCBpc1BhdGgpO1xuICAgICAgICB2YXIgbWF0Y2hlcyA9IHJlLmV4ZWModXJsUGFydCk7XG4gICAgICAgIGlmICghbWF0Y2hlcykge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHZhciB2YXJpYWJsZXMgPSBnZXRVUkxUZW1wbGF0ZVZhcmlhYmxlcyh0ZW1wbGF0ZSk7XG4gICAgICAgIHZhciB2YWx1ZXMgPSB7fTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB2YXJpYWJsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciB2YXJpYWJsZSA9IHZhcmlhYmxlc1tpXTtcbiAgICAgICAgICAgIHZhciB0eXBlID0gdHlwZXNbdmFyaWFibGVdO1xuICAgICAgICAgICAgdmFyIHZhbHVlID0gY2FzdFZhbHVlKG1hdGNoZXNbaSArIDFdLCB0eXBlKTtcbiAgICAgICAgICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgdmFsdWVzW3ZhcmlhYmxlXSA9IHZhbHVlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoaXNQYXRoKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZm9yICh2YXIgbmFtZSBpbiB2YWx1ZXMpIHtcbiAgICAgICAgICAgIHBhcmFtc1tuYW1lXSA9IHZhbHVlc1tuYW1lXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xufVxuXG5mdW5jdGlvbiBmaWxsVGVtcGxhdGUodGVtcGxhdGUsIHR5cGVzLCBwYXJhbXMsIGFsd2F5cykge1xuICAgIGlmICh0ZW1wbGF0ZSBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgIHZhciB0b2tlbnMgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0ZW1wbGF0ZS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIHQgPSB0ZW1wbGF0ZVtpXTtcbiAgICAgICAgICAgIHZhciBzID0gZmlsbFRlbXBsYXRlKHQsIHR5cGVzLCBwYXJhbXMsIGFsd2F5cyk7XG4gICAgICAgICAgICBpZiAocykge1xuICAgICAgICAgICAgICAgIHRva2Vucy5wdXNoKHMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0b2tlbnMuam9pbignJyk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YodGVtcGxhdGUpID09PSAnb2JqZWN0Jykge1xuICAgICAgICBpZiAodGVtcGxhdGUudG8pIHtcbiAgICAgICAgICAgIHJldHVybiB0ZW1wbGF0ZS50byhwYXJhbXMpO1xuICAgICAgICB9XG4gICAgfSBlbHNlIGlmICh0eXBlb2YodGVtcGxhdGUpID09PSAnc3RyaW5nJykge1xuICAgICAgICB2YXIgdmFyaWFibGVzID0gZ2V0VVJMVGVtcGxhdGVWYXJpYWJsZXModGVtcGxhdGUpO1xuICAgICAgICB2YXIgdXJsUGF0aCA9IHRlbXBsYXRlO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHZhcmlhYmxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIHZhcmlhYmxlID0gdmFyaWFibGVzW2ldO1xuICAgICAgICAgICAgdmFyIHZhbHVlID0gcGFyYW1zW3ZhcmlhYmxlXTtcbiAgICAgICAgICAgIHZhciB0eXBlID0gdHlwZXNbdmFyaWFibGVdO1xuICAgICAgICAgICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQgfHwgYWx3YXlzKSB7XG4gICAgICAgICAgICAgICAgdmFyIHN0cmluZyA9IHN0cmluZ2lmeVZhbHVlKHZhbHVlLCB0eXBlKTtcbiAgICAgICAgICAgICAgICB1cmxQYXRoID0gdXJsUGF0aC5yZXBsYWNlKCckeycgKyB2YXJpYWJsZSArICd9Jywgc3RyaW5nKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB1cmxQYXRoO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gY2FzdFZhbHVlKHN0cmluZywgdHlwZSkge1xuICAgIGlmICh0eXBlID09PSBTdHJpbmcpIHtcbiAgICAgICAgcmV0dXJuIHN0cmluZztcbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09IE51bWJlcikge1xuICAgICAgICB2YXIgbiA9IHBhcnNlRmxvYXQoc3RyaW5nKTtcbiAgICAgICAgaWYgKG4gPT09IG4pIHtcbiAgICAgICAgICAgIHJldHVybiBuO1xuICAgICAgICB9XG4gICAgfSBlbHNlIGlmICh0eXBlID09PSBCb29sZWFuKSB7XG4gICAgICAgIHZhciBuID0gcGFyc2VGbG9hdChzdHJpbmcpO1xuICAgICAgICBpZiAobiA9PT0gbikge1xuICAgICAgICAgICAgcmV0dXJuICEhbjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiAhIXN0cmluZztcbiAgICAgICAgfVxuICAgIH0gZWxzZSBpZiAodHlwZSBpbnN0YW5jZW9mIE9iamVjdCkge1xuICAgICAgICBpZiAodHlwZS5mcm9tKSB7XG4gICAgICAgICAgICByZXR1cm4gdHlwZS5mcm9tKHN0cmluZyk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmZ1bmN0aW9uIHN0cmluZ2lmeVZhbHVlKHZhbHVlLCB0eXBlKSB7XG4gICAgaWYgKHR5cGUgPT09IFN0cmluZykge1xuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfSBlbHNlIGlmICh0eXBlID09PSBOdW1iZXIpIHtcbiAgICAgICAgcmV0dXJuIFN0cmluZyh2YWx1ZSk7XG4gICAgfSBlbHNlIGlmICh0eXBlID09PSBCb29sZWFuKSB7XG4gICAgICAgIHJldHVybiAodmFsdWUpID8gJzAnIDogJzEnO1xuICAgIH0gZWxzZSBpZiAodHlwZSBpbnN0YW5jZW9mIE9iamVjdCkge1xuICAgICAgICBpZiAodHlwZS50bykge1xuICAgICAgICAgICAgcmV0dXJuIHR5cGUudG8odmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5mdW5jdGlvbiBnZXRSZWxhdGl2ZVBhdGgoYmFzZVBhdGgsIHBhdGgpIHtcbiAgICBpZiAoIWJhc2VQYXRoKSB7XG4gICAgICAgIHJldHVybiBwYXRoO1xuICAgIH1cbiAgICBpZiAocGF0aC5zdWJzdHIoMCwgYmFzZVBhdGgubGVuZ3RoKSA9PT0gYmFzZVBhdGgpIHtcbiAgICAgICAgaWYgKHBhdGguY2hhckF0KGJhc2VQYXRoLmxlbmd0aCkgPT09ICcvJykge1xuICAgICAgICAgICAgcmV0dXJuIHBhdGguc3Vic3RyKGJhc2VQYXRoLmxlbmd0aCk7XG4gICAgICAgIH0gZWxzZSBpZiAocGF0aCA9PT0gYmFzZVBhdGgpIHtcbiAgICAgICAgICAgIHJldHVybiAnLyc7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmZ1bmN0aW9uIHBhcnNlVVJMKHVybCkge1xuICAgIHZhciBwYXRoID0gdXJsO1xuICAgIHZhciBoYXNoID0gJyc7XG4gICAgdmFyIGhhc2hJbmRleCA9IHBhdGguaW5kZXhPZignIycpO1xuICAgIGlmIChoYXNoSW5kZXggIT09IC0xKSB7XG4gICAgICAgIGhhc2ggPSBwYXRoLnN1YnN0cihoYXNoSW5kZXggKyAxKTtcbiAgICAgICAgcGF0aCA9IHBhdGguc3Vic3RyKDAsIGhhc2hJbmRleCk7XG4gICAgfVxuICAgIHZhciBxdWVyeSA9IHt9O1xuICAgIHZhciBxdWVyeUluZGV4ID0gcGF0aC5pbmRleE9mKCc/Jyk7XG4gICAgaWYgKHF1ZXJ5SW5kZXggIT09IC0xKSB7XG4gICAgICAgIHF1ZXJ5ID0gcGFyc2VRdWVyeVN0cmluZyhwYXRoLnN1YnN0cihxdWVyeUluZGV4ICsgMSkpO1xuICAgICAgICBwYXRoID0gcGF0aC5zdWJzdHIoMCwgcXVlcnlJbmRleCk7XG4gICAgfVxuICAgIHJldHVybiB7IHBhdGg6IHBhdGgsIHF1ZXJ5OiBxdWVyeSwgaGFzaDogaGFzaCB9O1xufVxuXG5mdW5jdGlvbiBwYXJzZVF1ZXJ5U3RyaW5nKHF1ZXJ5U3RyaW5nKSB7XG4gICAgdmFyIHZhbHVlcyA9IHt9O1xuICAgIGlmIChxdWVyeVN0cmluZykge1xuICAgICAgICB2YXIgcGFpcnMgPSBxdWVyeVN0cmluZy5zcGxpdCgnJicpO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHBhaXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgcGFydHMgPSBwYWlyc1tpXS5zcGxpdCgnPScpO1xuICAgICAgICAgICAgdmFyIG5hbWUgPSBkZWNvZGVVUklDb21wb25lbnQocGFydHNbMF0pO1xuICAgICAgICAgICAgdmFyIHZhbHVlID0gZGVjb2RlVVJJQ29tcG9uZW50KHBhcnRzWzFdIHx8ICcnKTtcbiAgICAgICAgICAgIHZhbHVlID0gdmFsdWUucmVwbGFjZSgvXFwrL2csICcgJyk7XG4gICAgICAgICAgICB2YWx1ZXNbbmFtZV0gPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdmFsdWVzO1xufVxuXG5mdW5jdGlvbiBjb21wb3NlVVJMKHVybFBhcnRzKSB7XG4gICAgdmFyIHVybCA9IHVybFBhcnRzLnBhdGg7XG4gICAgdmFyIHF1ZXJ5U3RyaW5nID0gY29tcG9zZVF1ZXJ5U3RyaW5nKHVybFBhcnRzLnF1ZXJ5KTtcbiAgICBpZiAocXVlcnlTdHJpbmcpIHtcbiAgICAgICAgdXJsICs9ICc/JyArIHF1ZXJ5U3RyaW5nO1xuICAgIH1cbiAgICBpZiAodXJsUGFydHMuaGFzaCkge1xuICAgICAgICB1cmwgKz0gJyMnICsgdXJsUGFydHMuaGFzaDtcbiAgICB9XG4gICAgcmV0dXJuIHVybDtcbn1cblxuZnVuY3Rpb24gY29tcG9zZVF1ZXJ5U3RyaW5nKHF1ZXJ5KSB7XG4gICAgdmFyIHBhaXJzID0gW107XG4gICAgZm9yICh2YXIgbmFtZSBpbiBxdWVyeSkge1xuICAgICAgICB2YXIgdmFsdWUgPSBxdWVyeVtuYW1lXTtcbiAgICAgICAgdmFyIHBhcnRzID0gW1xuICAgICAgICAgICAgZW5jb2RlVVJJQ29tcG9uZW50KG5hbWUpLFxuICAgICAgICAgICAgZW5jb2RlVVJJQ29tcG9uZW50KHZhbHVlKSxcbiAgICAgICAgXTtcbiAgICAgICAgcGFpcnMucHVzaChwYXJ0cy5qb2luKCc9JykpO1xuICAgIH1cbiAgICByZXR1cm4gcGFpcnMuam9pbignJicpO1xufVxuXG5mdW5jdGlvbiBnZXRMaW5rKGVsZW1lbnQpIHtcbiAgICB3aGlsZSAoZWxlbWVudCAmJiBlbGVtZW50LnRhZ05hbWUgIT09ICdBJyAmJiAhZWxlbWVudC5ocmVmKSB7XG4gICAgICAgIGVsZW1lbnQgPSBlbGVtZW50LnBhcmVudE5vZGU7XG4gICAgfVxuICAgIHJldHVybiBlbGVtZW50O1xufVxuXG5mdW5jdGlvbiBnZXRUaW1lKCkge1xuICAgIHJldHVybiAobmV3IERhdGUpLnRvSVNPU3RyaW5nKCk7XG59XG5cbmZ1bmN0aW9uIFJlbGFrc1JvdXRlTWFuYWdlckV2ZW50KHR5cGUsIHRhcmdldCwgcHJvcHMpIHtcbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgIHRoaXMudGFyZ2V0ID0gdGFyZ2V0O1xuICAgIGZvciAodmFyIG5hbWUgaW4gcHJvcHMpIHtcbiAgICAgICAgdGhpc1tuYW1lXSA9IHByb3BzW25hbWVdO1xuICAgIH1cbiAgICB0aGlzLmRlZmF1bHRQcmV2ZW50ZWQgPSBmYWxzZTtcbiAgICB0aGlzLmRlY2lzaW9uUHJvbWlzZSA9IG51bGw7XG59XG5cbnZhciBwcm90b3R5cGUgPSBSZWxha3NSb3V0ZU1hbmFnZXJFdmVudC5wcm90b3R5cGU7XG5cbnByb3RvdHlwZS5wcmV2ZW50RGVmYXVsdCA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuZGVmYXVsdFByZXZlbnRlZCA9IHRydWU7XG59O1xuXG5wcm90b3R5cGUucG9zdHBvbmVEZWZhdWx0ID0gZnVuY3Rpb24ocHJvbWlzZSkge1xuICAgIGlmICghcHJvbWlzZSB8fCAhKHByb21pc2UudGhlbiBpbnN0YW5jZW9mIEZ1bmN0aW9uKSkge1xuICAgICAgICB0aGlzLmRlY2lzaW9uUHJvbWlzZSA9IHByb21pc2U7XG4gICAgfVxufTtcblxucHJvdG90eXBlLndhaXRGb3JEZWNpc2lvbiA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmRlY2lzaW9uUHJvbWlzZSB8fCBQcm9taXNlLnJlc29sdmUoKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gUmVsYWtzUm91dGVNYW5hZ2VyO1xubW9kdWxlLmV4cG9ydHMuUmVsYWtzUm91dGVNYW5hZ2VyID0gUmVsYWtzUm91dGVNYW5hZ2VyO1xubW9kdWxlLmV4cG9ydHMuUmVsYWtzUm91dGVNYW5hZ2VyRXZlbnQgPSBSZWxha3NSb3V0ZU1hbmFnZXJFdmVudDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAvaG9tZS9jbGVvbmcvcmVsYWtzLXJvdXRlLW1hbmFnZXIvaW5kZXguanMiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vanNvbi9zdHJpbmdpZnlcIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL2pzb24vc3RyaW5naWZ5LmpzXG4vLyBtb2R1bGUgaWQgPSAuLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL2pzb24vc3RyaW5naWZ5LmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gbWFpbiIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvY3JlYXRlXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvY3JlYXRlLmpzXG4vLyBtb2R1bGUgaWQgPSAuLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9jcmVhdGUuanNcbi8vIG1vZHVsZSBjaHVua3MgPSBtYWluIiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9kZWZpbmUtcHJvcGVydHlcIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9kZWZpbmUtcHJvcGVydHkuanNcbi8vIG1vZHVsZSBpZCA9IC4uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2RlZmluZS1wcm9wZXJ0eS5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IG1haW4iLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2dldC1wcm90b3R5cGUtb2ZcIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9nZXQtcHJvdG90eXBlLW9mLmpzXG4vLyBtb2R1bGUgaWQgPSAuLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9nZXQtcHJvdG90eXBlLW9mLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gbWFpbiIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9vYmplY3Qvc2V0LXByb3RvdHlwZS1vZlwiKSwgX19lc01vZHVsZTogdHJ1ZSB9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L3NldC1wcm90b3R5cGUtb2YuanNcbi8vIG1vZHVsZSBpZCA9IC4uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L3NldC1wcm90b3R5cGUtb2YuanNcbi8vIG1vZHVsZSBjaHVua3MgPSBtYWluIiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL3Byb21pc2VcIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL3Byb21pc2UuanNcbi8vIG1vZHVsZSBpZCA9IC4uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvcHJvbWlzZS5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IG1haW4iLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vc3ltYm9sXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9zeW1ib2wuanNcbi8vIG1vZHVsZSBpZCA9IC4uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvc3ltYm9sLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gbWFpbiIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9zeW1ib2wvaXRlcmF0b3JcIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL3N5bWJvbC9pdGVyYXRvci5qc1xuLy8gbW9kdWxlIGlkID0gLi4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9zeW1ib2wvaXRlcmF0b3IuanNcbi8vIG1vZHVsZSBjaHVua3MgPSBtYWluIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfcHJvbWlzZSA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL3Byb21pc2VcIik7XG5cbnZhciBfcHJvbWlzZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wcm9taXNlKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKGZuKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGdlbiA9IGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgcmV0dXJuIG5ldyBfcHJvbWlzZTIuZGVmYXVsdChmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICBmdW5jdGlvbiBzdGVwKGtleSwgYXJnKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgdmFyIGluZm8gPSBnZW5ba2V5XShhcmcpO1xuICAgICAgICAgIHZhciB2YWx1ZSA9IGluZm8udmFsdWU7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaW5mby5kb25lKSB7XG4gICAgICAgICAgcmVzb2x2ZSh2YWx1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIF9wcm9taXNlMi5kZWZhdWx0LnJlc29sdmUodmFsdWUpLnRoZW4oZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICBzdGVwKFwibmV4dFwiLCB2YWx1ZSk7XG4gICAgICAgICAgfSwgZnVuY3Rpb24gKGVycikge1xuICAgICAgICAgICAgc3RlcChcInRocm93XCIsIGVycik7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHN0ZXAoXCJuZXh0XCIpO1xuICAgIH0pO1xuICB9O1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9oZWxwZXJzL2FzeW5jVG9HZW5lcmF0b3IuanNcbi8vIG1vZHVsZSBpZCA9IC4uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2hlbHBlcnMvYXN5bmNUb0dlbmVyYXRvci5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IG1haW4iLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gIH1cbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjay5qc1xuLy8gbW9kdWxlIGlkID0gLi4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjay5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IG1haW4iLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9kZWZpbmVQcm9wZXJ0eSA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL29iamVjdC9kZWZpbmUtcHJvcGVydHlcIik7XG5cbnZhciBfZGVmaW5lUHJvcGVydHkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZGVmaW5lUHJvcGVydHkpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG4gICAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuICAgICAgKDAsIF9kZWZpbmVQcm9wZXJ0eTIuZGVmYXVsdCkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcbiAgICBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuICAgIGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICAgIHJldHVybiBDb25zdHJ1Y3RvcjtcbiAgfTtcbn0oKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzLmpzXG4vLyBtb2R1bGUgaWQgPSAuLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gbWFpbiIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX3NldFByb3RvdHlwZU9mID0gcmVxdWlyZShcIi4uL2NvcmUtanMvb2JqZWN0L3NldC1wcm90b3R5cGUtb2ZcIik7XG5cbnZhciBfc2V0UHJvdG90eXBlT2YyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc2V0UHJvdG90eXBlT2YpO1xuXG52YXIgX2NyZWF0ZSA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL29iamVjdC9jcmVhdGVcIik7XG5cbnZhciBfY3JlYXRlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NyZWF0ZSk7XG5cbnZhciBfdHlwZW9mMiA9IHJlcXVpcmUoXCIuLi9oZWxwZXJzL3R5cGVvZlwiKTtcblxudmFyIF90eXBlb2YzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdHlwZW9mMik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChzdWJDbGFzcywgc3VwZXJDbGFzcykge1xuICBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyAodHlwZW9mIHN1cGVyQ2xhc3MgPT09IFwidW5kZWZpbmVkXCIgPyBcInVuZGVmaW5lZFwiIDogKDAsIF90eXBlb2YzLmRlZmF1bHQpKHN1cGVyQ2xhc3MpKSk7XG4gIH1cblxuICBzdWJDbGFzcy5wcm90b3R5cGUgPSAoMCwgX2NyZWF0ZTIuZGVmYXVsdCkoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwge1xuICAgIGNvbnN0cnVjdG9yOiB7XG4gICAgICB2YWx1ZTogc3ViQ2xhc3MsXG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfVxuICB9KTtcbiAgaWYgKHN1cGVyQ2xhc3MpIF9zZXRQcm90b3R5cGVPZjIuZGVmYXVsdCA/ICgwLCBfc2V0UHJvdG90eXBlT2YyLmRlZmF1bHQpKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHMuanNcbi8vIG1vZHVsZSBpZCA9IC4uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHMuanNcbi8vIG1vZHVsZSBjaHVua3MgPSBtYWluIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfdHlwZW9mMiA9IHJlcXVpcmUoXCIuLi9oZWxwZXJzL3R5cGVvZlwiKTtcblxudmFyIF90eXBlb2YzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdHlwZW9mMik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChzZWxmLCBjYWxsKSB7XG4gIGlmICghc2VsZikge1xuICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTtcbiAgfVxuXG4gIHJldHVybiBjYWxsICYmICgodHlwZW9mIGNhbGwgPT09IFwidW5kZWZpbmVkXCIgPyBcInVuZGVmaW5lZFwiIDogKDAsIF90eXBlb2YzLmRlZmF1bHQpKGNhbGwpKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4uanNcbi8vIG1vZHVsZSBpZCA9IC4uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVybi5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IG1haW4iLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9pdGVyYXRvciA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL3N5bWJvbC9pdGVyYXRvclwiKTtcblxudmFyIF9pdGVyYXRvcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pdGVyYXRvcik7XG5cbnZhciBfc3ltYm9sID0gcmVxdWlyZShcIi4uL2NvcmUtanMvc3ltYm9sXCIpO1xuXG52YXIgX3N5bWJvbDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zeW1ib2wpO1xuXG52YXIgX3R5cGVvZiA9IHR5cGVvZiBfc3ltYm9sMi5kZWZhdWx0ID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIF9pdGVyYXRvcjIuZGVmYXVsdCA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH0gOiBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIF9zeW1ib2wyLmRlZmF1bHQgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IF9zeW1ib2wyLmRlZmF1bHQgJiYgb2JqICE9PSBfc3ltYm9sMi5kZWZhdWx0LnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9O1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSB0eXBlb2YgX3N5bWJvbDIuZGVmYXVsdCA9PT0gXCJmdW5jdGlvblwiICYmIF90eXBlb2YoX2l0ZXJhdG9yMi5kZWZhdWx0KSA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHtcbiAgcmV0dXJuIHR5cGVvZiBvYmogPT09IFwidW5kZWZpbmVkXCIgPyBcInVuZGVmaW5lZFwiIDogX3R5cGVvZihvYmopO1xufSA6IGZ1bmN0aW9uIChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgX3N5bWJvbDIuZGVmYXVsdCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gX3N5bWJvbDIuZGVmYXVsdCAmJiBvYmogIT09IF9zeW1ib2wyLmRlZmF1bHQucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmogPT09IFwidW5kZWZpbmVkXCIgPyBcInVuZGVmaW5lZFwiIDogX3R5cGVvZihvYmopO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qc1xuLy8gbW9kdWxlIGlkID0gLi4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvaGVscGVycy90eXBlb2YuanNcbi8vIG1vZHVsZSBjaHVua3MgPSBtYWluIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVnZW5lcmF0b3ItcnVudGltZVwiKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL3JlZ2VuZXJhdG9yL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAuLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9yZWdlbmVyYXRvci9pbmRleC5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IG1haW4iLCJ2YXIgY29yZSA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKTtcbnZhciAkSlNPTiA9IGNvcmUuSlNPTiB8fCAoY29yZS5KU09OID0geyBzdHJpbmdpZnk6IEpTT04uc3RyaW5naWZ5IH0pO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBzdHJpbmdpZnkoaXQpIHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtdmFyc1xuICByZXR1cm4gJEpTT04uc3RyaW5naWZ5LmFwcGx5KCRKU09OLCBhcmd1bWVudHMpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vanNvbi9zdHJpbmdpZnkuanNcbi8vIG1vZHVsZSBpZCA9IC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vanNvbi9zdHJpbmdpZnkuanNcbi8vIG1vZHVsZSBjaHVua3MgPSBtYWluIiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LmNyZWF0ZScpO1xudmFyICRPYmplY3QgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJykuT2JqZWN0O1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjcmVhdGUoUCwgRCkge1xuICByZXR1cm4gJE9iamVjdC5jcmVhdGUoUCwgRCk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvY3JlYXRlLmpzXG4vLyBtb2R1bGUgaWQgPSAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9jcmVhdGUuanNcbi8vIG1vZHVsZSBjaHVua3MgPSBtYWluIiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LmRlZmluZS1wcm9wZXJ0eScpO1xudmFyICRPYmplY3QgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJykuT2JqZWN0O1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eShpdCwga2V5LCBkZXNjKSB7XG4gIHJldHVybiAkT2JqZWN0LmRlZmluZVByb3BlcnR5KGl0LCBrZXksIGRlc2MpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2RlZmluZS1wcm9wZXJ0eS5qc1xuLy8gbW9kdWxlIGlkID0gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZGVmaW5lLXByb3BlcnR5LmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gbWFpbiIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC5nZXQtcHJvdG90eXBlLW9mJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5PYmplY3QuZ2V0UHJvdG90eXBlT2Y7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9nZXQtcHJvdG90eXBlLW9mLmpzXG4vLyBtb2R1bGUgaWQgPSAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9nZXQtcHJvdG90eXBlLW9mLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gbWFpbiIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC5zZXQtcHJvdG90eXBlLW9mJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5PYmplY3Quc2V0UHJvdG90eXBlT2Y7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9zZXQtcHJvdG90eXBlLW9mLmpzXG4vLyBtb2R1bGUgaWQgPSAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9zZXQtcHJvdG90eXBlLW9mLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gbWFpbiIsInJlcXVpcmUoJy4uL21vZHVsZXMvZXM2Lm9iamVjdC50by1zdHJpbmcnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvcicpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5wcm9taXNlJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNy5wcm9taXNlLmZpbmFsbHknKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM3LnByb21pc2UudHJ5Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uL21vZHVsZXMvX2NvcmUnKS5Qcm9taXNlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9wcm9taXNlLmpzXG4vLyBtb2R1bGUgaWQgPSAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL3Byb21pc2UuanNcbi8vIG1vZHVsZSBjaHVua3MgPSBtYWluIiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYuc3ltYm9sJyk7XG5yZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3QudG8tc3RyaW5nJyk7XG5yZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNy5zeW1ib2wuYXN5bmMtaXRlcmF0b3InKTtcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM3LnN5bWJvbC5vYnNlcnZhYmxlJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5TeW1ib2w7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL3N5bWJvbC9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9zeW1ib2wvaW5kZXguanNcbi8vIG1vZHVsZSBjaHVua3MgPSBtYWluIiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yJyk7XG5yZXF1aXJlKCcuLi8uLi9tb2R1bGVzL3dlYi5kb20uaXRlcmFibGUnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fd2tzLWV4dCcpLmYoJ2l0ZXJhdG9yJyk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL3N5bWJvbC9pdGVyYXRvci5qc1xuLy8gbW9kdWxlIGlkID0gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9zeW1ib2wvaXRlcmF0b3IuanNcbi8vIG1vZHVsZSBjaHVua3MgPSBtYWluIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKHR5cGVvZiBpdCAhPSAnZnVuY3Rpb24nKSB0aHJvdyBUeXBlRXJyb3IoaXQgKyAnIGlzIG5vdCBhIGZ1bmN0aW9uIScpO1xuICByZXR1cm4gaXQ7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hLWZ1bmN0aW9uLmpzXG4vLyBtb2R1bGUgaWQgPSAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2EtZnVuY3Rpb24uanNcbi8vIG1vZHVsZSBjaHVua3MgPSBtYWluIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoKSB7IC8qIGVtcHR5ICovIH07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FkZC10by11bnNjb3BhYmxlcy5qc1xuLy8gbW9kdWxlIGlkID0gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hZGQtdG8tdW5zY29wYWJsZXMuanNcbi8vIG1vZHVsZSBjaHVua3MgPSBtYWluIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQsIENvbnN0cnVjdG9yLCBuYW1lLCBmb3JiaWRkZW5GaWVsZCkge1xuICBpZiAoIShpdCBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSB8fCAoZm9yYmlkZGVuRmllbGQgIT09IHVuZGVmaW5lZCAmJiBmb3JiaWRkZW5GaWVsZCBpbiBpdCkpIHtcbiAgICB0aHJvdyBUeXBlRXJyb3IobmFtZSArICc6IGluY29ycmVjdCBpbnZvY2F0aW9uIScpO1xuICB9IHJldHVybiBpdDtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FuLWluc3RhbmNlLmpzXG4vLyBtb2R1bGUgaWQgPSAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FuLWluc3RhbmNlLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gbWFpbiIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKCFpc09iamVjdChpdCkpIHRocm93IFR5cGVFcnJvcihpdCArICcgaXMgbm90IGFuIG9iamVjdCEnKTtcbiAgcmV0dXJuIGl0O1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYW4tb2JqZWN0LmpzXG4vLyBtb2R1bGUgaWQgPSAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FuLW9iamVjdC5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IG1haW4iLCIvLyBmYWxzZSAtPiBBcnJheSNpbmRleE9mXG4vLyB0cnVlICAtPiBBcnJheSNpbmNsdWRlc1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcbnZhciB0b0xlbmd0aCA9IHJlcXVpcmUoJy4vX3RvLWxlbmd0aCcpO1xudmFyIHRvQWJzb2x1dGVJbmRleCA9IHJlcXVpcmUoJy4vX3RvLWFic29sdXRlLWluZGV4Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChJU19JTkNMVURFUykge1xuICByZXR1cm4gZnVuY3Rpb24gKCR0aGlzLCBlbCwgZnJvbUluZGV4KSB7XG4gICAgdmFyIE8gPSB0b0lPYmplY3QoJHRoaXMpO1xuICAgIHZhciBsZW5ndGggPSB0b0xlbmd0aChPLmxlbmd0aCk7XG4gICAgdmFyIGluZGV4ID0gdG9BYnNvbHV0ZUluZGV4KGZyb21JbmRleCwgbGVuZ3RoKTtcbiAgICB2YXIgdmFsdWU7XG4gICAgLy8gQXJyYXkjaW5jbHVkZXMgdXNlcyBTYW1lVmFsdWVaZXJvIGVxdWFsaXR5IGFsZ29yaXRobVxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZWxmLWNvbXBhcmVcbiAgICBpZiAoSVNfSU5DTFVERVMgJiYgZWwgIT0gZWwpIHdoaWxlIChsZW5ndGggPiBpbmRleCkge1xuICAgICAgdmFsdWUgPSBPW2luZGV4KytdO1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlbGYtY29tcGFyZVxuICAgICAgaWYgKHZhbHVlICE9IHZhbHVlKSByZXR1cm4gdHJ1ZTtcbiAgICAvLyBBcnJheSNpbmRleE9mIGlnbm9yZXMgaG9sZXMsIEFycmF5I2luY2x1ZGVzIC0gbm90XG4gICAgfSBlbHNlIGZvciAoO2xlbmd0aCA+IGluZGV4OyBpbmRleCsrKSBpZiAoSVNfSU5DTFVERVMgfHwgaW5kZXggaW4gTykge1xuICAgICAgaWYgKE9baW5kZXhdID09PSBlbCkgcmV0dXJuIElTX0lOQ0xVREVTIHx8IGluZGV4IHx8IDA7XG4gICAgfSByZXR1cm4gIUlTX0lOQ0xVREVTICYmIC0xO1xuICB9O1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYXJyYXktaW5jbHVkZXMuanNcbi8vIG1vZHVsZSBpZCA9IC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYXJyYXktaW5jbHVkZXMuanNcbi8vIG1vZHVsZSBjaHVua3MgPSBtYWluIiwiLy8gZ2V0dGluZyB0YWcgZnJvbSAxOS4xLjMuNiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nKClcbnZhciBjb2YgPSByZXF1aXJlKCcuL19jb2YnKTtcbnZhciBUQUcgPSByZXF1aXJlKCcuL193a3MnKSgndG9TdHJpbmdUYWcnKTtcbi8vIEVTMyB3cm9uZyBoZXJlXG52YXIgQVJHID0gY29mKGZ1bmN0aW9uICgpIHsgcmV0dXJuIGFyZ3VtZW50czsgfSgpKSA9PSAnQXJndW1lbnRzJztcblxuLy8gZmFsbGJhY2sgZm9yIElFMTEgU2NyaXB0IEFjY2VzcyBEZW5pZWQgZXJyb3JcbnZhciB0cnlHZXQgPSBmdW5jdGlvbiAoaXQsIGtleSkge1xuICB0cnkge1xuICAgIHJldHVybiBpdFtrZXldO1xuICB9IGNhdGNoIChlKSB7IC8qIGVtcHR5ICovIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHZhciBPLCBULCBCO1xuICByZXR1cm4gaXQgPT09IHVuZGVmaW5lZCA/ICdVbmRlZmluZWQnIDogaXQgPT09IG51bGwgPyAnTnVsbCdcbiAgICAvLyBAQHRvU3RyaW5nVGFnIGNhc2VcbiAgICA6IHR5cGVvZiAoVCA9IHRyeUdldChPID0gT2JqZWN0KGl0KSwgVEFHKSkgPT0gJ3N0cmluZycgPyBUXG4gICAgLy8gYnVpbHRpblRhZyBjYXNlXG4gICAgOiBBUkcgPyBjb2YoTylcbiAgICAvLyBFUzMgYXJndW1lbnRzIGZhbGxiYWNrXG4gICAgOiAoQiA9IGNvZihPKSkgPT0gJ09iamVjdCcgJiYgdHlwZW9mIE8uY2FsbGVlID09ICdmdW5jdGlvbicgPyAnQXJndW1lbnRzJyA6IEI7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jbGFzc29mLmpzXG4vLyBtb2R1bGUgaWQgPSAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NsYXNzb2YuanNcbi8vIG1vZHVsZSBjaHVua3MgPSBtYWluIiwidmFyIHRvU3RyaW5nID0ge30udG9TdHJpbmc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKGl0KS5zbGljZSg4LCAtMSk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jb2YuanNcbi8vIG1vZHVsZSBpZCA9IC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY29mLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gbWFpbiIsInZhciBjb3JlID0gbW9kdWxlLmV4cG9ydHMgPSB7IHZlcnNpb246ICcyLjUuNycgfTtcbmlmICh0eXBlb2YgX19lID09ICdudW1iZXInKSBfX2UgPSBjb3JlOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NvcmUuanNcbi8vIG1vZHVsZSBpZCA9IC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY29yZS5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IG1haW4iLCIvLyBvcHRpb25hbCAvIHNpbXBsZSBjb250ZXh0IGJpbmRpbmdcbnZhciBhRnVuY3Rpb24gPSByZXF1aXJlKCcuL19hLWZ1bmN0aW9uJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChmbiwgdGhhdCwgbGVuZ3RoKSB7XG4gIGFGdW5jdGlvbihmbik7XG4gIGlmICh0aGF0ID09PSB1bmRlZmluZWQpIHJldHVybiBmbjtcbiAgc3dpdGNoIChsZW5ndGgpIHtcbiAgICBjYXNlIDE6IHJldHVybiBmdW5jdGlvbiAoYSkge1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSk7XG4gICAgfTtcbiAgICBjYXNlIDI6IHJldHVybiBmdW5jdGlvbiAoYSwgYikge1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSwgYik7XG4gICAgfTtcbiAgICBjYXNlIDM6IHJldHVybiBmdW5jdGlvbiAoYSwgYiwgYykge1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSwgYiwgYyk7XG4gICAgfTtcbiAgfVxuICByZXR1cm4gZnVuY3Rpb24gKC8qIC4uLmFyZ3MgKi8pIHtcbiAgICByZXR1cm4gZm4uYXBwbHkodGhhdCwgYXJndW1lbnRzKTtcbiAgfTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2N0eC5qc1xuLy8gbW9kdWxlIGlkID0gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jdHguanNcbi8vIG1vZHVsZSBjaHVua3MgPSBtYWluIiwiLy8gNy4yLjEgUmVxdWlyZU9iamVjdENvZXJjaWJsZShhcmd1bWVudClcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmIChpdCA9PSB1bmRlZmluZWQpIHRocm93IFR5cGVFcnJvcihcIkNhbid0IGNhbGwgbWV0aG9kIG9uICBcIiArIGl0KTtcbiAgcmV0dXJuIGl0O1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZGVmaW5lZC5qc1xuLy8gbW9kdWxlIGlkID0gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kZWZpbmVkLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gbWFpbiIsIi8vIFRoYW5rJ3MgSUU4IGZvciBoaXMgZnVubnkgZGVmaW5lUHJvcGVydHlcbm1vZHVsZS5leHBvcnRzID0gIXJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24gKCkge1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KHt9LCAnYScsIHsgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiA3OyB9IH0pLmEgIT0gNztcbn0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kZXNjcmlwdG9ycy5qc1xuLy8gbW9kdWxlIGlkID0gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kZXNjcmlwdG9ycy5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IG1haW4iLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbnZhciBkb2N1bWVudCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpLmRvY3VtZW50O1xuLy8gdHlwZW9mIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQgaXMgJ29iamVjdCcgaW4gb2xkIElFXG52YXIgaXMgPSBpc09iamVjdChkb2N1bWVudCkgJiYgaXNPYmplY3QoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXMgPyBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGl0KSA6IHt9O1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZG9tLWNyZWF0ZS5qc1xuLy8gbW9kdWxlIGlkID0gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kb20tY3JlYXRlLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gbWFpbiIsIi8vIElFIDgtIGRvbid0IGVudW0gYnVnIGtleXNcbm1vZHVsZS5leHBvcnRzID0gKFxuICAnY29uc3RydWN0b3IsaGFzT3duUHJvcGVydHksaXNQcm90b3R5cGVPZixwcm9wZXJ0eUlzRW51bWVyYWJsZSx0b0xvY2FsZVN0cmluZyx0b1N0cmluZyx2YWx1ZU9mJ1xuKS5zcGxpdCgnLCcpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19lbnVtLWJ1Zy1rZXlzLmpzXG4vLyBtb2R1bGUgaWQgPSAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2VudW0tYnVnLWtleXMuanNcbi8vIG1vZHVsZSBjaHVua3MgPSBtYWluIiwiLy8gYWxsIGVudW1lcmFibGUgb2JqZWN0IGtleXMsIGluY2x1ZGVzIHN5bWJvbHNcbnZhciBnZXRLZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKTtcbnZhciBnT1BTID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcHMnKTtcbnZhciBwSUUgPSByZXF1aXJlKCcuL19vYmplY3QtcGllJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICB2YXIgcmVzdWx0ID0gZ2V0S2V5cyhpdCk7XG4gIHZhciBnZXRTeW1ib2xzID0gZ09QUy5mO1xuICBpZiAoZ2V0U3ltYm9scykge1xuICAgIHZhciBzeW1ib2xzID0gZ2V0U3ltYm9scyhpdCk7XG4gICAgdmFyIGlzRW51bSA9IHBJRS5mO1xuICAgIHZhciBpID0gMDtcbiAgICB2YXIga2V5O1xuICAgIHdoaWxlIChzeW1ib2xzLmxlbmd0aCA+IGkpIGlmIChpc0VudW0uY2FsbChpdCwga2V5ID0gc3ltYm9sc1tpKytdKSkgcmVzdWx0LnB1c2goa2V5KTtcbiAgfSByZXR1cm4gcmVzdWx0O1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZW51bS1rZXlzLmpzXG4vLyBtb2R1bGUgaWQgPSAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2VudW0ta2V5cy5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IG1haW4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgY29yZSA9IHJlcXVpcmUoJy4vX2NvcmUnKTtcbnZhciBjdHggPSByZXF1aXJlKCcuL19jdHgnKTtcbnZhciBoaWRlID0gcmVxdWlyZSgnLi9faGlkZScpO1xudmFyIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpO1xudmFyIFBST1RPVFlQRSA9ICdwcm90b3R5cGUnO1xuXG52YXIgJGV4cG9ydCA9IGZ1bmN0aW9uICh0eXBlLCBuYW1lLCBzb3VyY2UpIHtcbiAgdmFyIElTX0ZPUkNFRCA9IHR5cGUgJiAkZXhwb3J0LkY7XG4gIHZhciBJU19HTE9CQUwgPSB0eXBlICYgJGV4cG9ydC5HO1xuICB2YXIgSVNfU1RBVElDID0gdHlwZSAmICRleHBvcnQuUztcbiAgdmFyIElTX1BST1RPID0gdHlwZSAmICRleHBvcnQuUDtcbiAgdmFyIElTX0JJTkQgPSB0eXBlICYgJGV4cG9ydC5CO1xuICB2YXIgSVNfV1JBUCA9IHR5cGUgJiAkZXhwb3J0Llc7XG4gIHZhciBleHBvcnRzID0gSVNfR0xPQkFMID8gY29yZSA6IGNvcmVbbmFtZV0gfHwgKGNvcmVbbmFtZV0gPSB7fSk7XG4gIHZhciBleHBQcm90byA9IGV4cG9ydHNbUFJPVE9UWVBFXTtcbiAgdmFyIHRhcmdldCA9IElTX0dMT0JBTCA/IGdsb2JhbCA6IElTX1NUQVRJQyA/IGdsb2JhbFtuYW1lXSA6IChnbG9iYWxbbmFtZV0gfHwge30pW1BST1RPVFlQRV07XG4gIHZhciBrZXksIG93biwgb3V0O1xuICBpZiAoSVNfR0xPQkFMKSBzb3VyY2UgPSBuYW1lO1xuICBmb3IgKGtleSBpbiBzb3VyY2UpIHtcbiAgICAvLyBjb250YWlucyBpbiBuYXRpdmVcbiAgICBvd24gPSAhSVNfRk9SQ0VEICYmIHRhcmdldCAmJiB0YXJnZXRba2V5XSAhPT0gdW5kZWZpbmVkO1xuICAgIGlmIChvd24gJiYgaGFzKGV4cG9ydHMsIGtleSkpIGNvbnRpbnVlO1xuICAgIC8vIGV4cG9ydCBuYXRpdmUgb3IgcGFzc2VkXG4gICAgb3V0ID0gb3duID8gdGFyZ2V0W2tleV0gOiBzb3VyY2Vba2V5XTtcbiAgICAvLyBwcmV2ZW50IGdsb2JhbCBwb2xsdXRpb24gZm9yIG5hbWVzcGFjZXNcbiAgICBleHBvcnRzW2tleV0gPSBJU19HTE9CQUwgJiYgdHlwZW9mIHRhcmdldFtrZXldICE9ICdmdW5jdGlvbicgPyBzb3VyY2Vba2V5XVxuICAgIC8vIGJpbmQgdGltZXJzIHRvIGdsb2JhbCBmb3IgY2FsbCBmcm9tIGV4cG9ydCBjb250ZXh0XG4gICAgOiBJU19CSU5EICYmIG93biA/IGN0eChvdXQsIGdsb2JhbClcbiAgICAvLyB3cmFwIGdsb2JhbCBjb25zdHJ1Y3RvcnMgZm9yIHByZXZlbnQgY2hhbmdlIHRoZW0gaW4gbGlicmFyeVxuICAgIDogSVNfV1JBUCAmJiB0YXJnZXRba2V5XSA9PSBvdXQgPyAoZnVuY3Rpb24gKEMpIHtcbiAgICAgIHZhciBGID0gZnVuY3Rpb24gKGEsIGIsIGMpIHtcbiAgICAgICAgaWYgKHRoaXMgaW5zdGFuY2VvZiBDKSB7XG4gICAgICAgICAgc3dpdGNoIChhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgICAgICAgICBjYXNlIDA6IHJldHVybiBuZXcgQygpO1xuICAgICAgICAgICAgY2FzZSAxOiByZXR1cm4gbmV3IEMoYSk7XG4gICAgICAgICAgICBjYXNlIDI6IHJldHVybiBuZXcgQyhhLCBiKTtcbiAgICAgICAgICB9IHJldHVybiBuZXcgQyhhLCBiLCBjKTtcbiAgICAgICAgfSByZXR1cm4gQy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgfTtcbiAgICAgIEZbUFJPVE9UWVBFXSA9IENbUFJPVE9UWVBFXTtcbiAgICAgIHJldHVybiBGO1xuICAgIC8vIG1ha2Ugc3RhdGljIHZlcnNpb25zIGZvciBwcm90b3R5cGUgbWV0aG9kc1xuICAgIH0pKG91dCkgOiBJU19QUk9UTyAmJiB0eXBlb2Ygb3V0ID09ICdmdW5jdGlvbicgPyBjdHgoRnVuY3Rpb24uY2FsbCwgb3V0KSA6IG91dDtcbiAgICAvLyBleHBvcnQgcHJvdG8gbWV0aG9kcyB0byBjb3JlLiVDT05TVFJVQ1RPUiUubWV0aG9kcy4lTkFNRSVcbiAgICBpZiAoSVNfUFJPVE8pIHtcbiAgICAgIChleHBvcnRzLnZpcnR1YWwgfHwgKGV4cG9ydHMudmlydHVhbCA9IHt9KSlba2V5XSA9IG91dDtcbiAgICAgIC8vIGV4cG9ydCBwcm90byBtZXRob2RzIHRvIGNvcmUuJUNPTlNUUlVDVE9SJS5wcm90b3R5cGUuJU5BTUUlXG4gICAgICBpZiAodHlwZSAmICRleHBvcnQuUiAmJiBleHBQcm90byAmJiAhZXhwUHJvdG9ba2V5XSkgaGlkZShleHBQcm90bywga2V5LCBvdXQpO1xuICAgIH1cbiAgfVxufTtcbi8vIHR5cGUgYml0bWFwXG4kZXhwb3J0LkYgPSAxOyAgIC8vIGZvcmNlZFxuJGV4cG9ydC5HID0gMjsgICAvLyBnbG9iYWxcbiRleHBvcnQuUyA9IDQ7ICAgLy8gc3RhdGljXG4kZXhwb3J0LlAgPSA4OyAgIC8vIHByb3RvXG4kZXhwb3J0LkIgPSAxNjsgIC8vIGJpbmRcbiRleHBvcnQuVyA9IDMyOyAgLy8gd3JhcFxuJGV4cG9ydC5VID0gNjQ7ICAvLyBzYWZlXG4kZXhwb3J0LlIgPSAxMjg7IC8vIHJlYWwgcHJvdG8gbWV0aG9kIGZvciBgbGlicmFyeWBcbm1vZHVsZS5leHBvcnRzID0gJGV4cG9ydDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZXhwb3J0LmpzXG4vLyBtb2R1bGUgaWQgPSAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2V4cG9ydC5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IG1haW4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChleGVjKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuICEhZXhlYygpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2ZhaWxzLmpzXG4vLyBtb2R1bGUgaWQgPSAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2ZhaWxzLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gbWFpbiIsInZhciBjdHggPSByZXF1aXJlKCcuL19jdHgnKTtcbnZhciBjYWxsID0gcmVxdWlyZSgnLi9faXRlci1jYWxsJyk7XG52YXIgaXNBcnJheUl0ZXIgPSByZXF1aXJlKCcuL19pcy1hcnJheS1pdGVyJyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciB0b0xlbmd0aCA9IHJlcXVpcmUoJy4vX3RvLWxlbmd0aCcpO1xudmFyIGdldEl0ZXJGbiA9IHJlcXVpcmUoJy4vY29yZS5nZXQtaXRlcmF0b3ItbWV0aG9kJyk7XG52YXIgQlJFQUsgPSB7fTtcbnZhciBSRVRVUk4gPSB7fTtcbnZhciBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlcmFibGUsIGVudHJpZXMsIGZuLCB0aGF0LCBJVEVSQVRPUikge1xuICB2YXIgaXRlckZuID0gSVRFUkFUT1IgPyBmdW5jdGlvbiAoKSB7IHJldHVybiBpdGVyYWJsZTsgfSA6IGdldEl0ZXJGbihpdGVyYWJsZSk7XG4gIHZhciBmID0gY3R4KGZuLCB0aGF0LCBlbnRyaWVzID8gMiA6IDEpO1xuICB2YXIgaW5kZXggPSAwO1xuICB2YXIgbGVuZ3RoLCBzdGVwLCBpdGVyYXRvciwgcmVzdWx0O1xuICBpZiAodHlwZW9mIGl0ZXJGbiAhPSAnZnVuY3Rpb24nKSB0aHJvdyBUeXBlRXJyb3IoaXRlcmFibGUgKyAnIGlzIG5vdCBpdGVyYWJsZSEnKTtcbiAgLy8gZmFzdCBjYXNlIGZvciBhcnJheXMgd2l0aCBkZWZhdWx0IGl0ZXJhdG9yXG4gIGlmIChpc0FycmF5SXRlcihpdGVyRm4pKSBmb3IgKGxlbmd0aCA9IHRvTGVuZ3RoKGl0ZXJhYmxlLmxlbmd0aCk7IGxlbmd0aCA+IGluZGV4OyBpbmRleCsrKSB7XG4gICAgcmVzdWx0ID0gZW50cmllcyA/IGYoYW5PYmplY3Qoc3RlcCA9IGl0ZXJhYmxlW2luZGV4XSlbMF0sIHN0ZXBbMV0pIDogZihpdGVyYWJsZVtpbmRleF0pO1xuICAgIGlmIChyZXN1bHQgPT09IEJSRUFLIHx8IHJlc3VsdCA9PT0gUkVUVVJOKSByZXR1cm4gcmVzdWx0O1xuICB9IGVsc2UgZm9yIChpdGVyYXRvciA9IGl0ZXJGbi5jYWxsKGl0ZXJhYmxlKTsgIShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lOykge1xuICAgIHJlc3VsdCA9IGNhbGwoaXRlcmF0b3IsIGYsIHN0ZXAudmFsdWUsIGVudHJpZXMpO1xuICAgIGlmIChyZXN1bHQgPT09IEJSRUFLIHx8IHJlc3VsdCA9PT0gUkVUVVJOKSByZXR1cm4gcmVzdWx0O1xuICB9XG59O1xuZXhwb3J0cy5CUkVBSyA9IEJSRUFLO1xuZXhwb3J0cy5SRVRVUk4gPSBSRVRVUk47XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2Zvci1vZi5qc1xuLy8gbW9kdWxlIGlkID0gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19mb3Itb2YuanNcbi8vIG1vZHVsZSBjaHVua3MgPSBtYWluIiwiLy8gaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzg2I2lzc3VlY29tbWVudC0xMTU3NTkwMjhcbnZhciBnbG9iYWwgPSBtb2R1bGUuZXhwb3J0cyA9IHR5cGVvZiB3aW5kb3cgIT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93Lk1hdGggPT0gTWF0aFxuICA/IHdpbmRvdyA6IHR5cGVvZiBzZWxmICE9ICd1bmRlZmluZWQnICYmIHNlbGYuTWF0aCA9PSBNYXRoID8gc2VsZlxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbmV3LWZ1bmNcbiAgOiBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuaWYgKHR5cGVvZiBfX2cgPT0gJ251bWJlcicpIF9fZyA9IGdsb2JhbDsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZlxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19nbG9iYWwuanNcbi8vIG1vZHVsZSBpZCA9IC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZ2xvYmFsLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gbWFpbiIsInZhciBoYXNPd25Qcm9wZXJ0eSA9IHt9Lmhhc093blByb3BlcnR5O1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQsIGtleSkge1xuICByZXR1cm4gaGFzT3duUHJvcGVydHkuY2FsbChpdCwga2V5KTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2hhcy5qc1xuLy8gbW9kdWxlIGlkID0gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19oYXMuanNcbi8vIG1vZHVsZSBjaHVua3MgPSBtYWluIiwidmFyIGRQID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJyk7XG52YXIgY3JlYXRlRGVzYyA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IGZ1bmN0aW9uIChvYmplY3QsIGtleSwgdmFsdWUpIHtcbiAgcmV0dXJuIGRQLmYob2JqZWN0LCBrZXksIGNyZWF0ZURlc2MoMSwgdmFsdWUpKTtcbn0gOiBmdW5jdGlvbiAob2JqZWN0LCBrZXksIHZhbHVlKSB7XG4gIG9iamVjdFtrZXldID0gdmFsdWU7XG4gIHJldHVybiBvYmplY3Q7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19oaWRlLmpzXG4vLyBtb2R1bGUgaWQgPSAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2hpZGUuanNcbi8vIG1vZHVsZSBjaHVua3MgPSBtYWluIiwidmFyIGRvY3VtZW50ID0gcmVxdWlyZSgnLi9fZ2xvYmFsJykuZG9jdW1lbnQ7XG5tb2R1bGUuZXhwb3J0cyA9IGRvY3VtZW50ICYmIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faHRtbC5qc1xuLy8gbW9kdWxlIGlkID0gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19odG1sLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gbWFpbiIsIm1vZHVsZS5leHBvcnRzID0gIXJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgJiYgIXJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24gKCkge1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KHJlcXVpcmUoJy4vX2RvbS1jcmVhdGUnKSgnZGl2JyksICdhJywgeyBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIDc7IH0gfSkuYSAhPSA3O1xufSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2llOC1kb20tZGVmaW5lLmpzXG4vLyBtb2R1bGUgaWQgPSAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2llOC1kb20tZGVmaW5lLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gbWFpbiIsIi8vIGZhc3QgYXBwbHksIGh0dHA6Ly9qc3BlcmYubG5raXQuY29tL2Zhc3QtYXBwbHkvNVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZm4sIGFyZ3MsIHRoYXQpIHtcbiAgdmFyIHVuID0gdGhhdCA9PT0gdW5kZWZpbmVkO1xuICBzd2l0Y2ggKGFyZ3MubGVuZ3RoKSB7XG4gICAgY2FzZSAwOiByZXR1cm4gdW4gPyBmbigpXG4gICAgICAgICAgICAgICAgICAgICAgOiBmbi5jYWxsKHRoYXQpO1xuICAgIGNhc2UgMTogcmV0dXJuIHVuID8gZm4oYXJnc1swXSlcbiAgICAgICAgICAgICAgICAgICAgICA6IGZuLmNhbGwodGhhdCwgYXJnc1swXSk7XG4gICAgY2FzZSAyOiByZXR1cm4gdW4gPyBmbihhcmdzWzBdLCBhcmdzWzFdKVxuICAgICAgICAgICAgICAgICAgICAgIDogZm4uY2FsbCh0aGF0LCBhcmdzWzBdLCBhcmdzWzFdKTtcbiAgICBjYXNlIDM6IHJldHVybiB1biA/IGZuKGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0pXG4gICAgICAgICAgICAgICAgICAgICAgOiBmbi5jYWxsKHRoYXQsIGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0pO1xuICAgIGNhc2UgNDogcmV0dXJuIHVuID8gZm4oYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSwgYXJnc1szXSlcbiAgICAgICAgICAgICAgICAgICAgICA6IGZuLmNhbGwodGhhdCwgYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSwgYXJnc1szXSk7XG4gIH0gcmV0dXJuIGZuLmFwcGx5KHRoYXQsIGFyZ3MpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faW52b2tlLmpzXG4vLyBtb2R1bGUgaWQgPSAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2ludm9rZS5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IG1haW4iLCIvLyBmYWxsYmFjayBmb3Igbm9uLWFycmF5LWxpa2UgRVMzIGFuZCBub24tZW51bWVyYWJsZSBvbGQgVjggc3RyaW5nc1xudmFyIGNvZiA9IHJlcXVpcmUoJy4vX2NvZicpO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXByb3RvdHlwZS1idWlsdGluc1xubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QoJ3onKS5wcm9wZXJ0eUlzRW51bWVyYWJsZSgwKSA/IE9iamVjdCA6IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gY29mKGl0KSA9PSAnU3RyaW5nJyA/IGl0LnNwbGl0KCcnKSA6IE9iamVjdChpdCk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pb2JqZWN0LmpzXG4vLyBtb2R1bGUgaWQgPSAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lvYmplY3QuanNcbi8vIG1vZHVsZSBjaHVua3MgPSBtYWluIiwiLy8gY2hlY2sgb24gZGVmYXVsdCBBcnJheSBpdGVyYXRvclxudmFyIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpO1xudmFyIElURVJBVE9SID0gcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJyk7XG52YXIgQXJyYXlQcm90byA9IEFycmF5LnByb3RvdHlwZTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGl0ICE9PSB1bmRlZmluZWQgJiYgKEl0ZXJhdG9ycy5BcnJheSA9PT0gaXQgfHwgQXJyYXlQcm90b1tJVEVSQVRPUl0gPT09IGl0KTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lzLWFycmF5LWl0ZXIuanNcbi8vIG1vZHVsZSBpZCA9IC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXMtYXJyYXktaXRlci5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IG1haW4iLCIvLyA3LjIuMiBJc0FycmF5KGFyZ3VtZW50KVxudmFyIGNvZiA9IHJlcXVpcmUoJy4vX2NvZicpO1xubW9kdWxlLmV4cG9ydHMgPSBBcnJheS5pc0FycmF5IHx8IGZ1bmN0aW9uIGlzQXJyYXkoYXJnKSB7XG4gIHJldHVybiBjb2YoYXJnKSA9PSAnQXJyYXknO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXMtYXJyYXkuanNcbi8vIG1vZHVsZSBpZCA9IC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXMtYXJyYXkuanNcbi8vIG1vZHVsZSBjaHVua3MgPSBtYWluIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIHR5cGVvZiBpdCA9PT0gJ29iamVjdCcgPyBpdCAhPT0gbnVsbCA6IHR5cGVvZiBpdCA9PT0gJ2Z1bmN0aW9uJztcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lzLW9iamVjdC5qc1xuLy8gbW9kdWxlIGlkID0gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pcy1vYmplY3QuanNcbi8vIG1vZHVsZSBjaHVua3MgPSBtYWluIiwiLy8gY2FsbCBzb21ldGhpbmcgb24gaXRlcmF0b3Igc3RlcCB3aXRoIHNhZmUgY2xvc2luZyBvbiBlcnJvclxudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVyYXRvciwgZm4sIHZhbHVlLCBlbnRyaWVzKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGVudHJpZXMgPyBmbihhbk9iamVjdCh2YWx1ZSlbMF0sIHZhbHVlWzFdKSA6IGZuKHZhbHVlKTtcbiAgLy8gNy40LjYgSXRlcmF0b3JDbG9zZShpdGVyYXRvciwgY29tcGxldGlvbilcbiAgfSBjYXRjaCAoZSkge1xuICAgIHZhciByZXQgPSBpdGVyYXRvclsncmV0dXJuJ107XG4gICAgaWYgKHJldCAhPT0gdW5kZWZpbmVkKSBhbk9iamVjdChyZXQuY2FsbChpdGVyYXRvcikpO1xuICAgIHRocm93IGU7XG4gIH1cbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItY2FsbC5qc1xuLy8gbW9kdWxlIGlkID0gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWNhbGwuanNcbi8vIG1vZHVsZSBjaHVua3MgPSBtYWluIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGNyZWF0ZSA9IHJlcXVpcmUoJy4vX29iamVjdC1jcmVhdGUnKTtcbnZhciBkZXNjcmlwdG9yID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpO1xudmFyIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZSgnLi9fc2V0LXRvLXN0cmluZy10YWcnKTtcbnZhciBJdGVyYXRvclByb3RvdHlwZSA9IHt9O1xuXG4vLyAyNS4xLjIuMS4xICVJdGVyYXRvclByb3RvdHlwZSVbQEBpdGVyYXRvcl0oKVxucmVxdWlyZSgnLi9faGlkZScpKEl0ZXJhdG9yUHJvdG90eXBlLCByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKSwgZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBOQU1FLCBuZXh0KSB7XG4gIENvbnN0cnVjdG9yLnByb3RvdHlwZSA9IGNyZWF0ZShJdGVyYXRvclByb3RvdHlwZSwgeyBuZXh0OiBkZXNjcmlwdG9yKDEsIG5leHQpIH0pO1xuICBzZXRUb1N0cmluZ1RhZyhDb25zdHJ1Y3RvciwgTkFNRSArICcgSXRlcmF0b3InKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItY3JlYXRlLmpzXG4vLyBtb2R1bGUgaWQgPSAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItY3JlYXRlLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gbWFpbiIsIid1c2Ugc3RyaWN0JztcbnZhciBMSUJSQVJZID0gcmVxdWlyZSgnLi9fbGlicmFyeScpO1xudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbnZhciByZWRlZmluZSA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lJyk7XG52YXIgaGlkZSA9IHJlcXVpcmUoJy4vX2hpZGUnKTtcbnZhciBJdGVyYXRvcnMgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKTtcbnZhciAkaXRlckNyZWF0ZSA9IHJlcXVpcmUoJy4vX2l0ZXItY3JlYXRlJyk7XG52YXIgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlKCcuL19zZXQtdG8tc3RyaW5nLXRhZycpO1xudmFyIGdldFByb3RvdHlwZU9mID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdwbycpO1xudmFyIElURVJBVE9SID0gcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJyk7XG52YXIgQlVHR1kgPSAhKFtdLmtleXMgJiYgJ25leHQnIGluIFtdLmtleXMoKSk7IC8vIFNhZmFyaSBoYXMgYnVnZ3kgaXRlcmF0b3JzIHcvbyBgbmV4dGBcbnZhciBGRl9JVEVSQVRPUiA9ICdAQGl0ZXJhdG9yJztcbnZhciBLRVlTID0gJ2tleXMnO1xudmFyIFZBTFVFUyA9ICd2YWx1ZXMnO1xuXG52YXIgcmV0dXJuVGhpcyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKEJhc2UsIE5BTUUsIENvbnN0cnVjdG9yLCBuZXh0LCBERUZBVUxULCBJU19TRVQsIEZPUkNFRCkge1xuICAkaXRlckNyZWF0ZShDb25zdHJ1Y3RvciwgTkFNRSwgbmV4dCk7XG4gIHZhciBnZXRNZXRob2QgPSBmdW5jdGlvbiAoa2luZCkge1xuICAgIGlmICghQlVHR1kgJiYga2luZCBpbiBwcm90bykgcmV0dXJuIHByb3RvW2tpbmRdO1xuICAgIHN3aXRjaCAoa2luZCkge1xuICAgICAgY2FzZSBLRVlTOiByZXR1cm4gZnVuY3Rpb24ga2V5cygpIHsgcmV0dXJuIG5ldyBDb25zdHJ1Y3Rvcih0aGlzLCBraW5kKTsgfTtcbiAgICAgIGNhc2UgVkFMVUVTOiByZXR1cm4gZnVuY3Rpb24gdmFsdWVzKCkgeyByZXR1cm4gbmV3IENvbnN0cnVjdG9yKHRoaXMsIGtpbmQpOyB9O1xuICAgIH0gcmV0dXJuIGZ1bmN0aW9uIGVudHJpZXMoKSB7IHJldHVybiBuZXcgQ29uc3RydWN0b3IodGhpcywga2luZCk7IH07XG4gIH07XG4gIHZhciBUQUcgPSBOQU1FICsgJyBJdGVyYXRvcic7XG4gIHZhciBERUZfVkFMVUVTID0gREVGQVVMVCA9PSBWQUxVRVM7XG4gIHZhciBWQUxVRVNfQlVHID0gZmFsc2U7XG4gIHZhciBwcm90byA9IEJhc2UucHJvdG90eXBlO1xuICB2YXIgJG5hdGl2ZSA9IHByb3RvW0lURVJBVE9SXSB8fCBwcm90b1tGRl9JVEVSQVRPUl0gfHwgREVGQVVMVCAmJiBwcm90b1tERUZBVUxUXTtcbiAgdmFyICRkZWZhdWx0ID0gJG5hdGl2ZSB8fCBnZXRNZXRob2QoREVGQVVMVCk7XG4gIHZhciAkZW50cmllcyA9IERFRkFVTFQgPyAhREVGX1ZBTFVFUyA/ICRkZWZhdWx0IDogZ2V0TWV0aG9kKCdlbnRyaWVzJykgOiB1bmRlZmluZWQ7XG4gIHZhciAkYW55TmF0aXZlID0gTkFNRSA9PSAnQXJyYXknID8gcHJvdG8uZW50cmllcyB8fCAkbmF0aXZlIDogJG5hdGl2ZTtcbiAgdmFyIG1ldGhvZHMsIGtleSwgSXRlcmF0b3JQcm90b3R5cGU7XG4gIC8vIEZpeCBuYXRpdmVcbiAgaWYgKCRhbnlOYXRpdmUpIHtcbiAgICBJdGVyYXRvclByb3RvdHlwZSA9IGdldFByb3RvdHlwZU9mKCRhbnlOYXRpdmUuY2FsbChuZXcgQmFzZSgpKSk7XG4gICAgaWYgKEl0ZXJhdG9yUHJvdG90eXBlICE9PSBPYmplY3QucHJvdG90eXBlICYmIEl0ZXJhdG9yUHJvdG90eXBlLm5leHQpIHtcbiAgICAgIC8vIFNldCBAQHRvU3RyaW5nVGFnIHRvIG5hdGl2ZSBpdGVyYXRvcnNcbiAgICAgIHNldFRvU3RyaW5nVGFnKEl0ZXJhdG9yUHJvdG90eXBlLCBUQUcsIHRydWUpO1xuICAgICAgLy8gZml4IGZvciBzb21lIG9sZCBlbmdpbmVzXG4gICAgICBpZiAoIUxJQlJBUlkgJiYgdHlwZW9mIEl0ZXJhdG9yUHJvdG90eXBlW0lURVJBVE9SXSAhPSAnZnVuY3Rpb24nKSBoaWRlKEl0ZXJhdG9yUHJvdG90eXBlLCBJVEVSQVRPUiwgcmV0dXJuVGhpcyk7XG4gICAgfVxuICB9XG4gIC8vIGZpeCBBcnJheSN7dmFsdWVzLCBAQGl0ZXJhdG9yfS5uYW1lIGluIFY4IC8gRkZcbiAgaWYgKERFRl9WQUxVRVMgJiYgJG5hdGl2ZSAmJiAkbmF0aXZlLm5hbWUgIT09IFZBTFVFUykge1xuICAgIFZBTFVFU19CVUcgPSB0cnVlO1xuICAgICRkZWZhdWx0ID0gZnVuY3Rpb24gdmFsdWVzKCkgeyByZXR1cm4gJG5hdGl2ZS5jYWxsKHRoaXMpOyB9O1xuICB9XG4gIC8vIERlZmluZSBpdGVyYXRvclxuICBpZiAoKCFMSUJSQVJZIHx8IEZPUkNFRCkgJiYgKEJVR0dZIHx8IFZBTFVFU19CVUcgfHwgIXByb3RvW0lURVJBVE9SXSkpIHtcbiAgICBoaWRlKHByb3RvLCBJVEVSQVRPUiwgJGRlZmF1bHQpO1xuICB9XG4gIC8vIFBsdWcgZm9yIGxpYnJhcnlcbiAgSXRlcmF0b3JzW05BTUVdID0gJGRlZmF1bHQ7XG4gIEl0ZXJhdG9yc1tUQUddID0gcmV0dXJuVGhpcztcbiAgaWYgKERFRkFVTFQpIHtcbiAgICBtZXRob2RzID0ge1xuICAgICAgdmFsdWVzOiBERUZfVkFMVUVTID8gJGRlZmF1bHQgOiBnZXRNZXRob2QoVkFMVUVTKSxcbiAgICAgIGtleXM6IElTX1NFVCA/ICRkZWZhdWx0IDogZ2V0TWV0aG9kKEtFWVMpLFxuICAgICAgZW50cmllczogJGVudHJpZXNcbiAgICB9O1xuICAgIGlmIChGT1JDRUQpIGZvciAoa2V5IGluIG1ldGhvZHMpIHtcbiAgICAgIGlmICghKGtleSBpbiBwcm90bykpIHJlZGVmaW5lKHByb3RvLCBrZXksIG1ldGhvZHNba2V5XSk7XG4gICAgfSBlbHNlICRleHBvcnQoJGV4cG9ydC5QICsgJGV4cG9ydC5GICogKEJVR0dZIHx8IFZBTFVFU19CVUcpLCBOQU1FLCBtZXRob2RzKTtcbiAgfVxuICByZXR1cm4gbWV0aG9kcztcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItZGVmaW5lLmpzXG4vLyBtb2R1bGUgaWQgPSAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItZGVmaW5lLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gbWFpbiIsInZhciBJVEVSQVRPUiA9IHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpO1xudmFyIFNBRkVfQ0xPU0lORyA9IGZhbHNlO1xuXG50cnkge1xuICB2YXIgcml0ZXIgPSBbN11bSVRFUkFUT1JdKCk7XG4gIHJpdGVyWydyZXR1cm4nXSA9IGZ1bmN0aW9uICgpIHsgU0FGRV9DTE9TSU5HID0gdHJ1ZTsgfTtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXRocm93LWxpdGVyYWxcbiAgQXJyYXkuZnJvbShyaXRlciwgZnVuY3Rpb24gKCkgeyB0aHJvdyAyOyB9KTtcbn0gY2F0Y2ggKGUpIHsgLyogZW1wdHkgKi8gfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChleGVjLCBza2lwQ2xvc2luZykge1xuICBpZiAoIXNraXBDbG9zaW5nICYmICFTQUZFX0NMT1NJTkcpIHJldHVybiBmYWxzZTtcbiAgdmFyIHNhZmUgPSBmYWxzZTtcbiAgdHJ5IHtcbiAgICB2YXIgYXJyID0gWzddO1xuICAgIHZhciBpdGVyID0gYXJyW0lURVJBVE9SXSgpO1xuICAgIGl0ZXIubmV4dCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHsgZG9uZTogc2FmZSA9IHRydWUgfTsgfTtcbiAgICBhcnJbSVRFUkFUT1JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gaXRlcjsgfTtcbiAgICBleGVjKGFycik7XG4gIH0gY2F0Y2ggKGUpIHsgLyogZW1wdHkgKi8gfVxuICByZXR1cm4gc2FmZTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItZGV0ZWN0LmpzXG4vLyBtb2R1bGUgaWQgPSAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItZGV0ZWN0LmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gbWFpbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGRvbmUsIHZhbHVlKSB7XG4gIHJldHVybiB7IHZhbHVlOiB2YWx1ZSwgZG9uZTogISFkb25lIH07XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLXN0ZXAuanNcbi8vIG1vZHVsZSBpZCA9IC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1zdGVwLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gbWFpbiIsIm1vZHVsZS5leHBvcnRzID0ge307XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXJhdG9ycy5qc1xuLy8gbW9kdWxlIGlkID0gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyYXRvcnMuanNcbi8vIG1vZHVsZSBjaHVua3MgPSBtYWluIiwibW9kdWxlLmV4cG9ydHMgPSB0cnVlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19saWJyYXJ5LmpzXG4vLyBtb2R1bGUgaWQgPSAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2xpYnJhcnkuanNcbi8vIG1vZHVsZSBjaHVua3MgPSBtYWluIiwidmFyIE1FVEEgPSByZXF1aXJlKCcuL191aWQnKSgnbWV0YScpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG52YXIgaGFzID0gcmVxdWlyZSgnLi9faGFzJyk7XG52YXIgc2V0RGVzYyA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmY7XG52YXIgaWQgPSAwO1xudmFyIGlzRXh0ZW5zaWJsZSA9IE9iamVjdC5pc0V4dGVuc2libGUgfHwgZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdHJ1ZTtcbn07XG52YXIgRlJFRVpFID0gIXJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24gKCkge1xuICByZXR1cm4gaXNFeHRlbnNpYmxlKE9iamVjdC5wcmV2ZW50RXh0ZW5zaW9ucyh7fSkpO1xufSk7XG52YXIgc2V0TWV0YSA9IGZ1bmN0aW9uIChpdCkge1xuICBzZXREZXNjKGl0LCBNRVRBLCB7IHZhbHVlOiB7XG4gICAgaTogJ08nICsgKytpZCwgLy8gb2JqZWN0IElEXG4gICAgdzoge30gICAgICAgICAgLy8gd2VhayBjb2xsZWN0aW9ucyBJRHNcbiAgfSB9KTtcbn07XG52YXIgZmFzdEtleSA9IGZ1bmN0aW9uIChpdCwgY3JlYXRlKSB7XG4gIC8vIHJldHVybiBwcmltaXRpdmUgd2l0aCBwcmVmaXhcbiAgaWYgKCFpc09iamVjdChpdCkpIHJldHVybiB0eXBlb2YgaXQgPT0gJ3N5bWJvbCcgPyBpdCA6ICh0eXBlb2YgaXQgPT0gJ3N0cmluZycgPyAnUycgOiAnUCcpICsgaXQ7XG4gIGlmICghaGFzKGl0LCBNRVRBKSkge1xuICAgIC8vIGNhbid0IHNldCBtZXRhZGF0YSB0byB1bmNhdWdodCBmcm96ZW4gb2JqZWN0XG4gICAgaWYgKCFpc0V4dGVuc2libGUoaXQpKSByZXR1cm4gJ0YnO1xuICAgIC8vIG5vdCBuZWNlc3NhcnkgdG8gYWRkIG1ldGFkYXRhXG4gICAgaWYgKCFjcmVhdGUpIHJldHVybiAnRSc7XG4gICAgLy8gYWRkIG1pc3NpbmcgbWV0YWRhdGFcbiAgICBzZXRNZXRhKGl0KTtcbiAgLy8gcmV0dXJuIG9iamVjdCBJRFxuICB9IHJldHVybiBpdFtNRVRBXS5pO1xufTtcbnZhciBnZXRXZWFrID0gZnVuY3Rpb24gKGl0LCBjcmVhdGUpIHtcbiAgaWYgKCFoYXMoaXQsIE1FVEEpKSB7XG4gICAgLy8gY2FuJ3Qgc2V0IG1ldGFkYXRhIHRvIHVuY2F1Z2h0IGZyb3plbiBvYmplY3RcbiAgICBpZiAoIWlzRXh0ZW5zaWJsZShpdCkpIHJldHVybiB0cnVlO1xuICAgIC8vIG5vdCBuZWNlc3NhcnkgdG8gYWRkIG1ldGFkYXRhXG4gICAgaWYgKCFjcmVhdGUpIHJldHVybiBmYWxzZTtcbiAgICAvLyBhZGQgbWlzc2luZyBtZXRhZGF0YVxuICAgIHNldE1ldGEoaXQpO1xuICAvLyByZXR1cm4gaGFzaCB3ZWFrIGNvbGxlY3Rpb25zIElEc1xuICB9IHJldHVybiBpdFtNRVRBXS53O1xufTtcbi8vIGFkZCBtZXRhZGF0YSBvbiBmcmVlemUtZmFtaWx5IG1ldGhvZHMgY2FsbGluZ1xudmFyIG9uRnJlZXplID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmIChGUkVFWkUgJiYgbWV0YS5ORUVEICYmIGlzRXh0ZW5zaWJsZShpdCkgJiYgIWhhcyhpdCwgTUVUQSkpIHNldE1ldGEoaXQpO1xuICByZXR1cm4gaXQ7XG59O1xudmFyIG1ldGEgPSBtb2R1bGUuZXhwb3J0cyA9IHtcbiAgS0VZOiBNRVRBLFxuICBORUVEOiBmYWxzZSxcbiAgZmFzdEtleTogZmFzdEtleSxcbiAgZ2V0V2VhazogZ2V0V2VhayxcbiAgb25GcmVlemU6IG9uRnJlZXplXG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19tZXRhLmpzXG4vLyBtb2R1bGUgaWQgPSAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX21ldGEuanNcbi8vIG1vZHVsZSBjaHVua3MgPSBtYWluIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIG1hY3JvdGFzayA9IHJlcXVpcmUoJy4vX3Rhc2snKS5zZXQ7XG52YXIgT2JzZXJ2ZXIgPSBnbG9iYWwuTXV0YXRpb25PYnNlcnZlciB8fCBnbG9iYWwuV2ViS2l0TXV0YXRpb25PYnNlcnZlcjtcbnZhciBwcm9jZXNzID0gZ2xvYmFsLnByb2Nlc3M7XG52YXIgUHJvbWlzZSA9IGdsb2JhbC5Qcm9taXNlO1xudmFyIGlzTm9kZSA9IHJlcXVpcmUoJy4vX2NvZicpKHByb2Nlc3MpID09ICdwcm9jZXNzJztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBoZWFkLCBsYXN0LCBub3RpZnk7XG5cbiAgdmFyIGZsdXNoID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBwYXJlbnQsIGZuO1xuICAgIGlmIChpc05vZGUgJiYgKHBhcmVudCA9IHByb2Nlc3MuZG9tYWluKSkgcGFyZW50LmV4aXQoKTtcbiAgICB3aGlsZSAoaGVhZCkge1xuICAgICAgZm4gPSBoZWFkLmZuO1xuICAgICAgaGVhZCA9IGhlYWQubmV4dDtcbiAgICAgIHRyeSB7XG4gICAgICAgIGZuKCk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGlmIChoZWFkKSBub3RpZnkoKTtcbiAgICAgICAgZWxzZSBsYXN0ID0gdW5kZWZpbmVkO1xuICAgICAgICB0aHJvdyBlO1xuICAgICAgfVxuICAgIH0gbGFzdCA9IHVuZGVmaW5lZDtcbiAgICBpZiAocGFyZW50KSBwYXJlbnQuZW50ZXIoKTtcbiAgfTtcblxuICAvLyBOb2RlLmpzXG4gIGlmIChpc05vZGUpIHtcbiAgICBub3RpZnkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBwcm9jZXNzLm5leHRUaWNrKGZsdXNoKTtcbiAgICB9O1xuICAvLyBicm93c2VycyB3aXRoIE11dGF0aW9uT2JzZXJ2ZXIsIGV4Y2VwdCBpT1MgU2FmYXJpIC0gaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzMzOVxuICB9IGVsc2UgaWYgKE9ic2VydmVyICYmICEoZ2xvYmFsLm5hdmlnYXRvciAmJiBnbG9iYWwubmF2aWdhdG9yLnN0YW5kYWxvbmUpKSB7XG4gICAgdmFyIHRvZ2dsZSA9IHRydWU7XG4gICAgdmFyIG5vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnJyk7XG4gICAgbmV3IE9ic2VydmVyKGZsdXNoKS5vYnNlcnZlKG5vZGUsIHsgY2hhcmFjdGVyRGF0YTogdHJ1ZSB9KTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1uZXdcbiAgICBub3RpZnkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBub2RlLmRhdGEgPSB0b2dnbGUgPSAhdG9nZ2xlO1xuICAgIH07XG4gIC8vIGVudmlyb25tZW50cyB3aXRoIG1heWJlIG5vbi1jb21wbGV0ZWx5IGNvcnJlY3QsIGJ1dCBleGlzdGVudCBQcm9taXNlXG4gIH0gZWxzZSBpZiAoUHJvbWlzZSAmJiBQcm9taXNlLnJlc29sdmUpIHtcbiAgICAvLyBQcm9taXNlLnJlc29sdmUgd2l0aG91dCBhbiBhcmd1bWVudCB0aHJvd3MgYW4gZXJyb3IgaW4gTEcgV2ViT1MgMlxuICAgIHZhciBwcm9taXNlID0gUHJvbWlzZS5yZXNvbHZlKHVuZGVmaW5lZCk7XG4gICAgbm90aWZ5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgcHJvbWlzZS50aGVuKGZsdXNoKTtcbiAgICB9O1xuICAvLyBmb3Igb3RoZXIgZW52aXJvbm1lbnRzIC0gbWFjcm90YXNrIGJhc2VkIG9uOlxuICAvLyAtIHNldEltbWVkaWF0ZVxuICAvLyAtIE1lc3NhZ2VDaGFubmVsXG4gIC8vIC0gd2luZG93LnBvc3RNZXNzYWdcbiAgLy8gLSBvbnJlYWR5c3RhdGVjaGFuZ2VcbiAgLy8gLSBzZXRUaW1lb3V0XG4gIH0gZWxzZSB7XG4gICAgbm90aWZ5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgLy8gc3RyYW5nZSBJRSArIHdlYnBhY2sgZGV2IHNlcnZlciBidWcgLSB1c2UgLmNhbGwoZ2xvYmFsKVxuICAgICAgbWFjcm90YXNrLmNhbGwoZ2xvYmFsLCBmbHVzaCk7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiAoZm4pIHtcbiAgICB2YXIgdGFzayA9IHsgZm46IGZuLCBuZXh0OiB1bmRlZmluZWQgfTtcbiAgICBpZiAobGFzdCkgbGFzdC5uZXh0ID0gdGFzaztcbiAgICBpZiAoIWhlYWQpIHtcbiAgICAgIGhlYWQgPSB0YXNrO1xuICAgICAgbm90aWZ5KCk7XG4gICAgfSBsYXN0ID0gdGFzaztcbiAgfTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX21pY3JvdGFzay5qc1xuLy8gbW9kdWxlIGlkID0gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19taWNyb3Rhc2suanNcbi8vIG1vZHVsZSBjaHVua3MgPSBtYWluIiwiJ3VzZSBzdHJpY3QnO1xuLy8gMjUuNC4xLjUgTmV3UHJvbWlzZUNhcGFiaWxpdHkoQylcbnZhciBhRnVuY3Rpb24gPSByZXF1aXJlKCcuL19hLWZ1bmN0aW9uJyk7XG5cbmZ1bmN0aW9uIFByb21pc2VDYXBhYmlsaXR5KEMpIHtcbiAgdmFyIHJlc29sdmUsIHJlamVjdDtcbiAgdGhpcy5wcm9taXNlID0gbmV3IEMoZnVuY3Rpb24gKCQkcmVzb2x2ZSwgJCRyZWplY3QpIHtcbiAgICBpZiAocmVzb2x2ZSAhPT0gdW5kZWZpbmVkIHx8IHJlamVjdCAhPT0gdW5kZWZpbmVkKSB0aHJvdyBUeXBlRXJyb3IoJ0JhZCBQcm9taXNlIGNvbnN0cnVjdG9yJyk7XG4gICAgcmVzb2x2ZSA9ICQkcmVzb2x2ZTtcbiAgICByZWplY3QgPSAkJHJlamVjdDtcbiAgfSk7XG4gIHRoaXMucmVzb2x2ZSA9IGFGdW5jdGlvbihyZXNvbHZlKTtcbiAgdGhpcy5yZWplY3QgPSBhRnVuY3Rpb24ocmVqZWN0KTtcbn1cblxubW9kdWxlLmV4cG9ydHMuZiA9IGZ1bmN0aW9uIChDKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZUNhcGFiaWxpdHkoQyk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19uZXctcHJvbWlzZS1jYXBhYmlsaXR5LmpzXG4vLyBtb2R1bGUgaWQgPSAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX25ldy1wcm9taXNlLWNhcGFiaWxpdHkuanNcbi8vIG1vZHVsZSBjaHVua3MgPSBtYWluIiwiLy8gMTkuMS4yLjIgLyAxNS4yLjMuNSBPYmplY3QuY3JlYXRlKE8gWywgUHJvcGVydGllc10pXG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciBkUHMgPSByZXF1aXJlKCcuL19vYmplY3QtZHBzJyk7XG52YXIgZW51bUJ1Z0tleXMgPSByZXF1aXJlKCcuL19lbnVtLWJ1Zy1rZXlzJyk7XG52YXIgSUVfUFJPVE8gPSByZXF1aXJlKCcuL19zaGFyZWQta2V5JykoJ0lFX1BST1RPJyk7XG52YXIgRW1wdHkgPSBmdW5jdGlvbiAoKSB7IC8qIGVtcHR5ICovIH07XG52YXIgUFJPVE9UWVBFID0gJ3Byb3RvdHlwZSc7XG5cbi8vIENyZWF0ZSBvYmplY3Qgd2l0aCBmYWtlIGBudWxsYCBwcm90b3R5cGU6IHVzZSBpZnJhbWUgT2JqZWN0IHdpdGggY2xlYXJlZCBwcm90b3R5cGVcbnZhciBjcmVhdGVEaWN0ID0gZnVuY3Rpb24gKCkge1xuICAvLyBUaHJhc2gsIHdhc3RlIGFuZCBzb2RvbXk6IElFIEdDIGJ1Z1xuICB2YXIgaWZyYW1lID0gcmVxdWlyZSgnLi9fZG9tLWNyZWF0ZScpKCdpZnJhbWUnKTtcbiAgdmFyIGkgPSBlbnVtQnVnS2V5cy5sZW5ndGg7XG4gIHZhciBsdCA9ICc8JztcbiAgdmFyIGd0ID0gJz4nO1xuICB2YXIgaWZyYW1lRG9jdW1lbnQ7XG4gIGlmcmFtZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICByZXF1aXJlKCcuL19odG1sJykuYXBwZW5kQ2hpbGQoaWZyYW1lKTtcbiAgaWZyYW1lLnNyYyA9ICdqYXZhc2NyaXB0Oic7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tc2NyaXB0LXVybFxuICAvLyBjcmVhdGVEaWN0ID0gaWZyYW1lLmNvbnRlbnRXaW5kb3cuT2JqZWN0O1xuICAvLyBodG1sLnJlbW92ZUNoaWxkKGlmcmFtZSk7XG4gIGlmcmFtZURvY3VtZW50ID0gaWZyYW1lLmNvbnRlbnRXaW5kb3cuZG9jdW1lbnQ7XG4gIGlmcmFtZURvY3VtZW50Lm9wZW4oKTtcbiAgaWZyYW1lRG9jdW1lbnQud3JpdGUobHQgKyAnc2NyaXB0JyArIGd0ICsgJ2RvY3VtZW50LkY9T2JqZWN0JyArIGx0ICsgJy9zY3JpcHQnICsgZ3QpO1xuICBpZnJhbWVEb2N1bWVudC5jbG9zZSgpO1xuICBjcmVhdGVEaWN0ID0gaWZyYW1lRG9jdW1lbnQuRjtcbiAgd2hpbGUgKGktLSkgZGVsZXRlIGNyZWF0ZURpY3RbUFJPVE9UWVBFXVtlbnVtQnVnS2V5c1tpXV07XG4gIHJldHVybiBjcmVhdGVEaWN0KCk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5jcmVhdGUgfHwgZnVuY3Rpb24gY3JlYXRlKE8sIFByb3BlcnRpZXMpIHtcbiAgdmFyIHJlc3VsdDtcbiAgaWYgKE8gIT09IG51bGwpIHtcbiAgICBFbXB0eVtQUk9UT1RZUEVdID0gYW5PYmplY3QoTyk7XG4gICAgcmVzdWx0ID0gbmV3IEVtcHR5KCk7XG4gICAgRW1wdHlbUFJPVE9UWVBFXSA9IG51bGw7XG4gICAgLy8gYWRkIFwiX19wcm90b19fXCIgZm9yIE9iamVjdC5nZXRQcm90b3R5cGVPZiBwb2x5ZmlsbFxuICAgIHJlc3VsdFtJRV9QUk9UT10gPSBPO1xuICB9IGVsc2UgcmVzdWx0ID0gY3JlYXRlRGljdCgpO1xuICByZXR1cm4gUHJvcGVydGllcyA9PT0gdW5kZWZpbmVkID8gcmVzdWx0IDogZFBzKHJlc3VsdCwgUHJvcGVydGllcyk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtY3JlYXRlLmpzXG4vLyBtb2R1bGUgaWQgPSAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1jcmVhdGUuanNcbi8vIG1vZHVsZSBjaHVua3MgPSBtYWluIiwidmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgSUU4X0RPTV9ERUZJTkUgPSByZXF1aXJlKCcuL19pZTgtZG9tLWRlZmluZScpO1xudmFyIHRvUHJpbWl0aXZlID0gcmVxdWlyZSgnLi9fdG8tcHJpbWl0aXZlJyk7XG52YXIgZFAgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG5cbmV4cG9ydHMuZiA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBPYmplY3QuZGVmaW5lUHJvcGVydHkgOiBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKSB7XG4gIGFuT2JqZWN0KE8pO1xuICBQID0gdG9QcmltaXRpdmUoUCwgdHJ1ZSk7XG4gIGFuT2JqZWN0KEF0dHJpYnV0ZXMpO1xuICBpZiAoSUU4X0RPTV9ERUZJTkUpIHRyeSB7XG4gICAgcmV0dXJuIGRQKE8sIFAsIEF0dHJpYnV0ZXMpO1xuICB9IGNhdGNoIChlKSB7IC8qIGVtcHR5ICovIH1cbiAgaWYgKCdnZXQnIGluIEF0dHJpYnV0ZXMgfHwgJ3NldCcgaW4gQXR0cmlidXRlcykgdGhyb3cgVHlwZUVycm9yKCdBY2Nlc3NvcnMgbm90IHN1cHBvcnRlZCEnKTtcbiAgaWYgKCd2YWx1ZScgaW4gQXR0cmlidXRlcykgT1tQXSA9IEF0dHJpYnV0ZXMudmFsdWU7XG4gIHJldHVybiBPO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWRwLmpzXG4vLyBtb2R1bGUgaWQgPSAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1kcC5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IG1haW4iLCJ2YXIgZFAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIGdldEtleXMgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyA6IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXMoTywgUHJvcGVydGllcykge1xuICBhbk9iamVjdChPKTtcbiAgdmFyIGtleXMgPSBnZXRLZXlzKFByb3BlcnRpZXMpO1xuICB2YXIgbGVuZ3RoID0ga2V5cy5sZW5ndGg7XG4gIHZhciBpID0gMDtcbiAgdmFyIFA7XG4gIHdoaWxlIChsZW5ndGggPiBpKSBkUC5mKE8sIFAgPSBrZXlzW2krK10sIFByb3BlcnRpZXNbUF0pO1xuICByZXR1cm4gTztcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1kcHMuanNcbi8vIG1vZHVsZSBpZCA9IC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWRwcy5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IG1haW4iLCJ2YXIgcElFID0gcmVxdWlyZSgnLi9fb2JqZWN0LXBpZScpO1xudmFyIGNyZWF0ZURlc2MgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJyk7XG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpO1xudmFyIHRvUHJpbWl0aXZlID0gcmVxdWlyZSgnLi9fdG8tcHJpbWl0aXZlJyk7XG52YXIgaGFzID0gcmVxdWlyZSgnLi9faGFzJyk7XG52YXIgSUU4X0RPTV9ERUZJTkUgPSByZXF1aXJlKCcuL19pZTgtZG9tLWRlZmluZScpO1xudmFyIGdPUEQgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG5leHBvcnRzLmYgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gZ09QRCA6IGZ1bmN0aW9uIGdldE93blByb3BlcnR5RGVzY3JpcHRvcihPLCBQKSB7XG4gIE8gPSB0b0lPYmplY3QoTyk7XG4gIFAgPSB0b1ByaW1pdGl2ZShQLCB0cnVlKTtcbiAgaWYgKElFOF9ET01fREVGSU5FKSB0cnkge1xuICAgIHJldHVybiBnT1BEKE8sIFApO1xuICB9IGNhdGNoIChlKSB7IC8qIGVtcHR5ICovIH1cbiAgaWYgKGhhcyhPLCBQKSkgcmV0dXJuIGNyZWF0ZURlc2MoIXBJRS5mLmNhbGwoTywgUCksIE9bUF0pO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdvcGQuanNcbi8vIG1vZHVsZSBpZCA9IC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdvcGQuanNcbi8vIG1vZHVsZSBjaHVua3MgPSBtYWluIiwiLy8gZmFsbGJhY2sgZm9yIElFMTEgYnVnZ3kgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMgd2l0aCBpZnJhbWUgYW5kIHdpbmRvd1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcbnZhciBnT1BOID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcG4nKS5mO1xudmFyIHRvU3RyaW5nID0ge30udG9TdHJpbmc7XG5cbnZhciB3aW5kb3dOYW1lcyA9IHR5cGVvZiB3aW5kb3cgPT0gJ29iamVjdCcgJiYgd2luZG93ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzXG4gID8gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMod2luZG93KSA6IFtdO1xuXG52YXIgZ2V0V2luZG93TmFtZXMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gZ09QTihpdCk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gd2luZG93TmFtZXMuc2xpY2UoKTtcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMuZiA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5TmFtZXMoaXQpIHtcbiAgcmV0dXJuIHdpbmRvd05hbWVzICYmIHRvU3RyaW5nLmNhbGwoaXQpID09ICdbb2JqZWN0IFdpbmRvd10nID8gZ2V0V2luZG93TmFtZXMoaXQpIDogZ09QTih0b0lPYmplY3QoaXQpKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1nb3BuLWV4dC5qc1xuLy8gbW9kdWxlIGlkID0gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ29wbi1leHQuanNcbi8vIG1vZHVsZSBjaHVua3MgPSBtYWluIiwiLy8gMTkuMS4yLjcgLyAxNS4yLjMuNCBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhPKVxudmFyICRrZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMtaW50ZXJuYWwnKTtcbnZhciBoaWRkZW5LZXlzID0gcmVxdWlyZSgnLi9fZW51bS1idWcta2V5cycpLmNvbmNhdCgnbGVuZ3RoJywgJ3Byb3RvdHlwZScpO1xuXG5leHBvcnRzLmYgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyB8fCBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eU5hbWVzKE8pIHtcbiAgcmV0dXJuICRrZXlzKE8sIGhpZGRlbktleXMpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdvcG4uanNcbi8vIG1vZHVsZSBpZCA9IC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdvcG4uanNcbi8vIG1vZHVsZSBjaHVua3MgPSBtYWluIiwiZXhwb3J0cy5mID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdvcHMuanNcbi8vIG1vZHVsZSBpZCA9IC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdvcHMuanNcbi8vIG1vZHVsZSBjaHVua3MgPSBtYWluIiwiLy8gMTkuMS4yLjkgLyAxNS4yLjMuMiBPYmplY3QuZ2V0UHJvdG90eXBlT2YoTylcbnZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4vX3RvLW9iamVjdCcpO1xudmFyIElFX1BST1RPID0gcmVxdWlyZSgnLi9fc2hhcmVkLWtleScpKCdJRV9QUk9UTycpO1xudmFyIE9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gKE8pIHtcbiAgTyA9IHRvT2JqZWN0KE8pO1xuICBpZiAoaGFzKE8sIElFX1BST1RPKSkgcmV0dXJuIE9bSUVfUFJPVE9dO1xuICBpZiAodHlwZW9mIE8uY29uc3RydWN0b3IgPT0gJ2Z1bmN0aW9uJyAmJiBPIGluc3RhbmNlb2YgTy5jb25zdHJ1Y3Rvcikge1xuICAgIHJldHVybiBPLmNvbnN0cnVjdG9yLnByb3RvdHlwZTtcbiAgfSByZXR1cm4gTyBpbnN0YW5jZW9mIE9iamVjdCA/IE9iamVjdFByb3RvIDogbnVsbDtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1ncG8uanNcbi8vIG1vZHVsZSBpZCA9IC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdwby5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IG1haW4iLCJ2YXIgaGFzID0gcmVxdWlyZSgnLi9faGFzJyk7XG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpO1xudmFyIGFycmF5SW5kZXhPZiA9IHJlcXVpcmUoJy4vX2FycmF5LWluY2x1ZGVzJykoZmFsc2UpO1xudmFyIElFX1BST1RPID0gcmVxdWlyZSgnLi9fc2hhcmVkLWtleScpKCdJRV9QUk9UTycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvYmplY3QsIG5hbWVzKSB7XG4gIHZhciBPID0gdG9JT2JqZWN0KG9iamVjdCk7XG4gIHZhciBpID0gMDtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICB2YXIga2V5O1xuICBmb3IgKGtleSBpbiBPKSBpZiAoa2V5ICE9IElFX1BST1RPKSBoYXMoTywga2V5KSAmJiByZXN1bHQucHVzaChrZXkpO1xuICAvLyBEb24ndCBlbnVtIGJ1ZyAmIGhpZGRlbiBrZXlzXG4gIHdoaWxlIChuYW1lcy5sZW5ndGggPiBpKSBpZiAoaGFzKE8sIGtleSA9IG5hbWVzW2krK10pKSB7XG4gICAgfmFycmF5SW5kZXhPZihyZXN1bHQsIGtleSkgfHwgcmVzdWx0LnB1c2goa2V5KTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWtleXMtaW50ZXJuYWwuanNcbi8vIG1vZHVsZSBpZCA9IC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWtleXMtaW50ZXJuYWwuanNcbi8vIG1vZHVsZSBjaHVua3MgPSBtYWluIiwiLy8gMTkuMS4yLjE0IC8gMTUuMi4zLjE0IE9iamVjdC5rZXlzKE8pXG52YXIgJGtleXMgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cy1pbnRlcm5hbCcpO1xudmFyIGVudW1CdWdLZXlzID0gcmVxdWlyZSgnLi9fZW51bS1idWcta2V5cycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5rZXlzIHx8IGZ1bmN0aW9uIGtleXMoTykge1xuICByZXR1cm4gJGtleXMoTywgZW51bUJ1Z0tleXMpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWtleXMuanNcbi8vIG1vZHVsZSBpZCA9IC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWtleXMuanNcbi8vIG1vZHVsZSBjaHVua3MgPSBtYWluIiwiZXhwb3J0cy5mID0ge30ucHJvcGVydHlJc0VudW1lcmFibGU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1waWUuanNcbi8vIG1vZHVsZSBpZCA9IC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LXBpZS5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IG1haW4iLCIvLyBtb3N0IE9iamVjdCBtZXRob2RzIGJ5IEVTNiBzaG91bGQgYWNjZXB0IHByaW1pdGl2ZXNcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG52YXIgY29yZSA9IHJlcXVpcmUoJy4vX2NvcmUnKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4vX2ZhaWxzJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChLRVksIGV4ZWMpIHtcbiAgdmFyIGZuID0gKGNvcmUuT2JqZWN0IHx8IHt9KVtLRVldIHx8IE9iamVjdFtLRVldO1xuICB2YXIgZXhwID0ge307XG4gIGV4cFtLRVldID0gZXhlYyhmbik7XG4gICRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogZmFpbHMoZnVuY3Rpb24gKCkgeyBmbigxKTsgfSksICdPYmplY3QnLCBleHApO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LXNhcC5qc1xuLy8gbW9kdWxlIGlkID0gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3Qtc2FwLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gbWFpbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGV4ZWMpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4geyBlOiBmYWxzZSwgdjogZXhlYygpIH07XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4geyBlOiB0cnVlLCB2OiBlIH07XG4gIH1cbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3BlcmZvcm0uanNcbi8vIG1vZHVsZSBpZCA9IC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fcGVyZm9ybS5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IG1haW4iLCJ2YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xudmFyIG5ld1Byb21pc2VDYXBhYmlsaXR5ID0gcmVxdWlyZSgnLi9fbmV3LXByb21pc2UtY2FwYWJpbGl0eScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChDLCB4KSB7XG4gIGFuT2JqZWN0KEMpO1xuICBpZiAoaXNPYmplY3QoeCkgJiYgeC5jb25zdHJ1Y3RvciA9PT0gQykgcmV0dXJuIHg7XG4gIHZhciBwcm9taXNlQ2FwYWJpbGl0eSA9IG5ld1Byb21pc2VDYXBhYmlsaXR5LmYoQyk7XG4gIHZhciByZXNvbHZlID0gcHJvbWlzZUNhcGFiaWxpdHkucmVzb2x2ZTtcbiAgcmVzb2x2ZSh4KTtcbiAgcmV0dXJuIHByb21pc2VDYXBhYmlsaXR5LnByb21pc2U7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19wcm9taXNlLXJlc29sdmUuanNcbi8vIG1vZHVsZSBpZCA9IC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fcHJvbWlzZS1yZXNvbHZlLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gbWFpbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGJpdG1hcCwgdmFsdWUpIHtcbiAgcmV0dXJuIHtcbiAgICBlbnVtZXJhYmxlOiAhKGJpdG1hcCAmIDEpLFxuICAgIGNvbmZpZ3VyYWJsZTogIShiaXRtYXAgJiAyKSxcbiAgICB3cml0YWJsZTogIShiaXRtYXAgJiA0KSxcbiAgICB2YWx1ZTogdmFsdWVcbiAgfTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3Byb3BlcnR5LWRlc2MuanNcbi8vIG1vZHVsZSBpZCA9IC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fcHJvcGVydHktZGVzYy5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IG1haW4iLCJ2YXIgaGlkZSA9IHJlcXVpcmUoJy4vX2hpZGUnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHRhcmdldCwgc3JjLCBzYWZlKSB7XG4gIGZvciAodmFyIGtleSBpbiBzcmMpIHtcbiAgICBpZiAoc2FmZSAmJiB0YXJnZXRba2V5XSkgdGFyZ2V0W2tleV0gPSBzcmNba2V5XTtcbiAgICBlbHNlIGhpZGUodGFyZ2V0LCBrZXksIHNyY1trZXldKTtcbiAgfSByZXR1cm4gdGFyZ2V0O1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fcmVkZWZpbmUtYWxsLmpzXG4vLyBtb2R1bGUgaWQgPSAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3JlZGVmaW5lLWFsbC5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IG1haW4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2hpZGUnKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fcmVkZWZpbmUuanNcbi8vIG1vZHVsZSBpZCA9IC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fcmVkZWZpbmUuanNcbi8vIG1vZHVsZSBjaHVua3MgPSBtYWluIiwiLy8gV29ya3Mgd2l0aCBfX3Byb3RvX18gb25seS4gT2xkIHY4IGNhbid0IHdvcmsgd2l0aCBudWxsIHByb3RvIG9iamVjdHMuXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1wcm90byAqL1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciBjaGVjayA9IGZ1bmN0aW9uIChPLCBwcm90bykge1xuICBhbk9iamVjdChPKTtcbiAgaWYgKCFpc09iamVjdChwcm90bykgJiYgcHJvdG8gIT09IG51bGwpIHRocm93IFR5cGVFcnJvcihwcm90byArIFwiOiBjYW4ndCBzZXQgYXMgcHJvdG90eXBlIVwiKTtcbn07XG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgc2V0OiBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgKCdfX3Byb3RvX18nIGluIHt9ID8gLy8gZXNsaW50LWRpc2FibGUtbGluZVxuICAgIGZ1bmN0aW9uICh0ZXN0LCBidWdneSwgc2V0KSB7XG4gICAgICB0cnkge1xuICAgICAgICBzZXQgPSByZXF1aXJlKCcuL19jdHgnKShGdW5jdGlvbi5jYWxsLCByZXF1aXJlKCcuL19vYmplY3QtZ29wZCcpLmYoT2JqZWN0LnByb3RvdHlwZSwgJ19fcHJvdG9fXycpLnNldCwgMik7XG4gICAgICAgIHNldCh0ZXN0LCBbXSk7XG4gICAgICAgIGJ1Z2d5ID0gISh0ZXN0IGluc3RhbmNlb2YgQXJyYXkpO1xuICAgICAgfSBjYXRjaCAoZSkgeyBidWdneSA9IHRydWU7IH1cbiAgICAgIHJldHVybiBmdW5jdGlvbiBzZXRQcm90b3R5cGVPZihPLCBwcm90bykge1xuICAgICAgICBjaGVjayhPLCBwcm90byk7XG4gICAgICAgIGlmIChidWdneSkgTy5fX3Byb3RvX18gPSBwcm90bztcbiAgICAgICAgZWxzZSBzZXQoTywgcHJvdG8pO1xuICAgICAgICByZXR1cm4gTztcbiAgICAgIH07XG4gICAgfSh7fSwgZmFsc2UpIDogdW5kZWZpbmVkKSxcbiAgY2hlY2s6IGNoZWNrXG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zZXQtcHJvdG8uanNcbi8vIG1vZHVsZSBpZCA9IC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2V0LXByb3RvLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gbWFpbiIsIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBjb3JlID0gcmVxdWlyZSgnLi9fY29yZScpO1xudmFyIGRQID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJyk7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpO1xudmFyIFNQRUNJRVMgPSByZXF1aXJlKCcuL193a3MnKSgnc3BlY2llcycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChLRVkpIHtcbiAgdmFyIEMgPSB0eXBlb2YgY29yZVtLRVldID09ICdmdW5jdGlvbicgPyBjb3JlW0tFWV0gOiBnbG9iYWxbS0VZXTtcbiAgaWYgKERFU0NSSVBUT1JTICYmIEMgJiYgIUNbU1BFQ0lFU10pIGRQLmYoQywgU1BFQ0lFUywge1xuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH1cbiAgfSk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zZXQtc3BlY2llcy5qc1xuLy8gbW9kdWxlIGlkID0gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zZXQtc3BlY2llcy5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IG1haW4iLCJ2YXIgZGVmID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJykuZjtcbnZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciBUQUcgPSByZXF1aXJlKCcuL193a3MnKSgndG9TdHJpbmdUYWcnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQsIHRhZywgc3RhdCkge1xuICBpZiAoaXQgJiYgIWhhcyhpdCA9IHN0YXQgPyBpdCA6IGl0LnByb3RvdHlwZSwgVEFHKSkgZGVmKGl0LCBUQUcsIHsgY29uZmlndXJhYmxlOiB0cnVlLCB2YWx1ZTogdGFnIH0pO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2V0LXRvLXN0cmluZy10YWcuanNcbi8vIG1vZHVsZSBpZCA9IC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2V0LXRvLXN0cmluZy10YWcuanNcbi8vIG1vZHVsZSBjaHVua3MgPSBtYWluIiwidmFyIHNoYXJlZCA9IHJlcXVpcmUoJy4vX3NoYXJlZCcpKCdrZXlzJyk7XG52YXIgdWlkID0gcmVxdWlyZSgnLi9fdWlkJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgcmV0dXJuIHNoYXJlZFtrZXldIHx8IChzaGFyZWRba2V5XSA9IHVpZChrZXkpKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NoYXJlZC1rZXkuanNcbi8vIG1vZHVsZSBpZCA9IC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2hhcmVkLWtleS5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IG1haW4iLCJ2YXIgY29yZSA9IHJlcXVpcmUoJy4vX2NvcmUnKTtcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBTSEFSRUQgPSAnX19jb3JlLWpzX3NoYXJlZF9fJztcbnZhciBzdG9yZSA9IGdsb2JhbFtTSEFSRURdIHx8IChnbG9iYWxbU0hBUkVEXSA9IHt9KTtcblxuKG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgcmV0dXJuIHN0b3JlW2tleV0gfHwgKHN0b3JlW2tleV0gPSB2YWx1ZSAhPT0gdW5kZWZpbmVkID8gdmFsdWUgOiB7fSk7XG59KSgndmVyc2lvbnMnLCBbXSkucHVzaCh7XG4gIHZlcnNpb246IGNvcmUudmVyc2lvbixcbiAgbW9kZTogcmVxdWlyZSgnLi9fbGlicmFyeScpID8gJ3B1cmUnIDogJ2dsb2JhbCcsXG4gIGNvcHlyaWdodDogJ8KpIDIwMTggRGVuaXMgUHVzaGthcmV2ICh6bG9pcm9jay5ydSknXG59KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2hhcmVkLmpzXG4vLyBtb2R1bGUgaWQgPSAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NoYXJlZC5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IG1haW4iLCIvLyA3LjMuMjAgU3BlY2llc0NvbnN0cnVjdG9yKE8sIGRlZmF1bHRDb25zdHJ1Y3RvcilcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIGFGdW5jdGlvbiA9IHJlcXVpcmUoJy4vX2EtZnVuY3Rpb24nKTtcbnZhciBTUEVDSUVTID0gcmVxdWlyZSgnLi9fd2tzJykoJ3NwZWNpZXMnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKE8sIEQpIHtcbiAgdmFyIEMgPSBhbk9iamVjdChPKS5jb25zdHJ1Y3RvcjtcbiAgdmFyIFM7XG4gIHJldHVybiBDID09PSB1bmRlZmluZWQgfHwgKFMgPSBhbk9iamVjdChDKVtTUEVDSUVTXSkgPT0gdW5kZWZpbmVkID8gRCA6IGFGdW5jdGlvbihTKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NwZWNpZXMtY29uc3RydWN0b3IuanNcbi8vIG1vZHVsZSBpZCA9IC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc3BlY2llcy1jb25zdHJ1Y3Rvci5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IG1haW4iLCJ2YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi9fdG8taW50ZWdlcicpO1xudmFyIGRlZmluZWQgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG4vLyB0cnVlICAtPiBTdHJpbmcjYXRcbi8vIGZhbHNlIC0+IFN0cmluZyNjb2RlUG9pbnRBdFxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoVE9fU1RSSU5HKSB7XG4gIHJldHVybiBmdW5jdGlvbiAodGhhdCwgcG9zKSB7XG4gICAgdmFyIHMgPSBTdHJpbmcoZGVmaW5lZCh0aGF0KSk7XG4gICAgdmFyIGkgPSB0b0ludGVnZXIocG9zKTtcbiAgICB2YXIgbCA9IHMubGVuZ3RoO1xuICAgIHZhciBhLCBiO1xuICAgIGlmIChpIDwgMCB8fCBpID49IGwpIHJldHVybiBUT19TVFJJTkcgPyAnJyA6IHVuZGVmaW5lZDtcbiAgICBhID0gcy5jaGFyQ29kZUF0KGkpO1xuICAgIHJldHVybiBhIDwgMHhkODAwIHx8IGEgPiAweGRiZmYgfHwgaSArIDEgPT09IGwgfHwgKGIgPSBzLmNoYXJDb2RlQXQoaSArIDEpKSA8IDB4ZGMwMCB8fCBiID4gMHhkZmZmXG4gICAgICA/IFRPX1NUUklORyA/IHMuY2hhckF0KGkpIDogYVxuICAgICAgOiBUT19TVFJJTkcgPyBzLnNsaWNlKGksIGkgKyAyKSA6IChhIC0gMHhkODAwIDw8IDEwKSArIChiIC0gMHhkYzAwKSArIDB4MTAwMDA7XG4gIH07XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zdHJpbmctYXQuanNcbi8vIG1vZHVsZSBpZCA9IC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc3RyaW5nLWF0LmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gbWFpbiIsInZhciBjdHggPSByZXF1aXJlKCcuL19jdHgnKTtcbnZhciBpbnZva2UgPSByZXF1aXJlKCcuL19pbnZva2UnKTtcbnZhciBodG1sID0gcmVxdWlyZSgnLi9faHRtbCcpO1xudmFyIGNlbCA9IHJlcXVpcmUoJy4vX2RvbS1jcmVhdGUnKTtcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBwcm9jZXNzID0gZ2xvYmFsLnByb2Nlc3M7XG52YXIgc2V0VGFzayA9IGdsb2JhbC5zZXRJbW1lZGlhdGU7XG52YXIgY2xlYXJUYXNrID0gZ2xvYmFsLmNsZWFySW1tZWRpYXRlO1xudmFyIE1lc3NhZ2VDaGFubmVsID0gZ2xvYmFsLk1lc3NhZ2VDaGFubmVsO1xudmFyIERpc3BhdGNoID0gZ2xvYmFsLkRpc3BhdGNoO1xudmFyIGNvdW50ZXIgPSAwO1xudmFyIHF1ZXVlID0ge307XG52YXIgT05SRUFEWVNUQVRFQ0hBTkdFID0gJ29ucmVhZHlzdGF0ZWNoYW5nZSc7XG52YXIgZGVmZXIsIGNoYW5uZWwsIHBvcnQ7XG52YXIgcnVuID0gZnVuY3Rpb24gKCkge1xuICB2YXIgaWQgPSArdGhpcztcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXByb3RvdHlwZS1idWlsdGluc1xuICBpZiAocXVldWUuaGFzT3duUHJvcGVydHkoaWQpKSB7XG4gICAgdmFyIGZuID0gcXVldWVbaWRdO1xuICAgIGRlbGV0ZSBxdWV1ZVtpZF07XG4gICAgZm4oKTtcbiAgfVxufTtcbnZhciBsaXN0ZW5lciA9IGZ1bmN0aW9uIChldmVudCkge1xuICBydW4uY2FsbChldmVudC5kYXRhKTtcbn07XG4vLyBOb2RlLmpzIDAuOSsgJiBJRTEwKyBoYXMgc2V0SW1tZWRpYXRlLCBvdGhlcndpc2U6XG5pZiAoIXNldFRhc2sgfHwgIWNsZWFyVGFzaykge1xuICBzZXRUYXNrID0gZnVuY3Rpb24gc2V0SW1tZWRpYXRlKGZuKSB7XG4gICAgdmFyIGFyZ3MgPSBbXTtcbiAgICB2YXIgaSA9IDE7XG4gICAgd2hpbGUgKGFyZ3VtZW50cy5sZW5ndGggPiBpKSBhcmdzLnB1c2goYXJndW1lbnRzW2krK10pO1xuICAgIHF1ZXVlWysrY291bnRlcl0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbmV3LWZ1bmNcbiAgICAgIGludm9rZSh0eXBlb2YgZm4gPT0gJ2Z1bmN0aW9uJyA/IGZuIDogRnVuY3Rpb24oZm4pLCBhcmdzKTtcbiAgICB9O1xuICAgIGRlZmVyKGNvdW50ZXIpO1xuICAgIHJldHVybiBjb3VudGVyO1xuICB9O1xuICBjbGVhclRhc2sgPSBmdW5jdGlvbiBjbGVhckltbWVkaWF0ZShpZCkge1xuICAgIGRlbGV0ZSBxdWV1ZVtpZF07XG4gIH07XG4gIC8vIE5vZGUuanMgMC44LVxuICBpZiAocmVxdWlyZSgnLi9fY29mJykocHJvY2VzcykgPT0gJ3Byb2Nlc3MnKSB7XG4gICAgZGVmZXIgPSBmdW5jdGlvbiAoaWQpIHtcbiAgICAgIHByb2Nlc3MubmV4dFRpY2soY3R4KHJ1biwgaWQsIDEpKTtcbiAgICB9O1xuICAvLyBTcGhlcmUgKEpTIGdhbWUgZW5naW5lKSBEaXNwYXRjaCBBUElcbiAgfSBlbHNlIGlmIChEaXNwYXRjaCAmJiBEaXNwYXRjaC5ub3cpIHtcbiAgICBkZWZlciA9IGZ1bmN0aW9uIChpZCkge1xuICAgICAgRGlzcGF0Y2gubm93KGN0eChydW4sIGlkLCAxKSk7XG4gICAgfTtcbiAgLy8gQnJvd3NlcnMgd2l0aCBNZXNzYWdlQ2hhbm5lbCwgaW5jbHVkZXMgV2ViV29ya2Vyc1xuICB9IGVsc2UgaWYgKE1lc3NhZ2VDaGFubmVsKSB7XG4gICAgY2hhbm5lbCA9IG5ldyBNZXNzYWdlQ2hhbm5lbCgpO1xuICAgIHBvcnQgPSBjaGFubmVsLnBvcnQyO1xuICAgIGNoYW5uZWwucG9ydDEub25tZXNzYWdlID0gbGlzdGVuZXI7XG4gICAgZGVmZXIgPSBjdHgocG9ydC5wb3N0TWVzc2FnZSwgcG9ydCwgMSk7XG4gIC8vIEJyb3dzZXJzIHdpdGggcG9zdE1lc3NhZ2UsIHNraXAgV2ViV29ya2Vyc1xuICAvLyBJRTggaGFzIHBvc3RNZXNzYWdlLCBidXQgaXQncyBzeW5jICYgdHlwZW9mIGl0cyBwb3N0TWVzc2FnZSBpcyAnb2JqZWN0J1xuICB9IGVsc2UgaWYgKGdsb2JhbC5hZGRFdmVudExpc3RlbmVyICYmIHR5cGVvZiBwb3N0TWVzc2FnZSA9PSAnZnVuY3Rpb24nICYmICFnbG9iYWwuaW1wb3J0U2NyaXB0cykge1xuICAgIGRlZmVyID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICBnbG9iYWwucG9zdE1lc3NhZ2UoaWQgKyAnJywgJyonKTtcbiAgICB9O1xuICAgIGdsb2JhbC5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgbGlzdGVuZXIsIGZhbHNlKTtcbiAgLy8gSUU4LVxuICB9IGVsc2UgaWYgKE9OUkVBRFlTVEFURUNIQU5HRSBpbiBjZWwoJ3NjcmlwdCcpKSB7XG4gICAgZGVmZXIgPSBmdW5jdGlvbiAoaWQpIHtcbiAgICAgIGh0bWwuYXBwZW5kQ2hpbGQoY2VsKCdzY3JpcHQnKSlbT05SRUFEWVNUQVRFQ0hBTkdFXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaHRtbC5yZW1vdmVDaGlsZCh0aGlzKTtcbiAgICAgICAgcnVuLmNhbGwoaWQpO1xuICAgICAgfTtcbiAgICB9O1xuICAvLyBSZXN0IG9sZCBicm93c2Vyc1xuICB9IGVsc2Uge1xuICAgIGRlZmVyID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICBzZXRUaW1lb3V0KGN0eChydW4sIGlkLCAxKSwgMCk7XG4gICAgfTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHNldDogc2V0VGFzayxcbiAgY2xlYXI6IGNsZWFyVGFza1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdGFzay5qc1xuLy8gbW9kdWxlIGlkID0gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190YXNrLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gbWFpbiIsInZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuL190by1pbnRlZ2VyJyk7XG52YXIgbWF4ID0gTWF0aC5tYXg7XG52YXIgbWluID0gTWF0aC5taW47XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpbmRleCwgbGVuZ3RoKSB7XG4gIGluZGV4ID0gdG9JbnRlZ2VyKGluZGV4KTtcbiAgcmV0dXJuIGluZGV4IDwgMCA/IG1heChpbmRleCArIGxlbmd0aCwgMCkgOiBtaW4oaW5kZXgsIGxlbmd0aCk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1hYnNvbHV0ZS1pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1hYnNvbHV0ZS1pbmRleC5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IG1haW4iLCIvLyA3LjEuNCBUb0ludGVnZXJcbnZhciBjZWlsID0gTWF0aC5jZWlsO1xudmFyIGZsb29yID0gTWF0aC5mbG9vcjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBpc05hTihpdCA9ICtpdCkgPyAwIDogKGl0ID4gMCA/IGZsb29yIDogY2VpbCkoaXQpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8taW50ZWdlci5qc1xuLy8gbW9kdWxlIGlkID0gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1pbnRlZ2VyLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gbWFpbiIsIi8vIHRvIGluZGV4ZWQgb2JqZWN0LCB0b09iamVjdCB3aXRoIGZhbGxiYWNrIGZvciBub24tYXJyYXktbGlrZSBFUzMgc3RyaW5nc1xudmFyIElPYmplY3QgPSByZXF1aXJlKCcuL19pb2JqZWN0Jyk7XG52YXIgZGVmaW5lZCA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBJT2JqZWN0KGRlZmluZWQoaXQpKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWlvYmplY3QuanNcbi8vIG1vZHVsZSBpZCA9IC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8taW9iamVjdC5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IG1haW4iLCIvLyA3LjEuMTUgVG9MZW5ndGhcbnZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuL190by1pbnRlZ2VyJyk7XG52YXIgbWluID0gTWF0aC5taW47XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXQgPiAwID8gbWluKHRvSW50ZWdlcihpdCksIDB4MWZmZmZmZmZmZmZmZmYpIDogMDsgLy8gcG93KDIsIDUzKSAtIDEgPT0gOTAwNzE5OTI1NDc0MDk5MVxufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tbGVuZ3RoLmpzXG4vLyBtb2R1bGUgaWQgPSAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWxlbmd0aC5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IG1haW4iLCIvLyA3LjEuMTMgVG9PYmplY3QoYXJndW1lbnQpXG52YXIgZGVmaW5lZCA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBPYmplY3QoZGVmaW5lZChpdCkpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tb2JqZWN0LmpzXG4vLyBtb2R1bGUgaWQgPSAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLW9iamVjdC5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IG1haW4iLCIvLyA3LjEuMSBUb1ByaW1pdGl2ZShpbnB1dCBbLCBQcmVmZXJyZWRUeXBlXSlcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xuLy8gaW5zdGVhZCBvZiB0aGUgRVM2IHNwZWMgdmVyc2lvbiwgd2UgZGlkbid0IGltcGxlbWVudCBAQHRvUHJpbWl0aXZlIGNhc2Vcbi8vIGFuZCB0aGUgc2Vjb25kIGFyZ3VtZW50IC0gZmxhZyAtIHByZWZlcnJlZCB0eXBlIGlzIGEgc3RyaW5nXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCwgUykge1xuICBpZiAoIWlzT2JqZWN0KGl0KSkgcmV0dXJuIGl0O1xuICB2YXIgZm4sIHZhbDtcbiAgaWYgKFMgJiYgdHlwZW9mIChmbiA9IGl0LnRvU3RyaW5nKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpIHJldHVybiB2YWw7XG4gIGlmICh0eXBlb2YgKGZuID0gaXQudmFsdWVPZikgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKSByZXR1cm4gdmFsO1xuICBpZiAoIVMgJiYgdHlwZW9mIChmbiA9IGl0LnRvU3RyaW5nKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpIHJldHVybiB2YWw7XG4gIHRocm93IFR5cGVFcnJvcihcIkNhbid0IGNvbnZlcnQgb2JqZWN0IHRvIHByaW1pdGl2ZSB2YWx1ZVwiKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLXByaW1pdGl2ZS5qc1xuLy8gbW9kdWxlIGlkID0gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1wcmltaXRpdmUuanNcbi8vIG1vZHVsZSBjaHVua3MgPSBtYWluIiwidmFyIGlkID0gMDtcbnZhciBweCA9IE1hdGgucmFuZG9tKCk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgcmV0dXJuICdTeW1ib2woJy5jb25jYXQoa2V5ID09PSB1bmRlZmluZWQgPyAnJyA6IGtleSwgJylfJywgKCsraWQgKyBweCkudG9TdHJpbmcoMzYpKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3VpZC5qc1xuLy8gbW9kdWxlIGlkID0gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL191aWQuanNcbi8vIG1vZHVsZSBjaHVua3MgPSBtYWluIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIG5hdmlnYXRvciA9IGdsb2JhbC5uYXZpZ2F0b3I7XG5cbm1vZHVsZS5leHBvcnRzID0gbmF2aWdhdG9yICYmIG5hdmlnYXRvci51c2VyQWdlbnQgfHwgJyc7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3VzZXItYWdlbnQuanNcbi8vIG1vZHVsZSBpZCA9IC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdXNlci1hZ2VudC5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IG1haW4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgY29yZSA9IHJlcXVpcmUoJy4vX2NvcmUnKTtcbnZhciBMSUJSQVJZID0gcmVxdWlyZSgnLi9fbGlicmFyeScpO1xudmFyIHdrc0V4dCA9IHJlcXVpcmUoJy4vX3drcy1leHQnKTtcbnZhciBkZWZpbmVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmY7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gIHZhciAkU3ltYm9sID0gY29yZS5TeW1ib2wgfHwgKGNvcmUuU3ltYm9sID0gTElCUkFSWSA/IHt9IDogZ2xvYmFsLlN5bWJvbCB8fCB7fSk7XG4gIGlmIChuYW1lLmNoYXJBdCgwKSAhPSAnXycgJiYgIShuYW1lIGluICRTeW1ib2wpKSBkZWZpbmVQcm9wZXJ0eSgkU3ltYm9sLCBuYW1lLCB7IHZhbHVlOiB3a3NFeHQuZihuYW1lKSB9KTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3drcy1kZWZpbmUuanNcbi8vIG1vZHVsZSBpZCA9IC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fd2tzLWRlZmluZS5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IG1haW4iLCJleHBvcnRzLmYgPSByZXF1aXJlKCcuL193a3MnKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fd2tzLWV4dC5qc1xuLy8gbW9kdWxlIGlkID0gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL193a3MtZXh0LmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gbWFpbiIsInZhciBzdG9yZSA9IHJlcXVpcmUoJy4vX3NoYXJlZCcpKCd3a3MnKTtcbnZhciB1aWQgPSByZXF1aXJlKCcuL191aWQnKTtcbnZhciBTeW1ib2wgPSByZXF1aXJlKCcuL19nbG9iYWwnKS5TeW1ib2w7XG52YXIgVVNFX1NZTUJPTCA9IHR5cGVvZiBTeW1ib2wgPT0gJ2Z1bmN0aW9uJztcblxudmFyICRleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobmFtZSkge1xuICByZXR1cm4gc3RvcmVbbmFtZV0gfHwgKHN0b3JlW25hbWVdID1cbiAgICBVU0VfU1lNQk9MICYmIFN5bWJvbFtuYW1lXSB8fCAoVVNFX1NZTUJPTCA/IFN5bWJvbCA6IHVpZCkoJ1N5bWJvbC4nICsgbmFtZSkpO1xufTtcblxuJGV4cG9ydHMuc3RvcmUgPSBzdG9yZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fd2tzLmpzXG4vLyBtb2R1bGUgaWQgPSAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3drcy5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IG1haW4iLCJ2YXIgY2xhc3NvZiA9IHJlcXVpcmUoJy4vX2NsYXNzb2YnKTtcbnZhciBJVEVSQVRPUiA9IHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpO1xudmFyIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19jb3JlJykuZ2V0SXRlcmF0b3JNZXRob2QgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKGl0ICE9IHVuZGVmaW5lZCkgcmV0dXJuIGl0W0lURVJBVE9SXVxuICAgIHx8IGl0WydAQGl0ZXJhdG9yJ11cbiAgICB8fCBJdGVyYXRvcnNbY2xhc3NvZihpdCldO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9jb3JlLmdldC1pdGVyYXRvci1tZXRob2QuanNcbi8vIG1vZHVsZSBpZCA9IC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9jb3JlLmdldC1pdGVyYXRvci1tZXRob2QuanNcbi8vIG1vZHVsZSBjaHVua3MgPSBtYWluIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGFkZFRvVW5zY29wYWJsZXMgPSByZXF1aXJlKCcuL19hZGQtdG8tdW5zY29wYWJsZXMnKTtcbnZhciBzdGVwID0gcmVxdWlyZSgnLi9faXRlci1zdGVwJyk7XG52YXIgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJyk7XG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpO1xuXG4vLyAyMi4xLjMuNCBBcnJheS5wcm90b3R5cGUuZW50cmllcygpXG4vLyAyMi4xLjMuMTMgQXJyYXkucHJvdG90eXBlLmtleXMoKVxuLy8gMjIuMS4zLjI5IEFycmF5LnByb3RvdHlwZS52YWx1ZXMoKVxuLy8gMjIuMS4zLjMwIEFycmF5LnByb3RvdHlwZVtAQGl0ZXJhdG9yXSgpXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2l0ZXItZGVmaW5lJykoQXJyYXksICdBcnJheScsIGZ1bmN0aW9uIChpdGVyYXRlZCwga2luZCkge1xuICB0aGlzLl90ID0gdG9JT2JqZWN0KGl0ZXJhdGVkKTsgLy8gdGFyZ2V0XG4gIHRoaXMuX2kgPSAwOyAgICAgICAgICAgICAgICAgICAvLyBuZXh0IGluZGV4XG4gIHRoaXMuX2sgPSBraW5kOyAgICAgICAgICAgICAgICAvLyBraW5kXG4vLyAyMi4xLjUuMi4xICVBcnJheUl0ZXJhdG9yUHJvdG90eXBlJS5uZXh0KClcbn0sIGZ1bmN0aW9uICgpIHtcbiAgdmFyIE8gPSB0aGlzLl90O1xuICB2YXIga2luZCA9IHRoaXMuX2s7XG4gIHZhciBpbmRleCA9IHRoaXMuX2krKztcbiAgaWYgKCFPIHx8IGluZGV4ID49IE8ubGVuZ3RoKSB7XG4gICAgdGhpcy5fdCA9IHVuZGVmaW5lZDtcbiAgICByZXR1cm4gc3RlcCgxKTtcbiAgfVxuICBpZiAoa2luZCA9PSAna2V5cycpIHJldHVybiBzdGVwKDAsIGluZGV4KTtcbiAgaWYgKGtpbmQgPT0gJ3ZhbHVlcycpIHJldHVybiBzdGVwKDAsIE9baW5kZXhdKTtcbiAgcmV0dXJuIHN0ZXAoMCwgW2luZGV4LCBPW2luZGV4XV0pO1xufSwgJ3ZhbHVlcycpO1xuXG4vLyBhcmd1bWVudHNMaXN0W0BAaXRlcmF0b3JdIGlzICVBcnJheVByb3RvX3ZhbHVlcyUgKDkuNC40LjYsIDkuNC40LjcpXG5JdGVyYXRvcnMuQXJndW1lbnRzID0gSXRlcmF0b3JzLkFycmF5O1xuXG5hZGRUb1Vuc2NvcGFibGVzKCdrZXlzJyk7XG5hZGRUb1Vuc2NvcGFibGVzKCd2YWx1ZXMnKTtcbmFkZFRvVW5zY29wYWJsZXMoJ2VudHJpZXMnKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYuYXJyYXkuaXRlcmF0b3IuanNcbi8vIG1vZHVsZSBpZCA9IC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYuYXJyYXkuaXRlcmF0b3IuanNcbi8vIG1vZHVsZSBjaHVua3MgPSBtYWluIiwidmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbi8vIDE5LjEuMi4yIC8gMTUuMi4zLjUgT2JqZWN0LmNyZWF0ZShPIFssIFByb3BlcnRpZXNdKVxuJGV4cG9ydCgkZXhwb3J0LlMsICdPYmplY3QnLCB7IGNyZWF0ZTogcmVxdWlyZSgnLi9fb2JqZWN0LWNyZWF0ZScpIH0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QuY3JlYXRlLmpzXG4vLyBtb2R1bGUgaWQgPSAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5jcmVhdGUuanNcbi8vIG1vZHVsZSBjaHVua3MgPSBtYWluIiwidmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbi8vIDE5LjEuMi40IC8gMTUuMi4zLjYgT2JqZWN0LmRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICFyZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpLCAnT2JqZWN0JywgeyBkZWZpbmVQcm9wZXJ0eTogcmVxdWlyZSgnLi9fb2JqZWN0LWRwJykuZiB9KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmRlZmluZS1wcm9wZXJ0eS5qc1xuLy8gbW9kdWxlIGlkID0gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QuZGVmaW5lLXByb3BlcnR5LmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gbWFpbiIsIi8vIDE5LjEuMi45IE9iamVjdC5nZXRQcm90b3R5cGVPZihPKVxudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0Jyk7XG52YXIgJGdldFByb3RvdHlwZU9mID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdwbycpO1xuXG5yZXF1aXJlKCcuL19vYmplY3Qtc2FwJykoJ2dldFByb3RvdHlwZU9mJywgZnVuY3Rpb24gKCkge1xuICByZXR1cm4gZnVuY3Rpb24gZ2V0UHJvdG90eXBlT2YoaXQpIHtcbiAgICByZXR1cm4gJGdldFByb3RvdHlwZU9mKHRvT2JqZWN0KGl0KSk7XG4gIH07XG59KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmdldC1wcm90b3R5cGUtb2YuanNcbi8vIG1vZHVsZSBpZCA9IC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmdldC1wcm90b3R5cGUtb2YuanNcbi8vIG1vZHVsZSBjaHVua3MgPSBtYWluIiwiLy8gMTkuMS4zLjE5IE9iamVjdC5zZXRQcm90b3R5cGVPZihPLCBwcm90bylcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG4kZXhwb3J0KCRleHBvcnQuUywgJ09iamVjdCcsIHsgc2V0UHJvdG90eXBlT2Y6IHJlcXVpcmUoJy4vX3NldC1wcm90bycpLnNldCB9KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LnNldC1wcm90b3R5cGUtb2YuanNcbi8vIG1vZHVsZSBpZCA9IC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LnNldC1wcm90b3R5cGUtb2YuanNcbi8vIG1vZHVsZSBjaHVua3MgPSBtYWluIiwiJ3VzZSBzdHJpY3QnO1xudmFyIExJQlJBUlkgPSByZXF1aXJlKCcuL19saWJyYXJ5Jyk7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgY3R4ID0gcmVxdWlyZSgnLi9fY3R4Jyk7XG52YXIgY2xhc3NvZiA9IHJlcXVpcmUoJy4vX2NsYXNzb2YnKTtcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbnZhciBhRnVuY3Rpb24gPSByZXF1aXJlKCcuL19hLWZ1bmN0aW9uJyk7XG52YXIgYW5JbnN0YW5jZSA9IHJlcXVpcmUoJy4vX2FuLWluc3RhbmNlJyk7XG52YXIgZm9yT2YgPSByZXF1aXJlKCcuL19mb3Itb2YnKTtcbnZhciBzcGVjaWVzQ29uc3RydWN0b3IgPSByZXF1aXJlKCcuL19zcGVjaWVzLWNvbnN0cnVjdG9yJyk7XG52YXIgdGFzayA9IHJlcXVpcmUoJy4vX3Rhc2snKS5zZXQ7XG52YXIgbWljcm90YXNrID0gcmVxdWlyZSgnLi9fbWljcm90YXNrJykoKTtcbnZhciBuZXdQcm9taXNlQ2FwYWJpbGl0eU1vZHVsZSA9IHJlcXVpcmUoJy4vX25ldy1wcm9taXNlLWNhcGFiaWxpdHknKTtcbnZhciBwZXJmb3JtID0gcmVxdWlyZSgnLi9fcGVyZm9ybScpO1xudmFyIHVzZXJBZ2VudCA9IHJlcXVpcmUoJy4vX3VzZXItYWdlbnQnKTtcbnZhciBwcm9taXNlUmVzb2x2ZSA9IHJlcXVpcmUoJy4vX3Byb21pc2UtcmVzb2x2ZScpO1xudmFyIFBST01JU0UgPSAnUHJvbWlzZSc7XG52YXIgVHlwZUVycm9yID0gZ2xvYmFsLlR5cGVFcnJvcjtcbnZhciBwcm9jZXNzID0gZ2xvYmFsLnByb2Nlc3M7XG52YXIgdmVyc2lvbnMgPSBwcm9jZXNzICYmIHByb2Nlc3MudmVyc2lvbnM7XG52YXIgdjggPSB2ZXJzaW9ucyAmJiB2ZXJzaW9ucy52OCB8fCAnJztcbnZhciAkUHJvbWlzZSA9IGdsb2JhbFtQUk9NSVNFXTtcbnZhciBpc05vZGUgPSBjbGFzc29mKHByb2Nlc3MpID09ICdwcm9jZXNzJztcbnZhciBlbXB0eSA9IGZ1bmN0aW9uICgpIHsgLyogZW1wdHkgKi8gfTtcbnZhciBJbnRlcm5hbCwgbmV3R2VuZXJpY1Byb21pc2VDYXBhYmlsaXR5LCBPd25Qcm9taXNlQ2FwYWJpbGl0eSwgV3JhcHBlcjtcbnZhciBuZXdQcm9taXNlQ2FwYWJpbGl0eSA9IG5ld0dlbmVyaWNQcm9taXNlQ2FwYWJpbGl0eSA9IG5ld1Byb21pc2VDYXBhYmlsaXR5TW9kdWxlLmY7XG5cbnZhciBVU0VfTkFUSVZFID0gISFmdW5jdGlvbiAoKSB7XG4gIHRyeSB7XG4gICAgLy8gY29ycmVjdCBzdWJjbGFzc2luZyB3aXRoIEBAc3BlY2llcyBzdXBwb3J0XG4gICAgdmFyIHByb21pc2UgPSAkUHJvbWlzZS5yZXNvbHZlKDEpO1xuICAgIHZhciBGYWtlUHJvbWlzZSA9IChwcm9taXNlLmNvbnN0cnVjdG9yID0ge30pW3JlcXVpcmUoJy4vX3drcycpKCdzcGVjaWVzJyldID0gZnVuY3Rpb24gKGV4ZWMpIHtcbiAgICAgIGV4ZWMoZW1wdHksIGVtcHR5KTtcbiAgICB9O1xuICAgIC8vIHVuaGFuZGxlZCByZWplY3Rpb25zIHRyYWNraW5nIHN1cHBvcnQsIE5vZGVKUyBQcm9taXNlIHdpdGhvdXQgaXQgZmFpbHMgQEBzcGVjaWVzIHRlc3RcbiAgICByZXR1cm4gKGlzTm9kZSB8fCB0eXBlb2YgUHJvbWlzZVJlamVjdGlvbkV2ZW50ID09ICdmdW5jdGlvbicpXG4gICAgICAmJiBwcm9taXNlLnRoZW4oZW1wdHkpIGluc3RhbmNlb2YgRmFrZVByb21pc2VcbiAgICAgIC8vIHY4IDYuNiAoTm9kZSAxMCBhbmQgQ2hyb21lIDY2KSBoYXZlIGEgYnVnIHdpdGggcmVzb2x2aW5nIGN1c3RvbSB0aGVuYWJsZXNcbiAgICAgIC8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTgzMDU2NVxuICAgICAgLy8gd2UgY2FuJ3QgZGV0ZWN0IGl0IHN5bmNocm9ub3VzbHksIHNvIGp1c3QgY2hlY2sgdmVyc2lvbnNcbiAgICAgICYmIHY4LmluZGV4T2YoJzYuNicpICE9PSAwXG4gICAgICAmJiB1c2VyQWdlbnQuaW5kZXhPZignQ2hyb21lLzY2JykgPT09IC0xO1xuICB9IGNhdGNoIChlKSB7IC8qIGVtcHR5ICovIH1cbn0oKTtcblxuLy8gaGVscGVyc1xudmFyIGlzVGhlbmFibGUgPSBmdW5jdGlvbiAoaXQpIHtcbiAgdmFyIHRoZW47XG4gIHJldHVybiBpc09iamVjdChpdCkgJiYgdHlwZW9mICh0aGVuID0gaXQudGhlbikgPT0gJ2Z1bmN0aW9uJyA/IHRoZW4gOiBmYWxzZTtcbn07XG52YXIgbm90aWZ5ID0gZnVuY3Rpb24gKHByb21pc2UsIGlzUmVqZWN0KSB7XG4gIGlmIChwcm9taXNlLl9uKSByZXR1cm47XG4gIHByb21pc2UuX24gPSB0cnVlO1xuICB2YXIgY2hhaW4gPSBwcm9taXNlLl9jO1xuICBtaWNyb3Rhc2soZnVuY3Rpb24gKCkge1xuICAgIHZhciB2YWx1ZSA9IHByb21pc2UuX3Y7XG4gICAgdmFyIG9rID0gcHJvbWlzZS5fcyA9PSAxO1xuICAgIHZhciBpID0gMDtcbiAgICB2YXIgcnVuID0gZnVuY3Rpb24gKHJlYWN0aW9uKSB7XG4gICAgICB2YXIgaGFuZGxlciA9IG9rID8gcmVhY3Rpb24ub2sgOiByZWFjdGlvbi5mYWlsO1xuICAgICAgdmFyIHJlc29sdmUgPSByZWFjdGlvbi5yZXNvbHZlO1xuICAgICAgdmFyIHJlamVjdCA9IHJlYWN0aW9uLnJlamVjdDtcbiAgICAgIHZhciBkb21haW4gPSByZWFjdGlvbi5kb21haW47XG4gICAgICB2YXIgcmVzdWx0LCB0aGVuLCBleGl0ZWQ7XG4gICAgICB0cnkge1xuICAgICAgICBpZiAoaGFuZGxlcikge1xuICAgICAgICAgIGlmICghb2spIHtcbiAgICAgICAgICAgIGlmIChwcm9taXNlLl9oID09IDIpIG9uSGFuZGxlVW5oYW5kbGVkKHByb21pc2UpO1xuICAgICAgICAgICAgcHJvbWlzZS5faCA9IDE7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChoYW5kbGVyID09PSB0cnVlKSByZXN1bHQgPSB2YWx1ZTtcbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmIChkb21haW4pIGRvbWFpbi5lbnRlcigpO1xuICAgICAgICAgICAgcmVzdWx0ID0gaGFuZGxlcih2YWx1ZSk7IC8vIG1heSB0aHJvd1xuICAgICAgICAgICAgaWYgKGRvbWFpbikge1xuICAgICAgICAgICAgICBkb21haW4uZXhpdCgpO1xuICAgICAgICAgICAgICBleGl0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAocmVzdWx0ID09PSByZWFjdGlvbi5wcm9taXNlKSB7XG4gICAgICAgICAgICByZWplY3QoVHlwZUVycm9yKCdQcm9taXNlLWNoYWluIGN5Y2xlJykpO1xuICAgICAgICAgIH0gZWxzZSBpZiAodGhlbiA9IGlzVGhlbmFibGUocmVzdWx0KSkge1xuICAgICAgICAgICAgdGhlbi5jYWxsKHJlc3VsdCwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9IGVsc2UgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICB9IGVsc2UgcmVqZWN0KHZhbHVlKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgaWYgKGRvbWFpbiAmJiAhZXhpdGVkKSBkb21haW4uZXhpdCgpO1xuICAgICAgICByZWplY3QoZSk7XG4gICAgICB9XG4gICAgfTtcbiAgICB3aGlsZSAoY2hhaW4ubGVuZ3RoID4gaSkgcnVuKGNoYWluW2krK10pOyAvLyB2YXJpYWJsZSBsZW5ndGggLSBjYW4ndCB1c2UgZm9yRWFjaFxuICAgIHByb21pc2UuX2MgPSBbXTtcbiAgICBwcm9taXNlLl9uID0gZmFsc2U7XG4gICAgaWYgKGlzUmVqZWN0ICYmICFwcm9taXNlLl9oKSBvblVuaGFuZGxlZChwcm9taXNlKTtcbiAgfSk7XG59O1xudmFyIG9uVW5oYW5kbGVkID0gZnVuY3Rpb24gKHByb21pc2UpIHtcbiAgdGFzay5jYWxsKGdsb2JhbCwgZnVuY3Rpb24gKCkge1xuICAgIHZhciB2YWx1ZSA9IHByb21pc2UuX3Y7XG4gICAgdmFyIHVuaGFuZGxlZCA9IGlzVW5oYW5kbGVkKHByb21pc2UpO1xuICAgIHZhciByZXN1bHQsIGhhbmRsZXIsIGNvbnNvbGU7XG4gICAgaWYgKHVuaGFuZGxlZCkge1xuICAgICAgcmVzdWx0ID0gcGVyZm9ybShmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChpc05vZGUpIHtcbiAgICAgICAgICBwcm9jZXNzLmVtaXQoJ3VuaGFuZGxlZFJlamVjdGlvbicsIHZhbHVlLCBwcm9taXNlKTtcbiAgICAgICAgfSBlbHNlIGlmIChoYW5kbGVyID0gZ2xvYmFsLm9udW5oYW5kbGVkcmVqZWN0aW9uKSB7XG4gICAgICAgICAgaGFuZGxlcih7IHByb21pc2U6IHByb21pc2UsIHJlYXNvbjogdmFsdWUgfSk7XG4gICAgICAgIH0gZWxzZSBpZiAoKGNvbnNvbGUgPSBnbG9iYWwuY29uc29sZSkgJiYgY29uc29sZS5lcnJvcikge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1VuaGFuZGxlZCBwcm9taXNlIHJlamVjdGlvbicsIHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICAvLyBCcm93c2VycyBzaG91bGQgbm90IHRyaWdnZXIgYHJlamVjdGlvbkhhbmRsZWRgIGV2ZW50IGlmIGl0IHdhcyBoYW5kbGVkIGhlcmUsIE5vZGVKUyAtIHNob3VsZFxuICAgICAgcHJvbWlzZS5faCA9IGlzTm9kZSB8fCBpc1VuaGFuZGxlZChwcm9taXNlKSA/IDIgOiAxO1xuICAgIH0gcHJvbWlzZS5fYSA9IHVuZGVmaW5lZDtcbiAgICBpZiAodW5oYW5kbGVkICYmIHJlc3VsdC5lKSB0aHJvdyByZXN1bHQudjtcbiAgfSk7XG59O1xudmFyIGlzVW5oYW5kbGVkID0gZnVuY3Rpb24gKHByb21pc2UpIHtcbiAgcmV0dXJuIHByb21pc2UuX2ggIT09IDEgJiYgKHByb21pc2UuX2EgfHwgcHJvbWlzZS5fYykubGVuZ3RoID09PSAwO1xufTtcbnZhciBvbkhhbmRsZVVuaGFuZGxlZCA9IGZ1bmN0aW9uIChwcm9taXNlKSB7XG4gIHRhc2suY2FsbChnbG9iYWwsIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgaGFuZGxlcjtcbiAgICBpZiAoaXNOb2RlKSB7XG4gICAgICBwcm9jZXNzLmVtaXQoJ3JlamVjdGlvbkhhbmRsZWQnLCBwcm9taXNlKTtcbiAgICB9IGVsc2UgaWYgKGhhbmRsZXIgPSBnbG9iYWwub25yZWplY3Rpb25oYW5kbGVkKSB7XG4gICAgICBoYW5kbGVyKHsgcHJvbWlzZTogcHJvbWlzZSwgcmVhc29uOiBwcm9taXNlLl92IH0pO1xuICAgIH1cbiAgfSk7XG59O1xudmFyICRyZWplY3QgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgdmFyIHByb21pc2UgPSB0aGlzO1xuICBpZiAocHJvbWlzZS5fZCkgcmV0dXJuO1xuICBwcm9taXNlLl9kID0gdHJ1ZTtcbiAgcHJvbWlzZSA9IHByb21pc2UuX3cgfHwgcHJvbWlzZTsgLy8gdW53cmFwXG4gIHByb21pc2UuX3YgPSB2YWx1ZTtcbiAgcHJvbWlzZS5fcyA9IDI7XG4gIGlmICghcHJvbWlzZS5fYSkgcHJvbWlzZS5fYSA9IHByb21pc2UuX2Muc2xpY2UoKTtcbiAgbm90aWZ5KHByb21pc2UsIHRydWUpO1xufTtcbnZhciAkcmVzb2x2ZSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICB2YXIgcHJvbWlzZSA9IHRoaXM7XG4gIHZhciB0aGVuO1xuICBpZiAocHJvbWlzZS5fZCkgcmV0dXJuO1xuICBwcm9taXNlLl9kID0gdHJ1ZTtcbiAgcHJvbWlzZSA9IHByb21pc2UuX3cgfHwgcHJvbWlzZTsgLy8gdW53cmFwXG4gIHRyeSB7XG4gICAgaWYgKHByb21pc2UgPT09IHZhbHVlKSB0aHJvdyBUeXBlRXJyb3IoXCJQcm9taXNlIGNhbid0IGJlIHJlc29sdmVkIGl0c2VsZlwiKTtcbiAgICBpZiAodGhlbiA9IGlzVGhlbmFibGUodmFsdWUpKSB7XG4gICAgICBtaWNyb3Rhc2soZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgd3JhcHBlciA9IHsgX3c6IHByb21pc2UsIF9kOiBmYWxzZSB9OyAvLyB3cmFwXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgdGhlbi5jYWxsKHZhbHVlLCBjdHgoJHJlc29sdmUsIHdyYXBwZXIsIDEpLCBjdHgoJHJlamVjdCwgd3JhcHBlciwgMSkpO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgJHJlamVjdC5jYWxsKHdyYXBwZXIsIGUpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcHJvbWlzZS5fdiA9IHZhbHVlO1xuICAgICAgcHJvbWlzZS5fcyA9IDE7XG4gICAgICBub3RpZnkocHJvbWlzZSwgZmFsc2UpO1xuICAgIH1cbiAgfSBjYXRjaCAoZSkge1xuICAgICRyZWplY3QuY2FsbCh7IF93OiBwcm9taXNlLCBfZDogZmFsc2UgfSwgZSk7IC8vIHdyYXBcbiAgfVxufTtcblxuLy8gY29uc3RydWN0b3IgcG9seWZpbGxcbmlmICghVVNFX05BVElWRSkge1xuICAvLyAyNS40LjMuMSBQcm9taXNlKGV4ZWN1dG9yKVxuICAkUHJvbWlzZSA9IGZ1bmN0aW9uIFByb21pc2UoZXhlY3V0b3IpIHtcbiAgICBhbkluc3RhbmNlKHRoaXMsICRQcm9taXNlLCBQUk9NSVNFLCAnX2gnKTtcbiAgICBhRnVuY3Rpb24oZXhlY3V0b3IpO1xuICAgIEludGVybmFsLmNhbGwodGhpcyk7XG4gICAgdHJ5IHtcbiAgICAgIGV4ZWN1dG9yKGN0eCgkcmVzb2x2ZSwgdGhpcywgMSksIGN0eCgkcmVqZWN0LCB0aGlzLCAxKSk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAkcmVqZWN0LmNhbGwodGhpcywgZXJyKTtcbiAgICB9XG4gIH07XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuICBJbnRlcm5hbCA9IGZ1bmN0aW9uIFByb21pc2UoZXhlY3V0b3IpIHtcbiAgICB0aGlzLl9jID0gW107ICAgICAgICAgICAgIC8vIDwtIGF3YWl0aW5nIHJlYWN0aW9uc1xuICAgIHRoaXMuX2EgPSB1bmRlZmluZWQ7ICAgICAgLy8gPC0gY2hlY2tlZCBpbiBpc1VuaGFuZGxlZCByZWFjdGlvbnNcbiAgICB0aGlzLl9zID0gMDsgICAgICAgICAgICAgIC8vIDwtIHN0YXRlXG4gICAgdGhpcy5fZCA9IGZhbHNlOyAgICAgICAgICAvLyA8LSBkb25lXG4gICAgdGhpcy5fdiA9IHVuZGVmaW5lZDsgICAgICAvLyA8LSB2YWx1ZVxuICAgIHRoaXMuX2ggPSAwOyAgICAgICAgICAgICAgLy8gPC0gcmVqZWN0aW9uIHN0YXRlLCAwIC0gZGVmYXVsdCwgMSAtIGhhbmRsZWQsIDIgLSB1bmhhbmRsZWRcbiAgICB0aGlzLl9uID0gZmFsc2U7ICAgICAgICAgIC8vIDwtIG5vdGlmeVxuICB9O1xuICBJbnRlcm5hbC5wcm90b3R5cGUgPSByZXF1aXJlKCcuL19yZWRlZmluZS1hbGwnKSgkUHJvbWlzZS5wcm90b3R5cGUsIHtcbiAgICAvLyAyNS40LjUuMyBQcm9taXNlLnByb3RvdHlwZS50aGVuKG9uRnVsZmlsbGVkLCBvblJlamVjdGVkKVxuICAgIHRoZW46IGZ1bmN0aW9uIHRoZW4ob25GdWxmaWxsZWQsIG9uUmVqZWN0ZWQpIHtcbiAgICAgIHZhciByZWFjdGlvbiA9IG5ld1Byb21pc2VDYXBhYmlsaXR5KHNwZWNpZXNDb25zdHJ1Y3Rvcih0aGlzLCAkUHJvbWlzZSkpO1xuICAgICAgcmVhY3Rpb24ub2sgPSB0eXBlb2Ygb25GdWxmaWxsZWQgPT0gJ2Z1bmN0aW9uJyA/IG9uRnVsZmlsbGVkIDogdHJ1ZTtcbiAgICAgIHJlYWN0aW9uLmZhaWwgPSB0eXBlb2Ygb25SZWplY3RlZCA9PSAnZnVuY3Rpb24nICYmIG9uUmVqZWN0ZWQ7XG4gICAgICByZWFjdGlvbi5kb21haW4gPSBpc05vZGUgPyBwcm9jZXNzLmRvbWFpbiA6IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2MucHVzaChyZWFjdGlvbik7XG4gICAgICBpZiAodGhpcy5fYSkgdGhpcy5fYS5wdXNoKHJlYWN0aW9uKTtcbiAgICAgIGlmICh0aGlzLl9zKSBub3RpZnkodGhpcywgZmFsc2UpO1xuICAgICAgcmV0dXJuIHJlYWN0aW9uLnByb21pc2U7XG4gICAgfSxcbiAgICAvLyAyNS40LjUuMSBQcm9taXNlLnByb3RvdHlwZS5jYXRjaChvblJlamVjdGVkKVxuICAgICdjYXRjaCc6IGZ1bmN0aW9uIChvblJlamVjdGVkKSB7XG4gICAgICByZXR1cm4gdGhpcy50aGVuKHVuZGVmaW5lZCwgb25SZWplY3RlZCk7XG4gICAgfVxuICB9KTtcbiAgT3duUHJvbWlzZUNhcGFiaWxpdHkgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHByb21pc2UgPSBuZXcgSW50ZXJuYWwoKTtcbiAgICB0aGlzLnByb21pc2UgPSBwcm9taXNlO1xuICAgIHRoaXMucmVzb2x2ZSA9IGN0eCgkcmVzb2x2ZSwgcHJvbWlzZSwgMSk7XG4gICAgdGhpcy5yZWplY3QgPSBjdHgoJHJlamVjdCwgcHJvbWlzZSwgMSk7XG4gIH07XG4gIG5ld1Byb21pc2VDYXBhYmlsaXR5TW9kdWxlLmYgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eSA9IGZ1bmN0aW9uIChDKSB7XG4gICAgcmV0dXJuIEMgPT09ICRQcm9taXNlIHx8IEMgPT09IFdyYXBwZXJcbiAgICAgID8gbmV3IE93blByb21pc2VDYXBhYmlsaXR5KEMpXG4gICAgICA6IG5ld0dlbmVyaWNQcm9taXNlQ2FwYWJpbGl0eShDKTtcbiAgfTtcbn1cblxuJGV4cG9ydCgkZXhwb3J0LkcgKyAkZXhwb3J0LlcgKyAkZXhwb3J0LkYgKiAhVVNFX05BVElWRSwgeyBQcm9taXNlOiAkUHJvbWlzZSB9KTtcbnJlcXVpcmUoJy4vX3NldC10by1zdHJpbmctdGFnJykoJFByb21pc2UsIFBST01JU0UpO1xucmVxdWlyZSgnLi9fc2V0LXNwZWNpZXMnKShQUk9NSVNFKTtcbldyYXBwZXIgPSByZXF1aXJlKCcuL19jb3JlJylbUFJPTUlTRV07XG5cbi8vIHN0YXRpY3NcbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIVVTRV9OQVRJVkUsIFBST01JU0UsIHtcbiAgLy8gMjUuNC40LjUgUHJvbWlzZS5yZWplY3QocilcbiAgcmVqZWN0OiBmdW5jdGlvbiByZWplY3Qocikge1xuICAgIHZhciBjYXBhYmlsaXR5ID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkodGhpcyk7XG4gICAgdmFyICQkcmVqZWN0ID0gY2FwYWJpbGl0eS5yZWplY3Q7XG4gICAgJCRyZWplY3Qocik7XG4gICAgcmV0dXJuIGNhcGFiaWxpdHkucHJvbWlzZTtcbiAgfVxufSk7XG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqIChMSUJSQVJZIHx8ICFVU0VfTkFUSVZFKSwgUFJPTUlTRSwge1xuICAvLyAyNS40LjQuNiBQcm9taXNlLnJlc29sdmUoeClcbiAgcmVzb2x2ZTogZnVuY3Rpb24gcmVzb2x2ZSh4KSB7XG4gICAgcmV0dXJuIHByb21pc2VSZXNvbHZlKExJQlJBUlkgJiYgdGhpcyA9PT0gV3JhcHBlciA/ICRQcm9taXNlIDogdGhpcywgeCk7XG4gIH1cbn0pO1xuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhKFVTRV9OQVRJVkUgJiYgcmVxdWlyZSgnLi9faXRlci1kZXRlY3QnKShmdW5jdGlvbiAoaXRlcikge1xuICAkUHJvbWlzZS5hbGwoaXRlcilbJ2NhdGNoJ10oZW1wdHkpO1xufSkpLCBQUk9NSVNFLCB7XG4gIC8vIDI1LjQuNC4xIFByb21pc2UuYWxsKGl0ZXJhYmxlKVxuICBhbGw6IGZ1bmN0aW9uIGFsbChpdGVyYWJsZSkge1xuICAgIHZhciBDID0gdGhpcztcbiAgICB2YXIgY2FwYWJpbGl0eSA9IG5ld1Byb21pc2VDYXBhYmlsaXR5KEMpO1xuICAgIHZhciByZXNvbHZlID0gY2FwYWJpbGl0eS5yZXNvbHZlO1xuICAgIHZhciByZWplY3QgPSBjYXBhYmlsaXR5LnJlamVjdDtcbiAgICB2YXIgcmVzdWx0ID0gcGVyZm9ybShmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgdmFsdWVzID0gW107XG4gICAgICB2YXIgaW5kZXggPSAwO1xuICAgICAgdmFyIHJlbWFpbmluZyA9IDE7XG4gICAgICBmb3JPZihpdGVyYWJsZSwgZmFsc2UsIGZ1bmN0aW9uIChwcm9taXNlKSB7XG4gICAgICAgIHZhciAkaW5kZXggPSBpbmRleCsrO1xuICAgICAgICB2YXIgYWxyZWFkeUNhbGxlZCA9IGZhbHNlO1xuICAgICAgICB2YWx1ZXMucHVzaCh1bmRlZmluZWQpO1xuICAgICAgICByZW1haW5pbmcrKztcbiAgICAgICAgQy5yZXNvbHZlKHByb21pc2UpLnRoZW4oZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgaWYgKGFscmVhZHlDYWxsZWQpIHJldHVybjtcbiAgICAgICAgICBhbHJlYWR5Q2FsbGVkID0gdHJ1ZTtcbiAgICAgICAgICB2YWx1ZXNbJGluZGV4XSA9IHZhbHVlO1xuICAgICAgICAgIC0tcmVtYWluaW5nIHx8IHJlc29sdmUodmFsdWVzKTtcbiAgICAgICAgfSwgcmVqZWN0KTtcbiAgICAgIH0pO1xuICAgICAgLS1yZW1haW5pbmcgfHwgcmVzb2x2ZSh2YWx1ZXMpO1xuICAgIH0pO1xuICAgIGlmIChyZXN1bHQuZSkgcmVqZWN0KHJlc3VsdC52KTtcbiAgICByZXR1cm4gY2FwYWJpbGl0eS5wcm9taXNlO1xuICB9LFxuICAvLyAyNS40LjQuNCBQcm9taXNlLnJhY2UoaXRlcmFibGUpXG4gIHJhY2U6IGZ1bmN0aW9uIHJhY2UoaXRlcmFibGUpIHtcbiAgICB2YXIgQyA9IHRoaXM7XG4gICAgdmFyIGNhcGFiaWxpdHkgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eShDKTtcbiAgICB2YXIgcmVqZWN0ID0gY2FwYWJpbGl0eS5yZWplY3Q7XG4gICAgdmFyIHJlc3VsdCA9IHBlcmZvcm0oZnVuY3Rpb24gKCkge1xuICAgICAgZm9yT2YoaXRlcmFibGUsIGZhbHNlLCBmdW5jdGlvbiAocHJvbWlzZSkge1xuICAgICAgICBDLnJlc29sdmUocHJvbWlzZSkudGhlbihjYXBhYmlsaXR5LnJlc29sdmUsIHJlamVjdCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICBpZiAocmVzdWx0LmUpIHJlamVjdChyZXN1bHQudik7XG4gICAgcmV0dXJuIGNhcGFiaWxpdHkucHJvbWlzZTtcbiAgfVxufSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LnByb21pc2UuanNcbi8vIG1vZHVsZSBpZCA9IC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYucHJvbWlzZS5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IG1haW4iLCIndXNlIHN0cmljdCc7XG52YXIgJGF0ID0gcmVxdWlyZSgnLi9fc3RyaW5nLWF0JykodHJ1ZSk7XG5cbi8vIDIxLjEuMy4yNyBTdHJpbmcucHJvdG90eXBlW0BAaXRlcmF0b3JdKClcbnJlcXVpcmUoJy4vX2l0ZXItZGVmaW5lJykoU3RyaW5nLCAnU3RyaW5nJywgZnVuY3Rpb24gKGl0ZXJhdGVkKSB7XG4gIHRoaXMuX3QgPSBTdHJpbmcoaXRlcmF0ZWQpOyAvLyB0YXJnZXRcbiAgdGhpcy5faSA9IDA7ICAgICAgICAgICAgICAgIC8vIG5leHQgaW5kZXhcbi8vIDIxLjEuNS4yLjEgJVN0cmluZ0l0ZXJhdG9yUHJvdG90eXBlJS5uZXh0KClcbn0sIGZ1bmN0aW9uICgpIHtcbiAgdmFyIE8gPSB0aGlzLl90O1xuICB2YXIgaW5kZXggPSB0aGlzLl9pO1xuICB2YXIgcG9pbnQ7XG4gIGlmIChpbmRleCA+PSBPLmxlbmd0aCkgcmV0dXJuIHsgdmFsdWU6IHVuZGVmaW5lZCwgZG9uZTogdHJ1ZSB9O1xuICBwb2ludCA9ICRhdChPLCBpbmRleCk7XG4gIHRoaXMuX2kgKz0gcG9pbnQubGVuZ3RoO1xuICByZXR1cm4geyB2YWx1ZTogcG9pbnQsIGRvbmU6IGZhbHNlIH07XG59KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yLmpzXG4vLyBtb2R1bGUgaWQgPSAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvci5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IG1haW4iLCIndXNlIHN0cmljdCc7XG4vLyBFQ01BU2NyaXB0IDYgc3ltYm9scyBzaGltXG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgaGFzID0gcmVxdWlyZSgnLi9faGFzJyk7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpO1xudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbnZhciByZWRlZmluZSA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lJyk7XG52YXIgTUVUQSA9IHJlcXVpcmUoJy4vX21ldGEnKS5LRVk7XG52YXIgJGZhaWxzID0gcmVxdWlyZSgnLi9fZmFpbHMnKTtcbnZhciBzaGFyZWQgPSByZXF1aXJlKCcuL19zaGFyZWQnKTtcbnZhciBzZXRUb1N0cmluZ1RhZyA9IHJlcXVpcmUoJy4vX3NldC10by1zdHJpbmctdGFnJyk7XG52YXIgdWlkID0gcmVxdWlyZSgnLi9fdWlkJyk7XG52YXIgd2tzID0gcmVxdWlyZSgnLi9fd2tzJyk7XG52YXIgd2tzRXh0ID0gcmVxdWlyZSgnLi9fd2tzLWV4dCcpO1xudmFyIHdrc0RlZmluZSA9IHJlcXVpcmUoJy4vX3drcy1kZWZpbmUnKTtcbnZhciBlbnVtS2V5cyA9IHJlcXVpcmUoJy4vX2VudW0ta2V5cycpO1xudmFyIGlzQXJyYXkgPSByZXF1aXJlKCcuL19pcy1hcnJheScpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG52YXIgdG9QcmltaXRpdmUgPSByZXF1aXJlKCcuL190by1wcmltaXRpdmUnKTtcbnZhciBjcmVhdGVEZXNjID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpO1xudmFyIF9jcmVhdGUgPSByZXF1aXJlKCcuL19vYmplY3QtY3JlYXRlJyk7XG52YXIgZ09QTkV4dCA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BuLWV4dCcpO1xudmFyICRHT1BEID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcGQnKTtcbnZhciAkRFAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKTtcbnZhciAka2V5cyA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJyk7XG52YXIgZ09QRCA9ICRHT1BELmY7XG52YXIgZFAgPSAkRFAuZjtcbnZhciBnT1BOID0gZ09QTkV4dC5mO1xudmFyICRTeW1ib2wgPSBnbG9iYWwuU3ltYm9sO1xudmFyICRKU09OID0gZ2xvYmFsLkpTT047XG52YXIgX3N0cmluZ2lmeSA9ICRKU09OICYmICRKU09OLnN0cmluZ2lmeTtcbnZhciBQUk9UT1RZUEUgPSAncHJvdG90eXBlJztcbnZhciBISURERU4gPSB3a3MoJ19oaWRkZW4nKTtcbnZhciBUT19QUklNSVRJVkUgPSB3a3MoJ3RvUHJpbWl0aXZlJyk7XG52YXIgaXNFbnVtID0ge30ucHJvcGVydHlJc0VudW1lcmFibGU7XG52YXIgU3ltYm9sUmVnaXN0cnkgPSBzaGFyZWQoJ3N5bWJvbC1yZWdpc3RyeScpO1xudmFyIEFsbFN5bWJvbHMgPSBzaGFyZWQoJ3N5bWJvbHMnKTtcbnZhciBPUFN5bWJvbHMgPSBzaGFyZWQoJ29wLXN5bWJvbHMnKTtcbnZhciBPYmplY3RQcm90byA9IE9iamVjdFtQUk9UT1RZUEVdO1xudmFyIFVTRV9OQVRJVkUgPSB0eXBlb2YgJFN5bWJvbCA9PSAnZnVuY3Rpb24nO1xudmFyIFFPYmplY3QgPSBnbG9iYWwuUU9iamVjdDtcbi8vIERvbid0IHVzZSBzZXR0ZXJzIGluIFF0IFNjcmlwdCwgaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzE3M1xudmFyIHNldHRlciA9ICFRT2JqZWN0IHx8ICFRT2JqZWN0W1BST1RPVFlQRV0gfHwgIVFPYmplY3RbUFJPVE9UWVBFXS5maW5kQ2hpbGQ7XG5cbi8vIGZhbGxiYWNrIGZvciBvbGQgQW5kcm9pZCwgaHR0cHM6Ly9jb2RlLmdvb2dsZS5jb20vcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTY4N1xudmFyIHNldFN5bWJvbERlc2MgPSBERVNDUklQVE9SUyAmJiAkZmFpbHMoZnVuY3Rpb24gKCkge1xuICByZXR1cm4gX2NyZWF0ZShkUCh7fSwgJ2EnLCB7XG4gICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBkUCh0aGlzLCAnYScsIHsgdmFsdWU6IDcgfSkuYTsgfVxuICB9KSkuYSAhPSA3O1xufSkgPyBmdW5jdGlvbiAoaXQsIGtleSwgRCkge1xuICB2YXIgcHJvdG9EZXNjID0gZ09QRChPYmplY3RQcm90bywga2V5KTtcbiAgaWYgKHByb3RvRGVzYykgZGVsZXRlIE9iamVjdFByb3RvW2tleV07XG4gIGRQKGl0LCBrZXksIEQpO1xuICBpZiAocHJvdG9EZXNjICYmIGl0ICE9PSBPYmplY3RQcm90bykgZFAoT2JqZWN0UHJvdG8sIGtleSwgcHJvdG9EZXNjKTtcbn0gOiBkUDtcblxudmFyIHdyYXAgPSBmdW5jdGlvbiAodGFnKSB7XG4gIHZhciBzeW0gPSBBbGxTeW1ib2xzW3RhZ10gPSBfY3JlYXRlKCRTeW1ib2xbUFJPVE9UWVBFXSk7XG4gIHN5bS5fayA9IHRhZztcbiAgcmV0dXJuIHN5bTtcbn07XG5cbnZhciBpc1N5bWJvbCA9IFVTRV9OQVRJVkUgJiYgdHlwZW9mICRTeW1ib2wuaXRlcmF0b3IgPT0gJ3N5bWJvbCcgPyBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIHR5cGVvZiBpdCA9PSAnc3ltYm9sJztcbn0gOiBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGl0IGluc3RhbmNlb2YgJFN5bWJvbDtcbn07XG5cbnZhciAkZGVmaW5lUHJvcGVydHkgPSBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eShpdCwga2V5LCBEKSB7XG4gIGlmIChpdCA9PT0gT2JqZWN0UHJvdG8pICRkZWZpbmVQcm9wZXJ0eShPUFN5bWJvbHMsIGtleSwgRCk7XG4gIGFuT2JqZWN0KGl0KTtcbiAga2V5ID0gdG9QcmltaXRpdmUoa2V5LCB0cnVlKTtcbiAgYW5PYmplY3QoRCk7XG4gIGlmIChoYXMoQWxsU3ltYm9scywga2V5KSkge1xuICAgIGlmICghRC5lbnVtZXJhYmxlKSB7XG4gICAgICBpZiAoIWhhcyhpdCwgSElEREVOKSkgZFAoaXQsIEhJRERFTiwgY3JlYXRlRGVzYygxLCB7fSkpO1xuICAgICAgaXRbSElEREVOXVtrZXldID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGhhcyhpdCwgSElEREVOKSAmJiBpdFtISURERU5dW2tleV0pIGl0W0hJRERFTl1ba2V5XSA9IGZhbHNlO1xuICAgICAgRCA9IF9jcmVhdGUoRCwgeyBlbnVtZXJhYmxlOiBjcmVhdGVEZXNjKDAsIGZhbHNlKSB9KTtcbiAgICB9IHJldHVybiBzZXRTeW1ib2xEZXNjKGl0LCBrZXksIEQpO1xuICB9IHJldHVybiBkUChpdCwga2V5LCBEKTtcbn07XG52YXIgJGRlZmluZVByb3BlcnRpZXMgPSBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKGl0LCBQKSB7XG4gIGFuT2JqZWN0KGl0KTtcbiAgdmFyIGtleXMgPSBlbnVtS2V5cyhQID0gdG9JT2JqZWN0KFApKTtcbiAgdmFyIGkgPSAwO1xuICB2YXIgbCA9IGtleXMubGVuZ3RoO1xuICB2YXIga2V5O1xuICB3aGlsZSAobCA+IGkpICRkZWZpbmVQcm9wZXJ0eShpdCwga2V5ID0ga2V5c1tpKytdLCBQW2tleV0pO1xuICByZXR1cm4gaXQ7XG59O1xudmFyICRjcmVhdGUgPSBmdW5jdGlvbiBjcmVhdGUoaXQsIFApIHtcbiAgcmV0dXJuIFAgPT09IHVuZGVmaW5lZCA/IF9jcmVhdGUoaXQpIDogJGRlZmluZVByb3BlcnRpZXMoX2NyZWF0ZShpdCksIFApO1xufTtcbnZhciAkcHJvcGVydHlJc0VudW1lcmFibGUgPSBmdW5jdGlvbiBwcm9wZXJ0eUlzRW51bWVyYWJsZShrZXkpIHtcbiAgdmFyIEUgPSBpc0VudW0uY2FsbCh0aGlzLCBrZXkgPSB0b1ByaW1pdGl2ZShrZXksIHRydWUpKTtcbiAgaWYgKHRoaXMgPT09IE9iamVjdFByb3RvICYmIGhhcyhBbGxTeW1ib2xzLCBrZXkpICYmICFoYXMoT1BTeW1ib2xzLCBrZXkpKSByZXR1cm4gZmFsc2U7XG4gIHJldHVybiBFIHx8ICFoYXModGhpcywga2V5KSB8fCAhaGFzKEFsbFN5bWJvbHMsIGtleSkgfHwgaGFzKHRoaXMsIEhJRERFTikgJiYgdGhpc1tISURERU5dW2tleV0gPyBFIDogdHJ1ZTtcbn07XG52YXIgJGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5RGVzY3JpcHRvcihpdCwga2V5KSB7XG4gIGl0ID0gdG9JT2JqZWN0KGl0KTtcbiAga2V5ID0gdG9QcmltaXRpdmUoa2V5LCB0cnVlKTtcbiAgaWYgKGl0ID09PSBPYmplY3RQcm90byAmJiBoYXMoQWxsU3ltYm9scywga2V5KSAmJiAhaGFzKE9QU3ltYm9scywga2V5KSkgcmV0dXJuO1xuICB2YXIgRCA9IGdPUEQoaXQsIGtleSk7XG4gIGlmIChEICYmIGhhcyhBbGxTeW1ib2xzLCBrZXkpICYmICEoaGFzKGl0LCBISURERU4pICYmIGl0W0hJRERFTl1ba2V5XSkpIEQuZW51bWVyYWJsZSA9IHRydWU7XG4gIHJldHVybiBEO1xufTtcbnZhciAkZ2V0T3duUHJvcGVydHlOYW1lcyA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5TmFtZXMoaXQpIHtcbiAgdmFyIG5hbWVzID0gZ09QTih0b0lPYmplY3QoaXQpKTtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICB2YXIgaSA9IDA7XG4gIHZhciBrZXk7XG4gIHdoaWxlIChuYW1lcy5sZW5ndGggPiBpKSB7XG4gICAgaWYgKCFoYXMoQWxsU3ltYm9scywga2V5ID0gbmFtZXNbaSsrXSkgJiYga2V5ICE9IEhJRERFTiAmJiBrZXkgIT0gTUVUQSkgcmVzdWx0LnB1c2goa2V5KTtcbiAgfSByZXR1cm4gcmVzdWx0O1xufTtcbnZhciAkZ2V0T3duUHJvcGVydHlTeW1ib2xzID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlTeW1ib2xzKGl0KSB7XG4gIHZhciBJU19PUCA9IGl0ID09PSBPYmplY3RQcm90bztcbiAgdmFyIG5hbWVzID0gZ09QTihJU19PUCA/IE9QU3ltYm9scyA6IHRvSU9iamVjdChpdCkpO1xuICB2YXIgcmVzdWx0ID0gW107XG4gIHZhciBpID0gMDtcbiAgdmFyIGtleTtcbiAgd2hpbGUgKG5hbWVzLmxlbmd0aCA+IGkpIHtcbiAgICBpZiAoaGFzKEFsbFN5bWJvbHMsIGtleSA9IG5hbWVzW2krK10pICYmIChJU19PUCA/IGhhcyhPYmplY3RQcm90bywga2V5KSA6IHRydWUpKSByZXN1bHQucHVzaChBbGxTeW1ib2xzW2tleV0pO1xuICB9IHJldHVybiByZXN1bHQ7XG59O1xuXG4vLyAxOS40LjEuMSBTeW1ib2woW2Rlc2NyaXB0aW9uXSlcbmlmICghVVNFX05BVElWRSkge1xuICAkU3ltYm9sID0gZnVuY3Rpb24gU3ltYm9sKCkge1xuICAgIGlmICh0aGlzIGluc3RhbmNlb2YgJFN5bWJvbCkgdGhyb3cgVHlwZUVycm9yKCdTeW1ib2wgaXMgbm90IGEgY29uc3RydWN0b3IhJyk7XG4gICAgdmFyIHRhZyA9IHVpZChhcmd1bWVudHMubGVuZ3RoID4gMCA/IGFyZ3VtZW50c1swXSA6IHVuZGVmaW5lZCk7XG4gICAgdmFyICRzZXQgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgIGlmICh0aGlzID09PSBPYmplY3RQcm90bykgJHNldC5jYWxsKE9QU3ltYm9scywgdmFsdWUpO1xuICAgICAgaWYgKGhhcyh0aGlzLCBISURERU4pICYmIGhhcyh0aGlzW0hJRERFTl0sIHRhZykpIHRoaXNbSElEREVOXVt0YWddID0gZmFsc2U7XG4gICAgICBzZXRTeW1ib2xEZXNjKHRoaXMsIHRhZywgY3JlYXRlRGVzYygxLCB2YWx1ZSkpO1xuICAgIH07XG4gICAgaWYgKERFU0NSSVBUT1JTICYmIHNldHRlcikgc2V0U3ltYm9sRGVzYyhPYmplY3RQcm90bywgdGFnLCB7IGNvbmZpZ3VyYWJsZTogdHJ1ZSwgc2V0OiAkc2V0IH0pO1xuICAgIHJldHVybiB3cmFwKHRhZyk7XG4gIH07XG4gIHJlZGVmaW5lKCRTeW1ib2xbUFJPVE9UWVBFXSwgJ3RvU3RyaW5nJywgZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2s7XG4gIH0pO1xuXG4gICRHT1BELmYgPSAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuICAkRFAuZiA9ICRkZWZpbmVQcm9wZXJ0eTtcbiAgcmVxdWlyZSgnLi9fb2JqZWN0LWdvcG4nKS5mID0gZ09QTkV4dC5mID0gJGdldE93blByb3BlcnR5TmFtZXM7XG4gIHJlcXVpcmUoJy4vX29iamVjdC1waWUnKS5mID0gJHByb3BlcnR5SXNFbnVtZXJhYmxlO1xuICByZXF1aXJlKCcuL19vYmplY3QtZ29wcycpLmYgPSAkZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xuXG4gIGlmIChERVNDUklQVE9SUyAmJiAhcmVxdWlyZSgnLi9fbGlicmFyeScpKSB7XG4gICAgcmVkZWZpbmUoT2JqZWN0UHJvdG8sICdwcm9wZXJ0eUlzRW51bWVyYWJsZScsICRwcm9wZXJ0eUlzRW51bWVyYWJsZSwgdHJ1ZSk7XG4gIH1cblxuICB3a3NFeHQuZiA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgcmV0dXJuIHdyYXAod2tzKG5hbWUpKTtcbiAgfTtcbn1cblxuJGV4cG9ydCgkZXhwb3J0LkcgKyAkZXhwb3J0LlcgKyAkZXhwb3J0LkYgKiAhVVNFX05BVElWRSwgeyBTeW1ib2w6ICRTeW1ib2wgfSk7XG5cbmZvciAodmFyIGVzNlN5bWJvbHMgPSAoXG4gIC8vIDE5LjQuMi4yLCAxOS40LjIuMywgMTkuNC4yLjQsIDE5LjQuMi42LCAxOS40LjIuOCwgMTkuNC4yLjksIDE5LjQuMi4xMCwgMTkuNC4yLjExLCAxOS40LjIuMTIsIDE5LjQuMi4xMywgMTkuNC4yLjE0XG4gICdoYXNJbnN0YW5jZSxpc0NvbmNhdFNwcmVhZGFibGUsaXRlcmF0b3IsbWF0Y2gscmVwbGFjZSxzZWFyY2gsc3BlY2llcyxzcGxpdCx0b1ByaW1pdGl2ZSx0b1N0cmluZ1RhZyx1bnNjb3BhYmxlcydcbikuc3BsaXQoJywnKSwgaiA9IDA7IGVzNlN5bWJvbHMubGVuZ3RoID4gajspd2tzKGVzNlN5bWJvbHNbaisrXSk7XG5cbmZvciAodmFyIHdlbGxLbm93blN5bWJvbHMgPSAka2V5cyh3a3Muc3RvcmUpLCBrID0gMDsgd2VsbEtub3duU3ltYm9scy5sZW5ndGggPiBrOykgd2tzRGVmaW5lKHdlbGxLbm93blN5bWJvbHNbaysrXSk7XG5cbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIVVTRV9OQVRJVkUsICdTeW1ib2wnLCB7XG4gIC8vIDE5LjQuMi4xIFN5bWJvbC5mb3Ioa2V5KVxuICAnZm9yJzogZnVuY3Rpb24gKGtleSkge1xuICAgIHJldHVybiBoYXMoU3ltYm9sUmVnaXN0cnksIGtleSArPSAnJylcbiAgICAgID8gU3ltYm9sUmVnaXN0cnlba2V5XVxuICAgICAgOiBTeW1ib2xSZWdpc3RyeVtrZXldID0gJFN5bWJvbChrZXkpO1xuICB9LFxuICAvLyAxOS40LjIuNSBTeW1ib2wua2V5Rm9yKHN5bSlcbiAga2V5Rm9yOiBmdW5jdGlvbiBrZXlGb3Ioc3ltKSB7XG4gICAgaWYgKCFpc1N5bWJvbChzeW0pKSB0aHJvdyBUeXBlRXJyb3Ioc3ltICsgJyBpcyBub3QgYSBzeW1ib2whJyk7XG4gICAgZm9yICh2YXIga2V5IGluIFN5bWJvbFJlZ2lzdHJ5KSBpZiAoU3ltYm9sUmVnaXN0cnlba2V5XSA9PT0gc3ltKSByZXR1cm4ga2V5O1xuICB9LFxuICB1c2VTZXR0ZXI6IGZ1bmN0aW9uICgpIHsgc2V0dGVyID0gdHJ1ZTsgfSxcbiAgdXNlU2ltcGxlOiBmdW5jdGlvbiAoKSB7IHNldHRlciA9IGZhbHNlOyB9XG59KTtcblxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhVVNFX05BVElWRSwgJ09iamVjdCcsIHtcbiAgLy8gMTkuMS4yLjIgT2JqZWN0LmNyZWF0ZShPIFssIFByb3BlcnRpZXNdKVxuICBjcmVhdGU6ICRjcmVhdGUsXG4gIC8vIDE5LjEuMi40IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKVxuICBkZWZpbmVQcm9wZXJ0eTogJGRlZmluZVByb3BlcnR5LFxuICAvLyAxOS4xLjIuMyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhPLCBQcm9wZXJ0aWVzKVxuICBkZWZpbmVQcm9wZXJ0aWVzOiAkZGVmaW5lUHJvcGVydGllcyxcbiAgLy8gMTkuMS4yLjYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihPLCBQKVxuICBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I6ICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IsXG4gIC8vIDE5LjEuMi43IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKE8pXG4gIGdldE93blByb3BlcnR5TmFtZXM6ICRnZXRPd25Qcm9wZXJ0eU5hbWVzLFxuICAvLyAxOS4xLjIuOCBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKE8pXG4gIGdldE93blByb3BlcnR5U3ltYm9sczogJGdldE93blByb3BlcnR5U3ltYm9sc1xufSk7XG5cbi8vIDI0LjMuMiBKU09OLnN0cmluZ2lmeSh2YWx1ZSBbLCByZXBsYWNlciBbLCBzcGFjZV1dKVxuJEpTT04gJiYgJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAoIVVTRV9OQVRJVkUgfHwgJGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgdmFyIFMgPSAkU3ltYm9sKCk7XG4gIC8vIE1TIEVkZ2UgY29udmVydHMgc3ltYm9sIHZhbHVlcyB0byBKU09OIGFzIHt9XG4gIC8vIFdlYktpdCBjb252ZXJ0cyBzeW1ib2wgdmFsdWVzIHRvIEpTT04gYXMgbnVsbFxuICAvLyBWOCB0aHJvd3Mgb24gYm94ZWQgc3ltYm9sc1xuICByZXR1cm4gX3N0cmluZ2lmeShbU10pICE9ICdbbnVsbF0nIHx8IF9zdHJpbmdpZnkoeyBhOiBTIH0pICE9ICd7fScgfHwgX3N0cmluZ2lmeShPYmplY3QoUykpICE9ICd7fSc7XG59KSksICdKU09OJywge1xuICBzdHJpbmdpZnk6IGZ1bmN0aW9uIHN0cmluZ2lmeShpdCkge1xuICAgIHZhciBhcmdzID0gW2l0XTtcbiAgICB2YXIgaSA9IDE7XG4gICAgdmFyIHJlcGxhY2VyLCAkcmVwbGFjZXI7XG4gICAgd2hpbGUgKGFyZ3VtZW50cy5sZW5ndGggPiBpKSBhcmdzLnB1c2goYXJndW1lbnRzW2krK10pO1xuICAgICRyZXBsYWNlciA9IHJlcGxhY2VyID0gYXJnc1sxXTtcbiAgICBpZiAoIWlzT2JqZWN0KHJlcGxhY2VyKSAmJiBpdCA9PT0gdW5kZWZpbmVkIHx8IGlzU3ltYm9sKGl0KSkgcmV0dXJuOyAvLyBJRTggcmV0dXJucyBzdHJpbmcgb24gdW5kZWZpbmVkXG4gICAgaWYgKCFpc0FycmF5KHJlcGxhY2VyKSkgcmVwbGFjZXIgPSBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICAgICAgaWYgKHR5cGVvZiAkcmVwbGFjZXIgPT0gJ2Z1bmN0aW9uJykgdmFsdWUgPSAkcmVwbGFjZXIuY2FsbCh0aGlzLCBrZXksIHZhbHVlKTtcbiAgICAgIGlmICghaXNTeW1ib2wodmFsdWUpKSByZXR1cm4gdmFsdWU7XG4gICAgfTtcbiAgICBhcmdzWzFdID0gcmVwbGFjZXI7XG4gICAgcmV0dXJuIF9zdHJpbmdpZnkuYXBwbHkoJEpTT04sIGFyZ3MpO1xuICB9XG59KTtcblxuLy8gMTkuNC4zLjQgU3ltYm9sLnByb3RvdHlwZVtAQHRvUHJpbWl0aXZlXShoaW50KVxuJFN5bWJvbFtQUk9UT1RZUEVdW1RPX1BSSU1JVElWRV0gfHwgcmVxdWlyZSgnLi9faGlkZScpKCRTeW1ib2xbUFJPVE9UWVBFXSwgVE9fUFJJTUlUSVZFLCAkU3ltYm9sW1BST1RPVFlQRV0udmFsdWVPZik7XG4vLyAxOS40LjMuNSBTeW1ib2wucHJvdG90eXBlW0BAdG9TdHJpbmdUYWddXG5zZXRUb1N0cmluZ1RhZygkU3ltYm9sLCAnU3ltYm9sJyk7XG4vLyAyMC4yLjEuOSBNYXRoW0BAdG9TdHJpbmdUYWddXG5zZXRUb1N0cmluZ1RhZyhNYXRoLCAnTWF0aCcsIHRydWUpO1xuLy8gMjQuMy4zIEpTT05bQEB0b1N0cmluZ1RhZ11cbnNldFRvU3RyaW5nVGFnKGdsb2JhbC5KU09OLCAnSlNPTicsIHRydWUpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5zeW1ib2wuanNcbi8vIG1vZHVsZSBpZCA9IC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYuc3ltYm9sLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gbWFpbiIsIi8vIGh0dHBzOi8vZ2l0aHViLmNvbS90YzM5L3Byb3Bvc2FsLXByb21pc2UtZmluYWxseVxuJ3VzZSBzdHJpY3QnO1xudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbnZhciBjb3JlID0gcmVxdWlyZSgnLi9fY29yZScpO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIHNwZWNpZXNDb25zdHJ1Y3RvciA9IHJlcXVpcmUoJy4vX3NwZWNpZXMtY29uc3RydWN0b3InKTtcbnZhciBwcm9taXNlUmVzb2x2ZSA9IHJlcXVpcmUoJy4vX3Byb21pc2UtcmVzb2x2ZScpO1xuXG4kZXhwb3J0KCRleHBvcnQuUCArICRleHBvcnQuUiwgJ1Byb21pc2UnLCB7ICdmaW5hbGx5JzogZnVuY3Rpb24gKG9uRmluYWxseSkge1xuICB2YXIgQyA9IHNwZWNpZXNDb25zdHJ1Y3Rvcih0aGlzLCBjb3JlLlByb21pc2UgfHwgZ2xvYmFsLlByb21pc2UpO1xuICB2YXIgaXNGdW5jdGlvbiA9IHR5cGVvZiBvbkZpbmFsbHkgPT0gJ2Z1bmN0aW9uJztcbiAgcmV0dXJuIHRoaXMudGhlbihcbiAgICBpc0Z1bmN0aW9uID8gZnVuY3Rpb24gKHgpIHtcbiAgICAgIHJldHVybiBwcm9taXNlUmVzb2x2ZShDLCBvbkZpbmFsbHkoKSkudGhlbihmdW5jdGlvbiAoKSB7IHJldHVybiB4OyB9KTtcbiAgICB9IDogb25GaW5hbGx5LFxuICAgIGlzRnVuY3Rpb24gPyBmdW5jdGlvbiAoZSkge1xuICAgICAgcmV0dXJuIHByb21pc2VSZXNvbHZlKEMsIG9uRmluYWxseSgpKS50aGVuKGZ1bmN0aW9uICgpIHsgdGhyb3cgZTsgfSk7XG4gICAgfSA6IG9uRmluYWxseVxuICApO1xufSB9KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczcucHJvbWlzZS5maW5hbGx5LmpzXG4vLyBtb2R1bGUgaWQgPSAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM3LnByb21pc2UuZmluYWxseS5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IG1haW4iLCIndXNlIHN0cmljdCc7XG4vLyBodHRwczovL2dpdGh1Yi5jb20vdGMzOS9wcm9wb3NhbC1wcm9taXNlLXRyeVxudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbnZhciBuZXdQcm9taXNlQ2FwYWJpbGl0eSA9IHJlcXVpcmUoJy4vX25ldy1wcm9taXNlLWNhcGFiaWxpdHknKTtcbnZhciBwZXJmb3JtID0gcmVxdWlyZSgnLi9fcGVyZm9ybScpO1xuXG4kZXhwb3J0KCRleHBvcnQuUywgJ1Byb21pc2UnLCB7ICd0cnknOiBmdW5jdGlvbiAoY2FsbGJhY2tmbikge1xuICB2YXIgcHJvbWlzZUNhcGFiaWxpdHkgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eS5mKHRoaXMpO1xuICB2YXIgcmVzdWx0ID0gcGVyZm9ybShjYWxsYmFja2ZuKTtcbiAgKHJlc3VsdC5lID8gcHJvbWlzZUNhcGFiaWxpdHkucmVqZWN0IDogcHJvbWlzZUNhcGFiaWxpdHkucmVzb2x2ZSkocmVzdWx0LnYpO1xuICByZXR1cm4gcHJvbWlzZUNhcGFiaWxpdHkucHJvbWlzZTtcbn0gfSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM3LnByb21pc2UudHJ5LmpzXG4vLyBtb2R1bGUgaWQgPSAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM3LnByb21pc2UudHJ5LmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gbWFpbiIsInJlcXVpcmUoJy4vX3drcy1kZWZpbmUnKSgnYXN5bmNJdGVyYXRvcicpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNy5zeW1ib2wuYXN5bmMtaXRlcmF0b3IuanNcbi8vIG1vZHVsZSBpZCA9IC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczcuc3ltYm9sLmFzeW5jLWl0ZXJhdG9yLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gbWFpbiIsInJlcXVpcmUoJy4vX3drcy1kZWZpbmUnKSgnb2JzZXJ2YWJsZScpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNy5zeW1ib2wub2JzZXJ2YWJsZS5qc1xuLy8gbW9kdWxlIGlkID0gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNy5zeW1ib2wub2JzZXJ2YWJsZS5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IG1haW4iLCJyZXF1aXJlKCcuL2VzNi5hcnJheS5pdGVyYXRvcicpO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIGhpZGUgPSByZXF1aXJlKCcuL19oaWRlJyk7XG52YXIgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJyk7XG52YXIgVE9fU1RSSU5HX1RBRyA9IHJlcXVpcmUoJy4vX3drcycpKCd0b1N0cmluZ1RhZycpO1xuXG52YXIgRE9NSXRlcmFibGVzID0gKCdDU1NSdWxlTGlzdCxDU1NTdHlsZURlY2xhcmF0aW9uLENTU1ZhbHVlTGlzdCxDbGllbnRSZWN0TGlzdCxET01SZWN0TGlzdCxET01TdHJpbmdMaXN0LCcgK1xuICAnRE9NVG9rZW5MaXN0LERhdGFUcmFuc2Zlckl0ZW1MaXN0LEZpbGVMaXN0LEhUTUxBbGxDb2xsZWN0aW9uLEhUTUxDb2xsZWN0aW9uLEhUTUxGb3JtRWxlbWVudCxIVE1MU2VsZWN0RWxlbWVudCwnICtcbiAgJ01lZGlhTGlzdCxNaW1lVHlwZUFycmF5LE5hbWVkTm9kZU1hcCxOb2RlTGlzdCxQYWludFJlcXVlc3RMaXN0LFBsdWdpbixQbHVnaW5BcnJheSxTVkdMZW5ndGhMaXN0LFNWR051bWJlckxpc3QsJyArXG4gICdTVkdQYXRoU2VnTGlzdCxTVkdQb2ludExpc3QsU1ZHU3RyaW5nTGlzdCxTVkdUcmFuc2Zvcm1MaXN0LFNvdXJjZUJ1ZmZlckxpc3QsU3R5bGVTaGVldExpc3QsVGV4dFRyYWNrQ3VlTGlzdCwnICtcbiAgJ1RleHRUcmFja0xpc3QsVG91Y2hMaXN0Jykuc3BsaXQoJywnKTtcblxuZm9yICh2YXIgaSA9IDA7IGkgPCBET01JdGVyYWJsZXMubGVuZ3RoOyBpKyspIHtcbiAgdmFyIE5BTUUgPSBET01JdGVyYWJsZXNbaV07XG4gIHZhciBDb2xsZWN0aW9uID0gZ2xvYmFsW05BTUVdO1xuICB2YXIgcHJvdG8gPSBDb2xsZWN0aW9uICYmIENvbGxlY3Rpb24ucHJvdG90eXBlO1xuICBpZiAocHJvdG8gJiYgIXByb3RvW1RPX1NUUklOR19UQUddKSBoaWRlKHByb3RvLCBUT19TVFJJTkdfVEFHLCBOQU1FKTtcbiAgSXRlcmF0b3JzW05BTUVdID0gSXRlcmF0b3JzLkFycmF5O1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL3dlYi5kb20uaXRlcmFibGUuanNcbi8vIG1vZHVsZSBpZCA9IC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gbWFpbiIsIihmdW5jdGlvbiAoZ2xvYmFsLCBmYWN0b3J5KSB7XG5cdHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyA/IGZhY3RvcnkocmVxdWlyZSgncHJlYWN0JykpIDpcblx0dHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kID8gZGVmaW5lKFsncHJlYWN0J10sIGZhY3RvcnkpIDpcblx0KGZhY3RvcnkoZ2xvYmFsLnByZWFjdCkpO1xufSh0aGlzLCAoZnVuY3Rpb24gKHByZWFjdCkgeyAndXNlIHN0cmljdCc7XG5cblx0Ly8gcmVuZGVyIG1vZGVzXG5cblx0dmFyIEFUVFJfS0VZID0gJ19fcHJlYWN0YXR0cl8nO1xuXG5cdC8qIGdsb2JhbCBfX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX18gKi9cblxuXHQvKipcblx0ICogUmV0dXJuIGEgUmVhY3RFbGVtZW50LWNvbXBhdGlibGUgb2JqZWN0IGZvciB0aGUgY3VycmVudCBzdGF0ZSBvZiBhIHByZWFjdFxuXHQgKiBjb21wb25lbnQuXG5cdCAqL1xuXHRmdW5jdGlvbiBjcmVhdGVSZWFjdEVsZW1lbnQoY29tcG9uZW50KSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHR5cGU6IGNvbXBvbmVudC5jb25zdHJ1Y3Rvcixcblx0XHRcdGtleTogY29tcG9uZW50LmtleSxcblx0XHRcdHJlZjogbnVsbCwgLy8gVW5zdXBwb3J0ZWRcblx0XHRcdHByb3BzOiBjb21wb25lbnQucHJvcHNcblx0XHR9O1xuXHR9XG5cblx0LyoqXG5cdCAqIENyZWF0ZSBhIFJlYWN0RE9NQ29tcG9uZW50LWNvbXBhdGlibGUgb2JqZWN0IGZvciBhIGdpdmVuIERPTSBub2RlIHJlbmRlcmVkXG5cdCAqIGJ5IHByZWFjdC5cblx0ICpcblx0ICogVGhpcyBpbXBsZW1lbnRzIHRoZSBzdWJzZXQgb2YgdGhlIFJlYWN0RE9NQ29tcG9uZW50IGludGVyZmFjZSB0aGF0XG5cdCAqIFJlYWN0IERldlRvb2xzIHJlcXVpcmVzIGluIG9yZGVyIHRvIGRpc3BsYXkgRE9NIG5vZGVzIGluIHRoZSBpbnNwZWN0b3Igd2l0aFxuXHQgKiB0aGUgY29ycmVjdCB0eXBlIGFuZCBwcm9wZXJ0aWVzLlxuXHQgKlxuXHQgKiBAcGFyYW0ge05vZGV9IG5vZGVcblx0ICovXG5cdGZ1bmN0aW9uIGNyZWF0ZVJlYWN0RE9NQ29tcG9uZW50KG5vZGUpIHtcblx0XHR2YXIgY2hpbGROb2RlcyA9IG5vZGUubm9kZVR5cGUgPT09IE5vZGUuRUxFTUVOVF9OT0RFID8gQXJyYXkuZnJvbShub2RlLmNoaWxkTm9kZXMpIDogW107XG5cblx0XHR2YXIgaXNUZXh0ID0gbm9kZS5ub2RlVHlwZSA9PT0gTm9kZS5URVhUX05PREU7XG5cblx0XHRyZXR1cm4ge1xuXHRcdFx0Ly8gLS0tIFJlYWN0RE9NQ29tcG9uZW50IGludGVyZmFjZVxuXHRcdFx0X2N1cnJlbnRFbGVtZW50OiBpc1RleHQgPyBub2RlLnRleHRDb250ZW50IDoge1xuXHRcdFx0XHR0eXBlOiBub2RlLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCksXG5cdFx0XHRcdHByb3BzOiBub2RlW0FUVFJfS0VZXVxuXHRcdFx0fSxcblx0XHRcdF9yZW5kZXJlZENoaWxkcmVuOiBjaGlsZE5vZGVzLm1hcChmdW5jdGlvbiAoY2hpbGQpIHtcblx0XHRcdFx0aWYgKGNoaWxkLl9jb21wb25lbnQpIHtcblx0XHRcdFx0XHRyZXR1cm4gdXBkYXRlUmVhY3RDb21wb25lbnQoY2hpbGQuX2NvbXBvbmVudCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIHVwZGF0ZVJlYWN0Q29tcG9uZW50KGNoaWxkKTtcblx0XHRcdH0pLFxuXHRcdFx0X3N0cmluZ1RleHQ6IGlzVGV4dCA/IG5vZGUudGV4dENvbnRlbnQgOiBudWxsLFxuXG5cdFx0XHQvLyAtLS0gQWRkaXRpb25hbCBwcm9wZXJ0aWVzIHVzZWQgYnkgcHJlYWN0IGRldnRvb2xzXG5cblx0XHRcdC8vIEEgZmxhZyBpbmRpY2F0aW5nIHdoZXRoZXIgdGhlIGRldnRvb2xzIGhhdmUgYmVlbiBub3RpZmllZCBhYm91dCB0aGVcblx0XHRcdC8vIGV4aXN0ZW5jZSBvZiB0aGlzIGNvbXBvbmVudCBpbnN0YW5jZSB5ZXQuXG5cdFx0XHQvLyBUaGlzIGlzIHVzZWQgdG8gc2VuZCB0aGUgYXBwcm9wcmlhdGUgbm90aWZpY2F0aW9ucyB3aGVuIERPTSBjb21wb25lbnRzXG5cdFx0XHQvLyBhcmUgYWRkZWQgb3IgdXBkYXRlZCBiZXR3ZWVuIGNvbXBvc2l0ZSBjb21wb25lbnQgdXBkYXRlcy5cblx0XHRcdF9pbkRldlRvb2xzOiBmYWxzZSxcblx0XHRcdG5vZGU6IG5vZGVcblx0XHR9O1xuXHR9XG5cblx0LyoqXG5cdCAqIFJldHVybiB0aGUgbmFtZSBvZiBhIGNvbXBvbmVudCBjcmVhdGVkIGJ5IGEgYFJlYWN0RWxlbWVudGAtbGlrZSBvYmplY3QuXG5cdCAqXG5cdCAqIEBwYXJhbSB7UmVhY3RFbGVtZW50fSBlbGVtZW50XG5cdCAqL1xuXHRmdW5jdGlvbiB0eXBlTmFtZShlbGVtZW50KSB7XG5cdFx0aWYgKHR5cGVvZiBlbGVtZW50LnR5cGUgPT09ICdmdW5jdGlvbicpIHtcblx0XHRcdHJldHVybiBlbGVtZW50LnR5cGUuZGlzcGxheU5hbWUgfHwgZWxlbWVudC50eXBlLm5hbWU7XG5cdFx0fVxuXHRcdHJldHVybiBlbGVtZW50LnR5cGU7XG5cdH1cblxuXHQvKipcblx0ICogUmV0dXJuIGEgUmVhY3RDb21wb3NpdGVDb21wb25lbnQtY29tcGF0aWJsZSBvYmplY3QgZm9yIGEgZ2l2ZW4gcHJlYWN0XG5cdCAqIGNvbXBvbmVudCBpbnN0YW5jZS5cblx0ICpcblx0ICogVGhpcyBpbXBsZW1lbnRzIHRoZSBzdWJzZXQgb2YgdGhlIFJlYWN0Q29tcG9zaXRlQ29tcG9uZW50IGludGVyZmFjZSB0aGF0XG5cdCAqIHRoZSBEZXZUb29scyByZXF1aXJlcyBpbiBvcmRlciB0byB3YWxrIHRoZSBjb21wb25lbnQgdHJlZSBhbmQgaW5zcGVjdCB0aGVcblx0ICogY29tcG9uZW50J3MgcHJvcGVydGllcy5cblx0ICpcblx0ICogU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC1kZXZ0b29scy9ibG9iL2UzMWVjNTgyNTM0MmVkYTU3MGFjZmM5YmNiNDNhNDQyNThmY2ViMjgvYmFja2VuZC9nZXREYXRhLmpzXG5cdCAqL1xuXHRmdW5jdGlvbiBjcmVhdGVSZWFjdENvbXBvc2l0ZUNvbXBvbmVudChjb21wb25lbnQpIHtcblx0XHR2YXIgX2N1cnJlbnRFbGVtZW50ID0gY3JlYXRlUmVhY3RFbGVtZW50KGNvbXBvbmVudCk7XG5cdFx0dmFyIG5vZGUgPSBjb21wb25lbnQuYmFzZTtcblxuXHRcdHZhciBpbnN0YW5jZSA9IHtcblx0XHRcdC8vIC0tLSBSZWFjdERPTUNvbXBvbmVudCBwcm9wZXJ0aWVzXG5cdFx0XHRnZXROYW1lOiBmdW5jdGlvbiBnZXROYW1lKCkge1xuXHRcdFx0XHRyZXR1cm4gdHlwZU5hbWUoX2N1cnJlbnRFbGVtZW50KTtcblx0XHRcdH0sXG5cblx0XHRcdF9jdXJyZW50RWxlbWVudDogY3JlYXRlUmVhY3RFbGVtZW50KGNvbXBvbmVudCksXG5cdFx0XHRwcm9wczogY29tcG9uZW50LnByb3BzLFxuXHRcdFx0c3RhdGU6IGNvbXBvbmVudC5zdGF0ZSxcblx0XHRcdGZvcmNlVXBkYXRlOiBjb21wb25lbnQuZm9yY2VVcGRhdGUgJiYgY29tcG9uZW50LmZvcmNlVXBkYXRlLmJpbmQoY29tcG9uZW50KSxcblx0XHRcdHNldFN0YXRlOiBjb21wb25lbnQuc2V0U3RhdGUgJiYgY29tcG9uZW50LnNldFN0YXRlLmJpbmQoY29tcG9uZW50KSxcblxuXHRcdFx0Ly8gLS0tIEFkZGl0aW9uYWwgcHJvcGVydGllcyB1c2VkIGJ5IHByZWFjdCBkZXZ0b29sc1xuXHRcdFx0bm9kZTogbm9kZVxuXHRcdH07XG5cblx0XHQvLyBSZWFjdCBEZXZUb29scyBleHBvc2VzIHRoZSBgX2luc3RhbmNlYCBmaWVsZCBvZiB0aGUgc2VsZWN0ZWQgaXRlbSBpbiB0aGVcblx0XHQvLyBjb21wb25lbnQgdHJlZSBhcyBgJHJgIGluIHRoZSBjb25zb2xlLiAgYF9pbnN0YW5jZWAgbXVzdCByZWZlciB0byBhXG5cdFx0Ly8gUmVhY3QgQ29tcG9uZW50IChvciBjb21wYXRpYmxlKSBjbGFzcyBpbnN0YW5jZSB3aXRoIGBwcm9wc2AgYW5kIGBzdGF0ZWBcblx0XHQvLyBmaWVsZHMgYW5kIGBzZXRTdGF0ZSgpYCwgYGZvcmNlVXBkYXRlKClgIG1ldGhvZHMuXG5cdFx0aW5zdGFuY2UuX2luc3RhbmNlID0gY29tcG9uZW50O1xuXG5cdFx0Ly8gSWYgdGhlIHJvb3Qgbm9kZSByZXR1cm5lZCBieSB0aGlzIGNvbXBvbmVudCBpbnN0YW5jZSdzIHJlbmRlciBmdW5jdGlvblxuXHRcdC8vIHdhcyBpdHNlbGYgYSBjb21wb3NpdGUgY29tcG9uZW50LCB0aGVyZSB3aWxsIGJlIGEgYF9jb21wb25lbnRgIHByb3BlcnR5XG5cdFx0Ly8gY29udGFpbmluZyB0aGUgY2hpbGQgY29tcG9uZW50IGluc3RhbmNlLlxuXHRcdGlmIChjb21wb25lbnQuX2NvbXBvbmVudCkge1xuXHRcdFx0aW5zdGFuY2UuX3JlbmRlcmVkQ29tcG9uZW50ID0gdXBkYXRlUmVhY3RDb21wb25lbnQoY29tcG9uZW50Ll9jb21wb25lbnQpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyBPdGhlcndpc2UsIGlmIHRoZSByZW5kZXIoKSBmdW5jdGlvbiByZXR1cm5lZCBhbiBIVE1ML1NWRyBlbGVtZW50LFxuXHRcdFx0Ly8gY3JlYXRlIGEgUmVhY3RET01Db21wb25lbnQtbGlrZSBvYmplY3QgZm9yIHRoZSBET00gbm9kZSBpdHNlbGYuXG5cdFx0XHRpbnN0YW5jZS5fcmVuZGVyZWRDb21wb25lbnQgPSB1cGRhdGVSZWFjdENvbXBvbmVudChub2RlKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gaW5zdGFuY2U7XG5cdH1cblxuXHQvKipcblx0ICogTWFwIG9mIENvbXBvbmVudHxOb2RlIHRvIFJlYWN0RE9NQ29tcG9uZW50fFJlYWN0Q29tcG9zaXRlQ29tcG9uZW50LWxpa2Vcblx0ICogb2JqZWN0LlxuXHQgKlxuXHQgKiBUaGUgc2FtZSBSZWFjdCpDb21wb25lbnQgaW5zdGFuY2UgbXVzdCBiZSB1c2VkIHdoZW4gbm90aWZ5aW5nIGRldnRvb2xzXG5cdCAqIGFib3V0IHRoZSBpbml0aWFsIG1vdW50IG9mIGEgY29tcG9uZW50IGFuZCBzdWJzZXF1ZW50IHVwZGF0ZXMuXG5cdCAqL1xuXHR2YXIgaW5zdGFuY2VNYXAgPSB0eXBlb2YgTWFwID09PSAnZnVuY3Rpb24nICYmIG5ldyBNYXAoKTtcblxuXHQvKipcblx0ICogVXBkYXRlIChhbmQgY3JlYXRlIGlmIG5lY2Vzc2FyeSkgdGhlIFJlYWN0RE9NQ29tcG9uZW50fFJlYWN0Q29tcG9zaXRlQ29tcG9uZW50LWxpa2Vcblx0ICogaW5zdGFuY2UgZm9yIGEgZ2l2ZW4gcHJlYWN0IGNvbXBvbmVudCBpbnN0YW5jZSBvciBET00gTm9kZS5cblx0ICpcblx0ICogQHBhcmFtIHtDb21wb25lbnR8Tm9kZX0gY29tcG9uZW50T3JOb2RlXG5cdCAqL1xuXHRmdW5jdGlvbiB1cGRhdGVSZWFjdENvbXBvbmVudChjb21wb25lbnRPck5vZGUpIHtcblx0XHR2YXIgbmV3SW5zdGFuY2UgPSBjb21wb25lbnRPck5vZGUgaW5zdGFuY2VvZiBOb2RlID8gY3JlYXRlUmVhY3RET01Db21wb25lbnQoY29tcG9uZW50T3JOb2RlKSA6IGNyZWF0ZVJlYWN0Q29tcG9zaXRlQ29tcG9uZW50KGNvbXBvbmVudE9yTm9kZSk7XG5cdFx0aWYgKGluc3RhbmNlTWFwLmhhcyhjb21wb25lbnRPck5vZGUpKSB7XG5cdFx0XHR2YXIgaW5zdCA9IGluc3RhbmNlTWFwLmdldChjb21wb25lbnRPck5vZGUpO1xuXHRcdFx0T2JqZWN0LmFzc2lnbihpbnN0LCBuZXdJbnN0YW5jZSk7XG5cdFx0XHRyZXR1cm4gaW5zdDtcblx0XHR9XG5cdFx0aW5zdGFuY2VNYXAuc2V0KGNvbXBvbmVudE9yTm9kZSwgbmV3SW5zdGFuY2UpO1xuXHRcdHJldHVybiBuZXdJbnN0YW5jZTtcblx0fVxuXG5cdGZ1bmN0aW9uIG5leHRSb290S2V5KHJvb3RzKSB7XG5cdFx0cmV0dXJuICcuJyArIE9iamVjdC5rZXlzKHJvb3RzKS5sZW5ndGg7XG5cdH1cblxuXHQvKipcblx0ICogRmluZCBhbGwgcm9vdCBjb21wb25lbnQgaW5zdGFuY2VzIHJlbmRlcmVkIGJ5IHByZWFjdCBpbiBgbm9kZWAncyBjaGlsZHJlblxuXHQgKiBhbmQgYWRkIHRoZW0gdG8gdGhlIGByb290c2AgbWFwLlxuXHQgKlxuXHQgKiBAcGFyYW0ge0RPTUVsZW1lbnR9IG5vZGVcblx0ICogQHBhcmFtIHtba2V5OiBzdHJpbmddID0+IFJlYWN0RE9NQ29tcG9uZW50fFJlYWN0Q29tcG9zaXRlQ29tcG9uZW50fVxuXHQgKi9cblx0ZnVuY3Rpb24gZmluZFJvb3RzKG5vZGUsIHJvb3RzKSB7XG5cdFx0QXJyYXkuZnJvbShub2RlLmNoaWxkTm9kZXMpLmZvckVhY2goZnVuY3Rpb24gKGNoaWxkKSB7XG5cdFx0XHRpZiAoY2hpbGQuX2NvbXBvbmVudCkge1xuXHRcdFx0XHRyb290c1tuZXh0Um9vdEtleShyb290cyldID0gdXBkYXRlUmVhY3RDb21wb25lbnQoY2hpbGQuX2NvbXBvbmVudCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRmaW5kUm9vdHMoY2hpbGQsIHJvb3RzKTtcblx0XHRcdH1cblx0XHR9KTtcblx0fVxuXG5cdC8qKlxuXHQgKiBDcmVhdGUgYSBicmlkZ2UgZm9yIGV4cG9zaW5nIHByZWFjdCdzIGNvbXBvbmVudCB0cmVlIHRvIFJlYWN0IERldlRvb2xzLlxuXHQgKlxuXHQgKiBJdCBjcmVhdGVzIGltcGxlbWVudGF0aW9ucyBvZiB0aGUgaW50ZXJmYWNlcyB0aGF0IFJlYWN0RE9NIHBhc3NlcyB0b1xuXHQgKiBkZXZ0b29scyB0byBlbmFibGUgaXQgdG8gcXVlcnkgdGhlIGNvbXBvbmVudCB0cmVlIGFuZCBob29rIGludG8gY29tcG9uZW50XG5cdCAqIHVwZGF0ZXMuXG5cdCAqXG5cdCAqIFNlZSBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QvYmxvYi81OWZmNzc0OWVkYTBjZDg1OGQ1ZWU1NjgzMTViY2JhMWJlNzVhMWNhL3NyYy9yZW5kZXJlcnMvZG9tL1JlYWN0RE9NLmpzXG5cdCAqIGZvciBob3cgUmVhY3RET00gZXhwb3J0cyBpdHMgaW50ZXJuYWxzIGZvciB1c2UgYnkgdGhlIGRldnRvb2xzIGFuZFxuXHQgKiB0aGUgYGF0dGFjaFJlbmRlcmVyKClgIGZ1bmN0aW9uIGluXG5cdCAqIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC1kZXZ0b29scy9ibG9iL2UzMWVjNTgyNTM0MmVkYTU3MGFjZmM5YmNiNDNhNDQyNThmY2ViMjgvYmFja2VuZC9hdHRhY2hSZW5kZXJlci5qc1xuXHQgKiBmb3IgaG93IHRoZSBkZXZ0b29scyBjb25zdW1lcyB0aGUgcmVzdWx0aW5nIG9iamVjdHMuXG5cdCAqL1xuXHRmdW5jdGlvbiBjcmVhdGVEZXZUb29sc0JyaWRnZSgpIHtcblx0XHQvLyBUaGUgZGV2dG9vbHMgaGFzIGRpZmZlcmVudCBwYXRocyBmb3IgaW50ZXJhY3Rpbmcgd2l0aCB0aGUgcmVuZGVyZXJzIGZyb21cblx0XHQvLyBSZWFjdCBOYXRpdmUsIGxlZ2FjeSBSZWFjdCBET00gYW5kIGN1cnJlbnQgUmVhY3QgRE9NLlxuXHRcdC8vXG5cdFx0Ly8gSGVyZSB3ZSBlbXVsYXRlIHRoZSBpbnRlcmZhY2UgZm9yIHRoZSBjdXJyZW50IFJlYWN0IERPTSAodjE1KykgbGliLlxuXG5cdFx0Ly8gUmVhY3RET01Db21wb25lbnRUcmVlLWxpa2Ugb2JqZWN0XG5cdFx0dmFyIENvbXBvbmVudFRyZWUgPSB7XG5cdFx0XHRnZXROb2RlRnJvbUluc3RhbmNlOiBmdW5jdGlvbiBnZXROb2RlRnJvbUluc3RhbmNlKGluc3RhbmNlKSB7XG5cdFx0XHRcdHJldHVybiBpbnN0YW5jZS5ub2RlO1xuXHRcdFx0fSxcblx0XHRcdGdldENsb3Nlc3RJbnN0YW5jZUZyb21Ob2RlOiBmdW5jdGlvbiBnZXRDbG9zZXN0SW5zdGFuY2VGcm9tTm9kZShub2RlKSB7XG5cdFx0XHRcdHdoaWxlIChub2RlICYmICFub2RlLl9jb21wb25lbnQpIHtcblx0XHRcdFx0XHRub2RlID0gbm9kZS5wYXJlbnROb2RlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiBub2RlID8gdXBkYXRlUmVhY3RDb21wb25lbnQobm9kZS5fY29tcG9uZW50KSA6IG51bGw7XG5cdFx0XHR9XG5cdFx0fTtcblxuXHRcdC8vIE1hcCBvZiByb290IElEICh0aGUgSUQgaXMgdW5pbXBvcnRhbnQpIHRvIGNvbXBvbmVudCBpbnN0YW5jZS5cblx0XHR2YXIgcm9vdHMgPSB7fTtcblx0XHRmaW5kUm9vdHMoZG9jdW1lbnQuYm9keSwgcm9vdHMpO1xuXG5cdFx0Ly8gUmVhY3RNb3VudC1saWtlIG9iamVjdFxuXHRcdC8vXG5cdFx0Ly8gVXNlZCBieSBkZXZ0b29scyB0byBkaXNjb3ZlciB0aGUgbGlzdCBvZiByb290IGNvbXBvbmVudCBpbnN0YW5jZXMgYW5kIGdldFxuXHRcdC8vIG5vdGlmaWVkIHdoZW4gbmV3IHJvb3QgY29tcG9uZW50cyBhcmUgcmVuZGVyZWQuXG5cdFx0dmFyIE1vdW50ID0ge1xuXHRcdFx0X2luc3RhbmNlc0J5UmVhY3RSb290SUQ6IHJvb3RzLFxuXG5cdFx0XHQvLyBTdHViIC0gUmVhY3QgRGV2VG9vbHMgZXhwZWN0cyB0byBmaW5kIHRoaXMgbWV0aG9kIGFuZCByZXBsYWNlIGl0XG5cdFx0XHQvLyB3aXRoIGEgd3JhcHBlciBpbiBvcmRlciB0byBvYnNlcnZlIG5ldyByb290IGNvbXBvbmVudHMgYmVpbmcgYWRkZWRcblx0XHRcdF9yZW5kZXJOZXdSb290Q29tcG9uZW50OiBmdW5jdGlvbiBfcmVuZGVyTmV3Um9vdENvbXBvbmVudCgpIC8qIGluc3RhbmNlLCAuLi4gKi97fVxuXHRcdH07XG5cblx0XHQvLyBSZWFjdFJlY29uY2lsZXItbGlrZSBvYmplY3Rcblx0XHR2YXIgUmVjb25jaWxlciA9IHtcblx0XHRcdC8vIFN0dWJzIC0gUmVhY3QgRGV2VG9vbHMgZXhwZWN0cyB0byBmaW5kIHRoZXNlIG1ldGhvZHMgYW5kIHJlcGxhY2UgdGhlbVxuXHRcdFx0Ly8gd2l0aCB3cmFwcGVycyBpbiBvcmRlciB0byBvYnNlcnZlIGNvbXBvbmVudHMgYmVpbmcgbW91bnRlZCwgdXBkYXRlZCBhbmRcblx0XHRcdC8vIHVubW91bnRlZFxuXHRcdFx0bW91bnRDb21wb25lbnQ6IGZ1bmN0aW9uIG1vdW50Q29tcG9uZW50KCkgLyogaW5zdGFuY2UsIC4uLiAqL3t9LFxuXHRcdFx0cGVyZm9ybVVwZGF0ZUlmTmVjZXNzYXJ5OiBmdW5jdGlvbiBwZXJmb3JtVXBkYXRlSWZOZWNlc3NhcnkoKSAvKiBpbnN0YW5jZSwgLi4uICove30sXG5cdFx0XHRyZWNlaXZlQ29tcG9uZW50OiBmdW5jdGlvbiByZWNlaXZlQ29tcG9uZW50KCkgLyogaW5zdGFuY2UsIC4uLiAqL3t9LFxuXHRcdFx0dW5tb3VudENvbXBvbmVudDogZnVuY3Rpb24gdW5tb3VudENvbXBvbmVudCgpIC8qIGluc3RhbmNlLCAuLi4gKi97fVxuXHRcdH07XG5cblx0XHQvKiogTm90aWZ5IGRldnRvb2xzIHRoYXQgYSBuZXcgY29tcG9uZW50IGluc3RhbmNlIGhhcyBiZWVuIG1vdW50ZWQgaW50byB0aGUgRE9NLiAqL1xuXHRcdHZhciBjb21wb25lbnRBZGRlZCA9IGZ1bmN0aW9uIGNvbXBvbmVudEFkZGVkKGNvbXBvbmVudCkge1xuXHRcdFx0dmFyIGluc3RhbmNlID0gdXBkYXRlUmVhY3RDb21wb25lbnQoY29tcG9uZW50KTtcblx0XHRcdGlmIChpc1Jvb3RDb21wb25lbnQoY29tcG9uZW50KSkge1xuXHRcdFx0XHRpbnN0YW5jZS5fcm9vdElEID0gbmV4dFJvb3RLZXkocm9vdHMpO1xuXHRcdFx0XHRyb290c1tpbnN0YW5jZS5fcm9vdElEXSA9IGluc3RhbmNlO1xuXHRcdFx0XHRNb3VudC5fcmVuZGVyTmV3Um9vdENvbXBvbmVudChpbnN0YW5jZSk7XG5cdFx0XHR9XG5cdFx0XHR2aXNpdE5vbkNvbXBvc2l0ZUNoaWxkcmVuKGluc3RhbmNlLCBmdW5jdGlvbiAoY2hpbGRJbnN0KSB7XG5cdFx0XHRcdGNoaWxkSW5zdC5faW5EZXZUb29scyA9IHRydWU7XG5cdFx0XHRcdFJlY29uY2lsZXIubW91bnRDb21wb25lbnQoY2hpbGRJbnN0KTtcblx0XHRcdH0pO1xuXHRcdFx0UmVjb25jaWxlci5tb3VudENvbXBvbmVudChpbnN0YW5jZSk7XG5cdFx0fTtcblxuXHRcdC8qKiBOb3RpZnkgZGV2dG9vbHMgdGhhdCBhIGNvbXBvbmVudCBoYXMgYmVlbiB1cGRhdGVkIHdpdGggbmV3IHByb3BzL3N0YXRlLiAqL1xuXHRcdHZhciBjb21wb25lbnRVcGRhdGVkID0gZnVuY3Rpb24gY29tcG9uZW50VXBkYXRlZChjb21wb25lbnQpIHtcblx0XHRcdHZhciBwcmV2UmVuZGVyZWRDaGlsZHJlbiA9IFtdO1xuXHRcdFx0dmFyIGluc3RhbmNlID0gaW5zdGFuY2VNYXAuZ2V0KGNvbXBvbmVudCk7XG5cdFx0XHRpZiAoaW5zdGFuY2UpIHtcblx0XHRcdFx0dmlzaXROb25Db21wb3NpdGVDaGlsZHJlbihpbnN0YW5jZSwgZnVuY3Rpb24gKGNoaWxkSW5zdCkge1xuXHRcdFx0XHRcdHByZXZSZW5kZXJlZENoaWxkcmVuLnB1c2goY2hpbGRJbnN0KTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0XHQvLyBOb3RpZnkgZGV2dG9vbHMgYWJvdXQgdXBkYXRlcyB0byB0aGlzIGNvbXBvbmVudCBhbmQgYW55IG5vbi1jb21wb3NpdGVcblx0XHRcdC8vIGNoaWxkcmVuXG5cdFx0XHRpbnN0YW5jZSA9IHVwZGF0ZVJlYWN0Q29tcG9uZW50KGNvbXBvbmVudCk7XG5cblx0XHRcdFJlY29uY2lsZXIucmVjZWl2ZUNvbXBvbmVudChpbnN0YW5jZSk7XG5cdFx0XHR2aXNpdE5vbkNvbXBvc2l0ZUNoaWxkcmVuKGluc3RhbmNlLCBmdW5jdGlvbiAoY2hpbGRJbnN0KSB7XG5cdFx0XHRcdGlmICghY2hpbGRJbnN0Ll9pbkRldlRvb2xzKSB7XG5cdFx0XHRcdFx0Ly8gTmV3IERPTSBjaGlsZCBjb21wb25lbnRcblx0XHRcdFx0XHRjaGlsZEluc3QuX2luRGV2VG9vbHMgPSB0cnVlO1xuXHRcdFx0XHRcdFJlY29uY2lsZXIubW91bnRDb21wb25lbnQoY2hpbGRJbnN0KTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHQvLyBVcGRhdGVkIERPTSBjaGlsZCBjb21wb25lbnRcblx0XHRcdFx0XHRSZWNvbmNpbGVyLnJlY2VpdmVDb21wb25lbnQoY2hpbGRJbnN0KTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cblx0XHRcdC8vIEZvciBhbnkgbm9uLWNvbXBvc2l0ZSBjaGlsZHJlbiB0aGF0IHdlcmUgcmVtb3ZlZCBieSB0aGUgbGF0ZXN0IHJlbmRlcixcblx0XHRcdC8vIHJlbW92ZSB0aGUgY29ycmVzcG9uZGluZyBSZWFjdERPTUNvbXBvbmVudC1saWtlIGluc3RhbmNlcyBhbmQgbm90aWZ5XG5cdFx0XHQvLyB0aGUgZGV2dG9vbHNcblx0XHRcdHByZXZSZW5kZXJlZENoaWxkcmVuLmZvckVhY2goZnVuY3Rpb24gKGNoaWxkSW5zdCkge1xuXHRcdFx0XHRpZiAoIWRvY3VtZW50LmJvZHkuY29udGFpbnMoY2hpbGRJbnN0Lm5vZGUpKSB7XG5cdFx0XHRcdFx0aW5zdGFuY2VNYXAuZGVsZXRlKGNoaWxkSW5zdC5ub2RlKTtcblx0XHRcdFx0XHRSZWNvbmNpbGVyLnVubW91bnRDb21wb25lbnQoY2hpbGRJbnN0KTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0fTtcblxuXHRcdC8qKiBOb3RpZnkgZGV2dG9vbHMgdGhhdCBhIGNvbXBvbmVudCBoYXMgYmVlbiB1bm1vdW50ZWQgZnJvbSB0aGUgRE9NLiAqL1xuXHRcdHZhciBjb21wb25lbnRSZW1vdmVkID0gZnVuY3Rpb24gY29tcG9uZW50UmVtb3ZlZChjb21wb25lbnQpIHtcblx0XHRcdHZhciBpbnN0YW5jZSA9IHVwZGF0ZVJlYWN0Q29tcG9uZW50KGNvbXBvbmVudCk7XG5cdFx0XHR2aXNpdE5vbkNvbXBvc2l0ZUNoaWxkcmVuKGZ1bmN0aW9uIChjaGlsZEluc3QpIHtcblx0XHRcdFx0aW5zdGFuY2VNYXAuZGVsZXRlKGNoaWxkSW5zdC5ub2RlKTtcblx0XHRcdFx0UmVjb25jaWxlci51bm1vdW50Q29tcG9uZW50KGNoaWxkSW5zdCk7XG5cdFx0XHR9KTtcblx0XHRcdFJlY29uY2lsZXIudW5tb3VudENvbXBvbmVudChpbnN0YW5jZSk7XG5cdFx0XHRpbnN0YW5jZU1hcC5kZWxldGUoY29tcG9uZW50KTtcblx0XHRcdGlmIChpbnN0YW5jZS5fcm9vdElEKSB7XG5cdFx0XHRcdGRlbGV0ZSByb290c1tpbnN0YW5jZS5fcm9vdElEXTtcblx0XHRcdH1cblx0XHR9O1xuXG5cdFx0cmV0dXJuIHtcblx0XHRcdGNvbXBvbmVudEFkZGVkOiBjb21wb25lbnRBZGRlZCxcblx0XHRcdGNvbXBvbmVudFVwZGF0ZWQ6IGNvbXBvbmVudFVwZGF0ZWQsXG5cdFx0XHRjb21wb25lbnRSZW1vdmVkOiBjb21wb25lbnRSZW1vdmVkLFxuXG5cdFx0XHQvLyBJbnRlcmZhY2VzIHBhc3NlZCB0byBkZXZ0b29scyB2aWEgX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fLmluamVjdCgpXG5cdFx0XHRDb21wb25lbnRUcmVlOiBDb21wb25lbnRUcmVlLFxuXHRcdFx0TW91bnQ6IE1vdW50LFxuXHRcdFx0UmVjb25jaWxlcjogUmVjb25jaWxlclxuXHRcdH07XG5cdH1cblxuXHQvKipcblx0ICogUmV0dXJuIGB0cnVlYCBpZiBhIHByZWFjdCBjb21wb25lbnQgaXMgYSB0b3AgbGV2ZWwgY29tcG9uZW50IHJlbmRlcmVkIGJ5XG5cdCAqIGByZW5kZXIoKWAgaW50byBhIGNvbnRhaW5lciBFbGVtZW50LlxuXHQgKi9cblx0ZnVuY3Rpb24gaXNSb290Q29tcG9uZW50KGNvbXBvbmVudCkge1xuXHRcdC8vIGBfcGFyZW50Q29tcG9uZW50YCBpcyBhY3R1YWxseSBgX191YCBhZnRlciBtaW5pZmljYXRpb25cblx0XHRpZiAoY29tcG9uZW50Ll9wYXJlbnRDb21wb25lbnQgfHwgY29tcG9uZW50Ll9fdSkge1xuXHRcdFx0Ly8gQ29tcG9uZW50IHdpdGggYSBjb21wb3NpdGUgcGFyZW50XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHRcdGlmIChjb21wb25lbnQuYmFzZS5wYXJlbnRFbGVtZW50ICYmIGNvbXBvbmVudC5iYXNlLnBhcmVudEVsZW1lbnRbQVRUUl9LRVldKSB7XG5cdFx0XHQvLyBDb21wb25lbnQgd2l0aCBhIHBhcmVudCBET00gZWxlbWVudCByZW5kZXJlZCBieSBQcmVhY3Rcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cblxuXHQvKipcblx0ICogVmlzaXQgYWxsIGNoaWxkIGluc3RhbmNlcyBvZiBhIFJlYWN0Q29tcG9zaXRlQ29tcG9uZW50LWxpa2Ugb2JqZWN0IHRoYXQgYXJlXG5cdCAqIG5vdCBjb21wb3NpdGUgY29tcG9uZW50cyAoaWUuIHRoZXkgcmVwcmVzZW50IERPTSBlbGVtZW50cyBvciB0ZXh0KVxuXHQgKlxuXHQgKiBAcGFyYW0ge0NvbXBvbmVudH0gY29tcG9uZW50XG5cdCAqIEBwYXJhbSB7KENvbXBvbmVudCkgPT4gdm9pZH0gdmlzaXRvclxuXHQgKi9cblx0ZnVuY3Rpb24gdmlzaXROb25Db21wb3NpdGVDaGlsZHJlbihjb21wb25lbnQsIHZpc2l0b3IpIHtcblx0XHRpZiAoIWNvbXBvbmVudCkgcmV0dXJuO1xuXHRcdGlmIChjb21wb25lbnQuX3JlbmRlcmVkQ29tcG9uZW50KSB7XG5cdFx0XHRpZiAoIWNvbXBvbmVudC5fcmVuZGVyZWRDb21wb25lbnQuX2NvbXBvbmVudCkge1xuXHRcdFx0XHR2aXNpdG9yKGNvbXBvbmVudC5fcmVuZGVyZWRDb21wb25lbnQpO1xuXHRcdFx0XHR2aXNpdE5vbkNvbXBvc2l0ZUNoaWxkcmVuKGNvbXBvbmVudC5fcmVuZGVyZWRDb21wb25lbnQsIHZpc2l0b3IpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSBpZiAoY29tcG9uZW50Ll9yZW5kZXJlZENoaWxkcmVuKSB7XG5cdFx0XHRjb21wb25lbnQuX3JlbmRlcmVkQ2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbiAoY2hpbGQpIHtcblx0XHRcdFx0dmlzaXRvcihjaGlsZCk7XG5cdFx0XHRcdGlmICghY2hpbGQuX2NvbXBvbmVudCkgdmlzaXROb25Db21wb3NpdGVDaGlsZHJlbihjaGlsZCwgdmlzaXRvcik7XG5cdFx0XHR9KTtcblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICogQ3JlYXRlIGEgYnJpZGdlIGJldHdlZW4gdGhlIHByZWFjdCBjb21wb25lbnQgdHJlZSBhbmQgUmVhY3QncyBkZXYgdG9vbHNcblx0ICogYW5kIHJlZ2lzdGVyIGl0LlxuXHQgKlxuXHQgKiBBZnRlciB0aGlzIGZ1bmN0aW9uIGlzIGNhbGxlZCwgdGhlIFJlYWN0IERldiBUb29scyBzaG91bGQgYmUgYWJsZSB0byBkZXRlY3Rcblx0ICogXCJSZWFjdFwiIG9uIHRoZSBwYWdlIGFuZCBzaG93IHRoZSBjb21wb25lbnQgdHJlZS5cblx0ICpcblx0ICogVGhpcyBmdW5jdGlvbiBob29rcyBpbnRvIHByZWFjdCBWTm9kZSBjcmVhdGlvbiBpbiBvcmRlciB0byBleHBvc2UgZnVuY3Rpb25hbFxuXHQgKiBjb21wb25lbnRzIGNvcnJlY3RseSwgc28gaXQgc2hvdWxkIGJlIGNhbGxlZCBiZWZvcmUgdGhlIHJvb3QgY29tcG9uZW50KHMpXG5cdCAqIGFyZSByZW5kZXJlZC5cblx0ICpcblx0ICogUmV0dXJucyBhIGNsZWFudXAgZnVuY3Rpb24gd2hpY2ggdW5yZWdpc3RlcnMgdGhlIGhvb2tzLlxuXHQgKi9cblx0ZnVuY3Rpb24gaW5pdERldlRvb2xzKCkge1xuXHRcdGlmICh0eXBlb2YgX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fID09PSAndW5kZWZpbmVkJykge1xuXHRcdFx0Ly8gUmVhY3QgRGV2VG9vbHMgYXJlIG5vdCBpbnN0YWxsZWRcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHQvLyBOb3RpZnkgZGV2dG9vbHMgd2hlbiBwcmVhY3QgY29tcG9uZW50cyBhcmUgbW91bnRlZCwgdXBkYXRlZCBvciB1bm1vdW50ZWRcblx0XHR2YXIgYnJpZGdlID0gY3JlYXRlRGV2VG9vbHNCcmlkZ2UoKTtcblxuXHRcdHZhciBuZXh0QWZ0ZXJNb3VudCA9IHByZWFjdC5vcHRpb25zLmFmdGVyTW91bnQ7XG5cdFx0cHJlYWN0Lm9wdGlvbnMuYWZ0ZXJNb3VudCA9IGZ1bmN0aW9uIChjb21wb25lbnQpIHtcblx0XHRcdGJyaWRnZS5jb21wb25lbnRBZGRlZChjb21wb25lbnQpO1xuXHRcdFx0aWYgKG5leHRBZnRlck1vdW50KSBuZXh0QWZ0ZXJNb3VudChjb21wb25lbnQpO1xuXHRcdH07XG5cblx0XHR2YXIgbmV4dEFmdGVyVXBkYXRlID0gcHJlYWN0Lm9wdGlvbnMuYWZ0ZXJVcGRhdGU7XG5cdFx0cHJlYWN0Lm9wdGlvbnMuYWZ0ZXJVcGRhdGUgPSBmdW5jdGlvbiAoY29tcG9uZW50KSB7XG5cdFx0XHRicmlkZ2UuY29tcG9uZW50VXBkYXRlZChjb21wb25lbnQpO1xuXHRcdFx0aWYgKG5leHRBZnRlclVwZGF0ZSkgbmV4dEFmdGVyVXBkYXRlKGNvbXBvbmVudCk7XG5cdFx0fTtcblxuXHRcdHZhciBuZXh0QmVmb3JlVW5tb3VudCA9IHByZWFjdC5vcHRpb25zLmJlZm9yZVVubW91bnQ7XG5cdFx0cHJlYWN0Lm9wdGlvbnMuYmVmb3JlVW5tb3VudCA9IGZ1bmN0aW9uIChjb21wb25lbnQpIHtcblx0XHRcdGJyaWRnZS5jb21wb25lbnRSZW1vdmVkKGNvbXBvbmVudCk7XG5cdFx0XHRpZiAobmV4dEJlZm9yZVVubW91bnQpIG5leHRCZWZvcmVVbm1vdW50KGNvbXBvbmVudCk7XG5cdFx0fTtcblxuXHRcdC8vIE5vdGlmeSBkZXZ0b29scyBhYm91dCB0aGlzIGluc3RhbmNlIG9mIFwiUmVhY3RcIlxuXHRcdF9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXy5pbmplY3QoYnJpZGdlKTtcblxuXHRcdHJldHVybiBmdW5jdGlvbiAoKSB7XG5cdFx0XHRwcmVhY3Qub3B0aW9ucy5hZnRlck1vdW50ID0gbmV4dEFmdGVyTW91bnQ7XG5cdFx0XHRwcmVhY3Qub3B0aW9ucy5hZnRlclVwZGF0ZSA9IG5leHRBZnRlclVwZGF0ZTtcblx0XHRcdHByZWFjdC5vcHRpb25zLmJlZm9yZVVubW91bnQgPSBuZXh0QmVmb3JlVW5tb3VudDtcblx0XHR9O1xuXHR9XG5cblx0aW5pdERldlRvb2xzKCk7XG5cbn0pKSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kZXZ0b29scy5qcy5tYXBcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9wcmVhY3QvZGV2dG9vbHMuanNcbi8vIG1vZHVsZSBpZCA9IC4uL25vZGVfbW9kdWxlcy9wcmVhY3QvZGV2dG9vbHMuanNcbi8vIG1vZHVsZSBjaHVua3MgPSBtYWluIiwiLyoqIFZpcnR1YWwgRE9NIE5vZGUgKi9cbmZ1bmN0aW9uIFZOb2RlKCkge31cblxuLyoqIEdsb2JhbCBvcHRpb25zXG4gKlx0QHB1YmxpY1xuICpcdEBuYW1lc3BhY2Ugb3B0aW9ucyB7T2JqZWN0fVxuICovXG52YXIgb3B0aW9ucyA9IHtcblxuXHQvKiogSWYgYHRydWVgLCBgcHJvcGAgY2hhbmdlcyB0cmlnZ2VyIHN5bmNocm9ub3VzIGNvbXBvbmVudCB1cGRhdGVzLlxuICAqXHRAbmFtZSBzeW5jQ29tcG9uZW50VXBkYXRlc1xuICAqXHRAdHlwZSBCb29sZWFuXG4gICpcdEBkZWZhdWx0IHRydWVcbiAgKi9cblx0Ly9zeW5jQ29tcG9uZW50VXBkYXRlczogdHJ1ZSxcblxuXHQvKiogUHJvY2Vzc2VzIGFsbCBjcmVhdGVkIFZOb2Rlcy5cbiAgKlx0QHBhcmFtIHtWTm9kZX0gdm5vZGVcdEEgbmV3bHktY3JlYXRlZCBWTm9kZSB0byBub3JtYWxpemUvcHJvY2Vzc1xuICAqL1xuXHQvL3Zub2RlKHZub2RlKSB7IH1cblxuXHQvKiogSG9vayBpbnZva2VkIGFmdGVyIGEgY29tcG9uZW50IGlzIG1vdW50ZWQuICovXG5cdC8vIGFmdGVyTW91bnQoY29tcG9uZW50KSB7IH1cblxuXHQvKiogSG9vayBpbnZva2VkIGFmdGVyIHRoZSBET00gaXMgdXBkYXRlZCB3aXRoIGEgY29tcG9uZW50J3MgbGF0ZXN0IHJlbmRlci4gKi9cblx0Ly8gYWZ0ZXJVcGRhdGUoY29tcG9uZW50KSB7IH1cblxuXHQvKiogSG9vayBpbnZva2VkIGltbWVkaWF0ZWx5IGJlZm9yZSBhIGNvbXBvbmVudCBpcyB1bm1vdW50ZWQuICovXG5cdC8vIGJlZm9yZVVubW91bnQoY29tcG9uZW50KSB7IH1cbn07XG5cbnZhciBzdGFjayA9IFtdO1xuXG52YXIgRU1QVFlfQ0hJTERSRU4gPSBbXTtcblxuLyoqXG4gKiBKU1gvaHlwZXJzY3JpcHQgcmV2aXZlci5cbiAqIEBzZWUgaHR0cDovL2phc29uZm9ybWF0LmNvbS93dGYtaXMtanN4XG4gKiBCZW5jaG1hcmtzOiBodHRwczovL2VzYmVuY2guY29tL2JlbmNoLzU3ZWU4ZjhlMzMwYWIwOTkwMGExYTFhMFxuICpcbiAqIE5vdGU6IHRoaXMgaXMgZXhwb3J0ZWQgYXMgYm90aCBgaCgpYCBhbmQgYGNyZWF0ZUVsZW1lbnQoKWAgZm9yIGNvbXBhdGliaWxpdHkgcmVhc29ucy5cbiAqXG4gKiBDcmVhdGVzIGEgVk5vZGUgKHZpcnR1YWwgRE9NIGVsZW1lbnQpLiBBIHRyZWUgb2YgVk5vZGVzIGNhbiBiZSB1c2VkIGFzIGEgbGlnaHR3ZWlnaHQgcmVwcmVzZW50YXRpb25cbiAqIG9mIHRoZSBzdHJ1Y3R1cmUgb2YgYSBET00gdHJlZS4gVGhpcyBzdHJ1Y3R1cmUgY2FuIGJlIHJlYWxpemVkIGJ5IHJlY3Vyc2l2ZWx5IGNvbXBhcmluZyBpdCBhZ2FpbnN0XG4gKiB0aGUgY3VycmVudCBfYWN0dWFsXyBET00gc3RydWN0dXJlLCBhbmQgYXBwbHlpbmcgb25seSB0aGUgZGlmZmVyZW5jZXMuXG4gKlxuICogYGgoKWAvYGNyZWF0ZUVsZW1lbnQoKWAgYWNjZXB0cyBhbiBlbGVtZW50IG5hbWUsIGEgbGlzdCBvZiBhdHRyaWJ1dGVzL3Byb3BzLFxuICogYW5kIG9wdGlvbmFsbHkgY2hpbGRyZW4gdG8gYXBwZW5kIHRvIHRoZSBlbGVtZW50LlxuICpcbiAqIEBleGFtcGxlIFRoZSBmb2xsb3dpbmcgRE9NIHRyZWVcbiAqXG4gKiBgPGRpdiBpZD1cImZvb1wiIG5hbWU9XCJiYXJcIj5IZWxsbyE8L2Rpdj5gXG4gKlxuICogY2FuIGJlIGNvbnN0cnVjdGVkIHVzaW5nIHRoaXMgZnVuY3Rpb24gYXM6XG4gKlxuICogYGgoJ2RpdicsIHsgaWQ6ICdmb28nLCBuYW1lIDogJ2JhcicgfSwgJ0hlbGxvIScpO2BcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbm9kZU5hbWVcdEFuIGVsZW1lbnQgbmFtZS4gRXg6IGBkaXZgLCBgYWAsIGBzcGFuYCwgZXRjLlxuICogQHBhcmFtIHtPYmplY3R9IGF0dHJpYnV0ZXNcdEFueSBhdHRyaWJ1dGVzL3Byb3BzIHRvIHNldCBvbiB0aGUgY3JlYXRlZCBlbGVtZW50LlxuICogQHBhcmFtIHJlc3RcdFx0XHRBZGRpdGlvbmFsIGFyZ3VtZW50cyBhcmUgdGFrZW4gdG8gYmUgY2hpbGRyZW4gdG8gYXBwZW5kLiBDYW4gYmUgaW5maW5pdGVseSBuZXN0ZWQgQXJyYXlzLlxuICpcbiAqIEBwdWJsaWNcbiAqL1xuZnVuY3Rpb24gaChub2RlTmFtZSwgYXR0cmlidXRlcykge1xuXHR2YXIgY2hpbGRyZW4gPSBFTVBUWV9DSElMRFJFTixcblx0ICAgIGxhc3RTaW1wbGUsXG5cdCAgICBjaGlsZCxcblx0ICAgIHNpbXBsZSxcblx0ICAgIGk7XG5cdGZvciAoaSA9IGFyZ3VtZW50cy5sZW5ndGg7IGktLSA+IDI7KSB7XG5cdFx0c3RhY2sucHVzaChhcmd1bWVudHNbaV0pO1xuXHR9XG5cdGlmIChhdHRyaWJ1dGVzICYmIGF0dHJpYnV0ZXMuY2hpbGRyZW4gIT0gbnVsbCkge1xuXHRcdGlmICghc3RhY2subGVuZ3RoKSBzdGFjay5wdXNoKGF0dHJpYnV0ZXMuY2hpbGRyZW4pO1xuXHRcdGRlbGV0ZSBhdHRyaWJ1dGVzLmNoaWxkcmVuO1xuXHR9XG5cdHdoaWxlIChzdGFjay5sZW5ndGgpIHtcblx0XHRpZiAoKGNoaWxkID0gc3RhY2sucG9wKCkpICYmIGNoaWxkLnBvcCAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRmb3IgKGkgPSBjaGlsZC5sZW5ndGg7IGktLTspIHtcblx0XHRcdFx0c3RhY2sucHVzaChjaGlsZFtpXSk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdGlmICh0eXBlb2YgY2hpbGQgPT09ICdib29sZWFuJykgY2hpbGQgPSBudWxsO1xuXG5cdFx0XHRpZiAoc2ltcGxlID0gdHlwZW9mIG5vZGVOYW1lICE9PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHRcdGlmIChjaGlsZCA9PSBudWxsKSBjaGlsZCA9ICcnO2Vsc2UgaWYgKHR5cGVvZiBjaGlsZCA9PT0gJ251bWJlcicpIGNoaWxkID0gU3RyaW5nKGNoaWxkKTtlbHNlIGlmICh0eXBlb2YgY2hpbGQgIT09ICdzdHJpbmcnKSBzaW1wbGUgPSBmYWxzZTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKHNpbXBsZSAmJiBsYXN0U2ltcGxlKSB7XG5cdFx0XHRcdGNoaWxkcmVuW2NoaWxkcmVuLmxlbmd0aCAtIDFdICs9IGNoaWxkO1xuXHRcdFx0fSBlbHNlIGlmIChjaGlsZHJlbiA9PT0gRU1QVFlfQ0hJTERSRU4pIHtcblx0XHRcdFx0Y2hpbGRyZW4gPSBbY2hpbGRdO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Y2hpbGRyZW4ucHVzaChjaGlsZCk7XG5cdFx0XHR9XG5cblx0XHRcdGxhc3RTaW1wbGUgPSBzaW1wbGU7XG5cdFx0fVxuXHR9XG5cblx0dmFyIHAgPSBuZXcgVk5vZGUoKTtcblx0cC5ub2RlTmFtZSA9IG5vZGVOYW1lO1xuXHRwLmNoaWxkcmVuID0gY2hpbGRyZW47XG5cdHAuYXR0cmlidXRlcyA9IGF0dHJpYnV0ZXMgPT0gbnVsbCA/IHVuZGVmaW5lZCA6IGF0dHJpYnV0ZXM7XG5cdHAua2V5ID0gYXR0cmlidXRlcyA9PSBudWxsID8gdW5kZWZpbmVkIDogYXR0cmlidXRlcy5rZXk7XG5cblx0Ly8gaWYgYSBcInZub2RlIGhvb2tcIiBpcyBkZWZpbmVkLCBwYXNzIGV2ZXJ5IGNyZWF0ZWQgVk5vZGUgdG8gaXRcblx0aWYgKG9wdGlvbnMudm5vZGUgIT09IHVuZGVmaW5lZCkgb3B0aW9ucy52bm9kZShwKTtcblxuXHRyZXR1cm4gcDtcbn1cblxuLyoqXG4gKiAgQ29weSBhbGwgcHJvcGVydGllcyBmcm9tIGBwcm9wc2Agb250byBgb2JqYC5cbiAqICBAcGFyYW0ge09iamVjdH0gb2JqXHRcdE9iamVjdCBvbnRvIHdoaWNoIHByb3BlcnRpZXMgc2hvdWxkIGJlIGNvcGllZC5cbiAqICBAcGFyYW0ge09iamVjdH0gcHJvcHNcdE9iamVjdCBmcm9tIHdoaWNoIHRvIGNvcHkgcHJvcGVydGllcy5cbiAqICBAcmV0dXJucyBvYmpcbiAqICBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBleHRlbmQob2JqLCBwcm9wcykge1xuICBmb3IgKHZhciBpIGluIHByb3BzKSB7XG4gICAgb2JqW2ldID0gcHJvcHNbaV07XG4gIH1yZXR1cm4gb2JqO1xufVxuXG4vKipcbiAqIENhbGwgYSBmdW5jdGlvbiBhc3luY2hyb25vdXNseSwgYXMgc29vbiBhcyBwb3NzaWJsZS4gTWFrZXNcbiAqIHVzZSBvZiBIVE1MIFByb21pc2UgdG8gc2NoZWR1bGUgdGhlIGNhbGxiYWNrIGlmIGF2YWlsYWJsZSxcbiAqIG90aGVyd2lzZSBmYWxsaW5nIGJhY2sgdG8gYHNldFRpbWVvdXRgIChtYWlubHkgZm9yIElFPDExKS5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICovXG52YXIgZGVmZXIgPSB0eXBlb2YgUHJvbWlzZSA9PSAnZnVuY3Rpb24nID8gUHJvbWlzZS5yZXNvbHZlKCkudGhlbi5iaW5kKFByb21pc2UucmVzb2x2ZSgpKSA6IHNldFRpbWVvdXQ7XG5cbi8qKlxuICogQ2xvbmVzIHRoZSBnaXZlbiBWTm9kZSwgb3B0aW9uYWxseSBhZGRpbmcgYXR0cmlidXRlcy9wcm9wcyBhbmQgcmVwbGFjaW5nIGl0cyBjaGlsZHJlbi5cbiAqIEBwYXJhbSB7Vk5vZGV9IHZub2RlXHRcdFRoZSB2aXJ0dWFsIERPTSBlbGVtZW50IHRvIGNsb25lXG4gKiBAcGFyYW0ge09iamVjdH0gcHJvcHNcdEF0dHJpYnV0ZXMvcHJvcHMgdG8gYWRkIHdoZW4gY2xvbmluZ1xuICogQHBhcmFtIHtWTm9kZX0gcmVzdFx0XHRBbnkgYWRkaXRpb25hbCBhcmd1bWVudHMgd2lsbCBiZSB1c2VkIGFzIHJlcGxhY2VtZW50IGNoaWxkcmVuLlxuICovXG5mdW5jdGlvbiBjbG9uZUVsZW1lbnQodm5vZGUsIHByb3BzKSB7XG4gIHJldHVybiBoKHZub2RlLm5vZGVOYW1lLCBleHRlbmQoZXh0ZW5kKHt9LCB2bm9kZS5hdHRyaWJ1dGVzKSwgcHJvcHMpLCBhcmd1bWVudHMubGVuZ3RoID4gMiA/IFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAyKSA6IHZub2RlLmNoaWxkcmVuKTtcbn1cblxuLy8gRE9NIHByb3BlcnRpZXMgdGhhdCBzaG91bGQgTk9UIGhhdmUgXCJweFwiIGFkZGVkIHdoZW4gbnVtZXJpY1xudmFyIElTX05PTl9ESU1FTlNJT05BTCA9IC9hY2l0fGV4KD86c3xnfG58cHwkKXxycGh8b3dzfG1uY3xudHd8aW5lW2NoXXx6b298Xm9yZC9pO1xuXG4vKiogTWFuYWdlZCBxdWV1ZSBvZiBkaXJ0eSBjb21wb25lbnRzIHRvIGJlIHJlLXJlbmRlcmVkICovXG5cbnZhciBpdGVtcyA9IFtdO1xuXG5mdW5jdGlvbiBlbnF1ZXVlUmVuZGVyKGNvbXBvbmVudCkge1xuXHRpZiAoIWNvbXBvbmVudC5fZGlydHkgJiYgKGNvbXBvbmVudC5fZGlydHkgPSB0cnVlKSAmJiBpdGVtcy5wdXNoKGNvbXBvbmVudCkgPT0gMSkge1xuXHRcdChvcHRpb25zLmRlYm91bmNlUmVuZGVyaW5nIHx8IGRlZmVyKShyZXJlbmRlcik7XG5cdH1cbn1cblxuZnVuY3Rpb24gcmVyZW5kZXIoKSB7XG5cdHZhciBwLFxuXHQgICAgbGlzdCA9IGl0ZW1zO1xuXHRpdGVtcyA9IFtdO1xuXHR3aGlsZSAocCA9IGxpc3QucG9wKCkpIHtcblx0XHRpZiAocC5fZGlydHkpIHJlbmRlckNvbXBvbmVudChwKTtcblx0fVxufVxuXG4vKipcbiAqIENoZWNrIGlmIHR3byBub2RlcyBhcmUgZXF1aXZhbGVudC5cbiAqXG4gKiBAcGFyYW0ge05vZGV9IG5vZGVcdFx0XHRET00gTm9kZSB0byBjb21wYXJlXG4gKiBAcGFyYW0ge1ZOb2RlfSB2bm9kZVx0XHRcdFZpcnR1YWwgRE9NIG5vZGUgdG8gY29tcGFyZVxuICogQHBhcmFtIHtib29sZWFufSBbaHlkcmF0aW5nPWZhbHNlXVx0SWYgdHJ1ZSwgaWdub3JlcyBjb21wb25lbnQgY29uc3RydWN0b3JzIHdoZW4gY29tcGFyaW5nLlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gaXNTYW1lTm9kZVR5cGUobm9kZSwgdm5vZGUsIGh5ZHJhdGluZykge1xuICBpZiAodHlwZW9mIHZub2RlID09PSAnc3RyaW5nJyB8fCB0eXBlb2Ygdm5vZGUgPT09ICdudW1iZXInKSB7XG4gICAgcmV0dXJuIG5vZGUuc3BsaXRUZXh0ICE9PSB1bmRlZmluZWQ7XG4gIH1cbiAgaWYgKHR5cGVvZiB2bm9kZS5ub2RlTmFtZSA9PT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gIW5vZGUuX2NvbXBvbmVudENvbnN0cnVjdG9yICYmIGlzTmFtZWROb2RlKG5vZGUsIHZub2RlLm5vZGVOYW1lKTtcbiAgfVxuICByZXR1cm4gaHlkcmF0aW5nIHx8IG5vZGUuX2NvbXBvbmVudENvbnN0cnVjdG9yID09PSB2bm9kZS5ub2RlTmFtZTtcbn1cblxuLyoqXG4gKiBDaGVjayBpZiBhbiBFbGVtZW50IGhhcyBhIGdpdmVuIG5vZGVOYW1lLCBjYXNlLWluc2Vuc2l0aXZlbHkuXG4gKlxuICogQHBhcmFtIHtFbGVtZW50fSBub2RlXHRBIERPTSBFbGVtZW50IHRvIGluc3BlY3QgdGhlIG5hbWUgb2YuXG4gKiBAcGFyYW0ge1N0cmluZ30gbm9kZU5hbWVcdFVubm9ybWFsaXplZCBuYW1lIHRvIGNvbXBhcmUgYWdhaW5zdC5cbiAqL1xuZnVuY3Rpb24gaXNOYW1lZE5vZGUobm9kZSwgbm9kZU5hbWUpIHtcbiAgcmV0dXJuIG5vZGUubm9ybWFsaXplZE5vZGVOYW1lID09PSBub2RlTmFtZSB8fCBub2RlLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkgPT09IG5vZGVOYW1lLnRvTG93ZXJDYXNlKCk7XG59XG5cbi8qKlxuICogUmVjb25zdHJ1Y3QgQ29tcG9uZW50LXN0eWxlIGBwcm9wc2AgZnJvbSBhIFZOb2RlLlxuICogRW5zdXJlcyBkZWZhdWx0L2ZhbGxiYWNrIHZhbHVlcyBmcm9tIGBkZWZhdWx0UHJvcHNgOlxuICogT3duLXByb3BlcnRpZXMgb2YgYGRlZmF1bHRQcm9wc2Agbm90IHByZXNlbnQgaW4gYHZub2RlLmF0dHJpYnV0ZXNgIGFyZSBhZGRlZC5cbiAqXG4gKiBAcGFyYW0ge1ZOb2RlfSB2bm9kZVxuICogQHJldHVybnMge09iamVjdH0gcHJvcHNcbiAqL1xuZnVuY3Rpb24gZ2V0Tm9kZVByb3BzKHZub2RlKSB7XG4gIHZhciBwcm9wcyA9IGV4dGVuZCh7fSwgdm5vZGUuYXR0cmlidXRlcyk7XG4gIHByb3BzLmNoaWxkcmVuID0gdm5vZGUuY2hpbGRyZW47XG5cbiAgdmFyIGRlZmF1bHRQcm9wcyA9IHZub2RlLm5vZGVOYW1lLmRlZmF1bHRQcm9wcztcbiAgaWYgKGRlZmF1bHRQcm9wcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgZm9yICh2YXIgaSBpbiBkZWZhdWx0UHJvcHMpIHtcbiAgICAgIGlmIChwcm9wc1tpXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHByb3BzW2ldID0gZGVmYXVsdFByb3BzW2ldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBwcm9wcztcbn1cblxuLyoqIENyZWF0ZSBhbiBlbGVtZW50IHdpdGggdGhlIGdpdmVuIG5vZGVOYW1lLlxuICpcdEBwYXJhbSB7U3RyaW5nfSBub2RlTmFtZVxuICpcdEBwYXJhbSB7Qm9vbGVhbn0gW2lzU3ZnPWZhbHNlXVx0SWYgYHRydWVgLCBjcmVhdGVzIGFuIGVsZW1lbnQgd2l0aGluIHRoZSBTVkcgbmFtZXNwYWNlLlxuICpcdEByZXR1cm5zIHtFbGVtZW50fSBub2RlXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZU5vZGUobm9kZU5hbWUsIGlzU3ZnKSB7XG5cdHZhciBub2RlID0gaXNTdmcgPyBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJywgbm9kZU5hbWUpIDogZG9jdW1lbnQuY3JlYXRlRWxlbWVudChub2RlTmFtZSk7XG5cdG5vZGUubm9ybWFsaXplZE5vZGVOYW1lID0gbm9kZU5hbWU7XG5cdHJldHVybiBub2RlO1xufVxuXG4vKiogUmVtb3ZlIGEgY2hpbGQgbm9kZSBmcm9tIGl0cyBwYXJlbnQgaWYgYXR0YWNoZWQuXG4gKlx0QHBhcmFtIHtFbGVtZW50fSBub2RlXHRcdFRoZSBub2RlIHRvIHJlbW92ZVxuICovXG5mdW5jdGlvbiByZW1vdmVOb2RlKG5vZGUpIHtcblx0dmFyIHBhcmVudE5vZGUgPSBub2RlLnBhcmVudE5vZGU7XG5cdGlmIChwYXJlbnROb2RlKSBwYXJlbnROb2RlLnJlbW92ZUNoaWxkKG5vZGUpO1xufVxuXG4vKiogU2V0IGEgbmFtZWQgYXR0cmlidXRlIG9uIHRoZSBnaXZlbiBOb2RlLCB3aXRoIHNwZWNpYWwgYmVoYXZpb3IgZm9yIHNvbWUgbmFtZXMgYW5kIGV2ZW50IGhhbmRsZXJzLlxuICpcdElmIGB2YWx1ZWAgaXMgYG51bGxgLCB0aGUgYXR0cmlidXRlL2hhbmRsZXIgd2lsbCBiZSByZW1vdmVkLlxuICpcdEBwYXJhbSB7RWxlbWVudH0gbm9kZVx0QW4gZWxlbWVudCB0byBtdXRhdGVcbiAqXHRAcGFyYW0ge3N0cmluZ30gbmFtZVx0VGhlIG5hbWUva2V5IHRvIHNldCwgc3VjaCBhcyBhbiBldmVudCBvciBhdHRyaWJ1dGUgbmFtZVxuICpcdEBwYXJhbSB7YW55fSBvbGRcdFRoZSBsYXN0IHZhbHVlIHRoYXQgd2FzIHNldCBmb3IgdGhpcyBuYW1lL25vZGUgcGFpclxuICpcdEBwYXJhbSB7YW55fSB2YWx1ZVx0QW4gYXR0cmlidXRlIHZhbHVlLCBzdWNoIGFzIGEgZnVuY3Rpb24gdG8gYmUgdXNlZCBhcyBhbiBldmVudCBoYW5kbGVyXG4gKlx0QHBhcmFtIHtCb29sZWFufSBpc1N2Z1x0QXJlIHdlIGN1cnJlbnRseSBkaWZmaW5nIGluc2lkZSBhbiBzdmc/XG4gKlx0QHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gc2V0QWNjZXNzb3Iobm9kZSwgbmFtZSwgb2xkLCB2YWx1ZSwgaXNTdmcpIHtcblx0aWYgKG5hbWUgPT09ICdjbGFzc05hbWUnKSBuYW1lID0gJ2NsYXNzJztcblxuXHRpZiAobmFtZSA9PT0gJ2tleScpIHtcblx0XHQvLyBpZ25vcmVcblx0fSBlbHNlIGlmIChuYW1lID09PSAncmVmJykge1xuXHRcdGlmIChvbGQpIG9sZChudWxsKTtcblx0XHRpZiAodmFsdWUpIHZhbHVlKG5vZGUpO1xuXHR9IGVsc2UgaWYgKG5hbWUgPT09ICdjbGFzcycgJiYgIWlzU3ZnKSB7XG5cdFx0bm9kZS5jbGFzc05hbWUgPSB2YWx1ZSB8fCAnJztcblx0fSBlbHNlIGlmIChuYW1lID09PSAnc3R5bGUnKSB7XG5cdFx0aWYgKCF2YWx1ZSB8fCB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnIHx8IHR5cGVvZiBvbGQgPT09ICdzdHJpbmcnKSB7XG5cdFx0XHRub2RlLnN0eWxlLmNzc1RleHQgPSB2YWx1ZSB8fCAnJztcblx0XHR9XG5cdFx0aWYgKHZhbHVlICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcpIHtcblx0XHRcdGlmICh0eXBlb2Ygb2xkICE9PSAnc3RyaW5nJykge1xuXHRcdFx0XHRmb3IgKHZhciBpIGluIG9sZCkge1xuXHRcdFx0XHRcdGlmICghKGkgaW4gdmFsdWUpKSBub2RlLnN0eWxlW2ldID0gJyc7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGZvciAodmFyIGkgaW4gdmFsdWUpIHtcblx0XHRcdFx0bm9kZS5zdHlsZVtpXSA9IHR5cGVvZiB2YWx1ZVtpXSA9PT0gJ251bWJlcicgJiYgSVNfTk9OX0RJTUVOU0lPTkFMLnRlc3QoaSkgPT09IGZhbHNlID8gdmFsdWVbaV0gKyAncHgnIDogdmFsdWVbaV07XG5cdFx0XHR9XG5cdFx0fVxuXHR9IGVsc2UgaWYgKG5hbWUgPT09ICdkYW5nZXJvdXNseVNldElubmVySFRNTCcpIHtcblx0XHRpZiAodmFsdWUpIG5vZGUuaW5uZXJIVE1MID0gdmFsdWUuX19odG1sIHx8ICcnO1xuXHR9IGVsc2UgaWYgKG5hbWVbMF0gPT0gJ28nICYmIG5hbWVbMV0gPT0gJ24nKSB7XG5cdFx0dmFyIHVzZUNhcHR1cmUgPSBuYW1lICE9PSAobmFtZSA9IG5hbWUucmVwbGFjZSgvQ2FwdHVyZSQvLCAnJykpO1xuXHRcdG5hbWUgPSBuYW1lLnRvTG93ZXJDYXNlKCkuc3Vic3RyaW5nKDIpO1xuXHRcdGlmICh2YWx1ZSkge1xuXHRcdFx0aWYgKCFvbGQpIG5vZGUuYWRkRXZlbnRMaXN0ZW5lcihuYW1lLCBldmVudFByb3h5LCB1c2VDYXB0dXJlKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0bm9kZS5yZW1vdmVFdmVudExpc3RlbmVyKG5hbWUsIGV2ZW50UHJveHksIHVzZUNhcHR1cmUpO1xuXHRcdH1cblx0XHQobm9kZS5fbGlzdGVuZXJzIHx8IChub2RlLl9saXN0ZW5lcnMgPSB7fSkpW25hbWVdID0gdmFsdWU7XG5cdH0gZWxzZSBpZiAobmFtZSAhPT0gJ2xpc3QnICYmIG5hbWUgIT09ICd0eXBlJyAmJiAhaXNTdmcgJiYgbmFtZSBpbiBub2RlKSB7XG5cdFx0c2V0UHJvcGVydHkobm9kZSwgbmFtZSwgdmFsdWUgPT0gbnVsbCA/ICcnIDogdmFsdWUpO1xuXHRcdGlmICh2YWx1ZSA9PSBudWxsIHx8IHZhbHVlID09PSBmYWxzZSkgbm9kZS5yZW1vdmVBdHRyaWJ1dGUobmFtZSk7XG5cdH0gZWxzZSB7XG5cdFx0dmFyIG5zID0gaXNTdmcgJiYgbmFtZSAhPT0gKG5hbWUgPSBuYW1lLnJlcGxhY2UoL154bGluazo/LywgJycpKTtcblx0XHRpZiAodmFsdWUgPT0gbnVsbCB8fCB2YWx1ZSA9PT0gZmFsc2UpIHtcblx0XHRcdGlmIChucykgbm9kZS5yZW1vdmVBdHRyaWJ1dGVOUygnaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluaycsIG5hbWUudG9Mb3dlckNhc2UoKSk7ZWxzZSBub2RlLnJlbW92ZUF0dHJpYnV0ZShuYW1lKTtcblx0XHR9IGVsc2UgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0aWYgKG5zKSBub2RlLnNldEF0dHJpYnV0ZU5TKCdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJywgbmFtZS50b0xvd2VyQ2FzZSgpLCB2YWx1ZSk7ZWxzZSBub2RlLnNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSk7XG5cdFx0fVxuXHR9XG59XG5cbi8qKiBBdHRlbXB0IHRvIHNldCBhIERPTSBwcm9wZXJ0eSB0byB0aGUgZ2l2ZW4gdmFsdWUuXG4gKlx0SUUgJiBGRiB0aHJvdyBmb3IgY2VydGFpbiBwcm9wZXJ0eS12YWx1ZSBjb21iaW5hdGlvbnMuXG4gKi9cbmZ1bmN0aW9uIHNldFByb3BlcnR5KG5vZGUsIG5hbWUsIHZhbHVlKSB7XG5cdHRyeSB7XG5cdFx0bm9kZVtuYW1lXSA9IHZhbHVlO1xuXHR9IGNhdGNoIChlKSB7fVxufVxuXG4vKiogUHJveHkgYW4gZXZlbnQgdG8gaG9va2VkIGV2ZW50IGhhbmRsZXJzXG4gKlx0QHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gZXZlbnRQcm94eShlKSB7XG5cdHJldHVybiB0aGlzLl9saXN0ZW5lcnNbZS50eXBlXShvcHRpb25zLmV2ZW50ICYmIG9wdGlvbnMuZXZlbnQoZSkgfHwgZSk7XG59XG5cbi8qKiBRdWV1ZSBvZiBjb21wb25lbnRzIHRoYXQgaGF2ZSBiZWVuIG1vdW50ZWQgYW5kIGFyZSBhd2FpdGluZyBjb21wb25lbnREaWRNb3VudCAqL1xudmFyIG1vdW50cyA9IFtdO1xuXG4vKiogRGlmZiByZWN1cnNpb24gY291bnQsIHVzZWQgdG8gdHJhY2sgdGhlIGVuZCBvZiB0aGUgZGlmZiBjeWNsZS4gKi9cbnZhciBkaWZmTGV2ZWwgPSAwO1xuXG4vKiogR2xvYmFsIGZsYWcgaW5kaWNhdGluZyBpZiB0aGUgZGlmZiBpcyBjdXJyZW50bHkgd2l0aGluIGFuIFNWRyAqL1xudmFyIGlzU3ZnTW9kZSA9IGZhbHNlO1xuXG4vKiogR2xvYmFsIGZsYWcgaW5kaWNhdGluZyBpZiB0aGUgZGlmZiBpcyBwZXJmb3JtaW5nIGh5ZHJhdGlvbiAqL1xudmFyIGh5ZHJhdGluZyA9IGZhbHNlO1xuXG4vKiogSW52b2tlIHF1ZXVlZCBjb21wb25lbnREaWRNb3VudCBsaWZlY3ljbGUgbWV0aG9kcyAqL1xuZnVuY3Rpb24gZmx1c2hNb3VudHMoKSB7XG5cdHZhciBjO1xuXHR3aGlsZSAoYyA9IG1vdW50cy5wb3AoKSkge1xuXHRcdGlmIChvcHRpb25zLmFmdGVyTW91bnQpIG9wdGlvbnMuYWZ0ZXJNb3VudChjKTtcblx0XHRpZiAoYy5jb21wb25lbnREaWRNb3VudCkgYy5jb21wb25lbnREaWRNb3VudCgpO1xuXHR9XG59XG5cbi8qKiBBcHBseSBkaWZmZXJlbmNlcyBpbiBhIGdpdmVuIHZub2RlIChhbmQgaXQncyBkZWVwIGNoaWxkcmVuKSB0byBhIHJlYWwgRE9NIE5vZGUuXG4gKlx0QHBhcmFtIHtFbGVtZW50fSBbZG9tPW51bGxdXHRcdEEgRE9NIG5vZGUgdG8gbXV0YXRlIGludG8gdGhlIHNoYXBlIG9mIHRoZSBgdm5vZGVgXG4gKlx0QHBhcmFtIHtWTm9kZX0gdm5vZGVcdFx0XHRBIFZOb2RlICh3aXRoIGRlc2NlbmRhbnRzIGZvcm1pbmcgYSB0cmVlKSByZXByZXNlbnRpbmcgdGhlIGRlc2lyZWQgRE9NIHN0cnVjdHVyZVxuICpcdEByZXR1cm5zIHtFbGVtZW50fSBkb21cdFx0XHRUaGUgY3JlYXRlZC9tdXRhdGVkIGVsZW1lbnRcbiAqXHRAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBkaWZmKGRvbSwgdm5vZGUsIGNvbnRleHQsIG1vdW50QWxsLCBwYXJlbnQsIGNvbXBvbmVudFJvb3QpIHtcblx0Ly8gZGlmZkxldmVsIGhhdmluZyBiZWVuIDAgaGVyZSBpbmRpY2F0ZXMgaW5pdGlhbCBlbnRyeSBpbnRvIHRoZSBkaWZmIChub3QgYSBzdWJkaWZmKVxuXHRpZiAoIWRpZmZMZXZlbCsrKSB7XG5cdFx0Ly8gd2hlbiBmaXJzdCBzdGFydGluZyB0aGUgZGlmZiwgY2hlY2sgaWYgd2UncmUgZGlmZmluZyBhbiBTVkcgb3Igd2l0aGluIGFuIFNWR1xuXHRcdGlzU3ZnTW9kZSA9IHBhcmVudCAhPSBudWxsICYmIHBhcmVudC5vd25lclNWR0VsZW1lbnQgIT09IHVuZGVmaW5lZDtcblxuXHRcdC8vIGh5ZHJhdGlvbiBpcyBpbmRpY2F0ZWQgYnkgdGhlIGV4aXN0aW5nIGVsZW1lbnQgdG8gYmUgZGlmZmVkIG5vdCBoYXZpbmcgYSBwcm9wIGNhY2hlXG5cdFx0aHlkcmF0aW5nID0gZG9tICE9IG51bGwgJiYgISgnX19wcmVhY3RhdHRyXycgaW4gZG9tKTtcblx0fVxuXG5cdHZhciByZXQgPSBpZGlmZihkb20sIHZub2RlLCBjb250ZXh0LCBtb3VudEFsbCwgY29tcG9uZW50Um9vdCk7XG5cblx0Ly8gYXBwZW5kIHRoZSBlbGVtZW50IGlmIGl0cyBhIG5ldyBwYXJlbnRcblx0aWYgKHBhcmVudCAmJiByZXQucGFyZW50Tm9kZSAhPT0gcGFyZW50KSBwYXJlbnQuYXBwZW5kQ2hpbGQocmV0KTtcblxuXHQvLyBkaWZmTGV2ZWwgYmVpbmcgcmVkdWNlZCB0byAwIG1lYW5zIHdlJ3JlIGV4aXRpbmcgdGhlIGRpZmZcblx0aWYgKCEgLS1kaWZmTGV2ZWwpIHtcblx0XHRoeWRyYXRpbmcgPSBmYWxzZTtcblx0XHQvLyBpbnZva2UgcXVldWVkIGNvbXBvbmVudERpZE1vdW50IGxpZmVjeWNsZSBtZXRob2RzXG5cdFx0aWYgKCFjb21wb25lbnRSb290KSBmbHVzaE1vdW50cygpO1xuXHR9XG5cblx0cmV0dXJuIHJldDtcbn1cblxuLyoqIEludGVybmFscyBvZiBgZGlmZigpYCwgc2VwYXJhdGVkIHRvIGFsbG93IGJ5cGFzc2luZyBkaWZmTGV2ZWwgLyBtb3VudCBmbHVzaGluZy4gKi9cbmZ1bmN0aW9uIGlkaWZmKGRvbSwgdm5vZGUsIGNvbnRleHQsIG1vdW50QWxsLCBjb21wb25lbnRSb290KSB7XG5cdHZhciBvdXQgPSBkb20sXG5cdCAgICBwcmV2U3ZnTW9kZSA9IGlzU3ZnTW9kZTtcblxuXHQvLyBlbXB0eSB2YWx1ZXMgKG51bGwsIHVuZGVmaW5lZCwgYm9vbGVhbnMpIHJlbmRlciBhcyBlbXB0eSBUZXh0IG5vZGVzXG5cdGlmICh2bm9kZSA9PSBudWxsIHx8IHR5cGVvZiB2bm9kZSA9PT0gJ2Jvb2xlYW4nKSB2bm9kZSA9ICcnO1xuXG5cdC8vIEZhc3QgY2FzZTogU3RyaW5ncyAmIE51bWJlcnMgY3JlYXRlL3VwZGF0ZSBUZXh0IG5vZGVzLlxuXHRpZiAodHlwZW9mIHZub2RlID09PSAnc3RyaW5nJyB8fCB0eXBlb2Ygdm5vZGUgPT09ICdudW1iZXInKSB7XG5cblx0XHQvLyB1cGRhdGUgaWYgaXQncyBhbHJlYWR5IGEgVGV4dCBub2RlOlxuXHRcdGlmIChkb20gJiYgZG9tLnNwbGl0VGV4dCAhPT0gdW5kZWZpbmVkICYmIGRvbS5wYXJlbnROb2RlICYmICghZG9tLl9jb21wb25lbnQgfHwgY29tcG9uZW50Um9vdCkpIHtcblx0XHRcdC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqLyAvKiBCcm93c2VyIHF1aXJrIHRoYXQgY2FuJ3QgYmUgY292ZXJlZDogaHR0cHM6Ly9naXRodWIuY29tL2RldmVsb3BpdC9wcmVhY3QvY29tbWl0L2ZkNGYyMWY1YzQ1ZGZkNzUxNTFiZDI3YjRjMjE3ZDgwMDNhYTVlYjkgKi9cblx0XHRcdGlmIChkb20ubm9kZVZhbHVlICE9IHZub2RlKSB7XG5cdFx0XHRcdGRvbS5ub2RlVmFsdWUgPSB2bm9kZTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly8gaXQgd2Fzbid0IGEgVGV4dCBub2RlOiByZXBsYWNlIGl0IHdpdGggb25lIGFuZCByZWN5Y2xlIHRoZSBvbGQgRWxlbWVudFxuXHRcdFx0b3V0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodm5vZGUpO1xuXHRcdFx0aWYgKGRvbSkge1xuXHRcdFx0XHRpZiAoZG9tLnBhcmVudE5vZGUpIGRvbS5wYXJlbnROb2RlLnJlcGxhY2VDaGlsZChvdXQsIGRvbSk7XG5cdFx0XHRcdHJlY29sbGVjdE5vZGVUcmVlKGRvbSwgdHJ1ZSk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0b3V0WydfX3ByZWFjdGF0dHJfJ10gPSB0cnVlO1xuXG5cdFx0cmV0dXJuIG91dDtcblx0fVxuXG5cdC8vIElmIHRoZSBWTm9kZSByZXByZXNlbnRzIGEgQ29tcG9uZW50LCBwZXJmb3JtIGEgY29tcG9uZW50IGRpZmY6XG5cdHZhciB2bm9kZU5hbWUgPSB2bm9kZS5ub2RlTmFtZTtcblx0aWYgKHR5cGVvZiB2bm9kZU5hbWUgPT09ICdmdW5jdGlvbicpIHtcblx0XHRyZXR1cm4gYnVpbGRDb21wb25lbnRGcm9tVk5vZGUoZG9tLCB2bm9kZSwgY29udGV4dCwgbW91bnRBbGwpO1xuXHR9XG5cblx0Ly8gVHJhY2tzIGVudGVyaW5nIGFuZCBleGl0aW5nIFNWRyBuYW1lc3BhY2Ugd2hlbiBkZXNjZW5kaW5nIHRocm91Z2ggdGhlIHRyZWUuXG5cdGlzU3ZnTW9kZSA9IHZub2RlTmFtZSA9PT0gJ3N2ZycgPyB0cnVlIDogdm5vZGVOYW1lID09PSAnZm9yZWlnbk9iamVjdCcgPyBmYWxzZSA6IGlzU3ZnTW9kZTtcblxuXHQvLyBJZiB0aGVyZSdzIG5vIGV4aXN0aW5nIGVsZW1lbnQgb3IgaXQncyB0aGUgd3JvbmcgdHlwZSwgY3JlYXRlIGEgbmV3IG9uZTpcblx0dm5vZGVOYW1lID0gU3RyaW5nKHZub2RlTmFtZSk7XG5cdGlmICghZG9tIHx8ICFpc05hbWVkTm9kZShkb20sIHZub2RlTmFtZSkpIHtcblx0XHRvdXQgPSBjcmVhdGVOb2RlKHZub2RlTmFtZSwgaXNTdmdNb2RlKTtcblxuXHRcdGlmIChkb20pIHtcblx0XHRcdC8vIG1vdmUgY2hpbGRyZW4gaW50byB0aGUgcmVwbGFjZW1lbnQgbm9kZVxuXHRcdFx0d2hpbGUgKGRvbS5maXJzdENoaWxkKSB7XG5cdFx0XHRcdG91dC5hcHBlbmRDaGlsZChkb20uZmlyc3RDaGlsZCk7XG5cdFx0XHR9IC8vIGlmIHRoZSBwcmV2aW91cyBFbGVtZW50IHdhcyBtb3VudGVkIGludG8gdGhlIERPTSwgcmVwbGFjZSBpdCBpbmxpbmVcblx0XHRcdGlmIChkb20ucGFyZW50Tm9kZSkgZG9tLnBhcmVudE5vZGUucmVwbGFjZUNoaWxkKG91dCwgZG9tKTtcblxuXHRcdFx0Ly8gcmVjeWNsZSB0aGUgb2xkIGVsZW1lbnQgKHNraXBzIG5vbi1FbGVtZW50IG5vZGUgdHlwZXMpXG5cdFx0XHRyZWNvbGxlY3ROb2RlVHJlZShkb20sIHRydWUpO1xuXHRcdH1cblx0fVxuXG5cdHZhciBmYyA9IG91dC5maXJzdENoaWxkLFxuXHQgICAgcHJvcHMgPSBvdXRbJ19fcHJlYWN0YXR0cl8nXSxcblx0ICAgIHZjaGlsZHJlbiA9IHZub2RlLmNoaWxkcmVuO1xuXG5cdGlmIChwcm9wcyA9PSBudWxsKSB7XG5cdFx0cHJvcHMgPSBvdXRbJ19fcHJlYWN0YXR0cl8nXSA9IHt9O1xuXHRcdGZvciAodmFyIGEgPSBvdXQuYXR0cmlidXRlcywgaSA9IGEubGVuZ3RoOyBpLS07KSB7XG5cdFx0XHRwcm9wc1thW2ldLm5hbWVdID0gYVtpXS52YWx1ZTtcblx0XHR9XG5cdH1cblxuXHQvLyBPcHRpbWl6YXRpb246IGZhc3QtcGF0aCBmb3IgZWxlbWVudHMgY29udGFpbmluZyBhIHNpbmdsZSBUZXh0Tm9kZTpcblx0aWYgKCFoeWRyYXRpbmcgJiYgdmNoaWxkcmVuICYmIHZjaGlsZHJlbi5sZW5ndGggPT09IDEgJiYgdHlwZW9mIHZjaGlsZHJlblswXSA9PT0gJ3N0cmluZycgJiYgZmMgIT0gbnVsbCAmJiBmYy5zcGxpdFRleHQgIT09IHVuZGVmaW5lZCAmJiBmYy5uZXh0U2libGluZyA9PSBudWxsKSB7XG5cdFx0aWYgKGZjLm5vZGVWYWx1ZSAhPSB2Y2hpbGRyZW5bMF0pIHtcblx0XHRcdGZjLm5vZGVWYWx1ZSA9IHZjaGlsZHJlblswXTtcblx0XHR9XG5cdH1cblx0Ly8gb3RoZXJ3aXNlLCBpZiB0aGVyZSBhcmUgZXhpc3Rpbmcgb3IgbmV3IGNoaWxkcmVuLCBkaWZmIHRoZW06XG5cdGVsc2UgaWYgKHZjaGlsZHJlbiAmJiB2Y2hpbGRyZW4ubGVuZ3RoIHx8IGZjICE9IG51bGwpIHtcblx0XHRcdGlubmVyRGlmZk5vZGUob3V0LCB2Y2hpbGRyZW4sIGNvbnRleHQsIG1vdW50QWxsLCBoeWRyYXRpbmcgfHwgcHJvcHMuZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwgIT0gbnVsbCk7XG5cdFx0fVxuXG5cdC8vIEFwcGx5IGF0dHJpYnV0ZXMvcHJvcHMgZnJvbSBWTm9kZSB0byB0aGUgRE9NIEVsZW1lbnQ6XG5cdGRpZmZBdHRyaWJ1dGVzKG91dCwgdm5vZGUuYXR0cmlidXRlcywgcHJvcHMpO1xuXG5cdC8vIHJlc3RvcmUgcHJldmlvdXMgU1ZHIG1vZGU6IChpbiBjYXNlIHdlJ3JlIGV4aXRpbmcgYW4gU1ZHIG5hbWVzcGFjZSlcblx0aXNTdmdNb2RlID0gcHJldlN2Z01vZGU7XG5cblx0cmV0dXJuIG91dDtcbn1cblxuLyoqIEFwcGx5IGNoaWxkIGFuZCBhdHRyaWJ1dGUgY2hhbmdlcyBiZXR3ZWVuIGEgVk5vZGUgYW5kIGEgRE9NIE5vZGUgdG8gdGhlIERPTS5cbiAqXHRAcGFyYW0ge0VsZW1lbnR9IGRvbVx0XHRcdEVsZW1lbnQgd2hvc2UgY2hpbGRyZW4gc2hvdWxkIGJlIGNvbXBhcmVkICYgbXV0YXRlZFxuICpcdEBwYXJhbSB7QXJyYXl9IHZjaGlsZHJlblx0XHRBcnJheSBvZiBWTm9kZXMgdG8gY29tcGFyZSB0byBgZG9tLmNoaWxkTm9kZXNgXG4gKlx0QHBhcmFtIHtPYmplY3R9IGNvbnRleHRcdFx0XHRJbXBsaWNpdGx5IGRlc2NlbmRhbnQgY29udGV4dCBvYmplY3QgKGZyb20gbW9zdCByZWNlbnQgYGdldENoaWxkQ29udGV4dCgpYClcbiAqXHRAcGFyYW0ge0Jvb2xlYW59IG1vdW50QWxsXG4gKlx0QHBhcmFtIHtCb29sZWFufSBpc0h5ZHJhdGluZ1x0SWYgYHRydWVgLCBjb25zdW1lcyBleHRlcm5hbGx5IGNyZWF0ZWQgZWxlbWVudHMgc2ltaWxhciB0byBoeWRyYXRpb25cbiAqL1xuZnVuY3Rpb24gaW5uZXJEaWZmTm9kZShkb20sIHZjaGlsZHJlbiwgY29udGV4dCwgbW91bnRBbGwsIGlzSHlkcmF0aW5nKSB7XG5cdHZhciBvcmlnaW5hbENoaWxkcmVuID0gZG9tLmNoaWxkTm9kZXMsXG5cdCAgICBjaGlsZHJlbiA9IFtdLFxuXHQgICAga2V5ZWQgPSB7fSxcblx0ICAgIGtleWVkTGVuID0gMCxcblx0ICAgIG1pbiA9IDAsXG5cdCAgICBsZW4gPSBvcmlnaW5hbENoaWxkcmVuLmxlbmd0aCxcblx0ICAgIGNoaWxkcmVuTGVuID0gMCxcblx0ICAgIHZsZW4gPSB2Y2hpbGRyZW4gPyB2Y2hpbGRyZW4ubGVuZ3RoIDogMCxcblx0ICAgIGosXG5cdCAgICBjLFxuXHQgICAgZixcblx0ICAgIHZjaGlsZCxcblx0ICAgIGNoaWxkO1xuXG5cdC8vIEJ1aWxkIHVwIGEgbWFwIG9mIGtleWVkIGNoaWxkcmVuIGFuZCBhbiBBcnJheSBvZiB1bmtleWVkIGNoaWxkcmVuOlxuXHRpZiAobGVuICE9PSAwKSB7XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuXHRcdFx0dmFyIF9jaGlsZCA9IG9yaWdpbmFsQ2hpbGRyZW5baV0sXG5cdFx0XHQgICAgcHJvcHMgPSBfY2hpbGRbJ19fcHJlYWN0YXR0cl8nXSxcblx0XHRcdCAgICBrZXkgPSB2bGVuICYmIHByb3BzID8gX2NoaWxkLl9jb21wb25lbnQgPyBfY2hpbGQuX2NvbXBvbmVudC5fX2tleSA6IHByb3BzLmtleSA6IG51bGw7XG5cdFx0XHRpZiAoa2V5ICE9IG51bGwpIHtcblx0XHRcdFx0a2V5ZWRMZW4rKztcblx0XHRcdFx0a2V5ZWRba2V5XSA9IF9jaGlsZDtcblx0XHRcdH0gZWxzZSBpZiAocHJvcHMgfHwgKF9jaGlsZC5zcGxpdFRleHQgIT09IHVuZGVmaW5lZCA/IGlzSHlkcmF0aW5nID8gX2NoaWxkLm5vZGVWYWx1ZS50cmltKCkgOiB0cnVlIDogaXNIeWRyYXRpbmcpKSB7XG5cdFx0XHRcdGNoaWxkcmVuW2NoaWxkcmVuTGVuKytdID0gX2NoaWxkO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdGlmICh2bGVuICE9PSAwKSB7XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCB2bGVuOyBpKyspIHtcblx0XHRcdHZjaGlsZCA9IHZjaGlsZHJlbltpXTtcblx0XHRcdGNoaWxkID0gbnVsbDtcblxuXHRcdFx0Ly8gYXR0ZW1wdCB0byBmaW5kIGEgbm9kZSBiYXNlZCBvbiBrZXkgbWF0Y2hpbmdcblx0XHRcdHZhciBrZXkgPSB2Y2hpbGQua2V5O1xuXHRcdFx0aWYgKGtleSAhPSBudWxsKSB7XG5cdFx0XHRcdGlmIChrZXllZExlbiAmJiBrZXllZFtrZXldICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0XHRjaGlsZCA9IGtleWVkW2tleV07XG5cdFx0XHRcdFx0a2V5ZWRba2V5XSA9IHVuZGVmaW5lZDtcblx0XHRcdFx0XHRrZXllZExlbi0tO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHQvLyBhdHRlbXB0IHRvIHBsdWNrIGEgbm9kZSBvZiB0aGUgc2FtZSB0eXBlIGZyb20gdGhlIGV4aXN0aW5nIGNoaWxkcmVuXG5cdFx0XHRlbHNlIGlmICghY2hpbGQgJiYgbWluIDwgY2hpbGRyZW5MZW4pIHtcblx0XHRcdFx0XHRmb3IgKGogPSBtaW47IGogPCBjaGlsZHJlbkxlbjsgaisrKSB7XG5cdFx0XHRcdFx0XHRpZiAoY2hpbGRyZW5bal0gIT09IHVuZGVmaW5lZCAmJiBpc1NhbWVOb2RlVHlwZShjID0gY2hpbGRyZW5bal0sIHZjaGlsZCwgaXNIeWRyYXRpbmcpKSB7XG5cdFx0XHRcdFx0XHRcdGNoaWxkID0gYztcblx0XHRcdFx0XHRcdFx0Y2hpbGRyZW5bal0gPSB1bmRlZmluZWQ7XG5cdFx0XHRcdFx0XHRcdGlmIChqID09PSBjaGlsZHJlbkxlbiAtIDEpIGNoaWxkcmVuTGVuLS07XG5cdFx0XHRcdFx0XHRcdGlmIChqID09PSBtaW4pIG1pbisrO1xuXHRcdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0Ly8gbW9ycGggdGhlIG1hdGNoZWQvZm91bmQvY3JlYXRlZCBET00gY2hpbGQgdG8gbWF0Y2ggdmNoaWxkIChkZWVwKVxuXHRcdFx0Y2hpbGQgPSBpZGlmZihjaGlsZCwgdmNoaWxkLCBjb250ZXh0LCBtb3VudEFsbCk7XG5cblx0XHRcdGYgPSBvcmlnaW5hbENoaWxkcmVuW2ldO1xuXHRcdFx0aWYgKGNoaWxkICYmIGNoaWxkICE9PSBkb20gJiYgY2hpbGQgIT09IGYpIHtcblx0XHRcdFx0aWYgKGYgPT0gbnVsbCkge1xuXHRcdFx0XHRcdGRvbS5hcHBlbmRDaGlsZChjaGlsZCk7XG5cdFx0XHRcdH0gZWxzZSBpZiAoY2hpbGQgPT09IGYubmV4dFNpYmxpbmcpIHtcblx0XHRcdFx0XHRyZW1vdmVOb2RlKGYpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGRvbS5pbnNlcnRCZWZvcmUoY2hpbGQsIGYpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0Ly8gcmVtb3ZlIHVudXNlZCBrZXllZCBjaGlsZHJlbjpcblx0aWYgKGtleWVkTGVuKSB7XG5cdFx0Zm9yICh2YXIgaSBpbiBrZXllZCkge1xuXHRcdFx0aWYgKGtleWVkW2ldICE9PSB1bmRlZmluZWQpIHJlY29sbGVjdE5vZGVUcmVlKGtleWVkW2ldLCBmYWxzZSk7XG5cdFx0fVxuXHR9XG5cblx0Ly8gcmVtb3ZlIG9ycGhhbmVkIHVua2V5ZWQgY2hpbGRyZW46XG5cdHdoaWxlIChtaW4gPD0gY2hpbGRyZW5MZW4pIHtcblx0XHRpZiAoKGNoaWxkID0gY2hpbGRyZW5bY2hpbGRyZW5MZW4tLV0pICE9PSB1bmRlZmluZWQpIHJlY29sbGVjdE5vZGVUcmVlKGNoaWxkLCBmYWxzZSk7XG5cdH1cbn1cblxuLyoqIFJlY3Vyc2l2ZWx5IHJlY3ljbGUgKG9yIGp1c3QgdW5tb3VudCkgYSBub2RlIGFuZCBpdHMgZGVzY2VuZGFudHMuXG4gKlx0QHBhcmFtIHtOb2RlfSBub2RlXHRcdFx0XHRcdFx0RE9NIG5vZGUgdG8gc3RhcnQgdW5tb3VudC9yZW1vdmFsIGZyb21cbiAqXHRAcGFyYW0ge0Jvb2xlYW59IFt1bm1vdW50T25seT1mYWxzZV1cdElmIGB0cnVlYCwgb25seSB0cmlnZ2VycyB1bm1vdW50IGxpZmVjeWNsZSwgc2tpcHMgcmVtb3ZhbFxuICovXG5mdW5jdGlvbiByZWNvbGxlY3ROb2RlVHJlZShub2RlLCB1bm1vdW50T25seSkge1xuXHR2YXIgY29tcG9uZW50ID0gbm9kZS5fY29tcG9uZW50O1xuXHRpZiAoY29tcG9uZW50KSB7XG5cdFx0Ly8gaWYgbm9kZSBpcyBvd25lZCBieSBhIENvbXBvbmVudCwgdW5tb3VudCB0aGF0IGNvbXBvbmVudCAoZW5kcyB1cCByZWN1cnNpbmcgYmFjayBoZXJlKVxuXHRcdHVubW91bnRDb21wb25lbnQoY29tcG9uZW50KTtcblx0fSBlbHNlIHtcblx0XHQvLyBJZiB0aGUgbm9kZSdzIFZOb2RlIGhhZCBhIHJlZiBmdW5jdGlvbiwgaW52b2tlIGl0IHdpdGggbnVsbCBoZXJlLlxuXHRcdC8vICh0aGlzIGlzIHBhcnQgb2YgdGhlIFJlYWN0IHNwZWMsIGFuZCBzbWFydCBmb3IgdW5zZXR0aW5nIHJlZmVyZW5jZXMpXG5cdFx0aWYgKG5vZGVbJ19fcHJlYWN0YXR0cl8nXSAhPSBudWxsICYmIG5vZGVbJ19fcHJlYWN0YXR0cl8nXS5yZWYpIG5vZGVbJ19fcHJlYWN0YXR0cl8nXS5yZWYobnVsbCk7XG5cblx0XHRpZiAodW5tb3VudE9ubHkgPT09IGZhbHNlIHx8IG5vZGVbJ19fcHJlYWN0YXR0cl8nXSA9PSBudWxsKSB7XG5cdFx0XHRyZW1vdmVOb2RlKG5vZGUpO1xuXHRcdH1cblxuXHRcdHJlbW92ZUNoaWxkcmVuKG5vZGUpO1xuXHR9XG59XG5cbi8qKiBSZWNvbGxlY3QvdW5tb3VudCBhbGwgY2hpbGRyZW4uXG4gKlx0LSB3ZSB1c2UgLmxhc3RDaGlsZCBoZXJlIGJlY2F1c2UgaXQgY2F1c2VzIGxlc3MgcmVmbG93IHRoYW4gLmZpcnN0Q2hpbGRcbiAqXHQtIGl0J3MgYWxzbyBjaGVhcGVyIHRoYW4gYWNjZXNzaW5nIHRoZSAuY2hpbGROb2RlcyBMaXZlIE5vZGVMaXN0XG4gKi9cbmZ1bmN0aW9uIHJlbW92ZUNoaWxkcmVuKG5vZGUpIHtcblx0bm9kZSA9IG5vZGUubGFzdENoaWxkO1xuXHR3aGlsZSAobm9kZSkge1xuXHRcdHZhciBuZXh0ID0gbm9kZS5wcmV2aW91c1NpYmxpbmc7XG5cdFx0cmVjb2xsZWN0Tm9kZVRyZWUobm9kZSwgdHJ1ZSk7XG5cdFx0bm9kZSA9IG5leHQ7XG5cdH1cbn1cblxuLyoqIEFwcGx5IGRpZmZlcmVuY2VzIGluIGF0dHJpYnV0ZXMgZnJvbSBhIFZOb2RlIHRvIHRoZSBnaXZlbiBET00gRWxlbWVudC5cbiAqXHRAcGFyYW0ge0VsZW1lbnR9IGRvbVx0XHRFbGVtZW50IHdpdGggYXR0cmlidXRlcyB0byBkaWZmIGBhdHRyc2AgYWdhaW5zdFxuICpcdEBwYXJhbSB7T2JqZWN0fSBhdHRyc1x0XHRUaGUgZGVzaXJlZCBlbmQtc3RhdGUga2V5LXZhbHVlIGF0dHJpYnV0ZSBwYWlyc1xuICpcdEBwYXJhbSB7T2JqZWN0fSBvbGRcdFx0XHRDdXJyZW50L3ByZXZpb3VzIGF0dHJpYnV0ZXMgKGZyb20gcHJldmlvdXMgVk5vZGUgb3IgZWxlbWVudCdzIHByb3AgY2FjaGUpXG4gKi9cbmZ1bmN0aW9uIGRpZmZBdHRyaWJ1dGVzKGRvbSwgYXR0cnMsIG9sZCkge1xuXHR2YXIgbmFtZTtcblxuXHQvLyByZW1vdmUgYXR0cmlidXRlcyBubyBsb25nZXIgcHJlc2VudCBvbiB0aGUgdm5vZGUgYnkgc2V0dGluZyB0aGVtIHRvIHVuZGVmaW5lZFxuXHRmb3IgKG5hbWUgaW4gb2xkKSB7XG5cdFx0aWYgKCEoYXR0cnMgJiYgYXR0cnNbbmFtZV0gIT0gbnVsbCkgJiYgb2xkW25hbWVdICE9IG51bGwpIHtcblx0XHRcdHNldEFjY2Vzc29yKGRvbSwgbmFtZSwgb2xkW25hbWVdLCBvbGRbbmFtZV0gPSB1bmRlZmluZWQsIGlzU3ZnTW9kZSk7XG5cdFx0fVxuXHR9XG5cblx0Ly8gYWRkIG5ldyAmIHVwZGF0ZSBjaGFuZ2VkIGF0dHJpYnV0ZXNcblx0Zm9yIChuYW1lIGluIGF0dHJzKSB7XG5cdFx0aWYgKG5hbWUgIT09ICdjaGlsZHJlbicgJiYgbmFtZSAhPT0gJ2lubmVySFRNTCcgJiYgKCEobmFtZSBpbiBvbGQpIHx8IGF0dHJzW25hbWVdICE9PSAobmFtZSA9PT0gJ3ZhbHVlJyB8fCBuYW1lID09PSAnY2hlY2tlZCcgPyBkb21bbmFtZV0gOiBvbGRbbmFtZV0pKSkge1xuXHRcdFx0c2V0QWNjZXNzb3IoZG9tLCBuYW1lLCBvbGRbbmFtZV0sIG9sZFtuYW1lXSA9IGF0dHJzW25hbWVdLCBpc1N2Z01vZGUpO1xuXHRcdH1cblx0fVxufVxuXG4vKiogUmV0YWlucyBhIHBvb2wgb2YgQ29tcG9uZW50cyBmb3IgcmUtdXNlLCBrZXllZCBvbiBjb21wb25lbnQgbmFtZS5cbiAqXHROb3RlOiBzaW5jZSBjb21wb25lbnQgbmFtZXMgYXJlIG5vdCB1bmlxdWUgb3IgZXZlbiBuZWNlc3NhcmlseSBhdmFpbGFibGUsIHRoZXNlIGFyZSBwcmltYXJpbHkgYSBmb3JtIG9mIHNoYXJkaW5nLlxuICpcdEBwcml2YXRlXG4gKi9cbnZhciBjb21wb25lbnRzID0ge307XG5cbi8qKiBSZWNsYWltIGEgY29tcG9uZW50IGZvciBsYXRlciByZS11c2UgYnkgdGhlIHJlY3ljbGVyLiAqL1xuZnVuY3Rpb24gY29sbGVjdENvbXBvbmVudChjb21wb25lbnQpIHtcblx0dmFyIG5hbWUgPSBjb21wb25lbnQuY29uc3RydWN0b3IubmFtZTtcblx0KGNvbXBvbmVudHNbbmFtZV0gfHwgKGNvbXBvbmVudHNbbmFtZV0gPSBbXSkpLnB1c2goY29tcG9uZW50KTtcbn1cblxuLyoqIENyZWF0ZSBhIGNvbXBvbmVudC4gTm9ybWFsaXplcyBkaWZmZXJlbmNlcyBiZXR3ZWVuIFBGQydzIGFuZCBjbGFzc2Z1bCBDb21wb25lbnRzLiAqL1xuZnVuY3Rpb24gY3JlYXRlQ29tcG9uZW50KEN0b3IsIHByb3BzLCBjb250ZXh0KSB7XG5cdHZhciBsaXN0ID0gY29tcG9uZW50c1tDdG9yLm5hbWVdLFxuXHQgICAgaW5zdDtcblxuXHRpZiAoQ3Rvci5wcm90b3R5cGUgJiYgQ3Rvci5wcm90b3R5cGUucmVuZGVyKSB7XG5cdFx0aW5zdCA9IG5ldyBDdG9yKHByb3BzLCBjb250ZXh0KTtcblx0XHRDb21wb25lbnQuY2FsbChpbnN0LCBwcm9wcywgY29udGV4dCk7XG5cdH0gZWxzZSB7XG5cdFx0aW5zdCA9IG5ldyBDb21wb25lbnQocHJvcHMsIGNvbnRleHQpO1xuXHRcdGluc3QuY29uc3RydWN0b3IgPSBDdG9yO1xuXHRcdGluc3QucmVuZGVyID0gZG9SZW5kZXI7XG5cdH1cblxuXHRpZiAobGlzdCkge1xuXHRcdGZvciAodmFyIGkgPSBsaXN0Lmxlbmd0aDsgaS0tOykge1xuXHRcdFx0aWYgKGxpc3RbaV0uY29uc3RydWN0b3IgPT09IEN0b3IpIHtcblx0XHRcdFx0aW5zdC5uZXh0QmFzZSA9IGxpc3RbaV0ubmV4dEJhc2U7XG5cdFx0XHRcdGxpc3Quc3BsaWNlKGksIDEpO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHR9XG5cdH1cblx0cmV0dXJuIGluc3Q7XG59XG5cbi8qKiBUaGUgYC5yZW5kZXIoKWAgbWV0aG9kIGZvciBhIFBGQyBiYWNraW5nIGluc3RhbmNlLiAqL1xuZnVuY3Rpb24gZG9SZW5kZXIocHJvcHMsIHN0YXRlLCBjb250ZXh0KSB7XG5cdHJldHVybiB0aGlzLmNvbnN0cnVjdG9yKHByb3BzLCBjb250ZXh0KTtcbn1cblxuLyoqIFNldCBhIGNvbXBvbmVudCdzIGBwcm9wc2AgKGdlbmVyYWxseSBkZXJpdmVkIGZyb20gSlNYIGF0dHJpYnV0ZXMpLlxuICpcdEBwYXJhbSB7T2JqZWN0fSBwcm9wc1xuICpcdEBwYXJhbSB7T2JqZWN0fSBbb3B0c11cbiAqXHRAcGFyYW0ge2Jvb2xlYW59IFtvcHRzLnJlbmRlclN5bmM9ZmFsc2VdXHRJZiBgdHJ1ZWAgYW5kIHtAbGluayBvcHRpb25zLnN5bmNDb21wb25lbnRVcGRhdGVzfSBpcyBgdHJ1ZWAsIHRyaWdnZXJzIHN5bmNocm9ub3VzIHJlbmRlcmluZy5cbiAqXHRAcGFyYW0ge2Jvb2xlYW59IFtvcHRzLnJlbmRlcj10cnVlXVx0XHRcdElmIGBmYWxzZWAsIG5vIHJlbmRlciB3aWxsIGJlIHRyaWdnZXJlZC5cbiAqL1xuZnVuY3Rpb24gc2V0Q29tcG9uZW50UHJvcHMoY29tcG9uZW50LCBwcm9wcywgb3B0cywgY29udGV4dCwgbW91bnRBbGwpIHtcblx0aWYgKGNvbXBvbmVudC5fZGlzYWJsZSkgcmV0dXJuO1xuXHRjb21wb25lbnQuX2Rpc2FibGUgPSB0cnVlO1xuXG5cdGlmIChjb21wb25lbnQuX19yZWYgPSBwcm9wcy5yZWYpIGRlbGV0ZSBwcm9wcy5yZWY7XG5cdGlmIChjb21wb25lbnQuX19rZXkgPSBwcm9wcy5rZXkpIGRlbGV0ZSBwcm9wcy5rZXk7XG5cblx0aWYgKCFjb21wb25lbnQuYmFzZSB8fCBtb3VudEFsbCkge1xuXHRcdGlmIChjb21wb25lbnQuY29tcG9uZW50V2lsbE1vdW50KSBjb21wb25lbnQuY29tcG9uZW50V2lsbE1vdW50KCk7XG5cdH0gZWxzZSBpZiAoY29tcG9uZW50LmNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMpIHtcblx0XHRjb21wb25lbnQuY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhwcm9wcywgY29udGV4dCk7XG5cdH1cblxuXHRpZiAoY29udGV4dCAmJiBjb250ZXh0ICE9PSBjb21wb25lbnQuY29udGV4dCkge1xuXHRcdGlmICghY29tcG9uZW50LnByZXZDb250ZXh0KSBjb21wb25lbnQucHJldkNvbnRleHQgPSBjb21wb25lbnQuY29udGV4dDtcblx0XHRjb21wb25lbnQuY29udGV4dCA9IGNvbnRleHQ7XG5cdH1cblxuXHRpZiAoIWNvbXBvbmVudC5wcmV2UHJvcHMpIGNvbXBvbmVudC5wcmV2UHJvcHMgPSBjb21wb25lbnQucHJvcHM7XG5cdGNvbXBvbmVudC5wcm9wcyA9IHByb3BzO1xuXG5cdGNvbXBvbmVudC5fZGlzYWJsZSA9IGZhbHNlO1xuXG5cdGlmIChvcHRzICE9PSAwKSB7XG5cdFx0aWYgKG9wdHMgPT09IDEgfHwgb3B0aW9ucy5zeW5jQ29tcG9uZW50VXBkYXRlcyAhPT0gZmFsc2UgfHwgIWNvbXBvbmVudC5iYXNlKSB7XG5cdFx0XHRyZW5kZXJDb21wb25lbnQoY29tcG9uZW50LCAxLCBtb3VudEFsbCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGVucXVldWVSZW5kZXIoY29tcG9uZW50KTtcblx0XHR9XG5cdH1cblxuXHRpZiAoY29tcG9uZW50Ll9fcmVmKSBjb21wb25lbnQuX19yZWYoY29tcG9uZW50KTtcbn1cblxuLyoqIFJlbmRlciBhIENvbXBvbmVudCwgdHJpZ2dlcmluZyBuZWNlc3NhcnkgbGlmZWN5Y2xlIGV2ZW50cyBhbmQgdGFraW5nIEhpZ2gtT3JkZXIgQ29tcG9uZW50cyBpbnRvIGFjY291bnQuXG4gKlx0QHBhcmFtIHtDb21wb25lbnR9IGNvbXBvbmVudFxuICpcdEBwYXJhbSB7T2JqZWN0fSBbb3B0c11cbiAqXHRAcGFyYW0ge2Jvb2xlYW59IFtvcHRzLmJ1aWxkPWZhbHNlXVx0XHRJZiBgdHJ1ZWAsIGNvbXBvbmVudCB3aWxsIGJ1aWxkIGFuZCBzdG9yZSBhIERPTSBub2RlIGlmIG5vdCBhbHJlYWR5IGFzc29jaWF0ZWQgd2l0aCBvbmUuXG4gKlx0QHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gcmVuZGVyQ29tcG9uZW50KGNvbXBvbmVudCwgb3B0cywgbW91bnRBbGwsIGlzQ2hpbGQpIHtcblx0aWYgKGNvbXBvbmVudC5fZGlzYWJsZSkgcmV0dXJuO1xuXG5cdHZhciBwcm9wcyA9IGNvbXBvbmVudC5wcm9wcyxcblx0ICAgIHN0YXRlID0gY29tcG9uZW50LnN0YXRlLFxuXHQgICAgY29udGV4dCA9IGNvbXBvbmVudC5jb250ZXh0LFxuXHQgICAgcHJldmlvdXNQcm9wcyA9IGNvbXBvbmVudC5wcmV2UHJvcHMgfHwgcHJvcHMsXG5cdCAgICBwcmV2aW91c1N0YXRlID0gY29tcG9uZW50LnByZXZTdGF0ZSB8fCBzdGF0ZSxcblx0ICAgIHByZXZpb3VzQ29udGV4dCA9IGNvbXBvbmVudC5wcmV2Q29udGV4dCB8fCBjb250ZXh0LFxuXHQgICAgaXNVcGRhdGUgPSBjb21wb25lbnQuYmFzZSxcblx0ICAgIG5leHRCYXNlID0gY29tcG9uZW50Lm5leHRCYXNlLFxuXHQgICAgaW5pdGlhbEJhc2UgPSBpc1VwZGF0ZSB8fCBuZXh0QmFzZSxcblx0ICAgIGluaXRpYWxDaGlsZENvbXBvbmVudCA9IGNvbXBvbmVudC5fY29tcG9uZW50LFxuXHQgICAgc2tpcCA9IGZhbHNlLFxuXHQgICAgcmVuZGVyZWQsXG5cdCAgICBpbnN0LFxuXHQgICAgY2Jhc2U7XG5cblx0Ly8gaWYgdXBkYXRpbmdcblx0aWYgKGlzVXBkYXRlKSB7XG5cdFx0Y29tcG9uZW50LnByb3BzID0gcHJldmlvdXNQcm9wcztcblx0XHRjb21wb25lbnQuc3RhdGUgPSBwcmV2aW91c1N0YXRlO1xuXHRcdGNvbXBvbmVudC5jb250ZXh0ID0gcHJldmlvdXNDb250ZXh0O1xuXHRcdGlmIChvcHRzICE9PSAyICYmIGNvbXBvbmVudC5zaG91bGRDb21wb25lbnRVcGRhdGUgJiYgY29tcG9uZW50LnNob3VsZENvbXBvbmVudFVwZGF0ZShwcm9wcywgc3RhdGUsIGNvbnRleHQpID09PSBmYWxzZSkge1xuXHRcdFx0c2tpcCA9IHRydWU7XG5cdFx0fSBlbHNlIGlmIChjb21wb25lbnQuY29tcG9uZW50V2lsbFVwZGF0ZSkge1xuXHRcdFx0Y29tcG9uZW50LmNvbXBvbmVudFdpbGxVcGRhdGUocHJvcHMsIHN0YXRlLCBjb250ZXh0KTtcblx0XHR9XG5cdFx0Y29tcG9uZW50LnByb3BzID0gcHJvcHM7XG5cdFx0Y29tcG9uZW50LnN0YXRlID0gc3RhdGU7XG5cdFx0Y29tcG9uZW50LmNvbnRleHQgPSBjb250ZXh0O1xuXHR9XG5cblx0Y29tcG9uZW50LnByZXZQcm9wcyA9IGNvbXBvbmVudC5wcmV2U3RhdGUgPSBjb21wb25lbnQucHJldkNvbnRleHQgPSBjb21wb25lbnQubmV4dEJhc2UgPSBudWxsO1xuXHRjb21wb25lbnQuX2RpcnR5ID0gZmFsc2U7XG5cblx0aWYgKCFza2lwKSB7XG5cdFx0cmVuZGVyZWQgPSBjb21wb25lbnQucmVuZGVyKHByb3BzLCBzdGF0ZSwgY29udGV4dCk7XG5cblx0XHQvLyBjb250ZXh0IHRvIHBhc3MgdG8gdGhlIGNoaWxkLCBjYW4gYmUgdXBkYXRlZCB2aWEgKGdyYW5kLSlwYXJlbnQgY29tcG9uZW50XG5cdFx0aWYgKGNvbXBvbmVudC5nZXRDaGlsZENvbnRleHQpIHtcblx0XHRcdGNvbnRleHQgPSBleHRlbmQoZXh0ZW5kKHt9LCBjb250ZXh0KSwgY29tcG9uZW50LmdldENoaWxkQ29udGV4dCgpKTtcblx0XHR9XG5cblx0XHR2YXIgY2hpbGRDb21wb25lbnQgPSByZW5kZXJlZCAmJiByZW5kZXJlZC5ub2RlTmFtZSxcblx0XHQgICAgdG9Vbm1vdW50LFxuXHRcdCAgICBiYXNlO1xuXG5cdFx0aWYgKHR5cGVvZiBjaGlsZENvbXBvbmVudCA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0Ly8gc2V0IHVwIGhpZ2ggb3JkZXIgY29tcG9uZW50IGxpbmtcblxuXHRcdFx0dmFyIGNoaWxkUHJvcHMgPSBnZXROb2RlUHJvcHMocmVuZGVyZWQpO1xuXHRcdFx0aW5zdCA9IGluaXRpYWxDaGlsZENvbXBvbmVudDtcblxuXHRcdFx0aWYgKGluc3QgJiYgaW5zdC5jb25zdHJ1Y3RvciA9PT0gY2hpbGRDb21wb25lbnQgJiYgY2hpbGRQcm9wcy5rZXkgPT0gaW5zdC5fX2tleSkge1xuXHRcdFx0XHRzZXRDb21wb25lbnRQcm9wcyhpbnN0LCBjaGlsZFByb3BzLCAxLCBjb250ZXh0LCBmYWxzZSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0b1VubW91bnQgPSBpbnN0O1xuXG5cdFx0XHRcdGNvbXBvbmVudC5fY29tcG9uZW50ID0gaW5zdCA9IGNyZWF0ZUNvbXBvbmVudChjaGlsZENvbXBvbmVudCwgY2hpbGRQcm9wcywgY29udGV4dCk7XG5cdFx0XHRcdGluc3QubmV4dEJhc2UgPSBpbnN0Lm5leHRCYXNlIHx8IG5leHRCYXNlO1xuXHRcdFx0XHRpbnN0Ll9wYXJlbnRDb21wb25lbnQgPSBjb21wb25lbnQ7XG5cdFx0XHRcdHNldENvbXBvbmVudFByb3BzKGluc3QsIGNoaWxkUHJvcHMsIDAsIGNvbnRleHQsIGZhbHNlKTtcblx0XHRcdFx0cmVuZGVyQ29tcG9uZW50KGluc3QsIDEsIG1vdW50QWxsLCB0cnVlKTtcblx0XHRcdH1cblxuXHRcdFx0YmFzZSA9IGluc3QuYmFzZTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Y2Jhc2UgPSBpbml0aWFsQmFzZTtcblxuXHRcdFx0Ly8gZGVzdHJveSBoaWdoIG9yZGVyIGNvbXBvbmVudCBsaW5rXG5cdFx0XHR0b1VubW91bnQgPSBpbml0aWFsQ2hpbGRDb21wb25lbnQ7XG5cdFx0XHRpZiAodG9Vbm1vdW50KSB7XG5cdFx0XHRcdGNiYXNlID0gY29tcG9uZW50Ll9jb21wb25lbnQgPSBudWxsO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoaW5pdGlhbEJhc2UgfHwgb3B0cyA9PT0gMSkge1xuXHRcdFx0XHRpZiAoY2Jhc2UpIGNiYXNlLl9jb21wb25lbnQgPSBudWxsO1xuXHRcdFx0XHRiYXNlID0gZGlmZihjYmFzZSwgcmVuZGVyZWQsIGNvbnRleHQsIG1vdW50QWxsIHx8ICFpc1VwZGF0ZSwgaW5pdGlhbEJhc2UgJiYgaW5pdGlhbEJhc2UucGFyZW50Tm9kZSwgdHJ1ZSk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKGluaXRpYWxCYXNlICYmIGJhc2UgIT09IGluaXRpYWxCYXNlICYmIGluc3QgIT09IGluaXRpYWxDaGlsZENvbXBvbmVudCkge1xuXHRcdFx0dmFyIGJhc2VQYXJlbnQgPSBpbml0aWFsQmFzZS5wYXJlbnROb2RlO1xuXHRcdFx0aWYgKGJhc2VQYXJlbnQgJiYgYmFzZSAhPT0gYmFzZVBhcmVudCkge1xuXHRcdFx0XHRiYXNlUGFyZW50LnJlcGxhY2VDaGlsZChiYXNlLCBpbml0aWFsQmFzZSk7XG5cblx0XHRcdFx0aWYgKCF0b1VubW91bnQpIHtcblx0XHRcdFx0XHRpbml0aWFsQmFzZS5fY29tcG9uZW50ID0gbnVsbDtcblx0XHRcdFx0XHRyZWNvbGxlY3ROb2RlVHJlZShpbml0aWFsQmFzZSwgZmFsc2UpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKHRvVW5tb3VudCkge1xuXHRcdFx0dW5tb3VudENvbXBvbmVudCh0b1VubW91bnQpO1xuXHRcdH1cblxuXHRcdGNvbXBvbmVudC5iYXNlID0gYmFzZTtcblx0XHRpZiAoYmFzZSAmJiAhaXNDaGlsZCkge1xuXHRcdFx0dmFyIGNvbXBvbmVudFJlZiA9IGNvbXBvbmVudCxcblx0XHRcdCAgICB0ID0gY29tcG9uZW50O1xuXHRcdFx0d2hpbGUgKHQgPSB0Ll9wYXJlbnRDb21wb25lbnQpIHtcblx0XHRcdFx0KGNvbXBvbmVudFJlZiA9IHQpLmJhc2UgPSBiYXNlO1xuXHRcdFx0fVxuXHRcdFx0YmFzZS5fY29tcG9uZW50ID0gY29tcG9uZW50UmVmO1xuXHRcdFx0YmFzZS5fY29tcG9uZW50Q29uc3RydWN0b3IgPSBjb21wb25lbnRSZWYuY29uc3RydWN0b3I7XG5cdFx0fVxuXHR9XG5cblx0aWYgKCFpc1VwZGF0ZSB8fCBtb3VudEFsbCkge1xuXHRcdG1vdW50cy51bnNoaWZ0KGNvbXBvbmVudCk7XG5cdH0gZWxzZSBpZiAoIXNraXApIHtcblx0XHQvLyBFbnN1cmUgdGhhdCBwZW5kaW5nIGNvbXBvbmVudERpZE1vdW50KCkgaG9va3Mgb2YgY2hpbGQgY29tcG9uZW50c1xuXHRcdC8vIGFyZSBjYWxsZWQgYmVmb3JlIHRoZSBjb21wb25lbnREaWRVcGRhdGUoKSBob29rIGluIHRoZSBwYXJlbnQuXG5cdFx0Ly8gTm90ZTogZGlzYWJsZWQgYXMgaXQgY2F1c2VzIGR1cGxpY2F0ZSBob29rcywgc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9kZXZlbG9waXQvcHJlYWN0L2lzc3Vlcy83NTBcblx0XHQvLyBmbHVzaE1vdW50cygpO1xuXG5cdFx0aWYgKGNvbXBvbmVudC5jb21wb25lbnREaWRVcGRhdGUpIHtcblx0XHRcdGNvbXBvbmVudC5jb21wb25lbnREaWRVcGRhdGUocHJldmlvdXNQcm9wcywgcHJldmlvdXNTdGF0ZSwgcHJldmlvdXNDb250ZXh0KTtcblx0XHR9XG5cdFx0aWYgKG9wdGlvbnMuYWZ0ZXJVcGRhdGUpIG9wdGlvbnMuYWZ0ZXJVcGRhdGUoY29tcG9uZW50KTtcblx0fVxuXG5cdGlmIChjb21wb25lbnQuX3JlbmRlckNhbGxiYWNrcyAhPSBudWxsKSB7XG5cdFx0d2hpbGUgKGNvbXBvbmVudC5fcmVuZGVyQ2FsbGJhY2tzLmxlbmd0aCkge1xuXHRcdFx0Y29tcG9uZW50Ll9yZW5kZXJDYWxsYmFja3MucG9wKCkuY2FsbChjb21wb25lbnQpO1xuXHRcdH1cblx0fVxuXG5cdGlmICghZGlmZkxldmVsICYmICFpc0NoaWxkKSBmbHVzaE1vdW50cygpO1xufVxuXG4vKiogQXBwbHkgdGhlIENvbXBvbmVudCByZWZlcmVuY2VkIGJ5IGEgVk5vZGUgdG8gdGhlIERPTS5cbiAqXHRAcGFyYW0ge0VsZW1lbnR9IGRvbVx0VGhlIERPTSBub2RlIHRvIG11dGF0ZVxuICpcdEBwYXJhbSB7Vk5vZGV9IHZub2RlXHRBIENvbXBvbmVudC1yZWZlcmVuY2luZyBWTm9kZVxuICpcdEByZXR1cm5zIHtFbGVtZW50fSBkb21cdFRoZSBjcmVhdGVkL211dGF0ZWQgZWxlbWVudFxuICpcdEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGJ1aWxkQ29tcG9uZW50RnJvbVZOb2RlKGRvbSwgdm5vZGUsIGNvbnRleHQsIG1vdW50QWxsKSB7XG5cdHZhciBjID0gZG9tICYmIGRvbS5fY29tcG9uZW50LFxuXHQgICAgb3JpZ2luYWxDb21wb25lbnQgPSBjLFxuXHQgICAgb2xkRG9tID0gZG9tLFxuXHQgICAgaXNEaXJlY3RPd25lciA9IGMgJiYgZG9tLl9jb21wb25lbnRDb25zdHJ1Y3RvciA9PT0gdm5vZGUubm9kZU5hbWUsXG5cdCAgICBpc093bmVyID0gaXNEaXJlY3RPd25lcixcblx0ICAgIHByb3BzID0gZ2V0Tm9kZVByb3BzKHZub2RlKTtcblx0d2hpbGUgKGMgJiYgIWlzT3duZXIgJiYgKGMgPSBjLl9wYXJlbnRDb21wb25lbnQpKSB7XG5cdFx0aXNPd25lciA9IGMuY29uc3RydWN0b3IgPT09IHZub2RlLm5vZGVOYW1lO1xuXHR9XG5cblx0aWYgKGMgJiYgaXNPd25lciAmJiAoIW1vdW50QWxsIHx8IGMuX2NvbXBvbmVudCkpIHtcblx0XHRzZXRDb21wb25lbnRQcm9wcyhjLCBwcm9wcywgMywgY29udGV4dCwgbW91bnRBbGwpO1xuXHRcdGRvbSA9IGMuYmFzZTtcblx0fSBlbHNlIHtcblx0XHRpZiAob3JpZ2luYWxDb21wb25lbnQgJiYgIWlzRGlyZWN0T3duZXIpIHtcblx0XHRcdHVubW91bnRDb21wb25lbnQob3JpZ2luYWxDb21wb25lbnQpO1xuXHRcdFx0ZG9tID0gb2xkRG9tID0gbnVsbDtcblx0XHR9XG5cblx0XHRjID0gY3JlYXRlQ29tcG9uZW50KHZub2RlLm5vZGVOYW1lLCBwcm9wcywgY29udGV4dCk7XG5cdFx0aWYgKGRvbSAmJiAhYy5uZXh0QmFzZSkge1xuXHRcdFx0Yy5uZXh0QmFzZSA9IGRvbTtcblx0XHRcdC8vIHBhc3NpbmcgZG9tL29sZERvbSBhcyBuZXh0QmFzZSB3aWxsIHJlY3ljbGUgaXQgaWYgdW51c2VkLCBzbyBieXBhc3MgcmVjeWNsaW5nIG9uIEwyMjk6XG5cdFx0XHRvbGREb20gPSBudWxsO1xuXHRcdH1cblx0XHRzZXRDb21wb25lbnRQcm9wcyhjLCBwcm9wcywgMSwgY29udGV4dCwgbW91bnRBbGwpO1xuXHRcdGRvbSA9IGMuYmFzZTtcblxuXHRcdGlmIChvbGREb20gJiYgZG9tICE9PSBvbGREb20pIHtcblx0XHRcdG9sZERvbS5fY29tcG9uZW50ID0gbnVsbDtcblx0XHRcdHJlY29sbGVjdE5vZGVUcmVlKG9sZERvbSwgZmFsc2UpO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiBkb207XG59XG5cbi8qKiBSZW1vdmUgYSBjb21wb25lbnQgZnJvbSB0aGUgRE9NIGFuZCByZWN5Y2xlIGl0LlxuICpcdEBwYXJhbSB7Q29tcG9uZW50fSBjb21wb25lbnRcdFRoZSBDb21wb25lbnQgaW5zdGFuY2UgdG8gdW5tb3VudFxuICpcdEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIHVubW91bnRDb21wb25lbnQoY29tcG9uZW50KSB7XG5cdGlmIChvcHRpb25zLmJlZm9yZVVubW91bnQpIG9wdGlvbnMuYmVmb3JlVW5tb3VudChjb21wb25lbnQpO1xuXG5cdHZhciBiYXNlID0gY29tcG9uZW50LmJhc2U7XG5cblx0Y29tcG9uZW50Ll9kaXNhYmxlID0gdHJ1ZTtcblxuXHRpZiAoY29tcG9uZW50LmNvbXBvbmVudFdpbGxVbm1vdW50KSBjb21wb25lbnQuY29tcG9uZW50V2lsbFVubW91bnQoKTtcblxuXHRjb21wb25lbnQuYmFzZSA9IG51bGw7XG5cblx0Ly8gcmVjdXJzaXZlbHkgdGVhciBkb3duICYgcmVjb2xsZWN0IGhpZ2gtb3JkZXIgY29tcG9uZW50IGNoaWxkcmVuOlxuXHR2YXIgaW5uZXIgPSBjb21wb25lbnQuX2NvbXBvbmVudDtcblx0aWYgKGlubmVyKSB7XG5cdFx0dW5tb3VudENvbXBvbmVudChpbm5lcik7XG5cdH0gZWxzZSBpZiAoYmFzZSkge1xuXHRcdGlmIChiYXNlWydfX3ByZWFjdGF0dHJfJ10gJiYgYmFzZVsnX19wcmVhY3RhdHRyXyddLnJlZikgYmFzZVsnX19wcmVhY3RhdHRyXyddLnJlZihudWxsKTtcblxuXHRcdGNvbXBvbmVudC5uZXh0QmFzZSA9IGJhc2U7XG5cblx0XHRyZW1vdmVOb2RlKGJhc2UpO1xuXHRcdGNvbGxlY3RDb21wb25lbnQoY29tcG9uZW50KTtcblxuXHRcdHJlbW92ZUNoaWxkcmVuKGJhc2UpO1xuXHR9XG5cblx0aWYgKGNvbXBvbmVudC5fX3JlZikgY29tcG9uZW50Ll9fcmVmKG51bGwpO1xufVxuXG4vKiogQmFzZSBDb21wb25lbnQgY2xhc3MuXG4gKlx0UHJvdmlkZXMgYHNldFN0YXRlKClgIGFuZCBgZm9yY2VVcGRhdGUoKWAsIHdoaWNoIHRyaWdnZXIgcmVuZGVyaW5nLlxuICpcdEBwdWJsaWNcbiAqXG4gKlx0QGV4YW1wbGVcbiAqXHRjbGFzcyBNeUZvbyBleHRlbmRzIENvbXBvbmVudCB7XG4gKlx0XHRyZW5kZXIocHJvcHMsIHN0YXRlKSB7XG4gKlx0XHRcdHJldHVybiA8ZGl2IC8+O1xuICpcdFx0fVxuICpcdH1cbiAqL1xuZnVuY3Rpb24gQ29tcG9uZW50KHByb3BzLCBjb250ZXh0KSB7XG5cdHRoaXMuX2RpcnR5ID0gdHJ1ZTtcblxuXHQvKiogQHB1YmxpY1xuICAqXHRAdHlwZSB7b2JqZWN0fVxuICAqL1xuXHR0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuXG5cdC8qKiBAcHVibGljXG4gICpcdEB0eXBlIHtvYmplY3R9XG4gICovXG5cdHRoaXMucHJvcHMgPSBwcm9wcztcblxuXHQvKiogQHB1YmxpY1xuICAqXHRAdHlwZSB7b2JqZWN0fVxuICAqL1xuXHR0aGlzLnN0YXRlID0gdGhpcy5zdGF0ZSB8fCB7fTtcbn1cblxuZXh0ZW5kKENvbXBvbmVudC5wcm90b3R5cGUsIHtcblxuXHQvKiogUmV0dXJucyBhIGBib29sZWFuYCBpbmRpY2F0aW5nIGlmIHRoZSBjb21wb25lbnQgc2hvdWxkIHJlLXJlbmRlciB3aGVuIHJlY2VpdmluZyB0aGUgZ2l2ZW4gYHByb3BzYCBhbmQgYHN0YXRlYC5cbiAgKlx0QHBhcmFtIHtvYmplY3R9IG5leHRQcm9wc1xuICAqXHRAcGFyYW0ge29iamVjdH0gbmV4dFN0YXRlXG4gICpcdEBwYXJhbSB7b2JqZWN0fSBuZXh0Q29udGV4dFxuICAqXHRAcmV0dXJucyB7Qm9vbGVhbn0gc2hvdWxkIHRoZSBjb21wb25lbnQgcmUtcmVuZGVyXG4gICpcdEBuYW1lIHNob3VsZENvbXBvbmVudFVwZGF0ZVxuICAqXHRAZnVuY3Rpb25cbiAgKi9cblxuXHQvKiogVXBkYXRlIGNvbXBvbmVudCBzdGF0ZSBieSBjb3B5aW5nIHByb3BlcnRpZXMgZnJvbSBgc3RhdGVgIHRvIGB0aGlzLnN0YXRlYC5cbiAgKlx0QHBhcmFtIHtvYmplY3R9IHN0YXRlXHRcdEEgaGFzaCBvZiBzdGF0ZSBwcm9wZXJ0aWVzIHRvIHVwZGF0ZSB3aXRoIG5ldyB2YWx1ZXNcbiAgKlx0QHBhcmFtIHtmdW5jdGlvbn0gY2FsbGJhY2tcdEEgZnVuY3Rpb24gdG8gYmUgY2FsbGVkIG9uY2UgY29tcG9uZW50IHN0YXRlIGlzIHVwZGF0ZWRcbiAgKi9cblx0c2V0U3RhdGU6IGZ1bmN0aW9uIHNldFN0YXRlKHN0YXRlLCBjYWxsYmFjaykge1xuXHRcdHZhciBzID0gdGhpcy5zdGF0ZTtcblx0XHRpZiAoIXRoaXMucHJldlN0YXRlKSB0aGlzLnByZXZTdGF0ZSA9IGV4dGVuZCh7fSwgcyk7XG5cdFx0ZXh0ZW5kKHMsIHR5cGVvZiBzdGF0ZSA9PT0gJ2Z1bmN0aW9uJyA/IHN0YXRlKHMsIHRoaXMucHJvcHMpIDogc3RhdGUpO1xuXHRcdGlmIChjYWxsYmFjaykgKHRoaXMuX3JlbmRlckNhbGxiYWNrcyA9IHRoaXMuX3JlbmRlckNhbGxiYWNrcyB8fCBbXSkucHVzaChjYWxsYmFjayk7XG5cdFx0ZW5xdWV1ZVJlbmRlcih0aGlzKTtcblx0fSxcblxuXG5cdC8qKiBJbW1lZGlhdGVseSBwZXJmb3JtIGEgc3luY2hyb25vdXMgcmUtcmVuZGVyIG9mIHRoZSBjb21wb25lbnQuXG4gICpcdEBwYXJhbSB7ZnVuY3Rpb259IGNhbGxiYWNrXHRcdEEgZnVuY3Rpb24gdG8gYmUgY2FsbGVkIGFmdGVyIGNvbXBvbmVudCBpcyByZS1yZW5kZXJlZC5cbiAgKlx0QHByaXZhdGVcbiAgKi9cblx0Zm9yY2VVcGRhdGU6IGZ1bmN0aW9uIGZvcmNlVXBkYXRlKGNhbGxiYWNrKSB7XG5cdFx0aWYgKGNhbGxiYWNrKSAodGhpcy5fcmVuZGVyQ2FsbGJhY2tzID0gdGhpcy5fcmVuZGVyQ2FsbGJhY2tzIHx8IFtdKS5wdXNoKGNhbGxiYWNrKTtcblx0XHRyZW5kZXJDb21wb25lbnQodGhpcywgMik7XG5cdH0sXG5cblxuXHQvKiogQWNjZXB0cyBgcHJvcHNgIGFuZCBgc3RhdGVgLCBhbmQgcmV0dXJucyBhIG5ldyBWaXJ0dWFsIERPTSB0cmVlIHRvIGJ1aWxkLlxuICAqXHRWaXJ0dWFsIERPTSBpcyBnZW5lcmFsbHkgY29uc3RydWN0ZWQgdmlhIFtKU1hdKGh0dHA6Ly9qYXNvbmZvcm1hdC5jb20vd3RmLWlzLWpzeCkuXG4gICpcdEBwYXJhbSB7b2JqZWN0fSBwcm9wc1x0XHRQcm9wcyAoZWc6IEpTWCBhdHRyaWJ1dGVzKSByZWNlaXZlZCBmcm9tIHBhcmVudCBlbGVtZW50L2NvbXBvbmVudFxuICAqXHRAcGFyYW0ge29iamVjdH0gc3RhdGVcdFx0VGhlIGNvbXBvbmVudCdzIGN1cnJlbnQgc3RhdGVcbiAgKlx0QHBhcmFtIHtvYmplY3R9IGNvbnRleHRcdFx0Q29udGV4dCBvYmplY3QgKGlmIGEgcGFyZW50IGNvbXBvbmVudCBoYXMgcHJvdmlkZWQgY29udGV4dClcbiAgKlx0QHJldHVybnMgVk5vZGVcbiAgKi9cblx0cmVuZGVyOiBmdW5jdGlvbiByZW5kZXIoKSB7fVxufSk7XG5cbi8qKiBSZW5kZXIgSlNYIGludG8gYSBgcGFyZW50YCBFbGVtZW50LlxuICpcdEBwYXJhbSB7Vk5vZGV9IHZub2RlXHRcdEEgKEpTWCkgVk5vZGUgdG8gcmVuZGVyXG4gKlx0QHBhcmFtIHtFbGVtZW50fSBwYXJlbnRcdFx0RE9NIGVsZW1lbnQgdG8gcmVuZGVyIGludG9cbiAqXHRAcGFyYW0ge0VsZW1lbnR9IFttZXJnZV1cdEF0dGVtcHQgdG8gcmUtdXNlIGFuIGV4aXN0aW5nIERPTSB0cmVlIHJvb3RlZCBhdCBgbWVyZ2VgXG4gKlx0QHB1YmxpY1xuICpcbiAqXHRAZXhhbXBsZVxuICpcdC8vIHJlbmRlciBhIGRpdiBpbnRvIDxib2R5PjpcbiAqXHRyZW5kZXIoPGRpdiBpZD1cImhlbGxvXCI+aGVsbG8hPC9kaXY+LCBkb2N1bWVudC5ib2R5KTtcbiAqXG4gKlx0QGV4YW1wbGVcbiAqXHQvLyByZW5kZXIgYSBcIlRoaW5nXCIgY29tcG9uZW50IGludG8gI2ZvbzpcbiAqXHRjb25zdCBUaGluZyA9ICh7IG5hbWUgfSkgPT4gPHNwYW4+eyBuYW1lIH08L3NwYW4+O1xuICpcdHJlbmRlcig8VGhpbmcgbmFtZT1cIm9uZVwiIC8+LCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZm9vJykpO1xuICovXG5mdW5jdGlvbiByZW5kZXIodm5vZGUsIHBhcmVudCwgbWVyZ2UpIHtcbiAgcmV0dXJuIGRpZmYobWVyZ2UsIHZub2RlLCB7fSwgZmFsc2UsIHBhcmVudCwgZmFsc2UpO1xufVxuXG52YXIgcHJlYWN0ID0ge1xuXHRoOiBoLFxuXHRjcmVhdGVFbGVtZW50OiBoLFxuXHRjbG9uZUVsZW1lbnQ6IGNsb25lRWxlbWVudCxcblx0Q29tcG9uZW50OiBDb21wb25lbnQsXG5cdHJlbmRlcjogcmVuZGVyLFxuXHRyZXJlbmRlcjogcmVyZW5kZXIsXG5cdG9wdGlvbnM6IG9wdGlvbnNcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHByZWFjdDtcbmV4cG9ydCB7IGgsIGggYXMgY3JlYXRlRWxlbWVudCwgY2xvbmVFbGVtZW50LCBDb21wb25lbnQsIHJlbmRlciwgcmVyZW5kZXIsIG9wdGlvbnMgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXByZWFjdC5lc20uanMubWFwXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvcHJlYWN0L2Rpc3QvcHJlYWN0LmVzbS5qc1xuLy8gbW9kdWxlIGlkID0gLi4vbm9kZV9tb2R1bGVzL3ByZWFjdC9kaXN0L3ByZWFjdC5lc20uanNcbi8vIG1vZHVsZSBjaHVua3MgPSBtYWluIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4vLyBUaGlzIG1ldGhvZCBvZiBvYnRhaW5pbmcgYSByZWZlcmVuY2UgdG8gdGhlIGdsb2JhbCBvYmplY3QgbmVlZHMgdG8gYmVcbi8vIGtlcHQgaWRlbnRpY2FsIHRvIHRoZSB3YXkgaXQgaXMgb2J0YWluZWQgaW4gcnVudGltZS5qc1xudmFyIGcgPSAoZnVuY3Rpb24oKSB7XG4gIHJldHVybiB0aGlzIHx8ICh0eXBlb2Ygc2VsZiA9PT0gXCJvYmplY3RcIiAmJiBzZWxmKTtcbn0pKCkgfHwgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpO1xuXG4vLyBVc2UgYGdldE93blByb3BlcnR5TmFtZXNgIGJlY2F1c2Ugbm90IGFsbCBicm93c2VycyBzdXBwb3J0IGNhbGxpbmdcbi8vIGBoYXNPd25Qcm9wZXJ0eWAgb24gdGhlIGdsb2JhbCBgc2VsZmAgb2JqZWN0IGluIGEgd29ya2VyLiBTZWUgIzE4My5cbnZhciBoYWRSdW50aW1lID0gZy5yZWdlbmVyYXRvclJ1bnRpbWUgJiZcbiAgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoZykuaW5kZXhPZihcInJlZ2VuZXJhdG9yUnVudGltZVwiKSA+PSAwO1xuXG4vLyBTYXZlIHRoZSBvbGQgcmVnZW5lcmF0b3JSdW50aW1lIGluIGNhc2UgaXQgbmVlZHMgdG8gYmUgcmVzdG9yZWQgbGF0ZXIuXG52YXIgb2xkUnVudGltZSA9IGhhZFJ1bnRpbWUgJiYgZy5yZWdlbmVyYXRvclJ1bnRpbWU7XG5cbi8vIEZvcmNlIHJlZXZhbHV0YXRpb24gb2YgcnVudGltZS5qcy5cbmcucmVnZW5lcmF0b3JSdW50aW1lID0gdW5kZWZpbmVkO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuL3J1bnRpbWVcIik7XG5cbmlmIChoYWRSdW50aW1lKSB7XG4gIC8vIFJlc3RvcmUgdGhlIG9yaWdpbmFsIHJ1bnRpbWUuXG4gIGcucmVnZW5lcmF0b3JSdW50aW1lID0gb2xkUnVudGltZTtcbn0gZWxzZSB7XG4gIC8vIFJlbW92ZSB0aGUgZ2xvYmFsIHByb3BlcnR5IGFkZGVkIGJ5IHJ1bnRpbWUuanMuXG4gIHRyeSB7XG4gICAgZGVsZXRlIGcucmVnZW5lcmF0b3JSdW50aW1lO1xuICB9IGNhdGNoKGUpIHtcbiAgICBnLnJlZ2VuZXJhdG9yUnVudGltZSA9IHVuZGVmaW5lZDtcbiAgfVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL3JlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZS1tb2R1bGUuanNcbi8vIG1vZHVsZSBpZCA9IC4uL25vZGVfbW9kdWxlcy9yZWdlbmVyYXRvci1ydW50aW1lL3J1bnRpbWUtbW9kdWxlLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gbWFpbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE0LXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuIShmdW5jdGlvbihnbG9iYWwpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgdmFyIE9wID0gT2JqZWN0LnByb3RvdHlwZTtcbiAgdmFyIGhhc093biA9IE9wLmhhc093blByb3BlcnR5O1xuICB2YXIgdW5kZWZpbmVkOyAvLyBNb3JlIGNvbXByZXNzaWJsZSB0aGFuIHZvaWQgMC5cbiAgdmFyICRTeW1ib2wgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgPyBTeW1ib2wgOiB7fTtcbiAgdmFyIGl0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5pdGVyYXRvciB8fCBcIkBAaXRlcmF0b3JcIjtcbiAgdmFyIGFzeW5jSXRlcmF0b3JTeW1ib2wgPSAkU3ltYm9sLmFzeW5jSXRlcmF0b3IgfHwgXCJAQGFzeW5jSXRlcmF0b3JcIjtcbiAgdmFyIHRvU3RyaW5nVGFnU3ltYm9sID0gJFN5bWJvbC50b1N0cmluZ1RhZyB8fCBcIkBAdG9TdHJpbmdUYWdcIjtcblxuICB2YXIgaW5Nb2R1bGUgPSB0eXBlb2YgbW9kdWxlID09PSBcIm9iamVjdFwiO1xuICB2YXIgcnVudGltZSA9IGdsb2JhbC5yZWdlbmVyYXRvclJ1bnRpbWU7XG4gIGlmIChydW50aW1lKSB7XG4gICAgaWYgKGluTW9kdWxlKSB7XG4gICAgICAvLyBJZiByZWdlbmVyYXRvclJ1bnRpbWUgaXMgZGVmaW5lZCBnbG9iYWxseSBhbmQgd2UncmUgaW4gYSBtb2R1bGUsXG4gICAgICAvLyBtYWtlIHRoZSBleHBvcnRzIG9iamVjdCBpZGVudGljYWwgdG8gcmVnZW5lcmF0b3JSdW50aW1lLlxuICAgICAgbW9kdWxlLmV4cG9ydHMgPSBydW50aW1lO1xuICAgIH1cbiAgICAvLyBEb24ndCBib3RoZXIgZXZhbHVhdGluZyB0aGUgcmVzdCBvZiB0aGlzIGZpbGUgaWYgdGhlIHJ1bnRpbWUgd2FzXG4gICAgLy8gYWxyZWFkeSBkZWZpbmVkIGdsb2JhbGx5LlxuICAgIHJldHVybjtcbiAgfVxuXG4gIC8vIERlZmluZSB0aGUgcnVudGltZSBnbG9iYWxseSAoYXMgZXhwZWN0ZWQgYnkgZ2VuZXJhdGVkIGNvZGUpIGFzIGVpdGhlclxuICAvLyBtb2R1bGUuZXhwb3J0cyAoaWYgd2UncmUgaW4gYSBtb2R1bGUpIG9yIGEgbmV3LCBlbXB0eSBvYmplY3QuXG4gIHJ1bnRpbWUgPSBnbG9iYWwucmVnZW5lcmF0b3JSdW50aW1lID0gaW5Nb2R1bGUgPyBtb2R1bGUuZXhwb3J0cyA6IHt9O1xuXG4gIGZ1bmN0aW9uIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpIHtcbiAgICAvLyBJZiBvdXRlckZuIHByb3ZpZGVkIGFuZCBvdXRlckZuLnByb3RvdHlwZSBpcyBhIEdlbmVyYXRvciwgdGhlbiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvci5cbiAgICB2YXIgcHJvdG9HZW5lcmF0b3IgPSBvdXRlckZuICYmIG91dGVyRm4ucHJvdG90eXBlIGluc3RhbmNlb2YgR2VuZXJhdG9yID8gb3V0ZXJGbiA6IEdlbmVyYXRvcjtcbiAgICB2YXIgZ2VuZXJhdG9yID0gT2JqZWN0LmNyZWF0ZShwcm90b0dlbmVyYXRvci5wcm90b3R5cGUpO1xuICAgIHZhciBjb250ZXh0ID0gbmV3IENvbnRleHQodHJ5TG9jc0xpc3QgfHwgW10pO1xuXG4gICAgLy8gVGhlIC5faW52b2tlIG1ldGhvZCB1bmlmaWVzIHRoZSBpbXBsZW1lbnRhdGlvbnMgb2YgdGhlIC5uZXh0LFxuICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gbWV0aG9kcy5cbiAgICBnZW5lcmF0b3IuX2ludm9rZSA9IG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gZ2VuZXJhdG9yO1xuICB9XG4gIHJ1bnRpbWUud3JhcCA9IHdyYXA7XG5cbiAgLy8gVHJ5L2NhdGNoIGhlbHBlciB0byBtaW5pbWl6ZSBkZW9wdGltaXphdGlvbnMuIFJldHVybnMgYSBjb21wbGV0aW9uXG4gIC8vIHJlY29yZCBsaWtlIGNvbnRleHQudHJ5RW50cmllc1tpXS5jb21wbGV0aW9uLiBUaGlzIGludGVyZmFjZSBjb3VsZFxuICAvLyBoYXZlIGJlZW4gKGFuZCB3YXMgcHJldmlvdXNseSkgZGVzaWduZWQgdG8gdGFrZSBhIGNsb3N1cmUgdG8gYmVcbiAgLy8gaW52b2tlZCB3aXRob3V0IGFyZ3VtZW50cywgYnV0IGluIGFsbCB0aGUgY2FzZXMgd2UgY2FyZSBhYm91dCB3ZVxuICAvLyBhbHJlYWR5IGhhdmUgYW4gZXhpc3RpbmcgbWV0aG9kIHdlIHdhbnQgdG8gY2FsbCwgc28gdGhlcmUncyBubyBuZWVkXG4gIC8vIHRvIGNyZWF0ZSBhIG5ldyBmdW5jdGlvbiBvYmplY3QuIFdlIGNhbiBldmVuIGdldCBhd2F5IHdpdGggYXNzdW1pbmdcbiAgLy8gdGhlIG1ldGhvZCB0YWtlcyBleGFjdGx5IG9uZSBhcmd1bWVudCwgc2luY2UgdGhhdCBoYXBwZW5zIHRvIGJlIHRydWVcbiAgLy8gaW4gZXZlcnkgY2FzZSwgc28gd2UgZG9uJ3QgaGF2ZSB0byB0b3VjaCB0aGUgYXJndW1lbnRzIG9iamVjdC4gVGhlXG4gIC8vIG9ubHkgYWRkaXRpb25hbCBhbGxvY2F0aW9uIHJlcXVpcmVkIGlzIHRoZSBjb21wbGV0aW9uIHJlY29yZCwgd2hpY2hcbiAgLy8gaGFzIGEgc3RhYmxlIHNoYXBlIGFuZCBzbyBob3BlZnVsbHkgc2hvdWxkIGJlIGNoZWFwIHRvIGFsbG9jYXRlLlxuICBmdW5jdGlvbiB0cnlDYXRjaChmbiwgb2JqLCBhcmcpIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIHsgdHlwZTogXCJub3JtYWxcIiwgYXJnOiBmbi5jYWxsKG9iaiwgYXJnKSB9O1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIHsgdHlwZTogXCJ0aHJvd1wiLCBhcmc6IGVyciB9O1xuICAgIH1cbiAgfVxuXG4gIHZhciBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0ID0gXCJzdXNwZW5kZWRTdGFydFwiO1xuICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRZaWVsZCA9IFwic3VzcGVuZGVkWWllbGRcIjtcbiAgdmFyIEdlblN0YXRlRXhlY3V0aW5nID0gXCJleGVjdXRpbmdcIjtcbiAgdmFyIEdlblN0YXRlQ29tcGxldGVkID0gXCJjb21wbGV0ZWRcIjtcblxuICAvLyBSZXR1cm5pbmcgdGhpcyBvYmplY3QgZnJvbSB0aGUgaW5uZXJGbiBoYXMgdGhlIHNhbWUgZWZmZWN0IGFzXG4gIC8vIGJyZWFraW5nIG91dCBvZiB0aGUgZGlzcGF0Y2ggc3dpdGNoIHN0YXRlbWVudC5cbiAgdmFyIENvbnRpbnVlU2VudGluZWwgPSB7fTtcblxuICAvLyBEdW1teSBjb25zdHJ1Y3RvciBmdW5jdGlvbnMgdGhhdCB3ZSB1c2UgYXMgdGhlIC5jb25zdHJ1Y3RvciBhbmRcbiAgLy8gLmNvbnN0cnVjdG9yLnByb3RvdHlwZSBwcm9wZXJ0aWVzIGZvciBmdW5jdGlvbnMgdGhhdCByZXR1cm4gR2VuZXJhdG9yXG4gIC8vIG9iamVjdHMuIEZvciBmdWxsIHNwZWMgY29tcGxpYW5jZSwgeW91IG1heSB3aXNoIHRvIGNvbmZpZ3VyZSB5b3VyXG4gIC8vIG1pbmlmaWVyIG5vdCB0byBtYW5nbGUgdGhlIG5hbWVzIG9mIHRoZXNlIHR3byBmdW5jdGlvbnMuXG4gIGZ1bmN0aW9uIEdlbmVyYXRvcigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uKCkge31cbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUoKSB7fVxuXG4gIC8vIFRoaXMgaXMgYSBwb2x5ZmlsbCBmb3IgJUl0ZXJhdG9yUHJvdG90eXBlJSBmb3IgZW52aXJvbm1lbnRzIHRoYXRcbiAgLy8gZG9uJ3QgbmF0aXZlbHkgc3VwcG9ydCBpdC5cbiAgdmFyIEl0ZXJhdG9yUHJvdG90eXBlID0ge307XG4gIEl0ZXJhdG9yUHJvdG90eXBlW2l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICB2YXIgZ2V0UHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Y7XG4gIHZhciBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSA9IGdldFByb3RvICYmIGdldFByb3RvKGdldFByb3RvKHZhbHVlcyhbXSkpKTtcbiAgaWYgKE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlICYmXG4gICAgICBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSAhPT0gT3AgJiZcbiAgICAgIGhhc093bi5jYWxsKE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlLCBpdGVyYXRvclN5bWJvbCkpIHtcbiAgICAvLyBUaGlzIGVudmlyb25tZW50IGhhcyBhIG5hdGl2ZSAlSXRlcmF0b3JQcm90b3R5cGUlOyB1c2UgaXQgaW5zdGVhZFxuICAgIC8vIG9mIHRoZSBwb2x5ZmlsbC5cbiAgICBJdGVyYXRvclByb3RvdHlwZSA9IE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlO1xuICB9XG5cbiAgdmFyIEdwID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUucHJvdG90eXBlID1cbiAgICBHZW5lcmF0b3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShJdGVyYXRvclByb3RvdHlwZSk7XG4gIEdlbmVyYXRvckZ1bmN0aW9uLnByb3RvdHlwZSA9IEdwLmNvbnN0cnVjdG9yID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGU7XG4gIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLmNvbnN0cnVjdG9yID0gR2VuZXJhdG9yRnVuY3Rpb247XG4gIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlW3RvU3RyaW5nVGFnU3ltYm9sXSA9XG4gICAgR2VuZXJhdG9yRnVuY3Rpb24uZGlzcGxheU5hbWUgPSBcIkdlbmVyYXRvckZ1bmN0aW9uXCI7XG5cbiAgLy8gSGVscGVyIGZvciBkZWZpbmluZyB0aGUgLm5leHQsIC50aHJvdywgYW5kIC5yZXR1cm4gbWV0aG9kcyBvZiB0aGVcbiAgLy8gSXRlcmF0b3IgaW50ZXJmYWNlIGluIHRlcm1zIG9mIGEgc2luZ2xlIC5faW52b2tlIG1ldGhvZC5cbiAgZnVuY3Rpb24gZGVmaW5lSXRlcmF0b3JNZXRob2RzKHByb3RvdHlwZSkge1xuICAgIFtcIm5leHRcIiwgXCJ0aHJvd1wiLCBcInJldHVyblwiXS5mb3JFYWNoKGZ1bmN0aW9uKG1ldGhvZCkge1xuICAgICAgcHJvdG90eXBlW21ldGhvZF0gPSBmdW5jdGlvbihhcmcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ludm9rZShtZXRob2QsIGFyZyk7XG4gICAgICB9O1xuICAgIH0pO1xuICB9XG5cbiAgcnVudGltZS5pc0dlbmVyYXRvckZ1bmN0aW9uID0gZnVuY3Rpb24oZ2VuRnVuKSB7XG4gICAgdmFyIGN0b3IgPSB0eXBlb2YgZ2VuRnVuID09PSBcImZ1bmN0aW9uXCIgJiYgZ2VuRnVuLmNvbnN0cnVjdG9yO1xuICAgIHJldHVybiBjdG9yXG4gICAgICA/IGN0b3IgPT09IEdlbmVyYXRvckZ1bmN0aW9uIHx8XG4gICAgICAgIC8vIEZvciB0aGUgbmF0aXZlIEdlbmVyYXRvckZ1bmN0aW9uIGNvbnN0cnVjdG9yLCB0aGUgYmVzdCB3ZSBjYW5cbiAgICAgICAgLy8gZG8gaXMgdG8gY2hlY2sgaXRzIC5uYW1lIHByb3BlcnR5LlxuICAgICAgICAoY3Rvci5kaXNwbGF5TmFtZSB8fCBjdG9yLm5hbWUpID09PSBcIkdlbmVyYXRvckZ1bmN0aW9uXCJcbiAgICAgIDogZmFsc2U7XG4gIH07XG5cbiAgcnVudGltZS5tYXJrID0gZnVuY3Rpb24oZ2VuRnVuKSB7XG4gICAgaWYgKE9iamVjdC5zZXRQcm90b3R5cGVPZikge1xuICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKGdlbkZ1biwgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBnZW5GdW4uX19wcm90b19fID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGU7XG4gICAgICBpZiAoISh0b1N0cmluZ1RhZ1N5bWJvbCBpbiBnZW5GdW4pKSB7XG4gICAgICAgIGdlbkZ1blt0b1N0cmluZ1RhZ1N5bWJvbF0gPSBcIkdlbmVyYXRvckZ1bmN0aW9uXCI7XG4gICAgICB9XG4gICAgfVxuICAgIGdlbkZ1bi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEdwKTtcbiAgICByZXR1cm4gZ2VuRnVuO1xuICB9O1xuXG4gIC8vIFdpdGhpbiB0aGUgYm9keSBvZiBhbnkgYXN5bmMgZnVuY3Rpb24sIGBhd2FpdCB4YCBpcyB0cmFuc2Zvcm1lZCB0b1xuICAvLyBgeWllbGQgcmVnZW5lcmF0b3JSdW50aW1lLmF3cmFwKHgpYCwgc28gdGhhdCB0aGUgcnVudGltZSBjYW4gdGVzdFxuICAvLyBgaGFzT3duLmNhbGwodmFsdWUsIFwiX19hd2FpdFwiKWAgdG8gZGV0ZXJtaW5lIGlmIHRoZSB5aWVsZGVkIHZhbHVlIGlzXG4gIC8vIG1lYW50IHRvIGJlIGF3YWl0ZWQuXG4gIHJ1bnRpbWUuYXdyYXAgPSBmdW5jdGlvbihhcmcpIHtcbiAgICByZXR1cm4geyBfX2F3YWl0OiBhcmcgfTtcbiAgfTtcblxuICBmdW5jdGlvbiBBc3luY0l0ZXJhdG9yKGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goZ2VuZXJhdG9yW21ldGhvZF0sIGdlbmVyYXRvciwgYXJnKTtcbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHJlamVjdChyZWNvcmQuYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciByZXN1bHQgPSByZWNvcmQuYXJnO1xuICAgICAgICB2YXIgdmFsdWUgPSByZXN1bHQudmFsdWU7XG4gICAgICAgIGlmICh2YWx1ZSAmJlxuICAgICAgICAgICAgdHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiICYmXG4gICAgICAgICAgICBoYXNPd24uY2FsbCh2YWx1ZSwgXCJfX2F3YWl0XCIpKSB7XG4gICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh2YWx1ZS5fX2F3YWl0KS50aGVuKGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgICBpbnZva2UoXCJuZXh0XCIsIHZhbHVlLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0sIGZ1bmN0aW9uKGVycikge1xuICAgICAgICAgICAgaW52b2tlKFwidGhyb3dcIiwgZXJyLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh2YWx1ZSkudGhlbihmdW5jdGlvbih1bndyYXBwZWQpIHtcbiAgICAgICAgICAvLyBXaGVuIGEgeWllbGRlZCBQcm9taXNlIGlzIHJlc29sdmVkLCBpdHMgZmluYWwgdmFsdWUgYmVjb21lc1xuICAgICAgICAgIC8vIHRoZSAudmFsdWUgb2YgdGhlIFByb21pc2U8e3ZhbHVlLGRvbmV9PiByZXN1bHQgZm9yIHRoZVxuICAgICAgICAgIC8vIGN1cnJlbnQgaXRlcmF0aW9uLlxuICAgICAgICAgIHJlc3VsdC52YWx1ZSA9IHVud3JhcHBlZDtcbiAgICAgICAgICByZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgIH0sIGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICAgICAgLy8gSWYgYSByZWplY3RlZCBQcm9taXNlIHdhcyB5aWVsZGVkLCB0aHJvdyB0aGUgcmVqZWN0aW9uIGJhY2tcbiAgICAgICAgICAvLyBpbnRvIHRoZSBhc3luYyBnZW5lcmF0b3IgZnVuY3Rpb24gc28gaXQgY2FuIGJlIGhhbmRsZWQgdGhlcmUuXG4gICAgICAgICAgcmV0dXJuIGludm9rZShcInRocm93XCIsIGVycm9yLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgcHJldmlvdXNQcm9taXNlO1xuXG4gICAgZnVuY3Rpb24gZW5xdWV1ZShtZXRob2QsIGFyZykge1xuICAgICAgZnVuY3Rpb24gY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICBpbnZva2UobWV0aG9kLCBhcmcsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcHJldmlvdXNQcm9taXNlID1cbiAgICAgICAgLy8gSWYgZW5xdWV1ZSBoYXMgYmVlbiBjYWxsZWQgYmVmb3JlLCB0aGVuIHdlIHdhbnQgdG8gd2FpdCB1bnRpbFxuICAgICAgICAvLyBhbGwgcHJldmlvdXMgUHJvbWlzZXMgaGF2ZSBiZWVuIHJlc29sdmVkIGJlZm9yZSBjYWxsaW5nIGludm9rZSxcbiAgICAgICAgLy8gc28gdGhhdCByZXN1bHRzIGFyZSBhbHdheXMgZGVsaXZlcmVkIGluIHRoZSBjb3JyZWN0IG9yZGVyLiBJZlxuICAgICAgICAvLyBlbnF1ZXVlIGhhcyBub3QgYmVlbiBjYWxsZWQgYmVmb3JlLCB0aGVuIGl0IGlzIGltcG9ydGFudCB0b1xuICAgICAgICAvLyBjYWxsIGludm9rZSBpbW1lZGlhdGVseSwgd2l0aG91dCB3YWl0aW5nIG9uIGEgY2FsbGJhY2sgdG8gZmlyZSxcbiAgICAgICAgLy8gc28gdGhhdCB0aGUgYXN5bmMgZ2VuZXJhdG9yIGZ1bmN0aW9uIGhhcyB0aGUgb3Bwb3J0dW5pdHkgdG8gZG9cbiAgICAgICAgLy8gYW55IG5lY2Vzc2FyeSBzZXR1cCBpbiBhIHByZWRpY3RhYmxlIHdheS4gVGhpcyBwcmVkaWN0YWJpbGl0eVxuICAgICAgICAvLyBpcyB3aHkgdGhlIFByb21pc2UgY29uc3RydWN0b3Igc3luY2hyb25vdXNseSBpbnZva2VzIGl0c1xuICAgICAgICAvLyBleGVjdXRvciBjYWxsYmFjaywgYW5kIHdoeSBhc3luYyBmdW5jdGlvbnMgc3luY2hyb25vdXNseVxuICAgICAgICAvLyBleGVjdXRlIGNvZGUgYmVmb3JlIHRoZSBmaXJzdCBhd2FpdC4gU2luY2Ugd2UgaW1wbGVtZW50IHNpbXBsZVxuICAgICAgICAvLyBhc3luYyBmdW5jdGlvbnMgaW4gdGVybXMgb2YgYXN5bmMgZ2VuZXJhdG9ycywgaXQgaXMgZXNwZWNpYWxseVxuICAgICAgICAvLyBpbXBvcnRhbnQgdG8gZ2V0IHRoaXMgcmlnaHQsIGV2ZW4gdGhvdWdoIGl0IHJlcXVpcmVzIGNhcmUuXG4gICAgICAgIHByZXZpb3VzUHJvbWlzZSA/IHByZXZpb3VzUHJvbWlzZS50aGVuKFxuICAgICAgICAgIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnLFxuICAgICAgICAgIC8vIEF2b2lkIHByb3BhZ2F0aW5nIGZhaWx1cmVzIHRvIFByb21pc2VzIHJldHVybmVkIGJ5IGxhdGVyXG4gICAgICAgICAgLy8gaW52b2NhdGlvbnMgb2YgdGhlIGl0ZXJhdG9yLlxuICAgICAgICAgIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnXG4gICAgICAgICkgOiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpO1xuICAgIH1cblxuICAgIC8vIERlZmluZSB0aGUgdW5pZmllZCBoZWxwZXIgbWV0aG9kIHRoYXQgaXMgdXNlZCB0byBpbXBsZW1lbnQgLm5leHQsXG4gICAgLy8gLnRocm93LCBhbmQgLnJldHVybiAoc2VlIGRlZmluZUl0ZXJhdG9yTWV0aG9kcykuXG4gICAgdGhpcy5faW52b2tlID0gZW5xdWV1ZTtcbiAgfVxuXG4gIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhBc3luY0l0ZXJhdG9yLnByb3RvdHlwZSk7XG4gIEFzeW5jSXRlcmF0b3IucHJvdG90eXBlW2FzeW5jSXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuICBydW50aW1lLkFzeW5jSXRlcmF0b3IgPSBBc3luY0l0ZXJhdG9yO1xuXG4gIC8vIE5vdGUgdGhhdCBzaW1wbGUgYXN5bmMgZnVuY3Rpb25zIGFyZSBpbXBsZW1lbnRlZCBvbiB0b3Agb2ZcbiAgLy8gQXN5bmNJdGVyYXRvciBvYmplY3RzOyB0aGV5IGp1c3QgcmV0dXJuIGEgUHJvbWlzZSBmb3IgdGhlIHZhbHVlIG9mXG4gIC8vIHRoZSBmaW5hbCByZXN1bHQgcHJvZHVjZWQgYnkgdGhlIGl0ZXJhdG9yLlxuICBydW50aW1lLmFzeW5jID0gZnVuY3Rpb24oaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpIHtcbiAgICB2YXIgaXRlciA9IG5ldyBBc3luY0l0ZXJhdG9yKFxuICAgICAgd3JhcChpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdClcbiAgICApO1xuXG4gICAgcmV0dXJuIHJ1bnRpbWUuaXNHZW5lcmF0b3JGdW5jdGlvbihvdXRlckZuKVxuICAgICAgPyBpdGVyIC8vIElmIG91dGVyRm4gaXMgYSBnZW5lcmF0b3IsIHJldHVybiB0aGUgZnVsbCBpdGVyYXRvci5cbiAgICAgIDogaXRlci5uZXh0KCkudGhlbihmdW5jdGlvbihyZXN1bHQpIHtcbiAgICAgICAgICByZXR1cm4gcmVzdWx0LmRvbmUgPyByZXN1bHQudmFsdWUgOiBpdGVyLm5leHQoKTtcbiAgICAgICAgfSk7XG4gIH07XG5cbiAgZnVuY3Rpb24gbWFrZUludm9rZU1ldGhvZChpbm5lckZuLCBzZWxmLCBjb250ZXh0KSB7XG4gICAgdmFyIHN0YXRlID0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydDtcblxuICAgIHJldHVybiBmdW5jdGlvbiBpbnZva2UobWV0aG9kLCBhcmcpIHtcbiAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVFeGVjdXRpbmcpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgcnVubmluZ1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZUNvbXBsZXRlZCkge1xuICAgICAgICBpZiAobWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICB0aHJvdyBhcmc7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBCZSBmb3JnaXZpbmcsIHBlciAyNS4zLjMuMy4zIG9mIHRoZSBzcGVjOlxuICAgICAgICAvLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtZ2VuZXJhdG9ycmVzdW1lXG4gICAgICAgIHJldHVybiBkb25lUmVzdWx0KCk7XG4gICAgICB9XG5cbiAgICAgIGNvbnRleHQubWV0aG9kID0gbWV0aG9kO1xuICAgICAgY29udGV4dC5hcmcgPSBhcmc7XG5cbiAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgIHZhciBkZWxlZ2F0ZSA9IGNvbnRleHQuZGVsZWdhdGU7XG4gICAgICAgIGlmIChkZWxlZ2F0ZSkge1xuICAgICAgICAgIHZhciBkZWxlZ2F0ZVJlc3VsdCA9IG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpO1xuICAgICAgICAgIGlmIChkZWxlZ2F0ZVJlc3VsdCkge1xuICAgICAgICAgICAgaWYgKGRlbGVnYXRlUmVzdWx0ID09PSBDb250aW51ZVNlbnRpbmVsKSBjb250aW51ZTtcbiAgICAgICAgICAgIHJldHVybiBkZWxlZ2F0ZVJlc3VsdDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwibmV4dFwiKSB7XG4gICAgICAgICAgLy8gU2V0dGluZyBjb250ZXh0Ll9zZW50IGZvciBsZWdhY3kgc3VwcG9ydCBvZiBCYWJlbCdzXG4gICAgICAgICAgLy8gZnVuY3Rpb24uc2VudCBpbXBsZW1lbnRhdGlvbi5cbiAgICAgICAgICBjb250ZXh0LnNlbnQgPSBjb250ZXh0Ll9zZW50ID0gY29udGV4dC5hcmc7XG5cbiAgICAgICAgfSBlbHNlIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0KSB7XG4gICAgICAgICAgICBzdGF0ZSA9IEdlblN0YXRlQ29tcGxldGVkO1xuICAgICAgICAgICAgdGhyb3cgY29udGV4dC5hcmc7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihjb250ZXh0LmFyZyk7XG5cbiAgICAgICAgfSBlbHNlIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJyZXR1cm5cIikge1xuICAgICAgICAgIGNvbnRleHQuYWJydXB0KFwicmV0dXJuXCIsIGNvbnRleHQuYXJnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN0YXRlID0gR2VuU3RhdGVFeGVjdXRpbmc7XG5cbiAgICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpO1xuICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwibm9ybWFsXCIpIHtcbiAgICAgICAgICAvLyBJZiBhbiBleGNlcHRpb24gaXMgdGhyb3duIGZyb20gaW5uZXJGbiwgd2UgbGVhdmUgc3RhdGUgPT09XG4gICAgICAgICAgLy8gR2VuU3RhdGVFeGVjdXRpbmcgYW5kIGxvb3AgYmFjayBmb3IgYW5vdGhlciBpbnZvY2F0aW9uLlxuICAgICAgICAgIHN0YXRlID0gY29udGV4dC5kb25lXG4gICAgICAgICAgICA/IEdlblN0YXRlQ29tcGxldGVkXG4gICAgICAgICAgICA6IEdlblN0YXRlU3VzcGVuZGVkWWllbGQ7XG5cbiAgICAgICAgICBpZiAocmVjb3JkLmFyZyA9PT0gQ29udGludWVTZW50aW5lbCkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHZhbHVlOiByZWNvcmQuYXJnLFxuICAgICAgICAgICAgZG9uZTogY29udGV4dC5kb25lXG4gICAgICAgICAgfTtcblxuICAgICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICBzdGF0ZSA9IEdlblN0YXRlQ29tcGxldGVkO1xuICAgICAgICAgIC8vIERpc3BhdGNoIHRoZSBleGNlcHRpb24gYnkgbG9vcGluZyBiYWNrIGFyb3VuZCB0byB0aGVcbiAgICAgICAgICAvLyBjb250ZXh0LmRpc3BhdGNoRXhjZXB0aW9uKGNvbnRleHQuYXJnKSBjYWxsIGFib3ZlLlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gIH1cblxuICAvLyBDYWxsIGRlbGVnYXRlLml0ZXJhdG9yW2NvbnRleHQubWV0aG9kXShjb250ZXh0LmFyZykgYW5kIGhhbmRsZSB0aGVcbiAgLy8gcmVzdWx0LCBlaXRoZXIgYnkgcmV0dXJuaW5nIGEgeyB2YWx1ZSwgZG9uZSB9IHJlc3VsdCBmcm9tIHRoZVxuICAvLyBkZWxlZ2F0ZSBpdGVyYXRvciwgb3IgYnkgbW9kaWZ5aW5nIGNvbnRleHQubWV0aG9kIGFuZCBjb250ZXh0LmFyZyxcbiAgLy8gc2V0dGluZyBjb250ZXh0LmRlbGVnYXRlIHRvIG51bGwsIGFuZCByZXR1cm5pbmcgdGhlIENvbnRpbnVlU2VudGluZWwuXG4gIGZ1bmN0aW9uIG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpIHtcbiAgICB2YXIgbWV0aG9kID0gZGVsZWdhdGUuaXRlcmF0b3JbY29udGV4dC5tZXRob2RdO1xuICAgIGlmIChtZXRob2QgPT09IHVuZGVmaW5lZCkge1xuICAgICAgLy8gQSAudGhyb3cgb3IgLnJldHVybiB3aGVuIHRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBoYXMgbm8gLnRocm93XG4gICAgICAvLyBtZXRob2QgYWx3YXlzIHRlcm1pbmF0ZXMgdGhlIHlpZWxkKiBsb29wLlxuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG5cbiAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIGlmIChkZWxlZ2F0ZS5pdGVyYXRvci5yZXR1cm4pIHtcbiAgICAgICAgICAvLyBJZiB0aGUgZGVsZWdhdGUgaXRlcmF0b3IgaGFzIGEgcmV0dXJuIG1ldGhvZCwgZ2l2ZSBpdCBhXG4gICAgICAgICAgLy8gY2hhbmNlIHRvIGNsZWFuIHVwLlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJyZXR1cm5cIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgICBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KTtcblxuICAgICAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgICAvLyBJZiBtYXliZUludm9rZURlbGVnYXRlKGNvbnRleHQpIGNoYW5nZWQgY29udGV4dC5tZXRob2QgZnJvbVxuICAgICAgICAgICAgLy8gXCJyZXR1cm5cIiB0byBcInRocm93XCIsIGxldCB0aGF0IG92ZXJyaWRlIHRoZSBUeXBlRXJyb3IgYmVsb3cuXG4gICAgICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgY29udGV4dC5hcmcgPSBuZXcgVHlwZUVycm9yKFxuICAgICAgICAgIFwiVGhlIGl0ZXJhdG9yIGRvZXMgbm90IHByb3ZpZGUgYSAndGhyb3cnIG1ldGhvZFwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKG1ldGhvZCwgZGVsZWdhdGUuaXRlcmF0b3IsIGNvbnRleHQuYXJnKTtcblxuICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgIGNvbnRleHQuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgdmFyIGluZm8gPSByZWNvcmQuYXJnO1xuXG4gICAgaWYgKCEgaW5mbykge1xuICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICBjb250ZXh0LmFyZyA9IG5ldyBUeXBlRXJyb3IoXCJpdGVyYXRvciByZXN1bHQgaXMgbm90IGFuIG9iamVjdFwiKTtcbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgaWYgKGluZm8uZG9uZSkge1xuICAgICAgLy8gQXNzaWduIHRoZSByZXN1bHQgb2YgdGhlIGZpbmlzaGVkIGRlbGVnYXRlIHRvIHRoZSB0ZW1wb3JhcnlcbiAgICAgIC8vIHZhcmlhYmxlIHNwZWNpZmllZCBieSBkZWxlZ2F0ZS5yZXN1bHROYW1lIChzZWUgZGVsZWdhdGVZaWVsZCkuXG4gICAgICBjb250ZXh0W2RlbGVnYXRlLnJlc3VsdE5hbWVdID0gaW5mby52YWx1ZTtcblxuICAgICAgLy8gUmVzdW1lIGV4ZWN1dGlvbiBhdCB0aGUgZGVzaXJlZCBsb2NhdGlvbiAoc2VlIGRlbGVnYXRlWWllbGQpLlxuICAgICAgY29udGV4dC5uZXh0ID0gZGVsZWdhdGUubmV4dExvYztcblxuICAgICAgLy8gSWYgY29udGV4dC5tZXRob2Qgd2FzIFwidGhyb3dcIiBidXQgdGhlIGRlbGVnYXRlIGhhbmRsZWQgdGhlXG4gICAgICAvLyBleGNlcHRpb24sIGxldCB0aGUgb3V0ZXIgZ2VuZXJhdG9yIHByb2NlZWQgbm9ybWFsbHkuIElmXG4gICAgICAvLyBjb250ZXh0Lm1ldGhvZCB3YXMgXCJuZXh0XCIsIGZvcmdldCBjb250ZXh0LmFyZyBzaW5jZSBpdCBoYXMgYmVlblxuICAgICAgLy8gXCJjb25zdW1lZFwiIGJ5IHRoZSBkZWxlZ2F0ZSBpdGVyYXRvci4gSWYgY29udGV4dC5tZXRob2Qgd2FzXG4gICAgICAvLyBcInJldHVyblwiLCBhbGxvdyB0aGUgb3JpZ2luYWwgLnJldHVybiBjYWxsIHRvIGNvbnRpbnVlIGluIHRoZVxuICAgICAgLy8gb3V0ZXIgZ2VuZXJhdG9yLlxuICAgICAgaWYgKGNvbnRleHQubWV0aG9kICE9PSBcInJldHVyblwiKSB7XG4gICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFJlLXlpZWxkIHRoZSByZXN1bHQgcmV0dXJuZWQgYnkgdGhlIGRlbGVnYXRlIG1ldGhvZC5cbiAgICAgIHJldHVybiBpbmZvO1xuICAgIH1cblxuICAgIC8vIFRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBpcyBmaW5pc2hlZCwgc28gZm9yZ2V0IGl0IGFuZCBjb250aW51ZSB3aXRoXG4gICAgLy8gdGhlIG91dGVyIGdlbmVyYXRvci5cbiAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgfVxuXG4gIC8vIERlZmluZSBHZW5lcmF0b3IucHJvdG90eXBlLntuZXh0LHRocm93LHJldHVybn0gaW4gdGVybXMgb2YgdGhlXG4gIC8vIHVuaWZpZWQgLl9pbnZva2UgaGVscGVyIG1ldGhvZC5cbiAgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEdwKTtcblxuICBHcFt0b1N0cmluZ1RhZ1N5bWJvbF0gPSBcIkdlbmVyYXRvclwiO1xuXG4gIC8vIEEgR2VuZXJhdG9yIHNob3VsZCBhbHdheXMgcmV0dXJuIGl0c2VsZiBhcyB0aGUgaXRlcmF0b3Igb2JqZWN0IHdoZW4gdGhlXG4gIC8vIEBAaXRlcmF0b3IgZnVuY3Rpb24gaXMgY2FsbGVkIG9uIGl0LiBTb21lIGJyb3dzZXJzJyBpbXBsZW1lbnRhdGlvbnMgb2YgdGhlXG4gIC8vIGl0ZXJhdG9yIHByb3RvdHlwZSBjaGFpbiBpbmNvcnJlY3RseSBpbXBsZW1lbnQgdGhpcywgY2F1c2luZyB0aGUgR2VuZXJhdG9yXG4gIC8vIG9iamVjdCB0byBub3QgYmUgcmV0dXJuZWQgZnJvbSB0aGlzIGNhbGwuIFRoaXMgZW5zdXJlcyB0aGF0IGRvZXNuJ3QgaGFwcGVuLlxuICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlZ2VuZXJhdG9yL2lzc3Vlcy8yNzQgZm9yIG1vcmUgZGV0YWlscy5cbiAgR3BbaXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgR3AudG9TdHJpbmcgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gXCJbb2JqZWN0IEdlbmVyYXRvcl1cIjtcbiAgfTtcblxuICBmdW5jdGlvbiBwdXNoVHJ5RW50cnkobG9jcykge1xuICAgIHZhciBlbnRyeSA9IHsgdHJ5TG9jOiBsb2NzWzBdIH07XG5cbiAgICBpZiAoMSBpbiBsb2NzKSB7XG4gICAgICBlbnRyeS5jYXRjaExvYyA9IGxvY3NbMV07XG4gICAgfVxuXG4gICAgaWYgKDIgaW4gbG9jcykge1xuICAgICAgZW50cnkuZmluYWxseUxvYyA9IGxvY3NbMl07XG4gICAgICBlbnRyeS5hZnRlckxvYyA9IGxvY3NbM107XG4gICAgfVxuXG4gICAgdGhpcy50cnlFbnRyaWVzLnB1c2goZW50cnkpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVzZXRUcnlFbnRyeShlbnRyeSkge1xuICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uIHx8IHt9O1xuICAgIHJlY29yZC50eXBlID0gXCJub3JtYWxcIjtcbiAgICBkZWxldGUgcmVjb3JkLmFyZztcbiAgICBlbnRyeS5jb21wbGV0aW9uID0gcmVjb3JkO1xuICB9XG5cbiAgZnVuY3Rpb24gQ29udGV4dCh0cnlMb2NzTGlzdCkge1xuICAgIC8vIFRoZSByb290IGVudHJ5IG9iamVjdCAoZWZmZWN0aXZlbHkgYSB0cnkgc3RhdGVtZW50IHdpdGhvdXQgYSBjYXRjaFxuICAgIC8vIG9yIGEgZmluYWxseSBibG9jaykgZ2l2ZXMgdXMgYSBwbGFjZSB0byBzdG9yZSB2YWx1ZXMgdGhyb3duIGZyb21cbiAgICAvLyBsb2NhdGlvbnMgd2hlcmUgdGhlcmUgaXMgbm8gZW5jbG9zaW5nIHRyeSBzdGF0ZW1lbnQuXG4gICAgdGhpcy50cnlFbnRyaWVzID0gW3sgdHJ5TG9jOiBcInJvb3RcIiB9XTtcbiAgICB0cnlMb2NzTGlzdC5mb3JFYWNoKHB1c2hUcnlFbnRyeSwgdGhpcyk7XG4gICAgdGhpcy5yZXNldCh0cnVlKTtcbiAgfVxuXG4gIHJ1bnRpbWUua2V5cyA9IGZ1bmN0aW9uKG9iamVjdCkge1xuICAgIHZhciBrZXlzID0gW107XG4gICAgZm9yICh2YXIga2V5IGluIG9iamVjdCkge1xuICAgICAga2V5cy5wdXNoKGtleSk7XG4gICAgfVxuICAgIGtleXMucmV2ZXJzZSgpO1xuXG4gICAgLy8gUmF0aGVyIHRoYW4gcmV0dXJuaW5nIGFuIG9iamVjdCB3aXRoIGEgbmV4dCBtZXRob2QsIHdlIGtlZXBcbiAgICAvLyB0aGluZ3Mgc2ltcGxlIGFuZCByZXR1cm4gdGhlIG5leHQgZnVuY3Rpb24gaXRzZWxmLlxuICAgIHJldHVybiBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgd2hpbGUgKGtleXMubGVuZ3RoKSB7XG4gICAgICAgIHZhciBrZXkgPSBrZXlzLnBvcCgpO1xuICAgICAgICBpZiAoa2V5IGluIG9iamVjdCkge1xuICAgICAgICAgIG5leHQudmFsdWUgPSBrZXk7XG4gICAgICAgICAgbmV4dC5kb25lID0gZmFsc2U7XG4gICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gVG8gYXZvaWQgY3JlYXRpbmcgYW4gYWRkaXRpb25hbCBvYmplY3QsIHdlIGp1c3QgaGFuZyB0aGUgLnZhbHVlXG4gICAgICAvLyBhbmQgLmRvbmUgcHJvcGVydGllcyBvZmYgdGhlIG5leHQgZnVuY3Rpb24gb2JqZWN0IGl0c2VsZi4gVGhpc1xuICAgICAgLy8gYWxzbyBlbnN1cmVzIHRoYXQgdGhlIG1pbmlmaWVyIHdpbGwgbm90IGFub255bWl6ZSB0aGUgZnVuY3Rpb24uXG4gICAgICBuZXh0LmRvbmUgPSB0cnVlO1xuICAgICAgcmV0dXJuIG5leHQ7XG4gICAgfTtcbiAgfTtcblxuICBmdW5jdGlvbiB2YWx1ZXMoaXRlcmFibGUpIHtcbiAgICBpZiAoaXRlcmFibGUpIHtcbiAgICAgIHZhciBpdGVyYXRvck1ldGhvZCA9IGl0ZXJhYmxlW2l0ZXJhdG9yU3ltYm9sXTtcbiAgICAgIGlmIChpdGVyYXRvck1ldGhvZCkge1xuICAgICAgICByZXR1cm4gaXRlcmF0b3JNZXRob2QuY2FsbChpdGVyYWJsZSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgaXRlcmFibGUubmV4dCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHJldHVybiBpdGVyYWJsZTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFpc05hTihpdGVyYWJsZS5sZW5ndGgpKSB7XG4gICAgICAgIHZhciBpID0gLTEsIG5leHQgPSBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgICAgIHdoaWxlICgrK2kgPCBpdGVyYWJsZS5sZW5ndGgpIHtcbiAgICAgICAgICAgIGlmIChoYXNPd24uY2FsbChpdGVyYWJsZSwgaSkpIHtcbiAgICAgICAgICAgICAgbmV4dC52YWx1ZSA9IGl0ZXJhYmxlW2ldO1xuICAgICAgICAgICAgICBuZXh0LmRvbmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbmV4dC52YWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICBuZXh0LmRvbmUgPSB0cnVlO1xuXG4gICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIG5leHQubmV4dCA9IG5leHQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gUmV0dXJuIGFuIGl0ZXJhdG9yIHdpdGggbm8gdmFsdWVzLlxuICAgIHJldHVybiB7IG5leHQ6IGRvbmVSZXN1bHQgfTtcbiAgfVxuICBydW50aW1lLnZhbHVlcyA9IHZhbHVlcztcblxuICBmdW5jdGlvbiBkb25lUmVzdWx0KCkge1xuICAgIHJldHVybiB7IHZhbHVlOiB1bmRlZmluZWQsIGRvbmU6IHRydWUgfTtcbiAgfVxuXG4gIENvbnRleHQucHJvdG90eXBlID0ge1xuICAgIGNvbnN0cnVjdG9yOiBDb250ZXh0LFxuXG4gICAgcmVzZXQ6IGZ1bmN0aW9uKHNraXBUZW1wUmVzZXQpIHtcbiAgICAgIHRoaXMucHJldiA9IDA7XG4gICAgICB0aGlzLm5leHQgPSAwO1xuICAgICAgLy8gUmVzZXR0aW5nIGNvbnRleHQuX3NlbnQgZm9yIGxlZ2FjeSBzdXBwb3J0IG9mIEJhYmVsJ3NcbiAgICAgIC8vIGZ1bmN0aW9uLnNlbnQgaW1wbGVtZW50YXRpb24uXG4gICAgICB0aGlzLnNlbnQgPSB0aGlzLl9zZW50ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5kb25lID0gZmFsc2U7XG4gICAgICB0aGlzLmRlbGVnYXRlID0gbnVsbDtcblxuICAgICAgdGhpcy5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgIHRoaXMuYXJnID0gdW5kZWZpbmVkO1xuXG4gICAgICB0aGlzLnRyeUVudHJpZXMuZm9yRWFjaChyZXNldFRyeUVudHJ5KTtcblxuICAgICAgaWYgKCFza2lwVGVtcFJlc2V0KSB7XG4gICAgICAgIGZvciAodmFyIG5hbWUgaW4gdGhpcykge1xuICAgICAgICAgIC8vIE5vdCBzdXJlIGFib3V0IHRoZSBvcHRpbWFsIG9yZGVyIG9mIHRoZXNlIGNvbmRpdGlvbnM6XG4gICAgICAgICAgaWYgKG5hbWUuY2hhckF0KDApID09PSBcInRcIiAmJlxuICAgICAgICAgICAgICBoYXNPd24uY2FsbCh0aGlzLCBuYW1lKSAmJlxuICAgICAgICAgICAgICAhaXNOYU4oK25hbWUuc2xpY2UoMSkpKSB7XG4gICAgICAgICAgICB0aGlzW25hbWVdID0gdW5kZWZpbmVkO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBzdG9wOiBmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMuZG9uZSA9IHRydWU7XG5cbiAgICAgIHZhciByb290RW50cnkgPSB0aGlzLnRyeUVudHJpZXNbMF07XG4gICAgICB2YXIgcm9vdFJlY29yZCA9IHJvb3RFbnRyeS5jb21wbGV0aW9uO1xuICAgICAgaWYgKHJvb3RSZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHRocm93IHJvb3RSZWNvcmQuYXJnO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5ydmFsO1xuICAgIH0sXG5cbiAgICBkaXNwYXRjaEV4Y2VwdGlvbjogZnVuY3Rpb24oZXhjZXB0aW9uKSB7XG4gICAgICBpZiAodGhpcy5kb25lKSB7XG4gICAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICAgIH1cblxuICAgICAgdmFyIGNvbnRleHQgPSB0aGlzO1xuICAgICAgZnVuY3Rpb24gaGFuZGxlKGxvYywgY2F1Z2h0KSB7XG4gICAgICAgIHJlY29yZC50eXBlID0gXCJ0aHJvd1wiO1xuICAgICAgICByZWNvcmQuYXJnID0gZXhjZXB0aW9uO1xuICAgICAgICBjb250ZXh0Lm5leHQgPSBsb2M7XG5cbiAgICAgICAgaWYgKGNhdWdodCkge1xuICAgICAgICAgIC8vIElmIHRoZSBkaXNwYXRjaGVkIGV4Y2VwdGlvbiB3YXMgY2F1Z2h0IGJ5IGEgY2F0Y2ggYmxvY2ssXG4gICAgICAgICAgLy8gdGhlbiBsZXQgdGhhdCBjYXRjaCBibG9jayBoYW5kbGUgdGhlIGV4Y2VwdGlvbiBub3JtYWxseS5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuICEhIGNhdWdodDtcbiAgICAgIH1cblxuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uO1xuXG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPT09IFwicm9vdFwiKSB7XG4gICAgICAgICAgLy8gRXhjZXB0aW9uIHRocm93biBvdXRzaWRlIG9mIGFueSB0cnkgYmxvY2sgdGhhdCBjb3VsZCBoYW5kbGVcbiAgICAgICAgICAvLyBpdCwgc28gc2V0IHRoZSBjb21wbGV0aW9uIHZhbHVlIG9mIHRoZSBlbnRpcmUgZnVuY3Rpb24gdG9cbiAgICAgICAgICAvLyB0aHJvdyB0aGUgZXhjZXB0aW9uLlxuICAgICAgICAgIHJldHVybiBoYW5kbGUoXCJlbmRcIik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZW50cnkudHJ5TG9jIDw9IHRoaXMucHJldikge1xuICAgICAgICAgIHZhciBoYXNDYXRjaCA9IGhhc093bi5jYWxsKGVudHJ5LCBcImNhdGNoTG9jXCIpO1xuICAgICAgICAgIHZhciBoYXNGaW5hbGx5ID0gaGFzT3duLmNhbGwoZW50cnksIFwiZmluYWxseUxvY1wiKTtcblxuICAgICAgICAgIGlmIChoYXNDYXRjaCAmJiBoYXNGaW5hbGx5KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgdHJ1ZSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5maW5hbGx5TG9jKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSBpZiAoaGFzQ2F0Y2gpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5jYXRjaExvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmNhdGNoTG9jLCB0cnVlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSBpZiAoaGFzRmluYWxseSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5maW5hbGx5TG9jKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJ0cnkgc3RhdGVtZW50IHdpdGhvdXQgY2F0Y2ggb3IgZmluYWxseVwiKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgYWJydXB0OiBmdW5jdGlvbih0eXBlLCBhcmcpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkudHJ5TG9jIDw9IHRoaXMucHJldiAmJlxuICAgICAgICAgICAgaGFzT3duLmNhbGwoZW50cnksIFwiZmluYWxseUxvY1wiKSAmJlxuICAgICAgICAgICAgdGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgIHZhciBmaW5hbGx5RW50cnkgPSBlbnRyeTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoZmluYWxseUVudHJ5ICYmXG4gICAgICAgICAgKHR5cGUgPT09IFwiYnJlYWtcIiB8fFxuICAgICAgICAgICB0eXBlID09PSBcImNvbnRpbnVlXCIpICYmXG4gICAgICAgICAgZmluYWxseUVudHJ5LnRyeUxvYyA8PSBhcmcgJiZcbiAgICAgICAgICBhcmcgPD0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgLy8gSWdub3JlIHRoZSBmaW5hbGx5IGVudHJ5IGlmIGNvbnRyb2wgaXMgbm90IGp1bXBpbmcgdG8gYVxuICAgICAgICAvLyBsb2NhdGlvbiBvdXRzaWRlIHRoZSB0cnkvY2F0Y2ggYmxvY2suXG4gICAgICAgIGZpbmFsbHlFbnRyeSA9IG51bGw7XG4gICAgICB9XG5cbiAgICAgIHZhciByZWNvcmQgPSBmaW5hbGx5RW50cnkgPyBmaW5hbGx5RW50cnkuY29tcGxldGlvbiA6IHt9O1xuICAgICAgcmVjb3JkLnR5cGUgPSB0eXBlO1xuICAgICAgcmVjb3JkLmFyZyA9IGFyZztcblxuICAgICAgaWYgKGZpbmFsbHlFbnRyeSkge1xuICAgICAgICB0aGlzLm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICB0aGlzLm5leHQgPSBmaW5hbGx5RW50cnkuZmluYWxseUxvYztcbiAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLmNvbXBsZXRlKHJlY29yZCk7XG4gICAgfSxcblxuICAgIGNvbXBsZXRlOiBmdW5jdGlvbihyZWNvcmQsIGFmdGVyTG9jKSB7XG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICB0aHJvdyByZWNvcmQuYXJnO1xuICAgICAgfVxuXG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwiYnJlYWtcIiB8fFxuICAgICAgICAgIHJlY29yZC50eXBlID09PSBcImNvbnRpbnVlXCIpIHtcbiAgICAgICAgdGhpcy5uZXh0ID0gcmVjb3JkLmFyZztcbiAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgdGhpcy5ydmFsID0gdGhpcy5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgICB0aGlzLm1ldGhvZCA9IFwicmV0dXJuXCI7XG4gICAgICAgIHRoaXMubmV4dCA9IFwiZW5kXCI7XG4gICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcIm5vcm1hbFwiICYmIGFmdGVyTG9jKSB7XG4gICAgICAgIHRoaXMubmV4dCA9IGFmdGVyTG9jO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9LFxuXG4gICAgZmluaXNoOiBmdW5jdGlvbihmaW5hbGx5TG9jKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LmZpbmFsbHlMb2MgPT09IGZpbmFsbHlMb2MpIHtcbiAgICAgICAgICB0aGlzLmNvbXBsZXRlKGVudHJ5LmNvbXBsZXRpb24sIGVudHJ5LmFmdGVyTG9jKTtcbiAgICAgICAgICByZXNldFRyeUVudHJ5KGVudHJ5KTtcbiAgICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBcImNhdGNoXCI6IGZ1bmN0aW9uKHRyeUxvYykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPT09IHRyeUxvYykge1xuICAgICAgICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uO1xuICAgICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgICB2YXIgdGhyb3duID0gcmVjb3JkLmFyZztcbiAgICAgICAgICAgIHJlc2V0VHJ5RW50cnkoZW50cnkpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gdGhyb3duO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFRoZSBjb250ZXh0LmNhdGNoIG1ldGhvZCBtdXN0IG9ubHkgYmUgY2FsbGVkIHdpdGggYSBsb2NhdGlvblxuICAgICAgLy8gYXJndW1lbnQgdGhhdCBjb3JyZXNwb25kcyB0byBhIGtub3duIGNhdGNoIGJsb2NrLlxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiaWxsZWdhbCBjYXRjaCBhdHRlbXB0XCIpO1xuICAgIH0sXG5cbiAgICBkZWxlZ2F0ZVlpZWxkOiBmdW5jdGlvbihpdGVyYWJsZSwgcmVzdWx0TmFtZSwgbmV4dExvYykge1xuICAgICAgdGhpcy5kZWxlZ2F0ZSA9IHtcbiAgICAgICAgaXRlcmF0b3I6IHZhbHVlcyhpdGVyYWJsZSksXG4gICAgICAgIHJlc3VsdE5hbWU6IHJlc3VsdE5hbWUsXG4gICAgICAgIG5leHRMb2M6IG5leHRMb2NcbiAgICAgIH07XG5cbiAgICAgIGlmICh0aGlzLm1ldGhvZCA9PT0gXCJuZXh0XCIpIHtcbiAgICAgICAgLy8gRGVsaWJlcmF0ZWx5IGZvcmdldCB0aGUgbGFzdCBzZW50IHZhbHVlIHNvIHRoYXQgd2UgZG9uJ3RcbiAgICAgICAgLy8gYWNjaWRlbnRhbGx5IHBhc3MgaXQgb24gdG8gdGhlIGRlbGVnYXRlLlxuICAgICAgICB0aGlzLmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuICB9O1xufSkoXG4gIC8vIEluIHNsb3BweSBtb2RlLCB1bmJvdW5kIGB0aGlzYCByZWZlcnMgdG8gdGhlIGdsb2JhbCBvYmplY3QsIGZhbGxiYWNrIHRvXG4gIC8vIEZ1bmN0aW9uIGNvbnN0cnVjdG9yIGlmIHdlJ3JlIGluIGdsb2JhbCBzdHJpY3QgbW9kZS4gVGhhdCBpcyBzYWRseSBhIGZvcm1cbiAgLy8gb2YgaW5kaXJlY3QgZXZhbCB3aGljaCB2aW9sYXRlcyBDb250ZW50IFNlY3VyaXR5IFBvbGljeS5cbiAgKGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzIHx8ICh0eXBlb2Ygc2VsZiA9PT0gXCJvYmplY3RcIiAmJiBzZWxmKTtcbiAgfSkoKSB8fCBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKClcbik7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvcmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lLmpzXG4vLyBtb2R1bGUgaWQgPSAuLi9ub2RlX21vZHVsZXMvcmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gbWFpbiIsImZ1bmN0aW9uIEFzeW5jUmVuZGVyaW5nSW50ZXJydXB0ZWQoKSB7XG4gICAgdGhpcy5tZXNzYWdlID0gJ0FzeW5jIHJlbmRlcmluZyBpbnRlcnJ1cHRlZCc7XG59XG5cbnZhciBwcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEVycm9yLnByb3RvdHlwZSlcbnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IEFzeW5jUmVuZGVyaW5nSW50ZXJydXB0ZWQ7XG5wcm90b3R5cGUuY29uc3RydWN0b3IucHJvdG90eXBlID0gcHJvdG90eXBlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHByb3RvdHlwZS5jb25zdHJ1Y3RvcjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9yZWxha3MvYXN5bmMtcmVuZGVyaW5nLWludGVycnVwdGVkLmpzXG4vLyBtb2R1bGUgaWQgPSAuLi9ub2RlX21vZHVsZXMvcmVsYWtzL2FzeW5jLXJlbmRlcmluZy1pbnRlcnJ1cHRlZC5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IG1haW4iLCJ2YXIgQXN5bmNSZW5kZXJpbmdJbnRlcnJ1cHRlZCA9IHJlcXVpcmUoJy4vYXN5bmMtcmVuZGVyaW5nLWludGVycnVwdGVkJyk7XG52YXIgTWVhbndoaWxlID0gcmVxdWlyZSgnLi9tZWFud2hpbGUnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihSZWFjdCkge1xuXG5mdW5jdGlvbiBSZWxha3NDb21wb25lbnQoKSB7XG59XG5cbnZhciBwcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKFJlYWN0LkNvbXBvbmVudC5wcm90b3R5cGUpO1xucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gUmVsYWtzQ29tcG9uZW50O1xucHJvdG90eXBlLmNvbnN0cnVjdG9yLnByb3RvdHlwZSA9IHByb3RvdHlwZTtcblxuLyoqXG4gKiBSZW5kZXIgY29tcG9uZW50LCBjYWxsaW5nIHJlbmRlckFzeW5jKCkgaWYgbmVjZXNzYXJ5XG4gKlxuICogQHJldHVybiB7UmVhY3RFbGVtZW50fG51bGx9XG4gKi9cbnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgcmVsYWtzID0gdGhpcy5yZWxha3M7XG4gICAgaWYgKCFyZWxha3MpIHtcbiAgICAgICAgY29uc29sZS53YXJuKCdSZWxha3MgY29udGV4dCBpcyBtaXNzaW5nLiBNYWtlIHN1cmUgeW91IGFyZSBjYWxsaW5nIGNvbXBvbmVudFdpbGxNb3VudCgpIGFuZCBjb21wb25lbnRXaWxsVW5tb3VudCgpIG9mIHRoZSBzdXBlcmNsYXNzJyk7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIC8vIHNlZSBpZiByZW5kZXJpbmcgaXMgdHJpZ2dlcmVkIGJ5IHJlc29sdXRpb24gb2YgYSBwcm9taXNlLFxuICAgIC8vIG9yIGJ5IGEgY2FsbCB0byBNZWFud2hpbGUuc2hvdygpXG4gICAgaWYgKHJlbGFrcy5wcm9taXNlZEVsZW1lbnRFeHBlY3RlZCkge1xuICAgICAgICAvLyByZW5kZXIgdGhlIG5ldyBwcm9taXNlZCBlbGVtZW50XG4gICAgICAgIHJlbGFrcy5wcm9taXNlZEVsZW1lbnRFeHBlY3RlZCA9IGZhbHNlO1xuICAgICAgICByZWxha3MucHJvZ3Jlc3NFbGVtZW50ID0gbnVsbDtcbiAgICAgICAgcmVsYWtzLnByb2dyZXNzRWxlbWVudFJlbmRlcmVkID0gbnVsbDtcbiAgICAgICAgcmV0dXJuIHJlbGFrcy5wcm9taXNlZEVsZW1lbnQ7XG4gICAgfSBlbHNlIGlmIChyZWxha3MucHJvZ3Jlc3NFbGVtZW50RXhwZWN0ZWQpIHtcbiAgICAgICAgLy8gcmVuZGVyIHRoZSBuZXcgcHJvZ3Jlc3MgZWxlbWVudFxuICAgICAgICByZWxha3MucHJvZ3Jlc3NFbGVtZW50RXhwZWN0ZWQgPSBmYWxzZTtcbiAgICAgICAgcmVsYWtzLnByb2dyZXNzRWxlbWVudFJlbmRlcmVkID0gcmVsYWtzLnByb2dyZXNzRWxlbWVudDtcbiAgICAgICAgcmV0dXJuIHJlbGFrcy5wcm9ncmVzc0VsZW1lbnQ7XG4gICAgfVxuXG4gICAgLy8gbm9ybWFsIHJlcmVuZGVyaW5nLS13ZSBuZWVkIHRvIGNhbGwgcmVuZGVyQXN5bmMoKVxuICAgIC8vXG4gICAgLy8gZmlyc3QgY2FuY2VsIGFueSB1bmZpbmlzaGVkIHJlbmRlcmluZyBjeWNsZVxuICAgIHZhciBwcmV2aW91c2x5ID0gcmVsYWtzLm1lYW53aGlsZTtcbiAgICBpZiAocHJldmlvdXNseSkge1xuICAgICAgICByZWxha3MubWVhbndoaWxlID0gbnVsbDtcbiAgICAgICAgLy8gdXNlIGEgdHJ5IGJsb2NrLCBpbiBjYXNlIHVzZXItc3VwcGxpZWQgb25DYW5jZWwgaGFuZGxlciBhdHRhY2hlZFxuICAgICAgICAvLyB0byB0aGUgbWVhbndoaWxlIG9iamVjdCB0aHJvd3NcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHByZXZpb3VzbHkuY2FuY2VsKCk7XG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVsYWtzLnByZXZpb3VzID0gcmVsYWtzLmN1cnJlbnQ7XG4gICAgcmVsYWtzLmN1cnJlbnQgPSB7XG4gICAgICAgIHByb3BzOiB0aGlzLnByb3BzLFxuICAgICAgICBzdGF0ZTogdGhpcy5zdGF0ZSB8fCB7fSxcbiAgICB9O1xuXG4gICAgLy8gY3JlYXRlIG5ldyBtZWFud2hpbGUgb2JqZWN0XG4gICAgdmFyIG1lYW53aGlsZSA9IHJlbGFrcy5tZWFud2hpbGUgPSBuZXcgTWVhbndoaWxlKHRoaXMsIHByZXZpb3VzbHkpO1xuXG4gICAgLy8gY2FsbCB1c2VyLWRlZmluZWQgcmVuZGVyQXN5bmMoKSBpbiBhIHRyeS1jYXRjaCBibG9jayB0byBjYXRjaCBwb3RlbnRpYWwgZXJyb3JzXG4gICAgdHJ5IHtcbiAgICAgICAgdmFyIHByb21pc2U7XG4gICAgICAgIGlmICh0aGlzLnJlbmRlckFzeW5jLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgIHByb21pc2UgPSB0aGlzLnJlbmRlckFzeW5jKG1lYW53aGlsZSwgdGhpcy5wcm9wcywgdGhpcy5zdGF0ZSwgdGhpcy5jb250ZXh0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHByb21pc2UgPSB0aGlzLnJlbmRlckFzeW5jKG1lYW53aGlsZSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBmcm9tIGhlcmUgb24sIGFueSBjYWxsIHRvIE1lYW53aGlsZS5zaG93KCkgaXMgYXN5bmNocm9ub3VzXG4gICAgICAgIG1lYW53aGlsZS5zeW5jaHJvbm91cyA9IGZhbHNlO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAvLyBhIHN5bmNocm9ub3VzZSBlcnJvciBvY2N1cnJlZCwgc2hvdyBhbnkgcHJvZ3Jlc3MgbWFkZSBvciB3aGF0IHdhc1xuICAgICAgICAvLyB0aGVyZSBiZWZvcmVcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgICByZWxha3MubWVhbndoaWxlLmNsZWFyKCk7XG4gICAgICAgIHJlbGFrcy5tZWFud2hpbGUgPSBudWxsO1xuICAgICAgICByZXR1cm4gcmVsYWtzLnByb2dyZXNzRWxlbWVudCB8fCByZWxha3MucHJvZ3Jlc3NFbGVtZW50UmVuZGVyZWQgfHwgcmVsYWtzLnByb21pc2VkRWxlbWVudDtcbiAgICB9XG5cbiAgICBpZiAoaXNQcm9taXNlKHByb21pc2UpKSB7XG4gICAgICAgIC8vIHNldCB1cCBoYW5kbGVycyBmb3IgdGhlIHByb21pc2UgcmV0dXJuZWRcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIHJlc29sdmUgPSBmdW5jdGlvbihlbGVtZW50KSB7XG4gICAgICAgICAgICBpZiAobWVhbndoaWxlICE9PSByZWxha3MubWVhbndoaWxlKSB7XG4gICAgICAgICAgICAgICAgLy8gYSBuZXcgcmVuZGVyaW5nIGN5Y2xlIGhhcyBzdGFydGVkXG4gICAgICAgICAgICAgICAgbWVhbndoaWxlLmNhbmNlbCgpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICghX3RoaXMucmVsYWtzKSB7XG4gICAgICAgICAgICAgICAgLy8gY29tcG9uZW50IGhhcyBiZWVuIHVubW91bnRlZFxuICAgICAgICAgICAgICAgIG1lYW53aGlsZS5jYW5jZWwoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gdGVsbCByZW5kZXIoKSB0byBzaG93IHRoZSBlbGVtZW50XG4gICAgICAgICAgICAgICAgbWVhbndoaWxlLmZpbmlzaCgpO1xuICAgICAgICAgICAgICAgIHJlbGFrcy5wcm9taXNlZEVsZW1lbnQgPSBlbGVtZW50O1xuICAgICAgICAgICAgICAgIHJlbGFrcy5wcm9taXNlZEVsZW1lbnRFeHBlY3RlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgcmVsYWtzLm1lYW53aGlsZSA9IG51bGw7XG4gICAgICAgICAgICAgICAgX3RoaXMuZm9yY2VVcGRhdGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgdmFyIHJlamVjdCA9IGZ1bmN0aW9uKGVycikge1xuICAgICAgICAgICAgaWYgKGVyciBpbnN0YW5jZW9mIEFzeW5jUmVuZGVyaW5nSW50ZXJydXB0ZWQpIHtcbiAgICAgICAgICAgICAgICAvLyB0aGUgcmVuZGVyaW5nIGN5Y2xlIHdhcyBpbnRlcnJ1cHRlZC0tZG8gbm90aGluZ1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBkdW1wIHRoZSBlcnJvciBpbnRvIHRoZSBjb25zb2xlIGFuZCByZXR1cm4gd2hhdCBoYXMgYmVlblxuICAgICAgICAgICAgICAgIC8vIHJlbmRlcmVkIHNvIGZhciBvciB3aGF0IHdhcyB0aGVyZSBiZWZvcmVcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICAgICAgICAgICAgdmFyIGVsZW1lbnQgPSByZWxha3MucHJvZ3Jlc3NFbGVtZW50IHx8IHJlbGFrcy5wcm9taXNlZEVsZW1lbnQ7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZShlbGVtZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgcHJvbWlzZS50aGVuKHJlc29sdmUsIHJlamVjdCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgLy8gYWxsb3cgcmVuZGVyQXN5bmMoKSB0byBhY3Qgc3luY2hyb25vdXNseVxuICAgICAgICB2YXIgZWxlbWVudCA9IHByb21pc2U7XG4gICAgICAgIHJlbGFrcy5tZWFud2hpbGUgPSBudWxsO1xuICAgICAgICByZWxha3MucHJvbWlzZWRFbGVtZW50ID0gZWxlbWVudDtcbiAgICAgICAgcmVsYWtzLnByb2dyZXNzRWxlbWVudCA9IG51bGw7XG4gICAgICAgIHJlbGFrcy5wcm9ncmVzc0VsZW1lbnRSZW5kZXJlZCA9IG51bGw7XG4gICAgfVxuXG4gICAgLy8gd2UgaGF2ZSB0cmlnZ2VyZWQgdGhlIGFzeW5jaHJvbml6ZSBvcGVyYXRpb24gYW5kIGFyZSB3YWl0aW5nIGZvciBpdCB0b1xuICAgIC8vIGNvbXBsZXRlOyBpbiB0aGUgbWVhbnRpbWUgd2UgbmVlZCB0byByZXR1cm4gc29tZXRoaW5nXG4gICAgaWYgKHJlbGFrcy5wcm9taXNlZEVsZW1lbnQpIHtcbiAgICAgICAgLy8gc2hvdyB3aGF0IHdhcyB0aGVyZSBiZWZvcmVcbiAgICAgICAgcmV0dXJuIHJlbGFrcy5wcm9taXNlZEVsZW1lbnQ7XG4gICAgfVxuICAgIGlmIChyZWxha3MucHJvZ3Jlc3NFbGVtZW50KSB7XG4gICAgICAgIC8vIGEgcHJvZ3Jlc3MgZWxlbWVudCB3YXMgcHJvdmlkZWQgc3luY2hyb25vdXNseSBieSByZW5kZXJBc3luYygpXG4gICAgICAgIC8vIHdlJ2xsIGRpc3BsYXkgdGhhdCBpZiBkZWxheSBpcyBzZXQgdG8gMFxuICAgICAgICBpZiAobWVhbndoaWxlLnNob3dpbmdQcm9ncmVzcyB8fCBtZWFud2hpbGUuc2hvd2luZ1Byb2dyZXNzSW5pdGlhbGx5KSB7XG4gICAgICAgICAgICByZXR1cm4gcmVsYWtzLnByb2dyZXNzRWxlbWVudDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAocmVsYWtzLnByb2dyZXNzRWxlbWVudFJlbmRlcmVkKSB7XG4gICAgICAgIC8vIHNob3cgdGhlIHByZXZpb3VzIHByb2dyZXNzXG4gICAgICAgIHJldHVybiByZWxha3MucHJvZ3Jlc3NFbGVtZW50UmVuZGVyZWQ7XG4gICAgfVxuICAgIC8vIHVtbSwgd2UgZ290IG5vdGhpbmdcbiAgICByZXR1cm4gbnVsbDtcbn07XG5cbi8qKlxuICogUmV0dXJuIGZhbHNlIGlmIHRoZSBjb21wb25lbnQncyBwcm9wcyBhbmQgc3RhdGUgaGF2ZW4ndCBjaGFuZ2VkLlxuICpcbiAqIEBwYXJhbSAge09iamVjdH0gbmV4dFByb3BzXG4gKiBAcGFyYW0gIHtPYmplY3R9IG5leHRTdGF0ZVxuICpcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKi9cbnByb3RvdHlwZS5zaG91bGRDb21wb25lbnRVcGRhdGUgPSBmdW5jdGlvbihuZXh0UHJvcHMsIG5leHRTdGF0ZSkge1xuICAgIGlmICghY29tcGFyZSh0aGlzLnByb3BzLCBuZXh0UHJvcHMpIHx8ICFjb21wYXJlKHRoaXMuc3RhdGUsIG5leHRTdGF0ZSkpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbn07XG5cbi8qKlxuICogQ3JlYXRlIFJlbGFrcyBjb250ZXh0IG9uIG1vdW50LlxuICovXG5wcm90b3R5cGUuY29tcG9uZW50V2lsbE1vdW50ID0gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5yZWxha3MgPSB7XG4gICAgICAgIHByb2dyZXNzRWxlbWVudDogbnVsbCxcbiAgICAgICAgcHJvZ3Jlc3NFbGVtZW50RXhwZWN0ZWQ6IGZhbHNlLFxuICAgICAgICBwcm9taXNlZEVsZW1lbnQ6IG51bGwsXG4gICAgICAgIHByb21pc2VkRWxlbWVudEV4cGVjdGVkOiBmYWxzZSxcbiAgICAgICAgcHJvZ3Jlc3NFbGVtZW50UmVuZGVyZWQ6IG51bGwsXG4gICAgICAgIG1lYW53aGlsZTogbnVsbCxcbiAgICAgICAgcHJldmlvdXM6IG51bGwsXG4gICAgICAgIGN1cnJlbnQ6IHtcbiAgICAgICAgICAgIHByb3BzOiB7fSxcbiAgICAgICAgICAgIHN0YXRlOiB7fSxcbiAgICAgICAgfSxcbiAgICB9O1xufTtcblxuLyoqXG4gKiBSZW1vdmUgUmVsYWtzIGNvbnRleHQgb24gdW5tb3VudCwgY2FuY2VsaW5nIGFueSBvdXRzdGFuZGluZyBhc3luY2hyb25vdXNcbiAqIHJlbmRlcmluZyBjeWNsZS5cbiAqL1xucHJvdG90eXBlLmNvbXBvbmVudFdpbGxVbm1vdW50ID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHJlbGFrcyA9IHRoaXMucmVsYWtzO1xuICAgIGlmIChyZWxha3MpIHtcbiAgICAgICAgaWYgKHJlbGFrcy5tZWFud2hpbGUpIHtcbiAgICAgICAgICAgIHJlbGFrcy5tZWFud2hpbGUuY2FuY2VsKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yZWxha3MgPSB1bmRlZmluZWQ7XG4gICAgfVxufTtcblxucmV0dXJuIHtcbiAgICBDb21wb25lbnQ6IHByb3RvdHlwZS5jb25zdHJ1Y3RvcixcbiAgICBBc3luY0NvbXBvbmVudDogcHJvdG90eXBlLmNvbnN0cnVjdG9yLFxuICAgIEFzeW5jUmVuZGVyaW5nSW50ZXJydXB0ZWQ6IEFzeW5jUmVuZGVyaW5nSW50ZXJydXB0ZWQsXG4gICAgTWVhbndoaWxlOiBNZWFud2hpbGUsXG59O1xufTtcblxuLyoqXG4gKiBSZXR1cm4gdHJ1ZSBpZiB0aGUgZ2l2ZW4gb2JqZWN0IGlzIGEgcHJvbWlzZVxuICpcbiAqIEBwYXJhbSAge09iamVjdH0gb2JqZWN0XG4gKlxuICogQHJldHVybiBCb29sZWFuXG4gKi9cbmZ1bmN0aW9uIGlzUHJvbWlzZShvYmplY3QpIHtcbiAgICBpZiAob2JqZWN0ICYmIHR5cGVvZihvYmplY3QudGhlbikgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbn1cblxuLyoqXG4gKiBDb21wYXJlIHR3byBvYmplY3RzIHNoYWxsb3dseVxuICpcbiAqIEBwYXJhbSAge09iamVjdH0gcHJldlNldFxuICogQHBhcmFtICB7T2JqZWN0fSBuZXh0U2V0XG4gKlxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqL1xuZnVuY3Rpb24gY29tcGFyZShwcmV2U2V0LCBuZXh0U2V0KSB7XG4gICAgaWYgKHByZXZTZXQgPT09IG5leHRTZXQpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGlmICghcHJldlNldCB8fCAhbmV4dFNldCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGZvciAodmFyIGtleSBpbiBuZXh0U2V0KSB7XG4gICAgICAgIHZhciBwcmV2ID0gcHJldlNldFtrZXldO1xuICAgICAgICB2YXIgbmV4dCA9IG5leHRTZXRba2V5XTtcbiAgICAgICAgaWYgKG5leHQgIT09IHByZXYpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9yZWxha3MvY2xhc3MuanNcbi8vIG1vZHVsZSBpZCA9IC4uL25vZGVfbW9kdWxlcy9yZWxha3MvY2xhc3MuanNcbi8vIG1vZHVsZSBjaHVua3MgPSBtYWluIiwidmFyIEFzeW5jUmVuZGVyaW5nSW50ZXJydXB0ZWQgPSByZXF1aXJlKCcuL2FzeW5jLXJlbmRlcmluZy1pbnRlcnJ1cHRlZCcpO1xuXG5mdW5jdGlvbiBNZWFud2hpbGUoY29tcG9uZW50LCBwcmV2aW91c2x5KSB7XG4gICAgdmFyIHJlbGFrcyA9IGNvbXBvbmVudC5yZWxha3M7XG4gICAgdGhpcy5jb21wb25lbnQgPSBjb21wb25lbnQ7XG4gICAgdGhpcy5zeW5jaHJvbm91cyA9IHRydWU7XG4gICAgdGhpcy5zaG93aW5nUHJvZ3Jlc3MgPSBmYWxzZTtcbiAgICB0aGlzLnNob3dpbmdQcm9ncmVzc0luaXRpYWxseSA9IGZhbHNlO1xuICAgIHRoaXMuZGVsYXlXaGVuRW1wdHkgPSA1MDtcbiAgICB0aGlzLmRlbGF5V2hlblJlbmRlcmVkID0gSW5maW5pdHk7XG4gICAgdGhpcy5jYW5jZWxlZCA9IGZhbHNlO1xuICAgIHRoaXMucHJpb3IgPSAocHJldmlvdXNseSkgPyBwcmV2aW91c2x5LnByaW9yIDogcmVsYWtzLnByZXZpb3VzO1xuICAgIHRoaXMucHJldmlvdXMgPSByZWxha3MucHJldmlvdXM7XG4gICAgdGhpcy5jdXJyZW50ID0gcmVsYWtzLmN1cnJlbnQ7XG4gICAgdGhpcy51cGRhdGVUaW1lb3V0ID0gMDtcbiAgICB0aGlzLnN0YXJ0VGltZSA9IGdldFRpbWUoKTtcbiAgICB0aGlzLm9uQ2FuY2VsID0gbnVsbDtcbiAgICB0aGlzLm9uQ29tcGxldGUgPSBudWxsO1xuICAgIHRoaXMub25Qcm9ncmVzcyA9IG51bGw7XG59XG5cbnZhciBwcm90b3R5cGUgPSBNZWFud2hpbGUucHJvdG90eXBlO1xuXG4vKipcbiAqIENoZWNrIGlmIHRoZSByZW5kZXJpbmcgY3ljbGUgaGFzIGJlZW4gc3VwZXJjZWRlZCBieSBhIG5ldyBvbmUuIElmIHNvXG4gKiB0aHJvdyBhbiBleGNlcHRpb24gdG8gZW5kIGl0LiBFbnN1cmUgY29tcG9uZW50IGlzIG1vdW50ZWQgYXMgd2VsbC5cbiAqL1xucHJvdG90eXBlLmNoZWNrID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHJlbGFrcyA9IHRoaXMuY29tcG9uZW50LnJlbGFrcztcbiAgICBpZiAoIXJlbGFrcyB8fCB0aGlzICE9PSByZWxha3MubWVhbndoaWxlKSB7XG4gICAgICAgIC8vIHRocm93IGV4Y2VwdGlvbiB0byBicmVhayBwcm9taXNlIGNoYWluXG4gICAgICAgIC8vIHByb21pc2UgbGlicmFyeSBzaG91bGQgY2F0Y2ggYW5kIHBhc3MgaXQgdG8gcmVqZWN0KClcbiAgICAgICAgLy8gZGVmaW5lZCBkb3duIGJlbG93XG4gICAgICAgIHRocm93IG5ldyBBc3luY1JlbmRlcmluZ0ludGVycnVwdGVkO1xuICAgIH1cbn1cblxuLyoqXG4gKiBTaG93IHByb2dyZXNzIGVsZW1lbnQsIHBvc3NpYmx5IGFmdGVyIGEgZGVsYXlcbiAqXG4gKiBAcGFyYW0gIHtSZWFjdEVsZW1lbnR9IGVsZW1lbnRcbiAqIEBwYXJhbSAge1N0cmluZ3x1bmRlZmluZWR9IGRpc3Bvc2l0aW9uXG4gKlxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqL1xucHJvdG90eXBlLnNob3cgPSBmdW5jdGlvbihlbGVtZW50LCBkaXNwb3NpdGlvbikge1xuICAgIHZhciByZWxha3MgPSB0aGlzLmNvbXBvbmVudC5yZWxha3M7XG5cbiAgICAvLyBtYWtlIHN1cmUgdGhlIHJlbmRlcmluZyBjeWNsZSBpcyBzdGlsbCBjdXJyZW50XG4gICAgdGhpcy5jaGVjaygpO1xuXG4gICAgLy8gc2F2ZSB0aGUgZWxlbWVudCBzbyByZW5kZXIoKSBjYW4gcmV0dXJuIGl0IGV2ZW50dWFsbHlcbiAgICByZWxha3MucHJvZ3Jlc3NFbGVtZW50ID0gZWxlbWVudDtcblxuICAgIGlmICh0aGlzLnNob3dpbmdQcm9ncmVzcykge1xuICAgICAgICAvLyBzZWUgaWYgd2UncmUgc2hvd2luZyBwcm9ncmVzcyBhbHJlYWR5LCBzaG93IHRoZSBuZXcgcHJvZ3Jlc3MgaW1tZWRpYXRlbHlcbiAgICAgICAgdGhpcy51cGRhdGUoKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKGRpc3Bvc2l0aW9uID09PSAnYWx3YXlzJykge1xuICAgICAgICAgICAgdGhpcy51cGRhdGUodHJ1ZSk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIGlmIChkaXNwb3NpdGlvbiA9PT0gJ2luaXRpYWwnKSB7XG4gICAgICAgICAgICBpZiAoIXJlbGFrcy5wcm9taXNlZEVsZW1lbnQgJiYgIXJlbGFrcy5wcm9ncmVzc0VsZW1lbnRSZW5kZXJlZCkge1xuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlKHRydWUpO1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnVwZGF0ZVRpbWVvdXQpIHtcbiAgICAgICAgICAgIC8vIHdlJ3ZlIGFscmVhZHkgc2NoZWR1bGUgdGhlIGRpc3BsYXlpbmcgb2YgcHJvZ3Jlc3NcbiAgICAgICAgICAgIC8vIGp1c3Qgd2FpdCBmb3IgdGhlIGluaXRpYWwgdGltZW91dCB0byBmaXJlXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgZGVsYXk7XG4gICAgICAgIGlmICghcmVsYWtzLnByb21pc2VkRWxlbWVudCkge1xuICAgICAgICAgICAgZGVsYXkgPSB0aGlzLmRlbGF5V2hlbkVtcHR5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZGVsYXkgPSB0aGlzLmRlbGF5V2hlblJlbmRlcmVkO1xuICAgICAgICB9XG4gICAgICAgIGlmIChkZWxheSA+IDApIHtcbiAgICAgICAgICAgIGlmIChkZWxheSAhPT0gSW5maW5pdHkpIHtcbiAgICAgICAgICAgICAgICAvLyBzaG93IHByb2dyZXNzIGFmdGVyIGEgYnJpZWYgZGVsYXksIHRvIGFsbG93XG4gICAgICAgICAgICAgICAgLy8gaXQgdG8gYmUgYnlwYXNzZWQgYnkgZmFzdC1yZXNvbHZpbmcgcHJvbWlzZXNcbiAgICAgICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlVGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGlmIHRoZSB0aW1lb3V0IGlzIDAsIHRoZW4gY2xlYXJUaW1lb3V0KCkgd2FzIGNhbGxlZCBvbiBpdFxuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzIGZ1bmN0aW9uIG1pZ2h0IHN0aWxsIHJ1biBvbiBvY2Nhc2lvbiBhZnRlcndhcmQsIGR1ZSB0b1xuICAgICAgICAgICAgICAgICAgICAvLyB0aGUgd2F5IHRpbWVvdXRzIGFyZSBzY2hlZHVsZWRcbiAgICAgICAgICAgICAgICAgICAgaWYgKF90aGlzLnVwZGF0ZVRpbWVvdXQgIT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLnVwZGF0ZSgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSwgZGVsYXkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gY2FsbGVyIHdhbnRzIGl0IHRvIGJlIHNob3duIGltbWVkaWF0ZWx5XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZSgpO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG4vKipcbiAqIFJldHVybiB0cnVlIGlmIHRoZSBjb21wb25lbnQgaGFzIHByZXZpb3VzbHkgYmVlbiBmdWxseSByZW5kZXJlZFxuICpcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKi9cbnByb3RvdHlwZS5yZXZpc2luZyA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciByZWxha3MgPSB0aGlzLmNvbXBvbmVudC5yZWxha3M7XG4gICAgcmV0dXJuICEhcmVsYWtzLnByb21pc2VkRWxlbWVudDtcbn07XG5cbi8qKlxuICogU2V0IHByb2dyZXNzaXZlIHJlbmRlcmluZyBkZWxheSwgZm9yIHdoZW4gdGhlIGNvbXBvbmVudCBpcyBlbXB0eSBhbmQgd2hlblxuICogaXQgaGFzIGJlZW4gZnVsbHkgcmVuZGVyZWQgcHJldmlvdXNseVxuICpcbiAqIEBwYXJhbSAge051bWJlcn0gZW1wdHlcbiAqIEBwYXJhbSAge051bWJlcn0gcmVuZGVyZWRcbiAqL1xucHJvdG90eXBlLmRlbGF5ID0gZnVuY3Rpb24oZW1wdHksIHJlbmRlcmVkKSB7XG4gICAgaWYgKHR5cGVvZihlbXB0eSkgPT09ICdudW1iZXInKSB7XG4gICAgICAgIHRoaXMuZGVsYXlXaGVuRW1wdHkgPSBlbXB0eTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZihyZW5kZXJlZCkgPT09ICdudW1iZXInKSB7XG4gICAgICAgIHRoaXMuZGVsYXlXaGVuUmVuZGVyZWQgPSByZW5kZXJlZDtcbiAgICB9XG59O1xuXG4vKipcbiAqIFJlbmRlcmluZyB0aGUgcHJvZ3Jlc3MgZWxlbWVudCBub3dcbiAqXG4gKiBAcGFyYW0gIHtCb29sZWFufHVuZGVmaW5lZH0gZm9yY2VcbiAqL1xucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uKGZvcmNlZCkge1xuICAgIHZhciByZWxha3MgPSB0aGlzLmNvbXBvbmVudC5yZWxha3M7XG5cbiAgICAvLyBpbmRpY2F0ZSB0aGF0IHRoZSBjb21wb25lbnQgaXMgZGlzcGxheWluZyBwcm9ncmVzc1xuICAgIC8vIHVubGVzcyB3ZSdyZSBmb3JjaW5nIHRoZSBwcm9ncmVzcyBkaXNwbGF5XG4gICAgaWYgKCFmb3JjZWQpIHtcbiAgICAgICAgdGhpcy5zaG93aW5nUHJvZ3Jlc3MgPSB0cnVlO1xuICAgIH1cblxuICAgIC8vIHRvc3MgdGhlIHJlc3VsdCBvZiB0aGUgcHJldmlvdXMgcmVuZGVyaW5nIGN5Y2xlXG4gICAgaWYgKHJlbGFrcy5wcm9taXNlZEVsZW1lbnQpIHtcbiAgICAgICAgcmVsYWtzLnByb21pc2VkRWxlbWVudCA9IG51bGw7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuc3luY2hyb25vdXMpIHtcbiAgICAgICAgLy8gbm8gbmVlZCB0byBmb3JjZSB1cGRhdGUgc2luY2Ugd2UncmUgc3RpbGwgaW5zaWRlXG4gICAgICAgIC8vIHJlbmRlcigpIGFuZCBpdCBjYW4gc2ltcGx5IHJldHVybiB0aGUgcHJvZ3Jlc3MgZWxlbWVudFxuICAgICAgICBpZiAoZm9yY2VkKSB7XG4gICAgICAgICAgICB0aGlzLnNob3dpbmdQcm9ncmVzc0luaXRpYWxseSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh0aGlzLm9uUHJvZ3Jlc3MpIHtcbiAgICAgICAgdmFyIGVsYXBzZWQgPSBnZXRUaW1lKCkgLSB0aGlzLnN0YXJ0VGltZTtcbiAgICAgICAgdGhpcy5vblByb2dyZXNzKHsgdHlwZTogJ3Byb2dyZXNzJywgdGFyZ2V0OiB0aGlzLCBlbGFwc2VkOiBlbGFwc2VkIH0pO1xuICAgIH1cblxuICAgIGlmIChyZWxha3MucHJvZ3Jlc3NFbGVtZW50ID09PSByZWxha3MucHJvZ3Jlc3NFbGVtZW50UmVuZGVyZWQpIHtcbiAgICAgICAgLy8gaXQncyBhbHJlYWR5IHJlbmRlcmVkXG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyB0ZWxsIHJlbmRlcigpIHRoYXQgaXQgaXNuJ3QgdHJpZ2dlcmVkIGluIHRoZSBub3JtYWwgZmFzaGlvblxuICAgIHJlbGFrcy5wcm9ncmVzc0VsZW1lbnRFeHBlY3RlZCA9IHRydWU7XG4gICAgdGhpcy5jb21wb25lbnQuZm9yY2VVcGRhdGUoKTtcbn07XG5cbi8qKlxuICogQ2FuY2VsIHRoZSByZW5kZXJpbmcgb2YgcHJvZ3Jlc3MgYW5kIGZpcmUgYW55IG9uQ2FuY2VsIGhhbmRsZXJcbiAqL1xucHJvdG90eXBlLmNhbmNlbCA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuY2xlYXIoKTtcbiAgICBpZiAoIXRoaXMuY2FuY2VsZWQpIHtcbiAgICAgICAgdGhpcy5jYW5jZWxlZCA9IHRydWU7XG4gICAgICAgIGlmICh0aGlzLm9uQ2FuY2VsKSB7XG4gICAgICAgICAgICB0aGlzLm9uQ2FuY2VsKHsgdHlwZTogJ2NhbmNlbCcsIHRhcmdldDogdGhpcyB9KTtcbiAgICAgICAgfVxuICAgIH1cbn07XG5cbi8qKlxuICogQ2xlYXIgdGltZW91dCBmdW5jdGlvbiBhbmQgZmlyZSBhbnkgb25Db21wbGV0ZSBoYW5kbGVyXG4gKi9cbnByb3RvdHlwZS5maW5pc2ggPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLmNsZWFyKCk7XG4gICAgaWYgKHRoaXMub25Db21wbGV0ZSkge1xuICAgICAgICB2YXIgZWxhcHNlZCA9IGdldFRpbWUoKSAtIHRoaXMuc3RhcnRUaW1lO1xuICAgICAgICB0aGlzLm9uQ29tcGxldGUoeyB0eXBlOiAnY29tcGxldGUnLCB0YXJnZXQ6IHRoaXMsIGVsYXBzZWQ6IGVsYXBzZWQgfSk7XG4gICAgfVxufTtcblxuLyoqXG4gKiBDYW5jZWwgdGhlIGFueSBzY2hlZHVsZWQgcmVuZGVyaW5nIG9mIHByb2dyZXNzXG4gKi9cbnByb3RvdHlwZS5jbGVhciA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciByZWxha3MgPSB0aGlzLmNvbXBvbmVudC5yZWxha3M7XG4gICAgaWYgKHRoaXMudXBkYXRlVGltZW91dCkge1xuICAgICAgICBjbGVhclRpbWVvdXQodGhpcy51cGRhdGVUaW1lb3V0KTtcbiAgICAgICAgdGhpcy51cGRhdGVUaW1lb3V0ID0gMDtcbiAgICB9XG59O1xuXG52YXIgc2NyaXB0U3RhcnRUaW1lID0gbmV3IERhdGU7XG5cbi8qKlxuICogUmV0dXJuIHRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIHBhc3NlZCBzaW5jZSBzdGFydCBvZiB0aGlzIHNjcmlwdFxuICpcbiAqIEByZXR1cm4ge051bWJlcn1cbiAqL1xuZnVuY3Rpb24gZ2V0VGltZSgpIHtcbiAgICByZXR1cm4gKG5ldyBEYXRlKSAtIHNjcmlwdFN0YXJ0VGltZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBwcm90b3R5cGUuY29uc3RydWN0b3I7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvcmVsYWtzL21lYW53aGlsZS5qc1xuLy8gbW9kdWxlIGlkID0gLi4vbm9kZV9tb2R1bGVzL3JlbGFrcy9tZWFud2hpbGUuanNcbi8vIG1vZHVsZSBjaHVua3MgPSBtYWluIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2NsYXNzJykocmVxdWlyZSgncHJlYWN0JykpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL3JlbGFrcy9wcmVhY3QuanNcbi8vIG1vZHVsZSBpZCA9IC4uL25vZGVfbW9kdWxlcy9yZWxha3MvcHJlYWN0LmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gbWFpbiIsImltcG9ydCB7IGgsIENvbXBvbmVudCB9IGZyb20gJ3ByZWFjdCc7XG5pbXBvcnQgU1dBUEkgZnJvbSAnc3dhcGknO1xuaW1wb3J0IHsgUm91dGUgfSBmcm9tICdyb3V0ZXMnO1xuaW1wb3J0IE5hdkJhciBmcm9tICd3aWRnZXRzL25hdi1iYXInO1xuaW1wb3J0ICdyZWxha3MvcHJlYWN0JztcbmltcG9ydCAnc3R5bGUuc2Nzcyc7XG5cbi8qKiBAanN4IGggKi9cblxuY2xhc3MgQXBwbGljYXRpb24gZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIHN0YXRpYyBkaXNwbGF5TmFtZSA9ICdBcHBsaWNhdGlvbic7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIGxldCB7IHJvdXRlTWFuYWdlciwgZGF0YVNvdXJjZSB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIHJvdXRlOiBuZXcgUm91dGUocm91dGVNYW5hZ2VyKSxcbiAgICAgICAgICAgIHN3YXBpOiBuZXcgU1dBUEkoZGF0YVNvdXJjZSksXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVuZGVyIHRoZSBhcHBsaWNhdGlvblxuICAgICAqXG4gICAgICogQHJldHVybiB7Vk5vZGV9XG4gICAgICovXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQgeyByb3V0ZSwgc3dhcGkgfSA9IHRoaXMuc3RhdGU7XG4gICAgICAgIGxldCBtb2R1bGUgPSByb3V0ZS5wYXJhbXMubW9kdWxlO1xuICAgICAgICBsZXQgcGFnZTtcbiAgICAgICAgaWYgKG1vZHVsZSkge1xuICAgICAgICAgICAgbGV0IENvbXBvbmVudCA9IG1vZHVsZS5kZWZhdWx0O1xuICAgICAgICAgICAgbGV0IHByb3BzID0geyByb3V0ZSwgc3dhcGkgfTtcbiAgICAgICAgICAgIHBhZ2UgPSA8Q29tcG9uZW50IHsuLi5wcm9wc30gLz47XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPE5hdkJhciByb3V0ZT17cm91dGV9IC8+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50c1wiPlxuICAgICAgICAgICAgICAgICAgICB7cGFnZX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFkZGVkIGNoYW5nZSBoYW5kbGVycyB3aGVuIGNvbXBvbmVudCBtb3VudHNcbiAgICAgKi9cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgbGV0IHsgcm91dGVNYW5hZ2VyLCBkYXRhU291cmNlIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICByb3V0ZU1hbmFnZXIuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhpcy5oYW5kbGVSb3V0ZUNoYW5nZSk7XG4gICAgICAgIGRhdGFTb3VyY2UuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhpcy5oYW5kbGVEYXRhU291cmNlQ2hhbmdlKTtcblxuICAgICAgICB2YXIgYm9keSA9IGRvY3VtZW50LmJvZHk7XG4gICAgICAgIGJvZHkuY2xhc3NOYW1lID0gYm9keS5jbGFzc05hbWUucmVwbGFjZSgvXFxzKnNzci8sICcnKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmUgY2hhbmdlIGhhbmRsZXJzIHdoZW4gY29tcG9uZW50IG1vdW50c1xuICAgICAqL1xuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgICBsZXQgeyByb3V0ZU1hbmFnZXIsIGRhdGFTb3VyY2UgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIHJvdXRlTWFuYWdlci5yZW1vdmVFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGlzLmhhbmRsZVJvdXRlQ2hhbmdlKTtcbiAgICAgICAgZGF0YVNvdXJjZS5yZW1vdmVFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGlzLmhhbmRsZURhdGFTb3VyY2VDaGFuZ2UpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENhbGxlZCB3aGVuIHRoZSBkYXRhIHNvdXJjZSBjaGFuZ2VzXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHtSZWxha3NEamFuZ29EYXRhU291cmNlRXZlbnR9IGV2dFxuICAgICAqL1xuICAgIGhhbmRsZURhdGFTb3VyY2VDaGFuZ2UgPSAoZXZ0KSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzd2FwaTogbmV3IFNXQVBJKGV2dC50YXJnZXQpIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENhbGxlZCB3aGVuIHRoZSByb3V0ZSBjaGFuZ2VzXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHtSZWxha3NSb3V0ZU1hbmFnZXJFdmVudH0gZXZ0XG4gICAgICovXG4gICAgaGFuZGxlUm91dGVDaGFuZ2UgPSAoZXZ0KSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyByb3V0ZTogbmV3IFJvdXRlKGV2dC50YXJnZXQpIH0pO1xuICAgIH1cbn1cblxuZXhwb3J0IHtcbiAgICBBcHBsaWNhdGlvbiBhcyBkZWZhdWx0LFxuICAgIEFwcGxpY2F0aW9uXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwbGljYXRpb24uanN4IiwiaW1wb3J0ICdwcmVhY3QvZGV2dG9vbHMnO1xuaW1wb3J0IHsgaCwgcmVuZGVyIH0gZnJvbSAncHJlYWN0JztcbmltcG9ydCB7IEFwcGxpY2F0aW9uIH0gZnJvbSAnYXBwbGljYXRpb24nO1xuaW1wb3J0IHsgcm91dGVzIH0gZnJvbSAncm91dGVzJztcbmltcG9ydCBEamFuZ29EYXRhU291cmNlIGZyb20gJ3JlbGFrcy1kamFuZ28tZGF0YS1zb3VyY2UnO1xuaW1wb3J0IFJvdXRlTWFuYWdlciBmcm9tICdyZWxha3Mtcm91dGUtbWFuYWdlcic7XG5pbXBvcnQgeyBoYXJ2ZXN0IH0gZnJvbSAncmVsYWtzLWhhcnZlc3QvcHJlYWN0JztcblxudmFyIGRhdGFTb3VyY2VCYXNlVVJMID0gJy9zdGFyd2Fycy9hcGknO1xudmFyIHBhZ2VCYXNlUGF0aCA9ICcvc3RhcndhcnMnO1xuXG5pZiAodHlwZW9mKHdpbmRvdykgPT09ICdvYmplY3QnKSB7XG4gICAgYXN5bmMgZnVuY3Rpb24gaW5pdGlhbGl6ZShldnQpIHtcbiAgICAgICAgLy8gY3JlYXRlIGRhdGEgc291cmNlXG4gICAgICAgIGxldCBkYXRhU291cmNlID0gbmV3IERqYW5nb0RhdGFTb3VyY2Uoe1xuICAgICAgICAgICAgYmFzZVVSTDogZGF0YVNvdXJjZUJhc2VVUkwsXG4gICAgICAgIH0pO1xuICAgICAgICBhd2FpdCBkYXRhU291cmNlLmluaXRpYWxpemUoKTtcblxuICAgICAgICAvLyBjcmVhdGUgcm91dGUgbWFuYWdlclxuICAgICAgICBsZXQgcm91dGVNYW5hZ2VyID0gbmV3IFJvdXRlTWFuYWdlcih7XG4gICAgICAgICAgICByb3V0ZXMsXG4gICAgICAgICAgICBiYXNlUGF0aDogcGFnZUJhc2VQYXRoLFxuICAgICAgICB9KTtcbiAgICAgICAgYXdhaXQgcm91dGVNYW5hZ2VyLmluaXRpYWxpemUoKTtcblxuICAgICAgICBsZXQgYXBwQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcC1jb250YWluZXInKTtcbiAgICAgICAgaWYgKCFhcHBDb250YWluZXIpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVW5hYmxlIHRvIGZpbmQgYXBwIGVsZW1lbnQgaW4gRE9NJyk7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGFwcEVsZW1lbnQgPSBoKEFwcGxpY2F0aW9uLCB7IGRhdGFTb3VyY2UsIHJvdXRlTWFuYWdlciB9KTtcbiAgICAgICAgYXdhaXQgaGFydmVzdChhcHBFbGVtZW50KTtcbiAgICAgICAgcmVuZGVyKGFwcEVsZW1lbnQsIGFwcENvbnRhaW5lciwgYXBwQ29udGFpbmVyLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgaW5pdGlhbGl6ZSk7XG59IGVsc2Uge1xuICAgIGFzeW5jIGZ1bmN0aW9uIHNlcnZlclNpZGVSZW5kZXIob3B0aW9ucykge1xuICAgICAgICBsZXQgZGF0YVNvdXJjZSA9IG5ldyBEamFuZ29EYXRhU291cmNlKHtcbiAgICAgICAgICAgIGJhc2VVUkw6IGAke29wdGlvbnMuaG9zdH0ke2RhdGFTb3VyY2VCYXNlVVJMfWAsXG4gICAgICAgIH0pO1xuICAgICAgICBhd2FpdCBkYXRhU291cmNlLmluaXRpYWxpemUoKTtcblxuICAgICAgICBsZXQgcm91dGVNYW5hZ2VyID0gbmV3IFJvdXRlTWFuYWdlcih7XG4gICAgICAgICAgICByb3V0ZXMsXG4gICAgICAgICAgICBiYXNlUGF0aDogcGFnZUJhc2VQYXRoLFxuICAgICAgICAgICAgaW5pdGlhbFBhdGg6IG9wdGlvbnMucGF0aCxcbiAgICAgICAgfSk7XG4gICAgICAgIGF3YWl0IHJvdXRlTWFuYWdlci5pbml0aWFsaXplKCk7XG5cbiAgICAgICAgbGV0IGFwcEVsZW1lbnQgPSBoKEFwcGxpY2F0aW9uLCB7IGRhdGFTb3VyY2UsIHJvdXRlTWFuYWdlciB9KTtcbiAgICAgICAgcmV0dXJuIGhhcnZlc3QoYXBwRWxlbWVudCk7XG4gICAgfVxuXG4gICAgZXhwb3J0cy5yZW5kZXIgPSBzZXJ2ZXJTaWRlUmVuZGVyO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbWFpbi5qcyIsImNsYXNzIFJvdXRlIHtcbiAgICBjb25zdHJ1Y3Rvcihyb3V0ZU1hbmFnZXIpIHtcbiAgICAgICAgdGhpcy5yb3V0ZU1hbmFnZXIgPSByb3V0ZU1hbmFnZXI7XG4gICAgICAgIHRoaXMubmFtZSA9IHJvdXRlTWFuYWdlci5uYW1lO1xuICAgICAgICB0aGlzLnBhcmFtcyA9IHJvdXRlTWFuYWdlci5wYXJhbXM7XG4gICAgICAgIHRoaXMuaGlzdG9yeSA9IHJvdXRlTWFuYWdlci5oaXN0b3J5O1xuICAgIH1cblxuICAgIGNoYW5nZSh1cmwsIG9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucm91dGVNYW5hZ2VyLmNoYW5nZSh1cmwsIG9wdGlvbnMpO1xuICAgIH1cblxuICAgIGZpbmQobmFtZSwgcGFyYW1zKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJvdXRlTWFuYWdlci5maW5kKG5hbWUsIHBhcmFtcyk7XG4gICAgfVxuXG4gICAgZXh0cmFjdElEKHVybCkge1xuICAgICAgICB2YXIgc2kgPSB1cmwubGFzdEluZGV4T2YoJy8nKTtcbiAgICAgICAgdmFyIGVpO1xuICAgICAgICBpZiAoc2kgPT09IHVybC5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICBlaSA9IHNpO1xuICAgICAgICAgICAgc2kgPSB1cmwubGFzdEluZGV4T2YoJy8nLCBlaSAtIDEpO1xuICAgICAgICB9XG4gICAgICAgIHZhciB0ZXh0ID0gdXJsLnN1YnN0cmluZyhzaSArIDEsIGVpKTtcbiAgICAgICAgcmV0dXJuIHBhcnNlSW50KHRleHQpO1xuICAgIH1cbn1cblxubGV0IHJvdXRlcyA9IHtcbiAgICAnd2VsY29tZSc6IHtcbiAgICAgICAgcGF0aDogJy8nLFxuICAgICAgICBsb2FkOiBhc3luYyAocGFyYW1zKSA9PiB7XG4gICAgICAgICAgICBwYXJhbXMubW9kdWxlID0gYXdhaXQgaW1wb3J0KCdwYWdlcy93ZWxjb21lLXBhZ2UnIC8qIHdlYnBhY2tDaHVua05hbWU6IFwid2VsY29tZS1wYWdlXCIgKi8pO1xuICAgICAgICB9XG4gICAgfSxcbiAgICAnZmlsbS1saXN0Jzoge1xuICAgICAgICBwYXRoOiAnL2ZpbG1zLycsXG4gICAgICAgIGxvYWQ6IGFzeW5jIChwYXJhbXMpID0+IHtcbiAgICAgICAgICAgIHBhcmFtcy5tb2R1bGUgPSBhd2FpdCBpbXBvcnQoJ3BhZ2VzL2ZpbG0tbGlzdCcgLyogd2VicGFja0NodW5rTmFtZTogXCJmaWxtLWxpc3RcIiAqLyk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgICdmaWxtLXN1bW1hcnknOiB7XG4gICAgICAgIHBhdGg6ICcvZmlsbXMvJHtpZH0vJyxcbiAgICAgICAgcGFyYW1zOiB7IGlkOiBOdW1iZXIgfSxcbiAgICAgICAgbG9hZDogYXN5bmMgKHBhcmFtcykgPT4ge1xuICAgICAgICAgICAgcGFyYW1zLm1vZHVsZSA9IGF3YWl0IGltcG9ydCgncGFnZXMvZmlsbS1wYWdlJyAvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcImZpbG0tcGFnZVwiICovKTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgJ2NoYXJhY3Rlci1saXN0Jzoge1xuICAgICAgICBwYXRoOiAnL2NoYXJhY3RlcnMvJyxcbiAgICAgICAgbG9hZDogYXN5bmMgKHBhcmFtcykgPT4ge1xuICAgICAgICAgICAgcGFyYW1zLm1vZHVsZSA9IGF3YWl0IGltcG9ydCgncGFnZXMvY2hhcmFjdGVyLWxpc3QnIC8qIHdlYnBhY2tDaHVua05hbWU6IFwiY2hhcmFjdGVyLWxpc3RcIiAqLyk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgICdjaGFyYWN0ZXItc3VtbWFyeSc6IHtcbiAgICAgICAgcGF0aDogJy9jaGFyYWN0ZXJzLyR7aWR9LycsXG4gICAgICAgIHBhcmFtczogeyBpZDogTnVtYmVyIH0sXG4gICAgICAgIGxvYWQ6IGFzeW5jIChwYXJhbXMpID0+IHtcbiAgICAgICAgICAgIHBhcmFtcy5tb2R1bGUgPSBhd2FpdCBpbXBvcnQoJ3BhZ2VzL2NoYXJhY3Rlci1wYWdlJyAvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcImNoYXJhY3Rlci1wYWdlXCIgKi8pO1xuICAgICAgICB9XG4gICAgfSxcbiAgICAncGxhbmV0LWxpc3QnOiB7XG4gICAgICAgIHBhdGg6ICcvcGxhbmV0cy8nLFxuICAgICAgICBsb2FkOiBhc3luYyAocGFyYW1zKSA9PiB7XG4gICAgICAgICAgICBwYXJhbXMubW9kdWxlID0gYXdhaXQgaW1wb3J0KCdwYWdlcy9wbGFuZXQtbGlzdCcgLyogd2VicGFja0NodW5rTmFtZTogXCJwbGFuZXQtbGlzdFwiICovKTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgJ3BsYW5ldC1zdW1tYXJ5Jzoge1xuICAgICAgICBwYXRoOiAnL3BsYW5ldHMvJHtpZH0vJyxcbiAgICAgICAgcGFyYW1zOiB7IGlkOiBOdW1iZXIgfSxcbiAgICAgICAgbG9hZDogYXN5bmMgKHBhcmFtcykgPT4ge1xuICAgICAgICAgICAgcGFyYW1zLm1vZHVsZSA9IGF3YWl0IGltcG9ydCgncGFnZXMvcGxhbmV0LXBhZ2UnIC8qIHdlYnBhY2tDaHVua05hbWU6IFwicGxhbmV0LXBhZ2VcIiAqLyk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgICdzcGVjaWVzLWxpc3QnOiB7XG4gICAgICAgIHBhdGg6ICcvc3BlY2llcy8nLFxuICAgICAgICBsb2FkOiBhc3luYyAocGFyYW1zKSA9PiB7XG4gICAgICAgICAgICBwYXJhbXMubW9kdWxlID0gYXdhaXQgaW1wb3J0KCdwYWdlcy9zcGVjaWVzLWxpc3QnIC8qIHdlYnBhY2tDaHVua05hbWU6IFwic3BlY2llcy1saXN0XCIgKi8pO1xuICAgICAgICB9XG4gICAgfSxcbiAgICAnc3BlY2llcy1zdW1tYXJ5Jzoge1xuICAgICAgICBwYXRoOiAnL3NwZWNpZXMvJHtpZH0vJyxcbiAgICAgICAgcGFyYW1zOiB7IGlkOiBOdW1iZXIgfSxcbiAgICAgICAgbG9hZDogYXN5bmMgKHBhcmFtcykgPT4ge1xuICAgICAgICAgICAgcGFyYW1zLm1vZHVsZSA9IGF3YWl0IGltcG9ydCgncGFnZXMvc3BlY2llcy1wYWdlJyAvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcInNwZWNpZXMtcGFnZVwiICovKTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgJ3ZlaGljbGUtbGlzdCc6IHtcbiAgICAgICAgcGF0aDogJy92ZWhpY2xlcy8nLFxuICAgICAgICBsb2FkOiBhc3luYyAocGFyYW1zKSA9PiB7XG4gICAgICAgICAgICBwYXJhbXMubW9kdWxlID0gYXdhaXQgaW1wb3J0KCdwYWdlcy92ZWhpY2xlLWxpc3QnIC8qIHdlYnBhY2tDaHVua05hbWU6IFwidmVoaWNsZS1saXN0XCIgKi8pO1xuICAgICAgICB9XG4gICAgfSxcbiAgICAndmVoaWNsZS1zdW1tYXJ5Jzoge1xuICAgICAgICBwYXRoOiAnL3ZlaGljbGVzLyR7aWR9LycsXG4gICAgICAgIHBhcmFtczogeyBpZDogTnVtYmVyIH0sXG4gICAgICAgIGxvYWQ6IGFzeW5jIChwYXJhbXMpID0+IHtcbiAgICAgICAgICAgIHBhcmFtcy5tb2R1bGUgPSBhd2FpdCBpbXBvcnQoJ3BhZ2VzL3ZlaGljbGUtcGFnZScgLyogd2VicGFja0NodW5rTmFtZTogXCJ2ZWhpY2xlLXBhZ2VcIiAqLyk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgICdzdGFyc2hpcC1saXN0Jzoge1xuICAgICAgICBwYXRoOiAnL3N0YXJzaGlwcy8nLFxuICAgICAgICBsb2FkOiBhc3luYyAocGFyYW1zKSA9PiB7XG4gICAgICAgICAgICBwYXJhbXMubW9kdWxlID0gYXdhaXQgaW1wb3J0KCdwYWdlcy9zdGFyc2hpcC1saXN0JyAvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcInN0YXJzaGlwLWxpc3RcIiAqLyk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgICdzdGFyc2hpcC1zdW1tYXJ5Jzoge1xuICAgICAgICBwYXRoOiAnL3N0YXJzaGlwLyR7aWR9LycsXG4gICAgICAgIHBhcmFtczogeyBpZDogTnVtYmVyIH0sXG4gICAgICAgIGxvYWQ6IGFzeW5jIChwYXJhbXMpID0+IHtcbiAgICAgICAgICAgIHBhcmFtcy5tb2R1bGUgPSBhd2FpdCBpbXBvcnQoJ3BhZ2VzL3N0YXJzaGlwLXBhZ2UnIC8qIHdlYnBhY2tDaHVua05hbWU6IFwic3RhcnNoaXAtcGFnZVwiICovKTtcbiAgICAgICAgfVxuICAgIH0sXG59O1xuXG5leHBvcnQgeyBSb3V0ZSwgcm91dGVzIH07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yb3V0ZXMuanMiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3R5bGUuc2Nzc1xuLy8gbW9kdWxlIGlkID0gLi9zdHlsZS5zY3NzXG4vLyBtb2R1bGUgY2h1bmtzID0gbWFpbiIsImNsYXNzIFNXQVBJIHtcbiAgICAvKipcbiAgICAgKiBSZW1lbWJlciB0aGUgZGF0YSBzb3VyY2VcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihkYXRhU291cmNlKSB7XG4gICAgICAgIHRoaXMuZGF0YVNvdXJjZSA9IGRhdGFTb3VyY2U7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRmV0Y2ggb25lIG9iamVjdCBmcm9tIGRhdGEgc291cmNlXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHtTdHJpbmd9IHVybFxuICAgICAqIEBwYXJhbSAge09iamVjdH0gb3B0aW9uc1xuICAgICAqXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxPYmplY3Q+fVxuICAgICAqL1xuICAgIGZldGNoT25lKHVybCwgb3B0aW9ucykge1xuICAgICAgICByZXR1cm4gdGhpcy5kYXRhU291cmNlLmZldGNoT25lKHVybCwgb3B0aW9ucyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRmV0Y2ggYSBsaXN0IG9mIG9iamVjdHMgZnJvbSBkYXRhIHNvdXJjZVxuICAgICAqXG4gICAgICogQHBhcmFtICB7U3RyaW5nfSB1cmxcbiAgICAgKiBAcGFyYW0gIHtPYmplY3R9IG9wdGlvbnNcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8QXJyYXk+fVxuICAgICAqL1xuICAgIGZldGNoTGlzdCh1cmwsIG9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YVNvdXJjZS5mZXRjaExpc3QodXJsLCBvcHRpb25zKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBGZXRjaCBtdWx0aXBsZSBvYmplY3RzIGZyb20gZGF0YSBzb3VyY2VcbiAgICAgKlxuICAgICAqIEBwYXJhbSAge0FycmF5PFN0cmluZz59IHVybHNcbiAgICAgKiBAcGFyYW0gIHtPYmplY3R9IG9wdGlvbnNcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8QXJyYXk+fVxuICAgICAqL1xuICAgIGZldGNoTXVsdGlwbGUodXJscywgb3B0aW9ucykge1xuICAgICAgICByZXR1cm4gdGhpcy5kYXRhU291cmNlLmZldGNoTXVsdGlwbGUodXJscywgb3B0aW9ucyk7XG4gICAgfVxufVxuXG5leHBvcnQge1xuICAgIFNXQVBJIGFzIGRlZmF1bHQsXG4gICAgU1dBUEksXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3dhcGkuanMiLCJpbXBvcnQgeyBoLCBDb21wb25lbnQgfSBmcm9tICdwcmVhY3QnO1xuXG4vKiogQGpzeCBoICovXG5cbmZ1bmN0aW9uIE5hdkJhcihwcm9wcykge1xuICAgIGxldCB7IHJvdXRlIH0gPSBwcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdi1iYXJcIj5cbiAgICAgICAgICAgIDxCdXR0b24gcGFnZU5hbWU9XCJ3ZWxjb21lXCIgcm91dGU9e3JvdXRlfT5cbiAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYWIgZmEtZW1waXJlXCIgLz5cbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgPEJ1dHRvbiBwYWdlTmFtZT1cImZpbG0tbGlzdFwiIHJvdXRlPXtyb3V0ZX0+XG4gICAgICAgICAgICAgICAgRmlsbXNcbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgPEJ1dHRvbiBwYWdlTmFtZT1cImNoYXJhY3Rlci1saXN0XCIgcm91dGU9e3JvdXRlfT5cbiAgICAgICAgICAgICAgICBDaGFyYWN0ZXJzXG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDxCdXR0b24gcGFnZU5hbWU9XCJwbGFuZXQtbGlzdFwiIHJvdXRlPXtyb3V0ZX0+XG4gICAgICAgICAgICAgICAgUGxhbmV0c1xuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8QnV0dG9uIHBhZ2VOYW1lPVwic3BlY2llcy1saXN0XCIgcm91dGU9e3JvdXRlfT5cbiAgICAgICAgICAgICAgICBTcGVjaWVzXG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDxCdXR0b24gcGFnZU5hbWU9XCJ2ZWhpY2xlLWxpc3RcIiByb3V0ZT17cm91dGV9PlxuICAgICAgICAgICAgICAgIFZlaGljbGVzXG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDxCdXR0b24gcGFnZU5hbWU9XCJzdGFyc2hpcC1saXN0XCIgcm91dGU9e3JvdXRlfT5cbiAgICAgICAgICAgICAgICBTdGFyc2hpcHNcbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuXG5OYXZCYXIuZGlzcGxheU5hbWUgPSAnTmF2QmFyJztcblxuZnVuY3Rpb24gQnV0dG9uKHByb3BzKSB7XG4gICAgbGV0IHsgcm91dGUgfSA9IHByb3BzO1xuICAgIGxldCBsaW5rUHJvcHMgPSB7XG4gICAgICAgIGNsYXNzTmFtZTogJ2J1dHRvbicsXG4gICAgICAgIGhyZWY6IHJvdXRlLmZpbmQocHJvcHMucGFnZU5hbWUpLFxuICAgIH07XG4gICAgcmV0dXJuIDxhIHsuLi5saW5rUHJvcHN9Pntwcm9wcy5jaGlsZHJlbn08L2E+O1xufVxuXG5CdXR0b24uZGlzcGxheU5hbWUgPSAnQnV0dG9uJztcblxuZXhwb3J0IHtcbiAgICBOYXZCYXIgYXMgZGVmYXVsdCxcbiAgICBOYXZCYXJcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi93aWRnZXRzL25hdi1iYXIuanN4Il0sInNvdXJjZVJvb3QiOiIifQ==