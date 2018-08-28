exports.ids = ["character-list"];
exports.modules = {

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

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9jaGFyYWN0ZXItbGlzdC5qc3giLCJ3ZWJwYWNrOi8vLy4vd2lkZ2V0cy9saXN0LmpzeCIsIndlYnBhY2s6Ly8vLi93aWRnZXRzL2xvYWRpbmcuanN4Il0sIm5hbWVzIjpbIkNoYXJhY3Rlckxpc3QiLCJtZWFud2hpbGUiLCJwcm9wcyIsInJvdXRlIiwic3dhcGkiLCJwZW9wbGUiLCJzaG93IiwiZmV0Y2hMaXN0IiwibW9yZSIsIkFzeW5jQ29tcG9uZW50IiwiZGlzcGxheU5hbWUiLCJDaGFyYWN0ZXJMaXN0U3luYyIsImxpc3RQcm9wcyIsIml0ZW1zIiwiZmllbGQiLCJwYWdlTmFtZSIsIkNvbXBvbmVudCIsImRlZmF1bHQiLCJMaXN0IiwidXJscyIsInVybCIsInBlbmRpbmciLCJBcnJheSIsIm1hcCIsImluZGV4IiwiaXRlbSIsImxlbmd0aCIsImlkIiwiZXh0cmFjdElEIiwiZmluZCIsInRleHQiLCJsaW5rUHJvcHMiLCJocmVmIiwiY2xhc3NOYW1lIiwidW5kZWZpbmVkIiwiZGVmYXVsdFByb3BzIiwiTG9hZGluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBRUE7O0lBRU1BLGE7Ozs7Ozs7Ozs7OztBQUdGOzs7Ozs7OztpSEFPa0JDLFM7Ozs7Ozs7eUNBQ1MsS0FBS0MsSyxFQUF0QkMsSyxVQUFBQSxLLEVBQU9DLEssVUFBQUEsSztBQUNURixxQyxHQUFRO0FBQ1JHLDRDQUFRLElBREE7QUFFUkYsMkNBQU9BO0FBRkMsaUM7O0FBSVpGLDBDQUFVSyxJQUFWLENBQWUsZUFBQyxpQkFBRCxFQUF1QkosS0FBdkIsQ0FBZjs7dUNBQ3FCRSxNQUFNRyxTQUFOLENBQWdCLFVBQWhCLEM7OztBQUFyQkwsc0NBQU1HLE07O0FBQ05ILHNDQUFNRyxNQUFOLENBQWFHLElBQWI7aUVBQ08sZUFBQyxpQkFBRCxFQUF1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QUE7QUFBSTtBQUFBO0FBQU9ILDZCQUFQO0FBQW1CRDtBQUFuQjtBQUFKLGFBQVA7QUFDSCxTQVREO0FBRkosS0FESjtBQWdCSDs7QUFFRFosS0FBS2lCLFlBQUwsR0FBb0I7QUFDaEJyQixXQUFPO0FBRFMsQ0FBcEI7O0FBSUFJLEtBQUtSLFdBQUwsR0FBbUIsTUFBbkI7O1FBR1lPLE8sR0FBUkMsSTtRQUNBQSxJLEdBQUFBLEk7Ozs7Ozs7Ozs7Ozs7OztBQ3ZESjs7QUFFQTs7QUFFQSxTQUFTa0IsT0FBVCxHQUFtQjtBQUNmLFdBQ0k7QUFBQTtBQUFBLFVBQUssV0FBVSxTQUFmO0FBQ0k7QUFBQTtBQUFBO0FBQ0ksa0NBQUcsV0FBVSx1QkFBYixHQURKO0FBQUE7QUFBQTtBQURKLEtBREo7QUFPSDs7QUFFREEsUUFBUTFCLFdBQVIsR0FBc0IsU0FBdEI7O1FBR2VPLE8sR0FBWG1CLE87UUFDQUEsTyxHQUFBQSxPIiwiZmlsZSI6ImNoYXJhY3Rlci1saXN0LmFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGgsIENvbXBvbmVudCB9IGZyb20gJ3ByZWFjdCc7XG5pbXBvcnQgeyBBc3luY0NvbXBvbmVudCB9IGZyb20gJ3JlbGFrcy9wcmVhY3QnO1xuaW1wb3J0IExpc3QgZnJvbSAnd2lkZ2V0cy9saXN0JztcbmltcG9ydCBMb2FkaW5nIGZyb20gJ3dpZGdldHMvbG9hZGluZyc7XG5cbi8qKiBAanN4IGggKi9cblxuY2xhc3MgQ2hhcmFjdGVyTGlzdCBleHRlbmRzIEFzeW5jQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgZGlzcGxheU5hbWUgPSAnQ2hhcmFjdGVyTGlzdCc7XG5cbiAgICAvKipcbiAgICAgKiBSZXRyaWV2ZSByZW1vdGUgZGF0YSBhbmQgcmVuZGVyIHRoZSBzeW5jaHJvbml6ZSBoYWxmIG9mIHRoaXMgY29tcG9uZW50XG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHtNZWFud2hpbGV9ICBtZWFud2hpbGVcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1ZOb2RlfVxuICAgICAqL1xuICAgIGFzeW5jIHJlbmRlckFzeW5jKG1lYW53aGlsZSkge1xuICAgICAgICBsZXQgeyByb3V0ZSwgc3dhcGkgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGxldCBwcm9wcyA9IHtcbiAgICAgICAgICAgIHBlb3BsZTogbnVsbCxcbiAgICAgICAgICAgIHJvdXRlOiByb3V0ZSxcbiAgICAgICAgfTtcbiAgICAgICAgbWVhbndoaWxlLnNob3coPENoYXJhY3Rlckxpc3RTeW5jIHsuLi5wcm9wc30gLz4pO1xuICAgICAgICBwcm9wcy5wZW9wbGUgPSBhd2FpdCBzd2FwaS5mZXRjaExpc3QoJy9wZW9wbGUvJyk7XG4gICAgICAgIHByb3BzLnBlb3BsZS5tb3JlKCk7XG4gICAgICAgIHJldHVybiA8Q2hhcmFjdGVyTGlzdFN5bmMgey4uLnByb3BzfSAvPjtcbiAgICB9XG59XG5cbmNsYXNzIENoYXJhY3Rlckxpc3RTeW5jIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgZGlzcGxheU5hbWUgPSAnQ2hhcmFjdGVyTGlzdFN5bmMnO1xuXG4gICAgLyoqXG4gICAgICogUmVuZGVyIHRoZSBjb21wb25lbnQsIG1ha2luZyBiZXN0IGVmZm9ydCB1c2luZyB3aGF0IHByb3BzIGFyZSBnaXZlblxuICAgICAqXG4gICAgICogQHJldHVybiB7Vk5vZGV9XG4gICAgICovXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQgeyBwZW9wbGUsIHJvdXRlIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICBpZiAoIXBlb3BsZSkge1xuICAgICAgICAgICAgcmV0dXJuIDxMb2FkaW5nIC8+O1xuICAgICAgICB9XG4gICAgICAgIGxldCBsaXN0UHJvcHMgPSB7XG4gICAgICAgICAgICBpdGVtczogcGVvcGxlLFxuICAgICAgICAgICAgZmllbGQ6ICduYW1lJyxcbiAgICAgICAgICAgIHBhZ2VOYW1lOiAnY2hhcmFjdGVyLXN1bW1hcnknLFxuICAgICAgICAgICAgcm91dGU6IHJvdXRlLFxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8aDE+Q2hhcmFjdGVyczwvaDE+XG4gICAgICAgICAgICAgICAgPExpc3Qgey4uLmxpc3RQcm9wc30gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuZXhwb3J0IHtcbiAgICBDaGFyYWN0ZXJMaXN0IGFzIGRlZmF1bHQsXG4gICAgQ2hhcmFjdGVyTGlzdCxcbiAgICBDaGFyYWN0ZXJMaXN0U3luY1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhZ2VzL2NoYXJhY3Rlci1saXN0LmpzeCIsImltcG9ydCB7IGgsIENvbXBvbmVudCB9IGZyb20gJ3ByZWFjdCc7XG5cbi8qKiBAanN4IGggKi9cblxuZnVuY3Rpb24gTGlzdChwcm9wcykge1xuICAgIGxldCB7IHJvdXRlLCB1cmxzLCBpdGVtcywgZmllbGQsIHBhZ2VOYW1lIH0gPSBwcm9wcztcbiAgICBpZiAodXJscykge1xuICAgICAgICBpZiAodHlwZW9mKHVybHMpID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgaWYgKGl0ZW1zKSB7XG4gICAgICAgICAgICAgICAgaXRlbXMgPSBbIGl0ZW1zIF07XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGl0ZW1zID0gWyB7IHVybDogdXJscywgcGVuZGluZzogdHJ1ZSB9IF07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAodXJscyBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgICAgICBpdGVtcyA9IHVybHMubWFwKCh1cmwsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgdmFyIGl0ZW0gPSAoaXRlbXMpID8gaXRlbXNbaW5kZXhdIDogbnVsbDtcbiAgICAgICAgICAgICAgICBpZiAoIWl0ZW0pIHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbSA9IHsgdXJsLCBwZW5kaW5nOiB0cnVlIH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBpdGVtO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKCFpdGVtcykge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgaWYgKGl0ZW1zLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gPHVsIGNsYXNzTmFtZT1cImVtcHR5XCI+PGxpPjxzcGFuPm5vbmU8L3NwYW4+PC9saT48L3VsPjtcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgICAgPHVsPlxuICAgICAgICB7XG4gICAgICAgICAgICBpdGVtcy5tYXAoKGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgaWQgPSByb3V0ZS5leHRyYWN0SUQoaXRlbS51cmwpO1xuICAgICAgICAgICAgICAgIGxldCB1cmwgPSByb3V0ZS5maW5kKHBhZ2VOYW1lLCB7IGlkIH0pO1xuICAgICAgICAgICAgICAgIGxldCB0ZXh0ID0gaXRlbS5wZW5kaW5nID8gJy4uLicgOiBpdGVtW2ZpZWxkXTtcbiAgICAgICAgICAgICAgICBsZXQgbGlua1Byb3BzID0ge1xuICAgICAgICAgICAgICAgICAgICBocmVmOiB1cmwsXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogKGl0ZW0ucGVuZGluZykgPyAncGVuZGluZycgOiB1bmRlZmluZWQsXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICByZXR1cm4gPGxpPjxhIHsuLi5saW5rUHJvcHN9Pnt0ZXh0fTwvYT48L2xpPjtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgICAgPC91bD5cbiAgICApO1xufVxuXG5MaXN0LmRlZmF1bHRQcm9wcyA9IHtcbiAgICBmaWVsZDogJ25hbWUnXG59O1xuXG5MaXN0LmRpc3BsYXlOYW1lID0gJ0xpc3QnO1xuXG5leHBvcnQge1xuICAgIExpc3QgYXMgZGVmYXVsdCxcbiAgICBMaXN0XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vd2lkZ2V0cy9saXN0LmpzeCIsImltcG9ydCB7IGgsIENvbXBvbmVudCB9IGZyb20gJ3ByZWFjdCc7XG5cbi8qKiBAanN4IGggKi9cblxuZnVuY3Rpb24gTG9hZGluZygpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvYWRpbmdcIj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFiIGZhLWVtcGlyZSBmYS1zcGluXCIvPiBMb2FkaW5nXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cblxuTG9hZGluZy5kaXNwbGF5TmFtZSA9ICdMb2FkaW5nJztcblxuZXhwb3J0IHtcbiAgICBMb2FkaW5nIGFzIGRlZmF1bHQsXG4gICAgTG9hZGluZ1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3dpZGdldHMvbG9hZGluZy5qc3giXSwic291cmNlUm9vdCI6IiJ9