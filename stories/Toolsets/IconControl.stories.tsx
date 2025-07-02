import type { Meta, StoryObj } from '@storybook/react';
import IconControl from "../../components/toolsets/IconControl";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css"
// import {Button} from "../Button";


const IconControlWrapper = (props: any) => {
    if (props.duplicated) {
        return <div className="d-flex justify-content-around" style={{width: "20rem"}}>
            <IconControl className='mx-2' icon='box-seam' size="lg" variant='primary' />
            <IconControl className='mx-2' icon='box2' size="lg" variant='info' />
            <IconControl className='mx-2' icon='person-walking' size="lg" variant='outline-success' />
            <IconControl className='mx-2' icon='envelope-check' size="lg" variant='warning' />
            <IconControl className='mx-2' icon='bug' size="lg" variant='danger' />
        </div>
    } else {
        return <IconControl {...props} />
    }
}

const meta = {
    title: 'Toolsets/IconControl',
    component: IconControl,
    parameters: {
        layout: 'centered',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
} satisfies Meta<typeof IconControl>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const SearchButton: Story = {
    args: {
        icon: "search",
        variant: "primary"
    },
};

export const DisabledCloudButton: Story = {
    args: {
        icon: "cloud",
        variant: "secondary",
        disabled: true,
    },
};

export const LargeButton: Story = {
    args: {
        size: 'lg',
        variant: "warning",
    },
};

export const SmallButton: Story = {
    args: {
        size: 'sm',
    },
};