"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _DropdownToggle = _interopRequireDefault(require("react-bootstrap/DropdownToggle"));
var _reactBootstrap = require("react-bootstrap");
var _helpers = require("../helpers");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
const IndexedDropdown = props => {
  const targetIndex = props.index;
  const getIndexValueByKey = k => targetIndex.list.get(k);
  const getIndexUnitByKey = k => targetIndex.unit ? targetIndex.unit.get(k) : "";

  //currentKey, currentValue and currentUnit are current visible tags for dropdown
  const [currentKey, setIndexKey] = (0, _react.useState)(targetIndex.current);
  const [currentValue, setIndexValue] = (0, _react.useState)(getIndexValueByKey(currentKey));
  const [currentUnit, setIndexUnit] = (0, _react.useState)(targetIndex.unit ? getIndexUnitByKey(currentKey) : "");
  const isSide = props.right !== true && props.left !== true;
  const selectorClass = (props.bg ? `bg-${props.bg} ` : "") + (props.text ? `text-${props.text}` : "");

  //generate each DropdownItem
  const getDropdownItem = indexList => {
    const domArray = [];
    Array.from(indexList.keys()).map(k => domArray.push(/*#__PURE__*/_react.default.createElement(_reactBootstrap.Dropdown.Item, {
      key: k,
      className: k === currentKey ? "" : selectorClass,
      active: k === currentKey,
      onClick: () => {
        setIndexKey(k);
        setIndexValue(getIndexValueByKey(k));
        setIndexUnit(getIndexUnitByKey(k));
      }
    }, k)));
    return domArray;
  };

  //generate dropdown content
  const GenerateDropdownContent = props => {
    return /*#__PURE__*/_react.default.createElement(_reactBootstrap.Dropdown, {
      drop: props.drop,
      as: !isSide || props.as ? _reactBootstrap.ButtonGroup : undefined
    }, /*#__PURE__*/_react.default.createElement(_DropdownToggle.default, {
      className: `btn-group ${(0, _helpers.getBorderClass)(props.border)}`,
      variant: props.variant
    }, /*#__PURE__*/_react.default.createElement("span", null, currentKey, /*#__PURE__*/_react.default.createElement("br", null), isSide && /*#__PURE__*/_react.default.createElement("span", {
      className: (0, _helpers.getTextClass)(props.accent)
    }, `${currentValue} `, currentUnit))), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Dropdown.Menu, {
      className: selectorClass
    }, props.index.indexName && /*#__PURE__*/_react.default.createElement(_reactBootstrap.Dropdown.Header, null, props.index.indexName), getDropdownItem(targetIndex.list)));
  };
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, isSide && GenerateDropdownContent(props), props.left === true && /*#__PURE__*/_react.default.createElement(_reactBootstrap.ButtonGroup, null, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Button, {
    variant: props.variant,
    className: (0, _helpers.getBorderClass)(props.border)
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: (0, _helpers.getTextClass)(props.accent)
  }, `${currentValue} `, currentUnit)), GenerateDropdownContent(props)), props.right === true && /*#__PURE__*/_react.default.createElement(_reactBootstrap.ButtonGroup, null, GenerateDropdownContent(props), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Button, {
    variant: props.variant,
    className: (0, _helpers.getBorderClass)(props.border)
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: (0, _helpers.getTextClass)(props.accent)
  }, `${currentValue} `, currentUnit))));
};
var _default = exports.default = IndexedDropdown;