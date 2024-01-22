import React from "react"
import { ListPropsDT } from "@/lib/types"

const List: React.FC<ListPropsDT> = ({ children }) => {
  return (
    <ul className="text-lightSecondary dark:text-darkSecondary text-sm">
      {children}
    </ul>
  )
}

export default List
