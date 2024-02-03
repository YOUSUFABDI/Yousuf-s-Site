import React from "react"
import Avatar from "../../../../layouts/Avatar"
import SubTitle from "../../../../layouts/SubTitle"
import { BlogInroPropsDT } from "@/lib/types"

const BlogInro: React.FC<BlogInroPropsDT> = ({ views, date, img, name }) => {
  return (
    <div className="flex items-center gap-5">
      <Avatar
        img={img}
        customClasses="h-[50px] w-[50px] rounded-full"
        width={50}
        height={50}
      />
      <div className="flex flex-col gap-[2px]">
        <h1 className="text-lightPrimary dark:text-darkPrimary text-sm font-bold uppercase">
          {name}
        </h1>
        <SubTitle>
          {date} • {views} views
        </SubTitle>
      </div>
    </div>
  )
}

export default BlogInro
