webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Index; });\n/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _components_chart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/chart */ \"./components/chart.js\");\n\n\nvar _jsxFileName = \"/Users/jasonbryant/Desktop/nrel/pages/index.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\nvar monthsMap = {\n  'jan': 1,\n  'feb': 2,\n  'mar': 3,\n  'apr': 4,\n  'may': 5,\n  'jun': 6,\n  'jul': 7,\n  'aug': 8,\n  'sep': 9,\n  'oct': 10,\n  'nov': 11,\n  'dec': 12\n},\n    avg_dni = Array(12).fill([]),\n    avg_ghi = Array(12).fill([]),\n    avg_lat_tilt = Array(12).fill([]);\nfunction Index() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(40),\n      lat = _useState[0],\n      setLat = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(-105),\n      lon = _useState2[0],\n      setLon = _useState2[1];\n\n  var handleInput = function handleInput(e) {\n    if (e.target.name === 'lat') {\n      setLat(e.target.value);\n    } else if (e.target.name === 'lon') {\n      setLon(e.target.value);\n    } else {\n      console.log(\"Unknown input with value: \".concat(e.target.value));\n    }\n  };\n\n  var handleClick = function handleClick(e) {\n    e.preventDefault();\n\n    var set = function set(json) {\n      for (var _i = 0, _Object$entries = Object.entries(json.outputs.avg_dni.monthly); _i < _Object$entries.length; _i++) {\n        var _Object$entries$_i = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_Object$entries[_i], 2),\n            key = _Object$entries$_i[0],\n            value = _Object$entries$_i[1];\n\n        avg_dni[monthsMap[key] - 1] = value;\n      }\n\n      for (var _i2 = 0, _Object$entries2 = Object.entries(json.outputs.avg_ghi.monthly); _i2 < _Object$entries2.length; _i2++) {\n        var _Object$entries2$_i = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_Object$entries2[_i2], 2),\n            _key = _Object$entries2$_i[0],\n            _value = _Object$entries2$_i[1];\n\n        avg_ghi[monthsMap[_key] - 1] = _value;\n      }\n\n      for (var _i3 = 0, _Object$entries3 = Object.entries(json.outputs.avg_lat_tilt.monthly); _i3 < _Object$entries3.length; _i3++) {\n        var _Object$entries3$_i = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_Object$entries3[_i3], 2),\n            _key2 = _Object$entries3$_i[0],\n            _value2 = _Object$entries3$_i[1];\n\n        avg_lat_tilt[monthsMap[_key2] - 1] = _value2;\n      }\n\n      console.log('avg_dni', avg_dni);\n      console.log('avg_ghi', avg_ghi);\n      console.log('avg_lat_tilt', avg_lat_tilt);\n    };\n\n    var url = new URL('https://localhost:3000/nrel');\n    url.search = new URLSearchParams({\n      lat: lat,\n      lon: lon\n    });\n    fetch(url).then(function (res) {\n      return res.json();\n    }).then(function (json) {\n      // console.log(json)\n      set(json);\n    })[\"catch\"](function (err) {\n      console.error(err);\n    });\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    console.log('avg_dni changed');\n  }, [avg_dni]);\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_1__[\"Fragment\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 9\n    }\n  }, __jsx(\"h3\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 13\n    }\n  }, \"NREL Data for\"), __jsx(Form, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 68,\n      columnNumber: 13\n    }\n  }, __jsx(\"p\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 17\n    }\n  }, \"Try {40,-105}\"), __jsx(\"input\", {\n    type: \"text\",\n    name: \"lat\",\n    defaultValue: 40,\n    placeholder: \"Latitude\",\n    onChange: function onChange(e) {\n      handleInput(e);\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 70,\n      columnNumber: 17\n    }\n  }), __jsx(\"input\", {\n    type: \"text\",\n    name: \"lon\",\n    defaultValue: -105,\n    placeholder: \"Latitude\",\n    onChange: function onChange(e) {\n      handleInput(e);\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 71,\n      columnNumber: 17\n    }\n  }), __jsx(\"button\", {\n    type: \"button\",\n    onClick: function onClick(e) {\n      handleClick(e);\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 72,\n      columnNumber: 17\n    }\n  }, \"Search\")), __jsx(_components_chart__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    x: [],\n    y: avg_dni,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 74,\n      columnNumber: 13\n    }\n  }), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    href: \"/about\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 75,\n      columnNumber: 13\n    }\n  }, __jsx(\"a\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 76,\n      columnNumber: 13\n    }\n  }, \"About\")));\n}\n\n_s(Index, \"LPr+Grg1Bl3LZjlrdASM/kx4mng=\");\n\n_c = Index;\nvar Form = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].form.withConfig({\n  displayName: \"pages__Form\",\n  componentId: \"x4epxo-0\"\n})([\"input{display:block;margin:0 0 20px;border:0;border-bottom:1px solid rgba(0,0,0,.3);&:focus{border:0;}}\"]);\n_c2 = Form;\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"Index\");\n$RefreshReg$(_c2, \"Form\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJtb250aHNNYXAiLCJhdmdfZG5pIiwiQXJyYXkiLCJmaWxsIiwiYXZnX2doaSIsImF2Z19sYXRfdGlsdCIsIkluZGV4IiwidXNlU3RhdGUiLCJsYXQiLCJzZXRMYXQiLCJsb24iLCJzZXRMb24iLCJoYW5kbGVJbnB1dCIsImUiLCJ0YXJnZXQiLCJuYW1lIiwidmFsdWUiLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlQ2xpY2siLCJwcmV2ZW50RGVmYXVsdCIsInNldCIsImpzb24iLCJPYmplY3QiLCJlbnRyaWVzIiwib3V0cHV0cyIsIm1vbnRobHkiLCJrZXkiLCJ1cmwiLCJVUkwiLCJzZWFyY2giLCJVUkxTZWFyY2hQYXJhbXMiLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJlcnIiLCJlcnJvciIsInVzZUVmZmVjdCIsIkZvcm0iLCJzdHlsZWQiLCJmb3JtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxTQUFTLEdBQUc7QUFBQyxTQUFPLENBQVI7QUFBVyxTQUFPLENBQWxCO0FBQXFCLFNBQU8sQ0FBNUI7QUFBK0IsU0FBTyxDQUF0QztBQUF5QyxTQUFPLENBQWhEO0FBQW1ELFNBQU8sQ0FBMUQ7QUFBNkQsU0FBTyxDQUFwRTtBQUF1RSxTQUFPLENBQTlFO0FBQWlGLFNBQU8sQ0FBeEY7QUFBMkYsU0FBTyxFQUFsRztBQUFzRyxTQUFPLEVBQTdHO0FBQWlILFNBQU87QUFBeEgsQ0FBbEI7QUFBQSxJQUNJQyxPQUFPLEdBQUdDLEtBQUssQ0FBQyxFQUFELENBQUwsQ0FBVUMsSUFBVixDQUFlLEVBQWYsQ0FEZDtBQUFBLElBRUlDLE9BQU8sR0FBR0YsS0FBSyxDQUFDLEVBQUQsQ0FBTCxDQUFVQyxJQUFWLENBQWUsRUFBZixDQUZkO0FBQUEsSUFHSUUsWUFBWSxHQUFHSCxLQUFLLENBQUMsRUFBRCxDQUFMLENBQVVD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RDtBQUFPLEtBQUMsRUFBRSxFQUFWO0FBQWMsS0FBQyxFQUFFWixPQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBVkosRUFXSSxNQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFDLFFBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFEQSxDQVhKLENBREo7QUFpQkg7O0dBckV1QkssSzs7S0FBQUEsSztBQXVFeEIsSUFBTWdDLElBQUksR0FBR0MseURBQU0sQ0FBQ0MsSUFBVjtBQUFBO0FBQUE7QUFBQSwrR0FBVjtNQUFNRixJIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCBGcmFnbWVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcbmltcG9ydCBDaGFydCBmcm9tICcuLi9jb21wb25lbnRzL2NoYXJ0J1xuXG5jb25zdCBtb250aHNNYXAgPSB7J2phbic6IDEsICdmZWInOiAyLCAnbWFyJzogMywgJ2Fwcic6IDQsICdtYXknOiA1LCAnanVuJzogNiwgJ2p1bCc6IDcsICdhdWcnOiA4LCAnc2VwJzogOSwgJ29jdCc6IDEwLCAnbm92JzogMTEsICdkZWMnOiAxMn0sXG4gICAgYXZnX2RuaSA9IEFycmF5KDEyKS5maWxsKFtdKSxcbiAgICBhdmdfZ2hpID0gQXJyYXkoMTIpLmZpbGwoW10pLFxuICAgIGF2Z19sYXRfdGlsdCA9IEFycmF5KDEyKS5maWxsKFtdKVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmRleCgpIHtcbiAgICBjb25zdCBbbGF0LCBzZXRMYXRdID0gdXNlU3RhdGUoNDApXG4gICAgY29uc3QgW2xvbiwgc2V0TG9uXSA9IHVzZVN0YXRlKC0xMDUpXG5cbiAgICBjb25zdCBoYW5kbGVJbnB1dCA9IChlKSA9PiB7XG4gICAgICAgIGlmKGUudGFyZ2V0Lm5hbWUgPT09ICdsYXQnKSB7XG4gICAgICAgICAgICBzZXRMYXQoZS50YXJnZXQudmFsdWUpXG4gICAgICAgIH0gZWxzZSBpZihlLnRhcmdldC5uYW1lID09PSAnbG9uJyl7XG4gICAgICAgICAgICBzZXRMb24oZS50YXJnZXQudmFsdWUpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgVW5rbm93biBpbnB1dCB3aXRoIHZhbHVlOiAke2UudGFyZ2V0LnZhbHVlfWApXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVDbGljayA9IChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuXG4gICAgICAgIGNvbnN0IHNldCA9IChqc29uKSA9PiB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhqc29uLm91dHB1dHMuYXZnX2RuaS5tb250aGx5KSkge1xuICAgICAgICAgICAgICAgIGF2Z19kbmlbbW9udGhzTWFwW2tleV0tMV0gPSB2YWx1ZVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMoanNvbi5vdXRwdXRzLmF2Z19naGkubW9udGhseSkpIHtcbiAgICAgICAgICAgICAgICBhdmdfZ2hpW21vbnRoc01hcFtrZXldLTFdID0gdmFsdWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKGpzb24ub3V0cHV0cy5hdmdfbGF0X3RpbHQubW9udGhseSkpIHtcbiAgICAgICAgICAgICAgICBhdmdfbGF0X3RpbHRbbW9udGhzTWFwW2tleV0tMV0gPSB2YWx1ZVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnYXZnX2RuaScsIGF2Z19kbmkpXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnYXZnX2doaScsIGF2Z19naGkpXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnYXZnX2xhdF90aWx0JywgYXZnX2xhdF90aWx0KVxuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHVybCA9IG5ldyBVUkwoJ2h0dHBzOi8vbG9jYWxob3N0OjMwMDAvbnJlbCcpXG4gICAgICAgIHVybC5zZWFyY2ggPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHsgbGF0LCBsb24gfSlcblxuICAgICAgICBmZXRjaCh1cmwpXG4gICAgICAgICAgICAudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcbiAgICAgICAgICAgIC50aGVuKGpzb24gPT4ge1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGpzb24pXG4gICAgICAgICAgICAgICAgc2V0KGpzb24pXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpXG4gICAgICAgICAgICB9KVxuICAgIH1cblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdhdmdfZG5pIGNoYW5nZWQnKVxuICAgIH0sW2F2Z19kbmldKVxuXG5cbiAgICByZXR1cm4oICAgICAgXG4gICAgICAgIDxGcmFnbWVudD5cbiAgICAgICAgICAgIDxoMz5OUkVMIERhdGEgZm9yPC9oMz5cbiAgICAgICAgICAgIHsvKiA8cD5MYXRpdHVkZSB7ZGF0YS5pbnB1dHMubGF0fSBMb25naXR1ZGUge2RhdGEuaW5wdXRzLmxvbn08L3A+ICovfVxuICAgICAgICAgICAgey8qIDxwPntkYXRhLm91dHB1dHMuYXZnX2RuaS5tb250aGx5fTwvcD4gKi99XG4gICAgICAgICAgICA8Rm9ybT5cbiAgICAgICAgICAgICAgICA8cD57YFRyeSB7NDAsLTEwNX1gfTwvcD5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwibGF0XCIgZGVmYXVsdFZhbHVlPXs0MH0gcGxhY2Vob2xkZXI9e2BMYXRpdHVkZWB9IG9uQ2hhbmdlPXsoZSk9PiB7IGhhbmRsZUlucHV0KGUpIH19IC8+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImxvblwiIGRlZmF1bHRWYWx1ZT17LTEwNX0gcGxhY2Vob2xkZXI9e2BMYXRpdHVkZWB9IG9uQ2hhbmdlPXsoZSk9PiB7IGhhbmRsZUlucHV0KGUpIH19IC8+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17KGUpID0+IHsgaGFuZGxlQ2xpY2soZSkgfX0+U2VhcmNoPC9idXR0b24+XG4gICAgICAgICAgICA8L0Zvcm0+XG4gICAgICAgICAgICA8Q2hhcnQgeD17W119IHk9e2F2Z19kbml9IC8+XG4gICAgICAgICAgICA8TGluayBocmVmPScvYWJvdXQnPlxuICAgICAgICAgICAgPGE+QWJvdXQ8L2E+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvRnJhZ21lbnQ+XG4gICAgKVxufVxuXG5jb25zdCBGb3JtID0gc3R5bGVkLmZvcm1gXG4gICAgaW5wdXQge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgbWFyZ2luOiAwIDAgMjBweDtcbiAgICAgICAgYm9yZGVyOiAwO1xuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLDAsMCwuMyk7XG5cbiAgICAgICAgJjpmb2N1cyB7XG4gICAgICAgICAgICBib3JkZXI6IDA7XG4gICAgICAgIH1cbiAgICB9XG5gIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})