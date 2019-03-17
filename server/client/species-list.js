exports.ids = ["species-list"];
exports.modules = {

/***/ "./pages/species-list.jsx":
/*!********************************!*\
  !*** ./pages/species-list.jsx ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SpeciesList = exports.default = undefined;

var _regenerator = __webpack_require__(/*! babel-runtime/regenerator */ "../node_modules/babel-runtime/regenerator/index.js");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _slicedToArray2 = __webpack_require__(/*! babel-runtime/helpers/slicedToArray */ "../node_modules/babel-runtime/helpers/slicedToArray.js");

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _asyncToGenerator2 = __webpack_require__(/*! babel-runtime/helpers/asyncToGenerator */ "../node_modules/babel-runtime/helpers/asyncToGenerator.js");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var SpeciesList = function () {
    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(props) {
        var route, swapi, _useProgress, _useProgress2, show, species, render;

        return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        render = function render() {
                            if (!species) {
                                show(_react2.default.createElement(_loading2.default, null));
                            } else {
                                show(_react2.default.createElement(
                                    'div',
                                    null,
                                    _react2.default.createElement(
                                        'h1',
                                        null,
                                        'Species'
                                    ),
                                    _react2.default.createElement(_list2.default, { items: species, field: 'name', pageName: 'species-summary', route: route })
                                ));
                            }
                        };

                        route = props.route, swapi = props.swapi;
                        _useProgress = (0, _hooks.useProgress)(), _useProgress2 = (0, _slicedToArray3.default)(_useProgress, 1), show = _useProgress2[0];


                        render();
                        _context.next = 6;
                        return swapi.fetchList('/species/');

                    case 6:
                        species = _context.sent;

                        render();

                        species.more();

                    case 9:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, this);
    }));

    return function SpeciesList(_x) {
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

var asyncComponent = (0, _hooks2.default)(SpeciesList);

exports.default = asyncComponent;
exports.SpeciesList = asyncComponent;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9zcGVjaWVzLWxpc3QuanN4Iiwid2VicGFjazovLy8uL3dpZGdldHMvbGlzdC5qc3giLCJ3ZWJwYWNrOi8vLy4vd2lkZ2V0cy9sb2FkaW5nLmpzeCJdLCJuYW1lcyI6WyJwcm9wcyIsInJlbmRlciIsInNwZWNpZXMiLCJzaG93Iiwicm91dGUiLCJzd2FwaSIsImZldGNoTGlzdCIsIm1vcmUiLCJTcGVjaWVzTGlzdCIsImFzeW5jQ29tcG9uZW50IiwiZGVmYXVsdCIsIkxpc3QiLCJ1cmxzIiwiaXRlbXMiLCJmaWVsZCIsInBhZ2VOYW1lIiwibWFwIiwidXJsIiwiaW5kZXgiLCJpdGVtIiwicGVuZGluZyIsImxlbmd0aCIsInJlbmRlckl0ZW0iLCJpIiwiaWQiLCJleHRyYWN0SUQiLCJmaW5kIiwidGV4dCIsImxpbmtQcm9wcyIsImhyZWYiLCJjbGFzc05hbWUiLCJ1bmRlZmluZWQiLCJkZWZhdWx0UHJvcHMiLCJMb2FkaW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3dGQUtBLGlCQUEyQkEsS0FBM0I7QUFBQSxzRUFVYUMsTUFWYjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVVhQSw4QkFWYixZQVVhQSxNQVZiLEdBVXNCO0FBQ2QsZ0NBQUksQ0FBQ0MsT0FBTCxFQUFjO0FBQ1ZDLHFDQUFLLDhCQUFDLGlCQUFELE9BQUw7QUFDSCw2QkFGRCxNQUVPO0FBQ0hBLHFDQUNJO0FBQUE7QUFBQTtBQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUEscUNBREo7QUFFSSxrRUFBQyxjQUFELElBQU0sT0FBT0QsT0FBYixFQUFzQixPQUFNLE1BQTVCLEVBQW1DLFVBQVMsaUJBQTVDLEVBQThELE9BQU9FLEtBQXJFO0FBRkosaUNBREo7QUFNSDtBQUNKLHlCQXJCTDs7QUFDWUEsNkJBRFosR0FDNkJKLEtBRDdCLENBQ1lJLEtBRFosRUFDbUJDLEtBRG5CLEdBQzZCTCxLQUQ3QixDQUNtQkssS0FEbkI7QUFB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QURKO0FBT0g7O1FBR2N2QixPLEdBQVh1QixPO1FBQ0FBLE8sR0FBQUEsTyIsImZpbGUiOiJzcGVjaWVzLWxpc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlbGFrcywgeyB1c2VQcm9ncmVzcyB9IGZyb20gJ3JlbGFrcy9ob29rcyc7XG5pbXBvcnQgTGlzdCBmcm9tICd3aWRnZXRzL2xpc3QnO1xuaW1wb3J0IExvYWRpbmcgZnJvbSAnd2lkZ2V0cy9sb2FkaW5nJztcblxuYXN5bmMgZnVuY3Rpb24gU3BlY2llc0xpc3QocHJvcHMpIHtcbiAgICBjb25zdCB7IHJvdXRlLCBzd2FwaSB9ID0gcHJvcHM7XG4gICAgY29uc3QgWyBzaG93IF0gPSB1c2VQcm9ncmVzcygpO1xuXG4gICAgcmVuZGVyKCk7XG4gICAgY29uc3Qgc3BlY2llcyA9IGF3YWl0IHN3YXBpLmZldGNoTGlzdCgnL3NwZWNpZXMvJyk7XG4gICAgcmVuZGVyKCk7XG5cbiAgICBzcGVjaWVzLm1vcmUoKTtcblxuICAgIGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgICAgaWYgKCFzcGVjaWVzKSB7XG4gICAgICAgICAgICBzaG93KDxMb2FkaW5nIC8+KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNob3coXG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGgxPlNwZWNpZXM8L2gxPlxuICAgICAgICAgICAgICAgICAgICA8TGlzdCBpdGVtcz17c3BlY2llc30gZmllbGQ9XCJuYW1lXCIgcGFnZU5hbWU9XCJzcGVjaWVzLXN1bW1hcnlcIiByb3V0ZT17cm91dGV9IC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5jb25zdCBhc3luY0NvbXBvbmVudCA9IFJlbGFrcyhTcGVjaWVzTGlzdCk7XG5cbmV4cG9ydCB7XG4gICAgYXN5bmNDb21wb25lbnQgYXMgZGVmYXVsdCxcbiAgICBhc3luY0NvbXBvbmVudCBhcyBTcGVjaWVzTGlzdCxcbn07XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuXG5mdW5jdGlvbiBMaXN0KHByb3BzKSB7XG4gICAgbGV0IHsgcm91dGUsIHVybHMsIGl0ZW1zLCBmaWVsZCwgcGFnZU5hbWUgfSA9IHByb3BzO1xuICAgIGlmICh1cmxzKSB7XG4gICAgICAgIC8vIGFjY2VwdCBzaW5nbGUgVVJMIGFuZCBvYmplY3RcbiAgICAgICAgaWYgKHR5cGVvZih1cmxzKSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIHVybHMgPSBbIHVybHMgXTtcbiAgICAgICAgICAgIGl0ZW1zID0gWyBpdGVtcyBdO1xuICAgICAgICB9XG4gICAgICAgIC8vIGRlYWwgd2l0aCBob2xlcyBpbiB0aGUgZGF0YSBzZXRcbiAgICAgICAgaXRlbXMgPSB1cmxzLm1hcCgodXJsLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgbGV0IGl0ZW0gPSAoaXRlbXMpID8gaXRlbXNbaW5kZXhdIDogbnVsbDtcbiAgICAgICAgICAgIGlmICghaXRlbSkge1xuICAgICAgICAgICAgICAgIGl0ZW0gPSB7IHVybCwgcGVuZGluZzogdHJ1ZSB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGl0ZW07XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAoIWl0ZW1zKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBpZiAoaXRlbXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJldHVybiA8dWwgY2xhc3NOYW1lPVwiZW1wdHlcIj48bGk+PHNwYW4+bm9uZTwvc3Bhbj48L2xpPjwvdWw+O1xuICAgIH1cbiAgICByZXR1cm4gPHVsPntpdGVtcy5tYXAocmVuZGVySXRlbSl9PC91bD47XG5cbiAgICBmdW5jdGlvbiByZW5kZXJJdGVtKGl0ZW0sIGkpIHtcbiAgICAgICAgY29uc3QgaWQgPSByb3V0ZS5leHRyYWN0SUQoaXRlbS51cmwpO1xuICAgICAgICBjb25zdCB1cmwgPSByb3V0ZS5maW5kKHBhZ2VOYW1lLCB7IGlkIH0pO1xuICAgICAgICBjb25zdCB0ZXh0ID0gaXRlbS5wZW5kaW5nID8gJy4uLicgOiBpdGVtW2ZpZWxkXTtcbiAgICAgICAgY29uc3QgbGlua1Byb3BzID0ge1xuICAgICAgICAgICAgaHJlZjogdXJsLFxuICAgICAgICAgICAgY2xhc3NOYW1lOiAoaXRlbS5wZW5kaW5nKSA/ICdwZW5kaW5nJyA6IHVuZGVmaW5lZCxcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIDxsaSBrZXk9e2l9PjxhIHsuLi5saW5rUHJvcHN9Pnt0ZXh0fTwvYT48L2xpPjtcbiAgICB9XG59XG5cbkxpc3QuZGVmYXVsdFByb3BzID0ge1xuICAgIGZpZWxkOiAnbmFtZSdcbn07XG5cbmV4cG9ydCB7XG4gICAgTGlzdCBhcyBkZWZhdWx0LFxuICAgIExpc3Rcbn07XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuXG5mdW5jdGlvbiBMb2FkaW5nKCkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9hZGluZ1wiPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYWIgZmEtZW1waXJlIGZhLXNwaW5cIi8+IExvYWRpbmdcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuXG5leHBvcnQge1xuICAgIExvYWRpbmcgYXMgZGVmYXVsdCxcbiAgICBMb2FkaW5nXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==