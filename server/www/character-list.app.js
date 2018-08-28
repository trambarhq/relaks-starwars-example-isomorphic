webpackJsonp(["character-list"],{

/***/ "./pages/character-list.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.CharacterListSync = exports.CharacterList = exports.default = undefined;

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

var CharacterList = function (_AsyncComponent) {
    (0, _inherits3.default)(CharacterList, _AsyncComponent);

    function CharacterList() {
        (0, _classCallCheck3.default)(this, CharacterList);
        return (0, _possibleConstructorReturn3.default)(this, (CharacterList.__proto__ || (0, _getPrototypeOf2.default)(CharacterList)).apply(this, arguments));
    }

    (0, _createClass3.default)(CharacterList, [{
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
                                    people: null,
                                    route: route
                                };

                                meanwhile.show((0, _preact.h)(CharacterListSync, props));
                                _context.next = 5;
                                return swapi.fetchList('/people/');

                            case 5:
                                props.people = _context.sent;

                                props.people.more();
                                return _context.abrupt('return', (0, _preact.h)(CharacterListSync, props));

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
    return CharacterList;
}(_preact2.AsyncComponent);

CharacterList.displayName = 'CharacterList';

var CharacterListSync = function (_Component) {
    (0, _inherits3.default)(CharacterListSync, _Component);

    function CharacterListSync() {
        (0, _classCallCheck3.default)(this, CharacterListSync);
        return (0, _possibleConstructorReturn3.default)(this, (CharacterListSync.__proto__ || (0, _getPrototypeOf2.default)(CharacterListSync)).apply(this, arguments));
    }

    (0, _createClass3.default)(CharacterListSync, [{
        key: 'render',


        /**
         * Render the component, making best effort using what props are given
         *
         * @return {VNode}
         */
        value: function render() {
            var _props2 = this.props,
                people = _props2.people,
                route = _props2.route;

            if (!people) {
                return (0, _preact.h)(_loading2.default, null);
            }
            var listProps = {
                items: people,
                field: 'name',
                pageName: 'character-summary',
                route: route
            };
            return (0, _preact.h)(
                'div',
                null,
                (0, _preact.h)(
                    'h1',
                    null,
                    'Characters'
                ),
                (0, _preact.h)(_list2.default, listProps)
            );
        }
    }]);
    return CharacterListSync;
}(_preact.Component);

CharacterListSync.displayName = 'CharacterListSync';
exports.default = CharacterList;
exports.CharacterList = CharacterList;
exports.CharacterListSync = CharacterListSync;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9jaGFyYWN0ZXItbGlzdC5qc3giLCJ3ZWJwYWNrOi8vLy4vd2lkZ2V0cy9saXN0LmpzeCIsIndlYnBhY2s6Ly8vLi93aWRnZXRzL2xvYWRpbmcuanN4Il0sIm5hbWVzIjpbIkNoYXJhY3Rlckxpc3QiLCJtZWFud2hpbGUiLCJwcm9wcyIsInJvdXRlIiwic3dhcGkiLCJwZW9wbGUiLCJzaG93IiwiZmV0Y2hMaXN0IiwibW9yZSIsIkFzeW5jQ29tcG9uZW50IiwiZGlzcGxheU5hbWUiLCJDaGFyYWN0ZXJMaXN0U3luYyIsImxpc3RQcm9wcyIsIml0ZW1zIiwiZmllbGQiLCJwYWdlTmFtZSIsIkNvbXBvbmVudCIsImRlZmF1bHQiLCJMaXN0IiwidXJscyIsInVybCIsInBlbmRpbmciLCJBcnJheSIsIm1hcCIsImluZGV4IiwiaXRlbSIsImxlbmd0aCIsImlkIiwiZXh0cmFjdElEIiwiZmluZCIsInRleHQiLCJsaW5rUHJvcHMiLCJocmVmIiwiY2xhc3NOYW1lIiwidW5kZWZpbmVkIiwiZGVmYXVsdFByb3BzIiwiTG9hZGluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFQTs7SUFFTUEsYTs7Ozs7Ozs7Ozs7O0FBR0Y7Ozs7Ozs7O2lIQU9rQkMsUzs7Ozs7Ozt5Q0FDUyxLQUFLQyxLLEVBQXRCQyxLLFVBQUFBLEssRUFBT0MsSyxVQUFBQSxLO0FBQ1RGLHFDLEdBQVE7QUFDUkcsNENBQVEsSUFEQTtBQUVSRiwyQ0FBT0E7QUFGQyxpQzs7QUFJWkYsMENBQVVLLElBQVYsQ0FBZSxlQUFDLGlCQUFELEVBQXVCSixLQUF2QixDQUFmOzt1Q0FDcUJFLE1BQU1HLFNBQU4sQ0FBZ0IsVUFBaEIsQzs7O0FBQXJCTCxzQ0FBTUcsTTs7QUFDTkgsc0NBQU1HLE1BQU4sQ0FBYUcsSUFBYjtpRUFDTyxlQUFDLGlCQUFELEVBQXVC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QTtBQUFJO0FBQUE7QUFBT0gsNkJBQVA7QUFBbUJEO0FBQW5CO0FBQUosYUFBUDtBQUNILFNBVEQ7QUFGSixLQURKO0FBZ0JIOztBQUVEWixLQUFLaUIsWUFBTCxHQUFvQjtBQUNoQnJCLFdBQU87QUFEUyxDQUFwQjs7QUFJQUksS0FBS1IsV0FBTCxHQUFtQixNQUFuQjs7UUFHWU8sTyxHQUFSQyxJO1FBQ0FBLEksR0FBQUEsSTs7Ozs7Ozs7Ozs7Ozs7O0FDdkRKOztBQUVBOztBQUVBLFNBQVNrQixPQUFULEdBQW1CO0FBQ2YsV0FDSTtBQUFBO0FBQUEsVUFBSyxXQUFVLFNBQWY7QUFDSTtBQUFBO0FBQUE7QUFDSSxrQ0FBRyxXQUFVLHVCQUFiLEdBREo7QUFBQTtBQUFBO0FBREosS0FESjtBQU9IOztBQUVEQSxRQUFRMUIsV0FBUixHQUFzQixTQUF0Qjs7UUFHZU8sTyxHQUFYbUIsTztRQUNBQSxPLEdBQUFBLE8iLCJmaWxlIjoiY2hhcmFjdGVyLWxpc3QuYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaCwgQ29tcG9uZW50IH0gZnJvbSAncHJlYWN0JztcbmltcG9ydCB7IEFzeW5jQ29tcG9uZW50IH0gZnJvbSAncmVsYWtzL3ByZWFjdCc7XG5pbXBvcnQgTGlzdCBmcm9tICd3aWRnZXRzL2xpc3QnO1xuaW1wb3J0IExvYWRpbmcgZnJvbSAnd2lkZ2V0cy9sb2FkaW5nJztcblxuLyoqIEBqc3ggaCAqL1xuXG5jbGFzcyBDaGFyYWN0ZXJMaXN0IGV4dGVuZHMgQXN5bmNDb21wb25lbnQge1xuICAgIHN0YXRpYyBkaXNwbGF5TmFtZSA9ICdDaGFyYWN0ZXJMaXN0JztcblxuICAgIC8qKlxuICAgICAqIFJldHJpZXZlIHJlbW90ZSBkYXRhIGFuZCByZW5kZXIgdGhlIHN5bmNocm9uaXplIGhhbGYgb2YgdGhpcyBjb21wb25lbnRcbiAgICAgKlxuICAgICAqIEBwYXJhbSAge01lYW53aGlsZX0gIG1lYW53aGlsZVxuICAgICAqXG4gICAgICogQHJldHVybiB7Vk5vZGV9XG4gICAgICovXG4gICAgYXN5bmMgcmVuZGVyQXN5bmMobWVhbndoaWxlKSB7XG4gICAgICAgIGxldCB7IHJvdXRlLCBzd2FwaSB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgbGV0IHByb3BzID0ge1xuICAgICAgICAgICAgcGVvcGxlOiBudWxsLFxuICAgICAgICAgICAgcm91dGU6IHJvdXRlLFxuICAgICAgICB9O1xuICAgICAgICBtZWFud2hpbGUuc2hvdyg8Q2hhcmFjdGVyTGlzdFN5bmMgey4uLnByb3BzfSAvPik7XG4gICAgICAgIHByb3BzLnBlb3BsZSA9IGF3YWl0IHN3YXBpLmZldGNoTGlzdCgnL3Blb3BsZS8nKTtcbiAgICAgICAgcHJvcHMucGVvcGxlLm1vcmUoKTtcbiAgICAgICAgcmV0dXJuIDxDaGFyYWN0ZXJMaXN0U3luYyB7Li4ucHJvcHN9IC8+O1xuICAgIH1cbn1cblxuY2xhc3MgQ2hhcmFjdGVyTGlzdFN5bmMgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIHN0YXRpYyBkaXNwbGF5TmFtZSA9ICdDaGFyYWN0ZXJMaXN0U3luYyc7XG5cbiAgICAvKipcbiAgICAgKiBSZW5kZXIgdGhlIGNvbXBvbmVudCwgbWFraW5nIGJlc3QgZWZmb3J0IHVzaW5nIHdoYXQgcHJvcHMgYXJlIGdpdmVuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtWTm9kZX1cbiAgICAgKi9cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCB7IHBlb3BsZSwgcm91dGUgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGlmICghcGVvcGxlKSB7XG4gICAgICAgICAgICByZXR1cm4gPExvYWRpbmcgLz47XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGxpc3RQcm9wcyA9IHtcbiAgICAgICAgICAgIGl0ZW1zOiBwZW9wbGUsXG4gICAgICAgICAgICBmaWVsZDogJ25hbWUnLFxuICAgICAgICAgICAgcGFnZU5hbWU6ICdjaGFyYWN0ZXItc3VtbWFyeScsXG4gICAgICAgICAgICByb3V0ZTogcm91dGUsXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxoMT5DaGFyYWN0ZXJzPC9oMT5cbiAgICAgICAgICAgICAgICA8TGlzdCB7Li4ubGlzdFByb3BzfSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQge1xuICAgIENoYXJhY3Rlckxpc3QgYXMgZGVmYXVsdCxcbiAgICBDaGFyYWN0ZXJMaXN0LFxuICAgIENoYXJhY3Rlckxpc3RTeW5jXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXMvY2hhcmFjdGVyLWxpc3QuanN4IiwiaW1wb3J0IHsgaCwgQ29tcG9uZW50IH0gZnJvbSAncHJlYWN0JztcblxuLyoqIEBqc3ggaCAqL1xuXG5mdW5jdGlvbiBMaXN0KHByb3BzKSB7XG4gICAgbGV0IHsgcm91dGUsIHVybHMsIGl0ZW1zLCBmaWVsZCwgcGFnZU5hbWUgfSA9IHByb3BzO1xuICAgIGlmICh1cmxzKSB7XG4gICAgICAgIGlmICh0eXBlb2YodXJscykgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICBpZiAoaXRlbXMpIHtcbiAgICAgICAgICAgICAgICBpdGVtcyA9IFsgaXRlbXMgXTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaXRlbXMgPSBbIHsgdXJsOiB1cmxzLCBwZW5kaW5nOiB0cnVlIH0gXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmICh1cmxzIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgICAgICAgIGl0ZW1zID0gdXJscy5tYXAoKHVybCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICB2YXIgaXRlbSA9IChpdGVtcykgPyBpdGVtc1tpbmRleF0gOiBudWxsO1xuICAgICAgICAgICAgICAgIGlmICghaXRlbSkge1xuICAgICAgICAgICAgICAgICAgICBpdGVtID0geyB1cmwsIHBlbmRpbmc6IHRydWUgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW07XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoIWl0ZW1zKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBpZiAoaXRlbXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJldHVybiA8dWwgY2xhc3NOYW1lPVwiZW1wdHlcIj48bGk+PHNwYW4+bm9uZTwvc3Bhbj48L2xpPjwvdWw+O1xuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgICA8dWw+XG4gICAgICAgIHtcbiAgICAgICAgICAgIGl0ZW1zLm1hcCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBpZCA9IHJvdXRlLmV4dHJhY3RJRChpdGVtLnVybCk7XG4gICAgICAgICAgICAgICAgbGV0IHVybCA9IHJvdXRlLmZpbmQocGFnZU5hbWUsIHsgaWQgfSk7XG4gICAgICAgICAgICAgICAgbGV0IHRleHQgPSBpdGVtLnBlbmRpbmcgPyAnLi4uJyA6IGl0ZW1bZmllbGRdO1xuICAgICAgICAgICAgICAgIGxldCBsaW5rUHJvcHMgPSB7XG4gICAgICAgICAgICAgICAgICAgIGhyZWY6IHVybCxcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lOiAoaXRlbS5wZW5kaW5nKSA/ICdwZW5kaW5nJyA6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIHJldHVybiA8bGk+PGEgey4uLmxpbmtQcm9wc30+e3RleHR9PC9hPjwvbGk+O1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgICA8L3VsPlxuICAgICk7XG59XG5cbkxpc3QuZGVmYXVsdFByb3BzID0ge1xuICAgIGZpZWxkOiAnbmFtZSdcbn07XG5cbkxpc3QuZGlzcGxheU5hbWUgPSAnTGlzdCc7XG5cbmV4cG9ydCB7XG4gICAgTGlzdCBhcyBkZWZhdWx0LFxuICAgIExpc3Rcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi93aWRnZXRzL2xpc3QuanN4IiwiaW1wb3J0IHsgaCwgQ29tcG9uZW50IH0gZnJvbSAncHJlYWN0JztcblxuLyoqIEBqc3ggaCAqL1xuXG5mdW5jdGlvbiBMb2FkaW5nKCkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9hZGluZ1wiPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYWIgZmEtZW1waXJlIGZhLXNwaW5cIi8+IExvYWRpbmdcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuXG5Mb2FkaW5nLmRpc3BsYXlOYW1lID0gJ0xvYWRpbmcnO1xuXG5leHBvcnQge1xuICAgIExvYWRpbmcgYXMgZGVmYXVsdCxcbiAgICBMb2FkaW5nXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vd2lkZ2V0cy9sb2FkaW5nLmpzeCJdLCJzb3VyY2VSb290IjoiIn0=