import { headers } from 'next/headers';
import { Product } from '@/types/product';

type Props = {
  params: Promise<{ id: string }>;
};

export default async function ProductDetailPage({ params }: Props) {
  const { id } = await params;

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

  const res = await fetch(`${baseUrl}/api/products/${id}`, {
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