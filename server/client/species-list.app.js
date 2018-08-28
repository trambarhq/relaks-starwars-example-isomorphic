exports.ids = ["species-list"];
exports.modules = {

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

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9zcGVjaWVzLWxpc3QuanN4Iiwid2VicGFjazovLy8uL3dpZGdldHMvbGlzdC5qc3giLCJ3ZWJwYWNrOi8vLy4vd2lkZ2V0cy9sb2FkaW5nLmpzeCJdLCJuYW1lcyI6WyJTcGVjaWVzTGlzdCIsIm1lYW53aGlsZSIsInByb3BzIiwicm91dGUiLCJzd2FwaSIsInNwZWNpZXMiLCJzaG93IiwiZmV0Y2hMaXN0IiwibW9yZSIsIkFzeW5jQ29tcG9uZW50IiwiZGlzcGxheU5hbWUiLCJTcGVjaWVzTGlzdFN5bmMiLCJsaXN0UHJvcHMiLCJpdGVtcyIsInBhZ2VOYW1lIiwiQ29tcG9uZW50IiwiZGVmYXVsdCIsIkxpc3QiLCJ1cmxzIiwiZmllbGQiLCJ1cmwiLCJwZW5kaW5nIiwiQXJyYXkiLCJtYXAiLCJpbmRleCIsIml0ZW0iLCJsZW5ndGgiLCJpZCIsImV4dHJhY3RJRCIsImZpbmQiLCJ0ZXh0IiwibGlua1Byb3BzIiwiaHJlZiIsImNsYXNzTmFtZSIsInVuZGVmaW5lZCIsImRlZmF1bHRQcm9wcyIsIkxvYWRpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBOztJQUVNQSxXOzs7Ozs7Ozs7Ozs7QUFHRjs7Ozs7Ozs7aUhBT2tCQyxTOzs7Ozs7O3lDQUNTLEtBQUtDLEssRUFBdEJDLEssVUFBQUEsSyxFQUFPQyxLLFVBQUFBLEs7QUFDVEYscUMsR0FBUTtBQUNSRyw2Q0FBUyxJQUREO0FBRVJGLDJDQUFPQTtBQUZDLGlDOztBQUlaRiwwQ0FBVUssSUFBVixDQUFlLGVBQUMsZUFBRCxFQUFxQkosS0FBckIsQ0FBZjs7dUNBQ3NCRSxNQUFNRyxTQUFOLENBQWdCLFdBQWhCLEM7OztBQUF0Qkwsc0NBQU1HLE87O0FBQ05ILHNDQUFNRyxPQUFOLENBQWNHLElBQWQ7aUVBQ08sZUFBQyxlQUFELEVBQXFCTixLQUFy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RDtBQUFuQjtBQUFKLGFBQVA7QUFDSCxTQVREO0FBRkosS0FESjtBQWdCSDs7QUFFRGIsS0FBS2tCLFlBQUwsR0FBb0I7QUFDaEJoQixXQUFPO0FBRFMsQ0FBcEI7O0FBSUFGLEtBQUtQLFdBQUwsR0FBbUIsTUFBbkI7O1FBR1lNLE8sR0FBUkMsSTtRQUNBQSxJLEdBQUFBLEk7Ozs7Ozs7Ozs7Ozs7OztBQ3ZESjs7QUFFQTs7QUFFQSxTQUFTbUIsT0FBVCxHQUFtQjtBQUNmLFdBQ0k7QUFBQTtBQUFBLFVBQUssV0FBVSxTQUFmO0FBQ0k7QUFBQTtBQUFBO0FBQ0ksa0NBQUcsV0FBVSx1QkFBYixHQURKO0FBQUE7QUFBQTtBQURKLEtBREo7QUFPSDs7QUFFREEsUUFBUTFCLFdBQVIsR0FBc0IsU0FBdEI7O1FBR2VNLE8sR0FBWG9CLE87UUFDQUEsTyxHQUFBQSxPIiwiZmlsZSI6InNwZWNpZXMtbGlzdC5hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBoLCBDb21wb25lbnQgfSBmcm9tICdwcmVhY3QnO1xuaW1wb3J0IHsgQXN5bmNDb21wb25lbnQgfSBmcm9tICdyZWxha3MvcHJlYWN0JztcbmltcG9ydCBMaXN0IGZyb20gJ3dpZGdldHMvbGlzdCc7XG5pbXBvcnQgTG9hZGluZyBmcm9tICd3aWRnZXRzL2xvYWRpbmcnO1xuXG4vKiogQGpzeCBoICovXG5cbmNsYXNzIFNwZWNpZXNMaXN0IGV4dGVuZHMgQXN5bmNDb21wb25lbnQge1xuICAgIHN0YXRpYyBkaXNwbGF5TmFtZSA9ICdTcGVjaWVzTGlzdCc7XG5cbiAgICAvKipcbiAgICAgKiBSZXRyaWV2ZSByZW1vdGUgZGF0YSBhbmQgcmVuZGVyIHRoZSBzeW5jaHJvbml6ZSBoYWxmIG9mIHRoaXMgY29tcG9uZW50XG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHtNZWFud2hpbGV9ICBtZWFud2hpbGVcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1ZOb2RlfVxuICAgICAqL1xuICAgIGFzeW5jIHJlbmRlckFzeW5jKG1lYW53aGlsZSkge1xuICAgICAgICBsZXQgeyByb3V0ZSwgc3dhcGkgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGxldCBwcm9wcyA9IHtcbiAgICAgICAgICAgIHNwZWNpZXM6IG51bGwsXG4gICAgICAgICAgICByb3V0ZTogcm91dGUsXG4gICAgICAgIH07XG4gICAgICAgIG1lYW53aGlsZS5zaG93KDxTcGVjaWVzTGlzdFN5bmMgey4uLnByb3BzfSAvPik7XG4gICAgICAgIHByb3BzLnNwZWNpZXMgPSBhd2FpdCBzd2FwaS5mZXRjaExpc3QoJy9zcGVjaWVzLycpO1xuICAgICAgICBwcm9wcy5zcGVjaWVzLm1vcmUoKTtcbiAgICAgICAgcmV0dXJuIDxTcGVjaWVzTGlzdFN5bmMgey4uLnByb3BzfSAvPjtcbiAgICB9XG59XG5cbmNsYXNzIFNwZWNpZXNMaXN0U3luYyBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgc3RhdGljIGRpc3BsYXlOYW1lID0gJ1NwZWNpZXNMaXN0U3luYyc7XG5cbiAgICAvKipcbiAgICAgKiBSZW5kZXIgdGhlIGNvbXBvbmVudCwgbWFraW5nIGJlc3QgZWZmb3J0IHVzaW5nIHdoYXQgcHJvcHMgYXJlIGdpdmVuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtWTm9kZX1cbiAgICAgKi9cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCB7IHNwZWNpZXMsIHJvdXRlIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICBpZiAoIXNwZWNpZXMpIHtcbiAgICAgICAgICAgIHJldHVybiA8TG9hZGluZyAvPjtcbiAgICAgICAgfVxuICAgICAgICBsZXQgbGlzdFByb3BzID0ge1xuICAgICAgICAgICAgaXRlbXM6IHNwZWNpZXMsXG4gICAgICAgICAgICBwYWdlTmFtZTogJ3NwZWNpZXMtc3VtbWFyeScsXG4gICAgICAgICAgICByb3V0ZTogcm91dGUsXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxoMT5TcGVjaWVzPC9oMT5cbiAgICAgICAgICAgICAgICA8TGlzdCB7Li4ubGlzdFByb3BzfSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQge1xuICAgIFNwZWNpZXNMaXN0IGFzIGRlZmF1bHQsXG4gICAgU3BlY2llc0xpc3QsXG4gICAgU3BlY2llc0xpc3RTeW5jXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXMvc3BlY2llcy1saXN0LmpzeCIsImltcG9ydCB7IGgsIENvbXBvbmVudCB9IGZyb20gJ3ByZWFjdCc7XG5cbi8qKiBAanN4IGggKi9cblxuZnVuY3Rpb24gTGlzdChwcm9wcykge1xuICAgIGxldCB7IHJvdXRlLCB1cmxzLCBpdGVtcywgZmllbGQsIHBhZ2VOYW1lIH0gPSBwcm9wcztcbiAgICBpZiAodXJscykge1xuICAgICAgICBpZiAodHlwZW9mKHVybHMpID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgaWYgKGl0ZW1zKSB7XG4gICAgICAgICAgICAgICAgaXRlbXMgPSBbIGl0ZW1zIF07XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGl0ZW1zID0gWyB7IHVybDogdXJscywgcGVuZGluZzogdHJ1ZSB9IF07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAodXJscyBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgICAgICBpdGVtcyA9IHVybHMubWFwKCh1cmwsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgdmFyIGl0ZW0gPSAoaXRlbXMpID8gaXRlbXNbaW5kZXhdIDogbnVsbDtcbiAgICAgICAgICAgICAgICBpZiAoIWl0ZW0pIHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbSA9IHsgdXJsLCBwZW5kaW5nOiB0cnVlIH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBpdGVtO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKCFpdGVtcykge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgaWYgKGl0ZW1zLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gPHVsIGNsYXNzTmFtZT1cImVtcHR5XCI+PGxpPjxzcGFuPm5vbmU8L3NwYW4+PC9saT48L3VsPjtcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgICAgPHVsPlxuICAgICAgICB7XG4gICAgICAgICAgICBpdGVtcy5tYXAoKGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgaWQgPSByb3V0ZS5leHRyYWN0SUQoaXRlbS51cmwpO1xuICAgICAgICAgICAgICAgIGxldCB1cmwgPSByb3V0ZS5maW5kKHBhZ2VOYW1lLCB7IGlkIH0pO1xuICAgICAgICAgICAgICAgIGxldCB0ZXh0ID0gaXRlbS5wZW5kaW5nID8gJy4uLicgOiBpdGVtW2ZpZWxkXTtcbiAgICAgICAgICAgICAgICBsZXQgbGlua1Byb3BzID0ge1xuICAgICAgICAgICAgICAgICAgICBocmVmOiB1cmwsXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogKGl0ZW0ucGVuZGluZykgPyAncGVuZGluZycgOiB1bmRlZmluZWQsXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICByZXR1cm4gPGxpPjxhIHsuLi5saW5rUHJvcHN9Pnt0ZXh0fTwvYT48L2xpPjtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgICAgPC91bD5cbiAgICApO1xufVxuXG5MaXN0LmRlZmF1bHRQcm9wcyA9IHtcbiAgICBmaWVsZDogJ25hbWUnXG59O1xuXG5MaXN0LmRpc3BsYXlOYW1lID0gJ0xpc3QnO1xuXG5leHBvcnQge1xuICAgIExpc3QgYXMgZGVmYXVsdCxcbiAgICBMaXN0XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vd2lkZ2V0cy9saXN0LmpzeCIsImltcG9ydCB7IGgsIENvbXBvbmVudCB9IGZyb20gJ3ByZWFjdCc7XG5cbi8qKiBAanN4IGggKi9cblxuZnVuY3Rpb24gTG9hZGluZygpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvYWRpbmdcIj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFiIGZhLWVtcGlyZSBmYS1zcGluXCIvPiBMb2FkaW5nXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cblxuTG9hZGluZy5kaXNwbGF5TmFtZSA9ICdMb2FkaW5nJztcblxuZXhwb3J0IHtcbiAgICBMb2FkaW5nIGFzIGRlZmF1bHQsXG4gICAgTG9hZGluZ1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3dpZGdldHMvbG9hZGluZy5qc3giXSwic291cmNlUm9vdCI6IiJ9