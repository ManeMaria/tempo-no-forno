"use client"
import React, { useReducer } from 'react';
import { Button } from '../Button';
import { twMerge } from 'tailwind-merge';

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
  onClick?: (value: any) => void
  options: Option[]
}


export const Select: React.FC<SelectProps> = ({ ...props }) => {
  const [reducer, dispatch] = useReducer((state: State, action: State) => ({ ...state, ...action }), {
    value: props.options?.[0]?.label || '',
    isOpen: false
  });

  const className = twMerge(`
          h-0 
         default-transition
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
          grid 
          place-items-center
          data-[open="false"]:p-0 data-[open="false"]:opacity-0
          data-[open="true"]:h-20 opacity-100 p-3.5`, props.className)


  return (
    <div className='relative'>
      <Button type='button' className='px-2 w-14 default-transition grid place-items-center hover:-translate-y-0' onClick={() => {
        dispatch({ isOpen: !reducer.isOpen })
      }} >
        {reducer.value}
      </Button>

      <ul data-open={reducer.isOpen} className={className}>
        {
          props.options.map((option, index) => {
            return (
              <li key={index} data-selected={reducer.value === option.label} className='w-full border-b-2 border-transparent data-[selected=true]:border-b-2 data-[selected=true]:border-black grid items-center'>
                <button onClick={
                  () => {
                    dispatch({ value: option.label, isOpen: false });

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

