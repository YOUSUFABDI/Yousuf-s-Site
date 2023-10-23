import React from 'react'
import Intro from './Intro'
import SectionDivider from './SectionDivider'

const Home: React.FC = () => {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <SectionDivider />
    </main>
  )
}

export default Home
