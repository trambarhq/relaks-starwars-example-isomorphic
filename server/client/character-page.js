exports.ids = ["character-page"];
exports.modules = {

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

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9jaGFyYWN0ZXItcGFnZS5qc3giLCJ3ZWJwYWNrOi8vLy4vd2lkZ2V0cy9saXN0LmpzeCIsIndlYnBhY2s6Ly8vLi93aWRnZXRzL2xvYWRpbmcuanN4Il0sIm5hbWVzIjpbInByb3BzIiwicmVuZGVyIiwicGVyc29uIiwic2hvdyIsIm5hbWUiLCJoZWlnaHQiLCJtYXNzIiwiaGFpcl9jb2xvciIsInNraW5fY29sb3IiLCJleWVfY29sb3IiLCJiaXJ0aF95ZWFyIiwiaG9tZXdvcmxkIiwicm91dGUiLCJmaWxtcyIsInNwZWNpZXMiLCJ2ZWhpY2xlcyIsInN0YXJzaGlwcyIsInN3YXBpIiwiZmV0Y2hPbmUiLCJwYXJhbXMiLCJpZCIsImZldGNoTXVsdGlwbGUiLCJtaW5pbXVtIiwiQ2hhcmFjdGVyUGFnZSIsImFzeW5jQ29tcG9uZW50IiwiZGVmYXVsdCIsIkxpc3QiLCJ1cmxzIiwiaXRlbXMiLCJmaWVsZCIsInBhZ2VOYW1lIiwibWFwIiwidXJsIiwiaW5kZXgiLCJpdGVtIiwicGVuZGluZyIsImxlbmd0aCIsInJlbmRlckl0ZW0iLCJpIiwiZXh0cmFjdElEIiwiZmluZCIsInRleHQiLCJsaW5rUHJvcHMiLCJocmVmIiwiY2xhc3NOYW1lIiwidW5kZWZpbmVkIiwiZGVmYXVsdFByb3BzIiwiTG9hZGluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt3RkFLQSxpQkFBNkJBLEtBQTdCO0FBQUEscUhBa0JhQyxNQWxCYjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQWtCYUEsOEJBbEJiLFlBa0JhQSxNQWxCYixHQWtCc0I7QUFDZCxnQ0FBSSxDQUFDQyxNQUFMLEVBQWE7QUFDVEMscUNBQUssOEJBQUMsaUJBQUQsT0FBTDtBQUNILDZCQUZELE1BRU87QUFDSEEscUNBQ0k7QUFBQTtBQUFBO0FBQ0k7QUFBQTtBQUFBO0FBQUtELCtDQUFPRTtBQUFaLHFDQURKO0FBRUk7QUFBQTtBQUFBO0FBQUE7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QUo7QUFBdEIsU0FBUDtBQUNIO0FBQ0QsV0FBTztBQUFBO0FBQUE7QUFBS1IsY0FBTUcsR0FBTixDQUFVTSxVQUFWO0FBQUwsS0FBUDs7QUFFQSxhQUFTQSxVQUFULENBQW9CSCxJQUFwQixFQUEwQkksQ0FBMUIsRUFBNkI7QUFDekIsWUFBTWxCLEtBQUtSLE1BQU0yQixTQUFOLENBQWdCTCxLQUFLRixHQUFyQixDQUFYO0FBQ0EsWUFBTUEsTUFBTXBCLE1BQU00QixJQUFOLENBQVdWLFFBQVgsRUFBcUIsRUFBRVYsTUFBRixFQUFyQixDQUFaO0FBQ0EsWUFBTXFCLE9BQU9QLEtBQUtDLE9BQUwsR0FBZSxLQUFmLEdBQXVCRCxLQUFLTCxLQUFMLENBQXBDO0FBQ0EsWUFBTWEsWUFBWTtBQUNkQyxrQkFBTVgsR0FEUTtBQUVkWSx1QkFBWVYsS0FBS0MsT0FBTixHQUFpQixTQUFqQixHQUE2QlU7QUFGMUIsU0FBbEI7QUFJQSxlQUFPO0FBQUE7QUFBQSxjQUFJLEtBQUtQLENBQVQ7QUFBWTtBQUFBO0FBQU9JLHlCQUFQO0FBQW1CRDtBQUFuQjtBQUFaLFNBQVA7QUFDSDtBQUNKOztBQUVEZixLQUFLb0IsWUFBTCxHQUFvQjtBQUNoQmpCLFdBQU87QUFEUyxDQUFwQjs7UUFLWUosTyxHQUFSQyxJO1FBQ0FBLEksR0FBQUEsSTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdDSjs7Ozs7O0FBRUEsU0FBU3FCLE9BQVQsR0FBbUI7QUFDZixXQUNJO0FBQUE7QUFBQSxVQUFLLFdBQVUsU0FBZjtBQUNJO0FBQUE7QUFBQTtBQUNJLGlEQUFHLFdBQVUsdUJBQWIsR0FESjtBQUFBO0FBQUE7QUFESixLQURKO0FBT0g7O1FBR2N0QixPLEdBQVhzQixPO1FBQ0FBLE8sR0FBQUEsTyIsImZpbGUiOiJjaGFyYWN0ZXItcGFnZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVsYWtzLCB7IHVzZVByb2dyZXNzIH0gZnJvbSAncmVsYWtzL2hvb2tzJztcbmltcG9ydCB7IExpc3QgfSBmcm9tICd3aWRnZXRzL2xpc3QnO1xuaW1wb3J0IExvYWRpbmcgZnJvbSAnd2lkZ2V0cy9sb2FkaW5nJztcblxuYXN5bmMgZnVuY3Rpb24gQ2hhcmFjdGVyUGFnZShwcm9wcykge1xuICAgIGNvbnN0IHsgcm91dGUsIHN3YXBpIH0gPSBwcm9wcztcbiAgICBjb25zdCBbIHNob3cgXSA9IHVzZVByb2dyZXNzKCk7XG5cbiAgICByZW5kZXIoKTtcbiAgICBjb25zdCBwZXJzb24gPSBhd2FpdCBzd2FwaS5mZXRjaE9uZShgL3Blb3BsZS8ke3JvdXRlLnBhcmFtcy5pZH0vYCk7XG4gICAgcmVuZGVyKCk7XG4gICAgY29uc3QgZmlsbXMgPSBhd2FpdCBzd2FwaS5mZXRjaE11bHRpcGxlKHBlcnNvbi5maWxtcywgeyBtaW5pbXVtOiAnNjAlJyB9KTtcbiAgICByZW5kZXIoKTtcbiAgICBjb25zdCBzcGVjaWVzID0gYXdhaXQgc3dhcGkuZmV0Y2hNdWx0aXBsZShwZXJzb24uc3BlY2llcywgeyBtaW5pbXVtOiAnNjAlJyB9KTtcbiAgICByZW5kZXIoKTtcbiAgICBjb25zdCBob21ld29ybGQgPSBhd2FpdCBzd2FwaS5mZXRjaE9uZShwZXJzb24uaG9tZXdvcmxkKTtcbiAgICByZW5kZXIoKTtcbiAgICBjb25zdCB2ZWhpY2xlcyA9IGF3YWl0IHN3YXBpLmZldGNoTXVsdGlwbGUocGVyc29uLnZlaGljbGVzLCB7IG1pbmltdW06ICc2MCUnIH0pO1xuICAgIHJlbmRlcigpO1xuICAgIGNvbnN0IHN0YXJzaGlwcyA9IGF3YWl0IHN3YXBpLmZldGNoTXVsdGlwbGUocGVyc29uLnN0YXJzaGlwcywgeyBtaW5pbXVtOiAnNjAlJyB9KTtcbiAgICByZW5kZXIoKTtcblxuICAgIGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgICAgaWYgKCFwZXJzb24pIHtcbiAgICAgICAgICAgIHNob3coPExvYWRpbmcgLz4pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2hvdyhcbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8aDE+e3BlcnNvbi5uYW1lfTwvaDE+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+SGVpZ2h0OiB7cGVyc29uLmhlaWdodH0gY208L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj5NYXNzOiB7cGVyc29uLm1hc3N9IGtnPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+SGFpciBjb2xvcjoge3BlcnNvbi5oYWlyX2NvbG9yfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlNraW4gY29sb3I6IHtwZXJzb24uc2tpbl9jb2xvcn08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj5IYWlyIGNvbG9yOiB7cGVyc29uLmhhaXJfY29sb3J9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+RXllIGNvbG9yOiB7cGVyc29uLmV5ZV9jb2xvcn08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj5CaXJ0aCB5ZWFyOiB7cGVyc29uLmJpcnRoX3llYXJ9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxoMj5Ib21ld29ybGQ8L2gyPlxuICAgICAgICAgICAgICAgICAgICA8TGlzdCB1cmxzPXtwZXJzb24uaG9tZXdvcmxkfSBpdGVtcz17aG9tZXdvcmxkfSBwYWdlTmFtZT1cInBsYW5ldC1zdW1tYXJ5XCIgcm91dGU9e3JvdXRlfSAvPlxuICAgICAgICAgICAgICAgICAgICA8aDI+RmlsbXM8L2gyPlxuICAgICAgICAgICAgICAgICAgICA8TGlzdCB1cmxzPXtwZXJzb24uZmlsbXN9IGl0ZW1zPXtmaWxtc30gZmllbGQ9XCJ0aXRsZVwiIHBhZ2VOYW1lPVwiZmlsbS1zdW1tYXJ5XCIgcm91dGU9e3JvdXRlfSAvPlxuICAgICAgICAgICAgICAgICAgICA8aDI+U3BlY2llczwvaDI+XG4gICAgICAgICAgICAgICAgICAgIDxMaXN0IHVybHM9e3BlcnNvbi5zcGVjaWVzfSBpdGVtcz17c3BlY2llc30gcGFnZU5hbWU9XCJzcGVjaWVzLXN1bW1hcnlcIiByb3V0ZT17cm91dGV9IC8+XG4gICAgICAgICAgICAgICAgICAgIDxoMj5WZWhpY2xlczwvaDI+XG4gICAgICAgICAgICAgICAgICAgIDxMaXN0IHVybHM9e3BlcnNvbi52ZWhpY2xlc30gaXRlbXM9e3ZlaGljbGVzfSBwYWdlTmFtZT1cInZlaGljbGUtc3VtbWFyeVwiIHJvdXRlPXtyb3V0ZX0gLz5cbiAgICAgICAgICAgICAgICAgICAgPGgyPlN0YXJzaGlwczwvaDI+XG4gICAgICAgICAgICAgICAgICAgIDxMaXN0IHVybHM9e3BlcnNvbi5zdGFyc2hpcHN9IGl0ZW1zPXtzdGFyc2hpcHN9IHBhZ2VOYW1lPVwic3RhcnNoaXAtc3VtbWFyeVwiIHJvdXRlPXtyb3V0ZX0gLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmNvbnN0IGFzeW5jQ29tcG9uZW50ID0gUmVsYWtzKENoYXJhY3RlclBhZ2UpO1xuXG5leHBvcnQge1xuICAgIGFzeW5jQ29tcG9uZW50IGFzIGRlZmF1bHQsXG4gICAgYXN5bmNDb21wb25lbnQgYXMgQ2hhcmFjdGVyUGFnZSxcbn07XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuXG5mdW5jdGlvbiBMaXN0KHByb3BzKSB7XG4gICAgbGV0IHsgcm91dGUsIHVybHMsIGl0ZW1zLCBmaWVsZCwgcGFnZU5hbWUgfSA9IHByb3BzO1xuICAgIGlmICh1cmxzKSB7XG4gICAgICAgIC8vIGFjY2VwdCBzaW5nbGUgVVJMIGFuZCBvYmplY3RcbiAgICAgICAgaWYgKHR5cGVvZih1cmxzKSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIHVybHMgPSBbIHVybHMgXTtcbiAgICAgICAgICAgIGl0ZW1zID0gWyBpdGVtcyBdO1xuICAgICAgICB9XG4gICAgICAgIC8vIGRlYWwgd2l0aCBob2xlcyBpbiB0aGUgZGF0YSBzZXRcbiAgICAgICAgaXRlbXMgPSB1cmxzLm1hcCgodXJsLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgbGV0IGl0ZW0gPSAoaXRlbXMpID8gaXRlbXNbaW5kZXhdIDogbnVsbDtcbiAgICAgICAgICAgIGlmICghaXRlbSkge1xuICAgICAgICAgICAgICAgIGl0ZW0gPSB7IHVybCwgcGVuZGluZzogdHJ1ZSB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGl0ZW07XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAoIWl0ZW1zKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBpZiAoaXRlbXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJldHVybiA8dWwgY2xhc3NOYW1lPVwiZW1wdHlcIj48bGk+PHNwYW4+bm9uZTwvc3Bhbj48L2xpPjwvdWw+O1xuICAgIH1cbiAgICByZXR1cm4gPHVsPntpdGVtcy5tYXAocmVuZGVySXRlbSl9PC91bD47XG5cbiAgICBmdW5jdGlvbiByZW5kZXJJdGVtKGl0ZW0sIGkpIHtcbiAgICAgICAgY29uc3QgaWQgPSByb3V0ZS5leHRyYWN0SUQoaXRlbS51cmwpO1xuICAgICAgICBjb25zdCB1cmwgPSByb3V0ZS5maW5kKHBhZ2VOYW1lLCB7IGlkIH0pO1xuICAgICAgICBjb25zdCB0ZXh0ID0gaXRlbS5wZW5kaW5nID8gJy4uLicgOiBpdGVtW2ZpZWxkXTtcbiAgICAgICAgY29uc3QgbGlua1Byb3BzID0ge1xuICAgICAgICAgICAgaHJlZjogdXJsLFxuICAgICAgICAgICAgY2xhc3NOYW1lOiAoaXRlbS5wZW5kaW5nKSA/ICdwZW5kaW5nJyA6IHVuZGVmaW5lZCxcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIDxsaSBrZXk9e2l9PjxhIHsuLi5saW5rUHJvcHN9Pnt0ZXh0fTwvYT48L2xpPjtcbiAgICB9XG59XG5cbkxpc3QuZGVmYXVsdFByb3BzID0ge1xuICAgIGZpZWxkOiAnbmFtZSdcbn07XG5cbmV4cG9ydCB7XG4gICAgTGlzdCBhcyBkZWZhdWx0LFxuICAgIExpc3Rcbn07XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuXG5mdW5jdGlvbiBMb2FkaW5nKCkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9hZGluZ1wiPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYWIgZmEtZW1waXJlIGZhLXNwaW5cIi8+IExvYWRpbmdcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuXG5leHBvcnQge1xuICAgIExvYWRpbmcgYXMgZGVmYXVsdCxcbiAgICBMb2FkaW5nXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==