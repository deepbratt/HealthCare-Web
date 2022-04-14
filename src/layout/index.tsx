import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Box from "@mui/material/Box";

interface ILayoutProps {
}

const Layout: React.FC<ILayoutProps> = () => {
  return (
    <>
      <Header />
      <Box sx={{ width: "100%", display: "flex", justifyContent: "center", margin: "50px" }}>
        <Outlet />
      </Box>
    </>
  );
};

export default Layout;
