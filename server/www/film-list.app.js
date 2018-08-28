webpackJsonp(["film-list"],{

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

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9maWxtLWxpc3QuanN4Iiwid2VicGFjazovLy8uL3dpZGdldHMvbGlzdC5qc3giLCJ3ZWJwYWNrOi8vLy4vd2lkZ2V0cy9sb2FkaW5nLmpzeCJdLCJuYW1lcyI6WyJGaWxtTGlzdCIsIm1lYW53aGlsZSIsInByb3BzIiwicm91dGUiLCJzd2FwaSIsInBsYW5ldHMiLCJzaG93IiwiZmV0Y2hMaXN0IiwibW9yZSIsIkFzeW5jQ29tcG9uZW50IiwiZGlzcGxheU5hbWUiLCJGaWxtTGlzdFN5bmMiLCJsaXN0UHJvcHMiLCJpdGVtcyIsImZpZWxkIiwicGFnZU5hbWUiLCJDb21wb25lbnQiLCJkZWZhdWx0IiwiTGlzdCIsInVybHMiLCJ1cmwiLCJwZW5kaW5nIiwiQXJyYXkiLCJtYXAiLCJpbmRleCIsIml0ZW0iLCJsZW5ndGgiLCJpZCIsImV4dHJhY3RJRCIsImZpbmQiLCJ0ZXh0IiwibGlua1Byb3BzIiwiaHJlZiIsImNsYXNzTmFtZSIsInVuZGVmaW5lZCIsImRlZmF1bHRQcm9wcyIsIkxvYWRpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBRUE7O0lBRU1BLFE7Ozs7Ozs7Ozs7OztBQUdGOzs7Ozs7OztpSEFPa0JDLFM7Ozs7Ozs7eUNBQ1MsS0FBS0MsSyxFQUF0QkMsSyxVQUFBQSxLLEVBQU9DLEssVUFBQUEsSztBQUNURixxQyxHQUFRO0FBQ1JHLDZDQUFTLElBREQ7QUFFUkYsMkNBQU9BO0FBRkMsaUM7O0FBSVpGLDBDQUFVSyxJQUFWLENBQWUsZUFBQyxZQUFELEVBQWtCSixLQUFsQixDQUFmOzt1Q0FDc0JFLE1BQU1HLFNBQU4sQ0FBZ0IsU0FBaEIsQzs7O0FBQXRCTCxzQ0FBTUcsTzs7QUFDTkgsc0NBQU1HLE9BQU4sQ0FBY0csSUFBZDtpRUFDTyxlQUFDLFlBQUQsRUFBa0JOLEtBQWxCLEM7Ozs7Ozs7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O0FBQW1CRDtBQUFuQjtBQUFKLGFBQVA7QUFDSCxTQVREO0FBRkosS0FESjtBQWdCSDs7QUFFRFosS0FBS2lCLFlBQUwsR0FBb0I7QUFDaEJyQixXQUFPO0FBRFMsQ0FBcEI7O0FBSUFJLEtBQUtSLFdBQUwsR0FBbUIsTUFBbkI7O1FBR1lPLE8sR0FBUkMsSTtRQUNBQSxJLEdBQUFBLEk7Ozs7Ozs7Ozs7Ozs7OztBQ3ZESjs7QUFFQTs7QUFFQSxTQUFTa0IsT0FBVCxHQUFtQjtBQUNmLFdBQ0k7QUFBQTtBQUFBLFVBQUssV0FBVSxTQUFmO0FBQ0k7QUFBQTtBQUFBO0FBQ0ksa0NBQUcsV0FBVSx1QkFBYixHQURKO0FBQUE7QUFBQTtBQURKLEtBREo7QUFPSDs7QUFFREEsUUFBUTFCLFdBQVIsR0FBc0IsU0FBdEI7O1FBR2VPLE8sR0FBWG1CLE87UUFDQUEsTyxHQUFBQSxPIiwiZmlsZSI6ImZpbG0tbGlzdC5hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBoLCBDb21wb25lbnQgfSBmcm9tICdwcmVhY3QnO1xuaW1wb3J0IHsgQXN5bmNDb21wb25lbnQgfSBmcm9tICdyZWxha3MvcHJlYWN0JztcbmltcG9ydCBMaXN0IGZyb20gJ3dpZGdldHMvbGlzdCc7XG5pbXBvcnQgTG9hZGluZyBmcm9tICd3aWRnZXRzL2xvYWRpbmcnO1xuXG4vKiogQGpzeCBoICovXG5cbmNsYXNzIEZpbG1MaXN0IGV4dGVuZHMgQXN5bmNDb21wb25lbnQge1xuICAgIHN0YXRpYyBkaXNwbGF5TmFtZSA9ICdGaWxtTGlzdCc7XG5cbiAgICAvKipcbiAgICAgKiBSZXRyaWV2ZSByZW1vdGUgZGF0YSBhbmQgcmVuZGVyIHRoZSBzeW5jaHJvbml6ZSBoYWxmIG9mIHRoaXMgY29tcG9uZW50XG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHtNZWFud2hpbGV9ICBtZWFud2hpbGVcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1ZOb2RlfVxuICAgICAqL1xuICAgIGFzeW5jIHJlbmRlckFzeW5jKG1lYW53aGlsZSkge1xuICAgICAgICBsZXQgeyByb3V0ZSwgc3dhcGkgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGxldCBwcm9wcyA9IHtcbiAgICAgICAgICAgIHBsYW5ldHM6IG51bGwsXG4gICAgICAgICAgICByb3V0ZTogcm91dGUsXG4gICAgICAgIH07XG4gICAgICAgIG1lYW53aGlsZS5zaG93KDxGaWxtTGlzdFN5bmMgey4uLnByb3BzfSAvPik7XG4gICAgICAgIHByb3BzLnBsYW5ldHMgPSBhd2FpdCBzd2FwaS5mZXRjaExpc3QoJy9maWxtcy8nKTtcbiAgICAgICAgcHJvcHMucGxhbmV0cy5tb3JlKCk7XG4gICAgICAgIHJldHVybiA8RmlsbUxpc3RTeW5jIHsuLi5wcm9wc30gLz47XG4gICAgfVxufVxuXG5jbGFzcyBGaWxtTGlzdFN5bmMgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIHN0YXRpYyBkaXNwbGF5TmFtZSA9ICdGaWxtTGlzdFN5bmMnO1xuXG4gICAgLyoqXG4gICAgICogUmVuZGVyIHRoZSBjb21wb25lbnQsIG1ha2luZyBiZXN0IGVmZm9ydCB1c2luZyB3aGF0IHByb3BzIGFyZSBnaXZlblxuICAgICAqXG4gICAgICogQHJldHVybiB7Vk5vZGV9XG4gICAgICovXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQgeyBwbGFuZXRzLCByb3V0ZSB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgaWYgKCFwbGFuZXRzKSB7XG4gICAgICAgICAgICByZXR1cm4gPExvYWRpbmcgLz47XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGxpc3RQcm9wcyA9IHtcbiAgICAgICAgICAgIGl0ZW1zOiBwbGFuZXRzLFxuICAgICAgICAgICAgZmllbGQ6ICd0aXRsZScsXG4gICAgICAgICAgICBwYWdlTmFtZTogJ2ZpbG0tc3VtbWFyeScsXG4gICAgICAgICAgICByb3V0ZTogcm91dGUsXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxoMT5GaWxtczwvaDE+XG4gICAgICAgICAgICAgICAgPExpc3Qgey4uLmxpc3RQcm9wc30gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuZXhwb3J0IHtcbiAgICBGaWxtTGlzdCBhcyBkZWZhdWx0LFxuICAgIEZpbG1MaXN0LFxuICAgIEZpbG1MaXN0U3luY1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhZ2VzL2ZpbG0tbGlzdC5qc3giLCJpbXBvcnQgeyBoLCBDb21wb25lbnQgfSBmcm9tICdwcmVhY3QnO1xuXG4vKiogQGpzeCBoICovXG5cbmZ1bmN0aW9uIExpc3QocHJvcHMpIHtcbiAgICBsZXQgeyByb3V0ZSwgdXJscywgaXRlbXMsIGZpZWxkLCBwYWdlTmFtZSB9ID0gcHJvcHM7XG4gICAgaWYgKHVybHMpIHtcbiAgICAgICAgaWYgKHR5cGVvZih1cmxzKSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIGlmIChpdGVtcykge1xuICAgICAgICAgICAgICAgIGl0ZW1zID0gWyBpdGVtcyBdO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpdGVtcyA9IFsgeyB1cmw6IHVybHMsIHBlbmRpbmc6IHRydWUgfSBdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHVybHMgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICAgICAgaXRlbXMgPSB1cmxzLm1hcCgodXJsLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgIHZhciBpdGVtID0gKGl0ZW1zKSA/IGl0ZW1zW2luZGV4XSA6IG51bGw7XG4gICAgICAgICAgICAgICAgaWYgKCFpdGVtKSB7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW0gPSB7IHVybCwgcGVuZGluZzogdHJ1ZSB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gaXRlbTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmICghaXRlbXMpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGlmIChpdGVtcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuIDx1bCBjbGFzc05hbWU9XCJlbXB0eVwiPjxsaT48c3Bhbj5ub25lPC9zcGFuPjwvbGk+PC91bD47XG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICAgIDx1bD5cbiAgICAgICAge1xuICAgICAgICAgICAgaXRlbXMubWFwKChpdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IGlkID0gcm91dGUuZXh0cmFjdElEKGl0ZW0udXJsKTtcbiAgICAgICAgICAgICAgICBsZXQgdXJsID0gcm91dGUuZmluZChwYWdlTmFtZSwgeyBpZCB9KTtcbiAgICAgICAgICAgICAgICBsZXQgdGV4dCA9IGl0ZW0ucGVuZGluZyA/ICcuLi4nIDogaXRlbVtmaWVsZF07XG4gICAgICAgICAgICAgICAgbGV0IGxpbmtQcm9wcyA9IHtcbiAgICAgICAgICAgICAgICAgICAgaHJlZjogdXJsLFxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU6IChpdGVtLnBlbmRpbmcpID8gJ3BlbmRpbmcnIDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgcmV0dXJuIDxsaT48YSB7Li4ubGlua1Byb3BzfT57dGV4dH08L2E+PC9saT47XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICAgIDwvdWw+XG4gICAgKTtcbn1cblxuTGlzdC5kZWZhdWx0UHJvcHMgPSB7XG4gICAgZmllbGQ6ICduYW1lJ1xufTtcblxuTGlzdC5kaXNwbGF5TmFtZSA9ICdMaXN0JztcblxuZXhwb3J0IHtcbiAgICBMaXN0IGFzIGRlZmF1bHQsXG4gICAgTGlzdFxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3dpZGdldHMvbGlzdC5qc3giLCJpbXBvcnQgeyBoLCBDb21wb25lbnQgfSBmcm9tICdwcmVhY3QnO1xuXG4vKiogQGpzeCBoICovXG5cbmZ1bmN0aW9uIExvYWRpbmcoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2FkaW5nXCI+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhYiBmYS1lbXBpcmUgZmEtc3BpblwiLz4gTG9hZGluZ1xuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cbkxvYWRpbmcuZGlzcGxheU5hbWUgPSAnTG9hZGluZyc7XG5cbmV4cG9ydCB7XG4gICAgTG9hZGluZyBhcyBkZWZhdWx0LFxuICAgIExvYWRpbmdcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi93aWRnZXRzL2xvYWRpbmcuanN4Il0sInNvdXJjZVJvb3QiOiIifQ==