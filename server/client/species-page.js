exports.ids = ["species-page"];
exports.modules = {

/***/ "./pages/species-page.jsx":
/*!********************************!*\
  !*** ./pages/species-page.jsx ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SpeciesPage = exports.default = undefined;

var _regenerator = __webpack_require__(/*! babel-runtime/regenerator */ "../node_modules/babel-runtime/regenerator/index.js");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _slicedToArray2 = __webpack_require__(/*! babel-runtime/helpers/slicedToArray */ "../node_modules/babel-runtime/helpers/slicedToArray.js");

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _asyncToGenerator2 = __webpack_require__(/*! babel-runtime/helpers/asyncToGenerator */ "../node_modules/babel-runtime/helpers/asyncToGenerator.js");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var SpeciesPage = function () {
    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(props) {
        var route, swapi, _useProgress, _useProgress2, show, species, films, people, homeworld, render;

        return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        render = function render() {
                            if (!species) {
                                show(_react2.default.createElement(_loading2.default, null));
                            } else {
                                show(_react2.default.createElement(
                                    'div',
                                    null,
                                    _react2.default.createElement(
                                        'h1',
                                        null,
                                        species.name
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        null,
                                        'Classification: ',
                                        species.classification
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        null,
                                        'Designation: ',
                                        species.designation
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        null,
                                        'Average height: ',
                                        species.average_height
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        null,
                                        'Skin colors: ',
                                        species.skin_colors
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        null,
                                        'Hair colors: ',
                                        species.hair_colors
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        null,
                                        'Eye colors: ',
                                        species.eye_colors
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        null,
                                        'Average lifespan: ',
                                        species.average_lifespan
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        null,
                                        'Language: ',
                                        species.language
                                    ),
                                    _react2.default.createElement(
                                        'h2',
                                        null,
                                        'Homeworld'
                                    ),
                                    _react2.default.createElement(_list.List, { urls: species.homeworld, items: homeworld, pageName: 'planet-summary', route: route }),
                                    _react2.default.createElement(
                                        'h2',
                                        null,
                                        'Members'
                                    ),
                                    _react2.default.createElement(_list.List, { urls: species.people, items: people, pageName: 'character-summary', route: route }),
                                    _react2.default.createElement(
                                        'h2',
                                        null,
                                        'Films'
                                    ),
                                    _react2.default.createElement(_list.List, { urls: species.films, items: films, field: 'title', pageName: 'film-summary', route: route })
                                ));
                            }
                        };

                        route = props.route, swapi = props.swapi;
                        _useProgress = (0, _hooks.useProgress)(), _useProgress2 = (0, _slicedToArray3.default)(_useProgress, 1), show = _useProgress2[0];


                        render();
                        _context.next = 6;
                        return swapi.fetchOne('/species/' + route.params.id + '/');

                    case 6:
                        species = _context.sent;

                        render();
                        _context.next = 10;
                        return swapi.fetchMultiple(species.films, { minimum: '60%' });

                    case 10:
                        films = _context.sent;

                        render();
                        _context.next = 14;
                        return swapi.fetchMultiple(species.people, { minimum: '60%' });

                    case 14:
                        people = _context.sent;

                        render();
                        _context.next = 18;
                        return swapi.fetchOne(species.homeworld);

                    case 18:
                        homeworld = _context.sent;

                        render();

                    case 20:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, this);
    }));

    return function SpeciesPage(_x) {
        return _ref.apply(this, arguments);
    };
}();

var _react = __webpack_require__(/*! react */ "../node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _hooks = __webpack_require__(/*! relaks/hooks */ "../../relaks/hooks.js");

var _hooks2 = _interopRequireDefault(_hooks);

var _list = __webpack_require__(/*! widgets/list */ "./widgets/list.jsx");

var _loading = __webpack_require__(/*! widgets/loading */ "./widgets/loading.jsx");

var _loading2 = _interopRequireDefault(_loading);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var asyncComponent = (0, _hooks2.default)(SpeciesPage);

exports.default = asyncComponent;
exports.SpeciesPage = asyncComponent;

/***/ }),

/***/ "./widgets/list.jsx":
/*!**************************!*\
  !*** ./widgets/list.jsx ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.List = exports.default = undefined;

var _react = __webpack_require__(/*! react */ "../node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function List(props) {
    var route = props.route,
        urls = props.urls,
        items = props.items,
        field = props.field,
        pageName = props.pageName;

    if (urls) {
        // accept single URL and object
        if (typeof urls === 'string') {
            urls = [urls];
            items = [items];
        }
        // deal with holes in the data set
        items = urls.map(function (url, index) {
            var item = items ? items[index] : null;
            if (!item) {
                item = { url: url, pending: true };
            }
            return item;
        });
    }
    if (!items) {
        return null;
    }
    if (items.length === 0) {
        return _react2.default.createElement(
            'ul',
            { className: 'empty' },
            _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                    'span',
                    null,
                    'none'
                )
            )
        );
    }
    return _react2.default.createElement(
        'ul',
        null,
        items.map(renderItem)
    );

    function renderItem(item, i) {
        var id = route.extractID(item.url);
        var url = route.find(pageName, { id: id });
        var text = item.pending ? '...' : item[field];
        var linkProps = {
            href: url,
            className: item.pending ? 'pending' : undefined
        };
        return _react2.default.createElement(
            'li',
            { key: i },
            _react2.default.createElement(
                'a',
                linkProps,
                text
            )
        );
    }
}

List.defaultProps = {
    field: 'name'
};

exports.default = List;
exports.List = List;

/***/ }),

/***/ "./widgets/loading.jsx":
/*!*****************************!*\
  !*** ./widgets/loading.jsx ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Loading = exports.default = undefined;

var _react = __webpack_require__(/*! react */ "../node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Loading() {
    return _react2.default.createElement(
        "div",
        { className: "loading" },
        _react2.default.createElement(
            "div",
            null,
            _react2.default.createElement("i", { className: "fab fa-empire fa-spin" }),
            " Loading"
        )
    );
}

exports.default = Loading;
exports.Loading = Loading;

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9zcGVjaWVzLXBhZ2UuanN4Iiwid2VicGFjazovLy8uL3dpZGdldHMvbGlzdC5qc3giLCJ3ZWJwYWNrOi8vLy4vd2lkZ2V0cy9sb2FkaW5nLmpzeCJdLCJuYW1lcyI6WyJwcm9wcyIsInJlbmRlciIsInNwZWNpZXMiLCJzaG93IiwibmFtZSIsImNsYXNzaWZpY2F0aW9uIiwiZGVzaWduYXRpb24iLCJhdmVyYWdlX2hlaWdodCIsInNraW5fY29sb3JzIiwiaGFpcl9jb2xvcnMiLCJleWVfY29sb3JzIiwiYXZlcmFnZV9saWZlc3BhbiIsImxhbmd1YWdlIiwiaG9tZXdvcmxkIiwicm91dGUiLCJwZW9wbGUiLCJmaWxtcyIsInN3YXBpIiwiZmV0Y2hPbmUiLCJwYXJhbXMiLCJpZCIsImZldGNoTXVsdGlwbGUiLCJtaW5pbXVtIiwiU3BlY2llc1BhZ2UiLCJhc3luY0NvbXBvbmVudCIsImRlZmF1bHQiLCJMaXN0IiwidXJscyIsIml0ZW1zIiwiZmllbGQiLCJwYWdlTmFtZSIsIm1hcCIsInVybCIsImluZGV4IiwiaXRlbSIsInBlbmRpbmciLCJsZW5ndGgiLCJyZW5kZXJJdGVtIiwiaSIsImV4dHJhY3RJRCIsImZpbmQiLCJ0ZXh0IiwibGlua1Byb3BzIiwiaHJlZiIsImNsYXNzTmFtZSIsInVuZGVmaW5lZCIsImRlZmF1bHRQcm9wcyIsIkxvYWRpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7d0ZBS0EsaUJBQTJCQSxLQUEzQjtBQUFBLGdHQWNhQyxNQWRiOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBY2FBLDhCQWRiLFlBY2FBLE1BZGIsR0Fjc0I7QUFDZCxnQ0FBSSxDQUFDQyxPQUFMLEVBQWM7QUFDVkMscUNBQUssOEJBQUMsaUJBQUQsT0FBTDtBQUNILDZCQUZELE1BRU87QUFDSEEscUNBQ0k7QUFBQTtBQUFBO0FBQ0k7QUFBQTtBQUFBO0FBQUtELGdEQUFRRTtBQUFiLHFDQURKO0FB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QUFBWTtBQUFBO0FBQU9JLHlCQUFQO0FBQW1CRDtBQUFuQjtBQUFaLFNBQVA7QUFDSDtBQUNKOztBQUVEZixLQUFLb0IsWUFBTCxHQUFvQjtBQUNoQmpCLFdBQU87QUFEUyxDQUFwQjs7UUFLWUosTyxHQUFSQyxJO1FBQ0FBLEksR0FBQUEsSTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdDSjs7Ozs7O0FBRUEsU0FBU3FCLE9BQVQsR0FBbUI7QUFDZixXQUNJO0FBQUE7QUFBQSxVQUFLLFdBQVUsU0FBZjtBQUNJO0FBQUE7QUFBQTtBQUNJLGlEQUFHLFdBQVUsdUJBQWIsR0FESjtBQUFBO0FBQUE7QUFESixLQURKO0FBT0g7O1FBR2N0QixPLEdBQVhzQixPO1FBQ0FBLE8sR0FBQUEsTyIsImZpbGUiOiJzcGVjaWVzLXBhZ2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlbGFrcywgeyB1c2VQcm9ncmVzcyB9IGZyb20gJ3JlbGFrcy9ob29rcyc7XG5pbXBvcnQgeyBMaXN0IH0gZnJvbSAnd2lkZ2V0cy9saXN0JztcbmltcG9ydCBMb2FkaW5nIGZyb20gJ3dpZGdldHMvbG9hZGluZyc7XG5cbmFzeW5jIGZ1bmN0aW9uIFNwZWNpZXNQYWdlKHByb3BzKSB7XG4gICAgY29uc3QgeyByb3V0ZSwgc3dhcGkgfSA9IHByb3BzO1xuICAgIGNvbnN0IFsgc2hvdyBdID0gdXNlUHJvZ3Jlc3MoKTtcblxuICAgIHJlbmRlcigpO1xuICAgIGNvbnN0IHNwZWNpZXMgPSBhd2FpdCBzd2FwaS5mZXRjaE9uZShgL3NwZWNpZXMvJHtyb3V0ZS5wYXJhbXMuaWR9L2ApO1xuICAgIHJlbmRlcigpO1xuICAgIGNvbnN0IGZpbG1zID0gYXdhaXQgc3dhcGkuZmV0Y2hNdWx0aXBsZShzcGVjaWVzLmZpbG1zLCB7IG1pbmltdW06ICc2MCUnIH0pO1xuICAgIHJlbmRlcigpO1xuICAgIGNvbnN0IHBlb3BsZSA9IGF3YWl0IHN3YXBpLmZldGNoTXVsdGlwbGUoc3BlY2llcy5wZW9wbGUsIHsgbWluaW11bTogJzYwJScgfSk7XG4gICAgcmVuZGVyKCk7XG4gICAgY29uc3QgaG9tZXdvcmxkID0gYXdhaXQgc3dhcGkuZmV0Y2hPbmUoc3BlY2llcy5ob21ld29ybGQpO1xuICAgIHJlbmRlcigpO1xuXG4gICAgZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgICBpZiAoIXNwZWNpZXMpIHtcbiAgICAgICAgICAgIHNob3coPExvYWRpbmcgLz4pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2hvdyhcbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8aDE+e3NwZWNpZXMubmFtZX08L2gxPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PkNsYXNzaWZpY2F0aW9uOiB7c3BlY2llcy5jbGFzc2lmaWNhdGlvbn08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj5EZXNpZ25hdGlvbjoge3NwZWNpZXMuZGVzaWduYXRpb259PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+QXZlcmFnZSBoZWlnaHQ6IHtzcGVjaWVzLmF2ZXJhZ2VfaGVpZ2h0fTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlNraW4gY29sb3JzOiB7c3BlY2llcy5za2luX2NvbG9yc308L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj5IYWlyIGNvbG9yczoge3NwZWNpZXMuaGFpcl9jb2xvcnN9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+RXllIGNvbG9yczoge3NwZWNpZXMuZXllX2NvbG9yc308L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj5BdmVyYWdlIGxpZmVzcGFuOiB7c3BlY2llcy5hdmVyYWdlX2xpZmVzcGFufTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2Pkxhbmd1YWdlOiB7c3BlY2llcy5sYW5ndWFnZX08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGgyPkhvbWV3b3JsZDwvaDI+XG4gICAgICAgICAgICAgICAgICAgIDxMaXN0IHVybHM9e3NwZWNpZXMuaG9tZXdvcmxkfSBpdGVtcz17aG9tZXdvcmxkfSBwYWdlTmFtZT1cInBsYW5ldC1zdW1tYXJ5XCIgcm91dGU9e3JvdXRlfSAvPlxuICAgICAgICAgICAgICAgICAgICA8aDI+TWVtYmVyczwvaDI+XG4gICAgICAgICAgICAgICAgICAgIDxMaXN0IHVybHM9e3NwZWNpZXMucGVvcGxlfSBpdGVtcz17cGVvcGxlfSBwYWdlTmFtZT1cImNoYXJhY3Rlci1zdW1tYXJ5XCIgcm91dGU9e3JvdXRlfSAvPlxuICAgICAgICAgICAgICAgICAgICA8aDI+RmlsbXM8L2gyPlxuICAgICAgICAgICAgICAgICAgICA8TGlzdCB1cmxzPXtzcGVjaWVzLmZpbG1zfSBpdGVtcz17ZmlsbXN9IGZpZWxkPVwidGl0bGVcIiBwYWdlTmFtZT1cImZpbG0tc3VtbWFyeVwiIHJvdXRlPXtyb3V0ZX0gLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmNvbnN0IGFzeW5jQ29tcG9uZW50ID0gUmVsYWtzKFNwZWNpZXNQYWdlKTtcblxuZXhwb3J0IHtcbiAgICBhc3luY0NvbXBvbmVudCBhcyBkZWZhdWx0LFxuICAgIGFzeW5jQ29tcG9uZW50IGFzIFNwZWNpZXNQYWdlLFxufTtcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5cbmZ1bmN0aW9uIExpc3QocHJvcHMpIHtcbiAgICBsZXQgeyByb3V0ZSwgdXJscywgaXRlbXMsIGZpZWxkLCBwYWdlTmFtZSB9ID0gcHJvcHM7XG4gICAgaWYgKHVybHMpIHtcbiAgICAgICAgLy8gYWNjZXB0IHNpbmdsZSBVUkwgYW5kIG9iamVjdFxuICAgICAgICBpZiAodHlwZW9mKHVybHMpID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgdXJscyA9IFsgdXJscyBdO1xuICAgICAgICAgICAgaXRlbXMgPSBbIGl0ZW1zIF07XG4gICAgICAgIH1cbiAgICAgICAgLy8gZGVhbCB3aXRoIGhvbGVzIGluIHRoZSBkYXRhIHNldFxuICAgICAgICBpdGVtcyA9IHVybHMubWFwKCh1cmwsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBsZXQgaXRlbSA9IChpdGVtcykgPyBpdGVtc1tpbmRleF0gOiBudWxsO1xuICAgICAgICAgICAgaWYgKCFpdGVtKSB7XG4gICAgICAgICAgICAgICAgaXRlbSA9IHsgdXJsLCBwZW5kaW5nOiB0cnVlIH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gaXRlbTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGlmICghaXRlbXMpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGlmIChpdGVtcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuIDx1bCBjbGFzc05hbWU9XCJlbXB0eVwiPjxsaT48c3Bhbj5ub25lPC9zcGFuPjwvbGk+PC91bD47XG4gICAgfVxuICAgIHJldHVybiA8dWw+e2l0ZW1zLm1hcChyZW5kZXJJdGVtKX08L3VsPjtcblxuICAgIGZ1bmN0aW9uIHJlbmRlckl0ZW0oaXRlbSwgaSkge1xuICAgICAgICBjb25zdCBpZCA9IHJvdXRlLmV4dHJhY3RJRChpdGVtLnVybCk7XG4gICAgICAgIGNvbnN0IHVybCA9IHJvdXRlLmZpbmQocGFnZU5hbWUsIHsgaWQgfSk7XG4gICAgICAgIGNvbnN0IHRleHQgPSBpdGVtLnBlbmRpbmcgPyAnLi4uJyA6IGl0ZW1bZmllbGRdO1xuICAgICAgICBjb25zdCBsaW5rUHJvcHMgPSB7XG4gICAgICAgICAgICBocmVmOiB1cmwsXG4gICAgICAgICAgICBjbGFzc05hbWU6IChpdGVtLnBlbmRpbmcpID8gJ3BlbmRpbmcnIDogdW5kZWZpbmVkLFxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gPGxpIGtleT17aX0+PGEgey4uLmxpbmtQcm9wc30+e3RleHR9PC9hPjwvbGk+O1xuICAgIH1cbn1cblxuTGlzdC5kZWZhdWx0UHJvcHMgPSB7XG4gICAgZmllbGQ6ICduYW1lJ1xufTtcblxuZXhwb3J0IHtcbiAgICBMaXN0IGFzIGRlZmF1bHQsXG4gICAgTGlzdFxufTtcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5cbmZ1bmN0aW9uIExvYWRpbmcoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2FkaW5nXCI+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhYiBmYS1lbXBpcmUgZmEtc3BpblwiLz4gTG9hZGluZ1xuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cbmV4cG9ydCB7XG4gICAgTG9hZGluZyBhcyBkZWZhdWx0LFxuICAgIExvYWRpbmdcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9