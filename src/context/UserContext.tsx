import React, { createContext, useState, useEffect } from 'react'
import { IUserData, IUserContext, IPatientsData } from '../utills/interfaces/user.interface'

const UserContext = createContext<IUserContext>({})

export const UserProvider: React.FC = ({ children }: React.PropsWithChildren<{}>) => {
  // NOTE --> Make sure to edit IUserData as per latest users' database schema
  const [userData, setUserData] = useState<IUserData>()

  // Create User Authentication logic


  // If successfully authenticated, get that particular user's data from respective API endpoint


  // Use setUser hook to put the user's data into the 'user' object
  useEffect(() => {
    const user = {
      _id: '03203sfsdg03gawk03kj1',
      username: 'basuabhirup',
      firstName: 'Abhirup',
      lastName: 'Basu',
      email: 'abcd@efg.com',
      mobile: '9876543210',
      active: true,
      banned: false,
      // More fields may be added here for the time being, untill the API endpoints are ready
    }
    setUserData(user) //This is a placeholder Data
  }, []);

  // Sample data for saved patients
  const patientsData: IPatientsData[] = [
    {
      _id: "41e6tg556sde",
      mrNum: "MMC-163153",
      firstName: "Anshuman",
      lastName: "Aziz",
      gender: "male",
      phone: 3711659105,
      dob: "19950811"
    }, {
      _id: "41e6tg5564f6esd",
      mrNum: "MMC-1631798",
      firstName: "Fatima",
      lastName: "",
      gender: "female",
      phone: 3711659105,
      dob: "19950811"
    }, {
      _id: "41e6tg5bsfk14",
      mrNum: "MMC-163125",
      firstName: "Jalaluddin",
      lastName: "Arif",
      gender: "male",
      phone: 3711659105,
      dob: "19950811"
    }, {
      _id: "4961g556sdefs45",
      mrNum: "MMC-163146",
      firstName: "Junaid",
      lastName: "",
      gender: "male",
      phone: 3711659105,
      dob: "19950811"
    },
  ]


  const userContextData: IUserContext = {
    userData,
    patientsData
  }

  return (
    <UserContext.Provider value={userContextData}>
      {children}
    </UserContext.Provider>
  )
}

export default UserContext