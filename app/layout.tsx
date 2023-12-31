import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter'

export const metadata = {
  title: 'Rect',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body><AppRouterCacheProvider>{children}</AppRouterCacheProvider></body>
    </html>
  )
}
