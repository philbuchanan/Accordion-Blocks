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

/***/ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayLikeToArray.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

module.exports = _arrayLikeToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithHoles.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
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

module.exports = _defineProperty;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
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

module.exports = _iterableToArrayLimit;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableRest.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableRest.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableRest;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/slicedToArray.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/slicedToArray.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(/*! ./arrayWithHoles */ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js");

var iterableToArrayLimit = __webpack_require__(/*! ./iterableToArrayLimit */ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js");

var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray */ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js");

var nonIterableRest = __webpack_require__(/*! ./nonIterableRest */ "./node_modules/@babel/runtime/helpers/nonIterableRest.js");

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray */ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

module.exports = _unsupportedIterableToArray;

/***/ }),

/***/ "./src/block/deprecated.js":
/*!*********************************!*\
  !*** ./src/block/deprecated.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

var deprecated = [{
  attributes: {
    title: {
      type: 'array',
      source: 'children',
      selector: '.c-accordion__title'
    },
    initiallyOpen: {
      type: 'boolean',
      default: false
    },
    clickToClose: {
      type: 'boolean',
      default: true
    },
    autoClose: {
      type: 'boolean',
      default: true
    },
    titleTag: {
      type: 'string',
      default: 'h2'
    },
    scroll: {
      type: 'boolean',
      default: false
    },
    scrollOffset: {
      type: 'number',
      default: 0
    },
    uuid: {
      type: 'number'
    }
  },
  supports: {
    anchor: true
  },
  save: function save(_ref) {
    var attributes = _ref.attributes;
    var className = attributes.className,
        title = attributes.title,
        initiallyOpen = attributes.initiallyOpen,
        clickToClose = attributes.clickToClose,
        autoClose = attributes.autoClose,
        titleTag = attributes.titleTag,
        scroll = attributes.scroll,
        scrollOffset = attributes.scrollOffset,
        uuid = attributes.uuid;
    var itemClasses = ['c-accordion__item', 'js-accordion-item', 'no-js'];
    var titleClasses = ['c-accordion__title', 'js-accordion-controller'];
    var contentStyles = {};

    if (titleTag === 'button') {
      titleClasses.push('c-accordion__title--button');
    }

    if (initiallyOpen) {
      itemClasses.push('is-open');
    } else {
      contentStyles.display = 'none';
    }

    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: [].concat(itemClasses, [className]).join(' '),
      "data-initially-open": initiallyOpen,
      "data-click-to-close": clickToClose,
      "data-auto-close": autoClose,
      "data-scroll": scroll,
      "data-scroll-offset": scrollOffset
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["RichText"].Content, {
      id: 'at-' + uuid,
      className: titleClasses.join(' '),
      tagName: titleTag,
      tabIndex: 0,
      role: "button",
      "aria-controls": 'ac-' + uuid,
      value: title
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      id: 'ac-' + uuid,
      className: "c-accordion__content",
      style: contentStyles
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["InnerBlocks"].Content, null)));
  }
}];
/* harmony default export */ __webpack_exports__["default"] = (deprecated);

/***/ }),

/***/ "./src/block/edit.js":
/*!***************************!*\
  !*** ./src/block/edit.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/keycodes */ "@wordpress/keycodes");
/* harmony import */ var _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_wordpress_keycodes__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _html_tag_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./html-tag-icon */ "./src/block/html-tag-icon.js");
/* harmony import */ var _utils_classnames__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils/classnames */ "./src/utils/classnames.js");



/**
 * WordPress dependencies
 */








/**
 * Internal dependencies
 */




var AccordionItemEdit = function AccordionItemEdit(_ref) {
  var className = _ref.className,
      attributes = _ref.attributes,
      setAttributes = _ref.setAttributes,
      clientId = _ref.clientId,
      isSelected = _ref.isSelected;
  var title = attributes.title,
      initiallyOpen = attributes.initiallyOpen,
      clickToClose = attributes.clickToClose,
      autoClose = attributes.autoClose,
      titleTag = attributes.titleTag,
      scroll = attributes.scroll,
      scrollOffset = attributes.scrollOffset,
      uuid = attributes.uuid; // An accordion item is considered new if it doesn't have a UUID yet

  var _useState = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useState"])(!uuid),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),
      isNew = _useState2[0],
      setIsNew = _useState2[1];

  var isParentOfSelectedBlock = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__["useSelect"])(function (select) {
    return select('core/block-editor').hasSelectedInnerBlock(clientId, true);
  });
  var isAccordionItemSelected = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__["useSelect"])(function (select) {
    var block = select('core/block-editor').getSelectedBlock();
    return block ? block.name === 'pb/accordion-item' : false;
  });
  /**
   * UUID is generated as a combination of the post ID and this block's
   * instance ID.
   *
   * This ensures the UUID is unique not just in this post, but across all
   * posts. This is necessary since accordions from multiple posts may be
   * displayed on the same page (e.g. an archive page that shows the full post
   * content). See issue #31.
   *
   * We use instanceId so a new UUID is generated even if the accordion item
   * is duplicated. See issue #47.
   *
   * TODO: The one downside to this approach is that sometimes accordion
   * items' UUIDs change when the editor is reloaded. For example, if the user
   * removes a block and saves the page, when the editor loads again, it will
   * assign new instanceIds to each block.
   */

  var instanceId = Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_3__["useInstanceId"])(AccordionItemEdit);
  var postId = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__["useSelect"])(function (select) {
    return select('core/editor').getCurrentPostId();
  });
  Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    var id = Number("".concat(postId).concat(instanceId));

    if (id !== uuid) {
      setAttributes({
        uuid: id
      });
    }
  }, [instanceId]);
  var isNestedAccordion = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__["useSelect"])(function (select) {
    var parentBlocks = select('core/block-editor').getBlockParentsByBlockName(clientId, 'pb/accordion-item');
    return !!parentBlocks.length;
  });
  var userCanSetDefaults = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__["useSelect"])(function (select) {
    /**
     * Only Administrators and Editors may set new default settings. Only
     * editors and above can create pages, so we use that as a proxy for
     * editor role and above.
     */
    return select('core').canUser('create', 'pages');
  });
  var defaults = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__["useSelect"])(function (select) {
    return select('accordion-blocks').getDefaultSettings();
  });
  var settingsAreDefaults = !(defaults === undefined || defaults === null) && initiallyOpen === defaults.initiallyOpen && clickToClose === defaults.clickToClose && autoClose === defaults.autoClose && scroll === defaults.scroll && scrollOffset === defaults.scrollOffset;
  Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    /**
     * We only set this accordion item's attributes to defaults if it is new
     * and its attributes aren't already the defaults.
     */
    if (isNew && !settingsAreDefaults) {
      setAttributes({
        initiallyOpen: defaults.initiallyOpen,
        clickToClose: defaults.clickToClose,
        autoClose: defaults.autoClose,
        scroll: defaults.scroll,
        scrollOffset: defaults.scrollOffset
      });
    }
  }, [defaults]);
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__["BlockControls"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["ToolbarGroup"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["Dropdown"], {
    popoverProps: {
      className: 'ac-heading-level-dropdown',
      isAlternate: true
    },
    position: "bottom right",
    renderToggle: function renderToggle(_ref2) {
      var isOpen = _ref2.isOpen,
          onToggle = _ref2.onToggle;

      var openOnArrowDown = function openOnArrowDown(event) {
        if (!isOpen && event.keyCode === _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_8__["DOWN"]) {
          event.preventDefault();
          event.stopPropagation();
          onToggle();
        }
      };

      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["ToolbarButton"], {
        "aria-expanded": isOpen,
        "aria-haspopup": "true",
        icon: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_html_tag_icon__WEBPACK_IMPORTED_MODULE_9__["default"], {
          tag: titleTag
        }),
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Change accordion title tag', 'accordion-blocks'),
        onClick: onToggle,
        onKeyDown: openOnArrowDown,
        showTooltip: true
      });
    },
    renderContent: function renderContent() {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["Toolbar"], {
        className: "ac-heading-level-toolbar",
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Change accordion title tag', 'accordion-blocks')
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["ToolbarGroup"], {
        isCollapsed: false,
        controls: [{
          tag: 'h1',
          label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Heading 1', 'accordion-blocks')
        }, {
          tag: 'h2',
          label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Heading 2', 'accordion-blocks')
        }, {
          tag: 'h3',
          label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Heading 3', 'accordion-blocks')
        }, {
          tag: 'h4',
          label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Heading 4', 'accordion-blocks')
        }, {
          tag: 'h5',
          label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Heading 5', 'accordion-blocks')
        }, {
          tag: 'h6',
          label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Heading 6', 'accordion-blocks')
        }, {
          tag: 'button',
          label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Button', 'accordion-blocks')
        }].map(function (tag) {
          return {
            icon: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_html_tag_icon__WEBPACK_IMPORTED_MODULE_9__["default"], {
              tag: tag.tag
            }),
            title: tag.label,
            isActive: titleTag === tag.tag,
            onClick: function onClick() {
              return setAttributes({
                'titleTag': tag.tag
              });
            }
          };
        })
      }));
    }
  }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__["InspectorControls"], null, isNestedAccordion && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: "components-notice is-warning",
    style: {
      margin: '0',
      borderTop: '1px solid #f0f0f0'
    }
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('This accordion item is nested inside another accordion item. While this will work, it may not be what you intended.', 'accordion-blocks')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["PanelBody"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Accordion Item Settings', 'accordion-blocks')
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["ToggleControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Open By Default', 'accordion-blocks'),
    help: initiallyOpen ? Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('This accordion item will be open when the page loads.', 'accordion-blocks') : Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('This accordion item will be closed when the page loads.', 'accordion-blocks'),
    checked: initiallyOpen,
    onChange: function onChange(value) {
      return setAttributes({
        initiallyOpen: value
      });
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["ToggleControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Click to Close', 'accordion-blocks'),
    help: clickToClose ? Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('When open, this accordion item title can be clicked again to close it.', 'accordion-blocks') : Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Once opened, this accordion item cannot be closed by clicking the title.', 'accordion-blocks'),
    checked: clickToClose,
    onChange: function onChange(value) {
      return setAttributes({
        clickToClose: value
      });
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["ToggleControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Auto Close', 'accordion-blocks'),
    help: autoClose ? Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('This accordion item will close when opening another item.', 'accordion-blocks') : Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('This accordion item will remain open when opening another item.', 'accordion-blocks'),
    checked: autoClose,
    onChange: function onChange(value) {
      return setAttributes({
        autoClose: value
      });
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["ToggleControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Scroll to Accordion Item', 'accordion-blocks'),
    help: scroll ? Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('The page will scroll to the accordion item title when it is opened.', 'accordion-blocks') : Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('The page will not scroll when opening accordion items.', 'accordion-blocks'),
    checked: scroll,
    onChange: function onChange(value) {
      return setAttributes({
        scroll: value,
        scrollOffset: 0
      });
    }
  }), !!scroll && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["RangeControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Scroll Pixel Offset', 'accordion-blocks'),
    value: scrollOffset,
    onChange: function onChange(value) {
      return setAttributes({
        scrollOffset: parseInt(value, 10) ? parseInt(value, 10) : 0
      });
    },
    min: 0,
    max: 1000,
    help: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('A pixel offset for the final scroll position.', 'accordion-blocks')
  }), !settingsAreDefaults && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("hr", null), userCanSetDefaults && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["Button"], {
    isLink: true,
    onClick: function onClick() {
      Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__["dispatch"])('accordion-blocks').saveDefaultSettings({
        initiallyOpen: initiallyOpen,
        clickToClose: clickToClose,
        autoClose: autoClose,
        scroll: scroll,
        scrollOffset: scrollOffset
      });
    }
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Make These Settings the Defaults', 'accordion-blocks')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("p", {
    style: {
      fontStyle: 'italic',
      marginTop: '7px'
    }
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Default settings only apply when creating new accordion items.', 'accordion-blocks'))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("p", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["Button"], {
    isLink: true,
    isDestructive: true,
    onClick: function onClick() {
      setAttributes({
        initiallyOpen: defaults.initiallyOpen,
        clickToClose: defaults.clickToClose,
        autoClose: defaults.autoClose,
        scroll: defaults.scroll,
        scrollOffset: defaults.scrollOffset
      });
    }
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Reset These Settings to Defaults', 'accordion-blocks')))))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: Object(_utils_classnames__WEBPACK_IMPORTED_MODULE_10__["default"])('c-accordion__item', 'js-accordion-item', isSelected || isParentOfSelectedBlock && !isAccordionItemSelected ? 'is-selected' : '', className)
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__["RichText"], {
    className: Object(_utils_classnames__WEBPACK_IMPORTED_MODULE_10__["default"])('c-accordion__title', {
      'c-accordion__title--button': titleTag === 'button'
    }),
    tagName: titleTag === 'button' ? 'div' : titleTag,
    allowedFormats: ['core/bold', 'core/italic'],
    placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Accordion item title…', 'accordion-blocks'),
    value: title,
    onChange: function onChange(value) {
      return setAttributes({
        title: value
      });
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: "c-accordion__content"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__["InnerBlocks"], null))));
};

/* harmony default export */ __webpack_exports__["default"] = (AccordionItemEdit);

/***/ }),

/***/ "./src/block/editor.scss":
/*!*******************************!*\
  !*** ./src/block/editor.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/block/html-tag-icon.js":
/*!************************************!*\
  !*** ./src/block/html-tag-icon.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);


/**
 * Wordpress dependencies
 */


var HtmlTagIcon = function HtmlTagIcon(_ref) {
  var tag = _ref.tag;
  var tagToPath = {
    h1: 'M9 5h2v10H9v-4H5v4H3V5h2v4h4V5zm6.6 0c-.6.9-1.5 1.7-2.6 2v1h2v7h2V5h-1.4z',
    h2: 'M7 5h2v10H7v-4H3v4H1V5h2v4h4V5zm8 8c.5-.4.6-.6 1.1-1.1.4-.4.8-.8 1.2-1.3.3-.4.6-.8.9-1.3.2-.4.3-.8.3-1.3 0-.4-.1-.9-.3-1.3-.2-.4-.4-.7-.8-1-.3-.3-.7-.5-1.2-.6-.5-.2-1-.2-1.5-.2-.4 0-.7 0-1.1.1-.3.1-.7.2-1 .3-.3.1-.6.3-.9.5-.3.2-.6.4-.8.7l1.2 1.2c.3-.3.6-.5 1-.7.4-.2.7-.3 1.2-.3s.9.1 1.3.4c.3.3.5.7.5 1.1 0 .4-.1.8-.4 1.1-.3.5-.6.9-1 1.2-.4.4-1 .9-1.6 1.4-.6.5-1.4 1.1-2.2 1.6V15h8v-2H15z',
    h3: 'M12.1 12.2c.4.3.8.5 1.2.7.4.2.9.3 1.4.3.5 0 1-.1 1.4-.3.3-.1.5-.5.5-.8 0-.2 0-.4-.1-.6-.1-.2-.3-.3-.5-.4-.3-.1-.7-.2-1-.3-.5-.1-1-.1-1.5-.1V9.1c.7.1 1.5-.1 2.2-.4.4-.2.6-.5.6-.9 0-.3-.1-.6-.4-.8-.3-.2-.7-.3-1.1-.3-.4 0-.8.1-1.1.3-.4.2-.7.4-1.1.6l-1.2-1.4c.5-.4 1.1-.7 1.6-.9.5-.2 1.2-.3 1.8-.3.5 0 1 .1 1.6.2.4.1.8.3 1.2.5.3.2.6.5.8.8.2.3.3.7.3 1.1 0 .5-.2.9-.5 1.3-.4.4-.9.7-1.5.9v.1c.6.1 1.2.4 1.6.8.4.4.7.9.7 1.5 0 .4-.1.8-.3 1.2-.2.4-.5.7-.9.9-.4.3-.9.4-1.3.5-.5.1-1 .2-1.6.2-.8 0-1.6-.1-2.3-.4-.6-.2-1.1-.6-1.6-1l1.1-1.4zM7 9H3V5H1v10h2v-4h4v4h2V5H7v4z',
    h4: 'M9 15H7v-4H3v4H1V5h2v4h4V5h2v10zm10-2h-1v2h-2v-2h-5v-2l4-6h3v6h1v2zm-3-2V7l-2.8 4H16z',
    h5: 'M12.1 12.2c.4.3.7.5 1.1.7.4.2.9.3 1.3.3.5 0 1-.1 1.4-.4.4-.3.6-.7.6-1.1 0-.4-.2-.9-.6-1.1-.4-.3-.9-.4-1.4-.4H14c-.1 0-.3 0-.4.1l-.4.1-.5.2-1-.6.3-5h6.4v1.9h-4.3L14 8.8c.2-.1.5-.1.7-.2.2 0 .5-.1.7-.1.5 0 .9.1 1.4.2.4.1.8.3 1.1.6.3.2.6.6.8.9.2.4.3.9.3 1.4 0 .5-.1 1-.3 1.4-.2.4-.5.8-.9 1.1-.4.3-.8.5-1.3.7-.5.2-1 .3-1.5.3-.8 0-1.6-.1-2.3-.4-.6-.2-1.1-.6-1.6-1-.1-.1 1-1.5 1-1.5zM9 15H7v-4H3v4H1V5h2v4h4V5h2v10z',
    h6: 'M9 15H7v-4H3v4H1V5h2v4h4V5h2v10zm8.6-7.5c-.2-.2-.5-.4-.8-.5-.6-.2-1.3-.2-1.9 0-.3.1-.6.3-.8.5l-.6.9c-.2.5-.2.9-.2 1.4.4-.3.8-.6 1.2-.8.4-.2.8-.3 1.3-.3.4 0 .8 0 1.2.2.4.1.7.3 1 .6.3.3.5.6.7.9.2.4.3.8.3 1.3s-.1.9-.3 1.4c-.2.4-.5.7-.8 1-.4.3-.8.5-1.2.6-1 .3-2 .3-3 0-.5-.2-1-.5-1.4-.9-.4-.4-.8-.9-1-1.5-.2-.6-.3-1.3-.3-2.1s.1-1.6.4-2.3c.2-.6.6-1.2 1-1.6.4-.4.9-.7 1.4-.9.6-.3 1.1-.4 1.7-.4.7 0 1.4.1 2 .3.5.2 1 .5 1.4.8 0 .1-1.3 1.4-1.3 1.4zm-2.4 5.8c.2 0 .4 0 .6-.1.2 0 .4-.1.5-.2.1-.1.3-.3.4-.5.1-.2.1-.5.1-.7 0-.4-.1-.8-.4-1.1-.3-.2-.7-.3-1.1-.3-.3 0-.7.1-1 .2-.4.2-.7.4-1 .7 0 .3.1.7.3 1 .1.2.3.4.4.6.2.1.3.3.5.3.2.1.5.2.7.1z',
    button: 'M17.5,4.5H2.5A1.5,1.5,0,0,0,1,6v8a1.5,1.5,0,0,0,1.5,1.5h15A1.5,1.5,0,0,0,19,14V6A1.5,1.5,0,0,0,17.5,4.5Zm0,8.75a.76.76,0,0,1-.75.75H3.25a.76.76,0,0,1-.75-.75V6.75A.76.76,0,0,1,3.25,6h13.5a.76.76,0,0,1,.75.75ZM5.5,11h9V9h-9Z'
  };
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
    width: "20",
    height: "20",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Path"], {
    d: tagToPath[tag]
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (HtmlTagIcon);

/***/ }),

/***/ "./src/block/index.js":
/*!****************************!*\
  !*** ./src/block/index.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index.scss */ "./src/block/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./editor.scss */ "./src/block/editor.scss");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_editor_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./settings */ "./src/block/settings.js");
/* harmony import */ var _transforms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./transforms */ "./src/block/transforms.js");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./edit */ "./src/block/edit.js");
/* harmony import */ var _deprecated__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./deprecated */ "./src/block/deprecated.js");



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */







Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__["registerBlockType"])('pb/accordion-item', _objectSpread(_objectSpread({}, _settings__WEBPACK_IMPORTED_MODULE_6__["default"]), {}, {
  transforms: _transforms__WEBPACK_IMPORTED_MODULE_7__["default"],
  edit: _edit__WEBPACK_IMPORTED_MODULE_8__["default"],
  save: function save(_ref) {
    var attributes = _ref.attributes;
    var className = attributes.className,
        title = attributes.title,
        initiallyOpen = attributes.initiallyOpen,
        clickToClose = attributes.clickToClose,
        autoClose = attributes.autoClose,
        titleTag = attributes.titleTag,
        scroll = attributes.scroll,
        scrollOffset = attributes.scrollOffset,
        uuid = attributes.uuid;
    var itemClasses = ['c-accordion__item', 'js-accordion-item', 'no-js'];
    var titleClasses = ['c-accordion__title', 'js-accordion-controller'];
    var contentStyles = {};

    if (titleTag === 'button') {
      titleClasses.push('c-accordion__title--button');
    }

    if (initiallyOpen) {
      itemClasses.push('is-open');
    } else {
      contentStyles.display = 'none';
    }

    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: [].concat(itemClasses, [className]).join(' '),
      "data-initially-open": initiallyOpen,
      "data-click-to-close": clickToClose,
      "data-auto-close": autoClose,
      "data-scroll": scroll,
      "data-scroll-offset": scrollOffset
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["RichText"].Content, {
      id: 'at-' + uuid,
      className: titleClasses.join(' '),
      tagName: titleTag,
      role: "button",
      value: title
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      id: 'ac-' + uuid,
      className: "c-accordion__content"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["InnerBlocks"].Content, null)));
  },
  deprecated: _deprecated__WEBPACK_IMPORTED_MODULE_9__["default"]
}));

/***/ }),

/***/ "./src/block/index.scss":
/*!******************************!*\
  !*** ./src/block/index.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/block/settings.js":
/*!*******************************!*\
  !*** ./src/block/settings.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);


/**
 * WordPress dependencies
 */


/* harmony default export */ __webpack_exports__["default"] = ({
  icon: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["SVG"], {
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["Path"], {
    d: "M16.93,8.93a1,1,0,0,1-.7-.29L12,4.41,7.9,8.51A1,1,0,0,1,6.49,7.1L12,1.59l5.64,5.64a1,1,0,0,1,0,1.41A1,1,0,0,1,16.93,8.93Z"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["Path"], {
    d: "M12.07,22.35,6.42,16.71a1,1,0,0,1,1.42-1.42l4.23,4.23,4.09-4.1a1,1,0,0,1,1.42,1.42Z"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["Path"], {
    d: "M17.93,13H5.82a1,1,0,0,1,0-2H17.93a1,1,0,0,1,0,2Z"
  })),
  example: {
    attributes: {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Accordion item title', 'accordion-blocks'),
      titleTag: 'h3'
    },
    innerBlocks: [{
      name: 'core/paragraph',
      attributes: {
        content: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Sample accordion item content for previewing styles in the editor.', 'accordion-blocks')
      }
    }]
  }
});

/***/ }),

/***/ "./src/block/transforms.js":
/*!*********************************!*\
  !*** ./src/block/transforms.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/**
 * WordPress dependencies
 */

/* harmony default export */ __webpack_exports__["default"] = ({
  from: [{
    type: 'block',
    blocks: ['core/heading'],
    transform: function transform(attributes) {
      return Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__["createBlock"])('pb/accordion-item', {
        title: attributes.content,
        titleTag: 'h' + (attributes.level <= 4 ? attributes.level : 2)
      });
    }
  }, {
    type: 'block',
    isMultiBlock: true,
    blocks: ['core/paragraph'],
    transform: function transform(attributes) {
      return Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__["createBlock"])('pb/accordion-item', {}, attributes.map(function (item) {
        return Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__["createBlock"])('core/paragraph', {
          content: item.content
        });
      }));
    }
  }],
  to: [{
    type: 'block',
    blocks: ['core/paragraph'],
    transform: function transform(attributes, innerBlocks) {
      var newBlocks = innerBlocks.map(function (block) {
        return Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__["createBlock"])(block.name, block.attributes);
      });
      var level = attributes.titleTag !== 'button' ? parseInt(attributes.titleTag.replace('h', '')) : 2;
      newBlocks.splice(0, 0, Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__["createBlock"])('core/heading', {
        content: attributes.title,
        anchor: attributes.anchor,
        className: attributes.className,
        level: level
      }));
      return newBlocks;
    }
  }]
});

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./store */ "./src/store/index.js");
/* harmony import */ var _block__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./block */ "./src/block/index.js");



/***/ }),

/***/ "./src/store/index.js":
/*!****************************!*\
  !*** ./src/store/index.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_2__);


/**
 * WordPress dependencies
 */


var initialState = {
  defaults: {
    initiallyOpen: false,
    clickToClose: true,
    autoClose: true,
    scroll: false,
    scrollOffset: 0
  }
};
var actions = {
  setDefaults: function setDefaults(defaults) {
    return {
      type: 'SET_DEFAULTS',
      defaults: defaults
    };
  },
  saveDefaultSettings: function saveDefaultSettings(defaults) {
    return {
      type: 'SAVE_DEFAULTS',
      defaults: defaults
    };
  },
  fetchFromAPI: function fetchFromAPI(path) {
    return {
      type: 'FETCH_FROM_API',
      path: path
    };
  }
};
Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__["registerStore"])('accordion-blocks', {
  reducer: function reducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
    var action = arguments.length > 1 ? arguments[1] : undefined;

    switch (action.type) {
      case 'SET_DEFAULTS':
        return Object.assign({}, state, {
          defaults: action.defaults
        });

      case 'SAVE_DEFAULTS':
        _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_2___default()({
          path: 'accordion-blocks/v1/defaults',
          data: action.defaults,
          method: 'POST'
        }).then(function (response) {}).catch(function (error) {});
        return Object.assign({}, state, {
          defaults: action.defaults
        });

      default:
        return state;
    }
  },
  actions: actions,
  selectors: {
    getDefaultSettings: function getDefaultSettings(state) {
      return state.defaults;
    }
  },
  controls: {
    FETCH_FROM_API: function FETCH_FROM_API(action) {
      return _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_2___default()({
        path: action.path
      });
    }
  },
  resolvers: {
    getDefaultSettings: /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function getDefaultSettings() {
      var path, defaults;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function getDefaultSettings$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              path = '/accordion-blocks/v1/defaults';
              _context.next = 3;
              return actions.fetchFromAPI(path);

            case 3:
              defaults = _context.sent;
              return _context.abrupt("return", actions.setDefaults(defaults));

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, getDefaultSettings);
    })
  }
});

/***/ }),

/***/ "./src/utils/classnames.js":
/*!*********************************!*\
  !*** ./src/utils/classnames.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__);


function classnames() {
  var classes = [];

  for (var i = 0; i < arguments.length; i++) {
    var arg = arguments[i];

    if (!arg) {
      continue;
    }

    var argType = _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(arg);

    if (argType === 'string' || argType === 'number') {
      classes.push(arg);
    } else if (Array.isArray(arg) && arg.length) {
      var inner = classnames.apply(null, arg);

      if (inner) {
        classes.push(inner);
      }
    } else if (argType === 'object') {
      for (var key in arg) {
        if (hasOwnProperty.call(arg, key) && arg[key]) {
          classes.push(key);
        }
      }
    }
  }

  return classes.join(' ');
}

/* harmony default export */ __webpack_exports__["default"] = (classnames);

/***/ }),

/***/ "@babel/runtime/regenerator":
/*!**********************************************!*\
  !*** external {"this":"regeneratorRuntime"} ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["regeneratorRuntime"]; }());

/***/ }),

/***/ "@wordpress/api-fetch":
/*!*******************************************!*\
  !*** external {"this":["wp","apiFetch"]} ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["apiFetch"]; }());

/***/ }),

/***/ "@wordpress/block-editor":
/*!**********************************************!*\
  !*** external {"this":["wp","blockEditor"]} ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["blockEditor"]; }());

/***/ }),

/***/ "@wordpress/blocks":
/*!*****************************************!*\
  !*** external {"this":["wp","blocks"]} ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["blocks"]; }());

/***/ }),

/***/ "@wordpress/components":
/*!*********************************************!*\
  !*** external {"this":["wp","components"]} ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["components"]; }());

/***/ }),

/***/ "@wordpress/compose":
/*!******************************************!*\
  !*** external {"this":["wp","compose"]} ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["compose"]; }());

/***/ }),

/***/ "@wordpress/core-data":
/*!*******************************************!*\
  !*** external {"this":["wp","coreData"]} ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["coreData"]; }());

/***/ }),

/***/ "@wordpress/data":
/*!***************************************!*\
  !*** external {"this":["wp","data"]} ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["data"]; }());

/***/ }),

/***/ "@wordpress/element":
/*!******************************************!*\
  !*** external {"this":["wp","element"]} ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["element"]; }());

/***/ }),

/***/ "@wordpress/i18n":
/*!***************************************!*\
  !*** external {"this":["wp","i18n"]} ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["i18n"]; }());

/***/ }),

/***/ "@wordpress/keycodes":
/*!*******************************************!*\
  !*** external {"this":["wp","keycodes"]} ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["keycodes"]; }());

/***/ })

/******/ });
//# sourceMappingURL=index.js.map