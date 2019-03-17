(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["planet-page"],{

/***/ "./pages/planet-page.jsx":
/*!*******************************!*\
  !*** ./pages/planet-page.jsx ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.PlanetPage = exports.default = undefined;

var _regenerator = __webpack_require__(/*! babel-runtime/regenerator */ "../node_modules/babel-runtime/regenerator/index.js");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _slicedToArray2 = __webpack_require__(/*! babel-runtime/helpers/slicedToArray */ "../node_modules/babel-runtime/helpers/slicedToArray.js");

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _asyncToGenerator2 = __webpack_require__(/*! babel-runtime/helpers/asyncToGenerator */ "../node_modules/babel-runtime/helpers/asyncToGenerator.js");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var PlanetPage = function () {
    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(props) {
        var route, swapi, _useProgress, _useProgress2, show, planet, films, residents, render;

        return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        render = function render() {
                            if (!planet) {
                                show(_react2.default.createElement(_loading2.default, null));
                            } else {
                                show(_react2.default.createElement(
                                    'div',
                                    null,
                                    _react2.default.createElement(
                                        'h1',
                                        null,
                                        planet.name
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        null,
                                        'Diameter: ',
                                        planet.diameter,
                                        ' km'
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        null,
                                        'Rotation period: ',
                                        planet.rotation_period,
                                        ' hr'
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        null,
                                        'Orbital period: ',
                                        planet.orbital_period,
                                        ' days'
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        null,
                                        'Climate: ',
                                        planet.climate
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        null,
                                        'Gravity: ',
                                        planet.gravity
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        null,
                                        'Terrain: ',
                                        planet.terrain
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        null,
                                        'Surface water: ',
                                        planet.surface_water
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        null,
                                        'Population: ',
                                        planet.population
                                    ),
                                    _react2.default.createElement(
                                        'h2',
                                        null,
                                        'Residents'
                                    ),
                                    _react2.default.createElement(_list.List, { urls: planet.residents, items: residents, pageName: 'character-summary', route: route }),
                                    _react2.default.createElement(
                                        'h2',
                                        null,
                                        'Films'
                                    ),
                                    _react2.default.createElement(_list.List, { urls: planet.films, items: films, field: 'title', pageName: 'film-summary', route: route })
                                ));
                            }
                        };

                        route = props.route, swapi = props.swapi;
                        _useProgress = (0, _hooks.useProgress)(), _useProgress2 = (0, _slicedToArray3.default)(_useProgress, 1), show = _useProgress2[0];


                        render();
                        _context.next = 6;
                        return swapi.fetchOne('/planets/' + route.params.id + '/');

                    case 6:
                        planet = _context.sent;

                        render();
                        _context.next = 10;
                        return swapi.fetchMultiple(planet.films, { minimum: '60%' });

                    case 10:
                        films = _context.sent;

                        render();
                        _context.next = 14;
                        return swapi.fetchMultiple(planet.residents, { minimum: '60%' });

                    case 14:
                        residents = _context.sent;

                        render();

                    case 16:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, this);
    }));

    return function PlanetPage(_x) {
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

var asyncComponent = (0, _hooks2.default)(PlanetPage);

exports.default = asyncComponent;
exports.PlanetPage = asyncComponent;

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

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9wbGFuZXQtcGFnZS5qc3giLCJ3ZWJwYWNrOi8vLy4vd2lkZ2V0cy9saXN0LmpzeCIsIndlYnBhY2s6Ly8vLi93aWRnZXRzL2xvYWRpbmcuanN4Il0sIm5hbWVzIjpbInByb3BzIiwicmVuZGVyIiwicGxhbmV0Iiwic2hvdyIsIm5hbWUiLCJkaWFtZXRlciIsInJvdGF0aW9uX3BlcmlvZCIsIm9yYml0YWxfcGVyaW9kIiwiY2xpbWF0ZSIsImdyYXZpdHkiLCJ0ZXJyYWluIiwic3VyZmFjZV93YXRlciIsInBvcHVsYXRpb24iLCJyZXNpZGVudHMiLCJyb3V0ZSIsImZpbG1zIiwic3dhcGkiLCJmZXRjaE9uZSIsInBhcmFtcyIsImlkIiwiZmV0Y2hNdWx0aXBsZSIsIm1pbmltdW0iLCJQbGFuZXRQYWdlIiwiYXN5bmNDb21wb25lbnQiLCJkZWZhdWx0IiwiTGlzdCIsInVybHMiLCJpdGVtcyIsImZpZWxkIiwicGFnZU5hbWUiLCJtYXAiLCJ1cmwiLCJpbmRleCIsIml0ZW0iLCJwZW5kaW5nIiwibGVuZ3RoIiwicmVuZGVySXRlbSIsImkiLCJleHRyYWN0SUQiLCJmaW5kIiwidGV4dCIsImxpbmtQcm9wcyIsImhyZWYiLCJjbGFzc05hbWUiLCJ1bmRlZmluZWQiLCJkZWZhdWx0UHJvcHMiLCJMb2FkaW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7d0ZBS0EsaUJBQTBCQSxLQUExQjtBQUFBLHVGQVlhQyxNQVpiOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBWWFBLDhCQVpiLFlBWWFBLE1BWmIsR0FZc0I7QUFDZCxnQ0FBSSxDQUFDQyxNQUFMLEVBQWE7QUFDVEMscUNBQUssOEJBQUMsaUJBQUQsT0FBTDtBQUNILDZCQUZELE1BRU87QUFDSEEscUNBQ0k7QUFBQTtBQUFBO0FBQ0k7QUFBQTtBQUFBO0FBQUtELCtDQUFPRTtBQUFaLHFDQURKO0FBRUk7QUFBQTtBQUFBO0FBQUE7QUFBZ0JGLCtD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SyxXQUFVLFNBQWY7QUFDSTtBQUFBO0FBQUE7QUFDSSxpREFBRyxXQUFVLHVCQUFiLEdBREo7QUFBQTtBQUFBO0FBREosS0FESjtBQU9IOztRQUdjdEIsTyxHQUFYc0IsTztRQUNBQSxPLEdBQUFBLE8iLCJmaWxlIjoicGxhbmV0LXBhZ2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlbGFrcywgeyB1c2VQcm9ncmVzcyB9IGZyb20gJ3JlbGFrcy9ob29rcyc7XG5pbXBvcnQgeyBMaXN0IH0gZnJvbSAnd2lkZ2V0cy9saXN0JztcbmltcG9ydCBMb2FkaW5nIGZyb20gJ3dpZGdldHMvbG9hZGluZyc7XG5cbmFzeW5jIGZ1bmN0aW9uIFBsYW5ldFBhZ2UocHJvcHMpIHtcbiAgICBjb25zdCB7IHJvdXRlLCBzd2FwaSB9ID0gcHJvcHM7XG4gICAgY29uc3QgWyBzaG93IF0gPSB1c2VQcm9ncmVzcygpO1xuXG4gICAgcmVuZGVyKCk7XG4gICAgY29uc3QgcGxhbmV0ID0gYXdhaXQgc3dhcGkuZmV0Y2hPbmUoYC9wbGFuZXRzLyR7cm91dGUucGFyYW1zLmlkfS9gKTtcbiAgICByZW5kZXIoKTtcbiAgICBjb25zdCBmaWxtcyA9IGF3YWl0IHN3YXBpLmZldGNoTXVsdGlwbGUocGxhbmV0LmZpbG1zLCB7IG1pbmltdW06ICc2MCUnIH0pO1xuICAgIHJlbmRlcigpO1xuICAgIGNvbnN0IHJlc2lkZW50cyA9IGF3YWl0IHN3YXBpLmZldGNoTXVsdGlwbGUocGxhbmV0LnJlc2lkZW50cywgeyBtaW5pbXVtOiAnNjAlJyB9KTtcbiAgICByZW5kZXIoKTtcblxuICAgIGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgICAgaWYgKCFwbGFuZXQpIHtcbiAgICAgICAgICAgIHNob3coPExvYWRpbmcgLz4pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2hvdyhcbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8aDE+e3BsYW5ldC5uYW1lfTwvaDE+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+RGlhbWV0ZXI6IHtwbGFuZXQuZGlhbWV0ZXJ9IGttPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+Um90YXRpb24gcGVyaW9kOiB7cGxhbmV0LnJvdGF0aW9uX3BlcmlvZH0gaHI8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj5PcmJpdGFsIHBlcmlvZDoge3BsYW5ldC5vcmJpdGFsX3BlcmlvZH0gZGF5czwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PkNsaW1hdGU6IHtwbGFuZXQuY2xpbWF0ZX08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj5HcmF2aXR5OiB7cGxhbmV0LmdyYXZpdHl9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+VGVycmFpbjoge3BsYW5ldC50ZXJyYWlufTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlN1cmZhY2Ugd2F0ZXI6IHtwbGFuZXQuc3VyZmFjZV93YXRlcn08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj5Qb3B1bGF0aW9uOiB7cGxhbmV0LnBvcHVsYXRpb259PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxoMj5SZXNpZGVudHM8L2gyPlxuICAgICAgICAgICAgICAgICAgICA8TGlzdCB1cmxzPXtwbGFuZXQucmVzaWRlbnRzfSBpdGVtcz17cmVzaWRlbnRzfSBwYWdlTmFtZT1cImNoYXJhY3Rlci1zdW1tYXJ5XCIgcm91dGU9e3JvdXRlfSAvPlxuICAgICAgICAgICAgICAgICAgICA8aDI+RmlsbXM8L2gyPlxuICAgICAgICAgICAgICAgICAgICA8TGlzdCB1cmxzPXtwbGFuZXQuZmlsbXN9IGl0ZW1zPXtmaWxtc30gZmllbGQ9XCJ0aXRsZVwiIHBhZ2VOYW1lPVwiZmlsbS1zdW1tYXJ5XCIgcm91dGU9e3JvdXRlfSAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuY29uc3QgYXN5bmNDb21wb25lbnQgPSBSZWxha3MoUGxhbmV0UGFnZSk7XG5cbmV4cG9ydCB7XG4gICAgYXN5bmNDb21wb25lbnQgYXMgZGVmYXVsdCxcbiAgICBhc3luY0NvbXBvbmVudCBhcyBQbGFuZXRQYWdlLFxufTtcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5cbmZ1bmN0aW9uIExpc3QocHJvcHMpIHtcbiAgICBsZXQgeyByb3V0ZSwgdXJscywgaXRlbXMsIGZpZWxkLCBwYWdlTmFtZSB9ID0gcHJvcHM7XG4gICAgaWYgKHVybHMpIHtcbiAgICAgICAgLy8gYWNjZXB0IHNpbmdsZSBVUkwgYW5kIG9iamVjdFxuICAgICAgICBpZiAodHlwZW9mKHVybHMpID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgdXJscyA9IFsgdXJscyBdO1xuICAgICAgICAgICAgaXRlbXMgPSBbIGl0ZW1zIF07XG4gICAgICAgIH1cbiAgICAgICAgLy8gZGVhbCB3aXRoIGhvbGVzIGluIHRoZSBkYXRhIHNldFxuICAgICAgICBpdGVtcyA9IHVybHMubWFwKCh1cmwsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBsZXQgaXRlbSA9IChpdGVtcykgPyBpdGVtc1tpbmRleF0gOiBudWxsO1xuICAgICAgICAgICAgaWYgKCFpdGVtKSB7XG4gICAgICAgICAgICAgICAgaXRlbSA9IHsgdXJsLCBwZW5kaW5nOiB0cnVlIH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gaXRlbTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGlmICghaXRlbXMpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGlmIChpdGVtcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuIDx1bCBjbGFzc05hbWU9XCJlbXB0eVwiPjxsaT48c3Bhbj5ub25lPC9zcGFuPjwvbGk+PC91bD47XG4gICAgfVxuICAgIHJldHVybiA8dWw+e2l0ZW1zLm1hcChyZW5kZXJJdGVtKX08L3VsPjtcblxuICAgIGZ1bmN0aW9uIHJlbmRlckl0ZW0oaXRlbSwgaSkge1xuICAgICAgICBjb25zdCBpZCA9IHJvdXRlLmV4dHJhY3RJRChpdGVtLnVybCk7XG4gICAgICAgIGNvbnN0IHVybCA9IHJvdXRlLmZpbmQocGFnZU5hbWUsIHsgaWQgfSk7XG4gICAgICAgIGNvbnN0IHRleHQgPSBpdGVtLnBlbmRpbmcgPyAnLi4uJyA6IGl0ZW1bZmllbGRdO1xuICAgICAgICBjb25zdCBsaW5rUHJvcHMgPSB7XG4gICAgICAgICAgICBocmVmOiB1cmwsXG4gICAgICAgICAgICBjbGFzc05hbWU6IChpdGVtLnBlbmRpbmcpID8gJ3BlbmRpbmcnIDogdW5kZWZpbmVkLFxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gPGxpIGtleT17aX0+PGEgey4uLmxpbmtQcm9wc30+e3RleHR9PC9hPjwvbGk+O1xuICAgIH1cbn1cblxuTGlzdC5kZWZhdWx0UHJvcHMgPSB7XG4gICAgZmllbGQ6ICduYW1lJ1xufTtcblxuZXhwb3J0IHtcbiAgICBMaXN0IGFzIGRlZmF1bHQsXG4gICAgTGlzdFxufTtcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5cbmZ1bmN0aW9uIExvYWRpbmcoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2FkaW5nXCI+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhYiBmYS1lbXBpcmUgZmEtc3BpblwiLz4gTG9hZGluZ1xuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cbmV4cG9ydCB7XG4gICAgTG9hZGluZyBhcyBkZWZhdWx0LFxuICAgIExvYWRpbmdcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9