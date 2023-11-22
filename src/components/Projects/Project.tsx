import React from 'react'
import TitleSection from '../../layouts/TitleSection'
import SubTitleSection from '../../layouts/SubTitleSection'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

type ProjecTypeProps = {
  name: string
  date: string
  desc: string
  img: string
  url: string
}

const Project: React.FC<ProjecTypeProps> = ({ name, date, desc, img, url }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className=""
    >
      <Link to={url} className="flex flex-col gap-5 md:flex-row cursor-pointer">
        <div className="flex justify-center flex-[0.3] bg-[#F0F0F0] dark:bg-projectBg rounded-md w-full md:w-fit px-8 pt-7">
          <img
            className="object-contain self-end"
            src={img}
            alt="project-image"
          />
        </div>

        <div className="flex flex-col gap-5 flex-1">
          <div className="flex items-center gap-3">
            <TitleSection>{name}</TitleSection>
            <SubTitleSection>.{date}</SubTitleSection>
          </div>
          <p className="text-lightSecondary dark:text-darkSecondary">{desc}</p>
        </div>
      </Link>
    </motion.div>
  )
}

export default Project
