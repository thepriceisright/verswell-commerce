import { getCategory, getCategoryProducts } from 'lib/swell';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

import Grid from 'components/grid';
import ProductGridItems from 'components/layout/product-grid-items';

export const runtime = 'edge';

export const revalidate = 60; // revalidate this page every 60 seconds

export async function generateMetadata({
  params
}: {
  params: { collection: string };
}): Promise<Metadata> {
  const collection = await getCategory(params.collection);

  if (!collection) return notFound();

  return {
    title: collection.name,
    description:
      collection.metaDescription || collection.description || `${collection.name} products`,
    openGraph: {
      images: [
        {
          url: `/api/og?title=${encodeURIComponent(collection.name)}`,
          width: 1200,
          height: 630
        }
      ]
    }
  };
}

export default async function CategoryPage({ params }: { params: { collection: string } }) {
  const products = await getCategoryProducts(params.collection);

  return (
    <section>
      {products.length === 0 ? (
        <p className="py-3 text-lg">{`No products found in this collection`}</p>
      ) : (
        <Grid className="grid-cols-2 lg:grid-cols-3">
          <ProductGridItems products={products} />
        </Grid>
      )}
    </section>
  );
}
