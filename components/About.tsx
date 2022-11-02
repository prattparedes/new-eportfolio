import React from "react";
import { motion } from "framer-motion";

type Props = {};

function About({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
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
        src="https://firebasestorage.googleapis.com/v0/b/twitter-clone-yt-1b75f.appspot.com/o/images%2FFotoIg2.png?alt=media&token=6062388a-1833-4558-acb4-15d5a6d54a32"
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[500px]"
      />
      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-[#F7AB0A]">little</span>{" "}
          background
        </h4>
        <p className="text-sm">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum
          dolores sint, tempora ex voluptate nam exercitationem expedita culpa!
          Soluta architecto labore iste iure corrupti quaerat, dolorum debitis
          quidem laboriosam voluptatem. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Expedita corporis dignissimos maxime fugit incidunt
          aperiam, iste molestiae repudiandae totam suscipit pariatur dicta
          molestias veniam magni, laborum libero omnis, quibusdam dolor. Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Quisquam modi
          ratione quas, adipisci totam officiis obcaecati quo et ducimus
          necessitatibus voluptatem voluptatum nostrum facere fugit, assumenda
          tenetur, magni maxime sapiente.
        </p>
      </div>
    </motion.div>
  );
}

export default About;
