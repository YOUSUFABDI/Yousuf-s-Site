import Link from "next/link"
import UserAuthForm from "./UserAuthForm"

export const SignIn = () => {
  return (
    <div className="container mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[400px]">
      <div className="flex flex-col space-y-2 text-center">
        {/* logo */}
        <div className="mx-auto h-10 w-10 rounded-full flex items-center justify-center bg-black text-white">
          <span className="text-2xl font-bold">Y</span>
        </div>
        <h1 className="text-2xl font-semibold tracking-tight dark:text-white">
          Welcome back
        </h1>
        <p className="text-sm max-w-xs mx-auto dark:text-darkSecondary">
          {" "}
          By continuing, you are setting up a yusufdev.com account and agree to
          our User Agreement and Privacy Policy.
        </p>
        <UserAuthForm />

        <p className="px=8 text-center text-sm text-zinc-700 dark:text-darkSecondary">
          No account?{" "}
          <Link
            href="/sign-up"
            className="hover:text-zinc-800 text-sm underline underline-offset-4"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  )
}
