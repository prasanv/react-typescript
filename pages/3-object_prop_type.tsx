import { NextPage } from 'next'
import React from 'react'
import Person from '../src/components/3-object_prop_type/Person'

const Object_prop_type: NextPage = () => {
  const personName = {
    firstname: 'Krishna',
    lastname: 'Vasudeva'
  }

  return (
    <div>
      <Person name={personName}></Person>
    </div>
  )
 }
 
export default Object_prop_type;