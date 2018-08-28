webpackJsonp(["species-list"],{

/***/ "./pages/species-list.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SpeciesListSync = exports.SpeciesList = exports.default = undefined;

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

var SpeciesList = function (_AsyncComponent) {
    (0, _inherits3.default)(SpeciesList, _AsyncComponent);

    function SpeciesList() {
        (0, _classCallCheck3.default)(this, SpeciesList);
        return (0, _possibleConstructorReturn3.default)(this, (SpeciesList.__proto__ || (0, _getPrototypeOf2.default)(SpeciesList)).apply(this, arguments));
    }

    (0, _createClass3.default)(SpeciesList, [{
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
                                    species: null,
                                    route: route
                                };

                                meanwhile.show((0, _preact.h)(SpeciesListSync, props));
                                _context.next = 5;
                                return swapi.fetchList('/species/');

                            case 5:
                                props.species = _context.sent;

                                props.species.more();
                                return _context.abrupt('return', (0, _preact.h)(SpeciesListSync, props));

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
    return SpeciesList;
}(_preact2.AsyncComponent);

SpeciesList.displayName = 'SpeciesList';

var SpeciesListSync = function (_Component) {
    (0, _inherits3.default)(SpeciesListSync, _Component);

    function SpeciesListSync() {
        (0, _classCallCheck3.default)(this, SpeciesListSync);
        return (0, _possibleConstructorReturn3.default)(this, (SpeciesListSync.__proto__ || (0, _getPrototypeOf2.default)(SpeciesListSync)).apply(this, arguments));
    }

    (0, _createClass3.default)(SpeciesListSync, [{
        key: 'render',


        /**
         * Render the component, making best effort using what props are given
         *
         * @return {VNode}
         */
        value: function render() {
            var _props2 = this.props,
                species = _props2.species,
                route = _props2.route;

            if (!species) {
                return (0, _preact.h)(_loading2.default, null);
            }
            var listProps = {
                items: species,
                pageName: 'species-summary',
                route: route
            };
            return (0, _preact.h)(
                'div',
                null,
                (0, _preact.h)(
                    'h1',
                    null,
                    'Species'
                ),
                (0, _preact.h)(_list2.default, listProps)
            );
        }
    }]);
    return SpeciesListSync;
}(_preact.Component);

SpeciesListSync.displayName = 'SpeciesListSync';
exports.default = SpeciesList;
exports.SpeciesList = SpeciesList;
exports.SpeciesListSync = SpeciesListSync;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9zcGVjaWVzLWxpc3QuanN4Iiwid2VicGFjazovLy8uL3dpZGdldHMvbGlzdC5qc3giLCJ3ZWJwYWNrOi8vLy4vd2lkZ2V0cy9sb2FkaW5nLmpzeCJdLCJuYW1lcyI6WyJTcGVjaWVzTGlzdCIsIm1lYW53aGlsZSIsInByb3BzIiwicm91dGUiLCJzd2FwaSIsInNwZWNpZXMiLCJzaG93IiwiZmV0Y2hMaXN0IiwibW9yZSIsIkFzeW5jQ29tcG9uZW50IiwiZGlzcGxheU5hbWUiLCJTcGVjaWVzTGlzdFN5bmMiLCJsaXN0UHJvcHMiLCJpdGVtcyIsInBhZ2VOYW1lIiwiQ29tcG9uZW50IiwiZGVmYXVsdCIsIkxpc3QiLCJ1cmxzIiwiZmllbGQiLCJ1cmwiLCJwZW5kaW5nIiwiQXJyYXkiLCJtYXAiLCJpbmRleCIsIml0ZW0iLCJsZW5ndGgiLCJpZCIsImV4dHJhY3RJRCIsImZpbmQiLCJ0ZXh0IiwibGlua1Byb3BzIiwiaHJlZiIsImNsYXNzTmFtZSIsInVuZGVmaW5lZCIsImRlZmF1bHRQcm9wcyIsIkxvYWRpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBRUE7O0lBRU1BLFc7Ozs7Ozs7Ozs7OztBQUdGOzs7Ozs7OztpSEFPa0JDLFM7Ozs7Ozs7eUNBQ1MsS0FBS0MsSyxFQUF0QkMsSyxVQUFBQSxLLEVBQU9DLEssVUFBQUEsSztBQUNURixxQyxHQUFRO0FBQ1JHLDZDQUFTLElBREQ7QUFFUkYsMkNBQU9BO0FBRkMsaUM7O0FBSVpGLDBDQUFVSyxJQUFWLENBQWUsZUFBQyxlQUFELEVBQXFCSixLQUFyQixDQUFmOzt1Q0FDc0JFLE1BQU1HLFNBQU4sQ0FBZ0IsV0FBaEIsQzs7O0FBQXRCTCxzQ0FBTUcsTzs7QUFDTkgsc0NBQU1HLE9BQU4sQ0FBY0csSUFBZDtpRUFDTyxlQUFDLGVBQUQsRUFBcUJOLEtBQXJC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O0FBQW5CO0FBQUosYUFBUDtBQUNILFNBVEQ7QUFGSixLQURKO0FBZ0JIOztBQUVEYixLQUFLa0IsWUFBTCxHQUFvQjtBQUNoQmhCLFdBQU87QUFEUyxDQUFwQjs7QUFJQUYsS0FBS1AsV0FBTCxHQUFtQixNQUFuQjs7UUFHWU0sTyxHQUFSQyxJO1FBQ0FBLEksR0FBQUEsSTs7Ozs7Ozs7Ozs7Ozs7O0FDdkRKOztBQUVBOztBQUVBLFNBQVNtQixPQUFULEdBQW1CO0FBQ2YsV0FDSTtBQUFBO0FBQUEsVUFBSyxXQUFVLFNBQWY7QUFDSTtBQUFBO0FBQUE7QUFDSSxrQ0FBRyxXQUFVLHVCQUFiLEdBREo7QUFBQTtBQUFBO0FBREosS0FESjtBQU9IOztBQUVEQSxRQUFRMUIsV0FBUixHQUFzQixTQUF0Qjs7UUFHZU0sTyxHQUFYb0IsTztRQUNBQSxPLEdBQUFBLE8iLCJmaWxlIjoic3BlY2llcy1saXN0LmFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGgsIENvbXBvbmVudCB9IGZyb20gJ3ByZWFjdCc7XG5pbXBvcnQgeyBBc3luY0NvbXBvbmVudCB9IGZyb20gJ3JlbGFrcy9wcmVhY3QnO1xuaW1wb3J0IExpc3QgZnJvbSAnd2lkZ2V0cy9saXN0JztcbmltcG9ydCBMb2FkaW5nIGZyb20gJ3dpZGdldHMvbG9hZGluZyc7XG5cbi8qKiBAanN4IGggKi9cblxuY2xhc3MgU3BlY2llc0xpc3QgZXh0ZW5kcyBBc3luY0NvbXBvbmVudCB7XG4gICAgc3RhdGljIGRpc3BsYXlOYW1lID0gJ1NwZWNpZXNMaXN0JztcblxuICAgIC8qKlxuICAgICAqIFJldHJpZXZlIHJlbW90ZSBkYXRhIGFuZCByZW5kZXIgdGhlIHN5bmNocm9uaXplIGhhbGYgb2YgdGhpcyBjb21wb25lbnRcbiAgICAgKlxuICAgICAqIEBwYXJhbSAge01lYW53aGlsZX0gIG1lYW53aGlsZVxuICAgICAqXG4gICAgICogQHJldHVybiB7Vk5vZGV9XG4gICAgICovXG4gICAgYXN5bmMgcmVuZGVyQXN5bmMobWVhbndoaWxlKSB7XG4gICAgICAgIGxldCB7IHJvdXRlLCBzd2FwaSB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgbGV0IHByb3BzID0ge1xuICAgICAgICAgICAgc3BlY2llczogbnVsbCxcbiAgICAgICAgICAgIHJvdXRlOiByb3V0ZSxcbiAgICAgICAgfTtcbiAgICAgICAgbWVhbndoaWxlLnNob3coPFNwZWNpZXNMaXN0U3luYyB7Li4ucHJvcHN9IC8+KTtcbiAgICAgICAgcHJvcHMuc3BlY2llcyA9IGF3YWl0IHN3YXBpLmZldGNoTGlzdCgnL3NwZWNpZXMvJyk7XG4gICAgICAgIHByb3BzLnNwZWNpZXMubW9yZSgpO1xuICAgICAgICByZXR1cm4gPFNwZWNpZXNMaXN0U3luYyB7Li4ucHJvcHN9IC8+O1xuICAgIH1cbn1cblxuY2xhc3MgU3BlY2llc0xpc3RTeW5jIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgZGlzcGxheU5hbWUgPSAnU3BlY2llc0xpc3RTeW5jJztcblxuICAgIC8qKlxuICAgICAqIFJlbmRlciB0aGUgY29tcG9uZW50LCBtYWtpbmcgYmVzdCBlZmZvcnQgdXNpbmcgd2hhdCBwcm9wcyBhcmUgZ2l2ZW5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1ZOb2RlfVxuICAgICAqL1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IHsgc3BlY2llcywgcm91dGUgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGlmICghc3BlY2llcykge1xuICAgICAgICAgICAgcmV0dXJuIDxMb2FkaW5nIC8+O1xuICAgICAgICB9XG4gICAgICAgIGxldCBsaXN0UHJvcHMgPSB7XG4gICAgICAgICAgICBpdGVtczogc3BlY2llcyxcbiAgICAgICAgICAgIHBhZ2VOYW1lOiAnc3BlY2llcy1zdW1tYXJ5JyxcbiAgICAgICAgICAgIHJvdXRlOiByb3V0ZSxcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGgxPlNwZWNpZXM8L2gxPlxuICAgICAgICAgICAgICAgIDxMaXN0IHsuLi5saXN0UHJvcHN9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCB7XG4gICAgU3BlY2llc0xpc3QgYXMgZGVmYXVsdCxcbiAgICBTcGVjaWVzTGlzdCxcbiAgICBTcGVjaWVzTGlzdFN5bmNcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcy9zcGVjaWVzLWxpc3QuanN4IiwiaW1wb3J0IHsgaCwgQ29tcG9uZW50IH0gZnJvbSAncHJlYWN0JztcblxuLyoqIEBqc3ggaCAqL1xuXG5mdW5jdGlvbiBMaXN0KHByb3BzKSB7XG4gICAgbGV0IHsgcm91dGUsIHVybHMsIGl0ZW1zLCBmaWVsZCwgcGFnZU5hbWUgfSA9IHByb3BzO1xuICAgIGlmICh1cmxzKSB7XG4gICAgICAgIGlmICh0eXBlb2YodXJscykgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICBpZiAoaXRlbXMpIHtcbiAgICAgICAgICAgICAgICBpdGVtcyA9IFsgaXRlbXMgXTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaXRlbXMgPSBbIHsgdXJsOiB1cmxzLCBwZW5kaW5nOiB0cnVlIH0gXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmICh1cmxzIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgICAgICAgIGl0ZW1zID0gdXJscy5tYXAoKHVybCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICB2YXIgaXRlbSA9IChpdGVtcykgPyBpdGVtc1tpbmRleF0gOiBudWxsO1xuICAgICAgICAgICAgICAgIGlmICghaXRlbSkge1xuICAgICAgICAgICAgICAgICAgICBpdGVtID0geyB1cmwsIHBlbmRpbmc6IHRydWUgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW07XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoIWl0ZW1zKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBpZiAoaXRlbXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJldHVybiA8dWwgY2xhc3NOYW1lPVwiZW1wdHlcIj48bGk+PHNwYW4+bm9uZTwvc3Bhbj48L2xpPjwvdWw+O1xuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgICA8dWw+XG4gICAgICAgIHtcbiAgICAgICAgICAgIGl0ZW1zLm1hcCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBpZCA9IHJvdXRlLmV4dHJhY3RJRChpdGVtLnVybCk7XG4gICAgICAgICAgICAgICAgbGV0IHVybCA9IHJvdXRlLmZpbmQocGFnZU5hbWUsIHsgaWQgfSk7XG4gICAgICAgICAgICAgICAgbGV0IHRleHQgPSBpdGVtLnBlbmRpbmcgPyAnLi4uJyA6IGl0ZW1bZmllbGRdO1xuICAgICAgICAgICAgICAgIGxldCBsaW5rUHJvcHMgPSB7XG4gICAgICAgICAgICAgICAgICAgIGhyZWY6IHVybCxcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lOiAoaXRlbS5wZW5kaW5nKSA/ICdwZW5kaW5nJyA6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIHJldHVybiA8bGk+PGEgey4uLmxpbmtQcm9wc30+e3RleHR9PC9hPjwvbGk+O1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgICA8L3VsPlxuICAgICk7XG59XG5cbkxpc3QuZGVmYXVsdFByb3BzID0ge1xuICAgIGZpZWxkOiAnbmFtZSdcbn07XG5cbkxpc3QuZGlzcGxheU5hbWUgPSAnTGlzdCc7XG5cbmV4cG9ydCB7XG4gICAgTGlzdCBhcyBkZWZhdWx0LFxuICAgIExpc3Rcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi93aWRnZXRzL2xpc3QuanN4IiwiaW1wb3J0IHsgaCwgQ29tcG9uZW50IH0gZnJvbSAncHJlYWN0JztcblxuLyoqIEBqc3ggaCAqL1xuXG5mdW5jdGlvbiBMb2FkaW5nKCkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9hZGluZ1wiPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYWIgZmEtZW1waXJlIGZhLXNwaW5cIi8+IExvYWRpbmdcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuXG5Mb2FkaW5nLmRpc3BsYXlOYW1lID0gJ0xvYWRpbmcnO1xuXG5leHBvcnQge1xuICAgIExvYWRpbmcgYXMgZGVmYXVsdCxcbiAgICBMb2FkaW5nXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vd2lkZ2V0cy9sb2FkaW5nLmpzeCJdLCJzb3VyY2VSb290IjoiIn0=