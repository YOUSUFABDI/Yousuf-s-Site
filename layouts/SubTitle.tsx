import React from "react"

type SubTitleProps = {
  children: React.ReactNode
}

const SubTitle: React.FC<SubTitleProps> = ({ children }) => {
  return (
    <h3 className="text-lightSecondary dark:text-darkSecondary text-sm">
      {children}
    </h3>
  )
}

export default SubTitle
