exports.ids = ["film-page"];
exports.modules = {

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

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9maWxtLXBhZ2UuanN4Iiwid2VicGFjazovLy8uL3dpZGdldHMvbGlzdC5qc3giLCJ3ZWJwYWNrOi8vLy4vd2lkZ2V0cy9sb2FkaW5nLmpzeCJdLCJuYW1lcyI6WyJGaWxtUGFnZSIsIm1lYW53aGlsZSIsInByb3BzIiwicm91dGUiLCJzd2FwaSIsImZpbG0iLCJjaGFyYWN0ZXJzIiwicGxhbmV0cyIsInNwZWNpZXMiLCJ2ZWhpY2xlcyIsInN0YXJzaGlwcyIsInNob3ciLCJmZXRjaE9uZSIsInBhcmFtcyIsImlkIiwiZmV0Y2hNdWx0aXBsZSIsInBhcnRpYWwiLCJBc3luY0NvbXBvbmVudCIsImRpc3BsYXlOYW1lIiwiRmlsbVBhZ2VTeW5jIiwidGl0bGUiLCJvcGVuaW5nX2NyYXdsIiwiZGlyZWN0b3IiLCJwcm9kdWNlciIsInJlbGVhc2VfZGF0ZSIsIkNvbXBvbmVudCIsImRlZmF1bHQiLCJMaXN0IiwidXJscyIsIml0ZW1zIiwiZmllbGQiLCJwYWdlTmFtZSIsInVybCIsInBlbmRpbmciLCJBcnJheSIsIm1hcCIsImluZGV4IiwiaXRlbSIsImxlbmd0aCIsImV4dHJhY3RJRCIsImZpbmQiLCJ0ZXh0IiwibGlua1Byb3BzIiwiaHJlZiIsImNsYXNzTmFtZSIsInVuZGVmaW5lZCIsImRlZmF1bHRQcm9wcyIsIkxvYWRpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7QUFFQTs7SUFFTUEsUTs7Ozs7Ozs7Ozs7O0FBR0Y7Ozs7Ozs7O2lIQU9rQkMsUzs7Ozs7Ozt5Q0FDUyxLQUFLQyxLLEVBQXRCQyxLLFVBQUFBLEssRUFBT0MsSyxVQUFBQSxLO0FBQ1RGLHFDLEdBQVE7QUFDUkcsMENBQU0sSUFERTtBQUVSQyxnREFBWSxJQUZKO0FBR1JDLDZDQUFTLElBSEQ7QUFJUkMsNkNBQVMsSUFKRDtBQUtSQyw4Q0FBVSxJ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O0FBQUk7QUFBQTtBQUFPSCw2QkFBUDtBQUFtQkQ7QUFBbkI7QUFBSixhQUFQO0FBQ0gsU0FURDtBQUZKLEtBREo7QUFnQkg7O0FBRURkLEtBQUttQixZQUFMLEdBQW9CO0FBQ2hCaEIsV0FBTztBQURTLENBQXBCOztBQUlBSCxLQUFLVCxXQUFMLEdBQW1CLE1BQW5COztRQUdZUSxPLEdBQVJDLEk7UUFDQUEsSSxHQUFBQSxJOzs7Ozs7Ozs7Ozs7Ozs7QUN2REo7O0FBRUE7O0FBRUEsU0FBU29CLE9BQVQsR0FBbUI7QUFDZixXQUNJO0FBQUE7QUFBQSxVQUFLLFdBQVUsU0FBZjtBQUNJO0FBQUE7QUFBQTtBQUNJLGtDQUFHLFdBQVUsdUJBQWIsR0FESjtBQUFBO0FBQUE7QUFESixLQURKO0FBT0g7O0FBRURBLFFBQVE3QixXQUFSLEdBQXNCLFNBQXRCOztRQUdlUSxPLEdBQVhxQixPO1FBQ0FBLE8sR0FBQUEsTyIsImZpbGUiOiJmaWxtLXBhZ2UuYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaCwgQ29tcG9uZW50IH0gZnJvbSAncHJlYWN0JztcbmltcG9ydCB7IEFzeW5jQ29tcG9uZW50IH0gZnJvbSAncmVsYWtzL3ByZWFjdCc7XG5pbXBvcnQgeyBMaXN0IH0gZnJvbSAnd2lkZ2V0cy9saXN0JztcbmltcG9ydCBMb2FkaW5nIGZyb20gJ3dpZGdldHMvbG9hZGluZyc7XG5cbi8qKiBAanN4IGggKi9cblxuY2xhc3MgRmlsbVBhZ2UgZXh0ZW5kcyBBc3luY0NvbXBvbmVudCB7XG4gICAgc3RhdGljIGRpc3BsYXlOYW1lID0gJ0ZpbG1QYWdlJztcblxuICAgIC8qKlxuICAgICAqIFJldHJpZXZlIHJlbW90ZSBkYXRhIGFuZCByZW5kZXIgdGhlIHN5bmNocm9uaXplIGhhbGYgb2YgdGhpcyBjb21wb25lbnRcbiAgICAgKlxuICAgICAqIEBwYXJhbSAge01lYW53aGlsZX0gIG1lYW53aGlsZVxuICAgICAqXG4gICAgICogQHJldHVybiB7Vk5vZGV9XG4gICAgICovXG4gICAgYXN5bmMgcmVuZGVyQXN5bmMobWVhbndoaWxlKSB7XG4gICAgICAgIGxldCB7IHJvdXRlLCBzd2FwaSB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgbGV0IHByb3BzID0ge1xuICAgICAgICAgICAgZmlsbTogbnVsbCxcbiAgICAgICAgICAgIGNoYXJhY3RlcnM6IG51bGwsXG4gICAgICAgICAgICBwbGFuZXRzOiBudWxsLFxuICAgICAgICAgICAgc3BlY2llczogbnVsbCxcbiAgICAgICAgICAgIHZlaGljbGVzOiBudWxsLFxuICAgICAgICAgICAgc3RhcnNoaXBzOiBudWxsLFxuICAgICAgICAgICAgcm91dGU6IHJvdXRlLFxuICAgICAgICB9O1xuICAgICAgICBtZWFud2hpbGUuc2hvdyg8RmlsbVBhZ2VTeW5jIHsuLi5wcm9wc30gLz4pO1xuICAgICAgICBwcm9wcy5maWxtID0gYXdhaXQgc3dhcGkuZmV0Y2hPbmUoYC9maWxtcy8ke3JvdXRlLnBhcmFtcy5pZH0vYCk7XG4gICAgICAgIG1lYW53aGlsZS5zaG93KDxGaWxtUGFnZVN5bmMgey4uLnByb3BzfSAvPik7XG4gICAgICAgIHByb3BzLmNoYXJhY3RlcnMgPSBhd2FpdCBzd2FwaS5mZXRjaE11bHRpcGxlKHByb3BzLmZpbG0uY2hhcmFjdGVycywgeyBwYXJ0aWFsOiA1IH0pO1xuICAgICAgICBtZWFud2hpbGUuc2hvdyg8RmlsbVBhZ2VTeW5jIHsuLi5wcm9wc30gLz4pO1xuICAgICAgICBwcm9wcy5zcGVjaWVzID0gYXdhaXQgc3dhcGkuZmV0Y2hNdWx0aXBsZShwcm9wcy5maWxtLnNwZWNpZXMsIHsgcGFydGlhbDogMC40IH0pO1xuICAgICAgICBtZWFud2hpbGUuc2hvdyg8RmlsbVBhZ2VTeW5jIHsuLi5wcm9wc30gLz4pO1xuICAgICAgICBwcm9wcy5wbGFuZXRzID0gYXdhaXQgc3dhcGkuZmV0Y2hNdWx0aXBsZShwcm9wcy5maWxtLnBsYW5ldHMpO1xuICAgICAgICBtZWFud2hpbGUuc2hvdyg8RmlsbVBhZ2VTeW5jIHsuLi5wcm9wc30gLz4pO1xuICAgICAgICBwcm9wcy52ZWhpY2xlcyA9IGF3YWl0IHN3YXBpLmZldGNoTXVsdGlwbGUocHJvcHMuZmlsbS52ZWhpY2xlcywgeyBwYXJ0aWFsOiAwLjQgfSk7XG4gICAgICAgIG1lYW53aGlsZS5zaG93KDxGaWxtUGFnZVN5bmMgey4uLnByb3BzfSAvPik7XG4gICAgICAgIHByb3BzLnN0YXJzaGlwcyA9IGF3YWl0IHN3YXBpLmZldGNoTXVsdGlwbGUocHJvcHMuZmlsbS5zdGFyc2hpcHMsIHsgcGFydGlhbDogMC40IH0pO1xuICAgICAgICByZXR1cm4gPEZpbG1QYWdlU3luYyB7Li4ucHJvcHN9IC8+O1xuICAgIH1cbn1cblxuY2xhc3MgRmlsbVBhZ2VTeW5jIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgZGlzcGxheU5hbWUgPSAnRmlsbVBhZ2VTeW5jJztcblxuICAgIC8qKlxuICAgICAqIFJlbmRlciB0aGUgY29tcG9uZW50LCBtYWtpbmcgYmVzdCBlZmZvcnQgdXNpbmcgd2hhdCBwcm9wcyBhcmUgZ2l2ZW5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1ZOb2RlfVxuICAgICAqL1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IHsgcm91dGUsIGZpbG0sIGNoYXJhY3RlcnMsIHNwZWNpZXMsIHBsYW5ldHMsIHZlaGljbGVzLCBzdGFyc2hpcHMgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGlmICghZmlsbSkge1xuICAgICAgICAgICAgcmV0dXJuIDxMb2FkaW5nIC8+O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoYXJhY3Rlci1wYWdlXCI+XG4gICAgICAgICAgICAgICAgPGgxPntmaWxtLnRpdGxlfTwvaDE+XG4gICAgICAgICAgICAgICAgPHA+e2ZpbG0ub3BlbmluZ19jcmF3bH08L3A+XG4gICAgICAgICAgICAgICAgPGRpdj5EaXJlY3Rvcjoge2ZpbG0uZGlyZWN0b3J9PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdj5Qcm9kdWNlcjoge2ZpbG0ucHJvZHVjZXJ9PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdj5SZWxlYXNlIGRhdGU6IHtmaWxtLnJlbGVhc2VfZGF0ZX08L2Rpdj5cbiAgICAgICAgICAgICAgICA8aDI+Q2hhcmFjdGVyczwvaDI+XG4gICAgICAgICAgICAgICAgPExpc3QgdXJscz17ZmlsbS5jaGFyYWN0ZXJzfSBpdGVtcz17Y2hhcmFjdGVyc30gcGFnZU5hbWU9XCJjaGFyYWN0ZXItc3VtbWFyeVwiIHJvdXRlPXtyb3V0ZX0gLz5cbiAgICAgICAgICAgICAgICA8aDI+U3BlY2llczwvaDI+XG4gICAgICAgICAgICAgICAgPExpc3QgdXJscz17ZmlsbS5zcGVjaWVzfSBpdGVtcz17c3BlY2llc30gcGFnZU5hbWU9XCJzcGVjaWVzLXN1bW1hcnlcIiByb3V0ZT17cm91dGV9IC8+XG4gICAgICAgICAgICAgICAgPGgyPlBsYW5ldHM8L2gyPlxuICAgICAgICAgICAgICAgIDxMaXN0IHVybHM9e2ZpbG0ucGxhbmV0c30gaXRlbXM9e3BsYW5ldHN9IHBhZ2VOYW1lPVwicGxhbmV0LXN1bW1hcnlcIiByb3V0ZT17cm91dGV9IC8+XG4gICAgICAgICAgICAgICAgPGgyPlZlaGljbGVzPC9oMj5cbiAgICAgICAgICAgICAgICA8TGlzdCB1cmxzPXtmaWxtLnZlaGljbGVzfSBpdGVtcz17dmVoaWNsZXN9IHBhZ2VOYW1lPVwidmVoaWNsZS1zdW1tYXJ5XCIgcm91dGU9e3JvdXRlfSAvPlxuICAgICAgICAgICAgICAgIDxoMj5TdGFyc2hpcHM8L2gyPlxuICAgICAgICAgICAgICAgIDxMaXN0IHVybHM9e2ZpbG0uc3RhcnNoaXBzfSBpdGVtcz17c3RhcnNoaXBzfSBwYWdlTmFtZT1cInN0YXJzaGlwLXN1bW1hcnlcIiByb3V0ZT17cm91dGV9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCB7XG4gICAgRmlsbVBhZ2UgYXMgZGVmYXVsdCxcbiAgICBGaWxtUGFnZSxcbiAgICBGaWxtUGFnZVN5bmMsXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXMvZmlsbS1wYWdlLmpzeCIsImltcG9ydCB7IGgsIENvbXBvbmVudCB9IGZyb20gJ3ByZWFjdCc7XG5cbi8qKiBAanN4IGggKi9cblxuZnVuY3Rpb24gTGlzdChwcm9wcykge1xuICAgIGxldCB7IHJvdXRlLCB1cmxzLCBpdGVtcywgZmllbGQsIHBhZ2VOYW1lIH0gPSBwcm9wcztcbiAgICBpZiAodXJscykge1xuICAgICAgICBpZiAodHlwZW9mKHVybHMpID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgaWYgKGl0ZW1zKSB7XG4gICAgICAgICAgICAgICAgaXRlbXMgPSBbIGl0ZW1zIF07XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGl0ZW1zID0gWyB7IHVybDogdXJscywgcGVuZGluZzogdHJ1ZSB9IF07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAodXJscyBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgICAgICBpdGVtcyA9IHVybHMubWFwKCh1cmwsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgdmFyIGl0ZW0gPSAoaXRlbXMpID8gaXRlbXNbaW5kZXhdIDogbnVsbDtcbiAgICAgICAgICAgICAgICBpZiAoIWl0ZW0pIHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbSA9IHsgdXJsLCBwZW5kaW5nOiB0cnVlIH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBpdGVtO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKCFpdGVtcykge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgaWYgKGl0ZW1zLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gPHVsIGNsYXNzTmFtZT1cImVtcHR5XCI+PGxpPjxzcGFuPm5vbmU8L3NwYW4+PC9saT48L3VsPjtcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgICAgPHVsPlxuICAgICAgICB7XG4gICAgICAgICAgICBpdGVtcy5tYXAoKGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgaWQgPSByb3V0ZS5leHRyYWN0SUQoaXRlbS51cmwpO1xuICAgICAgICAgICAgICAgIGxldCB1cmwgPSByb3V0ZS5maW5kKHBhZ2VOYW1lLCB7IGlkIH0pO1xuICAgICAgICAgICAgICAgIGxldCB0ZXh0ID0gaXRlbS5wZW5kaW5nID8gJy4uLicgOiBpdGVtW2ZpZWxkXTtcbiAgICAgICAgICAgICAgICBsZXQgbGlua1Byb3BzID0ge1xuICAgICAgICAgICAgICAgICAgICBocmVmOiB1cmwsXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogKGl0ZW0ucGVuZGluZykgPyAncGVuZGluZycgOiB1bmRlZmluZWQsXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICByZXR1cm4gPGxpPjxhIHsuLi5saW5rUHJvcHN9Pnt0ZXh0fTwvYT48L2xpPjtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgICAgPC91bD5cbiAgICApO1xufVxuXG5MaXN0LmRlZmF1bHRQcm9wcyA9IHtcbiAgICBmaWVsZDogJ25hbWUnXG59O1xuXG5MaXN0LmRpc3BsYXlOYW1lID0gJ0xpc3QnO1xuXG5leHBvcnQge1xuICAgIExpc3QgYXMgZGVmYXVsdCxcbiAgICBMaXN0XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vd2lkZ2V0cy9saXN0LmpzeCIsImltcG9ydCB7IGgsIENvbXBvbmVudCB9IGZyb20gJ3ByZWFjdCc7XG5cbi8qKiBAanN4IGggKi9cblxuZnVuY3Rpb24gTG9hZGluZygpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvYWRpbmdcIj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFiIGZhLWVtcGlyZSBmYS1zcGluXCIvPiBMb2FkaW5nXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cblxuTG9hZGluZy5kaXNwbGF5TmFtZSA9ICdMb2FkaW5nJztcblxuZXhwb3J0IHtcbiAgICBMb2FkaW5nIGFzIGRlZmF1bHQsXG4gICAgTG9hZGluZ1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3dpZGdldHMvbG9hZGluZy5qc3giXSwic291cmNlUm9vdCI6IiJ9