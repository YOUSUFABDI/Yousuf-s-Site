import PostList from "@/app/blog/components/ui/PostList"

export default async function page() {
  const response = await fetch(`https://www.yusufdev.com/api/posts`, {
    method: "GET",
  })
  const posts = await response.json()

  return (
    <main className="pagePb">
      <PostList posts={posts} />
    </main>
  )
}
