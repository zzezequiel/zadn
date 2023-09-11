"use client"
import FooterLayout from '@/layouts/Footer.layout'
import WithSubnavigation from '@/layouts/Header.layout'
import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider } from '@chakra-ui/react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <CacheProvider>
        <ChakraProvider>
          <body >{children}</body>
        </ChakraProvider>
      </CacheProvider>
    </html>
  )
}
