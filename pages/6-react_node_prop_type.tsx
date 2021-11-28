import React from 'react'
import Status from '../src/components/6-react_node_prop_type/Status'
import Heading from '../src/components/6-react_node_prop_type/Heading'
import Body from '../src/components/6-react_node_prop_type/Body'
import Greet from '../src/components/1-basic_prop_type/Greet'
import { NextPage } from 'next'

const React_node_prop_type: NextPage = () => {
  return (
    <>
      <Heading>Data Fetching Status</Heading>
      <Body>
        <div>
          Status Message 
          {<Status status='success'></Status>}
        </div>
        <Greet greeterName='Prasanna Venkateshan' isLoggedIn={true}></Greet>
      </Body>
    </>
  )
}

export default React_node_prop_type;
