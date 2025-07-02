import React from "react";
import { Button } from "react-bootstrap";
import { IconControlProps } from "./props";
//@ts-ignore
import styles from "./IconControl.module.css"
import {Link} from "react-router";

/**
 * IconControl supplies simple rounded icon button for control usage.
 *
 * If the href attribute is specified, the button is treated as a link with react-dom.
 *
 */
const IconControl = (props: IconControlProps) => {
    const btnClass = `${styles["sapus-icon-btn"]} rounded-circle ` +
        (props.size ? styles[`sapus-icon-btn-${props.size}`] : "");
    const btnLabelClass = props.size ? `${styles[`sapus-btn-icon-label`]} ${styles[`sapus-icon-label-${props.size}`]}` : "";
    return (
        <div>
            {props.a || props.href ? <>
                <div
                    className={`${btnClass} text-center ${props.variant ? `bg-${props.variant} text-dark` : ""}`}
                >
                    <Link
                        to={{
                            pathname: props.href,
                        }}
                    >
                        <span
                            className={`bi-${props.icon ? props.icon : "box"}`}
                        />
                    </Link>
                </div>
                {props.label &&
                    <div style={{ fontWeight: "bold", position: "relative", top: "-1.5rem" }} className="text-center">{props.label}</div>
                }
            </> : <>
                <Button
                    variant={props.variant}
                    active={props.active}
                    style={props.style}
                    type={props.type}
                    disabled={props.disabled}
                    onClick={props.onClick}
                    as={props.as}
                    href={props.href}
                    target={props.target}
                    rel={props.rel}
                    className={btnClass}
                >
                    {
                        <span
                            style={props.label ? { position: "relative", top: "-0.5rem" } : {}}
                            className={`bi-${props.icon ? props.icon : "box"}`}
                        />

                    }
                    {props.children}
                </Button>
                {
                    props.label &&
                    <span
                        style={props.style}
                        className={btnLabelClass}
                    >
                        {props.label}
                    </span>
                }
            </>
            }
        </div>
    )
}

export default IconControl;
