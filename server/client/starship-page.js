exports.ids = ["starship-page"];
exports.modules = {

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

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9zdGFyc2hpcC1wYWdlLmpzeCIsIndlYnBhY2s6Ly8vLi93aWRnZXRzL2xpc3QuanN4Iiwid2VicGFjazovLy8uL3dpZGdldHMvbG9hZGluZy5qc3giXSwibmFtZXMiOlsicHJvcHMiLCJyZW5kZXIiLCJzdGFyc2hpcCIsInNob3ciLCJuYW1lIiwibW9kZWwiLCJtYW51ZmFjdHVyZXIiLCJjb3N0X2luX2NyZWRpdHMiLCJsZW5ndGgiLCJtYXhfYXRtb3NwaGVyaW5nX3NwZWVkIiwiTUdMVCIsImh5cGVyZHJpdmVfcmF0aW5nIiwiY3JldyIsInBhc3NlbmdlciIsImNhcmdvX2NhcGFjaXR5IiwiY29uc3VtYWJsZXMiLCJzdGFyc2hpcF9jbGFzcyIsInBpbG90cyIsInJvdXRlIiwiZmlsbXMiLCJzd2FwaSIsImZldGNoT25lIiwicGFyYW1zIiwiaWQiLCJmZXRjaE11bHRpcGxlIiwibWluaW11bSIsIlN0YXJzaGlwUGFnZSIsImFzeW5jQ29tcG9uZW50IiwiZGVmYXVsdCIsIkxpc3QiLCJ1cmxzIiwiaXRlbXMiLCJmaWVsZCIsInBhZ2VOYW1lIiwibWFwIiwidXJsIiwiaW5kZXgiLCJpdGVtIiwicGVuZGluZyIsInJlbmRlckl0ZW0iLCJpIiwiZXh0cmFjdElEIiwiZmluZCIsInRleHQiLCJsaW5rUHJvcHMiLCJocmVmIiwiY2xhc3NOYW1lIiwidW5kZWZpbmVkIiwiZGVmYXVsdFByb3BzIiwiTG9hZGluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt3RkFLQSxpQkFBNEJBLEtBQTVCO0FBQUEsc0ZBWWFDLE1BWmI7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFZYUEsOEJBWmIsWUFZYUEsTUFaYixHQVlzQjtBQUNkLGdDQUFJLENBQUNDLFFBQUwsRUFBZTtBQUNYQyxxQ0FBSyw4QkFBQyxpQkFBRCxPQUFMO0FBQ0gsNkJBRkQsTUFFTztBQUNIQSxxQ0FDSTtBQUFBO0FBQUE7QUFDSTtBQUFB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QixTQUFqQixHQUE2QlM7QUFGMUIsU0FBbEI7QUFJQSxlQUFPO0FBQUE7QUFBQSxjQUFJLEtBQUtQLENBQVQ7QUFBWTtBQUFBO0FBQU9JLHlCQUFQO0FBQW1CRDtBQUFuQjtBQUFaLFNBQVA7QUFDSDtBQUNKOztBQUVEZCxLQUFLbUIsWUFBTCxHQUFvQjtBQUNoQmhCLFdBQU87QUFEUyxDQUFwQjs7UUFLWUosTyxHQUFSQyxJO1FBQ0FBLEksR0FBQUEsSTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdDSjs7Ozs7O0FBRUEsU0FBU29CLE9BQVQsR0FBbUI7QUFDZixXQUNJO0FBQUE7QUFBQSxVQUFLLFdBQVUsU0FBZjtBQUNJO0FBQUE7QUFBQTtBQUNJLGlEQUFHLFdBQVUsdUJBQWIsR0FESjtBQUFBO0FBQUE7QUFESixLQURKO0FBT0g7O1FBR2NyQixPLEdBQVhxQixPO1FBQ0FBLE8sR0FBQUEsTyIsImZpbGUiOiJzdGFyc2hpcC1wYWdlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWxha3MsIHsgdXNlUHJvZ3Jlc3MgfSBmcm9tICdyZWxha3MvaG9va3MnO1xuaW1wb3J0IHsgTGlzdCB9IGZyb20gJ3dpZGdldHMvbGlzdCc7XG5pbXBvcnQgTG9hZGluZyBmcm9tICd3aWRnZXRzL2xvYWRpbmcnO1xuXG5hc3luYyBmdW5jdGlvbiBTdGFyc2hpcFBhZ2UocHJvcHMpIHtcbiAgICBjb25zdCB7IHJvdXRlLCBzd2FwaSB9ID0gcHJvcHM7XG4gICAgY29uc3QgWyBzaG93IF0gPSB1c2VQcm9ncmVzcygpO1xuXG4gICAgcmVuZGVyKCk7XG4gICAgY29uc3Qgc3RhcnNoaXAgPSBhd2FpdCBzd2FwaS5mZXRjaE9uZShgL3N0YXJzaGlwcy8ke3JvdXRlLnBhcmFtcy5pZH0vYCk7XG4gICAgcmVuZGVyKCk7XG4gICAgY29uc3QgZmlsbXMgPSBhd2FpdCBzd2FwaS5mZXRjaE11bHRpcGxlKHN0YXJzaGlwLmZpbG1zLCB7IG1pbmltdW06ICc2MCUnIH0pO1xuICAgIHJlbmRlcigpO1xuICAgIGNvbnN0IHBpbG90cyA9IGF3YWl0IHN3YXBpLmZldGNoTXVsdGlwbGUoc3RhcnNoaXAucGlsb3RzLCB7IG1pbmltdW06ICc2MCUnIH0pO1xuICAgIHJlbmRlcigpO1xuXG4gICAgZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgICBpZiAoIXN0YXJzaGlwKSB7XG4gICAgICAgICAgICBzaG93KDxMb2FkaW5nIC8+KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNob3coXG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGgxPntzdGFyc2hpcC5uYW1lfTwvaDE+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+TW9kZWw6IHtzdGFyc2hpcC5tb2RlbH08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj5NYW51ZmFjdHVyZXI6IHtzdGFyc2hpcC5tYW51ZmFjdHVyZXJ9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+Q29zdCBpbiBjcmVkaXRzOiB7c3RhcnNoaXAuY29zdF9pbl9jcmVkaXRzfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2Pkxlbmd0aDoge3N0YXJzaGlwLmxlbmd0aH0gbTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2Pk1heCBhdG1vc3BoZXJpbmcgc3BlZWQ6IHtzdGFyc2hpcC5tYXhfYXRtb3NwaGVyaW5nX3NwZWVkfSBrbS9oPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+TWF4IHN1YmxpZ2h0IHNwZWVkOiB7c3RhcnNoaXAuTUdMVH0gTUdMVDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2Pkh5cGVyZHJpdmUgcmF0aW5nOiB7c3RhcnNoaXAuaHlwZXJkcml2ZV9yYXRpbmd9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+Q3Jldzoge3N0YXJzaGlwLmNyZXd9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+UGFzc2VuZ2Vyczoge3N0YXJzaGlwLnBhc3Nlbmdlcn08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj5DYXJnbyBjYXBhY2l0eToge3N0YXJzaGlwLmNhcmdvX2NhcGFjaXR5fSBrZzwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PkNvbnN1bWFibGVzOiB7c3RhcnNoaXAuY29uc3VtYWJsZXN9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+U3RhcnNoaXAgY2xhc3M6IHtzdGFyc2hpcC5zdGFyc2hpcF9jbGFzc308L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGgyPlBpbG90czwvaDI+XG4gICAgICAgICAgICAgICAgICAgIDxMaXN0IHVybHM9e3N0YXJzaGlwLnBpbG90c30gaXRlbXM9e3BpbG90c30gcGFnZU5hbWU9XCJjaGFyYWN0ZXItc3VtbWFyeVwiIHJvdXRlPXtyb3V0ZX0gLz5cbiAgICAgICAgICAgICAgICAgICAgPGgyPkZpbG1zPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgPExpc3QgdXJscz17c3RhcnNoaXAuZmlsbXN9IGl0ZW1zPXtmaWxtc30gZmllbGQ9XCJ0aXRsZVwiIHBhZ2VOYW1lPVwiZmlsbS1zdW1tYXJ5XCIgcm91dGU9e3JvdXRlfSAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuY29uc3QgYXN5bmNDb21wb25lbnQgPSBSZWxha3MoU3RhcnNoaXBQYWdlKTtcblxuZXhwb3J0IHtcbiAgICBhc3luY0NvbXBvbmVudCBhcyBkZWZhdWx0LFxuICAgIGFzeW5jQ29tcG9uZW50IGFzIFN0YXJzaGlwUGFnZSxcbn07XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuXG5mdW5jdGlvbiBMaXN0KHByb3BzKSB7XG4gICAgbGV0IHsgcm91dGUsIHVybHMsIGl0ZW1zLCBmaWVsZCwgcGFnZU5hbWUgfSA9IHByb3BzO1xuICAgIGlmICh1cmxzKSB7XG4gICAgICAgIC8vIGFjY2VwdCBzaW5nbGUgVVJMIGFuZCBvYmplY3RcbiAgICAgICAgaWYgKHR5cGVvZih1cmxzKSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIHVybHMgPSBbIHVybHMgXTtcbiAgICAgICAgICAgIGl0ZW1zID0gWyBpdGVtcyBdO1xuICAgICAgICB9XG4gICAgICAgIC8vIGRlYWwgd2l0aCBob2xlcyBpbiB0aGUgZGF0YSBzZXRcbiAgICAgICAgaXRlbXMgPSB1cmxzLm1hcCgodXJsLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgbGV0IGl0ZW0gPSAoaXRlbXMpID8gaXRlbXNbaW5kZXhdIDogbnVsbDtcbiAgICAgICAgICAgIGlmICghaXRlbSkge1xuICAgICAgICAgICAgICAgIGl0ZW0gPSB7IHVybCwgcGVuZGluZzogdHJ1ZSB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGl0ZW07XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAoIWl0ZW1zKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBpZiAoaXRlbXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJldHVybiA8dWwgY2xhc3NOYW1lPVwiZW1wdHlcIj48bGk+PHNwYW4+bm9uZTwvc3Bhbj48L2xpPjwvdWw+O1xuICAgIH1cbiAgICByZXR1cm4gPHVsPntpdGVtcy5tYXAocmVuZGVySXRlbSl9PC91bD47XG5cbiAgICBmdW5jdGlvbiByZW5kZXJJdGVtKGl0ZW0sIGkpIHtcbiAgICAgICAgY29uc3QgaWQgPSByb3V0ZS5leHRyYWN0SUQoaXRlbS51cmwpO1xuICAgICAgICBjb25zdCB1cmwgPSByb3V0ZS5maW5kKHBhZ2VOYW1lLCB7IGlkIH0pO1xuICAgICAgICBjb25zdCB0ZXh0ID0gaXRlbS5wZW5kaW5nID8gJy4uLicgOiBpdGVtW2ZpZWxkXTtcbiAgICAgICAgY29uc3QgbGlua1Byb3BzID0ge1xuICAgICAgICAgICAgaHJlZjogdXJsLFxuICAgICAgICAgICAgY2xhc3NOYW1lOiAoaXRlbS5wZW5kaW5nKSA/ICdwZW5kaW5nJyA6IHVuZGVmaW5lZCxcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIDxsaSBrZXk9e2l9PjxhIHsuLi5saW5rUHJvcHN9Pnt0ZXh0fTwvYT48L2xpPjtcbiAgICB9XG59XG5cbkxpc3QuZGVmYXVsdFByb3BzID0ge1xuICAgIGZpZWxkOiAnbmFtZSdcbn07XG5cbmV4cG9ydCB7XG4gICAgTGlzdCBhcyBkZWZhdWx0LFxuICAgIExpc3Rcbn07XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuXG5mdW5jdGlvbiBMb2FkaW5nKCkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9hZGluZ1wiPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYWIgZmEtZW1waXJlIGZhLXNwaW5cIi8+IExvYWRpbmdcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuXG5leHBvcnQge1xuICAgIExvYWRpbmcgYXMgZGVmYXVsdCxcbiAgICBMb2FkaW5nXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==