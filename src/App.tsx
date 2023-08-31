import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import Header from './components/Header'

const App: React.FC = () => {
  return (
    <main className="bg-white text-darkTxtColor dark:bg-darkColor dark:text-white h-[100%]">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </main>
  )
}

export default App
