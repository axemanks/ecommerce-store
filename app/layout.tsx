import { Urbanist } from 'next/font/google'; // using Urbanist isntead of Inter

import type { Metadata } from 'next';

import './globals.css';

import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

const font = Urbanist({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Store -Frontend',
  description: 'Store - By Keith Scheldt',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={font.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
