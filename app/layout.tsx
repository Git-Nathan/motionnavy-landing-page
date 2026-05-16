import { Background } from '@/layouts/Background';
import { Header } from '@/layouts/Header';
import { Analytics } from '@vercel/analytics/next';
import type { Metadata } from 'next';
import { Space_Grotesk } from 'next/font/google';
import './globals.css';

const spaceGrotesk = Space_Grotesk({
  variable: '--font-space-grotesk',
  subsets: ['latin'],
  weight: ['400', '500', '700'],
});

export const metadata: Metadata = {
  title: 'MotionNavy - Transforming Raw Footage into High-Impact, Viral Property Tours.',
  description:
    'At MotionNavy, we transform raw property footage into high-end, viral cinematic experiences. From high-octane speed ramping to professional-grade color grading.',
  icons: {
    icon: '/icons/motionnavy-logo.svg',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={`relative bg-white antialiased ${spaceGrotesk.variable}`}>
        <Background />
        <Header />
        {children}
        <div id='mobile-sidebar-portal' />
        <Analytics />
      </body>
    </html>
  );
}
