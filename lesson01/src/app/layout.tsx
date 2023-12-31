import Navbar from "@/components/Navbar"
import {Roboto} from 'next/font/google'
import './global.css'
export const metadata = {
  title: 'Lesson 01',
  description: 'Generated by Next.js',
}
const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  style: ["italic", "normal"],
  subsets:["latin"]
})
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Navbar/>
        {children}
      </body>
    </html>
  )
}
