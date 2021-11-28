import React from 'react'

type horizontalToastProps = 'right' | 'center' | 'left'
type verticalToastProps = 'top' | 'center' | 'bottom'

type toastProps = { 
  position: Exclude<`${verticalToastProps}-${horizontalToastProps}`, 'center-center'> | 'center'
}

const Toast = ({position}:toastProps) => {
  return (
    <div style={{ backgroundPosition: position}}>
      Toast Notification Position : {position}
    </div>
  )
}

export default Toast