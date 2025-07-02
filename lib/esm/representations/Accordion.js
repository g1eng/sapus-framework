"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactBootstrap = require("react-bootstrap");
var _AccordionBody = _interopRequireDefault(require("react-bootstrap/esm/AccordionBody"));
var _AccordionHeader = _interopRequireDefault(require("react-bootstrap/esm/AccordionHeader"));
var _AccordionItem = _interopRequireDefault(require("react-bootstrap/esm/AccordionItem"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
// type accordionMetaData = categories | linkMetadata | Array<ReactElement | string>

const getAccordionBody = item => {
  let k = 0;
  if (item.list !== undefined && typeof item.list.length === "number") {
    // category list
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_AccordionBody.default, {
      className: item.className
    }, item.list.map(cat => /*#__PURE__*/_react.default.createElement(_AccordionItem.default, {
      key: k++,
      eventKey: "e",
      className: item.className
    }, cat))));
  } else if (item.length) {
    //list of JSX or string
    return /*#__PURE__*/_react.default.createElement(_AccordionBody.default, {
      className: item.className
    }, item.map(el => /*#__PURE__*/_react.default.createElement(_AccordionItem.default, {
      key: k++,
      eventKey: "e",
      className: item.className
    }, el)));
  } else {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null);
  }
};
const Accordion = props => {
  return /*#__PURE__*/_react.default.createElement(_reactBootstrap.Accordion, {
    className: props.className
  }, /*#__PURE__*/_react.default.createElement(_AccordionHeader.default, {
    className: props.className
  }, props.children), getAccordionBody(props));
};
var _default = exports.default = Accordion;