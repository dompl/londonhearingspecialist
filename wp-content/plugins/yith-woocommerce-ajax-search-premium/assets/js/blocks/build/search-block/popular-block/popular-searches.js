"use strict";
(globalThis["webpackChunkyith_woocommerce_ajax_search_premium"] = globalThis["webpackChunkyith_woocommerce_ajax_search_premium"] || []).push([["popular-block/popular-searches"],{

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

/***/ "./assets/js/blocks/src/blocks/search-block/inner-blocks/popular-block/attributes.js":
/*!*******************************************************************************************!*\
  !*** ./assets/js/blocks/src/blocks/search-block/inner-blocks/popular-block/attributes.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ "./assets/js/blocks/src/blocks/search-block/inner-blocks/popular-block/block.js":
/*!**************************************************************************************!*\
  !*** ./assets/js/blocks/src/blocks/search-block/inner-blocks/popular-block/block.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _base_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../base/components */ "./assets/js/blocks/src/base/components/index.js");
/* harmony import */ var _lapilli_ui_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @lapilli-ui/components */ "@lapilli-ui/components");
/* harmony import */ var _lapilli_ui_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_lapilli_ui_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../context */ "./assets/js/blocks/src/blocks/search-block/context.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../config */ "./assets/js/blocks/src/config.js");





var Block = function Block(_ref) {
  var className = _ref.className,
    _ref$maxPopularResult = _ref.maxPopularResults,
    maxPopularResults = _ref$maxPopularResult === void 0 ? 3 : _ref$maxPopularResult,
    popularHeading = _ref.popularHeading;
  var _useSearchContext = (0,_context__WEBPACK_IMPORTED_MODULE_3__.useSearchContext)(),
    setQuery = _useSearchContext.setQuery;
  if (_config__WEBPACK_IMPORTED_MODULE_4__.popular.length === 0) {
    return;
  }
  var popularItems = _config__WEBPACK_IMPORTED_MODULE_4__.popular.slice(0, maxPopularResults);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_lapilli_ui_components__WEBPACK_IMPORTED_MODULE_2__.Box, {
    className: className
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_base_components__WEBPACK_IMPORTED_MODULE_1__.PopularSearches, {
    searches: popularItems,
    title: popularHeading,
    onClick: setQuery
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Block);

/***/ }),

/***/ "./assets/js/blocks/src/blocks/search-block/inner-blocks/popular-block/frontend.js":
/*!*****************************************************************************************!*\
  !*** ./assets/js/blocks/src/blocks/search-block/inner-blocks/popular-block/frontend.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _block__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./block */ "./assets/js/blocks/src/blocks/search-block/inner-blocks/popular-block/block.js");
/* harmony import */ var _data_shared_hocs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../data/shared/hocs */ "./assets/js/blocks/src/data/shared/hocs/index.js");
/* harmony import */ var _attributes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./attributes */ "./assets/js/blocks/src/blocks/search-block/inner-blocks/popular-block/attributes.js");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_data_shared_hocs__WEBPACK_IMPORTED_MODULE_1__.withFilteredAttributes)(_attributes__WEBPACK_IMPORTED_MODULE_2__["default"])(_block__WEBPACK_IMPORTED_MODULE_0__["default"]));

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

/***/ })

}]);
//# sourceMappingURL=popular-searches.js.map