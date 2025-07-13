import {image} from "../types";
import {CSSProperties, ReactElement} from "react";

export type RecordUpdate = {
    datum: string | number
    row: number
    col: number
}

export type PictureGridProps = {
    images: Array<image>,
        size?: number,
        width?: number,
        height?: number,
        sm?: number,
        md?: number,
        lg?: number,
        xl?: number,
        xxl?: number,
        rounded?: boolean,
        roundedCircle?: boolean,
        thumbnail?: boolean,
        interactive?: boolean,
        // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
        onImageClick?: Function,
}

export type PictureProps = {
    image: image,
    rounded?: boolean,
    roundedCircle?: boolean,
    thumbnail?: boolean,
    interactive?: boolean,
    width?: number,
    height?: number,
    className?: string,
    // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
    onImageClick?: Function,
    bordered?: boolean
    in?: boolean,
}

export type PictureSliderProps = {
    images: Array<image>,
    height?: number,
    width?: number,
    captionStyle?: CSSProperties,
    // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
    onImageClick?: Function,
    captionBg?: string // caption background with #HHHHHH style
    in?: boolean,
}

export type PictureBadgeProps = {
    images: Array<image>,
    size?: number,
    width?: number,
    height?: number,
    thumbnail?: boolean,
    interactive?: boolean,
    center?: boolean
    // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
    onImageClick?: Function,
}

export type MessagePanelProps = {
    children?: ReactElement | string
    title: ReactElement | string
    subTitle: ReactElement | string
    icon?: string
    iconVariant?: string
    iconSize?: "sm" | "md" | "lg" | "xl"
    left?: boolean
    right?: boolean
    btn?: boolean
    btnMsg?: string
    className?: string
}


export type AccordionProps = {
    list: unknown,
    className?: string,
    children?: ReactElement | string
}
