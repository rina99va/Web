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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_first_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/first.js */ \"./src/js/first.js\");\n/* harmony import */ var _js_second_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/second.js */ \"./src/js/second.js\");\n\n\n\n\nconst second = function () {\n    Object(_js_second_js__WEBPACK_IMPORTED_MODULE_1__[\"render\"])();\n};\nif(localStorage.id == 2){\n    second();\n}\nelse{\n    Object(_js_first_js__WEBPACK_IMPORTED_MODULE_0__[\"start\"])();\n}\n\nconst pokemonButton = document.getElementById('pockemon-button');\nconst infoButton = document.getElementById('info-button');\n\nfunction pokemon(){\n    second();\n    localStorage.id = 2;\n}\n\npokemonButton.onclick = pokemon;\npokemonButton.removeEventListener('click', pokemon);\n\nfunction info(){\n    Object(_js_first_js__WEBPACK_IMPORTED_MODULE_0__[\"start\"])();\n    localStorage.id = 1;\n}\ninfoButton.onclick = info;\ninfoButton.removeEventListener('click', info);\n\n\n\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ }),

/***/ "./src/js/first.js":
/*!*************************!*\
  !*** ./src/js/first.js ***!
  \*************************/
/*! exports provided: start */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"start\", function() { return start; });\nfunction start(){\n    const content = document.getElementById('root');\n    let pokemonButton = document.getElementById('pockemon-button');\n    let infoButton = document.getElementById('info-button');\n    pokemonButton.className = 'first-button';\n    infoButton.className = 'first-button';\n    content.innerHTML = '';\n    content.className = 'first-page';\n    document.body.className = 'first';\n    let list = document.createElement(\"li\");\n    let ul = document.createElement('ul');\n    list.innerHTML = \"Irina Volkova\";\n    ul.appendChild(list);\n    let name = document.createElement('h1');\n    name.className = 'name';\n    let info = document.createElement(\"div\");\n    info.className = 'info';\n    name.innerHTML = \"Irina Volkova\";\n    info.appendChild(name);\n    let restInfo = document.createElement(\"p\");\n    restInfo.className = 'rest-info';\n    info.appendChild(restInfo);\n    content.appendChild(info);\n}\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack:///./src/js/first.js?");

/***/ }),

/***/ "./src/js/second.js":
/*!**************************!*\
  !*** ./src/js/second.js ***!
  \**************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\nfunction render() {\n    const content = document.getElementById('root');\n    content.className = 'second-page';\n    content.innerHTML = '';\n    let pokemonButton = document.getElementById('pockemon-button');\n    let infoButton = document.getElementById('info-button');\n    pokemonButton.className = 'second-button';\n    infoButton.className = 'second-button';\n    document.body.className = 'second';\n    let name = document.createElement('span');\n    name.className = 'pocke-name';\n    let abilities = document.createElement('div');\n    let header = document.createElement('h1');\n    header.className = 'header';\n    header.innerHTML = \"Characteristics\";\n    async function getPokemon() {\n        let id = Math.floor(Math.random() * (808));\n        const url = 'https://pokeapi.co/api/v2/pokemon/' + id.toString() + '/';\n        const response = await fetch(url, {method: 'GET'});\n        const json = await response.json();\n        name.innerHTML = json.name;\n        let array = [];\n        for (let i = 0; i < json.abilities.length; i++) {\n            array.push(json.abilities[i]);\n            let abilityName = json.abilities[i].ability.name;\n            let abilityURL = json.abilities[i].ability.url;\n            let div = document.createElement('div');\n            div.className = 'div';\n            let ability = document.createElement('span');\n            ability.className = 'ability';\n            let description = document.createElement('p');\n            description.className = 'description';\n            ability.innerHTML = abilityName;\n            div.appendChild(ability);\n            content.appendChild(div);\n            async function apiCall(url) {\n                const response = await fetch(url, {method: 'GET'});\n                const json = await response.json();\n                let desr = json.effect_entries[0].effect;\n                description.innerHTML = desr;\n                div.appendChild(description);\n            }\n            await apiCall(abilityURL);\n            abilities.appendChild(div);\n        }\n    }\n    getPokemon().then();\n    content.appendChild(name);\n    abilities.appendChild(header);\n    content.appendChild(abilities);\n}\n\n\n//# sourceURL=webpack:///./src/js/second.js?");

/***/ })

/******/ });