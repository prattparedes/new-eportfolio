import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";

type Props = {};

export default function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      "Hi, The Name's Pratt Paredes",
      "Guy-who-loves-Geology-and-Games.tsx",
      "<ButLovesToCodeMore />",
    ],
    loop: true,
    delaySpeed: 2000,
    typeSpeed: 20,
    deleteSpeed: 20,
  });

  return (
    <div>
      <p>{text}</p>
      <Cursor cursorColor="#F7AB0A" />
    </div>
  );
}
