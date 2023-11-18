import React from 'react'
import TitleSection from '../../layouts/TitleSection'
import { motion } from 'framer-motion'
import rasiinLogo from './../../assets/images/rasin-logo.png'
import SubTitleSection from '../../layouts/SubTitleSection'

const Work: React.FC = () => {
  return (
    <motion.div
      className="flex flex-col gap-5 md:flex-row md:gap-[12.5rem]"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
    >
      <div className="flex flex-[0.20]">
        <TitleSection>Work</TitleSection>
      </div>

      <div className="flex flex-col flex-1 gap-5 text-sm  text-lightPrimary dark:text-darkPrimary">
        <div className="flex flex-col gap-5">
          <span>1+ years of professional development experience.</span>
          <span>
            I began my professional career at Rasin Tech, one of the largest ICT
            tech companies in Somalia.
          </span>
        </div>
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-9">
            <img src={rasiinLogo} alt="rasiinLogo" />
            <div className="flex flex-col gap-1">
              <TitleSection>Full Stack Engineer</TitleSection>
              <SubTitleSection>Rasin Tech</SubTitleSection>
            </div>
          </div>
          <span>2022</span>
        </div>
      </div>
    </motion.div>
  )
}

export default Work
