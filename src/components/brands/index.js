import React from 'react'
import { brands ,heading , image} from "./brand.module.css"
import { Link } from 'gatsby'
import { StaticImage } from "gatsby-plugin-image"

export function Brands() {
  return ( 
      <div>
      <h1 className={heading}>Brands</h1>
      <div className={brands}>
          <div className={image}>
            <Link to={`/search?t=Frontline`}>
              <StaticImage 
              src="https://cdn.shopify.com/s/files/1/0075/8995/3587/files/frontline.png?v=1554375542"
              alt="" />
            </Link>
          </div>
          <div className={image}>
            <Link to={`/search?q=bravecto`}>
              <StaticImage 
              src="https://cdn.shopify.com/s/files/1/0075/8995/3587/files/bravecto.png?v=1554375572"
              alt="" />
            </Link>
          </div>
          <div className={image}>
            <Link to={`/search?q=royal%20canin`}>
              <StaticImage 
              src="https://cdn.shopify.com/s/files/1/0075/8995/3587/files/royal-canin.png?v=1554375557"
              alt="" />
            </Link>
          </div>
          <div className={image}>
            <Link to={`/search?q=revolution%20plus`}>
              <StaticImage 
              src="https://cdn.shopify.com/s/files/1/0075/8995/3587/files/revolution_logo.png?v=1554375597"
              alt="" />
            </Link>
          </div>
      </div>
      </div>
  ) }