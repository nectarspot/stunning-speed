import * as React from "react"

import { Layout } from "../components/layout"
import { Banner } from "../components/banner"
import { TopCategories } from "../components/top-categories"
import { CtaImage } from "../components/cta-image"
import { Puppy } from "../components/puppy"
import { Brands } from "../components/brands"
import { Story } from "../components/our-story"
import { Support } from "../components/support"

import { layoutwrapper } from "../pages/index.module.css"


export default function IndexPage( ) {
  return (
    <Layout>
    <div className={layoutwrapper}>
    <Banner />
    <TopCategories />
    <CtaImage />
    <Puppy />
    <Brands />
    <Story />
    </div>
    <Support />
    </Layout>
  )
}
