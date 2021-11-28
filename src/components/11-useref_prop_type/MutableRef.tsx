import React, {useState, useRef, useEffect} from 'react'

const MutableRef = () => {

  const [timesState, setTimerState] = useState<number>(0)
  const intervalRef = useRef<number|null|any>(null)

  const stopTimer = () => {
    if(intervalRef.current)
      clearInterval(intervalRef.current);
  }

  // Check the type returned by the 'intervalRef.current'
  // console.log(intervalRef.current);
  
  useEffect(() => {    
      intervalRef.current = setInterval(()=>{
        setTimerState( old => old+1);
      }, 1000)
      return () => {
        stopTimer()
      }
  }, [])

  return (
    <div>
      <p> {timesState} </p>
      <button onClick={stopTimer}>Stop Timer</button>
    </div>
  )
}

export default MutableRef;