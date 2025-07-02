import { imageRoot, articleRoot } from "./config";
import { image, postId } from "./types";
import { DataSlice } from "./representations/props";
import React from "react";

// error classes

export class AOError extends Error { }

// asset helpers

/***
 * getImagePath gives image asset URI (or relative path) with specified image object
 */
export const getImagePath = (img: image) => `${imageRoot}/${img.id}.${img.type}`

/***
 * getArticleJsonPath gives JSON asset URI (or relative path) with specified postId
 */
export const getArticleJsonPath = (id: postId) => `${articleRoot}/${id}.json`


// style helpers

/**
 * getTextClass returns bootstrap text class name with specified variant
 */
export const getTextClass = (variant?: string) => variant ? `text-${variant}` : ""

/**
 * getBgClass returns bootstrap background class name with specified variant
 */
export const getBgClass = (variant?: string) => variant ? `bg-${variant}` : ""

/**
 * getBorderClass returns bootstrap border class name with specified variant
 */
export const getBorderClass = (variant?: string) => variant ? `border-${variant}` : ""

/**
 *  getButtonClass returns bootstrap button class name with specified variant
 */

export const getButtonClass = (variant?: string) => variant ? `btn btn-${variant}` : ""

// datetime helpers
const daySeconds = 86400000

/***
 * getLocalISOStringDate returns ISO9601 date in string and  for current locale for Date argument
 */
export const getLocalISOStringDate = (d: Date) => {
    const day = d.getDate() < 10 ? `0${d.getDate()}` : d.getDate().toString()
    const mon = d.getMonth() < 9 ? `0${d.getMonth() + 1}` : (d.getMonth() + 1).toString()
    return d.toLocaleDateString()
        .replace(/\//g, "-")
        .replace(/-[0-9]-/, `-${mon}-`)
        .replace(/[0-9]+(T.+|$)/, "") + day
}

/***
 * getUnixNextDay returns Unix time for a day after now
 */
export const getUnixNextDay = (d: Date) => d.getTime() + daySeconds
/***
 * getUnixPreviousDay returns Unix time for a day before now
 */
export const getUnixPreviousDay = (d: Date) => d.getTime() + daySeconds

export const getPrettyFileName = (fileName: string) =>
    fileName.replace(/\.csv-/, "-") +
    "-" +
    `${new Date().toLocaleDateString()}-${new Date().toLocaleTimeString()}`
        .replace(/[A-Z]/, "-")
        .replace(/\//g, "-")
        .replace(/:/g, "")
        .replace(/$/, ".csv")
