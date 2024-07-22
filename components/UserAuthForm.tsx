"use client"

import React, { useState } from "react"
import { toast } from "./ui/use-toast"
import { Button } from "./ui/button"
import { cn } from "@/lib/utils"
import { Icons } from "./Icons"
import { signIn } from "next-auth/react"

interface UserAuthFormProps extends React.HtmlHTMLAttributes<HTMLDivElement> {}

const UserAuthForm = ({ className, ...props }: UserAuthFormProps) => {
  const [isLoading, setIsloading] = useState<boolean>(false)

  const loginWithGoogle = async () => {
    setIsloading(true)

    try {
      await signIn("google")
    } catch (error) {
      console.log(error)
      toast({
        title: "Error",
        description: "There was an error logging in with Google",
        variant: "destructive",
      })
    } finally {
      setIsloading(false)
    }
  }

  return (
    <div className={cn("flex justify-center", className)} {...props}>
      <Button
        size="sm"
        className="w-full"
        onClick={loginWithGoogle}
        isLoading={isLoading}
      >
        {isLoading ? null : <Icons.google className="h-4 w-4 mr-2" />}
        Google
      </Button>
    </div>
  )
}

export default UserAuthForm
