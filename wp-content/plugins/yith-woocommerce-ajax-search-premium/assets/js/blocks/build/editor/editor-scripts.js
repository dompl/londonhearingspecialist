/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@wordpress/icons/build-module/library/link-off.js":
/*!************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/link-off.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);

/**
 * WordPress dependencies
 */

const linkOff = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M17.031 4.703 15.576 4l-1.56 3H14v.03l-2.324 4.47H9.5V13h1.396l-1.502 2.889h-.95a3.694 3.694 0 0 1 0-7.389H10V7H8.444a5.194 5.194 0 1 0 0 10.389h.17L7.5 19.53l1.416.719L15.049 8.5h.507a3.694 3.694 0 0 1 0 7.39H14v1.5h1.556a5.194 5.194 0 0 0 .273-10.383l1.202-2.304Z"
}));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (linkOff);
//# sourceMappingURL=link-off.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/link.js":
/*!********************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/link.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);

/**
 * WordPress dependencies
 */

const link = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M10 17.389H8.444A5.194 5.194 0 1 1 8.444 7H10v1.5H8.444a3.694 3.694 0 0 0 0 7.389H10v1.5ZM14 7h1.556a5.194 5.194 0 0 1 0 10.39H14v-1.5h1.556a3.694 3.694 0 0 0 0-7.39H14V7Zm-4.5 6h5v-1.5h-5V13Z"
}));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (link);
//# sourceMappingURL=link.js.map

/***/ }),

/***/ "./assets/js/blocks/src/base/components/badge/index.js":
/*!*************************************************************!*\
  !*** ./assets/js/blocks/src/base/components/badge/index.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lapilli_ui_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @lapilli-ui/components */ "@lapilli-ui/components");
/* harmony import */ var _lapilli_ui_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_lapilli_ui_components__WEBPACK_IMPORTED_MODULE_0__);

var Badge = function Badge(_ref) {
  var className = _ref.className,
    label = _ref.label,
    backgroundColor = _ref.backgroundColor,
    color = _ref.color,
    top = _ref.top;
  return /*#__PURE__*/React.createElement(_lapilli_ui_components__WEBPACK_IMPORTED_MODULE_0__.Box, {
    className: "ywcas-badge ".concat(className),
    sx: {
      top: "".concat(top, "px"),
      backgroundColor: backgroundColor,
      color: color
    }
  }, label);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Badge);

/***/ }),

/***/ "./assets/js/blocks/src/base/components/category-results/category-result.js":
/*!**********************************************************************************!*\
  !*** ./assets/js/blocks/src/base/components/category-results/category-result.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var html_react_parser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! html-react-parser */ "./node_modules/html-react-parser/index.mjs");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lapilli_ui_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @lapilli-ui/components */ "@lapilli-ui/components");
/* harmony import */ var _lapilli_ui_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_lapilli_ui_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../config */ "./assets/js/blocks/src/config.js");





var CategoryResult = function CategoryResult(_ref) {
  var query = _ref.query,
    singleCategory = _ref.singleCategory;
  var categoryURL = singleCategory.url + '?ywcas=1&ywcas_filter=' + query + '&lang=' + _config__WEBPACK_IMPORTED_MODULE_4__.YWCAS_LANG;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_lapilli_ui_components__WEBPACK_IMPORTED_MODULE_3__.Stack, {
    direction: "row",
    align: "center",
    sx: {
      gap: '4px',
      paddingBottom: '10px'
    },
    className: "ywcas-category-result"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_lapilli_ui_components__WEBPACK_IMPORTED_MODULE_3__.Typography, {
    sx: {
      fontWeight: 'bold',
      fontSize: '0.93rem'
    }
  }, query), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_lapilli_ui_components__WEBPACK_IMPORTED_MODULE_3__.Typography, {
    sx: {
      fontSize: '0.81rem',
      color: '#8F8080'
    }
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__._x)('in', 'T-shirts in Woman Clothes', 'yith-woocommerce-ajax-search')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("a", {
    href: categoryURL
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_lapilli_ui_components__WEBPACK_IMPORTED_MODULE_3__.Typography, {
    sx: {
      fontSize: '0.93rem',
      textTransform: 'capitalize',
      color: 'var(--wp--preset--color--contrast,#007565)'
    }
  }, (0,html_react_parser__WEBPACK_IMPORTED_MODULE_1__["default"])(singleCategory.name))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CategoryResult);

/***/ }),

/***/ "./assets/js/blocks/src/base/components/category-results/index.js":
/*!************************************************************************!*\
  !*** ./assets/js/blocks/src/base/components/category-results/index.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/functions */ "./assets/js/blocks/src/base/utils/functions.js");
/* harmony import */ var _lapilli_ui_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @lapilli-ui/components */ "@lapilli-ui/components");
/* harmony import */ var _lapilli_ui_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_lapilli_ui_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _category_result__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./category-result */ "./assets/js/blocks/src/base/components/category-results/category-result.js");




var CategoryResults = function CategoryResults(_ref) {
  var label = _ref.label,
    query = _ref.query,
    categories = _ref.categories,
    results = _ref.results,
    maxResults = _ref.maxResults;
  var listCategory = function listCategory() {
    var groups = [];
    if (results) {
      results.forEach(function (item) {
        if (item.parent_category.length > 0) {
          groups = groups.concat(item.parent_category);
        }
      });
      return groups;
    }
  };
  var findCategory = function findCategory(cats, categoryID) {
    var currentCat = false;
    cats.forEach(function (c) {
      if (!currentCat) {
        if (c.term_id === categoryID) {
          currentCat = c;
        } else {
          if (Array.isArray(c.children)) {
            currentCat = findCategory(c.children, categoryID);
          }
        }
      }
    });
    return currentCat;
  };
  var groupsOfCategories = function groupsOfCategories() {
    var groups = listCategory();
    if (groups.length > 0) {
      var topCategories = (0,_utils_functions__WEBPACK_IMPORTED_MODULE_1__.getTopFrequentCategories)(groups, maxResults);
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_lapilli_ui_components__WEBPACK_IMPORTED_MODULE_2__.Stack, {
        className: "search-category-results",
        sx: {
          '& .ywcas-category-result:last-child': {
            paddingBottom: 0
          }
        }
      }, label && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_lapilli_ui_components__WEBPACK_IMPORTED_MODULE_2__.Typography, {
        sx: {
          '&': {
            borderBottom: '1px solid #9797972e',
            marginBottom: '17px'
          }
        }
      }, label), topCategories.map(function (singleCategory) {
        var currentCategory = findCategory(categories, singleCategory);
        if (currentCategory) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_category_result__WEBPACK_IMPORTED_MODULE_3__["default"], {
            key: currentCategory.term_id,
            query: query,
            singleCategory: currentCategory
          });
        }
      }));
    }
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_lapilli_ui_components__WEBPACK_IMPORTED_MODULE_2__.Stack, null, groupsOfCategories());
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CategoryResults);

/***/ }),

/***/ "./assets/js/blocks/src/base/components/history-searches/index.js":
/*!************************************************************************!*\
  !*** ./assets/js/blocks/src/base/components/history-searches/index.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lapilli_ui_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @lapilli-ui/components */ "@lapilli-ui/components");
/* harmony import */ var _lapilli_ui_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_lapilli_ui_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../common */ "./assets/js/blocks/src/common.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__);
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






var HistorySearch = function HistorySearch(_ref) {
  var label = _ref.label,
    onClick = _ref.onClick;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_lapilli_ui_components__WEBPACK_IMPORTED_MODULE_2__.Box, {
    id: label,
    className: "ywcas-history-search-item",
    onClick: onClick,
    sx: {
      '&': {
        textTransform: 'capitalize',
        fontSize: '0.93rem',
        color: 'var(--wp--preset--color--contrast, #709422)'
      },
      '&:hover': {
        cursor: 'pointer',
        textDecoration: 'underline'
      }
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_lapilli_ui_components__WEBPACK_IMPORTED_MODULE_2__.Stack, {
    direction: "row",
    spacing: 1,
    align: "center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_lapilli_ui_components__WEBPACK_IMPORTED_MODULE_2__.Stack, {
    align: "center",
    className: "ywcas-history-search-item--icon"
  }, (0,_common__WEBPACK_IMPORTED_MODULE_3__.ClockIcon)({
    width: '20px'
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_lapilli_ui_components__WEBPACK_IMPORTED_MODULE_2__.Box, {
    className: "ywcas-history-search-item--item"
  }, label)));
};
var HistorySearches = function HistorySearches(_ref2) {
  var title = _ref2.title,
    searches = _ref2.searches,
    onClick = _ref2.onClick;
  var _useState = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useState)(searches),
    _useState2 = _slicedToArray(_useState, 2),
    history = _useState2[0],
    setHistory = _useState2[1];
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function () {
    setHistory(searches);
  }, [searches]);
  var handleClick = function handleClick(event) {
    event.stopPropagation();
    var target = event.target;
    var elementClicked = false;
    if ('ywcas-history-search-item' !== target.className) {
      var parent = target.closest('.ywcas-history-search-item');
      elementClicked = parent.id;
    } else {
      elementClicked = target.id;
    }
    if (elementClicked) {
      onClick(elementClicked);
    }
  };
  var resetHistory = function resetHistory() {
    _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1___default()({
      path: '/ywcas/v1/reset-user-history'
    }).then(function (result) {
      setHistory([]);
    })["catch"](function (error) {
      console.log(error);
    });
  };
  if (history.length === 0) {
    return null;
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "ywcas-history-searches-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_lapilli_ui_components__WEBPACK_IMPORTED_MODULE_2__.Stack, {
    direction: "row",
    justify: "space-between",
    align: "center",
    className: "ywcas-history-header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_lapilli_ui_components__WEBPACK_IMPORTED_MODULE_2__.Typography, {
    className: "ywcas-history-searches__title"
  }, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_lapilli_ui_components__WEBPACK_IMPORTED_MODULE_2__.Box, {
    className: "ywcas-delete-all-history",
    onClick: resetHistory
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Delete all', 'yith-woocommerce-ajax-search'))), history && history.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_lapilli_ui_components__WEBPACK_IMPORTED_MODULE_2__.Stack, {
    className: "ywcas-history-searches-items",
    spacing: 1
  }, history.map(function (search) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(HistorySearch, {
      label: search,
      key: search,
      onClick: handleClick
    });
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HistorySearches);

/***/ }),

/***/ "./assets/js/blocks/src/base/components/index.js":
/*!*******************************************************!*\
  !*** ./assets/js/blocks/src/base/components/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CategoryResults: () => (/* reexport safe */ _category_results__WEBPACK_IMPORTED_MODULE_5__["default"]),
/* harmony export */   HistorySearches: () => (/* reexport safe */ _history_searches__WEBPACK_IMPORTED_MODULE_2__["default"]),
/* harmony export */   PopoverWithContent: () => (/* reexport safe */ _popover_with_content__WEBPACK_IMPORTED_MODULE_3__["default"]),
/* harmony export */   PopularSearches: () => (/* reexport safe */ _popular_searches__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   ProductResults: () => (/* reexport safe */ _product_results__WEBPACK_IMPORTED_MODULE_4__["default"]),
/* harmony export */   RelatedContent: () => (/* reexport safe */ _related_content__WEBPACK_IMPORTED_MODULE_6__["default"]),
/* harmony export */   Root: () => (/* reexport safe */ _root__WEBPACK_IMPORTED_MODULE_7__["default"]),
/* harmony export */   SearchField: () => (/* reexport safe */ _search_field__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _search_field__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./search-field */ "./assets/js/blocks/src/base/components/search-field/index.js");
/* harmony import */ var _popular_searches__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./popular-searches */ "./assets/js/blocks/src/base/components/popular-searches/index.js");
/* harmony import */ var _history_searches__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./history-searches */ "./assets/js/blocks/src/base/components/history-searches/index.js");
/* harmony import */ var _popover_with_content__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./popover-with-content */ "./assets/js/blocks/src/base/components/popover-with-content/index.js");
/* harmony import */ var _product_results__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./product-results */ "./assets/js/blocks/src/base/components/product-results/index.js");
/* harmony import */ var _category_results__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./category-results */ "./assets/js/blocks/src/base/components/category-results/index.js");
/* harmony import */ var _related_content__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./related-content */ "./assets/js/blocks/src/base/components/related-content/index.js");
/* harmony import */ var _root__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./root */ "./assets/js/blocks/src/base/components/root/index.js");









/***/ }),

/***/ "./assets/js/blocks/src/base/components/popover-with-content/index.js":
/*!****************************************************************************!*\
  !*** ./assets/js/blocks/src/base/components/popover-with-content/index.js ***!
  \****************************************************************************/
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
/* harmony import */ var _utils_functions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/functions */ "./assets/js/blocks/src/base/utils/functions.js");
var _excluded = ["children"];
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



var PopoverWithContent = function PopoverWithContent(_ref) {
  var children = _ref.children,
    props = _objectWithoutProperties(_ref, _excluded);
  var isSmallDevice = (0,_utils_functions__WEBPACK_IMPORTED_MODULE_2__.useMediaQuery)('(max-width: 600px)');
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, !isSmallDevice && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_lapilli_ui_components__WEBPACK_IMPORTED_MODULE_1__.Popover, props, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_lapilli_ui_components__WEBPACK_IMPORTED_MODULE_1__.Box, {
    className: "popover-content"
  }, children)), isSmallDevice && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_lapilli_ui_components__WEBPACK_IMPORTED_MODULE_1__.Box, {
    className: "mobile-search-content"
  }, children));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PopoverWithContent);

/***/ }),

/***/ "./assets/js/blocks/src/base/components/popular-searches/index.js":
/*!************************************************************************!*\
  !*** ./assets/js/blocks/src/base/components/popular-searches/index.js ***!
  \************************************************************************/
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


var PopularSearches = function PopularSearches(_ref) {
  var title = _ref.title,
    searches = _ref.searches,
    onClick = _ref.onClick;
  var handleClick = function handleClick(event) {
    event.stopPropagation();
    onClick(event.target.id);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_lapilli_ui_components__WEBPACK_IMPORTED_MODULE_1__.Stack, {
    className: "ywcas-popular-searches-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_lapilli_ui_components__WEBPACK_IMPORTED_MODULE_1__.Typography, {
    className: "ywcas-popular-searches__title"
  }, title), searches && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_lapilli_ui_components__WEBPACK_IMPORTED_MODULE_1__.Stack, {
    className: "ywcas-popular-searches-items",
    direction: "row",
    sx: {
      'flexWrap': 'wrap'
    },
    spacing: 1
  }, searches.map(function (search) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_lapilli_ui_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
      className: "ywcas-popular-searches-item",
      key: search,
      id: search,
      onClick: handleClick,
      size: "md",
      variant: "outlined"
    }, search);
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PopularSearches);

/***/ }),

/***/ "./assets/js/blocks/src/base/components/product-results/index.js":
/*!***********************************************************************!*\
  !*** ./assets/js/blocks/src/base/components/product-results/index.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _result_item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./result-item */ "./assets/js/blocks/src/base/components/product-results/result-item.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lapilli_ui_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @lapilli-ui/components */ "@lapilli-ui/components");
/* harmony import */ var _lapilli_ui_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_lapilli_ui_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../config */ "./assets/js/blocks/src/config.js");
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





var ProductResults = function ProductResults(props) {
  var searchQuery = props.searchQuery,
    layout = props.layout,
    results = props.results,
    categoryList = props.categoryList,
    noResults = props.noResults,
    showViewAll = props.showViewAll,
    showViewAllText = props.showViewAllText,
    maxResultsToShow = props.maxResultsToShow;
  var handleClick = function handleClick(e, item) {
    var redirect = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
    e.stopPropagation();
    redirect && goToItemUrl(item);
    var path = '/ywcas/v1/register?itemID=' + item.post_id + '&queryString=' + searchQuery + '&totalResults=' + results.totalResults + '&lang=' + _config__WEBPACK_IMPORTED_MODULE_4__.YWCAS_LANG;
    _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_2___default()({
      path: path
    }).then(null, function (error) {
      console.log(error);
    });
  };
  var goToItemUrl = function goToItemUrl(item) {
    if (item.url) {
      window.location.href = item.url;
    }
  };
  var handleSubmit = function handleSubmit() {
    var showQuery = results.fuzzyToken !== false ? results.fuzzyToken : searchQuery;
    var path = _config__WEBPACK_IMPORTED_MODULE_4__.YWCAS_SITE_URL + '?ywcas=1&post_type=product&lang=' + _config__WEBPACK_IMPORTED_MODULE_4__.YWCAS_LANG + '&s=' + showQuery;
    window.location.href = path;
  };
  var viewAllLabel = showViewAllText.replace('{total}', results.totalResults);
  var items = results.results;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null, items && items.length && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_lapilli_ui_components__WEBPACK_IMPORTED_MODULE_3__.Grid, {
    className: "ywcas-search-results-grid ".concat(layout),
    columns: 1
  }, items.map(function (item, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_result_item__WEBPACK_IMPORTED_MODULE_0__["default"], _extends({
      key: index,
      item: item,
      onClick: handleClick,
      results: results,
      categoryResults: categoryList
    }, props));
  })), !items && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_lapilli_ui_components__WEBPACK_IMPORTED_MODULE_3__.Typography, null, noResults), items && showViewAll && maxResultsToShow < results.totalResults && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "ywcas-total-results"
  }, " > ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("a", {
    className: "total-results-link",
    href: "#",
    onClick: handleSubmit
  }, viewAllLabel)));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductResults);

/***/ }),

/***/ "./assets/js/blocks/src/base/components/product-results/item-thumb.js":
/*!****************************************************************************!*\
  !*** ./assets/js/blocks/src/base/components/product-results/item-thumb.js ***!
  \****************************************************************************/
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
/* harmony import */ var html_react_parser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! html-react-parser */ "./node_modules/html-react-parser/index.mjs");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../config */ "./assets/js/blocks/src/config.js");
/* harmony import */ var _badge__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../badge */ "./assets/js/blocks/src/base/components/badge/index.js");
/* harmony import */ var _utils_functions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/functions */ "./assets/js/blocks/src/base/utils/functions.js");






var ItemThumb = function ItemThumb(_ref) {
  var imageSize = _ref.imageSize,
    marginLeft = _ref.marginLeft,
    item = _ref.item,
    showSaleBadge = _ref.showSaleBadge,
    showOutOfStockBadge = _ref.showOutOfStockBadge,
    showFeaturedBadge = _ref.showFeaturedBadge,
    hideFeaturedIfOnSale = _ref.hideFeaturedIfOnSale;
  var productInStock = Boolean(parseInt(item.instock));
  var hasSaleBadge = showSaleBadge && Boolean(parseInt(item.onsale));
  var hasFeatured = hideFeaturedIfOnSale && hasSaleBadge ? false : showFeaturedBadge && Boolean(parseInt(item.featured));
  var hasOutOfStock = showOutOfStockBadge && !productInStock;
  var saleBadgeLabel = _config__WEBPACK_IMPORTED_MODULE_3__.ywcasDefaultSettings.saleBadgeLabel,
    saleFeaturedLabel = _config__WEBPACK_IMPORTED_MODULE_3__.ywcasDefaultSettings.saleFeaturedLabel,
    saleOutOfStockLabel = _config__WEBPACK_IMPORTED_MODULE_3__.ywcasDefaultSettings.saleOutOfStockLabel,
    saleBadgeColors = _config__WEBPACK_IMPORTED_MODULE_3__.ywcasDefaultSettings.saleBadgeColors,
    featuredBadgeColors = _config__WEBPACK_IMPORTED_MODULE_3__.ywcasDefaultSettings.featuredBadgeColors,
    outOfStockBadgeColors = _config__WEBPACK_IMPORTED_MODULE_3__.ywcasDefaultSettings.outOfStockBadgeColors;
  var space = 25;
  var top = 5;
  var featuredTop = hasSaleBadge ? top + space : top;
  var outOfStockTop = hasFeatured ? featuredTop + space : hasSaleBadge ? top + space : top;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_lapilli_ui_components__WEBPACK_IMPORTED_MODULE_1__.Stack, {
    className: "search-result-item__thumbnail",
    sx: {
      width: imageSize,
      marginLeft: marginLeft
    }
  }, hasSaleBadge && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_badge__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: "ywcas-onsale-badge",
    top: top,
    label: (0,html_react_parser__WEBPACK_IMPORTED_MODULE_2__["default"])(saleBadgeLabel),
    backgroundColor: saleBadgeColors.bgcolor,
    color: saleBadgeColors.color
  }), hasFeatured && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_badge__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: "ywcas-featured-badge",
    top: featuredTop,
    label: saleFeaturedLabel,
    backgroundColor: featuredBadgeColors.bgcolor,
    color: featuredBadgeColors.color
  }), hasOutOfStock && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_badge__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: "ywcas-outofstock-badge",
    top: outOfStockTop,
    label: saleOutOfStockLabel,
    backgroundColor: outOfStockBadgeColors.bgcolor,
    color: outOfStockBadgeColors.color
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: item.thumbnail,
    alt: item.name,
    width: imageSize
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ItemThumb);

/***/ }),

/***/ "./assets/js/blocks/src/base/components/product-results/result-item.js":
/*!*****************************************************************************!*\
  !*** ./assets/js/blocks/src/base/components/product-results/result-item.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var html_react_parser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! html-react-parser */ "./node_modules/html-react-parser/index.mjs");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lapilli_ui_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @lapilli-ui/components */ "@lapilli-ui/components");
/* harmony import */ var _lapilli_ui_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_lapilli_ui_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_functions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/functions */ "./assets/js/blocks/src/base/utils/functions.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../config */ "./assets/js/blocks/src/config.js");
/* harmony import */ var _item_thumb__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./item-thumb */ "./assets/js/blocks/src/base/components/product-results/item-thumb.js");
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
/* global ywcas_search_results_block_parameter */








function ResultItem(props) {
  var item = props.item,
    searchQuery = props.searchQuery,
    _onClick = props.onClick,
    showName = props.showName,
    showImage = props.showImage,
    showPrice = props.showPrice,
    showCategories = props.showCategories,
    showStock = props.showStock,
    showSKU = props.showSKU,
    showSummary = props.showSummary,
    showAddToCart = props.showAddToCart,
    layout = props.layout,
    imageSize = props.imageSize,
    imagePosition = props.imagePosition,
    summaryMaxWord = props.summaryMaxWord,
    productNameColor = props.productNameColor,
    priceLabel = props.priceLabel,
    categoryResults = props.categoryResults,
    results = props.results;
  var isSmallDevice = (0,_utils_functions__WEBPACK_IMPORTED_MODULE_5__.useMediaQuery)('(max-width: 600px)');
  var stackDirection = layout === 'grid' ? 'column' : 'row';
  var stackAlign = 'center';
  var marginLeft = 'list' === layout && imagePosition === 'right' ? 'auto' : 0;
  var _useState = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    addingToCart = _useState2[0],
    setAddingToCart = _useState2[1];
  var findMainCategory = function findMainCategory(itemCategory) {
    var parentCat = categoryResults.find(function (singleCat) {
      return parseInt(singleCat.term_id) === itemCategory.parent;
    });
    if (parentCat && parentCat.parent !== 0) {
      parentCat = findMainCategory(parentCat);
    }
    return parentCat;
  };
  var getCategoryLink = function getCategoryLink(category) {
    var categoryLabel = category.name;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
      href: category.url
    }, (0,html_react_parser__WEBPACK_IMPORTED_MODULE_1__["default"])(categoryLabel));
  };
  var ItemCategory = function ItemCategory(categories) {
    if (categoryResults) {
      var itemCategory = categoryResults.find(function (singleCat) {
        return parseInt(singleCat.term_id) === categories[0];
      });
      if (!itemCategory) {
        return '';
      }
      var parentCategory = itemCategory.parent !== 0 ? findMainCategory(itemCategory) : false;
      if (parentCategory) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_lapilli_ui_components__WEBPACK_IMPORTED_MODULE_3__.Box, null, getCategoryLink(parentCategory), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, " > "), "  ", getCategoryLink(itemCategory));
      } else {
        return getCategoryLink(itemCategory);
      }
    }
    return '';
  };
  var ItemAddToCart = function ItemAddToCart() {
    var instock = parseInt(item.instock);
    var is_purchasable = parseInt(item.is_purchasable);
    var classButton = 'wp-element-button wp-block-button__link wp-block-woocommerce-product-button search-result-add-to-cart';
    if (is_purchasable && instock && (item.product_type === 'simple' || item.product_type === 'variation') && 0 < parseFloat(item === null || item === void 0 ? void 0 : item.max_price)) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Button, {
        className: classButton,
        onClick: addToCart
      }, _config__WEBPACK_IMPORTED_MODULE_6__.YWCAS_ADD_TO_CART_LABEL);
    }
    if (instock && item.product_type === 'variable' && 0 < parseFloat(item === null || item === void 0 ? void 0 : item.max_price)) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Button, {
        size: "sm",
        className: classButton,
        onClick: function onClick(e) {
          return _onClick(e, item);
        }
      }, _config__WEBPACK_IMPORTED_MODULE_6__.YWCAS_SELECT_OPTIONS);
    }
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Button, {
      size: "sm",
      className: classButton,
      onClick: function onClick(e) {
        return _onClick(e, item);
      }
    }, _config__WEBPACK_IMPORTED_MODULE_6__.YWCAS_READ_MORE);
  };
  var addToCart = function addToCart(e) {
    e.stopPropagation();
    if (!e.target.classList.contains('search-result-add-to-cart')) {
      return;
    }
    _onClick(e, item, false);
    setAddingToCart(true);
    jQuery.ajax({
      url: _config__WEBPACK_IMPORTED_MODULE_6__.YWCAS_AJAX_URL.toString().replace('%%endpoint%%', 'add_to_cart'),
      data: {
        quantity: 1,
        product_id: item.post_id,
        product_sku: item.sku
      },
      type: 'POST',
      success: function success(response) {
        setAddingToCart(false);
      }
    });
  };
  var ItemName = function ItemName() {
    if (!showImage && (0,_utils_functions__WEBPACK_IMPORTED_MODULE_5__.isEmpty)(item.thumbnail)) {
      return '';
    }
    var classStock = parseInt(item.instock) > 0 ? 'in-stock' : 'out-of-stock';
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_lapilli_ui_components__WEBPACK_IMPORTED_MODULE_3__.Stack, {
      className: "search-result-item_name",
      sx: {
        flex: 1,
        alignItems: 'left'
      },
      onClick: function onClick(e) {
        return _onClick(e, item, results.totalResults);
      }
    }, showName && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_lapilli_ui_components__WEBPACK_IMPORTED_MODULE_3__.Typography, {
      sx: {
        color: productNameColor,
        fontSize: '0.9em'
      },
      className: "search-result-item__name"
    }, (0,html_react_parser__WEBPACK_IMPORTED_MODULE_1__["default"])(item.name)), showPrice && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_lapilli_ui_components__WEBPACK_IMPORTED_MODULE_3__.Typography, {
      className: "search-result-item__price",
      sx: {
        fontSize: '0.9em',
        fontWeight: '600'
      }
    }, priceLabel, " ", (0,_utils_functions__WEBPACK_IMPORTED_MODULE_5__.getPrice)(item)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_lapilli_ui_components__WEBPACK_IMPORTED_MODULE_3__.Box, {
      className: "search-result-item__inline_group",
      direction: "row",
      sx: {
        display: 'block'
      }
    }, showSKU && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_lapilli_ui_components__WEBPACK_IMPORTED_MODULE_3__.Typography, {
      className: "search-result-item__sku"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("strong", null, _config__WEBPACK_IMPORTED_MODULE_6__.YWCAS_SKU_LABEL), " ", item.sku), showSKU && showStock && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "-"), showStock && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_lapilli_ui_components__WEBPACK_IMPORTED_MODULE_3__.Typography, {
      className: "search-result-item__stock stock ".concat(classStock)
    }, parseInt(item.instock) ? _config__WEBPACK_IMPORTED_MODULE_6__.YWCAS_IN_STOCK_LABEL : _config__WEBPACK_IMPORTED_MODULE_6__.YWCAS_OUT_OF_STOCK_LABEL)), showCategories && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_lapilli_ui_components__WEBPACK_IMPORTED_MODULE_3__.Box, {
      className: "search-result-item__category",
      sx: {
        fontSize: '0.7em'
      }
    }, ItemCategory(item.parent_category)), showSummary && 'grid' === layout && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_lapilli_ui_components__WEBPACK_IMPORTED_MODULE_3__.Typography, {
      className: "search-result-item__summary",
      sx: {
        fontSize: '0.8em'
      }
    }, (0,_utils_functions__WEBPACK_IMPORTED_MODULE_5__.getWordStr)(item.summary, summaryMaxWord)));
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_lapilli_ui_components__WEBPACK_IMPORTED_MODULE_3__.Box, {
    className: "search-result-item ".concat(layout)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_lapilli_ui_components__WEBPACK_IMPORTED_MODULE_3__.Stack, {
    align: stackAlign,
    direction: stackDirection,
    spacing: 2,
    className: "search-result-item__content",
    "data-id": item.post_id,
    "data-name": item.name,
    onClick: function onClick(e) {
      return _onClick(e, item);
    }
  }, showImage && (layout === 'grid' || layout === 'list' && imagePosition !== 'right') && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_item_thumb__WEBPACK_IMPORTED_MODULE_7__["default"], _extends({
    marginLeft: marginLeft,
    item: item
  }, props)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ItemName, null), isSmallDevice && showSummary && 'grid' !== layout && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_lapilli_ui_components__WEBPACK_IMPORTED_MODULE_3__.Typography, {
    className: "search-result-item__summary",
    sx: {
      fontSize: '0.8em'
    }
  }, (0,html_react_parser__WEBPACK_IMPORTED_MODULE_1__["default"])((0,_utils_functions__WEBPACK_IMPORTED_MODULE_5__.getWordStr)(item.summary, summaryMaxWord))), showAddToCart && (!addingToCart ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "wp-block-button"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ItemAddToCart, null)) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_lapilli_ui_components__WEBPACK_IMPORTED_MODULE_3__.Spinner, {
    color: "default",
    size: "sm",
    thickness: 3.6
  })), showImage && layout === 'list' && imagePosition === 'right' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_item_thumb__WEBPACK_IMPORTED_MODULE_7__["default"], _extends({
    marginLeft: marginLeft,
    item: item
  }, props))), !isSmallDevice && showSummary && 'grid' !== layout && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_lapilli_ui_components__WEBPACK_IMPORTED_MODULE_3__.Typography, {
    className: "search-result-item__summary",
    sx: {
      fontSize: '0.8em'
    }
  }, (0,html_react_parser__WEBPACK_IMPORTED_MODULE_1__["default"])((0,_utils_functions__WEBPACK_IMPORTED_MODULE_5__.getWordStr)(item.summary, summaryMaxWord))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ResultItem);

/***/ }),

/***/ "./assets/js/blocks/src/base/components/related-content/index.js":
/*!***********************************************************************!*\
  !*** ./assets/js/blocks/src/base/components/related-content/index.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lapilli_ui_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @lapilli-ui/components */ "@lapilli-ui/components");
/* harmony import */ var _lapilli_ui_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_lapilli_ui_components__WEBPACK_IMPORTED_MODULE_2__);



var RelatedContent = function RelatedContent(_ref) {
  var label = _ref.label,
    posts = _ref.posts,
    background = _ref.background,
    maxResults = _ref.maxResults;
  var relatedContents = false;
  if (posts && posts.length) {
    if (posts.length > maxResults) {
      relatedContents = posts.slice(0, maxResults);
    } else {
      relatedContents = posts;
    }
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_lapilli_ui_components__WEBPACK_IMPORTED_MODULE_2__.Box, {
    className: "ywcas-related-content",
    sx: {
      background: background
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_lapilli_ui_components__WEBPACK_IMPORTED_MODULE_2__.Typography, {
    className: "ywcas-related-content__label"
  }, label), relatedContents && relatedContents.map(function (post) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_lapilli_ui_components__WEBPACK_IMPORTED_MODULE_2__.Typography, {
      className: "ywcas-related-content__link",
      key: post.id
    }, "> ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
      key: post,
      href: post.url
    }, post.name));
  }), !relatedContents && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_lapilli_ui_components__WEBPACK_IMPORTED_MODULE_2__.Typography, {
    className: "ywcas-related-content__no_result"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('No related content found', 'yith-woocommerce-ajax-search')));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RelatedContent);

/***/ }),

/***/ "./assets/js/blocks/src/base/components/root/index.js":
/*!************************************************************!*\
  !*** ./assets/js/blocks/src/base/components/root/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lapilli_ui_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @lapilli-ui/styles */ "@lapilli-ui/styles");
/* harmony import */ var _lapilli_ui_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_lapilli_ui_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lapilli_ui_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @lapilli-ui/components */ "@lapilli-ui/components");
/* harmony import */ var _lapilli_ui_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_lapilli_ui_components__WEBPACK_IMPORTED_MODULE_2__);
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



var Root = function Root(_ref) {
  var children = _ref.children;
  var _useState = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(),
    _useState2 = _slicedToArray(_useState, 2),
    doc = _useState2[0],
    setDoc = _useState2[1];
  return /*#__PURE__*/React.createElement("div", {
    ref: function ref(node) {
      return node && (node === null || node === void 0 ? void 0 : node.ownerDocument) && setDoc(node.ownerDocument);
    }
  }, doc && /*#__PURE__*/React.createElement(_lapilli_ui_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalDocumentProvider, {
    document: doc
  }, /*#__PURE__*/React.createElement(_lapilli_ui_styles__WEBPACK_IMPORTED_MODULE_1__.StyledProvider, {
    document: doc
  }, children)));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Root);

/***/ }),

/***/ "./assets/js/blocks/src/base/components/search-field/index.js":
/*!********************************************************************!*\
  !*** ./assets/js/blocks/src/base/components/search-field/index.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../common */ "./assets/js/blocks/src/common.js");
/* harmony import */ var _lapilli_ui_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @lapilli-ui/components */ "@lapilli-ui/components");
/* harmony import */ var _lapilli_ui_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_lapilli_ui_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _submit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./submit */ "./assets/js/blocks/src/base/components/search-field/submit.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../config */ "./assets/js/blocks/src/config.js");






var SearchField = function SearchField(_ref) {
  var queryString = _ref.queryString,
    placeholder = _ref.placeholder,
    placeholderTextColor = _ref.placeholderTextColor,
    inputTextColor = _ref.inputTextColor,
    inputBgColor = _ref.inputBgColor,
    inputBgFocusColor = _ref.inputBgFocusColor,
    inputBorderColor = _ref.inputBorderColor,
    inputBorderFocusColor = _ref.inputBorderFocusColor,
    inputBorderSize = _ref.inputBorderSize,
    inputBorderRadius = _ref.inputBorderRadius,
    submitContentColor = _ref.submitContentColor,
    submitContentHoverColor = _ref.submitContentHoverColor,
    submitBgColor = _ref.submitBgColor,
    submitBgHoverColor = _ref.submitBgHoverColor,
    submitBorderColor = _ref.submitBorderColor,
    submitBorderHoverColor = _ref.submitBorderHoverColor,
    submitStyle = _ref.submitStyle,
    size = _ref.size,
    setSearchQuery = _ref.setSearchQuery,
    iconType = _ref.iconType,
    buttonLabel = _ref.buttonLabel,
    buttonBorderRadius = _ref.buttonBorderRadius,
    _ref$onFocus = _ref.onFocus,
    onFocus = _ref$onFocus === void 0 ? null : _ref$onFocus,
    _ref$onBlur = _ref.onBlur,
    onBlur = _ref$onBlur === void 0 ? null : _ref$onBlur,
    _ref$onCloseMobile = _ref.onCloseMobile,
    onCloseMobile = _ref$onCloseMobile === void 0 ? null : _ref$onCloseMobile,
    _ref$isSmallDevice = _ref.isSmallDevice,
    isSmallDevice = _ref$isSmallDevice === void 0 ? false : _ref$isSmallDevice;
  var getStyleOfIcon = function getStyleOfIcon() {
    return {
      borderRadius: '50%',
      backgroundColor: "".concat(submitBgColor, "!important"),
      border: '1px solid',
      borderColor: "".concat(submitBorderColor || '#FFF', " !important"),
      'svg': {
        height: submitBgColor !== '' && submitBgColor.toLowerCase() !== '#fff' && submitBgColor.toLowerCase() !== '#ffffff' ? '20px' : '24px'
      },
      '&:hover, & > sgv:hover': {
        backgroundColor: "".concat(submitBgHoverColor, "!important"),
        borderColor: "".concat(submitBorderHoverColor || '#FFF', " !important")
      }
    };
  };
  var getStyleSearchField = function getStyleSearchField() {
    return {
      '& .ywcas-input-field-wrapper': {
        flex: 1,
        borderRadius: "".concat(inputBorderRadius.topLeft, " ").concat(inputBorderRadius.topRight, " ").concat(inputBorderRadius.bottomRight, " ").concat(inputBorderRadius.bottomLeft),
        borderColor: "".concat(inputBorderColor || '#7C7C7C', "!important"),
        borderWidth: "".concat(inputBorderSize.topLeft, " ").concat(inputBorderSize.topRight, "  ").concat(inputBorderSize.bottomLeft, " ").concat(inputBorderSize.bottomRight),
        backgroundColor: "".concat(inputBgColor || '#FFF', "!important"),
        borderStyle: 'solid',
        overflow: 'hidden',
        '&:focus-within': {
          backgroundColor: "".concat(inputBgFocusColor || '#FFF', "!important"),
          borderColor: "".concat(inputBorderFocusColor || '#5B5B5B', "!important")
        },
        '& >div': {
          width: '100%',
          padding: 0,
          input: {
            flex: 1
          },
          'div:last-child': {
            display: 'none'
          }
        }
      },
      '& .ywcas-input-field input': {
        color: "".concat(inputTextColor || '#000', " !important"),
        fontSize: '1rem!important'
      },
      '& .ywcas-input-field input::placeholder': {
        color: "".concat(placeholderTextColor || '#000'),
        opacity: 1 /* Firefox */
      },
      '& .ywcas-submit-button': {
        color: "".concat(submitContentColor || '#fff', " !important"),
        backgroundColor: "".concat(submitBgColor || '#a7ab06', " !important"),
        borderColor: "".concat(submitBorderColor || '#FFF', " !important"),
        borderRadius: "".concat(buttonBorderRadius.topLeft, " ").concat(buttonBorderRadius.topRight, " ").concat(buttonBorderRadius.bottomRight, " ").concat(buttonBorderRadius.bottomLeft)
      },
      '& .ywcas-submit-button:hover': {
        color: "".concat(submitContentHoverColor || '#fff', " !important"),
        backgroundColor: "".concat(submitBgHoverColor || '#a7ab06', " !important"),
        borderColor: "".concat(submitBorderHoverColor || '#FFF', " !important")
      },
      '& .ywcas-submit-icon': {
        color: "".concat(submitContentColor || '#000', " !important")
      },
      '&:hover .ywcas-submit-icon, & .ywcas-submit-icon:hover': {
        color: "".concat(submitContentHoverColor || '#000', " !important")
      }
    };
  };
  var handleSubmit = function handleSubmit() {
    if ('' !== queryString) {
      var path = _config__WEBPACK_IMPORTED_MODULE_5__.YWCAS_SITE_URL + '?ywcas=1&post_type=product&lang=' + _config__WEBPACK_IMPORTED_MODULE_5__.YWCAS_LANG + '&s=' + queryString;
      window.location.href = path;
    }
  };
  var onKeyDown = function onKeyDown(event) {
    if (event.key === 'Enter') {
      handleSubmit();
    }
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_lapilli_ui_components__WEBPACK_IMPORTED_MODULE_3__.Box, {
    className: "ywcas-block-components-search-field",
    sx: getStyleSearchField()
  }, isSmallDevice && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "mobile-search-close",
    onClick: onCloseMobile
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Icon, {
    icon: (0,_common__WEBPACK_IMPORTED_MODULE_2__.CloseIcon)()
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_lapilli_ui_components__WEBPACK_IMPORTED_MODULE_3__.Stack, {
    direction: "row",
    spacing: 0
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_lapilli_ui_components__WEBPACK_IMPORTED_MODULE_3__.Stack, {
    className: "ywcas-input-field-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_lapilli_ui_components__WEBPACK_IMPORTED_MODULE_3__.Input, {
    className: "ywcas-input-field",
    placeholder: placeholder,
    autoComplete: "off",
    size: size,
    value: queryString,
    onChange: setSearchQuery,
    onFocus: onFocus,
    onBlur: onBlur,
    onKeyDown: onKeyDown,
    startAdornment: submitStyle === 'icon' && iconType === 'icon-left' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_lapilli_ui_components__WEBPACK_IMPORTED_MODULE_3__.Box, {
      className: "ywcas-submit-wrapper",
      sx: getStyleOfIcon()
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Icon, {
      className: "ywcas-submit-icon",
      icon: (0,_common__WEBPACK_IMPORTED_MODULE_2__.MagnifyingGlassIcon)()
    })) : null,
    endAdornment: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_submit__WEBPACK_IMPORTED_MODULE_4__["default"], {
      submitStyle: submitStyle,
      buttonLabel: buttonLabel,
      submitBgColor: submitBgColor,
      iconType: iconType,
      onClick: handleSubmit,
      wrapperStyle: getStyleOfIcon()
    })
  })))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SearchField);

/***/ }),

/***/ "./assets/js/blocks/src/base/components/search-field/submit.js":
/*!*********************************************************************!*\
  !*** ./assets/js/blocks/src/base/components/search-field/submit.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../common */ "./assets/js/blocks/src/common.js");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lapilli_ui_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @lapilli-ui/components */ "@lapilli-ui/components");
/* harmony import */ var _lapilli_ui_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_lapilli_ui_components__WEBPACK_IMPORTED_MODULE_2__);



var Submit = function Submit(_ref) {
  var submitStyle = _ref.submitStyle,
    buttonLabel = _ref.buttonLabel,
    iconType = _ref.iconType,
    onClick = _ref.onClick,
    wrapperStyle = _ref.wrapperStyle;
  switch (submitStyle) {
    case 'text':
      return /*#__PURE__*/React.createElement(_lapilli_ui_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
        className: "ywcas-submit-button",
        color: "secondary",
        size: "sm",
        onClick: onClick
      }, buttonLabel);
    case 'icon':
      return iconType === 'icon-right' && /*#__PURE__*/React.createElement(_lapilli_ui_components__WEBPACK_IMPORTED_MODULE_2__.Box, {
        className: "ywcas-submit-wrapper",
        sx: wrapperStyle
      }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Icon, {
        className: "ywcas-submit-icon",
        onClick: onClick,
        icon: (0,_common__WEBPACK_IMPORTED_MODULE_0__.MagnifyingGlassIcon)()
      }));
    case 'iconText':
      return /*#__PURE__*/React.createElement(_lapilli_ui_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
        className: "ywcas-submit-button",
        color: "secondary",
        size: "sm",
        onClick: onClick
      }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Icon, {
        className: "ywcas-submit-icon",
        icon: (0,_common__WEBPACK_IMPORTED_MODULE_0__.MagnifyingGlassIcon)()
      }), " ", buttonLabel);
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Submit);

/***/ }),

/***/ "./assets/js/blocks/src/base/context/hooks/index.js":
/*!**********************************************************!*\
  !*** ./assets/js/blocks/src/base/context/hooks/index.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useStoreSearch: () => (/* reexport safe */ _use_store_search__WEBPACK_IMPORTED_MODULE_0__.useStoreSearch)
/* harmony export */ });
/* harmony import */ var _use_store_search__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./use-store-search */ "./assets/js/blocks/src/base/context/hooks/use-store-search.js");


/***/ }),

/***/ "./assets/js/blocks/src/base/context/hooks/use-store-search.js":
/*!*********************************************************************!*\
  !*** ./assets/js/blocks/src/base/context/hooks/use-store-search.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useStoreSearch: () => (/* binding */ useStoreSearch)
/* harmony export */ });
/* harmony import */ var _providers_editor_context__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../providers/editor-context */ "./assets/js/blocks/src/base/providers/editor-context.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../data */ "./assets/js/blocks/src/data/index.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var fast_deep_equal_es6__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! fast-deep-equal/es6 */ "./node_modules/fast-deep-equal/es6/index.js");
/* harmony import */ var fast_deep_equal_es6__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(fast_deep_equal_es6__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../config */ "./assets/js/blocks/src/config.js");






var cache = {};
var useStoreSearch = function useStoreSearch() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    query: '',
    showCategories: false,
    maxResults: 5
  };
  var currentResults = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useRef)({});
  var _useEditorContext = (0,_providers_editor_context__WEBPACK_IMPORTED_MODULE_0__.useEditorContext)(),
    isEditor = _useEditorContext.isEditor;
  var query = options.query,
    showCategories = options.showCategories,
    maxResults = options.maxResults;
  var searchQuery = isEditor ? _config__WEBPACK_IMPORTED_MODULE_5__.YWCAS_DEFAULT_QUERY : query;
  var results = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useSelect)(function (select) {
    if (cache[searchQuery]) {
      return {
        results: cache[searchQuery],
        isSearching: false
      };
    } else {
      var store = select(_data__WEBPACK_IMPORTED_MODULE_1__.YWCAS_RESULTS_VIEW_STORE_KEY);
      var searchResults = store.getSearchedResults(searchQuery, 0, showCategories, maxResults, isEditor);
      var isSearching = !store.hasFinishedResolution('getSearchedResults', [searchQuery, 0, showCategories, maxResults, isEditor]);
      var data = {
        results: searchResults,
        isSearching: isSearching
      };
      if (!isSearching) {
        cache[query] = searchResults;
      }
      return data;
    }
  }, [query]);
  if (!currentResults.current || !fast_deep_equal_es6__WEBPACK_IMPORTED_MODULE_4___default()(currentResults.current, results)) {
    currentResults.current = results;
  }
  var getCategories = function getCategories(type) {
    return (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useSelect)(function (select) {
      var store = select(_data__WEBPACK_IMPORTED_MODULE_1__.YWCAS_RESULTS_VIEW_STORE_KEY);
      return {
        categories: store.getCategories(type),
        isLoading: !store.hasFinishedResolution('getCategories', [type])
      };
    }, [type]);
  };
  var getResults = function getResults() {
    var query = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    return (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useSelect)(function (select) {
      var store = select(_data__WEBPACK_IMPORTED_MODULE_1__.YWCAS_RESULTS_VIEW_STORE_KEY);
      var results = store.getResults();
      return {
        results: query && cache[query] ? cache[query] : results,
        isLoading: store.getLastQuery() === ''
      };
    }, [query]);
  };
  return {
    results: currentResults.current.results,
    isSearching: currentResults.current.isSearching,
    getCategories: getCategories,
    getResults: getResults
  };
};

/***/ }),

/***/ "./assets/js/blocks/src/base/providers/editor-context.js":
/*!***************************************************************!*\
  !*** ./assets/js/blocks/src/base/providers/editor-context.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EditorProvider: () => (/* binding */ EditorProvider),
/* harmony export */   useEditorContext: () => (/* binding */ useEditorContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__);
/**
 * External dependencies
 */



var EditorContext = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createContext)({
  isEditor: false,
  currentPostId: 0,
  currentView: '',
  previewData: {},
  getPreviewData: function getPreviewData() {
    return {};
  }
});
var useEditorContext = function useEditorContext() {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useContext)(EditorContext);
};
var EditorProvider = function EditorProvider(_ref) {
  var children = _ref.children,
    _ref$currentPostId = _ref.currentPostId,
    currentPostId = _ref$currentPostId === void 0 ? 0 : _ref$currentPostId,
    _ref$previewData = _ref.previewData,
    previewData = _ref$previewData === void 0 ? {} : _ref$previewData,
    _ref$currentView = _ref.currentView,
    currentView = _ref$currentView === void 0 ? '' : _ref$currentView,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 'small' : _ref$size,
    _ref$isPreview = _ref.isPreview,
    isPreview = _ref$isPreview === void 0 ? false : _ref$isPreview;
  var editingPostId = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.useSelect)(function (select) {
    var _select;
    return currentPostId ? currentPostId : (_select = select('core/editor')) === null || _select === void 0 ? void 0 : _select.getCurrentPostId();
  }, [currentPostId]);
  var getPreviewData = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function (name) {
    if (previewData && name in previewData) {
      return previewData[name];
    }
    return {};
  }, [previewData]);
  var editorData = {
    isEditor: true,
    currentPostId: editingPostId,
    currentView: currentView,
    previewData: previewData,
    getPreviewData: getPreviewData,
    isPreview: isPreview,
    size: size
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(EditorContext.Provider, {
    value: editorData
  }, children);
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

/***/ "./assets/js/blocks/src/blocks/search-block/edit.js":
/*!**********************************************************!*\
  !*** ./assets/js/blocks/src/blocks/search-block/edit.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _inner_blocks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./inner-blocks */ "./assets/js/blocks/src/blocks/search-block/inner-blocks/index.js");
/* harmony import */ var _base_providers_editor_context__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../base/providers/editor-context */ "./assets/js/blocks/src/base/providers/editor-context.js");
/* harmony import */ var _base_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../base/components */ "./assets/js/blocks/src/base/components/index.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../common */ "./assets/js/blocks/src/common.js");
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











// Array of allowed block names.
var ALLOWED_BLOCKS = ['yith/empty-block', 'yith/fill-block', 'yith/input-block'];
var Edit = function Edit(_ref) {
  var attributes = _ref.attributes,
    setAttributes = _ref.setAttributes;
  var blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.useBlockProps)();
  var currentView = attributes.currentView,
    _attributes$isPreview = attributes.isPreview,
    isPreview = _attributes$isPreview === void 0 ? false : _attributes$isPreview,
    size = attributes.size;
  var defaultTemplate = [['yith/input-block', {}, []], ['yith/filled-block', {}, []], ['yith/empty-block', {}, []]];
  var classes = classnames__WEBPACK_IMPORTED_MODULE_1___default()('ywcas-classic-search', (0,_common__WEBPACK_IMPORTED_MODULE_9__.getSizeClassName)(size));
  blockProps.className = blockProps.className + ' ' + classes;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", _extends({}, blockProps, {
    style: {
      marginLeft: '20px',
      marginRight: '20px'
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InspectorControls, {
    key: "inspector"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__.__)('Settings', 'yith-woocommerce-ajax-search'),
    initialOpen: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__.__)('Size', 'yith-woocommerce-ajax-search'),
    value: size,
    options: [{
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__.__)('Small', 'yith-woocommerce-ajax-search'),
      value: 'sm'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__.__)('Large', 'yith-woocommerce-ajax-search'),
      value: 'lg'
    }],
    onChange: function onChange(value) {
      return setAttributes({
        size: value
      });
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_base_providers_editor_context__WEBPACK_IMPORTED_MODULE_6__.EditorProvider, {
    currentView: currentView,
    isPreview: isPreview,
    size: size,
    previewData: []
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_base_components__WEBPACK_IMPORTED_MODULE_7__.Root, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InnerBlocks, {
    allowedBlocks: ALLOWED_BLOCKS,
    template: defaultTemplate,
    templateLock: "insert"
  }))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_4__.withInstanceId)(Edit));

/***/ }),

/***/ "./assets/js/blocks/src/blocks/search-block/index.js":
/*!***********************************************************!*\
  !*** ./assets/js/blocks/src/blocks/search-block/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common */ "./assets/js/blocks/src/common.js");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit */ "./assets/js/blocks/src/blocks/search-block/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./save */ "./assets/js/blocks/src/blocks/search-block/save.js");
/* harmony import */ var _attributes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./attributes */ "./assets/js/blocks/src/blocks/search-block/attributes.js");






var blockConfig = {
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Classic Search', 'yith-woocommerce-ajax-search'),
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Add the classic search block', 'yith-woocommerce-ajax-search'),
  icon: _common__WEBPACK_IMPORTED_MODULE_2__.yith_icon,
  apiVersion: 2,
  category: 'yith-blocks',
  keywords: ['search', 'yith', 'ajax'],
  supports: {
    align: ['wide'],
    html: true,
    multiple: true,
    inserter: true
  },
  edit: _edit__WEBPACK_IMPORTED_MODULE_3__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_4__["default"],
  attributes: _attributes__WEBPACK_IMPORTED_MODULE_5__.blockAttributes
};
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_attributes__WEBPACK_IMPORTED_MODULE_5__.blockName, blockConfig);

/***/ }),

/***/ "./assets/js/blocks/src/blocks/search-block/inner-blocks/empty-block/edit.js":
/*!***********************************************************************************!*\
  !*** ./assets/js/blocks/src/blocks/search-block/inner-blocks/empty-block/edit.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _base_providers_editor_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../base/providers/editor-context */ "./assets/js/blocks/src/base/providers/editor-context.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared */ "./assets/js/blocks/src/shared/index.js");
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





var Edit = function Edit(_ref) {
  var clientId = _ref.clientId;
  var blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.useBlockProps)();
  var _useEditorContext = (0,_base_providers_editor_context__WEBPACK_IMPORTED_MODULE_1__.useEditorContext)(),
    currentView = _useEditorContext.currentView;
  var defaultTemplate = [['yith/history-block', {}, []], ['yith/popular-block', {}, []]];
  var allowedBlocks = ['yith/history-block', 'yith/popular-block', 'core/column', 'core/columns', 'core/heading', 'core/paragraph', 'core/image', 'core/buttons', 'core/group', 'core/spacer'];
  (0,_shared__WEBPACK_IMPORTED_MODULE_3__.useForcedLayout)({
    clientId: clientId,
    registeredBlocks: allowedBlocks,
    defaultTemplate: defaultTemplate
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", _extends({}, blockProps, {
    hidden: currentView !== 'yith/empty-block'
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    className: "wp-block-yith-popover-empty-block"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.InnerBlocks, {
    allowedBlocks: allowedBlocks,
    template: defaultTemplate,
    templateLock: false,
    renderAppender: _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.InnerBlocks.ButtonBlockAppender
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Edit);

/***/ }),

/***/ "./assets/js/blocks/src/blocks/search-block/inner-blocks/empty-block/index.js":
/*!************************************************************************************!*\
  !*** ./assets/js/blocks/src/blocks/search-block/inner-blocks/empty-block/index.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./assets/js/blocks/src/blocks/search-block/inner-blocks/empty-block/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./save */ "./assets/js/blocks/src/blocks/search-block/inner-blocks/empty-block/save.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../common */ "./assets/js/blocks/src/common.js");




(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)('yith/empty-block', {
  icon: _common__WEBPACK_IMPORTED_MODULE_3__.yith_icon,
  edit: _edit__WEBPACK_IMPORTED_MODULE_1__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_2__["default"]
});

/***/ }),

/***/ "./assets/js/blocks/src/blocks/search-block/inner-blocks/empty-block/save.js":
/*!***********************************************************************************!*\
  !*** ./assets/js/blocks/src/blocks/search-block/inner-blocks/empty-block/save.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);


var Save = function Save() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps.save(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InnerBlocks.Content, null));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Save);

/***/ }),

/***/ "./assets/js/blocks/src/blocks/search-block/inner-blocks/filled-block/edit.js":
/*!************************************************************************************!*\
  !*** ./assets/js/blocks/src/blocks/search-block/inner-blocks/filled-block/edit.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _base_providers_editor_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../base/providers/editor-context */ "./assets/js/blocks/src/base/providers/editor-context.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared */ "./assets/js/blocks/src/shared/index.js");
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




var Edit = function Edit(_ref) {
  var clientId = _ref.clientId;
  var blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.useBlockProps)();
  var _useEditorContext = (0,_base_providers_editor_context__WEBPACK_IMPORTED_MODULE_1__.useEditorContext)(),
    currentView = _useEditorContext.currentView;
  var defaultTemplate = [['yith/related-categories-block', {}, []], ['core/separator', {
    align: 'wide',
    className: "is-style-wide ywcas-separator",
    style: {
      color: {
        background: '#9797972e'
      },
      spacing: {
        margin: {
          top: '10px',
          bottom: '10px'
        }
      }
    }
  }, []], ['yith/product-results-block', {}, []], ['yith/related-posts-block', {}, []]];
  var allowedBlocks = ['yith/history-block', 'yith/popular-block', 'yith/product-results-block', 'yith/related-categories-block', 'yith/related-posts-block', 'core/column', 'core/columns', 'core/heading', 'core/paragraph', 'core/image', 'core/buttons', 'core/group', 'core/separator', 'core/spacer'];
  (0,_shared__WEBPACK_IMPORTED_MODULE_3__.useForcedLayout)({
    clientId: clientId,
    registeredBlocks: allowedBlocks,
    defaultTemplate: defaultTemplate
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", _extends({}, blockProps, {
    hidden: currentView !== 'yith/filled-block'
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    className: "wp-block-yith-popover-filled-block"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.InnerBlocks, {
    allowedBlocks: allowedBlocks,
    template: defaultTemplate,
    templateLock: false,
    renderAppender: _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.InnerBlocks.ButtonBlockAppender
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Edit);

/***/ }),

/***/ "./assets/js/blocks/src/blocks/search-block/inner-blocks/filled-block/index.js":
/*!*************************************************************************************!*\
  !*** ./assets/js/blocks/src/blocks/search-block/inner-blocks/filled-block/index.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./assets/js/blocks/src/blocks/search-block/inner-blocks/filled-block/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./save */ "./assets/js/blocks/src/blocks/search-block/inner-blocks/filled-block/save.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../common */ "./assets/js/blocks/src/common.js");
/**
 * External dependencies
 */


/**
 * Internal dependencies
 */



(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)('yith/filled-block', {
  icon: _common__WEBPACK_IMPORTED_MODULE_3__.yith_icon,
  edit: _edit__WEBPACK_IMPORTED_MODULE_1__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_2__["default"]
});

/***/ }),

/***/ "./assets/js/blocks/src/blocks/search-block/inner-blocks/filled-block/save.js":
/*!************************************************************************************!*\
  !*** ./assets/js/blocks/src/blocks/search-block/inner-blocks/filled-block/save.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);


var Save = function Save() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps.save(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InnerBlocks.Content, null));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Save);

/***/ }),

/***/ "./assets/js/blocks/src/blocks/search-block/inner-blocks/history-block/attributes.js":
/*!*******************************************************************************************!*\
  !*** ./assets/js/blocks/src/blocks/search-block/inner-blocks/history-block/attributes.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../config */ "./assets/js/blocks/src/config.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  historyHeading: {
    type: 'string',
    "default": _config__WEBPACK_IMPORTED_MODULE_0__.ywcasDefaultSettings.historyLabel
  },
  maxHistoryResults: {
    type: 'number',
    "default": _config__WEBPACK_IMPORTED_MODULE_0__.ywcasDefaultSettings.maxHistoryResults
  }
});

/***/ }),

/***/ "./assets/js/blocks/src/blocks/search-block/inner-blocks/history-block/edit.js":
/*!*************************************************************************************!*\
  !*** ./assets/js/blocks/src/blocks/search-block/inner-blocks/history-block/edit.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _base_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../base/components */ "./assets/js/blocks/src/base/components/index.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../config */ "./assets/js/blocks/src/config.js");







var Edit = function Edit(_ref) {
  var attributes = _ref.attributes,
    setAttributes = _ref.setAttributes,
    className = _ref.className,
    align = _ref.align;
  var classes = classnames__WEBPACK_IMPORTED_MODULE_4___default()('ywcas-last-searches-wrapper', align ? align : '', className);
  var blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps)();
  var historyHeading = attributes.historyHeading,
    maxHistoryResults = attributes.maxHistoryResults;
  var historyItems = _config__WEBPACK_IMPORTED_MODULE_6__.history.slice(0, maxHistoryResults);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", blockProps, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InspectorControls, {
    key: "inspector"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Settings', 'yith-woocommerce-ajax-search'),
    initialOpen: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Label', 'yith-woocommerce-ajax-search'),
    className: "wc-block-product-search__field input-control",
    value: historyHeading,
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Enter the label for the search history', 'yith-woocommerce-ajax-search'),
    onChange: function onChange(value) {
      return setAttributes({
        historyHeading: value
      });
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RangeControl, {
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Please, select the maximum number of the latest searches results', 'yith-woocommerce-ajax-search'),
    initialPosition: maxHistoryResults,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Max latest search items', 'yith-woocommerce-ajax-search'),
    max: 10,
    min: 1,
    onBlur: function noRefCheck() {},
    onChange: function onChange(value) {
      return setAttributes({
        maxHistoryResults: value
      });
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Disabled, null, historyItems && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_base_components__WEBPACK_IMPORTED_MODULE_5__.HistorySearches, {
    title: historyHeading,
    searches: historyItems,
    onClick: null
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Edit);

/***/ }),

/***/ "./assets/js/blocks/src/blocks/search-block/inner-blocks/history-block/index.js":
/*!**************************************************************************************!*\
  !*** ./assets/js/blocks/src/blocks/search-block/inner-blocks/history-block/index.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./assets/js/blocks/src/blocks/search-block/inner-blocks/history-block/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./save */ "./assets/js/blocks/src/blocks/search-block/inner-blocks/history-block/save.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../common */ "./assets/js/blocks/src/common.js");
/* harmony import */ var _attributes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./attributes */ "./assets/js/blocks/src/blocks/search-block/inner-blocks/history-block/attributes.js");





(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)('yith/history-block', {
  icon: _common__WEBPACK_IMPORTED_MODULE_3__.yith_icon,
  attributes: _attributes__WEBPACK_IMPORTED_MODULE_4__["default"],
  edit: _edit__WEBPACK_IMPORTED_MODULE_1__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_2__["default"]
});

/***/ }),

/***/ "./assets/js/blocks/src/blocks/search-block/inner-blocks/history-block/save.js":
/*!*************************************************************************************!*\
  !*** ./assets/js/blocks/src/blocks/search-block/inner-blocks/history-block/save.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);


var Save = function Save() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps.save(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InnerBlocks.Content, null));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Save);

/***/ }),

/***/ "./assets/js/blocks/src/blocks/search-block/inner-blocks/index.js":
/*!************************************************************************!*\
  !*** ./assets/js/blocks/src/blocks/search-block/inner-blocks/index.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _filled_block__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./filled-block */ "./assets/js/blocks/src/blocks/search-block/inner-blocks/filled-block/index.js");
/* harmony import */ var _empty_block__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./empty-block */ "./assets/js/blocks/src/blocks/search-block/inner-blocks/empty-block/index.js");
/* harmony import */ var _input_block__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./input-block */ "./assets/js/blocks/src/blocks/search-block/inner-blocks/input-block/index.js");
/* harmony import */ var _popular_block__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./popular-block */ "./assets/js/blocks/src/blocks/search-block/inner-blocks/popular-block/index.js");
/* harmony import */ var _history_block__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./history-block */ "./assets/js/blocks/src/blocks/search-block/inner-blocks/history-block/index.js");
/* harmony import */ var _product_results_block__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./product-results-block */ "./assets/js/blocks/src/blocks/search-block/inner-blocks/product-results-block/index.js");
/* harmony import */ var _related_categories_block__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./related-categories-block */ "./assets/js/blocks/src/blocks/search-block/inner-blocks/related-categories-block/index.js");
/* harmony import */ var _related_posts_block__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./related-posts-block */ "./assets/js/blocks/src/blocks/search-block/inner-blocks/related-posts-block/index.js");









/***/ }),

/***/ "./assets/js/blocks/src/blocks/search-block/inner-blocks/input-block/border-size-control/all-input-control.js":
/*!********************************************************************************************************************!*\
  !*** ./assets/js/blocks/src/blocks/search-block/inner-blocks/input-block/border-size-control/all-input-control.js ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AllInputControl)
/* harmony export */ });
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "./assets/js/blocks/src/blocks/search-block/inner-blocks/input-block/border-size-control/utils.js");
var _excluded = ["onChange", "selectedUnits", "setSelectedUnits", "values"];
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
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */

function AllInputControl(_ref) {
  var onChange = _ref.onChange,
    selectedUnits = _ref.selectedUnits,
    setSelectedUnits = _ref.setSelectedUnits,
    values = _ref.values,
    props = _objectWithoutProperties(_ref, _excluded);
  var allValue = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.getAllValue)(values);
  if (allValue === undefined) {
    // If we don't have any value set the unit to any current selection
    // or the most common unit from the individual radii values.
    allValue = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.getAllUnit)(selectedUnits);
  }
  var hasValues = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.hasDefinedValues)(values);
  var isMixed = hasValues && (0,_utils__WEBPACK_IMPORTED_MODULE_2__.hasMixedValues)(values);
  var allPlaceholder = isMixed ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Mixed') : null;

  // Filter out CSS-unit-only values to prevent invalid styles.
  var handleOnChange = function handleOnChange(next) {
    var isNumeric = !isNaN(parseFloat(next));
    var nextValue = isNumeric ? next : undefined;
    onChange(nextValue);
  };

  // Store current unit selection for use as fallback for individual
  // radii controls.
  var handleOnUnitChange = function handleOnUnitChange(unit) {
    setSelectedUnits({
      topLeft: unit,
      topRight: unit,
      bottomLeft: unit,
      bottomRight: unit
    });
  };
  return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.__experimentalUnitControl, _extends({}, props, {
    "aria-label": (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Border radius'),
    disableUnits: isMixed,
    isOnly: true,
    value: allValue,
    onChange: handleOnChange,
    onUnitChange: handleOnUnitChange,
    placeholder: allPlaceholder,
    size: '__unstable-large'
  }));
}

/***/ }),

/***/ "./assets/js/blocks/src/blocks/search-block/inner-blocks/input-block/border-size-control/index.js":
/*!********************************************************************************************************!*\
  !*** ./assets/js/blocks/src/blocks/search-block/inner-blocks/input-block/border-size-control/index.js ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "./assets/js/blocks/src/blocks/search-block/inner-blocks/input-block/border-size-control/utils.js");
/* harmony import */ var _all_input_control__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./all-input-control */ "./assets/js/blocks/src/blocks/search-block/inner-blocks/input-block/border-size-control/all-input-control.js");
/* harmony import */ var _input_controls__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./input-controls */ "./assets/js/blocks/src/blocks/search-block/inner-blocks/input-block/border-size-control/input-controls.js");
/* harmony import */ var _linked_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./linked-button */ "./assets/js/blocks/src/blocks/search-block/inner-blocks/input-block/border-size-control/linked-button.js");
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
 * WordPress dependencies
 */






var DEFAULT_VALUES = {
  topLeft: undefined,
  topRight: undefined,
  bottomLeft: undefined,
  bottomRight: undefined
};
var MIN_BORDER_RADIUS_VALUE = 0;
var MAX_BORDER_RADIUS_VALUES = {
  px: 100,
  em: 20,
  rem: 20
};
var BorderSizeControl = function BorderSizeControl(_ref) {
  var label = _ref.label,
    values = _ref.values,
    onChange = _ref.onChange,
    type = _ref.type;
  var _useState = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(!(0,_utils__WEBPACK_IMPORTED_MODULE_2__.hasDefinedValues)(values) || !(0,_utils__WEBPACK_IMPORTED_MODULE_2__.hasMixedValues)(values)),
    _useState2 = _slicedToArray(_useState, 2),
    isLinked = _useState2[0],
    setIsLinked = _useState2[1];
  var _useState3 = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)({
      flat: typeof values === 'string' ? (0,_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.__experimentalParseQuantityAndUnitFromRawValue)(values)[1] : undefined,
      topLeft: (0,_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.__experimentalParseQuantityAndUnitFromRawValue)(values === null || values === void 0 ? void 0 : values.topLeft)[1],
      topRight: (0,_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.__experimentalParseQuantityAndUnitFromRawValue)(values === null || values === void 0 ? void 0 : values.topRight)[1],
      bottomLeft: (0,_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.__experimentalParseQuantityAndUnitFromRawValue)(values === null || values === void 0 ? void 0 : values.bottomLeft)[1],
      bottomRight: (0,_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.__experimentalParseQuantityAndUnitFromRawValue)(values === null || values === void 0 ? void 0 : values.bottomRight)[1]
    }),
    _useState4 = _slicedToArray(_useState3, 2),
    selectedUnits = _useState4[0],
    setSelectedUnits = _useState4[1];
  var units = (0,_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.__experimentalUseCustomUnits)({
    availableUnits: ['px', 'em', 'rem']
  });
  var unit = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.getAllUnit)(selectedUnits);
  var unitConfig = units && units.find(function (item) {
    return item.value === unit;
  });
  var step = (unitConfig === null || unitConfig === void 0 ? void 0 : unitConfig.step) || 1;
  var _parseQuantityAndUnit = (0,_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.__experimentalParseQuantityAndUnitFromRawValue)((0,_utils__WEBPACK_IMPORTED_MODULE_2__.getAllValue)(values)),
    _parseQuantityAndUnit2 = _slicedToArray(_parseQuantityAndUnit, 1),
    allValue = _parseQuantityAndUnit2[0];
  var toggleLinked = function toggleLinked() {
    return setIsLinked(!isLinked);
  };
  var handleSliderChange = function handleSliderChange(next) {
    onChange(next !== undefined ? "".concat(next).concat(unit) : undefined);
  };
  return /*#__PURE__*/React.createElement("fieldset", {
    className: "components-border-radius-control"
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.BaseControl.VisualLabel, {
    as: "legend"
  }, label), /*#__PURE__*/React.createElement("div", {
    className: "components-border-radius-control__wrapper"
  }, isLinked ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_all_input_control__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: "components-border-radius-control__unit-control",
    values: values,
    min: MIN_BORDER_RADIUS_VALUE,
    onChange: onChange,
    selectedUnits: selectedUnits,
    setSelectedUnits: setSelectedUnits,
    units: units
  }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.RangeControl, {
    label: label,
    hideLabelFromVision: true,
    className: "components-border-radius-control__range-control",
    value: allValue !== null && allValue !== void 0 ? allValue : '',
    min: MIN_BORDER_RADIUS_VALUE,
    max: MAX_BORDER_RADIUS_VALUES[unit],
    initialPosition: 0,
    withInputField: false,
    onChange: handleSliderChange,
    step: step,
    __nextHasNoMarginBottom: true
  })) : /*#__PURE__*/React.createElement(_input_controls__WEBPACK_IMPORTED_MODULE_4__["default"], {
    min: MIN_BORDER_RADIUS_VALUE,
    onChange: onChange,
    selectedUnits: selectedUnits,
    setSelectedUnits: setSelectedUnits,
    values: values || DEFAULT_VALUES,
    units: units,
    type: type
  }), /*#__PURE__*/React.createElement(_linked_button__WEBPACK_IMPORTED_MODULE_5__["default"], {
    onClick: toggleLinked,
    isLinked: isLinked
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BorderSizeControl);

/***/ }),

/***/ "./assets/js/blocks/src/blocks/search-block/inner-blocks/input-block/border-size-control/input-controls.js":
/*!*****************************************************************************************************************!*\
  !*** ./assets/js/blocks/src/blocks/search-block/inner-blocks/input-block/border-size-control/input-controls.js ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BoxInputControls)
/* harmony export */ });
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}
var _excluded = ["onChange", "selectedUnits", "setSelectedUnits", "type", "values"];
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
 * WordPress dependencies
 */


var CORNERS = {
  topLeft: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Top left'),
  topRight: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Top right'),
  bottomLeft: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Bottom left'),
  bottomRight: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Bottom right')
};
var SIDES = {
  topLeft: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Top'),
  topRight: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Right'),
  bottomLeft: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Bottom'),
  bottomRight: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)(' Left')
};
function BoxInputControls(_ref) {
  var onChange = _ref.onChange,
    selectedUnits = _ref.selectedUnits,
    setSelectedUnits = _ref.setSelectedUnits,
    type = _ref.type,
    valuesProp = _ref.values,
    props = _objectWithoutProperties(_ref, _excluded);
  var createHandleOnChange = function createHandleOnChange(corner) {
    return function (next) {
      if (!onChange) {
        return;
      }

      // Filter out CSS-unit-only values to prevent invalid styles.
      var isNumeric = !isNaN(parseFloat(next));
      var nextValue = isNumeric ? next : undefined;
      onChange(_objectSpread(_objectSpread({}, values), {}, _defineProperty({}, corner, nextValue)));
    };
  };
  var createHandleOnUnitChange = function createHandleOnUnitChange(side) {
    return function (next) {
      var newUnits = _objectSpread({}, selectedUnits);
      newUnits[side] = next;
      setSelectedUnits(newUnits);
    };
  };

  // For shorthand style & backwards compatibility, handle flat string value.
  var values = typeof valuesProp !== 'string' ? valuesProp : {
    topLeft: valuesProp,
    topRight: valuesProp,
    bottomLeft: valuesProp,
    bottomRight: valuesProp
  };
  var items = type === 'border' ? SIDES : CORNERS;
  return /*#__PURE__*/React.createElement("div", {
    className: "components-border-radius-control__input-controls-wrapper"
  }, Object.entries(items).map(function (_ref2) {
    var _ref3 = _slicedToArray(_ref2, 2),
      corner = _ref3[0],
      label = _ref3[1];
    var _parseQuantityAndUnit = (0,_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.__experimentalParseQuantityAndUnitFromRawValue)(values[corner]),
      _parseQuantityAndUnit2 = _slicedToArray(_parseQuantityAndUnit, 2),
      parsedQuantity = _parseQuantityAndUnit2[0],
      parsedUnit = _parseQuantityAndUnit2[1];
    var computedUnit = values[corner] ? parsedUnit : selectedUnits[corner] || selectedUnits.flat;
    return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Tooltip, {
      text: label,
      position: "top",
      key: corner
    }, /*#__PURE__*/React.createElement("div", {
      className: "components-border-radius-control__tooltip-wrapper"
    }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.__experimentalUnitControl, _extends({}, props, {
      "aria-label": label,
      value: [parsedQuantity, computedUnit].join(''),
      onChange: createHandleOnChange(corner),
      onUnitChange: createHandleOnUnitChange(corner),
      size: '__unstable-large'
    }))));
  }));
}

/***/ }),

/***/ "./assets/js/blocks/src/blocks/search-block/inner-blocks/input-block/border-size-control/linked-button.js":
/*!****************************************************************************************************************!*\
  !*** ./assets/js/blocks/src/blocks/search-block/inner-blocks/input-block/border-size-control/linked-button.js ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LinkedButton)
/* harmony export */ });
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/link.js");
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/link-off.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
var _excluded = ["isLinked"];
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
 * WordPress dependencies
 */



function LinkedButton(_ref) {
  var isLinked = _ref.isLinked,
    props = _objectWithoutProperties(_ref, _excluded);
  var label = isLinked ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Unlink radii') : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Link radii');

  // TODO: Remove span after merging https://github.com/WordPress/gutenberg/pull/44198
  return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Tooltip, {
    text: label
  }, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Button, _extends({}, props, {
    className: "component-border-radius-control__linked-button",
    isSmall: true,
    icon: isLinked ? _wordpress_icons__WEBPACK_IMPORTED_MODULE_2__["default"] : _wordpress_icons__WEBPACK_IMPORTED_MODULE_3__["default"],
    iconSize: 24,
    "aria-label": label
  }))));
}

/***/ }),

/***/ "./assets/js/blocks/src/blocks/search-block/inner-blocks/input-block/border-size-control/utils.js":
/*!********************************************************************************************************!*\
  !*** ./assets/js/blocks/src/blocks/search-block/inner-blocks/input-block/border-size-control/utils.js ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getAllUnit: () => (/* binding */ getAllUnit),
/* harmony export */   getAllValue: () => (/* binding */ getAllValue),
/* harmony export */   hasDefinedValues: () => (/* binding */ hasDefinedValues),
/* harmony export */   hasMixedValues: () => (/* binding */ hasMixedValues),
/* harmony export */   mode: () => (/* binding */ mode)
/* harmony export */ });
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);
var _excluded = ["flat"];
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
function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
/**
 * WordPress dependencies
 */


/**
 * Gets the (non-undefined) item with the highest occurrence within an array
 * Based in part on: https://stackoverflow.com/a/20762713
 *
 * Undefined values are always sorted to the end by `sort`, so this function
 * returns the first element, to always prioritize real values over undefined
 * values.
 *
 * See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort#description
 *
 * @param {Array<any>} inputArray Array of items to check.
 * @return {any}                  The item with the most occurrences.
 */
function mode(inputArray) {
  var arr = _toConsumableArray(inputArray);
  return arr.sort(function (a, b) {
    return inputArray.filter(function (v) {
      return v === b;
    }).length - inputArray.filter(function (v) {
      return v === a;
    }).length;
  }).shift();
}

/**
 * Gets the 'all' input value and unit from values data.
 *
 * @param {Object|string} values Radius values.
 * @return {string}              A value + unit for the 'all' input.
 */
function getAllValue() {
  var values = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  /**
   * Border radius support was originally a single pixel value.
   *
   * To maintain backwards compatibility treat this case as the all value.
   */
  if (typeof values === 'string') {
    return values;
  }
  var parsedQuantitiesAndUnits = Object.values(values).map(function (value) {
    return (0,_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.__experimentalParseQuantityAndUnitFromRawValue)(value);
  });
  var allValues = parsedQuantitiesAndUnits.map(function (value) {
    var _value$;
    return (_value$ = value[0]) !== null && _value$ !== void 0 ? _value$ : '';
  });
  var allUnits = parsedQuantitiesAndUnits.map(function (value) {
    return value[1];
  });
  var value = allValues.every(function (v) {
    return v === allValues[0];
  }) ? allValues[0] : '';
  var unit = mode(allUnits);
  var allValue = value === 0 || value ? "".concat(value).concat(unit) : undefined;
  return allValue;
}

/**
 * Returns the most common CSS unit from the current CSS unit selections.
 *
 * - If a single flat border radius is set, its unit will be used
 * - If individual corner selections, the most common of those will be used
 * - Failing any unit selections a default of 'px' is returned.
 *
 * @param {Object} selectedUnits Unit selections for flat radius & each corner.
 * @return {string} Most common CSS unit from current selections. Default: `px`.
 */
function getAllUnit() {
  var selectedUnits = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var flat = selectedUnits.flat,
    cornerUnits = _objectWithoutProperties(selectedUnits, _excluded);
  return flat || mode(Object.values(cornerUnits).filter(Boolean)) || 'px';
}

/**
 * Checks to determine if values are mixed.
 *
 * @param {Object} values Radius values.
 * @return {boolean}      Whether values are mixed.
 */
function hasMixedValues() {
  var values = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var allValue = getAllValue(values);
  var isMixed = typeof values === 'string' ? false : isNaN(parseFloat(allValue));
  return isMixed;
}

/**
 * Checks to determine if values are defined.
 *
 * @param {Object} values Radius values.
 * @return {boolean}      Whether values are mixed.
 */
function hasDefinedValues(values) {
  if (!values) {
    return false;
  }

  // A string value represents a shorthand value.
  if (typeof values === 'string') {
    return true;
  }

  // An object represents longhand border radius values, if any are set
  // flag values as being defined.
  var filteredValues = Object.values(values).filter(function (value) {
    return !!value || value === 0;
  });
  return !!filteredValues.length;
}

/***/ }),

/***/ "./assets/js/blocks/src/blocks/search-block/inner-blocks/input-block/edit.js":
/*!***********************************************************************************!*\
  !*** ./assets/js/blocks/src/blocks/search-block/inner-blocks/input-block/edit.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _base_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../base/components */ "./assets/js/blocks/src/base/components/index.js");
/* harmony import */ var _border_size_control__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./border-size-control */ "./assets/js/blocks/src/blocks/search-block/inner-blocks/input-block/border-size-control/index.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../config */ "./assets/js/blocks/src/config.js");
/* harmony import */ var _base_providers_editor_context__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../base/providers/editor-context */ "./assets/js/blocks/src/base/providers/editor-context.js");
function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
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









var Edit = function Edit(_ref) {
  var attributes = _ref.attributes,
    className = _ref.className,
    setAttributes = _ref.setAttributes,
    align = _ref.align;
  var placeholder = attributes.placeholder,
    submitContentColor = attributes.submitContentColor,
    submitContentHoverColor = attributes.submitContentHoverColor,
    submitBgColor = attributes.submitBgColor,
    submitBgHoverColor = attributes.submitBgHoverColor,
    submitBorderColor = attributes.submitBorderColor,
    submitBorderHoverColor = attributes.submitBorderHoverColor,
    inputBorderSize = attributes.inputBorderSize,
    inputBorderRadius = attributes.inputBorderRadius,
    placeholderTextColor = attributes.placeholderTextColor,
    inputTextColor = attributes.inputTextColor,
    inputBgColor = attributes.inputBgColor,
    inputBgFocusColor = attributes.inputBgFocusColor,
    inputBorderColor = attributes.inputBorderColor,
    inputBorderFocusColor = attributes.inputBorderFocusColor,
    iconType = attributes.iconType,
    buttonLabel = attributes.buttonLabel,
    buttonBorderRadius = attributes.buttonBorderRadius,
    submitStyle = attributes.submitStyle;
  var blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps)();
  var _useEditorContext = (0,_base_providers_editor_context__WEBPACK_IMPORTED_MODULE_8__.useEditorContext)(),
    size = _useEditorContext.size;
  var classes = classnames__WEBPACK_IMPORTED_MODULE_1___default()('yith-input-block', align ? 'align' + align : '', className);
  var submitSelectColorsLabels = [{
    key: 'icon',
    value: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Icon', 'yith-woocommerce-ajax-search')
  }, {
    key: 'text',
    value: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Text', 'yith-woocommerce-ajax-search')
  }, {
    key: 'iconText',
    value: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Text and Icon', 'yith-woocommerce-ajax-search')
  }, {
    key: 'iconHover',
    value: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Icon Hover', 'yith-woocommerce-ajax-search')
  }, {
    key: 'textHover',
    value: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Text Hover', 'yith-woocommerce-ajax-search')
  }, {
    key: 'iconTextHover',
    value: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Text and Icon Hover', 'yith-woocommerce-ajax-search')
  }];
  var labelSubmitContent = submitSelectColorsLabels.find(function (item) {
    return item.key === submitStyle;
  });
  var labelSubmitContentHover = submitSelectColorsLabels.find(function (item) {
    return item.key === submitStyle + 'Hover';
  });
  var handleBorderControlChange = function handleBorderControlChange(value, attribute) {
    var newBorderSize = value;
    if (typeof value === 'string') {
      newBorderSize = {
        topLeft: value,
        topRight: value,
        bottomLeft: value,
        bottomRight: value
      };
    }
    var newAttributes = _objectSpread({}, attributes);
    newAttributes[attribute] = newBorderSize;
    setAttributes(newAttributes);
  };
  var submitSettings = [{
    label: labelSubmitContent.value,
    onColorChange: function onColorChange(color) {
      return setAttributes({
        submitContentColor: color
      });
    },
    colorValue: submitContentColor
  }, {
    label: labelSubmitContentHover.value,
    onColorChange: function onColorChange(color) {
      return setAttributes({
        submitContentHoverColor: color
      });
    },
    colorValue: submitContentHoverColor
  }, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Background', 'yith-woocommerce-ajax-search'),
    onColorChange: function onColorChange(color) {
      return setAttributes({
        submitBgColor: color
      });
    },
    colorValue: submitBgColor
  }, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Background Hover', 'yith-woocommerce-ajax-search'),
    onColorChange: function onColorChange(color) {
      return setAttributes({
        submitBgHoverColor: color
      });
    },
    colorValue: submitBgHoverColor
  }, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Border', 'yith-woocommerce-ajax-search'),
    onColorChange: function onColorChange(color) {
      return setAttributes({
        submitBorderColor: color
      });
    },
    colorValue: submitBorderColor
  }, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Border Hover', 'yith-woocommerce-ajax-search'),
    onColorChange: function onColorChange(color) {
      return setAttributes({
        submitBorderHoverColor: color
      });
    },
    colorValue: submitBorderHoverColor
  }];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InspectorControls, {
    key: "inspector"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Search input settings', 'yith-woocommerce-ajax-search'),
    initialOpen: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Placeholder', 'yith-woocommerce-ajax-search'),
    className: "ywcas-block-input__field input-control",
    value: placeholder,
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Enter search placeholder text', 'yith-woocommerce-ajax-search'),
    onChange: function onChange(value) {
      return setAttributes({
        placeholder: value
      });
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_border_size_control__WEBPACK_IMPORTED_MODULE_6__["default"], {
    type: "border",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Border Size', 'yith-woocommerce-ajax-search'),
    values: inputBorderSize,
    onChange: function onChange(value) {
      return handleBorderControlChange(value, 'inputBorderSize');
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_border_size_control__WEBPACK_IMPORTED_MODULE_6__["default"], {
    type: "radius",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Border radius', 'yith-woocommerce-ajax-search'),
    values: inputBorderRadius,
    onChange: function onChange(value) {
      return handleBorderControlChange(value, 'inputBorderRadius');
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.__experimentalPanelColorGradientSettings, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Color Settings', 'yith-woocommerce-subscription'),
    initialOpen: false,
    settings: [{
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Placeholder', 'yith-woocommerce-ajax-search'),
      onColorChange: function onColorChange(color) {
        return setAttributes({
          placeholderTextColor: color
        });
      },
      colorValue: placeholderTextColor
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Text', 'yith-woocommerce-ajax-search'),
      onColorChange: function onColorChange(color) {
        return setAttributes({
          inputTextColor: color
        });
      },
      colorValue: inputTextColor
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Background', 'yith-woocommerce-ajax-search'),
      onColorChange: function onColorChange(color) {
        return setAttributes({
          inputBgColor: color
        });
      },
      colorValue: inputBgColor
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Background focus', 'yith-woocommerce-ajax-search'),
      onColorChange: function onColorChange(color) {
        return setAttributes({
          inputBgFocusColor: color
        });
      },
      colorValue: inputBgFocusColor
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Border', 'yith-woocommerce-ajax-search'),
      onColorChange: function onColorChange(color) {
        return setAttributes({
          inputBorderColor: color
        });
      },
      colorValue: inputBorderColor
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Border focus', 'yith-woocommerce-ajax-search'),
      onColorChange: function onColorChange(color) {
        return setAttributes({
          inputBorderFocusColor: color
        });
      },
      colorValue: inputBorderFocusColor
    }]
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Submit search style', 'yith-woocommerce-ajax-search'),
    value: submitStyle,
    options: [{
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Icon', 'yith-woocommerce-ajax-search'),
      value: 'icon'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Text', 'yith-woocommerce-ajax-search'),
      value: 'text'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Icon + Text', 'yith-woocommerce-ajax-search'),
      value: 'iconText'
    }],
    onChange: function onChange(value) {
      return setAttributes({
        submitStyle: value
      });
    },
    __nextHasNoMarginBottom: true
  }), submitStyle === 'icon' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RadioControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Search icon', 'yith-woocommerce-ajax-search'),
    selected: iconType,
    onChange: function onChange(value) {
      return setAttributes({
        iconType: value
      });
    },
    options: [{
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Icon on the right', 'yith-woocommerce-ajax-search'),
      value: 'icon-right'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Icon on the left', 'yith-woocommerce-ajax-search'),
      value: 'icon-left'
    }]
  }), submitStyle !== 'icon' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Submit Button Label', 'yith-woocommerce-ajax-search'),
    value: buttonLabel,
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Enter button label', 'yith-woocommerce-ajax-search'),
    onChange: function onChange(value) {
      return setAttributes({
        buttonLabel: value
      });
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_border_size_control__WEBPACK_IMPORTED_MODULE_6__["default"], {
    type: "radius",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Submit Border Radius', 'yith-woocommerce-ajax-search'),
    values: buttonBorderRadius,
    onChange: function onChange(value) {
      return handleBorderControlChange(value, 'buttonBorderRadius');
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.__experimentalPanelColorGradientSettings, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Submit Color Settings', 'yith-woocommerce-subscription'),
    initialOpen: false,
    settings: submitSettings
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", _extends({
    className: classes
  }, blockProps), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "ywcas-block-input"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Disabled, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_base_components__WEBPACK_IMPORTED_MODULE_5__.SearchField, _extends({
    queryString: _config__WEBPACK_IMPORTED_MODULE_7__.YWCAS_DEFAULT_QUERY
  }, attributes, {
    size: size
  }))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Edit);

/***/ }),

/***/ "./assets/js/blocks/src/blocks/search-block/inner-blocks/input-block/index.js":
/*!************************************************************************************!*\
  !*** ./assets/js/blocks/src/blocks/search-block/inner-blocks/input-block/index.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./assets/js/blocks/src/blocks/search-block/inner-blocks/input-block/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./save */ "./assets/js/blocks/src/blocks/search-block/inner-blocks/input-block/save.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../common */ "./assets/js/blocks/src/common.js");
/**
 * External dependencies
 */



/**
 * Internal dependencies
 */



(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)('yith/input-block', {
  icon: _common__WEBPACK_IMPORTED_MODULE_3__.yith_icon,
  edit: _edit__WEBPACK_IMPORTED_MODULE_1__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_2__["default"]
});

/***/ }),

/***/ "./assets/js/blocks/src/blocks/search-block/inner-blocks/input-block/save.js":
/*!***********************************************************************************!*\
  !*** ./assets/js/blocks/src/blocks/search-block/inner-blocks/input-block/save.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);


var Save = function Save() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps.save(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InnerBlocks.Content, null));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Save);

/***/ }),

/***/ "./assets/js/blocks/src/blocks/search-block/inner-blocks/popular-block/attributes.js":
/*!*******************************************************************************************!*\
  !*** ./assets/js/blocks/src/blocks/search-block/inner-blocks/popular-block/attributes.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../config */ "./assets/js/blocks/src/config.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  popularHeading: {
    type: 'string',
    "default": _config__WEBPACK_IMPORTED_MODULE_0__.ywcasDefaultSettings.popularLabel
  },
  maxPopularResults: {
    type: 'number',
    "default": _config__WEBPACK_IMPORTED_MODULE_0__.ywcasDefaultSettings.maxPopularResults
  }
});

/***/ }),

/***/ "./assets/js/blocks/src/blocks/search-block/inner-blocks/popular-block/edit.js":
/*!*************************************************************************************!*\
  !*** ./assets/js/blocks/src/blocks/search-block/inner-blocks/popular-block/edit.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _base_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../base/components */ "./assets/js/blocks/src/base/components/index.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../config */ "./assets/js/blocks/src/config.js");






var Edit = function Edit(_ref) {
  var attributes = _ref.attributes,
    setAttributes = _ref.setAttributes,
    className = _ref.className,
    align = _ref.align;
  var popularHeading = attributes.popularHeading,
    maxPopularResults = attributes.maxPopularResults;
  var blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps)();
  var popularItems = _config__WEBPACK_IMPORTED_MODULE_5__.popular.slice(0, maxPopularResults);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", blockProps, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InspectorControls, {
    key: "inspector"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Settings', 'yith-woocommerce-ajax-search'),
    initialOpen: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Label', 'yith-woocommerce-ajax-search'),
    className: "wc-block-product-search__field input-control",
    value: popularHeading,
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Enter the label for the search history', 'yith-woocommerce-ajax-search'),
    onChange: function onChange(value) {
      return setAttributes({
        popularHeading: value
      });
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Please, select the maximum number of popular searches to show.', 'yith-woocommerce-ajax-search'),
    initialPosition: maxPopularResults,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Searches to show', 'yith-woocommerce-ajax-search'),
    max: 10,
    min: 1,
    onBlur: function noRefCheck() {},
    onChange: function onChange(value) {
      return setAttributes({
        maxPopularResults: value
      });
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Disabled, null, popularItems && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_base_components__WEBPACK_IMPORTED_MODULE_4__.PopularSearches, {
    title: popularHeading,
    searches: popularItems
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Edit);

/***/ }),

/***/ "./assets/js/blocks/src/blocks/search-block/inner-blocks/popular-block/index.js":
/*!**************************************************************************************!*\
  !*** ./assets/js/blocks/src/blocks/search-block/inner-blocks/popular-block/index.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./assets/js/blocks/src/blocks/search-block/inner-blocks/popular-block/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./save */ "./assets/js/blocks/src/blocks/search-block/inner-blocks/popular-block/save.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../common */ "./assets/js/blocks/src/common.js");
/* harmony import */ var _attributes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./attributes */ "./assets/js/blocks/src/blocks/search-block/inner-blocks/popular-block/attributes.js");
/**
 * External dependencies
 */


/**
 * Internal dependencies
 */




(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)('yith/popular-block', {
  icon: _common__WEBPACK_IMPORTED_MODULE_3__.yith_icon,
  attributes: _attributes__WEBPACK_IMPORTED_MODULE_4__["default"],
  edit: _edit__WEBPACK_IMPORTED_MODULE_1__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_2__["default"]
});

/***/ }),

/***/ "./assets/js/blocks/src/blocks/search-block/inner-blocks/popular-block/save.js":
/*!*************************************************************************************!*\
  !*** ./assets/js/blocks/src/blocks/search-block/inner-blocks/popular-block/save.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);


var Save = function Save() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps.save(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InnerBlocks.Content, null));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Save);

/***/ }),

/***/ "./assets/js/blocks/src/blocks/search-block/inner-blocks/product-results-block/attributes.js":
/*!***************************************************************************************************!*\
  !*** ./assets/js/blocks/src/blocks/search-block/inner-blocks/product-results-block/attributes.js ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../config */ "./assets/js/blocks/src/config.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  showName: {
    type: 'boolean',
    "default": _config__WEBPACK_IMPORTED_MODULE_0__.ywcasDefaultSettings.showName
  },
  showImage: {
    type: 'boolean',
    "default": _config__WEBPACK_IMPORTED_MODULE_0__.ywcasDefaultSettings.showThumb
  },
  showPrice: {
    type: 'boolean',
    "default": _config__WEBPACK_IMPORTED_MODULE_0__.ywcasDefaultSettings.showPrice
  },
  showCategories: {
    type: 'boolean',
    "default": _config__WEBPACK_IMPORTED_MODULE_0__.ywcasDefaultSettings.showCategory
  },
  showStock: {
    type: 'boolean',
    "default": _config__WEBPACK_IMPORTED_MODULE_0__.ywcasDefaultSettings.showStock
  },
  showSKU: {
    type: 'boolean',
    "default": _config__WEBPACK_IMPORTED_MODULE_0__.ywcasDefaultSettings.showSku
  },
  showSummary: {
    type: 'boolean',
    "default": _config__WEBPACK_IMPORTED_MODULE_0__.ywcasDefaultSettings.showExcerpt
  },
  showAddToCart: {
    type: 'boolean',
    "default": _config__WEBPACK_IMPORTED_MODULE_0__.ywcasDefaultSettings.showAddToCart
  },
  maxResultsToShow: {
    type: 'number',
    "default": _config__WEBPACK_IMPORTED_MODULE_0__.ywcasDefaultSettings.maxResults
  },
  imagePosition: {
    type: 'string',
    "default": _config__WEBPACK_IMPORTED_MODULE_0__.ywcasDefaultSettings.thumbPosition
  },
  layout: {
    type: 'string',
    "default": _config__WEBPACK_IMPORTED_MODULE_0__.ywcasDefaultSettings.layout
  },
  imageSize: {
    type: 'number',
    "default": _config__WEBPACK_IMPORTED_MODULE_0__.ywcasDefaultSettings.thumbSize
  },
  limitSummary: {
    type: 'boolean',
    "default": _config__WEBPACK_IMPORTED_MODULE_0__.ywcasDefaultSettings.limitSummary
  },
  summaryMaxWord: {
    type: 'number',
    "default": _config__WEBPACK_IMPORTED_MODULE_0__.ywcasDefaultSettings.excerptNumWords
  },
  productNameColor: {
    type: 'string',
    "default": _config__WEBPACK_IMPORTED_MODULE_0__.ywcasDefaultSettings.nameColor
  },
  priceLabel: {
    type: 'string',
    "default": _config__WEBPACK_IMPORTED_MODULE_0__.ywcasDefaultSettings.priceLabel
  },
  noResults: {
    type: 'string',
    "default": _config__WEBPACK_IMPORTED_MODULE_0__.ywcasDefaultSettings.noResultsLabel
  },
  showViewAll: {
    type: 'boolean',
    "default": _config__WEBPACK_IMPORTED_MODULE_0__.ywcasDefaultSettings.showViewAll
  },
  showViewAllText: {
    type: 'string',
    "default": _config__WEBPACK_IMPORTED_MODULE_0__.ywcasDefaultSettings.viewAllLabel
  },
  showSaleBadge: {
    type: 'boolean',
    "default": _config__WEBPACK_IMPORTED_MODULE_0__.ywcasDefaultSettings.showSaleBadge
  },
  showOutOfStockBadge: {
    type: 'boolean',
    "default": _config__WEBPACK_IMPORTED_MODULE_0__.ywcasDefaultSettings.showOutOfStockBadge
  },
  showFeaturedBadge: {
    type: 'boolean',
    "default": _config__WEBPACK_IMPORTED_MODULE_0__.ywcasDefaultSettings.showFeaturedBadge
  },
  hideFeaturedIfOnSale: {
    type: 'boolean',
    "default": _config__WEBPACK_IMPORTED_MODULE_0__.ywcasDefaultSettings.hideFeaturedIfOnSale
  }
});

/***/ }),

/***/ "./assets/js/blocks/src/blocks/search-block/inner-blocks/product-results-block/edit.js":
/*!*********************************************************************************************!*\
  !*** ./assets/js/blocks/src/blocks/search-block/inner-blocks/product-results-block/edit.js ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lapilli_ui_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @lapilli-ui/components */ "@lapilli-ui/components");
/* harmony import */ var _lapilli_ui_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_lapilli_ui_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _base_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../base/components */ "./assets/js/blocks/src/base/components/index.js");
/* harmony import */ var _ywcas_base_context_hooks__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ywcas/base-context/hooks */ "./assets/js/blocks/src/base/context/hooks/index.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../config */ "./assets/js/blocks/src/config.js");
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









var Edit = function Edit(_ref) {
  var attributes = _ref.attributes,
    setAttributes = _ref.setAttributes;
  var blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.useBlockProps)();
  var showName = attributes.showName,
    showPrice = attributes.showPrice,
    showImage = attributes.showImage,
    showCategories = attributes.showCategories,
    showStock = attributes.showStock,
    showSKU = attributes.showSKU,
    showSummary = attributes.showSummary,
    limitSummary = attributes.limitSummary,
    showAddToCart = attributes.showAddToCart,
    imageSize = attributes.imageSize,
    imagePosition = attributes.imagePosition,
    productNameColor = attributes.productNameColor,
    priceLabel = attributes.priceLabel,
    maxResultsToShow = attributes.maxResultsToShow,
    summaryMaxWord = attributes.summaryMaxWord,
    noResults = attributes.noResults,
    showViewAll = attributes.showViewAll,
    showViewAllText = attributes.showViewAllText,
    layout = attributes.layout,
    showSaleBadge = attributes.showSaleBadge,
    showOutOfStockBadge = attributes.showOutOfStockBadge,
    showFeaturedBadge = attributes.showFeaturedBadge,
    hideFeaturedIfOnSale = attributes.hideFeaturedIfOnSale;
  var _useStoreSearch = (0,_ywcas_base_context_hooks__WEBPACK_IMPORTED_MODULE_7__.useStoreSearch)({
      query: _config__WEBPACK_IMPORTED_MODULE_8__.YWCAS_DEFAULT_QUERY,
      maxResults: maxResultsToShow,
      showCategories: showCategories
    }),
    results = _useStoreSearch.results,
    isSearching = _useStoreSearch.isSearching,
    getCategories = _useStoreSearch.getCategories;
  var categoryList = getCategories('all');
  var isLoading = categoryList.isLoading,
    categories = categoryList.categories;
  var widthGrid = 'grid' === layout && showImage ? imageSize : 170;
  var classes = classnames__WEBPACK_IMPORTED_MODULE_3___default()('ywcas-search-results', layout);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.InspectorControls, {
    key: "inspector"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Product results settings', 'yith-woocommerce-ajax-search'),
    initialOpen: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.__experimentalNumberControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Max results to show', 'yith-woocommerce-ajax-search'),
    value: maxResultsToShow,
    onChange: function onChange(value) {
      return setAttributes({
        maxResultsToShow: value
      });
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Layout', 'yith-woocommerce-ajax-search'),
    value: layout,
    options: [{
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Grid', 'yith-woocommerce-ajax-search'),
      value: 'grid'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('List', 'yith-woocommerce-ajax-search'),
      value: 'list'
    }],
    onChange: function onChange(value) {
      return setAttributes({
        layout: value
      });
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Info to show', 'yith-woocommerce-ajax-search')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Name', 'yith-woocommerce-ajax-search'),
    checked: showName,
    onChange: function onChange(value) {
      return setAttributes({
        showName: value
      });
    }
  }), showName && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "ywcas-block-panel-left-aligned-color-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.__experimentalPanelColorGradientSettings, {
    className: "ywcas-product-result-panel",
    initialOpen: true,
    settings: [{
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Product Title Color', 'yith-woocommerce-ajax-search'),
      onColorChange: function onColorChange(color) {
        return setAttributes({
          productNameColor: color
        });
      },
      colorValue: productNameColor
    }]
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Price', 'yith-woocommerce-ajax-search'),
    checked: showPrice,
    onChange: function onChange(value) {
      return setAttributes({
        showPrice: value
      });
    }
  }), showPrice && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Price label', 'yith-woocommerce-ajax-search'),
    value: priceLabel,
    onChange: function onChange(value) {
      return setAttributes({
        priceLabel: value
      });
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Image', 'yith-woocommerce-ajax-search'),
    checked: showImage,
    onChange: function onChange(value) {
      return setAttributes({
        showImage: value
      });
    }
  }), showImage && 'list' === layout && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Image position', 'yith-woocommerce-ajax-search'),
    value: imagePosition,
    options: [{
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Show left', 'yith-woocommerce-ajax-search'),
      value: 'left'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Show right', 'yith-woocommerce-ajax-search'),
      value: 'right'
    }],
    onChange: function onChange(value) {
      return setAttributes({
        imagePosition: value
      });
    }
  }), showImage && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.__experimentalNumberControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Image size (px)', 'yith-woocommerce-ajax-search'),
    isDragEnabled: true,
    value: imageSize,
    onChange: function onChange(value) {
      return setAttributes({
        imageSize: parseInt(value)
      });
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Categories', 'yith-woocommerce-ajax-search'),
    checked: showCategories,
    onChange: function onChange(value) {
      return setAttributes({
        showCategories: value
      });
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Stock', 'yith-woocommerce-ajax-search'),
    checked: showStock,
    onChange: function onChange(value) {
      return setAttributes({
        showStock: value
      });
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('SKU', 'yith-woocommerce-ajax-search'),
    checked: showSKU,
    onChange: function onChange(value) {
      return setAttributes({
        showSKU: value
      });
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Summary', 'yith-woocommerce-ajax-search'),
    checked: showSummary,
    onChange: function onChange(value) {
      return setAttributes({
        showSummary: value
      });
    }
  }), showSummary && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Limit summary length on/off', 'yith-woocommerce-ajax-search'),
    checked: limitSummary,
    onChange: function onChange(value) {
      return setAttributes({
        limitSummary: value
      });
    }
  }), showSummary && limitSummary && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.__experimentalNumberControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Summary max words', 'yith-woocommerce-ajax-search'),
    value: summaryMaxWord,
    onChange: function onChange(value) {
      return setAttributes({
        summaryMaxWord: value
      });
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Add to cart', 'yith-woocommerce-ajax-search'),
    checked: showAddToCart,
    onChange: function onChange(value) {
      return setAttributes({
        showAddToCart: value
      });
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('"No results" text', 'yith-woocommerce-ajax-search'),
    value: noResults,
    onChange: function onChange(value) {
      return setAttributes({
        noResults: value
      });
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Show "View all results" link', 'yith-woocommerce-ajax-search'),
    checked: showViewAll,
    onChange: function onChange(value) {
      return setAttributes({
        showViewAll: value
      });
    }
  }), showViewAll && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('"View all results" text', 'yith-woocommerce-ajax-search'),
    value: showViewAllText,
    onChange: function onChange(value) {
      return setAttributes({
        showViewAllText: value
      });
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Show "On Sale" badge', 'yith-woocommerce-ajax-search'),
    checked: showSaleBadge,
    onChange: function onChange(value) {
      return setAttributes({
        showSaleBadge: value
      });
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Show "Out of stock" badge', 'yith-woocommerce-ajax-search'),
    checked: showOutOfStockBadge,
    onChange: function onChange(value) {
      return setAttributes({
        showOutOfStockBadge: value
      });
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Show "Featured" badge', 'yith-woocommerce-ajax-search'),
    checked: showFeaturedBadge,
    onChange: function onChange(value) {
      return setAttributes({
        showFeaturedBadge: value
      });
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Hide "Featured" badge if the product is on sale', 'yith-woocommerce-ajax-search'),
    checked: hideFeaturedIfOnSale,
    onChange: function onChange(value) {
      return setAttributes({
        hideFeaturedIfOnSale: value
      });
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_lapilli_ui_components__WEBPACK_IMPORTED_MODULE_2__.Box, _extends({
    className: classes
  }, blockProps), layout === 'grid' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("style", null, "\n                .wp-block-yith-product-results-block .lapilliUI-Grid__root{\n                     grid-template-columns: repeat(auto-fill, minmax(".concat(widthGrid, "px, 1fr))!important;\n                     row-gap:30px;\n                     column-gap:15px\n                     }\n                ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Disabled, null, !isSearching && !isLoading && categories.length && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_base_components__WEBPACK_IMPORTED_MODULE_6__.ProductResults, _extends({
    searchQuery: _config__WEBPACK_IMPORTED_MODULE_8__.YWCAS_DEFAULT_QUERY,
    results: results,
    onClick: null,
    categoryList: categories
  }, attributes)))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Edit);

/***/ }),

/***/ "./assets/js/blocks/src/blocks/search-block/inner-blocks/product-results-block/index.js":
/*!**********************************************************************************************!*\
  !*** ./assets/js/blocks/src/blocks/search-block/inner-blocks/product-results-block/index.js ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./assets/js/blocks/src/blocks/search-block/inner-blocks/product-results-block/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./save */ "./assets/js/blocks/src/blocks/search-block/inner-blocks/product-results-block/save.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../common */ "./assets/js/blocks/src/common.js");
/* harmony import */ var _attributes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./attributes */ "./assets/js/blocks/src/blocks/search-block/inner-blocks/product-results-block/attributes.js");
/**
 * External dependencies
 */


/**
 * Internal dependencies
 */




(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)('yith/product-results-block', {
  icon: _common__WEBPACK_IMPORTED_MODULE_3__.yith_icon,
  edit: _edit__WEBPACK_IMPORTED_MODULE_1__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_2__["default"],
  attributes: _attributes__WEBPACK_IMPORTED_MODULE_4__["default"]
});

/***/ }),

/***/ "./assets/js/blocks/src/blocks/search-block/inner-blocks/product-results-block/save.js":
/*!*********************************************************************************************!*\
  !*** ./assets/js/blocks/src/blocks/search-block/inner-blocks/product-results-block/save.js ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);


var Save = function Save() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps.save(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InnerBlocks.Content, null));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Save);

/***/ }),

/***/ "./assets/js/blocks/src/blocks/search-block/inner-blocks/related-categories-block/edit.js":
/*!************************************************************************************************!*\
  !*** ./assets/js/blocks/src/blocks/search-block/inner-blocks/related-categories-block/edit.js ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _base_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../base/components */ "./assets/js/blocks/src/base/components/index.js");
/* harmony import */ var _ywcas_base_context_hooks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ywcas/base-context/hooks */ "./assets/js/blocks/src/base/context/hooks/index.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../config */ "./assets/js/blocks/src/config.js");
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../context */ "./assets/js/blocks/src/blocks/search-block/context.js");
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









var Edit = function Edit(_ref) {
  var attributes = _ref.attributes,
    className = _ref.className,
    setAttributes = _ref.setAttributes,
    align = _ref.align;
  var _useSearchContext = (0,_context__WEBPACK_IMPORTED_MODULE_8__.useSearchContext)(),
    query = _useSearchContext.query;
  var _useStoreSearch = (0,_ywcas_base_context_hooks__WEBPACK_IMPORTED_MODULE_6__.useStoreSearch)(),
    getResults = _useStoreSearch.getResults,
    getCategories = _useStoreSearch.getCategories;
  var relatedCategoryHeading = attributes.relatedCategoryHeading,
    maxCategoryRelated = attributes.maxCategoryRelated;
  var blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps)();
  var categories = getCategories('all');
  var _getResults = getResults(query),
    isSearching = _getResults.isLoading,
    results = _getResults.results;
  var classes = classnames__WEBPACK_IMPORTED_MODULE_1___default()('yith-releated-category-block', align ? 'align' + align : '', className);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InspectorControls, {
    key: "inspector"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Related categories settings', 'yith-woocommerce-ajax-search'),
    initialOpen: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Label', 'yith-woocommerce-ajax-search'),
    value: relatedCategoryHeading,
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Enter the label for the related categories', 'yith-woocommerce-ajax-search'),
    onChange: function onChange(value) {
      return setAttributes({
        relatedCategoryHeading: value
      });
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Please, select the maximum number of related categories to show', 'yith-woocommerce-ajax-search'),
    initialPosition: maxCategoryRelated,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Max related categories', 'yith-woocommerce-ajax-search'),
    max: 10,
    min: 1,
    onBlur: function noRefCheck() {},
    onChange: function onChange(value) {
      return setAttributes({
        maxCategoryRelated: value
      });
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", _extends({
    className: classes
  }, blockProps), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Disabled, null, !isSearching && !categories.isLoading && categories.categories.length && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_base_components__WEBPACK_IMPORTED_MODULE_5__.CategoryResults, {
    label: relatedCategoryHeading,
    query: _config__WEBPACK_IMPORTED_MODULE_7__.YWCAS_DEFAULT_QUERY,
    categories: categories.categories,
    results: results.results,
    maxResults: maxCategoryRelated
  }))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Edit);

/***/ }),

/***/ "./assets/js/blocks/src/blocks/search-block/inner-blocks/related-categories-block/index.js":
/*!*************************************************************************************************!*\
  !*** ./assets/js/blocks/src/blocks/search-block/inner-blocks/related-categories-block/index.js ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./assets/js/blocks/src/blocks/search-block/inner-blocks/related-categories-block/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./save */ "./assets/js/blocks/src/blocks/search-block/inner-blocks/related-categories-block/save.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../common */ "./assets/js/blocks/src/common.js");
/**
 * External dependencies
 */



/**
 * Internal dependencies
 */



(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)('yith/related-categories-block', {
  icon: _common__WEBPACK_IMPORTED_MODULE_3__.yith_icon,
  edit: _edit__WEBPACK_IMPORTED_MODULE_1__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_2__["default"]
});

/***/ }),

/***/ "./assets/js/blocks/src/blocks/search-block/inner-blocks/related-categories-block/save.js":
/*!************************************************************************************************!*\
  !*** ./assets/js/blocks/src/blocks/search-block/inner-blocks/related-categories-block/save.js ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);


var Save = function Save() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps.save(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InnerBlocks.Content, null));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Save);

/***/ }),

/***/ "./assets/js/blocks/src/blocks/search-block/inner-blocks/related-posts-block/attributes.js":
/*!*************************************************************************************************!*\
  !*** ./assets/js/blocks/src/blocks/search-block/inner-blocks/related-posts-block/attributes.js ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../config */ "./assets/js/blocks/src/config.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  relatedPostsHeading: {
    type: 'string',
    "default": _config__WEBPACK_IMPORTED_MODULE_0__.ywcasDefaultSettings.relatedLabel
  },
  maxPostsRelated: {
    type: 'number',
    "default": _config__WEBPACK_IMPORTED_MODULE_0__.ywcasDefaultSettings.maxRelatedResults
  },
  enabledPost: {
    type: 'boolean',
    "default": true
  },
  enabledPage: {
    type: 'boolean',
    "default": true
  },
  background: {
    type: 'string',
    "default": _config__WEBPACK_IMPORTED_MODULE_0__.ywcasDefaultSettings.relateBgColor
  }
});

/***/ }),

/***/ "./assets/js/blocks/src/blocks/search-block/inner-blocks/related-posts-block/edit.js":
/*!*******************************************************************************************!*\
  !*** ./assets/js/blocks/src/blocks/search-block/inner-blocks/related-posts-block/edit.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ywcas_base_context_hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ywcas/base-context/hooks */ "./assets/js/blocks/src/base/context/hooks/index.js");
/* harmony import */ var _base_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../base/components */ "./assets/js/blocks/src/base/components/index.js");
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../context */ "./assets/js/blocks/src/blocks/search-block/context.js");
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








var Edit = function Edit(_ref) {
  var _results$related_cont;
  var attributes = _ref.attributes,
    className = _ref.className,
    setAttributes = _ref.setAttributes,
    align = _ref.align;
  var _useSearchContext = (0,_context__WEBPACK_IMPORTED_MODULE_7__.useSearchContext)(),
    query = _useSearchContext.query;
  var relatedPostsHeading = attributes.relatedPostsHeading,
    maxPostsRelated = attributes.maxPostsRelated,
    enabledPost = attributes.enabledPost,
    enabledPage = attributes.enabledPage,
    background = attributes.background;
  var _useStoreSearch = (0,_ywcas_base_context_hooks__WEBPACK_IMPORTED_MODULE_5__.useStoreSearch)(),
    getResults = _useStoreSearch.getResults;
  var _getResults = getResults(query),
    isSearching = _getResults.isLoading,
    results = _getResults.results;
  var blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps)();
  var classes = classnames__WEBPACK_IMPORTED_MODULE_1___default()('yith-related-posts-block', align ? 'align' + align : '', className);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InspectorControls, {
    key: "inspector"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Related posts settings', 'yith-woocommerce-ajax-search'),
    initialOpen: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Label', 'yith-woocommerce-ajax-search'),
    value: relatedPostsHeading,
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Enter the label for the related posts', 'yith-woocommerce-ajax-search'),
    onChange: function onChange(value) {
      return setAttributes({
        relatedPostsHeading: value
      });
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Show results related to', 'yith-woocommerce-ajax-search')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.CheckboxControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Post', 'yith-woocommerce-ajax-search'),
    checked: enabledPost,
    onChange: function onChange(value) {
      return setAttributes({
        enabledPost: value
      });
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.CheckboxControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Pages', 'yith-woocommerce-ajax-search'),
    checked: enabledPage,
    onChange: function onChange(value) {
      return setAttributes({
        enabledPage: value
      });
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Please, select the maximum number of related posts to show', 'yith-woocommerce-ajax-search'),
    initialPosition: maxPostsRelated,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Max related posts', 'yith-woocommerce-ajax-search'),
    max: 10,
    min: 1,
    onBlur: function noRefCheck() {},
    onChange: function onChange(value) {
      return setAttributes({
        maxPostsRelated: value
      });
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Background color', 'yith-woocommerce-ajax-search')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "ywcas-block-panel-left-aligned-color-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.__experimentalPanelColorGradientSettings, {
    className: "ywcas-related-posts-panel",
    initialOpen: true,
    settings: [{
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Background', 'yith-woocommerce-ajax-search'),
      onColorChange: function onColorChange(color) {
        return setAttributes({
          background: color
        });
      },
      colorValue: background
    }]
  })))), (enabledPage || enabledPost) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", _extends({
    className: classes
  }, blockProps), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Disabled, null, !isSearching && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_base_components__WEBPACK_IMPORTED_MODULE_6__.RelatedContent, {
    label: relatedPostsHeading,
    posts: (_results$related_cont = results.related_content) === null || _results$related_cont === void 0 ? void 0 : _results$related_cont.results,
    background: background,
    maxResults: maxPostsRelated
  }))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Edit);

/***/ }),

/***/ "./assets/js/blocks/src/blocks/search-block/inner-blocks/related-posts-block/index.js":
/*!********************************************************************************************!*\
  !*** ./assets/js/blocks/src/blocks/search-block/inner-blocks/related-posts-block/index.js ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./assets/js/blocks/src/blocks/search-block/inner-blocks/related-posts-block/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./save */ "./assets/js/blocks/src/blocks/search-block/inner-blocks/related-posts-block/save.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../common */ "./assets/js/blocks/src/common.js");
/* harmony import */ var _attributes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./attributes */ "./assets/js/blocks/src/blocks/search-block/inner-blocks/related-posts-block/attributes.js");
/**
 * External dependencies
 */



/**
 * Internal dependencies
 */




(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)('yith/related-posts-block', {
  icon: _common__WEBPACK_IMPORTED_MODULE_3__.yith_icon,
  edit: _edit__WEBPACK_IMPORTED_MODULE_1__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_2__["default"],
  attributes: _attributes__WEBPACK_IMPORTED_MODULE_4__["default"]
});

/***/ }),

/***/ "./assets/js/blocks/src/blocks/search-block/inner-blocks/related-posts-block/save.js":
/*!*******************************************************************************************!*\
  !*** ./assets/js/blocks/src/blocks/search-block/inner-blocks/related-posts-block/save.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);


var Save = function Save() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps.save(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InnerBlocks.Content, null));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Save);

/***/ }),

/***/ "./assets/js/blocks/src/blocks/search-block/save.js":
/*!**********************************************************!*\
  !*** ./assets/js/blocks/src/blocks/search-block/save.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);


var Save = function Save() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps.save({
    className: 'is-loading'
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InnerBlocks.Content, null));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Save);

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

/***/ "./assets/js/blocks/src/data/index.js":
/*!********************************************!*\
  !*** ./assets/js/blocks/src/data/index.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   YWCAS_RESULTS_VIEW_STORE_KEY: () => (/* reexport safe */ _search_view__WEBPACK_IMPORTED_MODULE_0__.YWCAS_RESULTS_VIEW_STORE_KEY)
/* harmony export */ });
/* harmony import */ var _search_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./search-view */ "./assets/js/blocks/src/data/search-view/index.js");


/***/ }),

/***/ "./assets/js/blocks/src/data/search-view/action-types.js":
/*!***************************************************************!*\
  !*** ./assets/js/blocks/src/data/search-view/action-types.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ACTION_TYPES: () => (/* binding */ ACTION_TYPES)
/* harmony export */ });
var ACTION_TYPES = {
  SET_SEARCHED_RESULTS: 'SET_SEARCHED_RESULTS',
  SET_CATEGORIES: 'SET_CATEGORIES'
};

/***/ }),

/***/ "./assets/js/blocks/src/data/search-view/actions.js":
/*!**********************************************************!*\
  !*** ./assets/js/blocks/src/data/search-view/actions.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CHANGE_QUERYSTRING: () => (/* binding */ CHANGE_QUERYSTRING),
/* harmony export */   fetchFromAPI: () => (/* binding */ fetchFromAPI),
/* harmony export */   setCategories: () => (/* binding */ setCategories),
/* harmony export */   setSearchedResults: () => (/* binding */ setSearchedResults)
/* harmony export */ });
/* harmony import */ var _action_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./action-types */ "./assets/js/blocks/src/data/search-view/action-types.js");
var CHANGE_QUERYSTRING = 'CHANGE_QUERYSTRING';

var setSearchedResults = function setSearchedResults(results) {
  return {
    type: _action_types__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.SET_SEARCHED_RESULTS,
    results: results
  };
};
var setCategories = function setCategories(categories) {
  return {
    type: _action_types__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.SET_CATEGORIES,
    categories: categories
  };
};
var fetchFromAPI = function fetchFromAPI(path) {
  return {
    type: 'FETCH_FROM_API',
    path: path
  };
};

/***/ }),

/***/ "./assets/js/blocks/src/data/search-view/default-state.js":
/*!****************************************************************!*\
  !*** ./assets/js/blocks/src/data/search-view/default-state.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   defaultState: () => (/* binding */ defaultState)
/* harmony export */ });
var defaultState = {
  lastQuery: '',
  results: {
    totalResults: 0,
    query: '',
    results: [],
    relatedContent: {}
  },
  categories: []
};

/***/ }),

/***/ "./assets/js/blocks/src/data/search-view/index.js":
/*!********************************************************!*\
  !*** ./assets/js/blocks/src/data/search-view/index.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   YWCAS_RESULTS_VIEW_STORE_KEY: () => (/* binding */ YWCAS_RESULTS_VIEW_STORE_KEY),
/* harmony export */   config: () => (/* binding */ config)
/* harmony export */ });
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./selectors */ "./assets/js/blocks/src/data/search-view/selectors.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./actions */ "./assets/js/blocks/src/data/search-view/actions.js");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reducers */ "./assets/js/blocks/src/data/search-view/reducers.js");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../config */ "./assets/js/blocks/src/config.js");
function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}
function _regeneratorRuntime() {
  "use strict";

  /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
  _regeneratorRuntime = function _regeneratorRuntime() {
    return e;
  };
  var t,
    e = {},
    r = Object.prototype,
    n = r.hasOwnProperty,
    o = Object.defineProperty || function (t, e, r) {
      t[e] = r.value;
    },
    i = "function" == typeof Symbol ? Symbol : {},
    a = i.iterator || "@@iterator",
    c = i.asyncIterator || "@@asyncIterator",
    u = i.toStringTag || "@@toStringTag";
  function define(t, e, r) {
    return Object.defineProperty(t, e, {
      value: r,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }), t[e];
  }
  try {
    define({}, "");
  } catch (t) {
    define = function define(t, e, r) {
      return t[e] = r;
    };
  }
  function wrap(t, e, r, n) {
    var i = e && e.prototype instanceof Generator ? e : Generator,
      a = Object.create(i.prototype),
      c = new Context(n || []);
    return o(a, "_invoke", {
      value: makeInvokeMethod(t, r, c)
    }), a;
  }
  function tryCatch(t, e, r) {
    try {
      return {
        type: "normal",
        arg: t.call(e, r)
      };
    } catch (t) {
      return {
        type: "throw",
        arg: t
      };
    }
  }
  e.wrap = wrap;
  var h = "suspendedStart",
    l = "suspendedYield",
    f = "executing",
    s = "completed",
    y = {};
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}
  var p = {};
  define(p, a, function () {
    return this;
  });
  var d = Object.getPrototypeOf,
    v = d && d(d(values([])));
  v && v !== r && n.call(v, a) && (p = v);
  var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p);
  function defineIteratorMethods(t) {
    ["next", "throw", "return"].forEach(function (e) {
      define(t, e, function (t) {
        return this._invoke(e, t);
      });
    });
  }
  function AsyncIterator(t, e) {
    function invoke(r, o, i, a) {
      var c = tryCatch(t[r], t, o);
      if ("throw" !== c.type) {
        var u = c.arg,
          h = u.value;
        return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) {
          invoke("next", t, i, a);
        }, function (t) {
          invoke("throw", t, i, a);
        }) : e.resolve(h).then(function (t) {
          u.value = t, i(u);
        }, function (t) {
          return invoke("throw", t, i, a);
        });
      }
      a(c.arg);
    }
    var r;
    o(this, "_invoke", {
      value: function value(t, n) {
        function callInvokeWithMethodAndArg() {
          return new e(function (e, r) {
            invoke(t, n, e, r);
          });
        }
        return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
      }
    });
  }
  function makeInvokeMethod(e, r, n) {
    var o = h;
    return function (i, a) {
      if (o === f) throw new Error("Generator is already running");
      if (o === s) {
        if ("throw" === i) throw a;
        return {
          value: t,
          done: !0
        };
      }
      for (n.method = i, n.arg = a;;) {
        var c = n.delegate;
        if (c) {
          var u = maybeInvokeDelegate(c, n);
          if (u) {
            if (u === y) continue;
            return u;
          }
        }
        if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) {
          if (o === h) throw o = s, n.arg;
          n.dispatchException(n.arg);
        } else "return" === n.method && n.abrupt("return", n.arg);
        o = f;
        var p = tryCatch(e, r, n);
        if ("normal" === p.type) {
          if (o = n.done ? s : l, p.arg === y) continue;
          return {
            value: p.arg,
            done: n.done
          };
        }
        "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg);
      }
    };
  }
  function maybeInvokeDelegate(e, r) {
    var n = r.method,
      o = e.iterator[n];
    if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y;
    var i = tryCatch(o, e.iterator, r.arg);
    if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y;
    var a = i.arg;
    return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y);
  }
  function pushTryEntry(t) {
    var e = {
      tryLoc: t[0]
    };
    1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e);
  }
  function resetTryEntry(t) {
    var e = t.completion || {};
    e.type = "normal", delete e.arg, t.completion = e;
  }
  function Context(t) {
    this.tryEntries = [{
      tryLoc: "root"
    }], t.forEach(pushTryEntry, this), this.reset(!0);
  }
  function values(e) {
    if (e || "" === e) {
      var r = e[a];
      if (r) return r.call(e);
      if ("function" == typeof e.next) return e;
      if (!isNaN(e.length)) {
        var o = -1,
          i = function next() {
            for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next;
            return next.value = t, next.done = !0, next;
          };
        return i.next = i;
      }
    }
    throw new TypeError(_typeof(e) + " is not iterable");
  }
  return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", {
    value: GeneratorFunctionPrototype,
    configurable: !0
  }), o(GeneratorFunctionPrototype, "constructor", {
    value: GeneratorFunction,
    configurable: !0
  }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) {
    var e = "function" == typeof t && t.constructor;
    return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name));
  }, e.mark = function (t) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t;
  }, e.awrap = function (t) {
    return {
      __await: t
    };
  }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () {
    return this;
  }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) {
    void 0 === i && (i = Promise);
    var a = new AsyncIterator(wrap(t, r, n, o), i);
    return e.isGeneratorFunction(r) ? a : a.next().then(function (t) {
      return t.done ? t.value : a.next();
    });
  }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () {
    return this;
  }), define(g, "toString", function () {
    return "[object Generator]";
  }), e.keys = function (t) {
    var e = Object(t),
      r = [];
    for (var n in e) r.push(n);
    return r.reverse(), function next() {
      for (; r.length;) {
        var t = r.pop();
        if (t in e) return next.value = t, next.done = !1, next;
      }
      return next.done = !0, next;
    };
  }, e.values = values, Context.prototype = {
    constructor: Context,
    reset: function reset(e) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t);
    },
    stop: function stop() {
      this.done = !0;
      var t = this.tryEntries[0].completion;
      if ("throw" === t.type) throw t.arg;
      return this.rval;
    },
    dispatchException: function dispatchException(e) {
      if (this.done) throw e;
      var r = this;
      function handle(n, o) {
        return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o;
      }
      for (var o = this.tryEntries.length - 1; o >= 0; --o) {
        var i = this.tryEntries[o],
          a = i.completion;
        if ("root" === i.tryLoc) return handle("end");
        if (i.tryLoc <= this.prev) {
          var c = n.call(i, "catchLoc"),
            u = n.call(i, "finallyLoc");
          if (c && u) {
            if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
            if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
          } else if (c) {
            if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
          } else {
            if (!u) throw new Error("try statement without catch or finally");
            if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
          }
        }
      }
    },
    abrupt: function abrupt(t, e) {
      for (var r = this.tryEntries.length - 1; r >= 0; --r) {
        var o = this.tryEntries[r];
        if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
          var i = o;
          break;
        }
      }
      i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
      var a = i ? i.completion : {};
      return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a);
    },
    complete: function complete(t, e) {
      if ("throw" === t.type) throw t.arg;
      return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y;
    },
    finish: function finish(t) {
      for (var e = this.tryEntries.length - 1; e >= 0; --e) {
        var r = this.tryEntries[e];
        if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y;
      }
    },
    "catch": function _catch(t) {
      for (var e = this.tryEntries.length - 1; e >= 0; --e) {
        var r = this.tryEntries[e];
        if (r.tryLoc === t) {
          var n = r.completion;
          if ("throw" === n.type) {
            var o = n.arg;
            resetTryEntry(r);
          }
          return o;
        }
      }
      throw new Error("illegal catch attempt");
    },
    delegateYield: function delegateYield(e, r, n) {
      return this.delegate = {
        iterator: values(e),
        resultName: r,
        nextLoc: n
      }, "next" === this.method && (this.arg = t), y;
    }
  }, e;
}
/**
 * External dependencies
 */






var YWCAS_RESULTS_VIEW_STORE_KEY = 'yith/store/ywcas-search-view';
var config = {
  reducer: _reducers__WEBPACK_IMPORTED_MODULE_3__["default"],
  selectors: _selectors__WEBPACK_IMPORTED_MODULE_1__,
  actions: _actions__WEBPACK_IMPORTED_MODULE_2__,
  controls: {
    FETCH_FROM_API: function FETCH_FROM_API(action) {
      return _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_4___default()({
        path: action.path
      });
    }
  },
  resolvers: {
    getSearchedResults: function getSearchedResults(query) {
      var category = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var showCategories = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var maxResults = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 5;
      var isEditor = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
      return /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var path, results;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              if (!(!isEditor && (typeof query === 'undefined' || '' === query || !_config__WEBPACK_IMPORTED_MODULE_5__.YWCAS_HAS_AUTOCOMPLETE || query.length < _config__WEBPACK_IMPORTED_MODULE_5__.YWCAS_MIN_CHARS))) {
                _context.next = 2;
                break;
              }
              return _context.abrupt("return", _actions__WEBPACK_IMPORTED_MODULE_2__.setSearchedResults({
                totalResults: 0,
                query: '',
                results: [],
                relatedContent: {}
              }));
            case 2:
              path = '/ywcas/v1/search?query=' + query + '&lang=' + _config__WEBPACK_IMPORTED_MODULE_5__.YWCAS_LANG + '&category=' + category + '&showCategories=' + showCategories + '&maxResults=' + maxResults;
              path += isEditor ? '&test=1' : '';
              _context.next = 6;
              return _actions__WEBPACK_IMPORTED_MODULE_2__.fetchFromAPI(path);
            case 6:
              results = _context.sent;
              return _context.abrupt("return", _actions__WEBPACK_IMPORTED_MODULE_2__.setSearchedResults(results));
            case 8:
            case "end":
              return _context.stop();
          }
        }, _callee);
      })();
    },
    getCategories: /*#__PURE__*/_regeneratorRuntime().mark(function getCategories(type) {
      var path, categories;
      return _regeneratorRuntime().wrap(function getCategories$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            path = '/ywcas/v1/categories?type=' + type + '&lang=' + _config__WEBPACK_IMPORTED_MODULE_5__.YWCAS_LANG;
            _context2.next = 3;
            return _actions__WEBPACK_IMPORTED_MODULE_2__.fetchFromAPI(path);
          case 3:
            categories = _context2.sent;
            return _context2.abrupt("return", _actions__WEBPACK_IMPORTED_MODULE_2__.setCategories(categories));
          case 5:
          case "end":
            return _context2.stop();
        }
      }, getCategories);
    })
  },
  __experimentalUseThunks: true
};
var store = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.createReduxStore)(YWCAS_RESULTS_VIEW_STORE_KEY, config);
(0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.register)(store);

/***/ }),

/***/ "./assets/js/blocks/src/data/search-view/reducers.js":
/*!***********************************************************!*\
  !*** ./assets/js/blocks/src/data/search-view/reducers.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _default_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./default-state */ "./assets/js/blocks/src/data/search-view/default-state.js");
/* harmony import */ var _action_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./action-types */ "./assets/js/blocks/src/data/search-view/action-types.js");
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


var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _default_state__WEBPACK_IMPORTED_MODULE_0__.defaultState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  var newState = state;
  switch (action.type) {
    case _action_types__WEBPACK_IMPORTED_MODULE_1__.ACTION_TYPES.SET_SEARCHED_RESULTS:
      newState = _objectSpread(_objectSpread({}, state), {}, {
        lastQuery: action.results.query,
        results: action.results
      });
      break;
    case _action_types__WEBPACK_IMPORTED_MODULE_1__.ACTION_TYPES.SET_CATEGORIES:
      newState = _objectSpread(_objectSpread({}, state), {}, {
        categories: action.categories
      });
      break;
  }
  return newState;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (reducer);

/***/ }),

/***/ "./assets/js/blocks/src/data/search-view/selectors.js":
/*!************************************************************!*\
  !*** ./assets/js/blocks/src/data/search-view/selectors.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getCategories: () => (/* binding */ getCategories),
/* harmony export */   getLastQuery: () => (/* binding */ getLastQuery),
/* harmony export */   getResults: () => (/* binding */ getResults),
/* harmony export */   getSearchedResults: () => (/* binding */ getSearchedResults)
/* harmony export */ });
/**
 * External dependencies
 */
var getSearchedResults = function getSearchedResults(state) {
  return state.results;
};
var getResults = function getResults(state) {
  return state.results;
};
var getCategories = function getCategories(state) {
  return state.categories;
};
var getLastQuery = function getLastQuery(state) {
  return state.lastQuery;
};

/***/ }),

/***/ "./assets/js/blocks/src/shared/index.js":
/*!**********************************************!*\
  !*** ./assets/js/blocks/src/shared/index.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useForcedLayout: () => (/* binding */ useForcedLayout)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _base_providers_editor_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../base/providers/editor-context */ "./assets/js/blocks/src/base/providers/editor-context.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils */ "./assets/js/blocks/src/shared/utils/index.js");
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





/**
 * Internal dependencies
 */


/**
 * Hook to ensure FORCED blocks are rendered in the correct place.
 */
var useForcedLayout = function useForcedLayout(_ref) {
  var clientId = _ref.clientId,
    registeredBlocks = _ref.registeredBlocks,
    _ref$defaultTemplate = _ref.defaultTemplate,
    defaultTemplate = _ref$defaultTemplate === void 0 ? [] : _ref$defaultTemplate;
  var currentRegisteredBlocks = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)(registeredBlocks);
  var currentDefaultTemplate = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)(defaultTemplate);
  var registry = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.useRegistry)();
  var _useEditorContext = (0,_base_providers_editor_context__WEBPACK_IMPORTED_MODULE_3__.useEditorContext)(),
    isPreview = _useEditorContext.isPreview;
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var templateSynced = false;
    if (isPreview) {
      return;
    }
    var _dispatch = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.dispatch)('core/block-editor'),
      replaceInnerBlocks = _dispatch.replaceInnerBlocks;
    return registry.subscribe(function () {
      var innerBlocks = registry.select('core/block-editor').getBlocks(clientId);

      // If there are NO inner blocks, sync with the given template.
      if (innerBlocks.length === 0 && currentDefaultTemplate.current.length > 0 && !templateSynced) {
        var nextBlocks = (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__.createBlocksFromInnerBlocksTemplate)(currentDefaultTemplate.current);
        if (nextBlocks.length !== 0) {
          templateSynced = true;
          replaceInnerBlocks(clientId, nextBlocks);
          return;
        }
      }
      var registeredBlockTypes = currentRegisteredBlocks.current.map(function (blockName) {
        return (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__.getBlockType)(blockName);
      });
      var missingBlocks = (0,_utils__WEBPACK_IMPORTED_MODULE_4__.getMissingBlocks)(innerBlocks, registeredBlockTypes);
      if (missingBlocks.length === 0) {
        return;
      }

      // Initially set as -1, so we can skip checking the position multiple times. Later on in the map callback,
      // we check where the forced blocks should be inserted. This gets set to >= 0 if we find a missing block,
      // so we know we can skip calculating it.
      var insertAtPosition = -1;
      var blockConfig = missingBlocks.map(function (block) {
        var defaultTemplatePosition = currentDefaultTemplate.current.findIndex(function (_ref2) {
          var _ref3 = _slicedToArray(_ref2, 1),
            blockName = _ref3[0];
          return blockName === block.name;
        });
        var createdBlock = (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__.createBlock)(block.name);

        // As mentioned above, if this is not -1, this is the first time we're calculating the position, if it's
        // already been calculated we can skip doing so.
        if (insertAtPosition === -1) {
          insertAtPosition = (0,_utils__WEBPACK_IMPORTED_MODULE_4__.findBlockPosition)({
            defaultTemplatePosition: defaultTemplatePosition,
            innerBlocks: innerBlocks,
            currentDefaultTemplate: currentDefaultTemplate
          });
        }
        return createdBlock;
      });
      registry.batch(function () {
        registry.dispatch('core/block-editor').insertBlocks(blockConfig, insertAtPosition, clientId);
      });
    }, 'core/block-editor');
  }, [clientId, isPreview, registry]);
};

/***/ }),

/***/ "./assets/js/blocks/src/shared/utils/index.js":
/*!****************************************************!*\
  !*** ./assets/js/blocks/src/shared/utils/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   findBlockPosition: () => (/* binding */ findBlockPosition),
/* harmony export */   getMissingBlocks: () => (/* binding */ getMissingBlocks),
/* harmony export */   isBlockLocked: () => (/* binding */ isBlockLocked)
/* harmony export */ });
var isBlockLocked = function isBlockLocked(_ref) {
  var _attributes$lock, _attributes$lock2;
  var attributes = _ref.attributes;
  return Boolean(((_attributes$lock = attributes.lock) === null || _attributes$lock === void 0 ? void 0 : _attributes$lock.remove) || ((_attributes$lock2 = attributes.lock) === null || _attributes$lock2 === void 0 || (_attributes$lock2 = _attributes$lock2["default"]) === null || _attributes$lock2 === void 0 ? void 0 : _attributes$lock2.remove));
};

/**
 * This hook is used to determine which blocks are missing from a block. Given the list of inner blocks of a block, we
 * can check for any registered blocks that:
 * a) Are locked,
 * b) Have the parent set as the current block, and
 * c) Are not present in the list of inner blocks.
 */
var getMissingBlocks = function getMissingBlocks(innerBlocks, registeredBlockTypes) {
  var lockedBlockTypes = registeredBlockTypes.filter(function (block) {
    return block && isBlockLocked(block);
  });
  var missingBlocks = [];
  lockedBlockTypes.forEach(function (lockedBlock) {
    if (typeof lockedBlock === 'undefined') {
      return;
    }
    var existingBlock = innerBlocks.find(function (block) {
      return block.name === lockedBlock.name;
    });
    if (!existingBlock) {
      missingBlocks.push(lockedBlock);
    }
  });
  return missingBlocks;
};

/**
 * This hook is used to determine the position that a missing block should be inserted at.
 *
 * @return The index to insert the missing block at.
 */
var findBlockPosition = function findBlockPosition(_ref2) {
  var defaultTemplatePosition = _ref2.defaultTemplatePosition,
    innerBlocks = _ref2.innerBlocks,
    currentDefaultTemplate = _ref2.currentDefaultTemplate;
  switch (defaultTemplatePosition) {
    case -1:
      // The block is not part of the default template, so we append it to the current layout.
      return innerBlocks.length;
    // defaultTemplatePosition defaults to 0, so if this happens we can just return, this is because the block was
    // the first block in the default layout, so we can prepend it to the current layout.
    case 0:
      return 0;
    default:
      // The new layout may have extra blocks compared to the default template, so rather than insert
      // at the default position, we should append it after another default block.
      var adjacentBlock = currentDefaultTemplate.current[defaultTemplatePosition - 1];
      var position = innerBlocks.findIndex(function (_ref3) {
        var blockName = _ref3.name;
        return blockName === adjacentBlock[0];
      });
      return position === -1 ? defaultTemplatePosition : position + 1;
  }
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

/***/ "./node_modules/fast-deep-equal/es6/index.js":
/*!***************************************************!*\
  !*** ./node_modules/fast-deep-equal/es6/index.js ***!
  \***************************************************/
/***/ ((module) => {

"use strict";


// do not edit .js files directly - edit src/index.jst


  var envHasBigInt64Array = typeof BigInt64Array !== 'undefined';


module.exports = function equal(a, b) {
  if (a === b) return true;

  if (a && b && typeof a == 'object' && typeof b == 'object') {
    if (a.constructor !== b.constructor) return false;

    var length, i, keys;
    if (Array.isArray(a)) {
      length = a.length;
      if (length != b.length) return false;
      for (i = length; i-- !== 0;)
        if (!equal(a[i], b[i])) return false;
      return true;
    }


    if ((a instanceof Map) && (b instanceof Map)) {
      if (a.size !== b.size) return false;
      for (i of a.entries())
        if (!b.has(i[0])) return false;
      for (i of a.entries())
        if (!equal(i[1], b.get(i[0]))) return false;
      return true;
    }

    if ((a instanceof Set) && (b instanceof Set)) {
      if (a.size !== b.size) return false;
      for (i of a.entries())
        if (!b.has(i[0])) return false;
      return true;
    }

    if (ArrayBuffer.isView(a) && ArrayBuffer.isView(b)) {
      length = a.length;
      if (length != b.length) return false;
      for (i = length; i-- !== 0;)
        if (a[i] !== b[i]) return false;
      return true;
    }


    if (a.constructor === RegExp) return a.source === b.source && a.flags === b.flags;
    if (a.valueOf !== Object.prototype.valueOf) return a.valueOf() === b.valueOf();
    if (a.toString !== Object.prototype.toString) return a.toString() === b.toString();

    keys = Object.keys(a);
    length = keys.length;
    if (length !== Object.keys(b).length) return false;

    for (i = length; i-- !== 0;)
      if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;

    for (i = length; i-- !== 0;) {
      var key = keys[i];

      if (!equal(a[key], b[key])) return false;
    }

    return true;
  }

  // true if both NaN, false otherwise
  return a!==a && b!==b;
};


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

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/compose":
/*!*********************************!*\
  !*** external ["wp","compose"] ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["compose"];

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["data"];

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

/***/ "@wordpress/primitives":
/*!************************************!*\
  !*** external ["wp","primitives"] ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["primitives"];

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!***************************************!*\
  !*** ./assets/js/blocks/src/index.js ***!
  \***************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _blocks_search_block__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blocks/search-block */ "./assets/js/blocks/src/blocks/search-block/index.js");

})();

var __webpack_export_target__ = window;
for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ })()
;
//# sourceMappingURL=editor-scripts.js.map