"use client"

import React from "react"
import NoteTKHeader from "./NoteTKHeader"
import NoteTKDemo from "./NoteTKDemo"
import NoteTKTags from "./NoteTKTags"
import Connect from "@/layouts/Connect"
import GoBack from "@/layouts/GoBack"
import { motion } from "framer-motion"

const NoteTK: React.FC = () => {
  return (
    <div className="flex flex-col gap-10 my-14 text-lightSecondary dark:text-darkSecondary">
      <NoteTKHeader />
      <NoteTKDemo />
      <NoteTKTags />
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
    </div>
  )
}

export default NoteTK
