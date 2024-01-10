import React from "react"
import Title from "@/layouts/Title"
import SubTitle from "@/layouts/SubTitle"
import { motion } from "framer-motion"

const AboutHeader: React.FC = () => {
  return (
    <div className="flex flex-col gap-1">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <Title>About Me</Title>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <SubTitle>Slightly more than that</SubTitle>
      </motion.div>
    </div>
  )
}

export default AboutHeader
