import productFragment from '../fragments/product';

export const getProductQuery = /* GraphQL */ `
  query getProduct($slug: String!) {
    productBySlug(slug: $slug) {
      ...product
    }
  }
  ${productFragment}
`;

export const getProductsQuery = /* GraphQL */ `
  query getProducts($sort: String, $query: String) {
    products(sort: $sort, search: $query) {
      results {
        ...product
      }
    }
  }
  ${productFragment}
`;
