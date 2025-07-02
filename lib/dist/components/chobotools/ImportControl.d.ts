import { ButtonProps } from "react-bootstrap";
import { ReactElement } from "react";
import { DataSlice } from "../representations/props";
interface ImportControlProps extends ButtonProps {
    fileName: string;
    isImported: boolean;
    header: DataSlice;
    data: Array<DataSlice>;
    hook?: Function;
    children?: ReactElement | string;
}
declare const ImportControl: (props: ImportControlProps) => import("react/jsx-runtime").JSX.Element;
export default ImportControl;
