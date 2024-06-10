import React from "react"
import { FiArrowUpRight } from "react-icons/fi"
import { motion } from "framer-motion"
import Title from "@/layouts/Title"
import SubTitle from "@/layouts/SubTitle"
import { MdOutlineFileDownload, MdOutlineShowChart } from "react-icons/md"
import Link from "next/link"
import { AiFillEye, AiFillGithub } from "react-icons/ai"
import { IntroPropsDT } from "@/lib/types"
import useSWR from "swr"
import Fetcher from "@/lib/fetcher"
import FlipNumber from "@/layouts/FlipNumber"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"

const Intro: React.FC<IntroPropsDT> = ({ totalPost, totalViews }) => {
  const { data } = useSWR(`/api/github`, Fetcher, {
    revalidateOnFocus: false,
  })
  const repos = data?.repos

  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-8 md:gap-0">
        <div className="flex flex-col gap-1">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Title>Yousuf Abdi M.</Title>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <SubTitle>I write code and have fun.</SubTitle>
          </motion.div>
        </div>

        <div className="flex flex-col md:flex-row md:items-center md:gap-5 md:mt-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Avatar className="bg-[#2A2A2A] h-24 w-24 rounded-full">
              <AvatarImage
                className="aspect-square object-cover object-top"
                src="https://blog.yusufdev.com/images/yu.png"
              />
              <AvatarFallback className="bg-transparent dark:bg-transparent text-white">
                Img
              </AvatarFallback>
            </Avatar>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col gap-4 mt-8 md:mt-0"
          >
            <Link
              href="https://github.com/YOUSUFABDI"
              target="blank"
              className="flex items-center gap-1 text-lightSecondary dark:text-darkSecondary hover:opacity-75 transition-opacity duration-150"
            >
              <div className="flex items-center gap-3">
                <span>
                  <AiFillGithub size={18} />
                </span>
                <motion.span
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <FlipNumber>{repos}</FlipNumber>
                </motion.span>
              </div>
              <span>Repository</span>
            </Link>

            <Link
              href="/blog"
              className="flex items-center gap-1 text-lightSecondary dark:text-darkSecondary hover:opacity-75 transition-opacity duration-150"
            >
              <div className="flex items-center gap-3">
                <span>
                  <MdOutlineShowChart size={18} />
                </span>
                <motion.span
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <FlipNumber>{totalPost}</FlipNumber>
                </motion.span>
              </div>
              <span>Total Blog</span>
            </Link>

            <Link
              href="/blog"
              className="flex items-center gap-1 text-lightSecondary dark:text-darkSecondary hover:opacity-75 transition-opacity duration-150"
            >
              <div className="flex items-center gap-3">
                <span>
                  <AiFillEye size={18} />
                </span>
                <motion.span
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <FlipNumber>{totalViews}</FlipNumber>
                </motion.span>
              </div>
              <span>Total Blog Views</span>
            </Link>
          </motion.div>
        </div>
      </div>

      <div className="max-w-lg">
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lightPrimary dark:text-darkPrimary font-medium text-sm"
        >
          Hi, I'm <span className="uppercase">Yousuf Abdi</span>, a software
          engineer who loves building cool things with code. In addition to
          coding, I also make Blogging where I focus on technology.
        </motion.p>
      </div>

      <div className="flex flex-col gap-3 md:flex-row md:gap-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <a
            href="mailto:yousufabdi34@gmail.com"
            className="flex items-center gap-2 md:gap-3 text-lightSecondary dark:text-darkSecondary hover:text-lightPrimary dark:hover:text-darkPrimary transition-colors duration-300 ease-in-out"
          >
            <FiArrowUpRight />
            <span>Email me</span>
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Link
            href="/links"
            className="flex items-center gap-2 md:gap-3 text-lightSecondary dark:text-darkSecondary hover:text-lightPrimary dark:hover:text-darkPrimary transition-colors duration-300 ease-in-out"
          >
            <FiArrowUpRight />
            <span>More ways to connect</span>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-lightSecondary dark:text-darkSecondary"
        >
          <a
            href="./yusuf-resume-pdf.pdf"
            download
            className="flex items-center gap-2 md:gap-3 hover:text-lightPrimary dark:hover:text-darkPrimary transition-colors duration-300 ease-in-out"
          >
            <MdOutlineFileDownload size={19} />
            <span>Download CV</span>
          </a>
        </motion.div>
      </div>
    </div>
  )
}

export default Intro
