import Grid from 'components/grid';
import { GridTileImage } from 'components/grid/tile';
import { ProductFragment } from 'lib/swell/__generated__/graphql';
import Link from 'next/link';

export default function ProductGridItems({ products }: { products: ProductFragment[] }) {
  return (
    <>
      {products.map((product) => (
        <Grid.Item key={product.slug} className="animate-fadeIn">
          <Link className="h-full w-full" href={`/product/${product.slug}`}>
            <GridTileImage
              alt={product.name}
              labels={{
                isSmall: true,
                title: product.name,
                amount: product.price,
                currencyCode: product.currency
              }}
              src={(product.images && product.images[0]?.file.url) || ''}
              width={600}
              height={600}
            />
          </Link>
        </Grid.Item>
      ))}
    </>
  );
}
