import React, {useContext} from 'react'
import { userStatusContext } from "../10-usecontext_future_prop_type/UserStatusContextProvider";

const UserStatus = () => {

  const UserStatus = useContext(userStatusContext);

  console.log(UserStatus);

  const handleLogin = () => {
    if(UserStatus)
      UserStatus.setUserDetails({
        "name": "Prasan",
        "email": "prasan@example.com",
        "uuid": 1022
      })
  }

  const handleLogout = () => {
    if(UserStatus)
      UserStatus.setUserDetails(null)
  }

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <p>User Name is <strong>{ UserStatus?.userDetails?.name }</strong> </p>
      <p>User Email is <strong>{ UserStatus?.userDetails?.email }</strong>  </p>
      <p>User UUID is <strong>{ UserStatus?.userDetails?.uuid }</strong>  </p>
    </div>
  )
}

export default UserStatus

