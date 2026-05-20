import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Fenix Arcane',

  description:
    'Calculadora premium de conversão para streamers Alii Live.',

  openGraph: {
    title: 'Fenix Arcane',

    description:
      'Calculadora premium de conversão para streamers Alii Live.',

    url: 'https://fenixarcane.vercel.app',

    siteName: 'Fenix Arcane',

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
    images: ['/og-image.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">

      <head>

        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />

      </head>

      <body className={inter.className}>
        {children}
      </body>

    </html>
  );
}