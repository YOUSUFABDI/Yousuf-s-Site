import React from 'react'
import profileImg from './../../assets/images/yusuf-n-bg.png'
import { FiArrowUpRight } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import TitleSection from '../../layouts/TitleSection'
import SubTitleSection from '../../layouts/SubTitleSection'
import { platformInfos } from '../../lib/data'
import { MdOutlineFileDownload } from 'react-icons/md'
import cv from './../../assets/yusuf-resume-pdf.pdf'
import Avatar from '../../layouts/Avatar'

const Intro: React.FC = () => {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-8 md:gap-0">
        <div className="flex flex-col gap-1">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <TitleSection>Yousuf Abdi</TitleSection>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <SubTitleSection>I write code and have fun.</SubTitleSection>
          </motion.div>
        </div>

        <div className="flex flex-col md:flex-row md:items-center md:gap-5 md:mt-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Avatar img={profileImg} customClasses="h-24 w-24 rounded-full " />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col gap-4 mt-8 md:mt-0"
          >
            {platformInfos.map((info) => (
              <div
                className="flex items-center gap-1 text-lightSecondary dark:text-darkSecondary"
                key={info.id}
              >
                <div className="flex items-center gap-3">
                  <span>{info.icon}</span>
                  <motion.span
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    {info.info}
                  </motion.span>
                </div>
                <span>{info.name}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="max-w-lg">
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lightPrimary dark:text-darkPrimary font-medium text-sm"
        >
          Hi, I'm <span className="uppercase">Yousuf Abdi</span>, a software
          engineer who loves building cool things with code. In addition to
          coding, I also make Blogging where I focus on technology.
        </motion.p>
      </div>

      <div className="flex flex-col gap-3 md:flex-row md:gap-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <a
            href="mailto:yousufabdi34@gmail.com"
            className="flex items-center gap-2 md:gap-3 text-lightSecondary dark:text-darkSecondary hover:text-lightPrimary dark:hover:text-darkPrimary transition-colors duration-300 ease-in-out"
          >
            <FiArrowUpRight />
            <span>Email me</span>
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Link
            to="/links"
            className="flex items-center gap-2 md:gap-3 text-lightSecondary dark:text-darkSecondary hover:text-lightPrimary dark:hover:text-darkPrimary transition-colors duration-300 ease-in-out"
          >
            <FiArrowUpRight />
            <span>More ways to connect</span>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-lightSecondary dark:text-darkSecondary"
        >
          <a
            href={cv}
            download
            className="flex items-center gap-2 md:gap-3 hover:text-lightPrimary dark:hover:text-darkPrimary transition-colors duration-300 ease-in-out"
          >
            <MdOutlineFileDownload size={19} />
            <span>Download CV</span>
          </a>
        </motion.div>
      </div>
    </div>
  )
}

export default Intro
