webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/services/index.js":
/*!*******************************!*\
  !*** ./src/services/index.js ***!
  \*******************************/
/*! exports provided: indexServices */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "indexServices", function() { return indexServices; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var abortcontroller_polyfill_dist_abortcontroller_polyfill_only__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! abortcontroller-polyfill/dist/abortcontroller-polyfill-only */ "./node_modules/abortcontroller-polyfill/dist/abortcontroller-polyfill-only.js");
/* harmony import */ var abortcontroller_polyfill_dist_abortcontroller_polyfill_only__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(abortcontroller_polyfill_dist_abortcontroller_polyfill_only__WEBPACK_IMPORTED_MODULE_1__);


var indexServices = {
  getUsers: getUsers
};

function getUsers(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("https://randomuser.me/api/", data).then(function (data) {
    return data;
  });
}

/***/ })

})
//# sourceMappingURL=index.js.17f536b05898737f1c12.hot-update.js.map