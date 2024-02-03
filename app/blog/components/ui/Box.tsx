import { BoxPropsDT } from "@/lib/types"
import React from "react"

const Box: React.FC<BoxPropsDT> = ({ children }) => {
  return <div className="flex flex-col gap-5">{children}</div>
}

export default Box
