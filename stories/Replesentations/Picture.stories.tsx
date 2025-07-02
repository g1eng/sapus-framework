import {Meta, StoryObj} from '@storybook/react';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css"
import Picture from "../../components/representations/Picture";
//@ts-ignore
import Img from "../assets/picture_images/i4274.jpg";
//@ts-ignore
import Img2 from "../assets/picture_images/i4276.jpg";

const meta = {
    title: 'Replesentations/Picture',
    component: Picture,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Picture>;

export default meta;
type Story = StoryObj<typeof meta>;


export const SinglePicture: Story = {
    args : {
        image: {
            id: 101,
            src: Img,
            type: "jpg",
            name: "sample image",
            caption: (<>caption ok</>),
        },
        in: true
    }
};

export const InteractivePicture: Story = {
    args : {
        image: {
            id: 103,
            src: Img2,
            type: "jpg",
            name: "sample image",
            caption: (<>caption ok</>),
        },
        in: true,
        interactive: true,
    }
};
