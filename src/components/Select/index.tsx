"use client"
import React, { ButtonHTMLAttributes, useReducer } from 'react';
import { twMerge } from 'tailwind-merge'
import { Button } from '../Button';

type State = {
  value?: string
  isOpen?: boolean
}

type Option = {
  value: string
  label: any
}

type SelectProps = {
  className?: string
  onClick?: (value: string) => void
  options: Option[]
}


export const Select: React.FC<SelectProps> = ({ ...props }) => {
  const [reducer, dispatch] = useReducer((state: State, action: State) => ({ ...state, ...action }), {
    value: props.options?.[0]?.value || '',
    isOpen: false
  })


  return (
    <div className='relative'>
      <Button className='hover:translate-y-0 px-2 w-14 transition-all ease-in-out' onClick={() => {
        dispatch({ isOpen: !reducer.isOpen })
      }} >
        {reducer.value}
      </Button>

      <ul data-open={reducer.isOpen} className={`
          h-0 
          transition-all ease-in-out
          bg-tertiary-yellow
          opacity-0 
          overflow-hidden
          absolute
          top-16
          left-0
          p-3.5
          border-2
          font-black
          rounded-2xl
          border-black
          shadow-3xl
          data-[open="false"]:p-0 data-[open="false"]:opacity-0
          data-[open="true"]:h-20 opacity-100 p-3.5`}>
        {
          props.options.map((option, index) => {
            return (
              <li key={index}>
                <button onClick={
                  () => {
                    dispatch({ value: option.value });
                    props?.onClick?.(option.value);
                  }
                } >
                  {option.label}
                </button>
              </li>
            )
          })
        }
      </ul>
    </div >
  )
}

