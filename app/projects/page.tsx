import Projects from "@/components/Projects/Projects"
import axios from "axios"

export default async function ProjectsPage() {
  // const response = await axios.get(`${process.env.BASE_URL}/api/projects`, {
  //   method: "GET",
  //   headers: { "Cache-Control": "no-cache" },
  // })
  // const projects = (await response.data) || null

  return (
    <main className="pagePb">
      <Projects projects={[]} />
    </main>
  )
}
