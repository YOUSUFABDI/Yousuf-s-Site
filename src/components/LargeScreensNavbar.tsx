import React from 'react'
import { NavLink } from 'react-router-dom'
import { links } from '../lib/data'

const LargeScreensNavbar: React.FC = () => {
  return (
    <nav className="hidden md:flex items-center gap-6 text-sm">
      {links.map((link) => (
        <NavLink
          to={link.to}
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

export default LargeScreensNavbar
