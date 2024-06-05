import { useState } from "react"
import { AiOutlineCheck } from "react-icons/ai"
import { useTheme } from "../context/ThemeContex"
import { themes } from "../lib/data"
import { ThemeSwitchPropsDT } from "@/lib/types"

const ThemeSwitch = ({ setIsMoodOpen }: ThemeSwitchPropsDT) => {
  const { darkMode, lightMode, autoMode, theme } = useTheme()

  const initialMood = {
    light: false,
    dark: false,
    automatic: false,
  }

  const [mood, setMood] = useState(initialMood)
  // console.log(mood)

  const handleButtonClick = (
    selectedTheme: string,
    modeFunction: () => void
  ) => {
    setMood({ ...initialMood, [selectedTheme]: true })
    modeFunction()
    setIsMoodOpen(false)
  }

  return (
    <div className="flex flex-col gap-1 absolute right-1 top-12 bg-white dark:bg-black shadow-lg rounded-md w-44 p-2">
      {themes.map((t) => (
        <button
          key={t.value}
          className={`flex items-center gap-2 px-2 h-10 relative text-lightPrimary dark:text-darkPrimary font-medium text-sm rounded-md hover:bg-hoverLight dark:hover:bg-hoverDark mood_btn ${
            theme === t.value && "selected_mood"
          }`}
          onClick={() =>
            handleButtonClick(
              t.value,
              t.value === "light"
                ? lightMode
                : t.value === "dark"
                ? darkMode
                : autoMode
            )
          }
        >
          {theme === t.value && (
            <span>
              <AiOutlineCheck className="h-5 w-5" />
            </span>
          )}
          <span className="absolute left-10">{t.name}</span>
        </button>
      ))}
    </div>
  )
}

export default ThemeSwitch
