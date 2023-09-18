import './globals.css'
import { Inter } from 'next/font/google'
import HeaderComponent from './share/components/HeaderComponent'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Merca Libre',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.className}>

      <HeaderComponent />

      <main className='max-w-screen-xl mx-auto'>
      {children}
      </main>
      </body>
    </html>
  )
}
