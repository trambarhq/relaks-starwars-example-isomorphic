(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vehicle-page"],{

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

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy92ZWhpY2xlLXBhZ2UuanN4Iiwid2VicGFjazovLy8uL3dpZGdldHMvbGlzdC5qc3giLCJ3ZWJwYWNrOi8vLy4vd2lkZ2V0cy9sb2FkaW5nLmpzeCJdLCJuYW1lcyI6WyJwcm9wcyIsInJlbmRlciIsInZlaGljbGUiLCJzaG93IiwibmFtZSIsIm1vZGVsIiwibWFudWZhY3R1cmVyIiwiY29zdF9pbl9jcmVkaXRzIiwibGVuZ3RoIiwibWF4X2F0bW9zcGhlcmluZ19zcGVlZCIsImNyZXciLCJwYXNzZW5nZXIiLCJjYXJnb19jYXBhY2l0eSIsImNvbnN1bWFibGVzIiwidmVoaWNsZV9jbGFzcyIsInBpbG90cyIsInJvdXRlIiwiZmlsbXMiLCJzd2FwaSIsImZldGNoT25lIiwicGFyYW1zIiwiaWQiLCJmZXRjaE11bHRpcGxlIiwibWluaW11bSIsIlZlaGljbGVQYWdlIiwiYXN5bmNDb21wb25lbnQiLCJkZWZhdWx0IiwiTGlzdCIsInVybHMiLCJpdGVtcyIsImZpZWxkIiwicGFnZU5hbWUiLCJtYXAiLCJ1cmwiLCJpbmRleCIsIml0ZW0iLCJwZW5kaW5nIiwicmVuZGVySXRlbSIsImkiLCJleHRyYWN0SUQiLCJmaW5kIiwidGV4dCIsImxpbmtQcm9wcyIsImhyZWYiLCJjbGFzc05hbWUiLCJ1bmRlZmluZWQiLCJkZWZhdWx0UHJvcHMiLCJMb2FkaW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7d0ZBS0EsaUJBQTJCQSxLQUEzQjtBQUFBLHFGQVlhQyxNQVpiOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBWWFBLDhCQVpiLFlBWWFBLE1BWmIsR0FZc0I7QUFDZCxnQ0FBSSxDQUFDQyxPQUFMLEVBQWM7QUFDVkMscUNBQUssOEJBQUMsaUJBQUQsT0FBTDtBQUNILDZCQUZELE1BRU87QUFDSEEscUNBQ0k7QUFBQTtBQUFBO0FBQ0k7QUFBQTtBQUFBO0FBQUtELGdEQUFRRTtBQUFiLHFDQURKO0FB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QUFDaEJoQixXQUFPO0FBRFMsQ0FBcEI7O1FBS1lKLE8sR0FBUkMsSTtRQUNBQSxJLEdBQUFBLEk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3Q0o7Ozs7OztBQUVBLFNBQVNvQixPQUFULEdBQW1CO0FBQ2YsV0FDSTtBQUFBO0FBQUEsVUFBSyxXQUFVLFNBQWY7QUFDSTtBQUFBO0FBQUE7QUFDSSxpREFBRyxXQUFVLHVCQUFiLEdBREo7QUFBQTtBQUFBO0FBREosS0FESjtBQU9IOztRQUdjckIsTyxHQUFYcUIsTztRQUNBQSxPLEdBQUFBLE8iLCJmaWxlIjoidmVoaWNsZS1wYWdlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWxha3MsIHsgdXNlUHJvZ3Jlc3MgfSBmcm9tICdyZWxha3MvaG9va3MnO1xuaW1wb3J0IHsgTGlzdCB9IGZyb20gJ3dpZGdldHMvbGlzdCc7XG5pbXBvcnQgTG9hZGluZyBmcm9tICd3aWRnZXRzL2xvYWRpbmcnO1xuXG5hc3luYyBmdW5jdGlvbiBWZWhpY2xlUGFnZShwcm9wcykge1xuICAgIGNvbnN0IHsgcm91dGUsIHN3YXBpIH0gPSBwcm9wcztcbiAgICBjb25zdCBbIHNob3cgXSA9IHVzZVByb2dyZXNzKCk7XG5cbiAgICByZW5kZXIoKTtcbiAgICBjb25zdCB2ZWhpY2xlID0gYXdhaXQgc3dhcGkuZmV0Y2hPbmUoYC92ZWhpY2xlcy8ke3JvdXRlLnBhcmFtcy5pZH0vYCk7XG4gICAgcmVuZGVyKCk7XG4gICAgY29uc3QgZmlsbXMgPSBhd2FpdCBzd2FwaS5mZXRjaE11bHRpcGxlKHZlaGljbGUuZmlsbXMsIHsgbWluaW11bTogJzYwJScgfSk7XG4gICAgcmVuZGVyKCk7XG4gICAgY29uc3QgcGlsb3RzID0gYXdhaXQgc3dhcGkuZmV0Y2hNdWx0aXBsZSh2ZWhpY2xlLnBpbG90cywgeyBtaW5pbXVtOiAnNjAlJyB9KTtcbiAgICByZW5kZXIoKTtcblxuICAgIGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgICAgaWYgKCF2ZWhpY2xlKSB7XG4gICAgICAgICAgICBzaG93KDxMb2FkaW5nIC8+KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNob3coXG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGgxPnt2ZWhpY2xlLm5hbWV9PC9oMT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj5Nb2RlbDoge3ZlaGljbGUubW9kZWx9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+TWFudWZhY3R1cmVyOiB7dmVoaWNsZS5tYW51ZmFjdHVyZXJ9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+Q29zdCBpbiBjcmVkaXRzOiB7dmVoaWNsZS5jb3N0X2luX2NyZWRpdHN9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+TGVuZ3RoOiB7dmVoaWNsZS5sZW5ndGh9IG08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj5NYXggYXRtb3NwaGVyaW5nIHNwZWVkOiB7dmVoaWNsZS5tYXhfYXRtb3NwaGVyaW5nX3NwZWVkfSBrbS9oPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+Q3Jldzoge3ZlaGljbGUuY3Jld308L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj5QYXNzZW5nZXJzOiB7dmVoaWNsZS5wYXNzZW5nZXJ9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+Q2FyZ28gY2FwYWNpdHk6IHt2ZWhpY2xlLmNhcmdvX2NhcGFjaXR5fSBrZzwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PkNvbnN1bWFibGVzOiB7dmVoaWNsZS5jb25zdW1hYmxlc308L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj5WZWhpY2xlIGNsYXNzOiB7dmVoaWNsZS52ZWhpY2xlX2NsYXNzfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8aDI+UGlsb3RzPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgPExpc3QgdXJscz17dmVoaWNsZS5waWxvdHN9IGl0ZW1zPXtwaWxvdHN9IHBhZ2VOYW1lPVwiY2hhcmFjdGVyLXN1bW1hcnlcIiByb3V0ZT17cm91dGV9IC8+XG4gICAgICAgICAgICAgICAgICAgIDxoMj5GaWxtczwvaDI+XG4gICAgICAgICAgICAgICAgICAgIDxMaXN0IHVybHM9e3ZlaGljbGUuZmlsbXN9IGl0ZW1zPXtmaWxtc30gZmllbGQ9XCJ0aXRsZVwiIHBhZ2VOYW1lPVwiZmlsbS1zdW1tYXJ5XCIgcm91dGU9e3JvdXRlfSAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuY29uc3QgYXN5bmNDb21wb25lbnQgPSBSZWxha3MoVmVoaWNsZVBhZ2UpO1xuXG5leHBvcnQge1xuICAgIGFzeW5jQ29tcG9uZW50IGFzIGRlZmF1bHQsXG4gICAgYXN5bmNDb21wb25lbnQgYXMgVmVoaWNsZVBhZ2UsXG59O1xuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcblxuZnVuY3Rpb24gTGlzdChwcm9wcykge1xuICAgIGxldCB7IHJvdXRlLCB1cmxzLCBpdGVtcywgZmllbGQsIHBhZ2VOYW1lIH0gPSBwcm9wcztcbiAgICBpZiAodXJscykge1xuICAgICAgICAvLyBhY2NlcHQgc2luZ2xlIFVSTCBhbmQgb2JqZWN0XG4gICAgICAgIGlmICh0eXBlb2YodXJscykgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICB1cmxzID0gWyB1cmxzIF07XG4gICAgICAgICAgICBpdGVtcyA9IFsgaXRlbXMgXTtcbiAgICAgICAgfVxuICAgICAgICAvLyBkZWFsIHdpdGggaG9sZXMgaW4gdGhlIGRhdGEgc2V0XG4gICAgICAgIGl0ZW1zID0gdXJscy5tYXAoKHVybCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGxldCBpdGVtID0gKGl0ZW1zKSA/IGl0ZW1zW2luZGV4XSA6IG51bGw7XG4gICAgICAgICAgICBpZiAoIWl0ZW0pIHtcbiAgICAgICAgICAgICAgICBpdGVtID0geyB1cmwsIHBlbmRpbmc6IHRydWUgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBpdGVtO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgaWYgKCFpdGVtcykge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgaWYgKGl0ZW1zLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gPHVsIGNsYXNzTmFtZT1cImVtcHR5XCI+PGxpPjxzcGFuPm5vbmU8L3NwYW4+PC9saT48L3VsPjtcbiAgICB9XG4gICAgcmV0dXJuIDx1bD57aXRlbXMubWFwKHJlbmRlckl0ZW0pfTwvdWw+O1xuXG4gICAgZnVuY3Rpb24gcmVuZGVySXRlbShpdGVtLCBpKSB7XG4gICAgICAgIGNvbnN0IGlkID0gcm91dGUuZXh0cmFjdElEKGl0ZW0udXJsKTtcbiAgICAgICAgY29uc3QgdXJsID0gcm91dGUuZmluZChwYWdlTmFtZSwgeyBpZCB9KTtcbiAgICAgICAgY29uc3QgdGV4dCA9IGl0ZW0ucGVuZGluZyA/ICcuLi4nIDogaXRlbVtmaWVsZF07XG4gICAgICAgIGNvbnN0IGxpbmtQcm9wcyA9IHtcbiAgICAgICAgICAgIGhyZWY6IHVybCxcbiAgICAgICAgICAgIGNsYXNzTmFtZTogKGl0ZW0ucGVuZGluZykgPyAncGVuZGluZycgOiB1bmRlZmluZWQsXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiA8bGkga2V5PXtpfT48YSB7Li4ubGlua1Byb3BzfT57dGV4dH08L2E+PC9saT47XG4gICAgfVxufVxuXG5MaXN0LmRlZmF1bHRQcm9wcyA9IHtcbiAgICBmaWVsZDogJ25hbWUnXG59O1xuXG5leHBvcnQge1xuICAgIExpc3QgYXMgZGVmYXVsdCxcbiAgICBMaXN0XG59O1xuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcblxuZnVuY3Rpb24gTG9hZGluZygpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvYWRpbmdcIj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFiIGZhLWVtcGlyZSBmYS1zcGluXCIvPiBMb2FkaW5nXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cblxuZXhwb3J0IHtcbiAgICBMb2FkaW5nIGFzIGRlZmF1bHQsXG4gICAgTG9hZGluZ1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=