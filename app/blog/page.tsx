import PostList from "@/app/blog/components/ui/PostList"

export default async function BlogsPage() {
  const response = await fetch(`${process.env.BASE_URL}/api/posts`, {
    method: "GET",
  })
  // if (!response.ok) {
  //   throw new Error(`Failed to posts data: ${response.statusText}`)
  // }
  const posts = await response.json()

  return (
    <main className="pagePb">
      <PostList posts={posts} />
    </main>
  )
}
