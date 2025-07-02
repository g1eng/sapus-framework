"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _reactBootstrap = require("react-bootstrap");
var _react = _interopRequireDefault(require("react"));
var _DataImporter = _interopRequireDefault(require("../functionalities/DataImporter"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const ImportControl = props => {
  return /*#__PURE__*/_react.default.createElement("div", null, props.isImported && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_reactBootstrap.ButtonGroup, {
    className: "mx-2"
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Badge, {
    className: "badge bg-light text-dark btn btn-outline-warning"
  }, /*#__PURE__*/_react.default.createElement("b", null, "\u30D5\u30A1\u30A4\u30EB\u540D")), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Button, {
    className: "badge text-dark",
    variant: "warning"
  }, props.fileName)), /*#__PURE__*/_react.default.createElement(_reactBootstrap.ButtonGroup, {
    className: "ms-2 me-4"
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Badge, {
    className: "badge bg-light text-dark btn btn-outline-primary"
  }, /*#__PURE__*/_react.default.createElement("b", null, "\u30EC\u30B3\u30FC\u30C9\u7DCF\u6570")), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Button, {
    className: "badge",
    variant: "primary"
  }, props.data.length))), !props.isImported && /*#__PURE__*/_react.default.createElement(_reactBootstrap.ButtonGroup, null, /*#__PURE__*/_react.default.createElement(_DataImporter.default, {
    id: props.id ? props.id : "data-importer",
    className: props.className,
    format: "csv",
    variant: props.variant ? props.variant : "info",
    hook: props.hook
  }, /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, props.children ? props.children : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("span", {
    className: "bi-upload me-2"
  }), /*#__PURE__*/_react.default.createElement("span", null, "\u30C7\u30FC\u30BF\u6CE8\u5165"))))));
};
var _default = exports.default = ImportControl;