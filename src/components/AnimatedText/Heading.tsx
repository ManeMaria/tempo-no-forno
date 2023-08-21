"use client";

import { motion } from "framer-motion";
import { AnimatedText } from ".";


export const Heading: React.FC = () => {

  const placeholderText = [
    { type: "heading1", text: "Tempo no Forno" },
    {
      type: "heading2",
      text: "Tempo no Forno: Precisão na Culinária, do Pré-aquecimento à Perfeição!"
    }
  ];

  const container = {
    visible: {

      transition: {
        staggerChildren: 0.01
      }
    }
  };

  return (
    <motion.div className="text-center grid z-[2] xs:text-left lg:text-center" initial="hidden"
      animate="visible"
      variants={container}>
      {placeholderText.map((item, index) => {
        return <AnimatedText.texts {...item} key={index} />;
      })}
    </motion.div>
  )
}

