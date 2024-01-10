import React from "react"
import { motion } from "framer-motion"
import Title from "@/layouts/Title"
import SubTitle from "@/layouts/SubTitle"

const ProjectsHeader: React.FC = () => {
  return (
    <div className="flex flex-col gap-1">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Title>Projects</Title>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <SubTitle>Here are some of the projects I've worked on.</SubTitle>
      </motion.div>
    </div>
  )
}

export default ProjectsHeader
