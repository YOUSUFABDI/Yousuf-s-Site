"use client"

import React from "react"
import { motion } from "framer-motion"
import { ProjectDemoPropsDT } from "@/lib/types"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

const ProjectDemo: React.FC<ProjectDemoPropsDT> = ({ images }) => {
  return (
    <motion.div
      className="flex flex-col gap-10"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
    >
      {images.map((image, index) => (
        <div
          className="flex justify-center bg-[#E8E8E8] dark:bg-projectBg h-[233px] md:h-[400px] rounded-md"
          key={index}
        >
          <Avatar className="w-[300px] h-[200px] rounded-none self-center object-contain">
            <AvatarImage className="object-contain object-center" src={image} />
            <AvatarFallback className="h-full w-full rounded-none bg-transparent dark:bg-transparent dark:text-white">
              Img
            </AvatarFallback>
          </Avatar>
        </div>
      ))}
    </motion.div>
  )
}

export default ProjectDemo
