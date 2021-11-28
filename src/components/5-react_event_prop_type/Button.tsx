import React from 'react'

type buttonProps = {
  // onClickHandler: Function   // Both Works
  onClickHandler: (e: React.MouseEvent<HTMLButtonElement>, id: number) => number 
}

const Button = ({onClickHandler}: buttonProps) => {

  return (
    <div>
      <button onClick={(e) => onClickHandler(e, (new Date().getFullYear()*1000))}>Click Me</button>  
    </div>
  )
}

export default Button
