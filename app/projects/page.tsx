"use client"

import Projects from "@/components/Projects/Projects"
import Fetcher from "@/lib/fetcher"
import useSWR from "swr"
import Article from "../blog/components/ui/Article"
import Skeleton from "@/layouts/Skeleton"

export default function ProjectsPage() {
  const { data, isLoading } = useSWR(`/api/projects`, Fetcher, {
    revalidateOnFocus: false,
  })
  const projects = data

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
      <Projects projects={projects} />
    </main>
  )
}
