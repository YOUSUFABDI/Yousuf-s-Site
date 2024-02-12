"use client"

import React from "react"
import AboutHeader from "./AboutHeader"
import AboutMe from "./AboutMe"
import Connect from "./Connect"
import Work from "./Work"
import Skills from "./Skills"

const About: React.FC = () => {
  return (
    <div className="flex flex-col gap-[4.375rem] md:gap-20 my-14">
      <AboutHeader />
      <div className="flex flex-col gap-16 md:gap-36">
        <AboutMe />
        <Skills />
        <Connect />
        <Work />
      </div>
    </div>
  )
}

export default About
