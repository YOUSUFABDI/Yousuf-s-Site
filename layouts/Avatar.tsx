import React from "react"
import Image from "next/image"

type AvatarTypeProps = {
  img: string
  customClasses?: string
  height?: number
  width?: number
}

const Avatar: React.FC<AvatarTypeProps> = ({
  img,
  customClasses,
  height,
  width,
}) => {
  return (
    <Image
      className={`object-cover object-top bg-[#2A2A2A] ${customClasses}`}
      src={img}
      width={width}
      height={height}
      alt="img"
    />
  )
}

export default Avatar
