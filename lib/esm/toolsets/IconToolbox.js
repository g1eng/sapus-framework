"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _IconControl = _interopRequireDefault(require("./IconControl"));
var _react = _interopRequireWildcard(require("react"));
var _IconToolboxModule = _interopRequireDefault(require("./IconToolbox.module.css"));
var _Slide = _interopRequireDefault(require("../effects/Slide"));
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); } // @ts-ignore
/**
 * IconToolbox supplies a drawer for list of controls.
 *
 * It can accept icon and name list (of IconControlProps) inside the `list` parameter and can be nested
 * to specify one or more lists inside the `list` parameter.
 *
 * Items in list parameter is typed with `IconControlProps`. For more detail, see IconControl documentation.
 * @param props<IconToolboxProps>
 */
const IconToolbox = props => {
  const [isOpen, setIsOpen] = (0, _react.useState)(props.isOpen ? props.isOpen : false);
  const setClose = () => {
    setIsOpen(false);
  };
  const isVertical = props.slide !== "left" && props.slide !== "right";
  const iconSize = props.size;
  const direction = props.slide ? props.slide : "up";
  const marginFactor = props.size === "lg" ? 3.5 : 3;
  const subVariant = props.toolList.variant ? props.toolList.variant : props.variant ? props.variant : undefined;
  const closeDuration = props.closeDuration ? props.closeDuration / 2 : 800;
  const closeDistance = props.closeDistance ? props.closeDistance : 150;
  const controlList = props.toolList.list;
  const hasLabel = props.toolList.hasLabels === true;
  const slideLeftMargin = direction === "left" ? `-${controlList.length * marginFactor + 0.25}rem` : "3rem";
  const ContentWrapper = props => /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, isVertical && /*#__PURE__*/_react.default.createElement("div", {
    className: "my-1 me-1"
  }, props.children), !isVertical && /*#__PURE__*/_react.default.createElement("span", {
    className: "my-1 me-1"
  }, props.children));
  const FrameWrapper = props => /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, isVertical && props.children, !isVertical && /*#__PURE__*/_react.default.createElement("div", {
    className: `d-flex flex-nowrap p-0`,
    style: {
      marginBottom: `-4rem`,
      marginLeft: slideLeftMargin
    }
  }, props.children));
  const SpanLabel = props => /*#__PURE__*/_react.default.createElement("span", _extends({
    className: `${iconSize === "lg" ? `${_IconToolboxModule.default.toolboxLabelLarge}` : `${_IconToolboxModule.default.toolboxLabel}`}`
  }, props));
  const trackScroll = () => {
    if (typeof window !== "undefined") {
      const initialY = window.scrollY;
      if (!isOpen) return;
      const checkScrollDistanceY = () => {
        if (!isOpen) {
          return;
        } else if (Math.abs(initialY - window.scrollY) > closeDistance) {
          window.onscroll = () => {
            setClose();
            window.onscroll = null;
          };
          return;
        } else {
          setTimeout(checkScrollDistanceY, closeDuration);
        }
      };
      checkScrollDistanceY();
    }
  };
  (0, _react.useEffect)(() => {
    setIsOpen(props.isOpen === true);
  }, [props.isOpen]);
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_Slide.default, {
    in: isOpen,
    slide: direction,
    style: {
      top: direction === "down" ? "-0.2rem" : direction === "up" ? "-5.2rem" : "-0.2rem",
      marginTop: direction === "down" || direction === "up" ? undefined : 0,
      bottom: direction !== "down" ? "0.5rem" : ""
    },
    distance: 3,
    duration: 180
  }, /*#__PURE__*/_react.default.createElement(FrameWrapper, null, /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, controlList.map(c => {
    let i = 1;
    return "list" in c ? /*#__PURE__*/_react.default.createElement(IconToolbox, {
      icon: c.icon ? c.icon : "box",
      key: c.name + `_${i++}`,
      toolList: c,
      className: "my-1 me-1",
      variant: subVariant,
      slide: props.subSlide ? props.subSlide : isVertical ? "left" : "up",
      showName: props.toolList.hasLabels,
      isOpen: isOpen ? undefined : false,
      size: iconSize,
      inner: true
    }) : /*#__PURE__*/_react.default.createElement(ContentWrapper, {
      key: `${c.name}_${i++}`
    }, /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_IconControl.default, {
      icon: c.icon ? c.icon : "box",
      size: iconSize,
      variant: subVariant,
      href: c.link ? c.link : undefined,
      onClick: c.hook,
      a: c.link !== undefined
    }), /*#__PURE__*/_react.default.createElement(SpanLabel, null, hasLabel && c.name)));
  })))), /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_IconControl.default, {
    className: "sapus-icon-toolbox-switch",
    style: props.style,
    icon: props.icon ? props.icon : props.toolList.icon ? props.toolList.icon : "box",
    onClick: () => {
      // console.log(`tbx: `, props, `isOpen: ${!isOpen}`)
      setIsOpen(!isOpen);
      trackScroll();
      if (props.hook) props.hook();
    },
    size: iconSize,
    variant: isOpen ? "secondary" : props.variant
  }), /*#__PURE__*/_react.default.createElement(SpanLabel, null, props.showName && props.toolList.name)));
};
var _default = exports.default = IconToolbox;