(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["character-list"],{

/***/ "./pages/character-list.jsx":
/*!**********************************!*\
  !*** ./pages/character-list.jsx ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.CharacterList = exports.default = undefined;

var _regenerator = __webpack_require__(/*! babel-runtime/regenerator */ "../node_modules/babel-runtime/regenerator/index.js");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _slicedToArray2 = __webpack_require__(/*! babel-runtime/helpers/slicedToArray */ "../node_modules/babel-runtime/helpers/slicedToArray.js");

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _asyncToGenerator2 = __webpack_require__(/*! babel-runtime/helpers/asyncToGenerator */ "../node_modules/babel-runtime/helpers/asyncToGenerator.js");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var CharacterList = function () {
    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(props) {
        var route, swapi, _useProgress, _useProgress2, show, people, render;

        return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        render = function render() {
                            if (!people) {
                                return _react2.default.createElement(_loading2.default, null);
                            }
                            show(_react2.default.createElement(
                                'div',
                                null,
                                _react2.default.createElement(
                                    'h1',
                                    null,
                                    'Characters'
                                ),
                                _react2.default.createElement(_list2.default, { items: people, field: 'name', pageName: 'character-summary', route: route })
                            ));
                        };

                        route = props.route, swapi = props.swapi;
                        _useProgress = (0, _hooks.useProgress)(), _useProgress2 = (0, _slicedToArray3.default)(_useProgress, 1), show = _useProgress2[0];


                        render();
                        _context.next = 6;
                        return swapi.fetchList('/people/');

                    case 6:
                        people = _context.sent;

                        render();

                        people.more();

                        ;

                    case 10:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, this);
    }));

    return function CharacterList(_x) {
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

var asyncComponent = (0, _hooks2.default)(CharacterList);

exports.default = asyncComponent;
exports.CharacterList = asyncComponent;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9jaGFyYWN0ZXItbGlzdC5qc3giLCJ3ZWJwYWNrOi8vLy4vd2lkZ2V0cy9saXN0LmpzeCIsIndlYnBhY2s6Ly8vLi93aWRnZXRzL2xvYWRpbmcuanN4Il0sIm5hbWVzIjpbInByb3BzIiwicmVuZGVyIiwicGVvcGxlIiwic2hvdyIsInJvdXRlIiwic3dhcGkiLCJmZXRjaExpc3QiLCJtb3JlIiwiQ2hhcmFjdGVyTGlzdCIsImFzeW5jQ29tcG9uZW50IiwiZGVmYXVsdCIsIkxpc3QiLCJ1cmxzIiwiaXRlbXMiLCJmaWVsZCIsInBhZ2VOYW1lIiwibWFwIiwidXJsIiwiaW5kZXgiLCJpdGVtIiwicGVuZGluZyIsImxlbmd0aCIsInJlbmRlckl0ZW0iLCJpIiwiaWQiLCJleHRyYWN0SUQiLCJmaW5kIiwidGV4dCIsImxpbmtQcm9wcyIsImhyZWYiLCJjbGFzc05hbWUiLCJ1bmRlZmluZWQiLCJkZWZhdWx0UHJvcHMiLCJMb2FkaW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7d0ZBS0EsaUJBQTZCQSxLQUE3QjtBQUFBLHFFQVVhQyxNQVZiOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBVWFBLDhCQVZiLFlBVWFBLE1BVmIsR0FVc0I7QUFDZCxnQ0FBSSxDQUFDQyxNQUFMLEVBQWE7QUFDVCx1Q0FBTyw4QkFBQyxpQkFBRCxPQUFQO0FBQ0g7QUFDREMsaUNBQ0k7QUFBQTtBQUFBO0FBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQ0FESjtBQUVJLDhEQUFDLGNBQUQsSUFBTSxPQUFPRCxNQUFiLEVBQXFCLE9BQU0sTUFBM0IsRUFBa0MsVUFBUyxtQkFBM0MsRUFBK0QsT0FBT0UsS0FBdEU7QUFGSiw2QkFESjtBQU1ILHlCQXBCTDs7QUFDWUEsNkJBRFosR0FDNkJKLEtBRDdCLENBQ1lJLEtBRFosRUFDbUJDLEtBRG5CLEdBQzZCTCxLQUQ3QixDQUNtQkssS0FEbkI7QUFBQSx1Q0FFcUIseUJBRnJC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OztRQUdjdkIsTyxHQUFYdUIsTztRQUNBQSxPLEdBQUFBLE8iLCJmaWxlIjoiY2hhcmFjdGVyLWxpc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlbGFrcywgeyB1c2VQcm9ncmVzcyB9IGZyb20gJ3JlbGFrcy9ob29rcyc7XG5pbXBvcnQgTGlzdCBmcm9tICd3aWRnZXRzL2xpc3QnO1xuaW1wb3J0IExvYWRpbmcgZnJvbSAnd2lkZ2V0cy9sb2FkaW5nJztcblxuYXN5bmMgZnVuY3Rpb24gQ2hhcmFjdGVyTGlzdChwcm9wcykge1xuICAgIGNvbnN0IHsgcm91dGUsIHN3YXBpIH0gPSBwcm9wcztcbiAgICBjb25zdCBbIHNob3cgXSA9IHVzZVByb2dyZXNzKCk7XG5cbiAgICByZW5kZXIoKTtcbiAgICBjb25zdCBwZW9wbGUgPSBhd2FpdCBzd2FwaS5mZXRjaExpc3QoJy9wZW9wbGUvJyk7XG4gICAgcmVuZGVyKCk7XG5cbiAgICBwZW9wbGUubW9yZSgpO1xuXG4gICAgZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgICBpZiAoIXBlb3BsZSkge1xuICAgICAgICAgICAgcmV0dXJuIDxMb2FkaW5nIC8+O1xuICAgICAgICB9XG4gICAgICAgIHNob3coXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxoMT5DaGFyYWN0ZXJzPC9oMT5cbiAgICAgICAgICAgICAgICA8TGlzdCBpdGVtcz17cGVvcGxlfSBmaWVsZD1cIm5hbWVcIiBwYWdlTmFtZT1cImNoYXJhY3Rlci1zdW1tYXJ5XCIgcm91dGU9e3JvdXRlfSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfTtcbn1cblxuY29uc3QgYXN5bmNDb21wb25lbnQgPSBSZWxha3MoQ2hhcmFjdGVyTGlzdCk7XG5cbmV4cG9ydCB7XG4gICAgYXN5bmNDb21wb25lbnQgYXMgZGVmYXVsdCxcbiAgICBhc3luY0NvbXBvbmVudCBhcyBDaGFyYWN0ZXJMaXN0LFxufTtcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5cbmZ1bmN0aW9uIExpc3QocHJvcHMpIHtcbiAgICBsZXQgeyByb3V0ZSwgdXJscywgaXRlbXMsIGZpZWxkLCBwYWdlTmFtZSB9ID0gcHJvcHM7XG4gICAgaWYgKHVybHMpIHtcbiAgICAgICAgLy8gYWNjZXB0IHNpbmdsZSBVUkwgYW5kIG9iamVjdFxuICAgICAgICBpZiAodHlwZW9mKHVybHMpID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgdXJscyA9IFsgdXJscyBdO1xuICAgICAgICAgICAgaXRlbXMgPSBbIGl0ZW1zIF07XG4gICAgICAgIH1cbiAgICAgICAgLy8gZGVhbCB3aXRoIGhvbGVzIGluIHRoZSBkYXRhIHNldFxuICAgICAgICBpdGVtcyA9IHVybHMubWFwKCh1cmwsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBsZXQgaXRlbSA9IChpdGVtcykgPyBpdGVtc1tpbmRleF0gOiBudWxsO1xuICAgICAgICAgICAgaWYgKCFpdGVtKSB7XG4gICAgICAgICAgICAgICAgaXRlbSA9IHsgdXJsLCBwZW5kaW5nOiB0cnVlIH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gaXRlbTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGlmICghaXRlbXMpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGlmIChpdGVtcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuIDx1bCBjbGFzc05hbWU9XCJlbXB0eVwiPjxsaT48c3Bhbj5ub25lPC9zcGFuPjwvbGk+PC91bD47XG4gICAgfVxuICAgIHJldHVybiA8dWw+e2l0ZW1zLm1hcChyZW5kZXJJdGVtKX08L3VsPjtcblxuICAgIGZ1bmN0aW9uIHJlbmRlckl0ZW0oaXRlbSwgaSkge1xuICAgICAgICBjb25zdCBpZCA9IHJvdXRlLmV4dHJhY3RJRChpdGVtLnVybCk7XG4gICAgICAgIGNvbnN0IHVybCA9IHJvdXRlLmZpbmQocGFnZU5hbWUsIHsgaWQgfSk7XG4gICAgICAgIGNvbnN0IHRleHQgPSBpdGVtLnBlbmRpbmcgPyAnLi4uJyA6IGl0ZW1bZmllbGRdO1xuICAgICAgICBjb25zdCBsaW5rUHJvcHMgPSB7XG4gICAgICAgICAgICBocmVmOiB1cmwsXG4gICAgICAgICAgICBjbGFzc05hbWU6IChpdGVtLnBlbmRpbmcpID8gJ3BlbmRpbmcnIDogdW5kZWZpbmVkLFxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gPGxpIGtleT17aX0+PGEgey4uLmxpbmtQcm9wc30+e3RleHR9PC9hPjwvbGk+O1xuICAgIH1cbn1cblxuTGlzdC5kZWZhdWx0UHJvcHMgPSB7XG4gICAgZmllbGQ6ICduYW1lJ1xufTtcblxuZXhwb3J0IHtcbiAgICBMaXN0IGFzIGRlZmF1bHQsXG4gICAgTGlzdFxufTtcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5cbmZ1bmN0aW9uIExvYWRpbmcoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2FkaW5nXCI+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhYiBmYS1lbXBpcmUgZmEtc3BpblwiLz4gTG9hZGluZ1xuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cbmV4cG9ydCB7XG4gICAgTG9hZGluZyBhcyBkZWZhdWx0LFxuICAgIExvYWRpbmdcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9