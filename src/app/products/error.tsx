'use client';

import { useEffect } from 'react';

type ErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function ProductError({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error('[products] page error:', error);
  }, [error]);

  return (
    <main style={{ padding: '2rem', textAlign: 'center' }}>
      <h1 data-testid="products-error-heading">エラーが発生しました</h1>
      <p data-testid="products-error-message">
        製品一覧の読み込み中に問題が発生しました。
      </p>
      <p style={{ color: '#dc2626', fontSize: '0.875rem', marginTop: '1rem' }}>
        {error.message}
      </p>
      <button onClick={reset} data-testid="products-error-retry">
        再試行
      </button>
    </main>
  );
}