import React from 'react'
import Intro from './Intro'
import LastestPosts from './LastestPosts'

const Home: React.FC = () => {
  return (
    <section className="flex flex-col gap-[4.375rem] md:gap-20 mt-14">
      <Intro />
      <LastestPosts />
    </section>
  )
}

export default Home
