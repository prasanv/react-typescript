import React from 'react'
import Login from './Login'
import { profileProps } from "../12-react_component_prop_type/Profile";

type privateProps = {
  isLoggedIn: boolean;
  component: React.ComponentType<profileProps>
}

const Private = ({isLoggedIn, component: Component}:  privateProps) => {
  return (
    <div>
      { isLoggedIn ?  <Component name="Prasan Venkat" msgCount={10} /> : <Login/> }
    </div>
  )
}

export default Private
