import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Suspense } from 'react';

import Footer from 'components/layout/footer';
import { Gallery } from 'components/product/gallery';
import { VariantSelector } from 'components/product/variant-selector';
import Prose from 'components/prose';
import { HIDDEN_PRODUCT_TAG } from 'lib/constants';
import { getProduct } from 'lib/swell';
import { SwellProductImage } from 'lib/swell/types';

export const runtime = 'edge';

export async function generateMetadata({
  params
}: {
  params: { handle: string };
}): Promise<Metadata> {
  const product = await getProduct(params.handle);

  if (!product) return notFound();

  const { caption, file } = (product.images && product.images[0]) || {};
  const hide = !product.tags.includes(HIDDEN_PRODUCT_TAG);

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

  return (
    <div>
      <div className="lg:grid lg:grid-cols-6">
        <div className="lg:col-span-4">
          <Gallery
            title={product.name}
            amount={product.price.toString()}
            currencyCode={product.currency}
            images={product.images.map((image: SwellProductImage) => ({
              src: image.file.url,
              altText: image.caption
            }))}
          />
        </div>

        <div className="p-6 lg:col-span-2">
          {/* @ts-expect-error Server Component */}
          <VariantSelector options={product.options} variants={product.variants.results} />

          {product.description ? (
            <Prose className="mb-6 text-sm leading-tight" html={product.description} />
          ) : null}

          {/* <AddToCart variants={product.variants} availableForSale={product.availableForSale} /> */}
        </div>
      </div>
      <Suspense>
        <Suspense>
          {/* @ts-expect-error Server Component */}
          <Footer />
        </Suspense>
      </Suspense>
    </div>
  );
}
