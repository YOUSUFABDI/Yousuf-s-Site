import { TitlePropsDT } from "@/lib/types"
import React from "react"

const Title: React.FC<TitlePropsDT> = ({
  children,
  customClasses,
  ...props
}) => {
  return (
    <h1
      {...props}
      className={`text-lightPrimary dark:text-darkPrimary text-sm font-bold uppercase ${customClasses}`}
    >
      {children}
    </h1>
  )
}

export default Title
