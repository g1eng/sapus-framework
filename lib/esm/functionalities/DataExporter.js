"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _helpers = require("../helpers");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
const getJsonObjectURL = dataList => {
  const blob = new Blob([JSON.stringify(dataList)], {
    type: "application/octet-stream"
  });
  const objURL = URL.createObjectURL(blob);
  setTimeout(() => {
    URL.revokeObjectURL(objURL);
  }, 3000);
  return objURL;
};
const getCsvObjectURL = dataList => {
  const blob = new Blob([JSON.stringify(dataList).replace(/],/g, "\n,").replace(/(,|^)\[+/g, "").replace(/]]/g, "")], {
    type: "application/octet-stream"
  });
  const objURL = URL.createObjectURL(blob);
  setTimeout(() => {
    URL.revokeObjectURL(objURL);
  }, 3000);
  return objURL;
};
const ExporterButton = props => {
  const [objURL, setObjURL] = (0, _react.useState)("");
  const fileName = props.fileName ? props.fileName : "data.csv";
  const exportFunc = props.format === "csv" ? getCsvObjectURL : getJsonObjectURL;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("a", {
    href: objURL === "" ? undefined : objURL,
    download: fileName,
    className: `${(0, _helpers.getButtonClass)(props.variant)} ${props.className ? props.className : ""}`,
    role: "button",
    onClick: () => {
      // @ts-ignore
      setObjURL(exportFunc(props.data));
      setTimeout(() => {
        setObjURL("");
      }, 3000);
    }
  }, props.children));
};
var _default = exports.default = ExporterButton;