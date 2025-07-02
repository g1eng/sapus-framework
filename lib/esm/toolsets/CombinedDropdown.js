"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactBootstrap = require("react-bootstrap");
require("./CombinedDropdown.module.css");
var _CategoryDropdown = _interopRequireDefault(require("./CategoryDropdown"));
var _IndexedDropdown = _interopRequireDefault(require("./IndexedDropdown"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
const CombinedIndexDropdown = props => {
  const [targetIndex, setTargetIndex] = (0, _react.useState)(props.category.current);
  return /*#__PURE__*/_react.default.createElement(_reactBootstrap.ButtonGroup, null, /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, Array.from(props.indices.keys()).map(ind => {
    const index = props.indices.get(ind);
    return index !== undefined && targetIndex === ind && /*#__PURE__*/_react.default.createElement(_IndexedDropdown.default, {
      key: ind,
      index: index,
      drop: props.drop,
      variant: props.variant,
      accent: props.accent,
      bg: props.bg,
      text: props.text,
      right: props.right,
      left: props.left,
      border: props.border ? props.border : "dark",
      as: _reactBootstrap.ButtonGroup
    });
  }), /*#__PURE__*/_react.default.createElement(_CategoryDropdown.default, {
    category: props.category,
    variant: props.variant,
    bg: props.bg,
    text: props.text,
    border: props.border ? props.border : "dark",
    as: _reactBootstrap.ButtonGroup,
    hook: setTargetIndex
  })));
};
var _default = exports.default = CombinedIndexDropdown;