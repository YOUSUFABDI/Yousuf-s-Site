import React from 'react'

type AvatarTypeProps = {
  img: string
  customClasses?: string
}

const Avatar: React.FC<AvatarTypeProps> = ({ img, customClasses }) => {
  return (
    <img
      className={`object-cover object-top bg-[#2A2A2A] ${customClasses}`}
      src={img}
      alt="img"
    />
  )
}

export default Avatar
