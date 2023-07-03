'use client';

import clsx from 'clsx';
import { addItem } from 'components/cart/actions';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState, useTransition } from 'react';

import LoadingDots from 'components/loading-dots';
import { ProductFragment } from 'lib/swell/__generated__/graphql';

export function AddToCart({
  availableForSale,
  product
}: {
  product: ProductFragment;
  availableForSale: boolean;
}) {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    const currentVariantArray: any = [];
    searchParams.forEach((value, key) => {
      currentVariantArray.push({ value, name: key });
    });
    setSelectedOptions(currentVariantArray);
  }, [searchParams]);

  return (
    <button
      aria-label="Add item to cart"
      disabled={isPending}
      onClick={() => {
        if (!availableForSale) return;
        startTransition(async () => {
          const error = await addItem(product.id, selectedOptions);

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
