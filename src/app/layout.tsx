import type {Metadata} from 'next';
import './globals.css';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Toaster } from '@/components/ui/toaster';
import { GlobalBackground } from '@/components/layout/GlobalBackground';

export const metadata: Metadata = {
  title: 'LetsCatchUp Learn | Modern LMS Platform',
  description: 'Empower your future with high-quality online courses and personalized learning paths.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased min-h-screen flex flex-col relative">
        <GlobalBackground />
        <Navbar />
        <main className="flex-1 z-10">{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
