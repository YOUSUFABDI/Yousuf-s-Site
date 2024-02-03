import Home from "@/components/Home/Home"
import { BlogPostDT } from "@/lib/types"
import axios from "axios"

export default async function HomePage() {
  // get total number of github repositories
  const response = await axios.get(`/api/github`)
  const data = await response.data
  const repos = data.repos

  const posts = await axios.get(`/api/posts`)
  const postsResponse = await posts.data

  // get total of posts
  const totalOfPost = postsResponse.length

  // get total views of all posts
  const totalViews: number = postsResponse.reduce(
    (acc: number, post: BlogPostDT) => acc + (post.views || 0),
    0
  )

  // get top 3 of the most viewed posts
  const topViewedPosts: BlogPostDT[] = postsResponse.sort(
    (a: any, b: any) => (b.views || 0) - (a.views || 0)
  )
  const mostViewedPosts: BlogPostDT[] = topViewedPosts.slice(0, 3)

  return (
    <main className="pagePb">
      <Home
        repos={repos}
        totalPost={totalOfPost}
        totalViews={totalViews}
        mostViewedPosts={mostViewedPosts}
      />
    </main>
  )
}
