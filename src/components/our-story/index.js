import React from 'react'
import { storywrapper ,mainpara ,heading ,button} from "./story.module.css"
import { ShopButton } from "../shop-button"
import { StaticImage } from "gatsby-plugin-image"

export function Story() {

    return( 
        <div>
        <h1 className={heading}>Our Story</h1>
       <div className={storywrapper}>
            <div>
                <StaticImage 
                src="https://cdn.shopify.com/s/files/1/0075/8995/3587/files/VPM-TEAM.png?v=1556095782"
                alt="value pet meds" />
            </div>
            <div >         
                <p className={mainpara}>
                Welcome to Value Pet Meds! With a staff of experienced veterinarians on our team, 
                our passion for pets and their needs means that we provide our customers with nothing 
                but the highest quality of products that are guaranteed to meet their needs and keep them satisfied. 
                We understand that budgeting for your pet's needs is important to you and our goal is to bring you the 
                best products at the best prices, period.
                </p>
                <ShopButton className={button} to={`/products`}>
                READ MORE
                </ShopButton>
            </div>
        </div>
        </div>
    ) }