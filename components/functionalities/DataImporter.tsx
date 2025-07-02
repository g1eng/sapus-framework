import React from "react";
// @ts-ignore
import { csvParseRows } from "d3-dsv"
import { getButtonClass } from "../helpers";
import { ImporterButtonProps } from "./props";

const ImporterButton = (props: ImporterButtonProps) => {
    const formId = props.id === "" ? "fileform_importer" : props.id
    let list: Array<any> = []
    const importDataCore = (formEl: HTMLFormElement | null, parserFunc: Function) => {
        // console.log("formEL", formEl)
        if (!formEl) {
            return null
        } else if (!formEl.files) {
            return null
        } else if (formEl.files.length) {
            const fileObj = formEl.files[formEl.files.length - 1]
            const reader = new FileReader()
            reader.onload = (e: any) => {
                try {
                    // console.log("domEvent: ",e)
                    list = parserFunc(e.target.result)
                    if (props.hook) props.hook(list, fileObj.name)
                    console.log("File successfully imported.", list)
                } catch {
                    console.log("Invalid file format.")
                }
                list = []
            }
            if (fileObj !== undefined) {
                reader.readAsText(fileObj)
            } else {
                console.log("no file")
            }
        } else {
            console.log("invalid length of imported files: ", formEl.files)
            return null
        }
    }
    // @ts-ignore
    const importDataCSV = (formEl: HTMLElement | null) => importDataCore(formEl, csvParseRows)
    // @ts-ignore
    const importDataJSON = (formEl: HTMLElement | null) => importDataCore(formEl, JSON.parse)

    const importer = props.format === "csv" ? importDataCSV : importDataJSON

    return (
        <>
            <label role="button" className={getButtonClass(props.variant) ? `btn ${getButtonClass(props.variant)}` : "btn btn-primary"}>
                <span>
                    {props.children ? props.children : "import"}
                </span>
                <input
                    type="file"
                    name="file_name"
                    id={formId}
                    onChange={() => {
                        importer(document.getElementById(formId))
                    }}
                    hidden
                    multiple
                />
            </label>
        </>
    )
}

export default ImporterButton;
