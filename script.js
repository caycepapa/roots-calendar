/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/modules/change-month.js":
/*!****************************************!*\
  !*** ./src/js/modules/change-month.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* export default binding */ __WEBPACK_DEFAULT_EXPORT__; }\n/* harmony export */ });\n\n\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {\n  // 各カレンダーを囲むコンテナを選択\n  var calendarContainers = document.querySelectorAll('.rc-calendar__wrap'); // '.rc-calendar-container' は各カレンダーコンテナのクラス名と仮定\n\n  calendarContainers.forEach(function (container) {\n    var rcPrevBtn = container.querySelectorAll('[name=\"rcPrevBtn\"]');\n    var rcNextBtn = container.querySelectorAll('[name=\"rcNextBtn\"]');\n    rcPrevBtn.forEach(function (btn) {\n      btn.addEventListener('click', function () {\n        if (!btn.classList.contains('is-blank')) {\n          show_table(btn, 'prev', container);\n        }\n      });\n    });\n    rcNextBtn.forEach(function (btn) {\n      btn.addEventListener('click', function () {\n        if (!btn.classList.contains('is-blank')) {\n          show_table(btn, 'next', container);\n        }\n      });\n    });\n  });\n  var show_table = function show_table(btnElem, flg, container) {\n    var rcPrevBtn = container.querySelectorAll('[name=\"rcPrevBtn\"]');\n    var rcNextBtn = container.querySelectorAll('[name=\"rcNextBtn\"]');\n\n    // 全てのボタンの 'is-blank' クラスを削除\n    rcPrevBtn.forEach(function (btn) {\n      return btn.classList.remove('is-blank');\n    });\n    rcNextBtn.forEach(function (btn) {\n      return btn.classList.remove('is-blank');\n    });\n    var rcHeader = btnElem.parentElement;\n    var rcWrap = rcHeader.parentElement;\n    var tables = rcWrap.querySelectorAll('.rc-calendar__table');\n    var currentTable = rcWrap.querySelector('.is-current');\n    var tablesArray = [].slice.call(tables);\n    var tableIndex = tablesArray.indexOf(currentTable);\n    for (var i = 0; i < tables.length; i++) {\n      tables[i].style.display = 'none';\n      tables[i].classList.remove('is-current');\n    }\n    if (flg == 'prev') {\n      tables[tableIndex - 1].style.display = 'table';\n      tables[tableIndex - 1].classList.add('is-current');\n    } else if (flg == 'next') {\n      tables[tableIndex + 1].style.display = 'table';\n      tables[tableIndex + 1].classList.add('is-current');\n    }\n    var nextTable = rcWrap.querySelector('.is-current');\n    if (nextTable.classList.contains('rc-calendar__table--first')) {\n      rcPrevBtn.forEach(function (btn) {\n        return btn.classList.add('is-blank');\n      });\n    }\n    if (nextTable.classList.contains('rc-calendar__table--last')) {\n      rcNextBtn.forEach(function (btn) {\n        return btn.classList.add('is-blank');\n      });\n    }\n    var targetLabel = nextTable.nextElementSibling;\n    set_ttl(targetLabel.innerText, container);\n  };\n  var set_ttl = function set_ttl(ttlTxt, container) {\n    var ttl_dom = container.querySelectorAll('[name=\"rcCalendarMonthTtl\"]');\n    ttl_dom.forEach(function (dom) {\n      return dom.innerText = ttlTxt;\n    });\n  };\n}\n\n//# sourceURL=webpack://roots-faq-blocks/./src/js/modules/change-month.js?");

/***/ }),

/***/ "./src/js/modules/device.min.js":
/*!**************************************!*\
  !*** ./src/js/modules/device.min.js ***!
  \**************************************/
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\n/*! device.js 0.2.7 */\n(function () {\n  var a, b, c, d, e, f, g, h, i, j;\n  b = window.device, a = {}, window.device = a, d = window.document.documentElement, j = window.navigator.userAgent.toLowerCase(), a.ios = function () {\n    return a.iphone() || a.ipod() || a.ipad();\n  }, a.iphone = function () {\n    return !a.windows() && e(\"iphone\");\n  }, a.ipod = function () {\n    return e(\"ipod\");\n  }, a.ipad = function () {\n    return e(\"ipad\");\n  }, a.android = function () {\n    return !a.windows() && e(\"android\");\n  }, a.androidPhone = function () {\n    return a.android() && e(\"mobile\");\n  }, a.androidTablet = function () {\n    return a.android() && !e(\"mobile\");\n  }, a.blackberry = function () {\n    return e(\"blackberry\") || e(\"bb10\") || e(\"rim\");\n  }, a.blackberryPhone = function () {\n    return a.blackberry() && !e(\"tablet\");\n  }, a.blackberryTablet = function () {\n    return a.blackberry() && e(\"tablet\");\n  }, a.windows = function () {\n    return e(\"windows\");\n  }, a.windowsPhone = function () {\n    return a.windows() && e(\"phone\");\n  }, a.windowsTablet = function () {\n    return a.windows() && e(\"touch\") && !a.windowsPhone();\n  }, a.fxos = function () {\n    return (e(\"(mobile;\") || e(\"(tablet;\")) && e(\"; rv:\");\n  }, a.fxosPhone = function () {\n    return a.fxos() && e(\"mobile\");\n  }, a.fxosTablet = function () {\n    return a.fxos() && e(\"tablet\");\n  }, a.meego = function () {\n    return e(\"meego\");\n  }, a.cordova = function () {\n    return window.cordova && \"file:\" === location.protocol;\n  }, a.nodeWebkit = function () {\n    return \"object\" == _typeof(window.process);\n  }, a.mobile = function () {\n    return a.androidPhone() || a.iphone() || a.ipod() || a.windowsPhone() || a.blackberryPhone() || a.fxosPhone() || a.meego();\n  }, a.tablet = function () {\n    return a.ipad() || a.androidTablet() || a.blackberryTablet() || a.windowsTablet() || a.fxosTablet();\n  }, a.desktop = function () {\n    return !a.tablet() && !a.mobile();\n  }, a.television = function () {\n    var a;\n    for (television = [\"googletv\", \"viera\", \"smarttv\", \"internet.tv\", \"netcast\", \"nettv\", \"appletv\", \"boxee\", \"kylo\", \"roku\", \"dlnadoc\", \"roku\", \"pov_tv\", \"hbbtv\", \"ce-html\"], a = 0; a < television.length;) {\n      if (e(television[a])) return !0;\n      a++;\n    }\n    return !1;\n  }, a.portrait = function () {\n    return window.innerHeight / window.innerWidth > 1;\n  }, a.landscape = function () {\n    return window.innerHeight / window.innerWidth < 1;\n  }, a.noConflict = function () {\n    return window.device = b, this;\n  }, e = function e(a) {\n    return -1 !== j.indexOf(a);\n  }, g = function g(a) {\n    var b;\n    return b = new RegExp(a, \"i\"), d.className.match(b);\n  }, c = function c(a) {\n    var b = null;\n    g(a) || (b = d.className.replace(/^\\s+|\\s+$/g, \"\"), d.className = b + \" \" + a);\n  }, i = function i(a) {\n    g(a) && (d.className = d.className.replace(\" \" + a, \"\"));\n  }, a.ios() ? a.ipad() ? c(\"ios ipad tablet\") : a.iphone() ? c(\"ios iphone mobile\") : a.ipod() && c(\"ios ipod mobile\") : a.android() ? c(a.androidTablet() ? \"android tablet\" : \"android mobile\") : a.blackberry() ? c(a.blackberryTablet() ? \"blackberry tablet\" : \"blackberry mobile\") : a.windows() ? c(a.windowsTablet() ? \"windows tablet\" : a.windowsPhone() ? \"windows mobile\" : \"desktop\") : a.fxos() ? c(a.fxosTablet() ? \"fxos tablet\" : \"fxos mobile\") : a.meego() ? c(\"meego mobile\") : a.nodeWebkit() ? c(\"node-webkit\") : a.television() ? c(\"television\") : a.desktop() && c(\"desktop\"), a.cordova() && c(\"cordova\"), f = function f() {\n    a.landscape() ? (i(\"portrait\"), c(\"landscape\")) : (i(\"landscape\"), c(\"portrait\"));\n  }, h = Object.prototype.hasOwnProperty.call(window, \"onorientationchange\") ? \"orientationchange\" : \"resize\", window.addEventListener ? window.addEventListener(h, f, !1) : window.attachEvent ? window.attachEvent(h, f) : window[h] = f, f(),  true && \"object\" == _typeof(__webpack_require__.amdO) && __webpack_require__.amdO ? !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {\n    return a;\n  }).call(exports, __webpack_require__, exports, module),\n\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) :  true && module.exports ? module.exports = a : window.device = a;\n}).call(this);\n\n//# sourceURL=webpack://roots-faq-blocks/./src/js/modules/device.min.js?");

/***/ }),

/***/ "./src/js/modules/handle.js":
/*!**********************************!*\
  !*** ./src/js/modules/handle.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* export default binding */ __WEBPACK_DEFAULT_EXPORT__; }\n/* harmony export */ });\n\n\n\n\n/*\nloading\n----------------------------------------------------------*/\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {\n  var handler = function () {\n    var events = {},\n      key = 0;\n    return {\n      addListener: function addListener(target, type, listener, capture) {\n        if (window.addEventListener) {\n          target.addEventListener(type, listener, capture);\n        } else if (window.attachEvent) {\n          target.attachEvent('on' + type, listener);\n        }\n        events[key] = {\n          target: target,\n          type: type,\n          listener: listener,\n          capture: capture\n        };\n        return key++;\n      },\n      removeListener: function removeListener(key) {\n        if (key in events) {\n          var e = events[key];\n          if (window.removeEventListener) {\n            e.target.removeEventListener(e.type, e.listener, e.capture);\n          } else if (window.detachEvent) {\n            e.target.detachEvent('on' + e.type, e.listener);\n          }\n        }\n      }\n    };\n  }();\n  var page = {\n    init: function init() {\n      if (!device.mobile()) {\n        mouse.addHoverEvents();\n        mouse.addHoverOutEvents();\n      }\n    }\n  };\n  var mouse = {\n    addHoverEvents: function addHoverEvents() {\n      var hover = document.querySelectorAll('a');\n      for (var i = 0; i < hover.length; i++) {\n        handler.removeListener(hover[i]);\n        handler.addListener(hover[i], 'mouseenter', function (e) {\n          this.classList.add('is-hover');\n        }, false);\n        handler.addListener(hover[i], 'mouseleave', function (e) {\n          this.classList.remove('is-hover');\n        }, false);\n      }\n      var btnHover = document.querySelectorAll('button');\n      for (var i = 0; i < btnHover.length; i++) {\n        handler.removeListener(btnHover[i]);\n        handler.addListener(btnHover[i], 'mouseenter', function (e) {\n          this.classList.add('is-hover');\n        }, false);\n        handler.addListener(btnHover[i], 'mouseleave', function (e) {\n          this.classList.remove('is-hover');\n        }, false);\n      }\n    },\n    addHoverOutEvents: function addHoverOutEvents() {\n      var hoverOut = document.querySelectorAll('a');\n      for (var i = 0; i < hoverOut.length; i++) {\n        handler.removeListener(hoverOut[i]);\n        handler.addListener(hoverOut[i], 'mouseleave', function (e) {\n          this.classList.add('is-hoverOut');\n        }, false);\n        handler.addListener(hoverOut[i], 'mouseenter', function (e) {\n          this.classList.remove('is-hoverOut');\n        }, false);\n      }\n    }\n  };\n  page.init();\n}\n\n//# sourceURL=webpack://roots-faq-blocks/./src/js/modules/handle.js?");

/***/ }),

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_change_month__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/change-month */ \"./src/js/modules/change-month.js\");\n/* harmony import */ var _modules_device_min__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/device.min */ \"./src/js/modules/device.min.js\");\n/* harmony import */ var _modules_device_min__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_modules_device_min__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _modules_handle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/handle */ \"./src/js/modules/handle.js\");\n\n\n\n\n\n\n\n\n/* ///////////////////////\ninit\n/////////////////////// */\n(0,_modules_handle__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n(0,_modules_change_month__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n//viewport();\n\nvar rc_cal_day = document.getElementsByClassName('rc_cal_day');\nvar bodyDom = document.getElementsByTagName('body')[0];\nvar click_action = function click_action(dom) {\n  remove_balloon();\n  bodyDom.classList.add('is-balloon');\n  var rc_cal_day_balloon = dom.querySelectorAll('.rc_cal_balloon')[0];\n  rc_cal_day_balloon.style.display = 'block';\n};\nvar remove_balloon = function remove_balloon() {\n  bodyDom.classList.remove('is-balloon');\n  var rc_cal_day_balloon_all = document.querySelectorAll('.rc_cal_balloon');\n  for (var _i = 0; _i < rc_cal_day_balloon_all.length; _i++) {\n    rc_cal_day_balloon_all[_i].style.display = 'none';\n  }\n};\nfor (var i = 0; i < rc_cal_day.length; i++) {\n  if (_modules_device_min__WEBPACK_IMPORTED_MODULE_1___default().mobile()) {\n    var click_event = 'touchstart';\n  } else {\n    var click_event = 'mouseover';\n  }\n  rc_cal_day[i].addEventListener(click_event, function () {\n    var rc_cal_day_hasevent = this.querySelectorAll('.rc_cal_balloon');\n    if (rc_cal_day_hasevent.length !== 0) {\n      click_action(this);\n    } else {\n      remove_balloon();\n    }\n  });\n}\n\n//# sourceURL=webpack://roots-faq-blocks/./src/js/script.js?");

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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/amd options */
/******/ 	!function() {
/******/ 		__webpack_require__.amdO = {};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/script.js");
/******/ 	
/******/ })()
;