export interface IUserData { 
  _id: string;
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  mobile: number | string;
  active?: boolean;
  banned: boolean;
}

export interface IPatientsData {
  _id: string;
  mrNum: string;
  firstName: string;
  lastName: string;
  gender: string;
  phone: string | number;
  dob: string | null;
}

export interface IUserContext {
  userData?: IUserData;
  patientsData?: IPatientsData[];
}
