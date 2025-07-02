import {Meta, StoryObj} from '@storybook/react';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css"
import BadgedButton from "../../components/toolsets/BadgedButton";


const meta = {
    title: 'Toolsets/BadgedButton',
    component: BadgedButton,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof BadgedButton>;

export default meta;
type Story = StoryObj<typeof meta>;


export const NewsCount: Story = {
    args: {
        variant: "info",
        count: 15,
        accent: "light",
        children: (<>News</>)
    }
};
