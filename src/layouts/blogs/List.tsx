import React, { ReactNode } from 'react'

type ListPropsType = {
  children: ReactNode
}

const List: React.FC<ListPropsType> = ({ children }) => {
  return (
    <ul className="text-lightSecondary dark:text-darkSecondary text-sm">
      {children}
    </ul>
  )
}

export default List
