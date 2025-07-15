import {Meta, StoryObj} from '@storybook/react';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css"
import IndexedDropdown from "../../components/toolsets/IndexedDropdown";
import { IndexedDropdownProps } from '../../components/toolsets/props';
import { indexSelector, someIndices } from '../fixtures/category_data';


const IndexedDropdownWrapper = (props: IndexedDropdownProps) => {
    return <div style={{height: "20rem"}}>
        <IndexedDropdown {...props} />
    </div>
}

const meta = {
    title: 'Toolsets/IndexedDropdown',
    component: IndexedDropdownWrapper,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof IndexedDropdownWrapper>;

export default meta;
type Story = StoryObj<typeof meta>;


export const ProductIndexedSelector: Story = {
    args: {
        variant: "primary",
        accent: "warning",
        index: someIndices,
    }
};
