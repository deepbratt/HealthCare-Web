import React, { useContext, useState } from "react";
import { AgGridReact } from "ag-grid-react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Checkbox from '@mui/material/Checkbox';
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import DesktopTimePicker from "@mui/lab/DesktopTimePicker";
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import { DoctorFormContext } from "../../../context/DoctorFormContext";
//* Add data/utils import below this comment
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import { ColDef, GridApi, GridReadyEvent } from "ag-grid-community";
import { DOCTOR, TIMINGS } from "../../../utils/langauge/en/buttonLabels";
import { fieldNames } from "../../../utils/constants/formConstants";
import { ICellRendererParams } from "ag-grid-community";
import InputField from "../../../components/InputFields";

const StartTimeCellRenderer: React.FC<ICellRendererParams> = (props) => {
  const cellValue = props.data;
  const { values, handleTimeInputChange } = useContext(DoctorFormContext);
  var index = values.timings.findIndex(timing => timing.day === cellValue.day);
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DesktopTimePicker
        label="Start Time"
        value={values.timings[index].startTime}
        onChange={(newValue) => {
          handleTimeInputChange(newValue, fieldNames.startTime, index);
        }}
        renderInput={(params) => (
          <TextField
            style={{
              margin: "5px",
            }}
            size="small"
            {...params}
          />
        )}
      />
    </LocalizationProvider>
  );
};

const AvalaibleCellRenderer: React.FC<ICellRendererParams> = (props) => {
    const cellValue = props.data;
    const { values, handleDynamicInputChange } = useContext(DoctorFormContext);
    var index = values.timings.findIndex(timing => timing.day === cellValue.day);
    return (
      <Checkbox
        name={fieldNames.available}
        checked={values.timings[index].available}
        onChange={(e) => handleDynamicInputChange(e, index)}
      />
    );
  };

const EndTimeCellRenderer: React.FC<ICellRendererParams> = (props) => {
  const cellValue = props.data;
  const { values, handleTimeInputChange } = useContext(DoctorFormContext);
  var index = values.timings.findIndex(timing => timing.day === cellValue.day);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DesktopTimePicker
        label="End Time"
        value={values.timings[index].endTime}
        onChange={(newValue) => {
          handleTimeInputChange(newValue, fieldNames.endTime, index);
        }}
        renderInput={(params) => (
          <TextField
            style={{
              margin: "5px",
            }}
            size="small"
            {...params}
          />
        )}
      />
    </LocalizationProvider>
  );
};
const DurationCellRenderer: React.FC<ICellRendererParams> = (props) => {
  const cellValue = props.data;
  const { values, handleDynamicInputChange } = useContext(DoctorFormContext);
  var index = values.timings.findIndex(timing => timing.day === cellValue.day);
  return (
    <>
      <InputField
        fullWidth={false}
        label="Duration"
        type="number"
        size="small"
        style={{
          margin: "5px",
        }}
        name={fieldNames.duration}
        value={cellValue.duration}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          handleDynamicInputChange(e, index)
        }
      />
    </>
  );
};

const DoctorTimingForm: React.FC = () => {
  const { values } = useContext(DoctorFormContext);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [gridApi, setGridApi] = useState<GridApi>();

  function onGridReady(params: GridReadyEvent) {
    setGridApi(params.api);
    params.api.sizeColumnsToFit();
  }

  const ColStyles = {  display: "flex", alignContent: "center", height: "80px" };

  //* ADD TABLE CELLS HERE
  const [columnDefs] = useState<ColDef[]>([
    {
      field: "available",
      cellRenderer: AvalaibleCellRenderer,
      width: 70,
      cellStyle: { display: "flex", alignContent: "center", justifyContent:"center" },
    },
    {
      field: "day",
      width: 100,
      cellStyle: { display: "flex", alignContent: "center" },
    },
    {
      field: "startTime",
      cellRenderer: StartTimeCellRenderer,
      cellStyle: ColStyles,
    },
    {
      field: "endTime",
      cellRenderer: EndTimeCellRenderer,
      cellStyle: ColStyles,
    },
    {
      field: "duration",
      cellRenderer: DurationCellRenderer,
      cellStyle: ColStyles,
    },
  ]);

  const defaultColDef = {
    resizable: true,
    filter: false,
    sortable: false,
    autoHeight: true
  };


  return (
    <Box sx={{ margin: "40px" }}>
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} lg={12}>
          <Typography variant="h5" component="h1">
            {DOCTOR} {TIMINGS}
          </Typography>
        </Grid>
        <Grid item xs={12} lg={12}>
          <div
            className="ag-theme-alpine"
            style={{ height: "500px", width: "auto", marginTop: "20px" }}
          >
            <AgGridReact
              onGridReady={onGridReady}
              rowData={values.timings}
              columnDefs={columnDefs}
              defaultColDef={defaultColDef}
              suppressRowClickSelection={true}
              suppressCellFocus={true}
            />
          </div>
        </Grid>
      </Grid>
    </Box>
  );
};

export default DoctorTimingForm;
