import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter'
import Header from './header';

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
      <body>
        <AppRouterCacheProvider>
         <Header />
          {children}
        </AppRouterCacheProvider>
      </body>
    </html>
  )
}
