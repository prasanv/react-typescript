import { NextPage } from 'next'
import React from 'react'
import PersonList from '../src/components/2-array_prop_type/PersonList'

const Array_prop_type: NextPage = () => {
  const nameList = [
    {
      firstname: 'Krishna ',
      lastname: 'Vasudave'
    },
    {
      firstname: 'Rama',
      lastname: 'Dasharahta'
    },
    {
      firstname: 'Guna',
      lastname: 'Kullapa'
    }
  ]

  return (<PersonList name={nameList}></PersonList>)
}

export default Array_prop_type;