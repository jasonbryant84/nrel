webpackHotUpdate_N_E("pages/index",{

/***/ "./components/chart.js":
/*!*****************************!*\
  !*** ./components/chart.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Chart; });\n/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3 */ \"./node_modules/d3/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName = \"/Users/jasonbryant/Desktop/nrel/components/chart.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\nvar accessToRef = null;\nfunction Chart(props) {\n  _s();\n\n  var chartRef = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__[\"createRef\"])();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      loadedChart = _useState[0],\n      updateLoadStatus = _useState[1],\n      h_factor = Math.max(props.y),\n      h = 500,\n      w = 400;\n\n  var drawChart = function drawChart() {\n    if (accessToRef != null) accessToRef.selectAll(\"*\").remove();\n\n    if (!loadedChart) {\n      accessToRef = d3__WEBPACK_IMPORTED_MODULE_0__[\"select\"](chartRef.current).append('svg').attr('width', w) // w\n      .attr('height', h) // h\n      .style('background-color', '#ffffff').style('padding', 10).style('margin-left', 50);\n      updateLoadStatus(true);\n    }\n\n    if (true) {\n      console.log('setting data', props.y);\n      accessToRef.selectAll('rect').data(props.y).enter().append('rect').attr('x', function (d, i) {\n        return i * 70;\n      }).attr('y', function (d, i) {\n        return h - 10 * d;\n      }).attr('width', 65).attr('height', function (d, i) {\n        return d * 10;\n      }).attr('fill', 'tomato');\n    }\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    setTimeout(function () {\n      drawChart();\n    }, 1000);\n  }, [props.coordsStr, loadedChart]);\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_1__[\"Fragment\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 9\n    }\n  }, __jsx(\"h2\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 13\n    }\n  }, \"Graphs with React\"), __jsx(\"div\", {\n    id: \"chart\",\n    ref: chartRef,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 13\n    }\n  }));\n}\n\n_s(Chart, \"RtqllLOUZMfKbUbbR9KMfR4lOQY=\");\n\n_c = Chart;\nChart.propTypes = {\n  x: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array,\n  y: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array,\n  coordsStr: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string\n};\nChart.defaultProps = {\n  x: [],\n  y: [],\n  coordsStr: ''\n};\n\nvar _c;\n\n$RefreshReg$(_c, \"Chart\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jaGFydC5qcz84OGE2Il0sIm5hbWVzIjpbImFjY2Vzc1RvUmVmIiwiQ2hhcnQiLCJwcm9wcyIsImNoYXJ0UmVmIiwiY3JlYXRlUmVmIiwidXNlU3RhdGUiLCJsb2FkZWRDaGFydCIsInVwZGF0ZUxvYWRTdGF0dXMiLCJoX2ZhY3RvciIsIk1hdGgiLCJtYXgiLCJ5IiwiaCIsInciLCJkcmF3Q2hhcnQiLCJzZWxlY3RBbGwiLCJyZW1vdmUiLCJkMyIsImN1cnJlbnQiLCJhcHBlbmQiLCJhdHRyIiwic3R5bGUiLCJjb25zb2xlIiwibG9nIiwiZGF0YSIsImVudGVyIiwiZCIsImkiLCJ1c2VFZmZlY3QiLCJzZXRUaW1lb3V0IiwiY29vcmRzU3RyIiwicHJvcFR5cGVzIiwieCIsIlByb3BUeXBlcyIsImFycmF5Iiwic3RyaW5nIiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBLElBQUlBLFdBQVcsR0FBRyxJQUFsQjtBQUVlLFNBQVNDLEtBQVQsQ0FBZUMsS0FBZixFQUFzQjtBQUFBOztBQUNqQyxNQUFJQyxRQUFRLGdCQUFHQyx1REFBUyxFQUF4Qjs7QUFEaUMsa0JBR09DLHNEQUFRLENBQUMsS0FBRCxDQUhmO0FBQUEsTUFHMUJDLFdBSDBCO0FBQUEsTUFHYkMsZ0JBSGE7QUFBQSxNQUk3QkMsUUFKNkIsR0FJbEJDLElBQUksQ0FBQ0MsR0FBTCxDQUFTUixLQUFLLENBQUNTLENBQWYsQ0FKa0I7QUFBQSxNQUs3QkMsQ0FMNkIsR0FLekIsR0FMeUI7QUFBQSxNQU03QkMsQ0FONkIsR0FNekIsR0FOeUI7O0FBUWpDLE1BQU1DLFNBQVMsR0FBRyxTQUFaQSxTQUFZLEdBQU07QUFDcEIsUUFBR2QsV0FBVyxJQUFJLElBQWxCLEVBQ0lBLFdBQVcsQ0FBQ2UsU0FBWixDQUFzQixHQUF0QixFQUEyQkMsTUFBM0I7O0FBRUosUUFBRyxDQUFDVixXQUFKLEVBQWlCO0FBQ2JOLGlCQUFXLEdBQUdpQix5Q0FBQSxDQUFVZCxRQUFRLENBQUNlLE9BQW5CLEVBQ1RDLE1BRFMsQ0FDRixLQURFLEVBRVRDLElBRlMsQ0FFSixPQUZJLEVBRUtQLENBRkwsRUFFUTtBQUZSLE9BR1RPLElBSFMsQ0FHSixRQUhJLEVBR01SLENBSE4sRUFHUztBQUhULE9BSVRTLEtBSlMsQ0FJSCxrQkFKRyxFQUlpQixTQUpqQixFQUtUQSxLQUxTLENBS0gsU0FMRyxFQUtRLEVBTFIsRUFNVEEsS0FOUyxDQU1ILGFBTkcsRUFNWSxFQU5aLENBQWQ7QUFRSWQsc0JBQWdCLENBQUMsSUFBRCxDQUFoQjtBQUNQOztBQUVELFFBQUcsSUFBSCxFQUFTO0FBQ0xlLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLGNBQVosRUFBNEJyQixLQUFLLENBQUNTLENBQWxDO0FBQ0FYLGlCQUFXLENBQUNlLFNBQVosQ0FBc0IsTUFBdEIsRUFDS1MsSUFETCxDQUNVdEIsS0FBSyxDQUFDUyxDQURoQixFQUVLYyxLQUZMLEdBR0tOLE1BSEwsQ0FHWSxNQUhaLEVBSUtDLElBSkwsQ0FJVSxHQUpWLEVBSWUsVUFBQ00sQ0FBRCxFQUFJQyxDQUFKO0FBQUEsZUFBVUEsQ0FBQyxHQUFHLEVBQWQ7QUFBQSxPQUpmLEVBS0tQLElBTEwsQ0FLVSxHQUxWLEVBS2UsVUFBQ00sQ0FBRCxFQUFJQyxDQUFKO0FBQUEsZUFBVWYsQ0FBQyxHQUFHLEtBQUtjLENBQW5CO0FBQUEsT0FMZixFQU1LTixJQU5MLENBTVUsT0FOVixFQU1tQixFQU5uQixFQU9LQSxJQVBMLENBT1UsUUFQVixFQU9vQixVQUFDTSxDQUFELEVBQUlDLENBQUo7QUFBQSxlQUFVRCxDQUFDLEdBQUcsRUFBZDtBQUFBLE9BUHBCLEVBUUtOLElBUkwsQ0FRVSxNQVJWLEVBUWtCLFFBUmxCO0FBU0M7QUFDUixHQTVCRDs7QUE4QkFRLHlEQUFTLENBQUMsWUFBTTtBQUNaQyxjQUFVLENBQUMsWUFBSztBQUNaZixlQUFTO0FBQ1osS0FGUyxFQUVQLElBRk8sQ0FBVjtBQUdILEdBSlEsRUFJTixDQUFDWixLQUFLLENBQUM0QixTQUFQLEVBQWtCeEIsV0FBbEIsQ0FKTSxDQUFUO0FBT0EsU0FDSSxNQUFDLDhDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQURKLEVBRUk7QUFBSyxNQUFFLEVBQUMsT0FBUjtBQUFnQixPQUFHLEVBQUVILFFBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGSixDQURKO0FBTUg7O0dBbkR1QkYsSzs7S0FBQUEsSztBQXFEeEJBLEtBQUssQ0FBQzhCLFNBQU4sR0FBa0I7QUFDZEMsR0FBQyxFQUFFQyxpREFBUyxDQUFDQyxLQURDO0FBRWR2QixHQUFDLEVBQUVzQixpREFBUyxDQUFDQyxLQUZDO0FBR2RKLFdBQVMsRUFBRUcsaURBQVMsQ0FBQ0U7QUFIUCxDQUFsQjtBQU1BbEMsS0FBSyxDQUFDbUMsWUFBTixHQUFxQjtBQUNqQkosR0FBQyxFQUFFLEVBRGM7QUFFakJyQixHQUFDLEVBQUUsRUFGYztBQUdqQm1CLFdBQVMsRUFBRTtBQUhNLENBQXJCIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9jaGFydC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGQzIGZyb20gJ2QzJztcbmltcG9ydCBSZWFjdCwgeyBGcmFnbWVudCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgY3JlYXRlUmVmIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuXG5sZXQgYWNjZXNzVG9SZWYgPSBudWxsXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENoYXJ0KHByb3BzKSB7XG4gICAgbGV0IGNoYXJ0UmVmID0gY3JlYXRlUmVmKClcblxuICAgIGNvbnN0IFtsb2FkZWRDaGFydCwgdXBkYXRlTG9hZFN0YXR1c10gPSB1c2VTdGF0ZShmYWxzZSksXG4gICAgICAgIGhfZmFjdG9yID0gTWF0aC5tYXgocHJvcHMueSksXG4gICAgICAgIGggPSA1MDAsXG4gICAgICAgIHcgPSA0MDBcblxuICAgIGNvbnN0IGRyYXdDaGFydCA9ICgpID0+IHtcbiAgICAgICAgaWYoYWNjZXNzVG9SZWYgIT0gbnVsbClcbiAgICAgICAgICAgIGFjY2Vzc1RvUmVmLnNlbGVjdEFsbChcIipcIikucmVtb3ZlKClcblxuICAgICAgICBpZighbG9hZGVkQ2hhcnQpIHtcbiAgICAgICAgICAgIGFjY2Vzc1RvUmVmID0gZDMuc2VsZWN0KGNoYXJ0UmVmLmN1cnJlbnQpXG4gICAgICAgICAgICAgICAgLmFwcGVuZCgnc3ZnJylcbiAgICAgICAgICAgICAgICAuYXR0cignd2lkdGgnLCB3KSAvLyB3XG4gICAgICAgICAgICAgICAgLmF0dHIoJ2hlaWdodCcsIGgpIC8vIGhcbiAgICAgICAgICAgICAgICAuc3R5bGUoJ2JhY2tncm91bmQtY29sb3InLCAnI2ZmZmZmZicpXG4gICAgICAgICAgICAgICAgLnN0eWxlKCdwYWRkaW5nJywgMTApXG4gICAgICAgICAgICAgICAgLnN0eWxlKCdtYXJnaW4tbGVmdCcsIDUwKVxuXG4gICAgICAgICAgICAgICAgdXBkYXRlTG9hZFN0YXR1cyh0cnVlKVxuICAgICAgICB9XG5cbiAgICAgICAgaWYodHJ1ZSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ3NldHRpbmcgZGF0YScsIHByb3BzLnkpXG4gICAgICAgICAgICBhY2Nlc3NUb1JlZi5zZWxlY3RBbGwoJ3JlY3QnKVxuICAgICAgICAgICAgICAgIC5kYXRhKHByb3BzLnkpXG4gICAgICAgICAgICAgICAgLmVudGVyKClcbiAgICAgICAgICAgICAgICAuYXBwZW5kKCdyZWN0JylcbiAgICAgICAgICAgICAgICAuYXR0cigneCcsIChkLCBpKSA9PiBpICogNzApXG4gICAgICAgICAgICAgICAgLmF0dHIoJ3knLCAoZCwgaSkgPT4gaCAtIDEwICogZClcbiAgICAgICAgICAgICAgICAuYXR0cignd2lkdGgnLCA2NSlcbiAgICAgICAgICAgICAgICAuYXR0cignaGVpZ2h0JywgKGQsIGkpID0+IGQgKiAxMClcbiAgICAgICAgICAgICAgICAuYXR0cignZmlsbCcsICd0b21hdG8nKVxuICAgICAgICAgICAgfVxuICAgIH1cblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIHNldFRpbWVvdXQoKCk9PiB7XG4gICAgICAgICAgICBkcmF3Q2hhcnQoKVxuICAgICAgICB9LCAxMDAwKVxuICAgIH0sIFtwcm9wcy5jb29yZHNTdHIsIGxvYWRlZENoYXJ0XSk7XG5cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxGcmFnbWVudD5cbiAgICAgICAgICAgIDxoMj5HcmFwaHMgd2l0aCBSZWFjdDwvaDI+XG4gICAgICAgICAgICA8ZGl2IGlkPVwiY2hhcnRcIiByZWY9e2NoYXJ0UmVmfT48L2Rpdj5cbiAgICAgICAgPC9GcmFnbWVudD5cbiAgICApO1xufVxuXG5DaGFydC5wcm9wVHlwZXMgPSB7XG4gICAgeDogUHJvcFR5cGVzLmFycmF5LFxuICAgIHk6IFByb3BUeXBlcy5hcnJheSxcbiAgICBjb29yZHNTdHI6IFByb3BUeXBlcy5zdHJpbmdcbn1cbiAgXG5DaGFydC5kZWZhdWx0UHJvcHMgPSB7XG4gICAgeDogW10sXG4gICAgeTogW10sXG4gICAgY29vcmRzU3RyOiAnJ1xufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/chart.js\n");

/***/ })

})