import React, { useState } from 'react'

const LoggedIn = () => {
const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  }
  const handleLogout = () => {
    setIsLoggedIn(false);
  }

  return (
    <div>
      <p>Fully functional component without any type defined. Typescript Inference the state types based on the values set</p>
      <p>Hover over the state to see the type inference</p>
      <button onClick={handleLogin}>login</button>
      <button onClick={handleLogout}>logout</button>
      <div>User is {isLoggedIn ? 'Logged in': 'Logged out'}</div>
    </div>
  )
}

export default LoggedIn
