import type { Meta, StoryObj } from '@storybook/react';
import IconToolbox from "../../components/toolsets/IconToolbox";
import {toolboxContents} from "../fixtures/toolbox_data";
import {simpleToolbox} from "../fixtures/toolbox_data";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css"
import {IconToolboxProps} from "../../components/toolsets/props";
import {useState} from "react";

const IconToolboxDemo = (args: IconToolboxProps) =>{
    const [isOpen, setIsOpen] = useState(args.isOpen);
    return <>
        <div
            style={{
                width: "25rem",
                height: "25rem",
                backgroundColor: "#eee",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
        <IconToolbox {...args} isOpen={isOpen} />
        </div>
    </>
}

/**
 * IconToolbox provides the drawer experience for tool buttons.
 *
 * It can accept icon and name list (of IconControlProps) inside the `list` parameter and can be nested
 * to specify one or more lists inside the `list` parameter.
 */
const meta = {
    title: 'Toolsets/IconToolbox',
    component: IconToolboxDemo,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof IconToolboxDemo>;

export default meta;
type Story = StoryObj<typeof meta>;



export const SingleToolbox: Story = {
    args: {
        toolList: simpleToolbox,
        slide: "right",
    }
};

/**
 * Nested toolbox demo.
 *
 * This demo provides nested toolbox on `share` button, which contains github, twitter and facebook subcomponents.
 * (currently not compatible to the storybook environment)
 */
export const NestedToolbox: Story = {
    args: {
        toolList: toolboxContents,
        variant: "warning",
        slide: "down"
    }
};
