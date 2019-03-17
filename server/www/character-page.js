(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["character-page"],{

/***/ "./pages/character-page.jsx":
/*!**********************************!*\
  !*** ./pages/character-page.jsx ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.CharacterPage = exports.default = undefined;

var _regenerator = __webpack_require__(/*! babel-runtime/regenerator */ "../node_modules/babel-runtime/regenerator/index.js");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _slicedToArray2 = __webpack_require__(/*! babel-runtime/helpers/slicedToArray */ "../node_modules/babel-runtime/helpers/slicedToArray.js");

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _asyncToGenerator2 = __webpack_require__(/*! babel-runtime/helpers/asyncToGenerator */ "../node_modules/babel-runtime/helpers/asyncToGenerator.js");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var CharacterPage = function () {
    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(props) {
        var route, swapi, _useProgress, _useProgress2, show, person, films, species, homeworld, vehicles, starships, render;

        return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        render = function render() {
                            if (!person) {
                                show(_react2.default.createElement(_loading2.default, null));
                            } else {
                                show(_react2.default.createElement(
                                    'div',
                                    null,
                                    _react2.default.createElement(
                                        'h1',
                                        null,
                                        person.name
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        null,
                                        'Height: ',
                                        person.height,
                                        ' cm'
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        null,
                                        'Mass: ',
                                        person.mass,
                                        ' kg'
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        null,
                                        'Hair color: ',
                                        person.hair_color
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        null,
                                        'Skin color: ',
                                        person.skin_color
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        null,
                                        'Hair color: ',
                                        person.hair_color
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        null,
                                        'Eye color: ',
                                        person.eye_color
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        null,
                                        'Birth year: ',
                                        person.birth_year
                                    ),
                                    _react2.default.createElement(
                                        'h2',
                                        null,
                                        'Homeworld'
                                    ),
                                    _react2.default.createElement(_list.List, { urls: person.homeworld, items: homeworld, pageName: 'planet-summary', route: route }),
                                    _react2.default.createElement(
                                        'h2',
                                        null,
                                        'Films'
                                    ),
                                    _react2.default.createElement(_list.List, { urls: person.films, items: films, field: 'title', pageName: 'film-summary', route: route }),
                                    _react2.default.createElement(
                                        'h2',
                                        null,
                                        'Species'
                                    ),
                                    _react2.default.createElement(_list.List, { urls: person.species, items: species, pageName: 'species-summary', route: route }),
                                    _react2.default.createElement(
                                        'h2',
                                        null,
                                        'Vehicles'
                                    ),
                                    _react2.default.createElement(_list.List, { urls: person.vehicles, items: vehicles, pageName: 'vehicle-summary', route: route }),
                                    _react2.default.createElement(
                                        'h2',
                                        null,
                                        'Starships'
                                    ),
                                    _react2.default.createElement(_list.List, { urls: person.starships, items: starships, pageName: 'starship-summary', route: route })
                                ));
                            }
                        };

                        route = props.route, swapi = props.swapi;
                        _useProgress = (0, _hooks.useProgress)(), _useProgress2 = (0, _slicedToArray3.default)(_useProgress, 1), show = _useProgress2[0];


                        render();
                        _context.next = 6;
                        return swapi.fetchOne('/people/' + route.params.id + '/');

                    case 6:
                        person = _context.sent;

                        render();
                        _context.next = 10;
                        return swapi.fetchMultiple(person.films, { minimum: '60%' });

                    case 10:
                        films = _context.sent;

                        render();
                        _context.next = 14;
                        return swapi.fetchMultiple(person.species, { minimum: '60%' });

                    case 14:
                        species = _context.sent;

                        render();
                        _context.next = 18;
                        return swapi.fetchOne(person.homeworld);

                    case 18:
                        homeworld = _context.sent;

                        render();
                        _context.next = 22;
                        return swapi.fetchMultiple(person.vehicles, { minimum: '60%' });

                    case 22:
                        vehicles = _context.sent;

                        render();
                        _context.next = 26;
                        return swapi.fetchMultiple(person.starships, { minimum: '60%' });

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

    return function CharacterPage(_x) {
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

var asyncComponent = (0, _hooks2.default)(CharacterPage);

exports.default = asyncComponent;
exports.CharacterPage = asyncComponent;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9jaGFyYWN0ZXItcGFnZS5qc3giLCJ3ZWJwYWNrOi8vLy4vd2lkZ2V0cy9saXN0LmpzeCIsIndlYnBhY2s6Ly8vLi93aWRnZXRzL2xvYWRpbmcuanN4Il0sIm5hbWVzIjpbInByb3BzIiwicmVuZGVyIiwicGVyc29uIiwic2hvdyIsIm5hbWUiLCJoZWlnaHQiLCJtYXNzIiwiaGFpcl9jb2xvciIsInNraW5fY29sb3IiLCJleWVfY29sb3IiLCJiaXJ0aF95ZWFyIiwiaG9tZXdvcmxkIiwicm91dGUiLCJmaWxtcyIsInNwZWNpZXMiLCJ2ZWhpY2xlcyIsInN0YXJzaGlwcyIsInN3YXBpIiwiZmV0Y2hPbmUiLCJwYXJhbXMiLCJpZCIsImZldGNoTXVsdGlwbGUiLCJtaW5pbXVtIiwiQ2hhcmFjdGVyUGFnZSIsImFzeW5jQ29tcG9uZW50IiwiZGVmYXVsdCIsIkxpc3QiLCJ1cmxzIiwiaXRlbXMiLCJmaWVsZCIsInBhZ2VOYW1lIiwibWFwIiwidXJsIiwiaW5kZXgiLCJpdGVtIiwicGVuZGluZyIsImxlbmd0aCIsInJlbmRlckl0ZW0iLCJpIiwiZXh0cmFjdElEIiwiZmluZCIsInRleHQiLCJsaW5rUHJvcHMiLCJocmVmIiwiY2xhc3NOYW1lIiwidW5kZWZpbmVkIiwiZGVmYXVsdFByb3BzIiwiTG9hZGluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3dGQUtBLGlCQUE2QkEsS0FBN0I7QUFBQSxxSEFrQmFDLE1BbEJiOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBa0JhQSw4QkFsQmIsWUFrQmFBLE1BbEJiLEdBa0JzQjtBQUNkLGdDQUFJLENBQUNDLE1BQUwsRUFBYTtBQUNUQyxxQ0FBSyw4QkFBQyxpQkFBRCxPQUFMO0FBQ0gsNkJBRkQsTUFFTztBQUNIQSxxQ0FDSTtBQUFBO0FBQUE7QUFDSTtBQUFBO0FBQUE7QUFBS0QsK0NBQU9FO0FBQVoscUNBREo7QUFFSTtBQUFBO0FBQUE7QUFBQTtB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SjtBQUF0QixTQUFQO0FBQ0g7QUFDRCxXQUFPO0FBQUE7QUFBQTtBQUFLUixjQUFNRyxHQUFOLENBQVVNLFVBQVY7QUFBTCxLQUFQOztBQUVBLGFBQVNBLFVBQVQsQ0FBb0JILElBQXBCLEVBQTBCSSxDQUExQixFQUE2QjtBQUN6QixZQUFNbEIsS0FBS1IsTUFBTTJCLFNBQU4sQ0FBZ0JMLEtBQUtGLEdBQXJCLENBQVg7QUFDQSxZQUFNQSxNQUFNcEIsTUFBTTRCLElBQU4sQ0FBV1YsUUFBWCxFQUFxQixFQUFFVixNQUFGLEVBQXJCLENBQVo7QUFDQSxZQUFNcUIsT0FBT1AsS0FBS0MsT0FBTCxHQUFlLEtBQWYsR0FBdUJELEtBQUtMLEtBQUwsQ0FBcEM7QUFDQSxZQUFNYSxZQUFZO0FBQ2RDLGtCQUFNWCxHQURRO0FBRWRZLHVCQUFZVixLQUFLQyxPQUFOLEdBQWlCLFNBQWpCLEdBQTZCVTtBQUYxQixTQUFsQjtBQUlBLGVBQU87QUFBQTtBQUFBLGNBQUksS0FBS1AsQ0FBVDtBQUFZO0FBQUE7QUFBT0kseUJBQVA7QUFBbUJEO0FBQW5CO0FBQVosU0FBUDtBQUNIO0FBQ0o7O0FBRURmLEtBQUtvQixZQUFMLEdBQW9CO0FBQ2hCakIsV0FBTztBQURTLENBQXBCOztRQUtZSixPLEdBQVJDLEk7UUFDQUEsSSxHQUFBQSxJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0NKOzs7Ozs7QUFFQSxTQUFTcUIsT0FBVCxHQUFtQjtBQUNmLFdBQ0k7QUFBQTtBQUFBLFVBQUssV0FBVSxTQUFmO0FBQ0k7QUFBQTtBQUFBO0FBQ0ksaURBQUcsV0FBVSx1QkFBYixHQURKO0FBQUE7QUFBQTtBQURKLEtBREo7QUFPSDs7UUFHY3RCLE8sR0FBWHNCLE87UUFDQUEsTyxHQUFBQSxPIiwiZmlsZSI6ImNoYXJhY3Rlci1wYWdlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWxha3MsIHsgdXNlUHJvZ3Jlc3MgfSBmcm9tICdyZWxha3MvaG9va3MnO1xuaW1wb3J0IHsgTGlzdCB9IGZyb20gJ3dpZGdldHMvbGlzdCc7XG5pbXBvcnQgTG9hZGluZyBmcm9tICd3aWRnZXRzL2xvYWRpbmcnO1xuXG5hc3luYyBmdW5jdGlvbiBDaGFyYWN0ZXJQYWdlKHByb3BzKSB7XG4gICAgY29uc3QgeyByb3V0ZSwgc3dhcGkgfSA9IHByb3BzO1xuICAgIGNvbnN0IFsgc2hvdyBdID0gdXNlUHJvZ3Jlc3MoKTtcblxuICAgIHJlbmRlcigpO1xuICAgIGNvbnN0IHBlcnNvbiA9IGF3YWl0IHN3YXBpLmZldGNoT25lKGAvcGVvcGxlLyR7cm91dGUucGFyYW1zLmlkfS9gKTtcbiAgICByZW5kZXIoKTtcbiAgICBjb25zdCBmaWxtcyA9IGF3YWl0IHN3YXBpLmZldGNoTXVsdGlwbGUocGVyc29uLmZpbG1zLCB7IG1pbmltdW06ICc2MCUnIH0pO1xuICAgIHJlbmRlcigpO1xuICAgIGNvbnN0IHNwZWNpZXMgPSBhd2FpdCBzd2FwaS5mZXRjaE11bHRpcGxlKHBlcnNvbi5zcGVjaWVzLCB7IG1pbmltdW06ICc2MCUnIH0pO1xuICAgIHJlbmRlcigpO1xuICAgIGNvbnN0IGhvbWV3b3JsZCA9IGF3YWl0IHN3YXBpLmZldGNoT25lKHBlcnNvbi5ob21ld29ybGQpO1xuICAgIHJlbmRlcigpO1xuICAgIGNvbnN0IHZlaGljbGVzID0gYXdhaXQgc3dhcGkuZmV0Y2hNdWx0aXBsZShwZXJzb24udmVoaWNsZXMsIHsgbWluaW11bTogJzYwJScgfSk7XG4gICAgcmVuZGVyKCk7XG4gICAgY29uc3Qgc3RhcnNoaXBzID0gYXdhaXQgc3dhcGkuZmV0Y2hNdWx0aXBsZShwZXJzb24uc3RhcnNoaXBzLCB7IG1pbmltdW06ICc2MCUnIH0pO1xuICAgIHJlbmRlcigpO1xuXG4gICAgZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgICBpZiAoIXBlcnNvbikge1xuICAgICAgICAgICAgc2hvdyg8TG9hZGluZyAvPik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzaG93KFxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxoMT57cGVyc29uLm5hbWV9PC9oMT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj5IZWlnaHQ6IHtwZXJzb24uaGVpZ2h0fSBjbTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2Pk1hc3M6IHtwZXJzb24ubWFzc30ga2c8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj5IYWlyIGNvbG9yOiB7cGVyc29uLmhhaXJfY29sb3J9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+U2tpbiBjb2xvcjoge3BlcnNvbi5za2luX2NvbG9yfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PkhhaXIgY29sb3I6IHtwZXJzb24uaGFpcl9jb2xvcn08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj5FeWUgY29sb3I6IHtwZXJzb24uZXllX2NvbG9yfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PkJpcnRoIHllYXI6IHtwZXJzb24uYmlydGhfeWVhcn08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGgyPkhvbWV3b3JsZDwvaDI+XG4gICAgICAgICAgICAgICAgICAgIDxMaXN0IHVybHM9e3BlcnNvbi5ob21ld29ybGR9IGl0ZW1zPXtob21ld29ybGR9IHBhZ2VOYW1lPVwicGxhbmV0LXN1bW1hcnlcIiByb3V0ZT17cm91dGV9IC8+XG4gICAgICAgICAgICAgICAgICAgIDxoMj5GaWxtczwvaDI+XG4gICAgICAgICAgICAgICAgICAgIDxMaXN0IHVybHM9e3BlcnNvbi5maWxtc30gaXRlbXM9e2ZpbG1zfSBmaWVsZD1cInRpdGxlXCIgcGFnZU5hbWU9XCJmaWxtLXN1bW1hcnlcIiByb3V0ZT17cm91dGV9IC8+XG4gICAgICAgICAgICAgICAgICAgIDxoMj5TcGVjaWVzPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgPExpc3QgdXJscz17cGVyc29uLnNwZWNpZXN9IGl0ZW1zPXtzcGVjaWVzfSBwYWdlTmFtZT1cInNwZWNpZXMtc3VtbWFyeVwiIHJvdXRlPXtyb3V0ZX0gLz5cbiAgICAgICAgICAgICAgICAgICAgPGgyPlZlaGljbGVzPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgPExpc3QgdXJscz17cGVyc29uLnZlaGljbGVzfSBpdGVtcz17dmVoaWNsZXN9IHBhZ2VOYW1lPVwidmVoaWNsZS1zdW1tYXJ5XCIgcm91dGU9e3JvdXRlfSAvPlxuICAgICAgICAgICAgICAgICAgICA8aDI+U3RhcnNoaXBzPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgPExpc3QgdXJscz17cGVyc29uLnN0YXJzaGlwc30gaXRlbXM9e3N0YXJzaGlwc30gcGFnZU5hbWU9XCJzdGFyc2hpcC1zdW1tYXJ5XCIgcm91dGU9e3JvdXRlfSAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuY29uc3QgYXN5bmNDb21wb25lbnQgPSBSZWxha3MoQ2hhcmFjdGVyUGFnZSk7XG5cbmV4cG9ydCB7XG4gICAgYXN5bmNDb21wb25lbnQgYXMgZGVmYXVsdCxcbiAgICBhc3luY0NvbXBvbmVudCBhcyBDaGFyYWN0ZXJQYWdlLFxufTtcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5cbmZ1bmN0aW9uIExpc3QocHJvcHMpIHtcbiAgICBsZXQgeyByb3V0ZSwgdXJscywgaXRlbXMsIGZpZWxkLCBwYWdlTmFtZSB9ID0gcHJvcHM7XG4gICAgaWYgKHVybHMpIHtcbiAgICAgICAgLy8gYWNjZXB0IHNpbmdsZSBVUkwgYW5kIG9iamVjdFxuICAgICAgICBpZiAodHlwZW9mKHVybHMpID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgdXJscyA9IFsgdXJscyBdO1xuICAgICAgICAgICAgaXRlbXMgPSBbIGl0ZW1zIF07XG4gICAgICAgIH1cbiAgICAgICAgLy8gZGVhbCB3aXRoIGhvbGVzIGluIHRoZSBkYXRhIHNldFxuICAgICAgICBpdGVtcyA9IHVybHMubWFwKCh1cmwsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBsZXQgaXRlbSA9IChpdGVtcykgPyBpdGVtc1tpbmRleF0gOiBudWxsO1xuICAgICAgICAgICAgaWYgKCFpdGVtKSB7XG4gICAgICAgICAgICAgICAgaXRlbSA9IHsgdXJsLCBwZW5kaW5nOiB0cnVlIH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gaXRlbTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGlmICghaXRlbXMpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGlmIChpdGVtcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuIDx1bCBjbGFzc05hbWU9XCJlbXB0eVwiPjxsaT48c3Bhbj5ub25lPC9zcGFuPjwvbGk+PC91bD47XG4gICAgfVxuICAgIHJldHVybiA8dWw+e2l0ZW1zLm1hcChyZW5kZXJJdGVtKX08L3VsPjtcblxuICAgIGZ1bmN0aW9uIHJlbmRlckl0ZW0oaXRlbSwgaSkge1xuICAgICAgICBjb25zdCBpZCA9IHJvdXRlLmV4dHJhY3RJRChpdGVtLnVybCk7XG4gICAgICAgIGNvbnN0IHVybCA9IHJvdXRlLmZpbmQocGFnZU5hbWUsIHsgaWQgfSk7XG4gICAgICAgIGNvbnN0IHRleHQgPSBpdGVtLnBlbmRpbmcgPyAnLi4uJyA6IGl0ZW1bZmllbGRdO1xuICAgICAgICBjb25zdCBsaW5rUHJvcHMgPSB7XG4gICAgICAgICAgICBocmVmOiB1cmwsXG4gICAgICAgICAgICBjbGFzc05hbWU6IChpdGVtLnBlbmRpbmcpID8gJ3BlbmRpbmcnIDogdW5kZWZpbmVkLFxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gPGxpIGtleT17aX0+PGEgey4uLmxpbmtQcm9wc30+e3RleHR9PC9hPjwvbGk+O1xuICAgIH1cbn1cblxuTGlzdC5kZWZhdWx0UHJvcHMgPSB7XG4gICAgZmllbGQ6ICduYW1lJ1xufTtcblxuZXhwb3J0IHtcbiAgICBMaXN0IGFzIGRlZmF1bHQsXG4gICAgTGlzdFxufTtcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5cbmZ1bmN0aW9uIExvYWRpbmcoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2FkaW5nXCI+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhYiBmYS1lbXBpcmUgZmEtc3BpblwiLz4gTG9hZGluZ1xuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cbmV4cG9ydCB7XG4gICAgTG9hZGluZyBhcyBkZWZhdWx0LFxuICAgIExvYWRpbmdcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9