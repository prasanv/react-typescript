import React from 'react'

type textOwnProps<T extends React.ElementType> = {
  size?: 'sm' | 'md' | 'lg', 
  color?: 'primary' | 'secondary', 
  children: React.ReactNode,
  as?: T
} 

type textProps <T extends React.ElementType> = textOwnProps<T> 
  & Omit<React.ComponentProps<T>, keyof textOwnProps<T>>

const Text_2 = <T extends React.ElementType = 'div'>({size, color, children, as}: textProps<T>) => {
  const Component = as || 'div';
  return (
    <Component className={`class-with-${size}-${color}`}>
      {children}
    </Component>
  )
}

export default Text_2