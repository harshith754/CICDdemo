/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/calculator/add.js":
/*!*******************************!*\
  !*** ./src/calculator/add.js ***!
  \*******************************/
/***/ ((module) => {

eval("/**\r\n * Addition\r\n */\nfunction add(firstNum, secondNum) {\n  return firstNum + secondNum;\n}\nmodule.exports = add;\n\n//# sourceURL=webpack://cicd-pipeline/./src/calculator/add.js?");

/***/ }),

/***/ "./src/calculator/divide.js":
/*!**********************************!*\
  !*** ./src/calculator/divide.js ***!
  \**********************************/
/***/ (() => {

eval("/**\r\n * Division\r\n */\n\n//# sourceURL=webpack://cicd-pipeline/./src/calculator/divide.js?");

/***/ }),

/***/ "./src/calculator/multiply.js":
/*!************************************!*\
  !*** ./src/calculator/multiply.js ***!
  \************************************/
/***/ (() => {

eval("/**\r\n * Multiplication\r\n */\n\n//# sourceURL=webpack://cicd-pipeline/./src/calculator/multiply.js?");

/***/ }),

/***/ "./src/calculator/subtract.js":
/*!************************************!*\
  !*** ./src/calculator/subtract.js ***!
  \************************************/
/***/ (() => {

eval("/**\r\n * Subtraction\r\n */\n\n//# sourceURL=webpack://cicd-pipeline/./src/calculator/subtract.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// import files\nvar add = __webpack_require__(/*! ./calculator/add */ \"./src/calculator/add.js\");\nvar subtract = __webpack_require__(/*! ./calculator/subtract */ \"./src/calculator/subtract.js\");\nvar multiply = __webpack_require__(/*! ./calculator/multiply */ \"./src/calculator/multiply.js\");\nvar divide = __webpack_require__(/*! ./calculator/divide */ \"./src/calculator/divide.js\");\nwindow.onload = function () {\n  document.getElementById(\"calculateBtn\").addEventListener(\"click\", calculate);\n};\nfunction calculate() {\n  var firstNum = parseInt(document.getElementById(\"firstnumber\").value);\n  var secondNum = parseInt(document.getElementById(\"secondnumber\").value);\n  var operator = document.getElementById(\"operator\").value;\n  var resultElm = document.getElementById(\"result\");\n  var result;\n  try {\n    switch (operator) {\n      case \"add\":\n        result = add(firstNum, secondNum);\n        break;\n      case \"subtract\":\n        result = subtract(firstNum, secondNum);\n        break;\n      case \"multiply\":\n        result = multiply(firstNum, secondNum);\n        break;\n      case \"divide\":\n        result = divide(firstNum, secondNum);\n        break;\n      default:\n        alert(\"Error!\");\n        break;\n    }\n    resultElm.textContent = \"Result: \" + result;\n    resultElm.style.color = \"black\";\n  } catch (error) {\n    resultElm.textContent = \"Error: \" + error.message;\n    resultElm.style.color = \"red\";\n  }\n}\n\n//# sourceURL=webpack://cicd-pipeline/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;