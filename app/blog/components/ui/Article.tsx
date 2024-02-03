import React from "react"
import { ArticlePropsDT } from "@/lib/types"

const Article: React.FC<ArticlePropsDT> = ({ children }) => {
  return <div className="flex flex-col gap-5 my-14 pagePb">{children}</div>
}

export default Article
