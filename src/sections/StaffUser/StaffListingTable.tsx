import React, { useState } from "react";
import { AgGridReact } from "ag-grid-react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { DeleteRounded, EditRounded, PrintRounded } from "@mui/icons-material";
// ADD DATA/UTILS import below this comment
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import { IStaff } from "../../utils/interfaces/staff.interface";
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

interface IStaffTableProps {
  rowData: IStaff[];
}

const StaffListingTable: React.FC<IStaffTableProps> = ({ rowData }) => {

  const [gridApi, setGridApi] =useState<GridApi>();

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
    { field: "name", headerCheckboxSelection: true, checkboxSelection: true },
    { field: "phone" },
    { field: "email" },
    { field: "lastSignedIn" },
    {
      field: "actions",
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
          rowData={rowData}
          columnDefs={columnDefs}
          defaultColDef={defaultColDef}
          pagination={true}
          paginationPageSize={20}
          rowSelection={"multiple"}
          suppressRowClickSelection={true}
        />
      </div>
    </>
  );
};

export default StaffListingTable;
