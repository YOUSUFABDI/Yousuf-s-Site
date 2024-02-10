"use client"

import React from "react"
import ProjectsHeader from "./ProjectsHeader"
import Project from "./Project"
import { ProjectListPropsDT } from "@/lib/types"

const Projects = ({ projects }: ProjectListPropsDT) => {
  return (
    <div className="flex flex-col gap-[4.375rem] md:gap-20 my-14">
      <ProjectsHeader />

      <div className="flex flex-col gap-[1.875rem] md:gap-10">
        {projects.map((project) => (
          <Project key={project.id} {...project} />
        ))}
      </div>
    </div>
  )
}

export default Projects
