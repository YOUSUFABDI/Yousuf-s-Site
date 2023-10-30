import React from 'react'
import SectionHeading from './SectionHeading'
import { projectsData } from '../lib/data'
import Project from './Project'
import { useSectionInView } from '../lib/hooks'

const Projects: React.FC = () => {
  const { ref } = useSectionInView('Projects', 0.5)

  return (
    <section id="projects" ref={ref} className="scroll-mt-28 mb-28">
      <SectionHeading>My Projects</SectionHeading>
      <div>
        {projectsData.map((product, index) => (
          <React.Fragment key={index}>
            <Project {...product} />
          </React.Fragment>
        ))}
      </div>
    </section>
  )
}

export default Projects
