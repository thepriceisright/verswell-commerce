export type Product = {
    id: string;
  slug: string;
  availableForSale: boolean;
  name: string;
  description: string;
  descriptionHtml: string;
//   options: ProductOption[];
  priceRange: {
    // maxVariantPrice: Money;
    // minVariantPrice: Money;
  };
//   variants: Connection<ProductVariant>;
//   featuredImage: Image;
//   images: Connection<Image>;
//   seo: SEO;
  tags: string[];
  updatedAt: string;
  images: any;
  price: string
} //TODO: Clean this up