import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircle from '@mui/icons-material/AccountCircle';
import SearchInput from "../../components/InputFields/SearchInput";
import NavBar from "../NavBar";

const Header: React.FC = () => {
  // TODO: update this logic when imlementing user authentication and remove all the hardcoded data
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              {/* // TODO: Add LOGO HERE  */}
              HEALTHCARE APP
            </Typography>
            {isLoggedIn && (
              <>
                <SearchInput />
                {/* // TODO: Update notifications icon BUTTON later */}
                <IconButton
                  size="large"
                  aria-label="show 17 new notifications"
                  color="inherit"
                >
                  <Badge badgeContent={17} color="error">
                    <NotificationsIcon />
                  </Badge>
                </IconButton>
                <IconButton
                  size="large"
                  edge="end"
                  aria-label="account of current user"
                  aria-haspopup="true"
                  // TODO: Create a dropdown menu for user profile
                  // aria-controls={menuId}
                  // onClick={handleProfileMenuOpen}
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
              </>
            )}

            {/* // TODO: Update login button to redirect to login page */}
            {!isLoggedIn && <Button color="inherit">Login</Button>}
          </Toolbar>
        </AppBar>
      </Box>
      {isLoggedIn && <NavBar />}
      {/* // TODO: Remove login button below before commit */}
      {/* <Button color="inherit" onClick={() => setIsLoggedIn(!isLoggedIn)}>
        {isLoggedIn ? "Logout" : "Login"}
      </Button> */}
    </>
  );
};

export default Header;
