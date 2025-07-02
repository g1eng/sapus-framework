"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
/***
 * Pan represents pan-able element with visibility status `in` prop.
 * Vertical, horizontal and rectangular panning are supported.
 */
const Pan = props => {
  const duration = props.duration ? props.duration : 250;
  const scaleFunc = props.horizontal !== undefined ? "scale(1,0.5) translate(0%,-50%)" : props.vertical !== undefined ? "scale(0.5,1) translate(-25%,-50%)" : "scale(0.5) translate(-25%,-50%)";
  const defaultStyle = {
    transition: `opacity ${duration}ms, transform ${duration}ms`,
    transform: scaleFunc,
    opacity: 0
  };
  const transitionStyles = props.in ? {
    transition: `opacity ${duration}ms, transform ${duration}ms`,
    transform: "scale(1) translate(0%,0%)",
    opacity: 1
  } : defaultStyle;
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      position: "relative",
      ...defaultStyle,
      ...transitionStyles
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    style: props.static ? {} : {
      position: "absolute"
    }
  }, props.children));
};
var _default = exports.default = Pan;