import React from "react"
import { SubTitlePropsDT } from "@/lib/types"

const SubTitle: React.FC<SubTitlePropsDT> = ({ children }) => {
  return (
    <h3 className="text-lightSecondary dark:text-darkSecondary text-sm">
      {children}
    </h3>
  )
}

export default SubTitle
