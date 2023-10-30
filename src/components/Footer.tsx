import React from 'react'

const Footer: React.FC = () => {
  return (
    <footer className="mb-10 px-4 text-center text-gray-500">
      <small className="mb-2 block text-xs">
        &copy; 2023 Yousuf. All rights reserved.
      </small>
      <p className="text-xs">
        <span className="font-semibold">About this website:</span> built with
        React & Typscript (Tailwindcss), Framer Motion, Vercel hosting.
      </p>
    </footer>
  )
}

export default Footer
