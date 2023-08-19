import React from 'react';
import { NextImage } from '..';
import Link from 'next/link';



export const Footer = () => {
  return (
    <footer className='bg-primary-400 w-full h-[5rem] bg-primary-100 grid place-items-center text-back py-[1rem]'>
      <div className='flex gap-2'>
        <Link href='https://www.linkedin.com/in/cesar-damasceno/' target='_blank'>
          <NextImage
            imageProps={{
              alt: 'github',
              src: '/assets/icons/icons-linkedin.svg',
            }}

            boxProps={{
              className: 'w-[1.5rem] h-[1.5rem]',
            }}
          />
        </Link>
        <Link href='https://github.com/ManeMaria' target='_blank'>
          <NextImage
            imageProps={{
              alt: 'linkedin',
              src: '/assets/icons/icon-github.svg',
            }}

            boxProps={{
              className: 'w-[1.5rem] h-[1.5rem]',
            }}
          />
        </Link>
      </div>
      <p className='text-normal font-bold text-[0.9rem]'>made with ❤️ by Cesar</p>
    </footer>
  )
}

