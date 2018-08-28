webpackJsonp(["character-page"],{

/***/ "./pages/character-page.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.CharacterPageSync = exports.CharacterPage = exports.default = undefined;

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

var CharacterPage = function (_AsyncComponent) {
    (0, _inherits3.default)(CharacterPage, _AsyncComponent);

    function CharacterPage() {
        (0, _classCallCheck3.default)(this, CharacterPage);
        return (0, _possibleConstructorReturn3.default)(this, (CharacterPage.__proto__ || (0, _getPrototypeOf2.default)(CharacterPage)).apply(this, arguments));
    }

    (0, _createClass3.default)(CharacterPage, [{
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
                                    person: null,
                                    homeworld: null,
                                    films: null,
                                    species: null,
                                    vehicles: null,
                                    starships: null,
                                    route: route
                                };

                                meanwhile.show((0, _preact.h)(CharacterPageSync, props));
                                _context.next = 5;
                                return swapi.fetchOne('/people/' + route.params.id + '/');

                            case 5:
                                props.person = _context.sent;

                                meanwhile.show((0, _preact.h)(CharacterPageSync, props));
                                _context.next = 9;
                                return swapi.fetchMultiple(props.person.films, { partial: 0.4 });

                            case 9:
                                props.films = _context.sent;

                                meanwhile.show((0, _preact.h)(CharacterPageSync, props));
                                _context.next = 13;
                                return swapi.fetchMultiple(props.person.species, { partial: 0.4 });

                            case 13:
                                props.species = _context.sent;

                                meanwhile.show((0, _preact.h)(CharacterPageSync, props));
                                _context.next = 17;
                                return swapi.fetchOne(props.person.homeworld);

                            case 17:
                                props.homeworld = _context.sent;

                                meanwhile.show((0, _preact.h)(CharacterPageSync, props));
                                _context.next = 21;
                                return swapi.fetchMultiple(props.person.vehicles, { partial: 0.4 });

                            case 21:
                                props.vehicles = _context.sent;

                                meanwhile.show((0, _preact.h)(CharacterPageSync, props));
                                _context.next = 25;
                                return swapi.fetchMultiple(props.person.starships, { partial: 0.4 });

                            case 25:
                                props.starships = _context.sent;

                                meanwhile.show((0, _preact.h)(CharacterPageSync, props));
                                return _context.abrupt('return', (0, _preact.h)(CharacterPageSync, props));

                            case 28:
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
    return CharacterPage;
}(_preact2.AsyncComponent);

CharacterPage.displayName = 'CharacterPage';

var CharacterPageSync = function (_Component) {
    (0, _inherits3.default)(CharacterPageSync, _Component);

    function CharacterPageSync() {
        (0, _classCallCheck3.default)(this, CharacterPageSync);
        return (0, _possibleConstructorReturn3.default)(this, (CharacterPageSync.__proto__ || (0, _getPrototypeOf2.default)(CharacterPageSync)).apply(this, arguments));
    }

    (0, _createClass3.default)(CharacterPageSync, [{
        key: 'render',


        /**
         * Render the component, making best effort using what props are given
         *
         * @return {VNode}
         */
        value: function render() {
            var _props2 = this.props,
                route = _props2.route,
                person = _props2.person,
                homeworld = _props2.homeworld,
                films = _props2.films,
                species = _props2.species,
                vehicles = _props2.vehicles,
                starships = _props2.starships;

            if (!person) {
                return (0, _preact.h)(_loading2.default, null);
            }
            return (0, _preact.h)(
                'div',
                { className: 'character-page' },
                (0, _preact.h)(
                    'h1',
                    null,
                    person.name
                ),
                (0, _preact.h)(
                    'div',
                    null,
                    'Height: ',
                    person.height,
                    ' cm'
                ),
                (0, _preact.h)(
                    'div',
                    null,
                    'Mass: ',
                    person.mass,
                    ' kg'
                ),
                (0, _preact.h)(
                    'div',
                    null,
                    'Hair color: ',
                    person.hair_color
                ),
                (0, _preact.h)(
                    'div',
                    null,
                    'Skin color: ',
                    person.skin_color
                ),
                (0, _preact.h)(
                    'div',
                    null,
                    'Hair color: ',
                    person.hair_color
                ),
                (0, _preact.h)(
                    'div',
                    null,
                    'Eye color: ',
                    person.eye_color
                ),
                (0, _preact.h)(
                    'div',
                    null,
                    'Birth year: ',
                    person.birth_year
                ),
                (0, _preact.h)(
                    'h2',
                    null,
                    'Homeworld'
                ),
                (0, _preact.h)(_list.List, { urls: person.homeworld, items: homeworld, pageName: 'planet-summary', route: route }),
                (0, _preact.h)(
                    'h2',
                    null,
                    'Films'
                ),
                (0, _preact.h)(_list.List, { urls: person.films, items: films, field: 'title', pageName: 'film-summary', route: route }),
                (0, _preact.h)(
                    'h2',
                    null,
                    'Species'
                ),
                (0, _preact.h)(_list.List, { urls: person.species, items: species, pageName: 'species-summary', route: route }),
                (0, _preact.h)(
                    'h2',
                    null,
                    'Vehicles'
                ),
                (0, _preact.h)(_list.List, { urls: person.vehicles, items: vehicles, pageName: 'vehicle-summary', route: route }),
                (0, _preact.h)(
                    'h2',
                    null,
                    'Starships'
                ),
                (0, _preact.h)(_list.List, { urls: person.starships, items: starships, pageName: 'starship-summary', route: route })
            );
        }
    }]);
    return CharacterPageSync;
}(_preact.Component);

CharacterPageSync.displayName = 'CharacterPageSync';
exports.default = CharacterPage;
exports.CharacterPage = CharacterPage;
exports.CharacterPageSync = CharacterPageSync;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9jaGFyYWN0ZXItcGFnZS5qc3giLCJ3ZWJwYWNrOi8vLy4vd2lkZ2V0cy9saXN0LmpzeCIsIndlYnBhY2s6Ly8vLi93aWRnZXRzL2xvYWRpbmcuanN4Il0sIm5hbWVzIjpbIkNoYXJhY3RlclBhZ2UiLCJtZWFud2hpbGUiLCJwcm9wcyIsInJvdXRlIiwic3dhcGkiLCJwZXJzb24iLCJob21ld29ybGQiLCJmaWxtcyIsInNwZWNpZXMiLCJ2ZWhpY2xlcyIsInN0YXJzaGlwcyIsInNob3ciLCJmZXRjaE9uZSIsInBhcmFtcyIsImlkIiwiZmV0Y2hNdWx0aXBsZSIsInBhcnRpYWwiLCJBc3luY0NvbXBvbmVudCIsImRpc3BsYXlOYW1lIiwiQ2hhcmFjdGVyUGFnZVN5bmMiLCJuYW1lIiwiaGVpZ2h0IiwibWFzcyIsImhhaXJfY29sb3IiLCJza2luX2NvbG9yIiwiZXllX2NvbG9yIiwiYmlydGhfeWVhciIsIkNvbXBvbmVudCIsImRlZmF1bHQiLCJMaXN0IiwidXJscyIsIml0ZW1zIiwiZmllbGQiLCJwYWdlTmFtZSIsInVybCIsInBlbmRpbmciLCJBcnJheSIsIm1hcCIsImluZGV4IiwiaXRlbSIsImxlbmd0aCIsImV4dHJhY3RJRCIsImZpbmQiLCJ0ZXh0IiwibGlua1Byb3BzIiwiaHJlZiIsImNsYXNzTmFtZSIsInVuZGVmaW5lZCIsImRlZmF1bHRQcm9wcyIsIkxvYWRpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7OztBQUVBOztJQUVNQSxhOzs7Ozs7Ozs7Ozs7QUFHRjs7Ozs7Ozs7aUhBT2tCQyxTOzs7Ozs7O3lDQUNTLEtBQUtDLEssRUFBdEJDLEssVUFBQUEsSyxFQUFPQyxLLFVBQUFBLEs7QUFDVEYscUMsR0FBUTtBQUNSRyw0Q0FBUSxJQURBO0FBRVJDLCtDQUFXLElBRkg7QUFHUkMsMkNBQU8sSUFIQztBQUlS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QUFLWCxNQUFNc0MsU0FBTixDQUFnQkYsS0FBS0wsR0FBckIsQ0FBVDtBQUNBLGdCQUFJQSxNQUFNL0IsTUFBTXVDLElBQU4sQ0FBV1QsUUFBWCxFQUFxQixFQUFFbkIsTUFBRixFQUFyQixDQUFWO0FBQ0EsZ0JBQUk2QixPQUFPSixLQUFLSixPQUFMLEdBQWUsS0FBZixHQUF1QkksS0FBS1AsS0FBTCxDQUFsQztBQUNBLGdCQUFJWSxZQUFZO0FBQ1pDLHNCQUFNWCxHQURNO0FBRVpZLDJCQUFZUCxLQUFLSixPQUFOLEdBQWlCLFNBQWpCLEdBQTZCWTtBQUY1QixhQUFoQjtBQUlBLG1CQUFPO0FBQUE7QUFBQTtBQUFJO0FBQUE7QUFBT0gsNkJBQVA7QUFBbUJEO0FBQW5CO0FBQUosYUFBUDtBQUNILFNBVEQ7QUFGSixLQURKO0FBZ0JIOztBQUVEZCxLQUFLbUIsWUFBTCxHQUFvQjtBQUNoQmhCLFdBQU87QUFEUyxDQUFwQjs7QUFJQUgsS0FBS1gsV0FBTCxHQUFtQixNQUFuQjs7UUFHWVUsTyxHQUFSQyxJO1FBQ0FBLEksR0FBQUEsSTs7Ozs7Ozs7Ozs7Ozs7O0FDdkRKOztBQUVBOztBQUVBLFNBQVNvQixPQUFULEdBQW1CO0FBQ2YsV0FDSTtBQUFBO0FBQUEsVUFBSyxXQUFVLFNBQWY7QUFDSTtBQUFBO0FBQUE7QUFDSSxrQ0FBRyxXQUFVLHVCQUFiLEdBREo7QUFBQTtBQUFBO0FBREosS0FESjtBQU9IOztBQUVEQSxRQUFRL0IsV0FBUixHQUFzQixTQUF0Qjs7UUFHZVUsTyxHQUFYcUIsTztRQUNBQSxPLEdBQUFBLE8iLCJmaWxlIjoiY2hhcmFjdGVyLXBhZ2UuYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaCwgQ29tcG9uZW50IH0gZnJvbSAncHJlYWN0JztcbmltcG9ydCB7IEFzeW5jQ29tcG9uZW50IH0gZnJvbSAncmVsYWtzL3ByZWFjdCc7XG5pbXBvcnQgeyBMaXN0IH0gZnJvbSAnd2lkZ2V0cy9saXN0JztcbmltcG9ydCBMb2FkaW5nIGZyb20gJ3dpZGdldHMvbG9hZGluZyc7XG5cbi8qKiBAanN4IGggKi9cblxuY2xhc3MgQ2hhcmFjdGVyUGFnZSBleHRlbmRzIEFzeW5jQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgZGlzcGxheU5hbWUgPSAnQ2hhcmFjdGVyUGFnZSc7XG5cbiAgICAvKipcbiAgICAgKiBSZXRyaWV2ZSByZW1vdGUgZGF0YSBhbmQgcmVuZGVyIHRoZSBzeW5jaHJvbml6ZSBoYWxmIG9mIHRoaXMgY29tcG9uZW50XG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHtNZWFud2hpbGV9ICBtZWFud2hpbGVcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1ZOb2RlfVxuICAgICAqL1xuICAgIGFzeW5jIHJlbmRlckFzeW5jKG1lYW53aGlsZSkge1xuICAgICAgICBsZXQgeyByb3V0ZSwgc3dhcGkgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGxldCBwcm9wcyA9IHtcbiAgICAgICAgICAgIHBlcnNvbjogbnVsbCxcbiAgICAgICAgICAgIGhvbWV3b3JsZDogbnVsbCxcbiAgICAgICAgICAgIGZpbG1zOiBudWxsLFxuICAgICAgICAgICAgc3BlY2llczogbnVsbCxcbiAgICAgICAgICAgIHZlaGljbGVzOiBudWxsLFxuICAgICAgICAgICAgc3RhcnNoaXBzOiBudWxsLFxuICAgICAgICAgICAgcm91dGU6IHJvdXRlLFxuICAgICAgICB9O1xuICAgICAgICBtZWFud2hpbGUuc2hvdyg8Q2hhcmFjdGVyUGFnZVN5bmMgey4uLnByb3BzfSAvPik7XG4gICAgICAgIHByb3BzLnBlcnNvbiA9IGF3YWl0IHN3YXBpLmZldGNoT25lKGAvcGVvcGxlLyR7cm91dGUucGFyYW1zLmlkfS9gKTtcbiAgICAgICAgbWVhbndoaWxlLnNob3coPENoYXJhY3RlclBhZ2VTeW5jIHsuLi5wcm9wc30gLz4pO1xuICAgICAgICBwcm9wcy5maWxtcyA9IGF3YWl0IHN3YXBpLmZldGNoTXVsdGlwbGUocHJvcHMucGVyc29uLmZpbG1zLCB7IHBhcnRpYWw6IDAuNCB9KTtcbiAgICAgICAgbWVhbndoaWxlLnNob3coPENoYXJhY3RlclBhZ2VTeW5jIHsuLi5wcm9wc30gLz4pO1xuICAgICAgICBwcm9wcy5zcGVjaWVzID0gYXdhaXQgc3dhcGkuZmV0Y2hNdWx0aXBsZShwcm9wcy5wZXJzb24uc3BlY2llcywgeyBwYXJ0aWFsOiAwLjQgfSk7XG4gICAgICAgIG1lYW53aGlsZS5zaG93KDxDaGFyYWN0ZXJQYWdlU3luYyB7Li4ucHJvcHN9IC8+KTtcbiAgICAgICAgcHJvcHMuaG9tZXdvcmxkID0gYXdhaXQgc3dhcGkuZmV0Y2hPbmUocHJvcHMucGVyc29uLmhvbWV3b3JsZCk7XG4gICAgICAgIG1lYW53aGlsZS5zaG93KDxDaGFyYWN0ZXJQYWdlU3luYyB7Li4ucHJvcHN9IC8+KTtcbiAgICAgICAgcHJvcHMudmVoaWNsZXMgPSBhd2FpdCBzd2FwaS5mZXRjaE11bHRpcGxlKHByb3BzLnBlcnNvbi52ZWhpY2xlcywgeyBwYXJ0aWFsOiAwLjQgfSk7XG4gICAgICAgIG1lYW53aGlsZS5zaG93KDxDaGFyYWN0ZXJQYWdlU3luYyB7Li4ucHJvcHN9IC8+KTtcbiAgICAgICAgcHJvcHMuc3RhcnNoaXBzID0gYXdhaXQgc3dhcGkuZmV0Y2hNdWx0aXBsZShwcm9wcy5wZXJzb24uc3RhcnNoaXBzLCB7IHBhcnRpYWw6IDAuNCB9KTtcbiAgICAgICAgbWVhbndoaWxlLnNob3coPENoYXJhY3RlclBhZ2VTeW5jIHsuLi5wcm9wc30gLz4pO1xuICAgICAgICByZXR1cm4gPENoYXJhY3RlclBhZ2VTeW5jIHsuLi5wcm9wc30gLz47XG4gICAgfVxufVxuXG5jbGFzcyBDaGFyYWN0ZXJQYWdlU3luYyBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgc3RhdGljIGRpc3BsYXlOYW1lID0gJ0NoYXJhY3RlclBhZ2VTeW5jJztcblxuICAgIC8qKlxuICAgICAqIFJlbmRlciB0aGUgY29tcG9uZW50LCBtYWtpbmcgYmVzdCBlZmZvcnQgdXNpbmcgd2hhdCBwcm9wcyBhcmUgZ2l2ZW5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1ZOb2RlfVxuICAgICAqL1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IHsgcm91dGUsIHBlcnNvbiwgaG9tZXdvcmxkLCBmaWxtcywgc3BlY2llcywgdmVoaWNsZXMsIHN0YXJzaGlwcyB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgaWYgKCFwZXJzb24pIHtcbiAgICAgICAgICAgIHJldHVybiA8TG9hZGluZyAvPjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGFyYWN0ZXItcGFnZVwiPlxuICAgICAgICAgICAgICAgIDxoMT57cGVyc29uLm5hbWV9PC9oMT5cbiAgICAgICAgICAgICAgICA8ZGl2PkhlaWdodDoge3BlcnNvbi5oZWlnaHR9IGNtPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdj5NYXNzOiB7cGVyc29uLm1hc3N9IGtnPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdj5IYWlyIGNvbG9yOiB7cGVyc29uLmhhaXJfY29sb3J9PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdj5Ta2luIGNvbG9yOiB7cGVyc29uLnNraW5fY29sb3J9PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdj5IYWlyIGNvbG9yOiB7cGVyc29uLmhhaXJfY29sb3J9PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdj5FeWUgY29sb3I6IHtwZXJzb24uZXllX2NvbG9yfTwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXY+QmlydGggeWVhcjoge3BlcnNvbi5iaXJ0aF95ZWFyfTwvZGl2PlxuICAgICAgICAgICAgICAgIDxoMj5Ib21ld29ybGQ8L2gyPlxuICAgICAgICAgICAgICAgIDxMaXN0IHVybHM9e3BlcnNvbi5ob21ld29ybGR9IGl0ZW1zPXtob21ld29ybGR9IHBhZ2VOYW1lPVwicGxhbmV0LXN1bW1hcnlcIiByb3V0ZT17cm91dGV9IC8+XG4gICAgICAgICAgICAgICAgPGgyPkZpbG1zPC9oMj5cbiAgICAgICAgICAgICAgICA8TGlzdCB1cmxzPXtwZXJzb24uZmlsbXN9IGl0ZW1zPXtmaWxtc30gZmllbGQ9XCJ0aXRsZVwiIHBhZ2VOYW1lPVwiZmlsbS1zdW1tYXJ5XCIgcm91dGU9e3JvdXRlfSAvPlxuICAgICAgICAgICAgICAgIDxoMj5TcGVjaWVzPC9oMj5cbiAgICAgICAgICAgICAgICA8TGlzdCB1cmxzPXtwZXJzb24uc3BlY2llc30gaXRlbXM9e3NwZWNpZXN9IHBhZ2VOYW1lPVwic3BlY2llcy1zdW1tYXJ5XCIgcm91dGU9e3JvdXRlfSAvPlxuICAgICAgICAgICAgICAgIDxoMj5WZWhpY2xlczwvaDI+XG4gICAgICAgICAgICAgICAgPExpc3QgdXJscz17cGVyc29uLnZlaGljbGVzfSBpdGVtcz17dmVoaWNsZXN9IHBhZ2VOYW1lPVwidmVoaWNsZS1zdW1tYXJ5XCIgcm91dGU9e3JvdXRlfSAvPlxuICAgICAgICAgICAgICAgIDxoMj5TdGFyc2hpcHM8L2gyPlxuICAgICAgICAgICAgICAgIDxMaXN0IHVybHM9e3BlcnNvbi5zdGFyc2hpcHN9IGl0ZW1zPXtzdGFyc2hpcHN9IHBhZ2VOYW1lPVwic3RhcnNoaXAtc3VtbWFyeVwiIHJvdXRlPXtyb3V0ZX0gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuZXhwb3J0IHtcbiAgICBDaGFyYWN0ZXJQYWdlIGFzIGRlZmF1bHQsXG4gICAgQ2hhcmFjdGVyUGFnZSxcbiAgICBDaGFyYWN0ZXJQYWdlU3luYyxcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcy9jaGFyYWN0ZXItcGFnZS5qc3giLCJpbXBvcnQgeyBoLCBDb21wb25lbnQgfSBmcm9tICdwcmVhY3QnO1xuXG4vKiogQGpzeCBoICovXG5cbmZ1bmN0aW9uIExpc3QocHJvcHMpIHtcbiAgICBsZXQgeyByb3V0ZSwgdXJscywgaXRlbXMsIGZpZWxkLCBwYWdlTmFtZSB9ID0gcHJvcHM7XG4gICAgaWYgKHVybHMpIHtcbiAgICAgICAgaWYgKHR5cGVvZih1cmxzKSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIGlmIChpdGVtcykge1xuICAgICAgICAgICAgICAgIGl0ZW1zID0gWyBpdGVtcyBdO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpdGVtcyA9IFsgeyB1cmw6IHVybHMsIHBlbmRpbmc6IHRydWUgfSBdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHVybHMgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICAgICAgaXRlbXMgPSB1cmxzLm1hcCgodXJsLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgIHZhciBpdGVtID0gKGl0ZW1zKSA/IGl0ZW1zW2luZGV4XSA6IG51bGw7XG4gICAgICAgICAgICAgICAgaWYgKCFpdGVtKSB7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW0gPSB7IHVybCwgcGVuZGluZzogdHJ1ZSB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gaXRlbTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmICghaXRlbXMpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGlmIChpdGVtcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuIDx1bCBjbGFzc05hbWU9XCJlbXB0eVwiPjxsaT48c3Bhbj5ub25lPC9zcGFuPjwvbGk+PC91bD47XG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICAgIDx1bD5cbiAgICAgICAge1xuICAgICAgICAgICAgaXRlbXMubWFwKChpdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IGlkID0gcm91dGUuZXh0cmFjdElEKGl0ZW0udXJsKTtcbiAgICAgICAgICAgICAgICBsZXQgdXJsID0gcm91dGUuZmluZChwYWdlTmFtZSwgeyBpZCB9KTtcbiAgICAgICAgICAgICAgICBsZXQgdGV4dCA9IGl0ZW0ucGVuZGluZyA/ICcuLi4nIDogaXRlbVtmaWVsZF07XG4gICAgICAgICAgICAgICAgbGV0IGxpbmtQcm9wcyA9IHtcbiAgICAgICAgICAgICAgICAgICAgaHJlZjogdXJsLFxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU6IChpdGVtLnBlbmRpbmcpID8gJ3BlbmRpbmcnIDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgcmV0dXJuIDxsaT48YSB7Li4ubGlua1Byb3BzfT57dGV4dH08L2E+PC9saT47XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICAgIDwvdWw+XG4gICAgKTtcbn1cblxuTGlzdC5kZWZhdWx0UHJvcHMgPSB7XG4gICAgZmllbGQ6ICduYW1lJ1xufTtcblxuTGlzdC5kaXNwbGF5TmFtZSA9ICdMaXN0JztcblxuZXhwb3J0IHtcbiAgICBMaXN0IGFzIGRlZmF1bHQsXG4gICAgTGlzdFxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3dpZGdldHMvbGlzdC5qc3giLCJpbXBvcnQgeyBoLCBDb21wb25lbnQgfSBmcm9tICdwcmVhY3QnO1xuXG4vKiogQGpzeCBoICovXG5cbmZ1bmN0aW9uIExvYWRpbmcoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2FkaW5nXCI+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhYiBmYS1lbXBpcmUgZmEtc3BpblwiLz4gTG9hZGluZ1xuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cbkxvYWRpbmcuZGlzcGxheU5hbWUgPSAnTG9hZGluZyc7XG5cbmV4cG9ydCB7XG4gICAgTG9hZGluZyBhcyBkZWZhdWx0LFxuICAgIExvYWRpbmdcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi93aWRnZXRzL2xvYWRpbmcuanN4Il0sInNvdXJjZVJvb3QiOiIifQ==