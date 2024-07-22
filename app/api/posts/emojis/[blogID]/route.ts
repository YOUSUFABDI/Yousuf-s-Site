// app/api/emojis/[blogID]/route.ts
import { NextRequest, NextResponse } from "next/server"
import prisma from "@/prisma/client"

export async function GET(
  req: NextRequest,
  { params }: { params: { blogID: string } }
) {
  const { blogID } = params

  try {
    const emojis = await prisma.emoji.findMany({
      where: { blogID: Number(blogID) },
    })
    return NextResponse.json(emojis)
  } catch (error) {
    return NextResponse.error()
  }
}

export async function POST(
  req: NextRequest,
  { params }: { params: { blogID: string } }
) {
  const { blogID } = params
  const { type } = await req.json()

  try {
    const emoji = await prisma.emoji.upsert({
      where: { blogID_type: { blogID: Number(blogID), type } },
      update: { count: { increment: 1 } },
      create: { blogID: Number(blogID), type, count: 1 },
    })
    return NextResponse.json(emoji)
  } catch (error) {
    return NextResponse.error()
  }
}
