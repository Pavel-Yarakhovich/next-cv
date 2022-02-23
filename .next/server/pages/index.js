module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		"pages/index": 0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// require() chunk loading for javascript
/******/
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("../" + ({}[chunkId]||chunkId) + ".js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "../next-server/lib/router/utils/get-asset-path-from-route":
/*!**************************************************************************************!*\
  !*** external "next/dist/next-server/lib/router/utils/get-asset-path-from-route.js" ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: getStaticProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStaticProps", function() { return getStaticProps; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/react */ "@chakra-ui/react");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! mongodb */ "mongodb");
/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _loadable_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @loadable/component */ "@loadable/component");
/* harmony import */ var _loadable_component__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_loadable_component__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/bs */ "react-icons/bs");
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_icons_bs__WEBPACK_IMPORTED_MODULE_6__);

var _jsxFileName = "D:\\Personal_projects\\next-cv\\pages\\index.js";






const LeftColumn = _loadable_component__WEBPACK_IMPORTED_MODULE_5___default()(() => __webpack_require__.e(/*! import() */ 3).then(__webpack_require__.bind(null, /*! ../components/leftColumn */ "./components/leftColumn.js")));
const Presentation = _loadable_component__WEBPACK_IMPORTED_MODULE_5___default()(() => __webpack_require__.e(/*! import() */ 4).then(__webpack_require__.bind(null, /*! ../components/presentation */ "./components/presentation.js")));
const Toolkit = _loadable_component__WEBPACK_IMPORTED_MODULE_5___default()(() => __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.bind(null, /*! ../components/toolkit */ "./components/toolkit.js")));
const Projects = _loadable_component__WEBPACK_IMPORTED_MODULE_5___default()(() => __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! ../components/projects */ "./components/projects.js")));
const Certificates = _loadable_component__WEBPACK_IMPORTED_MODULE_5___default()(() => __webpack_require__.e(/*! import() */ 2).then(__webpack_require__.bind(null, /*! ../components/certificates.js */ "./components/certificates.js")));
const MainNavigation = _loadable_component__WEBPACK_IMPORTED_MODULE_5___default()(() => __webpack_require__.e(/*! import() */ 5).then(__webpack_require__.bind(null, /*! ../components/layout/MainNavigation.js */ "./components/layout/MainNavigation.js")));
const sections = {
  presentation: {
    icon: react_icons_bs__WEBPACK_IMPORTED_MODULE_6__["BsPersonCircle"]
  },
  toolkit: {
    icon: react_icons_bs__WEBPACK_IMPORTED_MODULE_6__["BsTools"]
  },
  projects: {
    icon: react_icons_bs__WEBPACK_IMPORTED_MODULE_6__["BsFiles"]
  },
  certificates: {
    icon: react_icons_bs__WEBPACK_IMPORTED_MODULE_6__["BsStar"]
  }
};

function HomePage(props) {
  const [visibleContent, setVisibleContent] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState("presentation");
  const parRef = react__WEBPACK_IMPORTED_MODULE_1___default.a.useRef(null);
  let content;

  switch (visibleContent) {
    case "presentation":
      content = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__["Flex"], {
        color: "white",
        justifySelf: "center",
        minHeight: "70vh",
        direction: ["column", null, "row"],
        mb: 5,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(LeftColumn, {
          inViewOptions: {
            threshold: 0.3,
            rootMargin: "0px",
            root: parRef === null || parRef === void 0 ? void 0 : parRef.current
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Presentation, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 9
      }, this);
      break;

    case "toolkit":
      content = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Toolkit, {
        tools: props.toolkit,
        inViewOptions: {
          threshold: 0.15,
          rootMargin: "0px",
          root: parRef === null || parRef === void 0 ? void 0 : parRef.current // triggerOnce: true,

        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 9
      }, this);
      break;

    case "projects":
      content = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Projects, {
        projects: props.projects,
        inViewOptions: {
          threshold: 0.15,
          rootMargin: "0px",
          root: parRef === null || parRef === void 0 ? void 0 : parRef.current
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 9
      }, this);
      break;

    case "certificates":
      content = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Certificates, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 17
      }, this);
      break;

    default:
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: "P.Yarakhovich"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        name: "description",
        content: "Pavel Yarakhovich personal page."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__["Flex"], {
      flexDirection: "row",
      height: "100vh",
      overflow: "hidden",
      bg: "gray.300",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(MainNavigation, {
        sections: sections,
        visibleContent: visibleContent,
        selectContent: setVisibleContent
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__["Container"], {
        maxW: "container.xl",
        p: 4,
        h: "100%",
        overflow: "auto",
        children: content
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 85,
    columnNumber: 5
  }, this);
} // export async function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;
//   // fetch data from an API
//   return {
//     props: {
//       meetups: MOCK_MEETUP,
//     },
//   };
// }
// getStaticProps function is called before HomePage function
// never executes on the client


async function getStaticProps() {
  // fetch data from an API
  const client = await mongodb__WEBPACK_IMPORTED_MODULE_4__["MongoClient"].connect("mongodb+srv://Pasha:AQTc2sTLAD0jxa1w@node.lpsx9.mongodb.net/cv?retryWrites=true&w=majority");
  const db = client.db();
  const toolsCollection = db.collection("tools");
  const tools = await toolsCollection.find().toArray();
  const projectsCollection = db.collection("projects");
  const projects = await projectsCollection.find().toArray();
  const toolkit = tools.map(tool => ({
    id: tool._id.toString(),
    category: tool.category,
    title: tool.title,
    projects: projects.filter(pr => pr.tools.some(t => t.toString() === tool._id.toString())).length,
    level: tool.level
  }));
  client.close();
  return {
    props: {
      toolkit,
      projects: projects.map(p => ({
        id: p._id.toString(),
        title: p.title,
        description: p.description,
        duties: p.duties,
        tools: p.tools.map(t => toolkit.find(tool => tool.id === t.toString()))
      }))
    },
    revalidate: 10 // in seconds

  };
}
/* harmony default export */ __webpack_exports__["default"] = (HomePage);

/***/ }),

/***/ "@chakra-ui/react":
/*!***********************************!*\
  !*** external "@chakra-ui/react" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@chakra-ui/react");

/***/ }),

/***/ "@loadable/component":
/*!**************************************!*\
  !*** external "@loadable/component" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@loadable/component");

/***/ }),

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("mongodb");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-icons/bs":
/*!*********************************!*\
  !*** external "react-icons/bs" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons/bs");

/***/ }),

/***/ "react-icons/fa":
/*!*********************************!*\
  !*** external "react-icons/fa" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons/fa");

/***/ }),

/***/ "react-icons/md":
/*!*********************************!*\
  !*** external "react-icons/md" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons/md");

/***/ }),

/***/ "react-intersection-observer":
/*!**********************************************!*\
  !*** external "react-intersection-observer" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-intersection-observer");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIiIsIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAY2hha3JhLXVpL3JlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGxvYWRhYmxlL2NvbXBvbmVudFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm1vbmdvZGJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWljb25zL2JzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaWNvbnMvZmFcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pY29ucy9tZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWludGVyc2VjdGlvbi1vYnNlcnZlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWlzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwibmFtZXMiOlsiTGVmdENvbHVtbiIsImxvYWRhYmxlIiwiUHJlc2VudGF0aW9uIiwiVG9vbGtpdCIsIlByb2plY3RzIiwiQ2VydGlmaWNhdGVzIiwiTWFpbk5hdmlnYXRpb24iLCJzZWN0aW9ucyIsInByZXNlbnRhdGlvbiIsImljb24iLCJCc1BlcnNvbkNpcmNsZSIsInRvb2xraXQiLCJCc1Rvb2xzIiwicHJvamVjdHMiLCJCc0ZpbGVzIiwiY2VydGlmaWNhdGVzIiwiQnNTdGFyIiwiSG9tZVBhZ2UiLCJwcm9wcyIsInZpc2libGVDb250ZW50Iiwic2V0VmlzaWJsZUNvbnRlbnQiLCJSZWFjdCIsInVzZVN0YXRlIiwicGFyUmVmIiwidXNlUmVmIiwiY29udGVudCIsInRocmVzaG9sZCIsInJvb3RNYXJnaW4iLCJyb290IiwiY3VycmVudCIsImdldFN0YXRpY1Byb3BzIiwiY2xpZW50IiwiTW9uZ29DbGllbnQiLCJjb25uZWN0IiwiZGIiLCJ0b29sc0NvbGxlY3Rpb24iLCJjb2xsZWN0aW9uIiwidG9vbHMiLCJmaW5kIiwidG9BcnJheSIsInByb2plY3RzQ29sbGVjdGlvbiIsIm1hcCIsInRvb2wiLCJpZCIsIl9pZCIsInRvU3RyaW5nIiwiY2F0ZWdvcnkiLCJ0aXRsZSIsImZpbHRlciIsInByIiwic29tZSIsInQiLCJsZW5ndGgiLCJsZXZlbCIsImNsb3NlIiwicCIsImRlc2NyaXB0aW9uIiwiZHV0aWVzIiwicmV2YWxpZGF0ZSJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7OztRQUdBOztRQUVBO1FBQ0E7UUFDQSxtQ0FBbUM7UUFDbkM7UUFDQTtRQUNBO1FBQ0E7UUFDQSxrQkFBa0IscUJBQXFCO1FBQ3ZDO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtR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QVEsRUFBRUEsUUFBUSxDQUFDNEIsR0FBVCxDQUFjYyxDQUFELEtBQVE7QUFDN0JaLFVBQUUsRUFBRVksQ0FBQyxDQUFDWCxHQUFGLENBQU1DLFFBQU4sRUFEeUI7QUFFN0JFLGFBQUssRUFBRVEsQ0FBQyxDQUFDUixLQUZvQjtBQUc3QlMsbUJBQVcsRUFBRUQsQ0FBQyxDQUFDQyxXQUhjO0FBSTdCQyxjQUFNLEVBQUVGLENBQUMsQ0FBQ0UsTUFKbUI7QUFLN0JwQixhQUFLLEVBQUVrQixDQUFDLENBQUNsQixLQUFGLENBQVFJLEdBQVIsQ0FBYVUsQ0FBRCxJQUNqQnhDLE9BQU8sQ0FBQzJCLElBQVIsQ0FBY0ksSUFBRCxJQUFVQSxJQUFJLENBQUNDLEVBQUwsS0FBWVEsQ0FBQyxDQUFDTixRQUFGLEVBQW5DLENBREs7QUFMc0IsT0FBUixDQUFiO0FBRkwsS0FERjtBQWFMYSxjQUFVLEVBQUUsRUFiUCxDQWFXOztBQWJYLEdBQVA7QUFlRDtBQUVjekMsdUVBQWYsRTs7Ozs7Ozs7Ozs7QUNoS0EsNkM7Ozs7Ozs7Ozs7O0FDQUEsZ0Q7Ozs7Ozs7Ozs7O0FDQUEsb0M7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsMkM7Ozs7Ozs7Ozs7O0FDQUEsMkM7Ozs7Ozs7Ozs7O0FDQUEsMkM7Ozs7Ozs7Ozs7O0FDQUEsd0Q7Ozs7Ozs7Ozs7O0FDQUEscUM7Ozs7Ozs7Ozs7O0FDQUEsa0QiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBjaHVua3NcbiBcdC8vIFwiMFwiIG1lYW5zIFwiYWxyZWFkeSBsb2FkZWRcIlxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJwYWdlcy9pbmRleFwiOiAwXG4gXHR9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuIFx0Ly8gVGhpcyBmaWxlIGNvbnRhaW5zIG9ubHkgdGhlIGVudHJ5IGNodW5rLlxuIFx0Ly8gVGhlIGNodW5rIGxvYWRpbmcgZnVuY3Rpb24gZm9yIGFkZGl0aW9uYWwgY2h1bmtzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmUgPSBmdW5jdGlvbiByZXF1aXJlRW5zdXJlKGNodW5rSWQpIHtcbiBcdFx0dmFyIHByb21pc2VzID0gW107XG5cblxuIFx0XHQvLyByZXF1aXJlKCkgY2h1bmsgbG9hZGluZyBmb3IgamF2YXNjcmlwdFxuXG4gXHRcdC8vIFwiMFwiIGlzIHRoZSBzaWduYWwgZm9yIFwiYWxyZWFkeSBsb2FkZWRcIlxuIFx0XHRpZihpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gIT09IDApIHtcbiBcdFx0XHR2YXIgY2h1bmsgPSByZXF1aXJlKFwiLi4vXCIgKyAoe31bY2h1bmtJZF18fGNodW5rSWQpICsgXCIuanNcIik7XG4gXHRcdFx0dmFyIG1vcmVNb2R1bGVzID0gY2h1bmsubW9kdWxlcywgY2h1bmtJZHMgPSBjaHVuay5pZHM7XG4gXHRcdFx0Zm9yKHZhciBtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHRcdGZvcih2YXIgaSA9IDA7IGkgPCBjaHVua0lkcy5sZW5ndGg7IGkrKylcbiBcdFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkc1tpXV0gPSAwO1xuIFx0XHR9XG4gXHRcdHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlcyk7XG4gXHR9O1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIHVuY2F1Z2h0IGVycm9yIGhhbmRsZXIgZm9yIHdlYnBhY2sgcnVudGltZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vZSA9IGZ1bmN0aW9uKGVycikge1xuIFx0XHRwcm9jZXNzLm5leHRUaWNrKGZ1bmN0aW9uKCkge1xuIFx0XHRcdHRocm93IGVycjsgLy8gY2F0Y2ggdGhpcyBlcnJvciBieSB1c2luZyBpbXBvcnQoKS5jYXRjaCgpXG4gXHRcdH0pO1xuIFx0fTtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9pbmRleC5qc1wiKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZS5qc1wiKTsiLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IHsgRmxleCwgQ29udGFpbmVyIH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcclxuXHJcbmltcG9ydCB7IE1vbmdvQ2xpZW50IH0gZnJvbSBcIm1vbmdvZGJcIjtcclxuaW1wb3J0IGxvYWRhYmxlIGZyb20gXCJAbG9hZGFibGUvY29tcG9uZW50XCI7XHJcblxyXG5pbXBvcnQgeyBCc1BlcnNvbkNpcmNsZSwgQnNUb29scywgQnNGaWxlcywgQnNTdGFyIH0gZnJvbSBcInJlYWN0LWljb25zL2JzXCI7XHJcblxyXG5jb25zdCBMZWZ0Q29sdW1uID0gbG9hZGFibGUoKCkgPT4gaW1wb3J0KFwiLi4vY29tcG9uZW50cy9sZWZ0Q29sdW1uXCIpKTtcclxuY29uc3QgUHJlc2VudGF0aW9uID0gbG9hZGFibGUoKCkgPT4gaW1wb3J0KFwiLi4vY29tcG9uZW50cy9wcmVzZW50YXRpb25cIikpO1xyXG5jb25zdCBUb29sa2l0ID0gbG9hZGFibGUoKCkgPT4gaW1wb3J0KFwiLi4vY29tcG9uZW50cy90b29sa2l0XCIpKTtcclxuY29uc3QgUHJvamVjdHMgPSBsb2FkYWJsZSgoKSA9PiBpbXBvcnQoXCIuLi9jb21wb25lbnRzL3Byb2plY3RzXCIpKTtcclxuY29uc3QgQ2VydGlmaWNhdGVzID0gbG9hZGFibGUoKCkgPT4gaW1wb3J0KFwiLi4vY29tcG9uZW50cy9jZXJ0aWZpY2F0ZXMuanNcIikpO1xyXG5jb25zdCBNYWluTmF2aWdhdGlvbiA9IGxvYWRhYmxlKCgpID0+XHJcbiAgaW1wb3J0KFwiLi4vY29tcG9uZW50cy9sYXlvdXQvTWFpbk5hdmlnYXRpb24uanNcIilcclxuKTtcclxuXHJcbmNvbnN0IHNlY3Rpb25zID0ge1xyXG4gIHByZXNlbnRhdGlvbjogeyBpY29uOiBCc1BlcnNvbkNpcmNsZSB9LFxyXG4gIHRvb2xraXQ6IHsgaWNvbjogQnNUb29scyB9LFxyXG4gIHByb2plY3RzOiB7IGljb246IEJzRmlsZXMgfSxcclxuICBjZXJ0aWZpY2F0ZXM6IHsgaWNvbjogQnNTdGFyIH0sXHJcbn07XHJcblxyXG5mdW5jdGlvbiBIb21lUGFnZShwcm9wcykge1xyXG4gIGNvbnN0IFt2aXNpYmxlQ29udGVudCwgc2V0VmlzaWJsZUNvbnRlbnRdID0gUmVhY3QudXNlU3RhdGUoXCJwcmVzZW50YXRpb25cIik7XHJcblxyXG4gIGNvbnN0IHBhclJlZiA9IFJlYWN0LnVzZVJlZihudWxsKTtcclxuXHJcbiAgbGV0IGNvbnRlbnQ7XHJcbiAgc3dpdGNoICh2aXNpYmxlQ29udGVudCkge1xyXG4gICAgY2FzZSBcInByZXNlbnRhdGlvblwiOlxyXG4gICAgICBjb250ZW50ID0gKFxyXG4gICAgICAgIDxGbGV4XHJcbiAgICAgICAgICBjb2xvcj1cIndoaXRlXCJcclxuICAgICAgICAgIGp1c3RpZnlTZWxmPVwiY2VudGVyXCJcclxuICAgICAgICAgIG1pbkhlaWdodD1cIjcwdmhcIlxyXG4gICAgICAgICAgZGlyZWN0aW9uPXtbXCJjb2x1bW5cIiwgbnVsbCwgXCJyb3dcIl19XHJcbiAgICAgICAgICBtYj17NX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8TGVmdENvbHVtblxyXG4gICAgICAgICAgICBpblZpZXdPcHRpb25zPXt7XHJcbiAgICAgICAgICAgICAgdGhyZXNob2xkOiAwLjMsXHJcbiAgICAgICAgICAgICAgcm9vdE1hcmdpbjogXCIwcHhcIixcclxuICAgICAgICAgICAgICByb290OiBwYXJSZWY/LmN1cnJlbnQsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPFByZXNlbnRhdGlvbiAvPlxyXG4gICAgICAgIDwvRmxleD5cclxuICAgICAgKTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFwidG9vbGtpdFwiOlxyXG4gICAgICBjb250ZW50ID0gKFxyXG4gICAgICAgIDxUb29sa2l0XHJcbiAgICAgICAgICB0b29scz17cHJvcHMudG9vbGtpdH1cclxuICAgICAgICAgIGluVmlld09wdGlvbnM9e3tcclxuICAgICAgICAgICAgdGhyZXNob2xkOiAwLjE1LFxyXG4gICAgICAgICAgICByb290TWFyZ2luOiBcIjBweFwiLFxyXG4gICAgICAgICAgICByb290OiBwYXJSZWY/LmN1cnJlbnQsXHJcbiAgICAgICAgICAgIC8vIHRyaWdnZXJPbmNlOiB0cnVlLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICAvPlxyXG4gICAgICApO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgXCJwcm9qZWN0c1wiOlxyXG4gICAgICBjb250ZW50ID0gKFxyXG4gICAgICAgIDxQcm9qZWN0c1xyXG4gICAgICAgICAgcHJvamVjdHM9e3Byb3BzLnByb2plY3RzfVxyXG4gICAgICAgICAgaW5WaWV3T3B0aW9ucz17e1xyXG4gICAgICAgICAgICB0aHJlc2hvbGQ6IDAuMTUsXHJcbiAgICAgICAgICAgIHJvb3RNYXJnaW46IFwiMHB4XCIsXHJcbiAgICAgICAgICAgIHJvb3Q6IHBhclJlZj8uY3VycmVudCxcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgLz5cclxuICAgICAgKTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFwiY2VydGlmaWNhdGVzXCI6XHJcbiAgICAgIGNvbnRlbnQgPSA8Q2VydGlmaWNhdGVzIC8+O1xyXG4gICAgICBicmVhaztcclxuICAgIGRlZmF1bHQ6XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+UC5ZYXJha2hvdmljaDwvdGl0bGU+XHJcbiAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIlBhdmVsIFlhcmFraG92aWNoIHBlcnNvbmFsIHBhZ2UuXCIgLz5cclxuICAgICAgPC9IZWFkPlxyXG5cclxuICAgICAgPEZsZXggZmxleERpcmVjdGlvbj1cInJvd1wiIGhlaWdodD1cIjEwMHZoXCIgb3ZlcmZsb3c9XCJoaWRkZW5cIiBiZz1cImdyYXkuMzAwXCI+XHJcbiAgICAgICAgPE1haW5OYXZpZ2F0aW9uXHJcbiAgICAgICAgICBzZWN0aW9ucz17c2VjdGlvbnN9XHJcbiAgICAgICAgICB2aXNpYmxlQ29udGVudD17dmlzaWJsZUNvbnRlbnR9XHJcbiAgICAgICAgICBzZWxlY3RDb250ZW50PXtzZXRWaXNpYmxlQ29udGVudH1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxDb250YWluZXIgbWF4Vz1cImNvbnRhaW5lci54bFwiIHA9ezR9IGg9XCIxMDAlXCIgb3ZlcmZsb3c9XCJhdXRvXCI+XHJcbiAgICAgICAgICB7Y29udGVudH1cclxuICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgPC9GbGV4PlxyXG4gICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICApO1xyXG59XHJcblxyXG4vLyBleHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGNvbnRleHQpIHtcclxuLy8gICBjb25zdCByZXEgPSBjb250ZXh0LnJlcTtcclxuLy8gICBjb25zdCByZXMgPSBjb250ZXh0LnJlcztcclxuXHJcbi8vICAgLy8gZmV0Y2ggZGF0YSBmcm9tIGFuIEFQSVxyXG4vLyAgIHJldHVybiB7XHJcbi8vICAgICBwcm9wczoge1xyXG4vLyAgICAgICBtZWV0dXBzOiBNT0NLX01FRVRVUCxcclxuLy8gICAgIH0sXHJcbi8vICAgfTtcclxuLy8gfVxyXG5cclxuLy8gZ2V0U3RhdGljUHJvcHMgZnVuY3Rpb24gaXMgY2FsbGVkIGJlZm9yZSBIb21lUGFnZSBmdW5jdGlvblxyXG4vLyBuZXZlciBleGVjdXRlcyBvbiB0aGUgY2xpZW50XHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcclxuICAvLyBmZXRjaCBkYXRhIGZyb20gYW4gQVBJXHJcbiAgY29uc3QgY2xpZW50ID0gYXdhaXQgTW9uZ29DbGllbnQuY29ubmVjdChcclxuICAgIFwibW9uZ29kYitzcnY6Ly9QYXNoYTpBUVRjMnNUTEFEMGp4YTF3QG5vZGUubHBzeDkubW9uZ29kYi5uZXQvY3Y/cmV0cnlXcml0ZXM9dHJ1ZSZ3PW1ham9yaXR5XCJcclxuICApO1xyXG4gIGNvbnN0IGRiID0gY2xpZW50LmRiKCk7XHJcblxyXG4gIGNvbnN0IHRvb2xzQ29sbGVjdGlvbiA9IGRiLmNvbGxlY3Rpb24oXCJ0b29sc1wiKTtcclxuICBjb25zdCB0b29scyA9IGF3YWl0IHRvb2xzQ29sbGVjdGlvbi5maW5kKCkudG9BcnJheSgpO1xyXG5cclxuICBjb25zdCBwcm9qZWN0c0NvbGxlY3Rpb24gPSBkYi5jb2xsZWN0aW9uKFwicHJvamVjdHNcIik7XHJcbiAgY29uc3QgcHJvamVjdHMgPSBhd2FpdCBwcm9qZWN0c0NvbGxlY3Rpb24uZmluZCgpLnRvQXJyYXkoKTtcclxuXHJcbiAgY29uc3QgdG9vbGtpdCA9IHRvb2xzLm1hcCgodG9vbCkgPT4gKHtcclxuICAgIGlkOiB0b29sLl9pZC50b1N0cmluZygpLFxyXG4gICAgY2F0ZWdvcnk6IHRvb2wuY2F0ZWdvcnksXHJcbiAgICB0aXRsZTogdG9vbC50aXRsZSxcclxuICAgIHByb2plY3RzOiBwcm9qZWN0cy5maWx0ZXIoKHByKSA9PlxyXG4gICAgICBwci50b29scy5zb21lKCh0KSA9PiB0LnRvU3RyaW5nKCkgPT09IHRvb2wuX2lkLnRvU3RyaW5nKCkpXHJcbiAgICApLmxlbmd0aCxcclxuICAgIGxldmVsOiB0b29sLmxldmVsLFxyXG4gIH0pKTtcclxuXHJcbiAgY2xpZW50LmNsb3NlKCk7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICB0b29sa2l0LFxyXG4gICAgICBwcm9qZWN0czogcHJvamVjdHMubWFwKChwKSA9PiAoe1xyXG4gICAgICAgIGlkOiBwLl9pZC50b1N0cmluZygpLFxyXG4gICAgICAgIHRpdGxlOiBwLnRpdGxlLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBwLmRlc2NyaXB0aW9uLFxyXG4gICAgICAgIGR1dGllczogcC5kdXRpZXMsXHJcbiAgICAgICAgdG9vbHM6IHAudG9vbHMubWFwKCh0KSA9PlxyXG4gICAgICAgICAgdG9vbGtpdC5maW5kKCh0b29sKSA9PiB0b29sLmlkID09PSB0LnRvU3RyaW5nKCkpXHJcbiAgICAgICAgKSxcclxuICAgICAgfSkpLFxyXG4gICAgfSxcclxuICAgIHJldmFsaWRhdGU6IDEwLCAvLyBpbiBzZWNvbmRzXHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZVBhZ2U7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBjaGFrcmEtdWkvcmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGxvYWRhYmxlL2NvbXBvbmVudFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb25nb2RiXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pY29ucy9ic1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pY29ucy9mYVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pY29ucy9tZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pbnRlcnNlY3Rpb24tb2JzZXJ2ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=