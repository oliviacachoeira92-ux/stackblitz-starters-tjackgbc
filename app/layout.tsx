import './globals.css';

import type { Metadata } from 'next';

import { Inter } from 'next/font/google';

import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

const inter = Inter({
  subsets: ['latin'],
});

export const metadata: Metadata = {

  title: 'Fenix Arcane',

  description:
    'Dashboard premium de conversão para streamers Alii Live.',

  manifest: '/manifest.json',

  themeColor: '#000000',

  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'Fenix Arcane',
  },

  icons: {

    icon: [
      {
        url: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        url: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],

    apple: [
      {
        url: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],

  },

  openGraph: {

    title: 'Fenix Arcane',

    description:
      'Dashboard premium de conversão para streamers Alii Live.',

    url:
      'https://fenixarcane.vercel.app',

    siteName:
      'Fenix Arcane',

    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
      },
    ],

    locale: 'pt_BR',

    type: 'website',
  },

  twitter: {

    card: 'summary_large_image',

    title: 'Fenix Arcane',

    description:
      'Dashboard premium de conversão para streamers Alii Live.',

    images: ['/og-image.png'],

  },

};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (

    <html
      lang="pt-BR"
      suppressHydrationWarning
    >

      <head>

        <link
          rel="apple-touch-icon"
          href="/icon-512.png"
        />

        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover"
        />

        <meta
          name="mobile-web-app-capable"
          content="yes"
        />

        <meta
          name="apple-mobile-web-app-capable"
          content="yes"
        />

        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />

        <meta
          name="apple-mobile-web-app-title"
          content="Fenix Arcane"
        />

        <meta
          name="application-name"
          content="Fenix Arcane"
        />

        <meta
          name="format-detection"
          content="telephone=no"
        />

      </head>

      <body
        className={`${inter.className} bg-black text-white antialiased`}
      >

        {children}

        <Analytics />

        <SpeedInsights />

      </body>

    </html>

  );

}