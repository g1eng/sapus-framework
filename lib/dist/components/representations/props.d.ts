import { TableProps } from "react-bootstrap";
import { ComponentProps, ReactElement } from "react";
/**
 * DataSlice represents an array of data.
 * A data in sapus represents ReactElements, plain texts or numbers.
 */
export type DataSlice = Array<string | number>;
export interface DataTableProps extends TableProps {
    /**
     * Set data for the DataTable.
     * A data must be an Array of DataSlice (so an Array of Array of data)
     */
    data: Array<DataSlice>;
    /**
     * dataWrapper is a set of wrapper functions, applied to wrap data
     * elements in the table. Any function defined as a wrapper must
     * return JSX with an acceptable `chlidren` property.
     */
    dataWrapper?: Array<Function | undefined>;
    /**
     * Set table column header with DataSlice (array of data).
     */
    header?: DataSlice;
    /**
     * Set table row header with DataSlice (array of data).
     */
    rowHeader?: DataSlice;
    /**
     * Revert the column and the row for the table
     */
    revert?: boolean;
    /**
     * Enable interactive data modification
     */
    interactive?: boolean;
    /**
     * ignore 0 not to display
     */
    omitZero?: boolean;
    /**
     * Enable interactive data modification and specify control switch within React.Element
     */
    interactiveControl?: ReactElement;
    /**
     * resetFlag provides reset mechanism for the cursor of DataBody.
     * If the flag is set to true, the cursor is reset and the focus diactivated.
     */
    resetFlag?: boolean;
}
export interface ControlBarProps extends ComponentProps<"div"> {
    bg?: 'light' | 'dark';
    children: ReactElement;
    top?: boolean;
    bottom?: boolean;
    sticky?: boolean;
    center?: boolean;
    start?: boolean;
    end?: boolean;
    control?: ReactElement;
    expand?: "sm" | "md" | "lg";
}
