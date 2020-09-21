webpackHotUpdate_N_E("pages/index",{

/***/ "./components/chart.js":
/*!*****************************!*\
  !*** ./components/chart.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Chart; });\n/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3 */ \"./node_modules/d3/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName = \"/Users/jasonbryant/Desktop/nrel/components/chart.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n// charts/BasicD3.js\n\n\n // import './App.css';\n// import { drawChart } from './charts/BasicD3';\n// export function drawChart(height, width){\n//     d3.select(\"#chart\")\n//         .append(\"svg\")\n//         .attr(\"width\", width)\n//         .attr(\"height\", height)\n//         .style(\"border\", \"1px solid black\")\n//         .append(\"text\")\n//         .attr(\"fill\", \"green\")\n//         .attr(\"x\", 50)\n//         .attr(\"y\", 50)\n//         .text(\"Hello D3\")\n// }\n\nfunction Chart(props) {\n  _s();\n\n  var chart = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createRef();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])([]),\n      data = _useState[0],\n      setData = _useState[1];\n\n  var drawChart = function drawChart(height, width) {\n    d3__WEBPACK_IMPORTED_MODULE_0__[\"select\"](\"#chart\").append(\"svg\").attr(\"width\", width).attr(\"height\", height).style(\"border\", \"1px solid black\").append(\"text\").attr(\"fill\", \"green\").attr(\"x\", 50).attr(\"y\", 50).text(\"Hello D3\");\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    drawChart();\n  }, [props.coordsStr]);\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_1__[\"Fragment\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 9\n    }\n  }, __jsx(\"h2\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 13\n    }\n  }, \"Graphs with React\"), __jsx(\"div\", {\n    id: \"chart\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 13\n    }\n  }));\n}\n\n_s(Chart, \"IEMTtLVFIuToo7X/raQbJAxzNQU=\");\n\n_c = Chart;\nChart.propTypes = {\n  x: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array,\n  y: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array,\n  coordsStr: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string\n};\nChart.defaultProps = {\n  x: [],\n  y: [],\n  coordsStr: ''\n};\n\nvar _c;\n\n$RefreshReg$(_c, \"Chart\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jaGFydC5qcz84OGE2Il0sIm5hbWVzIjpbIkNoYXJ0IiwicHJvcHMiLCJjaGFydCIsIlJlYWN0IiwiY3JlYXRlUmVmIiwidXNlU3RhdGUiLCJkYXRhIiwic2V0RGF0YSIsImRyYXdDaGFydCIsImhlaWdodCIsIndpZHRoIiwiZDMiLCJhcHBlbmQiLCJhdHRyIiwic3R5bGUiLCJ0ZXh0IiwidXNlRWZmZWN0IiwiY29vcmRzU3RyIiwicHJvcFR5cGVzIiwieCIsIlByb3BUeXBlcyIsImFycmF5IiwieSIsInN0cmluZyIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7Q0FHQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVlLFNBQVNBLEtBQVQsQ0FBZUMsS0FBZixFQUFzQjtBQUFBOztBQUNqQyxNQUFJQyxLQUFLLGdCQUFHQyw0Q0FBSyxDQUFDQyxTQUFOLEVBQVo7O0FBRGlDLGtCQUdUQyxzREFBUSxDQUFDLEVBQUQsQ0FIQztBQUFBLE1BRzFCQyxJQUgwQjtBQUFBLE1BR3BCQyxPQUhvQjs7QUFLakMsTUFBTUMsU0FBUyxHQUFHLFNBQVpBLFNBQVksQ0FBQ0MsTUFBRCxFQUFTQyxLQUFULEVBQW1CO0FBQ2pDQyw2Q0FBQSxDQUFVLFFBQVYsRUFDS0MsTUFETCxDQUNZLEtBRFosRUFFS0MsSUFGTCxDQUVVLE9BRlYsRUFFbUJILEtBRm5CLEVBR0tHLElBSEwsQ0FHVSxRQUhWLEVBR29CSixNQUhwQixFQUlLSyxLQUpMLENBSVcsUUFKWCxFQUlxQixpQkFKckIsRUFLS0YsTUFMTCxDQUtZLE1BTFosRUFNS0MsSUFOTCxDQU1VLE1BTlYsRUFNa0IsT0FObEIsRUFPS0EsSUFQTCxDQU9VLEdBUFYsRUFPZSxFQVBmLEVBUUtBLElBUkwsQ0FRVSxHQVJWLEVBUWUsRUFSZixFQVNLRSxJQVRMLENBU1UsVUFUVjtBQVVILEdBWEQ7O0FBYUFDLHlEQUFTLENBQUMsWUFBTTtBQUNaUixhQUFTO0FBQ1osR0FGUSxFQUVOLENBQUNQLEtBQUssQ0FBQ2dCLFNBQVAsQ0FGTSxDQUFUO0FBS0EsU0FDSSxNQUFDLDhDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQURKLEVBRUk7QUFBSyxNQUFFLEVBQUMsT0FBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkosQ0FESjtBQU9IOztHQTlCdUJqQixLOztLQUFBQSxLO0FBZ0N4QkEsS0FBSyxDQUFDa0IsU0FBTixHQUFrQjtBQUNkQyxHQUFDLEVBQUVDLGlEQUFTLENBQUNDLEtBREM7QUFFZEMsR0FBQyxFQUFFRixpREFBUyxDQUFDQyxLQUZDO0FBR2RKLFdBQVMsRUFBRUcsaURBQVMsQ0FBQ0c7QUFIUCxDQUFsQjtBQU1BdkIsS0FBSyxDQUFDd0IsWUFBTixHQUFxQjtBQUNqQkwsR0FBQyxFQUFFLEVBRGM7QUFFakJHLEdBQUMsRUFBRSxFQUZjO0FBR2pCTCxXQUFTLEVBQUU7QUFITSxDQUFyQiIsImZpbGUiOiIuL2NvbXBvbmVudHMvY2hhcnQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBjaGFydHMvQmFzaWNEMy5qc1xuaW1wb3J0ICogYXMgZDMgZnJvbSAnZDMnO1xuaW1wb3J0IFJlYWN0LCB7IEZyYWdtZW50LCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuXG4vLyBpbXBvcnQgJy4vQXBwLmNzcyc7XG4vLyBpbXBvcnQgeyBkcmF3Q2hhcnQgfSBmcm9tICcuL2NoYXJ0cy9CYXNpY0QzJztcblxuLy8gZXhwb3J0IGZ1bmN0aW9uIGRyYXdDaGFydChoZWlnaHQsIHdpZHRoKXtcbi8vICAgICBkMy5zZWxlY3QoXCIjY2hhcnRcIilcbi8vICAgICAgICAgLmFwcGVuZChcInN2Z1wiKVxuLy8gICAgICAgICAuYXR0cihcIndpZHRoXCIsIHdpZHRoKVxuLy8gICAgICAgICAuYXR0cihcImhlaWdodFwiLCBoZWlnaHQpXG4vLyAgICAgICAgIC5zdHlsZShcImJvcmRlclwiLCBcIjFweCBzb2xpZCBibGFja1wiKVxuLy8gICAgICAgICAuYXBwZW5kKFwidGV4dFwiKVxuLy8gICAgICAgICAuYXR0cihcImZpbGxcIiwgXCJncmVlblwiKVxuLy8gICAgICAgICAuYXR0cihcInhcIiwgNTApXG4vLyAgICAgICAgIC5hdHRyKFwieVwiLCA1MClcbi8vICAgICAgICAgLnRleHQoXCJIZWxsbyBEM1wiKVxuLy8gfVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDaGFydChwcm9wcykge1xuICAgIGxldCBjaGFydCA9IFJlYWN0LmNyZWF0ZVJlZigpXG5cbiAgICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZShbXSk7XG5cbiAgICBjb25zdCBkcmF3Q2hhcnQgPSAoaGVpZ2h0LCB3aWR0aCkgPT4ge1xuICAgICAgICBkMy5zZWxlY3QoXCIjY2hhcnRcIilcbiAgICAgICAgICAgIC5hcHBlbmQoXCJzdmdcIilcbiAgICAgICAgICAgIC5hdHRyKFwid2lkdGhcIiwgd2lkdGgpXG4gICAgICAgICAgICAuYXR0cihcImhlaWdodFwiLCBoZWlnaHQpXG4gICAgICAgICAgICAuc3R5bGUoXCJib3JkZXJcIiwgXCIxcHggc29saWQgYmxhY2tcIilcbiAgICAgICAgICAgIC5hcHBlbmQoXCJ0ZXh0XCIpXG4gICAgICAgICAgICAuYXR0cihcImZpbGxcIiwgXCJncmVlblwiKVxuICAgICAgICAgICAgLmF0dHIoXCJ4XCIsIDUwKVxuICAgICAgICAgICAgLmF0dHIoXCJ5XCIsIDUwKVxuICAgICAgICAgICAgLnRleHQoXCJIZWxsbyBEM1wiKVxuICAgIH1cblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGRyYXdDaGFydCgpXG4gICAgfSwgW3Byb3BzLmNvb3Jkc1N0cl0pO1xuXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8RnJhZ21lbnQ+XG4gICAgICAgICAgICA8aDI+R3JhcGhzIHdpdGggUmVhY3Q8L2gyPlxuICAgICAgICAgICAgPGRpdiBpZD1cImNoYXJ0XCI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9GcmFnbWVudD5cbiAgICApO1xufVxuXG5DaGFydC5wcm9wVHlwZXMgPSB7XG4gICAgeDogUHJvcFR5cGVzLmFycmF5LFxuICAgIHk6IFByb3BUeXBlcy5hcnJheSxcbiAgICBjb29yZHNTdHI6IFByb3BUeXBlcy5zdHJpbmdcbn1cbiAgXG5DaGFydC5kZWZhdWx0UHJvcHMgPSB7XG4gICAgeDogW10sXG4gICAgeTogW10sXG4gICAgY29vcmRzU3RyOiAnJ1xufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/chart.js\n");

/***/ })

})