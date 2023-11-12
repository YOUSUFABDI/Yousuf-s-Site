import React, { useState } from 'react'
import { AiOutlinePlus } from 'react-icons/ai'
import { BsFillSunFill } from 'react-icons/bs'
import { NavLink } from 'react-router-dom'
import ThemeSwitch from './ThemeSwitch'
import SmallScreensNavbar from './SmallScreensNavbar'
import LargeScreensNavbar from './LargeScreensNavbar'

const Header: React.FC = () => {
  const [isMoodOpen, setIsMoodOpen] = useState<boolean>(false)
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)

  return (
    <header className="flex items-center justify-between gap-5 my-3 relative">
      <div>
        <NavLink
          to="/"
          onClick={() => {
            setIsMenuOpen(false)
            setIsMoodOpen(false)
          }}
          className="text-lightPrimary font-bold text-sm dark:text-darkPrimary"
        >
          YOUSUF
        </NavLink>
      </div>

      <div className="flex justify-end lg:justify-center text-lightSecondary hover:text-lightPrimary dark:text-darkSecondary dark:hover:text-darkPrimary  transition-colors duration-200 ease-in-out w-full">
        <button
          className="font-medium text-sm flex items-center gap-1 lg:hidden cursor-pointer"
          onClick={() => {
            setIsMenuOpen(!isMenuOpen)
            setIsMoodOpen(false)
          }}
        >
          <span>Menu</span>
          <AiOutlinePlus className="h-5 w-5" />
        </button>

        <LargeScreensNavbar />
        <SmallScreensNavbar
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
        />
      </div>

      <div
        className="text-lightSecondary dark:text-darkSecondary"
        onClick={() => {
          setIsMoodOpen(!isMoodOpen)
          setIsMenuOpen(false)
        }}
      >
        <BsFillSunFill className="h-5 w-5 cursor-pointer hover:text-lightPrimary transition-colors duration-200 ease-in-out dark:hover:text-darkPrimary" />
      </div>

      {isMoodOpen && <ThemeSwitch setIsMoodOpen={setIsMoodOpen} />}
    </header>
  )
}

export default Header
