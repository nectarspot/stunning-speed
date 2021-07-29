require("dotenv").config()

module.exports = {
  siteMetadata: {
    siteTitle: "NectarSpot Demo Store",
    siteTitleDefault: "gatsby-shopify by @NectarSpot Inc",
    siteUrl: "https://valuepetmeds.netlify.app/",
    hrefLang: "en",
    siteDescription:
      "A Gatsby shopify headless demo by NectarSpot Inc ",
    siteImage: "/default-og-image.jpg",
    twitter: "@nectarspot",
  },
  flags: {
    FAST_DEV: true,
  },
  plugins: [
    {
      resolve: "gatsby-source-shopify",
      options: {
        password: process.env.SHOPIFY_SHOP_PASSWORD,
        storeUrl: process.env.GATSBY_SHOPIFY_STORE_URL,
        shopifyConnections: ["collections"],
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
  ].filter(Boolean),
}
