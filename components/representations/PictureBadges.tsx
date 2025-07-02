import React from "react";
import Picture from "./Picture"
import {PictureBadgeProps} from "./types";

const PictureBadges = (props: PictureBadgeProps) => {

    const imageWidth: number | undefined
        = props.size ? props.size : props.width ? props.width : undefined
    const imageHeight: number | undefined
        = props.size ? props.size : props.height ? props.height : undefined

    return (
        <div className={`d-flex flex-wrap ${props.center ? "justify-content-center" : ""}`}>
            {props.images.map((img) => {
                return (
                    <span
                        key={img.id}
                    >
                        <Picture
                            image={img}
                            width={imageWidth}
                            height={imageHeight}
                            roundedCircle={props.thumbnail ? undefined : true}
                            thumbnail={props.thumbnail}
                            className={(props.thumbnail) ? "p-0" : ""}
                            interactive={props.interactive}
                            onImageClick={props.onImageClick}
                            in={true}
                        />
                    </span>

                )
            })}
        </div>

    )
}

export default PictureBadges;
