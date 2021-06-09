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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: getStaticProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getStaticProps\", function() { return getStaticProps; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/react */ \"@chakra-ui/react\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _loadable_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @loadable/component */ \"@loadable/component\");\n/* harmony import */ var _loadable_component__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_loadable_component__WEBPACK_IMPORTED_MODULE_5__);\n\nvar _jsxFileName = \"/home/devpc/Documents/next-learn/pages/index.js\";\n\n\n\n\n\nconst LeftColumn = _loadable_component__WEBPACK_IMPORTED_MODULE_5___default()(() => __webpack_require__.e(/*! import() */ 3).then(__webpack_require__.bind(null, /*! ../components/leftColumn */ \"./components/leftColumn.js\")));\nconst Presentation = _loadable_component__WEBPACK_IMPORTED_MODULE_5___default()(() => __webpack_require__.e(/*! import() */ 4).then(__webpack_require__.bind(null, /*! ../components/presentation */ \"./components/presentation.js\")));\nconst Toolkit = _loadable_component__WEBPACK_IMPORTED_MODULE_5___default()(() => __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.bind(null, /*! ../components/toolkit */ \"./components/toolkit.js\")));\nconst Projects = _loadable_component__WEBPACK_IMPORTED_MODULE_5___default()(() => __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! ../components/projects */ \"./components/projects.js\")));\nconst Certificates = _loadable_component__WEBPACK_IMPORTED_MODULE_5___default()(() => __webpack_require__.e(/*! import() */ 2).then(__webpack_require__.bind(null, /*! ../components/certificates.js */ \"./components/certificates.js\")));\n\nfunction HomePage(props) {\n  const parRef = react__WEBPACK_IMPORTED_MODULE_1___default.a.useRef(null);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"title\", {\n        children: \"P.Yarakhovich\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 19,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n        name: \"description\",\n        content: \"Pavel Yarakhovich personal page.\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 20,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"Flex\"], {\n      color: \"white\",\n      justifySelf: \"center\",\n      minHeight: \"70vh\",\n      direction: [\"column\", null, \"row\"],\n      mb: 5,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(LeftColumn, {\n        inViewOptions: {\n          threshold: 0.3,\n          rootMargin: \"0px\",\n          root: parRef === null || parRef === void 0 ? void 0 : parRef.current\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 30,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Presentation, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 37,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Toolkit, {\n      tools: props.toolkit,\n      inViewOptions: {\n        threshold: 0.15,\n        rootMargin: \"0px\",\n        root: parRef === null || parRef === void 0 ? void 0 : parRef.current // triggerOnce: true,\n\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Projects, {\n      projects: props.projects,\n      inViewOptions: {\n        threshold: 0.15,\n        rootMargin: \"0px\",\n        root: parRef === null || parRef === void 0 ? void 0 : parRef.current\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Certificates, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 17,\n    columnNumber: 5\n  }, this);\n} // export async function getServerSideProps(context) {\n//   const req = context.req;\n//   const res = context.res;\n//   // fetch data from an API\n//   return {\n//     props: {\n//       meetups: MOCK_MEETUP,\n//     },\n//   };\n// }\n// getStaticProps function is called before HomePage function\n// never executes on the client\n\n\nasync function getStaticProps() {\n  // fetch data from an API\n  const client = await mongodb__WEBPACK_IMPORTED_MODULE_4__[\"MongoClient\"].connect(\"mongodb+srv://Pasha:AQTc2sTLAD0jxa1w@node.lpsx9.mongodb.net/cv?retryWrites=true&w=majority\");\n  const db = client.db();\n  const toolsCollection = db.collection(\"tools\");\n  const tools = await toolsCollection.find().toArray();\n  const projectsCollection = db.collection(\"projects\");\n  const projects = await projectsCollection.find().toArray();\n  const toolkit = tools.map(tool => ({\n    id: tool._id.toString(),\n    category: tool.category,\n    title: tool.title,\n    projects: projects.filter(pr => pr.tools.some(t => t.toString() === tool._id.toString())).length,\n    level: tool.level\n  }));\n  client.close();\n  return {\n    props: {\n      toolkit,\n      projects: projects.map(p => ({\n        id: p._id.toString(),\n        title: p.title,\n        description: p.description,\n        duties: p.duties,\n        tools: p.tools.map(t => toolkit.find(tool => tool.id === t.toString()))\n      }))\n    },\n    revalidate: 10 // in seconds\n\n  };\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIkxlZnRDb2x1bW4iLCJsb2FkYWJsZSIsIlByZXNlbnRhdGlvbiIsIlRvb2xraXQiLCJQcm9qZWN0cyIsIkNlcnRpZmljYXRlcyIsIkhvbWVQYWdlIiwicHJvcHMiLCJwYXJSZWYiLCJSZWFjdCIsInVzZVJlZiIsInRocmVzaG9sZCIsInJvb3RNYXJnaW4iLCJyb290IiwiY3VycmVudCIsInRvb2xraXQiLCJwcm9qZWN0cyIsImdldFN0YXRpY1Byb3BzIiwiY2xpZW50IiwiTW9uZ29DbGllbnQiLCJjb25uZWN0IiwiZGIiLCJ0b29sc0NvbGxlY3Rpb24iLCJjb2xsZWN0aW9uIiwidG9vbHMiLCJmaW5kIiwidG9BcnJheSIsInByb2plY3RzQ29sbGVjdGlvbiIsIm1hcCIsInRvb2wiLCJpZCIsIl9pZCIsInRvU3RyaW5nIiwiY2F0ZWdvcnkiLCJ0aXRsZSIsImZpbHRlciIsInByIiwic29tZSIsInQiLCJsZW5ndGgiLCJsZXZlbCIsImNsb3NlIiwicCIsImRlc2NyaXB0aW9uIiwiZHV0aWVzIiwicmV2YWxpZGF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQSxNQUFNQSxVQUFVLEdBQUdDLDBEQUFRLENBQUMsTUFBTSwySUFBUCxDQUEzQjtBQUNBLE1BQU1DLFlBQVksR0FBR0QsMERBQVEsQ0FBQyxNQUFNLCtJQUFQLENBQTdCO0FBQ0EsTUFBTUUsT0FBTyxHQUFHRiwwREFBUSxDQUFDLE1BQU0scUlBQVAsQ0FBeEI7QUFDQSxNQUFNRyxRQUFRLEdBQUdILDBEQUFRLENBQUMsTUFBTSx1SUFBUCxDQUF6QjtBQUNBLE1BQU1JLFlBQVksR0FBR0osMERBQVEsQ0FBQyxNQUFNLGtKQUFQLENBQTdCOztBQUVBLFNBQVNLLFFBQVQsQ0FBa0JDLEtBQWxCLEVBQXlCO0FBQ3ZCLFFBQU1DLE1BQU0sR0FBR0MsNENBQUssQ0FB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LENBQUQsSUFBT0EsQ0FBQyxDQUFDTixRQUFGLE9BQWlCSCxJQUFJLENBQUNFLEdBQUwsQ0FBU0MsUUFBVCxFQUF0QyxDQURRLEVBRVJPLE1BTmlDO0FBT25DQyxTQUFLLEVBQUVYLElBQUksQ0FBQ1c7QUFQdUIsR0FBWCxDQUFWLENBQWhCO0FBVUF0QixRQUFNLENBQUN1QixLQUFQO0FBRUEsU0FBTztBQUNMbEMsU0FBSyxFQUFFO0FBQ0xRLGFBREs7QUFFTEMsY0FBUSxFQUFFQSxRQUFRLENBQUNZLEdBQVQsQ0FBY2MsQ0FBRCxLQUFRO0FBQzdCWixVQUFFLEVBQUVZLENBQUMsQ0FBQ1gsR0FBRixDQUFNQyxRQUFOLEVBRHlCO0FBRTdCRSxhQUFLLEVBQUVRLENBQUMsQ0FBQ1IsS0FGb0I7QUFHN0JTLG1CQUFXLEVBQUVELENBQUMsQ0FBQ0MsV0FIYztBQUk3QkMsY0FBTSxFQUFFRixDQUFDLENBQUNFLE1BSm1CO0FBSzdCcEIsYUFBSyxFQUFFa0IsQ0FBQyxDQUFDbEIsS0FBRixDQUFRSSxHQUFSLENBQWFVLENBQUQsSUFDakJ2QixPQUFPLENBQUNVLElBQVIsQ0FBY0ksSUFBRCxJQUFVQSxJQUFJLENBQUNDLEVBQUwsS0FBWVEsQ0FBQyxDQUFDTixRQUFGLEVBQW5DLENBREs7QUFMc0IsT0FBUixDQUFiO0FBRkwsS0FERjtBQWFMYSxjQUFVLEVBQUUsRUFiUCxDQWFXOztBQWJYLEdBQVA7QUFlRDtBQUVjdkMsdUVBQWYiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCB7IEZsZXggfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xuXG5pbXBvcnQgeyBNb25nb0NsaWVudCB9IGZyb20gXCJtb25nb2RiXCI7XG5pbXBvcnQgbG9hZGFibGUgZnJvbSBcIkBsb2FkYWJsZS9jb21wb25lbnRcIjtcblxuY29uc3QgTGVmdENvbHVtbiA9IGxvYWRhYmxlKCgpID0+IGltcG9ydChcIi4uL2NvbXBvbmVudHMvbGVmdENvbHVtblwiKSk7XG5jb25zdCBQcmVzZW50YXRpb24gPSBsb2FkYWJsZSgoKSA9PiBpbXBvcnQoXCIuLi9jb21wb25lbnRzL3ByZXNlbnRhdGlvblwiKSk7XG5jb25zdCBUb29sa2l0ID0gbG9hZGFibGUoKCkgPT4gaW1wb3J0KFwiLi4vY29tcG9uZW50cy90b29sa2l0XCIpKTtcbmNvbnN0IFByb2plY3RzID0gbG9hZGFibGUoKCkgPT4gaW1wb3J0KFwiLi4vY29tcG9uZW50cy9wcm9qZWN0c1wiKSk7XG5jb25zdCBDZXJ0aWZpY2F0ZXMgPSBsb2FkYWJsZSgoKSA9PiBpbXBvcnQoXCIuLi9jb21wb25lbnRzL2NlcnRpZmljYXRlcy5qc1wiKSk7XG5cbmZ1bmN0aW9uIEhvbWVQYWdlKHByb3BzKSB7XG4gIGNvbnN0IHBhclJlZiA9IFJlYWN0LnVzZVJlZihudWxsKTtcbiAgcmV0dXJuIChcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPlAuWWFyYWtob3ZpY2g8L3RpdGxlPlxuICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiUGF2ZWwgWWFyYWtob3ZpY2ggcGVyc29uYWwgcGFnZS5cIiAvPlxuICAgICAgPC9IZWFkPlxuXG4gICAgICA8RmxleFxuICAgICAgICBjb2xvcj1cIndoaXRlXCJcbiAgICAgICAganVzdGlmeVNlbGY9XCJjZW50ZXJcIlxuICAgICAgICBtaW5IZWlnaHQ9XCI3MHZoXCJcbiAgICAgICAgZGlyZWN0aW9uPXtbXCJjb2x1bW5cIiwgbnVsbCwgXCJyb3dcIl19XG4gICAgICAgIG1iPXs1fVxuICAgICAgPlxuICAgICAgICA8TGVmdENvbHVtblxuICAgICAgICAgIGluVmlld09wdGlvbnM9e3tcbiAgICAgICAgICAgIHRocmVzaG9sZDogMC4zLFxuICAgICAgICAgICAgcm9vdE1hcmdpbjogXCIwcHhcIixcbiAgICAgICAgICAgIHJvb3Q6IHBhclJlZj8uY3VycmVudCxcbiAgICAgICAgICB9fVxuICAgICAgICAvPlxuICAgICAgICA8UHJlc2VudGF0aW9uIC8+XG4gICAgICA8L0ZsZXg+XG5cbiAgICAgIDxUb29sa2l0XG4gICAgICAgIHRvb2xzPXtwcm9wcy50b29sa2l0fVxuICAgICAgICBpblZpZXdPcHRpb25zPXt7XG4gICAgICAgICAgdGhyZXNob2xkOiAwLjE1LFxuICAgICAgICAgIHJvb3RNYXJnaW46IFwiMHB4XCIsXG4gICAgICAgICAgcm9vdDogcGFyUmVmPy5jdXJyZW50LFxuICAgICAgICAgIC8vIHRyaWdnZXJPbmNlOiB0cnVlLFxuICAgICAgICB9fVxuICAgICAgLz5cbiAgICAgIDxQcm9qZWN0c1xuICAgICAgICBwcm9qZWN0cz17cHJvcHMucHJvamVjdHN9XG4gICAgICAgIGluVmlld09wdGlvbnM9e3tcbiAgICAgICAgICB0aHJlc2hvbGQ6IDAuMTUsXG4gICAgICAgICAgcm9vdE1hcmdpbjogXCIwcHhcIixcbiAgICAgICAgICByb290OiBwYXJSZWY/LmN1cnJlbnQsXG4gICAgICAgIH19XG4gICAgICAvPlxuICAgICAgPENlcnRpZmljYXRlcyAvPlxuXG4gICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgKTtcbn1cblxuLy8gZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjb250ZXh0KSB7XG4vLyAgIGNvbnN0IHJlcSA9IGNvbnRleHQucmVxO1xuLy8gICBjb25zdCByZXMgPSBjb250ZXh0LnJlcztcblxuLy8gICAvLyBmZXRjaCBkYXRhIGZyb20gYW4gQVBJXG4vLyAgIHJldHVybiB7XG4vLyAgICAgcHJvcHM6IHtcbi8vICAgICAgIG1lZXR1cHM6IE1PQ0tfTUVFVFVQLFxuLy8gICAgIH0sXG4vLyAgIH07XG4vLyB9XG5cbi8vIGdldFN0YXRpY1Byb3BzIGZ1bmN0aW9uIGlzIGNhbGxlZCBiZWZvcmUgSG9tZVBhZ2UgZnVuY3Rpb25cbi8vIG5ldmVyIGV4ZWN1dGVzIG9uIHRoZSBjbGllbnRcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcbiAgLy8gZmV0Y2ggZGF0YSBmcm9tIGFuIEFQSVxuICBjb25zdCBjbGllbnQgPSBhd2FpdCBNb25nb0NsaWVudC5jb25uZWN0KFxuICAgIFwibW9uZ29kYitzcnY6Ly9QYXNoYTpBUVRjMnNUTEFEMGp4YTF3QG5vZGUubHBzeDkubW9uZ29kYi5uZXQvY3Y/cmV0cnlXcml0ZXM9dHJ1ZSZ3PW1ham9yaXR5XCJcbiAgKTtcbiAgY29uc3QgZGIgPSBjbGllbnQuZGIoKTtcblxuICBjb25zdCB0b29sc0NvbGxlY3Rpb24gPSBkYi5jb2xsZWN0aW9uKFwidG9vbHNcIik7XG4gIGNvbnN0IHRvb2xzID0gYXdhaXQgdG9vbHNDb2xsZWN0aW9uLmZpbmQoKS50b0FycmF5KCk7XG5cbiAgY29uc3QgcHJvamVjdHNDb2xsZWN0aW9uID0gZGIuY29sbGVjdGlvbihcInByb2plY3RzXCIpO1xuICBjb25zdCBwcm9qZWN0cyA9IGF3YWl0IHByb2plY3RzQ29sbGVjdGlvbi5maW5kKCkudG9BcnJheSgpO1xuXG4gIGNvbnN0IHRvb2xraXQgPSB0b29scy5tYXAoKHRvb2wpID0+ICh7XG4gICAgaWQ6IHRvb2wuX2lkLnRvU3RyaW5nKCksXG4gICAgY2F0ZWdvcnk6IHRvb2wuY2F0ZWdvcnksXG4gICAgdGl0bGU6IHRvb2wudGl0bGUsXG4gICAgcHJvamVjdHM6IHByb2plY3RzLmZpbHRlcigocHIpID0+XG4gICAgICBwci50b29scy5zb21lKCh0KSA9PiB0LnRvU3RyaW5nKCkgPT09IHRvb2wuX2lkLnRvU3RyaW5nKCkpXG4gICAgKS5sZW5ndGgsXG4gICAgbGV2ZWw6IHRvb2wubGV2ZWwsXG4gIH0pKTtcblxuICBjbGllbnQuY2xvc2UoKTtcblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICB0b29sa2l0LFxuICAgICAgcHJvamVjdHM6IHByb2plY3RzLm1hcCgocCkgPT4gKHtcbiAgICAgICAgaWQ6IHAuX2lkLnRvU3RyaW5nKCksXG4gICAgICAgIHRpdGxlOiBwLnRpdGxlLFxuICAgICAgICBkZXNjcmlwdGlvbjogcC5kZXNjcmlwdGlvbixcbiAgICAgICAgZHV0aWVzOiBwLmR1dGllcyxcbiAgICAgICAgdG9vbHM6IHAudG9vbHMubWFwKCh0KSA9PlxuICAgICAgICAgIHRvb2xraXQuZmluZCgodG9vbCkgPT4gdG9vbC5pZCA9PT0gdC50b1N0cmluZygpKVxuICAgICAgICApLFxuICAgICAgfSkpLFxuICAgIH0sXG4gICAgcmV2YWxpZGF0ZTogMTAsIC8vIGluIHNlY29uZHNcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZVBhZ2U7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "@chakra-ui/react":
/*!***********************************!*\
  !*** external "@chakra-ui/react" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@chakra-ui/react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAY2hha3JhLXVpL3JlYWN0XCI/M2I2NSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJAY2hha3JhLXVpL3JlYWN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGNoYWtyYS11aS9yZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@chakra-ui/react\n");

/***/ }),

/***/ "@loadable/component":
/*!**************************************!*\
  !*** external "@loadable/component" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@loadable/component\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbG9hZGFibGUvY29tcG9uZW50XCI/MDYwMSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJAbG9hZGFibGUvY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGxvYWRhYmxlL2NvbXBvbmVudFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@loadable/component\n");

/***/ }),

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongodb\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb25nb2RiXCI/ZGVmZiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJtb25nb2RiLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9uZ29kYlwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///mongodb\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/head\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIj81ZWYyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQvaGVhZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/head\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react-icons/fa":
/*!*********************************!*\
  !*** external "react-icons/fa" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-icons/fa\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pY29ucy9mYVwiP2Q2NmIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QtaWNvbnMvZmEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pY29ucy9mYVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-icons/fa\n");

/***/ }),

/***/ "react-icons/md":
/*!*********************************!*\
  !*** external "react-icons/md" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-icons/md\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pY29ucy9tZFwiP2YzZTkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QtaWNvbnMvbWQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pY29ucy9tZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-icons/md\n");

/***/ }),

/***/ "react-intersection-observer":
/*!**********************************************!*\
  !*** external "react-intersection-observer" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-intersection-observer\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pbnRlcnNlY3Rpb24tb2JzZXJ2ZXJcIj9hMTNjIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0LWludGVyc2VjdGlvbi1vYnNlcnZlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWludGVyc2VjdGlvbi1vYnNlcnZlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-intersection-observer\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ })

/******/ });