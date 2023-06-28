'use client';

import clsx from 'clsx';
import { addItem } from 'components/cart/actions';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState, useTransition } from 'react';

import LoadingDots from 'components/loading-dots';
import { ProductFragment, ProductVariantFragment } from 'lib/swell/__generated__/graphql';
// import { ProductVariant } from 'lib/shopify/types';

export function AddToCart({
  variants,
  availableForSale,
  product
}: {
  product: ProductFragment;
  variants: ProductVariantFragment[];
  availableForSale: boolean;
}) {
  const [selectedVariantID, setSelectedVariantID] = useState(variants[0]?.id);
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    const currentVariantArray: any = [];
    searchParams.forEach((value, key) => {
      currentVariantArray.push({ value, key });
    });

    const currentVariantOptionsArray = currentVariantArray.map((variantItem: any) => {
      return product.options
        .find((option) => option.name.toLowerCase() === variantItem.key)
        ?.values.find((option) => option.name === variantItem.value)?.id;
    });

    const variant = variants.find((variant: ProductVariantFragment) =>
      variant.optionValueIds.every((option) => currentVariantOptionsArray.includes(option))
    );

    setSelectedVariantID(variant?.id);
  }, [searchParams, variants, selectedVariantID]);

  return (
    <button
      aria-label="Add item to cart"
      disabled={isPending}
      onClick={() => {
        if (!availableForSale) return;
        startTransition(async () => {
          const error = await addItem(product.id, selectedVariantID);

          if (error) {
            alert(error);
            return;
          }

          router.refresh();
        });
      }}
      className={clsx(
        'flex w-full items-center justify-center bg-black p-4 text-sm uppercase tracking-wide text-white opacity-90 hover:opacity-100 dark:bg-white dark:text-black',
        {
          'cursor-not-allowed opacity-60': !availableForSale,
          'cursor-not-allowed': isPending
        }
      )}
    >
      <span>{availableForSale ? 'Add To Cart' : 'Out Of Stock'}</span>
      {isPending ? <LoadingDots className="bg-white dark:bg-black" /> : null}
    </button>
  );
}
