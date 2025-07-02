import React, { ReactElement } from "react"
import { Accordion as BSAccordion } from "react-bootstrap"
import AccordionBody from "react-bootstrap/esm/AccordionBody"
import AccordionHeader from "react-bootstrap/esm/AccordionHeader"
import AccordionItem from "react-bootstrap/esm/AccordionItem"
import {AccordionProps} from "./types";

// type accordionMetaData = categories | linkMetadata | Array<ReactElement | string>

const getAccordionBody = (item: any) => {
    let k = 0
    if (item.list !== undefined && typeof item.list.length === "number") {
        // category list
        return (
            <>
                <AccordionBody className={item.className}>
                    {
                        item.list.map((cat: string) => (
                            <AccordionItem key={k++} eventKey="e" className={item.className}>
                                {cat}
                            </AccordionItem>
                        ))
                    }
                </AccordionBody>
            </>
        )
    } else if (item.length) {
        //list of JSX or string
        return (
            <AccordionBody className={item.className}>
                {
                    item.map((el: ReactElement | string) => (
                        <AccordionItem key={k++} eventKey="e" className={item.className}>
                            {el}
                        </AccordionItem>
                    ))
                }
            </AccordionBody>
        )
    } else {
        return <></>
    }
}

const Accordion = (props: AccordionProps) => {
    return <BSAccordion className={props.className}>
        <AccordionHeader className={props.className}>
            {props.children}
        </AccordionHeader>
        {getAccordionBody(props)}
    </BSAccordion>
}

export default Accordion;
