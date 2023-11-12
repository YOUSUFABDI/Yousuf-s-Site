import React from 'react'
import profileImg from './../assets/images/profile 1.png'
import { FiArrowUpRight } from 'react-icons/fi'
import TitleSection from './TitleSection'
import SubTitleSection from './SubTitleSection'
import { platformInfos } from '../lib/data'

const Intro: React.FC = () => {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-8 lg:gap-0">
        <div className="flex flex-col gap-1">
          <TitleSection>Yousuf Abdi</TitleSection>
          <SubTitleSection>I write code and have fun.</SubTitleSection>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-5 lg:mt-8">
          <img className="h-20 w-20" src={profileImg} alt="profileImg" />

          <div className="flex flex-col gap-4 mt-8 lg:mt-0">
            {platformInfos.map((info) => (
              <div
                className="flex items-center gap-4 text-lightSecondary dark:text-darkSecondary"
                key={info.id}
              >
                <span>{info.icon}</span>
                <span>{info.info}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-lg">
        <p className="text-lightPrimary dark:text-darkPrimary font-medium text-sm">
          Hi, I'm <span className="uppercase">Yousuf Abdi</span>, a software
          engineer who loves building cool things with code. In addition to
          coding, i also make Blogging where i focus to tech, personal
          development and fitness.
        </p>
      </div>

      <div className="flex flex-col gap-3 lg:flex-row lg:gap-8">
        <a className="flex items-center gap-2 lg:gap-3 text-lightSecondary dark:text-darkSecondary">
          <FiArrowUpRight />
          <span>Email me</span>
        </a>
        <a className="flex items-center gap-2 lg:gap-3 text-lightSecondary dark:text-darkSecondary">
          <FiArrowUpRight />
          <span>More ways to connect</span>
        </a>
      </div>
    </div>
  )
}

export default Intro
