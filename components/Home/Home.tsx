"use client"

import React from "react"
import Intro from "./Intro"
import TopViewedPosts from "./TopViewedPosts"
import { HomePropsDT } from "@/lib/types"

const Home: React.FC<HomePropsDT> = ({ totalPost, totalViews }) => {
  return (
    <div className="flex flex-col gap-[4.375rem] md:gap-20 my-14">
      <Intro totalPost={totalPost} totalViews={totalViews} />
      <TopViewedPosts />
    </div>
  )
}

export default Home
