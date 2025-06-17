import { headers } from 'next/headers';
import { Product } from '@/types/product';

type Props = {
  params: Promise<{ id: string }>;
};

export default async function ProductDetailPage({ params }: Props) {
  const { id } = await params;
  const headersList = await headers();
  const host = headersList.get('host');
  const protocol = process.env.NODE_ENV === 'development' ? 'http' : 'https';

  const res = await fetch(`${protocol}://${host}/api/products/${id}`, {
    cache: 'no-store',
  });

  if (!res.ok) {
    return <p>製品が見つかりませんでした。</p>;
  }

  const product: Product = await res.json();

  return (
    <main>
      <h1>{product.title}</h1>
      <p>{product.description}</p>
      <p style={{ color: '#666' }}>製品ID: {product.id}</p>
    </main>
  );
}