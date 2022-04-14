import React, { createContext, useState } from 'react';
import {v4 as uuidv4} from "uuid";
import useValidation from '../utils/hooks/useValidation';
import { IDoctor } from '../utils/interfaces/doctor.interface';
import { DateRange } from "materialui-daterange-picker";
import { IAppointment } from '../utils/interfaces/appointment.interface';

export interface IAvaialableSlots {
  _id: string;
  start: string;
  end: string;
}

export interface IAppointmentFormValues {
  [k: string]: any;
  patientID: string;
  doctorID: string;  
  appointmentTime: string;
  startDate: string;
  endDate: string;
  comments: string;
}

export interface IAppointmentFormErrors {
  patientID: string;
  doctorID: string;
}

interface IDoctorContextState {
  values: IAppointmentFormValues;
  errors: IAppointmentFormErrors;
  patientsList: IAppointment[];
  doctorsList: IDoctor[];
  availableSlots: IAvaialableSlots[];
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleDateRangeChange: (newValue: DateRange) => void,
  handleSubmit: () => void;
}

const defaultState: IDoctorContextState = {
  values: {
    patientID: "",
    doctorID: "",
    appointmentTime: "",
    startDate: "",
    endDate: "",
    comments: ""
  },
  errors: {
    patientID: "",
    doctorID: "",
  },
  patientsList: [
    {
      _id: uuidv4(),
      patientName: "Shafique Khan",
      doctorName: "Jamil Khan",
      phone: "0322112222",
      createdAt: "12/12/2020",
      paid: true,
      procedure: "",
      referredBy: "Jamshed Ahmed",
    },
    {
      _id: uuidv4(),
      patientName: "Jamil Khan",
      doctorName: "Jamil Khan",
      phone: "0322112222",
      createdAt: "12/12/2020",
      paid: true,
      procedure: "",
      referredBy: "Jamshed Ahmed",
    },
    {
      _id: uuidv4(),
      patientName: "Naseem Khan",
      doctorName: "Jamil Khan",
      phone: "0322112222",
      createdAt: "12/12/2020",
      paid: true,
      procedure: "",
      referredBy: "Jamshed Ahmed",
    },
    {
      _id: uuidv4(),
      patientName: "Javed Khan",
      doctorName: "Jamil Khan",
      phone: "0322112222",
      createdAt: "12/12/2020",
      paid: true,
      procedure: "",
      referredBy: "Jamshed Ahmed",
    },
  ],
  doctorsList: [
    {
      _id: uuidv4(),
      name: "Dr. Shafique Khan",
      type: "OPD",
      phone: "0322112222",
      email: "naseem@gmail.com",
      lastSignedIn: "12/12/2020",
    },
    {
      _id: uuidv4(),
      name: "Dr. Jamil Khan",
      type: "OPD",
      phone: "0322112222",
      email: "naseem@gmail.com",
      lastSignedIn: "12/12/2020",
    },
    {
      _id: uuidv4(),
      name: "Dr. Naseem Khan",
      type: "Dermatologist",
      phone: "0322112222",
      email: "naseem@gmail.com",
      lastSignedIn: "12/12/2020",
    },
    {
      _id: uuidv4(),
      name: "Dr. Javed Khan",
      type: "Dentist",
      phone: "0322112222",
      email: "naseem@gmail.com",
      lastSignedIn: "12/12/2020",
    },
  ],
  availableSlots: [{
    _id: uuidv4(),
    start: "10:00",
    end: "11:00"
  }, {
    _id: uuidv4(),
    start: "11:00",
    end: "12:00"
  }],
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => {},
  handleDateRangeChange: (newValue: DateRange) => {},
  handleSubmit: () => {},
};

export const AppointmentFormContext = createContext<IDoctorContextState>(defaultState);

export const AppointmentFormContextProvider: React.FC = ({ children }: React.PropsWithChildren<{}>) => {

  const [patientsList] = useState<IAppointment[]>(defaultState.patientsList);
 const [doctorsList] = useState<IDoctor[]>(defaultState.doctorsList);
 const [availableSlots] = useState<IAvaialableSlots[]>(
   defaultState.availableSlots
 );
  const [values, setValues] = useState<IAppointmentFormValues>(defaultState.values);
  const { errors, validate } = useValidation(values);

  

  //* to handleInput Change
  //* @param e: React.ChangeEvent<HTMLInputElement> - event
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });

    validate({ [name]: value });
  };

  const handleDateRangeChange = (newValue: DateRange) => {
    if (newValue.startDate && newValue.endDate) {
      setValues({
        ...values,
        startDate: newValue.startDate.toString(),
        endDate: newValue.endDate.toDateString(),
      });
    }
  };


  //* to handle form Submit
  const handleSubmit = () => {
    console.log(values);
  };

  const userContextData = {
    values,
    errors,
    patientsList,
    doctorsList,
    availableSlots,
    handleInputChange,
    handleDateRangeChange,
    handleSubmit,
  };

  return (
    <AppointmentFormContext.Provider value={userContextData}>
      {children}
    </AppointmentFormContext.Provider>
  )
}

export default AppointmentFormContextProvider;