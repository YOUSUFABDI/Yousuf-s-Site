import React, { ReactNode } from 'react'
import { FiArrowUpRight } from 'react-icons/fi'

type LinkTypeProps = {
  icon: ReactNode
  iconName: string
  href: string | undefined
}

const Link: React.FC<LinkTypeProps> = ({ icon, iconName, href }) => {
  return (
    <a
      href={href}
      target="_blank"
      className="flex items-center justify-between text-lightPrimary dark:text-darkPrimary border dark:border-darkSecondary/50 w-full p-4 rounded-md hover:opacity-50 transition-opacity duration-[0.4s] ease-in-out"
    >
      <div className="flex items-center gap-3">
        {icon}
        <span>{iconName}</span>
      </div>
      <FiArrowUpRight />
    </a>
  )
}

export default Link
