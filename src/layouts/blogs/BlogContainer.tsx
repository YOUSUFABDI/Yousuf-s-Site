import React, { ReactNode } from 'react'

type BlogContainerPropsType = {
  children: ReactNode
}

const BlogContainer: React.FC<BlogContainerPropsType> = ({ children }) => {
  return <div className="flex flex-col my-14">{children}</div>
}

export default BlogContainer
