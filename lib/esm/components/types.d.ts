import { ReactElement } from "react";
export type postId = number;
export type imageId = number;
export type datasetId = number;
export type chartId = number;
/***
 * category type represents category selector object, which holds a cursor position and a list of categories pointed for.
 */
export type categories = {
    current: string;
    categoryName?: string;
    list: Array<string>;
};
/***
 * elements type represents a selector object for list of ReactElement. It holds a DOM copy for current cursor and full list of DOM which is pointed for.
 */
export type elements = {
    current: ReactElement;
    categoryName?: string;
    list: Array<ReactElement>;
};
/***
 * indexCategories type represents index selector object, which holds a cursor position, list of index names and list of index values.
 * Index list is typed in Map. Optionally, unit field is acceptable for unit description for each index.
 */
export type indexCategories = {
    current: string;
    indexName?: string;
    list: Map<any, any>;
    unit?: Map<any, any>;
};
/**
 * [A/O] `control` represents a control with a name.
 * It may have a symbolic icon, hook action and color variant.
 */
export interface control {
    name: string;
    icon?: string;
    link?: string;
    hook?: (event: React.MouseEvent) => void;
    variant?: string;
}
/**
 * [A/O] `controls` represents a list of controls.
 * A controls object should hold `control`s or nested `controls` object in the array of its list property.
 * It may have optional properties for color variant and label existence.
 */
export interface controls extends control {
    list: Array<control | controls>;
    hasLabels?: boolean;
    variant?: string;
}
export type resourceURI = string;
export type relativePath = string;
export type rawPath = resourceURI | relativePath;
/***
 * linkMetadata represents a link attribute and its metadata, especially for react-router.
 * It may contain subResources field, which is typed with linkMetadata recursively.
 * linkMetadata with subResources can represent a route with subroutes.
 */
export interface linkMetadata {
    name: string | null;
    path: string;
    el: ReactElement;
    subResources?: linkList;
    indexResource?: linkMetadata;
}
/***
 * resourceList represents simple array of linkMetadata
 */
export type linkList = Array<linkMetadata>;
/***
 * post type represents metadata for post assets.
 * The assets may have article interface, but not limited to have specific data scheme.
 * (article data format shoould be user-defined.)
 */
export type post = {
    id: postId;
    title: string;
    updated?: Date;
    created?: Date;
    tags?: Array<string>;
};
/***
 * postList represents a simple list of post metadata
 */
export type postList = Array<post>;
/***
 * article interface represents abstruct asset body for post.
 * It is necessary for SimpleArticle to show each content in the article.
 * The `paragraphs` field holds each content for the article.
 */
export interface article {
    id: postId;
    image?: imageId;
    paragraphs: Array<content>;
    tags?: Array<string>;
}
/***
 * content type represents visible content block for article interface.
 * A content may be string, Array<string>, image, Array<image>, embed, chart, Array<chart>
 */
export type content = title | sentences | image | imageList | embed | chart | chartList;
export type title = string;
export type sentences = Array<string>;
/***
 * image type represents single image metadata.
 */
export type image = {
    id: number;
    type: string;
    name?: string;
    src?: string;
    link?: string;
    caption?: ReactElement | string;
    tags?: Array<string>;
};
/***
 * imageList represents simple list of images
 */
export interface imageList {
    type: string;
    images: Array<image>;
}
/***
 * embed type represents metadata for embeded external contents
 */
export interface embed {
    id: imageId;
    type: string;
    path?: rawPath;
    url?: rawPath;
    caption?: string;
}
/**
 * data type represents a raw data
 */
export type data = Array<Array<string | number>>;
export type numericDataSlice = Array<number>;
export type numericData = Array<numericDataSlice>;
export type stringDataSlice = Array<string>;
export type stringData = Array<stringDataSlice>;
export type combinedData = numericData | stringData;
/***
 * dataProcessor type represents a data publisher or a data deliverer.
 */
export type dataProcessor = {
    id: string;
    type: string;
    url: string;
    original?: boolean;
};
export type dataProcessors = Array<dataProcessor>;
/***
 * license type represents a license metadata for a contents
 */
export type license = {
    name: string;
    isFree: boolean;
    isOpenSource?: boolean;
    version?: string;
    variant?: string;
    url?: string;
};
/***
 * dataset interface represents a dataset to be delivered.
 * Any statics, numerical values or string list may be specified for its payload
 * and payload itself can be contained in rawData field.
 */
export interface dataset {
    id: datasetId;
    description: string;
    source?: rawPath;
    rawData?: data | numericData | combinedData;
    createdAt?: Date;
    updatedAt?: Date;
    fetchedAt?: Date;
    publisher?: dataProcessor | dataProcessors;
    originalPublisher?: dataProcessor | dataProcessors;
    hash?: string;
    signature?: string;
    license?: license;
    tags?: Array<string>;
}
/***
 * chart interface represents a chart for a dataset, which holds dataset field for the target dataset.
 */
export interface chart {
    id: chartId;
    type: string;
    title: string;
    description: string;
    dataset: datasetId | dataset;
    source?: rawPath;
    rawData?: data | numericData | combinedData;
    createdAt?: Date;
    updatedAt?: Date;
    timestamp?: Date;
    publisher?: dataProcessor | dataProcessors;
    originalPublisher?: dataProcessor | dataProcessors;
    hash?: string;
    signature?: string;
    license?: license;
    tags?: Array<string>;
}
/***
 * chartList type represents a simple list of charts
 */
export type chartList = Array<chart>;
