import Welcome from '@/components/welcome/Welcome';
import { Background } from '@/layouts/Background';
import { Header } from '@/layouts/Header';
import { ThemeProvider } from '@/providers/ThemeProvider';
import { Analytics } from '@vercel/analytics/next';
import type { Metadata } from 'next';
import { Space_Grotesk } from 'next/font/google';
// @ts-expect-error: allow side-effect import of global CSS without type declarations
import './globals.css';

const spaceGrotesk = Space_Grotesk({
  variable: '--font-space-grotesk',
  subsets: ['latin'],
  weight: ['400', '500', '700'],
});

export const metadata: Metadata = {
  title: 'Nathan Ngo',
  description:
    'Full-stack developer and creative problem solver. Explore my portfolio to see my latest projects, skills, and experience in web development.',
  icons: {
    icon: '/icons/avatar-head.svg',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={`relative bg-white antialiased dark:bg-black ${spaceGrotesk.variable}`}>
        <ThemeProvider defaultTheme='system' enableSystem>
          <Background />
          <Header />
          <Welcome />
          {children}
          <div id='mobile-sidebar-portal' />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
