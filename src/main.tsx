import './index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.tsx'
import { ThemeContextProvider } from './context/ThemeContext.tsx'
import { ActiveSectionContextProvider } from './context/ActiveSection.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ActiveSectionContextProvider>
        <ThemeContextProvider>
          <App />
        </ThemeContextProvider>
      </ActiveSectionContextProvider>
    </BrowserRouter>
  </React.StrictMode>
)
