import React from 'react'

type BlogTitleProps = {
  children: React.ReactNode
}

const BlogTitle: React.FC<BlogTitleProps> = ({ children }) => {
  return (
    <h1 className="text-lightPrimary dark:text-darkPrimary text-sm font-bold capitalize">
      {children}
    </h1>
  )
}

export default BlogTitle
