import type { Metadata } from 'next';

import './globals.css';
import Footer from '@/components/Footer';
import Navbar from '@/components/navbar/navbar';

export const metadata: Metadata = {
  title: 'LocalLoop',
  description: 'Local-loop ',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="relative overflow-hidden">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
