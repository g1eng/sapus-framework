"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactBootstrap = require("react-bootstrap");
var _Pan = _interopRequireDefault(require("../effects/Pan"));
var _reactRouterDom = require("react-router-dom");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
/**
 * Picture is single picture display with pan effect.
 */
const Picture = props => {
  const [toggle, setToggle] = (0, _react.useState)(false);
  const image = props.image;
  const defaultStyle = props.bordered !== undefined ? {
    border: "1px solid #dee2e6",
    transition: "transform 250ms, border 200ms, margin 200ms",
    cursor: props.interactive ? "pointer" : undefined
  } : {
    transition: "transform 250ms, border 200ms, margin 200ms",
    cursor: props.interactive ? "pointer" : undefined
  };
  const toggleStyle = {
    border: "0.2rem solid #f0a050",
    margin: "-0.15rem",
    backgroundColor: "#f0a050",
    transition: "transform 250ms",
    transform: "scale(0.90)",
    cursor: "pointer"
  };
  const onClickFunc = props.interactive ? () => {
    setToggle(!toggle);
    if (props.onImageClick !== undefined) props.onImageClick(props.image);
  } : () => {
    if (props.onImageClick !== undefined) props.onImageClick(props.image);
  };
  return /*#__PURE__*/_react.default.createElement(_Pan.default, {
    in: props.in !== false,
    static: true,
    horizontal: true
  }, /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, image.link && /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    to: image.link
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Image, {
    rounded: props.rounded,
    roundedCircle: props.roundedCircle,
    thumbnail: props.thumbnail,
    className: `sapus-img ${props.className}`,
    alt: image.name ? `${image.name}${typeof image.caption === "string" ? " " + image.caption : ""}` : "no alternative text",
    src: image.src,
    width: props.width,
    height: props.height
  })), image.link === undefined && /*#__PURE__*/_react.default.createElement(_reactBootstrap.Image, {
    rounded: props.rounded,
    roundedCircle: props.roundedCircle,
    thumbnail: props.thumbnail,
    className: `${props.className}`,
    alt: image.name ? `${image.name}${typeof image.caption === "string" ? " " + image.caption : ""}` : "no alternative text",
    src: image.src,
    width: props.width,
    height: props.height,
    style: toggle ? toggleStyle : defaultStyle,
    onClick: onClickFunc
  })));
};
var _default = exports.default = Picture;