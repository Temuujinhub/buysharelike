import './globals.css'

export const metadata = {
  title: 'BuyShareLike.mn',
  description: 'Your website description',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
