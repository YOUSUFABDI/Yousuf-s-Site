import { TitlePropsDT } from "@/lib/types"
import React from "react"

const Title: React.FC<TitlePropsDT> = ({ children }) => {
  return (
    <h1 className="text-lightPrimary dark:text-darkPrimary text-sm font-bold uppercase">
      {children}
    </h1>
  )
}

export default Title
