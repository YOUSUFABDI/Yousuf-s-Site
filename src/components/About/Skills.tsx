import React from 'react'
import TitleSection from '../../layouts/TitleSection'
import { skills } from '../../lib/data'
import { motion } from 'framer-motion'

const Skills: React.FC = () => {
  return (
    <motion.div
      className="flex flex-col gap-5 md:flex-row md:gap-[12.5rem]"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      <div className="flex flex-[0.20]">
        <TitleSection>Skills</TitleSection>
      </div>

      <div className="flex text-sm flex-1 text-lightPrimary dark:text-darkPrimary">
        <ul className="grid grid-cols-3 gap-2 text-sm h-[12.5rem] overflow-y-auto scrollbar-hidden">
          {skills.map((skill, index) => (
            <li
              className="border dark:border-darkSecondary/50 whitespace-nowrap rounded-xl px-5 py-3 dark:bg-transparent text-center"
              key={index}
            >
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  )
}

export default Skills
