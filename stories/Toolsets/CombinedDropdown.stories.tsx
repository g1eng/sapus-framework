
import {Meta, StoryObj} from '@storybook/react';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css"
import CombinedDropdown from "../../components/toolsets/CombinedDropdown";
import { CombinedDropdownProps } from '../../components/toolsets/props';
import { indexSelector, multiIndices, someIndices } from '../fixtures/category_data';


const CombinedDropdownWrapper = (props: CombinedDropdownProps) => {
    return <div style={{height: "20rem"}}>
        <CombinedDropdown {...props} />
    </div>
}

const meta = {
    title: 'Toolsets/CombinedDropdown',
    component: CombinedDropdownWrapper,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof CombinedDropdownWrapper>;

export default meta;
type Story = StoryObj<typeof meta>;


export const ProductCombinedSelector: Story = {
    args: {
        variant: "primary",
        accent: "warning",
        category: indexSelector,
        indices: multiIndices,
    }
};
