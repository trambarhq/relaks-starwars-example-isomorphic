exports.ids = ["starship-list"];
exports.modules = {

/***/ "./pages/starship-list.jsx":
/*!*********************************!*\
  !*** ./pages/starship-list.jsx ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.StarshipList = exports.default = undefined;

var _regenerator = __webpack_require__(/*! babel-runtime/regenerator */ "../node_modules/babel-runtime/regenerator/index.js");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _slicedToArray2 = __webpack_require__(/*! babel-runtime/helpers/slicedToArray */ "../node_modules/babel-runtime/helpers/slicedToArray.js");

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _asyncToGenerator2 = __webpack_require__(/*! babel-runtime/helpers/asyncToGenerator */ "../node_modules/babel-runtime/helpers/asyncToGenerator.js");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var StarshipList = function () {
    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(props) {
        var route, swapi, _useProgress, _useProgress2, show, starships, render;

        return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        render = function render() {
                            if (!starships) {
                                show(_react2.default.createElement(_loading2.default, null));
                            } else {
                                show(_react2.default.createElement(
                                    'div',
                                    null,
                                    _react2.default.createElement(
                                        'h1',
                                        null,
                                        'Starships'
                                    ),
                                    _react2.default.createElement(_list2.default, { items: starships, field: 'name', pageName: 'starship-summary', route: route })
                                ));
                            }
                        };

                        route = props.route, swapi = props.swapi;
                        _useProgress = (0, _hooks.useProgress)(), _useProgress2 = (0, _slicedToArray3.default)(_useProgress, 1), show = _useProgress2[0];


                        render();
                        _context.next = 6;
                        return swapi.fetchList('/starships/');

                    case 6:
                        starships = _context.sent;

                        render();

                        starships.more();

                    case 9:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, this);
    }));

    return function StarshipList(_x) {
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

var asyncComponent = (0, _hooks2.default)(StarshipList);

exports.default = asyncComponent;
exports.StarshipList = asyncComponent;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9zdGFyc2hpcC1saXN0LmpzeCIsIndlYnBhY2s6Ly8vLi93aWRnZXRzL2xpc3QuanN4Iiwid2VicGFjazovLy8uL3dpZGdldHMvbG9hZGluZy5qc3giXSwibmFtZXMiOlsicHJvcHMiLCJyZW5kZXIiLCJzdGFyc2hpcHMiLCJzaG93Iiwicm91dGUiLCJzd2FwaSIsImZldGNoTGlzdCIsIm1vcmUiLCJTdGFyc2hpcExpc3QiLCJhc3luY0NvbXBvbmVudCIsImRlZmF1bHQiLCJMaXN0IiwidXJscyIsIml0ZW1zIiwiZmllbGQiLCJwYWdlTmFtZSIsIm1hcCIsInVybCIsImluZGV4IiwiaXRlbSIsInBlbmRpbmciLCJsZW5ndGgiLCJyZW5kZXJJdGVtIiwiaSIsImlkIiwiZXh0cmFjdElEIiwiZmluZCIsInRleHQiLCJsaW5rUHJvcHMiLCJocmVmIiwiY2xhc3NOYW1lIiwidW5kZWZpbmVkIiwiZGVmYXVsdFByb3BzIiwiTG9hZGluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt3RkFLQSxpQkFBNEJBLEtBQTVCO0FBQUEsd0VBVWFDLE1BVmI7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFVYUEsOEJBVmIsWUFVYUEsTUFWYixHQVVzQjtBQUNkLGdDQUFJLENBQUNDLFNBQUwsRUFBZ0I7QUFDWkMscUNBQUssOEJBQUMsaUJBQUQsT0FBTDtBQUNILDZCQUZELE1BRU87QUFDSEEscUNBQ0k7QUFBQTtBQUFBO0FBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQ0FESjtBQUVJLGtFQUFDLGNBQUQsSUFBTSxPQUFPRCxTQUFiLEVBQXdCLE9BQU0sTUFBOUIsRUFBcUMsVUFBUyxrQkFBOUMsRUFBaUUsT0FBT0UsS0FBeEU7QUFGSixpQ0FESjtBQU1IO0FBQ0oseUJBckJMOztBQUNZQSw2QkFEWixHQUM2QkosS0FEN0IsQ0FDWUksS0FEWixFQUNtQkMsS0FEbkIsR0FDNkJMLEtBRDdCLENBQ21CSyxLQURu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QURKLEtBREo7QUFPSDs7UUFHY3ZCLE8sR0FBWHVCLE87UUFDQUEsTyxHQUFBQSxPIiwiZmlsZSI6InN0YXJzaGlwLWxpc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlbGFrcywgeyB1c2VQcm9ncmVzcyB9IGZyb20gJ3JlbGFrcy9ob29rcyc7XG5pbXBvcnQgTGlzdCBmcm9tICd3aWRnZXRzL2xpc3QnO1xuaW1wb3J0IExvYWRpbmcgZnJvbSAnd2lkZ2V0cy9sb2FkaW5nJztcblxuYXN5bmMgZnVuY3Rpb24gU3RhcnNoaXBMaXN0KHByb3BzKSB7XG4gICAgY29uc3QgeyByb3V0ZSwgc3dhcGkgfSA9IHByb3BzO1xuICAgIGNvbnN0IFsgc2hvdyBdID0gdXNlUHJvZ3Jlc3MoKTtcblxuICAgIHJlbmRlcigpO1xuICAgIGNvbnN0IHN0YXJzaGlwcyA9IGF3YWl0IHN3YXBpLmZldGNoTGlzdCgnL3N0YXJzaGlwcy8nKTtcbiAgICByZW5kZXIoKTtcblxuICAgIHN0YXJzaGlwcy5tb3JlKCk7XG5cbiAgICBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICAgIGlmICghc3RhcnNoaXBzKSB7XG4gICAgICAgICAgICBzaG93KDxMb2FkaW5nIC8+KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNob3coXG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGgxPlN0YXJzaGlwczwvaDE+XG4gICAgICAgICAgICAgICAgICAgIDxMaXN0IGl0ZW1zPXtzdGFyc2hpcHN9IGZpZWxkPVwibmFtZVwiIHBhZ2VOYW1lPVwic3RhcnNoaXAtc3VtbWFyeVwiIHJvdXRlPXtyb3V0ZX0gLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmNvbnN0IGFzeW5jQ29tcG9uZW50ID0gUmVsYWtzKFN0YXJzaGlwTGlzdCk7XG5cbmV4cG9ydCB7XG4gICAgYXN5bmNDb21wb25lbnQgYXMgZGVmYXVsdCxcbiAgICBhc3luY0NvbXBvbmVudCBhcyBTdGFyc2hpcExpc3QsXG59O1xuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcblxuZnVuY3Rpb24gTGlzdChwcm9wcykge1xuICAgIGxldCB7IHJvdXRlLCB1cmxzLCBpdGVtcywgZmllbGQsIHBhZ2VOYW1lIH0gPSBwcm9wcztcbiAgICBpZiAodXJscykge1xuICAgICAgICAvLyBhY2NlcHQgc2luZ2xlIFVSTCBhbmQgb2JqZWN0XG4gICAgICAgIGlmICh0eXBlb2YodXJscykgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICB1cmxzID0gWyB1cmxzIF07XG4gICAgICAgICAgICBpdGVtcyA9IFsgaXRlbXMgXTtcbiAgICAgICAgfVxuICAgICAgICAvLyBkZWFsIHdpdGggaG9sZXMgaW4gdGhlIGRhdGEgc2V0XG4gICAgICAgIGl0ZW1zID0gdXJscy5tYXAoKHVybCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGxldCBpdGVtID0gKGl0ZW1zKSA/IGl0ZW1zW2luZGV4XSA6IG51bGw7XG4gICAgICAgICAgICBpZiAoIWl0ZW0pIHtcbiAgICAgICAgICAgICAgICBpdGVtID0geyB1cmwsIHBlbmRpbmc6IHRydWUgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBpdGVtO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgaWYgKCFpdGVtcykge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgaWYgKGl0ZW1zLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gPHVsIGNsYXNzTmFtZT1cImVtcHR5XCI+PGxpPjxzcGFuPm5vbmU8L3NwYW4+PC9saT48L3VsPjtcbiAgICB9XG4gICAgcmV0dXJuIDx1bD57aXRlbXMubWFwKHJlbmRlckl0ZW0pfTwvdWw+O1xuXG4gICAgZnVuY3Rpb24gcmVuZGVySXRlbShpdGVtLCBpKSB7XG4gICAgICAgIGNvbnN0IGlkID0gcm91dGUuZXh0cmFjdElEKGl0ZW0udXJsKTtcbiAgICAgICAgY29uc3QgdXJsID0gcm91dGUuZmluZChwYWdlTmFtZSwgeyBpZCB9KTtcbiAgICAgICAgY29uc3QgdGV4dCA9IGl0ZW0ucGVuZGluZyA/ICcuLi4nIDogaXRlbVtmaWVsZF07XG4gICAgICAgIGNvbnN0IGxpbmtQcm9wcyA9IHtcbiAgICAgICAgICAgIGhyZWY6IHVybCxcbiAgICAgICAgICAgIGNsYXNzTmFtZTogKGl0ZW0ucGVuZGluZykgPyAncGVuZGluZycgOiB1bmRlZmluZWQsXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiA8bGkga2V5PXtpfT48YSB7Li4ubGlua1Byb3BzfT57dGV4dH08L2E+PC9saT47XG4gICAgfVxufVxuXG5MaXN0LmRlZmF1bHRQcm9wcyA9IHtcbiAgICBmaWVsZDogJ25hbWUnXG59O1xuXG5leHBvcnQge1xuICAgIExpc3QgYXMgZGVmYXVsdCxcbiAgICBMaXN0XG59O1xuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcblxuZnVuY3Rpb24gTG9hZGluZygpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvYWRpbmdcIj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFiIGZhLWVtcGlyZSBmYS1zcGluXCIvPiBMb2FkaW5nXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cblxuZXhwb3J0IHtcbiAgICBMb2FkaW5nIGFzIGRlZmF1bHQsXG4gICAgTG9hZGluZ1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=