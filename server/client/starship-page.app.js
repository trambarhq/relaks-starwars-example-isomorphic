exports.ids = ["starship-page"];
exports.modules = {

/***/ "./pages/starship-page.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.StarshipPageSync = exports.StarshipPage = exports.default = undefined;

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

var StarshipPage = function (_AsyncComponent) {
    (0, _inherits3.default)(StarshipPage, _AsyncComponent);

    function StarshipPage() {
        (0, _classCallCheck3.default)(this, StarshipPage);
        return (0, _possibleConstructorReturn3.default)(this, (StarshipPage.__proto__ || (0, _getPrototypeOf2.default)(StarshipPage)).apply(this, arguments));
    }

    (0, _createClass3.default)(StarshipPage, [{
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
                                    starship: null,
                                    films: null,
                                    pilots: null,
                                    route: route
                                };

                                meanwhile.show((0, _preact.h)(StarshipPageSync, props));
                                _context.next = 5;
                                return swapi.fetchOne('/starships/' + route.params.id + '/');

                            case 5:
                                props.starship = _context.sent;

                                meanwhile.show((0, _preact.h)(StarshipPageSync, props));
                                _context.next = 9;
                                return swapi.fetchMultiple(props.starship.films, { partial: 0.4 });

                            case 9:
                                props.films = _context.sent;

                                meanwhile.show((0, _preact.h)(StarshipPageSync, props));
                                _context.next = 13;
                                return swapi.fetchMultiple(props.starship.pilots, { partial: 0.4 });

                            case 13:
                                props.pilots = _context.sent;
                                return _context.abrupt('return', (0, _preact.h)(StarshipPageSync, props));

                            case 15:
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
    return StarshipPage;
}(_preact2.AsyncComponent);

StarshipPage.displayName = 'StarshipPage';

var StarshipPageSync = function (_Component) {
    (0, _inherits3.default)(StarshipPageSync, _Component);

    function StarshipPageSync() {
        (0, _classCallCheck3.default)(this, StarshipPageSync);
        return (0, _possibleConstructorReturn3.default)(this, (StarshipPageSync.__proto__ || (0, _getPrototypeOf2.default)(StarshipPageSync)).apply(this, arguments));
    }

    (0, _createClass3.default)(StarshipPageSync, [{
        key: 'render',


        /**
         * Render the component, making best effort using what props are given
         *
         * @return {VNode}
         */
        value: function render() {
            var _props2 = this.props,
                route = _props2.route,
                starship = _props2.starship,
                pilots = _props2.pilots,
                films = _props2.films;

            if (!starship) {
                return (0, _preact.h)(_loading2.default, null);
            }
            return (0, _preact.h)(
                'div',
                { className: 'character-page' },
                (0, _preact.h)(
                    'h1',
                    null,
                    starship.name
                ),
                (0, _preact.h)(
                    'div',
                    null,
                    'Model: ',
                    starship.model
                ),
                (0, _preact.h)(
                    'div',
                    null,
                    'Manufacturer: ',
                    starship.manufacturer
                ),
                (0, _preact.h)(
                    'div',
                    null,
                    'Cost in credits: ',
                    starship.cost_in_credits
                ),
                (0, _preact.h)(
                    'div',
                    null,
                    'Length: ',
                    starship.length,
                    ' m'
                ),
                (0, _preact.h)(
                    'div',
                    null,
                    'Max atmosphering speed: ',
                    starship.max_atmosphering_speed,
                    ' km/h'
                ),
                (0, _preact.h)(
                    'div',
                    null,
                    'Max sublight speed: ',
                    starship.MGLT,
                    ' MGLT'
                ),
                (0, _preact.h)(
                    'div',
                    null,
                    'Hyperdrive rating: ',
                    starship.hyperdrive_rating
                ),
                (0, _preact.h)(
                    'div',
                    null,
                    'Crew: ',
                    starship.crew
                ),
                (0, _preact.h)(
                    'div',
                    null,
                    'Passengers: ',
                    starship.passenger
                ),
                (0, _preact.h)(
                    'div',
                    null,
                    'Cargo capacity: ',
                    starship.cargo_capacity,
                    ' kg'
                ),
                (0, _preact.h)(
                    'div',
                    null,
                    'Consumables: ',
                    starship.consumables
                ),
                (0, _preact.h)(
                    'div',
                    null,
                    'Starship class: ',
                    starship.starship_class
                ),
                (0, _preact.h)(
                    'h2',
                    null,
                    'Pilots'
                ),
                (0, _preact.h)(_list.List, { urls: starship.pilots, items: pilots, pageName: 'character-summary', route: route }),
                (0, _preact.h)(
                    'h2',
                    null,
                    'Films'
                ),
                (0, _preact.h)(_list.List, { urls: starship.films, items: films, field: 'title', pageName: 'film-summary', route: route })
            );
        }
    }]);
    return StarshipPageSync;
}(_preact.Component);

StarshipPageSync.displayName = 'StarshipPageSync';
exports.default = StarshipPage;
exports.StarshipPage = StarshipPage;
exports.StarshipPageSync = StarshipPageSync;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9zdGFyc2hpcC1wYWdlLmpzeCIsIndlYnBhY2s6Ly8vLi93aWRnZXRzL2xpc3QuanN4Iiwid2VicGFjazovLy8uL3dpZGdldHMvbG9hZGluZy5qc3giXSwibmFtZXMiOlsiU3RhcnNoaXBQYWdlIiwibWVhbndoaWxlIiwicHJvcHMiLCJyb3V0ZSIsInN3YXBpIiwic3RhcnNoaXAiLCJmaWxtcyIsInBpbG90cyIsInNob3ciLCJmZXRjaE9uZSIsInBhcmFtcyIsImlkIiwiZmV0Y2hNdWx0aXBsZSIsInBhcnRpYWwiLCJBc3luY0NvbXBvbmVudCIsImRpc3BsYXlOYW1lIiwiU3RhcnNoaXBQYWdlU3luYyIsIm5hbWUiLCJtb2RlbCIsIm1hbnVmYWN0dXJlciIsImNvc3RfaW5fY3JlZGl0cyIsImxlbmd0aCIsIm1heF9hdG1vc3BoZXJpbmdfc3BlZWQiLCJNR0xUIiwiaHlwZXJkcml2ZV9yYXRpbmciLCJjcmV3IiwicGFzc2VuZ2VyIiwiY2FyZ29fY2FwYWNpdHkiLCJjb25zdW1hYmxlcyIsInN0YXJzaGlwX2NsYXNzIiwiQ29tcG9uZW50IiwiZGVmYXVsdCIsIkxpc3QiLCJ1cmxzIiwiaXRlbXMiLCJmaWVsZCIsInBhZ2VOYW1lIiwidXJsIiwicGVuZGluZyIsIkFycmF5IiwibWFwIiwiaW5kZXgiLCJpdGVtIiwiZXh0cmFjdElEIiwiZmluZCIsInRleHQiLCJsaW5rUHJvcHMiLCJocmVmIiwiY2xhc3NOYW1lIiwidW5kZWZpbmVkIiwiZGVmYXVsdFByb3BzIiwiTG9hZGluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7OztBQUVBOztJQUVNQSxZOzs7Ozs7Ozs7Ozs7QUFHRjs7Ozs7Ozs7aUhBT2tCQyxTOzs7Ozs7O3lDQUNTLEtBQUtDLEssRUFBdEJDLEssVUFBQUEsSyxFQUFPQyxLLFVBQUFBLEs7QUFDVEYscUMsR0FB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c2hpcC1wYWdlLmFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGgsIENvbXBvbmVudCB9IGZyb20gJ3ByZWFjdCc7XG5pbXBvcnQgeyBBc3luY0NvbXBvbmVudCB9IGZyb20gJ3JlbGFrcy9wcmVhY3QnO1xuaW1wb3J0IHsgTGlzdCB9IGZyb20gJ3dpZGdldHMvbGlzdCc7XG5pbXBvcnQgTG9hZGluZyBmcm9tICd3aWRnZXRzL2xvYWRpbmcnO1xuXG4vKiogQGpzeCBoICovXG5cbmNsYXNzIFN0YXJzaGlwUGFnZSBleHRlbmRzIEFzeW5jQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgZGlzcGxheU5hbWUgPSAnU3RhcnNoaXBQYWdlJztcblxuICAgIC8qKlxuICAgICAqIFJldHJpZXZlIHJlbW90ZSBkYXRhIGFuZCByZW5kZXIgdGhlIHN5bmNocm9uaXplIGhhbGYgb2YgdGhpcyBjb21wb25lbnRcbiAgICAgKlxuICAgICAqIEBwYXJhbSAge01lYW53aGlsZX0gIG1lYW53aGlsZVxuICAgICAqXG4gICAgICogQHJldHVybiB7Vk5vZGV9XG4gICAgICovXG4gICAgYXN5bmMgcmVuZGVyQXN5bmMobWVhbndoaWxlKSB7XG4gICAgICAgIGxldCB7IHJvdXRlLCBzd2FwaSB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgbGV0IHByb3BzID0ge1xuICAgICAgICAgICAgc3RhcnNoaXA6IG51bGwsXG4gICAgICAgICAgICBmaWxtczogbnVsbCxcbiAgICAgICAgICAgIHBpbG90czogbnVsbCxcbiAgICAgICAgICAgIHJvdXRlOiByb3V0ZSxcbiAgICAgICAgfTtcbiAgICAgICAgbWVhbndoaWxlLnNob3coPFN0YXJzaGlwUGFnZVN5bmMgey4uLnByb3BzfSAvPik7XG4gICAgICAgIHByb3BzLnN0YXJzaGlwID0gYXdhaXQgc3dhcGkuZmV0Y2hPbmUoYC9zdGFyc2hpcHMvJHtyb3V0ZS5wYXJhbXMuaWR9L2ApO1xuICAgICAgICBtZWFud2hpbGUuc2hvdyg8U3RhcnNoaXBQYWdlU3luYyB7Li4ucHJvcHN9IC8+KTtcbiAgICAgICAgcHJvcHMuZmlsbXMgPSBhd2FpdCBzd2FwaS5mZXRjaE11bHRpcGxlKHByb3BzLnN0YXJzaGlwLmZpbG1zLCB7IHBhcnRpYWw6IDAuNCB9KTtcbiAgICAgICAgbWVhbndoaWxlLnNob3coPFN0YXJzaGlwUGFnZVN5bmMgey4uLnByb3BzfSAvPik7XG4gICAgICAgIHByb3BzLnBpbG90cyA9IGF3YWl0IHN3YXBpLmZldGNoTXVsdGlwbGUocHJvcHMuc3RhcnNoaXAucGlsb3RzLCB7IHBhcnRpYWw6IDAuNCB9KTtcbiAgICAgICAgcmV0dXJuIDxTdGFyc2hpcFBhZ2VTeW5jIHsuLi5wcm9wc30gLz47XG4gICAgfVxufVxuXG5jbGFzcyBTdGFyc2hpcFBhZ2VTeW5jIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgZGlzcGxheU5hbWUgPSAnU3RhcnNoaXBQYWdlU3luYyc7XG5cbiAgICAvKipcbiAgICAgKiBSZW5kZXIgdGhlIGNvbXBvbmVudCwgbWFraW5nIGJlc3QgZWZmb3J0IHVzaW5nIHdoYXQgcHJvcHMgYXJlIGdpdmVuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtWTm9kZX1cbiAgICAgKi9cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCB7IHJvdXRlLCBzdGFyc2hpcCwgcGlsb3RzLCBmaWxtcyB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgaWYgKCFzdGFyc2hpcCkge1xuICAgICAgICAgICAgcmV0dXJuIDxMb2FkaW5nIC8+O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoYXJhY3Rlci1wYWdlXCI+XG4gICAgICAgICAgICAgICAgPGgxPntzdGFyc2hpcC5uYW1lfTwvaDE+XG4gICAgICAgICAgICAgICAgPGRpdj5Nb2RlbDoge3N0YXJzaGlwLm1vZGVsfTwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXY+TWFudWZhY3R1cmVyOiB7c3RhcnNoaXAubWFudWZhY3R1cmVyfTwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXY+Q29zdCBpbiBjcmVkaXRzOiB7c3RhcnNoaXAuY29zdF9pbl9jcmVkaXRzfTwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXY+TGVuZ3RoOiB7c3RhcnNoaXAubGVuZ3RofSBtPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdj5NYXggYXRtb3NwaGVyaW5nIHNwZWVkOiB7c3RhcnNoaXAubWF4X2F0bW9zcGhlcmluZ19zcGVlZH0ga20vaDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXY+TWF4IHN1YmxpZ2h0IHNwZWVkOiB7c3RhcnNoaXAuTUdMVH0gTUdMVDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXY+SHlwZXJkcml2ZSByYXRpbmc6IHtzdGFyc2hpcC5oeXBlcmRyaXZlX3JhdGluZ308L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2PkNyZXc6IHtzdGFyc2hpcC5jcmV3fTwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXY+UGFzc2VuZ2Vyczoge3N0YXJzaGlwLnBhc3Nlbmdlcn08L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2PkNhcmdvIGNhcGFjaXR5OiB7c3RhcnNoaXAuY2FyZ29fY2FwYWNpdHl9IGtnPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdj5Db25zdW1hYmxlczoge3N0YXJzaGlwLmNvbnN1bWFibGVzfTwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXY+U3RhcnNoaXAgY2xhc3M6IHtzdGFyc2hpcC5zdGFyc2hpcF9jbGFzc308L2Rpdj5cbiAgICAgICAgICAgICAgICA8aDI+UGlsb3RzPC9oMj5cbiAgICAgICAgICAgICAgICA8TGlzdCB1cmxzPXtzdGFyc2hpcC5waWxvdHN9IGl0ZW1zPXtwaWxvdHN9IHBhZ2VOYW1lPVwiY2hhcmFjdGVyLXN1bW1hcnlcIiByb3V0ZT17cm91dGV9IC8+XG4gICAgICAgICAgICAgICAgPGgyPkZpbG1zPC9oMj5cbiAgICAgICAgICAgICAgICA8TGlzdCB1cmxzPXtzdGFyc2hpcC5maWxtc30gaXRlbXM9e2ZpbG1zfSBmaWVsZD1cInRpdGxlXCIgcGFnZU5hbWU9XCJmaWxtLXN1bW1hcnlcIiByb3V0ZT17cm91dGV9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCB7XG4gICAgU3RhcnNoaXBQYWdlIGFzIGRlZmF1bHQsXG4gICAgU3RhcnNoaXBQYWdlLFxuICAgIFN0YXJzaGlwUGFnZVN5bmMsXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXMvc3RhcnNoaXAtcGFnZS5qc3giLCJpbXBvcnQgeyBoLCBDb21wb25lbnQgfSBmcm9tICdwcmVhY3QnO1xuXG4vKiogQGpzeCBoICovXG5cbmZ1bmN0aW9uIExpc3QocHJvcHMpIHtcbiAgICBsZXQgeyByb3V0ZSwgdXJscywgaXRlbXMsIGZpZWxkLCBwYWdlTmFtZSB9ID0gcHJvcHM7XG4gICAgaWYgKHVybHMpIHtcbiAgICAgICAgaWYgKHR5cGVvZih1cmxzKSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIGlmIChpdGVtcykge1xuICAgICAgICAgICAgICAgIGl0ZW1zID0gWyBpdGVtcyBdO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpdGVtcyA9IFsgeyB1cmw6IHVybHMsIHBlbmRpbmc6IHRydWUgfSBdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHVybHMgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICAgICAgaXRlbXMgPSB1cmxzLm1hcCgodXJsLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgIHZhciBpdGVtID0gKGl0ZW1zKSA/IGl0ZW1zW2luZGV4XSA6IG51bGw7XG4gICAgICAgICAgICAgICAgaWYgKCFpdGVtKSB7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW0gPSB7IHVybCwgcGVuZGluZzogdHJ1ZSB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gaXRlbTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmICghaXRlbXMpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGlmIChpdGVtcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuIDx1bCBjbGFzc05hbWU9XCJlbXB0eVwiPjxsaT48c3Bhbj5ub25lPC9zcGFuPjwvbGk+PC91bD47XG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICAgIDx1bD5cbiAgICAgICAge1xuICAgICAgICAgICAgaXRlbXMubWFwKChpdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IGlkID0gcm91dGUuZXh0cmFjdElEKGl0ZW0udXJsKTtcbiAgICAgICAgICAgICAgICBsZXQgdXJsID0gcm91dGUuZmluZChwYWdlTmFtZSwgeyBpZCB9KTtcbiAgICAgICAgICAgICAgICBsZXQgdGV4dCA9IGl0ZW0ucGVuZGluZyA/ICcuLi4nIDogaXRlbVtmaWVsZF07XG4gICAgICAgICAgICAgICAgbGV0IGxpbmtQcm9wcyA9IHtcbiAgICAgICAgICAgICAgICAgICAgaHJlZjogdXJsLFxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU6IChpdGVtLnBlbmRpbmcpID8gJ3BlbmRpbmcnIDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgcmV0dXJuIDxsaT48YSB7Li4ubGlua1Byb3BzfT57dGV4dH08L2E+PC9saT47XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICAgIDwvdWw+XG4gICAgKTtcbn1cblxuTGlzdC5kZWZhdWx0UHJvcHMgPSB7XG4gICAgZmllbGQ6ICduYW1lJ1xufTtcblxuTGlzdC5kaXNwbGF5TmFtZSA9ICdMaXN0JztcblxuZXhwb3J0IHtcbiAgICBMaXN0IGFzIGRlZmF1bHQsXG4gICAgTGlzdFxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3dpZGdldHMvbGlzdC5qc3giLCJpbXBvcnQgeyBoLCBDb21wb25lbnQgfSBmcm9tICdwcmVhY3QnO1xuXG4vKiogQGpzeCBoICovXG5cbmZ1bmN0aW9uIExvYWRpbmcoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2FkaW5nXCI+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhYiBmYS1lbXBpcmUgZmEtc3BpblwiLz4gTG9hZGluZ1xuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cbkxvYWRpbmcuZGlzcGxheU5hbWUgPSAnTG9hZGluZyc7XG5cbmV4cG9ydCB7XG4gICAgTG9hZGluZyBhcyBkZWZhdWx0LFxuICAgIExvYWRpbmdcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi93aWRnZXRzL2xvYWRpbmcuanN4Il0sInNvdXJjZVJvb3QiOiIifQ==