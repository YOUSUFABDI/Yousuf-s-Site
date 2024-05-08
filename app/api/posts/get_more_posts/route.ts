import prisma from "@/prisma/client"
import { NextRequest } from "next/server"

export async function GET(req: NextRequest) {
  try {
    const offsetParam = req.nextUrl.searchParams.get("offset")
    let offset = offsetParam ? parseInt(offsetParam, 10) : 0

    if (offset < 3) {
      offset = 3
    } else {
      offset -= 3
    }

    const posts = await prisma.blog.findMany({
      skip: offset,
      take: 3,
      include: {
        titles: {
          include: {
            paragraphs: true,
            images: true,
          },
        },
        allImages: true,
      },
    })

    return Response.json(posts, { status: 200 })
  } catch (error) {
    console.log(error)
    return new Response("Internal Server Error", { status: 500 })
  } finally {
    await prisma.$disconnect()
  }
}
