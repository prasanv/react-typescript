import React, { useEffect, useState, createContext } from 'react'

type userNameContextProps = string;

type authDetailsContextProps = {
  authToken: string;
  userId: number;
}

type UserContextProviderProps = {
  children: React.ReactNode
}

//export const authDetailsContext = createContext <authDetailsContextProps|null> (null);
export const authDetailsContext = createContext ({} as authDetailsContextProps | null);

export const userNameContext = createContext <userNameContextProps|null> (null);

const UserContextProvider = ({children}:UserContextProviderProps) => {

  const [authDetails, setAuthDetails] = useState<null|authDetailsContextProps>(null);
  const [userName] = useState('Prasan')

  useEffect(() => {
    fetch('/api/authentication')
      .then(res => res.json())
      .then(data => setAuthDetails(data))
  }, [])

  return (
    <div>
      <userNameContext.Provider value={userName}>
        <authDetailsContext.Provider value={authDetails}>
          {children}
        </authDetailsContext.Provider>
      </userNameContext.Provider>    
    </div>
  )
}

export default UserContextProvider;