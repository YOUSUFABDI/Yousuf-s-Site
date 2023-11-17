import React from 'react'
import { AiFillGithub, AiFillEye } from 'react-icons/ai'
import { MdOutlineShowChart } from 'react-icons/md'
import typeScriptLogo from './../assets/images/typescript-logo.png'
import viteLogo from './../assets/images/vitejs-logo.png'

export const links = [
  {
    id: 1,
    name: 'About',
    to: '/about',
  },
  {
    id: 2,
    name: 'Blog',
    to: '/blogs',
  },
  {
    id: 3,
    name: 'Projects',
    to: '/projects',
  },
]

export const themes = [
  { name: 'Light', value: 'light' },
  { name: 'Dark', value: 'dark' },
  { name: 'Automatic', value: 'automatic' },
]

export const platformInfos = [
  {
    id: 1,
    name: 'Repository Stars',
    info: '13',
    icon: React.createElement(AiFillGithub),
  },
  {
    id: 2,
    name: 'Total Blog',
    info: '0',
    icon: React.createElement(MdOutlineShowChart),
  },
  {
    id: 3,
    info: '0',
    name: 'Total Blog Views',
    icon: React.createElement(AiFillEye),
  },
]

export const lastestPosts = [
  {
    id: 1,
    name: 'TypeScript',
    date: 'Oct 17, 2023',
    imgUrl: typeScriptLogo,
    to: '/typescript',
  },
  {
    id: 2,
    name: 'Vite',
    date: 'Oct 20, 2023',
    imgUrl: viteLogo,
    to: '/vite',
  },
]

export const aboutMe = [
  {
    id: 1,
    info: "Hello world, I'm Yousuf Abdi!",
  },
  {
    id: 2,
    info: 'After graduating secondary in School, I decided to pursue my passion for technology and programming. I started university and learned Computer science',
  },
  {
    id: 3,
    info: 'My favorite part of programming is the problem-solving aspect. I love the feeling of finally figuring out a solution to a problem.',
  },
  {
    id: 4,
    info: "When I'm not at my desk I am probably lifting weights, playing basketball, playing video games, or at a coffee shop :)",
  },
]
