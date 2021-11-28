import React from 'react'
import DOMRef from '../src/components/11-useref_prop_type/DOMRef'
import MutableRef from '../src/components/11-useref_prop_type/MutableRef'

const Useref_prop_type = () => {
  return (
    <>
    <div style={{ border: '1px solid', padding: '5px', margin: '5px'}}>
      <h3>DOM Ref Example</h3>
      <DOMRef/>
    </div>
    <div style={{ border: '1px solid', padding: '5px', margin: '5px'}}>
      <h3>Mutable Ref Example</h3>
      <MutableRef/>
    </div>
    </>
  )
}

export default Useref_prop_type;