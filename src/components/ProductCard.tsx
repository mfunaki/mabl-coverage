import Link from 'next/link';

type ProductCardProps = {
  id: string;
  title: string;
    description: string;
};

export function ProductCard({ id, title, description }: ProductCardProps) {
  return (
    <div 
        style={{
            border: '1px solid #ccc',
            padding: '1rem',
            borderRadius: '6px',
            marginBottom: '1rem',
            }}
            data-testid={`product-card-${id}`}
    >
      <h3>{title}</h3>
      <p>{description}</p>
      <Link href={`/products/${id}`} data-testid={`product-link-${id}`}>
        詳細を見る
      </Link>
    </div>
  );
}