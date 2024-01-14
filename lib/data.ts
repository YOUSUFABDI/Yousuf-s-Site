import React from "react"
import { AiFillGithub, AiFillEye } from "react-icons/ai"
import { MdOutlineShowChart } from "react-icons/md"

export const links = [
  {
    id: 1,
    name: "About",
    to: "/about",
  },
  {
    id: 2,
    name: "Projects",
    to: "/projects",
  },
  {
    id: 3,
    name: "Blog",
    to: "/blogs",
  },
]

export const themes = [
  { name: "Light", value: "light" },
  { name: "Dark", value: "dark" },
  { name: "Automatic", value: "automatic" },
]

export const blogPostLinks = [
  {
    id: 1,
    name: "Vite",
    createdDT: "Nov 20, 2023",
    to: "/vite",
    imgUrl: "./images/vitejs-logo.png",
  },
  {
    id: 2,
    name: "5 Ways you can becoming a good developer or awesome developer",
    createdDT: "Dec 15, 2023",
    to: "/hormariyewanagsan",
    imgUrl: "./images/hormariye.png",
  },
  {
    id: 3,
    name: "Are online courses worth?",
    createdDT: "Dec 20, 2023",
    to: "/are_online_worthy",
    imgUrl: "./images/are_online.png",
  },
  {
    id: 4,
    name: "Any important HTTP code",
    createdDT: "Dec 24, 2023",
    to: "/any_http_code",
    imgUrl: "./images/http_code.png",
  },
  {
    id: 5,
    name: "Client Side Rendering, Server Side Rendering, Static Site Generation",
    createdDT: "Dec 29, 2023",
    to: "/csr_ssr_ssg",
    imgUrl: "./images/csr_ssr_ssg.png",
  },
  {
    id: 6,
    name: "Unleashing the Power of Next.js: A Comprehensive Guide",
    createdDT: "Jan 3, 2024",
    to: "/next",
    imgUrl: "./images/nextjs_blog.png",
  },
  {
    id: 7,
    name: "Do you need to know math to be a programmer?",
    createdDT: "Jan 5, 2024",
    to: "/next",
    imgUrl: "./images/doyouneedmath.png",
  },
]

export const platformInfos = [
  {
    id: 1,
    name: "Repository Stars",
    info: "14",
    icon: React.createElement(AiFillGithub),
  },
  {
    id: 2,
    name: "Total Blog",
    info: blogPostLinks.length,
    icon: React.createElement(MdOutlineShowChart),
  },
  {
    id: 3,
    info: 0,
    name: "Total Blog Views",
    icon: React.createElement(AiFillEye),
  },
]

export const lastestPosts = [
  {
    id: 1,
    name: "Vite",
    date: "Nov 20, 2023",
    imgUrl: "./images/vitejs-logo.png",
    to: "/vite",
  },
  {
    id: 2,
    name: "5 Ways you can becoming a good developer or awesome developer",
    date: "Dec 15, 2023",
    imgUrl: "./images/hormariye.png",
    to: "/horumariye-wanaagsan",
  },
]

export const aboutMe = [
  {
    id: 1,
    info: "Hello world, I'm Yousuf Abdi!",
  },
  {
    id: 2,
    info: "After graduating secondary in School, I decided to pursue my passion for technology and programming. I started university and learned Computer science",
  },
  {
    id: 3,
    info: "My favorite part of programming is the problem-solving aspect. I love the feeling of finally figuring out a solution to a problem.",
  },
  {
    id: 4,
    info: "When I'm not at my desk I am probably lifting weights, playing basketball, playing video games, or at a coffee shop :)",
  },
]

export const skills = [
  "HTML",
  "CSS",
  "SCSS",
  "Tailwind",
  "Bootstrap",
  "JavaScript",
  "TypeScript",
  "React",
  "React Native",
  "Next.js",
  "Framer Motion",
  "Node.js",
  "Git",
  "Github",
  "Firebase",
  "MongoDB",
  "Redux",
  // 'GraphQL',
  // 'Apollo',
  "Express",
  "PhP",
  "MySQL",
  "Python",
  "Flask",
]

export const projects = [
  {
    id: 1,
    name: "som bd",
    date: "2023",
    desc: "Somali Blood donation is a system that makes it easy for people to donate blood online in a timely manner for both donors and recipients.",
    img: "./images/somBDImg.png",
    url: "/sombd",
  },
  {
    id: 2,
    name: "Baargeelle UC",
    date: "2023",
    desc: "Baargelle uc is platform that pubg players in somalia can buy uc or pubg money using evc plus. i collaborate this project with another developer.",
    img: "./images/bargelleImg.png",
    url: "/bargelle",
  },
]

const vite = [
  {
    id: 1,
    blogName: "Vite",
    date: "Nov 20, 2023",
  },
  [
    {
      mainTitle: "Vite",
    },
  ],
]
