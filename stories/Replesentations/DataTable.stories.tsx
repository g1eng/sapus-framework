import {Meta, StoryObj} from '@storybook/react';
import {plain_data, plain_header} from "../fixtures/dataset_data";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css"
import DataTable from "../../components/representations/DataTable";


const meta = {
    title: 'Replesentations/DataTable',
    component: DataTable,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof DataTable>;

export default meta;
type Story = StoryObj<typeof meta>;


export const SimpleData: Story = {
    args : {
        header: ["Product A","Product B","Product C","Service D","Service E"],
        data: plain_data,
        variant: "primary"
    }
};

export const SimpleDataWithoutHeader: Story = {
    args : {
        data: plain_data,
        variant: "warning"
    }
};

export const SimpleDataWithRowHeaderOnly: Story = {
    args : {
        rowHeader: ["Size S", "Size M", "Size L"],
        data: plain_data,
        variant: "info"
    }
};


export const SimpleDataWithHeaderReverted: Story = {
    args : {
        header: plain_header,
        data: plain_data,
        variant: "warning",
        revert: true
    }
};

export const SimpleDataWithRowColHeader: Story = {
    args : {
        header: [...([1, 2, 3, 4, 5].map((e) => "2021/11/" + e))],
        rowHeader: ["Size S", "Size M", "Size L"],
        data: plain_data,
        variant: "info"
    }
};

