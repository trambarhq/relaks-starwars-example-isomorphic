exports.ids = ["character-page"];
exports.modules = {

/***/ "./pages/character-page.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.CharacterPageSync = exports.CharacterPage = exports.default = undefined;

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

var CharacterPage = function (_AsyncComponent) {
    (0, _inherits3.default)(CharacterPage, _AsyncComponent);

    function CharacterPage() {
        (0, _classCallCheck3.default)(this, CharacterPage);
        return (0, _possibleConstructorReturn3.default)(this, (CharacterPage.__proto__ || (0, _getPrototypeOf2.default)(CharacterPage)).apply(this, arguments));
    }

    (0, _createClass3.default)(CharacterPage, [{
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
                                    person: null,
                                    homeworld: null,
                                    films: null,
                                    species: null,
                                    vehicles: null,
                                    starships: null,
                                    route: route
                                };

                                meanwhile.show((0, _preact.h)(CharacterPageSync, props));
                                _context.next = 5;
                                return swapi.fetchOne('/people/' + route.params.id + '/');

                            case 5:
                                props.person = _context.sent;

                                meanwhile.show((0, _preact.h)(CharacterPageSync, props));
                                _context.next = 9;
                                return swapi.fetchMultiple(props.person.films, { partial: 0.4 });

                            case 9:
                                props.films = _context.sent;

                                meanwhile.show((0, _preact.h)(CharacterPageSync, props));
                                _context.next = 13;
                                return swapi.fetchMultiple(props.person.species, { partial: 0.4 });

                            case 13:
                                props.species = _context.sent;

                                meanwhile.show((0, _preact.h)(CharacterPageSync, props));
                                _context.next = 17;
                                return swapi.fetchOne(props.person.homeworld);

                            case 17:
                                props.homeworld = _context.sent;

                                meanwhile.show((0, _preact.h)(CharacterPageSync, props));
                                _context.next = 21;
                                return swapi.fetchMultiple(props.person.vehicles, { partial: 0.4 });

                            case 21:
                                props.vehicles = _context.sent;

                                meanwhile.show((0, _preact.h)(CharacterPageSync, props));
                                _context.next = 25;
                                return swapi.fetchMultiple(props.person.starships, { partial: 0.4 });

                            case 25:
                                props.starships = _context.sent;

                                meanwhile.show((0, _preact.h)(CharacterPageSync, props));
                                return _context.abrupt('return', (0, _preact.h)(CharacterPageSync, props));

                            case 28:
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
    return CharacterPage;
}(_preact2.AsyncComponent);

CharacterPage.displayName = 'CharacterPage';

var CharacterPageSync = function (_Component) {
    (0, _inherits3.default)(CharacterPageSync, _Component);

    function CharacterPageSync() {
        (0, _classCallCheck3.default)(this, CharacterPageSync);
        return (0, _possibleConstructorReturn3.default)(this, (CharacterPageSync.__proto__ || (0, _getPrototypeOf2.default)(CharacterPageSync)).apply(this, arguments));
    }

    (0, _createClass3.default)(CharacterPageSync, [{
        key: 'render',


        /**
         * Render the component, making best effort using what props are given
         *
         * @return {VNode}
         */
        value: function render() {
            var _props2 = this.props,
                route = _props2.route,
                person = _props2.person,
                homeworld = _props2.homeworld,
                films = _props2.films,
                species = _props2.species,
                vehicles = _props2.vehicles,
                starships = _props2.starships;

            if (!person) {
                return (0, _preact.h)(_loading2.default, null);
            }
            return (0, _preact.h)(
                'div',
                { className: 'character-page' },
                (0, _preact.h)(
                    'h1',
                    null,
                    person.name
                ),
                (0, _preact.h)(
                    'div',
                    null,
                    'Height: ',
                    person.height,
                    ' cm'
                ),
                (0, _preact.h)(
                    'div',
                    null,
                    'Mass: ',
                    person.mass,
                    ' kg'
                ),
                (0, _preact.h)(
                    'div',
                    null,
                    'Hair color: ',
                    person.hair_color
                ),
                (0, _preact.h)(
                    'div',
                    null,
                    'Skin color: ',
                    person.skin_color
                ),
                (0, _preact.h)(
                    'div',
                    null,
                    'Hair color: ',
                    person.hair_color
                ),
                (0, _preact.h)(
                    'div',
                    null,
                    'Eye color: ',
                    person.eye_color
                ),
                (0, _preact.h)(
                    'div',
                    null,
                    'Birth year: ',
                    person.birth_year
                ),
                (0, _preact.h)(
                    'h2',
                    null,
                    'Homeworld'
                ),
                (0, _preact.h)(_list.List, { urls: person.homeworld, items: homeworld, pageName: 'planet-summary', route: route }),
                (0, _preact.h)(
                    'h2',
                    null,
                    'Films'
                ),
                (0, _preact.h)(_list.List, { urls: person.films, items: films, field: 'title', pageName: 'film-summary', route: route }),
                (0, _preact.h)(
                    'h2',
                    null,
                    'Species'
                ),
                (0, _preact.h)(_list.List, { urls: person.species, items: species, pageName: 'species-summary', route: route }),
                (0, _preact.h)(
                    'h2',
                    null,
                    'Vehicles'
                ),
                (0, _preact.h)(_list.List, { urls: person.vehicles, items: vehicles, pageName: 'vehicle-summary', route: route }),
                (0, _preact.h)(
                    'h2',
                    null,
                    'Starships'
                ),
                (0, _preact.h)(_list.List, { urls: person.starships, items: starships, pageName: 'starship-summary', route: route })
            );
        }
    }]);
    return CharacterPageSync;
}(_preact.Component);

CharacterPageSync.displayName = 'CharacterPageSync';
exports.default = CharacterPage;
exports.CharacterPage = CharacterPage;
exports.CharacterPageSync = CharacterPageSync;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9jaGFyYWN0ZXItcGFnZS5qc3giLCJ3ZWJwYWNrOi8vLy4vd2lkZ2V0cy9saXN0LmpzeCIsIndlYnBhY2s6Ly8vLi93aWRnZXRzL2xvYWRpbmcuanN4Il0sIm5hbWVzIjpbIkNoYXJhY3RlclBhZ2UiLCJtZWFud2hpbGUiLCJwcm9wcyIsInJvdXRlIiwic3dhcGkiLCJwZXJzb24iLCJob21ld29ybGQiLCJmaWxtcyIsInNwZWNpZXMiLCJ2ZWhpY2xlcyIsInN0YXJzaGlwcyIsInNob3ciLCJmZXRjaE9uZSIsInBhcmFtcyIsImlkIiwiZmV0Y2hNdWx0aXBsZSIsInBhcnRpYWwiLCJBc3luY0NvbXBvbmVudCIsImRpc3BsYXlOYW1lIiwiQ2hhcmFjdGVyUGFnZVN5bmMiLCJuYW1lIiwiaGVpZ2h0IiwibWFzcyIsImhhaXJfY29sb3IiLCJza2luX2NvbG9yIiwiZXllX2NvbG9yIiwiYmlydGhfeWVhciIsIkNvbXBvbmVudCIsImRlZmF1bHQiLCJMaXN0IiwidXJscyIsIml0ZW1zIiwiZmllbGQiLCJwYWdlTmFtZSIsInVybCIsInBlbmRpbmciLCJBcnJheSIsIm1hcCIsImluZGV4IiwiaXRlbSIsImxlbmd0aCIsImV4dHJhY3RJRCIsImZpbmQiLCJ0ZXh0IiwibGlua1Byb3BzIiwiaHJlZiIsImNsYXNzTmFtZSIsInVuZGVmaW5lZCIsImRlZmF1bHRQcm9wcyIsIkxvYWRpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7QUFFQTs7SUFFTUEsYTs7Ozs7Ozs7Ozs7O0FBR0Y7Ozs7Ozs7O2lIQU9rQkMsUzs7Ozs7Ozt5Q0FDUyxLQUFLQyxLLEVBQXRCQyxLLFVBQUFBLEssRUFBT0MsSyxVQUFBQSxLO0FBQ1RGLHFDLEdBQVE7QUFDUkcsNENBQVEsSUFEQTtBQUVSQywrQ0FBVyxJQUZIO0FBR1JDLDJDQUFPLElBSEM7QUFJ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S0FBS1gsTUFBTXNDLFNBQU4sQ0FBZ0JGLEtBQUtMLEdBQXJCLENBQVQ7QUFDQSxnQkFBSUEsTUFBTS9CLE1BQU11QyxJQUFOLENBQVdULFFBQVgsRUFBcUIsRUFBRW5CLE1BQUYsRUFBckIsQ0FBVjtBQUNBLGdCQUFJNkIsT0FBT0osS0FBS0osT0FBTCxHQUFlLEtBQWYsR0FBdUJJLEtBQUtQLEtBQUwsQ0FBbEM7QUFDQSxnQkFBSVksWUFBWTtBQUNaQyxzQkFBTVgsR0FETTtBQUVaWSwyQkFBWVAsS0FBS0osT0FBTixHQUFpQixTQUFqQixHQUE2Qlk7QUFGNUIsYUFBaEI7QUFJQSxtQkFBTztBQUFBO0FBQUE7QUFBSTtBQUFBO0FBQU9ILDZCQUFQO0FBQW1CRDtBQUFuQjtBQUFKLGFBQVA7QUFDSCxTQVREO0FBRkosS0FESjtBQWdCSDs7QUFFRGQsS0FBS21CLFlBQUwsR0FBb0I7QUFDaEJoQixXQUFPO0FBRFMsQ0FBcEI7O0FBSUFILEtBQUtYLFdBQUwsR0FBbUIsTUFBbkI7O1FBR1lVLE8sR0FBUkMsSTtRQUNBQSxJLEdBQUFBLEk7Ozs7Ozs7Ozs7Ozs7OztBQ3ZESjs7QUFFQTs7QUFFQSxTQUFTb0IsT0FBVCxHQUFtQjtBQUNmLFdBQ0k7QUFBQTtBQUFBLFVBQUssV0FBVSxTQUFmO0FBQ0k7QUFBQTtBQUFBO0FBQ0ksa0NBQUcsV0FBVSx1QkFBYixHQURKO0FBQUE7QUFBQTtBQURKLEtBREo7QUFPSDs7QUFFREEsUUFBUS9CLFdBQVIsR0FBc0IsU0FBdEI7O1FBR2VVLE8sR0FBWHFCLE87UUFDQUEsTyxHQUFBQSxPIiwiZmlsZSI6ImNoYXJhY3Rlci1wYWdlLmFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGgsIENvbXBvbmVudCB9IGZyb20gJ3ByZWFjdCc7XG5pbXBvcnQgeyBBc3luY0NvbXBvbmVudCB9IGZyb20gJ3JlbGFrcy9wcmVhY3QnO1xuaW1wb3J0IHsgTGlzdCB9IGZyb20gJ3dpZGdldHMvbGlzdCc7XG5pbXBvcnQgTG9hZGluZyBmcm9tICd3aWRnZXRzL2xvYWRpbmcnO1xuXG4vKiogQGpzeCBoICovXG5cbmNsYXNzIENoYXJhY3RlclBhZ2UgZXh0ZW5kcyBBc3luY0NvbXBvbmVudCB7XG4gICAgc3RhdGljIGRpc3BsYXlOYW1lID0gJ0NoYXJhY3RlclBhZ2UnO1xuXG4gICAgLyoqXG4gICAgICogUmV0cmlldmUgcmVtb3RlIGRhdGEgYW5kIHJlbmRlciB0aGUgc3luY2hyb25pemUgaGFsZiBvZiB0aGlzIGNvbXBvbmVudFxuICAgICAqXG4gICAgICogQHBhcmFtICB7TWVhbndoaWxlfSAgbWVhbndoaWxlXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtWTm9kZX1cbiAgICAgKi9cbiAgICBhc3luYyByZW5kZXJBc3luYyhtZWFud2hpbGUpIHtcbiAgICAgICAgbGV0IHsgcm91dGUsIHN3YXBpIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICBsZXQgcHJvcHMgPSB7XG4gICAgICAgICAgICBwZXJzb246IG51bGwsXG4gICAgICAgICAgICBob21ld29ybGQ6IG51bGwsXG4gICAgICAgICAgICBmaWxtczogbnVsbCxcbiAgICAgICAgICAgIHNwZWNpZXM6IG51bGwsXG4gICAgICAgICAgICB2ZWhpY2xlczogbnVsbCxcbiAgICAgICAgICAgIHN0YXJzaGlwczogbnVsbCxcbiAgICAgICAgICAgIHJvdXRlOiByb3V0ZSxcbiAgICAgICAgfTtcbiAgICAgICAgbWVhbndoaWxlLnNob3coPENoYXJhY3RlclBhZ2VTeW5jIHsuLi5wcm9wc30gLz4pO1xuICAgICAgICBwcm9wcy5wZXJzb24gPSBhd2FpdCBzd2FwaS5mZXRjaE9uZShgL3Blb3BsZS8ke3JvdXRlLnBhcmFtcy5pZH0vYCk7XG4gICAgICAgIG1lYW53aGlsZS5zaG93KDxDaGFyYWN0ZXJQYWdlU3luYyB7Li4ucHJvcHN9IC8+KTtcbiAgICAgICAgcHJvcHMuZmlsbXMgPSBhd2FpdCBzd2FwaS5mZXRjaE11bHRpcGxlKHByb3BzLnBlcnNvbi5maWxtcywgeyBwYXJ0aWFsOiAwLjQgfSk7XG4gICAgICAgIG1lYW53aGlsZS5zaG93KDxDaGFyYWN0ZXJQYWdlU3luYyB7Li4ucHJvcHN9IC8+KTtcbiAgICAgICAgcHJvcHMuc3BlY2llcyA9IGF3YWl0IHN3YXBpLmZldGNoTXVsdGlwbGUocHJvcHMucGVyc29uLnNwZWNpZXMsIHsgcGFydGlhbDogMC40IH0pO1xuICAgICAgICBtZWFud2hpbGUuc2hvdyg8Q2hhcmFjdGVyUGFnZVN5bmMgey4uLnByb3BzfSAvPik7XG4gICAgICAgIHByb3BzLmhvbWV3b3JsZCA9IGF3YWl0IHN3YXBpLmZldGNoT25lKHByb3BzLnBlcnNvbi5ob21ld29ybGQpO1xuICAgICAgICBtZWFud2hpbGUuc2hvdyg8Q2hhcmFjdGVyUGFnZVN5bmMgey4uLnByb3BzfSAvPik7XG4gICAgICAgIHByb3BzLnZlaGljbGVzID0gYXdhaXQgc3dhcGkuZmV0Y2hNdWx0aXBsZShwcm9wcy5wZXJzb24udmVoaWNsZXMsIHsgcGFydGlhbDogMC40IH0pO1xuICAgICAgICBtZWFud2hpbGUuc2hvdyg8Q2hhcmFjdGVyUGFnZVN5bmMgey4uLnByb3BzfSAvPik7XG4gICAgICAgIHByb3BzLnN0YXJzaGlwcyA9IGF3YWl0IHN3YXBpLmZldGNoTXVsdGlwbGUocHJvcHMucGVyc29uLnN0YXJzaGlwcywgeyBwYXJ0aWFsOiAwLjQgfSk7XG4gICAgICAgIG1lYW53aGlsZS5zaG93KDxDaGFyYWN0ZXJQYWdlU3luYyB7Li4ucHJvcHN9IC8+KTtcbiAgICAgICAgcmV0dXJuIDxDaGFyYWN0ZXJQYWdlU3luYyB7Li4ucHJvcHN9IC8+O1xuICAgIH1cbn1cblxuY2xhc3MgQ2hhcmFjdGVyUGFnZVN5bmMgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIHN0YXRpYyBkaXNwbGF5TmFtZSA9ICdDaGFyYWN0ZXJQYWdlU3luYyc7XG5cbiAgICAvKipcbiAgICAgKiBSZW5kZXIgdGhlIGNvbXBvbmVudCwgbWFraW5nIGJlc3QgZWZmb3J0IHVzaW5nIHdoYXQgcHJvcHMgYXJlIGdpdmVuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtWTm9kZX1cbiAgICAgKi9cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCB7IHJvdXRlLCBwZXJzb24sIGhvbWV3b3JsZCwgZmlsbXMsIHNwZWNpZXMsIHZlaGljbGVzLCBzdGFyc2hpcHMgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGlmICghcGVyc29uKSB7XG4gICAgICAgICAgICByZXR1cm4gPExvYWRpbmcgLz47XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hhcmFjdGVyLXBhZ2VcIj5cbiAgICAgICAgICAgICAgICA8aDE+e3BlcnNvbi5uYW1lfTwvaDE+XG4gICAgICAgICAgICAgICAgPGRpdj5IZWlnaHQ6IHtwZXJzb24uaGVpZ2h0fSBjbTwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXY+TWFzczoge3BlcnNvbi5tYXNzfSBrZzwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXY+SGFpciBjb2xvcjoge3BlcnNvbi5oYWlyX2NvbG9yfTwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXY+U2tpbiBjb2xvcjoge3BlcnNvbi5za2luX2NvbG9yfTwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXY+SGFpciBjb2xvcjoge3BlcnNvbi5oYWlyX2NvbG9yfTwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXY+RXllIGNvbG9yOiB7cGVyc29uLmV5ZV9jb2xvcn08L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2PkJpcnRoIHllYXI6IHtwZXJzb24uYmlydGhfeWVhcn08L2Rpdj5cbiAgICAgICAgICAgICAgICA8aDI+SG9tZXdvcmxkPC9oMj5cbiAgICAgICAgICAgICAgICA8TGlzdCB1cmxzPXtwZXJzb24uaG9tZXdvcmxkfSBpdGVtcz17aG9tZXdvcmxkfSBwYWdlTmFtZT1cInBsYW5ldC1zdW1tYXJ5XCIgcm91dGU9e3JvdXRlfSAvPlxuICAgICAgICAgICAgICAgIDxoMj5GaWxtczwvaDI+XG4gICAgICAgICAgICAgICAgPExpc3QgdXJscz17cGVyc29uLmZpbG1zfSBpdGVtcz17ZmlsbXN9IGZpZWxkPVwidGl0bGVcIiBwYWdlTmFtZT1cImZpbG0tc3VtbWFyeVwiIHJvdXRlPXtyb3V0ZX0gLz5cbiAgICAgICAgICAgICAgICA8aDI+U3BlY2llczwvaDI+XG4gICAgICAgICAgICAgICAgPExpc3QgdXJscz17cGVyc29uLnNwZWNpZXN9IGl0ZW1zPXtzcGVjaWVzfSBwYWdlTmFtZT1cInNwZWNpZXMtc3VtbWFyeVwiIHJvdXRlPXtyb3V0ZX0gLz5cbiAgICAgICAgICAgICAgICA8aDI+VmVoaWNsZXM8L2gyPlxuICAgICAgICAgICAgICAgIDxMaXN0IHVybHM9e3BlcnNvbi52ZWhpY2xlc30gaXRlbXM9e3ZlaGljbGVzfSBwYWdlTmFtZT1cInZlaGljbGUtc3VtbWFyeVwiIHJvdXRlPXtyb3V0ZX0gLz5cbiAgICAgICAgICAgICAgICA8aDI+U3RhcnNoaXBzPC9oMj5cbiAgICAgICAgICAgICAgICA8TGlzdCB1cmxzPXtwZXJzb24uc3RhcnNoaXBzfSBpdGVtcz17c3RhcnNoaXBzfSBwYWdlTmFtZT1cInN0YXJzaGlwLXN1bW1hcnlcIiByb3V0ZT17cm91dGV9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCB7XG4gICAgQ2hhcmFjdGVyUGFnZSBhcyBkZWZhdWx0LFxuICAgIENoYXJhY3RlclBhZ2UsXG4gICAgQ2hhcmFjdGVyUGFnZVN5bmMsXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXMvY2hhcmFjdGVyLXBhZ2UuanN4IiwiaW1wb3J0IHsgaCwgQ29tcG9uZW50IH0gZnJvbSAncHJlYWN0JztcblxuLyoqIEBqc3ggaCAqL1xuXG5mdW5jdGlvbiBMaXN0KHByb3BzKSB7XG4gICAgbGV0IHsgcm91dGUsIHVybHMsIGl0ZW1zLCBmaWVsZCwgcGFnZU5hbWUgfSA9IHByb3BzO1xuICAgIGlmICh1cmxzKSB7XG4gICAgICAgIGlmICh0eXBlb2YodXJscykgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICBpZiAoaXRlbXMpIHtcbiAgICAgICAgICAgICAgICBpdGVtcyA9IFsgaXRlbXMgXTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaXRlbXMgPSBbIHsgdXJsOiB1cmxzLCBwZW5kaW5nOiB0cnVlIH0gXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmICh1cmxzIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgICAgICAgIGl0ZW1zID0gdXJscy5tYXAoKHVybCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICB2YXIgaXRlbSA9IChpdGVtcykgPyBpdGVtc1tpbmRleF0gOiBudWxsO1xuICAgICAgICAgICAgICAgIGlmICghaXRlbSkge1xuICAgICAgICAgICAgICAgICAgICBpdGVtID0geyB1cmwsIHBlbmRpbmc6IHRydWUgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW07XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoIWl0ZW1zKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBpZiAoaXRlbXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJldHVybiA8dWwgY2xhc3NOYW1lPVwiZW1wdHlcIj48bGk+PHNwYW4+bm9uZTwvc3Bhbj48L2xpPjwvdWw+O1xuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgICA8dWw+XG4gICAgICAgIHtcbiAgICAgICAgICAgIGl0ZW1zLm1hcCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBpZCA9IHJvdXRlLmV4dHJhY3RJRChpdGVtLnVybCk7XG4gICAgICAgICAgICAgICAgbGV0IHVybCA9IHJvdXRlLmZpbmQocGFnZU5hbWUsIHsgaWQgfSk7XG4gICAgICAgICAgICAgICAgbGV0IHRleHQgPSBpdGVtLnBlbmRpbmcgPyAnLi4uJyA6IGl0ZW1bZmllbGRdO1xuICAgICAgICAgICAgICAgIGxldCBsaW5rUHJvcHMgPSB7XG4gICAgICAgICAgICAgICAgICAgIGhyZWY6IHVybCxcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lOiAoaXRlbS5wZW5kaW5nKSA/ICdwZW5kaW5nJyA6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIHJldHVybiA8bGk+PGEgey4uLmxpbmtQcm9wc30+e3RleHR9PC9hPjwvbGk+O1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgICA8L3VsPlxuICAgICk7XG59XG5cbkxpc3QuZGVmYXVsdFByb3BzID0ge1xuICAgIGZpZWxkOiAnbmFtZSdcbn07XG5cbkxpc3QuZGlzcGxheU5hbWUgPSAnTGlzdCc7XG5cbmV4cG9ydCB7XG4gICAgTGlzdCBhcyBkZWZhdWx0LFxuICAgIExpc3Rcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi93aWRnZXRzL2xpc3QuanN4IiwiaW1wb3J0IHsgaCwgQ29tcG9uZW50IH0gZnJvbSAncHJlYWN0JztcblxuLyoqIEBqc3ggaCAqL1xuXG5mdW5jdGlvbiBMb2FkaW5nKCkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9hZGluZ1wiPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYWIgZmEtZW1waXJlIGZhLXNwaW5cIi8+IExvYWRpbmdcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuXG5Mb2FkaW5nLmRpc3BsYXlOYW1lID0gJ0xvYWRpbmcnO1xuXG5leHBvcnQge1xuICAgIExvYWRpbmcgYXMgZGVmYXVsdCxcbiAgICBMb2FkaW5nXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vd2lkZ2V0cy9sb2FkaW5nLmpzeCJdLCJzb3VyY2VSb290IjoiIn0=