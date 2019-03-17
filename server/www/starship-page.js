(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["starship-page"],{

/***/ "./pages/starship-page.jsx":
/*!*********************************!*\
  !*** ./pages/starship-page.jsx ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.StarshipPage = exports.default = undefined;

var _regenerator = __webpack_require__(/*! babel-runtime/regenerator */ "../node_modules/babel-runtime/regenerator/index.js");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _slicedToArray2 = __webpack_require__(/*! babel-runtime/helpers/slicedToArray */ "../node_modules/babel-runtime/helpers/slicedToArray.js");

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _asyncToGenerator2 = __webpack_require__(/*! babel-runtime/helpers/asyncToGenerator */ "../node_modules/babel-runtime/helpers/asyncToGenerator.js");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var StarshipPage = function () {
    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(props) {
        var route, swapi, _useProgress, _useProgress2, show, starship, films, pilots, render;

        return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        render = function render() {
                            if (!starship) {
                                show(_react2.default.createElement(_loading2.default, null));
                            } else {
                                show(_react2.default.createElement(
                                    'div',
                                    null,
                                    _react2.default.createElement(
                                        'h1',
                                        null,
                                        starship.name
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        null,
                                        'Model: ',
                                        starship.model
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        null,
                                        'Manufacturer: ',
                                        starship.manufacturer
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        null,
                                        'Cost in credits: ',
                                        starship.cost_in_credits
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        null,
                                        'Length: ',
                                        starship.length,
                                        ' m'
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        null,
                                        'Max atmosphering speed: ',
                                        starship.max_atmosphering_speed,
                                        ' km/h'
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        null,
                                        'Max sublight speed: ',
                                        starship.MGLT,
                                        ' MGLT'
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        null,
                                        'Hyperdrive rating: ',
                                        starship.hyperdrive_rating
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        null,
                                        'Crew: ',
                                        starship.crew
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        null,
                                        'Passengers: ',
                                        starship.passenger
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        null,
                                        'Cargo capacity: ',
                                        starship.cargo_capacity,
                                        ' kg'
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        null,
                                        'Consumables: ',
                                        starship.consumables
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        null,
                                        'Starship class: ',
                                        starship.starship_class
                                    ),
                                    _react2.default.createElement(
                                        'h2',
                                        null,
                                        'Pilots'
                                    ),
                                    _react2.default.createElement(_list.List, { urls: starship.pilots, items: pilots, pageName: 'character-summary', route: route }),
                                    _react2.default.createElement(
                                        'h2',
                                        null,
                                        'Films'
                                    ),
                                    _react2.default.createElement(_list.List, { urls: starship.films, items: films, field: 'title', pageName: 'film-summary', route: route })
                                ));
                            }
                        };

                        route = props.route, swapi = props.swapi;
                        _useProgress = (0, _hooks.useProgress)(), _useProgress2 = (0, _slicedToArray3.default)(_useProgress, 1), show = _useProgress2[0];


                        render();
                        _context.next = 6;
                        return swapi.fetchOne('/starships/' + route.params.id + '/');

                    case 6:
                        starship = _context.sent;

                        render();
                        _context.next = 10;
                        return swapi.fetchMultiple(starship.films, { minimum: '60%' });

                    case 10:
                        films = _context.sent;

                        render();
                        _context.next = 14;
                        return swapi.fetchMultiple(starship.pilots, { minimum: '60%' });

                    case 14:
                        pilots = _context.sent;

                        render();

                    case 16:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, this);
    }));

    return function StarshipPage(_x) {
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

var asyncComponent = (0, _hooks2.default)(StarshipPage);

exports.default = asyncComponent;
exports.StarshipPage = asyncComponent;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9zdGFyc2hpcC1wYWdlLmpzeCIsIndlYnBhY2s6Ly8vLi93aWRnZXRzL2xpc3QuanN4Iiwid2VicGFjazovLy8uL3dpZGdldHMvbG9hZGluZy5qc3giXSwibmFtZXMiOlsicHJvcHMiLCJyZW5kZXIiLCJzdGFyc2hpcCIsInNob3ciLCJuYW1lIiwibW9kZWwiLCJtYW51ZmFjdHVyZXIiLCJjb3N0X2luX2NyZWRpdHMiLCJsZW5ndGgiLCJtYXhfYXRtb3NwaGVyaW5nX3NwZWVkIiwiTUdMVCIsImh5cGVyZHJpdmVfcmF0aW5nIiwiY3JldyIsInBhc3NlbmdlciIsImNhcmdvX2NhcGFjaXR5IiwiY29uc3VtYWJsZXMiLCJzdGFyc2hpcF9jbGFzcyIsInBpbG90cyIsInJvdXRlIiwiZmlsbXMiLCJzd2FwaSIsImZldGNoT25lIiwicGFyYW1zIiwiaWQiLCJmZXRjaE11bHRpcGxlIiwibWluaW11bSIsIlN0YXJzaGlwUGFnZSIsImFzeW5jQ29tcG9uZW50IiwiZGVmYXVsdCIsIkxpc3QiLCJ1cmxzIiwiaXRlbXMiLCJmaWVsZCIsInBhZ2VOYW1lIiwibWFwIiwidXJsIiwiaW5kZXgiLCJpdGVtIiwicGVuZGluZyIsInJlbmRlckl0ZW0iLCJpIiwiZXh0cmFjdElEIiwiZmluZCIsInRleHQiLCJsaW5rUHJvcHMiLCJocmVmIiwiY2xhc3NOYW1lIiwidW5kZWZpbmVkIiwiZGVmYXVsdFByb3BzIiwiTG9hZGluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3dGQUtBLGlCQUE0QkEsS0FBNUI7QUFBQSxzRkFZYUMsTUFaYjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVlhQSw4QkFaYixZQVlhQSxNQVpiLEdBWXNCO0FBQ2QsZ0NBQUksQ0FBQ0MsUUFBTCxFQUFlO0FBQ1hDLHFDQUFLLDhCQUFDLGlCQUFELE9BQUw7QUFDSCw2QkFGRCxNQUVPO0FBQ0hBLHFDQUNJO0FBQUE7QUFBQTtBQUNJO0FBQUE7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LFNBQWpCLEdBQTZCUztBQUYxQixTQUFsQjtBQUlBLGVBQU87QUFBQTtBQUFBLGNBQUksS0FBS1AsQ0FBVDtBQUFZO0FBQUE7QUFBT0kseUJBQVA7QUFBbUJEO0FBQW5CO0FBQVosU0FBUDtBQUNIO0FBQ0o7O0FBRURkLEtBQUttQixZQUFMLEdBQW9CO0FBQ2hCaEIsV0FBTztBQURTLENBQXBCOztRQUtZSixPLEdBQVJDLEk7UUFDQUEsSSxHQUFBQSxJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0NKOzs7Ozs7QUFFQSxTQUFTb0IsT0FBVCxHQUFtQjtBQUNmLFdBQ0k7QUFBQTtBQUFBLFVBQUssV0FBVSxTQUFmO0FBQ0k7QUFBQTtBQUFBO0FBQ0ksaURBQUcsV0FBVSx1QkFBYixHQURKO0FBQUE7QUFBQTtBQURKLEtBREo7QUFPSDs7UUFHY3JCLE8sR0FBWHFCLE87UUFDQUEsTyxHQUFBQSxPIiwiZmlsZSI6InN0YXJzaGlwLXBhZ2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlbGFrcywgeyB1c2VQcm9ncmVzcyB9IGZyb20gJ3JlbGFrcy9ob29rcyc7XG5pbXBvcnQgeyBMaXN0IH0gZnJvbSAnd2lkZ2V0cy9saXN0JztcbmltcG9ydCBMb2FkaW5nIGZyb20gJ3dpZGdldHMvbG9hZGluZyc7XG5cbmFzeW5jIGZ1bmN0aW9uIFN0YXJzaGlwUGFnZShwcm9wcykge1xuICAgIGNvbnN0IHsgcm91dGUsIHN3YXBpIH0gPSBwcm9wcztcbiAgICBjb25zdCBbIHNob3cgXSA9IHVzZVByb2dyZXNzKCk7XG5cbiAgICByZW5kZXIoKTtcbiAgICBjb25zdCBzdGFyc2hpcCA9IGF3YWl0IHN3YXBpLmZldGNoT25lKGAvc3RhcnNoaXBzLyR7cm91dGUucGFyYW1zLmlkfS9gKTtcbiAgICByZW5kZXIoKTtcbiAgICBjb25zdCBmaWxtcyA9IGF3YWl0IHN3YXBpLmZldGNoTXVsdGlwbGUoc3RhcnNoaXAuZmlsbXMsIHsgbWluaW11bTogJzYwJScgfSk7XG4gICAgcmVuZGVyKCk7XG4gICAgY29uc3QgcGlsb3RzID0gYXdhaXQgc3dhcGkuZmV0Y2hNdWx0aXBsZShzdGFyc2hpcC5waWxvdHMsIHsgbWluaW11bTogJzYwJScgfSk7XG4gICAgcmVuZGVyKCk7XG5cbiAgICBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICAgIGlmICghc3RhcnNoaXApIHtcbiAgICAgICAgICAgIHNob3coPExvYWRpbmcgLz4pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2hvdyhcbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8aDE+e3N0YXJzaGlwLm5hbWV9PC9oMT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj5Nb2RlbDoge3N0YXJzaGlwLm1vZGVsfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2Pk1hbnVmYWN0dXJlcjoge3N0YXJzaGlwLm1hbnVmYWN0dXJlcn08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj5Db3N0IGluIGNyZWRpdHM6IHtzdGFyc2hpcC5jb3N0X2luX2NyZWRpdHN9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+TGVuZ3RoOiB7c3RhcnNoaXAubGVuZ3RofSBtPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+TWF4IGF0bW9zcGhlcmluZyBzcGVlZDoge3N0YXJzaGlwLm1heF9hdG1vc3BoZXJpbmdfc3BlZWR9IGttL2g8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj5NYXggc3VibGlnaHQgc3BlZWQ6IHtzdGFyc2hpcC5NR0xUfSBNR0xUPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+SHlwZXJkcml2ZSByYXRpbmc6IHtzdGFyc2hpcC5oeXBlcmRyaXZlX3JhdGluZ308L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj5DcmV3OiB7c3RhcnNoaXAuY3Jld308L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj5QYXNzZW5nZXJzOiB7c3RhcnNoaXAucGFzc2VuZ2VyfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PkNhcmdvIGNhcGFjaXR5OiB7c3RhcnNoaXAuY2FyZ29fY2FwYWNpdHl9IGtnPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+Q29uc3VtYWJsZXM6IHtzdGFyc2hpcC5jb25zdW1hYmxlc308L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj5TdGFyc2hpcCBjbGFzczoge3N0YXJzaGlwLnN0YXJzaGlwX2NsYXNzfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8aDI+UGlsb3RzPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgPExpc3QgdXJscz17c3RhcnNoaXAucGlsb3RzfSBpdGVtcz17cGlsb3RzfSBwYWdlTmFtZT1cImNoYXJhY3Rlci1zdW1tYXJ5XCIgcm91dGU9e3JvdXRlfSAvPlxuICAgICAgICAgICAgICAgICAgICA8aDI+RmlsbXM8L2gyPlxuICAgICAgICAgICAgICAgICAgICA8TGlzdCB1cmxzPXtzdGFyc2hpcC5maWxtc30gaXRlbXM9e2ZpbG1zfSBmaWVsZD1cInRpdGxlXCIgcGFnZU5hbWU9XCJmaWxtLXN1bW1hcnlcIiByb3V0ZT17cm91dGV9IC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5jb25zdCBhc3luY0NvbXBvbmVudCA9IFJlbGFrcyhTdGFyc2hpcFBhZ2UpO1xuXG5leHBvcnQge1xuICAgIGFzeW5jQ29tcG9uZW50IGFzIGRlZmF1bHQsXG4gICAgYXN5bmNDb21wb25lbnQgYXMgU3RhcnNoaXBQYWdlLFxufTtcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5cbmZ1bmN0aW9uIExpc3QocHJvcHMpIHtcbiAgICBsZXQgeyByb3V0ZSwgdXJscywgaXRlbXMsIGZpZWxkLCBwYWdlTmFtZSB9ID0gcHJvcHM7XG4gICAgaWYgKHVybHMpIHtcbiAgICAgICAgLy8gYWNjZXB0IHNpbmdsZSBVUkwgYW5kIG9iamVjdFxuICAgICAgICBpZiAodHlwZW9mKHVybHMpID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgdXJscyA9IFsgdXJscyBdO1xuICAgICAgICAgICAgaXRlbXMgPSBbIGl0ZW1zIF07XG4gICAgICAgIH1cbiAgICAgICAgLy8gZGVhbCB3aXRoIGhvbGVzIGluIHRoZSBkYXRhIHNldFxuICAgICAgICBpdGVtcyA9IHVybHMubWFwKCh1cmwsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBsZXQgaXRlbSA9IChpdGVtcykgPyBpdGVtc1tpbmRleF0gOiBudWxsO1xuICAgICAgICAgICAgaWYgKCFpdGVtKSB7XG4gICAgICAgICAgICAgICAgaXRlbSA9IHsgdXJsLCBwZW5kaW5nOiB0cnVlIH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gaXRlbTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGlmICghaXRlbXMpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGlmIChpdGVtcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuIDx1bCBjbGFzc05hbWU9XCJlbXB0eVwiPjxsaT48c3Bhbj5ub25lPC9zcGFuPjwvbGk+PC91bD47XG4gICAgfVxuICAgIHJldHVybiA8dWw+e2l0ZW1zLm1hcChyZW5kZXJJdGVtKX08L3VsPjtcblxuICAgIGZ1bmN0aW9uIHJlbmRlckl0ZW0oaXRlbSwgaSkge1xuICAgICAgICBjb25zdCBpZCA9IHJvdXRlLmV4dHJhY3RJRChpdGVtLnVybCk7XG4gICAgICAgIGNvbnN0IHVybCA9IHJvdXRlLmZpbmQocGFnZU5hbWUsIHsgaWQgfSk7XG4gICAgICAgIGNvbnN0IHRleHQgPSBpdGVtLnBlbmRpbmcgPyAnLi4uJyA6IGl0ZW1bZmllbGRdO1xuICAgICAgICBjb25zdCBsaW5rUHJvcHMgPSB7XG4gICAgICAgICAgICBocmVmOiB1cmwsXG4gICAgICAgICAgICBjbGFzc05hbWU6IChpdGVtLnBlbmRpbmcpID8gJ3BlbmRpbmcnIDogdW5kZWZpbmVkLFxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gPGxpIGtleT17aX0+PGEgey4uLmxpbmtQcm9wc30+e3RleHR9PC9hPjwvbGk+O1xuICAgIH1cbn1cblxuTGlzdC5kZWZhdWx0UHJvcHMgPSB7XG4gICAgZmllbGQ6ICduYW1lJ1xufTtcblxuZXhwb3J0IHtcbiAgICBMaXN0IGFzIGRlZmF1bHQsXG4gICAgTGlzdFxufTtcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5cbmZ1bmN0aW9uIExvYWRpbmcoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2FkaW5nXCI+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhYiBmYS1lbXBpcmUgZmEtc3BpblwiLz4gTG9hZGluZ1xuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cbmV4cG9ydCB7XG4gICAgTG9hZGluZyBhcyBkZWZhdWx0LFxuICAgIExvYWRpbmdcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9