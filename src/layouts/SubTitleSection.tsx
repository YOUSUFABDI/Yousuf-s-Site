import React from 'react'

type SubTitleSectionProps = {
  children: React.ReactNode
}

const SubTitleSection: React.FC<SubTitleSectionProps> = ({ children }) => {
  return (
    <h3 className="text-lightSecondary dark:text-darkSecondary text-sm">
      {children}
    </h3>
  )
}

export default SubTitleSection
