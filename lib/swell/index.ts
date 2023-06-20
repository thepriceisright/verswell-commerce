import { SWELL_GRAPHQL_API_ENDPOINT } from 'lib/constants';
import { getProductQuery, getProductsQuery } from './queries/product';
import { SwellProduct } from './types';

const domain = `https://${process.env.SWELL_STORE_ID!}.swell.store`;
const endpoint = `${domain}${SWELL_GRAPHQL_API_ENDPOINT}`;
const key = process.env.SWELL_STOREFRONT_PUBLIC_KEY!;

type ExtractVariables<T> = T extends { variables: object } ? T['variables'] : never;

export async function swellFetch<T>({
  query,
  variables,
  headers,
  cache = 'no-cache'
}: {
  query: string;
  variables?: any; // TODO: Type this
  headers?: HeadersInit;
  cache?: RequestCache;
}): Promise<{ data: any; errors: T } | never> {
  //TODO: type this
  try {
    const result = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: key,
        ...headers
      },
      body: JSON.stringify({
        ...(query && { query }),
        ...(variables && { variables })
      }),
      cache,
      next: { revalidate: 900 } // 15 minutes
    });

    const body = await result.json();

    if (body.error) {
      throw body.error;
    }

    return body;
  } catch (e) {
    throw {
      error: e
    };
  }
}

export async function getProduct(slug: string): Promise<SwellProduct | undefined> {
  const res = await swellFetch({
    query: getProductQuery,
    variables: {
      slug
    }
  });

  return res.data.productBySlug;
}

export async function getProducts({
  query,
  sort
}: {
  query?: string;
  sort?: string;
}): Promise<SwellProduct[]> {
  const res = await swellFetch({
    query: getProductsQuery,
    variables: {
      query,
      sort
    }
  });

  return res.data.products;
}
