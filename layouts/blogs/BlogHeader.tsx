import React, { ReactNode } from 'react'

type BlogHeaderPropsType = {
  children: ReactNode
}

const BlogHeader: React.FC<BlogHeaderPropsType> = ({ children }) => {
  return <div className="flex flex-col gap-3 mb-10">{children}</div>
}

export default BlogHeader
