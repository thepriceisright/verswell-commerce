export const getCategoryProductsQuery = /* GraphQL */ `
query getCategories($slug: String!) {
	categoryBySlug(slug: $slug){
        name
        products {
            name
            slug
            images {
                id
                file {
                    url
                }
            }
            price
        }
    }
}
`;