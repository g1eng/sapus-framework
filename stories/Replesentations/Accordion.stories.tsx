import {Meta, StoryObj} from '@storybook/react';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css"
import Accordion from "../../components/representations/Accordion";

/**
 * Accordion is an accordion builder with simplified API to generate accordion items with `list` property.
 *
 * It can accept text values or JSX elements from its list property and display them iteratively.
 */
const meta = {
    title: 'Replesentations/Accordion',
    component: Accordion,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;


export const AccordionForTextList: Story = {
    args : {
        list: ["some","apple","exist"],
        className: "p-2",
        children: (<h2>Accordion Header</h2>)
    }
};

export const AccordionForElementList: Story = {
    args : {
        list: [
            <h2 className={"p-2 m-0"} style={{backgroundColor: "#aaf"}}>Some</h2>,
            <h2 className={"p-2 m-0"}>Apple</h2>,
            <h2 className={"p-2 m-0"}> Exist</h2>],
        children: (<h2>Accordion Header</h2>)
    }
};

