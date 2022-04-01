import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AgGridReact } from "ag-grid-react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { DeleteRounded, EditRounded, PrintRounded } from "@mui/icons-material";
// ADD DATA/UTILS import below this comment
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import { IPatientsData } from "../../utils/interfaces/user.interface";
import { GridApi, GridReadyEvent, ICellRendererParams } from "ag-grid-community";
import { PRINT } from "../../utils/langauge/en/buttonLabels";

const ActionCellRenderer: React.FC<ICellRendererParams> = (props) => {
  const cellValue = props.data;
  return (
    <>
      {/* // TODO: Create delete and update function to delete and edit a particular record if user is authorized respectively.  */}
      <IconButton onClick={() => console.log("_id", cellValue)}>
        <EditRounded />
      </IconButton>
      <IconButton onClick={() => console.log("_id", cellValue)}>
        <DeleteRounded />
      </IconButton>
    </>
  );
};

interface IPatientsTableProps {
  rowData?: IPatientsData[];
}

const PatientsListingTable: React.FC<IPatientsTableProps> = ({ rowData }) => {

  const [gridApi, setGridApi] = useState<GridApi>();
  const navigate = useNavigate();

  function onGridReady(params: GridReadyEvent) {
    setGridApi(params.api)
    params.api.sizeColumnsToFit();
  }

  //* use this function to achieve bulk actions like delete, print etc.
  const getSelectedRowData = () => {
    let selectedNodes = gridApi?.getSelectedNodes();
    let selectedData = selectedNodes?.map(node => node.data);
    console.log(`Selected Nodes:\n${JSON.stringify(selectedData)}`);
    return selectedData;
  };

  const defaultColDef = {
    resizable: true,
    filter: true,
    sortable: true,
  };
  //* ADD TABLE CELLS HERE
  const [columnDefs] = useState([
    {
      field: "_id",
      hide: true,
      suppressToolPanel: true
    },
    { field: "MR #" },
    { field: "Patient Name" },
    { field: "Gender" },
    { field: "Phone" },
    {
      field: "Actions",
      //* Action Cell Component Renderer
      cellRenderer: ActionCellRenderer,
    },
  ]);

  return (
    <>
      <Box sx={{ margin: "1rem", display: "flex", justifyContent: "flex-end" }}>
        <Button endIcon={<PrintRounded />} onClick={getSelectedRowData}>
          {PRINT}
        </Button>
      </Box>
      <div
        className="ag-theme-alpine"
        style={{ height: "500px", width: "auto", marginTop: "20px" }}
      >
        <AgGridReact
          onGridReady={onGridReady}
          rowData={rowData?.map((patient) => (
            {
              "_id": patient.mrNum,
              "MR #": patient.mrNum,
              "Patient Name": `${patient.firstName} ${patient.lastName}`,
              "Gender": patient.gender.toLocaleUpperCase(),
              "Phone": patient.phone,
            }
          ))}
          columnDefs={columnDefs}
          defaultColDef={defaultColDef}
          pagination={true}
          paginationPageSize={20}
          rowSelection={"single"}
          onRowClicked={(e) => navigate(`/patient-details/${e.data._id}`)}
        />
      </div>
    </>
  );
};

export default PatientsListingTable;
