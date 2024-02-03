import Home from "@/components/Home/Home"
import { BlogPostDT } from "@/lib/types"
import axios from "axios"

export default async function HomePage() {
  // get total number of github repositories
  const response = await axios.get(`${process.env.BASE_URL}/api/github`, {
    method: "GET",
  })
  const data = await response.data
  const repos = data.repos

  const posts = await axios.get(`${process.env.BASE_URL}/api/posts`, {
    method: "GET",
  })
  const postsResponse = (await posts.data) || null

  // get total of posts
  const totalOfPost = postsResponse?.length

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
      <h1>home</h1>
      <Home
        repos={repos}
        totalPost={totalOfPost}
        totalViews={totalViews}
        mostViewedPosts={mostViewedPosts}
      />
    </main>
  )
}
