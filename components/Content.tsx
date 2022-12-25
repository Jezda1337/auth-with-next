"use client"

import { useSession } from "next-auth/react"

export default function Content() {
  const { data: session, status } = useSession()

  // using secound if check to prevent flickering
  // itn's not the best soulution but for not it is :)

  if (session) {
    return (
      <div>
        <h1>Here is the content.</h1>
      </div>
    )
  } else if (status === "loading") {
    return (
      <>
        <h1>...</h1>
      </>
    )
  } else {
    return (
      <div>
        <h1>You have to be login to see the contnet.</h1>
      </div>
    )
  }
}
