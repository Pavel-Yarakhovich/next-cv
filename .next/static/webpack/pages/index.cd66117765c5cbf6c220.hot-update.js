webpackHotUpdate_N_E("pages/index",{

/***/ "./components/projects.js":
/*!********************************!*\
  !*** ./components/projects.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _home_devpc_Documents_next_learn_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/esm/index.js\");\n/* harmony import */ var _ui_project__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ui/project */ \"./components/ui/project.js\");\n/* harmony import */ var _ui_activeProject__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ui/activeProject */ \"./components/ui/activeProject.js\");\n\n\n\nvar _jsxFileName = \"/home/devpc/Documents/next-learn/components/projects.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\nvar mockTools = [\"React\", \"Redux-Saga\", \"TypeScript\", \"Vue.js\", \"Next.js\", \"Angular\", \"React-Router\", \"JavaScript\", \"Svelte\"];\nvar mockProjects = [{\n  title: \"Test title\",\n  description: \"Since my very childhood I’ve always been passionate about creating something either useful, nice-looking or tasty. This passion corresponds with my hobbies: drawing and cooking. The creation process itself gives me a great pleasure, but even more pleasure comes with the realization that the results of my work bring someone benefit or joy.\",\n  duties: ['first duty', 'second duty', 'third duty'],\n  tools: mockTools\n}];\n\nfunction Projects(_ref) {\n  _s();\n\n  var _this = this;\n\n  var _ref$projects = _ref.projects,\n      projects = _ref$projects === void 0 ? mockProjects : _ref$projects;\n\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(projects[0]),\n      _React$useState2 = Object(_home_devpc_Documents_next_learn_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_React$useState, 2),\n      activeProject = _React$useState2[0],\n      setActiveProject = _React$useState2[1];\n\n  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(false),\n      _React$useState4 = Object(_home_devpc_Documents_next_learn_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_React$useState3, 2),\n      isNotified = _React$useState4[0],\n      setNotified = _React$useState4[1];\n\n  var ref = react__WEBPACK_IMPORTED_MODULE_2___default.a.useRef();\n\n  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(false),\n      _React$useState6 = Object(_home_devpc_Documents_next_learn_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_React$useState5, 2),\n      isHovered = _React$useState6[0],\n      setHovered = _React$useState6[1];\n\n  Object(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"useOutsideClick\"])({\n    ref: ref,\n    handler: function handler() {\n      return setHovered(false);\n    }\n  });\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"Flex\"], {\n    direction: \"column\",\n    onMouseEnter: function onMouseEnter() {\n      return setHovered(true);\n    },\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"Text\"], {\n      fontSize: [\"3xl\", null, \"4xl\"],\n      textAlign: \"left\",\n      mb: \"1.5rem\",\n      fontWeight: \"700\",\n      color: \"yellow.300\",\n      children: \"Projects\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"Flex\"], {\n      direction: \"column\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"Box\"], {\n        w: \"100%\",\n        pr: 4,\n        mb: \"1.5rem\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_ui_activeProject__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n          project: activeProject\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 56,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 55,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"Flex\"], {\n        direction: \"row\",\n        flexWrap: \"wrap\",\n        justifyContent: \"start\",\n        position: \"relative\",\n        children: [projects // .filter((item) => item !== activeTool)\n        .map(function (item, idx) {\n          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_ui_project__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n            project: item,\n            handleClick: setActiveProject\n          }, idx, false, {\n            fileName: _jsxFileName,\n            lineNumber: 67,\n            columnNumber: 15\n          }, _this);\n        }), isHovered && !isNotified && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"Box\"], {\n          ref: ref,\n          position: \"absolute\",\n          w: \"160px\",\n          bottom: \"90%\",\n          left: \"40px\",\n          bg: \"yellow.500\",\n          fontSize: \"14px\",\n          fontWeight: \"400\",\n          display: \"flex\",\n          flexDirection: \"column\",\n          alignItems: \"center\",\n          textAlign: \"center\",\n          p: 2,\n          borderTopLeftRadius: \"12px\",\n          borderTopRightRadius: \"12px\",\n          borderBottomRightRadius: \"12px\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"Text\"], {\n            mb: 2,\n            children: \"Click to get more information.\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 88,\n            columnNumber: 15\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"Button\"], {\n            bg: \"none\",\n            border: \"1px solid white\",\n            onClick: function onClick() {\n              return setNotified(true);\n            },\n            children: \"Got it!\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 89,\n            columnNumber: 15\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 70,\n          columnNumber: 13\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 58,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 44,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Projects, \"VfqdUCSwEEqpBKWaDqUKUMvnkJI=\", false, function () {\n  return [_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"useOutsideClick\"]];\n});\n\n_c = Projects;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Projects);\n\nvar _c;\n\n$RefreshReg$(_c, \"Projects\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wcm9qZWN0cy5qcz8zNTRjIl0sIm5hbWVzIjpbIm1vY2tUb29scyIsIm1vY2tQcm9qZWN0cyIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJkdXRpZXMiLCJ0b29scyIsIlByb2plY3RzIiwicHJvamVjdHMiLCJSZWFjdCIsInVzZVN0YXRlIiwiYWN0aXZlUHJvamVjdCIsInNldEFjdGl2ZVByb2plY3QiLCJpc05vdGlmaWVkIiwic2V0Tm90aWZpZWQiLCJyZWYiLCJ1c2VSZWYiLCJpc0hvdmVyZWQiLCJzZXRIb3ZlcmVkIiwidXNlT3V0c2lkZUNsaWNrIiwiaGFuZGxlciIsIm1hcCIsIml0ZW0iLCJpZHgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBRUEsSUFBTUEsU0FBUyxHQUFHLENBQ2hCLE9BRGdCLEVBRWhCLFlBRmdCLEVBR2hCLFlBSGdCLEVBSWhCLFFBSmdCLEVBS2hCLFNBTGdCLEVBTWhCLFNBTmdCLEVBT2hCLGNBUGdCLEVBUWhCLFlBUmdCLEVBU2hCLFFBVGdCLENBQWxCO0FBWUEsSUFBTUMsWUFBWSxHQUFHLENBQ25CO0FBQ0VDLE9BQUssRUFBRSxZQURUO0FBRUVDLGFBQVcsRUFDVCxzVkFISjtBQUlFQyxRQUFNLEVBQUUsQ0FDTixZQURNLEVBRU4sYUFGTSxFQUdOLFlBSE0sQ0FKVjtBQVNFQyxPQUFLLEVBQUVMO0FBVFQsQ0FEbUIsQ0FBckI7O0FBY0EsU0FBU00sUUFBVCxPQUErQztBQUFBOztBQUFBOztBQUFBLDJCQUEzQkMsUUFBMkI7QUFBQSxNQUEzQkEsUUFBMkIsOEJBQWhCTixZQUFnQjs7QUFBQSx3QkFDSE8sNENBQUssQ0FBQ0MsUUFBTixDQUFlRixRQUFRLENBQUMsQ0FBRCxDQUF2QixDQURHO0FBQUE7QUFBQSxNQUN0Q0csYUFEc0M7QUFBQSxNQUN2QkMsZ0JBRHVCOztBQUFBLHlCQUVYSCw0Q0FBSyxDQUFDQyxRQUFOLENBQWUs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QUFBQSxZQVZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBMkREOztHQXJFUVAsUTtVQUtQWSxnRTs7O0tBTE9aLFE7QUF1RU1BLHVFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9wcm9qZWN0cy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBGbGV4LCBUZXh0LCBCb3gsIEJ1dHRvbiwgdXNlT3V0c2lkZUNsaWNrIH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcblxuaW1wb3J0IFByb2plY3QgZnJvbSAnLi91aS9wcm9qZWN0JztcbmltcG9ydCBBY3RpdmVQcm9qZWN0IGZyb20gJy4vdWkvYWN0aXZlUHJvamVjdCc7XG5cbmNvbnN0IG1vY2tUb29scyA9IFtcbiAgXCJSZWFjdFwiLFxuICBcIlJlZHV4LVNhZ2FcIixcbiAgXCJUeXBlU2NyaXB0XCIsXG4gIFwiVnVlLmpzXCIsXG4gIFwiTmV4dC5qc1wiLFxuICBcIkFuZ3VsYXJcIixcbiAgXCJSZWFjdC1Sb3V0ZXJcIixcbiAgXCJKYXZhU2NyaXB0XCIsXG4gIFwiU3ZlbHRlXCIsXG5dO1xuXG5jb25zdCBtb2NrUHJvamVjdHMgPSBbXG4gIHtcbiAgICB0aXRsZTogXCJUZXN0IHRpdGxlXCIsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICBcIlNpbmNlIG15IHZlcnkgY2hpbGRob29kIEnigJl2ZSBhbHdheXMgYmVlbiBwYXNzaW9uYXRlIGFib3V0IGNyZWF0aW5nIHNvbWV0aGluZyBlaXRoZXIgdXNlZnVsLCBuaWNlLWxvb2tpbmcgb3IgdGFzdHkuIFRoaXMgcGFzc2lvbiBjb3JyZXNwb25kcyB3aXRoIG15IGhvYmJpZXM6IGRyYXdpbmcgYW5kIGNvb2tpbmcuIFRoZSBjcmVhdGlvbiBwcm9jZXNzIGl0c2VsZiBnaXZlcyBtZSBhIGdyZWF0IHBsZWFzdXJlLCBidXQgZXZlbiBtb3JlIHBsZWFzdXJlIGNvbWVzIHdpdGggdGhlIHJlYWxpemF0aW9uIHRoYXQgdGhlIHJlc3VsdHMgb2YgbXkgd29yayBicmluZyBzb21lb25lIGJlbmVmaXQgb3Igam95LlwiLFxuICAgIGR1dGllczogW1xuICAgICAgJ2ZpcnN0IGR1dHknLFxuICAgICAgJ3NlY29uZCBkdXR5JyxcbiAgICAgICd0aGlyZCBkdXR5JyxcbiAgICBdLFxuICAgIHRvb2xzOiBtb2NrVG9vbHMsXG4gIH0sXG5dO1xuXG5mdW5jdGlvbiBQcm9qZWN0cyh7IHByb2plY3RzID0gbW9ja1Byb2plY3RzIH0pIHtcbiAgY29uc3QgW2FjdGl2ZVByb2plY3QsIHNldEFjdGl2ZVByb2plY3RdID0gUmVhY3QudXNlU3RhdGUocHJvamVjdHNbMF0pO1xuICBjb25zdCBbaXNOb3RpZmllZCwgc2V0Tm90aWZpZWRdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCByZWYgPSBSZWFjdC51c2VSZWYoKTtcbiAgY29uc3QgW2lzSG92ZXJlZCwgc2V0SG92ZXJlZF0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XG4gIHVzZU91dHNpZGVDbGljayh7XG4gICAgcmVmOiByZWYsXG4gICAgaGFuZGxlcjogKCkgPT4gc2V0SG92ZXJlZChmYWxzZSksXG4gIH0pO1xuXG4gIHJldHVybiAoXG4gICAgPEZsZXggZGlyZWN0aW9uPVwiY29sdW1uXCIgb25Nb3VzZUVudGVyPXsoKSA9PiBzZXRIb3ZlcmVkKHRydWUpfT5cbiAgICAgIDxUZXh0XG4gICAgICAgIGZvbnRTaXplPXtbXCIzeGxcIiwgbnVsbCwgXCI0eGxcIl19XG4gICAgICAgIHRleHRBbGlnbj1cImxlZnRcIlxuICAgICAgICBtYj1cIjEuNXJlbVwiXG4gICAgICAgIGZvbnRXZWlnaHQ9XCI3MDBcIlxuICAgICAgICBjb2xvcj1cInllbGxvdy4zMDBcIlxuICAgICAgPlxuICAgICAgICBQcm9qZWN0c1xuICAgICAgPC9UZXh0PlxuICAgICAgPEZsZXggZGlyZWN0aW9uPVwiY29sdW1uXCI+XG4gICAgICAgIDxCb3ggdz1cIjEwMCVcIiBwcj17NH0gbWI9XCIxLjVyZW1cIj5cbiAgICAgICAgICA8QWN0aXZlUHJvamVjdCBwcm9qZWN0PXthY3RpdmVQcm9qZWN0fSAvPlxuICAgICAgICA8L0JveD5cbiAgICAgICAgPEZsZXhcbiAgICAgICAgICBkaXJlY3Rpb249XCJyb3dcIlxuICAgICAgICAgIGZsZXhXcmFwPVwid3JhcFwiXG4gICAgICAgICAganVzdGlmeUNvbnRlbnQ9XCJzdGFydFwiXG4gICAgICAgICAgcG9zaXRpb249XCJyZWxhdGl2ZVwiXG4gICAgICAgID5cbiAgICAgICAgICB7cHJvamVjdHNcbiAgICAgICAgICAgIC8vIC5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0gIT09IGFjdGl2ZVRvb2wpXG4gICAgICAgICAgICAubWFwKChpdGVtLCBpZHgpID0+IChcbiAgICAgICAgICAgICAgPFByb2plY3Qga2V5PXtpZHh9IHByb2plY3Q9e2l0ZW19IGhhbmRsZUNsaWNrPXtzZXRBY3RpdmVQcm9qZWN0fSAvPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAge2lzSG92ZXJlZCAmJiAhaXNOb3RpZmllZCAmJiAoXG4gICAgICAgICAgICA8Qm94XG4gICAgICAgICAgICAgIHJlZj17cmVmfVxuICAgICAgICAgICAgICBwb3NpdGlvbj1cImFic29sdXRlXCJcbiAgICAgICAgICAgICAgdz1cIjE2MHB4XCJcbiAgICAgICAgICAgICAgYm90dG9tPVwiOTAlXCJcbiAgICAgICAgICAgICAgbGVmdD1cIjQwcHhcIlxuICAgICAgICAgICAgICBiZz1cInllbGxvdy41MDBcIlxuICAgICAgICAgICAgICBmb250U2l6ZT1cIjE0cHhcIlxuICAgICAgICAgICAgICBmb250V2VpZ2h0PVwiNDAwXCJcbiAgICAgICAgICAgICAgZGlzcGxheT1cImZsZXhcIlxuICAgICAgICAgICAgICBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCJcbiAgICAgICAgICAgICAgYWxpZ25JdGVtcz1cImNlbnRlclwiXG4gICAgICAgICAgICAgIHRleHRBbGlnbj1cImNlbnRlclwiXG4gICAgICAgICAgICAgIHA9ezJ9XG4gICAgICAgICAgICAgIGJvcmRlclRvcExlZnRSYWRpdXM9XCIxMnB4XCJcbiAgICAgICAgICAgICAgYm9yZGVyVG9wUmlnaHRSYWRpdXM9XCIxMnB4XCJcbiAgICAgICAgICAgICAgYm9yZGVyQm90dG9tUmlnaHRSYWRpdXM9XCIxMnB4XCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPFRleHQgbWI9ezJ9PkNsaWNrIHRvIGdldCBtb3JlIGluZm9ybWF0aW9uLjwvVGV4dD5cbiAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgIGJnPVwibm9uZVwiXG4gICAgICAgICAgICAgICAgYm9yZGVyPVwiMXB4IHNvbGlkIHdoaXRlXCJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXROb3RpZmllZCh0cnVlKX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIEdvdCBpdCFcbiAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICApfVxuICAgICAgICA8L0ZsZXg+XG4gICAgICA8L0ZsZXg+XG4gICAgPC9GbGV4PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0cztcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/projects.js\n");

/***/ })

})