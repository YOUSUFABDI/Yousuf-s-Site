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

export type BlogContainerPropsDT = {
  children: React.ReactNode
}

export type BlogHeaderPropsDT = {
  children: React.ReactNode
}

export type BlogInroPropsDT = {
  views: number
  date: string
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
