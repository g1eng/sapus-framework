import React, {CSSProperties} from "react";
import {SliderProps} from "./props";

/***
 * Slide represents slider element which visibility status can be controlled via `in` prop.
 * This JSX realizes simple slide-in-slide-out element with definitely simple control.
 *
 * Sliding direction is specified via boolean (left, right, up, down) and it's down by default.
 * CSS's top, left, bottom and right value can be controlled with the `style` property.
 */
const Slide = (props: SliderProps) => {
    const duration = props.duration ? props.duration : 250
    const xDistance = props.distance ? props.distance : 0.5
    const yDistance = props.distance ? props.distance : 3

    const hasNoHorizontalDirection = !(props.slide === "right" || props.slide === "left")

    const xPosition = props.slide === "right" ?  -xDistance
        : props.slide === "left" ? xDistance : 0
    const yPosition = props.slide === "up" ? -yDistance
        : props.slide === "down" ? yDistance
            : hasNoHorizontalDirection ? -yDistance
                : props.slide == "right" || props.slide === "left" ?  0 : yDistance


    const transitionStyles = props.in ? {
        transition: `top ${duration}ms 0 ease-in, left ${duration}ms 0 ease-in, right ${duration}ms 0 ease-in, bottom ${duration}ms 0 ease-in, opacity ${duration}ms ${duration*1.5}ms ease-in,  display ${duration}ms ease-in`,
        top: `${yPosition}rem`,
        left: 0,
        opacity: 1,
    } : {
        transition: `top ${duration}ms ease-in, left ${duration}ms ease-in, right ${duration}ms ease-in, bottom ${duration}ms ease-in, opacity ${duration}ms ease-in, display ${duration}ms ease-in`,
        top: 0,
        left: `${xPosition}rem`,
        pointerEvents: 'none',
        opacity: 0,
    }

    const position: CSSProperties = {
        // @ts-ignore
        position: props.position ? props.position : "absolute",
    }

    return (
                <div
                    //@ts-ignore
                    style={{
                        position: "relative",
                        ...transitionStyles,
                    }}
                >
                    <div style={{
                        ...position,
                        ...props.style,
                    }}>
                        {props.children}
                    </div>
                </div>

    )
}

export default Slide
