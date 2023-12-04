import "styles/tailwind.css"
import Navbar from "./navbar"

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
