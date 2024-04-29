import React from "react"
import Avatar from "../../../layouts/Avatar"
import Title from "@/layouts/Title"

const LinksIntro: React.FC = () => {
  return (
    <div className="flex flex-col gap-5 items-center">
      <Avatar
        img="https://blog.yusufdev.com/images/yusuf.png"
        customClasses="h-24 w-24 rounded-full"
        width={24}
        height={24}
      />

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
