// https://nextjs.org/docs/api-routes/request-helpers
import { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { sanityClient } from "../../sanity";
import { Social } from "../../typings";

const query = groq`
    *[_type == "social"]
`

type Data = {
    socials: Social[]
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
  ) {
    const socials: Social[] = await sanityClient.fetch(query)
    res.status(200).json({ socials })
  }
  