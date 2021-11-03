/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/block/deprecated.js":
/*!*********************************!*\
  !*** ./src/block/deprecated.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const deprecated = [{
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
  save: _ref => {
    let {
      attributes
    } = _ref;
    const {
      className,
      title,
      initiallyOpen,
      clickToClose,
      autoClose,
      titleTag,
      scroll,
      scrollOffset,
      uuid
    } = attributes;
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

    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: [...itemClasses, className].join(' '),
      "data-initially-open": initiallyOpen,
      "data-click-to-close": clickToClose,
      "data-auto-close": autoClose,
      "data-scroll": scroll,
      "data-scroll-offset": scrollOffset
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
      id: 'at-' + uuid,
      className: titleClasses.join(' '),
      tagName: titleTag,
      tabIndex: 0,
      role: "button",
      "aria-controls": 'ac-' + uuid,
      value: title
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      id: 'ac-' + uuid,
      className: "c-accordion__content",
      style: contentStyles
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InnerBlocks.Content, null)));
  }
}];
/* harmony default export */ __webpack_exports__["default"] = (deprecated);

/***/ }),

/***/ "./src/block/edit.js":
/*!***************************!*\
  !*** ./src/block/edit.js ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/keycodes */ "@wordpress/keycodes");
/* harmony import */ var _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_keycodes__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _html_tag_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./html-tag-icon */ "./src/block/html-tag-icon.js");
/* harmony import */ var _utils_classnames__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/classnames */ "./src/utils/classnames.js");


/**
 * WordPress dependencies
 */








/**
 * Internal dependencies
 */




const AccordionItemEdit = _ref => {
  let {
    className,
    attributes,
    setAttributes,
    clientId,
    isSelected
  } = _ref;
  const {
    title,
    initiallyOpen,
    clickToClose,
    autoClose,
    titleTag,
    scroll,
    scrollOffset,
    uuid
  } = attributes; // An accordion item is considered new if it doesn't have a UUID yet

  const [isNew, setIsNew] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(!uuid);
  const isParentOfSelectedBlock = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useSelect)(select => {
    return select('core/block-editor').hasSelectedInnerBlock(clientId, true);
  });
  const isAccordionItemSelected = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useSelect)(select => {
    const block = select('core/block-editor').getSelectedBlock();
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

  const instanceId = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__.useInstanceId)(AccordionItemEdit);
  const entityId = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useSelect)(select => {
    return select('core/editor') !== null ? select('core/editor').getCurrentPostId() : 0;
  });
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const id = Number(`${entityId}${instanceId}`);

    if (id !== uuid) {
      setAttributes({
        uuid: id
      });
    }
  }, [instanceId]);
  const isNestedAccordion = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useSelect)(select => {
    const parentBlocks = select('core/block-editor').getBlockParentsByBlockName(clientId, 'pb/accordion-item');
    return !!parentBlocks.length;
  });
  const userCanSetDefaults = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useSelect)(select => {
    /**
     * Only Administrators and Editors may set new default settings. Only
     * editors and above can create pages, so we use that as a proxy for
     * editor role and above.
     */
    return select('core').canUser('create', 'pages');
  });
  const defaults = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useSelect)(select => {
    return select('accordion-blocks').getDefaultSettings();
  });
  const settingsAreDefaults = !(defaults === undefined || defaults === null) && initiallyOpen === defaults.initiallyOpen && clickToClose === defaults.clickToClose && autoClose === defaults.autoClose && scroll === defaults.scroll && scrollOffset === defaults.scrollOffset;
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
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
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.useBlockProps)({
    className: (0,_utils_classnames__WEBPACK_IMPORTED_MODULE_9__["default"])('c-accordion__item', 'js-accordion-item')
  });
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.BlockControls, {
    group: "block"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.ToolbarGroup, {
    icon: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_html_tag_icon__WEBPACK_IMPORTED_MODULE_8__["default"], {
      tag: titleTag
    }),
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Change accordion title tag', 'pb'),
    controls: [{
      tag: 'h1',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Heading 1', 'accordion-blocks')
    }, {
      tag: 'h2',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Heading 2', 'accordion-blocks')
    }, {
      tag: 'h3',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Heading 3', 'accordion-blocks')
    }, {
      tag: 'h4',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Heading 4', 'accordion-blocks')
    }, {
      tag: 'h5',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Heading 5', 'accordion-blocks')
    }, {
      tag: 'h6',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Heading 6', 'accordion-blocks')
    }, {
      tag: 'button',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Button', 'accordion-blocks')
    }].map(control => {
      return {
        name: control.tag,
        icon: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_html_tag_icon__WEBPACK_IMPORTED_MODULE_8__["default"], {
          tag: control.tag
        }),
        title: control.label,
        isActive: titleTag === control.tag,
        onClick: () => setAttributes({
          'titleTag': control.tag
        })
      };
    }),
    isCollapsed: true
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.InspectorControls, null, isNestedAccordion && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "components-notice is-warning",
    style: {
      margin: '0',
      borderTop: '1px solid #f0f0f0'
    }
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('This accordion item is nested inside another accordion item. While this will work, it may not be what you intended.', 'accordion-blocks')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Accordion Item Settings', 'accordion-blocks')
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Open By Default', 'accordion-blocks'),
    help: initiallyOpen ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('This accordion item will be open when the page loads.', 'accordion-blocks') : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('This accordion item will be closed when the page loads.', 'accordion-blocks'),
    checked: initiallyOpen,
    onChange: value => setAttributes({
      initiallyOpen: value
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Click to Close', 'accordion-blocks'),
    help: clickToClose ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('When open, this accordion item title can be clicked again to close it.', 'accordion-blocks') : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Once opened, this accordion item cannot be closed by clicking the title.', 'accordion-blocks'),
    checked: clickToClose,
    onChange: value => setAttributes({
      clickToClose: value
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Auto Close', 'accordion-blocks'),
    help: autoClose ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('This accordion item will close when opening another item.', 'accordion-blocks') : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('This accordion item will remain open when opening another item.', 'accordion-blocks'),
    checked: autoClose,
    onChange: value => setAttributes({
      autoClose: value
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Scroll to Accordion Item', 'accordion-blocks'),
    help: scroll ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('The page will scroll to the accordion item title when it is opened.', 'accordion-blocks') : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('The page will not scroll when opening accordion items.', 'accordion-blocks'),
    checked: scroll,
    onChange: value => setAttributes({
      scroll: value,
      scrollOffset: 0
    })
  }), !!scroll && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Scroll Pixel Offset', 'accordion-blocks'),
    value: scrollOffset,
    onChange: value => setAttributes({
      scrollOffset: parseInt(value, 10) ? parseInt(value, 10) : 0
    }),
    min: 0,
    max: 1000,
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('A pixel offset for the final scroll position.', 'accordion-blocks')
  }), !settingsAreDefaults && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("hr", null), userCanSetDefaults && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.Button, {
    isLink: true,
    onClick: () => {
      (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.dispatch)('accordion-blocks').saveDefaultSettings({
        initiallyOpen: initiallyOpen,
        clickToClose: clickToClose,
        autoClose: autoClose,
        scroll: scroll,
        scrollOffset: scrollOffset
      });
    }
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Make These Settings the Defaults', 'accordion-blocks')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    style: {
      fontStyle: 'italic',
      marginTop: '7px'
    }
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Default settings only apply when creating new accordion items.', 'accordion-blocks'))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.Button, {
    isLink: true,
    isDestructive: true,
    onClick: () => {
      setAttributes({
        initiallyOpen: defaults.initiallyOpen,
        clickToClose: defaults.clickToClose,
        autoClose: defaults.autoClose,
        scroll: defaults.scroll,
        scrollOffset: defaults.scrollOffset
      });
    }
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Reset These Settings to Defaults', 'accordion-blocks')))))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", blockProps, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.RichText, {
    className: (0,_utils_classnames__WEBPACK_IMPORTED_MODULE_9__["default"])('c-accordion__title', {
      'c-accordion__title--button': titleTag === 'button'
    }),
    tagName: titleTag === 'button' ? 'div' : titleTag,
    allowedFormats: ['core/bold', 'core/italic'],
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Accordion item title…', 'accordion-blocks'),
    value: title,
    onChange: value => setAttributes({
      title: value
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "c-accordion__content"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.InnerBlocks, null))));
};

/* harmony default export */ __webpack_exports__["default"] = (AccordionItemEdit);

/***/ }),

/***/ "./src/block/html-tag-icon.js":
/*!************************************!*\
  !*** ./src/block/html-tag-icon.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);


/**
 * Wordpress dependencies
 */


const HtmlTagIcon = _ref => {
  let {
    tag
  } = _ref;
  const tagToPath = {
    h1: 'M9 5h2v10H9v-4H5v4H3V5h2v4h4V5zm6.6 0c-.6.9-1.5 1.7-2.6 2v1h2v7h2V5h-1.4z',
    h2: 'M7 5h2v10H7v-4H3v4H1V5h2v4h4V5zm8 8c.5-.4.6-.6 1.1-1.1.4-.4.8-.8 1.2-1.3.3-.4.6-.8.9-1.3.2-.4.3-.8.3-1.3 0-.4-.1-.9-.3-1.3-.2-.4-.4-.7-.8-1-.3-.3-.7-.5-1.2-.6-.5-.2-1-.2-1.5-.2-.4 0-.7 0-1.1.1-.3.1-.7.2-1 .3-.3.1-.6.3-.9.5-.3.2-.6.4-.8.7l1.2 1.2c.3-.3.6-.5 1-.7.4-.2.7-.3 1.2-.3s.9.1 1.3.4c.3.3.5.7.5 1.1 0 .4-.1.8-.4 1.1-.3.5-.6.9-1 1.2-.4.4-1 .9-1.6 1.4-.6.5-1.4 1.1-2.2 1.6V15h8v-2H15z',
    h3: 'M12.1 12.2c.4.3.8.5 1.2.7.4.2.9.3 1.4.3.5 0 1-.1 1.4-.3.3-.1.5-.5.5-.8 0-.2 0-.4-.1-.6-.1-.2-.3-.3-.5-.4-.3-.1-.7-.2-1-.3-.5-.1-1-.1-1.5-.1V9.1c.7.1 1.5-.1 2.2-.4.4-.2.6-.5.6-.9 0-.3-.1-.6-.4-.8-.3-.2-.7-.3-1.1-.3-.4 0-.8.1-1.1.3-.4.2-.7.4-1.1.6l-1.2-1.4c.5-.4 1.1-.7 1.6-.9.5-.2 1.2-.3 1.8-.3.5 0 1 .1 1.6.2.4.1.8.3 1.2.5.3.2.6.5.8.8.2.3.3.7.3 1.1 0 .5-.2.9-.5 1.3-.4.4-.9.7-1.5.9v.1c.6.1 1.2.4 1.6.8.4.4.7.9.7 1.5 0 .4-.1.8-.3 1.2-.2.4-.5.7-.9.9-.4.3-.9.4-1.3.5-.5.1-1 .2-1.6.2-.8 0-1.6-.1-2.3-.4-.6-.2-1.1-.6-1.6-1l1.1-1.4zM7 9H3V5H1v10h2v-4h4v4h2V5H7v4z',
    h4: 'M9 15H7v-4H3v4H1V5h2v4h4V5h2v10zm10-2h-1v2h-2v-2h-5v-2l4-6h3v6h1v2zm-3-2V7l-2.8 4H16z',
    h5: 'M12.1 12.2c.4.3.7.5 1.1.7.4.2.9.3 1.3.3.5 0 1-.1 1.4-.4.4-.3.6-.7.6-1.1 0-.4-.2-.9-.6-1.1-.4-.3-.9-.4-1.4-.4H14c-.1 0-.3 0-.4.1l-.4.1-.5.2-1-.6.3-5h6.4v1.9h-4.3L14 8.8c.2-.1.5-.1.7-.2.2 0 .5-.1.7-.1.5 0 .9.1 1.4.2.4.1.8.3 1.1.6.3.2.6.6.8.9.2.4.3.9.3 1.4 0 .5-.1 1-.3 1.4-.2.4-.5.8-.9 1.1-.4.3-.8.5-1.3.7-.5.2-1 .3-1.5.3-.8 0-1.6-.1-2.3-.4-.6-.2-1.1-.6-1.6-1-.1-.1 1-1.5 1-1.5zM9 15H7v-4H3v4H1V5h2v4h4V5h2v10z',
    h6: 'M9 15H7v-4H3v4H1V5h2v4h4V5h2v10zm8.6-7.5c-.2-.2-.5-.4-.8-.5-.6-.2-1.3-.2-1.9 0-.3.1-.6.3-.8.5l-.6.9c-.2.5-.2.9-.2 1.4.4-.3.8-.6 1.2-.8.4-.2.8-.3 1.3-.3.4 0 .8 0 1.2.2.4.1.7.3 1 .6.3.3.5.6.7.9.2.4.3.8.3 1.3s-.1.9-.3 1.4c-.2.4-.5.7-.8 1-.4.3-.8.5-1.2.6-1 .3-2 .3-3 0-.5-.2-1-.5-1.4-.9-.4-.4-.8-.9-1-1.5-.2-.6-.3-1.3-.3-2.1s.1-1.6.4-2.3c.2-.6.6-1.2 1-1.6.4-.4.9-.7 1.4-.9.6-.3 1.1-.4 1.7-.4.7 0 1.4.1 2 .3.5.2 1 .5 1.4.8 0 .1-1.3 1.4-1.3 1.4zm-2.4 5.8c.2 0 .4 0 .6-.1.2 0 .4-.1.5-.2.1-.1.3-.3.4-.5.1-.2.1-.5.1-.7 0-.4-.1-.8-.4-1.1-.3-.2-.7-.3-1.1-.3-.3 0-.7.1-1 .2-.4.2-.7.4-1 .7 0 .3.1.7.3 1 .1.2.3.4.4.6.2.1.3.3.5.3.2.1.5.2.7.1z',
    button: 'M17.5,4.5H2.5A1.5,1.5,0,0,0,1,6v8a1.5,1.5,0,0,0,1.5,1.5h15A1.5,1.5,0,0,0,19,14V6A1.5,1.5,0,0,0,17.5,4.5Zm0,8.75a.76.76,0,0,1-.75.75H3.25a.76.76,0,0,1-.75-.75V6.75A.76.76,0,0,1,3.25,6h13.5a.76.76,0,0,1,.75.75ZM5.5,11h9V9h-9Z'
  };
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SVG, {
    width: "24",
    height: "24",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Path, {
    d: tagToPath[tag]
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (HtmlTagIcon);

/***/ }),

/***/ "./src/block/index.js":
/*!****************************!*\
  !*** ./src/block/index.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.scss */ "./src/block/index.scss");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./editor.scss */ "./src/block/editor.scss");
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./settings */ "./src/block/settings.js");
/* harmony import */ var _transforms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./transforms */ "./src/block/transforms.js");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./edit */ "./src/block/edit.js");
/* harmony import */ var _deprecated__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./deprecated */ "./src/block/deprecated.js");


/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */







(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.registerBlockType)('pb/accordion-item', { ..._settings__WEBPACK_IMPORTED_MODULE_5__["default"],
  transforms: _transforms__WEBPACK_IMPORTED_MODULE_6__["default"],
  edit: _edit__WEBPACK_IMPORTED_MODULE_7__["default"],
  save: _ref => {
    let {
      attributes
    } = _ref;
    const {
      className,
      title,
      initiallyOpen,
      clickToClose,
      autoClose,
      titleTag,
      scroll,
      scrollOffset,
      uuid
    } = attributes;
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

    const blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps.save({
      className: [...itemClasses, className].join(' '),
      'data-initially-open': initiallyOpen,
      'data-click-to-close': clickToClose,
      'data-auto-close': autoClose,
      'data-scroll': scroll,
      'data-scroll-offset': scrollOffset
    });
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", blockProps, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText.Content, {
      id: 'at-' + uuid,
      className: titleClasses.join(' '),
      tagName: titleTag,
      role: "button",
      value: title
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      id: 'ac-' + uuid,
      className: "c-accordion__content"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InnerBlocks.Content, null)));
  },
  deprecated: _deprecated__WEBPACK_IMPORTED_MODULE_8__["default"]
});

/***/ }),

/***/ "./src/block/settings.js":
/*!*******************************!*\
  !*** ./src/block/settings.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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
  icon: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SVG, {
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Path, {
    d: "M16.93,8.93a1,1,0,0,1-.7-.29L12,4.41,7.9,8.51A1,1,0,0,1,6.49,7.1L12,1.59l5.64,5.64a1,1,0,0,1,0,1.41A1,1,0,0,1,16.93,8.93Z"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Path, {
    d: "M12.07,22.35,6.42,16.71a1,1,0,0,1,1.42-1.42l4.23,4.23,4.09-4.1a1,1,0,0,1,1.42,1.42Z"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Path, {
    d: "M17.93,13H5.82a1,1,0,0,1,0-2H17.93a1,1,0,0,1,0,2Z"
  })),
  example: {
    attributes: {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Accordion item title', 'accordion-blocks'),
      titleTag: 'h3'
    },
    innerBlocks: [{
      name: 'core/paragraph',
      attributes: {
        content: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Sample accordion item content for previewing styles in the editor.', 'accordion-blocks')
      }
    }]
  }
});

/***/ }),

/***/ "./src/block/transforms.js":
/*!*********************************!*\
  !*** ./src/block/transforms.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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
    transform: attributes => {
      return (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.createBlock)('pb/accordion-item', {
        title: attributes.content,
        titleTag: 'h' + (attributes.level <= 4 ? attributes.level : 2)
      });
    }
  }, {
    type: 'block',
    isMultiBlock: true,
    blocks: ['core/paragraph'],
    transform: attributes => {
      return (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.createBlock)('pb/accordion-item', {}, attributes.map(item => (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.createBlock)('core/paragraph', {
        content: item.content
      })));
    }
  }],
  to: [{
    type: 'block',
    blocks: ['core/paragraph'],
    transform: (attributes, innerBlocks) => {
      var newBlocks = innerBlocks.map(block => (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.createBlock)(block.name, block.attributes));
      const level = attributes.titleTag !== 'button' ? parseInt(attributes.titleTag.replace('h', '')) : 2;
      newBlocks.splice(0, 0, (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.createBlock)('core/heading', {
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

/***/ "./src/store/index.js":
/*!****************************!*\
  !*** ./src/store/index.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1__);
/**
 * WordPress dependencies
 */


const initialState = {
  defaults: {
    initiallyOpen: false,
    clickToClose: true,
    autoClose: true,
    scroll: false,
    scrollOffset: 0
  }
};
const actions = {
  setDefaults(defaults) {
    return {
      type: 'SET_DEFAULTS',
      defaults
    };
  },

  saveDefaultSettings(defaults) {
    return {
      type: 'SAVE_DEFAULTS',
      defaults
    };
  },

  fetchFromAPI(path) {
    return {
      type: 'FETCH_FROM_API',
      path
    };
  }

};
const store = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.createReduxStore)('accordion-blocks', {
  reducer() {
    let state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
    let action = arguments.length > 1 ? arguments[1] : undefined;

    switch (action.type) {
      case 'SET_DEFAULTS':
        return Object.assign({}, state, {
          defaults: action.defaults
        });

      case 'SAVE_DEFAULTS':
        _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1___default()({
          path: 'accordion-blocks/v1/defaults',
          data: action.defaults,
          method: 'POST'
        }).then(response => {}).catch(error => {});
        return Object.assign({}, state, {
          defaults: action.defaults
        });

      default:
        return state;
    }
  },

  actions,
  selectors: {
    getDefaultSettings(state) {
      return state.defaults;
    }

  },
  controls: {
    FETCH_FROM_API(action) {
      return _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1___default()({
        path: action.path
      });
    }

  },
  resolvers: {
    *getDefaultSettings() {
      const path = '/accordion-blocks/v1/defaults';
      const defaults = yield actions.fetchFromAPI(path);
      return actions.setDefaults(defaults);
    }

  }
});
(0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.register)(store);

/***/ }),

/***/ "./src/utils/classnames.js":
/*!*********************************!*\
  !*** ./src/utils/classnames.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
function classnames() {
  let classes = [];

  for (let i = 0; i < arguments.length; i++) {
    let arg = arguments[i];

    if (!arg) {
      continue;
    }

    let argType = typeof arg;

    if (argType === 'string' || argType === 'number') {
      classes.push(arg);
    } else if (Array.isArray(arg) && arg.length) {
      let inner = classnames.apply(null, arg);

      if (inner) {
        classes.push(inner);
      }
    } else if (argType === 'object') {
      for (let key in arg) {
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

/***/ "./src/block/editor.scss":
/*!*******************************!*\
  !*** ./src/block/editor.scss ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/block/index.scss":
/*!******************************!*\
  !*** ./src/block/index.scss ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "@wordpress/api-fetch":
/*!**********************************!*\
  !*** external ["wp","apiFetch"] ***!
  \**********************************/
/***/ (function(module) {

module.exports = window["wp"]["apiFetch"];

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ (function(module) {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ (function(module) {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ (function(module) {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/compose":
/*!*********************************!*\
  !*** external ["wp","compose"] ***!
  \*********************************/
/***/ (function(module) {

module.exports = window["wp"]["compose"];

/***/ }),

/***/ "@wordpress/core-data":
/*!**********************************!*\
  !*** external ["wp","coreData"] ***!
  \**********************************/
/***/ (function(module) {

module.exports = window["wp"]["coreData"];

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/***/ (function(module) {

module.exports = window["wp"]["data"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ (function(module) {

module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ (function(module) {

module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "@wordpress/keycodes":
/*!**********************************!*\
  !*** external ["wp","keycodes"] ***!
  \**********************************/
/***/ (function(module) {

module.exports = window["wp"]["keycodes"];

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
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./store */ "./src/store/index.js");
/* harmony import */ var _block__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./block */ "./src/block/index.js");


}();
/******/ })()
;
//# sourceMappingURL=index.js.map