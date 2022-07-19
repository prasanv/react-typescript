import React from 'react'
import Private from '../src/components/12-react_component_prop_type/Private'
import Profile from '../src/components/12-react_component_prop_type/Profile'

const React_component_prop_type = () => {
  return (<Private isLoggedIn={true} component={Profile}></Private>)
}

export default React_component_prop_type