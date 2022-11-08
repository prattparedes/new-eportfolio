import React from "react";
import { motion } from "framer-motion";
import { Experience } from "../typings";
import { urlFor } from "../sanity";

type Props = {
  experience: Experience;
};

function ExperienceCard({ experience }: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-w-7 mt-16 max-h-[650px] flex-shrink-0 w-[320px] md:w-[500px] xl:w-[900px] snap-center bg-[#463940]/50 p-5 opacity-40 hover:opacity-100 cursor-pointer transition:opacity duration-200 overflow-hidden">
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-24 h-24 sm:w-32 sm:h-32 rounded-full xl:w-[150px] xl:h-[150px] object-cover object-bottom"
        src={urlFor(experience?.companyImage).url()}
        alt=""
      />
      <div className="px-0 md:px-10">
        <h4 className="text-[18px] sm:text-2xl font-light mt-2 xl:text-center">{experience?.jobTitle}</h4>
        <p className="font-bold text-[16px] sm:text-[18px] mt-1 xl:text-center">{experience?.company}</p>
        <div className="flex space-x-2 my-2 xl:justify-center">
          {experience.technologies.map((technology) => (
            <img
              key={technology._id}
              className="h-6 w-6 rounded-full sm:h-8 sm:w-8"
              src={urlFor(technology.image).url()}
            />
          ))}
        </div>
        <p className="uppercase py-2 text-[14px] sm:text-[16px] text-gray-300 xl:text-center">
          {new Date(experience.dateStarted).toDateString()} -{" "}
          {experience.isCurrentlyWorkingHere
            ? "Present"
            : new Date(experience.dateEnded).toDateString()}
        </p>
        <ul className="list-none space-y-2 ml-5 text-sm sm:text-lg max-h-52 overflow-y-scroll pr-5 scrollbar-thin scrollbar-track-black scrollbar-thumb-[#BC4123]/80">
          {experience.points.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard;
