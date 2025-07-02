import {Meta, StoryObj} from '@storybook/react';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css"

import {Button} from "react-bootstrap";
import Slide from "../../components/effects/Slide";
import {useEffect, useState} from "react";
import * as React from "react";
import {SliderProps} from "../../components/effects/props";



/**
 * Slider is a simple slider mechanism to show or hide elements inside it.
 *
 * It can accept `slide` parameter to control slide-in direction.
 */
const SliderDemo = (props: SliderProps ) => {

    const [isShown, setIsShown] = useState(false)
    useEffect(() => {
        setIsShown(props.in)
    }, [props.in]);

    return (
        <div className="d-flex" style={{height: "10rem"}}>
            <Button className={"me-3 mt-5"} style={{height: "2.5rem"}} onClick={()=>{setIsShown(!isShown)}}>toggle</Button>
            <Slide in={isShown} slide={props.slide} distance={props.distance} >
                <div style={{
                    position: "relative",
                    width: "10rem",
                    height: "10rem",
                    justifyContent: "center",
                    alignItems: "center",
                    display: "flex",
                    borderRadius: "1.5rem",
                    backgroundColor: "#fb9",
                    color: "#fff"
                }}>
                    <h1>SHOWN</h1>
                </div>
            </Slide>
        </div>

    )
}

const meta = {
    title: 'Effect/Slider',
    component: SliderDemo,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof SliderDemo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SimpleSlider: Story = {
    args: {
        in: false,
        slide: "left",
        distance: 3
    }
};
