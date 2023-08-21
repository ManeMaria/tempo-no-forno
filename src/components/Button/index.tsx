import React, { ButtonHTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge'

export const Button: React.FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({ ...props }) => {



  const className = twMerge(`
    bg-tertiary-yellow
    w-full 
    h-14
    font-black
    rounded-2xl
    border-2
    border-black
    shadow-3xl 
    shadow-black
    default-transition
    active:shadow-none active:translate-y-1
   `, props.className)
  return (
    <button  {...props} className={className}>
      {
        props.children
      }
    </button>
  )
}

