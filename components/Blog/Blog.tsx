"use client"

import React, { useEffect, useState } from "react"
import { blogPostLinks } from "../../lib/data"
import Title from "@/layouts/Title"
import SubTitle from "@/layouts/SubTitle"
import { motion } from "framer-motion"
import Link from "next/link"
import { useTheme } from "@/context/ThemeContex"

const Blog: React.FC = () => {
  const [isMobile, setIsMobile] = useState(true)

  const { theme } = useTheme()

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768) // Adjust the breakpoint as needed
    }

    // Initial check
    handleResize()

    // Add event listener for window resize
    window.addEventListener("resize", handleResize)

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <div className="flex flex-col gap-[4.375rem] my-14">
      <div className="flex flex-col gap-1">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Title>Blog</Title>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <SubTitle>
            {blogPostLinks.length} posts about tech, code, more...
          </SubTitle>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className={`h-[20rem] overflow-y-auto ${
          theme == "light" ? "light_scroll" : "dark_scroll"
        } ${isMobile ? "scrollbar-hidden" : ""}`}
      >
        {blogPostLinks.map((link) => (
          <Link
            key={link.id}
            href={link.to}
            className="flex items-center mb-10 justify-between mt-3 md:mb-7 hover:opacity-50 transition-opacity duration-[0.4s] ease-in-out"
          >
            <div className="flex flex-col gap-3 md:flex-row md:gap-20   md:flex-1 ">
              <span className="text-lightSecondary dark:text-darkSecondary md:flex-[0.20]">
                {link.createdDT}
              </span>
              <span
                style={{
                  display: "-webkit-box",
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                  WebkitLineClamp: 1,
                }}
                className="text-lightPrimary dark:text-darkPrimary font-medium overflow-hidden overflow-ellipsis md:flex-1 max-w-[50%]"
              >
                {link.name}
              </span>
            </div>
            <div className="flex md:hidden">
              <img
                className="h-[50px] max-w-[50px] object-contain"
                src={link.imgUrl}
                alt="post img"
              />
            </div>
          </Link>
        ))}
      </motion.div>
    </div>
  )
}

export default Blog
