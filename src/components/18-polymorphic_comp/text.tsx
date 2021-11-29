import React, { ElementType } from 'react'

type textProps = {
  size?: 'sm' | 'md' | 'lg', 
  color?: 'primary' | 'secondary', 
  children: React.ReactNode,
  as?: React.ElementType 
} & React.ComponentProps<ElementType>

const Text = ({size, color, children, as}: textProps) => {
  const Component = as || 'div';
  return (
    <Component className={`class-with-${size}-${color}`}>
      {children}
    </Component>
  )
}

export default Text
