import React from "react"
import SubTitle from "./SubTitle"
import Link from "next/link"
import { getCurrentYear } from "@/lib/utils"

const Footer: React.FC = () => {
  return (
    <footer className="flex flex-col items-center backdrop-blur-md w-full py-5 fixed bottom-0 left-0 right-0 bg-white/70 dark:bg-darkBg/70">
      <div className="flex items-center gap-1">
        <span className="text-lightSecondary dark:text-darkSecondary">©</span>
        <SubTitle>YOUSUF {getCurrentYear()}</SubTitle>
      </div>
      <div className="flex items-center justify-center gap-2 mt-1">
        <Link
          href={"/privacy-policy"}
          className="text-sm group text-lightSecondary dark:text-darkSecondary relative hover:text-lightPrimary hover:dark:text-darkPrimary transition-colors duration-200 ease-in underline"
        >
          <span>Privacy Policy</span>
        </Link>
        <span className=" group text-lightSecondary dark:text-darkSecondary">
          &#x2022;
        </span>
        <Link
          href={"/terms-and-conditions"}
          className="text-sm group text-lightSecondary dark:text-darkSecondary relative hover:text-lightPrimary hover:dark:text-darkPrimary transition-colors duration-200 ease-in underline"
        >
          <span>Terms and conditions</span>
        </Link>
      </div>
    </footer>
  )
}

export default Footer
