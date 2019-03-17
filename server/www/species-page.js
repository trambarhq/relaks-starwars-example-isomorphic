(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["species-page"],{

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

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9zcGVjaWVzLXBhZ2UuanN4Iiwid2VicGFjazovLy8uL3dpZGdldHMvbGlzdC5qc3giLCJ3ZWJwYWNrOi8vLy4vd2lkZ2V0cy9sb2FkaW5nLmpzeCJdLCJuYW1lcyI6WyJwcm9wcyIsInJlbmRlciIsInNwZWNpZXMiLCJzaG93IiwibmFtZSIsImNsYXNzaWZpY2F0aW9uIiwiZGVzaWduYXRpb24iLCJhdmVyYWdlX2hlaWdodCIsInNraW5fY29sb3JzIiwiaGFpcl9jb2xvcnMiLCJleWVfY29sb3JzIiwiYXZlcmFnZV9saWZlc3BhbiIsImxhbmd1YWdlIiwiaG9tZXdvcmxkIiwicm91dGUiLCJwZW9wbGUiLCJmaWxtcyIsInN3YXBpIiwiZmV0Y2hPbmUiLCJwYXJhbXMiLCJpZCIsImZldGNoTXVsdGlwbGUiLCJtaW5pbXVtIiwiU3BlY2llc1BhZ2UiLCJhc3luY0NvbXBvbmVudCIsImRlZmF1bHQiLCJMaXN0IiwidXJscyIsIml0ZW1zIiwiZmllbGQiLCJwYWdlTmFtZSIsIm1hcCIsInVybCIsImluZGV4IiwiaXRlbSIsInBlbmRpbmciLCJsZW5ndGgiLCJyZW5kZXJJdGVtIiwiaSIsImV4dHJhY3RJRCIsImZpbmQiLCJ0ZXh0IiwibGlua1Byb3BzIiwiaHJlZiIsImNsYXNzTmFtZSIsInVuZGVmaW5lZCIsImRlZmF1bHRQcm9wcyIsIkxvYWRpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt3RkFLQSxpQkFBMkJBLEtBQTNCO0FBQUEsZ0dBY2FDLE1BZGI7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFjYUEsOEJBZGIsWUFjYUEsTUFkYixHQWNzQjtBQUNkLGdDQUFJLENBQUNDLE9BQUwsRUFBYztBQUNWQyxxQ0FBSyw4QkFBQyxpQkFBRCxPQUFMO0FBQ0gsNkJBRkQsTUFFTztBQUNIQSxxQ0FDSTtBQUFBO0FBQUE7QUFDSTtBQUFBO0FBQUE7QUFBS0QsZ0RBQVFFO0FBQWIscUNBREo7QUFF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QUFZO0FBQUE7QUFBT0kseUJBQVA7QUFBbUJEO0FBQW5CO0FBQVosU0FBUDtBQUNIO0FBQ0o7O0FBRURmLEtBQUtvQixZQUFMLEdBQW9CO0FBQ2hCakIsV0FBTztBQURTLENBQXBCOztRQUtZSixPLEdBQVJDLEk7UUFDQUEsSSxHQUFBQSxJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0NKOzs7Ozs7QUFFQSxTQUFTcUIsT0FBVCxHQUFtQjtBQUNmLFdBQ0k7QUFBQTtBQUFBLFVBQUssV0FBVSxTQUFmO0FBQ0k7QUFBQTtBQUFBO0FBQ0ksaURBQUcsV0FBVSx1QkFBYixHQURKO0FBQUE7QUFBQTtBQURKLEtBREo7QUFPSDs7UUFHY3RCLE8sR0FBWHNCLE87UUFDQUEsTyxHQUFBQSxPIiwiZmlsZSI6InNwZWNpZXMtcGFnZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVsYWtzLCB7IHVzZVByb2dyZXNzIH0gZnJvbSAncmVsYWtzL2hvb2tzJztcbmltcG9ydCB7IExpc3QgfSBmcm9tICd3aWRnZXRzL2xpc3QnO1xuaW1wb3J0IExvYWRpbmcgZnJvbSAnd2lkZ2V0cy9sb2FkaW5nJztcblxuYXN5bmMgZnVuY3Rpb24gU3BlY2llc1BhZ2UocHJvcHMpIHtcbiAgICBjb25zdCB7IHJvdXRlLCBzd2FwaSB9ID0gcHJvcHM7XG4gICAgY29uc3QgWyBzaG93IF0gPSB1c2VQcm9ncmVzcygpO1xuXG4gICAgcmVuZGVyKCk7XG4gICAgY29uc3Qgc3BlY2llcyA9IGF3YWl0IHN3YXBpLmZldGNoT25lKGAvc3BlY2llcy8ke3JvdXRlLnBhcmFtcy5pZH0vYCk7XG4gICAgcmVuZGVyKCk7XG4gICAgY29uc3QgZmlsbXMgPSBhd2FpdCBzd2FwaS5mZXRjaE11bHRpcGxlKHNwZWNpZXMuZmlsbXMsIHsgbWluaW11bTogJzYwJScgfSk7XG4gICAgcmVuZGVyKCk7XG4gICAgY29uc3QgcGVvcGxlID0gYXdhaXQgc3dhcGkuZmV0Y2hNdWx0aXBsZShzcGVjaWVzLnBlb3BsZSwgeyBtaW5pbXVtOiAnNjAlJyB9KTtcbiAgICByZW5kZXIoKTtcbiAgICBjb25zdCBob21ld29ybGQgPSBhd2FpdCBzd2FwaS5mZXRjaE9uZShzcGVjaWVzLmhvbWV3b3JsZCk7XG4gICAgcmVuZGVyKCk7XG5cbiAgICBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICAgIGlmICghc3BlY2llcykge1xuICAgICAgICAgICAgc2hvdyg8TG9hZGluZyAvPik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzaG93KFxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxoMT57c3BlY2llcy5uYW1lfTwvaDE+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+Q2xhc3NpZmljYXRpb246IHtzcGVjaWVzLmNsYXNzaWZpY2F0aW9ufTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PkRlc2lnbmF0aW9uOiB7c3BlY2llcy5kZXNpZ25hdGlvbn08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj5BdmVyYWdlIGhlaWdodDoge3NwZWNpZXMuYXZlcmFnZV9oZWlnaHR9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+U2tpbiBjb2xvcnM6IHtzcGVjaWVzLnNraW5fY29sb3JzfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PkhhaXIgY29sb3JzOiB7c3BlY2llcy5oYWlyX2NvbG9yc308L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj5FeWUgY29sb3JzOiB7c3BlY2llcy5leWVfY29sb3JzfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PkF2ZXJhZ2UgbGlmZXNwYW46IHtzcGVjaWVzLmF2ZXJhZ2VfbGlmZXNwYW59PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+TGFuZ3VhZ2U6IHtzcGVjaWVzLmxhbmd1YWdlfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8aDI+SG9tZXdvcmxkPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgPExpc3QgdXJscz17c3BlY2llcy5ob21ld29ybGR9IGl0ZW1zPXtob21ld29ybGR9IHBhZ2VOYW1lPVwicGxhbmV0LXN1bW1hcnlcIiByb3V0ZT17cm91dGV9IC8+XG4gICAgICAgICAgICAgICAgICAgIDxoMj5NZW1iZXJzPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgPExpc3QgdXJscz17c3BlY2llcy5wZW9wbGV9IGl0ZW1zPXtwZW9wbGV9IHBhZ2VOYW1lPVwiY2hhcmFjdGVyLXN1bW1hcnlcIiByb3V0ZT17cm91dGV9IC8+XG4gICAgICAgICAgICAgICAgICAgIDxoMj5GaWxtczwvaDI+XG4gICAgICAgICAgICAgICAgICAgIDxMaXN0IHVybHM9e3NwZWNpZXMuZmlsbXN9IGl0ZW1zPXtmaWxtc30gZmllbGQ9XCJ0aXRsZVwiIHBhZ2VOYW1lPVwiZmlsbS1zdW1tYXJ5XCIgcm91dGU9e3JvdXRlfSAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuY29uc3QgYXN5bmNDb21wb25lbnQgPSBSZWxha3MoU3BlY2llc1BhZ2UpO1xuXG5leHBvcnQge1xuICAgIGFzeW5jQ29tcG9uZW50IGFzIGRlZmF1bHQsXG4gICAgYXN5bmNDb21wb25lbnQgYXMgU3BlY2llc1BhZ2UsXG59O1xuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcblxuZnVuY3Rpb24gTGlzdChwcm9wcykge1xuICAgIGxldCB7IHJvdXRlLCB1cmxzLCBpdGVtcywgZmllbGQsIHBhZ2VOYW1lIH0gPSBwcm9wcztcbiAgICBpZiAodXJscykge1xuICAgICAgICAvLyBhY2NlcHQgc2luZ2xlIFVSTCBhbmQgb2JqZWN0XG4gICAgICAgIGlmICh0eXBlb2YodXJscykgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICB1cmxzID0gWyB1cmxzIF07XG4gICAgICAgICAgICBpdGVtcyA9IFsgaXRlbXMgXTtcbiAgICAgICAgfVxuICAgICAgICAvLyBkZWFsIHdpdGggaG9sZXMgaW4gdGhlIGRhdGEgc2V0XG4gICAgICAgIGl0ZW1zID0gdXJscy5tYXAoKHVybCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGxldCBpdGVtID0gKGl0ZW1zKSA/IGl0ZW1zW2luZGV4XSA6IG51bGw7XG4gICAgICAgICAgICBpZiAoIWl0ZW0pIHtcbiAgICAgICAgICAgICAgICBpdGVtID0geyB1cmwsIHBlbmRpbmc6IHRydWUgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBpdGVtO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgaWYgKCFpdGVtcykge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgaWYgKGl0ZW1zLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gPHVsIGNsYXNzTmFtZT1cImVtcHR5XCI+PGxpPjxzcGFuPm5vbmU8L3NwYW4+PC9saT48L3VsPjtcbiAgICB9XG4gICAgcmV0dXJuIDx1bD57aXRlbXMubWFwKHJlbmRlckl0ZW0pfTwvdWw+O1xuXG4gICAgZnVuY3Rpb24gcmVuZGVySXRlbShpdGVtLCBpKSB7XG4gICAgICAgIGNvbnN0IGlkID0gcm91dGUuZXh0cmFjdElEKGl0ZW0udXJsKTtcbiAgICAgICAgY29uc3QgdXJsID0gcm91dGUuZmluZChwYWdlTmFtZSwgeyBpZCB9KTtcbiAgICAgICAgY29uc3QgdGV4dCA9IGl0ZW0ucGVuZGluZyA/ICcuLi4nIDogaXRlbVtmaWVsZF07XG4gICAgICAgIGNvbnN0IGxpbmtQcm9wcyA9IHtcbiAgICAgICAgICAgIGhyZWY6IHVybCxcbiAgICAgICAgICAgIGNsYXNzTmFtZTogKGl0ZW0ucGVuZGluZykgPyAncGVuZGluZycgOiB1bmRlZmluZWQsXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiA8bGkga2V5PXtpfT48YSB7Li4ubGlua1Byb3BzfT57dGV4dH08L2E+PC9saT47XG4gICAgfVxufVxuXG5MaXN0LmRlZmF1bHRQcm9wcyA9IHtcbiAgICBmaWVsZDogJ25hbWUnXG59O1xuXG5leHBvcnQge1xuICAgIExpc3QgYXMgZGVmYXVsdCxcbiAgICBMaXN0XG59O1xuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcblxuZnVuY3Rpb24gTG9hZGluZygpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvYWRpbmdcIj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFiIGZhLWVtcGlyZSBmYS1zcGluXCIvPiBMb2FkaW5nXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cblxuZXhwb3J0IHtcbiAgICBMb2FkaW5nIGFzIGRlZmF1bHQsXG4gICAgTG9hZGluZ1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=