import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import ListingTable from "../../components/ListingTable";
import { DeleteRounded, EditRounded } from "@mui/icons-material";
// ADD DATA/UTILS import below this comment
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import { IAppointment } from "../../utils/interfaces/appointment.interface";
import {  ICellRendererParams } from "ag-grid-community";

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

interface IAppointmentsTableProps {
  rowData: IAppointment[];
}

const AppointmentsListingTable: React.FC<IAppointmentsTableProps> = ({ rowData }) => {

  //* ADD TABLE CELLS HERE
  const [columnDefs] = useState([
    { field: "tokenNo", headerCheckboxSelection: true, checkboxSelection: true },
    { field: "patientName" },
    { field: "doctorName" },
    { field: "phone" },
    { field: "paid" },
    { field: "procedure" },
    { field: "createdAt" },
    { field: "referredBy" },
    {
      field: "actions",
      //* Action Cell Component Renderer
      cellRenderer: ActionCellRenderer,
    },
  ]);
  return <ListingTable rowData={rowData} columnDefs={columnDefs} />;
};

export default AppointmentsListingTable;
