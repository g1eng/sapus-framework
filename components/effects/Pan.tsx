import React  from "react";
import {PanProps} from "./props";

/***
 * Pan represents pan-able element with visibility status `in` prop.
 * Vertical, horizontal and rectangular panning are supported.
 */
const Pan = (props: PanProps) => {
    const duration = props.duration ? props.duration : 250

    const scaleFunc = props.horizontal !== undefined ? "scale(1,0.5) translate(0%,-50%)"
        : props.vertical !== undefined ? "scale(0.5,1) translate(-25%,-50%)" : "scale(0.5) translate(-25%,-50%)"

    const defaultStyle = {
        transition: `opacity ${duration}ms, transform ${duration}ms`,
        transform: scaleFunc,
        opacity: 0
    }

    const transitionStyles = props.in ? {
        transition: `opacity ${duration}ms, transform ${duration}ms`,
        transform: "scale(1) translate(0%,0%)",
        opacity: 1,
    } : defaultStyle

    return (
                <div
                    style={{
                        position: "relative",
                        ...defaultStyle,
                        ...transitionStyles
                    }}
                >
                    <div style={props.static ? {} : {position: "absolute"}}>
                        {props.children}
                    </div>
                </div>

    )
}

export default Pan
