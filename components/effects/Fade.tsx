import React from "react";
import {FadeProps} from "./props";

/***
 * Fade representa fadable element which is controlled via `in` prop.
 * duration can be specified in millisecond and the default duration is 150ms.
 */
const Fade = (props: FadeProps) => {
    const duration = props.duration ? props.duration : 150

    const defaultStyle = {
        transition: `opacity ${duration}ms, transform ${duration}ms`,
        opacity: 0
    }

    const transitionStyles = props.in ? {
        transition: `opacity ${duration}ms, transform ${duration}ms`,
        opacity: 1,
    } : defaultStyle

    return (
                <div
                    // @ts-ignore
                    style={{
                        ...defaultStyle,
                        ...transitionStyles
                    }}
                >
                    {props.children}
                </div>

    )
}

export default Fade
