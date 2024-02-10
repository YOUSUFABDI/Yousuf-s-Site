import { NextRequest } from "next/server"
import { getProjects } from "@/lib/utils"

export async function GET(req: NextRequest) {
  try {
    const projects = await getProjects()

    if (!projects) {
      return new Response("projects not found", { status: 404 })
    }

    return Response.json(projects, { status: 200 })
  } catch (error) {
    console.log(error)
  }
}
