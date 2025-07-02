"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _helpers = require("../helpers");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
const SimpleArticle = props => {
  const [post, setContent] = (0, _react.useState)(/*#__PURE__*/_react.default.createElement("div", {
    className: "spinner"
  }));
  const [pid, setPid] = (0, _react.useState)(props.id);
  const [isFetched, setFetched] = (0, _react.useState)(false);
  (0, _react.useEffect)(() => {
    const loadContent = id => {
      let i = 0,
        j = 0;
      if (!isFetched) {
        fetch((0, _helpers.getArticleJsonPath)(id)).then(res => {
          res.json().then(res => {
            if (res.data.paragraphs.length) {
              setContent(/*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, res.data.paragraphs.map(p => /*#__PURE__*/_react.default.createElement("div", {
                key: `para_${i++}`
              }, typeof p === "string" && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("h2", null, p), /*#__PURE__*/_react.default.createElement("hr", null)), typeof p === "object" && p.length && typeof p[0] === "string" && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, p.map(pp => /*#__PURE__*/_react.default.createElement("p", {
                key: `${i++}-${j++}`
              }, " ", pp, " ")))))));
            }
            setPid(id);
            setFetched(true);
          }).catch(e => {
            console.log(e);
          });
        }).catch(e => {
          console.log(e);
          setContent(/*#__PURE__*/_react.default.createElement("h2", null, "failed to fetch content."));
          setPid(id);
          setFetched(true);
        });
      }
    };
    if (props.id !== pid) setFetched(false);
    loadContent(props.id);
  }, [props.id, pid, isFetched]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, post);
};
var _default = exports.default = SimpleArticle;