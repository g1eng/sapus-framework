import React, { CSSProperties, useState } from "react"
import { Image } from "react-bootstrap";
import Pan from "../effects/Pan"
import { Link } from "react-router-dom";
import {PictureProps} from "./types";

/**
 * Picture is single picture display with pan effect.
 */
const Picture = (props: PictureProps) => {
    const [toggle, setToggle] = useState(false)
    const image = props.image
    const defaultStyle: CSSProperties = props.bordered !== undefined
        ? {
            border: "1px solid #dee2e6",
            transition: "transform 250ms, border 200ms, margin 200ms",
            cursor: props.interactive ? "pointer" : undefined
        } : {
            transition: "transform 250ms, border 200ms, margin 200ms",
            cursor: props.interactive ? "pointer" : undefined
        }
    const toggleStyle: CSSProperties = {
        border: "0.2rem solid #f0a050",
        margin: "-0.15rem",
        backgroundColor: "#f0a050",
        transition: "transform 250ms",
        transform: "scale(0.90)",
        cursor: "pointer"
    }

    const onClickFunc = props.interactive ? () => {
        setToggle(!toggle)
        if (props.onImageClick !== undefined) props.onImageClick(props.image)
    } : () => {
        if (props.onImageClick !== undefined) props.onImageClick(props.image)
    }

    return (
        <Pan in={props.in !== false} static horizontal>
            <>
                {image.link &&
                    <Link to={image.link}>
                        <Image
                            rounded={props.rounded}
                            roundedCircle={props.roundedCircle}
                            thumbnail={props.thumbnail}
                            className={`sapus-img ${props.className}`}
                            alt={image.name ? `${image.name}${typeof image.caption === "string" ? " " + image.caption : ""}` : "no alternative text"}
                            src={image.src}
                            width={props.width}
                            height={props.height}
                        />
                    </Link>

                }
                {image.link === undefined &&
                    <Image
                        rounded={props.rounded}
                        roundedCircle={props.roundedCircle}
                        thumbnail={props.thumbnail}
                        className={`${props.className}`}
                        alt={image.name ? `${image.name}${typeof image.caption === "string" ? " " + image.caption : ""}` : "no alternative text"}
                        src={image.src}
                        width={props.width}
                        height={props.height}
                        style={toggle ? toggleStyle : defaultStyle}
                        onClick={onClickFunc}
                    />
                }

            </>
        </Pan>


    )
}

export default Picture
