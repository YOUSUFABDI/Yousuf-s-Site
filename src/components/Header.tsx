import { Link, NavLink } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import ThemeSwitcher from './ThemeSwitcher'
import { useTheme } from '../context/ThemeContext'

const Header = () => {
  const { theme } = useTheme()

  const [isScrolled, setIsScrolled] = useState<boolean>(false)
  const [isNavOpen, setIsNavOpen] = useState(false)

  useEffect(() => {
    const handleScrollY = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScrollY)

    return () => window.addEventListener('scroll', handleScrollY)
  }, [])

  useEffect(() => {
    if (isNavOpen) {
      document.documentElement.classList.add('overflow-hidden')
    } else {
      document.documentElement.classList.remove('overflow-hidden')
    }
  })

  const handleNavMenu = () => {
    setIsNavOpen(!isNavOpen)
  }

  const closeNavMenu = () => setIsNavOpen(false)

  return (
    <header
      className={`sticky top-0 w-full flex items-center px-4 md:px-6 lg:px-10 py-5 border-b dark:border-b-0 bg-white/80 text-darkTxtColor dark:bg-gray-900/90 dark:text-white ${
        isScrolled && 'backdrop-blur-sm'
      }`}
    >
      <Link
        to="/"
        className="text-activeColor text-[1rem] font-bold font-montosra"
      >
        YOUSUF
      </Link>
      <nav className="flex gap-5 justify-end w-full">
        <ul
          className={`${
            isNavOpen
              ? 'flex flex-col absolute top-[70px] bottom-0 left-0 h-[100vh] w-full items-start pl-4 pb-5 backdrop-blur-md'
              : 'hidden'
          }  lg:flex lg:border-b-0 lg:pb-0 lg:static lg:w-auto lg:flex-row lg:items-center gap-5 `}
        >
          <NavLink
            to="/"
            className={({ isActive }) =>
              'text-xl font-bold opacity-80 hover:opacity-100 transition-opacity duration-75 ease-in' +
              (isActive ? ' active' : '')
            }
            onClick={closeNavMenu}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              'text-xl font-bold opacity-80 hover:opacity-100 transition-opacity duration-75 ease-in' +
              (isActive ? ' active' : '')
            }
            onClick={closeNavMenu}
          >
            About
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              'text-xl font-bold opacity-80 hover:opacity-100 transition-opacity duration-75 ease-in' +
              (isActive ? ' active' : '')
            }
            onClick={closeNavMenu}
          >
            Projects
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              'text-xl font-bold opacity-80 hover:opacity-100 transition-opacity duration-75 ease-in' +
              (isActive ? ' active' : '')
            }
            onClick={closeNavMenu}
          >
            Contact
          </NavLink>
          <Link
            to=""
            className="hover:opacity-100 transition-opacity duration-75 ease-in"
          >
            {theme === 'light' ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="49"
                viewBox="0 0 50 49"
                fill="none"
                className="opacity-80 hover:opacity-100 transition-opacity duration-75 ease-in"
              >
                <path
                  d="M16.7238 38.8086C16.7238 39.0039 16.4919 39.1602 16.1996 39.1602C15.8669 39.1895 15.6351 39.0332 15.6351 38.8086C15.6351 38.6133 15.8669 38.457 16.1593 38.457C16.4617 38.4277 16.7238 38.584 16.7238 38.8086ZM13.5887 38.3691C13.5181 38.5645 13.7198 38.7891 14.0222 38.8477C14.2843 38.9453 14.5867 38.8477 14.6472 38.6523C14.7077 38.457 14.5161 38.2324 14.2137 38.1445C13.9516 38.0762 13.6593 38.1738 13.5887 38.3691ZM18.0444 38.2031C17.752 38.2715 17.5504 38.457 17.5806 38.6816C17.6109 38.877 17.873 39.0039 18.1754 38.9355C18.4677 38.8672 18.6694 38.6816 18.6391 38.4863C18.6089 38.3008 18.3367 38.1738 18.0444 38.2031ZM24.6774 0.78125C10.6956 0.78125 0 11.0645 0 24.6094C0 35.4395 7.03629 44.707 17.0867 47.9688C18.377 48.1934 18.8306 47.4219 18.8306 46.7871C18.8306 46.1816 18.8004 42.8418 18.8004 40.791C18.8004 40.791 11.744 42.2559 10.2621 37.8809C10.2621 37.8809 9.1129 35.0391 7.45968 34.3066C7.45968 34.3066 5.15121 32.7734 7.62097 32.8027C7.62097 32.8027 10.131 32.998 11.5121 35.3223C13.7198 39.0918 17.4194 38.0078 18.8609 37.3633C19.0927 35.8008 19.748 34.7168 20.4738 34.0723C14.8387 33.4668 9.15323 32.6758 9.15323 23.2812C9.15323 20.5957 9.91936 19.248 11.5323 17.5293C11.2702 16.8945 10.4133 14.2773 11.7944 10.8984C13.9012 10.2637 18.75 13.5352 18.75 13.5352C20.7661 12.9883 22.9335 12.7051 25.0806 12.7051C27.2278 12.7051 29.3952 12.9883 31.4113 13.5352C31.4113 13.5352 36.2601 10.2539 38.3669 10.8984C39.748 14.2871 38.8911 16.8945 38.629 17.5293C40.2419 19.2578 41.2298 20.6055 41.2298 23.2812C41.2298 32.7051 35.2923 33.457 29.6573 34.0723C30.5847 34.8438 31.371 36.3086 31.371 38.6035C31.371 41.8945 31.3407 45.9668 31.3407 46.7676C31.3407 47.4023 31.8044 48.1738 33.0847 47.9492C43.1653 44.707 50 35.4395 50 24.6094C50 11.0645 38.6593 0.78125 24.6774 0.78125ZM9.79839 34.4629C9.66734 34.5605 9.69758 34.7852 9.86895 34.9707C10.0302 35.127 10.2621 35.1953 10.3931 35.0684C10.5242 34.9707 10.494 34.7461 10.3226 34.5605C10.1613 34.4043 9.92943 34.3359 9.79839 34.4629ZM8.70968 33.6719C8.63911 33.7988 8.73992 33.9551 8.94153 34.0527C9.10282 34.1504 9.30444 34.1211 9.375 33.9844C9.44556 33.8574 9.34476 33.7012 9.14314 33.6035C8.94153 33.5449 8.78024 33.5742 8.70968 33.6719ZM11.9758 37.1484C11.8145 37.2754 11.875 37.5684 12.1069 37.7539C12.3387 37.9785 12.631 38.0078 12.7621 37.8516C12.8931 37.7246 12.8327 37.4316 12.631 37.2461C12.4093 37.0215 12.1069 36.9922 11.9758 37.1484ZM10.8266 35.7129C10.6653 35.8105 10.6653 36.0645 10.8266 36.2891C10.9879 36.5137 11.2601 36.6113 11.3911 36.5137C11.5524 36.3867 11.5524 36.1328 11.3911 35.9082C11.25 35.6836 10.9879 35.5859 10.8266 35.7129Z"
                  fill="#1E293B"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="49"
                viewBox="0 0 50 49"
                fill="none"
                className="opacity-80 hover:opacity-100 transition-opacity duration-75 ease-in"
              >
                <path
                  d="M16.7238 38.8086C16.7238 39.0039 16.4919 39.1602 16.1996 39.1602C15.8669 39.1895 15.6351 39.0332 15.6351 38.8086C15.6351 38.6133 15.8669 38.457 16.1593 38.457C16.4617 38.4277 16.7238 38.584 16.7238 38.8086ZM13.5887 38.3691C13.5181 38.5645 13.7198 38.7891 14.0222 38.8477C14.2843 38.9453 14.5867 38.8477 14.6472 38.6523C14.7077 38.457 14.5161 38.2324 14.2137 38.1445C13.9516 38.0762 13.6593 38.1738 13.5887 38.3691ZM18.0444 38.2031C17.752 38.2715 17.5504 38.457 17.5806 38.6816C17.6109 38.877 17.873 39.0039 18.1754 38.9355C18.4677 38.8672 18.6694 38.6816 18.6391 38.4863C18.6089 38.3008 18.3367 38.1738 18.0444 38.2031ZM24.6774 0.78125C10.6956 0.78125 0 11.0645 0 24.6094C0 35.4395 7.03629 44.707 17.0867 47.9688C18.377 48.1934 18.8306 47.4219 18.8306 46.7871C18.8306 46.1816 18.8004 42.8418 18.8004 40.791C18.8004 40.791 11.744 42.2559 10.2621 37.8809C10.2621 37.8809 9.1129 35.0391 7.45968 34.3066C7.45968 34.3066 5.15121 32.7734 7.62097 32.8027C7.62097 32.8027 10.131 32.998 11.5121 35.3223C13.7198 39.0918 17.4194 38.0078 18.8609 37.3633C19.0927 35.8008 19.748 34.7168 20.4738 34.0723C14.8387 33.4668 9.15323 32.6758 9.15323 23.2812C9.15323 20.5957 9.91936 19.248 11.5323 17.5293C11.2702 16.8945 10.4133 14.2773 11.7944 10.8984C13.9012 10.2637 18.75 13.5352 18.75 13.5352C20.7661 12.9883 22.9335 12.7051 25.0806 12.7051C27.2278 12.7051 29.3952 12.9883 31.4113 13.5352C31.4113 13.5352 36.2601 10.2539 38.3669 10.8984C39.748 14.2871 38.8911 16.8945 38.629 17.5293C40.2419 19.2578 41.2298 20.6055 41.2298 23.2812C41.2298 32.7051 35.2923 33.457 29.6573 34.0723C30.5847 34.8438 31.371 36.3086 31.371 38.6035C31.371 41.8945 31.3407 45.9668 31.3407 46.7676C31.3407 47.4023 31.8044 48.1738 33.0847 47.9492C43.1653 44.707 50 35.4395 50 24.6094C50 11.0645 38.6593 0.78125 24.6774 0.78125ZM9.79839 34.4629C9.66734 34.5605 9.69758 34.7852 9.86895 34.9707C10.0302 35.127 10.2621 35.1953 10.3931 35.0684C10.5242 34.9707 10.494 34.7461 10.3226 34.5605C10.1613 34.4043 9.92943 34.3359 9.79839 34.4629ZM8.70968 33.6719C8.63911 33.7988 8.73992 33.9551 8.94153 34.0527C9.10282 34.1504 9.30444 34.1211 9.375 33.9844C9.44556 33.8574 9.34476 33.7012 9.14314 33.6035C8.94153 33.5449 8.78024 33.5742 8.70968 33.6719ZM11.9758 37.1484C11.8145 37.2754 11.875 37.5684 12.1069 37.7539C12.3387 37.9785 12.631 38.0078 12.7621 37.8516C12.8931 37.7246 12.8327 37.4316 12.631 37.2461C12.4093 37.0215 12.1069 36.9922 11.9758 37.1484ZM10.8266 35.7129C10.6653 35.8105 10.6653 36.0645 10.8266 36.2891C10.9879 36.5137 11.2601 36.6113 11.3911 36.5137C11.5524 36.3867 11.5524 36.1328 11.3911 35.9082C11.25 35.6836 10.9879 35.5859 10.8266 35.7129Z"
                  fill="white"
                />
              </svg>
            )}
          </Link>
        </ul>
        <ThemeSwitcher />
      </nav>

      <button className="" onClick={handleNavMenu}>
        {isNavOpen ? (
          <FaTimes className="h-8 w-8 md:h-[40px] md:w-[40px] lg:hidden opacity-80 hover:opacity-100 transition-opacity duration-75 ease-in" />
        ) : (
          <FaBars className="h-8 w-8 md:h-[40px] md:w-[40px] lg:hidden opacity-80 hover:opacity-100 transition-opacity duration-75 ease-in" />
        )}
      </button>
    </header>
  )
}

export default Header
