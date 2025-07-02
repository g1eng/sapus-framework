import {Meta, StoryObj} from '@storybook/react';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css"
import MultiCategoryDropdown from "../../components/toolsets/MultiCategoryDropdown";
import { MultiCategoryDropdownProps } from '../../components/toolsets/props';


const MultiCategoryDropdownWrapper = (props: MultiCategoryDropdownProps) => {
    return <div style={{height: "20rem"}}>
        <MultiCategoryDropdown {...props} />
    </div>
}

const meta = {
    title: 'Toolsets/MultiCategoryDropdown',
    component: MultiCategoryDropdownWrapper,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof MultiCategoryDropdownWrapper>;

export default meta;
type Story = StoryObj<typeof meta>;


export const TransactionSelector: Story = {
    args: {
        variant: "outline-dark",
        width: ["6rem","15rem"],
        categories: [
            {
                current: "Fish",
                categoryName: "food category",
                list: ["Fish", "Meal", "Vegetable", "Milk", "Rice", "Bread"]
            },
            {
                current: "Super Market Maruetsu",
                categoryName: "client name",
                list: ["Super Market Maruetsu", "Yaoko Store", "Inageya", "Seibu Store", "Big-A", "MEGA Donki"]
            }
        ]
    }
};
