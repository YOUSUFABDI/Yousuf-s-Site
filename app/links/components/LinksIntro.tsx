import React from "react"
import Title from "@/layouts/Title"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const LinksIntro: React.FC = () => {
  return (
    <div className="flex flex-col gap-5 items-center">
      <Avatar className="bg-[#2A2A2A] h-24 w-24 rounded-full">
        <AvatarImage
          className="object-cover object-center"
          src="https://blog.yusufdev.com/images/yu.png"
        />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>

      <div className="flex flex-col gap-1 items-center">
        <Title>Yousuf Abdi</Title>
        <p className="max-w-sm mx-auto text-center text-lightSecondary dark:text-darkSecondary">
          Software engineer who loves building cool things with code. In
          addition to coding, I also make Blog posts. Find me elsewhere{" "}
          <a href="http://instagram.com/yusuf_cabd" target="_blank">
            @yusuf_cabd
          </a>
        </p>
      </div>
    </div>
  )
}

export default LinksIntro
