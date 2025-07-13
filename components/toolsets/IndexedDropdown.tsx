import React, { ReactElement, useState } from "react"
import DropdownToggle from "react-bootstrap/DropdownToggle"
import { Button, ButtonGroup, Dropdown } from "react-bootstrap"
import { getBorderClass, getTextClass } from "../helpers"
import { IndexedDropdownProps } from "./props";

const IndexedDropdown = (props: IndexedDropdownProps) => {
    const targetIndex = props.index
    const getIndexValueByKey = (k: string) => targetIndex.list.get(k)
    const getIndexUnitByKey = (k: string) => targetIndex.unit ? targetIndex.unit.get(k) : ""

    //currentKey, currentValue and currentUnit are current visible tags for dropdown
    const [currentKey, setIndexKey] = useState(targetIndex.current)
    const [currentValue, setIndexValue] = useState(getIndexValueByKey(currentKey))
    const [currentUnit, setIndexUnit] = useState(targetIndex.unit ? getIndexUnitByKey(currentKey) : "")

    const isSide = props.right !== true && props.left !== true
    const selectorClass = (props.bg ? `bg-${props.bg} ` : "")
        + (props.text ? `text-${props.text}` : "")

    //generate each DropdownItem

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const getDropdownItem = (indexList: Map<any, any>) => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const domArray: Array<ReactElement<any, any>> = []

        Array.from(indexList.keys()).map((k) => domArray.push(
            <Dropdown.Item
                key={k}
                className={k === currentKey ? "" : selectorClass}
                active={k === currentKey}
                onClick={() => {
                    setIndexKey(k)
                    setIndexValue(getIndexValueByKey(k))
                    setIndexUnit(getIndexUnitByKey(k))
                }}
            >
                {k}
            </Dropdown.Item>
        ))
        return domArray
    }

    //generate dropdown content
    const GenerateDropdownContent = (props: IndexedDropdownProps) => {
        return (
            <Dropdown drop={props.drop} as={(!isSide || props.as) ? ButtonGroup : undefined}>
                <DropdownToggle
                    className={`btn-group ${getBorderClass(props.border)}`}
                    variant={props.variant}
                >
                    <span>
                        {currentKey}
                        <br />
                        {isSide &&
                            <span className={getTextClass(props.accent)}>
                                {`${currentValue} `}
                                {currentUnit}
                            </span>
                        }
                    </span>
                </DropdownToggle>
                <Dropdown.Menu className={selectorClass}>
                    {props.index.indexName &&
                        <Dropdown.Header>
                            {props.index.indexName}
                        </Dropdown.Header>
                    }
                    {getDropdownItem(targetIndex.list)}
                </Dropdown.Menu>
            </Dropdown>
        )

    }

    return (
        <>
            {isSide &&
                GenerateDropdownContent(props)
            }
            {props.left === true &&
                <ButtonGroup>
                    <Button variant={props.variant} className={getBorderClass(props.border)}>
                        <span className={getTextClass(props.accent)}>
                            {`${currentValue} `}
                            {currentUnit}
                        </span>
                    </Button>
                    {GenerateDropdownContent(props)}
                </ButtonGroup>
            }

            {props.right === true &&
                <ButtonGroup>
                    {GenerateDropdownContent(props)}
                    <Button variant={props.variant} className={getBorderClass(props.border)}>
                        <span className={getTextClass(props.accent)}>
                            {`${currentValue} `}
                            {currentUnit}
                        </span>
                    </Button>
                </ButtonGroup>
            }
        </>
    )

}

export default IndexedDropdown
