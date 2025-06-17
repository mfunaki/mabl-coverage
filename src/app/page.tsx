// src/app/page.tsx
import Link from 'next/link';

export default function HomePage() {
  return (
    <main>
      <h1>ようこそ</h1>
      <p>このアプリケーションでは製品一覧と詳細を閲覧できます。</p>

      <ul>
        <li>
          <Link href="/products" data-testid="nav-to-products">
            製品一覧ページへ
          </Link>
        </li>
        <li>
          <a
            href="/openapi.yaml"
            target="_blank"
            rel="noopener noreferrer"
            data-testid="openapi-link"
          >
            OpenAPI仕様書をダウンロード
          </a>
        </li>
      </ul>
    </main>
  );
}