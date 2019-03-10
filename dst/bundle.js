module.exports =
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
/******/ 	return __webpack_require__(__webpack_require__.s = 20);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {(function (global, factory) {
	 true ? module.exports = factory() :
	undefined;
}(this, (function () { 'use strict';

var SpriteSymbol = function SpriteSymbol(ref) {
  var id = ref.id;
  var viewBox = ref.viewBox;
  var content = ref.content;

  this.id = id;
  this.viewBox = viewBox;
  this.content = content;
};

/**
 * @return {string}
 */
SpriteSymbol.prototype.stringify = function stringify () {
  return this.content;
};

/**
 * @return {string}
 */
SpriteSymbol.prototype.toString = function toString () {
  return this.stringify();
};

SpriteSymbol.prototype.destroy = function destroy () {
    var this$1 = this;

  ['id', 'viewBox', 'content'].forEach(function (prop) { return delete this$1[prop]; });
};

/**
 * @param {string} content
 * @return {Element}
 */
var parse = function (content) {
  var hasImportNode = !!document.importNode;
  var doc = new DOMParser().parseFromString(content, 'image/svg+xml').documentElement;

  /**
   * Fix for browser which are throwing WrongDocumentError
   * if you insert an element which is not part of the document
   * @see http://stackoverflow.com/a/7986519/4624403
   */
  if (hasImportNode) {
    return document.importNode(doc, true);
  }

  return doc;
};

var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};





function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var deepmerge = createCommonjsModule(function (module, exports) {
(function (root, factory) {
    if (false) {} else {
        module.exports = factory();
    }
}(commonjsGlobal, function () {

function isMergeableObject(val) {
    var nonNullObject = val && typeof val === 'object';

    return nonNullObject
        && Object.prototype.toString.call(val) !== '[object RegExp]'
        && Object.prototype.toString.call(val) !== '[object Date]'
}

function emptyTarget(val) {
    return Array.isArray(val) ? [] : {}
}

function cloneIfNecessary(value, optionsArgument) {
    var clone = optionsArgument && optionsArgument.clone === true;
    return (clone && isMergeableObject(value)) ? deepmerge(emptyTarget(value), value, optionsArgument) : value
}

function defaultArrayMerge(target, source, optionsArgument) {
    var destination = target.slice();
    source.forEach(function(e, i) {
        if (typeof destination[i] === 'undefined') {
            destination[i] = cloneIfNecessary(e, optionsArgument);
        } else if (isMergeableObject(e)) {
            destination[i] = deepmerge(target[i], e, optionsArgument);
        } else if (target.indexOf(e) === -1) {
            destination.push(cloneIfNecessary(e, optionsArgument));
        }
    });
    return destination
}

function mergeObject(target, source, optionsArgument) {
    var destination = {};
    if (isMergeableObject(target)) {
        Object.keys(target).forEach(function (key) {
            destination[key] = cloneIfNecessary(target[key], optionsArgument);
        });
    }
    Object.keys(source).forEach(function (key) {
        if (!isMergeableObject(source[key]) || !target[key]) {
            destination[key] = cloneIfNecessary(source[key], optionsArgument);
        } else {
            destination[key] = deepmerge(target[key], source[key], optionsArgument);
        }
    });
    return destination
}

function deepmerge(target, source, optionsArgument) {
    var array = Array.isArray(source);
    var options = optionsArgument || { arrayMerge: defaultArrayMerge };
    var arrayMerge = options.arrayMerge || defaultArrayMerge;

    if (array) {
        return Array.isArray(target) ? arrayMerge(target, source, optionsArgument) : cloneIfNecessary(source, optionsArgument)
    } else {
        return mergeObject(target, source, optionsArgument)
    }
}

deepmerge.all = function deepmergeAll(array, optionsArgument) {
    if (!Array.isArray(array) || array.length < 2) {
        throw new Error('first argument should be an array with at least two elements')
    }

    // we are sure there are at least 2 values, so it is safe to have no initial value
    return array.reduce(function(prev, next) {
        return deepmerge(prev, next, optionsArgument)
    })
};

return deepmerge

}));
});

var namespaces_1 = createCommonjsModule(function (module, exports) {
var namespaces = {
  svg: {
    name: 'xmlns',
    uri: 'http://www.w3.org/2000/svg'
  },
  xlink: {
    name: 'xmlns:xlink',
    uri: 'http://www.w3.org/1999/xlink'
  }
};

exports.default = namespaces;
module.exports = exports.default;
});

/**
 * @param {Object} attrs
 * @return {string}
 */
var objectToAttrsString = function (attrs) {
  return Object.keys(attrs).map(function (attr) {
    var value = attrs[attr].toString().replace(/"/g, '&quot;');
    return (attr + "=\"" + value + "\"");
  }).join(' ');
};

var svg = namespaces_1.svg;
var xlink = namespaces_1.xlink;

var defaultAttrs = {};
defaultAttrs[svg.name] = svg.uri;
defaultAttrs[xlink.name] = xlink.uri;

/**
 * @param {string} [content]
 * @param {Object} [attributes]
 * @return {string}
 */
var wrapInSvgString = function (content, attributes) {
  if ( content === void 0 ) content = '';

  var attrs = deepmerge(defaultAttrs, attributes || {});
  var attrsRendered = objectToAttrsString(attrs);
  return ("<svg " + attrsRendered + ">" + content + "</svg>");
};

var BrowserSpriteSymbol = (function (SpriteSymbol$$1) {
  function BrowserSpriteSymbol () {
    SpriteSymbol$$1.apply(this, arguments);
  }

  if ( SpriteSymbol$$1 ) BrowserSpriteSymbol.__proto__ = SpriteSymbol$$1;
  BrowserSpriteSymbol.prototype = Object.create( SpriteSymbol$$1 && SpriteSymbol$$1.prototype );
  BrowserSpriteSymbol.prototype.constructor = BrowserSpriteSymbol;

  var prototypeAccessors = { isMounted: {} };

  prototypeAccessors.isMounted.get = function () {
    return !!this.node;
  };

  /**
   * @param {Element} node
   * @return {BrowserSpriteSymbol}
   */
  BrowserSpriteSymbol.createFromExistingNode = function createFromExistingNode (node) {
    return new BrowserSpriteSymbol({
      id: node.getAttribute('id'),
      viewBox: node.getAttribute('viewBox'),
      content: node.outerHTML
    });
  };

  BrowserSpriteSymbol.prototype.destroy = function destroy () {
    if (this.isMounted) {
      this.unmount();
    }
    SpriteSymbol$$1.prototype.destroy.call(this);
  };

  /**
   * @param {Element|string} target
   * @return {Element}
   */
  BrowserSpriteSymbol.prototype.mount = function mount (target) {
    if (this.isMounted) {
      return this.node;
    }

    var mountTarget = typeof target === 'string' ? document.querySelector(target) : target;
    var node = this.render();
    this.node = node;

    mountTarget.appendChild(node);

    return node;
  };

  /**
   * @return {Element}
   */
  BrowserSpriteSymbol.prototype.render = function render () {
    var content = this.stringify();
    return parse(wrapInSvgString(content)).childNodes[0];
  };

  BrowserSpriteSymbol.prototype.unmount = function unmount () {
    this.node.parentNode.removeChild(this.node);
  };

  Object.defineProperties( BrowserSpriteSymbol.prototype, prototypeAccessors );

  return BrowserSpriteSymbol;
}(SpriteSymbol));

return BrowserSpriteSymbol;

})));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(7)))

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {(function (global, factory) {
	 true ? module.exports = factory() :
	undefined;
}(this, (function () { 'use strict';

var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};





function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var deepmerge = createCommonjsModule(function (module, exports) {
(function (root, factory) {
    if (false) {} else {
        module.exports = factory();
    }
}(commonjsGlobal, function () {

function isMergeableObject(val) {
    var nonNullObject = val && typeof val === 'object';

    return nonNullObject
        && Object.prototype.toString.call(val) !== '[object RegExp]'
        && Object.prototype.toString.call(val) !== '[object Date]'
}

function emptyTarget(val) {
    return Array.isArray(val) ? [] : {}
}

function cloneIfNecessary(value, optionsArgument) {
    var clone = optionsArgument && optionsArgument.clone === true;
    return (clone && isMergeableObject(value)) ? deepmerge(emptyTarget(value), value, optionsArgument) : value
}

function defaultArrayMerge(target, source, optionsArgument) {
    var destination = target.slice();
    source.forEach(function(e, i) {
        if (typeof destination[i] === 'undefined') {
            destination[i] = cloneIfNecessary(e, optionsArgument);
        } else if (isMergeableObject(e)) {
            destination[i] = deepmerge(target[i], e, optionsArgument);
        } else if (target.indexOf(e) === -1) {
            destination.push(cloneIfNecessary(e, optionsArgument));
        }
    });
    return destination
}

function mergeObject(target, source, optionsArgument) {
    var destination = {};
    if (isMergeableObject(target)) {
        Object.keys(target).forEach(function (key) {
            destination[key] = cloneIfNecessary(target[key], optionsArgument);
        });
    }
    Object.keys(source).forEach(function (key) {
        if (!isMergeableObject(source[key]) || !target[key]) {
            destination[key] = cloneIfNecessary(source[key], optionsArgument);
        } else {
            destination[key] = deepmerge(target[key], source[key], optionsArgument);
        }
    });
    return destination
}

function deepmerge(target, source, optionsArgument) {
    var array = Array.isArray(source);
    var options = optionsArgument || { arrayMerge: defaultArrayMerge };
    var arrayMerge = options.arrayMerge || defaultArrayMerge;

    if (array) {
        return Array.isArray(target) ? arrayMerge(target, source, optionsArgument) : cloneIfNecessary(source, optionsArgument)
    } else {
        return mergeObject(target, source, optionsArgument)
    }
}

deepmerge.all = function deepmergeAll(array, optionsArgument) {
    if (!Array.isArray(array) || array.length < 2) {
        throw new Error('first argument should be an array with at least two elements')
    }

    // we are sure there are at least 2 values, so it is safe to have no initial value
    return array.reduce(function(prev, next) {
        return deepmerge(prev, next, optionsArgument)
    })
};

return deepmerge

}));
});

//      
// An event handler can take an optional event argument
// and should not return a value
                                          
// An array of all currently registered event handlers for a type
                                            
// A map of event types and their corresponding event handlers.
                        
                                   
  

/** Mitt: Tiny (~200b) functional event emitter / pubsub.
 *  @name mitt
 *  @returns {Mitt}
 */
function mitt(all                 ) {
	all = all || Object.create(null);

	return {
		/**
		 * Register an event handler for the given type.
		 *
		 * @param  {String} type	Type of event to listen for, or `"*"` for all events
		 * @param  {Function} handler Function to call in response to given event
		 * @memberOf mitt
		 */
		on: function on(type        , handler              ) {
			(all[type] || (all[type] = [])).push(handler);
		},

		/**
		 * Remove an event handler for the given type.
		 *
		 * @param  {String} type	Type of event to unregister `handler` from, or `"*"`
		 * @param  {Function} handler Handler function to remove
		 * @memberOf mitt
		 */
		off: function off(type        , handler              ) {
			if (all[type]) {
				all[type].splice(all[type].indexOf(handler) >>> 0, 1);
			}
		},

		/**
		 * Invoke all handlers for the given type.
		 * If present, `"*"` handlers are invoked after type-matched handlers.
		 *
		 * @param {String} type  The event type to invoke
		 * @param {Any} [evt]  Any value (object is recommended and powerful), passed to each handler
		 * @memberof mitt
		 */
		emit: function emit(type        , evt     ) {
			(all[type] || []).map(function (handler) { handler(evt); });
			(all['*'] || []).map(function (handler) { handler(type, evt); });
		}
	};
}

var namespaces_1 = createCommonjsModule(function (module, exports) {
var namespaces = {
  svg: {
    name: 'xmlns',
    uri: 'http://www.w3.org/2000/svg'
  },
  xlink: {
    name: 'xmlns:xlink',
    uri: 'http://www.w3.org/1999/xlink'
  }
};

exports.default = namespaces;
module.exports = exports.default;
});

/**
 * @param {Object} attrs
 * @return {string}
 */
var objectToAttrsString = function (attrs) {
  return Object.keys(attrs).map(function (attr) {
    var value = attrs[attr].toString().replace(/"/g, '&quot;');
    return (attr + "=\"" + value + "\"");
  }).join(' ');
};

var svg = namespaces_1.svg;
var xlink = namespaces_1.xlink;

var defaultAttrs = {};
defaultAttrs[svg.name] = svg.uri;
defaultAttrs[xlink.name] = xlink.uri;

/**
 * @param {string} [content]
 * @param {Object} [attributes]
 * @return {string}
 */
var wrapInSvgString = function (content, attributes) {
  if ( content === void 0 ) content = '';

  var attrs = deepmerge(defaultAttrs, attributes || {});
  var attrsRendered = objectToAttrsString(attrs);
  return ("<svg " + attrsRendered + ">" + content + "</svg>");
};

var svg$1 = namespaces_1.svg;
var xlink$1 = namespaces_1.xlink;

var defaultConfig = {
  attrs: ( obj = {
    style: ['position: absolute', 'width: 0', 'height: 0'].join('; ')
  }, obj[svg$1.name] = svg$1.uri, obj[xlink$1.name] = xlink$1.uri, obj )
};
var obj;

var Sprite = function Sprite(config) {
  this.config = deepmerge(defaultConfig, config || {});
  this.symbols = [];
};

/**
 * Add new symbol. If symbol with the same id exists it will be replaced.
 * @param {SpriteSymbol} symbol
 * @return {boolean} `true` - symbol was added, `false` - replaced
 */
Sprite.prototype.add = function add (symbol) {
  var ref = this;
    var symbols = ref.symbols;
  var existing = this.find(symbol.id);

  if (existing) {
    symbols[symbols.indexOf(existing)] = symbol;
    return false;
  }

  symbols.push(symbol);
  return true;
};

/**
 * Remove symbol & destroy it
 * @param {string} id
 * @return {boolean} `true` - symbol was found & successfully destroyed, `false` - otherwise
 */
Sprite.prototype.remove = function remove (id) {
  var ref = this;
    var symbols = ref.symbols;
  var symbol = this.find(id);

  if (symbol) {
    symbols.splice(symbols.indexOf(symbol), 1);
    symbol.destroy();
    return true;
  }

  return false;
};

/**
 * @param {string} id
 * @return {SpriteSymbol|null}
 */
Sprite.prototype.find = function find (id) {
  return this.symbols.filter(function (s) { return s.id === id; })[0] || null;
};

/**
 * @param {string} id
 * @return {boolean}
 */
Sprite.prototype.has = function has (id) {
  return this.find(id) !== null;
};

/**
 * @return {string}
 */
Sprite.prototype.stringify = function stringify () {
  var ref = this.config;
    var attrs = ref.attrs;
  var stringifiedSymbols = this.symbols.map(function (s) { return s.stringify(); }).join('');
  return wrapInSvgString(stringifiedSymbols, attrs);
};

/**
 * @return {string}
 */
Sprite.prototype.toString = function toString () {
  return this.stringify();
};

Sprite.prototype.destroy = function destroy () {
  this.symbols.forEach(function (s) { return s.destroy(); });
};

var SpriteSymbol = function SpriteSymbol(ref) {
  var id = ref.id;
  var viewBox = ref.viewBox;
  var content = ref.content;

  this.id = id;
  this.viewBox = viewBox;
  this.content = content;
};

/**
 * @return {string}
 */
SpriteSymbol.prototype.stringify = function stringify () {
  return this.content;
};

/**
 * @return {string}
 */
SpriteSymbol.prototype.toString = function toString () {
  return this.stringify();
};

SpriteSymbol.prototype.destroy = function destroy () {
    var this$1 = this;

  ['id', 'viewBox', 'content'].forEach(function (prop) { return delete this$1[prop]; });
};

/**
 * @param {string} content
 * @return {Element}
 */
var parse = function (content) {
  var hasImportNode = !!document.importNode;
  var doc = new DOMParser().parseFromString(content, 'image/svg+xml').documentElement;

  /**
   * Fix for browser which are throwing WrongDocumentError
   * if you insert an element which is not part of the document
   * @see http://stackoverflow.com/a/7986519/4624403
   */
  if (hasImportNode) {
    return document.importNode(doc, true);
  }

  return doc;
};

var BrowserSpriteSymbol = (function (SpriteSymbol$$1) {
  function BrowserSpriteSymbol () {
    SpriteSymbol$$1.apply(this, arguments);
  }

  if ( SpriteSymbol$$1 ) BrowserSpriteSymbol.__proto__ = SpriteSymbol$$1;
  BrowserSpriteSymbol.prototype = Object.create( SpriteSymbol$$1 && SpriteSymbol$$1.prototype );
  BrowserSpriteSymbol.prototype.constructor = BrowserSpriteSymbol;

  var prototypeAccessors = { isMounted: {} };

  prototypeAccessors.isMounted.get = function () {
    return !!this.node;
  };

  /**
   * @param {Element} node
   * @return {BrowserSpriteSymbol}
   */
  BrowserSpriteSymbol.createFromExistingNode = function createFromExistingNode (node) {
    return new BrowserSpriteSymbol({
      id: node.getAttribute('id'),
      viewBox: node.getAttribute('viewBox'),
      content: node.outerHTML
    });
  };

  BrowserSpriteSymbol.prototype.destroy = function destroy () {
    if (this.isMounted) {
      this.unmount();
    }
    SpriteSymbol$$1.prototype.destroy.call(this);
  };

  /**
   * @param {Element|string} target
   * @return {Element}
   */
  BrowserSpriteSymbol.prototype.mount = function mount (target) {
    if (this.isMounted) {
      return this.node;
    }

    var mountTarget = typeof target === 'string' ? document.querySelector(target) : target;
    var node = this.render();
    this.node = node;

    mountTarget.appendChild(node);

    return node;
  };

  /**
   * @return {Element}
   */
  BrowserSpriteSymbol.prototype.render = function render () {
    var content = this.stringify();
    return parse(wrapInSvgString(content)).childNodes[0];
  };

  BrowserSpriteSymbol.prototype.unmount = function unmount () {
    this.node.parentNode.removeChild(this.node);
  };

  Object.defineProperties( BrowserSpriteSymbol.prototype, prototypeAccessors );

  return BrowserSpriteSymbol;
}(SpriteSymbol));

var defaultConfig$1 = {
  /**
   * Should following options be automatically configured:
   * - `syncUrlsWithBaseTag`
   * - `locationChangeAngularEmitter`
   * - `moveGradientsOutsideSymbol`
   * @type {boolean}
   */
  autoConfigure: true,

  /**
   * Default mounting selector
   * @type {string}
   */
  mountTo: 'body',

  /**
   * Fix disappearing SVG elements when <base href> exists.
   * Executes when sprite mounted.
   * @see http://stackoverflow.com/a/18265336/796152
   * @see https://github.com/everdimension/angular-svg-base-fix
   * @see https://github.com/angular/angular.js/issues/8934#issuecomment-56568466
   * @type {boolean}
   */
  syncUrlsWithBaseTag: false,

  /**
   * Should sprite listen custom location change event
   * @type {boolean}
   */
  listenLocationChangeEvent: true,

  /**
   * Custom window event name which should be emitted to update sprite urls
   * @type {string}
   */
  locationChangeEvent: 'locationChange',

  /**
   * Emit location change event in Angular automatically
   * @type {boolean}
   */
  locationChangeAngularEmitter: false,

  /**
   * Selector to find symbols usages when updating sprite urls
   * @type {string}
   */
  usagesToUpdate: 'use[*|href]',

  /**
   * Fix Firefox bug when gradients and patterns don't work if they are within a symbol.
   * Executes when sprite is rendered, but not mounted.
   * @see https://bugzilla.mozilla.org/show_bug.cgi?id=306674
   * @see https://bugzilla.mozilla.org/show_bug.cgi?id=353575
   * @see https://bugzilla.mozilla.org/show_bug.cgi?id=1235364
   * @type {boolean}
   */
  moveGradientsOutsideSymbol: false
};

/**
 * @param {*} arrayLike
 * @return {Array}
 */
var arrayFrom = function (arrayLike) {
  return Array.prototype.slice.call(arrayLike, 0);
};

var ua = navigator.userAgent;

var browser = {
  isChrome: /chrome/i.test(ua),
  isFirefox: /firefox/i.test(ua),

  // https://msdn.microsoft.com/en-us/library/ms537503(v=vs.85).aspx
  isIE: /msie/i.test(ua) || /trident/i.test(ua),
  isEdge: /edge/i.test(ua)
};

/**
 * @param {string} name
 * @param {*} data
 */
var dispatchEvent = function (name, data) {
  var event = document.createEvent('CustomEvent');
  event.initCustomEvent(name, false, false, data);
  window.dispatchEvent(event);
};

/**
 * IE doesn't evaluate <style> tags in SVGs that are dynamically added to the page.
 * This trick will trigger IE to read and use any existing SVG <style> tags.
 * @see https://github.com/iconic/SVGInjector/issues/23
 * @see https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/10898469/
 *
 * @param {Element} node DOM Element to search <style> tags in
 * @return {Array<HTMLStyleElement>}
 */
var evalStylesIEWorkaround = function (node) {
  var updatedNodes = [];

  arrayFrom(node.querySelectorAll('style'))
    .forEach(function (style) {
      style.textContent += '';
      updatedNodes.push(style);
    });

  return updatedNodes;
};

/**
 * @param {string} [url] If not provided - current URL will be used
 * @return {string}
 */
var getUrlWithoutFragment = function (url) {
  return (url || window.location.href).split('#')[0];
};

/* global angular */
/**
 * @param {string} eventName
 */
var locationChangeAngularEmitter = function (eventName) {
  angular.module('ng').run(['$rootScope', function ($rootScope) {
    $rootScope.$on('$locationChangeSuccess', function (e, newUrl, oldUrl) {
      dispatchEvent(eventName, { oldUrl: oldUrl, newUrl: newUrl });
    });
  }]);
};

var defaultSelector = 'linearGradient, radialGradient, pattern';

/**
 * @param {Element} svg
 * @param {string} [selector]
 * @return {Element}
 */
var moveGradientsOutsideSymbol = function (svg, selector) {
  if ( selector === void 0 ) selector = defaultSelector;

  arrayFrom(svg.querySelectorAll('symbol')).forEach(function (symbol) {
    arrayFrom(symbol.querySelectorAll(selector)).forEach(function (node) {
      symbol.parentNode.insertBefore(node, symbol);
    });
  });
  return svg;
};

/**
 * @param {NodeList} nodes
 * @param {Function} [matcher]
 * @return {Attr[]}
 */
function selectAttributes(nodes, matcher) {
  var attrs = arrayFrom(nodes).reduce(function (acc, node) {
    if (!node.attributes) {
      return acc;
    }

    var arrayfied = arrayFrom(node.attributes);
    var matched = matcher ? arrayfied.filter(matcher) : arrayfied;
    return acc.concat(matched);
  }, []);

  return attrs;
}

/**
 * @param {NodeList|Node} nodes
 * @param {boolean} [clone=true]
 * @return {string}
 */

var xLinkNS = namespaces_1.xlink.uri;
var xLinkAttrName = 'xlink:href';

// eslint-disable-next-line no-useless-escape
var specialUrlCharsPattern = /[{}|\\\^\[\]`"<>]/g;

function encoder(url) {
  return url.replace(specialUrlCharsPattern, function (match) {
    return ("%" + (match[0].charCodeAt(0).toString(16).toUpperCase()));
  });
}

/**
 * @param {NodeList} nodes
 * @param {string} startsWith
 * @param {string} replaceWith
 * @return {NodeList}
 */
function updateReferences(nodes, startsWith, replaceWith) {
  arrayFrom(nodes).forEach(function (node) {
    var href = node.getAttribute(xLinkAttrName);
    if (href && href.indexOf(startsWith) === 0) {
      var newUrl = href.replace(startsWith, replaceWith);
      node.setAttributeNS(xLinkNS, xLinkAttrName, newUrl);
    }
  });

  return nodes;
}

/**
 * List of SVG attributes to update url() target in them
 */
var attList = [
  'clipPath',
  'colorProfile',
  'src',
  'cursor',
  'fill',
  'filter',
  'marker',
  'markerStart',
  'markerMid',
  'markerEnd',
  'mask',
  'stroke',
  'style'
];

var attSelector = attList.map(function (attr) { return ("[" + attr + "]"); }).join(',');

/**
 * Update URLs in svg image (like `fill="url(...)"`) and update referencing elements
 * @param {Element} svg
 * @param {NodeList} references
 * @param {string|RegExp} startsWith
 * @param {string} replaceWith
 * @return {void}
 *
 * @example
 * const sprite = document.querySelector('svg.sprite');
 * const usages = document.querySelectorAll('use');
 * updateUrls(sprite, usages, '#', 'prefix#');
 */
var updateUrls = function (svg, references, startsWith, replaceWith) {
  var startsWithEncoded = encoder(startsWith);
  var replaceWithEncoded = encoder(replaceWith);

  var nodes = svg.querySelectorAll(attSelector);
  var attrs = selectAttributes(nodes, function (ref) {
    var localName = ref.localName;
    var value = ref.value;

    return attList.indexOf(localName) !== -1 && value.indexOf(("url(" + startsWithEncoded)) !== -1;
  });

  attrs.forEach(function (attr) { return attr.value = attr.value.replace(startsWithEncoded, replaceWithEncoded); });
  updateReferences(references, startsWithEncoded, replaceWithEncoded);
};

/**
 * Internal emitter events
 * @enum
 * @private
 */
var Events = {
  MOUNT: 'mount',
  SYMBOL_MOUNT: 'symbol_mount'
};

var BrowserSprite = (function (Sprite$$1) {
  function BrowserSprite(cfg) {
    var this$1 = this;
    if ( cfg === void 0 ) cfg = {};

    Sprite$$1.call(this, deepmerge(defaultConfig$1, cfg));

    var emitter = mitt();
    this._emitter = emitter;
    this.node = null;

    var ref = this;
    var config = ref.config;

    if (config.autoConfigure) {
      this._autoConfigure(cfg);
    }

    if (config.syncUrlsWithBaseTag) {
      var baseUrl = document.getElementsByTagName('base')[0].getAttribute('href');
      emitter.on(Events.MOUNT, function () { return this$1.updateUrls('#', baseUrl); });
    }

    var handleLocationChange = this._handleLocationChange.bind(this);
    this._handleLocationChange = handleLocationChange;

    // Provide way to update sprite urls externally via dispatching custom window event
    if (config.listenLocationChangeEvent) {
      window.addEventListener(config.locationChangeEvent, handleLocationChange);
    }

    // Emit location change event in Angular automatically
    if (config.locationChangeAngularEmitter) {
      locationChangeAngularEmitter(config.locationChangeEvent);
    }

    // After sprite mounted
    emitter.on(Events.MOUNT, function (spriteNode) {
      if (config.moveGradientsOutsideSymbol) {
        moveGradientsOutsideSymbol(spriteNode);
      }
    });

    // After symbol mounted into sprite
    emitter.on(Events.SYMBOL_MOUNT, function (symbolNode) {
      if (config.moveGradientsOutsideSymbol) {
        moveGradientsOutsideSymbol(symbolNode.parentNode);
      }

      if (browser.isIE || browser.isEdge) {
        evalStylesIEWorkaround(symbolNode);
      }
    });
  }

  if ( Sprite$$1 ) BrowserSprite.__proto__ = Sprite$$1;
  BrowserSprite.prototype = Object.create( Sprite$$1 && Sprite$$1.prototype );
  BrowserSprite.prototype.constructor = BrowserSprite;

  var prototypeAccessors = { isMounted: {} };

  /**
   * @return {boolean}
   */
  prototypeAccessors.isMounted.get = function () {
    return !!this.node;
  };

  /**
   * Automatically configure following options
   * - `syncUrlsWithBaseTag`
   * - `locationChangeAngularEmitter`
   * - `moveGradientsOutsideSymbol`
   * @param {Object} cfg
   * @private
   */
  BrowserSprite.prototype._autoConfigure = function _autoConfigure (cfg) {
    var ref = this;
    var config = ref.config;

    if (typeof cfg.syncUrlsWithBaseTag === 'undefined') {
      config.syncUrlsWithBaseTag = typeof document.getElementsByTagName('base')[0] !== 'undefined';
    }

    if (typeof cfg.locationChangeAngularEmitter === 'undefined') {
      config.locationChangeAngularEmitter = 'angular' in window;
    }

    if (typeof cfg.moveGradientsOutsideSymbol === 'undefined') {
      config.moveGradientsOutsideSymbol = browser.isFirefox;
    }
  };

  /**
   * @param {Event} event
   * @param {Object} event.detail
   * @param {string} event.detail.oldUrl
   * @param {string} event.detail.newUrl
   * @private
   */
  BrowserSprite.prototype._handleLocationChange = function _handleLocationChange (event) {
    var ref = event.detail;
    var oldUrl = ref.oldUrl;
    var newUrl = ref.newUrl;
    this.updateUrls(oldUrl, newUrl);
  };

  /**
   * Add new symbol. If symbol with the same id exists it will be replaced.
   * If sprite already mounted - `symbol.mount(sprite.node)` will be called.
   * @fires Events#SYMBOL_MOUNT
   * @param {BrowserSpriteSymbol} symbol
   * @return {boolean} `true` - symbol was added, `false` - replaced
   */
  BrowserSprite.prototype.add = function add (symbol) {
    var sprite = this;
    var isNewSymbol = Sprite$$1.prototype.add.call(this, symbol);

    if (this.isMounted && isNewSymbol) {
      symbol.mount(sprite.node);
      this._emitter.emit(Events.SYMBOL_MOUNT, symbol.node);
    }

    return isNewSymbol;
  };

  /**
   * Attach to existing DOM node
   * @param {string|Element} target
   * @return {Element|null} attached DOM Element. null if node to attach not found.
   */
  BrowserSprite.prototype.attach = function attach (target) {
    var this$1 = this;

    var sprite = this;

    if (sprite.isMounted) {
      return sprite.node;
    }

    /** @type Element */
    var node = typeof target === 'string' ? document.querySelector(target) : target;
    sprite.node = node;

    // Already added symbols needs to be mounted
    this.symbols.forEach(function (symbol) {
      symbol.mount(sprite.node);
      this$1._emitter.emit(Events.SYMBOL_MOUNT, symbol.node);
    });

    // Create symbols from existing DOM nodes, add and mount them
    arrayFrom(node.querySelectorAll('symbol'))
      .forEach(function (symbolNode) {
        var symbol = BrowserSpriteSymbol.createFromExistingNode(symbolNode);
        symbol.node = symbolNode; // hack to prevent symbol mounting to sprite when adding
        sprite.add(symbol);
      });

    this._emitter.emit(Events.MOUNT, node);

    return node;
  };

  BrowserSprite.prototype.destroy = function destroy () {
    var ref = this;
    var config = ref.config;
    var symbols = ref.symbols;
    var _emitter = ref._emitter;

    symbols.forEach(function (s) { return s.destroy(); });

    _emitter.off('*');
    window.removeEventListener(config.locationChangeEvent, this._handleLocationChange);

    if (this.isMounted) {
      this.unmount();
    }
  };

  /**
   * @fires Events#MOUNT
   * @param {string|Element} [target]
   * @param {boolean} [prepend=false]
   * @return {Element|null} rendered sprite node. null if mount node not found.
   */
  BrowserSprite.prototype.mount = function mount (target, prepend) {
    if ( target === void 0 ) target = this.config.mountTo;
    if ( prepend === void 0 ) prepend = false;

    var sprite = this;

    if (sprite.isMounted) {
      return sprite.node;
    }

    var mountNode = typeof target === 'string' ? document.querySelector(target) : target;
    var node = sprite.render();
    this.node = node;

    if (prepend && mountNode.childNodes[0]) {
      mountNode.insertBefore(node, mountNode.childNodes[0]);
    } else {
      mountNode.appendChild(node);
    }

    this._emitter.emit(Events.MOUNT, node);

    return node;
  };

  /**
   * @return {Element}
   */
  BrowserSprite.prototype.render = function render () {
    return parse(this.stringify());
  };

  /**
   * Detach sprite from the DOM
   */
  BrowserSprite.prototype.unmount = function unmount () {
    this.node.parentNode.removeChild(this.node);
  };

  /**
   * Update URLs in sprite and usage elements
   * @param {string} oldUrl
   * @param {string} newUrl
   * @return {boolean} `true` - URLs was updated, `false` - sprite is not mounted
   */
  BrowserSprite.prototype.updateUrls = function updateUrls$1 (oldUrl, newUrl) {
    if (!this.isMounted) {
      return false;
    }

    var usages = document.querySelectorAll(this.config.usagesToUpdate);

    updateUrls(
      this.node,
      usages,
      ((getUrlWithoutFragment(oldUrl)) + "#"),
      ((getUrlWithoutFragment(newUrl)) + "#")
    );

    return true;
  };

  Object.defineProperties( BrowserSprite.prototype, prototypeAccessors );

  return BrowserSprite;
}(Sprite));

var ready$1 = createCommonjsModule(function (module) {
/*!
  * domready (c) Dustin Diaz 2014 - License MIT
  */
!function (name, definition) {

  { module.exports = definition(); }

}('domready', function () {

  var fns = [], listener
    , doc = document
    , hack = doc.documentElement.doScroll
    , domContentLoaded = 'DOMContentLoaded'
    , loaded = (hack ? /^loaded|^c/ : /^loaded|^i|^c/).test(doc.readyState);


  if (!loaded)
  { doc.addEventListener(domContentLoaded, listener = function () {
    doc.removeEventListener(domContentLoaded, listener);
    loaded = 1;
    while (listener = fns.shift()) { listener(); }
  }); }

  return function (fn) {
    loaded ? setTimeout(fn, 0) : fns.push(fn);
  }

});
});

var spriteNodeId = '__SVG_SPRITE_NODE__';
var spriteGlobalVarName = '__SVG_SPRITE__';
var isSpriteExists = !!window[spriteGlobalVarName];

// eslint-disable-next-line import/no-mutable-exports
var sprite;

if (isSpriteExists) {
  sprite = window[spriteGlobalVarName];
} else {
  sprite = new BrowserSprite({ attrs: { id: spriteNodeId } });
  window[spriteGlobalVarName] = sprite;
}

var loadSprite = function () {
  /**
   * Check for page already contains sprite node
   * If found - attach to and reuse it's content
   * If not - render and mount the new sprite
   */
  var existing = document.getElementById(spriteNodeId);

  if (existing) {
    sprite.attach(existing);
  } else {
    sprite.mount(document.body, true);
  }
};

if (document.body) {
  loadSprite();
} else {
  ready$1(loadSprite);
}

var sprite$1 = sprite;

return sprite$1;

})));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(7)))

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg) && arg.length) {
				var inner = classNames.apply(null, arg);
				if (inner) {
					classes.push(inner);
				}
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("react-intl");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return '@media ' + item[2] + '{' + content + '}';
      } else {
        return content;
      }
    }).join('');
  }; // import a list of modules into the list


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (i = 0; i < modules.length; i++) {
      var item = modules[i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || '';
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
  return '/*# ' + data + ' */';
}

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(11);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 7 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(10);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(6)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(false);
// Module
exports.push([module.i, "\nuse {\n    fill: currentColor;\n    stroke: currentColor;\n}\n", ""]);



/***/ }),
/* 11 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(13);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(6)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(false);
// Module
exports.push([module.i, "\n.configurator-radio-buttons {\n    margin: 0;\n    padding: 0;\n    list-style: none;\n    display: flex;\n    user-select: none;\n    box-sizing: content-box;\n}\n\n.configurator-radio-buttons-item {\n    position: relative;\n    overflow: hidden;\n    padding: 6px 12px;\n    margin-left: -1px;\n    font-size: 18px;\n    background-color: var(--white);\n    border: 1px solid var(--gray);\n    color: #333;\n    cursor: pointer;\n}\n\n.configurator-radio-buttons-item:first-child {\n    border-radius: 4px 0 0 4px;\n}\n\n.configurator-radio-buttons-item:last-child {\n    border-radius: 0 4px 4px 0;\n}\n\n.configurator-radio-buttons-item:hover,\n.configurator-radio-buttons-item.active {\n    background-color: var(--gray-light);\n    border-color: var(--gray-dark);\n}\n\n.configurator-radio-buttons-item.active {\n    box-shadow: inset 0 3px 5px rgba(0, 0, 0, .125);\n}\n\n.configurator-radio-buttons-item.disabled {\n    color: var(--gray);\n    background-color: var(--white);\n    border-color: var(--gray);\n    box-shadow: none;\n    cursor: default;\n}\n\n.configurator-radio-buttons-item.no-text {\n    font-size: 0;\n    padding: 6px 15px;\n    display: flex;\n    align-items: center;\n}\n\n.configurator-radio-buttons-icon {\n    width: 25px;\n    height: 25px;\n}\n\n.configurator-radio-buttons-blocker {\n    position: absolute;\n    left: 0;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    z-index: 10;\n}\n", ""]);



/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(15);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(6)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(false);
// Module
exports.push([module.i, "\n.configurator-font-selector-container {\n    margin-right: 20px;\n    user-select: none;\n}\n\n.configurator-font-selector {\n    display: inline-block;\n    background-color: var(--white);\n    border: 1px solid var(--gray);\n    border-radius: 4px;\n    color: #333;\n    font-size: 0;\n    cursor: pointer;\n}\n\n.configurator-font-selector:hover {\n    background-color: var(--gray-light);\n}\n\n.configurator-font-selector-current-font {\n    width: 100px;\n    height: 50px;\n    vertical-align: middle;\n}\n\n\n.configurator-font-selector-icon-container {\n    position: relative;\n    display: inline-block;\n    vertical-align: middle;\n}\n\n.configurator-font-selector:active .configurator-font-selector-icon-container {\n    top: 1px;\n}\n\n.configurator-font-selector-icon {\n    width: 30px;\n    height: 30px;\n    margin-right: 5px;\n}\n\n.configurator-font-selector-blocker {\n    position: fixed;\n    left: 0;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    background-color: rgba(0, 0, 0, .2);\n    z-index: 1000;\n}\n\n.configurator-font-selector-tooltip {\n    position: absolute;\n    width: 300px;\n    overflow: auto;\n    background-color: var(--white);\n    text-align: center;\n    z-index: 99999;\n}\n\n.configurator-font-selector-tooltip-icon {\n    width: 200px;\n    height: 50px;\n}\n\n.configurator-font-selector-item {\n    cursor: pointer;\n}\n\n.configurator-font-selector-item:hover,\n.configurator-font-selector-item.active {\n    background-color: var(--gray-light);\n}\n", ""]);



/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(17);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(6)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(false);
// Module
exports.push([module.i, "\n.configurator-color-selector {\n    width: 225px;\n    background: #FFF;\n    border: 1px solid rgba(0, 0, 0, 0.2);\n    box-shadow: rgba(0, 0, 0, 0.15) 0 3px 12px;\n    border-radius: 4px;\n    box-sizing: content-box;\n    position: relative;\n    padding: 5px;\n    display: flex;\n    flex-wrap: wrap;\n}\n\n.configurator-color-selector-item {\n    width: 25px;\n    height: 25px;\n    cursor: pointer;\n}\n\n.configurator-color-selector-item-wrap:hover,\n.configurator-color-selector-item.active {\n    position: relative;\n    outline: 2px solid #FFF;\n    box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.25);\n    z-index: 2;\n}\n", ""]);



/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(19);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(6)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(false);
// Module
exports.push([module.i, ":root {\n    --white: #FFF;\n    --gray: #CCC;\n    --gray-light: #E6E6E6;\n    --gray-dark: #ADADAD;\n    --blue: #1A5888;\n}\n\n.configurator-container {\n    margin-bottom: 20px;\n}\n\n.configurator-subtitle {\n    font-size: 20px;\n    margin: 20px 0 10px;\n    font-weight: 700;\n    color: #555;\n}\n\n.configurator-text-container {\n    display: inline-block;\n}\n\n.configurator-textarea {\n    width: 100%;\n    height: 100px;\n    max-height: 200px;\n    max-width: 600px;\n    min-width: 500px;\n    min-height: 50px;\n    padding: 2px 5px;\n    box-sizing: border-box;\n    border: 1px solid var(--gray);\n    font-size: 16px;\n}\n\n.configurator-input {\n    width: 100%;\n    height: 40px;\n    padding: 2px 5px;\n    margin-bottom: 5px;\n    box-sizing: border-box;\n    border: 1px solid var(--gray);\n    font-size: 16px;\n}\n\n.configurator-text-container-footer {\n    display: flex;\n    justify-content: space-between;\n}\n\n.configurator-text-vertical-align {\n    margin-left: 20px;\n}\n\n.configurator-submit {\n    margin-top: 20px;\n    height: 80px;\n    padding: 0 40px;\n    background-color: var(--blue);\n    color: var(--white);\n    border-radius: 20px;\n    font-size: 24px;\n    font-weight: bold;\n    cursor: pointer;\n    text-transform: uppercase;\n    -webkit-tap-highlight-color: transparent;\n    user-select: none;\n    outline: none!important;\n}\n", ""]);



/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(3);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);

// EXTERNAL MODULE: external "react-intl"
var external_react_intl_ = __webpack_require__(4);

// EXTERNAL MODULE: ./node_modules/svg-baker-runtime/browser-symbol.js
var browser_symbol = __webpack_require__(1);
var browser_symbol_default = /*#__PURE__*/__webpack_require__.n(browser_symbol);

// EXTERNAL MODULE: ./node_modules/svg-sprite-loader/runtime/browser-sprite.build.js
var browser_sprite_build = __webpack_require__(2);
var browser_sprite_build_default = /*#__PURE__*/__webpack_require__.n(browser_sprite_build);

// CONCATENATED MODULE: ./src/icons/lobster.svg


var symbol = new browser_symbol_default.a({
  "id": "lobster",
  "use": "lobster-usage",
  "viewBox": "0 0 566.93 141.73",
  "content": "<symbol xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 566.93 141.73\" id=\"lobster\">\n  <path d=\"M61.877 24.097c-5.401 2.225-9.59 5.55-12.569 9.978-2.978 4.429-4.467 9.958-4.467 16.589 0 1.548.089 2.81.268 3.783.179.974.367 1.757.566 2.353.198.596.387 1.053.566 1.37.179.318.268.596.268.834-2.105 0-3.972-.208-5.6-.625-1.629-.417-2.988-1.092-4.08-2.025-1.093-.933-1.927-2.153-2.502-3.664-.576-1.508-.864-3.354-.864-5.539 0-2.7.585-5.361 1.757-7.982 1.171-2.621 2.779-5.103 4.825-7.446 2.045-2.342 4.447-4.517 7.208-6.522a51.973 51.973 0 0 1 8.875-5.183 52.864 52.864 0 0 1 9.888-3.395 44.471 44.471 0 0 1 10.275-1.221c.913 0 1.757.03 2.531.089.774.06 1.558.129 2.353.208l-18.764 87.564c2.104.477 4.219 1.202 6.344 2.175 2.124.972 4.279 2.044 6.463 3.216 2.184 1.171 4.397 2.362 6.642 3.574a90.87 90.87 0 0 0 6.85 3.336 48.325 48.325 0 0 0 7.148 2.472c2.442.635 4.953.953 7.535.953 1.668 0 3.345-.14 5.034-.417 1.687-.278 3.425-.795 5.212-1.549-.357 2.938-.904 5.59-1.638 7.953-.735 2.361-1.638 4.378-2.71 6.046-1.072 1.668-2.313 2.948-3.723 3.842a8.454 8.454 0 0 1-4.617 1.34c-2.899 0-5.758-.685-8.578-2.055-2.82-1.37-5.649-3.078-8.488-5.123a160.774 160.774 0 0 1-8.607-6.671 108.75 108.75 0 0 0-8.935-6.672 55.768 55.768 0 0 0-9.501-5.123c-3.276-1.37-6.722-2.055-10.335-2.055h-1.37c-.438 0-.914.039-1.43.119l18.17-84.527z\" />\n  <path d=\"M147.535 59.361c-2.383 2.502-5.46 4.627-9.233 6.374-3.773 1.748-7.903 2.999-12.39 3.753-.477 5.639-1.559 10.722-3.246 15.25-1.688 4.527-3.823 8.38-6.404 11.556-2.582 3.178-5.54 5.62-8.875 7.327a22.948 22.948 0 0 1-10.603 2.562c-2.82 0-5.431-.348-7.833-1.042-2.403-.694-4.468-1.807-6.195-3.336-1.728-1.528-3.078-3.515-4.051-5.957s-1.459-5.41-1.459-8.905c0-2.383.249-5.093.745-8.131.497-3.038 1.29-6.165 2.383-9.382a56.173 56.173 0 0 1 4.229-9.441 36.298 36.298 0 0 1 6.314-8.25c2.481-2.421 5.351-4.378 8.607-5.867 3.256-1.489 6.969-2.234 11.139-2.234 10.444 0 15.666 6.493 15.666 19.479v.119c.198.08.387.119.566.119h.745c1.43 0 2.968-.208 4.617-.625a38.223 38.223 0 0 0 4.974-1.639 42.36 42.36 0 0 0 4.885-2.353 53.317 53.317 0 0 0 4.348-2.711l1.071 3.334zm-31.749 10.484c-1.271-.317-2.135-.943-2.591-1.877-.457-.933-.685-2.015-.685-3.246 0-1.707.347-3.106 1.042-4.199a6.258 6.258 0 0 1 2.77-2.413c-.08-1.311-.219-2.412-.417-3.306-.199-.894-.477-1.628-.834-2.204-.357-.575-.804-.983-1.34-1.221s-1.221-.357-2.055-.357c-1.47 0-2.88.566-4.229 1.698-1.351 1.132-2.631 2.631-3.842 4.497-1.212 1.867-2.323 4.002-3.336 6.404s-1.876 4.875-2.591 7.416a66.79 66.79 0 0 0-1.668 7.536c-.397 2.482-.596 4.735-.596 6.761s.109 3.674.328 4.944c.218 1.271.575 2.273 1.072 3.008.496.735 1.141 1.242 1.936 1.52.794.278 1.767.417 2.919.417 1.469 0 2.948-.655 4.438-1.966s2.869-3.098 4.14-5.361c1.271-2.264 2.392-4.944 3.366-8.042.971-3.099 1.696-6.434 2.173-10.009z\" />\n  <path d=\"M235.1 83.844c-2.859 3.376-5.739 6.186-8.637 8.429-2.899 2.244-5.659 4.199-8.28 5.867-1.072 1.549-2.293 2.851-3.664 3.902a19.654 19.654 0 0 1-4.408 2.562 21.918 21.918 0 0 1-4.854 1.399 30.498 30.498 0 0 1-5.004.417c-3.654 0-6.582-.497-8.786-1.489s-3.922-2.264-5.152-3.812a12.22 12.22 0 0 1-2.442-5.212 28.118 28.118 0 0 1-.596-5.688c0-1.787.258-3.405.774-4.854.516-1.449 1.191-2.671 2.025-3.664.834-.992 1.767-1.757 2.799-2.293 1.032-.536 2.085-.805 3.157-.805 4.249 0 6.374 1.708 6.374 5.123 0 1.51-.556 2.81-1.667 3.901-1.112 1.093-2.502 1.639-4.17 1.639a6.247 6.247 0 0 1-1.936-.298c-.616-.198-1.083-.635-1.4-1.311 0 2.859.585 5.093 1.757 6.701 1.171 1.608 2.949 2.412 5.332 2.412 1.35 0 2.501-.188 3.455-.565.953-.377 1.747-1.002 2.383-1.876.635-.873 1.102-2.035 1.4-3.485.298-1.449.447-3.246.447-5.391 0-1.111-.03-2.184-.089-3.217a60.469 60.469 0 0 0-.298-3.365c-.14-1.211-.289-2.571-.447-4.08a535.243 535.243 0 0 1-.536-5.392 429.93 429.93 0 0 1-.625-7.297 642.23 642.23 0 0 1-.685-9.828c-2.859 4.328-5.897 7.843-9.114 10.543-3.217 2.701-6.612 4.667-10.186 5.897-.199 2.463-.596 5.104-1.191 7.922a50.12 50.12 0 0 1-2.591 8.43c-1.131 2.799-2.561 5.479-4.289 8.041s-3.793 4.835-6.195 6.82c-2.403 1.986-5.183 3.565-8.34 4.736-3.157 1.171-6.722 1.757-10.692 1.757-5.639 0-9.888-1.37-12.747-4.11s-4.289-6.572-4.289-11.496c0-1.151.06-2.313.179-3.485.119-1.171.338-2.332.655-3.484l13.045-61.117 18.049-2.442-5.837 27.461c1.23-.754 2.332-1.36 3.306-1.817.973-.456 1.856-.804 2.651-1.042.794-.238 1.519-.387 2.174-.447s1.281-.089 1.876-.089c1.985 0 3.812.318 5.48.953 1.668.636 3.137 1.678 4.408 3.127 1.27 1.45 2.293 3.335 3.067 5.659s1.26 5.173 1.459 8.548c2.938-.556 5.957-2.481 9.054-5.778 3.098-3.295 6.334-7.803 9.709-13.521l18.049-2.383c.238 5.282.466 9.858.685 13.73a747.36 747.36 0 0 0 1.161 17.304c.158 1.987.307 3.744.447 5.272.139 1.529.238 2.919.298 4.17s.089 2.552.089 3.901c0 1.668-.119 3.178-.357 4.527a40.307 40.307 0 0 0 4.706-3.009 158.804 158.804 0 0 0 3.931-3.008h5.123zm-85.599 2.323c-.238 1.033-.357 1.966-.357 2.8 0 3.773 2.145 5.659 6.434 5.659 1.747 0 3.395-.754 4.944-2.264 1.549-1.509 2.938-3.475 4.17-5.897 1.23-2.422 2.273-5.132 3.127-8.131a57.905 57.905 0 0 0 1.816-8.965c-1.311-.953-1.965-2.581-1.965-4.885 0-1.032.139-1.975.417-2.829.278-.854.655-1.579 1.132-2.175-.438-1.866-1.142-3.415-2.114-4.646-.974-1.23-2.214-1.847-3.723-1.847-.438 0-.993.029-1.668.089-.676.06-1.37.179-2.085.357s-1.38.408-1.995.686c-.616.278-1.102.636-1.459 1.071l-6.674 30.977z\" />\n  <path d=\"M267.683 83.844c-1.152 3.297-2.433 6.156-3.842 8.578-1.41 2.423-2.88 4.467-4.408 6.135-1.529 1.668-3.098 3.019-4.706 4.051-1.608 1.033-3.167 1.827-4.676 2.383-1.51.557-2.949.933-4.319 1.132-1.37.198-2.591.298-3.663.298-1.827 0-3.535-.278-5.123-.834a10.671 10.671 0 0 1-4.14-2.621c-1.172-1.191-2.095-2.7-2.77-4.527-.675-1.826-1.013-4.029-1.013-6.611 0-1.111.08-2.333.238-3.664.159-1.33.397-2.77.715-4.318l7.327-34.251h-4.05l1.013-4.885h3.991l3.693-16.857 18.049-2.442-4.17 19.3h7.327l-.953 4.885h-7.327l-7.804 36.575c-.199.676-.328 1.34-.387 1.995s-.089 1.302-.089 1.937c0 1.708.396 2.889 1.191 3.544.794.655 2.045.983 3.753.983 1.191 0 2.353-.269 3.485-.805 1.131-.536 2.174-1.28 3.127-2.233s1.807-2.095 2.562-3.426c.754-1.33 1.37-2.77 1.847-4.318h5.122z\" />\n  <path d=\"M313.549 83.844a69.57 69.57 0 0 1-5.867 8.34 44.031 44.031 0 0 1-7.445 7.207c-2.76 2.105-5.818 3.804-9.174 5.094s-7.039 1.936-11.049 1.936c-2.899 0-5.52-.368-7.863-1.102-2.344-.734-4.349-1.877-6.016-3.426-1.668-1.549-2.949-3.544-3.842-5.986s-1.34-5.391-1.34-8.846c0-2.343.238-5.043.715-8.102.477-3.058 1.23-6.194 2.264-9.412a53.356 53.356 0 0 1 4.11-9.472 37.27 37.27 0 0 1 6.195-8.31c2.422-2.442 5.261-4.408 8.518-5.897 3.256-1.489 6.969-2.234 11.139-2.234 2.74 0 4.975.328 6.701.983 1.729.655 3.098 1.519 4.109 2.591a8.576 8.576 0 0 1 2.086 3.723c.377 1.41.566 2.87.566 4.378 0 3.535-.775 6.821-2.324 9.859a26.298 26.298 0 0 1-6.225 7.953c-2.602 2.263-5.59 4.09-8.965 5.479a33.14 33.14 0 0 1-10.543 2.442c-.08.914-.149 1.778-.208 2.592-.061.816-.091 1.58-.091 2.295 0 2.065.188 3.763.566 5.093.376 1.331.933 2.374 1.668 3.128.734.755 1.647 1.28 2.739 1.578 1.092.298 2.374.446 3.842.446 2.422 0 4.617-.317 6.582-.952a22.98 22.98 0 0 0 5.51-2.621 30.897 30.897 0 0 0 4.855-3.932 122.149 122.149 0 0 0 4.617-4.825h4.17zm-33.298-8.637c2.303-.159 4.528-.813 6.672-1.966a20.277 20.277 0 0 0 5.658-4.499c1.627-1.847 2.928-3.95 3.902-6.313a19.136 19.136 0 0 0 1.459-7.356c0-1.509-.219-2.72-.656-3.634-.438-.913-1.23-1.37-2.383-1.37-1.549 0-3.066.744-4.557 2.233-1.488 1.489-2.889 3.425-4.199 5.808s-2.472 5.074-3.484 8.071a71.765 71.765 0 0 0-2.412 9.026z\" />\n  <path d=\"M304.734 105.705l12.926-60.998h17.572l-1.549 7.565a108.573 108.573 0 0 1 3.277-2.8 25.361 25.361 0 0 1 3.484-2.413 20.944 20.944 0 0 1 3.781-1.698 13.1 13.1 0 0 1 4.17-.655c1.391 0 2.611.259 3.664.774 1.051.517 1.936 1.191 2.65 2.025s1.252 1.808 1.609 2.918c.357 1.112.535 2.263.535 3.456a9.861 9.861 0 0 1-.535 3.187 8.238 8.238 0 0 1-1.639 2.829c-.736.834-1.658 1.52-2.77 2.056-1.113.536-2.404.804-3.873.804-1.152 0-2.035-.198-2.65-.596-.615-.396-1.082-.894-1.4-1.489s-.545-1.24-.684-1.936a34.092 34.092 0 0 0-.447-1.937c-.16-.596-.367-1.092-.625-1.489-.26-.396-.686-.595-1.281-.595-1.867 0-3.436.427-4.705 1.28-1.271.854-2.662 1.976-4.17 3.365l-9.77 46.344h-17.57z\" />\n</symbol>"
});
var result = browser_sprite_build_default.a.add(symbol);
/* harmony default export */ var lobster = (symbol);
// CONCATENATED MODULE: ./src/icons/tahoma.svg


var tahoma_symbol = new browser_symbol_default.a({
  "id": "tahoma",
  "use": "tahoma-usage",
  "viewBox": "0 0 566.93 141.73",
  "content": "<symbol xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 566.93 141.73\" id=\"tahoma\">\n  <path d=\"M60.781 114.989V41.378H32.749v-9.867h67.164v9.867H71.881v73.611h-11.1zM129.738 108.317c-.86.637-2.01 1.523-3.448 2.663-1.439 1.141-2.832 2.047-4.177 2.72-1.87.972-3.672 1.719-5.41 2.242-1.738.522-4.177.785-7.316.785-2.579 0-5.027-.486-7.344-1.458a18.862 18.862 0 0 1-6.111-4.093c-1.682-1.719-3.027-3.84-4.037-6.363-1.009-2.522-1.514-5.186-1.514-7.988 0-4.336.916-8.026 2.747-11.073 1.831-3.045 4.728-5.466 8.69-7.26 3.513-1.606 7.662-2.719 12.446-3.336 4.784-.616 9.942-1.073 15.474-1.373v-2.019c0-2.467-.374-4.457-1.121-5.971-.748-1.514-1.794-2.681-3.14-3.504-1.346-.859-2.991-1.43-4.934-1.71a42.041 42.041 0 0 0-5.999-.42c-2.43 0-5.29.364-8.578 1.093-3.29.729-6.579 1.785-9.867 3.167h-.617V53.712c1.943-.561 4.728-1.177 8.353-1.85a58.87 58.87 0 0 1 10.764-1.009c4.298 0 7.923.336 10.876 1.009 2.952.673 5.606 1.888 7.961 3.644 2.279 1.72 3.98 3.944 5.102 6.671 1.122 2.729 1.682 6.055 1.682 9.979v42.832h-10.484v-6.671zm0-8.745v-17.38c-2.504.225-5.672.532-9.503.925-3.832.393-6.923.944-9.278 1.654-2.803.86-5.121 2.178-6.952 3.952-1.832 1.775-2.747 4.252-2.747 7.429 0 3.588 1.009 6.298 3.027 8.129 2.018 1.832 4.97 2.747 8.858 2.747 3.326 0 6.335-.719 9.026-2.158a39.045 39.045 0 0 0 7.569-5.298zM204.246 114.989h-10.54V79.333c0-2.877-.14-5.559-.42-8.045-.28-2.485-.813-4.476-1.598-5.971-.86-1.57-2.056-2.737-3.588-3.504-1.533-.766-3.625-1.149-6.279-1.149-2.617 0-5.317.701-8.101 2.103-2.785 1.401-5.504 3.224-8.157 5.466v46.757h-10.54V27.755h10.54v31.563c3.139-2.803 6.241-4.952 9.306-6.447a21.843 21.843 0 0 1 9.699-2.243c6.167 0 10.988 2.028 14.464 6.083 3.476 4.056 5.213 9.933 5.213 17.632v40.646zM270.568 83.706c0 10.54-2.542 18.679-7.625 24.415-5.083 5.738-11.849 8.606-20.295 8.606-8.709 0-15.558-2.962-20.547-8.887-4.99-5.923-7.484-13.968-7.484-24.135 0-10.465 2.569-18.594 7.708-24.387 5.139-5.793 11.914-8.69 20.323-8.69 8.446 0 15.211 2.887 20.295 8.662 5.083 5.775 7.625 13.914 7.625 24.416zm-10.876 0c0-8.109-1.477-14.137-4.429-18.08-2.953-3.943-7.158-5.915-12.614-5.915-5.494 0-9.727 1.972-12.698 5.915s-4.457 9.971-4.457 18.08c0 7.849 1.486 13.801 4.457 17.856s7.204 6.082 12.698 6.082c5.419 0 9.615-1.99 12.586-5.971 2.972-3.98 4.457-9.968 4.457-17.967zM352.477 114.989V78.772c0-2.878-.111-5.54-.336-7.989-.225-2.447-.693-4.363-1.402-5.746-.748-1.495-1.812-2.597-3.195-3.308-1.383-.709-3.252-1.065-5.605-1.065-2.168 0-4.496.664-6.98 1.99-2.486 1.327-5.055 3.243-7.709 5.747.037.636.084 1.393.141 2.271s.084 1.915.084 3.111v41.206h-10.539V78.772c0-2.878-.113-5.54-.338-7.989-.225-2.447-.691-4.363-1.4-5.746-.748-1.495-1.814-2.597-3.195-3.308-1.385-.709-3.252-1.065-5.607-1.065-2.279 0-4.672.71-7.176 2.13-2.504 1.421-4.934 3.233-7.289 5.438v46.757h-10.539V52.367h10.539v6.952c2.766-2.766 5.504-4.906 8.215-6.419 2.709-1.514 5.689-2.271 8.941-2.271 3.699 0 6.98.841 9.84 2.523 2.857 1.682 5.035 4.448 6.531 8.297 3.176-3.55 6.277-6.242 9.305-8.073 3.029-1.831 6.316-2.747 9.867-2.747 2.691 0 5.139.42 7.346 1.261 2.205.841 4.129 2.196 5.773 4.065 1.682 1.906 2.98 4.28 3.896 7.12.916 2.841 1.373 6.411 1.373 10.708v41.206h-10.541zM412.8 108.317c-.859.637-2.009 1.523-3.447 2.663-1.439 1.141-2.831 2.047-4.177 2.72-1.869.972-3.672 1.719-5.41 2.242-1.738.522-4.177.785-7.316.785-2.579 0-5.027-.486-7.344-1.458a18.862 18.862 0 0 1-6.111-4.093c-1.682-1.719-3.027-3.84-4.036-6.363-1.01-2.522-1.514-5.186-1.514-7.988 0-4.336.915-8.026 2.747-11.073 1.83-3.045 4.728-5.466 8.689-7.26 3.513-1.606 7.661-2.719 12.446-3.336 4.783-.616 9.941-1.073 15.473-1.373v-2.019c0-2.467-.374-4.457-1.121-5.971-.748-1.514-1.794-2.681-3.14-3.504-1.345-.859-2.99-1.43-4.934-1.71s-3.943-.42-5.998-.42c-2.431 0-5.289.364-8.578 1.093-3.289.729-6.578 1.785-9.867 3.167h-.616V53.712c1.942-.561 4.728-1.177 8.354-1.85a58.87 58.87 0 0 1 10.764-1.009c4.298 0 7.924.336 10.876 1.009s5.606 1.888 7.961 3.644c2.279 1.72 3.98 3.944 5.103 6.671 1.121 2.729 1.682 6.055 1.682 9.979v42.832H412.8v-6.671zm0-8.745v-17.38a775.73 775.73 0 0 0-9.502.925c-3.832.393-6.924.944-9.278 1.654-2.804.86-5.121 2.178-6.952 3.952-1.832 1.775-2.747 4.252-2.747 7.429 0 3.588 1.009 6.298 3.027 8.129 2.019 1.832 4.971 2.747 8.858 2.747 3.325 0 6.335-.719 9.025-2.158a39.075 39.075 0 0 0 7.569-5.298z\" />\n</symbol>"
});
var tahoma_result = browser_sprite_build_default.a.add(tahoma_symbol);
/* harmony default export */ var tahoma = (tahoma_symbol);
// CONCATENATED MODULE: ./src/icons/typograph.svg


var typograph_symbol = new browser_symbol_default.a({
  "id": "typograph",
  "use": "typograph-usage",
  "viewBox": "0 0 566.93 141.73",
  "content": "<symbol xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 566.93 141.73\" id=\"typograph\">\n  <path d=\"M88.989 41.491H67.45v57.408H56.9V41.491H35.449V30.942h53.54v10.549zM135.583 60.305l-33.056 60.134-9.231-5.1 9.231-16.791-19.78-38.331 9.407-4.835 16.528 32.001 17.671-32.089 9.23 5.011zM186.66 61.712c2.167 2.228 3.838 4.733 5.011 7.517 1.172 2.784 1.758 5.729 1.758 8.835 0 3.107-.586 6.053-1.758 8.836-1.173 2.784-2.843 5.29-5.011 7.517-2.228 2.228-4.734 3.912-7.517 5.055-2.785 1.143-5.73 1.715-8.835 1.715-2.813 0-5.495-.47-8.044-1.407a22.372 22.372 0 0 1-6.901-4.044v23.121h-10.55V56.7h10.55v3.693a22.414 22.414 0 0 1 6.901-4.045c2.55-.937 5.231-1.406 8.044-1.406 3.105 0 6.051.571 8.835 1.714 2.783 1.144 5.289 2.829 7.517 5.056zm-16.352 28.924c1.758 0 3.398-.321 4.923-.968a12.463 12.463 0 0 0 4-2.681 12.479 12.479 0 0 0 2.681-4c.644-1.523.967-3.165.967-4.924 0-1.758-.323-3.398-.967-4.923a12.511 12.511 0 0 0-2.681-4 12.498 12.498 0 0 0-4-2.682c-1.524-.645-3.165-.967-4.923-.967s-3.4.322-4.923.967a12.476 12.476 0 0 0-4 2.682 12.482 12.482 0 0 0-2.682 4c-.646 1.524-.967 3.165-.967 4.923 0 1.759.321 3.4.967 4.924a12.44 12.44 0 0 0 6.682 6.681c1.523.646 3.165.968 4.923.968zM225.781 100.834c-3.107 0-6.052-.572-8.835-1.715-2.784-1.143-5.261-2.827-7.429-5.055-2.228-2.168-3.912-4.645-5.055-7.429-1.143-2.783-1.714-5.729-1.714-8.836 0-3.105.571-6.051 1.714-8.835 1.143-2.783 2.827-5.26 5.055-7.429 2.168-2.227 4.645-3.912 7.429-5.056 2.783-1.143 5.729-1.714 8.835-1.714 3.106 0 6.051.571 8.835 1.714 2.783 1.144 5.26 2.829 7.429 5.056 2.227 2.169 3.912 4.646 5.055 7.429 1.143 2.784 1.714 5.729 1.714 8.835 0 3.107-.572 6.053-1.714 8.836-1.143 2.784-2.829 5.261-5.055 7.429-2.169 2.228-4.646 3.912-7.429 5.055-2.784 1.143-5.729 1.715-8.835 1.715zm0-35.518c-1.701 0-3.312.322-4.835.967a12.487 12.487 0 0 0-4 2.682 12.463 12.463 0 0 0-2.681 4 12.26 12.26 0 0 0-.967 4.835c0 1.701.322 3.312.967 4.836a12.479 12.479 0 0 0 2.681 4 12.452 12.452 0 0 0 4 2.681c1.523.646 3.135.968 4.835.968 1.699 0 3.311-.321 4.835-.968a12.463 12.463 0 0 0 4-2.681 12.479 12.479 0 0 0 2.681-4c.645-1.523.967-3.135.967-4.836 0-1.699-.323-3.311-.967-4.835-.646-1.523-1.538-2.857-2.681-4s-2.477-2.036-4-2.682a12.3 12.3 0 0 0-4.835-.967zM306.925 56.7v37.54c0 .527-.03 1.041-.088 1.538-.06.499-.118.953-.177 1.363-.059.059-.088.176-.088.352v.088a28.87 28.87 0 0 1-.396 1.846 39.047 39.047 0 0 0-.396 1.759l-.088.176-.088.176c0 .176-.03.321-.088.439a5.557 5.557 0 0 1-.352 1.055v.088c-1.23 3.75-3.283 6.915-6.154 9.495l-.176.176-.088.088c-.118.116-.25.248-.396.396a5.443 5.443 0 0 1-.571.483c-.47.293-.923.601-1.362.923-.439.321-.924.63-1.451.924-.762.468-1.788.995-3.077 1.582-3.164 1.23-6.711 1.963-10.636 2.198h-3.824c-.734 0-1.51-.06-2.33-.176h-.176l-1.847-.353c-1.817-.294-3.429-.762-4.835-1.406-1.406-.646-2.608-1.261-3.604-1.846l-.088-.088-.176-.088c-.118-.118-.22-.206-.308-.265s-.191-.118-.308-.176l5.978-8.703a.722.722 0 0 0 .176.132.695.695 0 0 1 .177.132h.088c.937.527 1.771.952 2.505 1.274a8.943 8.943 0 0 0 2.242.66l1.318.264a103.3 103.3 0 0 0 2.374.132c.703.028 1.376.014 2.021-.044a46.786 46.786 0 0 0 3.912-.483 14.214 14.214 0 0 0 3.385-1.012c.293-.118.601-.25.924-.396.321-.146.629-.308.923-.483a33.906 33.906 0 0 0 1.494-1.055c.117-.118.233-.22.352-.308.117-.088.234-.191.352-.308 1.465-1.407 2.55-3.107 3.253-5.1 0-.118.014-.19.044-.22.029-.03.044-.103.044-.22l.264-.791c.117-.469.221-.923.309-1.362.088-.44.16-.864.22-1.275.058-.058.088-.204.088-.439.058-.117.088-.264.088-.439s.028-.321.088-.439c-2.169 1.993-4.572 3.517-7.209 4.571-2.638 1.055-5.451 1.582-8.44 1.582-3.048 0-5.949-.571-8.703-1.714-2.756-1.143-5.217-2.798-7.385-4.967-2.169-2.168-3.824-4.63-4.967-7.385-1.144-2.755-1.715-5.655-1.715-8.704 0-3.105.571-6.035 1.715-8.791 1.143-2.754 2.798-5.216 4.967-7.385 2.168-2.168 4.629-3.824 7.385-4.967 2.754-1.144 5.655-1.715 8.703-1.715 2.989 0 5.816.527 8.484 1.582a22.334 22.334 0 0 1 7.165 4.572V56.7h10.549zm-26.199 33.408c1.699 0 3.296-.322 4.792-.968a12.434 12.434 0 0 0 3.912-2.637 12.653 12.653 0 0 0 2.638-3.868c.644-1.465.967-3.047.967-4.748 0-1.699-.323-3.297-.967-4.791a12.487 12.487 0 0 0-2.638-3.912 12.504 12.504 0 0 0-3.912-2.638c-1.495-.645-3.092-.967-4.792-.967-1.7 0-3.282.322-4.747.967a12.594 12.594 0 0 0-3.868 2.638 12.453 12.453 0 0 0-2.638 3.912c-.646 1.494-.967 3.092-.967 4.791 0 1.701.321 3.283.967 4.748a12.565 12.565 0 0 0 2.638 3.868 12.556 12.556 0 0 0 3.868 2.637c1.465.646 3.047.968 4.747.968zM343.672 54.767c1.991 0 4.088.323 6.285.967 2.198.646 4.058 1.466 5.583 2.462l-5.803 8.791c-.586-.409-1.494-.791-2.726-1.143-1.23-.352-2.345-.527-3.34-.527-1.935 0-3.591.206-4.968.615-1.378.411-2.521.923-3.429 1.538-.909.616-1.626 1.29-2.153 2.022a19.902 19.902 0 0 0-1.319 2.066c-.47.997-.821 2.008-1.055 3.032a30.17 30.17 0 0 0-.527 2.901 27.784 27.784 0 0 0-.22 2.55c-.03.791-.044 1.393-.044 1.802v17.056H319.318V55.821h10.55v2.638c0-.058.028-.088.088-.088 3.81-2.402 8.382-3.604 13.716-3.604zM410.223 56.7v42.199h-10.55v-5.715c-.118.118-.25.265-.396.44a6.716 6.716 0 0 1-.396.439c-2.229 2.169-4.719 3.824-7.473 4.967-2.756 1.143-5.686 1.715-8.792 1.715-3.048 0-5.964-.572-8.747-1.715a22.484 22.484 0 0 1-7.429-4.967 22.513 22.513 0 0 1-4.968-7.429 22.805 22.805 0 0 1-1.714-8.748c0-3.105.571-6.035 1.714-8.791 1.144-2.754 2.799-5.245 4.968-7.473a22.518 22.518 0 0 1 7.429-4.968 22.804 22.804 0 0 1 8.747-1.714c3.106 0 6.036.571 8.792 1.714 2.754 1.144 5.244 2.8 7.473 4.968.176.234.439.527.791.879V56.7h10.551zm-27.606 33.496a12.27 12.27 0 0 0 4.836-.968c1.522-.644 2.842-1.523 3.956-2.637a12.49 12.49 0 0 0 2.637-3.912c.645-1.495.968-3.091.968-4.792a12.28 12.28 0 0 0-.968-4.835c-.646-1.523-1.524-2.842-2.637-3.956-1.114-1.112-2.434-1.992-3.956-2.638a12.287 12.287 0 0 0-4.836-.967c-1.7 0-3.297.322-4.791.967a12.453 12.453 0 0 0-3.912 2.638c-1.114 1.114-1.993 2.433-2.638 3.956a12.26 12.26 0 0 0-.967 4.835c0 1.701.321 3.297.967 4.792a12.425 12.425 0 0 0 2.638 3.912 12.416 12.416 0 0 0 3.912 2.637c1.494.646 3.091.968 4.791.968zM464.377 61.712c2.168 2.228 3.838 4.733 5.012 7.517 1.172 2.784 1.758 5.729 1.758 8.835 0 3.107-.586 6.053-1.758 8.836-1.174 2.784-2.844 5.29-5.012 7.517-2.228 2.228-4.733 3.912-7.517 5.055-2.784 1.143-5.729 1.715-8.835 1.715-2.813 0-5.495-.47-8.044-1.407a22.349 22.349 0 0 1-6.901-4.044v23.121h-10.55V56.7h10.55v3.693a22.414 22.414 0 0 1 6.901-4.045c2.549-.937 5.23-1.406 8.044-1.406 3.105 0 6.051.571 8.835 1.714 2.784 1.144 5.289 2.829 7.517 5.056zm-16.352 28.924c1.758 0 3.398-.321 4.923-.968a12.463 12.463 0 0 0 4-2.681 12.482 12.482 0 0 0 2.682-4c.645-1.523.967-3.165.967-4.924 0-1.758-.322-3.398-.967-4.923a12.482 12.482 0 0 0-2.682-4 12.498 12.498 0 0 0-4-2.682c-1.524-.645-3.165-.967-4.923-.967-1.759 0-3.4.322-4.923.967a12.491 12.491 0 0 0-4.001 2.682 12.463 12.463 0 0 0-2.681 4c-.646 1.524-.968 3.165-.968 4.923 0 1.759.322 3.4.968 4.924a12.463 12.463 0 0 0 2.681 4 12.456 12.456 0 0 0 4.001 2.681c1.523.646 3.165.968 4.923.968zM523.806 61.36c2.168 2.228 3.824 4.719 4.967 7.473 1.144 2.755 1.715 5.656 1.715 8.703v21.363h-10.55V77.536c0-1.699-.323-3.297-.967-4.791a12.476 12.476 0 0 0-2.638-3.912 12.487 12.487 0 0 0-3.912-2.638c-1.494-.645-3.092-.967-4.791-.967h-.088c-1.817 0-3.561.352-5.231 1.055a15.962 15.962 0 0 0-4.439 2.77 14.238 14.238 0 0 0-3.121 3.912c-.791 1.466-1.187 2.989-1.187 4.571v21.363h-10.726V29.271h10.55v29.891a25.019 25.019 0 0 1 6.813-3.341 24.454 24.454 0 0 1 7.341-1.143h.088c3.047 0 5.947.571 8.703 1.714 2.754 1.144 5.245 2.8 7.473 4.968z\" />\n</symbol>"
});
var typograph_result = browser_sprite_build_default.a.add(typograph_symbol);
/* harmony default export */ var typograph = (typograph_symbol);
// CONCATENATED MODULE: ./src/icons/kaushan.svg


var kaushan_symbol = new browser_symbol_default.a({
  "id": "kaushan",
  "use": "kaushan-usage",
  "viewBox": "0 0 566.93 141.73",
  "content": "<symbol xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 566.93 141.73\" id=\"kaushan\">\n  <path d=\"M45.461 115.954l18.4-86.593c-5.636 2.362-10.008 5.896-13.116 10.599-3.108 4.704-4.662 10.475-4.662 17.312 0 1.616.093 2.932.28 3.947.187 1.016.382 1.824.59 2.424.207.602.404 1.067.591 1.399.186.332.279.622.279.87-2.197 0-4.145-.218-5.843-.653-1.7-.435-3.119-1.128-4.258-2.083-1.141-.953-2.011-2.216-2.611-3.792-.602-1.575-.901-3.522-.901-5.844 0-2.817.611-5.594 1.833-8.33 1.222-2.735 2.9-5.325 5.035-7.771 2.134-2.444 4.641-4.703 7.522-6.775a55.433 55.433 0 0 1 19.581-8.92 46.387 46.387 0 0 1 10.723-1.274c.953 0 1.834.021 2.642.062.808.042 1.626.104 2.455.187l-8.268 38.976a487.863 487.863 0 0 0 3.575-4.787 975.664 975.664 0 0 1 4.351-5.843c1.554-2.072 3.149-4.196 4.787-6.372a623.343 623.343 0 0 0 4.755-6.403 559.675 559.675 0 0 1 4.383-5.905c1.388-1.844 2.6-3.46 3.636-4.849a211.677 211.677 0 0 1 3.419-4.445h13.365L82.635 61.872c.828 0 1.595-.021 2.3-.062a36.336 36.336 0 0 1 2.114-.062c3.108 0 5.677.342 7.708 1.026 2.03.684 3.646 1.638 4.849 2.859a10.026 10.026 0 0 1 2.518 4.321c.476 1.657.715 3.46.715 5.409 0 2.652-.321 5.438-.963 8.36a172.012 172.012 0 0 1-2.145 8.672 306.116 306.116 0 0 0-2.145 8.205c-.643 2.611-.964 4.933-.964 6.963 0 1.989.445 3.74 1.336 5.252.891 1.514 2.103 2.56 3.637 3.14-2.735.787-5.139 1.347-7.211 1.679-2.073.331-3.875.497-5.408.497-2.073 0-3.751-.26-5.035-.777-1.285-.519-2.29-1.181-3.015-1.989a6.554 6.554 0 0 1-1.492-2.735 11.69 11.69 0 0 1-.404-3.015c0-2.154.352-4.651 1.057-7.49a315.421 315.421 0 0 1 2.331-8.827 234.595 234.595 0 0 0 2.331-9.045c.704-2.983 1.057-5.697 1.057-8.144 0-1.283-.135-2.455-.404-3.512-.27-1.057-.694-1.968-1.274-2.736-.581-.767-1.368-1.357-2.362-1.771-.995-.414-2.197-.622-3.605-.622-.581 0-1.233.031-1.958.093-.726.062-1.482.197-2.269.404l-10.194 47.99H45.461zM182.282 93.141c-1.203 3.44-2.508 6.424-3.917 8.951-1.409 2.528-2.87 4.662-4.382 6.402-1.513 1.741-3.057 3.15-4.631 4.228-1.575 1.078-3.108 1.906-4.6 2.486-1.492.581-2.921.974-4.289 1.182-1.368.206-2.611.311-3.729.311-3.605 0-6.476-.984-8.61-2.953-2.135-1.968-3.43-4.88-3.885-8.733a49.33 49.33 0 0 1-3.419 4.258 25.379 25.379 0 0 1-4.165 3.729c-1.534 1.099-3.243 1.989-5.128 2.674-1.886.684-3.969 1.025-6.248 1.025-2.197 0-4.311-.353-6.34-1.057-2.031-.704-3.834-1.865-5.408-3.481-1.576-1.616-2.839-3.729-3.792-6.341-.953-2.61-1.43-5.801-1.43-9.573 0-2.899.29-6.008.87-9.324a59.073 59.073 0 0 1 2.673-9.945 56.52 56.52 0 0 1 4.507-9.543c1.803-3.046 3.917-5.739 6.341-8.081a28.98 28.98 0 0 1 8.236-5.595c3.066-1.388 6.444-2.083 10.133-2.083 3.605 0 6.226.622 7.863 1.865 1.637 1.244 2.456 2.777 2.456 4.6v.933l1.368-6.776h18.338l-9.138 43.266a12.807 12.807 0 0 0-.436 2.083 16.754 16.754 0 0 0-.124 2.02c0 3.647 1.74 5.471 5.222 5.471 1.243 0 2.393-.32 3.45-.964 1.057-.642 2.021-1.501 2.891-2.579.871-1.077 1.637-2.352 2.3-3.823a33.313 33.313 0 0 0 1.678-4.631h5.345zm-32.076-28.72c0-.373-.083-.839-.249-1.399a5.042 5.042 0 0 0-.839-1.616c-.394-.518-.923-.953-1.585-1.305-.664-.352-1.513-.529-2.549-.529-1.782 0-3.471.581-5.066 1.741-1.596 1.161-3.057 2.704-4.382 4.631-1.327 1.927-2.508 4.113-3.543 6.558a62.693 62.693 0 0 0-2.642 7.553 62.37 62.37 0 0 0-1.647 7.646c-.373 2.508-.56 4.756-.56 6.744 0 2.446.228 4.331.684 5.657.456 1.327 1.004 2.311 1.647 2.953.642.643 1.337 1.025 2.083 1.149.746.125 1.409.187 1.989.187.953 0 1.958-.237 3.015-.715 1.057-.476 2.072-1.181 3.046-2.113.973-.933 1.865-2.103 2.673-3.513.808-1.408 1.419-3.046 1.834-4.91l6.091-28.719z\" />\n  <path d=\"M246.558 93.141c-1.202 3.44-2.508 6.424-3.916 8.951-1.409 2.528-2.87 4.662-4.382 6.402-1.514 1.741-3.057 3.15-4.631 4.228-1.575 1.078-3.108 1.906-4.6 2.486-1.492.581-2.921.974-4.289 1.182-1.368.206-2.611.311-3.73.311-3.647 0-6.548-1.005-8.703-3.015-2.155-2.01-3.461-5.024-3.917-9.045-1.616 2.61-3.253 4.704-4.911 6.278-1.658 1.575-3.294 2.797-4.911 3.668-1.616.87-3.192 1.439-4.725 1.709-1.534.27-2.963.404-4.289.404-1.907 0-3.689-.291-5.346-.87a11.132 11.132 0 0 1-4.32-2.735c-1.223-1.243-2.187-2.817-2.891-4.725-.704-1.905-1.057-4.205-1.057-6.9 0-1.159.083-2.434.249-3.822.166-1.389.415-2.891.746-4.507l8.641-40.842h18.338l-9.138 43.266c-.249 1.327-.373 2.528-.373 3.605 0 1.451.269 2.684.808 3.699.538 1.016 1.533 1.522 2.984 1.522 1.243 0 2.382-.279 3.419-.839 1.035-.56 1.979-1.337 2.828-2.331.849-.995 1.595-2.186 2.238-3.574a35.862 35.862 0 0 0 1.709-4.507l8.641-40.842h18.338l-9.138 43.266a12.698 12.698 0 0 0-.435 2.083 16.757 16.757 0 0 0-.125 2.02c0 1.783.425 3.016 1.274 3.699.849.684 2.165 1.025 3.947 1.025 1.244 0 2.394-.279 3.45-.839s2.021-1.337 2.891-2.331c.87-.995 1.637-2.186 2.3-3.574a28.356 28.356 0 0 0 1.679-4.507h5.347z\" />\n  <path d=\"M295.169 93.141c-3.315 3.854-6.642 7.035-9.977 9.542-3.337 2.508-6.497 4.631-9.48 6.371a20.346 20.346 0 0 1-4.445 3.574 26.849 26.849 0 0 1-5.097 2.362c-1.762.602-3.543 1.036-5.346 1.306s-3.512.404-5.128.404c-3.191 0-5.958-.487-8.299-1.461-2.342-.974-4.279-2.238-5.812-3.792s-2.663-3.295-3.388-5.222c-.725-1.927-1.088-3.863-1.088-5.812 0-1.491.197-2.869.59-4.134.395-1.264.901-2.393 1.523-3.388a11.962 11.962 0 0 1 2.145-2.58c.808-.725 1.647-1.294 2.518-1.709 3.564-6.382 6.568-12.691 9.014-18.929a293.956 293.956 0 0 0 6.651-18.804l18.835-2.486c.249 5.512.487 10.288.715 14.329a765.12 765.12 0 0 0 1.213 18.058c.165 2.073.32 3.907.466 5.502.145 1.596.249 3.046.311 4.352.062 1.305.093 2.663.093 4.071 0 .954-.031 1.824-.093 2.611s-.197 1.533-.404 2.237a70.48 70.48 0 0 0 5.067-3.201 42.946 42.946 0 0 0 4.071-3.201h5.345zm-51.284 4.599c0 2.984.591 5.212 1.772 6.683 1.181 1.472 3.18 2.207 5.999 2.207 1.408 0 2.776-.196 4.103-.591a9.12 9.12 0 0 0 3.543-1.989c1.035-.933 1.865-2.145 2.486-3.637.622-1.491.933-3.356.933-5.595 0-1.077-.031-2.123-.093-3.139a277.206 277.206 0 0 0-.218-3.232c-.083-1.14-.197-2.414-.342-3.823-.146-1.408-.311-3.046-.497-4.911a422.954 422.954 0 0 1-.591-6.465 981.759 981.759 0 0 1-.684-8.579 107.524 107.524 0 0 1-4.538 12.06 238.808 238.808 0 0 1-5.781 11.997 6.848 6.848 0 0 1 2.082 1.741c.56.705.839 1.596.839 2.673 0 .787-.124 1.554-.373 2.3a6.248 6.248 0 0 1-1.119 2.021 5.623 5.623 0 0 1-1.772 1.43c-.684.353-1.46.528-2.331.528a6.255 6.255 0 0 1-1.989-.311c-.621-.207-1.098-.663-1.429-1.368z\" />\n  <path d=\"M359.445 93.141c-1.782 5.222-3.698 9.387-5.75 12.494-2.051 3.108-4.124 5.481-6.216 7.118-2.094 1.638-4.145 2.704-6.154 3.201-2.011.497-3.865.746-5.563.746-2.819 0-5.181-.404-7.087-1.212-1.906-.809-3.44-1.886-4.6-3.232a12.47 12.47 0 0 1-2.518-4.601 18.282 18.282 0 0 1-.777-5.314c0-2.154.3-4.672.901-7.553.601-2.88 1.253-5.833 1.958-8.858.704-3.024 1.357-5.946 1.958-8.765s.901-5.243.901-7.274c0-4.352-1.533-6.527-4.6-6.527a5.979 5.979 0 0 0-3.232.933c-.995.622-1.907 1.461-2.735 2.518-.829 1.057-1.575 2.3-2.238 3.729s-1.243 2.954-1.74 4.57l-8.641 40.841h-18.338l18.462-86.593 18.836-2.549-6.838 32.076c1.367-1.533 2.725-2.766 4.071-3.699 1.347-.932 2.662-1.647 3.947-2.145 1.284-.497 2.496-.829 3.637-.995a22.43 22.43 0 0 1 3.201-.249c2.03 0 3.916.27 5.657.808 1.74.539 3.242 1.389 4.507 2.549 1.264 1.161 2.247 2.652 2.952 4.476.704 1.824 1.057 4 1.057 6.527 0 1.7-.155 3.534-.466 5.501a99.032 99.032 0 0 1-1.15 6.031 202.644 202.644 0 0 1-1.46 6.123c-.52 2.03-1.006 3.978-1.461 5.843a110.78 110.78 0 0 0-1.15 5.19c-.311 1.596-.466 2.995-.466 4.196 0 1.575.362 2.859 1.088 3.854.725.994 2.061 1.491 4.009 1.491 1.368 0 2.569-.269 3.605-.808 1.036-.538 1.968-1.306 2.798-2.3.828-.995 1.585-2.186 2.269-3.575a65.156 65.156 0 0 0 2.021-4.568h5.345z\" />\n  <path d=\"M426.395 93.141c-1.202 3.44-2.508 6.424-3.916 8.951-1.409 2.528-2.87 4.662-4.383 6.402-1.513 1.741-3.057 3.15-4.631 4.228-1.575 1.078-3.108 1.906-4.6 2.486-1.492.581-2.922.974-4.289 1.182-1.368.206-2.611.311-3.73.311-3.605 0-6.476-.984-8.609-2.953-2.135-1.968-3.43-4.88-3.885-8.733a49.714 49.714 0 0 1-3.419 4.258 25.42 25.42 0 0 1-4.165 3.729c-1.534 1.099-3.243 1.989-5.129 2.674-1.886.684-3.969 1.025-6.247 1.025-2.197 0-4.311-.353-6.341-1.057s-3.833-1.865-5.408-3.481-2.839-3.729-3.792-6.341c-.952-2.61-1.43-5.801-1.43-9.573 0-2.899.291-6.008.87-9.324a58.983 58.983 0 0 1 2.674-9.945 56.443 56.443 0 0 1 4.507-9.543c1.803-3.046 3.916-5.739 6.34-8.081a29 29 0 0 1 8.237-5.595c3.066-1.388 6.443-2.083 10.132-2.083 3.605 0 6.227.622 7.864 1.865 1.637 1.244 2.455 2.777 2.455 4.6v.933l1.367-6.776h18.339l-9.139 43.266a12.698 12.698 0 0 0-.435 2.083 16.555 16.555 0 0 0-.125 2.02c0 3.647 1.741 5.471 5.222 5.471 1.243 0 2.394-.32 3.45-.964 1.057-.642 2.021-1.501 2.891-2.579.87-1.077 1.637-2.352 2.3-3.823a33.188 33.188 0 0 0 1.679-4.631h5.346zm-32.076-28.72c0-.373-.084-.839-.249-1.399a5.042 5.042 0 0 0-.839-1.616c-.395-.518-.923-.953-1.586-1.305s-1.513-.529-2.548-.529c-1.783 0-3.472.581-5.066 1.741-1.596 1.161-3.057 2.704-4.383 4.631-1.327 1.927-2.508 4.113-3.543 6.558a62.525 62.525 0 0 0-2.643 7.553 62.363 62.363 0 0 0-1.646 7.646c-.373 2.508-.56 4.756-.56 6.744 0 2.446.227 4.331.684 5.657.455 1.327 1.004 2.311 1.647 2.953.642.643 1.336 1.025 2.082 1.149.746.125 1.408.187 1.989.187.953 0 1.958-.237 3.015-.715 1.057-.476 2.072-1.181 3.046-2.113s1.865-2.103 2.674-3.513c.808-1.408 1.419-3.046 1.833-4.91l6.093-28.719z\" />\n  <path d=\"M416.2 115.954l13.489-63.655h18.338l-1.367 6.589c1.367-1.533 2.725-2.766 4.071-3.699 1.347-.932 2.662-1.647 3.947-2.145 1.284-.497 2.496-.829 3.637-.995a22.43 22.43 0 0 1 3.201-.249c2.03 0 3.916.27 5.657.808 1.74.539 3.242 1.389 4.507 2.549 1.264 1.161 2.247 2.652 2.952 4.476.704 1.824 1.057 4 1.057 6.527 0 1.7-.155 3.534-.466 5.501a99.032 99.032 0 0 1-1.15 6.031 202.644 202.644 0 0 1-1.46 6.123c-.52 2.03-1.006 3.978-1.461 5.843a110.78 110.78 0 0 0-1.15 5.19c-.311 1.596-.466 2.995-.466 4.196 0 1.575.362 2.859 1.088 3.854.725.994 2.061 1.491 4.009 1.491 2.114 0 3.522-.269 4.228-.808-.291 2.321-.87 4.3-1.741 5.937-.87 1.638-1.927 2.994-3.17 4.071a11.805 11.805 0 0 1-4.227 2.362 16.028 16.028 0 0 1-4.849.746c-2.446 0-4.497-.404-6.154-1.212-1.658-.809-2.984-1.886-3.979-3.232-.995-1.347-1.7-2.88-2.113-4.601a22.562 22.562 0 0 1-.622-5.314c0-2.154.3-4.672.901-7.553.601-2.88 1.253-5.833 1.958-8.858.704-3.024 1.357-5.946 1.958-8.765s.901-5.243.901-7.274c0-4.352-1.533-6.527-4.6-6.527a5.979 5.979 0 0 0-3.232.933c-.995.622-1.907 1.461-2.735 2.518-.829 1.057-1.575 2.3-2.238 3.729s-1.243 2.954-1.74 4.57l-8.641 40.841H416.2z\" />\n</symbol>"
});
var kaushan_result = browser_sprite_build_default.a.add(kaushan_symbol);
/* harmony default export */ var kaushan = (kaushan_symbol);
// CONCATENATED MODULE: ./src/icons/exo.svg


var exo_symbol = new browser_symbol_default.a({
  "id": "exo",
  "use": "exo-usage",
  "viewBox": "0 0 566.93 141.73",
  "content": "<symbol xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 566.93 141.73\" id=\"exo\">\n  <path d=\"M34.796 32.311c0-15.96 9.609-21.66 20.52-21.171l51.463 2.606v9.445H55.316c-8.468 0-8.468 4.723-8.468 9.12v32.571l53.417 1.629v9.608l-53.417 1.629v32.571c.163 8.631 5.374 8.469 10.097 8.469h49.834v9.282l-49.834 2.769c-10.749.651-22.149-2.117-22.149-20.52V32.311zM149.281 87.03l-31.269-43.157h14.983l23.451 33.223 24.103-33.223h14.983L163.938 87.52l30.291 42.831h-13.68l-23.777-32.897-23.777 32.897h-14.983l31.269-43.321zM237.548 43.059c29.151 0 38.108 10.912 38.108 45.274 0 32.083-8.957 42.832-38.108 42.832s-38.108-11.889-38.108-42.832c0-35.339 9.771-45.274 38.108-45.274zm0 76.054c17.588 0 26.057-2.28 26.057-30.78 0-30.942-7.003-33.222-26.057-33.222-18.24 0-26.057 2.117-26.057 33.222 0 28.826 9.283 30.78 26.057 30.78z\" />\n</symbol>"
});
var exo_result = browser_sprite_build_default.a.add(exo_symbol);
/* harmony default export */ var exo = (exo_symbol);
// CONCATENATED MODULE: ./src/icons/nickainley.svg


var nickainley_symbol = new browser_symbol_default.a({
  "id": "nickainley",
  "use": "nickainley-usage",
  "viewBox": "0 0 566.93 141.73",
  "content": "<symbol xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 566.93 141.73\" id=\"nickainley\">\n  <path d=\"M37.023 19.789c1.114 0 2.228.779 2.228 2.228 0 8.798 4.232 12.919 13.031 12.919 9.912 0 22.943-9.689 30.627-15.146a93.845 93.845 0 0 1 5.569-4.01c.334-.223.78-.334 1.225-.334.668 0 1.336.223 1.782.891.445.668.557 1.336.334 2.005L85.36 38.054c8.13-10.469 15.481-18.265 25.393-18.265 10.135 0 13.587 5.568 13.587 14.033.111 7.016-2.116 15.035-8.019 32.521-4.901 14.59-13.922 38.424-14.033 43.547 0 6.794 2.339 9.912 7.573 10.136 1.225 0 2.228 1.002 2.228 2.115a2.234 2.234 0 0 1-2.228 2.228c-8.019 0-12.028-5.457-12.028-14.479.111-5.902 7.017-23.5 14.256-44.995 5.792-17.263 7.908-25.059 7.908-31.073-.111-5.792-2.45-9.579-9.244-9.579-10.803 0-21.272 14.924-30.071 28.066-12.808 39.204-14.479 49.784-24.614 49.784-3.898 0-5.68-2.673-5.68-6.794 0-8.13 11.583-22.943 14.813-27.621l11.471-17.375 8.799-26.952c-9.244 6.571-22.164 15.926-33.189 15.926-10.692 0-18.377-6.905-17.375-17.375.112-1.445 1.114-2.113 2.116-2.113zm31.742 50.564c-3.23 4.343-13.811 18.487-14.033 25.059 0 1.448.445 2.228 1.448 2.228 5.123 0 7.128-5.234 15.036-30.628-.558.89-1.114 1.558-2.451 3.341zM147.176 77.703c0 .334-.111.668-.223 1.002-5.346 12.028-11.137 23.389-20.493 23.389-5.346 0-8.242-4.232-8.019-9.355.334-8.688 8.242-29.068 13.143-41.765a2.235 2.235 0 0 1 2.116-1.559c1.448 0 2.896 1.114 2.228 3.007-10.803 30.405-12.808 35.528-12.808 40.317 0 3.229 1.002 4.678 3.341 4.678 6.905 0 12.028-11.472 16.149-20.604.445-.891 1.336-1.447 2.228-1.447.334 0 .557.111.891.223.89.332 1.447 1.223 1.447 2.114zm-12.697-37.756c0-2.116 1.782-3.787 3.898-3.787a3.756 3.756 0 0 1 3.787 3.787 3.755 3.755 0 0 1-3.787 3.787c-2.115 0-3.898-1.671-3.898-3.787z\" />\n  <path d=\"M182.481 77.814c0 .334-.111.557-.223.891-6.794 15.147-14.812 23.389-27.732 23.389-8.13 0-13.477-6.126-13.477-15.258 0-17.375 13.922-37.422 25.282-37.422 6.348 0 9.467 4.343 9.467 10.469 0 5.012-2.451 10.135-5.012 10.135-1.448 0-2.339-.779-2.339-2.227 0-1.559 2.673-3.453 2.673-7.908 0-3.898-1.448-5.791-4.789-5.791-8.688 0-20.604 19.49-20.604 32.855 0 6.236 3.564 10.469 8.91 10.469 10.803 0 17.708-7.796 23.277-20.604a2.527 2.527 0 0 1 3.119-1.225c.892.445 1.448 1.336 1.448 2.227z\" />\n  <path d=\"M171.344 101.982c-1.225-.445-1.894-1.782-1.448-3.007 18.6-51.789 22.943-64.152 23.834-66.713.334-.891 1.225-1.448 2.116-1.448 1.782 0 2.896 1.67 2.339 3.119-9.689 27.287-16.372 46.332-23.834 66.49-.445 1.114-1.782 1.893-3.007 1.559zm55.13-24.279c0 .334-.111.668-.223 1.002-5.346 11.917-11.249 23.389-20.493 23.389-5.123 0-8.242-4.232-8.242-8.465 0-2.45.334-4.9.668-7.462.334-2.228.668-4.566.557-6.57-.111-2.896-1.114-5.013-4.9-5.013-3.23 0-4.9 3.342-7.017 3.342-2.45 0-3.007-2.45-1.336-4.121 1.448-1.448 11.694-10.469 26.507-24.057.668-.557 1.002-.557 1.56-.557 1.67 0 2.45 1.448 2.45 2.339 0 .668-.334 1.225-.78 1.671l-18.6 16.929c5.235.891 6.683 4.678 6.794 9.467 0 2.562-1.225 11.137-1.225 13.698 0 2.005 1.225 4.121 3.564 4.121 6.571 0 11.917-11.026 16.149-20.604.445-.891 1.225-1.447 2.116-1.447.334 0 .668.111 1.002.223.892.333 1.449 1.224 1.449 2.115z\" />\n  <path d=\"M298.311 72.245c-4.343 11.806-12.028 32.521-12.028 38.313 0 7.017 2.228 10.135 7.463 10.135 1.225 0 2.339 1.113 2.339 2.45 0 1.225-1.114 2.339-2.339 2.339-8.354-.223-12.251-5.681-12.251-14.924 0-6.794 8.019-27.955 12.474-39.872l.445-1.226h-23.611c-8.91 15.37-20.159 32.633-33.858 32.633-9.244 0-16.929-6.015-16.929-15.258 0-9.802 8.242-18.377 17.151-18.377 1.671 0 3.453.334 5.124 1.113.891.445 1.336 1.226 1.336 2.116 0 1.226-1.002 2.339-2.339 2.339-.557 0-2.45-.891-4.121-.891-6.459 0-12.474 6.794-12.474 13.699 0 6.348 5.569 10.469 12.251 10.469 11.249 0 20.827-15.146 28.4-27.844h-5.457c-1.337 0-2.451-1.113-2.451-2.338a2.473 2.473 0 0 1 2.451-2.451h8.242c2.784-4.9 5.457-9.912 8.13-14.701 5.235-9.689 9.912-18.488 13.922-23.723 3.229-3.898 7.573-6.571 11.472-6.571 6.683 0 8.91 4.232 8.91 10.357 0 8.353-4.232 20.047-7.351 28.846-2.451 6.908-4.344 12.031-4.901 13.367zm7.685-41.653c0-3.675-1.114-6.125-4.344-6.125-2.562 0-5.792 2.228-7.685 4.678-3.787 4.9-8.465 13.587-13.588 23.054-2.228 4.009-4.566 8.353-6.905 12.474h22.609l2.673-7.462c2.562-7.129 7.24-19.38 7.24-26.619zM332.173 77.703c0 .334-.111.668-.223 1.002-5.346 12.028-11.137 23.389-20.492 23.389-5.347 0-8.242-4.232-8.02-9.355.334-8.688 8.242-29.068 13.143-41.765a2.235 2.235 0 0 1 2.116-1.559c1.447 0 2.896 1.114 2.228 3.007-10.804 30.405-12.809 35.528-12.809 40.317 0 3.229 1.003 4.678 3.342 4.678 6.905 0 12.028-11.472 16.148-20.604.446-.891 1.337-1.447 2.228-1.447.334 0 .558.111.892.223.89.332 1.447 1.223 1.447 2.114zm-12.696-37.756c0-2.116 1.782-3.787 3.898-3.787s3.786 1.671 3.786 3.787c0 2.116-1.67 3.787-3.786 3.787s-3.898-1.671-3.898-3.787z\" />\n  <path d=\"M376.61 77.703c0 .334-.111.668-.223 1.002-7.573 16.817-12.808 23.389-20.381 23.389-5.347 0-8.02-3.898-8.02-9.355 0-10.469 8.688-23.389 8.688-33.078 0-3.229-1.448-5.792-5.791-5.792-6.794 0-15.259 15.036-18.822 24.502l-7.797 22.052c-.445 1.337-1.781 1.894-3.007 1.56-1.225-.445-1.894-1.671-1.447-3.007 5.791-16.038 12.808-36.197 17.151-48.114.334-1.002 1.225-1.559 2.228-1.559 1.67 0 2.784 1.67 2.228 3.118l-.892 2.228c3.23-3.341 6.683-5.458 10.358-5.458 8.019 0 10.469 4.566 10.469 10.469 0 9.912-8.688 24.502-8.688 33.078 0 3.229 1.003 4.678 3.342 4.678 5.234 0 9.244-5.902 16.038-20.604.445-.891 1.225-1.447 2.115-1.447.335 0 .669.111 1.003.223.892.444 1.448 1.224 1.448 2.115z\" />\n  <path d=\"M399.554 77.703c0 .334-.111.668-.223 1.002-6.459 13.922-12.696 23.389-22.942 23.389-5.347 0-8.242-4.01-8.242-9.355 0-3.229 1.114-7.239 3.898-16.038 3.007-8.798 6.348-18.154 9.578-27.397l5.791-16.929c.445-1.225 1.782-1.782 3.008-1.448 1.225.445 1.893 1.782 1.447 3.007l-5.791 16.929c-3.119 8.91-6.349 17.82-9.578 27.287-2.45 7.573-3.676 12.585-3.676 14.59 0 3.007 1.337 4.678 3.564 4.678 8.019 0 13.364-9.244 18.599-20.716.446-.779 1.337-1.336 2.228-1.336.335 0 .669.111 1.003.223.779.443 1.336 1.223 1.336 2.114z\" />\n  <path d=\"M434.86 77.814c0 .334-.111.557-.224.891-7.239 16.038-15.703 23.389-26.952 23.389-9.244 0-14.812-6.126-14.59-15.258.668-14.256 12.251-37.422 25.394-37.422 5.568 0 9.467 2.896 9.467 8.242 0 11.805-16.595 18.933-28.958 21.941-.779 2.896-1.113 5.012-1.225 7.351-.223 6.348 3.341 10.246 10.023 10.469 9.133.223 16.261-6.237 22.498-20.604a2.525 2.525 0 0 1 3.118-1.225c.892.444 1.449 1.335 1.449 2.226zm-11.583-20.158c0-3.007-2.339-3.564-4.789-3.564-7.686 0-14.145 11.583-17.709 20.158 9.244-2.896 22.498-8.353 22.498-16.594z\" />\n  <path d=\"M480.746 77.814c0 .334-.111.668-.223 1.002-6.905 16.261-16.149 26.618-32.41 31.407-5.346 15.259-12.251 23.166-20.27 23.277-6.683.111-11.026-4.232-11.026-10.803 0-7.017 5.457-12.14 18.822-14.59 2.784-.446 5.791-1.003 8.799-1.782l2.784-8.02c-2.562 2.45-5.346 3.787-8.465 3.787-9.467 0-12.14-6.349-12.14-11.917.223-5.123 2.784-11.249 7.128-22.609l6.237-16.929c.334-.891 1.225-1.448 2.116-1.448 1.894 0 2.784 1.671 2.228 3.119L438.2 69.237c-4.9 13.477-6.794 16.929-6.794 20.938 0 3.229 1.003 7.239 7.351 7.239 5.903 0 13.031-11.806 17.486-24.613 1.447-4.344.779-2.339 8.241-22.052.334-.891 1.226-1.56 2.116-1.56 1.337 0 2.896 1.56 2.339 3.23-1.782 4.566-4.789 12.251-8.353 21.94l-8.91 25.394-1.671 4.9c12.808-4.344 20.604-14.59 26.173-27.732.445-.891 1.226-1.447 2.116-1.447.334 0 .668.111 1.002.223.893.447 1.45 1.226 1.45 2.117zm-38.09 33.747c-2.116.445-4.121.891-6.126 1.225-10.246 1.782-14.59 4.678-15.035 9.802 0 3.897 2.562 6.348 6.349 6.236 6.013-.112 11.136-6.014 14.812-17.263z\" />\n</symbol>"
});
var nickainley_result = browser_sprite_build_default.a.add(nickainley_symbol);
/* harmony default export */ var nickainley = (nickainley_symbol);
// CONCATENATED MODULE: ./src/icons/sports.svg


var sports_symbol = new browser_symbol_default.a({
  "id": "sports",
  "use": "sports-usage",
  "viewBox": "0 0 566.93 141.73",
  "content": "<symbol xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 566.93 141.73\" id=\"sports\">\n  <path d=\"M105.507 58.378H83.21l-2.384-8.704H64.252l-3.1 2.388v4.898l2.623 2.031 28.736 4.779 13.95 10.871v23.894l-17.05 14.096h-35.89l-16.932-14.07V83.417h22.297l2.385 8.704h17.408l2.981-2.504v-5.604l-2.266-2.027-28.616-4.77-14.189-11.684V42.758l16.216-13.593h36.486l16.216 13.515v15.698zM195.171 69.467l-17.289 14.428h-27.543v8.346l9.062 2.385v18.005h-42.805V94.506l9.062-2.385V49.793l-9.062-2.385V29.165h61.287l17.289 14.547v25.755zm-44.833-19.793v13.712h17.051l3.1-2.67v-8.494l-3.1-2.548h-17.051zM264.922 105.178a1509.475 1509.475 0 0 1-9.062 7.452h-34.101l-18.004-14.904V43.712l17.408-14.547h35.413l17.409 14.547v54.014a1399.005 1399.005 0 0 0-9.063 7.452zm-33.385-55.504l-3.22 2.511v37.186l3.339 2.75h14.427l3.339-2.75V52.185l-3.22-2.511h-14.665zM284.475 112.63V94.506l9.062-2.385V49.793l-9.062-2.385V29.165h62.004l16.096 13.593v24.92L350.77 77.694l9.062 14.427 6.32 1.192v19.316h-22.656l-19.076-32.55h-6.201v12.042l9.062 2.385v18.124h-42.806zm33.744-49.244h16.932l2.861-2.405V52.08l-2.861-2.405h-16.932v13.711zM436.855 63.624l-2.385-15.143h-9.182v43.64l10.255 2.504v18.005h-45.071V94.625l10.135-2.39V48.481h-9.181l-2.385 15.143h-17.646V29.165h82.987v34.459h-17.527zM531.766 58.378h-22.297l-2.385-8.704H490.51l-3.1 2.388v4.898l2.623 2.031 28.735 4.779 13.951 10.871v23.894l-17.051 14.096h-35.89l-16.932-14.069V83.417h22.297l2.385 8.704h17.408l2.98-2.504v-5.604l-2.265-2.027-28.617-4.77-14.188-11.685V42.758l16.216-13.593h36.486l16.216 13.515v15.698z\" />\n</symbol>"
});
var sports_result = browser_sprite_build_default.a.add(sports_symbol);
/* harmony default export */ var sports = (sports_symbol);
// CONCATENATED MODULE: ./src/icons/lato.svg


var lato_symbol = new browser_symbol_default.a({
  "id": "lato",
  "use": "lato-usage",
  "viewBox": "0 0 566.93 141.73",
  "content": "<symbol xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 566.93 141.73\" id=\"lato\">\n  <path d=\"M91.831 115.77v6.241H36.379V20.504h7.389v95.265h48.063zM103.739 60.749c3.73-3.73 7.651-6.552 11.765-8.465 4.113-1.912 8.775-2.87 13.989-2.87 3.826 0 7.173.61 10.043 1.829 2.87 1.22 5.248 2.966 7.138 5.237 1.889 2.272 3.311 5.021 4.268 8.25.956 3.229 1.435 6.827 1.435 10.797v46.484h-2.726c-1.435 0-2.32-.669-2.654-2.009l-1.004-9.182a74.996 74.996 0 0 1-5.846 5.165 35.036 35.036 0 0 1-6.062 3.873c-2.105 1.053-4.375 1.865-6.815 2.439-2.439.573-5.118.86-8.034.86-2.439 0-4.806-.358-7.102-1.076-2.295-.717-4.34-1.816-6.133-3.3-1.793-1.481-3.228-3.383-4.304-5.702s-1.614-5.104-1.614-8.357c0-3.013.861-5.811 2.583-8.394 1.722-2.582 4.423-4.83 8.106-6.743 3.682-1.912 8.404-3.443 14.168-4.591 5.762-1.147 12.685-1.817 20.768-2.009v-7.46c0-6.6-1.424-11.681-4.269-15.244-2.846-3.562-7.066-5.344-12.661-5.344-3.443 0-6.374.479-8.788 1.435-2.416.957-4.46 2.009-6.134 3.156-1.674 1.148-3.038 2.2-4.089 3.156-1.052.958-1.937 1.435-2.654 1.435-.526 0-.957-.119-1.291-.359a3.211 3.211 0 0 1-.861-.933l-1.222-2.078zm41.966 26.757c-6.792.24-12.638.778-17.54 1.614-4.903.837-8.943 1.973-12.124 3.407-3.181 1.435-5.536 3.146-7.066 5.129-1.531 1.985-2.295 4.245-2.295 6.779 0 2.392.395 4.46 1.184 6.205.789 1.746 1.84 3.181 3.156 4.304 1.315 1.125 2.833 1.949 4.555 2.476s3.515.789 5.38.789c2.773 0 5.32-.299 7.64-.896a28.404 28.404 0 0 0 6.457-2.511c1.984-1.076 3.838-2.355 5.56-3.838s3.418-3.085 5.093-4.807V87.506zM193.911 123.158c-4.831 0-8.597-1.338-11.298-4.017-2.703-2.678-4.053-6.815-4.053-12.41v-48.78h-10.258c-.527 0-.957-.144-1.291-.43-.335-.287-.502-.693-.502-1.22v-2.654l12.195-.861 1.722-25.538a2.6 2.6 0 0 1 .574-1.147c.287-.334.693-.502 1.22-.502h3.228v27.26h22.525v5.093h-22.525v48.421c0 1.962.251 3.647.753 5.058s1.195 2.571 2.08 3.479a8.152 8.152 0 0 0 3.121 2.009c1.195.43 2.486.646 3.874.646 1.722 0 3.204-.251 4.448-.754 1.243-.502 2.319-1.051 3.228-1.649.908-.598 1.65-1.148 2.224-1.65.574-.502 1.028-.753 1.363-.753.382 0 .764.24 1.148.718l1.865 3.013c-1.818 2.009-4.125 3.622-6.922 4.842s-5.706 1.826-8.719 1.826zM251.586 49.486c5.117 0 9.696.873 13.738 2.618 4.041 1.747 7.448 4.221 10.222 7.425 2.773 3.205 4.889 7.066 6.349 11.585 1.458 4.52 2.187 9.577 2.187 15.172 0 5.596-.729 10.642-2.187 15.137-1.459 4.495-3.576 8.346-6.349 11.549-2.774 3.205-6.182 5.668-10.222 7.389-4.042 1.722-8.621 2.583-13.738 2.583-5.118 0-9.696-.861-13.737-2.583-4.042-1.721-7.46-4.184-10.258-7.389-2.797-3.203-4.926-7.054-6.384-11.549-1.459-4.495-2.188-9.541-2.188-15.137 0-5.595.729-10.652 2.188-15.172 1.458-4.52 3.587-8.381 6.384-11.585 2.798-3.204 6.217-5.678 10.258-7.425 4.041-1.745 8.62-2.618 13.737-2.618zm0 68.077c4.256 0 7.974-.729 11.155-2.188 3.18-1.458 5.834-3.551 7.962-6.276 2.127-2.727 3.718-6.014 4.771-9.864 1.051-3.849 1.578-8.165 1.578-12.948 0-4.734-.527-9.038-1.578-12.912-1.052-3.874-2.643-7.185-4.771-9.936-2.128-2.75-4.783-4.866-7.962-6.349-3.181-1.482-6.899-2.224-11.155-2.224-4.257 0-7.975.742-11.155 2.224-3.181 1.483-5.835 3.599-7.962 6.349-2.129 2.75-3.73 6.062-4.807 9.936-1.076 3.874-1.614 8.178-1.614 12.912 0 4.783.538 9.1 1.614 12.948 1.076 3.851 2.678 7.138 4.807 9.864 2.127 2.726 4.781 4.818 7.962 6.276 3.181 1.46 6.899 2.188 11.155 2.188z\" />\n</symbol>"
});
var lato_result = browser_sprite_build_default.a.add(lato_symbol);
/* harmony default export */ var lato = (lato_symbol);
// CONCATENATED MODULE: ./src/icons/courgette.svg


var courgette_symbol = new browser_symbol_default.a({
  "id": "courgette",
  "use": "courgette-usage",
  "viewBox": "0 0 566.93 141.73",
  "content": "<symbol xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 566.93 141.73\" id=\"courgette\">\n  <path d=\"M35.391 76.938l.058-1.698c.429-11.672 3.376-22.701 8.843-33.087 5.037-9.487 11.38-17.158 19.033-23.015 7.574-5.777 14.952-8.667 22.136-8.667 5.465 0 9.78 1.894 12.942 5.681 2.694 3.279 4.041 7.301 4.041 12.063 0 5.701-2.089 11.322-6.266 16.866-2.421 3.202-4.998 5.505-7.73 6.91-1.289.703-2.489 1.054-3.602 1.054s-2.138-.234-3.075-.703a9.37 9.37 0 0 1-2.459-1.757c-1.445-1.523-2.167-2.889-2.167-4.1 0-1.209.312-2.049.937-2.518 6.402-4.606 10.755-9.35 13.059-14.23.898-1.874 1.347-3.708 1.347-5.505 0-3.786-1.796-5.68-5.388-5.68-5.622 0-11.419 3.065-17.393 9.194-5.583 5.662-10.269 12.767-14.055 21.316-3.944 8.784-6.032 16.846-6.266 24.186l-.059 2.226c0 8.784 1.854 14.543 5.563 17.275 1.327.977 2.918 1.464 4.773 1.464 1.854 0 3.602-.234 5.241-.702a28.554 28.554 0 0 0 4.919-1.933c2.654-1.366 6.051-3.729 10.189-7.086 1.249-.976 2.284-.84 3.104.409.703 1.016 1.054 2.188 1.054 3.514 0 2.226-.303 3.739-.908 4.539-.605.801-1.64 1.747-3.104 2.84-1.464 1.094-3.25 2.108-5.358 3.046-4.919 2.187-9.741 3.279-14.465 3.279s-8.531-.577-11.419-1.728c-2.89-1.151-5.329-2.801-7.32-4.949-4.136-4.528-6.205-10.696-6.205-18.504zM103.322 97.551c-1.64-1.561-2.928-3.543-3.865-5.943-.937-2.401-1.425-5.241-1.464-8.521-.039-3.279.36-6.597 1.201-9.955a48.346 48.346 0 0 1 3.572-9.72 49.097 49.097 0 0 1 5.563-8.785c2.167-2.732 4.558-5.114 7.174-7.145 5.7-4.372 11.615-6.559 17.744-6.559 8.042 0 13.488 3.534 16.339 10.6 2.029 5.115 2.146 11.302.351 18.564-1.64 6.675-4.646 12.805-9.018 18.387-4.334 5.584-9.449 9.546-15.343 11.889-2.967 1.171-5.885 1.757-8.755 1.757s-5.427-.372-7.672-1.113c-2.245-.742-4.187-1.894-5.827-3.456zm11.185-28.402a56.572 56.572 0 0 0-2.781 8.901c-.684 3.046-1.006 5.925-.966 8.638.038 2.714.458 4.842 1.259 6.384.8 1.543 2.098 2.312 3.895 2.312 1.795 0 3.562-.614 5.3-1.844 1.737-1.23 3.426-2.86 5.065-4.891 1.64-2.029 3.182-4.372 4.626-7.027a67.08 67.08 0 0 0 3.807-8.315c2.381-6.285 3.533-11.868 3.455-16.748 0-4.294-.878-7.027-2.635-8.199-.703-.468-1.689-.703-2.958-.703-1.269 0-2.723.576-4.363 1.728-1.64 1.152-3.279 2.704-4.919 4.656-1.64 1.953-3.221 4.236-4.744 6.852a64.849 64.849 0 0 0-4.041 8.256zM214.179 89.997c.898 0 1.347.449 1.347 1.347 0 3.396-1.679 6.247-5.036 8.55-2.265 1.484-4.919 2.226-7.964 2.226-2.499 0-4.413-.586-5.739-1.757-2.382-2.108-3.572-4.686-3.572-7.73 0-3.865 1.62-9.779 4.861-17.744-6.013 8.121-10.229 13.519-12.649 16.192-2.421 2.675-4.529 4.754-6.325 6.236-3.904 3.202-7.437 4.803-10.6 4.803-4.841 0-8.062-2.089-9.663-6.267-.468-1.288-.703-2.762-.703-4.421s.283-3.514.849-5.563a59.064 59.064 0 0 1 2.196-6.413 190.599 190.599 0 0 1 2.928-6.852l3.162-7.027c4.06-9.018 5.563-14.366 4.509-16.045-.468-.741-1.347-1.483-2.635-2.226-.468-.272-.703-.751-.703-1.435 0-.683.283-1.337.849-1.962.565-.624 1.297-1.171 2.196-1.64 1.912-.897 3.826-1.347 5.739-1.347 1.913 0 3.367.205 4.363.615.996.41 1.806.928 2.431 1.552 1.288 1.289 1.932 2.714 1.932 4.275 0 1.562-.254 3.309-.761 5.241-.508 1.933-1.171 4.032-1.991 6.295a211.398 211.398 0 0 1-2.693 7.027c-2.694 6.325-4.509 10.502-5.446 12.532l-2.167 4.509c-1.21 2.694-1.815 4.589-1.815 5.681 0 1.094.176 1.865.527 2.313.351.449.985.674 1.903.674.917 0 1.981-.43 3.192-1.289 1.209-.858 2.537-2.01 3.982-3.455 1.444-1.443 2.947-3.112 4.509-5.007a127.25 127.25 0 0 0 4.568-5.886c2.928-3.981 5.075-7.182 6.442-9.603 8.276-14.641 12.688-22.292 13.235-22.956 1.249-1.678 2.527-2.518 3.835-2.518 1.308 0 2.45.146 3.426.439.975.293 1.815.713 2.518 1.259 1.64 1.21 2.167 2.421 1.581 3.63-9.526 19.873-14.661 32.365-15.402 37.479-.196 1.757-.292 2.968-.292 3.631 0 2.968.897 4.45 2.694 4.45 1.678 0 3.064-.302 4.158-.907 1.091-.603 1.833-.906 2.224-.906zM226.125 100.128c-.781-.586-1.405-1.239-1.874-1.962-.468-.722-.723-1.347-.761-1.874-.04-.527.068-1.171.322-1.933.253-.762.595-1.688 1.024-2.781 7.964-19.598 11.947-32.755 11.947-39.47-.117-1.874-.761-3.201-1.933-3.982l-1.171-.82c-.351-.272-.537-.751-.556-1.435-.02-.683.224-1.337.732-1.962.507-.624 1.171-1.171 1.991-1.64 1.678-.897 3.406-1.347 5.183-1.347 1.776 0 3.163.196 4.158.585.996.391 1.845.917 2.548 1.581 1.483 1.405 2.234 2.89 2.254 4.451a19.881 19.881 0 0 1-.527 4.744 54.765 54.765 0 0 1-1.318 4.714 145.46 145.46 0 0 1-1.522 4.393c-.508 1.386-.84 2.411-.996 3.074-.313 1.367-.43 2.226-.352 2.576.937-.819 1.502-1.619 1.698-2.4l2.284-4.334c5.075-9.135 10.033-15.187 14.875-18.154 1.405-.82 3.094-1.229 5.065-1.229 1.971 0 3.562.693 4.773 2.079 1.209 1.386 1.845 2.919 1.903 4.597.059 1.679-.059 3.074-.352 4.187s-.732 2.158-1.317 3.133c-1.289 2.187-2.851 3.279-4.685 3.279-.508 0-.977-.176-1.405-.526l-1.289-1.113c-1.289-1.132-2.528-1.698-3.719-1.698-1.191 0-2.635.781-4.333 2.342-1.698 1.562-3.465 3.572-5.3 6.032-6.169 8.16-11.206 17.294-15.109 27.406l-2.577 6.793c-.664 1.68-1.25 2.88-1.757 3.602-.508.723-1.259 1.084-2.254 1.084-.996 0-1.991-.187-2.987-.557s-1.882-.85-2.663-1.435zM309.107 88.767c-5.936 8.901-12.514 13.353-19.736 13.353-6.52 0-10.912-3.475-13.175-10.424-.782-2.381-1.171-5.31-1.171-8.784s.498-6.959 1.493-10.454a47.62 47.62 0 0 1 4.07-9.925c1.717-3.123 3.738-6.002 6.061-8.638s4.812-4.909 7.467-6.822c5.543-4.1 11.049-6.149 16.514-6.149 5.467 0 9.371 2.557 11.713 7.671.469-.507.898-1.025 1.289-1.552.389-.527.82-1.025 1.287-1.494 1.016-1.015 1.904-1.522 2.666-1.522.76 0 1.561.137 2.4.41.84.273 1.648.644 2.43 1.112 1.912 1.133 2.637 2.187 2.168 3.163-2.148 4.646-3.945 9.214-5.389 13.703l-8.666 27.64c-6.834 20.966-15.5 34.513-26.002 40.643-2.773 1.64-5.174 2.585-7.203 2.84-2.031.253-3.495.264-4.392.029a8.846 8.846 0 0 1-2.401-.996c-1.523-.976-2.284-1.854-2.284-2.635 0-1.367.908-2.206 2.723-2.519s3.719-1.045 5.709-2.195a32.749 32.749 0 0 0 5.682-4.188c7.378-6.832 12.96-17.589 16.747-32.267zm-17.539-20.32a57.064 57.064 0 0 0-2.43 8.637c-.586 2.948-.879 5.358-.879 7.232s.059 3.299.176 4.274c.117.977.352 1.836.703 2.577.779 1.64 1.932 2.459 3.455 2.459 1.521 0 3.023-.536 4.508-1.61 1.484-1.073 3.045-2.547 4.686-4.421 1.639-1.874 3.279-4.079 4.92-6.617a90.863 90.863 0 0 0 4.684-8.199c3.279-6.479 5.582-12.667 6.91-18.563-.195-1.092-.859-2.205-1.99-3.338-2.227-2.146-4.236-3.221-6.031-3.221-1.797 0-3.594.556-5.389 1.669-1.797 1.113-3.504 2.616-5.123 4.509-1.621 1.894-3.135 4.099-4.539 6.617a55.976 55.976 0 0 0-3.661 7.995zM338.563 81.037c.156-3.396.723-6.647 1.698-9.75a47.115 47.115 0 0 1 3.924-9.019 52.723 52.723 0 0 1 5.769-8.257c2.205-2.596 4.597-4.87 7.174-6.823 5.582-4.177 11.224-6.266 16.924-6.266 6.676 0 11.127 2.752 13.353 8.257.78 1.874 1.15 4.09 1.112 6.647-.039 2.557-.527 4.919-1.464 7.086a20.572 20.572 0 0 1-3.895 5.914c-1.66 1.777-3.631 3.368-5.915 4.773-2.283 1.405-4.772 2.597-7.466 3.572-5.545 1.952-11.479 2.967-17.803 3.045-.157.547-.255 1.367-.293 2.46-.039 1.093.078 2.312.352 3.66.272 1.347.741 2.547 1.405 3.602 1.405 2.342 3.435 3.514 6.09 3.514 4.529 0 8.94-1.327 13.235-3.982 1.522-.897 2.762-1.825 3.719-2.782.956-.956 1.786-1.435 2.488-1.435.703 0 1.318.42 1.845 1.259.527.841.791 1.786.791 2.841 0 2.069-.586 3.865-1.757 5.388-4.919 4.919-12.239 7.379-21.961 7.379-5.738 0-10.346-1.718-13.82-5.153-3.904-3.905-5.739-9.215-5.505-15.93zm34.201-32.326c-4.1 0-8.043 2.811-11.829 8.433-3.202 4.842-5.778 10.58-7.73 17.216 6.52-.663 12.181-3.239 16.982-7.729 4.412-4.217 6.618-8.258 6.618-12.123s-1.348-5.797-4.041-5.797zM428.631 86.19c1.132 0 1.698.761 1.698 2.283 0 1.289-.391 2.539-1.171 3.748-1.054 2.265-3.162 4.412-6.324 6.442-3.593 2.304-7.203 3.455-10.834 3.455-6.286 0-10.269-2.812-11.946-8.434-1.991-6.676.995-20.827 8.959-42.456-4.489-.39-6.93-1.171-7.319-2.342a3.597 3.597 0 0 1-.176-1.142c0-.41.185-.888.556-1.435a8.254 8.254 0 0 1 1.436-1.581c1.365-1.132 2.752-1.698 4.157-1.698h4.627c4.216-9.876 7.222-15.499 9.018-16.866a4.766 4.766 0 0 1 2.87-.937c1.054 0 1.933.137 2.635.41a5.843 5.843 0 0 1 1.874 1.171c1.249 1.171 1.874 2.48 1.874 3.924 0 .781-.234 1.679-.702 2.694l-4.334 9.428h1.405c2.421 0 4.372-.019 5.856-.059l3.338-.059a55.864 55.864 0 0 1 2.782-.058c1.112 0 1.669.41 1.669 1.229 0 5.153-6.091 7.73-18.271 7.73h-.469l-3.982 10.307c-4.489 12.18-6.734 20.711-6.734 25.591 0 1.367.312 2.431.938 3.191.624.762 1.795 1.142 3.514 1.142 1.717 0 3.279-.292 4.685-.878s2.636-1.239 3.689-1.962a61.312 61.312 0 0 0 2.723-1.962c.759-.583 1.412-.876 1.959-.876zM471.673 86.19c1.132 0 1.698.761 1.698 2.283 0 1.289-.391 2.539-1.171 3.748-1.054 2.265-3.162 4.412-6.324 6.442-3.593 2.304-7.203 3.455-10.834 3.455-6.286 0-10.269-2.812-11.946-8.434-1.991-6.676.995-20.827 8.959-42.456-4.489-.39-6.93-1.171-7.319-2.342a3.597 3.597 0 0 1-.176-1.142c0-.41.185-.888.556-1.435a8.254 8.254 0 0 1 1.436-1.581c1.365-1.132 2.752-1.698 4.157-1.698h4.627c4.216-9.876 7.222-15.499 9.018-16.866a4.766 4.766 0 0 1 2.87-.937c1.054 0 1.933.137 2.635.41a5.843 5.843 0 0 1 1.874 1.171c1.249 1.171 1.874 2.48 1.874 3.924 0 .781-.234 1.679-.702 2.694l-4.334 9.428h1.405c2.421 0 4.372-.019 5.856-.059l3.338-.059a55.864 55.864 0 0 1 2.782-.058c1.112 0 1.669.41 1.669 1.229 0 5.153-6.091 7.73-18.271 7.73h-.469l-3.982 10.307c-4.489 12.18-6.734 20.711-6.734 25.591 0 1.367.312 2.431.938 3.191.624.762 1.795 1.142 3.514 1.142 1.717 0 3.279-.292 4.685-.878s2.636-1.239 3.689-1.962a61.312 61.312 0 0 0 2.723-1.962c.759-.583 1.412-.876 1.959-.876zM481.219 81.037c.156-3.396.723-6.647 1.698-9.75a47.115 47.115 0 0 1 3.924-9.019 52.723 52.723 0 0 1 5.769-8.257c2.205-2.596 4.597-4.87 7.174-6.823 5.582-4.177 11.224-6.266 16.924-6.266 6.676 0 11.127 2.752 13.353 8.257.78 1.874 1.15 4.09 1.112 6.647-.039 2.557-.527 4.919-1.464 7.086a20.572 20.572 0 0 1-3.895 5.914c-1.66 1.777-3.631 3.368-5.915 4.773-2.283 1.405-4.772 2.597-7.466 3.572-5.545 1.952-11.479 2.967-17.803 3.045-.157.547-.255 1.367-.293 2.46-.039 1.093.078 2.312.352 3.66.272 1.347.741 2.547 1.405 3.602 1.405 2.342 3.435 3.514 6.09 3.514 4.529 0 8.94-1.327 13.235-3.982 1.522-.897 2.762-1.825 3.719-2.782.956-.956 1.786-1.435 2.488-1.435.703 0 1.318.42 1.845 1.259.527.841.791 1.786.791 2.841 0 2.069-.586 3.865-1.757 5.388-4.919 4.919-12.239 7.379-21.961 7.379-5.738 0-10.346-1.718-13.82-5.153-3.905-3.905-5.74-9.215-5.505-15.93zm34.2-32.326c-4.1 0-8.043 2.811-11.829 8.433-3.202 4.842-5.778 10.58-7.73 17.216 6.52-.663 12.181-3.239 16.982-7.729 4.412-4.217 6.618-8.258 6.618-12.123s-1.348-5.797-4.041-5.797z\" />\n</symbol>"
});
var courgette_result = browser_sprite_build_default.a.add(courgette_symbol);
/* harmony default export */ var courgette = (courgette_symbol);
// CONCATENATED MODULE: ./src/icons/sensei.svg


var sensei_symbol = new browser_symbol_default.a({
  "id": "sensei",
  "use": "sensei-usage",
  "viewBox": "0 0 566.93 141.73",
  "content": "<symbol xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 566.93 141.73\" id=\"sensei\">\n  <path d=\"M86.439 25.025c0 2.499-.899 4.646-2.698 6.445s-4.047 2.698-6.745 2.698a7.564 7.564 0 0 1-3.147-.675c-1-.449-2.3-1.223-3.897-2.323-.501-.397-1.3-.799-2.398-1.199 0 3.598.349 6.521 1.049 8.769.698 2.249 2.099 5.872 4.197 10.867 4.295 10.192 7.693 19.537 10.192 28.029 2.497 8.495 3.748 16.289 3.748 23.384 0 7.396-.625 13.241-1.874 17.537-1.25 4.295-3.623 7.518-7.12 9.668-3.499 2.147-8.645 3.223-15.438 3.223-4.598 0-8.596-1.199-11.992-3.598-3.398-2.398-5.096-5.396-5.096-8.993 0-2.398.848-4.546 2.548-6.445 1.698-1.897 3.897-2.849 6.595-2.849 2.497 0 4.595.802 6.295 2.398.398-2.398.6-4.745.6-7.045 0-2.896-.55-5.644-1.649-8.244-2.398-6.693-5.897-14.438-10.492-23.232l-2.249-4.497c-1.101-1.896-2.349-4.895-3.747-8.993-.401-1.199-1.101-2.998-2.099-5.396-1.7-3.896-2.998-7.318-3.897-10.268-.899-2.946-1.349-5.869-1.349-8.769 0-2.496.6-5.22 1.798-8.169 1.199-2.946 2.822-5.419 4.872-7.419 2.047-1.998 4.272-2.998 6.67-2.998 1.098 0 2.248.251 3.447.749 1.398-1.997 3.246-3.62 5.546-4.871 2.298-1.248 4.595-1.874 6.895-1.874 1.398 0 3.321.276 5.771.825 2.447.55 4.321 1.124 5.621 1.724 2.796 1.3 5.171 2.923 7.12 4.871 1.948 1.948 2.923 4.174 2.923 6.67zM132.003 91.276c.398 2.099 1.098 3.897 2.099 5.396.798 1.199 2.548 2.45 5.246 3.748 2.597 1.499 4.796 2.349 6.595 2.548l4.347.3c.3-.3.848-.648 1.649-1.049l.899-.75c1.398-.998 3.047-1.499 4.946-1.499 3.396 0 6.045 1.35 7.944 4.047.998 1.401 1.499 3.05 1.499 4.946 0 3.298-1.349 5.897-4.047 7.795l-1.049.749-2.249 1.499c-2.199 1.4-4.796 2.248-7.794 2.548-.6.099-1.551.15-2.848.15-.899 0-2.649-.101-5.246-.3-.3-.101-.75-.15-1.349-.15-1.4.799-2.949 1.199-4.646 1.199h-2.548c-1.3 0-3.349-.101-6.146-.3-2.6-.101-5.646-.85-9.143-2.248-3.698-1.298-7.146-3.497-10.343-6.595-3.297-3.097-5.497-6.495-6.595-10.193-.801-2.896-1.199-5.644-1.199-8.243l.15-7.944c0-3.598-.052-5.846-.15-6.745-.202-2.398.398-6.544 1.798-12.441 1.398-5.794 2.748-10.092 4.047-12.891 1.199-2.496 2.297-4.546 3.297-6.146a25.588 25.588 0 0 1 3.148-4.196c1.798-2.099 3.846-3.598 6.146-4.497 1.499-.698 3.396-1.049 5.696-1.049.6-.398 1.049-.649 1.349-.75 1.998-.899 3.597-1.398 4.796-1.499l5.696-.6c.3-.199.899-.199 1.799 0 .899.202 1.398.251 1.499.15h.15l1.199.3c.698.3 1.099.4 1.199.3l1.199.449 1.199.6 1.049.6c.499.4.848.6 1.049.6 3.796 2 6.844 4.747 9.144 8.244a24.667 24.667 0 0 1 4.497 10.343c.6 2.799.899 5.846.899 9.143 0 4.197-.15 6.895-.45 8.094-.101 1.6-.6 3.248-1.499 4.946-1.101 2.3-2.649 3.848-4.646 4.646-1.899.899-3.799 1.349-5.696 1.349h-11.991l-6.745-.149h-.6c.099 2.098.35 3.948.75 5.545zm6.596-23.832h5.846c0-2.398-.15-4.396-.45-5.995-.3-1.099-.85-2.347-1.649-3.747-.6-.799-1.499-1.598-2.698-2.398l-1.649-.75-2.548.3-.75.899c-1.101 1.6-1.948 3.998-2.548 7.195-.202.899-.4 2.349-.6 4.347h1.049l5.997.149zM248.617 85.131c0 8.394-.201 17.387-.6 26.98-.101 2.499-1.101 4.571-2.998 6.22-1.899 1.649-3.949 2.474-6.146 2.474-2.899 0-5.223-.975-6.97-2.923-1.75-1.948-2.524-4.271-2.323-6.97.398-7.495.6-15.388.6-23.683 0-7.593-.276-13.015-.824-16.263-.551-3.246-1.675-5.471-3.373-6.67-4.998 2.998-10.544 8.445-16.638 16.337.3 4.398.6 7.896.899 10.492.199 3.998.3 6.197.3 6.596l-.3 12.74-1.649 8.395c-2.098 3.196-4.796 4.796-8.094 4.796-2.899 0-5.422-.85-7.569-2.548-2.15-1.698-3.574-3.946-4.272-6.745.098.201-.651-2.548-2.249-8.244-1.799-6.394-2.998-12.415-3.597-18.062-.6-5.645-.899-12.015-.899-19.111 0-6.794.049-12.09.15-15.889.199-4.396 1.098-8.117 2.698-11.166 1.598-3.048 3.846-4.97 6.745-5.771 1.199-.199 2.047-.3 2.548-.3 1.199 0 2.248.202 3.147.6.998-.199 2.148-.3 3.448-.3 2.497 0 4.696.899 6.595 2.698 1.798 1.799 2.698 3.949 2.698 6.445 0 2-.55 3.698-1.648 5.097 4.895-5.195 10.44-8.893 16.638-11.092 7.293 0 12.539 1.175 15.738 3.522 3.197 2.349 5.221 5.822 6.071 10.417.848 4.598 1.424 12.092 1.724 22.483.098 1.8.15 4.948.15 9.445zM283.691 120.355c-2.998.4-5.198.599-6.596.599-7.495 0-11.242-2.946-11.242-8.843 0-2.197.773-4.221 2.324-6.071 1.548-1.848 3.571-2.923 6.07-3.223l1.499-.149c.199-.799.3-1.349.3-1.648 0-1.298-.426-3.272-1.274-5.921-.85-2.646-1.824-5.42-2.923-8.319-2.6-7.094-4.623-13.19-6.07-18.286-1.45-5.097-2.173-10.092-2.173-14.989 0-2.398.848-4.846 2.548-7.345 1.698-2.497 3.872-4.595 6.521-6.295 2.646-1.698 5.27-2.549 7.869-2.549 1.199 0 2.297.15 3.297.45 3.197-.199 6.346-.3 9.443-.3 2.498 0 4.646.899 6.445 2.698 1.799 1.798 2.699 3.948 2.699 6.444 0 2.499-.9 4.673-2.699 6.521-1.799 1.851-3.947 2.773-6.445 2.773-4.098 0-6.496.051-7.193.149-.102.201-.15.45-.15.75 0 2.6.398 4.871 1.199 6.819.799 1.949 2.047 4.272 3.746 6.971 2.598 4.397 4.621 8.718 6.07 12.964 1.449 4.249 2.174 9.968 2.174 17.163 0 5.597-1.25 10.094-3.746 13.49-2.501 3.399-6.398 5.449-11.693 6.147zM347.693 91.276c.398 2.099 1.099 3.897 2.099 5.396.799 1.199 2.548 2.45 5.246 3.748 2.598 1.499 4.796 2.349 6.595 2.548l4.347.3c.3-.3.849-.648 1.649-1.049l.899-.75c1.398-.998 3.047-1.499 4.946-1.499 3.396 0 6.045 1.35 7.944 4.047.997 1.401 1.499 3.05 1.499 4.946 0 3.298-1.35 5.897-4.048 7.795l-1.049.749-2.248 1.499c-2.199 1.4-4.797 2.248-7.795 2.548-.6.099-1.55.15-2.848.15-.899 0-2.648-.101-5.246-.3-.3-.101-.749-.15-1.349-.15-1.401.799-2.949 1.199-4.647 1.199h-2.548c-1.3 0-3.349-.101-6.146-.3-2.6-.101-5.646-.85-9.144-2.248-3.697-1.298-7.146-3.497-10.342-6.595-3.298-3.097-5.497-6.495-6.596-10.193-.801-2.896-1.199-5.644-1.199-8.243l.15-7.944c0-3.598-.052-5.846-.15-6.745-.201-2.398.398-6.544 1.799-12.441 1.398-5.794 2.747-10.092 4.047-12.891 1.199-2.496 2.298-4.546 3.298-6.146a25.582 25.582 0 0 1 3.147-4.196c1.799-2.099 3.846-3.598 6.146-4.497 1.499-.698 3.396-1.049 5.696-1.049.6-.398 1.049-.649 1.349-.75 1.998-.899 3.598-1.398 4.797-1.499l5.695-.6c.3-.199.899-.199 1.799 0 .899.202 1.398.251 1.499.15h.15l1.199.3c.697.3 1.098.4 1.198.3l1.199.449 1.199.6 1.05.6c.499.4.848.6 1.049.6 3.797 2 6.844 4.747 9.144 8.244a24.655 24.655 0 0 1 4.497 10.343c.599 2.799.898 5.846.898 9.143 0 4.197-.149 6.895-.449 8.094-.101 1.6-.6 3.248-1.499 4.946-1.101 2.3-2.648 3.848-4.646 4.646-1.899.899-3.799 1.349-5.696 1.349h-11.991l-6.745-.149h-.599c.1 2.098.351 3.948.751 5.545zm6.595-23.832h5.846c0-2.398-.149-4.396-.449-5.995-.3-1.099-.851-2.347-1.648-3.747-.6-.799-1.499-1.598-2.698-2.398l-1.649-.75-2.548.3-.749.899c-1.101 1.6-1.949 3.998-2.549 7.195-.201.899-.4 2.349-.6 4.347h1.05l5.994.149zM423.536 110.013c0 7.194-4.147 10.792-12.441 10.792-3.499 0-6.295-.772-8.394-2.323-2.099-1.548-3.147-4.37-3.147-8.469l.149-11.392c.199-8.993.3-15.688.3-20.086 0-5.295-.149-12.74-.449-22.333l-.15-3.598c-1.199-1.698-1.799-3.497-1.799-5.396 0-2.496.899-4.67 2.698-6.52 1.799-1.849 3.946-2.773 6.445-2.773h7.345c.799 0 1.948-.023 3.447-.075 1.499-.049 2.572.15 3.223.6.649.45 1.174 1.725 1.574 3.822.3 2.099.449 3.998.449 5.696 0 1.101-.051 1.851-.149 2.248.3.801.449 2.398.449 4.797l.45 55.01zm-8.844-99.078c-1.4-.997-3.099-1.499-5.097-1.499-2.997 0-5.546 1.301-7.644 3.897-2.099 2.6-3.148 5.448-3.148 8.544 0 3.199 1.447 5.946 4.347 8.244 2.897 2.3 5.944 3.447 9.144 3.447 2.897 0 5.494-1.173 7.795-3.522 2.297-2.347 3.447-5.221 3.447-8.618 0-2.698-.851-5.021-2.548-6.971-1.701-1.948-3.799-3.122-6.296-3.522z\" />\n</symbol>"
});
var sensei_result = browser_sprite_build_default.a.add(sensei_symbol);
/* harmony default export */ var sensei = (sensei_symbol);
// CONCATENATED MODULE: ./src/icons/greatvibes.svg


var greatvibes_symbol = new browser_symbol_default.a({
  "id": "greatvibes",
  "use": "greatvibes-usage",
  "viewBox": "0 0 566.93 141.73",
  "content": "<symbol xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 566.93 141.73\" id=\"greatvibes\">\n  <path d=\"M55.723 47.119c-3.347 7.253-5.021 13.737-5.021 19.454 0 11.785 4.043 19 12.133 21.65 2.369.628 4.793.941 7.269.941a30.73 30.73 0 0 0 7.479-.941c5.02-1.323 9.518-3.311 13.492-5.962 3.974-2.648 6.484-5.193 7.53-7.635 2.788-6.484 5.787-9.727 8.995-9.727 1.604 0 2.684.907 3.243 2.72.278.698.348 1.464.209 2.301-.698 5.439-2.196 10.825-4.498 16.16-2.301 5.334-5.543 11.452-9.727 18.355 8.367.068 16.002.976 22.905 2.719 1.464.349 2.196.837 2.196 1.465 0 .766-1.012.905-3.033.418-4.811-1.255-11.75-1.883-20.813-1.883h-2.719c-4.254 6.135-9.92 11.558-16.996 16.264-7.078 4.707-13.962 7.932-20.656 9.675-3.697.976-6.834 1.465-9.413 1.465-2.581 0-4.743-.314-6.485-.941-5.089-1.883-7.635-4.358-7.635-7.427 0-.906.245-1.882.732-2.928 1.883-4.184 6.833-8.054 14.852-11.609 6.066-2.72 12.463-4.568 19.192-5.544 6.728-.977 14.277-1.534 22.644-1.673 5.159-8.718 8.681-17.292 10.563-25.729l.418-1.778c-3.347 3.208-7.13 6.05-11.348 8.524-4.22 2.476-7.896 4.201-11.034 5.177-5.021 1.605-9.152 2.406-12.394 2.406s-6.084-.453-8.524-1.36c-4.463-1.532-8.089-4.602-10.877-9.203-2.999-4.88-4.498-10.703-4.498-17.467 0-6.763 1.778-14.015 5.334-21.755-4.602-4.741-6.903-9.779-6.903-15.113s2.161-10.407 6.485-15.218c.836-.905 1.446-1.237 1.83-.994.382.245.226.854-.471 1.83-3.138 4.184-4.707 8.403-4.707 12.656 0 4.881 1.812 9.449 5.439 13.701.418-.905 1.185-2.265 2.301-4.079 5.439-8.924 12.829-15.757 22.173-20.5 7.321-3.765 14.397-5.648 21.231-5.648 1.883 0 3.766.141 5.648.418 8.995 1.396 15.061 5.09 18.199 11.086 1.255 2.371 1.883 4.934 1.883 7.688 0 2.755-.873 5.7-2.615 8.838-3.906 6.764-10.739 11.505-20.5 14.224a57.59 57.59 0 0 1-15.793 2.196c-11.295-.001-20.535-2.406-27.715-7.217zm-16.212 79.802c0 1.951 1.673 3.276 5.02 3.975 1.115.277 2.335.418 3.661.418 4.95 0 11.226-1.777 18.827-5.334 9.622-4.393 17.257-10.634 22.905-18.722-7.321.21-13.737.767-19.244 1.674-7.949 1.185-15.516 4.079-22.696 8.681-5.649 3.624-8.473 6.728-8.473 9.308zM99.023 13.127c-5.998 0-12.342 2.023-19.036 6.066-9.831 5.857-17.466 14.26-22.905 25.206 3.277 2.51 7.06 4.288 11.348 5.334s7.722 1.569 10.302 1.569c14.711 0 25.834-3.938 33.364-11.818 3.765-4.043 5.648-8.088 5.648-12.133 0-6.414-3.592-10.737-10.773-12.969-2.65-.837-5.299-1.255-7.948-1.255z\" />\n  <path d=\"M132.281 53.499c0 3.138-1.987 6.102-5.961 8.89 1.394.07 3.259.104 5.596.104 2.335 0 5.282-.173 8.838-.523.139.209.209.768.209 1.673 0 .907-.418 2.249-1.255 4.027a153.822 153.822 0 0 1-2.249 4.603l-1.882 3.66a75.206 75.206 0 0 0-1.987 4.235 65.484 65.484 0 0 0-1.83 4.603c-1.744 5.3-1.464 7.948.836 7.948 2.929 0 7.251-5.82 12.969-17.466.487-.906.889-1.256 1.203-1.047.314.21.471.471.471.785 0 .313-.454 1.396-1.359 3.242a177.713 177.713 0 0 1-2.929 5.7c-1.046 1.953-2.685 4.22-4.916 6.798-2.651 3.208-5.195 4.812-7.635 4.812-2.719 0-4.602-1.638-5.648-4.916-.209-.627-.314-1.568-.314-2.823 0-1.256.4-2.929 1.203-5.021.801-2.092 2.074-4.637 3.817-7.636 1.742-2.996 2.719-4.758 2.929-5.281a4.075 4.075 0 0 0 .313-1.517c0-2.161-2.79-3.311-8.367-3.452l-1.255 3.347c-4.393 11.505-8.612 19.21-12.655 23.114-.696.628-1.046.418-1.046-.628 0-.209.07-.452.209-.731 3.904-5.159 7.285-11.26 10.145-18.304 2.858-7.042 4.846-13.735 5.962-20.081.418-2.161 1.394-3.242 2.928-3.242 1.533 0 2.649.977 3.347 2.928.209.63.313 1.362.313 2.199z\" />\n  <path d=\"M149.957 79.333c-.977 2.371-1.464 5.02-1.464 7.948 0 1.953.435 3.504 1.308 4.654.871 1.15 2.108 1.726 3.713 1.726 6.344 0 12.097-5.961 17.257-17.885.487-1.114 1.08-1.603 1.778-1.464.278.07.418.245.418.522 0 .28-.784 2.11-2.353 5.491-1.569 3.383-3.156 6.118-4.759 8.21-3.556 4.882-7.949 7.321-13.179 7.321-2.79 0-5.161-.905-7.112-2.719-1.953-1.812-2.929-4.288-2.929-7.426s.749-6.467 2.249-9.988c1.499-3.521 3.538-6.799 6.118-9.832 2.579-3.033 5.543-5.246 8.89-6.641 1.604-.696 3.138-1.046 4.602-1.046s2.824.418 4.079 1.255c1.185.977 1.778 2.058 1.778 3.242 0 4.184-2.51 8.194-7.53 12.028-1.535 1.187-3.697 2.249-6.485 3.19-2.789.943-4.915 1.414-6.379 1.414zm17.571-16.735c0-1.394-.559-2.092-1.673-2.092-1.953 0-4.916 2.406-8.89 7.217-2.372 2.928-4.463 6.207-6.275 9.832 1.185 0 2.91-.419 5.177-1.256 2.265-.836 4.236-1.951 5.909-3.346 3.833-3.277 5.752-6.728 5.752-10.355z\" />\n  <path d=\"M197.543 75.619c-2.301 4.43-3.679 7.74-4.131 9.937-.454 2.196-.68 3.975-.68 5.334s.523 2.04 1.569 2.04c1.324 0 2.963-1.22 4.916-3.661 2.858-3.556 5.682-8.192 8.472-13.91.278-.628.591-.976.941-1.046.558-.209.837 0 .837.627 0 .35-.104.769-.314 1.256-6.416 12.969-11.818 19.453-16.211 19.453-2.023 0-3.661-.976-4.916-2.929-.627-1.046-.941-2.439-.941-4.184 0-1.742.348-3.869 1.046-6.38-5.579 8.995-10.39 13.492-14.434 13.492-1.116 0-2.127-.348-3.033-1.046-2.092-1.464-3.138-3.975-3.138-7.53 0-6.833 2.963-13.77 8.89-20.813 3.347-3.904 7.46-6.449 12.341-7.635 1.324-.348 2.579-.523 3.766-.523 3.206 0 5.925 1.116 8.158 3.347.696.768.905 1.5.627 2.196-.279.698-.873.977-1.778.837-.768-2.51-2.441-3.766-5.021-3.766-2.999 0-6.693 2.372-11.086 7.112-2.51 2.79-4.847 6.067-7.007 9.832-2.72 4.533-4.079 8.158-4.079 10.877 0 2.72.871 4.079 2.615 4.079 4.184 0 9.657-6.414 16.42-19.244 1.324-2.579 2.44-4.341 3.347-5.282.905-.941 2.056-1.412 3.451-1.412.278 0 .994.104 2.144.313 1.151.209 2.004.245 2.562.105-1.253 1.256-3.031 4.097-5.333 8.524z\" />\n  <path d=\"M205.073 87.072c0-5.787 2.788-15.479 8.367-29.076h-5.438c-.35 0-.575-.191-.68-.575a1.657 1.657 0 0 1 .104-1.15c.173-.382.435-.575.784-.575h6.275c2.51-5.507 4.846-10.109 7.008-13.806 2.16-3.695 4.147-6.187 5.961-7.478 1.812-1.29 3.12-1.935 3.922-1.935.801 0 1.376.07 1.726.209 1.603.768 2.406 2.353 2.406 4.759 0 2.405-.803 5.318-2.406 8.733a244.472 244.472 0 0 1-4.707 9.518h5.021c.348 0 .575.193.68.575.104.384.069.768-.104 1.15-.175.384-.437.575-.785.575h-6.066c-3.835 6.485-8.472 12.237-13.911 17.258l-2.406 10.668a11.853 11.853 0 0 0-.313 2.667c0 .873.244 1.762.732 2.667.487.907 1.255 1.359 2.301 1.359 1.185 0 2.51-.418 3.974-1.255 3.347-2.51 7.042-7.773 11.087-15.793.278-.628.609-1.01.993-1.15.383-.14.61-.052.68.261.068.314-.036.82-.314 1.518-2.301 4.811-4.115 8.228-5.438 10.249-3.766 6.066-7.776 9.1-12.028 9.1-2.162 0-3.94-.801-5.334-2.405-1.394-1.605-2.091-3.626-2.091-6.068zm19.663-29.076h-4.916c-.837 1.953-2.72 6.589-5.648 13.911 3.766-3.905 7.286-8.541 10.564-13.911zm1.36-2.301c4.602-8.227 6.903-13.945 6.903-17.153 0-1.394-.245-2.092-.732-2.092-.768 0-1.935 1.116-3.504 3.347-1.569 2.232-4.202 7.531-7.896 15.898h5.229zM307.151 105.48c-.628 0-1.255-.07-1.883-.21-3.347-.627-5.021-3.592-5.021-8.89 0-8.576 4.323-23.184 12.97-43.823 3.347-7.809 5.821-15.409 7.426-22.801.628-2.858.941-5.141.941-6.851 0-1.708-.07-3.049-.209-4.027-.35-3.067-1.501-5.193-3.452-6.38-3.487-1.883-7.392-2.824-11.714-2.824-4.533 0-9.309 1.116-14.329 3.347a78.36 78.36 0 0 0-14.171 8.158c-4.429 3.208-8.456 7.025-12.081 11.453-3.626 4.429-6.328 9.065-8.105 13.91-1.778 4.847-2.667 9.222-2.667 13.126 0 1.605.139 3.138.418 4.602 1.114 4.811 3.206 8.403 6.275 10.773 3.067 2.371 6.693 3.556 10.877 3.556 5.857 0 11.348-2.579 16.473-7.74 5.125-5.159 7.688-10.632 7.688-16.421 0-3.138-.628-5.402-1.883-6.798-1.255-1.394-2.546-2.092-3.87-2.092-1.325 0-2.65.193-3.974.575-1.326.384-1.987.35-1.987-.104 0-.453.801-1.046 2.405-1.778a11.955 11.955 0 0 1 5.021-1.098c1.742 0 3.347.523 4.811 1.569 2.72 2.092 4.079 5.265 4.079 9.518 0 4.254-1.621 8.524-4.863 12.812-3.242 4.288-7.234 7.74-11.976 10.354-4.742 2.615-9.431 3.922-14.067 3.922-4.638 0-8.942-1.689-12.917-5.072-3.975-3.381-6.625-7.931-7.949-13.649-.348-1.673-.523-3.452-.523-5.334 0-4.393 1.081-9.168 3.243-14.329 2.16-5.159 5.282-9.952 9.361-14.381 4.079-4.427 8.488-8.122 13.23-11.086a81.55 81.55 0 0 1 15.061-7.374c5.299-2.021 10.284-3.033 14.957-3.033 4.67 0 8.924.732 12.76 2.196 6.763 2.928 10.146 9.135 10.146 18.617 0 6.974-2.511 15.62-7.531 25.938-3.138 6.416-5.927 13.319-8.367 20.709-3.626 10.947-5.438 18.549-5.438 22.801 0 3.206 1.08 4.811 3.242 4.811 4.323 0 11.888-5.613 22.696-16.839 7.6-7.878 13.561-16.525 17.885-25.938 2.788-5.996 4.184-11.505 4.184-16.525 0-2.649-.209-4.514-.627-5.596a63.79 63.79 0 0 0-.837-2.092c-.141-.313-.419-.591-.837-.836-.418-.244-.697-.366-.837-.366a27.877 27.877 0 0 0-3.033-.68c-1.046-.173-1.657-.644-1.83-1.412-.175-.767.191-1.219 1.099-1.36l1.987.209c3.206.907 5.995 3.174 8.367 6.798 1.323 2.023 1.986 4.445 1.986 7.269s-.663 6.154-1.986 9.988c-3.208 8.508-8.158 16.891-14.853 25.154-6.693 8.263-13.301 14.59-19.819 18.982-6.522 4.396-11.838 6.592-15.952 6.592zM361.747 93.139c1.323 0 2.719-.662 4.184-1.987 2.578-2.579 5.856-7.845 9.831-15.793.487-1.046.976-1.36 1.464-.941.14.141.21.366.21.68s-.279 1.082-.837 2.301a708.28 708.28 0 0 1-1.517 3.295c-.454.978-1.325 2.562-2.615 4.759-1.291 2.196-2.457 3.888-3.503 5.072-2.86 3.278-5.562 4.916-8.106 4.916-2.546 0-4.376-.767-5.49-2.301-1.116-1.533-1.674-3.242-1.674-5.125s.452-3.938 1.359-6.171l6.694-17.048c.139-.418.209-.976.209-1.673 0-.696-.419-1.603-1.255-2.719l5.752-.104c1.604 0 2.545.297 2.824.889.277.593.068 1.517-.628 2.772l-8.367 19.559c-1.187 2.58-1.777 4.776-1.777 6.589 0 2.02 1.08 3.03 3.242 3.03zm10.249-38.385c-.977.837-2.057 1.255-3.242 1.255-1.187 0-2.127-.418-2.823-1.255-.698-.837-.978-1.847-.837-3.033.209-1.185.801-2.196 1.778-3.033.976-.836 2.056-1.255 3.242-1.255 1.185 0 2.144.418 2.876 1.255.732.837.993 1.849.784 3.033-.209 1.186-.802 2.196-1.778 3.033z\" />\n  <path d=\"M402.223 66.991c0-3.974-1.639-5.961-4.916-5.961h-.837c-1.255.141-1.986-.104-2.196-.732-.209-.628.104-1.046.941-1.255.837-.209 1.742-.243 2.72-.104 3.625.559 6.101 2.267 7.426 5.125.905 1.744 1.359 3.451 1.359 5.125 0 5.998-2.196 11.889-6.589 17.676-4.393 5.856-10.076 8.785-17.048 8.785-2.581 0-4.673-.732-6.275-2.196-1.605-1.464-2.406-3.415-2.406-5.857 0-2.928 1.674-7.878 5.021-14.852-5.718 10.809-9.413 17.014-11.087 18.617-.695.628-1.046.418-1.046-.628 0-.209.07-.452.21-.731 2.439-3.207 7.303-11.924 14.59-26.148 7.285-14.224 12.395-23.533 15.322-27.925 2.37-3.416 4.671-5.125 6.903-5.125h.627c.068 0 .68.104 1.83.314 1.15.209 2.003.245 2.562.104-2.301 2.441-5.928 7.321-10.878 14.643-12.272 18.199-18.407 31.795-18.407 40.791 0 3.696 1.185 5.788 3.556 6.275.209.07.453.104.732.104 2.16 0 4.863-1.936 8.105-5.805 3.242-3.87 5.909-8.279 8.001-13.231 1.187-2.58 1.78-4.917 1.78-7.009zM416.55 79.333c-.978 2.371-1.464 5.02-1.464 7.948 0 1.953.435 3.504 1.307 4.654.871 1.15 2.108 1.726 3.714 1.726 6.344 0 12.096-5.961 17.257-17.885.487-1.114 1.08-1.603 1.778-1.464.277.07.418.245.418.522 0 .28-.784 2.11-2.354 5.491-1.568 3.383-3.155 6.118-4.759 8.21-3.556 4.882-7.948 7.321-13.178 7.321-2.79 0-5.161-.905-7.112-2.719-1.953-1.812-2.929-4.288-2.929-7.426s.749-6.467 2.249-9.988c1.498-3.521 3.538-6.799 6.118-9.832 2.579-3.033 5.543-5.246 8.891-6.641 1.603-.696 3.138-1.046 4.602-1.046s2.824.418 4.079 1.255c1.185.977 1.778 2.058 1.778 3.242 0 4.184-2.511 8.194-7.531 12.028-1.534 1.187-3.696 2.249-6.484 3.19-2.789.943-4.915 1.414-6.38 1.414zm17.571-16.735c0-1.394-.559-2.092-1.674-2.092-1.952 0-4.915 2.406-8.89 7.217-2.371 2.928-4.463 6.207-6.275 9.832 1.185 0 2.91-.419 5.177-1.256 2.266-.836 4.236-1.951 5.909-3.346 3.834-3.277 5.753-6.728 5.753-10.355z\" />\n  <path d=\"M446.67 93.452c.905.141 1.533.209 1.883.209 2.788 0 5.543-1.637 8.263-4.915 1.464-1.812 4.079-6.381 7.845-13.701.139-.349.382-.523.731-.523.628-.068.941.175.941.732 0 .141-.156.541-.471 1.202a50.74 50.74 0 0 0-.889 1.987c-.279.664-.732 1.621-1.359 2.876a51.085 51.085 0 0 1-1.621 3.033c-.455.769-1.03 1.71-1.727 2.824-.697 1.116-1.396 1.987-2.092 2.615l-2.196 2.301a9.892 9.892 0 0 1-4.184 2.51c-2.58.837-5.091.905-7.53.209-1.604.696-3.033 1.046-4.288 1.046-4.952 0-7.949-1.951-8.995-5.856-.209-.905-.313-2.004-.313-3.295 0-1.289.437-2.526 1.308-3.713.871-1.185 1.794-1.812 2.771-1.883 3.556-6.763 6.589-12.864 9.1-18.303 2.788-5.925 6.03-8.89 9.727-8.89.976 0 1.935.228 2.876.68.941.454 1.29.959 1.046 1.517-.245.559-.75.663-1.517.313-.768-.348-1.43-.523-1.987-.523-.559 0-1.046.104-1.464.314-2.371 1.116-3.556 3.521-3.556 7.217 0 1.953.277 3.556.836 4.811a173.99 173.99 0 0 0 1.883 4.079c1.604 3.626 2.405 6.589 2.405 8.89 0 2.302-.731 4.568-2.196 6.799-1.464 2.232-3.209 4.045-5.23 5.438zm-11.4-3.556c0 .418.035.872.105 1.359.557 1.883 1.846 2.824 3.869 2.824.837 0 1.533-.14 2.092-.419-2.58-1.603-3.975-4.218-4.184-7.844-1.255 1.256-1.882 2.616-1.882 4.08zm7.844 2.824c3.067-2.369 4.602-6.205 4.602-11.505 0-2.16-.245-5.125-.731-8.89-.489-3.766-.732-6.31-.732-7.635 0-1.324.034-2.23.104-2.719-5.3 10.6-8.576 17.048-9.831 19.349 1.464 0 2.196 1.046 2.196 3.138 0 4.114 1.464 6.868 4.392 8.262z\" />\n</symbol>"
});
var greatvibes_result = browser_sprite_build_default.a.add(greatvibes_symbol);
/* harmony default export */ var greatvibes = (greatvibes_symbol);
// CONCATENATED MODULE: ./src/icons/guerilla.svg


var guerilla_symbol = new browser_symbol_default.a({
  "id": "guerilla",
  "use": "guerilla-usage",
  "viewBox": "0 0 566.93 141.73",
  "content": "<symbol xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 566.93 141.73\" id=\"guerilla\">\n  <path d=\"M104.004 101.958c.139 2.087.278 4.175.278 6.4-.834 0-.695-.974-1.669-.974-1.67 0-3.896.695-4.453.835h-2.227c-.974-.418-1.252-.975-1.948-.975h-.695c-1.252 0-2.087.557-3.2.975l-2.922.139v-5.287c-1.669.417-1.948 1.113-3.618 1.67-2.365.557-4.731 1.252-7.096 1.67-2.366.417-4.731.695-7.514.695-2.644 0-5.287-.278-7.931-.835-2.644-.974-5.288-1.53-7.931-3.062-2.227-1.112-4.313-2.922-5.983-4.452-2.087-1.809-3.2-3.618-4.731-5.705-1.113-2.087-2.226-4.035-3.2-6.122-.696-2.227-1.113-4.175-1.67-6.401-.974-4.035-1.113-7.931-1.53-11.966 0-1.531.139-2.922.557-4.453v-7.097c.417-3.2.695-5.983 1.669-9.184.557-3.2 1.531-6.54 3.062-9.74.556-1.53 1.252-3.2 2.365-4.731.696-1.669 1.809-3.061 3.339-4.592a19.806 19.806 0 0 1 4.174-4.174c1.67-1.53 3.479-2.226 5.566-3.339 1.809-.696 3.618-1.392 5.705-1.809a41.315 41.315 0 0 1 5.844-.417c3.757 0 7.235.417 10.436 1.391 3.339.974 6.262 2.227 9.184 3.479 2.922 1.252 5.705 2.783 8.627 4.313.139.139.139.556.139.974 0 1.252-.835 1.948-1.809 2.922-.974.974-2.366 1.809-2.922 2.783-.417.696-.974.974-1.113 1.392-.139.139-.139.417-.139.835 0 .278.139.695.557 1.391.696.696 1.531 1.531 1.948 2.087.139.139.278.417.278.835-.139 0-.557-.278-1.252-.696-1.531-.417-3.339-1.531-5.148-2.644-1.809-.974-3.618-1.809-5.148-2.226-.974-.139-1.53-.278-1.948-.278l-.974.139-1.67.557c1.531.557 2.783 1.113 4.036 1.669l3.2 1.392c2.644 1.252 6.957 3.479 6.957 5.009-3.2-2.087-6.4-3.757-9.601-5.009-1.669-.557-3.2-1.392-4.73-1.809l-4.87-1.252c-1.113-.417-2.505-.278-3.618-.278-.974 0-1.948 0-2.644.139-.974.139-1.531.278-2.504.696l-1.948 1.391c-.974.696-1.392 1.113-1.809 1.809-.695.696-1.113 1.809-1.669 2.783-.974 1.809-1.809 4.035-2.505 6.679-.834 2.644-1.391 5.566-1.809 8.488-.417 2.783-.417 5.566-.557 8.766 0 2.922.139 5.705.417 8.209.417 2.644 1.113 5.148 2.087 7.235.974 2.088 1.809 3.34 3.34 4.87 1.252 1.113 3.061 2.227 4.73 2.644 1.392.418 3.062.557 4.87.557h1.948c2.087-.139 4.453-.557 7.096-1.53 3.479-.835 5.427-2.227 8.766-4.175l.835-.139V72.738H74.505c-.139-.279-.139-.696-.139-1.253 0-.696 0-1.113.139-1.392v-7.235c0-.696 0-1.252-.139-1.67s-.557-.557-.557-.974c0-.139.139-.278.278-.417.139-.139.278-.278.557-.278h.696c.278 0 .417 0 .557-.139.417-.417.278-1.531.696-2.087-.974 0-1.67-.417-2.783-.835 1.252 0 2.366-.557 3.618-.696h5.566c2.087 0 4.035.417 6.123.557l3.757.139c.557 0 1.252 0 1.809-.139 1.53-.139 2.644-.417 3.757-.417-.417 0-.417.696-.417 1.67 0 1.809.278 3.896.278 4.453v1.809l.835-.278c.417-.417.417-.974.834-.974.139 0 .278.139.557.417.139.417.278.696.278 1.113l-.139 1.669c0 .417.139.557.139.696.417.974 1.392.974 2.087 1.531 0-2.087.417-3.34.974-5.427l.556 7.096v8.488c0 3.757-.278 7.235-.417 11.549 0 .418 0 .835.139.835.696.418.835.696.974 1.113.417.557.557 1.113 1.113 1.113l-2.227 1.53v7.653zM167.59 33.777v14.471c0 4.87-.139 9.74-.139 14.61l-.139 17.532-.139 2.922c0 .975-.139 1.948-.278 3.062 0 .139-.139.139-.139.695v1.948c-.417 2.087-.834 3.757-1.391 5.844-.278 1.253-.835 2.088-1.252 3.2-.696 1.113-1.252 2.088-1.948 3.062-.834 1.113-1.809 1.948-2.783 2.783-1.113.974-2.087 1.809-3.061 2.227-1.113.695-2.087 1.112-3.201 1.53-1.252.278-2.365.557-3.339.695-2.087.557-4.035.696-6.122.696h-.835l-.696-.14h-1.392a23.451 23.451 0 0 1-3.061-.557c-2.087-.278-4.174-.835-6.401-1.809-1.669-.835-3.339-1.948-4.731-3.2-1.53-1.392-2.783-2.783-3.757-4.313-.974-1.392-1.669-2.783-2.365-4.453-.835-1.252-1.113-2.504-1.67-4.035l-.278-.557-.417-1.669c-.417-.835-.557-1.531-.696-2.366-.417-1.669-1.391-4.73-1.391-6.679V70.79c0-2.644.278-6.957.557-9.601.417-3.2.834-10.575 1.391-13.915.417-3.2.696-6.4.835-9.323l.278-.417c.557-.557 1.252-.835 1.948-.835.417 0 1.113.139 2.087.557 1.531.556 2.505 1.53 4.035 1.669.417 0 .974.417 1.531.417s1.252-.139 1.67-1.67c.417-.974.834-2.783.974-3.757.139-.417.278-.557.417-.557l.278 1.809c.139.417.139 1.113.139 2.087 0 1.669-.278 3.618-.417 5.426-.139 2.644-.557 5.288-.557 7.097v.835c0 3.2.696 3.479 1.252 5.009 2.366-14.471 1.531-21.428 2.922-22.124 0 2.783.139 5.148-.278 7.792l-.695 7.096c-.417 4.87-.974 9.323-1.67 14.193-.139 1.67-.139 3.339-.139 4.731v2.783c0 1.948.557 7.653.696 9.184l.278 3.896.696 1.391c.417.975.834 1.67.974 2.505.696.696.835 1.253 1.531 1.809.278.557.696.696 1.113 1.113.696.278 1.252.418 2.087.835.835.278 1.392.278 2.366.418l1.948.835c.974-.14 1.67-.278 2.227-.557l1.531-.696c.417-.417.834-.695 1.113-1.392.278-.557.557-.974.835-1.809.139-.835.278-1.53.278-2.644.139-1.948.139-3.618.139-5.983V67.172l.278-4.313c0-6.818 0-21.011-.139-28.107v-.974c1.392 1.531.696 4.035 1.67 4.035 1.53 0 3.757-3.2 4.453-3.2.695-.417 1.252-.557 1.391-.557.278 0 .557.139.835.557.974.696 1.113 3.479 2.087 3.896.139.139.278.139.557.139 1.252 0 2.226-2.504 3.339-4.035.278-.417.557-.557.974-.557.417 0 .556.139.974.139.276-.001.554-.14.832-.418zM229.506 94.026v.557c0 1.253-.139 2.366-.557 3.479-.556 1.531-1.113 2.645-1.53 4.175-.139.695-.557 1.53-.557 2.505l.139.695c.417.557.835.835.835 1.252 0 .14-.139.278-.557.418-.139.139-.278.139-.557.139-.974 0-1.809-.695-2.783-.695-.974.417-1.252 1.113-1.948 1.67 2.087.695 5.009.974 4.87 2.227-2.227-.557-4.313-.557-6.679-1.253-10.992-1.948-19.062-3.2-21.15-3.2h-1.252l-1.391.278-1.113.278c-1.531.417-2.644 1.252-3.061 1.252-.417.14-.974.418-1.392.418-.139 0-.417-.14-.835-.278l-2.365-1.948c-1.252 0-2.087 1.113-3.201 2.087-.417.14-.695.278-.834.278l-1.113-.139c-.278 0-.557 0-.696.139-.139-5.009-.278-10.019-.278-15.027l1.252-28.525c.278-6.122.557-3.061.557-9.044v-7.653c0-3.757-.139-7.096-.278-10.853.696-.417 1.53-.557 2.504-.557l1.252.139c1.252.139 2.226.417 3.339.417h.557l1.531.139c.557 0 .974-.278 1.391-.835.557-.696.557-2.087.974-2.087.139 0 .417.278.557.835.417.974.417 2.365.417 3.618h7.931c4.592 0 9.601.417 13.497.974 3.2.557 6.123.974 9.323 1.67v.695a13.74 13.74 0 0 1-.417 3.34c-.417 1.53-.557 2.783-.974 4.035-.139.974-.278 1.669-.278 2.365 0 .417 0 .835.139 1.113.139.417.696.696.696 1.113 0 .139-.139.278-.417.417-.139.139-.417.139-.834.139l-2.087-.139c-.974.139-.974 1.113-1.392 1.809 1.67.417 3.896.139 4.174 1.392l-5.705-.278c-3.479-.417-10.854-1.392-16.28-1.392-1.252-.139-2.504-.278-3.757-.278l-.557 8.349 1.948-.139 12.523-.557c2.087-.417 3.896-.557 5.566-.696-.278 0-.417.417-.417 1.113 0 1.669.835 4.453.835 4.87.139.557.139 1.252.139 1.809v.696c-.139.974-.696 1.252-.696 2.504 0 1.253.557 2.365.974 3.479l.139 2.783-15.027 1.251c-2.227.418-4.731.557-7.096.696l-.139 2.504-.139 4.453c3.2 0 13.08 1.113 21.985 2.365 3.477.975 6.817 1.671 10.295 2.644zm-10.714-31.168h-.139.139zM295.04 107.245l4.313 6.68c-.278-.418-.557-.557-.974-.557-1.531 0-3.757 2.087-4.453 2.782-.557.418-1.113.975-2.087 1.113-.557 0-1.252-.278-1.67-.278l-.418.14c-1.529.417-1.947 1.392-2.922 2.365-.974.695-1.67.695-2.365 1.252a389.13 389.13 0 0 1-7.653-13.497c-2.226-4.313-4.035-8.07-5.844-12.384a50.923 50.923 0 0 1-2.505-6.4c-2.783.278-6.261.417-10.436.417v12.941c.417 2.226.556 4.313.556 6.4-.834-.418-.556-1.531-1.53-1.531-1.531 0-3.479.975-4.174 1.392-.696.14-1.113.278-1.531.278-.278 0-.557-.139-.974-.278-.557-.417-1.391-1.53-1.948-1.669l-.696-.14c-1.113 0-1.948 1.113-2.922 1.809l-.974.278-1.252-.139c-.278 0-.417 0-.417.139V43.795a5.591 5.591 0 0 1 2.087-.417c2.087 0 4.035.696 5.844.696h.696c.974 0 1.392-.139 1.392-.278v-1.113c0-.417-.278-.834-.974-1.252-.974-.557-2.783-.696-2.783-1.113 0-.139.417-.278 1.252-.417.974-.417 2.922-.278 4.592-.278.696.139 1.67.139 2.366.139h.974c1.113 0 2.783 0 2.783-.696s-9.879-.278-10.436-1.948c0-.139 4.453-.278 8.349-.278 14.61 0 23.655.834 33.256 9.601 4.453 3.896 6.4 8.349 8.488 15.306-.696 8.209-6.958 17.672-13.08 20.732-.835.418-1.67.835-2.505 1.113.418.974.695 1.948 1.113 2.783 1.531 3.479 2.645 7.096 4.313 10.854 1.532 3.199 3.062 6.816 5.149 10.016zm-34.786-33.534c2.922 0 5.844-.556 8.627-.695 15.167-.557 16.559-14.471 10.854-17.671-6.123-2.783-4.035-2.783-15.445-3.618-2.087-.417-4.035-.278-5.844-.417l.278 2.644-.278 19.758h1.808zM324.676 38.229c1.113 0 4.87-3.618 5.566-1.809.557 1.809-.14 4.87.278 6.679.556 1.67 1.391 1.809 2.365 2.783.139-4.313-.696-7.792.835-10.019 0 4.313.557 8.488.557 13.08 0 8.07-1.392 19.758-1.392 25.742-.696 6.679-1.113 13.358-1.113 20.176 0 4.87.139 9.184 0 14.054-1.948-3.339-6.122-.557-6.54-.557-.974.14-1.948.418-2.922 0-.695-.557-1.252-1.947-2.227-2.087-1.53-.417-2.782.695-4.313 1.67-.974.695-2.087-.14-3.2.417.14-9.322.557-18.228.974-27.133.418-8.627 2.088-31.029 1.948-43.274v-.139c2.922-1.252 6.262.417 9.184.417zM383.948 107.106c-4.313.139-4.313.139-8.627.557l-21.429 1.809c-.695-1.67-.695-3.617-.695-5.705 0-.974 0-1.947-.14-2.922v-.974c0-.975 0-1.81-.695-2.365-.418-.418-1.392-.835-1.392-1.253 0-.139.14-.278.418-.417.695-.418 1.112-.418 2.087-.418l.417-3.617V37.117c.835-.278 1.67-.417 2.365-.417 2.227 0 4.175.835 6.262.835l1.948.139c.695 0 1.252-.278 1.67-.834.417-.696.557-1.809.974-1.809.418 0 .557.278.696.696.278.557.417 1.252.417 2.087l-.139 2.922.139 1.391c.418 1.531 1.252 1.531 2.227 2.505 0-4.035-.557-7.931.695-9.601l1.81 12.523-1.81 19.62v15.724c0 2.226-.139 4.452.278 6.539 3.896-.417 7.792-.278 11.827-.278h1.948c2.087 0 4.035 0 5.845-.139l.695-.14a72.818 72.818 0 0 1 7.653-.417c-.418 1.113-1.113.557-1.113 1.809 0 1.531.835 3.757.974 4.453l.14 1.252-.14 1.531c-.139.695-.974 1.112-.974 2.087v.557c0 1.113.557 2.365.974 3.479l.14 3.479h-15.445zM444.891 107.106c-4.313.139-4.313.139-8.627.557l-21.429 1.809c-.695-1.67-.695-3.617-.695-5.705 0-.974 0-1.947-.14-2.922v-.974c0-.975 0-1.81-.695-2.365-.418-.418-1.392-.835-1.392-1.253 0-.139.14-.278.418-.417.695-.418 1.112-.418 2.087-.418l.417-3.617V37.117c.835-.278 1.67-.417 2.365-.417 2.227 0 4.175.835 6.262.835l1.948.139c.695 0 1.252-.278 1.67-.834.417-.696.557-1.809.974-1.809.418 0 .557.278.696.696.278.557.417 1.252.417 2.087l-.139 2.922.139 1.391c.418 1.531 1.252 1.531 2.227 2.505 0-4.035-.557-7.931.695-9.601l1.81 12.523-1.81 19.62v15.724c0 2.226-.139 4.452.278 6.539 3.896-.417 7.792-.278 11.827-.278h1.948c2.087 0 4.035 0 5.845-.139l.695-.14a72.818 72.818 0 0 1 7.653-.417c-.418 1.113-1.113.557-1.113 1.809 0 1.531.835 3.757.974 4.453l.14 1.252-.14 1.531c-.139.695-.974 1.112-.974 2.087v.557c0 1.113.557 2.365.974 3.479l.14 3.479h-15.445zM531.713 98.201c-.278-.278-.557-.418-.835-.418s-.417 0-.557.14c-.139.139-.557.417-.974.974-.418.557-.835 1.253-.835 1.67-.278.278-.418.557-.418.975-.417.417-.695 1.391-1.809 1.391l-1.252-.139c-.278 0-.418 0-.557.139-.418.418-.696.975-.696 1.392-.139.975-.278 1.531-.278 1.948-.139.417-.417.695-.974 1.113-.139.417-1.392 2.922-1.392 3.34-6.122-4.175-7.653-8.488-9.74-11.828-.835-1.252-1.948-2.644-2.922-3.896-.417 0-.835.139-1.252.139-4.313.278-7.235 0-12.384.835-1.253 0-2.505 0-3.757.14l-4.313.557-.835 5.844c-.418 4.035-.557 7.653-.975 11.41 0-.975-.417-1.531-1.252-1.531l-.835.14c-1.252.417-2.227 1.113-2.644 1.113h-1.113c-.418 0-.696 0-.975-.14-.556-.557-.834-1.53-1.391-1.67l-.557-.139c-.975 0-1.81.835-2.783 1.392-.139.139-.417.278-.557.278l-1.252-.278c-.278 0-.418.139-.557.278-2.922-4.313-2.505-8.21-1.948-12.105.695-4.035 1.252-7.932 1.809-11.828 1.253-6.539 2.783-12.94 4.035-19.48.14-.417.14-.835.14-1.391.974-4.87 1.948-9.462 2.644-14.054.974-5.427 1.252-9.879 1.392-15.306.557-.278 4.174-.417 4.73-.417s.975.139 1.67.278c1.113.139 2.227.557 3.2.557l2.783-.139c.417 0 .835-.139 1.252-.557.557-.557.835-1.809.975-1.809.278 0 .417.278.417.695.14.974.14 1.67.14 2.783l3.757-.139c.974-.417 2.087 0 2.504-1.252.418-.417.14-1.669.557-1.669.278 0 .418.278.557.695l2.088 4.87c.557 1.252 1.947.557 2.644.974-.557-3.2-1.392-5.427-.418-6.957.696 3.339 1.81 6.122 2.783 9.879 1.53 6.54 1.948 10.158 4.035 15.167l3.2 7.792c.835 2.087 1.253 3.896 1.948 5.983l1.67 3.896c1.113.139 2.365.139 3.617.278l.14.557c.139 1.113.139 2.227 0 3.479-.278 1.392-.418 2.365-.418 3.062.696 1.252 1.531 2.504 2.505 3.617 2.088 2.78 4.036 5.146 6.263 7.372zm-29.499-17.672l-1.392-3.896c-4.73-12.245-5.148-14.193-7.096-21.707-2.088 12.105-2.644 17.254-3.757 22.263l-.835 4.87 4.313-.557c3.48-.416 5.567-.694 8.767-.973z\" />\n</symbol>"
});
var guerilla_result = browser_sprite_build_default.a.add(guerilla_symbol);
/* harmony default export */ var guerilla = (guerilla_symbol);
// CONCATENATED MODULE: ./src/icons/yellowtail.svg


var yellowtail_symbol = new browser_symbol_default.a({
  "id": "yellowtail",
  "use": "yellowtail-usage",
  "viewBox": "0 0 566.93 141.73",
  "content": "<symbol xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 566.93 141.73\" id=\"yellowtail\">\n  <path d=\"M116.292 27.112l2.02-.106c.602 0 1.284.266 2.047.797.762.532 1.143.993 1.143 1.382-.178.78-4.359 7.904-12.546 21.371-25.554 41.998-39.625 65.69-42.211 71.078a52.842 52.842 0 0 1 4.333-4.066c1.577-1.33 2.463-1.994 2.658-1.994.194 0 .399.115.611.346.213.23.319.46.319.691 0 .229-.16.521-.479.877-.319.354-1.427 1.762-3.323 4.227-1.896 2.463-3.305 4.217-4.227 5.263a23.85 23.85 0 0 0-2.472 3.349c-.727 1.188-1.347 2.029-1.86 2.525-.514.496-1.143.744-1.887.744-2.162 0-3.979-.93-5.449-2.791-1.471-1.86-2.206-3.429-2.206-4.705 0-2.48 5.271-12.156 15.815-29.025 10.543-16.87 19.838-31.029 27.884-42.477C77.855 76.571 63.04 90.996 52.018 97.871c-3.828 2.41-6.947 3.615-9.356 3.615-1.169 0-2.331-.338-3.482-1.01-1.152-.674-1.985-1.523-2.499-2.553-.515-1.027-.771-2.861-.771-5.502 0-2.64 1.134-6.433 3.402-11.377 2.268-4.943 5.191-10.233 8.771-15.869 6.344-10.065 12.192-18.677 17.544-25.836-4.75 4.289-8.631 6.433-11.643 6.433-1.382 0-2.295-.204-2.738-.612-.444-.407-1.046-1.045-1.808-1.914-.763-.868-1.143-1.825-1.143-2.871 0-1.045.186-1.869.558-2.472.372-.602.718-1.063 1.037-1.382 1.205-1.205 1.984-1.914 2.339-2.126.354-.212.788-.319 1.302-.319s.771.08.771.239c0 .159-.186.398-.558.718-.372.319-.558.567-.558.744 0 .178.194.266.584.266.39 0 .886-.097 1.489-.292.602-.194 1.391-.549 2.366-1.063.974-.513 1.86-.992 2.658-1.436.797-.442 1.993-1.134 3.588-2.073a173.457 173.457 0 0 1 3.642-2.1c.832-.46 2.055-1.284 3.668-2.472 1.612-1.187 2.809-1.994 3.588-2.419 1.311-.779 2.383-1.01 3.216-.691.833.319 1.489.532 1.967.638s.904.257 1.276.452.718.417 1.037.665c1.098.78 1.648 1.693 1.648 2.738s-.505 2.259-1.515 3.642c-1.01 1.382-3.27 4.651-6.778 9.808s-7.467 11.076-11.88 17.756c-4.412 6.681-8.293 12.945-11.642 18.792-3.35 5.848-5.024 9.535-5.024 11.059 0 .531.141.797.425.797.283 0 1.329-.691 3.137-2.073 9.498-7.337 21.601-18.837 36.31-34.502 12.085-12.865 19.209-20.821 21.371-23.87.673-.921 1.337-1.542 1.994-1.861.655-.319 1.656-.479 3.003-.479l2.978.053zM139.098 61.189c0 2.339-.949 4.395-2.844 6.167-1.896 1.773-4.049 2.658-6.459 2.658-.78 0-1.294-.186-1.542-.558-.248-.372-.372-.859-.372-1.462s.071-1.187.213-1.754c-1.276.425-2.694 1.082-4.253 1.967-1.56.886-3.474 2.198-5.742 3.934-2.269 1.736-3.402 3.03-3.402 3.881 0 .284.416.426 1.25.426.832 0 2.117-.293 3.854-.877 1.736-.586 2.951-.878 3.642-.878s1.143.036 1.355.106c.46.248.957.789 1.489 1.621.532.834.797 1.488.797 1.967s-.461 1.108-1.382 1.888a9.797 9.797 0 0 1-3.136 1.781c-1.17.407-1.95.718-2.339.931-7.479 4.182-11.217 7.053-11.217 8.611 0 2.765 2.356 4.146 7.071 4.146 3.012 0 6.042-.957 9.091-2.87 2.586-1.63 4.917-3.287 6.991-4.971 2.073-1.683 3.384-2.72 3.934-3.11.549-.389.965-.584 1.249-.584.921 0 1.382 1.027 1.382 3.083s-.125 3.411-.372 4.067c-.249.656-.957 1.461-2.126 2.418-7.585 6.167-14.762 9.25-21.531 9.25-3.615 0-6.504-.496-8.666-1.488-3.97-1.807-5.954-4.572-5.954-8.293 0-4.891 3.384-8.594 10.154-11.111-1.347-.602-2.215-1.373-2.605-2.312-.39-.938-.584-2.445-.584-4.519s.965-4.271 2.897-6.592c1.931-2.321 4.297-4.227 7.097-5.715 6.237-3.366 11.802-5.05 16.693-5.05 1.169 0 2.356.284 3.562.851 1.202.566 1.805 1.364 1.805 2.391zM185.642 22.673c1.293 1.01 1.94 2.508 1.94 4.492 0 1.985-1.099 5.095-3.296 9.33-2.198 4.235-4.837 8.559-7.921 12.971-3.083 4.413-6.575 9.1-10.473 14.062-6.167 7.868-12.086 14.938-17.756 21.212-.036.426-.187 1.215-.452 2.365-.266 1.152-.398 2.312-.398 3.482s.54 2.225 1.621 3.163c1.081.939 2.419 1.409 4.014 1.409 1.595 0 3.305-.566 5.13-1.701 1.825-1.135 3.411-2.393 4.758-3.775 3.544-3.649 5.742-5.475 6.592-5.475s1.276 1.293 1.276 3.881v1.062c0 1.383-.249 2.393-.744 3.03-2.977 3.651-6.326 6.372-10.048 8.161-3.721 1.789-7.248 2.684-10.579 2.684-3.332 0-5.866-1.019-7.602-3.057-1.737-2.037-2.605-4.828-2.605-8.373 0-6.91 1.852-15.035 5.555-24.375 3.703-9.338 7.876-17.286 12.52-23.843 10.455-14.814 18.447-22.222 23.976-22.222 1.701.002 3.197.507 4.492 1.517zm-6.885 7.31c0-.531-.178-.797-.532-.797-1.241 0-4.501 3.544-9.782 10.632-5.281 7.089-9.1 12.742-11.457 16.959-2.357 4.218-4.581 9.516-6.672 15.895 4.182-4.961 9.968-12.696 17.358-23.205 7.39-10.508 11.085-17.003 11.085-19.484z\" />\n  <path d=\"M213.711 22.673c1.293 1.01 1.94 2.508 1.94 4.492 0 1.985-1.099 5.095-3.296 9.33-2.198 4.235-4.837 8.559-7.921 12.971-3.083 4.413-6.575 9.1-10.473 14.062-6.167 7.868-12.086 14.938-17.756 21.212-.036.426-.187 1.215-.452 2.365-.266 1.152-.398 2.312-.398 3.482s.54 2.225 1.621 3.163c1.081.939 2.419 1.409 4.014 1.409 1.595 0 3.305-.566 5.13-1.701 1.825-1.135 3.411-2.393 4.758-3.775 3.544-3.649 5.742-5.475 6.592-5.475s1.276 1.293 1.276 3.881v1.062c0 1.383-.249 2.393-.744 3.03-2.977 3.651-6.326 6.372-10.048 8.161-3.721 1.789-7.248 2.684-10.579 2.684-3.332 0-5.866-1.019-7.602-3.057-1.737-2.037-2.605-4.828-2.605-8.373 0-6.91 1.852-15.035 5.555-24.375 3.703-9.338 7.876-17.286 12.52-23.843 10.455-14.814 18.447-22.222 23.976-22.222 1.701.002 3.198.507 4.492 1.517zm-6.885 7.31c0-.531-.178-.797-.532-.797-1.241 0-4.501 3.544-9.782 10.632-5.281 7.089-9.1 12.742-11.457 16.959-2.357 4.218-4.581 9.516-6.672 15.895 4.182-4.961 9.968-12.696 17.358-23.205 7.39-10.508 11.085-17.003 11.085-19.484z\" />\n  <path d=\"M229.314 60.445c1.063 0 2.153.479 3.27 1.436s1.675 2.419 1.675 4.386-.691 4.519-2.073 7.656c-1.382 3.137-3.279 6.326-5.688 9.568a79.487 79.487 0 0 1-7.948 9.145c-2.889 2.854-6.007 5.192-9.356 7.018-3.35 1.824-6.389 2.738-9.118 2.738s-4.917-.86-6.565-2.579-2.472-4.11-2.472-7.177c0-3.065.753-6.459 2.26-10.181 1.506-3.722 3.446-7.009 5.821-9.861a57.363 57.363 0 0 1 7.708-7.682c5.776-4.643 10.845-6.964 15.204-6.964 1.949 0 3.42.479 4.413 1.436.354.319.532.603.532.851v.319c.494-.073 1.274-.109 2.337-.109zm-5.369 7.071h-.372c-1.241 0-1.861-.904-1.861-2.711-2.587.851-5.299 2.339-8.134 4.466-2.836 2.126-5.37 4.643-7.602 7.548-4.537 5.813-6.841 10.722-6.911 14.727 0 1.985.726 2.977 2.18 2.977 1.453 0 3.615-.957 6.486-2.87 2.871-1.914 5.715-4.643 8.532-8.187 2.818-3.545 4.926-6.619 6.326-9.225 1.4-2.604 2.1-4.376 2.1-5.316 0-.939-.249-1.409-.744-1.409zM288.324 61.455l-.639-2.552c0-1.453.506-2.596 1.516-3.429 1.01-.832 2.277-1.249 3.801-1.249 2.977 0 4.467 1.896 4.467 5.688 0 2.729-1.348 6.495-4.041 11.297-2.693 4.803-5.875 9.446-9.543 13.928-3.668 4.484-7.558 8.383-11.669 11.695-4.112 3.314-7.275 4.971-9.489 4.971-2.215 0-3.784-.603-4.705-1.807-.922-1.205-1.382-2.366-1.382-3.482 0-1.117.053-2.17.16-3.163a30.517 30.517 0 0 1 2.871-9.941c-3.792 4.962-7.868 9.419-12.227 13.37-4.359 3.952-8.01 5.928-10.952 5.928-1.418 0-2.552-.426-3.402-1.275-.851-.852-1.276-2.295-1.276-4.334 0-2.037 1.223-5.865 3.668-11.482 2.445-5.617 4.785-10.127 7.017-13.529-.815.496-1.533.744-2.153.744-.621 0-1.294-.346-2.02-1.037-.727-.691-1.09-1.231-1.09-1.621 0-.39.266-.957.797-1.701.532-.745 2.569-2.579 6.114-5.502 3.543-2.924 5.971-4.386 7.283-4.386a9.63 9.63 0 0 1 3.748.744c1.187.497 1.781 1.179 1.781 2.047 0 .869-2.464 5.927-7.39 15.177-4.927 9.25-7.39 14.266-7.39 15.045 0 .107.035.16.106.16.744 0 4.457-3.793 11.137-11.377 6.68-7.584 11.935-13.822 15.763-18.713.532-.886 1.329-1.329 2.393-1.329l.479.053 2.924-.585c.46 0 .912.178 1.355.532.443.354.665.673.665.957 0 .284-.629 1.56-1.887 3.828-1.258 2.269-3.305 6.558-6.14 12.865-2.836 6.309-4.253 10.738-4.253 13.291 0 .638.23.957.691.957 1.347 0 4.155-2.437 8.426-7.311 4.271-4.872 7.752-9.542 10.446-14.008s4.04-7.621 4.04-9.464zM318.413 84.049l-.266 1.117c0 .212.098.407.293.584.194.178.434.266.718.266.283 0 .513-.141.69-.425 5.281-7.018 9.657-13.192 13.132-18.527 3.473-5.333 6.016-9.258 7.628-11.775a4361.71 4361.71 0 0 1 3.854-6.007c2.552-3.898 5.085-7.389 7.603-10.473-9.569 2.411-17.065 3.615-22.488 3.615-5.422 0-9.321-.345-11.695-1.037-2.375-.691-3.934-1.47-4.678-2.339-.745-.868-1.117-1.754-1.117-2.658s.035-1.781.106-2.631c.142-1.772 1.214-3.225 3.217-4.359 2.002-1.134 3.659-1.701 4.971-1.701 1.311 0 1.967.195 1.967.584 0 .391-.293.913-.877 1.568-.585.656-.878 1.108-.878 1.356 0 1.134 4.094 1.701 12.281 1.701 8.187 0 17.597-1.081 28.229-3.243 6.096-4.961 11.358-7.443 15.789-7.443 2.941 0 4.892.833 5.849 2.499.638.993.956 1.985.956 2.977 0 .993-.576 1.985-1.728 2.977-1.152.993-2.703 1.843-4.651 2.552-3.545 1.276-7.727 2.286-12.547 3.03-2.02 2.587-4.882 6.61-8.585 12.068-3.704 5.458-6.229 9.144-7.576 11.058-1.347 1.914-3.518 5.316-6.512 10.207a4769.884 4769.884 0 0 1-7.789 12.679 187.383 187.383 0 0 1-7.017 10.553c-5.069 7.16-9.588 10.739-13.557 10.739-1.666 0-3.102-.444-4.307-1.329-1.205-.887-1.807-2.33-1.807-4.332s1.106-4.501 3.322-7.496c2.215-2.995 3.836-4.918 4.864-5.769 1.027-.851 1.719-1.276 2.073-1.276.355-.002.533.23.533.69zM395.658 60.551c2.693 0 4.041.922 4.041 2.765 0 .993-.231 1.719-.691 2.18-.461.461-1.444 1.993-2.95 4.598-1.507 2.605-3.173 5.938-4.997 9.994-1.826 4.059-3.004 7.523-3.536 10.394-.105.354-.159.851-.159 1.489 0 1.949.531 2.924 1.595 2.924s2.321-.506 3.774-1.516 2.746-2.091 3.881-3.242a104.838 104.838 0 0 0 3.323-3.536c1.08-1.204 1.728-1.896 1.94-2.073.212-.177.531-.266.957-.266.673 0 1.08.514 1.223 1.541.141 1.029.212 2.092.212 3.19s-.106 1.86-.318 2.286c-1.028 2.02-3.288 4.447-6.778 7.283-3.491 2.835-6.664 4.253-9.517 4.253s-4.953-.869-6.299-2.604c-1.348-1.736-2.021-3.66-2.021-5.769s.354-3.961 1.063-5.556c-2.942 3.828-6.318 7.07-10.128 9.729s-6.92 3.987-9.33 3.987-4.377-.727-5.9-2.18c-1.95-1.808-2.924-4.314-2.924-7.522 0-3.207.718-6.433 2.152-9.676a34.898 34.898 0 0 1 5.662-8.878 56.782 56.782 0 0 1 7.709-7.31c5.882-4.607 11.305-6.911 16.268-6.911 1.913 0 3.473.319 4.678.957 1.205.638 1.967 1.436 2.286 2.392.851-1.276 1.568-2.082 2.153-2.419.585-.335 1.462-.504 2.631-.504zm-7.07 5.901c-6.061 0-12.333 3.368-18.819 10.101-2.304 2.411-4.422 5.299-6.353 8.666-1.933 3.367-2.897 5.671-2.897 6.911 0 1.241.354 1.86 1.063 1.86.991 0 3.756-1.957 8.293-5.875 4.536-3.915 7.549-6.795 9.037-8.639 1.63-2.054 4.856-6.396 9.676-13.024z\" />\n  <path d=\"M425.429 88.993c0 1.063-.106 1.825-.318 2.286-1.737 3.545-4.502 6.406-8.294 8.586s-7.089 3.27-9.888 3.27c-2.8 0-5.21-.939-7.23-2.818-2.02-1.878-3.03-3.791-3.03-5.741 0-1.948.975-4.784 2.924-8.506s3.898-7.159 5.849-10.313c1.948-3.154 2.924-4.864 2.924-5.13s-.364-.788-1.09-1.568c-.727-.779-1.09-1.355-1.09-1.728s.735-1.347 2.206-2.924 3.261-3.137 5.369-4.678c2.108-1.542 3.722-2.313 4.838-2.313s2.117.497 3.004 1.489c.886.993 1.329 1.896 1.329 2.711s-4.219 8.488-12.652 23.019c-.106.213-.399.683-.878 1.409s-.851 1.328-1.116 1.807-.576 1.056-.931 1.729c-.709 1.418-1.062 2.604-1.062 3.562 0 1.206.814 1.808 2.445 1.808 1.63 0 3.322-.559 5.077-1.675 1.754-1.116 3.27-2.347 4.545-3.694 3.331-3.58 5.228-5.369 5.688-5.369.92-.003 1.381 1.591 1.381 4.781zm8.612-46.41c0 2.02-.939 4.049-2.817 6.087-1.879 2.039-3.837 3.057-5.874 3.057-2.039 0-3.057-1.063-3.057-3.19s.895-4.155 2.685-6.087c1.789-1.931 3.765-2.897 5.927-2.897.957 0 1.719.266 2.286.797.566.531.85 1.275.85 2.233z\" />\n  <path d=\"M470.059 22.673c1.294 1.01 1.94 2.508 1.94 4.492 0 1.985-1.099 5.095-3.296 9.33-2.198 4.235-4.838 8.559-7.921 12.971-3.084 4.413-6.575 9.1-10.473 14.062-6.167 7.868-12.087 14.938-17.757 21.212-.035.426-.186 1.215-.451 2.365-.267 1.152-.399 2.312-.399 3.482s.54 2.225 1.622 3.163c1.08.939 2.419 1.409 4.014 1.409s3.304-.566 5.13-1.701c1.825-1.135 3.411-2.393 4.758-3.775 3.544-3.649 5.741-5.475 6.593-5.475.851 0 1.275 1.293 1.275 3.881v1.062c0 1.383-.248 2.393-.744 3.03-2.978 3.651-6.326 6.372-10.048 8.161s-7.248 2.684-10.579 2.684c-3.332 0-5.866-1.019-7.603-3.057-1.736-2.037-2.604-4.828-2.604-8.373 0-6.91 1.852-15.035 5.556-24.375 3.703-9.338 7.876-17.286 12.52-23.843 10.454-14.814 18.447-22.222 23.976-22.222 1.7.002 3.197.507 4.491 1.517zm-6.884 7.31c0-.531-.178-.797-.532-.797-1.241 0-4.501 3.544-9.781 10.632-5.281 7.089-9.101 12.742-11.457 16.959-2.357 4.218-4.581 9.516-6.672 15.895 4.182-4.961 9.968-12.696 17.357-23.205 7.389-10.508 11.085-17.003 11.085-19.484z\" />\n</symbol>"
});
var yellowtail_result = browser_sprite_build_default.a.add(yellowtail_symbol);
/* harmony default export */ var yellowtail = (yellowtail_symbol);
// CONCATENATED MODULE: ./src/icons/myunderwood.svg


var myunderwood_symbol = new browser_symbol_default.a({
  "id": "myunderwood",
  "use": "myunderwood-usage",
  "viewBox": "0 0 566.93 141.73",
  "content": "<symbol xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 566.93 141.73\" id=\"myunderwood\">\n  <path d=\"M39.001 43.776c.313-1.357.77-2.311 1.371-2.859.6-.548 1.266-.862 1.998-.94.73-.078 1.514 0 2.35.235.834.235 1.684.418 2.545.548.862.131 1.697.157 2.507.079.809-.079 1.579-.457 2.311-1.136L57.41 53.49c-.313-.417-.523-.496-.627-.235-.105.262-.313.548-.626.862a13.194 13.194 0 0 1 2.702 5.718c.443 2.142.835 4.322 1.175 6.541.339 2.22.834 4.4 1.488 6.542.652 2.141 1.841 4.072 3.564 5.796-.679-.94-.979-1.735-.901-2.39a3.484 3.484 0 0 1 .784-1.801 8.334 8.334 0 0 1 1.645-1.527c.652-.471 1.187-.966 1.605-1.489.417-.521.639-1.083.666-1.684.026-.6-.353-1.292-1.136-2.076a87.23 87.23 0 0 0 1.762-4.23 66.73 66.73 0 0 0 1.841-5.444 86.75 86.75 0 0 0 1.567-6.228c.47-2.193.809-4.386 1.018-6.58.784-1.461 1.684-2.507 2.703-3.133 1.019-.627 2.076-.979 3.172-1.058 1.097-.079 2.232.053 3.408.392 1.175.34 2.336.693 3.486 1.058 1.148.366 2.258.693 3.329.979 1.07.288 2.076.379 3.016.274a32.993 32.993 0 0 0-1.919 1.919 14.115 14.115 0 0 1-1.724 1.606c-.601.47-1.267.875-1.998 1.214-.731.34-1.593.588-2.585.744.47.732.666 1.253.588 1.567-.079.313-.313.626-.705.94l-1.371 1.097c-.522.418-.94 1.045-1.253 1.88.313.209.574.431.783.666.208.235.392.431.548.587s.339.262.548.313c.208.052.496 0 .861-.157v2.037c-.366-.365-.601-.666-.705-.901-.105-.235-.34-.169-.705.196l1.41 6.188c-.366 0-.601-.104-.705-.313-.105-.208-.34-.313-.705-.313 1.357 1.515 1.945 3.004 1.762 4.465a18.7 18.7 0 0 1-1.057 4.27 18.645 18.645 0 0 0-1.058 4.152c-.184 1.384.404 2.755 1.762 4.112-.888.366-1.384.796-1.488 1.292-.105.497-.039 1.019.196 1.566.235.549.509 1.111.823 1.685.313.575.47 1.124.47 1.646v1.331h-.705c-.523.366-.744.705-.666 1.019s.287.627.626.94a5.58 5.58 0 0 0 1.175.822c.443.234.744.457.901.666l3.525-2.037c.313.522.548 1.202.705 2.037a6.71 6.71 0 0 1 .039 2.389c-.131.757-.431 1.383-.901 1.88-.47.496-1.124.666-1.958.51-1.202 0-2.585.012-4.151.039a28.002 28.002 0 0 1-4.661-.313c-1.541-.235-2.951-.627-4.23-1.175-1.28-.549-2.181-1.423-2.702-2.625 2.088-.521 3.551-1.292 4.387-2.311.834-1.019 1.41-2.18 1.723-3.485s.496-2.754.548-4.348c.051-1.593.339-3.251.862-4.974h1.41c-1.045-.679-1.633-1.476-1.762-2.39-.131-.913-.079-1.892.157-2.938.235-1.044.548-2.102.94-3.172.392-1.07.574-2.127.548-3.173-.027-1.044-.366-2.023-1.019-2.938-.653-.913-1.894-1.709-3.721-2.389l.705 6.11c-.313-.157-.64-.443-.979-.862a24.68 24.68 0 0 0-1.018-1.175c-.34-.365-.693-.588-1.058-.666-.366-.078-.732.145-1.097.666 0 .732-.053 1.501-.157 2.311-.105.811.183 1.398.862 1.763h2.742c-1.619-.208-2.755-.183-3.408.078-.653.262-1.057.679-1.214 1.253-.157.575-.145 1.253.039 2.037.183.783.313 1.593.392 2.428a6.872 6.872 0 0 1-.196 2.429c-.209.783-.757 1.463-1.645 2.036v2.037h-.783L67.747 94.38c-1.829.47-3.278.521-4.348.156-1.071-.366-1.88-1.019-2.428-1.958-.548-.94-.94-2.088-1.175-3.447a66.155 66.155 0 0 1-.588-4.229 85.875 85.875 0 0 0-.587-4.387c-.235-1.461-.64-2.768-1.214-3.916l-2.664-12.221h-2.037c.521-.887.874-1.645 1.058-2.271.182-.626.261-1.175.235-1.645-.027-.47-.157-.874-.392-1.214a7.892 7.892 0 0 0-.901-1.058h.705c.521-.521.744-.901.666-1.136-.078-.235-.262-.431-.548-.588a10.21 10.21 0 0 1-.94-.587c-.34-.235-.509-.613-.509-1.136h-1.41c-.366 1.359-.47 2.69-.313 3.995.157 1.306.339 2.612.548 3.917.208 1.306.353 2.599.431 3.877.078 1.28-.145 2.599-.666 3.956h1.41c-1.202.888-1.946 2.011-2.233 3.368-.288 1.358-.327 2.781-.117 4.27a24.094 24.094 0 0 0 1.058 4.426c.496 1.463.926 2.689 1.292 3.682a7.874 7.874 0 0 0 1.88 1.37c.73.392 1.396.823 1.998 1.293.6.47 1.018 1.031 1.253 1.684.235.654.091 1.502-.431 2.546-1.045.888-2.05 1.449-3.016 1.685-.967.235-1.946.3-2.938.195a16.317 16.317 0 0 1-2.938-.587 16.268 16.268 0 0 0-2.938-.588 8.833 8.833 0 0 0-2.977.196c-.993.234-1.985.822-2.977 1.763-.157-.366-.484-.862-.979-1.489a7.874 7.874 0 0 1-1.175-2.036 4.246 4.246 0 0 1-.274-2.193c.104-.73.678-1.332 1.724-1.802l.705.705c2.037-1.724 3.55-3.604 4.543-5.64a20.514 20.514 0 0 0 1.919-6.424c.286-2.244.325-4.594.117-7.05a397.36 397.36 0 0 0-.705-7.441 236.788 236.788 0 0 1-.666-7.559 34.742 34.742 0 0 1 .274-7.559l-5.478-3.527zM78.01 55.525H76.6l1.41 2.664v-2.664zM117.411 61.009a10.4 10.4 0 0 1 4.347-3.368c1.749-.731 3.629-1.175 5.64-1.332 2.01-.157 4.034-.079 6.071.235s3.917.732 5.64 1.253c0 .626.182 1.267.548 1.919.365.654.678 1.292.94 1.919.261.626.325 1.228.196 1.801-.131.575-.693 1.124-1.684 1.645-1.202-.678-2.26-.834-3.173-.47-.914.366-1.737.953-2.467 1.762a21.142 21.142 0 0 0-2.037 2.664c-.627.967-1.28 1.684-1.958 2.154a187.86 187.86 0 0 0-3.76 9.166 2119.07 2119.07 0 0 1-3.486 9.125 269.944 269.944 0 0 1-3.721 9.165 116.733 116.733 0 0 1-4.387 9.126c-1.724 2.037-3.826 3.224-6.306 3.564-2.481.339-4.949-.196-7.403-1.606-.626-.312-1.253-.757-1.88-1.331a7.813 7.813 0 0 1-1.566-1.998 7.233 7.233 0 0 1-.823-2.506c-.131-.915-.013-1.894.353-2.938l3.917-4.778c1.461-.105 2.533.129 3.212.705a4.718 4.718 0 0 1 1.449 2.153c.286.862.457 1.775.509 2.742.052.966.222 1.763.509 2.389.287.627.756 1.005 1.41 1.136.652.13 1.71-.195 3.172-.979l-2.037-2.742c1.723-.47 2.859-1.253 3.408-2.35s.809-2.324.783-3.682a23.162 23.162 0 0 0-.47-4.151c-.288-1.41-.431-2.715-.431-3.917-1.306-2.558-2.403-5.013-3.29-7.363a127.084 127.084 0 0 0-2.781-6.776 40.34 40.34 0 0 0-3.408-6.148c-1.306-1.932-3.055-3.733-5.248-5.405 0-.991.261-1.709.783-2.154a6.088 6.088 0 0 1 1.841-1.058 109.23 109.23 0 0 1 2.193-.783 3.639 3.639 0 0 0 1.841-1.41c1.357.366 2.703.587 4.034.666 1.332.078 2.585.223 3.76.431 1.175.209 2.258.562 3.251 1.058.994.496 1.829 1.319 2.509 2.467zm0 .783c0 .836-.223 1.541-.666 2.115a5.746 5.746 0 0 1-1.566 1.41c-.601.366-1.202.587-1.802.666-.601.079-1.084.039-1.449-.117 0 1.358.051 2.769.157 4.23.104 1.462.521 2.716 1.253 3.76.521.156 1.044.457 1.566.9.521.445 1.058.85 1.606 1.215s1.109.588 1.684.666c.574.078 1.175-.144 1.802-.666.157-1.201.535-2.559 1.136-4.074.6-1.514.991-2.977 1.175-4.387.183-1.41-.039-2.636-.666-3.682-.627-1.043-2.037-1.723-4.23-2.036zM152.661 41.504c1.357 0 2.767-.012 4.23-.039a26.941 26.941 0 0 1 4.347.274c1.436.209 2.807.601 4.113 1.175 1.305.575 2.479 1.437 3.525 2.585a29.798 29.798 0 0 0-3.917 2.35c-1.253.889-2.299 1.919-3.133 3.094-.836 1.175-1.384 2.545-1.645 4.112-.262 1.566-.053 3.368.626 5.405.678.993.913 2.128.705 3.408-.209 1.28-.444 2.598-.705 3.956a13.749 13.749 0 0 0-.196 3.995c.13 1.306.874 2.455 2.232 3.447-1.358.836-2.089 1.684-2.193 2.545-.105.862.065 1.737.509 2.625.443.889.952 1.801 1.527 2.742.574.939.862 1.906.862 2.897.991 1.045 2.037 1.763 3.133 2.154s2.206.575 3.329.548a12.508 12.508 0 0 0 3.447-.587 35.083 35.083 0 0 0 3.564-1.332c1.567-1.147 2.689-2.389 3.368-3.721.678-1.331 1.097-2.741 1.253-4.229s.143-3.042-.039-4.661a245.689 245.689 0 0 1-.509-4.935 54.385 54.385 0 0 1-.235-5.091c0-1.724.286-3.42.862-5.092l-1.958-1.488c1.461-.835 2.127-1.631 1.998-2.389-.131-.756-.536-1.488-1.214-2.193a126.806 126.806 0 0 1-1.958-2.076c-.627-.678-.68-1.383-.157-2.115-.523.366-1.136.587-1.841.666-.705.078-1.345.013-1.919-.196a2.967 2.967 0 0 1-1.41-1.058c-.366-.496-.47-1.162-.313-1.998.313-.73.666-1.527 1.058-2.389a8.958 8.958 0 0 1 1.605-2.389c1.514.366 3.212.523 5.092.47a86.014 86.014 0 0 1 5.757.039c1.958.078 3.864.34 5.718.783 1.853.444 3.538 1.345 5.053 2.703-2.82 1.045-4.923 2.402-6.306 4.073a14.073 14.073 0 0 0-2.859 5.679c-.522 2.115-.758 4.4-.705 6.854.051 2.455.143 4.962.274 7.52a95.34 95.34 0 0 1 .078 7.716 24.15 24.15 0 0 1-1.371 7.402c-.993 2.089-2.115 3.877-3.369 5.365a165.741 165.741 0 0 0-3.838 4.739c-.732-.68-1.476-.914-2.233-.705-.757.208-1.541.549-2.35 1.019-.811.47-1.633.913-2.468 1.331-.836.418-1.672.549-2.506.393-1.672-.157-3.369-.562-5.092-1.215a20.952 20.952 0 0 1-4.778-2.546 18.62 18.62 0 0 1-3.877-3.721 14.524 14.524 0 0 1-2.467-4.66 54.777 54.777 0 0 1-.274-9.479c.183-3.133.287-6.201.313-9.204.025-3.002-.17-5.94-.587-8.812-.419-2.872-1.384-5.666-2.898-8.382-.522.523-.993.783-1.41.783-.418 0-.81-.156-1.175-.47a7.331 7.331 0 0 1-1.058-1.136 7.524 7.524 0 0 0-1.058-1.136c-.157-1.514-.013-2.493.431-2.938.443-.443 1.044-.705 1.801-.784.757-.078 1.606-.169 2.546-.274.941-.101 1.829-.571 2.665-1.407zM206.552 54.585c1.566 1.149 3.407 1.776 5.522 1.88 2.115.105 4.295.04 6.541-.196 2.245-.235 4.465-.482 6.658-.744 2.193-.261 4.203-.182 6.031.235 1.828.418 3.369 1.358 4.622 2.82 1.253 1.462 2.062 3.76 2.428 6.893.365 2.037.548 4.166.548 6.384 0 2.22.143 4.4.431 6.541.287 2.143.901 4.191 1.841 6.149s2.507 3.695 4.7 5.209c-.366 1.358-.94 2.351-1.724 2.977-.783.627-1.711 1.044-2.781 1.254-1.071.208-2.259.247-3.564.117a228.119 228.119 0 0 1-3.956-.431 41.03 41.03 0 0 0-3.956-.274c-1.306-.025-2.534.117-3.682.431-.679-1.461-.889-2.649-.627-3.563a4.458 4.458 0 0 1 1.488-2.272c.731-.6 1.579-1.136 2.546-1.605a12.892 12.892 0 0 0 2.546-1.605 4.458 4.458 0 0 0 1.488-2.232c.261-.888.051-2.062-.626-3.525-.157-1.566-.209-3.251-.157-5.053a52.945 52.945 0 0 0-.118-5.366 20.533 20.533 0 0 0-1.018-5.091c-.548-1.618-1.476-3.028-2.781-4.23-1.724-.313-3.369-.261-4.935.157a16.177 16.177 0 0 0-4.465 1.958 20.199 20.199 0 0 0-3.838 3.133 34.59 34.59 0 0 0-2.977 3.525c.313 1.359.431 2.794.353 4.309-.079 1.516-.17 3.016-.274 4.504a62.333 62.333 0 0 0-.157 4.387c0 1.438.248 2.769.744 3.995.496 1.228 1.318 2.285 2.468 3.173 1.148.888 2.82 1.566 5.013 2.036h1.253c.208.889.039 1.566-.509 2.037-.548.47-1.345.797-2.389.979-1.045.184-2.246.274-3.604.274s-2.755-.013-4.19-.039a43.941 43.941 0 0 0-4.152.117c-1.332.104-2.442.313-3.329.627-1.045-.313-1.815-.783-2.311-1.41a34.354 34.354 0 0 0-1.684-1.958c.835-.991 1.802-1.867 2.898-2.624s2.154-1.54 3.172-2.351a14.214 14.214 0 0 0 2.624-2.702c.731-.992 1.175-2.244 1.332-3.76-.889-1.514-1.398-3.355-1.528-5.523a111.674 111.674 0 0 1-.196-6.736c0-2.323-.078-4.608-.235-6.854-.152-2.248-.649-4.233-1.484-5.957zM276.894 42.835c.992 1.149 1.514 2.417 1.567 3.799a23.995 23.995 0 0 1-.235 4.269 50.187 50.187 0 0 0-.431 4.269c-.078 1.384.3 2.651 1.136 3.799-.679 2.769-.9 5.653-.666 8.656.235 3.003.691 6.228 1.371 9.675-.783.574-1.267 1.084-1.449 1.527-.184.443-.196.875-.039 1.292.157.419.404.822.744 1.214.339.393.639.797.901 1.215.261.418.417.861.47 1.331.051.47-.157.993-.627 1.566l8.852 6.032c-1.358 1.724-2.69 2.754-3.995 3.094a7.821 7.821 0 0 1-3.956 0 17.333 17.333 0 0 1-3.956-1.566 22.167 22.167 0 0 0-3.995-1.685 9.171 9.171 0 0 0-4.112-.312c-1.384.209-2.808 1.045-4.27 2.506-1.358 0-2.741-.234-4.151-.705a16.738 16.738 0 0 1-3.956-1.919 18.924 18.924 0 0 1-3.329-2.78c-.993-1.044-1.75-2.167-2.271-3.368-.626-2.193-1.11-4.583-1.449-7.168a32.799 32.799 0 0 1-.117-7.677c.26-2.532.887-4.921 1.88-7.167.991-2.245 2.506-4.152 4.543-5.719.157-.834.561-1.226 1.214-1.175.652.053 1.305.157 1.958.313.652.157 1.226.184 1.723.078.496-.104.666-.73.509-1.88.678.313 1.645.679 2.898 1.097 1.253.418 2.572.732 3.956.94 1.383.209 2.742.235 4.073.078 1.332-.156 2.415-.626 3.251-1.41a109.582 109.582 0 0 1-.901-3.172c-.288-1.07-.431-2.311-.431-3.721-.47-.574-1.124-.926-1.958-1.057a17.33 17.33 0 0 0-2.664-.196c-.94 0-1.841.013-2.702.039-.862.027-1.567-.091-2.115-.353-.548-.261-.861-.717-.94-1.371-.078-.652.247-1.657.979-3.016l12.69.628zm-18.173 19.584c-1.359.679-2.311 1.554-2.859 2.624a11.897 11.897 0 0 0-1.136 3.408 40.929 40.929 0 0 0-.47 3.76 10.95 10.95 0 0 1-.94 3.682A101.916 101.916 0 0 0 255 80.004a17.605 17.605 0 0 0 2.233 3.8 12.024 12.024 0 0 0 3.133 2.859c1.201.758 2.663 1.214 4.386 1.37.835-.156 1.528-.534 2.076-1.136.548-.6 1.044-1.253 1.488-1.958.443-.705.848-1.396 1.214-2.076.365-.678.809-1.175 1.332-1.488l.705 1.332c.678-1.201 1.097-2.323 1.253-3.368.157-1.044.235-2.049.235-3.017v-2.858c0-.94.182-1.932.548-2.977.313-2.193-.092-4.073-1.214-5.64-1.124-1.566-2.52-2.728-4.191-3.486a10.703 10.703 0 0 0-5.248-.94c-1.827.131-3.238.797-4.229 1.998zM326.479 67.119c.783 1.776 1.083 3.173.9 4.191-.184 1.019-.692 1.763-1.527 2.232-.836.47-1.894.744-3.172.823-1.28.078-2.599.104-3.956.078-1.358-.026-2.663-.052-3.917-.078-1.253-.026-2.271.065-3.055.273-1.358.156-2.769.092-4.23-.195s-2.938-.51-4.426-.666-2.989-.13-4.504.078c-1.515.209-3.029.889-4.543 2.037.312 1.723.939 3.133 1.88 4.229s2.037 2.036 3.29 2.819a43.55 43.55 0 0 0 3.956 2.194 29.916 29.916 0 0 1 3.877 2.271c.835-.835 1.71-1.227 2.624-1.175.913.052 1.763.117 2.546.195s1.436-.025 1.959-.313c.521-.286.783-1.187.783-2.702 1.2.313 2.102.195 2.702-.353.6-.548 1.175-1.161 1.724-1.841.548-.678 1.227-1.227 2.036-1.645s2.049-.287 3.721.391L321.7 90.854c-.627 0-1.371.053-2.232.157s-1.75.301-2.663.587c-.915.288-1.815.693-2.703 1.214a8.673 8.673 0 0 0-2.35 2.037 33.146 33.146 0 0 1-4.935-.9 31.06 31.06 0 0 1-5.092-1.802 28.705 28.705 0 0 1-4.817-2.781 20.091 20.091 0 0 1-4.113-3.917c-1.672-3.812-2.768-7.585-3.289-11.319-.523-3.732-.105-7.637 1.253-11.71 2.036-2.401 4.151-4.309 6.345-5.718 2.193-1.41 4.778-2.637 7.755-3.682 2.872-.521 5.392-.3 7.56.666a20.796 20.796 0 0 1 5.796 3.838 34.863 34.863 0 0 1 4.505 5.131c1.303 1.827 2.556 3.316 3.759 4.464zm-20.994-8.852c-4.543.679-7.912 3.396-10.104 8.147 1.566.522 3.263.81 5.091.861 1.828.053 3.708.039 5.641-.039 1.931-.078 3.89-.157 5.875-.235a47.298 47.298 0 0 1 5.796.117c0-1.514-.444-2.859-1.331-4.034a11.17 11.17 0 0 0-3.251-2.898 14.648 14.648 0 0 0-4.034-1.645c-1.411-.339-2.639-.431-3.683-.274zM332.979 57.954c0-1.461.353-2.625 1.058-3.486.705-.862 1.618-1.461 2.742-1.802 1.122-.339 2.375-.457 3.76-.353 1.383.105 2.754.379 4.112.822a16.595 16.595 0 0 1 3.76 1.763c1.148.732 2.062 1.541 2.742 2.428 4.073-3.028 7.885-4.438 11.437-4.23 3.551.209 7.18 1.829 10.888 4.857.679.888 1.058 1.762 1.136 2.624.079.862.079 1.762 0 2.703-.078.94-.144 1.919-.195 2.937-.053 1.019.104 2.103.47 3.251-1.045.209-2.063.405-3.055.587-.993.184-1.958.262-2.898.235a6.004 6.004 0 0 1-2.624-.666c-.811-.417-1.555-1.148-2.232-2.193l-2.742-5.327c-2.402.313-4.621 1.253-6.658 2.82-2.036 1.567-3.421 3.552-4.151 5.954.156 1.045.156 2.246 0 3.604a53.577 53.577 0 0 0-.313 4.309 19.458 19.458 0 0 0 .392 4.582c.313 1.541.991 2.99 2.037 4.348.678 0 1.553.026 2.624.078 1.069.053 2.127.195 3.172.431s1.971.64 2.781 1.214c.809.575 1.293 1.358 1.449 2.351-.47 1.201-1.188 1.919-2.154 2.154-.967.234-1.997.325-3.094.273a69.003 69.003 0 0 0-3.329-.078c-1.124 0-2.104.339-2.938 1.019-1.358-.522-2.82-.797-4.387-.822-1.566-.027-3.173-.04-4.817-.04a45.11 45.11 0 0 1-4.936-.273 11.297 11.297 0 0 1-4.66-1.606c-.523-.47-.666-.991-.432-1.566.235-.574.627-1.108 1.176-1.605a13.577 13.577 0 0 1 1.802-1.371c.652-.417 1.136-.705 1.449-.861.834.679 1.436.928 1.801.744.365-.183.692-.482.979-.901a5 5 0 0 1 1.097-1.136c.443-.339 1.188-.353 2.232-.039a28.594 28.594 0 0 0 1.332-6.109c.208-2.037.286-4.061.234-6.071a93.841 93.841 0 0 0-.353-6.032c-.184-2.01-.353-4.007-.509-5.992a2.797 2.797 0 0 0-1.685-.823 8.883 8.883 0 0 0-2.036 0c-.705.079-1.424.17-2.154.274-.731.105-1.397.105-1.997 0a2.767 2.767 0 0 1-1.528-.784c-.42-.42-.681-1.151-.785-2.196zM417.029 67.824c.104-.678.078-1.5-.078-2.467-.157-.966-.313-1.945-.471-2.938a15.38 15.38 0 0 1-.195-2.859c.025-.913.274-1.684.744-2.311s1.227-1.044 2.271-1.253c1.044-.208 2.532-.078 4.465.392 0 .732.274 1.306.822 1.723.549.419 1.136.967 1.763 1.645 0 .784-.209 1.737-.627 2.859a42.279 42.279 0 0 1-1.488 3.486 87.76 87.76 0 0 1-1.762 3.486c-.602 1.124-1.058 2.103-1.371 2.937.313 1.41.392 2.73.235 3.956-.157 1.228-.432 2.468-.823 3.721s-.81 2.573-1.253 3.956c-.444 1.384-.744 2.938-.901 4.661.365.626.418 1.24.157 1.841a8.342 8.342 0 0 1-1.097 1.801 82.84 82.84 0 0 1-1.449 1.802c-.497.601-.822 1.24-.979 1.92-.992.364-1.775.378-2.35.039a4.172 4.172 0 0 1-1.41-1.371 20.811 20.811 0 0 1-1.058-1.88c-.34-.678-.771-1.201-1.292-1.566.521-1.88.666-3.486.431-4.817a13.05 13.05 0 0 0-1.214-3.683 27.074 27.074 0 0 0-1.998-3.289c-.758-1.07-1.397-2.284-1.919-3.643h-2.037c-.575.992-1.045 2.168-1.409 3.525a301.504 301.504 0 0 0-1.097 4.189 135.776 135.776 0 0 1-1.136 4.191c-.393 1.358-.901 2.533-1.528 3.525-.626.992-1.384 1.762-2.271 2.311-.889.548-2.011.691-3.368.431a30.003 30.003 0 0 1-2.82-8.264c-.522-2.847-1.045-5.652-1.566-8.421a66.585 66.585 0 0 0-2.075-8.147c-.862-2.663-2.312-5.17-4.348-7.52h-1.41l.705-4.7c.574-.365 1.122-.457 1.645-.274a5.283 5.283 0 0 1 1.488.823c.471.366.901.757 1.293 1.175.392.419.744.679 1.058.784.313.105.587-.013.822-.353.235-.339.404-1.058.509-2.154 1.044.679 2.206.967 3.486.862a48.8 48.8 0 0 1 3.956-.157c-.68.993-1.268 2.142-1.763 3.446a19.44 19.44 0 0 0-1.058 4.034 18.4 18.4 0 0 0-.157 4.152c.104 1.384.418 2.65.94 3.799l2.037 2.037c1.253-.313 2.205-1.148 2.858-2.507.652-1.357 1.175-2.872 1.567-4.543.392-1.67.77-3.329 1.136-4.974.364-1.645.861-2.963 1.488-3.956.626-.992 1.488-1.475 2.585-1.449 1.097.027 2.61.875 4.543 2.546.991 1.202 1.514 2.52 1.566 3.956a59.53 59.53 0 0 1 0 4.309 15.114 15.114 0 0 0 .392 4.112c.313 1.306 1.227 2.377 2.742 3.212v3.994c1.147-.104 1.997-.403 2.546-.9a3.614 3.614 0 0 0 1.097-1.802c.182-.704.247-1.488.195-2.35a89.592 89.592 0 0 0-.195-2.585c-.079-.862-.118-1.685-.118-2.468s.183-1.462.549-2.037zM464.106 63.359c.364 1.88.835 3.578 1.41 5.092a54.463 54.463 0 0 1 1.488 4.504c.417 1.488.666 3.029.744 4.621.078 1.594-.196 3.408-.822 5.444a95.822 95.822 0 0 0-2.664 3.799 37.794 37.794 0 0 1-2.858 3.76 19.317 19.317 0 0 1-3.33 3.056c-1.201.861-2.559 1.37-4.073 1.527-2.193.364-4.491.482-6.893.353a23.963 23.963 0 0 1-6.933-1.41 18.216 18.216 0 0 1-5.992-3.604c-1.776-1.592-3.082-3.643-3.917-6.149-.156-1.147-.209-2.453-.156-3.916.051-1.461.117-2.963.195-4.504.078-1.54.13-3.042.156-4.504.026-1.461-.039-2.793-.195-3.995.156-2.037.822-3.76 1.997-5.17a16.03 16.03 0 0 1 4.23-3.564 26.976 26.976 0 0 1 5.365-2.389 533.76 533.76 0 0 1 5.405-1.724c1.514-.313 3.028-.221 4.543.274a18.866 18.866 0 0 1 4.387 2.115 35.11 35.11 0 0 1 4.113 3.133 152.375 152.375 0 0 0 3.8 3.251zm-13.551-1.254c-.68.47-1.645.705-2.898.705-1.253 0-2.494.066-3.721.196-1.228.131-2.26.483-3.094 1.058-.836.575-1.176 1.697-1.019 3.368l-2.037-.626c0 1.358-.209 2.716-.626 4.073a13.75 13.75 0 0 0-.627 4.073c-.156 1.829-.014 3.368.431 4.622a9.565 9.565 0 0 0 1.998 3.328 20.153 20.153 0 0 0 3.133 2.742c1.201.861 2.479 1.789 3.838 2.781.679.156 1.567.223 2.664.195 1.097-.025 2.258-.235 3.485-.627 1.227-.392 2.429-.979 3.604-1.762 1.175-.784 2.154-1.854 2.938-3.212 1.357-2.401 2.036-5 2.036-7.794 0-2.793-.679-5.392-2.036-7.794-.783.157-1.424-.026-1.919-.548a15.924 15.924 0 0 1-1.488-1.841 11.707 11.707 0 0 0-1.802-1.998c-.706-.625-1.659-.939-2.86-.939zM505.23 63.359c.364 1.88.835 3.578 1.41 5.092a54.463 54.463 0 0 1 1.488 4.504c.417 1.488.666 3.029.744 4.621.078 1.594-.196 3.408-.822 5.444a95.822 95.822 0 0 0-2.664 3.799 37.794 37.794 0 0 1-2.858 3.76 19.317 19.317 0 0 1-3.33 3.056c-1.201.861-2.559 1.37-4.073 1.527-2.193.364-4.491.482-6.893.353a23.963 23.963 0 0 1-6.933-1.41 18.216 18.216 0 0 1-5.992-3.604c-1.776-1.592-3.082-3.643-3.917-6.149-.156-1.147-.209-2.453-.156-3.916.051-1.461.117-2.963.195-4.504.078-1.54.13-3.042.156-4.504.026-1.461-.039-2.793-.195-3.995.156-2.037.822-3.76 1.997-5.17a16.03 16.03 0 0 1 4.23-3.564 26.976 26.976 0 0 1 5.365-2.389 533.76 533.76 0 0 1 5.405-1.724c1.514-.313 3.028-.221 4.543.274a18.866 18.866 0 0 1 4.387 2.115 35.11 35.11 0 0 1 4.113 3.133 152.375 152.375 0 0 0 3.8 3.251zm-13.551-1.254c-.68.47-1.645.705-2.898.705-1.253 0-2.494.066-3.721.196-1.228.131-2.26.483-3.094 1.058-.836.575-1.176 1.697-1.019 3.368l-2.037-.626c0 1.358-.209 2.716-.626 4.073a13.75 13.75 0 0 0-.627 4.073c-.156 1.829-.014 3.368.431 4.622a9.565 9.565 0 0 0 1.998 3.328 20.153 20.153 0 0 0 3.133 2.742c1.201.861 2.479 1.789 3.838 2.781.679.156 1.567.223 2.664.195 1.097-.025 2.258-.235 3.485-.627 1.227-.392 2.429-.979 3.604-1.762 1.175-.784 2.154-1.854 2.938-3.212 1.357-2.401 2.036-5 2.036-7.794 0-2.793-.679-5.392-2.036-7.794-.783.157-1.424-.026-1.919-.548a15.924 15.924 0 0 1-1.488-1.841 11.707 11.707 0 0 0-1.802-1.998c-.706-.625-1.659-.939-2.86-.939zM539.854 42.835c.991 1.149 1.515 2.417 1.566 3.799a23.899 23.899 0 0 1-.234 4.269 49.782 49.782 0 0 0-.431 4.269c-.079 1.384.3 2.651 1.136 3.799-.68 2.769-.901 5.653-.666 8.656.235 3.003.691 6.228 1.371 9.675-.783.574-1.268 1.084-1.449 1.527-.184.443-.196.875-.039 1.292.156.419.403.822.744 1.214.339.393.639.797.9 1.215.261.418.417.861.47 1.331.052.47-.156.993-.626 1.566l8.852 6.032c-1.359 1.724-2.69 2.754-3.995 3.094a7.821 7.821 0 0 1-3.956 0 17.333 17.333 0 0 1-3.956-1.566 22.167 22.167 0 0 0-3.995-1.685c-1.358-.417-2.729-.521-4.112-.312s-2.808 1.045-4.269 2.506c-1.358 0-2.742-.234-4.152-.705a16.731 16.731 0 0 1-3.955-1.919 18.888 18.888 0 0 1-3.329-2.78c-.993-1.044-1.751-2.167-2.271-3.368-.627-2.193-1.11-4.583-1.449-7.168a32.745 32.745 0 0 1-.118-7.677 23.617 23.617 0 0 1 1.88-7.167c.992-2.245 2.507-4.152 4.544-5.719.156-.834.561-1.226 1.214-1.175.652.053 1.305.157 1.958.313.652.157 1.227.184 1.724.078.496-.104.666-.73.509-1.88.679.313 1.646.679 2.898 1.097 1.254.418 2.571.732 3.956.94 1.383.209 2.741.235 4.073.078 1.332-.156 2.415-.626 3.251-1.41a112.864 112.864 0 0 1-.901-3.172c-.287-1.07-.431-2.311-.431-3.721-.47-.574-1.123-.926-1.958-1.057a17.335 17.335 0 0 0-2.663-.196c-.94 0-1.841.013-2.703.039-.861.027-1.566-.091-2.114-.353-.549-.261-.862-.717-.94-1.371-.078-.652.247-1.657.979-3.016l12.687.628zm-18.173 19.584c-1.358.679-2.311 1.554-2.859 2.624a11.897 11.897 0 0 0-1.136 3.408 40.929 40.929 0 0 0-.47 3.76 10.975 10.975 0 0 1-.94 3.682 100.51 100.51 0 0 0 1.685 4.111 17.642 17.642 0 0 0 2.232 3.8 12.04 12.04 0 0 0 3.133 2.859c1.201.758 2.664 1.214 4.387 1.37.835-.156 1.527-.534 2.076-1.136.548-.6 1.044-1.253 1.488-1.958.443-.705.848-1.396 1.214-2.076.365-.678.81-1.175 1.332-1.488l.705 1.332c.678-1.201 1.097-2.323 1.253-3.368.157-1.044.235-2.049.235-3.017v-2.858c0-.94.183-1.932.548-2.977.313-2.193-.092-4.073-1.214-5.64-1.124-1.566-2.521-2.728-4.19-3.486a10.705 10.705 0 0 0-5.249-.94c-1.829.131-3.239.797-4.23 1.998z\" />\n</symbol>"
});
var myunderwood_result = browser_sprite_build_default.a.add(myunderwood_symbol);
/* harmony default export */ var myunderwood = (myunderwood_symbol);
// CONCATENATED MODULE: ./src/icons/down.svg


var down_symbol = new browser_symbol_default.a({
  "id": "down",
  "use": "down-usage",
  "viewBox": "0 0 512 512",
  "content": "<symbol viewBox=\"0 0 512 512\" xmlns=\"http://www.w3.org/2000/svg\" id=\"down\">\n    <path d=\"M98.9,184.7l1.8,2.1l136,156.5c4.6,5.3,11.5,8.6,19.2,8.6c7.7,0,14.6-3.4,19.2-8.6L411,187.1l2.3-2.6  c1.7-2.5,2.7-5.5,2.7-8.7c0-8.7-7.4-15.8-16.6-15.8v0H112.6v0c-9.2,0-16.6,7.1-16.6,15.8C96,179.1,97.1,182.2,98.9,184.7z\" />\n</symbol>"
});
var down_result = browser_sprite_build_default.a.add(down_symbol);
/* harmony default export */ var down = (down_symbol);
// CONCATENATED MODULE: ./src/icons/align-left.svg


var align_left_symbol = new browser_symbol_default.a({
  "id": "align-left",
  "use": "align-left-usage",
  "viewBox": "0 0 1792 1792",
  "content": "<symbol viewBox=\"0 0 1792 1792\" xmlns=\"http://www.w3.org/2000/svg\" id=\"align-left\">\n    <path d=\"M1792 1344v128q0 26-19 45t-45 19h-1664q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1664q26 0 45 19t19 45zm-384-384v128q0 26-19 45t-45 19h-1280q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1280q26 0 45 19t19 45zm256-384v128q0 26-19 45t-45 19h-1536q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1536q26 0 45 19t19 45zm-384-384v128q0 26-19 45t-45 19h-1152q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1152q26 0 45 19t19 45z\" />\n</symbol>"
});
var align_left_result = browser_sprite_build_default.a.add(align_left_symbol);
/* harmony default export */ var align_left = (align_left_symbol);
// CONCATENATED MODULE: ./src/icons/align-center.svg


var align_center_symbol = new browser_symbol_default.a({
  "id": "align-center",
  "use": "align-center-usage",
  "viewBox": "0 0 1792 1792",
  "content": "<symbol viewBox=\"0 0 1792 1792\" xmlns=\"http://www.w3.org/2000/svg\" id=\"align-center\">\n    <path d=\"M1792 1344v128q0 26-19 45t-45 19h-1664q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1664q26 0 45 19t19 45zm-384-384v128q0 26-19 45t-45 19h-896q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h896q26 0 45 19t19 45zm256-384v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm-384-384v128q0 26-19 45t-45 19h-640q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h640q26 0 45 19t19 45z\" />\n</symbol>"
});
var align_center_result = browser_sprite_build_default.a.add(align_center_symbol);
/* harmony default export */ var align_center = (align_center_symbol);
// CONCATENATED MODULE: ./src/icons/align-right.svg


var align_right_symbol = new browser_symbol_default.a({
  "id": "align-right",
  "use": "align-right-usage",
  "viewBox": "0 0 1792 1792",
  "content": "<symbol viewBox=\"0 0 1792 1792\" xmlns=\"http://www.w3.org/2000/svg\" id=\"align-right\">\n    <path d=\"M1792 1344v128q0 26-19 45t-45 19h-1664q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1664q26 0 45 19t19 45zm0-384v128q0 26-19 45t-45 19h-1280q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1280q26 0 45 19t19 45zm0-384v128q0 26-19 45t-45 19h-1536q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1536q26 0 45 19t19 45zm0-384v128q0 26-19 45t-45 19h-1152q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1152q26 0 45 19t19 45z\" />\n</symbol>"
});
var align_right_result = browser_sprite_build_default.a.add(align_right_symbol);
/* harmony default export */ var align_right = (align_right_symbol);
// CONCATENATED MODULE: ./src/icons/vertical-top.svg


var vertical_top_symbol = new browser_symbol_default.a({
  "id": "vertical-top",
  "use": "vertical-top-usage",
  "viewBox": "0 0 49 49",
  "content": "<symbol viewBox=\"0 0 49 49\" xmlns=\"http://www.w3.org/2000/svg\" id=\"vertical-top\">\n    <path d=\"M17.933,21.497c-0.228,0.228 -0.297,0.572 -0.173,0.871c0.124,0.299 0.415,0.494 0.739,0.494c1.754,0 4.069,0 4.069,0c0,0 0,12.935 0,18c0,0.531 0.21,1.039 0.585,1.414c0.376,0.376 0.884,0.586 1.415,0.586c0.53,0 1.039,-0.21 1.414,-0.586c0.375,-0.375 0.586,-0.883 0.586,-1.414c0,-5.065 0,-18 0,-18c0,0 2.314,0 4.068,0c0.324,0 0.616,-0.195 0.739,-0.494c0.124,-0.299 0.056,-0.643 -0.173,-0.871c-1.781,-1.781 -4.817,-4.817 -6.069,-6.069c-0.15,-0.15 -0.353,-0.234 -0.565,-0.234c-0.213,0 -0.416,0.084 -0.566,0.234c-1.252,1.252 -4.288,4.288 -6.069,6.069Zm-7.365,-14.635c-0.531,0 -1.039,0.211 -1.415,0.586c-0.375,0.375 -0.585,0.884 -0.585,1.414c0,0.531 0.21,1.039 0.585,1.414c0.376,0.376 0.884,0.586 1.415,0.586c5.745,0 22.254,0 28,0c0.53,0 1.039,-0.21 1.414,-0.586c0.375,-0.375 0.586,-0.883 0.586,-1.414c0,-0.53 -0.211,-1.039 -0.586,-1.414c-0.375,-0.375 -0.884,-0.586 -1.414,-0.586c-5.746,0 -22.255,0 -28,0Z\" />\n</symbol>"
});
var vertical_top_result = browser_sprite_build_default.a.add(vertical_top_symbol);
/* harmony default export */ var vertical_top = (vertical_top_symbol);
// CONCATENATED MODULE: ./src/icons/vertical-center.svg


var vertical_center_symbol = new browser_symbol_default.a({
  "id": "vertical-center",
  "use": "vertical-center-usage",
  "viewBox": "0 0 49 49",
  "content": "<symbol viewBox=\"0 0 49 49\" xmlns=\"http://www.w3.org/2000/svg\" id=\"vertical-center\">\n    <path d=\"M17.933,36.997c-0.228,0.228 -0.297,0.572 -0.173,0.871c0.124,0.299 0.415,0.494 0.739,0.494c1.754,0 4.069,0 4.069,0c0,0 0,3.631 0,6c0,1.105 0.895,2 2,2c1.104,0 2,-0.895 2,-2c0,-2.369 0,-6 0,-6c0,0 2.314,0 4.068,0c0.324,0 0.616,-0.195 0.739,-0.494c0.124,-0.299 0.056,-0.643 -0.173,-0.871c-1.781,-1.781 -4.817,-4.817 -6.069,-6.069c-0.15,-0.15 -0.353,-0.234 -0.565,-0.234c-0.213,0 -0.416,0.084 -0.566,0.234c-1.252,1.252 -4.288,4.288 -6.069,6.069Zm13.269,-25.269c0.229,-0.229 0.297,-0.573 0.173,-0.872c-0.123,-0.299 -0.415,-0.494 -0.739,-0.494c-1.754,0 -4.068,0 -4.068,0c0,0 0,-3.63 0,-6c0,-1.104 -0.896,-2 -2,-2c-1.105,0 -2,0.896 -2,2c0,2.37 0,6 0,6c0,0 -2.315,0 -4.069,0c-0.324,0 -0.615,0.195 -0.739,0.494c-0.124,0.299 -0.055,0.643 0.173,0.872c1.781,1.781 4.817,4.816 6.069,6.069c0.15,0.15 0.353,0.234 0.566,0.234c0.212,0 0.415,-0.084 0.565,-0.234c1.252,-1.253 4.288,-4.288 6.069,-6.069Zm-20.634,10.634c-0.531,0 -1.039,0.211 -1.415,0.586c-0.375,0.375 -0.585,0.884 -0.585,1.414c0,0.531 0.21,1.039 0.585,1.414c0.376,0.376 0.884,0.586 1.415,0.586c5.745,0 22.254,0 28,0c0.53,0 1.039,-0.21 1.414,-0.586c0.375,-0.375 0.586,-0.883 0.586,-1.414c0,-0.53 -0.211,-1.039 -0.586,-1.414c-0.375,-0.375 -0.884,-0.586 -1.414,-0.586c-5.746,0 -22.255,0 -28,0Z\" />\n</symbol>"
});
var vertical_center_result = browser_sprite_build_default.a.add(vertical_center_symbol);
/* harmony default export */ var vertical_center = (vertical_center_symbol);
// CONCATENATED MODULE: ./src/icons/vertical-bottom.svg


var vertical_bottom_symbol = new browser_symbol_default.a({
  "id": "vertical-bottom",
  "use": "vertical-bottom-usage",
  "viewBox": "0 0 49 49",
  "content": "<symbol viewBox=\"0 0 49 49\" xmlns=\"http://www.w3.org/2000/svg\" id=\"vertical-bottom\">\n    <path d=\"M31.71,28.145c0.215,-0.215 0.279,-0.538 0.163,-0.819c-0.117,-0.281 -0.391,-0.464 -0.694,-0.464c-1.767,0 -4.186,0 -4.186,0c0,0 0,-12.935 0,-18c0,-0.53 -0.211,-1.039 -0.586,-1.414c-0.375,-0.375 -0.884,-0.586 -1.414,-0.586c-0.531,0 -1.04,0.211 -1.415,0.586c-0.375,0.375 -0.585,0.884 -0.585,1.414c0,5.065 0,18 0,18c0,0 -2.42,0 -4.186,0c-0.304,0 -0.578,0.183 -0.695,0.464c-0.116,0.281 -0.052,0.604 0.163,0.819c1.785,1.784 4.937,4.937 6.186,6.186c0.294,0.293 0.77,0.293 1.063,0c1.249,-1.249 4.402,-4.402 6.186,-6.186Zm-20.717,10.717c-0.531,0 -1.04,0.211 -1.415,0.586c-0.375,0.375 -0.585,0.884 -0.585,1.414c0,0.531 0.21,1.039 0.585,1.414c0.375,0.376 0.884,0.586 1.415,0.586c5.745,0 22.254,0 28,0c0.53,0 1.039,-0.21 1.414,-0.586c0.375,-0.375 0.586,-0.883 0.586,-1.414c0,-0.53 -0.211,-1.039 -0.586,-1.414c-0.375,-0.375 -0.884,-0.586 -1.414,-0.586c-5.746,0 -22.255,0 -28,0Z\" />\n</symbol>"
});
var vertical_bottom_result = browser_sprite_build_default.a.add(vertical_bottom_symbol);
/* harmony default export */ var vertical_bottom = (vertical_bottom_symbol);
// CONCATENATED MODULE: ./src/icons/index.js





















// EXTERNAL MODULE: ./src/components/icon/style.css
var icon_style = __webpack_require__(9);

// CONCATENATED MODULE: ./src/components/icon/index.js



function Icon(props) {
  var src = props.src,
      id = props.id,
      className = props.className,
      style = props.style;
  return external_react_["createElement"]("svg", {
    style: style,
    id: id,
    className: className
  }, external_react_["createElement"]("use", {
    xlinkHref: "#".concat(src)
  }));
}
// EXTERNAL MODULE: ./src/components/radio-buttons/styles.css
var styles = __webpack_require__(12);

// CONCATENATED MODULE: ./src/components/radio-buttons/index.js
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







var radio_buttons_RadioButtons =
/*#__PURE__*/
function (_React$Component) {
  _inherits(RadioButtons, _React$Component);

  function RadioButtons() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, RadioButtons);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(RadioButtons)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "handleChoose", function (item) {
      var _this$props = _this.props,
          id = _this$props.id,
          disabled = _this$props.disabled;

      if (!disabled) {
        _this.props.onChange({
          id: id,
          value: item.id
        });
      }
    });

    return _this;
  }

  _createClass(RadioButtons, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props2 = this.props,
          items = _this$props2.items,
          active = _this$props2.active,
          className = _this$props2.className,
          itemsClassName = _this$props2.itemsClassName,
          disabled = _this$props2.disabled,
          translationDomain = _this$props2.translationDomain;
      var containerClassName = classnames_default()('configurator-radio-buttons', className);
      return external_react_default.a.createElement("ul", {
        className: containerClassName
      }, items.map(function (item) {
        var itemClassName = classnames_default()('configurator-radio-buttons-item', disabled && 'disabled', itemsClassName, item.id === active && 'active', !item.text && 'no-text');
        return external_react_default.a.createElement("li", {
          key: item.id,
          className: itemClassName
        }, item.text && external_react_default.a.createElement(external_react_intl_["FormattedMessage"], {
          id: translationDomain ? "".concat(translationDomain, ".").concat(item.text) : item.text
        }), item.icon && external_react_default.a.createElement(Icon, {
          src: item.icon,
          className: "configurator-radio-buttons-icon"
        }), external_react_default.a.createElement("div", {
          className: "configurator-radio-buttons-blocker",
          onClick: function onClick() {
            return _this2.handleChoose(item);
          }
        }));
      }));
    }
  }]);

  return RadioButtons;
}(external_react_default.a.Component);

_defineProperty(radio_buttons_RadioButtons, "defaultProps", {
  disabled: false
});


// EXTERNAL MODULE: ./src/components/font-selector/styles.css
var font_selector_styles = __webpack_require__(14);

// EXTERNAL MODULE: external "react-dom"
var external_react_dom_ = __webpack_require__(8);
var external_react_dom_default = /*#__PURE__*/__webpack_require__.n(external_react_dom_);

// CONCATENATED MODULE: ./src/components/font-selector/index.js
function font_selector_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { font_selector_typeof = function _typeof(obj) { return typeof obj; }; } else { font_selector_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return font_selector_typeof(obj); }

function font_selector_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function font_selector_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function font_selector_createClass(Constructor, protoProps, staticProps) { if (protoProps) font_selector_defineProperties(Constructor.prototype, protoProps); if (staticProps) font_selector_defineProperties(Constructor, staticProps); return Constructor; }

function font_selector_possibleConstructorReturn(self, call) { if (call && (font_selector_typeof(call) === "object" || typeof call === "function")) { return call; } return font_selector_assertThisInitialized(self); }

function font_selector_getPrototypeOf(o) { font_selector_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return font_selector_getPrototypeOf(o); }

function font_selector_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function font_selector_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) font_selector_setPrototypeOf(subClass, superClass); }

function font_selector_setPrototypeOf(o, p) { font_selector_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return font_selector_setPrototypeOf(o, p); }

function font_selector_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







var font_selector_FontSelector =
/*#__PURE__*/
function (_React$Component) {
  font_selector_inherits(FontSelector, _React$Component);

  function FontSelector() {
    var _getPrototypeOf2;

    var _this;

    font_selector_classCallCheck(this, FontSelector);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = font_selector_possibleConstructorReturn(this, (_getPrototypeOf2 = font_selector_getPrototypeOf(FontSelector)).call.apply(_getPrototypeOf2, [this].concat(args)));

    font_selector_defineProperty(font_selector_assertThisInitialized(_this), "state", {
      opened: false
    });

    font_selector_defineProperty(font_selector_assertThisInitialized(_this), "tooltipEl", void 0);

    font_selector_defineProperty(font_selector_assertThisInitialized(_this), "containerEl", void 0);

    font_selector_defineProperty(font_selector_assertThisInitialized(_this), "handleResize", function () {
      var opened = _this.state.opened;
      var tooltipEl = _this.tooltipEl;
      var containerEl = _this.containerEl;

      if (!opened || !tooltipEl || !containerEl) {
        return;
      }

      var rect = tooltipEl.getBoundingClientRect();
      var containerRect = containerEl.getBoundingClientRect();
      var wh = window.innerHeight;
      var ww = window.innerWidth;
      var rh = rect.height;
      var rw = rect.width;
      var wRight = ww + window.scrollX;
      var wBottom = wh + window.scrollY;

      if (rh > wh) {
        tooltipEl.style.height = "".concat(wh, "px");
        rh = wh;
      }

      if (rw > ww) {
        tooltipEl.style.width = "".concat(ww, "px");
        rw = ww;
      }

      var top = window.scrollY + containerRect.top + containerRect.height / 2 - rh / 2;

      if (top < 0 || top < window.scrollY) {
        top = window.scrollY;
      } else if (top + rh > wBottom) {
        top = top - (top + rh - wBottom);
      }

      tooltipEl.style.top = "".concat(top, "px");
      var left = window.scrollX + containerRect.left;

      if (left < 0 || left < window.scrollX) {
        left = window.scrollX;
      } else if (left + rw > wRight) {
        left = left - (left + rw - wRight);
      }

      tooltipEl.style.left = "".concat(left, "px");
    });

    font_selector_defineProperty(font_selector_assertThisInitialized(_this), "getActiveFont", function () {
      var _this$props = _this.props,
          fonts = _this$props.fonts,
          active = _this$props.active;
      var activeFont = fonts.find(function (item) {
        return item.id === active;
      });
      return activeFont || fonts[0];
    });

    font_selector_defineProperty(font_selector_assertThisInitialized(_this), "handleChoose", function (item) {
      var id = _this.props.id;

      _this.props.onChange({
        id: id,
        value: item.id
      });

      _this.handleClose();
    });

    font_selector_defineProperty(font_selector_assertThisInitialized(_this), "handleOpen", function () {
      _this.setState({
        opened: true
      });
    });

    font_selector_defineProperty(font_selector_assertThisInitialized(_this), "handleClose", function () {
      _this.setState({
        opened: false
      });
    });

    font_selector_defineProperty(font_selector_assertThisInitialized(_this), "renderFontItem", function (item) {
      var _this$props2 = _this.props,
          itemsClassName = _this$props2.itemsClassName,
          active = _this$props2.active;
      var className = classnames_default()('configurator-font-selector-item', item.id === active && 'active', itemsClassName);
      return external_react_default.a.createElement("div", {
        key: item.id,
        className: className,
        onClick: function onClick() {
          return _this.handleChoose(item);
        }
      }, external_react_default.a.createElement(Icon, {
        src: item.icon,
        className: "configurator-font-selector-tooltip-icon"
      }));
    });

    font_selector_defineProperty(font_selector_assertThisInitialized(_this), "renderTooltip", function () {
      var body = document.body;

      if (!body) {
        return null;
      }

      var fonts = _this.props.fonts;
      var opened = _this.state.opened;

      if (!opened) {
        return null;
      }

      return external_react_dom_default.a.createPortal([external_react_default.a.createElement("div", {
        key: "blocker",
        className: "configurator-font-selector-blocker",
        onClick: _this.handleClose
      }), external_react_default.a.createElement("div", {
        key: "tooltip",
        ref: function ref(el) {
          return _this.tooltipEl = el;
        },
        className: "configurator-font-selector-tooltip"
      }, fonts.map(_this.renderFontItem))], body);
    });

    return _this;
  }

  font_selector_createClass(FontSelector, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      window.addEventListener('resize', this.handleResize);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      if (!prevState.opened && this.state.opened) {
        this.handleResize();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener('resize', this.handleResize);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var className = this.props.className;
      var containerClassName = classnames_default()('configurator-font-selector-container', className);
      var activeFont = this.getActiveFont();
      return external_react_default.a.createElement("div", {
        className: containerClassName,
        ref: function ref(el) {
          return _this2.containerEl = el;
        }
      }, external_react_default.a.createElement("div", {
        className: "configurator-font-selector",
        onClick: this.handleOpen
      }, external_react_default.a.createElement(Icon, {
        src: activeFont.icon,
        className: "configurator-font-selector-current-font"
      }), external_react_default.a.createElement("span", {
        className: "configurator-font-selector-icon-container"
      }, external_react_default.a.createElement(Icon, {
        src: "down",
        className: "configurator-font-selector-icon"
      }))), this.renderTooltip());
    }
  }]);

  return FontSelector;
}(external_react_default.a.Component);


// EXTERNAL MODULE: ./src/components/color-selector/styles.css
var color_selector_styles = __webpack_require__(16);

// CONCATENATED MODULE: ./src/components/color-selector/index.js
function color_selector_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { color_selector_typeof = function _typeof(obj) { return typeof obj; }; } else { color_selector_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return color_selector_typeof(obj); }

function color_selector_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function color_selector_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function color_selector_createClass(Constructor, protoProps, staticProps) { if (protoProps) color_selector_defineProperties(Constructor.prototype, protoProps); if (staticProps) color_selector_defineProperties(Constructor, staticProps); return Constructor; }

function color_selector_possibleConstructorReturn(self, call) { if (call && (color_selector_typeof(call) === "object" || typeof call === "function")) { return call; } return color_selector_assertThisInitialized(self); }

function color_selector_getPrototypeOf(o) { color_selector_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return color_selector_getPrototypeOf(o); }

function color_selector_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function color_selector_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) color_selector_setPrototypeOf(subClass, superClass); }

function color_selector_setPrototypeOf(o, p) { color_selector_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return color_selector_setPrototypeOf(o, p); }

function color_selector_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var color_selector_ColorSelector =
/*#__PURE__*/
function (_React$Component) {
  color_selector_inherits(ColorSelector, _React$Component);

  function ColorSelector() {
    var _getPrototypeOf2;

    var _this;

    color_selector_classCallCheck(this, ColorSelector);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = color_selector_possibleConstructorReturn(this, (_getPrototypeOf2 = color_selector_getPrototypeOf(ColorSelector)).call.apply(_getPrototypeOf2, [this].concat(args)));

    color_selector_defineProperty(color_selector_assertThisInitialized(_this), "handleChoose", function (color) {
      _this.props.onChange({
        id: _this.props.id,
        value: color
      });
    });

    color_selector_defineProperty(color_selector_assertThisInitialized(_this), "colors", [{
      name: 'White',
      value: '#FFFFFF'
    }, {
      name: 'Aureolin',
      value: '#FDEE00'
    }, {
      name: 'Amber',
      value: '#FF7E00'
    }, {
      name: 'Lime',
      value: '#D0FF14'
    }, {
      name: 'Green',
      value: '#00FF00'
    }, {
      name: 'Aqua',
      value: '#00FFFF'
    }, {
      name: 'Azure',
      value: '#007FFF'
    }, {
      name: 'Shades of pink',
      value: '#FF007F'
    }, {
      name: 'Candy apple red',
      value: '#FF0800'
    }, {
      name: 'Shades of white',
      value: '#E2E5DE'
    }, {
      name: 'Lemon yellow',
      value: '#FFFF9F'
    }, {
      name: 'Light goldenrod',
      value: '#FFEC8B'
    }, {
      name: 'Light moss green',
      value: '#ADDFAD'
    }, {
      name: 'Alien Armpit',
      value: '#84DE02'
    }, {
      name: 'Light cyan',
      value: '#E0FFFF'
    }, {
      name: 'Light sky blue',
      value: '#87CEFA'
    }, {
      name: 'Light deep pink',
      value: '#FF5CCD'
    }, {
      name: 'Shades of red',
      value: '#FF6961'
    }]);

    color_selector_defineProperty(color_selector_assertThisInitialized(_this), "renderColor", function (color) {
      var _this$props = _this.props,
          active = _this$props.active,
          itemsClassName = _this$props.itemsClassName;
      var style = {
        backgroundColor: color.value
      };
      var className = classnames_default()('configurator-color-selector-item', color.value === active && 'active', itemsClassName);
      return external_react_default.a.createElement("div", {
        key: color.value,
        className: "configurator-color-selector-item-wrap",
        title: color.name
      }, external_react_default.a.createElement("div", {
        className: className,
        style: style,
        onClick: function onClick() {
          return _this.handleChoose(color.value);
        }
      }));
    });

    return _this;
  }

  color_selector_createClass(ColorSelector, [{
    key: "render",
    value: function render() {
      var className = this.props.className;
      var containerClassName = classnames_default()('configurator-color-selector', className);
      return external_react_default.a.createElement("div", {
        className: containerClassName
      }, this.colors.map(this.renderColor));
    }
  }]);

  return ColorSelector;
}(external_react_default.a.Component);


// EXTERNAL MODULE: ./src/styles.css
var src_styles = __webpack_require__(18);

// CONCATENATED MODULE: ./src/index.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return src_Configurator; });
function src_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { src_typeof = function _typeof(obj) { return typeof obj; }; } else { src_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return src_typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { src_defineProperty(target, key, source[key]); }); } return target; }

function src_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function src_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function src_createClass(Constructor, protoProps, staticProps) { if (protoProps) src_defineProperties(Constructor.prototype, protoProps); if (staticProps) src_defineProperties(Constructor, staticProps); return Constructor; }

function src_possibleConstructorReturn(self, call) { if (call && (src_typeof(call) === "object" || typeof call === "function")) { return call; } return src_assertThisInitialized(self); }

function src_getPrototypeOf(o) { src_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return src_getPrototypeOf(o); }

function src_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function src_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) src_setPrototypeOf(subClass, superClass); }

function src_setPrototypeOf(o, p) { src_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return src_setPrototypeOf(o, p); }

function src_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









var src_Configurator =
/*#__PURE__*/
function (_React$Component) {
  src_inherits(Configurator, _React$Component);

  function Configurator(props) {
    var _this;

    src_classCallCheck(this, Configurator);

    _this = src_possibleConstructorReturn(this, src_getPrototypeOf(Configurator).call(this, props));

    src_defineProperty(src_assertThisInitialized(_this), "state", {
      imageFilters: [{
        id: 'none',
        text: 'Configurator.Image-Filter.None'
      }, {
        id: 'shade',
        text: 'Configurator.Image-Filter.Shade'
      }, {
        id: 'blur',
        text: 'Configurator.Image-Filter.Blur'
      }, {
        id: 'bw',
        text: 'Configurator.Image-Filter.BW'
      }, {
        id: 'Sepia',
        text: 'Configurator.Image-Filter.Sepia'
      }, {
        id: 'Pixelate',
        text: 'Configurator.Image-Filter.Pixelate'
      }],
      overlays: [{
        id: 'none',
        text: 'Configurator.Overlay.None'
      }, {
        id: 'solid',
        text: 'Configurator.Overlay.Solid'
      }, {
        id: 'border',
        text: 'Configurator.Overlay.Border'
      }, {
        id: 'lines',
        text: 'Configurator.Overlay.Lines'
      }],
      text: 'There is no elevator to success, you have to take the stairs.',
      textFontFamily: 'Courgette',
      textAlign: 'center',
      textVerticalAlign: 'center',
      textEffect: 'type',
      textEffects: [{
        id: 'type',
        text: 'Configurator.Quote-Text-Animation.Type'
      }, {
        id: 'fade-letters',
        text: 'Configurator.Quote-Text-Animation.Fade-Letters'
      }, {
        id: 'fade-lines',
        text: 'Configurator.Quote-Text-Animation.Fade-Lines'
      }, {
        id: 'slide-lines',
        text: 'Configurator.Quote-Text-Animation.Slide-Lines'
      }, {
        id: 'append-lines',
        text: 'Configurator.Quote-Text-Animation.Append-Lines'
      }, {
        id: 'fade',
        text: 'Configurator.Quote-Text-Animation.Fade'
      }],
      textVerticalAligns: [{
        id: 'top',
        icon: 'vertical-top'
      }, {
        id: 'center',
        icon: 'vertical-center'
      }, {
        id: 'bottom',
        icon: 'vertical-bottom'
      }],
      separators: [{
        id: 'none',
        text: 'Configurator.Separator.None'
      }, {
        id: 'line',
        text: 'Configurator.Separator.Ndash'
      }, {
        id: 'dash',
        text: 'Configurator.Separator.Dashes'
      }, {
        id: 'dot',
        text: 'Configurator.Separator.Dots'
      }],
      author: 'Quote Author',
      authorFontFamily: 'Lobster',
      authorAlign: 'center',
      authorVerticalAlign: '',
      authorVerticalAligns: [{
        id: 'stick',
        icon: 'vertical-top'
      }, {
        id: 'bottom',
        icon: 'vertical-bottom'
      }],
      authorEffect: 'fade',
      authorEffects: [{
        id: 'type',
        text: 'Configurator.Author-Text-Animation.Type'
      }, {
        id: 'slide',
        text: 'Configurator.Author-Text-Animation.Slide'
      }, {
        id: 'fade',
        text: 'Configurator.Author-Text-Animation.Fade'
      }],
      fonts: [{
        id: 'Typograph',
        icon: 'typograph'
      }, {
        id: 'Tahoma',
        icon: 'tahoma'
      }, {
        id: 'Lobster',
        icon: 'lobster'
      }, {
        id: 'Sports',
        icon: 'sports'
      }, {
        id: 'Courgette',
        icon: 'courgette'
      }, {
        id: 'Sensei',
        icon: 'sensei'
      }, {
        id: 'GreatVibes',
        icon: 'greatvibes'
      }, {
        id: 'Guerilla',
        icon: 'guerilla'
      }, {
        id: 'Kaushan',
        icon: 'kaushan'
      }, {
        id: 'Exo',
        icon: 'exo'
      }, {
        id: 'YellowTail',
        icon: 'yellowtail'
      }, {
        id: 'MyUnderwood',
        icon: 'myunderwood'
      }, {
        id: 'NickAinley',
        icon: 'nickainley'
      }, {
        id: 'Lato',
        icon: 'lato'
      }],
      aligns: [{
        id: 'left',
        icon: 'align-left'
      }, {
        id: 'center',
        icon: 'align-center'
      }, {
        id: 'right',
        icon: 'align-right'
      }],
      color: '#FFFFFF'
    });

    src_defineProperty(src_assertThisInitialized(_this), "handleChange", function (data) {
      var onChange = _this.props.onChange;

      _this.setState(src_defineProperty({}, data.id, data.value));

      if (onChange instanceof Function) {
        _this.props.onChange({
          id: id,
          value: value
        });
      }
    });

    src_defineProperty(src_assertThisInitialized(_this), "textValueChange", function (e) {
      var id = e.target.id;
      var value = e.target.value;

      _this.handleChange({
        id: id,
        value: value
      });
    });

    src_defineProperty(src_assertThisInitialized(_this), "getTranslationId", function (id) {
      var translationDomain = _this.props.translationDomain;
      return "".concat(translationDomain ? "".concat(translationDomain, ".") : '').concat(id);
    });

    src_defineProperty(src_assertThisInitialized(_this), "handleSubmit", function (e) {
      e.preventDefault();
      var _this$state = _this.state,
          imageFilter = _this$state.imageFilter,
          overlay = _this$state.overlay,
          text = _this$state.text,
          textFontFamily = _this$state.textFontFamily,
          textAlign = _this$state.textAlign,
          textVerticalAlign = _this$state.textVerticalAlign,
          textEffect = _this$state.textEffect,
          separator = _this$state.separator,
          author = _this$state.author,
          authorFontFamily = _this$state.authorFontFamily,
          authorAlign = _this$state.authorAlign,
          authorVerticalAlign = _this$state.authorVerticalAlign,
          authorEffect = _this$state.authorEffect,
          color = _this$state.color;
      var _this$props = _this.props,
          textEffectDisabled = _this$props.textEffectDisabled,
          authorEffectDisabled = _this$props.authorEffectDisabled;

      _this.props.onSubmit({
        imageFilter: imageFilter,
        overlay: overlay,
        text: text,
        textFontFamily: textFontFamily,
        textAlign: textAlign,
        textVerticalAlign: textVerticalAlign,
        textEffect: textEffect,
        separator: separator,
        author: author,
        authorFontFamily: authorFontFamily,
        authorAlign: authorAlign,
        authorVerticalAlign: authorVerticalAlign,
        authorEffect: authorEffect,
        color: color,
        animate: !textEffectDisabled && !authorEffectDisabled
      });
    });

    var state = _this.state;
    _this.state = _objectSpread({}, _this.state, {
      imageFilter: props.imageFilter || state.imageFilter || 'none',
      imageFilters: state.imageFilters.concat(props.imageFilters || []),
      overlay: props.overlay || state.overlay || 'none',
      overlays: state.overlays.concat(props.overlays || []),
      text: props.text || state.text || '',
      textFontFamily: props.textFontFamily || state.textFontFamily,
      textAlign: props.textAlign || state.textAlign,
      textVerticalAlign: props.textVerticalAlign || state.textVerticalAlign,
      textEffect: props.textEffect || state.textEffect,
      textEffects: state.textEffects.concat(props.textEffects || []),
      separator: props.separator || state.separator || 'none',
      separators: state.separators.concat(props.separators || []),
      author: props.author || state.author || '',
      authorFontFamily: props.authorFontFamily || state.authorFontFamily,
      authorAlign: props.authorAlign || state.authorAlign,
      authorVerticalAlign: props.authorVerticalAlign || state.authorVerticalAlign,
      authorEffect: props.authorEffect || state.authorEffect,
      authorEffects: state.authorEffects.concat(props.authorEffects || [])
    });
    return _this;
  }

  src_createClass(Configurator, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          radioButtonClassName = _this$props2.radioButtonClassName,
          radioButtonItemClassName = _this$props2.radioButtonItemClassName,
          colorSelectorClassName = _this$props2.colorSelectorClassName,
          colorSelectorItemClassName = _this$props2.colorSelectorItemClassName,
          fontSelectorClassName = _this$props2.fontSelectorClassName,
          fontSelectorItemClassName = _this$props2.fontSelectorItemClassName,
          textEffectDisabled = _this$props2.textEffectDisabled,
          authorEffectDisabled = _this$props2.authorEffectDisabled,
          translationDomain = _this$props2.translationDomain;
      var _this$state2 = this.state,
          imageFilter = _this$state2.imageFilter,
          imageFilters = _this$state2.imageFilters,
          overlay = _this$state2.overlay,
          overlays = _this$state2.overlays,
          text = _this$state2.text,
          textFontFamily = _this$state2.textFontFamily,
          textAlign = _this$state2.textAlign,
          textVerticalAlign = _this$state2.textVerticalAlign,
          textVerticalAligns = _this$state2.textVerticalAligns,
          textEffect = _this$state2.textEffect,
          textEffects = _this$state2.textEffects,
          separator = _this$state2.separator,
          separators = _this$state2.separators,
          author = _this$state2.author,
          authorFontFamily = _this$state2.authorFontFamily,
          authorAlign = _this$state2.authorAlign,
          authorVerticalAlign = _this$state2.authorVerticalAlign,
          authorVerticalAligns = _this$state2.authorVerticalAligns,
          authorEffect = _this$state2.authorEffect,
          authorEffects = _this$state2.authorEffects,
          fonts = _this$state2.fonts,
          aligns = _this$state2.aligns,
          color = _this$state2.color;
      var _this$props3 = this.props,
          containerClassName = _this$props3.containerClassName,
          subtitleClassName = _this$props3.subtitleClassName,
          submitButtonClassName = _this$props3.submitButtonClassName,
          textareaClassName = _this$props3.textareaClassName,
          inputClassName = _this$props3.inputClassName;
      containerClassName = classnames_default()('configurator-container', containerClassName);
      subtitleClassName = classnames_default()('configurator-subtitle', subtitleClassName);
      submitButtonClassName = classnames_default()('configurator-submit', submitButtonClassName);
      textareaClassName = classnames_default()('configurator-textarea', textareaClassName);
      inputClassName = classnames_default()('configurator-input', inputClassName);
      return external_react_default.a.createElement("form", {
        action: "#",
        onSubmit: this.handleSubmit,
        className: containerClassName
      }, external_react_default.a.createElement("h3", {
        className: subtitleClassName
      }, external_react_default.a.createElement(external_react_intl_["FormattedMessage"], {
        id: this.getTranslationId('Configurator.Image-Filter.Title')
      })), external_react_default.a.createElement(radio_buttons_RadioButtons, {
        id: "imageFilter",
        items: imageFilters,
        active: imageFilter,
        className: radioButtonClassName,
        itemsClassName: radioButtonItemClassName,
        translationDomain: translationDomain,
        onChange: this.handleChange
      }), external_react_default.a.createElement("h3", {
        className: subtitleClassName
      }, external_react_default.a.createElement(external_react_intl_["FormattedMessage"], {
        id: this.getTranslationId('Configurator.Overlay.Title')
      })), external_react_default.a.createElement(radio_buttons_RadioButtons, {
        id: "overlay",
        items: overlays,
        active: overlay,
        className: radioButtonClassName,
        itemsClassName: radioButtonItemClassName,
        translationDomain: translationDomain,
        onChange: this.handleChange
      }), external_react_default.a.createElement("h3", {
        className: subtitleClassName
      }, external_react_default.a.createElement(external_react_intl_["FormattedMessage"], {
        id: this.getTranslationId('Configurator.Quote-Text.Title')
      })), external_react_default.a.createElement("div", {
        className: "configurator-text-container"
      }, external_react_default.a.createElement("textarea", {
        id: "text",
        onChange: this.textValueChange,
        value: text,
        className: textareaClassName,
        maxLength: 255
      }), external_react_default.a.createElement("div", {
        className: "configurator-text-container-footer"
      }, external_react_default.a.createElement(font_selector_FontSelector, {
        id: "textFontFamily",
        fonts: fonts,
        active: textFontFamily,
        className: fontSelectorClassName,
        itemsClassName: fontSelectorItemClassName,
        onChange: this.handleChange
      }), external_react_default.a.createElement(radio_buttons_RadioButtons, {
        id: "textAlign",
        items: aligns,
        active: textAlign,
        className: radioButtonClassName,
        itemsClassName: radioButtonItemClassName,
        translationDomain: translationDomain,
        onChange: this.handleChange
      }), external_react_default.a.createElement(radio_buttons_RadioButtons, {
        id: "textVerticalAlign",
        items: textVerticalAligns,
        active: textVerticalAlign,
        className: classnames_default()('configurator-text-vertical-align', radioButtonClassName),
        itemsClassName: radioButtonItemClassName,
        translationDomain: translationDomain,
        onChange: this.handleChange
      }))), external_react_default.a.createElement("h3", {
        className: subtitleClassName
      }, external_react_default.a.createElement(external_react_intl_["FormattedMessage"], {
        id: this.getTranslationId('Configurator.Quote-Text-Animation.Title')
      })), external_react_default.a.createElement(radio_buttons_RadioButtons, {
        id: "textEffect",
        items: textEffects,
        active: textEffect,
        className: radioButtonClassName,
        itemsClassName: radioButtonItemClassName,
        disabled: textEffectDisabled,
        translationDomain: translationDomain,
        onChange: this.handleChange
      }), external_react_default.a.createElement("h3", {
        className: subtitleClassName
      }, external_react_default.a.createElement(external_react_intl_["FormattedMessage"], {
        id: this.getTranslationId('Configurator.Separator.Title')
      })), external_react_default.a.createElement(radio_buttons_RadioButtons, {
        id: "separator",
        items: separators,
        active: separator,
        className: radioButtonClassName,
        itemsClassName: radioButtonItemClassName,
        translationDomain: translationDomain,
        onChange: this.handleChange
      }), external_react_default.a.createElement("h3", {
        className: subtitleClassName
      }, external_react_default.a.createElement(external_react_intl_["FormattedMessage"], {
        id: this.getTranslationId('Configurator.Author-Text.Title')
      })), external_react_default.a.createElement("div", {
        className: "configurator-text-container"
      }, external_react_default.a.createElement("input", {
        type: "text",
        id: "author",
        value: author,
        className: inputClassName,
        maxLength: 60,
        onChange: this.textValueChange
      }), external_react_default.a.createElement("div", {
        className: "configurator-text-container-footer"
      }, external_react_default.a.createElement(font_selector_FontSelector, {
        id: "authorFontFamily",
        fonts: fonts,
        active: authorFontFamily,
        className: fontSelectorClassName,
        itemsClassName: fontSelectorItemClassName,
        onChange: this.handleChange
      }), external_react_default.a.createElement(radio_buttons_RadioButtons, {
        id: "authorAlign",
        items: aligns,
        active: authorAlign,
        className: radioButtonClassName,
        itemsClassName: radioButtonItemClassName,
        translationDomain: translationDomain,
        onChange: this.handleChange
      }), external_react_default.a.createElement(radio_buttons_RadioButtons, {
        id: "authorVerticalAlign",
        items: authorVerticalAligns,
        active: authorVerticalAlign,
        className: classnames_default()('configurator-text-vertical-align', radioButtonClassName),
        itemsClassName: radioButtonItemClassName,
        translationDomain: translationDomain,
        onChange: this.handleChange
      }))), external_react_default.a.createElement("h3", {
        className: subtitleClassName
      }, external_react_default.a.createElement(external_react_intl_["FormattedMessage"], {
        id: this.getTranslationId('Configurator.Author-Text-Animation.Title')
      })), external_react_default.a.createElement(radio_buttons_RadioButtons, {
        id: "authorEffect",
        items: authorEffects,
        active: authorEffect,
        className: radioButtonClassName,
        itemsClassName: radioButtonItemClassName,
        disabled: authorEffectDisabled,
        translationDomain: translationDomain,
        onChange: this.handleChange
      }), external_react_default.a.createElement("h3", {
        className: subtitleClassName
      }, external_react_default.a.createElement(external_react_intl_["FormattedMessage"], {
        id: this.getTranslationId('Configurator.Color.Title')
      })), external_react_default.a.createElement(color_selector_ColorSelector, {
        id: "color",
        active: color,
        className: colorSelectorClassName,
        itemsClassName: colorSelectorItemClassName,
        onChange: this.handleChange
      }), external_react_default.a.createElement("button", {
        type: "submit",
        className: submitButtonClassName
      }, external_react_default.a.createElement(external_react_intl_["FormattedMessage"], {
        id: this.getTranslationId('Configurator.Submit')
      })));
    }
  }]);

  return Configurator;
}(external_react_default.a.Component);

src_defineProperty(src_Configurator, "defaultProps", {
  textEffectDisabled: false,
  authorEffectDisabled: false
});



/***/ })
/******/ ]);