import React from "react";
import { motion } from "framer-motion";

type Props = {};

function ExperienceCard({}: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-w-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 opacity-40 hover:opacity-100 cursor-pointer transition:opacity duration-200 overflow-hidden">
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}   
        className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-bottom"
        src="https://firebasestorage.googleapis.com/v0/b/twitter-clone-yt-1b75f.appspot.com/o/images%2Fonpelogo2.png?alt=media&token=68b9f73d-4072-4950-92a2-bc2b923ace8c"
        alt=""
      />
      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">
            Coordinador de Mesa STAE
        </h4>
        <p className="font-bold text-2xl mt-1">ONPE</p>
        <div className="flex space-x-2 my-2">
            <img className="h-10 w-10 rounded-full" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Microsoft_Word_2013-2019_logo.svg/1200px-Microsoft_Word_2013-2019_logo.svg.png" alt="" />
            <img className="h-10 w-10 rounded-full" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Microsoft_Word_2013-2019_logo.svg/1200px-Microsoft_Word_2013-2019_logo.svg.png" alt="" />
            <img className="h-10 w-10 rounded-full" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Microsoft_Word_2013-2019_logo.svg/1200px-Microsoft_Word_2013-2019_logo.svg.png" alt="" />
        </div>
        <p className="uppercase py-5 text-gray-300">Started work... - Ended...</p>
        <ul className="list-disc space-y-4 ml-5 text-lg">
            <li>Summary pointsSummary points Summary pointsSummary points points</li>
            <li>Summary pointsSummary points Summary pointsSummary points points</li>
            <li>Summary pointsSummary points Summary pointsSummary points points</li>
            <li>Summary pointsSummary points Summary pointsSummary points points</li>
            <li>Summary pointsSummary points Summary pointsSummary points points</li>
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard;
