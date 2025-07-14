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
        ["車",86],
        ["電車",220],
        ["徒歩",17]]
    ),
    unit: new Map([
        ["車","人"],
        ["電車","人"],
        ["徒歩","人"]
    ])
}

const u30Indices: indexCategories = {
    current: "車",
    indexName: "平均速度",
    list: new Map([
        ["車",45],
        ["電車",65],
        ["徒歩",4]
    ]),
    unit: new Map([
        ["車","km/s"],
        ["電車","km/s"],
        ["徒歩","km/s"]
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
    ["通勤方法", someIndices],
    ["平均速度", u30Indices],
    ["延床面積", positiveRate]
])

export const indexSelector: categories = {
    current: "通勤方法",
    categoryName: "index",
    list: ["通勤方法", "平均速度", "延床面積"]
}