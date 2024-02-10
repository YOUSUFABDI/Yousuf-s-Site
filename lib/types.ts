import React from "react"
import { links } from "./data"

export type SectionName = (typeof links)[number]["name"]

export type SectionPropsDT = {
  children: React.ReactNode
  customeClass: string
}

export type ALinkPropsDT = {
  children: React.ReactNode
  to: string
}

export type AvatarPropsDT = {
  img: string
  customClasses?: string
  height?: number
  width?: number
}

export type GoBackPropsDT = {
  link: string
  text: string
}

export type SmallScreensNavbarPropsDT = {
  setIsMenuOpen: (isMenuOpen: boolean) => void
  isMenuOpen: boolean
}

export type NotePropsDT = {
  text: string
}

export type ParagraphPropsDT = {
  children: React.ReactNode
}

export type SubTitlePropsDT = {
  children: React.ReactNode
}

export type ThemeSwitchPropsDT = {
  setIsMoodOpen: (isMoodOpen: boolean) => void
}

export type TitlePropsDT = {
  children: React.ReactNode
}

export type ArticlePropsDT = {
  children: React.ReactNode
}

export type BlogHeaderPropsDT = {
  children: React.ReactNode
}

export type BlogInroPropsDT = {
  views: number
  date: string
  img: string
  name: string
}

export type BlogTitlePropsDT = {
  children: React.ReactNode
}

export type BoxPropsDT = {
  children: React.ReactNode
}

export type ListPropsDT = {
  children: React.ReactNode
}

export type WrapperPropsDT = {
  children: React.ReactNode
}

// projects page types
export type PostListPropsDT = {
  posts: BlogPostDT[]
}

export type ProjectsDT = {
  id: number
  projectName: string
  createdDT: number
  description: string
  coverImage: string
  images: string[]
  tags: string[]
}

export type ProjectListPropsDT = {
  projects: ProjectsDT[]
}

export type ProjecTypePropsDT = {
  id: number
  projectName: string
  createdDT: number
  description: string
  coverImage: string
}

export type PostPagePropsDT = {
  params: {
    slug: string
    id: string
  }
  searchParams: { [key: string]: string | string[] | undefined }
}

export type ProjectPagePropsDT = {
  params: {
    id: string
  }
  searchParams: { [key: string]: string | string[] | undefined }
}

export type ProjectHeaderPropsDT = {
  createdDT: number
  projectName: string
  describtion: string
  githubLink: string
  liveDemo: string
}

export type ProjectDemoPropsDT = {
  images: string[]
}

export type ProjectTagPropsDT = {
  tags: string[]
}

// Blog page types
export type BlogPostTitleDT = {
  titleID: number
  title: string
  blogID: number
  paragraphs: BlogPostParagraphDT[]
  images: BlogPostImagesDT[]
}

export type BlogPostAllImgsDT = {
  imageID: number
  image: string
  blogID: number
}

export type BlogPostParagraphDT = {
  paragraph_id: number
  paragraph: string
}

export type BlogPostImagesDT = {
  imageID: number
  image: string
  titleID: number
}

export type BlogPostImageDT = {
  imageID: number
  image: string
  blogID: number
}

export type BlogPostDT = {
  blogID: number
  mainTitle: string
  description: string
  views: number
  createdDate: string
  creatorImage: string
  coverImage: string
  creatorName: string
  titles: BlogPostTitleDT[]
  images: BlogPostImageDT[]
  allImages: BlogPostAllImgsDT[]
}

// home page types
export type HomePropsDT = {
  repos: number
  totalPost: number
  totalViews: number
  mostViewedPosts: BlogPostDT[]
}

export type IntroPropsDT = {
  repos: number
  totalPost: number
  totalViews: number
}
