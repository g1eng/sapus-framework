import { ButtonProps } from "react-bootstrap";
import { DataSlice } from "../representations/props";
interface ExportControlProps extends ButtonProps {
    header?: DataSlice;
    data: Array<DataSlice>;
    fileName?: string;
}
declare const ExportControl: (props: ExportControlProps) => import("react/jsx-runtime").JSX.Element;
export default ExportControl;
