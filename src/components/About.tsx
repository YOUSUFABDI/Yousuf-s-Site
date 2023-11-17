import React from 'react'
import TitleSection from '../layouts/TitleSection'
import SubTitleSection from '../layouts/SubTitleSection'
import { aboutMe } from '../lib/data'
import { FaEnvelope, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { FiArrowUpRight } from 'react-icons/fi'
import rasiinLogo from './../assets/images/rasin-logo.png'
import { motion } from 'framer-motion'

const About: React.FC = () => {
  return (
    <motion.div
      className="flex flex-col gap-[4.375rem] md:gap-20 my-14"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <div className="flex flex-col gap-1">
        <TitleSection>About Me</TitleSection>
        <SubTitleSection>Slightly more than that</SubTitleSection>
      </div>

      <div className="flex flex-col gap-16 md:gap-36">
        {/* about */}
        <div className="flex flex-col gap-5 md:flex-row md:gap-[200px]">
          <div className="flex flex-[0.20]">
            <TitleSection>About</TitleSection>
          </div>

          <div className="flex flex-col flex-1 gap-5 text-sm  text-lightPrimary dark:text-darkPrimary">
            {aboutMe.map((info) => (
              <span key={info.id}>{info.info}</span>
            ))}
          </div>
        </div>
        {/* about */}

        {/* connect */}
        <div className="flex flex-col gap-5 md:flex-row md:gap-[200px]">
          <div className="flex flex-[0.20]">
            <TitleSection>Connect</TitleSection>
          </div>

          <div className="flex flex-col gap-5 flex-1 text-sm text-lightPrimary dark:text-darkPrimary">
            <p>
              Have a question or just want to chat? Feel free to email me. Try
              finding me anywhere else at @yousufabdi
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-7">
              <a
                href="mailto:yousufabdi34@gmail.com"
                className="flex items-center justify-between border border-lightSecondary/50 dark:border-darkSecondary/50 w-full p-4 rounded-md hover:opacity-50 transition-opacity duration-[0.4s] ease-in-out"
              >
                <div className="flex items-center gap-3">
                  <FaEnvelope />
                  <span>Email(General)</span>
                </div>
                <FiArrowUpRight />
              </a>
              <a
                href="https://github.com/YOUSUFABDI"
                target="_blank"
                className="flex items-center justify-between border border-lightSecondary/50 dark:border-darkSecondary/50 w-full p-4 rounded-md hover:opacity-50 transition-opacity duration-[0.4s] ease-in-out"
              >
                <div className="flex items-center gap-3">
                  <FaGithub />
                  <span>GitHub</span>
                </div>
                <FiArrowUpRight />
              </a>
              <a
                href="https://www.instagram.com/yusuf_cabd/"
                target="_blank"
                className="flex items-center justify-between border border-lightSecondary/50 dark:border-darkSecondary/50 w-full p-4 rounded-md hover:opacity-50 transition-opacity duration-[0.4s] ease-in-out"
              >
                <div className="flex items-center gap-3">
                  <FaInstagram />
                  <span>Instagram</span>
                </div>
                <FiArrowUpRight />
              </a>
              <a
                href="https://www.linkedin.com/in/yousuf-abdi-743194279/"
                target="_blank"
                className="flex items-center justify-between border border-lightSecondary/50 dark:border-darkSecondary/50 w-full p-4 rounded-md hover:opacity-50 transition-opacity duration-[0.4s] ease-in-out"
              >
                <div className="flex items-center gap-3">
                  <FaLinkedin />
                  <span>LinkedIn</span>
                </div>
                <FiArrowUpRight />
              </a>
            </div>
          </div>
        </div>
        {/* connect */}

        {/* work */}
        <div className="flex flex-col gap-5 md:flex-row md:gap-[200px]">
          <div className="flex flex-[0.20]">
            <TitleSection>Work</TitleSection>
          </div>

          <div className="flex flex-col flex-1 gap-5 text-sm  text-lightPrimary dark:text-darkPrimary">
            <div className="flex flex-col gap-5">
              <span>1+ years of professional development experience.</span>
              <span>
                I began my professional career at Rasin Tech, one of the largest
                ICT tech companies in Somalia.
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
        </div>
        {/* work */}
      </div>
    </motion.div>
  )
}

export default About
