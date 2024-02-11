"use client"

import { ProjectPagePropsDT } from "@/lib/types"
import ProjectHeader from "../components/ProjectHeader"
import ProjectDemo from "../components/ProjectDemo"
import ProjectTags from "../components/ProjectTags"
import GoBack from "@/layouts/GoBack"
import Contact from "@/layouts/Contact"
import useSWR from "swr"
import Fetcher from "@/lib/fetcher"
import Article from "@/app/blog/components/ui/Article"
import Skeleton from "@/layouts/Skeleton"

export default function Page({ params }: ProjectPagePropsDT) {
  const { data, isLoading } = useSWR(`/api/projects`, Fetcher, {
    revalidateOnFocus: false,
  })
  const projects = data
  const project = projects?.find((project: any) => project.id == params.id)

  if (isLoading) {
    return (
      <Article>
        {[1, 2, 3, 4, 5].map((el, index) => (
          <Skeleton key={`${el + index}`} />
        ))}
      </Article>
    )
  }

  return (
    <main className="flex flex-col gap-10 my-14 pagePb text-lightSecondary dark:text-darkSecondary">
      <ProjectHeader
        createdDT={project.createdDT}
        projectName={project.projectName}
        describtion={project.description}
        githubLink={project.githubLink}
        liveDemo={project.liveDemo}
      />
      <ProjectDemo images={project.images} />
      <ProjectTags tags={project.tags} />
      <Contact />
      <GoBack link="projects" text="All projects" />
    </main>
  )
}
