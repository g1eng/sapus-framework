import { SliderProps } from "./props";
/***
 * Slide represents slider element which visibility status can be controlled via `in` prop.
 * This JSX realizes simple slide-in-slide-out element with definitely simple control.
 *
 * Sliding direction is specified via boolean (left, right, up, down) and it's down by default.
 * CSS's top, left, bottom and right value can be controlled with the `style` property.
 */
declare const Slide: (props: SliderProps) => import("react/jsx-runtime").JSX.Element;
export default Slide;
