// src/app/products/page.tsx
import { headers } from 'next/headers';
import { ProductCard } from '@/components/ProductCard';
import { Product } from '@/types/product';

async function fetchProducts(): Promise<Product[]> {
  // 環境変数でベースURLを設定可能にする
  // NEXT_PUBLIC_BASE_URL が設定されている場合はそれを使用
  // 設定されていない場合は headers() から取得
  let baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  
  if (!baseUrl) {
    const headersList = await headers();
    const host = headersList.get('host') || 'localhost:3000';
    const protocol = process.env.NODE_ENV === 'development' ? 'http' : 'https';
    baseUrl = `${protocol}://${host}`;
  }

  const res = await fetch(`${baseUrl}/api/products`, {
    cache: 'no-store',
  });

  if (!res.ok) {
    throw new Error(`製品一覧の取得に失敗しました (baseUrl: ${baseUrl})`);
  }

  return res.json();
}

export default async function ProductsPage() {
  const products = await fetchProducts();

  return (
    <main>
      <h1>製品一覧</h1>
      {products.map((product: Product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </main>
  );
}