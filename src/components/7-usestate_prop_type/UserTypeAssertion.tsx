import React, {useState} from 'react'

type authUser = {
  name: string,
  email: string,
}

const UserTypeAssertion = () => {
  const [user, setUser] = useState <authUser>({} as authUser);

  const applyUser = () => {
    setUser({
      name: 'prasan',
      email: 'prasan@gami.com'
    })
  }
  const removeUser = () => {
    setUser({} as authUser);
  }

  return (
    <div>
      <p>Type Assertion - state will always of certain type and wont be null</p>
      <button onClick={applyUser}>apply</button>
      <button onClick={removeUser}>remove</button>
      <div>User name is {user?.name} </div>
      <div>User email is {user?.email} </div>
    </div>
  )
}

export default UserTypeAssertion
