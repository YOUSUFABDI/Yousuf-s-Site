import React from 'react'
import TitleSection from '../../layouts/TitleSection'
import SubTitleSection from '../../layouts/SubTitleSection'
import { motion } from 'framer-motion'

const AboutHeader: React.FC = () => {
  return (
    <div className="flex flex-col gap-1">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <TitleSection>About Me</TitleSection>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <SubTitleSection>Slightly more than that</SubTitleSection>
      </motion.div>
    </div>
  )
}

export default AboutHeader
