import { image, postId } from "./types";
export declare class AOError extends Error {
}
/***
 * getImagePath gives image asset URI (or relative path) with specified image object
 */
export declare const getImagePath: (img: image) => string;
/***
 * getArticleJsonPath gives JSON asset URI (or relative path) with specified postId
 */
export declare const getArticleJsonPath: (id: postId) => string;
/**
 * getTextClass returns bootstrap text class name with specified variant
 */
export declare const getTextClass: (variant?: string) => string;
/**
 * getBgClass returns bootstrap background class name with specified variant
 */
export declare const getBgClass: (variant?: string) => string;
/**
 * getBorderClass returns bootstrap border class name with specified variant
 */
export declare const getBorderClass: (variant?: string) => string;
/**
 *  getButtonClass returns bootstrap button class name with specified variant
 */
export declare const getButtonClass: (variant?: string) => string;
/***
 * getLocalISOStringDate returns ISO9601 date in string and  for current locale for Date argument
 */
export declare const getLocalISOStringDate: (d: Date) => string;
/***
 * getUnixNextDay returns Unix time for a day after now
 */
export declare const getUnixNextDay: (d: Date) => number;
/***
 * getUnixPreviousDay returns Unix time for a day before now
 */
export declare const getUnixPreviousDay: (d: Date) => number;
export declare const getPrettyFileName: (fileName: string) => string;
