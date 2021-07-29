import * as React from "react"
import { graphql } from "gatsby"
import { Layout } from "../../../components/layout"
import { ProductListing } from "../../../components/product-listing"
import { Seo } from "../../../components/seo"
import slugify from "@sindresorhus/slugify"
import { ShopButton } from "../../../components/shop-button"
import { title } from "../index.module.css"

export default function ProductTypeIndex({
  data: { products },
  pageContext: { productType },
}) {
  return (
    <Layout>
      <Seo title={`Category: ${productType}`} />
      <h1 className={title}>{productType}</h1>
      <ProductListing products={products.nodes} />
      {products.pageInfo.hasNextPage && (
        <ShopButton to={`/search?p=${slugify(productType)}#more`}>
          More Products
        </ShopButton>
      )}
    </Layout>
  )
}

export const query = graphql`
  query($productType: String!) {
    products: allShopifyProduct(
      filter: { productType: { eq: $productType } }
      sort: { fields: publishedAt, order: ASC }
      limit: 12
    ) {
      nodes {
        ...ProductCard
      }
      pageInfo {
        hasNextPage
      }
    }
  }
`
