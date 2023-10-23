import React from 'react'
import Header from './components/Header'
import ThemeSwitch from './components/ThemeSwitch'
import Home from './components/Home'
import Intro from './components/Intro'
import SectionDivider from './components/SectionDivider'
import About from './components/About'

const App: React.FC = () => {
  return (
    <>
      <div className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]"></div>
      <div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div>
      <Header />
      <ThemeSwitch />
      <Home>
        <Intro />
        <SectionDivider />
        <About />
      </Home>
    </>
  )
}

export default App
