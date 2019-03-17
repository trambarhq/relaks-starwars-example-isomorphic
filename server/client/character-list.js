exports.ids = ["character-list"];
exports.modules = {

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

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9jaGFyYWN0ZXItbGlzdC5qc3giLCJ3ZWJwYWNrOi8vLy4vd2lkZ2V0cy9saXN0LmpzeCIsIndlYnBhY2s6Ly8vLi93aWRnZXRzL2xvYWRpbmcuanN4Il0sIm5hbWVzIjpbInByb3BzIiwicmVuZGVyIiwicGVvcGxlIiwic2hvdyIsInJvdXRlIiwic3dhcGkiLCJmZXRjaExpc3QiLCJtb3JlIiwiQ2hhcmFjdGVyTGlzdCIsImFzeW5jQ29tcG9uZW50IiwiZGVmYXVsdCIsIkxpc3QiLCJ1cmxzIiwiaXRlbXMiLCJmaWVsZCIsInBhZ2VOYW1lIiwibWFwIiwidXJsIiwiaW5kZXgiLCJpdGVtIiwicGVuZGluZyIsImxlbmd0aCIsInJlbmRlckl0ZW0iLCJpIiwiaWQiLCJleHRyYWN0SUQiLCJmaW5kIiwidGV4dCIsImxpbmtQcm9wcyIsImhyZWYiLCJjbGFzc05hbWUiLCJ1bmRlZmluZWQiLCJkZWZhdWx0UHJvcHMiLCJMb2FkaW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3dGQUtBLGlCQUE2QkEsS0FBN0I7QUFBQSxxRUFVYUMsTUFWYjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVVhQSw4QkFWYixZQVVhQSxNQVZiLEdBVXNCO0FBQ2QsZ0NBQUksQ0FBQ0MsTUFBTCxFQUFhO0FBQ1QsdUNBQU8sOEJBQUMsaUJBQUQsT0FBUDtBQUNIO0FBQ0RDLGlDQUNJO0FBQUE7QUFBQTtBQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUNBREo7QUFFSSw4REFBQyxjQUFELElBQU0sT0FBT0QsTUFBYixFQUFxQixPQUFNLE1BQTNCLEVBQWtDLFVBQVMsbUJBQTNDLEVBQStELE9BQU9FLEtBQXRFO0FBRkosNkJBREo7QUFNSCx5QkFwQkw7O0FBQ1lBLDZCQURaLEdBQzZCSixLQUQ3QixDQUNZSSxLQURaLEVBQ21CQyxLQURuQixHQUM2QkwsS0FEN0IsQ0FDbUJLLEtBRG5CO0FBQUEsdUNBRXFCLHlCQUZy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SDs7UUFHY3ZCLE8sR0FBWHVCLE87UUFDQUEsTyxHQUFBQSxPIiwiZmlsZSI6ImNoYXJhY3Rlci1saXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWxha3MsIHsgdXNlUHJvZ3Jlc3MgfSBmcm9tICdyZWxha3MvaG9va3MnO1xuaW1wb3J0IExpc3QgZnJvbSAnd2lkZ2V0cy9saXN0JztcbmltcG9ydCBMb2FkaW5nIGZyb20gJ3dpZGdldHMvbG9hZGluZyc7XG5cbmFzeW5jIGZ1bmN0aW9uIENoYXJhY3Rlckxpc3QocHJvcHMpIHtcbiAgICBjb25zdCB7IHJvdXRlLCBzd2FwaSB9ID0gcHJvcHM7XG4gICAgY29uc3QgWyBzaG93IF0gPSB1c2VQcm9ncmVzcygpO1xuXG4gICAgcmVuZGVyKCk7XG4gICAgY29uc3QgcGVvcGxlID0gYXdhaXQgc3dhcGkuZmV0Y2hMaXN0KCcvcGVvcGxlLycpO1xuICAgIHJlbmRlcigpO1xuXG4gICAgcGVvcGxlLm1vcmUoKTtcblxuICAgIGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgICAgaWYgKCFwZW9wbGUpIHtcbiAgICAgICAgICAgIHJldHVybiA8TG9hZGluZyAvPjtcbiAgICAgICAgfVxuICAgICAgICBzaG93KFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8aDE+Q2hhcmFjdGVyczwvaDE+XG4gICAgICAgICAgICAgICAgPExpc3QgaXRlbXM9e3Blb3BsZX0gZmllbGQ9XCJuYW1lXCIgcGFnZU5hbWU9XCJjaGFyYWN0ZXItc3VtbWFyeVwiIHJvdXRlPXtyb3V0ZX0gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH07XG59XG5cbmNvbnN0IGFzeW5jQ29tcG9uZW50ID0gUmVsYWtzKENoYXJhY3Rlckxpc3QpO1xuXG5leHBvcnQge1xuICAgIGFzeW5jQ29tcG9uZW50IGFzIGRlZmF1bHQsXG4gICAgYXN5bmNDb21wb25lbnQgYXMgQ2hhcmFjdGVyTGlzdCxcbn07XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuXG5mdW5jdGlvbiBMaXN0KHByb3BzKSB7XG4gICAgbGV0IHsgcm91dGUsIHVybHMsIGl0ZW1zLCBmaWVsZCwgcGFnZU5hbWUgfSA9IHByb3BzO1xuICAgIGlmICh1cmxzKSB7XG4gICAgICAgIC8vIGFjY2VwdCBzaW5nbGUgVVJMIGFuZCBvYmplY3RcbiAgICAgICAgaWYgKHR5cGVvZih1cmxzKSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIHVybHMgPSBbIHVybHMgXTtcbiAgICAgICAgICAgIGl0ZW1zID0gWyBpdGVtcyBdO1xuICAgICAgICB9XG4gICAgICAgIC8vIGRlYWwgd2l0aCBob2xlcyBpbiB0aGUgZGF0YSBzZXRcbiAgICAgICAgaXRlbXMgPSB1cmxzLm1hcCgodXJsLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgbGV0IGl0ZW0gPSAoaXRlbXMpID8gaXRlbXNbaW5kZXhdIDogbnVsbDtcbiAgICAgICAgICAgIGlmICghaXRlbSkge1xuICAgICAgICAgICAgICAgIGl0ZW0gPSB7IHVybCwgcGVuZGluZzogdHJ1ZSB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGl0ZW07XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAoIWl0ZW1zKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBpZiAoaXRlbXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJldHVybiA8dWwgY2xhc3NOYW1lPVwiZW1wdHlcIj48bGk+PHNwYW4+bm9uZTwvc3Bhbj48L2xpPjwvdWw+O1xuICAgIH1cbiAgICByZXR1cm4gPHVsPntpdGVtcy5tYXAocmVuZGVySXRlbSl9PC91bD47XG5cbiAgICBmdW5jdGlvbiByZW5kZXJJdGVtKGl0ZW0sIGkpIHtcbiAgICAgICAgY29uc3QgaWQgPSByb3V0ZS5leHRyYWN0SUQoaXRlbS51cmwpO1xuICAgICAgICBjb25zdCB1cmwgPSByb3V0ZS5maW5kKHBhZ2VOYW1lLCB7IGlkIH0pO1xuICAgICAgICBjb25zdCB0ZXh0ID0gaXRlbS5wZW5kaW5nID8gJy4uLicgOiBpdGVtW2ZpZWxkXTtcbiAgICAgICAgY29uc3QgbGlua1Byb3BzID0ge1xuICAgICAgICAgICAgaHJlZjogdXJsLFxuICAgICAgICAgICAgY2xhc3NOYW1lOiAoaXRlbS5wZW5kaW5nKSA/ICdwZW5kaW5nJyA6IHVuZGVmaW5lZCxcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIDxsaSBrZXk9e2l9PjxhIHsuLi5saW5rUHJvcHN9Pnt0ZXh0fTwvYT48L2xpPjtcbiAgICB9XG59XG5cbkxpc3QuZGVmYXVsdFByb3BzID0ge1xuICAgIGZpZWxkOiAnbmFtZSdcbn07XG5cbmV4cG9ydCB7XG4gICAgTGlzdCBhcyBkZWZhdWx0LFxuICAgIExpc3Rcbn07XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuXG5mdW5jdGlvbiBMb2FkaW5nKCkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9hZGluZ1wiPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYWIgZmEtZW1waXJlIGZhLXNwaW5cIi8+IExvYWRpbmdcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuXG5leHBvcnQge1xuICAgIExvYWRpbmcgYXMgZGVmYXVsdCxcbiAgICBMb2FkaW5nXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==