import React from 'react'
import Greet from '../src/components/1-basic_prop_type/Greet'
import Custom_button from '../src/components/16-html_comp_prop_type_and_omit/custom_button'

export const Extract_comp_prop_types_1 = (props: React.ComponentProps<typeof Greet>) => {
  return (
    <div>
      {props.greeterName}
    </div>
  )
}

export const Extract_comp_prop_types_2 = (props: React.ComponentProps<typeof Custom_button>) => {
  return (
    <div>
      {props.className}
    </div>
  )
}


