import { getProjects } from "@/lib/utils"
import { NextResponse } from "next/server"

export async function GET() {
  try {
    const projects = await getProjects()

    return NextResponse.json(projects, { status: 200 })
  } catch (error) {
    console.log(error)
  }
}
