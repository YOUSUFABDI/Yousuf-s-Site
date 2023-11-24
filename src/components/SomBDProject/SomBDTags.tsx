import React from 'react'
import { motion } from 'framer-motion'
import TitleSection from '../../layouts/TitleSection'

const SomBDTags: React.FC = () => {
  const tags = (tag: string) => (
    <span className="bg-[#E8E8E8] dark:bg-projectBg px-6 py-3 rounded-md">
      {tag}
    </span>
  )

  return (
    <motion.div
      className="flex flex-col gap-5"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
    >
      <TitleSection>Tags</TitleSection>
      <div className="flex items-center gap-3 flex-wrap">
        {tags('Web app')}
        {tags('Php')}
        {tags('Mysql')}
        {tags('Javascript')}
        {tags('Bootsrap')}
      </div>
    </motion.div>
  )
}

export default SomBDTags
