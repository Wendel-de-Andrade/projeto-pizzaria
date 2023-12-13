import "../../styles/globals.scss"
import { Inter } from 'next/font/google'

import { AuthProvider } from "../contexts/AuthContext"

const inter = Inter({ subsets: ['latin'] })



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <AuthProvider>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </AuthProvider>
  )
}
