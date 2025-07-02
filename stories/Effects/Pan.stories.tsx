import {Meta, StoryObj} from '@storybook/react';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css"

import {Button} from "react-bootstrap";
import {useEffect, useState} from "react";
import * as React from "react";
import {PanProps} from "../../components/effects/props";
import Pan from "../../components/effects/Pan";



const PanDemo = (props: PanProps ) => {

    const [isShown, setIsShown] = useState(false)
    useEffect(() => {
        setIsShown(props.in)
    }, [props.in]);

    return (
        <div className="d-flex align-items-center" style={{height: "10rem"}}>
            <Button className={"me-3"} style={{height: "2.5rem"}} onClick={()=>{setIsShown(!isShown)}}>toggle</Button>
            <Pan in={isShown} static={props.static} >
                <div style={{
                    width: "10rem",
                    height: "10rem",
                    justifyContent: "center",
                    marginTop: "-4.5rem",
                    alignItems: "center",
                    display: "flex",
                    borderRadius: "1.5rem",
                    backgroundColor: "#fb9",
                    color: "#fff"
                }}>
                    <h1>SHOWN</h1>
                </div>
            </Pan>
        </div>

    )
}

/**
 * Pan is a simple panning mechanism to show or hide elements inside it.
 *
 * By default, any children components are given in absolute positioning.
 * If the `static` flag is given, the position will not be `absolute`.
 */
const meta = {
    title: 'Effect/Pan',
    component: PanDemo,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof PanDemo>;

export default meta;
type Story = StoryObj<typeof meta>;


export const defaultPanning: Story = {
    args: {
        in: false,
    }
};

export const StaticPanning: Story = {
    args: {
        in: false,
        static: true,
    }
};
