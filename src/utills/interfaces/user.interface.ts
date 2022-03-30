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

export interface IUserContext {
  userData?: IUserData;
}