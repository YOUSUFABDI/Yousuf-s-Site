import React from 'react'
import AboutHeader from './AboutHeader'
import AboutMe from './AboutMe'
import Connect from './Connect'
import Work from './Work'

const About: React.FC = () => {
  return (
    <div className="flex flex-col gap-[4.375rem] md:gap-20 my-14">
      <AboutHeader />
      <div className="flex flex-col gap-16 md:gap-36">
        <AboutMe />
        <Connect />
        <Work />
      </div>
    </div>
  )
}

export default About
