/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./assets/js/blocks/src/atomic/utils/index.js":
/*!****************************************************!*\
  !*** ./assets/js/blocks/src/atomic/utils/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   renderParentBlock: () => (/* reexport safe */ _render_parent_block__WEBPACK_IMPORTED_MODULE_0__.renderParentBlock)
/* harmony export */ });
/* harmony import */ var _render_parent_block__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render-parent-block */ "./assets/js/blocks/src/atomic/utils/render-parent-block.js");


/***/ }),

/***/ "./assets/js/blocks/src/atomic/utils/render-parent-block.js":
/*!******************************************************************!*\
  !*** ./assets/js/blocks/src/atomic/utils/render-parent-block.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   renderParentBlock: () => (/* binding */ renderParentBlock)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lapilli_ui_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @lapilli-ui/components */ "@lapilli-ui/components");
/* harmony import */ var _lapilli_ui_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_lapilli_ui_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _base_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../base/utils */ "./assets/js/blocks/src/base/utils/index.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var html_react_parser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! html-react-parser */ "./node_modules/html-react-parser/index.mjs");
/* harmony import */ var _packages_search__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../packages/search */ "./assets/js/blocks/src/packages/search/index.js");
function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}
var _excluded = ["blockName"];
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), !0).forEach(function (r) {
      _defineProperty(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == _typeof(i) ? i : String(i);
}
function _toPrimitive(t, r) {
  if ("object" != _typeof(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}
/**
 * External dependencies
 */







/**
 * This file contains logic used on the frontend to convert DOM elements (saved by the block editor) to React
 * Components. These components are registered using registerBlockComponent() and registerCheckoutBlock() and map 1:1
 * to a block by name.
 *
 * Blocks using this system will have their blockName stored as a data attribute, for example:
 * 		<div data-block-name="woocommerce/product-title"></div>
 *
 * This block name is then read, and using the map, dynamically converted to a real React Component.
 *
 * @see registerBlockComponent
 * @see registerCheckoutBlock
 */

/**
 * Gets a component from the block map for a given block name, or returns null if a component is not registered.
 */
var getBlockComponentFromMap = function getBlockComponentFromMap(block, blockMap) {
  return block && blockMap[block] ? blockMap[block] : null;
};

/**
 * Render forced blocks which are missing from the template.
 *
 * Forced blocks are registered in registerCheckoutBlock. If a block is forced, it will be inserted in the editor
 * automatically, however, until that happens they may be missing from the frontend. To fix this, we look up what blocks
 * are registered as forced, and then append them here if they are missing.
 *
 * @see registerCheckoutBlock
 */
var renderForcedBlocks = function renderForcedBlocks(block, blockMap,
// Current children from the parent (siblings of the forced block)
blockChildren,
// Wrapper for inner components.
blockWrapper) {
  if (!(0,_packages_search__WEBPACK_IMPORTED_MODULE_5__.hasInnerBlocks)(block)) {
    return null;
  }
  var currentBlocks = blockChildren ? Array.from(blockChildren).map(function (node) {
    return node instanceof HTMLElement ? (node === null || node === void 0 ? void 0 : node.dataset.blockName) || null : null;
  }).filter(Boolean) : [];
  var forcedBlocks = (0,_packages_search__WEBPACK_IMPORTED_MODULE_5__.getRegisteredBlocks)(block).filter(function (_ref) {
    var blockName = _ref.blockName,
      force = _ref.force;
    return force === true && !currentBlocks.includes(blockName);
  });

  // This will wrap inner blocks with the provided wrapper. If no wrapper is provided, we default to Fragment.
  var InnerBlockComponentWrapper = blockWrapper ? blockWrapper : _wordpress_element__WEBPACK_IMPORTED_MODULE_3__.Fragment;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, forcedBlocks.map(function (_ref2, index) {
    var blockName = _ref2.blockName,
      component = _ref2.component;
    var ForcedComponent = component ? component : getBlockComponentFromMap(blockName, blockMap);
    return ForcedComponent ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(InnerBlockComponentWrapper, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ForcedComponent, {
      key: "".concat(blockName, "_forced_").concat(index)
    })) : null;
  }));
};

/**
 * Recursively replace block markup in the DOM with React Components.
 */
var renderInnerBlocks = function renderInnerBlocks(_ref3) {
  var block = _ref3.block,
    blockMap = _ref3.blockMap,
    blockWrapper = _ref3.blockWrapper,
    children = _ref3.children,
    _ref3$depth = _ref3.depth,
    depth = _ref3$depth === void 0 ? 1 : _ref3$depth;
  if (!children || children.length === 0) {
    return null;
  }
  return Array.from(children).map(function (node, index) {
    /**
     * This will grab the blockName from the data- attributes stored in block markup. Without a blockName, we cannot
     * convert the HTMLElement to a React component.
     */
    var _className = _objectSpread(_objectSpread({}, node instanceof HTMLElement ? node.dataset : {}), {}, {
        className: node instanceof Element ? node === null || node === void 0 ? void 0 : node.className : ''
      }),
      _className$blockName = _className.blockName,
      blockName = _className$blockName === void 0 ? '' : _className$blockName,
      componentProps = _objectWithoutProperties(_className, _excluded);
    var componentKey = "".concat(block, "_").concat(depth, "_").concat(index);
    var InnerBlockComponent = getBlockComponentFromMap(blockName, blockMap);

    /**
     * If the component cannot be found, or blockName is missing, return the original element. This also ensures
     * that children within the element are processed also, since it may be an element containing block markup.
     *
     * Note we use childNodes rather than children so that text nodes are also rendered.
     */
    if (!InnerBlockComponent) {
      var parsedElement = (0,html_react_parser__WEBPACK_IMPORTED_MODULE_4__["default"])(node instanceof Element && (node === null || node === void 0 ? void 0 : node.outerHTML) || (node === null || node === void 0 ? void 0 : node.textContent) || '');

      // Returns text nodes without manipulation.
      if (typeof parsedElement === 'string' && !!parsedElement) {
        return parsedElement;
      }

      // Do not render invalid elements.
      if (!(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.isValidElement)(parsedElement)) {
        return null;
      }
      var renderedChildren = node.childNodes.length ? renderInnerBlocks({
        block: block,
        blockMap: blockMap,
        children: node.childNodes,
        depth: depth + 1,
        blockWrapper: blockWrapper
      }) : undefined;

      // We pass props here rather than componentProps to avoid the data attributes being renamed.
      return renderedChildren ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.cloneElement)(parsedElement, _objectSpread({
        key: componentKey
      }, (parsedElement === null || parsedElement === void 0 ? void 0 : parsedElement.props) || {}), renderedChildren) : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.cloneElement)(parsedElement, _objectSpread({
        key: componentKey
      }, (parsedElement === null || parsedElement === void 0 ? void 0 : parsedElement.props) || {}));
    }

    // This will wrap inner blocks with the provided wrapper. If no wrapper is provided, we default to Fragment.
    var InnerBlockComponentWrapper = blockWrapper ? blockWrapper : _wordpress_element__WEBPACK_IMPORTED_MODULE_3__.Fragment;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.Suspense, {
      key: "".concat(block, "_").concat(depth, "_").concat(index, "_suspense"),
      fallback: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_lapilli_ui_components__WEBPACK_IMPORTED_MODULE_1__.Spinner, null)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(InnerBlockComponentWrapper, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(InnerBlockComponent, _extends({
      key: componentKey
    }, componentProps),
    /**
     * Within this Inner Block Component we also need to recursively render it's children. This
     * is done here with a depth+1. The same block map and parent is used, but we pass new
     * children from this element.
     */
    renderInnerBlocks({
      block: block,
      blockMap: blockMap,
      children: node.childNodes,
      depth: depth + 1,
      blockWrapper: blockWrapper
    }),
    /**
     * In addition to the inner blocks, we may also need to render FORCED blocks which have not
     * yet been added to the inner block template. We do this by comparing the current children
     * to the list of registered forced blocks.
     *
     * @see registerCheckoutBlock
     */
    renderForcedBlocks(blockName, blockMap, node.childNodes, blockWrapper))));
  });
};

/**
 * Render a parent block on the frontend.
 *
 * This is the main entry point used on the frontend to convert Block Markup (with inner blocks) in the DOM to React
 * Components.
 *
 * This uses renderFrontend(). The difference is, renderFrontend renders a single block, but renderParentBlock() also
 * handles inner blocks by recursively running over children from the DOM.
 *
 * @see renderInnerBlocks
 * @see renderFrontend
 */
var renderParentBlock = function renderParentBlock(_ref4) {
  var Block = _ref4.Block,
    selector = _ref4.selector,
    blockName = _ref4.blockName,
    _ref4$getProps = _ref4.getProps,
    getProps = _ref4$getProps === void 0 ? function () {
      return {};
    } : _ref4$getProps,
    blockMap = _ref4.blockMap,
    blockWrapper = _ref4.blockWrapper;
  /**
   * In addition to getProps, we need to render and return the children. This adds children to props.
   */
  var getPropsWithChildren = function getPropsWithChildren(element, i) {
    var children = renderInnerBlocks({
      block: blockName,
      blockMap: blockMap,
      children: element.children || [],
      blockWrapper: blockWrapper
    });
    return _objectSpread(_objectSpread({}, getProps(element, i)), {}, {
      children: children
    });
  };

  /**
   * The only difference between using renderParentBlock and renderFrontend is that here we provide children.
   */
  (0,_base_utils__WEBPACK_IMPORTED_MODULE_2__.renderFrontend)({
    Block: Block,
    selector: selector,
    getProps: getPropsWithChildren
  });
};

/***/ }),

/***/ "./assets/js/blocks/src/base/utils/functions.js":
/*!******************************************************!*\
  !*** ./assets/js/blocks/src/base/utils/functions.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   formatPrice: () => (/* binding */ formatPrice),
/* harmony export */   formatSinglePrice: () => (/* binding */ formatSinglePrice),
/* harmony export */   formatString: () => (/* binding */ formatString),
/* harmony export */   getPrice: () => (/* binding */ getPrice),
/* harmony export */   getTopFrequentCategories: () => (/* binding */ getTopFrequentCategories),
/* harmony export */   getWordStr: () => (/* binding */ getWordStr),
/* harmony export */   isEmpty: () => (/* binding */ isEmpty),
/* harmony export */   useMediaQuery: () => (/* binding */ useMediaQuery)
/* harmony export */ });
/* harmony import */ var html_react_parser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! html-react-parser */ "./node_modules/html-react-parser/index.mjs");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../config */ "./assets/js/blocks/src/config.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArrayLimit(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e,
      n,
      i,
      u,
      a = [],
      f = !0,
      o = !1;
    try {
      if (i = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t) return;
        f = !1;
      } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
    } catch (r) {
      o = !0, n = r;
    } finally {
      try {
        if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _createForOfIteratorHelper(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (!it) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it) o = it;
      var i = 0;
      var F = function F() {};
      return {
        s: F,
        n: function n() {
          if (i >= o.length) return {
            done: true
          };
          return {
            done: false,
            value: o[i++]
          };
        },
        e: function e(_e) {
          throw _e;
        },
        f: F
      };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var normalCompletion = true,
    didErr = false,
    err;
  return {
    s: function s() {
      it = it.call(o);
    },
    n: function n() {
      var step = it.next();
      normalCompletion = step.done;
      return step;
    },
    e: function e(_e2) {
      didErr = true;
      err = _e2;
    },
    f: function f() {
      try {
        if (!normalCompletion && it["return"] != null) it["return"]();
      } finally {
        if (didErr) throw err;
      }
    }
  };
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}



/**
 * Check if an element object or array is empty
 *
 * @param element
 * @returns {boolean}
 */
var isEmpty = function isEmpty(element) {
  if (typeof element === 'undefined') {
    return true;
  }
  if (_typeof(element) === 'object') {
    return Object.keys(element).length === 0;
  }
  return element.hasOwnProperty(length) ? element.length === 0 : 'undefined';
};
var formatSinglePrice = function formatSinglePrice(price) {
  return accounting.formatMoney(price, _config__WEBPACK_IMPORTED_MODULE_1__.ywcas_wc_data.currency);
};
var formatPrice = function formatPrice(max) {
  var min = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var maxFormatted = formatSinglePrice(max);
  if (!parseFloat(min) || min === max) {
    return maxFormatted;
  }
  var minFormatted = formatSinglePrice(min);
  return "".concat(minFormatted, " - ").concat(maxFormatted);
};

/**
 * Return the price of a product
 *
 * @param item
 * @returns {*|string}
 */
var getPrice = function getPrice(item) {
  if (item.product_type === 'variable') {
    return formatPrice(item['max_price'], item['min_price']);
  } else {
    if (parseInt(item.onsale)) {
      return formatPrice(item['min_price']);
    }
  }
  return formatPrice(item['max_price']);
};
var getWordStr = function getWordStr(str, numOfWords) {
  return str.split(' ').slice(0, numOfWords).join(" ");
};
var escapeRegExChars = function escapeRegExChars(value) {
  return value ? value.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&") : value;
};
var formatString = function formatString(query, currentText) {
  var pattern = '(' + escapeRegExChars(query) + ')';
  return (0,html_react_parser__WEBPACK_IMPORTED_MODULE_0__["default"])(currentText.replace(new RegExp(pattern, 'gi'), '<strong>$1<\/strong>'));
};
var getTopFrequentCategories = function getTopFrequentCategories(numbers) {
  var numberOfResults = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 3;
  // Count the occurrences of each number
  var frequencyMap = new Map();
  var _iterator = _createForOfIteratorHelper(numbers),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var number = _step.value;
      if (frequencyMap.has(number)) {
        frequencyMap.set(number, frequencyMap.get(number) + 1);
      } else {
        frequencyMap.set(number, 1);
      }
    }
    // Sort the frequency map by values in descending order
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  var sortedFrequency = _toConsumableArray(frequencyMap.entries()).sort(function (a, b) {
    return b[1] - a[1];
  });
  return sortedFrequency.slice(0, numberOfResults).map(function (entry) {
    return entry[0];
  });
};
var useMediaQuery = function useMediaQuery(query) {
  var mediaQuery = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(function () {
    return window.matchMedia(query);
  }, [query]);
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(mediaQuery.matches),
    _useState2 = _slicedToArray(_useState, 2),
    match = _useState2[0],
    setMatch = _useState2[1];
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    var onChange = function onChange() {
      return setMatch(mediaQuery.matches);
    };
    mediaQuery.addEventListener("change", onChange);
    return function () {
      return mediaQuery.removeEventListener("change", onChange);
    };
  }, [mediaQuery]);
  return match;
};

/***/ }),

/***/ "./assets/js/blocks/src/base/utils/get-valid-block-attributes.js":
/*!***********************************************************************!*\
  !*** ./assets/js/blocks/src/base/utils/get-valid-block-attributes.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   getValidBlockAttributes: () => (/* binding */ getValidBlockAttributes)
/* harmony export */ });
/**
 * Given some block attributes, gets attributes from the dataset or uses defaults.
 *
 * @param {Object} blockAttributes Object containing block attributes.
 * @param {Array}  rawAttributes   Dataset from DOM.
 * @return {Array} Array of parsed attributes.
 */
var getValidBlockAttributes = function getValidBlockAttributes(blockAttributes, rawAttributes) {
  var attributes = [];
  Object.keys(blockAttributes).forEach(function (key) {
    if (typeof rawAttributes[key] !== 'undefined') {
      switch (blockAttributes[key].type) {
        case 'boolean':
          attributes[key] = rawAttributes[key] !== 'false' && rawAttributes[key] !== false;
          break;
        case 'number':
          attributes[key] = parseInt(rawAttributes[key], 10);
          break;
        case 'array':
        case 'object':
          attributes[key] = JSON.parse(rawAttributes[key]);
          break;
        default:
          attributes[key] = rawAttributes[key];
          break;
      }
    } else {
      attributes[key] = blockAttributes[key]["default"];
    }
  });
  return attributes;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getValidBlockAttributes);

/***/ }),

/***/ "./assets/js/blocks/src/base/utils/index.js":
/*!**************************************************!*\
  !*** ./assets/js/blocks/src/base/utils/index.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dispatchEvent: () => (/* reexport safe */ _legacy_events__WEBPACK_IMPORTED_MODULE_2__.dispatchEvent),
/* harmony export */   getValidBlockAttributes: () => (/* reexport safe */ _get_valid_block_attributes__WEBPACK_IMPORTED_MODULE_0__.getValidBlockAttributes),
/* harmony export */   renderBlock: () => (/* reexport safe */ _render_frontend__WEBPACK_IMPORTED_MODULE_1__.renderBlock),
/* harmony export */   renderFrontend: () => (/* reexport safe */ _render_frontend__WEBPACK_IMPORTED_MODULE_1__.renderFrontend)
/* harmony export */ });
/* harmony import */ var _get_valid_block_attributes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get-valid-block-attributes */ "./assets/js/blocks/src/base/utils/get-valid-block-attributes.js");
/* harmony import */ var _render_frontend__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./render-frontend */ "./assets/js/blocks/src/base/utils/render-frontend.js");
/* harmony import */ var _legacy_events__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./legacy-events */ "./assets/js/blocks/src/base/utils/legacy-events.js");




/***/ }),

/***/ "./assets/js/blocks/src/base/utils/legacy-events.js":
/*!**********************************************************!*\
  !*** ./assets/js/blocks/src/base/utils/legacy-events.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dispatchEvent: () => (/* binding */ dispatchEvent)
/* harmony export */ });
/**
 * External dependencies
 */

var CustomEvent = window.CustomEvent || null;

/**
 * Wrapper function to dispatch an event.
 */
var dispatchEvent = function dispatchEvent(name, _ref) {
  var _ref$bubbles = _ref.bubbles,
    bubbles = _ref$bubbles === void 0 ? false : _ref$bubbles,
    _ref$cancelable = _ref.cancelable,
    cancelable = _ref$cancelable === void 0 ? false : _ref$cancelable,
    element = _ref.element,
    _ref$detail = _ref.detail,
    detail = _ref$detail === void 0 ? {} : _ref$detail;
  if (!CustomEvent) {
    return;
  }
  if (!element) {
    element = document.body;
  }
  var event = new CustomEvent(name, {
    bubbles: bubbles,
    cancelable: cancelable,
    detail: detail
  });
  element.dispatchEvent(event);
};

/***/ }),

/***/ "./assets/js/blocks/src/base/utils/render-frontend.js":
/*!************************************************************!*\
  !*** ./assets/js/blocks/src/base/utils/render-frontend.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   renderBlock: () => (/* binding */ renderBlock),
/* harmony export */   renderFrontend: () => (/* binding */ renderFrontend)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}
function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), !0).forEach(function (r) {
      _defineProperty(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == _typeof(i) ? i : String(i);
}
function _toPrimitive(t, r) {
  if ("object" != _typeof(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
/**
 * External dependencies
 */


// Some blocks take care of rendering their inner blocks automatically. For
// example, the empty cart. In those cases, we don't want to trigger the render
// function of inner components on load. Instead, the wrapper block can trigger
// the event `ywcas-blocks_render_blocks_frontend` to render its inner blocks.
var selectorsToSkipOnLoad = ['.wp-block-yith-search-block'];

/**
 * Renders a block component in a single `container` node.
 */
var renderBlock = function renderBlock(_ref) {
  var Block = _ref.Block,
    container = _ref.container,
    _ref$attributes = _ref.attributes,
    attributes = _ref$attributes === void 0 ? {} : _ref$attributes,
    _ref$props = _ref.props,
    props = _ref$props === void 0 ? {} : _ref$props,
    _ref$errorBoundaryPro = _ref.errorBoundaryProps,
    errorBoundaryProps = _ref$errorBoundaryPro === void 0 ? {} : _ref$errorBoundaryPro;
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.render)( /*#__PURE__*/React.createElement(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Suspense, {
    fallback: /*#__PURE__*/React.createElement("div", {
      className: "wc-block-placeholder"
    })
  }, Block && /*#__PURE__*/React.createElement(Block, _extends({}, props, {
    attributes: attributes
  }))), container, function () {
    if (container.classList) {
      container.classList.remove('is-loading');
    }
  });
};

/**
 * Renders a block component in each `containers` node.
 */
var renderBlockInContainers = function renderBlockInContainers(_ref2) {
  var Block = _ref2.Block,
    containers = _ref2.containers,
    _ref2$getProps = _ref2.getProps,
    getProps = _ref2$getProps === void 0 ? function () {
      return {};
    } : _ref2$getProps,
    _ref2$getErrorBoundar = _ref2.getErrorBoundaryProps,
    getErrorBoundaryProps = _ref2$getErrorBoundar === void 0 ? function () {
      return {};
    } : _ref2$getErrorBoundar;
  if (containers.length === 0) {
    return;
  }

  // Use Array.forEach for IE11 compatibility.
  Array.prototype.forEach.call(containers, function (el, i) {
    var props = getProps(el, i);
    var errorBoundaryProps = getErrorBoundaryProps(el, i);
    var attributes = _objectSpread(_objectSpread({}, el.dataset), props.attributes || {});
    renderBlock({
      Block: Block,
      container: el,
      props: props,
      attributes: attributes,
      errorBoundaryProps: errorBoundaryProps
    });
  });
};

// Given an element and a list of wrappers, check if the element is inside at
// least one of the wrappers.
var isElementInsideWrappers = function isElementInsideWrappers(el, wrappers) {
  return Array.prototype.some.call(wrappers, function (wrapper) {
    return wrapper.contains(el) && !wrapper.isSameNode(el);
  });
};

/**
 * Renders the block frontend in the elements matched by the selector which are
 * outside the wrapper elements.
 */
var renderBlockOutsideWrappers = function renderBlockOutsideWrappers(_ref3) {
  var Block = _ref3.Block,
    getProps = _ref3.getProps,
    getErrorBoundaryProps = _ref3.getErrorBoundaryProps,
    selector = _ref3.selector,
    wrappers = _ref3.wrappers;
  var containers = document.body.querySelectorAll(selector);

  // Filter out blocks inside the wrappers.
  if (wrappers && wrappers.length > 0) {
    Array.prototype.filter.call(containers, function (el) {
      return !isElementInsideWrappers(el, wrappers);
    });
  }
  renderBlockInContainers({
    Block: Block,
    containers: containers,
    getProps: getProps,
    getErrorBoundaryProps: getErrorBoundaryProps
  });
};

/**
 * Renders the block frontend in the elements matched by the selector inside the
 * wrapper element.
 */
var renderBlockInsideWrapper = function renderBlockInsideWrapper(_ref4) {
  var Block = _ref4.Block,
    getProps = _ref4.getProps,
    getErrorBoundaryProps = _ref4.getErrorBoundaryProps,
    selector = _ref4.selector,
    wrapper = _ref4.wrapper;
  var containers = wrapper.querySelectorAll(selector);
  renderBlockInContainers({
    Block: Block,
    containers: containers,
    getProps: getProps,
    getErrorBoundaryProps: getErrorBoundaryProps
  });
};

/**
 * Renders the block frontend on page load. If the block is contained inside a
 * wrapper element that should be excluded from initial load, it adds the
 * appropriate event listeners to render the block when the
 * `wc-blocks_render_blocks_frontend` event is triggered.
 */
var renderFrontend = function renderFrontend(props) {
  var wrappersToSkipOnLoad = document.body.querySelectorAll(selectorsToSkipOnLoad.join(','));
  var Block = props.Block,
    getProps = props.getProps,
    getErrorBoundaryProps = props.getErrorBoundaryProps,
    selector = props.selector;
  renderBlockOutsideWrappers({
    Block: Block,
    getProps: getProps,
    getErrorBoundaryProps: getErrorBoundaryProps,
    selector: selector,
    wrappers: wrappersToSkipOnLoad
  });
  // For each wrapper, add an event listener to render the inner blocks when
  // `wc-blocks_render_blocks_frontend` event is triggered.
  Array.prototype.forEach.call(wrappersToSkipOnLoad, function (wrapper) {
    wrapper.addEventListener('ywcas-blocks_render_blocks_frontend', function () {
      renderBlockInsideWrapper(_objectSpread(_objectSpread({}, props), {}, {
        wrapper: wrapper
      }));
    });
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderFrontend);

/***/ }),

/***/ "./assets/js/blocks/src/blocks-registry/block-components/get-registered-block-components.js":
/*!**************************************************************************************************!*\
  !*** ./assets/js/blocks/src/blocks-registry/block-components/get-registered-block-components.js ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getRegisteredBlockComponents: () => (/* binding */ getRegisteredBlockComponents)
/* harmony export */ });
/* harmony import */ var _registered_block_components_init__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./registered-block-components-init */ "./assets/js/blocks/src/blocks-registry/block-components/registered-block-components-init.js");
function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), !0).forEach(function (r) {
      _defineProperty(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == _typeof(i) ? i : String(i);
}
function _toPrimitive(t, r) {
  if ("object" != _typeof(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}
/**
 * Internal dependencies
 */


/**
 * Get all Registered Block Components.
 *
 * WooCommerce Blocks allows React Components to be used on the frontend of the store in place of
 * Blocks instead of just serving static content.
 *
 * This gets all registered Block Components so we know which Blocks map to which React Components.
 *
 * @param {string} context Current context (a named parent Block). If Block Components were only
 *                         registered under a certain context, those Components will be returned,
 *                         as well as any Components registered under all contexts.
 * @return {Object} List of React Components registered under the provided context.
 */
function getRegisteredBlockComponents(context) {
  var parentInnerBlocks = _typeof(_registered_block_components_init__WEBPACK_IMPORTED_MODULE_0__.registeredBlockComponents[context]) === 'object' && Object.keys(_registered_block_components_init__WEBPACK_IMPORTED_MODULE_0__.registeredBlockComponents[context]).length > 0 ? _registered_block_components_init__WEBPACK_IMPORTED_MODULE_0__.registeredBlockComponents[context] : {};
  return _objectSpread(_objectSpread({}, parentInnerBlocks), _registered_block_components_init__WEBPACK_IMPORTED_MODULE_0__.registeredBlockComponents.any);
}

/***/ }),

/***/ "./assets/js/blocks/src/blocks-registry/block-components/index.js":
/*!************************************************************************!*\
  !*** ./assets/js/blocks/src/blocks-registry/block-components/index.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getRegisteredBlockComponents: () => (/* reexport safe */ _get_registered_block_components__WEBPACK_IMPORTED_MODULE_0__.getRegisteredBlockComponents),
/* harmony export */   registerBlockComponent: () => (/* reexport safe */ _register_block_component__WEBPACK_IMPORTED_MODULE_1__.registerBlockComponent),
/* harmony export */   registerInnerBlock: () => (/* reexport safe */ _register_block_component__WEBPACK_IMPORTED_MODULE_1__.registerInnerBlock)
/* harmony export */ });
/* harmony import */ var _get_registered_block_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get-registered-block-components */ "./assets/js/blocks/src/blocks-registry/block-components/get-registered-block-components.js");
/* harmony import */ var _register_block_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register-block-component */ "./assets/js/blocks/src/blocks-registry/block-components/register-block-component.js");



/***/ }),

/***/ "./assets/js/blocks/src/blocks-registry/block-components/register-block-component.js":
/*!*******************************************************************************************!*\
  !*** ./assets/js/blocks/src/blocks-registry/block-components/register-block-component.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   registerBlockComponent: () => (/* binding */ registerBlockComponent),
/* harmony export */   registerInnerBlock: () => (/* binding */ registerInnerBlock)
/* harmony export */ });
/* harmony import */ var _wordpress_deprecated__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/deprecated */ "@wordpress/deprecated");
/* harmony import */ var _wordpress_deprecated__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_deprecated__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _registered_block_components_init__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./registered-block-components-init */ "./assets/js/blocks/src/blocks-registry/block-components/registered-block-components-init.js");
function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), !0).forEach(function (r) {
      _defineProperty(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == _typeof(i) ? i : String(i);
}
function _toPrimitive(t, r) {
  if ("object" != _typeof(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}
/**
 * External dependencies
 */


/**
 * Internal dependencies
 */


/**
 * Register a Block Component.
 *
 * WooCommerce Blocks allows React Components to be used on the frontend of the store in place of
 * Blocks instead of just serving static content.
 *
 * Registering a Block Component allows you to define which React Component should be used in place
 * of a registered Block. The Component, when rendered, will be passed all Block Attributes.
 *
 * @param {Object}   options           Options to use when registering the block.
 * @param {Function} options.component React component that will be rendered, or the return value from  React.lazy if
 *                                     dynamically imported.
 * @param {string}   options.blockName Name of the block that this component belongs to.
 * @param {string}   [options.context] To make this component available only under a certain context
 *                                     (named parent Block) define it here. If left blank, the
 *                                     Component will be available for all contexts.
 */
function registerBlockComponent(options) {
  if (!options.context) {
    options.context = 'any';
  }
  assertOption(options, 'context', 'string');
  assertOption(options, 'blockName', 'string');
  assertBlockComponent(options, 'component');
  var context = options.context,
    blockName = options.blockName,
    component = options.component;
  if (!_registered_block_components_init__WEBPACK_IMPORTED_MODULE_1__.registeredBlockComponents[context]) {
    _registered_block_components_init__WEBPACK_IMPORTED_MODULE_1__.registeredBlockComponents[context] = {};
  }
  _registered_block_components_init__WEBPACK_IMPORTED_MODULE_1__.registeredBlockComponents[context][blockName] = component;
}

/**
 * Asserts that an option is a valid react element or lazy callback. Otherwise, throws an error.
 *
 * @throws Will throw an error if the type of the option doesn't match the expected type.
 * @param {Object} options    Object containing the option to validate.
 * @param {string} optionName Name of the option to validate.
 */
var assertBlockComponent = function assertBlockComponent(options, optionName) {
  if (options[optionName]) {
    if (typeof options[optionName] === 'function') {
      return;
    }
    if (options[optionName].$$typeof && options[optionName].$$typeof === Symbol["for"]('react.lazy')) {
      return;
    }
  }
  throw new Error("Incorrect value for the ".concat(optionName, " argument when registering a block component. Component must be a valid React Element or Lazy callback."));
};

/**
 * Asserts that an option is of the given type. Otherwise, throws an error.
 *
 * @throws Will throw an error if the type of the option doesn't match the expected type.
 * @param {Object} options      Object containing the option to validate.
 * @param {string} optionName   Name of the option to validate.
 * @param {string} expectedType Type expected for the option.
 */
var assertOption = function assertOption(options, optionName, expectedType) {
  var actualType = _typeof(options[optionName]);
  if (actualType !== expectedType) {
    throw new Error("Incorrect value for the ".concat(optionName, " argument when registering a block component. It was a ").concat(actualType, ", but must be a ").concat(expectedType, "."));
  }
};

/**
 * Alias of registerBlockComponent kept for backwards compatibility.
 *
 * @param {Object}   options           Options to use when registering the block.
 * @param {string}   options.main      Name of the parent block.
 * @param {string}   options.blockName Name of the child block being registered.
 * @param {Function} options.component React component used to render the child block.
 */
function registerInnerBlock(options) {
  _wordpress_deprecated__WEBPACK_IMPORTED_MODULE_0___default()('registerInnerBlock', {
    version: '2.8.0',
    alternative: 'registerBlockComponent',
    plugin: 'WooCommerce Blocks',
    hint: '"main" has been replaced with "context" and is now optional.'
  });
  assertOption(options, 'main', 'string');
  registerBlockComponent(_objectSpread(_objectSpread({}, options), {}, {
    context: options.main
  }));
}

/***/ }),

/***/ "./assets/js/blocks/src/blocks-registry/block-components/registered-block-components-init.js":
/*!***************************************************************************************************!*\
  !*** ./assets/js/blocks/src/blocks-registry/block-components/registered-block-components-init.js ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   registeredBlockComponents: () => (/* binding */ registeredBlockComponents)
/* harmony export */ });
var registeredBlockComponents = {};


/***/ }),

/***/ "./assets/js/blocks/src/blocks/search-block/attributes.js":
/*!****************************************************************!*\
  !*** ./assets/js/blocks/src/blocks/search-block/attributes.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   blockAttributes: () => (/* binding */ blockAttributes),
/* harmony export */   blockName: () => (/* binding */ blockName)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);

var blockName = 'yith/search-block';
var blockAttributes = {
  isPreview: {
    type: 'boolean',
    "default": false
  },
  align: {
    type: 'string',
    "default": 'wide'
  },
  size: {
    type: 'string',
    "default": 'sm'
  },
  currentView: {
    type: 'string',
    "default": 'yith/input-block',
    source: 'readonly' // custom source to prevent saving to post content
  },
  editorViews: {
    type: 'object',
    "default": [{
      view: 'yith/input-block',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Search Input', 'yith-woocommerce-ajax-search')
    }, {
      view: 'yith/filled-block',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Filled Results', 'yith-woocommerce-ajax-search')
    }, {
      view: 'yith/empty-block',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Empty Results', 'yith-woocommerce-ajax-search')
    }]
  }
};

/***/ }),

/***/ "./assets/js/blocks/src/blocks/search-block/block.js":
/*!***********************************************************!*\
  !*** ./assets/js/blocks/src/blocks/search-block/block.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lapilli_ui_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @lapilli-ui/components */ "@lapilli-ui/components");
/* harmony import */ var _lapilli_ui_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_lapilli_ui_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _packages_search__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../packages/search */ "./assets/js/blocks/src/packages/search/index.js");
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./context */ "./assets/js/blocks/src/blocks/search-block/context.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common */ "./assets/js/blocks/src/common.js");






var Block = function Block(_ref) {
  var children = _ref.children,
    attributes = _ref.attributes;
  var size = attributes.size;
  var classes = classnames__WEBPACK_IMPORTED_MODULE_2___default()('ywcas-classic-search', (0,_common__WEBPACK_IMPORTED_MODULE_5__.getSizeClassName)(size));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_packages_search__WEBPACK_IMPORTED_MODULE_3__.SlotFillProvider, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_context__WEBPACK_IMPORTED_MODULE_4__.SearchViewProvider, {
    size: size
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_lapilli_ui_components__WEBPACK_IMPORTED_MODULE_1__.Box, {
    className: classes
  }, children)));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Block);

/***/ }),

/***/ "./assets/js/blocks/src/blocks/search-block/context.js":
/*!*************************************************************!*\
  !*** ./assets/js/blocks/src/blocks/search-block/context.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SearchViewContext: () => (/* binding */ SearchViewContext),
/* harmony export */   SearchViewProvider: () => (/* binding */ SearchViewProvider),
/* harmony export */   useSearchContext: () => (/* binding */ useSearchContext)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
function _iterableToArrayLimit(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e,
      n,
      i,
      u,
      a = [],
      f = !0,
      o = !1;
    try {
      if (i = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t) return;
        f = !1;
      } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
    } catch (r) {
      o = !0, n = r;
    } finally {
      try {
        if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
/**
 * External dependencies
 */

var SearchViewContext = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createContext)({});
var SearchViewProvider = function SearchViewProvider(_ref) {
  var children = _ref.children,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 'small' : _ref$size;
  var _useState = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState2 = _slicedToArray(_useState, 2),
    inputFocused = _useState2[0],
    setInputFocused = _useState2[1];
  var _useState3 = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState4 = _slicedToArray(_useState3, 2),
    query = _useState4[0],
    setQuery = _useState4[1];
  var updateInputFocused = function updateInputFocused(value) {
    setInputFocused(value);
  };
  var updateQuery = function updateQuery(value) {
    setQuery(value);
  };
  return /*#__PURE__*/React.createElement(SearchViewContext.Provider, {
    value: {
      inputFocused: inputFocused,
      setInputFocused: updateInputFocused,
      query: query,
      setQuery: updateQuery,
      size: size
    }
  }, children);
};
var useSearchContext = function useSearchContext() {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useContext)(SearchViewContext);
};

/***/ }),

/***/ "./assets/js/blocks/src/blocks/search-block/inner-blocks/component-metadata.js":
/*!*************************************************************************************!*\
  !*** ./assets/js/blocks/src/blocks/search-block/inner-blocks/component-metadata.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _filled_block_block_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./filled-block/block.json */ "./assets/js/blocks/src/blocks/search-block/inner-blocks/filled-block/block.json");
/* harmony import */ var _empty_block_block_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./empty-block/block.json */ "./assets/js/blocks/src/blocks/search-block/inner-blocks/empty-block/block.json");
/* harmony import */ var _input_block_block_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./input-block/block.json */ "./assets/js/blocks/src/blocks/search-block/inner-blocks/input-block/block.json");
/* harmony import */ var _history_block_block_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./history-block/block.json */ "./assets/js/blocks/src/blocks/search-block/inner-blocks/history-block/block.json");
/* harmony import */ var _popular_block_block_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./popular-block/block.json */ "./assets/js/blocks/src/blocks/search-block/inner-blocks/popular-block/block.json");
/* harmony import */ var _product_results_block_block_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./product-results-block/block.json */ "./assets/js/blocks/src/blocks/search-block/inner-blocks/product-results-block/block.json");
/* harmony import */ var _related_categories_block_block_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./related-categories-block/block.json */ "./assets/js/blocks/src/blocks/search-block/inner-blocks/related-categories-block/block.json");
/* harmony import */ var _related_posts_block_block_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./related-posts-block/block.json */ "./assets/js/blocks/src/blocks/search-block/inner-blocks/related-posts-block/block.json");
/**
 * Internal dependencies
 */








/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  FILLED_BLOCK: _filled_block_block_json__WEBPACK_IMPORTED_MODULE_0__,
  EMPTY_BLOCK: _empty_block_block_json__WEBPACK_IMPORTED_MODULE_1__,
  INPUT_BLOCK: _input_block_block_json__WEBPACK_IMPORTED_MODULE_2__,
  HISTORY_BLOCK: _history_block_block_json__WEBPACK_IMPORTED_MODULE_3__,
  POPULAR_BLOCK: _popular_block_block_json__WEBPACK_IMPORTED_MODULE_4__,
  PRODUCT_RESULTS_BLOCK: _product_results_block_block_json__WEBPACK_IMPORTED_MODULE_5__,
  RELATED_CATEGORY_BLOCK: _related_categories_block_block_json__WEBPACK_IMPORTED_MODULE_6__,
  RELATED_POSTS_BLOCK: _related_posts_block_block_json__WEBPACK_IMPORTED_MODULE_7__
});

/***/ }),

/***/ "./assets/js/blocks/src/blocks/search-block/inner-blocks/register-components.js":
/*!**************************************************************************************!*\
  !*** ./assets/js/blocks/src/blocks/search-block/inner-blocks/register-components.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _packages_search__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../packages/search */ "./assets/js/blocks/src/packages/search/index.js");
/* harmony import */ var _component_metadata__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./component-metadata */ "./assets/js/blocks/src/blocks/search-block/inner-blocks/component-metadata.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../config */ "./assets/js/blocks/src/config.js");
/* harmony import */ var _related_posts_block_block_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./related-posts-block/block.json */ "./assets/js/blocks/src/blocks/search-block/inner-blocks/related-posts-block/block.json");
/**
 * External dependencies
 */



/**
 * Internal dependencies
 */




// Modify webpack publicPath at runtime based on location of WordPress Plugin.
// eslint-disable-next-line no-undef,camelcase
__webpack_require__.p = _config__WEBPACK_IMPORTED_MODULE_3__.YWCAS_BUILD_BLOCK_URL;
(0,_packages_search__WEBPACK_IMPORTED_MODULE_1__.registerSearchBlock)({
  metadata: _component_metadata__WEBPACK_IMPORTED_MODULE_2__["default"].INPUT_BLOCK,
  component: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.lazy)(function () {
    return __webpack_require__.e(/*! import() | input-block/input */ "input-block/input").then(__webpack_require__.bind(__webpack_require__, /*! ./input-block/frontend */ "./assets/js/blocks/src/blocks/search-block/inner-blocks/input-block/frontend.js"));
  })
});
(0,_packages_search__WEBPACK_IMPORTED_MODULE_1__.registerSearchBlock)({
  metadata: _component_metadata__WEBPACK_IMPORTED_MODULE_2__["default"].HISTORY_BLOCK,
  component: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.lazy)(function () {
    return __webpack_require__.e(/*! import() | history-block/history-searches */ "history-block/history-searches").then(__webpack_require__.bind(__webpack_require__, /*! ./history-block/frontend */ "./assets/js/blocks/src/blocks/search-block/inner-blocks/history-block/frontend.js"));
  })
});
(0,_packages_search__WEBPACK_IMPORTED_MODULE_1__.registerSearchBlock)({
  metadata: _component_metadata__WEBPACK_IMPORTED_MODULE_2__["default"].POPULAR_BLOCK,
  component: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.lazy)(function () {
    return __webpack_require__.e(/*! import() | popular-block/popular-searches */ "popular-block/popular-searches").then(__webpack_require__.bind(__webpack_require__, /*! ./popular-block/frontend */ "./assets/js/blocks/src/blocks/search-block/inner-blocks/popular-block/frontend.js"));
  })
});
(0,_packages_search__WEBPACK_IMPORTED_MODULE_1__.registerSearchBlock)({
  metadata: _component_metadata__WEBPACK_IMPORTED_MODULE_2__["default"].RELATED_CATEGORY_BLOCK,
  component: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.lazy)(function () {
    return __webpack_require__.e(/*! import() | related-categories-block/related-category */ "related-categories-block/related-category").then(__webpack_require__.bind(__webpack_require__, /*! ./related-categories-block/frontend */ "./assets/js/blocks/src/blocks/search-block/inner-blocks/related-categories-block/frontend.js"));
  })
});
(0,_packages_search__WEBPACK_IMPORTED_MODULE_1__.registerSearchBlock)({
  metadata: _component_metadata__WEBPACK_IMPORTED_MODULE_2__["default"].RELATED_POSTS_BLOCK,
  component: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.lazy)(function () {
    return __webpack_require__.e(/*! import() | related-posts-block/related-post */ "related-posts-block/related-post").then(__webpack_require__.bind(__webpack_require__, /*! ./related-posts-block/frontend */ "./assets/js/blocks/src/blocks/search-block/inner-blocks/related-posts-block/frontend.js"));
  })
});
(0,_packages_search__WEBPACK_IMPORTED_MODULE_1__.registerSearchBlock)({
  metadata: _component_metadata__WEBPACK_IMPORTED_MODULE_2__["default"].EMPTY_BLOCK,
  component: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.lazy)(function () {
    return __webpack_require__.e(/*! import() | empty-block/empty */ "empty-block/empty").then(__webpack_require__.bind(__webpack_require__, /*! ./empty-block/frontend */ "./assets/js/blocks/src/blocks/search-block/inner-blocks/empty-block/frontend.js"));
  })
});
(0,_packages_search__WEBPACK_IMPORTED_MODULE_1__.registerSearchBlock)({
  metadata: _component_metadata__WEBPACK_IMPORTED_MODULE_2__["default"].FILLED_BLOCK,
  component: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.lazy)(function () {
    return __webpack_require__.e(/*! import() | filled-block/filled */ "filled-block/filled").then(__webpack_require__.bind(__webpack_require__, /*! ./filled-block/frontend */ "./assets/js/blocks/src/blocks/search-block/inner-blocks/filled-block/frontend.js"));
  })
});
(0,_packages_search__WEBPACK_IMPORTED_MODULE_1__.registerSearchBlock)({
  metadata: _component_metadata__WEBPACK_IMPORTED_MODULE_2__["default"].PRODUCT_RESULTS_BLOCK,
  component: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.lazy)(function () {
    return __webpack_require__.e(/*! import() | product-results-block/product-results */ "product-results-block/product-results").then(__webpack_require__.bind(__webpack_require__, /*! ./product-results-block/frontend */ "./assets/js/blocks/src/blocks/search-block/inner-blocks/product-results-block/frontend.js"));
  })
});

/***/ }),

/***/ "./assets/js/blocks/src/common.js":
/*!****************************************!*\
  !*** ./assets/js/blocks/src/common.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ClockIcon: () => (/* binding */ ClockIcon),
/* harmony export */   CloseIcon: () => (/* binding */ CloseIcon),
/* harmony export */   MagnifyingGlassIcon: () => (/* binding */ MagnifyingGlassIcon),
/* harmony export */   getSizeClassName: () => (/* binding */ getSizeClassName),
/* harmony export */   yith_icon: () => (/* binding */ yith_icon)
/* harmony export */ });
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
var el = wp.element.createElement;
var yith_icon = el('svg', {
  width: 22,
  height: 22
}, el('path', {
  d: "M 18.24 7.628 C 17.291 8.284 16.076 8.971 14.587 9.688 C 15.344 7.186 15.765 4.851 15.849 2.684 C 15.912 0.939 15.133 0.045 13.514 0.003 C 11.558 -0.06 10.275 1.033 9.665 3.284 C 10.007 3.137 10.359 3.063 10.723 3.063 C 11.021 3.063 11.267 3.184 11.459 3.426 C 11.651 3.668 11.736 3.947 11.715 4.262 C 11.695 5.082 11.276 5.961 10.46 6.896 C 9.644 7.833 8.918 8.3 8.282 8.3 C 7.837 8.3 7.625 7.922 7.646 7.165 C 7.667 6.765 7.804 5.955 8.056 4.735 C 8.287 3.579 8.403 2.801 8.403 2.401 C 8.403 1.707 8.224 1.144 7.867 0.713 C 7.509 0.282 6.994 0.098 6.321 0.161 C 5.858 0.203 5.175 0.624 4.27 1.422 C 3.596 2.035 2.923 2.644 2.25 3.254 L 2.976 4.106 C 3.564 3.664 3.922 3.443 4.048 3.443 C 4.448 3.443 4.637 3.717 4.617 4.263 C 4.617 4.306 4.427 4.968 4.049 6.251 C 3.671 7.534 3.471 8.491 3.449 9.122 C 3.407 9.985 3.565 10.647 3.924 11.109 C 4.367 11.677 5.106 11.919 6.142 11.835 C 7.366 11.751 8.591 11.298 9.816 10.479 C 10.323 10.142 10.808 9.753 11.273 9.311 C 11.105 10.153 10.905 10.868 10.673 11.457 C 8.402 12.487 6.762 13.37 5.752 14.107 C 4.321 15.137 3.554 16.241 3.449 17.419 C 3.259 19.459 4.29 20.479 6.541 20.479 C 8.055 20.479 9.517 19.554 10.926 17.703 C 12.125 16.126 13.166 14.022 14.049 11.394 C 15.578 10.635 16.87 9.892 17.928 9.164 C 17.894 9.409 18.319 7.308 18.24 7.628 Z  M 7.393 16.095 C 7.056 16.095 6.898 15.947 6.919 15.653 C 6.961 15.106 7.908 14.38 9.759 13.476 C 8.791 15.221 8.002 16.095 7.393 16.095 Z"
}));
function CloseIcon(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.5,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M6 18L18 6M6 6l12 12"
  }));
}
function MagnifyingGlassIcon(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.5,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
  }));
}
function ClockIcon(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.5,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
  }));
}
var getSizeClassName = function getSizeClassName(size) {
  var className;
  switch (size) {
    case 'xl':
      className = 'ywcas-extra-large';
      break;
    case 'lg':
      className = 'ywcas-large';
      break;
    case 'md':
      className = 'ywcas-medium';
      break;
    default:
      className = 'ywcas-small';
  }
  return className;
};


/***/ }),

/***/ "./assets/js/blocks/src/config.js":
/*!****************************************!*\
  !*** ./assets/js/blocks/src/config.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   YWCAS_ADD_TO_CART_LABEL: () => (/* binding */ YWCAS_ADD_TO_CART_LABEL),
/* harmony export */   YWCAS_AJAX_URL: () => (/* binding */ YWCAS_AJAX_URL),
/* harmony export */   YWCAS_BUILD_BLOCK_URL: () => (/* binding */ YWCAS_BUILD_BLOCK_URL),
/* harmony export */   YWCAS_DEFAULT_QUERY: () => (/* binding */ YWCAS_DEFAULT_QUERY),
/* harmony export */   YWCAS_FUZZY_RESULTS: () => (/* binding */ YWCAS_FUZZY_RESULTS),
/* harmony export */   YWCAS_HAS_AUTOCOMPLETE: () => (/* binding */ YWCAS_HAS_AUTOCOMPLETE),
/* harmony export */   YWCAS_IN_STOCK_LABEL: () => (/* binding */ YWCAS_IN_STOCK_LABEL),
/* harmony export */   YWCAS_LANG: () => (/* binding */ YWCAS_LANG),
/* harmony export */   YWCAS_MIN_CHARS: () => (/* binding */ YWCAS_MIN_CHARS),
/* harmony export */   YWCAS_OUT_OF_STOCK_LABEL: () => (/* binding */ YWCAS_OUT_OF_STOCK_LABEL),
/* harmony export */   YWCAS_READ_MORE: () => (/* binding */ YWCAS_READ_MORE),
/* harmony export */   YWCAS_SELECT_OPTIONS: () => (/* binding */ YWCAS_SELECT_OPTIONS),
/* harmony export */   YWCAS_SITE_URL: () => (/* binding */ YWCAS_SITE_URL),
/* harmony export */   YWCAS_SKU_LABEL: () => (/* binding */ YWCAS_SKU_LABEL),
/* harmony export */   YWCAS_ZERO_RESULTS: () => (/* binding */ YWCAS_ZERO_RESULTS),
/* harmony export */   history: () => (/* binding */ history),
/* harmony export */   popular: () => (/* binding */ popular),
/* harmony export */   ywcasDefaultSettings: () => (/* binding */ ywcasDefaultSettings),
/* harmony export */   ywcas_wc_data: () => (/* binding */ ywcas_wc_data)
/* harmony export */ });
/* global ywcas_search_results_block_parameter */
var _ywcas_search_results = ywcas_search_results_block_parameter,
  showAutoComplete = _ywcas_search_results.showAutoComplete,
  minChars = _ywcas_search_results.minChars,
  skuLabel = _ywcas_search_results.skuLabel,
  addToCartLabel = _ywcas_search_results.addToCartLabel,
  readMoreLabel = _ywcas_search_results.readMoreLabel,
  selectOptionsLabel = _ywcas_search_results.selectOptionsLabel,
  ajaxURL = _ywcas_search_results.ajaxURL,
  inStockLabel = _ywcas_search_results.inStockLabel,
  outOfStockLabel = _ywcas_search_results.outOfStockLabel,
  wcData = _ywcas_search_results.wcData,
  ywcasBuildBlockURL = _ywcas_search_results.ywcasBuildBlockURL,
  lang = _ywcas_search_results.lang,
  siteURL = _ywcas_search_results.siteURL,
  classicDefaultSettings = _ywcas_search_results.classicDefaultSettings,
  defaultQuery = _ywcas_search_results.defaultQuery,
  historySearches = _ywcas_search_results.historySearches,
  popularSearches = _ywcas_search_results.popularSearches,
  zeroResults = _ywcas_search_results.zeroResults,
  fuzzyResults = _ywcas_search_results.fuzzyResults;
var ywcas_wc_data = wcData;
var history = historySearches;
var popular = popularSearches;
var YWCAS_ADD_TO_CART_LABEL = addToCartLabel;
var YWCAS_AJAX_URL = ajaxURL;
var YWCAS_IN_STOCK_LABEL = inStockLabel;
var YWCAS_SKU_LABEL = skuLabel;
var YWCAS_BUILD_BLOCK_URL = ywcasBuildBlockURL;
var YWCAS_OUT_OF_STOCK_LABEL = outOfStockLabel;
var YWCAS_LANG = lang;
var YWCAS_SITE_URL = siteURL;
var ywcasDefaultSettings = classicDefaultSettings;
var YWCAS_READ_MORE = readMoreLabel;
var YWCAS_SELECT_OPTIONS = selectOptionsLabel;
var YWCAS_HAS_AUTOCOMPLETE = 'yes' === showAutoComplete;
var YWCAS_MIN_CHARS = parseInt(minChars);
var YWCAS_DEFAULT_QUERY = defaultQuery;
var YWCAS_ZERO_RESULTS = zeroResults;
var YWCAS_FUZZY_RESULTS = fuzzyResults;

/***/ }),

/***/ "./assets/js/blocks/src/packages/search/block-registry/get-registered-blocks.js":
/*!**************************************************************************************!*\
  !*** ./assets/js/blocks/src/packages/search/block-registry/get-registered-blocks.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getRegisteredBlocks: () => (/* binding */ getRegisteredBlocks),
/* harmony export */   hasInnerBlocks: () => (/* binding */ hasInnerBlocks)
/* harmony export */ });
/* harmony import */ var _registered_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./registered-blocks */ "./assets/js/blocks/src/packages/search/block-registry/registered-blocks.js");
/**
 * Internal dependencies
 */


var innerBlockAreas = {
  YITH_SEARCH: 'yith/search-block',
  YITH_SEARCH_INPUT: 'yith/input-block',
  YITH_EMPTY: 'yith/empty-block',
  YITH_FILLED: 'yith/filled-block'
};
/**
 * Check if a block/area supports inner block registration.
 */
var hasInnerBlocks = function hasInnerBlocks(block) {
  return Object.values(innerBlockAreas).includes(block);
};

/**
 * Returns an array of registered block objects available within a specific parent block/area.
 */
var getRegisteredBlocks = function getRegisteredBlocks(block) {
  return hasInnerBlocks(block) ? Object.values(_registered_blocks__WEBPACK_IMPORTED_MODULE_0__.registeredBlocks).filter(function (_ref) {
    var metadata = _ref.metadata;
    return ((metadata === null || metadata === void 0 ? void 0 : metadata.parent) || []).includes(block);
  }) : [];
};

/***/ }),

/***/ "./assets/js/blocks/src/packages/search/block-registry/index.js":
/*!**********************************************************************!*\
  !*** ./assets/js/blocks/src/packages/search/block-registry/index.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getRegisteredBlocks: () => (/* reexport safe */ _get_registered_blocks__WEBPACK_IMPORTED_MODULE_0__.getRegisteredBlocks),
/* harmony export */   hasInnerBlocks: () => (/* reexport safe */ _get_registered_blocks__WEBPACK_IMPORTED_MODULE_0__.hasInnerBlocks),
/* harmony export */   registerSearchBlock: () => (/* reexport safe */ _register_search_block__WEBPACK_IMPORTED_MODULE_1__.registerSearchBlock)
/* harmony export */ });
/* harmony import */ var _get_registered_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get-registered-blocks */ "./assets/js/blocks/src/packages/search/block-registry/get-registered-blocks.js");
/* harmony import */ var _register_search_block__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register-search-block */ "./assets/js/blocks/src/packages/search/block-registry/register-search-block.js");



/***/ }),

/***/ "./assets/js/blocks/src/packages/search/block-registry/register-search-block.js":
/*!**************************************************************************************!*\
  !*** ./assets/js/blocks/src/packages/search/block-registry/register-search-block.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   registerSearchBlock: () => (/* binding */ registerSearchBlock)
/* harmony export */ });
/* harmony import */ var _blocks_registry_block_components___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../blocks-registry/block-components/ */ "./assets/js/blocks/src/blocks-registry/block-components/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./assets/js/blocks/src/packages/search/block-registry/utils.js");
/* harmony import */ var _registered_blocks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./registered-blocks */ "./assets/js/blocks/src/packages/search/block-registry/registered-blocks.js");
/**
 * External dependencies
 */


/**
 * Internal dependencies
 */



/**
 * Main API for registering a new checkout block within areas.
 */
var registerSearchBlock = function registerSearchBlock(options) {
  var _options$metadata;
  (0,_utils__WEBPACK_IMPORTED_MODULE_1__.assertOption)(options, 'metadata', 'object');
  (0,_utils__WEBPACK_IMPORTED_MODULE_1__.assertBlockName)(options.metadata.name);
  (0,_utils__WEBPACK_IMPORTED_MODULE_1__.assertBlockParent)(options.metadata.parent);
  (0,_utils__WEBPACK_IMPORTED_MODULE_1__.assertBlockComponent)(options, 'component');

  /**
   * This ensures the frontend component for the checkout block is available.
   */
  (0,_blocks_registry_block_components___WEBPACK_IMPORTED_MODULE_0__.registerBlockComponent)({
    blockName: options.metadata.name,
    component: options.component
  });

  // Infer the `force` value from whether the block is locked or not. But
  // allow overriding it on block registration.
  var force = typeof options.force === 'boolean' ? options.force : Boolean((_options$metadata = options.metadata) === null || _options$metadata === void 0 || (_options$metadata = _options$metadata.attributes) === null || _options$metadata === void 0 || (_options$metadata = _options$metadata.lock) === null || _options$metadata === void 0 || (_options$metadata = _options$metadata["default"]) === null || _options$metadata === void 0 ? void 0 : _options$metadata.remove);

  /**
   * Store block metadata for later lookup.
   */
  _registered_blocks__WEBPACK_IMPORTED_MODULE_2__.registeredBlocks[options.metadata.name] = {
    blockName: options.metadata.name,
    metadata: options.metadata,
    component: options.component,
    force: force
  };
};

/***/ }),

/***/ "./assets/js/blocks/src/packages/search/block-registry/registered-blocks.js":
/*!**********************************************************************************!*\
  !*** ./assets/js/blocks/src/packages/search/block-registry/registered-blocks.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   registeredBlocks: () => (/* binding */ registeredBlocks)
/* harmony export */ });
var registeredBlocks = {};


/***/ }),

/***/ "./assets/js/blocks/src/packages/search/block-registry/utils.js":
/*!**********************************************************************!*\
  !*** ./assets/js/blocks/src/packages/search/block-registry/utils.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   assertBlockComponent: () => (/* binding */ assertBlockComponent),
/* harmony export */   assertBlockName: () => (/* binding */ assertBlockName),
/* harmony export */   assertBlockParent: () => (/* binding */ assertBlockParent),
/* harmony export */   assertOption: () => (/* binding */ assertOption),
/* harmony export */   assertType: () => (/* binding */ assertType),
/* harmony export */   isNull: () => (/* binding */ isNull),
/* harmony export */   isObject: () => (/* binding */ isObject)
/* harmony export */ });
/* harmony import */ var _get_registered_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get-registered-blocks */ "./assets/js/blocks/src/packages/search/block-registry/get-registered-blocks.js");
function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}
/**
 * Internal dependencies
 */

var isNull = function isNull(term) {
  return term === null;
};
var isObject = function isObject(term) {
  return !isNull(term) && term instanceof Object && term.constructor === Object;
};

/**
 * Asserts that an option is of the given type. Otherwise, throws an error.
 *
 * @throws Will throw an error if the type of the option doesn't match the expected type.
 */
var assertType = function assertType(optionName, option, expectedType) {
  var actualType = _typeof(option);
  if (actualType !== expectedType) {
    throw new Error("Incorrect value for the ".concat(optionName, " argument when registering a checkout block. It was a ").concat(actualType, ", but must be a ").concat(expectedType, "."));
  }
};

/**
 * Validate the block name.
 *
 * @throws Will throw an error if the block name is invalid.
 */
var assertBlockName = function assertBlockName(blockName) {
  assertType('blockName', blockName, 'string');
  if (!blockName) {
    throw new Error("Value for the blockName argument must not be empty.");
  }
};

/**
 * Validate the block parent.
 *
 * @throws Will throw an error if the block name is invalid.
 */
var assertBlockParent = function assertBlockParent(blockParent) {
  if (typeof blockParent !== 'string' && !Array.isArray(blockParent)) {
    throw new Error("Incorrect value for the parent argument when registering a checkout block. It was a ".concat(_typeof(blockParent), ", but must be a string or array of strings."));
  }
  if (typeof blockParent === 'string' && !(0,_get_registered_blocks__WEBPACK_IMPORTED_MODULE_0__.hasInnerBlocks)(blockParent)) {
    throw new Error("When registering a checkout block, the parent must be a valid inner block area.");
  }
  if (Array.isArray(blockParent) && !blockParent.some(function (parent) {
    return (0,_get_registered_blocks__WEBPACK_IMPORTED_MODULE_0__.hasInnerBlocks)(parent);
  })) {
    throw new Error("When registering a checkout block, the parent must be a valid inner block area.");
  }
};

/**
 * Asserts that an option is of the given type. Otherwise, throws an error.
 *
 * @throws Will throw an error if the type of the option doesn't match the expected type.
 * @param {Object} options      Object containing the option to validate.
 * @param {string} optionName   Name of the option to validate.
 * @param {string} expectedType Type expected for the option.
 */
var assertOption = function assertOption(options, optionName, expectedType) {
  if (!isObject(options)) {
    return;
  }
  var actualType = _typeof(options[optionName]);
  if (actualType !== expectedType) {
    throw new Error("Incorrect value for the ".concat(optionName, " argument when registering a block component. It was a ").concat(actualType, ", but must be a ").concat(expectedType, "."));
  }
};

/**
 * Asserts that an option is a valid react element or lazy callback. Otherwise, throws an error.
 *
 * @throws Will throw an error if the type of the option doesn't match the expected type.
 */
var assertBlockComponent = function assertBlockComponent(options, optionName) {
  var optionValue = options[optionName];
  if (optionValue) {
    if (typeof optionValue === 'function') {
      return;
    }
    if (isObject(optionValue) && optionValue.$$typeof && optionValue.$$typeof === Symbol["for"]('react.lazy')) {
      return;
    }
  }
  throw new Error("Incorrect value for the ".concat(optionName, " argument when registering a block component. Component must be a valid React Element or Lazy callback."));
};

/***/ }),

/***/ "./assets/js/blocks/src/packages/search/index.js":
/*!*******************************************************!*\
  !*** ./assets/js/blocks/src/packages/search/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SlotFillProvider: () => (/* reexport safe */ _wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SlotFillProvider),
/* harmony export */   createSlotFill: () => (/* reexport safe */ _slot__WEBPACK_IMPORTED_MODULE_0__.createSlotFill),
/* harmony export */   getRegisteredBlocks: () => (/* reexport safe */ _block_registry__WEBPACK_IMPORTED_MODULE_1__.getRegisteredBlocks),
/* harmony export */   hasInnerBlocks: () => (/* reexport safe */ _block_registry__WEBPACK_IMPORTED_MODULE_1__.hasInnerBlocks),
/* harmony export */   hasValidFills: () => (/* reexport safe */ _slot__WEBPACK_IMPORTED_MODULE_0__.hasValidFills),
/* harmony export */   registerSearchBlock: () => (/* reexport safe */ _block_registry__WEBPACK_IMPORTED_MODULE_1__.registerSearchBlock),
/* harmony export */   useSlot: () => (/* reexport safe */ _slot__WEBPACK_IMPORTED_MODULE_0__.useSlot)
/* harmony export */ });
/* harmony import */ var _slot__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./slot */ "./assets/js/blocks/src/packages/search/slot/index.js");
/* harmony import */ var _block_registry__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./block-registry */ "./assets/js/blocks/src/packages/search/block-registry/index.js");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);




/***/ }),

/***/ "./assets/js/blocks/src/packages/search/slot/index.js":
/*!************************************************************!*\
  !*** ./assets/js/blocks/src/packages/search/slot/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createSlotFill: () => (/* binding */ createSlotFill),
/* harmony export */   hasValidFills: () => (/* binding */ hasValidFills),
/* harmony export */   useSlot: () => (/* binding */ useSlot)
/* harmony export */ });
/* harmony import */ var _wordpress_deprecated__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/deprecated */ "@wordpress/deprecated");
/* harmony import */ var _wordpress_deprecated__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_deprecated__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
/**
 * External dependencies
 */




/**
 * This function is used in case __experimentalUseSlot is removed and useSlot is not released, it tries to mock
 * the return value of that slot.
 *
 * @return {Object} The hook mocked return, currently:
 *                  fills, a null array of length 2.
 */
var mockedUseSlot = function mockedUseSlot() {
  /**
   * If we're here, it means useSlot was never graduated and __experimentalUseSlot is removed, so we should change our code.
   *
   */
  _wordpress_deprecated__WEBPACK_IMPORTED_MODULE_0___default()('__experimentalUseSlot', {
    plugin: 'woocommerce-gutenberg-products-block'
  });
  // We're going to mock its value
  return {
    fills: new Array(2)
  };
};

/**
 * Checks if this slot has any valid fills. A valid fill is one that isn't falsy.
 *
 * @param {Array} fills The list of fills to check for a valid one in.
 * @return {boolean} True if this slot contains any valid fills.
 */
var hasValidFills = function hasValidFills(fills) {
  return Array.isArray(fills) && fills.filter(Boolean).length > 0;
};

/**
 * A hook that is used inside a slotFillProvider to return information on the a slot.
 *
 * @param {string} slotName The slot name to be hooked into.
 * @return {Object} slot data.
 */
var useSlot;
if (typeof _wordpress_components__WEBPACK_IMPORTED_MODULE_2__.useSlot === 'function') {
  useSlot = _wordpress_components__WEBPACK_IMPORTED_MODULE_2__.useSlot;
} else if (typeof _wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalUseSlot === 'function') {
  useSlot = _wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalUseSlot;
} else {
  useSlot = mockedUseSlot;
}


/**
 * Abstracts @wordpress/components createSlotFill, wraps Fill in an error boundary and passes down fillProps.
 *
 * @param {string}                         slotName  The generated slotName, based down to createSlotFill.
 * @param {null|function(Element):Element} [onError] Returns an element to display the error if the current use is an admin.
 *
 * @return {Object} Returns a newly wrapped Fill and Slot.
 */
var createSlotFill = function createSlotFill(slotName) {
  var onError = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var _baseCreateSlotFill = (0,_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.createSlotFill)(slotName),
    BaseFill = _baseCreateSlotFill.Fill,
    BaseSlot = _baseCreateSlotFill.Slot;

  /**
   * A Fill that will get rendered inside associate slot.
   * If the code inside has a error, it would be caught ad removed.
   * The error is only visible to admins.
   *
   * @param {Object} props          Items props.
   * @param {Array}  props.children Children to be rendered.
   */
  var Fill = function Fill(_ref) {
    var children = _ref.children;
    return /*#__PURE__*/React.createElement(BaseFill, null, function (fillProps) {
      return _wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Children.map(children, function (fill) {
        return /*#__PURE__*/React.createElement(React.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.cloneElement)(fill, fillProps));
      });
    });
  };

  /**
   * A Slot that will get rendered inside our tree.
   * This forces Slot to use the Portal implementation that allows events to be bubbled to react tree instead of dom tree.
   *
   * @param {Object}         [props]         Slot props.
   * @param {string}         props.className Class name to be used on slot.
   * @param {Object}         props.fillProps Props to be passed to fills.
   * @param {Element|string} props.as        Element used to render the slot, defaults to div.
   *
   */
  var Slot = function Slot(props) {
    return /*#__PURE__*/React.createElement(BaseSlot, _extends({}, props, {
      bubblesVirtually: true
    }));
  };
  return {
    Fill: Fill,
    Slot: Slot
  };
};

/***/ }),

/***/ "./node_modules/domelementtype/lib/index.js":
/*!**************************************************!*\
  !*** ./node_modules/domelementtype/lib/index.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Doctype = exports.CDATA = exports.Tag = exports.Style = exports.Script = exports.Comment = exports.Directive = exports.Text = exports.Root = exports.isTag = exports.ElementType = void 0;
/** Types of elements found in htmlparser2's DOM */
var ElementType;
(function (ElementType) {
    /** Type for the root element of a document */
    ElementType["Root"] = "root";
    /** Type for Text */
    ElementType["Text"] = "text";
    /** Type for <? ... ?> */
    ElementType["Directive"] = "directive";
    /** Type for <!-- ... --> */
    ElementType["Comment"] = "comment";
    /** Type for <script> tags */
    ElementType["Script"] = "script";
    /** Type for <style> tags */
    ElementType["Style"] = "style";
    /** Type for Any tag */
    ElementType["Tag"] = "tag";
    /** Type for <![CDATA[ ... ]]> */
    ElementType["CDATA"] = "cdata";
    /** Type for <!doctype ...> */
    ElementType["Doctype"] = "doctype";
})(ElementType = exports.ElementType || (exports.ElementType = {}));
/**
 * Tests whether an element is a tag or not.
 *
 * @param elem Element to test
 */
function isTag(elem) {
    return (elem.type === ElementType.Tag ||
        elem.type === ElementType.Script ||
        elem.type === ElementType.Style);
}
exports.isTag = isTag;
// Exports for backwards compatibility
/** Type for the root element of a document */
exports.Root = ElementType.Root;
/** Type for Text */
exports.Text = ElementType.Text;
/** Type for <? ... ?> */
exports.Directive = ElementType.Directive;
/** Type for <!-- ... --> */
exports.Comment = ElementType.Comment;
/** Type for <script> tags */
exports.Script = ElementType.Script;
/** Type for <style> tags */
exports.Style = ElementType.Style;
/** Type for Any tag */
exports.Tag = ElementType.Tag;
/** Type for <![CDATA[ ... ]]> */
exports.CDATA = ElementType.CDATA;
/** Type for <!doctype ...> */
exports.Doctype = ElementType.Doctype;


/***/ }),

/***/ "./node_modules/domhandler/lib/index.js":
/*!**********************************************!*\
  !*** ./node_modules/domhandler/lib/index.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DomHandler = void 0;
var domelementtype_1 = __webpack_require__(/*! domelementtype */ "./node_modules/domelementtype/lib/index.js");
var node_js_1 = __webpack_require__(/*! ./node.js */ "./node_modules/domhandler/lib/node.js");
__exportStar(__webpack_require__(/*! ./node.js */ "./node_modules/domhandler/lib/node.js"), exports);
// Default options
var defaultOpts = {
    withStartIndices: false,
    withEndIndices: false,
    xmlMode: false,
};
var DomHandler = /** @class */ (function () {
    /**
     * @param callback Called once parsing has completed.
     * @param options Settings for the handler.
     * @param elementCB Callback whenever a tag is closed.
     */
    function DomHandler(callback, options, elementCB) {
        /** The elements of the DOM */
        this.dom = [];
        /** The root element for the DOM */
        this.root = new node_js_1.Document(this.dom);
        /** Indicated whether parsing has been completed. */
        this.done = false;
        /** Stack of open tags. */
        this.tagStack = [this.root];
        /** A data node that is still being written to. */
        this.lastNode = null;
        /** Reference to the parser instance. Used for location information. */
        this.parser = null;
        // Make it possible to skip arguments, for backwards-compatibility
        if (typeof options === "function") {
            elementCB = options;
            options = defaultOpts;
        }
        if (typeof callback === "object") {
            options = callback;
            callback = undefined;
        }
        this.callback = callback !== null && callback !== void 0 ? callback : null;
        this.options = options !== null && options !== void 0 ? options : defaultOpts;
        this.elementCB = elementCB !== null && elementCB !== void 0 ? elementCB : null;
    }
    DomHandler.prototype.onparserinit = function (parser) {
        this.parser = parser;
    };
    // Resets the handler back to starting state
    DomHandler.prototype.onreset = function () {
        this.dom = [];
        this.root = new node_js_1.Document(this.dom);
        this.done = false;
        this.tagStack = [this.root];
        this.lastNode = null;
        this.parser = null;
    };
    // Signals the handler that parsing is done
    DomHandler.prototype.onend = function () {
        if (this.done)
            return;
        this.done = true;
        this.parser = null;
        this.handleCallback(null);
    };
    DomHandler.prototype.onerror = function (error) {
        this.handleCallback(error);
    };
    DomHandler.prototype.onclosetag = function () {
        this.lastNode = null;
        var elem = this.tagStack.pop();
        if (this.options.withEndIndices) {
            elem.endIndex = this.parser.endIndex;
        }
        if (this.elementCB)
            this.elementCB(elem);
    };
    DomHandler.prototype.onopentag = function (name, attribs) {
        var type = this.options.xmlMode ? domelementtype_1.ElementType.Tag : undefined;
        var element = new node_js_1.Element(name, attribs, undefined, type);
        this.addNode(element);
        this.tagStack.push(element);
    };
    DomHandler.prototype.ontext = function (data) {
        var lastNode = this.lastNode;
        if (lastNode && lastNode.type === domelementtype_1.ElementType.Text) {
            lastNode.data += data;
            if (this.options.withEndIndices) {
                lastNode.endIndex = this.parser.endIndex;
            }
        }
        else {
            var node = new node_js_1.Text(data);
            this.addNode(node);
            this.lastNode = node;
        }
    };
    DomHandler.prototype.oncomment = function (data) {
        if (this.lastNode && this.lastNode.type === domelementtype_1.ElementType.Comment) {
            this.lastNode.data += data;
            return;
        }
        var node = new node_js_1.Comment(data);
        this.addNode(node);
        this.lastNode = node;
    };
    DomHandler.prototype.oncommentend = function () {
        this.lastNode = null;
    };
    DomHandler.prototype.oncdatastart = function () {
        var text = new node_js_1.Text("");
        var node = new node_js_1.CDATA([text]);
        this.addNode(node);
        text.parent = node;
        this.lastNode = text;
    };
    DomHandler.prototype.oncdataend = function () {
        this.lastNode = null;
    };
    DomHandler.prototype.onprocessinginstruction = function (name, data) {
        var node = new node_js_1.ProcessingInstruction(name, data);
        this.addNode(node);
    };
    DomHandler.prototype.handleCallback = function (error) {
        if (typeof this.callback === "function") {
            this.callback(error, this.dom);
        }
        else if (error) {
            throw error;
        }
    };
    DomHandler.prototype.addNode = function (node) {
        var parent = this.tagStack[this.tagStack.length - 1];
        var previousSibling = parent.children[parent.children.length - 1];
        if (this.options.withStartIndices) {
            node.startIndex = this.parser.startIndex;
        }
        if (this.options.withEndIndices) {
            node.endIndex = this.parser.endIndex;
        }
        parent.children.push(node);
        if (previousSibling) {
            node.prev = previousSibling;
            previousSibling.next = node;
        }
        node.parent = parent;
        this.lastNode = null;
    };
    return DomHandler;
}());
exports.DomHandler = DomHandler;
exports["default"] = DomHandler;


/***/ }),

/***/ "./node_modules/domhandler/lib/node.js":
/*!*********************************************!*\
  !*** ./node_modules/domhandler/lib/node.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.cloneNode = exports.hasChildren = exports.isDocument = exports.isDirective = exports.isComment = exports.isText = exports.isCDATA = exports.isTag = exports.Element = exports.Document = exports.CDATA = exports.NodeWithChildren = exports.ProcessingInstruction = exports.Comment = exports.Text = exports.DataNode = exports.Node = void 0;
var domelementtype_1 = __webpack_require__(/*! domelementtype */ "./node_modules/domelementtype/lib/index.js");
/**
 * This object will be used as the prototype for Nodes when creating a
 * DOM-Level-1-compliant structure.
 */
var Node = /** @class */ (function () {
    function Node() {
        /** Parent of the node */
        this.parent = null;
        /** Previous sibling */
        this.prev = null;
        /** Next sibling */
        this.next = null;
        /** The start index of the node. Requires `withStartIndices` on the handler to be `true. */
        this.startIndex = null;
        /** The end index of the node. Requires `withEndIndices` on the handler to be `true. */
        this.endIndex = null;
    }
    Object.defineProperty(Node.prototype, "parentNode", {
        // Read-write aliases for properties
        /**
         * Same as {@link parent}.
         * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
         */
        get: function () {
            return this.parent;
        },
        set: function (parent) {
            this.parent = parent;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Node.prototype, "previousSibling", {
        /**
         * Same as {@link prev}.
         * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
         */
        get: function () {
            return this.prev;
        },
        set: function (prev) {
            this.prev = prev;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Node.prototype, "nextSibling", {
        /**
         * Same as {@link next}.
         * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
         */
        get: function () {
            return this.next;
        },
        set: function (next) {
            this.next = next;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Clone this node, and optionally its children.
     *
     * @param recursive Clone child nodes as well.
     * @returns A clone of the node.
     */
    Node.prototype.cloneNode = function (recursive) {
        if (recursive === void 0) { recursive = false; }
        return cloneNode(this, recursive);
    };
    return Node;
}());
exports.Node = Node;
/**
 * A node that contains some data.
 */
var DataNode = /** @class */ (function (_super) {
    __extends(DataNode, _super);
    /**
     * @param data The content of the data node
     */
    function DataNode(data) {
        var _this = _super.call(this) || this;
        _this.data = data;
        return _this;
    }
    Object.defineProperty(DataNode.prototype, "nodeValue", {
        /**
         * Same as {@link data}.
         * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
         */
        get: function () {
            return this.data;
        },
        set: function (data) {
            this.data = data;
        },
        enumerable: false,
        configurable: true
    });
    return DataNode;
}(Node));
exports.DataNode = DataNode;
/**
 * Text within the document.
 */
var Text = /** @class */ (function (_super) {
    __extends(Text, _super);
    function Text() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = domelementtype_1.ElementType.Text;
        return _this;
    }
    Object.defineProperty(Text.prototype, "nodeType", {
        get: function () {
            return 3;
        },
        enumerable: false,
        configurable: true
    });
    return Text;
}(DataNode));
exports.Text = Text;
/**
 * Comments within the document.
 */
var Comment = /** @class */ (function (_super) {
    __extends(Comment, _super);
    function Comment() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = domelementtype_1.ElementType.Comment;
        return _this;
    }
    Object.defineProperty(Comment.prototype, "nodeType", {
        get: function () {
            return 8;
        },
        enumerable: false,
        configurable: true
    });
    return Comment;
}(DataNode));
exports.Comment = Comment;
/**
 * Processing instructions, including doc types.
 */
var ProcessingInstruction = /** @class */ (function (_super) {
    __extends(ProcessingInstruction, _super);
    function ProcessingInstruction(name, data) {
        var _this = _super.call(this, data) || this;
        _this.name = name;
        _this.type = domelementtype_1.ElementType.Directive;
        return _this;
    }
    Object.defineProperty(ProcessingInstruction.prototype, "nodeType", {
        get: function () {
            return 1;
        },
        enumerable: false,
        configurable: true
    });
    return ProcessingInstruction;
}(DataNode));
exports.ProcessingInstruction = ProcessingInstruction;
/**
 * A `Node` that can have children.
 */
var NodeWithChildren = /** @class */ (function (_super) {
    __extends(NodeWithChildren, _super);
    /**
     * @param children Children of the node. Only certain node types can have children.
     */
    function NodeWithChildren(children) {
        var _this = _super.call(this) || this;
        _this.children = children;
        return _this;
    }
    Object.defineProperty(NodeWithChildren.prototype, "firstChild", {
        // Aliases
        /** First child of the node. */
        get: function () {
            var _a;
            return (_a = this.children[0]) !== null && _a !== void 0 ? _a : null;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NodeWithChildren.prototype, "lastChild", {
        /** Last child of the node. */
        get: function () {
            return this.children.length > 0
                ? this.children[this.children.length - 1]
                : null;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NodeWithChildren.prototype, "childNodes", {
        /**
         * Same as {@link children}.
         * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
         */
        get: function () {
            return this.children;
        },
        set: function (children) {
            this.children = children;
        },
        enumerable: false,
        configurable: true
    });
    return NodeWithChildren;
}(Node));
exports.NodeWithChildren = NodeWithChildren;
var CDATA = /** @class */ (function (_super) {
    __extends(CDATA, _super);
    function CDATA() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = domelementtype_1.ElementType.CDATA;
        return _this;
    }
    Object.defineProperty(CDATA.prototype, "nodeType", {
        get: function () {
            return 4;
        },
        enumerable: false,
        configurable: true
    });
    return CDATA;
}(NodeWithChildren));
exports.CDATA = CDATA;
/**
 * The root node of the document.
 */
var Document = /** @class */ (function (_super) {
    __extends(Document, _super);
    function Document() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = domelementtype_1.ElementType.Root;
        return _this;
    }
    Object.defineProperty(Document.prototype, "nodeType", {
        get: function () {
            return 9;
        },
        enumerable: false,
        configurable: true
    });
    return Document;
}(NodeWithChildren));
exports.Document = Document;
/**
 * An element within the DOM.
 */
var Element = /** @class */ (function (_super) {
    __extends(Element, _super);
    /**
     * @param name Name of the tag, eg. `div`, `span`.
     * @param attribs Object mapping attribute names to attribute values.
     * @param children Children of the node.
     */
    function Element(name, attribs, children, type) {
        if (children === void 0) { children = []; }
        if (type === void 0) { type = name === "script"
            ? domelementtype_1.ElementType.Script
            : name === "style"
                ? domelementtype_1.ElementType.Style
                : domelementtype_1.ElementType.Tag; }
        var _this = _super.call(this, children) || this;
        _this.name = name;
        _this.attribs = attribs;
        _this.type = type;
        return _this;
    }
    Object.defineProperty(Element.prototype, "nodeType", {
        get: function () {
            return 1;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Element.prototype, "tagName", {
        // DOM Level 1 aliases
        /**
         * Same as {@link name}.
         * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
         */
        get: function () {
            return this.name;
        },
        set: function (name) {
            this.name = name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Element.prototype, "attributes", {
        get: function () {
            var _this = this;
            return Object.keys(this.attribs).map(function (name) {
                var _a, _b;
                return ({
                    name: name,
                    value: _this.attribs[name],
                    namespace: (_a = _this["x-attribsNamespace"]) === null || _a === void 0 ? void 0 : _a[name],
                    prefix: (_b = _this["x-attribsPrefix"]) === null || _b === void 0 ? void 0 : _b[name],
                });
            });
        },
        enumerable: false,
        configurable: true
    });
    return Element;
}(NodeWithChildren));
exports.Element = Element;
/**
 * @param node Node to check.
 * @returns `true` if the node is a `Element`, `false` otherwise.
 */
function isTag(node) {
    return (0, domelementtype_1.isTag)(node);
}
exports.isTag = isTag;
/**
 * @param node Node to check.
 * @returns `true` if the node has the type `CDATA`, `false` otherwise.
 */
function isCDATA(node) {
    return node.type === domelementtype_1.ElementType.CDATA;
}
exports.isCDATA = isCDATA;
/**
 * @param node Node to check.
 * @returns `true` if the node has the type `Text`, `false` otherwise.
 */
function isText(node) {
    return node.type === domelementtype_1.ElementType.Text;
}
exports.isText = isText;
/**
 * @param node Node to check.
 * @returns `true` if the node has the type `Comment`, `false` otherwise.
 */
function isComment(node) {
    return node.type === domelementtype_1.ElementType.Comment;
}
exports.isComment = isComment;
/**
 * @param node Node to check.
 * @returns `true` if the node has the type `ProcessingInstruction`, `false` otherwise.
 */
function isDirective(node) {
    return node.type === domelementtype_1.ElementType.Directive;
}
exports.isDirective = isDirective;
/**
 * @param node Node to check.
 * @returns `true` if the node has the type `ProcessingInstruction`, `false` otherwise.
 */
function isDocument(node) {
    return node.type === domelementtype_1.ElementType.Root;
}
exports.isDocument = isDocument;
/**
 * @param node Node to check.
 * @returns `true` if the node has children, `false` otherwise.
 */
function hasChildren(node) {
    return Object.prototype.hasOwnProperty.call(node, "children");
}
exports.hasChildren = hasChildren;
/**
 * Clone a node, and optionally its children.
 *
 * @param recursive Clone child nodes as well.
 * @returns A clone of the node.
 */
function cloneNode(node, recursive) {
    if (recursive === void 0) { recursive = false; }
    var result;
    if (isText(node)) {
        result = new Text(node.data);
    }
    else if (isComment(node)) {
        result = new Comment(node.data);
    }
    else if (isTag(node)) {
        var children = recursive ? cloneChildren(node.children) : [];
        var clone_1 = new Element(node.name, __assign({}, node.attribs), children);
        children.forEach(function (child) { return (child.parent = clone_1); });
        if (node.namespace != null) {
            clone_1.namespace = node.namespace;
        }
        if (node["x-attribsNamespace"]) {
            clone_1["x-attribsNamespace"] = __assign({}, node["x-attribsNamespace"]);
        }
        if (node["x-attribsPrefix"]) {
            clone_1["x-attribsPrefix"] = __assign({}, node["x-attribsPrefix"]);
        }
        result = clone_1;
    }
    else if (isCDATA(node)) {
        var children = recursive ? cloneChildren(node.children) : [];
        var clone_2 = new CDATA(children);
        children.forEach(function (child) { return (child.parent = clone_2); });
        result = clone_2;
    }
    else if (isDocument(node)) {
        var children = recursive ? cloneChildren(node.children) : [];
        var clone_3 = new Document(children);
        children.forEach(function (child) { return (child.parent = clone_3); });
        if (node["x-mode"]) {
            clone_3["x-mode"] = node["x-mode"];
        }
        result = clone_3;
    }
    else if (isDirective(node)) {
        var instruction = new ProcessingInstruction(node.name, node.data);
        if (node["x-name"] != null) {
            instruction["x-name"] = node["x-name"];
            instruction["x-publicId"] = node["x-publicId"];
            instruction["x-systemId"] = node["x-systemId"];
        }
        result = instruction;
    }
    else {
        throw new Error("Not implemented yet: ".concat(node.type));
    }
    result.startIndex = node.startIndex;
    result.endIndex = node.endIndex;
    if (node.sourceCodeLocation != null) {
        result.sourceCodeLocation = node.sourceCodeLocation;
    }
    return result;
}
exports.cloneNode = cloneNode;
function cloneChildren(childs) {
    var children = childs.map(function (child) { return cloneNode(child, true); });
    for (var i = 1; i < children.length; i++) {
        children[i].prev = children[i - 1];
        children[i - 1].next = children[i];
    }
    return children;
}


/***/ }),

/***/ "./node_modules/html-dom-parser/lib/client/constants.js":
/*!**************************************************************!*\
  !*** ./node_modules/html-dom-parser/lib/client/constants.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, exports) => {

/**
 * SVG elements are case-sensitive.
 *
 * @see {@link https://developer.mozilla.org/docs/Web/SVG/Element#svg_elements_a_to_z}
 */
exports.CASE_SENSITIVE_TAG_NAMES = [
  'animateMotion',
  'animateTransform',
  'clipPath',
  'feBlend',
  'feColorMatrix',
  'feComponentTransfer',
  'feComposite',
  'feConvolveMatrix',
  'feDiffuseLighting',
  'feDisplacementMap',
  'feDropShadow',
  'feFlood',
  'feFuncA',
  'feFuncB',
  'feFuncG',
  'feFuncR',
  'feGaussianBlur',
  'feImage',
  'feMerge',
  'feMergeNode',
  'feMorphology',
  'feOffset',
  'fePointLight',
  'feSpecularLighting',
  'feSpotLight',
  'feTile',
  'feTurbulence',
  'foreignObject',
  'linearGradient',
  'radialGradient',
  'textPath'
];


/***/ }),

/***/ "./node_modules/html-dom-parser/lib/client/domparser.js":
/*!**************************************************************!*\
  !*** ./node_modules/html-dom-parser/lib/client/domparser.js ***!
  \**************************************************************/
/***/ ((module) => {

// constants
var HTML = 'html';
var HEAD = 'head';
var BODY = 'body';
var FIRST_TAG_REGEX = /<([a-zA-Z]+[0-9]?)/; // e.g., <h1>
// match-all-characters in case of newlines (DOTALL)
var HEAD_TAG_REGEX = /<head[^]*>/i;
var BODY_TAG_REGEX = /<body[^]*>/i;

// falls back to `parseFromString` if `createHTMLDocument` cannot be used
var parseFromDocument = function () {
  throw new Error(
    'This browser does not support `document.implementation.createHTMLDocument`'
  );
};

var parseFromString = function () {
  throw new Error(
    'This browser does not support `DOMParser.prototype.parseFromString`'
  );
};

var DOMParser = typeof window === 'object' && window.DOMParser;

/**
 * DOMParser (performance: slow).
 *
 * @see https://developer.mozilla.org/docs/Web/API/DOMParser#Parsing_an_SVG_or_HTML_document
 */
if (typeof DOMParser === 'function') {
  var domParser = new DOMParser();
  var mimeType = 'text/html';

  /**
   * Creates an HTML document using `DOMParser.parseFromString`.
   *
   * @param  {string} html      - The HTML string.
   * @param  {string} [tagName] - The element to render the HTML (with 'body' as fallback).
   * @return {HTMLDocument}
   */
  parseFromString = function (html, tagName) {
    if (tagName) {
      html = '<' + tagName + '>' + html + '</' + tagName + '>';
    }

    return domParser.parseFromString(html, mimeType);
  };

  parseFromDocument = parseFromString;
}

/**
 * DOMImplementation (performance: fair).
 *
 * @see https://developer.mozilla.org/docs/Web/API/DOMImplementation/createHTMLDocument
 */
if (typeof document === 'object' && document.implementation) {
  var doc = document.implementation.createHTMLDocument();

  /**
   * Use HTML document created by `document.implementation.createHTMLDocument`.
   *
   * @param  {string} html      - The HTML string.
   * @param  {string} [tagName] - The element to render the HTML (with 'body' as fallback).
   * @return {HTMLDocument}
   */
  parseFromDocument = function (html, tagName) {
    if (tagName) {
      var element = doc.documentElement.querySelector(tagName);
      element.innerHTML = html;
      return doc;
    }

    doc.documentElement.innerHTML = html;
    return doc;
  };
}

/**
 * Template (performance: fast).
 *
 * @see https://developer.mozilla.org/docs/Web/HTML/Element/template
 */
var template =
  typeof document === 'object' ? document.createElement('template') : {};

var parseFromTemplate;

if (template.content) {
  /**
   * Uses a template element (content fragment) to parse HTML.
   *
   * @param  {string} html - The HTML string.
   * @return {NodeList}
   */
  parseFromTemplate = function (html) {
    template.innerHTML = html;
    return template.content.childNodes;
  };
}

/**
 * Parses HTML string to DOM nodes.
 *
 * @param  {string}   html - HTML markup.
 * @return {NodeList}
 */
function domparser(html) {
  var firstTagName;
  var match = html.match(FIRST_TAG_REGEX);

  if (match && match[1]) {
    firstTagName = match[1].toLowerCase();
  }

  var doc;
  var element;
  var elements;

  switch (firstTagName) {
    case HTML:
      doc = parseFromString(html);

      // the created document may come with filler head/body elements,
      // so make sure to remove them if they don't actually exist
      if (!HEAD_TAG_REGEX.test(html)) {
        element = doc.querySelector(HEAD);
        if (element) {
          element.parentNode.removeChild(element);
        }
      }

      if (!BODY_TAG_REGEX.test(html)) {
        element = doc.querySelector(BODY);
        if (element) {
          element.parentNode.removeChild(element);
        }
      }

      return doc.querySelectorAll(HTML);

    case HEAD:
    case BODY:
      doc = parseFromDocument(html);
      elements = doc.querySelectorAll(firstTagName);

      // if there's a sibling element, then return both elements
      if (BODY_TAG_REGEX.test(html) && HEAD_TAG_REGEX.test(html)) {
        return elements[0].parentNode.childNodes;
      }
      return elements;

    // low-level tag or text
    default:
      if (parseFromTemplate) {
        return parseFromTemplate(html);
      }
      element = parseFromDocument(html, BODY).querySelector(BODY);
      return element.childNodes;
  }
}

module.exports = domparser;


/***/ }),

/***/ "./node_modules/html-dom-parser/lib/client/html-to-dom.js":
/*!****************************************************************!*\
  !*** ./node_modules/html-dom-parser/lib/client/html-to-dom.js ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var domparser = __webpack_require__(/*! ./domparser */ "./node_modules/html-dom-parser/lib/client/domparser.js");
var utilities = __webpack_require__(/*! ./utilities */ "./node_modules/html-dom-parser/lib/client/utilities.js");

var formatDOM = utilities.formatDOM;

var DIRECTIVE_REGEX = /<(![a-zA-Z\s]+)>/; // e.g., <!doctype html>

/**
 * Parses HTML string to DOM nodes in browser.
 *
 * @param  {string} html  - HTML markup.
 * @return {DomElement[]} - DOM elements.
 */
function HTMLDOMParser(html) {
  if (typeof html !== 'string') {
    throw new TypeError('First argument must be a string');
  }

  if (html === '') {
    return [];
  }

  // match directive
  var match = html.match(DIRECTIVE_REGEX);
  var directive;

  if (match && match[1]) {
    directive = match[1];
  }

  return formatDOM(domparser(html), null, directive);
}

module.exports = HTMLDOMParser;


/***/ }),

/***/ "./node_modules/html-dom-parser/lib/client/utilities.js":
/*!**************************************************************!*\
  !*** ./node_modules/html-dom-parser/lib/client/utilities.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var domhandler = __webpack_require__(/*! domhandler */ "./node_modules/domhandler/lib/index.js");
var constants = __webpack_require__(/*! ./constants */ "./node_modules/html-dom-parser/lib/client/constants.js");

var CASE_SENSITIVE_TAG_NAMES = constants.CASE_SENSITIVE_TAG_NAMES;

var Comment = domhandler.Comment;
var Element = domhandler.Element;
var ProcessingInstruction = domhandler.ProcessingInstruction;
var Text = domhandler.Text;

var caseSensitiveTagNamesMap = {};
var tagName;

for (var i = 0, len = CASE_SENSITIVE_TAG_NAMES.length; i < len; i++) {
  tagName = CASE_SENSITIVE_TAG_NAMES[i];
  caseSensitiveTagNamesMap[tagName.toLowerCase()] = tagName;
}

/**
 * Gets case-sensitive tag name.
 *
 * @param {string} tagName - Tag name in lowercase.
 * @returns {string|undefined} - Case-sensitive tag name.
 */
function getCaseSensitiveTagName(tagName) {
  return caseSensitiveTagNamesMap[tagName];
}

/**
 * Formats DOM attributes to a hash map.
 *
 * @param {NamedNodeMap} attributes - List of attributes.
 * @returns {object} - Map of attribute name to value.
 */
function formatAttributes(attributes) {
  var result = {};
  var attribute;
  // `NamedNodeMap` is array-like
  for (var i = 0, len = attributes.length; i < len; i++) {
    attribute = attributes[i];
    result[attribute.name] = attribute.value;
  }
  return result;
}

/**
 * Corrects the tag name if it is case-sensitive (SVG).
 * Otherwise, returns the lowercase tag name (HTML).
 *
 * @param {string} tagName - Lowercase tag name.
 * @returns {string} - Formatted tag name.
 */
function formatTagName(tagName) {
  tagName = tagName.toLowerCase();
  var caseSensitiveTagName = getCaseSensitiveTagName(tagName);
  if (caseSensitiveTagName) {
    return caseSensitiveTagName;
  }
  return tagName;
}

/**
 * Transforms DOM nodes to `domhandler` nodes.
 *
 * @param {NodeList} nodes - DOM nodes.
 * @param {Element|null} [parent=null] - Parent node.
 * @param {string} [directive] - Directive.
 * @returns {Array<Comment|Element|ProcessingInstruction|Text>}
 */
function formatDOM(nodes, parent, directive) {
  parent = parent || null;
  var result = [];
  var tagName;

  for (var index = 0, len = nodes.length; index < len; index++) {
    var node = nodes[index];
    var current;

    // set the node data given the type
    switch (node.nodeType) {
      case 1:
        tagName = formatTagName(node.nodeName);
        // script, style, or tag
        current = new Element(tagName, formatAttributes(node.attributes));
        current.children = formatDOM(
          // template children are on content
          tagName === 'template' ? node.content.childNodes : node.childNodes,
          current
        );
        break;

      case 3:
        current = new Text(node.nodeValue);
        break;

      case 8:
        current = new Comment(node.nodeValue);
        break;

      default:
        continue;
    }

    // set previous node next
    var prev = result[index - 1] || null;
    if (prev) {
      prev.next = current;
    }

    // set properties for current node
    current.parent = parent;
    current.prev = prev;
    current.next = null;

    result.push(current);
  }

  if (directive) {
    current = new ProcessingInstruction(
      directive.substring(0, directive.indexOf(' ')).toLowerCase(),
      directive
    );
    current.next = result[0] || null;
    current.parent = parent;
    result.unshift(current);

    if (result[1]) {
      result[1].prev = result[0];
    }
  }

  return result;
}

exports.formatAttributes = formatAttributes;
exports.formatDOM = formatDOM;


/***/ }),

/***/ "./node_modules/html-react-parser/index.js":
/*!*************************************************!*\
  !*** ./node_modules/html-react-parser/index.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var domhandler = __webpack_require__(/*! domhandler */ "./node_modules/domhandler/lib/index.js");
var htmlToDOM = __webpack_require__(/*! html-dom-parser */ "./node_modules/html-dom-parser/lib/client/html-to-dom.js");

var attributesToProps = __webpack_require__(/*! ./lib/attributes-to-props */ "./node_modules/html-react-parser/lib/attributes-to-props.js");
var domToReact = __webpack_require__(/*! ./lib/dom-to-react */ "./node_modules/html-react-parser/lib/dom-to-react.js");

// support backwards compatibility for ES Module
htmlToDOM =
  /* istanbul ignore next */
  typeof htmlToDOM.default === 'function' ? htmlToDOM.default : htmlToDOM;

var domParserOptions = { lowerCaseAttributeNames: false };

/**
 * Converts HTML string to React elements.
 *
 * @param {string} html - HTML string.
 * @param {object} [options] - Parser options.
 * @param {object} [options.htmlparser2] - htmlparser2 options.
 * @param {object} [options.library] - Library for React, Preact, etc.
 * @param {Function} [options.replace] - Replace method.
 * @returns {JSX.Element|JSX.Element[]|string} - React element(s), empty array, or string.
 */
function HTMLReactParser(html, options) {
  if (typeof html !== 'string') {
    throw new TypeError('First argument must be a string');
  }
  if (html === '') {
    return [];
  }
  options = options || {};
  return domToReact(
    htmlToDOM(html, options.htmlparser2 || domParserOptions),
    options
  );
}

HTMLReactParser.domToReact = domToReact;
HTMLReactParser.htmlToDOM = htmlToDOM;
HTMLReactParser.attributesToProps = attributesToProps;

// domhandler
HTMLReactParser.Comment = domhandler.Comment;
HTMLReactParser.Element = domhandler.Element;
HTMLReactParser.ProcessingInstruction = domhandler.ProcessingInstruction;
HTMLReactParser.Text = domhandler.Text;

// support CommonJS and ES Modules
module.exports = HTMLReactParser;
HTMLReactParser.default = HTMLReactParser;


/***/ }),

/***/ "./node_modules/html-react-parser/lib/attributes-to-props.js":
/*!*******************************************************************!*\
  !*** ./node_modules/html-react-parser/lib/attributes-to-props.js ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var reactProperty = __webpack_require__(/*! react-property */ "./node_modules/react-property/lib/index.js");
var utilities = __webpack_require__(/*! ./utilities */ "./node_modules/html-react-parser/lib/utilities.js");

// https://reactjs.org/docs/uncontrolled-components.html
// https://developer.mozilla.org/docs/Web/HTML/Attributes
var UNCONTROLLED_COMPONENT_ATTRIBUTES = ['checked', 'value'];
var UNCONTROLLED_COMPONENT_NAMES = ['input', 'select', 'textarea'];

var VALUE_ONLY_INPUTS = {
  reset: true,
  submit: true
};

/**
 * Converts HTML/SVG DOM attributes to React props.
 *
 * @param {object} [attributes={}] - HTML/SVG DOM attributes.
 * @param {string} [nodeName] - DOM node name.
 * @returns - React props.
 */
module.exports = function attributesToProps(attributes, nodeName) {
  attributes = attributes || {};

  var attributeName;
  var attributeNameLowerCased;
  var attributeValue;
  var propName;
  var propertyInfo;
  var props = {};
  var inputIsValueOnly = attributes.type && VALUE_ONLY_INPUTS[attributes.type];

  for (attributeName in attributes) {
    attributeValue = attributes[attributeName];

    // ARIA (aria-*) or custom data (data-*) attribute
    if (reactProperty.isCustomAttribute(attributeName)) {
      props[attributeName] = attributeValue;
      continue;
    }

    // convert HTML/SVG attribute to React prop
    attributeNameLowerCased = attributeName.toLowerCase();
    propName = getPropName(attributeNameLowerCased);

    if (propName) {
      propertyInfo = reactProperty.getPropertyInfo(propName);

      // convert attribute to uncontrolled component prop (e.g., `value` to `defaultValue`)
      if (
        UNCONTROLLED_COMPONENT_ATTRIBUTES.indexOf(propName) !== -1 &&
        UNCONTROLLED_COMPONENT_NAMES.indexOf(nodeName) !== -1 &&
        !inputIsValueOnly
      ) {
        propName = getPropName('default' + attributeNameLowerCased);
      }

      props[propName] = attributeValue;

      switch (propertyInfo && propertyInfo.type) {
        case reactProperty.BOOLEAN:
          props[propName] = true;
          break;
        case reactProperty.OVERLOADED_BOOLEAN:
          if (attributeValue === '') {
            props[propName] = true;
          }
          break;
      }
      continue;
    }

    // preserve custom attribute if React >=16
    if (utilities.PRESERVE_CUSTOM_ATTRIBUTES) {
      props[attributeName] = attributeValue;
    }
  }

  // transform inline style to object
  utilities.setStyleProp(attributes.style, props);

  return props;
};

/**
 * Gets prop name from lowercased attribute name.
 *
 * @param {string} attributeName - Lowercased attribute name.
 * @returns - Prop name.
 */
function getPropName(attributeName) {
  return reactProperty.possibleStandardNames[attributeName];
}


/***/ }),

/***/ "./node_modules/html-react-parser/lib/dom-to-react.js":
/*!************************************************************!*\
  !*** ./node_modules/html-react-parser/lib/dom-to-react.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var React = __webpack_require__(/*! react */ "react");
var attributesToProps = __webpack_require__(/*! ./attributes-to-props */ "./node_modules/html-react-parser/lib/attributes-to-props.js");
var utilities = __webpack_require__(/*! ./utilities */ "./node_modules/html-react-parser/lib/utilities.js");

var setStyleProp = utilities.setStyleProp;
var canTextBeChildOfNode = utilities.canTextBeChildOfNode;

/**
 * Converts DOM nodes to JSX element(s).
 *
 * @param {DomElement[]} nodes - DOM nodes.
 * @param {object} [options={}] - Options.
 * @param {Function} [options.replace] - Replacer.
 * @param {object} [options.library] - Library (React, Preact, etc.).
 * @returns - String or JSX element(s).
 */
function domToReact(nodes, options) {
  options = options || {};

  var library = options.library || React;
  var cloneElement = library.cloneElement;
  var createElement = library.createElement;
  var isValidElement = library.isValidElement;

  var result = [];
  var node;
  var isWhitespace;
  var hasReplace = typeof options.replace === 'function';
  var replaceElement;
  var props;
  var children;
  var trim = options.trim;

  for (var i = 0, len = nodes.length; i < len; i++) {
    node = nodes[i];

    // replace with custom React element (if present)
    if (hasReplace) {
      replaceElement = options.replace(node);

      if (isValidElement(replaceElement)) {
        // set "key" prop for sibling elements
        // https://fb.me/react-warning-keys
        if (len > 1) {
          replaceElement = cloneElement(replaceElement, {
            key: replaceElement.key || i
          });
        }
        result.push(replaceElement);
        continue;
      }
    }

    if (node.type === 'text') {
      isWhitespace = !node.data.trim().length;

      if (isWhitespace && node.parent && !canTextBeChildOfNode(node.parent)) {
        // We have a whitespace node that can't be nested in its parent
        // so skip it
        continue;
      }

      if (trim && isWhitespace) {
        // Trim is enabled and we have a whitespace node
        // so skip it
        continue;
      }

      // We have a text node that's not whitespace and it can be nested
      // in its parent so add it to the results
      result.push(node.data);
      continue;
    }

    props = node.attribs;
    if (skipAttributesToProps(node)) {
      setStyleProp(props.style, props);
    } else if (props) {
      props = attributesToProps(props, node.name);
    }

    children = null;

    switch (node.type) {
      case 'script':
      case 'style':
        // prevent text in <script> or <style> from being escaped
        // https://reactjs.org/docs/dom-elements.html#dangerouslysetinnerhtml
        if (node.children[0]) {
          props.dangerouslySetInnerHTML = {
            __html: node.children[0].data
          };
        }
        break;

      case 'tag':
        // setting textarea value in children is an antipattern in React
        // https://reactjs.org/docs/forms.html#the-textarea-tag
        if (node.name === 'textarea' && node.children[0]) {
          props.defaultValue = node.children[0].data;
        } else if (node.children && node.children.length) {
          // continue recursion of creating React elements (if applicable)
          children = domToReact(node.children, options);
        }
        break;

      // skip all other cases (e.g., comment)
      default:
        continue;
    }

    // set "key" prop for sibling elements
    // https://fb.me/react-warning-keys
    if (len > 1) {
      props.key = i;
    }

    result.push(createElement(node.name, props, children));
  }

  return result.length === 1 ? result[0] : result;
}

/**
 * Determines whether DOM element attributes should be transformed to props.
 * Web Components should not have their attributes transformed except for `style`.
 *
 * @param {DomElement} node
 * @returns - Whether node attributes should be converted to props.
 */
function skipAttributesToProps(node) {
  return (
    utilities.PRESERVE_CUSTOM_ATTRIBUTES &&
    node.type === 'tag' &&
    utilities.isCustomComponent(node.name, node.attribs)
  );
}

module.exports = domToReact;


/***/ }),

/***/ "./node_modules/html-react-parser/lib/utilities.js":
/*!*********************************************************!*\
  !*** ./node_modules/html-react-parser/lib/utilities.js ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var React = __webpack_require__(/*! react */ "react");
var styleToJS = (__webpack_require__(/*! style-to-js */ "./node_modules/style-to-js/cjs/index.js")["default"]);

/**
 * Swap key with value in an object.
 *
 * @param {object} obj - The object.
 * @param {Function} [override] - The override method.
 * @returns - The inverted object.
 */
function invertObject(obj, override) {
  if (!obj || typeof obj !== 'object') {
    throw new TypeError('First argument must be an object');
  }

  var key;
  var value;
  var isOverridePresent = typeof override === 'function';
  var overrides = {};
  var result = {};

  for (key in obj) {
    value = obj[key];

    if (isOverridePresent) {
      overrides = override(key, value);
      if (overrides && overrides.length === 2) {
        result[overrides[0]] = overrides[1];
        continue;
      }
    }

    if (typeof value === 'string') {
      result[value] = key;
    }
  }

  return result;
}

/**
 * Check if a given tag is a custom component.
 *
 * @see {@link https://github.com/facebook/react/blob/v16.6.3/packages/react-dom/src/shared/isCustomComponent.js}
 *
 * @param {string} tagName - The name of the html tag.
 * @param {object} props - The props being passed to the element.
 * @returns - Whether tag is custom component.
 */
function isCustomComponent(tagName, props) {
  if (tagName.indexOf('-') === -1) {
    return props && typeof props.is === 'string';
  }

  switch (tagName) {
    // These are reserved SVG and MathML elements.
    // We don't mind this whitelist too much because we expect it to never grow.
    // The alternative is to track the namespace in a few places which is convoluted.
    // https://w3c.github.io/webcomponents/spec/custom/#custom-elements-core-concepts
    case 'annotation-xml':
    case 'color-profile':
    case 'font-face':
    case 'font-face-src':
    case 'font-face-uri':
    case 'font-face-format':
    case 'font-face-name':
    case 'missing-glyph':
      return false;
    default:
      return true;
  }
}

var styleToJSOptions = { reactCompat: true };

/**
 * Sets style prop.
 *
 * @param {null|undefined|string} style
 * @param {object} props
 */
function setStyleProp(style, props) {
  if (style === null || style === undefined) {
    return;
  }
  try {
    props.style = styleToJS(style, styleToJSOptions);
  } catch (err) {
    props.style = {};
  }
}

/**
 * @constant {boolean}
 * @see {@link https://reactjs.org/blog/2017/09/08/dom-attributes-in-react-16.html}
 */
var PRESERVE_CUSTOM_ATTRIBUTES = React.version.split('.')[0] >= 16;

// Taken from
// https://github.com/facebook/react/blob/cae635054e17a6f107a39d328649137b83f25972/packages/react-dom/src/client/validateDOMNesting.js#L213
var elementsWithNoTextChildren = new Set([
  'tr',
  'tbody',
  'thead',
  'tfoot',
  'colgroup',
  'table',
  'head',
  'html',
  'frameset'
]);

/**
 * Checks if the given node can contain text nodes
 *
 * @param {DomElement} node - Node.
 * @returns - Whether node can contain text nodes.
 */
function canTextBeChildOfNode(node) {
  return !elementsWithNoTextChildren.has(node.name);
}

module.exports = {
  PRESERVE_CUSTOM_ATTRIBUTES: PRESERVE_CUSTOM_ATTRIBUTES,
  invertObject: invertObject,
  isCustomComponent: isCustomComponent,
  setStyleProp: setStyleProp,
  canTextBeChildOfNode: canTextBeChildOfNode,
  elementsWithNoTextChildren: elementsWithNoTextChildren
};


/***/ }),

/***/ "./node_modules/inline-style-parser/index.js":
/*!***************************************************!*\
  !*** ./node_modules/inline-style-parser/index.js ***!
  \***************************************************/
/***/ ((module) => {

// http://www.w3.org/TR/CSS21/grammar.html
// https://github.com/visionmedia/css-parse/pull/49#issuecomment-30088027
var COMMENT_REGEX = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g;

var NEWLINE_REGEX = /\n/g;
var WHITESPACE_REGEX = /^\s*/;

// declaration
var PROPERTY_REGEX = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/;
var COLON_REGEX = /^:\s*/;
var VALUE_REGEX = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/;
var SEMICOLON_REGEX = /^[;\s]*/;

// https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String/Trim#Polyfill
var TRIM_REGEX = /^\s+|\s+$/g;

// strings
var NEWLINE = '\n';
var FORWARD_SLASH = '/';
var ASTERISK = '*';
var EMPTY_STRING = '';

// types
var TYPE_COMMENT = 'comment';
var TYPE_DECLARATION = 'declaration';

/**
 * @param {String} style
 * @param {Object} [options]
 * @return {Object[]}
 * @throws {TypeError}
 * @throws {Error}
 */
module.exports = function(style, options) {
  if (typeof style !== 'string') {
    throw new TypeError('First argument must be a string');
  }

  if (!style) return [];

  options = options || {};

  /**
   * Positional.
   */
  var lineno = 1;
  var column = 1;

  /**
   * Update lineno and column based on `str`.
   *
   * @param {String} str
   */
  function updatePosition(str) {
    var lines = str.match(NEWLINE_REGEX);
    if (lines) lineno += lines.length;
    var i = str.lastIndexOf(NEWLINE);
    column = ~i ? str.length - i : column + str.length;
  }

  /**
   * Mark position and patch `node.position`.
   *
   * @return {Function}
   */
  function position() {
    var start = { line: lineno, column: column };
    return function(node) {
      node.position = new Position(start);
      whitespace();
      return node;
    };
  }

  /**
   * Store position information for a node.
   *
   * @constructor
   * @property {Object} start
   * @property {Object} end
   * @property {undefined|String} source
   */
  function Position(start) {
    this.start = start;
    this.end = { line: lineno, column: column };
    this.source = options.source;
  }

  /**
   * Non-enumerable source string.
   */
  Position.prototype.content = style;

  var errorsList = [];

  /**
   * Error `msg`.
   *
   * @param {String} msg
   * @throws {Error}
   */
  function error(msg) {
    var err = new Error(
      options.source + ':' + lineno + ':' + column + ': ' + msg
    );
    err.reason = msg;
    err.filename = options.source;
    err.line = lineno;
    err.column = column;
    err.source = style;

    if (options.silent) {
      errorsList.push(err);
    } else {
      throw err;
    }
  }

  /**
   * Match `re` and return captures.
   *
   * @param {RegExp} re
   * @return {undefined|Array}
   */
  function match(re) {
    var m = re.exec(style);
    if (!m) return;
    var str = m[0];
    updatePosition(str);
    style = style.slice(str.length);
    return m;
  }

  /**
   * Parse whitespace.
   */
  function whitespace() {
    match(WHITESPACE_REGEX);
  }

  /**
   * Parse comments.
   *
   * @param {Object[]} [rules]
   * @return {Object[]}
   */
  function comments(rules) {
    var c;
    rules = rules || [];
    while ((c = comment())) {
      if (c !== false) {
        rules.push(c);
      }
    }
    return rules;
  }

  /**
   * Parse comment.
   *
   * @return {Object}
   * @throws {Error}
   */
  function comment() {
    var pos = position();
    if (FORWARD_SLASH != style.charAt(0) || ASTERISK != style.charAt(1)) return;

    var i = 2;
    while (
      EMPTY_STRING != style.charAt(i) &&
      (ASTERISK != style.charAt(i) || FORWARD_SLASH != style.charAt(i + 1))
    ) {
      ++i;
    }
    i += 2;

    if (EMPTY_STRING === style.charAt(i - 1)) {
      return error('End of comment missing');
    }

    var str = style.slice(2, i - 2);
    column += 2;
    updatePosition(str);
    style = style.slice(i);
    column += 2;

    return pos({
      type: TYPE_COMMENT,
      comment: str
    });
  }

  /**
   * Parse declaration.
   *
   * @return {Object}
   * @throws {Error}
   */
  function declaration() {
    var pos = position();

    // prop
    var prop = match(PROPERTY_REGEX);
    if (!prop) return;
    comment();

    // :
    if (!match(COLON_REGEX)) return error("property missing ':'");

    // val
    var val = match(VALUE_REGEX);

    var ret = pos({
      type: TYPE_DECLARATION,
      property: trim(prop[0].replace(COMMENT_REGEX, EMPTY_STRING)),
      value: val
        ? trim(val[0].replace(COMMENT_REGEX, EMPTY_STRING))
        : EMPTY_STRING
    });

    // ;
    match(SEMICOLON_REGEX);

    return ret;
  }

  /**
   * Parse declarations.
   *
   * @return {Object[]}
   */
  function declarations() {
    var decls = [];

    comments(decls);

    // declarations
    var decl;
    while ((decl = declaration())) {
      if (decl !== false) {
        decls.push(decl);
        comments(decls);
      }
    }

    return decls;
  }

  whitespace();
  return declarations();
};

/**
 * Trim `str`.
 *
 * @param {String} str
 * @return {String}
 */
function trim(str) {
  return str ? str.replace(TRIM_REGEX, EMPTY_STRING) : EMPTY_STRING;
}


/***/ }),

/***/ "./node_modules/react-property/lib/index.js":
/*!**************************************************!*\
  !*** ./node_modules/react-property/lib/index.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({ value: true }));

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

// A reserved attribute.
// It is handled by React separately and shouldn't be written to the DOM.
var RESERVED = 0; // A simple string attribute.
// Attributes that aren't in the filter are presumed to have this type.

var STRING = 1; // A string attribute that accepts booleans in React. In HTML, these are called
// "enumerated" attributes with "true" and "false" as possible values.
// When true, it should be set to a "true" string.
// When false, it should be set to a "false" string.

var BOOLEANISH_STRING = 2; // A real boolean attribute.
// When true, it should be present (set either to an empty string or its name).
// When false, it should be omitted.

var BOOLEAN = 3; // An attribute that can be used as a flag as well as with a value.
// When true, it should be present (set either to an empty string or its name).
// When false, it should be omitted.
// For any other value, should be present with that value.

var OVERLOADED_BOOLEAN = 4; // An attribute that must be numeric or parse as a numeric.
// When falsy, it should be removed.

var NUMERIC = 5; // An attribute that must be positive numeric or parse as a positive numeric.
// When falsy, it should be removed.

var POSITIVE_NUMERIC = 6;
function getPropertyInfo(name) {
  return properties.hasOwnProperty(name) ? properties[name] : null;
}

function PropertyInfoRecord(name, type, mustUseProperty, attributeName, attributeNamespace, sanitizeURL, removeEmptyString) {
  this.acceptsBooleans = type === BOOLEANISH_STRING || type === BOOLEAN || type === OVERLOADED_BOOLEAN;
  this.attributeName = attributeName;
  this.attributeNamespace = attributeNamespace;
  this.mustUseProperty = mustUseProperty;
  this.propertyName = name;
  this.type = type;
  this.sanitizeURL = sanitizeURL;
  this.removeEmptyString = removeEmptyString;
} // When adding attributes to this list, be sure to also add them to
// the `possibleStandardNames` module to ensure casing and incorrect
// name warnings.


var properties = {}; // These props are reserved by React. They shouldn't be written to the DOM.

var reservedProps = ['children', 'dangerouslySetInnerHTML', // TODO: This prevents the assignment of defaultValue to regular
// elements (not just inputs). Now that ReactDOMInput assigns to the
// defaultValue property -- do we need this?
'defaultValue', 'defaultChecked', 'innerHTML', 'suppressContentEditableWarning', 'suppressHydrationWarning', 'style'];
reservedProps.forEach(function (name) {
  properties[name] = new PropertyInfoRecord(name, RESERVED, false, // mustUseProperty
  name, // attributeName
  null, // attributeNamespace
  false, // sanitizeURL
  false);
}); // A few React string attributes have a different name.
// This is a mapping from React prop names to the attribute names.

[['acceptCharset', 'accept-charset'], ['className', 'class'], ['htmlFor', 'for'], ['httpEquiv', 'http-equiv']].forEach(function (_ref) {
  var _ref2 = _slicedToArray(_ref, 2),
      name = _ref2[0],
      attributeName = _ref2[1];

  properties[name] = new PropertyInfoRecord(name, STRING, false, // mustUseProperty
  attributeName, // attributeName
  null, // attributeNamespace
  false, // sanitizeURL
  false);
}); // These are "enumerated" HTML attributes that accept "true" and "false".
// In React, we let users pass `true` and `false` even though technically
// these aren't boolean attributes (they are coerced to strings).

['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (name) {
  properties[name] = new PropertyInfoRecord(name, BOOLEANISH_STRING, false, // mustUseProperty
  name.toLowerCase(), // attributeName
  null, // attributeNamespace
  false, // sanitizeURL
  false);
}); // These are "enumerated" SVG attributes that accept "true" and "false".
// In React, we let users pass `true` and `false` even though technically
// these aren't boolean attributes (they are coerced to strings).
// Since these are SVG attributes, their attribute names are case-sensitive.

['autoReverse', 'externalResourcesRequired', 'focusable', 'preserveAlpha'].forEach(function (name) {
  properties[name] = new PropertyInfoRecord(name, BOOLEANISH_STRING, false, // mustUseProperty
  name, // attributeName
  null, // attributeNamespace
  false, // sanitizeURL
  false);
}); // These are HTML boolean attributes.

['allowFullScreen', 'async', // Note: there is a special case that prevents it from being written to the DOM
// on the client side because the browsers are inconsistent. Instead we call focus().
'autoFocus', 'autoPlay', 'controls', 'default', 'defer', 'disabled', 'disablePictureInPicture', 'disableRemotePlayback', 'formNoValidate', 'hidden', 'loop', 'noModule', 'noValidate', 'open', 'playsInline', 'readOnly', 'required', 'reversed', 'scoped', 'seamless', // Microdata
'itemScope'].forEach(function (name) {
  properties[name] = new PropertyInfoRecord(name, BOOLEAN, false, // mustUseProperty
  name.toLowerCase(), // attributeName
  null, // attributeNamespace
  false, // sanitizeURL
  false);
}); // These are the few React props that we set as DOM properties
// rather than attributes. These are all booleans.

['checked', // Note: `option.selected` is not updated if `select.multiple` is
// disabled with `removeAttribute`. We have special logic for handling this.
'multiple', 'muted', 'selected' // NOTE: if you add a camelCased prop to this list,
// you'll need to set attributeName to name.toLowerCase()
// instead in the assignment below.
].forEach(function (name) {
  properties[name] = new PropertyInfoRecord(name, BOOLEAN, true, // mustUseProperty
  name, // attributeName
  null, // attributeNamespace
  false, // sanitizeURL
  false);
}); // These are HTML attributes that are "overloaded booleans": they behave like
// booleans, but can also accept a string value.

['capture', 'download' // NOTE: if you add a camelCased prop to this list,
// you'll need to set attributeName to name.toLowerCase()
// instead in the assignment below.
].forEach(function (name) {
  properties[name] = new PropertyInfoRecord(name, OVERLOADED_BOOLEAN, false, // mustUseProperty
  name, // attributeName
  null, // attributeNamespace
  false, // sanitizeURL
  false);
}); // These are HTML attributes that must be positive numbers.

['cols', 'rows', 'size', 'span' // NOTE: if you add a camelCased prop to this list,
// you'll need to set attributeName to name.toLowerCase()
// instead in the assignment below.
].forEach(function (name) {
  properties[name] = new PropertyInfoRecord(name, POSITIVE_NUMERIC, false, // mustUseProperty
  name, // attributeName
  null, // attributeNamespace
  false, // sanitizeURL
  false);
}); // These are HTML attributes that must be numbers.

['rowSpan', 'start'].forEach(function (name) {
  properties[name] = new PropertyInfoRecord(name, NUMERIC, false, // mustUseProperty
  name.toLowerCase(), // attributeName
  null, // attributeNamespace
  false, // sanitizeURL
  false);
});
var CAMELIZE = /[\-\:]([a-z])/g;

var capitalize = function capitalize(token) {
  return token[1].toUpperCase();
}; // This is a list of all SVG attributes that need special casing, namespacing,
// or boolean value assignment. Regular attributes that just accept strings
// and have the same names are omitted, just like in the HTML attribute filter.
// Some of these attributes can be hard to find. This list was created by
// scraping the MDN documentation.


['accent-height', 'alignment-baseline', 'arabic-form', 'baseline-shift', 'cap-height', 'clip-path', 'clip-rule', 'color-interpolation', 'color-interpolation-filters', 'color-profile', 'color-rendering', 'dominant-baseline', 'enable-background', 'fill-opacity', 'fill-rule', 'flood-color', 'flood-opacity', 'font-family', 'font-size', 'font-size-adjust', 'font-stretch', 'font-style', 'font-variant', 'font-weight', 'glyph-name', 'glyph-orientation-horizontal', 'glyph-orientation-vertical', 'horiz-adv-x', 'horiz-origin-x', 'image-rendering', 'letter-spacing', 'lighting-color', 'marker-end', 'marker-mid', 'marker-start', 'overline-position', 'overline-thickness', 'paint-order', 'panose-1', 'pointer-events', 'rendering-intent', 'shape-rendering', 'stop-color', 'stop-opacity', 'strikethrough-position', 'strikethrough-thickness', 'stroke-dasharray', 'stroke-dashoffset', 'stroke-linecap', 'stroke-linejoin', 'stroke-miterlimit', 'stroke-opacity', 'stroke-width', 'text-anchor', 'text-decoration', 'text-rendering', 'underline-position', 'underline-thickness', 'unicode-bidi', 'unicode-range', 'units-per-em', 'v-alphabetic', 'v-hanging', 'v-ideographic', 'v-mathematical', 'vector-effect', 'vert-adv-y', 'vert-origin-x', 'vert-origin-y', 'word-spacing', 'writing-mode', 'xmlns:xlink', 'x-height' // NOTE: if you add a camelCased prop to this list,
// you'll need to set attributeName to name.toLowerCase()
// instead in the assignment below.
].forEach(function (attributeName) {
  var name = attributeName.replace(CAMELIZE, capitalize);
  properties[name] = new PropertyInfoRecord(name, STRING, false, // mustUseProperty
  attributeName, null, // attributeNamespace
  false, // sanitizeURL
  false);
}); // String SVG attributes with the xlink namespace.

['xlink:actuate', 'xlink:arcrole', 'xlink:role', 'xlink:show', 'xlink:title', 'xlink:type' // NOTE: if you add a camelCased prop to this list,
// you'll need to set attributeName to name.toLowerCase()
// instead in the assignment below.
].forEach(function (attributeName) {
  var name = attributeName.replace(CAMELIZE, capitalize);
  properties[name] = new PropertyInfoRecord(name, STRING, false, // mustUseProperty
  attributeName, 'http://www.w3.org/1999/xlink', false, // sanitizeURL
  false);
}); // String SVG attributes with the xml namespace.

['xml:base', 'xml:lang', 'xml:space' // NOTE: if you add a camelCased prop to this list,
// you'll need to set attributeName to name.toLowerCase()
// instead in the assignment below.
].forEach(function (attributeName) {
  var name = attributeName.replace(CAMELIZE, capitalize);
  properties[name] = new PropertyInfoRecord(name, STRING, false, // mustUseProperty
  attributeName, 'http://www.w3.org/XML/1998/namespace', false, // sanitizeURL
  false);
}); // These attribute exists both in HTML and SVG.
// The attribute name is case-sensitive in SVG so we can't just use
// the React name like we do for attributes that exist only in HTML.

['tabIndex', 'crossOrigin'].forEach(function (attributeName) {
  properties[attributeName] = new PropertyInfoRecord(attributeName, STRING, false, // mustUseProperty
  attributeName.toLowerCase(), // attributeName
  null, // attributeNamespace
  false, // sanitizeURL
  false);
}); // These attributes accept URLs. These must not allow javascript: URLS.
// These will also need to accept Trusted Types object in the future.

var xlinkHref = 'xlinkHref';
properties[xlinkHref] = new PropertyInfoRecord('xlinkHref', STRING, false, // mustUseProperty
'xlink:href', 'http://www.w3.org/1999/xlink', true, // sanitizeURL
false);
['src', 'href', 'action', 'formAction'].forEach(function (attributeName) {
  properties[attributeName] = new PropertyInfoRecord(attributeName, STRING, false, // mustUseProperty
  attributeName.toLowerCase(), // attributeName
  null, // attributeNamespace
  true, // sanitizeURL
  true);
});

var _require = __webpack_require__(/*! ../lib/possibleStandardNamesOptimized */ "./node_modules/react-property/lib/possibleStandardNamesOptimized.js"),
    CAMELCASE = _require.CAMELCASE,
    SAME = _require.SAME,
    possibleStandardNamesOptimized = _require.possibleStandardNames;

var ATTRIBUTE_NAME_START_CHAR = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD";
var ATTRIBUTE_NAME_CHAR = ATTRIBUTE_NAME_START_CHAR + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040";
/**
 * Checks whether a property name is a custom attribute.
 *
 * @see {@link https://github.com/facebook/react/blob/15-stable/src/renderers/dom/shared/HTMLDOMPropertyConfig.js#L23-L25}
 *
 * @param {string}
 * @return {boolean}
 */

var isCustomAttribute = RegExp.prototype.test.bind( // eslint-disable-next-line no-misleading-character-class
new RegExp('^(data|aria)-[' + ATTRIBUTE_NAME_CHAR + ']*$'));
var possibleStandardNames = Object.keys(possibleStandardNamesOptimized).reduce(function (accumulator, standardName) {
  var propName = possibleStandardNamesOptimized[standardName];

  if (propName === SAME) {
    accumulator[standardName] = standardName;
  } else if (propName === CAMELCASE) {
    accumulator[standardName.toLowerCase()] = standardName;
  } else {
    accumulator[standardName] = propName;
  }

  return accumulator;
}, {});

exports.BOOLEAN = BOOLEAN;
exports.BOOLEANISH_STRING = BOOLEANISH_STRING;
exports.NUMERIC = NUMERIC;
exports.OVERLOADED_BOOLEAN = OVERLOADED_BOOLEAN;
exports.POSITIVE_NUMERIC = POSITIVE_NUMERIC;
exports.RESERVED = RESERVED;
exports.STRING = STRING;
exports.getPropertyInfo = getPropertyInfo;
exports.isCustomAttribute = isCustomAttribute;
exports.possibleStandardNames = possibleStandardNames;


/***/ }),

/***/ "./node_modules/react-property/lib/possibleStandardNamesOptimized.js":
/*!***************************************************************************!*\
  !*** ./node_modules/react-property/lib/possibleStandardNamesOptimized.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

// An attribute in which the DOM/SVG standard name is the same as the React prop name (e.g., 'accept').
var SAME = 0;
exports.SAME = SAME;

// An attribute in which the React prop name is the camelcased version of the DOM/SVG standard name (e.g., 'acceptCharset').
var CAMELCASE = 1;
exports.CAMELCASE = CAMELCASE;

exports.possibleStandardNames = {
  accept: 0,
  acceptCharset: 1,
  'accept-charset': 'acceptCharset',
  accessKey: 1,
  action: 0,
  allowFullScreen: 1,
  alt: 0,
  as: 0,
  async: 0,
  autoCapitalize: 1,
  autoComplete: 1,
  autoCorrect: 1,
  autoFocus: 1,
  autoPlay: 1,
  autoSave: 1,
  capture: 0,
  cellPadding: 1,
  cellSpacing: 1,
  challenge: 0,
  charSet: 1,
  checked: 0,
  children: 0,
  cite: 0,
  class: 'className',
  classID: 1,
  className: 1,
  cols: 0,
  colSpan: 1,
  content: 0,
  contentEditable: 1,
  contextMenu: 1,
  controls: 0,
  controlsList: 1,
  coords: 0,
  crossOrigin: 1,
  dangerouslySetInnerHTML: 1,
  data: 0,
  dateTime: 1,
  default: 0,
  defaultChecked: 1,
  defaultValue: 1,
  defer: 0,
  dir: 0,
  disabled: 0,
  disablePictureInPicture: 1,
  disableRemotePlayback: 1,
  download: 0,
  draggable: 0,
  encType: 1,
  enterKeyHint: 1,
  for: 'htmlFor',
  form: 0,
  formMethod: 1,
  formAction: 1,
  formEncType: 1,
  formNoValidate: 1,
  formTarget: 1,
  frameBorder: 1,
  headers: 0,
  height: 0,
  hidden: 0,
  high: 0,
  href: 0,
  hrefLang: 1,
  htmlFor: 1,
  httpEquiv: 1,
  'http-equiv': 'httpEquiv',
  icon: 0,
  id: 0,
  innerHTML: 1,
  inputMode: 1,
  integrity: 0,
  is: 0,
  itemID: 1,
  itemProp: 1,
  itemRef: 1,
  itemScope: 1,
  itemType: 1,
  keyParams: 1,
  keyType: 1,
  kind: 0,
  label: 0,
  lang: 0,
  list: 0,
  loop: 0,
  low: 0,
  manifest: 0,
  marginWidth: 1,
  marginHeight: 1,
  max: 0,
  maxLength: 1,
  media: 0,
  mediaGroup: 1,
  method: 0,
  min: 0,
  minLength: 1,
  multiple: 0,
  muted: 0,
  name: 0,
  noModule: 1,
  nonce: 0,
  noValidate: 1,
  open: 0,
  optimum: 0,
  pattern: 0,
  placeholder: 0,
  playsInline: 1,
  poster: 0,
  preload: 0,
  profile: 0,
  radioGroup: 1,
  readOnly: 1,
  referrerPolicy: 1,
  rel: 0,
  required: 0,
  reversed: 0,
  role: 0,
  rows: 0,
  rowSpan: 1,
  sandbox: 0,
  scope: 0,
  scoped: 0,
  scrolling: 0,
  seamless: 0,
  selected: 0,
  shape: 0,
  size: 0,
  sizes: 0,
  span: 0,
  spellCheck: 1,
  src: 0,
  srcDoc: 1,
  srcLang: 1,
  srcSet: 1,
  start: 0,
  step: 0,
  style: 0,
  summary: 0,
  tabIndex: 1,
  target: 0,
  title: 0,
  type: 0,
  useMap: 1,
  value: 0,
  width: 0,
  wmode: 0,
  wrap: 0,
  about: 0,
  accentHeight: 1,
  'accent-height': 'accentHeight',
  accumulate: 0,
  additive: 0,
  alignmentBaseline: 1,
  'alignment-baseline': 'alignmentBaseline',
  allowReorder: 1,
  alphabetic: 0,
  amplitude: 0,
  arabicForm: 1,
  'arabic-form': 'arabicForm',
  ascent: 0,
  attributeName: 1,
  attributeType: 1,
  autoReverse: 1,
  azimuth: 0,
  baseFrequency: 1,
  baselineShift: 1,
  'baseline-shift': 'baselineShift',
  baseProfile: 1,
  bbox: 0,
  begin: 0,
  bias: 0,
  by: 0,
  calcMode: 1,
  capHeight: 1,
  'cap-height': 'capHeight',
  clip: 0,
  clipPath: 1,
  'clip-path': 'clipPath',
  clipPathUnits: 1,
  clipRule: 1,
  'clip-rule': 'clipRule',
  color: 0,
  colorInterpolation: 1,
  'color-interpolation': 'colorInterpolation',
  colorInterpolationFilters: 1,
  'color-interpolation-filters': 'colorInterpolationFilters',
  colorProfile: 1,
  'color-profile': 'colorProfile',
  colorRendering: 1,
  'color-rendering': 'colorRendering',
  contentScriptType: 1,
  contentStyleType: 1,
  cursor: 0,
  cx: 0,
  cy: 0,
  d: 0,
  datatype: 0,
  decelerate: 0,
  descent: 0,
  diffuseConstant: 1,
  direction: 0,
  display: 0,
  divisor: 0,
  dominantBaseline: 1,
  'dominant-baseline': 'dominantBaseline',
  dur: 0,
  dx: 0,
  dy: 0,
  edgeMode: 1,
  elevation: 0,
  enableBackground: 1,
  'enable-background': 'enableBackground',
  end: 0,
  exponent: 0,
  externalResourcesRequired: 1,
  fill: 0,
  fillOpacity: 1,
  'fill-opacity': 'fillOpacity',
  fillRule: 1,
  'fill-rule': 'fillRule',
  filter: 0,
  filterRes: 1,
  filterUnits: 1,
  floodOpacity: 1,
  'flood-opacity': 'floodOpacity',
  floodColor: 1,
  'flood-color': 'floodColor',
  focusable: 0,
  fontFamily: 1,
  'font-family': 'fontFamily',
  fontSize: 1,
  'font-size': 'fontSize',
  fontSizeAdjust: 1,
  'font-size-adjust': 'fontSizeAdjust',
  fontStretch: 1,
  'font-stretch': 'fontStretch',
  fontStyle: 1,
  'font-style': 'fontStyle',
  fontVariant: 1,
  'font-variant': 'fontVariant',
  fontWeight: 1,
  'font-weight': 'fontWeight',
  format: 0,
  from: 0,
  fx: 0,
  fy: 0,
  g1: 0,
  g2: 0,
  glyphName: 1,
  'glyph-name': 'glyphName',
  glyphOrientationHorizontal: 1,
  'glyph-orientation-horizontal': 'glyphOrientationHorizontal',
  glyphOrientationVertical: 1,
  'glyph-orientation-vertical': 'glyphOrientationVertical',
  glyphRef: 1,
  gradientTransform: 1,
  gradientUnits: 1,
  hanging: 0,
  horizAdvX: 1,
  'horiz-adv-x': 'horizAdvX',
  horizOriginX: 1,
  'horiz-origin-x': 'horizOriginX',
  ideographic: 0,
  imageRendering: 1,
  'image-rendering': 'imageRendering',
  in2: 0,
  in: 0,
  inlist: 0,
  intercept: 0,
  k1: 0,
  k2: 0,
  k3: 0,
  k4: 0,
  k: 0,
  kernelMatrix: 1,
  kernelUnitLength: 1,
  kerning: 0,
  keyPoints: 1,
  keySplines: 1,
  keyTimes: 1,
  lengthAdjust: 1,
  letterSpacing: 1,
  'letter-spacing': 'letterSpacing',
  lightingColor: 1,
  'lighting-color': 'lightingColor',
  limitingConeAngle: 1,
  local: 0,
  markerEnd: 1,
  'marker-end': 'markerEnd',
  markerHeight: 1,
  markerMid: 1,
  'marker-mid': 'markerMid',
  markerStart: 1,
  'marker-start': 'markerStart',
  markerUnits: 1,
  markerWidth: 1,
  mask: 0,
  maskContentUnits: 1,
  maskUnits: 1,
  mathematical: 0,
  mode: 0,
  numOctaves: 1,
  offset: 0,
  opacity: 0,
  operator: 0,
  order: 0,
  orient: 0,
  orientation: 0,
  origin: 0,
  overflow: 0,
  overlinePosition: 1,
  'overline-position': 'overlinePosition',
  overlineThickness: 1,
  'overline-thickness': 'overlineThickness',
  paintOrder: 1,
  'paint-order': 'paintOrder',
  panose1: 0,
  'panose-1': 'panose1',
  pathLength: 1,
  patternContentUnits: 1,
  patternTransform: 1,
  patternUnits: 1,
  pointerEvents: 1,
  'pointer-events': 'pointerEvents',
  points: 0,
  pointsAtX: 1,
  pointsAtY: 1,
  pointsAtZ: 1,
  prefix: 0,
  preserveAlpha: 1,
  preserveAspectRatio: 1,
  primitiveUnits: 1,
  property: 0,
  r: 0,
  radius: 0,
  refX: 1,
  refY: 1,
  renderingIntent: 1,
  'rendering-intent': 'renderingIntent',
  repeatCount: 1,
  repeatDur: 1,
  requiredExtensions: 1,
  requiredFeatures: 1,
  resource: 0,
  restart: 0,
  result: 0,
  results: 0,
  rotate: 0,
  rx: 0,
  ry: 0,
  scale: 0,
  security: 0,
  seed: 0,
  shapeRendering: 1,
  'shape-rendering': 'shapeRendering',
  slope: 0,
  spacing: 0,
  specularConstant: 1,
  specularExponent: 1,
  speed: 0,
  spreadMethod: 1,
  startOffset: 1,
  stdDeviation: 1,
  stemh: 0,
  stemv: 0,
  stitchTiles: 1,
  stopColor: 1,
  'stop-color': 'stopColor',
  stopOpacity: 1,
  'stop-opacity': 'stopOpacity',
  strikethroughPosition: 1,
  'strikethrough-position': 'strikethroughPosition',
  strikethroughThickness: 1,
  'strikethrough-thickness': 'strikethroughThickness',
  string: 0,
  stroke: 0,
  strokeDasharray: 1,
  'stroke-dasharray': 'strokeDasharray',
  strokeDashoffset: 1,
  'stroke-dashoffset': 'strokeDashoffset',
  strokeLinecap: 1,
  'stroke-linecap': 'strokeLinecap',
  strokeLinejoin: 1,
  'stroke-linejoin': 'strokeLinejoin',
  strokeMiterlimit: 1,
  'stroke-miterlimit': 'strokeMiterlimit',
  strokeWidth: 1,
  'stroke-width': 'strokeWidth',
  strokeOpacity: 1,
  'stroke-opacity': 'strokeOpacity',
  suppressContentEditableWarning: 1,
  suppressHydrationWarning: 1,
  surfaceScale: 1,
  systemLanguage: 1,
  tableValues: 1,
  targetX: 1,
  targetY: 1,
  textAnchor: 1,
  'text-anchor': 'textAnchor',
  textDecoration: 1,
  'text-decoration': 'textDecoration',
  textLength: 1,
  textRendering: 1,
  'text-rendering': 'textRendering',
  to: 0,
  transform: 0,
  typeof: 0,
  u1: 0,
  u2: 0,
  underlinePosition: 1,
  'underline-position': 'underlinePosition',
  underlineThickness: 1,
  'underline-thickness': 'underlineThickness',
  unicode: 0,
  unicodeBidi: 1,
  'unicode-bidi': 'unicodeBidi',
  unicodeRange: 1,
  'unicode-range': 'unicodeRange',
  unitsPerEm: 1,
  'units-per-em': 'unitsPerEm',
  unselectable: 0,
  vAlphabetic: 1,
  'v-alphabetic': 'vAlphabetic',
  values: 0,
  vectorEffect: 1,
  'vector-effect': 'vectorEffect',
  version: 0,
  vertAdvY: 1,
  'vert-adv-y': 'vertAdvY',
  vertOriginX: 1,
  'vert-origin-x': 'vertOriginX',
  vertOriginY: 1,
  'vert-origin-y': 'vertOriginY',
  vHanging: 1,
  'v-hanging': 'vHanging',
  vIdeographic: 1,
  'v-ideographic': 'vIdeographic',
  viewBox: 1,
  viewTarget: 1,
  visibility: 0,
  vMathematical: 1,
  'v-mathematical': 'vMathematical',
  vocab: 0,
  widths: 0,
  wordSpacing: 1,
  'word-spacing': 'wordSpacing',
  writingMode: 1,
  'writing-mode': 'writingMode',
  x1: 0,
  x2: 0,
  x: 0,
  xChannelSelector: 1,
  xHeight: 1,
  'x-height': 'xHeight',
  xlinkActuate: 1,
  'xlink:actuate': 'xlinkActuate',
  xlinkArcrole: 1,
  'xlink:arcrole': 'xlinkArcrole',
  xlinkHref: 1,
  'xlink:href': 'xlinkHref',
  xlinkRole: 1,
  'xlink:role': 'xlinkRole',
  xlinkShow: 1,
  'xlink:show': 'xlinkShow',
  xlinkTitle: 1,
  'xlink:title': 'xlinkTitle',
  xlinkType: 1,
  'xlink:type': 'xlinkType',
  xmlBase: 1,
  'xml:base': 'xmlBase',
  xmlLang: 1,
  'xml:lang': 'xmlLang',
  xmlns: 0,
  'xml:space': 'xmlSpace',
  xmlnsXlink: 1,
  'xmlns:xlink': 'xmlnsXlink',
  xmlSpace: 1,
  y1: 0,
  y2: 0,
  y: 0,
  yChannelSelector: 1,
  z: 0,
  zoomAndPan: 1
};


/***/ }),

/***/ "./node_modules/style-to-js/cjs/index.js":
/*!***********************************************!*\
  !*** ./node_modules/style-to-js/cjs/index.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var style_to_object_1 = __importDefault(__webpack_require__(/*! style-to-object */ "./node_modules/style-to-object/index.js"));
var utilities_1 = __webpack_require__(/*! ./utilities */ "./node_modules/style-to-js/cjs/utilities.js");
function StyleToJS(style, options) {
    var output = {};
    if (!style || typeof style !== 'string') {
        return output;
    }
    (0, style_to_object_1["default"])(style, function (property, value) {
        if (property && value) {
            output[(0, utilities_1.camelCase)(property, options)] = value;
        }
    });
    return output;
}
exports["default"] = StyleToJS;


/***/ }),

/***/ "./node_modules/style-to-js/cjs/utilities.js":
/*!***************************************************!*\
  !*** ./node_modules/style-to-js/cjs/utilities.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

exports.__esModule = true;
exports.camelCase = void 0;
var CUSTOM_PROPERTY_REGEX = /^--[a-zA-Z0-9-]+$/;
var HYPHEN_REGEX = /-([a-z])/g;
var NO_HYPHEN_REGEX = /^[^-]+$/;
var VENDOR_PREFIX_REGEX = /^-(webkit|moz|ms|o|khtml)-/;
var MS_VENDOR_PREFIX_REGEX = /^-(ms)-/;
var skipCamelCase = function (property) {
    return !property ||
        NO_HYPHEN_REGEX.test(property) ||
        CUSTOM_PROPERTY_REGEX.test(property);
};
var capitalize = function (match, character) {
    return character.toUpperCase();
};
var trimHyphen = function (match, prefix) { return "".concat(prefix, "-"); };
var camelCase = function (property, options) {
    if (options === void 0) { options = {}; }
    if (skipCamelCase(property)) {
        return property;
    }
    property = property.toLowerCase();
    if (options.reactCompat) {
        property = property.replace(MS_VENDOR_PREFIX_REGEX, trimHyphen);
    }
    else {
        property = property.replace(VENDOR_PREFIX_REGEX, trimHyphen);
    }
    return property.replace(HYPHEN_REGEX, capitalize);
};
exports.camelCase = camelCase;


/***/ }),

/***/ "./node_modules/style-to-object/index.js":
/*!***********************************************!*\
  !*** ./node_modules/style-to-object/index.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var parse = __webpack_require__(/*! inline-style-parser */ "./node_modules/inline-style-parser/index.js");

/**
 * Parses inline style to object.
 *
 * @example
 * // returns { 'line-height': '42' }
 * StyleToObject('line-height: 42;');
 *
 * @param  {String}      style      - The inline style.
 * @param  {Function}    [iterator] - The iterator function.
 * @return {null|Object}
 */
function StyleToObject(style, iterator) {
  var output = null;
  if (!style || typeof style !== 'string') {
    return output;
  }

  var declaration;
  var declarations = parse(style);
  var hasIterator = typeof iterator === 'function';
  var property;
  var value;

  for (var i = 0, len = declarations.length; i < len; i++) {
    declaration = declarations[i];
    property = declaration.property;
    value = declaration.value;

    if (hasIterator) {
      iterator(property, value, declaration);
    } else if (value) {
      output || (output = {});
      output[property] = value;
    }
  }

  return output;
}

module.exports = StyleToObject;
module.exports["default"] = StyleToObject; // ESM support


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = window["React"];

/***/ }),

/***/ "@lapilli-ui/components":
/*!*******************************************!*\
  !*** external ["lapilliUI","components"] ***!
  \*******************************************/
/***/ ((module) => {

"use strict";
module.exports = window["lapilliUI"]["components"];

/***/ }),

/***/ "@lapilli-ui/styles":
/*!***************************************!*\
  !*** external ["lapilliUI","styles"] ***!
  \***************************************/
/***/ ((module) => {

"use strict";
module.exports = window["lapilliUI"]["styles"];

/***/ }),

/***/ "@wordpress/api-fetch":
/*!**********************************!*\
  !*** external ["wp","apiFetch"] ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["apiFetch"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["data"];

/***/ }),

/***/ "@wordpress/deprecated":
/*!************************************!*\
  !*** external ["wp","deprecated"] ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["deprecated"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/***/ ((module, exports) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = '';

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (arg) {
				classes = appendClass(classes, parseValue(arg));
			}
		}

		return classes;
	}

	function parseValue (arg) {
		if (typeof arg === 'string' || typeof arg === 'number') {
			return arg;
		}

		if (typeof arg !== 'object') {
			return '';
		}

		if (Array.isArray(arg)) {
			return classNames.apply(null, arg);
		}

		if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes('[native code]')) {
			return arg.toString();
		}

		var classes = '';

		for (var key in arg) {
			if (hasOwn.call(arg, key) && arg[key]) {
				classes = appendClass(classes, key);
			}
		}

		return classes;
	}

	function appendClass (value, newClass) {
		if (!newClass) {
			return value;
		}
	
		if (value) {
			return value + ' ' + newClass;
		}
	
		return value + newClass;
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

/***/ "./node_modules/html-react-parser/index.mjs":
/*!**************************************************!*\
  !*** ./node_modules/html-react-parser/index.mjs ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Comment: () => (/* binding */ Comment),
/* harmony export */   Element: () => (/* binding */ Element),
/* harmony export */   ProcessingInstruction: () => (/* binding */ ProcessingInstruction),
/* harmony export */   Text: () => (/* binding */ Text),
/* harmony export */   attributesToProps: () => (/* binding */ attributesToProps),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   domToReact: () => (/* binding */ domToReact),
/* harmony export */   htmlToDOM: () => (/* binding */ htmlToDOM)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./node_modules/html-react-parser/index.js");


var domToReact = _index_js__WEBPACK_IMPORTED_MODULE_0__.domToReact;
var htmlToDOM = _index_js__WEBPACK_IMPORTED_MODULE_0__.htmlToDOM;
var attributesToProps = _index_js__WEBPACK_IMPORTED_MODULE_0__.attributesToProps;

// domhandler
var Comment = _index_js__WEBPACK_IMPORTED_MODULE_0__.Comment;
var Element = _index_js__WEBPACK_IMPORTED_MODULE_0__.Element;
var ProcessingInstruction = _index_js__WEBPACK_IMPORTED_MODULE_0__.ProcessingInstruction;
var Text = _index_js__WEBPACK_IMPORTED_MODULE_0__.Text;

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_index_js__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),

/***/ "./assets/js/blocks/src/blocks/search-block/inner-blocks/empty-block/block.json":
/*!**************************************************************************************!*\
  !*** ./assets/js/blocks/src/blocks/search-block/inner-blocks/empty-block/block.json ***!
  \**************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"name":"yith/empty-block","version":"1.0.0","title":"Empty State Block","description":"Contains the blocks that will be shown before typing in the input bar.","category":"yith-blocks","supports":{"align":["wide"],"html":false,"multiple":false,"reusable":false,"inserter":false,"lock":false},"attributes":{"lock":{"type":"object","default":{"remove":true,"move":true}}},"parent":["yith/search-block"],"textdomain":"yith-woocommerce-ajax-search","$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2}');

/***/ }),

/***/ "./assets/js/blocks/src/blocks/search-block/inner-blocks/filled-block/block.json":
/*!***************************************************************************************!*\
  !*** ./assets/js/blocks/src/blocks/search-block/inner-blocks/filled-block/block.json ***!
  \***************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"name":"yith/filled-block","version":"1.0.0","title":"Filled State Block","description":"Contains the blocks that will be shown after results are found.","category":"yith-blocks","supports":{"align":["wide"],"html":false,"multiple":false,"reusable":false,"inserter":false,"lock":false},"attributes":{"lock":{"type":"object","default":{"remove":true,"move":true}}},"parent":["yith/search-block"],"textdomain":"yith-woocommerce-ajax-search","$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2}');

/***/ }),

/***/ "./assets/js/blocks/src/blocks/search-block/inner-blocks/history-block/block.json":
/*!****************************************************************************************!*\
  !*** ./assets/js/blocks/src/blocks/search-block/inner-blocks/history-block/block.json ***!
  \****************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"name":"yith/history-block","version":"1.0.0","title":"Search history","description":"Adds the last searches block.","category":"yith-blocks","supports":{"align":["wide"]},"parent":["yith/filled-block","yith/empty-block"],"attributes":{"historyHeading":{"type":"string","default":"Last searches"},"maxHistoryResults":{"type":"number","default":3}},"textdomain":"yith-woocommerce-ajax-search","$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2}');

/***/ }),

/***/ "./assets/js/blocks/src/blocks/search-block/inner-blocks/input-block/block.json":
/*!**************************************************************************************!*\
  !*** ./assets/js/blocks/src/blocks/search-block/inner-blocks/input-block/block.json ***!
  \**************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"name":"yith/input-block","version":"1.0.0","title":"Input Block","description":"Contains the block that manages the search field.","category":"yith-blocks","supports":{"align":["wide"],"html":false,"multiple":false,"reusable":false,"inserter":false,"lock":false},"attributes":{"lock":{"type":"object","default":{"remove":true,"move":true}},"placeholder":{"type":"string","default":"Search products..."},"placeholderTextColor":{"type":"string","default":"#000"},"inputTextColor":{"type":"string","default":"#000"},"inputBgColor":{"type":"string","default":"#fff"},"inputBgFocusColor":{"type":"string","default":"#fff"},"inputBorderColor":{"type":"string","default":"#7C7C7C"},"inputBorderFocusColor":{"type":"string","default":"#5B5B5B"},"inputBorderSize":{"type":"object","default":{"topLeft":"1px","topRight":"1px","bottomLeft":"1px","bottomRight":"1px"}},"inputBorderRadius":{"type":"object","default":{"topLeft":"20px","topRight":"20px","bottomLeft":"20px","bottomRight":"20px"}},"submitStyle":{"type":"string","default":"icon"},"submitContentColor":{"type":"string","default":"#000"},"submitContentHoverColor":{"type":"string","default":"#000"},"submitBgColor":{"type":"string","default":"#fff"},"submitBgHoverColor":{"type":"string","default":"#fff"},"submitBorderColor":{"type":"string","default":"#fff"},"submitBorderHoverColor":{"type":"string","default":"#fff"},"iconType":{"type":"string","default":"icon-right"},"buttonLabel":{"type":"string","default":"Search"},"buttonBorderRadius":{"type":"object","default":{"topLeft":"10px","topRight":"10px","bottomLeft":"10px","bottomRight":"10px"}},"className":{"type":"string","default":"ywcas-input-block"}},"parent":["yith/search-block"],"textdomain":"yith-woocommerce-ajax-search","$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2}');

/***/ }),

/***/ "./assets/js/blocks/src/blocks/search-block/inner-blocks/popular-block/block.json":
/*!****************************************************************************************!*\
  !*** ./assets/js/blocks/src/blocks/search-block/inner-blocks/popular-block/block.json ***!
  \****************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"name":"yith/popular-block","version":"1.0.0","title":"Popular Searches Block","description":"Adds the popular search results block.","category":"yith-blocks","supports":{"align":["wide"]},"parent":["yith/filled-block","yith/empty-block"],"textdomain":"yith-woocommerce-ajax-search","$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2}');

/***/ }),

/***/ "./assets/js/blocks/src/blocks/search-block/inner-blocks/product-results-block/block.json":
/*!************************************************************************************************!*\
  !*** ./assets/js/blocks/src/blocks/search-block/inner-blocks/product-results-block/block.json ***!
  \************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"name":"yith/product-results-block","version":"1.0.0","title":"Product Results Block","description":"Shows the found products.","category":"yith-blocks","supports":{"align":["wide"],"html":false,"multiple":false,"reusable":false,"inserter":false,"lock":false,"color":{"text":false,"background":true,"link":true},"spacing":{"__experimentalSkipSerialization":true,"padding":["horizontal","vertical"],"__experimentalDefaultControls":{"padding":true}}},"parent":["yith/filled-block"],"textdomain":"yith-woocommerce-ajax-search","$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2}');

/***/ }),

/***/ "./assets/js/blocks/src/blocks/search-block/inner-blocks/related-categories-block/block.json":
/*!***************************************************************************************************!*\
  !*** ./assets/js/blocks/src/blocks/search-block/inner-blocks/related-categories-block/block.json ***!
  \***************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"name":"yith/related-categories-block","version":"1.0.0","title":"Related Categories Block","description":"Contains the block that shows the related categories.","category":"yith-blocks","supports":{"align":["wide"]},"attributes":{"relatedCategoryHeading":{"type":"string","default":""},"maxCategoryRelated":{"type":"number","default":3}},"parent":["yith/filled-block"],"textdomain":"yith-woocommerce-ajax-search","$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2}');

/***/ }),

/***/ "./assets/js/blocks/src/blocks/search-block/inner-blocks/related-posts-block/block.json":
/*!**********************************************************************************************!*\
  !*** ./assets/js/blocks/src/blocks/search-block/inner-blocks/related-posts-block/block.json ***!
  \**********************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"name":"yith/related-posts-block","version":"1.0.0","title":"Related Posts Block","description":"Contains the block that shows the related posts.","category":"yith-blocks","supports":{"align":["wide"]},"parent":["yith/filled-block"],"textdomain":"yith-woocommerce-ajax-search","$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2}');

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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + ".js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get mini-css chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.miniCssF = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return undefined;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "yith-woocommerce-ajax-search-premium:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 		
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl + "../../../";
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
/******/ 			"blocks/build/search-block/frontend": 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = (chunkId, promises) => {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(true) { // all chunks have JS
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise((resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject]));
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = (event) => {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 		};
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 		
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = globalThis["webpackChunkyith_woocommerce_ajax_search_premium"] = globalThis["webpackChunkyith_woocommerce_ajax_search_premium"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**************************************************************!*\
  !*** ./assets/js/blocks/src/blocks/search-block/frontend.js ***!
  \**************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _base_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../base/utils */ "./assets/js/blocks/src/base/utils/index.js");
/* harmony import */ var _base_utils_functions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../base/utils/functions */ "./assets/js/blocks/src/base/utils/functions.js");
/* harmony import */ var _blocks_registry_block_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../blocks-registry/block-components */ "./assets/js/blocks/src/blocks-registry/block-components/index.js");
/* harmony import */ var _atomic_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../atomic/utils */ "./assets/js/blocks/src/atomic/utils/index.js");
/* harmony import */ var _inner_blocks_register_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./inner-blocks/register-components */ "./assets/js/blocks/src/blocks/search-block/inner-blocks/register-components.js");
/* harmony import */ var _attributes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./attributes */ "./assets/js/blocks/src/blocks/search-block/attributes.js");
/* harmony import */ var _block__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./block */ "./assets/js/blocks/src/blocks/search-block/block.js");








var getProps = function getProps(el) {
  return {
    attributes: (0,_base_utils__WEBPACK_IMPORTED_MODULE_1__.getValidBlockAttributes)(_attributes__WEBPACK_IMPORTED_MODULE_6__.blockAttributes, el ? el.dataset : {})
  };
};
var Wrapper = function Wrapper(_ref) {
  var children = _ref.children;
  var isSmallDevice = (0,_base_utils_functions__WEBPACK_IMPORTED_MODULE_2__.useMediaQuery)("(max-width: 500px)");
  return _wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Children.map(children, function (child) {
    if ((0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.isValidElement)(child)) {
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.cloneElement)(child);
    }
    return child;
  });
};
(0,_atomic_utils__WEBPACK_IMPORTED_MODULE_4__.renderParentBlock)({
  Block: _block__WEBPACK_IMPORTED_MODULE_7__["default"],
  blockName: _attributes__WEBPACK_IMPORTED_MODULE_6__.blockName,
  selector: '.wp-block-yith-search-block',
  getProps: getProps,
  blockMap: (0,_blocks_registry_block_components__WEBPACK_IMPORTED_MODULE_3__.getRegisteredBlockComponents)(_attributes__WEBPACK_IMPORTED_MODULE_6__.blockName),
  blockWrapper: Wrapper
});
})();

var __webpack_export_target__ = window;
for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ })()
;
//# sourceMappingURL=frontend.js.map