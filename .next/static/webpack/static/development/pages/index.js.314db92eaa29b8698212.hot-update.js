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
/* harmony import */ var abortcontroller_polyfill_dist_abortcontroller_polyfill_only__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! abortcontroller-polyfill/dist/abortcontroller-polyfill-only */ "./node_modules/abortcontroller-polyfill/dist/abortcontroller-polyfill-only.js");
/* harmony import */ var abortcontroller_polyfill_dist_abortcontroller_polyfill_only__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(abortcontroller_polyfill_dist_abortcontroller_polyfill_only__WEBPACK_IMPORTED_MODULE_1__);


var abortController = new AbortController();
function getUsers() {
  console.log(abortController.signal, '--abortController.signal--');
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("https://api.github.com/users", {
    signal: abortController.signal
  }).then(function (data) {
    return data;
  })["catch"](function (error) {
    if (error.name === 'AbortError') return;
    throw error;
  });
}

/***/ })

})
//# sourceMappingURL=index.js.314db92eaa29b8698212.hot-update.js.map