"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _Picture = _interopRequireDefault(require("./Picture"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const PictureBadges = props => {
  const imageWidth = props.size ? props.size : props.width ? props.width : undefined;
  const imageHeight = props.size ? props.size : props.height ? props.height : undefined;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: `d-flex flex-wrap ${props.center ? "justify-content-center" : ""}`
  }, props.images.map(img => {
    return /*#__PURE__*/_react.default.createElement("span", {
      key: img.id
    }, /*#__PURE__*/_react.default.createElement(_Picture.default, {
      image: img,
      width: imageWidth,
      height: imageHeight,
      roundedCircle: props.thumbnail ? undefined : true,
      thumbnail: props.thumbnail,
      className: props.thumbnail ? "p-0" : "",
      interactive: props.interactive,
      onImageClick: props.onImageClick,
      in: true
    }));
  }));
};
var _default = exports.default = PictureBadges;