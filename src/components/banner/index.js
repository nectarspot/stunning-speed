import React from 'react'
import { bannerwrapper ,mainTitle ,mobileShow} from "./banner.module.css"
import { ShopButton } from "../shop-button"
import { StaticImage } from "gatsby-plugin-image"

export function Banner() {

    return( 
       <div>
       <div className={bannerwrapper}>
            
            <div>
                <StaticImage
                src="https://cdn.shopify.com/s/files/1/0075/8995/3587/files/dog_1920x810_f590bc91-d6a3-45b3-9be7-01b21a9178bb.jpg?v=1626174111"
                alt="value pet meds" />
            </div>
            <div className={mainTitle}>         
                <h1>The Best Products <br/>
                at <br/>
                The Best Prices</h1>
                <ShopButton to={`/products`}>
                SHOP
                </ShopButton>
            </div>
           
        </div>

        <div className={mobileShow}>
        <StaticImage
                src="https://cdn.shopify.com/s/files/1/0075/8995/3587/files/mobile-banner-updated_5f10d70a-f893-4e3c-899f-b753da601893.jpg?v=1556555594"
                alt="value pet meds" />
        </div>
        </div>
    ) }