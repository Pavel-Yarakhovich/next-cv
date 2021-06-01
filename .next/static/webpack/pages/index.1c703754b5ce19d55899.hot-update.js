webpackHotUpdate_N_E("pages/index",{

/***/ "./components/projects.js":
/*!********************************!*\
  !*** ./components/projects.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _home_devpc_Documents_next_learn_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/esm/index.js\");\n/* harmony import */ var _ui_project__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ui/project */ \"./components/ui/project.js\");\n/* harmony import */ var _ui_activeProject__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ui/activeProject */ \"./components/ui/activeProject.js\");\n\n\n\nvar _jsxFileName = \"/home/devpc/Documents/next-learn/components/projects.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\nvar mockTools = [\"React\", \"Redux-Saga\", \"TypeScript\", \"Vue.js\", \"Next.js\", \"Angular\", \"React-Router\", \"JavaScript\", \"Svelte\"];\nvar mockProjects = [{\n  title: \"Test title\",\n  description: \"Since my very childhood I’ve always been passionate about creating something either useful, nice-looking or tasty. This passion corresponds with my hobbies: drawing and cooking. The creation process itself gives me a great pleasure, but even more pleasure comes with the realization that the results of my work bring someone benefit or joy.\",\n  duties: ['first duty', 'second duty', 'third duty'],\n  tools: mockTools\n}];\n\nfunction Projects(_ref) {\n  _s();\n\n  var _this = this;\n\n  var _ref$projects = _ref.projects,\n      projects = _ref$projects === void 0 ? mockProjects : _ref$projects;\n\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(projects[0]),\n      _React$useState2 = Object(_home_devpc_Documents_next_learn_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_React$useState, 2),\n      activeProject = _React$useState2[0],\n      setActiveProject = _React$useState2[1];\n\n  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(false),\n      _React$useState4 = Object(_home_devpc_Documents_next_learn_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_React$useState3, 2),\n      isNotified = _React$useState4[0],\n      setNotified = _React$useState4[1];\n\n  var ref = react__WEBPACK_IMPORTED_MODULE_2___default.a.useRef();\n\n  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(false),\n      _React$useState6 = Object(_home_devpc_Documents_next_learn_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_React$useState5, 2),\n      isHovered = _React$useState6[0],\n      setHovered = _React$useState6[1];\n\n  Object(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"useOutsideClick\"])({\n    ref: ref,\n    handler: function handler() {\n      return setHovered(false);\n    }\n  });\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"Flex\"], {\n    direction: \"column\",\n    onMouseEnter: function onMouseEnter() {\n      return setHovered(true);\n    },\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"Text\"], {\n      fontSize: [\"3xl\", null, \"4xl\"],\n      textAlign: \"left\",\n      mb: \"1.5rem\",\n      fontWeight: \"700\",\n      color: \"green.300\",\n      children: \"Projects\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"Flex\"], {\n      direction: \"column\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"Box\"], {\n        w: \"100%\",\n        pr: 4,\n        mb: \"1.5rem\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_ui_activeProject__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n          tool: activeProject\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 56,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 55,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"Flex\"], {\n        direction: \"row\",\n        flexWrap: \"wrap\",\n        justifyContent: \"start\",\n        position: \"relative\",\n        children: [projects // .filter((item) => item !== activeTool)\n        .map(function (item, idx) {\n          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_ui_project__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n            project: item,\n            handleClick: setActiveProject\n          }, idx, false, {\n            fileName: _jsxFileName,\n            lineNumber: 67,\n            columnNumber: 15\n          }, _this);\n        }), isHovered && !isNotified && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"Box\"], {\n          ref: ref,\n          position: \"absolute\",\n          w: \"160px\",\n          bottom: \"90%\",\n          left: \"40px\",\n          bg: \"yellow.500\",\n          fontSize: \"14px\",\n          fontWeight: \"400\",\n          display: \"flex\",\n          flexDirection: \"column\",\n          alignItems: \"center\",\n          textAlign: \"center\",\n          p: 2,\n          borderTopLeftRadius: \"12px\",\n          borderTopRightRadius: \"12px\",\n          borderBottomRightRadius: \"12px\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"Text\"], {\n            mb: 2,\n            children: \"Click to get more information.\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 88,\n            columnNumber: 15\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"Button\"], {\n            bg: \"none\",\n            border: \"1px solid white\",\n            onClick: function onClick() {\n              return setNotified(true);\n            },\n            children: \"Got it!\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 89,\n            columnNumber: 15\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 70,\n          columnNumber: 13\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 58,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 44,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Projects, \"VfqdUCSwEEqpBKWaDqUKUMvnkJI=\", false, function () {\n  return [_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"useOutsideClick\"]];\n});\n\n_c = Projects;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Projects);\n\nvar _c;\n\n$RefreshReg$(_c, \"Projects\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wcm9qZWN0cy5qcz8zNTRjIl0sIm5hbWVzIjpbIm1vY2tUb29scyIsIm1vY2tQcm9qZWN0cyIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJkdXRpZXMiLCJ0b29scyIsIlByb2plY3RzIiwicHJvamVjdHMiLCJSZWFjdCIsInVzZVN0YXRlIiwiYWN0aXZlUHJvamVjdCIsInNldEFjdGl2ZVByb2plY3QiLCJpc05vdGlmaWVkIiwic2V0Tm90aWZpZWQiLCJyZWYiLCJ1c2VSZWYiLCJpc0hvdmVyZWQiLCJzZXRIb3ZlcmVkIiwidXNlT3V0c2lkZUNsaWNrIiwiaGFuZGxlciIsIm1hcCIsIml0ZW0iLCJpZHgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBRUEsSUFBTUEsU0FBUyxHQUFHLENBQ2hCLE9BRGdCLEVBRWhCLFlBRmdCLEVBR2hCLFlBSGdCLEVBSWhCLFFBSmdCLEVBS2hCLFNBTGdCLEVBTWhCLFNBTmdCLEVBT2hCLGNBUGdCLEVBUWhCLFlBUmdCLEVBU2hCLFFBVGdCLENBQWxCO0FBWUEsSUFBTUMsWUFBWSxHQUFHLENBQ25CO0FBQ0VDLE9BQUssRUFBRSxZQURUO0FBRUVDLGFBQVcsRUFDVCxzVkFISjtBQUlFQyxRQUFNLEVBQUUsQ0FDTixZQURNLEVBRU4sYUFGTSxFQUdOLFlBSE0sQ0FKVjtBQVNFQyxPQUFLLEVBQUVMO0FBVFQsQ0FEbUIsQ0FBckI7O0FBY0EsU0FBU00sUUFBVCxPQUErQztBQUFBOztBQUFBOztBQUFBLDJCQUEzQkMsUUFBMkI7QUFBQSxNQUEzQkEsUUFBMkIsOEJBQWhCTixZQUFnQjs7QUFBQSx3QkFDSE8sNENBQUssQ0FBQ0MsUUFBTixDQUFlRixRQUFRLENBQUMsQ0FBRCxDQUF2QixDQURHO0FBQUE7QUFBQSxNQUN0Q0csYUFEc0M7QUFBQSxNQUN2QkMsZ0JBRHVCOztBQUFBLHlCQUVYSCw0Q0FBSyxDQUFDQyxRQUFOLENBQWUs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QUFBLFlBVkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUEyREQ7O0dBckVRUCxRO1VBS1BZLGdFOzs7S0FMT1osUTtBQXVFTUEsdUVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL3Byb2plY3RzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEZsZXgsIFRleHQsIEJveCwgQnV0dG9uLCB1c2VPdXRzaWRlQ2xpY2sgfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xuXG5pbXBvcnQgUHJvamVjdCBmcm9tICcuL3VpL3Byb2plY3QnO1xuaW1wb3J0IEFjdGl2ZVByb2plY3QgZnJvbSAnLi91aS9hY3RpdmVQcm9qZWN0JztcblxuY29uc3QgbW9ja1Rvb2xzID0gW1xuICBcIlJlYWN0XCIsXG4gIFwiUmVkdXgtU2FnYVwiLFxuICBcIlR5cGVTY3JpcHRcIixcbiAgXCJWdWUuanNcIixcbiAgXCJOZXh0LmpzXCIsXG4gIFwiQW5ndWxhclwiLFxuICBcIlJlYWN0LVJvdXRlclwiLFxuICBcIkphdmFTY3JpcHRcIixcbiAgXCJTdmVsdGVcIixcbl07XG5cbmNvbnN0IG1vY2tQcm9qZWN0cyA9IFtcbiAge1xuICAgIHRpdGxlOiBcIlRlc3QgdGl0bGVcIixcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgIFwiU2luY2UgbXkgdmVyeSBjaGlsZGhvb2QgSeKAmXZlIGFsd2F5cyBiZWVuIHBhc3Npb25hdGUgYWJvdXQgY3JlYXRpbmcgc29tZXRoaW5nIGVpdGhlciB1c2VmdWwsIG5pY2UtbG9va2luZyBvciB0YXN0eS4gVGhpcyBwYXNzaW9uIGNvcnJlc3BvbmRzIHdpdGggbXkgaG9iYmllczogZHJhd2luZyBhbmQgY29va2luZy4gVGhlIGNyZWF0aW9uIHByb2Nlc3MgaXRzZWxmIGdpdmVzIG1lIGEgZ3JlYXQgcGxlYXN1cmUsIGJ1dCBldmVuIG1vcmUgcGxlYXN1cmUgY29tZXMgd2l0aCB0aGUgcmVhbGl6YXRpb24gdGhhdCB0aGUgcmVzdWx0cyBvZiBteSB3b3JrIGJyaW5nIHNvbWVvbmUgYmVuZWZpdCBvciBqb3kuXCIsXG4gICAgZHV0aWVzOiBbXG4gICAgICAnZmlyc3QgZHV0eScsXG4gICAgICAnc2Vjb25kIGR1dHknLFxuICAgICAgJ3RoaXJkIGR1dHknLFxuICAgIF0sXG4gICAgdG9vbHM6IG1vY2tUb29scyxcbiAgfSxcbl07XG5cbmZ1bmN0aW9uIFByb2plY3RzKHsgcHJvamVjdHMgPSBtb2NrUHJvamVjdHMgfSkge1xuICBjb25zdCBbYWN0aXZlUHJvamVjdCwgc2V0QWN0aXZlUHJvamVjdF0gPSBSZWFjdC51c2VTdGF0ZShwcm9qZWN0c1swXSk7XG4gIGNvbnN0IFtpc05vdGlmaWVkLCBzZXROb3RpZmllZF0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IHJlZiA9IFJlYWN0LnVzZVJlZigpO1xuICBjb25zdCBbaXNIb3ZlcmVkLCBzZXRIb3ZlcmVkXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcbiAgdXNlT3V0c2lkZUNsaWNrKHtcbiAgICByZWY6IHJlZixcbiAgICBoYW5kbGVyOiAoKSA9PiBzZXRIb3ZlcmVkKGZhbHNlKSxcbiAgfSk7XG5cbiAgcmV0dXJuIChcbiAgICA8RmxleCBkaXJlY3Rpb249XCJjb2x1bW5cIiBvbk1vdXNlRW50ZXI9eygpID0+IHNldEhvdmVyZWQodHJ1ZSl9PlxuICAgICAgPFRleHRcbiAgICAgICAgZm9udFNpemU9e1tcIjN4bFwiLCBudWxsLCBcIjR4bFwiXX1cbiAgICAgICAgdGV4dEFsaWduPVwibGVmdFwiXG4gICAgICAgIG1iPVwiMS41cmVtXCJcbiAgICAgICAgZm9udFdlaWdodD1cIjcwMFwiXG4gICAgICAgIGNvbG9yPVwiZ3JlZW4uMzAwXCJcbiAgICAgID5cbiAgICAgICAgUHJvamVjdHNcbiAgICAgIDwvVGV4dD5cbiAgICAgIDxGbGV4IGRpcmVjdGlvbj1cImNvbHVtblwiPlxuICAgICAgICA8Qm94IHc9XCIxMDAlXCIgcHI9ezR9IG1iPVwiMS41cmVtXCI+XG4gICAgICAgICAgPEFjdGl2ZVByb2plY3QgdG9vbD17YWN0aXZlUHJvamVjdH0gLz5cbiAgICAgICAgPC9Cb3g+XG4gICAgICAgIDxGbGV4XG4gICAgICAgICAgZGlyZWN0aW9uPVwicm93XCJcbiAgICAgICAgICBmbGV4V3JhcD1cIndyYXBcIlxuICAgICAgICAgIGp1c3RpZnlDb250ZW50PVwic3RhcnRcIlxuICAgICAgICAgIHBvc2l0aW9uPVwicmVsYXRpdmVcIlxuICAgICAgICA+XG4gICAgICAgICAge3Byb2plY3RzXG4gICAgICAgICAgICAvLyAuZmlsdGVyKChpdGVtKSA9PiBpdGVtICE9PSBhY3RpdmVUb29sKVxuICAgICAgICAgICAgLm1hcCgoaXRlbSwgaWR4KSA9PiAoXG4gICAgICAgICAgICAgIDxQcm9qZWN0IGtleT17aWR4fSBwcm9qZWN0PXtpdGVtfSBoYW5kbGVDbGljaz17c2V0QWN0aXZlUHJvamVjdH0gLz5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIHtpc0hvdmVyZWQgJiYgIWlzTm90aWZpZWQgJiYgKFxuICAgICAgICAgICAgPEJveFxuICAgICAgICAgICAgICByZWY9e3JlZn1cbiAgICAgICAgICAgICAgcG9zaXRpb249XCJhYnNvbHV0ZVwiXG4gICAgICAgICAgICAgIHc9XCIxNjBweFwiXG4gICAgICAgICAgICAgIGJvdHRvbT1cIjkwJVwiXG4gICAgICAgICAgICAgIGxlZnQ9XCI0MHB4XCJcbiAgICAgICAgICAgICAgYmc9XCJ5ZWxsb3cuNTAwXCJcbiAgICAgICAgICAgICAgZm9udFNpemU9XCIxNHB4XCJcbiAgICAgICAgICAgICAgZm9udFdlaWdodD1cIjQwMFwiXG4gICAgICAgICAgICAgIGRpc3BsYXk9XCJmbGV4XCJcbiAgICAgICAgICAgICAgZmxleERpcmVjdGlvbj1cImNvbHVtblwiXG4gICAgICAgICAgICAgIGFsaWduSXRlbXM9XCJjZW50ZXJcIlxuICAgICAgICAgICAgICB0ZXh0QWxpZ249XCJjZW50ZXJcIlxuICAgICAgICAgICAgICBwPXsyfVxuICAgICAgICAgICAgICBib3JkZXJUb3BMZWZ0UmFkaXVzPVwiMTJweFwiXG4gICAgICAgICAgICAgIGJvcmRlclRvcFJpZ2h0UmFkaXVzPVwiMTJweFwiXG4gICAgICAgICAgICAgIGJvcmRlckJvdHRvbVJpZ2h0UmFkaXVzPVwiMTJweFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxUZXh0IG1iPXsyfT5DbGljayB0byBnZXQgbW9yZSBpbmZvcm1hdGlvbi48L1RleHQ+XG4gICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICBiZz1cIm5vbmVcIlxuICAgICAgICAgICAgICAgIGJvcmRlcj1cIjFweCBzb2xpZCB3aGl0ZVwiXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0Tm90aWZpZWQodHJ1ZSl9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBHb3QgaXQhXG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9GbGV4PlxuICAgICAgPC9GbGV4PlxuICAgIDwvRmxleD5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdHM7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/projects.js\n");

/***/ })

})