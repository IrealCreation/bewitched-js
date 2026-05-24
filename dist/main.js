/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs/index.js!./src/styles/style.less"
/*!******************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs/index.js!./src/styles/style.less ***!
  \******************************************************************************************************************/
(module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\nbody {\n  background-color: #2e2e2e;\n  color: white;\n}\n.dialogues-container {\n  text-align: left;\n  font-family: 'Times New Roman', Times, serif;\n  font-size: 1.5rem;\n  width: 100%;\n  height: 100vh;\n  padding: 2em;\n  cursor: pointer;\n}\n.dialogues-container .dialogue-box {\n  margin: 1em auto;\n  width: 44em;\n  max-width: 100%;\n}\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://bewitched/./src/styles/style.less?./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs/index.js\n}");

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/api.js"
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
(module) {

eval("{\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://bewitched/./node_modules/css-loader/dist/runtime/api.js?\n}");

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js"
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
(module) {

eval("{\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://bewitched/./node_modules/css-loader/dist/runtime/noSourceMaps.js?\n}");

/***/ },

/***/ "./src/styles/style.less"
/*!*******************************!*\
  !*** ./src/styles/style.less ***!
  \*******************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_index_js_style_less__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/less-loader/dist/cjs/index.js!./style.less */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs/index.js!./src/styles/style.less\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_index_js_style_less__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_index_js_style_less__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_index_js_style_less__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_index_js_style_less__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://bewitched/./src/styles/style.less?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
(module) {

eval("{\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://bewitched/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js"
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
(module) {

eval("{\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://bewitched/./node_modules/style-loader/dist/runtime/insertBySelector.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js"
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://bewitched/./node_modules/style-loader/dist/runtime/insertStyleElement.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://bewitched/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js"
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://bewitched/./node_modules/style-loader/dist/runtime/styleDomAPI.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js"
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://bewitched/./node_modules/style-loader/dist/runtime/styleTagTransform.js?\n}");

/***/ },

/***/ "./src/index.ts"
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_gameManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/gameManager */ \"./src/scripts/gameManager.ts\");\n/* harmony import */ var _styles_style_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/style.less */ \"./src/styles/style.less\");\n\n\ndocument.addEventListener('DOMContentLoaded', function () {\n    const gameManager = new _scripts_gameManager__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n});\n\n\n//# sourceURL=webpack://bewitched/./src/index.ts?\n}");

/***/ },

/***/ "./src/scripts/displayManager.ts"
/*!***************************************!*\
  !*** ./src/scripts/displayManager.ts ***!
  \***************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ DisplayManager)\n/* harmony export */ });\n/* harmony import */ var _gameManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameManager */ \"./src/scripts/gameManager.ts\");\n\n/**\n * Le DisplayManager est responsable de l'affichage du jeu\n */\nclass DisplayManager {\n    constructor() {\n        this.isWriting = false; // Indique si un texte de dialogue est en train d'être affiché lettre par lettre, pour éviter les interactions du joueur pendant ce temps\n        this.writingDelay = 30; // Durée en ms entre l'affichage de chaque lettre d'un texte de dialogue\n        this.writingIndex = 0; // Index de la lettre actuellement affichée du texte de dialogue en cours d'affichage\n        this.writingText = \"\"; // Texte de dialogue en cours d'affichage lettre par lettre\n        this.body = document.querySelector(\"body\");\n        // Initialise le code HTML du jeu\n        this.dialoguesContainer = document.createElement(\"div\");\n        this.dialoguesContainer.classList.add(\"dialogues-container\");\n        this.body.append(this.dialoguesContainer);\n        // Current dialogue box vide (dummy)\n        this.currentDialogueBox = document.createElement(\"div\");\n        // Pour l'instant on met l'event listener de click sur le dialoguesContainer entier, mais on le rendra plus précis plus tard\n        this.dialoguesContainer.addEventListener(\"click\", () => {\n            _gameManager__WEBPACK_IMPORTED_MODULE_0__[\"default\"].instance.dialogueClick();\n        });\n    }\n    /**\n     * Lance l'affichage d'un texte de dialogue\n     * @param dialogue\n     * @param key\n     */\n    displayDialogueText(dialogue, key) {\n        // Création de la zone de texte du dialogue\n        this.currentDialogueBox = document.createElement(\"div\");\n        this.currentDialogueBox.classList.add(\"dialogue-box\");\n        this.dialoguesContainer.append(this.currentDialogueBox);\n        this.isWriting = true;\n        this.writingText = dialogue.texts[key];\n        this.writeDialogueText();\n    }\n    /**\n     * Affiche un texte de dialogue avec animation lettre par lettre\n     */\n    writeDialogueText() {\n        if (this.writingIndex < this.writingText.length) {\n            const currentChar = this.writingText[this.writingIndex];\n            this.currentDialogueBox.textContent += currentChar;\n            let delay = this.writingDelay;\n            if (currentChar === \" \") {\n                delay = this.writingDelay / 2;\n            }\n            else if (currentChar === \",\" || currentChar === \";\" || currentChar === \":\") {\n                delay = this.writingDelay * 5;\n            }\n            else if (currentChar === \".\" || currentChar === \"!\" || currentChar === \"?\") {\n                if (this.writingText[this.writingIndex + 1] === \".\" || this.writingText[this.writingIndex + 1] === \"!\" || this.writingText[this.writingIndex + 1] === \"?\") {\n                    delay = this.writingDelay / 2; // Affichage rapide de la ponctuation multiple (notamment points de suspension)\n                }\n                else {\n                    delay = this.writingDelay * 10;\n                }\n            }\n            this.writingIndex++;\n            setTimeout(() => {\n                this.writeDialogueText();\n            }, delay);\n        }\n        else {\n            // Fin de l'écriture du texte, on reset les variables d'écriture pour le prochain texte et on autorise l'interaction du joueur\n            this.isWriting = false;\n            this.writingIndex = 0;\n            this.writingText = \"\";\n        }\n    }\n    /**\n     * Achève instantanément l'écriture d'un texte de dialogue\n     */\n    instantWriteDialogueText() {\n        const stringLeft = this.writingText.substring(this.writingIndex);\n        this.currentDialogueBox.textContent += stringLeft;\n        this.isWriting = false;\n        this.writingIndex = 0;\n        this.writingText = \"\";\n    }\n}\n\n\n//# sourceURL=webpack://bewitched/./src/scripts/displayManager.ts?\n}");

/***/ },

/***/ "./src/scripts/gameManager.ts"
/*!************************************!*\
  !*** ./src/scripts/gameManager.ts ***!
  \************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ GameManager)\n/* harmony export */ });\n/* harmony import */ var _displayManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displayManager */ \"./src/scripts/displayManager.ts\");\n/* harmony import */ var _data_dialogues_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data/dialogues.json */ \"./src/data/dialogues.json\");\n/* harmony import */ var _data_cards_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/cards.json */ \"./src/data/cards.json\");\n\n// JSON data\n\n\n/**\n * Le GameManager est responsable de la gestion globale du jeu, et peut être appelé via sa valeur statique \"instance\".\n */\nclass GameManager {\n    constructor() {\n        this.currentDialogueText = 0; // Key de l'entrée du tableau \"texts\" actuellement affichée du dialogue en cours\n        this.currentDialogueCardsGained = false;\n        GameManager.instance = this;\n        this.dialogues = _data_dialogues_json__WEBPACK_IMPORTED_MODULE_1__;\n        this.cards = _data_cards_json__WEBPACK_IMPORTED_MODULE_2__;\n        this.gameVariables = {};\n        this.displayManager = new _displayManager__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n        this.currentDialogue = this.dialogues[\"intro_001\"];\n        this.playIntroScreen();\n    }\n    /**\n     * Affiche l'écran d'introduction du jeu\n     */\n    playIntroScreen() {\n        // TODO: do stylish intro stuff\n        this.dialogueShowText();\n    }\n    /** Le joueur a cliqué pour la prochaine interaction au sein d'un dialogue */\n    dialogueClick() {\n        // Un texte est en train d'être affiché lettre par lettre ? Alors on l'affiche instantanément\n        if (this.displayManager.isWriting) {\n            this.displayManager.instantWriteDialogueText();\n            return;\n        }\n        // Si on est arrivé jusqu'ici, c'est que le texte du dialogue a fini de s'afficher, on peut passer à la suite du dialogue\n        this.currentDialogueText++;\n        // Reste-t-il des textes dans le dialogue en cours ?\n        if (this.currentDialogueText < this.currentDialogue.texts.length) {\n            this.dialogueShowText();\n            return;\n        }\n        // Y a-t-il des options à la fin du dialogue ?\n        if (this.currentDialogue.options) {\n            this.dialogueShowOptions();\n            return;\n        }\n        // Y a-t-il des cartes à gagner qui n'ont pas encore été gagnées ?\n        if (this.currentDialogue.cardGain && !this.currentDialogueCardsGained) {\n            this.dialogueCardGain();\n            return;\n        }\n        // Y a-t-il un goto dans le dialogue ?\n        if (this.currentDialogue.goto) {\n            this.dialogueGoto(this.currentDialogue.goto);\n        }\n        // Si non... y a un problème\n        console.error(\"dialogueClick s'est fini sans résolution valable\");\n    }\n    dialogueShowText() {\n        this.displayManager.displayDialogueText(this.currentDialogue, this.currentDialogueText);\n    }\n    dialogueShowOptions() {\n    }\n    dialogueCardGain() {\n    }\n    dialogueGoto(dialogueId) {\n        // On réinitialise les valeurs de contrôle du dialogue\n        this.currentDialogueText = 0;\n        this.currentDialogueCardsGained = false;\n        this.currentDialogue = this.dialogues[dialogueId];\n        this.dialogueShowText();\n    }\n    helloWorld() {\n        console.log(\"Hello, Bewitched!\");\n    }\n    printDialogues() {\n        console.log(this.dialogues);\n    }\n    printCards() {\n        console.log(this.cards);\n    }\n}\n\n\n//# sourceURL=webpack://bewitched/./src/scripts/gameManager.ts?\n}");

/***/ },

/***/ "./src/data/cards.json"
/*!*****************************!*\
  !*** ./src/data/cards.json ***!
  \*****************************/
(module) {

eval("{module.exports = /*#__PURE__*/JSON.parse('{\"1ac\":{\"id\":\"1ac\",\"name\":\"Instinct\",\"moods\":[\"Agressif\",\"Calme\"],\"score\":1},\"1ah\":{\"id\":\"1ah\",\"name\":\"Mépris\",\"moods\":[\"Agressif\",\"Hautain\"],\"score\":1},\"1aj\":{\"id\":\"1aj\",\"name\":\"Rivalité\",\"moods\":[\"Agressif\",\"Joyeux\"],\"score\":1},\"1as\":{\"id\":\"1as\",\"name\":\"Mordillement\",\"moods\":[\"Agressif\",\"Séducteur\"],\"score\":1},\"1ch\":{\"id\":\"1ch\",\"name\":\"Moquerie\",\"moods\":[\"Calme\",\"Hautain\"],\"score\":1},\"1cj\":{\"id\":\"1cj\",\"name\":\"Optimisme\",\"moods\":[\"Calme\",\"Joyeux\"],\"score\":1},\"1cs\":{\"id\":\"1cs\",\"name\":\"Confidence\",\"moods\":[\"Calme\",\"Séducteur\"],\"score\":1},\"1hj\":{\"id\":\"1hj\",\"name\":\"Moquerie\",\"moods\":[\"Hautain\",\"Joyeux\"],\"score\":1},\"1hs\":{\"id\":\"1hs\",\"name\":\"Indifférence\",\"moods\":[\"Hautain\",\"Séducteur\"],\"score\":1},\"1js\":{\"id\":\"1js\",\"name\":\"Oeillade\",\"moods\":[\"Joyeux\",\"Séducteur\"],\"score\":1},\"2cj_paix_interieure\":{\"id\":\"2cj_paix_interieure\",\"name\":\"Paix intérieure\",\"moods\":[\"Calme\",\"Joyeux\"],\"score\":2},\"2as_en_chasse\":{\"id\":\"2as_en_chasse\",\"name\":\"En chasse\",\"moods\":[\"Agressif\",\"Séducteur\"],\"score\":2},\"2ch_mental_acier\":{\"id\":\"2ch_mental_acier\",\"name\":\"Mental d\\'acier\",\"moods\":[\"Calme\",\"Hautain\"],\"score\":2},\"2aj_rage_vivre\":{\"id\":\"2aj_rage_vivre\",\"name\":\"Rage de vivre\",\"moods\":[\"Joyeux\",\"Agressif\"],\"score\":2},\"2hs_femme_experience\":{\"id\":\"2hs_femme_experience\",\"name\":\"Femme d\\'expérience\",\"moods\":[\"Hautain\",\"Séducteur\"],\"score\":2},\"2ac_poing_justice\":{\"id\":\"2ac_poing_justice\",\"name\":\"Poing de la justice\",\"moods\":[\"Agressif\",\"Calme\"],\"score\":2},\"2hs_domina\":{\"id\":\"2hs_domina\",\"name\":\"Domina\",\"moods\":[\"Hautain\",\"Séducteur\"],\"score\":2},\"2cj_empathie\":{\"id\":\"2cj_empathie\",\"name\":\"Empathie\",\"moods\":[\"Calme\",\"Joyeux\"],\"score\":2},\"2ah_farouche_independance\":{\"id\":\"2ah_farouche_independance\",\"name\":\"Farouche indépendance\",\"moods\":[\"Agressif\",\"Hautain\"],\"score\":2},\"2js_yolo\":{\"id\":\"2js_yolo\",\"name\":\"You only live once\",\"moods\":[\"Joyeux\",\"Séducteur\"],\"score\":2},\"3h_gouts_luxes\":{\"id\":\"3h_gouts_luxes\",\"name\":\"Goûts de luxe\",\"moods\":[\"Hautain\"],\"score\":3},\"3j_optimisme\":{\"id\":\"3j_optimisme\",\"name\":\"Optimisme\",\"moods\":[\"Joyeux\"],\"score\":3},\"3a_traversee_enfers\":{\"id\":\"3a_traversee_enfers\",\"name\":\"Traversée des enfers\",\"moods\":[\"Agressif\"],\"score\":3},\"3c_oeil_tempete\":{\"id\":\"3c_oeil_tempete\",\"name\":\"Oeil de la tempête\",\"moods\":[\"Calme\"],\"score\":3},\"3s_viles_passions\":{\"id\":\"3s_viles_passions\",\"name\":\"Viles passions\",\"moods\":[\"Séducteur\"],\"score\":3},\"3a_punk_rock\":{\"id\":\"3a_punk_rock\",\"name\":\"Punk rock\",\"moods\":[\"Agressif\"],\"score\":3},\"3s_glamour\":{\"id\":\"3s_glamour\",\"name\":\"Glamour\",\"moods\":[\"Séducteur\"],\"score\":3},\"3h_haute_couture\":{\"id\":\"3h_haute_couture\",\"name\":\"Haute couture\",\"moods\":[\"Hautain\"],\"score\":3},\"3j_hippie\":{\"id\":\"3j_hippie\",\"name\":\"Hippie\",\"moods\":[\"Joyeux\"],\"score\":3},\"3c_cocooning\":{\"id\":\"3c_cocooning\",\"name\":\"Cocooning\",\"moods\":[\"Calme\"],\"score\":3}}');\n\n//# sourceURL=webpack://bewitched/./src/data/cards.json?\n}");

/***/ },

/***/ "./src/data/dialogues.json"
/*!*********************************!*\
  !*** ./src/data/dialogues.json ***!
  \*********************************/
(module) {

eval("{module.exports = /*#__PURE__*/JSON.parse('{\"intro_001\":{\"id\":\"intro_001\",\"texts\":[\"“Tabula Rasa”. Telles sont les grandes lettres en néon intense, brillantes dans la nuit, qui ornent la façade du bâtiment dans lequel tu t\\'engouffres. Un choix de nom évocateur dont tu ne peux qu\\'apprécier l\\'ironie.\",\"Laissant derrière toi une file d\\'attente qui ne cesse de s\\'allonger, tu dépasses le regard d\\'un videur qui te jauge d\\'un rapide coup d\\'oeil puis tu paies le droit de passage à une hôtesse qui t\\'accueille d\\'un “bonsoir et amusez-vous bien mademoiselle” tout en scrollant distraitement sur son smartphone.\",\"Devant toi s\\'étend un long couloir plongé dans la pénombre enfumée qui fait office d\\'antichambre de ces profondeurs où résonne une musique encore étouffée ; antre nocturne dédiée aux divinités modernes de stupre et de lucre...\",\"Mais ce n\\'est pas pour t\\'amuser que tu es venue ici. Tu as une tâche à accomplir. Une tâche importante, dont des vies dépendent - à commencer par la tienne. Ce que tu mets en jeu en entrant ici n\\'est rien de moins que ta propre psyché.\",\"Face à cette perspective, tu te sens...\"],\"options\":[{\"text\":\"Sereine, confiante dans la suite des événements.\",\"moods\":[],\"score\":0,\"cardGain\":[\"2cj_paix_interieure\"]},{\"text\":\"Telle une prédatrice se mettant en chasse, l\\'adrénaline dans les veines.\",\"moods\":[],\"score\":0,\"cardGain\":[\"2as_en_chasse\"]},{\"text\":\"Déterminée et pleinement concentrée sur ton objectif.\",\"moods\":[],\"score\":0,\"cardGain\":[\"2ch_mental_acier\"]},{\"text\":\"Frissonnante d\\'impatience de voir ce que la nuit te réserve.\",\"moods\":[],\"score\":0,\"cardGain\":[\"2aj_rage_vivre\"]},{\"text\":\"Blasée : ce n\\'est pas ton premier rodéo, ni ton dernier.\",\"moods\":[],\"score\":0,\"cardGain\":[\"2hs_femme_experience\"]}],\"goto\":\"intro_002\"},\"intro_002\":{\"id\":\"intro_002\",\"texts\":[\"Tu avances dans le couloir au travers de la foule qui s\\'y trouve, consciente de pénétrer dans la tanière de celui que tu es venu traquer ; mais tu le fais en connaissance de cause. Tu es loin d\\'être une proie désarmée, et cette illusion que d\\'autres se feront de toi sera ta meilleure alliée tandis que tu évolueras en terrain ennemi.\",\"Depuis la porte à l\\'extrémité du corridor filtrent de puissantes vibrations de basses et des éclats de lumière stroboscopiques. Tu peux presque ressentir les élans des émotions humaines qui s\\'agitent en ce lieu, sur fond de musique battante et de relents d\\'alcool.\",\"A tes lèvres apparaît...\"],\"options\":[{\"text\":\"Une moue de dédain. Les lieux que tu fréquentes habituellement sont plus... distingués.\",\"moods\":[],\"score\":0,\"cardGain\":[\"3h_gouts_luxe\"]},{\"text\":\"Un sourire. Tu n\\'es pas une habituée de cette adresse, mais tu sais faire de chaque environnement ton élément.\",\"moods\":[],\"score\":0,\"cardGain\":[\"3j_optimisme\"]},{\"text\":\"Un rictus. Peu importe l\\'endroit : tu franchirais les cercles infernaux s\\'il le fallait pour accomplir ton objectif.\",\"moods\":[],\"score\":0,\"cardGain\":[\"3a_traversee_enfers\"]},{\"text\":\"Un tressaillement. Tu n\\'es pas à l\\'aise au milieu d\\'autant de gens, mais tu seras ton propre phare au cœur de la tempête.\",\"moods\":[],\"score\":0,\"cardGain\":[\"3c_oeil_tempete\"]},{\"text\":\"Un mordillement. C\\'est là où s\\'ébattent les plus vives passions que tu te sens le plus vivante.\",\"moods\":[],\"score\":0,\"cardGain\":[\"3s_viles_passions\"]}],\"goto\":\"intro_003\"},\"intro_003\":{\"id\":\"intro_003\",\"texts\":[\"Poursuivant ta marche, tu passes à côté d\\'une vitre teintée qui perce le mur à ta droite. A l\\'occasion d\\'un nouvel éclat de lumière se dessine sur cette surface lisse et sombre ton reflet éphémère, auquel tu jettes un furtif coup d\\'œil.\",\"Tu te vois apprêtée pour le combat ; même si celui-ci doit voir s\\'opposer la force de deux volontés plutôt que deux puissances physiques... Un affrontement bien plus subtil, mais non moins brutal - voire mortel. Tu remontes légèrement le col couvrant ta nuque, camouflant ainsi le tatouage aux formes inhabituelles qu\\'on commençait à y entrapercevoir.\",\"Dans cette armure de bataille que ton reflet arbore, les détails qui sautent aux yeux sont...\"],\"options\":[{\"text\":\"Du cuir clouté et des bottes renforcées prêtes à botter des arrière-trains.\",\"moods\":[],\"score\":0,\"cardGain\":[\"3a_punk_rock\"]},{\"text\":\"Un maquillage parfait et juste ce qu\\'il faut de peau dénudée pour attirer les regards.\",\"moods\":[],\"score\":0,\"cardGain\":[\"3s_glamour\"]},{\"text\":\"La brillance des perles et le logo discret d\\'une maison de haute couture sur tes vêtements.\",\"moods\":[],\"score\":0,\"cardGain\":[\"3h_haute_couture\"]},{\"text\":\"Des tissus fluides et un assortiment de breloques artisanales à ton cou et à tes poignets.\",\"moods\":[],\"score\":0,\"cardGain\":[\"3j_hippie\"]},{\"text\":\"Des chaussures confortables et une tenue où tu demeures avant tout libre de tes mouvements.\",\"moods\":[],\"score\":0,\"cardGain\":[\"3c_cocooning\"]}],\"goto\":\"intro_004\"},\"intro_004\":{\"id\":\"intro_004\",\"texts\":[\"Arrivée à la porte au bout du couloir, tu prends une longue inspiration avant de franchir ce dernier sas afin de te recentrer. Tu sais quel est ton objectif en venant ici. La personne que tu es venue traquer, et qui a un nom : Amir.\",\"Une crispation parcourt ton poing à cette pensée. C\\'est dans son territoire que tu t\\'apprêtes à entrer, et tu as parfaitement consciente des risques que tu y encours. Mais pourtant... si toi tu n\\'accomplis pas cela, personne d\\'autre ne le fera. Tu sais ce qu\\'il a fait à ses victimes, et ce qu\\'il refera encore si tu n\\'y mets pas un terme ; et tu sais qu\\'à cette liste de victimes viendra ce soir s\\'ajouter ton nom si sa volonté surpasse la tienne.\",\"Une deuxième profonde inspiration vient calmer ton rythme cardiaque. Tu dois rester concentrée sur ton objectif : trouver Amir, l\\'isoler, et... faire ce que tu as à faire. D\\'ici la fin de la soirée, tu comptes bien...\"],\"options\":[{\"text\":\"Avoir mis ce sale type hors d\\'état de nuire.\",\"moods\":[],\"score\":0,\"cardGain\":[\"2ac_poing_justice\"]},{\"text\":\"Avoir au moins obtenu une explication à ses actes.\",\"moods\":[],\"score\":0,\"cardGain\":[\"2cj_empathie\"]},{\"text\":\"Démontrer que nul n\\'est en mesure de prendre l\\'ascendant sur toi.\",\"moods\":[],\"score\":0,\"cardGain\":[\"2ah_farouche_independance\"]},{\"text\":\"Le soumettre et le faire ramper à tes pieds.\",\"moods\":[],\"score\":0,\"cardGain\":[\"2hs_domina\"]},{\"text\":\"Avoir kiffé le moment - après tout, on ne vit qu\\'une fois.\",\"moods\":[],\"score\":0,\"cardGain\":[\"2js_yolo\"]}],\"goto\":\"end\"}}');\n\n//# sourceURL=webpack://bewitched/./src/data/dialogues.json?\n}");

/***/ }

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
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;