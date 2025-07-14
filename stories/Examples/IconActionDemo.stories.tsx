import type { Meta, StoryObj } from '@storybook/react';
import IconControl from "../../components/toolsets/IconControl";
import IconToolbox from '../../components/toolsets/IconToolbox';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css"
import { simpleToolbox, toolboxContents } from '../fixtures/toolbox_data';
import { IconControlProps } from '../../components/toolsets/props';
import { useState } from 'react';
import { Fade } from 'react-bootstrap';
// import {Button} from "../Button";


const IconControlWrapper = (props: IconControlProps) => {
        const [isTapped, setTapped] = useState(false);
        let thisToolBox = simpleToolbox
        for (let i in [0,1,2]) {
            thisToolBox.list[i].hook=()=>{
                setTapped(!isTapped)
            }
        }
        return <div>
        <div className="d-flex justify-content-around" style={{width: "20rem"}} >
            <IconControl className='mx-2' icon='box-seam' size="lg" variant='primary' onClick={()=>{setTapped(!isTapped)}}/>
            <IconControl className='mx-2' icon='box2' size="lg" variant='info' onClick={()=>{setTapped(!isTapped)}}/>
            <IconControl className='mx-2' icon='person-walking' size="lg" variant='outline-success' onClick={()=>{setTapped(!isTapped)}}/>
            <IconControl className='mx-2' icon='envelope-check' size="lg" variant='warning' onClick={()=>{setTapped(!isTapped)}}/>
            <IconControl className='mx-2' icon='bug' size="lg" variant='danger' onClick={()=>{setTapped(!isTapped)}} />
        </div>
        <div className="ps-2 pt-3 d-flex justify-content-between">
            <IconToolbox size={"lg"} toolList={simpleToolbox} slide={"right"} variant='dark' />
            <div>
                <Fade in={isTapped} timeout={350}>
                    <div className='btn rounded bg-info mt-2 me-4 border-0'>
                        TAP!
                    </div>
                </Fade>
            </div>
        </div>
        </div>
}

const meta = {
    title: 'Implementation Examples/IconActionDemo',
    component: IconControlWrapper,
    parameters: {
        layout: 'centered',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
} satisfies Meta<typeof IconControlWrapper>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const IconActionDemo: Story = {
    args: {
    },
};
