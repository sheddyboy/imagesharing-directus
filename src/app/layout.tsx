import './globals.css'
import type { Metadata } from 'next'
import localFont from 'next/font/local'

const bmwTypeFont = localFont({
  src: [
    {
      path: '../../public/font/Pro OTF/BMWTypeNextPro-Bold.otf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../public/font/Pro OTF/BMWTypeNextPro-Medium.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/font/Pro OTF/BMWTypeNextPro-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/font/Pro OTF/BMWTypeNextPro-Light.otf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../public/font/Pro OTF/BMWTypeNextPro-Thin.otf',
      weight: '100',
      style: 'normal',
    },
  ],
})


export const metadata: Metadata = {
  title: 'Image sharing',
  description: 'Image sharing application',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={bmwTypeFont.className}>{children}</body>
    </html>
  )
}
