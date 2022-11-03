import React from "react";
import { motion } from "framer-motion";

type Props = {};

function BackgroundCircles({}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        scale: [1, 2, 2, 3, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1],
        borderRadius: ["20%", "20", "50%", "80%", "20%"],
      }}
      transition={{
        duration: 2.5,
      }}
      className="relative flex justify-center items-center"
    >
      <div className="absolute border-4 border-[#BC4123]/50 rounded-full h-[300px] w-[300px] mt-52 animate-ping" />
      <div className="absolute border-2 border-[#463940]/40 rounded-full h-[300px] w-[300px] mt-52" />
      <div className="absolute border-2 border-[#463940]/40 rounded-full h-[500px] w-[500px] mt-52" />
      <div className="rounded-full border-2 border-[#BC4123]/40 opacity-20 h-[650px] w-[650px] absolute mt-52 animate-pulse" />
      <div className="rounded-full border-2 border-[#463940]/40 h-[800px] w-[800px] absolute mt-52" />
    </motion.div>
  );
}

export default BackgroundCircles;
