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
 * DateSlider is a set of input for date.
 * It bundles range input and increment/decrement button to select a date.
 *
 * By default, the current date `new Date()` is specified for the initial value.
 */
const DateSlider = props => {
  const assignDate = props.onChange;
  const now = new Date();
  const [date, setDate] = (0, _react.useState)(props.date ? props.date.getTime() : now.getTime());
  const dateResidue = now.getTime() % 86400;
  const minDate = props.minDate ? props.minDate.getTime() : new Date(now.getFullYear() + "-01-01").getTime() + dateResidue;
  const maxDate = props.maxDate ? props.maxDate.getTime() : new Date(now.getFullYear() + "-12-31").getTime() + dateResidue;
  const dayMillSeconds = 86400000;
  const defaultWidth = "10rem";
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "d-flex"
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Button, {
    className: `rounded-circle ${(0, _helpers.getTextClass)(props.text)}`,
    variant: props.variant,
    disabled: !(date > minDate),
    onClick: () => {
      if (date > minDate) {
        setDate(date - dayMillSeconds);
        if (typeof assignDate === "function") assignDate(date);
      }
    }
  }, "<"), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Badge, {
    style: {
      position: "absolute",
      display: "block",
      width: "5rem",
      marginLeft: `calc(${props.width ? props.width : defaultWidth}*0.55 - (5rem / 2) + 2rem)`,
      marginTop: `-0.5rem`
    },
    pill: true,
    bg: props.variant
  }, /*#__PURE__*/_react.default.createElement("label", null, new Date(date).toLocaleDateString(), /*#__PURE__*/_react.default.createElement("input", {
    type: "date",
    value: new Date(date).toISOString(),
    style: {
      position: "relative",
      height: 0,
      width: 0,
      padding: 0,
      left: "-5rem",
      visibility: "hidden"
    },
    onChange: e => {
      setDate(new Date(e.target.value).getTime());
    }
  }))), /*#__PURE__*/_react.default.createElement("input", {
    type: "range",
    id: `date-slider-${props.name}`,
    name: props.name,
    required: true,
    min: minDate,
    max: maxDate,
    value: date,
    step: dayMillSeconds,
    className: `input-range mx-2 ${props.className}`,
    style: {
      position: "relative",
      top: "0.3rem",
      width: props.width ? props.width : defaultWidth
    },
    onChange: e => {
      setDate(parseInt(e.target.value));
      if (typeof assignDate === "function") assignDate(e.target.value);
    }
  }), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Button, {
    className: `rounded-circle ${(0, _helpers.getTextClass)(props.text)}`,
    variant: props.variant,
    disabled: !(date < maxDate - dateResidue),
    onClick: () => {
      if (date < maxDate) {
        setDate(date + dayMillSeconds);
        if (typeof assignDate === "function") assignDate(date);
      }
    }
  }, ">"));
};
var _default = exports.default = DateSlider;