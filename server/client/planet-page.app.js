exports.ids = ["planet-page"];
exports.modules = {

/***/ "./pages/planet-page.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.PlanetPageSync = exports.PlanetPage = exports.default = undefined;

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

var PlanetPage = function (_AsyncComponent) {
    (0, _inherits3.default)(PlanetPage, _AsyncComponent);

    function PlanetPage() {
        (0, _classCallCheck3.default)(this, PlanetPage);
        return (0, _possibleConstructorReturn3.default)(this, (PlanetPage.__proto__ || (0, _getPrototypeOf2.default)(PlanetPage)).apply(this, arguments));
    }

    (0, _createClass3.default)(PlanetPage, [{
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
                                    planet: null,
                                    films: null,
                                    residents: null,
                                    route: route
                                };

                                meanwhile.show((0, _preact.h)(PlanetPageSync, props));
                                _context.next = 5;
                                return swapi.fetchOne('/planets/' + route.params.id + '/');

                            case 5:
                                props.planet = _context.sent;

                                meanwhile.show((0, _preact.h)(PlanetPageSync, props));
                                _context.next = 9;
                                return swapi.fetchMultiple(props.planet.films, { partial: 0.4 });

                            case 9:
                                props.films = _context.sent;

                                meanwhile.show((0, _preact.h)(PlanetPageSync, props));
                                _context.next = 13;
                                return swapi.fetchMultiple(props.planet.residents, { partial: 0.4 });

                            case 13:
                                props.residents = _context.sent;

                                meanwhile.show((0, _preact.h)(PlanetPageSync, props));
                                return _context.abrupt('return', (0, _preact.h)(PlanetPageSync, props));

                            case 16:
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
    return PlanetPage;
}(_preact2.AsyncComponent);

PlanetPage.displayName = 'PlanetPage';

var PlanetPageSync = function (_Component) {
    (0, _inherits3.default)(PlanetPageSync, _Component);

    function PlanetPageSync() {
        (0, _classCallCheck3.default)(this, PlanetPageSync);
        return (0, _possibleConstructorReturn3.default)(this, (PlanetPageSync.__proto__ || (0, _getPrototypeOf2.default)(PlanetPageSync)).apply(this, arguments));
    }

    (0, _createClass3.default)(PlanetPageSync, [{
        key: 'render',


        /**
         * Render the component, making best effort using what props are given
         *
         * @return {VNode}
         */
        value: function render() {
            var _props2 = this.props,
                route = _props2.route,
                planet = _props2.planet,
                films = _props2.films,
                residents = _props2.residents;

            if (!planet) {
                return (0, _preact.h)(_loading2.default, null);
            }
            return (0, _preact.h)(
                'div',
                null,
                (0, _preact.h)(
                    'h1',
                    null,
                    planet.name
                ),
                (0, _preact.h)(
                    'div',
                    null,
                    'Diameter: ',
                    planet.diameter,
                    ' km'
                ),
                (0, _preact.h)(
                    'div',
                    null,
                    'Rotation period: ',
                    planet.rotation_period,
                    ' hr'
                ),
                (0, _preact.h)(
                    'div',
                    null,
                    'Orbital period: ',
                    planet.orbital_period,
                    ' days'
                ),
                (0, _preact.h)(
                    'div',
                    null,
                    'Climate: ',
                    planet.climate
                ),
                (0, _preact.h)(
                    'div',
                    null,
                    'Gravity: ',
                    planet.gravity
                ),
                (0, _preact.h)(
                    'div',
                    null,
                    'Terrain: ',
                    planet.terrain
                ),
                (0, _preact.h)(
                    'div',
                    null,
                    'Surface water: ',
                    planet.surface_water
                ),
                (0, _preact.h)(
                    'div',
                    null,
                    'Population: ',
                    planet.population
                ),
                (0, _preact.h)(
                    'h2',
                    null,
                    'Residents'
                ),
                (0, _preact.h)(_list.List, { urls: planet.residents, items: residents, pageName: 'character-summary', route: route }),
                (0, _preact.h)(
                    'h2',
                    null,
                    'Films'
                ),
                (0, _preact.h)(_list.List, { urls: planet.films, items: films, field: 'title', pageName: 'film-summary', route: route })
            );
        }
    }]);
    return PlanetPageSync;
}(_preact.Component);

PlanetPageSync.displayName = 'PlanetPageSync';
exports.default = PlanetPage;
exports.PlanetPage = PlanetPage;
exports.PlanetPageSync = PlanetPageSync;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9wbGFuZXQtcGFnZS5qc3giLCJ3ZWJwYWNrOi8vLy4vd2lkZ2V0cy9saXN0LmpzeCIsIndlYnBhY2s6Ly8vLi93aWRnZXRzL2xvYWRpbmcuanN4Il0sIm5hbWVzIjpbIlBsYW5ldFBhZ2UiLCJtZWFud2hpbGUiLCJwcm9wcyIsInJvdXRlIiwic3dhcGkiLCJwbGFuZXQiLCJmaWxtcyIsInJlc2lkZW50cyIsInNob3ciLCJmZXRjaE9uZSIsInBhcmFtcyIsImlkIiwiZmV0Y2hNdWx0aXBsZSIsInBhcnRpYWwiLCJBc3luY0NvbXBvbmVudCIsImRpc3BsYXlOYW1lIiwiUGxhbmV0UGFnZVN5bmMiLCJuYW1lIiwiZGlhbWV0ZXIiLCJyb3RhdGlvbl9wZXJpb2QiLCJvcmJpdGFsX3BlcmlvZCIsImNsaW1hdGUiLCJncmF2aXR5IiwidGVycmFpbiIsInN1cmZhY2Vfd2F0ZXIiLCJwb3B1bGF0aW9uIiwiQ29tcG9uZW50IiwiZGVmYXVsdCIsIkxpc3QiLCJ1cmxzIiwiaXRlbXMiLCJmaWVsZCIsInBhZ2VOYW1lIiwidXJsIiwicGVuZGluZyIsIkFycmF5IiwibWFwIiwiaW5kZXgiLCJpdGVtIiwibGVuZ3RoIiwiZXh0cmFjdElEIiwiZmluZCIsInRleHQiLCJsaW5rUHJvcHMiLCJocmVmIiwiY2xhc3NOYW1lIiwidW5kZWZpbmVkIiwiZGVmYXVsdFByb3BzIiwiTG9hZGluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7OztBQUVBOztJQUVNQSxVOzs7Ozs7Ozs7Ozs7QUFHRjs7Ozs7Ozs7aUhBT2tCQyxTOzs7Ozs7O3lDQUNTLEtBQUtDLEssRUFBdEJDLEssVUFBQUEsSyxFQUFPQyxLLFVBQUFBLEs7QUFDVEYscUMsR0FBUTtBQUNSRyw0Q0FBUSxJQURBO0FBRVJDLDJDQUFPLElBRkM7QUFHUkMsK0NBQVcsSUFISDtBQUlSSiwy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Z0JBQUlBLE1BQU05QixNQUFNc0MsSUFBTixDQUFXVCxRQUFYLEVBQXFCLEVBQUVyQixNQUFGLEVBQXJCLENBQVY7QUFDQSxnQkFBSStCLE9BQU9KLEtBQUtKLE9BQUwsR0FBZSxLQUFmLEdBQXVCSSxLQUFLUCxLQUFMLENBQWxDO0FBQ0EsZ0JBQUlZLFlBQVk7QUFDWkMsc0JBQU1YLEdBRE07QUFFWlksMkJBQVlQLEtBQUtKLE9BQU4sR0FBaUIsU0FBakIsR0FBNkJZO0FBRjVCLGFBQWhCO0FBSUEsbUJBQU87QUFBQTtBQUFBO0FBQUk7QUFBQTtBQUFPSCw2QkFBUDtBQUFtQkQ7QUFBbkI7QUFBSixhQUFQO0FBQ0gsU0FURDtBQUZKLEtBREo7QUFnQkg7O0FBRURkLEtBQUttQixZQUFMLEdBQW9CO0FBQ2hCaEIsV0FBTztBQURTLENBQXBCOztBQUlBSCxLQUFLYixXQUFMLEdBQW1CLE1BQW5COztRQUdZWSxPLEdBQVJDLEk7UUFDQUEsSSxHQUFBQSxJOzs7Ozs7Ozs7Ozs7Ozs7QUN2REo7O0FBRUE7O0FBRUEsU0FBU29CLE9BQVQsR0FBbUI7QUFDZixXQUNJO0FBQUE7QUFBQSxVQUFLLFdBQVUsU0FBZjtBQUNJO0FBQUE7QUFBQTtBQUNJLGtDQUFHLFdBQVUsdUJBQWIsR0FESjtBQUFBO0FBQUE7QUFESixLQURKO0FBT0g7O0FBRURBLFFBQVFqQyxXQUFSLEdBQXNCLFNBQXRCOztRQUdlWSxPLEdBQVhxQixPO1FBQ0FBLE8sR0FBQUEsTyIsImZpbGUiOiJwbGFuZXQtcGFnZS5hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBoLCBDb21wb25lbnQgfSBmcm9tICdwcmVhY3QnO1xuaW1wb3J0IHsgQXN5bmNDb21wb25lbnQgfSBmcm9tICdyZWxha3MvcHJlYWN0JztcbmltcG9ydCB7IExpc3QgfSBmcm9tICd3aWRnZXRzL2xpc3QnO1xuaW1wb3J0IExvYWRpbmcgZnJvbSAnd2lkZ2V0cy9sb2FkaW5nJztcblxuLyoqIEBqc3ggaCAqL1xuXG5jbGFzcyBQbGFuZXRQYWdlIGV4dGVuZHMgQXN5bmNDb21wb25lbnQge1xuICAgIHN0YXRpYyBkaXNwbGF5TmFtZSA9ICdQbGFuZXRQYWdlJztcblxuICAgIC8qKlxuICAgICAqIFJldHJpZXZlIHJlbW90ZSBkYXRhIGFuZCByZW5kZXIgdGhlIHN5bmNocm9uaXplIGhhbGYgb2YgdGhpcyBjb21wb25lbnRcbiAgICAgKlxuICAgICAqIEBwYXJhbSAge01lYW53aGlsZX0gIG1lYW53aGlsZVxuICAgICAqXG4gICAgICogQHJldHVybiB7Vk5vZGV9XG4gICAgICovXG4gICAgYXN5bmMgcmVuZGVyQXN5bmMobWVhbndoaWxlKSB7XG4gICAgICAgIGxldCB7IHJvdXRlLCBzd2FwaSB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgbGV0IHByb3BzID0ge1xuICAgICAgICAgICAgcGxhbmV0OiBudWxsLFxuICAgICAgICAgICAgZmlsbXM6IG51bGwsXG4gICAgICAgICAgICByZXNpZGVudHM6IG51bGwsXG4gICAgICAgICAgICByb3V0ZTogcm91dGUsXG4gICAgICAgIH07XG4gICAgICAgIG1lYW53aGlsZS5zaG93KDxQbGFuZXRQYWdlU3luYyB7Li4ucHJvcHN9IC8+KTtcbiAgICAgICAgcHJvcHMucGxhbmV0ID0gYXdhaXQgc3dhcGkuZmV0Y2hPbmUoYC9wbGFuZXRzLyR7cm91dGUucGFyYW1zLmlkfS9gKTtcbiAgICAgICAgbWVhbndoaWxlLnNob3coPFBsYW5ldFBhZ2VTeW5jIHsuLi5wcm9wc30gLz4pO1xuICAgICAgICBwcm9wcy5maWxtcyA9IGF3YWl0IHN3YXBpLmZldGNoTXVsdGlwbGUocHJvcHMucGxhbmV0LmZpbG1zLCB7IHBhcnRpYWw6IDAuNCB9KTtcbiAgICAgICAgbWVhbndoaWxlLnNob3coPFBsYW5ldFBhZ2VTeW5jIHsuLi5wcm9wc30gLz4pO1xuICAgICAgICBwcm9wcy5yZXNpZGVudHMgPSBhd2FpdCBzd2FwaS5mZXRjaE11bHRpcGxlKHByb3BzLnBsYW5ldC5yZXNpZGVudHMsIHsgcGFydGlhbDogMC40IH0pO1xuICAgICAgICBtZWFud2hpbGUuc2hvdyg8UGxhbmV0UGFnZVN5bmMgey4uLnByb3BzfSAvPik7XG4gICAgICAgIHJldHVybiA8UGxhbmV0UGFnZVN5bmMgey4uLnByb3BzfSAvPjtcbiAgICB9XG59XG5cbmNsYXNzIFBsYW5ldFBhZ2VTeW5jIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgZGlzcGxheU5hbWUgPSAnUGxhbmV0UGFnZVN5bmMnO1xuXG4gICAgLyoqXG4gICAgICogUmVuZGVyIHRoZSBjb21wb25lbnQsIG1ha2luZyBiZXN0IGVmZm9ydCB1c2luZyB3aGF0IHByb3BzIGFyZSBnaXZlblxuICAgICAqXG4gICAgICogQHJldHVybiB7Vk5vZGV9XG4gICAgICovXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQgeyByb3V0ZSwgcGxhbmV0LCBmaWxtcywgcmVzaWRlbnRzIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICBpZiAoIXBsYW5ldCkge1xuICAgICAgICAgICAgcmV0dXJuIDxMb2FkaW5nIC8+O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxoMT57cGxhbmV0Lm5hbWV9PC9oMT5cbiAgICAgICAgICAgICAgICA8ZGl2PkRpYW1ldGVyOiB7cGxhbmV0LmRpYW1ldGVyfSBrbTwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXY+Um90YXRpb24gcGVyaW9kOiB7cGxhbmV0LnJvdGF0aW9uX3BlcmlvZH0gaHI8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2Pk9yYml0YWwgcGVyaW9kOiB7cGxhbmV0Lm9yYml0YWxfcGVyaW9kfSBkYXlzPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdj5DbGltYXRlOiB7cGxhbmV0LmNsaW1hdGV9PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdj5HcmF2aXR5OiB7cGxhbmV0LmdyYXZpdHl9PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdj5UZXJyYWluOiB7cGxhbmV0LnRlcnJhaW59PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdj5TdXJmYWNlIHdhdGVyOiB7cGxhbmV0LnN1cmZhY2Vfd2F0ZXJ9PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdj5Qb3B1bGF0aW9uOiB7cGxhbmV0LnBvcHVsYXRpb259PC9kaXY+XG4gICAgICAgICAgICAgICAgPGgyPlJlc2lkZW50czwvaDI+XG4gICAgICAgICAgICAgICAgPExpc3QgdXJscz17cGxhbmV0LnJlc2lkZW50c30gaXRlbXM9e3Jlc2lkZW50c30gcGFnZU5hbWU9XCJjaGFyYWN0ZXItc3VtbWFyeVwiIHJvdXRlPXtyb3V0ZX0gLz5cbiAgICAgICAgICAgICAgICA8aDI+RmlsbXM8L2gyPlxuICAgICAgICAgICAgICAgIDxMaXN0IHVybHM9e3BsYW5ldC5maWxtc30gaXRlbXM9e2ZpbG1zfSBmaWVsZD1cInRpdGxlXCIgcGFnZU5hbWU9XCJmaWxtLXN1bW1hcnlcIiByb3V0ZT17cm91dGV9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCB7XG4gICAgUGxhbmV0UGFnZSBhcyBkZWZhdWx0LFxuICAgIFBsYW5ldFBhZ2UsXG4gICAgUGxhbmV0UGFnZVN5bmMsXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXMvcGxhbmV0LXBhZ2UuanN4IiwiaW1wb3J0IHsgaCwgQ29tcG9uZW50IH0gZnJvbSAncHJlYWN0JztcblxuLyoqIEBqc3ggaCAqL1xuXG5mdW5jdGlvbiBMaXN0KHByb3BzKSB7XG4gICAgbGV0IHsgcm91dGUsIHVybHMsIGl0ZW1zLCBmaWVsZCwgcGFnZU5hbWUgfSA9IHByb3BzO1xuICAgIGlmICh1cmxzKSB7XG4gICAgICAgIGlmICh0eXBlb2YodXJscykgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICBpZiAoaXRlbXMpIHtcbiAgICAgICAgICAgICAgICBpdGVtcyA9IFsgaXRlbXMgXTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaXRlbXMgPSBbIHsgdXJsOiB1cmxzLCBwZW5kaW5nOiB0cnVlIH0gXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmICh1cmxzIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgICAgICAgIGl0ZW1zID0gdXJscy5tYXAoKHVybCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICB2YXIgaXRlbSA9IChpdGVtcykgPyBpdGVtc1tpbmRleF0gOiBudWxsO1xuICAgICAgICAgICAgICAgIGlmICghaXRlbSkge1xuICAgICAgICAgICAgICAgICAgICBpdGVtID0geyB1cmwsIHBlbmRpbmc6IHRydWUgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW07XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoIWl0ZW1zKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBpZiAoaXRlbXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJldHVybiA8dWwgY2xhc3NOYW1lPVwiZW1wdHlcIj48bGk+PHNwYW4+bm9uZTwvc3Bhbj48L2xpPjwvdWw+O1xuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgICA8dWw+XG4gICAgICAgIHtcbiAgICAgICAgICAgIGl0ZW1zLm1hcCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBpZCA9IHJvdXRlLmV4dHJhY3RJRChpdGVtLnVybCk7XG4gICAgICAgICAgICAgICAgbGV0IHVybCA9IHJvdXRlLmZpbmQocGFnZU5hbWUsIHsgaWQgfSk7XG4gICAgICAgICAgICAgICAgbGV0IHRleHQgPSBpdGVtLnBlbmRpbmcgPyAnLi4uJyA6IGl0ZW1bZmllbGRdO1xuICAgICAgICAgICAgICAgIGxldCBsaW5rUHJvcHMgPSB7XG4gICAgICAgICAgICAgICAgICAgIGhyZWY6IHVybCxcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lOiAoaXRlbS5wZW5kaW5nKSA/ICdwZW5kaW5nJyA6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIHJldHVybiA8bGk+PGEgey4uLmxpbmtQcm9wc30+e3RleHR9PC9hPjwvbGk+O1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgICA8L3VsPlxuICAgICk7XG59XG5cbkxpc3QuZGVmYXVsdFByb3BzID0ge1xuICAgIGZpZWxkOiAnbmFtZSdcbn07XG5cbkxpc3QuZGlzcGxheU5hbWUgPSAnTGlzdCc7XG5cbmV4cG9ydCB7XG4gICAgTGlzdCBhcyBkZWZhdWx0LFxuICAgIExpc3Rcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi93aWRnZXRzL2xpc3QuanN4IiwiaW1wb3J0IHsgaCwgQ29tcG9uZW50IH0gZnJvbSAncHJlYWN0JztcblxuLyoqIEBqc3ggaCAqL1xuXG5mdW5jdGlvbiBMb2FkaW5nKCkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9hZGluZ1wiPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYWIgZmEtZW1waXJlIGZhLXNwaW5cIi8+IExvYWRpbmdcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuXG5Mb2FkaW5nLmRpc3BsYXlOYW1lID0gJ0xvYWRpbmcnO1xuXG5leHBvcnQge1xuICAgIExvYWRpbmcgYXMgZGVmYXVsdCxcbiAgICBMb2FkaW5nXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vd2lkZ2V0cy9sb2FkaW5nLmpzeCJdLCJzb3VyY2VSb290IjoiIn0=