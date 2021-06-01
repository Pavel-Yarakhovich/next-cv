webpackHotUpdate_N_E("pages/index",{

/***/ "./components/ui/activeProject.js":
/*!****************************************!*\
  !*** ./components/ui/activeProject.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/esm/index.js\");\n/* harmony import */ var _tool__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tool */ \"./components/ui/tool.js\");\n\nvar _jsxFileName = \"/home/devpc/Documents/next-learn/components/ui/activeProject.js\";\n\n\n\nfunction ActiveProject(props) {\n  var _this = this;\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n    w: \"100%\",\n    borderRadius: \"36px\",\n    borderTopLeftRadius: \"0\",\n    border: \"2px solid #e6cb00\",\n    p: 5,\n    display: \"flex\",\n    flexDirection: \"column\",\n    alignItems: \"flex-start\",\n    mb: 2,\n    mr: 2,\n    color: \"yellow.300\",\n    fontWeight: \"400\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Flex\"], {\n      alignItems: \"center\",\n      mb: 4,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Text\"], {\n        textTransform: \"uppercase\",\n        fontSize: \"26px\",\n        children: props.project.title\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 21,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Flex\"], {\n      fontWeight: \"400\",\n      direction: \"column\",\n      mb: 4,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Text\"], {\n        fontSize: \"1.4rem\",\n        mb: 2,\n        children: \"Description\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 26,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Text\"], {\n        pl: 4,\n        color: \"white\",\n        children: props.project.description\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 27,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Flex\"], {\n      direction: \"column\",\n      mb: 4,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Text\"], {\n        fontSize: \"1.4rem\",\n        mb: 2,\n        children: \"My responsibilities\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 32,\n        columnNumber: 9\n      }, this), props.project.duties.map(function (duty, idx) {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Text\"], {\n          pl: 4,\n          fontWeight: \"400\",\n          color: \"white\",\n          children: duty\n        }, idx, false, {\n          fileName: _jsxFileName,\n          lineNumber: 34,\n          columnNumber: 11\n        }, _this);\n      })]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Flex\"], {\n      flexWrap: \"wrap\",\n      direction: \"column\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Text\"], {\n        fontSize: \"1.4rem\",\n        mb: 2,\n        children: \"Tools\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 40,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Flex\"], {\n        flexWrap: \"wrap\",\n        children: props.project.tools.map(function (tool, idx) {\n          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_tool__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            tool: tool,\n            handleClick: function handleClick() {\n              return null;\n            }\n          }, idx, false, {\n            fileName: _jsxFileName,\n            lineNumber: 43,\n            columnNumber: 13\n          }, _this);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 41,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 6,\n    columnNumber: 5\n  }, this);\n}\n\n_c = ActiveProject;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ActiveProject);\n\nvar _c;\n\n$RefreshReg$(_c, \"ActiveProject\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy91aS9hY3RpdmVQcm9qZWN0LmpzP2E3MGEiXSwibmFtZXMiOlsiQWN0aXZlUHJvamVjdCIsInByb3BzIiwicHJvamVjdCIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJkdXRpZXMiLCJtYXAiLCJkdXR5IiwiaWR4IiwidG9vbHMiLCJ0b29sIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxTQUFTQSxhQUFULENBQXVCQyxLQUF2QixFQUE4QjtBQUFBOztBQUM1QixzQkFDRSxxRUFBQyxvREFBRDtBQUNFLEtBQUMsRUFBQyxNQURKO0FBRUUsZ0JBQVksRUFBQyxNQUZmO0FBR0UsdUJBQW1CLEVBQUMsR0FIdEI7QUFJRSxVQUFNLEVBQUMsbUJBSlQ7QUFLRSxLQUFDLEVBQUUsQ0FMTDtBQU1FLFdBQU8sRUFBQyxNQU5WO0FBT0UsaUJBQWEsRUFBQyxRQVBoQjtBQVFFLGNBQVUsRUFBQyxZQVJiO0FBU0UsTUFBRSxFQUFFLENBVE47QUFVRSxNQUFFLEVBQUUsQ0FWTjtBQVdFLFNBQUssRUFBQyxZQVhSO0FBWUUsY0FBVSxFQUFDLEtBWmI7QUFBQSw0QkFjRSxxRUFBQyxxREFBRDtBQUFNLGdCQUFVLEVBQUMsUUFBakI7QUFBMEIsUUFBRSxFQUFFLENBQTlCO0FBQUEsNkJBQ0UscUVBQUMscURBQUQ7QUFBTSxxQkFBYSxFQUFDLFdBQXBCO0FBQWdDLGdCQUFRLEVBQUMsTUFBekM7QUFBQSxrQkFDR0EsS0FBSyxDQUFDQyxPQUFOLENBQWNDO0FBRGpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBZEYsZUFtQkUscUVBQUMscURBQUQ7QUFBTSxnQkFBVSxFQUFDLEtBQWpCO0FBQXVCLGVBQVMsRUFBQyxRQUFqQztBQUEwQyxRQUFFLEVBQUUsQ0FBOUM7QUFBQSw4QkFDRSxxRUFBQyxxREFBRDtBQUFNLGdCQUFRLEVBQUMsUUFBZjtBQUF3QixVQUFFLEVBQUUsQ0FBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUVFLHFFQUFDLHFEQUFEO0FBQU0sVUFBRSxFQUFFLENBQVY7QUFBYSxhQUFLLEVBQUMsT0FBbkI7QUFBQSxrQkFDR0YsS0FBSyxDQUFDQyxPQUFOLENBQWNFO0FBRGpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFuQkYsZUF5QkUscUVBQUMscURBQUQ7QUFBTyxlQUFTLEVBQUMsUUFBakI7QUFBMEIsUUFBRSxFQUFFLENBQTlCO0FBQUEsOEJBQ0UscUVBQUMscURBQUQ7QUFBTSxnQkFBUSxFQUFDLFFBQWY7QUFBd0IsVUFBRSxFQUFFLENBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsRUFFR0gsS0FBSyxDQUFDQyxPQUFOLENBQWNHLE1BQWQsQ0FBcUJDLEdBQXJCLENBQXlCLFVBQUNDLElBQUQsRUFBT0MsR0FBUDtBQUFBLDRCQUN4QixxRUFBQyxxREFBRDtBQUFnQixZQUFFLEVBQUUsQ0FBcEI7QUFBdUIsb0JBQVUsRUFBQyxLQUFsQztBQUF3QyxlQUFLLEVBQUMsT0FBOUM7QUFBQSxvQkFDR0Q7QUFESCxXQUFXQyxHQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRHdCO0FBQUEsT0FBekIsQ0FGSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUF6QkYsZUFpQ0UscUVBQUMscURBQUQ7QUFBTSxjQUFRLEVBQUMsTUFBZjtBQUFzQixlQUFTLEVBQUMsUUFBaEM7QUFBQSw4QkFDRSxxRUFBQyxxREFBRDtBQUFNLGdCQUFRLEVBQUMsUUFBZjtBQUF3QixVQUFFLEVBQUUsQ0FBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUVFLHFFQUFDLHFEQUFEO0FBQU0sZ0JBQVEsRUFBQyxNQUFmO0FBQUEsa0JBQ0dQLEtBQUssQ0FBQ0MsT0FBTixDQUFjTyxLQUFkLENBQW9CSCxHQUFwQixDQUF3QixVQUFDSSxJQUFELEVBQU9GLEdBQVA7QUFBQSw4QkFDdkIscUVBQUMsNkNBQUQ7QUFBZ0IsZ0JBQUksRUFBRUUsSUFBdEI7QUFBNEIsdUJBQVcsRUFBRTtBQUFBLHFCQUFNLElBQU47QUFBQTtBQUF6QyxhQUFXRixHQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRHVCO0FBQUEsU0FBeEI7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBakNGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBNENEOztLQTdDUVIsYTtBQStDTUEsNEVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL3VpL2FjdGl2ZVByb2plY3QuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCb3gsIFRleHQsIEZsZXggfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xuaW1wb3J0IFRvb2wgZnJvbSBcIi4vdG9vbFwiO1xuXG5mdW5jdGlvbiBBY3RpdmVQcm9qZWN0KHByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPEJveFxuICAgICAgdz1cIjEwMCVcIlxuICAgICAgYm9yZGVyUmFkaXVzPVwiMzZweFwiXG4gICAgICBib3JkZXJUb3BMZWZ0UmFkaXVzPVwiMFwiXG4gICAgICBib3JkZXI9XCIycHggc29saWQgI2U2Y2IwMFwiXG4gICAgICBwPXs1fVxuICAgICAgZGlzcGxheT1cImZsZXhcIlxuICAgICAgZmxleERpcmVjdGlvbj1cImNvbHVtblwiXG4gICAgICBhbGlnbkl0ZW1zPVwiZmxleC1zdGFydFwiXG4gICAgICBtYj17Mn1cbiAgICAgIG1yPXsyfVxuICAgICAgY29sb3I9XCJ5ZWxsb3cuMzAwXCJcbiAgICAgIGZvbnRXZWlnaHQ9XCI0MDBcIlxuICAgID5cbiAgICAgIDxGbGV4IGFsaWduSXRlbXM9XCJjZW50ZXJcIiBtYj17NH0+XG4gICAgICAgIDxUZXh0IHRleHRUcmFuc2Zvcm09XCJ1cHBlcmNhc2VcIiBmb250U2l6ZT1cIjI2cHhcIj5cbiAgICAgICAgICB7cHJvcHMucHJvamVjdC50aXRsZX1cbiAgICAgICAgPC9UZXh0PlxuICAgICAgPC9GbGV4PlxuICAgICAgPEZsZXggZm9udFdlaWdodD1cIjQwMFwiIGRpcmVjdGlvbj1cImNvbHVtblwiIG1iPXs0fT5cbiAgICAgICAgPFRleHQgZm9udFNpemU9XCIxLjRyZW1cIiBtYj17Mn0+RGVzY3JpcHRpb248L1RleHQ+XG4gICAgICAgIDxUZXh0IHBsPXs0fSBjb2xvcj1cIndoaXRlXCI+XG4gICAgICAgICAge3Byb3BzLnByb2plY3QuZGVzY3JpcHRpb259XG4gICAgICAgIDwvVGV4dD5cbiAgICAgIDwvRmxleD5cbiAgICAgIDxGbGV4ICBkaXJlY3Rpb249XCJjb2x1bW5cIiBtYj17NH0+XG4gICAgICAgIDxUZXh0IGZvbnRTaXplPVwiMS40cmVtXCIgbWI9ezJ9Pk15IHJlc3BvbnNpYmlsaXRpZXM8L1RleHQ+XG4gICAgICAgIHtwcm9wcy5wcm9qZWN0LmR1dGllcy5tYXAoKGR1dHksIGlkeCkgPT4gKFxuICAgICAgICAgIDxUZXh0IGtleT17aWR4fSBwbD17NH0gZm9udFdlaWdodD1cIjQwMFwiIGNvbG9yPVwid2hpdGVcIj5cbiAgICAgICAgICAgIHtkdXR5fVxuICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgKSl9XG4gICAgICA8L0ZsZXg+XG4gICAgICA8RmxleCBmbGV4V3JhcD1cIndyYXBcIiBkaXJlY3Rpb249XCJjb2x1bW5cIj5cbiAgICAgICAgPFRleHQgZm9udFNpemU9XCIxLjRyZW1cIiBtYj17Mn0+VG9vbHM8L1RleHQ+XG4gICAgICAgIDxGbGV4IGZsZXhXcmFwPVwid3JhcFwiPlxuICAgICAgICAgIHtwcm9wcy5wcm9qZWN0LnRvb2xzLm1hcCgodG9vbCwgaWR4KSA9PiAoXG4gICAgICAgICAgICA8VG9vbCBrZXk9e2lkeH0gdG9vbD17dG9vbH0gaGFuZGxlQ2xpY2s9eygpID0+IG51bGx9IC8+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvRmxleD5cbiAgICAgIDwvRmxleD5cbiAgICA8L0JveD5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQWN0aXZlUHJvamVjdDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/ui/activeProject.js\n");

/***/ })

})