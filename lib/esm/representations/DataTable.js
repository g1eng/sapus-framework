"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactBootstrap = require("react-bootstrap");
var _IconControl = _interopRequireDefault(require("../toolsets/IconControl"));
var _helpers = require("../helpers");
var _DataTableModule = _interopRequireDefault(require("./DataTable.module.css"));
require("./shared.css");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
// @ts-ignore

const DataHeader = props => {
  let colNum = 0;
  return /*#__PURE__*/_react.default.createElement("thead", null, /*#__PURE__*/_react.default.createElement("tr", null, props.rowHeader && /*#__PURE__*/_react.default.createElement("th", null), props.header.map(h => /*#__PURE__*/_react.default.createElement("th", {
    className: `text-nowrap ${_DataTableModule.default.th}`,
    key: `th_${colNum++}`
  }, h))));
};
const DataBody = props => {
  let colIndex = 0,
    rowIndex = 0;
  const [data, setData] = (0, _react.useState)(props.data);
  const [activeRow, setActiveRow] = (0, _react.useState)(-1);
  const [activeCol, setActiveCol] = (0, _react.useState)(-1);
  (0, _react.useEffect)(() => {
    setData(props.data);
  }, [props.data]);
  const colLength = data.length !== 0 ? data[0].length : 0;
  const incrementCellRow = () => {
    setActiveRow(activeRow + 1);
  };
  const incrementCellCol = () => {
    setActiveCol(activeCol + 1);
    if (activeCol >= colLength - 1) {
      setActiveCol(0);
      incrementCellRow();
    }
  };
  const decrementCellCol = () => {
    setActiveCol(activeCol - 1);
    if (activeCol <= 0) {
      setActiveCol(colLength - 1);
      setActiveRow(activeRow - 1);
    }
  };
  const ModifiableDatum = tdProps => {
    const [d, setD] = (0, _react.useState)(tdProps.datum);

    // console.log("variant: ", tdProps.variant)
    const bgClass = (0, _helpers.getBgClass)(tdProps.variant),
      textClass = bgClass ? bgClass === "bg-dark" ? "text-light" : "text-dark" : "";
    return tdProps.id === `d-${activeRow}-${activeCol}` ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("td", {
      id: `t${tdProps.id}`,
      className: _DataTableModule.default.tdActive
    }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.FormControl, {
      id: tdProps.id,
      type: "text"
      // @ts-ignore
      ,
      value: d,
      style: document.getElementById(`t${tdProps.id}`) ? {
        //@ts-ignore
        width: `calc(${document.getElementById(`t${tdProps.id}`).offsetWidth}px - ${(document.getElementById(`s${tdProps.id}`)?.innerText.length - d.toString().length) * 0.5}rem - 0.2rem)`,
        height: `${document.getElementById(`t${tdProps.id}`)?.offsetHeight}px`,
        //@ts-ignore
        textAlign: parseFloat(d) > 0 || parseFloat(d) <= 0 ? "right" : "center"
      } : undefined
      //@ts-ignore
      ,
      className: `${bgClass} ${textClass} ${_DataTableModule.default.formActive} ${setTimeout(() => {
        document.getElementById(tdProps.id).focus();
      }, 10)}`,
      autoFocus: true,
      onInput: e => {
        // @ts-ignore
        setD(e.target.value);
      },
      onKeyDown: e => {
        // @ts-ignore
        if (e.shiftKey && e.key === "Enter") {
          // console.log("shift enter e", e)
          setActiveRow(activeRow - 1);
          // console.log(`row ${activeRow}, col ${activeCol}`)
        } else if (e.key === "Enter") {
          // console.log("enter e", e)
          incrementCellRow();
          // console.log(`row ${activeRow}, col ${activeCol}`)
          // console.log(props.hook)
        } else if (e.shiftKey && e.key === "Tab") {
          // console.log("shift tab e", e)
          decrementCellCol();
          // console.log(`row ${activeRow}, col ${activeCol}`)
        } else if (e.key === "Tab") {
          // console.log("tab e", e)
          incrementCellCol();
          // console.log(`row ${activeRow}, col ${activeCol}`)
        } else if (e.key === "Esc") {
          setActiveRow(-1);
          setActiveCol(-1);
        }
      }
    }), /*#__PURE__*/_react.default.createElement("span", {
      id: `s${tdProps.id}`,
      style: {
        opacity: "0",
        background: "transparent"
      }
    }, d && (tdProps.wrapper ? tdProps.wrapper(d) : d), (d === 0 || d == "0") && props.omitZero ? "" : 0))) : /*#__PURE__*/_react.default.createElement("td", {
      id: `t${tdProps.id}`,
      className: _DataTableModule.default.td,
      onClick: () => {
        console.log(tdProps.id.slice(2).slice(0, tdProps.id.indexOf("-") + 1), tdProps.id.slice(2).slice(tdProps.id.indexOf("-") + 1));
        setActiveRow(parseInt(tdProps.id.slice(2).slice(0, tdProps.id.indexOf("-") + 1)));
        setActiveCol(parseInt(tdProps.id.slice(2).slice(tdProps.id.indexOf("-") + 1)));
      }
    }, /*#__PURE__*/_react.default.createElement("span", {
      id: `s${tdProps.id}`,
      className: _DataTableModule.default.td
    }, d ? tdProps.wrapper ? tdProps.wrapper(d) : d : (d === 0 || d == "0") && props.omitZero ? "" : tdProps.wrapper ? tdProps.wrapper(d) : d));
  };
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, data.map(dList => {
    colIndex = 0;
    return /*#__PURE__*/_react.default.createElement("tr", {
      key: `trow_${rowIndex++}`
    }, props.rowHeader && props.rowHeader.length > rowIndex && props.rowHeader[rowIndex] !== undefined && /*#__PURE__*/_react.default.createElement("th", {
      className: "text-nowrap"
    }, props.rowHeader[rowIndex]), dList.map(d => /*#__PURE__*/_react.default.createElement("td", {
      className: _DataTableModule.default.td,
      key: `td_${rowIndex}_${colIndex++}`
    },
    //@ts-ignore
    d && props.dataWrapper && props.dataWrapper[colIndex] !== undefined ? props.dataWrapper[colIndex](d) : props.omitZero && (d == 0 || d == " 0") ? "" : d)));
  }));
};
const getRevertedData = data => {
  let newData = [];
  for (let i = 0; i < data[0].length; i++) newData.push([]);
  data.forEach(dSlice => {
    let i = 0;
    dSlice.forEach(d => {
      newData[i++].push(d);
    });
  });
  return newData;
};

/**
 * DataTable supplies simple data representation layer with a table.
 */
const DataTable = props => {
  const [data, setData] = (0, _react.useState)(props.revert ? getRevertedData(props.data) : props.data);
  const header = props.revert ? props.rowHeader : props.header,
    rowHeader = props.revert ? props.header : props.rowHeader,
    dLength = data.length ? data[0].length : 0,
    isInteractive = props.interactive ? props.interactive : props.interactiveControl !== undefined;

  // console.log("data:", data, "propsdata:", props.data)
  (0, _react.useEffect)(() => {
    // console.log("data updated")
    setData(props.revert ? getRevertedData(props.data) : props.data);
  }, [props.data, props.revert]);
  let tRowAdditional = [/*#__PURE__*/_react.default.createElement(_react.default.Fragment, null)];
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Table, {
    className: _DataTableModule.default.table,
    variant: props.variant ? props.variant : "light",
    striped: props.striped,
    bordered: props.bordered,
    borderless: props.borderless,
    hover: props.hover,
    size: props.size,
    responsive: props.responsive
  }, header && /*#__PURE__*/_react.default.createElement(DataHeader, {
    header: header,
    rowHeader: rowHeader
  }), /*#__PURE__*/_react.default.createElement("tbody", null, /*#__PURE__*/_react.default.createElement(DataBody, {
    data: data,
    dataWrapper: props.dataWrapper,
    rowHeader: rowHeader,
    omitZero: props.omitZero,
    variant: props.variant
  }))), (props.interactive || props.interactiveControl) && /*#__PURE__*/_react.default.createElement("div", {
    className: "d-block w-100 transparent p-1 pb-2 bg-light"
  }, /*#__PURE__*/_react.default.createElement("label", {
    className: "d-flex justify-content-center"
  }, header && /*#__PURE__*/_react.default.createElement(_IconControl.default, {
    size: "sm",
    icon: "plus",
    variant: "info",
    onClick: () => {
      let tmpData = [];
      for (let i = 0; i < header.length; i++) tmpData.push("");
      let now = new Date();
      let [y, m, d] = [now.getFullYear(), now.getMonth() + 1, now.getDay()];
      tmpData[0] = `${y}-${m < 10 ? `0${m}` : m}-${d < 10 ? `0${d}` : d}`;
      tmpData[tmpData.length - 1] = "0";
      //@ts-ignore
      props.addHook(tmpData);
    }
  }))));
};
var _default = exports.default = DataTable;