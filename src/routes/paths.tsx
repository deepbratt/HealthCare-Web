import UsersPage from "../pages/users";
import PatientsPage from "../pages/patients";
import PatientDetails from "../pages/patientDetails";
import DoctorFormContextProvider from "../context/DoctorFormContext";
import AddEditDoctorForm from "../sections/DoctorUser/AddEditDoctorForm";
import EditProfile from "../pages/patientDetails/sidebarMenu/EditProfile";
import AddInvoice from "../pages/patientDetails/sidebarMenu/AddInvoice";
import AddToken from "../pages/patientDetails/sidebarMenu/AddToken";
import AddFile from "../pages/patientDetails/sidebarMenu/AddFile";
import InvoiceHistory from "../pages/patientDetails/sidebarMenu/InvoiceHistory";

export const paths = {
  dashboard: "/",
  users: "/users",
  patients: "/patients",
  patientDetails: "/patient-details",
  patientEditProfile: "/patient/edit-profile/",
  patientAddInvoice: "/patient/add-invoice/",
  patientAddToken: "/patient/add-token/",
  patientAddFile: "/patient/add-file/",
  patientInvoiceHistory: "/patient/invoice-history/",
  addEditDoctor: "/add-edit-doctor/",
  login: "/login",
  error: "*",
};

export const routes = {
  dashboard: '/',
  users: '/users',
  patients: "/patients",
  patientDetails: "/patient-details/:id",
  patientEditProfile: "/patient/edit-profile/:id",
  patientAddInvoice: "/patient/add-invoice/:id",
  patientAddToken: "/patient/add-token/:id",
  patientAddFile: "/patient/add-file/:id",
  patientInvoiceHistory: "/patient/invoice-history/:id",  
  addEditDoctor: "/add-edit-doctor/",
  login: '/login',
  error: '*',
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
  [paths.patients]: {
    name: "Patients",
    path: routes.patients,
    component: <PatientsPage />,
  },
  [paths.patientDetails]: {
    name: "Patient Details",
    path: routes.patientDetails,
    component: <PatientDetails />,
  },
  [paths.patientEditProfile]: {
    name: "Patient EditProfile",
    path: routes.patientEditProfile,
    component: <EditProfile />,
  },
  [paths.patientAddInvoice]: {
    name: "Patient AddInvoice",
    path: routes.patientAddInvoice,
    component: <AddInvoice />,
  },
  [paths.patientAddToken]: {
    name: "Patient AddToken",
    path: routes.patientAddToken,
    component: <AddToken />,
  },
  [paths.patientAddFile]: {
    name: "Patient AddFile",
    path: routes.patientAddFile,
    component: <AddFile/>,
  },
  [paths.patientInvoiceHistory]: {
    name: "Patient InvoiceHistory",
    path: routes.patientInvoiceHistory,
    component: <InvoiceHistory />,
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
