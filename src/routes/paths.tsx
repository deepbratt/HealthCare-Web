import UsersPage from "../pages/users";
import DoctorFormContextProvider from "../context/DoctorFormContext";
import AddEditDoctorForm from "../sections/DoctorUser/AddEditDoctorForm";

export const paths = {
  dashboard: "/",
  users: "/users",
  addEditDoctor: "/add-edit-doctor/",
  login: "/login",
  error: "*",
};

export const routes = {
  dashboard: "/",
  users: "/users",
  addEditDoctor: "/add-edit-doctor/",
  login: "/login",
  error: "*",
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
  [paths.addEditDoctor]: {
    name: "Add Edit Doctor",
    path: routes.addEditDoctor,
    component: (
      <DoctorFormContextProvider>
        <AddEditDoctorForm />
      </DoctorFormContextProvider>
    ),
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
