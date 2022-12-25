"use client"
import { useSession, signIn, signOut } from "next-auth/react"

export default function LoginButton() {
  const { data: session } = useSession()
  if (session) {
    return (
      <>
        <div className="flex">
          <h1 className="mr-5">{session.user?.name}</h1>
          <button onClick={() => signOut()}>Sign Out</button>
        </div>
      </>
    )
  } else {
    return (
      <>
        <button onClick={() => signIn()}> Sign In</button>
      </>
    )
  }
}
