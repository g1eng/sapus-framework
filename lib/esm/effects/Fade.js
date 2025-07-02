"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
/***
 * Fade representa fadable element which is controlled via `in` prop.
 * duration can be specified in millisecond and the default duration is 150ms.
 */
const Fade = props => {
  const duration = props.duration ? props.duration : 150;
  const defaultStyle = {
    transition: `opacity ${duration}ms, transform ${duration}ms`,
    opacity: 0
  };
  const transitionStyles = props.in ? {
    transition: `opacity ${duration}ms, transform ${duration}ms`,
    opacity: 1
  } : defaultStyle;
  return /*#__PURE__*/_react.default.createElement("div", {
    // @ts-ignore
    style: {
      ...defaultStyle,
      ...transitionStyles
    }
  }, props.children);
};
var _default = exports.default = Fade;