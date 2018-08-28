webpackJsonp(["planet-page"],{

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

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9wbGFuZXQtcGFnZS5qc3giLCJ3ZWJwYWNrOi8vLy4vd2lkZ2V0cy9saXN0LmpzeCIsIndlYnBhY2s6Ly8vLi93aWRnZXRzL2xvYWRpbmcuanN4Il0sIm5hbWVzIjpbIlBsYW5ldFBhZ2UiLCJtZWFud2hpbGUiLCJwcm9wcyIsInJvdXRlIiwic3dhcGkiLCJwbGFuZXQiLCJmaWxtcyIsInJlc2lkZW50cyIsInNob3ciLCJmZXRjaE9uZSIsInBhcmFtcyIsImlkIiwiZmV0Y2hNdWx0aXBsZSIsInBhcnRpYWwiLCJBc3luY0NvbXBvbmVudCIsImRpc3BsYXlOYW1lIiwiUGxhbmV0UGFnZVN5bmMiLCJuYW1lIiwiZGlhbWV0ZXIiLCJyb3RhdGlvbl9wZXJpb2QiLCJvcmJpdGFsX3BlcmlvZCIsImNsaW1hdGUiLCJncmF2aXR5IiwidGVycmFpbiIsInN1cmZhY2Vfd2F0ZXIiLCJwb3B1bGF0aW9uIiwiQ29tcG9uZW50IiwiZGVmYXVsdCIsIkxpc3QiLCJ1cmxzIiwiaXRlbXMiLCJmaWVsZCIsInBhZ2VOYW1lIiwidXJsIiwicGVuZGluZyIsIkFycmF5IiwibWFwIiwiaW5kZXgiLCJpdGVtIiwibGVuZ3RoIiwiZXh0cmFjdElEIiwiZmluZCIsInRleHQiLCJsaW5rUHJvcHMiLCJocmVmIiwiY2xhc3NOYW1lIiwidW5kZWZpbmVkIiwiZGVmYXVsdFByb3BzIiwiTG9hZGluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7O0FBRUE7O0lBRU1BLFU7Ozs7Ozs7Ozs7OztBQUdGOzs7Ozs7OztpSEFPa0JDLFM7Ozs7Ozs7eUNBQ1MsS0FBS0MsSyxFQUF0QkMsSyxVQUFBQSxLLEVBQU9DLEssVUFBQUEsSztBQUNURixxQyxHQUFRO0FBQ1JHLDRDQUFRLElBREE7QUFFUkMsMkNBQU8sSUFGQztBQUdSQywrQ0FBVyxJQUhIO0FBSVJKLDJD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QkFBSUEsTUFBTTlCLE1BQU1zQyxJQUFOLENBQVdULFFBQVgsRUFBcUIsRUFBRXJCLE1BQUYsRUFBckIsQ0FBVjtBQUNBLGdCQUFJK0IsT0FBT0osS0FBS0osT0FBTCxHQUFlLEtBQWYsR0FBdUJJLEtBQUtQLEtBQUwsQ0FBbEM7QUFDQSxnQkFBSVksWUFBWTtBQUNaQyxzQkFBTVgsR0FETTtBQUVaWSwyQkFBWVAsS0FBS0osT0FBTixHQUFpQixTQUFqQixHQUE2Qlk7QUFGNUIsYUFBaEI7QUFJQSxtQkFBTztBQUFBO0FBQUE7QUFBSTtBQUFBO0FBQU9ILDZCQUFQO0FBQW1CRDtBQUFuQjtBQUFKLGFBQVA7QUFDSCxTQVREO0FBRkosS0FESjtBQWdCSDs7QUFFRGQsS0FBS21CLFlBQUwsR0FBb0I7QUFDaEJoQixXQUFPO0FBRFMsQ0FBcEI7O0FBSUFILEtBQUtiLFdBQUwsR0FBbUIsTUFBbkI7O1FBR1lZLE8sR0FBUkMsSTtRQUNBQSxJLEdBQUFBLEk7Ozs7Ozs7Ozs7Ozs7OztBQ3ZESjs7QUFFQTs7QUFFQSxTQUFTb0IsT0FBVCxHQUFtQjtBQUNmLFdBQ0k7QUFBQTtBQUFBLFVBQUssV0FBVSxTQUFmO0FBQ0k7QUFBQTtBQUFBO0FBQ0ksa0NBQUcsV0FBVSx1QkFBYixHQURKO0FBQUE7QUFBQTtBQURKLEtBREo7QUFPSDs7QUFFREEsUUFBUWpDLFdBQVIsR0FBc0IsU0FBdEI7O1FBR2VZLE8sR0FBWHFCLE87UUFDQUEsTyxHQUFBQSxPIiwiZmlsZSI6InBsYW5ldC1wYWdlLmFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGgsIENvbXBvbmVudCB9IGZyb20gJ3ByZWFjdCc7XG5pbXBvcnQgeyBBc3luY0NvbXBvbmVudCB9IGZyb20gJ3JlbGFrcy9wcmVhY3QnO1xuaW1wb3J0IHsgTGlzdCB9IGZyb20gJ3dpZGdldHMvbGlzdCc7XG5pbXBvcnQgTG9hZGluZyBmcm9tICd3aWRnZXRzL2xvYWRpbmcnO1xuXG4vKiogQGpzeCBoICovXG5cbmNsYXNzIFBsYW5ldFBhZ2UgZXh0ZW5kcyBBc3luY0NvbXBvbmVudCB7XG4gICAgc3RhdGljIGRpc3BsYXlOYW1lID0gJ1BsYW5ldFBhZ2UnO1xuXG4gICAgLyoqXG4gICAgICogUmV0cmlldmUgcmVtb3RlIGRhdGEgYW5kIHJlbmRlciB0aGUgc3luY2hyb25pemUgaGFsZiBvZiB0aGlzIGNvbXBvbmVudFxuICAgICAqXG4gICAgICogQHBhcmFtICB7TWVhbndoaWxlfSAgbWVhbndoaWxlXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtWTm9kZX1cbiAgICAgKi9cbiAgICBhc3luYyByZW5kZXJBc3luYyhtZWFud2hpbGUpIHtcbiAgICAgICAgbGV0IHsgcm91dGUsIHN3YXBpIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICBsZXQgcHJvcHMgPSB7XG4gICAgICAgICAgICBwbGFuZXQ6IG51bGwsXG4gICAgICAgICAgICBmaWxtczogbnVsbCxcbiAgICAgICAgICAgIHJlc2lkZW50czogbnVsbCxcbiAgICAgICAgICAgIHJvdXRlOiByb3V0ZSxcbiAgICAgICAgfTtcbiAgICAgICAgbWVhbndoaWxlLnNob3coPFBsYW5ldFBhZ2VTeW5jIHsuLi5wcm9wc30gLz4pO1xuICAgICAgICBwcm9wcy5wbGFuZXQgPSBhd2FpdCBzd2FwaS5mZXRjaE9uZShgL3BsYW5ldHMvJHtyb3V0ZS5wYXJhbXMuaWR9L2ApO1xuICAgICAgICBtZWFud2hpbGUuc2hvdyg8UGxhbmV0UGFnZVN5bmMgey4uLnByb3BzfSAvPik7XG4gICAgICAgIHByb3BzLmZpbG1zID0gYXdhaXQgc3dhcGkuZmV0Y2hNdWx0aXBsZShwcm9wcy5wbGFuZXQuZmlsbXMsIHsgcGFydGlhbDogMC40IH0pO1xuICAgICAgICBtZWFud2hpbGUuc2hvdyg8UGxhbmV0UGFnZVN5bmMgey4uLnByb3BzfSAvPik7XG4gICAgICAgIHByb3BzLnJlc2lkZW50cyA9IGF3YWl0IHN3YXBpLmZldGNoTXVsdGlwbGUocHJvcHMucGxhbmV0LnJlc2lkZW50cywgeyBwYXJ0aWFsOiAwLjQgfSk7XG4gICAgICAgIG1lYW53aGlsZS5zaG93KDxQbGFuZXRQYWdlU3luYyB7Li4ucHJvcHN9IC8+KTtcbiAgICAgICAgcmV0dXJuIDxQbGFuZXRQYWdlU3luYyB7Li4ucHJvcHN9IC8+O1xuICAgIH1cbn1cblxuY2xhc3MgUGxhbmV0UGFnZVN5bmMgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIHN0YXRpYyBkaXNwbGF5TmFtZSA9ICdQbGFuZXRQYWdlU3luYyc7XG5cbiAgICAvKipcbiAgICAgKiBSZW5kZXIgdGhlIGNvbXBvbmVudCwgbWFraW5nIGJlc3QgZWZmb3J0IHVzaW5nIHdoYXQgcHJvcHMgYXJlIGdpdmVuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtWTm9kZX1cbiAgICAgKi9cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCB7IHJvdXRlLCBwbGFuZXQsIGZpbG1zLCByZXNpZGVudHMgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGlmICghcGxhbmV0KSB7XG4gICAgICAgICAgICByZXR1cm4gPExvYWRpbmcgLz47XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGgxPntwbGFuZXQubmFtZX08L2gxPlxuICAgICAgICAgICAgICAgIDxkaXY+RGlhbWV0ZXI6IHtwbGFuZXQuZGlhbWV0ZXJ9IGttPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdj5Sb3RhdGlvbiBwZXJpb2Q6IHtwbGFuZXQucm90YXRpb25fcGVyaW9kfSBocjwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXY+T3JiaXRhbCBwZXJpb2Q6IHtwbGFuZXQub3JiaXRhbF9wZXJpb2R9IGRheXM8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2PkNsaW1hdGU6IHtwbGFuZXQuY2xpbWF0ZX08L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2PkdyYXZpdHk6IHtwbGFuZXQuZ3Jhdml0eX08L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2PlRlcnJhaW46IHtwbGFuZXQudGVycmFpbn08L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2PlN1cmZhY2Ugd2F0ZXI6IHtwbGFuZXQuc3VyZmFjZV93YXRlcn08L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2PlBvcHVsYXRpb246IHtwbGFuZXQucG9wdWxhdGlvbn08L2Rpdj5cbiAgICAgICAgICAgICAgICA8aDI+UmVzaWRlbnRzPC9oMj5cbiAgICAgICAgICAgICAgICA8TGlzdCB1cmxzPXtwbGFuZXQucmVzaWRlbnRzfSBpdGVtcz17cmVzaWRlbnRzfSBwYWdlTmFtZT1cImNoYXJhY3Rlci1zdW1tYXJ5XCIgcm91dGU9e3JvdXRlfSAvPlxuICAgICAgICAgICAgICAgIDxoMj5GaWxtczwvaDI+XG4gICAgICAgICAgICAgICAgPExpc3QgdXJscz17cGxhbmV0LmZpbG1zfSBpdGVtcz17ZmlsbXN9IGZpZWxkPVwidGl0bGVcIiBwYWdlTmFtZT1cImZpbG0tc3VtbWFyeVwiIHJvdXRlPXtyb3V0ZX0gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuZXhwb3J0IHtcbiAgICBQbGFuZXRQYWdlIGFzIGRlZmF1bHQsXG4gICAgUGxhbmV0UGFnZSxcbiAgICBQbGFuZXRQYWdlU3luYyxcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcy9wbGFuZXQtcGFnZS5qc3giLCJpbXBvcnQgeyBoLCBDb21wb25lbnQgfSBmcm9tICdwcmVhY3QnO1xuXG4vKiogQGpzeCBoICovXG5cbmZ1bmN0aW9uIExpc3QocHJvcHMpIHtcbiAgICBsZXQgeyByb3V0ZSwgdXJscywgaXRlbXMsIGZpZWxkLCBwYWdlTmFtZSB9ID0gcHJvcHM7XG4gICAgaWYgKHVybHMpIHtcbiAgICAgICAgaWYgKHR5cGVvZih1cmxzKSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIGlmIChpdGVtcykge1xuICAgICAgICAgICAgICAgIGl0ZW1zID0gWyBpdGVtcyBdO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpdGVtcyA9IFsgeyB1cmw6IHVybHMsIHBlbmRpbmc6IHRydWUgfSBdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHVybHMgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICAgICAgaXRlbXMgPSB1cmxzLm1hcCgodXJsLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgIHZhciBpdGVtID0gKGl0ZW1zKSA/IGl0ZW1zW2luZGV4XSA6IG51bGw7XG4gICAgICAgICAgICAgICAgaWYgKCFpdGVtKSB7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW0gPSB7IHVybCwgcGVuZGluZzogdHJ1ZSB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gaXRlbTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmICghaXRlbXMpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGlmIChpdGVtcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuIDx1bCBjbGFzc05hbWU9XCJlbXB0eVwiPjxsaT48c3Bhbj5ub25lPC9zcGFuPjwvbGk+PC91bD47XG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICAgIDx1bD5cbiAgICAgICAge1xuICAgICAgICAgICAgaXRlbXMubWFwKChpdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IGlkID0gcm91dGUuZXh0cmFjdElEKGl0ZW0udXJsKTtcbiAgICAgICAgICAgICAgICBsZXQgdXJsID0gcm91dGUuZmluZChwYWdlTmFtZSwgeyBpZCB9KTtcbiAgICAgICAgICAgICAgICBsZXQgdGV4dCA9IGl0ZW0ucGVuZGluZyA/ICcuLi4nIDogaXRlbVtmaWVsZF07XG4gICAgICAgICAgICAgICAgbGV0IGxpbmtQcm9wcyA9IHtcbiAgICAgICAgICAgICAgICAgICAgaHJlZjogdXJsLFxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU6IChpdGVtLnBlbmRpbmcpID8gJ3BlbmRpbmcnIDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgcmV0dXJuIDxsaT48YSB7Li4ubGlua1Byb3BzfT57dGV4dH08L2E+PC9saT47XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICAgIDwvdWw+XG4gICAgKTtcbn1cblxuTGlzdC5kZWZhdWx0UHJvcHMgPSB7XG4gICAgZmllbGQ6ICduYW1lJ1xufTtcblxuTGlzdC5kaXNwbGF5TmFtZSA9ICdMaXN0JztcblxuZXhwb3J0IHtcbiAgICBMaXN0IGFzIGRlZmF1bHQsXG4gICAgTGlzdFxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3dpZGdldHMvbGlzdC5qc3giLCJpbXBvcnQgeyBoLCBDb21wb25lbnQgfSBmcm9tICdwcmVhY3QnO1xuXG4vKiogQGpzeCBoICovXG5cbmZ1bmN0aW9uIExvYWRpbmcoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2FkaW5nXCI+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhYiBmYS1lbXBpcmUgZmEtc3BpblwiLz4gTG9hZGluZ1xuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cbkxvYWRpbmcuZGlzcGxheU5hbWUgPSAnTG9hZGluZyc7XG5cbmV4cG9ydCB7XG4gICAgTG9hZGluZyBhcyBkZWZhdWx0LFxuICAgIExvYWRpbmdcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi93aWRnZXRzL2xvYWRpbmcuanN4Il0sInNvdXJjZVJvb3QiOiIifQ==