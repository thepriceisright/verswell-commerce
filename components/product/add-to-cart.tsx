'use client';

import clsx from 'clsx';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState, useTransition } from 'react';

import LoadingDots from 'components/loading-dots';
import { ProductVariantFragment } from 'lib/swell/__generated__/graphql';

export function AddToCart({
  productId,
  variants,
  availableForSale
}: {
  productId: string;
  variants: ProductVariantFragment[];
  availableForSale: boolean;
}) {
  const [selectedVariantId, setSelectedVariantId] = useState(variants[0]?.id);
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isPending, startTransition] = useTransition();
  const [adding, setAdding] = useState(false);

  useEffect(() => {
    const variant = variants.find((variant: ProductVariantFragment) =>
      variant.optionValueIds.every(
        // (option) => option.value === searchParams.get(option.name.toLowerCase())
        (option) => option === searchParams.get(option)
      )
    );

    if (variant) {
      setSelectedVariantId(variant.id);
    } else {
      setSelectedVariantId(productId);
    }
  }, [searchParams, variants, setSelectedVariantId]);

  const isMutating = adding || isPending;

  async function handleAdd() {
    if (!availableForSale) return;

    setAdding(true);

    const response = await fetch(`/api/cart`, {
      method: 'POST',
      body: JSON.stringify({
        variantId: selectedVariantId,
        quantity: 1,
        productId: productId
      })
    });

    const data = await response.json();

    if (data.error) {
      alert(data.error);
      return;
    }

    setAdding(false);

    startTransition(() => {
      router.refresh();
    });
  }

  return (
    <button
      aria-label="Add item to cart"
      disabled={isMutating}
      onClick={handleAdd}
      className={clsx(
        'flex w-full items-center justify-center bg-black p-4 text-sm uppercase tracking-wide text-white opacity-90 hover:opacity-100 dark:bg-white dark:text-black',
        {
          'cursor-not-allowed opacity-60': !availableForSale,
          'cursor-not-allowed': isMutating
        }
      )}
    >
      <span>{availableForSale ? 'Add To Cart' : 'Out Of Stock'}</span>
      {isMutating ? <LoadingDots className="bg-white dark:bg-black" /> : null}
    </button>
  );
}
