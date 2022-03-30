import UsersPage from "../pages/users";

export const paths = {
  dashboard: "/",
  users: "/users",
  login: "/login",
  error: "*",
};

export const routes = {
  dashboard: '/',
  users: '/users',
  login: '/login',
  error: '*'
};

export const privateRoutes = {
  [paths.dashboard]: {
    name: "Dashboard",
    path: routes.dashboard,
    // TODO: UPDATE component later
    component: <h1>Dashboard</h1>,
  },
  [paths.users]: {
    name: "Users",
    path: routes.users,
    component: <UsersPage />,
  },
};

export const publicRoutes = {
  [paths.login]: {
    name: "Login",
    path: routes.login,
    // TODO: UPDATE component later
    component: <h1>login</h1>,
  },
};
