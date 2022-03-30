import { useState } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { paths } from "./paths";


const PrivateRoutes = () => {
  const location = useLocation();
  // TODO: Add logic to check if user is logged in
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  return isLoggedIn ? (
    <Outlet />
  ) : (
    <Navigate to={paths.login} state={{ from: location }} replace />
  );
};

export default PrivateRoutes;
