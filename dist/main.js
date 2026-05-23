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

/***/ "./src/gameManager.ts"
/*!****************************!*\
  !*** ./src/gameManager.ts ***!
  \****************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ GameManager)\n/* harmony export */ });\n/* harmony import */ var _data_dialogues_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data/dialogues.json */ \"./src/data/dialogues.json\");\n/* harmony import */ var _data_cards_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data/cards.json */ \"./src/data/cards.json\");\n\n\n/**\n * Le GameManager est responsable de la gestion globale du jeu, et peut être appelé via sa valeur statique \"instance\".\n */\nclass GameManager {\n    constructor() {\n        this.dialogues = _data_dialogues_json__WEBPACK_IMPORTED_MODULE_0__;\n        this.cards = _data_cards_json__WEBPACK_IMPORTED_MODULE_1__;\n        GameManager.instance = this;\n    }\n    helloWorld() {\n        console.log(\"Hello, Bewitched!\");\n    }\n    printDialogues() {\n        console.log(this.dialogues);\n    }\n    printCards() {\n        console.log(this.cards);\n    }\n}\n\n\n//# sourceURL=webpack://bewitched/./src/gameManager.ts?\n}");

/***/ },

/***/ "./src/index.ts"
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _gameManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameManager */ \"./src/gameManager.ts\");\n\n// Test de fonctionnement de la classe GameManager\nconst gameManager = new _gameManager__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\ngameManager.helloWorld();\ngameManager.printDialogues();\ngameManager.printCards();\n\n\n//# sourceURL=webpack://bewitched/./src/index.ts?\n}");

/***/ },

/***/ "./src/data/cards.json"
/*!*****************************!*\
  !*** ./src/data/cards.json ***!
  \*****************************/
(module) {

eval("{module.exports = /*#__PURE__*/JSON.parse('{\"a_c_1\":{\"id\":\"a_c_1\",\"name\":\"Instinct\",\"moods\":[\"Agressif\",\"Calme\"],\"score\":1},\"a_h_1\":{\"id\":\"a_h_1\",\"name\":\"Mépris\",\"moods\":[\"Agressif\",\"Hautain\"],\"score\":1},\"a_j_1\":{\"id\":\"a_j_1\",\"name\":\"Rivalité\",\"moods\":[\"Agressif\",\"Joyeux\"],\"score\":1},\"a_s_1\":{\"id\":\"a_s_1\",\"name\":\"Mordillement\",\"moods\":[\"Agressif\",\"Séducteur\"],\"score\":1},\"c_h_1\":{\"id\":\"c_h_1\",\"name\":\"Moquerie\",\"moods\":[\"Calme\",\"Hautain\"],\"score\":1},\"c_j_1\":{\"id\":\"c_j_1\",\"name\":\"Optimisme\",\"moods\":[\"Calme\",\"Joyeux\"],\"score\":1},\"c_s_1\":{\"id\":\"c_s_1\",\"name\":\"Confidence\",\"moods\":[\"Calme\",\"Séducteur\"],\"score\":1},\"h_j_1\":{\"id\":\"h_j_1\",\"name\":\"Moquerie\",\"moods\":[\"Hautain\",\"Joyeux\"],\"score\":1},\"h_s_1\":{\"id\":\"h_s_1\",\"name\":\"Indifférence\",\"moods\":[\"Hautain\",\"Séducteur\"],\"score\":1},\"j_s_1\":{\"id\":\"j_s_1\",\"name\":\"Oeillade\",\"moods\":[\"Joyeux\",\"Séducteur\"],\"score\":1}}');\n\n//# sourceURL=webpack://bewitched/./src/data/cards.json?\n}");

/***/ },

/***/ "./src/data/dialogues.json"
/*!*********************************!*\
  !*** ./src/data/dialogues.json ***!
  \*********************************/
(module) {

eval("{module.exports = /*#__PURE__*/JSON.parse('{\"intro_001\":{\"id\":\"intro_001\",\"texts\":[\"Boujour joueur.\",\"Bienvenue dans Bewitched\"],\"goto\":\"intro_002\"}}');\n\n//# sourceURL=webpack://bewitched/./src/data/dialogues.json?\n}");

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
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;