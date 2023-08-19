/* eslint-disable jsx-a11y/alt-text */
import Image, { ImageProps } from 'next/image';
import React, { HTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge'

type NextImageProps = {
  imageProps: ImageProps;
  boxProps: HTMLAttributes<HTMLDivElement>
}

export const NextImage: React.FC<NextImageProps> = ({ boxProps, imageProps }) => {

  const className = twMerge(`
    relative
    w-52
    h-auto
   `, boxProps.className)
  return (
    <div  {...boxProps} className={className}>
      <Image fill  {...imageProps} />
    </div>
  )
}

