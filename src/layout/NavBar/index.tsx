// TODO: Update this component in DASHBOARD EPIC. SEE MORE => https://themagnit.atlassian.net/browse/HEALTHCARE-72
import * as React from 'react';
import {v4 as uuidv4} from 'uuid';
import { useNavigate } from 'react-router-dom';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
//* Add data/utils import below this comment  
import {INavItem, SECTIONS_DATA } from './NavBarSections';


const Navbar : React.FC = () => {
  const [value, setValue] = React.useState(0);
  const navigate = useNavigate();
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs value={value} onChange={handleChange} aria-label="navigation tab">
          {SECTIONS_DATA.map((section: INavItem) => (
            <Tab
              key={uuidv4()}
              label={section.label}
              onClick={() => navigate(section.path)}
            />
          ))}
        </Tabs>
      </Box>
    </Box>
  );
}

export default Navbar;
