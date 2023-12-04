import { Metadata } from "next"
import "styles/tailwind.css"
import Navbar from "./navbar"

export const metadata: Metadata = {
  title: "Panda.corp",
  description: "Panda.corp is an Corporation dedicated to making the world a better place.",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <link rel="icon" href="/assets/images/logo.ico" sizes="any" />
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
