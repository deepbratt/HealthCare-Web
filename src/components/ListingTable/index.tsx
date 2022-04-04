import React, { useState } from "react";
import { AgGridReact } from "ag-grid-react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { PrintRounded } from "@mui/icons-material";
// ADD DATA/UTILS import below this comment
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import { ColDef, GridApi, GridReadyEvent, ColGroupDef } from "ag-grid-community";
import { PRINT } from "../../utils/langauge/en/buttonLabels";

interface IListingTableProps {
  rowData: Object[];
  columnDefs: (ColDef | ColGroupDef)[];
}

//* Update this table for more customization as needed. i-e we can send pagination, sorting, filtering options etc. as props.
const ListingTable: React.FC<IListingTableProps> = ({ rowData, columnDefs }) => {

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

export default ListingTable;
