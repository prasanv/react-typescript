import React from 'react'
import LoggedIn from '../src/components/7-usestate_prop_type/LoggedIn'
import User from '../src/components/7-usestate_prop_type/User'
import UserTypeAssertion from '../src/components/7-usestate_prop_type/UserTypeAssertion'
import style  from "../styles/Home.module.css";

const UseState_prop_type = () => {
  return (
    <div>
      <div className={style.main}>
        <h3>useState - Type Inference Example</h3>
        <LoggedIn></LoggedIn>
      </div>
      <div className={style.main}>
        <h3>useState - Future State Value Example</h3>
        <User></User>
      </div>
      <div className={style.main}>
        <h3>useState - Type Assertion Example</h3>
        <UserTypeAssertion></UserTypeAssertion>
      </div>
    </div>
  )
}

export default UseState_prop_type
