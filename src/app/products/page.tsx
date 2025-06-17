import { ProductCard } from '@/components/ProductCard';

const demoProducts = [
  { id: 'p1', title: 'Red Widget', description: '高性能な赤いウィジェット' },
  { id: 'p2', title: 'Blue Gizmo', description: '信頼の青いギズモ' },
  { id: 'p3', title: 'Green Thingy', description: '環境に優しいグリーン製品' },
];

export default function ProductsPage() {
  return (
    <main>
      <h1>製品一覧</h1>
      {demoProducts.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </main>
  );
}