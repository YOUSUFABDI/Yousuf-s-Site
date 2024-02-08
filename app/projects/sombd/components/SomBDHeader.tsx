import React from "react"
import SubTitle from "@/layouts/SubTitle"
import Title from "@/layouts/Title"
import { motion } from "framer-motion"
import Link from "next/link"

const SomBDHeader: React.FC = () => {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-center gap-3 relative w-fit">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <SubTitle>2023</SubTitle>
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
            href="https://github.com/YOUSUFABDI/som-bd-system"
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
        <Title>Som Bd</Title>
        <p>
          Somali Blood donation is a system that makes it easy for people to
          donate blood online in a timely manner for both donors and recipients.
        </p>
      </motion.div>
    </div>
  )
}

export default SomBDHeader
