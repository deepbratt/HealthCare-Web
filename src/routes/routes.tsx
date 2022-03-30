import { Routes, Route } from "react-router-dom";
import PrivateRoutes from './privateRoutes';
import PublicRoutes from './publicRoutes';
import { privateRoutes, publicRoutes } from "./paths";
import Layout from '../layout';

const RouteProvider = () => {
  const _privateRoutes = Object.values(privateRoutes);
  const _publicRoutes = Object.values(publicRoutes);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route element={<PublicRoutes />}>
          {_publicRoutes.map((route, index) => (
            <Route
              path={route.path}
              element={route.component}
              key={`route-${route.name}`}
            />
          ))}
        </Route>
        <Route element={<PrivateRoutes />}>
          {_privateRoutes.map((route, index) => (
            <Route
              path={route.path}
              element={route.component}
              key={`route-${route.name}`}
            />
          ))}
        </Route>
        {/* // TODO: ADD NOT FOUND PAGE */}
        <Route path="*" element={<h1>NOT FOUND</h1>} />
      </Route>
    </Routes>
  );
};

export default RouteProvider;
