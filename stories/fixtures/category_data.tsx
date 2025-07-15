import {categories, indexCategories} from "../../components/types"

export const sampleCategories: categories = {
    current: "ok",
    categoryName: "your options",
    list: [
        "ok",
        "nok",
        "very ok",
        "nop",
        "never"
    ]
}

export const favorite: categories = {
    current: "love",
    list: ["love", "like", "dislike", "hate", "ignore"]
}

export const another: categories = {
    current: "neko",
    list: ["neko", "inu", "鶏", "商品", "MASSIVE"]
}

export const sampleMultiCategories = [favorite, another]

export const someIndices: indexCategories = {
    current: "car",
    indexName: "",
    list: new Map([
        ["car",86],
        ["train",220],
        ["walking",17]]
    ),
    unit: new Map([
        ["car","staffs"],
        ["train","staffs"],
        ["walking","staffs"]
    ])
}

export const u30Indices: indexCategories = {
    current: "car",
    indexName: "commuting method",
    list: new Map([
        ["car",45],
        ["train",65],
        ["walking",4]
    ]),
    unit: new Map([
        ["car","km/s"],
        ["train","km/s"],
        ["walking","km/s"]
    ])
}

const positiveRate: indexCategories = {
    current: "BIG-A Urawa Central II",
    indexName: "floor space",
    list: new Map([
        ["BIG-A Urawa Central II",851],
        ["MEGA Donki Akabane",1905],
        ["Bic Camera Oimachi",810]
    ]),
    unit: new Map([
        ["BIG-A Urawa Central II",<span>m<sup>2</sup> </span>],
        ["MEGA Donki Akabane",<span>m<sup>2</sup></span>],
        ["Bic Camera Oimachi",<span>m<sup>2</sup></span>]
    ])
}

export const multiIndices: Map<string,indexCategories> = new Map([
    ["commuting method", someIndices],
    ["velocity", u30Indices],
    ["gross floor area", positiveRate]
])

export const indexSelector: categories = {
    current: "commuting method",
    categoryName: "data category",
    list: ["commuting method", "velocity", "gross floor area"]
}