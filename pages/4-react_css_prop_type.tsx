import { NextPage } from 'next'
import React from 'react'
import { Container } from '../src/components/4-react_css_prop_type/Container';

const React_css_prop_type: NextPage = () => {
  const styleObj = { 
    border: '2px solid red', 
    padding: '1rem',
    fontSize: '2rem',
    'text-transform': 'uppercase',
  }

  return (
    <div>
      <Container styles={styleObj}></Container>
    </div>
  )
}

export default React_css_prop_type;
