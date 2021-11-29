import React from 'react'

type customInputProps = React.ComponentProps<'input'>

const Custom_input = ({...rest}:customInputProps) => {
  return (
    <input {...rest}/>
  )
}

export default Custom_input