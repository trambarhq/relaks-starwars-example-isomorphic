/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	var parentJsonpFunction = window["webpackJsonp"];
/******/ 	window["webpackJsonp"] = function webpackJsonpCallback(chunkIds, moreModules, executeModules) {
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [], result;
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(chunkIds, moreModules, executeModules);
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 	};
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// objects to store loaded and loading chunks
/******/ 	var installedChunks = {
/******/ 		"main": 0
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
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData === 0) {
/******/ 			return new Promise(function(resolve) { resolve(); });
/******/ 		}
/******/
/******/ 		// a Promise means "currently loading".
/******/ 		if(installedChunkData) {
/******/ 			return installedChunkData[2];
/******/ 		}
/******/
/******/ 		// setup Promise in chunk cache
/******/ 		var promise = new Promise(function(resolve, reject) {
/******/ 			installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 		});
/******/ 		installedChunkData[2] = promise;
/******/
/******/ 		// start chunk loading
/******/ 		var head = document.getElementsByTagName('head')[0];
/******/ 		var script = document.createElement('script');
/******/ 		script.type = "text/javascript";
/******/ 		script.charset = 'utf-8';
/******/ 		script.async = true;
/******/ 		script.timeout = 120000;
/******/
/******/ 		if (__webpack_require__.nc) {
/******/ 			script.setAttribute("nonce", __webpack_require__.nc);
/******/ 		}
/******/ 		script.src = __webpack_require__.p + "" + chunkId + ".app.js";
/******/ 		var timeout = setTimeout(onScriptComplete, 120000);
/******/ 		script.onerror = script.onload = onScriptComplete;
/******/ 		function onScriptComplete() {
/******/ 			// avoid mem leaks in IE.
/******/ 			script.onerror = script.onload = null;
/******/ 			clearTimeout(timeout);
/******/ 			var chunk = installedChunks[chunkId];
/******/ 			if(chunk !== 0) {
/******/ 				if(chunk) {
/******/ 					chunk[1](new Error('Loading chunk ' + chunkId + ' failed.'));
/******/ 				}
/******/ 				installedChunks[chunkId] = undefined;
/******/ 			}
/******/ 		};
/******/ 		head.appendChild(script);
/******/
/******/ 		return promise;
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
/******/ 	__webpack_require__.p = "/starwars/";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZDUyMTZmOTUwMGI0YTA1MDg0MTYiLCJ3ZWJwYWNrOi8vLy9ob21lL2NsZW9uZy9yZWxha3MtZGphbmdvLWRhdGEtc291cmNlL2luZGV4LmpzIiwid2VicGFjazovLy8vaG9tZS9jbGVvbmcvcmVsYWtzLWhhcnZlc3QvZnVuY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy9ob21lL2NsZW9uZy9yZWxha3MtaGFydmVzdC9tZWFud2hpbGUuanMiLCJ3ZWJwYWNrOi8vLy9ob21lL2NsZW9uZy9yZWxha3MtaGFydmVzdC9wcmVhY3QuanMiLCJ3ZWJwYWNrOi8vLy9ob21lL2NsZW9uZy9yZWxha3Mtcm91dGUtbWFuYWdlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9qc29uL3N0cmluZ2lmeS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvYXNzaWduLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2RlZmluZS1wcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvZ2V0LXByb3RvdHlwZS1vZi5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3Qvc2V0LXByb3RvdHlwZS1vZi5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9wcm9taXNlLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL3N5bWJvbC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9zeW1ib2wvaXRlcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2hlbHBlcnMvYXN5bmNUb0dlbmVyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjay5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcy5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvaGVscGVycy9pbmhlcml0cy5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvaGVscGVycy9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvcmVnZW5lcmF0b3IvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vanNvbi9zdHJpbmdpZnkuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2Fzc2lnbi5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvY3JlYXRlLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9kZWZpbmUtcHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2dldC1wcm90b3R5cGUtb2YuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L3NldC1wcm90b3R5cGUtb2YuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vcHJvbWlzZS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9zeW1ib2wvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vc3ltYm9sL2l0ZXJhdG9yLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2EtZnVuY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYWRkLXRvLXVuc2NvcGFibGVzLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FuLWluc3RhbmNlLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FuLW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hcnJheS1pbmNsdWRlcy5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jbGFzc29mLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NvZi5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jb3JlLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2N0eC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kZWZpbmVkLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2Rlc2NyaXB0b3JzLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2RvbS1jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZW51bS1idWcta2V5cy5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19lbnVtLWtleXMuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZXhwb3J0LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2ZhaWxzLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2Zvci1vZi5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faGFzLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2hpZGUuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faHRtbC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pZTgtZG9tLWRlZmluZS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pbnZva2UuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pcy1hcnJheS1pdGVyLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lzLWFycmF5LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lzLW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWNhbGwuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1kZWZpbmUuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1kZXRlY3QuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1zdGVwLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXJhdG9ycy5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19saWJyYXJ5LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX21ldGEuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fbWljcm90YXNrLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX25ldy1wcm9taXNlLWNhcGFiaWxpdHkuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWFzc2lnbi5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtY3JlYXRlLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1kcC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZHBzLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1nb3BkLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1nb3BuLWV4dC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ29wbi5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ29wcy5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ3BvLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1rZXlzLWludGVybmFsLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1rZXlzLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1waWUuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LXNhcC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19wZXJmb3JtLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3Byb21pc2UtcmVzb2x2ZS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19wcm9wZXJ0eS1kZXNjLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3JlZGVmaW5lLWFsbC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19yZWRlZmluZS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zZXQtcHJvdG8uanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2V0LXNwZWNpZXMuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2V0LXRvLXN0cmluZy10YWcuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2hhcmVkLWtleS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zaGFyZWQuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc3BlY2llcy1jb25zdHJ1Y3Rvci5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zdHJpbmctYXQuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdGFzay5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1hYnNvbHV0ZS1pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1pbnRlZ2VyLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWlvYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tbGVuZ3RoLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1wcmltaXRpdmUuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdWlkLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3VzZXItYWdlbnQuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fd2tzLWRlZmluZS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL193a3MtZXh0LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3drcy5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2NvcmUuZ2V0LWl0ZXJhdG9yLW1ldGhvZC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5hcnJheS5pdGVyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QuYXNzaWduLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmRlZmluZS1wcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QuZ2V0LXByb3RvdHlwZS1vZi5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3Quc2V0LXByb3RvdHlwZS1vZi5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5wcm9taXNlLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5zeW1ib2wuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczcucHJvbWlzZS5maW5hbGx5LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM3LnByb21pc2UudHJ5LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM3LnN5bWJvbC5hc3luYy1pdGVyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNy5zeW1ib2wub2JzZXJ2YWJsZS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL3dlYi5kb20uaXRlcmFibGUuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9wcmVhY3QvZGV2dG9vbHMuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9wcmVhY3QvZGlzdC9wcmVhY3QuZXNtLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvcmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lLW1vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3JlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3JlbGFrcy9hc3luYy1yZW5kZXJpbmctaW50ZXJydXB0ZWQuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9yZWxha3MvY2xhc3MuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9yZWxha3MvbWVhbndoaWxlLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvcmVsYWtzL3ByZWFjdC5qcyIsIndlYnBhY2s6Ly8vLi9hcHBsaWNhdGlvbi5qc3giLCJ3ZWJwYWNrOi8vLy4vbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9yb3V0ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9zd2FwaS5qcyIsIndlYnBhY2s6Ly8vLi93aWRnZXRzL25hdi1iYXIuanN4Il0sIm5hbWVzIjpbImRlZmF1bHRPcHRpb25zIiwiYmFzZVVSTCIsInJlZnJlc2hJbnRlcnZhbCIsImF1dGhvcml6YXRpb25LZXl3b3JkIiwiYWJicmV2aWF0ZWRGb2xkZXJDb250ZW50cyIsIlJlbGFrc0RqYW5nb0RhdGFTb3VyY2UiLCJvcHRpb25zIiwibGlzdGVuZXJzIiwicXVlcmllcyIsImF1dGhlbnRpY2F0aW9ucyIsImF1dGhvcml6YXRpb25zIiwibmFtZSIsInVuZGVmaW5lZCIsInByb3RvdHlwZSIsImluaXRpYWxpemUiLCJzdGFydEV4cGlyYXRpb25DaGVjayIsInNodXRkb3duIiwic3RvcEV4cGlyYXRpb25DaGVjayIsImFkZEV2ZW50TGlzdGVuZXIiLCJ0eXBlIiwiaGFuZGxlciIsInB1c2giLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZmlsdGVyIiwibGlzdGVuZXIiLCJ0cmlnZ2VyRXZlbnQiLCJldnQiLCJmaXJlZCIsImZvckVhY2giLCJyZXNvbHZlVVJMIiwidXJsIiwidGVzdCIsInJlbW92ZVRyYWlsaW5nU2xhc2giLCJhZGRMZWFkaW5nU2xhc2giLCJyZXNvbHZlVVJMcyIsInVybHMiLCJfdGhpcyIsIm1hcCIsImZldGNoT25lIiwiYWJzVVJMIiwicHJvcHMiLCJxdWVyeSIsImZpbmRRdWVyeSIsImRlcml2ZVF1ZXJ5IiwicHJvbWlzZSIsImdldCIsInRoZW4iLCJyZXNwb25zZSIsIm9iamVjdCIsInVwZGF0ZVF1ZXJ5IiwicmV0cmlldmFsVGltZSIsImdldFRpbWUiLCJhZGRRdWVyeSIsImRpcnR5IiwicmVmcmVzaE9uZSIsImZldGNoUGFnZSIsInBhZ2UiLCJwYWdlVVJMIiwiYXR0YWNoUGFnZU51bWJlciIsIm9iamVjdHMiLCJyZXN1bHRzIiwicmVmcmVzaFBhZ2UiLCJmZXRjaExpc3QiLCJmZXRjaE5leHRQYWdlIiwicmVmcmVzaExpc3QiLCJmZXRjaE5vTW9yZSIsImluaXRpYWwiLCJuZXh0UHJvbWlzZSIsIm5leHRVUkwiLCJBcnJheSIsIm1vcmUiLCJiaW5kIiwidG90YWwiLCJsZW5ndGgiLCJPYmplY3QiLCJjb3VudCIsImFwcGVuZE9iamVjdHMiLCJuZXh0IiwibmV4dFBhZ2UiLCJtaW5pbXVtIiwiZ2V0TWluaW11bSIsIk5hTiIsIlJlbGFrc0RqYW5nb0RhdGFTb3VyY2VFdmVudCIsImNhdGNoIiwiZXJyIiwiZmV0Y2hNdWx0aXBsZSIsImNhY2hlZCIsImZldGNoT3B0aW9ucyIsInByb21pc2VzIiwiY29tcGxldGVMaXN0UHJvbWlzZSIsImFsbCIsIkZ1bmN0aW9uIiwicmVmcmVzaGluZyIsImNvbnNvbGUiLCJsb2ciLCJjaGFuZ2VkIiwibWF0Y2hPYmplY3QiLCJyZXNvbHZlIiwicmVwbGFjZUlkZW50aWZpY2FsT2JqZWN0cyIsIndhaXRGb3JOZXh0UGFnZSIsIm9sZE9iamVjdHMiLCJtb3JlUHJvbWlzZSIsIm1vcmVSZXNvbHZlIiwibW9yZVJlamVjdCIsImZldGNoTW9yZUFmdGVyd2FyZCIsInJlamVjdCIsInJlZnJlc2hlZE9iamVjdHMiLCJwYWdlUmVtYWluaW5nIiwicmVmcmVzaE5leHRQYWdlIiwiam9pbk9iamVjdExpc3RzIiwiaW5zZXJ0T25lIiwiZm9sZGVyVVJMIiwiaW5zZXJ0TXVsdGlwbGUiLCJpbnNlcnRlZE9iamVjdHMiLCJmb2xkZXJBYnNVUkwiLCJpIiwicG9zdCIsInNvbWUiLCJpbnNlcnRlZE9iamVjdCIsIm9iamVjdEZvbGRlclVSTCIsImdldE9iamVjdEZvbGRlclVSTCIsIm1hdGNoVVJMIiwiaW5Gb2xkZXIiLCJyZW1vdmVPYmplY3RzT3V0c2lkZUZvbGRlciIsImRlZmF1bHRCZWhhdmlvciIsInJ1bkhvb2siLCJ1cGRhdGVPbmUiLCJ1cGRhdGVNdWx0aXBsZSIsImdldE9iamVjdFVSTCIsInB1dCIsInVwZGF0ZWRPYmplY3RzIiwidXBkYXRlZE9iamVjdCIsIm9iamVjdFVSTCIsImRlbGV0ZU9uZSIsImRlbGV0ZU11bHRpcGxlIiwiZGVsZXRlIiwiZGVsZXRlZE9iamVjdHMiLCJrZWVwIiwiZGVsZXRlZE9iamVjdCIsImZpbmQiLCJtYXRjaFF1ZXJ5IiwiZ2V0Rm9sZGVyVVJMIiwiYWJicmV2aWF0ZWQiLCJpdGVtIiwiY29uY2F0IiwicmVxdWVzdEF1dGhlbnRpY2F0aW9uIiwiYXV0aGVudGljYXRpb24iLCJyIiwiYXV0aGVudGljYXRpb25FdmVudCIsImV2ZW50SGFuZGxlZCIsIndhaXRGb3JEZWNpc2lvbiIsImRlZmF1bHRQcmV2ZW50ZWQiLCJpbmRleCIsImluZGV4T2YiLCJzcGxpY2UiLCJhdXRoZW50aWNhdGUiLCJsb2dpblVSTCIsImNyZWRlbnRpYWxzIiwiYWxsb3dVUkxzIiwibG9naW5BYnNVUkwiLCJ0b2tlbiIsImtleSIsIkVycm9yIiwiYXV0aG9yaXplIiwiYWxsb3dBYnNVUkxzIiwiYXV0aG9yaXphdGlvbkV2ZW50IiwiYWNjZXB0YWJsZSIsImF1dGhvcml6YXRpb24iLCJhbGxvdyIsImRlbnkiLCJtYXRjaEFueVVSTCIsImdldEF1dGhvcml6YXRpb25Ub2tlbiIsImNhbmNlbEF1dGhlbnRpY2F0aW9uIiwiY2FuY2VsQXV0aG9yaXphdGlvbiIsImRlbnlVUkxzIiwiZGVueUFic1VSTHMiLCJyZXZva2VBdXRob3JpemF0aW9uIiwibG9nb3V0VVJMIiwibG9nb3V0QWJzVVJMIiwiZmV0Y2giLCJzdGF0dXMiLCJqc29uIiwic3RhdHVzVGV4dCIsImZvbGRlclVSTDEiLCJmb2xkZXJVUkwyIiwiZXhwaXJhdGlvbkNoZWNrSW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsImNoZWNrRXhwaXJhdGlvbiIsImNsZWFySW50ZXJ2YWwiLCJpbnRlcnZhbCIsIk51bWJlciIsImxpbWl0IiwibWV0aG9kIiwiaGVhZGVycyIsInJlcXVlc3QiLCJtb2RlIiwiY2FjaGUiLCJib2R5Iiwia2V5d29yZCIsImF1dGhlbnRpY2F0ZWQiLCJob29rTmFtZSIsImlucHV0IiwiaG9va0Z1bmMiLCJyZWZyZXNoUXVlcnkiLCJpZ25vcmVDaGFuZ2UiLCJyZXBsYWNlT2JqZWN0IiwicmVwbGFjZU9iamVjdHMiLCJ1bnNoaWZ0T2JqZWN0cyIsInB1c2hPYmplY3RzIiwicmVtb3ZlT2JqZWN0IiwicmVtb3ZlT2JqZWN0cyIsImltcGFjdCIsIkJvb2xlYW4iLCJzb3J0T2JqZWN0cyIsImRpZmYiLCJuZXdPYmplY3QiLCJuZXdPYmplY3RzIiwibmV3TGlzdCIsImZpbmRPYmplY3QiLCJzbGljZSIsImZpbmRPYmplY3RJbmRleCIsInVuc2hpZnQiLCJkZWxldGVkT0JqZWN0Iiwib2JqZWN0MSIsIm9iamVjdDIiLCJjb25zdHJ1Y3RvciIsInRvU3RyaW5nIiwib3RoZXJVUkxzIiwib3RoZXJVUkwiLCJzdWJzdHIiLCJsYyIsImNoYXJBdCIsImVjIiwiZmMiLCJlaSIsImxhc3RJbmRleE9mIiwiaWQiLCJxaSIsInNlcCIsInVybDEiLCJ1cmwyIiwibGlzdCIsImtleUEiLCJvYmoiLCJrZXlCIiwic29ydCIsImEiLCJiIiwib2xkTGlzdCIsInVuY2hhbmdlZCIsIm9sZEluZGV4Iiwic3RhcnRJbmRleCIsIm90aGVyZm9sZGVyVVJMIiwiZGVmIiwidHJpbSIsInBlcmNlbnQiLCJwYXJzZUludCIsIk1hdGgiLCJjZWlsIiwiZGVsdGEiLCJkYXRlIiwiRGF0ZSIsInRvSVNPU3RyaW5nIiwidGFyZ2V0IiwiZGVjaXNpb25Qcm9taXNlIiwicHJldmVudERlZmF1bHQiLCJwb3N0cG9uZURlZmF1bHQiLCJtb2R1bGUiLCJleHBvcnRzIiwiUmVhY3QiLCJJU19QUkVBQ1QiLCJoIiwiTWVhbndoaWxlIiwicmVxdWlyZSIsImhhcnZlc3QiLCJub2RlIiwiaGFydmVzdGVkIiwiaGFydmVzdE5vZGUiLCJpc1Byb21pc2UiLCJjb250ZXh0IiwiYXN5bmNSZW5kZXJpbmciLCJnZXROb2RlVHlwZSIsInJlbmRlcmVkIiwiZ2V0Tm9kZVByb3BzIiwicmVuZGVyIiwiY29tcG9uZW50Q2xhc3MiLCJjb21wb25lbnQiLCJzdGF0ZSIsImdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyIsIm9yaWdpbmFsU3RhdGUiLCJkZXJpdmVkU3RhdGUiLCJhc3NpZ24iLCJjb21wb25lbnRXaWxsTW91bnQiLCJ1cGRhdGVyIiwiUmVhY3RVcGRhdGVyIiwiVU5TQUZFX2NvbXBvbmVudFdpbGxNb3VudCIsInJlbGFrcyIsInJlbmRlckFzeW5jIiwibWVhbndoaWxlIiwic3RhdGVsZXNzQ29tcG9uZW50RnVuYyIsImhhcnZlc3RDaGlsZHJlbiIsImNoaWxkcmVuIiwiZ2V0Tm9kZUNoaWxkcmVuIiwibmV3Q2hpbGRyZW4iLCJoYXJ2ZXN0Tm9kZXMiLCJyZXBsYWNlQ2hpbGRyZW4iLCJub2RlcyIsImFzeW5jUmVuZGVyaW5nUmVxdWlyZWQiLCJuZXdOb2RlcyIsImVsZW1lbnQiLCJjbG9uZUVsZW1lbnQiLCJkZXN0Iiwic3JjIiwibm9kZU5hbWUiLCJhdHRyaWJ1dGVzIiwiZGVmaW5lUHJvcGVydHkiLCJ2YWx1ZSIsImRlZmF1bHRQcm9wcyIsImVucXVldWVDYWxsYmFjayIsImluc3QiLCJmIiwiZW5xdWV1ZUZvcmNlVXBkYXRlIiwiZW5xdWV1ZVJlcGxhY2VTdGF0ZSIsIm5ld1N0YXRlIiwiZW5xdWV1ZVNldFN0YXRlIiwicGFydGlhbFN0YXRlIiwiaXNNb3VudGVkIiwicHJldmlvdXNseSIsInN5bmNocm9ub3VzIiwic2hvd2luZ1Byb2dyZXNzIiwic2hvd2luZ1Byb2dyZXNzSW5pdGlhbGx5IiwiZGVsYXlXaGVuRW1wdHkiLCJJbmZpbml0eSIsImRlbGF5V2hlblJlbmRlcmVkIiwiY2FuY2VsZWQiLCJwcmlvciIsInByZXZpb3VzIiwiY3VycmVudCIsInVwZGF0ZVRpbWVvdXQiLCJzdGFydFRpbWUiLCJvbkNhbmNlbCIsIm9uQ29tcGxldGUiLCJvblByb2dyZXNzIiwiY2hlY2siLCJzaG93IiwiZGlzcG9zaXRpb24iLCJyZXZpc2luZyIsImRlbGF5IiwiZW1wdHkiLCJ1cGRhdGUiLCJmb3JjZWQiLCJjYW5jZWwiLCJmaW5pc2giLCJjbGVhciIsInNjcmlwdFN0YXJ0VGltZSIsIlNTUiIsIndpbmRvdyIsInVzZUhhc2hGYWxsYmFjayIsInRyYWNrTGlua3MiLCJ0cmFja0xvY2F0aW9uIiwiYmFzZVBhdGgiLCJpbml0aWFsUGF0aCIsIlJlbGFrc1JvdXRlTWFuYWdlciIsInBhcmFtcyIsInJvdXRlcyIsImhpc3RvcnkiLCJyZXdyaXRlcyIsImFkZFJvdXRlcyIsImFkZFJld3JpdGVzIiwiaGFuZGxlTGlua0NsaWNrIiwiaGFuZGxlUG9wU3RhdGUiLCJnZXRMb2NhdGlvblVSTCIsImxvY2F0aW9uIiwiY2hhbmdlIiwicmVwbGFjZSIsIm9wdCIsInJlbW92ZVJvdXRlcyIsInJld3JpdGUiLCJyZW1vdmVSZXdyaXRlcyIsIm1hdGNoIiwidGltZSIsImFwcGx5IiwibmV3Q29udGV4dCIsInVybFBhcnRzIiwiZmlsbCIsInJlYmFzZSIsImNvbXBvc2VVUkwiLCJiYWNrIiwiYmFja1Jlc29sdmUiLCJiYWNrUmVqZWN0Iiwic2V0VGltZW91dCIsInBhcnNlVVJMIiwicm91dGVEZWYiLCJ0eXBlcyIsIm1hdGNoVGVtcGxhdGUiLCJwYXRoIiwicXVlcnlWYXJOYW1lIiwicXVlcnlWYXJUZW1wbGF0ZSIsInF1ZXJ5VmFyVmFsdWUiLCJoYXNoIiwic3luYyIsImNvbmZpcm1hdGlvbkV2ZW50IiwiUmVsYWtzUm91dGVNYW5hZ2VyRXZlbnQiLCJsb2FkIiwiZW50cnkiLCJzZXRMb2NhdGlvblVSTCIsImZpbGxUZW1wbGF0ZSIsImRpcmVjdGlvbiIsImZyb20iLCJ0byIsIm5ld1BhdGgiLCJnZXRSZWxhdGl2ZVBhdGgiLCJyZXN1bHQiLCJkb2NMb2NhdGlvbiIsInByb3RvY29sIiwiaG9zdCIsInBhdGhuYW1lIiwic2VhcmNoIiwiY3VycmVudFVSTCIsInJlcGxhY2VTdGF0ZSIsInB1c2hTdGF0ZSIsImJ1dHRvbiIsImxpbmsiLCJnZXRMaW5rIiwiZG93bmxvYWQiLCJzdG9wUHJvcGFnYXRpb24iLCJ2YXJpYWJsZVJlZ0V4cCIsInJlZ0V4cENhY2hlIiwiZ2V0VVJMVGVtcGxhdGVSZWdFeHAiLCJ0ZW1wbGF0ZSIsImlzUGF0aCIsInBhdHRlcm4iLCJ2YXJpYWJsZSIsInZhcmlhYmxlVHlwZSIsInZhcmlhYmxlUGF0dGVybiIsInJlIiwiUmVnRXhwIiwiZ2V0VVJMVGVtcGxhdGVWYXJpYWJsZXMiLCJtYXRjaGVzIiwidXJsUGFydCIsInQiLCJleGVjIiwidmFyaWFibGVzIiwidmFsdWVzIiwiY2FzdFZhbHVlIiwiYWx3YXlzIiwidG9rZW5zIiwicyIsImpvaW4iLCJ1cmxQYXRoIiwic3RyaW5nIiwic3RyaW5naWZ5VmFsdWUiLCJTdHJpbmciLCJuIiwicGFyc2VGbG9hdCIsImhhc2hJbmRleCIsInF1ZXJ5SW5kZXgiLCJwYXJzZVF1ZXJ5U3RyaW5nIiwicXVlcnlTdHJpbmciLCJwYWlycyIsInNwbGl0IiwicGFydHMiLCJkZWNvZGVVUklDb21wb25lbnQiLCJjb21wb3NlUXVlcnlTdHJpbmciLCJlbmNvZGVVUklDb21wb25lbnQiLCJ0YWdOYW1lIiwiaHJlZiIsInBhcmVudE5vZGUiLCJBcHBsaWNhdGlvbiIsImhhbmRsZURhdGFTb3VyY2VDaGFuZ2UiLCJzZXRTdGF0ZSIsInN3YXBpIiwiU1dBUEkiLCJoYW5kbGVSb3V0ZUNoYW5nZSIsInJvdXRlIiwiUm91dGUiLCJyb3V0ZU1hbmFnZXIiLCJkYXRhU291cmNlIiwic3NyIiwiQ29tcG9uZW50IiwiZGVmYXVsdCIsImRvY3VtZW50IiwiY2xhc3NOYW1lIiwiZGlzcGxheU5hbWUiLCJkYXRhU291cmNlQmFzZVVSTCIsInBhZ2VCYXNlUGF0aCIsIkRqYW5nb0RhdGFTb3VyY2UiLCJSb3V0ZU1hbmFnZXIiLCJhcHBDb250YWluZXIiLCJnZXRFbGVtZW50QnlJZCIsImFwcEVsZW1lbnQiLCJmaXJzdENoaWxkIiwic2VydmVyU2lkZVJlbmRlciIsInNpIiwidGV4dCIsInN1YnN0cmluZyIsIk5hdkJhciIsIkJ1dHRvbiIsImxpbmtQcm9wcyIsInBhZ2VOYW1lIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQVEsb0JBQW9CO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RB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Ozs7OztBQ2xCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsMkJBQTJCOztBQUU1Qjs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksS0FBSztBQUNqQjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBWSxhQUFhO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxlQUFlO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxXQUFXO0FBQ3ZCLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtFQUFrRTtBQUNsRSxzRkFBc0Y7QUFDdEYsc0VBQXNFO0FBQ3RFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLFVBQVU7QUFDdEIsWUFBWSxvQkFBb0I7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTs7QUFFQTtBQUNBO0FB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkLEtBQUs7QUFDTCxjQUFjO0FBQ2Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5REFBeUQ7QUFDekQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0EsV0FBVztBQUNYOztBQUVBO0FBQ0E7QUFDQSx3Q0FBd0MsV0FBVztBQUNuRDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsU0FBUztBQUNUO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQ0FBb0MsY0FBYztBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUNBQWlDLGtCQUFrQjtBQUNuRDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCOztBQUVqQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsaUJBQWlCO0FBQ3pDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7O0FBRUE7QUFDQSxZQUFZO0FBQ1o7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSw4Q0FBOEMsUUFBUTtBQUN0RDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7O0FBRUEsV0FBVztBQUNYO0FBQ0E7QUFDQTs7QUFFQSxXQUFXO0FBQ1g7QUFDQTtBQUNBOztBQUVBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSw4Q0FBOEMsUUFBUTtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLDhDQUE4QyxRQUFRO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLDhDQUE4QyxRQUFRO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7Ozs7Ozs7O0FDaHRCQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7Ozs7OztBQ1JBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsK0JBQStCO0FBQy9COztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7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T05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHR2YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXTtcbiBcdHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSA9IGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGNodW5rSWRzLCBtb3JlTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMpIHtcbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdLCByZXN1bHQ7XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihjaHVua0lkcywgbW9yZU1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzKTtcbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdH07XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdHMgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJtYWluXCI6IDBcbiBcdH07XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuIFx0Ly8gVGhpcyBmaWxlIGNvbnRhaW5zIG9ubHkgdGhlIGVudHJ5IGNodW5rLlxuIFx0Ly8gVGhlIGNodW5rIGxvYWRpbmcgZnVuY3Rpb24gZm9yIGFkZGl0aW9uYWwgY2h1bmtzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmUgPSBmdW5jdGlvbiByZXF1aXJlRW5zdXJlKGNodW5rSWQpIHtcbiBcdFx0dmFyIGluc3RhbGxlZENodW5rRGF0YSA9IGluc3RhbGxlZENodW5rc1tjaHVua0lkXTtcbiBcdFx0aWYoaW5zdGFsbGVkQ2h1bmtEYXRhID09PSAwKSB7XG4gXHRcdFx0cmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUpIHsgcmVzb2x2ZSgpOyB9KTtcbiBcdFx0fVxuXG4gXHRcdC8vIGEgUHJvbWlzZSBtZWFucyBcImN1cnJlbnRseSBsb2FkaW5nXCIuXG4gXHRcdGlmKGluc3RhbGxlZENodW5rRGF0YSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRDaHVua0RhdGFbMl07XG4gXHRcdH1cblxuIFx0XHQvLyBzZXR1cCBQcm9taXNlIGluIGNodW5rIGNhY2hlXG4gXHRcdHZhciBwcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtEYXRhID0gaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gW3Jlc29sdmUsIHJlamVjdF07XG4gXHRcdH0pO1xuIFx0XHRpbnN0YWxsZWRDaHVua0RhdGFbMl0gPSBwcm9taXNlO1xuXG4gXHRcdC8vIHN0YXJ0IGNodW5rIGxvYWRpbmdcbiBcdFx0dmFyIGhlYWQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZCcpWzBdO1xuIFx0XHR2YXIgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gXHRcdHNjcmlwdC50eXBlID0gXCJ0ZXh0L2phdmFzY3JpcHRcIjtcbiBcdFx0c2NyaXB0LmNoYXJzZXQgPSAndXRmLTgnO1xuIFx0XHRzY3JpcHQuYXN5bmMgPSB0cnVlO1xuIFx0XHRzY3JpcHQudGltZW91dCA9IDEyMDAwMDtcblxuIFx0XHRpZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5uYykge1xuIFx0XHRcdHNjcmlwdC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBfX3dlYnBhY2tfcmVxdWlyZV9fLm5jKTtcbiBcdFx0fVxuIFx0XHRzY3JpcHQuc3JjID0gX193ZWJwYWNrX3JlcXVpcmVfXy5wICsgXCJcIiArIGNodW5rSWQgKyBcIi5hcHAuanNcIjtcbiBcdFx0dmFyIHRpbWVvdXQgPSBzZXRUaW1lb3V0KG9uU2NyaXB0Q29tcGxldGUsIDEyMDAwMCk7XG4gXHRcdHNjcmlwdC5vbmVycm9yID0gc2NyaXB0Lm9ubG9hZCA9IG9uU2NyaXB0Q29tcGxldGU7XG4gXHRcdGZ1bmN0aW9uIG9uU2NyaXB0Q29tcGxldGUoKSB7XG4gXHRcdFx0Ly8gYXZvaWQgbWVtIGxlYWtzIGluIElFLlxuIFx0XHRcdHNjcmlwdC5vbmVycm9yID0gc2NyaXB0Lm9ubG9hZCA9IG51bGw7XG4gXHRcdFx0Y2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuIFx0XHRcdHZhciBjaHVuayA9IGluc3RhbGxlZENodW5rc1tjaHVua0lkXTtcbiBcdFx0XHRpZihjaHVuayAhPT0gMCkge1xuIFx0XHRcdFx0aWYoY2h1bmspIHtcbiBcdFx0XHRcdFx0Y2h1bmtbMV0obmV3IEVycm9yKCdMb2FkaW5nIGNodW5rICcgKyBjaHVua0lkICsgJyBmYWlsZWQuJykpO1xuIFx0XHRcdFx0fVxuIFx0XHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gdW5kZWZpbmVkO1xuIFx0XHRcdH1cbiBcdFx0fTtcbiBcdFx0aGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpO1xuXG4gXHRcdHJldHVybiBwcm9taXNlO1xuIFx0fTtcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvc3RhcndhcnMvXCI7XG5cbiBcdC8vIG9uIGVycm9yIGZ1bmN0aW9uIGZvciBhc3luYyBsb2FkaW5nXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm9lID0gZnVuY3Rpb24oZXJyKSB7IGNvbnNvbGUuZXJyb3IoZXJyKTsgdGhyb3cgZXJyOyB9O1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9tYWluLmpzXCIpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGQ1MjE2Zjk1MDBiNGEwNTA4NDE2IiwidmFyIGRlZmF1bHRPcHRpb25zID0ge1xuICAgIGJhc2VVUkw6ICcnLFxuICAgIHJlZnJlc2hJbnRlcnZhbDogMCxcbiAgICBhdXRob3JpemF0aW9uS2V5d29yZDogJ1Rva2VuJyxcbiAgICBhYmJyZXZpYXRlZEZvbGRlckNvbnRlbnRzOiBmYWxzZSxcbn07XG5cbmZ1bmN0aW9uIFJlbGFrc0RqYW5nb0RhdGFTb3VyY2Uob3B0aW9ucykge1xuICAgIHRoaXMubGlzdGVuZXJzID0gW107XG4gICAgdGhpcy5xdWVyaWVzID0gW107XG4gICAgdGhpcy5hdXRoZW50aWNhdGlvbnMgPSBbXTtcbiAgICB0aGlzLmF1dGhvcml6YXRpb25zID0gW107XG4gICAgdGhpcy5vcHRpb25zID0ge307XG4gICAgZm9yICh2YXIgbmFtZSBpbiBkZWZhdWx0T3B0aW9ucykge1xuICAgICAgICBpZiAob3B0aW9ucyAmJiBvcHRpb25zW25hbWVdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMub3B0aW9uc1tuYW1lXSA9IG9wdGlvbnNbbmFtZV07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLm9wdGlvbnNbbmFtZV0gPSBkZWZhdWx0T3B0aW9uc1tuYW1lXTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxudmFyIHByb3RvdHlwZSA9IFJlbGFrc0RqYW5nb0RhdGFTb3VyY2UucHJvdG90eXBlO1xuXG4vKipcbiAqIEluaXRpYWxpemUgdGhlIGNvbXBvbmVudFxuICovXG5wcm90b3R5cGUuaW5pdGlhbGl6ZSA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuc3RhcnRFeHBpcmF0aW9uQ2hlY2soKTtcbn07XG5cbi8qKlxuICogU2h1dGRvd24gdGhlIGNvbXBvbmVudFxuICovXG5wcm90b3R5cGUuc2h1dGRvd24gPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLnN0b3BFeHBpcmF0aW9uQ2hlY2soKTtcbn07XG5cbi8qKlxuICogQXR0YWNoIGFuIGV2ZW50IGhhbmRsZXJcbiAqXG4gKiBAcGFyYW0gIHtTdHJpbmd9IHR5cGVcbiAqIEBwYXJhbSAge0Z1bmN0aW9ufSBoYW5kbGVyXG4gKi9cbnByb3RvdHlwZS5hZGRFdmVudExpc3RlbmVyID0gZnVuY3Rpb24odHlwZSwgaGFuZGxlcikge1xuICAgIHRoaXMubGlzdGVuZXJzLnB1c2goeyAgdHlwZTogdHlwZSwgIGhhbmRsZXI6IGhhbmRsZXIgfSk7XG59O1xuXG4vKipcbiAqIFJlbW92ZSBhbiBldmVudCBoYW5kbGVyXG4gKlxuICogQHBhcmFtICB7U3RyaW5nfSB0eXBlXG4gKiBAcGFyYW0gIHtGdW5jdGlvbn0gaGFuZGxlclxuICovXG5wcm90b3R5cGUucmVtb3ZlRXZlbnRMaXN0ZW5lciA9IGZ1bmN0aW9uKHR5cGUsIGhhbmRsZXIpIHtcbiAgICB0aGlzLmxpc3RlbmVycyA9IHRoaXMubGlzdGVuZXJzLmZpbHRlcihmdW5jdGlvbihsaXN0ZW5lcikge1xuICAgICAgICByZXR1cm4gIShsaXN0ZW5lci50eXBlID09PSB0eXBlICYmIGxpc3RlbmVyLmhhbmRsZXIgPT09IGhhbmRsZXIpO1xuICAgIH0pXG59O1xuXG4vKipcbiAqIFNlbmQgZXZlbnQgdG8gZXZlbnQgbGlzdGVuZXJzLCByZXR1cm4gdHJ1ZSBvciBmYWxzZSBkZXBlbmRpbmcgb24gd2hldGhlclxuICogdGhlcmUgd2VyZSBhbnkgbGlzdGVuZXJzXG4gKlxuICogQHBhcmFtICB7UmVsYWtzRGphbmdvRGF0YVNvdXJjZUV2ZW50fSBldnRcbiAqXG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICovXG5wcm90b3R5cGUudHJpZ2dlckV2ZW50ID0gZnVuY3Rpb24oZXZ0KSB7XG4gICAgdmFyIGZpcmVkID0gZmFsc2U7XG4gICAgdGhpcy5saXN0ZW5lcnMuZm9yRWFjaChmdW5jdGlvbihsaXN0ZW5lcikge1xuICAgICAgICBpZiAobGlzdGVuZXIudHlwZSA9PT0gZXZ0LnR5cGUgJiYgbGlzdGVuZXIuaGFuZGxlcikge1xuICAgICAgICAgICAgZmlyZWQgPSB0cnVlO1xuICAgICAgICAgICAgbGlzdGVuZXIuaGFuZGxlcihldnQpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGZpcmVkO1xufTtcblxuLyoqXG4gKiBBZGQgYmFzZVVSTCB0byByZWxhdGl2ZSBVUkxcbiAqXG4gKiBAcGFyYW0gIHtTdHJpbmd9IHVybFxuICpcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqL1xucHJvdG90eXBlLnJlc29sdmVVUkwgPSBmdW5jdGlvbih1cmwpIHtcbiAgICBpZiAodHlwZW9mKHVybCkgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHJldHVybiB1cmw7XG4gICAgfVxuICAgIHZhciBiYXNlVVJMID0gdGhpcy5vcHRpb25zLmJhc2VVUkw7XG4gICAgaWYgKCFiYXNlVVJMIHx8IC9eaHR0cHM/Oi8udGVzdCh1cmwpKSB7XG4gICAgICAgIHJldHVybiB1cmw7XG4gICAgfVxuICAgIHJldHVybiByZW1vdmVUcmFpbGluZ1NsYXNoKGJhc2VVUkwpICsgYWRkTGVhZGluZ1NsYXNoKHVybCk7XG59O1xuXG4vKipcbiAqIFJlc29sdmUgYSBsaXN0IG9mIFVSTHNcbiAqXG4gKiBAcGFyYW0gIHtBcnJheTxTdHJpbmc+fSB1cmxzXG4gKlxuICogQHJldHVybiB7QXJyYXk8U3RyaW5nPn1cbiAqL1xucHJvdG90eXBlLnJlc29sdmVVUkxzID0gZnVuY3Rpb24odXJscykge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgcmV0dXJuIHVybHMubWFwKGZ1bmN0aW9uKHVybCkge1xuICAgICAgICByZXR1cm4gX3RoaXMucmVzb2x2ZVVSTCh1cmwpO1xuICAgIH0pO1xufTtcblxuLyoqXG4gKiBGZXRjaCBvbmUgb2JqZWN0IGF0IHRoZSBVUkwuXG4gKlxuICogQHBhcmFtICB7U3RyaW5nfSB1cmxcbiAqIEBwYXJhbSAge09iamVjdHx1bmRlZmluZWR9IG9wdGlvbnNcbiAqXG4gKiBAcmV0dXJuIHtQcm9taXNlPE9iamVjdD59XG4gKi9cbnByb3RvdHlwZS5mZXRjaE9uZSA9IGZ1bmN0aW9uKHVybCwgb3B0aW9ucykge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgdmFyIGFic1VSTCA9IHRoaXMucmVzb2x2ZVVSTCh1cmwpO1xuICAgIHZhciBwcm9wcyA9IHtcbiAgICAgICAgdHlwZTogJ29iamVjdCcsXG4gICAgICAgIHVybDogYWJzVVJMLFxuICAgICAgICBvcHRpb25zOiBvcHRpb25zIHx8IHt9LFxuICAgIH07XG4gICAgdmFyIHF1ZXJ5ID0gdGhpcy5maW5kUXVlcnkocHJvcHMpO1xuICAgIGlmICghcXVlcnkpIHtcbiAgICAgICAgcXVlcnkgPSB0aGlzLmRlcml2ZVF1ZXJ5KHByb3BzKTtcbiAgICB9XG4gICAgaWYgKCFxdWVyeSkge1xuICAgICAgICBxdWVyeSA9IHByb3BzO1xuICAgICAgICBxdWVyeS5wcm9taXNlID0gdGhpcy5nZXQoYWJzVVJMKS50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICB2YXIgb2JqZWN0ID0gcmVzcG9uc2U7XG4gICAgICAgICAgICBfdGhpcy51cGRhdGVRdWVyeShxdWVyeSwge1xuICAgICAgICAgICAgICAgIG9iamVjdDogb2JqZWN0LFxuICAgICAgICAgICAgICAgIHJldHJpZXZhbFRpbWU6IGdldFRpbWUoKSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIG9iamVjdDtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuYWRkUXVlcnkocXVlcnkpO1xuICAgIH1cbiAgICByZXR1cm4gcXVlcnkucHJvbWlzZS50aGVuKGZ1bmN0aW9uKG9iamVjdCkge1xuICAgICAgICBpZiAocXVlcnkuZGlydHkpICB7XG4gICAgICAgICAgICBfdGhpcy5yZWZyZXNoT25lKHF1ZXJ5KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gb2JqZWN0O1xuICAgIH0pO1xufTtcblxuLyoqXG4gKiBGZXRjaCBhIHBhZ2Ugb2Ygb2JqZWN0c1xuICpcbiAqIEBwYXJhbSAge1N0cmluZ30gdXJsXG4gKiBAcGFyYW0gIHtOdW1iZXJ9IHBhZ2VcbiAqIEBwYXJhbSAge09iamVjdHx1bmRlZmluZWR9IG9wdGlvbnNcbiAqXG4gKiBAcmV0dXJuIHtQcm9taXNlPEFycmF5Pn1cbiAqL1xucHJvdG90eXBlLmZldGNoUGFnZSA9IGZ1bmN0aW9uKHVybCwgcGFnZSwgb3B0aW9ucykge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgdmFyIGFic1VSTCA9IHRoaXMucmVzb2x2ZVVSTCh1cmwpO1xuICAgIHZhciBwcm9wcyA9IHtcbiAgICAgICAgdHlwZTogJ3BhZ2UnLFxuICAgICAgICB1cmw6IHVybCxcbiAgICAgICAgcGFnZTogcGFnZSxcbiAgICAgICAgb3B0aW9uczogb3B0aW9ucyB8fCB7fSxcbiAgICB9O1xuICAgIHZhciBxdWVyeSA9IHRoaXMuZmluZFF1ZXJ5KHByb3BzKTtcbiAgICBpZiAoIXF1ZXJ5KSB7XG4gICAgICAgIHZhciBwYWdlVVJMID0gYXR0YWNoUGFnZU51bWJlcihhYnNVUkwsIHBhZ2UpO1xuICAgICAgICBxdWVyeSA9IHByb3BzO1xuICAgICAgICBxdWVyeS5wcm9taXNlID0gdGhpcy5nZXQocGFnZVVSTCkudGhlbihmdW5jdGlvbihyZXNwb25zZSkge1xuICAgICAgICAgICAgdmFyIG9iamVjdHMgPSByZXNwb25zZS5yZXN1bHRzO1xuICAgICAgICAgICAgX3RoaXMudXBkYXRlUXVlcnkocXVlcnksIHtcbiAgICAgICAgICAgICAgICBvYmplY3RzOiBvYmplY3RzLFxuICAgICAgICAgICAgICAgIHJldHJpZXZhbFRpbWU6IGdldFRpbWUoKSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIG9iamVjdHM7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmFkZFF1ZXJ5KHF1ZXJ5KVxuICAgIH1cbiAgICByZXR1cm4gcXVlcnkucHJvbWlzZS50aGVuKGZ1bmN0aW9uKG9iamVjdHMpIHtcbiAgICAgICAgaWYgKHF1ZXJ5LmRpcnR5KSAge1xuICAgICAgICAgICAgX3RoaXMucmVmcmVzaFBhZ2UocXVlcnkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBvYmplY3RzO1xuICAgIH0pO1xufTtcblxuLyoqXG4gKiBGZXRjaCBhIGxpc3Qgb2Ygb2JqZWN0cyBhdCB0aGUgZ2l2ZW4gVVJMLlxuICpcbiAqIEBwYXJhbSAge1N0cmluZ30gdXJsXG4gKiBAcGFyYW0gIHtPYmplY3R9IG9wdGlvbnNcbiAqXG4gKiBAcmV0dXJuIHtQcm9taXNlPEFycmF5Pn1cbiAqL1xucHJvdG90eXBlLmZldGNoTGlzdCA9IGZ1bmN0aW9uKHVybCwgb3B0aW9ucykge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgdmFyIGFic1VSTCA9IHRoaXMucmVzb2x2ZVVSTCh1cmwpO1xuICAgIHZhciBwcm9wcyA9IHtcbiAgICAgICAgdHlwZTogJ2xpc3QnLFxuICAgICAgICB1cmw6IGFic1VSTCxcbiAgICAgICAgb3B0aW9uczogb3B0aW9ucyB8fCB7fSxcbiAgICB9O1xuICAgIHZhciBxdWVyeSA9IHRoaXMuZmluZFF1ZXJ5KHByb3BzKTtcbiAgICBpZiAoIXF1ZXJ5KSB7XG4gICAgICAgIHF1ZXJ5ID0gcHJvcHM7XG4gICAgICAgIHF1ZXJ5LnByb21pc2UgPSB0aGlzLmZldGNoTmV4dFBhZ2UocXVlcnksIHRydWUpO1xuICAgICAgICB0aGlzLmFkZFF1ZXJ5KHF1ZXJ5KTtcbiAgICB9XG4gICAgcmV0dXJuIHF1ZXJ5LnByb21pc2UudGhlbihmdW5jdGlvbihvYmplY3RzKSB7XG4gICAgICAgIGlmIChxdWVyeS5kaXJ0eSkgIHtcbiAgICAgICAgICAgIF90aGlzLnJlZnJlc2hMaXN0KHF1ZXJ5KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gb2JqZWN0cztcbiAgICB9KTtcbn07XG5cbi8qKlxuICogUmV0dXJuIHdoYXQgaGFzIGJlZW4gZmV0Y2hlZC4gVXNlZCBieSBmZXRjaExpc3QoKS5cbiAqXG4gKiBAcGFyYW0gIHtPYmplY3R9IHF1ZXJ5XG4gKlxuICogQHJldHVybiB7UHJvbWlzZTxBcnJheT59XG4gKi9cbnByb3RvdHlwZS5mZXRjaE5vTW9yZSA9IGZ1bmN0aW9uKHF1ZXJ5KSB7XG4gICAgcmV0dXJuIHF1ZXJ5LnByb21pc2U7XG59O1xuXG4vKipcbiAqIEluaXRpYXRlIGZldGNoaW5nIG9mIHRoZSBuZXh0IHBhZ2UuIFVzZWQgYnkgZmV0Y2hMaXN0KCkuXG4gKlxuICogQHBhcmFtICB7T2JqZWN0fSBxdWVyeVxuICogQHBhcmFtICB7Qm9vbGVhbn0gaW5pdGlhbFxuICpcbiAqIEByZXR1cm4ge1Byb21pc2U8QXJyYXk+fVxuICovXG5wcm90b3R5cGUuZmV0Y2hOZXh0UGFnZSA9IGZ1bmN0aW9uKHF1ZXJ5LCBpbml0aWFsKSB7XG4gICAgaWYgKHF1ZXJ5Lm5leHRQcm9taXNlKSB7XG4gICAgICAgIHJldHVybiBxdWVyeS5uZXh0UHJvbWlzZTtcbiAgICB9XG4gICAgdmFyIF90aGlzID0gdGhpcztcbiAgICB2YXIgbmV4dFVSTCA9IChpbml0aWFsKSA/IHF1ZXJ5LnVybCA6IHF1ZXJ5Lm5leHRVUkw7XG4gICAgdmFyIG5leHRQcm9taXNlID0gdGhpcy5nZXQobmV4dFVSTCkudGhlbihmdW5jdGlvbihyZXNwb25zZSkge1xuICAgICAgICBpZiAocmVzcG9uc2UgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICAgICAgLy8gdGhlIGZ1bGwgbGlzdCBpcyByZXR1cm5lZFxuICAgICAgICAgICAgdmFyIG9iamVjdHMgPSByZXNwb25zZTtcbiAgICAgICAgICAgIF90aGlzLnVwZGF0ZVF1ZXJ5KHF1ZXJ5LCB7XG4gICAgICAgICAgICAgICAgb2JqZWN0czogb2JqZWN0cyxcbiAgICAgICAgICAgICAgICByZXRyaWV2YWxUaW1lOiBnZXRUaW1lKCksXG4gICAgICAgICAgICAgICAgbmV4dFByb21pc2U6IG51bGwsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIG9iamVjdHMubW9yZSA9IF90aGlzLmZldGNoTm9Nb3JlLmJpbmQoX3RoaXMsIHF1ZXJ5KTtcbiAgICAgICAgICAgIG9iamVjdHMudG90YWwgPSBvYmplY3RzLmxlbmd0aDtcbiAgICAgICAgICAgIHJldHVybiBvYmplY3RzO1xuICAgICAgICB9IGVsc2UgaWYgKHJlc3BvbnNlIGluc3RhbmNlb2YgT2JqZWN0KSB7XG4gICAgICAgICAgICAvLyBhcHBlbmQgcmV0cmlldmVkIG9iamVjdHMgdG8gbGlzdFxuICAgICAgICAgICAgdmFyIHRvdGFsID0gcmVzcG9uc2UuY291bnQ7XG4gICAgICAgICAgICB2YXIgb2JqZWN0cyA9IGFwcGVuZE9iamVjdHMocXVlcnkub2JqZWN0cywgcmVzcG9uc2UucmVzdWx0cyk7XG4gICAgICAgICAgICBfdGhpcy51cGRhdGVRdWVyeShxdWVyeSwge1xuICAgICAgICAgICAgICAgIG9iamVjdHM6IG9iamVjdHMsXG4gICAgICAgICAgICAgICAgcHJvbWlzZTogbmV4dFByb21pc2UsXG4gICAgICAgICAgICAgICAgcmV0cmlldmFsVGltZTogKGluaXRpYWwpID8gZ2V0VGltZSgpIDogcXVlcnkucmV0cmlldmFsVGltZSxcbiAgICAgICAgICAgICAgICBuZXh0VVJMOiByZXNwb25zZS5uZXh0LFxuICAgICAgICAgICAgICAgIG5leHRQYWdlOiAocXVlcnkubmV4dFBhZ2UgfHwgMSkgKyAxLFxuICAgICAgICAgICAgICAgIG5leHRQcm9taXNlOiBudWxsLFxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIC8vIGF0dGFjaCBmdW5jdGlvbiB0byByZXN1bHRzIHNvIGNhbGxlciBjYW4gYXNrIGZvciBtb3JlIHJlc3VsdHNcbiAgICAgICAgICAgIGlmIChxdWVyeS5uZXh0VVJMKSB7XG4gICAgICAgICAgICAgICAgb2JqZWN0cy5tb3JlID0gX3RoaXMuZmV0Y2hOZXh0UGFnZS5iaW5kKF90aGlzLCBxdWVyeSwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIG9iamVjdHMudG90YWwgPSB0b3RhbDtcblxuICAgICAgICAgICAgICAgIC8vIGlmIG1pbmltdW0gaXMgcHJvdmlkZSwgZmV0Y2ggbW9yZSBpZiBpdCdzIG5vdCBtZXRcbiAgICAgICAgICAgICAgICB2YXIgbWluaW11bSA9IGdldE1pbmltdW0ocXVlcnkub3B0aW9ucywgdG90YWwsIE5hTik7XG4gICAgICAgICAgICAgICAgaWYgKG9iamVjdHMubGVuZ3RoIDwgbWluaW11bSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBmZXRjaCB0aGUgbmV4dCBwYWdlXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfdGhpcy5mZXRjaE5leHRQYWdlKHF1ZXJ5LCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBvYmplY3RzLm1vcmUgPSBfdGhpcy5mZXRjaE5vTW9yZS5iaW5kKF90aGlzLCBxdWVyeSk7XG4gICAgICAgICAgICAgICAgb2JqZWN0cy50b3RhbCA9IG9iamVjdHMubGVuZ3RoO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBpbmZvcm0gcGFyZW50IGNvbXBvbmVudCB0aGF0IG1vcmUgZGF0YSBpcyBhdmFpbGFibGVcbiAgICAgICAgICAgIGlmICghaW5pdGlhbCkge1xuICAgICAgICAgICAgICAgIF90aGlzLnRyaWdnZXJFdmVudChuZXcgUmVsYWtzRGphbmdvRGF0YVNvdXJjZUV2ZW50KCdjaGFuZ2UnLCBfdGhpcykpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG9iamVjdHM7XG4gICAgICAgIH1cbiAgICB9KS5jYXRjaChmdW5jdGlvbihlcnIpIHtcbiAgICAgICAgaWYgKCFpbml0aWFsKSB7XG4gICAgICAgICAgICBfdGhpcy51cGRhdGVRdWVyeShxdWVyeSwgeyBuZXh0UHJvbWlzZTogbnVsbCB9KTtcbiAgICAgICAgfVxuICAgICAgICB0aHJvdyBlcnI7XG4gICAgfSk7XG4gICAgaWYgKCFpbml0aWFsKSB7XG4gICAgICAgIF90aGlzLnVwZGF0ZVF1ZXJ5KHF1ZXJ5LCB7IG5leHRQcm9taXNlIH0pO1xuICAgIH1cbiAgICByZXR1cm4gbmV4dFByb21pc2U7XG59O1xuXG4vKipcbiAqIEZldGNoIG11bHRpcGxlIEpTT04gb2JqZWN0cy4gSWYgbWluaW11bSBpcyBzcGVjaWZpZWQsIHRoZW4gaW1tZWRpYXRlbHlcbiAqIHJlc29sdmUgd2l0aCBjYWNoZWQgcmVzdWx0cyB3aGVuIHRoZXJlJ3JlIHN1ZmZpY2llbnQgbnVtYmVycyBvZiBvYmplY3RzLlxuICogQW4gb25DaGFuZ2Ugd2lsbCBiZSB0cmlnZ2VyIG9uY2UgdGhlIGZ1bGwgc2V0IGlzIHJldHJpZXZlZC5cbiAqXG4gKiBAcGFyYW0gIHtBcnJheTxTdHJpbmc+fSB1cmxzXG4gKiBAcGFyYW0gIHtPYmplY3R9IG9wdGlvbnNcbiAqXG4gKiBAcmV0dXJuIHtQcm9taXNlPEFycmF5Pn1cbiAqL1xucHJvdG90eXBlLmZldGNoTXVsdGlwbGUgPSBmdW5jdGlvbih1cmxzLCBvcHRpb25zKSB7XG4gICAgLy8gc2VlIHdoaWNoIG9uZXMgYXJlIGNhY2hlZCBhbHJlYWR5XG4gICAgdmFyIF90aGlzID0gdGhpcztcbiAgICB2YXIgY2FjaGVkID0gMDtcbiAgICB2YXIgZmV0Y2hPcHRpb25zID0ge307XG4gICAgZm9yICh2YXIgbmFtZSBpbiBvcHRpb25zKSB7XG4gICAgICAgIGlmIChuYW1lICE9PSAnbWluaW11bScpIHtcbiAgICAgICAgICAgIGZldGNoT3B0aW9uc1tuYW1lXSA9IG9wdGlvbnNbbmFtZV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgdmFyIHByb21pc2VzID0gdXJscy5tYXAoZnVuY3Rpb24odXJsKSB7XG4gICAgICAgIHZhciBhYnNVUkwgPSBfdGhpcy5yZXNvbHZlVVJMKHVybCk7XG4gICAgICAgIHZhciBwcm9wcyA9IHsgdXJsOiBhYnNVUkwsIHR5cGU6ICdvYmplY3QnIH07XG4gICAgICAgIHZhciBxdWVyeSA9IF90aGlzLmZpbmRRdWVyeShwcm9wcyk7XG4gICAgICAgIGlmICghcXVlcnkpIHtcbiAgICAgICAgICAgIHF1ZXJ5ID0gX3RoaXMuZGVyaXZlUXVlcnkocHJvcHMpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChxdWVyeSAmJiBxdWVyeS5vYmplY3QpIHtcbiAgICAgICAgICAgIGNhY2hlZCsrO1xuICAgICAgICAgICAgcmV0dXJuIHF1ZXJ5Lm9iamVjdDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBfdGhpcy5mZXRjaE9uZShhYnNVUkwsIGZldGNoT3B0aW9ucyk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIHdhaXQgZm9yIHRoZSBjb21wbGV0ZSBsaXN0IHRvIGFycml2ZVxuICAgIHZhciBjb21wbGV0ZUxpc3RQcm9taXNlO1xuICAgIGlmIChjYWNoZWQgPCB1cmxzLmxlbmd0aCkge1xuICAgICAgICBjb21wbGV0ZUxpc3RQcm9taXNlID0gUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xuICAgIH1cblxuICAgIC8vIHNlZSB3aGV0aGVyIHBhcnRpYWwgcmVzdWx0IHNldCBzaG91bGQgYmUgaW1tZWRpYXRlbHkgcmV0dXJuZWRcbiAgICB2YXIgbWluaW11bSA9IGdldE1pbmltdW0ob3B0aW9ucywgdXJscy5sZW5ndGgsIHVybHMubGVuZ3RoKTtcbiAgICBpZiAoY2FjaGVkIDwgbWluaW11bSAmJiBjb21wbGV0ZUxpc3RQcm9taXNlKSB7XG4gICAgICAgIHJldHVybiBjb21wbGV0ZUxpc3RQcm9taXNlO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChjb21wbGV0ZUxpc3RQcm9taXNlKSB7XG4gICAgICAgICAgICAvLyByZXR1cm4gcGFydGlhbCBsaXN0IHRoZW4gZmlyZSBjaGFuZ2UgZXZlbnQgd2hlbiBjb21wbGV0ZSBsaXN0IGFycml2ZXNcbiAgICAgICAgICAgIGNvbXBsZXRlTGlzdFByb21pc2UudGhlbihmdW5jdGlvbihvYmplY3RzKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMudHJpZ2dlckV2ZW50KG5ldyBSZWxha3NEamFuZ29EYXRhU291cmNlRXZlbnQoJ2NoYW5nZScsIF90aGlzKSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBwcm9taXNlcy5tYXAoZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgICAgICAgICAgICAgaWYgKG9iamVjdC50aGVuIGluc3RhbmNlb2YgRnVuY3Rpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7ICAgIC8vIGEgcHJvbWlzZS0tZG9uJ3QgcmV0dXJuIGl0XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9iamVjdDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIGxpc3QgaXMgY29tcGxldGUgYWxyZWFkeVxuICAgICAgICAgICAgcmV0dXJuIHByb21pc2VzO1xuICAgICAgICB9XG4gICAgfVxufTtcblxuLyoqXG4gKiBSZXBlcmZvcm0gYW4gcXVlcnkgZm9yIGFuIG9iamVjdCwgdHJpZ2dlcmluZyBhbiBvbkNoYW5nZSBldmVudCBpZiB0aGVcbiAqIG9iamVjdCBoYXMgY2hhbmdlZC5cbiAqXG4gKiBAcGFyYW0gIHtPYmplY3R9IHF1ZXJ5XG4gKi9cbnByb3RvdHlwZS5yZWZyZXNoT25lID0gZnVuY3Rpb24ocXVlcnkpIHtcbiAgICBpZiAocXVlcnkucmVmcmVzaGluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKCdSZWZyZXNoaW5nIG9iamVjdCcsIHF1ZXJ5KTtcbiAgICB0aGlzLnVwZGF0ZVF1ZXJ5KHF1ZXJ5LCB7IHJlZnJlc2hpbmc6IHRydWUgfSk7XG5cbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgIHZhciByZXRyaWV2YWxUaW1lID0gZ2V0VGltZSgpO1xuICAgIHRoaXMuZ2V0KHF1ZXJ5LnVybCkudGhlbihmdW5jdGlvbihyZXNwb25zZSkge1xuICAgICAgICB2YXIgb2JqZWN0ID0gcmVzcG9uc2U7XG4gICAgICAgIHZhciBjaGFuZ2VkID0gdHJ1ZTtcbiAgICAgICAgaWYgKG1hdGNoT2JqZWN0KG9iamVjdCwgcXVlcnkub2JqZWN0KSkge1xuICAgICAgICAgICAgb2JqZWN0ID0gcXVlcnkub2JqZWN0O1xuICAgICAgICAgICAgY2hhbmdlZCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIF90aGlzLnVwZGF0ZVF1ZXJ5KHF1ZXJ5LCB7XG4gICAgICAgICAgICBvYmplY3Q6IG9iamVjdCxcbiAgICAgICAgICAgIHByb21pc2U6IFByb21pc2UucmVzb2x2ZShvYmplY3QpLFxuICAgICAgICAgICAgcmV0cmlldmFsVGltZTogcmV0cmlldmFsVGltZSxcbiAgICAgICAgICAgIHJlZnJlc2hpbmc6IGZhbHNlLFxuICAgICAgICAgICAgZGlydHk6IGZhbHNlLFxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKGNoYW5nZWQpIHtcbiAgICAgICAgICAgIF90aGlzLnRyaWdnZXJFdmVudChuZXcgUmVsYWtzRGphbmdvRGF0YVNvdXJjZUV2ZW50KCdjaGFuZ2UnLCBfdGhpcykpO1xuICAgICAgICB9XG4gICAgfSkuY2F0Y2goZnVuY3Rpb24oZXJyKSB7XG4gICAgICAgIF90aGlzLnVwZGF0ZVF1ZXJ5KHF1ZXJ5LCB7IHJlZnJlc2hpbmc6IGZhbHNlIH0pO1xuICAgIH0pO1xufTtcblxuLyoqXG4gKiBSZXBlcmZvcm0gYW4gcXVlcnkgZm9yIGEgcGFnZSBvZiBvYmplY3RzLCB0cmlnZ2VyaW5nIGFuIG9uQ2hhbmdlIGV2ZW50IGlmXG4gKiB0aGUgbGlzdCBpcyBkaWZmZXJlbnQgZnJvbSB0aGUgb25lIGZldGNoZWQgcHJldmlvdXNseS5cbiAqXG4gKiBAcGFyYW0gIHtPYmplY3R9IHF1ZXJ5XG4gKi9cbnByb3RvdHlwZS5yZWZyZXNoUGFnZSA9IGZ1bmN0aW9uKHF1ZXJ5KSB7XG4gICAgaWYgKHF1ZXJ5LnJlZnJlc2hpbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zb2xlLmxvZygnUmVmcmVzaGluZyBwYWdlJywgcXVlcnkudXJsKTtcbiAgICB0aGlzLnVwZGF0ZVF1ZXJ5KHF1ZXJ5LCB7IHJlZnJlc2hpbmc6IHRydWUgfSk7XG5cbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgIHZhciByZXRyaWV2YWxUaW1lID0gZ2V0VGltZSgpO1xuICAgIHZhciBwYWdlVVJMID0gYXR0YWNoUGFnZU51bWJlcihxdWVyeS51cmwsIHF1ZXJ5LnBhZ2UpO1xuICAgIHRoaXMuZ2V0KHBhZ2VVUkwpLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcbiAgICAgICAgdmFyIG9iamVjdHMgPSByZXNwb25zZS5yZXN1bHRzO1xuICAgICAgICB2YXIgY2hhbmdlZCA9IHRydWU7XG4gICAgICAgIGlmIChyZXBsYWNlSWRlbnRpZmljYWxPYmplY3RzKG9iamVjdHMsIHF1ZXJ5Lm9iamVjdHMpKSB7XG4gICAgICAgICAgICBvYmplY3RzID0gcXVlcnkub2JqZWN0cztcbiAgICAgICAgICAgIGNoYW5nZWQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBfdGhpcy51cGRhdGVRdWVyeShxdWVyeSwge1xuICAgICAgICAgICAgb2JqZWN0czogb2JqZWN0cyxcbiAgICAgICAgICAgIHByb21pc2U6IFByb21pc2UucmVzb2x2ZShvYmplY3RzKSxcbiAgICAgICAgICAgIHJldHJpZXZhbFRpbWU6IHJldHJpZXZhbFRpbWUsXG4gICAgICAgICAgICByZWZyZXNoaW5nOiBmYWxzZSxcbiAgICAgICAgICAgIGRpcnR5OiBmYWxzZSxcbiAgICAgICAgfSlcbiAgICAgICAgaWYgKGNoYW5nZWQpIHtcbiAgICAgICAgICAgIF90aGlzLnRyaWdnZXJFdmVudChuZXcgUmVsYWtzRGphbmdvRGF0YVNvdXJjZUV2ZW50KCdjaGFuZ2UnLCBfdGhpcykpO1xuICAgICAgICB9XG4gICAgfSkuY2F0Y2goZnVuY3Rpb24oZXJyKSB7XG4gICAgICAgIF90aGlzLnVwZGF0ZVF1ZXJ5KHF1ZXJ5LCB7IHJlZnJlc2hpbmc6IGZhbHNlIH0pO1xuICAgIH0pO1xufTtcblxuLyoqXG4gKiBSZXBlcmZvcm0gYW4gcXVlcnkgZm9yIGEgbGlzdCBvZiBvYmplY3RzLCB0cmlnZ2VyaW5nIGFuIG9uQ2hhbmdlIGV2ZW50IGlmXG4gKiB0aGUgbGlzdCBpcyBkaWZmZXJlbnQgZnJvbSB0aGUgb25lIGZldGNoZWQgcHJldmlvdXNseS5cbiAqXG4gKiBAcGFyYW0gIHtPYmplY3R9IHF1ZXJ5XG4gKi9cbnByb3RvdHlwZS5yZWZyZXNoTGlzdCA9IGZ1bmN0aW9uKHF1ZXJ5KSB7XG4gICAgaWYgKHF1ZXJ5LnJlZnJlc2hpbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zb2xlLmxvZygnUmVmcmVzaGluZyBsaXN0JywgcXVlcnkudXJsKTtcbiAgICB0aGlzLnVwZGF0ZVF1ZXJ5KHF1ZXJ5LCB7IHJlZnJlc2hpbmc6IHRydWUgfSk7XG5cbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgIGlmIChxdWVyeS5uZXh0UGFnZSkge1xuICAgICAgICAvLyB1cGRhdGluZyBwYWdpbmF0ZWQgbGlzdFxuICAgICAgICAvLyB3YWl0IGZvciBhbnkgY2FsbCB0byBtb3JlKCkgdG8gZmluaXNoIGZpcnN0XG4gICAgICAgIHdhaXRGb3JOZXh0UGFnZShxdWVyeSkudGhlbihmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIC8vIHN1cHByZXNzIGZldGNoaW5nIG9mIGFkZGl0aW9uYWwgcGFnZXMgZm9yIHRoZSB0aW1lIGJlaW5nXG4gICAgICAgICAgICB2YXIgb2xkT2JqZWN0cyA9IHF1ZXJ5Lm9iamVjdHM7XG4gICAgICAgICAgICB2YXIgbW9yZVByb21pc2UsIG1vcmVSZXNvbHZlLCBtb3JlUmVqZWN0O1xuICAgICAgICAgICAgdmFyIGZldGNoTW9yZUFmdGVyd2FyZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIGlmICghbW9yZVByb21pc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgbW9yZVByb21pc2UgPSBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vcmVSZXNvbHZlID0gcmVzb2x2ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vcmVSZWplY3QgPSByZWplY3Q7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gbW9yZVByb21pc2U7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgb2xkT2JqZWN0cy5tb3JlID0gZmV0Y2hNb3JlQWZ0ZXJ3YXJkO1xuXG4gICAgICAgICAgICB2YXIgcmVmcmVzaGVkT2JqZWN0cztcbiAgICAgICAgICAgIHZhciBwYWdlUmVtYWluaW5nID0gcXVlcnkubmV4dFBhZ2UgLSAxO1xuICAgICAgICAgICAgdmFyIG5leHRVUkwgPSBxdWVyeS51cmw7XG5cbiAgICAgICAgICAgIHZhciByZWZyZXNoTmV4dFBhZ2UgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX3RoaXMuZ2V0KG5leHRVUkwpLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgcGFnZVJlbWFpbmluZy0tO1xuICAgICAgICAgICAgICAgICAgICBuZXh0VVJMID0gcmVzcG9uc2UubmV4dDtcbiAgICAgICAgICAgICAgICAgICAgcmVmcmVzaGVkT2JqZWN0cyA9IGFwcGVuZE9iamVjdHMocmVmcmVzaGVkT2JqZWN0cywgcmVzcG9uc2UucmVzdWx0cyk7XG4gICAgICAgICAgICAgICAgICAgIHZhciB0b3RhbCA9IHJlc3BvbnNlLmNvdW50O1xuICAgICAgICAgICAgICAgICAgICB2YXIgb2JqZWN0cyA9IGpvaW5PYmplY3RMaXN0cyhyZWZyZXNoZWRPYmplY3RzLCBvbGRPYmplY3RzKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNoYW5nZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBvYmplY3RzLm1vcmUgPSBmZXRjaE1vcmVBZnRlcndhcmQ7XG4gICAgICAgICAgICAgICAgICAgIG9iamVjdHMudG90YWwgPSB0b3RhbDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlcGxhY2VJZGVudGlmaWNhbE9iamVjdHMob2JqZWN0cywgcXVlcnkub2JqZWN0cykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9iamVjdHMgPSBxdWVyeS5vYmplY3RzO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2hhbmdlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8vIHNldCBxdWVyeS5uZXh0VVJMIHRvIHRoZSBVUkwgZ2l2ZW4gYnkgdGhlIHNlcnZlclxuICAgICAgICAgICAgICAgICAgICAvLyBpbiB0aGUgZXZlbnQgdGhhdCBuZXcgcGFnZXMgaGF2ZSBiZWNvbWUgYXZhaWxhYmxlXG4gICAgICAgICAgICAgICAgICAgIF90aGlzLnVwZGF0ZVF1ZXJ5KHF1ZXJ5LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvYmplY3RzOiBvYmplY3RzLFxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvbWlzZTogUHJvbWlzZS5yZXNvbHZlKG9iamVjdHMpLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmV4dFVSTDogKHBhZ2VSZW1haW5pbmcgPT09IDApID8gbmV4dFVSTCA6IHF1ZXJ5Lm5leHRVUkwsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBpZiAoY2hhbmdlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMudHJpZ2dlckV2ZW50KG5ldyBSZWxha3NEamFuZ29EYXRhU291cmNlRXZlbnQoJ2NoYW5nZScsIF90aGlzKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy8ga2VlcCBnb2luZyB1bnRpbCBhbGwgcGFnZXMgaGF2ZSBiZWVuIHVwZGF0ZWRcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBhZ2VSZW1haW5pbmcgPiAwICYmIG5leHRVUkwgJiYgcXVlcnkubmV4dFVSTCAhPT0gbmV4dFVSTCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlZnJlc2hOZXh0UGFnZSgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICB2YXIgcmV0cmlldmFsVGltZSA9IGdldFRpbWUoKTtcbiAgICAgICAgICAgIHJlZnJlc2hOZXh0UGFnZSgpLnRoZW4oZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgLy8gd2UncmUgZG9uZS0tcmVlbmFibGUgZmV0Y2hpbmcgb2YgYWRkaXRpb25hbCBwYWdlc1xuICAgICAgICAgICAgICAgIGlmIChxdWVyeS5uZXh0VVJMKSB7XG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5Lm9iamVjdHMubW9yZSA9IF90aGlzLmZldGNoTmV4dFBhZ2UuYmluZChfdGhpcywgcXVlcnksIGZhbHNlKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBxdWVyeS5vYmplY3RzLm1vcmUgPSBfdGhpcy5mZXRjaE5vTW9yZS5iaW5kKF90aGlzLCBxdWVyeSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIHRyaWdnZXIgaXQgaWYgbW9yZSgpIGhhZCBiZWVuIGNhbGxlZFxuICAgICAgICAgICAgICAgIGlmIChtb3JlUHJvbWlzZSkge1xuICAgICAgICAgICAgICAgICAgICBxdWVyeS5vYmplY3RzLm1vcmUoKS50aGVuKG1vcmVSZXNvbHZlLCBtb3JlUmVqZWN0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgX3RoaXMudXBkYXRlUXVlcnkocXVlcnksIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0cmlldmFsVGltZTogcmV0cmlldmFsVGltZSxcbiAgICAgICAgICAgICAgICAgICAgcmVmcmVzaGluZzogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIGRpcnR5OiBmYWxzZSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uKGVycikge1xuICAgICAgICAgICAgICAgIF90aGlzLnVwZGF0ZVF1ZXJ5KHF1ZXJ5LCB7IHJlZnJlc2hpbmc6IGZhbHNlIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIHVwZGF0aW5nIHVuLXBhZ2luYXRlZCBsaXN0XG4gICAgICAgIHZhciByZXRyaWV2YWxUaW1lID0gZ2V0VGltZSgpO1xuICAgICAgICB0aGlzLmdldChxdWVyeS51cmwpLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcbiAgICAgICAgICAgIHZhciBvYmplY3RzID0gcmVzcG9uc2U7XG4gICAgICAgICAgICB2YXIgY2hhbmdlZCA9IHRydWU7XG4gICAgICAgICAgICBpZiAocmVwbGFjZUlkZW50aWZpY2FsT2JqZWN0cyhvYmplY3RzLCBxdWVyeS5vYmplY3RzKSkge1xuICAgICAgICAgICAgICAgIG9iamVjdHMgPSBxdWVyeS5vYmplY3RzO1xuICAgICAgICAgICAgICAgIGNoYW5nZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG9iamVjdHMubW9yZSA9IF90aGlzLmZldGNoTm9Nb3JlLmJpbmQodGhpcywgcXVlcnkpO1xuICAgICAgICAgICAgb2JqZWN0cy50b3RhbCA9IG9iamVjdHMubGVuZ3RoO1xuICAgICAgICAgICAgX3RoaXMudXBkYXRlUXVlcnkocXVlcnksIHtcbiAgICAgICAgICAgICAgICBvYmplY3RzOiBvYmplY3RzLFxuICAgICAgICAgICAgICAgIHByb21pc2U6IFByb21pc2UucmVzb2x2ZShvYmplY3RzKSxcbiAgICAgICAgICAgICAgICByZXRyaWV2YWxUaW1lOiByZXRyaWV2YWxUaW1lLFxuICAgICAgICAgICAgICAgIHJlZnJlc2hpbmc6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGRpcnR5OiBmYWxzZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKGNoYW5nZWQpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy50cmlnZ2VyRXZlbnQobmV3IFJlbGFrc0RqYW5nb0RhdGFTb3VyY2VFdmVudCgnY2hhbmdlJywgX3RoaXMpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkuY2F0Y2goZnVuY3Rpb24oZXJyKSB7XG4gICAgICAgICAgICBfdGhpcy51cGRhdGVRdWVyeShxdWVyeSwgeyByZWZyZXNoaW5nOiBmYWxzZSB9KTtcbiAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgfSk7XG4gICAgfVxufTtcblxuLyoqXG4gKiBJbnNlcnQgYW4gb2JqZWN0IGludG8gcmVtb3RlIGRhdGFiYXNlXG4gKlxuICogQHBhcmFtICB7U3RyaW5nfSBmb2xkZXJVUkxcbiAqIEBwYXJhbSAge09iamVjdH0gb2JqZWN0XG4gKlxuICogQHJldHVybiB7UHJvbWlzZTxPYmplY3Q+fVxuICovXG5wcm90b3R5cGUuaW5zZXJ0T25lID0gZnVuY3Rpb24oZm9sZGVyVVJMLCBvYmplY3QpIHtcbiAgICByZXR1cm4gdGhpcy5pbnNlcnRNdWx0aXBsZShmb2xkZXJVUkwsIFsgb2JqZWN0IF0pLnRoZW4oKGluc2VydGVkT2JqZWN0cykgPT4ge1xuICAgICAgICByZXR1cm4gaW5zZXJ0ZWRPYmplY3RzWzBdO1xuICAgIH0pO1xufTtcblxuLyoqXG4gKiBJbnNlcnQgbXVsdGlwbGUgb2JqZWN0cyBpbnRvIHJlbW90ZSBkYXRhYmFzZVxuICpcbiAqIEBwYXJhbSAge1N0cmluZ30gZm9sZGVyVVJMXG4gKiBAcGFyYW0gIHtBcnJheTxPYmplY3Q+fSBvYmplY3RzXG4gKlxuICogQHJldHVybiB7UHJvbWlzZTxBcnJheT59XG4gKi9cbnByb3RvdHlwZS5pbnNlcnRNdWx0aXBsZSA9IGZ1bmN0aW9uKGZvbGRlclVSTCwgb2JqZWN0cykge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgdmFyIGZvbGRlckFic1VSTCA9IHRoaXMucmVzb2x2ZVVSTChmb2xkZXJVUkwpO1xuICAgIHZhciBwcm9taXNlcyA9IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgb2JqZWN0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBwcm9taXNlcy5wdXNoKHRoaXMucG9zdChmb2xkZXJBYnNVUkwsIG9iamVjdHNbaV0pKTtcbiAgICB9XG4gICAgcmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VzKS50aGVuKGZ1bmN0aW9uKGluc2VydGVkT2JqZWN0cykge1xuICAgICAgICAvLyBzb3J0IHRoZSBuZXdseSBjcmVhdGVkIG9iamVjdHNcbiAgICAgICAgdmFyIGNoYW5nZWQgPSBmYWxzZTtcbiAgICAgICAgX3RoaXMucXVlcmllcy5mb3JFYWNoKGZ1bmN0aW9uKHF1ZXJ5KSB7XG4gICAgICAgICAgICBpbnNlcnRlZE9iamVjdHMuc29tZShmdW5jdGlvbihpbnNlcnRlZE9iamVjdCkge1xuICAgICAgICAgICAgICAgIGlmIChxdWVyeS50eXBlID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgICAgICAvLyBvYmplY3QgcXVlcmllcyBhcmVuJ3QgYWZmZWN0ZWQgYnkgaW5zZXJ0XG4gICAgICAgICAgICAgICAgICAgIC8vIG5vIHBvaW50IGluIGxvb2tpbmcgYXQgb3RoZXIgb2JqZWN0c1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHF1ZXJ5LnR5cGUgPT09ICdwYWdlJyB8fCBxdWVyeS50eXBlID09PSAnbGlzdCcpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG9iamVjdEZvbGRlclVSTCA9IGdldE9iamVjdEZvbGRlclVSTChmb2xkZXJBYnNVUkwsIGluc2VydGVkT2JqZWN0KTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFtYXRjaFVSTChxdWVyeS51cmwsIG9iamVjdEZvbGRlclVSTCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyBpdCBpc24ndCBwb3NzaWJsZSB0byBpbnNlcnQgb2JqZWN0cyBpbnRvIG11bHRpcGxlIGZvbGRlcnNcbiAgICAgICAgICAgICAgICAgICAgLy8gc2ltdWx0YW5lb3VzbHk7IGNvZGUgaXMgaW1wbGVtZW50ZWQgYXMgc3VjaCBvbmx5IGZvclxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zaXN0ZW5jeSBzYWtlXG4gICAgICAgICAgICAgICAgICAgIHZhciBpbkZvbGRlciA9IHJlbW92ZU9iamVjdHNPdXRzaWRlRm9sZGVyKGluc2VydGVkT2JqZWN0cywgb2JqZWN0Rm9sZGVyVVJMKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGRlZmF1bHRCZWhhdmlvciA9ICdyZWZyZXNoJztcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJ1bkhvb2socXVlcnksICdhZnRlckluc2VydCcsIGluRm9sZGVyLCBkZWZhdWx0QmVoYXZpb3IpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2VkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9KTtcbiAgICAgICAgaWYgKGNoYW5nZWQpIHtcbiAgICAgICAgICAgIF90aGlzLnRyaWdnZXJFdmVudChuZXcgUmVsYWtzRGphbmdvRGF0YVNvdXJjZUV2ZW50KCdjaGFuZ2UnLCBfdGhpcykpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBpbnNlcnRlZE9iamVjdHM7XG4gICAgfSk7XG59O1xuXG4vKipcbiAqIFVwZGF0ZSBhbiBvYmplY3RcbiAqXG4gKiBAcGFyYW0gIHtTdHJpbmd9IGZvbGRlclVSTFxuICogQHBhcmFtICB7T2JqZWN0fSBvYmplY3RcbiAqXG4gKiBAcmV0dXJuIHtQcm9taXNlPE9iamVjdD59XG4gKi9cbnByb3RvdHlwZS51cGRhdGVPbmUgPSBmdW5jdGlvbihmb2xkZXJVUkwsIG9iamVjdCkge1xuICAgIC8vIGFsbG93IGZvbGRlclVSTCB0byBiZSBvbWl0dGVkXG4gICAgaWYgKG9iamVjdCA9PT0gdW5kZWZpbmVkICYmIGZvbGRlclVSTCBpbnN0YW5jZW9mIE9iamVjdCkge1xuICAgICAgICBvYmplY3QgPSBmb2xkZXJVUkw7XG4gICAgICAgIGZvbGRlclVSTCA9IG51bGw7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLnVwZGF0ZU11bHRpcGxlKGZvbGRlclVSTCwgWyBvYmplY3QgXSkudGhlbigocmVzdWx0cykgPT4ge1xuICAgICAgICByZXR1cm4gcmVzdWx0c1swXTtcbiAgICB9KTtcbn07XG5cbi8qKlxuICogU2F2ZSBtdWx0aXBsZSBvYmplY3RzXG4gKlxuICogQHBhcmFtICB7U3RyaW5nfSBmb2xkZXJVUkxcbiAqIEBwYXJhbSAge0FycmF5PE9iamVjdD59IG9iamVjdHNcbiAqXG4gKiBAcmV0dXJuIHtQcm9taXNlPEFycmF5Pn1cbiAqL1xucHJvdG90eXBlLnVwZGF0ZU11bHRpcGxlID0gZnVuY3Rpb24oZm9sZGVyVVJMLCBvYmplY3RzKSB7XG4gICAgLy8gYWxsb3cgZm9sZGVyVVJMIHRvIGJlIG9taXR0ZWRcbiAgICBpZiAob2JqZWN0cyA9PT0gdW5kZWZpbmVkICYmIGZvbGRlclVSTCBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgIG9iamVjdHMgPSBmb2xkZXJVUkw7XG4gICAgICAgIGZvbGRlclVSTCA9IG51bGw7XG4gICAgfVxuICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgdmFyIGZvbGRlckFic1VSTCA9IHRoaXMucmVzb2x2ZVVSTChmb2xkZXJVUkwpO1xuICAgIHZhciBwcm9taXNlcyA9IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgb2JqZWN0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgb2JqZWN0ID0gb2JqZWN0c1tpXTtcbiAgICAgICAgdmFyIGFic1VSTCA9IGdldE9iamVjdFVSTChmb2xkZXJBYnNVUkwsIG9iamVjdCk7XG4gICAgICAgIHByb21pc2VzLnB1c2goYWJzVVJMID8gdGhpcy5wdXQoYWJzVVJMLCBvYmplY3QpIDogbnVsbCk7XG4gICAgfVxuICAgIHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlcykudGhlbihmdW5jdGlvbih1cGRhdGVkT2JqZWN0cykge1xuICAgICAgICB2YXIgY2hhbmdlZCA9IGZhbHNlO1xuICAgICAgICBfdGhpcy5xdWVyaWVzLmZvckVhY2goZnVuY3Rpb24ocXVlcnkpIHtcbiAgICAgICAgICAgIHVwZGF0ZWRPYmplY3RzLnNvbWUoZnVuY3Rpb24odXBkYXRlZE9iamVjdCkge1xuICAgICAgICAgICAgICAgIGlmIChxdWVyeS50eXBlID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgb2JqZWN0VVJMID0gZ2V0T2JqZWN0VVJMKGZvbGRlckFic1VSTCwgdXBkYXRlZE9iamVjdCk7XG4gICAgICAgICAgICAgICAgICAgIGlmICghbWF0Y2hVUkwocXVlcnkudXJsLCBvYmplY3RVUkwpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdmFyIGRlZmF1bHRCZWhhdmlvciA9ICdyZXBsYWNlJztcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJ1bkhvb2socXVlcnksICdhZnRlclVwZGF0ZScsIHVwZGF0ZWRPYmplY3QsIGRlZmF1bHRCZWhhdmlvcikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocXVlcnkudHlwZSA9PT0gJ3BhZ2UnIHx8IHF1ZXJ5LnR5cGUgPT09ICdsaXN0Jykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgb2JqZWN0Rm9sZGVyVVJMID0gZ2V0T2JqZWN0Rm9sZGVyVVJMKGZvbGRlckFic1VSTCwgdXBkYXRlZE9iamVjdCk7XG4gICAgICAgICAgICAgICAgICAgIGlmICghbWF0Y2hVUkwocXVlcnkudXJsLCBvYmplY3RGb2xkZXJVUkwpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy8gZmlsdGVyIG91dCBvYmplY3RzIHRoYXQgYXJlbid0IGluIHRoZSBzYW1lIGZvbGRlclxuICAgICAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgICAgICAvLyBvbmx5IHJlbGV2YW50IHdoZW4gaHlwZXJsaW5rLWtleXMgYXJlIHVzZWQgYW5kXG4gICAgICAgICAgICAgICAgICAgIC8vIG9iamVjdHMgaW4gZGlmZmVyZW50IGZvbGRlcnMgYXJlIHVwZGF0ZWQgYXRcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhlIHNhbWUgdGltZSAoZm9sZGVyVVJMIGhhcyB0byBiZSBudWxsKVxuICAgICAgICAgICAgICAgICAgICB2YXIgaW5Gb2xkZXIgPSByZW1vdmVPYmplY3RzT3V0c2lkZUZvbGRlcih1cGRhdGVkT2JqZWN0cywgb2JqZWN0Rm9sZGVyVVJMKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGRlZmF1bHRCZWhhdmlvciA9ICdyZWZyZXNoJztcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJ1bkhvb2socXVlcnksICdhZnRlclVwZGF0ZScsIGluRm9sZGVyLCBkZWZhdWx0QmVoYXZpb3IpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2VkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9KTtcbiAgICAgICAgaWYgKGNoYW5nZWQpIHtcbiAgICAgICAgICAgIF90aGlzLnRyaWdnZXJFdmVudChuZXcgUmVsYWtzRGphbmdvRGF0YVNvdXJjZUV2ZW50KCdjaGFuZ2UnLCBfdGhpcykpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB1cGRhdGVkT2JqZWN0cztcbiAgICB9KTtcbn07XG5cbnByb3RvdHlwZS5kZWxldGVPbmUgPSBmdW5jdGlvbih1cmwsIG9iamVjdCkge1xuICAgIHJldHVybiB0aGlzLmRlbGV0ZU11bHRpcGxlKHVybCwgWyBvYmplY3QgXSkudGhlbigocmVzdWx0cykgPT4ge1xuICAgICAgICByZXR1cm4gcmVzdWx0c1swXTtcbiAgICB9KTtcbn07XG5cbnByb3RvdHlwZS5kZWxldGVNdWx0aXBsZSA9IGZ1bmN0aW9uKGZvbGRlclVSTCwgb2JqZWN0cykge1xuICAgIC8vIGFsbG93IGZvbGRlclVSTCB0byBiZSBvbWl0dGVkXG4gICAgaWYgKG9iamVjdHMgPT09IHVuZGVmaW5lZCAmJiBmb2xkZXJVUkwgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICBvYmplY3RzID0gZm9sZGVyVVJMO1xuICAgICAgICBmb2xkZXJVUkwgPSBudWxsO1xuICAgIH1cbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgIHZhciBmb2xkZXJBYnNVUkwgPSB0aGlzLnJlc29sdmVVUkwoZm9sZGVyVVJMKTtcbiAgICB2YXIgcHJvbWlzZXMgPSBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG9iamVjdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIG9iamVjdCA9IG9iamVjdHNbaV07XG4gICAgICAgIHZhciBhYnNVUkwgPSBnZXRPYmplY3RVUkwoZm9sZGVyQWJzVVJMLCBvYmplY3QpO1xuICAgICAgICB2YXIgcHJvbWlzZSA9IG51bGw7XG4gICAgICAgIGlmIChhYnNVUkwpIHtcbiAgICAgICAgICAgIHByb21pc2UgPSB0aGlzLmRlbGV0ZShhYnNVUkwsIG9iamVjdCkudGhlbihmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gb2JqZWN0O1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcHJvbWlzZXMucHVzaChwcm9taXNlKTtcbiAgICB9XG4gICAgcmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VzKS50aGVuKGZ1bmN0aW9uKGRlbGV0ZWRPYmplY3RzKSB7XG4gICAgICAgIHZhciBjaGFuZ2VkID0gZmFsc2U7XG4gICAgICAgIHZhciBxdWVyaWVzID0gX3RoaXMucXVlcmllcy5maWx0ZXIoZnVuY3Rpb24ocXVlcnkpIHtcbiAgICAgICAgICAgIHZhciBrZWVwID0gdHJ1ZTtcbiAgICAgICAgICAgIGRlbGV0ZWRPYmplY3RzLnNvbWUoZnVuY3Rpb24oZGVsZXRlZE9iamVjdCkge1xuICAgICAgICAgICAgICAgIGlmIChxdWVyeS50eXBlID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgb2JqZWN0VVJMID0gZ2V0T2JqZWN0VVJMKGZvbGRlckFic1VSTCwgZGVsZXRlZE9iamVjdCk7XG4gICAgICAgICAgICAgICAgICAgIGlmICghbWF0Y2hVUkwocXVlcnkudXJsLCBvYmplY3RVUkwpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdmFyIGRlZmF1bHRCZWhhdmlvciA9ICdyZW1vdmUnO1xuICAgICAgICAgICAgICAgICAgICBpZiAocnVuSG9vayhxdWVyeSwgJ2FmdGVyRGVsZXRlJywgZGVsZXRlZE9iamVjdCwgZGVmYXVsdEJlaGF2aW9yKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHF1ZXJ5LmRpcnR5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2VlcCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2hhbmdlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChxdWVyeS50eXBlID09PSAncGFnZScgfHwgcXVlcnkudHlwZSA9PT0gJ2xpc3QnKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBvYmplY3RGb2xkZXJVUkwgPSBnZXRPYmplY3RGb2xkZXJVUkwoZm9sZGVyQWJzVVJMLCBkZWxldGVkT2JqZWN0KTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFtYXRjaFVSTChxdWVyeS51cmwsIG9iamVjdEZvbGRlclVSTCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyBzZWUgY29tbWVudCBpbiB1cGRhdGVNdWx0aXBsZSgpXG4gICAgICAgICAgICAgICAgICAgIHZhciBpbkZvbGRlciA9IHJlbW92ZU9iamVjdHNPdXRzaWRlRm9sZGVyKGRlbGV0ZWRPYmplY3RzLCBvYmplY3RGb2xkZXJVUkwpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgZGVmYXVsdEJlaGF2aW9yID0gKHF1ZXJ5LnR5cGUgPT09ICdsaXN0JykgPyAncmVtb3ZlJyA6ICdyZWZyZXNoJztcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJ1bkhvb2socXVlcnksICdhZnRlckRlbGV0ZScsIGluRm9sZGVyLCBkZWZhdWx0QmVoYXZpb3IpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2VkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBrZWVwO1xuICAgICAgICB9KTtcbiAgICAgICAgaWYgKGNoYW5nZWQpIHtcbiAgICAgICAgICAgIF90aGlzLnF1ZXJpZXMgPSBxdWVyaWVzO1xuICAgICAgICAgICAgX3RoaXMudHJpZ2dlckV2ZW50KG5ldyBSZWxha3NEamFuZ29EYXRhU291cmNlRXZlbnQoJ2NoYW5nZScsIF90aGlzKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGRlbGV0ZWRPYmplY3RzO1xuICAgIH0pO1xufTtcblxuLyoqXG4gKiBGaW5kIGFuIGV4aXN0aW5nIHF1ZXJ5XG4gKlxuICogQHBhcmFtICB7T2JqZWN0fSBwcm9wc1xuICpcbiAqIEByZXR1cm4ge09iamVjdHx1bmRlZmluZWR9XG4gKi9cbnByb3RvdHlwZS5maW5kUXVlcnkgPSBmdW5jdGlvbihwcm9wcykge1xuICAgIHJldHVybiB0aGlzLnF1ZXJpZXMuZmluZChmdW5jdGlvbihxdWVyeSkge1xuICAgICAgICByZXR1cm4gbWF0Y2hRdWVyeShxdWVyeSwgcHJvcHMpO1xuICAgIH0pO1xufTtcblxuLyoqXG4gKiBEZXJpdmUgYSBxdWVyeSBmb3IgYW4gaXRlbSBmcm9tIGFuIGV4aXN0aW5nIGRpcmVjdG9yeSBxdWVyeVxuICpcbiAqIEBwYXJhbSAge09iamVjdH0gcHJvcHNcbiAqXG4gKiBAcmV0dXJuIHtPYmplY3R8dW5kZWZpbmVkfVxuICovXG5wcm90b3R5cGUuZGVyaXZlUXVlcnkgPSBmdW5jdGlvbihwcm9wcykge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgdmFyIG9iamVjdDtcbiAgICB2YXIgZm9sZGVyVVJMID0gZ2V0Rm9sZGVyVVJMKHByb3BzLnVybCk7XG4gICAgdGhpcy5xdWVyaWVzLnNvbWUoZnVuY3Rpb24ocXVlcnkpIHtcbiAgICAgICAgaWYgKHF1ZXJ5LnR5cGUgPT09ICdwYWdlJyB8fCBxdWVyeS50eXBlID09PSAnbGlzdCcpIHtcbiAgICAgICAgICAgIHZhciBhYmJyZXZpYXRlZCA9IGZhbHNlO1xuICAgICAgICAgICAgaWYgKF90aGlzLm9wdGlvbnMuYWJicmV2aWF0ZWRGb2xkZXJDb250ZW50cykge1xuICAgICAgICAgICAgICAgIGFiYnJldmlhdGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocXVlcnkub3B0aW9ucy5hYmJyZXZpYXRlZCkge1xuICAgICAgICAgICAgICAgIGFiYnJldmlhdGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghYWJicmV2aWF0ZWQpIHtcbiAgICAgICAgICAgICAgICBpZiAobWF0Y2hVUkwocXVlcnkudXJsLCBmb2xkZXJVUkwpKSB7XG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5Lm9iamVjdHMuc29tZShmdW5jdGlvbihpdGVtKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXRlbS51cmwgPT09IHByb3BzLnVybCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9iamVjdCA9IGl0ZW07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gISFvYmplY3Q7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG4gICAgaWYgKG9iamVjdCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdHlwZTogJ29iamVjdCcsXG4gICAgICAgICAgICB1cmw6IHByb3BzLnVybCxcbiAgICAgICAgICAgIHByb21pc2U6IFByb21pc2UucmVzb2x2ZShvYmplY3QpLFxuICAgICAgICAgICAgb2JqZWN0OiBvYmplY3RcbiAgICAgICAgfTtcbiAgICB9XG59XG5cbi8qKlxuICogQWRkIGEgcXVlcnlcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gcXVlcnlcbiAqL1xucHJvdG90eXBlLmFkZFF1ZXJ5ID0gZnVuY3Rpb24ocXVlcnkpIHtcbiAgICB0aGlzLnF1ZXJpZXMgPSBbIHF1ZXJ5IF0uY29uY2F0KHRoaXMucXVlcmllcyk7XG59O1xuXG4vKipcbiAqIFVwZGF0ZSBhIHF1ZXJ5XG4gKlxuICogQHBhcmFtICB7T2JqZWN0fSBxdWVyeVxuICogQHBhcmFtICB7T2JqZWN0fSBwcm9wc1xuICovXG5wcm90b3R5cGUudXBkYXRlUXVlcnkgPSBmdW5jdGlvbihxdWVyeSwgcHJvcHMpIHtcbiAgICBmb3IgKHZhciBuYW1lIGluIHByb3BzKSB7XG4gICAgICAgIHF1ZXJ5W25hbWVdID0gcHJvcHNbbmFtZV07XG4gICAgfVxufTtcblxuLyoqXG4gKiBSZXR1cm4gYSBwcm9taXNlIHRoYXQgd2lsbCBiZSByZXNvbHZlZCB3aGVuIGF1dGhlbnRpY2F0aW9uIG9jY3VycyBvclxuICogYXR0ZW1wdCBpcyBjYW5jZWxlZFxuICpcbiAqIEBwYXJhbSAge1N0cmluZ30gYWJzVVJMXG4gKlxuICogQHJldHVybiB7UHJvbWlzZTxCb29sZWFuPn1cbiAqL1xucHJvdG90eXBlLnJlcXVlc3RBdXRoZW50aWNhdGlvbiA9IGZ1bmN0aW9uKGFic1VSTCkge1xuICAgIHZhciBwcm9taXNlO1xuICAgIHRoaXMuYXV0aGVudGljYXRpb25zLnNvbWUoZnVuY3Rpb24oYXV0aGVudGljYXRpb24pIHtcbiAgICAgICAgaWYgKGF1dGhlbnRpY2F0aW9uLnVybCA9PT0gYWJzVVJMKSB7XG4gICAgICAgICAgICBwcm9taXNlID0gYXV0aGVudGljYXRpb24ucHJvbWlzZTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgaWYgKCFwcm9taXNlKSB7XG4gICAgICAgIC8vIGFkZCB0aGUgcXVlcnkgcHJpb3IgdG8gdHJpZ2dlcmluZyB0aGUgZXZlbnQsIHNpbmNlIHRoZSBoYW5kbGVyXG4gICAgICAgIC8vIG1heSBjYWxsIGF1dGhvcml6ZSgpXG4gICAgICAgIHZhciByZXNvbHZlO1xuICAgICAgICB2YXIgYXV0aGVudGljYXRpb24gPSB7XG4gICAgICAgICAgICB1cmw6IGFic1VSTCxcbiAgICAgICAgICAgIHByb21pc2U6IG5ldyBQcm9taXNlKGZ1bmN0aW9uKHIpIHsgcmVzb2x2ZSA9IHIgfSksXG4gICAgICAgICAgICByZXNvbHZlOiByZXNvbHZlLFxuICAgICAgICB9O1xuICAgICAgICB0aGlzLmF1dGhlbnRpY2F0aW9ucy5wdXNoKGF1dGhlbnRpY2F0aW9uKTtcblxuICAgICAgICB2YXIgYXV0aGVudGljYXRpb25FdmVudCA9IG5ldyBSZWxha3NEamFuZ29EYXRhU291cmNlRXZlbnQoJ2F1dGhlbnRpY2F0aW9uJywgdGhpcywge1xuICAgICAgICAgICAgdXJsOiBhYnNVUkxcbiAgICAgICAgfSk7XG4gICAgICAgIHZhciBldmVudEhhbmRsZWQgPSB0aGlzLnRyaWdnZXJFdmVudChhdXRoZW50aWNhdGlvbkV2ZW50KTtcbiAgICAgICAgcHJvbWlzZSA9IGF1dGhlbnRpY2F0aW9uRXZlbnQud2FpdEZvckRlY2lzaW9uKCkudGhlbihmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGlmIChldmVudEhhbmRsZWQgJiYgIWF1dGhlbnRpY2F0aW9uRXZlbnQuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgICAgICAgICAgIC8vIHdhaXQgZm9yIGF1dGhlbnRpY2F0ZSgpIHRvIGdldCBjYWxsZWRcbiAgICAgICAgICAgICAgICAvLyBpZiBhdXRob3JpemUoKSB3YXMgY2FsbGVkLCB0aGUgcHJvbWlzZSB3b3VsZCBiZSByZXNvbHZlZCBhbHJlYWR5XG4gICAgICAgICAgICAgICAgcmV0dXJuIGF1dGhlbnRpY2F0aW9uLnByb21pc2U7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIHRha2UgaXQgYmFjayBvdXRcbiAgICAgICAgICAgICAgICB2YXIgaW5kZXggPSB0aGlzLmF1dGhlbnRpY2F0aW9ucy5pbmRleE9mKGF1dGhlbnRpY2F0aW9uKTtcbiAgICAgICAgICAgICAgICB0aGlzLmF1dGhlbnRpY2F0aW9ucy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBwcm9taXNlO1xufTtcblxuLyoqXG4gKiBQb3N0IHVzZXIgY3JlZGVudGlhbHMgdG8gZ2l2ZW4gVVJMIGluIGV4cGVjdGFudCBvZiBhIGF1dGhvcml6YXRpb24gdG9rZW5cbiAqXG4gKiBAcGFyYW0gIHtTdHJpbmd9IGxvZ2luVVJMXG4gKiBAcGFyYW0gIHtPYmplY3R9IGNyZWRlbnRpYWxzXG4gKiBAcGFyYW0gIHtBcnJheTxTdHJpbmc+fSBhbGxvd1VSTHNcbiAqXG4gKiBAcmV0dXJuIHtQcm9taXNlPEJvb2xlYW4+fVxuICovXG5wcm90b3R5cGUuYXV0aGVudGljYXRlID0gZnVuY3Rpb24obG9naW5VUkwsIGNyZWRlbnRpYWxzLCBhbGxvd1VSTHMpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgIHZhciBsb2dpbkFic1VSTCA9IHRoaXMucmVzb2x2ZVVSTChsb2dpblVSTCk7XG4gICAgcmV0dXJuIHRoaXMucG9zdChsb2dpbkFic1VSTCwgY3JlZGVudGlhbHMpLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcbiAgICAgICAgdmFyIHRva2VuID0gKHJlc3BvbnNlKSA/IHJlc3BvbnNlLmtleSA6IG51bGw7XG4gICAgICAgIGlmICghdG9rZW4pIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTm8gYXV0aG9yaXphdGlvbiB0b2tlbicpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBfdGhpcy5hdXRob3JpemUobG9naW5VUkwsIHRva2VuLCBhbGxvd1VSTHMpO1xuICAgIH0pO1xufTtcblxuLyoqXG4gKiBBY2NlcHQgYW4gYXV0aG9yaXphdGlvbiB0b2tlbiwgcmVzb2x2aW5nIGFueSBwZW5kaW5nIGF1dGhlbnRpY2F0aW9uIHByb21pc2VzXG4gKlxuICogQHBhcmFtICB7U3RyaW5nfSBsb2dpblVSTFxuICogQHBhcmFtICB7U3RyaW5nfSB0b2tlblxuICogQHBhcmFtICB7QXJyYXk8U3RyaW5nPn0gYWxsb3dVUkxzXG4gKlxuICogQHJldHVybiB7UHJvbWlzZTxCb29sZWFuPn1cbiAqL1xucHJvdG90eXBlLmF1dGhvcml6ZSA9IGZ1bmN0aW9uKGxvZ2luVVJMLCB0b2tlbiwgYWxsb3dVUkxzKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcbiAgICB2YXIgbG9naW5BYnNVUkwgPSB0aGlzLnJlc29sdmVVUkwobG9naW5VUkwpO1xuICAgIHZhciBhbGxvd0Fic1VSTHMgPSB0aGlzLnJlc29sdmVVUkxzKGFsbG93VVJMcyB8fCBbICcvJyBdKTtcbiAgICB2YXIgYXV0aG9yaXphdGlvbkV2ZW50ID0gbmV3IFJlbGFrc0RqYW5nb0RhdGFTb3VyY2VFdmVudCgnYXV0aG9yaXphdGlvbicsIHRoaXMsIHtcbiAgICAgICAgdXJsOiBsb2dpbkFic1VSTCxcbiAgICAgICAgdG9rZW46IHRva2VuLFxuICAgIH0pO1xuICAgIHRoaXMudHJpZ2dlckV2ZW50KGF1dGhvcml6YXRpb25FdmVudCk7XG4gICAgcmV0dXJuIGF1dGhvcml6YXRpb25FdmVudC53YWl0Rm9yRGVjaXNpb24oKS50aGVuKGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgYWNjZXB0YWJsZSA9ICFhdXRob3JpemF0aW9uRXZlbnQuZGVmYXVsdFByZXZlbnRlZDtcbiAgICAgICAgaWYgKGFjY2VwdGFibGUpIHtcbiAgICAgICAgICAgIC8vIGFkZCBhdXRob3JpemF0aW9uXG4gICAgICAgICAgICB2YXIgYXV0aG9yaXphdGlvbiA9IHtcbiAgICAgICAgICAgICAgICB1cmw6IGxvZ2luQWJzVVJMLFxuICAgICAgICAgICAgICAgIHRva2VuOiB0b2tlbixcbiAgICAgICAgICAgICAgICBhbGxvdzogYWxsb3dBYnNVUkxzLFxuICAgICAgICAgICAgICAgIGRlbnk6IFtdXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgLy8gcmVtb3ZlIHByZXZpb3VzIGF1dGhvcml6YXRpb25cbiAgICAgICAgICAgIF90aGlzLmF1dGhvcml6YXRpb25zID0gX3RoaXMuYXV0aG9yaXphdGlvbnMuZmlsdGVyKGZ1bmN0aW9uKGF1dGhvcml6YXRpb24pIHtcbiAgICAgICAgICAgICAgICBhdXRob3JpemF0aW9uLmFsbG93ID0gYXV0aG9yaXphdGlvbi5hbGxvdy5maWx0ZXIoZnVuY3Rpb24odXJsKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoYWxsb3dBYnNVUkxzLmluZGV4T2YodXJsKSA9PT0gLTEpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHJldHVybiAoYXV0aG9yaXphdGlvbi5hbGxvdy5sZW5ndGggPiAwKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgX3RoaXMuYXV0aG9yaXphdGlvbnMucHVzaChhdXRob3JpemF0aW9uKTtcbiAgICAgICAgfVxuICAgICAgICAvLyByZXNvbHZlIGFuZCByZW1vdmUgYXV0aGVudGljYXRpb24gcXVlcnlzXG4gICAgICAgIF90aGlzLmF1dGhlbnRpY2F0aW9ucyA9IF90aGlzLmF1dGhlbnRpY2F0aW9ucy5maWx0ZXIoZnVuY3Rpb24oYXV0aGVudGljYXRpb24pIHtcbiAgICAgICAgICAgIGlmIChtYXRjaEFueVVSTChhdXRoZW50aWNhdGlvbi51cmwsIGFsbG93QWJzVVJMcykpIHtcbiAgICAgICAgICAgICAgICBhdXRoZW50aWNhdGlvbi5yZXNvbHZlKGFjY2VwdGFibGUpO1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gYWNjZXB0YWJsZTtcbiAgICB9KTtcbn07XG5cbnByb3RvdHlwZS5nZXRBdXRob3JpemF0aW9uVG9rZW4gPSBmdW5jdGlvbih1cmwpIHtcbiAgICB2YXIgdG9rZW47XG4gICAgdGhpcy5hdXRob3JpemF0aW9ucy5zb21lKGZ1bmN0aW9uKGF1dGhvcml6YXRpb24pIHtcbiAgICAgICAgaWYgKG1hdGNoQW55VVJMKHVybCwgYXV0aG9yaXphdGlvbi5hbGxvdykpIHtcbiAgICAgICAgICAgIGlmICghbWF0Y2hBbnlVUkwodXJsLCBhdXRob3JpemF0aW9uLmRlbnkpKSB7XG4gICAgICAgICAgICAgICAgdG9rZW4gPSBhdXRob3JpemF0aW9uLnRva2VuO1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHRva2VuO1xufTtcblxucHJvdG90eXBlLmNhbmNlbEF1dGhlbnRpY2F0aW9uID0gZnVuY3Rpb24oYWxsb3dVUkxzKSB7XG4gICAgdmFyIGFsbG93QWJzVVJMcyA9IHRoaXMucmVzb2x2ZVVSTHMoYWxsb3dVUkxzIHx8IFsgJy8nIF0pO1xuICAgIHRoaXMuYXV0aGVudGljYXRpb25zID0gdGhpcy5hdXRoZW50aWNhdGlvbnMuZmlsdGVyKGZ1bmN0aW9uKGF1dGhlbnRpY2F0aW9uKSB7XG4gICAgICAgIGlmIChtYXRjaEFueVVSTChhdXRoZW50aWNhdGlvbi51cmwsIGFsbG93QWJzVVJMcykpIHtcbiAgICAgICAgICAgIGF1dGhlbnRpY2F0aW9uLnJlc29sdmUoZmFsc2UpO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICB9KTtcbn07XG5cbnByb3RvdHlwZS5jYW5jZWxBdXRob3JpemF0aW9uID0gZnVuY3Rpb24oZGVueVVSTHMpIHtcbiAgICB2YXIgZGVueUFic1VSTHMgPSB0aGlzLnJlc29sdmVVUkxzKGRlbnlVUkxzIHx8IFsgJy8nIF0pO1xuICAgIHRoaXMuYXV0aG9yaXphdGlvbnMgPSB0aGlzLmF1dGhvcml6YXRpb25zLmZpbHRlcihmdW5jdGlvbihhdXRob3JpemF0aW9uKSB7XG4gICAgICAgIGF1dGhvcml6YXRpb24uYWxsb3cgPSBhdXRob3JpemF0aW9uLmFsbG93LmZpbHRlcihmdW5jdGlvbih1cmwpIHtcbiAgICAgICAgICAgIHJldHVybiAoZGVueVVSTHMuaW5kZXhPZih1cmwpID09PSAtMSk7XG4gICAgICAgIH0pO1xuICAgICAgICAvLyBhZGQgdG8gZGVueSBsaXN0IGlmIGl0J3Mgc3RpbGwgYWxsb3dlZFxuICAgICAgICBkZW55QWJzVVJMcy5mb3JFYWNoKGZ1bmN0aW9uKHVybCkge1xuICAgICAgICAgICAgaWYgKG1hdGNoQW55VVJMKHVybCwgYXV0aG9yaXphdGlvbi5hbGxvdykpIHtcbiAgICAgICAgICAgICAgICBhdXRob3JpemF0aW9uLmRlbnkucHVzaCh1cmwpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIChhdXRob3JpemF0aW9uLmFsbG93Lmxlbmd0aCA+IDApO1xuICAgIH0pO1xufTtcblxucHJvdG90eXBlLnJldm9rZUF1dGhvcml6YXRpb24gPSBmdW5jdGlvbihsb2dvdXRVUkwpIHtcbiAgICB2YXIgbG9nb3V0QWJzVVJMID0gdGhpcy5yZXNvbHZlVVJMcyhsb2dvdXRVUkwpO1xuICAgIHJldHVybiBmZXRjaChsb2dvdXRBYnNVUkwsIG9wdGlvbnMpLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcbiAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA8IDQwMCkge1xuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihyZXNwb25zZS5zdGF0dXNUZXh0KTtcbiAgICAgICAgfVxuICAgIH0pLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcbiAgICAgICAgdGhpcy5hdXRob3JpemF0aW9ucyA9IHRoaXMuYXV0aG9yaXphdGlvbnMuZmlsdGVyKGZ1bmN0aW9uKGF1dGhvcml6YXRpb24pIHtcbiAgICAgICAgICAgIHZhciBmb2xkZXJVUkwxID0gZ2V0Rm9sZGVyVVJMKGF1dGhvcml6YXRpb24udXJsKTtcbiAgICAgICAgICAgIHZhciBmb2xkZXJVUkwyID0gZ2V0Rm9sZGVyVVJMKGxvZ291dEFic1VSTCk7XG4gICAgICAgICAgICByZXR1cm4gKGZvbGRlclVSTDEgIT09IGZvbGRlclVSTDIpO1xuICAgICAgICB9KTtcbiAgICB9KTtcbn07XG5cbi8qKlxuICogU3RhcnQgZXhwaXJhdGlvbiBjaGVja2luZ1xuICovXG5wcm90b3R5cGUuc3RhcnRFeHBpcmF0aW9uQ2hlY2sgPSBmdW5jdGlvbigpIHtcbiAgICBpZiAodGhpcy5vcHRpb25zLnJlZnJlc2hJbnRlcnZhbCA+IDApIHtcbiAgICAgICAgaWYgKCF0aGlzLmV4cGlyYXRpb25DaGVja0ludGVydmFsKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICAgICAgdGhpcy5leHBpcmF0aW9uQ2hlY2tJbnRlcnZhbCA9IHNldEludGVydmFsKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIF90aGlzLmNoZWNrRXhwaXJhdGlvbigpO1xuICAgICAgICAgICAgfSwgNTAwMCk7XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG4vKipcbiAqIFN0b3AgZXhwaXJhdGlvbiBjaGVja2luZ1xuICovXG5wcm90b3R5cGUuc3RvcEV4cGlyYXRpb25DaGVjayA9IGZ1bmN0aW9uKCkge1xuICAgIGlmICh0aGlzLmV4cGlyYXRpb25DaGVja0ludGVydmFsKSB7XG4gICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5leHBpcmF0aW9uQ2hlY2tJbnRlcnZhbCk7XG4gICAgICAgIHRoaXMuZXhwaXJhdGlvbkNoZWNrSW50ZXJ2YWwgPSAwO1xuICAgIH1cbn07XG5cbi8qKlxuICogTWFyayBxdWVyaWVzIGFzIGRpcnR5IGFuZCB0cmlnZ2VyIG9uQ2hhbmdlIGV2ZW50IHdoZW4gZW5vdWdoIHRpbWUgaGFzIHBhc3NlZFxuICovXG5wcm90b3R5cGUuY2hlY2tFeHBpcmF0aW9uID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGludGVydmFsID0gTnVtYmVyKHRoaXMub3B0aW9ucy5yZWZyZXNoSW50ZXJ2YWwpO1xuICAgIGlmICghaW50ZXJ2YWwpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgbGltaXQgPSBnZXRUaW1lKC1pbnRlcnZhbCk7XG4gICAgdmFyIGNoYW5nZWQgPSBmYWxzZTtcbiAgICB2YXIgcXVlcmllcyA9IHRoaXMucXVlcmllcy5maWx0ZXIoZnVuY3Rpb24ocXVlcnkpIHtcbiAgICAgICAgaWYgKCFxdWVyeS5kaXJ0eSkge1xuICAgICAgICAgICAgaWYgKHF1ZXJ5LnJldHJpZXZhbFRpbWUgPCBsaW1pdCkge1xuICAgICAgICAgICAgICAgIHF1ZXJ5LmRpcnR5ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBjaGFuZ2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9KTtcbiAgICBpZiAoY2hhbmdlZCkge1xuICAgICAgICB0aGlzLnF1ZXJpZXMgPSBxdWVyaWVzO1xuICAgICAgICB0aGlzLnRyaWdnZXJFdmVudChuZXcgUmVsYWtzRGphbmdvRGF0YVNvdXJjZUV2ZW50KCdjaGFuZ2UnLCB0aGlzKSk7XG4gICAgfVxufTtcblxuLyoqXG4gKiBGZXRjaCBKU09OIG9iamVjdCBhdCBVUkxcbiAqXG4gKiBAcGFyYW0gIHtTdHJpbmd9IHVybFxuICpcbiAqIEByZXR1cm4ge1Byb21pc2U8T2JqZWN0Pn1cbiAqL1xucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uKHVybCkge1xuICAgIHZhciBvcHRpb25zID0ge1xuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICBoZWFkZXJzOiB7fSxcbiAgICB9O1xuICAgIHJldHVybiB0aGlzLnJlcXVlc3QodXJsLCBvcHRpb25zKTtcbn07XG5cbnByb3RvdHlwZS5wb3N0ID0gZnVuY3Rpb24odXJsLCBvYmplY3QpIHtcbiAgICB2YXIgb3B0aW9ucyA9IHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIG1vZGU6ICdjb3JzJyxcbiAgICAgICAgY2FjaGU6ICduby1jYWNoZScsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOCcsXG4gICAgICAgIH0sXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KG9iamVjdCksXG4gICAgfTtcbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KHVybCwgb3B0aW9ucyk7XG59O1xuXG5wcm90b3R5cGUucHV0ID0gZnVuY3Rpb24odXJsLCBvYmplY3QpIHtcbiAgICB2YXIgb3B0aW9ucyA9IHtcbiAgICAgICAgbWV0aG9kOiAnUFVUJyxcbiAgICAgICAgbW9kZTogJ2NvcnMnLFxuICAgICAgICBjYWNoZTogJ25vLWNhY2hlJyxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04JyxcbiAgICAgICAgfSxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkob2JqZWN0KSxcbiAgICB9O1xuICAgIHJldHVybiB0aGlzLnJlcXVlc3QodXJsLCBvcHRpb25zKTtcbn07XG5cbnByb3RvdHlwZS5kZWxldGUgPSBmdW5jdGlvbih1cmwsIG9iamVjdCkge1xuICAgIHZhciBvcHRpb25zID0ge1xuICAgICAgICBtZXRob2Q6ICdERUxFVEUnLFxuICAgICAgICBtb2RlOiAnY29ycycsXG4gICAgICAgIGNhY2hlOiAnbm8tY2FjaGUnLFxuICAgICAgICBoZWFkZXJzOiB7fSxcbiAgICB9O1xuICAgIHJldHVybiB0aGlzLnJlcXVlc3QodXJsLCBvcHRpb25zKTtcbn07XG5cbnByb3RvdHlwZS5yZXF1ZXN0ID0gZnVuY3Rpb24odXJsLCBvcHRpb25zKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcbiAgICB2YXIgdG9rZW4gPSB0aGlzLmdldEF1dGhvcml6YXRpb25Ub2tlbih1cmwpO1xuICAgIGlmICh0b2tlbikge1xuICAgICAgICB2YXIga2V5d29yZCA9IHRoaXMub3B0aW9ucy5hdXRob3JpemF0aW9uS2V5d29yZDtcbiAgICAgICAgb3B0aW9ucy5oZWFkZXJzWydBdXRob3JpemF0aW9uJ10gPSBrZXl3b3JkICsgJyAnICsgdG9rZW47XG4gICAgfVxuICAgIHJldHVybiBmZXRjaCh1cmwsIG9wdGlvbnMpLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcbiAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA8IDQwMCkge1xuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PSAyMDQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuICAgICAgICB9IGVsc2UgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gNDAxKSB7XG4gICAgICAgICAgICByZXR1cm4gX3RoaXMucmVxdWVzdEF1dGhlbnRpY2F0aW9uKHVybCkudGhlbihmdW5jdGlvbihhdXRoZW50aWNhdGVkKSB7XG4gICAgICAgICAgICAgICAgaWYgKGF1dGhlbnRpY2F0ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIG9wdGlvbnMuaGVhZGVyc1snQXV0aG9yaXphdGlvbiddO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3RoaXMucmVxdWVzdCh1cmwsIG9wdGlvbnMpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihyZXNwb25zZS5zdGF0dXNUZXh0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihyZXNwb25zZS5zdGF0dXNUZXh0KTtcbiAgICAgICAgfVxuICAgIH0pO1xufTtcblxuLyoqXG4gKiBSdW4gaG9vayBmdW5jdGlvbiBvbiBhbiBjYWNoZWQgZmV0Y2ggcXVlcnkgYWZ0ZXIgYW4gaW5zZXJ0LCB1cGRhdGUsIG9yXG4gKiBkZWxldGUgb3BlcmF0aW9uLiBSZXR1cm4gdHJ1ZSB3aGVuIHF1ZXJ5IGlzIGNoYW5nZWQuXG4gKlxuICogQHBhcmFtICB7T2JqZWN0fSBxdWVyeVxuICogQHBhcmFtICB7U3RyaW5nfSBob29rTmFtZVxuICogQHBhcmFtICB7QXJyYXk8T2JqZWN0PnxPYmplY3R9IGlucHV0XG4gKiBAcGFyYW0gIHtTdHJpbmd9IGRlZmF1bHRCZWhhdmlvclxuICpcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKi9cbmZ1bmN0aW9uIHJ1bkhvb2socXVlcnksIGhvb2tOYW1lLCBpbnB1dCwgZGVmYXVsdEJlaGF2aW9yKSB7XG4gICAgdmFyIGhvb2tGdW5jID0gKHF1ZXJ5Lm9wdGlvbnMpID8gcXVlcnkub3B0aW9uc1tob29rTmFtZV0gOiBudWxsO1xuICAgIGlmICghaG9va0Z1bmMpIHtcbiAgICAgICAgaG9va0Z1bmMgPSBkZWZhdWx0QmVoYXZpb3I7XG4gICAgfVxuICAgIGlmICh0eXBlb2YoaG9va0Z1bmMpID09PSAnc3RyaW5nJykge1xuICAgICAgICBzd2l0Y2ggKGhvb2tGdW5jKSB7XG4gICAgICAgICAgICBjYXNlICdyZWZyZXNoJzpcbiAgICAgICAgICAgICAgICBob29rRnVuYyA9IHJlZnJlc2hRdWVyeTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2lnbm9yZSc6XG4gICAgICAgICAgICAgICAgaG9va0Z1bmMgPSBpZ25vcmVDaGFuZ2U7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHN3aXRjaCAocXVlcnkudHlwZSArICc6OicgKyBob29rRnVuYykge1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdvYmplY3Q6OnJlcGxhY2UnOlxuICAgICAgICAgICAgICAgICAgICAgICAgaG9va0Z1bmMgPSByZXBsYWNlT2JqZWN0O1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2xpc3Q6OnJlcGxhY2UnOlxuICAgICAgICAgICAgICAgICAgICBjYXNlICdwYWdlOjpyZXBsYWNlJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGhvb2tGdW5jID0gcmVwbGFjZU9iamVjdHM7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnbGlzdDo6dW5zaGlmdCc6XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ3BhZ2U6OnVuc2hpZnQnOlxuICAgICAgICAgICAgICAgICAgICAgICAgaG9va0Z1bmMgPSB1bnNoaWZ0T2JqZWN0cztcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdsaXN0OjpwdXNoJzpcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAncGFnZTo6cHVzaCc6XG4gICAgICAgICAgICAgICAgICAgICAgICBob29rRnVuYyA9IHB1c2hPYmplY3RzO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ29iamVjdDo6cmVtb3ZlJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGhvb2tGdW5jID0gcmVtb3ZlT2JqZWN0O1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2xpc3Q6OnJlbW92ZSc6XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ3BhZ2U6OnJlbW92ZSc6XG4gICAgICAgICAgICAgICAgICAgICAgICBob29rRnVuYyA9IHJlbW92ZU9iamVjdHM7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVW5rbm93biBob29rIG5hbWU6ICcgKyBob29rRnVuYylcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKHF1ZXJ5LnR5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgICAgIHZhciBpbXBhY3Q7XG4gICAgICAgIGlmIChxdWVyeS5vYmplY3QpIHtcbiAgICAgICAgICAgIGltcGFjdCA9IGhvb2tGdW5jKHF1ZXJ5Lm9iamVjdCwgaW5wdXQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gbmVlZCB0byBydW4gcXVlcnkgYWdhaW4sIGluIGNhc2UgdGhlIGRhdGEgY3VycmVudGx5IGluIGZsaWdodFxuICAgICAgICAgICAgLy8gaXMgYWxyZWFkeSBzdGFsZVxuICAgICAgICAgICAgaW1wYWN0ID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaW1wYWN0ID09PSBmYWxzZSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpbXBhY3QgaW5zdGFuY2VvZiBPYmplY3QpIHtcbiAgICAgICAgICAgIHZhciBvYmplY3QgPSBpbXBhY3Q7XG4gICAgICAgICAgICBxdWVyeS5vYmplY3QgPSBvYmplY3Q7XG4gICAgICAgICAgICBxdWVyeS5wcm9taXNlID0gUHJvbWlzZS5yZXNvbHZlKG9iamVjdCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBxdWVyeS5kaXJ0eSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIGlmIChxdWVyeS50eXBlID09PSAncGFnZScgfHwgcXVlcnkudHlwZSA9PT0gJ2xpc3QnKSB7XG4gICAgICAgIHZhciBpbXBhY3Q7XG4gICAgICAgIGlmIChxdWVyeS5vYmplY3RzKSB7XG4gICAgICAgICAgICAvLyBnZXQgcmlkIG9mIG51bGwgYW5kIHNvcnQgbGlzdCBieSBJRCBvciBVUkxcbiAgICAgICAgICAgIGlucHV0ID0gaW5wdXQuZmlsdGVyKEJvb2xlYW4pO1xuICAgICAgICAgICAgc29ydE9iamVjdHMoaW5wdXQpO1xuICAgICAgICAgICAgaW1wYWN0ID0gaG9va0Z1bmMocXVlcnkub2JqZWN0cywgaW5wdXQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gc2VlIGFib3ZlXG4gICAgICAgICAgICBpbXBhY3QgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpbXBhY3QgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGltcGFjdCBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgICAgICB2YXIgb2JqZWN0cyA9IGltcGFjdDtcbiAgICAgICAgICAgIGlmIChxdWVyeS50eXBlID09PSAnbGlzdCcpIHtcbiAgICAgICAgICAgICAgICAvLyB1cGRhdGUgdGhlIHRvdGFsXG4gICAgICAgICAgICAgICAgdmFyIGRpZmYgPSBvYmplY3RzLmxlbmd0aCAtIHF1ZXJ5Lm9iamVjdHMubGVuZ3RoO1xuICAgICAgICAgICAgICAgIG9iamVjdHMudG90YWwgPSBxdWVyeS5vYmplY3RzLnRvdGFsICsgZGlmZjtcblxuICAgICAgICAgICAgICAgIC8vIHJlc3RvcmUgbW9yZSBmdW5jdGlvblxuICAgICAgICAgICAgICAgIG9iamVjdHMubW9yZSA9IHF1ZXJ5Lm9iamVjdHMubW9yZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHF1ZXJ5Lm9iamVjdHMgPSBvYmplY3RzO1xuICAgICAgICAgICAgcXVlcnkucHJvbWlzZSA9IFByb21pc2UucmVzb2x2ZShvYmplY3RzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHF1ZXJ5LmRpcnR5ID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG59XG5cbi8qKlxuICogUmV0dXJuIGZhbHNlIHRvIGluZGljYXRlIHRoYXQgY2hhbmdlIHNob3VsZCBiZSBpZ25vcmVkXG4gKlxuICogQHJldHVybiB7ZmFsc2V9XG4gKi9cbmZ1bmN0aW9uIGlnbm9yZUNoYW5nZSgpIHtcbiAgICByZXR1cm4gZmFsc2U7XG59XG5cbi8qKlxuICogUmV0dXJuIHRydWUgdG8gaW5kaWNhdGUgdGhhdCBxdWVyeSBzaG91bGQgYmUgcmVydW5cbiAqXG4gKiBAcmV0dXJuIHt0cnVlfVxuICovXG5mdW5jdGlvbiByZWZyZXNoUXVlcnkoKSB7XG4gICAgcmV0dXJuIHRydWU7XG59XG5cbi8qKlxuICogUmV0dXJuIHRoZSBuZXcgb2JqZWN0XG4gKlxuICogQHBhcmFtICB7T2JqZWN0fSBvYmplY3RcbiAqIEBwYXJhbSAge09iamVjdH0gbmV3T2JqZWN0XG4gKlxuICogQHJldHVybiB7T2JqZWN0fGZhbHNlfVxuICovXG5mdW5jdGlvbiByZXBsYWNlT2JqZWN0KG9iamVjdCwgbmV3T2JqZWN0KSB7XG4gICAgaWYgKCFtYXRjaE9iamVjdChuZXdPYmplY3QsIG9iamVjdCkpIHtcbiAgICAgICAgcmV0dXJuIG5ld09iamVjdDtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xufVxuXG4vKipcbiAqIFJlcGxhY2Ugb2xkIHZlcnNpb24gb2Ygb2JqZWN0cyB3aXRoIG5ldyBvbmVzXG4gKlxuICogQHBhcmFtICB7QXJyYXk8T2JqZWN0Pl19IG9iamVjdHNcbiAqIEBwYXJhbSAge0FycmF5PE9iamVjdD59IG5ld09iamVjdHNcbiAqXG4gKiBAcmV0dXJuIHtBcnJheTxPYmplY3Q+fGZhbHNlfVxuICovXG5mdW5jdGlvbiByZXBsYWNlT2JqZWN0cyhvYmplY3RzLCBuZXdPYmplY3RzKSB7XG4gICAgdmFyIGNoYW5nZWQgPSBmYWxzZTtcbiAgICB2YXIgbmV3TGlzdCA9IG9iamVjdHMubWFwKGZ1bmN0aW9uKG9iamVjdCkge1xuICAgICAgICB2YXIgbmV3T2JqZWN0ID0gZmluZE9iamVjdChuZXdPYmplY3RzLCBvYmplY3QpO1xuICAgICAgICBpZiAobmV3T2JqZWN0KSB7XG4gICAgICAgICAgICBpZiAoIW1hdGNoT2JqZWN0KG5ld09iamVjdCwgb2JqZWN0KSkge1xuICAgICAgICAgICAgICAgIGNoYW5nZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXdPYmplY3Q7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG9iamVjdDtcbiAgICB9KTtcbiAgICByZXR1cm4gKGNoYW5nZWQpID8gbmV3TGlzdCA6IGZhbHNlO1xufVxuXG4vKipcbiAqIEFkZCBuZXcgb2JqZWN0cyBhdCBiZWdpbm5pbmcgb2YgbGlzdFxuICpcbiAqIEBwYXJhbSAge0FycmF5PE9iamVjdD59IG9iamVjdHNcbiAqIEBwYXJhbSAge0FycmF5PE9iamVjdD59IG5ld09iamVjdHNcbiAqXG4gKiBAcmV0dXJuIHtBcnJheTxPYmplY3Q+fGZhbHNlfVxuICovXG5mdW5jdGlvbiB1bnNoaWZ0T2JqZWN0cyhvYmplY3RzLCBuZXdPYmplY3RzKSB7XG4gICAgdmFyIGNoYW5nZWQgPSBmYWxzZTtcbiAgICB2YXIgbmV3TGlzdCA9IG9iamVjdHMuc2xpY2UoKTtcbiAgICBuZXdPYmplY3RzLmZvckVhY2goZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgICAgIHZhciBpbmRleCA9IGZpbmRPYmplY3RJbmRleChuZXdMaXN0LCBvYmplY3QpO1xuICAgICAgICBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgICAgICAgICBuZXdMaXN0LnVuc2hpZnQob2JqZWN0KTtcbiAgICAgICAgICAgIGNoYW5nZWQgPSB0cnVlO1xuICAgICAgICB9IGVsc2UgaWYgKCFtYXRjaE9iamVjdChuZXdMaXN0W2luZGV4XSwgb2JqZWN0KSkge1xuICAgICAgICAgICAgbmV3TGlzdFtpbmRleF0gPSBvYmplY3Q7XG4gICAgICAgICAgICBjaGFuZ2VkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiAoY2hhbmdlZCkgPyBuZXdMaXN0IDogZmFsc2U7XG59XG5cbi8qKlxuICogQWRkIG5ldyBvYmplY3RzIGF0IGVuZCBvZiBsaXN0XG4gKlxuICogQHBhcmFtICB7QXJyYXk8T2JqZWN0Pn0gb2JqZWN0c1xuICogQHBhcmFtICB7QXJyYXk8T2JqZWN0Pn0gbmV3T2JqZWN0c1xuICpcbiAqIEByZXR1cm4ge0FycmF5PE9iamVjdD58ZmFsc2V9XG4gKi9cbmZ1bmN0aW9uIHB1c2hPYmplY3RzKG9iamVjdHMsIG5ld09iamVjdHMpIHtcbiAgICB2YXIgY2hhbmdlZCA9IGZhbHNlO1xuICAgIHZhciBuZXdMaXN0ID0gb2JqZWN0cy5zbGljZSgpO1xuICAgIG5ld09iamVjdHMuZm9yRWFjaChmdW5jdGlvbihvYmplY3QpIHtcbiAgICAgICAgdmFyIGluZGV4ID0gZmluZE9iamVjdEluZGV4KG5ld0xpc3QsIG9iamVjdCk7XG4gICAgICAgIGlmIChpbmRleCA9PT0gLTEpIHtcbiAgICAgICAgICAgIG5ld0xpc3QucHVzaChvYmplY3QpO1xuICAgICAgICAgICAgY2hhbmdlZCA9IHRydWU7XG4gICAgICAgIH0gZWxzZSBpZiAoIW1hdGNoT2JqZWN0KG5ld0xpc3RbaW5kZXhdLCBvYmplY3QpKSB7XG4gICAgICAgICAgICBuZXdMaXN0W2luZGV4XSA9IG9iamVjdDtcbiAgICAgICAgICAgIGNoYW5nZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIChjaGFuZ2VkKSA/IG5ld0xpc3QgOiBmYWxzZTtcbn1cblxuLyoqXG4gKiBSZXR1cm4gdHJ1ZSB0byBpbmRpY2F0ZSB0aGF0IHF1ZXJ5IHNob3VsZCBiZSByZW1vdmVkXG4gKlxuICogQHBhcmFtICB7T2JqZWN0fSBvYmplY3RcbiAqIEBwYXJhbSAge09iamVjdH0gZGVsZXRlZE9CamVjdFxuICpcbiAqIEByZXR1cm4ge3RydWV9XG4gKi9cbmZ1bmN0aW9uIHJlbW92ZU9iamVjdChvYmplY3QsIGRlbGV0ZWRPQmplY3QpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbn1cblxuLyoqXG4gKiBSZW1vdmUgb2JqZWN0cyBmcm9tIGxpc3RcbiAqXG4gKiBAcGFyYW0gIHtBcnJheTxPYmplY3Q+fSBvYmplY3RzXG4gKiBAcGFyYW0gIHtBcnJheTxPYmplY3Q+fSBkZWxldGVkT2JqZWN0c1xuICpcbiAqIEByZXR1cm4ge0FycmF5PE9iamVjdD58ZmFsc2V9XG4gKi9cbmZ1bmN0aW9uIHJlbW92ZU9iamVjdHMob2JqZWN0cywgZGVsZXRlZE9iamVjdHMpIHtcbiAgICB2YXIgY2hhbmdlZCA9IGZhbHNlO1xuICAgIHZhciBuZXdMaXN0ID0gb2JqZWN0cy5maWx0ZXIoZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgICAgIGlmIChmaW5kT2JqZWN0SW5kZXgoZGVsZXRlZE9iamVjdHMsIG9iamVjdCkgIT09IC0xKSB7XG4gICAgICAgICAgICBjaGFuZ2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIChjaGFuZ2VkKSA/IG5ld0xpc3QgOiBmYWxzZTtcbn1cblxuLyoqXG4gKiBTZWUgaWYgYSBxdWVyeSBoYXMgdGhlIGdpdmVuIHByb3BlcnRpZXNcbiAqXG4gKiBAcGFyYW0gIHtPYmplY3R9IHF1ZXJ5XG4gKiBAcGFyYW0gIHtPYmplY3R9IHByb3BzXG4gKlxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqL1xuZnVuY3Rpb24gbWF0Y2hRdWVyeShxdWVyeSwgcHJvcHMpIHtcbiAgICBmb3IgKHZhciBuYW1lIGluIHByb3BzKSB7XG4gICAgICAgIGlmICghbWF0Y2hPYmplY3QocXVlcnlbbmFtZV0sIHByb3BzW25hbWVdKSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xufVxuXG4vKipcbiAqIFNlZSBpZiB0d28gb2JqZWN0cyBhcmUgaWRlbnRpY2FsXG4gKlxuICogQHBhcmFtICB7Kn0gb2JqZWN0MVxuICogQHBhcmFtICB7Kn0gb2JqZWN0MlxuICpcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKi9cbmZ1bmN0aW9uIG1hdGNoT2JqZWN0KG9iamVjdDEsIG9iamVjdDIpIHtcbiAgICBpZiAob2JqZWN0MSAhPT0gb2JqZWN0Mikge1xuICAgICAgICBpZiAob2JqZWN0MSBpbnN0YW5jZW9mIE9iamVjdCAmJiBvYmplY3QyIGluc3RhbmNlb2YgT2JqZWN0KSB7XG4gICAgICAgICAgICBpZiAob2JqZWN0MS5jb25zdHJ1Y3RvciAhPT0gb2JqZWN0Mi5jb25zdHJ1Y3Rvcikge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChvYmplY3QxIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgICAgICAgICAgICBpZiAob2JqZWN0MS5sZW5ndGggIT09IG9iamVjdDIubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBvYmplY3QxLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghbWF0Y2hPYmplY3Qob2JqZWN0MVtpXSwgb2JqZWN0MltpXSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAob2JqZWN0MSBpbnN0YW5jZW9mIEZ1bmN0aW9uKSB7XG4gICAgICAgICAgICAgICAgaWYgKG9iamVjdDEudG9TdHJpbmcoKSAhPT0gb2JqZWN0Mi50b1N0cmluZygpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIG5hbWUgaW4gb2JqZWN0MSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIW1hdGNoT2JqZWN0KG9iamVjdDFbbmFtZV0sIG9iamVjdDJbbmFtZV0pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgbmFtZSBpbiBvYmplY3QyKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghKG5hbWUgaW4gb2JqZWN0MSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbn1cblxuLyoqXG4gKiBDaGVjayBpZiB0aGUgZ2l2ZW4gVVJMIG1hdGNoIGFueSBpbiB0aGUgbGlzdFxuICpcbiAqIEBwYXJhbSAge1N0cmluZ30gdXJsXG4gKiBAcGFyYW0gIHtBcnJheTxTdHJpbmc+fSBvdGhlclVSTHNcbiAqXG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICovXG5mdW5jdGlvbiBtYXRjaEFueVVSTCh1cmwsIG90aGVyVVJMcykge1xuICAgIHJldHVybiBvdGhlclVSTHMuc29tZShmdW5jdGlvbihvdGhlclVSTCkge1xuICAgICAgICBpZiAob3RoZXJVUkwgPT09IHVybCkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0gZWxzZSBpZiAodXJsLnN1YnN0cigwLCBvdGhlclVSTC5sZW5ndGgpID09PSBvdGhlclVSTCkge1xuICAgICAgICAgICAgdmFyIGxjID0gb3RoZXJVUkwuY2hhckF0KG90aGVyVVJMLmxlbmd0aCAtIDEpO1xuICAgICAgICAgICAgdmFyIGVjID0gdXJsLmNoYXJBdChvdGhlclVSTC5sZW5ndGgpO1xuICAgICAgICAgICAgaWYgKGxjID09PSAnLycgfHwgZWMgPT09ICcvJykge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG59XG5cbi8qKlxuICogUmVtb3ZlIHRyYWlsaW5nIHNsYXNoIGZyb20gVVJMXG4gKlxuICogQHBhcmFtICB7U3RyaW5nfSB1cmxcbiAqXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIHJlbW92ZVRyYWlsaW5nU2xhc2godXJsKSB7XG4gICAgdmFyIGxjID0gdXJsLmNoYXJBdCh1cmwubGVuZ3RoIC0gMSk7XG4gICAgaWYgKGxjID09PSAnLycpIHtcbiAgICAgICAgcmV0dXJuIHVybC5zdWJzdHIoMCwgdXJsLmxlbmd0aCAtIDEpO1xuICAgIH1cbiAgICByZXR1cm4gdXJsO1xufVxuXG4vKipcbiAqIEFkZCBsZWFkaW5nIHNsYXNoIHRvIFVSTFxuICpcbiAqIEBwYXJhbSAge1N0cmluZ30gdXJsXG4gKlxuICogQHJldHVybiB7U3RyaW5nfVxuICovXG5mdW5jdGlvbiBhZGRMZWFkaW5nU2xhc2godXJsKSB7XG4gICAgdmFyIGZjID0gdXJsLmNoYXJBdCgwKTtcbiAgICBpZiAoZmMgIT09ICcvJykge1xuICAgICAgICByZXR1cm4gJy8nICsgdXJsO1xuICAgIH1cbiAgICByZXR1cm4gdXJsO1xufVxuXG4vKipcbiAqIFJldHVybiB0aGUgVVJMIG9mIHRoZSBwYXJlbnQgZm9sZGVyXG4gKlxuICogQHBhcmFtICB7U3RyaW5nfSB1cmxcbiAqXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIGdldEZvbGRlclVSTCh1cmwpIHtcbiAgICB2YXIgZWkgPSB1cmwubGFzdEluZGV4T2YoJy8nKTtcbiAgICBpZiAoZWkgPT09IHVybC5sZW5ndGggLSAxKSB7XG4gICAgICAgIGVpID0gdXJsLmxhc3RJbmRleE9mKCcvJywgZWkgLSAxKTtcbiAgICB9XG4gICAgaWYgKGVpICE9PSAtMSkge1xuICAgICAgICByZXR1cm4gdXJsLnN1YnN0cigwLCBlaSArIDEpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZ2V0T2JqZWN0VVJMKGZvbGRlclVSTCwgb2JqZWN0KSB7XG4gICAgaWYgKCFvYmplY3QpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoZm9sZGVyVVJMICYmIG9iamVjdC5pZCkge1xuICAgICAgICByZXR1cm4gcmVtb3ZlVHJhaWxpbmdTbGFzaChmb2xkZXJVUkwpICsgJy8nICsgb2JqZWN0LmlkICsgJy8nO1xuICAgIH0gZWxzZSBpZiAob2JqZWN0LnVybCkge1xuICAgICAgICByZXR1cm4gb2JqZWN0LnVybDtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGdldE9iamVjdEZvbGRlclVSTChmb2xkZXJVUkwsIG9iamVjdCkge1xuICAgIGlmICghb2JqZWN0KSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKGZvbGRlclVSTCAmJiBvYmplY3QuaWQpIHtcbiAgICAgICAgcmV0dXJuIGZvbGRlclVSTDtcbiAgICB9IGVsc2UgaWYgKG9iamVjdC51cmwpIHtcbiAgICAgICAgcmV0dXJuIGdldEZvbGRlclVSTChvYmplY3QudXJsKTtcbiAgICB9XG59XG5cbi8qKlxuICogQXBwZW5kIHRoZSB2YXJpYWJsZSBcInBhZ2VcIiB0byBhIFVSTCdzIHF1ZXJ5LCB1bmxlc3MgcGFnZSBlcXVhbHMgMS5cbiAqXG4gKiBAcGFyYW0gIHtTdHJpbmd9IHVybFxuICogQHBhcmFtICB7TnVtYmVyfSBwYWdlXG4gKlxuICogQHJldHVybiB7U3RyaW5nfVxuICovXG5mdW5jdGlvbiBhdHRhY2hQYWdlTnVtYmVyKHVybCwgcGFnZSkge1xuICAgIGlmIChwYWdlID09PSAxKSB7XG4gICAgICAgIHJldHVybiB1cmw7XG4gICAgfVxuICAgIHZhciBxaSA9IHVybC5pbmRleE9mKCc/Jyk7XG4gICAgdmFyIHNlcCA9IChxaSA9PT0gLTEpID8gJz8nIDogJyYnO1xuICAgIHJldHVybiBzZXAgKyAncGFnZT0nICsgcGFnZTtcbn1cblxuZnVuY3Rpb24gd2FpdEZvck5leHRQYWdlKHF1ZXJ5KSB7XG4gICAgcmV0dXJuIHF1ZXJ5Lm5leHRQcm9taXNlIHx8IFByb21pc2UucmVzb2x2ZSgpO1xufVxuXG5mdW5jdGlvbiBtYXRjaFVSTCh1cmwxLCB1cmwyKSB7XG4gICAgdmFyIHFpID0gdXJsMS5sYXN0SW5kZXhPZignPycpO1xuICAgIGlmIChxaSAhPT0gLTEpIHtcbiAgICAgICAgdXJsMSA9IHVybDEuc3Vic3RyKDAsIHFpKTtcbiAgICB9XG4gICAgcmV0dXJuICh1cmwxID09PSB1cmwyKTtcbn1cblxuLyoqXG4gKiBGaW5kIHRoZSBwb3NpdGlvbiBvZiBhbiBvYmplY3QgaW4gYW4gYXJyYXkgYmFzZWQgb24gaWQgb3IgVVJMLiBSZXR1cm4gLTEgaWZcbiAqIHRoZSBvYmplY3QgaXMgbm90IHRoZXJlLlxuICpcbiAqIEBwYXJhbSAge0FycmF5PE9iamVjdD59IGxpc3RcbiAqIEBwYXJhbSAge09iamVjdH0gb2JqZWN0XG4gKlxuICogQHJldHVybiB7TnVtYmVyfVxuICovXG5mdW5jdGlvbiBmaW5kT2JqZWN0SW5kZXgobGlzdCwgb2JqZWN0KSB7XG4gICAgdmFyIGtleUEgPSBvYmplY3QuaWQgfHwgb2JqZWN0LnVybDtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIG9iaiA9IGxpc3RbaV07XG4gICAgICAgIGlmIChvYmopIHtcbiAgICAgICAgICAgIHZhciBrZXlCID0gb2JqLmlkIHx8IG9iai51cmw7XG4gICAgICAgICAgICBpZiAoa2V5QSA9PT0ga2V5Qikge1xuICAgICAgICAgICAgICAgIHJldHVybiBpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiAtMTtcbn1cblxuLyoqXG4gKiBGaW5kIGFuIG9iamVjdCBpbiBhbiBhcnJheSBiYXNlZCBvbiBJRCBvciBVUkwuXG4gKlxuICogQHBhcmFtICB7W3R5cGVdfSBsaXN0XG4gKiBAcGFyYW0gIHtbdHlwZV19IG9iamVjdFxuICpcbiAqIEByZXR1cm4ge09iamVjdHx1bmRlZmluZWR9XG4gKi9cbmZ1bmN0aW9uIGZpbmRPYmplY3QobGlzdCwgb2JqZWN0KSB7XG4gICAgdmFyIGluZGV4ID0gZmluZE9iamVjdEluZGV4KGxpc3QsIG9iamVjdCk7XG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgICByZXR1cm4gbGlzdFtpbmRleF07XG4gICAgfVxufVxuXG4vKipcbiAqIFNvcnQgYSBsaXN0IG9mIG9iamVjdHMgYmFzZWQgb24gSUQgb3IgVVJMXG4gKlxuICogQHBhcmFtICB7QXJyYXk8T2JqZWN0Pn0gbGlzdFxuICovXG5mdW5jdGlvbiBzb3J0T2JqZWN0cyhsaXN0KSB7XG4gICAgbGlzdC5zb3J0KGZ1bmN0aW9uKGEsIGIpIHtcbiAgICAgICAgdmFyIGtleUEgPSBhLmlkIHx8IGEudXJsO1xuICAgICAgICB2YXIga2V5QiA9IGIuaWQgfHwgYi51cmw7XG4gICAgICAgIGlmIChrZXlBIDwga2V5Qikge1xuICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICB9IGVsc2UgaWYgKGtleUEgPiBrZXlCKSB7XG4gICAgICAgICAgICByZXR1cm4gKzE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuXG4vKipcbiAqIEFwcGVuZCBvYmplY3RzIHRvIGEgbGlzdCwgbWFraW5nIHN1cmUgZHVwbGljYXRlcyBhcmVuJ3QgYWRkZWRcbiAqXG4gKiBAcGFyYW0gIHtBcnJheTxPYmplY3Q+fSBsaXN0XG4gKiBAcGFyYW0gIHtBcnJheTxPYmplY3Q+fSBvYmplY3RzXG4gKlxuICogQHJldHVybiB7QXJyYXk8T2JqZWN0Pn1cbiAqL1xuZnVuY3Rpb24gYXBwZW5kT2JqZWN0cyhsaXN0LCBvYmplY3RzKSB7XG4gICAgaWYgKCFsaXN0KSB7XG4gICAgICAgIHJldHVybiBvYmplY3RzO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIG9iamVjdHMgPSBvYmplY3RzLmZpbHRlcihmdW5jdGlvbihvYmplY3QpIHtcbiAgICAgICAgICAgIHJldHVybiBmaW5kT2JqZWN0SW5kZXgobGlzdCwgb2JqZWN0KSA9PT0gLTE7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gbGlzdC5jb25jYXQob2JqZWN0cyk7XG4gICAgfVxufVxuXG4vKipcbiAqIFJlcGxhY2Ugb2JqZWN0cyBpbiBuZXdMaXN0IHRoYXQgYXJlIGlkZW50aWNhbCB0byB0aGVpciBjb3VudGVycGFydCBpbiBvbGRMaXN0LlxuICogUmV0dXJuIHRydWUgaWYgbmV3TGlzdCBpcyBpZGVudGljYWwgdG8gb2xkTGlzdC5cbiAqXG4gKiBAcGFyYW0gIHtBcnJheTxPYmplY3Q+fSBuZXdMaXN0XG4gKiBAcGFyYW0gIHtBcnJheTxPYmplY3Q+fSBvbGRMaXN0XG4gKlxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqL1xuZnVuY3Rpb24gcmVwbGFjZUlkZW50aWZpY2FsT2JqZWN0cyhuZXdMaXN0LCBvbGRMaXN0KSB7XG4gICAgdmFyIHVuY2hhbmdlZCA9IDA7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBuZXdMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBvbGRJbmRleCA9IGZpbmRPYmplY3RJbmRleChvbGRMaXN0LCBuZXdMaXN0W2ldKTtcbiAgICAgICAgaWYgKG9sZEluZGV4ICE9PSAtMSkge1xuICAgICAgICAgICAgaWYgKG1hdGNoT2JqZWN0KG5ld0xpc3RbaV0sIG9sZExpc3Rbb2xkSW5kZXhdKSkge1xuICAgICAgICAgICAgICAgIG5ld0xpc3RbaV0gPSBvbGRMaXN0W29sZEluZGV4XTtcbiAgICAgICAgICAgICAgICBpZiAoaSA9PT0gb2xkSW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgdW5jaGFuZ2VkKys7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiAodW5jaGFuZ2VkID09PSBuZXdMaXN0Lmxlbmd0aCAmJiBuZXdMaXN0Lmxlbmd0aCA9PT0gb2xkTGlzdC5sZW5ndGgpO1xufVxuXG4vKipcbiAqIEF0dGFjaCBvYmplY3RzIGZyb20gYW4gb2xkZXIgbGlzdCB0byBhIG5ldyBsaXN0IHRoYXQncyBiZWluZyByZXRyaWV2ZWQuXG4gKlxuICogQHBhcmFtICB7QXJyYXk8T2JqZWN0Pn0gbmV3TGlzdFxuICogQHBhcmFtICB7QXJyYXk8T2JqZWN0Pn0gb2xkTGlzdFxuICpcbiAqIEByZXR1cm4ge0FycmF5PE9iamVjdD59XG4gKi9cbmZ1bmN0aW9uIGpvaW5PYmplY3RMaXN0cyhuZXdMaXN0LCBvbGRMaXN0KSB7XG4gICAgLy8gZmluZCBwb2ludCB3aGVyZSB0aGUgdHdvIGxpc3QgaW50ZXJzZWN0XG4gICAgdmFyIHN0YXJ0SW5kZXggPSAwO1xuICAgIGZvciAodmFyIGkgPSBuZXdMaXN0Lmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgIHZhciBuZXdPYmplY3QgPSBuZXdMaXN0W2ldO1xuICAgICAgICB2YXIgb2xkSW5kZXggPSBmaW5kT2JqZWN0SW5kZXgob2xkTGlzdCwgbmV3T2JqZWN0KTtcbiAgICAgICAgaWYgKG9sZEluZGV4ICE9PSAtMSkge1xuICAgICAgICAgICAgc3RhcnRJbmRleCA9IG9sZEluZGV4ICsgMTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIHJlbW92ZSBvYmplY3RzIGFoZWFkIG9mIHRoZSBpbnRlcnNlY3Rpb24gZnJvbSB0aGUgb2xkIGxpc3QsIGFzIHdlbGxcbiAgICAvLyBhcyBhbnkgb2JqZWN0IHRoYXQgaXMgcHJlc2VudCBpbiB0aGUgbmV3IGxpc3QgKGR1ZSB0byBjaGFuZ2UgaW4gb3JkZXIpXG4gICAgdmFyIG9sZE9iamVjdHMgPSBvbGRMaXN0LmZpbHRlcihmdW5jdGlvbihvYmplY3QsIGluZGV4KSB7XG4gICAgICAgIGlmIChpbmRleCA+PSBzdGFydEluZGV4KSB7XG4gICAgICAgICAgICByZXR1cm4gZmluZE9iamVjdEluZGV4KG5ld0xpc3QsIG9iamVjdCkgPT09IC0xO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIG5ld0xpc3QuY29uY2F0KG9sZE9iamVjdHMpO1xufVxuXG4vKipcbiAqIEZpbHRlciBvdXQgb2JqZWN0cyB0aGF0IGFyZW4ndCBpbiB0aGUgZGlyZWN0b3J5LiBXaWxsIGFsd2F5cyByZXR1cm4gdGhlXG4gKiBzYW1lIGxpc3Qgd2hlbiBvYmplY3RzIGFyZSBrZXllZCBieSBJRCBhbmQgbm90IFVSTFxuICpcbiAqIEBwYXJhbSAge0FycmF5PE9iamVjdD59IG9iamVjdHNcbiAqIEBwYXJhbSAge1N0cmluZ30gZm9sZGVyVVJMXG4gKlxuICogQHJldHVybiB7QXJyYXk8T2JqZWN0Pn1cbiAqL1xuZnVuY3Rpb24gcmVtb3ZlT2JqZWN0c091dHNpZGVGb2xkZXIob2JqZWN0cywgZm9sZGVyVVJMKSB7XG4gICAgcmV0dXJuIG9iamVjdHMuZmlsdGVyKGZ1bmN0aW9uKG9iamVjdCkge1xuICAgICAgICB2YXIgb3RoZXJmb2xkZXJVUkwgPSBnZXRPYmplY3RGb2xkZXJVUkwoZm9sZGVyVVJMLCBvYmplY3QpO1xuICAgICAgICBpZiAob3RoZXJmb2xkZXJVUkwgPT09IGZvbGRlclVSTCkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cblxuLyoqXG4gKiBHZXQgcGFyYW1ldGVyICdtaW5pbXVtJyBmcm9tIG9wdGlvbnMuIElmIGl0J3MgYSBwZXJjZW50LCB0aGVuIGNhbGN1bGF0ZSB0aGVcbiAqIG1pbmltdW0gb2JqZWN0IGNvdW50IGJhc2VkIG9uIHRvdGFsLiBJZiBpdCdzIG5lZ2F0aXZlLCBzdWJzdHJhY3QgdGhlIHZhbHVlXG4gKiBmcm9tIHRoZSB0b3RhbC5cbiAqXG4gKiBAcGFyYW0gIHtPYmplY3R9IG9wdGlvbnNcbiAqIEBwYXJhbSAge051bWJlcn0gdG90YWxcbiAqIEBwYXJhbSAge051bWJlcn0gZGVmXG4gKlxuICogQHJldHVybiB7TnVtYmVyfVxuICovXG5mdW5jdGlvbiBnZXRNaW5pbXVtKG9wdGlvbnMsIHRvdGFsLCBkZWYpIHtcbiAgICBsZXQgbWluaW11bSA9IChvcHRpb25zKSA/IG9wdGlvbnMubWluaW11bSA6IHVuZGVmaW5lZDtcbiAgICBpZiAodHlwZW9mKG1pbmltdW0pID09PSAnc3RyaW5nJykge1xuICAgICAgICBtaW5pbXVtID0gbWluaW11bS50cmltKCk7XG4gICAgICAgIGlmIChtaW5pbXVtLmNoYXJBdChtaW5pbXVtLmxlbmd0aCAtIDEpID09PSAnJScpIHtcbiAgICAgICAgICAgIGxldCBwZXJjZW50ID0gcGFyc2VJbnQobWluaW11bSk7XG4gICAgICAgICAgICBtaW5pbXVtID0gTWF0aC5jZWlsKHRvdGFsICogKHBlcmNlbnQgLyAxMDApKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAobWluaW11bSA8IDApIHtcbiAgICAgICAgbWluaW11bSA9IHRvdGFsIC0gbWluaW11bTtcbiAgICAgICAgaWYgKG1pbmltdW0gPCAxKSB7XG4gICAgICAgICAgICBtaW5pbXVtID0gMTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbWluaW11bSB8fCBkZWY7XG59XG5cbi8qKlxuICogUmV0dXJuIHRoZSBjdXJyZW50IHRpbWUgaW4gSVNPIGZvcm1hdCwgYWRkaW5nIGEgZGVsdGEgb3B0aW9uYWxseVxuICpcbiAqIEBwYXJhbSAge051bWJlcnx1bmRlZmluZWR9IGRlbHRhXG4gKlxuICogQHJldHVybiB7U3RyaW5nfVxuICovXG5mdW5jdGlvbiBnZXRUaW1lKGRlbHRhKSB7XG4gICAgdmFyIGRhdGUgPSBuZXcgRGF0ZTtcbiAgICBpZiAoZGVsdGEpIHtcbiAgICAgICAgZGF0ZSA9IG5ldyBEYXRlKGRhdGUuZ2V0VGltZSgpICsgZGVsdGEpO1xuICAgIH1cbiAgICByZXR1cm4gZGF0ZS50b0lTT1N0cmluZygpO1xufVxuXG5mdW5jdGlvbiBSZWxha3NEamFuZ29EYXRhU291cmNlRXZlbnQodHlwZSwgdGFyZ2V0LCBwcm9wcykge1xuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgdGhpcy50YXJnZXQgPSB0YXJnZXQ7XG4gICAgZm9yICh2YXIgbmFtZSBpbiBwcm9wcykge1xuICAgICAgICB0aGlzW25hbWVdID0gcHJvcHNbbmFtZV07XG4gICAgfVxuICAgIHRoaXMuZGVmYXVsdFByZXZlbnRlZCA9IGZhbHNlO1xuICAgIHRoaXMuZGVjaXNpb25Qcm9taXNlID0gbnVsbDtcbn1cblxudmFyIHByb3RvdHlwZSA9IFJlbGFrc0RqYW5nb0RhdGFTb3VyY2VFdmVudC5wcm90b3R5cGU7XG5cbnByb3RvdHlwZS5wcmV2ZW50RGVmYXVsdCA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuZGVmYXVsdFByZXZlbnRlZCA9IHRydWU7XG59O1xuXG5wcm90b3R5cGUucG9zdHBvbmVEZWZhdWx0ID0gZnVuY3Rpb24ocHJvbWlzZSkge1xuICAgIGlmICghcHJvbWlzZSB8fCAhKHByb21pc2UudGhlbiBpbnN0YW5jZW9mIEZ1bmN0aW9uKSkge1xuICAgICAgICB0aGlzLmRlY2lzaW9uUHJvbWlzZSA9IHByb21pc2U7XG4gICAgfVxufTtcblxucHJvdG90eXBlLndhaXRGb3JEZWNpc2lvbiA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmRlY2lzaW9uUHJvbWlzZSB8fCBQcm9taXNlLnJlc29sdmUoKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gUmVsYWtzRGphbmdvRGF0YVNvdXJjZTtcbm1vZHVsZS5leHBvcnRzLlJlbGFrc0RqYW5nb0RhdGFTb3VyY2UgPSBSZWxha3NEamFuZ29EYXRhU291cmNlO1xubW9kdWxlLmV4cG9ydHMuUmVsYWtzRGphbmdvRGF0YVNvdXJjZUV2ZW50ID0gUmVsYWtzRGphbmdvRGF0YVNvdXJjZUV2ZW50O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC9ob21lL2NsZW9uZy9yZWxha3MtZGphbmdvLWRhdGEtc291cmNlL2luZGV4LmpzIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihSZWFjdCkge1xuXG52YXIgSVNfUFJFQUNUID0gKFJlYWN0LmggaW5zdGFuY2VvZiBGdW5jdGlvbik7XG52YXIgTWVhbndoaWxlID0gcmVxdWlyZSgnLi9tZWFud2hpbGUnKTtcblxuLyoqXG4gKiBIYXJ2ZXN0IEhUTUwgYW5kIHRleHQgbm9kZXNcbiAqXG4gKiBAcGFyYW0gIHtbdHlwZV19IG5vZGVcbiAqXG4gKiBAcmV0dXJuIHtQcm9taXNlPFZub2RlPn1cbiAqL1xuZnVuY3Rpb24gaGFydmVzdChub2RlKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgdmFyIGhhcnZlc3RlZCA9IGhhcnZlc3ROb2RlKG5vZGUsIHt9KTtcbiAgICAgICAgaWYgKCFpc1Byb21pc2UoaGFydmVzdGVkKSkge1xuICAgICAgICAgICAgLy8gYWx3YXlzIHJldHVybiBhIHByb21pc2VcbiAgICAgICAgICAgIGhhcnZlc3RlZCA9IFByb21pc2UucmVzb2x2ZShoYXJ2ZXN0ZWQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBoYXJ2ZXN0ZWQ7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnIpO1xuICAgIH1cbn1cblxuLyoqXG4gKiBIYXJ2ZXN0IEhUTUwgYW5kIHRleHQgbm9kZXNcbiAqXG4gKiBAcGFyYW0gIHtWTm9kZX0gbm9kZVxuICogQHBhcmFtICB7T2JqZWN0fSBjb250ZXh0XG4gKlxuICogQHJldHVybiB7Vk5vZGV8UHJvbWlzZTxWTm9kZT59XG4gKi9cbmZ1bmN0aW9uIGhhcnZlc3ROb2RlKG5vZGUsIGNvbnRleHQpIHtcbiAgICBpZiAoIShub2RlIGluc3RhbmNlb2YgT2JqZWN0KSkge1xuXHRcdHJldHVybiBub2RlO1xuXHR9XG4gICAgdmFyIGFzeW5jUmVuZGVyaW5nID0gbnVsbDtcbiAgICB2YXIgdHlwZSA9IGdldE5vZGVUeXBlKG5vZGUpO1xuICAgIGlmICh0eXBlIGluc3RhbmNlb2YgRnVuY3Rpb24pIHtcbiAgICAgICAgLy8gaXQncyBhIGNvbXBvbmVudFxuICAgICAgICB2YXIgcmVuZGVyZWQ7XG4gICAgICAgIHZhciBwcm9wcyA9IGdldE5vZGVQcm9wcyhub2RlLCB0eXBlKTtcbiAgICAgICAgaWYgKHR5cGUucHJvdG90eXBlICYmIHR5cGUucHJvdG90eXBlLnJlbmRlciBpbnN0YW5jZW9mIEZ1bmN0aW9uKSB7XG4gICAgICAgICAgICAvLyBzdGF0ZWZ1bCBjb21wb25lbnRcbiAgICAgICAgICAgIHZhciBjb21wb25lbnRDbGFzcyA9IHR5cGU7XG4gICAgICAgICAgICB2YXIgY29tcG9uZW50ID0gbmV3IGNvbXBvbmVudENsYXNzKHByb3BzLCBjb250ZXh0KTtcbiAgICAgICAgICAgIGNvbXBvbmVudC5wcm9wcyA9IHByb3BzO1xuICAgICAgICAgICAgY29tcG9uZW50LmNvbnRleHQgPSBjb250ZXh0O1xuICAgICAgICAgICAgdmFyIHN0YXRlID0gY29tcG9uZW50LnN0YXRlO1xuICAgICAgICAgICAgaWYgKGNvbXBvbmVudENsYXNzLmdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcykge1xuICAgICAgICAgICAgICAgIHZhciBvcmlnaW5hbFN0YXRlID0gc3RhdGU7XG4gICAgICAgICAgICAgICAgdmFyIGRlcml2ZWRTdGF0ZSA9IGNvbXBvbmVudENsYXNzLmdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyhwcm9wcywgb3JpZ2luYWxTdGF0ZSk7XG4gICAgICAgICAgICAgICAgc3RhdGUgPSB7fTtcbiAgICAgICAgICAgICAgICBhc3NpZ24oc3RhdGUsIG9yaWdpbmFsU3RhdGUpO1xuICAgICAgICAgICAgICAgIGFzc2lnbihzdGF0ZSwgZGVyaXZlZFN0YXRlKTtcbiAgICAgICAgICAgICAgICBjb21wb25lbnQuc3RhdGUgPSBzdGF0ZTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoY29tcG9uZW50LmNvbXBvbmVudFdpbGxNb3VudCkge1xuICAgICAgICAgICAgICAgIGlmICghSVNfUFJFQUNUKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudC51cGRhdGVyID0gUmVhY3RVcGRhdGVyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb21wb25lbnQuY29tcG9uZW50V2lsbE1vdW50KCk7XG4gICAgICAgICAgICAgICAgc3RhdGUgPSBjb21wb25lbnQuc3RhdGU7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGNvbXBvbmVudC5VTlNBRkVfY29tcG9uZW50V2lsbE1vdW50KSB7XG4gICAgICAgICAgICAgICAgaWYgKCFJU19QUkVBQ1QpIHtcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50LnVwZGF0ZXIgPSBSZWFjdFVwZGF0ZXI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbXBvbmVudC5VTlNBRkVfY29tcG9uZW50V2lsbE1vdW50KCk7XG4gICAgICAgICAgICAgICAgc3RhdGUgPSBjb21wb25lbnQuc3RhdGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY29tcG9uZW50LnJlbGFrcyAmJiBjb21wb25lbnQucmVuZGVyQXN5bmMgaW5zdGFuY2VvZiBGdW5jdGlvbikge1xuICAgICAgICAgICAgICAgIC8vIGNyZWF0ZSBib2d1cyBtZWFud2hpbGUgb2JqZWN0IHRoYXQgZG9lc24ndCBkbyBhbnl0aGluZ1xuICAgICAgICAgICAgICAgIHZhciBtZWFud2hpbGUgPSBuZXcgTWVhbndoaWxlKGNvbXBvbmVudCk7XG4gICAgICAgICAgICAgICAgaWYgKElTX1BSRUFDVCkge1xuICAgICAgICAgICAgICAgICAgICByZW5kZXJlZCA9IGNvbXBvbmVudC5yZW5kZXJBc3luYyhtZWFud2hpbGUsIHByb3BzLCBzdGF0ZSwgY29udGV4dCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmVuZGVyZWQgPSBjb21wb25lbnQucmVuZGVyQXN5bmMobWVhbndoaWxlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGlzUHJvbWlzZShyZW5kZXJlZCkpIHtcbiAgICAgICAgICAgICAgICAgICAgYXN5bmNSZW5kZXJpbmcgPSByZW5kZXJlZDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChJU19QUkVBQ1QpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVuZGVyZWQgPSBjb21wb25lbnQucmVuZGVyKHByb3BzLCBzdGF0ZSwgY29udGV4dCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmVuZGVyZWQgPSBjb21wb25lbnQucmVuZGVyKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gc3RhdGVsZXNzIGNvbXBvbmVudFxuICAgICAgICAgICAgdmFyIHN0YXRlbGVzc0NvbXBvbmVudEZ1bmMgPSB0eXBlO1xuICAgICAgICAgICAgcmVuZGVyZWQgPSBzdGF0ZWxlc3NDb21wb25lbnRGdW5jKHByb3BzLCBjb250ZXh0KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWFzeW5jUmVuZGVyaW5nKSB7XG4gICAgICAgICAgICAvLyBoYXJ2ZXN0IHdoYXQgd2FzIHJlbmRlcmVkXG4gICAgICAgICAgICByZXR1cm4gaGFydmVzdE5vZGUocmVuZGVyZWQsIGNvbnRleHQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gd2FpdCBmb3IgYXN5bmNocm9ub3VzIHJlbmRlcmluZyB0byBmaW5pc2hcbiAgICAgICAgICAgIHJldHVybiBhc3luY1JlbmRlcmluZy50aGVuKGZ1bmN0aW9uKHJlbmRlcmVkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGhhcnZlc3ROb2RlKHJlbmRlcmVkLCBjb250ZXh0KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgLy8gaGFydmVzdCBIVE1MK3RleHQgbm9kZXMgZnJvbSBjaGlsZHJlblxuICAgICAgICByZXR1cm4gaGFydmVzdENoaWxkcmVuKG5vZGUsIGNvbnRleHQpO1xuICAgIH1cbn1cblxuLyoqXG4gKiBIYXJ2ZXN0IEhUTUwgYW5kIHRleHQgbm9kZXMgb2YgYSBub2RlJ3MgY2hpbGRyZW5cbiAqXG4gKiBAcGFyYW0gIHtSZWFjdEVsZW1lbnR8Vk5vZGV9IG5vZGVcbiAqIEBwYXJhbSAge09iamVjdH0gY29udGV4dFxuICpcbiAqIEByZXR1cm4ge1JlYWN0RWxlbWVudHxWTm9kZXxQcm9taXNlPFJlYWN0RWxlbWVudHxWTm9kZT59XG4gKi9cbmZ1bmN0aW9uIGhhcnZlc3RDaGlsZHJlbihub2RlLCBjb250ZXh0KSB7XG4gICAgdmFyIGNoaWxkcmVuID0gZ2V0Tm9kZUNoaWxkcmVuKG5vZGUpO1xuICAgIHZhciBuZXdDaGlsZHJlbjtcbiAgICBpZiAoY2hpbGRyZW4gaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICBuZXdDaGlsZHJlbiA9IGhhcnZlc3ROb2RlcyhjaGlsZHJlbiwgY29udGV4dCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgbmV3Q2hpbGRyZW4gPSBoYXJ2ZXN0Tm9kZShjaGlsZHJlbiwgY29udGV4dCk7XG4gICAgfVxuICAgIHZhciBhc3luY1JlbmRlcmluZyA9IG51bGw7XG4gICAgaWYgKGlzUHJvbWlzZShuZXdDaGlsZHJlbikpIHtcbiAgICAgICAgYXN5bmNSZW5kZXJpbmcgPSBuZXdDaGlsZHJlbjtcbiAgICB9XG4gICAgaWYgKG5ld0NoaWxkcmVuID09PSBjaGlsZHJlbikge1xuICAgICAgICByZXR1cm4gbm9kZTtcbiAgICB9XG4gICAgaWYgKCFhc3luY1JlbmRlcmluZykge1xuICAgICAgICAvLyByZXR1cm4gbmV3IG5vZGUgd2l0aCBuZXcgY2hpbGRyZW4gaW1tZWRpYXRlXG4gICAgICAgIHJldHVybiByZXBsYWNlQ2hpbGRyZW4obm9kZSwgbmV3Q2hpbGRyZW4pO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIHdhaXQgZm9yIGFzeW5jaHJvdW5vdXMgcmVuZGVyaW5nIG9mIGNoaWxkcmVuXG4gICAgICAgIHJldHVybiBhc3luY1JlbmRlcmluZy50aGVuKGZ1bmN0aW9uKG5ld0NoaWxkcmVuKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVwbGFjZUNoaWxkcmVuKG5vZGUsIG5ld0NoaWxkcmVuKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG4vKipcbiAqIEhhcnZlc3QgSFRNTCBhbmQgdGV4dCBub2RlcyBmcm9tIGFuIGFycmF5XG4gKlxuICogQHBhcmFtICB7QXJyYXk8UmVhY3RFbGVtZW50fFZOb2RlPn0gbm9kZVxuICogQHBhcmFtICB7T2JqZWN0fSBjb250ZXh0XG4gKlxuICogQHJldHVybiB7QXJyYXl8UHJvbWlzZTxBcnJheT59XG4gKi9cbmZ1bmN0aW9uIGhhcnZlc3ROb2Rlcyhub2RlcywgY29udGV4dCkge1xuICAgIHZhciBjaGFuZ2VkID0gZmFsc2U7XG4gICAgdmFyIGFzeW5jUmVuZGVyaW5nUmVxdWlyZWQgPSBmYWxzZTtcbiAgICB2YXIgbmV3Tm9kZXMgPSBub2Rlcy5tYXAoZnVuY3Rpb24oZWxlbWVudCkge1xuICAgICAgICB2YXIgaGFydmVzdGVkO1xuICAgICAgICBpZiAoZWxlbWVudCBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgICAgICBoYXJ2ZXN0ZWQgPSBoYXJ2ZXN0Tm9kZXMoZWxlbWVudCwgY29udGV4dCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBoYXJ2ZXN0ZWQgPSBoYXJ2ZXN0Tm9kZShlbGVtZW50LCBjb250ZXh0KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaXNQcm9taXNlKGhhcnZlc3RlZCkpIHtcbiAgICAgICAgICAgIGFzeW5jUmVuZGVyaW5nUmVxdWlyZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGNoYW5nZWQgPSBjaGFuZ2VkIHx8IChoYXJ2ZXN0ZWQgIT09IGVsZW1lbnQpO1xuICAgICAgICByZXR1cm4gaGFydmVzdGVkO1xuICAgIH0pO1xuICAgIGlmICghYXN5bmNSZW5kZXJpbmdSZXF1aXJlZCkge1xuICAgICAgICAvLyByZXR1cm4gb3JpZ2luYWwgbGlzdCBpZiBub3RoaW5nIGhhcyBjaGFuZ2VkXG4gICAgICAgIHJldHVybiBjaGFuZ2VkID8gbmV3Tm9kZXMgOiBub2RlcztcbiAgICB9IGVsc2Uge1xuICAgICAgICAvLyB3YWl0IGZvciBwcm9taXNlcyB0byByZXNvbHZlXG4gICAgICAgIHJldHVybiBQcm9taXNlLmFsbChuZXdOb2Rlcyk7XG4gICAgfVxufVxuXG4vKipcbiAqIFJldHVybiBhIG5ldyBub2RlIGlmIGNoaWxkcmVuIGFyZSBkaWZmZXJlbnRcbiAqXG4gKiBAcGFyYW0gIHtSZWFjdEVsZW1lbnR8Vk5vZGV9IG5vZGVcbiAqIEBwYXJhbSAge0FycmF5fSBuZXdDaGlsZHJlblxuICpcbiAqIEByZXR1cm4ge1JlYWN0RWxlbWVudHxWTm9kZX1cbiAqL1xuZnVuY3Rpb24gcmVwbGFjZUNoaWxkcmVuKG5vZGUsIG5ld0NoaWxkcmVuKSB7XG4gICAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChub2RlLCB1bmRlZmluZWQsIG5ld0NoaWxkcmVuKTtcbn1cblxuLyoqXG4gKiBDb3B5IHByb3BlcnRpZXNcbiAqXG4gKiBAcGFyYW0gIHtPYmplY3R9IGRlc3RcbiAqIEBwYXJhbSAge09iamVjdH0gc3JjXG4gKlxuICogQHJldHVybiB7T2JqZWN0fVxuICovXG5mdW5jdGlvbiBhc3NpZ24oZGVzdCwgc3JjKSB7XG4gICAgZm9yICh2YXIgbmFtZSBpbiBzcmMpIHtcbiAgICAgICAgZGVzdFtuYW1lXSA9IHNyY1tuYW1lXTtcbiAgICB9XG4gICAgcmV0dXJuIGRlc3Q7XG59XG5cbi8qKlxuICogUmV0dXJuIGEgbm9kZSdzIHR5cGVcbiAqXG4gKiBAcGFyYW0gIHtSZWFjdEVsZW1lbnR8Vk5vZGV9IG5vZGVcbiAqXG4gKiBAcmV0dXJuIHtTdHJpbmd8RnVuY3Rpb259XG4gKi9cbmZ1bmN0aW9uIGdldE5vZGVUeXBlKG5vZGUpIHtcbiAgICByZXR1cm4gKElTX1BSRUFDVCkgPyBub2RlLm5vZGVOYW1lIDogbm9kZS50eXBlO1xufVxuXG4vKipcbiAqIFJldHVybiB0aGUgcHJvcHMgb2YgYSBub2RlXG4gKlxuICogQHBhcmFtICB7UmVhY3RFbGVtZW50fFZOb2RlfSBub2RlXG4gKiBAcGFyYW0gIHtGdW5jdGlvbn0gdHlwZVxuICpcbiAqIEByZXR1cm4ge09iamVjdH1cbiAqL1xuZnVuY3Rpb24gZ2V0Tm9kZVByb3BzKG5vZGUsIHR5cGUpIHtcblx0dmFyIHByb3BzID0ge31cbiAgICBpZiAoSVNfUFJFQUNUKSB7XG4gICAgICAgIGFzc2lnbihwcm9wcywgbm9kZS5hdHRyaWJ1dGVzKTtcbiAgICAgICAgcHJvcHMuY2hpbGRyZW4gPSBub2RlLmNoaWxkcmVuO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGFzc2lnbihwcm9wcywgbm9kZS5wcm9wcyk7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShwcm9wcywgJ2NoaWxkcmVuJywgeyB2YWx1ZTogbm9kZS5wcm9wcy5jaGlsZHJlbiB9KTtcbiAgICB9XG5cbiAgICAvLyBhcHBseSBkZWZhdWx0IHByb3BzXG4gICAgdmFyIGRlZmF1bHRQcm9wcyA9IHR5cGUuZGVmYXVsdFByb3BzO1xuICAgIGZvciAodmFyIG5hbWUgaW4gZGVmYXVsdFByb3BzKSB7XG4gICAgICAgIGlmIChwcm9wc1tuYW1lXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBwcm9wc1tuYW1lXSA9IGRlZmF1bHRQcm9wc1tuYW1lXTtcbiAgICAgICAgfVxuICAgIH1cblx0cmV0dXJuIHByb3BzO1xufVxuXG4vKipcbiAqIFJldHVybiB0aGUgY2hpbGRyZW4gb2YgYSBub2RlXG4gKlxuICogQHBhcmFtICB7UmVhY3RFbGVtZW50fFZOb2RlfSBub2RlXG4gKlxuICogQHJldHVybiB7Kn1cbiAqL1xuZnVuY3Rpb24gZ2V0Tm9kZUNoaWxkcmVuKG5vZGUpIHtcbiAgICBpZiAoSVNfUFJFQUNUKSB7XG4gICAgICAgIHJldHVybiBub2RlLmNoaWxkcmVuO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBub2RlLnByb3BzLmNoaWxkcmVuO1xuICAgIH1cbn1cblxuLyoqXG4gKiBSZXR1cm4gdHJ1ZSBpZiBnaXZlbiB2YWx1ZSBob2xkIGEgcHJvbWlzZVxuICpcbiAqIEBwYXJhbSAgeyp9ICB2YWx1ZVxuICpcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKi9cbmZ1bmN0aW9uIGlzUHJvbWlzZSh2YWx1ZSkge1xuICAgIHJldHVybiAodmFsdWUgaW5zdGFuY2VvZiBPYmplY3QgJiYgdmFsdWUudGhlbiBpbnN0YW5jZW9mIEZ1bmN0aW9uKTtcbn1cblxuaWYgKCFJU19QUkVBQ1QpIHtcbiAgICB2YXIgUmVhY3RVcGRhdGVyID0ge1xuICAgICAgICBlbnF1ZXVlQ2FsbGJhY2s6IGZ1bmN0aW9uKGluc3QsIGYpIHtcbiAgICAgICAgICAgIGYoKTtcbiAgICAgICAgfSxcbiAgICAgICAgZW5xdWV1ZUZvcmNlVXBkYXRlOiBmdW5jdGlvbihpbnN0KSB7XG4gICAgICAgIH0sXG4gICAgICAgIGVucXVldWVSZXBsYWNlU3RhdGU6IGZ1bmN0aW9uKGluc3QsIHN0YXRlKSB7XG4gICAgICAgICAgICB2YXIgbmV3U3RhdGUgPSB7fTtcbiAgICAgICAgICAgIGFzc2lnbihuZXdTdGF0ZSwgaW5zdCk7XG4gICAgICAgICAgICBhc3NpZ24obmV3U3RhdGUsIHN0YXRlKTtcbiAgICAgICAgICAgIGluc3Quc3RhdGUgPSBuZXdTdGF0ZTtcbiAgICAgICAgfSxcbiAgICAgICAgZW5xdWV1ZVNldFN0YXRlOiBmdW5jdGlvbihpbnN0LCBwYXJ0aWFsU3RhdGUpIHtcbiAgICAgICAgICAgIHZhciBuZXdTdGF0ZSA9IHt9O1xuICAgICAgICAgICAgYXNzaWduKG5ld1N0YXRlLCBpbnN0LnN0YXRlKTtcbiAgICAgICAgICAgIGFzc2lnbihuZXdTdGF0ZSwgcGFydGlhbFN0YXRlKTtcbiAgICAgICAgICAgIGluc3Quc3RhdGUgPSBuZXdTdGF0ZTtcbiAgICAgICAgfSxcbiAgICAgICAgaXNNb3VudGVkOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9LFxuICAgIH1cbn1cblxuaGFydmVzdC5oYXJ2ZXN0ID0gaGFydmVzdDtcbnJldHVybiBoYXJ2ZXN0O1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAvaG9tZS9jbGVvbmcvcmVsYWtzLWhhcnZlc3QvZnVuY3Rpb24uanMiLCJmdW5jdGlvbiBNZWFud2hpbGUoY29tcG9uZW50LCBwcmV2aW91c2x5KSB7XG4gICAgdmFyIHJlbGFrcyA9IGNvbXBvbmVudC5yZWxha3M7XG4gICAgdGhpcy5jb21wb25lbnQgPSBjb21wb25lbnQ7XG4gICAgdGhpcy5zeW5jaHJvbm91cyA9IGZhbHNlO1xuICAgIHRoaXMuc2hvd2luZ1Byb2dyZXNzID0gZmFsc2U7XG4gICAgdGhpcy5zaG93aW5nUHJvZ3Jlc3NJbml0aWFsbHkgPSBmYWxzZTtcbiAgICB0aGlzLmRlbGF5V2hlbkVtcHR5ID0gSW5maW5pdHk7XG4gICAgdGhpcy5kZWxheVdoZW5SZW5kZXJlZCA9IEluZmluaXR5O1xuICAgIHRoaXMuY2FuY2VsZWQgPSBmYWxzZTtcbiAgICB0aGlzLnByaW9yID0gcmVsYWtzLnByZXZpb3VzO1xuICAgIHRoaXMucHJldmlvdXMgPSByZWxha3MucHJldmlvdXM7XG4gICAgdGhpcy5jdXJyZW50ID0gcmVsYWtzLmN1cnJlbnQ7XG4gICAgdGhpcy51cGRhdGVUaW1lb3V0ID0gMDtcbiAgICB0aGlzLnN0YXJ0VGltZSA9IGdldFRpbWUoKTtcbiAgICB0aGlzLm9uQ2FuY2VsID0gbnVsbDtcbiAgICB0aGlzLm9uQ29tcGxldGUgPSBudWxsO1xuICAgIHRoaXMub25Qcm9ncmVzcyA9IG51bGw7XG59XG5cbnZhciBwcm90b3R5cGUgPSBNZWFud2hpbGUucHJvdG90eXBlO1xuXG5wcm90b3R5cGUuY2hlY2sgPSBmdW5jdGlvbigpIHtcbn1cblxucHJvdG90eXBlLnNob3cgPSBmdW5jdGlvbihlbGVtZW50LCBkaXNwb3NpdGlvbikge1xuICAgIHJldHVybiBmYWxzZTtcbn07XG5cbnByb3RvdHlwZS5yZXZpc2luZyA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBmYWxzZTtcbn07XG5cbnByb3RvdHlwZS5kZWxheSA9IGZ1bmN0aW9uKGVtcHR5LCByZW5kZXJlZCkge1xufTtcblxucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uKGZvcmNlZCkge1xufTtcblxucHJvdG90eXBlLmNhbmNlbCA9IGZ1bmN0aW9uKCkge1xufTtcblxucHJvdG90eXBlLmZpbmlzaCA9IGZ1bmN0aW9uKCkge1xufTtcblxucHJvdG90eXBlLmNsZWFyID0gZnVuY3Rpb24oKSB7XG59O1xuXG52YXIgc2NyaXB0U3RhcnRUaW1lID0gbmV3IERhdGU7XG5cbi8qKlxuICogUmV0dXJuIHRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIHBhc3NlZCBzaW5jZSBzdGFydCBvZiB0aGlzIHNjcmlwdFxuICpcbiAqIEByZXR1cm4ge051bWJlcn1cbiAqL1xuZnVuY3Rpb24gZ2V0VGltZSgpIHtcbiAgICByZXR1cm4gKG5ldyBEYXRlKSAtIHNjcmlwdFN0YXJ0VGltZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBwcm90b3R5cGUuY29uc3RydWN0b3I7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gL2hvbWUvY2xlb25nL3JlbGFrcy1oYXJ2ZXN0L21lYW53aGlsZS5qcyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9mdW5jdGlvbicpKHJlcXVpcmUoJ3ByZWFjdCcpKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAvaG9tZS9jbGVvbmcvcmVsYWtzLWhhcnZlc3QvcHJlYWN0LmpzIiwidmFyIFNTUiA9ICh0eXBlb2Ygd2luZG93ICE9PSAnb2JqZWN0Jyk7XG52YXIgZGVmYXVsdE9wdGlvbnMgPSB7XG4gICAgdXNlSGFzaEZhbGxiYWNrOiBmYWxzZSxcbiAgICB0cmFja0xpbmtzOiAoU1NSKSA/IGZhbHNlIDogdHJ1ZSxcbiAgICB0cmFja0xvY2F0aW9uOiAoU1NSKSA/IGZhbHNlIDogdHJ1ZSxcbiAgICBiYXNlUGF0aDogJycsXG4gICAgaW5pdGlhbFBhdGg6ICcvJyxcbn07XG5cbmZ1bmN0aW9uIFJlbGFrc1JvdXRlTWFuYWdlcihvcHRpb25zKSB7XG4gICAgdGhpcy51cmwgPSAnJztcbiAgICB0aGlzLm5hbWUgPSAnJztcbiAgICB0aGlzLnBhcmFtcyA9ICcnO1xuICAgIHRoaXMuY29udGV4dCA9ICcnO1xuICAgIHRoaXMucm91dGVzID0ge307XG4gICAgdGhpcy5oaXN0b3J5ID0gW107XG4gICAgdGhpcy5zdGFydFRpbWUgPSBnZXRUaW1lKCk7XG4gICAgdGhpcy5saXN0ZW5lcnMgPSBbXTtcbiAgICB0aGlzLm9wdGlvbnMgPSB7fTtcbiAgICB0aGlzLnJld3JpdGVzID0gW107XG4gICAgZm9yICh2YXIgbmFtZSBpbiBkZWZhdWx0T3B0aW9ucykge1xuICAgICAgICBpZiAob3B0aW9ucyAmJiBvcHRpb25zW25hbWVdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMub3B0aW9uc1tuYW1lXSA9IG9wdGlvbnNbbmFtZV07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLm9wdGlvbnNbbmFtZV0gPSBkZWZhdWx0T3B0aW9uc1tuYW1lXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAob3B0aW9ucyAmJiBvcHRpb25zLnJvdXRlcykge1xuICAgICAgICB0aGlzLmFkZFJvdXRlcyhvcHRpb25zLnJvdXRlcyk7XG4gICAgfVxuICAgIGlmIChvcHRpb25zICYmIG9wdGlvbnMucmV3cml0ZXMpIHtcbiAgICAgICAgdGhpcy5hZGRSZXdyaXRlcyhvcHRpb25zLnJld3JpdGVzKTtcbiAgICB9XG5cbiAgICB0aGlzLmhhbmRsZUxpbmtDbGljayA9IHRoaXMuaGFuZGxlTGlua0NsaWNrLmJpbmQodGhpcyk7XG4gICAgdGhpcy5oYW5kbGVQb3BTdGF0ZSA9IHRoaXMuaGFuZGxlUG9wU3RhdGUuYmluZCh0aGlzKTtcbn1cblxudmFyIHByb3RvdHlwZSA9IFJlbGFrc1JvdXRlTWFuYWdlci5wcm90b3R5cGU7XG5cbnByb3RvdHlwZS5pbml0aWFsaXplID0gZnVuY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMub3B0aW9ucy50cmFja0xpbmtzKSB7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuaGFuZGxlTGlua0NsaWNrKTtcbiAgICB9XG4gICAgdmFyIHVybDtcbiAgICBpZiAodGhpcy5vcHRpb25zLnRyYWNrTG9jYXRpb24pIHtcbiAgICAgICAgdXJsID0gdGhpcy5nZXRMb2NhdGlvblVSTCh3aW5kb3cubG9jYXRpb24pO1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCB0aGlzLmhhbmRsZVBvcFN0YXRlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB1cmwgPSB0aGlzLm9wdGlvbnMuaW5pdGlhbFBhdGg7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmNoYW5nZSh1cmwsIHsgcmVwbGFjZTogdHJ1ZSB9KTtcbn07XG5cbnByb3RvdHlwZS5zaHV0ZG93biA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBvcHQgPSB0aGlzLm9wdGlvbnM7XG4gICAgaWYgKG9wdC50cmFja0xpbmtzKSB7XG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuaGFuZGxlTGlua0NsaWNrKTtcbiAgICB9XG4gICAgaWYgKG9wdC50cmFja0xvY2F0aW9uKSB7XG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsIHRoaXMuaGFuZGxlUG9wU3RhdGUpO1xuICAgIH1cbn07XG5cbnByb3RvdHlwZS5hZGRFdmVudExpc3RlbmVyID0gZnVuY3Rpb24odHlwZSwgaGFuZGxlcikge1xuICAgIHRoaXMubGlzdGVuZXJzLnB1c2goeyAgdHlwZTogdHlwZSwgIGhhbmRsZXI6IGhhbmRsZXIgfSk7XG59O1xuXG5wcm90b3R5cGUucmVtb3ZlRXZlbnRMaXN0ZW5lciA9IGZ1bmN0aW9uKHR5cGUsIGhhbmRsZXIpIHtcbiAgICB0aGlzLmxpc3RlbmVycyA9IHRoaXMubGlzdGVuZXJzLmZpbHRlcihmdW5jdGlvbihsaXN0ZW5lcikge1xuICAgICAgICByZXR1cm4gIShsaXN0ZW5lci50eXBlID09PSB0eXBlICYmIGxpc3RlbmVyLmhhbmRsZXIgPT09IGhhbmRsZXIpO1xuICAgIH0pXG59O1xuXG5wcm90b3R5cGUudHJpZ2dlckV2ZW50ID0gZnVuY3Rpb24oZXZ0KSB7XG4gICAgdmFyIGZpcmVkID0gZmFsc2U7XG4gICAgdGhpcy5saXN0ZW5lcnMuZm9yRWFjaChmdW5jdGlvbihsaXN0ZW5lcikge1xuICAgICAgICBpZiAobGlzdGVuZXIudHlwZSA9PT0gZXZ0LnR5cGUgJiYgbGlzdGVuZXIuaGFuZGxlcikge1xuICAgICAgICAgICAgZmlyZWQgPSB0cnVlO1xuICAgICAgICAgICAgbGlzdGVuZXIuaGFuZGxlcihldnQpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGZpcmVkO1xufTtcblxucHJvdG90eXBlLmFkZFJvdXRlcyA9IGZ1bmN0aW9uKHJvdXRlcykge1xuICAgIGZvciAodmFyIG5hbWUgaW4gcm91dGVzKSB7XG4gICAgICAgIGlmIChyb3V0ZXNbbmFtZV0gIT09IHRoaXMucm91dGVzW25hbWVdKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5yb3V0ZXNbbmFtZV0pIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0R1cGxpY2F0ZSByb3V0ZTogJyArIG5hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5yb3V0ZXNbbmFtZV0gPSByb3V0ZXNbbmFtZV07XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG5wcm90b3R5cGUucmVtb3ZlUm91dGVzID0gZnVuY3Rpb24ocm91dGVzKSB7XG4gICAgZm9yICh2YXIgbmFtZSBpbiByb3V0ZXMpIHtcbiAgICAgICAgaWYgKHJvdXRlc1tuYW1lXSA9PT0gdGhpcy5yb3V0ZXNbbmFtZV0pIHtcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLnJvdXRlc1tuYW1lXTtcbiAgICAgICAgfVxuICAgIH1cbn07XG5cbnByb3RvdHlwZS5hZGRSZXdyaXRlcyA9IGZ1bmN0aW9uKHJld3JpdGVzKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcbiAgICByZXdyaXRlcy5mb3JFYWNoKGZ1bmN0aW9uKHJld3JpdGUpIHtcbiAgICAgICAgX3RoaXMucmV3cml0ZXMucHVzaChyZXdyaXRlKTtcbiAgICB9KTtcbn07XG5cbnByb3RvdHlwZS5yZW1vdmVSZXdyaXRlcyA9IGZ1bmN0aW9uKHJld3JpdGVzKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcbiAgICByZXdyaXRlcy5mb3JFYWNoKGZ1bmN0aW9uKHJld3JpdGUpIHtcbiAgICAgICAgdmFyIGluZGV4ID0gX3RoaXMucmV3cml0ZXMuaW5kZXhPZihyZXdyaXRlKTtcbiAgICAgICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgICAgICAgX3RoaXMucmV3cml0ZXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgfVxuICAgIH0pO1xufTtcblxuLyoqXG4gKiBDaGFuZ2UgdGhlIHJvdXRlIHRvIHdoYXQgdGhlIGdpdmVuIFVSTCBwb2ludHMgdG9cbiAqXG4gKiBAcGFyYW0gIHtTdHJpbmd9IHVybFxuICogQHBhcmFtICB7T2JqZWN0fHVuZGVmaW5lZH0gb3B0aW9uc1xuICpcbiAqIEByZXR1cm4ge1Byb21pc2U8Qm9vbGVhbj59XG4gKi9cbnByb3RvdHlwZS5jaGFuZ2UgPSBmdW5jdGlvbih1cmwsIG9wdGlvbnMpIHtcbiAgICB2YXIgbWF0Y2ggPSB0aGlzLm1hdGNoKHVybCk7XG4gICAgaWYgKG1hdGNoKSB7XG4gICAgICAgIHZhciByZXBsYWNlID0gKG9wdGlvbnMpID8gb3B0aW9ucy5yZXBsYWNlIHx8IGZhbHNlIDogZmFsc2U7XG4gICAgICAgIHZhciB0aW1lID0gZ2V0VGltZSgpO1xuICAgICAgICByZXR1cm4gdGhpcy5hcHBseShtYXRjaCwgdGltZSwgdHJ1ZSwgcmVwbGFjZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIGVyciA9IG5ldyBFcnJvcignTm8gcm91dGUnKTtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycik7XG4gICAgfVxufTtcblxuLyoqXG4gKiBDaGFuZ2UgdGhlIHJvdXRlIHRvIHRoZSBvbmUgZ2l2ZW4sIGFkZGluZyB0byBoaXN0b3J5XG4gKlxuICogQHBhcmFtICB7U3RyaW5nfSBuYW1lXG4gKiBAcGFyYW0gIHtPYmplY3R9IHBhcmFtc1xuICpcbiAqIEByZXR1cm4ge1Byb21pc2V9XG4gKi9cbnByb3RvdHlwZS5wdXNoID0gZnVuY3Rpb24obmFtZSwgcGFyYW1zKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgdmFyIHVybCA9IHRoaXMuZmluZChuYW1lLCBwYXJhbXMpO1xuICAgICAgICByZXR1cm4gdGhpcy5jaGFuZ2UodXJsKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycik7XG4gICAgfVxufTtcblxuLyoqXG4gKiBSZXBsYWNlIHRoZSBjdXJyZW50IHJvdXRlIHdpdGggdGhlIG9uZSBnaXZlblxuICpcbiAqIEBwYXJhbSAge1N0cmluZ30gbmFtZVxuICogQHBhcmFtICB7T2JqZWN0fSBwYXJhbXNcbiAqXG4gKiBAcmV0dXJuIHtQcm9taXNlfVxuICovXG5wcm90b3R5cGUucmVwbGFjZSA9IGZ1bmN0aW9uKG5hbWUsIHBhcmFtcykge1xuICAgIHRyeSB7XG4gICAgICAgIHZhciB1cmwgPSB0aGlzLmZpbmQobmFtZSwgcGFyYW1zKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2hhbmdlKHVybCwgeyByZXBsYWNlOiB0cnVlIH0pO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyKTtcbiAgICB9XG59O1xuXG4vKipcbiAqIEdldCBhIFVSTCBmb3IgYSByb3V0ZSBmb3IgdGhlIHBhcmFtZXRlcnMgZ2l2ZW5cbiAqXG4gKiBAcGFyYW0gIHtTdHJpbmd9IG5hbWVcbiAqIEBwYXJhbSAge09iamVjdH0gcGFyYW1zXG4gKiBAcGFyYW0gIHtPYmplY3R8dW5kZWZpbmVkfSBuZXdDb250ZXh0XG4gKlxuICogQHJldHVybiB7U3RyaW5nfVxuICovXG5wcm90b3R5cGUuZmluZCA9IGZ1bmN0aW9uKG5hbWUsIHBhcmFtcywgbmV3Q29udGV4dCkge1xuICAgIHZhciB1cmxQYXJ0cyA9IHRoaXMuZmlsbChuYW1lLCBwYXJhbXMpO1xuICAgIHZhciBjb250ZXh0ID0gdGhpcy5jb250ZXh0O1xuICAgIGlmIChuZXdDb250ZXh0KSB7XG4gICAgICAgIGNvbnRleHQgPSB7fTtcbiAgICAgICAgZm9yICh2YXIgbmFtZSBpbiB0aGlzLmNvbnRleHQpIHtcbiAgICAgICAgICAgIGNvbnRleHRbbmFtZV0gPSB0aGlzLmNvbnRleHRbbmFtZV07XG4gICAgICAgIH1cbiAgICAgICAgZm9yICh2YXIgbmFtZSBpbiBuZXdDb250ZXh0KSB7XG4gICAgICAgICAgICBjb250ZXh0W25hbWVdID0gbmV3Q29udGV4dFtuYW1lXTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnRleHQgPSB0aGlzLmNvbnRleHQ7XG4gICAgfVxuICAgIHRoaXMucmViYXNlKCd0bycsIHVybFBhcnRzKTtcbiAgICB0aGlzLnJld3JpdGUoJ3RvJywgdXJsUGFydHMsIGNvbnRleHQpO1xuICAgIHZhciB1cmwgPSBjb21wb3NlVVJMKHVybFBhcnRzKTtcbiAgICBpZiAodGhpcy5vcHRpb25zLnVzZUhhc2hGYWxsYmFjaykge1xuICAgICAgICB1cmwgPSAnIycgKyB1cmw7XG4gICAgfVxuICAgIHJldHVybiB1cmw7XG59O1xuXG4vKipcbiAqIEdvIGJhY2sgdG8gdGhlIHByZXZpb3VzIHJvdXRlIChpZiBwb3NzaWJsZSlcbiAqXG4gKiBAcmV0dXJuIHtQcm9taXNlfVxuICovXG5wcm90b3R5cGUuYmFjayA9IGZ1bmN0aW9uKCkge1xuICAgIGlmICh0aGlzLmhpc3RvcnkubGVuZ3RoIDw9IDEpIHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcignQ2Fubm90IGdvIGJleW9uZCBzdGFydGluZyBwYWdlJykpO1xuICAgIH1cbiAgICBpZiAodGhpcy5vcHRpb25zLnRyYWNrTG9jYXRpb24pIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgX3RoaXMuYmFja1Jlc29sdmUgPSByZXNvbHZlO1xuICAgICAgICAgICAgX3RoaXMuYmFja1JlamVjdCA9IHJlamVjdDtcbiAgICAgICAgICAgIHdpbmRvdy5oaXN0b3J5LmJhY2soKTtcblxuICAgICAgICAgICAgLy8ganVzdCBpbiBjYXNlIHRoZSBvcGVyYXRpb24gZmFpbHMgZm9yIHNvbWUgcmVhc29uXG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHZhciByZWplY3QgPSBfdGhpcy5iYWNrUmVqZWN0O1xuICAgICAgICAgICAgICAgIGlmIChyZWplY3QpIHtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuYmFja1Jlc29sdmUgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLmJhY2tSZWplY3QgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoJ1VuYWJsZSB0byBuYXZpZ2F0ZSB0byBwcmV2aW91cyBwYWdlJykpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIDUwKTtcbiAgICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIHByZXZpb3VzID0gdGhpcy5oaXN0b3J5W3RoaXMuaGlzdG9yeS5sZW5ndGggLSAyXTtcbiAgICAgICAgcmV0dXJuIHRoaXMuYXBwbHkocHJldmlvdXMsIHByZXZpb3VzLnRpbWUsIGZhbHNlLCBmYWxzZSk7XG4gICAgfVxufTtcblxuLyoqXG4gKiBNYXRjaCBhIFVSTCB3aXRoIGEgcm91dGVcbiAqXG4gKiBAcGFyYW0gIHtTdHJpbmd9IHVybFxuICpcbiAqIEByZXR1cm4ge09iamVjdHxudWxsfVxuICovXG5wcm90b3R5cGUubWF0Y2ggPSBmdW5jdGlvbih1cmwpIHtcbiAgICAvLyBwZXJmb3JtIHJld3JpdGVzXG4gICAgdmFyIHVybFBhcnRzID0gcGFyc2VVUkwodXJsKTtcbiAgICB2YXIgY29udGV4dCA9IHt9O1xuICAgIHRoaXMucmV3cml0ZSgnZnJvbScsIHVybFBhcnRzLCBjb250ZXh0KTtcblxuICAgIC8vIHJlbW92ZSBiYXNlIHBhdGhcbiAgICBpZiAoIXRoaXMucmViYXNlKCdmcm9tJywgdXJsUGFydHMpKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIC8vIGxvb2sgZm9yIG1hdGNoaW5nIHJvdXRlXG4gICAgdmFyIHBhcmFtcyA9IHt9O1xuICAgIHZhciByb3V0ZXMgPSB0aGlzLnJvdXRlcztcbiAgICBmb3IgKHZhciBuYW1lIGluIHJvdXRlcykge1xuICAgICAgICB2YXIgcm91dGVEZWYgPSByb3V0ZXNbbmFtZV07XG4gICAgICAgIHZhciB0eXBlcyA9IHJvdXRlRGVmLnBhcmFtcztcbiAgICAgICAgLy8gaWYgdGhlIHBhdGggbWF0Y2hlcywgdGhlbiBpdCdzIGEgbWF0Y2hcbiAgICAgICAgLy8gcXVlcnkgYW5kIGhhc2ggdmFyaWFibGVzIGFyZSB0cmVhdGVkIGFzIG9wdGlvbnNcbiAgICAgICAgaWYgKG1hdGNoVGVtcGxhdGUodXJsUGFydHMucGF0aCwgcm91dGVEZWYucGF0aCwgdHlwZXMsIHBhcmFtcywgdHJ1ZSkpIHtcbiAgICAgICAgICAgIGZvciAodmFyIHF1ZXJ5VmFyTmFtZSBpbiByb3V0ZURlZi5xdWVyeSkge1xuICAgICAgICAgICAgICAgIHZhciBxdWVyeVZhclRlbXBsYXRlID0gcm91dGVEZWYucXVlcnlbcXVlcnlWYXJOYW1lXTtcbiAgICAgICAgICAgICAgICB2YXIgcXVlcnlWYXJWYWx1ZSA9IHVybFBhcnRzLnF1ZXJ5W3F1ZXJ5VmFyTmFtZV07XG4gICAgICAgICAgICAgICAgbWF0Y2hUZW1wbGF0ZShxdWVyeVZhclZhbHVlLCBxdWVyeVZhclRlbXBsYXRlLCB0eXBlcywgcGFyYW1zKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG1hdGNoVGVtcGxhdGUodXJsUGFydHMuaGFzaCwgcm91dGVEZWYuaGFzaCwgdHlwZXMsIHBhcmFtcyk7XG4gICAgICAgICAgICByZXR1cm4geyB1cmw6IHVybCwgbmFtZTogbmFtZSwgcGFyYW1zOiBwYXJhbXMsIGNvbnRleHQ6IGNvbnRleHQgfTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbn07XG5cbi8qKlxuICogTG9hZCBuZWNlc3NhcnkgbW9kdWxlKHMpIGZvciBhIHJvdXRlLCBhcHBlbmQgdG8gaGlzdG9yeSwgc2V0IHRoZSBzdGF0ZSxcbiAqIGFuZCB0cmlnZ2VyIGNoYW5nZSBldmVudFxuICpcbiAqIEBwYXJhbSAge09iamVjdH0gbWF0Y2hcbiAqIEBwYXJhbSAge1N0cmluZ30gdGltZVxuICogQHBhcmFtICB7Qm9vbGVhbn0gc3luY1xuICogQHBhcmFtICB7Qm9vbGVhbn0gcmVwbGFjZVxuICpcbiAqIEByZXR1cm4ge1Byb21pc2U8Qm9vbGVhbj59XG4gKi9cbnByb3RvdHlwZS5hcHBseSA9IGZ1bmN0aW9uKG1hdGNoLCB0aW1lLCBzeW5jLCByZXBsYWNlKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcbiAgICB2YXIgY29uZmlybWF0aW9uRXZlbnQgPSBuZXcgUmVsYWtzUm91dGVNYW5hZ2VyRXZlbnQoJ2JlZm9yZWNoYW5nZScsIHRoaXMsIG1hdGNoKTtcbiAgICB0aGlzLnRyaWdnZXJFdmVudChjb25maXJtYXRpb25FdmVudCk7XG4gICAgcmV0dXJuIGNvbmZpcm1hdGlvbkV2ZW50LndhaXRGb3JEZWNpc2lvbigpLnRoZW4oZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmIChjb25maXJtYXRpb25FdmVudC5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIF90aGlzLmxvYWQobWF0Y2gpLnRoZW4oZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBpZiAodGltZSA+PSBfdGhpcy5zdGFydFRpbWUpIHtcbiAgICAgICAgICAgICAgICBpZiAoIXJlcGxhY2UpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gc2VlIGlmIHdlJ3JlIGdvaW5nIGJhY2t3YXJkXG4gICAgICAgICAgICAgICAgICAgIHZhciBpbmRleCA9IC0xO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IF90aGlzLmhpc3RvcnkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChfdGhpcy5oaXN0b3J5W2ldLnRpbWUgPT09IHRpbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleCA9IGk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gcmVtb3ZlIGVudHJ5IGFuZCB0aG9zZSBhZnRlciBpdFxuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuaGlzdG9yeS5zcGxpY2UoaW5kZXgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBnb2luZyBpbnRvIGhpc3RvcnkgcHJpb3IgdG8gcGFnZSBsb2FkXG4gICAgICAgICAgICAgICAgLy8gcmVtZW1iZXIgdGhlIHRpbWUgZm9yd2FyZCBtb3ZlbWVudCBmcm9tIGRlZXAgaW50byB0aGUgcGFzdFxuICAgICAgICAgICAgICAgIC8vIHdvcmtzIGNvcnJlY3RseVxuICAgICAgICAgICAgICAgIF90aGlzLmhpc3RvcnkgPSBbXTtcbiAgICAgICAgICAgICAgICBfdGhpcy5zdGFydFRpbWUgPSB0aW1lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIGVudHJ5ID0gIHtcbiAgICAgICAgICAgICAgICB1cmw6IG1hdGNoLnVybCxcbiAgICAgICAgICAgICAgICBuYW1lOiBtYXRjaC5uYW1lLFxuICAgICAgICAgICAgICAgIHBhcmFtczogbWF0Y2gucGFyYW1zLFxuICAgICAgICAgICAgICAgIGNvbnRleHQ6IG1hdGNoLmNvbnRleHQsXG4gICAgICAgICAgICAgICAgdGltZTogdGltZVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGlmIChyZXBsYWNlICYmIF90aGlzLmhpc3RvcnkubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIF90aGlzLmhpc3RvcnlbX3RoaXMuaGlzdG9yeS5sZW5ndGggLSAxXSA9IGVudHJ5O1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5oaXN0b3J5LnB1c2goZW50cnkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHN5bmMpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5zZXRMb2NhdGlvblVSTChtYXRjaC51cmwsIHsgdGltZTogdGltZSB9LCByZXBsYWNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF90aGlzLnVybCA9IG1hdGNoLnVybDtcbiAgICAgICAgICAgIF90aGlzLm5hbWUgPSBtYXRjaC5uYW1lO1xuICAgICAgICAgICAgX3RoaXMucGFyYW1zID0gbWF0Y2gucGFyYW1zO1xuICAgICAgICAgICAgX3RoaXMuY29udGV4dCA9IG1hdGNoLmNvbnRleHQ7XG5cbiAgICAgICAgICAgIF90aGlzLnRyaWdnZXJFdmVudChuZXcgUmVsYWtzUm91dGVNYW5hZ2VyRXZlbnQoJ2NoYW5nZScsIF90aGlzKSk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xufTtcblxuLyoqXG4gKiBGaWxsIGEgcm91dGUgdGVtcGxhdGVzIHdpdGggcGFyYW1ldGVyc1xuICpcbiAqIEBwYXJhbSAge1N0cmluZ30gbmFtZVxuICogQHBhcmFtICB7T2JqZWN0fSBwYXJhbXNcbiAqXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKi9cbnByb3RvdHlwZS5maWxsID0gZnVuY3Rpb24obmFtZSwgcGFyYW1zKSB7XG4gICAgdmFyIHJvdXRlRGVmID0gdGhpcy5yb3V0ZXNbbmFtZV07XG4gICAgaWYgKCFyb3V0ZURlZikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ05vIHJvdXRlIGJ5IHRoYXQgbmFtZTogJyArIG5hbWUpO1xuICAgIH1cbiAgICB2YXIgdHlwZXMgPSByb3V0ZURlZi5wYXJhbXM7XG4gICAgdmFyIHBhdGggPSBmaWxsVGVtcGxhdGUocm91dGVEZWYucGF0aCwgdHlwZXMsIHBhcmFtcywgdHJ1ZSk7XG4gICAgdmFyIGhhc2ggPSBmaWxsVGVtcGxhdGUocm91dGVEZWYuaGFzaCwgdHlwZXMsIHBhcmFtcyk7XG4gICAgdmFyIHF1ZXJ5ID0ge307XG4gICAgZm9yICh2YXIgcXVlcnlWYXJOYW1lIGluIHJvdXRlRGVmLnF1ZXJ5KSB7XG4gICAgICAgIHZhciBxdWVyeVZhclRlbXBsYXRlID0gcm91dGVEZWYucXVlcnlbcXVlcnlWYXJOYW1lXTtcbiAgICAgICAgdmFyIHF1ZXJ5VmFyVmFsdWUgPSBmaWxsVGVtcGxhdGUocXVlcnlWYXJUZW1wbGF0ZSwgdHlwZXMsIHBhcmFtcyk7XG4gICAgICAgIGlmIChxdWVyeVZhclZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHF1ZXJ5W3F1ZXJ5VmFyTmFtZV0gPSBxdWVyeVZhclZhbHVlO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7IHBhdGg6IHBhdGgsIGhhc2g6IGhhc2gsIHF1ZXJ5OiBxdWVyeSB9O1xufTtcblxuLyoqXG4gKiBBcHBseSByZXdyaXRlcyBvbiBVUkwgcGFydHNcbiAqXG4gKiBAcGFyYW0gIHtTdHJpbmd9IGRpcmVjdGlvblxuICogQHBhcmFtICB7T2JqZWN0fSB1cmxQYXJ0c1xuICogQHBhcmFtICB7T2JqZWN0fSBjb250ZXh0XG4gKi9cbnByb3RvdHlwZS5yZXdyaXRlID0gZnVuY3Rpb24oZGlyZWN0aW9uLCB1cmxQYXJ0cywgY29udGV4dCkge1xuICAgIGlmIChkaXJlY3Rpb24gPT09ICdmcm9tJykge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMucmV3cml0ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBmcm9tID0gdGhpcy5yZXdyaXRlc1tpXS5mcm9tO1xuICAgICAgICAgICAgaWYgKGZyb20pIHtcbiAgICAgICAgICAgICAgICBpZiAoZnJvbSh1cmxQYXJ0cywgY29udGV4dCkgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0gZWxzZSBpZiAoZGlyZWN0aW9uID09PSAndG8nKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSB0aGlzLnJld3JpdGVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgICB2YXIgdG8gPSB0aGlzLnJld3JpdGVzW2ldLnRvO1xuICAgICAgICAgICAgaWYgKHRvKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRvKHVybFBhcnRzLCBjb250ZXh0KSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufTtcblxuLyoqXG4gKiBBZGQgb3IgcmVtb3ZlIGJhc2VQYXRoIGZyb20gYSBVUkwncyBwYXRoIHBhcnQuIFJldHVybiBmYWxzZSBpZiBpdCBjYW4ndCBiZSBkb25lLlxuICpcbiAqIEBwYXJhbSAge1N0cmluZ30gZGlyZWN0aW9uXG4gKiBAcGFyYW0gIHtPYmplY3R9IHVybFBhcnRzXG4gKlxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqL1xucHJvdG90eXBlLnJlYmFzZSA9IGZ1bmN0aW9uKGRpcmVjdGlvbiwgdXJsUGFydHMpIHtcbiAgICB2YXIgYmFzZVBhdGggPSB0aGlzLm9wdGlvbnMuYmFzZVBhdGg7XG4gICAgaWYgKGRpcmVjdGlvbiA9PT0gJ2Zyb20nKSB7XG4gICAgICAgIHZhciBuZXdQYXRoID0gZ2V0UmVsYXRpdmVQYXRoKGJhc2VQYXRoLCB1cmxQYXJ0cy5wYXRoKTtcbiAgICAgICAgaWYgKG5ld1BhdGgpIHtcbiAgICAgICAgICAgIHVybFBhcnRzLnBhdGggPSBuZXdQYXRoO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGRpcmVjdGlvbiA9PT0gJ3RvJykge1xuICAgICAgICBpZiAoYmFzZVBhdGgpIHtcbiAgICAgICAgICAgIHVybFBhcnRzLnBhdGggPSBiYXNlUGF0aCArIHVybFBhcnRzLnBhdGg7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbn07XG5cbnByb3RvdHlwZS5sb2FkID0gZnVuY3Rpb24obWF0Y2gpIHtcbiAgICB0cnkge1xuICAgICAgICB2YXIgcmVzdWx0O1xuICAgICAgICB2YXIgcm91dGVEZWYgPSB0aGlzLnJvdXRlc1ttYXRjaC5uYW1lXTtcbiAgICAgICAgaWYgKHJvdXRlRGVmICYmIHJvdXRlRGVmLmxvYWQpIHtcbiAgICAgICAgICAgIHJlc3VsdCA9IHJvdXRlRGVmLmxvYWQobWF0Y2gucGFyYW1zLCBtYXRjaC5jb250ZXh0KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHJlc3VsdCk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnIpO1xuICAgIH1cbn07XG5cbi8qKlxuICogUmV0dXJuIGEgcmVsYXRpdmUgVVJMIG9yIGVtcHR5IHN0cmluZyAoaWYgbGluayBpcyBwb2ludGluZyB0byBhbiBleHRlcm5hbCBwYWdlKVxuICpcbiAqIEBwYXJhbSAge0xvY2F0aW9ufEhUTUxBbmNob3JFbGVtZW50fSBsb2NhdGlvblxuICpcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqL1xucHJvdG90eXBlLmdldExvY2F0aW9uVVJMID0gZnVuY3Rpb24obG9jYXRpb24pIHtcbiAgICB2YXIgZG9jTG9jYXRpb24gPSB3aW5kb3cubG9jYXRpb247XG4gICAgaWYgKGxvY2F0aW9uICE9PSBkb2NMb2NhdGlvbikge1xuICAgICAgICBpZiAobG9jYXRpb24ucHJvdG9jb2wgIT09IGRvY0xvY2F0aW9uLnByb3RvY29sKSB7XG4gICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgIH0gZWxzZSBpZiAobG9jYXRpb24uaG9zdCAhPT0gZG9jTG9jYXRpb24uaG9zdCkge1xuICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMudXNlSGFzaEZhbGxiYWNrKSB7XG4gICAgICAgICAgICBpZiAobG9jYXRpb24ucGF0aG5hbWUgIT09IGRvY0xvY2F0aW9uLnBhdGhuYW1lKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGxvY2F0aW9uLnNlYXJjaCAhPT0gZG9jTG9jYXRpb24uc2VhcmNoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGlmICh0aGlzLm9wdGlvbnMudXNlSGFzaEZhbGxiYWNrKSB7XG4gICAgICAgIHZhciBwYXRoID0gbG9jYXRpb24uaGFzaC5zdWJzdHIoMSk7XG4gICAgICAgIHJldHVybiBwYXRoIHx8ICcvJztcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gbG9jYXRpb24ucGF0aG5hbWUgKyBsb2NhdGlvbi5zZWFyY2ggKyBsb2NhdGlvbi5oYXNoO1xuICAgIH1cbn07XG5cbnByb3RvdHlwZS5zZXRMb2NhdGlvblVSTCA9IGZ1bmN0aW9uKHVybCwgc3RhdGUsIHJlcGxhY2UpIHtcbiAgICBpZiAodGhpcy5vcHRpb25zLnRyYWNrTG9jYXRpb24pIHtcbiAgICAgICAgdmFyIGN1cnJlbnRVUkwgPSB0aGlzLmdldExvY2F0aW9uVVJMKGxvY2F0aW9uKTtcbiAgICAgICAgaWYgKGN1cnJlbnRVUkwgIT09IHVybCkge1xuICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy51c2VIYXNoRmFsbGJhY2spIHtcbiAgICAgICAgICAgICAgICB1cmwgPSAnIycgKyB1cmw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocmVwbGFjZSkge1xuICAgICAgICAgICAgICAgIHdpbmRvdy5oaXN0b3J5LnJlcGxhY2VTdGF0ZShzdGF0ZSwgJycsIHVybCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZShzdGF0ZSwgJycsIHVybCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG4vKipcbiAqIENhbGxlZCB3aGVuIHRoZSB1c2VyIGNsaWNrcyBvbiB0aGUgcGFnZVxuICpcbiAqIEBwYXJhbSAge0V2ZW50fSBldnRcbiAqL1xucHJvdG90eXBlLmhhbmRsZUxpbmtDbGljayA9IGZ1bmN0aW9uKGV2dCkge1xuICAgIGlmIChldnQuYnV0dG9uID09PSAwKSB7XG4gICAgICAgIHZhciBsaW5rID0gZ2V0TGluayhldnQudGFyZ2V0KTtcbiAgICAgICAgaWYgKGxpbmsgJiYgIWxpbmsudGFyZ2V0ICYmICFsaW5rLmRvd25sb2FkKSB7XG4gICAgICAgICAgICB2YXIgdXJsID0gdGhpcy5nZXRMb2NhdGlvblVSTChsaW5rKTtcbiAgICAgICAgICAgIGlmICh1cmwpIHtcbiAgICAgICAgICAgICAgICB2YXIgbWF0Y2ggPSB0aGlzLm1hdGNoKHVybCk7XG4gICAgICAgICAgICAgICAgaWYgKG1hdGNoKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciB0aW1lID0gZ2V0VGltZSgpO1xuICAgICAgICAgICAgICAgICAgICBldnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgZXZ0LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmFwcGx5KG1hdGNoLCB0aW1lLCB0cnVlLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufTtcblxuLyoqXG4gKiBDYWxsZWQgd2hlbiB0aGUgdXNlciBwcmVzcyB0aGUgYmFjayBidXR0b25cbiAqXG4gKiBAcGFyYW0gIHtFdmVudH0gZXZ0XG4gKi9cbnByb3RvdHlwZS5oYW5kbGVQb3BTdGF0ZSA9IGZ1bmN0aW9uKGV2dCkge1xuICAgIHZhciB0aW1lID0gKGV2dC5zdGF0ZSkgPyBldnQuc3RhdGUudGltZSA6IGdldFRpbWUoKTtcbiAgICB2YXIgdXJsID0gdGhpcy5nZXRMb2NhdGlvblVSTCh3aW5kb3cubG9jYXRpb24pO1xuICAgIHZhciBtYXRjaCA9IHRoaXMubWF0Y2godXJsKTtcbiAgICB2YXIgcHJvbWlzZSA9IHRoaXMuYXBwbHkobWF0Y2gsIHRpbWUsIGZhbHNlLCBmYWxzZSk7XG5cbiAgICAvLyByZXNvbHZlIHByb21pc2UgY3JlYXRlZCBpbiBiYWNrKClcbiAgICB2YXIgcmVzb2x2ZSA9IHRoaXMuYmFja1Jlc29sdmU7XG4gICAgdmFyIHJlamVjdCA9IHRoaXMuYmFja1JlamVjdDtcbiAgICBpZiAocmVzb2x2ZSkge1xuICAgICAgICB0aGlzLmJhY2tSZXNvbHZlID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLmJhY2tSZWplY3QgPSB1bmRlZmluZWQ7XG4gICAgICAgIHByb21pc2UudGhlbihyZXNvbHZlLCByZWplY3QpO1xuICAgIH1cbn07XG5cbnZhciB2YXJpYWJsZVJlZ0V4cCA9IC9cXCRcXHtcXHcrXFx9L2c7XG52YXIgcmVnRXhwQ2FjaGUgPSB7fTtcblxuZnVuY3Rpb24gZ2V0VVJMVGVtcGxhdGVSZWdFeHAodGVtcGxhdGUsIHR5cGVzLCBpc1BhdGgpIHtcbiAgICBpZiAoIXRlbXBsYXRlKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICB2YXIgcGF0dGVybiA9IHRlbXBsYXRlLnJlcGxhY2UodmFyaWFibGVSZWdFeHAsIGZ1bmN0aW9uKG1hdGNoKSB7XG4gICAgICAgIHZhciB2YXJpYWJsZSA9IG1hdGNoLnN1YnN0cigyLCBtYXRjaC5sZW5ndGggLSAzKVxuICAgICAgICB2YXIgdmFyaWFibGVUeXBlID0gdHlwZXNbdmFyaWFibGVdO1xuICAgICAgICB2YXIgdmFyaWFibGVQYXR0ZXJuO1xuICAgICAgICBpZiAodmFyaWFibGVUeXBlID09PSBOdW1iZXIgfHwgdmFyaWFibGVUeXBlID09PSBCb29sZWFuKSB7XG4gICAgICAgICAgICB2YXJpYWJsZVBhdHRlcm4gPSAnW1xcXFxkXFxcXC5dKyc7XG4gICAgICAgIH0gZWxzZSBpZiAodHlwZW9mKHZhcmlhYmxlVHlwZSkgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICB2YXJpYWJsZVBhdHRlcm4gPSB2YXJpYWJsZVR5cGUucGF0dGVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXZhcmlhYmxlUGF0dGVybikge1xuICAgICAgICAgICAgaWYgKGlzUGF0aCkge1xuICAgICAgICAgICAgICAgIHZhcmlhYmxlUGF0dGVybiA9ICdbXi9dKydcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdmFyaWFibGVQYXR0ZXJuID0gJy4rJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gJygnICsgdmFyaWFibGVQYXR0ZXJuICsgJyknO1xuICAgIH0pO1xuICAgIGlmIChpc1BhdGgpIHtcbiAgICAgICAgdmFyIGxjID0gcGF0dGVybi5jaGFyQXQocGF0dGVybiAtIDEpO1xuICAgICAgICBpZiAobGMgPT09ICcvJykge1xuICAgICAgICAgICAgcGF0dGVybiArPSAnPyc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwYXR0ZXJuICs9ICcvPyc7XG4gICAgICAgIH1cbiAgICAgICAgcGF0dGVybiA9ICdeJyArIHBhdHRlcm4gKyAnJCc7XG4gICAgfVxuICAgIHZhciByZSA9IHJlZ0V4cENhY2hlW3BhdHRlcm5dO1xuICAgIGlmICghcmUpIHtcbiAgICAgICAgcmUgPSByZWdFeHBDYWNoZVtwYXR0ZXJuXSA9IG5ldyBSZWdFeHAocGF0dGVybik7XG4gICAgfVxuICAgIHJldHVybiByZTtcbn1cblxuZnVuY3Rpb24gZ2V0VVJMVGVtcGxhdGVWYXJpYWJsZXModGVtcGxhdGUpIHtcbiAgICB2YXIgbWF0Y2hlcyA9IHRlbXBsYXRlLm1hdGNoKHZhcmlhYmxlUmVnRXhwKTtcbiAgICB2YXIgbGlzdCA9IFtdO1xuICAgIGlmIChtYXRjaGVzKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbWF0Y2hlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIG1hdGNoID0gbWF0Y2hlc1tpXTtcbiAgICAgICAgICAgIGxpc3QucHVzaChtYXRjaC5zdWJzdHIoMiwgbWF0Y2gubGVuZ3RoIC0gMykpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBsaXN0O1xufVxuXG5mdW5jdGlvbiBtYXRjaFRlbXBsYXRlKHVybFBhcnQsIHRlbXBsYXRlLCB0eXBlcywgcGFyYW1zLCBpc1BhdGgpIHtcbiAgICBpZiAoIXVybFBhcnQgfHwgIXRlbXBsYXRlKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaWYgKHRlbXBsYXRlIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgICAgdmFyIG1hdGNoID0gZmFsc2U7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGVtcGxhdGUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciB0ID0gdGVtcGxhdGVbaV07XG4gICAgICAgICAgICBpZiAobWF0Y2hUZW1wbGF0ZSh1cmxQYXJ0LCB0LCB0eXBlcywgcGFyYW1zLCBpc1BhdGgpKSB7XG4gICAgICAgICAgICAgICAgbWF0Y2ggPSB0cnVlO1xuICAgICAgICAgICAgICAgIGlmIChpc1BhdGgpIHtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBtYXRjaDtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZih0ZW1wbGF0ZSkgPT09ICdvYmplY3QnKSB7XG4gICAgICAgIGlmICh0ZW1wbGF0ZS5mcm9tKSB7XG4gICAgICAgICAgICByZXR1cm4gdGVtcGxhdGUuZnJvbSh1cmxQYXJ0LCBwYXJhbXMpO1xuICAgICAgICB9XG4gICAgfSBlbHNlIGlmICh0eXBlb2YodGVtcGxhdGUpID09PSAnc3RyaW5nJykge1xuICAgICAgICB2YXIgcmUgPSBnZXRVUkxUZW1wbGF0ZVJlZ0V4cCh0ZW1wbGF0ZSwgdHlwZXMsIGlzUGF0aCk7XG4gICAgICAgIHZhciBtYXRjaGVzID0gcmUuZXhlYyh1cmxQYXJ0KTtcbiAgICAgICAgaWYgKCFtYXRjaGVzKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHZhcmlhYmxlcyA9IGdldFVSTFRlbXBsYXRlVmFyaWFibGVzKHRlbXBsYXRlKTtcbiAgICAgICAgdmFyIHZhbHVlcyA9IHt9O1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHZhcmlhYmxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIHZhcmlhYmxlID0gdmFyaWFibGVzW2ldO1xuICAgICAgICAgICAgdmFyIHR5cGUgPSB0eXBlc1t2YXJpYWJsZV07XG4gICAgICAgICAgICB2YXIgdmFsdWUgPSBjYXN0VmFsdWUobWF0Y2hlc1tpICsgMV0sIHR5cGUpO1xuICAgICAgICAgICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICB2YWx1ZXNbdmFyaWFibGVdID0gdmFsdWU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChpc1BhdGgpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBmb3IgKHZhciBuYW1lIGluIHZhbHVlcykge1xuICAgICAgICAgICAgcGFyYW1zW25hbWVdID0gdmFsdWVzW25hbWVdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIGZpbGxUZW1wbGF0ZSh0ZW1wbGF0ZSwgdHlwZXMsIHBhcmFtcywgYWx3YXlzKSB7XG4gICAgaWYgKHRlbXBsYXRlIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgICAgdmFyIHRva2VucyA9IFtdO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRlbXBsYXRlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgdCA9IHRlbXBsYXRlW2ldO1xuICAgICAgICAgICAgdmFyIHMgPSBmaWxsVGVtcGxhdGUodCwgdHlwZXMsIHBhcmFtcywgYWx3YXlzKTtcbiAgICAgICAgICAgIGlmIChzKSB7XG4gICAgICAgICAgICAgICAgdG9rZW5zLnB1c2gocyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRva2Vucy5qb2luKCcnKTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZih0ZW1wbGF0ZSkgPT09ICdvYmplY3QnKSB7XG4gICAgICAgIGlmICh0ZW1wbGF0ZS50bykge1xuICAgICAgICAgICAgcmV0dXJuIHRlbXBsYXRlLnRvKHBhcmFtcyk7XG4gICAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHR5cGVvZih0ZW1wbGF0ZSkgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHZhciB2YXJpYWJsZXMgPSBnZXRVUkxUZW1wbGF0ZVZhcmlhYmxlcyh0ZW1wbGF0ZSk7XG4gICAgICAgIHZhciB1cmxQYXRoID0gdGVtcGxhdGU7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdmFyaWFibGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgdmFyaWFibGUgPSB2YXJpYWJsZXNbaV07XG4gICAgICAgICAgICB2YXIgdmFsdWUgPSBwYXJhbXNbdmFyaWFibGVdO1xuICAgICAgICAgICAgdmFyIHR5cGUgPSB0eXBlc1t2YXJpYWJsZV07XG4gICAgICAgICAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZCB8fCBhbHdheXMpIHtcbiAgICAgICAgICAgICAgICB2YXIgc3RyaW5nID0gc3RyaW5naWZ5VmFsdWUodmFsdWUsIHR5cGUpO1xuICAgICAgICAgICAgICAgIHVybFBhdGggPSB1cmxQYXRoLnJlcGxhY2UoJyR7JyArIHZhcmlhYmxlICsgJ30nLCBzdHJpbmcpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHVybFBhdGg7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBjYXN0VmFsdWUoc3RyaW5nLCB0eXBlKSB7XG4gICAgaWYgKHR5cGUgPT09IFN0cmluZykge1xuICAgICAgICByZXR1cm4gc3RyaW5nO1xuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gTnVtYmVyKSB7XG4gICAgICAgIHZhciBuID0gcGFyc2VGbG9hdChzdHJpbmcpO1xuICAgICAgICBpZiAobiA9PT0gbikge1xuICAgICAgICAgICAgcmV0dXJuIG47XG4gICAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09IEJvb2xlYW4pIHtcbiAgICAgICAgdmFyIG4gPSBwYXJzZUZsb2F0KHN0cmluZyk7XG4gICAgICAgIGlmIChuID09PSBuKSB7XG4gICAgICAgICAgICByZXR1cm4gISFuO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuICEhc3RyaW5nO1xuICAgICAgICB9XG4gICAgfSBlbHNlIGlmICh0eXBlIGluc3RhbmNlb2YgT2JqZWN0KSB7XG4gICAgICAgIGlmICh0eXBlLmZyb20pIHtcbiAgICAgICAgICAgIHJldHVybiB0eXBlLmZyb20oc3RyaW5nKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZnVuY3Rpb24gc3RyaW5naWZ5VmFsdWUodmFsdWUsIHR5cGUpIHtcbiAgICBpZiAodHlwZSA9PT0gU3RyaW5nKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09IE51bWJlcikge1xuICAgICAgICByZXR1cm4gU3RyaW5nKHZhbHVlKTtcbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09IEJvb2xlYW4pIHtcbiAgICAgICAgcmV0dXJuICh2YWx1ZSkgPyAnMCcgOiAnMSc7XG4gICAgfSBlbHNlIGlmICh0eXBlIGluc3RhbmNlb2YgT2JqZWN0KSB7XG4gICAgICAgIGlmICh0eXBlLnRvKSB7XG4gICAgICAgICAgICByZXR1cm4gdHlwZS50byh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmZ1bmN0aW9uIGdldFJlbGF0aXZlUGF0aChiYXNlUGF0aCwgcGF0aCkge1xuICAgIGlmICghYmFzZVBhdGgpIHtcbiAgICAgICAgcmV0dXJuIHBhdGg7XG4gICAgfVxuICAgIGlmIChwYXRoLnN1YnN0cigwLCBiYXNlUGF0aC5sZW5ndGgpID09PSBiYXNlUGF0aCkge1xuICAgICAgICBpZiAocGF0aC5jaGFyQXQoYmFzZVBhdGgubGVuZ3RoKSA9PT0gJy8nKSB7XG4gICAgICAgICAgICByZXR1cm4gcGF0aC5zdWJzdHIoYmFzZVBhdGgubGVuZ3RoKTtcbiAgICAgICAgfSBlbHNlIGlmIChwYXRoID09PSBiYXNlUGF0aCkge1xuICAgICAgICAgICAgcmV0dXJuICcvJztcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZnVuY3Rpb24gcGFyc2VVUkwodXJsKSB7XG4gICAgdmFyIHBhdGggPSB1cmw7XG4gICAgdmFyIGhhc2ggPSAnJztcbiAgICB2YXIgaGFzaEluZGV4ID0gcGF0aC5pbmRleE9mKCcjJyk7XG4gICAgaWYgKGhhc2hJbmRleCAhPT0gLTEpIHtcbiAgICAgICAgaGFzaCA9IHBhdGguc3Vic3RyKGhhc2hJbmRleCArIDEpO1xuICAgICAgICBwYXRoID0gcGF0aC5zdWJzdHIoMCwgaGFzaEluZGV4KTtcbiAgICB9XG4gICAgdmFyIHF1ZXJ5ID0ge307XG4gICAgdmFyIHF1ZXJ5SW5kZXggPSBwYXRoLmluZGV4T2YoJz8nKTtcbiAgICBpZiAocXVlcnlJbmRleCAhPT0gLTEpIHtcbiAgICAgICAgcXVlcnkgPSBwYXJzZVF1ZXJ5U3RyaW5nKHBhdGguc3Vic3RyKHF1ZXJ5SW5kZXggKyAxKSk7XG4gICAgICAgIHBhdGggPSBwYXRoLnN1YnN0cigwLCBxdWVyeUluZGV4KTtcbiAgICB9XG4gICAgcmV0dXJuIHsgcGF0aDogcGF0aCwgcXVlcnk6IHF1ZXJ5LCBoYXNoOiBoYXNoIH07XG59XG5cbmZ1bmN0aW9uIHBhcnNlUXVlcnlTdHJpbmcocXVlcnlTdHJpbmcpIHtcbiAgICB2YXIgdmFsdWVzID0ge307XG4gICAgaWYgKHF1ZXJ5U3RyaW5nKSB7XG4gICAgICAgIHZhciBwYWlycyA9IHF1ZXJ5U3RyaW5nLnNwbGl0KCcmJyk7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcGFpcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBwYXJ0cyA9IHBhaXJzW2ldLnNwbGl0KCc9Jyk7XG4gICAgICAgICAgICB2YXIgbmFtZSA9IGRlY29kZVVSSUNvbXBvbmVudChwYXJ0c1swXSk7XG4gICAgICAgICAgICB2YXIgdmFsdWUgPSBkZWNvZGVVUklDb21wb25lbnQocGFydHNbMV0gfHwgJycpO1xuICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZS5yZXBsYWNlKC9cXCsvZywgJyAnKTtcbiAgICAgICAgICAgIHZhbHVlc1tuYW1lXSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB2YWx1ZXM7XG59XG5cbmZ1bmN0aW9uIGNvbXBvc2VVUkwodXJsUGFydHMpIHtcbiAgICB2YXIgdXJsID0gdXJsUGFydHMucGF0aDtcbiAgICB2YXIgcXVlcnlTdHJpbmcgPSBjb21wb3NlUXVlcnlTdHJpbmcodXJsUGFydHMucXVlcnkpO1xuICAgIGlmIChxdWVyeVN0cmluZykge1xuICAgICAgICB1cmwgKz0gJz8nICsgcXVlcnlTdHJpbmc7XG4gICAgfVxuICAgIGlmICh1cmxQYXJ0cy5oYXNoKSB7XG4gICAgICAgIHVybCArPSAnIycgKyB1cmxQYXJ0cy5oYXNoO1xuICAgIH1cbiAgICByZXR1cm4gdXJsO1xufVxuXG5mdW5jdGlvbiBjb21wb3NlUXVlcnlTdHJpbmcocXVlcnkpIHtcbiAgICB2YXIgcGFpcnMgPSBbXTtcbiAgICBmb3IgKHZhciBuYW1lIGluIHF1ZXJ5KSB7XG4gICAgICAgIHZhciB2YWx1ZSA9IHF1ZXJ5W25hbWVdO1xuICAgICAgICB2YXIgcGFydHMgPSBbXG4gICAgICAgICAgICBlbmNvZGVVUklDb21wb25lbnQobmFtZSksXG4gICAgICAgICAgICBlbmNvZGVVUklDb21wb25lbnQodmFsdWUpLFxuICAgICAgICBdO1xuICAgICAgICBwYWlycy5wdXNoKHBhcnRzLmpvaW4oJz0nKSk7XG4gICAgfVxuICAgIHJldHVybiBwYWlycy5qb2luKCcmJyk7XG59XG5cbmZ1bmN0aW9uIGdldExpbmsoZWxlbWVudCkge1xuICAgIHdoaWxlIChlbGVtZW50ICYmIGVsZW1lbnQudGFnTmFtZSAhPT0gJ0EnICYmICFlbGVtZW50LmhyZWYpIHtcbiAgICAgICAgZWxlbWVudCA9IGVsZW1lbnQucGFyZW50Tm9kZTtcbiAgICB9XG4gICAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbmZ1bmN0aW9uIGdldFRpbWUoKSB7XG4gICAgcmV0dXJuIChuZXcgRGF0ZSkudG9JU09TdHJpbmcoKTtcbn1cblxuZnVuY3Rpb24gUmVsYWtzUm91dGVNYW5hZ2VyRXZlbnQodHlwZSwgdGFyZ2V0LCBwcm9wcykge1xuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgdGhpcy50YXJnZXQgPSB0YXJnZXQ7XG4gICAgZm9yICh2YXIgbmFtZSBpbiBwcm9wcykge1xuICAgICAgICB0aGlzW25hbWVdID0gcHJvcHNbbmFtZV07XG4gICAgfVxuICAgIHRoaXMuZGVmYXVsdFByZXZlbnRlZCA9IGZhbHNlO1xuICAgIHRoaXMuZGVjaXNpb25Qcm9taXNlID0gbnVsbDtcbn1cblxudmFyIHByb3RvdHlwZSA9IFJlbGFrc1JvdXRlTWFuYWdlckV2ZW50LnByb3RvdHlwZTtcblxucHJvdG90eXBlLnByZXZlbnREZWZhdWx0ID0gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5kZWZhdWx0UHJldmVudGVkID0gdHJ1ZTtcbn07XG5cbnByb3RvdHlwZS5wb3N0cG9uZURlZmF1bHQgPSBmdW5jdGlvbihwcm9taXNlKSB7XG4gICAgaWYgKCFwcm9taXNlIHx8ICEocHJvbWlzZS50aGVuIGluc3RhbmNlb2YgRnVuY3Rpb24pKSB7XG4gICAgICAgIHRoaXMuZGVjaXNpb25Qcm9taXNlID0gcHJvbWlzZTtcbiAgICB9XG59O1xuXG5wcm90b3R5cGUud2FpdEZvckRlY2lzaW9uID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZGVjaXNpb25Qcm9taXNlIHx8IFByb21pc2UucmVzb2x2ZSgpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBSZWxha3NSb3V0ZU1hbmFnZXI7XG5tb2R1bGUuZXhwb3J0cy5SZWxha3NSb3V0ZU1hbmFnZXIgPSBSZWxha3NSb3V0ZU1hbmFnZXI7XG5tb2R1bGUuZXhwb3J0cy5SZWxha3NSb3V0ZU1hbmFnZXJFdmVudCA9IFJlbGFrc1JvdXRlTWFuYWdlckV2ZW50O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC9ob21lL2NsZW9uZy9yZWxha3Mtcm91dGUtbWFuYWdlci9pbmRleC5qcyIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9qc29uL3N0cmluZ2lmeVwiKSwgX19lc01vZHVsZTogdHJ1ZSB9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvanNvbi9zdHJpbmdpZnkuanNcbi8vIG1vZHVsZSBpZCA9IC4uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvanNvbi9zdHJpbmdpZnkuanNcbi8vIG1vZHVsZSBjaHVua3MgPSBtYWluIiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9hc3NpZ25cIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9hc3NpZ24uanNcbi8vIG1vZHVsZSBpZCA9IC4uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2Fzc2lnbi5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IG1haW4iLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2NyZWF0ZVwiKSwgX19lc01vZHVsZTogdHJ1ZSB9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2NyZWF0ZS5qc1xuLy8gbW9kdWxlIGlkID0gLi4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvY3JlYXRlLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gbWFpbiIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZGVmaW5lLXByb3BlcnR5XCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvZGVmaW5lLXByb3BlcnR5LmpzXG4vLyBtb2R1bGUgaWQgPSAuLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9kZWZpbmUtcHJvcGVydHkuanNcbi8vIG1vZHVsZSBjaHVua3MgPSBtYWluIiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9nZXQtcHJvdG90eXBlLW9mXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvZ2V0LXByb3RvdHlwZS1vZi5qc1xuLy8gbW9kdWxlIGlkID0gLi4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvZ2V0LXByb3RvdHlwZS1vZi5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IG1haW4iLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L3NldC1wcm90b3R5cGUtb2ZcIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9zZXQtcHJvdG90eXBlLW9mLmpzXG4vLyBtb2R1bGUgaWQgPSAuLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9zZXQtcHJvdG90eXBlLW9mLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gbWFpbiIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9wcm9taXNlXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9wcm9taXNlLmpzXG4vLyBtb2R1bGUgaWQgPSAuLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL3Byb21pc2UuanNcbi8vIG1vZHVsZSBjaHVua3MgPSBtYWluIiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL3N5bWJvbFwiKSwgX19lc01vZHVsZTogdHJ1ZSB9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvc3ltYm9sLmpzXG4vLyBtb2R1bGUgaWQgPSAuLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL3N5bWJvbC5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IG1haW4iLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vc3ltYm9sL2l0ZXJhdG9yXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9zeW1ib2wvaXRlcmF0b3IuanNcbi8vIG1vZHVsZSBpZCA9IC4uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvc3ltYm9sL2l0ZXJhdG9yLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gbWFpbiIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX3Byb21pc2UgPSByZXF1aXJlKFwiLi4vY29yZS1qcy9wcm9taXNlXCIpO1xuXG52YXIgX3Byb21pc2UyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJvbWlzZSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChmbikge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHZhciBnZW4gPSBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIHJldHVybiBuZXcgX3Byb21pc2UyLmRlZmF1bHQoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgZnVuY3Rpb24gc3RlcChrZXksIGFyZykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIHZhciBpbmZvID0gZ2VuW2tleV0oYXJnKTtcbiAgICAgICAgICB2YXIgdmFsdWUgPSBpbmZvLnZhbHVlO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGluZm8uZG9uZSkge1xuICAgICAgICAgIHJlc29sdmUodmFsdWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBfcHJvbWlzZTIuZGVmYXVsdC5yZXNvbHZlKHZhbHVlKS50aGVuKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgc3RlcChcIm5leHRcIiwgdmFsdWUpO1xuICAgICAgICAgIH0sIGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgICAgIHN0ZXAoXCJ0aHJvd1wiLCBlcnIpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBzdGVwKFwibmV4dFwiKTtcbiAgICB9KTtcbiAgfTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvaGVscGVycy9hc3luY1RvR2VuZXJhdG9yLmpzXG4vLyBtb2R1bGUgaWQgPSAuLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9oZWxwZXJzL2FzeW5jVG9HZW5lcmF0b3IuanNcbi8vIG1vZHVsZSBjaHVua3MgPSBtYWluIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICB9XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2suanNcbi8vIG1vZHVsZSBpZCA9IC4uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2suanNcbi8vIG1vZHVsZSBjaHVua3MgPSBtYWluIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfZGVmaW5lUHJvcGVydHkgPSByZXF1aXJlKFwiLi4vY29yZS1qcy9vYmplY3QvZGVmaW5lLXByb3BlcnR5XCIpO1xuXG52YXIgX2RlZmluZVByb3BlcnR5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2RlZmluZVByb3BlcnR5KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICAgICgwLCBfZGVmaW5lUHJvcGVydHkyLmRlZmF1bHQpKHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gICAgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgICBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgICByZXR1cm4gQ29uc3RydWN0b3I7XG4gIH07XG59KCk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcy5qc1xuLy8gbW9kdWxlIGlkID0gLi4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcy5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IG1haW4iLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9zZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL29iamVjdC9zZXQtcHJvdG90eXBlLW9mXCIpO1xuXG52YXIgX3NldFByb3RvdHlwZU9mMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3NldFByb3RvdHlwZU9mKTtcblxudmFyIF9jcmVhdGUgPSByZXF1aXJlKFwiLi4vY29yZS1qcy9vYmplY3QvY3JlYXRlXCIpO1xuXG52YXIgX2NyZWF0ZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jcmVhdGUpO1xuXG52YXIgX3R5cGVvZjIgPSByZXF1aXJlKFwiLi4vaGVscGVycy90eXBlb2ZcIik7XG5cbnZhciBfdHlwZW9mMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3R5cGVvZjIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHtcbiAgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgKHR5cGVvZiBzdXBlckNsYXNzID09PSBcInVuZGVmaW5lZFwiID8gXCJ1bmRlZmluZWRcIiA6ICgwLCBfdHlwZW9mMy5kZWZhdWx0KShzdXBlckNsYXNzKSkpO1xuICB9XG5cbiAgc3ViQ2xhc3MucHJvdG90eXBlID0gKDAsIF9jcmVhdGUyLmRlZmF1bHQpKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHtcbiAgICBjb25zdHJ1Y3Rvcjoge1xuICAgICAgdmFsdWU6IHN1YkNsYXNzLFxuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH1cbiAgfSk7XG4gIGlmIChzdXBlckNsYXNzKSBfc2V0UHJvdG90eXBlT2YyLmRlZmF1bHQgPyAoMCwgX3NldFByb3RvdHlwZU9mMi5kZWZhdWx0KShzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9oZWxwZXJzL2luaGVyaXRzLmpzXG4vLyBtb2R1bGUgaWQgPSAuLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9oZWxwZXJzL2luaGVyaXRzLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gbWFpbiIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX3R5cGVvZjIgPSByZXF1aXJlKFwiLi4vaGVscGVycy90eXBlb2ZcIik7XG5cbnZhciBfdHlwZW9mMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3R5cGVvZjIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoc2VsZiwgY2FsbCkge1xuICBpZiAoIXNlbGYpIHtcbiAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7XG4gIH1cblxuICByZXR1cm4gY2FsbCAmJiAoKHR5cGVvZiBjYWxsID09PSBcInVuZGVmaW5lZFwiID8gXCJ1bmRlZmluZWRcIiA6ICgwLCBfdHlwZW9mMy5kZWZhdWx0KShjYWxsKSkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvaGVscGVycy9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuLmpzXG4vLyBtb2R1bGUgaWQgPSAuLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4uanNcbi8vIG1vZHVsZSBjaHVua3MgPSBtYWluIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfaXRlcmF0b3IgPSByZXF1aXJlKFwiLi4vY29yZS1qcy9zeW1ib2wvaXRlcmF0b3JcIik7XG5cbnZhciBfaXRlcmF0b3IyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaXRlcmF0b3IpO1xuXG52YXIgX3N5bWJvbCA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL3N5bWJvbFwiKTtcblxudmFyIF9zeW1ib2wyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc3ltYm9sKTtcblxudmFyIF90eXBlb2YgPSB0eXBlb2YgX3N5bWJvbDIuZGVmYXVsdCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBfaXRlcmF0b3IyLmRlZmF1bHQgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBfc3ltYm9sMi5kZWZhdWx0ID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBfc3ltYm9sMi5kZWZhdWx0ICYmIG9iaiAhPT0gX3N5bWJvbDIuZGVmYXVsdC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gdHlwZW9mIF9zeW1ib2wyLmRlZmF1bHQgPT09IFwiZnVuY3Rpb25cIiAmJiBfdHlwZW9mKF9pdGVyYXRvcjIuZGVmYXVsdCkgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7XG4gIHJldHVybiB0eXBlb2Ygb2JqID09PSBcInVuZGVmaW5lZFwiID8gXCJ1bmRlZmluZWRcIiA6IF90eXBlb2Yob2JqKTtcbn0gOiBmdW5jdGlvbiAob2JqKSB7XG4gIHJldHVybiBvYmogJiYgdHlwZW9mIF9zeW1ib2wyLmRlZmF1bHQgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IF9zeW1ib2wyLmRlZmF1bHQgJiYgb2JqICE9PSBfc3ltYm9sMi5kZWZhdWx0LnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqID09PSBcInVuZGVmaW5lZFwiID8gXCJ1bmRlZmluZWRcIiA6IF90eXBlb2Yob2JqKTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvaGVscGVycy90eXBlb2YuanNcbi8vIG1vZHVsZSBpZCA9IC4uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gbWFpbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZ2VuZXJhdG9yLXJ1bnRpbWVcIik7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9yZWdlbmVyYXRvci9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gLi4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvcmVnZW5lcmF0b3IvaW5kZXguanNcbi8vIG1vZHVsZSBjaHVua3MgPSBtYWluIiwidmFyIGNvcmUgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJyk7XG52YXIgJEpTT04gPSBjb3JlLkpTT04gfHwgKGNvcmUuSlNPTiA9IHsgc3RyaW5naWZ5OiBKU09OLnN0cmluZ2lmeSB9KTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gc3RyaW5naWZ5KGl0KSB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcbiAgcmV0dXJuICRKU09OLnN0cmluZ2lmeS5hcHBseSgkSlNPTiwgYXJndW1lbnRzKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL2pzb24vc3RyaW5naWZ5LmpzXG4vLyBtb2R1bGUgaWQgPSAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL2pzb24vc3RyaW5naWZ5LmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gbWFpbiIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC5hc3NpZ24nKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpLk9iamVjdC5hc3NpZ247XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9hc3NpZ24uanNcbi8vIG1vZHVsZSBpZCA9IC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2Fzc2lnbi5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IG1haW4iLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3QuY3JlYXRlJyk7XG52YXIgJE9iamVjdCA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5PYmplY3Q7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNyZWF0ZShQLCBEKSB7XG4gIHJldHVybiAkT2JqZWN0LmNyZWF0ZShQLCBEKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9jcmVhdGUuanNcbi8vIG1vZHVsZSBpZCA9IC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2NyZWF0ZS5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IG1haW4iLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3QuZGVmaW5lLXByb3BlcnR5Jyk7XG52YXIgJE9iamVjdCA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5PYmplY3Q7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KGl0LCBrZXksIGRlc2MpIHtcbiAgcmV0dXJuICRPYmplY3QuZGVmaW5lUHJvcGVydHkoaXQsIGtleSwgZGVzYyk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZGVmaW5lLXByb3BlcnR5LmpzXG4vLyBtb2R1bGUgaWQgPSAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9kZWZpbmUtcHJvcGVydHkuanNcbi8vIG1vZHVsZSBjaHVua3MgPSBtYWluIiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LmdldC1wcm90b3R5cGUtb2YnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpLk9iamVjdC5nZXRQcm90b3R5cGVPZjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2dldC1wcm90b3R5cGUtb2YuanNcbi8vIG1vZHVsZSBpZCA9IC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2dldC1wcm90b3R5cGUtb2YuanNcbi8vIG1vZHVsZSBjaHVua3MgPSBtYWluIiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LnNldC1wcm90b3R5cGUtb2YnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpLk9iamVjdC5zZXRQcm90b3R5cGVPZjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L3NldC1wcm90b3R5cGUtb2YuanNcbi8vIG1vZHVsZSBpZCA9IC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L3NldC1wcm90b3R5cGUtb2YuanNcbi8vIG1vZHVsZSBjaHVua3MgPSBtYWluIiwicmVxdWlyZSgnLi4vbW9kdWxlcy9lczYub2JqZWN0LnRvLXN0cmluZycpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL3dlYi5kb20uaXRlcmFibGUnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LnByb21pc2UnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM3LnByb21pc2UuZmluYWxseScpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczcucHJvbWlzZS50cnknKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vbW9kdWxlcy9fY29yZScpLlByb21pc2U7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL3Byb21pc2UuanNcbi8vIG1vZHVsZSBpZCA9IC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vcHJvbWlzZS5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IG1haW4iLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5zeW1ib2wnKTtcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC50by1zdHJpbmcnKTtcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM3LnN5bWJvbC5hc3luYy1pdGVyYXRvcicpO1xucmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczcuc3ltYm9sLm9ic2VydmFibGUnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpLlN5bWJvbDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vc3ltYm9sL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL3N5bWJvbC9pbmRleC5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IG1haW4iLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3InKTtcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZScpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL193a3MtZXh0JykuZignaXRlcmF0b3InKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vc3ltYm9sL2l0ZXJhdG9yLmpzXG4vLyBtb2R1bGUgaWQgPSAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL3N5bWJvbC9pdGVyYXRvci5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IG1haW4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAodHlwZW9mIGl0ICE9ICdmdW5jdGlvbicpIHRocm93IFR5cGVFcnJvcihpdCArICcgaXMgbm90IGEgZnVuY3Rpb24hJyk7XG4gIHJldHVybiBpdDtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2EtZnVuY3Rpb24uanNcbi8vIG1vZHVsZSBpZCA9IC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYS1mdW5jdGlvbi5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IG1haW4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgpIHsgLyogZW1wdHkgKi8gfTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYWRkLXRvLXVuc2NvcGFibGVzLmpzXG4vLyBtb2R1bGUgaWQgPSAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FkZC10by11bnNjb3BhYmxlcy5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IG1haW4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCwgQ29uc3RydWN0b3IsIG5hbWUsIGZvcmJpZGRlbkZpZWxkKSB7XG4gIGlmICghKGl0IGluc3RhbmNlb2YgQ29uc3RydWN0b3IpIHx8IChmb3JiaWRkZW5GaWVsZCAhPT0gdW5kZWZpbmVkICYmIGZvcmJpZGRlbkZpZWxkIGluIGl0KSkge1xuICAgIHRocm93IFR5cGVFcnJvcihuYW1lICsgJzogaW5jb3JyZWN0IGludm9jYXRpb24hJyk7XG4gIH0gcmV0dXJuIGl0O1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYW4taW5zdGFuY2UuanNcbi8vIG1vZHVsZSBpZCA9IC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYW4taW5zdGFuY2UuanNcbi8vIG1vZHVsZSBjaHVua3MgPSBtYWluIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAoIWlzT2JqZWN0KGl0KSkgdGhyb3cgVHlwZUVycm9yKGl0ICsgJyBpcyBub3QgYW4gb2JqZWN0IScpO1xuICByZXR1cm4gaXQ7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hbi1vYmplY3QuanNcbi8vIG1vZHVsZSBpZCA9IC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYW4tb2JqZWN0LmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gbWFpbiIsIi8vIGZhbHNlIC0+IEFycmF5I2luZGV4T2Zcbi8vIHRydWUgIC0+IEFycmF5I2luY2x1ZGVzXG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpO1xudmFyIHRvTGVuZ3RoID0gcmVxdWlyZSgnLi9fdG8tbGVuZ3RoJyk7XG52YXIgdG9BYnNvbHV0ZUluZGV4ID0gcmVxdWlyZSgnLi9fdG8tYWJzb2x1dGUtaW5kZXgnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKElTX0lOQ0xVREVTKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoJHRoaXMsIGVsLCBmcm9tSW5kZXgpIHtcbiAgICB2YXIgTyA9IHRvSU9iamVjdCgkdGhpcyk7XG4gICAgdmFyIGxlbmd0aCA9IHRvTGVuZ3RoKE8ubGVuZ3RoKTtcbiAgICB2YXIgaW5kZXggPSB0b0Fic29sdXRlSW5kZXgoZnJvbUluZGV4LCBsZW5ndGgpO1xuICAgIHZhciB2YWx1ZTtcbiAgICAvLyBBcnJheSNpbmNsdWRlcyB1c2VzIFNhbWVWYWx1ZVplcm8gZXF1YWxpdHkgYWxnb3JpdGhtXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlbGYtY29tcGFyZVxuICAgIGlmIChJU19JTkNMVURFUyAmJiBlbCAhPSBlbCkgd2hpbGUgKGxlbmd0aCA+IGluZGV4KSB7XG4gICAgICB2YWx1ZSA9IE9baW5kZXgrK107XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VsZi1jb21wYXJlXG4gICAgICBpZiAodmFsdWUgIT0gdmFsdWUpIHJldHVybiB0cnVlO1xuICAgIC8vIEFycmF5I2luZGV4T2YgaWdub3JlcyBob2xlcywgQXJyYXkjaW5jbHVkZXMgLSBub3RcbiAgICB9IGVsc2UgZm9yICg7bGVuZ3RoID4gaW5kZXg7IGluZGV4KyspIGlmIChJU19JTkNMVURFUyB8fCBpbmRleCBpbiBPKSB7XG4gICAgICBpZiAoT1tpbmRleF0gPT09IGVsKSByZXR1cm4gSVNfSU5DTFVERVMgfHwgaW5kZXggfHwgMDtcbiAgICB9IHJldHVybiAhSVNfSU5DTFVERVMgJiYgLTE7XG4gIH07XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hcnJheS1pbmNsdWRlcy5qc1xuLy8gbW9kdWxlIGlkID0gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hcnJheS1pbmNsdWRlcy5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IG1haW4iLCIvLyBnZXR0aW5nIHRhZyBmcm9tIDE5LjEuMy42IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcoKVxudmFyIGNvZiA9IHJlcXVpcmUoJy4vX2NvZicpO1xudmFyIFRBRyA9IHJlcXVpcmUoJy4vX3drcycpKCd0b1N0cmluZ1RhZycpO1xuLy8gRVMzIHdyb25nIGhlcmVcbnZhciBBUkcgPSBjb2YoZnVuY3Rpb24gKCkgeyByZXR1cm4gYXJndW1lbnRzOyB9KCkpID09ICdBcmd1bWVudHMnO1xuXG4vLyBmYWxsYmFjayBmb3IgSUUxMSBTY3JpcHQgQWNjZXNzIERlbmllZCBlcnJvclxudmFyIHRyeUdldCA9IGZ1bmN0aW9uIChpdCwga2V5KSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGl0W2tleV07XG4gIH0gY2F0Y2ggKGUpIHsgLyogZW1wdHkgKi8gfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgdmFyIE8sIFQsIEI7XG4gIHJldHVybiBpdCA9PT0gdW5kZWZpbmVkID8gJ1VuZGVmaW5lZCcgOiBpdCA9PT0gbnVsbCA/ICdOdWxsJ1xuICAgIC8vIEBAdG9TdHJpbmdUYWcgY2FzZVxuICAgIDogdHlwZW9mIChUID0gdHJ5R2V0KE8gPSBPYmplY3QoaXQpLCBUQUcpKSA9PSAnc3RyaW5nJyA/IFRcbiAgICAvLyBidWlsdGluVGFnIGNhc2VcbiAgICA6IEFSRyA/IGNvZihPKVxuICAgIC8vIEVTMyBhcmd1bWVudHMgZmFsbGJhY2tcbiAgICA6IChCID0gY29mKE8pKSA9PSAnT2JqZWN0JyAmJiB0eXBlb2YgTy5jYWxsZWUgPT0gJ2Z1bmN0aW9uJyA/ICdBcmd1bWVudHMnIDogQjtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NsYXNzb2YuanNcbi8vIG1vZHVsZSBpZCA9IC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY2xhc3NvZi5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IG1haW4iLCJ2YXIgdG9TdHJpbmcgPSB7fS50b1N0cmluZztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwoaXQpLnNsaWNlKDgsIC0xKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NvZi5qc1xuLy8gbW9kdWxlIGlkID0gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jb2YuanNcbi8vIG1vZHVsZSBjaHVua3MgPSBtYWluIiwidmFyIGNvcmUgPSBtb2R1bGUuZXhwb3J0cyA9IHsgdmVyc2lvbjogJzIuNS43JyB9O1xuaWYgKHR5cGVvZiBfX2UgPT0gJ251bWJlcicpIF9fZSA9IGNvcmU7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY29yZS5qc1xuLy8gbW9kdWxlIGlkID0gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jb3JlLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gbWFpbiIsIi8vIG9wdGlvbmFsIC8gc2ltcGxlIGNvbnRleHQgYmluZGluZ1xudmFyIGFGdW5jdGlvbiA9IHJlcXVpcmUoJy4vX2EtZnVuY3Rpb24nKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGZuLCB0aGF0LCBsZW5ndGgpIHtcbiAgYUZ1bmN0aW9uKGZuKTtcbiAgaWYgKHRoYXQgPT09IHVuZGVmaW5lZCkgcmV0dXJuIGZuO1xuICBzd2l0Y2ggKGxlbmd0aCkge1xuICAgIGNhc2UgMTogcmV0dXJuIGZ1bmN0aW9uIChhKSB7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhKTtcbiAgICB9O1xuICAgIGNhc2UgMjogcmV0dXJuIGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhLCBiKTtcbiAgICB9O1xuICAgIGNhc2UgMzogcmV0dXJuIGZ1bmN0aW9uIChhLCBiLCBjKSB7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhLCBiLCBjKTtcbiAgICB9O1xuICB9XG4gIHJldHVybiBmdW5jdGlvbiAoLyogLi4uYXJncyAqLykge1xuICAgIHJldHVybiBmbi5hcHBseSh0aGF0LCBhcmd1bWVudHMpO1xuICB9O1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY3R4LmpzXG4vLyBtb2R1bGUgaWQgPSAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2N0eC5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IG1haW4iLCIvLyA3LjIuMSBSZXF1aXJlT2JqZWN0Q29lcmNpYmxlKGFyZ3VtZW50KVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKGl0ID09IHVuZGVmaW5lZCkgdGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3QgY2FsbCBtZXRob2Qgb24gIFwiICsgaXQpO1xuICByZXR1cm4gaXQ7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kZWZpbmVkLmpzXG4vLyBtb2R1bGUgaWQgPSAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2RlZmluZWQuanNcbi8vIG1vZHVsZSBjaHVua3MgPSBtYWluIiwiLy8gVGhhbmsncyBJRTggZm9yIGhpcyBmdW5ueSBkZWZpbmVQcm9wZXJ0eVxubW9kdWxlLmV4cG9ydHMgPSAhcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoe30sICdhJywgeyBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIDc7IH0gfSkuYSAhPSA3O1xufSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2Rlc2NyaXB0b3JzLmpzXG4vLyBtb2R1bGUgaWQgPSAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2Rlc2NyaXB0b3JzLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gbWFpbiIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xudmFyIGRvY3VtZW50ID0gcmVxdWlyZSgnLi9fZ2xvYmFsJykuZG9jdW1lbnQ7XG4vLyB0eXBlb2YgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCBpcyAnb2JqZWN0JyBpbiBvbGQgSUVcbnZhciBpcyA9IGlzT2JqZWN0KGRvY3VtZW50KSAmJiBpc09iamVjdChkb2N1bWVudC5jcmVhdGVFbGVtZW50KTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBpcyA/IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoaXQpIDoge307XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kb20tY3JlYXRlLmpzXG4vLyBtb2R1bGUgaWQgPSAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2RvbS1jcmVhdGUuanNcbi8vIG1vZHVsZSBjaHVua3MgPSBtYWluIiwiLy8gSUUgOC0gZG9uJ3QgZW51bSBidWcga2V5c1xubW9kdWxlLmV4cG9ydHMgPSAoXG4gICdjb25zdHJ1Y3RvcixoYXNPd25Qcm9wZXJ0eSxpc1Byb3RvdHlwZU9mLHByb3BlcnR5SXNFbnVtZXJhYmxlLHRvTG9jYWxlU3RyaW5nLHRvU3RyaW5nLHZhbHVlT2YnXG4pLnNwbGl0KCcsJyk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2VudW0tYnVnLWtleXMuanNcbi8vIG1vZHVsZSBpZCA9IC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZW51bS1idWcta2V5cy5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IG1haW4iLCIvLyBhbGwgZW51bWVyYWJsZSBvYmplY3Qga2V5cywgaW5jbHVkZXMgc3ltYm9sc1xudmFyIGdldEtleXMgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpO1xudmFyIGdPUFMgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wcycpO1xudmFyIHBJRSA9IHJlcXVpcmUoJy4vX29iamVjdC1waWUnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHZhciByZXN1bHQgPSBnZXRLZXlzKGl0KTtcbiAgdmFyIGdldFN5bWJvbHMgPSBnT1BTLmY7XG4gIGlmIChnZXRTeW1ib2xzKSB7XG4gICAgdmFyIHN5bWJvbHMgPSBnZXRTeW1ib2xzKGl0KTtcbiAgICB2YXIgaXNFbnVtID0gcElFLmY7XG4gICAgdmFyIGkgPSAwO1xuICAgIHZhciBrZXk7XG4gICAgd2hpbGUgKHN5bWJvbHMubGVuZ3RoID4gaSkgaWYgKGlzRW51bS5jYWxsKGl0LCBrZXkgPSBzeW1ib2xzW2krK10pKSByZXN1bHQucHVzaChrZXkpO1xuICB9IHJldHVybiByZXN1bHQ7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19lbnVtLWtleXMuanNcbi8vIG1vZHVsZSBpZCA9IC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZW51bS1rZXlzLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gbWFpbiIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBjb3JlID0gcmVxdWlyZSgnLi9fY29yZScpO1xudmFyIGN0eCA9IHJlcXVpcmUoJy4vX2N0eCcpO1xudmFyIGhpZGUgPSByZXF1aXJlKCcuL19oaWRlJyk7XG52YXIgaGFzID0gcmVxdWlyZSgnLi9faGFzJyk7XG52YXIgUFJPVE9UWVBFID0gJ3Byb3RvdHlwZSc7XG5cbnZhciAkZXhwb3J0ID0gZnVuY3Rpb24gKHR5cGUsIG5hbWUsIHNvdXJjZSkge1xuICB2YXIgSVNfRk9SQ0VEID0gdHlwZSAmICRleHBvcnQuRjtcbiAgdmFyIElTX0dMT0JBTCA9IHR5cGUgJiAkZXhwb3J0Lkc7XG4gIHZhciBJU19TVEFUSUMgPSB0eXBlICYgJGV4cG9ydC5TO1xuICB2YXIgSVNfUFJPVE8gPSB0eXBlICYgJGV4cG9ydC5QO1xuICB2YXIgSVNfQklORCA9IHR5cGUgJiAkZXhwb3J0LkI7XG4gIHZhciBJU19XUkFQID0gdHlwZSAmICRleHBvcnQuVztcbiAgdmFyIGV4cG9ydHMgPSBJU19HTE9CQUwgPyBjb3JlIDogY29yZVtuYW1lXSB8fCAoY29yZVtuYW1lXSA9IHt9KTtcbiAgdmFyIGV4cFByb3RvID0gZXhwb3J0c1tQUk9UT1RZUEVdO1xuICB2YXIgdGFyZ2V0ID0gSVNfR0xPQkFMID8gZ2xvYmFsIDogSVNfU1RBVElDID8gZ2xvYmFsW25hbWVdIDogKGdsb2JhbFtuYW1lXSB8fCB7fSlbUFJPVE9UWVBFXTtcbiAgdmFyIGtleSwgb3duLCBvdXQ7XG4gIGlmIChJU19HTE9CQUwpIHNvdXJjZSA9IG5hbWU7XG4gIGZvciAoa2V5IGluIHNvdXJjZSkge1xuICAgIC8vIGNvbnRhaW5zIGluIG5hdGl2ZVxuICAgIG93biA9ICFJU19GT1JDRUQgJiYgdGFyZ2V0ICYmIHRhcmdldFtrZXldICE9PSB1bmRlZmluZWQ7XG4gICAgaWYgKG93biAmJiBoYXMoZXhwb3J0cywga2V5KSkgY29udGludWU7XG4gICAgLy8gZXhwb3J0IG5hdGl2ZSBvciBwYXNzZWRcbiAgICBvdXQgPSBvd24gPyB0YXJnZXRba2V5XSA6IHNvdXJjZVtrZXldO1xuICAgIC8vIHByZXZlbnQgZ2xvYmFsIHBvbGx1dGlvbiBmb3IgbmFtZXNwYWNlc1xuICAgIGV4cG9ydHNba2V5XSA9IElTX0dMT0JBTCAmJiB0eXBlb2YgdGFyZ2V0W2tleV0gIT0gJ2Z1bmN0aW9uJyA/IHNvdXJjZVtrZXldXG4gICAgLy8gYmluZCB0aW1lcnMgdG8gZ2xvYmFsIGZvciBjYWxsIGZyb20gZXhwb3J0IGNvbnRleHRcbiAgICA6IElTX0JJTkQgJiYgb3duID8gY3R4KG91dCwgZ2xvYmFsKVxuICAgIC8vIHdyYXAgZ2xvYmFsIGNvbnN0cnVjdG9ycyBmb3IgcHJldmVudCBjaGFuZ2UgdGhlbSBpbiBsaWJyYXJ5XG4gICAgOiBJU19XUkFQICYmIHRhcmdldFtrZXldID09IG91dCA/IChmdW5jdGlvbiAoQykge1xuICAgICAgdmFyIEYgPSBmdW5jdGlvbiAoYSwgYiwgYykge1xuICAgICAgICBpZiAodGhpcyBpbnN0YW5jZW9mIEMpIHtcbiAgICAgICAgICBzd2l0Y2ggKGFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGNhc2UgMDogcmV0dXJuIG5ldyBDKCk7XG4gICAgICAgICAgICBjYXNlIDE6IHJldHVybiBuZXcgQyhhKTtcbiAgICAgICAgICAgIGNhc2UgMjogcmV0dXJuIG5ldyBDKGEsIGIpO1xuICAgICAgICAgIH0gcmV0dXJuIG5ldyBDKGEsIGIsIGMpO1xuICAgICAgICB9IHJldHVybiBDLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICB9O1xuICAgICAgRltQUk9UT1RZUEVdID0gQ1tQUk9UT1RZUEVdO1xuICAgICAgcmV0dXJuIEY7XG4gICAgLy8gbWFrZSBzdGF0aWMgdmVyc2lvbnMgZm9yIHByb3RvdHlwZSBtZXRob2RzXG4gICAgfSkob3V0KSA6IElTX1BST1RPICYmIHR5cGVvZiBvdXQgPT0gJ2Z1bmN0aW9uJyA/IGN0eChGdW5jdGlvbi5jYWxsLCBvdXQpIDogb3V0O1xuICAgIC8vIGV4cG9ydCBwcm90byBtZXRob2RzIHRvIGNvcmUuJUNPTlNUUlVDVE9SJS5tZXRob2RzLiVOQU1FJVxuICAgIGlmIChJU19QUk9UTykge1xuICAgICAgKGV4cG9ydHMudmlydHVhbCB8fCAoZXhwb3J0cy52aXJ0dWFsID0ge30pKVtrZXldID0gb3V0O1xuICAgICAgLy8gZXhwb3J0IHByb3RvIG1ldGhvZHMgdG8gY29yZS4lQ09OU1RSVUNUT1IlLnByb3RvdHlwZS4lTkFNRSVcbiAgICAgIGlmICh0eXBlICYgJGV4cG9ydC5SICYmIGV4cFByb3RvICYmICFleHBQcm90b1trZXldKSBoaWRlKGV4cFByb3RvLCBrZXksIG91dCk7XG4gICAgfVxuICB9XG59O1xuLy8gdHlwZSBiaXRtYXBcbiRleHBvcnQuRiA9IDE7ICAgLy8gZm9yY2VkXG4kZXhwb3J0LkcgPSAyOyAgIC8vIGdsb2JhbFxuJGV4cG9ydC5TID0gNDsgICAvLyBzdGF0aWNcbiRleHBvcnQuUCA9IDg7ICAgLy8gcHJvdG9cbiRleHBvcnQuQiA9IDE2OyAgLy8gYmluZFxuJGV4cG9ydC5XID0gMzI7ICAvLyB3cmFwXG4kZXhwb3J0LlUgPSA2NDsgIC8vIHNhZmVcbiRleHBvcnQuUiA9IDEyODsgLy8gcmVhbCBwcm90byBtZXRob2QgZm9yIGBsaWJyYXJ5YFxubW9kdWxlLmV4cG9ydHMgPSAkZXhwb3J0O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19leHBvcnQuanNcbi8vIG1vZHVsZSBpZCA9IC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZXhwb3J0LmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gbWFpbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGV4ZWMpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gISFleGVjKCk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZmFpbHMuanNcbi8vIG1vZHVsZSBpZCA9IC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZmFpbHMuanNcbi8vIG1vZHVsZSBjaHVua3MgPSBtYWluIiwidmFyIGN0eCA9IHJlcXVpcmUoJy4vX2N0eCcpO1xudmFyIGNhbGwgPSByZXF1aXJlKCcuL19pdGVyLWNhbGwnKTtcbnZhciBpc0FycmF5SXRlciA9IHJlcXVpcmUoJy4vX2lzLWFycmF5LWl0ZXInKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIHRvTGVuZ3RoID0gcmVxdWlyZSgnLi9fdG8tbGVuZ3RoJyk7XG52YXIgZ2V0SXRlckZuID0gcmVxdWlyZSgnLi9jb3JlLmdldC1pdGVyYXRvci1tZXRob2QnKTtcbnZhciBCUkVBSyA9IHt9O1xudmFyIFJFVFVSTiA9IHt9O1xudmFyIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVyYWJsZSwgZW50cmllcywgZm4sIHRoYXQsIElURVJBVE9SKSB7XG4gIHZhciBpdGVyRm4gPSBJVEVSQVRPUiA/IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGl0ZXJhYmxlOyB9IDogZ2V0SXRlckZuKGl0ZXJhYmxlKTtcbiAgdmFyIGYgPSBjdHgoZm4sIHRoYXQsIGVudHJpZXMgPyAyIDogMSk7XG4gIHZhciBpbmRleCA9IDA7XG4gIHZhciBsZW5ndGgsIHN0ZXAsIGl0ZXJhdG9yLCByZXN1bHQ7XG4gIGlmICh0eXBlb2YgaXRlckZuICE9ICdmdW5jdGlvbicpIHRocm93IFR5cGVFcnJvcihpdGVyYWJsZSArICcgaXMgbm90IGl0ZXJhYmxlIScpO1xuICAvLyBmYXN0IGNhc2UgZm9yIGFycmF5cyB3aXRoIGRlZmF1bHQgaXRlcmF0b3JcbiAgaWYgKGlzQXJyYXlJdGVyKGl0ZXJGbikpIGZvciAobGVuZ3RoID0gdG9MZW5ndGgoaXRlcmFibGUubGVuZ3RoKTsgbGVuZ3RoID4gaW5kZXg7IGluZGV4KyspIHtcbiAgICByZXN1bHQgPSBlbnRyaWVzID8gZihhbk9iamVjdChzdGVwID0gaXRlcmFibGVbaW5kZXhdKVswXSwgc3RlcFsxXSkgOiBmKGl0ZXJhYmxlW2luZGV4XSk7XG4gICAgaWYgKHJlc3VsdCA9PT0gQlJFQUsgfHwgcmVzdWx0ID09PSBSRVRVUk4pIHJldHVybiByZXN1bHQ7XG4gIH0gZWxzZSBmb3IgKGl0ZXJhdG9yID0gaXRlckZuLmNhbGwoaXRlcmFibGUpOyAhKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmU7KSB7XG4gICAgcmVzdWx0ID0gY2FsbChpdGVyYXRvciwgZiwgc3RlcC52YWx1ZSwgZW50cmllcyk7XG4gICAgaWYgKHJlc3VsdCA9PT0gQlJFQUsgfHwgcmVzdWx0ID09PSBSRVRVUk4pIHJldHVybiByZXN1bHQ7XG4gIH1cbn07XG5leHBvcnRzLkJSRUFLID0gQlJFQUs7XG5leHBvcnRzLlJFVFVSTiA9IFJFVFVSTjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZm9yLW9mLmpzXG4vLyBtb2R1bGUgaWQgPSAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2Zvci1vZi5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IG1haW4iLCIvLyBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvODYjaXNzdWVjb21tZW50LTExNTc1OTAyOFxudmFyIGdsb2JhbCA9IG1vZHVsZS5leHBvcnRzID0gdHlwZW9mIHdpbmRvdyAhPSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuTWF0aCA9PSBNYXRoXG4gID8gd2luZG93IDogdHlwZW9mIHNlbGYgIT0gJ3VuZGVmaW5lZCcgJiYgc2VsZi5NYXRoID09IE1hdGggPyBzZWxmXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1uZXctZnVuY1xuICA6IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5pZiAodHlwZW9mIF9fZyA9PSAnbnVtYmVyJykgX19nID0gZ2xvYmFsOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2dsb2JhbC5qc1xuLy8gbW9kdWxlIGlkID0gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19nbG9iYWwuanNcbi8vIG1vZHVsZSBjaHVua3MgPSBtYWluIiwidmFyIGhhc093blByb3BlcnR5ID0ge30uaGFzT3duUHJvcGVydHk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCwga2V5KSB7XG4gIHJldHVybiBoYXNPd25Qcm9wZXJ0eS5jYWxsKGl0LCBrZXkpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faGFzLmpzXG4vLyBtb2R1bGUgaWQgPSAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2hhcy5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IG1haW4iLCJ2YXIgZFAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKTtcbnZhciBjcmVhdGVEZXNjID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gZnVuY3Rpb24gKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICByZXR1cm4gZFAuZihvYmplY3QsIGtleSwgY3JlYXRlRGVzYygxLCB2YWx1ZSkpO1xufSA6IGZ1bmN0aW9uIChvYmplY3QsIGtleSwgdmFsdWUpIHtcbiAgb2JqZWN0W2tleV0gPSB2YWx1ZTtcbiAgcmV0dXJuIG9iamVjdDtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2hpZGUuanNcbi8vIG1vZHVsZSBpZCA9IC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faGlkZS5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IG1haW4iLCJ2YXIgZG9jdW1lbnQgPSByZXF1aXJlKCcuL19nbG9iYWwnKS5kb2N1bWVudDtcbm1vZHVsZS5leHBvcnRzID0gZG9jdW1lbnQgJiYgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19odG1sLmpzXG4vLyBtb2R1bGUgaWQgPSAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2h0bWwuanNcbi8vIG1vZHVsZSBjaHVua3MgPSBtYWluIiwibW9kdWxlLmV4cG9ydHMgPSAhcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSAmJiAhcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkocmVxdWlyZSgnLi9fZG9tLWNyZWF0ZScpKCdkaXYnKSwgJ2EnLCB7IGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gNzsgfSB9KS5hICE9IDc7XG59KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faWU4LWRvbS1kZWZpbmUuanNcbi8vIG1vZHVsZSBpZCA9IC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faWU4LWRvbS1kZWZpbmUuanNcbi8vIG1vZHVsZSBjaHVua3MgPSBtYWluIiwiLy8gZmFzdCBhcHBseSwgaHR0cDovL2pzcGVyZi5sbmtpdC5jb20vZmFzdC1hcHBseS81XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChmbiwgYXJncywgdGhhdCkge1xuICB2YXIgdW4gPSB0aGF0ID09PSB1bmRlZmluZWQ7XG4gIHN3aXRjaCAoYXJncy5sZW5ndGgpIHtcbiAgICBjYXNlIDA6IHJldHVybiB1biA/IGZuKClcbiAgICAgICAgICAgICAgICAgICAgICA6IGZuLmNhbGwodGhhdCk7XG4gICAgY2FzZSAxOiByZXR1cm4gdW4gPyBmbihhcmdzWzBdKVxuICAgICAgICAgICAgICAgICAgICAgIDogZm4uY2FsbCh0aGF0LCBhcmdzWzBdKTtcbiAgICBjYXNlIDI6IHJldHVybiB1biA/IGZuKGFyZ3NbMF0sIGFyZ3NbMV0pXG4gICAgICAgICAgICAgICAgICAgICAgOiBmbi5jYWxsKHRoYXQsIGFyZ3NbMF0sIGFyZ3NbMV0pO1xuICAgIGNhc2UgMzogcmV0dXJuIHVuID8gZm4oYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSlcbiAgICAgICAgICAgICAgICAgICAgICA6IGZuLmNhbGwodGhhdCwgYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSk7XG4gICAgY2FzZSA0OiByZXR1cm4gdW4gPyBmbihhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdLCBhcmdzWzNdKVxuICAgICAgICAgICAgICAgICAgICAgIDogZm4uY2FsbCh0aGF0LCBhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdLCBhcmdzWzNdKTtcbiAgfSByZXR1cm4gZm4uYXBwbHkodGhhdCwgYXJncyk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pbnZva2UuanNcbi8vIG1vZHVsZSBpZCA9IC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faW52b2tlLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gbWFpbiIsIi8vIGZhbGxiYWNrIGZvciBub24tYXJyYXktbGlrZSBFUzMgYW5kIG5vbi1lbnVtZXJhYmxlIG9sZCBWOCBzdHJpbmdzXG52YXIgY29mID0gcmVxdWlyZSgnLi9fY29mJyk7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcHJvdG90eXBlLWJ1aWx0aW5zXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdCgneicpLnByb3BlcnR5SXNFbnVtZXJhYmxlKDApID8gT2JqZWN0IDogZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBjb2YoaXQpID09ICdTdHJpbmcnID8gaXQuc3BsaXQoJycpIDogT2JqZWN0KGl0KTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lvYmplY3QuanNcbi8vIG1vZHVsZSBpZCA9IC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faW9iamVjdC5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IG1haW4iLCIvLyBjaGVjayBvbiBkZWZhdWx0IEFycmF5IGl0ZXJhdG9yXG52YXIgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJyk7XG52YXIgSVRFUkFUT1IgPSByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKTtcbnZhciBBcnJheVByb3RvID0gQXJyYXkucHJvdG90eXBlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXQgIT09IHVuZGVmaW5lZCAmJiAoSXRlcmF0b3JzLkFycmF5ID09PSBpdCB8fCBBcnJheVByb3RvW0lURVJBVE9SXSA9PT0gaXQpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXMtYXJyYXktaXRlci5qc1xuLy8gbW9kdWxlIGlkID0gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pcy1hcnJheS1pdGVyLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gbWFpbiIsIi8vIDcuMi4yIElzQXJyYXkoYXJndW1lbnQpXG52YXIgY29mID0gcmVxdWlyZSgnLi9fY29mJyk7XG5tb2R1bGUuZXhwb3J0cyA9IEFycmF5LmlzQXJyYXkgfHwgZnVuY3Rpb24gaXNBcnJheShhcmcpIHtcbiAgcmV0dXJuIGNvZihhcmcpID09ICdBcnJheSc7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pcy1hcnJheS5qc1xuLy8gbW9kdWxlIGlkID0gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pcy1hcnJheS5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IG1haW4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gdHlwZW9mIGl0ID09PSAnb2JqZWN0JyA/IGl0ICE9PSBudWxsIDogdHlwZW9mIGl0ID09PSAnZnVuY3Rpb24nO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXMtb2JqZWN0LmpzXG4vLyBtb2R1bGUgaWQgPSAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lzLW9iamVjdC5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IG1haW4iLCIvLyBjYWxsIHNvbWV0aGluZyBvbiBpdGVyYXRvciBzdGVwIHdpdGggc2FmZSBjbG9zaW5nIG9uIGVycm9yXG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZXJhdG9yLCBmbiwgdmFsdWUsIGVudHJpZXMpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gZW50cmllcyA/IGZuKGFuT2JqZWN0KHZhbHVlKVswXSwgdmFsdWVbMV0pIDogZm4odmFsdWUpO1xuICAvLyA3LjQuNiBJdGVyYXRvckNsb3NlKGl0ZXJhdG9yLCBjb21wbGV0aW9uKVxuICB9IGNhdGNoIChlKSB7XG4gICAgdmFyIHJldCA9IGl0ZXJhdG9yWydyZXR1cm4nXTtcbiAgICBpZiAocmV0ICE9PSB1bmRlZmluZWQpIGFuT2JqZWN0KHJldC5jYWxsKGl0ZXJhdG9yKSk7XG4gICAgdGhyb3cgZTtcbiAgfVxufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1jYWxsLmpzXG4vLyBtb2R1bGUgaWQgPSAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItY2FsbC5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IG1haW4iLCIndXNlIHN0cmljdCc7XG52YXIgY3JlYXRlID0gcmVxdWlyZSgnLi9fb2JqZWN0LWNyZWF0ZScpO1xudmFyIGRlc2NyaXB0b3IgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJyk7XG52YXIgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlKCcuL19zZXQtdG8tc3RyaW5nLXRhZycpO1xudmFyIEl0ZXJhdG9yUHJvdG90eXBlID0ge307XG5cbi8vIDI1LjEuMi4xLjEgJUl0ZXJhdG9yUHJvdG90eXBlJVtAQGl0ZXJhdG9yXSgpXG5yZXF1aXJlKCcuL19oaWRlJykoSXRlcmF0b3JQcm90b3R5cGUsIHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpLCBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9KTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIE5BTUUsIG5leHQpIHtcbiAgQ29uc3RydWN0b3IucHJvdG90eXBlID0gY3JlYXRlKEl0ZXJhdG9yUHJvdG90eXBlLCB7IG5leHQ6IGRlc2NyaXB0b3IoMSwgbmV4dCkgfSk7XG4gIHNldFRvU3RyaW5nVGFnKENvbnN0cnVjdG9yLCBOQU1FICsgJyBJdGVyYXRvcicpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1jcmVhdGUuanNcbi8vIG1vZHVsZSBpZCA9IC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1jcmVhdGUuanNcbi8vIG1vZHVsZSBjaHVua3MgPSBtYWluIiwiJ3VzZSBzdHJpY3QnO1xudmFyIExJQlJBUlkgPSByZXF1aXJlKCcuL19saWJyYXJ5Jyk7XG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xudmFyIHJlZGVmaW5lID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUnKTtcbnZhciBoaWRlID0gcmVxdWlyZSgnLi9faGlkZScpO1xudmFyIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpO1xudmFyICRpdGVyQ3JlYXRlID0gcmVxdWlyZSgnLi9faXRlci1jcmVhdGUnKTtcbnZhciBzZXRUb1N0cmluZ1RhZyA9IHJlcXVpcmUoJy4vX3NldC10by1zdHJpbmctdGFnJyk7XG52YXIgZ2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKCcuL19vYmplY3QtZ3BvJyk7XG52YXIgSVRFUkFUT1IgPSByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKTtcbnZhciBCVUdHWSA9ICEoW10ua2V5cyAmJiAnbmV4dCcgaW4gW10ua2V5cygpKTsgLy8gU2FmYXJpIGhhcyBidWdneSBpdGVyYXRvcnMgdy9vIGBuZXh0YFxudmFyIEZGX0lURVJBVE9SID0gJ0BAaXRlcmF0b3InO1xudmFyIEtFWVMgPSAna2V5cyc7XG52YXIgVkFMVUVTID0gJ3ZhbHVlcyc7XG5cbnZhciByZXR1cm5UaGlzID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoQmFzZSwgTkFNRSwgQ29uc3RydWN0b3IsIG5leHQsIERFRkFVTFQsIElTX1NFVCwgRk9SQ0VEKSB7XG4gICRpdGVyQ3JlYXRlKENvbnN0cnVjdG9yLCBOQU1FLCBuZXh0KTtcbiAgdmFyIGdldE1ldGhvZCA9IGZ1bmN0aW9uIChraW5kKSB7XG4gICAgaWYgKCFCVUdHWSAmJiBraW5kIGluIHByb3RvKSByZXR1cm4gcHJvdG9ba2luZF07XG4gICAgc3dpdGNoIChraW5kKSB7XG4gICAgICBjYXNlIEtFWVM6IHJldHVybiBmdW5jdGlvbiBrZXlzKCkgeyByZXR1cm4gbmV3IENvbnN0cnVjdG9yKHRoaXMsIGtpbmQpOyB9O1xuICAgICAgY2FzZSBWQUxVRVM6IHJldHVybiBmdW5jdGlvbiB2YWx1ZXMoKSB7IHJldHVybiBuZXcgQ29uc3RydWN0b3IodGhpcywga2luZCk7IH07XG4gICAgfSByZXR1cm4gZnVuY3Rpb24gZW50cmllcygpIHsgcmV0dXJuIG5ldyBDb25zdHJ1Y3Rvcih0aGlzLCBraW5kKTsgfTtcbiAgfTtcbiAgdmFyIFRBRyA9IE5BTUUgKyAnIEl0ZXJhdG9yJztcbiAgdmFyIERFRl9WQUxVRVMgPSBERUZBVUxUID09IFZBTFVFUztcbiAgdmFyIFZBTFVFU19CVUcgPSBmYWxzZTtcbiAgdmFyIHByb3RvID0gQmFzZS5wcm90b3R5cGU7XG4gIHZhciAkbmF0aXZlID0gcHJvdG9bSVRFUkFUT1JdIHx8IHByb3RvW0ZGX0lURVJBVE9SXSB8fCBERUZBVUxUICYmIHByb3RvW0RFRkFVTFRdO1xuICB2YXIgJGRlZmF1bHQgPSAkbmF0aXZlIHx8IGdldE1ldGhvZChERUZBVUxUKTtcbiAgdmFyICRlbnRyaWVzID0gREVGQVVMVCA/ICFERUZfVkFMVUVTID8gJGRlZmF1bHQgOiBnZXRNZXRob2QoJ2VudHJpZXMnKSA6IHVuZGVmaW5lZDtcbiAgdmFyICRhbnlOYXRpdmUgPSBOQU1FID09ICdBcnJheScgPyBwcm90by5lbnRyaWVzIHx8ICRuYXRpdmUgOiAkbmF0aXZlO1xuICB2YXIgbWV0aG9kcywga2V5LCBJdGVyYXRvclByb3RvdHlwZTtcbiAgLy8gRml4IG5hdGl2ZVxuICBpZiAoJGFueU5hdGl2ZSkge1xuICAgIEl0ZXJhdG9yUHJvdG90eXBlID0gZ2V0UHJvdG90eXBlT2YoJGFueU5hdGl2ZS5jYWxsKG5ldyBCYXNlKCkpKTtcbiAgICBpZiAoSXRlcmF0b3JQcm90b3R5cGUgIT09IE9iamVjdC5wcm90b3R5cGUgJiYgSXRlcmF0b3JQcm90b3R5cGUubmV4dCkge1xuICAgICAgLy8gU2V0IEBAdG9TdHJpbmdUYWcgdG8gbmF0aXZlIGl0ZXJhdG9yc1xuICAgICAgc2V0VG9TdHJpbmdUYWcoSXRlcmF0b3JQcm90b3R5cGUsIFRBRywgdHJ1ZSk7XG4gICAgICAvLyBmaXggZm9yIHNvbWUgb2xkIGVuZ2luZXNcbiAgICAgIGlmICghTElCUkFSWSAmJiB0eXBlb2YgSXRlcmF0b3JQcm90b3R5cGVbSVRFUkFUT1JdICE9ICdmdW5jdGlvbicpIGhpZGUoSXRlcmF0b3JQcm90b3R5cGUsIElURVJBVE9SLCByZXR1cm5UaGlzKTtcbiAgICB9XG4gIH1cbiAgLy8gZml4IEFycmF5I3t2YWx1ZXMsIEBAaXRlcmF0b3J9Lm5hbWUgaW4gVjggLyBGRlxuICBpZiAoREVGX1ZBTFVFUyAmJiAkbmF0aXZlICYmICRuYXRpdmUubmFtZSAhPT0gVkFMVUVTKSB7XG4gICAgVkFMVUVTX0JVRyA9IHRydWU7XG4gICAgJGRlZmF1bHQgPSBmdW5jdGlvbiB2YWx1ZXMoKSB7IHJldHVybiAkbmF0aXZlLmNhbGwodGhpcyk7IH07XG4gIH1cbiAgLy8gRGVmaW5lIGl0ZXJhdG9yXG4gIGlmICgoIUxJQlJBUlkgfHwgRk9SQ0VEKSAmJiAoQlVHR1kgfHwgVkFMVUVTX0JVRyB8fCAhcHJvdG9bSVRFUkFUT1JdKSkge1xuICAgIGhpZGUocHJvdG8sIElURVJBVE9SLCAkZGVmYXVsdCk7XG4gIH1cbiAgLy8gUGx1ZyBmb3IgbGlicmFyeVxuICBJdGVyYXRvcnNbTkFNRV0gPSAkZGVmYXVsdDtcbiAgSXRlcmF0b3JzW1RBR10gPSByZXR1cm5UaGlzO1xuICBpZiAoREVGQVVMVCkge1xuICAgIG1ldGhvZHMgPSB7XG4gICAgICB2YWx1ZXM6IERFRl9WQUxVRVMgPyAkZGVmYXVsdCA6IGdldE1ldGhvZChWQUxVRVMpLFxuICAgICAga2V5czogSVNfU0VUID8gJGRlZmF1bHQgOiBnZXRNZXRob2QoS0VZUyksXG4gICAgICBlbnRyaWVzOiAkZW50cmllc1xuICAgIH07XG4gICAgaWYgKEZPUkNFRCkgZm9yIChrZXkgaW4gbWV0aG9kcykge1xuICAgICAgaWYgKCEoa2V5IGluIHByb3RvKSkgcmVkZWZpbmUocHJvdG8sIGtleSwgbWV0aG9kc1trZXldKTtcbiAgICB9IGVsc2UgJGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LkYgKiAoQlVHR1kgfHwgVkFMVUVTX0JVRyksIE5BTUUsIG1ldGhvZHMpO1xuICB9XG4gIHJldHVybiBtZXRob2RzO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1kZWZpbmUuanNcbi8vIG1vZHVsZSBpZCA9IC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1kZWZpbmUuanNcbi8vIG1vZHVsZSBjaHVua3MgPSBtYWluIiwidmFyIElURVJBVE9SID0gcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJyk7XG52YXIgU0FGRV9DTE9TSU5HID0gZmFsc2U7XG5cbnRyeSB7XG4gIHZhciByaXRlciA9IFs3XVtJVEVSQVRPUl0oKTtcbiAgcml0ZXJbJ3JldHVybiddID0gZnVuY3Rpb24gKCkgeyBTQUZFX0NMT1NJTkcgPSB0cnVlOyB9O1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdGhyb3ctbGl0ZXJhbFxuICBBcnJheS5mcm9tKHJpdGVyLCBmdW5jdGlvbiAoKSB7IHRocm93IDI7IH0pO1xufSBjYXRjaCAoZSkgeyAvKiBlbXB0eSAqLyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGV4ZWMsIHNraXBDbG9zaW5nKSB7XG4gIGlmICghc2tpcENsb3NpbmcgJiYgIVNBRkVfQ0xPU0lORykgcmV0dXJuIGZhbHNlO1xuICB2YXIgc2FmZSA9IGZhbHNlO1xuICB0cnkge1xuICAgIHZhciBhcnIgPSBbN107XG4gICAgdmFyIGl0ZXIgPSBhcnJbSVRFUkFUT1JdKCk7XG4gICAgaXRlci5uZXh0ID0gZnVuY3Rpb24gKCkgeyByZXR1cm4geyBkb25lOiBzYWZlID0gdHJ1ZSB9OyB9O1xuICAgIGFycltJVEVSQVRPUl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiBpdGVyOyB9O1xuICAgIGV4ZWMoYXJyKTtcbiAgfSBjYXRjaCAoZSkgeyAvKiBlbXB0eSAqLyB9XG4gIHJldHVybiBzYWZlO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1kZXRlY3QuanNcbi8vIG1vZHVsZSBpZCA9IC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1kZXRlY3QuanNcbi8vIG1vZHVsZSBjaHVua3MgPSBtYWluIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZG9uZSwgdmFsdWUpIHtcbiAgcmV0dXJuIHsgdmFsdWU6IHZhbHVlLCBkb25lOiAhIWRvbmUgfTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItc3RlcC5qc1xuLy8gbW9kdWxlIGlkID0gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLXN0ZXAuanNcbi8vIG1vZHVsZSBjaHVua3MgPSBtYWluIiwibW9kdWxlLmV4cG9ydHMgPSB7fTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlcmF0b3JzLmpzXG4vLyBtb2R1bGUgaWQgPSAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXJhdG9ycy5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IG1haW4iLCJtb2R1bGUuZXhwb3J0cyA9IHRydWU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2xpYnJhcnkuanNcbi8vIG1vZHVsZSBpZCA9IC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fbGlicmFyeS5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IG1haW4iLCJ2YXIgTUVUQSA9IHJlcXVpcmUoJy4vX3VpZCcpKCdtZXRhJyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbnZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciBzZXREZXNjID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJykuZjtcbnZhciBpZCA9IDA7XG52YXIgaXNFeHRlbnNpYmxlID0gT2JqZWN0LmlzRXh0ZW5zaWJsZSB8fCBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0cnVlO1xufTtcbnZhciBGUkVFWkUgPSAhcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBpc0V4dGVuc2libGUoT2JqZWN0LnByZXZlbnRFeHRlbnNpb25zKHt9KSk7XG59KTtcbnZhciBzZXRNZXRhID0gZnVuY3Rpb24gKGl0KSB7XG4gIHNldERlc2MoaXQsIE1FVEEsIHsgdmFsdWU6IHtcbiAgICBpOiAnTycgKyArK2lkLCAvLyBvYmplY3QgSURcbiAgICB3OiB7fSAgICAgICAgICAvLyB3ZWFrIGNvbGxlY3Rpb25zIElEc1xuICB9IH0pO1xufTtcbnZhciBmYXN0S2V5ID0gZnVuY3Rpb24gKGl0LCBjcmVhdGUpIHtcbiAgLy8gcmV0dXJuIHByaW1pdGl2ZSB3aXRoIHByZWZpeFxuICBpZiAoIWlzT2JqZWN0KGl0KSkgcmV0dXJuIHR5cGVvZiBpdCA9PSAnc3ltYm9sJyA/IGl0IDogKHR5cGVvZiBpdCA9PSAnc3RyaW5nJyA/ICdTJyA6ICdQJykgKyBpdDtcbiAgaWYgKCFoYXMoaXQsIE1FVEEpKSB7XG4gICAgLy8gY2FuJ3Qgc2V0IG1ldGFkYXRhIHRvIHVuY2F1Z2h0IGZyb3plbiBvYmplY3RcbiAgICBpZiAoIWlzRXh0ZW5zaWJsZShpdCkpIHJldHVybiAnRic7XG4gICAgLy8gbm90IG5lY2Vzc2FyeSB0byBhZGQgbWV0YWRhdGFcbiAgICBpZiAoIWNyZWF0ZSkgcmV0dXJuICdFJztcbiAgICAvLyBhZGQgbWlzc2luZyBtZXRhZGF0YVxuICAgIHNldE1ldGEoaXQpO1xuICAvLyByZXR1cm4gb2JqZWN0IElEXG4gIH0gcmV0dXJuIGl0W01FVEFdLmk7XG59O1xudmFyIGdldFdlYWsgPSBmdW5jdGlvbiAoaXQsIGNyZWF0ZSkge1xuICBpZiAoIWhhcyhpdCwgTUVUQSkpIHtcbiAgICAvLyBjYW4ndCBzZXQgbWV0YWRhdGEgdG8gdW5jYXVnaHQgZnJvemVuIG9iamVjdFxuICAgIGlmICghaXNFeHRlbnNpYmxlKGl0KSkgcmV0dXJuIHRydWU7XG4gICAgLy8gbm90IG5lY2Vzc2FyeSB0byBhZGQgbWV0YWRhdGFcbiAgICBpZiAoIWNyZWF0ZSkgcmV0dXJuIGZhbHNlO1xuICAgIC8vIGFkZCBtaXNzaW5nIG1ldGFkYXRhXG4gICAgc2V0TWV0YShpdCk7XG4gIC8vIHJldHVybiBoYXNoIHdlYWsgY29sbGVjdGlvbnMgSURzXG4gIH0gcmV0dXJuIGl0W01FVEFdLnc7XG59O1xuLy8gYWRkIG1ldGFkYXRhIG9uIGZyZWV6ZS1mYW1pbHkgbWV0aG9kcyBjYWxsaW5nXG52YXIgb25GcmVlemUgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKEZSRUVaRSAmJiBtZXRhLk5FRUQgJiYgaXNFeHRlbnNpYmxlKGl0KSAmJiAhaGFzKGl0LCBNRVRBKSkgc2V0TWV0YShpdCk7XG4gIHJldHVybiBpdDtcbn07XG52YXIgbWV0YSA9IG1vZHVsZS5leHBvcnRzID0ge1xuICBLRVk6IE1FVEEsXG4gIE5FRUQ6IGZhbHNlLFxuICBmYXN0S2V5OiBmYXN0S2V5LFxuICBnZXRXZWFrOiBnZXRXZWFrLFxuICBvbkZyZWV6ZTogb25GcmVlemVcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX21ldGEuanNcbi8vIG1vZHVsZSBpZCA9IC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fbWV0YS5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IG1haW4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgbWFjcm90YXNrID0gcmVxdWlyZSgnLi9fdGFzaycpLnNldDtcbnZhciBPYnNlcnZlciA9IGdsb2JhbC5NdXRhdGlvbk9ic2VydmVyIHx8IGdsb2JhbC5XZWJLaXRNdXRhdGlvbk9ic2VydmVyO1xudmFyIHByb2Nlc3MgPSBnbG9iYWwucHJvY2VzcztcbnZhciBQcm9taXNlID0gZ2xvYmFsLlByb21pc2U7XG52YXIgaXNOb2RlID0gcmVxdWlyZSgnLi9fY29mJykocHJvY2VzcykgPT0gJ3Byb2Nlc3MnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhlYWQsIGxhc3QsIG5vdGlmeTtcblxuICB2YXIgZmx1c2ggPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHBhcmVudCwgZm47XG4gICAgaWYgKGlzTm9kZSAmJiAocGFyZW50ID0gcHJvY2Vzcy5kb21haW4pKSBwYXJlbnQuZXhpdCgpO1xuICAgIHdoaWxlIChoZWFkKSB7XG4gICAgICBmbiA9IGhlYWQuZm47XG4gICAgICBoZWFkID0gaGVhZC5uZXh0O1xuICAgICAgdHJ5IHtcbiAgICAgICAgZm4oKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgaWYgKGhlYWQpIG5vdGlmeSgpO1xuICAgICAgICBlbHNlIGxhc3QgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRocm93IGU7XG4gICAgICB9XG4gICAgfSBsYXN0ID0gdW5kZWZpbmVkO1xuICAgIGlmIChwYXJlbnQpIHBhcmVudC5lbnRlcigpO1xuICB9O1xuXG4gIC8vIE5vZGUuanNcbiAgaWYgKGlzTm9kZSkge1xuICAgIG5vdGlmeSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHByb2Nlc3MubmV4dFRpY2soZmx1c2gpO1xuICAgIH07XG4gIC8vIGJyb3dzZXJzIHdpdGggTXV0YXRpb25PYnNlcnZlciwgZXhjZXB0IGlPUyBTYWZhcmkgLSBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvMzM5XG4gIH0gZWxzZSBpZiAoT2JzZXJ2ZXIgJiYgIShnbG9iYWwubmF2aWdhdG9yICYmIGdsb2JhbC5uYXZpZ2F0b3Iuc3RhbmRhbG9uZSkpIHtcbiAgICB2YXIgdG9nZ2xlID0gdHJ1ZTtcbiAgICB2YXIgbm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCcnKTtcbiAgICBuZXcgT2JzZXJ2ZXIoZmx1c2gpLm9ic2VydmUobm9kZSwgeyBjaGFyYWN0ZXJEYXRhOiB0cnVlIH0pOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLW5ld1xuICAgIG5vdGlmeSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIG5vZGUuZGF0YSA9IHRvZ2dsZSA9ICF0b2dnbGU7XG4gICAgfTtcbiAgLy8gZW52aXJvbm1lbnRzIHdpdGggbWF5YmUgbm9uLWNvbXBsZXRlbHkgY29ycmVjdCwgYnV0IGV4aXN0ZW50IFByb21pc2VcbiAgfSBlbHNlIGlmIChQcm9taXNlICYmIFByb21pc2UucmVzb2x2ZSkge1xuICAgIC8vIFByb21pc2UucmVzb2x2ZSB3aXRob3V0IGFuIGFyZ3VtZW50IHRocm93cyBhbiBlcnJvciBpbiBMRyBXZWJPUyAyXG4gICAgdmFyIHByb21pc2UgPSBQcm9taXNlLnJlc29sdmUodW5kZWZpbmVkKTtcbiAgICBub3RpZnkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBwcm9taXNlLnRoZW4oZmx1c2gpO1xuICAgIH07XG4gIC8vIGZvciBvdGhlciBlbnZpcm9ubWVudHMgLSBtYWNyb3Rhc2sgYmFzZWQgb246XG4gIC8vIC0gc2V0SW1tZWRpYXRlXG4gIC8vIC0gTWVzc2FnZUNoYW5uZWxcbiAgLy8gLSB3aW5kb3cucG9zdE1lc3NhZ1xuICAvLyAtIG9ucmVhZHlzdGF0ZWNoYW5nZVxuICAvLyAtIHNldFRpbWVvdXRcbiAgfSBlbHNlIHtcbiAgICBub3RpZnkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBzdHJhbmdlIElFICsgd2VicGFjayBkZXYgc2VydmVyIGJ1ZyAtIHVzZSAuY2FsbChnbG9iYWwpXG4gICAgICBtYWNyb3Rhc2suY2FsbChnbG9iYWwsIGZsdXNoKTtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChmbikge1xuICAgIHZhciB0YXNrID0geyBmbjogZm4sIG5leHQ6IHVuZGVmaW5lZCB9O1xuICAgIGlmIChsYXN0KSBsYXN0Lm5leHQgPSB0YXNrO1xuICAgIGlmICghaGVhZCkge1xuICAgICAgaGVhZCA9IHRhc2s7XG4gICAgICBub3RpZnkoKTtcbiAgICB9IGxhc3QgPSB0YXNrO1xuICB9O1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fbWljcm90YXNrLmpzXG4vLyBtb2R1bGUgaWQgPSAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX21pY3JvdGFzay5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IG1haW4iLCIndXNlIHN0cmljdCc7XG4vLyAyNS40LjEuNSBOZXdQcm9taXNlQ2FwYWJpbGl0eShDKVxudmFyIGFGdW5jdGlvbiA9IHJlcXVpcmUoJy4vX2EtZnVuY3Rpb24nKTtcblxuZnVuY3Rpb24gUHJvbWlzZUNhcGFiaWxpdHkoQykge1xuICB2YXIgcmVzb2x2ZSwgcmVqZWN0O1xuICB0aGlzLnByb21pc2UgPSBuZXcgQyhmdW5jdGlvbiAoJCRyZXNvbHZlLCAkJHJlamVjdCkge1xuICAgIGlmIChyZXNvbHZlICE9PSB1bmRlZmluZWQgfHwgcmVqZWN0ICE9PSB1bmRlZmluZWQpIHRocm93IFR5cGVFcnJvcignQmFkIFByb21pc2UgY29uc3RydWN0b3InKTtcbiAgICByZXNvbHZlID0gJCRyZXNvbHZlO1xuICAgIHJlamVjdCA9ICQkcmVqZWN0O1xuICB9KTtcbiAgdGhpcy5yZXNvbHZlID0gYUZ1bmN0aW9uKHJlc29sdmUpO1xuICB0aGlzLnJlamVjdCA9IGFGdW5jdGlvbihyZWplY3QpO1xufVxuXG5tb2R1bGUuZXhwb3J0cy5mID0gZnVuY3Rpb24gKEMpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlQ2FwYWJpbGl0eShDKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX25ldy1wcm9taXNlLWNhcGFiaWxpdHkuanNcbi8vIG1vZHVsZSBpZCA9IC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fbmV3LXByb21pc2UtY2FwYWJpbGl0eS5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IG1haW4iLCIndXNlIHN0cmljdCc7XG4vLyAxOS4xLjIuMSBPYmplY3QuYXNzaWduKHRhcmdldCwgc291cmNlLCAuLi4pXG52YXIgZ2V0S2V5cyA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJyk7XG52YXIgZ09QUyA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BzJyk7XG52YXIgcElFID0gcmVxdWlyZSgnLi9fb2JqZWN0LXBpZScpO1xudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0Jyk7XG52YXIgSU9iamVjdCA9IHJlcXVpcmUoJy4vX2lvYmplY3QnKTtcbnZhciAkYXNzaWduID0gT2JqZWN0LmFzc2lnbjtcblxuLy8gc2hvdWxkIHdvcmsgd2l0aCBzeW1ib2xzIGFuZCBzaG91bGQgaGF2ZSBkZXRlcm1pbmlzdGljIHByb3BlcnR5IG9yZGVyIChWOCBidWcpXG5tb2R1bGUuZXhwb3J0cyA9ICEkYXNzaWduIHx8IHJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24gKCkge1xuICB2YXIgQSA9IHt9O1xuICB2YXIgQiA9IHt9O1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgdmFyIFMgPSBTeW1ib2woKTtcbiAgdmFyIEsgPSAnYWJjZGVmZ2hpamtsbW5vcHFyc3QnO1xuICBBW1NdID0gNztcbiAgSy5zcGxpdCgnJykuZm9yRWFjaChmdW5jdGlvbiAoaykgeyBCW2tdID0gazsgfSk7XG4gIHJldHVybiAkYXNzaWduKHt9LCBBKVtTXSAhPSA3IHx8IE9iamVjdC5rZXlzKCRhc3NpZ24oe30sIEIpKS5qb2luKCcnKSAhPSBLO1xufSkgPyBmdW5jdGlvbiBhc3NpZ24odGFyZ2V0LCBzb3VyY2UpIHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtdmFyc1xuICB2YXIgVCA9IHRvT2JqZWN0KHRhcmdldCk7XG4gIHZhciBhTGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgdmFyIGluZGV4ID0gMTtcbiAgdmFyIGdldFN5bWJvbHMgPSBnT1BTLmY7XG4gIHZhciBpc0VudW0gPSBwSUUuZjtcbiAgd2hpbGUgKGFMZW4gPiBpbmRleCkge1xuICAgIHZhciBTID0gSU9iamVjdChhcmd1bWVudHNbaW5kZXgrK10pO1xuICAgIHZhciBrZXlzID0gZ2V0U3ltYm9scyA/IGdldEtleXMoUykuY29uY2F0KGdldFN5bWJvbHMoUykpIDogZ2V0S2V5cyhTKTtcbiAgICB2YXIgbGVuZ3RoID0ga2V5cy5sZW5ndGg7XG4gICAgdmFyIGogPSAwO1xuICAgIHZhciBrZXk7XG4gICAgd2hpbGUgKGxlbmd0aCA+IGopIGlmIChpc0VudW0uY2FsbChTLCBrZXkgPSBrZXlzW2orK10pKSBUW2tleV0gPSBTW2tleV07XG4gIH0gcmV0dXJuIFQ7XG59IDogJGFzc2lnbjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWFzc2lnbi5qc1xuLy8gbW9kdWxlIGlkID0gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtYXNzaWduLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gbWFpbiIsIi8vIDE5LjEuMi4yIC8gMTUuMi4zLjUgT2JqZWN0LmNyZWF0ZShPIFssIFByb3BlcnRpZXNdKVxudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgZFBzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwcycpO1xudmFyIGVudW1CdWdLZXlzID0gcmVxdWlyZSgnLi9fZW51bS1idWcta2V5cycpO1xudmFyIElFX1BST1RPID0gcmVxdWlyZSgnLi9fc2hhcmVkLWtleScpKCdJRV9QUk9UTycpO1xudmFyIEVtcHR5ID0gZnVuY3Rpb24gKCkgeyAvKiBlbXB0eSAqLyB9O1xudmFyIFBST1RPVFlQRSA9ICdwcm90b3R5cGUnO1xuXG4vLyBDcmVhdGUgb2JqZWN0IHdpdGggZmFrZSBgbnVsbGAgcHJvdG90eXBlOiB1c2UgaWZyYW1lIE9iamVjdCB3aXRoIGNsZWFyZWQgcHJvdG90eXBlXG52YXIgY3JlYXRlRGljdCA9IGZ1bmN0aW9uICgpIHtcbiAgLy8gVGhyYXNoLCB3YXN0ZSBhbmQgc29kb215OiBJRSBHQyBidWdcbiAgdmFyIGlmcmFtZSA9IHJlcXVpcmUoJy4vX2RvbS1jcmVhdGUnKSgnaWZyYW1lJyk7XG4gIHZhciBpID0gZW51bUJ1Z0tleXMubGVuZ3RoO1xuICB2YXIgbHQgPSAnPCc7XG4gIHZhciBndCA9ICc+JztcbiAgdmFyIGlmcmFtZURvY3VtZW50O1xuICBpZnJhbWUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgcmVxdWlyZSgnLi9faHRtbCcpLmFwcGVuZENoaWxkKGlmcmFtZSk7XG4gIGlmcmFtZS5zcmMgPSAnamF2YXNjcmlwdDonOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXNjcmlwdC11cmxcbiAgLy8gY3JlYXRlRGljdCA9IGlmcmFtZS5jb250ZW50V2luZG93Lk9iamVjdDtcbiAgLy8gaHRtbC5yZW1vdmVDaGlsZChpZnJhbWUpO1xuICBpZnJhbWVEb2N1bWVudCA9IGlmcmFtZS5jb250ZW50V2luZG93LmRvY3VtZW50O1xuICBpZnJhbWVEb2N1bWVudC5vcGVuKCk7XG4gIGlmcmFtZURvY3VtZW50LndyaXRlKGx0ICsgJ3NjcmlwdCcgKyBndCArICdkb2N1bWVudC5GPU9iamVjdCcgKyBsdCArICcvc2NyaXB0JyArIGd0KTtcbiAgaWZyYW1lRG9jdW1lbnQuY2xvc2UoKTtcbiAgY3JlYXRlRGljdCA9IGlmcmFtZURvY3VtZW50LkY7XG4gIHdoaWxlIChpLS0pIGRlbGV0ZSBjcmVhdGVEaWN0W1BST1RPVFlQRV1bZW51bUJ1Z0tleXNbaV1dO1xuICByZXR1cm4gY3JlYXRlRGljdCgpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuY3JlYXRlIHx8IGZ1bmN0aW9uIGNyZWF0ZShPLCBQcm9wZXJ0aWVzKSB7XG4gIHZhciByZXN1bHQ7XG4gIGlmIChPICE9PSBudWxsKSB7XG4gICAgRW1wdHlbUFJPVE9UWVBFXSA9IGFuT2JqZWN0KE8pO1xuICAgIHJlc3VsdCA9IG5ldyBFbXB0eSgpO1xuICAgIEVtcHR5W1BST1RPVFlQRV0gPSBudWxsO1xuICAgIC8vIGFkZCBcIl9fcHJvdG9fX1wiIGZvciBPYmplY3QuZ2V0UHJvdG90eXBlT2YgcG9seWZpbGxcbiAgICByZXN1bHRbSUVfUFJPVE9dID0gTztcbiAgfSBlbHNlIHJlc3VsdCA9IGNyZWF0ZURpY3QoKTtcbiAgcmV0dXJuIFByb3BlcnRpZXMgPT09IHVuZGVmaW5lZCA/IHJlc3VsdCA6IGRQcyhyZXN1bHQsIFByb3BlcnRpZXMpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWNyZWF0ZS5qc1xuLy8gbW9kdWxlIGlkID0gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtY3JlYXRlLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gbWFpbiIsInZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIElFOF9ET01fREVGSU5FID0gcmVxdWlyZSgnLi9faWU4LWRvbS1kZWZpbmUnKTtcbnZhciB0b1ByaW1pdGl2ZSA9IHJlcXVpcmUoJy4vX3RvLXByaW1pdGl2ZScpO1xudmFyIGRQID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xuXG5leHBvcnRzLmYgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gT2JqZWN0LmRlZmluZVByb3BlcnR5IDogZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcykge1xuICBhbk9iamVjdChPKTtcbiAgUCA9IHRvUHJpbWl0aXZlKFAsIHRydWUpO1xuICBhbk9iamVjdChBdHRyaWJ1dGVzKTtcbiAgaWYgKElFOF9ET01fREVGSU5FKSB0cnkge1xuICAgIHJldHVybiBkUChPLCBQLCBBdHRyaWJ1dGVzKTtcbiAgfSBjYXRjaCAoZSkgeyAvKiBlbXB0eSAqLyB9XG4gIGlmICgnZ2V0JyBpbiBBdHRyaWJ1dGVzIHx8ICdzZXQnIGluIEF0dHJpYnV0ZXMpIHRocm93IFR5cGVFcnJvcignQWNjZXNzb3JzIG5vdCBzdXBwb3J0ZWQhJyk7XG4gIGlmICgndmFsdWUnIGluIEF0dHJpYnV0ZXMpIE9bUF0gPSBBdHRyaWJ1dGVzLnZhbHVlO1xuICByZXR1cm4gTztcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1kcC5qc1xuLy8gbW9kdWxlIGlkID0gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZHAuanNcbi8vIG1vZHVsZSBjaHVua3MgPSBtYWluIiwidmFyIGRQID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciBnZXRLZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gT2JqZWN0LmRlZmluZVByb3BlcnRpZXMgOiBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKE8sIFByb3BlcnRpZXMpIHtcbiAgYW5PYmplY3QoTyk7XG4gIHZhciBrZXlzID0gZ2V0S2V5cyhQcm9wZXJ0aWVzKTtcbiAgdmFyIGxlbmd0aCA9IGtleXMubGVuZ3RoO1xuICB2YXIgaSA9IDA7XG4gIHZhciBQO1xuICB3aGlsZSAobGVuZ3RoID4gaSkgZFAuZihPLCBQID0ga2V5c1tpKytdLCBQcm9wZXJ0aWVzW1BdKTtcbiAgcmV0dXJuIE87XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZHBzLmpzXG4vLyBtb2R1bGUgaWQgPSAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1kcHMuanNcbi8vIG1vZHVsZSBjaHVua3MgPSBtYWluIiwidmFyIHBJRSA9IHJlcXVpcmUoJy4vX29iamVjdC1waWUnKTtcbnZhciBjcmVhdGVEZXNjID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpO1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcbnZhciB0b1ByaW1pdGl2ZSA9IHJlcXVpcmUoJy4vX3RvLXByaW1pdGl2ZScpO1xudmFyIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpO1xudmFyIElFOF9ET01fREVGSU5FID0gcmVxdWlyZSgnLi9faWU4LWRvbS1kZWZpbmUnKTtcbnZhciBnT1BEID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxuZXhwb3J0cy5mID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IGdPUEQgOiBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoTywgUCkge1xuICBPID0gdG9JT2JqZWN0KE8pO1xuICBQID0gdG9QcmltaXRpdmUoUCwgdHJ1ZSk7XG4gIGlmIChJRThfRE9NX0RFRklORSkgdHJ5IHtcbiAgICByZXR1cm4gZ09QRChPLCBQKTtcbiAgfSBjYXRjaCAoZSkgeyAvKiBlbXB0eSAqLyB9XG4gIGlmIChoYXMoTywgUCkpIHJldHVybiBjcmVhdGVEZXNjKCFwSUUuZi5jYWxsKE8sIFApLCBPW1BdKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1nb3BkLmpzXG4vLyBtb2R1bGUgaWQgPSAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1nb3BkLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gbWFpbiIsIi8vIGZhbGxiYWNrIGZvciBJRTExIGJ1Z2d5IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzIHdpdGggaWZyYW1lIGFuZCB3aW5kb3dcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG52YXIgZ09QTiA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BuJykuZjtcbnZhciB0b1N0cmluZyA9IHt9LnRvU3RyaW5nO1xuXG52YXIgd2luZG93TmFtZXMgPSB0eXBlb2Ygd2luZG93ID09ICdvYmplY3QnICYmIHdpbmRvdyAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lc1xuICA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHdpbmRvdykgOiBbXTtcblxudmFyIGdldFdpbmRvd05hbWVzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGdPUE4oaXQpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIHdpbmRvd05hbWVzLnNsaWNlKCk7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzLmYgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eU5hbWVzKGl0KSB7XG4gIHJldHVybiB3aW5kb3dOYW1lcyAmJiB0b1N0cmluZy5jYWxsKGl0KSA9PSAnW29iamVjdCBXaW5kb3ddJyA/IGdldFdpbmRvd05hbWVzKGl0KSA6IGdPUE4odG9JT2JqZWN0KGl0KSk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ29wbi1leHQuanNcbi8vIG1vZHVsZSBpZCA9IC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdvcG4tZXh0LmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gbWFpbiIsIi8vIDE5LjEuMi43IC8gMTUuMi4zLjQgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoTylcbnZhciAka2V5cyA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzLWludGVybmFsJyk7XG52YXIgaGlkZGVuS2V5cyA9IHJlcXVpcmUoJy4vX2VudW0tYnVnLWtleXMnKS5jb25jYXQoJ2xlbmd0aCcsICdwcm90b3R5cGUnKTtcblxuZXhwb3J0cy5mID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMgfHwgZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlOYW1lcyhPKSB7XG4gIHJldHVybiAka2V5cyhPLCBoaWRkZW5LZXlzKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1nb3BuLmpzXG4vLyBtb2R1bGUgaWQgPSAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1nb3BuLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gbWFpbiIsImV4cG9ydHMuZiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1nb3BzLmpzXG4vLyBtb2R1bGUgaWQgPSAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1nb3BzLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gbWFpbiIsIi8vIDE5LjEuMi45IC8gMTUuMi4zLjIgT2JqZWN0LmdldFByb3RvdHlwZU9mKE8pXG52YXIgaGFzID0gcmVxdWlyZSgnLi9faGFzJyk7XG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuL190by1vYmplY3QnKTtcbnZhciBJRV9QUk9UTyA9IHJlcXVpcmUoJy4vX3NoYXJlZC1rZXknKSgnSUVfUFJPVE8nKTtcbnZhciBPYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmdldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIChPKSB7XG4gIE8gPSB0b09iamVjdChPKTtcbiAgaWYgKGhhcyhPLCBJRV9QUk9UTykpIHJldHVybiBPW0lFX1BST1RPXTtcbiAgaWYgKHR5cGVvZiBPLmNvbnN0cnVjdG9yID09ICdmdW5jdGlvbicgJiYgTyBpbnN0YW5jZW9mIE8uY29uc3RydWN0b3IpIHtcbiAgICByZXR1cm4gTy5jb25zdHJ1Y3Rvci5wcm90b3R5cGU7XG4gIH0gcmV0dXJuIE8gaW5zdGFuY2VvZiBPYmplY3QgPyBPYmplY3RQcm90byA6IG51bGw7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ3BvLmpzXG4vLyBtb2R1bGUgaWQgPSAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1ncG8uanNcbi8vIG1vZHVsZSBjaHVua3MgPSBtYWluIiwidmFyIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpO1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcbnZhciBhcnJheUluZGV4T2YgPSByZXF1aXJlKCcuL19hcnJheS1pbmNsdWRlcycpKGZhbHNlKTtcbnZhciBJRV9QUk9UTyA9IHJlcXVpcmUoJy4vX3NoYXJlZC1rZXknKSgnSUVfUFJPVE8nKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob2JqZWN0LCBuYW1lcykge1xuICB2YXIgTyA9IHRvSU9iamVjdChvYmplY3QpO1xuICB2YXIgaSA9IDA7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgdmFyIGtleTtcbiAgZm9yIChrZXkgaW4gTykgaWYgKGtleSAhPSBJRV9QUk9UTykgaGFzKE8sIGtleSkgJiYgcmVzdWx0LnB1c2goa2V5KTtcbiAgLy8gRG9uJ3QgZW51bSBidWcgJiBoaWRkZW4ga2V5c1xuICB3aGlsZSAobmFtZXMubGVuZ3RoID4gaSkgaWYgKGhhcyhPLCBrZXkgPSBuYW1lc1tpKytdKSkge1xuICAgIH5hcnJheUluZGV4T2YocmVzdWx0LCBrZXkpIHx8IHJlc3VsdC5wdXNoKGtleSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1rZXlzLWludGVybmFsLmpzXG4vLyBtb2R1bGUgaWQgPSAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1rZXlzLWludGVybmFsLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gbWFpbiIsIi8vIDE5LjEuMi4xNCAvIDE1LjIuMy4xNCBPYmplY3Qua2V5cyhPKVxudmFyICRrZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMtaW50ZXJuYWwnKTtcbnZhciBlbnVtQnVnS2V5cyA9IHJlcXVpcmUoJy4vX2VudW0tYnVnLWtleXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3Qua2V5cyB8fCBmdW5jdGlvbiBrZXlzKE8pIHtcbiAgcmV0dXJuICRrZXlzKE8sIGVudW1CdWdLZXlzKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1rZXlzLmpzXG4vLyBtb2R1bGUgaWQgPSAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1rZXlzLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gbWFpbiIsImV4cG9ydHMuZiA9IHt9LnByb3BlcnR5SXNFbnVtZXJhYmxlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtcGllLmpzXG4vLyBtb2R1bGUgaWQgPSAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1waWUuanNcbi8vIG1vZHVsZSBjaHVua3MgPSBtYWluIiwiLy8gbW9zdCBPYmplY3QgbWV0aG9kcyBieSBFUzYgc2hvdWxkIGFjY2VwdCBwcmltaXRpdmVzXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xudmFyIGNvcmUgPSByZXF1aXJlKCcuL19jb3JlJyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuL19mYWlscycpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoS0VZLCBleGVjKSB7XG4gIHZhciBmbiA9IChjb3JlLk9iamVjdCB8fCB7fSlbS0VZXSB8fCBPYmplY3RbS0VZXTtcbiAgdmFyIGV4cCA9IHt9O1xuICBleHBbS0VZXSA9IGV4ZWMoZm4pO1xuICAkZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqIGZhaWxzKGZ1bmN0aW9uICgpIHsgZm4oMSk7IH0pLCAnT2JqZWN0JywgZXhwKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1zYXAuanNcbi8vIG1vZHVsZSBpZCA9IC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LXNhcC5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IG1haW4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChleGVjKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIHsgZTogZmFsc2UsIHY6IGV4ZWMoKSB9O1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIHsgZTogdHJ1ZSwgdjogZSB9O1xuICB9XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19wZXJmb3JtLmpzXG4vLyBtb2R1bGUgaWQgPSAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3BlcmZvcm0uanNcbi8vIG1vZHVsZSBjaHVua3MgPSBtYWluIiwidmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbnZhciBuZXdQcm9taXNlQ2FwYWJpbGl0eSA9IHJlcXVpcmUoJy4vX25ldy1wcm9taXNlLWNhcGFiaWxpdHknKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoQywgeCkge1xuICBhbk9iamVjdChDKTtcbiAgaWYgKGlzT2JqZWN0KHgpICYmIHguY29uc3RydWN0b3IgPT09IEMpIHJldHVybiB4O1xuICB2YXIgcHJvbWlzZUNhcGFiaWxpdHkgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eS5mKEMpO1xuICB2YXIgcmVzb2x2ZSA9IHByb21pc2VDYXBhYmlsaXR5LnJlc29sdmU7XG4gIHJlc29sdmUoeCk7XG4gIHJldHVybiBwcm9taXNlQ2FwYWJpbGl0eS5wcm9taXNlO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fcHJvbWlzZS1yZXNvbHZlLmpzXG4vLyBtb2R1bGUgaWQgPSAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3Byb21pc2UtcmVzb2x2ZS5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IG1haW4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChiaXRtYXAsIHZhbHVlKSB7XG4gIHJldHVybiB7XG4gICAgZW51bWVyYWJsZTogIShiaXRtYXAgJiAxKSxcbiAgICBjb25maWd1cmFibGU6ICEoYml0bWFwICYgMiksXG4gICAgd3JpdGFibGU6ICEoYml0bWFwICYgNCksXG4gICAgdmFsdWU6IHZhbHVlXG4gIH07XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19wcm9wZXJ0eS1kZXNjLmpzXG4vLyBtb2R1bGUgaWQgPSAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3Byb3BlcnR5LWRlc2MuanNcbi8vIG1vZHVsZSBjaHVua3MgPSBtYWluIiwidmFyIGhpZGUgPSByZXF1aXJlKCcuL19oaWRlJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh0YXJnZXQsIHNyYywgc2FmZSkge1xuICBmb3IgKHZhciBrZXkgaW4gc3JjKSB7XG4gICAgaWYgKHNhZmUgJiYgdGFyZ2V0W2tleV0pIHRhcmdldFtrZXldID0gc3JjW2tleV07XG4gICAgZWxzZSBoaWRlKHRhcmdldCwga2V5LCBzcmNba2V5XSk7XG4gIH0gcmV0dXJuIHRhcmdldDtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3JlZGVmaW5lLWFsbC5qc1xuLy8gbW9kdWxlIGlkID0gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19yZWRlZmluZS1hbGwuanNcbi8vIG1vZHVsZSBjaHVua3MgPSBtYWluIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19oaWRlJyk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3JlZGVmaW5lLmpzXG4vLyBtb2R1bGUgaWQgPSAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3JlZGVmaW5lLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gbWFpbiIsIi8vIFdvcmtzIHdpdGggX19wcm90b19fIG9ubHkuIE9sZCB2OCBjYW4ndCB3b3JrIHdpdGggbnVsbCBwcm90byBvYmplY3RzLlxuLyogZXNsaW50LWRpc2FibGUgbm8tcHJvdG8gKi9cbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgY2hlY2sgPSBmdW5jdGlvbiAoTywgcHJvdG8pIHtcbiAgYW5PYmplY3QoTyk7XG4gIGlmICghaXNPYmplY3QocHJvdG8pICYmIHByb3RvICE9PSBudWxsKSB0aHJvdyBUeXBlRXJyb3IocHJvdG8gKyBcIjogY2FuJ3Qgc2V0IGFzIHByb3RvdHlwZSFcIik7XG59O1xubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHNldDogT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8ICgnX19wcm90b19fJyBpbiB7fSA/IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgICBmdW5jdGlvbiAodGVzdCwgYnVnZ3ksIHNldCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgc2V0ID0gcmVxdWlyZSgnLi9fY3R4JykoRnVuY3Rpb24uY2FsbCwgcmVxdWlyZSgnLi9fb2JqZWN0LWdvcGQnKS5mKE9iamVjdC5wcm90b3R5cGUsICdfX3Byb3RvX18nKS5zZXQsIDIpO1xuICAgICAgICBzZXQodGVzdCwgW10pO1xuICAgICAgICBidWdneSA9ICEodGVzdCBpbnN0YW5jZW9mIEFycmF5KTtcbiAgICAgIH0gY2F0Y2ggKGUpIHsgYnVnZ3kgPSB0cnVlOyB9XG4gICAgICByZXR1cm4gZnVuY3Rpb24gc2V0UHJvdG90eXBlT2YoTywgcHJvdG8pIHtcbiAgICAgICAgY2hlY2soTywgcHJvdG8pO1xuICAgICAgICBpZiAoYnVnZ3kpIE8uX19wcm90b19fID0gcHJvdG87XG4gICAgICAgIGVsc2Ugc2V0KE8sIHByb3RvKTtcbiAgICAgICAgcmV0dXJuIE87XG4gICAgICB9O1xuICAgIH0oe30sIGZhbHNlKSA6IHVuZGVmaW5lZCksXG4gIGNoZWNrOiBjaGVja1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2V0LXByb3RvLmpzXG4vLyBtb2R1bGUgaWQgPSAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NldC1wcm90by5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IG1haW4iLCIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgY29yZSA9IHJlcXVpcmUoJy4vX2NvcmUnKTtcbnZhciBkUCA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKTtcbnZhciBTUEVDSUVTID0gcmVxdWlyZSgnLi9fd2tzJykoJ3NwZWNpZXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoS0VZKSB7XG4gIHZhciBDID0gdHlwZW9mIGNvcmVbS0VZXSA9PSAnZnVuY3Rpb24nID8gY29yZVtLRVldIDogZ2xvYmFsW0tFWV07XG4gIGlmIChERVNDUklQVE9SUyAmJiBDICYmICFDW1NQRUNJRVNdKSBkUC5mKEMsIFNQRUNJRVMsIHtcbiAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9XG4gIH0pO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2V0LXNwZWNpZXMuanNcbi8vIG1vZHVsZSBpZCA9IC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2V0LXNwZWNpZXMuanNcbi8vIG1vZHVsZSBjaHVua3MgPSBtYWluIiwidmFyIGRlZiA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmY7XG52YXIgaGFzID0gcmVxdWlyZSgnLi9faGFzJyk7XG52YXIgVEFHID0gcmVxdWlyZSgnLi9fd2tzJykoJ3RvU3RyaW5nVGFnJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0LCB0YWcsIHN0YXQpIHtcbiAgaWYgKGl0ICYmICFoYXMoaXQgPSBzdGF0ID8gaXQgOiBpdC5wcm90b3R5cGUsIFRBRykpIGRlZihpdCwgVEFHLCB7IGNvbmZpZ3VyYWJsZTogdHJ1ZSwgdmFsdWU6IHRhZyB9KTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NldC10by1zdHJpbmctdGFnLmpzXG4vLyBtb2R1bGUgaWQgPSAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NldC10by1zdHJpbmctdGFnLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gbWFpbiIsInZhciBzaGFyZWQgPSByZXF1aXJlKCcuL19zaGFyZWQnKSgna2V5cycpO1xudmFyIHVpZCA9IHJlcXVpcmUoJy4vX3VpZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5KSB7XG4gIHJldHVybiBzaGFyZWRba2V5XSB8fCAoc2hhcmVkW2tleV0gPSB1aWQoa2V5KSk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zaGFyZWQta2V5LmpzXG4vLyBtb2R1bGUgaWQgPSAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NoYXJlZC1rZXkuanNcbi8vIG1vZHVsZSBjaHVua3MgPSBtYWluIiwidmFyIGNvcmUgPSByZXF1aXJlKCcuL19jb3JlJyk7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgU0hBUkVEID0gJ19fY29yZS1qc19zaGFyZWRfXyc7XG52YXIgc3RvcmUgPSBnbG9iYWxbU0hBUkVEXSB8fCAoZ2xvYmFsW1NIQVJFRF0gPSB7fSk7XG5cbihtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gIHJldHVybiBzdG9yZVtrZXldIHx8IChzdG9yZVtrZXldID0gdmFsdWUgIT09IHVuZGVmaW5lZCA/IHZhbHVlIDoge30pO1xufSkoJ3ZlcnNpb25zJywgW10pLnB1c2goe1xuICB2ZXJzaW9uOiBjb3JlLnZlcnNpb24sXG4gIG1vZGU6IHJlcXVpcmUoJy4vX2xpYnJhcnknKSA/ICdwdXJlJyA6ICdnbG9iYWwnLFxuICBjb3B5cmlnaHQ6ICfCqSAyMDE4IERlbmlzIFB1c2hrYXJldiAoemxvaXJvY2sucnUpJ1xufSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NoYXJlZC5qc1xuLy8gbW9kdWxlIGlkID0gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zaGFyZWQuanNcbi8vIG1vZHVsZSBjaHVua3MgPSBtYWluIiwiLy8gNy4zLjIwIFNwZWNpZXNDb25zdHJ1Y3RvcihPLCBkZWZhdWx0Q29uc3RydWN0b3IpXG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciBhRnVuY3Rpb24gPSByZXF1aXJlKCcuL19hLWZ1bmN0aW9uJyk7XG52YXIgU1BFQ0lFUyA9IHJlcXVpcmUoJy4vX3drcycpKCdzcGVjaWVzJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChPLCBEKSB7XG4gIHZhciBDID0gYW5PYmplY3QoTykuY29uc3RydWN0b3I7XG4gIHZhciBTO1xuICByZXR1cm4gQyA9PT0gdW5kZWZpbmVkIHx8IChTID0gYW5PYmplY3QoQylbU1BFQ0lFU10pID09IHVuZGVmaW5lZCA/IEQgOiBhRnVuY3Rpb24oUyk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zcGVjaWVzLWNvbnN0cnVjdG9yLmpzXG4vLyBtb2R1bGUgaWQgPSAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NwZWNpZXMtY29uc3RydWN0b3IuanNcbi8vIG1vZHVsZSBjaHVua3MgPSBtYWluIiwidmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vX3RvLWludGVnZXInKTtcbnZhciBkZWZpbmVkID0gcmVxdWlyZSgnLi9fZGVmaW5lZCcpO1xuLy8gdHJ1ZSAgLT4gU3RyaW5nI2F0XG4vLyBmYWxzZSAtPiBTdHJpbmcjY29kZVBvaW50QXRcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKFRPX1NUUklORykge1xuICByZXR1cm4gZnVuY3Rpb24gKHRoYXQsIHBvcykge1xuICAgIHZhciBzID0gU3RyaW5nKGRlZmluZWQodGhhdCkpO1xuICAgIHZhciBpID0gdG9JbnRlZ2VyKHBvcyk7XG4gICAgdmFyIGwgPSBzLmxlbmd0aDtcbiAgICB2YXIgYSwgYjtcbiAgICBpZiAoaSA8IDAgfHwgaSA+PSBsKSByZXR1cm4gVE9fU1RSSU5HID8gJycgOiB1bmRlZmluZWQ7XG4gICAgYSA9IHMuY2hhckNvZGVBdChpKTtcbiAgICByZXR1cm4gYSA8IDB4ZDgwMCB8fCBhID4gMHhkYmZmIHx8IGkgKyAxID09PSBsIHx8IChiID0gcy5jaGFyQ29kZUF0KGkgKyAxKSkgPCAweGRjMDAgfHwgYiA+IDB4ZGZmZlxuICAgICAgPyBUT19TVFJJTkcgPyBzLmNoYXJBdChpKSA6IGFcbiAgICAgIDogVE9fU1RSSU5HID8gcy5zbGljZShpLCBpICsgMikgOiAoYSAtIDB4ZDgwMCA8PCAxMCkgKyAoYiAtIDB4ZGMwMCkgKyAweDEwMDAwO1xuICB9O1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc3RyaW5nLWF0LmpzXG4vLyBtb2R1bGUgaWQgPSAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3N0cmluZy1hdC5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IG1haW4iLCJ2YXIgY3R4ID0gcmVxdWlyZSgnLi9fY3R4Jyk7XG52YXIgaW52b2tlID0gcmVxdWlyZSgnLi9faW52b2tlJyk7XG52YXIgaHRtbCA9IHJlcXVpcmUoJy4vX2h0bWwnKTtcbnZhciBjZWwgPSByZXF1aXJlKCcuL19kb20tY3JlYXRlJyk7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgcHJvY2VzcyA9IGdsb2JhbC5wcm9jZXNzO1xudmFyIHNldFRhc2sgPSBnbG9iYWwuc2V0SW1tZWRpYXRlO1xudmFyIGNsZWFyVGFzayA9IGdsb2JhbC5jbGVhckltbWVkaWF0ZTtcbnZhciBNZXNzYWdlQ2hhbm5lbCA9IGdsb2JhbC5NZXNzYWdlQ2hhbm5lbDtcbnZhciBEaXNwYXRjaCA9IGdsb2JhbC5EaXNwYXRjaDtcbnZhciBjb3VudGVyID0gMDtcbnZhciBxdWV1ZSA9IHt9O1xudmFyIE9OUkVBRFlTVEFURUNIQU5HRSA9ICdvbnJlYWR5c3RhdGVjaGFuZ2UnO1xudmFyIGRlZmVyLCBjaGFubmVsLCBwb3J0O1xudmFyIHJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIGlkID0gK3RoaXM7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wcm90b3R5cGUtYnVpbHRpbnNcbiAgaWYgKHF1ZXVlLmhhc093blByb3BlcnR5KGlkKSkge1xuICAgIHZhciBmbiA9IHF1ZXVlW2lkXTtcbiAgICBkZWxldGUgcXVldWVbaWRdO1xuICAgIGZuKCk7XG4gIH1cbn07XG52YXIgbGlzdGVuZXIgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgcnVuLmNhbGwoZXZlbnQuZGF0YSk7XG59O1xuLy8gTm9kZS5qcyAwLjkrICYgSUUxMCsgaGFzIHNldEltbWVkaWF0ZSwgb3RoZXJ3aXNlOlxuaWYgKCFzZXRUYXNrIHx8ICFjbGVhclRhc2spIHtcbiAgc2V0VGFzayA9IGZ1bmN0aW9uIHNldEltbWVkaWF0ZShmbikge1xuICAgIHZhciBhcmdzID0gW107XG4gICAgdmFyIGkgPSAxO1xuICAgIHdoaWxlIChhcmd1bWVudHMubGVuZ3RoID4gaSkgYXJncy5wdXNoKGFyZ3VtZW50c1tpKytdKTtcbiAgICBxdWV1ZVsrK2NvdW50ZXJdID0gZnVuY3Rpb24gKCkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLW5ldy1mdW5jXG4gICAgICBpbnZva2UodHlwZW9mIGZuID09ICdmdW5jdGlvbicgPyBmbiA6IEZ1bmN0aW9uKGZuKSwgYXJncyk7XG4gICAgfTtcbiAgICBkZWZlcihjb3VudGVyKTtcbiAgICByZXR1cm4gY291bnRlcjtcbiAgfTtcbiAgY2xlYXJUYXNrID0gZnVuY3Rpb24gY2xlYXJJbW1lZGlhdGUoaWQpIHtcbiAgICBkZWxldGUgcXVldWVbaWRdO1xuICB9O1xuICAvLyBOb2RlLmpzIDAuOC1cbiAgaWYgKHJlcXVpcmUoJy4vX2NvZicpKHByb2Nlc3MpID09ICdwcm9jZXNzJykge1xuICAgIGRlZmVyID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICBwcm9jZXNzLm5leHRUaWNrKGN0eChydW4sIGlkLCAxKSk7XG4gICAgfTtcbiAgLy8gU3BoZXJlIChKUyBnYW1lIGVuZ2luZSkgRGlzcGF0Y2ggQVBJXG4gIH0gZWxzZSBpZiAoRGlzcGF0Y2ggJiYgRGlzcGF0Y2gubm93KSB7XG4gICAgZGVmZXIgPSBmdW5jdGlvbiAoaWQpIHtcbiAgICAgIERpc3BhdGNoLm5vdyhjdHgocnVuLCBpZCwgMSkpO1xuICAgIH07XG4gIC8vIEJyb3dzZXJzIHdpdGggTWVzc2FnZUNoYW5uZWwsIGluY2x1ZGVzIFdlYldvcmtlcnNcbiAgfSBlbHNlIGlmIChNZXNzYWdlQ2hhbm5lbCkge1xuICAgIGNoYW5uZWwgPSBuZXcgTWVzc2FnZUNoYW5uZWwoKTtcbiAgICBwb3J0ID0gY2hhbm5lbC5wb3J0MjtcbiAgICBjaGFubmVsLnBvcnQxLm9ubWVzc2FnZSA9IGxpc3RlbmVyO1xuICAgIGRlZmVyID0gY3R4KHBvcnQucG9zdE1lc3NhZ2UsIHBvcnQsIDEpO1xuICAvLyBCcm93c2VycyB3aXRoIHBvc3RNZXNzYWdlLCBza2lwIFdlYldvcmtlcnNcbiAgLy8gSUU4IGhhcyBwb3N0TWVzc2FnZSwgYnV0IGl0J3Mgc3luYyAmIHR5cGVvZiBpdHMgcG9zdE1lc3NhZ2UgaXMgJ29iamVjdCdcbiAgfSBlbHNlIGlmIChnbG9iYWwuYWRkRXZlbnRMaXN0ZW5lciAmJiB0eXBlb2YgcG9zdE1lc3NhZ2UgPT0gJ2Z1bmN0aW9uJyAmJiAhZ2xvYmFsLmltcG9ydFNjcmlwdHMpIHtcbiAgICBkZWZlciA9IGZ1bmN0aW9uIChpZCkge1xuICAgICAgZ2xvYmFsLnBvc3RNZXNzYWdlKGlkICsgJycsICcqJyk7XG4gICAgfTtcbiAgICBnbG9iYWwuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIGxpc3RlbmVyLCBmYWxzZSk7XG4gIC8vIElFOC1cbiAgfSBlbHNlIGlmIChPTlJFQURZU1RBVEVDSEFOR0UgaW4gY2VsKCdzY3JpcHQnKSkge1xuICAgIGRlZmVyID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICBodG1sLmFwcGVuZENoaWxkKGNlbCgnc2NyaXB0JykpW09OUkVBRFlTVEFURUNIQU5HRV0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGh0bWwucmVtb3ZlQ2hpbGQodGhpcyk7XG4gICAgICAgIHJ1bi5jYWxsKGlkKTtcbiAgICAgIH07XG4gICAgfTtcbiAgLy8gUmVzdCBvbGQgYnJvd3NlcnNcbiAgfSBlbHNlIHtcbiAgICBkZWZlciA9IGZ1bmN0aW9uIChpZCkge1xuICAgICAgc2V0VGltZW91dChjdHgocnVuLCBpZCwgMSksIDApO1xuICAgIH07XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0ge1xuICBzZXQ6IHNldFRhc2ssXG4gIGNsZWFyOiBjbGVhclRhc2tcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3Rhc2suanNcbi8vIG1vZHVsZSBpZCA9IC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdGFzay5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IG1haW4iLCJ2YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi9fdG8taW50ZWdlcicpO1xudmFyIG1heCA9IE1hdGgubWF4O1xudmFyIG1pbiA9IE1hdGgubWluO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaW5kZXgsIGxlbmd0aCkge1xuICBpbmRleCA9IHRvSW50ZWdlcihpbmRleCk7XG4gIHJldHVybiBpbmRleCA8IDAgPyBtYXgoaW5kZXggKyBsZW5ndGgsIDApIDogbWluKGluZGV4LCBsZW5ndGgpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tYWJzb2x1dGUtaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tYWJzb2x1dGUtaW5kZXguanNcbi8vIG1vZHVsZSBjaHVua3MgPSBtYWluIiwiLy8gNy4xLjQgVG9JbnRlZ2VyXG52YXIgY2VpbCA9IE1hdGguY2VpbDtcbnZhciBmbG9vciA9IE1hdGguZmxvb3I7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXNOYU4oaXQgPSAraXQpID8gMCA6IChpdCA+IDAgPyBmbG9vciA6IGNlaWwpKGl0KTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWludGVnZXIuanNcbi8vIG1vZHVsZSBpZCA9IC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8taW50ZWdlci5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IG1haW4iLCIvLyB0byBpbmRleGVkIG9iamVjdCwgdG9PYmplY3Qgd2l0aCBmYWxsYmFjayBmb3Igbm9uLWFycmF5LWxpa2UgRVMzIHN0cmluZ3NcbnZhciBJT2JqZWN0ID0gcmVxdWlyZSgnLi9faW9iamVjdCcpO1xudmFyIGRlZmluZWQgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gSU9iamVjdChkZWZpbmVkKGl0KSk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1pb2JqZWN0LmpzXG4vLyBtb2R1bGUgaWQgPSAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWlvYmplY3QuanNcbi8vIG1vZHVsZSBjaHVua3MgPSBtYWluIiwiLy8gNy4xLjE1IFRvTGVuZ3RoXG52YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi9fdG8taW50ZWdlcicpO1xudmFyIG1pbiA9IE1hdGgubWluO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGl0ID4gMCA/IG1pbih0b0ludGVnZXIoaXQpLCAweDFmZmZmZmZmZmZmZmZmKSA6IDA7IC8vIHBvdygyLCA1MykgLSAxID09IDkwMDcxOTkyNTQ3NDA5OTFcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWxlbmd0aC5qc1xuLy8gbW9kdWxlIGlkID0gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1sZW5ndGguanNcbi8vIG1vZHVsZSBjaHVua3MgPSBtYWluIiwiLy8gNy4xLjEzIFRvT2JqZWN0KGFyZ3VtZW50KVxudmFyIGRlZmluZWQgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gT2JqZWN0KGRlZmluZWQoaXQpKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLW9iamVjdC5qc1xuLy8gbW9kdWxlIGlkID0gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1vYmplY3QuanNcbi8vIG1vZHVsZSBjaHVua3MgPSBtYWluIiwiLy8gNy4xLjEgVG9QcmltaXRpdmUoaW5wdXQgWywgUHJlZmVycmVkVHlwZV0pXG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbi8vIGluc3RlYWQgb2YgdGhlIEVTNiBzcGVjIHZlcnNpb24sIHdlIGRpZG4ndCBpbXBsZW1lbnQgQEB0b1ByaW1pdGl2ZSBjYXNlXG4vLyBhbmQgdGhlIHNlY29uZCBhcmd1bWVudCAtIGZsYWcgLSBwcmVmZXJyZWQgdHlwZSBpcyBhIHN0cmluZ1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQsIFMpIHtcbiAgaWYgKCFpc09iamVjdChpdCkpIHJldHVybiBpdDtcbiAgdmFyIGZuLCB2YWw7XG4gIGlmIChTICYmIHR5cGVvZiAoZm4gPSBpdC50b1N0cmluZykgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKSByZXR1cm4gdmFsO1xuICBpZiAodHlwZW9mIChmbiA9IGl0LnZhbHVlT2YpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSkgcmV0dXJuIHZhbDtcbiAgaWYgKCFTICYmIHR5cGVvZiAoZm4gPSBpdC50b1N0cmluZykgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKSByZXR1cm4gdmFsO1xuICB0aHJvdyBUeXBlRXJyb3IoXCJDYW4ndCBjb252ZXJ0IG9iamVjdCB0byBwcmltaXRpdmUgdmFsdWVcIik7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1wcmltaXRpdmUuanNcbi8vIG1vZHVsZSBpZCA9IC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tcHJpbWl0aXZlLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gbWFpbiIsInZhciBpZCA9IDA7XG52YXIgcHggPSBNYXRoLnJhbmRvbSgpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5KSB7XG4gIHJldHVybiAnU3ltYm9sKCcuY29uY2F0KGtleSA9PT0gdW5kZWZpbmVkID8gJycgOiBrZXksICcpXycsICgrK2lkICsgcHgpLnRvU3RyaW5nKDM2KSk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL191aWQuanNcbi8vIG1vZHVsZSBpZCA9IC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdWlkLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gbWFpbiIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBuYXZpZ2F0b3IgPSBnbG9iYWwubmF2aWdhdG9yO1xuXG5tb2R1bGUuZXhwb3J0cyA9IG5hdmlnYXRvciAmJiBuYXZpZ2F0b3IudXNlckFnZW50IHx8ICcnO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL191c2VyLWFnZW50LmpzXG4vLyBtb2R1bGUgaWQgPSAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3VzZXItYWdlbnQuanNcbi8vIG1vZHVsZSBjaHVua3MgPSBtYWluIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIGNvcmUgPSByZXF1aXJlKCcuL19jb3JlJyk7XG52YXIgTElCUkFSWSA9IHJlcXVpcmUoJy4vX2xpYnJhcnknKTtcbnZhciB3a3NFeHQgPSByZXF1aXJlKCcuL193a3MtZXh0Jyk7XG52YXIgZGVmaW5lUHJvcGVydHkgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKS5mO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobmFtZSkge1xuICB2YXIgJFN5bWJvbCA9IGNvcmUuU3ltYm9sIHx8IChjb3JlLlN5bWJvbCA9IExJQlJBUlkgPyB7fSA6IGdsb2JhbC5TeW1ib2wgfHwge30pO1xuICBpZiAobmFtZS5jaGFyQXQoMCkgIT0gJ18nICYmICEobmFtZSBpbiAkU3ltYm9sKSkgZGVmaW5lUHJvcGVydHkoJFN5bWJvbCwgbmFtZSwgeyB2YWx1ZTogd2tzRXh0LmYobmFtZSkgfSk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL193a3MtZGVmaW5lLmpzXG4vLyBtb2R1bGUgaWQgPSAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3drcy1kZWZpbmUuanNcbi8vIG1vZHVsZSBjaHVua3MgPSBtYWluIiwiZXhwb3J0cy5mID0gcmVxdWlyZSgnLi9fd2tzJyk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3drcy1leHQuanNcbi8vIG1vZHVsZSBpZCA9IC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fd2tzLWV4dC5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IG1haW4iLCJ2YXIgc3RvcmUgPSByZXF1aXJlKCcuL19zaGFyZWQnKSgnd2tzJyk7XG52YXIgdWlkID0gcmVxdWlyZSgnLi9fdWlkJyk7XG52YXIgU3ltYm9sID0gcmVxdWlyZSgnLi9fZ2xvYmFsJykuU3ltYm9sO1xudmFyIFVTRV9TWU1CT0wgPSB0eXBlb2YgU3ltYm9sID09ICdmdW5jdGlvbic7XG5cbnZhciAkZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgcmV0dXJuIHN0b3JlW25hbWVdIHx8IChzdG9yZVtuYW1lXSA9XG4gICAgVVNFX1NZTUJPTCAmJiBTeW1ib2xbbmFtZV0gfHwgKFVTRV9TWU1CT0wgPyBTeW1ib2wgOiB1aWQpKCdTeW1ib2wuJyArIG5hbWUpKTtcbn07XG5cbiRleHBvcnRzLnN0b3JlID0gc3RvcmU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3drcy5qc1xuLy8gbW9kdWxlIGlkID0gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL193a3MuanNcbi8vIG1vZHVsZSBjaHVua3MgPSBtYWluIiwidmFyIGNsYXNzb2YgPSByZXF1aXJlKCcuL19jbGFzc29mJyk7XG52YXIgSVRFUkFUT1IgPSByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKTtcbnZhciBJdGVyYXRvcnMgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fY29yZScpLmdldEl0ZXJhdG9yTWV0aG9kID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmIChpdCAhPSB1bmRlZmluZWQpIHJldHVybiBpdFtJVEVSQVRPUl1cbiAgICB8fCBpdFsnQEBpdGVyYXRvciddXG4gICAgfHwgSXRlcmF0b3JzW2NsYXNzb2YoaXQpXTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvY29yZS5nZXQtaXRlcmF0b3ItbWV0aG9kLmpzXG4vLyBtb2R1bGUgaWQgPSAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvY29yZS5nZXQtaXRlcmF0b3ItbWV0aG9kLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gbWFpbiIsIid1c2Ugc3RyaWN0JztcbnZhciBhZGRUb1Vuc2NvcGFibGVzID0gcmVxdWlyZSgnLi9fYWRkLXRvLXVuc2NvcGFibGVzJyk7XG52YXIgc3RlcCA9IHJlcXVpcmUoJy4vX2l0ZXItc3RlcCcpO1xudmFyIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpO1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcblxuLy8gMjIuMS4zLjQgQXJyYXkucHJvdG90eXBlLmVudHJpZXMoKVxuLy8gMjIuMS4zLjEzIEFycmF5LnByb3RvdHlwZS5rZXlzKClcbi8vIDIyLjEuMy4yOSBBcnJheS5wcm90b3R5cGUudmFsdWVzKClcbi8vIDIyLjEuMy4zMCBBcnJheS5wcm90b3R5cGVbQEBpdGVyYXRvcl0oKVxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19pdGVyLWRlZmluZScpKEFycmF5LCAnQXJyYXknLCBmdW5jdGlvbiAoaXRlcmF0ZWQsIGtpbmQpIHtcbiAgdGhpcy5fdCA9IHRvSU9iamVjdChpdGVyYXRlZCk7IC8vIHRhcmdldFxuICB0aGlzLl9pID0gMDsgICAgICAgICAgICAgICAgICAgLy8gbmV4dCBpbmRleFxuICB0aGlzLl9rID0ga2luZDsgICAgICAgICAgICAgICAgLy8ga2luZFxuLy8gMjIuMS41LjIuMSAlQXJyYXlJdGVyYXRvclByb3RvdHlwZSUubmV4dCgpXG59LCBmdW5jdGlvbiAoKSB7XG4gIHZhciBPID0gdGhpcy5fdDtcbiAgdmFyIGtpbmQgPSB0aGlzLl9rO1xuICB2YXIgaW5kZXggPSB0aGlzLl9pKys7XG4gIGlmICghTyB8fCBpbmRleCA+PSBPLmxlbmd0aCkge1xuICAgIHRoaXMuX3QgPSB1bmRlZmluZWQ7XG4gICAgcmV0dXJuIHN0ZXAoMSk7XG4gIH1cbiAgaWYgKGtpbmQgPT0gJ2tleXMnKSByZXR1cm4gc3RlcCgwLCBpbmRleCk7XG4gIGlmIChraW5kID09ICd2YWx1ZXMnKSByZXR1cm4gc3RlcCgwLCBPW2luZGV4XSk7XG4gIHJldHVybiBzdGVwKDAsIFtpbmRleCwgT1tpbmRleF1dKTtcbn0sICd2YWx1ZXMnKTtcblxuLy8gYXJndW1lbnRzTGlzdFtAQGl0ZXJhdG9yXSBpcyAlQXJyYXlQcm90b192YWx1ZXMlICg5LjQuNC42LCA5LjQuNC43KVxuSXRlcmF0b3JzLkFyZ3VtZW50cyA9IEl0ZXJhdG9ycy5BcnJheTtcblxuYWRkVG9VbnNjb3BhYmxlcygna2V5cycpO1xuYWRkVG9VbnNjb3BhYmxlcygndmFsdWVzJyk7XG5hZGRUb1Vuc2NvcGFibGVzKCdlbnRyaWVzJyk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LmFycmF5Lml0ZXJhdG9yLmpzXG4vLyBtb2R1bGUgaWQgPSAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LmFycmF5Lml0ZXJhdG9yLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gbWFpbiIsIi8vIDE5LjEuMy4xIE9iamVjdC5hc3NpZ24odGFyZ2V0LCBzb3VyY2UpXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xuXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiwgJ09iamVjdCcsIHsgYXNzaWduOiByZXF1aXJlKCcuL19vYmplY3QtYXNzaWduJykgfSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5hc3NpZ24uanNcbi8vIG1vZHVsZSBpZCA9IC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmFzc2lnbi5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IG1haW4iLCJ2YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xuLy8gMTkuMS4yLjIgLyAxNS4yLjMuNSBPYmplY3QuY3JlYXRlKE8gWywgUHJvcGVydGllc10pXG4kZXhwb3J0KCRleHBvcnQuUywgJ09iamVjdCcsIHsgY3JlYXRlOiByZXF1aXJlKCcuL19vYmplY3QtY3JlYXRlJykgfSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5jcmVhdGUuanNcbi8vIG1vZHVsZSBpZCA9IC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmNyZWF0ZS5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IG1haW4iLCJ2YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xuLy8gMTkuMS4yLjQgLyAxNS4yLjMuNiBPYmplY3QuZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcylcbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIXJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJyksICdPYmplY3QnLCB7IGRlZmluZVByb3BlcnR5OiByZXF1aXJlKCcuL19vYmplY3QtZHAnKS5mIH0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QuZGVmaW5lLXByb3BlcnR5LmpzXG4vLyBtb2R1bGUgaWQgPSAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5kZWZpbmUtcHJvcGVydHkuanNcbi8vIG1vZHVsZSBjaHVua3MgPSBtYWluIiwiLy8gMTkuMS4yLjkgT2JqZWN0LmdldFByb3RvdHlwZU9mKE8pXG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuL190by1vYmplY3QnKTtcbnZhciAkZ2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKCcuL19vYmplY3QtZ3BvJyk7XG5cbnJlcXVpcmUoJy4vX29iamVjdC1zYXAnKSgnZ2V0UHJvdG90eXBlT2YnLCBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBmdW5jdGlvbiBnZXRQcm90b3R5cGVPZihpdCkge1xuICAgIHJldHVybiAkZ2V0UHJvdG90eXBlT2YodG9PYmplY3QoaXQpKTtcbiAgfTtcbn0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QuZ2V0LXByb3RvdHlwZS1vZi5qc1xuLy8gbW9kdWxlIGlkID0gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QuZ2V0LXByb3RvdHlwZS1vZi5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IG1haW4iLCIvLyAxOS4xLjMuMTkgT2JqZWN0LnNldFByb3RvdHlwZU9mKE8sIHByb3RvKVxudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbiRleHBvcnQoJGV4cG9ydC5TLCAnT2JqZWN0JywgeyBzZXRQcm90b3R5cGVPZjogcmVxdWlyZSgnLi9fc2V0LXByb3RvJykuc2V0IH0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3Quc2V0LXByb3RvdHlwZS1vZi5qc1xuLy8gbW9kdWxlIGlkID0gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3Quc2V0LXByb3RvdHlwZS1vZi5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IG1haW4iLCIndXNlIHN0cmljdCc7XG52YXIgTElCUkFSWSA9IHJlcXVpcmUoJy4vX2xpYnJhcnknKTtcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBjdHggPSByZXF1aXJlKCcuL19jdHgnKTtcbnZhciBjbGFzc29mID0gcmVxdWlyZSgnLi9fY2xhc3NvZicpO1xudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xudmFyIGFGdW5jdGlvbiA9IHJlcXVpcmUoJy4vX2EtZnVuY3Rpb24nKTtcbnZhciBhbkluc3RhbmNlID0gcmVxdWlyZSgnLi9fYW4taW5zdGFuY2UnKTtcbnZhciBmb3JPZiA9IHJlcXVpcmUoJy4vX2Zvci1vZicpO1xudmFyIHNwZWNpZXNDb25zdHJ1Y3RvciA9IHJlcXVpcmUoJy4vX3NwZWNpZXMtY29uc3RydWN0b3InKTtcbnZhciB0YXNrID0gcmVxdWlyZSgnLi9fdGFzaycpLnNldDtcbnZhciBtaWNyb3Rhc2sgPSByZXF1aXJlKCcuL19taWNyb3Rhc2snKSgpO1xudmFyIG5ld1Byb21pc2VDYXBhYmlsaXR5TW9kdWxlID0gcmVxdWlyZSgnLi9fbmV3LXByb21pc2UtY2FwYWJpbGl0eScpO1xudmFyIHBlcmZvcm0gPSByZXF1aXJlKCcuL19wZXJmb3JtJyk7XG52YXIgdXNlckFnZW50ID0gcmVxdWlyZSgnLi9fdXNlci1hZ2VudCcpO1xudmFyIHByb21pc2VSZXNvbHZlID0gcmVxdWlyZSgnLi9fcHJvbWlzZS1yZXNvbHZlJyk7XG52YXIgUFJPTUlTRSA9ICdQcm9taXNlJztcbnZhciBUeXBlRXJyb3IgPSBnbG9iYWwuVHlwZUVycm9yO1xudmFyIHByb2Nlc3MgPSBnbG9iYWwucHJvY2VzcztcbnZhciB2ZXJzaW9ucyA9IHByb2Nlc3MgJiYgcHJvY2Vzcy52ZXJzaW9ucztcbnZhciB2OCA9IHZlcnNpb25zICYmIHZlcnNpb25zLnY4IHx8ICcnO1xudmFyICRQcm9taXNlID0gZ2xvYmFsW1BST01JU0VdO1xudmFyIGlzTm9kZSA9IGNsYXNzb2YocHJvY2VzcykgPT0gJ3Byb2Nlc3MnO1xudmFyIGVtcHR5ID0gZnVuY3Rpb24gKCkgeyAvKiBlbXB0eSAqLyB9O1xudmFyIEludGVybmFsLCBuZXdHZW5lcmljUHJvbWlzZUNhcGFiaWxpdHksIE93blByb21pc2VDYXBhYmlsaXR5LCBXcmFwcGVyO1xudmFyIG5ld1Byb21pc2VDYXBhYmlsaXR5ID0gbmV3R2VuZXJpY1Byb21pc2VDYXBhYmlsaXR5ID0gbmV3UHJvbWlzZUNhcGFiaWxpdHlNb2R1bGUuZjtcblxudmFyIFVTRV9OQVRJVkUgPSAhIWZ1bmN0aW9uICgpIHtcbiAgdHJ5IHtcbiAgICAvLyBjb3JyZWN0IHN1YmNsYXNzaW5nIHdpdGggQEBzcGVjaWVzIHN1cHBvcnRcbiAgICB2YXIgcHJvbWlzZSA9ICRQcm9taXNlLnJlc29sdmUoMSk7XG4gICAgdmFyIEZha2VQcm9taXNlID0gKHByb21pc2UuY29uc3RydWN0b3IgPSB7fSlbcmVxdWlyZSgnLi9fd2tzJykoJ3NwZWNpZXMnKV0gPSBmdW5jdGlvbiAoZXhlYykge1xuICAgICAgZXhlYyhlbXB0eSwgZW1wdHkpO1xuICAgIH07XG4gICAgLy8gdW5oYW5kbGVkIHJlamVjdGlvbnMgdHJhY2tpbmcgc3VwcG9ydCwgTm9kZUpTIFByb21pc2Ugd2l0aG91dCBpdCBmYWlscyBAQHNwZWNpZXMgdGVzdFxuICAgIHJldHVybiAoaXNOb2RlIHx8IHR5cGVvZiBQcm9taXNlUmVqZWN0aW9uRXZlbnQgPT0gJ2Z1bmN0aW9uJylcbiAgICAgICYmIHByb21pc2UudGhlbihlbXB0eSkgaW5zdGFuY2VvZiBGYWtlUHJvbWlzZVxuICAgICAgLy8gdjggNi42IChOb2RlIDEwIGFuZCBDaHJvbWUgNjYpIGhhdmUgYSBidWcgd2l0aCByZXNvbHZpbmcgY3VzdG9tIHRoZW5hYmxlc1xuICAgICAgLy8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9ODMwNTY1XG4gICAgICAvLyB3ZSBjYW4ndCBkZXRlY3QgaXQgc3luY2hyb25vdXNseSwgc28ganVzdCBjaGVjayB2ZXJzaW9uc1xuICAgICAgJiYgdjguaW5kZXhPZignNi42JykgIT09IDBcbiAgICAgICYmIHVzZXJBZ2VudC5pbmRleE9mKCdDaHJvbWUvNjYnKSA9PT0gLTE7XG4gIH0gY2F0Y2ggKGUpIHsgLyogZW1wdHkgKi8gfVxufSgpO1xuXG4vLyBoZWxwZXJzXG52YXIgaXNUaGVuYWJsZSA9IGZ1bmN0aW9uIChpdCkge1xuICB2YXIgdGhlbjtcbiAgcmV0dXJuIGlzT2JqZWN0KGl0KSAmJiB0eXBlb2YgKHRoZW4gPSBpdC50aGVuKSA9PSAnZnVuY3Rpb24nID8gdGhlbiA6IGZhbHNlO1xufTtcbnZhciBub3RpZnkgPSBmdW5jdGlvbiAocHJvbWlzZSwgaXNSZWplY3QpIHtcbiAgaWYgKHByb21pc2UuX24pIHJldHVybjtcbiAgcHJvbWlzZS5fbiA9IHRydWU7XG4gIHZhciBjaGFpbiA9IHByb21pc2UuX2M7XG4gIG1pY3JvdGFzayhmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHZhbHVlID0gcHJvbWlzZS5fdjtcbiAgICB2YXIgb2sgPSBwcm9taXNlLl9zID09IDE7XG4gICAgdmFyIGkgPSAwO1xuICAgIHZhciBydW4gPSBmdW5jdGlvbiAocmVhY3Rpb24pIHtcbiAgICAgIHZhciBoYW5kbGVyID0gb2sgPyByZWFjdGlvbi5vayA6IHJlYWN0aW9uLmZhaWw7XG4gICAgICB2YXIgcmVzb2x2ZSA9IHJlYWN0aW9uLnJlc29sdmU7XG4gICAgICB2YXIgcmVqZWN0ID0gcmVhY3Rpb24ucmVqZWN0O1xuICAgICAgdmFyIGRvbWFpbiA9IHJlYWN0aW9uLmRvbWFpbjtcbiAgICAgIHZhciByZXN1bHQsIHRoZW4sIGV4aXRlZDtcbiAgICAgIHRyeSB7XG4gICAgICAgIGlmIChoYW5kbGVyKSB7XG4gICAgICAgICAgaWYgKCFvaykge1xuICAgICAgICAgICAgaWYgKHByb21pc2UuX2ggPT0gMikgb25IYW5kbGVVbmhhbmRsZWQocHJvbWlzZSk7XG4gICAgICAgICAgICBwcm9taXNlLl9oID0gMTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGhhbmRsZXIgPT09IHRydWUpIHJlc3VsdCA9IHZhbHVlO1xuICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKGRvbWFpbikgZG9tYWluLmVudGVyKCk7XG4gICAgICAgICAgICByZXN1bHQgPSBoYW5kbGVyKHZhbHVlKTsgLy8gbWF5IHRocm93XG4gICAgICAgICAgICBpZiAoZG9tYWluKSB7XG4gICAgICAgICAgICAgIGRvbWFpbi5leGl0KCk7XG4gICAgICAgICAgICAgIGV4aXRlZCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChyZXN1bHQgPT09IHJlYWN0aW9uLnByb21pc2UpIHtcbiAgICAgICAgICAgIHJlamVjdChUeXBlRXJyb3IoJ1Byb21pc2UtY2hhaW4gY3ljbGUnKSk7XG4gICAgICAgICAgfSBlbHNlIGlmICh0aGVuID0gaXNUaGVuYWJsZShyZXN1bHQpKSB7XG4gICAgICAgICAgICB0aGVuLmNhbGwocmVzdWx0LCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0gZWxzZSByZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgIH0gZWxzZSByZWplY3QodmFsdWUpO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBpZiAoZG9tYWluICYmICFleGl0ZWQpIGRvbWFpbi5leGl0KCk7XG4gICAgICAgIHJlamVjdChlKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHdoaWxlIChjaGFpbi5sZW5ndGggPiBpKSBydW4oY2hhaW5baSsrXSk7IC8vIHZhcmlhYmxlIGxlbmd0aCAtIGNhbid0IHVzZSBmb3JFYWNoXG4gICAgcHJvbWlzZS5fYyA9IFtdO1xuICAgIHByb21pc2UuX24gPSBmYWxzZTtcbiAgICBpZiAoaXNSZWplY3QgJiYgIXByb21pc2UuX2gpIG9uVW5oYW5kbGVkKHByb21pc2UpO1xuICB9KTtcbn07XG52YXIgb25VbmhhbmRsZWQgPSBmdW5jdGlvbiAocHJvbWlzZSkge1xuICB0YXNrLmNhbGwoZ2xvYmFsLCBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHZhbHVlID0gcHJvbWlzZS5fdjtcbiAgICB2YXIgdW5oYW5kbGVkID0gaXNVbmhhbmRsZWQocHJvbWlzZSk7XG4gICAgdmFyIHJlc3VsdCwgaGFuZGxlciwgY29uc29sZTtcbiAgICBpZiAodW5oYW5kbGVkKSB7XG4gICAgICByZXN1bHQgPSBwZXJmb3JtKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKGlzTm9kZSkge1xuICAgICAgICAgIHByb2Nlc3MuZW1pdCgndW5oYW5kbGVkUmVqZWN0aW9uJywgdmFsdWUsIHByb21pc2UpO1xuICAgICAgICB9IGVsc2UgaWYgKGhhbmRsZXIgPSBnbG9iYWwub251bmhhbmRsZWRyZWplY3Rpb24pIHtcbiAgICAgICAgICBoYW5kbGVyKHsgcHJvbWlzZTogcHJvbWlzZSwgcmVhc29uOiB2YWx1ZSB9KTtcbiAgICAgICAgfSBlbHNlIGlmICgoY29uc29sZSA9IGdsb2JhbC5jb25zb2xlKSAmJiBjb25zb2xlLmVycm9yKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcignVW5oYW5kbGVkIHByb21pc2UgcmVqZWN0aW9uJywgdmFsdWUpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIC8vIEJyb3dzZXJzIHNob3VsZCBub3QgdHJpZ2dlciBgcmVqZWN0aW9uSGFuZGxlZGAgZXZlbnQgaWYgaXQgd2FzIGhhbmRsZWQgaGVyZSwgTm9kZUpTIC0gc2hvdWxkXG4gICAgICBwcm9taXNlLl9oID0gaXNOb2RlIHx8IGlzVW5oYW5kbGVkKHByb21pc2UpID8gMiA6IDE7XG4gICAgfSBwcm9taXNlLl9hID0gdW5kZWZpbmVkO1xuICAgIGlmICh1bmhhbmRsZWQgJiYgcmVzdWx0LmUpIHRocm93IHJlc3VsdC52O1xuICB9KTtcbn07XG52YXIgaXNVbmhhbmRsZWQgPSBmdW5jdGlvbiAocHJvbWlzZSkge1xuICByZXR1cm4gcHJvbWlzZS5faCAhPT0gMSAmJiAocHJvbWlzZS5fYSB8fCBwcm9taXNlLl9jKS5sZW5ndGggPT09IDA7XG59O1xudmFyIG9uSGFuZGxlVW5oYW5kbGVkID0gZnVuY3Rpb24gKHByb21pc2UpIHtcbiAgdGFzay5jYWxsKGdsb2JhbCwgZnVuY3Rpb24gKCkge1xuICAgIHZhciBoYW5kbGVyO1xuICAgIGlmIChpc05vZGUpIHtcbiAgICAgIHByb2Nlc3MuZW1pdCgncmVqZWN0aW9uSGFuZGxlZCcsIHByb21pc2UpO1xuICAgIH0gZWxzZSBpZiAoaGFuZGxlciA9IGdsb2JhbC5vbnJlamVjdGlvbmhhbmRsZWQpIHtcbiAgICAgIGhhbmRsZXIoeyBwcm9taXNlOiBwcm9taXNlLCByZWFzb246IHByb21pc2UuX3YgfSk7XG4gICAgfVxuICB9KTtcbn07XG52YXIgJHJlamVjdCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICB2YXIgcHJvbWlzZSA9IHRoaXM7XG4gIGlmIChwcm9taXNlLl9kKSByZXR1cm47XG4gIHByb21pc2UuX2QgPSB0cnVlO1xuICBwcm9taXNlID0gcHJvbWlzZS5fdyB8fCBwcm9taXNlOyAvLyB1bndyYXBcbiAgcHJvbWlzZS5fdiA9IHZhbHVlO1xuICBwcm9taXNlLl9zID0gMjtcbiAgaWYgKCFwcm9taXNlLl9hKSBwcm9taXNlLl9hID0gcHJvbWlzZS5fYy5zbGljZSgpO1xuICBub3RpZnkocHJvbWlzZSwgdHJ1ZSk7XG59O1xudmFyICRyZXNvbHZlID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gIHZhciBwcm9taXNlID0gdGhpcztcbiAgdmFyIHRoZW47XG4gIGlmIChwcm9taXNlLl9kKSByZXR1cm47XG4gIHByb21pc2UuX2QgPSB0cnVlO1xuICBwcm9taXNlID0gcHJvbWlzZS5fdyB8fCBwcm9taXNlOyAvLyB1bndyYXBcbiAgdHJ5IHtcbiAgICBpZiAocHJvbWlzZSA9PT0gdmFsdWUpIHRocm93IFR5cGVFcnJvcihcIlByb21pc2UgY2FuJ3QgYmUgcmVzb2x2ZWQgaXRzZWxmXCIpO1xuICAgIGlmICh0aGVuID0gaXNUaGVuYWJsZSh2YWx1ZSkpIHtcbiAgICAgIG1pY3JvdGFzayhmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciB3cmFwcGVyID0geyBfdzogcHJvbWlzZSwgX2Q6IGZhbHNlIH07IC8vIHdyYXBcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICB0aGVuLmNhbGwodmFsdWUsIGN0eCgkcmVzb2x2ZSwgd3JhcHBlciwgMSksIGN0eCgkcmVqZWN0LCB3cmFwcGVyLCAxKSk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAkcmVqZWN0LmNhbGwod3JhcHBlciwgZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBwcm9taXNlLl92ID0gdmFsdWU7XG4gICAgICBwcm9taXNlLl9zID0gMTtcbiAgICAgIG5vdGlmeShwcm9taXNlLCBmYWxzZSk7XG4gICAgfVxuICB9IGNhdGNoIChlKSB7XG4gICAgJHJlamVjdC5jYWxsKHsgX3c6IHByb21pc2UsIF9kOiBmYWxzZSB9LCBlKTsgLy8gd3JhcFxuICB9XG59O1xuXG4vLyBjb25zdHJ1Y3RvciBwb2x5ZmlsbFxuaWYgKCFVU0VfTkFUSVZFKSB7XG4gIC8vIDI1LjQuMy4xIFByb21pc2UoZXhlY3V0b3IpXG4gICRQcm9taXNlID0gZnVuY3Rpb24gUHJvbWlzZShleGVjdXRvcikge1xuICAgIGFuSW5zdGFuY2UodGhpcywgJFByb21pc2UsIFBST01JU0UsICdfaCcpO1xuICAgIGFGdW5jdGlvbihleGVjdXRvcik7XG4gICAgSW50ZXJuYWwuY2FsbCh0aGlzKTtcbiAgICB0cnkge1xuICAgICAgZXhlY3V0b3IoY3R4KCRyZXNvbHZlLCB0aGlzLCAxKSwgY3R4KCRyZWplY3QsIHRoaXMsIDEpKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICRyZWplY3QuY2FsbCh0aGlzLCBlcnIpO1xuICAgIH1cbiAgfTtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gIEludGVybmFsID0gZnVuY3Rpb24gUHJvbWlzZShleGVjdXRvcikge1xuICAgIHRoaXMuX2MgPSBbXTsgICAgICAgICAgICAgLy8gPC0gYXdhaXRpbmcgcmVhY3Rpb25zXG4gICAgdGhpcy5fYSA9IHVuZGVmaW5lZDsgICAgICAvLyA8LSBjaGVja2VkIGluIGlzVW5oYW5kbGVkIHJlYWN0aW9uc1xuICAgIHRoaXMuX3MgPSAwOyAgICAgICAgICAgICAgLy8gPC0gc3RhdGVcbiAgICB0aGlzLl9kID0gZmFsc2U7ICAgICAgICAgIC8vIDwtIGRvbmVcbiAgICB0aGlzLl92ID0gdW5kZWZpbmVkOyAgICAgIC8vIDwtIHZhbHVlXG4gICAgdGhpcy5faCA9IDA7ICAgICAgICAgICAgICAvLyA8LSByZWplY3Rpb24gc3RhdGUsIDAgLSBkZWZhdWx0LCAxIC0gaGFuZGxlZCwgMiAtIHVuaGFuZGxlZFxuICAgIHRoaXMuX24gPSBmYWxzZTsgICAgICAgICAgLy8gPC0gbm90aWZ5XG4gIH07XG4gIEludGVybmFsLnByb3RvdHlwZSA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lLWFsbCcpKCRQcm9taXNlLnByb3RvdHlwZSwge1xuICAgIC8vIDI1LjQuNS4zIFByb21pc2UucHJvdG90eXBlLnRoZW4ob25GdWxmaWxsZWQsIG9uUmVqZWN0ZWQpXG4gICAgdGhlbjogZnVuY3Rpb24gdGhlbihvbkZ1bGZpbGxlZCwgb25SZWplY3RlZCkge1xuICAgICAgdmFyIHJlYWN0aW9uID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkoc3BlY2llc0NvbnN0cnVjdG9yKHRoaXMsICRQcm9taXNlKSk7XG4gICAgICByZWFjdGlvbi5vayA9IHR5cGVvZiBvbkZ1bGZpbGxlZCA9PSAnZnVuY3Rpb24nID8gb25GdWxmaWxsZWQgOiB0cnVlO1xuICAgICAgcmVhY3Rpb24uZmFpbCA9IHR5cGVvZiBvblJlamVjdGVkID09ICdmdW5jdGlvbicgJiYgb25SZWplY3RlZDtcbiAgICAgIHJlYWN0aW9uLmRvbWFpbiA9IGlzTm9kZSA/IHByb2Nlc3MuZG9tYWluIDogdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fYy5wdXNoKHJlYWN0aW9uKTtcbiAgICAgIGlmICh0aGlzLl9hKSB0aGlzLl9hLnB1c2gocmVhY3Rpb24pO1xuICAgICAgaWYgKHRoaXMuX3MpIG5vdGlmeSh0aGlzLCBmYWxzZSk7XG4gICAgICByZXR1cm4gcmVhY3Rpb24ucHJvbWlzZTtcbiAgICB9LFxuICAgIC8vIDI1LjQuNS4xIFByb21pc2UucHJvdG90eXBlLmNhdGNoKG9uUmVqZWN0ZWQpXG4gICAgJ2NhdGNoJzogZnVuY3Rpb24gKG9uUmVqZWN0ZWQpIHtcbiAgICAgIHJldHVybiB0aGlzLnRoZW4odW5kZWZpbmVkLCBvblJlamVjdGVkKTtcbiAgICB9XG4gIH0pO1xuICBPd25Qcm9taXNlQ2FwYWJpbGl0eSA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgcHJvbWlzZSA9IG5ldyBJbnRlcm5hbCgpO1xuICAgIHRoaXMucHJvbWlzZSA9IHByb21pc2U7XG4gICAgdGhpcy5yZXNvbHZlID0gY3R4KCRyZXNvbHZlLCBwcm9taXNlLCAxKTtcbiAgICB0aGlzLnJlamVjdCA9IGN0eCgkcmVqZWN0LCBwcm9taXNlLCAxKTtcbiAgfTtcbiAgbmV3UHJvbWlzZUNhcGFiaWxpdHlNb2R1bGUuZiA9IG5ld1Byb21pc2VDYXBhYmlsaXR5ID0gZnVuY3Rpb24gKEMpIHtcbiAgICByZXR1cm4gQyA9PT0gJFByb21pc2UgfHwgQyA9PT0gV3JhcHBlclxuICAgICAgPyBuZXcgT3duUHJvbWlzZUNhcGFiaWxpdHkoQylcbiAgICAgIDogbmV3R2VuZXJpY1Byb21pc2VDYXBhYmlsaXR5KEMpO1xuICB9O1xufVxuXG4kZXhwb3J0KCRleHBvcnQuRyArICRleHBvcnQuVyArICRleHBvcnQuRiAqICFVU0VfTkFUSVZFLCB7IFByb21pc2U6ICRQcm9taXNlIH0pO1xucmVxdWlyZSgnLi9fc2V0LXRvLXN0cmluZy10YWcnKSgkUHJvbWlzZSwgUFJPTUlTRSk7XG5yZXF1aXJlKCcuL19zZXQtc3BlY2llcycpKFBST01JU0UpO1xuV3JhcHBlciA9IHJlcXVpcmUoJy4vX2NvcmUnKVtQUk9NSVNFXTtcblxuLy8gc3RhdGljc1xuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhVVNFX05BVElWRSwgUFJPTUlTRSwge1xuICAvLyAyNS40LjQuNSBQcm9taXNlLnJlamVjdChyKVxuICByZWplY3Q6IGZ1bmN0aW9uIHJlamVjdChyKSB7XG4gICAgdmFyIGNhcGFiaWxpdHkgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eSh0aGlzKTtcbiAgICB2YXIgJCRyZWplY3QgPSBjYXBhYmlsaXR5LnJlamVjdDtcbiAgICAkJHJlamVjdChyKTtcbiAgICByZXR1cm4gY2FwYWJpbGl0eS5wcm9taXNlO1xuICB9XG59KTtcbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogKExJQlJBUlkgfHwgIVVTRV9OQVRJVkUpLCBQUk9NSVNFLCB7XG4gIC8vIDI1LjQuNC42IFByb21pc2UucmVzb2x2ZSh4KVxuICByZXNvbHZlOiBmdW5jdGlvbiByZXNvbHZlKHgpIHtcbiAgICByZXR1cm4gcHJvbWlzZVJlc29sdmUoTElCUkFSWSAmJiB0aGlzID09PSBXcmFwcGVyID8gJFByb21pc2UgOiB0aGlzLCB4KTtcbiAgfVxufSk7XG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICEoVVNFX05BVElWRSAmJiByZXF1aXJlKCcuL19pdGVyLWRldGVjdCcpKGZ1bmN0aW9uIChpdGVyKSB7XG4gICRQcm9taXNlLmFsbChpdGVyKVsnY2F0Y2gnXShlbXB0eSk7XG59KSksIFBST01JU0UsIHtcbiAgLy8gMjUuNC40LjEgUHJvbWlzZS5hbGwoaXRlcmFibGUpXG4gIGFsbDogZnVuY3Rpb24gYWxsKGl0ZXJhYmxlKSB7XG4gICAgdmFyIEMgPSB0aGlzO1xuICAgIHZhciBjYXBhYmlsaXR5ID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkoQyk7XG4gICAgdmFyIHJlc29sdmUgPSBjYXBhYmlsaXR5LnJlc29sdmU7XG4gICAgdmFyIHJlamVjdCA9IGNhcGFiaWxpdHkucmVqZWN0O1xuICAgIHZhciByZXN1bHQgPSBwZXJmb3JtKGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciB2YWx1ZXMgPSBbXTtcbiAgICAgIHZhciBpbmRleCA9IDA7XG4gICAgICB2YXIgcmVtYWluaW5nID0gMTtcbiAgICAgIGZvck9mKGl0ZXJhYmxlLCBmYWxzZSwgZnVuY3Rpb24gKHByb21pc2UpIHtcbiAgICAgICAgdmFyICRpbmRleCA9IGluZGV4Kys7XG4gICAgICAgIHZhciBhbHJlYWR5Q2FsbGVkID0gZmFsc2U7XG4gICAgICAgIHZhbHVlcy5wdXNoKHVuZGVmaW5lZCk7XG4gICAgICAgIHJlbWFpbmluZysrO1xuICAgICAgICBDLnJlc29sdmUocHJvbWlzZSkudGhlbihmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICBpZiAoYWxyZWFkeUNhbGxlZCkgcmV0dXJuO1xuICAgICAgICAgIGFscmVhZHlDYWxsZWQgPSB0cnVlO1xuICAgICAgICAgIHZhbHVlc1skaW5kZXhdID0gdmFsdWU7XG4gICAgICAgICAgLS1yZW1haW5pbmcgfHwgcmVzb2x2ZSh2YWx1ZXMpO1xuICAgICAgICB9LCByZWplY3QpO1xuICAgICAgfSk7XG4gICAgICAtLXJlbWFpbmluZyB8fCByZXNvbHZlKHZhbHVlcyk7XG4gICAgfSk7XG4gICAgaWYgKHJlc3VsdC5lKSByZWplY3QocmVzdWx0LnYpO1xuICAgIHJldHVybiBjYXBhYmlsaXR5LnByb21pc2U7XG4gIH0sXG4gIC8vIDI1LjQuNC40IFByb21pc2UucmFjZShpdGVyYWJsZSlcbiAgcmFjZTogZnVuY3Rpb24gcmFjZShpdGVyYWJsZSkge1xuICAgIHZhciBDID0gdGhpcztcbiAgICB2YXIgY2FwYWJpbGl0eSA9IG5ld1Byb21pc2VDYXBhYmlsaXR5KEMpO1xuICAgIHZhciByZWplY3QgPSBjYXBhYmlsaXR5LnJlamVjdDtcbiAgICB2YXIgcmVzdWx0ID0gcGVyZm9ybShmdW5jdGlvbiAoKSB7XG4gICAgICBmb3JPZihpdGVyYWJsZSwgZmFsc2UsIGZ1bmN0aW9uIChwcm9taXNlKSB7XG4gICAgICAgIEMucmVzb2x2ZShwcm9taXNlKS50aGVuKGNhcGFiaWxpdHkucmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIGlmIChyZXN1bHQuZSkgcmVqZWN0KHJlc3VsdC52KTtcbiAgICByZXR1cm4gY2FwYWJpbGl0eS5wcm9taXNlO1xuICB9XG59KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYucHJvbWlzZS5qc1xuLy8gbW9kdWxlIGlkID0gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5wcm9taXNlLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gbWFpbiIsIid1c2Ugc3RyaWN0JztcbnZhciAkYXQgPSByZXF1aXJlKCcuL19zdHJpbmctYXQnKSh0cnVlKTtcblxuLy8gMjEuMS4zLjI3IFN0cmluZy5wcm90b3R5cGVbQEBpdGVyYXRvcl0oKVxucmVxdWlyZSgnLi9faXRlci1kZWZpbmUnKShTdHJpbmcsICdTdHJpbmcnLCBmdW5jdGlvbiAoaXRlcmF0ZWQpIHtcbiAgdGhpcy5fdCA9IFN0cmluZyhpdGVyYXRlZCk7IC8vIHRhcmdldFxuICB0aGlzLl9pID0gMDsgICAgICAgICAgICAgICAgLy8gbmV4dCBpbmRleFxuLy8gMjEuMS41LjIuMSAlU3RyaW5nSXRlcmF0b3JQcm90b3R5cGUlLm5leHQoKVxufSwgZnVuY3Rpb24gKCkge1xuICB2YXIgTyA9IHRoaXMuX3Q7XG4gIHZhciBpbmRleCA9IHRoaXMuX2k7XG4gIHZhciBwb2ludDtcbiAgaWYgKGluZGV4ID49IE8ubGVuZ3RoKSByZXR1cm4geyB2YWx1ZTogdW5kZWZpbmVkLCBkb25lOiB0cnVlIH07XG4gIHBvaW50ID0gJGF0KE8sIGluZGV4KTtcbiAgdGhpcy5faSArPSBwb2ludC5sZW5ndGg7XG4gIHJldHVybiB7IHZhbHVlOiBwb2ludCwgZG9uZTogZmFsc2UgfTtcbn0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3IuanNcbi8vIG1vZHVsZSBpZCA9IC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gbWFpbiIsIid1c2Ugc3RyaWN0Jztcbi8vIEVDTUFTY3JpcHQgNiBzeW1ib2xzIHNoaW1cbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJyk7XG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xudmFyIHJlZGVmaW5lID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUnKTtcbnZhciBNRVRBID0gcmVxdWlyZSgnLi9fbWV0YScpLktFWTtcbnZhciAkZmFpbHMgPSByZXF1aXJlKCcuL19mYWlscycpO1xudmFyIHNoYXJlZCA9IHJlcXVpcmUoJy4vX3NoYXJlZCcpO1xudmFyIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZSgnLi9fc2V0LXRvLXN0cmluZy10YWcnKTtcbnZhciB1aWQgPSByZXF1aXJlKCcuL191aWQnKTtcbnZhciB3a3MgPSByZXF1aXJlKCcuL193a3MnKTtcbnZhciB3a3NFeHQgPSByZXF1aXJlKCcuL193a3MtZXh0Jyk7XG52YXIgd2tzRGVmaW5lID0gcmVxdWlyZSgnLi9fd2tzLWRlZmluZScpO1xudmFyIGVudW1LZXlzID0gcmVxdWlyZSgnLi9fZW51bS1rZXlzJyk7XG52YXIgaXNBcnJheSA9IHJlcXVpcmUoJy4vX2lzLWFycmF5Jyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcbnZhciB0b1ByaW1pdGl2ZSA9IHJlcXVpcmUoJy4vX3RvLXByaW1pdGl2ZScpO1xudmFyIGNyZWF0ZURlc2MgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJyk7XG52YXIgX2NyZWF0ZSA9IHJlcXVpcmUoJy4vX29iamVjdC1jcmVhdGUnKTtcbnZhciBnT1BORXh0ID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcG4tZXh0Jyk7XG52YXIgJEdPUEQgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wZCcpO1xudmFyICREUCA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpO1xudmFyICRrZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKTtcbnZhciBnT1BEID0gJEdPUEQuZjtcbnZhciBkUCA9ICREUC5mO1xudmFyIGdPUE4gPSBnT1BORXh0LmY7XG52YXIgJFN5bWJvbCA9IGdsb2JhbC5TeW1ib2w7XG52YXIgJEpTT04gPSBnbG9iYWwuSlNPTjtcbnZhciBfc3RyaW5naWZ5ID0gJEpTT04gJiYgJEpTT04uc3RyaW5naWZ5O1xudmFyIFBST1RPVFlQRSA9ICdwcm90b3R5cGUnO1xudmFyIEhJRERFTiA9IHdrcygnX2hpZGRlbicpO1xudmFyIFRPX1BSSU1JVElWRSA9IHdrcygndG9QcmltaXRpdmUnKTtcbnZhciBpc0VudW0gPSB7fS5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcbnZhciBTeW1ib2xSZWdpc3RyeSA9IHNoYXJlZCgnc3ltYm9sLXJlZ2lzdHJ5Jyk7XG52YXIgQWxsU3ltYm9scyA9IHNoYXJlZCgnc3ltYm9scycpO1xudmFyIE9QU3ltYm9scyA9IHNoYXJlZCgnb3Atc3ltYm9scycpO1xudmFyIE9iamVjdFByb3RvID0gT2JqZWN0W1BST1RPVFlQRV07XG52YXIgVVNFX05BVElWRSA9IHR5cGVvZiAkU3ltYm9sID09ICdmdW5jdGlvbic7XG52YXIgUU9iamVjdCA9IGdsb2JhbC5RT2JqZWN0O1xuLy8gRG9uJ3QgdXNlIHNldHRlcnMgaW4gUXQgU2NyaXB0LCBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvMTczXG52YXIgc2V0dGVyID0gIVFPYmplY3QgfHwgIVFPYmplY3RbUFJPVE9UWVBFXSB8fCAhUU9iamVjdFtQUk9UT1RZUEVdLmZpbmRDaGlsZDtcblxuLy8gZmFsbGJhY2sgZm9yIG9sZCBBbmRyb2lkLCBodHRwczovL2NvZGUuZ29vZ2xlLmNvbS9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9Njg3XG52YXIgc2V0U3ltYm9sRGVzYyA9IERFU0NSSVBUT1JTICYmICRmYWlscyhmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBfY3JlYXRlKGRQKHt9LCAnYScsIHtcbiAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGRQKHRoaXMsICdhJywgeyB2YWx1ZTogNyB9KS5hOyB9XG4gIH0pKS5hICE9IDc7XG59KSA/IGZ1bmN0aW9uIChpdCwga2V5LCBEKSB7XG4gIHZhciBwcm90b0Rlc2MgPSBnT1BEKE9iamVjdFByb3RvLCBrZXkpO1xuICBpZiAocHJvdG9EZXNjKSBkZWxldGUgT2JqZWN0UHJvdG9ba2V5XTtcbiAgZFAoaXQsIGtleSwgRCk7XG4gIGlmIChwcm90b0Rlc2MgJiYgaXQgIT09IE9iamVjdFByb3RvKSBkUChPYmplY3RQcm90bywga2V5LCBwcm90b0Rlc2MpO1xufSA6IGRQO1xuXG52YXIgd3JhcCA9IGZ1bmN0aW9uICh0YWcpIHtcbiAgdmFyIHN5bSA9IEFsbFN5bWJvbHNbdGFnXSA9IF9jcmVhdGUoJFN5bWJvbFtQUk9UT1RZUEVdKTtcbiAgc3ltLl9rID0gdGFnO1xuICByZXR1cm4gc3ltO1xufTtcblxudmFyIGlzU3ltYm9sID0gVVNFX05BVElWRSAmJiB0eXBlb2YgJFN5bWJvbC5pdGVyYXRvciA9PSAnc3ltYm9sJyA/IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gdHlwZW9mIGl0ID09ICdzeW1ib2wnO1xufSA6IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXQgaW5zdGFuY2VvZiAkU3ltYm9sO1xufTtcblxudmFyICRkZWZpbmVQcm9wZXJ0eSA9IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KGl0LCBrZXksIEQpIHtcbiAgaWYgKGl0ID09PSBPYmplY3RQcm90bykgJGRlZmluZVByb3BlcnR5KE9QU3ltYm9scywga2V5LCBEKTtcbiAgYW5PYmplY3QoaXQpO1xuICBrZXkgPSB0b1ByaW1pdGl2ZShrZXksIHRydWUpO1xuICBhbk9iamVjdChEKTtcbiAgaWYgKGhhcyhBbGxTeW1ib2xzLCBrZXkpKSB7XG4gICAgaWYgKCFELmVudW1lcmFibGUpIHtcbiAgICAgIGlmICghaGFzKGl0LCBISURERU4pKSBkUChpdCwgSElEREVOLCBjcmVhdGVEZXNjKDEsIHt9KSk7XG4gICAgICBpdFtISURERU5dW2tleV0gPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoaGFzKGl0LCBISURERU4pICYmIGl0W0hJRERFTl1ba2V5XSkgaXRbSElEREVOXVtrZXldID0gZmFsc2U7XG4gICAgICBEID0gX2NyZWF0ZShELCB7IGVudW1lcmFibGU6IGNyZWF0ZURlc2MoMCwgZmFsc2UpIH0pO1xuICAgIH0gcmV0dXJuIHNldFN5bWJvbERlc2MoaXQsIGtleSwgRCk7XG4gIH0gcmV0dXJuIGRQKGl0LCBrZXksIEQpO1xufTtcbnZhciAkZGVmaW5lUHJvcGVydGllcyA9IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXMoaXQsIFApIHtcbiAgYW5PYmplY3QoaXQpO1xuICB2YXIga2V5cyA9IGVudW1LZXlzKFAgPSB0b0lPYmplY3QoUCkpO1xuICB2YXIgaSA9IDA7XG4gIHZhciBsID0ga2V5cy5sZW5ndGg7XG4gIHZhciBrZXk7XG4gIHdoaWxlIChsID4gaSkgJGRlZmluZVByb3BlcnR5KGl0LCBrZXkgPSBrZXlzW2krK10sIFBba2V5XSk7XG4gIHJldHVybiBpdDtcbn07XG52YXIgJGNyZWF0ZSA9IGZ1bmN0aW9uIGNyZWF0ZShpdCwgUCkge1xuICByZXR1cm4gUCA9PT0gdW5kZWZpbmVkID8gX2NyZWF0ZShpdCkgOiAkZGVmaW5lUHJvcGVydGllcyhfY3JlYXRlKGl0KSwgUCk7XG59O1xudmFyICRwcm9wZXJ0eUlzRW51bWVyYWJsZSA9IGZ1bmN0aW9uIHByb3BlcnR5SXNFbnVtZXJhYmxlKGtleSkge1xuICB2YXIgRSA9IGlzRW51bS5jYWxsKHRoaXMsIGtleSA9IHRvUHJpbWl0aXZlKGtleSwgdHJ1ZSkpO1xuICBpZiAodGhpcyA9PT0gT2JqZWN0UHJvdG8gJiYgaGFzKEFsbFN5bWJvbHMsIGtleSkgJiYgIWhhcyhPUFN5bWJvbHMsIGtleSkpIHJldHVybiBmYWxzZTtcbiAgcmV0dXJuIEUgfHwgIWhhcyh0aGlzLCBrZXkpIHx8ICFoYXMoQWxsU3ltYm9scywga2V5KSB8fCBoYXModGhpcywgSElEREVOKSAmJiB0aGlzW0hJRERFTl1ba2V5XSA/IEUgOiB0cnVlO1xufTtcbnZhciAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGl0LCBrZXkpIHtcbiAgaXQgPSB0b0lPYmplY3QoaXQpO1xuICBrZXkgPSB0b1ByaW1pdGl2ZShrZXksIHRydWUpO1xuICBpZiAoaXQgPT09IE9iamVjdFByb3RvICYmIGhhcyhBbGxTeW1ib2xzLCBrZXkpICYmICFoYXMoT1BTeW1ib2xzLCBrZXkpKSByZXR1cm47XG4gIHZhciBEID0gZ09QRChpdCwga2V5KTtcbiAgaWYgKEQgJiYgaGFzKEFsbFN5bWJvbHMsIGtleSkgJiYgIShoYXMoaXQsIEhJRERFTikgJiYgaXRbSElEREVOXVtrZXldKSkgRC5lbnVtZXJhYmxlID0gdHJ1ZTtcbiAgcmV0dXJuIEQ7XG59O1xudmFyICRnZXRPd25Qcm9wZXJ0eU5hbWVzID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlOYW1lcyhpdCkge1xuICB2YXIgbmFtZXMgPSBnT1BOKHRvSU9iamVjdChpdCkpO1xuICB2YXIgcmVzdWx0ID0gW107XG4gIHZhciBpID0gMDtcbiAgdmFyIGtleTtcbiAgd2hpbGUgKG5hbWVzLmxlbmd0aCA+IGkpIHtcbiAgICBpZiAoIWhhcyhBbGxTeW1ib2xzLCBrZXkgPSBuYW1lc1tpKytdKSAmJiBrZXkgIT0gSElEREVOICYmIGtleSAhPSBNRVRBKSByZXN1bHQucHVzaChrZXkpO1xuICB9IHJldHVybiByZXN1bHQ7XG59O1xudmFyICRnZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMoaXQpIHtcbiAgdmFyIElTX09QID0gaXQgPT09IE9iamVjdFByb3RvO1xuICB2YXIgbmFtZXMgPSBnT1BOKElTX09QID8gT1BTeW1ib2xzIDogdG9JT2JqZWN0KGl0KSk7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgdmFyIGkgPSAwO1xuICB2YXIga2V5O1xuICB3aGlsZSAobmFtZXMubGVuZ3RoID4gaSkge1xuICAgIGlmIChoYXMoQWxsU3ltYm9scywga2V5ID0gbmFtZXNbaSsrXSkgJiYgKElTX09QID8gaGFzKE9iamVjdFByb3RvLCBrZXkpIDogdHJ1ZSkpIHJlc3VsdC5wdXNoKEFsbFN5bWJvbHNba2V5XSk7XG4gIH0gcmV0dXJuIHJlc3VsdDtcbn07XG5cbi8vIDE5LjQuMS4xIFN5bWJvbChbZGVzY3JpcHRpb25dKVxuaWYgKCFVU0VfTkFUSVZFKSB7XG4gICRTeW1ib2wgPSBmdW5jdGlvbiBTeW1ib2woKSB7XG4gICAgaWYgKHRoaXMgaW5zdGFuY2VvZiAkU3ltYm9sKSB0aHJvdyBUeXBlRXJyb3IoJ1N5bWJvbCBpcyBub3QgYSBjb25zdHJ1Y3RvciEnKTtcbiAgICB2YXIgdGFnID0gdWlkKGFyZ3VtZW50cy5sZW5ndGggPiAwID8gYXJndW1lbnRzWzBdIDogdW5kZWZpbmVkKTtcbiAgICB2YXIgJHNldCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgaWYgKHRoaXMgPT09IE9iamVjdFByb3RvKSAkc2V0LmNhbGwoT1BTeW1ib2xzLCB2YWx1ZSk7XG4gICAgICBpZiAoaGFzKHRoaXMsIEhJRERFTikgJiYgaGFzKHRoaXNbSElEREVOXSwgdGFnKSkgdGhpc1tISURERU5dW3RhZ10gPSBmYWxzZTtcbiAgICAgIHNldFN5bWJvbERlc2ModGhpcywgdGFnLCBjcmVhdGVEZXNjKDEsIHZhbHVlKSk7XG4gICAgfTtcbiAgICBpZiAoREVTQ1JJUFRPUlMgJiYgc2V0dGVyKSBzZXRTeW1ib2xEZXNjKE9iamVjdFByb3RvLCB0YWcsIHsgY29uZmlndXJhYmxlOiB0cnVlLCBzZXQ6ICRzZXQgfSk7XG4gICAgcmV0dXJuIHdyYXAodGFnKTtcbiAgfTtcbiAgcmVkZWZpbmUoJFN5bWJvbFtQUk9UT1RZUEVdLCAndG9TdHJpbmcnLCBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5faztcbiAgfSk7XG5cbiAgJEdPUEQuZiA9ICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG4gICREUC5mID0gJGRlZmluZVByb3BlcnR5O1xuICByZXF1aXJlKCcuL19vYmplY3QtZ29wbicpLmYgPSBnT1BORXh0LmYgPSAkZ2V0T3duUHJvcGVydHlOYW1lcztcbiAgcmVxdWlyZSgnLi9fb2JqZWN0LXBpZScpLmYgPSAkcHJvcGVydHlJc0VudW1lcmFibGU7XG4gIHJlcXVpcmUoJy4vX29iamVjdC1nb3BzJykuZiA9ICRnZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG5cbiAgaWYgKERFU0NSSVBUT1JTICYmICFyZXF1aXJlKCcuL19saWJyYXJ5JykpIHtcbiAgICByZWRlZmluZShPYmplY3RQcm90bywgJ3Byb3BlcnR5SXNFbnVtZXJhYmxlJywgJHByb3BlcnR5SXNFbnVtZXJhYmxlLCB0cnVlKTtcbiAgfVxuXG4gIHdrc0V4dC5mID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICByZXR1cm4gd3JhcCh3a3MobmFtZSkpO1xuICB9O1xufVxuXG4kZXhwb3J0KCRleHBvcnQuRyArICRleHBvcnQuVyArICRleHBvcnQuRiAqICFVU0VfTkFUSVZFLCB7IFN5bWJvbDogJFN5bWJvbCB9KTtcblxuZm9yICh2YXIgZXM2U3ltYm9scyA9IChcbiAgLy8gMTkuNC4yLjIsIDE5LjQuMi4zLCAxOS40LjIuNCwgMTkuNC4yLjYsIDE5LjQuMi44LCAxOS40LjIuOSwgMTkuNC4yLjEwLCAxOS40LjIuMTEsIDE5LjQuMi4xMiwgMTkuNC4yLjEzLCAxOS40LjIuMTRcbiAgJ2hhc0luc3RhbmNlLGlzQ29uY2F0U3ByZWFkYWJsZSxpdGVyYXRvcixtYXRjaCxyZXBsYWNlLHNlYXJjaCxzcGVjaWVzLHNwbGl0LHRvUHJpbWl0aXZlLHRvU3RyaW5nVGFnLHVuc2NvcGFibGVzJ1xuKS5zcGxpdCgnLCcpLCBqID0gMDsgZXM2U3ltYm9scy5sZW5ndGggPiBqOyl3a3MoZXM2U3ltYm9sc1tqKytdKTtcblxuZm9yICh2YXIgd2VsbEtub3duU3ltYm9scyA9ICRrZXlzKHdrcy5zdG9yZSksIGsgPSAwOyB3ZWxsS25vd25TeW1ib2xzLmxlbmd0aCA+IGs7KSB3a3NEZWZpbmUod2VsbEtub3duU3ltYm9sc1trKytdKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhVVNFX05BVElWRSwgJ1N5bWJvbCcsIHtcbiAgLy8gMTkuNC4yLjEgU3ltYm9sLmZvcihrZXkpXG4gICdmb3InOiBmdW5jdGlvbiAoa2V5KSB7XG4gICAgcmV0dXJuIGhhcyhTeW1ib2xSZWdpc3RyeSwga2V5ICs9ICcnKVxuICAgICAgPyBTeW1ib2xSZWdpc3RyeVtrZXldXG4gICAgICA6IFN5bWJvbFJlZ2lzdHJ5W2tleV0gPSAkU3ltYm9sKGtleSk7XG4gIH0sXG4gIC8vIDE5LjQuMi41IFN5bWJvbC5rZXlGb3Ioc3ltKVxuICBrZXlGb3I6IGZ1bmN0aW9uIGtleUZvcihzeW0pIHtcbiAgICBpZiAoIWlzU3ltYm9sKHN5bSkpIHRocm93IFR5cGVFcnJvcihzeW0gKyAnIGlzIG5vdCBhIHN5bWJvbCEnKTtcbiAgICBmb3IgKHZhciBrZXkgaW4gU3ltYm9sUmVnaXN0cnkpIGlmIChTeW1ib2xSZWdpc3RyeVtrZXldID09PSBzeW0pIHJldHVybiBrZXk7XG4gIH0sXG4gIHVzZVNldHRlcjogZnVuY3Rpb24gKCkgeyBzZXR0ZXIgPSB0cnVlOyB9LFxuICB1c2VTaW1wbGU6IGZ1bmN0aW9uICgpIHsgc2V0dGVyID0gZmFsc2U7IH1cbn0pO1xuXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICFVU0VfTkFUSVZFLCAnT2JqZWN0Jywge1xuICAvLyAxOS4xLjIuMiBPYmplY3QuY3JlYXRlKE8gWywgUHJvcGVydGllc10pXG4gIGNyZWF0ZTogJGNyZWF0ZSxcbiAgLy8gMTkuMS4yLjQgT2JqZWN0LmRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpXG4gIGRlZmluZVByb3BlcnR5OiAkZGVmaW5lUHJvcGVydHksXG4gIC8vIDE5LjEuMi4zIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKE8sIFByb3BlcnRpZXMpXG4gIGRlZmluZVByb3BlcnRpZXM6ICRkZWZpbmVQcm9wZXJ0aWVzLFxuICAvLyAxOS4xLjIuNiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE8sIFApXG4gIGdldE93blByb3BlcnR5RGVzY3JpcHRvcjogJGdldE93blByb3BlcnR5RGVzY3JpcHRvcixcbiAgLy8gMTkuMS4yLjcgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoTylcbiAgZ2V0T3duUHJvcGVydHlOYW1lczogJGdldE93blByb3BlcnR5TmFtZXMsXG4gIC8vIDE5LjEuMi44IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoTylcbiAgZ2V0T3duUHJvcGVydHlTeW1ib2xzOiAkZ2V0T3duUHJvcGVydHlTeW1ib2xzXG59KTtcblxuLy8gMjQuMy4yIEpTT04uc3RyaW5naWZ5KHZhbHVlIFssIHJlcGxhY2VyIFssIHNwYWNlXV0pXG4kSlNPTiAmJiAkZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICghVVNFX05BVElWRSB8fCAkZmFpbHMoZnVuY3Rpb24gKCkge1xuICB2YXIgUyA9ICRTeW1ib2woKTtcbiAgLy8gTVMgRWRnZSBjb252ZXJ0cyBzeW1ib2wgdmFsdWVzIHRvIEpTT04gYXMge31cbiAgLy8gV2ViS2l0IGNvbnZlcnRzIHN5bWJvbCB2YWx1ZXMgdG8gSlNPTiBhcyBudWxsXG4gIC8vIFY4IHRocm93cyBvbiBib3hlZCBzeW1ib2xzXG4gIHJldHVybiBfc3RyaW5naWZ5KFtTXSkgIT0gJ1tudWxsXScgfHwgX3N0cmluZ2lmeSh7IGE6IFMgfSkgIT0gJ3t9JyB8fCBfc3RyaW5naWZ5KE9iamVjdChTKSkgIT0gJ3t9Jztcbn0pKSwgJ0pTT04nLCB7XG4gIHN0cmluZ2lmeTogZnVuY3Rpb24gc3RyaW5naWZ5KGl0KSB7XG4gICAgdmFyIGFyZ3MgPSBbaXRdO1xuICAgIHZhciBpID0gMTtcbiAgICB2YXIgcmVwbGFjZXIsICRyZXBsYWNlcjtcbiAgICB3aGlsZSAoYXJndW1lbnRzLmxlbmd0aCA+IGkpIGFyZ3MucHVzaChhcmd1bWVudHNbaSsrXSk7XG4gICAgJHJlcGxhY2VyID0gcmVwbGFjZXIgPSBhcmdzWzFdO1xuICAgIGlmICghaXNPYmplY3QocmVwbGFjZXIpICYmIGl0ID09PSB1bmRlZmluZWQgfHwgaXNTeW1ib2woaXQpKSByZXR1cm47IC8vIElFOCByZXR1cm5zIHN0cmluZyBvbiB1bmRlZmluZWRcbiAgICBpZiAoIWlzQXJyYXkocmVwbGFjZXIpKSByZXBsYWNlciA9IGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gICAgICBpZiAodHlwZW9mICRyZXBsYWNlciA9PSAnZnVuY3Rpb24nKSB2YWx1ZSA9ICRyZXBsYWNlci5jYWxsKHRoaXMsIGtleSwgdmFsdWUpO1xuICAgICAgaWYgKCFpc1N5bWJvbCh2YWx1ZSkpIHJldHVybiB2YWx1ZTtcbiAgICB9O1xuICAgIGFyZ3NbMV0gPSByZXBsYWNlcjtcbiAgICByZXR1cm4gX3N0cmluZ2lmeS5hcHBseSgkSlNPTiwgYXJncyk7XG4gIH1cbn0pO1xuXG4vLyAxOS40LjMuNCBTeW1ib2wucHJvdG90eXBlW0BAdG9QcmltaXRpdmVdKGhpbnQpXG4kU3ltYm9sW1BST1RPVFlQRV1bVE9fUFJJTUlUSVZFXSB8fCByZXF1aXJlKCcuL19oaWRlJykoJFN5bWJvbFtQUk9UT1RZUEVdLCBUT19QUklNSVRJVkUsICRTeW1ib2xbUFJPVE9UWVBFXS52YWx1ZU9mKTtcbi8vIDE5LjQuMy41IFN5bWJvbC5wcm90b3R5cGVbQEB0b1N0cmluZ1RhZ11cbnNldFRvU3RyaW5nVGFnKCRTeW1ib2wsICdTeW1ib2wnKTtcbi8vIDIwLjIuMS45IE1hdGhbQEB0b1N0cmluZ1RhZ11cbnNldFRvU3RyaW5nVGFnKE1hdGgsICdNYXRoJywgdHJ1ZSk7XG4vLyAyNC4zLjMgSlNPTltAQHRvU3RyaW5nVGFnXVxuc2V0VG9TdHJpbmdUYWcoZ2xvYmFsLkpTT04sICdKU09OJywgdHJ1ZSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LnN5bWJvbC5qc1xuLy8gbW9kdWxlIGlkID0gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5zeW1ib2wuanNcbi8vIG1vZHVsZSBjaHVua3MgPSBtYWluIiwiLy8gaHR0cHM6Ly9naXRodWIuY29tL3RjMzkvcHJvcG9zYWwtcHJvbWlzZS1maW5hbGx5XG4ndXNlIHN0cmljdCc7XG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xudmFyIGNvcmUgPSByZXF1aXJlKCcuL19jb3JlJyk7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgc3BlY2llc0NvbnN0cnVjdG9yID0gcmVxdWlyZSgnLi9fc3BlY2llcy1jb25zdHJ1Y3RvcicpO1xudmFyIHByb21pc2VSZXNvbHZlID0gcmVxdWlyZSgnLi9fcHJvbWlzZS1yZXNvbHZlJyk7XG5cbiRleHBvcnQoJGV4cG9ydC5QICsgJGV4cG9ydC5SLCAnUHJvbWlzZScsIHsgJ2ZpbmFsbHknOiBmdW5jdGlvbiAob25GaW5hbGx5KSB7XG4gIHZhciBDID0gc3BlY2llc0NvbnN0cnVjdG9yKHRoaXMsIGNvcmUuUHJvbWlzZSB8fCBnbG9iYWwuUHJvbWlzZSk7XG4gIHZhciBpc0Z1bmN0aW9uID0gdHlwZW9mIG9uRmluYWxseSA9PSAnZnVuY3Rpb24nO1xuICByZXR1cm4gdGhpcy50aGVuKFxuICAgIGlzRnVuY3Rpb24gPyBmdW5jdGlvbiAoeCkge1xuICAgICAgcmV0dXJuIHByb21pc2VSZXNvbHZlKEMsIG9uRmluYWxseSgpKS50aGVuKGZ1bmN0aW9uICgpIHsgcmV0dXJuIHg7IH0pO1xuICAgIH0gOiBvbkZpbmFsbHksXG4gICAgaXNGdW5jdGlvbiA/IGZ1bmN0aW9uIChlKSB7XG4gICAgICByZXR1cm4gcHJvbWlzZVJlc29sdmUoQywgb25GaW5hbGx5KCkpLnRoZW4oZnVuY3Rpb24gKCkgeyB0aHJvdyBlOyB9KTtcbiAgICB9IDogb25GaW5hbGx5XG4gICk7XG59IH0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNy5wcm9taXNlLmZpbmFsbHkuanNcbi8vIG1vZHVsZSBpZCA9IC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczcucHJvbWlzZS5maW5hbGx5LmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gbWFpbiIsIid1c2Ugc3RyaWN0Jztcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS90YzM5L3Byb3Bvc2FsLXByb21pc2UtdHJ5XG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xudmFyIG5ld1Byb21pc2VDYXBhYmlsaXR5ID0gcmVxdWlyZSgnLi9fbmV3LXByb21pc2UtY2FwYWJpbGl0eScpO1xudmFyIHBlcmZvcm0gPSByZXF1aXJlKCcuL19wZXJmb3JtJyk7XG5cbiRleHBvcnQoJGV4cG9ydC5TLCAnUHJvbWlzZScsIHsgJ3RyeSc6IGZ1bmN0aW9uIChjYWxsYmFja2ZuKSB7XG4gIHZhciBwcm9taXNlQ2FwYWJpbGl0eSA9IG5ld1Byb21pc2VDYXBhYmlsaXR5LmYodGhpcyk7XG4gIHZhciByZXN1bHQgPSBwZXJmb3JtKGNhbGxiYWNrZm4pO1xuICAocmVzdWx0LmUgPyBwcm9taXNlQ2FwYWJpbGl0eS5yZWplY3QgOiBwcm9taXNlQ2FwYWJpbGl0eS5yZXNvbHZlKShyZXN1bHQudik7XG4gIHJldHVybiBwcm9taXNlQ2FwYWJpbGl0eS5wcm9taXNlO1xufSB9KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczcucHJvbWlzZS50cnkuanNcbi8vIG1vZHVsZSBpZCA9IC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczcucHJvbWlzZS50cnkuanNcbi8vIG1vZHVsZSBjaHVua3MgPSBtYWluIiwicmVxdWlyZSgnLi9fd2tzLWRlZmluZScpKCdhc3luY0l0ZXJhdG9yJyk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM3LnN5bWJvbC5hc3luYy1pdGVyYXRvci5qc1xuLy8gbW9kdWxlIGlkID0gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNy5zeW1ib2wuYXN5bmMtaXRlcmF0b3IuanNcbi8vIG1vZHVsZSBjaHVua3MgPSBtYWluIiwicmVxdWlyZSgnLi9fd2tzLWRlZmluZScpKCdvYnNlcnZhYmxlJyk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM3LnN5bWJvbC5vYnNlcnZhYmxlLmpzXG4vLyBtb2R1bGUgaWQgPSAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM3LnN5bWJvbC5vYnNlcnZhYmxlLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gbWFpbiIsInJlcXVpcmUoJy4vZXM2LmFycmF5Lml0ZXJhdG9yJyk7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgaGlkZSA9IHJlcXVpcmUoJy4vX2hpZGUnKTtcbnZhciBJdGVyYXRvcnMgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKTtcbnZhciBUT19TVFJJTkdfVEFHID0gcmVxdWlyZSgnLi9fd2tzJykoJ3RvU3RyaW5nVGFnJyk7XG5cbnZhciBET01JdGVyYWJsZXMgPSAoJ0NTU1J1bGVMaXN0LENTU1N0eWxlRGVjbGFyYXRpb24sQ1NTVmFsdWVMaXN0LENsaWVudFJlY3RMaXN0LERPTVJlY3RMaXN0LERPTVN0cmluZ0xpc3QsJyArXG4gICdET01Ub2tlbkxpc3QsRGF0YVRyYW5zZmVySXRlbUxpc3QsRmlsZUxpc3QsSFRNTEFsbENvbGxlY3Rpb24sSFRNTENvbGxlY3Rpb24sSFRNTEZvcm1FbGVtZW50LEhUTUxTZWxlY3RFbGVtZW50LCcgK1xuICAnTWVkaWFMaXN0LE1pbWVUeXBlQXJyYXksTmFtZWROb2RlTWFwLE5vZGVMaXN0LFBhaW50UmVxdWVzdExpc3QsUGx1Z2luLFBsdWdpbkFycmF5LFNWR0xlbmd0aExpc3QsU1ZHTnVtYmVyTGlzdCwnICtcbiAgJ1NWR1BhdGhTZWdMaXN0LFNWR1BvaW50TGlzdCxTVkdTdHJpbmdMaXN0LFNWR1RyYW5zZm9ybUxpc3QsU291cmNlQnVmZmVyTGlzdCxTdHlsZVNoZWV0TGlzdCxUZXh0VHJhY2tDdWVMaXN0LCcgK1xuICAnVGV4dFRyYWNrTGlzdCxUb3VjaExpc3QnKS5zcGxpdCgnLCcpO1xuXG5mb3IgKHZhciBpID0gMDsgaSA8IERPTUl0ZXJhYmxlcy5sZW5ndGg7IGkrKykge1xuICB2YXIgTkFNRSA9IERPTUl0ZXJhYmxlc1tpXTtcbiAgdmFyIENvbGxlY3Rpb24gPSBnbG9iYWxbTkFNRV07XG4gIHZhciBwcm90byA9IENvbGxlY3Rpb24gJiYgQ29sbGVjdGlvbi5wcm90b3R5cGU7XG4gIGlmIChwcm90byAmJiAhcHJvdG9bVE9fU1RSSU5HX1RBR10pIGhpZGUocHJvdG8sIFRPX1NUUklOR19UQUcsIE5BTUUpO1xuICBJdGVyYXRvcnNbTkFNRV0gPSBJdGVyYXRvcnMuQXJyYXk7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZS5qc1xuLy8gbW9kdWxlIGlkID0gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL3dlYi5kb20uaXRlcmFibGUuanNcbi8vIG1vZHVsZSBjaHVua3MgPSBtYWluIiwiKGZ1bmN0aW9uIChnbG9iYWwsIGZhY3RvcnkpIHtcblx0dHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnID8gZmFjdG9yeShyZXF1aXJlKCdwcmVhY3QnKSkgOlxuXHR0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgPyBkZWZpbmUoWydwcmVhY3QnXSwgZmFjdG9yeSkgOlxuXHQoZmFjdG9yeShnbG9iYWwucHJlYWN0KSk7XG59KHRoaXMsIChmdW5jdGlvbiAocHJlYWN0KSB7ICd1c2Ugc3RyaWN0JztcblxuXHQvLyByZW5kZXIgbW9kZXNcblxuXHR2YXIgQVRUUl9LRVkgPSAnX19wcmVhY3RhdHRyXyc7XG5cblx0LyogZ2xvYmFsIF9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXyAqL1xuXG5cdC8qKlxuXHQgKiBSZXR1cm4gYSBSZWFjdEVsZW1lbnQtY29tcGF0aWJsZSBvYmplY3QgZm9yIHRoZSBjdXJyZW50IHN0YXRlIG9mIGEgcHJlYWN0XG5cdCAqIGNvbXBvbmVudC5cblx0ICovXG5cdGZ1bmN0aW9uIGNyZWF0ZVJlYWN0RWxlbWVudChjb21wb25lbnQpIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0dHlwZTogY29tcG9uZW50LmNvbnN0cnVjdG9yLFxuXHRcdFx0a2V5OiBjb21wb25lbnQua2V5LFxuXHRcdFx0cmVmOiBudWxsLCAvLyBVbnN1cHBvcnRlZFxuXHRcdFx0cHJvcHM6IGNvbXBvbmVudC5wcm9wc1xuXHRcdH07XG5cdH1cblxuXHQvKipcblx0ICogQ3JlYXRlIGEgUmVhY3RET01Db21wb25lbnQtY29tcGF0aWJsZSBvYmplY3QgZm9yIGEgZ2l2ZW4gRE9NIG5vZGUgcmVuZGVyZWRcblx0ICogYnkgcHJlYWN0LlxuXHQgKlxuXHQgKiBUaGlzIGltcGxlbWVudHMgdGhlIHN1YnNldCBvZiB0aGUgUmVhY3RET01Db21wb25lbnQgaW50ZXJmYWNlIHRoYXRcblx0ICogUmVhY3QgRGV2VG9vbHMgcmVxdWlyZXMgaW4gb3JkZXIgdG8gZGlzcGxheSBET00gbm9kZXMgaW4gdGhlIGluc3BlY3RvciB3aXRoXG5cdCAqIHRoZSBjb3JyZWN0IHR5cGUgYW5kIHByb3BlcnRpZXMuXG5cdCAqXG5cdCAqIEBwYXJhbSB7Tm9kZX0gbm9kZVxuXHQgKi9cblx0ZnVuY3Rpb24gY3JlYXRlUmVhY3RET01Db21wb25lbnQobm9kZSkge1xuXHRcdHZhciBjaGlsZE5vZGVzID0gbm9kZS5ub2RlVHlwZSA9PT0gTm9kZS5FTEVNRU5UX05PREUgPyBBcnJheS5mcm9tKG5vZGUuY2hpbGROb2RlcykgOiBbXTtcblxuXHRcdHZhciBpc1RleHQgPSBub2RlLm5vZGVUeXBlID09PSBOb2RlLlRFWFRfTk9ERTtcblxuXHRcdHJldHVybiB7XG5cdFx0XHQvLyAtLS0gUmVhY3RET01Db21wb25lbnQgaW50ZXJmYWNlXG5cdFx0XHRfY3VycmVudEVsZW1lbnQ6IGlzVGV4dCA/IG5vZGUudGV4dENvbnRlbnQgOiB7XG5cdFx0XHRcdHR5cGU6IG5vZGUubm9kZU5hbWUudG9Mb3dlckNhc2UoKSxcblx0XHRcdFx0cHJvcHM6IG5vZGVbQVRUUl9LRVldXG5cdFx0XHR9LFxuXHRcdFx0X3JlbmRlcmVkQ2hpbGRyZW46IGNoaWxkTm9kZXMubWFwKGZ1bmN0aW9uIChjaGlsZCkge1xuXHRcdFx0XHRpZiAoY2hpbGQuX2NvbXBvbmVudCkge1xuXHRcdFx0XHRcdHJldHVybiB1cGRhdGVSZWFjdENvbXBvbmVudChjaGlsZC5fY29tcG9uZW50KTtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gdXBkYXRlUmVhY3RDb21wb25lbnQoY2hpbGQpO1xuXHRcdFx0fSksXG5cdFx0XHRfc3RyaW5nVGV4dDogaXNUZXh0ID8gbm9kZS50ZXh0Q29udGVudCA6IG51bGwsXG5cblx0XHRcdC8vIC0tLSBBZGRpdGlvbmFsIHByb3BlcnRpZXMgdXNlZCBieSBwcmVhY3QgZGV2dG9vbHNcblxuXHRcdFx0Ly8gQSBmbGFnIGluZGljYXRpbmcgd2hldGhlciB0aGUgZGV2dG9vbHMgaGF2ZSBiZWVuIG5vdGlmaWVkIGFib3V0IHRoZVxuXHRcdFx0Ly8gZXhpc3RlbmNlIG9mIHRoaXMgY29tcG9uZW50IGluc3RhbmNlIHlldC5cblx0XHRcdC8vIFRoaXMgaXMgdXNlZCB0byBzZW5kIHRoZSBhcHByb3ByaWF0ZSBub3RpZmljYXRpb25zIHdoZW4gRE9NIGNvbXBvbmVudHNcblx0XHRcdC8vIGFyZSBhZGRlZCBvciB1cGRhdGVkIGJldHdlZW4gY29tcG9zaXRlIGNvbXBvbmVudCB1cGRhdGVzLlxuXHRcdFx0X2luRGV2VG9vbHM6IGZhbHNlLFxuXHRcdFx0bm9kZTogbm9kZVxuXHRcdH07XG5cdH1cblxuXHQvKipcblx0ICogUmV0dXJuIHRoZSBuYW1lIG9mIGEgY29tcG9uZW50IGNyZWF0ZWQgYnkgYSBgUmVhY3RFbGVtZW50YC1saWtlIG9iamVjdC5cblx0ICpcblx0ICogQHBhcmFtIHtSZWFjdEVsZW1lbnR9IGVsZW1lbnRcblx0ICovXG5cdGZ1bmN0aW9uIHR5cGVOYW1lKGVsZW1lbnQpIHtcblx0XHRpZiAodHlwZW9mIGVsZW1lbnQudHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0cmV0dXJuIGVsZW1lbnQudHlwZS5kaXNwbGF5TmFtZSB8fCBlbGVtZW50LnR5cGUubmFtZTtcblx0XHR9XG5cdFx0cmV0dXJuIGVsZW1lbnQudHlwZTtcblx0fVxuXG5cdC8qKlxuXHQgKiBSZXR1cm4gYSBSZWFjdENvbXBvc2l0ZUNvbXBvbmVudC1jb21wYXRpYmxlIG9iamVjdCBmb3IgYSBnaXZlbiBwcmVhY3Rcblx0ICogY29tcG9uZW50IGluc3RhbmNlLlxuXHQgKlxuXHQgKiBUaGlzIGltcGxlbWVudHMgdGhlIHN1YnNldCBvZiB0aGUgUmVhY3RDb21wb3NpdGVDb21wb25lbnQgaW50ZXJmYWNlIHRoYXRcblx0ICogdGhlIERldlRvb2xzIHJlcXVpcmVzIGluIG9yZGVyIHRvIHdhbGsgdGhlIGNvbXBvbmVudCB0cmVlIGFuZCBpbnNwZWN0IHRoZVxuXHQgKiBjb21wb25lbnQncyBwcm9wZXJ0aWVzLlxuXHQgKlxuXHQgKiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0LWRldnRvb2xzL2Jsb2IvZTMxZWM1ODI1MzQyZWRhNTcwYWNmYzliY2I0M2E0NDI1OGZjZWIyOC9iYWNrZW5kL2dldERhdGEuanNcblx0ICovXG5cdGZ1bmN0aW9uIGNyZWF0ZVJlYWN0Q29tcG9zaXRlQ29tcG9uZW50KGNvbXBvbmVudCkge1xuXHRcdHZhciBfY3VycmVudEVsZW1lbnQgPSBjcmVhdGVSZWFjdEVsZW1lbnQoY29tcG9uZW50KTtcblx0XHR2YXIgbm9kZSA9IGNvbXBvbmVudC5iYXNlO1xuXG5cdFx0dmFyIGluc3RhbmNlID0ge1xuXHRcdFx0Ly8gLS0tIFJlYWN0RE9NQ29tcG9uZW50IHByb3BlcnRpZXNcblx0XHRcdGdldE5hbWU6IGZ1bmN0aW9uIGdldE5hbWUoKSB7XG5cdFx0XHRcdHJldHVybiB0eXBlTmFtZShfY3VycmVudEVsZW1lbnQpO1xuXHRcdFx0fSxcblxuXHRcdFx0X2N1cnJlbnRFbGVtZW50OiBjcmVhdGVSZWFjdEVsZW1lbnQoY29tcG9uZW50KSxcblx0XHRcdHByb3BzOiBjb21wb25lbnQucHJvcHMsXG5cdFx0XHRzdGF0ZTogY29tcG9uZW50LnN0YXRlLFxuXHRcdFx0Zm9yY2VVcGRhdGU6IGNvbXBvbmVudC5mb3JjZVVwZGF0ZSAmJiBjb21wb25lbnQuZm9yY2VVcGRhdGUuYmluZChjb21wb25lbnQpLFxuXHRcdFx0c2V0U3RhdGU6IGNvbXBvbmVudC5zZXRTdGF0ZSAmJiBjb21wb25lbnQuc2V0U3RhdGUuYmluZChjb21wb25lbnQpLFxuXG5cdFx0XHQvLyAtLS0gQWRkaXRpb25hbCBwcm9wZXJ0aWVzIHVzZWQgYnkgcHJlYWN0IGRldnRvb2xzXG5cdFx0XHRub2RlOiBub2RlXG5cdFx0fTtcblxuXHRcdC8vIFJlYWN0IERldlRvb2xzIGV4cG9zZXMgdGhlIGBfaW5zdGFuY2VgIGZpZWxkIG9mIHRoZSBzZWxlY3RlZCBpdGVtIGluIHRoZVxuXHRcdC8vIGNvbXBvbmVudCB0cmVlIGFzIGAkcmAgaW4gdGhlIGNvbnNvbGUuICBgX2luc3RhbmNlYCBtdXN0IHJlZmVyIHRvIGFcblx0XHQvLyBSZWFjdCBDb21wb25lbnQgKG9yIGNvbXBhdGlibGUpIGNsYXNzIGluc3RhbmNlIHdpdGggYHByb3BzYCBhbmQgYHN0YXRlYFxuXHRcdC8vIGZpZWxkcyBhbmQgYHNldFN0YXRlKClgLCBgZm9yY2VVcGRhdGUoKWAgbWV0aG9kcy5cblx0XHRpbnN0YW5jZS5faW5zdGFuY2UgPSBjb21wb25lbnQ7XG5cblx0XHQvLyBJZiB0aGUgcm9vdCBub2RlIHJldHVybmVkIGJ5IHRoaXMgY29tcG9uZW50IGluc3RhbmNlJ3MgcmVuZGVyIGZ1bmN0aW9uXG5cdFx0Ly8gd2FzIGl0c2VsZiBhIGNvbXBvc2l0ZSBjb21wb25lbnQsIHRoZXJlIHdpbGwgYmUgYSBgX2NvbXBvbmVudGAgcHJvcGVydHlcblx0XHQvLyBjb250YWluaW5nIHRoZSBjaGlsZCBjb21wb25lbnQgaW5zdGFuY2UuXG5cdFx0aWYgKGNvbXBvbmVudC5fY29tcG9uZW50KSB7XG5cdFx0XHRpbnN0YW5jZS5fcmVuZGVyZWRDb21wb25lbnQgPSB1cGRhdGVSZWFjdENvbXBvbmVudChjb21wb25lbnQuX2NvbXBvbmVudCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vIE90aGVyd2lzZSwgaWYgdGhlIHJlbmRlcigpIGZ1bmN0aW9uIHJldHVybmVkIGFuIEhUTUwvU1ZHIGVsZW1lbnQsXG5cdFx0XHQvLyBjcmVhdGUgYSBSZWFjdERPTUNvbXBvbmVudC1saWtlIG9iamVjdCBmb3IgdGhlIERPTSBub2RlIGl0c2VsZi5cblx0XHRcdGluc3RhbmNlLl9yZW5kZXJlZENvbXBvbmVudCA9IHVwZGF0ZVJlYWN0Q29tcG9uZW50KG5vZGUpO1xuXHRcdH1cblxuXHRcdHJldHVybiBpbnN0YW5jZTtcblx0fVxuXG5cdC8qKlxuXHQgKiBNYXAgb2YgQ29tcG9uZW50fE5vZGUgdG8gUmVhY3RET01Db21wb25lbnR8UmVhY3RDb21wb3NpdGVDb21wb25lbnQtbGlrZVxuXHQgKiBvYmplY3QuXG5cdCAqXG5cdCAqIFRoZSBzYW1lIFJlYWN0KkNvbXBvbmVudCBpbnN0YW5jZSBtdXN0IGJlIHVzZWQgd2hlbiBub3RpZnlpbmcgZGV2dG9vbHNcblx0ICogYWJvdXQgdGhlIGluaXRpYWwgbW91bnQgb2YgYSBjb21wb25lbnQgYW5kIHN1YnNlcXVlbnQgdXBkYXRlcy5cblx0ICovXG5cdHZhciBpbnN0YW5jZU1hcCA9IHR5cGVvZiBNYXAgPT09ICdmdW5jdGlvbicgJiYgbmV3IE1hcCgpO1xuXG5cdC8qKlxuXHQgKiBVcGRhdGUgKGFuZCBjcmVhdGUgaWYgbmVjZXNzYXJ5KSB0aGUgUmVhY3RET01Db21wb25lbnR8UmVhY3RDb21wb3NpdGVDb21wb25lbnQtbGlrZVxuXHQgKiBpbnN0YW5jZSBmb3IgYSBnaXZlbiBwcmVhY3QgY29tcG9uZW50IGluc3RhbmNlIG9yIERPTSBOb2RlLlxuXHQgKlxuXHQgKiBAcGFyYW0ge0NvbXBvbmVudHxOb2RlfSBjb21wb25lbnRPck5vZGVcblx0ICovXG5cdGZ1bmN0aW9uIHVwZGF0ZVJlYWN0Q29tcG9uZW50KGNvbXBvbmVudE9yTm9kZSkge1xuXHRcdHZhciBuZXdJbnN0YW5jZSA9IGNvbXBvbmVudE9yTm9kZSBpbnN0YW5jZW9mIE5vZGUgPyBjcmVhdGVSZWFjdERPTUNvbXBvbmVudChjb21wb25lbnRPck5vZGUpIDogY3JlYXRlUmVhY3RDb21wb3NpdGVDb21wb25lbnQoY29tcG9uZW50T3JOb2RlKTtcblx0XHRpZiAoaW5zdGFuY2VNYXAuaGFzKGNvbXBvbmVudE9yTm9kZSkpIHtcblx0XHRcdHZhciBpbnN0ID0gaW5zdGFuY2VNYXAuZ2V0KGNvbXBvbmVudE9yTm9kZSk7XG5cdFx0XHRPYmplY3QuYXNzaWduKGluc3QsIG5ld0luc3RhbmNlKTtcblx0XHRcdHJldHVybiBpbnN0O1xuXHRcdH1cblx0XHRpbnN0YW5jZU1hcC5zZXQoY29tcG9uZW50T3JOb2RlLCBuZXdJbnN0YW5jZSk7XG5cdFx0cmV0dXJuIG5ld0luc3RhbmNlO1xuXHR9XG5cblx0ZnVuY3Rpb24gbmV4dFJvb3RLZXkocm9vdHMpIHtcblx0XHRyZXR1cm4gJy4nICsgT2JqZWN0LmtleXMocm9vdHMpLmxlbmd0aDtcblx0fVxuXG5cdC8qKlxuXHQgKiBGaW5kIGFsbCByb290IGNvbXBvbmVudCBpbnN0YW5jZXMgcmVuZGVyZWQgYnkgcHJlYWN0IGluIGBub2RlYCdzIGNoaWxkcmVuXG5cdCAqIGFuZCBhZGQgdGhlbSB0byB0aGUgYHJvb3RzYCBtYXAuXG5cdCAqXG5cdCAqIEBwYXJhbSB7RE9NRWxlbWVudH0gbm9kZVxuXHQgKiBAcGFyYW0ge1trZXk6IHN0cmluZ10gPT4gUmVhY3RET01Db21wb25lbnR8UmVhY3RDb21wb3NpdGVDb21wb25lbnR9XG5cdCAqL1xuXHRmdW5jdGlvbiBmaW5kUm9vdHMobm9kZSwgcm9vdHMpIHtcblx0XHRBcnJheS5mcm9tKG5vZGUuY2hpbGROb2RlcykuZm9yRWFjaChmdW5jdGlvbiAoY2hpbGQpIHtcblx0XHRcdGlmIChjaGlsZC5fY29tcG9uZW50KSB7XG5cdFx0XHRcdHJvb3RzW25leHRSb290S2V5KHJvb3RzKV0gPSB1cGRhdGVSZWFjdENvbXBvbmVudChjaGlsZC5fY29tcG9uZW50KTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGZpbmRSb290cyhjaGlsZCwgcm9vdHMpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9XG5cblx0LyoqXG5cdCAqIENyZWF0ZSBhIGJyaWRnZSBmb3IgZXhwb3NpbmcgcHJlYWN0J3MgY29tcG9uZW50IHRyZWUgdG8gUmVhY3QgRGV2VG9vbHMuXG5cdCAqXG5cdCAqIEl0IGNyZWF0ZXMgaW1wbGVtZW50YXRpb25zIG9mIHRoZSBpbnRlcmZhY2VzIHRoYXQgUmVhY3RET00gcGFzc2VzIHRvXG5cdCAqIGRldnRvb2xzIHRvIGVuYWJsZSBpdCB0byBxdWVyeSB0aGUgY29tcG9uZW50IHRyZWUgYW5kIGhvb2sgaW50byBjb21wb25lbnRcblx0ICogdXBkYXRlcy5cblx0ICpcblx0ICogU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC9ibG9iLzU5ZmY3NzQ5ZWRhMGNkODU4ZDVlZTU2ODMxNWJjYmExYmU3NWExY2Evc3JjL3JlbmRlcmVycy9kb20vUmVhY3RET00uanNcblx0ICogZm9yIGhvdyBSZWFjdERPTSBleHBvcnRzIGl0cyBpbnRlcm5hbHMgZm9yIHVzZSBieSB0aGUgZGV2dG9vbHMgYW5kXG5cdCAqIHRoZSBgYXR0YWNoUmVuZGVyZXIoKWAgZnVuY3Rpb24gaW5cblx0ICogaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0LWRldnRvb2xzL2Jsb2IvZTMxZWM1ODI1MzQyZWRhNTcwYWNmYzliY2I0M2E0NDI1OGZjZWIyOC9iYWNrZW5kL2F0dGFjaFJlbmRlcmVyLmpzXG5cdCAqIGZvciBob3cgdGhlIGRldnRvb2xzIGNvbnN1bWVzIHRoZSByZXN1bHRpbmcgb2JqZWN0cy5cblx0ICovXG5cdGZ1bmN0aW9uIGNyZWF0ZURldlRvb2xzQnJpZGdlKCkge1xuXHRcdC8vIFRoZSBkZXZ0b29scyBoYXMgZGlmZmVyZW50IHBhdGhzIGZvciBpbnRlcmFjdGluZyB3aXRoIHRoZSByZW5kZXJlcnMgZnJvbVxuXHRcdC8vIFJlYWN0IE5hdGl2ZSwgbGVnYWN5IFJlYWN0IERPTSBhbmQgY3VycmVudCBSZWFjdCBET00uXG5cdFx0Ly9cblx0XHQvLyBIZXJlIHdlIGVtdWxhdGUgdGhlIGludGVyZmFjZSBmb3IgdGhlIGN1cnJlbnQgUmVhY3QgRE9NICh2MTUrKSBsaWIuXG5cblx0XHQvLyBSZWFjdERPTUNvbXBvbmVudFRyZWUtbGlrZSBvYmplY3Rcblx0XHR2YXIgQ29tcG9uZW50VHJlZSA9IHtcblx0XHRcdGdldE5vZGVGcm9tSW5zdGFuY2U6IGZ1bmN0aW9uIGdldE5vZGVGcm9tSW5zdGFuY2UoaW5zdGFuY2UpIHtcblx0XHRcdFx0cmV0dXJuIGluc3RhbmNlLm5vZGU7XG5cdFx0XHR9LFxuXHRcdFx0Z2V0Q2xvc2VzdEluc3RhbmNlRnJvbU5vZGU6IGZ1bmN0aW9uIGdldENsb3Nlc3RJbnN0YW5jZUZyb21Ob2RlKG5vZGUpIHtcblx0XHRcdFx0d2hpbGUgKG5vZGUgJiYgIW5vZGUuX2NvbXBvbmVudCkge1xuXHRcdFx0XHRcdG5vZGUgPSBub2RlLnBhcmVudE5vZGU7XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIG5vZGUgPyB1cGRhdGVSZWFjdENvbXBvbmVudChub2RlLl9jb21wb25lbnQpIDogbnVsbDtcblx0XHRcdH1cblx0XHR9O1xuXG5cdFx0Ly8gTWFwIG9mIHJvb3QgSUQgKHRoZSBJRCBpcyB1bmltcG9ydGFudCkgdG8gY29tcG9uZW50IGluc3RhbmNlLlxuXHRcdHZhciByb290cyA9IHt9O1xuXHRcdGZpbmRSb290cyhkb2N1bWVudC5ib2R5LCByb290cyk7XG5cblx0XHQvLyBSZWFjdE1vdW50LWxpa2Ugb2JqZWN0XG5cdFx0Ly9cblx0XHQvLyBVc2VkIGJ5IGRldnRvb2xzIHRvIGRpc2NvdmVyIHRoZSBsaXN0IG9mIHJvb3QgY29tcG9uZW50IGluc3RhbmNlcyBhbmQgZ2V0XG5cdFx0Ly8gbm90aWZpZWQgd2hlbiBuZXcgcm9vdCBjb21wb25lbnRzIGFyZSByZW5kZXJlZC5cblx0XHR2YXIgTW91bnQgPSB7XG5cdFx0XHRfaW5zdGFuY2VzQnlSZWFjdFJvb3RJRDogcm9vdHMsXG5cblx0XHRcdC8vIFN0dWIgLSBSZWFjdCBEZXZUb29scyBleHBlY3RzIHRvIGZpbmQgdGhpcyBtZXRob2QgYW5kIHJlcGxhY2UgaXRcblx0XHRcdC8vIHdpdGggYSB3cmFwcGVyIGluIG9yZGVyIHRvIG9ic2VydmUgbmV3IHJvb3QgY29tcG9uZW50cyBiZWluZyBhZGRlZFxuXHRcdFx0X3JlbmRlck5ld1Jvb3RDb21wb25lbnQ6IGZ1bmN0aW9uIF9yZW5kZXJOZXdSb290Q29tcG9uZW50KCkgLyogaW5zdGFuY2UsIC4uLiAqL3t9XG5cdFx0fTtcblxuXHRcdC8vIFJlYWN0UmVjb25jaWxlci1saWtlIG9iamVjdFxuXHRcdHZhciBSZWNvbmNpbGVyID0ge1xuXHRcdFx0Ly8gU3R1YnMgLSBSZWFjdCBEZXZUb29scyBleHBlY3RzIHRvIGZpbmQgdGhlc2UgbWV0aG9kcyBhbmQgcmVwbGFjZSB0aGVtXG5cdFx0XHQvLyB3aXRoIHdyYXBwZXJzIGluIG9yZGVyIHRvIG9ic2VydmUgY29tcG9uZW50cyBiZWluZyBtb3VudGVkLCB1cGRhdGVkIGFuZFxuXHRcdFx0Ly8gdW5tb3VudGVkXG5cdFx0XHRtb3VudENvbXBvbmVudDogZnVuY3Rpb24gbW91bnRDb21wb25lbnQoKSAvKiBpbnN0YW5jZSwgLi4uICove30sXG5cdFx0XHRwZXJmb3JtVXBkYXRlSWZOZWNlc3Nhcnk6IGZ1bmN0aW9uIHBlcmZvcm1VcGRhdGVJZk5lY2Vzc2FyeSgpIC8qIGluc3RhbmNlLCAuLi4gKi97fSxcblx0XHRcdHJlY2VpdmVDb21wb25lbnQ6IGZ1bmN0aW9uIHJlY2VpdmVDb21wb25lbnQoKSAvKiBpbnN0YW5jZSwgLi4uICove30sXG5cdFx0XHR1bm1vdW50Q29tcG9uZW50OiBmdW5jdGlvbiB1bm1vdW50Q29tcG9uZW50KCkgLyogaW5zdGFuY2UsIC4uLiAqL3t9XG5cdFx0fTtcblxuXHRcdC8qKiBOb3RpZnkgZGV2dG9vbHMgdGhhdCBhIG5ldyBjb21wb25lbnQgaW5zdGFuY2UgaGFzIGJlZW4gbW91bnRlZCBpbnRvIHRoZSBET00uICovXG5cdFx0dmFyIGNvbXBvbmVudEFkZGVkID0gZnVuY3Rpb24gY29tcG9uZW50QWRkZWQoY29tcG9uZW50KSB7XG5cdFx0XHR2YXIgaW5zdGFuY2UgPSB1cGRhdGVSZWFjdENvbXBvbmVudChjb21wb25lbnQpO1xuXHRcdFx0aWYgKGlzUm9vdENvbXBvbmVudChjb21wb25lbnQpKSB7XG5cdFx0XHRcdGluc3RhbmNlLl9yb290SUQgPSBuZXh0Um9vdEtleShyb290cyk7XG5cdFx0XHRcdHJvb3RzW2luc3RhbmNlLl9yb290SURdID0gaW5zdGFuY2U7XG5cdFx0XHRcdE1vdW50Ll9yZW5kZXJOZXdSb290Q29tcG9uZW50KGluc3RhbmNlKTtcblx0XHRcdH1cblx0XHRcdHZpc2l0Tm9uQ29tcG9zaXRlQ2hpbGRyZW4oaW5zdGFuY2UsIGZ1bmN0aW9uIChjaGlsZEluc3QpIHtcblx0XHRcdFx0Y2hpbGRJbnN0Ll9pbkRldlRvb2xzID0gdHJ1ZTtcblx0XHRcdFx0UmVjb25jaWxlci5tb3VudENvbXBvbmVudChjaGlsZEluc3QpO1xuXHRcdFx0fSk7XG5cdFx0XHRSZWNvbmNpbGVyLm1vdW50Q29tcG9uZW50KGluc3RhbmNlKTtcblx0XHR9O1xuXG5cdFx0LyoqIE5vdGlmeSBkZXZ0b29scyB0aGF0IGEgY29tcG9uZW50IGhhcyBiZWVuIHVwZGF0ZWQgd2l0aCBuZXcgcHJvcHMvc3RhdGUuICovXG5cdFx0dmFyIGNvbXBvbmVudFVwZGF0ZWQgPSBmdW5jdGlvbiBjb21wb25lbnRVcGRhdGVkKGNvbXBvbmVudCkge1xuXHRcdFx0dmFyIHByZXZSZW5kZXJlZENoaWxkcmVuID0gW107XG5cdFx0XHR2YXIgaW5zdGFuY2UgPSBpbnN0YW5jZU1hcC5nZXQoY29tcG9uZW50KTtcblx0XHRcdGlmIChpbnN0YW5jZSkge1xuXHRcdFx0XHR2aXNpdE5vbkNvbXBvc2l0ZUNoaWxkcmVuKGluc3RhbmNlLCBmdW5jdGlvbiAoY2hpbGRJbnN0KSB7XG5cdFx0XHRcdFx0cHJldlJlbmRlcmVkQ2hpbGRyZW4ucHVzaChjaGlsZEluc3QpO1xuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHRcdC8vIE5vdGlmeSBkZXZ0b29scyBhYm91dCB1cGRhdGVzIHRvIHRoaXMgY29tcG9uZW50IGFuZCBhbnkgbm9uLWNvbXBvc2l0ZVxuXHRcdFx0Ly8gY2hpbGRyZW5cblx0XHRcdGluc3RhbmNlID0gdXBkYXRlUmVhY3RDb21wb25lbnQoY29tcG9uZW50KTtcblxuXHRcdFx0UmVjb25jaWxlci5yZWNlaXZlQ29tcG9uZW50KGluc3RhbmNlKTtcblx0XHRcdHZpc2l0Tm9uQ29tcG9zaXRlQ2hpbGRyZW4oaW5zdGFuY2UsIGZ1bmN0aW9uIChjaGlsZEluc3QpIHtcblx0XHRcdFx0aWYgKCFjaGlsZEluc3QuX2luRGV2VG9vbHMpIHtcblx0XHRcdFx0XHQvLyBOZXcgRE9NIGNoaWxkIGNvbXBvbmVudFxuXHRcdFx0XHRcdGNoaWxkSW5zdC5faW5EZXZUb29scyA9IHRydWU7XG5cdFx0XHRcdFx0UmVjb25jaWxlci5tb3VudENvbXBvbmVudChjaGlsZEluc3QpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdC8vIFVwZGF0ZWQgRE9NIGNoaWxkIGNvbXBvbmVudFxuXHRcdFx0XHRcdFJlY29uY2lsZXIucmVjZWl2ZUNvbXBvbmVudChjaGlsZEluc3QpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblxuXHRcdFx0Ly8gRm9yIGFueSBub24tY29tcG9zaXRlIGNoaWxkcmVuIHRoYXQgd2VyZSByZW1vdmVkIGJ5IHRoZSBsYXRlc3QgcmVuZGVyLFxuXHRcdFx0Ly8gcmVtb3ZlIHRoZSBjb3JyZXNwb25kaW5nIFJlYWN0RE9NQ29tcG9uZW50LWxpa2UgaW5zdGFuY2VzIGFuZCBub3RpZnlcblx0XHRcdC8vIHRoZSBkZXZ0b29sc1xuXHRcdFx0cHJldlJlbmRlcmVkQ2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbiAoY2hpbGRJbnN0KSB7XG5cdFx0XHRcdGlmICghZG9jdW1lbnQuYm9keS5jb250YWlucyhjaGlsZEluc3Qubm9kZSkpIHtcblx0XHRcdFx0XHRpbnN0YW5jZU1hcC5kZWxldGUoY2hpbGRJbnN0Lm5vZGUpO1xuXHRcdFx0XHRcdFJlY29uY2lsZXIudW5tb3VudENvbXBvbmVudChjaGlsZEluc3QpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR9O1xuXG5cdFx0LyoqIE5vdGlmeSBkZXZ0b29scyB0aGF0IGEgY29tcG9uZW50IGhhcyBiZWVuIHVubW91bnRlZCBmcm9tIHRoZSBET00uICovXG5cdFx0dmFyIGNvbXBvbmVudFJlbW92ZWQgPSBmdW5jdGlvbiBjb21wb25lbnRSZW1vdmVkKGNvbXBvbmVudCkge1xuXHRcdFx0dmFyIGluc3RhbmNlID0gdXBkYXRlUmVhY3RDb21wb25lbnQoY29tcG9uZW50KTtcblx0XHRcdHZpc2l0Tm9uQ29tcG9zaXRlQ2hpbGRyZW4oZnVuY3Rpb24gKGNoaWxkSW5zdCkge1xuXHRcdFx0XHRpbnN0YW5jZU1hcC5kZWxldGUoY2hpbGRJbnN0Lm5vZGUpO1xuXHRcdFx0XHRSZWNvbmNpbGVyLnVubW91bnRDb21wb25lbnQoY2hpbGRJbnN0KTtcblx0XHRcdH0pO1xuXHRcdFx0UmVjb25jaWxlci51bm1vdW50Q29tcG9uZW50KGluc3RhbmNlKTtcblx0XHRcdGluc3RhbmNlTWFwLmRlbGV0ZShjb21wb25lbnQpO1xuXHRcdFx0aWYgKGluc3RhbmNlLl9yb290SUQpIHtcblx0XHRcdFx0ZGVsZXRlIHJvb3RzW2luc3RhbmNlLl9yb290SURdO1xuXHRcdFx0fVxuXHRcdH07XG5cblx0XHRyZXR1cm4ge1xuXHRcdFx0Y29tcG9uZW50QWRkZWQ6IGNvbXBvbmVudEFkZGVkLFxuXHRcdFx0Y29tcG9uZW50VXBkYXRlZDogY29tcG9uZW50VXBkYXRlZCxcblx0XHRcdGNvbXBvbmVudFJlbW92ZWQ6IGNvbXBvbmVudFJlbW92ZWQsXG5cblx0XHRcdC8vIEludGVyZmFjZXMgcGFzc2VkIHRvIGRldnRvb2xzIHZpYSBfX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX18uaW5qZWN0KClcblx0XHRcdENvbXBvbmVudFRyZWU6IENvbXBvbmVudFRyZWUsXG5cdFx0XHRNb3VudDogTW91bnQsXG5cdFx0XHRSZWNvbmNpbGVyOiBSZWNvbmNpbGVyXG5cdFx0fTtcblx0fVxuXG5cdC8qKlxuXHQgKiBSZXR1cm4gYHRydWVgIGlmIGEgcHJlYWN0IGNvbXBvbmVudCBpcyBhIHRvcCBsZXZlbCBjb21wb25lbnQgcmVuZGVyZWQgYnlcblx0ICogYHJlbmRlcigpYCBpbnRvIGEgY29udGFpbmVyIEVsZW1lbnQuXG5cdCAqL1xuXHRmdW5jdGlvbiBpc1Jvb3RDb21wb25lbnQoY29tcG9uZW50KSB7XG5cdFx0Ly8gYF9wYXJlbnRDb21wb25lbnRgIGlzIGFjdHVhbGx5IGBfX3VgIGFmdGVyIG1pbmlmaWNhdGlvblxuXHRcdGlmIChjb21wb25lbnQuX3BhcmVudENvbXBvbmVudCB8fCBjb21wb25lbnQuX191KSB7XG5cdFx0XHQvLyBDb21wb25lbnQgd2l0aCBhIGNvbXBvc2l0ZSBwYXJlbnRcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdFx0aWYgKGNvbXBvbmVudC5iYXNlLnBhcmVudEVsZW1lbnQgJiYgY29tcG9uZW50LmJhc2UucGFyZW50RWxlbWVudFtBVFRSX0tFWV0pIHtcblx0XHRcdC8vIENvbXBvbmVudCB3aXRoIGEgcGFyZW50IERPTSBlbGVtZW50IHJlbmRlcmVkIGJ5IFByZWFjdFxuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxuXG5cdC8qKlxuXHQgKiBWaXNpdCBhbGwgY2hpbGQgaW5zdGFuY2VzIG9mIGEgUmVhY3RDb21wb3NpdGVDb21wb25lbnQtbGlrZSBvYmplY3QgdGhhdCBhcmVcblx0ICogbm90IGNvbXBvc2l0ZSBjb21wb25lbnRzIChpZS4gdGhleSByZXByZXNlbnQgRE9NIGVsZW1lbnRzIG9yIHRleHQpXG5cdCAqXG5cdCAqIEBwYXJhbSB7Q29tcG9uZW50fSBjb21wb25lbnRcblx0ICogQHBhcmFtIHsoQ29tcG9uZW50KSA9PiB2b2lkfSB2aXNpdG9yXG5cdCAqL1xuXHRmdW5jdGlvbiB2aXNpdE5vbkNvbXBvc2l0ZUNoaWxkcmVuKGNvbXBvbmVudCwgdmlzaXRvcikge1xuXHRcdGlmICghY29tcG9uZW50KSByZXR1cm47XG5cdFx0aWYgKGNvbXBvbmVudC5fcmVuZGVyZWRDb21wb25lbnQpIHtcblx0XHRcdGlmICghY29tcG9uZW50Ll9yZW5kZXJlZENvbXBvbmVudC5fY29tcG9uZW50KSB7XG5cdFx0XHRcdHZpc2l0b3IoY29tcG9uZW50Ll9yZW5kZXJlZENvbXBvbmVudCk7XG5cdFx0XHRcdHZpc2l0Tm9uQ29tcG9zaXRlQ2hpbGRyZW4oY29tcG9uZW50Ll9yZW5kZXJlZENvbXBvbmVudCwgdmlzaXRvcik7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIGlmIChjb21wb25lbnQuX3JlbmRlcmVkQ2hpbGRyZW4pIHtcblx0XHRcdGNvbXBvbmVudC5fcmVuZGVyZWRDaGlsZHJlbi5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCkge1xuXHRcdFx0XHR2aXNpdG9yKGNoaWxkKTtcblx0XHRcdFx0aWYgKCFjaGlsZC5fY29tcG9uZW50KSB2aXNpdE5vbkNvbXBvc2l0ZUNoaWxkcmVuKGNoaWxkLCB2aXNpdG9yKTtcblx0XHRcdH0pO1xuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiBDcmVhdGUgYSBicmlkZ2UgYmV0d2VlbiB0aGUgcHJlYWN0IGNvbXBvbmVudCB0cmVlIGFuZCBSZWFjdCdzIGRldiB0b29sc1xuXHQgKiBhbmQgcmVnaXN0ZXIgaXQuXG5cdCAqXG5cdCAqIEFmdGVyIHRoaXMgZnVuY3Rpb24gaXMgY2FsbGVkLCB0aGUgUmVhY3QgRGV2IFRvb2xzIHNob3VsZCBiZSBhYmxlIHRvIGRldGVjdFxuXHQgKiBcIlJlYWN0XCIgb24gdGhlIHBhZ2UgYW5kIHNob3cgdGhlIGNvbXBvbmVudCB0cmVlLlxuXHQgKlxuXHQgKiBUaGlzIGZ1bmN0aW9uIGhvb2tzIGludG8gcHJlYWN0IFZOb2RlIGNyZWF0aW9uIGluIG9yZGVyIHRvIGV4cG9zZSBmdW5jdGlvbmFsXG5cdCAqIGNvbXBvbmVudHMgY29ycmVjdGx5LCBzbyBpdCBzaG91bGQgYmUgY2FsbGVkIGJlZm9yZSB0aGUgcm9vdCBjb21wb25lbnQocylcblx0ICogYXJlIHJlbmRlcmVkLlxuXHQgKlxuXHQgKiBSZXR1cm5zIGEgY2xlYW51cCBmdW5jdGlvbiB3aGljaCB1bnJlZ2lzdGVycyB0aGUgaG9va3MuXG5cdCAqL1xuXHRmdW5jdGlvbiBpbml0RGV2VG9vbHMoKSB7XG5cdFx0aWYgKHR5cGVvZiBfX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX18gPT09ICd1bmRlZmluZWQnKSB7XG5cdFx0XHQvLyBSZWFjdCBEZXZUb29scyBhcmUgbm90IGluc3RhbGxlZFxuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdC8vIE5vdGlmeSBkZXZ0b29scyB3aGVuIHByZWFjdCBjb21wb25lbnRzIGFyZSBtb3VudGVkLCB1cGRhdGVkIG9yIHVubW91bnRlZFxuXHRcdHZhciBicmlkZ2UgPSBjcmVhdGVEZXZUb29sc0JyaWRnZSgpO1xuXG5cdFx0dmFyIG5leHRBZnRlck1vdW50ID0gcHJlYWN0Lm9wdGlvbnMuYWZ0ZXJNb3VudDtcblx0XHRwcmVhY3Qub3B0aW9ucy5hZnRlck1vdW50ID0gZnVuY3Rpb24gKGNvbXBvbmVudCkge1xuXHRcdFx0YnJpZGdlLmNvbXBvbmVudEFkZGVkKGNvbXBvbmVudCk7XG5cdFx0XHRpZiAobmV4dEFmdGVyTW91bnQpIG5leHRBZnRlck1vdW50KGNvbXBvbmVudCk7XG5cdFx0fTtcblxuXHRcdHZhciBuZXh0QWZ0ZXJVcGRhdGUgPSBwcmVhY3Qub3B0aW9ucy5hZnRlclVwZGF0ZTtcblx0XHRwcmVhY3Qub3B0aW9ucy5hZnRlclVwZGF0ZSA9IGZ1bmN0aW9uIChjb21wb25lbnQpIHtcblx0XHRcdGJyaWRnZS5jb21wb25lbnRVcGRhdGVkKGNvbXBvbmVudCk7XG5cdFx0XHRpZiAobmV4dEFmdGVyVXBkYXRlKSBuZXh0QWZ0ZXJVcGRhdGUoY29tcG9uZW50KTtcblx0XHR9O1xuXG5cdFx0dmFyIG5leHRCZWZvcmVVbm1vdW50ID0gcHJlYWN0Lm9wdGlvbnMuYmVmb3JlVW5tb3VudDtcblx0XHRwcmVhY3Qub3B0aW9ucy5iZWZvcmVVbm1vdW50ID0gZnVuY3Rpb24gKGNvbXBvbmVudCkge1xuXHRcdFx0YnJpZGdlLmNvbXBvbmVudFJlbW92ZWQoY29tcG9uZW50KTtcblx0XHRcdGlmIChuZXh0QmVmb3JlVW5tb3VudCkgbmV4dEJlZm9yZVVubW91bnQoY29tcG9uZW50KTtcblx0XHR9O1xuXG5cdFx0Ly8gTm90aWZ5IGRldnRvb2xzIGFib3V0IHRoaXMgaW5zdGFuY2Ugb2YgXCJSZWFjdFwiXG5cdFx0X19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fLmluamVjdChicmlkZ2UpO1xuXG5cdFx0cmV0dXJuIGZ1bmN0aW9uICgpIHtcblx0XHRcdHByZWFjdC5vcHRpb25zLmFmdGVyTW91bnQgPSBuZXh0QWZ0ZXJNb3VudDtcblx0XHRcdHByZWFjdC5vcHRpb25zLmFmdGVyVXBkYXRlID0gbmV4dEFmdGVyVXBkYXRlO1xuXHRcdFx0cHJlYWN0Lm9wdGlvbnMuYmVmb3JlVW5tb3VudCA9IG5leHRCZWZvcmVVbm1vdW50O1xuXHRcdH07XG5cdH1cblxuXHRpbml0RGV2VG9vbHMoKTtcblxufSkpKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRldnRvb2xzLmpzLm1hcFxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL3ByZWFjdC9kZXZ0b29scy5qc1xuLy8gbW9kdWxlIGlkID0gLi4vbm9kZV9tb2R1bGVzL3ByZWFjdC9kZXZ0b29scy5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IG1haW4iLCIvKiogVmlydHVhbCBET00gTm9kZSAqL1xuZnVuY3Rpb24gVk5vZGUoKSB7fVxuXG4vKiogR2xvYmFsIG9wdGlvbnNcbiAqXHRAcHVibGljXG4gKlx0QG5hbWVzcGFjZSBvcHRpb25zIHtPYmplY3R9XG4gKi9cbnZhciBvcHRpb25zID0ge1xuXG5cdC8qKiBJZiBgdHJ1ZWAsIGBwcm9wYCBjaGFuZ2VzIHRyaWdnZXIgc3luY2hyb25vdXMgY29tcG9uZW50IHVwZGF0ZXMuXG4gICpcdEBuYW1lIHN5bmNDb21wb25lbnRVcGRhdGVzXG4gICpcdEB0eXBlIEJvb2xlYW5cbiAgKlx0QGRlZmF1bHQgdHJ1ZVxuICAqL1xuXHQvL3N5bmNDb21wb25lbnRVcGRhdGVzOiB0cnVlLFxuXG5cdC8qKiBQcm9jZXNzZXMgYWxsIGNyZWF0ZWQgVk5vZGVzLlxuICAqXHRAcGFyYW0ge1ZOb2RlfSB2bm9kZVx0QSBuZXdseS1jcmVhdGVkIFZOb2RlIHRvIG5vcm1hbGl6ZS9wcm9jZXNzXG4gICovXG5cdC8vdm5vZGUodm5vZGUpIHsgfVxuXG5cdC8qKiBIb29rIGludm9rZWQgYWZ0ZXIgYSBjb21wb25lbnQgaXMgbW91bnRlZC4gKi9cblx0Ly8gYWZ0ZXJNb3VudChjb21wb25lbnQpIHsgfVxuXG5cdC8qKiBIb29rIGludm9rZWQgYWZ0ZXIgdGhlIERPTSBpcyB1cGRhdGVkIHdpdGggYSBjb21wb25lbnQncyBsYXRlc3QgcmVuZGVyLiAqL1xuXHQvLyBhZnRlclVwZGF0ZShjb21wb25lbnQpIHsgfVxuXG5cdC8qKiBIb29rIGludm9rZWQgaW1tZWRpYXRlbHkgYmVmb3JlIGEgY29tcG9uZW50IGlzIHVubW91bnRlZC4gKi9cblx0Ly8gYmVmb3JlVW5tb3VudChjb21wb25lbnQpIHsgfVxufTtcblxudmFyIHN0YWNrID0gW107XG5cbnZhciBFTVBUWV9DSElMRFJFTiA9IFtdO1xuXG4vKipcbiAqIEpTWC9oeXBlcnNjcmlwdCByZXZpdmVyLlxuICogQHNlZSBodHRwOi8vamFzb25mb3JtYXQuY29tL3d0Zi1pcy1qc3hcbiAqIEJlbmNobWFya3M6IGh0dHBzOi8vZXNiZW5jaC5jb20vYmVuY2gvNTdlZThmOGUzMzBhYjA5OTAwYTFhMWEwXG4gKlxuICogTm90ZTogdGhpcyBpcyBleHBvcnRlZCBhcyBib3RoIGBoKClgIGFuZCBgY3JlYXRlRWxlbWVudCgpYCBmb3IgY29tcGF0aWJpbGl0eSByZWFzb25zLlxuICpcbiAqIENyZWF0ZXMgYSBWTm9kZSAodmlydHVhbCBET00gZWxlbWVudCkuIEEgdHJlZSBvZiBWTm9kZXMgY2FuIGJlIHVzZWQgYXMgYSBsaWdodHdlaWdodCByZXByZXNlbnRhdGlvblxuICogb2YgdGhlIHN0cnVjdHVyZSBvZiBhIERPTSB0cmVlLiBUaGlzIHN0cnVjdHVyZSBjYW4gYmUgcmVhbGl6ZWQgYnkgcmVjdXJzaXZlbHkgY29tcGFyaW5nIGl0IGFnYWluc3RcbiAqIHRoZSBjdXJyZW50IF9hY3R1YWxfIERPTSBzdHJ1Y3R1cmUsIGFuZCBhcHBseWluZyBvbmx5IHRoZSBkaWZmZXJlbmNlcy5cbiAqXG4gKiBgaCgpYC9gY3JlYXRlRWxlbWVudCgpYCBhY2NlcHRzIGFuIGVsZW1lbnQgbmFtZSwgYSBsaXN0IG9mIGF0dHJpYnV0ZXMvcHJvcHMsXG4gKiBhbmQgb3B0aW9uYWxseSBjaGlsZHJlbiB0byBhcHBlbmQgdG8gdGhlIGVsZW1lbnQuXG4gKlxuICogQGV4YW1wbGUgVGhlIGZvbGxvd2luZyBET00gdHJlZVxuICpcbiAqIGA8ZGl2IGlkPVwiZm9vXCIgbmFtZT1cImJhclwiPkhlbGxvITwvZGl2PmBcbiAqXG4gKiBjYW4gYmUgY29uc3RydWN0ZWQgdXNpbmcgdGhpcyBmdW5jdGlvbiBhczpcbiAqXG4gKiBgaCgnZGl2JywgeyBpZDogJ2ZvbycsIG5hbWUgOiAnYmFyJyB9LCAnSGVsbG8hJyk7YFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBub2RlTmFtZVx0QW4gZWxlbWVudCBuYW1lLiBFeDogYGRpdmAsIGBhYCwgYHNwYW5gLCBldGMuXG4gKiBAcGFyYW0ge09iamVjdH0gYXR0cmlidXRlc1x0QW55IGF0dHJpYnV0ZXMvcHJvcHMgdG8gc2V0IG9uIHRoZSBjcmVhdGVkIGVsZW1lbnQuXG4gKiBAcGFyYW0gcmVzdFx0XHRcdEFkZGl0aW9uYWwgYXJndW1lbnRzIGFyZSB0YWtlbiB0byBiZSBjaGlsZHJlbiB0byBhcHBlbmQuIENhbiBiZSBpbmZpbml0ZWx5IG5lc3RlZCBBcnJheXMuXG4gKlxuICogQHB1YmxpY1xuICovXG5mdW5jdGlvbiBoKG5vZGVOYW1lLCBhdHRyaWJ1dGVzKSB7XG5cdHZhciBjaGlsZHJlbiA9IEVNUFRZX0NISUxEUkVOLFxuXHQgICAgbGFzdFNpbXBsZSxcblx0ICAgIGNoaWxkLFxuXHQgICAgc2ltcGxlLFxuXHQgICAgaTtcblx0Zm9yIChpID0gYXJndW1lbnRzLmxlbmd0aDsgaS0tID4gMjspIHtcblx0XHRzdGFjay5wdXNoKGFyZ3VtZW50c1tpXSk7XG5cdH1cblx0aWYgKGF0dHJpYnV0ZXMgJiYgYXR0cmlidXRlcy5jaGlsZHJlbiAhPSBudWxsKSB7XG5cdFx0aWYgKCFzdGFjay5sZW5ndGgpIHN0YWNrLnB1c2goYXR0cmlidXRlcy5jaGlsZHJlbik7XG5cdFx0ZGVsZXRlIGF0dHJpYnV0ZXMuY2hpbGRyZW47XG5cdH1cblx0d2hpbGUgKHN0YWNrLmxlbmd0aCkge1xuXHRcdGlmICgoY2hpbGQgPSBzdGFjay5wb3AoKSkgJiYgY2hpbGQucG9wICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdGZvciAoaSA9IGNoaWxkLmxlbmd0aDsgaS0tOykge1xuXHRcdFx0XHRzdGFjay5wdXNoKGNoaWxkW2ldKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0aWYgKHR5cGVvZiBjaGlsZCA9PT0gJ2Jvb2xlYW4nKSBjaGlsZCA9IG51bGw7XG5cblx0XHRcdGlmIChzaW1wbGUgPSB0eXBlb2Ygbm9kZU5hbWUgIT09ICdmdW5jdGlvbicpIHtcblx0XHRcdFx0aWYgKGNoaWxkID09IG51bGwpIGNoaWxkID0gJyc7ZWxzZSBpZiAodHlwZW9mIGNoaWxkID09PSAnbnVtYmVyJykgY2hpbGQgPSBTdHJpbmcoY2hpbGQpO2Vsc2UgaWYgKHR5cGVvZiBjaGlsZCAhPT0gJ3N0cmluZycpIHNpbXBsZSA9IGZhbHNlO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoc2ltcGxlICYmIGxhc3RTaW1wbGUpIHtcblx0XHRcdFx0Y2hpbGRyZW5bY2hpbGRyZW4ubGVuZ3RoIC0gMV0gKz0gY2hpbGQ7XG5cdFx0XHR9IGVsc2UgaWYgKGNoaWxkcmVuID09PSBFTVBUWV9DSElMRFJFTikge1xuXHRcdFx0XHRjaGlsZHJlbiA9IFtjaGlsZF07XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRjaGlsZHJlbi5wdXNoKGNoaWxkKTtcblx0XHRcdH1cblxuXHRcdFx0bGFzdFNpbXBsZSA9IHNpbXBsZTtcblx0XHR9XG5cdH1cblxuXHR2YXIgcCA9IG5ldyBWTm9kZSgpO1xuXHRwLm5vZGVOYW1lID0gbm9kZU5hbWU7XG5cdHAuY2hpbGRyZW4gPSBjaGlsZHJlbjtcblx0cC5hdHRyaWJ1dGVzID0gYXR0cmlidXRlcyA9PSBudWxsID8gdW5kZWZpbmVkIDogYXR0cmlidXRlcztcblx0cC5rZXkgPSBhdHRyaWJ1dGVzID09IG51bGwgPyB1bmRlZmluZWQgOiBhdHRyaWJ1dGVzLmtleTtcblxuXHQvLyBpZiBhIFwidm5vZGUgaG9va1wiIGlzIGRlZmluZWQsIHBhc3MgZXZlcnkgY3JlYXRlZCBWTm9kZSB0byBpdFxuXHRpZiAob3B0aW9ucy52bm9kZSAhPT0gdW5kZWZpbmVkKSBvcHRpb25zLnZub2RlKHApO1xuXG5cdHJldHVybiBwO1xufVxuXG4vKipcbiAqICBDb3B5IGFsbCBwcm9wZXJ0aWVzIGZyb20gYHByb3BzYCBvbnRvIGBvYmpgLlxuICogIEBwYXJhbSB7T2JqZWN0fSBvYmpcdFx0T2JqZWN0IG9udG8gd2hpY2ggcHJvcGVydGllcyBzaG91bGQgYmUgY29waWVkLlxuICogIEBwYXJhbSB7T2JqZWN0fSBwcm9wc1x0T2JqZWN0IGZyb20gd2hpY2ggdG8gY29weSBwcm9wZXJ0aWVzLlxuICogIEByZXR1cm5zIG9ialxuICogIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGV4dGVuZChvYmosIHByb3BzKSB7XG4gIGZvciAodmFyIGkgaW4gcHJvcHMpIHtcbiAgICBvYmpbaV0gPSBwcm9wc1tpXTtcbiAgfXJldHVybiBvYmo7XG59XG5cbi8qKlxuICogQ2FsbCBhIGZ1bmN0aW9uIGFzeW5jaHJvbm91c2x5LCBhcyBzb29uIGFzIHBvc3NpYmxlLiBNYWtlc1xuICogdXNlIG9mIEhUTUwgUHJvbWlzZSB0byBzY2hlZHVsZSB0aGUgY2FsbGJhY2sgaWYgYXZhaWxhYmxlLFxuICogb3RoZXJ3aXNlIGZhbGxpbmcgYmFjayB0byBgc2V0VGltZW91dGAgKG1haW5seSBmb3IgSUU8MTEpLlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gKi9cbnZhciBkZWZlciA9IHR5cGVvZiBQcm9taXNlID09ICdmdW5jdGlvbicgPyBQcm9taXNlLnJlc29sdmUoKS50aGVuLmJpbmQoUHJvbWlzZS5yZXNvbHZlKCkpIDogc2V0VGltZW91dDtcblxuLyoqXG4gKiBDbG9uZXMgdGhlIGdpdmVuIFZOb2RlLCBvcHRpb25hbGx5IGFkZGluZyBhdHRyaWJ1dGVzL3Byb3BzIGFuZCByZXBsYWNpbmcgaXRzIGNoaWxkcmVuLlxuICogQHBhcmFtIHtWTm9kZX0gdm5vZGVcdFx0VGhlIHZpcnR1YWwgRE9NIGVsZW1lbnQgdG8gY2xvbmVcbiAqIEBwYXJhbSB7T2JqZWN0fSBwcm9wc1x0QXR0cmlidXRlcy9wcm9wcyB0byBhZGQgd2hlbiBjbG9uaW5nXG4gKiBAcGFyYW0ge1ZOb2RlfSByZXN0XHRcdEFueSBhZGRpdGlvbmFsIGFyZ3VtZW50cyB3aWxsIGJlIHVzZWQgYXMgcmVwbGFjZW1lbnQgY2hpbGRyZW4uXG4gKi9cbmZ1bmN0aW9uIGNsb25lRWxlbWVudCh2bm9kZSwgcHJvcHMpIHtcbiAgcmV0dXJuIGgodm5vZGUubm9kZU5hbWUsIGV4dGVuZChleHRlbmQoe30sIHZub2RlLmF0dHJpYnV0ZXMpLCBwcm9wcyksIGFyZ3VtZW50cy5sZW5ndGggPiAyID8gW10uc2xpY2UuY2FsbChhcmd1bWVudHMsIDIpIDogdm5vZGUuY2hpbGRyZW4pO1xufVxuXG4vLyBET00gcHJvcGVydGllcyB0aGF0IHNob3VsZCBOT1QgaGF2ZSBcInB4XCIgYWRkZWQgd2hlbiBudW1lcmljXG52YXIgSVNfTk9OX0RJTUVOU0lPTkFMID0gL2FjaXR8ZXgoPzpzfGd8bnxwfCQpfHJwaHxvd3N8bW5jfG50d3xpbmVbY2hdfHpvb3xeb3JkL2k7XG5cbi8qKiBNYW5hZ2VkIHF1ZXVlIG9mIGRpcnR5IGNvbXBvbmVudHMgdG8gYmUgcmUtcmVuZGVyZWQgKi9cblxudmFyIGl0ZW1zID0gW107XG5cbmZ1bmN0aW9uIGVucXVldWVSZW5kZXIoY29tcG9uZW50KSB7XG5cdGlmICghY29tcG9uZW50Ll9kaXJ0eSAmJiAoY29tcG9uZW50Ll9kaXJ0eSA9IHRydWUpICYmIGl0ZW1zLnB1c2goY29tcG9uZW50KSA9PSAxKSB7XG5cdFx0KG9wdGlvbnMuZGVib3VuY2VSZW5kZXJpbmcgfHwgZGVmZXIpKHJlcmVuZGVyKTtcblx0fVxufVxuXG5mdW5jdGlvbiByZXJlbmRlcigpIHtcblx0dmFyIHAsXG5cdCAgICBsaXN0ID0gaXRlbXM7XG5cdGl0ZW1zID0gW107XG5cdHdoaWxlIChwID0gbGlzdC5wb3AoKSkge1xuXHRcdGlmIChwLl9kaXJ0eSkgcmVuZGVyQ29tcG9uZW50KHApO1xuXHR9XG59XG5cbi8qKlxuICogQ2hlY2sgaWYgdHdvIG5vZGVzIGFyZSBlcXVpdmFsZW50LlxuICpcbiAqIEBwYXJhbSB7Tm9kZX0gbm9kZVx0XHRcdERPTSBOb2RlIHRvIGNvbXBhcmVcbiAqIEBwYXJhbSB7Vk5vZGV9IHZub2RlXHRcdFx0VmlydHVhbCBET00gbm9kZSB0byBjb21wYXJlXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtoeWRyYXRpbmc9ZmFsc2VdXHRJZiB0cnVlLCBpZ25vcmVzIGNvbXBvbmVudCBjb25zdHJ1Y3RvcnMgd2hlbiBjb21wYXJpbmcuXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBpc1NhbWVOb2RlVHlwZShub2RlLCB2bm9kZSwgaHlkcmF0aW5nKSB7XG4gIGlmICh0eXBlb2Ygdm5vZGUgPT09ICdzdHJpbmcnIHx8IHR5cGVvZiB2bm9kZSA9PT0gJ251bWJlcicpIHtcbiAgICByZXR1cm4gbm9kZS5zcGxpdFRleHQgIT09IHVuZGVmaW5lZDtcbiAgfVxuICBpZiAodHlwZW9mIHZub2RlLm5vZGVOYW1lID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiAhbm9kZS5fY29tcG9uZW50Q29uc3RydWN0b3IgJiYgaXNOYW1lZE5vZGUobm9kZSwgdm5vZGUubm9kZU5hbWUpO1xuICB9XG4gIHJldHVybiBoeWRyYXRpbmcgfHwgbm9kZS5fY29tcG9uZW50Q29uc3RydWN0b3IgPT09IHZub2RlLm5vZGVOYW1lO1xufVxuXG4vKipcbiAqIENoZWNrIGlmIGFuIEVsZW1lbnQgaGFzIGEgZ2l2ZW4gbm9kZU5hbWUsIGNhc2UtaW5zZW5zaXRpdmVseS5cbiAqXG4gKiBAcGFyYW0ge0VsZW1lbnR9IG5vZGVcdEEgRE9NIEVsZW1lbnQgdG8gaW5zcGVjdCB0aGUgbmFtZSBvZi5cbiAqIEBwYXJhbSB7U3RyaW5nfSBub2RlTmFtZVx0VW5ub3JtYWxpemVkIG5hbWUgdG8gY29tcGFyZSBhZ2FpbnN0LlxuICovXG5mdW5jdGlvbiBpc05hbWVkTm9kZShub2RlLCBub2RlTmFtZSkge1xuICByZXR1cm4gbm9kZS5ub3JtYWxpemVkTm9kZU5hbWUgPT09IG5vZGVOYW1lIHx8IG5vZGUubm9kZU5hbWUudG9Mb3dlckNhc2UoKSA9PT0gbm9kZU5hbWUudG9Mb3dlckNhc2UoKTtcbn1cblxuLyoqXG4gKiBSZWNvbnN0cnVjdCBDb21wb25lbnQtc3R5bGUgYHByb3BzYCBmcm9tIGEgVk5vZGUuXG4gKiBFbnN1cmVzIGRlZmF1bHQvZmFsbGJhY2sgdmFsdWVzIGZyb20gYGRlZmF1bHRQcm9wc2A6XG4gKiBPd24tcHJvcGVydGllcyBvZiBgZGVmYXVsdFByb3BzYCBub3QgcHJlc2VudCBpbiBgdm5vZGUuYXR0cmlidXRlc2AgYXJlIGFkZGVkLlxuICpcbiAqIEBwYXJhbSB7Vk5vZGV9IHZub2RlXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBwcm9wc1xuICovXG5mdW5jdGlvbiBnZXROb2RlUHJvcHModm5vZGUpIHtcbiAgdmFyIHByb3BzID0gZXh0ZW5kKHt9LCB2bm9kZS5hdHRyaWJ1dGVzKTtcbiAgcHJvcHMuY2hpbGRyZW4gPSB2bm9kZS5jaGlsZHJlbjtcblxuICB2YXIgZGVmYXVsdFByb3BzID0gdm5vZGUubm9kZU5hbWUuZGVmYXVsdFByb3BzO1xuICBpZiAoZGVmYXVsdFByb3BzICE9PSB1bmRlZmluZWQpIHtcbiAgICBmb3IgKHZhciBpIGluIGRlZmF1bHRQcm9wcykge1xuICAgICAgaWYgKHByb3BzW2ldID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcHJvcHNbaV0gPSBkZWZhdWx0UHJvcHNbaV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHByb3BzO1xufVxuXG4vKiogQ3JlYXRlIGFuIGVsZW1lbnQgd2l0aCB0aGUgZ2l2ZW4gbm9kZU5hbWUuXG4gKlx0QHBhcmFtIHtTdHJpbmd9IG5vZGVOYW1lXG4gKlx0QHBhcmFtIHtCb29sZWFufSBbaXNTdmc9ZmFsc2VdXHRJZiBgdHJ1ZWAsIGNyZWF0ZXMgYW4gZWxlbWVudCB3aXRoaW4gdGhlIFNWRyBuYW1lc3BhY2UuXG4gKlx0QHJldHVybnMge0VsZW1lbnR9IG5vZGVcbiAqL1xuZnVuY3Rpb24gY3JlYXRlTm9kZShub2RlTmFtZSwgaXNTdmcpIHtcblx0dmFyIG5vZGUgPSBpc1N2ZyA/IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCBub2RlTmFtZSkgOiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KG5vZGVOYW1lKTtcblx0bm9kZS5ub3JtYWxpemVkTm9kZU5hbWUgPSBub2RlTmFtZTtcblx0cmV0dXJuIG5vZGU7XG59XG5cbi8qKiBSZW1vdmUgYSBjaGlsZCBub2RlIGZyb20gaXRzIHBhcmVudCBpZiBhdHRhY2hlZC5cbiAqXHRAcGFyYW0ge0VsZW1lbnR9IG5vZGVcdFx0VGhlIG5vZGUgdG8gcmVtb3ZlXG4gKi9cbmZ1bmN0aW9uIHJlbW92ZU5vZGUobm9kZSkge1xuXHR2YXIgcGFyZW50Tm9kZSA9IG5vZGUucGFyZW50Tm9kZTtcblx0aWYgKHBhcmVudE5vZGUpIHBhcmVudE5vZGUucmVtb3ZlQ2hpbGQobm9kZSk7XG59XG5cbi8qKiBTZXQgYSBuYW1lZCBhdHRyaWJ1dGUgb24gdGhlIGdpdmVuIE5vZGUsIHdpdGggc3BlY2lhbCBiZWhhdmlvciBmb3Igc29tZSBuYW1lcyBhbmQgZXZlbnQgaGFuZGxlcnMuXG4gKlx0SWYgYHZhbHVlYCBpcyBgbnVsbGAsIHRoZSBhdHRyaWJ1dGUvaGFuZGxlciB3aWxsIGJlIHJlbW92ZWQuXG4gKlx0QHBhcmFtIHtFbGVtZW50fSBub2RlXHRBbiBlbGVtZW50IHRvIG11dGF0ZVxuICpcdEBwYXJhbSB7c3RyaW5nfSBuYW1lXHRUaGUgbmFtZS9rZXkgdG8gc2V0LCBzdWNoIGFzIGFuIGV2ZW50IG9yIGF0dHJpYnV0ZSBuYW1lXG4gKlx0QHBhcmFtIHthbnl9IG9sZFx0VGhlIGxhc3QgdmFsdWUgdGhhdCB3YXMgc2V0IGZvciB0aGlzIG5hbWUvbm9kZSBwYWlyXG4gKlx0QHBhcmFtIHthbnl9IHZhbHVlXHRBbiBhdHRyaWJ1dGUgdmFsdWUsIHN1Y2ggYXMgYSBmdW5jdGlvbiB0byBiZSB1c2VkIGFzIGFuIGV2ZW50IGhhbmRsZXJcbiAqXHRAcGFyYW0ge0Jvb2xlYW59IGlzU3ZnXHRBcmUgd2UgY3VycmVudGx5IGRpZmZpbmcgaW5zaWRlIGFuIHN2Zz9cbiAqXHRAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBzZXRBY2Nlc3Nvcihub2RlLCBuYW1lLCBvbGQsIHZhbHVlLCBpc1N2Zykge1xuXHRpZiAobmFtZSA9PT0gJ2NsYXNzTmFtZScpIG5hbWUgPSAnY2xhc3MnO1xuXG5cdGlmIChuYW1lID09PSAna2V5Jykge1xuXHRcdC8vIGlnbm9yZVxuXHR9IGVsc2UgaWYgKG5hbWUgPT09ICdyZWYnKSB7XG5cdFx0aWYgKG9sZCkgb2xkKG51bGwpO1xuXHRcdGlmICh2YWx1ZSkgdmFsdWUobm9kZSk7XG5cdH0gZWxzZSBpZiAobmFtZSA9PT0gJ2NsYXNzJyAmJiAhaXNTdmcpIHtcblx0XHRub2RlLmNsYXNzTmFtZSA9IHZhbHVlIHx8ICcnO1xuXHR9IGVsc2UgaWYgKG5hbWUgPT09ICdzdHlsZScpIHtcblx0XHRpZiAoIXZhbHVlIHx8IHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgfHwgdHlwZW9mIG9sZCA9PT0gJ3N0cmluZycpIHtcblx0XHRcdG5vZGUuc3R5bGUuY3NzVGV4dCA9IHZhbHVlIHx8ICcnO1xuXHRcdH1cblx0XHRpZiAodmFsdWUgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0Jykge1xuXHRcdFx0aWYgKHR5cGVvZiBvbGQgIT09ICdzdHJpbmcnKSB7XG5cdFx0XHRcdGZvciAodmFyIGkgaW4gb2xkKSB7XG5cdFx0XHRcdFx0aWYgKCEoaSBpbiB2YWx1ZSkpIG5vZGUuc3R5bGVbaV0gPSAnJztcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0Zm9yICh2YXIgaSBpbiB2YWx1ZSkge1xuXHRcdFx0XHRub2RlLnN0eWxlW2ldID0gdHlwZW9mIHZhbHVlW2ldID09PSAnbnVtYmVyJyAmJiBJU19OT05fRElNRU5TSU9OQUwudGVzdChpKSA9PT0gZmFsc2UgPyB2YWx1ZVtpXSArICdweCcgOiB2YWx1ZVtpXTtcblx0XHRcdH1cblx0XHR9XG5cdH0gZWxzZSBpZiAobmFtZSA9PT0gJ2Rhbmdlcm91c2x5U2V0SW5uZXJIVE1MJykge1xuXHRcdGlmICh2YWx1ZSkgbm9kZS5pbm5lckhUTUwgPSB2YWx1ZS5fX2h0bWwgfHwgJyc7XG5cdH0gZWxzZSBpZiAobmFtZVswXSA9PSAnbycgJiYgbmFtZVsxXSA9PSAnbicpIHtcblx0XHR2YXIgdXNlQ2FwdHVyZSA9IG5hbWUgIT09IChuYW1lID0gbmFtZS5yZXBsYWNlKC9DYXB0dXJlJC8sICcnKSk7XG5cdFx0bmFtZSA9IG5hbWUudG9Mb3dlckNhc2UoKS5zdWJzdHJpbmcoMik7XG5cdFx0aWYgKHZhbHVlKSB7XG5cdFx0XHRpZiAoIW9sZCkgbm9kZS5hZGRFdmVudExpc3RlbmVyKG5hbWUsIGV2ZW50UHJveHksIHVzZUNhcHR1cmUpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRub2RlLnJlbW92ZUV2ZW50TGlzdGVuZXIobmFtZSwgZXZlbnRQcm94eSwgdXNlQ2FwdHVyZSk7XG5cdFx0fVxuXHRcdChub2RlLl9saXN0ZW5lcnMgfHwgKG5vZGUuX2xpc3RlbmVycyA9IHt9KSlbbmFtZV0gPSB2YWx1ZTtcblx0fSBlbHNlIGlmIChuYW1lICE9PSAnbGlzdCcgJiYgbmFtZSAhPT0gJ3R5cGUnICYmICFpc1N2ZyAmJiBuYW1lIGluIG5vZGUpIHtcblx0XHRzZXRQcm9wZXJ0eShub2RlLCBuYW1lLCB2YWx1ZSA9PSBudWxsID8gJycgOiB2YWx1ZSk7XG5cdFx0aWYgKHZhbHVlID09IG51bGwgfHwgdmFsdWUgPT09IGZhbHNlKSBub2RlLnJlbW92ZUF0dHJpYnV0ZShuYW1lKTtcblx0fSBlbHNlIHtcblx0XHR2YXIgbnMgPSBpc1N2ZyAmJiBuYW1lICE9PSAobmFtZSA9IG5hbWUucmVwbGFjZSgvXnhsaW5rOj8vLCAnJykpO1xuXHRcdGlmICh2YWx1ZSA9PSBudWxsIHx8IHZhbHVlID09PSBmYWxzZSkge1xuXHRcdFx0aWYgKG5zKSBub2RlLnJlbW92ZUF0dHJpYnV0ZU5TKCdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJywgbmFtZS50b0xvd2VyQ2FzZSgpKTtlbHNlIG5vZGUucmVtb3ZlQXR0cmlidXRlKG5hbWUpO1xuXHRcdH0gZWxzZSBpZiAodHlwZW9mIHZhbHVlICE9PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHRpZiAobnMpIG5vZGUuc2V0QXR0cmlidXRlTlMoJ2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnLCBuYW1lLnRvTG93ZXJDYXNlKCksIHZhbHVlKTtlbHNlIG5vZGUuc2V0QXR0cmlidXRlKG5hbWUsIHZhbHVlKTtcblx0XHR9XG5cdH1cbn1cblxuLyoqIEF0dGVtcHQgdG8gc2V0IGEgRE9NIHByb3BlcnR5IHRvIHRoZSBnaXZlbiB2YWx1ZS5cbiAqXHRJRSAmIEZGIHRocm93IGZvciBjZXJ0YWluIHByb3BlcnR5LXZhbHVlIGNvbWJpbmF0aW9ucy5cbiAqL1xuZnVuY3Rpb24gc2V0UHJvcGVydHkobm9kZSwgbmFtZSwgdmFsdWUpIHtcblx0dHJ5IHtcblx0XHRub2RlW25hbWVdID0gdmFsdWU7XG5cdH0gY2F0Y2ggKGUpIHt9XG59XG5cbi8qKiBQcm94eSBhbiBldmVudCB0byBob29rZWQgZXZlbnQgaGFuZGxlcnNcbiAqXHRAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBldmVudFByb3h5KGUpIHtcblx0cmV0dXJuIHRoaXMuX2xpc3RlbmVyc1tlLnR5cGVdKG9wdGlvbnMuZXZlbnQgJiYgb3B0aW9ucy5ldmVudChlKSB8fCBlKTtcbn1cblxuLyoqIFF1ZXVlIG9mIGNvbXBvbmVudHMgdGhhdCBoYXZlIGJlZW4gbW91bnRlZCBhbmQgYXJlIGF3YWl0aW5nIGNvbXBvbmVudERpZE1vdW50ICovXG52YXIgbW91bnRzID0gW107XG5cbi8qKiBEaWZmIHJlY3Vyc2lvbiBjb3VudCwgdXNlZCB0byB0cmFjayB0aGUgZW5kIG9mIHRoZSBkaWZmIGN5Y2xlLiAqL1xudmFyIGRpZmZMZXZlbCA9IDA7XG5cbi8qKiBHbG9iYWwgZmxhZyBpbmRpY2F0aW5nIGlmIHRoZSBkaWZmIGlzIGN1cnJlbnRseSB3aXRoaW4gYW4gU1ZHICovXG52YXIgaXNTdmdNb2RlID0gZmFsc2U7XG5cbi8qKiBHbG9iYWwgZmxhZyBpbmRpY2F0aW5nIGlmIHRoZSBkaWZmIGlzIHBlcmZvcm1pbmcgaHlkcmF0aW9uICovXG52YXIgaHlkcmF0aW5nID0gZmFsc2U7XG5cbi8qKiBJbnZva2UgcXVldWVkIGNvbXBvbmVudERpZE1vdW50IGxpZmVjeWNsZSBtZXRob2RzICovXG5mdW5jdGlvbiBmbHVzaE1vdW50cygpIHtcblx0dmFyIGM7XG5cdHdoaWxlIChjID0gbW91bnRzLnBvcCgpKSB7XG5cdFx0aWYgKG9wdGlvbnMuYWZ0ZXJNb3VudCkgb3B0aW9ucy5hZnRlck1vdW50KGMpO1xuXHRcdGlmIChjLmNvbXBvbmVudERpZE1vdW50KSBjLmNvbXBvbmVudERpZE1vdW50KCk7XG5cdH1cbn1cblxuLyoqIEFwcGx5IGRpZmZlcmVuY2VzIGluIGEgZ2l2ZW4gdm5vZGUgKGFuZCBpdCdzIGRlZXAgY2hpbGRyZW4pIHRvIGEgcmVhbCBET00gTm9kZS5cbiAqXHRAcGFyYW0ge0VsZW1lbnR9IFtkb209bnVsbF1cdFx0QSBET00gbm9kZSB0byBtdXRhdGUgaW50byB0aGUgc2hhcGUgb2YgdGhlIGB2bm9kZWBcbiAqXHRAcGFyYW0ge1ZOb2RlfSB2bm9kZVx0XHRcdEEgVk5vZGUgKHdpdGggZGVzY2VuZGFudHMgZm9ybWluZyBhIHRyZWUpIHJlcHJlc2VudGluZyB0aGUgZGVzaXJlZCBET00gc3RydWN0dXJlXG4gKlx0QHJldHVybnMge0VsZW1lbnR9IGRvbVx0XHRcdFRoZSBjcmVhdGVkL211dGF0ZWQgZWxlbWVudFxuICpcdEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGRpZmYoZG9tLCB2bm9kZSwgY29udGV4dCwgbW91bnRBbGwsIHBhcmVudCwgY29tcG9uZW50Um9vdCkge1xuXHQvLyBkaWZmTGV2ZWwgaGF2aW5nIGJlZW4gMCBoZXJlIGluZGljYXRlcyBpbml0aWFsIGVudHJ5IGludG8gdGhlIGRpZmYgKG5vdCBhIHN1YmRpZmYpXG5cdGlmICghZGlmZkxldmVsKyspIHtcblx0XHQvLyB3aGVuIGZpcnN0IHN0YXJ0aW5nIHRoZSBkaWZmLCBjaGVjayBpZiB3ZSdyZSBkaWZmaW5nIGFuIFNWRyBvciB3aXRoaW4gYW4gU1ZHXG5cdFx0aXNTdmdNb2RlID0gcGFyZW50ICE9IG51bGwgJiYgcGFyZW50Lm93bmVyU1ZHRWxlbWVudCAhPT0gdW5kZWZpbmVkO1xuXG5cdFx0Ly8gaHlkcmF0aW9uIGlzIGluZGljYXRlZCBieSB0aGUgZXhpc3RpbmcgZWxlbWVudCB0byBiZSBkaWZmZWQgbm90IGhhdmluZyBhIHByb3AgY2FjaGVcblx0XHRoeWRyYXRpbmcgPSBkb20gIT0gbnVsbCAmJiAhKCdfX3ByZWFjdGF0dHJfJyBpbiBkb20pO1xuXHR9XG5cblx0dmFyIHJldCA9IGlkaWZmKGRvbSwgdm5vZGUsIGNvbnRleHQsIG1vdW50QWxsLCBjb21wb25lbnRSb290KTtcblxuXHQvLyBhcHBlbmQgdGhlIGVsZW1lbnQgaWYgaXRzIGEgbmV3IHBhcmVudFxuXHRpZiAocGFyZW50ICYmIHJldC5wYXJlbnROb2RlICE9PSBwYXJlbnQpIHBhcmVudC5hcHBlbmRDaGlsZChyZXQpO1xuXG5cdC8vIGRpZmZMZXZlbCBiZWluZyByZWR1Y2VkIHRvIDAgbWVhbnMgd2UncmUgZXhpdGluZyB0aGUgZGlmZlxuXHRpZiAoISAtLWRpZmZMZXZlbCkge1xuXHRcdGh5ZHJhdGluZyA9IGZhbHNlO1xuXHRcdC8vIGludm9rZSBxdWV1ZWQgY29tcG9uZW50RGlkTW91bnQgbGlmZWN5Y2xlIG1ldGhvZHNcblx0XHRpZiAoIWNvbXBvbmVudFJvb3QpIGZsdXNoTW91bnRzKCk7XG5cdH1cblxuXHRyZXR1cm4gcmV0O1xufVxuXG4vKiogSW50ZXJuYWxzIG9mIGBkaWZmKClgLCBzZXBhcmF0ZWQgdG8gYWxsb3cgYnlwYXNzaW5nIGRpZmZMZXZlbCAvIG1vdW50IGZsdXNoaW5nLiAqL1xuZnVuY3Rpb24gaWRpZmYoZG9tLCB2bm9kZSwgY29udGV4dCwgbW91bnRBbGwsIGNvbXBvbmVudFJvb3QpIHtcblx0dmFyIG91dCA9IGRvbSxcblx0ICAgIHByZXZTdmdNb2RlID0gaXNTdmdNb2RlO1xuXG5cdC8vIGVtcHR5IHZhbHVlcyAobnVsbCwgdW5kZWZpbmVkLCBib29sZWFucykgcmVuZGVyIGFzIGVtcHR5IFRleHQgbm9kZXNcblx0aWYgKHZub2RlID09IG51bGwgfHwgdHlwZW9mIHZub2RlID09PSAnYm9vbGVhbicpIHZub2RlID0gJyc7XG5cblx0Ly8gRmFzdCBjYXNlOiBTdHJpbmdzICYgTnVtYmVycyBjcmVhdGUvdXBkYXRlIFRleHQgbm9kZXMuXG5cdGlmICh0eXBlb2Ygdm5vZGUgPT09ICdzdHJpbmcnIHx8IHR5cGVvZiB2bm9kZSA9PT0gJ251bWJlcicpIHtcblxuXHRcdC8vIHVwZGF0ZSBpZiBpdCdzIGFscmVhZHkgYSBUZXh0IG5vZGU6XG5cdFx0aWYgKGRvbSAmJiBkb20uc3BsaXRUZXh0ICE9PSB1bmRlZmluZWQgJiYgZG9tLnBhcmVudE5vZGUgJiYgKCFkb20uX2NvbXBvbmVudCB8fCBjb21wb25lbnRSb290KSkge1xuXHRcdFx0LyogaXN0YW5idWwgaWdub3JlIGlmICovIC8qIEJyb3dzZXIgcXVpcmsgdGhhdCBjYW4ndCBiZSBjb3ZlcmVkOiBodHRwczovL2dpdGh1Yi5jb20vZGV2ZWxvcGl0L3ByZWFjdC9jb21taXQvZmQ0ZjIxZjVjNDVkZmQ3NTE1MWJkMjdiNGMyMTdkODAwM2FhNWViOSAqL1xuXHRcdFx0aWYgKGRvbS5ub2RlVmFsdWUgIT0gdm5vZGUpIHtcblx0XHRcdFx0ZG9tLm5vZGVWYWx1ZSA9IHZub2RlO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyBpdCB3YXNuJ3QgYSBUZXh0IG5vZGU6IHJlcGxhY2UgaXQgd2l0aCBvbmUgYW5kIHJlY3ljbGUgdGhlIG9sZCBFbGVtZW50XG5cdFx0XHRvdXQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh2bm9kZSk7XG5cdFx0XHRpZiAoZG9tKSB7XG5cdFx0XHRcdGlmIChkb20ucGFyZW50Tm9kZSkgZG9tLnBhcmVudE5vZGUucmVwbGFjZUNoaWxkKG91dCwgZG9tKTtcblx0XHRcdFx0cmVjb2xsZWN0Tm9kZVRyZWUoZG9tLCB0cnVlKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRvdXRbJ19fcHJlYWN0YXR0cl8nXSA9IHRydWU7XG5cblx0XHRyZXR1cm4gb3V0O1xuXHR9XG5cblx0Ly8gSWYgdGhlIFZOb2RlIHJlcHJlc2VudHMgYSBDb21wb25lbnQsIHBlcmZvcm0gYSBjb21wb25lbnQgZGlmZjpcblx0dmFyIHZub2RlTmFtZSA9IHZub2RlLm5vZGVOYW1lO1xuXHRpZiAodHlwZW9mIHZub2RlTmFtZSA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdHJldHVybiBidWlsZENvbXBvbmVudEZyb21WTm9kZShkb20sIHZub2RlLCBjb250ZXh0LCBtb3VudEFsbCk7XG5cdH1cblxuXHQvLyBUcmFja3MgZW50ZXJpbmcgYW5kIGV4aXRpbmcgU1ZHIG5hbWVzcGFjZSB3aGVuIGRlc2NlbmRpbmcgdGhyb3VnaCB0aGUgdHJlZS5cblx0aXNTdmdNb2RlID0gdm5vZGVOYW1lID09PSAnc3ZnJyA/IHRydWUgOiB2bm9kZU5hbWUgPT09ICdmb3JlaWduT2JqZWN0JyA/IGZhbHNlIDogaXNTdmdNb2RlO1xuXG5cdC8vIElmIHRoZXJlJ3Mgbm8gZXhpc3RpbmcgZWxlbWVudCBvciBpdCdzIHRoZSB3cm9uZyB0eXBlLCBjcmVhdGUgYSBuZXcgb25lOlxuXHR2bm9kZU5hbWUgPSBTdHJpbmcodm5vZGVOYW1lKTtcblx0aWYgKCFkb20gfHwgIWlzTmFtZWROb2RlKGRvbSwgdm5vZGVOYW1lKSkge1xuXHRcdG91dCA9IGNyZWF0ZU5vZGUodm5vZGVOYW1lLCBpc1N2Z01vZGUpO1xuXG5cdFx0aWYgKGRvbSkge1xuXHRcdFx0Ly8gbW92ZSBjaGlsZHJlbiBpbnRvIHRoZSByZXBsYWNlbWVudCBub2RlXG5cdFx0XHR3aGlsZSAoZG9tLmZpcnN0Q2hpbGQpIHtcblx0XHRcdFx0b3V0LmFwcGVuZENoaWxkKGRvbS5maXJzdENoaWxkKTtcblx0XHRcdH0gLy8gaWYgdGhlIHByZXZpb3VzIEVsZW1lbnQgd2FzIG1vdW50ZWQgaW50byB0aGUgRE9NLCByZXBsYWNlIGl0IGlubGluZVxuXHRcdFx0aWYgKGRvbS5wYXJlbnROb2RlKSBkb20ucGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQob3V0LCBkb20pO1xuXG5cdFx0XHQvLyByZWN5Y2xlIHRoZSBvbGQgZWxlbWVudCAoc2tpcHMgbm9uLUVsZW1lbnQgbm9kZSB0eXBlcylcblx0XHRcdHJlY29sbGVjdE5vZGVUcmVlKGRvbSwgdHJ1ZSk7XG5cdFx0fVxuXHR9XG5cblx0dmFyIGZjID0gb3V0LmZpcnN0Q2hpbGQsXG5cdCAgICBwcm9wcyA9IG91dFsnX19wcmVhY3RhdHRyXyddLFxuXHQgICAgdmNoaWxkcmVuID0gdm5vZGUuY2hpbGRyZW47XG5cblx0aWYgKHByb3BzID09IG51bGwpIHtcblx0XHRwcm9wcyA9IG91dFsnX19wcmVhY3RhdHRyXyddID0ge307XG5cdFx0Zm9yICh2YXIgYSA9IG91dC5hdHRyaWJ1dGVzLCBpID0gYS5sZW5ndGg7IGktLTspIHtcblx0XHRcdHByb3BzW2FbaV0ubmFtZV0gPSBhW2ldLnZhbHVlO1xuXHRcdH1cblx0fVxuXG5cdC8vIE9wdGltaXphdGlvbjogZmFzdC1wYXRoIGZvciBlbGVtZW50cyBjb250YWluaW5nIGEgc2luZ2xlIFRleHROb2RlOlxuXHRpZiAoIWh5ZHJhdGluZyAmJiB2Y2hpbGRyZW4gJiYgdmNoaWxkcmVuLmxlbmd0aCA9PT0gMSAmJiB0eXBlb2YgdmNoaWxkcmVuWzBdID09PSAnc3RyaW5nJyAmJiBmYyAhPSBudWxsICYmIGZjLnNwbGl0VGV4dCAhPT0gdW5kZWZpbmVkICYmIGZjLm5leHRTaWJsaW5nID09IG51bGwpIHtcblx0XHRpZiAoZmMubm9kZVZhbHVlICE9IHZjaGlsZHJlblswXSkge1xuXHRcdFx0ZmMubm9kZVZhbHVlID0gdmNoaWxkcmVuWzBdO1xuXHRcdH1cblx0fVxuXHQvLyBvdGhlcndpc2UsIGlmIHRoZXJlIGFyZSBleGlzdGluZyBvciBuZXcgY2hpbGRyZW4sIGRpZmYgdGhlbTpcblx0ZWxzZSBpZiAodmNoaWxkcmVuICYmIHZjaGlsZHJlbi5sZW5ndGggfHwgZmMgIT0gbnVsbCkge1xuXHRcdFx0aW5uZXJEaWZmTm9kZShvdXQsIHZjaGlsZHJlbiwgY29udGV4dCwgbW91bnRBbGwsIGh5ZHJhdGluZyB8fCBwcm9wcy5kYW5nZXJvdXNseVNldElubmVySFRNTCAhPSBudWxsKTtcblx0XHR9XG5cblx0Ly8gQXBwbHkgYXR0cmlidXRlcy9wcm9wcyBmcm9tIFZOb2RlIHRvIHRoZSBET00gRWxlbWVudDpcblx0ZGlmZkF0dHJpYnV0ZXMob3V0LCB2bm9kZS5hdHRyaWJ1dGVzLCBwcm9wcyk7XG5cblx0Ly8gcmVzdG9yZSBwcmV2aW91cyBTVkcgbW9kZTogKGluIGNhc2Ugd2UncmUgZXhpdGluZyBhbiBTVkcgbmFtZXNwYWNlKVxuXHRpc1N2Z01vZGUgPSBwcmV2U3ZnTW9kZTtcblxuXHRyZXR1cm4gb3V0O1xufVxuXG4vKiogQXBwbHkgY2hpbGQgYW5kIGF0dHJpYnV0ZSBjaGFuZ2VzIGJldHdlZW4gYSBWTm9kZSBhbmQgYSBET00gTm9kZSB0byB0aGUgRE9NLlxuICpcdEBwYXJhbSB7RWxlbWVudH0gZG9tXHRcdFx0RWxlbWVudCB3aG9zZSBjaGlsZHJlbiBzaG91bGQgYmUgY29tcGFyZWQgJiBtdXRhdGVkXG4gKlx0QHBhcmFtIHtBcnJheX0gdmNoaWxkcmVuXHRcdEFycmF5IG9mIFZOb2RlcyB0byBjb21wYXJlIHRvIGBkb20uY2hpbGROb2Rlc2BcbiAqXHRAcGFyYW0ge09iamVjdH0gY29udGV4dFx0XHRcdEltcGxpY2l0bHkgZGVzY2VuZGFudCBjb250ZXh0IG9iamVjdCAoZnJvbSBtb3N0IHJlY2VudCBgZ2V0Q2hpbGRDb250ZXh0KClgKVxuICpcdEBwYXJhbSB7Qm9vbGVhbn0gbW91bnRBbGxcbiAqXHRAcGFyYW0ge0Jvb2xlYW59IGlzSHlkcmF0aW5nXHRJZiBgdHJ1ZWAsIGNvbnN1bWVzIGV4dGVybmFsbHkgY3JlYXRlZCBlbGVtZW50cyBzaW1pbGFyIHRvIGh5ZHJhdGlvblxuICovXG5mdW5jdGlvbiBpbm5lckRpZmZOb2RlKGRvbSwgdmNoaWxkcmVuLCBjb250ZXh0LCBtb3VudEFsbCwgaXNIeWRyYXRpbmcpIHtcblx0dmFyIG9yaWdpbmFsQ2hpbGRyZW4gPSBkb20uY2hpbGROb2Rlcyxcblx0ICAgIGNoaWxkcmVuID0gW10sXG5cdCAgICBrZXllZCA9IHt9LFxuXHQgICAga2V5ZWRMZW4gPSAwLFxuXHQgICAgbWluID0gMCxcblx0ICAgIGxlbiA9IG9yaWdpbmFsQ2hpbGRyZW4ubGVuZ3RoLFxuXHQgICAgY2hpbGRyZW5MZW4gPSAwLFxuXHQgICAgdmxlbiA9IHZjaGlsZHJlbiA/IHZjaGlsZHJlbi5sZW5ndGggOiAwLFxuXHQgICAgaixcblx0ICAgIGMsXG5cdCAgICBmLFxuXHQgICAgdmNoaWxkLFxuXHQgICAgY2hpbGQ7XG5cblx0Ly8gQnVpbGQgdXAgYSBtYXAgb2Yga2V5ZWQgY2hpbGRyZW4gYW5kIGFuIEFycmF5IG9mIHVua2V5ZWQgY2hpbGRyZW46XG5cdGlmIChsZW4gIT09IDApIHtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG5cdFx0XHR2YXIgX2NoaWxkID0gb3JpZ2luYWxDaGlsZHJlbltpXSxcblx0XHRcdCAgICBwcm9wcyA9IF9jaGlsZFsnX19wcmVhY3RhdHRyXyddLFxuXHRcdFx0ICAgIGtleSA9IHZsZW4gJiYgcHJvcHMgPyBfY2hpbGQuX2NvbXBvbmVudCA/IF9jaGlsZC5fY29tcG9uZW50Ll9fa2V5IDogcHJvcHMua2V5IDogbnVsbDtcblx0XHRcdGlmIChrZXkgIT0gbnVsbCkge1xuXHRcdFx0XHRrZXllZExlbisrO1xuXHRcdFx0XHRrZXllZFtrZXldID0gX2NoaWxkO1xuXHRcdFx0fSBlbHNlIGlmIChwcm9wcyB8fCAoX2NoaWxkLnNwbGl0VGV4dCAhPT0gdW5kZWZpbmVkID8gaXNIeWRyYXRpbmcgPyBfY2hpbGQubm9kZVZhbHVlLnRyaW0oKSA6IHRydWUgOiBpc0h5ZHJhdGluZykpIHtcblx0XHRcdFx0Y2hpbGRyZW5bY2hpbGRyZW5MZW4rK10gPSBfY2hpbGQ7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0aWYgKHZsZW4gIT09IDApIHtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHZsZW47IGkrKykge1xuXHRcdFx0dmNoaWxkID0gdmNoaWxkcmVuW2ldO1xuXHRcdFx0Y2hpbGQgPSBudWxsO1xuXG5cdFx0XHQvLyBhdHRlbXB0IHRvIGZpbmQgYSBub2RlIGJhc2VkIG9uIGtleSBtYXRjaGluZ1xuXHRcdFx0dmFyIGtleSA9IHZjaGlsZC5rZXk7XG5cdFx0XHRpZiAoa2V5ICE9IG51bGwpIHtcblx0XHRcdFx0aWYgKGtleWVkTGVuICYmIGtleWVkW2tleV0gIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRcdGNoaWxkID0ga2V5ZWRba2V5XTtcblx0XHRcdFx0XHRrZXllZFtrZXldID0gdW5kZWZpbmVkO1xuXHRcdFx0XHRcdGtleWVkTGVuLS07XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdC8vIGF0dGVtcHQgdG8gcGx1Y2sgYSBub2RlIG9mIHRoZSBzYW1lIHR5cGUgZnJvbSB0aGUgZXhpc3RpbmcgY2hpbGRyZW5cblx0XHRcdGVsc2UgaWYgKCFjaGlsZCAmJiBtaW4gPCBjaGlsZHJlbkxlbikge1xuXHRcdFx0XHRcdGZvciAoaiA9IG1pbjsgaiA8IGNoaWxkcmVuTGVuOyBqKyspIHtcblx0XHRcdFx0XHRcdGlmIChjaGlsZHJlbltqXSAhPT0gdW5kZWZpbmVkICYmIGlzU2FtZU5vZGVUeXBlKGMgPSBjaGlsZHJlbltqXSwgdmNoaWxkLCBpc0h5ZHJhdGluZykpIHtcblx0XHRcdFx0XHRcdFx0Y2hpbGQgPSBjO1xuXHRcdFx0XHRcdFx0XHRjaGlsZHJlbltqXSA9IHVuZGVmaW5lZDtcblx0XHRcdFx0XHRcdFx0aWYgKGogPT09IGNoaWxkcmVuTGVuIC0gMSkgY2hpbGRyZW5MZW4tLTtcblx0XHRcdFx0XHRcdFx0aWYgKGogPT09IG1pbikgbWluKys7XG5cdFx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHQvLyBtb3JwaCB0aGUgbWF0Y2hlZC9mb3VuZC9jcmVhdGVkIERPTSBjaGlsZCB0byBtYXRjaCB2Y2hpbGQgKGRlZXApXG5cdFx0XHRjaGlsZCA9IGlkaWZmKGNoaWxkLCB2Y2hpbGQsIGNvbnRleHQsIG1vdW50QWxsKTtcblxuXHRcdFx0ZiA9IG9yaWdpbmFsQ2hpbGRyZW5baV07XG5cdFx0XHRpZiAoY2hpbGQgJiYgY2hpbGQgIT09IGRvbSAmJiBjaGlsZCAhPT0gZikge1xuXHRcdFx0XHRpZiAoZiA9PSBudWxsKSB7XG5cdFx0XHRcdFx0ZG9tLmFwcGVuZENoaWxkKGNoaWxkKTtcblx0XHRcdFx0fSBlbHNlIGlmIChjaGlsZCA9PT0gZi5uZXh0U2libGluZykge1xuXHRcdFx0XHRcdHJlbW92ZU5vZGUoZik7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0ZG9tLmluc2VydEJlZm9yZShjaGlsZCwgZik7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHQvLyByZW1vdmUgdW51c2VkIGtleWVkIGNoaWxkcmVuOlxuXHRpZiAoa2V5ZWRMZW4pIHtcblx0XHRmb3IgKHZhciBpIGluIGtleWVkKSB7XG5cdFx0XHRpZiAoa2V5ZWRbaV0gIT09IHVuZGVmaW5lZCkgcmVjb2xsZWN0Tm9kZVRyZWUoa2V5ZWRbaV0sIGZhbHNlKTtcblx0XHR9XG5cdH1cblxuXHQvLyByZW1vdmUgb3JwaGFuZWQgdW5rZXllZCBjaGlsZHJlbjpcblx0d2hpbGUgKG1pbiA8PSBjaGlsZHJlbkxlbikge1xuXHRcdGlmICgoY2hpbGQgPSBjaGlsZHJlbltjaGlsZHJlbkxlbi0tXSkgIT09IHVuZGVmaW5lZCkgcmVjb2xsZWN0Tm9kZVRyZWUoY2hpbGQsIGZhbHNlKTtcblx0fVxufVxuXG4vKiogUmVjdXJzaXZlbHkgcmVjeWNsZSAob3IganVzdCB1bm1vdW50KSBhIG5vZGUgYW5kIGl0cyBkZXNjZW5kYW50cy5cbiAqXHRAcGFyYW0ge05vZGV9IG5vZGVcdFx0XHRcdFx0XHRET00gbm9kZSB0byBzdGFydCB1bm1vdW50L3JlbW92YWwgZnJvbVxuICpcdEBwYXJhbSB7Qm9vbGVhbn0gW3VubW91bnRPbmx5PWZhbHNlXVx0SWYgYHRydWVgLCBvbmx5IHRyaWdnZXJzIHVubW91bnQgbGlmZWN5Y2xlLCBza2lwcyByZW1vdmFsXG4gKi9cbmZ1bmN0aW9uIHJlY29sbGVjdE5vZGVUcmVlKG5vZGUsIHVubW91bnRPbmx5KSB7XG5cdHZhciBjb21wb25lbnQgPSBub2RlLl9jb21wb25lbnQ7XG5cdGlmIChjb21wb25lbnQpIHtcblx0XHQvLyBpZiBub2RlIGlzIG93bmVkIGJ5IGEgQ29tcG9uZW50LCB1bm1vdW50IHRoYXQgY29tcG9uZW50IChlbmRzIHVwIHJlY3Vyc2luZyBiYWNrIGhlcmUpXG5cdFx0dW5tb3VudENvbXBvbmVudChjb21wb25lbnQpO1xuXHR9IGVsc2Uge1xuXHRcdC8vIElmIHRoZSBub2RlJ3MgVk5vZGUgaGFkIGEgcmVmIGZ1bmN0aW9uLCBpbnZva2UgaXQgd2l0aCBudWxsIGhlcmUuXG5cdFx0Ly8gKHRoaXMgaXMgcGFydCBvZiB0aGUgUmVhY3Qgc3BlYywgYW5kIHNtYXJ0IGZvciB1bnNldHRpbmcgcmVmZXJlbmNlcylcblx0XHRpZiAobm9kZVsnX19wcmVhY3RhdHRyXyddICE9IG51bGwgJiYgbm9kZVsnX19wcmVhY3RhdHRyXyddLnJlZikgbm9kZVsnX19wcmVhY3RhdHRyXyddLnJlZihudWxsKTtcblxuXHRcdGlmICh1bm1vdW50T25seSA9PT0gZmFsc2UgfHwgbm9kZVsnX19wcmVhY3RhdHRyXyddID09IG51bGwpIHtcblx0XHRcdHJlbW92ZU5vZGUobm9kZSk7XG5cdFx0fVxuXG5cdFx0cmVtb3ZlQ2hpbGRyZW4obm9kZSk7XG5cdH1cbn1cblxuLyoqIFJlY29sbGVjdC91bm1vdW50IGFsbCBjaGlsZHJlbi5cbiAqXHQtIHdlIHVzZSAubGFzdENoaWxkIGhlcmUgYmVjYXVzZSBpdCBjYXVzZXMgbGVzcyByZWZsb3cgdGhhbiAuZmlyc3RDaGlsZFxuICpcdC0gaXQncyBhbHNvIGNoZWFwZXIgdGhhbiBhY2Nlc3NpbmcgdGhlIC5jaGlsZE5vZGVzIExpdmUgTm9kZUxpc3RcbiAqL1xuZnVuY3Rpb24gcmVtb3ZlQ2hpbGRyZW4obm9kZSkge1xuXHRub2RlID0gbm9kZS5sYXN0Q2hpbGQ7XG5cdHdoaWxlIChub2RlKSB7XG5cdFx0dmFyIG5leHQgPSBub2RlLnByZXZpb3VzU2libGluZztcblx0XHRyZWNvbGxlY3ROb2RlVHJlZShub2RlLCB0cnVlKTtcblx0XHRub2RlID0gbmV4dDtcblx0fVxufVxuXG4vKiogQXBwbHkgZGlmZmVyZW5jZXMgaW4gYXR0cmlidXRlcyBmcm9tIGEgVk5vZGUgdG8gdGhlIGdpdmVuIERPTSBFbGVtZW50LlxuICpcdEBwYXJhbSB7RWxlbWVudH0gZG9tXHRcdEVsZW1lbnQgd2l0aCBhdHRyaWJ1dGVzIHRvIGRpZmYgYGF0dHJzYCBhZ2FpbnN0XG4gKlx0QHBhcmFtIHtPYmplY3R9IGF0dHJzXHRcdFRoZSBkZXNpcmVkIGVuZC1zdGF0ZSBrZXktdmFsdWUgYXR0cmlidXRlIHBhaXJzXG4gKlx0QHBhcmFtIHtPYmplY3R9IG9sZFx0XHRcdEN1cnJlbnQvcHJldmlvdXMgYXR0cmlidXRlcyAoZnJvbSBwcmV2aW91cyBWTm9kZSBvciBlbGVtZW50J3MgcHJvcCBjYWNoZSlcbiAqL1xuZnVuY3Rpb24gZGlmZkF0dHJpYnV0ZXMoZG9tLCBhdHRycywgb2xkKSB7XG5cdHZhciBuYW1lO1xuXG5cdC8vIHJlbW92ZSBhdHRyaWJ1dGVzIG5vIGxvbmdlciBwcmVzZW50IG9uIHRoZSB2bm9kZSBieSBzZXR0aW5nIHRoZW0gdG8gdW5kZWZpbmVkXG5cdGZvciAobmFtZSBpbiBvbGQpIHtcblx0XHRpZiAoIShhdHRycyAmJiBhdHRyc1tuYW1lXSAhPSBudWxsKSAmJiBvbGRbbmFtZV0gIT0gbnVsbCkge1xuXHRcdFx0c2V0QWNjZXNzb3IoZG9tLCBuYW1lLCBvbGRbbmFtZV0sIG9sZFtuYW1lXSA9IHVuZGVmaW5lZCwgaXNTdmdNb2RlKTtcblx0XHR9XG5cdH1cblxuXHQvLyBhZGQgbmV3ICYgdXBkYXRlIGNoYW5nZWQgYXR0cmlidXRlc1xuXHRmb3IgKG5hbWUgaW4gYXR0cnMpIHtcblx0XHRpZiAobmFtZSAhPT0gJ2NoaWxkcmVuJyAmJiBuYW1lICE9PSAnaW5uZXJIVE1MJyAmJiAoIShuYW1lIGluIG9sZCkgfHwgYXR0cnNbbmFtZV0gIT09IChuYW1lID09PSAndmFsdWUnIHx8IG5hbWUgPT09ICdjaGVja2VkJyA/IGRvbVtuYW1lXSA6IG9sZFtuYW1lXSkpKSB7XG5cdFx0XHRzZXRBY2Nlc3Nvcihkb20sIG5hbWUsIG9sZFtuYW1lXSwgb2xkW25hbWVdID0gYXR0cnNbbmFtZV0sIGlzU3ZnTW9kZSk7XG5cdFx0fVxuXHR9XG59XG5cbi8qKiBSZXRhaW5zIGEgcG9vbCBvZiBDb21wb25lbnRzIGZvciByZS11c2UsIGtleWVkIG9uIGNvbXBvbmVudCBuYW1lLlxuICpcdE5vdGU6IHNpbmNlIGNvbXBvbmVudCBuYW1lcyBhcmUgbm90IHVuaXF1ZSBvciBldmVuIG5lY2Vzc2FyaWx5IGF2YWlsYWJsZSwgdGhlc2UgYXJlIHByaW1hcmlseSBhIGZvcm0gb2Ygc2hhcmRpbmcuXG4gKlx0QHByaXZhdGVcbiAqL1xudmFyIGNvbXBvbmVudHMgPSB7fTtcblxuLyoqIFJlY2xhaW0gYSBjb21wb25lbnQgZm9yIGxhdGVyIHJlLXVzZSBieSB0aGUgcmVjeWNsZXIuICovXG5mdW5jdGlvbiBjb2xsZWN0Q29tcG9uZW50KGNvbXBvbmVudCkge1xuXHR2YXIgbmFtZSA9IGNvbXBvbmVudC5jb25zdHJ1Y3Rvci5uYW1lO1xuXHQoY29tcG9uZW50c1tuYW1lXSB8fCAoY29tcG9uZW50c1tuYW1lXSA9IFtdKSkucHVzaChjb21wb25lbnQpO1xufVxuXG4vKiogQ3JlYXRlIGEgY29tcG9uZW50LiBOb3JtYWxpemVzIGRpZmZlcmVuY2VzIGJldHdlZW4gUEZDJ3MgYW5kIGNsYXNzZnVsIENvbXBvbmVudHMuICovXG5mdW5jdGlvbiBjcmVhdGVDb21wb25lbnQoQ3RvciwgcHJvcHMsIGNvbnRleHQpIHtcblx0dmFyIGxpc3QgPSBjb21wb25lbnRzW0N0b3IubmFtZV0sXG5cdCAgICBpbnN0O1xuXG5cdGlmIChDdG9yLnByb3RvdHlwZSAmJiBDdG9yLnByb3RvdHlwZS5yZW5kZXIpIHtcblx0XHRpbnN0ID0gbmV3IEN0b3IocHJvcHMsIGNvbnRleHQpO1xuXHRcdENvbXBvbmVudC5jYWxsKGluc3QsIHByb3BzLCBjb250ZXh0KTtcblx0fSBlbHNlIHtcblx0XHRpbnN0ID0gbmV3IENvbXBvbmVudChwcm9wcywgY29udGV4dCk7XG5cdFx0aW5zdC5jb25zdHJ1Y3RvciA9IEN0b3I7XG5cdFx0aW5zdC5yZW5kZXIgPSBkb1JlbmRlcjtcblx0fVxuXG5cdGlmIChsaXN0KSB7XG5cdFx0Zm9yICh2YXIgaSA9IGxpc3QubGVuZ3RoOyBpLS07KSB7XG5cdFx0XHRpZiAobGlzdFtpXS5jb25zdHJ1Y3RvciA9PT0gQ3Rvcikge1xuXHRcdFx0XHRpbnN0Lm5leHRCYXNlID0gbGlzdFtpXS5uZXh0QmFzZTtcblx0XHRcdFx0bGlzdC5zcGxpY2UoaSwgMSk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXHRyZXR1cm4gaW5zdDtcbn1cblxuLyoqIFRoZSBgLnJlbmRlcigpYCBtZXRob2QgZm9yIGEgUEZDIGJhY2tpbmcgaW5zdGFuY2UuICovXG5mdW5jdGlvbiBkb1JlbmRlcihwcm9wcywgc3RhdGUsIGNvbnRleHQpIHtcblx0cmV0dXJuIHRoaXMuY29uc3RydWN0b3IocHJvcHMsIGNvbnRleHQpO1xufVxuXG4vKiogU2V0IGEgY29tcG9uZW50J3MgYHByb3BzYCAoZ2VuZXJhbGx5IGRlcml2ZWQgZnJvbSBKU1ggYXR0cmlidXRlcykuXG4gKlx0QHBhcmFtIHtPYmplY3R9IHByb3BzXG4gKlx0QHBhcmFtIHtPYmplY3R9IFtvcHRzXVxuICpcdEBwYXJhbSB7Ym9vbGVhbn0gW29wdHMucmVuZGVyU3luYz1mYWxzZV1cdElmIGB0cnVlYCBhbmQge0BsaW5rIG9wdGlvbnMuc3luY0NvbXBvbmVudFVwZGF0ZXN9IGlzIGB0cnVlYCwgdHJpZ2dlcnMgc3luY2hyb25vdXMgcmVuZGVyaW5nLlxuICpcdEBwYXJhbSB7Ym9vbGVhbn0gW29wdHMucmVuZGVyPXRydWVdXHRcdFx0SWYgYGZhbHNlYCwgbm8gcmVuZGVyIHdpbGwgYmUgdHJpZ2dlcmVkLlxuICovXG5mdW5jdGlvbiBzZXRDb21wb25lbnRQcm9wcyhjb21wb25lbnQsIHByb3BzLCBvcHRzLCBjb250ZXh0LCBtb3VudEFsbCkge1xuXHRpZiAoY29tcG9uZW50Ll9kaXNhYmxlKSByZXR1cm47XG5cdGNvbXBvbmVudC5fZGlzYWJsZSA9IHRydWU7XG5cblx0aWYgKGNvbXBvbmVudC5fX3JlZiA9IHByb3BzLnJlZikgZGVsZXRlIHByb3BzLnJlZjtcblx0aWYgKGNvbXBvbmVudC5fX2tleSA9IHByb3BzLmtleSkgZGVsZXRlIHByb3BzLmtleTtcblxuXHRpZiAoIWNvbXBvbmVudC5iYXNlIHx8IG1vdW50QWxsKSB7XG5cdFx0aWYgKGNvbXBvbmVudC5jb21wb25lbnRXaWxsTW91bnQpIGNvbXBvbmVudC5jb21wb25lbnRXaWxsTW91bnQoKTtcblx0fSBlbHNlIGlmIChjb21wb25lbnQuY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcykge1xuXHRcdGNvbXBvbmVudC5jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKHByb3BzLCBjb250ZXh0KTtcblx0fVxuXG5cdGlmIChjb250ZXh0ICYmIGNvbnRleHQgIT09IGNvbXBvbmVudC5jb250ZXh0KSB7XG5cdFx0aWYgKCFjb21wb25lbnQucHJldkNvbnRleHQpIGNvbXBvbmVudC5wcmV2Q29udGV4dCA9IGNvbXBvbmVudC5jb250ZXh0O1xuXHRcdGNvbXBvbmVudC5jb250ZXh0ID0gY29udGV4dDtcblx0fVxuXG5cdGlmICghY29tcG9uZW50LnByZXZQcm9wcykgY29tcG9uZW50LnByZXZQcm9wcyA9IGNvbXBvbmVudC5wcm9wcztcblx0Y29tcG9uZW50LnByb3BzID0gcHJvcHM7XG5cblx0Y29tcG9uZW50Ll9kaXNhYmxlID0gZmFsc2U7XG5cblx0aWYgKG9wdHMgIT09IDApIHtcblx0XHRpZiAob3B0cyA9PT0gMSB8fCBvcHRpb25zLnN5bmNDb21wb25lbnRVcGRhdGVzICE9PSBmYWxzZSB8fCAhY29tcG9uZW50LmJhc2UpIHtcblx0XHRcdHJlbmRlckNvbXBvbmVudChjb21wb25lbnQsIDEsIG1vdW50QWxsKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0ZW5xdWV1ZVJlbmRlcihjb21wb25lbnQpO1xuXHRcdH1cblx0fVxuXG5cdGlmIChjb21wb25lbnQuX19yZWYpIGNvbXBvbmVudC5fX3JlZihjb21wb25lbnQpO1xufVxuXG4vKiogUmVuZGVyIGEgQ29tcG9uZW50LCB0cmlnZ2VyaW5nIG5lY2Vzc2FyeSBsaWZlY3ljbGUgZXZlbnRzIGFuZCB0YWtpbmcgSGlnaC1PcmRlciBDb21wb25lbnRzIGludG8gYWNjb3VudC5cbiAqXHRAcGFyYW0ge0NvbXBvbmVudH0gY29tcG9uZW50XG4gKlx0QHBhcmFtIHtPYmplY3R9IFtvcHRzXVxuICpcdEBwYXJhbSB7Ym9vbGVhbn0gW29wdHMuYnVpbGQ9ZmFsc2VdXHRcdElmIGB0cnVlYCwgY29tcG9uZW50IHdpbGwgYnVpbGQgYW5kIHN0b3JlIGEgRE9NIG5vZGUgaWYgbm90IGFscmVhZHkgYXNzb2NpYXRlZCB3aXRoIG9uZS5cbiAqXHRAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiByZW5kZXJDb21wb25lbnQoY29tcG9uZW50LCBvcHRzLCBtb3VudEFsbCwgaXNDaGlsZCkge1xuXHRpZiAoY29tcG9uZW50Ll9kaXNhYmxlKSByZXR1cm47XG5cblx0dmFyIHByb3BzID0gY29tcG9uZW50LnByb3BzLFxuXHQgICAgc3RhdGUgPSBjb21wb25lbnQuc3RhdGUsXG5cdCAgICBjb250ZXh0ID0gY29tcG9uZW50LmNvbnRleHQsXG5cdCAgICBwcmV2aW91c1Byb3BzID0gY29tcG9uZW50LnByZXZQcm9wcyB8fCBwcm9wcyxcblx0ICAgIHByZXZpb3VzU3RhdGUgPSBjb21wb25lbnQucHJldlN0YXRlIHx8IHN0YXRlLFxuXHQgICAgcHJldmlvdXNDb250ZXh0ID0gY29tcG9uZW50LnByZXZDb250ZXh0IHx8IGNvbnRleHQsXG5cdCAgICBpc1VwZGF0ZSA9IGNvbXBvbmVudC5iYXNlLFxuXHQgICAgbmV4dEJhc2UgPSBjb21wb25lbnQubmV4dEJhc2UsXG5cdCAgICBpbml0aWFsQmFzZSA9IGlzVXBkYXRlIHx8IG5leHRCYXNlLFxuXHQgICAgaW5pdGlhbENoaWxkQ29tcG9uZW50ID0gY29tcG9uZW50Ll9jb21wb25lbnQsXG5cdCAgICBza2lwID0gZmFsc2UsXG5cdCAgICByZW5kZXJlZCxcblx0ICAgIGluc3QsXG5cdCAgICBjYmFzZTtcblxuXHQvLyBpZiB1cGRhdGluZ1xuXHRpZiAoaXNVcGRhdGUpIHtcblx0XHRjb21wb25lbnQucHJvcHMgPSBwcmV2aW91c1Byb3BzO1xuXHRcdGNvbXBvbmVudC5zdGF0ZSA9IHByZXZpb3VzU3RhdGU7XG5cdFx0Y29tcG9uZW50LmNvbnRleHQgPSBwcmV2aW91c0NvbnRleHQ7XG5cdFx0aWYgKG9wdHMgIT09IDIgJiYgY29tcG9uZW50LnNob3VsZENvbXBvbmVudFVwZGF0ZSAmJiBjb21wb25lbnQuc2hvdWxkQ29tcG9uZW50VXBkYXRlKHByb3BzLCBzdGF0ZSwgY29udGV4dCkgPT09IGZhbHNlKSB7XG5cdFx0XHRza2lwID0gdHJ1ZTtcblx0XHR9IGVsc2UgaWYgKGNvbXBvbmVudC5jb21wb25lbnRXaWxsVXBkYXRlKSB7XG5cdFx0XHRjb21wb25lbnQuY29tcG9uZW50V2lsbFVwZGF0ZShwcm9wcywgc3RhdGUsIGNvbnRleHQpO1xuXHRcdH1cblx0XHRjb21wb25lbnQucHJvcHMgPSBwcm9wcztcblx0XHRjb21wb25lbnQuc3RhdGUgPSBzdGF0ZTtcblx0XHRjb21wb25lbnQuY29udGV4dCA9IGNvbnRleHQ7XG5cdH1cblxuXHRjb21wb25lbnQucHJldlByb3BzID0gY29tcG9uZW50LnByZXZTdGF0ZSA9IGNvbXBvbmVudC5wcmV2Q29udGV4dCA9IGNvbXBvbmVudC5uZXh0QmFzZSA9IG51bGw7XG5cdGNvbXBvbmVudC5fZGlydHkgPSBmYWxzZTtcblxuXHRpZiAoIXNraXApIHtcblx0XHRyZW5kZXJlZCA9IGNvbXBvbmVudC5yZW5kZXIocHJvcHMsIHN0YXRlLCBjb250ZXh0KTtcblxuXHRcdC8vIGNvbnRleHQgdG8gcGFzcyB0byB0aGUgY2hpbGQsIGNhbiBiZSB1cGRhdGVkIHZpYSAoZ3JhbmQtKXBhcmVudCBjb21wb25lbnRcblx0XHRpZiAoY29tcG9uZW50LmdldENoaWxkQ29udGV4dCkge1xuXHRcdFx0Y29udGV4dCA9IGV4dGVuZChleHRlbmQoe30sIGNvbnRleHQpLCBjb21wb25lbnQuZ2V0Q2hpbGRDb250ZXh0KCkpO1xuXHRcdH1cblxuXHRcdHZhciBjaGlsZENvbXBvbmVudCA9IHJlbmRlcmVkICYmIHJlbmRlcmVkLm5vZGVOYW1lLFxuXHRcdCAgICB0b1VubW91bnQsXG5cdFx0ICAgIGJhc2U7XG5cblx0XHRpZiAodHlwZW9mIGNoaWxkQ29tcG9uZW50ID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHQvLyBzZXQgdXAgaGlnaCBvcmRlciBjb21wb25lbnQgbGlua1xuXG5cdFx0XHR2YXIgY2hpbGRQcm9wcyA9IGdldE5vZGVQcm9wcyhyZW5kZXJlZCk7XG5cdFx0XHRpbnN0ID0gaW5pdGlhbENoaWxkQ29tcG9uZW50O1xuXG5cdFx0XHRpZiAoaW5zdCAmJiBpbnN0LmNvbnN0cnVjdG9yID09PSBjaGlsZENvbXBvbmVudCAmJiBjaGlsZFByb3BzLmtleSA9PSBpbnN0Ll9fa2V5KSB7XG5cdFx0XHRcdHNldENvbXBvbmVudFByb3BzKGluc3QsIGNoaWxkUHJvcHMsIDEsIGNvbnRleHQsIGZhbHNlKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRvVW5tb3VudCA9IGluc3Q7XG5cblx0XHRcdFx0Y29tcG9uZW50Ll9jb21wb25lbnQgPSBpbnN0ID0gY3JlYXRlQ29tcG9uZW50KGNoaWxkQ29tcG9uZW50LCBjaGlsZFByb3BzLCBjb250ZXh0KTtcblx0XHRcdFx0aW5zdC5uZXh0QmFzZSA9IGluc3QubmV4dEJhc2UgfHwgbmV4dEJhc2U7XG5cdFx0XHRcdGluc3QuX3BhcmVudENvbXBvbmVudCA9IGNvbXBvbmVudDtcblx0XHRcdFx0c2V0Q29tcG9uZW50UHJvcHMoaW5zdCwgY2hpbGRQcm9wcywgMCwgY29udGV4dCwgZmFsc2UpO1xuXHRcdFx0XHRyZW5kZXJDb21wb25lbnQoaW5zdCwgMSwgbW91bnRBbGwsIHRydWUpO1xuXHRcdFx0fVxuXG5cdFx0XHRiYXNlID0gaW5zdC5iYXNlO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRjYmFzZSA9IGluaXRpYWxCYXNlO1xuXG5cdFx0XHQvLyBkZXN0cm95IGhpZ2ggb3JkZXIgY29tcG9uZW50IGxpbmtcblx0XHRcdHRvVW5tb3VudCA9IGluaXRpYWxDaGlsZENvbXBvbmVudDtcblx0XHRcdGlmICh0b1VubW91bnQpIHtcblx0XHRcdFx0Y2Jhc2UgPSBjb21wb25lbnQuX2NvbXBvbmVudCA9IG51bGw7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChpbml0aWFsQmFzZSB8fCBvcHRzID09PSAxKSB7XG5cdFx0XHRcdGlmIChjYmFzZSkgY2Jhc2UuX2NvbXBvbmVudCA9IG51bGw7XG5cdFx0XHRcdGJhc2UgPSBkaWZmKGNiYXNlLCByZW5kZXJlZCwgY29udGV4dCwgbW91bnRBbGwgfHwgIWlzVXBkYXRlLCBpbml0aWFsQmFzZSAmJiBpbml0aWFsQmFzZS5wYXJlbnROb2RlLCB0cnVlKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAoaW5pdGlhbEJhc2UgJiYgYmFzZSAhPT0gaW5pdGlhbEJhc2UgJiYgaW5zdCAhPT0gaW5pdGlhbENoaWxkQ29tcG9uZW50KSB7XG5cdFx0XHR2YXIgYmFzZVBhcmVudCA9IGluaXRpYWxCYXNlLnBhcmVudE5vZGU7XG5cdFx0XHRpZiAoYmFzZVBhcmVudCAmJiBiYXNlICE9PSBiYXNlUGFyZW50KSB7XG5cdFx0XHRcdGJhc2VQYXJlbnQucmVwbGFjZUNoaWxkKGJhc2UsIGluaXRpYWxCYXNlKTtcblxuXHRcdFx0XHRpZiAoIXRvVW5tb3VudCkge1xuXHRcdFx0XHRcdGluaXRpYWxCYXNlLl9jb21wb25lbnQgPSBudWxsO1xuXHRcdFx0XHRcdHJlY29sbGVjdE5vZGVUcmVlKGluaXRpYWxCYXNlLCBmYWxzZSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAodG9Vbm1vdW50KSB7XG5cdFx0XHR1bm1vdW50Q29tcG9uZW50KHRvVW5tb3VudCk7XG5cdFx0fVxuXG5cdFx0Y29tcG9uZW50LmJhc2UgPSBiYXNlO1xuXHRcdGlmIChiYXNlICYmICFpc0NoaWxkKSB7XG5cdFx0XHR2YXIgY29tcG9uZW50UmVmID0gY29tcG9uZW50LFxuXHRcdFx0ICAgIHQgPSBjb21wb25lbnQ7XG5cdFx0XHR3aGlsZSAodCA9IHQuX3BhcmVudENvbXBvbmVudCkge1xuXHRcdFx0XHQoY29tcG9uZW50UmVmID0gdCkuYmFzZSA9IGJhc2U7XG5cdFx0XHR9XG5cdFx0XHRiYXNlLl9jb21wb25lbnQgPSBjb21wb25lbnRSZWY7XG5cdFx0XHRiYXNlLl9jb21wb25lbnRDb25zdHJ1Y3RvciA9IGNvbXBvbmVudFJlZi5jb25zdHJ1Y3Rvcjtcblx0XHR9XG5cdH1cblxuXHRpZiAoIWlzVXBkYXRlIHx8IG1vdW50QWxsKSB7XG5cdFx0bW91bnRzLnVuc2hpZnQoY29tcG9uZW50KTtcblx0fSBlbHNlIGlmICghc2tpcCkge1xuXHRcdC8vIEVuc3VyZSB0aGF0IHBlbmRpbmcgY29tcG9uZW50RGlkTW91bnQoKSBob29rcyBvZiBjaGlsZCBjb21wb25lbnRzXG5cdFx0Ly8gYXJlIGNhbGxlZCBiZWZvcmUgdGhlIGNvbXBvbmVudERpZFVwZGF0ZSgpIGhvb2sgaW4gdGhlIHBhcmVudC5cblx0XHQvLyBOb3RlOiBkaXNhYmxlZCBhcyBpdCBjYXVzZXMgZHVwbGljYXRlIGhvb2tzLCBzZWUgaHR0cHM6Ly9naXRodWIuY29tL2RldmVsb3BpdC9wcmVhY3QvaXNzdWVzLzc1MFxuXHRcdC8vIGZsdXNoTW91bnRzKCk7XG5cblx0XHRpZiAoY29tcG9uZW50LmNvbXBvbmVudERpZFVwZGF0ZSkge1xuXHRcdFx0Y29tcG9uZW50LmNvbXBvbmVudERpZFVwZGF0ZShwcmV2aW91c1Byb3BzLCBwcmV2aW91c1N0YXRlLCBwcmV2aW91c0NvbnRleHQpO1xuXHRcdH1cblx0XHRpZiAob3B0aW9ucy5hZnRlclVwZGF0ZSkgb3B0aW9ucy5hZnRlclVwZGF0ZShjb21wb25lbnQpO1xuXHR9XG5cblx0aWYgKGNvbXBvbmVudC5fcmVuZGVyQ2FsbGJhY2tzICE9IG51bGwpIHtcblx0XHR3aGlsZSAoY29tcG9uZW50Ll9yZW5kZXJDYWxsYmFja3MubGVuZ3RoKSB7XG5cdFx0XHRjb21wb25lbnQuX3JlbmRlckNhbGxiYWNrcy5wb3AoKS5jYWxsKGNvbXBvbmVudCk7XG5cdFx0fVxuXHR9XG5cblx0aWYgKCFkaWZmTGV2ZWwgJiYgIWlzQ2hpbGQpIGZsdXNoTW91bnRzKCk7XG59XG5cbi8qKiBBcHBseSB0aGUgQ29tcG9uZW50IHJlZmVyZW5jZWQgYnkgYSBWTm9kZSB0byB0aGUgRE9NLlxuICpcdEBwYXJhbSB7RWxlbWVudH0gZG9tXHRUaGUgRE9NIG5vZGUgdG8gbXV0YXRlXG4gKlx0QHBhcmFtIHtWTm9kZX0gdm5vZGVcdEEgQ29tcG9uZW50LXJlZmVyZW5jaW5nIFZOb2RlXG4gKlx0QHJldHVybnMge0VsZW1lbnR9IGRvbVx0VGhlIGNyZWF0ZWQvbXV0YXRlZCBlbGVtZW50XG4gKlx0QHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gYnVpbGRDb21wb25lbnRGcm9tVk5vZGUoZG9tLCB2bm9kZSwgY29udGV4dCwgbW91bnRBbGwpIHtcblx0dmFyIGMgPSBkb20gJiYgZG9tLl9jb21wb25lbnQsXG5cdCAgICBvcmlnaW5hbENvbXBvbmVudCA9IGMsXG5cdCAgICBvbGREb20gPSBkb20sXG5cdCAgICBpc0RpcmVjdE93bmVyID0gYyAmJiBkb20uX2NvbXBvbmVudENvbnN0cnVjdG9yID09PSB2bm9kZS5ub2RlTmFtZSxcblx0ICAgIGlzT3duZXIgPSBpc0RpcmVjdE93bmVyLFxuXHQgICAgcHJvcHMgPSBnZXROb2RlUHJvcHModm5vZGUpO1xuXHR3aGlsZSAoYyAmJiAhaXNPd25lciAmJiAoYyA9IGMuX3BhcmVudENvbXBvbmVudCkpIHtcblx0XHRpc093bmVyID0gYy5jb25zdHJ1Y3RvciA9PT0gdm5vZGUubm9kZU5hbWU7XG5cdH1cblxuXHRpZiAoYyAmJiBpc093bmVyICYmICghbW91bnRBbGwgfHwgYy5fY29tcG9uZW50KSkge1xuXHRcdHNldENvbXBvbmVudFByb3BzKGMsIHByb3BzLCAzLCBjb250ZXh0LCBtb3VudEFsbCk7XG5cdFx0ZG9tID0gYy5iYXNlO1xuXHR9IGVsc2Uge1xuXHRcdGlmIChvcmlnaW5hbENvbXBvbmVudCAmJiAhaXNEaXJlY3RPd25lcikge1xuXHRcdFx0dW5tb3VudENvbXBvbmVudChvcmlnaW5hbENvbXBvbmVudCk7XG5cdFx0XHRkb20gPSBvbGREb20gPSBudWxsO1xuXHRcdH1cblxuXHRcdGMgPSBjcmVhdGVDb21wb25lbnQodm5vZGUubm9kZU5hbWUsIHByb3BzLCBjb250ZXh0KTtcblx0XHRpZiAoZG9tICYmICFjLm5leHRCYXNlKSB7XG5cdFx0XHRjLm5leHRCYXNlID0gZG9tO1xuXHRcdFx0Ly8gcGFzc2luZyBkb20vb2xkRG9tIGFzIG5leHRCYXNlIHdpbGwgcmVjeWNsZSBpdCBpZiB1bnVzZWQsIHNvIGJ5cGFzcyByZWN5Y2xpbmcgb24gTDIyOTpcblx0XHRcdG9sZERvbSA9IG51bGw7XG5cdFx0fVxuXHRcdHNldENvbXBvbmVudFByb3BzKGMsIHByb3BzLCAxLCBjb250ZXh0LCBtb3VudEFsbCk7XG5cdFx0ZG9tID0gYy5iYXNlO1xuXG5cdFx0aWYgKG9sZERvbSAmJiBkb20gIT09IG9sZERvbSkge1xuXHRcdFx0b2xkRG9tLl9jb21wb25lbnQgPSBudWxsO1xuXHRcdFx0cmVjb2xsZWN0Tm9kZVRyZWUob2xkRG9tLCBmYWxzZSk7XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIGRvbTtcbn1cblxuLyoqIFJlbW92ZSBhIGNvbXBvbmVudCBmcm9tIHRoZSBET00gYW5kIHJlY3ljbGUgaXQuXG4gKlx0QHBhcmFtIHtDb21wb25lbnR9IGNvbXBvbmVudFx0VGhlIENvbXBvbmVudCBpbnN0YW5jZSB0byB1bm1vdW50XG4gKlx0QHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gdW5tb3VudENvbXBvbmVudChjb21wb25lbnQpIHtcblx0aWYgKG9wdGlvbnMuYmVmb3JlVW5tb3VudCkgb3B0aW9ucy5iZWZvcmVVbm1vdW50KGNvbXBvbmVudCk7XG5cblx0dmFyIGJhc2UgPSBjb21wb25lbnQuYmFzZTtcblxuXHRjb21wb25lbnQuX2Rpc2FibGUgPSB0cnVlO1xuXG5cdGlmIChjb21wb25lbnQuY29tcG9uZW50V2lsbFVubW91bnQpIGNvbXBvbmVudC5jb21wb25lbnRXaWxsVW5tb3VudCgpO1xuXG5cdGNvbXBvbmVudC5iYXNlID0gbnVsbDtcblxuXHQvLyByZWN1cnNpdmVseSB0ZWFyIGRvd24gJiByZWNvbGxlY3QgaGlnaC1vcmRlciBjb21wb25lbnQgY2hpbGRyZW46XG5cdHZhciBpbm5lciA9IGNvbXBvbmVudC5fY29tcG9uZW50O1xuXHRpZiAoaW5uZXIpIHtcblx0XHR1bm1vdW50Q29tcG9uZW50KGlubmVyKTtcblx0fSBlbHNlIGlmIChiYXNlKSB7XG5cdFx0aWYgKGJhc2VbJ19fcHJlYWN0YXR0cl8nXSAmJiBiYXNlWydfX3ByZWFjdGF0dHJfJ10ucmVmKSBiYXNlWydfX3ByZWFjdGF0dHJfJ10ucmVmKG51bGwpO1xuXG5cdFx0Y29tcG9uZW50Lm5leHRCYXNlID0gYmFzZTtcblxuXHRcdHJlbW92ZU5vZGUoYmFzZSk7XG5cdFx0Y29sbGVjdENvbXBvbmVudChjb21wb25lbnQpO1xuXG5cdFx0cmVtb3ZlQ2hpbGRyZW4oYmFzZSk7XG5cdH1cblxuXHRpZiAoY29tcG9uZW50Ll9fcmVmKSBjb21wb25lbnQuX19yZWYobnVsbCk7XG59XG5cbi8qKiBCYXNlIENvbXBvbmVudCBjbGFzcy5cbiAqXHRQcm92aWRlcyBgc2V0U3RhdGUoKWAgYW5kIGBmb3JjZVVwZGF0ZSgpYCwgd2hpY2ggdHJpZ2dlciByZW5kZXJpbmcuXG4gKlx0QHB1YmxpY1xuICpcbiAqXHRAZXhhbXBsZVxuICpcdGNsYXNzIE15Rm9vIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAqXHRcdHJlbmRlcihwcm9wcywgc3RhdGUpIHtcbiAqXHRcdFx0cmV0dXJuIDxkaXYgLz47XG4gKlx0XHR9XG4gKlx0fVxuICovXG5mdW5jdGlvbiBDb21wb25lbnQocHJvcHMsIGNvbnRleHQpIHtcblx0dGhpcy5fZGlydHkgPSB0cnVlO1xuXG5cdC8qKiBAcHVibGljXG4gICpcdEB0eXBlIHtvYmplY3R9XG4gICovXG5cdHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG5cblx0LyoqIEBwdWJsaWNcbiAgKlx0QHR5cGUge29iamVjdH1cbiAgKi9cblx0dGhpcy5wcm9wcyA9IHByb3BzO1xuXG5cdC8qKiBAcHVibGljXG4gICpcdEB0eXBlIHtvYmplY3R9XG4gICovXG5cdHRoaXMuc3RhdGUgPSB0aGlzLnN0YXRlIHx8IHt9O1xufVxuXG5leHRlbmQoQ29tcG9uZW50LnByb3RvdHlwZSwge1xuXG5cdC8qKiBSZXR1cm5zIGEgYGJvb2xlYW5gIGluZGljYXRpbmcgaWYgdGhlIGNvbXBvbmVudCBzaG91bGQgcmUtcmVuZGVyIHdoZW4gcmVjZWl2aW5nIHRoZSBnaXZlbiBgcHJvcHNgIGFuZCBgc3RhdGVgLlxuICAqXHRAcGFyYW0ge29iamVjdH0gbmV4dFByb3BzXG4gICpcdEBwYXJhbSB7b2JqZWN0fSBuZXh0U3RhdGVcbiAgKlx0QHBhcmFtIHtvYmplY3R9IG5leHRDb250ZXh0XG4gICpcdEByZXR1cm5zIHtCb29sZWFufSBzaG91bGQgdGhlIGNvbXBvbmVudCByZS1yZW5kZXJcbiAgKlx0QG5hbWUgc2hvdWxkQ29tcG9uZW50VXBkYXRlXG4gICpcdEBmdW5jdGlvblxuICAqL1xuXG5cdC8qKiBVcGRhdGUgY29tcG9uZW50IHN0YXRlIGJ5IGNvcHlpbmcgcHJvcGVydGllcyBmcm9tIGBzdGF0ZWAgdG8gYHRoaXMuc3RhdGVgLlxuICAqXHRAcGFyYW0ge29iamVjdH0gc3RhdGVcdFx0QSBoYXNoIG9mIHN0YXRlIHByb3BlcnRpZXMgdG8gdXBkYXRlIHdpdGggbmV3IHZhbHVlc1xuICAqXHRAcGFyYW0ge2Z1bmN0aW9ufSBjYWxsYmFja1x0QSBmdW5jdGlvbiB0byBiZSBjYWxsZWQgb25jZSBjb21wb25lbnQgc3RhdGUgaXMgdXBkYXRlZFxuICAqL1xuXHRzZXRTdGF0ZTogZnVuY3Rpb24gc2V0U3RhdGUoc3RhdGUsIGNhbGxiYWNrKSB7XG5cdFx0dmFyIHMgPSB0aGlzLnN0YXRlO1xuXHRcdGlmICghdGhpcy5wcmV2U3RhdGUpIHRoaXMucHJldlN0YXRlID0gZXh0ZW5kKHt9LCBzKTtcblx0XHRleHRlbmQocywgdHlwZW9mIHN0YXRlID09PSAnZnVuY3Rpb24nID8gc3RhdGUocywgdGhpcy5wcm9wcykgOiBzdGF0ZSk7XG5cdFx0aWYgKGNhbGxiYWNrKSAodGhpcy5fcmVuZGVyQ2FsbGJhY2tzID0gdGhpcy5fcmVuZGVyQ2FsbGJhY2tzIHx8IFtdKS5wdXNoKGNhbGxiYWNrKTtcblx0XHRlbnF1ZXVlUmVuZGVyKHRoaXMpO1xuXHR9LFxuXG5cblx0LyoqIEltbWVkaWF0ZWx5IHBlcmZvcm0gYSBzeW5jaHJvbm91cyByZS1yZW5kZXIgb2YgdGhlIGNvbXBvbmVudC5cbiAgKlx0QHBhcmFtIHtmdW5jdGlvbn0gY2FsbGJhY2tcdFx0QSBmdW5jdGlvbiB0byBiZSBjYWxsZWQgYWZ0ZXIgY29tcG9uZW50IGlzIHJlLXJlbmRlcmVkLlxuICAqXHRAcHJpdmF0ZVxuICAqL1xuXHRmb3JjZVVwZGF0ZTogZnVuY3Rpb24gZm9yY2VVcGRhdGUoY2FsbGJhY2spIHtcblx0XHRpZiAoY2FsbGJhY2spICh0aGlzLl9yZW5kZXJDYWxsYmFja3MgPSB0aGlzLl9yZW5kZXJDYWxsYmFja3MgfHwgW10pLnB1c2goY2FsbGJhY2spO1xuXHRcdHJlbmRlckNvbXBvbmVudCh0aGlzLCAyKTtcblx0fSxcblxuXG5cdC8qKiBBY2NlcHRzIGBwcm9wc2AgYW5kIGBzdGF0ZWAsIGFuZCByZXR1cm5zIGEgbmV3IFZpcnR1YWwgRE9NIHRyZWUgdG8gYnVpbGQuXG4gICpcdFZpcnR1YWwgRE9NIGlzIGdlbmVyYWxseSBjb25zdHJ1Y3RlZCB2aWEgW0pTWF0oaHR0cDovL2phc29uZm9ybWF0LmNvbS93dGYtaXMtanN4KS5cbiAgKlx0QHBhcmFtIHtvYmplY3R9IHByb3BzXHRcdFByb3BzIChlZzogSlNYIGF0dHJpYnV0ZXMpIHJlY2VpdmVkIGZyb20gcGFyZW50IGVsZW1lbnQvY29tcG9uZW50XG4gICpcdEBwYXJhbSB7b2JqZWN0fSBzdGF0ZVx0XHRUaGUgY29tcG9uZW50J3MgY3VycmVudCBzdGF0ZVxuICAqXHRAcGFyYW0ge29iamVjdH0gY29udGV4dFx0XHRDb250ZXh0IG9iamVjdCAoaWYgYSBwYXJlbnQgY29tcG9uZW50IGhhcyBwcm92aWRlZCBjb250ZXh0KVxuICAqXHRAcmV0dXJucyBWTm9kZVxuICAqL1xuXHRyZW5kZXI6IGZ1bmN0aW9uIHJlbmRlcigpIHt9XG59KTtcblxuLyoqIFJlbmRlciBKU1ggaW50byBhIGBwYXJlbnRgIEVsZW1lbnQuXG4gKlx0QHBhcmFtIHtWTm9kZX0gdm5vZGVcdFx0QSAoSlNYKSBWTm9kZSB0byByZW5kZXJcbiAqXHRAcGFyYW0ge0VsZW1lbnR9IHBhcmVudFx0XHRET00gZWxlbWVudCB0byByZW5kZXIgaW50b1xuICpcdEBwYXJhbSB7RWxlbWVudH0gW21lcmdlXVx0QXR0ZW1wdCB0byByZS11c2UgYW4gZXhpc3RpbmcgRE9NIHRyZWUgcm9vdGVkIGF0IGBtZXJnZWBcbiAqXHRAcHVibGljXG4gKlxuICpcdEBleGFtcGxlXG4gKlx0Ly8gcmVuZGVyIGEgZGl2IGludG8gPGJvZHk+OlxuICpcdHJlbmRlcig8ZGl2IGlkPVwiaGVsbG9cIj5oZWxsbyE8L2Rpdj4sIGRvY3VtZW50LmJvZHkpO1xuICpcbiAqXHRAZXhhbXBsZVxuICpcdC8vIHJlbmRlciBhIFwiVGhpbmdcIiBjb21wb25lbnQgaW50byAjZm9vOlxuICpcdGNvbnN0IFRoaW5nID0gKHsgbmFtZSB9KSA9PiA8c3Bhbj57IG5hbWUgfTwvc3Bhbj47XG4gKlx0cmVuZGVyKDxUaGluZyBuYW1lPVwib25lXCIgLz4sIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmb28nKSk7XG4gKi9cbmZ1bmN0aW9uIHJlbmRlcih2bm9kZSwgcGFyZW50LCBtZXJnZSkge1xuICByZXR1cm4gZGlmZihtZXJnZSwgdm5vZGUsIHt9LCBmYWxzZSwgcGFyZW50LCBmYWxzZSk7XG59XG5cbnZhciBwcmVhY3QgPSB7XG5cdGg6IGgsXG5cdGNyZWF0ZUVsZW1lbnQ6IGgsXG5cdGNsb25lRWxlbWVudDogY2xvbmVFbGVtZW50LFxuXHRDb21wb25lbnQ6IENvbXBvbmVudCxcblx0cmVuZGVyOiByZW5kZXIsXG5cdHJlcmVuZGVyOiByZXJlbmRlcixcblx0b3B0aW9uczogb3B0aW9uc1xufTtcblxuZXhwb3J0IGRlZmF1bHQgcHJlYWN0O1xuZXhwb3J0IHsgaCwgaCBhcyBjcmVhdGVFbGVtZW50LCBjbG9uZUVsZW1lbnQsIENvbXBvbmVudCwgcmVuZGVyLCByZXJlbmRlciwgb3B0aW9ucyB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cHJlYWN0LmVzbS5qcy5tYXBcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9wcmVhY3QvZGlzdC9wcmVhY3QuZXNtLmpzXG4vLyBtb2R1bGUgaWQgPSAuLi9ub2RlX21vZHVsZXMvcHJlYWN0L2Rpc3QvcHJlYWN0LmVzbS5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IG1haW4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNC1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbi8vIFRoaXMgbWV0aG9kIG9mIG9idGFpbmluZyBhIHJlZmVyZW5jZSB0byB0aGUgZ2xvYmFsIG9iamVjdCBuZWVkcyB0byBiZVxuLy8ga2VwdCBpZGVudGljYWwgdG8gdGhlIHdheSBpdCBpcyBvYnRhaW5lZCBpbiBydW50aW1lLmpzXG52YXIgZyA9IChmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHRoaXMgfHwgKHR5cGVvZiBzZWxmID09PSBcIm9iamVjdFwiICYmIHNlbGYpO1xufSkoKSB8fCBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCk7XG5cbi8vIFVzZSBgZ2V0T3duUHJvcGVydHlOYW1lc2AgYmVjYXVzZSBub3QgYWxsIGJyb3dzZXJzIHN1cHBvcnQgY2FsbGluZ1xuLy8gYGhhc093blByb3BlcnR5YCBvbiB0aGUgZ2xvYmFsIGBzZWxmYCBvYmplY3QgaW4gYSB3b3JrZXIuIFNlZSAjMTgzLlxudmFyIGhhZFJ1bnRpbWUgPSBnLnJlZ2VuZXJhdG9yUnVudGltZSAmJlxuICBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhnKS5pbmRleE9mKFwicmVnZW5lcmF0b3JSdW50aW1lXCIpID49IDA7XG5cbi8vIFNhdmUgdGhlIG9sZCByZWdlbmVyYXRvclJ1bnRpbWUgaW4gY2FzZSBpdCBuZWVkcyB0byBiZSByZXN0b3JlZCBsYXRlci5cbnZhciBvbGRSdW50aW1lID0gaGFkUnVudGltZSAmJiBnLnJlZ2VuZXJhdG9yUnVudGltZTtcblxuLy8gRm9yY2UgcmVldmFsdXRhdGlvbiBvZiBydW50aW1lLmpzLlxuZy5yZWdlbmVyYXRvclJ1bnRpbWUgPSB1bmRlZmluZWQ7XG5cbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vcnVudGltZVwiKTtcblxuaWYgKGhhZFJ1bnRpbWUpIHtcbiAgLy8gUmVzdG9yZSB0aGUgb3JpZ2luYWwgcnVudGltZS5cbiAgZy5yZWdlbmVyYXRvclJ1bnRpbWUgPSBvbGRSdW50aW1lO1xufSBlbHNlIHtcbiAgLy8gUmVtb3ZlIHRoZSBnbG9iYWwgcHJvcGVydHkgYWRkZWQgYnkgcnVudGltZS5qcy5cbiAgdHJ5IHtcbiAgICBkZWxldGUgZy5yZWdlbmVyYXRvclJ1bnRpbWU7XG4gIH0gY2F0Y2goZSkge1xuICAgIGcucmVnZW5lcmF0b3JSdW50aW1lID0gdW5kZWZpbmVkO1xuICB9XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvcmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lLW1vZHVsZS5qc1xuLy8gbW9kdWxlIGlkID0gLi4vbm9kZV9tb2R1bGVzL3JlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZS1tb2R1bGUuanNcbi8vIG1vZHVsZSBjaHVua3MgPSBtYWluIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4hKGZ1bmN0aW9uKGdsb2JhbCkge1xuICBcInVzZSBzdHJpY3RcIjtcblxuICB2YXIgT3AgPSBPYmplY3QucHJvdG90eXBlO1xuICB2YXIgaGFzT3duID0gT3AuaGFzT3duUHJvcGVydHk7XG4gIHZhciB1bmRlZmluZWQ7IC8vIE1vcmUgY29tcHJlc3NpYmxlIHRoYW4gdm9pZCAwLlxuICB2YXIgJFN5bWJvbCA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiA/IFN5bWJvbCA6IHt9O1xuICB2YXIgaXRlcmF0b3JTeW1ib2wgPSAkU3ltYm9sLml0ZXJhdG9yIHx8IFwiQEBpdGVyYXRvclwiO1xuICB2YXIgYXN5bmNJdGVyYXRvclN5bWJvbCA9ICRTeW1ib2wuYXN5bmNJdGVyYXRvciB8fCBcIkBAYXN5bmNJdGVyYXRvclwiO1xuICB2YXIgdG9TdHJpbmdUYWdTeW1ib2wgPSAkU3ltYm9sLnRvU3RyaW5nVGFnIHx8IFwiQEB0b1N0cmluZ1RhZ1wiO1xuXG4gIHZhciBpbk1vZHVsZSA9IHR5cGVvZiBtb2R1bGUgPT09IFwib2JqZWN0XCI7XG4gIHZhciBydW50aW1lID0gZ2xvYmFsLnJlZ2VuZXJhdG9yUnVudGltZTtcbiAgaWYgKHJ1bnRpbWUpIHtcbiAgICBpZiAoaW5Nb2R1bGUpIHtcbiAgICAgIC8vIElmIHJlZ2VuZXJhdG9yUnVudGltZSBpcyBkZWZpbmVkIGdsb2JhbGx5IGFuZCB3ZSdyZSBpbiBhIG1vZHVsZSxcbiAgICAgIC8vIG1ha2UgdGhlIGV4cG9ydHMgb2JqZWN0IGlkZW50aWNhbCB0byByZWdlbmVyYXRvclJ1bnRpbWUuXG4gICAgICBtb2R1bGUuZXhwb3J0cyA9IHJ1bnRpbWU7XG4gICAgfVxuICAgIC8vIERvbid0IGJvdGhlciBldmFsdWF0aW5nIHRoZSByZXN0IG9mIHRoaXMgZmlsZSBpZiB0aGUgcnVudGltZSB3YXNcbiAgICAvLyBhbHJlYWR5IGRlZmluZWQgZ2xvYmFsbHkuXG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLy8gRGVmaW5lIHRoZSBydW50aW1lIGdsb2JhbGx5IChhcyBleHBlY3RlZCBieSBnZW5lcmF0ZWQgY29kZSkgYXMgZWl0aGVyXG4gIC8vIG1vZHVsZS5leHBvcnRzIChpZiB3ZSdyZSBpbiBhIG1vZHVsZSkgb3IgYSBuZXcsIGVtcHR5IG9iamVjdC5cbiAgcnVudGltZSA9IGdsb2JhbC5yZWdlbmVyYXRvclJ1bnRpbWUgPSBpbk1vZHVsZSA/IG1vZHVsZS5leHBvcnRzIDoge307XG5cbiAgZnVuY3Rpb24gd3JhcChpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCkge1xuICAgIC8vIElmIG91dGVyRm4gcHJvdmlkZWQgYW5kIG91dGVyRm4ucHJvdG90eXBlIGlzIGEgR2VuZXJhdG9yLCB0aGVuIG91dGVyRm4ucHJvdG90eXBlIGluc3RhbmNlb2YgR2VuZXJhdG9yLlxuICAgIHZhciBwcm90b0dlbmVyYXRvciA9IG91dGVyRm4gJiYgb3V0ZXJGbi5wcm90b3R5cGUgaW5zdGFuY2VvZiBHZW5lcmF0b3IgPyBvdXRlckZuIDogR2VuZXJhdG9yO1xuICAgIHZhciBnZW5lcmF0b3IgPSBPYmplY3QuY3JlYXRlKHByb3RvR2VuZXJhdG9yLnByb3RvdHlwZSk7XG4gICAgdmFyIGNvbnRleHQgPSBuZXcgQ29udGV4dCh0cnlMb2NzTGlzdCB8fCBbXSk7XG5cbiAgICAvLyBUaGUgLl9pbnZva2UgbWV0aG9kIHVuaWZpZXMgdGhlIGltcGxlbWVudGF0aW9ucyBvZiB0aGUgLm5leHQsXG4gICAgLy8gLnRocm93LCBhbmQgLnJldHVybiBtZXRob2RzLlxuICAgIGdlbmVyYXRvci5faW52b2tlID0gbWFrZUludm9rZU1ldGhvZChpbm5lckZuLCBzZWxmLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBnZW5lcmF0b3I7XG4gIH1cbiAgcnVudGltZS53cmFwID0gd3JhcDtcblxuICAvLyBUcnkvY2F0Y2ggaGVscGVyIHRvIG1pbmltaXplIGRlb3B0aW1pemF0aW9ucy4gUmV0dXJucyBhIGNvbXBsZXRpb25cbiAgLy8gcmVjb3JkIGxpa2UgY29udGV4dC50cnlFbnRyaWVzW2ldLmNvbXBsZXRpb24uIFRoaXMgaW50ZXJmYWNlIGNvdWxkXG4gIC8vIGhhdmUgYmVlbiAoYW5kIHdhcyBwcmV2aW91c2x5KSBkZXNpZ25lZCB0byB0YWtlIGEgY2xvc3VyZSB0byBiZVxuICAvLyBpbnZva2VkIHdpdGhvdXQgYXJndW1lbnRzLCBidXQgaW4gYWxsIHRoZSBjYXNlcyB3ZSBjYXJlIGFib3V0IHdlXG4gIC8vIGFscmVhZHkgaGF2ZSBhbiBleGlzdGluZyBtZXRob2Qgd2Ugd2FudCB0byBjYWxsLCBzbyB0aGVyZSdzIG5vIG5lZWRcbiAgLy8gdG8gY3JlYXRlIGEgbmV3IGZ1bmN0aW9uIG9iamVjdC4gV2UgY2FuIGV2ZW4gZ2V0IGF3YXkgd2l0aCBhc3N1bWluZ1xuICAvLyB0aGUgbWV0aG9kIHRha2VzIGV4YWN0bHkgb25lIGFyZ3VtZW50LCBzaW5jZSB0aGF0IGhhcHBlbnMgdG8gYmUgdHJ1ZVxuICAvLyBpbiBldmVyeSBjYXNlLCBzbyB3ZSBkb24ndCBoYXZlIHRvIHRvdWNoIHRoZSBhcmd1bWVudHMgb2JqZWN0LiBUaGVcbiAgLy8gb25seSBhZGRpdGlvbmFsIGFsbG9jYXRpb24gcmVxdWlyZWQgaXMgdGhlIGNvbXBsZXRpb24gcmVjb3JkLCB3aGljaFxuICAvLyBoYXMgYSBzdGFibGUgc2hhcGUgYW5kIHNvIGhvcGVmdWxseSBzaG91bGQgYmUgY2hlYXAgdG8gYWxsb2NhdGUuXG4gIGZ1bmN0aW9uIHRyeUNhdGNoKGZuLCBvYmosIGFyZykge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4geyB0eXBlOiBcIm5vcm1hbFwiLCBhcmc6IGZuLmNhbGwob2JqLCBhcmcpIH07XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXR1cm4geyB0eXBlOiBcInRocm93XCIsIGFyZzogZXJyIH07XG4gICAgfVxuICB9XG5cbiAgdmFyIEdlblN0YXRlU3VzcGVuZGVkU3RhcnQgPSBcInN1c3BlbmRlZFN0YXJ0XCI7XG4gIHZhciBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkID0gXCJzdXNwZW5kZWRZaWVsZFwiO1xuICB2YXIgR2VuU3RhdGVFeGVjdXRpbmcgPSBcImV4ZWN1dGluZ1wiO1xuICB2YXIgR2VuU3RhdGVDb21wbGV0ZWQgPSBcImNvbXBsZXRlZFwiO1xuXG4gIC8vIFJldHVybmluZyB0aGlzIG9iamVjdCBmcm9tIHRoZSBpbm5lckZuIGhhcyB0aGUgc2FtZSBlZmZlY3QgYXNcbiAgLy8gYnJlYWtpbmcgb3V0IG9mIHRoZSBkaXNwYXRjaCBzd2l0Y2ggc3RhdGVtZW50LlxuICB2YXIgQ29udGludWVTZW50aW5lbCA9IHt9O1xuXG4gIC8vIER1bW15IGNvbnN0cnVjdG9yIGZ1bmN0aW9ucyB0aGF0IHdlIHVzZSBhcyB0aGUgLmNvbnN0cnVjdG9yIGFuZFxuICAvLyAuY29uc3RydWN0b3IucHJvdG90eXBlIHByb3BlcnRpZXMgZm9yIGZ1bmN0aW9ucyB0aGF0IHJldHVybiBHZW5lcmF0b3JcbiAgLy8gb2JqZWN0cy4gRm9yIGZ1bGwgc3BlYyBjb21wbGlhbmNlLCB5b3UgbWF5IHdpc2ggdG8gY29uZmlndXJlIHlvdXJcbiAgLy8gbWluaWZpZXIgbm90IHRvIG1hbmdsZSB0aGUgbmFtZXMgb2YgdGhlc2UgdHdvIGZ1bmN0aW9ucy5cbiAgZnVuY3Rpb24gR2VuZXJhdG9yKCkge31cbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb24oKSB7fVxuICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSgpIHt9XG5cbiAgLy8gVGhpcyBpcyBhIHBvbHlmaWxsIGZvciAlSXRlcmF0b3JQcm90b3R5cGUlIGZvciBlbnZpcm9ubWVudHMgdGhhdFxuICAvLyBkb24ndCBuYXRpdmVseSBzdXBwb3J0IGl0LlxuICB2YXIgSXRlcmF0b3JQcm90b3R5cGUgPSB7fTtcbiAgSXRlcmF0b3JQcm90b3R5cGVbaXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIHZhciBnZXRQcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZjtcbiAgdmFyIE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlID0gZ2V0UHJvdG8gJiYgZ2V0UHJvdG8oZ2V0UHJvdG8odmFsdWVzKFtdKSkpO1xuICBpZiAoTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgJiZcbiAgICAgIE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlICE9PSBPcCAmJlxuICAgICAgaGFzT3duLmNhbGwoTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUsIGl0ZXJhdG9yU3ltYm9sKSkge1xuICAgIC8vIFRoaXMgZW52aXJvbm1lbnQgaGFzIGEgbmF0aXZlICVJdGVyYXRvclByb3RvdHlwZSU7IHVzZSBpdCBpbnN0ZWFkXG4gICAgLy8gb2YgdGhlIHBvbHlmaWxsLlxuICAgIEl0ZXJhdG9yUHJvdG90eXBlID0gTmF0aXZlSXRlcmF0b3JQcm90b3R5cGU7XG4gIH1cblxuICB2YXIgR3AgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZS5wcm90b3R5cGUgPVxuICAgIEdlbmVyYXRvci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEl0ZXJhdG9yUHJvdG90eXBlKTtcbiAgR2VuZXJhdG9yRnVuY3Rpb24ucHJvdG90eXBlID0gR3AuY29uc3RydWN0b3IgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZTtcbiAgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUuY29uc3RydWN0b3IgPSBHZW5lcmF0b3JGdW5jdGlvbjtcbiAgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGVbdG9TdHJpbmdUYWdTeW1ib2xdID1cbiAgICBHZW5lcmF0b3JGdW5jdGlvbi5kaXNwbGF5TmFtZSA9IFwiR2VuZXJhdG9yRnVuY3Rpb25cIjtcblxuICAvLyBIZWxwZXIgZm9yIGRlZmluaW5nIHRoZSAubmV4dCwgLnRocm93LCBhbmQgLnJldHVybiBtZXRob2RzIG9mIHRoZVxuICAvLyBJdGVyYXRvciBpbnRlcmZhY2UgaW4gdGVybXMgb2YgYSBzaW5nbGUgLl9pbnZva2UgbWV0aG9kLlxuICBmdW5jdGlvbiBkZWZpbmVJdGVyYXRvck1ldGhvZHMocHJvdG90eXBlKSB7XG4gICAgW1wibmV4dFwiLCBcInRocm93XCIsIFwicmV0dXJuXCJdLmZvckVhY2goZnVuY3Rpb24obWV0aG9kKSB7XG4gICAgICBwcm90b3R5cGVbbWV0aG9kXSA9IGZ1bmN0aW9uKGFyZykge1xuICAgICAgICByZXR1cm4gdGhpcy5faW52b2tlKG1ldGhvZCwgYXJnKTtcbiAgICAgIH07XG4gICAgfSk7XG4gIH1cblxuICBydW50aW1lLmlzR2VuZXJhdG9yRnVuY3Rpb24gPSBmdW5jdGlvbihnZW5GdW4pIHtcbiAgICB2YXIgY3RvciA9IHR5cGVvZiBnZW5GdW4gPT09IFwiZnVuY3Rpb25cIiAmJiBnZW5GdW4uY29uc3RydWN0b3I7XG4gICAgcmV0dXJuIGN0b3JcbiAgICAgID8gY3RvciA9PT0gR2VuZXJhdG9yRnVuY3Rpb24gfHxcbiAgICAgICAgLy8gRm9yIHRoZSBuYXRpdmUgR2VuZXJhdG9yRnVuY3Rpb24gY29uc3RydWN0b3IsIHRoZSBiZXN0IHdlIGNhblxuICAgICAgICAvLyBkbyBpcyB0byBjaGVjayBpdHMgLm5hbWUgcHJvcGVydHkuXG4gICAgICAgIChjdG9yLmRpc3BsYXlOYW1lIHx8IGN0b3IubmFtZSkgPT09IFwiR2VuZXJhdG9yRnVuY3Rpb25cIlxuICAgICAgOiBmYWxzZTtcbiAgfTtcblxuICBydW50aW1lLm1hcmsgPSBmdW5jdGlvbihnZW5GdW4pIHtcbiAgICBpZiAoT2JqZWN0LnNldFByb3RvdHlwZU9mKSB7XG4gICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YoZ2VuRnVuLCBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGdlbkZ1bi5fX3Byb3RvX18gPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZTtcbiAgICAgIGlmICghKHRvU3RyaW5nVGFnU3ltYm9sIGluIGdlbkZ1bikpIHtcbiAgICAgICAgZ2VuRnVuW3RvU3RyaW5nVGFnU3ltYm9sXSA9IFwiR2VuZXJhdG9yRnVuY3Rpb25cIjtcbiAgICAgIH1cbiAgICB9XG4gICAgZ2VuRnVuLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoR3ApO1xuICAgIHJldHVybiBnZW5GdW47XG4gIH07XG5cbiAgLy8gV2l0aGluIHRoZSBib2R5IG9mIGFueSBhc3luYyBmdW5jdGlvbiwgYGF3YWl0IHhgIGlzIHRyYW5zZm9ybWVkIHRvXG4gIC8vIGB5aWVsZCByZWdlbmVyYXRvclJ1bnRpbWUuYXdyYXAoeClgLCBzbyB0aGF0IHRoZSBydW50aW1lIGNhbiB0ZXN0XG4gIC8vIGBoYXNPd24uY2FsbCh2YWx1ZSwgXCJfX2F3YWl0XCIpYCB0byBkZXRlcm1pbmUgaWYgdGhlIHlpZWxkZWQgdmFsdWUgaXNcbiAgLy8gbWVhbnQgdG8gYmUgYXdhaXRlZC5cbiAgcnVudGltZS5hd3JhcCA9IGZ1bmN0aW9uKGFyZykge1xuICAgIHJldHVybiB7IF9fYXdhaXQ6IGFyZyB9O1xuICB9O1xuXG4gIGZ1bmN0aW9uIEFzeW5jSXRlcmF0b3IoZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnLCByZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChnZW5lcmF0b3JbbWV0aG9kXSwgZ2VuZXJhdG9yLCBhcmcpO1xuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgcmVqZWN0KHJlY29yZC5hcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlY29yZC5hcmc7XG4gICAgICAgIHZhciB2YWx1ZSA9IHJlc3VsdC52YWx1ZTtcbiAgICAgICAgaWYgKHZhbHVlICYmXG4gICAgICAgICAgICB0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCIgJiZcbiAgICAgICAgICAgIGhhc093bi5jYWxsKHZhbHVlLCBcIl9fYXdhaXRcIikpIHtcbiAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHZhbHVlLl9fYXdhaXQpLnRoZW4oZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICAgIGludm9rZShcIm5leHRcIiwgdmFsdWUsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSwgZnVuY3Rpb24oZXJyKSB7XG4gICAgICAgICAgICBpbnZva2UoXCJ0aHJvd1wiLCBlcnIsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHZhbHVlKS50aGVuKGZ1bmN0aW9uKHVud3JhcHBlZCkge1xuICAgICAgICAgIC8vIFdoZW4gYSB5aWVsZGVkIFByb21pc2UgaXMgcmVzb2x2ZWQsIGl0cyBmaW5hbCB2YWx1ZSBiZWNvbWVzXG4gICAgICAgICAgLy8gdGhlIC52YWx1ZSBvZiB0aGUgUHJvbWlzZTx7dmFsdWUsZG9uZX0+IHJlc3VsdCBmb3IgdGhlXG4gICAgICAgICAgLy8gY3VycmVudCBpdGVyYXRpb24uXG4gICAgICAgICAgcmVzdWx0LnZhbHVlID0gdW53cmFwcGVkO1xuICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgfSwgZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgICAgICAvLyBJZiBhIHJlamVjdGVkIFByb21pc2Ugd2FzIHlpZWxkZWQsIHRocm93IHRoZSByZWplY3Rpb24gYmFja1xuICAgICAgICAgIC8vIGludG8gdGhlIGFzeW5jIGdlbmVyYXRvciBmdW5jdGlvbiBzbyBpdCBjYW4gYmUgaGFuZGxlZCB0aGVyZS5cbiAgICAgICAgICByZXR1cm4gaW52b2tlKFwidGhyb3dcIiwgZXJyb3IsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBwcmV2aW91c1Byb21pc2U7XG5cbiAgICBmdW5jdGlvbiBlbnF1ZXVlKG1ldGhvZCwgYXJnKSB7XG4gICAgICBmdW5jdGlvbiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBwcmV2aW91c1Byb21pc2UgPVxuICAgICAgICAvLyBJZiBlbnF1ZXVlIGhhcyBiZWVuIGNhbGxlZCBiZWZvcmUsIHRoZW4gd2Ugd2FudCB0byB3YWl0IHVudGlsXG4gICAgICAgIC8vIGFsbCBwcmV2aW91cyBQcm9taXNlcyBoYXZlIGJlZW4gcmVzb2x2ZWQgYmVmb3JlIGNhbGxpbmcgaW52b2tlLFxuICAgICAgICAvLyBzbyB0aGF0IHJlc3VsdHMgYXJlIGFsd2F5cyBkZWxpdmVyZWQgaW4gdGhlIGNvcnJlY3Qgb3JkZXIuIElmXG4gICAgICAgIC8vIGVucXVldWUgaGFzIG5vdCBiZWVuIGNhbGxlZCBiZWZvcmUsIHRoZW4gaXQgaXMgaW1wb3J0YW50IHRvXG4gICAgICAgIC8vIGNhbGwgaW52b2tlIGltbWVkaWF0ZWx5LCB3aXRob3V0IHdhaXRpbmcgb24gYSBjYWxsYmFjayB0byBmaXJlLFxuICAgICAgICAvLyBzbyB0aGF0IHRoZSBhc3luYyBnZW5lcmF0b3IgZnVuY3Rpb24gaGFzIHRoZSBvcHBvcnR1bml0eSB0byBkb1xuICAgICAgICAvLyBhbnkgbmVjZXNzYXJ5IHNldHVwIGluIGEgcHJlZGljdGFibGUgd2F5LiBUaGlzIHByZWRpY3RhYmlsaXR5XG4gICAgICAgIC8vIGlzIHdoeSB0aGUgUHJvbWlzZSBjb25zdHJ1Y3RvciBzeW5jaHJvbm91c2x5IGludm9rZXMgaXRzXG4gICAgICAgIC8vIGV4ZWN1dG9yIGNhbGxiYWNrLCBhbmQgd2h5IGFzeW5jIGZ1bmN0aW9ucyBzeW5jaHJvbm91c2x5XG4gICAgICAgIC8vIGV4ZWN1dGUgY29kZSBiZWZvcmUgdGhlIGZpcnN0IGF3YWl0LiBTaW5jZSB3ZSBpbXBsZW1lbnQgc2ltcGxlXG4gICAgICAgIC8vIGFzeW5jIGZ1bmN0aW9ucyBpbiB0ZXJtcyBvZiBhc3luYyBnZW5lcmF0b3JzLCBpdCBpcyBlc3BlY2lhbGx5XG4gICAgICAgIC8vIGltcG9ydGFudCB0byBnZXQgdGhpcyByaWdodCwgZXZlbiB0aG91Z2ggaXQgcmVxdWlyZXMgY2FyZS5cbiAgICAgICAgcHJldmlvdXNQcm9taXNlID8gcHJldmlvdXNQcm9taXNlLnRoZW4oXG4gICAgICAgICAgY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcsXG4gICAgICAgICAgLy8gQXZvaWQgcHJvcGFnYXRpbmcgZmFpbHVyZXMgdG8gUHJvbWlzZXMgcmV0dXJuZWQgYnkgbGF0ZXJcbiAgICAgICAgICAvLyBpbnZvY2F0aW9ucyBvZiB0aGUgaXRlcmF0b3IuXG4gICAgICAgICAgY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmdcbiAgICAgICAgKSA6IGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCk7XG4gICAgfVxuXG4gICAgLy8gRGVmaW5lIHRoZSB1bmlmaWVkIGhlbHBlciBtZXRob2QgdGhhdCBpcyB1c2VkIHRvIGltcGxlbWVudCAubmV4dCxcbiAgICAvLyAudGhyb3csIGFuZCAucmV0dXJuIChzZWUgZGVmaW5lSXRlcmF0b3JNZXRob2RzKS5cbiAgICB0aGlzLl9pbnZva2UgPSBlbnF1ZXVlO1xuICB9XG5cbiAgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEFzeW5jSXRlcmF0b3IucHJvdG90eXBlKTtcbiAgQXN5bmNJdGVyYXRvci5wcm90b3R5cGVbYXN5bmNJdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG4gIHJ1bnRpbWUuQXN5bmNJdGVyYXRvciA9IEFzeW5jSXRlcmF0b3I7XG5cbiAgLy8gTm90ZSB0aGF0IHNpbXBsZSBhc3luYyBmdW5jdGlvbnMgYXJlIGltcGxlbWVudGVkIG9uIHRvcCBvZlxuICAvLyBBc3luY0l0ZXJhdG9yIG9iamVjdHM7IHRoZXkganVzdCByZXR1cm4gYSBQcm9taXNlIGZvciB0aGUgdmFsdWUgb2ZcbiAgLy8gdGhlIGZpbmFsIHJlc3VsdCBwcm9kdWNlZCBieSB0aGUgaXRlcmF0b3IuXG4gIHJ1bnRpbWUuYXN5bmMgPSBmdW5jdGlvbihpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCkge1xuICAgIHZhciBpdGVyID0gbmV3IEFzeW5jSXRlcmF0b3IoXG4gICAgICB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KVxuICAgICk7XG5cbiAgICByZXR1cm4gcnVudGltZS5pc0dlbmVyYXRvckZ1bmN0aW9uKG91dGVyRm4pXG4gICAgICA/IGl0ZXIgLy8gSWYgb3V0ZXJGbiBpcyBhIGdlbmVyYXRvciwgcmV0dXJuIHRoZSBmdWxsIGl0ZXJhdG9yLlxuICAgICAgOiBpdGVyLm5leHQoKS50aGVuKGZ1bmN0aW9uKHJlc3VsdCkge1xuICAgICAgICAgIHJldHVybiByZXN1bHQuZG9uZSA/IHJlc3VsdC52YWx1ZSA6IGl0ZXIubmV4dCgpO1xuICAgICAgICB9KTtcbiAgfTtcblxuICBmdW5jdGlvbiBtYWtlSW52b2tlTWV0aG9kKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpIHtcbiAgICB2YXIgc3RhdGUgPSBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0O1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIGludm9rZShtZXRob2QsIGFyZykge1xuICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZUV4ZWN1dGluZykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBydW5uaW5nXCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlQ29tcGxldGVkKSB7XG4gICAgICAgIGlmIChtZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIHRocm93IGFyZztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEJlIGZvcmdpdmluZywgcGVyIDI1LjMuMy4zLjMgb2YgdGhlIHNwZWM6XG4gICAgICAgIC8vIGh0dHBzOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy1nZW5lcmF0b3JyZXN1bWVcbiAgICAgICAgcmV0dXJuIGRvbmVSZXN1bHQoKTtcbiAgICAgIH1cblxuICAgICAgY29udGV4dC5tZXRob2QgPSBtZXRob2Q7XG4gICAgICBjb250ZXh0LmFyZyA9IGFyZztcblxuICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgdmFyIGRlbGVnYXRlID0gY29udGV4dC5kZWxlZ2F0ZTtcbiAgICAgICAgaWYgKGRlbGVnYXRlKSB7XG4gICAgICAgICAgdmFyIGRlbGVnYXRlUmVzdWx0ID0gbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCk7XG4gICAgICAgICAgaWYgKGRlbGVnYXRlUmVzdWx0KSB7XG4gICAgICAgICAgICBpZiAoZGVsZWdhdGVSZXN1bHQgPT09IENvbnRpbnVlU2VudGluZWwpIGNvbnRpbnVlO1xuICAgICAgICAgICAgcmV0dXJuIGRlbGVnYXRlUmVzdWx0O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJuZXh0XCIpIHtcbiAgICAgICAgICAvLyBTZXR0aW5nIGNvbnRleHQuX3NlbnQgZm9yIGxlZ2FjeSBzdXBwb3J0IG9mIEJhYmVsJ3NcbiAgICAgICAgICAvLyBmdW5jdGlvbi5zZW50IGltcGxlbWVudGF0aW9uLlxuICAgICAgICAgIGNvbnRleHQuc2VudCA9IGNvbnRleHQuX3NlbnQgPSBjb250ZXh0LmFyZztcblxuICAgICAgICB9IGVsc2UgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlU3VzcGVuZGVkU3RhcnQpIHtcbiAgICAgICAgICAgIHN0YXRlID0gR2VuU3RhdGVDb21wbGV0ZWQ7XG4gICAgICAgICAgICB0aHJvdyBjb250ZXh0LmFyZztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb250ZXh0LmRpc3BhdGNoRXhjZXB0aW9uKGNvbnRleHQuYXJnKTtcblxuICAgICAgICB9IGVsc2UgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInJldHVyblwiKSB7XG4gICAgICAgICAgY29udGV4dC5hYnJ1cHQoXCJyZXR1cm5cIiwgY29udGV4dC5hcmcpO1xuICAgICAgICB9XG5cbiAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUV4ZWN1dGluZztcblxuICAgICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goaW5uZXJGbiwgc2VsZiwgY29udGV4dCk7XG4gICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJub3JtYWxcIikge1xuICAgICAgICAgIC8vIElmIGFuIGV4Y2VwdGlvbiBpcyB0aHJvd24gZnJvbSBpbm5lckZuLCB3ZSBsZWF2ZSBzdGF0ZSA9PT1cbiAgICAgICAgICAvLyBHZW5TdGF0ZUV4ZWN1dGluZyBhbmQgbG9vcCBiYWNrIGZvciBhbm90aGVyIGludm9jYXRpb24uXG4gICAgICAgICAgc3RhdGUgPSBjb250ZXh0LmRvbmVcbiAgICAgICAgICAgID8gR2VuU3RhdGVDb21wbGV0ZWRcbiAgICAgICAgICAgIDogR2VuU3RhdGVTdXNwZW5kZWRZaWVsZDtcblxuICAgICAgICAgIGlmIChyZWNvcmQuYXJnID09PSBDb250aW51ZVNlbnRpbmVsKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdmFsdWU6IHJlY29yZC5hcmcsXG4gICAgICAgICAgICBkb25lOiBjb250ZXh0LmRvbmVcbiAgICAgICAgICB9O1xuXG4gICAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIHN0YXRlID0gR2VuU3RhdGVDb21wbGV0ZWQ7XG4gICAgICAgICAgLy8gRGlzcGF0Y2ggdGhlIGV4Y2VwdGlvbiBieSBsb29waW5nIGJhY2sgYXJvdW5kIHRvIHRoZVxuICAgICAgICAgIC8vIGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oY29udGV4dC5hcmcpIGNhbGwgYWJvdmUuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIC8vIENhbGwgZGVsZWdhdGUuaXRlcmF0b3JbY29udGV4dC5tZXRob2RdKGNvbnRleHQuYXJnKSBhbmQgaGFuZGxlIHRoZVxuICAvLyByZXN1bHQsIGVpdGhlciBieSByZXR1cm5pbmcgYSB7IHZhbHVlLCBkb25lIH0gcmVzdWx0IGZyb20gdGhlXG4gIC8vIGRlbGVnYXRlIGl0ZXJhdG9yLCBvciBieSBtb2RpZnlpbmcgY29udGV4dC5tZXRob2QgYW5kIGNvbnRleHQuYXJnLFxuICAvLyBzZXR0aW5nIGNvbnRleHQuZGVsZWdhdGUgdG8gbnVsbCwgYW5kIHJldHVybmluZyB0aGUgQ29udGludWVTZW50aW5lbC5cbiAgZnVuY3Rpb24gbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCkge1xuICAgIHZhciBtZXRob2QgPSBkZWxlZ2F0ZS5pdGVyYXRvcltjb250ZXh0Lm1ldGhvZF07XG4gICAgaWYgKG1ldGhvZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAvLyBBIC50aHJvdyBvciAucmV0dXJuIHdoZW4gdGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGhhcyBubyAudGhyb3dcbiAgICAgIC8vIG1ldGhvZCBhbHdheXMgdGVybWluYXRlcyB0aGUgeWllbGQqIGxvb3AuXG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcblxuICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgaWYgKGRlbGVnYXRlLml0ZXJhdG9yLnJldHVybikge1xuICAgICAgICAgIC8vIElmIHRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBoYXMgYSByZXR1cm4gbWV0aG9kLCBnaXZlIGl0IGFcbiAgICAgICAgICAvLyBjaGFuY2UgdG8gY2xlYW4gdXAuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInJldHVyblwiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgICAgIG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICAgIC8vIElmIG1heWJlSW52b2tlRGVsZWdhdGUoY29udGV4dCkgY2hhbmdlZCBjb250ZXh0Lm1ldGhvZCBmcm9tXG4gICAgICAgICAgICAvLyBcInJldHVyblwiIHRvIFwidGhyb3dcIiwgbGV0IHRoYXQgb3ZlcnJpZGUgdGhlIFR5cGVFcnJvciBiZWxvdy5cbiAgICAgICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgICBjb250ZXh0LmFyZyA9IG5ldyBUeXBlRXJyb3IoXG4gICAgICAgICAgXCJUaGUgaXRlcmF0b3IgZG9lcyBub3QgcHJvdmlkZSBhICd0aHJvdycgbWV0aG9kXCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2gobWV0aG9kLCBkZWxlZ2F0ZS5pdGVyYXRvciwgY29udGV4dC5hcmcpO1xuXG4gICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgY29udGV4dC5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICB2YXIgaW5mbyA9IHJlY29yZC5hcmc7XG5cbiAgICBpZiAoISBpbmZvKSB7XG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgIGNvbnRleHQuYXJnID0gbmV3IFR5cGVFcnJvcihcIml0ZXJhdG9yIHJlc3VsdCBpcyBub3QgYW4gb2JqZWN0XCIpO1xuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICBpZiAoaW5mby5kb25lKSB7XG4gICAgICAvLyBBc3NpZ24gdGhlIHJlc3VsdCBvZiB0aGUgZmluaXNoZWQgZGVsZWdhdGUgdG8gdGhlIHRlbXBvcmFyeVxuICAgICAgLy8gdmFyaWFibGUgc3BlY2lmaWVkIGJ5IGRlbGVnYXRlLnJlc3VsdE5hbWUgKHNlZSBkZWxlZ2F0ZVlpZWxkKS5cbiAgICAgIGNvbnRleHRbZGVsZWdhdGUucmVzdWx0TmFtZV0gPSBpbmZvLnZhbHVlO1xuXG4gICAgICAvLyBSZXN1bWUgZXhlY3V0aW9uIGF0IHRoZSBkZXNpcmVkIGxvY2F0aW9uIChzZWUgZGVsZWdhdGVZaWVsZCkuXG4gICAgICBjb250ZXh0Lm5leHQgPSBkZWxlZ2F0ZS5uZXh0TG9jO1xuXG4gICAgICAvLyBJZiBjb250ZXh0Lm1ldGhvZCB3YXMgXCJ0aHJvd1wiIGJ1dCB0aGUgZGVsZWdhdGUgaGFuZGxlZCB0aGVcbiAgICAgIC8vIGV4Y2VwdGlvbiwgbGV0IHRoZSBvdXRlciBnZW5lcmF0b3IgcHJvY2VlZCBub3JtYWxseS4gSWZcbiAgICAgIC8vIGNvbnRleHQubWV0aG9kIHdhcyBcIm5leHRcIiwgZm9yZ2V0IGNvbnRleHQuYXJnIHNpbmNlIGl0IGhhcyBiZWVuXG4gICAgICAvLyBcImNvbnN1bWVkXCIgYnkgdGhlIGRlbGVnYXRlIGl0ZXJhdG9yLiBJZiBjb250ZXh0Lm1ldGhvZCB3YXNcbiAgICAgIC8vIFwicmV0dXJuXCIsIGFsbG93IHRoZSBvcmlnaW5hbCAucmV0dXJuIGNhbGwgdG8gY29udGludWUgaW4gdGhlXG4gICAgICAvLyBvdXRlciBnZW5lcmF0b3IuXG4gICAgICBpZiAoY29udGV4dC5tZXRob2QgIT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgY29udGV4dC5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gUmUteWllbGQgdGhlIHJlc3VsdCByZXR1cm5lZCBieSB0aGUgZGVsZWdhdGUgbWV0aG9kLlxuICAgICAgcmV0dXJuIGluZm87XG4gICAgfVxuXG4gICAgLy8gVGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGlzIGZpbmlzaGVkLCBzbyBmb3JnZXQgaXQgYW5kIGNvbnRpbnVlIHdpdGhcbiAgICAvLyB0aGUgb3V0ZXIgZ2VuZXJhdG9yLlxuICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICB9XG5cbiAgLy8gRGVmaW5lIEdlbmVyYXRvci5wcm90b3R5cGUue25leHQsdGhyb3cscmV0dXJufSBpbiB0ZXJtcyBvZiB0aGVcbiAgLy8gdW5pZmllZCAuX2ludm9rZSBoZWxwZXIgbWV0aG9kLlxuICBkZWZpbmVJdGVyYXRvck1ldGhvZHMoR3ApO1xuXG4gIEdwW3RvU3RyaW5nVGFnU3ltYm9sXSA9IFwiR2VuZXJhdG9yXCI7XG5cbiAgLy8gQSBHZW5lcmF0b3Igc2hvdWxkIGFsd2F5cyByZXR1cm4gaXRzZWxmIGFzIHRoZSBpdGVyYXRvciBvYmplY3Qgd2hlbiB0aGVcbiAgLy8gQEBpdGVyYXRvciBmdW5jdGlvbiBpcyBjYWxsZWQgb24gaXQuIFNvbWUgYnJvd3NlcnMnIGltcGxlbWVudGF0aW9ucyBvZiB0aGVcbiAgLy8gaXRlcmF0b3IgcHJvdG90eXBlIGNoYWluIGluY29ycmVjdGx5IGltcGxlbWVudCB0aGlzLCBjYXVzaW5nIHRoZSBHZW5lcmF0b3JcbiAgLy8gb2JqZWN0IHRvIG5vdCBiZSByZXR1cm5lZCBmcm9tIHRoaXMgY2FsbC4gVGhpcyBlbnN1cmVzIHRoYXQgZG9lc24ndCBoYXBwZW4uXG4gIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVnZW5lcmF0b3IvaXNzdWVzLzI3NCBmb3IgbW9yZSBkZXRhaWxzLlxuICBHcFtpdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBHcC50b1N0cmluZyA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBcIltvYmplY3QgR2VuZXJhdG9yXVwiO1xuICB9O1xuXG4gIGZ1bmN0aW9uIHB1c2hUcnlFbnRyeShsb2NzKSB7XG4gICAgdmFyIGVudHJ5ID0geyB0cnlMb2M6IGxvY3NbMF0gfTtcblxuICAgIGlmICgxIGluIGxvY3MpIHtcbiAgICAgIGVudHJ5LmNhdGNoTG9jID0gbG9jc1sxXTtcbiAgICB9XG5cbiAgICBpZiAoMiBpbiBsb2NzKSB7XG4gICAgICBlbnRyeS5maW5hbGx5TG9jID0gbG9jc1syXTtcbiAgICAgIGVudHJ5LmFmdGVyTG9jID0gbG9jc1szXTtcbiAgICB9XG5cbiAgICB0aGlzLnRyeUVudHJpZXMucHVzaChlbnRyeSk7XG4gIH1cblxuICBmdW5jdGlvbiByZXNldFRyeUVudHJ5KGVudHJ5KSB7XG4gICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb24gfHwge307XG4gICAgcmVjb3JkLnR5cGUgPSBcIm5vcm1hbFwiO1xuICAgIGRlbGV0ZSByZWNvcmQuYXJnO1xuICAgIGVudHJ5LmNvbXBsZXRpb24gPSByZWNvcmQ7XG4gIH1cblxuICBmdW5jdGlvbiBDb250ZXh0KHRyeUxvY3NMaXN0KSB7XG4gICAgLy8gVGhlIHJvb3QgZW50cnkgb2JqZWN0IChlZmZlY3RpdmVseSBhIHRyeSBzdGF0ZW1lbnQgd2l0aG91dCBhIGNhdGNoXG4gICAgLy8gb3IgYSBmaW5hbGx5IGJsb2NrKSBnaXZlcyB1cyBhIHBsYWNlIHRvIHN0b3JlIHZhbHVlcyB0aHJvd24gZnJvbVxuICAgIC8vIGxvY2F0aW9ucyB3aGVyZSB0aGVyZSBpcyBubyBlbmNsb3NpbmcgdHJ5IHN0YXRlbWVudC5cbiAgICB0aGlzLnRyeUVudHJpZXMgPSBbeyB0cnlMb2M6IFwicm9vdFwiIH1dO1xuICAgIHRyeUxvY3NMaXN0LmZvckVhY2gocHVzaFRyeUVudHJ5LCB0aGlzKTtcbiAgICB0aGlzLnJlc2V0KHRydWUpO1xuICB9XG5cbiAgcnVudGltZS5rZXlzID0gZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgdmFyIGtleXMgPSBbXTtcbiAgICBmb3IgKHZhciBrZXkgaW4gb2JqZWN0KSB7XG4gICAgICBrZXlzLnB1c2goa2V5KTtcbiAgICB9XG4gICAga2V5cy5yZXZlcnNlKCk7XG5cbiAgICAvLyBSYXRoZXIgdGhhbiByZXR1cm5pbmcgYW4gb2JqZWN0IHdpdGggYSBuZXh0IG1ldGhvZCwgd2Uga2VlcFxuICAgIC8vIHRoaW5ncyBzaW1wbGUgYW5kIHJldHVybiB0aGUgbmV4dCBmdW5jdGlvbiBpdHNlbGYuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICB3aGlsZSAoa2V5cy5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGtleSA9IGtleXMucG9wKCk7XG4gICAgICAgIGlmIChrZXkgaW4gb2JqZWN0KSB7XG4gICAgICAgICAgbmV4dC52YWx1ZSA9IGtleTtcbiAgICAgICAgICBuZXh0LmRvbmUgPSBmYWxzZTtcbiAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBUbyBhdm9pZCBjcmVhdGluZyBhbiBhZGRpdGlvbmFsIG9iamVjdCwgd2UganVzdCBoYW5nIHRoZSAudmFsdWVcbiAgICAgIC8vIGFuZCAuZG9uZSBwcm9wZXJ0aWVzIG9mZiB0aGUgbmV4dCBmdW5jdGlvbiBvYmplY3QgaXRzZWxmLiBUaGlzXG4gICAgICAvLyBhbHNvIGVuc3VyZXMgdGhhdCB0aGUgbWluaWZpZXIgd2lsbCBub3QgYW5vbnltaXplIHRoZSBmdW5jdGlvbi5cbiAgICAgIG5leHQuZG9uZSA9IHRydWU7XG4gICAgICByZXR1cm4gbmV4dDtcbiAgICB9O1xuICB9O1xuXG4gIGZ1bmN0aW9uIHZhbHVlcyhpdGVyYWJsZSkge1xuICAgIGlmIChpdGVyYWJsZSkge1xuICAgICAgdmFyIGl0ZXJhdG9yTWV0aG9kID0gaXRlcmFibGVbaXRlcmF0b3JTeW1ib2xdO1xuICAgICAgaWYgKGl0ZXJhdG9yTWV0aG9kKSB7XG4gICAgICAgIHJldHVybiBpdGVyYXRvck1ldGhvZC5jYWxsKGl0ZXJhYmxlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBpdGVyYWJsZS5uZXh0ID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhYmxlO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWlzTmFOKGl0ZXJhYmxlLmxlbmd0aCkpIHtcbiAgICAgICAgdmFyIGkgPSAtMSwgbmV4dCA9IGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICAgICAgd2hpbGUgKCsraSA8IGl0ZXJhYmxlLmxlbmd0aCkge1xuICAgICAgICAgICAgaWYgKGhhc093bi5jYWxsKGl0ZXJhYmxlLCBpKSkge1xuICAgICAgICAgICAgICBuZXh0LnZhbHVlID0gaXRlcmFibGVbaV07XG4gICAgICAgICAgICAgIG5leHQuZG9uZSA9IGZhbHNlO1xuICAgICAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBuZXh0LnZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgICAgIG5leHQuZG9uZSA9IHRydWU7XG5cbiAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gbmV4dC5uZXh0ID0gbmV4dDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBSZXR1cm4gYW4gaXRlcmF0b3Igd2l0aCBubyB2YWx1ZXMuXG4gICAgcmV0dXJuIHsgbmV4dDogZG9uZVJlc3VsdCB9O1xuICB9XG4gIHJ1bnRpbWUudmFsdWVzID0gdmFsdWVzO1xuXG4gIGZ1bmN0aW9uIGRvbmVSZXN1bHQoKSB7XG4gICAgcmV0dXJuIHsgdmFsdWU6IHVuZGVmaW5lZCwgZG9uZTogdHJ1ZSB9O1xuICB9XG5cbiAgQ29udGV4dC5wcm90b3R5cGUgPSB7XG4gICAgY29uc3RydWN0b3I6IENvbnRleHQsXG5cbiAgICByZXNldDogZnVuY3Rpb24oc2tpcFRlbXBSZXNldCkge1xuICAgICAgdGhpcy5wcmV2ID0gMDtcbiAgICAgIHRoaXMubmV4dCA9IDA7XG4gICAgICAvLyBSZXNldHRpbmcgY29udGV4dC5fc2VudCBmb3IgbGVnYWN5IHN1cHBvcnQgb2YgQmFiZWwnc1xuICAgICAgLy8gZnVuY3Rpb24uc2VudCBpbXBsZW1lbnRhdGlvbi5cbiAgICAgIHRoaXMuc2VudCA9IHRoaXMuX3NlbnQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLmRvbmUgPSBmYWxzZTtcbiAgICAgIHRoaXMuZGVsZWdhdGUgPSBudWxsO1xuXG4gICAgICB0aGlzLm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgdGhpcy5hcmcgPSB1bmRlZmluZWQ7XG5cbiAgICAgIHRoaXMudHJ5RW50cmllcy5mb3JFYWNoKHJlc2V0VHJ5RW50cnkpO1xuXG4gICAgICBpZiAoIXNraXBUZW1wUmVzZXQpIHtcbiAgICAgICAgZm9yICh2YXIgbmFtZSBpbiB0aGlzKSB7XG4gICAgICAgICAgLy8gTm90IHN1cmUgYWJvdXQgdGhlIG9wdGltYWwgb3JkZXIgb2YgdGhlc2UgY29uZGl0aW9uczpcbiAgICAgICAgICBpZiAobmFtZS5jaGFyQXQoMCkgPT09IFwidFwiICYmXG4gICAgICAgICAgICAgIGhhc093bi5jYWxsKHRoaXMsIG5hbWUpICYmXG4gICAgICAgICAgICAgICFpc05hTigrbmFtZS5zbGljZSgxKSkpIHtcbiAgICAgICAgICAgIHRoaXNbbmFtZV0gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIHN0b3A6IGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy5kb25lID0gdHJ1ZTtcblxuICAgICAgdmFyIHJvb3RFbnRyeSA9IHRoaXMudHJ5RW50cmllc1swXTtcbiAgICAgIHZhciByb290UmVjb3JkID0gcm9vdEVudHJ5LmNvbXBsZXRpb247XG4gICAgICBpZiAocm9vdFJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgdGhyb3cgcm9vdFJlY29yZC5hcmc7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLnJ2YWw7XG4gICAgfSxcblxuICAgIGRpc3BhdGNoRXhjZXB0aW9uOiBmdW5jdGlvbihleGNlcHRpb24pIHtcbiAgICAgIGlmICh0aGlzLmRvbmUpIHtcbiAgICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgICAgfVxuXG4gICAgICB2YXIgY29udGV4dCA9IHRoaXM7XG4gICAgICBmdW5jdGlvbiBoYW5kbGUobG9jLCBjYXVnaHQpIHtcbiAgICAgICAgcmVjb3JkLnR5cGUgPSBcInRocm93XCI7XG4gICAgICAgIHJlY29yZC5hcmcgPSBleGNlcHRpb247XG4gICAgICAgIGNvbnRleHQubmV4dCA9IGxvYztcblxuICAgICAgICBpZiAoY2F1Z2h0KSB7XG4gICAgICAgICAgLy8gSWYgdGhlIGRpc3BhdGNoZWQgZXhjZXB0aW9uIHdhcyBjYXVnaHQgYnkgYSBjYXRjaCBibG9jayxcbiAgICAgICAgICAvLyB0aGVuIGxldCB0aGF0IGNhdGNoIGJsb2NrIGhhbmRsZSB0aGUgZXhjZXB0aW9uIG5vcm1hbGx5LlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gISEgY2F1Z2h0O1xuICAgICAgfVxuXG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb247XG5cbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA9PT0gXCJyb290XCIpIHtcbiAgICAgICAgICAvLyBFeGNlcHRpb24gdGhyb3duIG91dHNpZGUgb2YgYW55IHRyeSBibG9jayB0aGF0IGNvdWxkIGhhbmRsZVxuICAgICAgICAgIC8vIGl0LCBzbyBzZXQgdGhlIGNvbXBsZXRpb24gdmFsdWUgb2YgdGhlIGVudGlyZSBmdW5jdGlvbiB0b1xuICAgICAgICAgIC8vIHRocm93IHRoZSBleGNlcHRpb24uXG4gICAgICAgICAgcmV0dXJuIGhhbmRsZShcImVuZFwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPD0gdGhpcy5wcmV2KSB7XG4gICAgICAgICAgdmFyIGhhc0NhdGNoID0gaGFzT3duLmNhbGwoZW50cnksIFwiY2F0Y2hMb2NcIik7XG4gICAgICAgICAgdmFyIGhhc0ZpbmFsbHkgPSBoYXNPd24uY2FsbChlbnRyeSwgXCJmaW5hbGx5TG9jXCIpO1xuXG4gICAgICAgICAgaWYgKGhhc0NhdGNoICYmIGhhc0ZpbmFsbHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5jYXRjaExvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmNhdGNoTG9jLCB0cnVlKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIGlmIChoYXNDYXRjaCkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsIHRydWUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIGlmIChoYXNGaW5hbGx5KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInRyeSBzdGF0ZW1lbnQgd2l0aG91dCBjYXRjaCBvciBmaW5hbGx5XCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBhYnJ1cHQ6IGZ1bmN0aW9uKHR5cGUsIGFyZykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPD0gdGhpcy5wcmV2ICYmXG4gICAgICAgICAgICBoYXNPd24uY2FsbChlbnRyeSwgXCJmaW5hbGx5TG9jXCIpICYmXG4gICAgICAgICAgICB0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgdmFyIGZpbmFsbHlFbnRyeSA9IGVudHJ5O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChmaW5hbGx5RW50cnkgJiZcbiAgICAgICAgICAodHlwZSA9PT0gXCJicmVha1wiIHx8XG4gICAgICAgICAgIHR5cGUgPT09IFwiY29udGludWVcIikgJiZcbiAgICAgICAgICBmaW5hbGx5RW50cnkudHJ5TG9jIDw9IGFyZyAmJlxuICAgICAgICAgIGFyZyA8PSBmaW5hbGx5RW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAvLyBJZ25vcmUgdGhlIGZpbmFsbHkgZW50cnkgaWYgY29udHJvbCBpcyBub3QganVtcGluZyB0byBhXG4gICAgICAgIC8vIGxvY2F0aW9uIG91dHNpZGUgdGhlIHRyeS9jYXRjaCBibG9jay5cbiAgICAgICAgZmluYWxseUVudHJ5ID0gbnVsbDtcbiAgICAgIH1cblxuICAgICAgdmFyIHJlY29yZCA9IGZpbmFsbHlFbnRyeSA/IGZpbmFsbHlFbnRyeS5jb21wbGV0aW9uIDoge307XG4gICAgICByZWNvcmQudHlwZSA9IHR5cGU7XG4gICAgICByZWNvcmQuYXJnID0gYXJnO1xuXG4gICAgICBpZiAoZmluYWxseUVudHJ5KSB7XG4gICAgICAgIHRoaXMubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgIHRoaXMubmV4dCA9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jO1xuICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuY29tcGxldGUocmVjb3JkKTtcbiAgICB9LFxuXG4gICAgY29tcGxldGU6IGZ1bmN0aW9uKHJlY29yZCwgYWZ0ZXJMb2MpIHtcbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHRocm93IHJlY29yZC5hcmc7XG4gICAgICB9XG5cbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJicmVha1wiIHx8XG4gICAgICAgICAgcmVjb3JkLnR5cGUgPT09IFwiY29udGludWVcIikge1xuICAgICAgICB0aGlzLm5leHQgPSByZWNvcmQuYXJnO1xuICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJyZXR1cm5cIikge1xuICAgICAgICB0aGlzLnJ2YWwgPSB0aGlzLmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICAgIHRoaXMubWV0aG9kID0gXCJyZXR1cm5cIjtcbiAgICAgICAgdGhpcy5uZXh0ID0gXCJlbmRcIjtcbiAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwibm9ybWFsXCIgJiYgYWZ0ZXJMb2MpIHtcbiAgICAgICAgdGhpcy5uZXh0ID0gYWZ0ZXJMb2M7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH0sXG5cbiAgICBmaW5pc2g6IGZ1bmN0aW9uKGZpbmFsbHlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkuZmluYWxseUxvYyA9PT0gZmluYWxseUxvYykge1xuICAgICAgICAgIHRoaXMuY29tcGxldGUoZW50cnkuY29tcGxldGlvbiwgZW50cnkuYWZ0ZXJMb2MpO1xuICAgICAgICAgIHJlc2V0VHJ5RW50cnkoZW50cnkpO1xuICAgICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIFwiY2F0Y2hcIjogZnVuY3Rpb24odHJ5TG9jKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA9PT0gdHJ5TG9jKSB7XG4gICAgICAgICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb247XG4gICAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICAgIHZhciB0aHJvd24gPSByZWNvcmQuYXJnO1xuICAgICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB0aHJvd247XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gVGhlIGNvbnRleHQuY2F0Y2ggbWV0aG9kIG11c3Qgb25seSBiZSBjYWxsZWQgd2l0aCBhIGxvY2F0aW9uXG4gICAgICAvLyBhcmd1bWVudCB0aGF0IGNvcnJlc3BvbmRzIHRvIGEga25vd24gY2F0Y2ggYmxvY2suXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJpbGxlZ2FsIGNhdGNoIGF0dGVtcHRcIik7XG4gICAgfSxcblxuICAgIGRlbGVnYXRlWWllbGQ6IGZ1bmN0aW9uKGl0ZXJhYmxlLCByZXN1bHROYW1lLCBuZXh0TG9jKSB7XG4gICAgICB0aGlzLmRlbGVnYXRlID0ge1xuICAgICAgICBpdGVyYXRvcjogdmFsdWVzKGl0ZXJhYmxlKSxcbiAgICAgICAgcmVzdWx0TmFtZTogcmVzdWx0TmFtZSxcbiAgICAgICAgbmV4dExvYzogbmV4dExvY1xuICAgICAgfTtcblxuICAgICAgaWYgKHRoaXMubWV0aG9kID09PSBcIm5leHRcIikge1xuICAgICAgICAvLyBEZWxpYmVyYXRlbHkgZm9yZ2V0IHRoZSBsYXN0IHNlbnQgdmFsdWUgc28gdGhhdCB3ZSBkb24ndFxuICAgICAgICAvLyBhY2NpZGVudGFsbHkgcGFzcyBpdCBvbiB0byB0aGUgZGVsZWdhdGUuXG4gICAgICAgIHRoaXMuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG4gIH07XG59KShcbiAgLy8gSW4gc2xvcHB5IG1vZGUsIHVuYm91bmQgYHRoaXNgIHJlZmVycyB0byB0aGUgZ2xvYmFsIG9iamVjdCwgZmFsbGJhY2sgdG9cbiAgLy8gRnVuY3Rpb24gY29uc3RydWN0b3IgaWYgd2UncmUgaW4gZ2xvYmFsIHN0cmljdCBtb2RlLiBUaGF0IGlzIHNhZGx5IGEgZm9ybVxuICAvLyBvZiBpbmRpcmVjdCBldmFsIHdoaWNoIHZpb2xhdGVzIENvbnRlbnQgU2VjdXJpdHkgUG9saWN5LlxuICAoZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMgfHwgKHR5cGVvZiBzZWxmID09PSBcIm9iamVjdFwiICYmIHNlbGYpO1xuICB9KSgpIHx8IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKVxuKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9yZWdlbmVyYXRvci1ydW50aW1lL3J1bnRpbWUuanNcbi8vIG1vZHVsZSBpZCA9IC4uL25vZGVfbW9kdWxlcy9yZWdlbmVyYXRvci1ydW50aW1lL3J1bnRpbWUuanNcbi8vIG1vZHVsZSBjaHVua3MgPSBtYWluIiwiZnVuY3Rpb24gQXN5bmNSZW5kZXJpbmdJbnRlcnJ1cHRlZCgpIHtcbiAgICB0aGlzLm1lc3NhZ2UgPSAnQXN5bmMgcmVuZGVyaW5nIGludGVycnVwdGVkJztcbn1cblxudmFyIHByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoRXJyb3IucHJvdG90eXBlKVxucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gQXN5bmNSZW5kZXJpbmdJbnRlcnJ1cHRlZDtcbnByb3RvdHlwZS5jb25zdHJ1Y3Rvci5wcm90b3R5cGUgPSBwcm90b3R5cGU7XG5cbm1vZHVsZS5leHBvcnRzID0gcHJvdG90eXBlLmNvbnN0cnVjdG9yO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL3JlbGFrcy9hc3luYy1yZW5kZXJpbmctaW50ZXJydXB0ZWQuanNcbi8vIG1vZHVsZSBpZCA9IC4uL25vZGVfbW9kdWxlcy9yZWxha3MvYXN5bmMtcmVuZGVyaW5nLWludGVycnVwdGVkLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gbWFpbiIsInZhciBBc3luY1JlbmRlcmluZ0ludGVycnVwdGVkID0gcmVxdWlyZSgnLi9hc3luYy1yZW5kZXJpbmctaW50ZXJydXB0ZWQnKTtcbnZhciBNZWFud2hpbGUgPSByZXF1aXJlKCcuL21lYW53aGlsZScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKFJlYWN0KSB7XG5cbmZ1bmN0aW9uIFJlbGFrc0NvbXBvbmVudCgpIHtcbn1cblxudmFyIHByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoUmVhY3QuQ29tcG9uZW50LnByb3RvdHlwZSk7XG5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBSZWxha3NDb21wb25lbnQ7XG5wcm90b3R5cGUuY29uc3RydWN0b3IucHJvdG90eXBlID0gcHJvdG90eXBlO1xuXG4vKipcbiAqIFJlbmRlciBjb21wb25lbnQsIGNhbGxpbmcgcmVuZGVyQXN5bmMoKSBpZiBuZWNlc3NhcnlcbiAqXG4gKiBAcmV0dXJuIHtSZWFjdEVsZW1lbnR8bnVsbH1cbiAqL1xucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciByZWxha3MgPSB0aGlzLnJlbGFrcztcbiAgICBpZiAoIXJlbGFrcykge1xuICAgICAgICBjb25zb2xlLndhcm4oJ1JlbGFrcyBjb250ZXh0IGlzIG1pc3NpbmcuIE1ha2Ugc3VyZSB5b3UgYXJlIGNhbGxpbmcgY29tcG9uZW50V2lsbE1vdW50KCkgYW5kIGNvbXBvbmVudFdpbGxVbm1vdW50KCkgb2YgdGhlIHN1cGVyY2xhc3MnKTtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgLy8gc2VlIGlmIHJlbmRlcmluZyBpcyB0cmlnZ2VyZWQgYnkgcmVzb2x1dGlvbiBvZiBhIHByb21pc2UsXG4gICAgLy8gb3IgYnkgYSBjYWxsIHRvIE1lYW53aGlsZS5zaG93KClcbiAgICBpZiAocmVsYWtzLnByb21pc2VkRWxlbWVudEV4cGVjdGVkKSB7XG4gICAgICAgIC8vIHJlbmRlciB0aGUgbmV3IHByb21pc2VkIGVsZW1lbnRcbiAgICAgICAgcmVsYWtzLnByb21pc2VkRWxlbWVudEV4cGVjdGVkID0gZmFsc2U7XG4gICAgICAgIHJlbGFrcy5wcm9ncmVzc0VsZW1lbnQgPSBudWxsO1xuICAgICAgICByZWxha3MucHJvZ3Jlc3NFbGVtZW50UmVuZGVyZWQgPSBudWxsO1xuICAgICAgICByZXR1cm4gcmVsYWtzLnByb21pc2VkRWxlbWVudDtcbiAgICB9IGVsc2UgaWYgKHJlbGFrcy5wcm9ncmVzc0VsZW1lbnRFeHBlY3RlZCkge1xuICAgICAgICAvLyByZW5kZXIgdGhlIG5ldyBwcm9ncmVzcyBlbGVtZW50XG4gICAgICAgIHJlbGFrcy5wcm9ncmVzc0VsZW1lbnRFeHBlY3RlZCA9IGZhbHNlO1xuICAgICAgICByZWxha3MucHJvZ3Jlc3NFbGVtZW50UmVuZGVyZWQgPSByZWxha3MucHJvZ3Jlc3NFbGVtZW50O1xuICAgICAgICByZXR1cm4gcmVsYWtzLnByb2dyZXNzRWxlbWVudDtcbiAgICB9XG5cbiAgICAvLyBub3JtYWwgcmVyZW5kZXJpbmctLXdlIG5lZWQgdG8gY2FsbCByZW5kZXJBc3luYygpXG4gICAgLy9cbiAgICAvLyBmaXJzdCBjYW5jZWwgYW55IHVuZmluaXNoZWQgcmVuZGVyaW5nIGN5Y2xlXG4gICAgdmFyIHByZXZpb3VzbHkgPSByZWxha3MubWVhbndoaWxlO1xuICAgIGlmIChwcmV2aW91c2x5KSB7XG4gICAgICAgIHJlbGFrcy5tZWFud2hpbGUgPSBudWxsO1xuICAgICAgICAvLyB1c2UgYSB0cnkgYmxvY2ssIGluIGNhc2UgdXNlci1zdXBwbGllZCBvbkNhbmNlbCBoYW5kbGVyIGF0dGFjaGVkXG4gICAgICAgIC8vIHRvIHRoZSBtZWFud2hpbGUgb2JqZWN0IHRocm93c1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcHJldmlvdXNseS5jYW5jZWwoKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZWxha3MucHJldmlvdXMgPSByZWxha3MuY3VycmVudDtcbiAgICByZWxha3MuY3VycmVudCA9IHtcbiAgICAgICAgcHJvcHM6IHRoaXMucHJvcHMsXG4gICAgICAgIHN0YXRlOiB0aGlzLnN0YXRlIHx8IHt9LFxuICAgIH07XG5cbiAgICAvLyBjcmVhdGUgbmV3IG1lYW53aGlsZSBvYmplY3RcbiAgICB2YXIgbWVhbndoaWxlID0gcmVsYWtzLm1lYW53aGlsZSA9IG5ldyBNZWFud2hpbGUodGhpcywgcHJldmlvdXNseSk7XG5cbiAgICAvLyBjYWxsIHVzZXItZGVmaW5lZCByZW5kZXJBc3luYygpIGluIGEgdHJ5LWNhdGNoIGJsb2NrIHRvIGNhdGNoIHBvdGVudGlhbCBlcnJvcnNcbiAgICB0cnkge1xuICAgICAgICB2YXIgcHJvbWlzZTtcbiAgICAgICAgaWYgKHRoaXMucmVuZGVyQXN5bmMubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgcHJvbWlzZSA9IHRoaXMucmVuZGVyQXN5bmMobWVhbndoaWxlLCB0aGlzLnByb3BzLCB0aGlzLnN0YXRlLCB0aGlzLmNvbnRleHQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcHJvbWlzZSA9IHRoaXMucmVuZGVyQXN5bmMobWVhbndoaWxlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGZyb20gaGVyZSBvbiwgYW55IGNhbGwgdG8gTWVhbndoaWxlLnNob3coKSBpcyBhc3luY2hyb25vdXNcbiAgICAgICAgbWVhbndoaWxlLnN5bmNocm9ub3VzID0gZmFsc2U7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIC8vIGEgc3luY2hyb25vdXNlIGVycm9yIG9jY3VycmVkLCBzaG93IGFueSBwcm9ncmVzcyBtYWRlIG9yIHdoYXQgd2FzXG4gICAgICAgIC8vIHRoZXJlIGJlZm9yZVxuICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICAgIHJlbGFrcy5tZWFud2hpbGUuY2xlYXIoKTtcbiAgICAgICAgcmVsYWtzLm1lYW53aGlsZSA9IG51bGw7XG4gICAgICAgIHJldHVybiByZWxha3MucHJvZ3Jlc3NFbGVtZW50IHx8IHJlbGFrcy5wcm9ncmVzc0VsZW1lbnRSZW5kZXJlZCB8fCByZWxha3MucHJvbWlzZWRFbGVtZW50O1xuICAgIH1cblxuICAgIGlmIChpc1Byb21pc2UocHJvbWlzZSkpIHtcbiAgICAgICAgLy8gc2V0IHVwIGhhbmRsZXJzIGZvciB0aGUgcHJvbWlzZSByZXR1cm5lZFxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgcmVzb2x2ZSA9IGZ1bmN0aW9uKGVsZW1lbnQpIHtcbiAgICAgICAgICAgIGlmIChtZWFud2hpbGUgIT09IHJlbGFrcy5tZWFud2hpbGUpIHtcbiAgICAgICAgICAgICAgICAvLyBhIG5ldyByZW5kZXJpbmcgY3ljbGUgaGFzIHN0YXJ0ZWRcbiAgICAgICAgICAgICAgICBtZWFud2hpbGUuY2FuY2VsKCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKCFfdGhpcy5yZWxha3MpIHtcbiAgICAgICAgICAgICAgICAvLyBjb21wb25lbnQgaGFzIGJlZW4gdW5tb3VudGVkXG4gICAgICAgICAgICAgICAgbWVhbndoaWxlLmNhbmNlbCgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyB0ZWxsIHJlbmRlcigpIHRvIHNob3cgdGhlIGVsZW1lbnRcbiAgICAgICAgICAgICAgICBtZWFud2hpbGUuZmluaXNoKCk7XG4gICAgICAgICAgICAgICAgcmVsYWtzLnByb21pc2VkRWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgICAgICAgICAgICAgcmVsYWtzLnByb21pc2VkRWxlbWVudEV4cGVjdGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICByZWxha3MubWVhbndoaWxlID0gbnVsbDtcbiAgICAgICAgICAgICAgICBfdGhpcy5mb3JjZVVwZGF0ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICB2YXIgcmVqZWN0ID0gZnVuY3Rpb24oZXJyKSB7XG4gICAgICAgICAgICBpZiAoZXJyIGluc3RhbmNlb2YgQXN5bmNSZW5kZXJpbmdJbnRlcnJ1cHRlZCkge1xuICAgICAgICAgICAgICAgIC8vIHRoZSByZW5kZXJpbmcgY3ljbGUgd2FzIGludGVycnVwdGVkLS1kbyBub3RoaW5nXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIGR1bXAgdGhlIGVycm9yIGludG8gdGhlIGNvbnNvbGUgYW5kIHJldHVybiB3aGF0IGhhcyBiZWVuXG4gICAgICAgICAgICAgICAgLy8gcmVuZGVyZWQgc28gZmFyIG9yIHdoYXQgd2FzIHRoZXJlIGJlZm9yZVxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgICAgICAgICAgICB2YXIgZWxlbWVudCA9IHJlbGFrcy5wcm9ncmVzc0VsZW1lbnQgfHwgcmVsYWtzLnByb21pc2VkRWxlbWVudDtcbiAgICAgICAgICAgICAgICByZXNvbHZlKGVsZW1lbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBwcm9taXNlLnRoZW4ocmVzb2x2ZSwgcmVqZWN0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgICAvLyBhbGxvdyByZW5kZXJBc3luYygpIHRvIGFjdCBzeW5jaHJvbm91c2x5XG4gICAgICAgIHZhciBlbGVtZW50ID0gcHJvbWlzZTtcbiAgICAgICAgcmVsYWtzLm1lYW53aGlsZSA9IG51bGw7XG4gICAgICAgIHJlbGFrcy5wcm9taXNlZEVsZW1lbnQgPSBlbGVtZW50O1xuICAgICAgICByZWxha3MucHJvZ3Jlc3NFbGVtZW50ID0gbnVsbDtcbiAgICAgICAgcmVsYWtzLnByb2dyZXNzRWxlbWVudFJlbmRlcmVkID0gbnVsbDtcbiAgICB9XG5cbiAgICAvLyB3ZSBoYXZlIHRyaWdnZXJlZCB0aGUgYXN5bmNocm9uaXplIG9wZXJhdGlvbiBhbmQgYXJlIHdhaXRpbmcgZm9yIGl0IHRvXG4gICAgLy8gY29tcGxldGU7IGluIHRoZSBtZWFudGltZSB3ZSBuZWVkIHRvIHJldHVybiBzb21ldGhpbmdcbiAgICBpZiAocmVsYWtzLnByb21pc2VkRWxlbWVudCkge1xuICAgICAgICAvLyBzaG93IHdoYXQgd2FzIHRoZXJlIGJlZm9yZVxuICAgICAgICByZXR1cm4gcmVsYWtzLnByb21pc2VkRWxlbWVudDtcbiAgICB9XG4gICAgaWYgKHJlbGFrcy5wcm9ncmVzc0VsZW1lbnQpIHtcbiAgICAgICAgLy8gYSBwcm9ncmVzcyBlbGVtZW50IHdhcyBwcm92aWRlZCBzeW5jaHJvbm91c2x5IGJ5IHJlbmRlckFzeW5jKClcbiAgICAgICAgLy8gd2UnbGwgZGlzcGxheSB0aGF0IGlmIGRlbGF5IGlzIHNldCB0byAwXG4gICAgICAgIGlmIChtZWFud2hpbGUuc2hvd2luZ1Byb2dyZXNzIHx8IG1lYW53aGlsZS5zaG93aW5nUHJvZ3Jlc3NJbml0aWFsbHkpIHtcbiAgICAgICAgICAgIHJldHVybiByZWxha3MucHJvZ3Jlc3NFbGVtZW50O1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChyZWxha3MucHJvZ3Jlc3NFbGVtZW50UmVuZGVyZWQpIHtcbiAgICAgICAgLy8gc2hvdyB0aGUgcHJldmlvdXMgcHJvZ3Jlc3NcbiAgICAgICAgcmV0dXJuIHJlbGFrcy5wcm9ncmVzc0VsZW1lbnRSZW5kZXJlZDtcbiAgICB9XG4gICAgLy8gdW1tLCB3ZSBnb3Qgbm90aGluZ1xuICAgIHJldHVybiBudWxsO1xufTtcblxuLyoqXG4gKiBSZXR1cm4gZmFsc2UgaWYgdGhlIGNvbXBvbmVudCdzIHByb3BzIGFuZCBzdGF0ZSBoYXZlbid0IGNoYW5nZWQuXG4gKlxuICogQHBhcmFtICB7T2JqZWN0fSBuZXh0UHJvcHNcbiAqIEBwYXJhbSAge09iamVjdH0gbmV4dFN0YXRlXG4gKlxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqL1xucHJvdG90eXBlLnNob3VsZENvbXBvbmVudFVwZGF0ZSA9IGZ1bmN0aW9uKG5leHRQcm9wcywgbmV4dFN0YXRlKSB7XG4gICAgaWYgKCFjb21wYXJlKHRoaXMucHJvcHMsIG5leHRQcm9wcykgfHwgIWNvbXBhcmUodGhpcy5zdGF0ZSwgbmV4dFN0YXRlKSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xufTtcblxuLyoqXG4gKiBDcmVhdGUgUmVsYWtzIGNvbnRleHQgb24gbW91bnQuXG4gKi9cbnByb3RvdHlwZS5jb21wb25lbnRXaWxsTW91bnQgPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLnJlbGFrcyA9IHtcbiAgICAgICAgcHJvZ3Jlc3NFbGVtZW50OiBudWxsLFxuICAgICAgICBwcm9ncmVzc0VsZW1lbnRFeHBlY3RlZDogZmFsc2UsXG4gICAgICAgIHByb21pc2VkRWxlbWVudDogbnVsbCxcbiAgICAgICAgcHJvbWlzZWRFbGVtZW50RXhwZWN0ZWQ6IGZhbHNlLFxuICAgICAgICBwcm9ncmVzc0VsZW1lbnRSZW5kZXJlZDogbnVsbCxcbiAgICAgICAgbWVhbndoaWxlOiBudWxsLFxuICAgICAgICBwcmV2aW91czogbnVsbCxcbiAgICAgICAgY3VycmVudDoge1xuICAgICAgICAgICAgcHJvcHM6IHt9LFxuICAgICAgICAgICAgc3RhdGU6IHt9LFxuICAgICAgICB9LFxuICAgIH07XG59O1xuXG4vKipcbiAqIFJlbW92ZSBSZWxha3MgY29udGV4dCBvbiB1bm1vdW50LCBjYW5jZWxpbmcgYW55IG91dHN0YW5kaW5nIGFzeW5jaHJvbm91c1xuICogcmVuZGVyaW5nIGN5Y2xlLlxuICovXG5wcm90b3R5cGUuY29tcG9uZW50V2lsbFVubW91bnQgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgcmVsYWtzID0gdGhpcy5yZWxha3M7XG4gICAgaWYgKHJlbGFrcykge1xuICAgICAgICBpZiAocmVsYWtzLm1lYW53aGlsZSkge1xuICAgICAgICAgICAgcmVsYWtzLm1lYW53aGlsZS5jYW5jZWwoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnJlbGFrcyA9IHVuZGVmaW5lZDtcbiAgICB9XG59O1xuXG5yZXR1cm4ge1xuICAgIENvbXBvbmVudDogcHJvdG90eXBlLmNvbnN0cnVjdG9yLFxuICAgIEFzeW5jQ29tcG9uZW50OiBwcm90b3R5cGUuY29uc3RydWN0b3IsXG4gICAgQXN5bmNSZW5kZXJpbmdJbnRlcnJ1cHRlZDogQXN5bmNSZW5kZXJpbmdJbnRlcnJ1cHRlZCxcbiAgICBNZWFud2hpbGU6IE1lYW53aGlsZSxcbn07XG59O1xuXG4vKipcbiAqIFJldHVybiB0cnVlIGlmIHRoZSBnaXZlbiBvYmplY3QgaXMgYSBwcm9taXNlXG4gKlxuICogQHBhcmFtICB7T2JqZWN0fSBvYmplY3RcbiAqXG4gKiBAcmV0dXJuIEJvb2xlYW5cbiAqL1xuZnVuY3Rpb24gaXNQcm9taXNlKG9iamVjdCkge1xuICAgIGlmIChvYmplY3QgJiYgdHlwZW9mKG9iamVjdC50aGVuKSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xufVxuXG4vKipcbiAqIENvbXBhcmUgdHdvIG9iamVjdHMgc2hhbGxvd2x5XG4gKlxuICogQHBhcmFtICB7T2JqZWN0fSBwcmV2U2V0XG4gKiBAcGFyYW0gIHtPYmplY3R9IG5leHRTZXRcbiAqXG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICovXG5mdW5jdGlvbiBjb21wYXJlKHByZXZTZXQsIG5leHRTZXQpIHtcbiAgICBpZiAocHJldlNldCA9PT0gbmV4dFNldCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKCFwcmV2U2V0IHx8ICFuZXh0U2V0KSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgZm9yICh2YXIga2V5IGluIG5leHRTZXQpIHtcbiAgICAgICAgdmFyIHByZXYgPSBwcmV2U2V0W2tleV07XG4gICAgICAgIHZhciBuZXh0ID0gbmV4dFNldFtrZXldO1xuICAgICAgICBpZiAobmV4dCAhPT0gcHJldikge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL3JlbGFrcy9jbGFzcy5qc1xuLy8gbW9kdWxlIGlkID0gLi4vbm9kZV9tb2R1bGVzL3JlbGFrcy9jbGFzcy5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IG1haW4iLCJ2YXIgQXN5bmNSZW5kZXJpbmdJbnRlcnJ1cHRlZCA9IHJlcXVpcmUoJy4vYXN5bmMtcmVuZGVyaW5nLWludGVycnVwdGVkJyk7XG5cbmZ1bmN0aW9uIE1lYW53aGlsZShjb21wb25lbnQsIHByZXZpb3VzbHkpIHtcbiAgICB2YXIgcmVsYWtzID0gY29tcG9uZW50LnJlbGFrcztcbiAgICB0aGlzLmNvbXBvbmVudCA9IGNvbXBvbmVudDtcbiAgICB0aGlzLnN5bmNocm9ub3VzID0gdHJ1ZTtcbiAgICB0aGlzLnNob3dpbmdQcm9ncmVzcyA9IGZhbHNlO1xuICAgIHRoaXMuc2hvd2luZ1Byb2dyZXNzSW5pdGlhbGx5ID0gZmFsc2U7XG4gICAgdGhpcy5kZWxheVdoZW5FbXB0eSA9IDUwO1xuICAgIHRoaXMuZGVsYXlXaGVuUmVuZGVyZWQgPSBJbmZpbml0eTtcbiAgICB0aGlzLmNhbmNlbGVkID0gZmFsc2U7XG4gICAgdGhpcy5wcmlvciA9IChwcmV2aW91c2x5KSA/IHByZXZpb3VzbHkucHJpb3IgOiByZWxha3MucHJldmlvdXM7XG4gICAgdGhpcy5wcmV2aW91cyA9IHJlbGFrcy5wcmV2aW91cztcbiAgICB0aGlzLmN1cnJlbnQgPSByZWxha3MuY3VycmVudDtcbiAgICB0aGlzLnVwZGF0ZVRpbWVvdXQgPSAwO1xuICAgIHRoaXMuc3RhcnRUaW1lID0gZ2V0VGltZSgpO1xuICAgIHRoaXMub25DYW5jZWwgPSBudWxsO1xuICAgIHRoaXMub25Db21wbGV0ZSA9IG51bGw7XG4gICAgdGhpcy5vblByb2dyZXNzID0gbnVsbDtcbn1cblxudmFyIHByb3RvdHlwZSA9IE1lYW53aGlsZS5wcm90b3R5cGU7XG5cbi8qKlxuICogQ2hlY2sgaWYgdGhlIHJlbmRlcmluZyBjeWNsZSBoYXMgYmVlbiBzdXBlcmNlZGVkIGJ5IGEgbmV3IG9uZS4gSWYgc29cbiAqIHRocm93IGFuIGV4Y2VwdGlvbiB0byBlbmQgaXQuIEVuc3VyZSBjb21wb25lbnQgaXMgbW91bnRlZCBhcyB3ZWxsLlxuICovXG5wcm90b3R5cGUuY2hlY2sgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgcmVsYWtzID0gdGhpcy5jb21wb25lbnQucmVsYWtzO1xuICAgIGlmICghcmVsYWtzIHx8IHRoaXMgIT09IHJlbGFrcy5tZWFud2hpbGUpIHtcbiAgICAgICAgLy8gdGhyb3cgZXhjZXB0aW9uIHRvIGJyZWFrIHByb21pc2UgY2hhaW5cbiAgICAgICAgLy8gcHJvbWlzZSBsaWJyYXJ5IHNob3VsZCBjYXRjaCBhbmQgcGFzcyBpdCB0byByZWplY3QoKVxuICAgICAgICAvLyBkZWZpbmVkIGRvd24gYmVsb3dcbiAgICAgICAgdGhyb3cgbmV3IEFzeW5jUmVuZGVyaW5nSW50ZXJydXB0ZWQ7XG4gICAgfVxufVxuXG4vKipcbiAqIFNob3cgcHJvZ3Jlc3MgZWxlbWVudCwgcG9zc2libHkgYWZ0ZXIgYSBkZWxheVxuICpcbiAqIEBwYXJhbSAge1JlYWN0RWxlbWVudH0gZWxlbWVudFxuICogQHBhcmFtICB7U3RyaW5nfHVuZGVmaW5lZH0gZGlzcG9zaXRpb25cbiAqXG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICovXG5wcm90b3R5cGUuc2hvdyA9IGZ1bmN0aW9uKGVsZW1lbnQsIGRpc3Bvc2l0aW9uKSB7XG4gICAgdmFyIHJlbGFrcyA9IHRoaXMuY29tcG9uZW50LnJlbGFrcztcblxuICAgIC8vIG1ha2Ugc3VyZSB0aGUgcmVuZGVyaW5nIGN5Y2xlIGlzIHN0aWxsIGN1cnJlbnRcbiAgICB0aGlzLmNoZWNrKCk7XG5cbiAgICAvLyBzYXZlIHRoZSBlbGVtZW50IHNvIHJlbmRlcigpIGNhbiByZXR1cm4gaXQgZXZlbnR1YWxseVxuICAgIHJlbGFrcy5wcm9ncmVzc0VsZW1lbnQgPSBlbGVtZW50O1xuXG4gICAgaWYgKHRoaXMuc2hvd2luZ1Byb2dyZXNzKSB7XG4gICAgICAgIC8vIHNlZSBpZiB3ZSdyZSBzaG93aW5nIHByb2dyZXNzIGFscmVhZHksIHNob3cgdGhlIG5ldyBwcm9ncmVzcyBpbW1lZGlhdGVseVxuICAgICAgICB0aGlzLnVwZGF0ZSgpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoZGlzcG9zaXRpb24gPT09ICdhbHdheXMnKSB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZSh0cnVlKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9IGVsc2UgaWYgKGRpc3Bvc2l0aW9uID09PSAnaW5pdGlhbCcpIHtcbiAgICAgICAgICAgIGlmICghcmVsYWtzLnByb21pc2VkRWxlbWVudCAmJiAhcmVsYWtzLnByb2dyZXNzRWxlbWVudFJlbmRlcmVkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGUodHJ1ZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMudXBkYXRlVGltZW91dCkge1xuICAgICAgICAgICAgLy8gd2UndmUgYWxyZWFkeSBzY2hlZHVsZSB0aGUgZGlzcGxheWluZyBvZiBwcm9ncmVzc1xuICAgICAgICAgICAgLy8ganVzdCB3YWl0IGZvciB0aGUgaW5pdGlhbCB0aW1lb3V0IHRvIGZpcmVcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBkZWxheTtcbiAgICAgICAgaWYgKCFyZWxha3MucHJvbWlzZWRFbGVtZW50KSB7XG4gICAgICAgICAgICBkZWxheSA9IHRoaXMuZGVsYXlXaGVuRW1wdHk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkZWxheSA9IHRoaXMuZGVsYXlXaGVuUmVuZGVyZWQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGRlbGF5ID4gMCkge1xuICAgICAgICAgICAgaWYgKGRlbGF5ICE9PSBJbmZpbml0eSkge1xuICAgICAgICAgICAgICAgIC8vIHNob3cgcHJvZ3Jlc3MgYWZ0ZXIgYSBicmllZiBkZWxheSwgdG8gYWxsb3dcbiAgICAgICAgICAgICAgICAvLyBpdCB0byBiZSBieXBhc3NlZCBieSBmYXN0LXJlc29sdmluZyBwcm9taXNlc1xuICAgICAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVUaW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gaWYgdGhlIHRpbWVvdXQgaXMgMCwgdGhlbiBjbGVhclRpbWVvdXQoKSB3YXMgY2FsbGVkIG9uIGl0XG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMgZnVuY3Rpb24gbWlnaHQgc3RpbGwgcnVuIG9uIG9jY2FzaW9uIGFmdGVyd2FyZCwgZHVlIHRvXG4gICAgICAgICAgICAgICAgICAgIC8vIHRoZSB3YXkgdGltZW91dHMgYXJlIHNjaGVkdWxlZFxuICAgICAgICAgICAgICAgICAgICBpZiAoX3RoaXMudXBkYXRlVGltZW91dCAhPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMudXBkYXRlKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LCBkZWxheSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBjYWxsZXIgd2FudHMgaXQgdG8gYmUgc2hvd24gaW1tZWRpYXRlbHlcbiAgICAgICAgICAgIHRoaXMudXBkYXRlKCk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbn07XG5cbi8qKlxuICogUmV0dXJuIHRydWUgaWYgdGhlIGNvbXBvbmVudCBoYXMgcHJldmlvdXNseSBiZWVuIGZ1bGx5IHJlbmRlcmVkXG4gKlxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqL1xucHJvdG90eXBlLnJldmlzaW5nID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHJlbGFrcyA9IHRoaXMuY29tcG9uZW50LnJlbGFrcztcbiAgICByZXR1cm4gISFyZWxha3MucHJvbWlzZWRFbGVtZW50O1xufTtcblxuLyoqXG4gKiBTZXQgcHJvZ3Jlc3NpdmUgcmVuZGVyaW5nIGRlbGF5LCBmb3Igd2hlbiB0aGUgY29tcG9uZW50IGlzIGVtcHR5IGFuZCB3aGVuXG4gKiBpdCBoYXMgYmVlbiBmdWxseSByZW5kZXJlZCBwcmV2aW91c2x5XG4gKlxuICogQHBhcmFtICB7TnVtYmVyfSBlbXB0eVxuICogQHBhcmFtICB7TnVtYmVyfSByZW5kZXJlZFxuICovXG5wcm90b3R5cGUuZGVsYXkgPSBmdW5jdGlvbihlbXB0eSwgcmVuZGVyZWQpIHtcbiAgICBpZiAodHlwZW9mKGVtcHR5KSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgdGhpcy5kZWxheVdoZW5FbXB0eSA9IGVtcHR5O1xuICAgIH1cbiAgICBpZiAodHlwZW9mKHJlbmRlcmVkKSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgdGhpcy5kZWxheVdoZW5SZW5kZXJlZCA9IHJlbmRlcmVkO1xuICAgIH1cbn07XG5cbi8qKlxuICogUmVuZGVyaW5nIHRoZSBwcm9ncmVzcyBlbGVtZW50IG5vd1xuICpcbiAqIEBwYXJhbSAge0Jvb2xlYW58dW5kZWZpbmVkfSBmb3JjZVxuICovXG5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24oZm9yY2VkKSB7XG4gICAgdmFyIHJlbGFrcyA9IHRoaXMuY29tcG9uZW50LnJlbGFrcztcblxuICAgIC8vIGluZGljYXRlIHRoYXQgdGhlIGNvbXBvbmVudCBpcyBkaXNwbGF5aW5nIHByb2dyZXNzXG4gICAgLy8gdW5sZXNzIHdlJ3JlIGZvcmNpbmcgdGhlIHByb2dyZXNzIGRpc3BsYXlcbiAgICBpZiAoIWZvcmNlZCkge1xuICAgICAgICB0aGlzLnNob3dpbmdQcm9ncmVzcyA9IHRydWU7XG4gICAgfVxuXG4gICAgLy8gdG9zcyB0aGUgcmVzdWx0IG9mIHRoZSBwcmV2aW91cyByZW5kZXJpbmcgY3ljbGVcbiAgICBpZiAocmVsYWtzLnByb21pc2VkRWxlbWVudCkge1xuICAgICAgICByZWxha3MucHJvbWlzZWRFbGVtZW50ID0gbnVsbDtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5zeW5jaHJvbm91cykge1xuICAgICAgICAvLyBubyBuZWVkIHRvIGZvcmNlIHVwZGF0ZSBzaW5jZSB3ZSdyZSBzdGlsbCBpbnNpZGVcbiAgICAgICAgLy8gcmVuZGVyKCkgYW5kIGl0IGNhbiBzaW1wbHkgcmV0dXJuIHRoZSBwcm9ncmVzcyBlbGVtZW50XG4gICAgICAgIGlmIChmb3JjZWQpIHtcbiAgICAgICAgICAgIHRoaXMuc2hvd2luZ1Byb2dyZXNzSW5pdGlhbGx5ID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHRoaXMub25Qcm9ncmVzcykge1xuICAgICAgICB2YXIgZWxhcHNlZCA9IGdldFRpbWUoKSAtIHRoaXMuc3RhcnRUaW1lO1xuICAgICAgICB0aGlzLm9uUHJvZ3Jlc3MoeyB0eXBlOiAncHJvZ3Jlc3MnLCB0YXJnZXQ6IHRoaXMsIGVsYXBzZWQ6IGVsYXBzZWQgfSk7XG4gICAgfVxuXG4gICAgaWYgKHJlbGFrcy5wcm9ncmVzc0VsZW1lbnQgPT09IHJlbGFrcy5wcm9ncmVzc0VsZW1lbnRSZW5kZXJlZCkge1xuICAgICAgICAvLyBpdCdzIGFscmVhZHkgcmVuZGVyZWRcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIHRlbGwgcmVuZGVyKCkgdGhhdCBpdCBpc24ndCB0cmlnZ2VyZWQgaW4gdGhlIG5vcm1hbCBmYXNoaW9uXG4gICAgcmVsYWtzLnByb2dyZXNzRWxlbWVudEV4cGVjdGVkID0gdHJ1ZTtcbiAgICB0aGlzLmNvbXBvbmVudC5mb3JjZVVwZGF0ZSgpO1xufTtcblxuLyoqXG4gKiBDYW5jZWwgdGhlIHJlbmRlcmluZyBvZiBwcm9ncmVzcyBhbmQgZmlyZSBhbnkgb25DYW5jZWwgaGFuZGxlclxuICovXG5wcm90b3R5cGUuY2FuY2VsID0gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5jbGVhcigpO1xuICAgIGlmICghdGhpcy5jYW5jZWxlZCkge1xuICAgICAgICB0aGlzLmNhbmNlbGVkID0gdHJ1ZTtcbiAgICAgICAgaWYgKHRoaXMub25DYW5jZWwpIHtcbiAgICAgICAgICAgIHRoaXMub25DYW5jZWwoeyB0eXBlOiAnY2FuY2VsJywgdGFyZ2V0OiB0aGlzIH0pO1xuICAgICAgICB9XG4gICAgfVxufTtcblxuLyoqXG4gKiBDbGVhciB0aW1lb3V0IGZ1bmN0aW9uIGFuZCBmaXJlIGFueSBvbkNvbXBsZXRlIGhhbmRsZXJcbiAqL1xucHJvdG90eXBlLmZpbmlzaCA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuY2xlYXIoKTtcbiAgICBpZiAodGhpcy5vbkNvbXBsZXRlKSB7XG4gICAgICAgIHZhciBlbGFwc2VkID0gZ2V0VGltZSgpIC0gdGhpcy5zdGFydFRpbWU7XG4gICAgICAgIHRoaXMub25Db21wbGV0ZSh7IHR5cGU6ICdjb21wbGV0ZScsIHRhcmdldDogdGhpcywgZWxhcHNlZDogZWxhcHNlZCB9KTtcbiAgICB9XG59O1xuXG4vKipcbiAqIENhbmNlbCB0aGUgYW55IHNjaGVkdWxlZCByZW5kZXJpbmcgb2YgcHJvZ3Jlc3NcbiAqL1xucHJvdG90eXBlLmNsZWFyID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHJlbGFrcyA9IHRoaXMuY29tcG9uZW50LnJlbGFrcztcbiAgICBpZiAodGhpcy51cGRhdGVUaW1lb3V0KSB7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aGlzLnVwZGF0ZVRpbWVvdXQpO1xuICAgICAgICB0aGlzLnVwZGF0ZVRpbWVvdXQgPSAwO1xuICAgIH1cbn07XG5cbnZhciBzY3JpcHRTdGFydFRpbWUgPSBuZXcgRGF0ZTtcblxuLyoqXG4gKiBSZXR1cm4gdGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgcGFzc2VkIHNpbmNlIHN0YXJ0IG9mIHRoaXMgc2NyaXB0XG4gKlxuICogQHJldHVybiB7TnVtYmVyfVxuICovXG5mdW5jdGlvbiBnZXRUaW1lKCkge1xuICAgIHJldHVybiAobmV3IERhdGUpIC0gc2NyaXB0U3RhcnRUaW1lO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHByb3RvdHlwZS5jb25zdHJ1Y3RvcjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9yZWxha3MvbWVhbndoaWxlLmpzXG4vLyBtb2R1bGUgaWQgPSAuLi9ub2RlX21vZHVsZXMvcmVsYWtzL21lYW53aGlsZS5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IG1haW4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2xhc3MnKShyZXF1aXJlKCdwcmVhY3QnKSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvcmVsYWtzL3ByZWFjdC5qc1xuLy8gbW9kdWxlIGlkID0gLi4vbm9kZV9tb2R1bGVzL3JlbGFrcy9wcmVhY3QuanNcbi8vIG1vZHVsZSBjaHVua3MgPSBtYWluIiwiaW1wb3J0IHsgaCwgQ29tcG9uZW50IH0gZnJvbSAncHJlYWN0JztcbmltcG9ydCBTV0FQSSBmcm9tICdzd2FwaSc7XG5pbXBvcnQgeyBSb3V0ZSB9IGZyb20gJ3JvdXRlcyc7XG5pbXBvcnQgTmF2QmFyIGZyb20gJ3dpZGdldHMvbmF2LWJhcic7XG5pbXBvcnQgJ3JlbGFrcy9wcmVhY3QnO1xuaW1wb3J0ICdzdHlsZS5zY3NzJztcblxuLyoqIEBqc3ggaCAqL1xuXG5jbGFzcyBBcHBsaWNhdGlvbiBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgc3RhdGljIGRpc3BsYXlOYW1lID0gJ0FwcGxpY2F0aW9uJztcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgbGV0IHsgcm91dGVNYW5hZ2VyLCBkYXRhU291cmNlIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgcm91dGU6IG5ldyBSb3V0ZShyb3V0ZU1hbmFnZXIpLFxuICAgICAgICAgICAgc3dhcGk6IG5ldyBTV0FQSShkYXRhU291cmNlLCBwcm9wcy5zc3IpLFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbmRlciB0aGUgYXBwbGljYXRpb25cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1ZOb2RlfVxuICAgICAqL1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IHsgcm91dGUsIHN3YXBpIH0gPSB0aGlzLnN0YXRlO1xuICAgICAgICBsZXQgbW9kdWxlID0gcm91dGUucGFyYW1zLm1vZHVsZTtcbiAgICAgICAgbGV0IHBhZ2U7XG4gICAgICAgIGlmIChtb2R1bGUpIHtcbiAgICAgICAgICAgIGxldCBDb21wb25lbnQgPSBtb2R1bGUuZGVmYXVsdDtcbiAgICAgICAgICAgIGxldCBwcm9wcyA9IHsgcm91dGUsIHN3YXBpIH07XG4gICAgICAgICAgICBwYWdlID0gPENvbXBvbmVudCB7Li4ucHJvcHN9IC8+O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxOYXZCYXIgcm91dGU9e3JvdXRlfSAvPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudHNcIj5cbiAgICAgICAgICAgICAgICAgICAge3BhZ2V9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBZGRlZCBjaGFuZ2UgaGFuZGxlcnMgd2hlbiBjb21wb25lbnQgbW91bnRzXG4gICAgICovXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIGxldCB7IHJvdXRlTWFuYWdlciwgZGF0YVNvdXJjZSB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgcm91dGVNYW5hZ2VyLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHRoaXMuaGFuZGxlUm91dGVDaGFuZ2UpO1xuICAgICAgICBkYXRhU291cmNlLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHRoaXMuaGFuZGxlRGF0YVNvdXJjZUNoYW5nZSk7XG5cbiAgICAgICAgdmFyIGJvZHkgPSBkb2N1bWVudC5ib2R5O1xuICAgICAgICBib2R5LmNsYXNzTmFtZSA9IGJvZHkuY2xhc3NOYW1lLnJlcGxhY2UoL1xccypzc3IvLCAnJyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlIGNoYW5nZSBoYW5kbGVycyB3aGVuIGNvbXBvbmVudCBtb3VudHNcbiAgICAgKi9cbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgICAgbGV0IHsgcm91dGVNYW5hZ2VyLCBkYXRhU291cmNlIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICByb3V0ZU1hbmFnZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhpcy5oYW5kbGVSb3V0ZUNoYW5nZSk7XG4gICAgICAgIGRhdGFTb3VyY2UucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhpcy5oYW5kbGVEYXRhU291cmNlQ2hhbmdlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDYWxsZWQgd2hlbiB0aGUgZGF0YSBzb3VyY2UgY2hhbmdlc1xuICAgICAqXG4gICAgICogQHBhcmFtICB7UmVsYWtzRGphbmdvRGF0YVNvdXJjZUV2ZW50fSBldnRcbiAgICAgKi9cbiAgICBoYW5kbGVEYXRhU291cmNlQ2hhbmdlID0gKGV2dCkgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgc3dhcGk6IG5ldyBTV0FQSShldnQudGFyZ2V0KSB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDYWxsZWQgd2hlbiB0aGUgcm91dGUgY2hhbmdlc1xuICAgICAqXG4gICAgICogQHBhcmFtICB7UmVsYWtzUm91dGVNYW5hZ2VyRXZlbnR9IGV2dFxuICAgICAqL1xuICAgIGhhbmRsZVJvdXRlQ2hhbmdlID0gKGV2dCkgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgcm91dGU6IG5ldyBSb3V0ZShldnQudGFyZ2V0KSB9KTtcbiAgICB9XG59XG5cbmV4cG9ydCB7XG4gICAgQXBwbGljYXRpb24gYXMgZGVmYXVsdCxcbiAgICBBcHBsaWNhdGlvblxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcGxpY2F0aW9uLmpzeCIsImltcG9ydCAncHJlYWN0L2RldnRvb2xzJztcbmltcG9ydCB7IGgsIHJlbmRlciB9IGZyb20gJ3ByZWFjdCc7XG5pbXBvcnQgeyBBcHBsaWNhdGlvbiB9IGZyb20gJ2FwcGxpY2F0aW9uJztcbmltcG9ydCB7IHJvdXRlcyB9IGZyb20gJ3JvdXRlcyc7XG5pbXBvcnQgRGphbmdvRGF0YVNvdXJjZSBmcm9tICdyZWxha3MtZGphbmdvLWRhdGEtc291cmNlJztcbmltcG9ydCBSb3V0ZU1hbmFnZXIgZnJvbSAncmVsYWtzLXJvdXRlLW1hbmFnZXInO1xuaW1wb3J0IHsgaGFydmVzdCB9IGZyb20gJ3JlbGFrcy1oYXJ2ZXN0L3ByZWFjdCc7XG5cbnZhciBkYXRhU291cmNlQmFzZVVSTCA9ICcvc3RhcndhcnMvYXBpJztcbnZhciBwYWdlQmFzZVBhdGggPSAnL3N0YXJ3YXJzJztcblxuaWYgKHR5cGVvZih3aW5kb3cpID09PSAnb2JqZWN0Jykge1xuICAgIGFzeW5jIGZ1bmN0aW9uIGluaXRpYWxpemUoZXZ0KSB7XG4gICAgICAgIC8vIGNyZWF0ZSBkYXRhIHNvdXJjZVxuICAgICAgICBsZXQgZGF0YVNvdXJjZSA9IG5ldyBEamFuZ29EYXRhU291cmNlKHtcbiAgICAgICAgICAgIGJhc2VVUkw6IGRhdGFTb3VyY2VCYXNlVVJMLFxuICAgICAgICB9KTtcbiAgICAgICAgYXdhaXQgZGF0YVNvdXJjZS5pbml0aWFsaXplKCk7XG5cbiAgICAgICAgLy8gY3JlYXRlIHJvdXRlIG1hbmFnZXJcbiAgICAgICAgbGV0IHJvdXRlTWFuYWdlciA9IG5ldyBSb3V0ZU1hbmFnZXIoe1xuICAgICAgICAgICAgcm91dGVzLFxuICAgICAgICAgICAgYmFzZVBhdGg6IHBhZ2VCYXNlUGF0aCxcbiAgICAgICAgfSk7XG4gICAgICAgIGF3YWl0IHJvdXRlTWFuYWdlci5pbml0aWFsaXplKCk7XG5cbiAgICAgICAgbGV0IGFwcENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAtY29udGFpbmVyJyk7XG4gICAgICAgIGlmICghYXBwQ29udGFpbmVyKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1VuYWJsZSB0byBmaW5kIGFwcCBlbGVtZW50IGluIERPTScpO1xuICAgICAgICB9XG4gICAgICAgIGxldCBhcHBFbGVtZW50ID0gaChBcHBsaWNhdGlvbiwgeyBkYXRhU291cmNlLCByb3V0ZU1hbmFnZXIgfSk7XG4gICAgICAgIGF3YWl0IGhhcnZlc3QoYXBwRWxlbWVudCk7XG4gICAgICAgIHJlbmRlcihhcHBFbGVtZW50LCBhcHBDb250YWluZXIsIGFwcENvbnRhaW5lci5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGluaXRpYWxpemUpO1xufSBlbHNlIHtcbiAgICBhc3luYyBmdW5jdGlvbiBzZXJ2ZXJTaWRlUmVuZGVyKG9wdGlvbnMpIHtcbiAgICAgICAgbGV0IGRhdGFTb3VyY2UgPSBuZXcgRGphbmdvRGF0YVNvdXJjZSh7XG4gICAgICAgICAgICBiYXNlVVJMOiBgJHtvcHRpb25zLmhvc3R9JHtkYXRhU291cmNlQmFzZVVSTH1gLFxuICAgICAgICB9KTtcbiAgICAgICAgYXdhaXQgZGF0YVNvdXJjZS5pbml0aWFsaXplKCk7XG5cbiAgICAgICAgbGV0IHJvdXRlTWFuYWdlciA9IG5ldyBSb3V0ZU1hbmFnZXIoe1xuICAgICAgICAgICAgcm91dGVzLFxuICAgICAgICAgICAgYmFzZVBhdGg6IHBhZ2VCYXNlUGF0aCxcbiAgICAgICAgICAgIGluaXRpYWxQYXRoOiBvcHRpb25zLnBhdGgsXG4gICAgICAgIH0pO1xuICAgICAgICBhd2FpdCByb3V0ZU1hbmFnZXIuaW5pdGlhbGl6ZSgpO1xuXG4gICAgICAgIGxldCBhcHBFbGVtZW50ID0gaChBcHBsaWNhdGlvbiwgeyBkYXRhU291cmNlLCByb3V0ZU1hbmFnZXIsIHNzcjogb3B0aW9ucy50YXJnZXQgfSk7XG4gICAgICAgIHJldHVybiBoYXJ2ZXN0KGFwcEVsZW1lbnQpO1xuICAgIH1cblxuICAgIGV4cG9ydHMucmVuZGVyID0gc2VydmVyU2lkZVJlbmRlcjtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL21haW4uanMiLCJjbGFzcyBSb3V0ZSB7XG4gICAgY29uc3RydWN0b3Iocm91dGVNYW5hZ2VyKSB7XG4gICAgICAgIHRoaXMucm91dGVNYW5hZ2VyID0gcm91dGVNYW5hZ2VyO1xuICAgICAgICB0aGlzLm5hbWUgPSByb3V0ZU1hbmFnZXIubmFtZTtcbiAgICAgICAgdGhpcy5wYXJhbXMgPSByb3V0ZU1hbmFnZXIucGFyYW1zO1xuICAgICAgICB0aGlzLmhpc3RvcnkgPSByb3V0ZU1hbmFnZXIuaGlzdG9yeTtcbiAgICB9XG5cbiAgICBjaGFuZ2UodXJsLCBvcHRpb25zKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJvdXRlTWFuYWdlci5jaGFuZ2UodXJsLCBvcHRpb25zKTtcbiAgICB9XG5cbiAgICBmaW5kKG5hbWUsIHBhcmFtcykge1xuICAgICAgICByZXR1cm4gdGhpcy5yb3V0ZU1hbmFnZXIuZmluZChuYW1lLCBwYXJhbXMpO1xuICAgIH1cblxuICAgIGV4dHJhY3RJRCh1cmwpIHtcbiAgICAgICAgdmFyIHNpID0gdXJsLmxhc3RJbmRleE9mKCcvJyk7XG4gICAgICAgIHZhciBlaTtcbiAgICAgICAgaWYgKHNpID09PSB1cmwubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgZWkgPSBzaTtcbiAgICAgICAgICAgIHNpID0gdXJsLmxhc3RJbmRleE9mKCcvJywgZWkgLSAxKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgdGV4dCA9IHVybC5zdWJzdHJpbmcoc2kgKyAxLCBlaSk7XG4gICAgICAgIHJldHVybiBwYXJzZUludCh0ZXh0KTtcbiAgICB9XG59XG5cbmxldCByb3V0ZXMgPSB7XG4gICAgJ3dlbGNvbWUnOiB7XG4gICAgICAgIHBhdGg6ICcvJyxcbiAgICAgICAgbG9hZDogYXN5bmMgKHBhcmFtcykgPT4ge1xuICAgICAgICAgICAgcGFyYW1zLm1vZHVsZSA9IGF3YWl0IGltcG9ydCgncGFnZXMvd2VsY29tZS1wYWdlJyAvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcIndlbGNvbWUtcGFnZVwiICovKTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgJ2ZpbG0tbGlzdCc6IHtcbiAgICAgICAgcGF0aDogJy9maWxtcy8nLFxuICAgICAgICBsb2FkOiBhc3luYyAocGFyYW1zKSA9PiB7XG4gICAgICAgICAgICBwYXJhbXMubW9kdWxlID0gYXdhaXQgaW1wb3J0KCdwYWdlcy9maWxtLWxpc3QnIC8qIHdlYnBhY2tDaHVua05hbWU6IFwiZmlsbS1saXN0XCIgKi8pO1xuICAgICAgICB9XG4gICAgfSxcbiAgICAnZmlsbS1zdW1tYXJ5Jzoge1xuICAgICAgICBwYXRoOiAnL2ZpbG1zLyR7aWR9LycsXG4gICAgICAgIHBhcmFtczogeyBpZDogTnVtYmVyIH0sXG4gICAgICAgIGxvYWQ6IGFzeW5jIChwYXJhbXMpID0+IHtcbiAgICAgICAgICAgIHBhcmFtcy5tb2R1bGUgPSBhd2FpdCBpbXBvcnQoJ3BhZ2VzL2ZpbG0tcGFnZScgLyogd2VicGFja0NodW5rTmFtZTogXCJmaWxtLXBhZ2VcIiAqLyk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgICdjaGFyYWN0ZXItbGlzdCc6IHtcbiAgICAgICAgcGF0aDogJy9jaGFyYWN0ZXJzLycsXG4gICAgICAgIGxvYWQ6IGFzeW5jIChwYXJhbXMpID0+IHtcbiAgICAgICAgICAgIHBhcmFtcy5tb2R1bGUgPSBhd2FpdCBpbXBvcnQoJ3BhZ2VzL2NoYXJhY3Rlci1saXN0JyAvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcImNoYXJhY3Rlci1saXN0XCIgKi8pO1xuICAgICAgICB9XG4gICAgfSxcbiAgICAnY2hhcmFjdGVyLXN1bW1hcnknOiB7XG4gICAgICAgIHBhdGg6ICcvY2hhcmFjdGVycy8ke2lkfS8nLFxuICAgICAgICBwYXJhbXM6IHsgaWQ6IE51bWJlciB9LFxuICAgICAgICBsb2FkOiBhc3luYyAocGFyYW1zKSA9PiB7XG4gICAgICAgICAgICBwYXJhbXMubW9kdWxlID0gYXdhaXQgaW1wb3J0KCdwYWdlcy9jaGFyYWN0ZXItcGFnZScgLyogd2VicGFja0NodW5rTmFtZTogXCJjaGFyYWN0ZXItcGFnZVwiICovKTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgJ3BsYW5ldC1saXN0Jzoge1xuICAgICAgICBwYXRoOiAnL3BsYW5ldHMvJyxcbiAgICAgICAgbG9hZDogYXN5bmMgKHBhcmFtcykgPT4ge1xuICAgICAgICAgICAgcGFyYW1zLm1vZHVsZSA9IGF3YWl0IGltcG9ydCgncGFnZXMvcGxhbmV0LWxpc3QnIC8qIHdlYnBhY2tDaHVua05hbWU6IFwicGxhbmV0LWxpc3RcIiAqLyk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgICdwbGFuZXQtc3VtbWFyeSc6IHtcbiAgICAgICAgcGF0aDogJy9wbGFuZXRzLyR7aWR9LycsXG4gICAgICAgIHBhcmFtczogeyBpZDogTnVtYmVyIH0sXG4gICAgICAgIGxvYWQ6IGFzeW5jIChwYXJhbXMpID0+IHtcbiAgICAgICAgICAgIHBhcmFtcy5tb2R1bGUgPSBhd2FpdCBpbXBvcnQoJ3BhZ2VzL3BsYW5ldC1wYWdlJyAvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcInBsYW5ldC1wYWdlXCIgKi8pO1xuICAgICAgICB9XG4gICAgfSxcbiAgICAnc3BlY2llcy1saXN0Jzoge1xuICAgICAgICBwYXRoOiAnL3NwZWNpZXMvJyxcbiAgICAgICAgbG9hZDogYXN5bmMgKHBhcmFtcykgPT4ge1xuICAgICAgICAgICAgcGFyYW1zLm1vZHVsZSA9IGF3YWl0IGltcG9ydCgncGFnZXMvc3BlY2llcy1saXN0JyAvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcInNwZWNpZXMtbGlzdFwiICovKTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgJ3NwZWNpZXMtc3VtbWFyeSc6IHtcbiAgICAgICAgcGF0aDogJy9zcGVjaWVzLyR7aWR9LycsXG4gICAgICAgIHBhcmFtczogeyBpZDogTnVtYmVyIH0sXG4gICAgICAgIGxvYWQ6IGFzeW5jIChwYXJhbXMpID0+IHtcbiAgICAgICAgICAgIHBhcmFtcy5tb2R1bGUgPSBhd2FpdCBpbXBvcnQoJ3BhZ2VzL3NwZWNpZXMtcGFnZScgLyogd2VicGFja0NodW5rTmFtZTogXCJzcGVjaWVzLXBhZ2VcIiAqLyk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgICd2ZWhpY2xlLWxpc3QnOiB7XG4gICAgICAgIHBhdGg6ICcvdmVoaWNsZXMvJyxcbiAgICAgICAgbG9hZDogYXN5bmMgKHBhcmFtcykgPT4ge1xuICAgICAgICAgICAgcGFyYW1zLm1vZHVsZSA9IGF3YWl0IGltcG9ydCgncGFnZXMvdmVoaWNsZS1saXN0JyAvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcInZlaGljbGUtbGlzdFwiICovKTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgJ3ZlaGljbGUtc3VtbWFyeSc6IHtcbiAgICAgICAgcGF0aDogJy92ZWhpY2xlcy8ke2lkfS8nLFxuICAgICAgICBwYXJhbXM6IHsgaWQ6IE51bWJlciB9LFxuICAgICAgICBsb2FkOiBhc3luYyAocGFyYW1zKSA9PiB7XG4gICAgICAgICAgICBwYXJhbXMubW9kdWxlID0gYXdhaXQgaW1wb3J0KCdwYWdlcy92ZWhpY2xlLXBhZ2UnIC8qIHdlYnBhY2tDaHVua05hbWU6IFwidmVoaWNsZS1wYWdlXCIgKi8pO1xuICAgICAgICB9XG4gICAgfSxcbiAgICAnc3RhcnNoaXAtbGlzdCc6IHtcbiAgICAgICAgcGF0aDogJy9zdGFyc2hpcHMvJyxcbiAgICAgICAgbG9hZDogYXN5bmMgKHBhcmFtcykgPT4ge1xuICAgICAgICAgICAgcGFyYW1zLm1vZHVsZSA9IGF3YWl0IGltcG9ydCgncGFnZXMvc3RhcnNoaXAtbGlzdCcgLyogd2VicGFja0NodW5rTmFtZTogXCJzdGFyc2hpcC1saXN0XCIgKi8pO1xuICAgICAgICB9XG4gICAgfSxcbiAgICAnc3RhcnNoaXAtc3VtbWFyeSc6IHtcbiAgICAgICAgcGF0aDogJy9zdGFyc2hpcC8ke2lkfS8nLFxuICAgICAgICBwYXJhbXM6IHsgaWQ6IE51bWJlciB9LFxuICAgICAgICBsb2FkOiBhc3luYyAocGFyYW1zKSA9PiB7XG4gICAgICAgICAgICBwYXJhbXMubW9kdWxlID0gYXdhaXQgaW1wb3J0KCdwYWdlcy9zdGFyc2hpcC1wYWdlJyAvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcInN0YXJzaGlwLXBhZ2VcIiAqLyk7XG4gICAgICAgIH1cbiAgICB9LFxufTtcblxuZXhwb3J0IHsgUm91dGUsIHJvdXRlcyB9O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcm91dGVzLmpzIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3N0eWxlLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IC4vc3R5bGUuc2Nzc1xuLy8gbW9kdWxlIGNodW5rcyA9IG1haW4iLCJjbGFzcyBTV0FQSSB7XG4gICAgLyoqXG4gICAgICogUmVtZW1iZXIgdGhlIGRhdGEgc291cmNlXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoZGF0YVNvdXJjZSwgc3NyKSB7XG4gICAgICAgIHRoaXMuZGF0YVNvdXJjZSA9IGRhdGFTb3VyY2U7XG4gICAgICAgIHRoaXMuc3NyID0gc3NyO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEZldGNoIG9uZSBvYmplY3QgZnJvbSBkYXRhIHNvdXJjZVxuICAgICAqXG4gICAgICogQHBhcmFtICB7U3RyaW5nfSB1cmxcbiAgICAgKiBAcGFyYW0gIHtPYmplY3R9IG9wdGlvbnNcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8T2JqZWN0Pn1cbiAgICAgKi9cbiAgICBmZXRjaE9uZSh1cmwsIG9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YVNvdXJjZS5mZXRjaE9uZSh1cmwsIG9wdGlvbnMpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEZldGNoIGEgbGlzdCBvZiBvYmplY3RzIGZyb20gZGF0YSBzb3VyY2VcbiAgICAgKlxuICAgICAqIEBwYXJhbSAge1N0cmluZ30gdXJsXG4gICAgICogQHBhcmFtICB7T2JqZWN0fSBvcHRpb25zXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPEFycmF5Pn1cbiAgICAgKi9cbiAgICBmZXRjaExpc3QodXJsLCBvcHRpb25zKSB7XG4gICAgICAgIGlmICh0aGlzLnNzciA9PT0gJ3NlbycpIHtcbiAgICAgICAgICAgIG9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHt9LCBvcHRpb25zLCB7IG1pbmltdW06ICcxMDAlJyB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5kYXRhU291cmNlLmZldGNoTGlzdCh1cmwsIG9wdGlvbnMpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEZldGNoIG11bHRpcGxlIG9iamVjdHMgZnJvbSBkYXRhIHNvdXJjZVxuICAgICAqXG4gICAgICogQHBhcmFtICB7QXJyYXk8U3RyaW5nPn0gdXJsc1xuICAgICAqIEBwYXJhbSAge09iamVjdH0gb3B0aW9uc1xuICAgICAqXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxBcnJheT59XG4gICAgICovXG4gICAgZmV0Y2hNdWx0aXBsZSh1cmxzLCBvcHRpb25zKSB7XG4gICAgICAgIGlmICh0aGlzLnNzciA9PT0gJ3NlbycpIHtcbiAgICAgICAgICAgIG9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHt9LCBvcHRpb25zLCB7IG1pbmltdW06ICcxMDAlJyB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5kYXRhU291cmNlLmZldGNoTXVsdGlwbGUodXJscywgb3B0aW9ucyk7XG4gICAgfVxufVxuXG5leHBvcnQge1xuICAgIFNXQVBJIGFzIGRlZmF1bHQsXG4gICAgU1dBUEksXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3dhcGkuanMiLCJpbXBvcnQgeyBoLCBDb21wb25lbnQgfSBmcm9tICdwcmVhY3QnO1xuXG4vKiogQGpzeCBoICovXG5cbmZ1bmN0aW9uIE5hdkJhcihwcm9wcykge1xuICAgIGxldCB7IHJvdXRlIH0gPSBwcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdi1iYXJcIj5cbiAgICAgICAgICAgIDxCdXR0b24gcGFnZU5hbWU9XCJ3ZWxjb21lXCIgcm91dGU9e3JvdXRlfT5cbiAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYWIgZmEtZW1waXJlXCIgLz5cbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgPEJ1dHRvbiBwYWdlTmFtZT1cImZpbG0tbGlzdFwiIHJvdXRlPXtyb3V0ZX0+XG4gICAgICAgICAgICAgICAgRmlsbXNcbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgPEJ1dHRvbiBwYWdlTmFtZT1cImNoYXJhY3Rlci1saXN0XCIgcm91dGU9e3JvdXRlfT5cbiAgICAgICAgICAgICAgICBDaGFyYWN0ZXJzXG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDxCdXR0b24gcGFnZU5hbWU9XCJwbGFuZXQtbGlzdFwiIHJvdXRlPXtyb3V0ZX0+XG4gICAgICAgICAgICAgICAgUGxhbmV0c1xuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8QnV0dG9uIHBhZ2VOYW1lPVwic3BlY2llcy1saXN0XCIgcm91dGU9e3JvdXRlfT5cbiAgICAgICAgICAgICAgICBTcGVjaWVzXG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDxCdXR0b24gcGFnZU5hbWU9XCJ2ZWhpY2xlLWxpc3RcIiByb3V0ZT17cm91dGV9PlxuICAgICAgICAgICAgICAgIFZlaGljbGVzXG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDxCdXR0b24gcGFnZU5hbWU9XCJzdGFyc2hpcC1saXN0XCIgcm91dGU9e3JvdXRlfT5cbiAgICAgICAgICAgICAgICBTdGFyc2hpcHNcbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuXG5OYXZCYXIuZGlzcGxheU5hbWUgPSAnTmF2QmFyJztcblxuZnVuY3Rpb24gQnV0dG9uKHByb3BzKSB7XG4gICAgbGV0IHsgcm91dGUgfSA9IHByb3BzO1xuICAgIGxldCBsaW5rUHJvcHMgPSB7XG4gICAgICAgIGNsYXNzTmFtZTogJ2J1dHRvbicsXG4gICAgICAgIGhyZWY6IHJvdXRlLmZpbmQocHJvcHMucGFnZU5hbWUpLFxuICAgIH07XG4gICAgcmV0dXJuIDxhIHsuLi5saW5rUHJvcHN9Pntwcm9wcy5jaGlsZHJlbn08L2E+O1xufVxuXG5CdXR0b24uZGlzcGxheU5hbWUgPSAnQnV0dG9uJztcblxuZXhwb3J0IHtcbiAgICBOYXZCYXIgYXMgZGVmYXVsdCxcbiAgICBOYXZCYXJcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi93aWRnZXRzL25hdi1iYXIuanN4Il0sInNvdXJjZVJvb3QiOiIifQ==