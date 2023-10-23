import React from 'react'
import { CgWorkAlt } from 'react-icons/cg'
import { FaReact } from 'react-icons/fa'
import { LuGraduationCap } from 'react-icons/lu'
import BaargelleProImg from './../assets/images/baargelle-pro-img.png'
import IronGymProImg from './../assets/images/Iron-gym-pro.png'
import SomBdProImg from './../assets/images/Som-bd-pro-img.png'

export const links = [
  {
    name: 'Home',
    hash: '#home',
  },
  {
    name: 'About',
    hash: '#about',
  },
  {
    name: 'Projects',
    hash: '#projects',
  },
  {
    name: 'Skills',
    hash: '#skills',
  },
  {
    name: 'Experience',
    hash: '#experience',
  },
  {
    name: 'Contact',
    hash: '#contact',
  },
] as const

export const projectsData = [
  {
    title: 'Baargeelle UC',
    description:
      'Baargelle uc is platform that pubg players in somalia can buy uc or pubg money using evc plus. i collaborate this project with another developer.',
    tags: ['React', 'CSS', 'PhP', 'MySQL'],
    imageUrl: BaargelleProImg,
  },
  {
    title: 'Som blood donation',
    description:
      'Somali Blood donation is a system that makes it easy for people to donate blood online in a timely manner for both donors and recipients.',
    tags: ['PhP', 'MySQL', 'Jquery', 'CSS', 'Bootstrap'],
    imageUrl: SomBdProImg,
  },
  {
    title: 'IRON GYM',
    description:
      'A gym website is a comprehensive resource for fitness information, membership, options, and tools to help users achieve their fitness goals.',
    tags: ['React', 'Scss'],
    imageUrl: IronGymProImg,
  },
] as const

export const skillsData = [
  'HTML',
  'CSS',
  'SCSS',
  'Tailwind',
  'Bootstrap',
  'JavaScript',
  'TypeScript',
  'React',
  'React Native',
  'Next.js',
  'Framer Motion',
  'Node.js',
  'Git',
  'Firebase',
  'MongoDB',
  'Redux',
  'GraphQL',
  'Apollo',
  'Express',
  'PhP',
  'MySQL',
  'Python',
  'Flask',
] as const

export const experiencesData = [
  {
    title: 'Graduated in school',
    location: 'Somalia, Mogadishu',
    description:
      'I graduated secondary school in 2019. I immediately started university.',
    icon: React.createElement(LuGraduationCap),
    date: '2019',
  },
  {
    title: 'University Student',
    location: 'Somalia, Mogadishu',
    description:
      'I was in university and i was in bootcamp learning full-stack web development. I was learning very hard.',
    icon: React.createElement(CgWorkAlt),
    date: '2019 - 2023',
  },
  {
    title: 'Full-Stack Developer',
    location: 'Somalia, Mogadishu',
    description:
      "I'm now a full-stack developer. My stack includes React, Next.js, TypeScript, Tailwind, Python and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: '2023 - present',
  },
] as const
