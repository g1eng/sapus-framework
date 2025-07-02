"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getUnixPreviousDay = exports.getUnixNextDay = exports.getTextClass = exports.getPrettyFileName = exports.getLocalISOStringDate = exports.getImagePath = exports.getButtonClass = exports.getBorderClass = exports.getBgClass = exports.getArticleJsonPath = exports.AOError = void 0;
var _config = require("./config");
// error classes

class AOError extends Error {}

// asset helpers

/***
 * getImagePath gives image asset URI (or relative path) with specified image object
 */
exports.AOError = AOError;
const getImagePath = img => `${_config.imageRoot}/${img.id}.${img.type}`;

/***
 * getArticleJsonPath gives JSON asset URI (or relative path) with specified postId
 */
exports.getImagePath = getImagePath;
const getArticleJsonPath = id => `${_config.articleRoot}/${id}.json`;

// style helpers

/**
 * getTextClass returns bootstrap text class name with specified variant
 */
exports.getArticleJsonPath = getArticleJsonPath;
const getTextClass = variant => variant ? `text-${variant}` : "";

/**
 * getBgClass returns bootstrap background class name with specified variant
 */
exports.getTextClass = getTextClass;
const getBgClass = variant => variant ? `bg-${variant}` : "";

/**
 * getBorderClass returns bootstrap border class name with specified variant
 */
exports.getBgClass = getBgClass;
const getBorderClass = variant => variant ? `border-${variant}` : "";

/**
 *  getButtonClass returns bootstrap button class name with specified variant
 */
exports.getBorderClass = getBorderClass;
const getButtonClass = variant => variant ? `btn btn-${variant}` : "";

// datetime helpers
exports.getButtonClass = getButtonClass;
const daySeconds = 86400000;

/***
 * getLocalISOStringDate returns ISO9601 date in string and  for current locale for Date argument
 */
const getLocalISOStringDate = d => {
  const day = d.getDate() < 10 ? `0${d.getDate()}` : d.getDate().toString();
  const mon = d.getMonth() < 9 ? `0${d.getMonth() + 1}` : (d.getMonth() + 1).toString();
  return d.toLocaleDateString().replace(/\//g, "-").replace(/-[0-9]-/, `-${mon}-`).replace(/[0-9]+(T.+|$)/, "") + day;
};

/***
 * getUnixNextDay returns Unix time for a day after now
 */
exports.getLocalISOStringDate = getLocalISOStringDate;
const getUnixNextDay = d => d.getTime() + daySeconds;
/***
 * getUnixPreviousDay returns Unix time for a day before now
 */
exports.getUnixNextDay = getUnixNextDay;
const getUnixPreviousDay = d => d.getTime() + daySeconds;
exports.getUnixPreviousDay = getUnixPreviousDay;
const getPrettyFileName = fileName => fileName.replace(/\.csv-/, "-") + "-" + `${new Date().toLocaleDateString()}-${new Date().toLocaleTimeString()}`.replace(/[A-Z]/, "-").replace(/\//g, "-").replace(/:/g, "").replace(/$/, ".csv");
exports.getPrettyFileName = getPrettyFileName;