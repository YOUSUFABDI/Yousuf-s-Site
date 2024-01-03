import React from 'react'
import { AiFillGithub, AiFillEye } from 'react-icons/ai'
import { MdOutlineShowChart } from 'react-icons/md'
import hormariye from './../assets/images/hormariye.png'
import viteLogo from './../assets/images/vitejs-logo.png'
import onlineCourseLogo from './../assets/images/are_online.png'
import httpCodesLogo from './../assets/images/http_code.png'
import csr_ssr_ssg_Logo from './../assets/images/csr_ssr_ssg.png'
import somBdImg from './../assets/images/somBDImg.png'
import bargelleImg from './../assets/images/bargelleImg.png'

export const links = [
  {
    id: 1,
    name: 'About',
    to: '/about',
  },
  {
    id: 2,
    name: 'Projects',
    to: '/projects',
  },
  {
    id: 3,
    name: 'Blog',
    to: '/blogs',
  },
]

export const themes = [
  { name: 'Light', value: 'light' },
  { name: 'Dark', value: 'dark' },
  { name: 'Automatic', value: 'automatic' },
]

export const blogPostLinks = [
  {
    id: 1,
    name: 'Vite',
    createdDT: 'Nov 20, 2023',
    to: '/vite',
    imgUrl: viteLogo,
  },
  {
    id: 2,
    name: '5 Ways you can becoming a good developer or awesome developer',
    createdDT: 'Dec 15, 2023',
    to: '/hormariyewanagsan',
    imgUrl: hormariye,
  },
  {
    id: 3,
    name: 'Are online courses worth?',
    createdDT: 'Dec 20, 2023',
    to: '/are_online_worthy',
    imgUrl: onlineCourseLogo,
  },
  {
    id: 4,
    name: 'Any important HTTP code',
    createdDT: 'Dec 24, 2023',
    to: '/any_http_code',
    imgUrl: httpCodesLogo,
  },
  {
    id: 5,
    name: 'Client Side Rendering, Server Side Rendering, Static Site Generation',
    createdDT: 'Dec 29, 2023',
    to: '/csr_ssr_ssg',
    imgUrl: csr_ssr_ssg_Logo,
  },
]

export const platformInfos = [
  {
    id: 1,
    name: 'Repository Stars',
    info: '14',
    icon: React.createElement(AiFillGithub),
  },
  {
    id: 2,
    name: 'Total Blog',
    info: blogPostLinks.length,
    icon: React.createElement(MdOutlineShowChart),
  },
  {
    id: 3,
    info: 0,
    name: 'Total Blog Views',
    icon: React.createElement(AiFillEye),
  },
]

export const lastestPosts = [
  {
    id: 1,
    name: '5 Ways you can becoming a good developer or awesome developer',
    date: 'Oct 17, 2023',
    imgUrl: hormariye,
    to: '/horumariye-wanaagsan',
  },
  {
    id: 2,
    name: 'Vite',
    date: 'Nov 24, 2023',
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

export const skills = [
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
  'Github',
  'Firebase',
  'MongoDB',
  'Redux',
  // 'GraphQL',
  // 'Apollo',
  'Express',
  'PhP',
  'MySQL',
  'Python',
  'Flask',
]

export const projects = [
  {
    id: 1,
    name: 'som bd',
    date: '2023',
    desc: 'Somali Blood donation is a system that makes it easy for people to donate blood online in a timely manner for both donors and recipients.',
    img: somBdImg,
    url: '/sombd',
  },
  {
    id: 2,
    name: 'Baargeelle UC',
    date: '2023',
    desc: 'Baargelle uc is platform that pubg players in somalia can buy uc or pubg money using evc plus. i collaborate this project with another developer.',
    img: bargelleImg,
    url: '/bargelle',
  },
]
