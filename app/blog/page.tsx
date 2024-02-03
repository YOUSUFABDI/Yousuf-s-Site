import PostList from "@/app/blog/components/ui/PostList"
import axios from "axios"

export default async function page() {
  const response = await axios.get(`/api/posts`, { method: "GET" })
  const posts = await response.data

  return (
    <main className="pagePb">
      <PostList posts={posts} />
    </main>
  )
}
