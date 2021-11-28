import React from 'react'

type inputProps = {
  value: string,
  // onChangeHandler: Function   // Both Works
  onChangeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void,
}

const Input = ({onChangeHandler, value}: inputProps) => {
  return (
    <div>
      <input 
        type='text' 
        placeholder="Enter text"
        value={value}
        onChange={(e) => onChangeHandler(e)}
      ></input>
    </div>
  )
}

export default Input

