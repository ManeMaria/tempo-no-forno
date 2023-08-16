import React, { InputHTMLAttributes } from 'react';

type InputProps = {
  label: string;
} & InputHTMLAttributes<HTMLInputElement>;

export const Input: React.FC<InputProps> = ({
  label,
  ...rest
}) => {
  return (
    <div className='grid'>
      <label className='text-lg font-semibold'>{label}</label>
      <input className='rounded-2xl border border-solid h-14 w-60 border-black shadow-3xl shadow-black focus:outline-none  focus:border-black border-2 focus:transition-all px-3 text-xl'   {...rest} />
    </div>
  )
}

