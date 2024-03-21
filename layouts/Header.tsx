"use client"

import React, { useState, useEffect, useRef } from "react"
import { AiOutlinePlus } from "react-icons/ai"
import { BsFillSunFill } from "react-icons/bs"
import ThemeSwitch from "./ThemeSwitch"
import Link from "next/link"
import { links } from "@/lib/data"
import clsx from "clsx"
import { useActiveSectionContext } from "@/context/active-section-context"
import { SmallScreensNavbarPropsDT } from "@/lib/types"

const Header: React.FC = () => {
  const [isMoodOpen, setIsMoodOpen] = useState<boolean>(false)
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)

  const menuRef = useRef<HTMLDivElement>(null)
  const moodRef = useRef<HTMLDivElement>(null)

  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext()

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false)
      }

      if (moodRef.current && !moodRef.current.contains(event.target as Node)) {
        setIsMoodOpen(false)
      }
    }

    document.addEventListener("click", handleClickOutside)

    return () => {
      document.removeEventListener("click", handleClickOutside)
    }
  }, [])

  return (
    <header className="backdrop-blur-md bg-lightBg/70 dark:bg-darkBg/70 sticky top-0 z-50 border-b dark:border-darkSecondary/10">
      <div className="flex items-center justify-between gap-5 py-3 max-w-[43.75rem] mx-5 md:mx-auto  relative bg-transparent">
        <div>
          <Link
            href="/"
            onClick={() => {
              setActiveSection("")
              setIsMenuOpen(false)
              setIsMoodOpen(false)
            }}
            className="text-lightPrimary font-bold text-sm dark:text-darkPrimary"
          >
            YOUSUF
          </Link>
        </div>

        <div
          ref={menuRef}
          className="flex justify-end md:justify-center text-lightSecondary hover:text-lightPrimary dark:text-darkSecondary dark:hover:text-darkPrimary  transition-colors duration-200 ease-in-out w-full"
        >
          <button
            className="font-medium text-sm flex items-center gap-1 md:hidden cursor-pointer"
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
          ref={moodRef}
          className="text-lightSecondary dark:text-darkSecondary"
          onClick={() => {
            setIsMoodOpen(!isMoodOpen)
            setIsMenuOpen(false)
          }}
        >
          <BsFillSunFill className="h-5 w-5 cursor-pointer hover:text-lightPrimary transition-colors duration-200 ease-in-out dark:hover:text-darkPrimary" />
        </div>

        {isMoodOpen && <ThemeSwitch setIsMoodOpen={setIsMoodOpen} />}
      </div>
    </header>
  )
}

export default Header

const SmallScreensNavbar: React.FC<SmallScreensNavbarPropsDT> = ({
  isMenuOpen,
  setIsMenuOpen,
}) => {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext()

  return (
    <nav
      className={`lg:hidden ${
        isMenuOpen
          ? "flex flex-col items-start gap-6 text-sm bg-white dark:bg-black shadow-xl rounded-md w-44 p-4 absolute top-10"
          : "hidden"
      }`}
    >
      {links.map((link) => (
        <Link
          href={link.to}
          onClick={() => {
            setIsMenuOpen(false)
            setActiveSection(link.name)
            setTimeOfLastClick(Date.now())
          }}
          className={clsx(
            "hover:text-lightPrimary transition-colors duration-200 ease-in-out dark:hover:text-darkPrimary dark:text-darkSecondary",
            {
              "text-lightPrimary font-medium dark:text-white":
                activeSection === link.name,
            }
          )}
          key={link.id}
        >
          {link.name}
        </Link>
      ))}
    </nav>
  )
}

const LargeScreensNavbar: React.FC = () => {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext()

  return (
    <nav className="hidden md:flex items-center gap-6 text-sm">
      {links.map((link) => (
        <Link
          onClick={() => {
            setActiveSection(link.name)
            setTimeOfLastClick(Date.now())
          }}
          href={link.to}
          className={clsx(
            "hover:text-lightPrimary transition-colors duration-200 ease-in-out dark:hover:text-darkPrimary dark:text-darkSecondary",
            {
              "text-lightPrimary font-medium dark:text-white":
                activeSection === link.name,
            }
          )}
          key={link.id}
        >
          {link.name}
        </Link>
      ))}
    </nav>
  )
}
