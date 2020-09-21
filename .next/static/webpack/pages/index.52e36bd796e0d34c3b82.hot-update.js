webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Index; });\n/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _components_chart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/chart */ \"./components/chart.js\");\n\n\nvar _jsxFileName = \"/Users/jasonbryant/Desktop/nrel/pages/index.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\nvar monthsMap = {\n  'jan': 1,\n  'feb': 2,\n  'mar': 3,\n  'apr': 4,\n  'may': 5,\n  'jun': 6,\n  'jul': 7,\n  'aug': 8,\n  'sep': 9,\n  'oct': 10,\n  'nov': 11,\n  'dec': 12\n};\nfunction Index() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(40),\n      lat = _useState[0],\n      setLat = _useState[1],\n      _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(-105),\n      lon = _useState2[0],\n      setLon = _useState2[1],\n      _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(Array(12).fill([])),\n      avg_dni = _useState3[0],\n      setDNI = _useState3[1],\n      _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(Array(12).fill([])),\n      avg_ghi = _useState4[0],\n      setGHI = _useState4[1],\n      _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(Array(12).fill([])),\n      avg_lat_tilt = _useState5[0],\n      setLatTilt = _useState5[1];\n\n  var handleInput = function handleInput(e) {\n    if (e.target.name === 'lat') {\n      setLat(e.target.value);\n    } else if (e.target.name === 'lon') {\n      setLon(e.target.value);\n    } else {\n      console.log(\"Unknown input with value: \".concat(e.target.value));\n    }\n  };\n\n  var handleClick = function handleClick(e) {\n    e.preventDefault();\n    var ct = 0;\n\n    var set = function set(json) {\n      for (var _i = 0, _Object$entries = Object.entries(json.outputs.avg_dni.monthly); _i < _Object$entries.length; _i++) {\n        var _Object$entries$_i = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_Object$entries[_i], 2),\n            key = _Object$entries$_i[0],\n            value = _Object$entries$_i[1];\n\n        var temp = avg_dni;\n        temp[monthsMap[key] - 1] = value;\n        setDNI(temp);\n      }\n\n      for (var _i2 = 0, _Object$entries2 = Object.entries(json.outputs.avg_ghi.monthly); _i2 < _Object$entries2.length; _i2++) {\n        var _Object$entries2$_i = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_Object$entries2[_i2], 2),\n            _key = _Object$entries2$_i[0],\n            _value = _Object$entries2$_i[1];\n\n        var _temp = avg_ghi;\n        avg_ghi[monthsMap[_key] - 1] = _value;\n        setGHI(_temp);\n      }\n\n      for (var _i3 = 0, _Object$entries3 = Object.entries(json.outputs.avg_lat_tilt.monthly); _i3 < _Object$entries3.length; _i3++) {\n        var _Object$entries3$_i = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_Object$entries3[_i3], 2),\n            _key2 = _Object$entries3$_i[0],\n            _value2 = _Object$entries3$_i[1];\n\n        var _temp2 = avg_lat_tilt;\n        avg_lat_tilt[monthsMap[_key2] - 1] = _value2;\n        setLatTilt(_temp2);\n      }\n\n      setTimeout(function () {\n        console.log('avg_dni', ++ct, avg_dni);\n      }, 1000); // console.log('avg_dni', avg_dni)\n      // console.log('avg_ghi', avg_ghi)\n      // console.log('avg_lat_tilt', avg_lat_tilt)\n    };\n\n    var url = new URL('https://localhost:3000/nrel');\n    url.search = new URLSearchParams({\n      lat: lat,\n      lon: lon\n    });\n    fetch(url).then(function (res) {\n      return res.json();\n    }).then(function (json) {\n      // console.log(json)\n      set(json);\n    })[\"catch\"](function (err) {\n      console.error(err);\n    });\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    console.log('avg_dni changed');\n  }, [avg_dni]);\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_1__[\"Fragment\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 77,\n      columnNumber: 9\n    }\n  }, __jsx(\"h3\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 78,\n      columnNumber: 13\n    }\n  }, \"NREL Data for\"), __jsx(Form, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 81,\n      columnNumber: 13\n    }\n  }, __jsx(\"p\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 82,\n      columnNumber: 17\n    }\n  }, \"Try {40,-105}\"), __jsx(\"input\", {\n    type: \"text\",\n    name: \"lat\",\n    defaultValue: 40,\n    placeholder: \"Latitude\",\n    onChange: function onChange(e) {\n      handleInput(e);\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 83,\n      columnNumber: 17\n    }\n  }), __jsx(\"input\", {\n    type: \"text\",\n    name: \"lon\",\n    defaultValue: -105,\n    placeholder: \"Latitude\",\n    onChange: function onChange(e) {\n      handleInput(e);\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 84,\n      columnNumber: 17\n    }\n  }), __jsx(\"button\", {\n    type: \"button\",\n    onClick: function onClick(e) {\n      handleClick(e);\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 85,\n      columnNumber: 17\n    }\n  }, \"Search\")), __jsx(_components_chart__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    x: [],\n    y: avg_dni,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 87,\n      columnNumber: 13\n    }\n  }), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    href: \"/about\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 88,\n      columnNumber: 13\n    }\n  }, __jsx(\"a\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 89,\n      columnNumber: 13\n    }\n  }, \"About\")));\n}\n\n_s(Index, \"/uBjb5gyMEnDnbgbdMIfd23RLsY=\");\n\n_c = Index;\nvar Form = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].form.withConfig({\n  displayName: \"pages__Form\",\n  componentId: \"x4epxo-0\"\n})([\"input{display:block;margin:0 0 20px;border:0;border-bottom:1px solid rgba(0,0,0,.3);&:focus{border:0;}}\"]);\n_c2 = Form;\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"Index\");\n$RefreshReg$(_c2, \"Form\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJtb250aHNNYXAiLCJJbmRleCIsInVzZVN0YXRlIiwibGF0Iiwic2V0TGF0IiwibG9uIiwic2V0TG9uIiwiQXJyYXkiLCJmaWxsIiwiYXZnX2RuaSIsInNldEROSSIsImF2Z19naGkiLCJzZXRHSEkiLCJhdmdfbGF0X3RpbHQiLCJzZXRMYXRUaWx0IiwiaGFuZGxlSW5wdXQiLCJlIiwidGFyZ2V0IiwibmFtZSIsInZhbHVlIiwiY29uc29sZSIsImxvZyIsImhhbmRsZUNsaWNrIiwicHJldmVudERlZmF1bHQiLCJjdCIsInNldCIsImpzb24iLCJPYmplY3QiLCJlbnRyaWVzIiwib3V0cHV0cyIsIm1vbnRobHkiLCJrZXkiLCJ0ZW1wIiwic2V0VGltZW91dCIsInVybCIsIlVSTCIsInNlYXJjaCIsIlVSTFNlYXJjaFBhcmFtcyIsImZldGNoIiwidGhlbiIsInJlcyIsImVyciIsImVycm9yIiwidXNlRWZmZWN0IiwiRm9ybSIsInN0eWxlZCIsImZvcm0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFNBQVMsR0FBRztBQUFDLFNBQU8sQ0FBUjtBQUFXLFNBQU8sQ0FBbEI7QUFBcUIsU0FBTyxDQUE1QjtBQUErQixTQUFPLENBQXRDO0FBQXlDLFNBQU8sQ0FBaEQ7QUFBbUQsU0FBTyxDQUExRDtBQUE2RCxTQUFPLENBQXBFO0FBQXVFLFNBQU8sQ0FBOUU7QUFBaUYsU0FBTyxDQUF4RjtBQUEyRixTQUFPLEVBQWxHO0FBQXNHLFNBQU8sRUFBN0c7QUFBaUgsU0FBTztBQUF4SCxDQUFsQjtBQUVlLFNBQVNDLEtBQVQsR0FBaUI7QUFBQTs7QUFBQSxrQkFDTkMsc0RBQVEsQ0FBQyxFQUFELENBREY7QUFBQSxNQUNyQkMsR0FEcUI7QUFBQSxNQUNoQkMsTUFEZ0I7QUFBQSxtQkFFUkYsc0RBQVEsQ0FBQyxDQUFDLEdBQUYsQ0FGQTtBQUFBLE1BRXZCRyxHQUZ1QjtBQUFBLE1BRWxCQyxNQUZrQjtBQUFBLG1CQUdKSixzREFBUSxDQUFDSyxLQUFLLENBQUMsRUFBRCxDQUFMLENBQVVDLElBQVYsQ0FBZSxFQUFmLENBQUQsQ0FISjtBQUFBLE1BR3ZCQyxPQUh1QjtBQUFBLE1BR2RDLE1BSGM7QUFBQSxtQkFJSlIsc0RBQVEsQ0FBQ0ssS0FBSyxDQUFDLEVBQUQsQ0FBTCxDQUFVQyxJQUFWLENBQWUsRUFBZixDQUFELENBSko7QUFBQSxNQUl2QkcsT0FKdUI7QUFBQSxNQUlkQyxNQUpjO0FBQUEsbUJBS0tWLHNEQUFRLENBQUNLLEtBQUssQ0FBQyxFQUFELENBQUwsQ0FBVUMsSUFBVixDQUFlLEVBQWYsQ0FBRCxDQUxiO0FBQUEsTUFLdkJLLFlBTHVCO0FBQUEsTUFLVEMsVUFMUzs7QUFPNUIsTUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ0MsQ0FBRCxFQUFPO0FBQ3ZCLFFBQUdBLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxJQUFULEtBQWtCLEtBQXJCLEVBQTRCO0FBQ3hCZCxZQUFNLENBQUNZLENBQUMsQ0FBQ0MsTUFBRixDQUFTRSxLQUFWLENBQU47QUFDSCxLQUZELE1BRU8sSUFBR0gsQ0FBQyxDQUFDQyxNQUFGLENBQVNDLElBQVQsS0FBa0IsS0FBckIsRUFBMkI7QUFDOUJaLFlBQU0sQ0FBQ1UsQ0FBQyxDQUFDQyxNQUFGLENBQVNFLEtBQVYsQ0FBTjtBQUNILEtBRk0sTUFFQTtBQUNIQyxhQUFPLENBQUNDLEdBQVIscUNBQXlDTCxDQUFDLENBQUNDLE1BQUYsQ0FBU0UsS0FBbEQ7QUFDSDtBQUNKLEdBUkQ7O0FBVUEsTUFBTUcsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ04sQ0FBRCxFQUFPO0FBQ3ZCQSxLQUFDLENBQUNPLGNBQUY7QUFFQSxRQUFJQyxFQUFFLEdBQUcsQ0FBVDs7QUFFQSxRQUFNQyxHQUFHLEdBQUcsU0FBTkEsR0FBTSxDQUFDQyxJQUFELEVBQVU7QUFDbEIseUNBQTJCQyxNQUFNLENBQUNDLE9BQVAsQ0FBZUYsSUFBSSxDQUFDRyxPQUFMLENBQWFwQixPQUFiLENBQXFCcUIsT0FBcEMsQ0FBM0IscUNBQXlFO0FBQUE7QUFBQSxZQUE3REMsR0FBNkQ7QUFBQSxZQUF4RFosS0FBd0Q7O0FBQ3JFLFlBQU1hLElBQUksR0FBR3ZCLE9BQWI7QUFDQXVCLFlBQUksQ0FBQ2hDLFNBQVMsQ0FBQytCLEdBQUQsQ0FBVCxHQUFlLENBQWhCLENBQUosR0FBeUJaLEtBQXpCO0FBQ0FULGNBQU0sQ0FBQ3NCLElBQUQsQ0FBTjtBQUNIOztBQUNELDJDQUEyQkwsTUFBTSxDQUFDQyxPQUFQLENBQWVGLElBQUksQ0FBQ0csT0FBTCxDQUFhbEIsT0FBYixDQUFxQm1CLE9BQXBDLENBQTNCLHdDQUF5RTtBQUFBO0FBQUEsWUFBN0RDLElBQTZEO0FBQUEsWUFBeERaLE1BQXdEOztBQUNyRSxZQUFNYSxLQUFJLEdBQUdyQixPQUFiO0FBQ0FBLGVBQU8sQ0FBQ1gsU0FBUyxDQUFDK0IsSUFBRCxDQUFULEdBQWUsQ0FBaEIsQ0FBUCxHQUE0QlosTUFBNUI7QUFDQVAsY0FBTSxDQUFDb0IsS0FBRCxDQUFOO0FBQ0g7O0FBQ0QsMkNBQTJCTCxNQUFNLENBQUNDLE9BQVAsQ0FBZUYsSUFBSSxDQUFDRyxPQUFMLENBQWFoQixZQUFiLENBQTBCaUIsT0FBekMsQ0FBM0Isd0NBQThFO0FBQUE7QUFBQSxZQUFsRUMsS0FBa0U7QUFBQSxZQUE3RFosT0FBNkQ7O0FBQzFFLFlBQU1hLE1BQUksR0FBR25CLFlBQWI7QUFDQUEsb0JBQVksQ0FBQ2IsU0FBUyxDQUFDK0IsS0FBRCxDQUFULEdBQWUsQ0FBaEIsQ0FBWixHQUFpQ1osT0FBakM7QUFDQUwsa0JBQVUsQ0FBQ2tCLE1BQUQsQ0FBVjtBQUNIOztBQUdEQyxnQkFBVSxDQUFDLFlBQUs7QUFDWmIsZUFBTyxDQUFDQyxHQUFSLENBQVksU0FBWixFQUF1QixFQUFFRyxFQUF6QixFQUE2QmYsT0FBN0I7QUFDSCxPQUZTLEVBRVAsSUFGTyxDQUFWLENBbEJrQixDQXNCbEI7QUFDQTtBQUNBO0FBQ0gsS0F6QkQ7O0FBMkJBLFFBQUl5QixHQUFHLEdBQUcsSUFBSUMsR0FBSixDQUFRLDZCQUFSLENBQVY7QUFDQUQsT0FBRyxDQUFDRSxNQUFKLEdBQWEsSUFBSUMsZUFBSixDQUFvQjtBQUFFbEMsU0FBRyxFQUFIQSxHQUFGO0FBQU9FLFNBQUcsRUFBSEE7QUFBUCxLQUFwQixDQUFiO0FBRUFpQyxTQUFLLENBQUNKLEdBQUQsQ0FBTCxDQUNLSyxJQURMLENBQ1UsVUFBQUMsR0FBRztBQUFBLGFBQUlBLEdBQUcsQ0FBQ2QsSUFBSixFQUFKO0FBQUEsS0FEYixFQUVLYSxJQUZMLENBRVUsVUFBQWIsSUFBSSxFQUFJO0FBQ1Y7QUFDQUQsU0FBRyxDQUFDQyxJQUFELENBQUg7QUFDSCxLQUxMLFdBTVcsVUFBQWUsR0FBRyxFQUFJO0FBQ1ZyQixhQUFPLENBQUNzQixLQUFSLENBQWNELEdBQWQ7QUFDSCxLQVJMO0FBU0gsR0E1Q0Q7O0FBOENBRSx5REFBUyxDQUFDLFlBQU07QUFDWnZCLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLGlCQUFaO0FBQ0gsR0FGUSxFQUVQLENBQUNaLE9BQUQsQ0FGTyxDQUFUO0FBS0EsU0FDSSxNQUFDLDhDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURKLEVBSUksTUFBQyxJQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURKLEVBRUk7QUFBTyxRQUFJLEVBQUMsTUFBWjtBQUFtQixRQUFJLEVBQUMsS0FBeEI7QUFBOEIsZ0JBQVksRUFBRSxFQUE1QztBQUFnRCxlQUFXLFlBQTNEO0FBQXlFLFlBQVEsRUFBRSxrQkFBQ08sQ0FBRCxFQUFNO0FBQUVELGlCQUFXLENBQUNDLENBQUQsQ0FBWDtBQUFnQixLQUEzRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkosRUFHSTtBQUFPLFFBQUksRUFBQyxNQUFaO0FBQW1CLFFBQUksRUFBQyxLQUF4QjtBQUE4QixnQkFBWSxFQUFFLENBQUMsR0FBN0M7QUFBa0QsZUFBVyxZQUE3RDtBQUEyRSxZQUFRLEVBQUUsa0JBQUNBLENBQUQsRUFBTTtBQUFFRCxpQkFBVyxDQUFDQyxDQUFELENBQVg7QUFBZ0IsS0FBN0c7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUhKLEVBSUk7QUFBUSxRQUFJLEVBQUMsUUFBYjtBQUFzQixXQUFPLEVBQUUsaUJBQUNBLENBQUQsRUFBTztBQUFFTSxpQkFBVyxDQUFDTixDQUFELENBQVg7QUFBZ0IsS0FBeEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUpKLENBSkosRUFVSSxNQUFDLHlEQUFEO0FBQU8sS0FBQyxFQUFFLEVBQVY7QUFBYyxLQUFDLEVBQUVQLE9BQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFWSixFQVdJLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUMsUUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURBLENBWEosQ0FESjtBQWlCSDs7R0FyRnVCUixLOztLQUFBQSxLO0FBdUZ4QixJQUFNMkMsSUFBSSxHQUFHQyx5REFBTSxDQUFDQyxJQUFWO0FBQUE7QUFBQTtBQUFBLCtHQUFWO01BQU1GLEkiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VDb250ZXh0LCB1c2VFZmZlY3QsIEZyYWdtZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuaW1wb3J0IENoYXJ0IGZyb20gJy4uL2NvbXBvbmVudHMvY2hhcnQnXG5cbmNvbnN0IG1vbnRoc01hcCA9IHsnamFuJzogMSwgJ2ZlYic6IDIsICdtYXInOiAzLCAnYXByJzogNCwgJ21heSc6IDUsICdqdW4nOiA2LCAnanVsJzogNywgJ2F1Zyc6IDgsICdzZXAnOiA5LCAnb2N0JzogMTAsICdub3YnOiAxMSwgJ2RlYyc6IDEyfVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmRleCgpIHtcbiAgICBjb25zdCBbbGF0LCBzZXRMYXRdID0gdXNlU3RhdGUoNDApLFxuICAgICAgICBbbG9uLCBzZXRMb25dID0gdXNlU3RhdGUoLTEwNSksXG4gICAgICAgIFthdmdfZG5pLCBzZXRETkldID0gdXNlU3RhdGUoQXJyYXkoMTIpLmZpbGwoW10pKSxcbiAgICAgICAgW2F2Z19naGksIHNldEdISV0gPSB1c2VTdGF0ZShBcnJheSgxMikuZmlsbChbXSkpLFxuICAgICAgICBbYXZnX2xhdF90aWx0LCBzZXRMYXRUaWx0XSA9IHVzZVN0YXRlKEFycmF5KDEyKS5maWxsKFtdKSlcblxuICAgIGNvbnN0IGhhbmRsZUlucHV0ID0gKGUpID0+IHtcbiAgICAgICAgaWYoZS50YXJnZXQubmFtZSA9PT0gJ2xhdCcpIHtcbiAgICAgICAgICAgIHNldExhdChlLnRhcmdldC52YWx1ZSlcbiAgICAgICAgfSBlbHNlIGlmKGUudGFyZ2V0Lm5hbWUgPT09ICdsb24nKXtcbiAgICAgICAgICAgIHNldExvbihlLnRhcmdldC52YWx1ZSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBVbmtub3duIGlucHV0IHdpdGggdmFsdWU6ICR7ZS50YXJnZXQudmFsdWV9YClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZUNsaWNrID0gKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgICAgICAgbGV0IGN0ID0gMFxuXG4gICAgICAgIGNvbnN0IHNldCA9IChqc29uKSA9PiB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhqc29uLm91dHB1dHMuYXZnX2RuaS5tb250aGx5KSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRlbXAgPSBhdmdfZG5pXG4gICAgICAgICAgICAgICAgdGVtcFttb250aHNNYXBba2V5XS0xXSA9IHZhbHVlXG4gICAgICAgICAgICAgICAgc2V0RE5JKHRlbXApXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhqc29uLm91dHB1dHMuYXZnX2doaS5tb250aGx5KSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRlbXAgPSBhdmdfZ2hpXG4gICAgICAgICAgICAgICAgYXZnX2doaVttb250aHNNYXBba2V5XS0xXSA9IHZhbHVlXG4gICAgICAgICAgICAgICAgc2V0R0hJKHRlbXApXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhqc29uLm91dHB1dHMuYXZnX2xhdF90aWx0Lm1vbnRobHkpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdGVtcCA9IGF2Z19sYXRfdGlsdFxuICAgICAgICAgICAgICAgIGF2Z19sYXRfdGlsdFttb250aHNNYXBba2V5XS0xXSA9IHZhbHVlXG4gICAgICAgICAgICAgICAgc2V0TGF0VGlsdCh0ZW1wKVxuICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCk9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2F2Z19kbmknLCArK2N0LCBhdmdfZG5pKVxuICAgICAgICAgICAgfSwgMTAwMClcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ2F2Z19kbmknLCBhdmdfZG5pKVxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ2F2Z19naGknLCBhdmdfZ2hpKVxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ2F2Z19sYXRfdGlsdCcsIGF2Z19sYXRfdGlsdClcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciB1cmwgPSBuZXcgVVJMKCdodHRwczovL2xvY2FsaG9zdDozMDAwL25yZWwnKVxuICAgICAgICB1cmwuc2VhcmNoID0gbmV3IFVSTFNlYXJjaFBhcmFtcyh7IGxhdCwgbG9uIH0pXG5cbiAgICAgICAgZmV0Y2godXJsKVxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXG4gICAgICAgICAgICAudGhlbihqc29uID0+IHtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhqc29uKVxuICAgICAgICAgICAgICAgIHNldChqc29uKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKVxuICAgICAgICAgICAgfSlcbiAgICB9XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygnYXZnX2RuaSBjaGFuZ2VkJylcbiAgICB9LFthdmdfZG5pXSlcblxuXG4gICAgcmV0dXJuKCAgICAgIFxuICAgICAgICA8RnJhZ21lbnQ+XG4gICAgICAgICAgICA8aDM+TlJFTCBEYXRhIGZvcjwvaDM+XG4gICAgICAgICAgICB7LyogPHA+TGF0aXR1ZGUge2RhdGEuaW5wdXRzLmxhdH0gTG9uZ2l0dWRlIHtkYXRhLmlucHV0cy5sb259PC9wPiAqL31cbiAgICAgICAgICAgIHsvKiA8cD57ZGF0YS5vdXRwdXRzLmF2Z19kbmkubW9udGhseX08L3A+ICovfVxuICAgICAgICAgICAgPEZvcm0+XG4gICAgICAgICAgICAgICAgPHA+e2BUcnkgezQwLC0xMDV9YH08L3A+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImxhdFwiIGRlZmF1bHRWYWx1ZT17NDB9IHBsYWNlaG9sZGVyPXtgTGF0aXR1ZGVgfSBvbkNoYW5nZT17KGUpPT4geyBoYW5kbGVJbnB1dChlKSB9fSAvPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJsb25cIiBkZWZhdWx0VmFsdWU9ey0xMDV9IHBsYWNlaG9sZGVyPXtgTGF0aXR1ZGVgfSBvbkNoYW5nZT17KGUpPT4geyBoYW5kbGVJbnB1dChlKSB9fSAvPlxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9eyhlKSA9PiB7IGhhbmRsZUNsaWNrKGUpIH19PlNlYXJjaDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9Gb3JtPlxuICAgICAgICAgICAgPENoYXJ0IHg9e1tdfSB5PXthdmdfZG5pfSAvPlxuICAgICAgICAgICAgPExpbmsgaHJlZj0nL2Fib3V0Jz5cbiAgICAgICAgICAgIDxhPkFib3V0PC9hPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L0ZyYWdtZW50PlxuICAgIClcbn1cblxuY29uc3QgRm9ybSA9IHN0eWxlZC5mb3JtYFxuICAgIGlucHV0IHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIG1hcmdpbjogMCAwIDIwcHg7XG4gICAgICAgIGJvcmRlcjogMDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwwLDAsLjMpO1xuXG4gICAgICAgICY6Zm9jdXMge1xuICAgICAgICAgICAgYm9yZGVyOiAwO1xuICAgICAgICB9XG4gICAgfVxuYCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})