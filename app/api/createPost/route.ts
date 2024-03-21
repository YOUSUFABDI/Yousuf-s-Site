import prisma from "@/prisma/client"
import { NextRequest, NextResponse } from "next/server"

type TitleDT = {
  title: string
  images: { image: string }[]
  paragraphs: { paragraph: string }[]
}

type BlogPostDT = {
  mainTitle: string
  description: string
  views: number
  createdDate: string
  creatorImage: string
  creatorName: string
  coverImage: string
  tag: string
  titles: TitleDT[]
  allImages: { image: string }[]
}

export async function POST(req: NextRequest, res: NextResponse) {
  if (req.method === "POST") {
    try {
      const body = await req.json()
      const {
        mainTitle,
        description,
        views,
        createdDate,
        creatorImage,
        creatorName,
        coverImage,
        tag,
        titles,
        allImages,
      } = body as BlogPostDT

      const newPost = await prisma.blog.create({
        data: {
          mainTitle,
          description,
          views,
          createdDate,
          creatorImage,
          creatorName,
          coverImage,
          tag,
          titles: {
            create: titles.map((title) => ({
              title: title.title,
              images: {
                create: title.images.map((image) => ({
                  image: image.image,
                })),
              },
              paragraphs: {
                create: title.paragraphs.map((paragraph) => ({
                  paragraph: paragraph.paragraph,
                })),
              },
            })),
          },
          allImages: {
            create: allImages.map((image) => ({
              image: image.image,
            })),
          },
        },
        include: {
          titles: true,
          allImages: true,
        },
      })

      return NextResponse.json(newPost, { status: 201 })
    } catch (error) {
      console.log(error)
      return new NextResponse("Internal Server Error", { status: 500 })
    } finally {
      prisma.$disconnect()
    }
  } else {
    return new NextResponse("Method Not Allowed", { status: 405 })
  }
}
