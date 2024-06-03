import { NextRequest } from "next/server"
import path from "path"
import { promises as fs } from "fs"

export async function GET(req: NextRequest) {
  try {
    const dataFilePath = await path.join(process.cwd(), "/public/projects.json")
    const data = await fs.readFile(dataFilePath, "utf-8")
    const projects = await JSON.parse(data)

    if (!projects) {
      return new Response("projects not found", { status: 404 })
    }

    return Response.json(projects, { status: 200 })
  } catch (error) {
    console.log(error)
    return new Response("Internal Server Error", { status: 500 })
  }
}
