import {Meta, StoryObj} from '@storybook/react';
import {plain_data, plain_header} from "../fixtures/dataset_data";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css"
import {useState} from "react";
import DataTable from "../../components/representations/DataTable";
import {Button, ButtonGroup} from "react-bootstrap";
import ExporterButton from "../../components/functionalities/DataExporter";
import ImporterButton from "../../components/functionalities/DataImporter";
import {DataTableProps} from "../../components/representations/props";

/**
 * This demo provides table implementation which data is importable/exportable with
 * control button.
 *
 * Any csv data are importable with the `Import` button. and displayed data are exportable
 * with `Export` button.
 */
const DataTableDemo = (args: DataTableProps)=>{
    const [data, setData] = useState(plain_data);
    const [isImported, setIsImported] = useState(false)
    const [importedFileName, setImportedFileName] = useState("")
    return <>
        <DataTable
            data={data}
            header={args.header}
            rowHeader={args.rowHeader}
            revert={args.revert}
            variant={args.variant}
        />
        <div className="d-flex justify-content-end">
            {
                importedFileName !== "" &&
                <span className="me-2">
                                <ButtonGroup>
                                <Button
                                    className="badge"
                                    variant="info"
                                    active
                                    disabled
                                >
                                    file
                                </Button>
                                <Button
                                    className="badge"
                                    variant="info"
                                    active
                                    disabled
                                >
                                    {importedFileName}
                                </Button>
                                </ButtonGroup>
                            </span>
            }
            <ButtonGroup className="mt-3">
                <ExporterButton
                    format={"csv"}
                    id={"data-exporter"}
                    data={data}
                    variant={"info"}
                >
                    Export
                </ExporterButton>
                <ImporterButton
                    format="csv"
                    id="data-importer"
                    hook={(d: any, name?: any) => {
                        console.log("data in hook: ", d)
                        setData(d)
                        setIsImported(true)
                        if (name) setImportedFileName(name)
                    }}
                    variant={"warning"}
                >
                    <div>
                        {isImported ? "Renew" : "Import"}
                    </div>
                </ImporterButton>
            </ButtonGroup>
        </div>
    </>}

const meta = {
    title: 'Implementation Examples/Data input and output for table',
    component: DataTableDemo,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof DataTableDemo>;

export default meta;
type Story = StoryObj<typeof meta>;


export const ImportableAndExportableTable: Story = {
    args : {
        header: ["Verocity [cm/s]", "Viscosity [Pa･s]", "Pressure [kPa]", "Rot [rpm]", "Absorbance"],
        data: plain_data,
        variant: "primary"
    }
};
