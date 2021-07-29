import React from 'react'
import { topcategories , image , h6category ,heading} from "./categories.module.css"
import { ShopButton } from "../shop-button"
import { Link } from 'gatsby'
import { StaticImage } from "gatsby-plugin-image"

export function TopCategories() {

  return (
      <div>
       <h1 className={heading}>Top Categories</h1>
   <div className={topcategories}>
        
        <div className={image}>
            <StaticImage
            height={225}
            
            src="https://cdn.shopify.com/s/files/1/0075/8995/3587/products/HG-Plus-Dog-up-to-51-100-lbs-6-Pack_df5daf5d-cda1-4962-abc7-8c1f751f267a_large.jpg?v=1554310531"
            alt="heartworm-preventative" />
            <p className={h6category}>
            <Link to={`/products/heartworm-preventative/`}>
            Heartworm
            </Link>
            </p>
            <ShopButton to={`/products/heartworm-preventative/`}>
            SHOP
            </ShopButton>
        </div>
        <div className={image}>
            <StaticImage
            height={225}
            
            src="https://cdn.shopify.com/s/files/1/0075/8995/3587/products/800x600-FL-gold-5-22lbs-3-pack_0fd15f20-4c9d-48ae-bad5-94a053b883ba_large.jpg?v=1561107700"
            alt="flea-and-tick" />
            <p className={h6category}>
            <Link to={`/products/flea-and-tick/`}>
            Flea & Tick
            </Link>
            </p>
            <ShopButton to={`/products/flea-and-tick/`}>
            SHOP
            </ShopButton>
        </div>
        <div className={image}>
            <StaticImage
            height={225}
            
            src="https://cdn.shopify.com/s/files/1/0075/8995/3587/files/Apoquel.png?4339"
            alt="allergy" />
            <p className={h6category}>
            <Link to={`/products/allergy/`}>
            Allergy
            </Link>
            </p>
            <ShopButton to={`/products/allergy/`}>
            SHOP
            </ShopButton>
        </div>
        <div className={image}>
            <StaticImage
            height={225}
            
            src="https://cdn.shopify.com/s/files/1/0075/8995/3587/products/00030111542571C_CF_e92fa1be-723d-43aa-94bc-5cec7582adfd_large.jpg?v=1561107778"
            alt="food" />        
            <p className={h6category}>
            <Link to={`/search?q=food`}>
            Food
            </Link>
            </p>
            <ShopButton to={`/search?q=food`}>
            SHOP
            </ShopButton>
        </div>
   </div>
   </div>
  );
}