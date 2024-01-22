import React from "react"
import { ParagraphPropsDT } from "@/lib/types"

const Paragraph: React.FC<ParagraphPropsDT> = ({ children }) => {
  return (
    <p className="text-lightSecondary dark:text-darkSecondary text-sm">
      {children}
    </p>
  )
}

export default Paragraph
