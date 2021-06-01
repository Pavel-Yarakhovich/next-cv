webpackHotUpdate_N_E("pages/index",{

/***/ "./components/projects.js":
/*!********************************!*\
  !*** ./components/projects.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _home_devpc_Documents_next_learn_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/esm/index.js\");\n/* harmony import */ var _ui_project__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ui/project */ \"./components/ui/project.js\");\n\n\n\nvar _jsxFileName = \"/home/devpc/Documents/next-learn/components/projects.js\",\n    _s = $RefreshSig$();\n\n\n\n\nvar mockTools = [\"React\", \"Redux-Saga\", \"TypeScript\", \"Vue.js\", \"Next.js\", \"Angular\", \"React-Router\", \"JavaScript\", \"Svelte\"];\nvar mockProjects = [{\n  title: \"Test title\",\n  description: \"Since my very childhood I’ve always been passionate about creating something either useful, nice-looking or tasty. This passion corresponds with my hobbies: drawing and cooking. The creation process itself gives me a great pleasure, but even more pleasure comes with the realization that the results of my work bring someone benefit or joy.\",\n  duties: ['first duty', 'second duty', 'third duty'],\n  tools: mockTools\n}];\n\nfunction Projects(_ref) {\n  _s();\n\n  var _this = this;\n\n  var _ref$projects = _ref.projects,\n      projects = _ref$projects === void 0 ? mockProjects : _ref$projects;\n\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(projects[0]),\n      _React$useState2 = Object(_home_devpc_Documents_next_learn_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_React$useState, 2),\n      activeProject = _React$useState2[0],\n      setActiveProject = _React$useState2[1];\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"Flex\"], {\n    direction: \"column\",\n    onMouseEnter: function onMouseEnter() {\n      return setHovered(true);\n    },\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"Text\"], {\n      fontSize: [\"3xl\", null, \"4xl\"],\n      textAlign: \"left\",\n      mb: \"1.5rem\",\n      fontWeight: \"700\",\n      color: \"green.300\",\n      children: \"Projects\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"Flex\"], {\n      direction: \"column\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"Box\"], {\n        w: \"100%\",\n        pr: 4,\n        mb: \"1.5rem\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(ActiveTool, {\n          tool: activeTool\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 48,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 47,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"Flex\"], {\n        direction: \"row\",\n        flexWrap: \"wrap\",\n        justifyContent: \"start\",\n        position: \"relative\",\n        children: [projects // .filter((item) => item !== activeTool)\n        .map(function (item, idx) {\n          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_ui_project__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n            project: item,\n            handleClick: setActiveProject\n          }, idx, false, {\n            fileName: _jsxFileName,\n            lineNumber: 59,\n            columnNumber: 15\n          }, _this);\n        }), isHovered && !isNotified && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"Box\"], {\n          ref: ref,\n          position: \"absolute\",\n          w: \"160px\",\n          bottom: \"90%\",\n          left: \"40px\",\n          bg: \"yellow.500\",\n          fontSize: \"14px\",\n          fontWeight: \"400\",\n          display: \"flex\",\n          flexDirection: \"column\",\n          alignItems: \"center\",\n          textAlign: \"center\",\n          p: 2,\n          borderTopLeftRadius: \"12px\",\n          borderTopRightRadius: \"12px\",\n          borderBottomRightRadius: \"12px\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"Text\"], {\n            mb: 2,\n            children: \"Click to get more information.\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 80,\n            columnNumber: 15\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"Button\"], {\n            bg: \"none\",\n            border: \"1px solid white\",\n            onClick: function onClick() {\n              return setNotified(true);\n            },\n            children: \"Got it!\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 81,\n            columnNumber: 15\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 62,\n          columnNumber: 13\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 50,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 36,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Projects, \"+Qzm79/wLxYoOU/qGcuB+iTBpOY=\");\n\n_c = Projects;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Projects);\n\nvar _c;\n\n$RefreshReg$(_c, \"Projects\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wcm9qZWN0cy5qcz8zNTRjIl0sIm5hbWVzIjpbIm1vY2tUb29scyIsIm1vY2tQcm9qZWN0cyIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJkdXRpZXMiLCJ0b29scyIsIlByb2plY3RzIiwicHJvamVjdHMiLCJSZWFjdCIsInVzZVN0YXRlIiwiYWN0aXZlUHJvamVjdCIsInNldEFjdGl2ZVByb2plY3QiLCJzZXRIb3ZlcmVkIiwiYWN0aXZlVG9vbCIsIm1hcCIsIml0ZW0iLCJpZHgiLCJpc0hvdmVyZWQiLCJpc05vdGlmaWVkIiwicmVmIiwic2V0Tm90aWZpZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBRUEsSUFBTUEsU0FBUyxHQUFHLENBQ2hCLE9BRGdCLEVBRWhCLFlBRmdCLEVBR2hCLFlBSGdCLEVBSWhCLFFBSmdCLEVBS2hCLFNBTGdCLEVBTWhCLFNBTmdCLEVBT2hCLGNBUGdCLEVBUWhCLFlBUmdCLEVBU2hCLFFBVGdCLENBQWxCO0FBWUEsSUFBTUMsWUFBWSxHQUFHLENBQ25CO0FBQ0VDLE9BQUssRUFBRSxZQURUO0FBRUVDLGFBQVcsRUFDVCxzVkFISjtBQUlFQyxRQUFNLEVBQUUsQ0FDTixZQURNLEVBRU4sYUFGTSxFQUdOLFlBSE0sQ0FKVjtBQVNFQyxPQUFLLEVBQUVMO0FBVFQsQ0FEbUIsQ0FBckI7O0FBY0EsU0FBU00sUUFBVCxPQUErQztBQUFBOztBQUFBOztBQUFBLDJCQUEzQkMsUUFBMkI7QUFBQSxNQUEzQkEsUUFBMkIsOEJBQWhCTixZQUFnQjs7QUFBQSx3QkFDSE8sNENBQUssQ0FBQ0MsUUFBTixDQUFlRixRQUFRLENBQUMsQ0FBRCxDQUF2QixDQURHO0FBQUE7QUFBQSxNQUN0Q0csYUFEc0M7QUFBQSxNQUN2QkMsZ0JBRHVCOztBQUc3QyxzQkFDRSxxRUFBQyxxREFBRDtBQUFNLGFBQVMsRUFBQyxRQUFoQjtBQUF5QixnQkFBWSxFQUFFO0FBQUEsYUFBTUMsVUFBVSxDQUFDLElBQUQsQ0FBaEI7QUFBQSxLQUF2QztBQUFBLDRCQUNFLHFFQUFDLHFEQUFEO0FBQ0UsY0FBUSxFQUFFLENBQUMsS0FBRCxFQUFRLElBQVIsRUFBYyxLQUFkLENBRFo7QUFFRSxlQUFTLEVBQUMsTUFGWjtBQUdFLFFBQUUsRUFBQyxRQUhMO0FBSUUsZ0JBQVUsRUFBQyxLQUpiO0FBS0UsV0FBSyxFQUFDLFdBTFI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQVVFLHFFQUFDLHFEQUFEO0FBQU0sZUFBUyxFQUFDLFFBQWhCO0FBQUEsOEJBQ0UscUVBQUMsb0RBQUQ7QUFBSyxTQUFDLEVBQUMsTUFBUDtBQUFjLFVBQUUsRUFBRSxDQUFsQjtBQUFxQixVQUFFLEVBQUMsUUFBeEI7QUFBQSwrQkFDRSxxRUFBQyxVQUFEO0FBQVksY0FBSSxFQUFFQztBQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBSUUscUVBQUMscURBQUQ7QUFDRSxpQkFBUyxFQUFDLEtBRFo7QUFFRSxnQkFBUSxFQUFDLE1BRlg7QUFHRSxzQkFBYyxFQUFDLE9BSGpCO0FBSUUsZ0JBQVEsRUFBQyxVQUpYO0FBQUEsbUJBTUdOLFFBQVEsQ0FDUDtBQURPLFNBRU5PLEdBRkYsQ0FFTSxVQUFDQyxJQUFELEVBQU9DLEdBQVA7QUFBQSw4QkFDSCxxRUFBQyxtREFBRDtBQUFtQixtQkFBTyxFQUFFRCxJQUE1QjtBQUFrQyx1QkFBVyxFQUFFSjtBQUEvQyxhQUFjSyxHQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREc7QUFBQSxTQUZOLENBTkgsRUFXR0MsU0FBUyxJQUFJLENBQUNDLFVBQWQsaUJBQ0MscUVBQUMsb0RBQUQ7QUFDRSxhQUFHLEVBQUVDLEdBRFA7QUFFRSxrQkFBUSxFQUFDLFVBRlg7QUFHRSxXQUFDLEVBQUMsT0FISjtBQUlFLGdCQUFNLEVBQUMsS0FKVDtBQUtFLGNBQUksRUFBQyxNQUxQO0FBTUUsWUFBRSxFQUFDLFlBTkw7QUFPRSxrQkFBUSxFQUFDLE1BUFg7QUFRRSxvQkFBVSxFQUFDLEtBUmI7QUFTRSxpQkFBTyxFQUFDLE1BVFY7QUFVRSx1QkFBYSxFQUFDLFFBVmhCO0FBV0Usb0JBQVUsRUFBQyxRQVhiO0FBWUUsbUJBQVMsRUFBQyxRQVpaO0FBYUUsV0FBQyxFQUFFLENBYkw7QUFjRSw2QkFBbUIsRUFBQyxNQWR0QjtBQWVFLDhCQUFvQixFQUFDLE1BZnZCO0FBZ0JFLGlDQUF1QixFQUFDLE1BaEIxQjtBQUFBLGtDQWtCRSxxRUFBQyxxREFBRDtBQUFNLGNBQUUsRUFBRSxDQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQWxCRixlQW1CRSxxRUFBQyx1REFBRDtBQUNFLGNBQUUsRUFBQyxNQURMO0FBRUUsa0JBQU0sRUFBQyxpQkFGVDtBQUdFLG1CQUFPLEVBQUU7QUFBQSxxQkFBTUMsV0FBVyxDQUFDLElBQUQsQ0FBakI7QUFBQSxhQUhYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQW5CRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBWko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBVkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUEyREQ7O0dBOURRZCxROztLQUFBQSxRO0FBZ0VNQSx1RUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvcHJvamVjdHMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgRmxleCwgVGV4dCwgQm94LCBCdXR0b24gfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xuXG5pbXBvcnQgUHJvamVjdCBmcm9tICcuL3VpL3Byb2plY3QnO1xuXG5jb25zdCBtb2NrVG9vbHMgPSBbXG4gIFwiUmVhY3RcIixcbiAgXCJSZWR1eC1TYWdhXCIsXG4gIFwiVHlwZVNjcmlwdFwiLFxuICBcIlZ1ZS5qc1wiLFxuICBcIk5leHQuanNcIixcbiAgXCJBbmd1bGFyXCIsXG4gIFwiUmVhY3QtUm91dGVyXCIsXG4gIFwiSmF2YVNjcmlwdFwiLFxuICBcIlN2ZWx0ZVwiLFxuXTtcblxuY29uc3QgbW9ja1Byb2plY3RzID0gW1xuICB7XG4gICAgdGl0bGU6IFwiVGVzdCB0aXRsZVwiLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgXCJTaW5jZSBteSB2ZXJ5IGNoaWxkaG9vZCBJ4oCZdmUgYWx3YXlzIGJlZW4gcGFzc2lvbmF0ZSBhYm91dCBjcmVhdGluZyBzb21ldGhpbmcgZWl0aGVyIHVzZWZ1bCwgbmljZS1sb29raW5nIG9yIHRhc3R5LiBUaGlzIHBhc3Npb24gY29ycmVzcG9uZHMgd2l0aCBteSBob2JiaWVzOiBkcmF3aW5nIGFuZCBjb29raW5nLiBUaGUgY3JlYXRpb24gcHJvY2VzcyBpdHNlbGYgZ2l2ZXMgbWUgYSBncmVhdCBwbGVhc3VyZSwgYnV0IGV2ZW4gbW9yZSBwbGVhc3VyZSBjb21lcyB3aXRoIHRoZSByZWFsaXphdGlvbiB0aGF0IHRoZSByZXN1bHRzIG9mIG15IHdvcmsgYnJpbmcgc29tZW9uZSBiZW5lZml0IG9yIGpveS5cIixcbiAgICBkdXRpZXM6IFtcbiAgICAgICdmaXJzdCBkdXR5JyxcbiAgICAgICdzZWNvbmQgZHV0eScsXG4gICAgICAndGhpcmQgZHV0eScsXG4gICAgXSxcbiAgICB0b29sczogbW9ja1Rvb2xzLFxuICB9LFxuXTtcblxuZnVuY3Rpb24gUHJvamVjdHMoeyBwcm9qZWN0cyA9IG1vY2tQcm9qZWN0cyB9KSB7XG4gIGNvbnN0IFthY3RpdmVQcm9qZWN0LCBzZXRBY3RpdmVQcm9qZWN0XSA9IFJlYWN0LnVzZVN0YXRlKHByb2plY3RzWzBdKTtcblxuICByZXR1cm4gKFxuICAgIDxGbGV4IGRpcmVjdGlvbj1cImNvbHVtblwiIG9uTW91c2VFbnRlcj17KCkgPT4gc2V0SG92ZXJlZCh0cnVlKX0+XG4gICAgICA8VGV4dFxuICAgICAgICBmb250U2l6ZT17W1wiM3hsXCIsIG51bGwsIFwiNHhsXCJdfVxuICAgICAgICB0ZXh0QWxpZ249XCJsZWZ0XCJcbiAgICAgICAgbWI9XCIxLjVyZW1cIlxuICAgICAgICBmb250V2VpZ2h0PVwiNzAwXCJcbiAgICAgICAgY29sb3I9XCJncmVlbi4zMDBcIlxuICAgICAgPlxuICAgICAgICBQcm9qZWN0c1xuICAgICAgPC9UZXh0PlxuICAgICAgPEZsZXggZGlyZWN0aW9uPVwiY29sdW1uXCI+XG4gICAgICAgIDxCb3ggdz1cIjEwMCVcIiBwcj17NH0gbWI9XCIxLjVyZW1cIj5cbiAgICAgICAgICA8QWN0aXZlVG9vbCB0b29sPXthY3RpdmVUb29sfSAvPlxuICAgICAgICA8L0JveD5cbiAgICAgICAgPEZsZXhcbiAgICAgICAgICBkaXJlY3Rpb249XCJyb3dcIlxuICAgICAgICAgIGZsZXhXcmFwPVwid3JhcFwiXG4gICAgICAgICAganVzdGlmeUNvbnRlbnQ9XCJzdGFydFwiXG4gICAgICAgICAgcG9zaXRpb249XCJyZWxhdGl2ZVwiXG4gICAgICAgID5cbiAgICAgICAgICB7cHJvamVjdHNcbiAgICAgICAgICAgIC8vIC5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0gIT09IGFjdGl2ZVRvb2wpXG4gICAgICAgICAgICAubWFwKChpdGVtLCBpZHgpID0+IChcbiAgICAgICAgICAgICAgPFByb2plY3Qga2V5PXtpZHh9IHByb2plY3Q9e2l0ZW19IGhhbmRsZUNsaWNrPXtzZXRBY3RpdmVQcm9qZWN0fSAvPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAge2lzSG92ZXJlZCAmJiAhaXNOb3RpZmllZCAmJiAoXG4gICAgICAgICAgICA8Qm94XG4gICAgICAgICAgICAgIHJlZj17cmVmfVxuICAgICAgICAgICAgICBwb3NpdGlvbj1cImFic29sdXRlXCJcbiAgICAgICAgICAgICAgdz1cIjE2MHB4XCJcbiAgICAgICAgICAgICAgYm90dG9tPVwiOTAlXCJcbiAgICAgICAgICAgICAgbGVmdD1cIjQwcHhcIlxuICAgICAgICAgICAgICBiZz1cInllbGxvdy41MDBcIlxuICAgICAgICAgICAgICBmb250U2l6ZT1cIjE0cHhcIlxuICAgICAgICAgICAgICBmb250V2VpZ2h0PVwiNDAwXCJcbiAgICAgICAgICAgICAgZGlzcGxheT1cImZsZXhcIlxuICAgICAgICAgICAgICBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCJcbiAgICAgICAgICAgICAgYWxpZ25JdGVtcz1cImNlbnRlclwiXG4gICAgICAgICAgICAgIHRleHRBbGlnbj1cImNlbnRlclwiXG4gICAgICAgICAgICAgIHA9ezJ9XG4gICAgICAgICAgICAgIGJvcmRlclRvcExlZnRSYWRpdXM9XCIxMnB4XCJcbiAgICAgICAgICAgICAgYm9yZGVyVG9wUmlnaHRSYWRpdXM9XCIxMnB4XCJcbiAgICAgICAgICAgICAgYm9yZGVyQm90dG9tUmlnaHRSYWRpdXM9XCIxMnB4XCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPFRleHQgbWI9ezJ9PkNsaWNrIHRvIGdldCBtb3JlIGluZm9ybWF0aW9uLjwvVGV4dD5cbiAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgIGJnPVwibm9uZVwiXG4gICAgICAgICAgICAgICAgYm9yZGVyPVwiMXB4IHNvbGlkIHdoaXRlXCJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXROb3RpZmllZCh0cnVlKX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIEdvdCBpdCFcbiAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICApfVxuICAgICAgICA8L0ZsZXg+XG4gICAgICA8L0ZsZXg+XG4gICAgPC9GbGV4PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0cztcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/projects.js\n");

/***/ }),

/***/ "./components/ui/project.js":
/*!**********************************!*\
  !*** ./components/ui/project.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/esm/index.js\");\n\nvar _jsxFileName = \"/home/devpc/Documents/next-learn/components/ui/project.js\";\n\n\n\nfunction Project(props) {\n  var _this = this;\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Box\"], {\n    bgGradient: \"linear(to-r, gray.100, gray.200)\",\n    borderRadius: \"36px\",\n    p: 3,\n    display: \"flex\",\n    flexDirection: \"column\",\n    alignItems: \"center\",\n    mb: 2,\n    mr: 2,\n    color: \"white\",\n    fontWeight: \"700\",\n    onClick: function onClick() {\n      return props.handleClick(props.project);\n    },\n    _hover: {\n      cursor: \"pointer\",\n      color: \"green.200\",\n      transition: \"all 250ms ease\"\n    },\n    position: \"relative\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Text\"], {\n      textTransform: \"uppercase\",\n      children: props.tool\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Flex\"], {\n      children: props.project.tools.map(function (tool) {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Avatar\"], {\n          size: \"sm\",\n          name: \"Kent Dodds\",\n          src: \"https://bit.ly/kent-c-dodds\",\n          mr: 4,\n          mb: 4\n        }, tool, false, {\n          fileName: _jsxFileName,\n          lineNumber: 28,\n          columnNumber: 11\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 6,\n    columnNumber: 5\n  }, this);\n}\n\n_c = Project;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Project);\n\nvar _c;\n\n$RefreshReg$(_c, \"Project\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy91aS9wcm9qZWN0LmpzPzMzN2YiXSwibmFtZXMiOlsiUHJvamVjdCIsInByb3BzIiwiaGFuZGxlQ2xpY2siLCJwcm9qZWN0IiwiY3Vyc29yIiwiY29sb3IiLCJ0cmFuc2l0aW9uIiwidG9vbCIsInRvb2xzIiwibWFwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsU0FBU0EsT0FBVCxDQUFpQkMsS0FBakIsRUFBd0I7QUFBQTs7QUFDdEIsc0JBQ0UscUVBQUMsb0RBQUQ7QUFDRSxjQUFVLEVBQUMsa0NBRGI7QUFFRSxnQkFBWSxFQUFDLE1BRmY7QUFHRSxLQUFDLEVBQUUsQ0FITDtBQUlFLFdBQU8sRUFBQyxNQUpWO0FBS0UsaUJBQWEsRUFBQyxRQUxoQjtBQU1FLGNBQVUsRUFBQyxRQU5iO0FBT0UsTUFBRSxFQUFFLENBUE47QUFRRSxNQUFFLEVBQUUsQ0FSTjtBQVNFLFNBQUssRUFBQyxPQVRSO0FBVUUsY0FBVSxFQUFDLEtBVmI7QUFXRSxXQUFPLEVBQUU7QUFBQSxhQUFNQSxLQUFLLENBQUNDLFdBQU4sQ0FBa0JELEtBQUssQ0FBQ0UsT0FBeEIsQ0FBTjtBQUFBLEtBWFg7QUFZRSxVQUFNLEVBQUU7QUFDTkMsWUFBTSxFQUFFLFNBREY7QUFFTkMsV0FBSyxFQUFFLFdBRkQ7QUFHTkMsZ0JBQVUsRUFBRTtBQUhOLEtBWlY7QUFpQkUsWUFBUSxFQUFDLFVBakJYO0FBQUEsNEJBbUJFLHFFQUFDLHFEQUFEO0FBQU0sbUJBQWEsRUFBQyxXQUFwQjtBQUFBLGdCQUFpQ0wsS0FBSyxDQUFDTTtBQUF2QztBQUFBO0FBQUE7QUFBQTtBQUFBLFlBbkJGLGVBb0JFLHFFQUFDLHFEQUFEO0FBQUEsZ0JBQ0dOLEtBQUssQ0FBQ0UsT0FBTixDQUFjSyxLQUFkLENBQW9CQyxHQUFwQixDQUF3QixVQUFDRixJQUFEO0FBQUEsNEJBQ3ZCLHFFQUFDLHVEQUFEO0FBRUUsY0FBSSxFQUFDLElBRlA7QUFHRSxjQUFJLEVBQUMsWUFIUDtBQUlFLGFBQUcsRUFBQyw2QkFKTjtBQUtFLFlBQUUsRUFBRSxDQUxOO0FBTUUsWUFBRSxFQUFFO0FBTk4sV0FDT0EsSUFEUDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUR1QjtBQUFBLE9BQXhCO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXBCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQW1DRDs7S0FwQ1FQLE87QUFzQ01BLHNFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy91aS9wcm9qZWN0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQm94LCBBdmF0YXIsIFRleHQsIEZsZXggfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xuXG5mdW5jdGlvbiBQcm9qZWN0KHByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPEJveFxuICAgICAgYmdHcmFkaWVudD1cImxpbmVhcih0by1yLCBncmF5LjEwMCwgZ3JheS4yMDApXCJcbiAgICAgIGJvcmRlclJhZGl1cz1cIjM2cHhcIlxuICAgICAgcD17M31cbiAgICAgIGRpc3BsYXk9XCJmbGV4XCJcbiAgICAgIGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIlxuICAgICAgYWxpZ25JdGVtcz1cImNlbnRlclwiXG4gICAgICBtYj17Mn1cbiAgICAgIG1yPXsyfVxuICAgICAgY29sb3I9XCJ3aGl0ZVwiXG4gICAgICBmb250V2VpZ2h0PVwiNzAwXCJcbiAgICAgIG9uQ2xpY2s9eygpID0+IHByb3BzLmhhbmRsZUNsaWNrKHByb3BzLnByb2plY3QpfVxuICAgICAgX2hvdmVyPXt7XG4gICAgICAgIGN1cnNvcjogXCJwb2ludGVyXCIsXG4gICAgICAgIGNvbG9yOiBcImdyZWVuLjIwMFwiLFxuICAgICAgICB0cmFuc2l0aW9uOiBcImFsbCAyNTBtcyBlYXNlXCIsXG4gICAgICB9fVxuICAgICAgcG9zaXRpb249XCJyZWxhdGl2ZVwiXG4gICAgPlxuICAgICAgPFRleHQgdGV4dFRyYW5zZm9ybT1cInVwcGVyY2FzZVwiPntwcm9wcy50b29sfTwvVGV4dD5cbiAgICAgIDxGbGV4PlxuICAgICAgICB7cHJvcHMucHJvamVjdC50b29scy5tYXAoKHRvb2wpID0+IChcbiAgICAgICAgICA8QXZhdGFyXG4gICAgICAgICAgICBrZXk9e3Rvb2x9XG4gICAgICAgICAgICBzaXplPVwic21cIlxuICAgICAgICAgICAgbmFtZT1cIktlbnQgRG9kZHNcIlxuICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly9iaXQubHkva2VudC1jLWRvZGRzXCJcbiAgICAgICAgICAgIG1yPXs0fVxuICAgICAgICAgICAgbWI9ezR9XG4gICAgICAgICAgLz5cbiAgICAgICAgKSl9XG4gICAgICA8L0ZsZXg+XG4gICAgPC9Cb3g+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb2plY3Q7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/ui/project.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/esm/index.js\");\n/* harmony import */ var _components_leftColumn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/leftColumn */ \"./components/leftColumn.js\");\n/* harmony import */ var _components_presentation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/presentation */ \"./components/presentation.js\");\n/* harmony import */ var _components_toolkit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/toolkit */ \"./components/toolkit.js\");\n/* harmony import */ var _components_projects__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/projects */ \"./components/projects.js\");\n\nvar _jsxFileName = \"/home/devpc/Documents/next-learn/pages/index.js\";\n\n\n\n\n\n\n\n\nfunction HomePage(props) {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react__WEBPACK_IMPORTED_MODULE_1__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"title\", {\n        children: \"React Meetups\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 16,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n        name: \"description\",\n        content: \"Test meta description.\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 17,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"Flex\"], {\n      color: \"white\",\n      justifySelf: \"center\",\n      minHeight: \"70vh\",\n      direction: [\"column\", null, \"row\"],\n      mb: 5,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_leftColumn__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 27,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_presentation__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_toolkit__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 14,\n    columnNumber: 5\n  }, this);\n} // export async function getServerSideProps(context) {\n//   const req = context.req;\n//   const res = context.res;\n//   // fetch data from an API\n//   return {\n//     props: {\n//       meetups: MOCK_MEETUP,\n//     },\n//   };\n// }\n// getStaticProps function is called before HomePage function\n// never executes on the client\n\n\n_c = HomePage;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);\n\nvar _c;\n\n$RefreshReg$(_c, \"HomePage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJIb21lUGFnZSIsInByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxRQUFULENBQWtCQyxLQUFsQixFQUF5QjtBQUN2QixzQkFDRSxxRUFBQyw4Q0FBRDtBQUFBLDRCQUNFLHFFQUFDLGdEQUFEO0FBQUEsOEJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUVFO0FBQU0sWUFBSSxFQUFDLGFBQVg7QUFBeUIsZUFBTyxFQUFDO0FBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQU1FLHFFQUFDLHFEQUFEO0FBQ0UsV0FBSyxFQUFDLE9BRFI7QUFFRSxpQkFBVyxFQUFDLFFBRmQ7QUFHRSxlQUFTLEVBQUMsTUFIWjtBQUlFLGVBQVMsRUFBRSxDQUFDLFFBQUQsRUFBVyxJQUFYLEVBQWlCLEtBQWpCLENBSmI7QUFLRSxRQUFFLEVBQUUsQ0FMTjtBQUFBLDhCQU9FLHFFQUFDLDhEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FQRixlQVFFLHFFQUFDLGdFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FSRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFORixlQWlCRSxxRUFBQywyREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBakJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBcUJELEMsQ0FFRDtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7OztLQXJDU0QsUTs7QUFnRU1BLHVFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGcmFnbWVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IHsgRmxleCB9IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XG5cbmltcG9ydCB7IE1vbmdvQ2xpZW50IH0gZnJvbSBcIm1vbmdvZGJcIjtcblxuaW1wb3J0IExlZnRDb2x1bW4gZnJvbSBcIi4uL2NvbXBvbmVudHMvbGVmdENvbHVtblwiO1xuaW1wb3J0IFByZXNlbnRhdGlvbiBmcm9tIFwiLi4vY29tcG9uZW50cy9wcmVzZW50YXRpb25cIjtcbmltcG9ydCBUb29sa2l0IGZyb20gXCIuLi9jb21wb25lbnRzL3Rvb2xraXRcIjtcbmltcG9ydCBQcm9qZWN0cyBmcm9tIFwiLi4vY29tcG9uZW50cy9wcm9qZWN0c1wiXG5cbmZ1bmN0aW9uIEhvbWVQYWdlKHByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPEZyYWdtZW50PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5SZWFjdCBNZWV0dXBzPC90aXRsZT5cbiAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIlRlc3QgbWV0YSBkZXNjcmlwdGlvbi5cIiAvPlxuICAgICAgPC9IZWFkPlxuXG4gICAgICA8RmxleFxuICAgICAgICBjb2xvcj1cIndoaXRlXCJcbiAgICAgICAganVzdGlmeVNlbGY9XCJjZW50ZXJcIlxuICAgICAgICBtaW5IZWlnaHQ9XCI3MHZoXCJcbiAgICAgICAgZGlyZWN0aW9uPXtbXCJjb2x1bW5cIiwgbnVsbCwgXCJyb3dcIl19XG4gICAgICAgIG1iPXs1fVxuICAgICAgPlxuICAgICAgICA8TGVmdENvbHVtbiAvPlxuICAgICAgICA8UHJlc2VudGF0aW9uIC8+XG4gICAgICA8L0ZsZXg+XG5cbiAgICAgIDxUb29sa2l0IC8+XG4gICAgPC9GcmFnbWVudD5cbiAgKTtcbn1cblxuLy8gZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjb250ZXh0KSB7XG4vLyAgIGNvbnN0IHJlcSA9IGNvbnRleHQucmVxO1xuLy8gICBjb25zdCByZXMgPSBjb250ZXh0LnJlcztcblxuLy8gICAvLyBmZXRjaCBkYXRhIGZyb20gYW4gQVBJXG4vLyAgIHJldHVybiB7XG4vLyAgICAgcHJvcHM6IHtcbi8vICAgICAgIG1lZXR1cHM6IE1PQ0tfTUVFVFVQLFxuLy8gICAgIH0sXG4vLyAgIH07XG4vLyB9XG5cbi8vIGdldFN0YXRpY1Byb3BzIGZ1bmN0aW9uIGlzIGNhbGxlZCBiZWZvcmUgSG9tZVBhZ2UgZnVuY3Rpb25cbi8vIG5ldmVyIGV4ZWN1dGVzIG9uIHRoZSBjbGllbnRcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcbiAgLy8gZmV0Y2ggZGF0YSBmcm9tIGFuIEFQSVxuICBjb25zdCBjbGllbnQgPSBhd2FpdCBNb25nb0NsaWVudC5jb25uZWN0KFxuICAgIFwibW9uZ29kYitzcnY6Ly9QYXNoYTpBUVRjMnNUTEFEMGp4YTF3QG5vZGUubHBzeDkubW9uZ29kYi5uZXQvbWVldHVwcz9yZXRyeVdyaXRlcz10cnVlJnc9bWFqb3JpdHlcIlxuICApO1xuICBjb25zdCBkYiA9IGNsaWVudC5kYigpO1xuXG4gIGNvbnN0IG1lZXR1cHNDb2xsZWN0aW9uID0gZGIuY29sbGVjdGlvbihcIm1lZXR1cHNcIik7XG5cbiAgY29uc3QgbWVldHVwcyA9IGF3YWl0IG1lZXR1cHNDb2xsZWN0aW9uLmZpbmQoKS50b0FycmF5KCk7XG5cbiAgY2xpZW50LmNsb3NlKCk7XG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgbWVldHVwczogbWVldHVwcy5tYXAoKG1lZXR1cCkgPT4gKHtcbiAgICAgICAgdGl0bGU6IG1lZXR1cC50aXRsZSxcbiAgICAgICAgYWRkcmVzczogbWVldHVwLmFkZHJlc3MsXG4gICAgICAgIGltYWdlOiBtZWV0dXAuaW1hZ2UsXG4gICAgICAgIGlkOiBtZWV0dXAuX2lkLnRvU3RyaW5nKCksXG4gICAgICB9KSksXG4gICAgfSxcbiAgICByZXZhbGlkYXRlOiAxMCwgLy8gaW4gc2Vjb25kc1xuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lUGFnZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})