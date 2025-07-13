import {DropDirection} from "react-bootstrap/DropdownContext";
import {ChangeEventHandler, ElementType, MouseEventHandler} from "react";
import {categories, controls, indexCategories} from "./types";
import {ButtonProps} from "react-bootstrap";

export interface dropdownProps {
    /**
     * dropdown direction to show options
     */
    drop?: DropDirection,
    /**
     * button variant with bootstrap color classes (e.g. primary)
     */
    variant?: string,
    /**
     * accent color variant for bootstrap color classes (e.g. primary)
     */
    accent?: string,
    /**
     * background color variant for bootstrap color classes (e.g. primary)
     */
    bg?: string,
    /**
     * text color variant for bootstrap color classes (e.g. primary)
     */
    text?: string,
    /**
     * force dropdown direction to align right for options.
     * (this is prior to drop prop)
     */
    right?: boolean,
    /**
     * force dropdown direction to align left for options.
     * (this is prior to drop prop)
     */
    left?: boolean,
    /**
     * border color variant for bootstrap color classes (e.g. primary)
     */
    border?: string,
    as?: ElementType,
    /**
     * hook function which fires at a click
     */
    // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
    hook?: Function,
}

export interface indexedDropdownProps extends dropdownProps {
    index: indexCategories
}

export interface combinedDropdownProps extends dropdownProps {
    indices: Map<string, indexCategories>,
    category: categories
}

export interface categoryDropdownProps extends dropdownProps {
    category: categories,
    noHeader?: boolean,
}

export interface multiCategoryDropdownProps extends dropdownProps {
    categories: Array<categories>,
}

export interface formControlProps {
    name: string,
    type: string,
    value?: string,
    className?: string,
    onChange?: ChangeEventHandler,
    onButtonClick?: MouseEventHandler,
    btnText?: string,
    left?: boolean,
    right?: boolean,
    placeholder?: string,
    variant?: string,
    icon?: string,
    // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
    hook?: Function,
}

export interface dateSelectorProps {
    name: string,
    bg?: string,
    border?: string,
    className?: string,
    date?: Date,
    minDate?: Date,
    maxDate?: Date,
    // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
    onChange?: Function,
    text?: string,
    variant?: string,
    // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
    hook?: Function,
}


export interface IconControlProps extends ButtonProps {
    /**
     * Set icon name for the control.
     * Any name should be specified in bootstrap-icons, nevertheless it has nothing to display without button body itself.
     * By default, box icon is displayed.
     */
    icon?: string,
    /**
     * Set the color variant for the button. A bootstrap variant should be specified.
     */
    variant?: string,
    /**
     * Displays icon in small size
     */
    sm?: boolean,
    /**
     * Displays icon in large size
     */
    lg?: boolean,
    /**
     * Displays icon in extreme large size
     */
    xl?: boolean,
    /**
     * Set a hook function which fires at a click/tap
     */
    // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
    hook?: Function
}

export interface iconToolboxProps extends IconControlProps {
    /**
     * Specify the controls in A/O. All control is contained in the toolbox.
     */
    toolList: controls,
    /**
     * Specify slide direction for the toolbox.
     */
    slide?: "up" | "down" | "left" | "right",
    /**
     * Specify slide direction for the sub-toolbox (toolboxes in the toolbox).
     */
    subSlide?: "up" | "down" | "left" | "right",
    /**
     * (internal) Whether the toolbox is sub-toolbox or not.
     */
    inner?: boolean,
    /**
     * Show label or not for the main toolbox button
     */
    showName?: boolean,
    /**
     * Set the scroll boundary for auto-closing action
     */
    closeDistance?: number,
    /**
     * Set the time boundary in milliseconds for auto-closing action
     */
    closeDuration?: number,
    /**
     * Set the color variant for toolbox contents.
     * This property overrides parent variant for sub-toolbox.
     */
    variant?: string,
    /**
     * Whether the toolbox is open or not
     */
    isOpen?: boolean,
    /**
     * Set hook function firing at a click/tap
     */
    // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
    hook?: Function
}
