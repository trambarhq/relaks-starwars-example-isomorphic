exports.ids = ["planet-page"];
exports.modules = {

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

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9wbGFuZXQtcGFnZS5qc3giLCJ3ZWJwYWNrOi8vLy4vd2lkZ2V0cy9saXN0LmpzeCIsIndlYnBhY2s6Ly8vLi93aWRnZXRzL2xvYWRpbmcuanN4Il0sIm5hbWVzIjpbInByb3BzIiwicmVuZGVyIiwicGxhbmV0Iiwic2hvdyIsIm5hbWUiLCJkaWFtZXRlciIsInJvdGF0aW9uX3BlcmlvZCIsIm9yYml0YWxfcGVyaW9kIiwiY2xpbWF0ZSIsImdyYXZpdHkiLCJ0ZXJyYWluIiwic3VyZmFjZV93YXRlciIsInBvcHVsYXRpb24iLCJyZXNpZGVudHMiLCJyb3V0ZSIsImZpbG1zIiwic3dhcGkiLCJmZXRjaE9uZSIsInBhcmFtcyIsImlkIiwiZmV0Y2hNdWx0aXBsZSIsIm1pbmltdW0iLCJQbGFuZXRQYWdlIiwiYXN5bmNDb21wb25lbnQiLCJkZWZhdWx0IiwiTGlzdCIsInVybHMiLCJpdGVtcyIsImZpZWxkIiwicGFnZU5hbWUiLCJtYXAiLCJ1cmwiLCJpbmRleCIsIml0ZW0iLCJwZW5kaW5nIiwibGVuZ3RoIiwicmVuZGVySXRlbSIsImkiLCJleHRyYWN0SUQiLCJmaW5kIiwidGV4dCIsImxpbmtQcm9wcyIsImhyZWYiLCJjbGFzc05hbWUiLCJ1bmRlZmluZWQiLCJkZWZhdWx0UHJvcHMiLCJMb2FkaW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3dGQUtBLGlCQUEwQkEsS0FBMUI7QUFBQSx1RkFZYUMsTUFaYjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVlhQSw4QkFaYixZQVlhQSxNQVpiLEdBWXNCO0FBQ2QsZ0NBQUksQ0FBQ0MsTUFBTCxFQUFhO0FBQ1RDLHFDQUFLLDhCQUFDLGlCQUFELE9BQUw7QUFDSCw2QkFGRCxNQUVPO0FBQ0hBLHFDQUNJO0FBQUE7QUFBQTtBQUNJO0FBQUE7QUFBQTtBQUFLRCwrQ0FBT0U7QUFBWixxQ0FESjtBQUVJO0FBQUE7QUFBQTtBQUFBO0FBQWdCRiwr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QUssV0FBVSxTQUFmO0FBQ0k7QUFBQTtBQUFBO0FBQ0ksaURBQUcsV0FBVSx1QkFBYixHQURKO0FBQUE7QUFBQTtBQURKLEtBREo7QUFPSDs7UUFHY3RCLE8sR0FBWHNCLE87UUFDQUEsTyxHQUFBQSxPIiwiZmlsZSI6InBsYW5ldC1wYWdlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWxha3MsIHsgdXNlUHJvZ3Jlc3MgfSBmcm9tICdyZWxha3MvaG9va3MnO1xuaW1wb3J0IHsgTGlzdCB9IGZyb20gJ3dpZGdldHMvbGlzdCc7XG5pbXBvcnQgTG9hZGluZyBmcm9tICd3aWRnZXRzL2xvYWRpbmcnO1xuXG5hc3luYyBmdW5jdGlvbiBQbGFuZXRQYWdlKHByb3BzKSB7XG4gICAgY29uc3QgeyByb3V0ZSwgc3dhcGkgfSA9IHByb3BzO1xuICAgIGNvbnN0IFsgc2hvdyBdID0gdXNlUHJvZ3Jlc3MoKTtcblxuICAgIHJlbmRlcigpO1xuICAgIGNvbnN0IHBsYW5ldCA9IGF3YWl0IHN3YXBpLmZldGNoT25lKGAvcGxhbmV0cy8ke3JvdXRlLnBhcmFtcy5pZH0vYCk7XG4gICAgcmVuZGVyKCk7XG4gICAgY29uc3QgZmlsbXMgPSBhd2FpdCBzd2FwaS5mZXRjaE11bHRpcGxlKHBsYW5ldC5maWxtcywgeyBtaW5pbXVtOiAnNjAlJyB9KTtcbiAgICByZW5kZXIoKTtcbiAgICBjb25zdCByZXNpZGVudHMgPSBhd2FpdCBzd2FwaS5mZXRjaE11bHRpcGxlKHBsYW5ldC5yZXNpZGVudHMsIHsgbWluaW11bTogJzYwJScgfSk7XG4gICAgcmVuZGVyKCk7XG5cbiAgICBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICAgIGlmICghcGxhbmV0KSB7XG4gICAgICAgICAgICBzaG93KDxMb2FkaW5nIC8+KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNob3coXG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGgxPntwbGFuZXQubmFtZX08L2gxPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PkRpYW1ldGVyOiB7cGxhbmV0LmRpYW1ldGVyfSBrbTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlJvdGF0aW9uIHBlcmlvZDoge3BsYW5ldC5yb3RhdGlvbl9wZXJpb2R9IGhyPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+T3JiaXRhbCBwZXJpb2Q6IHtwbGFuZXQub3JiaXRhbF9wZXJpb2R9IGRheXM8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj5DbGltYXRlOiB7cGxhbmV0LmNsaW1hdGV9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+R3Jhdml0eToge3BsYW5ldC5ncmF2aXR5fTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlRlcnJhaW46IHtwbGFuZXQudGVycmFpbn08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj5TdXJmYWNlIHdhdGVyOiB7cGxhbmV0LnN1cmZhY2Vfd2F0ZXJ9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+UG9wdWxhdGlvbjoge3BsYW5ldC5wb3B1bGF0aW9ufTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8aDI+UmVzaWRlbnRzPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgPExpc3QgdXJscz17cGxhbmV0LnJlc2lkZW50c30gaXRlbXM9e3Jlc2lkZW50c30gcGFnZU5hbWU9XCJjaGFyYWN0ZXItc3VtbWFyeVwiIHJvdXRlPXtyb3V0ZX0gLz5cbiAgICAgICAgICAgICAgICAgICAgPGgyPkZpbG1zPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgPExpc3QgdXJscz17cGxhbmV0LmZpbG1zfSBpdGVtcz17ZmlsbXN9IGZpZWxkPVwidGl0bGVcIiBwYWdlTmFtZT1cImZpbG0tc3VtbWFyeVwiIHJvdXRlPXtyb3V0ZX0gLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmNvbnN0IGFzeW5jQ29tcG9uZW50ID0gUmVsYWtzKFBsYW5ldFBhZ2UpO1xuXG5leHBvcnQge1xuICAgIGFzeW5jQ29tcG9uZW50IGFzIGRlZmF1bHQsXG4gICAgYXN5bmNDb21wb25lbnQgYXMgUGxhbmV0UGFnZSxcbn07XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuXG5mdW5jdGlvbiBMaXN0KHByb3BzKSB7XG4gICAgbGV0IHsgcm91dGUsIHVybHMsIGl0ZW1zLCBmaWVsZCwgcGFnZU5hbWUgfSA9IHByb3BzO1xuICAgIGlmICh1cmxzKSB7XG4gICAgICAgIC8vIGFjY2VwdCBzaW5nbGUgVVJMIGFuZCBvYmplY3RcbiAgICAgICAgaWYgKHR5cGVvZih1cmxzKSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIHVybHMgPSBbIHVybHMgXTtcbiAgICAgICAgICAgIGl0ZW1zID0gWyBpdGVtcyBdO1xuICAgICAgICB9XG4gICAgICAgIC8vIGRlYWwgd2l0aCBob2xlcyBpbiB0aGUgZGF0YSBzZXRcbiAgICAgICAgaXRlbXMgPSB1cmxzLm1hcCgodXJsLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgbGV0IGl0ZW0gPSAoaXRlbXMpID8gaXRlbXNbaW5kZXhdIDogbnVsbDtcbiAgICAgICAgICAgIGlmICghaXRlbSkge1xuICAgICAgICAgICAgICAgIGl0ZW0gPSB7IHVybCwgcGVuZGluZzogdHJ1ZSB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGl0ZW07XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAoIWl0ZW1zKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBpZiAoaXRlbXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJldHVybiA8dWwgY2xhc3NOYW1lPVwiZW1wdHlcIj48bGk+PHNwYW4+bm9uZTwvc3Bhbj48L2xpPjwvdWw+O1xuICAgIH1cbiAgICByZXR1cm4gPHVsPntpdGVtcy5tYXAocmVuZGVySXRlbSl9PC91bD47XG5cbiAgICBmdW5jdGlvbiByZW5kZXJJdGVtKGl0ZW0sIGkpIHtcbiAgICAgICAgY29uc3QgaWQgPSByb3V0ZS5leHRyYWN0SUQoaXRlbS51cmwpO1xuICAgICAgICBjb25zdCB1cmwgPSByb3V0ZS5maW5kKHBhZ2VOYW1lLCB7IGlkIH0pO1xuICAgICAgICBjb25zdCB0ZXh0ID0gaXRlbS5wZW5kaW5nID8gJy4uLicgOiBpdGVtW2ZpZWxkXTtcbiAgICAgICAgY29uc3QgbGlua1Byb3BzID0ge1xuICAgICAgICAgICAgaHJlZjogdXJsLFxuICAgICAgICAgICAgY2xhc3NOYW1lOiAoaXRlbS5wZW5kaW5nKSA/ICdwZW5kaW5nJyA6IHVuZGVmaW5lZCxcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIDxsaSBrZXk9e2l9PjxhIHsuLi5saW5rUHJvcHN9Pnt0ZXh0fTwvYT48L2xpPjtcbiAgICB9XG59XG5cbkxpc3QuZGVmYXVsdFByb3BzID0ge1xuICAgIGZpZWxkOiAnbmFtZSdcbn07XG5cbmV4cG9ydCB7XG4gICAgTGlzdCBhcyBkZWZhdWx0LFxuICAgIExpc3Rcbn07XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuXG5mdW5jdGlvbiBMb2FkaW5nKCkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9hZGluZ1wiPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYWIgZmEtZW1waXJlIGZhLXNwaW5cIi8+IExvYWRpbmdcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuXG5leHBvcnQge1xuICAgIExvYWRpbmcgYXMgZGVmYXVsdCxcbiAgICBMb2FkaW5nXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==