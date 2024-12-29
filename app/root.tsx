import type { LinksFunction, MetaFunction } from '@remix-run/node'
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
    as: 'style',
    href: 'https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&display=swap',
    rel: 'preload',
  },
  {
    as: 'style',
    href: 'https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap',
    rel: 'preload',
  },
  {
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&display=swap',
  },
  {
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap',
  },
  {
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Fira+Code:wght@400&display=swap',
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

/** @todo move into a util */
export const meta: MetaFunction = () => {
  return [
    {
      title: 'NeonArchivist - Explore Digital Archives',
    },
    {
      content: 'NeonArchivist',
      name: 'author',
    },
    {
      content:
        'Explore NeonArchivist, your digital archive of the future with a blend of high-tech cyberpunk aesthetics and neon visuals.',
      name: 'description',
    },
    {
      content: 'NeonArchivist - Explore Digital Archives',
      name: 'og:title',
    },
    {
      content:
        'Your digital archive of the future. NeonArchivist brings cyberpunk culture to life with high-tech archives and neon visuals.',
      name: 'og:description',
    },
    {
      content: 'https://neonarchivist.com/preview-image.webp',
      name: 'og:image',
    },
    {
      content: 'website',
      name: 'og:type',
    },
    {
      content: 'https://neonarchivist.com',
      name: 'og:url',
    },
    {
      content: 'index, follow',
      name: 'robots',
    },
    {
      content: '#121212',
      name: 'theme-color',
    },
    {
      content: 'summary_large_image',
      name: 'twitter:card',
    },
    {
      content:
        'Explore NeonArchivist, your digital archive of the future with a blend of high-tech cyberpunk aesthetics and neon visuals.',
      name: 'twitter:description',
    },
    {
      content: 'https://neonarchivist.com/preview-image.webp',
      name: 'twitter:image',
    },
    {
      content: 'NeonArchivist - Explore Digital Archives',
      name: 'twitter:title',
    },
    {
      content: 'width=device-width, initial-scale=1',
      name: 'viewport',
    },
  ]
}

export const globalMeta = meta

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
