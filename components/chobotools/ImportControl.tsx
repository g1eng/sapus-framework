import { Badge, Button, ButtonGroup, ButtonProps } from "react-bootstrap";
import React, { ReactElement } from "react";
import {DataSlice} from "../representations/props";
import ImporterButton from "../functionalities/DataImporter";

interface ImportControlProps extends ButtonProps {
    fileName: string,
    isImported: boolean,
    header: DataSlice,
    data: Array<DataSlice>,
    hook?: Function
    children?: ReactElement | string
}


const ImportControl = (props: ImportControlProps) => {
    return <div>
        {
            props.isImported &&
            <>
                <ButtonGroup className={"mx-2"}>
                    <Badge
                        className={"badge bg-light text-dark btn btn-outline-warning"}
                    >
                        <b>ファイル名</b>
                    </Badge>
                    <Button
                        className={"badge text-dark"}
                        variant={"warning"}
                    >
                        {props.fileName}
                    </Button>
                </ButtonGroup>
                <ButtonGroup className={"ms-2 me-4"}>
                    <Badge
                        className={"badge bg-light text-dark btn btn-outline-primary"}
                    >
                        <b>レコード総数</b>
                    </Badge>
                    <Button
                        className={"badge"}
                        variant={"primary"}
                    >
                        {props.data.length}
                    </Button>
                </ButtonGroup>
            </>
        }
        {
            !props.isImported &&
            <ButtonGroup>
                <ImporterButton
                    id={props.id ? props.id : "data-importer"}
                    className={props.className}
                    format={"csv"}
                    variant={props.variant ? props.variant : "info"}
                    hook={props.hook}
                >
                    <>
                        {
                            props.children ? props.children : <>
                                <span className={"bi-upload me-2"} />
                                <span>データ注入</span>
                            </>
                        }
                    </>
                </ImporterButton>
            </ButtonGroup>
        }
        {/*{*/}
        {/*    props.isImported &&*/}
        {/*    <Sapus.ExporterButton*/}
        {/*        format={"csv"}*/}
        {/*        id={"shiwake-exporter"}*/}
        {/*        data={[props.header].concat(props.data)}*/}
        {/*        fileName={getPrettyFileName(props.fileName)}*/}
        {/*        variant={props.variant ? props.variant :"info"}*/}
        {/*    >*/}
        {/*        <span className={"bi-download me-2"} />*/}
        {/*        <span>データ保存</span>*/}
        {/*    </Sapus.ExporterButton>*/}
        {/*}*/}

    </div>
}


export default ImportControl;
