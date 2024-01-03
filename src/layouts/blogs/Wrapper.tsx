import React, { ReactNode } from 'react'

type WrapperPropsType = {
  children: ReactNode
}

const Wrapper: React.FC<WrapperPropsType> = ({ children }) => {
  return <div className="flex flex-col gap-5 mt-8 mb-6">{children}</div>
}

export default Wrapper
