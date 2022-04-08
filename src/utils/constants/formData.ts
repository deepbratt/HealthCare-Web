export interface IUserRole {
    name: string;
    description: string;
    roles: string[];
}

export const userRoles: IUserRole[] = [
  {
    name: "admin",
    description: "Administrator (Complete Access)",
    roles: ["View Patient Profiles", "View Patient Profiles"],
  },
];
