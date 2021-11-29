import React from 'react'
import Custom_button from '../src/components/16-html_comp_prop_type_and_omit/custom_button'
import Custom_input from '../src/components/16-html_comp_prop_type_and_omit/custom_input'

const Html_comp_prop_type_and_omit = () => {

  return (
    <div>
      <Custom_button variant="primary" onClick={() => console.log("Button Clicked")}>Click Me</Custom_button>     
      <Custom_input type="text" placeholder="Enter your Name" onChange={(e) => console.log(e.target.value)}></Custom_input>
    </div>
  )
}

export default Html_comp_prop_type_and_omit