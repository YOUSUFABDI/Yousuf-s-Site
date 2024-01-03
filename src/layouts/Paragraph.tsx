import React, { ReactNode } from 'react'

type ParagraphPropsType = {
  children: ReactNode
}

const Paragraph: React.FC<ParagraphPropsType> = ({ children }) => {
  return (
    <p className="text-lightSecondary dark:text-darkSecondary text-sm">
      {children}
    </p>
  )
}

export default Paragraph
