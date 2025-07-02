"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _MessagePanelModule = _interopRequireDefault(require("./MessagePanel.module.css"));
var _IconControl = _interopRequireDefault(require("../toolsets/IconControl"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
// @ts-ignore

const MessagePanel = props => /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
  className: `${_MessagePanelModule.default.msgarea}`
}, /*#__PURE__*/_react.default.createElement("div", {
  className: `d-flex justify-content-center align-items-center`
}, props.left === true && props.icon && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, props.btn === undefined && /*#__PURE__*/_react.default.createElement("span", {
  className: props.iconVariant ? `text-${props.iconVariant}` : ""
}, /*#__PURE__*/_react.default.createElement("div", {
  className: `${props.icon ? `bi-${props.icon}` : "bi-question"} ${props.iconSize === "xl" ? _MessagePanelModule.default.hugesymbol : props.iconSize !== "sm" ? _MessagePanelModule.default.bigsymbol : undefined}`
})), props.btn !== undefined && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_IconControl.default, {
  icon: props.icon
  //@ts-ignore
  ,
  size: props.iconSize ? props.iconSize : "md",
  variant: props.iconVariant,
  label: props.btnMsg
}))), /*#__PURE__*/_react.default.createElement("div", {
  className: "px-3"
}, /*#__PURE__*/_react.default.createElement("h3", null, " ", props.title, " "), props.subTitle ? /*#__PURE__*/_react.default.createElement("div", {
  className: "text-center w-100"
}, " ", props.subTitle, " ") : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null)), props.left !== true && props.icon && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, props.btn === undefined && /*#__PURE__*/_react.default.createElement("span", {
  className: props.iconVariant ? `text-${props.iconVariant}` : ""
}, /*#__PURE__*/_react.default.createElement("div", {
  className: `${props.icon ? `bi-${props.icon}` : "bi-question"} ${_MessagePanelModule.default.hugesymbol}`
})), props.btn !== undefined && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_IconControl.default, {
  icon: props.icon
  //@ts-ignore
  ,
  size: props.iconSize ? props.iconSize : "md",
  variant: props.iconVariant,
  label: props.btnMsg
})))), props.children && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("hr", {
  style: {
    borderStyle: "dashed"
  }
}), props.children)));
var _default = exports.default = MessagePanel;