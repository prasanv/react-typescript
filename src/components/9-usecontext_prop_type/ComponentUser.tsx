import React, { useContext } from 'react'
import { authDetailsContext } from "./UserContextProvider";
import { userNameContext } from "./UserContextProvider";

const ComponentUser = () => {

  const userAuthDetails = useContext(authDetailsContext);
  const userName = useContext(userNameContext)

  return (
    <div style={{padding: '10px', border: '1px solid'}}>
      <h3>ComponentUser</h3>
      <p>User Name is <strong>{userName}</strong> </p>
      <p>User Id is <strong>{userAuthDetails?.userId}</strong>  </p>
    </div>
  )
}

export default ComponentUser;