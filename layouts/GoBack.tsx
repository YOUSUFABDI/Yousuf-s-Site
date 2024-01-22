import { GoBackPropsDT } from "@/lib/types"
import Link from "next/link"
import React from "react"
import { IoIosArrowRoundBack } from "react-icons/io"

const GoBack: React.FC<GoBackPropsDT> = ({ text, link }) => {
  return (
    <Link
      href={`/${link}`}
      className="flex items-center gap-1 mb-4  relative w-fit text-lightSecondary dark:text-lightSecondary hover:text-lightPrimary dark:hover:text-darkPrimary group transition-colors duration-150 ease-in-out"
    >
      <IoIosArrowRoundBack className="text-4xl text-lightSecondary dark:text-lightSecondary group-hover:text-lightPrimary dark:group-hover:text-darkPrimary" />
      <span>{text}</span>
      <span className="border-b border-lightSecondary dark:border-darkSecondary h-[1px] w-[130px] pb-0 absolute bottom-1 left-1 right-0 group-hover:border-lightPrimary dark:group-hover:border-darkPrimary"></span>
    </Link>
  )
}

export default GoBack
