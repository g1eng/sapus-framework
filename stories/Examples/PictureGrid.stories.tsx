import {Meta, StoryObj} from '@storybook/react';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css"
//@ts-ignore
import I4274 from "../assets/picture_images/i4274.jpg"
//@ts-ignore
import I4276 from "../assets/picture_images/i4276.jpg"
//@ts-ignore
import I4280 from "../assets/picture_images/i4280.jpg"
//@ts-ignore
import I4282 from "../assets/picture_images/i4282.jpg"
//@ts-ignore
import I4289 from "../assets/picture_images/i4289.jpg"
//@ts-ignore
import I4296 from "../assets/picture_images/i4296.jpg"
//@ts-ignore
import I4297 from "../assets/picture_images/i4297.jpg"
//@ts-ignore
import I4307 from "../assets/picture_images/i4307.jpg"
//@ts-ignore
import I4309 from "../assets/picture_images/i4309.jpg"
//@ts-ignore
import I4317 from "../assets/picture_images/i4317.jpg"
//@ts-ignore
import I4393 from "../assets/picture_images/i4393.jpg"
//@ts-ignore
import I4394 from "../assets/picture_images/i4394.jpg"
//@ts-ignore
import I4419 from "../assets/picture_images/i4419.jpg"
//@ts-ignore
import I4420 from "../assets/picture_images/i4420.jpg"
//@ts-ignore
import I4428 from "../assets/picture_images/i4428.jpg"
//@ts-ignore
import I4429 from "../assets/picture_images/i4429.jpg"
//@ts-ignore
import I4447 from "../assets/picture_images/i4447.jpg"
//@ts-ignore
import I4454 from "../assets/picture_images/i4454.jpg"
//@ts-ignore
import I4461 from "../assets/picture_images/i4461.jpg"
//@ts-ignore
import I4462 from "../assets/picture_images/i4462.jpg"
//@ts-ignore
import I4463 from "../assets/picture_images/i4463.jpg"
//@ts-ignore
import I4469 from "../assets/picture_images/i4469.jpg"
//@ts-ignore
import I4481 from "../assets/picture_images/i4481.jpg"
//@ts-ignore
import I4677 from "../assets/picture_images/i4677.jpg"
//@ts-ignore
import I4682 from "../assets/picture_images/i4682.jpg"
//@ts-ignore
import I4683 from "../assets/picture_images/i4683.jpg"
//@ts-ignore
import I4689 from "../assets/picture_images/i4689.jpg"
//@ts-ignore
import I4696 from "../assets/picture_images/i4696.jpg"
//@ts-ignore
import I4699 from "../assets/picture_images/i4699.jpg"
//@ts-ignore
import I4701 from "../assets/picture_images/i4701.jpg"
//@ts-ignore
import I4707 from "../assets/picture_images/i4707.jpg"
//@ts-ignore
import I4708 from "../assets/picture_images/i4708.jpg"
//@ts-ignore
import I4709 from "../assets/picture_images/i4709.jpg"
//@ts-ignore
import I4710 from "../assets/picture_images/i4710.jpg"
//@ts-ignore
import I4711 from "../assets/picture_images/i4711.jpg"
//@ts-ignore
import I4712 from "../assets/picture_images/i4712.jpg"
//@ts-ignore
import I4717 from "../assets/picture_images/i4717.jpg"
//@ts-ignore
import I4728 from "../assets/picture_images/i4728.jpg"
//@ts-ignore
import I4729 from "../assets/picture_images/i4729.jpg"
//@ts-ignore
import I4735 from "../assets/picture_images/i4735.jpg"
//@ts-ignore
import I4738 from "../assets/picture_images/i4738.jpg"
//@ts-ignore
import I4748 from "../assets/picture_images/i4748.jpg"
//@ts-ignore
import I4749 from "../assets/picture_images/i4749.jpg"
//@ts-ignore
import I4750 from "../assets/picture_images/i4750.jpg"
//@ts-ignore
import I4752 from "../assets/picture_images/i4752.jpg"
import {Button, Col, Container, Image, ImageProps, Row} from "react-bootstrap";
import {CSSProperties, useState} from "react";
import ControlBar from "../../components/representations/ControlBar";


const InteractiveImage = (props: ImageProps) => {
    const [toggle, setToggle] = useState(false);
    const defaultStyle: CSSProperties = {
        transition: "transform 250ms, border 200ms, margin 200ms",
        cursor: "pointer"
    }
    const toggleStyle: CSSProperties = {
        border: "0.2rem solid #f0a050",
        margin: "-0.15rem",
        backgroundColor: "#f0a050",
        transition: "transform 250ms",
        transform: "scale(0.90)",
        cursor: "pointer"
    }
    return <Image
        rounded={true}
        src={props.src}
        style={toggle ? toggleStyle : defaultStyle}
        onClick={()=>{
            if (typeof props.onClick === "function") {
                //@ts-ignore
                props.onClick()
            }
            setToggle(!toggle)
        }}
    />
}

/**
 * PictureGrid is the picture tile built with Picture.
 *
 * It generates picture tile from the provided image object list.
 */
const PictureGridDemo = () => {
    let i = 0
    let images =  [
        {"src": I4274, "link": I4274},
        {"src": I4276, "link": I4276},
        {"src": I4280, "link": I4280},
        {"src": I4282, "link": I4282},
        {"src": I4289, "link": I4289},
        {"src": I4296, "link": I4296},
        {"src": I4297, "link": I4297},
        {"src": I4307, "link": I4307},
        {"src": I4309, "link": I4309},
        {"src": I4317, "link": I4317},
        {"src": I4393, "link": I4393},
        {"src": I4394, "link": I4394},
        {"src": I4419, "link": I4419},
        {"src": I4420, "link": I4420},
        {"src": I4428, "link": I4428},
        {"src": I4429, "link": I4429},
        {"src": I4447, "link": I4447},
        {"src": I4454, "link": I4454},
        {"src": I4461, "link": I4461},
        {"src": I4462, "link": I4462},
        {"src": I4463, "link": I4463},
        {"src": I4469, "link": I4469},
        {"src": I4481, "link": I4481},
        {"src": I4677, "link": I4677},
        {"src": I4682, "link": I4682},
        {"src": I4683, "link": I4683},
        {"src": I4689, "link": I4689},
        {"src": I4696, "link": I4696},
        {"src": I4699, "link": I4699},
        {"src": I4701, "link": I4701},
        {"src": I4707, "link": I4707},
        {"src": I4708, "link": I4708},
        {"src": I4709, "link": I4709},
        {"src": I4710, "link": I4710},
        {"src": I4711, "link": I4711},
        {"src": I4712, "link": I4712},
        {"src": I4717, "link": I4717},
        {"src": I4728, "link": I4728},
        {"src": I4729, "link": I4729},
        {"src": I4735, "link": I4735},
        {"src": I4738, "link": I4738},
        {"src": I4748, "link": I4748},
        {"src": I4749, "link": I4749},
        {"src": I4750, "link": I4750},
        {"src": I4752, "link": I4752}
    ]

    const [selectedPictures, setSelectedPictures] = useState(new Map())
    const [count, setCount] = useState(0)

    return (
        <>
        <h2 className={"text-center pb-2"}>🌴Our Summer Album🌞</h2>
        <Container
            fluid
            className="p-3 rounded-5 d-flex justify-content-center"
            style={{
                backgroundColor: "#e0f5ff"
            }}
        >
            {
                <Row
                    className="justify-content-start"
                    style={{
                        width: "95%",
                    }}
                    md={1}
                >
                    {images.map((img) =>
                        <div
                            key={i++}
                            className="p-0 m-0 col"
                            style={{
                                flex: "0 0 0"
                            }}
                        >
                                <InteractiveImage {...img} onClick={()=>{
                                    if(selectedPictures.has(img.src)) {
                                        let s = new Map(selectedPictures)
                                        s.delete(img.src)
                                        setSelectedPictures(s)
                                        setCount(s.size)
                                        console.log("deleted")
                                    } else {
                                        let s = new Map(selectedPictures)
                                        s.set(img.src, true)
                                        setSelectedPictures(s)
                                        setCount(s.size)
                                        console.log("added")
                                    }
                                }}/>
                        </div>
                    )}
                </Row>
            }
        </Container>
            <ControlBar bottom end>
                <div
                    className="d-flex bg-dark border-dark rounded mx-2 align-items-center justify-content-between"
                    style={{
                        width: "8rem",
                        opacity: "0.90"
                    }}
                >
                    <div className="mx-2 text-white">Selected</div>
                    <div>
                        <Button
                            variant="warning"
                            size="lg"
                            style={{
                                width: "3.5rem",
                            }}
                        >
                            {count}
                        </Button>
                    </div>
                </div>
            </ControlBar>

        </>

    )
}

const meta = {
    title: 'Implementation Examples/PictureGrid',
    component: PictureGridDemo,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof PictureGridDemo>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * This is a picture grid implementation example.
 * The original `PictureGrid` is not compatible to the Storybook environment, so it is reimplemented with Picture for this demo.
 *
 */
export const SamplePictureGrid: Story = {
    args: {
    }
};
