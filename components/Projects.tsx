import React from "react";
import { motion } from "framer-motion";
import { Project } from "../typings";
import { urlFor } from "../sanity";
import Link from "next/link";
import Image from "next/image";

type Props = {
  projects: Project[];
};

function Projects({ projects }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl mr-[-20px]">
        Projects
      </h3>

      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#BC4123]/80">
        {projects?.map((project, i) => (
          <div
            key={i}
            className="w-screen flex-shrink-0 snap-center flex flex-col items-center justify-center p-10 sm:p-16 md:p-20 h-screen mt-20 max-h-[650px]"
          >
            <div className="relative group  hover:border-[#BC4123]/60 hover:border-[0.5px] transition-all ease-in-out duration-150">
              <motion.img
                initial={{ y: -300, opacity: 0 }}
                transition={{ duration: 1.2 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                src={urlFor(project.image).url()}
                alt=""
                className="max-h-[160px] sm:max-h-[280px] object-contain group-hover:opacity-[25%] transition ease duration-300"
              />
              <div className="absolute text-[14px] sm:text-lg flex items-center justify-center flex-col top-[50%] left-[50%] translate-x-[70%] translate-y-[-50%] opacity-0 group-hover:opacity-100 transition-all ease-in-out duration-300 group-hover:translate-x-[-50%]">
                <p>
                  See More{" "}
                  <span className="text-[#BC4123]/80 text-[20px] sm:text-[32px]">↗</span>{" "}
                </p>
                <div className="flex space-x-4 mt-2 items-center">
                  <Link href={project.linkToBuild} target="_blank">
                    <Image
                      className="invert"
                      src="https://cdn-icons-png.flaticon.com/512/455/455691.png"
                      width={24}
                      height={24}
                      alt=""
                    />
                  </Link>
                  <Link href={project.linkToGit} target="_blank">
                    <Image
                      className="invert"
                      src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                      width={24}
                      height={24}
                      alt=""
                    />
                  </Link>
                </div>
              </div>
            </div>
            <div className="space-y-2 sm:space-y-4 px-0 md:px-10 max-w-6xl mb-[52px] mt-[20px]">
              <h4 className="text-[18px] sm:text-2xl font-semibold text-center">
                <span className="underline decoration-[#BC4123]/50">
                  Case Study {i + 1} of {projects.length}:
                </span>{" "}
                {project.title}
              </h4>
              <div className="flex items-center space-x-2 justify-center">
                {project?.technologies.map((technology) => (
                  <img
                    className="h-6 w-6 sm:h-8 sm:w-8 rounded-full object-contain"
                    key={technology._id}
                    src={urlFor(technology.image).url()}
                    alt=""
                  />
                ))}
              </div>

              <p className="text-[12px] sm:text-base text-center md:text-left">
                {project.summary}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full absolute top-[30%] bg-[#CB4123]/20 left-0 h-[500px] -skew-y-12" />
    </motion.div>
  );
}

export default Projects;
