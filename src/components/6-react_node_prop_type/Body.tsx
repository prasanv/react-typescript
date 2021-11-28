import React from 'react'

type bodyProps = {
  children: React.ReactNode,
}

export default function Body({children}: bodyProps) {
  return (
    <>
      {children}
    </>
  )
}
