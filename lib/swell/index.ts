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
  const { productBySlug } = await SwellClient.getProduct({
    slug
  });
  return productBySlug;
};

export const getProducts = async ({ query, sort }: { query?: string; sort?: string }) => {
  const { products } = await SwellClient.getProducts({
    query,
    sort
  });
  return products.results;
};

export const createCart = async () => {
  const { cart } = await SwellClient.getCart();
  return cart;
};

export const getCategory = async (slug: string) => {
  const { categoryBySlug } = await SwellClient.getGategory({
    slug
  });
  return categoryBySlug;
};

export const getCategoryProducts = async (slug: string) => {
  const { categoryBySlug } = await SwellClient.getCategoriesProducts({
    slug
  });
  return categoryBySlug?.products;
};

export const getCategories = async () => {
  const { categories } = await SwellClient.getCategories();
  return categories.results;
};

export const getMenus = async () => {
  const { menuSettings } = await SwellClient.getMenus();
  return menuSettings;
};

export const getMenu = async (id: string) => {
  const menus = await getMenus();
  return menus.sections.find((menu) => menu.id === id);
};
