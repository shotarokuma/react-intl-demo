import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import LangWrapper from './LangWrapper'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'React Intl demo',
  description: 'learn react intll',
}

const RootLayout = ({
  children,
}: {
  children: React.ReactNode
}) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LangWrapper>
          {children}
        </LangWrapper>
      </body>
    </html>
  )
}

export default RootLayout
