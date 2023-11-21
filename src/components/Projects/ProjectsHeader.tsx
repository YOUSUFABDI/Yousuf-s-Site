import React from 'react'
import { motion } from 'framer-motion'
import TitleSection from '../../layouts/TitleSection'
import SubTitleSection from '../../layouts/SubTitleSection'

const ProjectsHeader: React.FC = () => {
  return (
    <div className="flex flex-col gap-1">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <TitleSection>Projects</TitleSection>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <SubTitleSection>
          Here are some of the projects I've worked on.
        </SubTitleSection>
      </motion.div>
    </div>
  )
}

export default ProjectsHeader
