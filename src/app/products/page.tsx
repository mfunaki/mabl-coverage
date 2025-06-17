// src/app/products/page.tsx
import { ProductCard } from '@/components/ProductCard';
import { Product } from '@/types/product';

async function fetchProducts(): Promise<Product[]> {
  const res = await fetch('http://localhost:3000/api/products', {
    cache: 'no-store',
  });
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