import { BlogTitlePropsDT } from "@/lib/types"
import React from "react"

const BlogTitle: React.FC<BlogTitlePropsDT> = ({ children }) => {
  return (
    <h1 className="text-lightPrimary dark:text-darkPrimary text-sm font-bold capitalize">
      {children}
    </h1>
  )
}

export default BlogTitle
