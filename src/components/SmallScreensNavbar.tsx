import React from 'react'
import { NavLink } from 'react-router-dom'
import { links } from '../lib/data'

type SmallScreensNavbarProps = {
  setIsMenuOpen: (isMenuOpen: boolean) => void
  isMenuOpen: boolean
}

const SmallScreensNavbar: React.FC<SmallScreensNavbarProps> = ({
  isMenuOpen,
  setIsMenuOpen,
}) => {
  return (
    <nav
      className={`lg:hidden ${
        isMenuOpen
          ? 'flex flex-col items-start gap-6 text-sm bg-white dark:bg-black shadow-xl rounded-md w-44 p-4 absolute top-10'
          : 'hidden'
      }`}
    >
      {links.map((link) => (
        <NavLink
          to={link.to}
          onClick={() => {
            setIsMenuOpen(false)
          }}
          className={({ isActive }) =>
            'hover:text-lightPrimary transition-colors duration-200 ease-in-out dark:hover:text-darkPrimary dark:text-darkSecondary' +
            (isActive ? ' text-lightPrimary font-medium dark:text-white' : '')
          }
          key={link.id}
        >
          {link.name}
        </NavLink>
      ))}
    </nav>
  )
}

export default SmallScreensNavbar
