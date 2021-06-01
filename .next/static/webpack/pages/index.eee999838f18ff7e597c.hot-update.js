webpackHotUpdate_N_E("pages/index",{

/***/ "./components/ui/activeProject.js":
/*!****************************************!*\
  !*** ./components/ui/activeProject.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/esm/index.js\");\n/* harmony import */ var _tool__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tool */ \"./components/ui/tool.js\");\n\nvar _jsxFileName = \"/home/devpc/Documents/next-learn/components/ui/activeProject.js\";\n\n\n\nfunction ActiveProject(props) {\n  var _this = this;\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n    w: \"100%\",\n    borderRadius: \"36px\",\n    borderBottomLeftRadius: \"0\",\n    borderTopRightRadius: \"0\",\n    borderBottomRightRadius: \"0\" // bgGradient=\"linear(135deg, gray.100 20%, gray.300)\"\n    ,\n    border: \"2px solid green.300\",\n    p: 3,\n    display: \"flex\",\n    flexDirection: \"column\",\n    alignItems: \"flex-start\",\n    mb: 2,\n    mr: 2,\n    color: \"green.300\",\n    fontWeight: \"700\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Flex\"], {\n      alignItems: \"center\",\n      mb: 4,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Text\"], {\n        textTransform: \"uppercase\",\n        fontSize: \"26px\",\n        children: props.project.title\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 30,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Flex\"], {\n      fontWeight: \"700\",\n      direction: \"column\",\n      mb: 4,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Text\"], {\n        children: \"Description\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Text\"], {\n        pl: 4,\n        fontWeight: \"400\",\n        color: \"white\",\n        children: props.project.description\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 36,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Flex\"], {\n      fontWeight: \"700\",\n      direction: \"column\",\n      mb: 4,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Text\"], {\n        children: \"My responsibilities\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 41,\n        columnNumber: 9\n      }, this), props.project.duties.map(function (duty, idx) {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Text\"], {\n          pl: 4,\n          fontWeight: \"400\",\n          color: \"white\",\n          children: duty\n        }, idx, false, {\n          fileName: _jsxFileName,\n          lineNumber: 43,\n          columnNumber: 11\n        }, _this);\n      })]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Flex\"], {\n      flexWrap: \"wrap\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Text\"], {\n        children: \"My responsibilities\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 49,\n        columnNumber: 7\n      }, this), props.project.tools.map(function (tool, idx) {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_tool__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n          tool: tool,\n          handleClick: function handleClick() {\n            return null;\n          }\n        }, idx, false, {\n          fileName: _jsxFileName,\n          lineNumber: 51,\n          columnNumber: 11\n        }, _this);\n      })]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 6,\n    columnNumber: 5\n  }, this);\n}\n\n_c = ActiveProject;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ActiveProject);\n\nvar _c;\n\n$RefreshReg$(_c, \"ActiveProject\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy91aS9hY3RpdmVQcm9qZWN0LmpzP2E3MGEiXSwibmFtZXMiOlsiQWN0aXZlUHJvamVjdCIsInByb3BzIiwicHJvamVjdCIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJkdXRpZXMiLCJtYXAiLCJkdXR5IiwiaWR4IiwidG9vbHMiLCJ0b29sIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxTQUFTQSxhQUFULENBQXVCQyxLQUF2QixFQUE4QjtBQUFBOztBQUM1QixzQkFDRSxxRUFBQyxvREFBRDtBQUNFLEtBQUMsRUFBQyxNQURKO0FBRUUsZ0JBQVksRUFBQyxNQUZmO0FBR0UsMEJBQXNCLEVBQUMsR0FIekI7QUFJRSx3QkFBb0IsRUFBQyxHQUp2QjtBQUtFLDJCQUF1QixFQUFDLEdBTDFCLENBTUU7QUFORjtBQU9FLFVBQU0sRUFBQyxxQkFQVDtBQVFFLEtBQUMsRUFBRSxDQVJMO0FBU0UsV0FBTyxFQUFDLE1BVFY7QUFVRSxpQkFBYSxFQUFDLFFBVmhCO0FBV0UsY0FBVSxFQUFDLFlBWGI7QUFZRSxNQUFFLEVBQUUsQ0FaTjtBQWFFLE1BQUUsRUFBRSxDQWJOO0FBY0UsU0FBSyxFQUFDLFdBZFI7QUFlRSxjQUFVLEVBQUMsS0FmYjtBQUFBLDRCQWlCRSxxRUFBQyxxREFBRDtBQUFNLGdCQUFVLEVBQUMsUUFBakI7QUFBMEIsUUFBRSxFQUFFLENBQTlCO0FBQUEsNkJBT0UscUVBQUMscURBQUQ7QUFBTSxxQkFBYSxFQUFDLFdBQXBCO0FBQWdDLGdCQUFRLEVBQUMsTUFBekM7QUFBQSxrQkFDR0EsS0FBSyxDQUFDQyxPQUFOLENBQWNDO0FBRGpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFQRjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBakJGLGVBNEJFLHFFQUFDLHFEQUFEO0FBQU0sZ0JBQVUsRUFBQyxLQUFqQjtBQUF1QixlQUFTLEVBQUMsUUFBakM7QUFBMEMsUUFBRSxFQUFFLENBQTlDO0FBQUEsOEJBQ0UscUVBQUMscURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUVFLHFFQUFDLHFEQUFEO0FBQU0sVUFBRSxFQUFFLENBQVY7QUFBYSxrQkFBVSxFQUFDLEtBQXhCO0FBQThCLGFBQUssRUFBQyxPQUFwQztBQUFBLGtCQUNHRixLQUFLLENBQUNDLE9BQU4sQ0FBY0U7QUFEakI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQTVCRixlQWtDRSxxRUFBQyxxREFBRDtBQUFNLGdCQUFVLEVBQUMsS0FBakI7QUFBdUIsZUFBUyxFQUFDLFFBQWpDO0FBQTBDLFFBQUUsRUFBRSxDQUE5QztBQUFBLDhCQUNFLHFFQUFDLHFEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsRUFFR0gsS0FBSyxDQUFDQyxPQUFOLENBQWNHLE1BQWQsQ0FBcUJDLEdBQXJCLENBQXlCLFVBQUNDLElBQUQsRUFBT0MsR0FBUDtBQUFBLDRCQUN4QixxRUFBQyxxREFBRDtBQUFnQixZQUFFLEVBQUUsQ0FBcEI7QUFBdUIsb0JBQVUsRUFBQyxLQUFsQztBQUF3QyxlQUFLLEVBQUMsT0FBOUM7QUFBQSxvQkFDR0Q7QUFESCxXQUFXQyxHQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRHdCO0FBQUEsT0FBekIsQ0FGSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFsQ0YsZUEwQ0UscUVBQUMscURBQUQ7QUFBTSxjQUFRLEVBQUMsTUFBZjtBQUFBLDhCQUNBLHFFQUFDLHFEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREEsRUFFR1AsS0FBSyxDQUFDQyxPQUFOLENBQWNPLEtBQWQsQ0FBb0JILEdBQXBCLENBQXdCLFVBQUNJLElBQUQsRUFBT0YsR0FBUDtBQUFBLDRCQUN2QixxRUFBQyw2Q0FBRDtBQUFnQixjQUFJLEVBQUVFLElBQXRCO0FBQTRCLHFCQUFXLEVBQUU7QUFBQSxtQkFBTSxJQUFOO0FBQUE7QUFBekMsV0FBV0YsR0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUR1QjtBQUFBLE9BQXhCLENBRkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBMUNGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBbUREOztLQXBEUVIsYTtBQXNETUEsNEVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL3VpL2FjdGl2ZVByb2plY3QuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCb3gsIFRleHQsIEZsZXggfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xuaW1wb3J0IFRvb2wgZnJvbSBcIi4vdG9vbFwiO1xuXG5mdW5jdGlvbiBBY3RpdmVQcm9qZWN0KHByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPEJveFxuICAgICAgdz1cIjEwMCVcIlxuICAgICAgYm9yZGVyUmFkaXVzPVwiMzZweFwiXG4gICAgICBib3JkZXJCb3R0b21MZWZ0UmFkaXVzPVwiMFwiXG4gICAgICBib3JkZXJUb3BSaWdodFJhZGl1cz1cIjBcIlxuICAgICAgYm9yZGVyQm90dG9tUmlnaHRSYWRpdXM9XCIwXCJcbiAgICAgIC8vIGJnR3JhZGllbnQ9XCJsaW5lYXIoMTM1ZGVnLCBncmF5LjEwMCAyMCUsIGdyYXkuMzAwKVwiXG4gICAgICBib3JkZXI9XCIycHggc29saWQgZ3JlZW4uMzAwXCJcbiAgICAgIHA9ezN9XG4gICAgICBkaXNwbGF5PVwiZmxleFwiXG4gICAgICBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCJcbiAgICAgIGFsaWduSXRlbXM9XCJmbGV4LXN0YXJ0XCJcbiAgICAgIG1iPXsyfVxuICAgICAgbXI9ezJ9XG4gICAgICBjb2xvcj1cImdyZWVuLjMwMFwiXG4gICAgICBmb250V2VpZ2h0PVwiNzAwXCJcbiAgICA+XG4gICAgICA8RmxleCBhbGlnbkl0ZW1zPVwiY2VudGVyXCIgbWI9ezR9PlxuICAgICAgICB7LyogPEF2YXRhclxuICAgICAgICAgIHNpemU9XCJsZ1wiXG4gICAgICAgICAgbmFtZT1cIktlbnQgRG9kZHNcIlxuICAgICAgICAgIHNyYz1cImh0dHBzOi8vYml0Lmx5L2tlbnQtYy1kb2Rkc1wiXG4gICAgICAgICAgbXI9ezR9XG4gICAgICAgIC8+ICovfVxuICAgICAgICA8VGV4dCB0ZXh0VHJhbnNmb3JtPVwidXBwZXJjYXNlXCIgZm9udFNpemU9XCIyNnB4XCI+XG4gICAgICAgICAge3Byb3BzLnByb2plY3QudGl0bGV9XG4gICAgICAgIDwvVGV4dD5cbiAgICAgIDwvRmxleD5cbiAgICAgIDxGbGV4IGZvbnRXZWlnaHQ9XCI3MDBcIiBkaXJlY3Rpb249XCJjb2x1bW5cIiBtYj17NH0+XG4gICAgICAgIDxUZXh0PkRlc2NyaXB0aW9uPC9UZXh0PlxuICAgICAgICA8VGV4dCBwbD17NH0gZm9udFdlaWdodD1cIjQwMFwiIGNvbG9yPVwid2hpdGVcIj5cbiAgICAgICAgICB7cHJvcHMucHJvamVjdC5kZXNjcmlwdGlvbn1cbiAgICAgICAgPC9UZXh0PlxuICAgICAgPC9GbGV4PlxuICAgICAgPEZsZXggZm9udFdlaWdodD1cIjcwMFwiIGRpcmVjdGlvbj1cImNvbHVtblwiIG1iPXs0fT5cbiAgICAgICAgPFRleHQ+TXkgcmVzcG9uc2liaWxpdGllczwvVGV4dD5cbiAgICAgICAge3Byb3BzLnByb2plY3QuZHV0aWVzLm1hcCgoZHV0eSwgaWR4KSA9PiAoXG4gICAgICAgICAgPFRleHQga2V5PXtpZHh9IHBsPXs0fSBmb250V2VpZ2h0PVwiNDAwXCIgY29sb3I9XCJ3aGl0ZVwiPlxuICAgICAgICAgICAge2R1dHl9XG4gICAgICAgICAgPC9UZXh0PlxuICAgICAgICApKX1cbiAgICAgIDwvRmxleD5cbiAgICAgIDxGbGV4IGZsZXhXcmFwPVwid3JhcFwiPlxuICAgICAgPFRleHQ+TXkgcmVzcG9uc2liaWxpdGllczwvVGV4dD5cbiAgICAgICAge3Byb3BzLnByb2plY3QudG9vbHMubWFwKCh0b29sLCBpZHgpID0+IChcbiAgICAgICAgICA8VG9vbCBrZXk9e2lkeH0gdG9vbD17dG9vbH0gaGFuZGxlQ2xpY2s9eygpID0+IG51bGx9IC8+XG4gICAgICAgICkpfVxuICAgICAgPC9GbGV4PlxuICAgIDwvQm94PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBBY3RpdmVQcm9qZWN0O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/ui/activeProject.js\n");

/***/ })

})