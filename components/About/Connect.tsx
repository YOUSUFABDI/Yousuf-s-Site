import React from "react"
import Title from "@/layouts/Title"
import { motion } from "framer-motion"
import { FaEnvelope, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa"
import { FiArrowUpRight } from "react-icons/fi"

const Connect: React.FC = () => {
  return (
    <motion.div
      className="flex flex-col gap-5 md:flex-row md:gap-[12.5rem]"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="flex flex-[0.20]">
        <Title>Connect</Title>
      </div>

      <div className="flex flex-col gap-5 flex-1 text-sm text-lightPrimary dark:text-darkPrimary">
        <p>
          Have a question or just want to chat? Feel free to email me. Try
          finding me anywhere else at{" "}
          <a href="http://instagram.com/yousuf_cabd">@yusuf_cabd</a>
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-7">
          <a
            href="mailto:yousufabdi34@gmail.com"
            className="flex items-center justify-between border dark:border-darkSecondary/50 w-full p-4 rounded-md hover:opacity-50 transition-opacity duration-[0.4s] ease-in-out"
          >
            <div className="flex items-center gap-3">
              <FaEnvelope />
              <span>Email(General)</span>
            </div>
            <FiArrowUpRight />
          </a>
          <a
            href="https://github.com/YOUSUFABDI"
            target="_blank"
            className="flex items-center justify-between border dark:border-darkSecondary/50 w-full p-4 rounded-md hover:opacity-50 transition-opacity duration-[0.4s] ease-in-out"
          >
            <div className="flex items-center gap-3">
              <FaGithub />
              <span>GitHub</span>
            </div>
            <FiArrowUpRight />
          </a>
          <a
            href="https://www.instagram.com/yusuf_cabd/"
            target="_blank"
            className="flex items-center justify-between border dark:border-darkSecondary/50 w-full p-4 rounded-md hover:opacity-50 transition-opacity duration-[0.4s] ease-in-out"
          >
            <div className="flex items-center gap-3">
              <FaInstagram />
              <span>Instagram</span>
            </div>
            <FiArrowUpRight />
          </a>
          <a
            href="https://www.linkedin.com/in/yousuf-abdi-743194279/"
            target="_blank"
            className="flex items-center justify-between border dark:border-darkSecondary/50 w-full p-4 rounded-md hover:opacity-50 transition-opacity duration-[0.4s] ease-in-out"
          >
            <div className="flex items-center gap-3">
              <FaLinkedin />
              <span>LinkedIn</span>
            </div>
            <FiArrowUpRight />
          </a>
        </div>
      </div>
    </motion.div>
  )
}

export default Connect
