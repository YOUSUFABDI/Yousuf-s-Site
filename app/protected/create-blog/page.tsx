import CreateBlogForm from "@/app/protected/create-blog/components/CreateBlogForm"
import Note from "@/layouts/Note"
import { authOptions } from "@/lib/auth"
import { getServerSession } from "next-auth"

export default async function Page() {
  const session = await getServerSession(authOptions)

  if (session?.user?.role !== "ADMIN") {
    return (
      <div className="flex items-center justify-center h-[80vh]">
        <Note text="Sorry 😔, you are not authorized to view this page." />
      </div>
    )
  }

  return (
    <main className="pagePb my-14">
      <CreateBlogForm />
    </main>
  )
}
