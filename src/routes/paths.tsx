import OPDPage from "../pages/opd";
import UsersPage from "../pages/users";
import AppointmentContextProvider from "../context/AppointmentFormContext";
import UserFormContextProvider from "../context/UserFormContext";
import AddEditDoctorForm from "../sections/DoctorUser/AddEditDoctorForm";
import AddEditStaffForm from "../sections/StaffUser/AddEditStaffForm";
import AddEditAdminForm from "../sections/AdminUser/AddEditAdminForm";
import AddEditAccountantForm from "../sections/AccountantUser/AddEditAccountantForm";

export const paths = {
  dashboard: "/",
  opd: "/opd",
  users: "/users",
  addEditDoctor: "/add-edit-doctor/",
  addEditStaff: "/add-edit-staff/",
  addEditAdmin: "/add-edit-admin/",
  addEditAccountant: "/add-edit-accountant/",
  login: "/login",
  error: "*",
};

export const routes = {
  dashboard: "/",
  opd: "/opd",
  users: "/users",
  addEditDoctor: "/add-edit-doctor/",
  addEditStaff: "/add-edit-staff/",
  addEditAdmin: "/add-edit-admin/",
  addEditAccountant: "/add-edit-accountant/",
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
  [paths.opd]: {
    name: "OPD",
    path: routes.opd,
    component: (
      <AppointmentContextProvider>
        <OPDPage />
      </AppointmentContextProvider>
    ),
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
      <UserFormContextProvider>
        <AddEditDoctorForm />
      </UserFormContextProvider>
    ),
  },
  [paths.addEditStaff]: {
    name: "Add Edit Staff",
    path: routes.addEditStaff,
    component: (
      <UserFormContextProvider>
        <AddEditStaffForm />
      </UserFormContextProvider>
    ),
  },
  [paths.addEditAdmin]: {
    name: "Add Edit Admin",
    path: routes.addEditAdmin,
    component: (
      <UserFormContextProvider>
        <AddEditAdminForm />
      </UserFormContextProvider>
    ),
  },
  [paths.addEditAccountant]: {
    name: "Add Edit Accountant",
    path: routes.addEditAccountant,
    component: (
      <UserFormContextProvider>
        <AddEditAccountantForm />
      </UserFormContextProvider>
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
