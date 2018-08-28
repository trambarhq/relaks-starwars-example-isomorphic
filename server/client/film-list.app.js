exports.ids = ["film-list"];
exports.modules = {

/***/ "./pages/film-list.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.FilmListSync = exports.FilmList = exports.default = undefined;

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

var FilmList = function (_AsyncComponent) {
    (0, _inherits3.default)(FilmList, _AsyncComponent);

    function FilmList() {
        (0, _classCallCheck3.default)(this, FilmList);
        return (0, _possibleConstructorReturn3.default)(this, (FilmList.__proto__ || (0, _getPrototypeOf2.default)(FilmList)).apply(this, arguments));
    }

    (0, _createClass3.default)(FilmList, [{
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
                                    planets: null,
                                    route: route
                                };

                                meanwhile.show((0, _preact.h)(FilmListSync, props));
                                _context.next = 5;
                                return swapi.fetchList('/films/');

                            case 5:
                                props.planets = _context.sent;

                                props.planets.more();
                                return _context.abrupt('return', (0, _preact.h)(FilmListSync, props));

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
    return FilmList;
}(_preact2.AsyncComponent);

FilmList.displayName = 'FilmList';

var FilmListSync = function (_Component) {
    (0, _inherits3.default)(FilmListSync, _Component);

    function FilmListSync() {
        (0, _classCallCheck3.default)(this, FilmListSync);
        return (0, _possibleConstructorReturn3.default)(this, (FilmListSync.__proto__ || (0, _getPrototypeOf2.default)(FilmListSync)).apply(this, arguments));
    }

    (0, _createClass3.default)(FilmListSync, [{
        key: 'render',


        /**
         * Render the component, making best effort using what props are given
         *
         * @return {VNode}
         */
        value: function render() {
            var _props2 = this.props,
                planets = _props2.planets,
                route = _props2.route;

            if (!planets) {
                return (0, _preact.h)(_loading2.default, null);
            }
            var listProps = {
                items: planets,
                field: 'title',
                pageName: 'film-summary',
                route: route
            };
            return (0, _preact.h)(
                'div',
                null,
                (0, _preact.h)(
                    'h1',
                    null,
                    'Films'
                ),
                (0, _preact.h)(_list2.default, listProps)
            );
        }
    }]);
    return FilmListSync;
}(_preact.Component);

FilmListSync.displayName = 'FilmListSync';
exports.default = FilmList;
exports.FilmList = FilmList;
exports.FilmListSync = FilmListSync;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9maWxtLWxpc3QuanN4Iiwid2VicGFjazovLy8uL3dpZGdldHMvbGlzdC5qc3giLCJ3ZWJwYWNrOi8vLy4vd2lkZ2V0cy9sb2FkaW5nLmpzeCJdLCJuYW1lcyI6WyJGaWxtTGlzdCIsIm1lYW53aGlsZSIsInByb3BzIiwicm91dGUiLCJzd2FwaSIsInBsYW5ldHMiLCJzaG93IiwiZmV0Y2hMaXN0IiwibW9yZSIsIkFzeW5jQ29tcG9uZW50IiwiZGlzcGxheU5hbWUiLCJGaWxtTGlzdFN5bmMiLCJsaXN0UHJvcHMiLCJpdGVtcyIsImZpZWxkIiwicGFnZU5hbWUiLCJDb21wb25lbnQiLCJkZWZhdWx0IiwiTGlzdCIsInVybHMiLCJ1cmwiLCJwZW5kaW5nIiwiQXJyYXkiLCJtYXAiLCJpbmRleCIsIml0ZW0iLCJsZW5ndGgiLCJpZCIsImV4dHJhY3RJRCIsImZpbmQiLCJ0ZXh0IiwibGlua1Byb3BzIiwiaHJlZiIsImNsYXNzTmFtZSIsInVuZGVmaW5lZCIsImRlZmF1bHRQcm9wcyIsIkxvYWRpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBOztJQUVNQSxROzs7Ozs7Ozs7Ozs7QUFHRjs7Ozs7Ozs7aUhBT2tCQyxTOzs7Ozs7O3lDQUNTLEtBQUtDLEssRUFBdEJDLEssVUFBQUEsSyxFQUFPQyxLLFVBQUFBLEs7QUFDVEYscUMsR0FBUTtBQUNSRyw2Q0FBUyxJQUREO0FBRVJGLDJDQUFPQTtBQUZDLGlDOztBQUlaRiwwQ0FBVUssSUFBVixDQUFlLGVBQUMsWUFBRCxFQUFrQkosS0FBbEIsQ0FBZjs7dUNBQ3NCRSxNQUFNRyxTQUFOLENBQWdCLFNBQWhCLEM7OztBQUF0Qkwsc0NBQU1HLE87O0FBQ05ILHNDQUFNRyxPQUFOLENBQWNHLElBQWQ7aUVBQ08sZUFBQyxZQUFELEVBQWtCTixLQUFsQixDOzs7Ozs7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UDtBQUFtQkQ7QUFBbkI7QUFBSixhQUFQO0FBQ0gsU0FURDtBQUZKLEtBREo7QUFnQkg7O0FBRURaLEtBQUtpQixZQUFMLEdBQW9CO0FBQ2hCckIsV0FBTztBQURTLENBQXBCOztBQUlBSSxLQUFLUixXQUFMLEdBQW1CLE1BQW5COztRQUdZTyxPLEdBQVJDLEk7UUFDQUEsSSxHQUFBQSxJOzs7Ozs7Ozs7Ozs7Ozs7QUN2REo7O0FBRUE7O0FBRUEsU0FBU2tCLE9BQVQsR0FBbUI7QUFDZixXQUNJO0FBQUE7QUFBQSxVQUFLLFdBQVUsU0FBZjtBQUNJO0FBQUE7QUFBQTtBQUNJLGtDQUFHLFdBQVUsdUJBQWIsR0FESjtBQUFBO0FBQUE7QUFESixLQURKO0FBT0g7O0FBRURBLFFBQVExQixXQUFSLEdBQXNCLFNBQXRCOztRQUdlTyxPLEdBQVhtQixPO1FBQ0FBLE8sR0FBQUEsTyIsImZpbGUiOiJmaWxtLWxpc3QuYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaCwgQ29tcG9uZW50IH0gZnJvbSAncHJlYWN0JztcbmltcG9ydCB7IEFzeW5jQ29tcG9uZW50IH0gZnJvbSAncmVsYWtzL3ByZWFjdCc7XG5pbXBvcnQgTGlzdCBmcm9tICd3aWRnZXRzL2xpc3QnO1xuaW1wb3J0IExvYWRpbmcgZnJvbSAnd2lkZ2V0cy9sb2FkaW5nJztcblxuLyoqIEBqc3ggaCAqL1xuXG5jbGFzcyBGaWxtTGlzdCBleHRlbmRzIEFzeW5jQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgZGlzcGxheU5hbWUgPSAnRmlsbUxpc3QnO1xuXG4gICAgLyoqXG4gICAgICogUmV0cmlldmUgcmVtb3RlIGRhdGEgYW5kIHJlbmRlciB0aGUgc3luY2hyb25pemUgaGFsZiBvZiB0aGlzIGNvbXBvbmVudFxuICAgICAqXG4gICAgICogQHBhcmFtICB7TWVhbndoaWxlfSAgbWVhbndoaWxlXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtWTm9kZX1cbiAgICAgKi9cbiAgICBhc3luYyByZW5kZXJBc3luYyhtZWFud2hpbGUpIHtcbiAgICAgICAgbGV0IHsgcm91dGUsIHN3YXBpIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICBsZXQgcHJvcHMgPSB7XG4gICAgICAgICAgICBwbGFuZXRzOiBudWxsLFxuICAgICAgICAgICAgcm91dGU6IHJvdXRlLFxuICAgICAgICB9O1xuICAgICAgICBtZWFud2hpbGUuc2hvdyg8RmlsbUxpc3RTeW5jIHsuLi5wcm9wc30gLz4pO1xuICAgICAgICBwcm9wcy5wbGFuZXRzID0gYXdhaXQgc3dhcGkuZmV0Y2hMaXN0KCcvZmlsbXMvJyk7XG4gICAgICAgIHByb3BzLnBsYW5ldHMubW9yZSgpO1xuICAgICAgICByZXR1cm4gPEZpbG1MaXN0U3luYyB7Li4ucHJvcHN9IC8+O1xuICAgIH1cbn1cblxuY2xhc3MgRmlsbUxpc3RTeW5jIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgZGlzcGxheU5hbWUgPSAnRmlsbUxpc3RTeW5jJztcblxuICAgIC8qKlxuICAgICAqIFJlbmRlciB0aGUgY29tcG9uZW50LCBtYWtpbmcgYmVzdCBlZmZvcnQgdXNpbmcgd2hhdCBwcm9wcyBhcmUgZ2l2ZW5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1ZOb2RlfVxuICAgICAqL1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IHsgcGxhbmV0cywgcm91dGUgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGlmICghcGxhbmV0cykge1xuICAgICAgICAgICAgcmV0dXJuIDxMb2FkaW5nIC8+O1xuICAgICAgICB9XG4gICAgICAgIGxldCBsaXN0UHJvcHMgPSB7XG4gICAgICAgICAgICBpdGVtczogcGxhbmV0cyxcbiAgICAgICAgICAgIGZpZWxkOiAndGl0bGUnLFxuICAgICAgICAgICAgcGFnZU5hbWU6ICdmaWxtLXN1bW1hcnknLFxuICAgICAgICAgICAgcm91dGU6IHJvdXRlLFxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8aDE+RmlsbXM8L2gxPlxuICAgICAgICAgICAgICAgIDxMaXN0IHsuLi5saXN0UHJvcHN9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCB7XG4gICAgRmlsbUxpc3QgYXMgZGVmYXVsdCxcbiAgICBGaWxtTGlzdCxcbiAgICBGaWxtTGlzdFN5bmNcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcy9maWxtLWxpc3QuanN4IiwiaW1wb3J0IHsgaCwgQ29tcG9uZW50IH0gZnJvbSAncHJlYWN0JztcblxuLyoqIEBqc3ggaCAqL1xuXG5mdW5jdGlvbiBMaXN0KHByb3BzKSB7XG4gICAgbGV0IHsgcm91dGUsIHVybHMsIGl0ZW1zLCBmaWVsZCwgcGFnZU5hbWUgfSA9IHByb3BzO1xuICAgIGlmICh1cmxzKSB7XG4gICAgICAgIGlmICh0eXBlb2YodXJscykgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICBpZiAoaXRlbXMpIHtcbiAgICAgICAgICAgICAgICBpdGVtcyA9IFsgaXRlbXMgXTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaXRlbXMgPSBbIHsgdXJsOiB1cmxzLCBwZW5kaW5nOiB0cnVlIH0gXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmICh1cmxzIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgICAgICAgIGl0ZW1zID0gdXJscy5tYXAoKHVybCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICB2YXIgaXRlbSA9IChpdGVtcykgPyBpdGVtc1tpbmRleF0gOiBudWxsO1xuICAgICAgICAgICAgICAgIGlmICghaXRlbSkge1xuICAgICAgICAgICAgICAgICAgICBpdGVtID0geyB1cmwsIHBlbmRpbmc6IHRydWUgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW07XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoIWl0ZW1zKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBpZiAoaXRlbXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJldHVybiA8dWwgY2xhc3NOYW1lPVwiZW1wdHlcIj48bGk+PHNwYW4+bm9uZTwvc3Bhbj48L2xpPjwvdWw+O1xuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgICA8dWw+XG4gICAgICAgIHtcbiAgICAgICAgICAgIGl0ZW1zLm1hcCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBpZCA9IHJvdXRlLmV4dHJhY3RJRChpdGVtLnVybCk7XG4gICAgICAgICAgICAgICAgbGV0IHVybCA9IHJvdXRlLmZpbmQocGFnZU5hbWUsIHsgaWQgfSk7XG4gICAgICAgICAgICAgICAgbGV0IHRleHQgPSBpdGVtLnBlbmRpbmcgPyAnLi4uJyA6IGl0ZW1bZmllbGRdO1xuICAgICAgICAgICAgICAgIGxldCBsaW5rUHJvcHMgPSB7XG4gICAgICAgICAgICAgICAgICAgIGhyZWY6IHVybCxcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lOiAoaXRlbS5wZW5kaW5nKSA/ICdwZW5kaW5nJyA6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIHJldHVybiA8bGk+PGEgey4uLmxpbmtQcm9wc30+e3RleHR9PC9hPjwvbGk+O1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgICA8L3VsPlxuICAgICk7XG59XG5cbkxpc3QuZGVmYXVsdFByb3BzID0ge1xuICAgIGZpZWxkOiAnbmFtZSdcbn07XG5cbkxpc3QuZGlzcGxheU5hbWUgPSAnTGlzdCc7XG5cbmV4cG9ydCB7XG4gICAgTGlzdCBhcyBkZWZhdWx0LFxuICAgIExpc3Rcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi93aWRnZXRzL2xpc3QuanN4IiwiaW1wb3J0IHsgaCwgQ29tcG9uZW50IH0gZnJvbSAncHJlYWN0JztcblxuLyoqIEBqc3ggaCAqL1xuXG5mdW5jdGlvbiBMb2FkaW5nKCkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9hZGluZ1wiPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYWIgZmEtZW1waXJlIGZhLXNwaW5cIi8+IExvYWRpbmdcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuXG5Mb2FkaW5nLmRpc3BsYXlOYW1lID0gJ0xvYWRpbmcnO1xuXG5leHBvcnQge1xuICAgIExvYWRpbmcgYXMgZGVmYXVsdCxcbiAgICBMb2FkaW5nXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vd2lkZ2V0cy9sb2FkaW5nLmpzeCJdLCJzb3VyY2VSb290IjoiIn0=