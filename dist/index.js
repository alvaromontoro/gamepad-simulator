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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: gamepadSimulator, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"gamepadSimulator\", function() { return gamepadSimulator; });\nconst gamepadSimulator = {\n  getGamepads: null,\n  fakeController: {\n    axes: [0, 0, 0, 0],\n    buttons: [\n      {\n        pressed: false,\n        touched: false,\n        value: 0,\n      },\n      {\n        pressed: false,\n        touched: false,\n        value: 0,\n      },\n      {\n        pressed: false,\n        touched: false,\n        value: 0,\n      },\n      {\n        pressed: false,\n        touched: false,\n        value: 0,\n      },\n      {\n        pressed: false,\n        touched: false,\n        value: 0,\n      },\n      {\n        pressed: false,\n        touched: false,\n        value: 0,\n      },\n      {\n        pressed: false,\n        touched: false,\n        value: 0,\n      },\n      {\n        pressed: false,\n        touched: false,\n        value: 0,\n      },\n      {\n        pressed: false,\n        touched: false,\n        value: 0,\n      },\n      {\n        pressed: false,\n        touched: false,\n        value: 0,\n      },\n      {\n        pressed: false,\n        touched: false,\n        value: 0,\n      },\n      {\n        pressed: false,\n        touched: false,\n        value: 0,\n      },\n      {\n        pressed: false,\n        touched: false,\n        value: 0,\n      },\n      {\n        pressed: false,\n        touched: false,\n        value: 0,\n      },\n      {\n        pressed: false,\n        touched: false,\n        value: 0,\n      },\n      {\n        pressed: false,\n        touched: false,\n        value: 0,\n      },\n      {\n        pressed: false,\n        touched: false,\n        value: 0,\n      },\n    ],\n    connected: false,\n    id: \"Standard gamepad by Alvaro Montoro\",\n    index: 0,\n    mapping: \"standard\",\n    timestamp: Math.floor(Date.now() / 1000),\n  },\n  create: function () {\n    document.querySelector(\"body\").insertAdjacentHTML(\n      \"beforeend\",\n      `<svg viewBox=\"0 0 600 300\" id=\"amdfc-controller\" width=\"350px\" style=\"position: absolute; z-index: 999999;\">\n<style>\n.amdfc-int:hover {\nfill: #bbb;\n}\n.amdfc-int.amdfc-active {\nfill: fuchsia;\n}\n</style>\n<g fill=\"#ddd\" stroke=\"#222\" stroke-width=\"3\">\n<rect x=\"150\" y=\"10\" width=\"100\" height=\"100\" rx=\"5\" ry=\"5\" class=\"amdfc-int\" id=\"amdfc-button-6\"></rect>\n<rect x=\"350\" y=\"10\" width=\"100\" height=\"100\" rx=\"5\" ry=\"5\" class=\"amdfc-int\" id=\"amdfc-button-7\"></rect>\n<rect x=\"100\" y=\"25\" width=\"100\" height=\"40\" rx=\"5\" ry=\"5\" class=\"amdfc-int\" id=\"amdfc-button-4\"></rect>\n<rect x=\"400\" y=\"25\" width=\"100\" height=\"40\" rx=\"5\" ry=\"5\" class=\"amdfc-int\" id=\"amdfc-button-5\"></rect>\n<path d=\"M135,50 C 45,50 20,180 20,240 20,300 80,330 175,220 175,220 \n425,220 425,220 520,330 580,300 580,240 580,180 555,50 465,50 Z\"></path>\n<circle cx=\"200\" cy=\"200\" r=\"35\"></circle>\n<circle cx=\"400\" cy=\"200\" r=\"35\"></circle>\n<circle cx=\"200\" cy=\"200\" r=\"15\" class=\"amdfc-int\" id=\"amdfc-button-10\"></circle>\n<circle cx=\"400\" cy=\"200\" r=\"15\" class=\"amdfc-int\" id=\"amdfc-button-11\"></circle>\n<path d=\"M190,182 210,182 200,168 Z\" stroke-width=\"0\" class=\"amdfc-int\" id=\"amdfc-axe-0-up\"></path>\n<path d=\"M190,218 210,218 200,232 Z\" stroke-width=\"0\" class=\"amdfc-int\" id=\"amdfc-axe-0-down\"></path>\n<path d=\"M218,190 218,210 232,200 Z\" stroke-width=\"0\" class=\"amdfc-int\" id=\"amdfc-axe-0-right\"></path>\n<path d=\"M182,190 182,210 168,200 Z\" stroke-width=\"0\" class=\"amdfc-int\" id=\"amdfc-axe-0-left\"></path>\n<path d=\"M390,182 410,182 400,168 Z\" stroke-width=\"0\" class=\"amdfc-int\" id=\"amdfc-axe-1-up\"></path>\n<path d=\"M390,218 410,218 400,232 Z\" stroke-width=\"0\" class=\"amdfc-int\" id=\"amdfc-axe-1-down\"></path>\n<path d=\"M418,190 418,210 432,200 Z\" stroke-width=\"0\" class=\"amdfc-int\" id=\"amdfc-axe-1-right\"></path>\n<path d=\"M382,190 382,210 368,200 Z\" stroke-width=\"0\" class=\"amdfc-int\" id=\"amdfc-axe-1-left\"></path>\n\n<circle cx=\"480\" cy=\"160\" r=\"15\" class=\"amdfc-int\" id=\"amdfc-button-0\"></circle>\n<circle cx=\"510\" cy=\"130\" r=\"15\" class=\"amdfc-int\" id=\"amdfc-button-1\"></circle>\n<circle cx=\"450\" cy=\"130\" r=\"15\" class=\"amdfc-int\" id=\"amdfc-button-2\"></circle>\n<circle cx=\"480\" cy=\"100\" r=\"15\" class=\"amdfc-int\" id=\"amdfc-button-3\"></circle>\n\n<rect x=\"105\" y=\"85\" width=\"30\" height=\"90\" fill=\"#aaa\" stroke=\"#aaa\"></rect>\n<rect x=\"75\" y=\"115\" width=\"90\" height=\"30\" fill=\"#aaa\" stroke=\"#aaa\"></rect>\n\n<rect x=\"245\" y=\"145\" width=\"50\" height=\"18\" rx=\"9\" ry=\"9\" class=\"amdfc-int\" id=\"amdfc-button-8\"></rect>\n<rect x=\"305\" y=\"145\" width=\"50\" height=\"18\" rx=\"9\" ry=\"9\" class=\"amdfc-int\" id=\"amdfc-button-9\"></rect>\n\n<circle cx=\"120\" cy=\"160\" r=\"15\" class=\"amdfc-int\" id=\"amdfc-button-13\"></circle>\n<circle cx=\"90\" cy=\"130\" r=\"15\" class=\"amdfc-int\" id=\"amdfc-button-14\"></circle>\n<circle cx=\"150\" cy=\"130\" r=\"15\" class=\"amdfc-int\" id=\"amdfc-button-15\"></circle>\n<circle cx=\"120\" cy=\"100\" r=\"15\" class=\"amdfc-int\" id=\"amdfc-button-12\"></circle>\n\n<circle cx=\"300\" cy=\"90\" r=\"20\" class=\"amdfc-int\" id=\"amdfc-button-16\"></circle>\n</g>\n<g dominant-baseline=\"middle\" text-anchor=\"middle\" fill=\"#222\" font-size=\"16\" font-family=\"Arial,sans-serif\" style=\"user-select: none; pointer-events: none;\">\n<text x=\"480\" y=\"160\">0</text>\n<text x=\"510\" y=\"130\">1</text>\n<text x=\"450\" y=\"130\">2</text>\n<text x=\"480\" y=\"100\">3</text>\n<text x=\"150\" y=\"40\">4</text>\n<text x=\"450\" y=\"40\">5</text>\n<text x=\"225\" y=\"30\">6</text>\n<text x=\"375\" y=\"30\">7</text>\n<text x=\"270\" y=\"156\">8</text>\n<text x=\"330\" y=\"156\">9</text>\n<text x=\"200\" y=\"200\">10</text>\n<text x=\"400\" y=\"200\">11</text>\n<text x=\"120\" y=\"100\">12</text>\n<text x=\"120\" y=\"160\">13</text>\n<text x=\"90\" y=\"130\">14</text>\n<text x=\"150\" y=\"130\">15</text>\n<text x=\"300\" y=\"90\">16</text>\n<text x=\"270\" y=\"175\" font-size=\"10\">SELECT</text>\n<text x=\"330\" y=\"175\" font-size=\"10\">START</text>\n</g>\n</svg>`\n    );\n\n    Array.from(document.querySelectorAll(\".amdfc-int\")).forEach(function (element) {\n      element.addEventListener(\"mouseenter\", function (e) {\n        if (element.id.indexOf(\"amdfc-button\") === 0) {\n          const index = parseInt(element.id.replace(\"amdfc-button-\", \"\"));\n          gamepadSimulator.fakeController.buttons[index].touched = true;\n          gamepadSimulator.fakeController.timestamp = Math.floor(Date.now() / 1000);\n        }\n      });\n\n      element.addEventListener(\"mouseleave\", function (e) {\n        element.setAttribute(\"class\", \"amdfc-int\");\n        if (element.id.indexOf(\"amdfc-button\") === 0) {\n          const index = parseInt(element.id.replace(\"amdfc-button-\", \"\"));\n          gamepadSimulator.fakeController.buttons[index].touched = false;\n          gamepadSimulator.fakeController.buttons[index].pressed = false;\n          gamepadSimulator.fakeController.timestamp = Math.floor(Date.now() / 1000);\n        } else if (element.id.indexOf(\"amdfc-axe-\") === 0) {\n          const axe = parseInt(element.id[10]);\n          const dir = element.id[12];\n          const pos = [\"u\", \"d\"].indexOf(dir) > -1 ? 1 : 0;\n          gamepadSimulator.fakeController.axes[axe * 2 + pos] = 0;\n          gamepadSimulator.fakeController.timestamp = Math.floor(Date.now() / 1000);\n        }\n      });\n\n      element.addEventListener(\"mousedown\", function (e) {\n        element.setAttribute(\"class\", \"amdfc-int amdfc-active\");\n        if (element.id.indexOf(\"amdfc-button\") === 0) {\n          const index = parseInt(element.id.replace(\"amdfc-button-\", \"\"));\n          gamepadSimulator.fakeController.buttons[index].pressed = true;\n          gamepadSimulator.fakeController.timestamp = Math.floor(Date.now() / 1000);\n        } else if (element.id.indexOf(\"amdfc-axe-\") === 0) {\n          const axe = parseInt(element.id[10]);\n          const dir = element.id[12];\n          const value = [\"u\", \"l\"].indexOf(dir) > -1 ? -1 : 1;\n          const pos = [\"u\", \"d\"].indexOf(dir) > -1 ? 1 : 0;\n          gamepadSimulator.fakeController.axes[axe * 2 + pos] = value;\n          gamepadSimulator.fakeController.timestamp = Math.floor(Date.now() / 1000);\n        }\n      });\n\n      element.addEventListener(\"mouseup\", function (e) {\n        element.setAttribute(\"class\", \"amdfc-int\");\n        if (element.id.indexOf(\"amdfc-button\") === 0) {\n          const index = parseInt(element.id.replace(\"amdfc-button-\", \"\"));\n          gamepadSimulator.fakeController.buttons[index].pressed = false;\n          gamepadSimulator.fakeController.timestamp = Math.floor(Date.now() / 1000);\n        } else if (element.id.indexOf(\"amdfc-axe-\") === 0) {\n          const axe = parseInt(element.id[10]);\n          const dir = element.id[12];\n          const pos = [\"u\", \"d\"].indexOf(dir) > -1 ? 1 : 0;\n          gamepadSimulator.fakeController.axes[axe * 2 + pos] = 0;\n          gamepadSimulator.fakeController.timestamp = Math.floor(Date.now() / 1000);\n        }\n      });\n    });\n\n    gamepadSimulator.getGamepads = navigator.getGamepads;\n    navigator.getGamepads = function () {\n      return {\n        0: gamepadSimulator.fakeController,\n      };\n    };\n  },\n  destroy: function () {\n    if (gamepadSimulator.fakeController.connected) {\n      gamepadSimulator.disconnect();\n    }\n    navigator.getGamepads = gamepadSimulator.getGamepads;\n    document.querySelector(\"#amdfc-controller\").remove();\n  },\n  connect: function () {\n    const event = new Event(\"gamepadconnected\");\n    gamepadSimulator.fakeController.connected = true;\n    gamepadSimulator.fakeController.timestamp = Math.floor(Date.now() / 1000);\n    event.gamepad = gamepadSimulator.fakeController;\n    window.dispatchEvent(event);\n    document.querySelector(\"#amdfc-controller\").classList.add(\"connected\");\n  },\n  disconnect: function () {\n    const event = new Event(\"gamepaddisconnected\");\n    gamepadSimulator.fakeController.connected = false;\n    gamepadSimulator.fakeController.timestamp = Math.floor(Date.now() / 1000);\n    event.gamepad = gamepadSimulator.fakeController;\n    window.dispatchEvent(event);\n    document.querySelector(\"#amdfc-controller\").classList.remove(\"connected\");\n  },\n};\n\nwindow.gamepadSimulator = gamepadSimulator;\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (gamepadSimulator);\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });