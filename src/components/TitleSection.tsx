import React from 'react'

type TitleSectionProps = {
  children: React.ReactNode
}

const TitleSection: React.FC<TitleSectionProps> = ({ children }) => {
  return (
    <h1 className="text-lightPrimary dark:text-darkPrimary text-sm font-bold uppercase">
      {children}
    </h1>
  )
}

export default TitleSection
