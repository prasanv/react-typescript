import React, { ButtonHTMLAttributes, Children } from 'react'

type customButtonProps = {
  variant: "primary" | "secondary";
  children: string;
} & Omit<React.ComponentProps<'button'>, 'children'>

const Custom_button = ({variant, children, ...rest}:customButtonProps) => {
  return (
    <button type='button' className={`class-with-${variant}`} {...rest}>
      {children}
    </button>
  )
}

export default Custom_button