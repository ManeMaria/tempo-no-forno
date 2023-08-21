"use client"
import React from 'react';
import { twMerge } from 'tailwind-merge'

type TooltipProps = {
  className?: string;
  children: React.ReactNode;
  content: string;
}

export const Tooltip: React.FC<TooltipProps> = ({ ...props }) => {

  const [isOpen, setIsOpen] = React.useState(false)

  const className = twMerge(`relative`, props.className)
  return (
    <div  {...props} className={className}>
      <div id="tooltip-default" role="tooltip" data-open={isOpen} className="bg-tertiary-yellow absolute z-10 inline-block px-2 py-1 text-xs font-semibold text-black default-transition delay-150 rounded-2xl border-2 border-black shadow-3xl opacity-0 -top-14 tooltip h-12 w-44 h-11 data-[open=true]:opacity-100">
        {props.content}
      </div>
      <div className="relative" data-tooltip-target="tooltip-default" onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
        {
          props.children
        }
      </div>
    </div>
  )
}





