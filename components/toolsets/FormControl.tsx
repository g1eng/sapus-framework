import React, { MouseEventHandler } from "react";
import { Button, InputGroup } from "react-bootstrap";
import {FormControlProps} from "./props";


const FormControl = (props: FormControlProps) => {
    const icon = props.icon
    const generateInputButton = (variant?: string, text?: string, onClick?: MouseEventHandler) =>
        <Button
            className={"input-group-text"}
            variant={variant}
            onClick={onClick}
        >
            <span className={icon}/>
            {
                text &&
                <span className="ms-2">
                    {text}
                </span>
            }
        </Button>
    const hasButton = props.btnText !== undefined || props.icon

    return (
        <InputGroup
            className={props.className}
            style={props.style}
        >
            {
                (hasButton && props.left) &&
                generateInputButton(props.variant, props.btnText, props.onButtonClick)
            }
            <input
                id={`search-console-${props.name}`}
                name={props.name}
                type={props.type}
                value={props.value}
                max={props.max}
                min={props.min}
                defaultValue={props.defaultValue}
                className="form-control"
                placeholder={props.placeholder}
                onChange={props.onChange}
            />
            {
                (hasButton && props.left === undefined) &&
                generateInputButton(props.variant, props.btnText, props.onButtonClick)
            }
        </InputGroup>


    )
}


export default FormControl
