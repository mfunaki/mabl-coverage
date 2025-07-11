// src/app/page.tsx
import Link from 'next/link';

export default function Home() {
  return (
    <main style={{ padding: '20px' }}>
      <h1>Welcome to mabl Coverage Demo</h1>
      <p>This is a demo application for testing mabl's coverage features.</p>
      
      {/* デモリンクを追加 */}
      <div style={{ 
        marginBottom: '32px', 
        padding: '24px', 
        backgroundColor: '#f9fafb', 
        borderRadius: '8px' 
      }}>
        <h2 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '16px' }}>
          🔧 mabl自動修復デモ
        </h2>
        <p style={{ color: '#6b7280', marginBottom: '16px' }}>
          mablの自動修復機能を体験できるデモページです。
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <Link 
            href="/demo/auto-healing"
            style={{
              display: 'inline-block',
              padding: '12px 24px',
              backgroundColor: '#2563eb',
              color: 'white',
              borderRadius: '6px',
              textDecoration: 'none',
              textAlign: 'center'
            }}
            data-testid="auto-healing-demo-link"
          >
            従来型自動修復デモ
          </Link>
          <Link 
            href="/demo/visual-auto-healing"
            style={{
              display: 'inline-block',
              padding: '12px 24px',
              backgroundColor: '#9333ea',
              color: 'white',
              borderRadius: '6px',
              textDecoration: 'none',
              textAlign: 'center'
            }}
            data-testid="visual-auto-healing-demo-link"
          >
            ビジュアル自動修復デモ
          </Link>
        </div>
      </div>

      <Link 
        href="/products"
        style={{ color: '#2563eb', textDecoration: 'underline' }}
        data-testid="products-link"
      >
        製品一覧を見る
      </Link>
    </main>
  );
}