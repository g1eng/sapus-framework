import {Meta, StoryObj} from '@storybook/react';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css"
import MessagePanel from "../../components/representations/MessagePanel";

/**
 * MessagePanel is a simple notification panel with an icon.
 *
 */
const meta = {
    title: 'Replesentations/MessagePanel',
    component: MessagePanel,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof MessagePanel>;

export default meta;
type Story = StoryObj<typeof meta>;


export const SampleMessagePanel: Story = {
    args : {
        title: "CAUTION",
        subTitle: "Invalid operation",
        icon: "exclamation-triangle",
        left: true,
        iconVariant: "danger"
    }
};
