import React from 'react'
import BargelleHeader from './BargelleHeader'
import BaargelleDemo from './BaargelleDemo'
import BaargelleTags from './BaargelleTags'
import Connect from './../../layouts/Connect'
import GoBack from '../../layouts/GoBack'
import { motion } from 'framer-motion'

const Bargelle: React.FC = () => {
  return (
    <motion.div className="flex flex-col gap-10 my-14 text-lightSecondary dark:text-darkSecondary">
      <BargelleHeader />
      <BaargelleDemo />
      <BaargelleTags />
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <Connect />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <GoBack link="projects" text="All projects" />
      </motion.div>
    </motion.div>
  )
}

export default Bargelle
