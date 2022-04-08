import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import { DeleteRounded, EditRounded, Info } from "@mui/icons-material";
// ADD DATA/UTILS import below this comment
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import { IPatientsData } from "../../utils/interfaces/user.interface";
import { ICellRendererParams } from "ag-grid-community";
import ListingTable from "../../components/ListingTable";

const ActionCellRenderer: React.FC<ICellRendererParams> = (props) => {
  const cellValue = props.data;
  const navigate = useNavigate();

  return (
    <>
      {/* // TODO: Create delete and update function to delete and edit a particular record if user is authorized respectively.  */}
      <IconButton onClick={() => navigate(`/patient-details/${cellValue._id}`)}>
        <Info />
      </IconButton>
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
  patientsData?: IPatientsData[];
}

const PatientsListingTable: React.FC<IPatientsTableProps> = ({ patientsData }) => {
  const fullNameGetter = (params: any) => (
    `${params.data.firstName} ${params.data.lastName}`
  )
  //* ADD TABLE CELLS HERE
  const [columnDefs] = useState([
    {
      field: "_id",
      hide: true,
    },
    {
      headerName: "MR #",
      field: "mrNum"
    },
    {
      headerName: "Patient Name",
      field: "Name",
      valueGetter: fullNameGetter,
    },
    {
      headerName: "Gender",
      field: "gender"
    },
    {
      headerName: "Phone",
      field: "phone"
    },
    {
      field: "Actions",
      //* Action Cell Component Renderer
      cellRenderer: ActionCellRenderer,
    },
  ]);

  return (
    <ListingTable rowData={patientsData!} columnDefs={columnDefs} />
  );
};

export default PatientsListingTable;
