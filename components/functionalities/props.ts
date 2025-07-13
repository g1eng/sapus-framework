import {ButtonProps} from "react-bootstrap";

export interface ExporterButtonProps extends ButtonProps {
    format: "csv" | "json",
    id: string,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-wrapper-object-types
    data: Object | Array<any>,
    fileName?: string,
    // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
    hook?: Function,
}

export interface ImporterButtonProps extends ButtonProps {
    format: "csv" | "json",
    id: string,
    msg?: string,
    // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
    hook?: Function,
}
