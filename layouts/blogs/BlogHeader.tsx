import React from "react"
import { BlogHeaderPropsDT } from "@/lib/types"

const BlogHeader: React.FC<BlogHeaderPropsDT> = ({ children }) => {
  return <div className="flex flex-col gap-3 mb-10">{children}</div>
}

export default BlogHeader
