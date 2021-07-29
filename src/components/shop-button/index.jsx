import * as React from "react"
import { Link } from "gatsby"
import { shopButton } from "./shop-button.module.css"

export function ShopButton({ className, ...props }) {
  return <Link className={[className, shopButton].join(" ")} {...props} />
}
