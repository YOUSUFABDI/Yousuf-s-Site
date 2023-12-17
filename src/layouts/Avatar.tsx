import React from 'react'

type AvatarTypeProps = {
  img: string
}

const Avatar: React.FC<AvatarTypeProps> = ({ img }) => {
  return (
    <img
      className="h-24 w-24 rounded-full object-cover object-top bg-[#2A2A2A]"
      src={img}
      alt="yusuf img"
    />
  )
}

export default Avatar
