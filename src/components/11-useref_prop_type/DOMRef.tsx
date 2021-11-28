import React, { useRef, useEffect } from 'react'

const DOMRef = () => {

  const inputRef = useRef<HTMLInputElement|null>(null)

  useEffect(() => {
    inputRef.current?.focus()
    
  }, [])

  return (
    <div>
      <label>Enter Name:</label>
      <input type='text' ref={inputRef}></input>
    </div>
  )
}

export default DOMRef;