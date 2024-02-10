import { ProjectPagePropsDT, ProjectsDT } from "@/lib/types"
import ProjectHeader from "../components/ProjectHeader"
import ProjectDemo from "../components/ProjectDemo"
import ProjectTags from "../components/ProjectTags"
import GoBack from "@/layouts/GoBack"
import Contact from "@/layouts/Contact"
import axios from "axios"

export default async function page({ params }: ProjectPagePropsDT) {
  // const response = await axios.get(`${process.env.BASE_URL}/api/projects`, {
  //   method: "GET",
  //   headers: { "Cache-Control": "no-cache" },
  // })
  // const projects = await response.data
  // const project =
  //   (await projects.find((project: any) => project.id == params.id)) || null

  return (
    <main className="flex flex-col gap-10 my-14 pagePb text-lightSecondary dark:text-darkSecondary">
      <ProjectHeader
        createdDT={33}
        projectName={"name"}
        describtion={"description"}
        githubLink={"githubLink"}
        liveDemo={"liveDemo"}
      />
      <ProjectDemo images={[]} />
      <ProjectTags tags={[]} />
      <Contact />
      <GoBack link="projects" text="All projects" />
    </main>
  )
}
