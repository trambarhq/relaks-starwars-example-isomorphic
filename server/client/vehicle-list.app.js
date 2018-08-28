exports.ids = ["vehicle-list"];
exports.modules = {

/***/ "./pages/vehicle-list.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.VehicleListSync = exports.VehicleList = exports.default = undefined;

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

var _list2 = _interopRequireDefault(_list);

var _loading = __webpack_require__("./widgets/loading.jsx");

var _loading2 = _interopRequireDefault(_loading);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** @jsx h */

var VehicleList = function (_AsyncComponent) {
    (0, _inherits3.default)(VehicleList, _AsyncComponent);

    function VehicleList() {
        (0, _classCallCheck3.default)(this, VehicleList);
        return (0, _possibleConstructorReturn3.default)(this, (VehicleList.__proto__ || (0, _getPrototypeOf2.default)(VehicleList)).apply(this, arguments));
    }

    (0, _createClass3.default)(VehicleList, [{
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
                                    vehicles: null,
                                    route: route
                                };

                                meanwhile.show((0, _preact.h)(VehicleListSync, props));
                                _context.next = 5;
                                return swapi.fetchList('/vehicles/');

                            case 5:
                                props.vehicles = _context.sent;

                                props.vehicles.more();
                                return _context.abrupt('return', (0, _preact.h)(VehicleListSync, props));

                            case 8:
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
    return VehicleList;
}(_preact2.AsyncComponent);

VehicleList.displayName = 'VehicleList';

var VehicleListSync = function (_Component) {
    (0, _inherits3.default)(VehicleListSync, _Component);

    function VehicleListSync() {
        (0, _classCallCheck3.default)(this, VehicleListSync);
        return (0, _possibleConstructorReturn3.default)(this, (VehicleListSync.__proto__ || (0, _getPrototypeOf2.default)(VehicleListSync)).apply(this, arguments));
    }

    (0, _createClass3.default)(VehicleListSync, [{
        key: 'render',


        /**
         * Render the component, making best effort using what props are given
         *
         * @return {VNode}
         */
        value: function render() {
            var _props2 = this.props,
                vehicles = _props2.vehicles,
                route = _props2.route;

            if (!vehicles) {
                return (0, _preact.h)(_loading2.default, null);
            }
            var listProps = {
                items: vehicles,
                pageName: 'vehicle-summary',
                route: route
            };
            return (0, _preact.h)(
                'div',
                null,
                (0, _preact.h)(
                    'h1',
                    null,
                    'Vehicles'
                ),
                (0, _preact.h)(_list2.default, listProps)
            );
        }
    }]);
    return VehicleListSync;
}(_preact.Component);

VehicleListSync.displayName = 'VehicleListSync';
exports.default = VehicleList;
exports.VehicleList = VehicleList;
exports.VehicleListSync = VehicleListSync;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy92ZWhpY2xlLWxpc3QuanN4Iiwid2VicGFjazovLy8uL3dpZGdldHMvbGlzdC5qc3giLCJ3ZWJwYWNrOi8vLy4vd2lkZ2V0cy9sb2FkaW5nLmpzeCJdLCJuYW1lcyI6WyJWZWhpY2xlTGlzdCIsIm1lYW53aGlsZSIsInByb3BzIiwicm91dGUiLCJzd2FwaSIsInZlaGljbGVzIiwic2hvdyIsImZldGNoTGlzdCIsIm1vcmUiLCJBc3luY0NvbXBvbmVudCIsImRpc3BsYXlOYW1lIiwiVmVoaWNsZUxpc3RTeW5jIiwibGlzdFByb3BzIiwiaXRlbXMiLCJwYWdlTmFtZSIsIkNvbXBvbmVudCIsImRlZmF1bHQiLCJMaXN0IiwidXJscyIsImZpZWxkIiwidXJsIiwicGVuZGluZyIsIkFycmF5IiwibWFwIiwiaW5kZXgiLCJpdGVtIiwibGVuZ3RoIiwiaWQiLCJleHRyYWN0SUQiLCJmaW5kIiwidGV4dCIsImxpbmtQcm9wcyIsImhyZWYiLCJjbGFzc05hbWUiLCJ1bmRlZmluZWQiLCJkZWZhdWx0UHJvcHMiLCJMb2FkaW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFQTs7SUFFTUEsVzs7Ozs7Ozs7Ozs7O0FBR0Y7Ozs7Ozs7O2lIQU9rQkMsUzs7Ozs7Ozt5Q0FDUyxLQUFLQyxLLEVBQXRCQyxLLFVBQUFBLEssRUFBT0MsSyxVQUFBQSxLO0FBQ1RGLHFDLEdBQVE7QUFDUkcsOENBQVUsSUFERjtBQUVSRiwyQ0FBT0E7QUFGQyxpQzs7QUFJWkYsMENBQVVLLElBQVYsQ0FBZSxlQUFDLGVBQUQsRUFBcUJKLEtBQXJCLENBQWY7O3VDQUN1QkUsTUFBTUcsU0FBTixDQUFnQixZQUFoQixDOzs7QUFBdkJMLHNDQUFNRyxROztBQUNOSCxzQ0FBTUcsUUFBTixDQUFlRyxJQUFmO2lFQUNPLGVBQUMsZUFBRCxFQUFxQk4sS0FB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QkQ7QUFBbkI7QUFBSixhQUFQO0FBQ0gsU0FURDtBQUZKLEtBREo7QUFnQkg7O0FBRURiLEtBQUtrQixZQUFMLEdBQW9CO0FBQ2hCaEIsV0FBTztBQURTLENBQXBCOztBQUlBRixLQUFLUCxXQUFMLEdBQW1CLE1BQW5COztRQUdZTSxPLEdBQVJDLEk7UUFDQUEsSSxHQUFBQSxJOzs7Ozs7Ozs7Ozs7Ozs7QUN2REo7O0FBRUE7O0FBRUEsU0FBU21CLE9BQVQsR0FBbUI7QUFDZixXQUNJO0FBQUE7QUFBQSxVQUFLLFdBQVUsU0FBZjtBQUNJO0FBQUE7QUFBQTtBQUNJLGtDQUFHLFdBQVUsdUJBQWIsR0FESjtBQUFBO0FBQUE7QUFESixLQURKO0FBT0g7O0FBRURBLFFBQVExQixXQUFSLEdBQXNCLFNBQXRCOztRQUdlTSxPLEdBQVhvQixPO1FBQ0FBLE8sR0FBQUEsTyIsImZpbGUiOiJ2ZWhpY2xlLWxpc3QuYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaCwgQ29tcG9uZW50IH0gZnJvbSAncHJlYWN0JztcbmltcG9ydCB7IEFzeW5jQ29tcG9uZW50IH0gZnJvbSAncmVsYWtzL3ByZWFjdCc7XG5pbXBvcnQgTGlzdCBmcm9tICd3aWRnZXRzL2xpc3QnO1xuaW1wb3J0IExvYWRpbmcgZnJvbSAnd2lkZ2V0cy9sb2FkaW5nJztcblxuLyoqIEBqc3ggaCAqL1xuXG5jbGFzcyBWZWhpY2xlTGlzdCBleHRlbmRzIEFzeW5jQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgZGlzcGxheU5hbWUgPSAnVmVoaWNsZUxpc3QnO1xuXG4gICAgLyoqXG4gICAgICogUmV0cmlldmUgcmVtb3RlIGRhdGEgYW5kIHJlbmRlciB0aGUgc3luY2hyb25pemUgaGFsZiBvZiB0aGlzIGNvbXBvbmVudFxuICAgICAqXG4gICAgICogQHBhcmFtICB7TWVhbndoaWxlfSAgbWVhbndoaWxlXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtWTm9kZX1cbiAgICAgKi9cbiAgICBhc3luYyByZW5kZXJBc3luYyhtZWFud2hpbGUpIHtcbiAgICAgICAgbGV0IHsgcm91dGUsIHN3YXBpIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICBsZXQgcHJvcHMgPSB7XG4gICAgICAgICAgICB2ZWhpY2xlczogbnVsbCxcbiAgICAgICAgICAgIHJvdXRlOiByb3V0ZSxcbiAgICAgICAgfTtcbiAgICAgICAgbWVhbndoaWxlLnNob3coPFZlaGljbGVMaXN0U3luYyB7Li4ucHJvcHN9IC8+KTtcbiAgICAgICAgcHJvcHMudmVoaWNsZXMgPSBhd2FpdCBzd2FwaS5mZXRjaExpc3QoJy92ZWhpY2xlcy8nKTtcbiAgICAgICAgcHJvcHMudmVoaWNsZXMubW9yZSgpO1xuICAgICAgICByZXR1cm4gPFZlaGljbGVMaXN0U3luYyB7Li4ucHJvcHN9IC8+O1xuICAgIH1cbn1cblxuY2xhc3MgVmVoaWNsZUxpc3RTeW5jIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgZGlzcGxheU5hbWUgPSAnVmVoaWNsZUxpc3RTeW5jJztcblxuICAgIC8qKlxuICAgICAqIFJlbmRlciB0aGUgY29tcG9uZW50LCBtYWtpbmcgYmVzdCBlZmZvcnQgdXNpbmcgd2hhdCBwcm9wcyBhcmUgZ2l2ZW5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1ZOb2RlfVxuICAgICAqL1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IHsgdmVoaWNsZXMsIHJvdXRlIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICBpZiAoIXZlaGljbGVzKSB7XG4gICAgICAgICAgICByZXR1cm4gPExvYWRpbmcgLz47XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGxpc3RQcm9wcyA9IHtcbiAgICAgICAgICAgIGl0ZW1zOiB2ZWhpY2xlcyxcbiAgICAgICAgICAgIHBhZ2VOYW1lOiAndmVoaWNsZS1zdW1tYXJ5JyxcbiAgICAgICAgICAgIHJvdXRlOiByb3V0ZSxcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGgxPlZlaGljbGVzPC9oMT5cbiAgICAgICAgICAgICAgICA8TGlzdCB7Li4ubGlzdFByb3BzfSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQge1xuICAgIFZlaGljbGVMaXN0IGFzIGRlZmF1bHQsXG4gICAgVmVoaWNsZUxpc3QsXG4gICAgVmVoaWNsZUxpc3RTeW5jXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXMvdmVoaWNsZS1saXN0LmpzeCIsImltcG9ydCB7IGgsIENvbXBvbmVudCB9IGZyb20gJ3ByZWFjdCc7XG5cbi8qKiBAanN4IGggKi9cblxuZnVuY3Rpb24gTGlzdChwcm9wcykge1xuICAgIGxldCB7IHJvdXRlLCB1cmxzLCBpdGVtcywgZmllbGQsIHBhZ2VOYW1lIH0gPSBwcm9wcztcbiAgICBpZiAodXJscykge1xuICAgICAgICBpZiAodHlwZW9mKHVybHMpID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgaWYgKGl0ZW1zKSB7XG4gICAgICAgICAgICAgICAgaXRlbXMgPSBbIGl0ZW1zIF07XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGl0ZW1zID0gWyB7IHVybDogdXJscywgcGVuZGluZzogdHJ1ZSB9IF07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAodXJscyBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgICAgICBpdGVtcyA9IHVybHMubWFwKCh1cmwsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgdmFyIGl0ZW0gPSAoaXRlbXMpID8gaXRlbXNbaW5kZXhdIDogbnVsbDtcbiAgICAgICAgICAgICAgICBpZiAoIWl0ZW0pIHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbSA9IHsgdXJsLCBwZW5kaW5nOiB0cnVlIH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBpdGVtO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKCFpdGVtcykge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgaWYgKGl0ZW1zLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gPHVsIGNsYXNzTmFtZT1cImVtcHR5XCI+PGxpPjxzcGFuPm5vbmU8L3NwYW4+PC9saT48L3VsPjtcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgICAgPHVsPlxuICAgICAgICB7XG4gICAgICAgICAgICBpdGVtcy5tYXAoKGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgaWQgPSByb3V0ZS5leHRyYWN0SUQoaXRlbS51cmwpO1xuICAgICAgICAgICAgICAgIGxldCB1cmwgPSByb3V0ZS5maW5kKHBhZ2VOYW1lLCB7IGlkIH0pO1xuICAgICAgICAgICAgICAgIGxldCB0ZXh0ID0gaXRlbS5wZW5kaW5nID8gJy4uLicgOiBpdGVtW2ZpZWxkXTtcbiAgICAgICAgICAgICAgICBsZXQgbGlua1Byb3BzID0ge1xuICAgICAgICAgICAgICAgICAgICBocmVmOiB1cmwsXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogKGl0ZW0ucGVuZGluZykgPyAncGVuZGluZycgOiB1bmRlZmluZWQsXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICByZXR1cm4gPGxpPjxhIHsuLi5saW5rUHJvcHN9Pnt0ZXh0fTwvYT48L2xpPjtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgICAgPC91bD5cbiAgICApO1xufVxuXG5MaXN0LmRlZmF1bHRQcm9wcyA9IHtcbiAgICBmaWVsZDogJ25hbWUnXG59O1xuXG5MaXN0LmRpc3BsYXlOYW1lID0gJ0xpc3QnO1xuXG5leHBvcnQge1xuICAgIExpc3QgYXMgZGVmYXVsdCxcbiAgICBMaXN0XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vd2lkZ2V0cy9saXN0LmpzeCIsImltcG9ydCB7IGgsIENvbXBvbmVudCB9IGZyb20gJ3ByZWFjdCc7XG5cbi8qKiBAanN4IGggKi9cblxuZnVuY3Rpb24gTG9hZGluZygpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvYWRpbmdcIj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFiIGZhLWVtcGlyZSBmYS1zcGluXCIvPiBMb2FkaW5nXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cblxuTG9hZGluZy5kaXNwbGF5TmFtZSA9ICdMb2FkaW5nJztcblxuZXhwb3J0IHtcbiAgICBMb2FkaW5nIGFzIGRlZmF1bHQsXG4gICAgTG9hZGluZ1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3dpZGdldHMvbG9hZGluZy5qc3giXSwic291cmNlUm9vdCI6IiJ9