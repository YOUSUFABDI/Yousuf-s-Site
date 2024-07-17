import prisma from "@/prisma/client"
import { NextApiRequest, NextApiResponse } from "next"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { blogID } = req.query
  if (!blogID) {
    return res.status(400).json({ error: "Blog ID is required" })
  }

  if (req.method === "GET") {
    const emojis = await prisma.emoji.findMany({
      where: { blogID: Number(blogID) },
    })
    return res.status(200).json(emojis)
  }

  if (req.method === "POST") {
    const { type } = req.body
    if (!type) {
      return res.status(400).json({ error: "Emoji type is required" })
    }

    const emoji = await prisma.emoji.upsert({
      where: {
        blogID_type: {
          blogID: Number(blogID),
          type,
        },
      },
      update: { count: { increment: 1 } },
      create: { blogID: Number(blogID), type, count: 1 },
    })
    return res.status(200).json(emoji)
  }

  res.status(405).json({ error: "Method not allowed" })
}
