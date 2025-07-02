import {combinedData, numericData, stringDataSlice} from "../../types";


const genRandFloatForEach = (a: Array<any>) => {
    let b : Array<number> = []
    a.forEach(()=>{
        b.push(Math.round(Math.random() * 1000.0) / 10.0)
    })
    return b
}

const genRandInt5 = () => {
    let a: Array<number> = []
    for(let i=0; i<5; i++) a.push(Math.floor(Math.random() * 100))
    return a
}

export const plain_header: stringDataSlice = ["a","b","c","d","e"]
export const plain_data: combinedData = [genRandInt5(), genRandInt5(), genRandInt5()]

export const sample_header: Array<string> = ["秀和","インプ","オラ","翔泳","技評","インタ","日経","Think","マイナ"]
export const sample_numbers: numericData = [genRandFloatForEach(sample_header), genRandFloatForEach(sample_header)]