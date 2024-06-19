import CreateBlogForm from "@/components/CreateBlogForm"
import Title from "@/layouts/Title"
import { authOptions } from "@/lib/auth"
import { getServerSession } from "next-auth"

export default async function Page() {
  const session = await getServerSession(authOptions)

  if (session?.user?.role !== "ADMIN") {
    return (
      <div className="flex items-center justify-center h-screen">
        <Title>Sorry 😔, you are not authorized to view this page</Title>
      </div>
    )
  }

  return (
    <main className="pagePb my-14">
      <CreateBlogForm />
    </main>
  )
}
