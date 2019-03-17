(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["species-list"],{

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

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9zcGVjaWVzLWxpc3QuanN4Iiwid2VicGFjazovLy8uL3dpZGdldHMvbGlzdC5qc3giLCJ3ZWJwYWNrOi8vLy4vd2lkZ2V0cy9sb2FkaW5nLmpzeCJdLCJuYW1lcyI6WyJwcm9wcyIsInJlbmRlciIsInNwZWNpZXMiLCJzaG93Iiwicm91dGUiLCJzd2FwaSIsImZldGNoTGlzdCIsIm1vcmUiLCJTcGVjaWVzTGlzdCIsImFzeW5jQ29tcG9uZW50IiwiZGVmYXVsdCIsIkxpc3QiLCJ1cmxzIiwiaXRlbXMiLCJmaWVsZCIsInBhZ2VOYW1lIiwibWFwIiwidXJsIiwiaW5kZXgiLCJpdGVtIiwicGVuZGluZyIsImxlbmd0aCIsInJlbmRlckl0ZW0iLCJpIiwiaWQiLCJleHRyYWN0SUQiLCJmaW5kIiwidGV4dCIsImxpbmtQcm9wcyIsImhyZWYiLCJjbGFzc05hbWUiLCJ1bmRlZmluZWQiLCJkZWZhdWx0UHJvcHMiLCJMb2FkaW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7d0ZBS0EsaUJBQTJCQSxLQUEzQjtBQUFBLHNFQVVhQyxNQVZiOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBVWFBLDhCQVZiLFlBVWFBLE1BVmIsR0FVc0I7QUFDZCxnQ0FBSSxDQUFDQyxPQUFMLEVBQWM7QUFDVkMscUNBQUssOEJBQUMsaUJBQUQsT0FBTDtBQUNILDZCQUZELE1BRU87QUFDSEEscUNBQ0k7QUFBQTtBQUFBO0FBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQ0FESjtBQUVJLGtFQUFDLGNBQUQsSUFBTSxPQUFPRCxPQUFiLEVBQXNCLE9BQU0sTUFBNUIsRUFBbUMsVUFBUyxpQkFBNUMsRUFBOEQsT0FBT0UsS0FBckU7QUFGSixpQ0FESjtBQU1IO0FBQ0oseUJBckJMOztBQUNZQSw2QkFEWixHQUM2QkosS0FEN0IsQ0FDWUksS0FEWixFQUNtQkMsS0FEbkIsR0FDNkJMLEtBRDdCLENBQ21CSyxLQURuQjtBQUFB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REo7QUFPSDs7UUFHY3ZCLE8sR0FBWHVCLE87UUFDQUEsTyxHQUFBQSxPIiwiZmlsZSI6InNwZWNpZXMtbGlzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVsYWtzLCB7IHVzZVByb2dyZXNzIH0gZnJvbSAncmVsYWtzL2hvb2tzJztcbmltcG9ydCBMaXN0IGZyb20gJ3dpZGdldHMvbGlzdCc7XG5pbXBvcnQgTG9hZGluZyBmcm9tICd3aWRnZXRzL2xvYWRpbmcnO1xuXG5hc3luYyBmdW5jdGlvbiBTcGVjaWVzTGlzdChwcm9wcykge1xuICAgIGNvbnN0IHsgcm91dGUsIHN3YXBpIH0gPSBwcm9wcztcbiAgICBjb25zdCBbIHNob3cgXSA9IHVzZVByb2dyZXNzKCk7XG5cbiAgICByZW5kZXIoKTtcbiAgICBjb25zdCBzcGVjaWVzID0gYXdhaXQgc3dhcGkuZmV0Y2hMaXN0KCcvc3BlY2llcy8nKTtcbiAgICByZW5kZXIoKTtcblxuICAgIHNwZWNpZXMubW9yZSgpO1xuXG4gICAgZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgICBpZiAoIXNwZWNpZXMpIHtcbiAgICAgICAgICAgIHNob3coPExvYWRpbmcgLz4pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2hvdyhcbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8aDE+U3BlY2llczwvaDE+XG4gICAgICAgICAgICAgICAgICAgIDxMaXN0IGl0ZW1zPXtzcGVjaWVzfSBmaWVsZD1cIm5hbWVcIiBwYWdlTmFtZT1cInNwZWNpZXMtc3VtbWFyeVwiIHJvdXRlPXtyb3V0ZX0gLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmNvbnN0IGFzeW5jQ29tcG9uZW50ID0gUmVsYWtzKFNwZWNpZXNMaXN0KTtcblxuZXhwb3J0IHtcbiAgICBhc3luY0NvbXBvbmVudCBhcyBkZWZhdWx0LFxuICAgIGFzeW5jQ29tcG9uZW50IGFzIFNwZWNpZXNMaXN0LFxufTtcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5cbmZ1bmN0aW9uIExpc3QocHJvcHMpIHtcbiAgICBsZXQgeyByb3V0ZSwgdXJscywgaXRlbXMsIGZpZWxkLCBwYWdlTmFtZSB9ID0gcHJvcHM7XG4gICAgaWYgKHVybHMpIHtcbiAgICAgICAgLy8gYWNjZXB0IHNpbmdsZSBVUkwgYW5kIG9iamVjdFxuICAgICAgICBpZiAodHlwZW9mKHVybHMpID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgdXJscyA9IFsgdXJscyBdO1xuICAgICAgICAgICAgaXRlbXMgPSBbIGl0ZW1zIF07XG4gICAgICAgIH1cbiAgICAgICAgLy8gZGVhbCB3aXRoIGhvbGVzIGluIHRoZSBkYXRhIHNldFxuICAgICAgICBpdGVtcyA9IHVybHMubWFwKCh1cmwsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBsZXQgaXRlbSA9IChpdGVtcykgPyBpdGVtc1tpbmRleF0gOiBudWxsO1xuICAgICAgICAgICAgaWYgKCFpdGVtKSB7XG4gICAgICAgICAgICAgICAgaXRlbSA9IHsgdXJsLCBwZW5kaW5nOiB0cnVlIH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gaXRlbTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGlmICghaXRlbXMpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGlmIChpdGVtcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuIDx1bCBjbGFzc05hbWU9XCJlbXB0eVwiPjxsaT48c3Bhbj5ub25lPC9zcGFuPjwvbGk+PC91bD47XG4gICAgfVxuICAgIHJldHVybiA8dWw+e2l0ZW1zLm1hcChyZW5kZXJJdGVtKX08L3VsPjtcblxuICAgIGZ1bmN0aW9uIHJlbmRlckl0ZW0oaXRlbSwgaSkge1xuICAgICAgICBjb25zdCBpZCA9IHJvdXRlLmV4dHJhY3RJRChpdGVtLnVybCk7XG4gICAgICAgIGNvbnN0IHVybCA9IHJvdXRlLmZpbmQocGFnZU5hbWUsIHsgaWQgfSk7XG4gICAgICAgIGNvbnN0IHRleHQgPSBpdGVtLnBlbmRpbmcgPyAnLi4uJyA6IGl0ZW1bZmllbGRdO1xuICAgICAgICBjb25zdCBsaW5rUHJvcHMgPSB7XG4gICAgICAgICAgICBocmVmOiB1cmwsXG4gICAgICAgICAgICBjbGFzc05hbWU6IChpdGVtLnBlbmRpbmcpID8gJ3BlbmRpbmcnIDogdW5kZWZpbmVkLFxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gPGxpIGtleT17aX0+PGEgey4uLmxpbmtQcm9wc30+e3RleHR9PC9hPjwvbGk+O1xuICAgIH1cbn1cblxuTGlzdC5kZWZhdWx0UHJvcHMgPSB7XG4gICAgZmllbGQ6ICduYW1lJ1xufTtcblxuZXhwb3J0IHtcbiAgICBMaXN0IGFzIGRlZmF1bHQsXG4gICAgTGlzdFxufTtcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5cbmZ1bmN0aW9uIExvYWRpbmcoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2FkaW5nXCI+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhYiBmYS1lbXBpcmUgZmEtc3BpblwiLz4gTG9hZGluZ1xuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cbmV4cG9ydCB7XG4gICAgTG9hZGluZyBhcyBkZWZhdWx0LFxuICAgIExvYWRpbmdcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9