import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Suspense } from 'react';

import { AddToCart } from 'components/cart/add-to-cart';
import Grid from 'components/grid';
import Footer from 'components/layout/footer';
import ProductGridItems from 'components/layout/product-grid-items';
import { Gallery } from 'components/product/gallery';
import { VariantSelector } from 'components/product/variant-selector';
import Prose from 'components/prose';
import { HIDDEN_PRODUCT_TAG } from 'lib/constants';
import { getProduct } from 'lib/swell';

export const runtime = 'edge';

export async function generateMetadata({
  params
}: {
  params: { handle: string };
}): Promise<Metadata> {
  const product = await getProduct(params.handle);

  if (!product) return notFound();

  const { caption, file } = (product.images && product.images[0]) || {};
  const hide = !product.tags?.includes(HIDDEN_PRODUCT_TAG);

  return {
    title: product.metaTitle || product.name,
    description: product.metaDescription || product.description,
    robots: {
      index: hide,
      follow: hide,
      googleBot: {
        index: hide,
        follow: hide
      }
    },
    openGraph: file
      ? {
          images: [
            {
              url: file.url,
              width: file.width,
              height: file.height,
              alt: caption
            }
          ]
        }
      : null
  };
}
export default async function ProductPage({ params }: { params: { handle: string } }) {
  const product = await getProduct(params.handle);

  if (!product) return notFound();

  const productJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    image: product.images[0]?.file.url,
    offers: {
      '@type': 'AggregateOffer',
      availability: product.stockPurchasable
        ? 'https://schema.org/InStock'
        : 'https://schema.org/OutOfStock',
      priceCurrency: product.currency,
      price: product.price
    }
  };

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productJsonLd)
        }}
      />
      <div className="lg:grid lg:grid-cols-6">
        <div className="lg:col-span-4">
          <Gallery
            title={product.name}
            amount={product.price}
            currencyCode={product.currency}
            images={product.images.map((image) => ({
              src: image.file.url,
              altText: image.caption
            }))}
          />
        </div>

        <div className="p-6 lg:col-span-2">
          <VariantSelector
            options={product.options}
            variants={product.variants.results}
            stockPurchasable={product.stockPurchasable}
          />

          {product.description ? (
            <Prose className="mb-6 text-sm leading-tight" html={product.description} />
          ) : null}

          <AddToCart
            product={product}
            variants={product.variants.results}
            availableForSale={product.stockPurchasable}
          />
        </div>
      </div>
      <Suspense>
        <Suspense>
          <Footer />
        </Suspense>
      </Suspense>
    </div>
  );
}

async function RelatedProducts({ id }: { id: string }) {
  const relatedProducts = await getProductRecommendations(id);

  if (!relatedProducts.length) return null;

  return (
    <div className="px-4 py-8">
      <div className="mb-4 text-3xl font-bold">Related Products</div>
      <Grid className="grid-cols-2 lg:grid-cols-5">
        <ProductGridItems products={relatedProducts} />
      </Grid>
    </div>
  );
}
