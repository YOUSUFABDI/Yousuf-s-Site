import React from 'react'
import SubTitleSection from '../../layouts/SubTitleSection'
import TitleSection from '../../layouts/TitleSection'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const SomBDHeader: React.FC = () => {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-center gap-3 relative w-fit">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <SubTitleSection>2023</SubTitleSection>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <SubTitleSection>.</SubTitleSection>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Link
            to=""
            className="group text-sm transition-colors duration-150 ease-in-out"
          >
            <span className="group-hover:text-lightPrimary dark:group-hover:text-darkPrimary">
              Visit project
            </span>
            <span className="border-b border-lightSecondary dark:border-darkSecondary h-[1px] w-[83px] absolute bottom-0 right-0 group-hover:border-lightPrimary dark:group-hover:border-darkPrimary"></span>
          </Link>
        </motion.div>
      </div>

      <motion.div
        className="flex flex-col gap-3"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <TitleSection>Som Bd</TitleSection>
        <p>
          Somali Blood donation is a system that makes it easy for people to
          donate blood online in a timely manner for both donors and recipients.
        </p>
      </motion.div>
    </div>
  )
}

export default SomBDHeader
