import React from 'react'
import Avatar from '../Avatar'
import SubTitleSection from '../SubTitleSection'

type BlogInroProps = {
  views: number
  date: string
}

const BlogInro: React.FC<BlogInroProps> = ({ views, date }) => {
  return (
    <div className="flex items-center gap-5">
      <Avatar
        img="./images/yusuf-n-bg.png"
        customClasses="h-[50px] w-[50px] rounded-full"
      />
      <div className="flex flex-col gap-[2px]">
        <h1 className="text-lightPrimary dark:text-darkPrimary text-sm font-bold uppercase">
          Yousuf Abdi
        </h1>
        <SubTitleSection>
          {date} . {views} views
        </SubTitleSection>
      </div>
    </div>
  )
}

export default BlogInro
