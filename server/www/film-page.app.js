webpackJsonp(["film-page"],{

/***/ "./pages/film-page.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.FilmPageSync = exports.FilmPage = exports.default = undefined;

var _regenerator = __webpack_require__("../node_modules/babel-runtime/regenerator/index.js");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__("../node_modules/babel-runtime/helpers/asyncToGenerator.js");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

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

var _preact2 = __webpack_require__("../node_modules/relaks/preact.js");

var _list = __webpack_require__("./widgets/list.jsx");

var _loading = __webpack_require__("./widgets/loading.jsx");

var _loading2 = _interopRequireDefault(_loading);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** @jsx h */

var FilmPage = function (_AsyncComponent) {
    (0, _inherits3.default)(FilmPage, _AsyncComponent);

    function FilmPage() {
        (0, _classCallCheck3.default)(this, FilmPage);
        return (0, _possibleConstructorReturn3.default)(this, (FilmPage.__proto__ || (0, _getPrototypeOf2.default)(FilmPage)).apply(this, arguments));
    }

    (0, _createClass3.default)(FilmPage, [{
        key: 'renderAsync',


        /**
         * Retrieve remote data and render the synchronize half of this component
         *
         * @param  {Meanwhile}  meanwhile
         *
         * @return {VNode}
         */
        value: function () {
            var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(meanwhile) {
                var _props, route, swapi, props;

                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _props = this.props, route = _props.route, swapi = _props.swapi;
                                props = {
                                    film: null,
                                    characters: null,
                                    planets: null,
                                    species: null,
                                    vehicles: null,
                                    starships: null,
                                    route: route
                                };

                                meanwhile.show((0, _preact.h)(FilmPageSync, props));
                                _context.next = 5;
                                return swapi.fetchOne('/films/' + route.params.id + '/');

                            case 5:
                                props.film = _context.sent;

                                meanwhile.show((0, _preact.h)(FilmPageSync, props));
                                _context.next = 9;
                                return swapi.fetchMultiple(props.film.characters, { partial: 5 });

                            case 9:
                                props.characters = _context.sent;

                                meanwhile.show((0, _preact.h)(FilmPageSync, props));
                                _context.next = 13;
                                return swapi.fetchMultiple(props.film.species, { partial: 0.4 });

                            case 13:
                                props.species = _context.sent;

                                meanwhile.show((0, _preact.h)(FilmPageSync, props));
                                _context.next = 17;
                                return swapi.fetchMultiple(props.film.planets);

                            case 17:
                                props.planets = _context.sent;

                                meanwhile.show((0, _preact.h)(FilmPageSync, props));
                                _context.next = 21;
                                return swapi.fetchMultiple(props.film.vehicles, { partial: 0.4 });

                            case 21:
                                props.vehicles = _context.sent;

                                meanwhile.show((0, _preact.h)(FilmPageSync, props));
                                _context.next = 25;
                                return swapi.fetchMultiple(props.film.starships, { partial: 0.4 });

                            case 25:
                                props.starships = _context.sent;
                                return _context.abrupt('return', (0, _preact.h)(FilmPageSync, props));

                            case 27:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function renderAsync(_x) {
                return _ref.apply(this, arguments);
            }

            return renderAsync;
        }()
    }]);
    return FilmPage;
}(_preact2.AsyncComponent);

FilmPage.displayName = 'FilmPage';

var FilmPageSync = function (_Component) {
    (0, _inherits3.default)(FilmPageSync, _Component);

    function FilmPageSync() {
        (0, _classCallCheck3.default)(this, FilmPageSync);
        return (0, _possibleConstructorReturn3.default)(this, (FilmPageSync.__proto__ || (0, _getPrototypeOf2.default)(FilmPageSync)).apply(this, arguments));
    }

    (0, _createClass3.default)(FilmPageSync, [{
        key: 'render',


        /**
         * Render the component, making best effort using what props are given
         *
         * @return {VNode}
         */
        value: function render() {
            var _props2 = this.props,
                route = _props2.route,
                film = _props2.film,
                characters = _props2.characters,
                species = _props2.species,
                planets = _props2.planets,
                vehicles = _props2.vehicles,
                starships = _props2.starships;

            if (!film) {
                return (0, _preact.h)(_loading2.default, null);
            }
            return (0, _preact.h)(
                'div',
                { className: 'character-page' },
                (0, _preact.h)(
                    'h1',
                    null,
                    film.title
                ),
                (0, _preact.h)(
                    'p',
                    null,
                    film.opening_crawl
                ),
                (0, _preact.h)(
                    'div',
                    null,
                    'Director: ',
                    film.director
                ),
                (0, _preact.h)(
                    'div',
                    null,
                    'Producer: ',
                    film.producer
                ),
                (0, _preact.h)(
                    'div',
                    null,
                    'Release date: ',
                    film.release_date
                ),
                (0, _preact.h)(
                    'h2',
                    null,
                    'Characters'
                ),
                (0, _preact.h)(_list.List, { urls: film.characters, items: characters, pageName: 'character-summary', route: route }),
                (0, _preact.h)(
                    'h2',
                    null,
                    'Species'
                ),
                (0, _preact.h)(_list.List, { urls: film.species, items: species, pageName: 'species-summary', route: route }),
                (0, _preact.h)(
                    'h2',
                    null,
                    'Planets'
                ),
                (0, _preact.h)(_list.List, { urls: film.planets, items: planets, pageName: 'planet-summary', route: route }),
                (0, _preact.h)(
                    'h2',
                    null,
                    'Vehicles'
                ),
                (0, _preact.h)(_list.List, { urls: film.vehicles, items: vehicles, pageName: 'vehicle-summary', route: route }),
                (0, _preact.h)(
                    'h2',
                    null,
                    'Starships'
                ),
                (0, _preact.h)(_list.List, { urls: film.starships, items: starships, pageName: 'starship-summary', route: route })
            );
        }
    }]);
    return FilmPageSync;
}(_preact.Component);

FilmPageSync.displayName = 'FilmPageSync';
exports.default = FilmPage;
exports.FilmPage = FilmPage;
exports.FilmPageSync = FilmPageSync;

/***/ }),

/***/ "./widgets/list.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.List = exports.default = undefined;

var _preact = __webpack_require__("../node_modules/preact/dist/preact.esm.js");

/** @jsx h */

function List(props) {
    var route = props.route,
        urls = props.urls,
        items = props.items,
        field = props.field,
        pageName = props.pageName;

    if (urls) {
        if (typeof urls === 'string') {
            if (items) {
                items = [items];
            } else {
                items = [{ url: urls, pending: true }];
            }
        } else if (urls instanceof Array) {
            items = urls.map(function (url, index) {
                var item = items ? items[index] : null;
                if (!item) {
                    item = { url: url, pending: true };
                }
                return item;
            });
        }
    }
    if (!items) {
        return null;
    }
    if (items.length === 0) {
        return (0, _preact.h)(
            'ul',
            { className: 'empty' },
            (0, _preact.h)(
                'li',
                null,
                (0, _preact.h)(
                    'span',
                    null,
                    'none'
                )
            )
        );
    }
    return (0, _preact.h)(
        'ul',
        null,
        items.map(function (item) {
            var id = route.extractID(item.url);
            var url = route.find(pageName, { id: id });
            var text = item.pending ? '...' : item[field];
            var linkProps = {
                href: url,
                className: item.pending ? 'pending' : undefined
            };
            return (0, _preact.h)(
                'li',
                null,
                (0, _preact.h)(
                    'a',
                    linkProps,
                    text
                )
            );
        })
    );
}

List.defaultProps = {
    field: 'name'
};

List.displayName = 'List';

exports.default = List;
exports.List = List;

/***/ }),

/***/ "./widgets/loading.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Loading = exports.default = undefined;

var _preact = __webpack_require__("../node_modules/preact/dist/preact.esm.js");

/** @jsx h */

function Loading() {
    return (0, _preact.h)(
        "div",
        { className: "loading" },
        (0, _preact.h)(
            "div",
            null,
            (0, _preact.h)("i", { className: "fab fa-empire fa-spin" }),
            " Loading"
        )
    );
}

Loading.displayName = 'Loading';

exports.default = Loading;
exports.Loading = Loading;

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9maWxtLXBhZ2UuanN4Iiwid2VicGFjazovLy8uL3dpZGdldHMvbGlzdC5qc3giLCJ3ZWJwYWNrOi8vLy4vd2lkZ2V0cy9sb2FkaW5nLmpzeCJdLCJuYW1lcyI6WyJGaWxtUGFnZSIsIm1lYW53aGlsZSIsInByb3BzIiwicm91dGUiLCJzd2FwaSIsImZpbG0iLCJjaGFyYWN0ZXJzIiwicGxhbmV0cyIsInNwZWNpZXMiLCJ2ZWhpY2xlcyIsInN0YXJzaGlwcyIsInNob3ciLCJmZXRjaE9uZSIsInBhcmFtcyIsImlkIiwiZmV0Y2hNdWx0aXBsZSIsInBhcnRpYWwiLCJBc3luY0NvbXBvbmVudCIsImRpc3BsYXlOYW1lIiwiRmlsbVBhZ2VTeW5jIiwidGl0bGUiLCJvcGVuaW5nX2NyYXdsIiwiZGlyZWN0b3IiLCJwcm9kdWNlciIsInJlbGVhc2VfZGF0ZSIsIkNvbXBvbmVudCIsImRlZmF1bHQiLCJMaXN0IiwidXJscyIsIml0ZW1zIiwiZmllbGQiLCJwYWdlTmFtZSIsInVybCIsInBlbmRpbmciLCJBcnJheSIsIm1hcCIsImluZGV4IiwiaXRlbSIsImxlbmd0aCIsImV4dHJhY3RJRCIsImZpbmQiLCJ0ZXh0IiwibGlua1Byb3BzIiwiaHJlZiIsImNsYXNzTmFtZSIsInVuZGVmaW5lZCIsImRlZmF1bHRQcm9wcyIsIkxvYWRpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7OztBQUVBOztJQUVNQSxROzs7Ozs7Ozs7Ozs7QUFHRjs7Ozs7Ozs7aUhBT2tCQyxTOzs7Ozs7O3lDQUNTLEtBQUtDLEssRUFBdEJDLEssVUFBQUEsSyxFQUFPQyxLLFVBQUFBLEs7QUFDVEYscUMsR0FBUTtBQUNSRywwQ0FBTSxJQURFO0FBRVJDLGdEQUFZLElBRko7QUFHUkMsNkNBQVMsSUFIRDtBQUlSQyw2Q0FBUyxJQUpEO0FBS1JDLDhDQUFVLElB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QUFBSTtBQUFBO0FBQU9ILDZCQUFQO0FBQW1CRDtBQUFuQjtBQUFKLGFBQVA7QUFDSCxTQVREO0FBRkosS0FESjtBQWdCSDs7QUFFRGQsS0FBS21CLFlBQUwsR0FBb0I7QUFDaEJoQixXQUFPO0FBRFMsQ0FBcEI7O0FBSUFILEtBQUtULFdBQUwsR0FBbUIsTUFBbkI7O1FBR1lRLE8sR0FBUkMsSTtRQUNBQSxJLEdBQUFBLEk7Ozs7Ozs7Ozs7Ozs7OztBQ3ZESjs7QUFFQTs7QUFFQSxTQUFTb0IsT0FBVCxHQUFtQjtBQUNmLFdBQ0k7QUFBQTtBQUFBLFVBQUssV0FBVSxTQUFmO0FBQ0k7QUFBQTtBQUFBO0FBQ0ksa0NBQUcsV0FBVSx1QkFBYixHQURKO0FBQUE7QUFBQTtBQURKLEtBREo7QUFPSDs7QUFFREEsUUFBUTdCLFdBQVIsR0FBc0IsU0FBdEI7O1FBR2VRLE8sR0FBWHFCLE87UUFDQUEsTyxHQUFBQSxPIiwiZmlsZSI6ImZpbG0tcGFnZS5hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBoLCBDb21wb25lbnQgfSBmcm9tICdwcmVhY3QnO1xuaW1wb3J0IHsgQXN5bmNDb21wb25lbnQgfSBmcm9tICdyZWxha3MvcHJlYWN0JztcbmltcG9ydCB7IExpc3QgfSBmcm9tICd3aWRnZXRzL2xpc3QnO1xuaW1wb3J0IExvYWRpbmcgZnJvbSAnd2lkZ2V0cy9sb2FkaW5nJztcblxuLyoqIEBqc3ggaCAqL1xuXG5jbGFzcyBGaWxtUGFnZSBleHRlbmRzIEFzeW5jQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgZGlzcGxheU5hbWUgPSAnRmlsbVBhZ2UnO1xuXG4gICAgLyoqXG4gICAgICogUmV0cmlldmUgcmVtb3RlIGRhdGEgYW5kIHJlbmRlciB0aGUgc3luY2hyb25pemUgaGFsZiBvZiB0aGlzIGNvbXBvbmVudFxuICAgICAqXG4gICAgICogQHBhcmFtICB7TWVhbndoaWxlfSAgbWVhbndoaWxlXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtWTm9kZX1cbiAgICAgKi9cbiAgICBhc3luYyByZW5kZXJBc3luYyhtZWFud2hpbGUpIHtcbiAgICAgICAgbGV0IHsgcm91dGUsIHN3YXBpIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICBsZXQgcHJvcHMgPSB7XG4gICAgICAgICAgICBmaWxtOiBudWxsLFxuICAgICAgICAgICAgY2hhcmFjdGVyczogbnVsbCxcbiAgICAgICAgICAgIHBsYW5ldHM6IG51bGwsXG4gICAgICAgICAgICBzcGVjaWVzOiBudWxsLFxuICAgICAgICAgICAgdmVoaWNsZXM6IG51bGwsXG4gICAgICAgICAgICBzdGFyc2hpcHM6IG51bGwsXG4gICAgICAgICAgICByb3V0ZTogcm91dGUsXG4gICAgICAgIH07XG4gICAgICAgIG1lYW53aGlsZS5zaG93KDxGaWxtUGFnZVN5bmMgey4uLnByb3BzfSAvPik7XG4gICAgICAgIHByb3BzLmZpbG0gPSBhd2FpdCBzd2FwaS5mZXRjaE9uZShgL2ZpbG1zLyR7cm91dGUucGFyYW1zLmlkfS9gKTtcbiAgICAgICAgbWVhbndoaWxlLnNob3coPEZpbG1QYWdlU3luYyB7Li4ucHJvcHN9IC8+KTtcbiAgICAgICAgcHJvcHMuY2hhcmFjdGVycyA9IGF3YWl0IHN3YXBpLmZldGNoTXVsdGlwbGUocHJvcHMuZmlsbS5jaGFyYWN0ZXJzLCB7IHBhcnRpYWw6IDUgfSk7XG4gICAgICAgIG1lYW53aGlsZS5zaG93KDxGaWxtUGFnZVN5bmMgey4uLnByb3BzfSAvPik7XG4gICAgICAgIHByb3BzLnNwZWNpZXMgPSBhd2FpdCBzd2FwaS5mZXRjaE11bHRpcGxlKHByb3BzLmZpbG0uc3BlY2llcywgeyBwYXJ0aWFsOiAwLjQgfSk7XG4gICAgICAgIG1lYW53aGlsZS5zaG93KDxGaWxtUGFnZVN5bmMgey4uLnByb3BzfSAvPik7XG4gICAgICAgIHByb3BzLnBsYW5ldHMgPSBhd2FpdCBzd2FwaS5mZXRjaE11bHRpcGxlKHByb3BzLmZpbG0ucGxhbmV0cyk7XG4gICAgICAgIG1lYW53aGlsZS5zaG93KDxGaWxtUGFnZVN5bmMgey4uLnByb3BzfSAvPik7XG4gICAgICAgIHByb3BzLnZlaGljbGVzID0gYXdhaXQgc3dhcGkuZmV0Y2hNdWx0aXBsZShwcm9wcy5maWxtLnZlaGljbGVzLCB7IHBhcnRpYWw6IDAuNCB9KTtcbiAgICAgICAgbWVhbndoaWxlLnNob3coPEZpbG1QYWdlU3luYyB7Li4ucHJvcHN9IC8+KTtcbiAgICAgICAgcHJvcHMuc3RhcnNoaXBzID0gYXdhaXQgc3dhcGkuZmV0Y2hNdWx0aXBsZShwcm9wcy5maWxtLnN0YXJzaGlwcywgeyBwYXJ0aWFsOiAwLjQgfSk7XG4gICAgICAgIHJldHVybiA8RmlsbVBhZ2VTeW5jIHsuLi5wcm9wc30gLz47XG4gICAgfVxufVxuXG5jbGFzcyBGaWxtUGFnZVN5bmMgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIHN0YXRpYyBkaXNwbGF5TmFtZSA9ICdGaWxtUGFnZVN5bmMnO1xuXG4gICAgLyoqXG4gICAgICogUmVuZGVyIHRoZSBjb21wb25lbnQsIG1ha2luZyBiZXN0IGVmZm9ydCB1c2luZyB3aGF0IHByb3BzIGFyZSBnaXZlblxuICAgICAqXG4gICAgICogQHJldHVybiB7Vk5vZGV9XG4gICAgICovXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQgeyByb3V0ZSwgZmlsbSwgY2hhcmFjdGVycywgc3BlY2llcywgcGxhbmV0cywgdmVoaWNsZXMsIHN0YXJzaGlwcyB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgaWYgKCFmaWxtKSB7XG4gICAgICAgICAgICByZXR1cm4gPExvYWRpbmcgLz47XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hhcmFjdGVyLXBhZ2VcIj5cbiAgICAgICAgICAgICAgICA8aDE+e2ZpbG0udGl0bGV9PC9oMT5cbiAgICAgICAgICAgICAgICA8cD57ZmlsbS5vcGVuaW5nX2NyYXdsfTwvcD5cbiAgICAgICAgICAgICAgICA8ZGl2PkRpcmVjdG9yOiB7ZmlsbS5kaXJlY3Rvcn08L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2PlByb2R1Y2VyOiB7ZmlsbS5wcm9kdWNlcn08L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2PlJlbGVhc2UgZGF0ZToge2ZpbG0ucmVsZWFzZV9kYXRlfTwvZGl2PlxuICAgICAgICAgICAgICAgIDxoMj5DaGFyYWN0ZXJzPC9oMj5cbiAgICAgICAgICAgICAgICA8TGlzdCB1cmxzPXtmaWxtLmNoYXJhY3RlcnN9IGl0ZW1zPXtjaGFyYWN0ZXJzfSBwYWdlTmFtZT1cImNoYXJhY3Rlci1zdW1tYXJ5XCIgcm91dGU9e3JvdXRlfSAvPlxuICAgICAgICAgICAgICAgIDxoMj5TcGVjaWVzPC9oMj5cbiAgICAgICAgICAgICAgICA8TGlzdCB1cmxzPXtmaWxtLnNwZWNpZXN9IGl0ZW1zPXtzcGVjaWVzfSBwYWdlTmFtZT1cInNwZWNpZXMtc3VtbWFyeVwiIHJvdXRlPXtyb3V0ZX0gLz5cbiAgICAgICAgICAgICAgICA8aDI+UGxhbmV0czwvaDI+XG4gICAgICAgICAgICAgICAgPExpc3QgdXJscz17ZmlsbS5wbGFuZXRzfSBpdGVtcz17cGxhbmV0c30gcGFnZU5hbWU9XCJwbGFuZXQtc3VtbWFyeVwiIHJvdXRlPXtyb3V0ZX0gLz5cbiAgICAgICAgICAgICAgICA8aDI+VmVoaWNsZXM8L2gyPlxuICAgICAgICAgICAgICAgIDxMaXN0IHVybHM9e2ZpbG0udmVoaWNsZXN9IGl0ZW1zPXt2ZWhpY2xlc30gcGFnZU5hbWU9XCJ2ZWhpY2xlLXN1bW1hcnlcIiByb3V0ZT17cm91dGV9IC8+XG4gICAgICAgICAgICAgICAgPGgyPlN0YXJzaGlwczwvaDI+XG4gICAgICAgICAgICAgICAgPExpc3QgdXJscz17ZmlsbS5zdGFyc2hpcHN9IGl0ZW1zPXtzdGFyc2hpcHN9IHBhZ2VOYW1lPVwic3RhcnNoaXAtc3VtbWFyeVwiIHJvdXRlPXtyb3V0ZX0gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuZXhwb3J0IHtcbiAgICBGaWxtUGFnZSBhcyBkZWZhdWx0LFxuICAgIEZpbG1QYWdlLFxuICAgIEZpbG1QYWdlU3luYyxcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcy9maWxtLXBhZ2UuanN4IiwiaW1wb3J0IHsgaCwgQ29tcG9uZW50IH0gZnJvbSAncHJlYWN0JztcblxuLyoqIEBqc3ggaCAqL1xuXG5mdW5jdGlvbiBMaXN0KHByb3BzKSB7XG4gICAgbGV0IHsgcm91dGUsIHVybHMsIGl0ZW1zLCBmaWVsZCwgcGFnZU5hbWUgfSA9IHByb3BzO1xuICAgIGlmICh1cmxzKSB7XG4gICAgICAgIGlmICh0eXBlb2YodXJscykgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICBpZiAoaXRlbXMpIHtcbiAgICAgICAgICAgICAgICBpdGVtcyA9IFsgaXRlbXMgXTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaXRlbXMgPSBbIHsgdXJsOiB1cmxzLCBwZW5kaW5nOiB0cnVlIH0gXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmICh1cmxzIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgICAgICAgIGl0ZW1zID0gdXJscy5tYXAoKHVybCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICB2YXIgaXRlbSA9IChpdGVtcykgPyBpdGVtc1tpbmRleF0gOiBudWxsO1xuICAgICAgICAgICAgICAgIGlmICghaXRlbSkge1xuICAgICAgICAgICAgICAgICAgICBpdGVtID0geyB1cmwsIHBlbmRpbmc6IHRydWUgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW07XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoIWl0ZW1zKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBpZiAoaXRlbXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJldHVybiA8dWwgY2xhc3NOYW1lPVwiZW1wdHlcIj48bGk+PHNwYW4+bm9uZTwvc3Bhbj48L2xpPjwvdWw+O1xuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgICA8dWw+XG4gICAgICAgIHtcbiAgICAgICAgICAgIGl0ZW1zLm1hcCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBpZCA9IHJvdXRlLmV4dHJhY3RJRChpdGVtLnVybCk7XG4gICAgICAgICAgICAgICAgbGV0IHVybCA9IHJvdXRlLmZpbmQocGFnZU5hbWUsIHsgaWQgfSk7XG4gICAgICAgICAgICAgICAgbGV0IHRleHQgPSBpdGVtLnBlbmRpbmcgPyAnLi4uJyA6IGl0ZW1bZmllbGRdO1xuICAgICAgICAgICAgICAgIGxldCBsaW5rUHJvcHMgPSB7XG4gICAgICAgICAgICAgICAgICAgIGhyZWY6IHVybCxcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lOiAoaXRlbS5wZW5kaW5nKSA/ICdwZW5kaW5nJyA6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIHJldHVybiA8bGk+PGEgey4uLmxpbmtQcm9wc30+e3RleHR9PC9hPjwvbGk+O1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgICA8L3VsPlxuICAgICk7XG59XG5cbkxpc3QuZGVmYXVsdFByb3BzID0ge1xuICAgIGZpZWxkOiAnbmFtZSdcbn07XG5cbkxpc3QuZGlzcGxheU5hbWUgPSAnTGlzdCc7XG5cbmV4cG9ydCB7XG4gICAgTGlzdCBhcyBkZWZhdWx0LFxuICAgIExpc3Rcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi93aWRnZXRzL2xpc3QuanN4IiwiaW1wb3J0IHsgaCwgQ29tcG9uZW50IH0gZnJvbSAncHJlYWN0JztcblxuLyoqIEBqc3ggaCAqL1xuXG5mdW5jdGlvbiBMb2FkaW5nKCkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9hZGluZ1wiPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYWIgZmEtZW1waXJlIGZhLXNwaW5cIi8+IExvYWRpbmdcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuXG5Mb2FkaW5nLmRpc3BsYXlOYW1lID0gJ0xvYWRpbmcnO1xuXG5leHBvcnQge1xuICAgIExvYWRpbmcgYXMgZGVmYXVsdCxcbiAgICBMb2FkaW5nXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vd2lkZ2V0cy9sb2FkaW5nLmpzeCJdLCJzb3VyY2VSb290IjoiIn0=