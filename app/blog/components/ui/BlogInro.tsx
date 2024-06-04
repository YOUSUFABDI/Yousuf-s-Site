import React from "react"
import SubTitle from "../../../../layouts/SubTitle"
import { BlogInroPropsDT } from "@/lib/types"
import FlipNumber from "@/layouts/FlipNumber"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const BlogInro: React.FC<BlogInroPropsDT> = ({ views, date, img, name }) => {
  return (
    <div className="flex items-center gap-5">
      <Avatar className="h-[50px] w-[50px] rounded-full bg-[#2A2A2A]">
        <AvatarImage className="object-cover object-center" src={img} />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <div className="flex flex-col gap-[2px]">
        <h1 className="text-lightPrimary dark:text-darkPrimary text-sm font-bold uppercase">
          {name}
        </h1>
        <SubTitle>
          {date} • <FlipNumber>{views}</FlipNumber> views
        </SubTitle>
      </div>
    </div>
  )
}

export default BlogInro
