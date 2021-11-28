import React from 'react'

interface ComponentAProps {
  children: React.ReactNode
}
const ComponentA = ({children}: ComponentAProps) => {
  return (
    <div style={{padding: '10px', border: '1px solid'}}>
      <h3>ComponentA</h3>
      {children}
    </div>
  )
}

export default ComponentA
