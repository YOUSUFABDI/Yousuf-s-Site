import React from 'react'
import SubTitleSection from '../../layouts/SubTitleSection'
import { Link } from 'react-router-dom'
import TitleSection from '../../layouts/TitleSection'

const BargelleHeader: React.FC = () => {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-center gap-3 relative w-fit">
        <SubTitleSection>2023</SubTitleSection>
        <SubTitleSection>.</SubTitleSection>
        <Link
          to=""
          className="group text-sm transition-colors duration-150 ease-in-out"
        >
          <span className="group-hover:text-lightPrimary dark:group-hover:text-darkPrimary">
            Visit project
          </span>
          <span className="border-b border-lightSecondary dark:border-darkSecondary h-[1px] w-[83px] absolute bottom-0 right-0 group-hover:border-lightPrimary dark:group-hover:border-darkPrimary"></span>
        </Link>
      </div>

      <div className="flex flex-col gap-3">
        <TitleSection>Baargeelle UC</TitleSection>
        <p>
          Baargelle uc is platform that pubg players in somalia can buy uc or
          pubg money using evc plus. i collaborate this project with another
          developer.
        </p>
      </div>
    </div>
  )
}

export default BargelleHeader
