webpackHotUpdate_N_E("pages/index",{

/***/ "./components/chart.js":
/*!*****************************!*\
  !*** ./components/chart.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Chart; });\n/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3 */ \"./node_modules/d3/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName = \"/Users/jasonbryant/Desktop/nrel/components/chart.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\nvar accessToRef = null;\nfunction Chart(props) {\n  _s();\n\n  var chartRef = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__[\"createRef\"])();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      loadedChart = _useState[0],\n      updateLoadStatus = _useState[1],\n      h_max = Math.max(props.y),\n      data_length = props.y.x_length,\n      h = 500,\n      w = 400;\n\n  var drawChart = function drawChart() {\n    if (accessToRef != null) accessToRef.selectAll(\"*\").remove();\n\n    if (!loadedChart) {\n      accessToRef = d3__WEBPACK_IMPORTED_MODULE_0__[\"select\"](chartRef.current).append('svg').attr('width', w) // w\n      .attr('height', h) // h\n      .style('background-color', '#ffffff').style('padding', 10).style('margin-left', 50);\n      updateLoadStatus(true);\n    }\n\n    if (true) {\n      console.log('setting data', props.y);\n      accessToRef.selectAll('rect').data(props.y).enter().append('rect').attr('x', function (d, i) {\n        return i * 70;\n      }).attr('y', function (d, i) {\n        return h - 10 * d;\n      }).attr('width', 400 / data_length - 20 / data_length).attr('height', function (d, i) {\n        return d * 10;\n      }).attr('fill', 'tomato');\n    }\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    setTimeout(function () {\n      drawChart();\n    }, 1000);\n  }, [props.coordsStr, loadedChart]);\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_1__[\"Fragment\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 9\n    }\n  }, __jsx(\"h2\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 13\n    }\n  }, \"Graphs with React\"), __jsx(\"div\", {\n    id: \"chart\",\n    ref: chartRef,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 13\n    }\n  }));\n}\n\n_s(Chart, \"RtqllLOUZMfKbUbbR9KMfR4lOQY=\");\n\n_c = Chart;\nChart.propTypes = {\n  x: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array,\n  y: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array,\n  coordsStr: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string\n};\nChart.defaultProps = {\n  x: [],\n  y: [],\n  coordsStr: ''\n};\n\nvar _c;\n\n$RefreshReg$(_c, \"Chart\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jaGFydC5qcz84OGE2Il0sIm5hbWVzIjpbImFjY2Vzc1RvUmVmIiwiQ2hhcnQiLCJwcm9wcyIsImNoYXJ0UmVmIiwiY3JlYXRlUmVmIiwidXNlU3RhdGUiLCJsb2FkZWRDaGFydCIsInVwZGF0ZUxvYWRTdGF0dXMiLCJoX21heCIsIk1hdGgiLCJtYXgiLCJ5IiwiZGF0YV9sZW5ndGgiLCJ4X2xlbmd0aCIsImgiLCJ3IiwiZHJhd0NoYXJ0Iiwic2VsZWN0QWxsIiwicmVtb3ZlIiwiZDMiLCJjdXJyZW50IiwiYXBwZW5kIiwiYXR0ciIsInN0eWxlIiwiY29uc29sZSIsImxvZyIsImRhdGEiLCJlbnRlciIsImQiLCJpIiwidXNlRWZmZWN0Iiwic2V0VGltZW91dCIsImNvb3Jkc1N0ciIsInByb3BUeXBlcyIsIngiLCJQcm9wVHlwZXMiLCJhcnJheSIsInN0cmluZyIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQSxJQUFJQSxXQUFXLEdBQUcsSUFBbEI7QUFFZSxTQUFTQyxLQUFULENBQWVDLEtBQWYsRUFBc0I7QUFBQTs7QUFDakMsTUFBSUMsUUFBUSxnQkFBR0MsdURBQVMsRUFBeEI7O0FBRGlDLGtCQUdPQyxzREFBUSxDQUFDLEtBQUQsQ0FIZjtBQUFBLE1BRzFCQyxXQUgwQjtBQUFBLE1BR2JDLGdCQUhhO0FBQUEsTUFJN0JDLEtBSjZCLEdBSXJCQyxJQUFJLENBQUNDLEdBQUwsQ0FBU1IsS0FBSyxDQUFDUyxDQUFmLENBSnFCO0FBQUEsTUFLN0JDLFdBTDZCLEdBS2ZWLEtBQUssQ0FBQ1MsQ0FBTixDQUFRRSxRQUxPO0FBQUEsTUFNN0JDLENBTjZCLEdBTXpCLEdBTnlCO0FBQUEsTUFPN0JDLENBUDZCLEdBT3pCLEdBUHlCOztBQVNqQyxNQUFNQyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxHQUFNO0FBQ3BCLFFBQUdoQixXQUFXLElBQUksSUFBbEIsRUFDSUEsV0FBVyxDQUFDaUIsU0FBWixDQUFzQixHQUF0QixFQUEyQkMsTUFBM0I7O0FBRUosUUFBRyxDQUFDWixXQUFKLEVBQWlCO0FBQ2JOLGlCQUFXLEdBQUdtQix5Q0FBQSxDQUFVaEIsUUFBUSxDQUFDaUIsT0FBbkIsRUFDVEMsTUFEUyxDQUNGLEtBREUsRUFFVEMsSUFGUyxDQUVKLE9BRkksRUFFS1AsQ0FGTCxFQUVRO0FBRlIsT0FHVE8sSUFIUyxDQUdKLFFBSEksRUFHTVIsQ0FITixFQUdTO0FBSFQsT0FJVFMsS0FKUyxDQUlILGtCQUpHLEVBSWlCLFNBSmpCLEVBS1RBLEtBTFMsQ0FLSCxTQUxHLEVBS1EsRUFMUixFQU1UQSxLQU5TLENBTUgsYUFORyxFQU1ZLEVBTlosQ0FBZDtBQVFJaEIsc0JBQWdCLENBQUMsSUFBRCxDQUFoQjtBQUNQOztBQUVELFFBQUcsSUFBSCxFQUFTO0FBQ0xpQixhQUFPLENBQUNDLEdBQVIsQ0FBWSxjQUFaLEVBQTRCdkIsS0FBSyxDQUFDUyxDQUFsQztBQUNBWCxpQkFBVyxDQUFDaUIsU0FBWixDQUFzQixNQUF0QixFQUNLUyxJQURMLENBQ1V4QixLQUFLLENBQUNTLENBRGhCLEVBRUtnQixLQUZMLEdBR0tOLE1BSEwsQ0FHWSxNQUhaLEVBSUtDLElBSkwsQ0FJVSxHQUpWLEVBSWUsVUFBQ00sQ0FBRCxFQUFJQyxDQUFKO0FBQUEsZUFBVUEsQ0FBQyxHQUFHLEVBQWQ7QUFBQSxPQUpmLEVBS0tQLElBTEwsQ0FLVSxHQUxWLEVBS2UsVUFBQ00sQ0FBRCxFQUFJQyxDQUFKO0FBQUEsZUFBVWYsQ0FBQyxHQUFHLEtBQUtjLENBQW5CO0FBQUEsT0FMZixFQU1LTixJQU5MLENBTVUsT0FOVixFQU1vQixNQUFJVixXQUFMLEdBQXFCLEtBQUdBLFdBTjNDLEVBT0tVLElBUEwsQ0FPVSxRQVBWLEVBT29CLFVBQUNNLENBQUQsRUFBSUMsQ0FBSjtBQUFBLGVBQVVELENBQUMsR0FBRyxFQUFkO0FBQUEsT0FQcEIsRUFRS04sSUFSTCxDQVFVLE1BUlYsRUFRa0IsUUFSbEI7QUFTQztBQUNSLEdBNUJEOztBQThCQVEseURBQVMsQ0FBQyxZQUFNO0FBQ1pDLGNBQVUsQ0FBQyxZQUFLO0FBQ1pmLGVBQVM7QUFDWixLQUZTLEVBRVAsSUFGTyxDQUFWO0FBR0gsR0FKUSxFQUlOLENBQUNkLEtBQUssQ0FBQzhCLFNBQVAsRUFBa0IxQixXQUFsQixDQUpNLENBQVQ7QUFPQSxTQUNJLE1BQUMsOENBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBREosRUFFSTtBQUFLLE1BQUUsRUFBQyxPQUFSO0FBQWdCLE9BQUcsRUFBRUgsUUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZKLENBREo7QUFNSDs7R0FwRHVCRixLOztLQUFBQSxLO0FBc0R4QkEsS0FBSyxDQUFDZ0MsU0FBTixHQUFrQjtBQUNkQyxHQUFDLEVBQUVDLGlEQUFTLENBQUNDLEtBREM7QUFFZHpCLEdBQUMsRUFBRXdCLGlEQUFTLENBQUNDLEtBRkM7QUFHZEosV0FBUyxFQUFFRyxpREFBUyxDQUFDRTtBQUhQLENBQWxCO0FBTUFwQyxLQUFLLENBQUNxQyxZQUFOLEdBQXFCO0FBQ2pCSixHQUFDLEVBQUUsRUFEYztBQUVqQnZCLEdBQUMsRUFBRSxFQUZjO0FBR2pCcUIsV0FBUyxFQUFFO0FBSE0sQ0FBckIiLCJmaWxlIjoiLi9jb21wb25lbnRzL2NoYXJ0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgZDMgZnJvbSAnZDMnO1xuaW1wb3J0IFJlYWN0LCB7IEZyYWdtZW50LCB1c2VFZmZlY3QsIHVzZVN0YXRlLCBjcmVhdGVSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5cbmxldCBhY2Nlc3NUb1JlZiA9IG51bGxcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2hhcnQocHJvcHMpIHtcbiAgICBsZXQgY2hhcnRSZWYgPSBjcmVhdGVSZWYoKVxuXG4gICAgY29uc3QgW2xvYWRlZENoYXJ0LCB1cGRhdGVMb2FkU3RhdHVzXSA9IHVzZVN0YXRlKGZhbHNlKSxcbiAgICAgICAgaF9tYXggPSBNYXRoLm1heChwcm9wcy55KSxcbiAgICAgICAgZGF0YV9sZW5ndGggPSBwcm9wcy55LnhfbGVuZ3RoLFxuICAgICAgICBoID0gNTAwLFxuICAgICAgICB3ID0gNDAwXG5cbiAgICBjb25zdCBkcmF3Q2hhcnQgPSAoKSA9PiB7XG4gICAgICAgIGlmKGFjY2Vzc1RvUmVmICE9IG51bGwpXG4gICAgICAgICAgICBhY2Nlc3NUb1JlZi5zZWxlY3RBbGwoXCIqXCIpLnJlbW92ZSgpXG5cbiAgICAgICAgaWYoIWxvYWRlZENoYXJ0KSB7XG4gICAgICAgICAgICBhY2Nlc3NUb1JlZiA9IGQzLnNlbGVjdChjaGFydFJlZi5jdXJyZW50KVxuICAgICAgICAgICAgICAgIC5hcHBlbmQoJ3N2ZycpXG4gICAgICAgICAgICAgICAgLmF0dHIoJ3dpZHRoJywgdykgLy8gd1xuICAgICAgICAgICAgICAgIC5hdHRyKCdoZWlnaHQnLCBoKSAvLyBoXG4gICAgICAgICAgICAgICAgLnN0eWxlKCdiYWNrZ3JvdW5kLWNvbG9yJywgJyNmZmZmZmYnKVxuICAgICAgICAgICAgICAgIC5zdHlsZSgncGFkZGluZycsIDEwKVxuICAgICAgICAgICAgICAgIC5zdHlsZSgnbWFyZ2luLWxlZnQnLCA1MClcblxuICAgICAgICAgICAgICAgIHVwZGF0ZUxvYWRTdGF0dXModHJ1ZSlcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKHRydWUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdzZXR0aW5nIGRhdGEnLCBwcm9wcy55KVxuICAgICAgICAgICAgYWNjZXNzVG9SZWYuc2VsZWN0QWxsKCdyZWN0JylcbiAgICAgICAgICAgICAgICAuZGF0YShwcm9wcy55KVxuICAgICAgICAgICAgICAgIC5lbnRlcigpXG4gICAgICAgICAgICAgICAgLmFwcGVuZCgncmVjdCcpXG4gICAgICAgICAgICAgICAgLmF0dHIoJ3gnLCAoZCwgaSkgPT4gaSAqIDcwKVxuICAgICAgICAgICAgICAgIC5hdHRyKCd5JywgKGQsIGkpID0+IGggLSAxMCAqIGQpXG4gICAgICAgICAgICAgICAgLmF0dHIoJ3dpZHRoJywgKDQwMC9kYXRhX2xlbmd0aCkgLSAoMjAvZGF0YV9sZW5ndGgpKVxuICAgICAgICAgICAgICAgIC5hdHRyKCdoZWlnaHQnLCAoZCwgaSkgPT4gZCAqIDEwKVxuICAgICAgICAgICAgICAgIC5hdHRyKCdmaWxsJywgJ3RvbWF0bycpXG4gICAgICAgICAgICB9XG4gICAgfVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgc2V0VGltZW91dCgoKT0+IHtcbiAgICAgICAgICAgIGRyYXdDaGFydCgpXG4gICAgICAgIH0sIDEwMDApXG4gICAgfSwgW3Byb3BzLmNvb3Jkc1N0ciwgbG9hZGVkQ2hhcnRdKTtcblxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPEZyYWdtZW50PlxuICAgICAgICAgICAgPGgyPkdyYXBocyB3aXRoIFJlYWN0PC9oMj5cbiAgICAgICAgICAgIDxkaXYgaWQ9XCJjaGFydFwiIHJlZj17Y2hhcnRSZWZ9PjwvZGl2PlxuICAgICAgICA8L0ZyYWdtZW50PlxuICAgICk7XG59XG5cbkNoYXJ0LnByb3BUeXBlcyA9IHtcbiAgICB4OiBQcm9wVHlwZXMuYXJyYXksXG4gICAgeTogUHJvcFR5cGVzLmFycmF5LFxuICAgIGNvb3Jkc1N0cjogUHJvcFR5cGVzLnN0cmluZ1xufVxuICBcbkNoYXJ0LmRlZmF1bHRQcm9wcyA9IHtcbiAgICB4OiBbXSxcbiAgICB5OiBbXSxcbiAgICBjb29yZHNTdHI6ICcnXG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/chart.js\n");

/***/ })

})