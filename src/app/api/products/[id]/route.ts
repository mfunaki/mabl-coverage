import { products } from '@/data/products';

export async function GET(
  req: Request,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params; // ✅ await を追加

  const product = products.find((p) => p.id === id);

  if (!product) {
    return new Response(JSON.stringify({ error: 'Not found' }), { status: 404 });
  }

  return Response.json(product);
}