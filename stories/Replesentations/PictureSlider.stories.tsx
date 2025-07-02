import {Meta, StoryObj} from '@storybook/react';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css"
import PictureSlider from "../../components/representations/PictureSlider";
//@ts-ignore
import I4274 from "../assets/picture_images/i4274.jpg"
//@ts-ignore
import I4276 from "../assets/picture_images/i4276.jpg"
//@ts-ignore
import I4280 from "../assets/picture_images/i4280.jpg"

import {PictureSliderProps} from "../../components/representations/types";


/**
 * PictureSlider is a carousel implementation built with `Picture`.
 *
 * At now, it is not compatible to the storybook environment.
 */
const meta = {
    title: 'Replesentations/PictureSlider',
    component: PictureSlider,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof PictureSlider>;

export default meta;
type Story = StoryObj<typeof meta>;


export const SamplePictureSlider: Story = {
    args : {
        images: [
            {id: 4274, type: "jpg", src:I4274, link:I4274},
            {id: 4276, type: "jpg", src:I4276, link:I4276},
            {id: 4280, type: "jpg", src:I4280, link:I4280}
        ]
    }
};
