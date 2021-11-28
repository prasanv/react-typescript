import React, {useState} from 'react'

type authUser = {
  name: string,
  email: string,
}

const User = () => {

  const [user, setUser] = useState <null|authUser> (null);

  const applyUser = () => {
    setUser({
      name: 'prasan',
      email: 'prasan@gami.com'
    })
  }
  const removeUser = () => {
    setUser(null);
  }

  return (
    <div>
      <p>Handle future State Value or initial state value of null</p>
      <button onClick={applyUser}>apply</button>
      <button onClick={removeUser}>remove</button>
      <div>User name is {user?.name} </div>
      <div>User email is {user?.email} </div>
    </div>
  )
}

export default User
