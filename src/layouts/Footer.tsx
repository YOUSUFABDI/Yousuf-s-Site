import React from "react"
import SubTitleSection from "./SubTitleSection"
import { Link } from "react-router-dom"

const Footer: React.FC = () => {
  return (
    <footer className="flex flex-col items-center backdrop-blur-md w-full py-5 fixed bottom-0 left-0 right-0 bg-white/70 dark:bg-darkBg/70">
      <div className="flex items-center gap-1">
        <span className="text-lightSecondary dark:text-darkSecondary">©</span>
        <SubTitleSection>YOUSUF 2023</SubTitleSection>
      </div>
      <Link
        to={"/privacy"}
        className="text-sm group text-lightSecondary dark:text-darkSecondary relative hover:text-lightPrimary hover:dark:text-darkPrimary transition-colors duration-200 ease-in"
      >
        <span>Privacy Policy</span>
        <span className="border-b border-lightSecondary dark:border-darkSecondary h-[1px] w-[95px] pb-0 absolute bottom-0 left-0 right-0 group-hover:border-lightPrimary dark:group-hover:border-darkPrimary"></span>
      </Link>
    </footer>
  )
}

export default Footer
