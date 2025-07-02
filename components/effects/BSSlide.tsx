import React from "react";
import {Fade, FadeProps} from "react-bootstrap";
import "./Effects.css"

interface VadeProps extends FadeProps {
    slide?: "up" | "down" | "left" | "right",
    distance?: string
}

const BSSlide = (props: VadeProps)=>{
    const direction = props.slide ? props.slide : "down"
    const transitionClassBase = `sapus-slide-${direction}`
    const className = props.className
        ? `${props.className} sapus-fade sapus-slide ` + (props.in ?  `${transitionClassBase}-enter-active` : `${transitionClassBase}-exit-done`)
        : `sapus-fade sapus-slide ${transitionClassBase} ` + (props.in ? `${transitionClassBase}-enter-active` : `${transitionClassBase}-exit-done` )
    const transitionClasses = props.transitionClasses ? props.transitionClasses : {
        enter: `${transitionClassBase}-enter`,
        entered: `${transitionClassBase}-entered`,
        entering: `${transitionClassBase}-entering`,
        exit: `${transitionClassBase}-exit`,
        exited: `${transitionClassBase}-exited`,
        exiting: `${transitionClassBase}-exiting`,
        exitActive: `${transitionClassBase}-exit-active`,
        exitDone: `${transitionClassBase}-exit-done`,
        appear: `${transitionClassBase}-appear`,
        appearActive: `${transitionClassBase}-appear-active`,
        appearDone: `${transitionClassBase}-appear-done`,
    }
    return (
        <Fade
            in={props.in}
            onEnter={props.onEnter}
            onEntering={props.onEntering}
            onEntered={props.onEntered}
            onExit={props.onExit}
            onExited={props.onExited}
            onExiting={props.onExiting}
            mountOnEnter={props.mountOnEnter}
            unmountOnExit={props.unmountOnExit}
            appear={props.appear}
            className={className}
            timeout={props.timeout}
            transitionClasses={transitionClasses}
        >
            {props.children}
        </Fade>
    )
}

export default BSSlide
