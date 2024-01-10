"use client"

import React from "react"
import LinksIntro from "./LinksIntro"
import Link from "./Link"
import { FaEnvelope, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa"

const Links: React.FC = () => {
  return (
    <div className="flex flex-col items-center gap-10 my-14">
      <LinksIntro />

      <div className="flex flex-col gap-5 w-full">
        <Link
          icon={<FaEnvelope />}
          iconName="Email(General)"
          href="mailto:yousufabdi34@gmail.com"
        />
        <Link
          icon={<FaGithub />}
          iconName="GitHub"
          href="https://github.com/YOUSUFABDI"
        />
        <Link
          icon={<FaInstagram />}
          iconName="Instagram"
          href="https://www.instagram.com/yusuf_cabd/"
        />
        <Link
          icon={<FaLinkedin />}
          iconName="LinkedIn"
          href="https://www.linkedin.com/in/yousuf-abdi-743194279/"
        />
      </div>
    </div>
  )
}

export default Links
