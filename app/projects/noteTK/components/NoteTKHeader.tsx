import React from "react"
import SubTitle from "@/layouts/SubTitle"
import Title from "@/layouts/Title"
import { motion } from "framer-motion"
import Link from "next/link"

const NoteTKHeader: React.FC = () => {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-center gap-3 relative w-fit">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <SubTitle>2024</SubTitle>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <SubTitle>&#x2022;</SubTitle>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Link
            href="https://github.com/YOUSUFABDI/NoteTakerRN"
            target="blank"
            className="group text-sm transition-colors duration-150 ease-in-out"
          >
            <span className="group-hover:text-lightPrimary dark:group-hover:text-darkPrimary underline">
              Visit project
            </span>
          </Link>
        </motion.div>
      </div>

      <motion.div
        className="flex flex-col gap-3"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Title>Note Taker App</Title>
        <p>
          Store your notes and access any time any where, start exploring it
          will be cool 😎.
        </p>
      </motion.div>
    </div>
  )
}

export default NoteTKHeader
