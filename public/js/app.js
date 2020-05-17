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

__webpack_require__(/*! ./utilities/accordion */ "./src/js/utilities/accordion.js");

__webpack_require__(/*! ./utilities/anchors */ "./src/js/utilities/anchors.js");

__webpack_require__(/*! ./utilities/burger */ "./src/js/utilities/burger.js");

__webpack_require__(/*! ./utilities/collapse */ "./src/js/utilities/collapse.js");

__webpack_require__(/*! ./utilities/cookies */ "./src/js/utilities/cookies.js");

__webpack_require__(/*! ./utilities/header */ "./src/js/utilities/header.js");

__webpack_require__(/*! ./utilities/tabs */ "./src/js/utilities/tabs.js");

__webpack_require__(/*! ./utilities/up */ "./src/js/utilities/up.js");

/***/ }),

/***/ "./src/js/utilities/accordion.js":
/*!***************************************!*\
  !*** ./src/js/utilities/accordion.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

;

(function (window, undefined) {
  'strict mode'; // Config
  // -----------------------

  /*  Coloca en la variable selector, la clase (con el . delante) de los bottones de accordion correspondientes de tu html ej:
       <div class="accordion__button ">Button</div>
      <div class="accordion__content ">Lorem ...</div>
      */

  var buttonSelector = '.accordion__button'; // -----------------------
  // End config

  var accordionButtons = document.querySelectorAll(buttonSelector);
  accordionButtons.forEach(function (button) {
    button.addEventListener("click", function (event) {
      event.preventDefault();
      button.classList.toggle("active");
      var content = button.nextElementSibling;

      if (content.style.maxHeight) {
        content.style.maxHeight = null;
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
      }
    });
  });
})(window);

/***/ }),

/***/ "./src/js/utilities/anchors.js":
/*!*************************************!*\
  !*** ./src/js/utilities/anchors.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

;

(function (window, undefined) {
  'strict mode'; // Config
  // -----------------------

  /*  Coloca en la variable selector, la clase (con el . delante) de los elementos correspondientes de tu html ej:
       <a href="#contacto" class="anchor ">Contacto</a>
      <a href="#empresa" class="anchor ">Empresa</a>
      ...
      <section id="contacto"> ... </section>
      <section id="empresa"> ... </section>
       Puedes seleccionar la duración de la animación en milisegundos en la variable duration.
      Si necesitas un margen para headers fixed, por ejemplo, pues modificarlo en la variable margin.
      */

  var selector = '.anchor';
  var duration = 1000;
  var margin = 50; // -----------------------
  // End config

  anchorLinks = document.querySelectorAll(selector);
  anchorLinks.forEach(function (link) {
    link.addEventListener('click', function (event) {
      event.preventDefault();
      var anchor = document.querySelector(link.hash);

      if (anchor != null) {
        scrollTo(document.documentElement, anchor.offsetTop - margin, duration);
      }
    });
  }); // Important Functions ---------------------

  function scrollTo(element, to, duration) {
    var start = element.scrollTop,
        change = to - start,
        currentTime = 0,
        increment = 20;

    var animateScroll = function animateScroll() {
      currentTime += increment;
      var val = Math.easeInOutQuad(currentTime, start, change, duration);
      element.scrollTop = val;

      if (currentTime < duration) {
        setTimeout(animateScroll, increment);
      }
    };

    animateScroll();
  } // Unimportant Functions --------------------


  Math.easeInOutQuad = function (t, b, c, d) {
    t /= d / 2;

    if (t < 1) {
      return c / 2 * t * t + b;
    }

    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
  };
})(window);

/***/ }),

/***/ "./src/js/utilities/burger.js":
/*!************************************!*\
  !*** ./src/js/utilities/burger.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

;

(function (window, undefined) {
  'strict mode'; // Config
  // -----------------------

  /*  Coloca las id's (sin #) de los elementos correspondientes de tu html
       Ha estos dos elementos se les aplicará la clase "open" para el cambio de estado que puedes
      modificar con tu css.
       IMPORTANTE: Hay que aplicar el atributo data-toggle en estos dos elementos con el valor
      de la id (sin #) del elemento que se quiere modificar ej:
       buttonOpen  -> <a href="#" data-toggle="menu" id="menuOpen" class="" title="...">Abrir</a>
      buttonClose -> <a href="#" data-toggle="menu" id="menuClose" class="" title="...">Cerrar</a>
      menu        -> <div id="menu">...</div>
      */

  var buttonOpen = 'menuOpen';
  var buttonClose = 'menuClose'; // -----------------------
  // End config

  var open = document.getElementById(buttonOpen);
  var close = document.getElementById(buttonClose);
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

/***/ "./src/js/utilities/collapse.js":
/*!**************************************!*\
  !*** ./src/js/utilities/collapse.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

;

(function (window, undefined) {
  "strict mode"; // Config
  // -----------------------

  /*  Coloca en la variable selectorButton, la clase (con el . delante) de los elementos correspondientes de tu html ej:
       IMPORTANTE: Hay que aplicar el atributo data-collapse en estos dos elementos con el valor
      de la id (sin #) del elemento que se quiere mostrar/ocultar ej:
       <span class="collapse " data-collapse="element">Button</span>
      <div id="element">...</div>
       Al elemento oculto se les aplicará la clase "active" para el cambio de estado que puedes
      modificar con tu css.
      */

  var selectorButton = '.collapse'; // -----------------------
  // End config

  var buttons = document.querySelectorAll(selectorButton);
  buttons.forEach(function (button) {
    button.addEventListener("click", function (event) {
      event.preventDefault();
      var dataCollapse = button.getAttribute("data-collapse");
      document.getElementById(dataCollapse).classList.toggle("active");
    });
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
  'strict mode'; // Config
  // -----------------------

  /*  Coloca las id's (sin #) de los elementos correspondientes de tu html ej:
      <div id="cookiesMessage">...<span id="cookiesAccept" class="">Acceptar</span></div>
       Coloca las id's de los elementos que quedan solapados con las cookies en la variable disturbElements ej:
      let disturbElements = ['upButton', 'element1', '...'];
      */

  var cookiesElement = 'cookiesMessage';
  var cookiesBtn = 'cookiesAccept';
  var disturbElements = ['upButton']; // -----------------------
  // End config

  cookies = document.getElementById(cookiesElement);

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
  'strict mode'; // Config
  // -----------------------

  /*  Este script sirve para poner la clase header-fixed en el header al hacer scroll hacia abajo y así poder
      cambiar los estilos css del header.
       Para activarlo pon true en la variable active.
      */

  var active = false; // -----------------------
  // End config

  var header = document.getElementsByTagName('header');

  if (active) {
    window.addEventListener('scroll', function () {
      if (document.documentElement.scrollTop >= 1) {
        header[0].classList.add('header-fixed');
      } else {
        header[0].classList.remove('header-fixed');
      }
    });
  }
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
  "strict mode"; // Config
  // -----------------------

  /*  Coloca en la variable selector, la clase (con el . delante) de los elementos correspondientes de tu html ej:
       IMPORTANTE: Hay que aplicar el atributo data-tab en estos dos elementos con el valor
      de la id (sin #) del elemento que se quiere mostrar ej:
       <span class="tab" data-tab="tab1">Tab 1</span>
      <span class="tab" data-tab="tab2">Tab 2</span>
       Coloca en la variable selectorContent, la clase (con el . delante) de los elementos correspondientes de tu html ej:
       <div id="tab1" class="tab-content">...</div>
      <div id="tab2" class="tab-content">...</div>
       Ha estos dos elementos se les aplicará la clase "active" para el cambio de estado que puedes
      modificar con tu css.
      */

  var selectorTab = '.tab';
  var selectorContent = '.tab-content'; // -----------------------
  // End config

  var tabs = document.querySelectorAll(selectorTab);
  var tabsContent = document.querySelectorAll(selectorContent);
  tabs.forEach(function (tab) {
    tab.addEventListener("click", function (event) {
      event.preventDefault();
      var dataTab = tab.getAttribute("data-tab"); // remove tab clases active

      tabs.forEach(function (tabItem) {
        tabItem.classList.remove("active");
      }); // add class active in current tab

      tab.classList.add("active"); // remove tabcontent clases active

      tabsContent.forEach(function (content) {
        content.classList.remove("active");
      }); // add class active in current tabcontent

      document.getElementById(dataTab).classList.remove("active");
    });
  });
})(window);

/***/ }),

/***/ "./src/js/utilities/up.js":
/*!********************************!*\
  !*** ./src/js/utilities/up.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

;

(function (window, undefined) {
  'strict mode'; // Config
  // -----------------------

  /*  Coloca en la variable selector, el id (sin #) del elemento correspondientes de tu html ej:
      <span class="" id="upButton">Contacto</span>
       Puedes seleccionar la duración de la animación en milisegundos en la variable duration.
      Puedes hacer que en el top de la página, el botón desaparezca colocando un true en la variable disableOnTop.
      */

  var selector = 'upButton';
  var duration = 1000;
  var disableOnTop = true; // -----------------------
  // End config

  elem = document.getElementById(selector);

  if (disableOnTop) {
    window.addEventListener('scroll', function () {
      if (document.documentElement.scrollTop >= 100) {
        elem.classList.add('active');
      } else {
        elem.classList.remove('active');
      }
    });
  }

  elem.addEventListener('click', function (event) {
    event.preventDefault();
    scrollTo(document.documentElement, 0, duration);
  });

  function scrollTo(element, to, duration) {
    var start = element.scrollTop,
        change = to - start,
        currentTime = 0,
        increment = 20;

    var animateScroll = function animateScroll() {
      currentTime += increment;
      var val = Math.easeInOutQuad(currentTime, start, change, duration);
      element.scrollTop = val;

      if (currentTime < duration) {
        setTimeout(animateScroll, increment);
      }
    };

    animateScroll();
  }

  Math.easeInOutQuad = function (t, b, c, d) {
    t /= d / 2;

    if (t < 1) {
      return c / 2 * t * t + b;
    }

    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
  };
})(window);

/***/ }),

/***/ 0:
/*!************************************************!*\
  !*** multi ./src/js/app.js ./src/css/app.sass ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/albert/Documents/Webs/@tailwind-boilerplate/src/js/app.js */"./src/js/app.js");
module.exports = __webpack_require__(/*! /Users/albert/Documents/Webs/@tailwind-boilerplate/src/css/app.sass */"./src/css/app.sass");


/***/ })

/******/ });