import React from "react"
import Title from "@/layouts/Title"
import SubTitle from "@/layouts/SubTitle"
import { motion } from "framer-motion"
import Link from "next/link"
import { ProjecTypePropsDT } from "@/lib/types"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"

const Project: React.FC<ProjecTypePropsDT> = ({
  id,
  projectName,
  createdDT,
  description,
  coverImage,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className=""
    >
      <Link
        href={`projects/${id}`}
        className="flex flex-col gap-5 md:flex-row cursor-pointer hover:opacity-60  transition-opacity duration-150"
      >
        <div className="flex justify-center flex-[0.3] bg-[#E8E8E8] dark:bg-projectBg rounded-md w-full md:w-fit px-8 pt-7">
          <Avatar className="object-contain self-end rounded-none w-[200px] h-[100px]">
            <AvatarImage
              className="object-cover object-center"
              src={coverImage}
            />
            {/* <AvatarFallback>CN</AvatarFallback> */}
          </Avatar>
        </div>

        <div className="flex flex-col gap-5 flex-1">
          <div className="flex items-center gap-3">
            <Title>{projectName}</Title>
            <SubTitle>• {createdDT}</SubTitle>
          </div>
          <p className="text-lightSecondary dark:text-darkSecondary">
            {description}
          </p>
        </div>
      </Link>
    </motion.div>
  )
}

export default Project
