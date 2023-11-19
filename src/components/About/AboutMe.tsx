import React from 'react'
import TitleSection from '../../layouts/TitleSection'
import { aboutMe } from '../../lib/data'
import { motion } from 'framer-motion'
import { MdOutlineFileDownload } from 'react-icons/md'
import cv from './../../assets/CV.pdf'

const AboutMe: React.FC = () => {
  return (
    <motion.div
      className="flex flex-col gap-5 md:flex-row md:gap-[12.5rem]"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      <div className="flex flex-[0.20]">
        <TitleSection>About</TitleSection>
      </div>

      <div className="flex flex-col flex-1 gap-5 text-sm  text-lightPrimary dark:text-darkPrimary">
        {aboutMe.map((info) => (
          <span key={info.id}>{info.info}</span>
        ))}
        <a
          href={cv}
          download
          className="flex items-center gap-2 md:gap-3 w-fit border dark:border-darkSecondary/50 whitespace-nowrap rounded-xl px-5 py-3 hover:opacity-50 transition-opacity duration-[0.4s] ease-in-out"
        >
          <MdOutlineFileDownload size={19} />
          <span>Download CV</span>
        </a>
      </div>
    </motion.div>
  )
}

export default AboutMe
