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
    "Salaan magacaygu waa yusuf waxaan ahay software engineer, sido kale waxaa sameyaa blogs laxiriira technologiyada.",
}

export default function RootLayout({
  children,
  authModal,
}: {
  children: React.ReactNode
  authModal: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {process.env.NODE_ENV === "production" && (
          <script
            async
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.NEXT_PUBLIC_ADS_CLIENT_ID}`}
            crossOrigin="anonymous"
          ></script>
        )}
      </head>
      <body className={`${inter.className} bg-lightBg dark:bg-darkBg`}>
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {authModal}
            <main className="max-w-[43.75rem] mx-5 md:mx-auto">{children}</main>
            <Footer />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  )
}
