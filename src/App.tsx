import React from "react"
import Header from "./layouts/Header"
import { Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import AboutPage from "./pages/AboutPage"
import BlogPage from "./pages/BlogPage"
import ProjectsPage from "./pages/ProjectsPage"
import SomBdPage from "./pages/SomBdPage"
import BargellePage from "./pages/BargellePage"
import Footer from "./layouts/Footer"
import LinksPage from "./pages/LinksPage"
import ViteBlogPage from "./pages/BlogPages/ViteBlogPage"

const App: React.FC = () => {
  return (
    <main className="max-w-[43.75rem] mx-5 md:mx-auto">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/blogs" element={<BlogPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/links" element={<LinksPage />} />
        {/* for projects */}
        <Route path="/sombd" element={<SomBdPage />} />
        <Route path="/bargelle" element={<BargellePage />} />
        {/* for blog */}
        <Route path="/vite" element={<ViteBlogPage />} />
      </Routes>
      <Footer />
    </main>
  )
}

export default App
