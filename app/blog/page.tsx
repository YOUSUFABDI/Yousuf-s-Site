"use client"

import PostList from "@/app/blog/components/ui/PostList"
import Skeleton from "./components/ui/Skeleton"
import Article from "./components/ui/Article"
import Fetcher from "@/lib/fetcher"
import useSWR from "swr"

export default function Page() {
  const { data, isLoading } = useSWR(`/api/posts`, Fetcher, {
    revalidateOnFocus: false,
  })
  const posts = data

  if (isLoading) {
    return (
      <Article>
        {[1, 2, 3, 4, 5].map((el, index) => (
          <Skeleton key={`${el + index}`} />
        ))}
      </Article>
    )
  }

  return (
    <main className="pagePb">
      <PostList posts={posts} />
    </main>
  )
}
