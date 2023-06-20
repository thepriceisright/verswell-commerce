export type Maybe<T> = T | null;

export type SwellProductImageFile = {
  height: number;
  url: string;
  width: number;
};

export type SwellProductImage = {
  file: SwellProductImageFile;
  caption: string;
};

export type SwellProductOption = {
  id: string;
  description: string;
  name: string;
  values: Array<SwellProductOptionValue>;
};

export type SwellProductOptionValue = {
  id: string;
  name: string;
  price: number;
};

export type SwellProductsVariants = {
  results: Array<SwellProductVariant>;
};

export type SwellProductVariantPrices = {
  price: number;
  discountPercent: number;
};

export type SwellProductVariantPurchaseOptions = {
  standard: {
    price: number;
    sale: boolean;
    salePrice: number;
    prices: SwellProductVariantPrices;
  };
};

/** Expandable list of variants representing unique variations of the product. Each variant is a combination of one or more `options`. For example, Size and Color. */
export type SwellProductVariant = {
  id: string;
  name: string;
  prices: SwellProductVariantPrices;
  // purchaseOptions: SwellProductVariantPurchaseOptions;
  stockLevel: number;
  currency: string;
  optionValueIds: Array<string>;
};

export type SwellProduct = {
  id: string;
  /** Lowercase, hyphenated identifier typically used in URLs. When creating a product, a `slug `will be generated automatically from the `name`. Maximum length of 1,000 characters. */
  slug: string;
  /** Indicates whether the product's stock is purchasable. */
  stockPurchasable: Boolean;
  /** Human-friendly name of the product. */
  name: string;
  /** Product description. */
  description: string;
  /** Options that allow for variations of the base product. If the option is part of a variant or `required=true`, an option value must be set for the product to be added to a cart. */
  options: Array<SwellProductOption>;
  /** List price used when `sale=false` or `sale_price` is not defined. This value is intended for use via the frontend. See the `purchase_options` array to manage a product's price. */
  price: number;
  /** Expandable list of variants representing unique variations of the product. Each variant is a combination of one or more `options`. For example, Size and Color. */
  variants: SwellProductsVariants;
  /** List of images depicting the bundle. */
  images: Array<SwellProductImage>;
  /** Page description used for search engine optimization purposes. */
  metaDescription: string;
  /** Page title used to override product name in storefronts. */
  metaTitle: string;
  /** Array of searchable tags to aid in search discoverability. */
  tags: Array<string>;
  currency: string;
};
