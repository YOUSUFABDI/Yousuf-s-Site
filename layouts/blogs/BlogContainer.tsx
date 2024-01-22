import React from "react"
import { BlogContainerPropsDT } from "@/lib/types"

const BlogContainer: React.FC<BlogContainerPropsDT> = ({ children }) => {
  return <div className="flex flex-col my-14">{children}</div>
}

export default BlogContainer
