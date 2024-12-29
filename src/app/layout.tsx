import type { Metadata } from 'next';
import { geistMono, geistSans } from '@ui/font';
import { ThemeProvider } from 'next-themes';

import '../styles/globals.css';

export const metadata: Metadata = {
  title: {
    template: '%s · Bartosz Szkolnik Portfolio',
    default: 'Bartosz Szkolnik Portfolio',
  },
  description:
    'I am a professional Frontend Developer and an aspiring Full-stack Developer. What brought me to the programming world was the ability to create things and solve problems with code. I specialize in building usable, modern, efficient and user friendly interfaces and solutions on both frontend and backend sides.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
