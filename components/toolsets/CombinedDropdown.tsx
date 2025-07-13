import React ,{useState} from "react";
import {ButtonGroup} from "react-bootstrap"
// import "./CombinedDropdown.module.css"
import CategoryDropdown from "./CategoryDropdown";
import IndexedDropdown from "./IndexedDropdown";
import {CombinedDropdownProps} from "./props";

const CombinedIndexDropdown = (props: CombinedDropdownProps) => {
    const [targetIndex, setTargetIndex] = useState(props.category.current)
    return (
        <ButtonGroup>
            <>
                {
                    Array.from(props.indices.keys()).map((ind) => {
                        const index = props.indices.get(ind)
                        return (
                            index !== undefined && targetIndex === ind &&
                            <IndexedDropdown
                                key={ind}
                                index={index}
                                drop={props.drop}
                                variant={props.variant}
                                accent={props.accent}
                                bg={props.bg}
                                text={props.text}
                                right={props.right}
                                left={props.left}
                                border={props.border ? props.border : "dark"}
                                as={ButtonGroup}
                            />
                        )
                    })
                }
                {
                    <CategoryDropdown
                        category={props.category}
                        variant={props.variant}
                        bg={props.bg}
                        text={props.text}
                        border={props.border ? props.border : "dark"}
                        as={ButtonGroup}
                        hook={setTargetIndex}
                    />
                }
            </>
        </ButtonGroup>
    )
}

export default CombinedIndexDropdown
