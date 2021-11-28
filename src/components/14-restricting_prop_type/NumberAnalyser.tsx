import React from 'react'

type valueProp = {
  value: number
}

type isPositiveProp = valueProp & {
  isPositive: boolean, 
  isNegative?: never, 
  isZero?: never
}

type isNegativeProp = valueProp & {
  isPositive?: never, 
  isNegative: boolean, 
  isZero?: never
}

type isZeroProp = valueProp & {
  isPositive?: never, 
  isNegative?: never, 
  isZero: boolean
}

type numberAnalyserProps = isPositiveProp | isNegativeProp | isZeroProp;

const NumberAnalyser = ({value, isPositive, isNegative, isZero}:numberAnalyserProps) => {
  return (
    <div>
      {value} {isPositive && 'Positive Number'} {isNegative && 'Negative Number'} {isZero && 'Zero'}
    </div>
  )
}

export default NumberAnalyser
