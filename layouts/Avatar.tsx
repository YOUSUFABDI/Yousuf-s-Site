import React from "react"
import Image from "next/image"
import { AvatarPropsDT } from "@/lib/types"

const Avatar: React.FC<AvatarPropsDT> = ({
  img,
  customClasses,
  height,
  width,
}) => {
  return (
    <img
      className={`object-cover object-top bg-[#2A2A2A] ${customClasses}`}
      src={img}
      width={width}
      height={height}
      alt="img"
    />
  )
}

export default Avatar
