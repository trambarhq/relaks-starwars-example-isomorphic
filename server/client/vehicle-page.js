exports.ids = ["vehicle-page"];
exports.modules = {

/***/ "./pages/vehicle-page.jsx":
/*!********************************!*\
  !*** ./pages/vehicle-page.jsx ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.VehiclePage = exports.default = undefined;

var _regenerator = __webpack_require__(/*! babel-runtime/regenerator */ "../node_modules/babel-runtime/regenerator/index.js");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _slicedToArray2 = __webpack_require__(/*! babel-runtime/helpers/slicedToArray */ "../node_modules/babel-runtime/helpers/slicedToArray.js");

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _asyncToGenerator2 = __webpack_require__(/*! babel-runtime/helpers/asyncToGenerator */ "../node_modules/babel-runtime/helpers/asyncToGenerator.js");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var VehiclePage = function () {
    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(props) {
        var route, swapi, _useProgress, _useProgress2, show, vehicle, films, pilots, render;

        return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        render = function render() {
                            if (!vehicle) {
                                show(_react2.default.createElement(_loading2.default, null));
                            } else {
                                show(_react2.default.createElement(
                                    'div',
                                    null,
                                    _react2.default.createElement(
                                        'h1',
                                        null,
                                        vehicle.name
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        null,
                                        'Model: ',
                                        vehicle.model
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        null,
                                        'Manufacturer: ',
                                        vehicle.manufacturer
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        null,
                                        'Cost in credits: ',
                                        vehicle.cost_in_credits
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        null,
                                        'Length: ',
                                        vehicle.length,
                                        ' m'
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        null,
                                        'Max atmosphering speed: ',
                                        vehicle.max_atmosphering_speed,
                                        ' km/h'
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        null,
                                        'Crew: ',
                                        vehicle.crew
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        null,
                                        'Passengers: ',
                                        vehicle.passenger
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        null,
                                        'Cargo capacity: ',
                                        vehicle.cargo_capacity,
                                        ' kg'
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        null,
                                        'Consumables: ',
                                        vehicle.consumables
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        null,
                                        'Vehicle class: ',
                                        vehicle.vehicle_class
                                    ),
                                    _react2.default.createElement(
                                        'h2',
                                        null,
                                        'Pilots'
                                    ),
                                    _react2.default.createElement(_list.List, { urls: vehicle.pilots, items: pilots, pageName: 'character-summary', route: route }),
                                    _react2.default.createElement(
                                        'h2',
                                        null,
                                        'Films'
                                    ),
                                    _react2.default.createElement(_list.List, { urls: vehicle.films, items: films, field: 'title', pageName: 'film-summary', route: route })
                                ));
                            }
                        };

                        route = props.route, swapi = props.swapi;
                        _useProgress = (0, _hooks.useProgress)(), _useProgress2 = (0, _slicedToArray3.default)(_useProgress, 1), show = _useProgress2[0];


                        render();
                        _context.next = 6;
                        return swapi.fetchOne('/vehicles/' + route.params.id + '/');

                    case 6:
                        vehicle = _context.sent;

                        render();
                        _context.next = 10;
                        return swapi.fetchMultiple(vehicle.films, { minimum: '60%' });

                    case 10:
                        films = _context.sent;

                        render();
                        _context.next = 14;
                        return swapi.fetchMultiple(vehicle.pilots, { minimum: '60%' });

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

    return function VehiclePage(_x) {
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

var asyncComponent = (0, _hooks2.default)(VehiclePage);

exports.default = asyncComponent;
exports.VehiclePage = asyncComponent;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy92ZWhpY2xlLXBhZ2UuanN4Iiwid2VicGFjazovLy8uL3dpZGdldHMvbGlzdC5qc3giLCJ3ZWJwYWNrOi8vLy4vd2lkZ2V0cy9sb2FkaW5nLmpzeCJdLCJuYW1lcyI6WyJwcm9wcyIsInJlbmRlciIsInZlaGljbGUiLCJzaG93IiwibmFtZSIsIm1vZGVsIiwibWFudWZhY3R1cmVyIiwiY29zdF9pbl9jcmVkaXRzIiwibGVuZ3RoIiwibWF4X2F0bW9zcGhlcmluZ19zcGVlZCIsImNyZXciLCJwYXNzZW5nZXIiLCJjYXJnb19jYXBhY2l0eSIsImNvbnN1bWFibGVzIiwidmVoaWNsZV9jbGFzcyIsInBpbG90cyIsInJvdXRlIiwiZmlsbXMiLCJzd2FwaSIsImZldGNoT25lIiwicGFyYW1zIiwiaWQiLCJmZXRjaE11bHRpcGxlIiwibWluaW11bSIsIlZlaGljbGVQYWdlIiwiYXN5bmNDb21wb25lbnQiLCJkZWZhdWx0IiwiTGlzdCIsInVybHMiLCJpdGVtcyIsImZpZWxkIiwicGFnZU5hbWUiLCJtYXAiLCJ1cmwiLCJpbmRleCIsIml0ZW0iLCJwZW5kaW5nIiwicmVuZGVySXRlbSIsImkiLCJleHRyYWN0SUQiLCJmaW5kIiwidGV4dCIsImxpbmtQcm9wcyIsImhyZWYiLCJjbGFzc05hbWUiLCJ1bmRlZmluZWQiLCJkZWZhdWx0UHJvcHMiLCJMb2FkaW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3dGQUtBLGlCQUEyQkEsS0FBM0I7QUFBQSxxRkFZYUMsTUFaYjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVlhQSw4QkFaYixZQVlhQSxNQVpiLEdBWXNCO0FBQ2QsZ0NBQUksQ0FBQ0MsT0FBTCxFQUFjO0FBQ1ZDLHFDQUFLLDhCQUFDLGlCQUFELE9BQUw7QUFDSCw2QkFGRCxNQUVPO0FBQ0hBLHFDQUNJO0FBQUE7QUFBQTtBQUNJO0FBQUE7QUFBQTtBQUFLRCxnREFBUUU7QUFBYixxQ0FESjtB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O0FBQ2hCaEIsV0FBTztBQURTLENBQXBCOztRQUtZSixPLEdBQVJDLEk7UUFDQUEsSSxHQUFBQSxJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0NKOzs7Ozs7QUFFQSxTQUFTb0IsT0FBVCxHQUFtQjtBQUNmLFdBQ0k7QUFBQTtBQUFBLFVBQUssV0FBVSxTQUFmO0FBQ0k7QUFBQTtBQUFBO0FBQ0ksaURBQUcsV0FBVSx1QkFBYixHQURKO0FBQUE7QUFBQTtBQURKLEtBREo7QUFPSDs7UUFHY3JCLE8sR0FBWHFCLE87UUFDQUEsTyxHQUFBQSxPIiwiZmlsZSI6InZlaGljbGUtcGFnZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVsYWtzLCB7IHVzZVByb2dyZXNzIH0gZnJvbSAncmVsYWtzL2hvb2tzJztcbmltcG9ydCB7IExpc3QgfSBmcm9tICd3aWRnZXRzL2xpc3QnO1xuaW1wb3J0IExvYWRpbmcgZnJvbSAnd2lkZ2V0cy9sb2FkaW5nJztcblxuYXN5bmMgZnVuY3Rpb24gVmVoaWNsZVBhZ2UocHJvcHMpIHtcbiAgICBjb25zdCB7IHJvdXRlLCBzd2FwaSB9ID0gcHJvcHM7XG4gICAgY29uc3QgWyBzaG93IF0gPSB1c2VQcm9ncmVzcygpO1xuXG4gICAgcmVuZGVyKCk7XG4gICAgY29uc3QgdmVoaWNsZSA9IGF3YWl0IHN3YXBpLmZldGNoT25lKGAvdmVoaWNsZXMvJHtyb3V0ZS5wYXJhbXMuaWR9L2ApO1xuICAgIHJlbmRlcigpO1xuICAgIGNvbnN0IGZpbG1zID0gYXdhaXQgc3dhcGkuZmV0Y2hNdWx0aXBsZSh2ZWhpY2xlLmZpbG1zLCB7IG1pbmltdW06ICc2MCUnIH0pO1xuICAgIHJlbmRlcigpO1xuICAgIGNvbnN0IHBpbG90cyA9IGF3YWl0IHN3YXBpLmZldGNoTXVsdGlwbGUodmVoaWNsZS5waWxvdHMsIHsgbWluaW11bTogJzYwJScgfSk7XG4gICAgcmVuZGVyKCk7XG5cbiAgICBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICAgIGlmICghdmVoaWNsZSkge1xuICAgICAgICAgICAgc2hvdyg8TG9hZGluZyAvPik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzaG93KFxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxoMT57dmVoaWNsZS5uYW1lfTwvaDE+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+TW9kZWw6IHt2ZWhpY2xlLm1vZGVsfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2Pk1hbnVmYWN0dXJlcjoge3ZlaGljbGUubWFudWZhY3R1cmVyfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PkNvc3QgaW4gY3JlZGl0czoge3ZlaGljbGUuY29zdF9pbl9jcmVkaXRzfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2Pkxlbmd0aDoge3ZlaGljbGUubGVuZ3RofSBtPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+TWF4IGF0bW9zcGhlcmluZyBzcGVlZDoge3ZlaGljbGUubWF4X2F0bW9zcGhlcmluZ19zcGVlZH0ga20vaDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PkNyZXc6IHt2ZWhpY2xlLmNyZXd9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+UGFzc2VuZ2Vyczoge3ZlaGljbGUucGFzc2VuZ2VyfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PkNhcmdvIGNhcGFjaXR5OiB7dmVoaWNsZS5jYXJnb19jYXBhY2l0eX0ga2c8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj5Db25zdW1hYmxlczoge3ZlaGljbGUuY29uc3VtYWJsZXN9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+VmVoaWNsZSBjbGFzczoge3ZlaGljbGUudmVoaWNsZV9jbGFzc308L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGgyPlBpbG90czwvaDI+XG4gICAgICAgICAgICAgICAgICAgIDxMaXN0IHVybHM9e3ZlaGljbGUucGlsb3RzfSBpdGVtcz17cGlsb3RzfSBwYWdlTmFtZT1cImNoYXJhY3Rlci1zdW1tYXJ5XCIgcm91dGU9e3JvdXRlfSAvPlxuICAgICAgICAgICAgICAgICAgICA8aDI+RmlsbXM8L2gyPlxuICAgICAgICAgICAgICAgICAgICA8TGlzdCB1cmxzPXt2ZWhpY2xlLmZpbG1zfSBpdGVtcz17ZmlsbXN9IGZpZWxkPVwidGl0bGVcIiBwYWdlTmFtZT1cImZpbG0tc3VtbWFyeVwiIHJvdXRlPXtyb3V0ZX0gLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmNvbnN0IGFzeW5jQ29tcG9uZW50ID0gUmVsYWtzKFZlaGljbGVQYWdlKTtcblxuZXhwb3J0IHtcbiAgICBhc3luY0NvbXBvbmVudCBhcyBkZWZhdWx0LFxuICAgIGFzeW5jQ29tcG9uZW50IGFzIFZlaGljbGVQYWdlLFxufTtcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5cbmZ1bmN0aW9uIExpc3QocHJvcHMpIHtcbiAgICBsZXQgeyByb3V0ZSwgdXJscywgaXRlbXMsIGZpZWxkLCBwYWdlTmFtZSB9ID0gcHJvcHM7XG4gICAgaWYgKHVybHMpIHtcbiAgICAgICAgLy8gYWNjZXB0IHNpbmdsZSBVUkwgYW5kIG9iamVjdFxuICAgICAgICBpZiAodHlwZW9mKHVybHMpID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgdXJscyA9IFsgdXJscyBdO1xuICAgICAgICAgICAgaXRlbXMgPSBbIGl0ZW1zIF07XG4gICAgICAgIH1cbiAgICAgICAgLy8gZGVhbCB3aXRoIGhvbGVzIGluIHRoZSBkYXRhIHNldFxuICAgICAgICBpdGVtcyA9IHVybHMubWFwKCh1cmwsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBsZXQgaXRlbSA9IChpdGVtcykgPyBpdGVtc1tpbmRleF0gOiBudWxsO1xuICAgICAgICAgICAgaWYgKCFpdGVtKSB7XG4gICAgICAgICAgICAgICAgaXRlbSA9IHsgdXJsLCBwZW5kaW5nOiB0cnVlIH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gaXRlbTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGlmICghaXRlbXMpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGlmIChpdGVtcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuIDx1bCBjbGFzc05hbWU9XCJlbXB0eVwiPjxsaT48c3Bhbj5ub25lPC9zcGFuPjwvbGk+PC91bD47XG4gICAgfVxuICAgIHJldHVybiA8dWw+e2l0ZW1zLm1hcChyZW5kZXJJdGVtKX08L3VsPjtcblxuICAgIGZ1bmN0aW9uIHJlbmRlckl0ZW0oaXRlbSwgaSkge1xuICAgICAgICBjb25zdCBpZCA9IHJvdXRlLmV4dHJhY3RJRChpdGVtLnVybCk7XG4gICAgICAgIGNvbnN0IHVybCA9IHJvdXRlLmZpbmQocGFnZU5hbWUsIHsgaWQgfSk7XG4gICAgICAgIGNvbnN0IHRleHQgPSBpdGVtLnBlbmRpbmcgPyAnLi4uJyA6IGl0ZW1bZmllbGRdO1xuICAgICAgICBjb25zdCBsaW5rUHJvcHMgPSB7XG4gICAgICAgICAgICBocmVmOiB1cmwsXG4gICAgICAgICAgICBjbGFzc05hbWU6IChpdGVtLnBlbmRpbmcpID8gJ3BlbmRpbmcnIDogdW5kZWZpbmVkLFxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gPGxpIGtleT17aX0+PGEgey4uLmxpbmtQcm9wc30+e3RleHR9PC9hPjwvbGk+O1xuICAgIH1cbn1cblxuTGlzdC5kZWZhdWx0UHJvcHMgPSB7XG4gICAgZmllbGQ6ICduYW1lJ1xufTtcblxuZXhwb3J0IHtcbiAgICBMaXN0IGFzIGRlZmF1bHQsXG4gICAgTGlzdFxufTtcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5cbmZ1bmN0aW9uIExvYWRpbmcoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2FkaW5nXCI+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhYiBmYS1lbXBpcmUgZmEtc3BpblwiLz4gTG9hZGluZ1xuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cbmV4cG9ydCB7XG4gICAgTG9hZGluZyBhcyBkZWZhdWx0LFxuICAgIExvYWRpbmdcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9