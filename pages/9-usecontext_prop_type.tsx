import React from 'react'
import ComponentA from '../src/components/9-usecontext_prop_type/ComponentA'
import ComponentUser from '../src/components/9-usecontext_prop_type/ComponentUser'
import UserContextProvider from '../src/components/9-usecontext_prop_type/UserContextProvider'

const UseContextPropType = () => {

  return (
    <UserContextProvider>
      <div style={{padding: '10px', border: '1px solid'}}>
        <h3>UseContextPropType</h3>
        <ComponentA>
          <ComponentUser/>      
        </ComponentA>  
      </div>
    </UserContextProvider>
  )
}

export default UseContextPropType;
