webpackJsonp(["species-page"],{

/***/ "./pages/species-page.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SpeciesPageSync = exports.SpeciesPage = exports.default = undefined;

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

var _loading = __webpack_require__("./widgets/loading.jsx");

var _loading2 = _interopRequireDefault(_loading);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** @jsx h */

var SpeciesPage = function (_AsyncComponent) {
    (0, _inherits3.default)(SpeciesPage, _AsyncComponent);

    function SpeciesPage() {
        (0, _classCallCheck3.default)(this, SpeciesPage);
        return (0, _possibleConstructorReturn3.default)(this, (SpeciesPage.__proto__ || (0, _getPrototypeOf2.default)(SpeciesPage)).apply(this, arguments));
    }

    (0, _createClass3.default)(SpeciesPage, [{
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
                                    films: null,
                                    people: null,
                                    homeworld: null,
                                    route: route
                                };

                                meanwhile.show((0, _preact.h)(SpeciesPageSync, props));
                                _context.next = 5;
                                return swapi.fetchOne('/species/' + route.params.id + '/');

                            case 5:
                                props.species = _context.sent;

                                meanwhile.show((0, _preact.h)(SpeciesPageSync, props));
                                _context.next = 9;
                                return swapi.fetchMultiple(props.species.films, { partial: 0.4 });

                            case 9:
                                props.films = _context.sent;

                                meanwhile.show((0, _preact.h)(SpeciesPageSync, props));
                                _context.next = 13;
                                return swapi.fetchMultiple(props.species.people, { partial: 0.4 });

                            case 13:
                                props.people = _context.sent;

                                meanwhile.show((0, _preact.h)(SpeciesPageSync, props));
                                _context.next = 17;
                                return swapi.fetchOne(props.species.homeworld);

                            case 17:
                                props.homeworld = _context.sent;
                                return _context.abrupt('return', (0, _preact.h)(SpeciesPageSync, props));

                            case 19:
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
    return SpeciesPage;
}(_preact2.AsyncComponent);

SpeciesPage.displayName = 'SpeciesPage';

var SpeciesPageSync = function (_Component) {
    (0, _inherits3.default)(SpeciesPageSync, _Component);

    function SpeciesPageSync() {
        (0, _classCallCheck3.default)(this, SpeciesPageSync);
        return (0, _possibleConstructorReturn3.default)(this, (SpeciesPageSync.__proto__ || (0, _getPrototypeOf2.default)(SpeciesPageSync)).apply(this, arguments));
    }

    (0, _createClass3.default)(SpeciesPageSync, [{
        key: 'render',


        /**
         * Render the component, making best effort using what props are given
         *
         * @return {VNode}
         */
        value: function render() {
            var _props2 = this.props,
                route = _props2.route,
                species = _props2.species,
                homeworld = _props2.homeworld,
                people = _props2.people,
                films = _props2.films;

            if (!species) {
                return (0, _preact.h)(_loading2.default, null);
            }
            return (0, _preact.h)(
                'div',
                { className: 'character-page' },
                (0, _preact.h)(
                    'h1',
                    null,
                    species.name
                ),
                (0, _preact.h)(
                    'div',
                    null,
                    'Classification: ',
                    species.classification
                ),
                (0, _preact.h)(
                    'div',
                    null,
                    'Designation: ',
                    species.designation
                ),
                (0, _preact.h)(
                    'div',
                    null,
                    'Average height: ',
                    species.average_height
                ),
                (0, _preact.h)(
                    'div',
                    null,
                    'Skin colors: ',
                    species.skin_colors
                ),
                (0, _preact.h)(
                    'div',
                    null,
                    'Hair colors: ',
                    species.hair_colors
                ),
                (0, _preact.h)(
                    'div',
                    null,
                    'Eye colors: ',
                    species.eye_colors
                ),
                (0, _preact.h)(
                    'div',
                    null,
                    'Average lifespan: ',
                    species.average_lifespan
                ),
                (0, _preact.h)(
                    'div',
                    null,
                    'Language: ',
                    species.language
                ),
                (0, _preact.h)(
                    'h2',
                    null,
                    'Homeworld'
                ),
                (0, _preact.h)(_list.List, { urls: species.homeworld, items: homeworld, pageName: 'planet-summary', route: route }),
                (0, _preact.h)(
                    'h2',
                    null,
                    'Members'
                ),
                (0, _preact.h)(_list.List, { urls: species.people, items: people, pageName: 'character-summary', route: route }),
                (0, _preact.h)(
                    'h2',
                    null,
                    'Films'
                ),
                (0, _preact.h)(_list.List, { urls: species.films, items: films, field: 'title', pageName: 'film-summary', route: route })
            );
        }
    }]);
    return SpeciesPageSync;
}(_preact.Component);

SpeciesPageSync.displayName = 'SpeciesPageSync';
exports.default = SpeciesPage;
exports.SpeciesPage = SpeciesPage;
exports.SpeciesPageSync = SpeciesPageSync;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9zcGVjaWVzLXBhZ2UuanN4Iiwid2VicGFjazovLy8uL3dpZGdldHMvbGlzdC5qc3giLCJ3ZWJwYWNrOi8vLy4vd2lkZ2V0cy9sb2FkaW5nLmpzeCJdLCJuYW1lcyI6WyJTcGVjaWVzUGFnZSIsIm1lYW53aGlsZSIsInByb3BzIiwicm91dGUiLCJzd2FwaSIsInNwZWNpZXMiLCJmaWxtcyIsInBlb3BsZSIsImhvbWV3b3JsZCIsInNob3ciLCJmZXRjaE9uZSIsInBhcmFtcyIsImlkIiwiZmV0Y2hNdWx0aXBsZSIsInBhcnRpYWwiLCJBc3luY0NvbXBvbmVudCIsImRpc3BsYXlOYW1lIiwiU3BlY2llc1BhZ2VTeW5jIiwibmFtZSIsImNsYXNzaWZpY2F0aW9uIiwiZGVzaWduYXRpb24iLCJhdmVyYWdlX2hlaWdodCIsInNraW5fY29sb3JzIiwiaGFpcl9jb2xvcnMiLCJleWVfY29sb3JzIiwiYXZlcmFnZV9saWZlc3BhbiIsImxhbmd1YWdlIiwiQ29tcG9uZW50IiwiZGVmYXVsdCIsIkxpc3QiLCJ1cmxzIiwiaXRlbXMiLCJmaWVsZCIsInBhZ2VOYW1lIiwidXJsIiwicGVuZGluZyIsIkFycmF5IiwibWFwIiwiaW5kZXgiLCJpdGVtIiwibGVuZ3RoIiwiZXh0cmFjdElEIiwiZmluZCIsInRleHQiLCJsaW5rUHJvcHMiLCJocmVmIiwiY2xhc3NOYW1lIiwidW5kZWZpbmVkIiwiZGVmYXVsdFByb3BzIiwiTG9hZGluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7O0FBRUE7O0lBRU1BLFc7Ozs7Ozs7Ozs7OztBQUdGOzs7Ozs7OztpSEFPa0JDLFM7Ozs7Ozs7eUNBQ1MsS0FBS0MsSyxFQUF0QkMsSyxVQUFBQSxLLEVBQU9DLEssVUFBQUEsSztBQUNURixxQyxHQUFRO0FBQ1JHLDZDQUFTLElBREQ7QUFFUkMsMkNBQU8sSUFG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QUFBQSxPIiwiZmlsZSI6InNwZWNpZXMtcGFnZS5hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBoLCBDb21wb25lbnQgfSBmcm9tICdwcmVhY3QnO1xuaW1wb3J0IHsgQXN5bmNDb21wb25lbnQgfSBmcm9tICdyZWxha3MvcHJlYWN0JztcbmltcG9ydCB7IExpc3QgfSBmcm9tICd3aWRnZXRzL2xpc3QnO1xuaW1wb3J0IExvYWRpbmcgZnJvbSAnd2lkZ2V0cy9sb2FkaW5nJztcblxuLyoqIEBqc3ggaCAqL1xuXG5jbGFzcyBTcGVjaWVzUGFnZSBleHRlbmRzIEFzeW5jQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgZGlzcGxheU5hbWUgPSAnU3BlY2llc1BhZ2UnO1xuXG4gICAgLyoqXG4gICAgICogUmV0cmlldmUgcmVtb3RlIGRhdGEgYW5kIHJlbmRlciB0aGUgc3luY2hyb25pemUgaGFsZiBvZiB0aGlzIGNvbXBvbmVudFxuICAgICAqXG4gICAgICogQHBhcmFtICB7TWVhbndoaWxlfSAgbWVhbndoaWxlXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtWTm9kZX1cbiAgICAgKi9cbiAgICBhc3luYyByZW5kZXJBc3luYyhtZWFud2hpbGUpIHtcbiAgICAgICAgbGV0IHsgcm91dGUsIHN3YXBpIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICBsZXQgcHJvcHMgPSB7XG4gICAgICAgICAgICBzcGVjaWVzOiBudWxsLFxuICAgICAgICAgICAgZmlsbXM6IG51bGwsXG4gICAgICAgICAgICBwZW9wbGU6IG51bGwsXG4gICAgICAgICAgICBob21ld29ybGQ6IG51bGwsXG4gICAgICAgICAgICByb3V0ZTogcm91dGUsXG4gICAgICAgIH07XG4gICAgICAgIG1lYW53aGlsZS5zaG93KDxTcGVjaWVzUGFnZVN5bmMgey4uLnByb3BzfSAvPik7XG4gICAgICAgIHByb3BzLnNwZWNpZXMgPSBhd2FpdCBzd2FwaS5mZXRjaE9uZShgL3NwZWNpZXMvJHtyb3V0ZS5wYXJhbXMuaWR9L2ApO1xuICAgICAgICBtZWFud2hpbGUuc2hvdyg8U3BlY2llc1BhZ2VTeW5jIHsuLi5wcm9wc30gLz4pO1xuICAgICAgICBwcm9wcy5maWxtcyA9IGF3YWl0IHN3YXBpLmZldGNoTXVsdGlwbGUocHJvcHMuc3BlY2llcy5maWxtcywgeyBwYXJ0aWFsOiAwLjQgfSk7XG4gICAgICAgIG1lYW53aGlsZS5zaG93KDxTcGVjaWVzUGFnZVN5bmMgey4uLnByb3BzfSAvPik7XG4gICAgICAgIHByb3BzLnBlb3BsZSA9IGF3YWl0IHN3YXBpLmZldGNoTXVsdGlwbGUocHJvcHMuc3BlY2llcy5wZW9wbGUsIHsgcGFydGlhbDogMC40IH0pO1xuICAgICAgICBtZWFud2hpbGUuc2hvdyg8U3BlY2llc1BhZ2VTeW5jIHsuLi5wcm9wc30gLz4pO1xuICAgICAgICBwcm9wcy5ob21ld29ybGQgPSBhd2FpdCBzd2FwaS5mZXRjaE9uZShwcm9wcy5zcGVjaWVzLmhvbWV3b3JsZCk7XG4gICAgICAgIHJldHVybiA8U3BlY2llc1BhZ2VTeW5jIHsuLi5wcm9wc30gLz47XG4gICAgfVxufVxuXG5jbGFzcyBTcGVjaWVzUGFnZVN5bmMgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIHN0YXRpYyBkaXNwbGF5TmFtZSA9ICdTcGVjaWVzUGFnZVN5bmMnO1xuXG4gICAgLyoqXG4gICAgICogUmVuZGVyIHRoZSBjb21wb25lbnQsIG1ha2luZyBiZXN0IGVmZm9ydCB1c2luZyB3aGF0IHByb3BzIGFyZSBnaXZlblxuICAgICAqXG4gICAgICogQHJldHVybiB7Vk5vZGV9XG4gICAgICovXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQgeyByb3V0ZSwgc3BlY2llcywgaG9tZXdvcmxkLCBwZW9wbGUsIGZpbG1zIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICBpZiAoIXNwZWNpZXMpIHtcbiAgICAgICAgICAgIHJldHVybiA8TG9hZGluZyAvPjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGFyYWN0ZXItcGFnZVwiPlxuICAgICAgICAgICAgICAgIDxoMT57c3BlY2llcy5uYW1lfTwvaDE+XG4gICAgICAgICAgICAgICAgPGRpdj5DbGFzc2lmaWNhdGlvbjoge3NwZWNpZXMuY2xhc3NpZmljYXRpb259PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdj5EZXNpZ25hdGlvbjoge3NwZWNpZXMuZGVzaWduYXRpb259PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdj5BdmVyYWdlIGhlaWdodDoge3NwZWNpZXMuYXZlcmFnZV9oZWlnaHR9PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdj5Ta2luIGNvbG9yczoge3NwZWNpZXMuc2tpbl9jb2xvcnN9PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdj5IYWlyIGNvbG9yczoge3NwZWNpZXMuaGFpcl9jb2xvcnN9PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdj5FeWUgY29sb3JzOiB7c3BlY2llcy5leWVfY29sb3JzfTwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXY+QXZlcmFnZSBsaWZlc3Bhbjoge3NwZWNpZXMuYXZlcmFnZV9saWZlc3Bhbn08L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2Pkxhbmd1YWdlOiB7c3BlY2llcy5sYW5ndWFnZX08L2Rpdj5cbiAgICAgICAgICAgICAgICA8aDI+SG9tZXdvcmxkPC9oMj5cbiAgICAgICAgICAgICAgICA8TGlzdCB1cmxzPXtzcGVjaWVzLmhvbWV3b3JsZH0gaXRlbXM9e2hvbWV3b3JsZH0gcGFnZU5hbWU9XCJwbGFuZXQtc3VtbWFyeVwiIHJvdXRlPXtyb3V0ZX0gLz5cbiAgICAgICAgICAgICAgICA8aDI+TWVtYmVyczwvaDI+XG4gICAgICAgICAgICAgICAgPExpc3QgdXJscz17c3BlY2llcy5wZW9wbGV9IGl0ZW1zPXtwZW9wbGV9IHBhZ2VOYW1lPVwiY2hhcmFjdGVyLXN1bW1hcnlcIiByb3V0ZT17cm91dGV9IC8+XG4gICAgICAgICAgICAgICAgPGgyPkZpbG1zPC9oMj5cbiAgICAgICAgICAgICAgICA8TGlzdCB1cmxzPXtzcGVjaWVzLmZpbG1zfSBpdGVtcz17ZmlsbXN9IGZpZWxkPVwidGl0bGVcIiBwYWdlTmFtZT1cImZpbG0tc3VtbWFyeVwiIHJvdXRlPXtyb3V0ZX0gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuZXhwb3J0IHtcbiAgICBTcGVjaWVzUGFnZSBhcyBkZWZhdWx0LFxuICAgIFNwZWNpZXNQYWdlLFxuICAgIFNwZWNpZXNQYWdlU3luYyxcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcy9zcGVjaWVzLXBhZ2UuanN4IiwiaW1wb3J0IHsgaCwgQ29tcG9uZW50IH0gZnJvbSAncHJlYWN0JztcblxuLyoqIEBqc3ggaCAqL1xuXG5mdW5jdGlvbiBMaXN0KHByb3BzKSB7XG4gICAgbGV0IHsgcm91dGUsIHVybHMsIGl0ZW1zLCBmaWVsZCwgcGFnZU5hbWUgfSA9IHByb3BzO1xuICAgIGlmICh1cmxzKSB7XG4gICAgICAgIGlmICh0eXBlb2YodXJscykgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICBpZiAoaXRlbXMpIHtcbiAgICAgICAgICAgICAgICBpdGVtcyA9IFsgaXRlbXMgXTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaXRlbXMgPSBbIHsgdXJsOiB1cmxzLCBwZW5kaW5nOiB0cnVlIH0gXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmICh1cmxzIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgICAgICAgIGl0ZW1zID0gdXJscy5tYXAoKHVybCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICB2YXIgaXRlbSA9IChpdGVtcykgPyBpdGVtc1tpbmRleF0gOiBudWxsO1xuICAgICAgICAgICAgICAgIGlmICghaXRlbSkge1xuICAgICAgICAgICAgICAgICAgICBpdGVtID0geyB1cmwsIHBlbmRpbmc6IHRydWUgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW07XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoIWl0ZW1zKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBpZiAoaXRlbXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJldHVybiA8dWwgY2xhc3NOYW1lPVwiZW1wdHlcIj48bGk+PHNwYW4+bm9uZTwvc3Bhbj48L2xpPjwvdWw+O1xuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgICA8dWw+XG4gICAgICAgIHtcbiAgICAgICAgICAgIGl0ZW1zLm1hcCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBpZCA9IHJvdXRlLmV4dHJhY3RJRChpdGVtLnVybCk7XG4gICAgICAgICAgICAgICAgbGV0IHVybCA9IHJvdXRlLmZpbmQocGFnZU5hbWUsIHsgaWQgfSk7XG4gICAgICAgICAgICAgICAgbGV0IHRleHQgPSBpdGVtLnBlbmRpbmcgPyAnLi4uJyA6IGl0ZW1bZmllbGRdO1xuICAgICAgICAgICAgICAgIGxldCBsaW5rUHJvcHMgPSB7XG4gICAgICAgICAgICAgICAgICAgIGhyZWY6IHVybCxcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lOiAoaXRlbS5wZW5kaW5nKSA/ICdwZW5kaW5nJyA6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIHJldHVybiA8bGk+PGEgey4uLmxpbmtQcm9wc30+e3RleHR9PC9hPjwvbGk+O1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgICA8L3VsPlxuICAgICk7XG59XG5cbkxpc3QuZGVmYXVsdFByb3BzID0ge1xuICAgIGZpZWxkOiAnbmFtZSdcbn07XG5cbkxpc3QuZGlzcGxheU5hbWUgPSAnTGlzdCc7XG5cbmV4cG9ydCB7XG4gICAgTGlzdCBhcyBkZWZhdWx0LFxuICAgIExpc3Rcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi93aWRnZXRzL2xpc3QuanN4IiwiaW1wb3J0IHsgaCwgQ29tcG9uZW50IH0gZnJvbSAncHJlYWN0JztcblxuLyoqIEBqc3ggaCAqL1xuXG5mdW5jdGlvbiBMb2FkaW5nKCkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9hZGluZ1wiPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYWIgZmEtZW1waXJlIGZhLXNwaW5cIi8+IExvYWRpbmdcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuXG5Mb2FkaW5nLmRpc3BsYXlOYW1lID0gJ0xvYWRpbmcnO1xuXG5leHBvcnQge1xuICAgIExvYWRpbmcgYXMgZGVmYXVsdCxcbiAgICBMb2FkaW5nXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vd2lkZ2V0cy9sb2FkaW5nLmpzeCJdLCJzb3VyY2VSb290IjoiIn0=