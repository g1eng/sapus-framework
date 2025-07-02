import React from "react";
import "./ControlBar.module.css"
import {ControlBarProps} from "./props";

/**
 * ControlBar implements a float tooltip for the page control on top or bottom of corner of the page.
 *
 * You can specify inner element to hold on the tooltip within `children` prop.
 */
const ControlBar = (props: ControlBarProps) => {
    const contentPosition = props.center ? "center" 
        : props.start ? "start" 
        : props.end ? "end" : undefined
    const fixedPosition = props.bottom ? "bottom" : "top"
    const positionClass = contentPosition ? `justify-content-${contentPosition}` : undefined
    const className = `nav navbar navbar-expand-md d-flex fixed-${fixedPosition} ${positionClass} ${props.className}`
    return (
        <div style={{ pointerEvents: "none"}}>
            {
                props.children &&
                <div className={`sapus-controlbar-children w-100 ${className}`}>
                    {props.children}
                </div>
            }
        </div>

    )
}

export default ControlBar;
