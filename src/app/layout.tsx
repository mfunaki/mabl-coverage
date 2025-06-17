import './globals.css';
import type { Metadata } from 'next';
import { Header } from '@/components/Header';

export const metadata: Metadata = {
  title: 'Demo App',
  description: 'mabl カバレッジデモサイト',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body>
        <Header />
        <hr />
        {children}
        <hr />
        <footer style={{ textAlign: 'center', marginTop: '2rem' }}>
          © 2025 Masahiko's Demo App
        </footer>
      </body>
    </html>
  );
}