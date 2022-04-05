import React, { createContext, useState } from 'react';

interface IDoctorFormValues {
    name: string;
    phone: string;
    email: string;
    gender: string;
    password: string;
    consultationFee: string;
    sharePrice: string;
    role: string[];
}
interface IDoctorContextState {
  values: IDoctorFormValues;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
  resetForm: () => void,
  handleBiographySubmit: () => void
}

const defaultState: IDoctorContextState = {
  values: {
    name: "",
    phone: "",
    email: "",
    gender: "male",
    password: "",
    consultationFee: "",
    sharePrice: "",
    role: [],
  },
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => {},
  resetForm: () => {},
  handleBiographySubmit: () => {}
};

export const DoctorFormContext = createContext<IDoctorContextState>(defaultState);

export const DoctorFormContextProvider: React.FC = ({ children }: React.PropsWithChildren<{}>) => {

  const [values, setValues] = useState<IDoctorFormValues>(defaultState.values);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value,
    });
    // if (validateOnChange) validate({ [name]: value });
  };

  const resetForm = () => {
    setValues(defaultState.values);
    // setErrors({});
  };

  const handleBiographySubmit = () => {
   console.log("handleBiographySubmit");
   console.log(values);
  };


  const userContextData = {
    values,
    handleInputChange,
    resetForm,
    handleBiographySubmit,
  };

  return (
    <DoctorFormContext.Provider value={userContextData}>
      {children}
    </DoctorFormContext.Provider>
  )
}

export default DoctorFormContextProvider;