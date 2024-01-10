"use client"

import React from "react"
import Intro from "./Intro"
import LastestPosts from "./LastestPosts"

const Home: React.FC = () => {
  return (
    <div className="flex flex-col gap-[4.375rem] md:gap-20 my-14">
      <Intro />
      <LastestPosts />
    </div>
  )
}

export default Home
