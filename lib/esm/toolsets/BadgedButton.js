"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactBootstrap = require("react-bootstrap");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const BadgedButton = props => {
  const hasCount = props.count || props.visible;
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Button, {
    variant: props.variant ? props.variant : "dark",
    onClick: props.onClick
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: hasCount ? "me-2" : ""
  }, props.children ? props.children : ""), hasCount && /*#__PURE__*/_react.default.createElement(_reactBootstrap.Badge, {
    className: "text-black",
    bg: props.accent ? props.accent : "light",
    onClick: props.onBadgeClick
  }, props.count)));
};
var _default = exports.default = BadgedButton;