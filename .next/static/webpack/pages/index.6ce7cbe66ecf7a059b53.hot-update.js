webpackHotUpdate_N_E("pages/index",{

/***/ "./components/chart.js":
/*!*****************************!*\
  !*** ./components/chart.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Chart; });\n/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3 */ \"./node_modules/d3/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName = \"/Users/jasonbryant/Desktop/nrel/components/chart.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\nfunction Chart(props) {\n  _s();\n\n  var chartRef = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__[\"createRef\"])(),\n      accessToRef = null;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      loadedChart = _useState[0],\n      updateLoadStatus = _useState[1],\n      _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])([]),\n      data = _useState2[0],\n      setData = _useState2[1],\n      h = 500,\n      w = 400;\n\n  var drawChart = function drawChart() {\n    if (!loadedChart) {\n      var _accessToRef = d3__WEBPACK_IMPORTED_MODULE_0__[\"select\"](chartRef.current).append('svg').attr('width', w) // w\n      .attr('height', h) // h\n      .style('background-color', '#ffffff').style('padding', 10).style('margin-left', 50);\n\n      updateLoadStatus(true);\n    }\n\n    if (accessToRef != null) {\n      accessToRef.selectAll('rect').data([3, 6, 10, 4]).enter().append('rect').attr('x', function (d, i) {\n        return i * 70;\n      }).attr('y', function (d, i) {\n        return h - 10 * d;\n      }).attr('width', 65).attr('height', function (d, i) {\n        return d * 10;\n      }).attr('fill', 'tomato');\n    }\n  }; // const drawChart = (height, width) => {\n  //     d3.select(\"#chart\")\n  //         .append(\"svg\")\n  //         .attr(\"width\", width)\n  //         .attr(\"height\", height)\n  //         .style(\"border\", \"1px solid black\")\n  //         .append(\"text\")\n  //         .attr(\"fill\", \"green\")\n  //         .attr(\"x\", 50)\n  //         .attr(\"y\", 50)\n  //         .text(\"Hello D3\")\n  // }\n\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    drawChart();\n    console.log('chartRef', chartRef.current);\n  }, [props.coordsStr, loadedChart]);\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_1__[\"Fragment\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 9\n    }\n  }, __jsx(\"h2\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 13\n    }\n  }, \"Graphs with React\"), __jsx(\"div\", {\n    id: \"chart\",\n    ref: chartRef,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 13\n    }\n  }));\n}\n\n_s(Chart, \"gVIT8qWMfJ2djToJalQPiF4tMNw=\");\n\n_c = Chart;\nChart.propTypes = {\n  x: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array,\n  y: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array,\n  coordsStr: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string\n};\nChart.defaultProps = {\n  x: [],\n  y: [],\n  coordsStr: ''\n};\n\nvar _c;\n\n$RefreshReg$(_c, \"Chart\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jaGFydC5qcz84OGE2Il0sIm5hbWVzIjpbIkNoYXJ0IiwicHJvcHMiLCJjaGFydFJlZiIsImNyZWF0ZVJlZiIsImFjY2Vzc1RvUmVmIiwidXNlU3RhdGUiLCJsb2FkZWRDaGFydCIsInVwZGF0ZUxvYWRTdGF0dXMiLCJkYXRhIiwic2V0RGF0YSIsImgiLCJ3IiwiZHJhd0NoYXJ0IiwiZDMiLCJjdXJyZW50IiwiYXBwZW5kIiwiYXR0ciIsInN0eWxlIiwic2VsZWN0QWxsIiwiZW50ZXIiLCJkIiwiaSIsInVzZUVmZmVjdCIsImNvbnNvbGUiLCJsb2ciLCJjb29yZHNTdHIiLCJwcm9wVHlwZXMiLCJ4IiwiUHJvcFR5cGVzIiwiYXJyYXkiLCJ5Iiwic3RyaW5nIiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLEtBQVQsQ0FBZUMsS0FBZixFQUFzQjtBQUFBOztBQUNqQyxNQUFJQyxRQUFRLGdCQUFHQyx1REFBUyxFQUF4QjtBQUFBLE1BQ0lDLFdBQVcsR0FBRyxJQURsQjs7QUFEaUMsa0JBSU9DLHNEQUFRLENBQUMsS0FBRCxDQUpmO0FBQUEsTUFJMUJDLFdBSjBCO0FBQUEsTUFJYkMsZ0JBSmE7QUFBQSxtQkFLWEYsc0RBQVEsQ0FBQyxFQUFELENBTEc7QUFBQSxNQUs1QkcsSUFMNEI7QUFBQSxNQUt0QkMsT0FMc0I7QUFBQSxNQU03QkMsQ0FONkIsR0FNekIsR0FOeUI7QUFBQSxNQU83QkMsQ0FQNkIsR0FPekIsR0FQeUI7O0FBU2pDLE1BQU1DLFNBQVMsR0FBRyxTQUFaQSxTQUFZLEdBQU07QUFDcEIsUUFBRyxDQUFDTixXQUFKLEVBQWlCO0FBQ2IsVUFBTUYsWUFBVyxHQUFHUyx5Q0FBQSxDQUFVWCxRQUFRLENBQUNZLE9BQW5CLEVBQ2ZDLE1BRGUsQ0FDUixLQURRLEVBRWZDLElBRmUsQ0FFVixPQUZVLEVBRURMLENBRkMsRUFFRTtBQUZGLE9BR2ZLLElBSGUsQ0FHVixRQUhVLEVBR0FOLENBSEEsRUFHRztBQUhILE9BSWZPLEtBSmUsQ0FJVCxrQkFKUyxFQUlXLFNBSlgsRUFLZkEsS0FMZSxDQUtULFNBTFMsRUFLRSxFQUxGLEVBTWZBLEtBTmUsQ0FNVCxhQU5TLEVBTU0sRUFOTixDQUFwQjs7QUFRSVYsc0JBQWdCLENBQUMsSUFBRCxDQUFoQjtBQUNQOztBQUVELFFBQUdILFdBQVcsSUFBSSxJQUFsQixFQUF3QjtBQUNwQkEsaUJBQVcsQ0FBQ2MsU0FBWixDQUFzQixNQUF0QixFQUNLVixJQURMLENBQ1UsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLEVBQVAsRUFBVyxDQUFYLENBRFYsRUFFS1csS0FGTCxHQUdLSixNQUhMLENBR1ksTUFIWixFQUlLQyxJQUpMLENBSVUsR0FKVixFQUllLFVBQUNJLENBQUQsRUFBSUMsQ0FBSjtBQUFBLGVBQVVBLENBQUMsR0FBRyxFQUFkO0FBQUEsT0FKZixFQUtLTCxJQUxMLENBS1UsR0FMVixFQUtlLFVBQUNJLENBQUQsRUFBSUMsQ0FBSjtBQUFBLGVBQVVYLENBQUMsR0FBRyxLQUFLVSxDQUFuQjtBQUFBLE9BTGYsRUFNS0osSUFOTCxDQU1VLE9BTlYsRUFNbUIsRUFObkIsRUFPS0EsSUFQTCxDQU9VLFFBUFYsRUFPb0IsVUFBQ0ksQ0FBRCxFQUFJQyxDQUFKO0FBQUEsZUFBVUQsQ0FBQyxHQUFHLEVBQWQ7QUFBQSxPQVBwQixFQVFLSixJQVJMLENBUVUsTUFSVixFQVFrQixRQVJsQjtBQVNDO0FBQ1IsR0F4QkQsQ0FUaUMsQ0FxQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUFNLHlEQUFTLENBQUMsWUFBTTtBQUNaVixhQUFTO0FBRVRXLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLFVBQVosRUFBd0J0QixRQUFRLENBQUNZLE9BQWpDO0FBQ0gsR0FKUSxFQUlOLENBQUNiLEtBQUssQ0FBQ3dCLFNBQVAsRUFBa0JuQixXQUFsQixDQUpNLENBQVQ7QUFPQSxTQUNJLE1BQUMsOENBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBREosRUFFSTtBQUFLLE1BQUUsRUFBQyxPQUFSO0FBQWdCLE9BQUcsRUFBRUosUUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZKLENBREo7QUFNSDs7R0EvRHVCRixLOztLQUFBQSxLO0FBaUV4QkEsS0FBSyxDQUFDMEIsU0FBTixHQUFrQjtBQUNkQyxHQUFDLEVBQUVDLGlEQUFTLENBQUNDLEtBREM7QUFFZEMsR0FBQyxFQUFFRixpREFBUyxDQUFDQyxLQUZDO0FBR2RKLFdBQVMsRUFBRUcsaURBQVMsQ0FBQ0c7QUFIUCxDQUFsQjtBQU1BL0IsS0FBSyxDQUFDZ0MsWUFBTixHQUFxQjtBQUNqQkwsR0FBQyxFQUFFLEVBRGM7QUFFakJHLEdBQUMsRUFBRSxFQUZjO0FBR2pCTCxXQUFTLEVBQUU7QUFITSxDQUFyQiIsImZpbGUiOiIuL2NvbXBvbmVudHMvY2hhcnQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBkMyBmcm9tICdkMyc7XG5pbXBvcnQgUmVhY3QsIHsgRnJhZ21lbnQsIHVzZUVmZmVjdCwgdXNlU3RhdGUsIGNyZWF0ZVJlZiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2hhcnQocHJvcHMpIHtcbiAgICBsZXQgY2hhcnRSZWYgPSBjcmVhdGVSZWYoKSxcbiAgICAgICAgYWNjZXNzVG9SZWYgPSBudWxsXG5cbiAgICBjb25zdCBbbG9hZGVkQ2hhcnQsIHVwZGF0ZUxvYWRTdGF0dXNdID0gdXNlU3RhdGUoZmFsc2UpLFxuICAgICAgICBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZShbXSksXG4gICAgICAgIGggPSA1MDAsXG4gICAgICAgIHcgPSA0MDBcblxuICAgIGNvbnN0IGRyYXdDaGFydCA9ICgpID0+IHtcbiAgICAgICAgaWYoIWxvYWRlZENoYXJ0KSB7XG4gICAgICAgICAgICBjb25zdCBhY2Nlc3NUb1JlZiA9IGQzLnNlbGVjdChjaGFydFJlZi5jdXJyZW50KVxuICAgICAgICAgICAgICAgIC5hcHBlbmQoJ3N2ZycpXG4gICAgICAgICAgICAgICAgLmF0dHIoJ3dpZHRoJywgdykgLy8gd1xuICAgICAgICAgICAgICAgIC5hdHRyKCdoZWlnaHQnLCBoKSAvLyBoXG4gICAgICAgICAgICAgICAgLnN0eWxlKCdiYWNrZ3JvdW5kLWNvbG9yJywgJyNmZmZmZmYnKVxuICAgICAgICAgICAgICAgIC5zdHlsZSgncGFkZGluZycsIDEwKVxuICAgICAgICAgICAgICAgIC5zdHlsZSgnbWFyZ2luLWxlZnQnLCA1MClcblxuICAgICAgICAgICAgICAgIHVwZGF0ZUxvYWRTdGF0dXModHJ1ZSlcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKGFjY2Vzc1RvUmVmICE9IG51bGwpIHtcbiAgICAgICAgICAgIGFjY2Vzc1RvUmVmLnNlbGVjdEFsbCgncmVjdCcpXG4gICAgICAgICAgICAgICAgLmRhdGEoWzMsIDYsIDEwLCA0XSlcbiAgICAgICAgICAgICAgICAuZW50ZXIoKVxuICAgICAgICAgICAgICAgIC5hcHBlbmQoJ3JlY3QnKVxuICAgICAgICAgICAgICAgIC5hdHRyKCd4JywgKGQsIGkpID0+IGkgKiA3MClcbiAgICAgICAgICAgICAgICAuYXR0cigneScsIChkLCBpKSA9PiBoIC0gMTAgKiBkKVxuICAgICAgICAgICAgICAgIC5hdHRyKCd3aWR0aCcsIDY1KVxuICAgICAgICAgICAgICAgIC5hdHRyKCdoZWlnaHQnLCAoZCwgaSkgPT4gZCAqIDEwKVxuICAgICAgICAgICAgICAgIC5hdHRyKCdmaWxsJywgJ3RvbWF0bycpXG4gICAgICAgICAgICB9XG4gICAgfVxuXG4gICAgXG5cbiAgICAvLyBjb25zdCBkcmF3Q2hhcnQgPSAoaGVpZ2h0LCB3aWR0aCkgPT4ge1xuICAgIC8vICAgICBkMy5zZWxlY3QoXCIjY2hhcnRcIilcbiAgICAvLyAgICAgICAgIC5hcHBlbmQoXCJzdmdcIilcbiAgICAvLyAgICAgICAgIC5hdHRyKFwid2lkdGhcIiwgd2lkdGgpXG4gICAgLy8gICAgICAgICAuYXR0cihcImhlaWdodFwiLCBoZWlnaHQpXG4gICAgLy8gICAgICAgICAuc3R5bGUoXCJib3JkZXJcIiwgXCIxcHggc29saWQgYmxhY2tcIilcbiAgICAvLyAgICAgICAgIC5hcHBlbmQoXCJ0ZXh0XCIpXG4gICAgLy8gICAgICAgICAuYXR0cihcImZpbGxcIiwgXCJncmVlblwiKVxuICAgIC8vICAgICAgICAgLmF0dHIoXCJ4XCIsIDUwKVxuICAgIC8vICAgICAgICAgLmF0dHIoXCJ5XCIsIDUwKVxuICAgIC8vICAgICAgICAgLnRleHQoXCJIZWxsbyBEM1wiKVxuICAgIC8vIH1cblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGRyYXdDaGFydCgpXG4gICAgICAgIFxuICAgICAgICBjb25zb2xlLmxvZygnY2hhcnRSZWYnLCBjaGFydFJlZi5jdXJyZW50KVxuICAgIH0sIFtwcm9wcy5jb29yZHNTdHIsIGxvYWRlZENoYXJ0XSk7XG5cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxGcmFnbWVudD5cbiAgICAgICAgICAgIDxoMj5HcmFwaHMgd2l0aCBSZWFjdDwvaDI+XG4gICAgICAgICAgICA8ZGl2IGlkPVwiY2hhcnRcIiByZWY9e2NoYXJ0UmVmfT48L2Rpdj5cbiAgICAgICAgPC9GcmFnbWVudD5cbiAgICApO1xufVxuXG5DaGFydC5wcm9wVHlwZXMgPSB7XG4gICAgeDogUHJvcFR5cGVzLmFycmF5LFxuICAgIHk6IFByb3BUeXBlcy5hcnJheSxcbiAgICBjb29yZHNTdHI6IFByb3BUeXBlcy5zdHJpbmdcbn1cbiAgXG5DaGFydC5kZWZhdWx0UHJvcHMgPSB7XG4gICAgeDogW10sXG4gICAgeTogW10sXG4gICAgY29vcmRzU3RyOiAnJ1xufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/chart.js\n");

/***/ })

})