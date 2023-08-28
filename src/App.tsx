import React from 'react'
import Home from './components/Home'
import ThemeSwitcher from './components/ThemeSwitcher'

const App: React.FC = () => {
  return (
    <main className="bg-white text-black dark:bg-slate-900 dark:text-white h-[100vh]">
      <Home />
      <ThemeSwitcher />
    </main>
  )
}

export default App
