import React, { ReactNode } from 'react'

type BoxPropsType = {
  children: ReactNode
}

const Box: React.FC<BoxPropsType> = ({ children }) => {
  return <div className="flex flex-col gap-5">{children}</div>
}

export default Box
