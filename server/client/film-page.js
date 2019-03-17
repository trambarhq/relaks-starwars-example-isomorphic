exports.ids = ["film-page"];
exports.modules = {

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

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9maWxtLXBhZ2UuanN4Iiwid2VicGFjazovLy8uL3dpZGdldHMvbGlzdC5qc3giLCJ3ZWJwYWNrOi8vLy4vd2lkZ2V0cy9sb2FkaW5nLmpzeCJdLCJuYW1lcyI6WyJwcm9wcyIsInJlbmRlciIsImZpbG0iLCJzaG93IiwidGl0bGUiLCJvcGVuaW5nX2NyYXdsIiwiZGlyZWN0b3IiLCJwcm9kdWNlciIsInJlbGVhc2VfZGF0ZSIsImNoYXJhY3RlcnMiLCJyb3V0ZSIsInNwZWNpZXMiLCJwbGFuZXRzIiwidmVoaWNsZXMiLCJzdGFyc2hpcHMiLCJzd2FwaSIsImZldGNoT25lIiwicGFyYW1zIiwiaWQiLCJmZXRjaE11bHRpcGxlIiwibWluaW11bSIsIkZpbG1QYWdlIiwiYXN5bmNDb21wb25lbnQiLCJkZWZhdWx0IiwiTGlzdCIsInVybHMiLCJpdGVtcyIsImZpZWxkIiwicGFnZU5hbWUiLCJtYXAiLCJ1cmwiLCJpbmRleCIsIml0ZW0iLCJwZW5kaW5nIiwibGVuZ3RoIiwicmVuZGVySXRlbSIsImkiLCJleHRyYWN0SUQiLCJmaW5kIiwidGV4dCIsImxpbmtQcm9wcyIsImhyZWYiLCJjbGFzc05hbWUiLCJ1bmRlZmluZWQiLCJkZWZhdWx0UHJvcHMiLCJMb2FkaW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3dGQUtBLGlCQUF3QkEsS0FBeEI7QUFBQSxzSEFrQmFDLE1BbEJiOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBa0JhQSw4QkFsQmIsWUFrQmFBLE1BbEJiLEdBa0JzQjtBQUNkLGdDQUFJLENBQUNDLElBQUwsRUFBVztBQUNQQyxxQ0FBSyw4QkFBQyxpQkFBRCxPQUFMO0FBQ0gsNkJBRkQsTUFFTztBQUNIQSxxQ0FDSTtBQUFBO0FBQUE7QUFDSTtBQUFBO0FBQUE7QUFBS0QsNkNBQUtFO0FBQVYscUNBREo7QUFFSTtBQUFBO0FBQUE7QUFBSUYsNkNBQUtHO0FBQVQscUNBRko7QUFH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V1YsUUFBWCxFQUFxQixFQUFFVixNQUFGLEVBQXJCLENBQVo7QUFDQSxZQUFNcUIsT0FBT1AsS0FBS0MsT0FBTCxHQUFlLEtBQWYsR0FBdUJELEtBQUtMLEtBQUwsQ0FBcEM7QUFDQSxZQUFNYSxZQUFZO0FBQ2RDLGtCQUFNWCxHQURRO0FBRWRZLHVCQUFZVixLQUFLQyxPQUFOLEdBQWlCLFNBQWpCLEdBQTZCVTtBQUYxQixTQUFsQjtBQUlBLGVBQU87QUFBQTtBQUFBLGNBQUksS0FBS1AsQ0FBVDtBQUFZO0FBQUE7QUFBT0kseUJBQVA7QUFBbUJEO0FBQW5CO0FBQVosU0FBUDtBQUNIO0FBQ0o7O0FBRURmLEtBQUtvQixZQUFMLEdBQW9CO0FBQ2hCakIsV0FBTztBQURTLENBQXBCOztRQUtZSixPLEdBQVJDLEk7UUFDQUEsSSxHQUFBQSxJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0NKOzs7Ozs7QUFFQSxTQUFTcUIsT0FBVCxHQUFtQjtBQUNmLFdBQ0k7QUFBQTtBQUFBLFVBQUssV0FBVSxTQUFmO0FBQ0k7QUFBQTtBQUFBO0FBQ0ksaURBQUcsV0FBVSx1QkFBYixHQURKO0FBQUE7QUFBQTtBQURKLEtBREo7QUFPSDs7UUFHY3RCLE8sR0FBWHNCLE87UUFDQUEsTyxHQUFBQSxPIiwiZmlsZSI6ImZpbG0tcGFnZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVsYWtzLCB7IHVzZVByb2dyZXNzIH0gZnJvbSAncmVsYWtzL2hvb2tzJztcbmltcG9ydCB7IExpc3QgfSBmcm9tICd3aWRnZXRzL2xpc3QnO1xuaW1wb3J0IExvYWRpbmcgZnJvbSAnd2lkZ2V0cy9sb2FkaW5nJztcblxuYXN5bmMgZnVuY3Rpb24gRmlsbVBhZ2UocHJvcHMpIHtcbiAgICBjb25zdCB7IHJvdXRlLCBzd2FwaSB9ID0gcHJvcHM7XG4gICAgY29uc3QgWyBzaG93IF0gPSB1c2VQcm9ncmVzcygpO1xuXG4gICAgcmVuZGVyKCk7XG4gICAgY29uc3QgZmlsbSA9IGF3YWl0IHN3YXBpLmZldGNoT25lKGAvZmlsbXMvJHtyb3V0ZS5wYXJhbXMuaWR9L2ApO1xuICAgIHJlbmRlcigpO1xuICAgIGNvbnN0IGNoYXJhY3RlcnMgPSBhd2FpdCBzd2FwaS5mZXRjaE11bHRpcGxlKGZpbG0uY2hhcmFjdGVycywgeyBtaW5pbXVtOiA1IH0pO1xuICAgIHJlbmRlcigpO1xuICAgIGNvbnN0IHNwZWNpZXMgPSBhd2FpdCBzd2FwaS5mZXRjaE11bHRpcGxlKGZpbG0uc3BlY2llcywgeyBtaW5pbXVtOiAnNjAlJyB9KTtcbiAgICByZW5kZXIoKTtcbiAgICBjb25zdCBwbGFuZXRzID0gYXdhaXQgc3dhcGkuZmV0Y2hNdWx0aXBsZShmaWxtLnBsYW5ldHMpO1xuICAgIHJlbmRlcigpO1xuICAgIGNvbnN0IHZlaGljbGVzID0gYXdhaXQgc3dhcGkuZmV0Y2hNdWx0aXBsZShmaWxtLnZlaGljbGVzLCB7IG1pbmltdW06ICc2MCUnIH0pO1xuICAgIHJlbmRlcigpO1xuICAgIGNvbnN0IHN0YXJzaGlwcyA9IGF3YWl0IHN3YXBpLmZldGNoTXVsdGlwbGUoZmlsbS5zdGFyc2hpcHMsIHsgbWluaW11bTogJzYwJScgfSk7XG4gICAgcmVuZGVyKCk7XG5cbiAgICBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICAgIGlmICghZmlsbSkge1xuICAgICAgICAgICAgc2hvdyg8TG9hZGluZyAvPik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzaG93KFxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxoMT57ZmlsbS50aXRsZX08L2gxPlxuICAgICAgICAgICAgICAgICAgICA8cD57ZmlsbS5vcGVuaW5nX2NyYXdsfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj5EaXJlY3Rvcjoge2ZpbG0uZGlyZWN0b3J9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+UHJvZHVjZXI6IHtmaWxtLnByb2R1Y2VyfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlJlbGVhc2UgZGF0ZToge2ZpbG0ucmVsZWFzZV9kYXRlfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8aDI+Q2hhcmFjdGVyczwvaDI+XG4gICAgICAgICAgICAgICAgICAgIDxMaXN0IHVybHM9e2ZpbG0uY2hhcmFjdGVyc30gaXRlbXM9e2NoYXJhY3RlcnN9IHBhZ2VOYW1lPVwiY2hhcmFjdGVyLXN1bW1hcnlcIiByb3V0ZT17cm91dGV9IC8+XG4gICAgICAgICAgICAgICAgICAgIDxoMj5TcGVjaWVzPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgPExpc3QgdXJscz17ZmlsbS5zcGVjaWVzfSBpdGVtcz17c3BlY2llc30gcGFnZU5hbWU9XCJzcGVjaWVzLXN1bW1hcnlcIiByb3V0ZT17cm91dGV9IC8+XG4gICAgICAgICAgICAgICAgICAgIDxoMj5QbGFuZXRzPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgPExpc3QgdXJscz17ZmlsbS5wbGFuZXRzfSBpdGVtcz17cGxhbmV0c30gcGFnZU5hbWU9XCJwbGFuZXQtc3VtbWFyeVwiIHJvdXRlPXtyb3V0ZX0gLz5cbiAgICAgICAgICAgICAgICAgICAgPGgyPlZlaGljbGVzPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgPExpc3QgdXJscz17ZmlsbS52ZWhpY2xlc30gaXRlbXM9e3ZlaGljbGVzfSBwYWdlTmFtZT1cInZlaGljbGUtc3VtbWFyeVwiIHJvdXRlPXtyb3V0ZX0gLz5cbiAgICAgICAgICAgICAgICAgICAgPGgyPlN0YXJzaGlwczwvaDI+XG4gICAgICAgICAgICAgICAgICAgIDxMaXN0IHVybHM9e2ZpbG0uc3RhcnNoaXBzfSBpdGVtcz17c3RhcnNoaXBzfSBwYWdlTmFtZT1cInN0YXJzaGlwLXN1bW1hcnlcIiByb3V0ZT17cm91dGV9IC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5jb25zdCBhc3luY0NvbXBvbmVudCA9IFJlbGFrcyhGaWxtUGFnZSk7XG5cbmV4cG9ydCB7XG4gICAgYXN5bmNDb21wb25lbnQgYXMgZGVmYXVsdCxcbiAgICBhc3luY0NvbXBvbmVudCBhcyBGaWxtUGFnZSxcbn07XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuXG5mdW5jdGlvbiBMaXN0KHByb3BzKSB7XG4gICAgbGV0IHsgcm91dGUsIHVybHMsIGl0ZW1zLCBmaWVsZCwgcGFnZU5hbWUgfSA9IHByb3BzO1xuICAgIGlmICh1cmxzKSB7XG4gICAgICAgIC8vIGFjY2VwdCBzaW5nbGUgVVJMIGFuZCBvYmplY3RcbiAgICAgICAgaWYgKHR5cGVvZih1cmxzKSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIHVybHMgPSBbIHVybHMgXTtcbiAgICAgICAgICAgIGl0ZW1zID0gWyBpdGVtcyBdO1xuICAgICAgICB9XG4gICAgICAgIC8vIGRlYWwgd2l0aCBob2xlcyBpbiB0aGUgZGF0YSBzZXRcbiAgICAgICAgaXRlbXMgPSB1cmxzLm1hcCgodXJsLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgbGV0IGl0ZW0gPSAoaXRlbXMpID8gaXRlbXNbaW5kZXhdIDogbnVsbDtcbiAgICAgICAgICAgIGlmICghaXRlbSkge1xuICAgICAgICAgICAgICAgIGl0ZW0gPSB7IHVybCwgcGVuZGluZzogdHJ1ZSB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGl0ZW07XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAoIWl0ZW1zKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBpZiAoaXRlbXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJldHVybiA8dWwgY2xhc3NOYW1lPVwiZW1wdHlcIj48bGk+PHNwYW4+bm9uZTwvc3Bhbj48L2xpPjwvdWw+O1xuICAgIH1cbiAgICByZXR1cm4gPHVsPntpdGVtcy5tYXAocmVuZGVySXRlbSl9PC91bD47XG5cbiAgICBmdW5jdGlvbiByZW5kZXJJdGVtKGl0ZW0sIGkpIHtcbiAgICAgICAgY29uc3QgaWQgPSByb3V0ZS5leHRyYWN0SUQoaXRlbS51cmwpO1xuICAgICAgICBjb25zdCB1cmwgPSByb3V0ZS5maW5kKHBhZ2VOYW1lLCB7IGlkIH0pO1xuICAgICAgICBjb25zdCB0ZXh0ID0gaXRlbS5wZW5kaW5nID8gJy4uLicgOiBpdGVtW2ZpZWxkXTtcbiAgICAgICAgY29uc3QgbGlua1Byb3BzID0ge1xuICAgICAgICAgICAgaHJlZjogdXJsLFxuICAgICAgICAgICAgY2xhc3NOYW1lOiAoaXRlbS5wZW5kaW5nKSA/ICdwZW5kaW5nJyA6IHVuZGVmaW5lZCxcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIDxsaSBrZXk9e2l9PjxhIHsuLi5saW5rUHJvcHN9Pnt0ZXh0fTwvYT48L2xpPjtcbiAgICB9XG59XG5cbkxpc3QuZGVmYXVsdFByb3BzID0ge1xuICAgIGZpZWxkOiAnbmFtZSdcbn07XG5cbmV4cG9ydCB7XG4gICAgTGlzdCBhcyBkZWZhdWx0LFxuICAgIExpc3Rcbn07XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuXG5mdW5jdGlvbiBMb2FkaW5nKCkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9hZGluZ1wiPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYWIgZmEtZW1waXJlIGZhLXNwaW5cIi8+IExvYWRpbmdcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuXG5leHBvcnQge1xuICAgIExvYWRpbmcgYXMgZGVmYXVsdCxcbiAgICBMb2FkaW5nXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==