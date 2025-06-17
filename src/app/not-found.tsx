export default function NotFound() {
  return (
    <main style={{ padding: '2rem', textAlign: 'center' }}>
      <h1 data-testid="not-found-heading">ページが見つかりません</h1>
      <p data-testid="not-found-description">
        お探しのページは存在しないか、移動された可能性があります。
      </p>
      <a href="/" data-testid="not-found-home-link" style={{ color: '#0070f3' }}>
        ホームに戻る
      </a>
    </main>
  );
}