import { CSSProperties, ElementType, ReactElement } from "react";
import * as React from "react";
export interface SliderProps extends React.HTMLProps<"div"> {
    in: boolean;
    noAnimate?: boolean;
    duration?: number;
    slide?: "up" | "down" | "left" | "right";
    style?: CSSProperties;
    distance?: number;
    position?: string;
    children?: ReactElement;
}
export interface PanProps {
    in: boolean;
    duration?: number;
    vertical?: boolean;
    horizontal?: boolean;
    static?: boolean;
    children?: ReactElement;
}
export interface FadeProps {
    in: boolean;
    noAnimate?: boolean;
    duration?: number;
    children?: ReactElement;
    as?: ElementType;
}
