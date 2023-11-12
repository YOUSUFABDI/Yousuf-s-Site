import React from 'react'
import { AiFillGithub, AiFillEye } from 'react-icons/ai'
import { MdOutlineShowChart } from 'react-icons/md'

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
    icon: React.createElement(AiFillGithub),
    info: '0 Repository Stars',
  },
  {
    id: 2,
    icon: React.createElement(MdOutlineShowChart),
    info: '0 Total Blog',
  },
  {
    id: 3,
    icon: React.createElement(AiFillEye),
    info: '0 Total Blog Views',
  },
]
