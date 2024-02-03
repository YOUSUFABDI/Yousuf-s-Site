import { NextRequest } from "next/server"
import axios from "axios"

export async function GET(req: NextRequest) {
  const username = "YOUSUFABDI"
  if (!username) {
    return new Response("Please provide a username", { status: 200 })
  }

  try {
    const url = `https://api.github.com/users/${username}/repos?per_page=100`
    const response = await axios.get(url)
    const data = await response.data
    const repos = data.length
    return Response.json({ repos })
  } catch (err) {
    console.error(err)
    return new Response(`Something went wrong: ${err}`, { status: 200 })
  }
}
