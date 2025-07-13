import React, { useState } from "react";
import { ExporterButtonProps } from "./props";
import { getButtonClass } from "../helpers";

const getJsonObjectURL = (dataList: Array<Array<string> | Array<number>>) => {
    const blob = new Blob([
        JSON.stringify(dataList)
    ], { type: "application/octet-stream" })
    const objURL = URL.createObjectURL(blob)
    setTimeout(() => { URL.revokeObjectURL(objURL) }, 3000)
    return objURL
}

const getCsvObjectURL = (dataList: Array<Array<string> | Array<number>>) => {
    const blob = new Blob([
        JSON.stringify(dataList)
            .replace(/],/g, "\n,")
            .replace(/(,|^)\[+/g, "")
            .replace(/]]/g, "")
    ], { type: "application/octet-stream" })
    const objURL = URL.createObjectURL(blob)
    setTimeout(() => { URL.revokeObjectURL(objURL) }, 3000)
    return objURL
}


const ExporterButton = (props: ExporterButtonProps) => {
    const [objURL, setObjURL] = useState("")
    const fileName = props.fileName ? props.fileName : "data.csv"
    const exportFunc = props.format === "csv" ? getCsvObjectURL : getJsonObjectURL
    return <>
        <a
            href={objURL === "" ? undefined : objURL}
            download={fileName}
            className={`${getButtonClass(props.variant)} ${props.className ? props.className : ""}`}
            role={"button"}
            onClick={() => {
                // @ts-expect-error unacceptable data is specified
                setObjURL(exportFunc(props.data))
                setTimeout(() => {
                    setObjURL("")
                }, 3000)
            }}
        >
            {props.children}
        </a>
    </>
}

export default ExporterButton;
