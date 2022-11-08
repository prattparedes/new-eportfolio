import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Skill } from "../typings";
import { urlFor } from "../sanity";

type Props = {
  skill: Skill;
  directionLeft?: boolean;
};

function Skill({ skill, directionLeft }: Props) {
  const [windowWidth, setwindowWidth] = useState(0);

  useEffect(() => {
    setwindowWidth(window.innerWidth);
  });

  return (
    <div className="group relative flex cursor-pointer">
      {windowWidth <= 400 ? (
        <motion.img
        initial={{
          x: directionLeft ? -60 : 60,
          opacity: 0,
        }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        src={urlFor(skill?.image).url()}
        className="rounded-full border-2 border-[#463940] object-contain w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 xl:w-20 xl:h-20 filter group-hover:grayscale transition duration-300 ease-in-out"
      />
      ) : (
        <motion.img
        initial={{
          x: directionLeft ? -200 : 200,
          opacity: 0,
        }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        src={urlFor(skill?.image).url()}
        className="rounded-full border-2 border-[#463940] object-contain w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 xl:w-20 xl:h-20 filter group-hover:grayscale transition duration-300 ease-in-out"
      />
      )}
      <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 xl:w-20 xl:h-20 rounded-full z-0">
        <div className="flex items-center justify-center h-full">
          <p className="text-2xl sm:text-3xl font-bold text-black opacity-100">
            {skill.progress}%
          </p>
        </div>
      </div>
    </div>
  );
}

export default Skill;
