"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactBootstrap = require("react-bootstrap");
var _IconControlModule = _interopRequireDefault(require("./IconControl.module.css"));
var _reactRouter = require("react-router");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
//@ts-ignore

/**
 * IconControl supplies simple rounded icon button for control usage.
 *
 * If the href attribute is specified, the button is treated as a link with react-dom.
 *
 */
const IconControl = props => {
  const btnClass = `${_IconControlModule.default["sapus-icon-btn"]} rounded-circle ` + (props.size ? _IconControlModule.default[`sapus-icon-btn-${props.size}`] : "");
  const btnLabelClass = props.size ? `${_IconControlModule.default[`sapus-btn-icon-label`]} ${_IconControlModule.default[`sapus-icon-label-${props.size}`]}` : "";
  return /*#__PURE__*/_react.default.createElement("div", null, props.a || props.href ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    className: `${btnClass} text-center ${props.variant ? `bg-${props.variant} text-dark` : ""}`
  }, /*#__PURE__*/_react.default.createElement(_reactRouter.Link, {
    to: {
      pathname: props.href
    }
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: `bi-${props.icon ? props.icon : "box"}`
  }))), props.label && /*#__PURE__*/_react.default.createElement("div", {
    style: {
      fontWeight: "bold",
      position: "relative",
      top: "-1.5rem"
    },
    className: "text-center"
  }, props.label)) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Button, {
    variant: props.variant,
    active: props.active,
    style: props.style,
    type: props.type,
    disabled: props.disabled,
    onClick: props.onClick,
    as: props.as,
    href: props.href,
    target: props.target,
    rel: props.rel,
    className: btnClass
  }, /*#__PURE__*/_react.default.createElement("span", {
    style: props.label ? {
      position: "relative",
      top: "-0.5rem"
    } : {},
    className: `bi-${props.icon ? props.icon : "box"}`
  }), props.children), props.label && /*#__PURE__*/_react.default.createElement("span", {
    style: props.style,
    className: btnLabelClass
  }, props.label)));
};
var _default = exports.default = IconControl;