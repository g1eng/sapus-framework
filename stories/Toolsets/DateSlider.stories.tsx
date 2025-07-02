import type { Meta, StoryObj } from '@storybook/react';
import DateSlider from "../../components/toolsets/DateSlider";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css"

const meta = {
    title: 'Toolsets/DateSlider',
    component: DateSlider,
    parameters: {
        layout: 'centered',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
} satisfies Meta<typeof DateSlider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Single: Story = {
    args: {
        name: "due date",
        variant: "dark",
        date: new Date(),
        width: "10rem"
    }
};
