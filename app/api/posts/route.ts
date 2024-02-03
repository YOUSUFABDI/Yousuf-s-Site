import prisma from "@/prisma/client"
import { NextRequest } from "next/server"

export async function GET(req: NextRequest) {
  try {
    const posts = await prisma.blog.findMany({
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

    if (process.env.NODE_ENV !== "development") {
      // Increment the view count in production
      await Promise.all(
        posts.map(async (post) => {
          await prisma.blog.update({
            where: { blogID: post.blogID },
            data: {
              views: post.views + 1,
            },
          })
        })
      )
    } else {
      // Get view count without incrementing in local environment
      await Promise.all(
        posts.map(async (post) => {
          await prisma.blog.update({
            where: { blogID: post.blogID },
            data: {
              views: post.views,
            },
          })
        })
      )
    }

    if (!posts) {
      return new Response("Post not found", { status: 404 })
    }

    return Response.json(posts, { status: 200 })
  } catch (error) {
    console.log(error)
    return new Response("Internal Server Error", { status: 500 })
  } finally {
    await prisma.$disconnect()
  }
}
