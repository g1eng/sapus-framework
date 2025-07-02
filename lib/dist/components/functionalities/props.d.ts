import { ButtonProps } from "react-bootstrap";
export interface ExporterButtonProps extends ButtonProps {
    format: "csv" | "json";
    id: string;
    data: Object | Array<any>;
    fileName?: string;
    hook?: Function;
}
export interface ImporterButtonProps extends ButtonProps {
    format: "csv" | "json";
    id: string;
    msg?: string;
    hook?: Function;
}
