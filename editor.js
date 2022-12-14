/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/editor.js":
/*!**************************!*\
  !*** ./src/js/editor.js ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_editor_init__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/editor-init */ \"./src/js/modules/editor-init.js\");\n\n\n\n\n\n\n/* ///////////////////////\ninit\n/////////////////////// */\n(0,_modules_editor_init__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n//# sourceURL=webpack://roots-faq-blocks/./src/js/editor.js?");

/***/ }),

/***/ "./src/js/modules/create-cal.js":
/*!**************************************!*\
  !*** ./src/js/modules/create-cal.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createFunc\": function() { return /* binding */ createFunc; },\n/* harmony export */   \"default\": function() { return /* export default binding */ __WEBPACK_DEFAULT_EXPORT__; }\n/* harmony export */ });\n\n\nfunction createFunc() {\n  var calBox = document.getElementsByName('calBox')[0];\n  var week = [\"日\", \"月\", \"火\", \"水\", \"木\", \"金\", \"土\"];\n  var today = new Date();\n  var showNum = 12;\n  showProcess(today);\n\n  /*-----------------------------------------\n  年間カレンダー作成\n  -----------------------------------------*/\n  function showProcess(date) {\n    var year = date.getFullYear();\n    var month = date.getMonth();\n    for (var i = 0; i < showNum; i++) {\n      // 1月分のカレンダーwrap\n      var calBoxInner = document.createElement('div');\n      calBoxInner.className = 'rc_calbox';\n      if (month + i + 1 <= 12) {\n        calBoxInner.innerHTML = '<h6>' + year + \"年 \" + (month + i + 1) + \"月\" + '</h6>';\n      } else {\n        calBoxInner.innerHTML = '<h6>' + (year + 1) + \"年 \" + (month + i + 1 - 12) + \"月\" + '</h6>';\n      }\n      var calBoxTable = document.createElement('table');\n      calBoxTable.innerHTML += createProcess(year, month + i);\n      calBoxInner.appendChild(calBoxTable);\n      calBox.appendChild(calBoxInner);\n    }\n  }\n\n  /*-----------------------------------------\n  カレンダーテーブル生成\n  -----------------------------------------*/\n  function createProcess(year, month) {\n    var calendar = \"<tr class='dayOfWeek'>\";\n    for (var i = 0; i < week.length; i++) {\n      calendar += \"<th>\" + week[i] + \"</th>\";\n    }\n    calendar += \"</tr>\";\n    var count = 0;\n    var startDayOfWeek = new Date(year, month, 1).getDay();\n    var endDate = new Date(year, month + 1, 0).getDate();\n    var lastMonthEndDate = new Date(year, month, 0).getDate();\n    var row = Math.ceil((startDayOfWeek + endDate) / week.length);\n    var buttonDomCreate = function buttonDomCreate(year, month, day) {\n      return \"<a class='rc_addbtn' data-date='\" + year + \"-\" + month + \"-\" + day + \"'>+</a><input type='checkbox' name='allset'>\";\n    };\n    for (var i = 0; i < row; i++) {\n      calendar += \"<tr>\";\n      for (var j = 0; j < week.length; j++) {\n        if (i == 0 && j < startDayOfWeek) {\n          calendar += \"<td class='disabled'>\" + (lastMonthEndDate - startDayOfWeek + j + 1) + \"</td>\";\n        } else if (count >= endDate) {\n          count++;\n          var counta = count - endDate;\n          counta = counta.toString().padStart(2, '0');\n          calendar += \"<td class='disabled'>\" + counta + \"</td>\";\n        } else {\n          count++;\n          if (year == today.getFullYear() && month == today.getMonth() && count == today.getDate()) {\n            var counta = count;\n            var montha = month + 1;\n            counta = counta.toString().padStart(2, '0');\n            calendar += \"<td>\" + count + buttonDomCreate(year, month, counta) + \"</td>\";\n          } else if (year == today.getFullYear() && month == today.getMonth() && count < today.getDate()) {\n            var counta = count;\n            counta = counta.toString().padStart(2, '0');\n            calendar += \"<td>\" + count + \"</td>\";\n          } else {\n            var counta = count;\n            counta = counta.toString().padStart(2, '0');\n            if (month + 1 <= 12) {\n              var montha = month + 1;\n              montha = montha.toString().padStart(2, '0');\n              calendar += \"<td>\" + count + buttonDomCreate(year, montha, counta) + \"</td>\";\n            } else {\n              var montha = month + 1 - 12;\n              montha = montha.toString().padStart(2, '0');\n              calendar += \"<td>>\" + count + buttonDomCreate(year, montha, counta) + \"</td>\";\n            }\n          }\n        }\n      }\n      calendar += \"</tr>\";\n    }\n    return calendar;\n  }\n\n  // 生成したカレンダーのプラスボタンをクリックイベント\n  function rcBtnAction() {\n    var rc_addbtn = document.getElementsByClassName('rc_addbtn');\n    for (var i = 0; i < rc_addbtn.length; i++) {\n      rc_addbtn[i].addEventListener('click', function () {\n        var date = this.dataset.date;\n        createInputView(date);\n      });\n    }\n  }\n  rcBtnAction();\n\n  // クリックイベントアクション\n  function createInputView(date) {\n    var calContainer = document.getElementsByName('calContainer')[0];\n    var eventDom = \"<div><p>\" + date + \"</p><input type='text'></div>\";\n    var eventDomContent = document.createElement('div');\n    eventDomContent.className = 'rc_cal__inputWrap';\n    eventDomContent.innerHTML += eventDom;\n    calContainer.appendChild(eventDomContent);\n  }\n}\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {}\n\n//# sourceURL=webpack://roots-faq-blocks/./src/js/modules/create-cal.js?");

/***/ }),

/***/ "./src/js/modules/editor-init.js":
/*!***************************************!*\
  !*** ./src/js/modules/editor-init.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* export default binding */ __WEBPACK_DEFAULT_EXPORT__; }\n/* harmony export */ });\n/* harmony import */ var _create_cal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-cal */ \"./src/js/modules/create-cal.js\");\n\n\n\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {\n  _create_cal__WEBPACK_IMPORTED_MODULE_0__.createFunc();\n}\n\n//# sourceURL=webpack://roots-faq-blocks/./src/js/modules/editor-init.js?");

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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/editor.js");
/******/ 	
/******/ })()
;