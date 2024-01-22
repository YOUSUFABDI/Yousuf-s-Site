import React from "react"
import { SectionPropsDT } from "@/lib/types"

const Section = ({ children, customeClass }: SectionPropsDT) => {
  return <div className={`flex ${customeClass}`}>{children}</div>
}

export default Section
