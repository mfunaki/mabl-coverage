import Link from 'next/link';
import { Product } from '@/types/product';

type ProductCardProps = Pick<Product, 'id' | 'title' | 'description'>;

export function ProductCard({ id, title, description }: ProductCardProps) {
  return (
    <div
      data-testid={`product-card-${id}`}
      style={{
        border: '1px solid #ccc',
        padding: '1rem',
        borderRadius: '6px',
        marginBottom: '1rem',
      }}
    >
      <h3 data-testid={`product-title-${id}`}>{title}</h3>
      <p data-testid={`product-description-${id}`}>{description}</p>
      <Link
        href={`/products/${id}`}
        data-testid={`product-link-${id}`}
      >
        詳細を見る
      </Link>
    </div>
  );
}