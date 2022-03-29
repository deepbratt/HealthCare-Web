import React, { createContext, useState, useEffect } from 'react'
import { IUserData, IUserContext } from '../utills/interfaces/user.interface'

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


  const userContextData: IUserContext = {
    userData
  }

  return (
    <UserContext.Provider value={userContextData}>
      {children}
    </UserContext.Provider>
  )
}

export default UserContext