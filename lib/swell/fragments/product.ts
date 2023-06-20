const productFragment = /* GraphQL */ `
  fragment product on SwellProduct {
    id
    currency
    slug
    stockPurchasable
    name
    description
    options {
      name
      id
      description
      values {
        id
        name
        price
      }
    }
    price
    variants {
      results {
        id
        name
        sku
        prices {
          price
          discountPercent
        }
        optionValueIds
        # purchaseOptions {
        #   standard {
        #     price
        #     sale
        #     salePrice
        #     prices {
        #       price
        #       discountPercent
        #     }
        #   }
        # }
        stockLevel
        currency
      }
    }
    images {
      file {
        url
        width
        height
      }
      caption
    }
    metaTitle
    metaDescription
    tags
  }
`;

export default productFragment;
