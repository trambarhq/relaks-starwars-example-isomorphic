webpackJsonp(["vehicle-list"],{

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

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy92ZWhpY2xlLWxpc3QuanN4Iiwid2VicGFjazovLy8uL3dpZGdldHMvbGlzdC5qc3giLCJ3ZWJwYWNrOi8vLy4vd2lkZ2V0cy9sb2FkaW5nLmpzeCJdLCJuYW1lcyI6WyJWZWhpY2xlTGlzdCIsIm1lYW53aGlsZSIsInByb3BzIiwicm91dGUiLCJzd2FwaSIsInZlaGljbGVzIiwic2hvdyIsImZldGNoTGlzdCIsIm1vcmUiLCJBc3luY0NvbXBvbmVudCIsImRpc3BsYXlOYW1lIiwiVmVoaWNsZUxpc3RTeW5jIiwibGlzdFByb3BzIiwiaXRlbXMiLCJwYWdlTmFtZSIsIkNvbXBvbmVudCIsImRlZmF1bHQiLCJMaXN0IiwidXJscyIsImZpZWxkIiwidXJsIiwicGVuZGluZyIsIkFycmF5IiwibWFwIiwiaW5kZXgiLCJpdGVtIiwibGVuZ3RoIiwiaWQiLCJleHRyYWN0SUQiLCJmaW5kIiwidGV4dCIsImxpbmtQcm9wcyIsImhyZWYiLCJjbGFzc05hbWUiLCJ1bmRlZmluZWQiLCJkZWZhdWx0UHJvcHMiLCJMb2FkaW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBOztJQUVNQSxXOzs7Ozs7Ozs7Ozs7QUFHRjs7Ozs7Ozs7aUhBT2tCQyxTOzs7Ozs7O3lDQUNTLEtBQUtDLEssRUFBdEJDLEssVUFBQUEsSyxFQUFPQyxLLFVBQUFBLEs7QUFDVEYscUMsR0FBUTtBQUNSRyw4Q0FBVSxJQURGO0FBRVJGLDJDQUFPQTtBQUZDLGlDOztBQUlaRiwwQ0FBVUssSUFBVixDQUFlLGVBQUMsZUFBRCxFQUFxQkosS0FBckIsQ0FBZjs7dUNBQ3VCRSxNQUFNRyxTQUFOLENBQWdCLFlBQWhCLEM7OztBQUF2Qkwsc0NBQU1HLFE7O0FBQ05ILHNDQUFNRyxRQUFOLENBQWVHLElBQWY7aUVBQ08sZUFBQyxlQUFELEVBQXFCTixLQUFy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RDtBQUFuQjtBQUFKLGFBQVA7QUFDSCxTQVREO0FBRkosS0FESjtBQWdCSDs7QUFFRGIsS0FBS2tCLFlBQUwsR0FBb0I7QUFDaEJoQixXQUFPO0FBRFMsQ0FBcEI7O0FBSUFGLEtBQUtQLFdBQUwsR0FBbUIsTUFBbkI7O1FBR1lNLE8sR0FBUkMsSTtRQUNBQSxJLEdBQUFBLEk7Ozs7Ozs7Ozs7Ozs7OztBQ3ZESjs7QUFFQTs7QUFFQSxTQUFTbUIsT0FBVCxHQUFtQjtBQUNmLFdBQ0k7QUFBQTtBQUFBLFVBQUssV0FBVSxTQUFmO0FBQ0k7QUFBQTtBQUFBO0FBQ0ksa0NBQUcsV0FBVSx1QkFBYixHQURKO0FBQUE7QUFBQTtBQURKLEtBREo7QUFPSDs7QUFFREEsUUFBUTFCLFdBQVIsR0FBc0IsU0FBdEI7O1FBR2VNLE8sR0FBWG9CLE87UUFDQUEsTyxHQUFBQSxPIiwiZmlsZSI6InZlaGljbGUtbGlzdC5hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBoLCBDb21wb25lbnQgfSBmcm9tICdwcmVhY3QnO1xuaW1wb3J0IHsgQXN5bmNDb21wb25lbnQgfSBmcm9tICdyZWxha3MvcHJlYWN0JztcbmltcG9ydCBMaXN0IGZyb20gJ3dpZGdldHMvbGlzdCc7XG5pbXBvcnQgTG9hZGluZyBmcm9tICd3aWRnZXRzL2xvYWRpbmcnO1xuXG4vKiogQGpzeCBoICovXG5cbmNsYXNzIFZlaGljbGVMaXN0IGV4dGVuZHMgQXN5bmNDb21wb25lbnQge1xuICAgIHN0YXRpYyBkaXNwbGF5TmFtZSA9ICdWZWhpY2xlTGlzdCc7XG5cbiAgICAvKipcbiAgICAgKiBSZXRyaWV2ZSByZW1vdGUgZGF0YSBhbmQgcmVuZGVyIHRoZSBzeW5jaHJvbml6ZSBoYWxmIG9mIHRoaXMgY29tcG9uZW50XG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHtNZWFud2hpbGV9ICBtZWFud2hpbGVcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1ZOb2RlfVxuICAgICAqL1xuICAgIGFzeW5jIHJlbmRlckFzeW5jKG1lYW53aGlsZSkge1xuICAgICAgICBsZXQgeyByb3V0ZSwgc3dhcGkgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGxldCBwcm9wcyA9IHtcbiAgICAgICAgICAgIHZlaGljbGVzOiBudWxsLFxuICAgICAgICAgICAgcm91dGU6IHJvdXRlLFxuICAgICAgICB9O1xuICAgICAgICBtZWFud2hpbGUuc2hvdyg8VmVoaWNsZUxpc3RTeW5jIHsuLi5wcm9wc30gLz4pO1xuICAgICAgICBwcm9wcy52ZWhpY2xlcyA9IGF3YWl0IHN3YXBpLmZldGNoTGlzdCgnL3ZlaGljbGVzLycpO1xuICAgICAgICBwcm9wcy52ZWhpY2xlcy5tb3JlKCk7XG4gICAgICAgIHJldHVybiA8VmVoaWNsZUxpc3RTeW5jIHsuLi5wcm9wc30gLz47XG4gICAgfVxufVxuXG5jbGFzcyBWZWhpY2xlTGlzdFN5bmMgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIHN0YXRpYyBkaXNwbGF5TmFtZSA9ICdWZWhpY2xlTGlzdFN5bmMnO1xuXG4gICAgLyoqXG4gICAgICogUmVuZGVyIHRoZSBjb21wb25lbnQsIG1ha2luZyBiZXN0IGVmZm9ydCB1c2luZyB3aGF0IHByb3BzIGFyZSBnaXZlblxuICAgICAqXG4gICAgICogQHJldHVybiB7Vk5vZGV9XG4gICAgICovXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQgeyB2ZWhpY2xlcywgcm91dGUgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGlmICghdmVoaWNsZXMpIHtcbiAgICAgICAgICAgIHJldHVybiA8TG9hZGluZyAvPjtcbiAgICAgICAgfVxuICAgICAgICBsZXQgbGlzdFByb3BzID0ge1xuICAgICAgICAgICAgaXRlbXM6IHZlaGljbGVzLFxuICAgICAgICAgICAgcGFnZU5hbWU6ICd2ZWhpY2xlLXN1bW1hcnknLFxuICAgICAgICAgICAgcm91dGU6IHJvdXRlLFxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8aDE+VmVoaWNsZXM8L2gxPlxuICAgICAgICAgICAgICAgIDxMaXN0IHsuLi5saXN0UHJvcHN9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCB7XG4gICAgVmVoaWNsZUxpc3QgYXMgZGVmYXVsdCxcbiAgICBWZWhpY2xlTGlzdCxcbiAgICBWZWhpY2xlTGlzdFN5bmNcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcy92ZWhpY2xlLWxpc3QuanN4IiwiaW1wb3J0IHsgaCwgQ29tcG9uZW50IH0gZnJvbSAncHJlYWN0JztcblxuLyoqIEBqc3ggaCAqL1xuXG5mdW5jdGlvbiBMaXN0KHByb3BzKSB7XG4gICAgbGV0IHsgcm91dGUsIHVybHMsIGl0ZW1zLCBmaWVsZCwgcGFnZU5hbWUgfSA9IHByb3BzO1xuICAgIGlmICh1cmxzKSB7XG4gICAgICAgIGlmICh0eXBlb2YodXJscykgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICBpZiAoaXRlbXMpIHtcbiAgICAgICAgICAgICAgICBpdGVtcyA9IFsgaXRlbXMgXTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaXRlbXMgPSBbIHsgdXJsOiB1cmxzLCBwZW5kaW5nOiB0cnVlIH0gXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmICh1cmxzIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgICAgICAgIGl0ZW1zID0gdXJscy5tYXAoKHVybCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICB2YXIgaXRlbSA9IChpdGVtcykgPyBpdGVtc1tpbmRleF0gOiBudWxsO1xuICAgICAgICAgICAgICAgIGlmICghaXRlbSkge1xuICAgICAgICAgICAgICAgICAgICBpdGVtID0geyB1cmwsIHBlbmRpbmc6IHRydWUgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW07XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoIWl0ZW1zKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBpZiAoaXRlbXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJldHVybiA8dWwgY2xhc3NOYW1lPVwiZW1wdHlcIj48bGk+PHNwYW4+bm9uZTwvc3Bhbj48L2xpPjwvdWw+O1xuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgICA8dWw+XG4gICAgICAgIHtcbiAgICAgICAgICAgIGl0ZW1zLm1hcCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBpZCA9IHJvdXRlLmV4dHJhY3RJRChpdGVtLnVybCk7XG4gICAgICAgICAgICAgICAgbGV0IHVybCA9IHJvdXRlLmZpbmQocGFnZU5hbWUsIHsgaWQgfSk7XG4gICAgICAgICAgICAgICAgbGV0IHRleHQgPSBpdGVtLnBlbmRpbmcgPyAnLi4uJyA6IGl0ZW1bZmllbGRdO1xuICAgICAgICAgICAgICAgIGxldCBsaW5rUHJvcHMgPSB7XG4gICAgICAgICAgICAgICAgICAgIGhyZWY6IHVybCxcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lOiAoaXRlbS5wZW5kaW5nKSA/ICdwZW5kaW5nJyA6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIHJldHVybiA8bGk+PGEgey4uLmxpbmtQcm9wc30+e3RleHR9PC9hPjwvbGk+O1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgICA8L3VsPlxuICAgICk7XG59XG5cbkxpc3QuZGVmYXVsdFByb3BzID0ge1xuICAgIGZpZWxkOiAnbmFtZSdcbn07XG5cbkxpc3QuZGlzcGxheU5hbWUgPSAnTGlzdCc7XG5cbmV4cG9ydCB7XG4gICAgTGlzdCBhcyBkZWZhdWx0LFxuICAgIExpc3Rcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi93aWRnZXRzL2xpc3QuanN4IiwiaW1wb3J0IHsgaCwgQ29tcG9uZW50IH0gZnJvbSAncHJlYWN0JztcblxuLyoqIEBqc3ggaCAqL1xuXG5mdW5jdGlvbiBMb2FkaW5nKCkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9hZGluZ1wiPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYWIgZmEtZW1waXJlIGZhLXNwaW5cIi8+IExvYWRpbmdcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuXG5Mb2FkaW5nLmRpc3BsYXlOYW1lID0gJ0xvYWRpbmcnO1xuXG5leHBvcnQge1xuICAgIExvYWRpbmcgYXMgZGVmYXVsdCxcbiAgICBMb2FkaW5nXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vd2lkZ2V0cy9sb2FkaW5nLmpzeCJdLCJzb3VyY2VSb290IjoiIn0=