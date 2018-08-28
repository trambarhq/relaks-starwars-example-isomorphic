exports.ids = ["starship-list"];
exports.modules = {

/***/ "./pages/starship-list.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.StarshipListSync = exports.StarshipList = exports.default = undefined;

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

var StarshipList = function (_AsyncComponent) {
    (0, _inherits3.default)(StarshipList, _AsyncComponent);

    function StarshipList() {
        (0, _classCallCheck3.default)(this, StarshipList);
        return (0, _possibleConstructorReturn3.default)(this, (StarshipList.__proto__ || (0, _getPrototypeOf2.default)(StarshipList)).apply(this, arguments));
    }

    (0, _createClass3.default)(StarshipList, [{
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
                                    starships: null,
                                    route: route
                                };

                                meanwhile.show((0, _preact.h)(StarshipListSync, props));
                                _context.next = 5;
                                return swapi.fetchList('/starships/');

                            case 5:
                                props.starships = _context.sent;

                                props.starships.more();
                                return _context.abrupt('return', (0, _preact.h)(StarshipListSync, props));

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
    return StarshipList;
}(_preact2.AsyncComponent);

StarshipList.displayName = 'StarshipList';

var StarshipListSync = function (_Component) {
    (0, _inherits3.default)(StarshipListSync, _Component);

    function StarshipListSync() {
        (0, _classCallCheck3.default)(this, StarshipListSync);
        return (0, _possibleConstructorReturn3.default)(this, (StarshipListSync.__proto__ || (0, _getPrototypeOf2.default)(StarshipListSync)).apply(this, arguments));
    }

    (0, _createClass3.default)(StarshipListSync, [{
        key: 'render',


        /**
         * Render the component, making best effort using what props are given
         *
         * @return {VNode}
         */
        value: function render() {
            var _props2 = this.props,
                starships = _props2.starships,
                route = _props2.route;

            if (!starships) {
                return (0, _preact.h)(_loading2.default, null);
            }
            var listProps = {
                items: starships,
                pageName: 'starship-summary',
                route: route
            };
            return (0, _preact.h)(
                'div',
                null,
                (0, _preact.h)(
                    'h1',
                    null,
                    'Starships'
                ),
                (0, _preact.h)(_list2.default, listProps)
            );
        }
    }]);
    return StarshipListSync;
}(_preact.Component);

StarshipListSync.displayName = 'StarshipListSync';
exports.default = StarshipList;
exports.StarshipList = StarshipList;
exports.StarshipListSync = StarshipListSync;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9zdGFyc2hpcC1saXN0LmpzeCIsIndlYnBhY2s6Ly8vLi93aWRnZXRzL2xpc3QuanN4Iiwid2VicGFjazovLy8uL3dpZGdldHMvbG9hZGluZy5qc3giXSwibmFtZXMiOlsiU3RhcnNoaXBMaXN0IiwibWVhbndoaWxlIiwicHJvcHMiLCJyb3V0ZSIsInN3YXBpIiwic3RhcnNoaXBzIiwic2hvdyIsImZldGNoTGlzdCIsIm1vcmUiLCJBc3luY0NvbXBvbmVudCIsImRpc3BsYXlOYW1lIiwiU3RhcnNoaXBMaXN0U3luYyIsImxpc3RQcm9wcyIsIml0ZW1zIiwicGFnZU5hbWUiLCJDb21wb25lbnQiLCJkZWZhdWx0IiwiTGlzdCIsInVybHMiLCJmaWVsZCIsInVybCIsInBlbmRpbmciLCJBcnJheSIsIm1hcCIsImluZGV4IiwiaXRlbSIsImxlbmd0aCIsImlkIiwiZXh0cmFjdElEIiwiZmluZCIsInRleHQiLCJsaW5rUHJvcHMiLCJocmVmIiwiY2xhc3NOYW1lIiwidW5kZWZpbmVkIiwiZGVmYXVsdFByb3BzIiwiTG9hZGluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBRUE7O0lBRU1BLFk7Ozs7Ozs7Ozs7OztBQUdGOzs7Ozs7OztpSEFPa0JDLFM7Ozs7Ozs7eUNBQ1MsS0FBS0MsSyxFQUF0QkMsSyxVQUFBQSxLLEVBQU9DLEssVUFBQUEsSztBQUNURixxQyxHQUFRO0FBQ1JHLCtDQUFXLElBREg7QUFFUkYsMkNBQU9BO0FBRkMsaUM7O0FBSVpGLDBDQUFVSyxJQUFWLENBQWUsZUFBQyxnQkFBRCxFQUFzQkosS0FBdEIsQ0FBZjs7dUNBQ3dCRSxNQUFNRyxTQUFOLENBQWdCLGFBQWhCLEM7OztBQUF4Qkwsc0NBQU1HLFM7O0FBQ05ILHNDQUFNRyxTQUFOLENBQWdCRyxJQUFoQjtpRUFDTyxlQUFDLGdCQUFELEVB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QU9ILDZCQUFQO0FBQW1CRDtBQUFuQjtBQUFKLGFBQVA7QUFDSCxTQVREO0FBRkosS0FESjtBQWdCSDs7QUFFRGIsS0FBS2tCLFlBQUwsR0FBb0I7QUFDaEJoQixXQUFPO0FBRFMsQ0FBcEI7O0FBSUFGLEtBQUtQLFdBQUwsR0FBbUIsTUFBbkI7O1FBR1lNLE8sR0FBUkMsSTtRQUNBQSxJLEdBQUFBLEk7Ozs7Ozs7Ozs7Ozs7OztBQ3ZESjs7QUFFQTs7QUFFQSxTQUFTbUIsT0FBVCxHQUFtQjtBQUNmLFdBQ0k7QUFBQTtBQUFBLFVBQUssV0FBVSxTQUFmO0FBQ0k7QUFBQTtBQUFBO0FBQ0ksa0NBQUcsV0FBVSx1QkFBYixHQURKO0FBQUE7QUFBQTtBQURKLEtBREo7QUFPSDs7QUFFREEsUUFBUTFCLFdBQVIsR0FBc0IsU0FBdEI7O1FBR2VNLE8sR0FBWG9CLE87UUFDQUEsTyxHQUFBQSxPIiwiZmlsZSI6InN0YXJzaGlwLWxpc3QuYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaCwgQ29tcG9uZW50IH0gZnJvbSAncHJlYWN0JztcbmltcG9ydCB7IEFzeW5jQ29tcG9uZW50IH0gZnJvbSAncmVsYWtzL3ByZWFjdCc7XG5pbXBvcnQgTGlzdCBmcm9tICd3aWRnZXRzL2xpc3QnO1xuaW1wb3J0IExvYWRpbmcgZnJvbSAnd2lkZ2V0cy9sb2FkaW5nJztcblxuLyoqIEBqc3ggaCAqL1xuXG5jbGFzcyBTdGFyc2hpcExpc3QgZXh0ZW5kcyBBc3luY0NvbXBvbmVudCB7XG4gICAgc3RhdGljIGRpc3BsYXlOYW1lID0gJ1N0YXJzaGlwTGlzdCc7XG5cbiAgICAvKipcbiAgICAgKiBSZXRyaWV2ZSByZW1vdGUgZGF0YSBhbmQgcmVuZGVyIHRoZSBzeW5jaHJvbml6ZSBoYWxmIG9mIHRoaXMgY29tcG9uZW50XG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHtNZWFud2hpbGV9ICBtZWFud2hpbGVcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1ZOb2RlfVxuICAgICAqL1xuICAgIGFzeW5jIHJlbmRlckFzeW5jKG1lYW53aGlsZSkge1xuICAgICAgICBsZXQgeyByb3V0ZSwgc3dhcGkgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGxldCBwcm9wcyA9IHtcbiAgICAgICAgICAgIHN0YXJzaGlwczogbnVsbCxcbiAgICAgICAgICAgIHJvdXRlOiByb3V0ZSxcbiAgICAgICAgfTtcbiAgICAgICAgbWVhbndoaWxlLnNob3coPFN0YXJzaGlwTGlzdFN5bmMgey4uLnByb3BzfSAvPik7XG4gICAgICAgIHByb3BzLnN0YXJzaGlwcyA9IGF3YWl0IHN3YXBpLmZldGNoTGlzdCgnL3N0YXJzaGlwcy8nKTtcbiAgICAgICAgcHJvcHMuc3RhcnNoaXBzLm1vcmUoKTtcbiAgICAgICAgcmV0dXJuIDxTdGFyc2hpcExpc3RTeW5jIHsuLi5wcm9wc30gLz47XG4gICAgfVxufVxuXG5jbGFzcyBTdGFyc2hpcExpc3RTeW5jIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgZGlzcGxheU5hbWUgPSAnU3RhcnNoaXBMaXN0U3luYyc7XG5cbiAgICAvKipcbiAgICAgKiBSZW5kZXIgdGhlIGNvbXBvbmVudCwgbWFraW5nIGJlc3QgZWZmb3J0IHVzaW5nIHdoYXQgcHJvcHMgYXJlIGdpdmVuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtWTm9kZX1cbiAgICAgKi9cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCB7IHN0YXJzaGlwcywgcm91dGUgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGlmICghc3RhcnNoaXBzKSB7XG4gICAgICAgICAgICByZXR1cm4gPExvYWRpbmcgLz47XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGxpc3RQcm9wcyA9IHtcbiAgICAgICAgICAgIGl0ZW1zOiBzdGFyc2hpcHMsXG4gICAgICAgICAgICBwYWdlTmFtZTogJ3N0YXJzaGlwLXN1bW1hcnknLFxuICAgICAgICAgICAgcm91dGU6IHJvdXRlLFxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8aDE+U3RhcnNoaXBzPC9oMT5cbiAgICAgICAgICAgICAgICA8TGlzdCB7Li4ubGlzdFByb3BzfSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQge1xuICAgIFN0YXJzaGlwTGlzdCBhcyBkZWZhdWx0LFxuICAgIFN0YXJzaGlwTGlzdCxcbiAgICBTdGFyc2hpcExpc3RTeW5jXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXMvc3RhcnNoaXAtbGlzdC5qc3giLCJpbXBvcnQgeyBoLCBDb21wb25lbnQgfSBmcm9tICdwcmVhY3QnO1xuXG4vKiogQGpzeCBoICovXG5cbmZ1bmN0aW9uIExpc3QocHJvcHMpIHtcbiAgICBsZXQgeyByb3V0ZSwgdXJscywgaXRlbXMsIGZpZWxkLCBwYWdlTmFtZSB9ID0gcHJvcHM7XG4gICAgaWYgKHVybHMpIHtcbiAgICAgICAgaWYgKHR5cGVvZih1cmxzKSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIGlmIChpdGVtcykge1xuICAgICAgICAgICAgICAgIGl0ZW1zID0gWyBpdGVtcyBdO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpdGVtcyA9IFsgeyB1cmw6IHVybHMsIHBlbmRpbmc6IHRydWUgfSBdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHVybHMgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICAgICAgaXRlbXMgPSB1cmxzLm1hcCgodXJsLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgIHZhciBpdGVtID0gKGl0ZW1zKSA/IGl0ZW1zW2luZGV4XSA6IG51bGw7XG4gICAgICAgICAgICAgICAgaWYgKCFpdGVtKSB7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW0gPSB7IHVybCwgcGVuZGluZzogdHJ1ZSB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gaXRlbTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmICghaXRlbXMpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGlmIChpdGVtcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuIDx1bCBjbGFzc05hbWU9XCJlbXB0eVwiPjxsaT48c3Bhbj5ub25lPC9zcGFuPjwvbGk+PC91bD47XG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICAgIDx1bD5cbiAgICAgICAge1xuICAgICAgICAgICAgaXRlbXMubWFwKChpdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IGlkID0gcm91dGUuZXh0cmFjdElEKGl0ZW0udXJsKTtcbiAgICAgICAgICAgICAgICBsZXQgdXJsID0gcm91dGUuZmluZChwYWdlTmFtZSwgeyBpZCB9KTtcbiAgICAgICAgICAgICAgICBsZXQgdGV4dCA9IGl0ZW0ucGVuZGluZyA/ICcuLi4nIDogaXRlbVtmaWVsZF07XG4gICAgICAgICAgICAgICAgbGV0IGxpbmtQcm9wcyA9IHtcbiAgICAgICAgICAgICAgICAgICAgaHJlZjogdXJsLFxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU6IChpdGVtLnBlbmRpbmcpID8gJ3BlbmRpbmcnIDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgcmV0dXJuIDxsaT48YSB7Li4ubGlua1Byb3BzfT57dGV4dH08L2E+PC9saT47XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICAgIDwvdWw+XG4gICAgKTtcbn1cblxuTGlzdC5kZWZhdWx0UHJvcHMgPSB7XG4gICAgZmllbGQ6ICduYW1lJ1xufTtcblxuTGlzdC5kaXNwbGF5TmFtZSA9ICdMaXN0JztcblxuZXhwb3J0IHtcbiAgICBMaXN0IGFzIGRlZmF1bHQsXG4gICAgTGlzdFxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3dpZGdldHMvbGlzdC5qc3giLCJpbXBvcnQgeyBoLCBDb21wb25lbnQgfSBmcm9tICdwcmVhY3QnO1xuXG4vKiogQGpzeCBoICovXG5cbmZ1bmN0aW9uIExvYWRpbmcoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2FkaW5nXCI+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhYiBmYS1lbXBpcmUgZmEtc3BpblwiLz4gTG9hZGluZ1xuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cbkxvYWRpbmcuZGlzcGxheU5hbWUgPSAnTG9hZGluZyc7XG5cbmV4cG9ydCB7XG4gICAgTG9hZGluZyBhcyBkZWZhdWx0LFxuICAgIExvYWRpbmdcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi93aWRnZXRzL2xvYWRpbmcuanN4Il0sInNvdXJjZVJvb3QiOiIifQ==