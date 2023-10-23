import React from 'react'

type HomeProps = {
  children: React.ReactNode
}

const Home = ({ children }: HomeProps) => {
  return <main className="flex flex-col items-center px-4">{children}</main>
}

export default Home
