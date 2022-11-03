// import { groq } from "next-sanity";
// import { sanityClient } from "../sanity";

// const query = groq`
//     *[_type == "experience"] {
//       ...,
//       technologies[]->
//     }
// `;


// // from the getExperience folder

import { Experience } from "../typings";

export const fetchExperiences = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/getExperience`
  );

  const data = await res.json();
  const experiences: Experience[] = data.experiences;

  return experiences;
};
