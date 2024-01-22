import { ALinkPropsDT } from "@/lib/types"
import React from "react"

const ALink = ({ children, to }: ALinkPropsDT) => {
  return (
    <a
      className="hover:text-lightPrimary dark:hover:text-darkPrimary hover:underline font-bold"
      href={to}
      target="blank"
    >
      {children}
    </a>
  )
}

export default ALink
