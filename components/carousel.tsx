import { getCategoryProducts } from 'lib/swell';
import Image from 'next/image';
import Link from 'next/link';

export async function Carousel() {
  // Collections that start with `hidden-*` are hidden from the search page.
  const products = await getCategoryProducts('hidden-homepage-carousel');

  if (!products?.length) return null;

  return (
    <div className="relative w-full overflow-hidden bg-black dark:bg-white">
      <div className="flex animate-carousel">
        {[...products, ...products].map((product, i) => (
          <Link
            key={`${product.slug}${i}`}
            href={`/product/${product.slug}`}
            className="relative h-[30vh] w-1/2 flex-none md:w-1/3"
          >
            {product.images[0] ? (
              <Image
                alt={product.name}
                className="h-full object-contain"
                fill
                sizes="33vw"
                src={product.images[0].file.url}
              />
            ) : null}
            <div className="absolute inset-y-0 right-0 flex items-center justify-center">
              <div className="inline-flex bg-white p-4 text-xl font-semibold text-black dark:bg-black dark:text-white">
                {product.name}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
