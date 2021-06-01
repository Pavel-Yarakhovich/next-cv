webpackHotUpdate_N_E("pages/index",{

/***/ "./components/toolkit.js":
/*!*******************************!*\
  !*** ./components/toolkit.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _home_devpc_Documents_next_learn_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/esm/index.js\");\n/* harmony import */ var _ui_tool__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ui/tool */ \"./components/ui/tool.js\");\n/* harmony import */ var _ui_activeTool__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ui/activeTool */ \"./components/ui/activeTool.js\");\n\n\n\nvar _jsxFileName = \"/home/devpc/Documents/next-learn/components/toolkit.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\nvar mockTools = [\"React\", \"Redux-Saga\", \"TypeScript\", \"Vue.js\", \"Next.js\", \"Angular\", \"React-Router\", \"JavaScript\", \"Svelte\"];\n\nfunction Toolkit(_ref) {\n  _s();\n\n  var _this = this;\n\n  var _ref$tools = _ref.tools,\n      tools = _ref$tools === void 0 ? mockTools : _ref$tools;\n\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(tools[0]),\n      _React$useState2 = Object(_home_devpc_Documents_next_learn_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_React$useState, 2),\n      activeTool = _React$useState2[0],\n      setActiveTool = _React$useState2[1];\n\n  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(false),\n      _React$useState4 = Object(_home_devpc_Documents_next_learn_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_React$useState3, 2),\n      isNotified = _React$useState4[0],\n      setNotified = _React$useState4[1];\n\n  var ref = react__WEBPACK_IMPORTED_MODULE_2___default.a.useRef();\n\n  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(false),\n      _React$useState6 = Object(_home_devpc_Documents_next_learn_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_React$useState5, 2),\n      isHovered = _React$useState6[0],\n      setHovered = _React$useState6[1];\n\n  Object(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"useOutsideClick\"])({\n    ref: ref,\n    handler: function handler() {\n      return setHovered(false);\n    }\n  });\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"Flex\"], {\n    direction: \"column\",\n    onMouseEnter: function onMouseEnter() {\n      return setHovered(true);\n    },\n    mb: \"3rem\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"Text\"], {\n      fontSize: [\"3xl\", null, \"4xl\"],\n      textAlign: \"left\",\n      mb: \"1.5rem\",\n      fontWeight: \"700\",\n      color: \"green.300\",\n      textTransform: \"uppercase\",\n      children: \"Toolkit\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"Flex\"], {\n      direction: [\"column\", null, \"row\"],\n      justifyContent: \"space-between\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"Box\"], {\n        w: [\"100%\", null, \"35%\"],\n        pr: 4,\n        mb: [\"1.5rem\", null, 0],\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_ui_activeTool__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n          tool: activeTool\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 43,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 42,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"Flex\"], {\n        direction: \"row\",\n        flexWrap: \"wrap\",\n        w: [\"100%\", null, \"60%\"],\n        justifyContent: \"start\",\n        position: \"relative\",\n        children: [tools.filter(function (item) {\n          return item !== activeTool;\n        }).map(function (item, idx) {\n          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_ui_tool__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n            tool: item,\n            handleClick: setActiveTool\n          }, idx, false, {\n            fileName: _jsxFileName,\n            lineNumber: 55,\n            columnNumber: 15\n          }, _this);\n        }), isHovered && !isNotified && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"Box\"], {\n          ref: ref,\n          position: \"absolute\",\n          w: \"160px\",\n          bottom: \"90%\",\n          left: \"40px\",\n          bg: \"yellow.500\",\n          fontSize: \"14px\",\n          fontWeight: \"400\",\n          display: \"flex\",\n          flexDirection: \"column\",\n          alignItems: \"center\",\n          textAlign: \"center\",\n          p: 2,\n          borderTopLeftRadius: \"12px\",\n          borderTopRightRadius: \"12px\",\n          borderBottomRightRadius: \"12px\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"Text\"], {\n            mb: 2,\n            children: \"Click to get more information.\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 76,\n            columnNumber: 15\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"Button\"], {\n            bg: \"none\",\n            border: \"1px solid white\",\n            onClick: function onClick() {\n              return setNotified(true);\n            },\n            children: \"Got it!\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 77,\n            columnNumber: 15\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 58,\n          columnNumber: 13\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 45,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 30,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Toolkit, \"wpc4JSmh6esZ/c0Gl5srFHWDdyw=\", false, function () {\n  return [_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"useOutsideClick\"]];\n});\n\n_c = Toolkit;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Toolkit);\n\nvar _c;\n\n$RefreshReg$(_c, \"Toolkit\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy90b29sa2l0LmpzPzVjYzIiXSwibmFtZXMiOlsibW9ja1Rvb2xzIiwiVG9vbGtpdCIsInRvb2xzIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsImFjdGl2ZVRvb2wiLCJzZXRBY3RpdmVUb29sIiwiaXNOb3RpZmllZCIsInNldE5vdGlmaWVkIiwicmVmIiwidXNlUmVmIiwiaXNIb3ZlcmVkIiwic2V0SG92ZXJlZCIsInVzZU91dHNpZGVDbGljayIsImhhbmRsZXIiLCJmaWx0ZXIiLCJpdGVtIiwibWFwIiwiaWR4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUVBLElBQU1BLFNBQVMsR0FBRyxDQUNoQixPQURnQixFQUVoQixZQUZnQixFQUdoQixZQUhnQixFQUloQixRQUpnQixFQUtoQixTQUxnQixFQU1oQixTQU5nQixFQU9oQixjQVBnQixFQVFoQixZQVJnQixFQVNoQixRQVRnQixDQUFsQjs7QUFZQSxTQUFTQyxPQUFULE9BQXdDO0FBQUE7O0FBQUE7O0FBQUEsd0JBQXJCQyxLQUFxQjtBQUFBLE1BQXJCQSxLQUFxQiwyQkFBYkYsU0FBYTs7QUFBQSx3QkFDRkcsNENBQUssQ0FBQ0MsUUFBTixDQUFlRixLQUFLLENBQUMsQ0FBRCxDQUFwQixDQURFO0FBQUE7QUFBQSxNQUMvQkcsVUFEK0I7QUFBQSxNQUNuQkMsYUFEbUI7O0FBQUEseUJBRUpILDRDQUFLLENBQUNDLFFBQU4sQ0FBZSxLQUFmLENBRkk7QUFBQTtBQUFBLE1BRS9CRyxVQUYrQjtBQUFBLE1BRW5CQyxXQUZtQjs7QUFHdEMsTUFBTUMsR0FBRyxHQUFHTiw0Q0FBSyxDQUFDTyxNQUFOLEVBQVo7O0FBSHNDLHlCQUlOUCw0Q0FBSyxDQUFDQyxRQUFOLENBQWUsS0FBZixDQUpNO0FBQUE7QUFBQSxNQUkvQk8sU0FKK0I7QUFBQSxNQUlwQkMsVUFKb0I7O0FBS3RDQywwRUFBZSxDQUFDO0FBQ2RKLE9BQUcs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LGdCQWJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBeUREOztHQW5FUVAsTztVQUtQWSxnRTs7O0tBTE9aLE87QUFxRU1BLHNFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy90b29sa2l0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQm94LCBUZXh0LCBGbGV4LCB1c2VPdXRzaWRlQ2xpY2ssIEJ1dHRvbiB9IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XG5cbmltcG9ydCBUb29sIGZyb20gXCIuL3VpL3Rvb2xcIjtcbmltcG9ydCBBY3RpdmVUb29sIGZyb20gXCIuL3VpL2FjdGl2ZVRvb2xcIjtcblxuY29uc3QgbW9ja1Rvb2xzID0gW1xuICBcIlJlYWN0XCIsXG4gIFwiUmVkdXgtU2FnYVwiLFxuICBcIlR5cGVTY3JpcHRcIixcbiAgXCJWdWUuanNcIixcbiAgXCJOZXh0LmpzXCIsXG4gIFwiQW5ndWxhclwiLFxuICBcIlJlYWN0LVJvdXRlclwiLFxuICBcIkphdmFTY3JpcHRcIixcbiAgXCJTdmVsdGVcIixcbl07XG5cbmZ1bmN0aW9uIFRvb2xraXQoeyB0b29scyA9IG1vY2tUb29scyB9KSB7XG4gIGNvbnN0IFthY3RpdmVUb29sLCBzZXRBY3RpdmVUb29sXSA9IFJlYWN0LnVzZVN0YXRlKHRvb2xzWzBdKTtcbiAgY29uc3QgW2lzTm90aWZpZWQsIHNldE5vdGlmaWVkXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgcmVmID0gUmVhY3QudXNlUmVmKCk7XG4gIGNvbnN0IFtpc0hvdmVyZWQsIHNldEhvdmVyZWRdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xuICB1c2VPdXRzaWRlQ2xpY2soe1xuICAgIHJlZjogcmVmLFxuICAgIGhhbmRsZXI6ICgpID0+IHNldEhvdmVyZWQoZmFsc2UpLFxuICB9KTtcblxuICByZXR1cm4gKFxuICAgIDxGbGV4IGRpcmVjdGlvbj1cImNvbHVtblwiIG9uTW91c2VFbnRlcj17KCkgPT4gc2V0SG92ZXJlZCh0cnVlKX0gbWI9XCIzcmVtXCI+XG4gICAgICA8VGV4dFxuICAgICAgICBmb250U2l6ZT17W1wiM3hsXCIsIG51bGwsIFwiNHhsXCJdfVxuICAgICAgICB0ZXh0QWxpZ249XCJsZWZ0XCJcbiAgICAgICAgbWI9XCIxLjVyZW1cIlxuICAgICAgICBmb250V2VpZ2h0PVwiNzAwXCJcbiAgICAgICAgY29sb3I9XCJncmVlbi4zMDBcIlxuICAgICAgICB0ZXh0VHJhbnNmb3JtPVwidXBwZXJjYXNlXCJcbiAgICAgID5cbiAgICAgICAgVG9vbGtpdFxuICAgICAgPC9UZXh0PlxuICAgICAgPEZsZXggZGlyZWN0aW9uPXtbXCJjb2x1bW5cIiwgbnVsbCwgXCJyb3dcIl19IGp1c3RpZnlDb250ZW50PVwic3BhY2UtYmV0d2VlblwiPlxuICAgICAgICA8Qm94IHc9e1tcIjEwMCVcIiwgbnVsbCwgXCIzNSVcIl19IHByPXs0fSBtYj17W1wiMS41cmVtXCIsIG51bGwsIDBdfT5cbiAgICAgICAgICA8QWN0aXZlVG9vbCB0b29sPXthY3RpdmVUb29sfSAvPlxuICAgICAgICA8L0JveD5cbiAgICAgICAgPEZsZXhcbiAgICAgICAgICBkaXJlY3Rpb249XCJyb3dcIlxuICAgICAgICAgIGZsZXhXcmFwPVwid3JhcFwiXG4gICAgICAgICAgdz17W1wiMTAwJVwiLCBudWxsLCBcIjYwJVwiXX1cbiAgICAgICAgICBqdXN0aWZ5Q29udGVudD1cInN0YXJ0XCJcbiAgICAgICAgICBwb3NpdGlvbj1cInJlbGF0aXZlXCJcbiAgICAgICAgPlxuICAgICAgICAgIHt0b29sc1xuICAgICAgICAgICAgLmZpbHRlcigoaXRlbSkgPT4gaXRlbSAhPT0gYWN0aXZlVG9vbClcbiAgICAgICAgICAgIC5tYXAoKGl0ZW0sIGlkeCkgPT4gKFxuICAgICAgICAgICAgICA8VG9vbCBrZXk9e2lkeH0gdG9vbD17aXRlbX0gaGFuZGxlQ2xpY2s9e3NldEFjdGl2ZVRvb2x9IC8+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICB7aXNIb3ZlcmVkICYmICFpc05vdGlmaWVkICYmIChcbiAgICAgICAgICAgIDxCb3hcbiAgICAgICAgICAgICAgcmVmPXtyZWZ9XG4gICAgICAgICAgICAgIHBvc2l0aW9uPVwiYWJzb2x1dGVcIlxuICAgICAgICAgICAgICB3PVwiMTYwcHhcIlxuICAgICAgICAgICAgICBib3R0b209XCI5MCVcIlxuICAgICAgICAgICAgICBsZWZ0PVwiNDBweFwiXG4gICAgICAgICAgICAgIGJnPVwieWVsbG93LjUwMFwiXG4gICAgICAgICAgICAgIGZvbnRTaXplPVwiMTRweFwiXG4gICAgICAgICAgICAgIGZvbnRXZWlnaHQ9XCI0MDBcIlxuICAgICAgICAgICAgICBkaXNwbGF5PVwiZmxleFwiXG4gICAgICAgICAgICAgIGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIlxuICAgICAgICAgICAgICBhbGlnbkl0ZW1zPVwiY2VudGVyXCJcbiAgICAgICAgICAgICAgdGV4dEFsaWduPVwiY2VudGVyXCJcbiAgICAgICAgICAgICAgcD17Mn1cbiAgICAgICAgICAgICAgYm9yZGVyVG9wTGVmdFJhZGl1cz1cIjEycHhcIlxuICAgICAgICAgICAgICBib3JkZXJUb3BSaWdodFJhZGl1cz1cIjEycHhcIlxuICAgICAgICAgICAgICBib3JkZXJCb3R0b21SaWdodFJhZGl1cz1cIjEycHhcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8VGV4dCBtYj17Mn0+Q2xpY2sgdG8gZ2V0IG1vcmUgaW5mb3JtYXRpb24uPC9UZXh0PlxuICAgICAgICAgICAgICA8QnV0dG9uIGJnPVwibm9uZVwiIGJvcmRlcj1cIjFweCBzb2xpZCB3aGl0ZVwiIG9uQ2xpY2s9eygpID0+IHNldE5vdGlmaWVkKHRydWUpfT5cbiAgICAgICAgICAgICAgICBHb3QgaXQhXG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9GbGV4PlxuICAgICAgPC9GbGV4PlxuICAgIDwvRmxleD5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgVG9vbGtpdDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/toolkit.js\n");

/***/ })

})