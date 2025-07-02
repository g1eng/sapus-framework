"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactBootstrap = require("react-bootstrap");
var _Picture = _interopRequireDefault(require("./Picture"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const PictureGrid = props => {
  let i = 0;
  return /*#__PURE__*/_react.default.createElement(_reactBootstrap.Container, {
    fluid: true
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Row, null, props.images.map(img => /*#__PURE__*/_react.default.createElement(_reactBootstrap.Col, {
    key: i++,
    sm: props.sm,
    md: props.md,
    lg: props.lg,
    xl: props.xl,
    className: "p-0"
  }, /*#__PURE__*/_react.default.createElement(_Picture.default, {
    image: img,
    rounded: props.rounded,
    roundedCircle: props.roundedCircle,
    thumbnail: props.thumbnail,
    className: "w-100",
    width: props.width,
    height: props.height,
    interactive: props.interactive,
    onImageClick: props.onImageClick,
    in: true
  })))));
};
var _default = exports.default = PictureGrid;