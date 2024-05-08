import React from "react"
import { ParagraphPropsDT } from "@/lib/types"

const Paragraph: React.FC<ParagraphPropsDT> = ({
  children,
  customClasses,
  ...props
}) => {
  return (
    <p
      {...props}
      className={`text-lightSecondary dark:text-darkSecondary text-sm ${customClasses}`}
    >
      {children}
    </p>
  )
}

export default Paragraph
