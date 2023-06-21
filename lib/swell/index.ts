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
  return products;
};
