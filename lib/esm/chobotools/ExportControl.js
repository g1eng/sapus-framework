"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _helpers = require("../helpers");
var _react = _interopRequireDefault(require("react"));
var _DataExporter = _interopRequireDefault(require("../functionalities/DataExporter"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const ExportControl = props => /*#__PURE__*/_react.default.createElement(_DataExporter.default, {
  id: props.id ? props.id : "exporter",
  format: "csv",
  data: props.header ? [props.header].concat(props.data) : props.data,
  className: props.className,
  variant: props.variant ? props.variant : "primary",
  fileName: (0, _helpers.getPrettyFileName)(props.fileName && props.fileName !== "" ? props.fileName : "data")
}, props.children ? props.children : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("span", {
  className: "me-2 bi-download"
}), " ", /*#__PURE__*/_react.default.createElement("span", null, "\u4FDD\u5B58")));
var _default = exports.default = ExportControl;