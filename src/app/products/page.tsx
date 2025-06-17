// src/app/products/page.tsx
import { headers } from 'next/headers';
import { ProductCard } from '@/components/ProductCard';
import { Product } from '@/types/product';

async function fetchProducts(): Promise<Product[]> {
  const headersList = await headers(); // ✅ await を追加
  const host = headersList.get('host');
  const protocol = process.env.NODE_ENV === 'development' ? 'http' : 'https';

  const res = await fetch(`${protocol}://${host}/api/products`, {
    cache: 'no-store',
  });

  if (!res.ok) {
    throw new Error('製品一覧の取得に失敗しました');
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