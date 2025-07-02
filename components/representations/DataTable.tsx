import React, { ReactElement, useEffect, useState } from "react";
import { FormControl, Table } from "react-bootstrap";
import { DataSlice, DataTableProps } from "./props";
import IconControl from "../toolsets/IconControl";
import { getBgClass } from "../helpers";
// @ts-ignore
import styles from "./DataTable.module.css";
import "./shared.css";

interface DataHeaderProps {
    header: Array<ReactElement | string | number>,
    rowHeader?: Array<ReactElement | string | number>
}
const DataHeader = (props: DataHeaderProps) => {
    let colNum = 0
    return (
        <thead>
            <tr>
                {
                    props.rowHeader &&
                    <th />
                }
                {
                    props.header.map((h) => (
                        <th className={`text-nowrap ${styles.th}`} key={`th_${colNum++}`}>{h}</th>
                    ))
                }
            </tr>
        </thead>
    )
}

interface ModifiableDatumProps {
    id: string,
    datum: string | number,
    variant?: string,
    wrapper?: Function,
    dummy?: any
    //     hook: ActionCreatorWithPayload<RecordUpdate>
}

interface DataBodyProps {
    data: Array<DataSlice>,
    dataWrapper?: Array<Function | undefined>,
    omitZero?: boolean,
    rowHeader?: DataSlice,
    variant?: string,
}
const DataBody = (
    props: DataBodyProps
) => {
    let colIndex = 0, rowIndex = 0
    const [data, setData] = useState(props.data)
    const [activeRow, setActiveRow] = useState(-1)
    const [activeCol, setActiveCol] = useState(-1)

    useEffect(() => {
        setData(props.data)

    }, [props.data])
    const colLength: number = data.length !== 0 ? data[0].length : 0;

    const incrementCellRow = () => {
        setActiveRow(activeRow + 1)
    }
    const incrementCellCol = () => {
        setActiveCol(activeCol + 1)
        if (activeCol >= colLength - 1) {
            setActiveCol(0)
            incrementCellRow()
        }
    }
    const decrementCellCol = () => {
        setActiveCol(activeCol - 1)
        if (activeCol <= 0) {
            setActiveCol(colLength - 1)
            setActiveRow(activeRow - 1)
        }
    }

    const ModifiableDatum = (tdProps: ModifiableDatumProps) => {
        const [d, setD] = useState(tdProps.datum)

        // console.log("variant: ", tdProps.variant)
        const bgClass = getBgClass(tdProps.variant),
            textClass = bgClass ? (bgClass === "bg-dark" ? "text-light" : "text-dark") : "";

        return tdProps.id === `d-${activeRow}-${activeCol}` ? <>
            <td
                id={`t${tdProps.id}`}
                className={styles.tdActive}
            >
                <FormControl
                    id={tdProps.id}
                    type={"text"}
                    // @ts-ignore
                    value={d}
                    style={document.getElementById(`t${tdProps.id}`) ? {
                        //@ts-ignore
                        width: `calc(${document.getElementById(`t${tdProps.id}`).offsetWidth}px - ${(document.getElementById(`s${tdProps.id}`)?.innerText.length - d.toString().length) * 0.5}rem - 0.2rem)`,
                        height: `${document.getElementById(`t${tdProps.id}`)?.offsetHeight}px`,
                        //@ts-ignore
                        textAlign: parseFloat(d) > 0 || parseFloat(d) <= 0 ? "right" : "center",
                    } : undefined}
                    //@ts-ignore
                    className={`${bgClass} ${textClass} ${styles.formActive} ${setTimeout(() => { document.getElementById(tdProps.id).focus(); }, 10)}`}
                    autoFocus={true}
                    onInput={(e) => {
                        // @ts-ignore
                        setD(e.target.value)
                    }}
                    onKeyDown={(e) => {
                        // @ts-ignore
                        if (e.shiftKey && e.key === "Enter") {
                            // console.log("shift enter e", e)
                            setActiveRow(activeRow - 1)
                            // console.log(`row ${activeRow}, col ${activeCol}`)
                        } else if (e.key === "Enter") {
                            // console.log("enter e", e)
                            incrementCellRow()
                            // console.log(`row ${activeRow}, col ${activeCol}`)
                            // console.log(props.hook)
                        } else if (e.shiftKey && e.key === "Tab") {
                            // console.log("shift tab e", e)
                            decrementCellCol()
                            // console.log(`row ${activeRow}, col ${activeCol}`)
                        } else if (e.key === "Tab") {
                            // console.log("tab e", e)
                            incrementCellCol()
                            // console.log(`row ${activeRow}, col ${activeCol}`)
                        } else if (e.key === "Esc") {
                            setActiveRow(-1)
                            setActiveCol(-1)
                        }
                    }}
                />

                <span
                    id={`s${tdProps.id}`}
                    style={{ opacity: "0", background: "transparent" }}
                >
                    {
                        d &&
                            (tdProps.wrapper ? tdProps.wrapper(d) : d)
                    }
                    {
                        (d === 0 || d == "0") && props.omitZero ? "" : 0
                    }

                </span>
            </td>
        </>
            : <td
                id={`t${tdProps.id}`}
                className={styles.td}
                onClick={() => {
                    console.log(
                        tdProps.id.slice(2).slice(0, tdProps.id.indexOf("-") + 1),
                        tdProps.id.slice(2).slice(tdProps.id.indexOf("-") + 1)
                    )
                    setActiveRow(parseInt(tdProps.id.slice(2).slice(0, tdProps.id.indexOf("-") + 1)));
                    setActiveCol(parseInt(tdProps.id.slice(2).slice(tdProps.id.indexOf("-") + 1)));
                }}
            >
                <span
                    id={`s${tdProps.id}`}
                    className={styles.td}
                >
                    {
                        d ?
                            (tdProps.wrapper ? tdProps.wrapper(d) : d) :
                            (d === 0 || d == "0") && props.omitZero ?
                                "" :
                                (tdProps.wrapper ? tdProps.wrapper(d) : d)
                    }
                </span>
            </td>
    }

    return (
        <>
            {data.map((dList) => {
                colIndex = 0
                return (
                    <tr key={`trow_${rowIndex++}`}>
                        {
                            props.rowHeader && props.rowHeader.length > rowIndex && props.rowHeader[rowIndex] !== undefined &&
                            <th className="text-nowrap">
                                {props.rowHeader[rowIndex]}
                            </th>
                        }
                        {
                            dList.map((d) => (
                                <td className={styles.td} key={`td_${rowIndex}_${colIndex++}`}>
                                    {
                                        //@ts-ignore
                                        d && props.dataWrapper && props.dataWrapper[colIndex] !== undefined ? props.dataWrapper[colIndex](d) : (props.omitZero && (d == 0 || d == " 0") ? "" : d)
                                    }
                                </td>
                            ))
                        }
                    </tr>
                );
            }
            )}
        </>
    )
}

const getRevertedData = (data: Array<DataSlice>) => {
    let newData: Array<DataSlice> = []
    for (let i = 0; i < data[0].length; i++) newData.push([])

    data.forEach((dSlice) => {
        let i = 0
        dSlice.forEach((d) => {
            newData[i++].push(d)
        })
    })
    return newData
}

/**
 * DataTable supplies simple data representation layer with a table.
 */
const DataTable = (props: DataTableProps) => {
    const [data, setData] = useState(props.revert ? getRevertedData(props.data) : props.data)
    const header = props.revert ? props.rowHeader : props.header,
        rowHeader = props.revert ? props.header : props.rowHeader,
        dLength = data.length ? data[0].length : 0,
        isInteractive = props.interactive ? props.interactive : props.interactiveControl !== undefined

    // console.log("data:", data, "propsdata:", props.data)
    useEffect(() => {
        // console.log("data updated")
        setData(props.revert ? getRevertedData(props.data) : props.data)
    }, [props.data, props.revert])

    let tRowAdditional = [
        <></>
    ];

    return (
        <>
            <Table
                className={styles.table}
                variant={props.variant ? props.variant : "light"}
                striped={props.striped}
                bordered={props.bordered}
                borderless={props.borderless}
                hover={props.hover}
                size={props.size}
                responsive={props.responsive}
            >
                {
                    header &&
                    <DataHeader
                        header={header}
                        rowHeader={rowHeader}
                    />
                }

                <tbody>
                    <DataBody
                        data={data}
                        dataWrapper={props.dataWrapper}
                        rowHeader={rowHeader}
                        omitZero={props.omitZero}
                        variant={props.variant}
                    />
                </tbody>
            </Table >
            {
                (props.interactive || props.interactiveControl) &&
                <div className={"d-block w-100 transparent p-1 pb-2 bg-light"}>
                    <label className="d-flex justify-content-center">
                        {
                            header &&
                            <IconControl
                                size={"sm"}
                                icon={"plus"}
                                variant={"info"}
                                onClick={() => {
                                    let tmpData: Array<any> = [];
                                    for (let i = 0; i < header.length; i++)
                                        tmpData.push("");
                                    let now = new Date()
                                    let [y, m, d] = [now.getFullYear(), now.getMonth()+1, now.getDay()]
                                    tmpData[0] = `${y}-${m<10? `0${m}` : m}-${d<10? `0${d}` : d}`
                                    tmpData[tmpData.length - 1] = "0"
                                    //@ts-ignore
                                    props.addHook(tmpData)
                                }}
                            />
                        }
                    </label>
                </div>
            }
        </>
    )
}

export default DataTable
