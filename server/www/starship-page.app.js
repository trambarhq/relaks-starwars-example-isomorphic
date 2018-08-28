webpackJsonp(["starship-page"],{

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

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9zdGFyc2hpcC1wYWdlLmpzeCIsIndlYnBhY2s6Ly8vLi93aWRnZXRzL2xpc3QuanN4Iiwid2VicGFjazovLy8uL3dpZGdldHMvbG9hZGluZy5qc3giXSwibmFtZXMiOlsiU3RhcnNoaXBQYWdlIiwibWVhbndoaWxlIiwicHJvcHMiLCJyb3V0ZSIsInN3YXBpIiwic3RhcnNoaXAiLCJmaWxtcyIsInBpbG90cyIsInNob3ciLCJmZXRjaE9uZSIsInBhcmFtcyIsImlkIiwiZmV0Y2hNdWx0aXBsZSIsInBhcnRpYWwiLCJBc3luY0NvbXBvbmVudCIsImRpc3BsYXlOYW1lIiwiU3RhcnNoaXBQYWdlU3luYyIsIm5hbWUiLCJtb2RlbCIsIm1hbnVmYWN0dXJlciIsImNvc3RfaW5fY3JlZGl0cyIsImxlbmd0aCIsIm1heF9hdG1vc3BoZXJpbmdfc3BlZWQiLCJNR0xUIiwiaHlwZXJkcml2ZV9yYXRpbmciLCJjcmV3IiwicGFzc2VuZ2VyIiwiY2FyZ29fY2FwYWNpdHkiLCJjb25zdW1hYmxlcyIsInN0YXJzaGlwX2NsYXNzIiwiQ29tcG9uZW50IiwiZGVmYXVsdCIsIkxpc3QiLCJ1cmxzIiwiaXRlbXMiLCJmaWVsZCIsInBhZ2VOYW1lIiwidXJsIiwicGVuZGluZyIsIkFycmF5IiwibWFwIiwiaW5kZXgiLCJpdGVtIiwiZXh0cmFjdElEIiwiZmluZCIsInRleHQiLCJsaW5rUHJvcHMiLCJocmVmIiwiY2xhc3NOYW1lIiwidW5kZWZpbmVkIiwiZGVmYXVsdFByb3BzIiwiTG9hZGluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7O0FBRUE7O0lBRU1BLFk7Ozs7Ozs7Ozs7OztBQUdGOzs7Ozs7OztpSEFPa0JDLFM7Ozs7Ozs7eUNBQ1MsS0FBS0MsSyxFQUF0QkMsSyxVQUFBQSxLLEVBQU9DLEssVUFBQUEsSztBQUNURixxQyxHQUFR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aGlwLXBhZ2UuYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaCwgQ29tcG9uZW50IH0gZnJvbSAncHJlYWN0JztcbmltcG9ydCB7IEFzeW5jQ29tcG9uZW50IH0gZnJvbSAncmVsYWtzL3ByZWFjdCc7XG5pbXBvcnQgeyBMaXN0IH0gZnJvbSAnd2lkZ2V0cy9saXN0JztcbmltcG9ydCBMb2FkaW5nIGZyb20gJ3dpZGdldHMvbG9hZGluZyc7XG5cbi8qKiBAanN4IGggKi9cblxuY2xhc3MgU3RhcnNoaXBQYWdlIGV4dGVuZHMgQXN5bmNDb21wb25lbnQge1xuICAgIHN0YXRpYyBkaXNwbGF5TmFtZSA9ICdTdGFyc2hpcFBhZ2UnO1xuXG4gICAgLyoqXG4gICAgICogUmV0cmlldmUgcmVtb3RlIGRhdGEgYW5kIHJlbmRlciB0aGUgc3luY2hyb25pemUgaGFsZiBvZiB0aGlzIGNvbXBvbmVudFxuICAgICAqXG4gICAgICogQHBhcmFtICB7TWVhbndoaWxlfSAgbWVhbndoaWxlXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtWTm9kZX1cbiAgICAgKi9cbiAgICBhc3luYyByZW5kZXJBc3luYyhtZWFud2hpbGUpIHtcbiAgICAgICAgbGV0IHsgcm91dGUsIHN3YXBpIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICBsZXQgcHJvcHMgPSB7XG4gICAgICAgICAgICBzdGFyc2hpcDogbnVsbCxcbiAgICAgICAgICAgIGZpbG1zOiBudWxsLFxuICAgICAgICAgICAgcGlsb3RzOiBudWxsLFxuICAgICAgICAgICAgcm91dGU6IHJvdXRlLFxuICAgICAgICB9O1xuICAgICAgICBtZWFud2hpbGUuc2hvdyg8U3RhcnNoaXBQYWdlU3luYyB7Li4ucHJvcHN9IC8+KTtcbiAgICAgICAgcHJvcHMuc3RhcnNoaXAgPSBhd2FpdCBzd2FwaS5mZXRjaE9uZShgL3N0YXJzaGlwcy8ke3JvdXRlLnBhcmFtcy5pZH0vYCk7XG4gICAgICAgIG1lYW53aGlsZS5zaG93KDxTdGFyc2hpcFBhZ2VTeW5jIHsuLi5wcm9wc30gLz4pO1xuICAgICAgICBwcm9wcy5maWxtcyA9IGF3YWl0IHN3YXBpLmZldGNoTXVsdGlwbGUocHJvcHMuc3RhcnNoaXAuZmlsbXMsIHsgcGFydGlhbDogMC40IH0pO1xuICAgICAgICBtZWFud2hpbGUuc2hvdyg8U3RhcnNoaXBQYWdlU3luYyB7Li4ucHJvcHN9IC8+KTtcbiAgICAgICAgcHJvcHMucGlsb3RzID0gYXdhaXQgc3dhcGkuZmV0Y2hNdWx0aXBsZShwcm9wcy5zdGFyc2hpcC5waWxvdHMsIHsgcGFydGlhbDogMC40IH0pO1xuICAgICAgICByZXR1cm4gPFN0YXJzaGlwUGFnZVN5bmMgey4uLnByb3BzfSAvPjtcbiAgICB9XG59XG5cbmNsYXNzIFN0YXJzaGlwUGFnZVN5bmMgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIHN0YXRpYyBkaXNwbGF5TmFtZSA9ICdTdGFyc2hpcFBhZ2VTeW5jJztcblxuICAgIC8qKlxuICAgICAqIFJlbmRlciB0aGUgY29tcG9uZW50LCBtYWtpbmcgYmVzdCBlZmZvcnQgdXNpbmcgd2hhdCBwcm9wcyBhcmUgZ2l2ZW5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1ZOb2RlfVxuICAgICAqL1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IHsgcm91dGUsIHN0YXJzaGlwLCBwaWxvdHMsIGZpbG1zIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICBpZiAoIXN0YXJzaGlwKSB7XG4gICAgICAgICAgICByZXR1cm4gPExvYWRpbmcgLz47XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hhcmFjdGVyLXBhZ2VcIj5cbiAgICAgICAgICAgICAgICA8aDE+e3N0YXJzaGlwLm5hbWV9PC9oMT5cbiAgICAgICAgICAgICAgICA8ZGl2Pk1vZGVsOiB7c3RhcnNoaXAubW9kZWx9PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdj5NYW51ZmFjdHVyZXI6IHtzdGFyc2hpcC5tYW51ZmFjdHVyZXJ9PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdj5Db3N0IGluIGNyZWRpdHM6IHtzdGFyc2hpcC5jb3N0X2luX2NyZWRpdHN9PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdj5MZW5ndGg6IHtzdGFyc2hpcC5sZW5ndGh9IG08L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2Pk1heCBhdG1vc3BoZXJpbmcgc3BlZWQ6IHtzdGFyc2hpcC5tYXhfYXRtb3NwaGVyaW5nX3NwZWVkfSBrbS9oPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdj5NYXggc3VibGlnaHQgc3BlZWQ6IHtzdGFyc2hpcC5NR0xUfSBNR0xUPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdj5IeXBlcmRyaXZlIHJhdGluZzoge3N0YXJzaGlwLmh5cGVyZHJpdmVfcmF0aW5nfTwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXY+Q3Jldzoge3N0YXJzaGlwLmNyZXd9PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdj5QYXNzZW5nZXJzOiB7c3RhcnNoaXAucGFzc2VuZ2VyfTwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXY+Q2FyZ28gY2FwYWNpdHk6IHtzdGFyc2hpcC5jYXJnb19jYXBhY2l0eX0ga2c8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2PkNvbnN1bWFibGVzOiB7c3RhcnNoaXAuY29uc3VtYWJsZXN9PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdj5TdGFyc2hpcCBjbGFzczoge3N0YXJzaGlwLnN0YXJzaGlwX2NsYXNzfTwvZGl2PlxuICAgICAgICAgICAgICAgIDxoMj5QaWxvdHM8L2gyPlxuICAgICAgICAgICAgICAgIDxMaXN0IHVybHM9e3N0YXJzaGlwLnBpbG90c30gaXRlbXM9e3BpbG90c30gcGFnZU5hbWU9XCJjaGFyYWN0ZXItc3VtbWFyeVwiIHJvdXRlPXtyb3V0ZX0gLz5cbiAgICAgICAgICAgICAgICA8aDI+RmlsbXM8L2gyPlxuICAgICAgICAgICAgICAgIDxMaXN0IHVybHM9e3N0YXJzaGlwLmZpbG1zfSBpdGVtcz17ZmlsbXN9IGZpZWxkPVwidGl0bGVcIiBwYWdlTmFtZT1cImZpbG0tc3VtbWFyeVwiIHJvdXRlPXtyb3V0ZX0gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuZXhwb3J0IHtcbiAgICBTdGFyc2hpcFBhZ2UgYXMgZGVmYXVsdCxcbiAgICBTdGFyc2hpcFBhZ2UsXG4gICAgU3RhcnNoaXBQYWdlU3luYyxcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcy9zdGFyc2hpcC1wYWdlLmpzeCIsImltcG9ydCB7IGgsIENvbXBvbmVudCB9IGZyb20gJ3ByZWFjdCc7XG5cbi8qKiBAanN4IGggKi9cblxuZnVuY3Rpb24gTGlzdChwcm9wcykge1xuICAgIGxldCB7IHJvdXRlLCB1cmxzLCBpdGVtcywgZmllbGQsIHBhZ2VOYW1lIH0gPSBwcm9wcztcbiAgICBpZiAodXJscykge1xuICAgICAgICBpZiAodHlwZW9mKHVybHMpID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgaWYgKGl0ZW1zKSB7XG4gICAgICAgICAgICAgICAgaXRlbXMgPSBbIGl0ZW1zIF07XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGl0ZW1zID0gWyB7IHVybDogdXJscywgcGVuZGluZzogdHJ1ZSB9IF07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAodXJscyBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgICAgICBpdGVtcyA9IHVybHMubWFwKCh1cmwsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgdmFyIGl0ZW0gPSAoaXRlbXMpID8gaXRlbXNbaW5kZXhdIDogbnVsbDtcbiAgICAgICAgICAgICAgICBpZiAoIWl0ZW0pIHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbSA9IHsgdXJsLCBwZW5kaW5nOiB0cnVlIH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBpdGVtO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKCFpdGVtcykge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgaWYgKGl0ZW1zLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gPHVsIGNsYXNzTmFtZT1cImVtcHR5XCI+PGxpPjxzcGFuPm5vbmU8L3NwYW4+PC9saT48L3VsPjtcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgICAgPHVsPlxuICAgICAgICB7XG4gICAgICAgICAgICBpdGVtcy5tYXAoKGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgaWQgPSByb3V0ZS5leHRyYWN0SUQoaXRlbS51cmwpO1xuICAgICAgICAgICAgICAgIGxldCB1cmwgPSByb3V0ZS5maW5kKHBhZ2VOYW1lLCB7IGlkIH0pO1xuICAgICAgICAgICAgICAgIGxldCB0ZXh0ID0gaXRlbS5wZW5kaW5nID8gJy4uLicgOiBpdGVtW2ZpZWxkXTtcbiAgICAgICAgICAgICAgICBsZXQgbGlua1Byb3BzID0ge1xuICAgICAgICAgICAgICAgICAgICBocmVmOiB1cmwsXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogKGl0ZW0ucGVuZGluZykgPyAncGVuZGluZycgOiB1bmRlZmluZWQsXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICByZXR1cm4gPGxpPjxhIHsuLi5saW5rUHJvcHN9Pnt0ZXh0fTwvYT48L2xpPjtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgICAgPC91bD5cbiAgICApO1xufVxuXG5MaXN0LmRlZmF1bHRQcm9wcyA9IHtcbiAgICBmaWVsZDogJ25hbWUnXG59O1xuXG5MaXN0LmRpc3BsYXlOYW1lID0gJ0xpc3QnO1xuXG5leHBvcnQge1xuICAgIExpc3QgYXMgZGVmYXVsdCxcbiAgICBMaXN0XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vd2lkZ2V0cy9saXN0LmpzeCIsImltcG9ydCB7IGgsIENvbXBvbmVudCB9IGZyb20gJ3ByZWFjdCc7XG5cbi8qKiBAanN4IGggKi9cblxuZnVuY3Rpb24gTG9hZGluZygpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvYWRpbmdcIj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFiIGZhLWVtcGlyZSBmYS1zcGluXCIvPiBMb2FkaW5nXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cblxuTG9hZGluZy5kaXNwbGF5TmFtZSA9ICdMb2FkaW5nJztcblxuZXhwb3J0IHtcbiAgICBMb2FkaW5nIGFzIGRlZmF1bHQsXG4gICAgTG9hZGluZ1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3dpZGdldHMvbG9hZGluZy5qc3giXSwic291cmNlUm9vdCI6IiJ9