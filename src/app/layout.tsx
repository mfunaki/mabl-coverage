export const metadata = {
  title: 'Demo App',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body>
        <header>
          <h2>Demo App</h2>
        </header>
        <hr />
        {children}
        <hr />
        <footer>© 2025 Masahiko's Demo</footer>
      </body>
    </html>
  );
}