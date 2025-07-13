import React from "react";
// @ts-expect-error import error
import { csvParseRows } from "d3-dsv"
import { getButtonClass } from "../helpers";
import { ImporterButtonProps } from "./props";

const ImporterButton = (props: ImporterButtonProps) => {
    const formId = props.id === "" ? "fileform_importer" : props.id
    let list: Array<unknown> = []
    // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
    const importDataCore = (formEl: HTMLFormElement | null, parserFunc: Function) => {
        // console.log("formEL", formEl)
        if (!formEl) {
            return null
        } else if (!formEl.files) {
            return null
        } else if (formEl.files.length) {
            const fileObj = formEl.files[formEl.files.length - 1]
            const reader = new FileReader()
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
    // @ts-expect-error element seems not to be a HTML form
    const importDataCSV = (formEl: HTMLElement | null) => importDataCore(formEl, csvParseRows)
    // @ts-expect-error element seems not to be a HTML form
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
