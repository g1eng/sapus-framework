import type { Meta, StoryObj } from '@storybook/react';
import FormControl from "../../components/toolsets/FormControl";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css"
// import {Button} from "../Button";


const meta = {
    title: 'Toolsets/FormControl',
    component: FormControl,
    parameters: {
        layout: 'centered',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
} satisfies Meta<typeof FormControl>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const StandardSearchInput: Story = {
    args: {
        btnText: "search",
        variant: "primary",
        name: "sample",
        placeholder: "Something favorite",
        type: "text"
    },
};

export const SearchConsoleWithIcon: Story = {
    args: {
        icon: "bi-search",
        left: true,
        variant: "secondary",
        name: "sample",
        placeholder: "ComponentProps",
        type: "text"
    },
};


export const ValueInput: Story = {
    args: {
        name: "quantity",
        type: "number",
        style: {

        },
        max: 50,
        min: 0,
        defaultValue: 10
    }
}

export const PhoneCall: Story = {
    args: {
        btnText: "+1",
        left: true,
        variant: "dark",
        name: "sample",
        defaultValue: "707-777-7777",
        style: {
            width: "12rem",
        },
        type: "phone"
    },
};
