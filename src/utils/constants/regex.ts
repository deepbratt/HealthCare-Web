const regName = /^(?=.{3,40}$)[a-zA-Z]+(?:[-'. ][a-zA-Z]+)*$/;
const regTypeName = /^(?=.{0,40}$)[a-zA-Z '.-]*$/;
const regPhone = /(^\+92[0-9]{10}$)|(^\0092[0-9]{10}$)/;
const regTypePhone = /^[+0-9 ]*$/;
const regEmail =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const regPass = /(?=.{8,})/;
const regNum = /^-?\d*\.?\d*$/

export const isNameValid = (name: string) => {
  return regName.test(name);
};
export const isTypeAlphaSpace = (name: string) => {
  return regTypeName.test(name);
};
export const isPhoneValid = (phone: string) => {
  return regPhone.test(phone);
};
export const isTypeNumPlusBracket = (phone: string) => {
  return regTypePhone.test(phone);
};
export const isEmailValid = (email: string) => {
  return regEmail.test(email);
};
export const isPasswordValid = (password: string) => {
  return regPass.test(password);
};
export const isNumeric = (value: string) => {
  return regNum.test(value);
};
