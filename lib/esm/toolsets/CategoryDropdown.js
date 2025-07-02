"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactBootstrap = require("react-bootstrap");
var _DropdownToggle = _interopRequireDefault(require("react-bootstrap/DropdownToggle"));
var _helpers = require("../helpers");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
/**
 * CategoryDropdown is a simple selector for text values.
 * It is focused on the selection of a value from a set of word(s).
 */
const CategoryDropdown = props => {
  const [current, setCurrentCategory] = (0, _react.useState)(props.category.current);
  const selectorClass = `${(0, _helpers.getBgClass)(props.bg)} ${(0, _helpers.getTextClass)(props.text)} ${(0, _helpers.getBorderClass)(props.border)}`;
  const toggleClass = `btn-group ${(0, _helpers.getBorderClass)(props.border)} ${props.badge ? "badge" : ""}`;
  let i = 0;
  return /*#__PURE__*/_react.default.createElement(_reactBootstrap.Dropdown, {
    drop: props.drop,
    as: props.as
  }, /*#__PURE__*/_react.default.createElement(_DropdownToggle.default, {
    className: `${toggleClass} ${props.className ? props.className : ""}`,
    style: props.width ? {
      width: props.width,
      justifyContent: "center"
    } : undefined,
    variant: props.variant
  }, /*#__PURE__*/_react.default.createElement("span", null, current)), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Dropdown.Menu, {
    className: selectorClass
  }, props.noHeader !== true && props.category.categoryName && /*#__PURE__*/_react.default.createElement(_reactBootstrap.Dropdown.Header, null, props.category.categoryName), props.category.list.map(item => /*#__PURE__*/_react.default.createElement(_reactBootstrap.Dropdown.Item, {
    key: i++,
    className: item === current ? "" : selectorClass,
    active: item === current,
    onClick: () => {
      setCurrentCategory(item);
      if (props.hook) props.hook(item);
    }
  }, item))));
};
var _default = exports.default = CategoryDropdown;