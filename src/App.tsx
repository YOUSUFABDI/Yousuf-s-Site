import React from 'react'
import Header from './components/Header'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import BlogPage from './pages/BlogPage'
import ProjectsPage from './pages/ProjectsPage'

const App: React.FC = () => {
  return (
    <main className="container px-5 lg:mx-auto">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/blogs" element={<BlogPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
      </Routes>
    </main>
  )
}

export default App
