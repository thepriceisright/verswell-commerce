
export const getProductsQuery = /* GraphQL */ `
query getProducts {
	products {
        results {
        id
        name
            categories { 
                topId
                name
                parentId
            }
        }
  }
}
`

// TODO: Product Fragment

