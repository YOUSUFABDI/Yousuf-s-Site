"use client"

import { SessionProvider } from "next-auth/react"
import React, { ReactNode } from "react"

interface LayoutProps {
  children: ReactNode
}

const Providers = ({ children }: LayoutProps) => {
  return <SessionProvider>{children}</SessionProvider>
}

export default Providers
