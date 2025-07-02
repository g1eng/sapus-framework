"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
require("./ControlBar.module.css");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
/**
 * ControlBar implements a float tooltip for the page control on top or bottom of corner of the page.
 *
 * You can specify inner element to hold on the tooltip within `children` prop.
 */
const ControlBar = props => {
  const contentPosition = props.center ? "center" : props.start ? "start" : props.end ? "end" : undefined;
  const fixedPosition = props.bottom ? "bottom" : "top";
  const positionClass = contentPosition ? `justify-content-${contentPosition}` : undefined;
  const className = `nav navbar navbar-expand-md d-flex fixed-${fixedPosition} ${positionClass} ${props.className}`;
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      pointerEvents: "none"
    }
  }, props.children && /*#__PURE__*/_react.default.createElement("div", {
    className: `sapus-controlbar-children w-100 ${className}`
  }, props.children));
};
var _default = exports.default = ControlBar;