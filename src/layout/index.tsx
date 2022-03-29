import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";

interface ILayoutProps {
}

const Layout: React.FC<ILayoutProps> = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default Layout;
