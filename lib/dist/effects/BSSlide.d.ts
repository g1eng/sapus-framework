import { FadeProps } from "react-bootstrap";
import "./Effects.css";
interface VadeProps extends FadeProps {
    slide?: "up" | "down" | "left" | "right";
    distance?: string;
}
declare const BSSlide: (props: VadeProps) => import("react/jsx-runtime").JSX.Element;
export default BSSlide;
