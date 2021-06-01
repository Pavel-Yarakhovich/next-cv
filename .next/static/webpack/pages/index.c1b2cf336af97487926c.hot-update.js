webpackHotUpdate_N_E("pages/index",{

/***/ "./components/ui/activeProject.js":
/*!****************************************!*\
  !*** ./components/ui/activeProject.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/esm/index.js\");\n/* harmony import */ var _tool__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tool */ \"./components/ui/tool.js\");\n\nvar _jsxFileName = \"/home/devpc/Documents/next-learn/components/ui/activeProject.js\";\n\n\n\nfunction ActiveProject(props) {\n  var _this = this;\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n    w: \"100%\",\n    borderRadius: \"36px\" // bgGradient=\"linear(135deg, gray.100 20%, gray.300)\"\n    ,\n    border: \"2px solid #e6cb00\",\n    p: 3,\n    display: \"flex\",\n    flexDirection: \"column\",\n    alignItems: \"flex-start\",\n    mb: 2,\n    mr: 2,\n    color: \"green.300\",\n    fontWeight: \"700\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Flex\"], {\n      alignItems: \"center\",\n      mb: 4,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Text\"], {\n        textTransform: \"uppercase\",\n        fontSize: \"26px\",\n        children: props.project.title\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 27,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Flex\"], {\n      fontWeight: \"700\",\n      direction: \"column\",\n      mb: 4,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Text\"], {\n        children: \"Description\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 32,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Text\"], {\n        pl: 4,\n        fontWeight: \"400\",\n        color: \"white\",\n        children: props.project.description\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Flex\"], {\n      fontWeight: \"700\",\n      direction: \"column\",\n      mb: 4,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Text\"], {\n        children: \"My responsibilities\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 38,\n        columnNumber: 9\n      }, this), props.project.duties.map(function (duty, idx) {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Text\"], {\n          pl: 4,\n          fontWeight: \"400\",\n          color: \"white\",\n          children: duty\n        }, idx, false, {\n          fileName: _jsxFileName,\n          lineNumber: 40,\n          columnNumber: 11\n        }, _this);\n      })]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Flex\"], {\n      flexWrap: \"wrap\",\n      direction: \"column\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Text\"], {\n        children: \"Tools\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 46,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Flex\"], {\n        flexWrap: \"wrap\",\n        children: props.project.tools.map(function (tool, idx) {\n          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_tool__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            tool: tool,\n            handleClick: function handleClick() {\n              return null;\n            }\n          }, idx, false, {\n            fileName: _jsxFileName,\n            lineNumber: 49,\n            columnNumber: 13\n          }, _this);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 47,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 6,\n    columnNumber: 5\n  }, this);\n}\n\n_c = ActiveProject;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ActiveProject);\n\nvar _c;\n\n$RefreshReg$(_c, \"ActiveProject\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy91aS9hY3RpdmVQcm9qZWN0LmpzP2E3MGEiXSwibmFtZXMiOlsiQWN0aXZlUHJvamVjdCIsInByb3BzIiwicHJvamVjdCIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJkdXRpZXMiLCJtYXAiLCJkdXR5IiwiaWR4IiwidG9vbHMiLCJ0b29sIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxTQUFTQSxhQUFULENBQXVCQyxLQUF2QixFQUE4QjtBQUFBOztBQUM1QixzQkFDRSxxRUFBQyxvREFBRDtBQUNFLEtBQUMsRUFBQyxNQURKO0FBRUUsZ0JBQVksRUFBQyxNQUZmLENBR0U7QUFIRjtBQUlFLFVBQU0sRUFBQyxtQkFKVDtBQUtFLEtBQUMsRUFBRSxDQUxMO0FBTUUsV0FBTyxFQUFDLE1BTlY7QUFPRSxpQkFBYSxFQUFDLFFBUGhCO0FBUUUsY0FBVSxFQUFDLFlBUmI7QUFTRSxNQUFFLEVBQUUsQ0FUTjtBQVVFLE1BQUUsRUFBRSxDQVZOO0FBV0UsU0FBSyxFQUFDLFdBWFI7QUFZRSxjQUFVLEVBQUMsS0FaYjtBQUFBLDRCQWNFLHFFQUFDLHFEQUFEO0FBQU0sZ0JBQVUsRUFBQyxRQUFqQjtBQUEwQixRQUFFLEVBQUUsQ0FBOUI7QUFBQSw2QkFPRSxxRUFBQyxxREFBRDtBQUFNLHFCQUFhLEVBQUMsV0FBcEI7QUFBZ0MsZ0JBQVEsRUFBQyxNQUF6QztBQUFBLGtCQUNHQSxLQUFLLENBQUNDLE9BQU4sQ0FBY0M7QUFEakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFkRixlQXlCRSxxRUFBQyxxREFBRDtBQUFNLGdCQUFVLEVBQUMsS0FBakI7QUFBdUIsZUFBUyxFQUFDLFFBQWpDO0FBQTBDLFFBQUUsRUFBRSxDQUE5QztBQUFBLDhCQUNFLHFFQUFDLHFEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFFRSxxRUFBQyxxREFBRDtBQUFNLFVBQUUsRUFBRSxDQUFWO0FBQWEsa0JBQVUsRUFBQyxLQUF4QjtBQUE4QixhQUFLLEVBQUMsT0FBcEM7QUFBQSxrQkFDR0YsS0FBSyxDQUFDQyxPQUFOLENBQWNFO0FBRGpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUF6QkYsZUErQkUscUVBQUMscURBQUQ7QUFBTSxnQkFBVSxFQUFDLEtBQWpCO0FBQXVCLGVBQVMsRUFBQyxRQUFqQztBQUEwQyxRQUFFLEVBQUUsQ0FBOUM7QUFBQSw4QkFDRSxxRUFBQyxxREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLEVBRUdILEtBQUssQ0FBQ0MsT0FBTixDQUFjRyxNQUFkLENBQXFCQyxHQUFyQixDQUF5QixVQUFDQyxJQUFELEVBQU9DLEdBQVA7QUFBQSw0QkFDeEIscUVBQUMscURBQUQ7QUFBZ0IsWUFBRSxFQUFFLENBQXBCO0FBQXVCLG9CQUFVLEVBQUMsS0FBbEM7QUFBd0MsZUFBSyxFQUFDLE9BQTlDO0FBQUEsb0JBQ0dEO0FBREgsV0FBV0MsR0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUR3QjtBQUFBLE9BQXpCLENBRkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBL0JGLGVBdUNFLHFFQUFDLHFEQUFEO0FBQU0sY0FBUSxFQUFDLE1BQWY7QUFBc0IsZUFBUyxFQUFDLFFBQWhDO0FBQUEsOEJBQ0UscUVBQUMscURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUVFLHFFQUFDLHFEQUFEO0FBQU0sZ0JBQVEsRUFBQyxNQUFmO0FBQUEsa0JBQ0dQLEtBQUssQ0FBQ0MsT0FBTixDQUFjTyxLQUFkLENBQW9CSCxHQUFwQixDQUF3QixVQUFDSSxJQUFELEVBQU9GLEdBQVA7QUFBQSw4QkFDdkIscUVBQUMsNkNBQUQ7QUFBZ0IsZ0JBQUksRUFBRUUsSUFBdEI7QUFBNEIsdUJBQVcsRUFBRTtBQUFBLHFCQUFNLElBQU47QUFBQTtBQUF6QyxhQUFXRixHQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRHVCO0FBQUEsU0FBeEI7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBdkNGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBa0REOztLQW5EUVIsYTtBQXFETUEsNEVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL3VpL2FjdGl2ZVByb2plY3QuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCb3gsIFRleHQsIEZsZXggfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xuaW1wb3J0IFRvb2wgZnJvbSBcIi4vdG9vbFwiO1xuXG5mdW5jdGlvbiBBY3RpdmVQcm9qZWN0KHByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPEJveFxuICAgICAgdz1cIjEwMCVcIlxuICAgICAgYm9yZGVyUmFkaXVzPVwiMzZweFwiXG4gICAgICAvLyBiZ0dyYWRpZW50PVwibGluZWFyKDEzNWRlZywgZ3JheS4xMDAgMjAlLCBncmF5LjMwMClcIlxuICAgICAgYm9yZGVyPVwiMnB4IHNvbGlkICNlNmNiMDBcIlxuICAgICAgcD17M31cbiAgICAgIGRpc3BsYXk9XCJmbGV4XCJcbiAgICAgIGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIlxuICAgICAgYWxpZ25JdGVtcz1cImZsZXgtc3RhcnRcIlxuICAgICAgbWI9ezJ9XG4gICAgICBtcj17Mn1cbiAgICAgIGNvbG9yPVwiZ3JlZW4uMzAwXCJcbiAgICAgIGZvbnRXZWlnaHQ9XCI3MDBcIlxuICAgID5cbiAgICAgIDxGbGV4IGFsaWduSXRlbXM9XCJjZW50ZXJcIiBtYj17NH0+XG4gICAgICAgIHsvKiA8QXZhdGFyXG4gICAgICAgICAgc2l6ZT1cImxnXCJcbiAgICAgICAgICBuYW1lPVwiS2VudCBEb2Rkc1wiXG4gICAgICAgICAgc3JjPVwiaHR0cHM6Ly9iaXQubHkva2VudC1jLWRvZGRzXCJcbiAgICAgICAgICBtcj17NH1cbiAgICAgICAgLz4gKi99XG4gICAgICAgIDxUZXh0IHRleHRUcmFuc2Zvcm09XCJ1cHBlcmNhc2VcIiBmb250U2l6ZT1cIjI2cHhcIj5cbiAgICAgICAgICB7cHJvcHMucHJvamVjdC50aXRsZX1cbiAgICAgICAgPC9UZXh0PlxuICAgICAgPC9GbGV4PlxuICAgICAgPEZsZXggZm9udFdlaWdodD1cIjcwMFwiIGRpcmVjdGlvbj1cImNvbHVtblwiIG1iPXs0fT5cbiAgICAgICAgPFRleHQ+RGVzY3JpcHRpb248L1RleHQ+XG4gICAgICAgIDxUZXh0IHBsPXs0fSBmb250V2VpZ2h0PVwiNDAwXCIgY29sb3I9XCJ3aGl0ZVwiPlxuICAgICAgICAgIHtwcm9wcy5wcm9qZWN0LmRlc2NyaXB0aW9ufVxuICAgICAgICA8L1RleHQ+XG4gICAgICA8L0ZsZXg+XG4gICAgICA8RmxleCBmb250V2VpZ2h0PVwiNzAwXCIgZGlyZWN0aW9uPVwiY29sdW1uXCIgbWI9ezR9PlxuICAgICAgICA8VGV4dD5NeSByZXNwb25zaWJpbGl0aWVzPC9UZXh0PlxuICAgICAgICB7cHJvcHMucHJvamVjdC5kdXRpZXMubWFwKChkdXR5LCBpZHgpID0+IChcbiAgICAgICAgICA8VGV4dCBrZXk9e2lkeH0gcGw9ezR9IGZvbnRXZWlnaHQ9XCI0MDBcIiBjb2xvcj1cIndoaXRlXCI+XG4gICAgICAgICAgICB7ZHV0eX1cbiAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICkpfVxuICAgICAgPC9GbGV4PlxuICAgICAgPEZsZXggZmxleFdyYXA9XCJ3cmFwXCIgZGlyZWN0aW9uPVwiY29sdW1uXCI+XG4gICAgICAgIDxUZXh0PlRvb2xzPC9UZXh0PlxuICAgICAgICA8RmxleCBmbGV4V3JhcD1cIndyYXBcIj5cbiAgICAgICAgICB7cHJvcHMucHJvamVjdC50b29scy5tYXAoKHRvb2wsIGlkeCkgPT4gKFxuICAgICAgICAgICAgPFRvb2wga2V5PXtpZHh9IHRvb2w9e3Rvb2x9IGhhbmRsZUNsaWNrPXsoKSA9PiBudWxsfSAvPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L0ZsZXg+XG4gICAgICA8L0ZsZXg+XG4gICAgPC9Cb3g+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFjdGl2ZVByb2plY3Q7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/ui/activeProject.js\n");

/***/ })

})