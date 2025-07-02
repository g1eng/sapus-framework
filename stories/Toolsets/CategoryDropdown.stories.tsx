import {Meta, StoryObj} from '@storybook/react';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css"
import CategoryDropdown from "../../components/toolsets/CategoryDropdown";
import { CategoryDropdownProps } from '../../components/toolsets/props';


const CategoryDropdownWrapper = (props: CategoryDropdownProps) => {
    return <div style={{height: "20rem"}}>
        <CategoryDropdown {...props} />
    </div>
}

const meta = {
    title: 'Toolsets/CategoryDropdown',
    component: CategoryDropdownWrapper,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof CategoryDropdownWrapper>;

export default meta;
type Story = StoryObj<typeof meta>;


export const ProductCategorySelector: Story = {
    args: {
        variant: "primary",
        accent: "warning",
        category: {
            current: "fish",
            categoryName: "food category",
            list: ["fish", "meal", "vegetable", "milk", "rice", "bread"]
        },
        width: "6.5rem",
    }
};
