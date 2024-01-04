import React from 'react'
import Avatar from '../../layouts/Avatar'
import TitleSection from '../../layouts/TitleSection'

const LinksIntro: React.FC = () => {
  return (
    <div className="flex flex-col gap-5 items-center">
      <Avatar
        img="./images/yusuf-n-bg.png"
        customClasses="h-24 w-24 rounded-full "
      />

      <div className="flex flex-col gap-1 items-center">
        <TitleSection>Yousuf Abdi</TitleSection>
        <p className="max-w-sm mx-auto text-center text-lightSecondary dark:text-darkSecondary">
          Software engineer who loves building cool things with code. In
          addition to coding, I also make Blog posts. Find me elsewhere
          @yusuf_cabd
        </p>
      </div>
    </div>
  )
}

export default LinksIntro
