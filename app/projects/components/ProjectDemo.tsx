"use client"

import React from "react"
import { motion } from "framer-motion"
import { ProjectDemoPropsDT } from "@/lib/types"

const ProjectDemo: React.FC<ProjectDemoPropsDT> = ({ images }) => {
  return (
    <motion.div
      className="flex flex-col gap-10"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
    >
      {images.map((image, index) => (
        <div className="flex justify-center bg-[#E8E8E8] dark:bg-projectBg h-[233px] md:h-[400px] rounded-md">
          <img
            className="object-contain"
            key={index}
            src={image}
            alt={`${image}${index}`}
          />
        </div>
      ))}
    </motion.div>
  )
}

export default ProjectDemo
