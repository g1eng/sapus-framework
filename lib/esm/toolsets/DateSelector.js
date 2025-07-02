"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactBootstrap = require("react-bootstrap");
var _helpers = require("../helpers");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
/**
 * DateSelector is a set of input for date.
 * It bundles date input and increment/decrement button to select a date.
 *
 * By default, the current date `new Date()` is specified for the initial value.
 */
const DateSelector = props => {
  const assignDate = props.onChange;
  const inputClass = `form-control ${(0, _helpers.getBorderClass)(props.border)} ${(0, _helpers.getBgClass)(props.bg)} ${(0, _helpers.getTextClass)(props.text)}`;
  const btnClass = `input-group-text ${(0, _helpers.getBorderClass)(props.border)} ${(0, _helpers.getBgClass)(props.variant)} ${(0, _helpers.getTextClass)(props.text)}`;
  const [date, setDate] = (0, _react.useState)(props.date ? props.date : new Date());
  const minDate = props.minDate ? (0, _helpers.getLocalISOStringDate)(props.minDate) : date.getFullYear() + "-01-01",
    maxDate = props.maxDate ? (0, _helpers.getLocalISOStringDate)(props.maxDate) : date.getFullYear() + "-12-31";
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "selector d-flex justify-content-between"
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.InputGroup, null, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Button, {
    className: btnClass,
    variant: props.variant,
    onClick: () => {
      setDate(new Date(date.setHours(-24)));
      if (typeof assignDate === "function") assignDate(date);
    },
    disabled: minDate === (0, _helpers.getLocalISOStringDate)(date)
  }, "<"), /*#__PURE__*/_react.default.createElement("input", {
    id: `date-selector-${props.name}`,
    name: props.name,
    type: "date",
    required: true,
    min: minDate,
    max: maxDate,
    value: (0, _helpers.getLocalISOStringDate)(date),
    className: inputClass,
    onChange: e => {
      if (e.target.value === "") console.log("unconditional date selection");else setDate(new Date(e.target.value));
      if (typeof assignDate === "function") assignDate(e.target.value);
    }
  }), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Button, {
    className: btnClass,
    variant: props.variant,
    onClick: () => {
      setDate(new Date(date.setHours(24)));
      if (typeof assignDate === "function") assignDate(date);
    },
    disabled: maxDate === (0, _helpers.getLocalISOStringDate)(date)
  }, ">")));
};
var _default = exports.default = DateSelector;