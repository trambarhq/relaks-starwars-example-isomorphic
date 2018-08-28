webpackJsonp(["vehicle-page"],{

/***/ "./pages/vehicle-page.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.VehiclePageSync = exports.VehiclePage = exports.default = undefined;

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

var VehiclePage = function (_AsyncComponent) {
    (0, _inherits3.default)(VehiclePage, _AsyncComponent);

    function VehiclePage() {
        (0, _classCallCheck3.default)(this, VehiclePage);
        return (0, _possibleConstructorReturn3.default)(this, (VehiclePage.__proto__ || (0, _getPrototypeOf2.default)(VehiclePage)).apply(this, arguments));
    }

    (0, _createClass3.default)(VehiclePage, [{
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
                                    vehicle: null,
                                    pilots: null,
                                    films: null,
                                    route: route
                                };

                                meanwhile.show((0, _preact.h)(VehiclePageSync, props));
                                _context.next = 5;
                                return swapi.fetchOne('/vehicles/' + route.params.id + '/');

                            case 5:
                                props.vehicle = _context.sent;

                                meanwhile.show((0, _preact.h)(VehiclePageSync, props));
                                _context.next = 9;
                                return swapi.fetchMultiple(props.vehicle.films, { partial: 0.4 });

                            case 9:
                                props.films = _context.sent;

                                meanwhile.show((0, _preact.h)(VehiclePageSync, props));
                                _context.next = 13;
                                return swapi.fetchMultiple(props.vehicle.pilots, { partial: 0.4 });

                            case 13:
                                props.pilots = _context.sent;

                                meanwhile.show((0, _preact.h)(VehiclePageSync, props));
                                return _context.abrupt('return', (0, _preact.h)(VehiclePageSync, props));

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
    return VehiclePage;
}(_preact2.AsyncComponent);

VehiclePage.displayName = 'VehiclePage';

var VehiclePageSync = function (_Component) {
    (0, _inherits3.default)(VehiclePageSync, _Component);

    function VehiclePageSync() {
        (0, _classCallCheck3.default)(this, VehiclePageSync);
        return (0, _possibleConstructorReturn3.default)(this, (VehiclePageSync.__proto__ || (0, _getPrototypeOf2.default)(VehiclePageSync)).apply(this, arguments));
    }

    (0, _createClass3.default)(VehiclePageSync, [{
        key: 'render',


        /**
         * Render the component, making best effort using what props are given
         *
         * @return {VNode}
         */
        value: function render() {
            var _props2 = this.props,
                route = _props2.route,
                vehicle = _props2.vehicle,
                pilots = _props2.pilots,
                films = _props2.films;

            if (!vehicle) {
                return (0, _preact.h)(_loading2.default, null);
            }
            return (0, _preact.h)(
                'div',
                null,
                (0, _preact.h)(
                    'h1',
                    null,
                    vehicle.name
                ),
                (0, _preact.h)(
                    'div',
                    null,
                    'Model: ',
                    vehicle.model
                ),
                (0, _preact.h)(
                    'div',
                    null,
                    'Manufacturer: ',
                    vehicle.manufacturer
                ),
                (0, _preact.h)(
                    'div',
                    null,
                    'Cost in credits: ',
                    vehicle.cost_in_credits
                ),
                (0, _preact.h)(
                    'div',
                    null,
                    'Length: ',
                    vehicle.length,
                    ' m'
                ),
                (0, _preact.h)(
                    'div',
                    null,
                    'Max atmosphering speed: ',
                    vehicle.max_atmosphering_speed,
                    ' km/h'
                ),
                (0, _preact.h)(
                    'div',
                    null,
                    'Crew: ',
                    vehicle.crew
                ),
                (0, _preact.h)(
                    'div',
                    null,
                    'Passengers: ',
                    vehicle.passenger
                ),
                (0, _preact.h)(
                    'div',
                    null,
                    'Cargo capacity: ',
                    vehicle.cargo_capacity,
                    ' kg'
                ),
                (0, _preact.h)(
                    'div',
                    null,
                    'Consumables: ',
                    vehicle.consumables
                ),
                (0, _preact.h)(
                    'div',
                    null,
                    'Vehicle class: ',
                    vehicle.vehicle_class
                ),
                (0, _preact.h)(
                    'h2',
                    null,
                    'Pilots'
                ),
                (0, _preact.h)(_list.List, { urls: vehicle.pilots, items: pilots, pageName: 'character-summary', route: route }),
                (0, _preact.h)(
                    'h2',
                    null,
                    'Films'
                ),
                (0, _preact.h)(_list.List, { urls: vehicle.films, items: films, field: 'title', pageName: 'film-summary', route: route })
            );
        }
    }]);
    return VehiclePageSync;
}(_preact.Component);

VehiclePageSync.displayName = 'VehiclePageSync';
exports.default = VehiclePage;
exports.VehiclePage = VehiclePage;
exports.VehiclePageSync = VehiclePageSync;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy92ZWhpY2xlLXBhZ2UuanN4Iiwid2VicGFjazovLy8uL3dpZGdldHMvbGlzdC5qc3giLCJ3ZWJwYWNrOi8vLy4vd2lkZ2V0cy9sb2FkaW5nLmpzeCJdLCJuYW1lcyI6WyJWZWhpY2xlUGFnZSIsIm1lYW53aGlsZSIsInByb3BzIiwicm91dGUiLCJzd2FwaSIsInZlaGljbGUiLCJwaWxvdHMiLCJmaWxtcyIsInNob3ciLCJmZXRjaE9uZSIsInBhcmFtcyIsImlkIiwiZmV0Y2hNdWx0aXBsZSIsInBhcnRpYWwiLCJBc3luY0NvbXBvbmVudCIsImRpc3BsYXlOYW1lIiwiVmVoaWNsZVBhZ2VTeW5jIiwibmFtZSIsIm1vZGVsIiwibWFudWZhY3R1cmVyIiwiY29zdF9pbl9jcmVkaXRzIiwibGVuZ3RoIiwibWF4X2F0bW9zcGhlcmluZ19zcGVlZCIsImNyZXciLCJwYXNzZW5nZXIiLCJjYXJnb19jYXBhY2l0eSIsImNvbnN1bWFibGVzIiwidmVoaWNsZV9jbGFzcyIsIkNvbXBvbmVudCIsImRlZmF1bHQiLCJMaXN0IiwidXJscyIsIml0ZW1zIiwiZmllbGQiLCJwYWdlTmFtZSIsInVybCIsInBlbmRpbmciLCJBcnJheSIsIm1hcCIsImluZGV4IiwiaXRlbSIsImV4dHJhY3RJRCIsImZpbmQiLCJ0ZXh0IiwibGlua1Byb3BzIiwiaHJlZiIsImNsYXNzTmFtZSIsInVuZGVmaW5lZCIsImRlZmF1bHRQcm9wcyIsIkxvYWRpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7OztBQUVBOztJQUVNQSxXOzs7Ozs7Ozs7Ozs7QUFHRjs7Ozs7Ozs7aUhBT2tCQyxTOzs7Ozs7O3lDQUNTLEtBQUtDLEssRUFBdEJDLEssVUFBQUEsSyxFQUFPQyxLLFVBQUFBLEs7QUFDVEYscUMsR0FBUTtBQUNSRyw2Q0FBUyxJQUREO0FBRVJDLDRDQUFRLElB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O0FBQ0g7QUFDRCxXQUNJO0FBQUE7QUFBQTtBQUVJVyxjQUFNTSxHQUFOLENBQVUsVUFBQ0UsSUFBRCxFQUFVO0FBQ2hCLGdCQUFJN0IsS0FBS1IsTUFBTXNDLFNBQU4sQ0FBZ0JELEtBQUtMLEdBQXJCLENBQVQ7QUFDQSxnQkFBSUEsTUFBTWhDLE1BQU11QyxJQUFOLENBQVdSLFFBQVgsRUFBcUIsRUFBRXZCLE1BQUYsRUFBckIsQ0FBVjtBQUNBLGdCQUFJZ0MsT0FBT0gsS0FBS0osT0FBTCxHQUFlLEtBQWYsR0FBdUJJLEtBQUtQLEtBQUwsQ0FBbEM7QUFDQSxnQkFBSVcsWUFBWTtBQUNaQyxzQkFBTVYsR0FETTtBQUVaVywyQkFBWU4sS0FBS0osT0FBTixHQUFpQixTQUFqQixHQUE2Qlc7QUFGNUIsYUFBaEI7QUFJQSxtQkFBTztBQUFBO0FBQUE7QUFBSTtBQUFBO0FBQU9ILDZCQUFQO0FBQW1CRDtBQUFuQjtBQUFKLGFBQVA7QUFDSCxTQVREO0FBRkosS0FESjtBQWdCSDs7QUFFRGIsS0FBS2tCLFlBQUwsR0FBb0I7QUFDaEJmLFdBQU87QUFEUyxDQUFwQjs7QUFJQUgsS0FBS2YsV0FBTCxHQUFtQixNQUFuQjs7UUFHWWMsTyxHQUFSQyxJO1FBQ0FBLEksR0FBQUEsSTs7Ozs7Ozs7Ozs7Ozs7O0FDdkRKOztBQUVBOztBQUVBLFNBQVNtQixPQUFULEdBQW1CO0FBQ2YsV0FDSTtBQUFBO0FBQUEsVUFBSyxXQUFVLFNBQWY7QUFDSTtBQUFBO0FBQUE7QUFDSSxrQ0FBRyxXQUFVLHVCQUFiLEdBREo7QUFBQTtBQUFBO0FBREosS0FESjtBQU9IOztBQUVEQSxRQUFRbEMsV0FBUixHQUFzQixTQUF0Qjs7UUFHZWMsTyxHQUFYb0IsTztRQUNBQSxPLEdBQUFBLE8iLCJmaWxlIjoidmVoaWNsZS1wYWdlLmFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGgsIENvbXBvbmVudCB9IGZyb20gJ3ByZWFjdCc7XG5pbXBvcnQgeyBBc3luY0NvbXBvbmVudCB9IGZyb20gJ3JlbGFrcy9wcmVhY3QnO1xuaW1wb3J0IHsgTGlzdCB9IGZyb20gJ3dpZGdldHMvbGlzdCc7XG5pbXBvcnQgTG9hZGluZyBmcm9tICd3aWRnZXRzL2xvYWRpbmcnO1xuXG4vKiogQGpzeCBoICovXG5cbmNsYXNzIFZlaGljbGVQYWdlIGV4dGVuZHMgQXN5bmNDb21wb25lbnQge1xuICAgIHN0YXRpYyBkaXNwbGF5TmFtZSA9ICdWZWhpY2xlUGFnZSc7XG5cbiAgICAvKipcbiAgICAgKiBSZXRyaWV2ZSByZW1vdGUgZGF0YSBhbmQgcmVuZGVyIHRoZSBzeW5jaHJvbml6ZSBoYWxmIG9mIHRoaXMgY29tcG9uZW50XG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHtNZWFud2hpbGV9ICBtZWFud2hpbGVcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1ZOb2RlfVxuICAgICAqL1xuICAgIGFzeW5jIHJlbmRlckFzeW5jKG1lYW53aGlsZSkge1xuICAgICAgICBsZXQgeyByb3V0ZSwgc3dhcGkgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGxldCBwcm9wcyA9IHtcbiAgICAgICAgICAgIHZlaGljbGU6IG51bGwsXG4gICAgICAgICAgICBwaWxvdHM6IG51bGwsXG4gICAgICAgICAgICBmaWxtczogbnVsbCxcbiAgICAgICAgICAgIHJvdXRlOiByb3V0ZSxcbiAgICAgICAgfTtcbiAgICAgICAgbWVhbndoaWxlLnNob3coPFZlaGljbGVQYWdlU3luYyB7Li4ucHJvcHN9IC8+KTtcbiAgICAgICAgcHJvcHMudmVoaWNsZSA9IGF3YWl0IHN3YXBpLmZldGNoT25lKGAvdmVoaWNsZXMvJHtyb3V0ZS5wYXJhbXMuaWR9L2ApO1xuICAgICAgICBtZWFud2hpbGUuc2hvdyg8VmVoaWNsZVBhZ2VTeW5jIHsuLi5wcm9wc30gLz4pO1xuICAgICAgICBwcm9wcy5maWxtcyA9IGF3YWl0IHN3YXBpLmZldGNoTXVsdGlwbGUocHJvcHMudmVoaWNsZS5maWxtcywgeyBwYXJ0aWFsOiAwLjQgfSk7XG4gICAgICAgIG1lYW53aGlsZS5zaG93KDxWZWhpY2xlUGFnZVN5bmMgey4uLnByb3BzfSAvPik7XG4gICAgICAgIHByb3BzLnBpbG90cyA9IGF3YWl0IHN3YXBpLmZldGNoTXVsdGlwbGUocHJvcHMudmVoaWNsZS5waWxvdHMsIHsgcGFydGlhbDogMC40IH0pO1xuICAgICAgICBtZWFud2hpbGUuc2hvdyg8VmVoaWNsZVBhZ2VTeW5jIHsuLi5wcm9wc30gLz4pO1xuICAgICAgICByZXR1cm4gPFZlaGljbGVQYWdlU3luYyB7Li4ucHJvcHN9IC8+O1xuICAgIH1cbn1cblxuY2xhc3MgVmVoaWNsZVBhZ2VTeW5jIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgZGlzcGxheU5hbWUgPSAnVmVoaWNsZVBhZ2VTeW5jJztcblxuICAgIC8qKlxuICAgICAqIFJlbmRlciB0aGUgY29tcG9uZW50LCBtYWtpbmcgYmVzdCBlZmZvcnQgdXNpbmcgd2hhdCBwcm9wcyBhcmUgZ2l2ZW5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1ZOb2RlfVxuICAgICAqL1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IHsgcm91dGUsIHZlaGljbGUsIHBpbG90cywgZmlsbXMgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGlmICghdmVoaWNsZSkge1xuICAgICAgICAgICAgcmV0dXJuIDxMb2FkaW5nIC8+O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxoMT57dmVoaWNsZS5uYW1lfTwvaDE+XG4gICAgICAgICAgICAgICAgPGRpdj5Nb2RlbDoge3ZlaGljbGUubW9kZWx9PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdj5NYW51ZmFjdHVyZXI6IHt2ZWhpY2xlLm1hbnVmYWN0dXJlcn08L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2PkNvc3QgaW4gY3JlZGl0czoge3ZlaGljbGUuY29zdF9pbl9jcmVkaXRzfTwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXY+TGVuZ3RoOiB7dmVoaWNsZS5sZW5ndGh9IG08L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2Pk1heCBhdG1vc3BoZXJpbmcgc3BlZWQ6IHt2ZWhpY2xlLm1heF9hdG1vc3BoZXJpbmdfc3BlZWR9IGttL2g8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2PkNyZXc6IHt2ZWhpY2xlLmNyZXd9PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdj5QYXNzZW5nZXJzOiB7dmVoaWNsZS5wYXNzZW5nZXJ9PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdj5DYXJnbyBjYXBhY2l0eToge3ZlaGljbGUuY2FyZ29fY2FwYWNpdHl9IGtnPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdj5Db25zdW1hYmxlczoge3ZlaGljbGUuY29uc3VtYWJsZXN9PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdj5WZWhpY2xlIGNsYXNzOiB7dmVoaWNsZS52ZWhpY2xlX2NsYXNzfTwvZGl2PlxuICAgICAgICAgICAgICAgIDxoMj5QaWxvdHM8L2gyPlxuICAgICAgICAgICAgICAgIDxMaXN0IHVybHM9e3ZlaGljbGUucGlsb3RzfSBpdGVtcz17cGlsb3RzfSBwYWdlTmFtZT1cImNoYXJhY3Rlci1zdW1tYXJ5XCIgcm91dGU9e3JvdXRlfSAvPlxuICAgICAgICAgICAgICAgIDxoMj5GaWxtczwvaDI+XG4gICAgICAgICAgICAgICAgPExpc3QgdXJscz17dmVoaWNsZS5maWxtc30gaXRlbXM9e2ZpbG1zfSBmaWVsZD1cInRpdGxlXCIgcGFnZU5hbWU9XCJmaWxtLXN1bW1hcnlcIiByb3V0ZT17cm91dGV9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCB7XG4gICAgVmVoaWNsZVBhZ2UgYXMgZGVmYXVsdCxcbiAgICBWZWhpY2xlUGFnZSxcbiAgICBWZWhpY2xlUGFnZVN5bmMsXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXMvdmVoaWNsZS1wYWdlLmpzeCIsImltcG9ydCB7IGgsIENvbXBvbmVudCB9IGZyb20gJ3ByZWFjdCc7XG5cbi8qKiBAanN4IGggKi9cblxuZnVuY3Rpb24gTGlzdChwcm9wcykge1xuICAgIGxldCB7IHJvdXRlLCB1cmxzLCBpdGVtcywgZmllbGQsIHBhZ2VOYW1lIH0gPSBwcm9wcztcbiAgICBpZiAodXJscykge1xuICAgICAgICBpZiAodHlwZW9mKHVybHMpID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgaWYgKGl0ZW1zKSB7XG4gICAgICAgICAgICAgICAgaXRlbXMgPSBbIGl0ZW1zIF07XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGl0ZW1zID0gWyB7IHVybDogdXJscywgcGVuZGluZzogdHJ1ZSB9IF07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAodXJscyBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgICAgICBpdGVtcyA9IHVybHMubWFwKCh1cmwsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgdmFyIGl0ZW0gPSAoaXRlbXMpID8gaXRlbXNbaW5kZXhdIDogbnVsbDtcbiAgICAgICAgICAgICAgICBpZiAoIWl0ZW0pIHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbSA9IHsgdXJsLCBwZW5kaW5nOiB0cnVlIH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBpdGVtO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKCFpdGVtcykge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgaWYgKGl0ZW1zLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gPHVsIGNsYXNzTmFtZT1cImVtcHR5XCI+PGxpPjxzcGFuPm5vbmU8L3NwYW4+PC9saT48L3VsPjtcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgICAgPHVsPlxuICAgICAgICB7XG4gICAgICAgICAgICBpdGVtcy5tYXAoKGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgaWQgPSByb3V0ZS5leHRyYWN0SUQoaXRlbS51cmwpO1xuICAgICAgICAgICAgICAgIGxldCB1cmwgPSByb3V0ZS5maW5kKHBhZ2VOYW1lLCB7IGlkIH0pO1xuICAgICAgICAgICAgICAgIGxldCB0ZXh0ID0gaXRlbS5wZW5kaW5nID8gJy4uLicgOiBpdGVtW2ZpZWxkXTtcbiAgICAgICAgICAgICAgICBsZXQgbGlua1Byb3BzID0ge1xuICAgICAgICAgICAgICAgICAgICBocmVmOiB1cmwsXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogKGl0ZW0ucGVuZGluZykgPyAncGVuZGluZycgOiB1bmRlZmluZWQsXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICByZXR1cm4gPGxpPjxhIHsuLi5saW5rUHJvcHN9Pnt0ZXh0fTwvYT48L2xpPjtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgICAgPC91bD5cbiAgICApO1xufVxuXG5MaXN0LmRlZmF1bHRQcm9wcyA9IHtcbiAgICBmaWVsZDogJ25hbWUnXG59O1xuXG5MaXN0LmRpc3BsYXlOYW1lID0gJ0xpc3QnO1xuXG5leHBvcnQge1xuICAgIExpc3QgYXMgZGVmYXVsdCxcbiAgICBMaXN0XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vd2lkZ2V0cy9saXN0LmpzeCIsImltcG9ydCB7IGgsIENvbXBvbmVudCB9IGZyb20gJ3ByZWFjdCc7XG5cbi8qKiBAanN4IGggKi9cblxuZnVuY3Rpb24gTG9hZGluZygpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvYWRpbmdcIj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFiIGZhLWVtcGlyZSBmYS1zcGluXCIvPiBMb2FkaW5nXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cblxuTG9hZGluZy5kaXNwbGF5TmFtZSA9ICdMb2FkaW5nJztcblxuZXhwb3J0IHtcbiAgICBMb2FkaW5nIGFzIGRlZmF1bHQsXG4gICAgTG9hZGluZ1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3dpZGdldHMvbG9hZGluZy5qc3giXSwic291cmNlUm9vdCI6IiJ9