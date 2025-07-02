"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _d3Dsv = require("d3-dsv");
var _helpers = require("../helpers");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
// @ts-ignore

const ImporterButton = props => {
  const formId = props.id === "" ? "fileform_importer" : props.id;
  let list = [];
  const importDataCore = (formEl, parserFunc) => {
    // console.log("formEL", formEl)
    if (!formEl) {
      return null;
    } else if (!formEl.files) {
      return null;
    } else if (formEl.files.length) {
      const fileObj = formEl.files[formEl.files.length - 1];
      const reader = new FileReader();
      reader.onload = e => {
        try {
          // console.log("domEvent: ",e)
          list = parserFunc(e.target.result);
          if (props.hook) props.hook(list, fileObj.name);
          console.log("File successfully imported.", list);
        } catch {
          console.log("Invalid file format.");
        }
        list = [];
      };
      if (fileObj !== undefined) {
        reader.readAsText(fileObj);
      } else {
        console.log("no file");
      }
    } else {
      console.log("invalid length of imported files: ", formEl.files);
      return null;
    }
  };
  // @ts-ignore
  const importDataCSV = formEl => importDataCore(formEl, _d3Dsv.csvParseRows);
  // @ts-ignore
  const importDataJSON = formEl => importDataCore(formEl, JSON.parse);
  const importer = props.format === "csv" ? importDataCSV : importDataJSON;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("label", {
    role: "button",
    className: (0, _helpers.getButtonClass)(props.variant) ? `btn ${(0, _helpers.getButtonClass)(props.variant)}` : "btn btn-primary"
  }, /*#__PURE__*/_react.default.createElement("span", null, props.children ? props.children : "import"), /*#__PURE__*/_react.default.createElement("input", {
    type: "file",
    name: "file_name",
    id: formId,
    onChange: () => {
      importer(document.getElementById(formId));
    },
    hidden: true,
    multiple: true
  })));
};
var _default = exports.default = ImporterButton;