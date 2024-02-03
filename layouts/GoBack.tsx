import React from "react"
import { GoBackPropsDT } from "@/lib/types"
import Link from "next/link"
import { IoIosArrowRoundBack } from "react-icons/io"

const GoBack: React.FC<GoBackPropsDT> = ({ text, link }) => {
  return (
    <Link
      href={`/${link}`}
      className="flex items-center gap-1 mb-4  relative w-fit text-lightSecondary dark:text-lightSecondary hover:text-lightPrimary dark:hover:text-darkPrimary group transition-colors duration-150 ease-in-out"
    >
      <IoIosArrowRoundBack className="text-4xl text-lightSecondary dark:text-lightSecondary group-hover:text-lightPrimary dark:group-hover:text-darkPrimary" />
      <span className="text-lightSecondary dark:text-lightSecondary group-hover:text-lightPrimary dark:group-hover:text-darkPrimary">
        {text}
      </span>
    </Link>
  )
}

export default GoBack
