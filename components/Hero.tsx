import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { urlFor } from "../sanity";
import { PageInfo } from "../typings";
import BackgroundCircles from "./BackgroundCircles";

type Props = {
  pageInfo: PageInfo;
};

function Hero({ pageInfo }: Props) {
  const [text, count] = useTypewriter({
    words: [
      `Hi, The Name's ${pageInfo.name}`,
      "Guy-who-loves-Geology-and-Games.tsx",
      "<ButLovesToCodeMore />",
    ],
    loop: true,
    delaySpeed: 2000,
    typeSpeed: 30,
    deleteSpeed: 30,
  });

  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <div className="relative h-32 w-32 mx-auto">
        <Image
        className="object-contain rounded-full" 
        src={urlFor(pageInfo?.heroImage).url()} alt="" width={128} height={128}/>
      </div>

      <div className="z-20">
        <h2 className="text-sm uppercase text-[white]/80 pb-2 tracking-[8px]">
          {pageInfo?.role}
        </h2>
        <h1 className="text-[22px] lg:text-6xl md:text-4xl font-semibold px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#BC4123" />
        </h1>
        <div className="pt-5 sm:space-x-4 flex flex-wrap justify-center">
          <Link href="#about">
            <button className="heroButton m-[8px] sm:m-0">About</button>
          </Link>
          <Link href="#experience">
            <button className="heroButton m-[8px] sm:m-0">Experience</button>
          </Link>
          <Link href="#skills">
            <button className="heroButton m-[8px] sm:m-0">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton m-[8px] sm:m-0">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
