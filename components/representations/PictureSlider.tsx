import React from "react";
import { Carousel } from "react-bootstrap"
import Picture from "./Picture";
import Pan from "../effects/Pan";
import {PictureSliderProps} from "./types";

const  PictureSlider = (props: PictureSliderProps) => {
    const captionBg = props.captionBg ? props.captionBg : "#ffffff"

    let captionStyle = props.captionStyle ? props.captionStyle : {}
    captionStyle.background = captionBg ?
        `radial-gradient(${captionBg}ff, ${captionBg}00 75%, ${captionBg}00)` : captionStyle.background ?
            captionStyle.background : undefined

    return (
        <Pan in={props.in !== false} duration={250} horizontal static>
            <Carousel>
                {props.images.map((img) =>
                    <Carousel.Item key={img.id}>
                        <Picture
                            image={img}
                            className="d-block w-100"
                            height={props.height ? props.height : 300}
                            width={props.width ? props.width : undefined}
                            onImageClick={props.onImageClick}
                            in={true}
                        />
                        {img.caption &&
                            <Carousel.Caption style={props.captionStyle}>
                                {img.caption}
                            </Carousel.Caption>
                        }
                    </Carousel.Item>
                )}
            </Carousel>
        </Pan>
    )
}

export default PictureSlider
