import React from "react"

type TitleProps = {
  children: React.ReactNode
}

const Title: React.FC<TitleProps> = ({ children }) => {
  return (
    <h1 className="text-lightPrimary dark:text-darkPrimary text-sm font-bold uppercase">
      {children}
    </h1>
  )
}

export default Title
