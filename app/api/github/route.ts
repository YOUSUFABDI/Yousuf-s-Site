import { NextRequest } from "next/server"

export async function GET(req: NextRequest) {
  try {
    const url = "https://api.github.com/users/YOUSUFABDI/repos?per_page=100"
    const response = await fetch(url)
    const data = await response.json()
    const repos = data.length
    return Response.json({ repos })
  } catch (err) {
    console.error(err)
    return new Response(`Something went wrong: ${err}`, { status: 200 })
  }
}
