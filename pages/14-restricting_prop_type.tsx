import React from 'react'
import NumberAnalyser from '../src/components/14-restricting_prop_type/NumberAnalyser'

const Restricting_prop_type = () => {
  return (
    <div>
      <NumberAnalyser value={100} isPositive />
      <NumberAnalyser value={-1209} isNegative />
      <NumberAnalyser value={0} isZero />
    </div>
  )
}

export default Restricting_prop_type
