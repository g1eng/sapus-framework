import { ButtonProps } from "react-bootstrap";
import { DataSlice } from "../representations/props";
import { ReactElement } from "react";
interface ImportControlProps extends ButtonProps {
    fileName: string;
    isImported: boolean;
    header: DataSlice;
    data: Array<DataSlice>;
    hook?: Function;
    children?: ReactElement | string;
}
export declare const ImportControl: (props: ImportControlProps) => import("react/jsx-runtime").JSX.Element;
export {};
