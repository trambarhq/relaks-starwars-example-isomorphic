exports.ids = ["species-page"];
exports.modules = {

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

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9zcGVjaWVzLXBhZ2UuanN4Iiwid2VicGFjazovLy8uL3dpZGdldHMvbGlzdC5qc3giLCJ3ZWJwYWNrOi8vLy4vd2lkZ2V0cy9sb2FkaW5nLmpzeCJdLCJuYW1lcyI6WyJTcGVjaWVzUGFnZSIsIm1lYW53aGlsZSIsInByb3BzIiwicm91dGUiLCJzd2FwaSIsInNwZWNpZXMiLCJmaWxtcyIsInBlb3BsZSIsImhvbWV3b3JsZCIsInNob3ciLCJmZXRjaE9uZSIsInBhcmFtcyIsImlkIiwiZmV0Y2hNdWx0aXBsZSIsInBhcnRpYWwiLCJBc3luY0NvbXBvbmVudCIsImRpc3BsYXlOYW1lIiwiU3BlY2llc1BhZ2VTeW5jIiwibmFtZSIsImNsYXNzaWZpY2F0aW9uIiwiZGVzaWduYXRpb24iLCJhdmVyYWdlX2hlaWdodCIsInNraW5fY29sb3JzIiwiaGFpcl9jb2xvcnMiLCJleWVfY29sb3JzIiwiYXZlcmFnZV9saWZlc3BhbiIsImxhbmd1YWdlIiwiQ29tcG9uZW50IiwiZGVmYXVsdCIsIkxpc3QiLCJ1cmxzIiwiaXRlbXMiLCJmaWVsZCIsInBhZ2VOYW1lIiwidXJsIiwicGVuZGluZyIsIkFycmF5IiwibWFwIiwiaW5kZXgiLCJpdGVtIiwibGVuZ3RoIiwiZXh0cmFjdElEIiwiZmluZCIsInRleHQiLCJsaW5rUHJvcHMiLCJocmVmIiwiY2xhc3NOYW1lIiwidW5kZWZpbmVkIiwiZGVmYXVsdFByb3BzIiwiTG9hZGluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7OztBQUVBOztJQUVNQSxXOzs7Ozs7Ozs7Ozs7QUFHRjs7Ozs7Ozs7aUhBT2tCQyxTOzs7Ozs7O3lDQUNTLEtBQUtDLEssRUFBdEJDLEssVUFBQUEsSyxFQUFPQyxLLFVBQUFBLEs7QUFDVEYscUMsR0FBUTtBQUNSRyw2Q0FBUyxJQUREO0FBRVJDLDJDQUFPLElB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R0FBQUEsTyIsImZpbGUiOiJzcGVjaWVzLXBhZ2UuYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaCwgQ29tcG9uZW50IH0gZnJvbSAncHJlYWN0JztcbmltcG9ydCB7IEFzeW5jQ29tcG9uZW50IH0gZnJvbSAncmVsYWtzL3ByZWFjdCc7XG5pbXBvcnQgeyBMaXN0IH0gZnJvbSAnd2lkZ2V0cy9saXN0JztcbmltcG9ydCBMb2FkaW5nIGZyb20gJ3dpZGdldHMvbG9hZGluZyc7XG5cbi8qKiBAanN4IGggKi9cblxuY2xhc3MgU3BlY2llc1BhZ2UgZXh0ZW5kcyBBc3luY0NvbXBvbmVudCB7XG4gICAgc3RhdGljIGRpc3BsYXlOYW1lID0gJ1NwZWNpZXNQYWdlJztcblxuICAgIC8qKlxuICAgICAqIFJldHJpZXZlIHJlbW90ZSBkYXRhIGFuZCByZW5kZXIgdGhlIHN5bmNocm9uaXplIGhhbGYgb2YgdGhpcyBjb21wb25lbnRcbiAgICAgKlxuICAgICAqIEBwYXJhbSAge01lYW53aGlsZX0gIG1lYW53aGlsZVxuICAgICAqXG4gICAgICogQHJldHVybiB7Vk5vZGV9XG4gICAgICovXG4gICAgYXN5bmMgcmVuZGVyQXN5bmMobWVhbndoaWxlKSB7XG4gICAgICAgIGxldCB7IHJvdXRlLCBzd2FwaSB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgbGV0IHByb3BzID0ge1xuICAgICAgICAgICAgc3BlY2llczogbnVsbCxcbiAgICAgICAgICAgIGZpbG1zOiBudWxsLFxuICAgICAgICAgICAgcGVvcGxlOiBudWxsLFxuICAgICAgICAgICAgaG9tZXdvcmxkOiBudWxsLFxuICAgICAgICAgICAgcm91dGU6IHJvdXRlLFxuICAgICAgICB9O1xuICAgICAgICBtZWFud2hpbGUuc2hvdyg8U3BlY2llc1BhZ2VTeW5jIHsuLi5wcm9wc30gLz4pO1xuICAgICAgICBwcm9wcy5zcGVjaWVzID0gYXdhaXQgc3dhcGkuZmV0Y2hPbmUoYC9zcGVjaWVzLyR7cm91dGUucGFyYW1zLmlkfS9gKTtcbiAgICAgICAgbWVhbndoaWxlLnNob3coPFNwZWNpZXNQYWdlU3luYyB7Li4ucHJvcHN9IC8+KTtcbiAgICAgICAgcHJvcHMuZmlsbXMgPSBhd2FpdCBzd2FwaS5mZXRjaE11bHRpcGxlKHByb3BzLnNwZWNpZXMuZmlsbXMsIHsgcGFydGlhbDogMC40IH0pO1xuICAgICAgICBtZWFud2hpbGUuc2hvdyg8U3BlY2llc1BhZ2VTeW5jIHsuLi5wcm9wc30gLz4pO1xuICAgICAgICBwcm9wcy5wZW9wbGUgPSBhd2FpdCBzd2FwaS5mZXRjaE11bHRpcGxlKHByb3BzLnNwZWNpZXMucGVvcGxlLCB7IHBhcnRpYWw6IDAuNCB9KTtcbiAgICAgICAgbWVhbndoaWxlLnNob3coPFNwZWNpZXNQYWdlU3luYyB7Li4ucHJvcHN9IC8+KTtcbiAgICAgICAgcHJvcHMuaG9tZXdvcmxkID0gYXdhaXQgc3dhcGkuZmV0Y2hPbmUocHJvcHMuc3BlY2llcy5ob21ld29ybGQpO1xuICAgICAgICByZXR1cm4gPFNwZWNpZXNQYWdlU3luYyB7Li4ucHJvcHN9IC8+O1xuICAgIH1cbn1cblxuY2xhc3MgU3BlY2llc1BhZ2VTeW5jIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgZGlzcGxheU5hbWUgPSAnU3BlY2llc1BhZ2VTeW5jJztcblxuICAgIC8qKlxuICAgICAqIFJlbmRlciB0aGUgY29tcG9uZW50LCBtYWtpbmcgYmVzdCBlZmZvcnQgdXNpbmcgd2hhdCBwcm9wcyBhcmUgZ2l2ZW5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1ZOb2RlfVxuICAgICAqL1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IHsgcm91dGUsIHNwZWNpZXMsIGhvbWV3b3JsZCwgcGVvcGxlLCBmaWxtcyB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgaWYgKCFzcGVjaWVzKSB7XG4gICAgICAgICAgICByZXR1cm4gPExvYWRpbmcgLz47XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hhcmFjdGVyLXBhZ2VcIj5cbiAgICAgICAgICAgICAgICA8aDE+e3NwZWNpZXMubmFtZX08L2gxPlxuICAgICAgICAgICAgICAgIDxkaXY+Q2xhc3NpZmljYXRpb246IHtzcGVjaWVzLmNsYXNzaWZpY2F0aW9ufTwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXY+RGVzaWduYXRpb246IHtzcGVjaWVzLmRlc2lnbmF0aW9ufTwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXY+QXZlcmFnZSBoZWlnaHQ6IHtzcGVjaWVzLmF2ZXJhZ2VfaGVpZ2h0fTwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXY+U2tpbiBjb2xvcnM6IHtzcGVjaWVzLnNraW5fY29sb3JzfTwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXY+SGFpciBjb2xvcnM6IHtzcGVjaWVzLmhhaXJfY29sb3JzfTwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXY+RXllIGNvbG9yczoge3NwZWNpZXMuZXllX2NvbG9yc308L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2PkF2ZXJhZ2UgbGlmZXNwYW46IHtzcGVjaWVzLmF2ZXJhZ2VfbGlmZXNwYW59PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdj5MYW5ndWFnZToge3NwZWNpZXMubGFuZ3VhZ2V9PC9kaXY+XG4gICAgICAgICAgICAgICAgPGgyPkhvbWV3b3JsZDwvaDI+XG4gICAgICAgICAgICAgICAgPExpc3QgdXJscz17c3BlY2llcy5ob21ld29ybGR9IGl0ZW1zPXtob21ld29ybGR9IHBhZ2VOYW1lPVwicGxhbmV0LXN1bW1hcnlcIiByb3V0ZT17cm91dGV9IC8+XG4gICAgICAgICAgICAgICAgPGgyPk1lbWJlcnM8L2gyPlxuICAgICAgICAgICAgICAgIDxMaXN0IHVybHM9e3NwZWNpZXMucGVvcGxlfSBpdGVtcz17cGVvcGxlfSBwYWdlTmFtZT1cImNoYXJhY3Rlci1zdW1tYXJ5XCIgcm91dGU9e3JvdXRlfSAvPlxuICAgICAgICAgICAgICAgIDxoMj5GaWxtczwvaDI+XG4gICAgICAgICAgICAgICAgPExpc3QgdXJscz17c3BlY2llcy5maWxtc30gaXRlbXM9e2ZpbG1zfSBmaWVsZD1cInRpdGxlXCIgcGFnZU5hbWU9XCJmaWxtLXN1bW1hcnlcIiByb3V0ZT17cm91dGV9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCB7XG4gICAgU3BlY2llc1BhZ2UgYXMgZGVmYXVsdCxcbiAgICBTcGVjaWVzUGFnZSxcbiAgICBTcGVjaWVzUGFnZVN5bmMsXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXMvc3BlY2llcy1wYWdlLmpzeCIsImltcG9ydCB7IGgsIENvbXBvbmVudCB9IGZyb20gJ3ByZWFjdCc7XG5cbi8qKiBAanN4IGggKi9cblxuZnVuY3Rpb24gTGlzdChwcm9wcykge1xuICAgIGxldCB7IHJvdXRlLCB1cmxzLCBpdGVtcywgZmllbGQsIHBhZ2VOYW1lIH0gPSBwcm9wcztcbiAgICBpZiAodXJscykge1xuICAgICAgICBpZiAodHlwZW9mKHVybHMpID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgaWYgKGl0ZW1zKSB7XG4gICAgICAgICAgICAgICAgaXRlbXMgPSBbIGl0ZW1zIF07XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGl0ZW1zID0gWyB7IHVybDogdXJscywgcGVuZGluZzogdHJ1ZSB9IF07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAodXJscyBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgICAgICBpdGVtcyA9IHVybHMubWFwKCh1cmwsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgdmFyIGl0ZW0gPSAoaXRlbXMpID8gaXRlbXNbaW5kZXhdIDogbnVsbDtcbiAgICAgICAgICAgICAgICBpZiAoIWl0ZW0pIHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbSA9IHsgdXJsLCBwZW5kaW5nOiB0cnVlIH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBpdGVtO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKCFpdGVtcykge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgaWYgKGl0ZW1zLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gPHVsIGNsYXNzTmFtZT1cImVtcHR5XCI+PGxpPjxzcGFuPm5vbmU8L3NwYW4+PC9saT48L3VsPjtcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgICAgPHVsPlxuICAgICAgICB7XG4gICAgICAgICAgICBpdGVtcy5tYXAoKGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgaWQgPSByb3V0ZS5leHRyYWN0SUQoaXRlbS51cmwpO1xuICAgICAgICAgICAgICAgIGxldCB1cmwgPSByb3V0ZS5maW5kKHBhZ2VOYW1lLCB7IGlkIH0pO1xuICAgICAgICAgICAgICAgIGxldCB0ZXh0ID0gaXRlbS5wZW5kaW5nID8gJy4uLicgOiBpdGVtW2ZpZWxkXTtcbiAgICAgICAgICAgICAgICBsZXQgbGlua1Byb3BzID0ge1xuICAgICAgICAgICAgICAgICAgICBocmVmOiB1cmwsXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogKGl0ZW0ucGVuZGluZykgPyAncGVuZGluZycgOiB1bmRlZmluZWQsXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICByZXR1cm4gPGxpPjxhIHsuLi5saW5rUHJvcHN9Pnt0ZXh0fTwvYT48L2xpPjtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgICAgPC91bD5cbiAgICApO1xufVxuXG5MaXN0LmRlZmF1bHRQcm9wcyA9IHtcbiAgICBmaWVsZDogJ25hbWUnXG59O1xuXG5MaXN0LmRpc3BsYXlOYW1lID0gJ0xpc3QnO1xuXG5leHBvcnQge1xuICAgIExpc3QgYXMgZGVmYXVsdCxcbiAgICBMaXN0XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vd2lkZ2V0cy9saXN0LmpzeCIsImltcG9ydCB7IGgsIENvbXBvbmVudCB9IGZyb20gJ3ByZWFjdCc7XG5cbi8qKiBAanN4IGggKi9cblxuZnVuY3Rpb24gTG9hZGluZygpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvYWRpbmdcIj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFiIGZhLWVtcGlyZSBmYS1zcGluXCIvPiBMb2FkaW5nXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cblxuTG9hZGluZy5kaXNwbGF5TmFtZSA9ICdMb2FkaW5nJztcblxuZXhwb3J0IHtcbiAgICBMb2FkaW5nIGFzIGRlZmF1bHQsXG4gICAgTG9hZGluZ1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3dpZGdldHMvbG9hZGluZy5qc3giXSwic291cmNlUm9vdCI6IiJ9