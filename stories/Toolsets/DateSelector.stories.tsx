import type { Meta, StoryObj } from '@storybook/react';
import DateSelector from "../../components/toolsets/DateSelector";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css"

const meta = {
    title: 'Toolsets/DateSelector',
    component: DateSelector,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof DateSelector>;

const now = new Date()
const theStartDayOfTheMonth = new Date(now.getFullYear(), now.getMonth(), 1)
const theEndDayOfTheMonth = new Date(now.getFullYear(), now.getMonth(), 31)

export default meta;
type Story = StoryObj<typeof meta>;

export const Single: Story = {
    args: {
        name: "due date",
        variant: "secondary",
        date: new Date(),
        minDate: theStartDayOfTheMonth,
        maxDate: theEndDayOfTheMonth,
    }
};
