webpackHotUpdate_N_E("pages/index",{

/***/ "./components/chart.js":
/*!*****************************!*\
  !*** ./components/chart.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Chart; });\n/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3 */ \"./node_modules/d3/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName = \"/Users/jasonbryant/Desktop/nrel/components/chart.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\nvar accessToRef = null;\nfunction Chart(props) {\n  _s();\n\n  var chartRef = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__[\"createRef\"])();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      loadedChart = _useState[0],\n      updateLoadStatus = _useState[1],\n      h_max = Math.max(props.y),\n      data_length = props.y.length,\n      h = 200,\n      w = 400;\n\n  var drawChart = function drawChart() {\n    console.log('data_length', data_length);\n    if (accessToRef != null) accessToRef.selectAll(\"*\").remove();\n\n    if (!loadedChart) {\n      // const axis = axis\n      //     .ticks(d3.time.months, 1)\n      //     .tickFormat(d3.time.format(\"%b\"));\n      accessToRef = d3__WEBPACK_IMPORTED_MODULE_0__[\"select\"](chartRef.current).append('svg').attr('width', w) // w\n      .attr('height', h) // h\n      .style('background-color', '#ffffff').style('padding', 10).style('margin-left', 0); // .call(axis)\n\n      updateLoadStatus(true);\n    }\n\n    if (true) {\n      console.log('setting data', props.y);\n      accessToRef.selectAll('rect').data(props.y).enter().append('rect').attr('x', function (d, i) {\n        return i * (w / data_length);\n      }) //\n      .attr('y', function (d, i) {\n        return h - 10 * d;\n      }).attr('width', w / data_length - 1) // 65\n      .attr('height', function (d, i) {\n        return d * 10;\n      }).attr('fill', 'tomato');\n    }\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    setTimeout(function () {\n      drawChart();\n    }, 10);\n  }, [props.coordsStr, loadedChart]);\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_1__[\"Fragment\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 9\n    }\n  }, __jsx(\"h2\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 13\n    }\n  }, \"Average DNI (monthly)\"), __jsx(\"div\", {\n    id: \"chart\",\n    ref: chartRef,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 13\n    }\n  }));\n}\n\n_s(Chart, \"RtqllLOUZMfKbUbbR9KMfR4lOQY=\");\n\n_c = Chart;\nChart.propTypes = {\n  x: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array,\n  y: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array,\n  coordsStr: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string\n};\nChart.defaultProps = {\n  x: [],\n  y: [],\n  coordsStr: ''\n};\n\nvar _c;\n\n$RefreshReg$(_c, \"Chart\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jaGFydC5qcz84OGE2Il0sIm5hbWVzIjpbImFjY2Vzc1RvUmVmIiwiQ2hhcnQiLCJwcm9wcyIsImNoYXJ0UmVmIiwiY3JlYXRlUmVmIiwidXNlU3RhdGUiLCJsb2FkZWRDaGFydCIsInVwZGF0ZUxvYWRTdGF0dXMiLCJoX21heCIsIk1hdGgiLCJtYXgiLCJ5IiwiZGF0YV9sZW5ndGgiLCJsZW5ndGgiLCJoIiwidyIsImRyYXdDaGFydCIsImNvbnNvbGUiLCJsb2ciLCJzZWxlY3RBbGwiLCJyZW1vdmUiLCJkMyIsImN1cnJlbnQiLCJhcHBlbmQiLCJhdHRyIiwic3R5bGUiLCJkYXRhIiwiZW50ZXIiLCJkIiwiaSIsInVzZUVmZmVjdCIsInNldFRpbWVvdXQiLCJjb29yZHNTdHIiLCJwcm9wVHlwZXMiLCJ4IiwiUHJvcFR5cGVzIiwiYXJyYXkiLCJzdHJpbmciLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUEsSUFBSUEsV0FBVyxHQUFHLElBQWxCO0FBRWUsU0FBU0MsS0FBVCxDQUFlQyxLQUFmLEVBQXNCO0FBQUE7O0FBQ2pDLE1BQUlDLFFBQVEsZ0JBQUdDLHVEQUFTLEVBQXhCOztBQURpQyxrQkFHT0Msc0RBQVEsQ0FBQyxLQUFELENBSGY7QUFBQSxNQUcxQkMsV0FIMEI7QUFBQSxNQUdiQyxnQkFIYTtBQUFBLE1BSTdCQyxLQUo2QixHQUlyQkMsSUFBSSxDQUFDQyxHQUFMLENBQVNSLEtBQUssQ0FBQ1MsQ0FBZixDQUpxQjtBQUFBLE1BSzdCQyxXQUw2QixHQUtmVixLQUFLLENBQUNTLENBQU4sQ0FBUUUsTUFMTztBQUFBLE1BTTdCQyxDQU42QixHQU16QixHQU55QjtBQUFBLE1BTzdCQyxDQVA2QixHQU96QixHQVB5Qjs7QUFTakMsTUFBTUMsU0FBUyxHQUFHLFNBQVpBLFNBQVksR0FBTTtBQUVwQkMsV0FBTyxDQUFDQyxHQUFSLENBQVksYUFBWixFQUEyQk4sV0FBM0I7QUFDQSxRQUFHWixXQUFXLElBQUksSUFBbEIsRUFDSUEsV0FBVyxDQUFDbUIsU0FBWixDQUFzQixHQUF0QixFQUEyQkMsTUFBM0I7O0FBRUosUUFBRyxDQUFDZCxXQUFKLEVBQWlCO0FBQ2I7QUFDQTtBQUNBO0FBRUFOLGlCQUFXLEdBQUdxQix5Q0FBQSxDQUFVbEIsUUFBUSxDQUFDbUIsT0FBbkIsRUFDVEMsTUFEUyxDQUNGLEtBREUsRUFFVEMsSUFGUyxDQUVKLE9BRkksRUFFS1QsQ0FGTCxFQUVRO0FBRlIsT0FHVFMsSUFIUyxDQUdKLFFBSEksRUFHTVYsQ0FITixFQUdTO0FBSFQsT0FJVFcsS0FKUyxDQUlILGtCQUpHLEVBSWlCLFNBSmpCLEVBS1RBLEtBTFMsQ0FLSCxTQUxHLEVBS1EsRUFMUixFQU1UQSxLQU5TLENBTUgsYUFORyxFQU1ZLENBTlosQ0FBZCxDQUxhLENBWVQ7O0FBRUFsQixzQkFBZ0IsQ0FBQyxJQUFELENBQWhCO0FBQ1A7O0FBRUQsUUFBRyxJQUFILEVBQVM7QUFDTFUsYUFBTyxDQUFDQyxHQUFSLENBQVksY0FBWixFQUE0QmhCLEtBQUssQ0FBQ1MsQ0FBbEM7QUFDQVgsaUJBQVcsQ0FBQ21CLFNBQVosQ0FBc0IsTUFBdEIsRUFDS08sSUFETCxDQUNVeEIsS0FBSyxDQUFDUyxDQURoQixFQUVLZ0IsS0FGTCxHQUdLSixNQUhMLENBR1ksTUFIWixFQUlLQyxJQUpMLENBSVUsR0FKVixFQUllLFVBQUNJLENBQUQsRUFBSUMsQ0FBSjtBQUFBLGVBQVVBLENBQUMsSUFBSWQsQ0FBQyxHQUFDSCxXQUFOLENBQVg7QUFBQSxPQUpmLEVBSThDO0FBSjlDLE9BS0tZLElBTEwsQ0FLVSxHQUxWLEVBS2UsVUFBQ0ksQ0FBRCxFQUFJQyxDQUFKO0FBQUEsZUFBVWYsQ0FBQyxHQUFHLEtBQUtjLENBQW5CO0FBQUEsT0FMZixFQU1LSixJQU5MLENBTVUsT0FOVixFQU1vQlQsQ0FBQyxHQUFDSCxXQUFILEdBQWtCLENBTnJDLEVBTXdDO0FBTnhDLE9BT0tZLElBUEwsQ0FPVSxRQVBWLEVBT29CLFVBQUNJLENBQUQsRUFBSUMsQ0FBSjtBQUFBLGVBQVVELENBQUMsR0FBRyxFQUFkO0FBQUEsT0FQcEIsRUFRS0osSUFSTCxDQVFVLE1BUlYsRUFRa0IsUUFSbEI7QUFTSDtBQUNKLEdBbkNEOztBQXFDQU0seURBQVMsQ0FBQyxZQUFNO0FBQ1pDLGNBQVUsQ0FBQyxZQUFLO0FBQ1pmLGVBQVM7QUFDWixLQUZTLEVBRVAsRUFGTyxDQUFWO0FBR0gsR0FKUSxFQUlOLENBQUNkLEtBQUssQ0FBQzhCLFNBQVAsRUFBa0IxQixXQUFsQixDQUpNLENBQVQ7QUFPQSxTQUNJLE1BQUMsOENBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBREosRUFFSTtBQUFLLE1BQUUsRUFBQyxPQUFSO0FBQWdCLE9BQUcsRUFBRUgsUUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZKLENBREo7QUFNSDs7R0EzRHVCRixLOztLQUFBQSxLO0FBNkR4QkEsS0FBSyxDQUFDZ0MsU0FBTixHQUFrQjtBQUNkQyxHQUFDLEVBQUVDLGlEQUFTLENBQUNDLEtBREM7QUFFZHpCLEdBQUMsRUFBRXdCLGlEQUFTLENBQUNDLEtBRkM7QUFHZEosV0FBUyxFQUFFRyxpREFBUyxDQUFDRTtBQUhQLENBQWxCO0FBTUFwQyxLQUFLLENBQUNxQyxZQUFOLEdBQXFCO0FBQ2pCSixHQUFDLEVBQUUsRUFEYztBQUVqQnZCLEdBQUMsRUFBRSxFQUZjO0FBR2pCcUIsV0FBUyxFQUFFO0FBSE0sQ0FBckIiLCJmaWxlIjoiLi9jb21wb25lbnRzL2NoYXJ0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgZDMgZnJvbSAnZDMnO1xuaW1wb3J0IFJlYWN0LCB7IEZyYWdtZW50LCB1c2VFZmZlY3QsIHVzZVN0YXRlLCBjcmVhdGVSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5cbmxldCBhY2Nlc3NUb1JlZiA9IG51bGxcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2hhcnQocHJvcHMpIHtcbiAgICBsZXQgY2hhcnRSZWYgPSBjcmVhdGVSZWYoKVxuXG4gICAgY29uc3QgW2xvYWRlZENoYXJ0LCB1cGRhdGVMb2FkU3RhdHVzXSA9IHVzZVN0YXRlKGZhbHNlKSxcbiAgICAgICAgaF9tYXggPSBNYXRoLm1heChwcm9wcy55KSxcbiAgICAgICAgZGF0YV9sZW5ndGggPSBwcm9wcy55Lmxlbmd0aCxcbiAgICAgICAgaCA9IDIwMCxcbiAgICAgICAgdyA9IDQwMFxuXG4gICAgY29uc3QgZHJhd0NoYXJ0ID0gKCkgPT4ge1xuXG4gICAgICAgIGNvbnNvbGUubG9nKCdkYXRhX2xlbmd0aCcsIGRhdGFfbGVuZ3RoKVxuICAgICAgICBpZihhY2Nlc3NUb1JlZiAhPSBudWxsKVxuICAgICAgICAgICAgYWNjZXNzVG9SZWYuc2VsZWN0QWxsKFwiKlwiKS5yZW1vdmUoKVxuXG4gICAgICAgIGlmKCFsb2FkZWRDaGFydCkge1xuICAgICAgICAgICAgLy8gY29uc3QgYXhpcyA9IGF4aXNcbiAgICAgICAgICAgIC8vICAgICAudGlja3MoZDMudGltZS5tb250aHMsIDEpXG4gICAgICAgICAgICAvLyAgICAgLnRpY2tGb3JtYXQoZDMudGltZS5mb3JtYXQoXCIlYlwiKSk7XG5cbiAgICAgICAgICAgIGFjY2Vzc1RvUmVmID0gZDMuc2VsZWN0KGNoYXJ0UmVmLmN1cnJlbnQpXG4gICAgICAgICAgICAgICAgLmFwcGVuZCgnc3ZnJylcbiAgICAgICAgICAgICAgICAuYXR0cignd2lkdGgnLCB3KSAvLyB3XG4gICAgICAgICAgICAgICAgLmF0dHIoJ2hlaWdodCcsIGgpIC8vIGhcbiAgICAgICAgICAgICAgICAuc3R5bGUoJ2JhY2tncm91bmQtY29sb3InLCAnI2ZmZmZmZicpXG4gICAgICAgICAgICAgICAgLnN0eWxlKCdwYWRkaW5nJywgMTApXG4gICAgICAgICAgICAgICAgLnN0eWxlKCdtYXJnaW4tbGVmdCcsIDApXG4gICAgICAgICAgICAgICAgLy8gLmNhbGwoYXhpcylcblxuICAgICAgICAgICAgICAgIHVwZGF0ZUxvYWRTdGF0dXModHJ1ZSlcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKHRydWUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdzZXR0aW5nIGRhdGEnLCBwcm9wcy55KVxuICAgICAgICAgICAgYWNjZXNzVG9SZWYuc2VsZWN0QWxsKCdyZWN0JylcbiAgICAgICAgICAgICAgICAuZGF0YShwcm9wcy55KVxuICAgICAgICAgICAgICAgIC5lbnRlcigpXG4gICAgICAgICAgICAgICAgLmFwcGVuZCgncmVjdCcpXG4gICAgICAgICAgICAgICAgLmF0dHIoJ3gnLCAoZCwgaSkgPT4gaSAqICh3L2RhdGFfbGVuZ3RoKSkgLy9cbiAgICAgICAgICAgICAgICAuYXR0cigneScsIChkLCBpKSA9PiBoIC0gMTAgKiBkKVxuICAgICAgICAgICAgICAgIC5hdHRyKCd3aWR0aCcsICh3L2RhdGFfbGVuZ3RoKSAtIDEpIC8vIDY1XG4gICAgICAgICAgICAgICAgLmF0dHIoJ2hlaWdodCcsIChkLCBpKSA9PiBkICogMTApXG4gICAgICAgICAgICAgICAgLmF0dHIoJ2ZpbGwnLCAndG9tYXRvJylcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIHNldFRpbWVvdXQoKCk9PiB7XG4gICAgICAgICAgICBkcmF3Q2hhcnQoKVxuICAgICAgICB9LCAxMClcbiAgICB9LCBbcHJvcHMuY29vcmRzU3RyLCBsb2FkZWRDaGFydF0pO1xuXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8RnJhZ21lbnQ+XG4gICAgICAgICAgICA8aDI+QXZlcmFnZSBETkkgKG1vbnRobHkpPC9oMj5cbiAgICAgICAgICAgIDxkaXYgaWQ9XCJjaGFydFwiIHJlZj17Y2hhcnRSZWZ9PjwvZGl2PlxuICAgICAgICA8L0ZyYWdtZW50PlxuICAgICk7XG59XG5cbkNoYXJ0LnByb3BUeXBlcyA9IHtcbiAgICB4OiBQcm9wVHlwZXMuYXJyYXksXG4gICAgeTogUHJvcFR5cGVzLmFycmF5LFxuICAgIGNvb3Jkc1N0cjogUHJvcFR5cGVzLnN0cmluZ1xufVxuICBcbkNoYXJ0LmRlZmF1bHRQcm9wcyA9IHtcbiAgICB4OiBbXSxcbiAgICB5OiBbXSxcbiAgICBjb29yZHNTdHI6ICcnXG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/chart.js\n");

/***/ })

})