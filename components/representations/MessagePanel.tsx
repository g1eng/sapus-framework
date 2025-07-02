import React  from "react"
// @ts-ignore
import styles from "./MessagePanel.module.css"
import IconControl from "../toolsets/IconControl"
import {MessagePanelProps} from "./types";

const MessagePanel = (props: MessagePanelProps) => <>
        <div className={`${styles.msgarea}`}>
            <div className={`d-flex justify-content-center align-items-center`}>
                {
                    props.left === true && props.icon &&
                    <>
                        {
                            props.btn === undefined &&
                            <span className={props.iconVariant ? `text-${props.iconVariant}` : ""}>
                                <div className={`${props.icon ? `bi-${props.icon}` : "bi-question"} ${props.iconSize === "xl" ? styles.hugesymbol : props.iconSize !== "sm" ? styles.bigsymbol : undefined}`} ></div>
                            </span>
                        }
                        {
                            props.btn !== undefined &&
                            <>
                                <IconControl
                                    icon={props.icon}
                                    //@ts-ignore
                                    size={props.iconSize ? props.iconSize : "md"}
                                    variant={props.iconVariant}
                                    label={props.btnMsg}
                                />
                            </>
                        }
                    </>
                }
                <div className="px-3">
                    <h3> {props.title} </h3>
                    {
                        props.subTitle ? <div className="text-center w-100"> {props.subTitle} </div> : <></>
                    }
                </div>
                {
                    props.left !== true && props.icon &&
                    <>
                        {
                            props.btn === undefined &&
                            <span className={props.iconVariant ? `text-${props.iconVariant}` : ""}>
                                <div className={`${props.icon ? `bi-${props.icon}` : "bi-question"} ${styles.hugesymbol}`} ></div>
                            </span>
                        }
                        {
                            props.btn !== undefined &&
                            <>
                                <IconControl
                                    icon={props.icon}
                                    //@ts-ignore
                                    size={props.iconSize ? props.iconSize : "md"}
                                    variant={props.iconVariant}
                                    label={props.btnMsg}
                                />
                            </>
                        }
                    </>
                }
            </div>
            {
                props.children &&
                <>
                    <hr style={{ borderStyle: "dashed" }} />
                    {props.children}
                </>

            }
        </div>
    </>

export default MessagePanel
