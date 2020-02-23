webpackHotUpdate("static/development/pages/tabelline.js",{

/***/ "./components/tabellineheader.js":
false,

/***/ "./components/tabellinelog.js":
false,

/***/ "./pages/tabelline.js":
/*!****************************!*\
  !*** ./pages/tabelline.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-int */ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_MyLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/MyLayout */ "./components/MyLayout.js");
/* harmony import */ var _components_resultelem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/resultelem */ "./components/resultelem.js");


var _jsxFileName = "/Users/gab/nextjs/pages/tabelline.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;




function TabellineApp() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      results = _useState[0],
      setResults = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([2 + Math.floor(Math.random() * 8), 2 + Math.floor(Math.random() * 8)]),
      currentquestion = _useState2[0],
      setCurrentquestion = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(""),
      currentanswer = _useState3[0],
      setCurrentanswer = _useState3[1];

  var handleSubmit = function handleSubmit(event) {
    setCurrentquestion([2 + Math.floor(Math.random() * 8), 2 + Math.floor(Math.random() * 8)]);
    event.preventDefault();
    setCurrentanswer('');
    addResults();
  };

  var addResults = function addResults() {
    var a = currentquestion[0];
    var b = currentquestion[1];

    if (a * b === currentanswer) {
      setResults(function (prevState) {
        return [{
          text: "".concat(a, "x").concat(b, "=").concat(currentanswer),
          ok: true
        }].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(prevState));
      });
    } else {
      setResults(function (prevState) {
        return [{
          text: "".concat(a, "x").concat(b, "=").concat(currentanswer),
          ok: false
        }].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(prevState));
      });
    }
  }; // useEffect (()=>{
  //     },[currentanswer])


  var handleChange = function handleChange(event) {
    setCurrentanswer(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(event.target.value, 10));
  };

  var displayLog = function displayLog() {
    return results.map(function (r) {
      return __jsx(_components_resultelem__WEBPACK_IMPORTED_MODULE_4__["default"], {
        text: r.text,
        ok: r.ok,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      });
    });
  };

  return __jsx("div", {
    className: "tabelline",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, "Risovi: ", currentquestion[0], "X", currentquestion[1]), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }), __jsx("form", {
    autocomplete: "off",
    onSubmit: handleSubmit,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, __jsx("input", {
    className: "tabelline",
    autofocus: true,
    name: "currentanswer",
    value: currentanswer,
    type: "number",
    onChange: handleChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }), __jsx("button", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, "ok")), __jsx("div", {
    className: "tabelline-log",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, displayLog()));
}

function Tabelline() {
  return __jsx(_components_MyLayout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    content: __jsx(TabellineApp, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: this
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  });
}

/* harmony default export */ __webpack_exports__["default"] = (Tabellineapp);

/***/ })

})
//# sourceMappingURL=tabelline.js.608105d8fde70b4e979d.hot-update.js.map