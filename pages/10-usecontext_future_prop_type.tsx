import React from 'react'
import UserStatus from '../src/components/10-usecontext_future_prop_type/UserStatus'
import UserStatusContextProvider from '../src/components/10-usecontext_future_prop_type/UserStatusContextProvider'

const Usecontext_future_prop_type = () => {

  return (
    <div>
      <UserStatusContextProvider>
        <UserStatus/>
      </UserStatusContextProvider>
    </div>
  )
}

export default Usecontext_future_prop_type;
