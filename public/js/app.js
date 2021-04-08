/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// Custom utilities
__webpack_require__(/*! ./utilities/burger */ "./src/js/utilities/burger.js");

__webpack_require__(/*! ./utilities/cookies */ "./src/js/utilities/cookies.js");

__webpack_require__(/*! ./utilities/header */ "./src/js/utilities/header.js");

__webpack_require__(/*! ./utilities/search */ "./src/js/utilities/search.js");

__webpack_require__(/*! ./utilities/tabs */ "./src/js/utilities/tabs.js");

/***/ }),

/***/ "./src/js/utilities/burger.js":
/*!************************************!*\
  !*** ./src/js/utilities/burger.js ***!
  \************************************/
/***/ (() => {

(function (window, undefined) {
  "strict mode";
  /** CONFIG
   *
   * Coloca las id's (sin #) de los elementos correspondientes de tu html
   * Ha estos dos elementos se les aplicará la clase "open" para el cambio de estado que puedes
   * modificar con tu css.
   *
   * IMPORTANTE: Hay que aplicar el atributo data-toggle en estos dos elementos con el valor
   * de la id (sin #) del elemento que se quiere modificar ej:
   *
   * Example:
   * <a href="#" data-toggle="menu" id="menuOpen" class="" title="...">Abrir</a>
   * <a href="#" data-toggle="menu" id="menuClose" class="" title="...">Cerrar</a>
   * <div id="menu">...</div>
   */

  var openSelector = "#menuOpen";
  var closeSelector = "#menuClose";
  var open = document.querySelector(openSelector);
  var close = document.querySelector(closeSelector);
  open.addEventListener("click", function (event) {
    event.preventDefault();
    open.classList.add("open");
    var element = open.getAttribute("data-toggle");
    document.getElementById(element).classList.add("open");
  });
  close.addEventListener("click", function (event) {
    event.preventDefault();
    close.classList.remove("open");
    var element = close.getAttribute("data-toggle");
    document.getElementById(element).classList.remove("open");
  });
})(window);

/***/ }),

/***/ "./src/js/utilities/cookies.js":
/*!*************************************!*\
  !*** ./src/js/utilities/cookies.js ***!
  \*************************************/
/***/ (() => {

(function (window, undefined) {
  "strict mode";
  /** CONFIG
   *
   * Coloca las id's (sin #) de los elementos correspondientes de tu html.
   *
   * Example:
   * <div id="cookiesMessage">...<span id="cookiesAccept" class="">Acceptar</span></div>
   *
   * Coloca las id's de los elementos que quedan solapados con las cookies en la variable disturbElements ej:
   * let disturbElements = ['upButton', 'element1', '...'];
   */

  var cookiesElement = "cookiesMessage";
  var cookiesBtn = "cookiesAccept";
  var disturbElements = [];
  var cookies = document.getElementById(cookiesElement);

  if (cookies) {
    var btn = document.getElementById(cookiesBtn);
    var cookiesHeight = cookies.offsetHeight;
    btn.addEventListener("click", function () {
      cookies.remove();
      document.cookie = "accept_cookies=yes; expires=Fri, 31 Dec 9999 23:59:59 GMT";

      if (disturbElements.length > 0) {
        disturbElements.forEach(function (element) {
          document.getElementById(element).style.bottom = 0;
        });
      }
    });

    if (disturbElements.length > 0) {
      disturbElements.forEach(function (element) {
        document.getElementById(element).style.bottom = cookiesHeight + "px";
      });
    }
  }
})(window);

/***/ }),

/***/ "./src/js/utilities/header.js":
/*!************************************!*\
  !*** ./src/js/utilities/header.js ***!
  \************************************/
/***/ (() => {

(function (window, undefined) {
  "strict mode";
  /** INFO
   *
   * Este script sirve para poner la clase header--fixed en el header al hacer scroll hacia abajo y así poder
   * cambiar los estilos css del header.
   */

  var header = document.getElementsByTagName("header");
  window.addEventListener("scroll", function () {
    if (document.documentElement.scrollTop >= 1) {
      header[0].classList.add("header--fixed");
    } else {
      header[0].classList.remove("header--fixed");
    }
  });
})(window);

/***/ }),

/***/ "./src/js/utilities/search.js":
/*!************************************!*\
  !*** ./src/js/utilities/search.js ***!
  \************************************/
/***/ (() => {

(function (window, undefined) {
  "strict mode";

  var buttonSelector = "searchButton";
  var formSelector = "headerSearch";
  var searchButton = document.getElementById(buttonSelector);
  searchButton.addEventListener("click", function () {
    document.getElementById(formSelector).classList.toggle("active");
  });
})(window);

/***/ }),

/***/ "./src/js/utilities/tabs.js":
/*!**********************************!*\
  !*** ./src/js/utilities/tabs.js ***!
  \**********************************/
/***/ (() => {

(function (window, undefined) {
  "strict mode";
  /** CONFIG
   *
   * Coloca en la variable selector, la clase (con el . delante) de los elementos correspondientes de tu html.
   *
   * IMPORTANTE: Hay que aplicar el atributo data-tab en estos dos elementos con el valor de la id (sin #) del elemento que se quiere mostrar
   *
   * Example:
   * <span class="tab" data-tab="tab1">Tab 1</span>
   * <span class="tab" data-tab="tab2">Tab 2</span>
   *
   * Coloca en la variable selectorContent, la clase (con el . delante) de los elementos correspondientes de tu html
   *
   * Example:
   * <div id="tab1" class="tab-content">...</div>
   * <div id="tab2" class="tab-content">...</div>
   *
   * Ha estos dos elementos se les aplicará la clase "active" para el cambio de estado que puedes
   * modificar con tu css.
   */

  var selectorTab = ".tab";
  var selectorContent = ".tabs__content";
  var selectorTabSelect = ".tabs__select";
  var activeClass = "active";
  var tabs = document.querySelectorAll(selectorTab);
  var tabsSelect = document.querySelectorAll(selectorTabSelect);
  var tabsContent = document.querySelectorAll(selectorContent);
  tabs.forEach(function (tab) {
    tab.addEventListener("click", function (event) {
      event.preventDefault();
      var dataTab = tab.getAttribute("data-tab"); // remove tab clases active

      tabs.forEach(function (tabItem) {
        tabItem.classList.remove(activeClass);
      }); // add class active in current tab

      tab.classList.add(activeClass); // remove tabcontent clases active

      tabsContent.forEach(function (content) {
        content.classList.remove(activeClass);
      }); // add class active in current tabcontent

      document.getElementById(dataTab).classList.add(activeClass); // change text selector mobile

      var text = tab.innerHTML;
      tab.parentElement.parentElement.querySelector(selectorTabSelect).querySelector("span").innerText = text; // close tabs selector mobile

      tab.parentElement.classList.toggle(activeClass);
    });
  });
  tabsSelect.forEach(function (select) {
    select.addEventListener("click", function (event) {
      event.preventDefault();
      var content = select.nextElementSibling;
      content.classList.toggle(activeClass);
    });
  });
})(window);

/***/ }),

/***/ "./src/css/app.sass":
/*!**************************!*\
  !*** ./src/css/app.sass ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					result = fn();
/******/ 				}
/******/ 			}
/******/ 			return result;
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/public/js/app": 0,
/******/ 			"public/css/app": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) runtime(__webpack_require__);
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			__webpack_require__.O();
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunktailwindcss_test"] = self["webpackChunktailwindcss_test"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["public/css/app"], () => (__webpack_require__("./src/js/app.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["public/css/app"], () => (__webpack_require__("./src/css/app.sass")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;