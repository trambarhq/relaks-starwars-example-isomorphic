exports.ids = ["vehicle-page"];
exports.modules = {

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

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy92ZWhpY2xlLXBhZ2UuanN4Iiwid2VicGFjazovLy8uL3dpZGdldHMvbGlzdC5qc3giLCJ3ZWJwYWNrOi8vLy4vd2lkZ2V0cy9sb2FkaW5nLmpzeCJdLCJuYW1lcyI6WyJWZWhpY2xlUGFnZSIsIm1lYW53aGlsZSIsInByb3BzIiwicm91dGUiLCJzd2FwaSIsInZlaGljbGUiLCJwaWxvdHMiLCJmaWxtcyIsInNob3ciLCJmZXRjaE9uZSIsInBhcmFtcyIsImlkIiwiZmV0Y2hNdWx0aXBsZSIsInBhcnRpYWwiLCJBc3luY0NvbXBvbmVudCIsImRpc3BsYXlOYW1lIiwiVmVoaWNsZVBhZ2VTeW5jIiwibmFtZSIsIm1vZGVsIiwibWFudWZhY3R1cmVyIiwiY29zdF9pbl9jcmVkaXRzIiwibGVuZ3RoIiwibWF4X2F0bW9zcGhlcmluZ19zcGVlZCIsImNyZXciLCJwYXNzZW5nZXIiLCJjYXJnb19jYXBhY2l0eSIsImNvbnN1bWFibGVzIiwidmVoaWNsZV9jbGFzcyIsIkNvbXBvbmVudCIsImRlZmF1bHQiLCJMaXN0IiwidXJscyIsIml0ZW1zIiwiZmllbGQiLCJwYWdlTmFtZSIsInVybCIsInBlbmRpbmciLCJBcnJheSIsIm1hcCIsImluZGV4IiwiaXRlbSIsImV4dHJhY3RJRCIsImZpbmQiLCJ0ZXh0IiwibGlua1Byb3BzIiwiaHJlZiIsImNsYXNzTmFtZSIsInVuZGVmaW5lZCIsImRlZmF1bHRQcm9wcyIsIkxvYWRpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7QUFFQTs7SUFFTUEsVzs7Ozs7Ozs7Ozs7O0FBR0Y7Ozs7Ozs7O2lIQU9rQkMsUzs7Ozs7Ozt5Q0FDUyxLQUFLQyxLLEVBQXRCQyxLLFVBQUFBLEssRUFBT0MsSyxVQUFBQSxLO0FBQ1RGLHFDLEdBQVE7QUFDUkcsNkNBQVMsSUFERDtBQUVSQyw0Q0FBUSxJ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UDtBQUNIO0FBQ0QsV0FDSTtBQUFBO0FBQUE7QUFFSVcsY0FBTU0sR0FBTixDQUFVLFVBQUNFLElBQUQsRUFBVTtBQUNoQixnQkFBSTdCLEtBQUtSLE1BQU1zQyxTQUFOLENBQWdCRCxLQUFLTCxHQUFyQixDQUFUO0FBQ0EsZ0JBQUlBLE1BQU1oQyxNQUFNdUMsSUFBTixDQUFXUixRQUFYLEVBQXFCLEVBQUV2QixNQUFGLEVBQXJCLENBQVY7QUFDQSxnQkFBSWdDLE9BQU9ILEtBQUtKLE9BQUwsR0FBZSxLQUFmLEdBQXVCSSxLQUFLUCxLQUFMLENBQWxDO0FBQ0EsZ0JBQUlXLFlBQVk7QUFDWkMsc0JBQU1WLEdBRE07QUFFWlcsMkJBQVlOLEtBQUtKLE9BQU4sR0FBaUIsU0FBakIsR0FBNkJXO0FBRjVCLGFBQWhCO0FBSUEsbUJBQU87QUFBQTtBQUFBO0FBQUk7QUFBQTtBQUFPSCw2QkFBUDtBQUFtQkQ7QUFBbkI7QUFBSixhQUFQO0FBQ0gsU0FURDtBQUZKLEtBREo7QUFnQkg7O0FBRURiLEtBQUtrQixZQUFMLEdBQW9CO0FBQ2hCZixXQUFPO0FBRFMsQ0FBcEI7O0FBSUFILEtBQUtmLFdBQUwsR0FBbUIsTUFBbkI7O1FBR1ljLE8sR0FBUkMsSTtRQUNBQSxJLEdBQUFBLEk7Ozs7Ozs7Ozs7Ozs7OztBQ3ZESjs7QUFFQTs7QUFFQSxTQUFTbUIsT0FBVCxHQUFtQjtBQUNmLFdBQ0k7QUFBQTtBQUFBLFVBQUssV0FBVSxTQUFmO0FBQ0k7QUFBQTtBQUFBO0FBQ0ksa0NBQUcsV0FBVSx1QkFBYixHQURKO0FBQUE7QUFBQTtBQURKLEtBREo7QUFPSDs7QUFFREEsUUFBUWxDLFdBQVIsR0FBc0IsU0FBdEI7O1FBR2VjLE8sR0FBWG9CLE87UUFDQUEsTyxHQUFBQSxPIiwiZmlsZSI6InZlaGljbGUtcGFnZS5hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBoLCBDb21wb25lbnQgfSBmcm9tICdwcmVhY3QnO1xuaW1wb3J0IHsgQXN5bmNDb21wb25lbnQgfSBmcm9tICdyZWxha3MvcHJlYWN0JztcbmltcG9ydCB7IExpc3QgfSBmcm9tICd3aWRnZXRzL2xpc3QnO1xuaW1wb3J0IExvYWRpbmcgZnJvbSAnd2lkZ2V0cy9sb2FkaW5nJztcblxuLyoqIEBqc3ggaCAqL1xuXG5jbGFzcyBWZWhpY2xlUGFnZSBleHRlbmRzIEFzeW5jQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgZGlzcGxheU5hbWUgPSAnVmVoaWNsZVBhZ2UnO1xuXG4gICAgLyoqXG4gICAgICogUmV0cmlldmUgcmVtb3RlIGRhdGEgYW5kIHJlbmRlciB0aGUgc3luY2hyb25pemUgaGFsZiBvZiB0aGlzIGNvbXBvbmVudFxuICAgICAqXG4gICAgICogQHBhcmFtICB7TWVhbndoaWxlfSAgbWVhbndoaWxlXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtWTm9kZX1cbiAgICAgKi9cbiAgICBhc3luYyByZW5kZXJBc3luYyhtZWFud2hpbGUpIHtcbiAgICAgICAgbGV0IHsgcm91dGUsIHN3YXBpIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICBsZXQgcHJvcHMgPSB7XG4gICAgICAgICAgICB2ZWhpY2xlOiBudWxsLFxuICAgICAgICAgICAgcGlsb3RzOiBudWxsLFxuICAgICAgICAgICAgZmlsbXM6IG51bGwsXG4gICAgICAgICAgICByb3V0ZTogcm91dGUsXG4gICAgICAgIH07XG4gICAgICAgIG1lYW53aGlsZS5zaG93KDxWZWhpY2xlUGFnZVN5bmMgey4uLnByb3BzfSAvPik7XG4gICAgICAgIHByb3BzLnZlaGljbGUgPSBhd2FpdCBzd2FwaS5mZXRjaE9uZShgL3ZlaGljbGVzLyR7cm91dGUucGFyYW1zLmlkfS9gKTtcbiAgICAgICAgbWVhbndoaWxlLnNob3coPFZlaGljbGVQYWdlU3luYyB7Li4ucHJvcHN9IC8+KTtcbiAgICAgICAgcHJvcHMuZmlsbXMgPSBhd2FpdCBzd2FwaS5mZXRjaE11bHRpcGxlKHByb3BzLnZlaGljbGUuZmlsbXMsIHsgcGFydGlhbDogMC40IH0pO1xuICAgICAgICBtZWFud2hpbGUuc2hvdyg8VmVoaWNsZVBhZ2VTeW5jIHsuLi5wcm9wc30gLz4pO1xuICAgICAgICBwcm9wcy5waWxvdHMgPSBhd2FpdCBzd2FwaS5mZXRjaE11bHRpcGxlKHByb3BzLnZlaGljbGUucGlsb3RzLCB7IHBhcnRpYWw6IDAuNCB9KTtcbiAgICAgICAgbWVhbndoaWxlLnNob3coPFZlaGljbGVQYWdlU3luYyB7Li4ucHJvcHN9IC8+KTtcbiAgICAgICAgcmV0dXJuIDxWZWhpY2xlUGFnZVN5bmMgey4uLnByb3BzfSAvPjtcbiAgICB9XG59XG5cbmNsYXNzIFZlaGljbGVQYWdlU3luYyBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgc3RhdGljIGRpc3BsYXlOYW1lID0gJ1ZlaGljbGVQYWdlU3luYyc7XG5cbiAgICAvKipcbiAgICAgKiBSZW5kZXIgdGhlIGNvbXBvbmVudCwgbWFraW5nIGJlc3QgZWZmb3J0IHVzaW5nIHdoYXQgcHJvcHMgYXJlIGdpdmVuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtWTm9kZX1cbiAgICAgKi9cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCB7IHJvdXRlLCB2ZWhpY2xlLCBwaWxvdHMsIGZpbG1zIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICBpZiAoIXZlaGljbGUpIHtcbiAgICAgICAgICAgIHJldHVybiA8TG9hZGluZyAvPjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8aDE+e3ZlaGljbGUubmFtZX08L2gxPlxuICAgICAgICAgICAgICAgIDxkaXY+TW9kZWw6IHt2ZWhpY2xlLm1vZGVsfTwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXY+TWFudWZhY3R1cmVyOiB7dmVoaWNsZS5tYW51ZmFjdHVyZXJ9PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdj5Db3N0IGluIGNyZWRpdHM6IHt2ZWhpY2xlLmNvc3RfaW5fY3JlZGl0c308L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2Pkxlbmd0aDoge3ZlaGljbGUubGVuZ3RofSBtPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdj5NYXggYXRtb3NwaGVyaW5nIHNwZWVkOiB7dmVoaWNsZS5tYXhfYXRtb3NwaGVyaW5nX3NwZWVkfSBrbS9oPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdj5DcmV3OiB7dmVoaWNsZS5jcmV3fTwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXY+UGFzc2VuZ2Vyczoge3ZlaGljbGUucGFzc2VuZ2VyfTwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXY+Q2FyZ28gY2FwYWNpdHk6IHt2ZWhpY2xlLmNhcmdvX2NhcGFjaXR5fSBrZzwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXY+Q29uc3VtYWJsZXM6IHt2ZWhpY2xlLmNvbnN1bWFibGVzfTwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXY+VmVoaWNsZSBjbGFzczoge3ZlaGljbGUudmVoaWNsZV9jbGFzc308L2Rpdj5cbiAgICAgICAgICAgICAgICA8aDI+UGlsb3RzPC9oMj5cbiAgICAgICAgICAgICAgICA8TGlzdCB1cmxzPXt2ZWhpY2xlLnBpbG90c30gaXRlbXM9e3BpbG90c30gcGFnZU5hbWU9XCJjaGFyYWN0ZXItc3VtbWFyeVwiIHJvdXRlPXtyb3V0ZX0gLz5cbiAgICAgICAgICAgICAgICA8aDI+RmlsbXM8L2gyPlxuICAgICAgICAgICAgICAgIDxMaXN0IHVybHM9e3ZlaGljbGUuZmlsbXN9IGl0ZW1zPXtmaWxtc30gZmllbGQ9XCJ0aXRsZVwiIHBhZ2VOYW1lPVwiZmlsbS1zdW1tYXJ5XCIgcm91dGU9e3JvdXRlfSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQge1xuICAgIFZlaGljbGVQYWdlIGFzIGRlZmF1bHQsXG4gICAgVmVoaWNsZVBhZ2UsXG4gICAgVmVoaWNsZVBhZ2VTeW5jLFxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhZ2VzL3ZlaGljbGUtcGFnZS5qc3giLCJpbXBvcnQgeyBoLCBDb21wb25lbnQgfSBmcm9tICdwcmVhY3QnO1xuXG4vKiogQGpzeCBoICovXG5cbmZ1bmN0aW9uIExpc3QocHJvcHMpIHtcbiAgICBsZXQgeyByb3V0ZSwgdXJscywgaXRlbXMsIGZpZWxkLCBwYWdlTmFtZSB9ID0gcHJvcHM7XG4gICAgaWYgKHVybHMpIHtcbiAgICAgICAgaWYgKHR5cGVvZih1cmxzKSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIGlmIChpdGVtcykge1xuICAgICAgICAgICAgICAgIGl0ZW1zID0gWyBpdGVtcyBdO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpdGVtcyA9IFsgeyB1cmw6IHVybHMsIHBlbmRpbmc6IHRydWUgfSBdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHVybHMgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICAgICAgaXRlbXMgPSB1cmxzLm1hcCgodXJsLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgIHZhciBpdGVtID0gKGl0ZW1zKSA/IGl0ZW1zW2luZGV4XSA6IG51bGw7XG4gICAgICAgICAgICAgICAgaWYgKCFpdGVtKSB7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW0gPSB7IHVybCwgcGVuZGluZzogdHJ1ZSB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gaXRlbTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmICghaXRlbXMpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGlmIChpdGVtcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuIDx1bCBjbGFzc05hbWU9XCJlbXB0eVwiPjxsaT48c3Bhbj5ub25lPC9zcGFuPjwvbGk+PC91bD47XG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICAgIDx1bD5cbiAgICAgICAge1xuICAgICAgICAgICAgaXRlbXMubWFwKChpdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IGlkID0gcm91dGUuZXh0cmFjdElEKGl0ZW0udXJsKTtcbiAgICAgICAgICAgICAgICBsZXQgdXJsID0gcm91dGUuZmluZChwYWdlTmFtZSwgeyBpZCB9KTtcbiAgICAgICAgICAgICAgICBsZXQgdGV4dCA9IGl0ZW0ucGVuZGluZyA/ICcuLi4nIDogaXRlbVtmaWVsZF07XG4gICAgICAgICAgICAgICAgbGV0IGxpbmtQcm9wcyA9IHtcbiAgICAgICAgICAgICAgICAgICAgaHJlZjogdXJsLFxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU6IChpdGVtLnBlbmRpbmcpID8gJ3BlbmRpbmcnIDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgcmV0dXJuIDxsaT48YSB7Li4ubGlua1Byb3BzfT57dGV4dH08L2E+PC9saT47XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICAgIDwvdWw+XG4gICAgKTtcbn1cblxuTGlzdC5kZWZhdWx0UHJvcHMgPSB7XG4gICAgZmllbGQ6ICduYW1lJ1xufTtcblxuTGlzdC5kaXNwbGF5TmFtZSA9ICdMaXN0JztcblxuZXhwb3J0IHtcbiAgICBMaXN0IGFzIGRlZmF1bHQsXG4gICAgTGlzdFxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3dpZGdldHMvbGlzdC5qc3giLCJpbXBvcnQgeyBoLCBDb21wb25lbnQgfSBmcm9tICdwcmVhY3QnO1xuXG4vKiogQGpzeCBoICovXG5cbmZ1bmN0aW9uIExvYWRpbmcoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2FkaW5nXCI+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhYiBmYS1lbXBpcmUgZmEtc3BpblwiLz4gTG9hZGluZ1xuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cbkxvYWRpbmcuZGlzcGxheU5hbWUgPSAnTG9hZGluZyc7XG5cbmV4cG9ydCB7XG4gICAgTG9hZGluZyBhcyBkZWZhdWx0LFxuICAgIExvYWRpbmdcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi93aWRnZXRzL2xvYWRpbmcuanN4Il0sInNvdXJjZVJvb3QiOiIifQ==