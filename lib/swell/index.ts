import { SWELL_GRAPHQL_API_ENDPOINT } from 'lib/constants';
const domain = `https://${process.env.SWELL_STORE_ID!}.swell.store`;
const endpoint = `${domain}${SWELL_GRAPHQL_API_ENDPOINT}`;
const key = process.env.SWELL_STOREFRONT_PUBLIC_KEY!;

import { GraphQLClient } from 'graphql-request';
import { getSdk } from './__generated__/graphql';
const client = new GraphQLClient(endpoint, {
  headers: {
    Authorization: key
  },
  fetch
});
const SwellClient = getSdk(client);

export const getProduct = async (slug: string) => {
  const { data } = await SwellClient.getProduct({
    slug
  });
  return data.productBySlug;
};

export const getProducts = async ({ query, sort }: { query?: string; sort?: string }) => {
  const { data } = await SwellClient.getProducts({
    query,
    sort
  });
  return data.products.results;
};

export const createCart = async () => {
  const data = await SwellClient.getCart();
  return {
    id: data.headers.get('X-Session')!,
    ...data.data.cart
  };
};

export const getCart = async (sessionToken: string) => {
  client.setHeader('X-Session', sessionToken);
  const data = await getSdk(client).getCart();
  return {
    id: sessionToken,
    ...data.data.cart
  };
};

export const addToCart = async (
  sessionToken: string,
  {
    productId,
    quantity,
    variantId
  }: { productId: string; quantity: number; variantId: string | undefined }
) => {
  client.setHeader('X-Session', sessionToken);
  const addCartItem = await getSdk(client).addToCart({
    productId,
    quantity,
    variantId
  });
  return addCartItem;
};

export const updateCart = async (
  sessionToken: string,
  {
    itemId,
    quantity
  }: {
    itemId: string;
    quantity: number;
  }
) => {
  client.setHeader('X-Session', sessionToken);
  const updateCart = await getSdk(client).editCartItem({
    itemId,
    quantity
  });
  return updateCart;
};

export const removeFromCart = async (sessionToken: string, itemId: string) => {
  client.setHeader('X-Session', sessionToken);
  const removeCart = await getSdk(client).removeFromCart({
    itemId
  });
  return removeCart;
};

export const getCategory = async (slug: string) => {
  const { data } = await SwellClient.getGategory({
    slug
  });
  return data.categoryBySlug;
};

export const getCategoryProducts = async (slug: string) => {
  const { data } = await SwellClient.getCategoriesProducts({
    slug
  });
  return data.categoryBySlug?.products;
};

export const getCategories = async () => {
  const { data } = await SwellClient.getCategories();
  return data.categories.results;
};

export const getMenus = async () => {
  const { data } = await SwellClient.getMenus();
  return data.menuSettings;
};

export const getMenu = async (id: string) => {
  const menus = await getMenus();
  return menus.sections.find((menu) => menu.id === id);
};
