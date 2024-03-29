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

/***/ "./src/js/modules/cal-all-change.js":
/*!******************************************!*\
  !*** ./src/js/modules/cal-all-change.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* export default binding */ __WEBPACK_DEFAULT_EXPORT__; }\n/* harmony export */ });\n\n\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {\n  var calAllChangeCheckbox = document.getElementsByName('calAllChangeCheckbox')[0];\n  var calAllChangeCheckboxMonth = document.getElementsByName('calAllChangeCheckboxMonth');\n  var allset = document.getElementsByName('allset');\n  var allChangeBtn = document.getElementsByName('allChangeBtn')[0];\n  var allChangeSelect = document.getElementsByName('allChangeSelect')[0];\n  if (calAllChangeCheckbox) {\n    calAllChangeCheckbox.addEventListener('change', function (event) {\n      if (calAllChangeCheckbox.checked) {\n        console.log('チェックされました');\n        checkAddAction(allset);\n      } else {\n        console.log('チェック解除されました');\n        checkRemoveAction(allset);\n      }\n    });\n    var _loop = function _loop(i) {\n      calAllChangeCheckboxMonth[i].addEventListener('change', function (event) {\n        var thisCalBox = this.parentNode.parentNode.parentNode;\n        var allsetMonth = thisCalBox.querySelectorAll('input');\n        if (calAllChangeCheckboxMonth[i].checked) {\n          console.log('チェックされました');\n          checkAddAction(allsetMonth);\n        } else {\n          console.log('チェック解除されました');\n          checkRemoveAction(allsetMonth);\n        }\n      });\n    };\n    for (var i = 0; i < calAllChangeCheckboxMonth.length; i++) {\n      _loop(i);\n    }\n  }\n  if (allChangeBtn) {\n    allChangeBtn.addEventListener('click', function () {\n      var data = allChangeSelect.value;\n      allChangeFunc(data);\n    });\n  }\n  var checkAddAction = function checkAddAction(allset) {\n    for (var _i = 0; _i < allset.length; _i++) {\n      allset[_i].checked = true;\n    }\n  };\n  var checkRemoveAction = function checkRemoveAction(allset) {\n    for (var _i2 = 0; _i2 < allset.length; _i2++) {\n      allset[_i2].checked = false;\n    }\n  };\n  var allChangeFunc = function allChangeFunc(data) {\n    for (var _i3 = 0; _i3 < allset.length; _i3++) {\n      if (allset[_i3].checked) {\n        var parent = allset[_i3].parentNode;\n        var selectBtn = parent.querySelector('select');\n        var options = selectBtn.options;\n        for (var n = 0; n < options.length; n++) {\n          if (options[n].value == data) {\n            options[n].selected = true;\n          } else {\n            options[n].selected = false;\n          }\n        }\n      }\n    }\n  };\n}\n\n//# sourceURL=webpack://roots-faq-blocks/./src/js/modules/cal-all-change.js?");

/***/ }),

/***/ "./src/js/modules/create-cal.js":
/*!**************************************!*\
  !*** ./src/js/modules/create-cal.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createFunc\": function() { return /* binding */ createFunc; }\n/* harmony export */ });\n/* harmony import */ var _create_modal_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-modal-window */ \"./src/js/modules/create-modal-window.js\");\n\n\n\nfunction createFunc() {\n  var calBox = document.getElementsByName('cal_box')[0];\n  var week = [\"日\", \"月\", \"火\", \"水\", \"木\", \"金\", \"土\"];\n  var today = new Date();\n  var showNum = 12;\n  if (calBox) {\n    /*-----------------------------------------\n    年間カレンダー作成\n    -----------------------------------------*/\n    var showProcess = function showProcess(date) {\n      for (var i = 0; i < showNum; i++) {\n        var year = date.getFullYear();\n        var month = date.getMonth();\n\n        // 1月分のカレンダーwrap\n        var calBoxInner = document.createElement('div');\n        calBoxInner.className = 'rc-calbox';\n        if (month + i + 1 <= 12) {\n          month = month + i;\n          calBoxInner.innerHTML = '<div class=\"rc-calbox__header\"><h2 class=\"rc-calbox__ttl\">' + year + \"年 \" + (month + 1) + \"月\" + '</h2><label><input type=\"checkbox\" name=\"calAllChangeCheckboxMonth\" value=\"allCheckFlg\">この月をすべて選択/解除</label></div>';\n        } else {\n          month = month + i - 12;\n          year = year + 1;\n          calBoxInner.innerHTML = '<div class=\"rc-calbox__header\"><h2 class=\"rc-calbox__ttl\">' + year + \"年 \" + (month + 1) + \"月\" + '</h2><label><input type=\"checkbox\" name=\"calAllChangeCheckboxMonth\" value=\"allCheckFlg\">この月をすべて選択/解除</label></div>';\n        }\n        var calBoxTable = document.createElement('table');\n        calBoxTable.innerHTML += createProcess(year, month);\n        calBoxInner.appendChild(calBoxTable);\n        calBox.appendChild(calBoxInner);\n      }\n    };\n    /*-----------------------------------------\n    カレンダーテーブル生成\n    -----------------------------------------*/\n    var createProcess = function createProcess(year, month) {\n      if (typeof setting_records_array !== 'undefined') {\n        var rc_statelist = setting_records_array;\n        var calendar = \"<tr class='dayOfWeek'>\";\n        for (var i = 0; i < week.length; i++) {\n          calendar += \"<th>\" + week[i] + \"</th>\";\n        }\n        calendar += \"</tr>\";\n        var count = 0;\n        var startDayOfWeek = new Date(year, month, 1).getDay();\n        var endDate = new Date(year, month + 1, 0).getDate();\n        var lastMonthEndDate = new Date(year, month, 0).getDate();\n        var row = Math.ceil((startDayOfWeek + endDate) / week.length);\n\n        // イベント追加ボタン生成関数\n        var buttonDomCreate = function buttonDomCreate(year, month, day) {\n          var events_name = 'rc_events_' + year + \"-\" + month + \"-\" + day;\n          return \"<a class='rc-addbtn' data-date='\" + year + \"-\" + month + \"-\" + day + \"' data-meta=\" + events_name + \">+</a><input type='checkbox' name='allset'>\";\n        };\n\n        // セレクトボタン生成関数\n        var selectCreate = function selectCreate(rc_statelist, year, month, day) {\n          var option_list = '<option value=\"\">--</option>';\n          // ex) rc_status_2022-02-04\n          var status_name = 'rc_status_' + year + \"-\" + month + \"-\" + day;\n          // rc_data_arrayはcalendar.phpに記載\n          var target_date = rc_status_array.find(function (v) {\n            return v.meta_key === status_name;\n          });\n          for (var _i = 0; _i < rc_statelist.length; _i++) {\n            var selected_txt = '';\n            if (target_date) {\n              selected_txt = target_date.meta_value == rc_statelist[_i].state_name ? 'selected' : '';\n            }\n            option_list += '<option value=\"' + rc_statelist[_i].state_name + '\"' + selected_txt + '>' + rc_statelist[_i].state_name + '</option>';\n          }\n          return \"<select class='rc_status_selectbtn' name='\" + status_name + \"'>\" + option_list + \"</select>\";\n        };\n\n        // イベント生成\n        var eventCreate = function eventCreate(year, month, day) {\n          var events_name = 'rc_events_' + year + \"-\" + month + \"-\" + day;\n          var target_date = rc_events_array.find(function (v) {\n            return v.meta_key === events_name;\n          });\n          var events_list = '';\n          if (target_date) {\n            var events_list_arry = JSON.parse(target_date.meta_value);\n            for (var _i2 = 0; _i2 < Object.keys(events_list_arry).length; _i2++) {\n              if (events_list_arry[_i2].event_name !== '') {\n                events_list += '<a class=\"rc-event__btn\" data-date=\"' + year + '-' + month + '-' + day + '\" data-meta=' + events_name + ' data-eventnum=' + _i2 + '>' + events_list_arry[_i2].event_name + '</a>';\n              }\n            }\n          } else {\n            events_list = '';\n          }\n          return events_list;\n        };\n\n        // カレンダー生成\n        for (var i = 0; i < row; i++) {\n          calendar += \"<tr>\";\n          for (var j = 0; j < week.length; j++) {\n            if (i == 0 && j < startDayOfWeek) {\n              // 前月の日付部分生成\n              calendar += \"<td class='disabled'>\" + (lastMonthEndDate - startDayOfWeek + j + 1) + \"</td>\";\n            } else if (count >= endDate) {\n              // 翌月の日付部分生成\n              count++;\n              var counta = count - endDate;\n              counta = counta.toString().padStart(2, '0');\n              calendar += \"<td class='disabled'>\" + \"<span>\" + counta + \"</span>\" + \"</td>\";\n            } else {\n              count++;\n              if (year == today.getFullYear() && month == today.getMonth() && count == today.getDate()) {\n                // 当日生成\n                var counta = count;\n                var montha = month + 1;\n                counta = counta.toString().padStart(2, '0');\n                montha = montha.toString().padStart(2, '0');\n                calendar += \"<td style='background:#ffdddd;'>\" + \"<span>\" + count + \"</span>\" + selectCreate(rc_statelist, year, montha, counta) + eventCreate(year, montha, counta) + buttonDomCreate(year, montha, counta) + \"</td>\";\n              } else if (year == today.getFullYear() && month == today.getMonth() && count < today.getDate()) {\n                // 当月の当日より前の日（過ぎてしまった日）\n                var counta = count;\n                var montha = month + 1;\n                counta = counta.toString().padStart(2, '0');\n                montha = montha.toString().padStart(2, '0');\n                calendar += \"<td>\" + \"<span>\" + count + \"</span>\" + selectCreate(rc_statelist, year, montha, counta) + eventCreate(year, montha, counta) + buttonDomCreate(year, montha, counta) + \"</td>\";\n              } else {\n                var counta = count;\n                counta = counta.toString().padStart(2, '0');\n                if (month + 1 <= 12) {\n                  // 当日以降\n                  var montha = month + 1;\n                  montha = montha.toString().padStart(2, '0');\n                  calendar += \"<td>\" + \"<span>\" + count + \"</span>\" + selectCreate(rc_statelist, year, montha, counta) + eventCreate(year, montha, counta) + buttonDomCreate(year, montha, counta) + \"</td>\";\n                } else {\n                  // 翌年\n                  var montha = month + 1 - 12;\n                  montha = montha.toString().padStart(2, '0');\n                  calendar += \"<td>\" + \"<span>\" + count + \"</span>\" + selectCreate(rc_statelist, year, montha, counta) + eventCreate(year, montha, counta) + buttonDomCreate(year, montha, counta) + \"</td>\";\n                }\n              }\n            }\n          }\n          calendar += \"</tr>\";\n        }\n        return calendar;\n      }\n    }; // 生成したカレンダーのプラスボタンをクリックイベントを設定\n    var rcBtnAction = function rcBtnAction() {\n      var rc_addbtn = document.getElementsByClassName('rc-addbtn');\n      if (rc_addbtn.length !== 0) {\n        for (var i = 0; i < rc_addbtn.length; i++) {\n          rc_addbtn[i].addEventListener('click', function () {\n            var date = this.dataset.date;\n            var meta = this.dataset.meta;\n            _create_modal_window__WEBPACK_IMPORTED_MODULE_0__.open(date, meta);\n          });\n        }\n        var rc_event__btn = document.getElementsByClassName('rc-event__btn');\n        for (var _i3 = 0; _i3 < rc_event__btn.length; _i3++) {\n          rc_event__btn[_i3].addEventListener('click', function () {\n            var date = this.dataset.date;\n            var meta = this.dataset.meta;\n            var num = this.dataset.eventnum;\n            _create_modal_window__WEBPACK_IMPORTED_MODULE_0__.open(date, meta, num);\n          });\n        }\n      }\n    };\n    showProcess(today);\n    rcBtnAction();\n  }\n}\n\n//# sourceURL=webpack://roots-faq-blocks/./src/js/modules/create-cal.js?");

/***/ }),

/***/ "./src/js/modules/create-modal-window.js":
/*!***********************************************!*\
  !*** ./src/js/modules/create-modal-window.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"close\": function() { return /* binding */ close; },\n/* harmony export */   \"inputDelete\": function() { return /* binding */ inputDelete; },\n/* harmony export */   \"open\": function() { return /* binding */ open; }\n/* harmony export */ });\n\n\nfunction open(date, meta, num) {\n  var cal_container = document.getElementsByName('cal_container')[0];\n  var eventDomContent = '';\n  if (typeof rc_events_array !== 'undefined') {\n    var target_events = rc_events_array.find(function (v) {\n      return v.meta_key === meta;\n    });\n  }\n  var events_list_arry;\n  if (cal_container) {\n    var addView = function addView(date, meta, num) {\n      eventDomContent += \"<div class='rc-modal__wrap'>\" + \"<p class='rc-modal__ttl'>\" + date + \"</p>\" + \"<table class='rc-modal__inner'>\" + \"<tr>\" + \"<th>タイトル</th>\" + \"<td><input type='text' name='\" + meta + \"[\" + num + \"][event_name]' value=''></td>\" + \"</tr>\" + \"<tr>\" + \"<th>URL</th>\" + \"<td><input type='text' name='\" + meta + \"[\" + num + \"][event_url]' value=''></td>\" + \"</tr>\" + \"<tr>\" + \"<th>カラー</th>\" + \"<td><input type='color' name='\" + meta + \"[\" + num + \"][event_color]' value='#b1fcb0'></td>\" + \"</tr>\" + \"</table>\" + \"<div class='rc-modal__submit'><input type='submit' value='追加する' name='save'></div>\" + \"<a class='rc-modal__close'>閉じる</a>\" + \"</div>\";\n    };\n    var rewriteView = function rewriteView(date, meta, num) {\n      eventDomContent += \"<div class='rc-modal__wrap'>\" + \"<p class='rc-modal__ttl'>\" + date + \"</p>\" + \"<table class='rc-modal__inner'>\" + \"<tr>\" + \"<th>タイトル</th>\" + \"<td><input type='text' name='\" + meta + \"[\" + num + \"][event_name]' value='\" + events_list_arry[num].event_name + \"'></td>\" + \"</tr>\" + \"<tr>\" + \"<th>URL</th>\" + \"<td><input type='text' name='\" + meta + \"[\" + num + \"][event_url]' value='\" + events_list_arry[num].event_url + \"'></td>\" + \"</tr>\" + \"<tr>\" + \"<th>カラー</th>\" + \"<td><input type='color' name='\" + meta + \"[\" + num + \"][event_color]' value='\" + events_list_arry[num].event_color + \"'></td>\" + \"</tr>\" + \"</table>\" + \"<div class='rc-modal__submit'><input type='submit' value='更新する' name='save'></div>\" + \"<div class='rc-modal__controller'>\" + \"<a class='rc-modal__delete'>削除</a>\" + \"</div>\" + \"<a class='rc-modal__close'>閉じる</a>\" + \"</div>\";\n    };\n    if (target_events) {\n      events_list_arry = JSON.parse(target_events.meta_value);\n\n      // データがある場合\n      if (num) {\n        rewriteView(date, meta, num);\n      } else {\n        // 最後に追加\n        var eventNum = Object.keys(events_list_arry).length;\n        addView(date, meta, eventNum);\n      }\n      for (var i = 0; i < Object.keys(events_list_arry).length; i++) {\n        num = Number(num);\n        if (i !== num) {\n          eventDomContent += \"<input type='hidden' name='\" + meta + \"[\" + i + \"]\" + \"[event_name]' value='\" + events_list_arry[i].event_name + \"'>\";\n          eventDomContent += \"<input type='hidden' name='\" + meta + \"[\" + i + \"]\" + \"[event_url]' value='\" + events_list_arry[i].event_url + \"'>\";\n          eventDomContent += \"<input type='hidden' name='\" + meta + \"[\" + i + \"]\" + \"[event_color]' value='\" + events_list_arry[i].event_color + \"'>\";\n        }\n      }\n    } else {\n      // データがない場合（追加）\n      addView(date, meta, 0);\n    }\n    var eventDomWrap = document.createElement('div');\n    eventDomWrap.className = 'rc-cal__inputwrap';\n    eventDomWrap.innerHTML += eventDomContent;\n    cal_container.appendChild(eventDomWrap);\n\n    // close\n    var rcModalClose = document.getElementsByClassName('rc-modal__close')[0];\n    rcModalClose.addEventListener('click', function () {\n      close();\n    });\n\n    // delete\n    var rcModalDelete = document.getElementsByClassName('rc-modal__delete')[0];\n    if (rcModalDelete) {\n      rcModalDelete.addEventListener('click', function () {\n        inputDelete(meta, num);\n      });\n    }\n  }\n}\nfunction close() {\n  var rc_cal_inputwrap = document.getElementsByClassName('rc-cal__inputwrap')[0];\n  if (rc_cal_inputwrap) {\n    rc_cal_inputwrap.remove();\n  }\n}\nfunction inputDelete(meta, num) {\n  var metaName = meta + \"[\" + num + \"][event_name]\";\n  console.log(metaName);\n  var inputName = document.getElementsByName(metaName)[0];\n  var metaUrl = meta + \"[\" + num + \"][event_url]\";\n  var inputUrl = document.getElementsByName(metaUrl)[0];\n  var metaColor = meta + \"[\" + num + \"][event_color]\";\n  var inputColor = document.getElementsByName(metaColor)[0];\n  inputName.value = '';\n  inputUrl.value = '';\n  inputColor.value = '';\n  document.post.submit();\n}\n\n//# sourceURL=webpack://roots-faq-blocks/./src/js/modules/create-modal-window.js?");

/***/ }),

/***/ "./src/js/modules/editor-init.js":
/*!***************************************!*\
  !*** ./src/js/modules/editor-init.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* export default binding */ __WEBPACK_DEFAULT_EXPORT__; }\n/* harmony export */ });\n/* harmony import */ var _create_cal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-cal */ \"./src/js/modules/create-cal.js\");\n/* harmony import */ var _cal_all_change__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cal-all-change */ \"./src/js/modules/cal-all-change.js\");\n\n\n\n\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {\n  _create_cal__WEBPACK_IMPORTED_MODULE_0__.createFunc();\n  (0,_cal_all_change__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n}\n\n//# sourceURL=webpack://roots-faq-blocks/./src/js/modules/editor-init.js?");

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