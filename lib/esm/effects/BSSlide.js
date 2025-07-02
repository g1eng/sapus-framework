"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactBootstrap = require("react-bootstrap");
require("./Effects.css");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const BSSlide = props => {
  const direction = props.slide ? props.slide : "down";
  const transitionClassBase = `sapus-slide-${direction}`;
  const className = props.className ? `${props.className} sapus-fade sapus-slide ` + (props.in ? `${transitionClassBase}-enter-active` : `${transitionClassBase}-exit-done`) : `sapus-fade sapus-slide ${transitionClassBase} ` + (props.in ? `${transitionClassBase}-enter-active` : `${transitionClassBase}-exit-done`);
  const transitionClasses = props.transitionClasses ? props.transitionClasses : {
    enter: `${transitionClassBase}-enter`,
    entered: `${transitionClassBase}-entered`,
    entering: `${transitionClassBase}-entering`,
    exit: `${transitionClassBase}-exit`,
    exited: `${transitionClassBase}-exited`,
    exiting: `${transitionClassBase}-exiting`,
    exitActive: `${transitionClassBase}-exit-active`,
    exitDone: `${transitionClassBase}-exit-done`,
    appear: `${transitionClassBase}-appear`,
    appearActive: `${transitionClassBase}-appear-active`,
    appearDone: `${transitionClassBase}-appear-done`
  };
  return /*#__PURE__*/_react.default.createElement(_reactBootstrap.Fade, {
    in: props.in,
    onEnter: props.onEnter,
    onEntering: props.onEntering,
    onEntered: props.onEntered,
    onExit: props.onExit,
    onExited: props.onExited,
    onExiting: props.onExiting,
    mountOnEnter: props.mountOnEnter,
    unmountOnExit: props.unmountOnExit,
    appear: props.appear,
    className: className,
    timeout: props.timeout,
    transitionClasses: transitionClasses
  }, props.children);
};
var _default = exports.default = BSSlide;