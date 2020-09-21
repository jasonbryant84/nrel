webpackHotUpdate_N_E("pages/index",{

/***/ "./components/chart.js":
/*!*****************************!*\
  !*** ./components/chart.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Chart; });\n/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3 */ \"./node_modules/d3/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName = \"/Users/jasonbryant/Desktop/nrel/components/chart.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\nfunction Chart(props) {\n  _s();\n\n  var chartRef = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createRef();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      loadedChart = _useState[0],\n      updateLoadStatus = _useState[1],\n      _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])([]),\n      data = _useState2[0],\n      setData = _useState2[1],\n      h = 500,\n      w = 400;\n\n  var drawChart = function drawChart() {\n    if (!loadedChart) {\n      var _accessToRef = d3__WEBPACK_IMPORTED_MODULE_0__[\"select\"](chartRef.current).append('svg').attr('width', w) // w\n      .attr('height', h) // h\n      .style('background-color', '#ffffff').style('padding', 10).style('margin-left', 50);\n\n      updateLoadStatus(true);\n    }\n\n    accessToRef.selectAll('rect').data([3, 6, 10, 4]).enter().append('rect').attr('x', function (d, i) {\n      return i * 70;\n    }).attr('y', function (d, i) {\n      return h - 10 * d;\n    }).attr('width', 65).attr('height', function (d, i) {\n      return d * 10;\n    }).attr('fill', 'tomato');\n  }; // const drawChart = (height, width) => {\n  //     d3.select(\"#chart\")\n  //         .append(\"svg\")\n  //         .attr(\"width\", width)\n  //         .attr(\"height\", height)\n  //         .style(\"border\", \"1px solid black\")\n  //         .append(\"text\")\n  //         .attr(\"fill\", \"green\")\n  //         .attr(\"x\", 50)\n  //         .attr(\"y\", 50)\n  //         .text(\"Hello D3\")\n  // }\n\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    drawChart();\n    console.log('chartRef', chartRef.current);\n  }, [props.coordsStr, loadedChart]);\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_1__[\"Fragment\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 9\n    }\n  }, __jsx(\"h2\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 13\n    }\n  }, \"Graphs with React\"), __jsx(\"div\", {\n    id: \"chart\",\n    ref: chartRef,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 13\n    }\n  }));\n}\n\n_s(Chart, \"gVIT8qWMfJ2djToJalQPiF4tMNw=\");\n\n_c = Chart;\nChart.propTypes = {\n  x: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array,\n  y: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array,\n  coordsStr: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string\n};\nChart.defaultProps = {\n  x: [],\n  y: [],\n  coordsStr: ''\n};\n\nvar _c;\n\n$RefreshReg$(_c, \"Chart\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jaGFydC5qcz84OGE2Il0sIm5hbWVzIjpbIkNoYXJ0IiwicHJvcHMiLCJjaGFydFJlZiIsIlJlYWN0IiwiY3JlYXRlUmVmIiwidXNlU3RhdGUiLCJsb2FkZWRDaGFydCIsInVwZGF0ZUxvYWRTdGF0dXMiLCJkYXRhIiwic2V0RGF0YSIsImgiLCJ3IiwiZHJhd0NoYXJ0IiwiYWNjZXNzVG9SZWYiLCJkMyIsImN1cnJlbnQiLCJhcHBlbmQiLCJhdHRyIiwic3R5bGUiLCJzZWxlY3RBbGwiLCJlbnRlciIsImQiLCJpIiwidXNlRWZmZWN0IiwiY29uc29sZSIsImxvZyIsImNvb3Jkc1N0ciIsInByb3BUeXBlcyIsIngiLCJQcm9wVHlwZXMiLCJhcnJheSIsInkiLCJzdHJpbmciLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRWUsU0FBU0EsS0FBVCxDQUFlQyxLQUFmLEVBQXNCO0FBQUE7O0FBQ2pDLE1BQUlDLFFBQVEsZ0JBQUdDLDRDQUFLLENBQUNDLFNBQU4sRUFBZjs7QUFEaUMsa0JBR09DLHNEQUFRLENBQUMsS0FBRCxDQUhmO0FBQUEsTUFHMUJDLFdBSDBCO0FBQUEsTUFHYkMsZ0JBSGE7QUFBQSxtQkFJWEYsc0RBQVEsQ0FBQyxFQUFELENBSkc7QUFBQSxNQUk1QkcsSUFKNEI7QUFBQSxNQUl0QkMsT0FKc0I7QUFBQSxNQUs3QkMsQ0FMNkIsR0FLekIsR0FMeUI7QUFBQSxNQU03QkMsQ0FONkIsR0FNekIsR0FOeUI7O0FBUWpDLE1BQU1DLFNBQVMsR0FBRyxTQUFaQSxTQUFZLEdBQU07QUFDcEIsUUFBRyxDQUFDTixXQUFKLEVBQWlCO0FBQ2IsVUFBTU8sWUFBVyxHQUFHQyx5Q0FBQSxDQUFVWixRQUFRLENBQUNhLE9BQW5CLEVBQ2ZDLE1BRGUsQ0FDUixLQURRLEVBRWZDLElBRmUsQ0FFVixPQUZVLEVBRUROLENBRkMsRUFFRTtBQUZGLE9BR2ZNLElBSGUsQ0FHVixRQUhVLEVBR0FQLENBSEEsRUFHRztBQUhILE9BSWZRLEtBSmUsQ0FJVCxrQkFKUyxFQUlXLFNBSlgsRUFLZkEsS0FMZSxDQUtULFNBTFMsRUFLRSxFQUxGLEVBTWZBLEtBTmUsQ0FNVCxhQU5TLEVBTU0sRUFOTixDQUFwQjs7QUFRSVgsc0JBQWdCLENBQUMsSUFBRCxDQUFoQjtBQUNQOztBQUVETSxlQUFXLENBQUNNLFNBQVosQ0FBc0IsTUFBdEIsRUFDS1gsSUFETCxDQUNVLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxFQUFQLEVBQVcsQ0FBWCxDQURWLEVBRUtZLEtBRkwsR0FHS0osTUFITCxDQUdZLE1BSFosRUFJS0MsSUFKTCxDQUlVLEdBSlYsRUFJZSxVQUFDSSxDQUFELEVBQUlDLENBQUo7QUFBQSxhQUFVQSxDQUFDLEdBQUcsRUFBZDtBQUFBLEtBSmYsRUFLS0wsSUFMTCxDQUtVLEdBTFYsRUFLZSxVQUFDSSxDQUFELEVBQUlDLENBQUo7QUFBQSxhQUFVWixDQUFDLEdBQUcsS0FBS1csQ0FBbkI7QUFBQSxLQUxmLEVBTUtKLElBTkwsQ0FNVSxPQU5WLEVBTW1CLEVBTm5CLEVBT0tBLElBUEwsQ0FPVSxRQVBWLEVBT29CLFVBQUNJLENBQUQsRUFBSUMsQ0FBSjtBQUFBLGFBQVVELENBQUMsR0FBRyxFQUFkO0FBQUEsS0FQcEIsRUFRS0osSUFSTCxDQVFVLE1BUlYsRUFRa0IsUUFSbEI7QUFTSCxHQXRCRCxDQVJpQyxDQWtDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQU0seURBQVMsQ0FBQyxZQUFNO0FBQ1pYLGFBQVM7QUFFVFksV0FBTyxDQUFDQyxHQUFSLENBQVksVUFBWixFQUF3QnZCLFFBQVEsQ0FBQ2EsT0FBakM7QUFDSCxHQUpRLEVBSU4sQ0FBQ2QsS0FBSyxDQUFDeUIsU0FBUCxFQUFrQnBCLFdBQWxCLENBSk0sQ0FBVDtBQU9BLFNBQ0ksTUFBQyw4Q0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFESixFQUVJO0FBQUssTUFBRSxFQUFDLE9BQVI7QUFBZ0IsT0FBRyxFQUFFSixRQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkosQ0FESjtBQU1IOztHQTVEdUJGLEs7O0tBQUFBLEs7QUE4RHhCQSxLQUFLLENBQUMyQixTQUFOLEdBQWtCO0FBQ2RDLEdBQUMsRUFBRUMsaURBQVMsQ0FBQ0MsS0FEQztBQUVkQyxHQUFDLEVBQUVGLGlEQUFTLENBQUNDLEtBRkM7QUFHZEosV0FBUyxFQUFFRyxpREFBUyxDQUFDRztBQUhQLENBQWxCO0FBTUFoQyxLQUFLLENBQUNpQyxZQUFOLEdBQXFCO0FBQ2pCTCxHQUFDLEVBQUUsRUFEYztBQUVqQkcsR0FBQyxFQUFFLEVBRmM7QUFHakJMLFdBQVMsRUFBRTtBQUhNLENBQXJCIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9jaGFydC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGQzIGZyb20gJ2QzJztcbmltcG9ydCBSZWFjdCwgeyBGcmFnbWVudCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2hhcnQocHJvcHMpIHtcbiAgICBsZXQgY2hhcnRSZWYgPSBSZWFjdC5jcmVhdGVSZWYoKVxuXG4gICAgY29uc3QgW2xvYWRlZENoYXJ0LCB1cGRhdGVMb2FkU3RhdHVzXSA9IHVzZVN0YXRlKGZhbHNlKSxcbiAgICAgICAgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUoW10pLFxuICAgICAgICBoID0gNTAwLFxuICAgICAgICB3ID0gNDAwXG5cbiAgICBjb25zdCBkcmF3Q2hhcnQgPSAoKSA9PiB7XG4gICAgICAgIGlmKCFsb2FkZWRDaGFydCkge1xuICAgICAgICAgICAgY29uc3QgYWNjZXNzVG9SZWYgPSBkMy5zZWxlY3QoY2hhcnRSZWYuY3VycmVudClcbiAgICAgICAgICAgICAgICAuYXBwZW5kKCdzdmcnKVxuICAgICAgICAgICAgICAgIC5hdHRyKCd3aWR0aCcsIHcpIC8vIHdcbiAgICAgICAgICAgICAgICAuYXR0cignaGVpZ2h0JywgaCkgLy8gaFxuICAgICAgICAgICAgICAgIC5zdHlsZSgnYmFja2dyb3VuZC1jb2xvcicsICcjZmZmZmZmJylcbiAgICAgICAgICAgICAgICAuc3R5bGUoJ3BhZGRpbmcnLCAxMClcbiAgICAgICAgICAgICAgICAuc3R5bGUoJ21hcmdpbi1sZWZ0JywgNTApXG5cbiAgICAgICAgICAgICAgICB1cGRhdGVMb2FkU3RhdHVzKHRydWUpXG4gICAgICAgIH1cblxuICAgICAgICBhY2Nlc3NUb1JlZi5zZWxlY3RBbGwoJ3JlY3QnKVxuICAgICAgICAgICAgLmRhdGEoWzMsIDYsIDEwLCA0XSlcbiAgICAgICAgICAgIC5lbnRlcigpXG4gICAgICAgICAgICAuYXBwZW5kKCdyZWN0JylcbiAgICAgICAgICAgIC5hdHRyKCd4JywgKGQsIGkpID0+IGkgKiA3MClcbiAgICAgICAgICAgIC5hdHRyKCd5JywgKGQsIGkpID0+IGggLSAxMCAqIGQpXG4gICAgICAgICAgICAuYXR0cignd2lkdGgnLCA2NSlcbiAgICAgICAgICAgIC5hdHRyKCdoZWlnaHQnLCAoZCwgaSkgPT4gZCAqIDEwKVxuICAgICAgICAgICAgLmF0dHIoJ2ZpbGwnLCAndG9tYXRvJylcbiAgICB9XG5cbiAgICBcblxuICAgIC8vIGNvbnN0IGRyYXdDaGFydCA9IChoZWlnaHQsIHdpZHRoKSA9PiB7XG4gICAgLy8gICAgIGQzLnNlbGVjdChcIiNjaGFydFwiKVxuICAgIC8vICAgICAgICAgLmFwcGVuZChcInN2Z1wiKVxuICAgIC8vICAgICAgICAgLmF0dHIoXCJ3aWR0aFwiLCB3aWR0aClcbiAgICAvLyAgICAgICAgIC5hdHRyKFwiaGVpZ2h0XCIsIGhlaWdodClcbiAgICAvLyAgICAgICAgIC5zdHlsZShcImJvcmRlclwiLCBcIjFweCBzb2xpZCBibGFja1wiKVxuICAgIC8vICAgICAgICAgLmFwcGVuZChcInRleHRcIilcbiAgICAvLyAgICAgICAgIC5hdHRyKFwiZmlsbFwiLCBcImdyZWVuXCIpXG4gICAgLy8gICAgICAgICAuYXR0cihcInhcIiwgNTApXG4gICAgLy8gICAgICAgICAuYXR0cihcInlcIiwgNTApXG4gICAgLy8gICAgICAgICAudGV4dChcIkhlbGxvIEQzXCIpXG4gICAgLy8gfVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgZHJhd0NoYXJ0KClcbiAgICAgICAgXG4gICAgICAgIGNvbnNvbGUubG9nKCdjaGFydFJlZicsIGNoYXJ0UmVmLmN1cnJlbnQpXG4gICAgfSwgW3Byb3BzLmNvb3Jkc1N0ciwgbG9hZGVkQ2hhcnRdKTtcblxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPEZyYWdtZW50PlxuICAgICAgICAgICAgPGgyPkdyYXBocyB3aXRoIFJlYWN0PC9oMj5cbiAgICAgICAgICAgIDxkaXYgaWQ9XCJjaGFydFwiIHJlZj17Y2hhcnRSZWZ9PjwvZGl2PlxuICAgICAgICA8L0ZyYWdtZW50PlxuICAgICk7XG59XG5cbkNoYXJ0LnByb3BUeXBlcyA9IHtcbiAgICB4OiBQcm9wVHlwZXMuYXJyYXksXG4gICAgeTogUHJvcFR5cGVzLmFycmF5LFxuICAgIGNvb3Jkc1N0cjogUHJvcFR5cGVzLnN0cmluZ1xufVxuICBcbkNoYXJ0LmRlZmF1bHRQcm9wcyA9IHtcbiAgICB4OiBbXSxcbiAgICB5OiBbXSxcbiAgICBjb29yZHNTdHI6ICcnXG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/chart.js\n");

/***/ })

})