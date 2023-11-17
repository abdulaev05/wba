import type { Metadata } from 'next';
import { Roboto, Montserrat } from 'next/font/google';

import '@/styles/globals.scss';

import Wrapper from './wrapper';

import favicon from '@/imgs/favicon.ico';

const roboto = Roboto({
  weight: ['400', '700'],
  variable: '--font-roboto',
  fallback: ['sans-serif'],
  subsets: ['latin'],
});

const mostserrat = Montserrat({
  weight: ['400', '700'],
  variable: '--font-mont',
  fallback: ['sans-serif'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'WBA ',
  description: "Plastic window's",
  icons: {
    icon: { rel: 'icon', url: favicon.src },
  },
  keywords: '',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Wrapper>{children}</Wrapper>
      </body>
    </html>
  );
}
