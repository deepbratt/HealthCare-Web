import React, { createContext, useState } from 'react';
import useValidation from '../utils/hooks/useValidation';

export interface IDoctorTimings {
  [key: string]: string | number | boolean | Date | null;
  day: string;
  startTime: Date | string | null;
  endTime: Date | string | null;
  duration: string;
  available: boolean;
} 

interface IDoctorFormValues {
  [k: string]: any;
  name: string;
  phone: string;
  email: string;
  gender: string;
  password: string;
  consultationFee: string;
  sharePrice: string;
  awards: string;
  expertise: string;
  languages: string;
  experience: string;
  qualifications: string[];
  services: string[];
  timings: IDoctorTimings[];
  faqs: { question: string; answer: string }[];
  role: string[];
}
interface IDoctorFormErrors {
    name: string;
    phone: string;
    email: string;
    gender: string;
    password: string;
    consultationFee: string;
    sharePrice: string;
    awards: string;
    expertise: string;
    languages: string;
    experience: string;
    qualifications: string,
    services: string;
    timings: string;
    role: string;
}
interface IDoctorContextState {
  values: IDoctorFormValues;
  errors: IDoctorFormErrors;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleDynamicInputChange: (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => void;
  handleAddNewItem: (
    name: string,
    itemToAdd: string | { question: string; answer: string }
  ) => void;
  handleTimeInputChange: (
    newValue: Date | string | null,
    name: string,
    index: number
  ) => void;
  handleBiographySubmit: () => void;
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
    awards: "",
    expertise: "",
    languages: "",
    experience: "",
    qualifications: [""],
    services: [""],
    timings: [
      {
        day: "Monday",
        startTime: null,
        endTime: null,
        duration: "30",
        available: true,
      },
      {
        day: "Tuesday",
        startTime: null,
        endTime: null,
        duration: "30",
        available: true,
      },
      {
        day: "Wednesday",
        startTime: null,
        endTime: null,
        duration: "30",
        available: true,
      },
      {
        day: "Thursday",
        startTime: null,
        endTime: null,
        duration: "30",
        available: true,
      },
      {
        day: "Friday",
        startTime: null,
        endTime: null,
        duration: "30",
        available: true,
      },
      {
        day: "Saturday",
        startTime: null,
        endTime: null,
        duration: "30",
        available: true,
      },
      {
        day: "Sunday",
        startTime: null,
        endTime: null,
        duration: "30",
        available: true,
      },
    ],
    faqs: [{ question: "", answer: "" }],
    role: [],
  },
  errors: {
    name: "",
    phone: "",
    email: "",
    gender: "",
    password: "",
    consultationFee: "",
    qualifications: "",
    awards: "",
    expertise: "",
    languages: "",
    experience: "",
    services: "",
    timings: "",
    sharePrice: "",
    role: "",
  },
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => {},
  handleDynamicInputChange: (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {},
  handleAddNewItem: (
    name: string,
    itemToAdd: string | { question: string; answer: string }
  ) => {},
  handleTimeInputChange: (newValue: Date | string | null, name: string, index:number) => {},
  handleBiographySubmit: () => {},
};

export const DoctorFormContext = createContext<IDoctorContextState>(defaultState);

export const DoctorFormContextProvider: React.FC = ({ children }: React.PropsWithChildren<{}>) => {

  const [values, setValues] = useState<IDoctorFormValues>(defaultState.values);
  const { errors, validate } = useValidation(values);

  //* to handleInput Change
  //* @param e: React.ChangeEvent<HTMLInputElement> - event
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, } = e.target;

    setValues({
      ...values,
      [name]: value,
    });
    validate({ [name]: value });
  };

  //* to handleChange for qualification, services, doctor availability, duration
  //* @param e: React.ChangeEvent<HTMLInputElement> - event
  //* @param index: number - index of the item to be changed
  const handleDynamicInputChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const { name, value, checked } = e.target;
    const newItems = { ...values };
    if (name === "question" || name === "answer") {
      newItems.faqs[index][name] = value;
    }else if (name=== "day" || name === "startTime" || name === "endTime" || name === "duration") {
      newItems.timings[index][name] = value.toString();
    }else if(name==="available") {
      newItems.timings[index][name] = checked;
    } 
    else {
      newItems[name][index] = value;
    }
    setValues(newItems);
  };

  //* to handleChange doctor timings: startTime, endTime
  //* @param newValue: Date | string | null - new value
  //* @param name: string - name of the field
  //* @param index: number - index of the item to be changed
  const handleTimeInputChange = (newValue: Date | string | null, name: string, index: number) => {
    const newItems = { ...values };
    newItems.timings[index][name] = newValue;
    setValues(newItems);
  };

  //* to add new items to arrays i-e: qualifications, services, faqs
  //* @param name: string - name of the field
  //* @param itemToAdd: string | { question: string; answer: string } - item to add to the array
  const handleAddNewItem = (name: string,
    itemToAdd: string | { question: string; answer: string }
  ) => {
    const newItems = { ...values };
    newItems[name] = [...values[name], itemToAdd];
    setValues(newItems);
  }; 

  //* to reset the form
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
    errors,
    handleInputChange,
    handleAddNewItem,
    resetForm,
    handleBiographySubmit,
    handleDynamicInputChange,
    handleTimeInputChange
  };

  return (
    <DoctorFormContext.Provider value={userContextData}>
      {children}
    </DoctorFormContext.Provider>
  )
}

export default DoctorFormContextProvider;