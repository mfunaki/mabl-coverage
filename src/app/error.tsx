'use client';

import { useEffect } from 'react';

type GlobalErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function GlobalError({ error, reset }: GlobalErrorProps) {
  useEffect(() => {
    console.error('[Global Error]', error);
  }, [error]);

  return (
    <html>
      <body>
        <main style={{ padding: '2rem', textAlign: 'center' }}>
          <h1 data-testid="global-error-heading">システムエラーが発生しました</h1>
          <p data-testid="global-error-message">
            予期しないエラーにより画面の表示に失敗しました。
          </p>
          <button onClick={reset} data-testid="global-error-retry">
            再読み込み
          </button>
        </main>
      </body>
    </html>
  );
}