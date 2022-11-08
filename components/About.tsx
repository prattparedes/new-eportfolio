import React from "react";
import { motion } from "framer-motion";
import { PageInfo } from "../typings";
import { urlFor } from "../sanity";

type Props = {
  pageInfo: PageInfo;
};

function About({ pageInfo }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl mr-[-20px]">
      About
      </h3>

      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        viewport={{ once: true }}
        src={urlFor(pageInfo?.profilePic).url()}
        className="mt-10 sm:mt-0 -mb-28 md:mb-0 flex-shrink-0 w-[200px] h-[200px] sm:w-56 sm:h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[450px] xl:h-[450px]"
      />
      <div className="space-y-4 px-0 mt-8 sm:mt-0 md:px-10">
        <h4 className="text-[18px] sm:text-2xl font-semibold md:text-3xl">
          Here is a{" "}
          <span className="underline decoration-[#BC4123]">little</span>{" "}
          background
        </h4>
        <p className="text-[10px] sm:text-sm">
          {pageInfo?.backgroundInformation}
        </p>
      </div>
    </motion.div>
  );
}

export default About;
