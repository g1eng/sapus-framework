import { getPrettyFileName } from "../helpers";
import React from "react";
import { ButtonProps } from "react-bootstrap";
import {DataSlice} from "../representations/props";
import ExporterButton from "../functionalities/DataExporter";

interface ExportControlProps extends ButtonProps {
    header?: DataSlice,
    data: Array<DataSlice>,
    fileName?: string
}

const ExportControl = (props: ExportControlProps) =>
    <ExporterButton
        id={props.id ? props.id : "exporter"}
        format={"csv"}
        data={props.header ? [props.header].concat(props.data) : props.data}
        className={props.className}
        variant={props.variant ? props.variant : "primary"}
        fileName={getPrettyFileName((props.fileName && props.fileName !== "") ? props.fileName : "data")}
    >
        {
            props.children
                ? props.children
                : <><span className={"me-2 bi-download"} /> <span>保存</span></>
        }
    </ExporterButton>

export default ExportControl;
