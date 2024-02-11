import PostList from "@/app/blog/components/ui/PostList"

export default async function page() {
  const response = await fetch(`${process.env.BASE_URL}/api/posts`, {
    method: "GET",
    cache: "no-cache",
  })
  const posts = (await response.json()) || null

  return (
    <main className="pagePb">
      <PostList posts={posts} />
    </main>
  )
}
