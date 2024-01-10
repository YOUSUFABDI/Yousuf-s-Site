import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/layouts/Header"
import ActiveSectionContextProvider from "@/context/active-section-context"
import { ThemeContextProvider } from "@/context/ThemeContex"
import Footer from "@/layouts/Footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "YusufCabdi",
  description:
    "Salaan magacaygu waa yusuf waxaan ahay software engineer, sido kale waxaa sameyaa blogs laxiriira technology",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-lightBg dark:bg-darkBg`}>
        <main className="max-w-[43.75rem] mx-5 md:mx-auto">
          <ThemeContextProvider>
            <ActiveSectionContextProvider>
              <Header />
              {children}
              <Footer />
            </ActiveSectionContextProvider>
          </ThemeContextProvider>
        </main>
      </body>
    </html>
  )
}
