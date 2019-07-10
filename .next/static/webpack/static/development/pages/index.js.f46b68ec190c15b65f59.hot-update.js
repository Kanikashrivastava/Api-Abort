webpackHotUpdate("static/development/pages/index.js",{

/***/ "./services/index.js":
/*!***************************!*\
  !*** ./services/index.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getUsers; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

var abortController = new AbortController();
var signal = abortController.signal;
function getUsers() {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("https://api.github.com/users", {
    signal: signal
  }).then(function (data) {
    return data;
  })["catch"](function (err) {
    return err;
  });
}

/***/ })

})
//# sourceMappingURL=index.js.f46b68ec190c15b65f59.hot-update.js.map