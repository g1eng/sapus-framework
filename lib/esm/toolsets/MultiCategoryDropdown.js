"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactBootstrap = require("react-bootstrap");
var _CategoryDropdown = _interopRequireDefault(require("./CategoryDropdown"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
/**
 * MultiCategoryDropdown is the multiplied dropdown for the selection of two or more categories.
 *
 * It is focused to select combined set of two or more categories from preset category list.
 */
const MultiCategoryDropdown = props => {
  let i = 0;
  return /*#__PURE__*/_react.default.createElement(_reactBootstrap.ButtonGroup, null, props.categories.map(cat => /*#__PURE__*/_react.default.createElement(_CategoryDropdown.default, {
    key: i++,
    category: cat,
    drop: props.drop,
    variant: props.variant,
    bg: props.bg,
    text: props.text,
    border: props.border,
    as: _reactBootstrap.ButtonGroup
    //@ts-ignore
    ,
    width: props.width[i]
  })));
};
var _default = exports.default = MultiCategoryDropdown;