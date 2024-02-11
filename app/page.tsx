"use client"

import Home from "@/components/Home/Home"
import { BlogPostDT } from "@/lib/types"
import useSWR from "swr"
import Fetcher from "@/lib/fetcher"

export default function HomePage() {
  const { data } = useSWR(`/api/posts`, Fetcher, {
    revalidateOnFocus: false,
  })
  const posts = data

  // get total of posts
  const totalOfPost = posts?.length

  // get total views of all posts
  const totalViews: number = posts?.reduce(
    (acc: number, post: BlogPostDT) => acc + (post.views || 0),
    0
  )

  return (
    <main className="pagePb">
      <Home totalPost={totalOfPost} totalViews={totalViews} />
    </main>
  )
}
