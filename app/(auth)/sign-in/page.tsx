import { SignIn } from "@/components/Signin"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { ChevronLeftIcon } from "lucide-react"
import Link from "next/link"
import { FC } from "react"

const page: FC = () => {
  return (
    <div className="absolute inset-0 dark:bg-black/5 dark:text-white">
      <div className="h-full max-w-2xl mx-auto flex flex-col items-center justify-center gap-20">
        <Link
          href="/"
          className={cn(
            buttonVariants({ variant: "ghost" }),
            "self-start -mt-20 dark:text-darkSecondary dark:hover:text-lightSecondary"
          )}
        >
          <ChevronLeftIcon className="mr-2 h-4 w-4" />
          Home
        </Link>

        <SignIn />
      </div>
    </div>
  )
}

export default page
