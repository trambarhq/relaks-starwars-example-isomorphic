(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["film-page"],{

/***/ "./pages/film-page.jsx":
/*!*****************************!*\
  !*** ./pages/film-page.jsx ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.FilmPage = exports.default = undefined;

var _regenerator = __webpack_require__(/*! babel-runtime/regenerator */ "../node_modules/babel-runtime/regenerator/index.js");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _slicedToArray2 = __webpack_require__(/*! babel-runtime/helpers/slicedToArray */ "../node_modules/babel-runtime/helpers/slicedToArray.js");

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _asyncToGenerator2 = __webpack_require__(/*! babel-runtime/helpers/asyncToGenerator */ "../node_modules/babel-runtime/helpers/asyncToGenerator.js");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var FilmPage = function () {
    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(props) {
        var route, swapi, _useProgress, _useProgress2, show, film, characters, species, planets, vehicles, starships, render;

        return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        render = function render() {
                            if (!film) {
                                show(_react2.default.createElement(_loading2.default, null));
                            } else {
                                show(_react2.default.createElement(
                                    'div',
                                    null,
                                    _react2.default.createElement(
                                        'h1',
                                        null,
                                        film.title
                                    ),
                                    _react2.default.createElement(
                                        'p',
                                        null,
                                        film.opening_crawl
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        null,
                                        'Director: ',
                                        film.director
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        null,
                                        'Producer: ',
                                        film.producer
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        null,
                                        'Release date: ',
                                        film.release_date
                                    ),
                                    _react2.default.createElement(
                                        'h2',
                                        null,
                                        'Characters'
                                    ),
                                    _react2.default.createElement(_list.List, { urls: film.characters, items: characters, pageName: 'character-summary', route: route }),
                                    _react2.default.createElement(
                                        'h2',
                                        null,
                                        'Species'
                                    ),
                                    _react2.default.createElement(_list.List, { urls: film.species, items: species, pageName: 'species-summary', route: route }),
                                    _react2.default.createElement(
                                        'h2',
                                        null,
                                        'Planets'
                                    ),
                                    _react2.default.createElement(_list.List, { urls: film.planets, items: planets, pageName: 'planet-summary', route: route }),
                                    _react2.default.createElement(
                                        'h2',
                                        null,
                                        'Vehicles'
                                    ),
                                    _react2.default.createElement(_list.List, { urls: film.vehicles, items: vehicles, pageName: 'vehicle-summary', route: route }),
                                    _react2.default.createElement(
                                        'h2',
                                        null,
                                        'Starships'
                                    ),
                                    _react2.default.createElement(_list.List, { urls: film.starships, items: starships, pageName: 'starship-summary', route: route })
                                ));
                            }
                        };

                        route = props.route, swapi = props.swapi;
                        _useProgress = (0, _hooks.useProgress)(), _useProgress2 = (0, _slicedToArray3.default)(_useProgress, 1), show = _useProgress2[0];


                        render();
                        _context.next = 6;
                        return swapi.fetchOne('/films/' + route.params.id + '/');

                    case 6:
                        film = _context.sent;

                        render();
                        _context.next = 10;
                        return swapi.fetchMultiple(film.characters, { minimum: 5 });

                    case 10:
                        characters = _context.sent;

                        render();
                        _context.next = 14;
                        return swapi.fetchMultiple(film.species, { minimum: '60%' });

                    case 14:
                        species = _context.sent;

                        render();
                        _context.next = 18;
                        return swapi.fetchMultiple(film.planets);

                    case 18:
                        planets = _context.sent;

                        render();
                        _context.next = 22;
                        return swapi.fetchMultiple(film.vehicles, { minimum: '60%' });

                    case 22:
                        vehicles = _context.sent;

                        render();
                        _context.next = 26;
                        return swapi.fetchMultiple(film.starships, { minimum: '60%' });

                    case 26:
                        starships = _context.sent;

                        render();

                    case 28:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, this);
    }));

    return function FilmPage(_x) {
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

var asyncComponent = (0, _hooks2.default)(FilmPage);

exports.default = asyncComponent;
exports.FilmPage = asyncComponent;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9maWxtLXBhZ2UuanN4Iiwid2VicGFjazovLy8uL3dpZGdldHMvbGlzdC5qc3giLCJ3ZWJwYWNrOi8vLy4vd2lkZ2V0cy9sb2FkaW5nLmpzeCJdLCJuYW1lcyI6WyJwcm9wcyIsInJlbmRlciIsImZpbG0iLCJzaG93IiwidGl0bGUiLCJvcGVuaW5nX2NyYXdsIiwiZGlyZWN0b3IiLCJwcm9kdWNlciIsInJlbGVhc2VfZGF0ZSIsImNoYXJhY3RlcnMiLCJyb3V0ZSIsInNwZWNpZXMiLCJwbGFuZXRzIiwidmVoaWNsZXMiLCJzdGFyc2hpcHMiLCJzd2FwaSIsImZldGNoT25lIiwicGFyYW1zIiwiaWQiLCJmZXRjaE11bHRpcGxlIiwibWluaW11bSIsIkZpbG1QYWdlIiwiYXN5bmNDb21wb25lbnQiLCJkZWZhdWx0IiwiTGlzdCIsInVybHMiLCJpdGVtcyIsImZpZWxkIiwicGFnZU5hbWUiLCJtYXAiLCJ1cmwiLCJpbmRleCIsIml0ZW0iLCJwZW5kaW5nIiwibGVuZ3RoIiwicmVuZGVySXRlbSIsImkiLCJleHRyYWN0SUQiLCJmaW5kIiwidGV4dCIsImxpbmtQcm9wcyIsImhyZWYiLCJjbGFzc05hbWUiLCJ1bmRlZmluZWQiLCJkZWZhdWx0UHJvcHMiLCJMb2FkaW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7d0ZBS0EsaUJBQXdCQSxLQUF4QjtBQUFBLHNIQWtCYUMsTUFsQmI7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFrQmFBLDhCQWxCYixZQWtCYUEsTUFsQmIsR0FrQnNCO0FBQ2QsZ0NBQUksQ0FBQ0MsSUFBTCxFQUFXO0FBQ1BDLHFDQUFLLDhCQUFDLGlCQUFELE9BQUw7QUFDSCw2QkFGRCxNQUVPO0FBQ0hBLHFDQUNJO0FBQUE7QUFBQTtBQUNJO0FBQUE7QUFBQTtBQUFLRCw2Q0FBS0U7QUFBVixxQ0FESjtBQUVJO0FBQUE7QUFBQTtBQUFJRiw2Q0FBS0c7QUFBVCxxQ0FGSjtBQUdJ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VixRQUFYLEVBQXFCLEVBQUVWLE1BQUYsRUFBckIsQ0FBWjtBQUNBLFlBQU1xQixPQUFPUCxLQUFLQyxPQUFMLEdBQWUsS0FBZixHQUF1QkQsS0FBS0wsS0FBTCxDQUFwQztBQUNBLFlBQU1hLFlBQVk7QUFDZEMsa0JBQU1YLEdBRFE7QUFFZFksdUJBQVlWLEtBQUtDLE9BQU4sR0FBaUIsU0FBakIsR0FBNkJVO0FBRjFCLFNBQWxCO0FBSUEsZUFBTztBQUFBO0FBQUEsY0FBSSxLQUFLUCxDQUFUO0FBQVk7QUFBQTtBQUFPSSx5QkFBUDtBQUFtQkQ7QUFBbkI7QUFBWixTQUFQO0FBQ0g7QUFDSjs7QUFFRGYsS0FBS29CLFlBQUwsR0FBb0I7QUFDaEJqQixXQUFPO0FBRFMsQ0FBcEI7O1FBS1lKLE8sR0FBUkMsSTtRQUNBQSxJLEdBQUFBLEk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3Q0o7Ozs7OztBQUVBLFNBQVNxQixPQUFULEdBQW1CO0FBQ2YsV0FDSTtBQUFBO0FBQUEsVUFBSyxXQUFVLFNBQWY7QUFDSTtBQUFBO0FBQUE7QUFDSSxpREFBRyxXQUFVLHVCQUFiLEdBREo7QUFBQTtBQUFBO0FBREosS0FESjtBQU9IOztRQUdjdEIsTyxHQUFYc0IsTztRQUNBQSxPLEdBQUFBLE8iLCJmaWxlIjoiZmlsbS1wYWdlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWxha3MsIHsgdXNlUHJvZ3Jlc3MgfSBmcm9tICdyZWxha3MvaG9va3MnO1xuaW1wb3J0IHsgTGlzdCB9IGZyb20gJ3dpZGdldHMvbGlzdCc7XG5pbXBvcnQgTG9hZGluZyBmcm9tICd3aWRnZXRzL2xvYWRpbmcnO1xuXG5hc3luYyBmdW5jdGlvbiBGaWxtUGFnZShwcm9wcykge1xuICAgIGNvbnN0IHsgcm91dGUsIHN3YXBpIH0gPSBwcm9wcztcbiAgICBjb25zdCBbIHNob3cgXSA9IHVzZVByb2dyZXNzKCk7XG5cbiAgICByZW5kZXIoKTtcbiAgICBjb25zdCBmaWxtID0gYXdhaXQgc3dhcGkuZmV0Y2hPbmUoYC9maWxtcy8ke3JvdXRlLnBhcmFtcy5pZH0vYCk7XG4gICAgcmVuZGVyKCk7XG4gICAgY29uc3QgY2hhcmFjdGVycyA9IGF3YWl0IHN3YXBpLmZldGNoTXVsdGlwbGUoZmlsbS5jaGFyYWN0ZXJzLCB7IG1pbmltdW06IDUgfSk7XG4gICAgcmVuZGVyKCk7XG4gICAgY29uc3Qgc3BlY2llcyA9IGF3YWl0IHN3YXBpLmZldGNoTXVsdGlwbGUoZmlsbS5zcGVjaWVzLCB7IG1pbmltdW06ICc2MCUnIH0pO1xuICAgIHJlbmRlcigpO1xuICAgIGNvbnN0IHBsYW5ldHMgPSBhd2FpdCBzd2FwaS5mZXRjaE11bHRpcGxlKGZpbG0ucGxhbmV0cyk7XG4gICAgcmVuZGVyKCk7XG4gICAgY29uc3QgdmVoaWNsZXMgPSBhd2FpdCBzd2FwaS5mZXRjaE11bHRpcGxlKGZpbG0udmVoaWNsZXMsIHsgbWluaW11bTogJzYwJScgfSk7XG4gICAgcmVuZGVyKCk7XG4gICAgY29uc3Qgc3RhcnNoaXBzID0gYXdhaXQgc3dhcGkuZmV0Y2hNdWx0aXBsZShmaWxtLnN0YXJzaGlwcywgeyBtaW5pbXVtOiAnNjAlJyB9KTtcbiAgICByZW5kZXIoKTtcblxuICAgIGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgICAgaWYgKCFmaWxtKSB7XG4gICAgICAgICAgICBzaG93KDxMb2FkaW5nIC8+KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNob3coXG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGgxPntmaWxtLnRpdGxlfTwvaDE+XG4gICAgICAgICAgICAgICAgICAgIDxwPntmaWxtLm9wZW5pbmdfY3Jhd2x9PC9wPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PkRpcmVjdG9yOiB7ZmlsbS5kaXJlY3Rvcn08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj5Qcm9kdWNlcjoge2ZpbG0ucHJvZHVjZXJ9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+UmVsZWFzZSBkYXRlOiB7ZmlsbS5yZWxlYXNlX2RhdGV9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxoMj5DaGFyYWN0ZXJzPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgPExpc3QgdXJscz17ZmlsbS5jaGFyYWN0ZXJzfSBpdGVtcz17Y2hhcmFjdGVyc30gcGFnZU5hbWU9XCJjaGFyYWN0ZXItc3VtbWFyeVwiIHJvdXRlPXtyb3V0ZX0gLz5cbiAgICAgICAgICAgICAgICAgICAgPGgyPlNwZWNpZXM8L2gyPlxuICAgICAgICAgICAgICAgICAgICA8TGlzdCB1cmxzPXtmaWxtLnNwZWNpZXN9IGl0ZW1zPXtzcGVjaWVzfSBwYWdlTmFtZT1cInNwZWNpZXMtc3VtbWFyeVwiIHJvdXRlPXtyb3V0ZX0gLz5cbiAgICAgICAgICAgICAgICAgICAgPGgyPlBsYW5ldHM8L2gyPlxuICAgICAgICAgICAgICAgICAgICA8TGlzdCB1cmxzPXtmaWxtLnBsYW5ldHN9IGl0ZW1zPXtwbGFuZXRzfSBwYWdlTmFtZT1cInBsYW5ldC1zdW1tYXJ5XCIgcm91dGU9e3JvdXRlfSAvPlxuICAgICAgICAgICAgICAgICAgICA8aDI+VmVoaWNsZXM8L2gyPlxuICAgICAgICAgICAgICAgICAgICA8TGlzdCB1cmxzPXtmaWxtLnZlaGljbGVzfSBpdGVtcz17dmVoaWNsZXN9IHBhZ2VOYW1lPVwidmVoaWNsZS1zdW1tYXJ5XCIgcm91dGU9e3JvdXRlfSAvPlxuICAgICAgICAgICAgICAgICAgICA8aDI+U3RhcnNoaXBzPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgPExpc3QgdXJscz17ZmlsbS5zdGFyc2hpcHN9IGl0ZW1zPXtzdGFyc2hpcHN9IHBhZ2VOYW1lPVwic3RhcnNoaXAtc3VtbWFyeVwiIHJvdXRlPXtyb3V0ZX0gLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmNvbnN0IGFzeW5jQ29tcG9uZW50ID0gUmVsYWtzKEZpbG1QYWdlKTtcblxuZXhwb3J0IHtcbiAgICBhc3luY0NvbXBvbmVudCBhcyBkZWZhdWx0LFxuICAgIGFzeW5jQ29tcG9uZW50IGFzIEZpbG1QYWdlLFxufTtcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5cbmZ1bmN0aW9uIExpc3QocHJvcHMpIHtcbiAgICBsZXQgeyByb3V0ZSwgdXJscywgaXRlbXMsIGZpZWxkLCBwYWdlTmFtZSB9ID0gcHJvcHM7XG4gICAgaWYgKHVybHMpIHtcbiAgICAgICAgLy8gYWNjZXB0IHNpbmdsZSBVUkwgYW5kIG9iamVjdFxuICAgICAgICBpZiAodHlwZW9mKHVybHMpID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgdXJscyA9IFsgdXJscyBdO1xuICAgICAgICAgICAgaXRlbXMgPSBbIGl0ZW1zIF07XG4gICAgICAgIH1cbiAgICAgICAgLy8gZGVhbCB3aXRoIGhvbGVzIGluIHRoZSBkYXRhIHNldFxuICAgICAgICBpdGVtcyA9IHVybHMubWFwKCh1cmwsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBsZXQgaXRlbSA9IChpdGVtcykgPyBpdGVtc1tpbmRleF0gOiBudWxsO1xuICAgICAgICAgICAgaWYgKCFpdGVtKSB7XG4gICAgICAgICAgICAgICAgaXRlbSA9IHsgdXJsLCBwZW5kaW5nOiB0cnVlIH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gaXRlbTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGlmICghaXRlbXMpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGlmIChpdGVtcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuIDx1bCBjbGFzc05hbWU9XCJlbXB0eVwiPjxsaT48c3Bhbj5ub25lPC9zcGFuPjwvbGk+PC91bD47XG4gICAgfVxuICAgIHJldHVybiA8dWw+e2l0ZW1zLm1hcChyZW5kZXJJdGVtKX08L3VsPjtcblxuICAgIGZ1bmN0aW9uIHJlbmRlckl0ZW0oaXRlbSwgaSkge1xuICAgICAgICBjb25zdCBpZCA9IHJvdXRlLmV4dHJhY3RJRChpdGVtLnVybCk7XG4gICAgICAgIGNvbnN0IHVybCA9IHJvdXRlLmZpbmQocGFnZU5hbWUsIHsgaWQgfSk7XG4gICAgICAgIGNvbnN0IHRleHQgPSBpdGVtLnBlbmRpbmcgPyAnLi4uJyA6IGl0ZW1bZmllbGRdO1xuICAgICAgICBjb25zdCBsaW5rUHJvcHMgPSB7XG4gICAgICAgICAgICBocmVmOiB1cmwsXG4gICAgICAgICAgICBjbGFzc05hbWU6IChpdGVtLnBlbmRpbmcpID8gJ3BlbmRpbmcnIDogdW5kZWZpbmVkLFxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gPGxpIGtleT17aX0+PGEgey4uLmxpbmtQcm9wc30+e3RleHR9PC9hPjwvbGk+O1xuICAgIH1cbn1cblxuTGlzdC5kZWZhdWx0UHJvcHMgPSB7XG4gICAgZmllbGQ6ICduYW1lJ1xufTtcblxuZXhwb3J0IHtcbiAgICBMaXN0IGFzIGRlZmF1bHQsXG4gICAgTGlzdFxufTtcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5cbmZ1bmN0aW9uIExvYWRpbmcoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2FkaW5nXCI+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhYiBmYS1lbXBpcmUgZmEtc3BpblwiLz4gTG9hZGluZ1xuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cbmV4cG9ydCB7XG4gICAgTG9hZGluZyBhcyBkZWZhdWx0LFxuICAgIExvYWRpbmdcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9