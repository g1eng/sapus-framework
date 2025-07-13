import IconControl from "./IconControl";
import React, { ReactElement, useEffect, useState } from "react";
import {IconToolboxProps} from "./props";
//@ts-expect-error CSS loader should parse the line
import styles from "./IconToolbox.module.css"
import Slide from "../effects/Slide";
import {control, controls} from "../types";

/**
 * IconToolbox supplies a drawer for list of controls.
 *
 * It can accept icon and name list (of IconControlProps) inside the `list` parameter and can be nested
 * to specify one or more lists inside the `list` parameter.
 *
 * Items in list parameter is typed with `IconControlProps`. For more detail, see IconControl documentation.
 * @param props<IconToolboxProps>
 */
const IconToolbox = (props: IconToolboxProps) => {
    const [isOpen, setIsOpen] = useState(props.isOpen ? props.isOpen : false)
    const setClose = () => { setIsOpen(false) }
    const isVertical = props.slide !== "left" && props.slide !== "right"
    const iconSize = props.size
    const direction = props.slide ? props.slide : "up"
    const marginFactor = props.size === "lg" ? 3.5 : 3
    const subVariant = props.toolList.variant ? props.toolList.variant : props.variant ? props.variant : undefined
    const closeDuration = props.closeDuration ? props.closeDuration / 2 : 800
    const closeDistance = props.closeDistance ? props.closeDistance : 150
    const controlList = props.toolList.list
    const hasLabel = props.toolList.hasLabels === true

    const slideLeftMargin = direction === "left"
        ? `-${controlList.length * marginFactor + 0.25}rem`
        : "3rem"

    const ContentWrapper = (props: { children: ReactElement }) => (
        <>
            {isVertical && <div className={"my-1 me-1"}>{props.children}</div>}
            {!isVertical && <span className={"my-1 me-1"}>{props.children}</span>}
        </>
    )
    const FrameWrapper = (props: { children: ReactElement }) => (<>
        {isVertical && props.children}
        {!isVertical &&
            <div
                className={`d-flex flex-nowrap p-0`}
                style={{
                    marginBottom: `-4rem`,
                    marginLeft: slideLeftMargin
                }}
            >
                {props.children}
            </div>
        }
    </>)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const SpanLabel = (props: any) => (
        <span
            className={`${iconSize === "lg" ? `${styles.toolboxLabelLarge}` : `${styles.toolboxLabel}`}`}
            {...props}
        />
    )

    const trackScroll = () => {
        if(typeof window !== "undefined") {
            const initialY = window.scrollY
            if (!isOpen) return
            const checkScrollDistanceY = () => {
                if (!isOpen) {
                    return
                } else if (Math.abs(initialY - window.scrollY) > closeDistance) {
                    window.onscroll = () => {
                        setClose()
                        window.onscroll = null
                    }
                    return
                } else {
                    setTimeout(checkScrollDistanceY, closeDuration)
                }
            }
            checkScrollDistanceY()
        }
    }

    useEffect(() => {
        setIsOpen(props.isOpen === true)
    }, [props.isOpen])

    return (
        <div>
            {
                <Slide
                    in={isOpen}
                    slide={direction}
                    style={{
                        top: direction === "down" ? "-0.2rem" : direction === "up" ? "-5.2rem" : "-0.2rem",
                        marginTop: direction === "down" || direction === "up" ? undefined : 0,
                        bottom: direction !== "down" ? "0.5rem" : ""
                    }}
                    distance={3}
                    duration={180}
                >
                    <FrameWrapper>
                        <>{
                            controlList.map((c: control | controls) => {
                                let i = 1
                                return (
                                    ("list" in c)
                                        ? <IconToolbox
                                            icon={c.icon ? c.icon : "box"}
                                            key={c.name + `_${i++}`}
                                            toolList={c}
                                            className={"my-1 me-1"}
                                            variant={subVariant}
                                            slide={props.subSlide ? props.subSlide : isVertical ? "left" : "up"}
                                            showName={props.toolList.hasLabels}
                                            isOpen={isOpen ? undefined : false}
                                            size={iconSize}
                                            inner={true}
                                        />
                                        : <ContentWrapper key={`${c.name}_${i++}`}>
                                            <>
                                                <IconControl
                                                    icon={c.icon ? c.icon : "box"}
                                                    size={iconSize}
                                                    variant={subVariant}
                                                    href={c.link ? c.link : undefined}
                                                    onClick={c.hook}
                                                    a={c.link !== undefined}
                                                />
                                                <SpanLabel>
                                                    {hasLabel && c.name}
                                                </SpanLabel>
                                            </>
                                        </ContentWrapper>
                                )
                            })
                        }</>
                    </FrameWrapper>
                </Slide>
            }
            {
                <>
                    <IconControl
                        className={"sapus-icon-toolbox-switch"}
                        style={props.style}
                        icon={props.icon ? props.icon : props.toolList.icon ? props.toolList.icon : "box"}
                        onClick={() => {
                            // console.log(`tbx: `, props, `isOpen: ${!isOpen}`)
                            setIsOpen(!isOpen);
                            trackScroll();
                            if (props.hook)
                                props.hook();
                        }}
                        size={iconSize}
                        variant={isOpen ? "secondary" : props.variant}
                    />
                    <SpanLabel>
                        {props.showName && props.toolList.name}
                    </SpanLabel>
                </>
            }
        </div>
    )
}


export default IconToolbox;
