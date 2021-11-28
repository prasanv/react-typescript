import React from 'react'

type containerProps = { 
  styles?: React.CSSProperties,
}

export const Container = ({styles}: containerProps) => {
  return (
    <div style={styles}>
     Text content goes here.
    </div>
  )
}
