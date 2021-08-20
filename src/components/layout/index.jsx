import * as React from "react"
import { SkipNavContent, SkipNavLink } from "../skip-nav"
import { Header } from "../header"
import { Footer } from "../footer"
import { Seo } from "../seo"
import Offer from "../offer"


export function Layout({ children }) {
  return (
    <div>
      <Seo />
      <SkipNavLink />
      <Offer />
      <Header />
      <SkipNavContent>{children}</SkipNavContent>
      <Footer />
    </div>
  )
}
