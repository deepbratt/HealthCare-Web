import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import { v4 as uuidv4 } from "uuid";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import DoctorUser from "../../sections/DoctorUser";
//* Add data/utils import below this comment
import { SECTIONS_DATA } from "./UsersSections";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`users-tabpanel-${index}`}
      aria-labelledby={`users-tab-${index}`}
      {...other}
    >
      {value === index && <Box>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `users-tab-${index}`,
    "aria-controls": `users-tabpanel-${index}`,
  };
}

const UsersPage: React.FC = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "95%" }}>
      <Grid container>
        <Box sx={{ width: "100%" }}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              {SECTIONS_DATA.map((section, index) => (
                <Tab key={uuidv4()} label={section} {...a11yProps(index)} />
              ))}
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            <DoctorUser />
          </TabPanel>
          <TabPanel value={value} index={1}>
            {/* // TODO: ADD STAFF USER HERE */}
            <DoctorUser />
          </TabPanel>
          <TabPanel value={value} index={1}>
             {/* // TODO: ADD ADMIN USER HERE */}
            <DoctorUser />
          </TabPanel>
          <TabPanel value={value} index={1}>
             {/* // TODO: ADD ACCOUNTANT USER HERE */}
            <DoctorUser />
          </TabPanel>
        </Box>
      </Grid>
    </Box>
  );
};

export default UsersPage;
