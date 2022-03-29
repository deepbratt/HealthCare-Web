import React, { createContext, useState, useEffect } from 'react'
import { IUserData, IUserContext } from '../utils/interface'

const UserContext = createContext<IUserContext>({})

export const UserProvider: React.FC = ({ children }: React.PropsWithChildren<{}>) => {
  // NOTE --> Make sure to edit IUserData as per latest users' database schema
  const [user, setUser] = useState<IUserData>({ id: null })

  // Create User Authentication logic


  // If successfully authenticated, get that particular user's data from respective API endpoint


  // Use setUser hook to put the user's data into the 'user' object
  useEffect(() => {
    setUser({ id: 123 }) //This is a placeholder Data
  }, []);


  const userContextData: IUserContext = {
    user
  }

  return (
    <UserContext.Provider value={userContextData}>
      {children}
    </UserContext.Provider>
  )
}

export default UserContext