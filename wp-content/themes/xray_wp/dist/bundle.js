/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./assets/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/index.js":
/*!*************************!*\
  !*** ./assets/index.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/babel-loader/lib/index.js):\\nError: Cannot find module '@babel/core'\\n babel-loader@8 requires Babel 7.x (the package '@babel/core'). If you'd like to use Babel 6.x ('babel-core'), you should install 'babel-loader@7'.\\n    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:603:15)\\n    at Function.Module._load (internal/modules/cjs/loader.js:529:25)\\n    at Module.require (internal/modules/cjs/loader.js:659:17)\\n    at require (d:\\\\xampp\\\\htdocs\\\\wordpress\\\\wp-content\\\\themes\\\\twentyseventeen\\\\node_modules\\\\v8-compile-cache\\\\v8-compile-cache.js:159:20)\\n    at Object.<anonymous> (d:\\\\xampp\\\\htdocs\\\\wordpress\\\\wp-content\\\\themes\\\\twentyseventeen\\\\node_modules\\\\babel-loader\\\\lib\\\\index.js:10:11)\\n    at Module._compile (d:\\\\xampp\\\\htdocs\\\\wordpress\\\\wp-content\\\\themes\\\\twentyseventeen\\\\node_modules\\\\v8-compile-cache\\\\v8-compile-cache.js:178:30)\\n    at Object.Module._extensions..js (internal/modules/cjs/loader.js:734:10)\\n    at Module.load (internal/modules/cjs/loader.js:620:32)\\n    at tryModuleLoad (internal/modules/cjs/loader.js:560:12)\\n    at Function.Module._load (internal/modules/cjs/loader.js:552:3)\\n    at Module.require (internal/modules/cjs/loader.js:659:17)\\n    at require (d:\\\\xampp\\\\htdocs\\\\wordpress\\\\wp-content\\\\themes\\\\twentyseventeen\\\\node_modules\\\\v8-compile-cache\\\\v8-compile-cache.js:159:20)\\n    at loadLoader (d:\\\\xampp\\\\htdocs\\\\wordpress\\\\wp-content\\\\themes\\\\twentyseventeen\\\\node_modules\\\\loader-runner\\\\lib\\\\loadLoader.js:13:17)\\n    at iteratePitchingLoaders (d:\\\\xampp\\\\htdocs\\\\wordpress\\\\wp-content\\\\themes\\\\twentyseventeen\\\\node_modules\\\\loader-runner\\\\lib\\\\LoaderRunner.js:169:2)\\n    at runLoaders (d:\\\\xampp\\\\htdocs\\\\wordpress\\\\wp-content\\\\themes\\\\twentyseventeen\\\\node_modules\\\\loader-runner\\\\lib\\\\LoaderRunner.js:362:2)\\n    at NormalModule.doBuild (d:\\\\xampp\\\\htdocs\\\\wordpress\\\\wp-content\\\\themes\\\\twentyseventeen\\\\node_modules\\\\webpack\\\\lib\\\\NormalModule.js:280:3)\\n    at NormalModule.build (d:\\\\xampp\\\\htdocs\\\\wordpress\\\\wp-content\\\\themes\\\\twentyseventeen\\\\node_modules\\\\webpack\\\\lib\\\\NormalModule.js:427:15)\\n    at Compilation.buildModule (d:\\\\xampp\\\\htdocs\\\\wordpress\\\\wp-content\\\\themes\\\\twentyseventeen\\\\node_modules\\\\webpack\\\\lib\\\\Compilation.js:633:10)\\n    at moduleFactory.create (d:\\\\xampp\\\\htdocs\\\\wordpress\\\\wp-content\\\\themes\\\\twentyseventeen\\\\node_modules\\\\webpack\\\\lib\\\\Compilation.js:1019:12)\\n    at factory (d:\\\\xampp\\\\htdocs\\\\wordpress\\\\wp-content\\\\themes\\\\twentyseventeen\\\\node_modules\\\\webpack\\\\lib\\\\NormalModuleFactory.js:405:6)\\n    at hooks.afterResolve.callAsync (d:\\\\xampp\\\\htdocs\\\\wordpress\\\\wp-content\\\\themes\\\\twentyseventeen\\\\node_modules\\\\webpack\\\\lib\\\\NormalModuleFactory.js:155:13)\\n    at AsyncSeriesWaterfallHook.eval [as callAsync] (eval at create (d:\\\\xampp\\\\htdocs\\\\wordpress\\\\wp-content\\\\themes\\\\twentyseventeen\\\\node_modules\\\\tapable\\\\lib\\\\HookCodeFactory.js:32:10), <anonymous>:6:1)\\n    at AsyncSeriesWaterfallHook.lazyCompileHook (d:\\\\xampp\\\\htdocs\\\\wordpress\\\\wp-content\\\\themes\\\\twentyseventeen\\\\node_modules\\\\tapable\\\\lib\\\\Hook.js:154:20)\\n    at resolver (d:\\\\xampp\\\\htdocs\\\\wordpress\\\\wp-content\\\\themes\\\\twentyseventeen\\\\node_modules\\\\webpack\\\\lib\\\\NormalModuleFactory.js:138:29)\\n    at process.nextTick (d:\\\\xampp\\\\htdocs\\\\wordpress\\\\wp-content\\\\themes\\\\twentyseventeen\\\\node_modules\\\\webpack\\\\lib\\\\NormalModuleFactory.js:342:9)\\n    at process.internalTickCallback (internal/process/next_tick.js:70:11)\");\n\n//# sourceURL=webpack:///./assets/index.js?");

/***/ })

/******/ });