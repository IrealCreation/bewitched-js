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

eval("{module.exports = /*#__PURE__*/JSON.parse('{\"1ac\":{\"id\":\"1ac\",\"name\":\"Instinct\",\"moods\":[\"Agressif\",\"Calme\"],\"score\":1},\"1ah\":{\"id\":\"1ah\",\"name\":\"Mépris\",\"moods\":[\"Agressif\",\"Hautain\"],\"score\":1},\"1aj\":{\"id\":\"1aj\",\"name\":\"Rivalité\",\"moods\":[\"Agressif\",\"Joyeux\"],\"score\":1},\"1as\":{\"id\":\"1as\",\"name\":\"Mordillement\",\"moods\":[\"Agressif\",\"Séducteur\"],\"score\":1},\"1ch\":{\"id\":\"1ch\",\"name\":\"Moquerie\",\"moods\":[\"Calme\",\"Hautain\"],\"score\":1},\"1cj\":{\"id\":\"1cj\",\"name\":\"Optimisme\",\"moods\":[\"Calme\",\"Joyeux\"],\"score\":1},\"1cs\":{\"id\":\"1cs\",\"name\":\"Confidence\",\"moods\":[\"Calme\",\"Séducteur\"],\"score\":1},\"1hj\":{\"id\":\"1hj\",\"name\":\"Moquerie\",\"moods\":[\"Hautain\",\"Joyeux\"],\"score\":1},\"1hs\":{\"id\":\"1hs\",\"name\":\"Indifférence\",\"moods\":[\"Hautain\",\"Séducteur\"],\"score\":1},\"1js\":{\"id\":\"1js\",\"name\":\"Oeillade\",\"moods\":[\"Joyeux\",\"Séducteur\"],\"score\":1},\"2cj_paix_interieure\":{\"id\":\"2cj_paix_interieure\",\"name\":\"Paix intérieure\",\"moods\":[\"Calme\",\"Joyeux\"],\"score\":2},\"2as_en_chasse\":{\"id\":\"2as_en_chasse\",\"name\":\"En chasse\",\"moods\":[\"Agressif\",\"Séducteur\"],\"score\":2},\"2ch_mental_acier\":{\"id\":\"2ch_mental_acier\",\"name\":\"Mental d\\'acier\",\"moods\":[\"Calme\",\"Hautain\"],\"score\":2},\"2aj_rage_vivre\":{\"id\":\"2aj_rage_vivre\",\"name\":\"Rage de vivre\",\"moods\":[\"Joyeux\",\"Agressif\"],\"score\":2},\"2hs_femme_experience\":{\"id\":\"2hs_femme_experience\",\"name\":\"Femme d\\'expérience\",\"moods\":[\"Hautain\",\"Séducteur\"],\"score\":2},\"2ac_poing_justice\":{\"id\":\"2ac_poing_justice\",\"name\":\"Poing de la justice\",\"moods\":[\"Agressif\",\"Calme\"],\"score\":2},\"2hs_domina\":{\"id\":\"2hs_domina\",\"name\":\"Domina\",\"moods\":[\"Hautain\",\"Séducteur\"],\"score\":2},\"2cj_empathie\":{\"id\":\"2cj_empathie\",\"name\":\"Empathie\",\"moods\":[\"Calme\",\"Joyeux\"],\"score\":2},\"2ah_soif_pouvoir\":{\"id\":\"2ah_soif_pouvoir\",\"name\":\"Soif de pouvoir\",\"moods\":[\"Agressif\",\"Hautain\"],\"score\":2},\"2js_yolo\":{\"id\":\"2js_yolo\",\"name\":\"You only live once\",\"moods\":[\"Joyeux\",\"Séducteur\"],\"score\":2},\"3h_gouts_luxes\":{\"id\":\"3h_gouts_luxes\",\"name\":\"Goûts de luxe\",\"moods\":[\"Hautain\"],\"score\":3},\"3j_optimisme\":{\"id\":\"3j_optimisme\",\"name\":\"Optimisme\",\"moods\":[\"Joyeux\"],\"score\":3},\"3a_traversee_enfers\":{\"id\":\"3a_traversee_enfers\",\"name\":\"Traversée des enfers\",\"moods\":[\"Agressif\"],\"score\":3},\"3c_oeil_tempete\":{\"id\":\"3c_oeil_tempete\",\"name\":\"Oeil de la tempête\",\"moods\":[\"Calme\"],\"score\":3},\"3s_viles_passions\":{\"id\":\"3s_viles_passions\",\"name\":\"Viles passions\",\"moods\":[\"Séducteur\"],\"score\":3},\"3a_punk_rock\":{\"id\":\"3a_punk_rock\",\"name\":\"Punk rock\",\"moods\":[\"Agressif\"],\"score\":3},\"3s_glamour\":{\"id\":\"3s_glamour\",\"name\":\"Glamour\",\"moods\":[\"Séducteur\"],\"score\":3},\"3h_haute_couture\":{\"id\":\"3h_haute_couture\",\"name\":\"Haute couture\",\"moods\":[\"Hautain\"],\"score\":3},\"3j_hippie\":{\"id\":\"3j_hippie\",\"name\":\"Hippie\",\"moods\":[\"Joyeux\"],\"score\":3},\"3c_cocooning\":{\"id\":\"3c_cocooning\",\"name\":\"Cocooning\",\"moods\":[\"Calme\"],\"score\":3}}');\n\n//# sourceURL=webpack://bewitched/./src/data/cards.json?\n}");

/***/ },

/***/ "./src/data/dialogues.json"
/*!*********************************!*\
  !*** ./src/data/dialogues.json ***!
  \*********************************/
(module) {

eval("{module.exports = /*#__PURE__*/JSON.parse('{\"intro_001\":{\"id\":\"intro_001\",\"texts\":[\"“Tabula Rasa”. Telles sont les grandes lettres en néon intense, brillantes dans la nuit, qui ornent la façade du bâtiment dans lequel tu t\\'engouffres.\",\"Laissant derrière toi une file d\\'attente qui ne cesse de s\\'allonger, tu dépasses le regard d\\'un videur qui te jauge d\\'un rapide coup d\\'oeil puis tu paies le droit de passage à une hôtesse qui t\\'accueille d\\'un “bonsoir et amusez-vous bien mademoiselle” distrait.\",\"Devant toi, un long couloir plongé dans la pénombre enfumée fait office d\\'antichambre de ces profondeurs où résonne une musique encore étouffée ; antre nocturne dédiée aux divinités modernes de stupre et de lucre...\",\"Mais ce n\\'est pas pour t\\'amuser que tu es venue ici. Tu as une tâche à accomplir. Une tâche importante, dont des vies dépendent - à commencer par la tienne. Ce que tu mets en jeu en entrant ici n\\'est rien de moins que ta propre psyché.\",\"Face à cette perspective, tu te sens...\"],\"options\":[{\"text\":\"Sereine, confiante dans la suite des événements.\",\"moods\":[],\"score\":0,\"cardGain\":[\"2cj_paix_interieure\"]},{\"text\":\"Telle une prédatrice se mettant en chasse, l\\'adrénaline dans les veines.\",\"moods\":[],\"score\":0,\"cardGain\":[\"2as_en_chasse\"]},{\"text\":\"Déterminée et pleinement concentrée sur ton objectif.\",\"moods\":[],\"score\":0,\"cardGain\":[\"2ch_mental_acier\"]},{\"text\":\"Frissonnante d\\'impatience de voir ce que la nuit te réserve.\",\"moods\":[],\"score\":0,\"cardGain\":[\"2aj_rage_vivre\"]},{\"text\":\"Blasée : ce n\\'est pas ton premier rodéo, ni ton dernier.\",\"moods\":[],\"score\":0,\"cardGain\":[\"2hs_femme_experience\"]}],\"goto\":\"intro_002\"},\"intro_002\":{\"id\":\"intro_002\",\"texts\":[\"Tu avances dans le couloir au travers de la foule qui s\\'y trouve, consciente de pénétrer dans la tanière de celui que tu es venu traquer ; mais tu le fais en connaissance de cause. Tu es loin d\\'être une proie désarmée, et cette illusion que d\\'autres se feront de toi sera ta meilleure alliée tandis que tu évolueras en terrain ennemi.\",\"Depuis la porte l\\'extrémité du corridor filtrent de puissantes vibrations de basses et des éclats de lumière stroboscopiques. Tu peux presque ressentir les élans des émotions humaines qui s\\'agitent en ce lieu, sur fond de musique battante et de relents d\\'alcool.\",\"A tes lèvres apparaît...\"],\"options\":[{\"text\":\"Une moue de dédain. Les lieux que tu fréquentes habituellement sont plus... distingués.\",\"moods\":[],\"score\":0,\"cardGain\":[\"3h_gouts_luxe\"]},{\"text\":\"Un sourire. Tu n\\'es pas une habituée de cette adresse, mais tu sais faire de chaque environnement ton élément.\",\"moods\":[],\"score\":0,\"cardGain\":[\"3j_optimisme\"]},{\"text\":\"Un rictus. Peu importe l\\'endroit : tu franchirais les cercles infernaux s\\'il le fallait pour accomplir ton objectif.\",\"moods\":[],\"score\":0,\"cardGain\":[\"3a_traversee_enfers\"]},{\"text\":\"Un tressaillement. Tu n\\'es pas à l\\'aise au milieu d\\'autant de gens, mais tu seras ton propre phare au cœur de la tempête.\",\"moods\":[],\"score\":0,\"cardGain\":[\"3c_oeil_tempete\"]},{\"text\":\"Un mordillement. C\\'est là où s\\'ébattent les plus vives passions que tu te sens le plus vivante.\",\"moods\":[],\"score\":0,\"cardGain\":[\"3s_viles_passions\"]}],\"goto\":\"intro_003\"},\"intro_003\":{\"id\":\"intro_003\",\"texts\":[\"Poursuivant ta marche, tu passes à côté d\\'une vitre teintée qui perce le mur à ta droite. A l\\'occasion d\\'un nouvel éclat de lumière se dessine sur cette surface lisse et sombre ton reflet éphémère, auquel tu jettes un furtif coup d\\'œil.\",\"Tu te vois apprêtée pour le combat ; même si celui-ci doit voir s\\'opposer la force de deux volontés plutôt que deux puissances physiques… Un affrontement bien plus subtil, mais non moins brutal - voire mortel. Tu remontes légèrement le col couvrant ta nuque, camouflant le tatouage aux formes inhabituelles qu\\'on commençait à y entrapercevoir.\",\"Dans cette armure de bataille que ton reflet arbore, les détails qui sautent aux yeux sont...\"],\"options\":[{\"text\":\"Du cuir clouté et des bottes renforcées prêtes à botter des arrière-trains.\",\"moods\":[],\"score\":0,\"cardGain\":[\"3a_punk_rock\"]},{\"text\":\"Un maquillage parfait et juste ce qu\\'il faut de peau dénudée pour attirer les regards.\",\"moods\":[],\"score\":0,\"cardGain\":[\"3s_glamour\"]},{\"text\":\"La brillance des perles et le logo discret d\\'une maison de haute couture sur tes vêtements.\",\"moods\":[],\"score\":0,\"cardGain\":[\"3h_haute_couture\"]},{\"text\":\"Des tissus fluides et un assortiment de breloques artisanales à ton cou et à tes poignets.\",\"moods\":[],\"score\":0,\"cardGain\":[\"3j_hippie\"]},{\"text\":\"Des chaussures confortables et une tenue où tu demeures avant tout libre de tes mouvements.\",\"moods\":[],\"score\":0,\"cardGain\":[\"3c_cocooning\"]}],\"goto\":\"intro_004\"},\"intro_004\":{\"id\":\"intro_004\",\"texts\":[\"Arrivée à la porte au bout du couloir, tu prends une longue inspiration avant de franchir ce dernier sas afin de te recentrer. Tu sais quel est ton objectif en venant ici. La personne que tu es venue traquer, et qui a un nom : Amir.\",\"Une crispation parcourt ton poing à cette pensée. C\\'est dans son territoire que tu t\\'apprêtes à entrer, et tu as parfaitement conscience des risques que tu y encours. Mais pourtant… si toi tu n\\'accomplis pas cela, personne d\\'autre ne le fera. Tu sais ce qu\\'il a fait à ses victimes, et ce qu\\'il refera encore si tu n\\'y mets pas un terme ; et tu sais qu\\'à cette liste de victimes viendra ce soir s\\'ajouter ton nom si sa volonté surpasse la tienne.\",\"Une deuxième profonde inspiration vient calmer ton rythme cardiaque. Tu dois rester concentrée sur ton objectif : trouver Amir, l\\'isoler, et... faire ce que tu as à faire. D\\'ici la fin de la soirée, tu comptes bien...\"],\"options\":[{\"text\":\"Avoir mis ce sale type hors d\\'état de nuire.\",\"moods\":[],\"score\":0,\"cardGain\":[\"2ac_poing_justice\"]},{\"text\":\"Avoir au moins obtenu une explication à ses actes.\",\"moods\":[],\"score\":0,\"cardGain\":[\"2cj_empathie\"]},{\"text\":\"Démontrer que nul n\\'a plus de pouvoir que toi.\",\"moods\":[],\"score\":0,\"cardGain\":[\"2ah_soif_pouvoir\"]},{\"text\":\"Le soumettre et le faire ramper à tes pieds.\",\"moods\":[],\"score\":0,\"cardGain\":[\"2hs_domina\"]},{\"text\":\"Avoir kiffé le moment - après tout, on ne vit qu\\'une fois.\",\"moods\":[],\"score\":0,\"cardGain\":[\"2js_yolo\"]}],\"goto\":\"end\"}}');\n\n//# sourceURL=webpack://bewitched/./src/data/dialogues.json?\n}");

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