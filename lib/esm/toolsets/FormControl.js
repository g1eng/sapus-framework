"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactBootstrap = require("react-bootstrap");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const FormControl = props => {
  const icon = props.icon;
  const generateInputButton = (variant, text, onClick) => /*#__PURE__*/_react.default.createElement(_reactBootstrap.Button, {
    className: "input-group-text",
    variant: variant,
    onClick: onClick
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: icon
  }), text && /*#__PURE__*/_react.default.createElement("span", {
    className: "ms-2"
  }, text));
  const hasButton = props.btnText !== undefined || props.icon;
  return /*#__PURE__*/_react.default.createElement(_reactBootstrap.InputGroup, {
    className: props.className,
    style: props.style
  }, hasButton && props.left && generateInputButton(props.variant, props.btnText, props.onButtonClick), /*#__PURE__*/_react.default.createElement("input", {
    id: `search-console-${props.name}`,
    name: props.name,
    type: props.type,
    value: props.value,
    max: props.max,
    min: props.min,
    defaultValue: props.defaultValue,
    className: "form-control",
    placeholder: props.placeholder,
    onChange: props.onChange
  }), hasButton && props.left === undefined && generateInputButton(props.variant, props.btnText, props.onButtonClick));
};
var _default = exports.default = FormControl;