import React from 'react'
import { ctawrapper } from "./ctaimage.module.css"
import { Link } from 'gatsby'
import { StaticImage } from "gatsby-plugin-image"

export function CtaImage() {

    return( 
       <div>
       <div className={ctawrapper}>
            <Link to={`/products/`}>
                <StaticImage
                src="https://cdn.shopify.com/s/files/1/0075/8995/3587/files/tea2.png?v=1627561879"
                alt="value pet meds" />
            </Link>
        </div>
        </div>
    ) }