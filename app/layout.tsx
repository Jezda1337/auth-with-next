import Header from "../components/Header"
import Providers from "./providers"

import "tailwindcss/tailwind.css"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head />
      <body>
        <Providers>
          <Header />
          <main>{children}</main>
        </Providers>
      </body>
    </html>
  )
}
