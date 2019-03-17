exports.ids = ["vehicle-list"];
exports.modules = {

/***/ "./pages/vehicle-list.jsx":
/*!********************************!*\
  !*** ./pages/vehicle-list.jsx ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.VehicleList = exports.default = undefined;

var _regenerator = __webpack_require__(/*! babel-runtime/regenerator */ "../node_modules/babel-runtime/regenerator/index.js");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _slicedToArray2 = __webpack_require__(/*! babel-runtime/helpers/slicedToArray */ "../node_modules/babel-runtime/helpers/slicedToArray.js");

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _asyncToGenerator2 = __webpack_require__(/*! babel-runtime/helpers/asyncToGenerator */ "../node_modules/babel-runtime/helpers/asyncToGenerator.js");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var VehicleList = function () {
    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(props) {
        var route, swapi, _useProgress, _useProgress2, show, vehicles, render;

        return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        render = function render() {
                            if (!vehicles) {
                                show(_react2.default.createElement(_loading2.default, null));
                            } else {
                                show(_react2.default.createElement(
                                    'div',
                                    null,
                                    _react2.default.createElement(
                                        'h1',
                                        null,
                                        'Vehicles'
                                    ),
                                    _react2.default.createElement(_list2.default, { items: vehicles, field: 'name', pageName: 'vehicle-summary', route: route })
                                ));
                            }
                        };

                        route = props.route, swapi = props.swapi;
                        _useProgress = (0, _hooks.useProgress)(), _useProgress2 = (0, _slicedToArray3.default)(_useProgress, 1), show = _useProgress2[0];


                        render();
                        _context.next = 6;
                        return swapi.fetchList('/vehicles/');

                    case 6:
                        vehicles = _context.sent;

                        render();

                        vehicles.more();

                    case 9:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, this);
    }));

    return function VehicleList(_x) {
        return _ref.apply(this, arguments);
    };
}();

var _react = __webpack_require__(/*! react */ "../node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _hooks = __webpack_require__(/*! relaks/hooks */ "../../relaks/hooks.js");

var _hooks2 = _interopRequireDefault(_hooks);

var _list = __webpack_require__(/*! widgets/list */ "./widgets/list.jsx");

var _list2 = _interopRequireDefault(_list);

var _loading = __webpack_require__(/*! widgets/loading */ "./widgets/loading.jsx");

var _loading2 = _interopRequireDefault(_loading);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var asyncComponent = (0, _hooks2.default)(VehicleList);

exports.default = asyncComponent;
exports.VehicleList = asyncComponent;

/***/ }),

/***/ "./widgets/list.jsx":
/*!**************************!*\
  !*** ./widgets/list.jsx ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.List = exports.default = undefined;

var _react = __webpack_require__(/*! react */ "../node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function List(props) {
    var route = props.route,
        urls = props.urls,
        items = props.items,
        field = props.field,
        pageName = props.pageName;

    if (urls) {
        // accept single URL and object
        if (typeof urls === 'string') {
            urls = [urls];
            items = [items];
        }
        // deal with holes in the data set
        items = urls.map(function (url, index) {
            var item = items ? items[index] : null;
            if (!item) {
                item = { url: url, pending: true };
            }
            return item;
        });
    }
    if (!items) {
        return null;
    }
    if (items.length === 0) {
        return _react2.default.createElement(
            'ul',
            { className: 'empty' },
            _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                    'span',
                    null,
                    'none'
                )
            )
        );
    }
    return _react2.default.createElement(
        'ul',
        null,
        items.map(renderItem)
    );

    function renderItem(item, i) {
        var id = route.extractID(item.url);
        var url = route.find(pageName, { id: id });
        var text = item.pending ? '...' : item[field];
        var linkProps = {
            href: url,
            className: item.pending ? 'pending' : undefined
        };
        return _react2.default.createElement(
            'li',
            { key: i },
            _react2.default.createElement(
                'a',
                linkProps,
                text
            )
        );
    }
}

List.defaultProps = {
    field: 'name'
};

exports.default = List;
exports.List = List;

/***/ }),

/***/ "./widgets/loading.jsx":
/*!*****************************!*\
  !*** ./widgets/loading.jsx ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Loading = exports.default = undefined;

var _react = __webpack_require__(/*! react */ "../node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Loading() {
    return _react2.default.createElement(
        "div",
        { className: "loading" },
        _react2.default.createElement(
            "div",
            null,
            _react2.default.createElement("i", { className: "fab fa-empire fa-spin" }),
            " Loading"
        )
    );
}

exports.default = Loading;
exports.Loading = Loading;

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy92ZWhpY2xlLWxpc3QuanN4Iiwid2VicGFjazovLy8uL3dpZGdldHMvbGlzdC5qc3giLCJ3ZWJwYWNrOi8vLy4vd2lkZ2V0cy9sb2FkaW5nLmpzeCJdLCJuYW1lcyI6WyJwcm9wcyIsInJlbmRlciIsInZlaGljbGVzIiwic2hvdyIsInJvdXRlIiwic3dhcGkiLCJmZXRjaExpc3QiLCJtb3JlIiwiVmVoaWNsZUxpc3QiLCJhc3luY0NvbXBvbmVudCIsImRlZmF1bHQiLCJMaXN0IiwidXJscyIsIml0ZW1zIiwiZmllbGQiLCJwYWdlTmFtZSIsIm1hcCIsInVybCIsImluZGV4IiwiaXRlbSIsInBlbmRpbmciLCJsZW5ndGgiLCJyZW5kZXJJdGVtIiwiaSIsImlkIiwiZXh0cmFjdElEIiwiZmluZCIsInRleHQiLCJsaW5rUHJvcHMiLCJocmVmIiwiY2xhc3NOYW1lIiwidW5kZWZpbmVkIiwiZGVmYXVsdFByb3BzIiwiTG9hZGluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt3RkFLQSxpQkFBMkJBLEtBQTNCO0FBQUEsdUVBVWFDLE1BVmI7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFVYUEsOEJBVmIsWUFVYUEsTUFWYixHQVVzQjtBQUNkLGdDQUFJLENBQUNDLFFBQUwsRUFBZTtBQUNYQyxxQ0FBSyw4QkFBQyxpQkFBRCxPQUFMO0FBQ0gsNkJBRkQsTUFFTztBQUNIQSxxQ0FDSTtBQUFBO0FBQUE7QUFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFDQURKO0FBRUksa0VBQUMsY0FBRCxJQUFNLE9BQU9ELFFBQWIsRUFBdUIsT0FBTSxNQUE3QixFQUFvQyxVQUFTLGlCQUE3QyxFQUErRCxPQUFPRSxLQUF0RTtBQUZKLGlDQURKO0FBTUg7QUFDSix5QkFyQkw7O0FBQ1lBLDZCQURaLEdBQzZCSixLQUQ3QixDQUNZSSxLQURaLEVBQ21CQyxLQURuQixHQUM2QkwsS0FEN0IsQ0FDbUJLLEtBRG5CO0FB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S0FESjtBQU9IOztRQUdjdkIsTyxHQUFYdUIsTztRQUNBQSxPLEdBQUFBLE8iLCJmaWxlIjoidmVoaWNsZS1saXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWxha3MsIHsgdXNlUHJvZ3Jlc3MgfSBmcm9tICdyZWxha3MvaG9va3MnO1xuaW1wb3J0IExpc3QgZnJvbSAnd2lkZ2V0cy9saXN0JztcbmltcG9ydCBMb2FkaW5nIGZyb20gJ3dpZGdldHMvbG9hZGluZyc7XG5cbmFzeW5jIGZ1bmN0aW9uIFZlaGljbGVMaXN0KHByb3BzKSB7XG4gICAgY29uc3QgeyByb3V0ZSwgc3dhcGkgfSA9IHByb3BzO1xuICAgIGNvbnN0IFsgc2hvdyBdID0gdXNlUHJvZ3Jlc3MoKTtcblxuICAgIHJlbmRlcigpO1xuICAgIGNvbnN0IHZlaGljbGVzID0gYXdhaXQgc3dhcGkuZmV0Y2hMaXN0KCcvdmVoaWNsZXMvJyk7XG4gICAgcmVuZGVyKCk7XG5cbiAgICB2ZWhpY2xlcy5tb3JlKCk7XG5cbiAgICBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICAgIGlmICghdmVoaWNsZXMpIHtcbiAgICAgICAgICAgIHNob3coPExvYWRpbmcgLz4pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2hvdyhcbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8aDE+VmVoaWNsZXM8L2gxPlxuICAgICAgICAgICAgICAgICAgICA8TGlzdCBpdGVtcz17dmVoaWNsZXN9IGZpZWxkPVwibmFtZVwiIHBhZ2VOYW1lPVwidmVoaWNsZS1zdW1tYXJ5XCIgcm91dGU9e3JvdXRlfSAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuY29uc3QgYXN5bmNDb21wb25lbnQgPSBSZWxha3MoVmVoaWNsZUxpc3QpO1xuXG5leHBvcnQge1xuICAgIGFzeW5jQ29tcG9uZW50IGFzIGRlZmF1bHQsXG4gICAgYXN5bmNDb21wb25lbnQgYXMgVmVoaWNsZUxpc3QsXG59O1xuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcblxuZnVuY3Rpb24gTGlzdChwcm9wcykge1xuICAgIGxldCB7IHJvdXRlLCB1cmxzLCBpdGVtcywgZmllbGQsIHBhZ2VOYW1lIH0gPSBwcm9wcztcbiAgICBpZiAodXJscykge1xuICAgICAgICAvLyBhY2NlcHQgc2luZ2xlIFVSTCBhbmQgb2JqZWN0XG4gICAgICAgIGlmICh0eXBlb2YodXJscykgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICB1cmxzID0gWyB1cmxzIF07XG4gICAgICAgICAgICBpdGVtcyA9IFsgaXRlbXMgXTtcbiAgICAgICAgfVxuICAgICAgICAvLyBkZWFsIHdpdGggaG9sZXMgaW4gdGhlIGRhdGEgc2V0XG4gICAgICAgIGl0ZW1zID0gdXJscy5tYXAoKHVybCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGxldCBpdGVtID0gKGl0ZW1zKSA/IGl0ZW1zW2luZGV4XSA6IG51bGw7XG4gICAgICAgICAgICBpZiAoIWl0ZW0pIHtcbiAgICAgICAgICAgICAgICBpdGVtID0geyB1cmwsIHBlbmRpbmc6IHRydWUgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBpdGVtO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgaWYgKCFpdGVtcykge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgaWYgKGl0ZW1zLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gPHVsIGNsYXNzTmFtZT1cImVtcHR5XCI+PGxpPjxzcGFuPm5vbmU8L3NwYW4+PC9saT48L3VsPjtcbiAgICB9XG4gICAgcmV0dXJuIDx1bD57aXRlbXMubWFwKHJlbmRlckl0ZW0pfTwvdWw+O1xuXG4gICAgZnVuY3Rpb24gcmVuZGVySXRlbShpdGVtLCBpKSB7XG4gICAgICAgIGNvbnN0IGlkID0gcm91dGUuZXh0cmFjdElEKGl0ZW0udXJsKTtcbiAgICAgICAgY29uc3QgdXJsID0gcm91dGUuZmluZChwYWdlTmFtZSwgeyBpZCB9KTtcbiAgICAgICAgY29uc3QgdGV4dCA9IGl0ZW0ucGVuZGluZyA/ICcuLi4nIDogaXRlbVtmaWVsZF07XG4gICAgICAgIGNvbnN0IGxpbmtQcm9wcyA9IHtcbiAgICAgICAgICAgIGhyZWY6IHVybCxcbiAgICAgICAgICAgIGNsYXNzTmFtZTogKGl0ZW0ucGVuZGluZykgPyAncGVuZGluZycgOiB1bmRlZmluZWQsXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiA8bGkga2V5PXtpfT48YSB7Li4ubGlua1Byb3BzfT57dGV4dH08L2E+PC9saT47XG4gICAgfVxufVxuXG5MaXN0LmRlZmF1bHRQcm9wcyA9IHtcbiAgICBmaWVsZDogJ25hbWUnXG59O1xuXG5leHBvcnQge1xuICAgIExpc3QgYXMgZGVmYXVsdCxcbiAgICBMaXN0XG59O1xuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcblxuZnVuY3Rpb24gTG9hZGluZygpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvYWRpbmdcIj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFiIGZhLWVtcGlyZSBmYS1zcGluXCIvPiBMb2FkaW5nXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cblxuZXhwb3J0IHtcbiAgICBMb2FkaW5nIGFzIGRlZmF1bHQsXG4gICAgTG9hZGluZ1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=