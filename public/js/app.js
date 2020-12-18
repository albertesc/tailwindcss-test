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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/css/app.sass":
/*!**************************!*\
  !*** ./src/css/app.sass ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
/*! no static exports found */
/***/ (function(module, exports) {

;

(function (window, undefined) {
  'strict mode';
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

  var openSelector = '#menuOpen';
  var closeSelector = '#menuClose';
  var open = document.querySelector(openSelector);
  var close = document.querySelector(closeSelector);
  open.addEventListener('click', function (event) {
    event.preventDefault();
    open.classList.add('open');
    var element = open.getAttribute('data-toggle');
    document.getElementById(element).classList.add('open');
  });
  close.addEventListener('click', function (event) {
    event.preventDefault();
    close.classList.remove('open');
    var element = close.getAttribute('data-toggle');
    document.getElementById(element).classList.remove('open');
  });
})(window);

/***/ }),

/***/ "./src/js/utilities/cookies.js":
/*!*************************************!*\
  !*** ./src/js/utilities/cookies.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

;

(function (window, undefined) {
  'strict mode';
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

  var cookiesElement = 'cookiesMessage';
  var cookiesBtn = 'cookiesAccept';
  var disturbElements = [];
  var cookies = document.getElementById(cookiesElement);

  if (cookies) {
    var btn = document.getElementById(cookiesBtn);
    var cookiesHeight = cookies.offsetHeight;
    btn.addEventListener('click', function () {
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
/*! no static exports found */
/***/ (function(module, exports) {

;

(function (window, undefined) {
  'strict mode';
  /** INFO
   * 
   * Este script sirve para poner la clase header--fixed en el header al hacer scroll hacia abajo y así poder
   * cambiar los estilos css del header.
   */

  var header = document.getElementsByTagName('header');
  window.addEventListener('scroll', function () {
    if (document.documentElement.scrollTop >= 1) {
      header[0].classList.add('header--fixed');
    } else {
      header[0].classList.remove('header--fixed');
    }
  });
})(window);

/***/ }),

/***/ "./src/js/utilities/search.js":
/*!************************************!*\
  !*** ./src/js/utilities/search.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

;

(function (window, undefined) {
  'strict mode';

  var buttonSelector = 'searchButton';
  var formSelector = 'headerSearch';
  var searchButton = document.getElementById(buttonSelector);
  searchButton.addEventListener('click', function () {
    document.getElementById(formSelector).classList.toggle('active');
  });
})(window);

/***/ }),

/***/ "./src/js/utilities/tabs.js":
/*!**********************************!*\
  !*** ./src/js/utilities/tabs.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

;

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

  var selectorTab = '.tab';
  var selectorContent = '.tabs__content';
  var selectorTabSelect = '.tabs__select';
  var activeClass = 'active';
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
      tab.parentElement.parentElement.querySelector(selectorTabSelect).querySelector('span').innerText = text; // close tabs selector mobile

      tab.parentElement.classList.toggle(activeClass);
    });
  });
  tabsSelect.forEach(function (select) {
    select.addEventListener('click', function (event) {
      event.preventDefault();
      var content = select.nextElementSibling;
      content.classList.toggle(activeClass);
    });
  });
})(window);

/***/ }),

/***/ 0:
/*!************************************************!*\
  !*** multi ./src/js/app.js ./src/css/app.sass ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! C:\Users\Albert\Documents\Utilities\tailwindcss-test\src\js\app.js */"./src/js/app.js");
module.exports = __webpack_require__(/*! C:\Users\Albert\Documents\Utilities\tailwindcss-test\src\css\app.sass */"./src/css/app.sass");


/***/ })

/******/ });