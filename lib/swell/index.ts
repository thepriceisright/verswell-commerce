// export async function swellFetch({
//     query: string,
//     variables,
//     headers,
//     cache = 'force-cache'
// }) : {

// }

import { SWELL_GRAPHQL_API_ENDPOINT } from 'lib/constants';
import { getCategoryProductsQuery } from './queries/category';


const domain = `https://${process.env.SWELL_STORE_ID!}.swell.store`;
const endpoint = `${domain}${SWELL_GRAPHQL_API_ENDPOINT}`;
const key = process.env.SWELL_STOREFRONT_PUBLIC_KEY!;

type ExtractVariables<T> = T extends { variables: object } ? T['variables'] : never;

export async function swellFetch<T>(
    {
        query,
        variables,
        headers,
        cache = 'no-cache'
    }: {
        query: string,
        variables?: any, // TODO: Type this
        headers?: HeadersInit,
        cache?: RequestCache
    }): Promise<{data: any; errors: T} | never> //TODO: type this
   {
    try {
        const result = await fetch(endpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': key,
                ...headers
            },
            body: JSON.stringify({
                ...(query && { query }),
                ...(variables && { variables })
            }),
            cache,
            next: { revalidate: 900 } // 15 minutes
        })

        const body = await result.json();

        if (body.error){
            throw body.error
        }

        return body
    } catch (e) {
        throw {
            error:e 
        }
    }
}

export async function getCategoryProducts(slug: string) { //TODO: Type the return type
    const res = await swellFetch({
        query: getCategoryProductsQuery,
        variables: {
            slug
        }}
    )

    if(res.errors) {
        console.log(`Error when retrieving the collection: ${slug}`);
        return []
    }

    // Category retrieved
    
    return(res.data.categoryBySlug.products)
}