import React from "react"
import {ButtonGroup} from "react-bootstrap"
import CategoryDropdown from "./CategoryDropdown"
import {MultiCategoryDropdownProps} from "./props";

/**
 * MultiCategoryDropdown is the multiplied dropdown for the selection of two or more categories.
 *
 * It is focused to select combined set of two or more categories from preset category list.
 */
const MultiCategoryDropdown = (props: MultiCategoryDropdownProps) => {
    let i = 0

    return (
        <ButtonGroup>
            {props.categories.map((cat) =>
                <CategoryDropdown
                    key={i++}
                    category={cat}
                    drop={props.drop}
                    variant={props.variant}
                    bg={props.bg}
                    text={props.text}
                    border={props.border}
                    as={ButtonGroup}
                    //@ts-expect-error width is undefined
                    width={props.width[i]}
                />
            )}

        </ButtonGroup>
    )
}


export default MultiCategoryDropdown
