import React, { useState } from "react"
import { Dropdown } from "react-bootstrap"
import DropdownToggle from "react-bootstrap/DropdownToggle"
import { CategoryDropdownProps } from "./props";
import { getBgClass, getBorderClass, getTextClass } from "../helpers"

/**
 * CategoryDropdown is a simple selector for text values.
 * It is focused on the selection of a value from a set of word(s).
 */
const CategoryDropdown = (props: CategoryDropdownProps) => {
    const [current, setCurrentCategory] = useState(props.category.current)
    const selectorClass = `${getBgClass(props.bg)} ${getTextClass(props.text)} ${getBorderClass(props.border)}`
    const toggleClass = `btn-group ${getBorderClass(props.border)} ${props.badge ? "badge" : ""}`
    let i = 0;

    return (
        <Dropdown
            drop={props.drop} as={props.as}
        >
            <DropdownToggle
                className={`${toggleClass} ${props.className ? props.className : ""}`}
                style={props.width ? { width: props.width, justifyContent: "center" } : undefined}
                variant={props.variant}
            >
                <span>
                    {current}
                </span>
            </DropdownToggle>
            <Dropdown.Menu className={selectorClass}>
                {props.noHeader !== true && props.category.categoryName &&
                    <Dropdown.Header>
                        {props.category.categoryName}
                    </Dropdown.Header>
                }
                {props.category.list.map((item: string) =>
                    <Dropdown.Item
                        key={i++}
                        className={item === current ? "" : selectorClass}
                        active={item === current}
                        onClick={() => {
                            setCurrentCategory(item)
                            if (props.hook) props.hook(item)
                        }}
                    >
                        {item}
                    </Dropdown.Item>
                )}
            </Dropdown.Menu>
        </Dropdown>
    )
}

export default CategoryDropdown
