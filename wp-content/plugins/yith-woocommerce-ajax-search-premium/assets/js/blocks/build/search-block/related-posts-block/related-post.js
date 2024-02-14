"use strict";
(globalThis["webpackChunkyith_woocommerce_ajax_search_premium"] = globalThis["webpackChunkyith_woocommerce_ajax_search_premium"] || []).push([["related-posts-block/related-post"],{

/***/ "./assets/js/blocks/src/base/components/badge/index.js":
/*!*************************************************************!*\
  !*** ./assets/js/blocks/src/base/components/badge/index.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ "./assets/js/blocks/src/blocks/search-block/inner-blocks/related-posts-block/attributes.js":
/*!*************************************************************************************************!*\
  !*** ./assets/js/blocks/src/blocks/search-block/inner-blocks/related-posts-block/attributes.js ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ "./assets/js/blocks/src/blocks/search-block/inner-blocks/related-posts-block/block.js":
/*!********************************************************************************************!*\
  !*** ./assets/js/blocks/src/blocks/search-block/inner-blocks/related-posts-block/block.js ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lapilli_ui_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @lapilli-ui/components */ "@lapilli-ui/components");
/* harmony import */ var _lapilli_ui_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_lapilli_ui_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ywcas_base_context_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ywcas/base-context/hooks */ "./assets/js/blocks/src/base/context/hooks/index.js");
/* harmony import */ var _base_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../base/components */ "./assets/js/blocks/src/base/components/index.js");
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../context */ "./assets/js/blocks/src/blocks/search-block/context.js");





var Block = function Block(props) {
  var _results$related_cont;
  var relatedPostsHeading = props.relatedPostsHeading,
    maxPostsRelated = props.maxPostsRelated,
    background = props.background,
    enabledPost = props.enabledPost,
    enabledPage = props.enabledPage;
  var _useSearchContext = (0,_context__WEBPACK_IMPORTED_MODULE_4__.useSearchContext)(),
    query = _useSearchContext.query;
  var _useStoreSearch = (0,_ywcas_base_context_hooks__WEBPACK_IMPORTED_MODULE_2__.useStoreSearch)(),
    getResults = _useStoreSearch.getResults;
  var _getResults = getResults(query),
    isSearching = _getResults.isLoading,
    results = _getResults.results;
  if (isSearching) {
    return null;
  }
  if (!((_results$related_cont = results.related_content) !== null && _results$related_cont !== void 0 && _results$related_cont.results) || results.related_content.results.length === 0) {
    return null;
  }
  var relatedContent = results.related_content.results;
  if (!enabledPost) {
    relatedContent = relatedContent.filter(function (related) {
      return related.post_type !== 'post';
    });
  }
  if (!enabledPage) {
    relatedContent = relatedContent.filter(function (related) {
      return related.post_type !== 'page';
    });
  }
  if (relatedContent.length === 0) {
    return null;
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_lapilli_ui_components__WEBPACK_IMPORTED_MODULE_1__.Box, {
    className: "ywcas-classic-related-content-wrapper"
  }, !isSearching && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_base_components__WEBPACK_IMPORTED_MODULE_3__.RelatedContent, {
    label: relatedPostsHeading,
    posts: relatedContent,
    background: background,
    maxResults: maxPostsRelated
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Block);

/***/ }),

/***/ "./assets/js/blocks/src/blocks/search-block/inner-blocks/related-posts-block/frontend.js":
/*!***********************************************************************************************!*\
  !*** ./assets/js/blocks/src/blocks/search-block/inner-blocks/related-posts-block/frontend.js ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _data_shared_hocs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../data/shared/hocs */ "./assets/js/blocks/src/data/shared/hocs/index.js");
/* harmony import */ var _block__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./block */ "./assets/js/blocks/src/blocks/search-block/inner-blocks/related-posts-block/block.js");
/* harmony import */ var _attributes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./attributes */ "./assets/js/blocks/src/blocks/search-block/inner-blocks/related-posts-block/attributes.js");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_data_shared_hocs__WEBPACK_IMPORTED_MODULE_0__.withFilteredAttributes)(_attributes__WEBPACK_IMPORTED_MODULE_2__["default"])(_block__WEBPACK_IMPORTED_MODULE_1__["default"]));

/***/ }),

/***/ "./assets/js/blocks/src/data/index.js":
/*!********************************************!*\
  !*** ./assets/js/blocks/src/data/index.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ "./assets/js/blocks/src/data/shared/hocs/index.js":
/*!********************************************************!*\
  !*** ./assets/js/blocks/src/data/shared/hocs/index.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   withFilteredAttributes: () => (/* reexport safe */ _with_filtered_attributes__WEBPACK_IMPORTED_MODULE_0__.withFilteredAttributes)
/* harmony export */ });
/* harmony import */ var _with_filtered_attributes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./with-filtered-attributes */ "./assets/js/blocks/src/data/shared/hocs/with-filtered-attributes.js");


/***/ }),

/***/ "./assets/js/blocks/src/data/shared/hocs/with-filtered-attributes.js":
/*!***************************************************************************!*\
  !*** ./assets/js/blocks/src/data/shared/hocs/with-filtered-attributes.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   withFilteredAttributes: () => (/* binding */ withFilteredAttributes)
/* harmony export */ });
/* harmony import */ var _base_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../base/utils */ "./assets/js/blocks/src/base/utils/index.js");
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
 * HOC that filters given attributes by valid block attribute values, or uses defaults if undefined.
 *
 * @param {Object} blockAttributes Component being wrapped.
 */
var withFilteredAttributes = function withFilteredAttributes(blockAttributes) {
  return function (OriginalComponent) {
    return function (ownProps) {
      var validBlockAttributes = (0,_base_utils__WEBPACK_IMPORTED_MODULE_0__.getValidBlockAttributes)(blockAttributes, ownProps);
      return /*#__PURE__*/React.createElement(OriginalComponent, _extends({}, ownProps, validBlockAttributes));
    };
  };
};

/***/ }),

/***/ "./node_modules/fast-deep-equal/es6/index.js":
/*!***************************************************!*\
  !*** ./node_modules/fast-deep-equal/es6/index.js ***!
  \***************************************************/
/***/ ((module) => {



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


/***/ })

}]);
//# sourceMappingURL=related-post.js.map