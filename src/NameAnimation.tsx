import { motion } from "framer-motion";

const text = "JOSHIKA NAMANI";

export default function AnimatedName() {
  return (
    //     <h1 className='title text-[10rem] font-medium bg-gradient-to-b from-neutral-200 to-neutral-950 bg-clip-text text-transparent tracking-tight max-w-6xl lg:max-w-full text-center '>
    //   JOSHIKA NAMANI
    // </h1>
    <motion.h1
      className="title text-[10rem] font-medium bg-gradient-to-b from-neutral-200 to-neutral-950 bg-clip-text text-transparent tracking-tight max-w-6xl lg:max-w-full text-center"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {text.split("").map((word, index) => (
        <motion.span key={index} variants={child} className="inline-block">
          {word}
        </motion.span>
      ))}
    </motion.h1>
  );
}

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.35, // delay between words
    },
  },
};

const child = {
  hidden: {
    y: -1000,   // start from top
    opacity: 1,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring" as const,
      stiffness: 150,
      damping: 12,    // lil bouncy effect
    },
  },
};