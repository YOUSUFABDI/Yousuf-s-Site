import React from "react"
import { BsExclamationCircle } from "react-icons/bs"
import Paragraph from "./Paragraph"
import { NotePropsDT } from "@/lib/types"

const Note: React.FC<NotePropsDT> = ({ text }) => {
  return (
    <div className="flex items-center gap-3 py-4 px-5 rounded-md bg-[#E8E8E8] dark:bg-projectBg text-lightSecondary dark:text-darkSecondary">
      <BsExclamationCircle size={21} className="hidden md:flex" />
      <Paragraph>{text}</Paragraph>
    </div>
  )
}

export default Note
