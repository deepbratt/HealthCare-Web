import { paths } from "../../routes/paths";

export interface INavItem {
  label: string;
  path: string;
}

export const SECTIONS_DATA: INavItem[] = [
  { label: "DASHBOARD", path: paths.dashboard },
  { label: "OPD", path: paths.dashboard },
  { label: "PATIENTS", path: paths.dashboard },
  { label: "USERS", path: paths.users },
  { label: "PREFERENCES", path: paths.dashboard },
];
