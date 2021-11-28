import React, { createContext, useState } from 'react'

type userDetailsProps = {
  name: string;
  email: string;
  uuid: number;
}

type UserStatusContextProviderProps = {
  children: React.ReactNode
}

type userDetailsContextProps = {
  userDetails: userDetailsProps | null; 
  setUserDetails: React.Dispatch<React.SetStateAction<userDetailsProps | null>>
}

export const userStatusContext  = createContext<userDetailsContextProps|null>(null);
// export const userStatusContext  = createContext({} as userDetailsContextProps);

const UserStatusContextProvider = ({children}:UserStatusContextProviderProps) => {

  const [userDetails, setUserDetails] = useState<userDetailsProps|null>(null)

  return (
    <userStatusContext.Provider value={{userDetails, setUserDetails}}>
      {children}
    </userStatusContext.Provider>
  )
}

export default UserStatusContextProvider
