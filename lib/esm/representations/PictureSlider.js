"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactBootstrap = require("react-bootstrap");
var _Picture = _interopRequireDefault(require("./Picture"));
var _Pan = _interopRequireDefault(require("../effects/Pan"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const PictureSlider = props => {
  const captionBg = props.captionBg ? props.captionBg : "#ffffff";
  let captionStyle = props.captionStyle ? props.captionStyle : {};
  captionStyle.background = captionBg ? `radial-gradient(${captionBg}ff, ${captionBg}00 75%, ${captionBg}00)` : captionStyle.background ? captionStyle.background : undefined;
  return /*#__PURE__*/_react.default.createElement(_Pan.default, {
    in: props.in !== false,
    duration: 250,
    horizontal: true,
    static: true
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Carousel, null, props.images.map(img => /*#__PURE__*/_react.default.createElement(_reactBootstrap.Carousel.Item, {
    key: img.id
  }, /*#__PURE__*/_react.default.createElement(_Picture.default, {
    image: img,
    className: "d-block w-100",
    height: props.height ? props.height : 300,
    width: props.width ? props.width : undefined,
    onImageClick: props.onImageClick,
    in: true
  }), img.caption && /*#__PURE__*/_react.default.createElement(_reactBootstrap.Carousel.Caption, {
    style: props.captionStyle
  }, img.caption)))));
};
var _default = exports.default = PictureSlider;