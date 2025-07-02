import { DropDirection } from "react-bootstrap/DropdownContext";
import {
    ChangeEventHandler,
    ComponentProps,
    CSSProperties,
    ElementType,
    MouseEventHandler
} from "react";
import { categories, controls, indexCategories } from "../types";
import {ButtonProps} from "react-bootstrap";

export interface DropdownProps {
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
    hook?: Function,
    /**
     * make the dropdown badge
     */
    badge?: boolean
}

export interface IndexedDropdownProps extends DropdownProps {
    index: indexCategories
    className?: string,
}

export interface CombinedDropdownProps extends DropdownProps {
    indices: Map<string, indexCategories>,
    className?: string,
    category: categories
}

export interface CategoryDropdownProps extends DropdownProps {
    category: categories,
    className?: string,
    noHeader?: boolean,
    width?: string,
}

export interface MultiCategoryDropdownProps extends DropdownProps {
    categories: Array<categories>,
    width?: Array<string>,
}

export interface FormControlProps extends ComponentProps<"input"> {
    name: string,
    type: string,
    value?: string | number,
    defaultValue?: string | number,
    className?: string,
    onChange?: ChangeEventHandler<HTMLInputElement>,
    onButtonClick?: MouseEventHandler,
    style?: CSSProperties,
    btnText?: string,
    left?: boolean,
    right?: boolean,
    placeholder?: string,
    variant?: string,
    icon?: string,
    hook?: Function,
}

export interface DateSelectorProps {
    /**
     * The name of the selector
     */
    name: string,
    /**
     * Background color variant
     */
    bg?: string,
    /**
     * border color variant
     */
    border?: string,
    /**
     * Additional class name for the inner elements
     */
    className?: string,
    /**
     * Initial date
     */
    date?: Date,
    /**
     * Minimal date to select
     */
    minDate?: Date,
    /**
     * Maximum date to select
     */
    maxDate?: Date,
    /**
     * Hook function which is fired at change
     */
    onChange?: Function,
    text?: string,
    /**
     * color variant for buttons
     */
    variant?: string,
    /**
     * hook function fired at change
     */
    hook?: Function,
    /**
     * range width
     */
    width?: string
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
    hook?: Function
    /**
     * Set a label for the control
     */
    label?: string
    /**
     * generate icon as an `a tag` to specify href attribute
     */
    href?: string
    /**
     * generate icon as an `a tag`, without href attr
     */
    a?: boolean
}

export interface IconToolboxProps extends IconControlProps {
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
    hook?: Function
}
