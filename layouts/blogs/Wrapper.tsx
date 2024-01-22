import React from "react"
import { WrapperPropsDT } from "@/lib/types"

const Wrapper: React.FC<WrapperPropsDT> = ({ children }) => {
  return <div className="flex flex-col gap-5 mt-8 mb-6">{children}</div>
}

export default Wrapper
