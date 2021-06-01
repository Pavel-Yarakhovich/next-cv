webpackHotUpdate_N_E("pages/index",{

/***/ "./components/ui/project.js":
/*!**********************************!*\
  !*** ./components/ui/project.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/esm/index.js\");\n\nvar _jsxFileName = \"/home/devpc/Documents/next-learn/components/ui/project.js\";\n\n\n\nfunction Project(props) {\n  var _this = this;\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Box\"], {\n    bgGradient: \"linear(to-r, gray.100, gray.200)\",\n    borderRadius: \"36px\",\n    p: 3,\n    display: \"flex\",\n    flexDirection: \"column\",\n    alignItems: \"center\",\n    mb: 2,\n    mr: 2,\n    color: \"white\",\n    fontWeight: \"700\",\n    onClick: function onClick() {\n      return props.handleClick(props.project);\n    },\n    _hover: {\n      cursor: \"pointer\",\n      color: \"yellow.200\",\n      transition: \"all 250ms ease\"\n    },\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Text\"], {\n      textTransform: \"uppercase\",\n      children: props.project.title\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Flex\"], {\n      children: props.project.tools.map(function (tool) {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Avatar\"], {\n          size: \"sm\",\n          name: \"Kent Dodds\",\n          src: \"https://bit.ly/kent-c-dodds\",\n          mr: 4,\n          mb: 4\n        }, tool, false, {\n          fileName: _jsxFileName,\n          lineNumber: 27,\n          columnNumber: 11\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 6,\n    columnNumber: 5\n  }, this);\n}\n\n_c = Project;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Project);\n\nvar _c;\n\n$RefreshReg$(_c, \"Project\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy91aS9wcm9qZWN0LmpzPzMzN2YiXSwibmFtZXMiOlsiUHJvamVjdCIsInByb3BzIiwiaGFuZGxlQ2xpY2siLCJwcm9qZWN0IiwiY3Vyc29yIiwiY29sb3IiLCJ0cmFuc2l0aW9uIiwidGl0bGUiLCJ0b29scyIsIm1hcCIsInRvb2wiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxTQUFTQSxPQUFULENBQWlCQyxLQUFqQixFQUF3QjtBQUFBOztBQUN0QixzQkFDRSxxRUFBQyxvREFBRDtBQUNFLGNBQVUsRUFBQyxrQ0FEYjtBQUVFLGdCQUFZLEVBQUMsTUFGZjtBQUdFLEtBQUMsRUFBRSxDQUhMO0FBSUUsV0FBTyxFQUFDLE1BSlY7QUFLRSxpQkFBYSxFQUFDLFFBTGhCO0FBTUUsY0FBVSxFQUFDLFFBTmI7QUFPRSxNQUFFLEVBQUUsQ0FQTjtBQVFFLE1BQUUsRUFBRSxDQVJOO0FBU0UsU0FBSyxFQUFDLE9BVFI7QUFVRSxjQUFVLEVBQUMsS0FWYjtBQVdFLFdBQU8sRUFBRTtBQUFBLGFBQU1BLEtBQUssQ0FBQ0MsV0FBTixDQUFrQkQsS0FBSyxDQUFDRSxPQUF4QixDQUFOO0FBQUEsS0FYWDtBQVlFLFVBQU0sRUFBRTtBQUNOQyxZQUFNLEVBQUUsU0FERjtBQUVOQyxXQUFLLEVBQUUsWUFGRDtBQUdOQyxnQkFBVSxFQUFFO0FBSE4sS0FaVjtBQUFBLDRCQWtCRSxxRUFBQyxxREFBRDtBQUFNLG1CQUFhLEVBQUMsV0FBcEI7QUFBQSxnQkFBaUNMLEtBQUssQ0FBQ0UsT0FBTixDQUFjSTtBQUEvQztBQUFBO0FBQUE7QUFBQTtBQUFBLFlBbEJGLGVBbUJFLHFFQUFDLHFEQUFEO0FBQUEsZ0JBQ0dOLEtBQUssQ0FBQ0UsT0FBTixDQUFjSyxLQUFkLENBQW9CQyxHQUFwQixDQUF3QixVQUFDQyxJQUFEO0FBQUEsNEJBQ3ZCLHFFQUFDLHVEQUFEO0FBRUUsY0FBSSxFQUFDLElBRlA7QUFHRSxjQUFJLEVBQUMsWUFIUDtBQUlFLGFBQUcsRUFBQyw2QkFKTjtBQUtFLFlBQUUsRUFBRSxDQUxOO0FBTUUsWUFBRSxFQUFFO0FBTk4sV0FDT0EsSUFEUDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUR1QjtBQUFBLE9BQXhCO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQW5CRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQWtDRDs7S0FuQ1FWLE87QUFxQ01BLHNFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy91aS9wcm9qZWN0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQm94LCBBdmF0YXIsIFRleHQsIEZsZXggfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xuXG5mdW5jdGlvbiBQcm9qZWN0KHByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPEJveFxuICAgICAgYmdHcmFkaWVudD1cImxpbmVhcih0by1yLCBncmF5LjEwMCwgZ3JheS4yMDApXCJcbiAgICAgIGJvcmRlclJhZGl1cz1cIjM2cHhcIlxuICAgICAgcD17M31cbiAgICAgIGRpc3BsYXk9XCJmbGV4XCJcbiAgICAgIGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIlxuICAgICAgYWxpZ25JdGVtcz1cImNlbnRlclwiXG4gICAgICBtYj17Mn1cbiAgICAgIG1yPXsyfVxuICAgICAgY29sb3I9XCJ3aGl0ZVwiXG4gICAgICBmb250V2VpZ2h0PVwiNzAwXCJcbiAgICAgIG9uQ2xpY2s9eygpID0+IHByb3BzLmhhbmRsZUNsaWNrKHByb3BzLnByb2plY3QpfVxuICAgICAgX2hvdmVyPXt7XG4gICAgICAgIGN1cnNvcjogXCJwb2ludGVyXCIsXG4gICAgICAgIGNvbG9yOiBcInllbGxvdy4yMDBcIixcbiAgICAgICAgdHJhbnNpdGlvbjogXCJhbGwgMjUwbXMgZWFzZVwiLFxuICAgICAgfX1cbiAgICA+XG4gICAgICA8VGV4dCB0ZXh0VHJhbnNmb3JtPVwidXBwZXJjYXNlXCI+e3Byb3BzLnByb2plY3QudGl0bGV9PC9UZXh0PlxuICAgICAgPEZsZXg+XG4gICAgICAgIHtwcm9wcy5wcm9qZWN0LnRvb2xzLm1hcCgodG9vbCkgPT4gKFxuICAgICAgICAgIDxBdmF0YXJcbiAgICAgICAgICAgIGtleT17dG9vbH1cbiAgICAgICAgICAgIHNpemU9XCJzbVwiXG4gICAgICAgICAgICBuYW1lPVwiS2VudCBEb2Rkc1wiXG4gICAgICAgICAgICBzcmM9XCJodHRwczovL2JpdC5seS9rZW50LWMtZG9kZHNcIlxuICAgICAgICAgICAgbXI9ezR9XG4gICAgICAgICAgICBtYj17NH1cbiAgICAgICAgICAvPlxuICAgICAgICApKX1cbiAgICAgIDwvRmxleD5cbiAgICA8L0JveD5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/ui/project.js\n");

/***/ })

})