import React from "react";
import { Variants, motion } from "framer-motion";



// Map API "type" vaules to JSX tag names
const tagMap: Record<string, string> = {
  paragraph: "p",
  heading1: "h1",
  heading2: "h2"
};

type AnimatedCharactersProps = {
  type: string;
  text: string;
}

export const Texts: React.FC<AnimatedCharactersProps> = (props) => {
  // Framer Motion variant object, for controlling animation
  const item: Variants = {
    hidden: {
      y: "200%",
      color: "#DFC9FA",
      transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.85 }
    },
    visible: {
      y: 0,
      color: "#2f0b5b",
      transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.75 }
    }
  };

  //  Split each word of props.text into an array
  const splitWords = props.text.split(" ");

  // Create storage array
  const words: string[][] = [];

  // Push each word into words array
  for (const [, item] of splitWords.entries()) {

    words.push((item.split("")));
  }

  // Add a space ("\u00A0") to the end of each word
  words.map((word) => {
    return (word as unknown as string[]).push("\u00A0");
  });


  // Get the tag name from tagMap
  const Tag = tagMap[`${props.type}`] as any;


  return (
    <Tag data-h1={Tag === 'h1'} className="text-3xl max-w-xl font-semibol data-[h1=true]:text-6xl data-[h1=true]:font-bold">
      {words.map((_, index) => {
        return (

          <span key={index} >
            {words[index].flat().map((element, index) => {
              return (
                <span
                  style={{
                    overflow: "hidden",
                    display: "inline-block"
                  }}
                  key={index}
                >
                  <motion.span
                    style={{ display: "inline-block" }}
                    variants={item}
                  >
                    {element}
                  </motion.span>
                </span>
              );
            })}
          </span>
        );
      })}

    </Tag>
  );
};


