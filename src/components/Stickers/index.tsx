"use client";
import { NextImage } from "@/components";
import {
  motion,
  useAnimationFrame
} from "framer-motion";
import { useRef } from "react";


export const Stickers: React.FC = () => {
  const image1 = useRef<HTMLImageElement>(null);
  const image2 = useRef<HTMLImageElement>(null);
  const image3 = useRef<HTMLImageElement>(null);
  const image4 = useRef<HTMLImageElement>(null);

  const defaultStyle = ' md:block xs:hidden drop-shadow-3xl';

  useAnimationFrame((t, d) => {

    const y = (1 + Math.sin(t / 1800)) * -10;
    //TODO: traavaar quando for celular
    if (!image1.current || !image2.current || !image3.current || !image4.current) return;
    image1.current.style.transform = `translateX(${y}px) translateY(${y}px)`;
    image2.current.style.transform = `translateX(${y}px) translateY(${y}px) rotate(${y}deg)`;
    image3.current.style.transform = `translateY(${y}px)`;
    image4.current.style.transform = `translateY(${y}px)`;
  });
  return (
    <>
      <motion.div ref={image4} className={`absolute top-10 right-[5%] drop-shadow-3xl lg:block md:hidden xs:hidden`}>
        <NextImage
          imageProps={{
            alt: 'sitker',
            src: '/assets/images/2d-pan-3.png',
          }}

          boxProps={{
            className: 'max-w-[18rem] max-h-[13rem] w-[18vw] h-[13vw]',
          }}
        />
      </motion.div>
      <motion.div ref={image3} className={`absolute top-20 left-0  ${defaultStyle}`}>
        <NextImage
          imageProps={{
            alt: 'sitker',
            src: '/assets/images/2d-pan-4.png',
          }}

          boxProps={{
            className: 'max-w-[13rem] max-h-[8rem] w-[13vw] h-[8vw] -rotate-12',
          }}
        />
      </motion.div>
      <motion.div className={`absolute bottom-10 right-[10%] ${defaultStyle}`} ref={image2}>
        <NextImage
          imageProps={{
            alt: 'sitker',
            src: '/assets/images/2d-micro.png',
          }}

          boxProps={{
            className: 'w-[15vw] h-[10vw] max-w-[15rem] max-h-[10rem]',
          }}
        />
      </motion.div>
      <motion.div className={`absolute  bottom-10 left-0 lg:block drop-shadow-3xl md:hidden xs:hidden`} ref={image1}>
        <NextImage
          imageProps={{
            alt: 'sitker',
            src: '/assets/images/2d-pan.png',
          }}

          boxProps={{
            className: 'max-w-[20rem] max-h-[20rem] w-[20vw] h-[20vw]',
          }}
        />
      </motion.div>
    </>
  )
}

