webpackJsonp(["planet-list"],{

/***/ "./pages/planet-list.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.PlanetListSync = exports.PlanetList = exports.default = undefined;

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

var PlanetList = function (_AsyncComponent) {
    (0, _inherits3.default)(PlanetList, _AsyncComponent);

    function PlanetList() {
        (0, _classCallCheck3.default)(this, PlanetList);
        return (0, _possibleConstructorReturn3.default)(this, (PlanetList.__proto__ || (0, _getPrototypeOf2.default)(PlanetList)).apply(this, arguments));
    }

    (0, _createClass3.default)(PlanetList, [{
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

                                meanwhile.show((0, _preact.h)(PlanetListSync, props));
                                _context.next = 5;
                                return swapi.fetchList('/planets/');

                            case 5:
                                props.planets = _context.sent;

                                props.planets.more();
                                return _context.abrupt('return', (0, _preact.h)(PlanetListSync, props));

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
    return PlanetList;
}(_preact2.AsyncComponent);

PlanetList.displayName = 'PlanetList';

var PlanetListSync = function (_Component) {
    (0, _inherits3.default)(PlanetListSync, _Component);

    function PlanetListSync() {
        (0, _classCallCheck3.default)(this, PlanetListSync);
        return (0, _possibleConstructorReturn3.default)(this, (PlanetListSync.__proto__ || (0, _getPrototypeOf2.default)(PlanetListSync)).apply(this, arguments));
    }

    (0, _createClass3.default)(PlanetListSync, [{
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
                pageName: 'planet-summary',
                route: route
            };
            return (0, _preact.h)(
                'div',
                null,
                (0, _preact.h)(
                    'h1',
                    null,
                    'Planets'
                ),
                (0, _preact.h)(_list2.default, listProps)
            );
        }
    }]);
    return PlanetListSync;
}(_preact.Component);

PlanetListSync.displayName = 'PlanetListSync';
exports.default = PlanetList;
exports.PlanetList = PlanetList;
exports.PlanetListSync = PlanetListSync;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9wbGFuZXQtbGlzdC5qc3giLCJ3ZWJwYWNrOi8vLy4vd2lkZ2V0cy9saXN0LmpzeCIsIndlYnBhY2s6Ly8vLi93aWRnZXRzL2xvYWRpbmcuanN4Il0sIm5hbWVzIjpbIlBsYW5ldExpc3QiLCJtZWFud2hpbGUiLCJwcm9wcyIsInJvdXRlIiwic3dhcGkiLCJwbGFuZXRzIiwic2hvdyIsImZldGNoTGlzdCIsIm1vcmUiLCJBc3luY0NvbXBvbmVudCIsImRpc3BsYXlOYW1lIiwiUGxhbmV0TGlzdFN5bmMiLCJsaXN0UHJvcHMiLCJpdGVtcyIsInBhZ2VOYW1lIiwiQ29tcG9uZW50IiwiZGVmYXVsdCIsIkxpc3QiLCJ1cmxzIiwiZmllbGQiLCJ1cmwiLCJwZW5kaW5nIiwiQXJyYXkiLCJtYXAiLCJpbmRleCIsIml0ZW0iLCJsZW5ndGgiLCJpZCIsImV4dHJhY3RJRCIsImZpbmQiLCJ0ZXh0IiwibGlua1Byb3BzIiwiaHJlZiIsImNsYXNzTmFtZSIsInVuZGVmaW5lZCIsImRlZmF1bHRQcm9wcyIsIkxvYWRpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBRUE7O0lBRU1BLFU7Ozs7Ozs7Ozs7OztBQUdGOzs7Ozs7OztpSEFPa0JDLFM7Ozs7Ozs7eUNBQ1MsS0FBS0MsSyxFQUF0QkMsSyxVQUFBQSxLLEVBQU9DLEssVUFBQUEsSztBQUNURixxQyxHQUFRO0FBQ1JHLDZDQUFTLElBREQ7QUFFUkYsMkNBQU9BO0FBRkMsaUM7O0FBSVpGLDBDQUFVSyxJQUFWLENBQWUsZUFBQyxjQUFELEVBQW9CSixLQUFwQixDQUFmOzt1Q0FDc0JFLE1BQU1HLFNBQU4sQ0FBZ0IsV0FBaEIsQzs7O0FBQXRCTCxzQ0FBTUcsTzs7QUFDTkgsc0NBQU1HLE9BQU4sQ0FBY0csSUFBZDtpRUFDTyxlQUFDLGNBQUQsRUFBb0JOLEtBQXBCLEM7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QW5CO0FBQUosYUFBUDtBQUNILFNBVEQ7QUFGSixLQURKO0FBZ0JIOztBQUVEYixLQUFLa0IsWUFBTCxHQUFvQjtBQUNoQmhCLFdBQU87QUFEUyxDQUFwQjs7QUFJQUYsS0FBS1AsV0FBTCxHQUFtQixNQUFuQjs7UUFHWU0sTyxHQUFSQyxJO1FBQ0FBLEksR0FBQUEsSTs7Ozs7Ozs7Ozs7Ozs7O0FDdkRKOztBQUVBOztBQUVBLFNBQVNtQixPQUFULEdBQW1CO0FBQ2YsV0FDSTtBQUFBO0FBQUEsVUFBSyxXQUFVLFNBQWY7QUFDSTtBQUFBO0FBQUE7QUFDSSxrQ0FBRyxXQUFVLHVCQUFiLEdBREo7QUFBQTtBQUFBO0FBREosS0FESjtBQU9IOztBQUVEQSxRQUFRMUIsV0FBUixHQUFzQixTQUF0Qjs7UUFHZU0sTyxHQUFYb0IsTztRQUNBQSxPLEdBQUFBLE8iLCJmaWxlIjoicGxhbmV0LWxpc3QuYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaCwgQ29tcG9uZW50IH0gZnJvbSAncHJlYWN0JztcbmltcG9ydCB7IEFzeW5jQ29tcG9uZW50IH0gZnJvbSAncmVsYWtzL3ByZWFjdCc7XG5pbXBvcnQgTGlzdCBmcm9tICd3aWRnZXRzL2xpc3QnO1xuaW1wb3J0IExvYWRpbmcgZnJvbSAnd2lkZ2V0cy9sb2FkaW5nJztcblxuLyoqIEBqc3ggaCAqL1xuXG5jbGFzcyBQbGFuZXRMaXN0IGV4dGVuZHMgQXN5bmNDb21wb25lbnQge1xuICAgIHN0YXRpYyBkaXNwbGF5TmFtZSA9ICdQbGFuZXRMaXN0JztcblxuICAgIC8qKlxuICAgICAqIFJldHJpZXZlIHJlbW90ZSBkYXRhIGFuZCByZW5kZXIgdGhlIHN5bmNocm9uaXplIGhhbGYgb2YgdGhpcyBjb21wb25lbnRcbiAgICAgKlxuICAgICAqIEBwYXJhbSAge01lYW53aGlsZX0gIG1lYW53aGlsZVxuICAgICAqXG4gICAgICogQHJldHVybiB7Vk5vZGV9XG4gICAgICovXG4gICAgYXN5bmMgcmVuZGVyQXN5bmMobWVhbndoaWxlKSB7XG4gICAgICAgIGxldCB7IHJvdXRlLCBzd2FwaSB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgbGV0IHByb3BzID0ge1xuICAgICAgICAgICAgcGxhbmV0czogbnVsbCxcbiAgICAgICAgICAgIHJvdXRlOiByb3V0ZSxcbiAgICAgICAgfTtcbiAgICAgICAgbWVhbndoaWxlLnNob3coPFBsYW5ldExpc3RTeW5jIHsuLi5wcm9wc30gLz4pO1xuICAgICAgICBwcm9wcy5wbGFuZXRzID0gYXdhaXQgc3dhcGkuZmV0Y2hMaXN0KCcvcGxhbmV0cy8nKTtcbiAgICAgICAgcHJvcHMucGxhbmV0cy5tb3JlKCk7XG4gICAgICAgIHJldHVybiA8UGxhbmV0TGlzdFN5bmMgey4uLnByb3BzfSAvPjtcbiAgICB9XG59XG5cbmNsYXNzIFBsYW5ldExpc3RTeW5jIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgZGlzcGxheU5hbWUgPSAnUGxhbmV0TGlzdFN5bmMnO1xuICAgIFxuICAgIC8qKlxuICAgICAqIFJlbmRlciB0aGUgY29tcG9uZW50LCBtYWtpbmcgYmVzdCBlZmZvcnQgdXNpbmcgd2hhdCBwcm9wcyBhcmUgZ2l2ZW5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1ZOb2RlfVxuICAgICAqL1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IHsgcGxhbmV0cywgcm91dGUgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGlmICghcGxhbmV0cykge1xuICAgICAgICAgICAgcmV0dXJuIDxMb2FkaW5nIC8+O1xuICAgICAgICB9XG4gICAgICAgIGxldCBsaXN0UHJvcHMgPSB7XG4gICAgICAgICAgICBpdGVtczogcGxhbmV0cyxcbiAgICAgICAgICAgIHBhZ2VOYW1lOiAncGxhbmV0LXN1bW1hcnknLFxuICAgICAgICAgICAgcm91dGU6IHJvdXRlLFxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8aDE+UGxhbmV0czwvaDE+XG4gICAgICAgICAgICAgICAgPExpc3Qgey4uLmxpc3RQcm9wc30gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuZXhwb3J0IHtcbiAgICBQbGFuZXRMaXN0IGFzIGRlZmF1bHQsXG4gICAgUGxhbmV0TGlzdCxcbiAgICBQbGFuZXRMaXN0U3luY1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhZ2VzL3BsYW5ldC1saXN0LmpzeCIsImltcG9ydCB7IGgsIENvbXBvbmVudCB9IGZyb20gJ3ByZWFjdCc7XG5cbi8qKiBAanN4IGggKi9cblxuZnVuY3Rpb24gTGlzdChwcm9wcykge1xuICAgIGxldCB7IHJvdXRlLCB1cmxzLCBpdGVtcywgZmllbGQsIHBhZ2VOYW1lIH0gPSBwcm9wcztcbiAgICBpZiAodXJscykge1xuICAgICAgICBpZiAodHlwZW9mKHVybHMpID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgaWYgKGl0ZW1zKSB7XG4gICAgICAgICAgICAgICAgaXRlbXMgPSBbIGl0ZW1zIF07XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGl0ZW1zID0gWyB7IHVybDogdXJscywgcGVuZGluZzogdHJ1ZSB9IF07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAodXJscyBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgICAgICBpdGVtcyA9IHVybHMubWFwKCh1cmwsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgdmFyIGl0ZW0gPSAoaXRlbXMpID8gaXRlbXNbaW5kZXhdIDogbnVsbDtcbiAgICAgICAgICAgICAgICBpZiAoIWl0ZW0pIHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbSA9IHsgdXJsLCBwZW5kaW5nOiB0cnVlIH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBpdGVtO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKCFpdGVtcykge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgaWYgKGl0ZW1zLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gPHVsIGNsYXNzTmFtZT1cImVtcHR5XCI+PGxpPjxzcGFuPm5vbmU8L3NwYW4+PC9saT48L3VsPjtcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgICAgPHVsPlxuICAgICAgICB7XG4gICAgICAgICAgICBpdGVtcy5tYXAoKGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgaWQgPSByb3V0ZS5leHRyYWN0SUQoaXRlbS51cmwpO1xuICAgICAgICAgICAgICAgIGxldCB1cmwgPSByb3V0ZS5maW5kKHBhZ2VOYW1lLCB7IGlkIH0pO1xuICAgICAgICAgICAgICAgIGxldCB0ZXh0ID0gaXRlbS5wZW5kaW5nID8gJy4uLicgOiBpdGVtW2ZpZWxkXTtcbiAgICAgICAgICAgICAgICBsZXQgbGlua1Byb3BzID0ge1xuICAgICAgICAgICAgICAgICAgICBocmVmOiB1cmwsXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogKGl0ZW0ucGVuZGluZykgPyAncGVuZGluZycgOiB1bmRlZmluZWQsXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICByZXR1cm4gPGxpPjxhIHsuLi5saW5rUHJvcHN9Pnt0ZXh0fTwvYT48L2xpPjtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgICAgPC91bD5cbiAgICApO1xufVxuXG5MaXN0LmRlZmF1bHRQcm9wcyA9IHtcbiAgICBmaWVsZDogJ25hbWUnXG59O1xuXG5MaXN0LmRpc3BsYXlOYW1lID0gJ0xpc3QnO1xuXG5leHBvcnQge1xuICAgIExpc3QgYXMgZGVmYXVsdCxcbiAgICBMaXN0XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vd2lkZ2V0cy9saXN0LmpzeCIsImltcG9ydCB7IGgsIENvbXBvbmVudCB9IGZyb20gJ3ByZWFjdCc7XG5cbi8qKiBAanN4IGggKi9cblxuZnVuY3Rpb24gTG9hZGluZygpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvYWRpbmdcIj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFiIGZhLWVtcGlyZSBmYS1zcGluXCIvPiBMb2FkaW5nXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cblxuTG9hZGluZy5kaXNwbGF5TmFtZSA9ICdMb2FkaW5nJztcblxuZXhwb3J0IHtcbiAgICBMb2FkaW5nIGFzIGRlZmF1bHQsXG4gICAgTG9hZGluZ1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3dpZGdldHMvbG9hZGluZy5qc3giXSwic291cmNlUm9vdCI6IiJ9