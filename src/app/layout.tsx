import './globals.css';
import type { Metadata } from 'next';
import { Header } from '@/components/Header';

export const metadata: Metadata = {
  title: 'Demo App',
  description: 'mabl coverage demo',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body>
        <Header />
        <main>{children}</main>
        <footer style={{ textAlign: 'center', padding: '1rem 0' }}>
          © 2025 Masahiko’s Demo App
        </footer>
      </body>
    </html>
  );
}
