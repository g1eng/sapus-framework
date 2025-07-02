import {Meta, StoryObj} from '@storybook/react';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css"

import {Button} from "react-bootstrap";
import {useEffect, useState} from "react";
import * as React from "react";
import {FadeProps} from "../../components/effects/props";
import Fade from "../../components/effects/Fade";



const FadeDemo = (props: FadeProps ) => {

    const [isShown, setIsShown] = useState(false)
    useEffect(() => {
        setIsShown(props.in)
    }, [props.in]);

    return (
        <div className="d-block">
            <Button className={"mb-3"} onClick={()=>{setIsShown(!isShown)}}>toggle</Button>
            <Fade {...props} in={isShown} >
                <div style={{
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
            </Fade>
        </div>

    )
}

/**
 * Fade is a simple fading mechanism to show or hide elements inside it.
 */
const meta = {
    title: 'Effect/Fade',
    component: FadeDemo,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof FadeDemo>;

export default meta;
type Story = StoryObj<typeof meta>;


export const defaultFading: Story = {
    args: {
        in: false,
        duration: 3000
    }
};

