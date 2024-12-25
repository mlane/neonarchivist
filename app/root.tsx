import type { LinksFunction } from '@remix-run/node'
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react'
import { ReactNode } from 'react'
import './tailwind.css'

export const links: LinksFunction = () => [
  {
    rel: 'preconnect',
    href: 'https://fonts.googleapis.com',
  },
  {
    rel: 'preconnect',
    href: 'https://fonts.gstatic.com',
    crossOrigin: 'anonymous',
  },
  {
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&family=Fira+Code:wght@400&family=Roboto:wght@400;500&display=swap',
  },
  {
    href: '/favicon.ico',
    rel: 'icon',
  },
  {
    href: '/apple-touch-icon.png',
    rel: 'apple-touch-icon',
  },
  {
    href: '/favicon-96x96.png',
    sizes: '96x96',
    type: 'image/png',
    rel: 'icon',
  },
  {
    href: '/favicon.svg',
    rel: 'icon',
    type: 'image/svg+xml',
  },
  {
    href: '/site.webmanifest',
    rel: 'manifest',
  },
  {
    href: '/web-app-manifest-192x192.png',
    rel: 'icon',
    sizes: '192x192',
    type: 'image/png',
  },
  {
    href: '/web-app-manifest-512x512.png',
    rel: 'icon',
    sizes: '512x512',
    type: 'image/png',
  },
]

interface LayoutProps {
  children: ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <html lang='en'>
      <head>
        <meta charSet='utf-8' />
        <meta content='width=device-width, initial-scale=1' name='viewport' />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  )
}

export default function App() {
  return <Outlet />
}
