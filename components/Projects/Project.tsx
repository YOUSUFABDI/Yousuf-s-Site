import React from "react"
import Title from "@/layouts/Title"
import SubTitle from "@/layouts/SubTitle"
import { motion } from "framer-motion"
import Link from "next/link"

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
      <Link
        href={url}
        className="flex flex-col gap-5 md:flex-row cursor-pointer"
      >
        <div className="flex justify-center flex-[0.3] bg-[#E8E8E8] dark:bg-projectBg rounded-md w-full md:w-fit px-8 pt-7">
          <img
            className="object-contain self-end"
            src={img}
            alt="project-image"
          />
        </div>

        <div className="flex flex-col gap-5 flex-1">
          <div className="flex items-center gap-3">
            <Title>{name}</Title>
            <SubTitle>.{date}</SubTitle>
          </div>
          <p className="text-lightSecondary dark:text-darkSecondary">{desc}</p>
        </div>
      </Link>
    </motion.div>
  )
}

export default Project
