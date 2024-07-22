import prisma from "@/prisma/client"
import { NextRequest } from "next/server"

export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams
  const slugString: string | null = searchParams.get("slug")
  let slug: number | null = null

  if (slugString) {
    slug = parseInt(slugString, 10)
  }

  try {
    if (slug !== null && !isNaN(slug)) {
      // If slug is provided, find the specific post based on the extracted slug
      const visitedPost = await prisma.blog.findUnique({
        where: { blogID: slug },
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

      if (!visitedPost) {
        return new Response("Post not found", { status: 404 })
      }

      // Increment the view count in production
      if (process.env.NODE_ENV !== "development") {
        await prisma.blog.update({
          where: { blogID: slug },
          data: {
            views: visitedPost.views + 1,
          },
        })
      }

      return Response.json(visitedPost, { status: 200 })
    }

    // If no slug fetch all posts
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

    if (!posts) {
      return new Response("Posts not found", { status: 404 })
    }

    return Response.json(posts, { status: 200 })
  } catch (error) {
    console.log(error)
    return new Response("Internal Server Error", { status: 500 })
  } finally {
    await prisma.$disconnect()
  }
}
