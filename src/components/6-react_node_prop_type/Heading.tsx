import React from 'react'

type headingProps = {
  children: string,
}

export default function Heading({children}: headingProps) {
  return (
    <h2>
      {children}
    </h2>
  )
}
