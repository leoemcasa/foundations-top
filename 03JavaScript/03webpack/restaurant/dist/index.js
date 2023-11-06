/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => {
  // webpackBootstrap
  /******/ "use strict";
  /******/ var __webpack_modules__ = {
    /***/ "./src/index.js":
      /*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        eval(
          "__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _template__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./template */ \"./src/template.js\");\n\n\ndocument.body.appendChild((0,_template__WEBPACK_IMPORTED_MODULE_0__.componentTemplate)());\n\nfunction componentIndex() {\n    const section = document.createElement('section');\n      section.classList.add('content-section');\n      section.classList.add('container');\n    const h2 = document.createElement('h2');\n      h2.classList.add('section-header');\n      h2.textContent = \"ABOUT\";\n    const img = document.createElement('img');\n      img.classList.add('about-loja-image');\n      img.src = 'img/cores.jpg'\n    const p1 = document.createElement('p');\n      p1.textContent = \"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sed pretium risus. Mauris commodo, neque nec vehicula dictum, metus est faucibus libero, non interdum quam dolor ut urna. Ut vehicula sem quis augue euismod luctus. Etiam eget magna sit amet metus aliquet accumsan ac nec nisi. Morbi sed fermentum risus, nec condimentum leo. Proin ipsum augue, maximus quis iaculis quis, pharetra mollis elit. Vivamus in efficitur purus. Nullam pulvinar leo nec massa pharetra, non efficitur arcu luctus. Nam velit velit, consectetur a pharetra vel, vehicula vel quam. Ut hendrerit eros nibh. Nulla tincidunt mi vitae libero gravida, nec porta metus viverra. Quisque in gravida dui. Pellentesque hendrerit, mi non finibus vehicula, nunc dolor aliquam leo, accumsan venenatis leo mauris sit amet dui. Nunc auctor nec sapien in pulvinar.\";\n    const p2 = document.createElement('p');\n      p2.textContent = \"Aliquam iaculis turpis tortor, tempor mattis orci pharetra vel. Nam vitae nunc a risus pharetra euismod in in arcu. Donec sollicitudin dolor eget eros tempus consequat. Pellentesque dictum scelerisque urna. Maecenas commodo id augue id facilisis. Ut id dolor quis augue porta euismod ut ut quam. Pellentesque fermentum erat ac imperdiet tempus. Fusce vestibulum, orci ut elementum pellentesque, sapien eros ornare dui, quis finibus libero est eu purus. Duis vulputate sapien ac nisi tincidunt, scelerisque maximus purus pellentesque.\";\n      section.appendChild(img);\n    section.appendChild(p1);\n    section.appendChild(p2);\n    section.appendChild(h2);\n  \n      return section;\n  }\n\n  document.body.appendChild(componentIndex());\n\n//# sourceURL=webpack://restaurant/./src/index.js?",
        );

        /***/
      },

    /***/ "./src/template.js":
      /*!*************************!*\
  !*** ./src/template.js ***!
  \*************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        eval(
          "__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   componentTemplate: () => (/* binding */ componentTemplate)\n/* harmony export */ });\n//import myName from './myName';\n\n// function component() {\n//   const element = document.createElement('div');\n\n//   // use your function!\n//   element.textContent = myName('Cody');\n//   return element;\n// }\n\n// document.body.appendChild(component());\n\nfunction componentTemplate() {\n  const element = document.createElement('header');\n    element.classList.add('main-header');\n  const nav = document.createElement('nav');\n    nav.classList.add('nav');\n    nav.classList.add('main-nav');\n    \n  const ul = document.createElement('ul');\n  const li1 = document.createElement('li');\n  const aHome = document.createElement('a');\n    aHome.textContent = \"home\";\n    aHome.setAttribute('href', \"index.html\");\n    li1.appendChild(aHome);\n    ul.appendChild(li1);\n  const li2 = document.createElement('li');\n  const aCores = document.createElement('a');\n    aCores.textContent = \"Cores\";\n    aCores.setAttribute('href', \"cores.html\")\n    li2.appendChild(aCores);\n    ul.appendChild(li2);\n  const li3 = document.createElement('li');\n  const aSobre = document.createElement('a');\n    aSobre.textContent = \"Sobre\";\n    aSobre.setAttribute('href', \"sobre.html\");\n    li3.appendChild(aSobre);\n    ul.appendChild(li3);\n    nav.appendChild(ul);\n    element.appendChild(nav);\n  const loja = document.createElement('h1');\n    loja.textContent = \"SO Cores\";\n    loja.classList.add('loja-name');\n    loja.classList.add('loja-name-large');\n//element.appendChild(nav);\n    element.appendChild(loja);\n\n    return element;\n}\n\n\n\n// document.body.appendChild(component());\n\n//# sourceURL=webpack://restaurant/./src/template.js?",
        );

        /***/
      },

    /******/
  };
  /************************************************************************/
  /******/ // The module cache
  /******/ var __webpack_module_cache__ = {};
  /******/
  /******/ // The require function
  /******/ function __webpack_require__(moduleId) {
    /******/ // Check if module is in cache
    /******/ var cachedModule = __webpack_module_cache__[moduleId];
    /******/ if (cachedModule !== undefined) {
      /******/ return cachedModule.exports;
      /******/
    }
    /******/ // Create a new module (and put it into the cache)
    /******/ var module = (__webpack_module_cache__[moduleId] = {
      /******/ // no module.id needed
      /******/ // no module.loaded needed
      /******/ exports: {},
      /******/
    });
    /******/
    /******/ // Execute the module function
    /******/ __webpack_modules__[moduleId](
      module,
      module.exports,
      __webpack_require__,
    );
    /******/
    /******/ // Return the exports of the module
    /******/ return module.exports;
    /******/
  }
  /******/
  /************************************************************************/
  /******/ /* webpack/runtime/define property getters */
  /******/ (() => {
    /******/ // define getter functions for harmony exports
    /******/ __webpack_require__.d = (exports, definition) => {
      /******/ for (var key in definition) {
        /******/ if (
          __webpack_require__.o(definition, key) &&
          !__webpack_require__.o(exports, key)
        ) {
          /******/ Object.defineProperty(exports, key, {
            enumerable: true,
            get: definition[key],
          });
          /******/
        }
        /******/
      }
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/hasOwnProperty shorthand */
  /******/ (() => {
    /******/ __webpack_require__.o = (obj, prop) =>
      Object.prototype.hasOwnProperty.call(obj, prop);
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/make namespace object */
  /******/ (() => {
    /******/ // define __esModule on exports
    /******/ __webpack_require__.r = (exports) => {
      /******/ if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
        /******/ Object.defineProperty(exports, Symbol.toStringTag, {
          value: "Module",
        });
        /******/
      }
      /******/ Object.defineProperty(exports, "__esModule", { value: true });
      /******/
    };
    /******/
  })();
  /******/
  /************************************************************************/
  /******/
  /******/ // startup
  /******/ // Load entry module and return exports
  /******/ // This entry module can't be inlined because the eval devtool is used.
  /******/ var __webpack_exports__ = __webpack_require__("./src/index.js");
  /******/
  /******/
})();
