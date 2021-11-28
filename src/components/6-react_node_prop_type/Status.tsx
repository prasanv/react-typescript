import React from 'react'

type statusProps = {
  status: 'loading' | 'success' | 'error' ,
}

export default function Status({status}: statusProps) {
  return (
    <>
      {(status === 'loading') && <p>Loading</p>}
      {(status === 'success') && <p>Data fetched successfully</p>}
      {(status === 'error') && <p>Error fetching the data</p>}
    </>
  )
}
