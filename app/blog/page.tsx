import PostList from "@/app/blog/components/ui/PostList"

export default async function page() {
  const response = await fetch(`${process.env.BASE_URL}/api/posts`, {
    method: "GET",
  })
  const posts = await response.json()

  return (
    <main className="pagePb">
      <PostList posts={posts} />
    </main>
  )
}
